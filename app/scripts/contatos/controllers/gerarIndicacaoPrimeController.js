(function() {
  'use strict';
  angular.module('minovateApp').
  controller('ModalGerarIndicacaoPrimeController', ModalGerarIndicacaoPrimeController);

  ModalGerarIndicacaoPrimeController.$inject = [
    '$scope',
    '$uibModalInstance',
    'Interacoes',
    'Contato',
    'InteracoesService',
    'ContatosService',
    'StorageService',
    '$moment',
    'toastr',
    'ProdutosService'
  ];

  function ModalGerarIndicacaoPrimeController(
    $scope,
    $uibModalInstance,
    Interacoes,
    Contato,
    InteracoesService,
    ContatosService,
    StorageService,
    $moment,
    toastr,
    ProdutosService
  ) {

    $scope.contato = {};
    $scope.produtosInteresse = [];
    $scope.interacao = {};
    $scope.format = 'dd/MM/yyyy';
    $scope.mostrarCalendario = {
      opened: false
    };
    $scope.dateOptions = {
      formatYear: 'yyyy',
      'class': 'datepicker'
    };

    var parametro = {
      categoriaProdutoId: 3
    };
    ProdutosService.getProdutos(parametro)
      .then(function(produtos) {
        $scope.produtos = produtos._embedded.produtos;
      }, function(erro) {
        console.log(erro);
      });

    $scope.abrirCalendario = function() {
      $scope.mostrarCalendario.opened = true;
    };


    function montaIndicacaoPrime(interacao) {

      var data = typeof interacao.dataObs != 'undefined' ? 'Entrar em contato em : ' + moment(interacao.dataObs).format('DD/MM/YYYY') + '-' : '';
      var observacao = 'Indicação Interna p/ Prime Broker.';
      var observacaoInteracao = typeof interacao.observacao != 'undefined' ? interacao.observacao : '';

      observacao = observacao + '\n' + data + '\n' + observacaoInteracao;

      var novaInteracao = {
        idContato: Contato.contatoId,
        idUsuarioCad: StorageService.getKey('id'),
        origemTipo: "outras",
        observacao: observacao,
        enviarEmail: true,
        situacao: 1,
        enviarPara : 'seguro',
        origem: {
          id: 18
        } // Indicaçao Interna
      };
      return novaInteracao;
    }


    $scope.enviarPrime = function(interacao, produtosInteresse) {
      var interacao = montaIndicacaoPrime(interacao);
      $scope.loadingInsertInteracao = InteracoesService.create(interacao)
        .then(function(success) {
          toastr.success('Contato enviado a Prime Broker com successo');
        }, function(error) {
          toastr.error('Erro ao criar interação:' + error);
        });

      $scope.loadContato = ContatosService
        .updatePprodutosContato(produtosContato(produtosInteresse))
        .then(function(success) {
          $uibModalInstance.close(interacao.idContato);

        }, function(error) {
          console.log(error);
        });



    };


    function produtosContato(produtosInteresse) {
      var produtoContato = {};
      var produtosContato = [];
      produtosInteresse.forEach(function(produto) {
        produtoContato = {
          produtoId: produto,
          contatoId: Contato.contatoId
        };
        produtosContato.push(produtoContato);
      });
      return produtosContato;
    };
    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };



  }
})();
