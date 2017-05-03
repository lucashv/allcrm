(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('StatusChamadoController', StatusChamadoController);
  StatusChamadoController.$inject = ['StatusChamadoService'];

  function StatusChamadoController(StatusChamadoService) {
    var vm = this;
    _init();

    function _init() {
      _getStatus();
    }

    function _getStatus() {
      vm.loadStatus = StatusChamadoService
        .getStatusChamadoCache()
        .then(function(status) {
          vm.situacoes = status._embedded.status_chamado;
        }, function(erro) {
          console.log(erro);
        });
    }
  }
})();
