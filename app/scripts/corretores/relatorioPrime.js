(function() {
  'use strict';
  angular.module('minovateApp').
  controller('RelatorioPrimeController', RelatorioPrimeController);

  RelatorioPrimeController.$inject = [
    '$scope',
    '$stateParams',
    '$location',
    '$moment',
    'StorageService',
    'AclService',
    'InteracoesService',
    'toastr'
  ];

  function RelatorioPrimeController(
    $scope,
    $stateParams,
    $location,
    $moment,
    StorageService,
    AclService,
    InteracoesService,
    toastr
  ) {

    var idModulo = 15;
    AclService.validaPermisao(idModulo);

    $scope.dataAtual = new Date();
    $scope.usuarioLogado = StorageService.getKey('nome') + ' ' + StorageService.getKey('sobreNome');
    $scope.format = 'dd/MM/yyyy';
    $scope.dateOptions = {
      formatYear: 'yyyy',
      'class': 'datepicker'
    };
    $scope.interacoes = [];
    $scope.parametro = [];
    $scope.itemsByPage = 25;
    $scope.tamanhoArray = 0;
    $scope.page = {
      title: 'Contato',
      subtitle: 'Relatório Contatos Prime'
    };

    $scope.mostarCalendarioInicio = {
      opened: false
    };
    $scope.mostarCalendarioFim = {
      opened: false
    };


    $scope.consultar = function(parametro) {



      $scope.loadRelatorio = InteracoesService.gerRelatorioGeral(montaParametros(parametro));
      $scope.loadRelatorio.then(function(success) {
        if (success.total_items <= 1) {
          toastr.info('Sem resultados com esses paramêtros.');
          $scope.mostrarRelatorio = false;
          $scope.interacoes = {};
          return;
        }
        $scope.interacoes = success._embedded.interacoes;
        $scope.interacoes.pop();
        $scope.data = [].concat($scope.interacoes);
        $scope.tamanhoArray = $scope.interacoes.length;
        $scope.mostrarRelatorio = true;
      }, function(error) {
        console.log(error);
      });
    };

    $scope.imprimirRelatorio = function() {
      window.print();
    };

    $scope.limpar = function() {
      $scope.parametro = [];
      $scope.mostrarRelatorio = false;
      $scope.interacoes = [];

    };

    function montaParametros(parametro) {

      var parametros = {
        idContato: typeof parametro.id !== 'undefined' ? parametro.id : null,
        nome: typeof parametro.nome !== 'undefined' ? parametro.nome : null,
        telefone: typeof parametro.telefone !== 'undefined' ? parametro.telefone : null,
        email: typeof parametro.email !== 'undefined' ? parametro.email : null,
        idOperadora: typeof parametro.operadora !== 'undefined' ? parametro.operadora.id : null,
        idStatus: typeof parametro.situacao !== 'undefined' ? parametro.situacao.id : null,
        corretorId: typeof parametro.corretor !== 'undefined' ? parametro.corretor.id : null,
        tipoEnvio: typeof parametro.tipoEnvio !== 'undefined' ? parametro.tipoEnvio.id : null,
        dataInicio: typeof parametro.dataInicio !== 'undefined' ? moment(parametro.dataInicio).format('YYYY-MM-DD') : null,
        dataFim: typeof parametro.dataFim !== 'undefined' ?  moment(parametro.dataFim).format('YYYY-MM-DD') : null,
        origemTipo: "outras",
        idOrigem: 155,
        pmePf: typeof parametro.tipo !== 'undefined' ? parametro.tipo : null,
        empresa: typeof parametro.empresa !== 'undefined' ? parametro.empresa : null,
        inativos: typeof parametro.inativo !== 'undefined' ? true : null,
        respondidas: typeof parametro.respondidas !== 'undefined' ? parametro.respondidas : null,
        usuarioCadastroId : StorageService.getKey('id')
      };


      return parametros;
    };

    $scope.openCalendarioInicio = function() {
      $scope.mostarCalendarioInicio.opened = true;
    };
    $scope.openCalendarioFim = function() {
      $scope.mostarCalendarioFim.opened = true;
    };






  }
})();
