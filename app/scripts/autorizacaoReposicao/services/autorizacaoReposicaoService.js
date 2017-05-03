(function() {
  'use strict';

  angular.module('minovateApp')
    .factory('AutorizacaoReposicaoService', AutorizacaoReposicaoService);
  AutorizacaoReposicaoService.$inject = [
    '$resource',
    'ApiUrlService',
    '$cacheFactory',
    '$q',
    'StorageService',
    'AutorizacaoReposicaoResource'
  ];

  function AutorizacaoReposicaoService(
    $resource,
    ApiUrlService,
    $cacheFactory,
    $q,
    StorageService,
    AutorizacaoReposicaoResource
  ) {
    var cache = $cacheFactory('AutorizacaoReposicaoService');

    var service = {
      get: _get,
      pagaReposicao: _pagaReposicao
    };
    return service;


    function _get(parametros) {
      var deferredObject = $q.defer();
      AutorizacaoReposicaoResource
        .get(parametros, function(result) {
          deferredObject.resolve(result);
        }, function(erro) {
          deferredObject.reject(erro);
        });
      return deferredObject.promise;
    }

    function _pagaReposicao(reposicao, reposicaoId) {
      var deferredObject = $q.defer();
      AutorizacaoReposicaoResource
        .update({
          id: reposicaoId
        }, reposicao, function(resultado) {
          deferredObject.resolve(resultado);
        }, function(erro) {
          deferredObject.reject(erro);
        });
      return deferredObject.promise;
    }





  }

})();
