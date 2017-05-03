(function() {
  'use strict';

  angular.module('minovateApp')
    .factory('FornecedoresService', FornecedoresService);
  FornecedoresService.$inject = ['$resource', 'ApiUrlService', '$cacheFactory', '$q'];

  function FornecedoresService($resource, ApiUrlService, $cacheFactory, $q) {
    var cache = $cacheFactory('FornecedoresService');

    function query() {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/fornecedores/:id")
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
      var q = 'forncedoresGetQuery';
      if (!cache.get(q)) {
        var data = query();
        cache.put(q, data);
        return data;
      } else {
        return cache.get(q);
      }
    }
    return {
      getData: getData
    };


  }

})();
