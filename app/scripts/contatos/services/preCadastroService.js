(function() {
  'use strict';

  angular.module('minovateApp')
    .factory('PreCadastroService', PreCadastroService);

  PreCadastroService.$inject = ['$resource', '$q', 'ApiUrlService', '$cacheFactory'];

  function PreCadastroService($resource, $q, ApiUrlService, $cacheFactory) {

    var cache = $cacheFactory('PreCadastroService');

    this.get = function() {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/pre-cadastro")
        .get()
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;
    };


    this.update = function(preContato) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/pre-cadastro/:id", {
          id: preContato.id
        }, {
          save: {
            method: 'PUT'
          }
        })
        .save(preContato)
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
