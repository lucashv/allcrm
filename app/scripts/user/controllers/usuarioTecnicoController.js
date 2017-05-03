(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('UsuarioTecnicoController', UsuarioTecnicoController);
  UsuarioTecnicoController.$inject = ['UserService'];

  function UsuarioTecnicoController(UserService) {
    var vm = this;
    _init();

    function _init() {
      var parametro = {
        usuariosTi: true
      };
      _getTecnicos(parametro);
    }

    function _getTecnicos(parametro) {
      vm.loadTecnicos = UserService
        .getTecnicosCache(parametro)
        .then(function(tecnicos) {
          vm.tecnicos = tecnicos._embedded.usuarios;
        }, function(erro) {
          console.log(erro);
        });
    }


  }
})();
