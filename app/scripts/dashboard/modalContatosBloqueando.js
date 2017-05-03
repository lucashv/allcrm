(function() {
  'use strict';
  angular.module('minovateApp').
  controller('ModalContatosBloqueando', ModalContatosBloqueando);

  ModalContatosBloqueando.$inject = [
    '$scope',
    '$uibModalInstance',
    'listaContatoBloqueio'

  ];

  function ModalContatosBloqueando(
    $scope,
    $uibModalInstance,
    listaContatoBloqueio

  ) {

    $scope.listaContatoBloqueio = listaContatoBloqueio;
    $scope.totalContatos = listaContatoBloqueio.length;
    console.log(listaContatoBloqueio);

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

  }
})();
