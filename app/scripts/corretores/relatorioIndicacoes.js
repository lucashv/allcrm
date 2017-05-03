(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('RelatorioIndicacoesCorretoresController', CorretoresCtlr);

  CorretoresCtlr.$inject = [
    '$scope',
    'InteracoesService',
    '$filter',
    '$moment',
    'toastr',
    'CorretoresService',
    'StorageService',
    'OperadoraService',
    'SituacoesInteracoesService',
    'TiposEnviosService',
    'FornecedoresService',
    'SitesService',
    'OutrasOrigensService'
  ];

  function CorretoresCtlr(
    $scope,
    InteracoesService,
    $filter,
    $moment,
    toastr,
    CorretoresService,
    StorageService,
    OperadoraService,
    SituacoesInteracoesService,
    TiposEnviosService,
    FornecedoresService,
    SitesService,
    OutrasOrigensService
  ) {

    $scope.format = 'dd/MM/yyyy';
    $scope.mostarCalendarioInicio = {
      opened: false
    };
    $scope.mostarCalendarioFim = {
      opened: false
    };
    $scope.dateOptions = {
      formatYear: 'yyyy',
      'class': 'datepicker'
    };
    $scope.itemsByPage = 25;
    $scope.tamanhoArray = 0;
    $scope.page = {
      title: 'Corretores',
      subtitle: 'Relatório Indicações'
    };

    $scope.parametro = {
     dataInicio: new Date(new Date().setDate(new Date().getDate() - 5)),
     dataFim: new Date()
   };

    $scope.dataAtual = new Date();
    $scope.usuarioLogado = StorageService.getKey('nome') + ' ' + StorageService.getKey('sobreNome');

    function init() {
       $scope.consultar($scope.parametro);
      _getOperadoras();
      _getSituacoes();
      _getTIposEnvios();
      _getFornecedores();
      _getSites();
      _getOutrasOrigens();
    }

    function _getOperadoras() {
      OperadoraService.getData()
        .then(function(data) {
          $scope.operadorasList = data._embedded.operadoras;
        });
    }

    function _getSituacoes() {
      SituacoesInteracoesService
        .query()
        .then(function(success) {
          $scope.situacaoList = success._embedded.situacoes_interacoes;
        });
    }

    function _getTIposEnvios() {
      TiposEnviosService
        .getData()
        .then(function(success) {
          $scope.tiposEnvios = success._embedded.tipos_envios;
        });
    }

    function _getFornecedores() {
      FornecedoresService
        .getData()
        .then(function(success) {
          $scope.fornecedorList = success._embedded.fornecedores;
        });
    }

    function _getSites() {
      SitesService
        .getData()
        .then(function(success) {
          $scope.sitesList = success._embedded.sites;
        });
    }

    function _getOutrasOrigens() {
      OutrasOrigensService
        .getData()
        .then(function(success) {
          $scope.outrasOrigensList = success._embedded.origens_interacoes;
        });

    }

    $scope.consultar = function(parametro) {

      $scope.resultados = [];
      $scope.mostraRelatorio = false;
      $scope.loadRelatorio = InteracoesService
        .getRelatorioGeralMultiplos(montaParametros(angular.copy(parametro)))
        .then(function(success) {
          $scope.mostraRelatorio = true;
          $scope.resultados = success._embedded.interacoes;
          $scope.tamanhoArray = $scope.resultados.length;
          $scope.data = [].concat($scope.resultados);
          return;
        }, function(error) {
          if(error.status === 404) {
            toastr.info('Sem resultados com esses parametros.');
            return;
          }
          toastr.error('Erro ao consultar contatos!');
          return;
        });
    };

    function montaParametros(parametro) {
      console.log(parametro);
      parametro.corretorId = StorageService.getKey('id');
      parametro.dataInicio = typeof parametro.dataInicio != 'undefined'   ? $moment(parametro.dataInicio).format("YYYY-MM-DD") : false;
      parametro.dataFim    = typeof parametro.dataFim    != 'undefined'  ? $moment(parametro.dataFim).format("YYYY-MM-DD") :   false;
      parametro.multiplos = true;
      return serialize(parametro);
    };

    function serialize( obj ) {
        var param =  '?'+Object.keys(obj).reduce(function(a,k){a.push(k+'='+encodeURIComponent(obj[k]));return a},[]).join('&');
        return param.substring(1);
    }

    $scope.limpar = function() {
      $scope.parametro = {};
    };

    $scope.imprimirRelatorioIndicacoes = function() {
      window.print();
    };
    $scope.openCalendarioInicio = function() {
      $scope.mostarCalendarioInicio.opened = true;
    };
    $scope.openCalendarioFim = function() {
      $scope.mostarCalendarioFim.opened = true;
    };
    init();
  }
})();
