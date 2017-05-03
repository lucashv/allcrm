(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('CategoriaChamadoController', CategoriaChamadoController);

  CategoriaChamadoController.$inject = ['CategoriaChamadoService'];

  function CategoriaChamadoController(CategoriaChamadoService) {

    var vm = this;
    _init();

    function _init() {
      _getCategoriasChamado();

    }

    function _getCategoriasChamado() {
      CategoriaChamadoService
        .getCategoriaChamadosCache()
        .then(function(categorias) {
          vm.categorias = categorias._embedded.categoria_chamado;
        }, function(erro) {
          console.log(erro);
        });
    }
  }
})();
