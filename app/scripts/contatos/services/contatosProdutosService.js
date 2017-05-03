(function() {
  'use-stric';
  angular.module('minovateApp')
    .factory('ContatosProdutosService', ContatosProdutosService);

  ContatosProdutosService.$inject = ['$resource', '$q', 'ApiUrlService', 'StorageService', '$cacheFactory'];

  function ContatosProdutosService($resource, $q, ApiUrlService, StorageService, $cacheFactory) {

    var _contatosProdutos = function(parametros) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/contatos-produtos")
        .get(parametros)
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;
    };

    return {
      contatosProdutos: _contatosProdutos
    };
  }
})();
