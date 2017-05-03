(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('UserCtrl', UserCtrl);


  UserCtrl.$inject = ['$state', 'StorageService', 'RecursoModalSuporte'];

  function UserCtrl($state, StorageService, RecursoModalSuporte) {
    var vm = this;
    vm.user = {
      nome: StorageService.getKey('nome') + " " + StorageService.getKey('sobreNome'),
      perfilLogado: StorageService.getKey('perfil'),
      perfilId : StorageService.getKey('idPerfil')
    };
    vm.mostraSuporte = false;
    vm.logout = logout;
    _mostraSuporte();
    vm.exibeChangeLog = exibeChangeLog;
    vm.suporte = suporte;




    function exibeChangeLog() {
      $state.go('app.info.changelog');
    }

    function logout() {
      StorageService.removeAll();
      //document.cookie = "authCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
      $state.go('core.login');
    }

    function _mostraSuporte(){
      if(vm.user.perfilId == "1"){
        vm.mostraSuporte = true;
        return;
      }
      return;
    }

    function suporte() {
      RecursoModalSuporte.formularioAberturaDeChamado()
        .result
        .then(function() {

        }, function() {
          //função no fechamento da modal.
        });

    }

  }
})();
