(function() {
  'use strict';

  angular.module('minovateApp')
    .factory('EnviaEmailService', EnviaEmailService);

  EnviaEmailService.$inject = ['$resource', '$q', 'ApiUrlService', 'StorageService'];

  function EnviaEmailService($resource, $q, ApiUrlService, StorageService) {

    this.create = function(email) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/envio-emails/:id")
        .save(email)
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
