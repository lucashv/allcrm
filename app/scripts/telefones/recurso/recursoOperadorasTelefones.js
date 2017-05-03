(function(){
  'use strict';
  angular.module('minovateApp')
  .factory('RecursoOperadorasTelefones', RecursoOperadorasTelefones);
  RecursoOperadorasTelefones.$inject = ['$resource', 'ApiUrlService'];
  function RecursoOperadorasTelefones($resource, ApiUrlService) {
    return $resource(ApiUrlService.getUrl() + '/operadoras-telefones');
  }

})();
