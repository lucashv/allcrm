(function(){
  'use strict';
  angular.module('minovateApp')
  .factory('UsuarioAgendaResource', UsuarioAgendaResource);
  UsuarioAgendaResource.$inject = ['$resource', 'ApiUrlService' ];

  function UsuarioAgendaResource($resource, ApiUrlService ) {
    return $resource(ApiUrlService.getUrl() + "/agenda-usuario/:id", null, {
      'update' : {
        method: 'PUT'
      }
    });
  }
})();
