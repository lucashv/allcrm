(function() {
  'use strict';
  angular.module('minovateApp')
    .directive('filasChamado', filasChamado);

  function filasChamado() {
    var ddo = {
      restrict: 'AE',
      templateUrl: 'views/tmpl/diretivas/filasChamado.html',
      controller: FilaChamadoController,
      controllerAs: 'vm',
      bindToController: true
    };
    return ddo;
  }
  FilaChamadoController.$inject = ['FilaChamadoService'];
  function FilaChamadoController(FilaChamadoService) {
    var vm = this;
    FilaChamadoService
      .getFilaCache()
      .then(function(lista) {
        vm.filasChamado = lista;
      }, function(erro) {
        console.log(erro);
      });

  }
})();
