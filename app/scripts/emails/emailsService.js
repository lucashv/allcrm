(function() {
  'use strict';

  angular.module('minovateApp')
    .factory('EmailService', EmailService);
  EmailService.$inject = ['$resource', '$q', 'ApiUrlService', 'StorageService'];

  function EmailService($resource, $q, ApiUrlService, StorageService) {

    this.query = function() {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/emails-contato/:id")
        .get()
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;
    };

    this.create = function(emails, idContato) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/emails-contato/:id", null, {
          id: idContato
        }, {
          save: {
            method: 'PUT'
          }
        })
        .save(emails)
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;
    };

    this.new = function(emails) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/emails-contato", null, {
          save: {
            method: 'POST'
          }
        })
        .save(emails)
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;
    };

    this.update = function(emails, update) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/emails-contato/:update", {
          update: update
        }, {
          save: {
            method: 'PUT'
          }
        })
        .save(emails)
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;
    };

    this.getByIdContato = function(idContato) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/emails-contato/" + idContato)
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
