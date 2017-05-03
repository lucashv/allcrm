(function () {
  'use strict';
  angular.module('minovateApp')
  .factory('RecursoTelefoneContato', RecursoTelefoneContato);
  RecursoTelefoneContato.$inject = ['$resource', 'ApiUrlService'];

  function RecursoTelefoneContato($resource, ApiUrlService) {
    return $resource(ApiUrlService.getUrl() + '/telefones-contato/:id', null, {
      'update': {
        method: 'PUT'
      }
    });
  }
})();
