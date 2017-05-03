(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('LigacoesRelatorioController', LigacoesRelatorioController);

  LigacoesRelatorioController.$inject = [
    '$scope',
    'PlantoesService',
    'TiposLigacoesService',
    'CorretoresService',
    'DateService',
    'ContatosService',
    '$log',
    'toastr',
    'AclService',
    'StorageService',
    'FiliaisService',
    'MontaParametroService',
    'CorretoresComboService'
  ];

  function LigacoesRelatorioController(
    $scope,
    PlantoesService,
    TiposLigacoesService,
    CorretoresService,
    DateService,
    ContatosService,
    $log,
    toastr,
    AclService,
    StorageService,
    FiliaisService,
    MontaParametroService,
    CorretoresComboService

  ) {

    var idModulo = 6;
    $scope.dateOptions = {
      formatYear: 'yyyy',
      'class': 'datepicker'
    };


    AclService.validaPermisao(idModulo);

    $scope.dataAtual = new Date();
    $scope.usuarioLogado = StorageService.getKey('nome') + ' ' + StorageService.getKey('sobreNome');
    $scope.parametro = {
      groupBy: false
    };
    $scope.format = 'dd/MM/yyyy';
    $scope.mostarCalendarioInicio = {
      opened: false
    };
    $scope.mostarCalendarioFim = {
      opened: false
    };
    $scope.mostrarGrafico = false;
    $scope.mostrarRelacao = false;
    $scope.mostrarRelatorio = false;
    $scope.itemsByPage = 25;
    $scope.tamanhoArray = 0;
    $scope.page = {
      title: 'Ligações',
      subtitle: 'Relatório'
    };



    _init();

    function _init() {
      var perfilId = StorageService.getKey('idPerfil');
      _getTiposLigacoes();
      _getCorretores(perfilId);
      _getFiliais(perfilId);

    }


    $scope.imprimirRelatorioLigacoes = function() {
      window.print();
    };

    function _getTiposLigacoes() {
      $scope.loadTipos = TiposLigacoesService.getData();
      $scope.loadTipos.then(function(success) {
        $scope.tiposLigacoesList = success._embedded.tipos_ligacao;
      });
    }

    function _getCorretores(perfilId) {

      $scope.loadTipos = CorretoresService.getByParameter("todos");
      $scope.loadTipos.then(function(success) {
        if (perfilId != 9) {
          $scope.corretoresList = success._embedded.corretores;
          return;
        }
        $scope.corretoresList = CorretoresComboService.setComboCorretor(success._embedded.corretores, StorageService.getKey('idFilial'));
      });

    }

    function _getFiliais(perfilId) {
      if (perfilId != 9) {
        $scope.loadFiliais = FiliaisService.getFiliais()
          .then(function(filiais) {
            $scope.filiais = filiais._embedded.filiais;
            $scope.exibeListaFiliais = true;

          }, function(erro) {
            console.log(erro);
          });

      } else {
        $scope.exibeListaFiliais = false;
        $scope.parametro.filialId = StorageService.getKey('idFilial');
      }

    }

    $scope.consultar = function(parametro) {

      var parametrosConsulta = MontaParametroService.setaNuloConverteDatas(angular.copy(parametro));

      $scope.loadingRelatorio = ContatosService
        .getRelatorioLigacoes(parametrosConsulta)
        .then(function(success) {
          if (success.total_items <= 0) {
            toastr.info('Sem resultados com esses paramêtros.');
            $scope.mostrarRelacao = false;
            $scope.mostrarRelatorio = false;
            $scope.mostrarGrafico = false;
            $scope.resultados = {};
            $scope.data = {};
            return;
          }

          $scope.mostrarRelacao = true;
          $scope.resultados = success._embedded.contatos;

          $scope.data = [].concat($scope.resultados);
          $scope.tamanhoArray = success.total_items;
          montar(success._embedded.contatos, parametro);

        }, function(error) {
          console.log(error);
        });
    };

    function montar(contatos, parametro) {
      if (parametro.grafico === true) {

        $scope.basicData = preparaArrayGrafico(contatos);
        $scope.mostrarGrafico = true;
      } else {
        $scope.mostrarGrafico = false;
      }
      getTotais(contatos);

    }

    function getTotais(contatos) {
      var totalSaude = 0;
      var totalOdonto = 0;
      var totalPresencial = 0;
      $scope.totalSaude = 0;
      $scope.totalOdonto = 0;
      $scope.totalPresencial = 0;

      contatos.forEach(function(contato) {

        if (contato.tipo === 'Saúde') {
          totalSaude++;
        }

        if (contato.tipo === 'Odonto') {
          totalOdonto++;
        }

        if (contato.tipo === 'Presencial') {
          totalPresencial++;
        }
      });

      $scope.totalSaude = totalSaude;
      $scope.totalOdonto = totalOdonto;
      $scope.totalPresencial = totalPresencial;

    }

    $scope.mostraRelatorio = function(mostrarRelatorio) {
      $scope.mostrarRelatorio = !mostrarRelatorio;
    };

    function preparaArrayGrafico(contatos) {

      var arrayRelatorio = [];
      var arrayModelo = [];
      var periodo = null;
      periodo = contatos[0].dataCadastro.substr(0, 5);
      var saude = 0;
      var odonto = 0;
      var presencial = 0;

      contatos.forEach(function(contato) {

        if (periodo === contato.dataCadastro.substr(0, 5)) {
          if (contato.tipoPlantaoId === "1") {
            saude++;
          }
          if (contato.tipoPlantaoId === "2") {
            odonto++;
          }
          if (contato.tipoPlantaoId === "3") {
            presencial++;
          }
        } else {
          arrayModelo.push(periodo);
          arrayModelo.push(saude);
          arrayModelo.push(odonto);
          arrayModelo.push(presencial);
          arrayRelatorio.push(arrayModelo);
          arrayModelo = [];
          periodo = contato.dataCadastro.substr(0, 5);
          saude = 0;
          odonto = 0;
          presencial = 0;
          if (contato.tipoPlantaoId === "1") {
            saude++;
          }
          if (contato.tipoPlantaoId === "2") {
            odonto++;
          }
          if (contato.tipoPlantaoId === "3") {
            presencial++;
          }
        }

      });
      arrayModelo.push(periodo);
      arrayModelo.push(saude);
      arrayModelo.push(odonto);
      arrayModelo.push(presencial);
      arrayRelatorio.push(arrayModelo);
      return arrayRelatorio;
    }


    $scope.limpar = function() {
      $scope.parametro = {};
      $scope.mostrarRelacao = false;
      $scope.mostrarGrafico = false;
      $scope.basicData = [];
      $scope.resultados = [];
    };

    $scope.openCalendarioInicio = function() {
      $scope.mostarCalendarioInicio.opened = true;
    };
    $scope.openCalendarioFim = function() {
      $scope.mostarCalendarioFim.opened = true;
    };






  }
})();
