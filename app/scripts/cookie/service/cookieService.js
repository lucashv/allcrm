(function(){
  'use stric';
  angular.module('minovateApp')
  .factory('CookieService', CookieService);
  CookieService.$inject = ['$cookies'];
  function CookieService($cookies) {
    var service = {
      gravaCookie: _gravaCookie,
      gravaCookieInfinito: _gravaCookieInfinito,
      getCookie: _getCookie,
      removeCookie: _removeCookie,
    };
    return service;

    function _gravaCookie(nome, valor) {
      $cookies.putObject(nome, valor);
    }
    function _gravaCookieInfinito(nome, valor) {
      var dataExpiracao = new Date('3000-12-25');
      $cookies.putObject(nome, valor, {'expires' : dataExpiracao});
    }

    function _getCookie(nome) {
      return $cookies.getObject(nome);
    }
    function _removeCookie(nome) {
      $cookies.remove(nome);
    }

  }
})();
