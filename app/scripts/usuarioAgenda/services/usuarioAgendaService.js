(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('UsuarioAgendaService', UsuarioAgendaService);

  UsuarioAgendaService.$inject = ['$resource', '$q', 'ApiUrlService', 'StorageService', 'UsuarioAgendaResource'];

  function UsuarioAgendaService($resource, $q, ApiUrlService, StorageService, UsuarioAgendaResource) {

    var service = {
      query: _query,
      delete: _delete,
      getByID: _getByID,
      getRelatorioGeralAgenda: _getRelatorioGeralAgenda,
      create: _create,
      update: _update
    };
    return service;
    // var idUsuario = StorageService.getKey('id');

    function _query() {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/agenda-usuario/:id")
        .get()
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;
    };

    function _delete(id) {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/agenda-usuario/" + id)
        .remove()
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;
    };


    function _getByID() {
      var deferredObject = $q.defer();
      $resource(ApiUrlService.getUrl() + "/agenda-usuario?tipo=relatorioAgendaUsuario&idUsuario=" + idUsuario)
        .get()
        .$promise
        .then(function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;

    };

    function _getRelatorioGeralAgenda(parametros) {
      var deferredObject = $q.defer();
      UsuarioAgendaResource
        .get(parametros, function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;

    };




    function _create(agenda) {
      var deferredObject = $q.defer();

      UsuarioAgendaResource
        .save(agenda, function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;
    };


    function _update(lembrete) {

      var deferredObject = $q.defer();
      UsuarioAgendaResource
        .update({
          id: lembrete.id
        }, lembrete, function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });
      return deferredObject.promise;
    };



  }

})();
