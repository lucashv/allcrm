(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('IndicacoesCorretoresController', IndicacoesCorretoresController);

  IndicacoesCorretoresController.$inject = [
    '$scope',
    '$moment',
    '$uibModal',
    'InteracoesService',
    '$filter',
    'toastr',
    'SituacoesInteracoesService',
    'StorageService',
    'TelefoneService',
    'EmailService',
    'Interacoes',
    '$stateParams'
  ];

  function IndicacoesCorretoresController(
    $scope,
    $moment,
    $uibModal,
    InteracoesService,
    $filter,
    toastr,
    SituacoesInteracoesService,
    StorageService,
    TelefoneService,
    EmailService,
    Interacoes,
    $stateParams
  ) {

    $scope.parametro = {};
    $scope.interacoes = [];
    $scope.filial = StorageService.getKey('idFilial') != 19;
    $scope.mostrarInteracoesContato = false;
    $scope.dateOptions = {
      formatYear: 'yyyy',
      'class': 'datepicker'
    };
    $scope.format = 'dd/MM/yyyy';




    $scope.consultar = function(parametro) {
      $scope.mostrarInteracoesContato = false;
      $scope.interacoes = [];
      $scope.loadInteracoesContato = getIndicacoes(montaParametros(parametro));
      $scope.loadInteracoesContato.then(function(success) {
        if (success.total_items == 1) {
          toastr.info('Sem resultados com esses paramêtros.');
          return;
        }
        $scope.interacoes = success._embedded.interacoes;
        $scope.interacoes.pop();
        $scope.mostraIndicacoes = true;
      }, function(error) {
        toastr.error('Erro ao consultar interações!');
        console.log(error);
      });

    };

    function _init(parametros) {
      SituacoesInteracoesService
        .query()
        .then(function(success) {
          $scope.situacaoList = success._embedded.situacoes_interacoes;
          $scope.situacaoList.pop();
        });
      var parametro = {};
      if (!!parametros.situacao) {
        $scope.parametro.dataInicio = parametros.dataInicio;
        $scope.parametro.dataFim = parametros.dataFim;
        $scope.consultar(parametros);
        return;
      }
      parametro = {
        dataInicio: new Date().setDate(new Date().getDate() - 5),
        dataFim: new Date()
      };
      $scope.parametro.dataInicio = parametro.dataInicio;
      $scope.parametro.dataFim = parametro.dataFim;
      $scope.consultar(parametro);
    }


    function getIndicacoes(parametros) {
      var dadosRelatorio = InteracoesService.gerRelatorioGeral(parametros);
      return dadosRelatorio;
    };

    $scope.limpar = function() {
      $scope.parametro = {};
    };

    $scope.mostarCalendarioInicio = {
      opened: false
    };
    $scope.mostarCalendarioFim = {
      opened: false
    };


    $scope.openInicio = function() {
      $scope.mostarCalendarioInicio.opened = true;
    };
    $scope.openFim = function() {
      $scope.mostarCalendarioFim.opened = true;
    };
    $scope.fecharAlertaInteracao = function() {
      $scope.alertaInteracao = '';
    };



    $scope.getMaisInformacoesContato = function(idContato, interacaoPaiContato) {
      $scope.interacoesContato = [];
      $scope.telefonesContato = [];
      $scope.emailsContato = [];
      $scope.alertaInteracao = '';
      $scope.mostrarInteracoesContato = false;

      if (interacaoPaiContato.solicita_reposicao) {
        $scope.solicitadoReposicao = true;
        return;
      }

      $scope.loadInteracoesContato = InteracoesService.getByContatoId(idContato).then(function(interacoes) {
        $scope.interacoesContato = Interacoes.filtraInteracoes(interacoes._embedded.interacoes, StorageService.getUserLogado());
        $scope.contato = angular.copy($scope.interacoesContato[0]);
        if (interacaoPaiContato) {
          $scope.contato.interacaoPaiContato = interacaoPaiContato;

        }
        $scope.mostrarInteracoesContato = true;
        $scope.loadTelefones = TelefoneService.getByIdContato(idContato)
          .then(function(telefones) {
            $scope.telefonesContato = telefones.telefones;
            delete $scope.telefonesContato._links;
          });
        $scope.loadEmails = EmailService.getByIdContato(idContato)
          .then(function(emails) {
            $scope.emailsContato = emails.emails;
          });
      }, function(error) {
        toastr.error('Erro ao consultar dados do contato.');
      });

    };

    $scope.fechar = function() {
      $scope.mostrarInteracoesContato = false;
      $scope.interacoesContato = [];
      $scope.telefonesContato = [];
      $scope.emailsContato = [];
      $scope.alertaInteracao = '';
    };
    $scope.fecharMensagemSolicitadoReposicao = function() {
      $scope.solicitadoReposicao = false;
    };


    $scope.abrirModalCadastroInteracao = function(interacoes, interacaoPaiContato) {


      if (Interacoes.bloqueiaInteracaoCorretor(interacoes, StorageService.getKey('idPerfil'), false)) {
        $scope.alertaInteracao = 'Não é possível realizar novas interações em contatos com a situação: "' + interacoes[0].situcao + '".';
        return;
      }
      if (interacoes[0].solicitaReposicao) {
        $scope.alertaInteracao = 'Não é possível realizar novas interações após ter solicitado reposição no contato: ';
        return;
      }
      var interacao = Interacoes.interacoesPaiUsuario(interacoes, StorageService.getKey('id'));
      var modalInstance = $uibModal.open({
        templateUrl: '../../views/tmpl/contatos/modalNovaInteracao.html',
        controller: 'ModalCriarInteracao',
        resolve: {
          interacaoContato: function() {
            return interacao[0];
          },
          sitesList: function() {
            return null;
          },
          fornecedorList: function() {
            return null;
          },
          outrasOrigensList: function() {
            return null;
          }
        }
      });
      modalInstance.result.then(function(novaInteracao) {

        atualizaSituacaoInteracaoContato(novaInteracao.situacao, interacaoPaiContato);
        $scope.getMaisInformacoesContato(novaInteracao.idContato, interacaoPaiContato);

      }, function(error) {
        console.log(error);
      });
    };

    function atualizaSituacaoInteracaoContato(situacao, interacaoPaiContato) {
      var indice = $scope.interacoes.indexOf(interacaoPaiContato);
      $scope.interacoes[indice].situacaoId = situacao;
    }

    $scope.geraIndicacaoPrime = function(interacoes, contato) {
      if (Interacoes.bloqueiaInteracaoCorretor(interacoes, StorageService.getKey('idPerfil'), true)) {
        $scope.alertaInteracao = 'Não é possível realizar novas interações em contatos com a situação: "' + interacoes[0].situcao + '".';
        return;
      }
      if (Interacoes.jaEnviado(interacoes)) {
        $scope.alertaInteracao = 'Contato já enviado para a corretora de seguros.';
        return;
      }
      var modalInstance = $uibModal.open({
        templateUrl: '../../views/tmpl/contatos/modalGerarIndicacaoPrime.html',
        controller: 'ModalGerarIndicacaoPrimeController',
        resolve: {
          Interacoes: function() {
            return angular.copy(interacoes);
          },
          Contato: function() {
            return angular.copy(contato);
          }
        }
      });

      modalInstance.result.then(function(idContato) {
        $scope.getMaisInformacoesContato(idContato, interacaoPaiContato);
      });

    };

    function montaParametros(parametro) {
      var parametros = {
        idContato: typeof parametro.id !== 'undefined' ? parametro.id : null,
        nome: typeof parametro.nome !== 'undefined' ? parametro.nome : null,
        telefone: typeof parametro.telefone !== 'undefined' ? parametro.telefone : null,
        email: typeof parametro.email !== 'undefined' ? parametro.email : null,
        idOperadora: typeof parametro.operadora !== 'undefined' ? parametro.operadora.id : null,
        idStatus: typeof parametro.situacao !== 'undefined' ? parametro.situacao.id : null,
        corretorId: StorageService.getKey('id'),
        tipoEnvio: typeof parametro.tipoEnvio !== 'undefined' ? parametro.tipoEnvio.id : null,
        dataInicio: typeof parametro.dataInicio !== 'undefined' ? moment(parametro.dataInicio).format('YYYY-MM-DD') : null,
        dataFim: typeof parametro.dataFim !== 'undefined' ? moment(parametro.dataFim).format('YYYY-MM-DD') : null,
        origemTipo: typeof parametro.origemTipo !== 'undefined' ? parametro.origemTipo : null,
        idOrigem: typeof parametro.origem !== 'undefined' ? parametro.origem.id : null,
        pmePf: typeof parametro.tipo !== 'undefined' ? parametro.tipo : null,
        empresa: typeof parametro.empresa !== 'undefined' ? parametro.empresa : null,
        inativos: typeof parametro.inativo !== 'undefined' ? true : null,
        indicacoesPrime: false
      };
      return parametros;
    };
    $scope.iconeOrigemInteracao = function(idOrigemContato) {

      if (idOrigemContato == 123) return "fa fa-comment mr-5";
      if (idOrigemContato == 120) return "fa fa-user mr-5";
      if (idOrigemContato == 115) return "fa fa-phone mr-5";
      return "fa fa-envelope-o mr-5";

    };
    $scope.corInteracao = function(situacaoId) {


      if (situacaoId == 2) return "text-danger";
      if (situacaoId != 2 && situacaoId != 5) return "text-primary";
      if (situacaoId == 5) return "text-success";


    };
    _init($stateParams.parametros);
  }
})();
