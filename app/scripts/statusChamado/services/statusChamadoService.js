(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('StatusChamadoService', StatusChamadoService);
  StatusChamadoService.$inject = ['RecursoStatusChamado', '$q', 'CacheService'];

  function StatusChamadoService(RecursoStatusChamado, $q, CacheService) {
    var service = {
      getStatusChamado: _getStatusChamado,
      getStatusChamadoCache: _getStatusChamadoCache
    };
    return service;

    function _getStatusChamado() {
      var deferred = $q.defer();
      RecursoStatusChamado.get(function(status) {
        deferred.resolve(status);
      }, function(erro) {
        deferred.reject(erro);
      });
      return deferred.promise;
    }

    function _getStatusChamadoCache() {
      if (CacheService.get('statusChamado')) {
        return CacheService.get('statusChamado');
      } else {
        CacheService.put('statusChamado', _getStatusChamado());
        return CacheService.get('statusChamado');;
      }
    }
  }
})();
