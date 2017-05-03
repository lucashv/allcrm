(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('ReposicaoController', ReposicaoController);
  ReposicaoController.$inject = [
    '$scope',
    'StorageService',
    'toastr',
    'SolicitacaoReposicaoService',
    'AutorizacaoReposicaoService'
  ];

  function ReposicaoController(
    $scope,
    StorageService,
    toastr,
    SolicitacaoReposicaoService,
    AutorizacaoReposicaoService
  ) {

    $scope.page = {
      title: 'Contato',
      subtitle: 'Autorização de Reposição'
    };

    $scope.format = 'dd/MM/yyyy';
    $scope.parametro = {};

    $scope.dateOptions = {
      formatYear: 'yyyy',
      'class': 'datepicker'
    };

    $scope.mostarCalendarioInicio = {
      opened: false
    };
    $scope.mostarCalendarioFim = {
      opened: false
    };

    $scope.openCalendarioInicio = function() {
      $scope.mostarCalendarioInicio.opened = true;
    };

    $scope.openCalendarioFim = function() {
      $scope.mostarCalendarioFim.opened = true;
    };

    $scope.mostraSolicitacoes = false;

    $scope.limpar = function()
    {
      $scope.mostraSolicitacoes = false;
      $scope.solicitacoes = {};
      $scope.parametros = {
        tipo : "solicitacoesCorretor",
        corretorId: StorageService.getKey("id"),
        dataInicio : null,
        dataFim : null
      };
    }


    $scope.consultar = function(parametros) {

      var parametros = _parametrosConsulta(angular.copy(parametros));
      if(!parametros){
        return;
      }

      $scope.loadSolicitacaoReposicao = SolicitacaoReposicaoService
        .getData(parametros)
        .then(function(solicitacoesAprovadas) {
          $scope.solicitacoes = {};
          $scope.solicitacoes = solicitacoesAprovadas._embedded.solicitacao_reposicao;
          $scope.mostraSolicitacoes = true;
        }, function(erro) {
          $scope.mostraSolicitacoes = false;
          if(erro.status == 404){
            toastr.info("Sem resultados com esses parametros");
          }
          return;
        });

        var parametroCount = {
          count : 1,
          corretorId:StorageService.getKey("id")
        }
        $scope.loadSolicitacoesAgrupadas = AutorizacaoReposicaoService
          .get(parametroCount)
          .then(function(solicitacoesReposicaoAgrupadas) {
            if (solicitacoesReposicaoAgrupadas.total_items !== 0) {
              $scope.qtdReposicoes = solicitacoesReposicaoAgrupadas._embedded.autorizacao_reposicao[0].countReposicoes;
              return;
            }
            $scope.qtdReposicoes = 0;
            toastr.info('Nao existem reposições aprovadas pendentes de pagamento');
          }, function(error) {
            console.log(error);
            return;
          });

   }

    var _parametrosConsulta = function(parametro) {

      return {
        dataInicio: ((typeof parametro.dataInicio != 'undefined') ? moment(parametro.dataInicio).format('YYYY-MM-DD') : null),
        dataFim: ((typeof parametro.dataFim != 'undefined') ? moment(parametro.dataFim).format('YYYY-MM-DD') : null),
        corretorId: StorageService.getKey("id"),
        situacao: (typeof parametro.situaco != 'undefined' && parametro.situaco != "") ? parametro.situaco : null,
        contatoId : (typeof parametro.idContato != 'undefined' && parametro.idContato != "") ? parametro.idContato : null,
        tipo : "solicitacoesCorretor"
      };
    };


  }
})();
