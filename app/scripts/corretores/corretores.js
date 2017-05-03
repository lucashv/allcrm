(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('CorretoresCtlr', CorretoresCtlr);

  CorretoresCtlr.$inject = [
    '$scope',
    'InteracoesService',
    'ngTableParams',
    '$filter',
    'toastr',
    'CorretoresService',
    'DateService',
    'StorageService'
  ];

  function CorretoresCtlr(
    $scope,
    InteracoesService,
    ngTableParams,
    $filter,
    toastr,
    CorretoresService,
    DateService,
    StorageService
  ) {

    $scope.format = 'dd/MM/yyyy';

    $scope.getParameters = function(parametro) {
      var parametros = {
        dataInicio: typeof parametro.dataInicio !== 'undefined' ? DateService.converteDatas(parametro.dataInicio) : null,
        dataFim: typeof parametro.dataFim !== 'undefined' ? DateService.converteDatas(parametro.dataFim) : null,
        corretorId: StorageService.getKey('id')
      };
      return parametros;
    };

    $scope.consultar = function(parametro) {
      //de(parametro);
      $scope.loadRelatorio = getIndicacoes(parametro);

      $scope.loadRelatorio.then(function(success) {
        if (success.total_items <= 0) {
          toastr.info('Sem resultados com esses paramêtros.');
          $scope.mostraRelatorio = false;
          $scope.resultados = {};
          $scope.data = {};
          return;
        }
        $scope.mostraRelatorio = true;
        $scope.resultados = success._embedded.interacoes;
        $scope.tamanhoArray = success.total_items;
        $scope.data = [].concat($scope.resultados);
      }, function(error) {
        toastr.error('Erro ao consultar interações!');
        console.log(error);
      });

    };

    function init() {

      $scope.itemsByPage = 25;
      $scope.tamanhoArray = 0;
      $scope.page = {
        title: 'Corretores',
        subtitle: 'Indicações'
      };
      $scope.parametro = [];
      $scope.parametro.dataInicio  = new Date();
      $scope.parametro.dataFim = new Date();
      //
      // var dataInicio = new Date();
      // dataInicio.setDate(dataInicio.getDate() - 5);
      // var dataFim = new Date();
      //
      // $scope.parametro = {
      //   dataInicio: DateService.getDatePickerMySql(dataInicio, true),
      //   dataFim: DateService.getDatePickerMySql(dataFim, true)
      // };
      $scope.consultar($scope.parametro);
    }
    init();

    function getIndicacoes(parametros) {
      var dadosRelatorio = CorretoresService.getRelatorioIndicacoes($scope.getParameters(parametros));
      return dadosRelatorio;
    }



    $scope.limpar = function() {
      $scope.parametro = [];
    };

    $scope.dataAtual = DateService.formatBrasil(new Date());
    $scope.usuarioLogado = StorageService.getKey('nome') + ' ' + StorageService.getKey('sobreNome');

    $scope.imprimirRelatorioIndicacoes = function() {
      window.print();
    };

    $scope.getParameters = function(parametro) {
      var parametros = {
        dataInicio: typeof parametro.dataInicio !== 'undefined' ? DateService.converteDatas(parametro.dataInicio) : null,
        dataFim: typeof parametro.dataFim !== 'undefined' ? DateService.converteDatas(parametro.dataFim) : null,
        corretorId: StorageService.getKey('id')
      };
      return parametros;
    };

    $scope.openCalendarioFim = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.mostarCalendarioFim = true;
    };

    $scope.openCalendarioInicio = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.mostarCalendarioInicio = true;
    };

    getIndicacoes($scope.parametro);
  }

})();
