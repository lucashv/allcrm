(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('RecursoChamado', RecursoChamado);
  RecursoChamado.$inject = ['$resource', 'ApiUrlService'];

  function RecursoChamado($resource, ApiUrlService) {
    return $resource(ApiUrlService.getUrl() + '/chamado/:id', null, {
      'update': {
        method: 'PUT'
      }
    });
  }
})();
