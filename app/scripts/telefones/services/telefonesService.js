(function() {
  'use strict';

  angular.module('minovateApp')
    .factory('TelefoneService', TelefoneService);
  TelefoneService.$inject = ['$resource', '$q', 'ApiUrlService', 'StorageService', 'RecursoTelefoneContato'];

  function TelefoneService($resource, $q, ApiUrlService, StorageService, RecursoTelefoneContato) {

    var service = {
      create: _create,
      update: _update,
      getByIdContato: _getByIdContato,
    };
    return service;


    function _create(telefones) {
      var deferredObject = $q.defer();
      RecursoTelefoneContato
        .save(telefones, function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;
    }

    function _update(telefone, update) {
      var deferred = $q.defer();
      RecursoTelefoneContato.update({
          id: update
        }, telefone,
        function(result) {
          deferred.resolve(result);
        },
        function(erro) {
          deferred.reject(erro);
        });

      return deferred.promise;
    }

    function _getByIdContato(idContato) {
      var deferredObject = $q.defer();
      RecursoTelefoneContato
        .get({
          id: idContato
        }, function(result) {
          deferredObject.resolve(result);
        }, function(errorMsg) {
          deferredObject.reject(errorMsg);
        });

      return deferredObject.promise;
    }



  }



})();
