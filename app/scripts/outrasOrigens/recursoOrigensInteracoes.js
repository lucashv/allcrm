(function() {
  'use stric';
  angular.module('minovateApp')
    .factory('RecursoOrigensInteracoes', RecursoOrigensInteracoes);

  RecursoOrigensInteracoes.$inject = ['$resource', 'ApiUrlService'];

  function RecursoOrigensInteracoes($resource, ApiUrlService) {
    return $resource(ApiUrlService.getUrl() + '/origens-interacoes', true);
  }

})();
