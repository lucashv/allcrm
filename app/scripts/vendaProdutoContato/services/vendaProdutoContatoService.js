(function() {
  'use static';
  angular.module('minovateApp')
    .factory('VendaProdutoContatoService', VendaProdutoContatoService);
  VendaProdutoContatoService.$inject = ['$q', 'RecursoVendaProdutoContato', 'CacheService'];

  function VendaProdutoContatoService($q, RecursoVendaProdutoContato, CacheService) {
    var service = {
      create: _create,
    };

    return service;


    function _create(vendaProdutoContatoVenda) {
      var deferredObject = $q.defer();
        RecursoVendaProdutoContato
        .save(vendaProdutoContatoVenda)
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject({
            erro     :errorMsg,
            mensagem : "Erro ao salvar venda de produto"
          });
        });
      return deferredObject.promise;
    }
  }


})();
