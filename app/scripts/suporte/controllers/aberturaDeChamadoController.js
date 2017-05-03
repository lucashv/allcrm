(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('AberturaChamadoController', ChamadoController);

  ChamadoController.$inject = [
    '$scope',
    '$uibModalInstance',
    'ChamadoService',
    'StorageService',
    'toastr'
  ];

  function ChamadoController(
    $scope,
    $uibModalInstance,
    ChamadoService,
    StorageService,
    toastr
  ) {
    var vm = this;
    vm.salvar = salvar;
    vm.cancelar = cancelar;

    function salvar(chamado) {


      console.log(chamado);


      chamado.usuarioCadastro = StorageService.getKey('id');
      vm.loadChamado = ChamadoService
        .cadastrar(chamado)
        .then(function(resultado) {
          toastr.success(resultado.mensagem);
          $uibModalInstance.close();
        }, function(erro) {
          toastr.error(erro.mensagem);
          console.log(erro);

        });

    }

    function cancelar() {
      $uibModalInstance.dismiss('cancelar');
    }

    $scope.$on('modal.closing', function(event, reason, closed) {
      if (reason == 'backdrop click') {
        event.preventDefault();
      }
    });




  }

})();
