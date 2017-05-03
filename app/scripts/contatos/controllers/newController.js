(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name minovateApp.controller:ContatosCtrl
   * @description
   * # ContatosCtrl
   * Controller of the minovateApp
   */
  angular.module('minovateApp')
    .controller('AdicionarContatosCtrl', AdicionarContatosCtrl);

  AdicionarContatosCtrl.$inject = [
    '$scope',
    '$filter',
    '$log',
    '$location',
    'ContatosService',
    'FornecedoresService',
    'SituacoesInteracoesService',
    'InteracoesService',
    'OutrasOrigensService',
    'SitesService',
    'StorageService',
    'toastr',
    'OperadoraService',
    '$state',
    'AclService',
    '$moment',
    'Interacoes',
    'RecursoModal',
    'ProdutosService'
  ];

  function AdicionarContatosCtrl(
    $scope,
    $filter,
    $log,
    $location,
    ContatosService,
    FornecedoresService,
    SituacoesInteracoesService,
    InteracoesService,
    OutrasOrigensService,
    SitesService,
    StorageService,
    toastr,
    OperadoraService,
    $state,
    AclService,
    $moment,
    Interacoes,
    RecursoModal,
    ProdutosService
  ) {

    var idModulo = 1;
    AclService.validaPermisao(idModulo);


    $scope.cadastroContato = true;
    $scope.telefones = [{
      identify: 'telefone'
    }];

    $scope.emails = [{
      identify: 'email'
    }];
    $scope.showAviso = false;
    $scope.enviarParaList = [{
      'id': 1,
      'Tipo': 'Saúde'
    }, {
      'id': 2,
      'Tipo': 'Odonto'
    }, {
      'id': 3,
      'Tipo': 'Seguro'
    }];
    $scope.contato = {};

    _init();

    function _init() {
      $scope.exiveProdutos = false;
      _getOrigens();
      _getFornecedores();
      _getSites();
      _getOperadoras();
    }

    $scope.enviarParaValidacao = function(tipo)
    {
        if(tipo.id === 3){
          _modalConfirmacaoSeguro();
        }
        $scope.exiveProdutos = false;
    }

    function _modalConfirmacaoSeguro()
    {
        var aviso = {
          titulo: 'Contato para Seguro.',
          mensagem: 'Este contato sera enviado para os corretores de seguro. Tem certeza?',
          observacao: false
        };

        RecursoModal.confirmacao(aviso).result
        .then(function(s) {
          $scope.exiveProdutos = true;
           _getProdutosSeguro();
        }, function(n) {
            $scope.contato.enviarPara = null;
        });
    }


    function  _getProdutosSeguro(){

      var parametro = {
        categoriaProdutoId: 3
      };

      ProdutosService.getProdutos(parametro)
        .then(function(produtos) {
          $scope.produtos = produtos._embedded.produtos;
        }, function(erro) {
          console.log(erro);
        });
    }

    function _getOrigens() {
      $scope.loadingForm = OutrasOrigensService
        .getData()
        .then(function(success) {
          $scope.outrasOrigensList = success._embedded.origens_interacoes;
        }, function(erro) {
          console.log(erro);
        });
    }

    function _getFornecedores() {
      $scope.loadingForm = FornecedoresService
        .getData()
        .then(function(success) {
          $scope.fornecedorList = success._embedded.fornecedores;
        }, function(erro) {
          console.log(erro);
        });
    }

    function _getSites() {
      $scope.loadingForm = SitesService
        .getData()
        .then(function(success) {
          $scope.sitesList = success._embedded.sites;
        }, function(erro) {
          console.log(erro);
        });
    }


    function _getOperadoras() {
      $scope.loadingForm = OperadoraService
        .getData()
        .then(function(data) {
          $scope.operadorasList = data._embedded.operadoras;
        }, function(erro) {
          console.log(erro);
        });
    }


    $scope.acessar = function(idContato) {
      $scope.loadingAcesse = $state.go('app.contatos.detalhes', {
        id: idContato
      });
    };

    $scope.addEmail = function() {
      var newItemNo = $scope.emails.length + 1;
      $scope.emails.push({
        'identify': 'email' + newItemNo
      });
    };

    $scope.addTel = function() {
      var newItemNo = $scope.telefones.length + 1;
      $scope.telefones.push({
        'identify': 'telefone' + newItemNo
      });
    };

    $scope.ocultaAviso = function() {
      $scope.showAviso = false;
    };
    $scope.ocultaAvisoInteracao = function() {
      $scope.tempoOciosoPainel = false;
    };

    function montaContato(contato, telefones, emails, operadoraId) {
      var novoContato = contato;
      novoContato.telefones = telefones;
      novoContato.enviarPara = contato.enviarPara.Tipo;
      novoContato.emails = emails;
      novoContato.situacao = 1
      novoContato.idUsuarioCad = StorageService.getKey('id');
      if (novoContato.origemTipo == 'chat') {
        novoContato.origemTipo = 'outras';
      }
      return novoContato;
    }

    $scope.salvaContato = function(contato, telefones, emails, formCadContato) {

      $scope.loadingForm = ContatosService
        .create(montaContato(contato, telefones, emails))
        .then(function(response) {

          if($scope.contato.enviarPara === "Seguro") {
            updateProdutosContato(contato.produtos, response.contato.id);
          }
            toastr.success('Contato salvo com sucesso.');
            resetForm(formCadContato);
          },
          function(error) {
            toastr.error('Erro ao salvar contato :');
            $scope.loginLoading = false;
          });
    };

    function updateProdutosContato(produtosInteresse, contatoId) {
      $scope.loadProdutosContato = ContatosService
        .updatePprodutosContato(montaArrayProdutosContato(produtosInteresse, contatoId))
        .then(function(success) {
            toastr.success('Produtos de interesse informados com sucesso.');
        }, function(error) {
          console.log(error);
        });
    }

    function montaArrayProdutosContato(produtosInteresse, contatoId) {
      var produtoContato = {};
      var produtosContato = [];
      produtosInteresse.forEach(function(produto) {
        produtoContato = {
          produtoId: produto,
          contatoId: contatoId
        };
        produtosContato.push(produtoContato);
      });
      return produtosContato;
    }

    $scope.removeEmail = function() {
      var lastItem = $scope.emails.length - 1;
      $scope.emails.splice(lastItem);
    };

    $scope.removeTel = function() {
      var lastItem = $scope.telefones.length - 1;
      $scope.telefones.splice(lastItem);
    };

    function resetForm(formCadContato) {
      $scope.contato = {};
      $scope.emails = [{
        identify: 'email'
      }];
      $scope.telefones = [{
        identify: 'telefone'
      }];
      formCadContato.$setPristine();
      formCadContato.$setUntouched();
    }

    $scope.validaDuplicidadeEmail = function(email, indiceEmail) {
      if (!!email) {
        ContatosService.getByParameter('email', email).then(function(success) {
          if (success.total_items > 0) {
            $scope.emails[indiceEmail - 1].email = null;
            visualizarInteracoesContato(success._embedded.contatos[0]);
          }
        }, function(error) {
          console.log(error);
        });
      }
    };

    $scope.validaDuplicidadeTelefone = function(telefone, indiceTelefone) {
      if (!!telefone) {
        ContatosService
          .getByParameter('telefone', telefone)
          .then(function(success) {
            if (success.total_items > 0) {
              $scope.telefones[indiceTelefone - 1].telefone = null;
              visualizarInteracoesContato(success._embedded.contatos[0]);
            }
          }, function(error) {
            console.log(error);
          });
      }
    };

    function encaminharContato(interacoes, ultimoEnvio, contatoRepetido) {
      RecursoModal.reentrada(Interacoes.enviadasAoCorretor(interacoes), ultimoEnvio, interacoes, contatoRepetido)
        .result
        .then(function() {
          $scope.voltarCadastro();
        }, function() {
          $scope.voltarCadastro();
        });

    };

    $scope.fecharAlertaInteracao = function() {
      $scope.alertaInteracaoCadastradaSemEnvio = '';
    }

    function verificaCadastroSemEnvio(interacoes) {

      var interacaoCadastradaSemEnvio = Interacoes.verificaCadastroSemEnvio(interacoes);
      if (interacaoCadastradaSemEnvio) {
        $scope.cadastradoSemEnvio = true;
        $scope.alertaInteracaoCadastradaSemEnvio = 'Esse contato já foi cadastrado novamente mas não foi enviado para um corretor de acordo com a regra das 24 horas.';
      }
    }

    function visualizarInteracoesContato(contatoRepetido) {

      $scope.loadingForm = InteracoesService.getByContatoId(contatoRepetido.id)
        .then(function(response) {
          var interacoes = response._embedded.interacoes;
          var tempoUltimoEnvio = Interacoes.tempoDesdeUltimoEnvio(response._embedded.interacoes);
          encaminharContato(interacoes, tempoUltimoEnvio, contatoRepetido);
        }, function(error) {
          toastr.error('Erro ao consultar dados do contato.');
        });

    };

    $scope.voltarCadastro = function() {

    };




  }

})();
