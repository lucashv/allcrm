(function() {
  'use strict';
  angular.module('APIInterceptor', [])
    .service('APIInterceptorService', APIInterceptorService);

  APIInterceptorService.$inject = ['StorageService', '$injector', '$location','AclService'];

  function APIInterceptorService(StorageService, $injector, $location, AclService) {

    var service = this;
    var state = null;
    var toastr = null;
    var redirectState = false;
    var redirectUser = false;
    var stateAtual = $location.path();

    var getState = function() {
      if (!state) {
        state = $injector.get('$state');
      }
      return state;
    };

    var toastr = function() {
      if (!toastr) {
        toastr = $injector.get('toastr');
      }
      return toastr;
    };


    service.request = function(config) {

      if(!stateIsLogin()){
        if(!userIsAuth()) {
          de("Usuário não autenticado, faça o login.");
          return config;
       }

       if(!cookieIsSet()) {
         de("Sessão expirada, faça o login novamente");
         return config;
       }

     } else {
       return config;
     }
      return config;
    };

    var userIsAuth = function() {

      var isAuth = false;
      var idNaSessao = StorageService.getKey('id');

      if(idNaSessao !== null && !stateIsLogin() ) {
        isAuth = true;
      }

      return isAuth;

    };

    var atualizaTempoCookie = function() {
      var secs = 3600;
      var now = new Date();
      var exp = new Date(now.getTime() + secs*1000);
      document.cookie = 'authCookie=1; expires='+exp.toUTCString();
      return;
    }

    var stateIsLogin = function() {
      var rota = false;

      if(  getState().current.url == '/login' ||  getState().current.url == '^' ){
          rota = true;
      }
      return rota;
    };

    var cookieIsSet = function() {
      var cookieIsSet = false;

      if(document.cookie.indexOf('authCookie=1') != -1) {
        cookieIsSet = true;
        atualizaTempoCookie();
      }
      return cookieIsSet;
    };

  }



})();
