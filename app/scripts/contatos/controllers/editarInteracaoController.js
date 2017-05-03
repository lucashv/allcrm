(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('ModalEditarInteracao', ModalEditarInteracao);

  ModalEditarInteracao.$inject = [
    '$scope',
    '$state',
    'SituacoesInteracoesService',
    '$modal',
    '$modalInstance',
    'interacao',
    'InteracoesService',
    'toastr'
  ];


  function ModalEditarInteracao(
    $scope,
    $state,
    SituacoesInteracoesService,
    $modal,
    $modalInstance,
    interacao,
    InteracoesService,
    toastr
  ) {



    $scope.loadingInteracoes = SituacoesInteracoesService.query().then(function(data) {
      $scope.situacaoList = data._embedded.situacoes_interacoes;
    });

    $scope.interacao = interacao;

    $scope.cancel = function() {
      $modalInstance.dismiss('cancel');
    };

    $scope.atualizarInteracao = function(interacao) {
      InteracoesService.update(interacao).then(function(success) {
        $modalInstance.dismiss('cancel');
        toastr.info('Interação atualizado com successo');
        $state.reload();
      }, function(error) {

      });

    };
  }

})();
