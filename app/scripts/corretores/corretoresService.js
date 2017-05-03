(function() {
  'use strict';

  angular.module('minovateApp')
    .factory('CorretoresService', CorretoresService);
  CorretoresService.$inject = ['$resource', 'ApiUrlService', '$cacheFactory', '$q'];

  function CorretoresService($resource, ApiUrlService, $cacheFactory, $q) {
    var cache = $cacheFactory('CorretoresService');
  var _recursoCorretores = $resource(ApiUrlService.getUrl() + "/corretores");
    var servico = {
      getData: getData,
      getByParameter: getByParameter,
      getRelatorioIndicacoes: getRelatorioIndicacoes,
      updateCorretor: updateCorretor,
      getByFilial: _getByFilial
    };
    return servico;




    function query() {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/corretores/:id")
        .get()
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;
    }

    function getRelatorioIndicacoes(parametros) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/interacoes?tipo=relatorioIndicacoes")
        .get(parametros)
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;

    }

    function updateCorretor(corretor) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/corretores/:id", {
          id: corretor.idCorretor
        }, {
          save: {
            method: 'PUT'
          }
        })
        .save(corretor)
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;
    }


    function getByParameter(tipo, termo) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/corretores?tipo=" + tipo + "&termo=" + termo)
        .get()
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;
    }


    function _getByFilial(parametro) {
      
      var deferredObject = $q.defer();
      _recursoCorretores.get(parametro)
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;
    }

    function getData() {
      var q = 'corretoresGetQuery';
      if (!cache.get(q)) {
        var data = query();
        cache.put(q, data);
        return data;
      } else {
        return cache.get(q);
      }
    }



  }

})();
