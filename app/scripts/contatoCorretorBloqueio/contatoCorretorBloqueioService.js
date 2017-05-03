(function (){
'use strict';

angular.module('minovateApp')
  .factory('ContatoCorretorBloqueioService', ContatoCorretorBloqueioService);
  ContatoCorretorBloqueioService.$inject = ['$resource','ApiUrlService','$cacheFactory','$q'];

     function ContatoCorretorBloqueioService($resource,ApiUrlService, $cacheFactory,$q){
       var cache = $cacheFactory('ContatoCorretorBloqueioService');

        function query() {

         var deferredObject = $q.defer();
         $resource(ApiUrlService.getUrl() + "/contato-corretor-bloqueio/:id")
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
         if ( !cache.get(q) ) {
             var data = query();
             cache.put(q,data);
             return data;
         } else {
             return cache.get(q);
         }
       }

       function getContatosBloqueioCorretor(corretorId){

         var deferredObject = $q.defer();
         $resource(ApiUrlService.getUrl() + "/contato-corretor-bloqueio?tipo=byCorretor&corretorId="+corretorId)
           .get()
           .$promise
           .then(function(result) {
             deferredObject.resolve(result);
           }, function(errorMsg) {
             deferredObject.reject(errorMsg);
           });
         return deferredObject.promise;
       }

       return {
           getData: getData,
           getContatosBloqueioCorretor: getContatosBloqueioCorretor
       };


    }

})();
