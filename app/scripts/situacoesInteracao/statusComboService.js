(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('StatusComboService', StatusComboService);

  StatusComboService.$inject = [];

  function StatusComboService() {

    var servico = {
      setComboStatus: _setComboStatus,
      setEntrouContatoNovamente: _setEntrouContatoNovamente
    };
    return servico;

    function _setComboStatus(status, usuarioLogado) {
      // idPerfil 4 - OPERADOR DE LEADS
      if (usuarioLogado.idPerfil == 4) {
        return status.filter(function(elementoStatus) {
          return elementoStatus.id == 17;
        });
      }
      // idPerfil 2 : CORRETOR
      if (usuarioLogado.idPerfil == 2) {
        return status.filter(function(elementoStatus) {
          return elementoStatus.statusPai != 'Primario' && elementoStatus.id != 19;
        });
      }
      return status;
    };

    function _setEntrouContatoNovamente(status) {
      return status.filter(function(elementoStatus) {
        return elementoStatus.id == 17;
      });
    };

  }
})();
