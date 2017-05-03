(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('CategoriaChamadoService', CategoriaChamadoService);
  CategoriaChamadoService.$inject = ['RecursoCategoriaChamado', '$q', 'CacheService' ];

  function CategoriaChamadoService(RecursoCategoriaChamado, $q, CacheService ) {
    var service = {
      getCategoriasChamado: _getCategoriasChamado,
      getCategoriaChamadosCache: _getCategoriaChamadosCache
    };
    return service;

    function _getCategoriasChamado() {
      var deferred = $q.defer();
      RecursoCategoriaChamado.get(function(categorias) {
        deferred.resolve(categorias);
      }, function(erro) {
        deferred.reject(erro);
      });
      return deferred.promise;
    }

    function _getCategoriaChamadosCache(parametros) {
      if (CacheService.get('categoriasChamado')) {
        return CacheService.get('categoriasChamado');
      } else {
        CacheService.put('categoriasChamado', _getCategoriasChamado());
        return CacheService.get('categoriasChamado');;
      }
    }

  }
})();
