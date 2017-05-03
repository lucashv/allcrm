(function() {
  'use stric';
  angular.module('minovateApp')
    .factory('RecursoUsuarios', RecursoUsuarios);
  RecursoUsuarios.$inject = ['$resource', 'ApiUrlService' ];

  function RecursoUsuarios($resource, ApiUrlService) {
    return $resource(ApiUrlService.getUrl() + "/usuarios/:id");
  }
})();
