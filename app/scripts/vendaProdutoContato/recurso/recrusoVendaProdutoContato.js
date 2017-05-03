(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('RecursoVendaProdutoContato', RecursoVendaProdutoContato);
    RecursoVendaProdutoContato.$inject = ['ApiUrlService', '$resource'];

    function RecursoVendaProdutoContato (ApiUrlService, $resource){
        return $resource(ApiUrlService.getUrl() + '/venda-produto-contato');
    }
})();
