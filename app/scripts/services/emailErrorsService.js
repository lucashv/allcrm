(function(){
  'use strict';
  angular.module('minovateApp')
    .factory('EmailErrorsService', EmailErrorsService);

    function EmailErrorsService() {

      var erros = [];

      this.setError = function(object) {
        erros.push(object);
        return;
      };

      this.getError = function() {
        return erros;
      };

      this.emptyErros =  function() {
        erros = [];
        return;
      };

      return {
        get : this.getError,
        set: this.setError,
        empty : this.emptyErros
      }

    }

})();
