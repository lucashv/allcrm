(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('NovosChamadosController', NovosChamadosController);
  NovosChamadosController.$inject = [
    'ChamadoService',
    'RecursoModalSuporte'
  ];

  function NovosChamadosController(
    ChamadoService,
    RecursoModalSuporte
  ) {
    var vm = this;

    vm.designarFila = _designarFila;

    function _init() {
      var parametro = {
        tipo: 'naoTriados'
      };
      vm.loadChamados = ChamadoService
        .lista(parametro)
        .then(function(chamados) {
          vm.chamados = chamados._embedded.chamado;
        }, function(erro) {
          console.log(erro);
        });
    }

    function _designarFila(chamado, indice) {

      RecursoModalSuporte.desginaFilaChamado(chamado)
        .result
        .then(function(chamado) {
          _removeChamadoLista(indice)
        }, function() {
          //função no fechamento da modal.
        });
    }


    function _removeChamadoLista(indice){
      var chamado  = vm.chamados.splice(indice, 1);
      console.log(chamado);
    }

    _init();


  }
})();
