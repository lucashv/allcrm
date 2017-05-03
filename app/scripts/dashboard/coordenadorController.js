(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('CoordenadorController', CoordenadorController);
  CoordenadorController.$inject = [
    '$scope',
    '$moment',
    'InteracoesService',
    'StorageService',
    'UsuarioAgendaService',
    'toastr',
    'CorretoresService',
    '$filter',
    'AclService',
    '$state',
    'SolicitacaoReposicaoService'
  ];

  function CoordenadorController(
    $scope,
    $moment,
    InteracoesService,
    StorageService,
    UsuarioAgendaService,
    toastr,
    CorretoresService,
    $filter,
    AclService,
    $state,
    SolicitacaoReposicaoService
  ) {

    var idModulo = 12;
    AclService.validaPermisao(idModulo);



    $scope.indicacoesDoCorretor = [];
    $scope.corretor = {};
    $scope.startDate = $moment().subtract(1, 'month').format('DD/MM/YYYY');
    $scope.endDate = $moment().format('DD/MM/YYYY');
    $scope.rangeOptions = {
      locale: {
        format: 'DD/MM/YYYY',
        applyLabel: 'Consultar',
        cancelLabel: 'Cancelar',
        daysOfWeek: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
          'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ]
      },

      opens: 'left',
      startDate: $moment().subtract(1, 'month').format('DD/MM/YYYY'),
      endDate: $moment().format('DD/MM/YYYY'),
      parentEl: '#content'
    };
    angular.element("#content").on('apply.daterangepicker', function() {
      init();
    });


    $scope.itemsByPage = 10;



    function init() {
      $scope.relacaoTotalIndicacoes = {};
      $scope.mostraCartao = false;
      $scope.indicacoesRecebidas = [];
      $scope.relacaoIndicacoesCorretor = [];
      $scope.getIndicacoesCorretor();
      _getSolicitacoesReposicao();
    }

    $scope.solicitacoesReposicaoView = function() {

      $state.go('app.coordenador.autorizaReposicao', {
        parametros: {
          vindoDoDash : true,
          dataInicio: typeof $scope.startDate !== 'undefined' ? $moment($scope.startDate, 'DD/MM/YYYY').format("YYYY-MM-DD") : null,
          dataFim: typeof $scope.endDate !== 'undefined' ? $moment($scope.endDate, 'DD/MM/YYYY').format("YYYY-MM-DD") : null,
          tipo : "solicitacoesCorretor",
          situacao:"pendenteGestor",
          filialId : StorageService.getKey("idFilial")
        }
      });
    }

    function _getSolicitacoesReposicao()
    {
      var parametros = {
        dataInicio: typeof $scope.startDate !== 'undefined' ? $moment($scope.startDate, 'DD/MM/YYYY').format("YYYY-MM-DD") : null,
        dataFim: typeof $scope.endDate !== 'undefined' ? $moment($scope.endDate, 'DD/MM/YYYY').format("YYYY-MM-DD") : null,
        tipo : "solicitacoesCorretor",
        situacao:"pendenteGestor",
        filialId : StorageService.getKey("idFilial")
      };

      $scope.loadSolicitacaoReposicao = SolicitacaoReposicaoService
        .getData(parametros)
        .then(function(solicitacoesAprovadas) {
          $scope.solicitacoesReposicao = solicitacoesAprovadas.total_items;
        }, function(erro) {
          if (erro.status == 404) {
            $scope.solicitacoesReposicao = 0;
          }
          return;
        });
    }

    $scope.getIndicacoesCorretor = function() {

      $scope.load = InteracoesService.gerRelatorioGeral(getParameters());
      $scope.load.then(function(success) {
        if (success.total_items === 0) {
          toastr.info('Não existem indicações neste período para o seu usuário.');
          return;
        }
        $scope.indicacoesRecebidas = success._embedded.interacoes;
        getSituacaoIndicacaoCorretor(success._embedded.interacoes);


      }, function(error) {
        console.log(error);
      });
    };

    $scope.atualizaStatusCorretor = function(corretor) {

      if (StorageService.getKey("id") == "322") {
        //322 - Admilson
        console.log("Nao autorizado a desbloquear");
        return;
      }

      corretor.envioBloqueado = !corretor.envioBloqueado;
      corretor.usuarioExecutouId = StorageService.getKey('id');

      $scope.updateCorretor = CorretoresService
        .updateCorretor(corretor)
        .then(function(success) {
          removeItem(corretor);
          $scope.relacaoIndicacoesCorretor.push(success);
          $scope.mostraCartao = false;

          toastr.success('Status do Corretor atualizado com sucesso!');
        }, function(error) {
          toastr.error('Erro ao atualizar status do corretor!');
        });
    };

    function removeItem(corretor) {

      var index = $scope.relacaoIndicacoesCorretor.indexOf(corretor);

      if (index !== -1) {
        $scope.relacaoIndicacoesCorretor.splice(index, 1);
      }

    };

    function getSituacaoIndicacaoCorretor(indicacoes) {
      var enviadoCorretor = 0,
        respondido = 0,
        vendaEfetuada = 0,
        quantidadeIndicacoes = 0,
        cont = 0,
        totalEnviadoCorretor = 0,
        totalQuantidadeIndicacoes = 0,
        totalRespondido = 0,
        totalVendaEfetuada = 0,
        corretor = {};
      indicacoes.forEach(function(indicacoesCorretor) {
        enviadoCorretor = 0;
        respondido = 0;
        vendaEfetuada = 0;
        quantidadeIndicacoes = 0;
        cont = 0;
        indicacoesCorretor.forEach(function(indicacao) {
          if (indicacao.situacaoId == 2) {
            enviadoCorretor++;
            quantidadeIndicacoes++;
            cont++;
            constroiArray(indicacao, cont, indicacoesCorretor.length);
            return;
          }
          if (indicacao.situacaoId == 5) {
            vendaEfetuada++;
            respondido++;
            quantidadeIndicacoes++;
            cont++;
            constroiArray(indicacao, cont, indicacoesCorretor.length);
            return;
          }
          respondido++;
          quantidadeIndicacoes++;
          cont++;
          constroiArray(indicacao, cont, indicacoesCorretor.length);
        });
      });

      function constroiArray(indicacao, atual, tamanhoArray) {

        if (atual == tamanhoArray) {
          corretor = {
            idCorretor: indicacao.idCorretor,
            usuarioCorretor: indicacao.usuarioCorretor,
            envioBloqueado: indicacao.envioBloqueado !== '0' ? true : false,
            enviadoCorretor: enviadoCorretor,
            quantidadeIndicacoes: quantidadeIndicacoes,
            respondido: respondido,
            vendaEfetuada: vendaEfetuada
          };
          totalEnviadoCorretor += enviadoCorretor;
          totalQuantidadeIndicacoes += quantidadeIndicacoes;
          totalRespondido += respondido;
          totalVendaEfetuada += vendaEfetuada;
          $scope.relacaoTotalIndicacoes = {
            totalEnviadoCorretor: totalEnviadoCorretor,
            totalQuantidadeIndicacoes: totalQuantidadeIndicacoes,
            totalRespondido: totalRespondido,
            totalVendaEfetuada: totalVendaEfetuada
          };
          $scope.relacaoIndicacoesCorretor.push(corretor);

        }
      }
    }

    $scope.vizualizaRelatorio = function(idStatus, respondidas, corretorId, dataInicio, dataFim) {

      $state.go('app.contatos.relatorio', {
        parametros: {
          corretorId: corretorId,
          idStatus: idStatus,
          respondidas: respondidas,
          dataInicio: $moment(dataInicio, 'DD/MM/YYYY').format("YYYY-MM-DD"),
          dataFim: $moment(dataFim, 'DD/MM/YYYY').format("YYYY-MM-DD")
        }
      });
    }

    function getParameters() {
      var parametros = {
        filialId: StorageService.getKey('idFilial'),
        dataInicio: typeof $scope.startDate !== 'undefined' ? $moment($scope.startDate, 'DD/MM/YYYY').format("YYYY-MM-DD") : null,
        dataFim: typeof $scope.endDate !== 'undefined' ? $moment($scope.endDate, 'DD/MM/YYYY').format("YYYY-MM-DD") : null,
        arrayDashGestor: true
      };
      return parametros;
    }


    init();
  }
})();
