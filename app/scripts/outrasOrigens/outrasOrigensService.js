(function() {
  'use strict';

  angular.module('minovateApp')
    .factory('OutrasOrigensService', OutrasOrigensService);
  OutrasOrigensService.$inject = ['$resource', 'ApiUrlService', '$cacheFactory', '$q', 'RecursoOrigensInteracoes'];

  function OutrasOrigensService($resource, ApiUrlService, $cacheFactory, $q, RecursoOrigensInteracoes) {
    var cache = $cacheFactory('OutrasOrigensService');

    function query() {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/origens-interacoes/:id")
        .get()
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;
    }

    function getData() {
      var q = 'outrasOrigensCash';
      if (!cache.get(q)) {
        var data = query();
        cache.put(q, data);
        return data;
      } else {
        return cache.get(q);
      }
    }

    function _getIdInteracaoOrigem(parametro) {
      var deferred = $q.defer();
      RecursoOrigensInteracoes
        .get(parametro, function(resultado) {
          deferred.resolve(resultado);
        }, function(erro) {
          deferred.reject(erro);
        });
      return deferred.promise;
    }
    return {
      getData: getData,
      getIdInteracaoOrigem: _getIdInteracaoOrigem
    };


  }

})();
