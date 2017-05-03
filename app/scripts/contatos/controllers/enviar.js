(function() {

  'use strict';

  /**
   * @ngdoc function
   * @name minovateApp.controller:ContatosEnviarCtrl
   * @description
   * # ContatosEnviarCtrl
   * Controller of the minovateApp
   */
  angular.module('minovateApp')
    .controller('ContatosEnviarCtrl', ContatosEnviarCtrl);

  ContatosEnviarCtrl.$inject = [
    '$scope',
    '$filter',
    '$uibModal',
    '$log',
    '$element',
    '$location',
    'ContatosService',
    'CorretoresService',
    'StorageService',
    '$state',
    'toastr',
    'InteracoesService',
    'TiposEnviosService',
    'EmailErrorsService',
    'AclService',
    'AutorizacaoReposicaoService',
    'RecursoAutorizacaoReposicao',
    'Interacoes'

  ];

  function ContatosEnviarCtrl(
    $scope,
    $filter,
    $uibModal,
    $log,
    $element,
    $location,
    ContatosService,
    CorretoresService,
    StorageService,
    $state,
    toastr,
    InteracoesService,
    TiposEnviosService,
    EmailErrorsService,
    AclService,
    AutorizacaoReposicaoService,
    RecursoAutorizacaoReposicao,
    Interacoes

  ) {

    var idModulo = 2;
    AclService.validaPermisao(idModulo);
    $scope.contatosEnviar = [];
    $scope.itemsByPage = 10;
    $scope.tamanhoArray = 0;

    function montaTabela(contatos) {
      contatos.forEach(function(contato) {
        contato.telefone = $filter('limitTo')(contato.telefone, 2);
        contato.email = contato.email ? 'fa fa-check text-success' : 'fa fa-times-circle text-danger';
        contato.empresa = contato.empresa ? 'PME' : 'PF';
        contato.origem = contato.site ? contato.site : contato.razaoSocialFornecedor ? contato.razaoSocialFornecedor : contato.tipoOutraOrigem ? contato.tipoOutraOrigem : 'Origem não informada!';
        contato.operadora = contato.operadora ? contato.operadora : 'Não Informado';
      });
    }

    $scope.filtrar = function(exibeContatosChat) {
      if (exibeContatosChat) {

        $scope.displayedCollection = angular.copy($scope.contatosEnviar.filter(function(contato) {
          return contato.idOrigem != 123;
        }));
      } else {
        $scope.displayedCollection = angular.copy($scope.contatosEnviar);
      }
    }

    $scope.carregaTable = function() {

      $scope.loadingContatoEnviar = ContatosService.query().then(function(response) {

        $scope.contatosEnviar = response._embedded.contatos;
        montaTabela($scope.contatosEnviar);
        $scope.tamanhoArray = $scope.contatosEnviar.length;


        if ($scope.contatosEnviar.length <= 0) {
          toastr.info('Não existem contatos para envio');
          return;
        }
      }, function(error) {
        toastr.error('Erro ao carregar contatos:');
      });
    };

    function validaGestor(usuario,indice){

      if(usuario.perfil_id != 9){
        toastr.info('Este usuário não possui perfil de gestor');
        $scope.contatosEnviar[indice].tipoEnvio = {};
        return false;
      }
      return true;
    }

    function validaEnvioContatoCorretor(corretor, contatoId, indice) {
      InteracoesService
        .getByContatoId(contatoId).then(function(interacoes) {
          if (Interacoes.jaEnviadoCorretor(interacoes._embedded.interacoes, corretor.id)) {
            toastr.info('Este contato já foi enviado para o corretor ' + corretor.nomeCorretor);
            $scope.contatosEnviar[indice].corretor = {};
          }
        }, function(erro) {
          console.log(erro);
        });

    }
    // futuramente essa função não se chamará validaReposição pois vai fazer mais
    $scope.validaReposicao = function(contato, indice) {

      if(contato.tipoEnvio.id == 25) {
          validaGestor(contato.corretor,indice);
      }


      if (contato.corretor) {
        validaEnvioContatoCorretor(contato.corretor, contato.contatoId, indice);
      }

      if (contato.corretor.reposicoes) {
        return;
      }

      if (contato.tipoEnvio.id == 20 && contato.corretor) {

        var parametro = {
          corretorId: contato.corretor.id,
          situacao: 'pendentes',
          reposicaoAutorizada: 1
        };
        AutorizacaoReposicaoService
          .get(parametro)
          .then(function(reposicoes) {

            if (reposicoes.total_items) {
              var reposicoesEmAberto = reposicoes.total_items;
              contato.corretor.reposicoes = reposicoes._embedded.autorizacao_reposicao[0];
              var mensagem = (reposicoesEmAberto > 1) ? ('Existem ' + reposicoesEmAberto + ' reposições a serem pagas para o(a) corretor(a) ' + contato.corretor.nomeCorretor) : ('Existe ' + reposicoesEmAberto + ' reposição a ser paga para o(a) corretor(a) ' + contato.corretor.nomeCorretor);
              toastr.info(mensagem);
              return;
            } else {
              toastr.info('Não existem reposições a serem pagas para o(a) corretor(a) ' + contato.corretor.nomeCorretor);
              contato.tipoEnvio = {};

            }

          }, function(error) {
            console.log(error);
          });
      }
    };


    $scope.getContatosSelecionados = function() {
      var myElements = $scope.contatosEnviar;
      var contatosSelecionados = [];
      for (var i = myElements.length - 1; i >= 0; i--) {
        if (myElements[i].isSelected) {
          var contato = myElements[i];
          contatosSelecionados.push(contato);
        }
      }
      return contatosSelecionados;
    };

    $scope.enviarMultiplosContatos = function() {
      var contatos = $scope.getContatosSelecionados();
      EmailErrorsService.empty();
      for (var i = contatos.length - 1; i >= 0; i--) {
        enviarContato(contatos[i], false);
      }
    };

    function pagaReposicao(contato, reposicaoId) {

      var reposicao = {
        contatoPagamentoId: contato.contatoId,
        usuarioPagamentoId: StorageService.getKey('id')
      };

      $scope.loadPagamentoReposicao = AutorizacaoReposicaoService
        .pagaReposicao(reposicao, reposicaoId)
        .then(function(res) {
          toastr.success('Foi paga uma reposição para o(a) corretor(a) ' + contato.corretor.nomeCorretor);
          delete contato.corretor.reposicoes;
          $scope.removeItem(contato);
        }, function(error) {
          console.log(error);
        });
    }

    function enviarContato(contato, recarregar) {


      var recarregar = typeof recarregar !== 'undefined' ? recarregar : true;
      var interacao = montaInteracao(contato);

      $scope.loadingContatoEnviar = InteracoesService.create(interacao).then(function(success) {
        toastr.success('Contato enviado com successo.');
        if (contato.tipoEnvio.id == 20 && contato.corretor.reposicoes) {
          pagaReposicao(contato, contato.corretor.reposicoes.id);
        }
        $scope.removeItem(contato);
        if (recarregar) {
          $state.reload();
        }

      }, function(error) {

        if (error.status === 555) {
          EmailErrorsService.set(contato);
          $scope.removeItem(contato);
          $scope.errosEnvioEmail = EmailErrorsService.get();
          $scope.showAviso = true;
          return;
        }
        toastr.error('Erro ao enviar contato: ' + angular.toJson(error));
      });

    };
    //remove do array que retorna da API e da view
    $scope.removeItem = function removeItem(row) {
      var index = $scope.contatosEnviar.indexOf(row);
      if (index !== -1) {
        $scope.contatosEnviar.splice(index, 1);
      }

    };

    $scope.acessar = function(idContato) {
      $scope.loadingAcesse = $state.go('app.contatos.detalhes', {
        id: idContato
      });
    };

    $scope.limparErros = function() {
      EmailErrorsService.empty();
      $scope.showAviso = false;
    };

    $scope.criarContato = function() {
      $state.go('app.contatos.new');
    };

    $scope.init = function() {

      $scope.page = {
        title: 'Contato',
        subtitle: 'Enviar Contato'
      };

      CorretoresService.getByParameter('todos').then(function(data) {
        $scope.corretores = data._embedded.corretores;
      });

      var tiposEnviosList = TiposEnviosService.getData();
      tiposEnviosList.then(function(success) {
        $scope.tiposEnvios = success._embedded.tipos_envios;
      });

      $scope.carregaTable();

    };

    $scope.init();

    function montaInteracao(contato) {

      var situacaoInteracao = 2;
      var observacaoIndicacao = 'Enviado ao corretor.';

      if(contato.tipoEnvio.id === 25){
        situacaoInteracao = 23;
        observacaoIndicacao = "Enviado ao gestor";
      }

      var idInteracaoPai = typeof contato.idInteracaoPai !== 'undefined' ? contato.idInteracaoPai : contato.idInteracaoContatoId;
      $scope.errosEnvioEmail = [];

      var interacao = {
        idInteracaoPai: contato.idInteracaoContatoId,
        idContato: contato.contatoId,
        idUsuarioCad: StorageService.getKey('id'),
        idCorretor: contato.corretor.id,
        idOrigem: contato.idOrigem,
        origemTipo: contato.origem,
        observacao: observacaoIndicacao,
        situacao: situacaoInteracao, // Enviado ao corretor.
        idTipoEnvio: contato.tipoEnvio.id,
        obsTipoEnvio: contato.obsTipoEnvio,
        enviarEmail: true
      };

      return interacao;
    };

  }

})();
