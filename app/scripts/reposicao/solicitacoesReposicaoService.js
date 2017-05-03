(function() {
  'use strict';

  angular.module('minovateApp')
    .factory('SolicitacaoReposicaoService', SolicitacaoReposicaoService);
  SolicitacaoReposicaoService.$inject = ['$resource', 'ApiUrlService', '$cacheFactory', '$q'];

  function SolicitacaoReposicaoService($resource, ApiUrlService, $cacheFactory, $q) {
    var cache = $cacheFactory('SolicitacaoReposicaoService');

    function query(parametros) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/solicitacao-reposicao")
        .get(parametros)
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;
    }

    function getSolicitacoesValidadas(parametros) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/solicitacao-reposicao")
        .get(parametros)
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;
    }

    function autorizacaoReposicao(parametros) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/autorizacao-reposicao")
        .save(parametros)
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;
    }

    function getData(parametros) {
      return query(parametros);
      var q = 'solicitacaoReposicaoServiceCache' + angular.toJson(parametros);
      if (!cache.get(q)) {
        var data = query(parametros);
        cache.put(q, data);
        return data;
      } else {
        return cache.get(q);
      }
    }

    function aprovaReprovaSolicitacao(reposicao) {

      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/solicitacao-reposicao/:reposicaoId", {
          reposicaoId: reposicao.id
        }, {
          save: {
            method: 'PUT'
          }
        })
        .save(reposicao)
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;

    }

    return {
      getData: getData,
      query: query,
      aprovaReprovaSolicitacao: aprovaReprovaSolicitacao,
      getSolicitacoesValidadas: getSolicitacoesValidadas,
      autorizacaoReposicao: autorizacaoReposicao
    };


  }

})();
