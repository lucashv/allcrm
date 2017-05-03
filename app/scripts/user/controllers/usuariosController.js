(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('UsuariosController', UsuariosController);
  UsuariosController.$inject = ['UserService']

  function UsuariosController(UserService) {
    var vm = this;
    _init();

    function _init() {
      _getUsuarios();
    }

    function _getUsuarios() {
      vm.loadUsuarios = UserService
        .getUsuariosCache()
        .then(function(usuarios) {
          vm.usuarios = usuarios._embedded.usuarios;
        }, function(erro) {
          console.log(erro);
        });
    }
  }
})();
