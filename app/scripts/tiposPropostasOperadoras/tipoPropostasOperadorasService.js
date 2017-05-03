(function (){
'use strict';

angular.module('minovateApp')
  .factory('TiposPropostasOperadorasSeervice', TiposPropostasOperadorasSeervice);
  TiposPropostasOperadorasSeervice.$inject = ['$resource','ApiUrlService','$cacheFactory','$q'];

     function TiposPropostasOperadorasSeervice($resource,ApiUrlService, $cacheFactory,$q){
       var cache = $cacheFactory('TiposPropostasOperadorasSeervice');

        function query() {

         var deferredObject = $q.defer();
         $resource(ApiUrlService.getUrl() + "/tipo-proposta-operadora/:id")
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
         var q = 'TiposPropostasOperadorasSeerviceQuery';
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
