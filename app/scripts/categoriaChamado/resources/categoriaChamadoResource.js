(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('RecursoCategoriaChamado', RecursoCategoriaChamado);
    RecursoCategoriaChamado.$inject = ['ApiUrlService', '$resource'];

    function RecursoCategoriaChamado (ApiUrlService, $resource){
        return $resource(ApiUrlService.getUrl() + '/categoria-chamado/:id');
    }
})();
