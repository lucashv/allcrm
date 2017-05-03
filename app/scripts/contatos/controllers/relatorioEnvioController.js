(function() {
  'use strict';
  angular.module('minovateApp').
  controller('RelatorioEnvioController', RelatorioEnvioController);

  RelatorioEnvioController.$inject = [
    '$scope',
    '$stateParams',
    '$location',
    '$moment',
    'StorageService',
    'AclService',
    'CorretoresService',
    'TiposEnviosService',
    'toastr',
    'CorretoresComboService',
    'UserService',
    'FiliaisService',
    'ContatosService'
  ];

  function RelatorioEnvioController(
    $scope,
    $stateParams,
    $location,
    $moment,
    StorageService,
    AclService,
    CorretoresService,
    TiposEnviosService,
    toastr,
    CorretoresComboService,
    UserService,
    FiliaisService,
    ContatosService
  ) {
    var idModulo = 4;
    AclService.validaPermisao(idModulo);


    $scope.dataAtual = new Date();
    $scope.usuarioLogado = StorageService.getKey('nome') + ' ' + StorageService.getKey('sobreNome');
    $scope.format = 'dd/MM/yyyy';
    $scope.dateOptions = {
      formatYear: 'yyyy',
      'class': 'datepicker'
    };
    $scope.interacoes = [];
    $scope.itemsByPage = 25;
    $scope.tamanhoArray = 0;
    $scope.page = {
      title: 'Contato',
      subtitle: 'Relatório Envio Contatos'
    };

    $scope.mostarCalendarioInicio = {
      opened: false
    };
    $scope.mostarCalendarioFim = {
      opened: false
    };


    function init() {

      $scope.loadUusuarios = UserService.getUsuarioCadastroContato(4)
        .then(function(sucesso) {
          $scope.usuariosCadastro = sucesso._embedded.usuarios;
        }, function(erro) {
          console.log(erro);
        });

      $scope.loadTiposEnvios = TiposEnviosService.getData()
        .then(function(success) {
          $scope.tiposEnvios = success._embedded.tipos_envios;
        });

      $scope.loadCorretores = CorretoresService.getByParameter("todos")
        .then(function(success) {
          $scope.corretoresList = success._embedded.corretores;
        });
    }


    $scope.consultar = function(parametro) {
      $scope.interacoes = [];
      $scope.mostrarRelatorio = false;
      if (validaParametros(parametro)) {
        
        console.log(montaParametros(parametro));

        $scope.loadRelatorio = ContatosService.getRelatorioDeEnvioContatos(montaParametros(parametro))
          .then(function(success) {
            if (success.total_items <= 1) {
              toastr.info('Sem resultados com esses paramêtros.');
              $scope.mostrarRelatorio = false;
              delete $scope.interacoes;
              return;
            }
            $scope.interacoes = success._embedded.contatos;
            $scope.data = [].concat($scope.interacoes);
            $scope.tamanhoArray = $scope.interacoes.length;
            $scope.mostrarRelatorio = true;
          }, function(error) {
            console.log(error);
          });

      }

    };



    $scope.imprimirRelatorio = function() {
      window.print();
    };

    $scope.limpar = function() {
      delete $scope.parametro;
      $scope.mostrarRelatorio = false;
      $scope.interacoes = [];

    };


    function validaParametros(parametros) {
      if (typeof parametros === 'undefined') {
        toastr.info('Informe os paramêtros para consulta.');
        return false;
      }
      return true;
    }


    var montaParametros = function(parametro) {
      return {
        corretorId: typeof parametro.corretor !== 'undefined' ? parametro.corretor.id : null,
        tipoEnvioId: typeof parametro.tipoEnvio !== 'undefined' ? parametro.tipoEnvio.id : null,
        dataInicio: typeof parametro.dataInicio !== 'undefined' ? moment(parametro.dataInicio).format('YYYY-MM-DD') : null,
        dataFim: typeof parametro.dataFim !== 'undefined' ? moment(parametro.dataFim).format('YYYY-MM-DD') : null,
        usuarioId: typeof parametro.usuarioCadastroId !== 'undefined' ? parametro.usuarioCadastroId : null,
      };
    };

    $scope.openCalendarioInicio = function() {
      $scope.mostarCalendarioInicio.opened = true;
    };
    $scope.openCalendarioFim = function() {
      $scope.mostarCalendarioFim.opened = true;
    };



    init();



  }
})();
