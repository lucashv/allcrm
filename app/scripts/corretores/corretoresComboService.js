(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('CorretoresComboService', CorretoresComboService);

  CorretoresComboService.$inject = [];

  function CorretoresComboService() {
    var service = {
      setComboCorretor: _setComboCorretor,
      setComboCorretorPrime: _setComboCorretorPrime
    };

    function _setComboCorretor(corretores, filial) {
      return corretores.filter(function(corretor) {
        return corretor.filialId == filial;
      });
    };

    function _setComboCorretorPrime(corretores, usuarioLogado) {
      //PRIME BROKER MATRIZ id: 19
      return corretores.filter(function(corretor) {
        return corretor.idFilial == 19;
      });
    };

    return service;
  }
})();
