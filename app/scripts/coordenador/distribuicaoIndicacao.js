(function() {

  'use strict';
  angular.module('minovateApp')
    .controller('DistribuicaoIndicacao', DistribuicaoIndicacao);

  DistribuicaoIndicacao.$inject = [
    '$scope',
    'AclService',
    'CorretoresService',
    'StorageService',
    'toastr',
    '$state',
    'TiposEnviosService',
    'InteracoesService',
    '$filter',
    'AutorizacaoReposicaoService',
    'Interacoes'

  ];

  function DistribuicaoIndicacao(
    $scope,
    AclService,
    CorretoresService,
    StorageService,
    toastr,
    $state,
    TiposEnviosService,
    InteracoesService,
    $filter,
    AutorizacaoReposicaoService,
    Interacoes

  ) {
    AclService.validaPermisao(43);
    init();


    $scope.page = {
      title: 'Coordenador',
      subtitle: 'Distribuição de Indicação'
    };

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

    $scope.validaReposicao = function(contato, indice) {

      if (contato.corretor) {
        validaEnvioContatoCorretor(contato.corretor, contato.contatoId, indice);
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
              var mensagem = (reposicoesEmAberto > 1) ? ('Existem ' + reposicoesEmAberto + ' reposições a serem pagas para o(a) corretor(a) ' + contato.corretor.nome + ' ' + contato.corretor.sobre_nome) : ('Existe ' + reposicoesEmAberto + ' reposição a ser paga para o(a) corretor(a) ' + contato.corretor.nome + ' ' + contato.corretor.sobre_nome);
              toastr.info(mensagem);
              return;
            } else {
              toastr.info('Não existem reposições a serem pagas para o(a) corretor(a) ' + contato.corretor.nome + ' ' + contato.corretor.sobre_nome);
              contato.corretor = {};
            }

          }, function(error) {
            console.log(error);
          });
      }
    };


    function montaTabela(contatos) {
      contatos.forEach(function(contato) {
        contato.telefone = $filter('limitTo')(contato.telefone, 2);
        contato.email = contato.email ? 'fa fa-check text-success' : 'fa fa-times-circle text-danger';
        contato.empresa = contato.empresa ? 'PME' : 'PF';
        contato.origem = contato.site ? contato.site : contato.razaoSocialFornecedor ? contato.razaoSocialFornecedor : contato.tipoOutraOrigem ? contato.tipoOutraOrigem : 'Origem não informada!';
        contato.operadora = contato.operadora ? contato.operadora : 'Não Informado';
      });
    }

    $scope.getContatosSelecionados = function() {
      var myElements = $scope.displayedCollection;
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
      for (var i = contatos.length - 1; i >= 0; i--) {
        enviarContato(contatos[i], false);
      }
    };

    function montaInteracao(contato) {

      var situacaoInteracao = 2;

      var idPai = (contato.idInteracaoPai) ? contato.idInteracaoPai : contato.idInteracao;

      var interacao = {
        idInteracaoPai: idPai,
        idContato: contato.idContato,
        idUsuarioCad: StorageService.getKey('id'),
        idCorretor: contato.corretor.id,
        idOrigem: contato.idOrigemInteracao,
        origemTipo: contato.origemTipo,
        observacao: 'Distribuída pelo gestor ao corretor.',
        situacao: situacaoInteracao,
        idTipoEnvio: contato.tipoEnvio.id,
        obsTipoEnvio: contato.obsTipoEnvio,
        enviarEmail: true
      };

      return interacao;
    };

    function enviarContato(contato) {
      var interacao = montaInteracao(contato);
      $scope.loadingContatoEnviar = InteracoesService.create(interacao).then(function(success) {
        toastr.success('Contato enviado com successo.');
        if (contato.tipoEnvio.id == 20 && contato.corretor.reposicoes) {
          pagaReposicao(contato, contato.corretor.reposicoes.id);
        }
        _removeItem(contato);
      }, function(error) {
        toastr.error('Erro ao enviar contato: ' + angular.toJson(error));
      });

    };

    //remove do array que retorna da API e da view
   function _removeItem(row) {
      var index = $scope.displayedCollection.indexOf(row);
      if (index !== -1) {
        $scope.displayedCollection.splice(index, 1);
      }

    };

    function pagaReposicao(contato, reposicaoId) {

      var reposicao = {
        contatoPagamentoId: contato.idContato,
        usuarioPagamentoId: StorageService.getKey('id')
      };

      $scope.loadPagamentoReposicao = AutorizacaoReposicaoService
        .pagaReposicao(reposicao, reposicaoId)
        .then(function(res) {
          toastr.success('Foi paga uma reposição para o(a) corretor(a) ' +  contato.corretor.nome + ' ' + contato.corretor.sobre_nome);
          delete contato.corretor.reposicoes;
          _removeItem(contato);
        }, function(error) {
          console.log(error);
        });
    }



    function init() {
      $scope.loadCorretores = CorretoresService.getByParameter("filial", StorageService.getKey("idFilial"))
        .then(function(success) {
          $scope.corretores = success._embedded.corretores;
        });

      $scope.loadInteracoes = InteracoesService.getContatosDistruibuicaoGestor(StorageService.getKey("idFilial"))
      .then(function(success){
        $scope.displayedCollection = (success._embedded.interacoes);
        montaTabela($scope.displayedCollection);
      },function(erro){
        if(erro.status === 404) {
          toastr.info('Sem indicações para distribuição.');
        }
      });

      var tiposEnviosList = TiposEnviosService.getData();
      tiposEnviosList.then(function(success) {
        $scope.tiposEnvios = (success._embedded.tipos_envios);
      });
    }

  }

})();
