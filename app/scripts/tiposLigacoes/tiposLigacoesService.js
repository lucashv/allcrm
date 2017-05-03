(function (){
'use strict';

angular.module('minovateApp')
  .factory('TiposLigacoesService', TiposLigacoesService);
  TiposLigacoesService.$inject = ['$resource','ApiUrlService','$cacheFactory','$q'];

     function TiposLigacoesService($resource,ApiUrlService, $cacheFactory,$q){
       var cache = $cacheFactory('TiposLigacoesService');

        function query() {

         var deferredObject = $q.defer();

         $resource(ApiUrlService.getUrl() + "/tipos-ligacao/:id")
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
         var q = 'tiposLigacaoGetQuery';
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
