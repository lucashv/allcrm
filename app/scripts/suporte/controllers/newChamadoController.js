(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('NewChamadoController', NewChamadoController);
  NewChamadoController.$inject = [
    'ChamadoService',
    'StorageService',
    'toastr'
  ];

  function NewChamadoController(
    ChamadoService,
    StorageService,
    toastr) {

    var vm = this;
    vm.salvar = _salvar;
    vm.limpar = _limpar;

    function _salvar(chamado) {
      chamado.usuarioCadastro = StorageService.getKey('id');
      vm.loadChamado = ChamadoService
        .cadastrar(chamado)
        .then(function(resultado) {
          toastr.success(resultado.mensagem);
          vm.chamado = {};
        }, function(erro) {
          toastr.error(erro.mensagem);
          console.log(erro);
        });
    }
    function _limpar() {
      vm.chamado = {};
    }
  }
})();
