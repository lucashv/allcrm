(function (){
'use strict';

angular.module('minovateApp')
  .factory('TiposEnviosService', TiposEnviosService);
  TiposEnviosService.$inject = ['$resource','ApiUrlService','$cacheFactory','$q'];

     function TiposEnviosService($resource,ApiUrlService, $cacheFactory,$q){
       var cache = $cacheFactory('TiposEnviosService');

        function query() {
         var deferredObject = $q.defer();
         $resource(ApiUrlService.getUrl() + "/tipos-envios/:id")
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
         var q = 'tipoEnvioCache';
         if ( !cache.get(q) ) {
             var data = query();
             cache.put(q,data);
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
