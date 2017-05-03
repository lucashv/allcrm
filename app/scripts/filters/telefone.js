(function() {
  'use strict';
  angular.module('minovateApp')
    .filter('telefone', telefone);

  function telefone() {
    return function(telefone) {
      if (telefone) {
        var novoTelefone = telefone.replace(/[^0-9]/g, "");
        var tamanho = novoTelefone.length;
        novoTelefone = '(' + novoTelefone.substring(0, 2) + ')' + novoTelefone.substring(2);
        if (tamanho == 10) {
          novoTelefone = novoTelefone.substring(0, 8) + '-' + novoTelefone.substring(8);
        } else {
          novoTelefone = novoTelefone.substring(0, 9) + '-' + novoTelefone.substring(9);
        }
        return novoTelefone;
      }
      return telefone;
    };
  }

})();
