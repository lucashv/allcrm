(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('RecursoInteracaoChamado', RecursoInteracaoChamado);
  RecursoInteracaoChamado.$inject = ['$resource', 'ApiUrlService'];

  function RecursoInteracaoChamado($resource, ApiUrlService) {
    return $resource(ApiUrlService.getUrl() + '/interacao-chamado');
  }
})();
