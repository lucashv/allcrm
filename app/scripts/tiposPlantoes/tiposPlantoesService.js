(function() {
  'use strict';


  angular.module('minovateApp')
    .factory('TiposPlantoesService', TiposPlantoesService);

  TiposPlantoesService.$inject = ['$resource', '$q', 'ApiUrlService', 'StorageService','$cacheFactory'];

  function TiposPlantoesService($resource, $q, ApiUrlService, StorageService,$cacheFactory) {

    var cache = $cacheFactory('TiposPlantoesService');


    this.getData = function () {
      var q = 'tipos-plantoesQuery';
      if ( !cache.get(q) ) {
       var data = this.query();
        cache.put(q,data);
       return data;
      } else {
       return cache.get(q);
      }
    };

    this.query = function() {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/tipos-plantoes/:id")
        .get()
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;
    };

    this.create = function(interacoes) {
      var deferredObject = $q.defer();

      // retrieve the information...
      // no caching here. but can easily be added.
      $resource(ApiUrlService.getUrl() + "/tipos-plantoes/:id")
        .save(interacoes)
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;
    };

    this.getByParameter = function(tipo, termo) {
      var deferredObject = $q.defer();

      $resource(ApiUrlService.getUrl() + "/tipos-plantoes?tipo=" + tipo + "&termo=" + termo)
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
