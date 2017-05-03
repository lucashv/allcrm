(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('ContatoResource', ContatoResource);
  ContatoResource.$inject = ['ApiUrlService', '$resource'];

  function ContatoResource(ApiUrlService, $resource) {
    return $resource(ApiUrlService.getUrl() + '/contatos/:id', null, {
      'update': {
        method: 'PUT'
      }
    });
  }
})();
