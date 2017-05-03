(function() {
  'use strict';
  angular
    .module('minovateApp')
    .factory('UserService', UserService);
  UserService.$inject = ['RecursoUsuarios', '$q', '$resource', 'ApiUrlService', 'CacheService'];

  function UserService(RecursoUsuarios, $q, $resource, ApiUrlService, CacheService) {

    var service = {
      get: _get,
      getUsuarios: _getUsuarios,
      getUsuarioCadastroContato: _getUsuarioCadastroContato,
      getByEmail: _getByEmail,
      getTecnicosCache: _getTecnicosCache,
      getUsuarioById: _getUsuarioById,
      getUsuariosByIdCache: _getUsuariosByIdCache,
      getUsuariosCache: _getUsuariosCache
    };
    return service;

    function _getUsuarioCadastroContato(idPerfil) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/usuarios?tipo=getUsuarioByPerfil&perfilId=" + idPerfil)
        .get()
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;
    }

    function _get(parametro) {
      var deferredObject = $q.defer();
      RecursoUsuarios
        .get(parametro, function(usuarios) {
          deferredObject.resolve(usuarios);
        }, function(erro) {
          deferredObject.reject(erro);
        });
      return deferredObject.promise;
    }
    function _getUsuarios() {
      var deferredObject = $q.defer();
      RecursoUsuarios
        .get(function(usuarios) {
          deferredObject.resolve(usuarios);
        }, function(erro) {
          deferredObject.reject(erro);
        });
      return deferredObject.promise;
    }

    function _getByEmail(email) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/usuarios?email=" + email)
        .get()
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;
    }

    function _getUsuarioById(usuarioId){
      var deferredObject = $q.defer();
      RecursoUsuarios
        .get({id : usuarioId}, function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;
    }

    function _getTecnicosCache(parametros) {
      if (CacheService.get('tecnicos')) {
        return CacheService.get('tecnicos');
      } else {
        CacheService.put('tecnicos', _get(parametros));
        return CacheService.get('tecnicos');
      }
    }
    function _getUsuariosByIdCache(usuarioId) {
      if (CacheService.get('detalhesUsuario')) {
        return CacheService.get('detalhesUsuario');
      } else {
        CacheService.put('detalhesUsuario', _getUsuarioById(usuarioId));
        return CacheService.get('detalhesUsuario');
      }
    }
    function _getUsuariosCache() {
      if (CacheService.get('getUsuarios')) {
        return CacheService.get('getUsuarios');
      } else {
        CacheService.put('getUsuarios', _getUsuarios());
        return CacheService.get('getUsuarios');
      }
    }




  }



})();
