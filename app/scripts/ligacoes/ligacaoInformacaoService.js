(function (){
'use strict';

angular.module('minovateApp')
  .factory('LigacaoInformacaoService', LigacaoInformacaoService);
  LigacaoInformacaoService.$inject = ['$resource','ApiUrlService','$cacheFactory','$q'];

     function LigacaoInformacaoService($resource,ApiUrlService, $cacheFactory,$q){
       var cache = $cacheFactory('LigacaoInformacaoService');

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

       function create(createLigacaoInformacao) {
         var deferredObject = $q.defer();
         $resource(ApiUrlService.getUrl() + "/ligacoes-informacao/:id")
           .save(createLigacaoInformacao)
           .$promise
           .then(function(result) {
             deferredObject.resolve(result);
           }, function(errorMsg) {
             deferredObject.reject(errorMsg);
           });
         return deferredObject.promise;
       };


       function getData() {
         var q = 'LigacaoInformacaoService';
         if ( !cache.get(q) ) {
             var data = query();
             cache.put(q,data);
             return data;
         } else {
             return cache.get(q);
         }
       }
       return {
           getData: getData,
           save : create
       };


    }

})();
