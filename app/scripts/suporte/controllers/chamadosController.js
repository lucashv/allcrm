(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('ChamadosController', ChamadosController);
  ChamadosController.$inject = [
    'ChamadoService',
    'CookieService',
    '$state',
    'RecursoModalSuporte',
    'MontaParametroService',
    'toastr'
  ];

  function ChamadosController(
    ChamadoService,
    CookieService,
    $state,
    RecursoModalSuporte,
    MontaParametroService,
    toastr
  ) {
    var vm = this;
    vm.filtro = {};
    vm.calendarioInicio = {
      opened: false
    };
    vm.calendarioFim = {
      opened: false
    };

    vm.format = 'dd/MM/yyyy';
    vm.dateOptions = {
      formatYear: 'yyyy',
      'class': 'datepicker'
    };
    vm.chamados = [];
    vm.abrirCalendarioInicio = _abrirCalendarioInicio;
    vm.abrirCalendarioFim = _abrirCalendarioFim;
    vm.atendeChamado = _atendeChamado;
    vm.consultar = _consultar;
    vm.limparFiltro = _limparFiltro;
    vm.salvarFiltros = _salvarFiltros;

    function _init() {
      try {
        var filtro = CookieService.getCookie('filtroChamado');

        if (filtro) {
          vm.filtro = filtro;
          vm.filtro.dataInicio = filtro.dataInicio ? new Date(filtro.dataInicio) : null;
          vm.filtro.dataFim = filtro.dataFim ? new Date(filtro.dataFim) : null;
        }
      } catch (e) {
        console.log('Erro ao setar os valores para o filtro', e);
      }
      _getChamados(montaParametroConsultaChamados(angular.copy(filtro)));

    }


    function _abrirCalendarioInicio() {
      vm.calendarioInicio.opened = true;
    }

    function _abrirCalendarioFim() {
      vm.calendarioFim.opened = true;
    }

    function _atendeChamado(chamado) {
      RecursoModalSuporte.interacaoChamado(chamado)
        .result
        .then(function() {

        }, function() {
          //função no fechamento da modal.
        });

    }

    function _consultar(filtro) {
      _getChamados(montaParametroConsultaChamados(angular.copy(filtro)));
    }

    function _getChamados(parametro) {
      vm.chamados = [];
      vm.loadChamados = ChamadoService
        .lista(parametro)
        .then(function(chamados) {
          vm.chamados = chamados._embedded.chamado;
        }, function(erro) {
          console.log(erro);
          toastr.info(erro.data.detail);
        });
    }

    function _getInteracoesChamado(parametro) {
      vm.loadInteracoesChamado = CategoriaChamadoService
        .listarInteracoesChamado(parametro)
        .then(function(chamado) {
          vm.interacoesChamado = chamado;
        }, function(erro) {
          console.log(erro);
        });
    }

    function montaParametroConsultaChamados(parametro) {
      return MontaParametroService.setaNuloConverteDatas(parametro);
    }

    function _limparFiltro() {
      vm.filtro = {};
      CookieService.removeCookie('filtroChamado');
    }

    function _salvarFiltros(filtro) {
      CookieService.gravaCookieInfinito('filtroChamado', filtro);
      _getChamados(montaParametroConsultaChamados(angular.copy(filtro)));
    }

    _init();

  }
})();
