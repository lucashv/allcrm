(function() {
  'use strict';
  angular.module('minovateApp')
    .directive('templateChamado', templateChamado);

  function templateChamado() {
    var ddo = {};
    ddo.restrict = 'E';
    ddo.transclude = true;

    ddo.scope = {
      chamado : "="
    };
    ddo.templateUrl = 'views/tmpl/diretivas/templateChamado.html';
    return ddo;

  }
})();
