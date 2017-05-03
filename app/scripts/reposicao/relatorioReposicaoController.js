(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('RelatorioReposicaoController', RelatorioReposicaoController);

  RelatorioReposicaoController.$inject = [
    '$scope',
    'AutorizacaoReposicaoService',
    'toastr',
    'AclService',
    'DateService',
    '$moment',
    '$uibModal',
    'CorretoresService',
    'StorageService',
    'SolicitacaoReposicaoService'

  ];

  function RelatorioReposicaoController(
    $scope,
    AutorizacaoReposicaoService,
    toastr,
    AclService,
    DateService,
    $moment,
    $uibModal,
    CorretoresService,
    StorageService,
    SolicitacaoReposicaoService
  ) {

    AclService.validaPermisao(20);

    $scope.page = {
      subtitle: "Relatório de Reposição"
    };

    function init() {
      $scope.corretores = {};
      $scope.exibeAgrupadas = false;
      $scope.exibeSolicitacoes = false;
      getCorretores();
      $scope.dateOptions = {
        formatYear: 'yyyy',
        'class': 'datepicker'
      };
      $scope.format = 'dd/MM/yyyy';
      $scope.solicitacoes = [];
      $scope.itemsByPage = 25;
      $scope.mostarCalendarioInicio = {
        opened: false
      };
      $scope.mostarCalendarioFim = {
        opened: false
      };
    }

    function getCorretores() {
      $scope.loadCorretores = CorretoresService.getByParameter("todos")
        .then(function(success) {
          $scope.corretores = success._embedded.corretores;
        });
    }

    init();

    $scope.consultar = function(param) {

      if (validaParametros(param)) {
        $scope.solicitacoes = [];
        var parametros = montaParametros(param);

        $scope.loadSolicitacaoReposicao = SolicitacaoReposicaoService
          .getData(parametros)
          .then(function(solicitacoesAprovadas) {
            $scope.solicitacoes = solicitacoesAprovadas._embedded.solicitacao_reposicao;
            $scope.mostraSolicitacoes = true;
          }, function(erro) {
            $scope.mostraSolicitacoes = false;
            if (erro.status == 404) {
              toastr.info("Sem resultados com esses parametros");
            }
            return;
          });






      }
      return;


    };



    function validaParametros(parametros) {

      if (typeof parametros === 'undefined') {
        toastr.info('Informe os paramêtros para consulta.');
        return false;
      }

      return true;
    }

    function montaParametros(parametro) {

      // if( (typeof parametro.dataInicio == 'undefined') ||  (typeof parametro.dataFim == 'undefined') ){
      //   toastr.info("Informe o intervalo de datas!");
      //   return false;
      // }
      return {
        dataInicio: ((typeof parametro.dataInicio != 'undefined') ? moment(parametro.dataInicio).format('YYYY-MM-DD') : null),
        dataFim: ((typeof parametro.dataFim != 'undefined') ? moment(parametro.dataFim).format('YYYY-MM-DD') : null),
        corretorId: (typeof parametro.corretorId != 'undefined' ) ? parametro.corretorId : null,

        contatoId : (typeof parametro.idContato != 'undefined' && parametro.idContato != "") ? parametro.idContato : null,
        tipo : "solicitacoesCorretor"
      };
    }


    $scope.limpar = function() {
      $scope.parametro = [];
      $scope.mostraRelatorio = false;
    };

    $scope.openCalendarioInicio = function() {
      $scope.mostarCalendarioInicio.opened = true;
    };

    $scope.openCalendarioFim = function() {
      $scope.mostarCalendarioFim.opened = true;
    };




  }
})();
