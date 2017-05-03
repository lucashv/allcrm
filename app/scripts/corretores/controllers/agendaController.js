(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('AgendaController', AgendaController);
  AgendaController.$inject = [
    '$scope',
    '$filter',
    'RecursoModalCorretores',
    'UsuarioAgendaService',
    'StorageService',
    'toastr',
    'RecursoModal',
    '$state',
    'uiCalendarConfig'

  ];

  function AgendaController(
    $scope,
    $filter,
    RecursoModalCorretores,
    UsuarioAgendaService,
    StorageService,
    toastr,
    RecursoModal,
    $state,
    uiCalendarConfig

  ) {


    $scope.eventSources = [];




    function getAgenda(parametro) {
      $scope.loadAgenda = UsuarioAgendaService
        .getRelatorioGeralAgenda(parametro)
        .then(function(lembretes) {

          $scope.lembretes = lembretes._embedded.agenda_usuario;
          uiCalendarConfig.calendars.calendario.fullCalendar('removeEvents');
          uiCalendarConfig.calendars.calendario.fullCalendar('addEventSource', $scope.lembretes);


        }, function(erro) {
          console.log(erro);
        });
    }

    $scope.uiConfig = {
      calendar: {
        // height: 450,
        editable: true,
        eventDurationEditable: false,
        displayEventTime: false,
        eventLimit: 5,
        lang: 'pt-br',
        header: {
          left: 'prev',
          center: 'title',
          right: 'next'
        },
        viewRender: function(view, element) {
          init(view.start, view.end);
        },
        eventDrop: alertOnDrop,
        eventClick: clickLembrete,
        eventMouseover: eventMouseover,
        eventMouseout: eventMouseout,
        eventRender: eventRender

      }
    };

    function eventRender( event, element, view) {
      if(event.contatoNome){
        element.find('.fc-title').replaceWith($filter('capitalize')(event.contatoNome));
      }
    }

    function eventMouseout( event, jsEvent, view ) {
      $scope.overlay.css({"display":"none"});
    }

    $scope.overlay = angular.element('.fc-overlay');

    function eventMouseover(event, jsEvent, view) {

      $scope.overlay.css({"display":"block"});
      $scope.event = angular.copy(event);
      $scope.overlay.removeClass('left right');
      var wrap = angular.element(jsEvent.target).closest('.fc-event');
      var cal = wrap.closest('.calendar');
      var left = wrap.offset().left - cal.offset().left;
      var right = cal.width() - (wrap.offset().left - cal.offset().left + wrap.width());
      if (right > $scope.overlay.width()) {
        $scope.overlay.addClass('left');
      } else if (left > $scope.overlay.width()) {
        $scope.overlay.addClass('right');
      }

      if (wrap.find('.fc-overlay').length === 0) {
        wrap.append($scope.overlay);
      }

    }


    function alertOnDrop(lembrete) {
      updateLembrete(lembrete);
    }

    function clickLembrete(lembrete, jsEvent, view) {
      cadastroLembreteCalendario(lembrete);
    }

    $scope.addEvent = function(lembrete) {
      cadastroLembreteCalendario(lembrete);
    };

    function cadastroLembreteCalendario(lembrete) {


      RecursoModalCorretores.cadastroLembreteCalendario(lembrete)
        .result
        .then(function(novoLembrete) {

          console.log('novoLembrete', novoLembrete);
          // lembrete.id = novoLembrete.id;
          // lembrete.title = novoLembrete.title;
          // lembrete.info = novoLembrete.info;
          // lembrete.start = novoLembrete.start;
          // lembrete.className = novoLembrete.className;
          if (novoLembrete.update) {
            uiCalendarConfig.calendars.calendario.fullCalendar('updateEvent', novoLembrete);
          } else {
            $scope.lembretes.push(novoLembrete);
            uiCalendarConfig.calendars.calendario.fullCalendar('removeEvents');
            uiCalendarConfig.calendars.calendario.fullCalendar('addEventSource', $scope.lembretes);
          }

        }, function() {

        });
    }

    $scope.remove = function(indice, lembrete) {
      var aviso = {
        titulo: 'Confirmação',
        mensagem: 'Você deseja excluir este lembrete?'
      };
      RecursoModal.confirmacao(aviso)
        .result
        .then(function() {
          $scope.lembretes.splice(indice, 1);
          lembrete.status = 0;
          updateLembrete(lembrete);
        }, function() {
          console.log('nada acontece');
        });

    };




    function init(inicio, fim) {

      var parametro = {
        tipo: 'relatorioGeralAgenda',
        idUsuario: StorageService.getKey('id'),
        dataInicio: moment(inicio).format('YYYY-MM-DD'),
        dataFim: moment(fim).format('YYYY-MM-DD')
      };
      getAgenda(parametro);

    }


    function updateLembrete(lembrete) {

      UsuarioAgendaService
        .update(_montaParametro(lembrete))
        .then(function(sucesso) {
          toastr.success('Lembrete atualizado com sucesso.');
          console.log(sucesso);
        }, function(erro) {
          toastr.error('Ocorreu um errro ao atualizar o lembrete.');
          console.log(erro);
        });
    }

    function _montaParametro(lembrete) {
      var novoLembrete = {
        id: lembrete.id,
        idUsuario: StorageService.getKey("id"),
        titulo: lembrete.title,
        descricao: lembrete.info,
        dataAgenda: moment(lembrete.start).format('YYYY-MM-DD'),
        className: lembrete.className[0],
        status: lembrete.status
      };
      return novoLembrete;

    }

  }
})();
