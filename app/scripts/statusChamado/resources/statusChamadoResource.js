(function(){
  'use strict';
  angular.module('minovateApp')
  .factory('RecursoStatusChamado', RecursoStatusChamado );
  RecursoStatusChamado.$inject = ['$resource', 'ApiUrlService'];

  function RecursoStatusChamado($resource, ApiUrlService){
    return $resource(ApiUrlService.getUrl() + '/status-chamado');
  }
})();
