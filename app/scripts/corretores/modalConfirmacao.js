(function() {
  'use strict';
  angular.module('minovateApp').
  controller('ModalConfirmacaoController', ModalConfirmacaoController);

  ModalConfirmacaoController.$inject = [
    '$scope',
    '$uibModalInstance',
    'aviso'

  ];

  function ModalConfirmacaoController(
    $scope,
    $uibModalInstance,
    aviso

  ) {


    $scope.exibeObservacao = aviso.observacao;
    $scope.aviso = aviso;
    $scope.ok = function(observacao) {
      $uibModalInstance.close(observacao);
    };
    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

  }
})();
