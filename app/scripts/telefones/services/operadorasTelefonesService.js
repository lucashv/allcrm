(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('OperadorasTelefonesService', OperadorasTelefonesService);
  OperadorasTelefonesService.$inject = ['RecursoOperadorasTelefones', '$q'];

  function OperadorasTelefonesService(RecursoOperadorasTelefones, $q) {
    var service = {
      getOperadorasTelefone: _getOperadorasTelefone
    };
    return service;

    function _getOperadorasTelefone() {
      var deferred = $q.defer();
      RecursoOperadorasTelefones
        .get(function(operadoras) {
          deferred.resolve(operadoras);
        }, function(erro) {
          deferred.reject(erro);
        });

      return deferred.promise;
    }
  }
})();
