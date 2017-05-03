(function() {
  'use stic';
  angular.module('minovateApp')
    .factory('FilaChamadoService', FilaChamadoService);
  FilaChamadoService.$inject = ['$q', 'RecursoFilaChamado', 'CacheService'];

  function FilaChamadoService($q, RecursoFilaChamado, CacheService) {
    var service = {
      getFila: _getFila,
      getFilaCache: _getFilaCache
    };
    return service;

    function _getFila() {
      var deferred = $q.defer();
      RecursoFilaChamado.get(function(filaChamado){
        deferred.resolve(filaChamado);
      }, function(erro){
        deferred.reject(erro);
      });
      return deferred.promise;
    }

    function _getFilaCache() {
      if (CacheService.get('filaChamado')) {
        return CacheService.get('filaChamado');
      } else {
        CacheService.put('filaChamado', _getFila());
        return CacheService.get('filaChamado');;
      }
    }

  }


})();
