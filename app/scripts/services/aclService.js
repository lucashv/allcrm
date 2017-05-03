(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('AclService', AclService);

  AclService.$inject = ['StorageService', 'ApiUrlService', '$cacheFactory', '$q', '$injector'];

  function AclService(StorageService, ApiUrlService, $cacheFactory, $q, $injector) {

    var cache = $cacheFactory('AclService');
    var resource = null;
    var state = null;
    var idPerfil = null;
    var service = {
      validaPermisao: _validaPermisao,
      query: _query,
      modulosAcesso: _modulosAcesso
    };
    return service;




    function getResource() {
      if (!resource) {
        resource = $injector.get('$resource');
      }
      return resource;
    }

    function getState() {
      if (!state) {
        state = $injector.get('$state');
      }
      return state;
    }

    function _validaPermisao(moduloId) {

      var permissoes = _query();
      var permissoesModulo = [];

      permissoes.then(function(permissoesDados) {
        permissoes = permissoesDados._embedded.acl;
        permissoes.forEach(function(permissao) {
          permissoesModulo.push(Number(permissao.moduloId));
        });
        var validaPermissoes = permissoesModulo.indexOf(moduloId, 0);

        if (validaPermissoes >= 0) {
        } else {
          console.log('não autorizado');
          getState().go('core.page-offline');
        }
      });

    }

    function _query() {

      var deferredObject = $q.defer();
      var resource = getResource();
      idPerfil = StorageService.getKey('idPerfil');
      resource(ApiUrlService.getUrl() + "/acl?tipo=getByPerfil&idPerfil=" + idPerfil)
        .get()
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;
    }
    function _modulosAcesso(idPerfil) {

      var deferredObject = $q.defer();
      var resource = getResource();

      resource(ApiUrlService.getUrl() + "/acl?tipo=getByPerfilNew&idPerfil=" + idPerfil)
        .get()
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;
    }

    function getData() {
      var q = 'aclGetQuery';
      if (!cache.get(q)) {
        var data = _query(idPerfil);
        cache.put(q, data);
        return data;
      } else {
        return cache.get(q);
      }
    }



  }



})();
