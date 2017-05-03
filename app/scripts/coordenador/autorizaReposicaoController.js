(function() {

  'use strict';
  angular.module('minovateApp')
    .controller('AutorizaReposicaoController', AutorizaReposicaoController);

  AutorizaReposicaoController.$inject = [
    '$scope',
    'AclService',
    'CorretoresService',
    'CorretoresComboService',
    'StorageService',
    'SolicitacaoReposicaoService',
    'toastr',
    'RecursoModal',
    '$state'

  ];

  function AutorizaReposicaoController(
    $scope,
    AclService,
    CorretoresService,
    CorretoresComboService,
    StorageService,
    SolicitacaoReposicaoService,
    toastr,
    RecursoModal,
    $state

  ) {
    AclService.validaPermisao(17);
    init();


    if($state.params.parametros.vindoDoDash){
      $scope.loadSolicitacaoReposicao = SolicitacaoReposicaoService.
      getSolicitacoesValidadas($state.params.parametros).then(function(solicitacoesAprovadas){
        $scope.solicitacoesAprovadas = solicitacoesAprovadas._embedded.solicitacao_reposicao;
        $scope.mostraSolicitacoes = true;
      },function(erro){
        console.log(erro);
      })
    }

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


    $scope.consultar = function(parametros) {

      $scope.mostraSolicitacoes = false;
      $scope.loadSolicitacaoReposicao = SolicitacaoReposicaoService
        .getSolicitacoesValidadas(parametrosConsulta(parametros))
        .then(function(solicitacoesAprovadas) {
          if (solicitacoesAprovadas.total_items == 0) {
            toastr.info("Sem resultados para este parâmetro!");
            $scope.mostraSolicitacoes = false;
            return;
          }
          $scope.solicitacoesAprovadas = solicitacoesAprovadas._embedded.solicitacao_reposicao;
          $scope.mostraSolicitacoes = true;
        }, function(erro) {
          console.log(erro);
        });
    };

    $scope.limpar = function() {
      $scope.parametro = {};
    };

    $scope.aprovaSolicitacao = function(aprova, solicitacao, indiceSolicitacao) {
      var mensagem = ((aprova != 0) ? "Aprovar a reposição?" : "Reprovar a reposição?");
      var aviso = {
        titulo: "Confirmação",
        mensagem: mensagem,
        observacao: true
      };
      RecursoModal.confirmacao(aviso)
        .result
        .then(function(observacao) {
          validaSolicitacao(aprova, solicitacao, indiceSolicitacao, observacao);
        }, function() {
          //função no fechamento da modal.
        });

    };


    function validaSolicitacao(aprova, solicitacao, indiceSolicitacao, observacao) {

      var mensagem = ((aprova != 0) ? "Reposição aprovada!" : "Reposição reprovada!");
      $scope.loadAprovaReposicao = SolicitacaoReposicaoService
        .autorizacaoReposicao(objAprovaReposicao(aprova, solicitacao, observacao))
        .then(function(sucesso) {
          toastr.success(mensagem);
          $scope.solicitacoesAprovadas.splice(indiceSolicitacao, 1);
        }, function(erro) {
          toastr.error("Ocorreu um erro ao  tentar salvar a valdiação da reposição.");
          console.log(erro);
        });
    }


    var parametrosConsulta = function(parametro) {
      return {
        dataInicio: ((typeof parametro.dataInicio != 'undefined') ? moment(parametro.dataInicio).format('YYYY-MM-DD') : null),
        dataFim: ((typeof parametro.dataFim != 'undefined') ? moment(parametro.dataFim).format('YYYY-MM-DD') : null),
        corretorId: ((typeof parametro.corretorId != 'undefined') ? parametro.corretorId : null),
        filialId: StorageService.getKey('idFilial'),
        contatoId : (typeof parametro.idContato != 'undefined' && parametro.idContato != "") ? parametro.idContato : null,
        tipo : "solicitacoesCorretor",
        situacao: (typeof parametro.situaco != 'undefined' && parametro.situaco != "") ? parametro.situaco : null,

      };
    };

    var objAprovaReposicao = function(aprova, solicitacao, observacao) {
      return {
        reposicaoAutorizada: aprova,
        solicitacaoReposicaoId: solicitacao.id,
        gestorId: StorageService.getKey('id'),
        observacao: observacao
      };
    };

    function init() {
      $scope.loadCorretores = CorretoresService.getByParameter("todos")
        .then(function(success) {
          $scope.corretores = success._embedded.corretores;
        });
    }

  }

})();
