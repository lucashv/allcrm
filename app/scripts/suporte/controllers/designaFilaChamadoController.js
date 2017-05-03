(function() {
  'use stric';
  angular.module('minovateApp')
    .controller('DesignaChamadoController', DesignaChamadoController);
  DesignaChamadoController.$inject = [
    'Chamado',
    '$uibModalInstance',
    'FilaChamadoService',
    'ChamadoService',
    'toastr',
    'StorageService'
  ];

  function DesignaChamadoController(
    Chamado,
    $uibModalInstance,
    FilaChamadoService,
    ChamadoService,
    toastr,
    StorageService
  ) {
    var vm = this;
    vm.cancelar = _cancelar;
    vm.salvar = salvar;

    function _init(chamado) {

      vm.chamado = chamado;

      vm.loadFilaChamado = FilaChamadoService
        .getFila()
        .then(function(lista) {
          vm.filaChamado = lista._embedded.fila_chamado;
        }, function(erro) {
          console.log(erro);
        });

    }


    function _cancelar() {
      $uibModalInstance.dismiss('cancelar');
    }



    function salvar(chamado) {

      var parametro = {
        filaId: chamado.fila.id,
        tipo: "fila",
        chamado: chamado.id,
        usuarioCadastro : StorageService.getKey('id')
      };
      _atualizaFilaChamado(parametro);

    }

    function _atualizaFilaChamado(parametro) {

      vm.loadFila = ChamadoService
        .atualizaStatusChamado(parametro)
        .then(function(sucesso) {
          toastr.success(sucesso.mensagem);
          $uibModalInstance.close(parametro);
        }, function(erro) {
          toastr.error(erro.mensagem);
          console.log(erro);
        });
    }



    _init(Chamado);


  }


})();
