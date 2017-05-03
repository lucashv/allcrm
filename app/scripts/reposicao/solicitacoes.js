(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('SolicitacoesReposicaoController', SolicitacoesReposicaoController);

  SolicitacoesReposicaoController.$inject = [
    '$scope',
    'SolicitacaoReposicaoService',
    'toastr',
    'AclService',
    'DateService',
    '$moment',
    '$uibModal'

  ];

  function SolicitacoesReposicaoController(
    $scope,
    SolicitacaoReposicaoService,
    toastr,
    AclService,
    DateService,
    $moment,
    $uibModal
  ) {

    AclService.validaPermisao(16);
    $scope.page = {
      subtitle : "Solicitações de Reposição"
    };
    function init() {
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

    init();

    $scope.aprovaSolicitacao = function(aprovada,solicitacao) {

      var modalInstance = $uibModal.open({
        templateUrl: '../../views/tmpl/reposicao/modalValidaReposicao.html',
        controller: 'ModalValidaReposica',
        resolve: {
          Aprovada: function() {
            return angular.copy(aprovada);
          },
          Solicitacao : function(){
            return solicitacao;
          }
        }
      });

      modalInstance.result.then(function(resposta) {
        if (resposta) {
          removeItem(resposta);
        }
      });

   };

   function removeItem(item){

       var index = $scope.solicitacoes.indexOf(item);
       if (index !== -1) {
         $scope.solicitacoes.splice(index, 1);
       }

   }




    $scope.consultar = function(param) {

      if(validaParametros(param)) {

        var parametros = montaParametros(param);

        $scope.load = SolicitacaoReposicaoService.query(parametros)
          .then(function(solicitacoesReposicao) {
            if (solicitacoesReposicao.total_items !== 0) {
              $scope.mostraSolicitacoes = true;
              $scope.solicitacoes = solicitacoesReposicao._embedded.solicitacao_reposicao;
              return;
            }
            toastr.info('Sem resultados com esses paramêtros.');
          }, function(error) {
            console.log(error);
          });

      }
      return;


    };



    function validaParametros(parametros) {

      if(typeof parametros === 'undefined' ) {
        toastr.info('Informe os paramêtros para consulta.');
        return false;
      }

      return true;
    }

    function montaParametros(param) {

      var parametros = {
        dataInicio: typeof param.dataInicio !== 'undefined' ? moment(param.dataInicio).format('YYYY-MM-DD') : null,
        dataFim:    typeof param.dataFim    !== 'undefined' ? moment(param.dataFim).format('YYYY-MM-DD') : null,
        situacao: 'pendentes'
      };

      return parametros;
    }


    $scope.limpar = function(){
      $scope.parametro = [];
      $scope.mostraSolicitacoes = false;
    };

    $scope.openCalendarioInicio = function() {
      $scope.mostarCalendarioInicio.opened = true;
    };

    $scope.openCalendarioFim = function() {
      $scope.mostarCalendarioFim.opened = true;
    };




  }
})();
