(function() {
  'use strict';
  angular.module('minovateApp')
  .factory('RecursoModalCorretores', RecursoModalCorretores);

  RecursoModalCorretores.$inject = ['$uibModal'];
  function RecursoModalCorretores($uibModal) {


    var service = {
      cadastroLembreteCalendario: _cadastroLembreteCalendario
    };
    return service;

    function _cadastroLembreteCalendario(evento) {
      return $uibModal.open({
        templateUrl: 'views/tmpl/corretores/cadastroLembrete.html',
        controller: 'CadastroLembreteController',
        controllerAs: 'vm',
        size: 'md',
        resolve :{
          Lembrete : function(){
            return angular.copy(evento);
          }
        }
      });
    }
  }

})();
