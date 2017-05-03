(function() {

  'use strict';
  angular.module('minovateApp')
    .controller('EnviarContatosPrimeController', EnviarContatosPrimeController);

  EnviarContatosPrimeController.$inject = [
    '$scope',
    '$uibModal',
    '$location',
    'ContatosService',
    'StorageService',
    '$state',
    'toastr',
    'InteracoesService',
    'EmailErrorsService',
    'AclService',
    'ContatosProdutosService'

  ];

  function EnviarContatosPrimeController(
    $scope,
    $uibModal,
    $location,
    ContatosService,
    StorageService,
    $state,
    toastr,
    InteracoesService,
    EmailErrorsService,
    AclService,
    ContatosProdutosService

  ) {

    var idModulo = 21;
    var filialValida = ((StorageService.getKey('idPerfil') == 1) ? 19 : StorageService.getKey('idFilial'));

    if (filialValida != 19) {
      $state.go('core.page-offline');
    }

    AclService.validaPermisao(idModulo);

    $scope.page = {
      title: 'Contato',
      subtitle: 'Contatos Seguro'
    };

    $scope.contatos = [];

    function carregaContatos() {

      $scope.loadingContatoEnviar = ContatosService.queryPrime().then(function(contatos) {
        $scope.contatos = contatos._embedded.contatos;
        if (contatos.total_items == 0) {
          toastr.info('Não existem contatos para envio');
          return;
        }
      }, function(error) {
        toastr.error('Erro ao carregar contatos:');
      });
    }



    var enviarContato = function(contato, recarregar) {


      var recarregar = typeof recarregar !== 'undefined' ? recarregar : true;
      var interacao = montaInteracao(contato);

      $scope.loadingContatoEnviar = InteracoesService.create(interacao).then(function(success) {
        toastr.success('Contato adicionado a sua lista com successo.');
        removeItem(contato);
        if (recarregar) {
          $state.reload();
        }
        return;
      }, function(error) {
        if (error.status === 555) {
          EmailErrorsService.set(contato);
          removeItem(contato);
          $scope.errosEnvioEmail = EmailErrorsService.get();
          $scope.showAviso = true;
          return;
        }
        toastr.error('Erro ao enviar contato: ' + angular.toJson(error));
      });
    };


    $scope.limparErros = function() {
      EmailErrorsService.empty();
      $scope.showAviso = false;
    };

    function montaInteracao(contato) {
      var idInteracaoPai = typeof contato.idInteracaoPai !== 'undefined' ? contato.idInteracaoPai : contato.idInteracaoContatoId;
      $scope.errosEnvioEmail = [];
      var interacao = {
        idInteracaoPai: contato.idInteracaoContatoId,
        idContato: contato.contatoId,
        idUsuarioCad: StorageService.getKey('id'),
        idCorretor: StorageService.getKey('id'),
        idOrigem: contato.idOrigem,
        origemTipo: contato.origem,
        observacao: 'Enviado ao corretor.',
        situacao: 2, // Enviado ao corretor.
        idTipoEnvio: 4,

        enviarEmail: true
      };
      return interacao;
    };

    //remove do array que retorna da API e da view
    var removeItem = function removeItem(row) {

      var index = $scope.contatos.indexOf(row);
      if (index !== -1) {
        $scope.contatos.splice(index, 1);
      }
    };

    $scope.adquirirContato = function(contato) {
      var aviso = {
        titulo: "Confirmação",
        mensagem: "Este contato será adicionado a sua lista de contatos!"
      };
      var modalInstance = $uibModal.open({
        templateUrl: '../../views/tmpl/corretores/modalConfirmacao.html',
        controller: 'ModalConfirmacaoController',
        size: 'sm',
        resolve: {
          aviso: function() {
            return aviso;
          }
        }
      });

      modalInstance.result.then(function(confirmacao) {

        enviarContato(contato);

      });
    };

    $scope.produtosContato = function(contato, aberto, indice) {

      var parametro = {
        contatoId: contato.contatoId
      };

      verificaOutroCorretorContato(contato.contatoId,indice);



      if (aberto && !contato.listaProdutos) {
        $scope.loadProdutosContato = ContatosProdutosService
          .contatosProdutos(parametro)
          .then(function(produtos) {

            if (!produtos.total_items) {
              $scope.contatos[indice].mensagem = 'Não foram informados os produtos de interesse do cliente.';
              $scope.contatos[indice].listaProdutos = true;
              return;
            }
            $scope.contatos[indice].contatosProdutos = produtos._embedded.contatos_produtos;
            $scope.contatos[indice].listaProdutos = true;

          }, function(erro) {
            console.log(erro);
          });
      }

    };

    function verificaOutroCorretorContato(idContato,indice) {

      var interacoes = InteracoesService.verificaCorretorSeguro(idContato);

      interacoes.then(function(success) {
        if(success._embedded.interacoes[0].retorno !== "0" ){
              toastr.info('Esse contato se encontra com outro corretor de seguros, selecione outro contato.');
              $scope.contatos.splice(indice,1);
              return;
        }
      }, function(erro){
         console.log(erro);
         return false;
      })
    }

    function _init() {
      carregaContatos();
    };

    _init();


  }

})();
