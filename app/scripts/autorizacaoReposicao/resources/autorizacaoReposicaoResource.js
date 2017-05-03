(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('AutorizacaoReposicaoResource', AutorizacaoReposicaoResource)
  AutorizacaoReposicaoResource.$inject = ['$resource', 'ApiUrlService'];

  function AutorizacaoReposicaoResource($resource, ApiUrlService) {
    return $resource(ApiUrlService.getUrl() + "/autorizacao-reposicao/:id", null, {
      'update': {
        method: 'PUT'
      }
    });
  }
})();
