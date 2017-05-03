(function() {
  'use strict';

  angular.module('minovateApp')
    .factory('ProdutosService', ProdutosService);

  ProdutosService.$inject = ['$resource', '$q', 'ApiUrlService', '$cacheFactory'];

  function ProdutosService($resource, $q, ApiUrlService,  $cacheFactory) {

    var cache = $cacheFactory('ProdutosService');

    this.getProdutos = function(tipoProdutoId) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/produtos")
        .get(tipoProdutoId)
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;
    };

    this.getProdutoByOperadora = function(operadora) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/produtos?tipo=byOperadora&operadoraId="+operadora)
        .get()
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;

    }


    return this;
  }

})();
