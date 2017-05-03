(function() {
  'use strict';

  angular.module('minovateApp')
    .factory('OperadoraService', OperadoraService);
  OperadoraService.$inject = [

    'ApiUrlService',
    '$cacheFactory',
    'RecursoOperadoras',
    '$q',
    'CacheService'
  ];

  function OperadoraService(

    ApiUrlService,
    $cacheFactory,
    RecursoOperadoras,
    $q,
    CacheService
  ) {

    var cache = $cacheFactory('OperadoraService');

    function _getData(parametros) {
      if (CacheService.get('operadorasCash')) {
        return CacheService.get('operadorasCash');
      } else {
        CacheService.put('operadorasCash', _query());
        return CacheService.get('operadorasCash');;
      }

    }

    function _query(parametros) {
      var deferredObject = $q.defer();
      if (typeof parametros == 'undefined') {
        var parametros = {};
        parametros.matrizId = 1;
      }
      RecursoOperadoras
        .get(parametros, function(operadoras) {
          deferredObject.resolve(operadoras);
        }, function(erro) {
          deferredObject.reject(erro);
        });
      return deferredObject.promise;
    }


    return {
      getData: _getData
    };

  }
})();
