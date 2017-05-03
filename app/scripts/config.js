(function() {
  'use strict';
  angular.module('minovateApp')
    .run(run);
  run.$inject = ['$rootScope', '$state', '$stateParams', 'StorageService', 'toastr', '$location'];

  function run($rootScope, $state, $stateParams, StorageService, toastr, $location) {

    $rootScope.$state = $state;
    var atualizaTempoCookie = function() {
      var secs = 3600;
      var now = new Date();
      var exp = new Date(now.getTime() + secs * 1000);
      document.cookie = 'authCookie=1; expires=' + exp.toUTCString();
      return;
    };

    var userIsAuth = function() {

      var isAuth = false;
      var idNaSessao = StorageService.getKey('id');

      if (idNaSessao !== null) {
        isAuth = true;
      }

      return isAuth;

    };

    var cookieIsSet = function() {
      var cookieIsSet = false;

      if (document.cookie.indexOf('authCookie=1') != -1) {
        cookieIsSet = true;
        atualizaTempoCookie();
      }
      return cookieIsSet;
    };

    $rootScope.$on('$stateChangeStart', function(event, next, nextParams, fromState) {

      if (next.controller != "LoginCtrl") {

        if (!userIsAuth()) {
          toastr.info("Usuário não autenticado, faça o login.");
          event.preventDefault();
          $state.transitionTo('core.login');
          return;
        }

        if (!cookieIsSet()) {
          toastr.info("Sessão expirada, faça o login novamente");
          event.preventDefault();
          $state.transitionTo('core.login');
        }

      }

    });


    $rootScope.$stateParams = $stateParams;
    $rootScope.$on('$stateChangeSuccess', function(event, toState) {

      if ($state.current.name !== "core.login") {
        var secs = 7200;
        var now = new Date();
        var exp = new Date(now.getTime() + secs * 1000);

        document.cookie = "ultimaRota=" + $state.current.name + ';expires=' + exp.toUTCString();;
      }


      event.targetScope.$watch('$viewContentLoaded', function() {

        angular.element('html, body, #content').animate({
          scrollTop: 0
        }, 200);

        setTimeout(function() {
          angular.element('#wrap').css('visibility', 'visible');

          if (!angular.element('.dropdown').hasClass('open')) {
            angular.element('.dropdown').find('>ul').slideUp();
          }
        }, 200);
      });
      $rootScope.containerClass = toState.containerClass;
    });


  }


})();
