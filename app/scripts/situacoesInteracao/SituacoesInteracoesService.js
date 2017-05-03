(function(){
'use strict';

angular.module('minovateApp')

  .factory('SituacoesInteracoesService',SituacoesInteracoesService);
  SituacoesInteracoesService.$inject =  ['$resource', '$q','ApiUrlService','StorageService'];

   function SituacoesInteracoesService($resource, $q,ApiUrlService,StorageService) {

      this.query = function() {
          var deferredObject = $q.defer();
          $resource(ApiUrlService.getUrl() + "/situacoes-interacoes/:id")
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
          $resource(ApiUrlService.getUrl() + "/contatos/:id")
            .save(interacoes)
            .$promise
            .then(function(result) {
              deferredObject.resolve(result);
            }, function(errorMsg) {
                deferredObject.reject(errorMsg);
            });

          return deferredObject.promise;
      };

      this.getById = function(id) {
          var deferredObject = $q.defer();
          $resource(ApiUrlService.getUrl() + "/contatos/"+id)
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
