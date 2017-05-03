(function() {
  'use strict';

  angular.module('minovateApp')
    .factory('GestorNacionalService', GestorNacionalService);
  GestorNacionalService.$inject = ['$resource', '$q', 'ApiUrlService', 'StorageService'];

  function GestorNacionalService($resource, $q, ApiUrlService, StorageService) {

    function InteracoesService() {


      this.gerRelatorioGeral = function(parametros) {

        var deferredObject = $q.defer();
        $resource(ApiUrlService.getUrl() + "/gesto-nacional-dash-board?tipo=relatorioGeral", {}, {
            query: {
              method: 'GET',
              isArray: false
            }
          })
          .query(parametros)
          .$promise
          .then(function(result) {
            deferredObject.resolve(result);
          }, function(errorMsg) {
            deferredObject.reject(errorMsg);
          });

        return deferredObject.promise;
      }

    }
    return new InteracoesService();
  };

})();
