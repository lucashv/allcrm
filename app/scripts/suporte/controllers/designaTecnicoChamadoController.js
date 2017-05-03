(function() {
  'use stric';
  angular.module('minovateApp')
    .controller('DesignaTecnicoChamadoController', DesignaTecnicoChamadoController);
  DesignaTecnicoChamadoController.$inject = [
    'Chamado',
    'Tecnicos',
    '$uibModalInstance',
    'FilaChamadoService',
    'ChamadoService',
    'toastr'

  ];

  function DesignaTecnicoChamadoController(
    Chamado,
    Tecnicos,
    $uibModalInstance,
    FilaChamadoService,
    ChamadoService,
    toastr

  ) {
    console.log(Chamado);
    var vm = this;
    vm.cancelar = _cancelar;
    vm.salvar = salvar;

    function _init(chamado) {

      vm.chamado = Chamado;
      vm.tecnicos = Tecnicos;



    }

    function usuariosTi() {

    }


    function _cancelar() {
      $uibModalInstance.dismiss('cancelar');
    }



    function salvar(chamado) {


      var parametro = {
        fila: chamado.fila.id,
        tipo: "fila",
        chamado: chamado.id
      };

      vm.loadFila = ChamadoService
        .atualizaStatusChamado(parametro)
        .then(function(sucesso) {
          toastr.success(sucesso.mensagem);
          $uibModalInstance.close(chamado);
        }, function(erro) {
          toastr.error(sucesso.erro);
          console.log(erro);
        });

    }



    _init(Chamado);


  }


})();
