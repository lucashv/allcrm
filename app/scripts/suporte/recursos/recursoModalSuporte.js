(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('RecursoModalSuporte', RecursoModalSuporte);
  RecursoModalSuporte.$inject = ['$uibModal'];

  function RecursoModalSuporte($uibModal) {
    var service = {
      desginaFilaChamado: _desginaFilaChamado,
      desginaTecnicoChamado: _desginaTecnicoChamado,
      formularioAberturaDeChamado: _formularioAberturaDeChamado,
      interacaoChamado: _interacaoChamado
    };
    return service;

    function _desginaFilaChamado(chamado) {
      return $uibModal.open({
        templateUrl: '../../views/tmpl/suporte/designaFilaChamado.html',
        controller: 'DesignaChamadoController',
        controllerAs: 'Designa',
        size: 'lg',
        resolve: {
          Chamado: function() {
            return angular.copy(chamado);
          }
        }
      });
    }

    function _desginaTecnicoChamado(chamado, tecnicos) {
      return $uibModal.open({
        templateUrl: '../../views/tmpl/suporte/designaTecnicoChamado.html',
        controller: 'DesignaTecnicoChamadoController',
        controllerAs: 'DesignaTecnico',
        size: 'lg',
        resolve: {
          Chamado: function() {
            return angular.copy(chamado);
          },
          Tecnicos: function() {
            return angular.copy(tecnicos);
          }
        }
      });
    }

    function _formularioAberturaDeChamado() {
      return $uibModal.open({
        templateUrl: '../../views/tmpl/suporte/abertura-chamado.html',
        controller: 'AberturaChamadoController',
        controllerAs: 'AberturaChamado',
        size: 'lg'
      });
    }

    function _interacaoChamado(chamado) {
      return $uibModal.open({
        templateUrl: '../../views/tmpl/suporte/interacaoChamado.html',
        controller: 'InteracaoChamadoController',
        controllerAs: 'InteracaoChamado',
        size: 'lg',
        resolve: {
          Chamado: function() {
            return angular.copy(chamado);
          }
        }
      });
    }

  }
})();
