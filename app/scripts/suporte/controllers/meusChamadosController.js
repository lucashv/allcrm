(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('MeusChamadosController', MeusChamadosController);
  MeusChamadosController.$inject = [
    'ChamadoService',
    'StorageService',
    '$state',
    'CookieService',
    'toastr',
    'MontaParametroService'
  ];

  function MeusChamadosController(
    ChamadoService,
    StorageService,
    $state,
    CookieService,
    toastr,
    MontaParametroService
  ) {
    var vm = this;
    vm.calendarioInicio = {
      opened: false
    };
    vm.calendarioFim = {
      opened: false
    };
    vm.filtro = {};
    vm.format = 'dd/MM/yyyy';
    vm.dateOptions = {
      formatYear: 'yyyy',
      'class': 'datepicker'
    };
    vm.abrirCalendarioInicio = _abrirCalendarioInicio;
    vm.abrirCalendarioFim = _abrirCalendarioFim;
    vm.consultar = _consultar;
    vm.detalhesChamado = _detalhesChamado;
    vm.limparFiltro = _limparFiltro;
    vm.salvarFiltros = _salvarFiltros;

    function _init() {

      try {
        var filtro = CookieService.getCookie('filtroMeusChamados');

        if (filtro) {
          vm.filtro = filtro;
          vm.filtro.dataInicio = filtro.dataInicio ? new Date(filtro.dataInicio) : null;
          vm.filtro.dataFim = filtro.dataFim ? new Date(filtro.dataFim) : null;
        }
      } catch (e) {
        console.log('Erro ao setar os valores para o filtro', e);
      }

      _getChamados(_montaParametroConsultaChamados(angular.copy(vm.filtro)));
    }

    function _montaParametroConsultaChamados(parametro) {
      MontaParametroService.setaNuloConverteDatas(parametro);
      parametro.usuarioCadastro = StorageService.getKey('id');
      return parametro;

    }

    function _abrirCalendarioInicio() {
      vm.calendarioInicio.opened = true;
    }

    function _abrirCalendarioFim() {
      vm.calendarioFim.opened = true;
    }

    function _consultar(filtro) {

      _getChamados(montaParametroConsultaChamados(angular.copy(filtro)));
    }


    function _detalhesChamado(chamado) {
      $state.go('app.suporte.detalhesChamado', {
        id: chamado.id
      });
    }

    function _getChamados(parametro) {
      vm.chamados = [];
      vm.loadChamados = ChamadoService
        .lista(parametro)
        .then(function(chamados) {
          vm.chamados = chamados._embedded.chamado;
        }, function(erro) {
          toastr.info(erro.data.detail);
          console.log(erro);
        });
    }

    function _consultar(filtro) {
      _getChamados(_montaParametroConsultaChamados(angular.copy(filtro)));
    }

    function _limparFiltro() {
      vm.filtro = {};
      CookieService.removeCookie('filtroMeusChamados');
    }

    function _salvarFiltros(filtro) {
      CookieService.gravaCookieInfinito('filtroMeusChamados', filtro);
      _getChamados(_montaParametroConsultaChamados(angular.copy(filtro)));
    }

    _init();

  }
})();
