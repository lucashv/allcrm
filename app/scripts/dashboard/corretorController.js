(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('DashboardCorretor', DashboardCorretor);
  DashboardCorretor.$inject = [
    '$scope',
    'InteracoesService',
    'StorageService',
    'UsuarioAgendaService',
    'toastr',
    '$state',
    'ContatoCorretorBloqueioService',
    'CookieService',
    'MontaParametroService',
    '$uibModal',
    'SituacoesInteracoesService'
  ];

  function DashboardCorretor(
    $scope,
    InteracoesService,
    StorageService,
    UsuarioAgendaService,
    toastr,
    $state,
    ContatoCorretorBloqueioService,
    CookieService,
    MontaParametroService,
    $uibModal,
    SituacoesInteracoesService
  ) {

    $scope.envioBloqueado = false;

    $scope.calendarioInicio = {
      opened: false
    };
    $scope.calendarioFim = {
      opened: false
    };
    $scope.dateOptions = {
      formatYear: 'yyyy',
      'class': 'datepicker'
    };
    $scope.exibeDonut = false;
    $scope.donutData = [{
      "value": "",
      "label": ""
    }];
    $scope.exibeCampanha = true;


    $scope.modalContato = function(contato){

      console.log(contato);
      return $uibModal.open({
        templateUrl: '../../views/tmpl/contatos/modalDetalhesContato.html',
        controller: 'ModalDetalhesContato',
        size: 'lg',
        resolve: {
          Contato: function() {
            return angular.copy(contato);
          },
        }
      });
    }


    $scope.interacoesOptions = {
      data: [],
      enableFiltering: true,
      enableColumnMenus: false,

      columnDefs: [
        {
          field: 'dataRetorno',
          displayName: 'Retornar na Data',
          cellTemplate: '<span ng-if="row.entity.dataRetorno">{{ row.entity.dataRetorno }}</span> <span ng-if="!row.entity.dataRetorno"> <i class="fa fa-ban text-danger"></i></span>',
          enableFiltering: false

        },{
        field: 'idContato',
        displayName: 'Id',
        cellTemplate: '<a class="link" ng-href="#app/contatos/detalhes/{{ row.entity.idContato }}" target="_blank"> {{ row.entity.idContato }}  </a>'
      }, {
        field: 'nomeContato',
        displayName: 'Nome',
        cellTemplate: '<span>{{ row.entity.nomeContato | capitalize:true }}</span>',
        width: '30%'
      }, {
        field: 'telefone',
        displayName: 'Telefone',
        cellTemplate: '<span ng-if="row.entity.telefone"> {{ row.entity.telefone | telefone }} </span> <span ng-if="!row.entity.telefone"> <i class="fa fa-ban text-danger"></i></span>'

      },{
        field: 'situacao',
        displayName: 'Situação'
      }]
    };
    $scope.dadosAgendaOptions = {
      data: [],
      enableColumnMenus: false,
      columnDefs: [{
        field: 'contato_id',
        displayName: 'Contato',
        cellTemplate: '  <span ng-if="row.entity.contato_id"> <a class="link" ng-click="modalContato(row)"ng-href="#app/contatos/detalhes/{{:: row.entity.contato_id }}" target="_blank">{{:: row.entity.contatoNome | capitalize:true}}</a> </span>  <span ng-if="!row.entity.contato_id"> <i class="fa fa-ban text-danger"></i> </span>'
      }, {
        field: 'telefone',
        displayName: 'Telefone',
        cellTemplate: '<span ng-if="row.entity.telefone"> {{:: row.entity.telefone | telefone }} </span> <span ng-if="!row.entity.telefone"> <i class="fa fa-ban text-danger"></i></span>'
      }, {
        field: 'titulo',
        displayName: 'Titulo'
      }, {
        field: 'descricao',
        displayName: 'Descrição'
      }, {
        field: 'data_agenda_convertida',
        displayName: 'Data Agenda'
      }]
    };


    function init() {

      if (StorageService.getKey("idFilial") === "1") {
        $scope.exibeCampanha = true;
      }

      var filtroCookie = MontaParametroService.inicializaDataInicioFim(CookieService.getCookie('filtroDashboardCorretor'));
      if (filtroCookie) {
        $scope.filtro = angular.copy(filtroCookie);
      } else {
        $scope.filtro = {
          dataInicio: moment().subtract(1, 'day')._d,
          dataFim: moment()._d
        };
      }


      consultarIndicacoes($scope.filtro, false);

      getIndicacoesCorretor(angular.copy($scope.filtro));
      getContatosBloqueioService();
      getSituacoesInteracoes();
      consultarIndicacoes($scope.filtro, true);
      getGraficoRespostas($scope.filtro);
      $scope.clickAgenda($scope.dataAgenda);
      interacoesVendaEfetuada($scope.filtro);

    }


    $scope.modalContatosBloqueando = function() {
      var modalInstance = $uibModal.open({
        templateUrl: '../../views/tmpl/dashboard/modalContatosBloqueando.html',
        controller: 'ModalContatosBloqueando',
        resolve: {
          listaContatoBloqueio: function() {
            return $scope.listaContatoBloqueio
          }
        }
      });

    }

    function consultarIndicacoes(parametro, grafico) {

      $scope.interacoesOptions.data = [];

      $scope.donutData = [{
        "value": "0",
        "label": "Sem Resultados"
      }];
      $scope.loadInteracoesContato = getIndicacoes(montaParametros(parametro, grafico, false, false))
        .then(function(success) {

            if (grafico) {
              var donutData = montaArrayGrafico(success._embedded.interacoes[0]);
              if (donutData.length > 0) {
                $scope.donutData = donutData;
              }
              $scope.exibeDonut = true;
              return;
            } else {
              $scope.interacoesOptions.data = success._embedded.interacoes;
            }

          },
          function(error) {
            if (error.status === 404) {
              toastr.info("Sem indicações com esses parametros");
              $scope.interacoesOptions.data = [];

              $scope.donutData = [{
                "value": "0",
                "label": "Sem Resultados"
              }];
              return;
            }
            toastr.error('Erro ao consultar indicações!');
          });

    };

    function interacoesVendaEfetuada(parametro) {

      $scope.donutDataVendas = [{
        "value": "0",
        "label": "Sem Resultados"
      }];
      $scope.loadVendas = getIndicacoes(montaParametros(parametro, false, true, false))
        .then(function(success) {

          var donutDataVendas = montaArrayGrafico(success._embedded.interacoes[0]);

          if (donutDataVendas.length > 0) {
            $scope.donutDataVendas = donutDataVendas;
          }
          $scope.exibeDonutVendas = true;

        }, function(error) {
          if (error.status === 404) {
            toastr.info("Sem indicações com venda com esses parametros");
            $scope.donutDataVendas = [{
              "value": "0",
              "label": "Sem Resultados"
            }];
            return;
          }
          toastr.error('Erro ao consultar indicações com venda!');
          $scope.donutDataVendas = [{
            "value": "0",
            "label": "Sem Resultados"
          }];

        });
    };

    function getGraficoRespostas(parametro) {

      $scope.donutRespostas = [{
        "value": "0",
        "label": "Sem Resultados"
      }];
      $scope.loadRespostas = getIndicacoes(montaParametros(parametro, false, false, true));
      $scope.loadRespostas.then(function(success) {

        var donutRespostas = montaArrayGrafico(success._embedded.interacoes[0]);

        if (donutRespostas.length > 0) {

          $scope.donutRespostas = donutRespostas;
        }
        $scope.exibeDonutRespostas = true;

      }, function(error) {
        if (error.status === 404) {
          toastr.info("Sem indicações com venda com esses parametros");
          $scope.donutDataVendas = [{
            "value": "0",
            "label": "Sem Resultados"
          }];
          return;
        }
        toastr.error('Erro ao consultar indicações com venda!');
        $scope.donutDataVendas = [{
          "value": "0",
          "label": "Sem Resultados"
        }];

      });
    }

    function montaArrayGrafico(dados) {
      var objDonut = [];
      Object.keys(dados).forEach(function(key, value) {

        var obj = {
          label: key,
          value: dados[key]
        };
        objDonut.push(obj);
      });
      return objDonut;
    }

    function getIndicacoes(parametros) {
      return InteracoesService.getRelatorioGeralMultiplos(parametros);
    }



    function getSituacoesInteracoes() {

      $scope.loadSituacoes = SituacoesInteracoesService
        .query()
        .then(function(success) {
          $scope.situacaoList = success._embedded.situacoes_interacoes;
        });
    }


    $scope.ocultaAvisoCampanha = function() {
      $scope.exibeCampanha = !$scope.exibeCampanha;
    }

    $scope.consultar = function(parametros) {
      var parametro = MontaParametroService.setaNuloConverteDatas(angular.copy(parametros));
      getIndicacoesCorretor(angular.copy(parametro));
      consultarIndicacoes(parametro, false);
      consultarIndicacoes(parametro, true);
      interacoesVendaEfetuada(parametro);
      getGraficoRespostas($scope.filtro);
    };

    function getAgenda(parametro) {
      $scope.dadosAgenda = [];
      var parametros = MontaParametroService.setaNuloConverteDatas(parametro);
      parametros.tipo = 'relatorioGeralAgenda';
      parametros.idUsuario = StorageService.getKey('id');

      $scope.loadAgenda = UsuarioAgendaService
        .getRelatorioGeralAgenda(parametros)
        .then(function(success) {
          if (success.total_items === 0) {
            toastr.info('Não existem tarefas agendadas neste período para o seu usuário.');
            $scope.dadosAgendaOptions.data = {};
            return;
          }
          $scope.dadosAgendaOptions.data = setaValorBoolean(success._embedded.agenda_usuario);
        }, function(error) {
            $scope.dadosAgendaOptions.data = {};
        });
    };

    $scope.abrirCalendarioInicio = function() {
      $scope.calendarioInicio.opened = true;
    }

    $scope.abrirCalendarioFim = function() {
      $scope.calendarioFim.opened = true;
    }

    function getIndicacoesCorretor(parametros) {
      //totalizador
      $scope.load = InteracoesService
        .relacaoIndicacoes(getParameters(parametros))
        .then(function(success) {
          if (success.totalitems === 0) {
            toastr.info('Não existem indicações neste período para o seu usuário.');
            return true;
          }
          $scope.indicacoesCorretor = success._embedded.interacoes[0];
          $scope.showCards = true;
          $scope.showDonut = true;
        }, function(error) {
          console.info(erro);
        });
    };

    $scope.setData = function(tipo) {


      if (tipo === "hoje") {
        $scope.filtro.dataFim = moment()._d;
        $scope.filtro.dataInicio = moment()._d;
      }

      if (tipo === "semana") {
        $scope.filtro.dataFim = moment()._d;
        $scope.filtro.dataInicio = moment().subtract(7, 'day')._d;
      }

      if (tipo === "mes") {
        $scope.filtro.dataFim = moment()._d;
        $scope.filtro.dataInicio = moment().subtract(30, 'day')._d;
      }
      consultarIndicacoes($scope.filtro, false);

      interacoesVendaEfetuada($scope.filtro);
      consultarIndicacoes($scope.filtro, true);
      getIndicacoesCorretor(angular.copy($scope.filtro));
      getGraficoRespostas($scope.filtro);
    };


    function getParameters(parametro) {
      var parametros = MontaParametroService.setaNuloConverteDatas(parametro);
      parametros.corretorId = StorageService.getKey('id');
      return parametros;
    }

    $scope.clickAgenda = function(data) {
      var datas = {
        dataInicio: moment($scope.dataAgenda).format("YYYY-MM-DD"),
        dataFim: moment($scope.dataAgenda).add(30, 'days').format("YYYY-MM-DD")
      }
      getAgenda(angular.copy(datas));
    }

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
    }

    $scope.redirecionaViewIndicacoes = function(situacao, dataInicio, dataFim) {
      $scope.interacoesOptions.data = [];
      var parametro = {
        idStatus: situacao,
        corretorId: StorageService.getKey('id'),
        dataInicio: moment(dataInicio).format('YYYY-MM-DD'),
        dataFim: moment(dataFim).format('YYYY-MM-DD')
      };

      InteracoesService
        .gerRelatorioGeral(parametro)
        .then(function(sucesso) {
          if (sucesso.total_items > 1) {
            $scope.interacoesOptions.data =  sucesso._embedded.interacoes;
              $scope.interacoesOptions.data.pop();

          }else{
              $scope.interacoesOptions.data.push({nomeContato : 'Sem resultadados.'});
            toastr.info('Não existem indicações neste período para o seu usuário com este parâmetro.');

          }
        }, function(erro) {
          console.log(erro);
        });
    };

    function getContatosBloqueioService() {

      ContatoCorretorBloqueioService
        .getContatosBloqueioCorretor(StorageService.getKey('id'))
        .then(function(res) {

          $scope.exibeAvisoBloqueio = true;
          $scope.listaContatoBloqueio = res._embedded.contato_corretor_bloqueio;
          $scope.totalContatos = res.totalitems;

          if (res.total_items > 0) {
             $scope.envioBloqueado = true;
          }

        }, function(erro) {
          $scope.envioBloqueado = false;
          console.log(erro);
        });
    }


    $scope.limparFiltro = function() {
      $scope.filtro = {};
      CookieService.removeCookie('filtroDashboardCorretor');
    }

    $scope.salvarFiltros = function(filtro) {
      CookieService.gravaCookieInfinito('filtroDashboardCorretor', filtro);
    }

    function montaParametros(parametro, grafico, vendasEfetuadas, graficoPrincipaisRespostas) {

      var indicacoesPrimeTipo = null;

      if (StorageService.getKey("idFilial") === "19") {
        var indicacoesPrimeTipo = true;
      }

      var parametros = {
        graficoOperadoraAfinidade: (grafico !== false) ? true : null,
        nome: typeof parametro.nome !== 'undefined' ? parametro.nome : null,
        telefone: typeof parametro.telefone !== 'undefined' ? parametro.telefone : null,
        idStatus: typeof parametro.idStatus !== 'undefined' ? parametro.idStatus : null,
        corretorId: StorageService.getKey('id'),
        dataInicio: typeof parametro.dataInicio !== 'undefined' ? moment(parametro.dataInicio).format('YYYY-MM-DD') : null,
        dataFim: typeof parametro.dataFim !== 'undefined' ? moment(parametro.dataFim).format('YYYY-MM-DD') : null,
        indicacoesPrime: indicacoesPrimeTipo,
        multiplos: true,
        vendasEfetuadas: (vendasEfetuadas !== false) ? true : null,
        graficoVendasEfeutadas: (vendasEfetuadas !== false) ? true : null,
        graficoPrincipaisRespostas: (graficoPrincipaisRespostas !== false) ? true : null
      };

      return serialize(removeNullParams(parametros));
    };

    function serialize(obj) {

      var param = '?' + Object.keys(obj).reduce(function(a, k) {
        a.push(k + '=' + encodeURIComponent(obj[k]));
        return a
      }, []).join('&');
      return param.substring(1);
    }

    function removeNullParams(parametros) {

      for (var i in parametros) {
        if (parametros[i] === null || parametros[i] === 'undefined') {
          delete parametros[i];
        }
      }
      return parametros;
    }

    init();

  }
})();
