(function() {
  'use strict';

  angular.module('minovateApp')
    .factory('SitesService', SitesService);
  SitesService.$inject = ['$resource', 'ApiUrlService', '$cacheFactory', '$q'];

  function SitesService($resource, ApiUrlService, $cacheFactory, $q) {
    var cache = $cacheFactory('SitesService');
    var service = {
      getData: getData
    };
    return service;

    function query() {

      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/sites/:id")
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
      var q = 'sitesGetQuery';
      if (!cache.get(q)) {
        var data = query();
        cache.put(q, data);
        return data;
      } else {
        return cache.get(q);
      }
    }



  }

})();
