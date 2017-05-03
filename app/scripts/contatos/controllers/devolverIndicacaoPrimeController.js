(function() {
  'use strict';
  angular.module('minovateApp').
  controller('ModalDevolverIndicacaoPrimeController', ModalDevolverIndicacaoPrimeController);

  ModalDevolverIndicacaoPrimeController.$inject = [
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

  function ModalDevolverIndicacaoPrimeController(
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

    function devolverLead(interacao) {

      interacao.status = 23; // devolucao

    }



  }
})();
