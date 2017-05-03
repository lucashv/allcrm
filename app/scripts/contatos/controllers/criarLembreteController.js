(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('ModalCriarLembreteCtrl', ModalCriarLembreteCtrl);

  ModalCriarLembreteCtrl.$inject = [
    '$scope',
    '$uibModal',
    'toastr',
    '$stateParams',
    '$uibModalInstance',
    'StorageService',
    'interacaoContato',
    'DateService',
    'UsuarioAgendaService'
  ];

  function ModalCriarLembreteCtrl($scope,
    $uibModal,
    toastr,
    stateParams,
    $uibModalInstance,
    StorageService,
    interacaoContato,
    DateService,
    UsuarioAgendaService
  ){

    console.log(interacaoContato);

    $scope.data = null;
    $scope.dateOptions = {
      formatYear: 'yyyy',
      'class': 'datepicker'
    };
    $scope.format = 'dd/MM/yyyy';
    $scope.mostrarCalendario = {
      opened: false
    };
    $scope.horario = new Date();
    $scope.hstep = 1;
    $scope.mstep = 1;
    $scope.ismeridian = false;

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

    $scope.salvarLembrete = function(lembrete, data, hora) {


      $scope.loadingInsertInteracao = UsuarioAgendaService.create(montarLembreteAgenda(lembrete, data, hora));
      $scope.loadingInsertInteracao.then(function(success) {
        $uibModalInstance.dismiss('cancel');
        toastr.success('Novo lembrete adicionado com successo na sua agenda.');
        $scope.cancel();
      }, function(error) {
        toastr.error('Erro ao criar um novo lembrete na sua agenda: ' + error);
      });


    };

    function montarLembreteAgenda(lembrete, data, horario) {
      var informacoesAgenda = null;
      var minutos = null;
      var dataLembrete = null;

      if (horario.getMinutes() < 10) {
        minutos = "0" + horario.getMinutes();
      } else {
        minutos = horario.getMinutes();
      }
      dataLembrete = DateService.converteDatas(data) + " " + horario.getHours() + ":" + minutos + ":00";
      informacoesAgenda = {
        idUsuario: StorageService.getKey("id"),
        titulo: lembrete.titulo,
        descricao: lembrete.observacao,
        idContato: interacaoContato.contatoId,
        dataAgenda: dataLembrete
      };
      return informacoesAgenda;
    }


    $scope.abrirCalendario = function() {
      $scope.mostrarCalendario.opened = true;
    };

    $scope.toggleMin = function() {
      $scope.minData = $scope.minData ? null : new Date();
    };

    $scope.toggleMin();


  }
})();
