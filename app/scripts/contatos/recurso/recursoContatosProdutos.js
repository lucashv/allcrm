(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('RecursoContatosProdutos', RecursoContatosProdutos);
  RecursoContatosProdutos.$inject = ['ApiUrlService', '$resource'];

  function RecursoContatosProdutos(ApiUrlService, $resource) {
    return $resource(ApiUrlService.getUrl() + "/contatos-produtos", null, {
      'udate': {
        method: 'PUT'
      }
    });
  }
})();
