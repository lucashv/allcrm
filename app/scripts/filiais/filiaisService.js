(function() {
  'use strict';

  angular.module('minovateApp')
    .factory('FiliaisService', FiliaisService);

  FiliaisService.$inject = [
    '$resource',
    '$q',
    'ApiUrlService',
    'StorageService',
    '$cacheFactory'
  ];

  function FiliaisService(
    $resource,
    $q,
    ApiUrlService,
    StorageService,
    $cacheFactory
  ) {
    var cache = $cacheFactory('FiliaisService');



    this.getFiliais = function(email) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/filiais")
        .get()
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;
    };
    return this;
  }
})();
