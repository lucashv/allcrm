(function () {
    'use strict';
    angular.module('minovateApp')
        .factory('PlantoesService', PlantoesService);
    PlantoesService.$inject = ['$resource', 'ApiUrlService','$q'];

    function PlantoesService($resource, ApiUrlService, $q) {

    function query() {
       var deferredObject = $q.defer();
       $resource(ApiUrlService.getUrl() + "/plantoes/:id")
         .get()
         .$promise
         .then(function(result) {
           deferredObject.resolve(result);
         }, function(errorMsg) {
           deferredObject.reject(errorMsg);
         });
       return deferredObject.promise;
     };

     function getByParameter(tipo, termo) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/plantoes?tipo=" + tipo + "&termo=" + termo)
        .get()
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;
    };

    function create(plantao) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/plantoes/:id")
        .save(plantao)
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;
    };

    function update(plantao) {

      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/plantoes/:id",{id : plantao.id},{save:{method: 'PUT'}})
        .save(plantao)
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;
    };

    function getCorretoresSaude() {
     var deferredObject = $q.defer();
     $resource(ApiUrlService.getUrl() + "/plantoes?tipo=tipo&tipoId=1")
       .get()
       .$promise
       .then(function(result) {
         deferredObject.resolve(result);
       }, function(errorMsg) {
         deferredObject.reject(errorMsg);
       });
     return deferredObject.promise;
    };

    function getCorretoresOdonto() {
     var deferredObject = $q.defer();
     $resource(ApiUrlService.getUrl() + "/plantoes?tipo=tipo&tipoId=2")
       .get()
       .$promise
       .then(function(result) {
         deferredObject.resolve(result);
       }, function(errorMsg) {
         deferredObject.reject(errorMsg);
       });
     return deferredObject.promise;
    };

    function getCorretoresPresencial() {
     var deferredObject = $q.defer();
     $resource(ApiUrlService.getUrl() + "/plantoes?tipo=tipo&tipoId=3")
       .get()
       .$promise
       .then(function(result) {
         deferredObject.resolve(result);
       }, function(errorMsg) {
         deferredObject.reject(errorMsg);
       });
     return deferredObject.promise;
    };


    function getPosicaoPlantao(posicao, tipoPlantao) {
     var deferredObject = $q.defer();
     $resource(ApiUrlService.getUrl() + "/plantoes?tipo=posicao&termo="+posicao+"&tipoPlantao="+tipoPlantao)
       .get()
       .$promise
       .then(function(result) {
         deferredObject.resolve(result);
       }, function(errorMsg) {
         deferredObject.reject(errorMsg);
       });
     return deferredObject.promise;
    };

    function deletePlantao(IdtipoPlantao) {
     var deferredObject = $q.defer();
     $resource(ApiUrlService.getUrl() + "/plantoes/"+IdtipoPlantao)
       .remove()
       .$promise
       .then(function(result) {
         deferredObject.resolve(result);
       }, function(errorMsg) {
         deferredObject.reject(errorMsg);
       });
     return deferredObject.promise;
    };

     function getRelatorio(parametros) {
     var deferredObject = $q.defer();
     $resource(ApiUrlService.getUrl() + "/plantoes")
       .query(parametros)
       .$promise
       .then(function(result) {
         deferredObject.resolve(result);
       }, function(errorMsg) {
         deferredObject.reject(errorMsg);
       });
     return deferredObject.promise;
    };

     function _getPlantao(parametros) {
     var deferredObject = $q.defer();
     $resource(ApiUrlService.getUrl() + "/plantoes")
       .get(parametros)
       .$promise
       .then(function(result) {
         deferredObject.resolve(result);
       }, function(errorMsg) {
         deferredObject.reject(errorMsg);
       });
     return deferredObject.promise;
    };

    return {
      create: create,
      getByParameter: getByParameter,
      query : query,
      update: update,
      getCorretoresPresencial : getCorretoresPresencial,
      getCorretoresOdonto : getCorretoresOdonto,
      getCorretoresSaude: getCorretoresSaude,
      deletePlantao: deletePlantao,
      getPosicaoPlantao : getPosicaoPlantao ,
      getRelatorio : getRelatorio,
      getPlantao: _getPlantao
    };

  }
})();
