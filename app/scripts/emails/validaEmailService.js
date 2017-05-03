(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('StatusComboService', StatusComboService);

  StatusComboService.$inject = [];

  function StatusComboService() {

    StatusComboService.setComboStatus = function(status, usuarioLogado) {
      // idPerfil 4 - OPERADOR DE LEADS
      if (usuarioLogado.idPerfil == 4) {
        return status.filter(function(elementoStatus) {
          return elementoStatus.id == 17;
        });
      }
      // idPerfil 2 : CORRETOR
      if (usuarioLogado.idPerfil == 2) {
        return status.filter(function(elementoStatus) {
          return elementoStatus.statusPai != 'Primario' && elementoStatus.id != 19 ;
        });
      }
      return status;
    };
    StatusComboService.setEntrouContatoNovamente = function(status) {
      return status.filter(function(elementoStatus) {
        return elementoStatus.id == 17 ;
      });
    };
    return StatusComboService;
  }
})();
