(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('ChamadoService', ChamadoService);
  ChamadoService.$inject = [
    'RecursoChamado',
    'RecursoInteracaoChamado',
    '$q',
    'CacheService'
  ];

  function ChamadoService(
    RecursoChamado,
    RecursoInteracaoChamado,
    $q,
    CacheService
  ) {

    var service = {
      atualizaStatusChamado: _atualizaStatusChamado,
      cadastrar: _cadastrar,
      getById: _getById,
      cadastrarInteracaoChamado: _cadastrarInteracaoChamado,
      listarInteracoesChamado: _listarInteracoesChamado,
      lista: _lista,
      getInteracoesChamadosCache: _getInteracoesChamadosCache,

    };
    return service;

    function _atualizaStatusChamado(chamado) {
      var deferred = $q.defer();
      RecursoChamado.update({
        id: chamado.chamado
      }, chamado, function(status) {
        deferred.resolve({
          status: status,
          mensagem: 'Situação do chamado alterada com sucesso.'
        });
      }, function(erro) {
        deferred.reject({
          status: erro,
          mensagem: 'Ocorreu um erro ao tentar alterar a situação do chamdo.'
        });
      });
      return deferred.promise;
    }

    function _cadastrar(chamado) {
      var deferred = $q.defer();
      RecursoChamado.save(chamado, function(resultado) {
        deferred.resolve({
          resultado: resultado,
          mensagem: 'Chamado aberto com sucesso.'
        });
      }, function(erro) {
        deferred.reject({
          erro: erro,
          mensagem: 'Ocorreu um erro na abertura do chamado.'
        });
      });
      return deferred.promise;
    }

    function _getById(chamadoId) {
      var deferred = $q.defer();
      RecursoChamado.get({
        id: chamadoId
      }, function(chamado) {
        deferred.resolve(chamado);
      }, function(erro) {
        deferred.reject(erro);
      });
      return deferred.promise;
    }

    function _cadastrarInteracaoChamado(interacao) {
      var deferred = $q.defer();
      RecursoInteracaoChamado.save(interacao, function(status) {
        deferred.resolve({
          status: status,
          mensagem: 'Interação cadastrado com sucesso.'
        });
      }, function(erro) {
        deferred.reject({
          erro: erro,
          mensagem: 'Ocorreu um erro ao salvar a sua interação no chamado.'
        });
      });
      return deferred.promise;
    }

    function _listarInteracoesChamado(parametro) {
      var deferred = $q.defer();
      RecursoInteracaoChamado
        .get(parametro, function(interacoesChamado) {
          CacheService.put('interacoesChamado/:' + parametro.chamadoId, deferred.promise);
          deferred.resolve(interacoesChamado);
        }, function(erro) {
          deferred.reject(erro);
        });
      return deferred.promise;
    }

    function _lista(parametros) {
      var deferred = $q.defer();
      RecursoChamado.get(parametros, function(chamados) {
        deferred.resolve(chamados);
      }, function(erro) {
        deferred.reject(erro);
      });
      return deferred.promise;
    }

    function _getInteracoesChamadosCache(parametro) {
      var parametroCache = 'interacoesChamado/:' + parametro.chamadoId;
      if (CacheService.get(parametroCache)) {
        return CacheService.get(parametroCache);
      } else {
        CacheService.put(parametroCache, _listarInteracoesChamado(parametro));
        return CacheService.get(parametroCache);;
      }
    }

  }
})();
