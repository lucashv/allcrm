(function() {
  'use strict';

  angular.module('minovateApp')
    .factory('ChangeLogService', ChangeLogService);
  ChangeLogService.$inject = ['$resource', 'ApiUrlService', '$cacheFactory', '$q'];

  function ChangeLogService($resource, ApiUrlService, $cacheFactory, $q) {
    var cache = $cacheFactory('ChangeLogService');

    function query() {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/versoes/:id")
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
      var q = 'ChangeLogServiceGetQuery';
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
