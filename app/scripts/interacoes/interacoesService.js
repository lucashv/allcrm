(function() {
  'use strict';

  angular.module('minovateApp')
    .factory('InteracoesService', InteracoesService);
  InteracoesService.$inject = ['$resource', '$q', 'ApiUrlService', 'StorageService'];

  function InteracoesService($resource, $q, ApiUrlService, StorageService) {



      var service = {
        query: _query,
        create: _create,
        getById: _getById,
        getByContatoId: _getByContatoId,
        verificaCorretorSeguro: _verificaCorretorSeguro,
        relacaoIndicacoes: _relacaoIndicacoes,
        update: _update,
        gerRelatorioGeral: _gerRelatorioGeral,
        getRelatorioGeralMultiplos: _getRelatorioGeralMultiplos,
        getContatosDistruibuicaoGestor : _getContatosDistruibuicaoGestor
      };
      return service;

      var idFilialUsuario = StorageService.getKey('idFilial');

      function _query() {
        var deferredObject = $q.defer();
        $resource(ApiUrlService.getUrl() + "/interacoes/:id")
          .get({
            corretorId: StorageService.getKey('id')
          })
          .$promise
          .then(function(result) {
            deferredObject.resolve(result);
          }, function(errorMsg) {
            deferredObject.reject(errorMsg);
          });

        return deferredObject.promise;
      };

      function _create(interacoes) {
        var deferredObject = $q.defer();
        $resource(ApiUrlService.getUrl() + "/interacoes/:id")
          .save(interacoes)
          .$promise
          .then(function(result) {
            deferredObject.resolve(result);
          }, function(errorMsg) {
            deferredObject.reject(errorMsg);
          });

        return deferredObject.promise;
      };

      function _getById(id) {
        var deferredObject = $q.defer();

        $resource(ApiUrlService.getUrl() + "/interacoes/" + id)
          .get()
          .$promise
          .then(function(result) {
            deferredObject.resolve(result);
          }, function(errorMsg) {
            deferredObject.reject(errorMsg);
          });

        return deferredObject.promise;
      };


      function _getByContatoId(id) {
        var deferredObject = $q.defer();

        $resource(ApiUrlService.getUrl() + "/interacoes?idContato=" + id)
          .get()
          .$promise
          .then(function(result) {
            deferredObject.resolve(result);
          }, function(errorMsg) {
            deferredObject.reject(errorMsg);
          });

        return deferredObject.promise;
      };

      function _getContatosDistruibuicaoGestor(idFilial) {
        var deferredObject = $q.defer();

        $resource(ApiUrlService.getUrl() + "/interacoes?tipo=contatosDistribuicaoGestor&idFilial=" + idFilial)
          .get()
          .$promise
          .then(function(result) {
            deferredObject.resolve(result);
          }, function(errorMsg) {
            deferredObject.reject(errorMsg);
          });

        return deferredObject.promise;
      };


      function _verificaCorretorSeguro(id) {
        var deferredObject = $q.defer();

        $resource(ApiUrlService.getUrl() + "/interacoes?tipo=verificaCorretorSeguro&contatoId=" + id)
          .get()
          .$promise
          .then(function(result) {
            deferredObject.resolve(result);
          }, function(errorMsg) {
            deferredObject.reject(errorMsg);
          });

        return deferredObject.promise;
      };

      function _relacaoIndicacoes(parametros) {
        var deferredObject = $q.defer();
        $resource(ApiUrlService.getUrl() + "/interacoes?tipo=relacaoIndicacoes", {}, {
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
      };

      function _update(interacao) {
        var deferredObject = $q.defer();

        var interacaoObj = {
          descricao: interacao.descricaoInteracao
        };

        $resource(ApiUrlService.getUrl() + "/interacoes/:id", {
            id: interacao.idInteracoesContato
          }, {
            save: {
              method: 'PUT'
            }
          })
          .save(interacaoObj)
          .$promise
          .then(function(result) {
            deferredObject.resolve(result);
          }, function(errorMsg) {
            deferredObject.reject(errorMsg);
          });

        return deferredObject.promise;
      };

      function _gerRelatorioGeral(parametros, idFilial) {

        var deferredObject = $q.defer();
        $resource(ApiUrlService.getUrl() + "/interacoes?tipo=relatorioGeral")
          .get(parametros,
            function(result) {
              deferredObject.resolve(result);
            },
            function(errorMsg) {
              deferredObject.reject(errorMsg);
            });

        return deferredObject.promise;
      }

      function _getRelatorioGeralMultiplos(parametros) {
        var deferredObject = $q.defer();
        $resource(ApiUrlService.getUrl() + "/interacoes?tipo=relatorioGeral&"+ parametros)
          .get(
            function(result) {
              deferredObject.resolve(result);
            },
            function(errorMsg) {
              deferredObject.reject(errorMsg);
            });

        return deferredObject.promise;
      }



  }

})();
