(function() {
  'use strict';

  angular.module('minovateApp')
    .factory('ContatosService', ContatosService);

  ContatosService.$inject = [
    '$resource',
    '$q',
    'ApiUrlService',
    'StorageService',
    '$cacheFactory',
    'RecursoContatosProdutos',
    'ContatoResource'
  ];

  function ContatosService(
    $resource,
    $q,
    ApiUrlService,
    StorageService,
    $cacheFactory,
    RecursoContatosProdutos,
    ContatoResource) {

    var cache = $cacheFactory('ContatosService');
    var service = {
      query: _query,
      queryPrime: _queryPrime,
      create: _create,
      update: _update,
      getByParameter: _getByParameter,
      getById: _getById,
      getData: _getData,
      getRelatorioLigacoes: _getRelatorioLigacoes,
      getRelatorioDeEnvioContatos: _getRelatorioDeEnvioContatos,
      updatePprodutosContato: _updatePprodutosContato
    };
    return service;

    function _query() {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/contatos/:id")
        .get()
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;
    };

    function _queryPrime() {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/contatos?tipo=leadsPrime")
        .get()
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;
    };

    function _create(contato) {
      var deferredObject = $q.defer();

      $resource(ApiUrlService.getUrl() + "/contatos")
        .save(contato)
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;
    }


    function _update(contato, contatoId) {

      var deferred = $q.defer();
      ContatoResource
        .update({
          id: contatoId
        }, contato, function(result) {
          deferred.resolve(result);
        }, function(errorMsg) {
          deferred.reject(errorMsg);
        });
      return deferred.promise;
    }


    function _getByParameter(tipo, termo) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/contatos?tipo=" + tipo + "&termo=" + termo)
        .get()
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;
    }

    function _getById(id) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/contatos/" + id)
        .get()
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;
    }

    function _getData() {
      var q = 'contatoQuery';
      if (!cache.get(q)) {
        var data = query();
        cache.put(q, data);
        return data;
      } else {
        return cache.get(q);
      }
    }

    function _getRelatorioLigacoes(parametros) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/contatos?tipo=relatorioLigacao")
        .get(parametros)
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;

    }



    function _getRelatorioDeEnvioContatos(parametros) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/contatos?tipo=relatorioDeEnvioContatos")
        .get(parametros)
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;
    }

    function _updatePprodutosContato(produtosContato) {
      var deferredObject = $q.defer();
      RecursoContatosProdutos
        .save(produtosContato)
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;
    }





  }

})();
