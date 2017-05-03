(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('TarefasAgendadasController', TarefasAgendadasController);
  TarefasAgendadasController.$inject = [
    '$scope',
    'StorageService',
    'UsuarioAgendaService',
    'toastr',
    'DateService',
    '$state',
    '$uibModal',
    'RecursoModalCorretores'
  ];

  function TarefasAgendadasController(
    $scope,
    StorageService,
    UsuarioAgendaService,
    toastr,
    DateService,
    $state,
    $uibModal,
    RecursoModalCorretores

  ) {

    $scope.page = {
      title: 'DashBoard',
      module: 'Corretores',
      subtitle: 'Tarefas Agendadas'
    };


    $scope.format = "dd/MM/yyyy";
    $scope.showAgenda = false;
    $scope.parametro = {};
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

    $scope.limpar = function() {
      $scope.parametro = [];
      $state.reload();
    };

    $scope.openCalendarioInicio = function() {
      $scope.mostarCalendarioInicio.opened = true;
    };
    $scope.openCalendarioFim = function() {
      $scope.mostarCalendarioFim.opened = true;
    };

    $scope.criarLembrete = function() {

      RecursoModalCorretores
        .cadastroLembreteCalendario()
        .result
        .then(function() {

        }, function() {

        });
    };


    $scope.deleteAgenda = function(agenda) {
      $scope.loadAgenda = UsuarioAgendaService.delete(agenda.id);
      $scope.loadAgenda.then(function(success) {
        $scope.removeItemAgenda(agenda);
        toastr.success('Agenda excluida com sucesso.');
      }, function(erro) {

      });
    };

    $scope.removeItemAgenda = function removeItem(agenda) {
      var index = $scope.dadosAgenda.indexOf(agenda);
      if (index !== -1) {
        $scope.dadosAgenda.splice(index, 1);
      }
    };

    $scope.concluiAgenda = function(lembrete) {
      de(lembrete);
      UsuarioAgendaService.update(lembrete).then(function(success) {

        toastr.success('Status da tarefa alterado com sucesso.');
      }, function(error) {
        toastr.error('Erro ao concluir Tarefa.');
      });
    };

    function setaValorBoolean(agenda) {
      var arrayTemp = [];
      agenda.forEach(function(evento) {

        if (evento.concluida != 0) {
          evento.concluida = true;
        } else {
          evento.concluida = false;
        }
        arrayTemp.push(evento);

      });
      return arrayTemp;

    };

    $scope.consultar = function(parametro){

      var parametros = getParameter(parametro);
      var agenda = UsuarioAgendaService.getRelatorioGeralAgenda(parametros);
      $scope.loadRelatorio = agenda;


      agenda.then(function(success) {
        if (success.total_items === 0) {
          $scope.showAgenda = false;
          toastr.info('Não existem tarefas agendadas com esses parâmetros.');
          return;
        }
        $scope.showAgenda = true;

        $scope.dadosAgenda = setaValorBoolean(success._embedded.agenda_usuario);

      }, function(error) {
        var erro = angular.toJson(error);
        de(erro);
        toastr.error('Erros ao consultar tarefas:');

      });
    };

    function getParameter(parametro) {

      var  inativos =  typeof parametro.inativos !== 'undefined' ? parametro.inativos : null;

      var parametros = {
        idUsuario: StorageService.getKey('id'),
        tipo: 'relatorioGeralAgenda',
        dataInicio: typeof parametro.dataInicio !== 'undefined' ? DateService.converteDatas(parametro.dataInicio) : null,
        dataFim:  typeof parametro.dataFim !== 'undefined' ? DateService.converteDatas(parametro.dataFim) : null,
        inativos : typeof parametro.inativos !== 'undefined' ? parametro.inativos : null,
        concluidos: typeof parametro.concluidos !== 'undefined' ? parametro.concluidos : null
      };

      return parametros;
    }

    function init() {

      $scope.itemsByPage = 25;
      $scope.parametro = [];

      var dataInicio = new Date();
      dataInicio.setDate(dataInicio.getDate() - 30);
      var dataFim =  new Date();
      dataFim.setDate( dataFim.getDate());

      $scope.parametro = {
        dataInicio: new Date().setDate(new Date().getDate() - 5),
        dataFim:   new Date()
      };
      $scope.consultar( $scope.parametro );
    }
    init();


  }
})();
