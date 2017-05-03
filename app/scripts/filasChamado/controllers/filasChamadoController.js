(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('FilasChamadoController', FilasChamadoController);
  FilasChamadoController.$inject = ['FilaChamadoService'];

  function FilasChamadoController(FilaChamadoService) {
    var vm = this;

    _init();

    function _init() {
      _getFilasChamado();
    }

    function _getFilasChamado() {
      vm.loadFilaChamado = FilaChamadoService
        .getFilaCache()
        .then(function(filasChamado) {
          vm.filasChamado = filasChamado._embedded.fila_chamado;
        }, function(erro) {
          console.log(erro);
        });
    }

  }
})();
