(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('DashboardGestorNacional', DashboardGestorNacional);
  DashboardGestorNacional.$inject = [
    '$scope',
    '$moment',
    'GestorNacionalService',
    'StorageService',
    'UsuarioAgendaService',
    'toastr'
  ];

  function DashboardGestorNacional(
    $scope,
    $moment,
    GestorNacionalService,
    StorageService,
    UsuarioAgendaService,
    toastr
   ) {
    $scope.startDate = $moment().subtract(1, 'month').format('DD/MM/YYYY');
    $scope.endDate = $moment().format('DD/MM/YYYY');
    $scope.rangeOptions = {
      opens: 'left',
      startDate: $moment().subtract(1, 'month').format('DD/MM/YYYY'),
      endDate: $moment().format('DD/MM/YYYY'),
      parentEl: '#content',
      locale: {
        format: 'DD/MM/YYYY',
        applyLabel: 'Consultar',
        cancelLabel: 'Cancelar',
        daysOfWeek: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
          'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ]
      }
    };

    angular.element("#content").on('apply.daterangepicker', function() {
      init();
    });

    $scope.page = {
      title: 'DashBoard',
      subtitle: 'Corretor'
    };

    function getParameters() {
      var parametros = {
        dataInicio: typeof $scope.startDate !== 'undefined' ? $moment($scope.startDate, 'DD/MM/YYYY').format("YYYY-MM-DD") : null,
        dataFim: typeof $scope.endDate !== 'undefined' ?  $moment($scope.endDate, 'DD/MM/YYYY').format("YYYY-MM-DD"): null,
        dashGestorNacional: true
      };

      return parametros;
    }

    function init() {

      $scope.relacaoIndicacoesFiliais = [];
      $scope.relacaoTotalIndicacoes = {};
      $scope.mostrarCartao = false;
      $scope.load = GestorNacionalService.gerRelatorioGeral(getParameters(), true);
      $scope.load.then(function(success) {

        if (success.total_items === 0) {
          toastr.info('Não foram encontradas resultados.');
          return;
        }
        grandeMontaArray(success._embedded.gesto_nacional_dash_board);
      });
    }

    $scope.detalhesFilial = function(filial) {
      $scope.mostrarCartao = false;
      $scope.filial = filial;
      $scope.mostrarCartao = true;
    };

    function grandeMontaArray(indicacoesFiliais) {
      var enviadoCorretor = 0,
        respondido = 0,
        vendaEfetuada = 0,
        quantidadeIndicacoes = 0,
        cont = 0,
        totalEnviadoCorretor = 0,
        totalQuantidadeIndicacoes = 0,
        totalRespondido = 0,
        totalVendaEfetuada = 0,
        filial = {};
      indicacoesFiliais.forEach(function(indicacaoFiliai) {
        enviadoCorretor = 0;
        respondido = 0;
        vendaEfetuada = 0;
        quantidadeIndicacoes = 0;
        cont = 0;
        indicacaoFiliai.forEach(function(indicacao) {
          if (indicacao.situacaoId == 2) {
            enviadoCorretor++;
            quantidadeIndicacoes++;
            cont++;
            constroiArray(indicacao, cont, indicacaoFiliai.length);
            return;
          }
          if (indicacao.situacaoId == 5) {
            vendaEfetuada++;
            respondido++;
            quantidadeIndicacoes++;
            cont++;
            constroiArray(indicacao, cont, indicacaoFiliai.length);
            return;
          }
          respondido++;
          quantidadeIndicacoes++;
          cont++;
          constroiArray(indicacao, cont, indicacaoFiliai.length);


        });
      });

      function constroiArray(indicacao, atual, tamanhoArray) {
        if (atual == tamanhoArray) {
          filial = {
            nomeFilial: indicacao.nomeFilialCorretor,
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
          $scope.relacaoIndicacoesFiliais.push(filial);
        }
      }
    }

    init();

  }
})();
