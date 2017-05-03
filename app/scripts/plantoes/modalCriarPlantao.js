(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('ModalCriarPlantao', ModalCriarPlantao);
  ModalCriarPlantao.$inject = ['$scope', 'TiposPlantoesService', 'corretor', '$uibModalInstance', 'toastr', 'StorageService', 'PlantoesService', '$state'];

  function ModalCriarPlantao($scope, TiposPlantoesService, corretor, $uibModalInstance, toastr, StorageService, PlantoesService, $state) {


    $scope.loadingTiposPlantoes = TiposPlantoesService.getData();

    $scope.loadingTiposPlantoes.then(function(success) {
      $scope.tiposPlantoesList = success._embedded.tipos_plantoes;
    });

    $scope.showAlertPosicao = false;

    $scope.validaPosicao = function(posicao, plantao) {
      $scope.loadPosicao = PlantoesService.getPosicaoPlantao(posicao, plantao.id);
      $scope.loadPosicao.then(function(success) {
        $scope.posicaoRepeteida = success._embedded.plantoes;

        if (success._embedded.plantoes.length > 0) {
          $scope.showAlertPosicao = true;
          $scope.plantao.posicao = null;
        } else {
          $scope.showAlertPosicao = false;
        }


      });
    };


    $scope.corretor = corretor;

    $scope.cancel = function(plantao) {

      $uibModalInstance.dismiss('cancel');
    };

    $scope.salvar = function(corretor) {

      $scope.plantao.corretor = corretor;
      $scope.plantao.usuarioCadastro = StorageService.getKey('id');
      $scope.loadingSalvar = PlantoesService.create($scope.plantao);
      $scope.loadingSalvar.then(function(success) {

        toastr.success('Corretor adicionado ao plantão com successo.');
        $uibModalInstance.close($scope.plantao.tipo.tipo);

      }, function(error) {
        toastr.error('Erro ao adicionar corretor ao plantão.');
        $scope.cancel();
      });


    };

  }

})();
