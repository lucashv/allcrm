(function(){
  'use strict';
  angular.module('minovateApp')
  .directive('templateContato', templateContato);

  function templateContato () {
    var ddo = {};
    ddo.restrict = 'AE';
    ddo.transclude = true;
    ddo.scope = {
      contato: '<',
      telefones: '<',
      emails: '<',
      contatosProdutos: '<',
      produtomensagem: '@'
    };
    ddo.templateUrl = 'views/tmpl/diretivas/contatoTemplate.html';

    return ddo;
  }
})();
