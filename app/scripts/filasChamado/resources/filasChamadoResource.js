(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('RecursoFilaChamado', RecursoFilaChamado);
    RecursoFilaChamado.$inject = ['ApiUrlService', '$resource'];

    function RecursoFilaChamado (ApiUrlService, $resource){
        return $resource(ApiUrlService.getUrl() + '/fila-chamado');
    }
})();
