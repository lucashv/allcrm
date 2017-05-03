(function(){
  'use strict';
  angular.module('minovateApp')
  .directive('interacoesChamado', interacoesChamado);

  function interacoesChamado () {
    var ddo = {};
    ddo.restrict = 'AE';

    ddo.scope = {
      interacoes : '=',
      usuario : '='
    };
    ddo.templateUrl = 'views/tmpl/diretivas/interacoesChamado.html';

    return ddo;
  }
})();
