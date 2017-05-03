(function() {
  angular.module('minovateApp')
    .factory('RecursoOperadoras', RecursoOperadoras);
  RecursoOperadoras.$inject = ['ApiUrlService', '$resource'];

  function RecursoOperadoras(ApiUrlService, $resource) {
    return $resource(ApiUrlService.getUrl() + '/operadoras/:id');
  }
})();