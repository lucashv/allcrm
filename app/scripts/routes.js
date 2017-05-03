(function(){
  'use strict';
  angular.module('minovateApp')
  .config(config);
  config.$inject =['$stateProvider', '$urlRouterProvider', '$httpProvider', '$locationProvider'];
  function config ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/core/login');

    /**
     * Intercepta as requisições HTTP;
     */
    $httpProvider.interceptors.push('APIInterceptorService');

    $stateProvider

      .state('app', {
        abstract: true,
        url: '/app',
        templateUrl: 'views/tmpl/app.html'
      })
      .state('app.sessaoexpirada', {
        url: '/sessaoexpirada',
        templateUrl: 'views/sessaoExpirada.html'
      })
      //dashboard

    .state('app.dashboard', {
        url: '/dashboard',
        abstract: true,
        template: '<div ui-view></div>'
      })

    //dashboardCorretor
    .state('app.dashboard.corretor', {
        url: '/corretor',
        templateUrl: 'views/tmpl/dashboard/corretor.html',
        controller: 'DashboardCorretor'
      })
      .state('app.dashboard.coordenador', {
        url: '/coordenador',
        templateUrl: 'views/tmpl/dashboard/coordenador.html',
        controller: 'CoordenadorController'
      })
      //Dash Gestor Comercial Nacional
      .state('app.dashboard.gestorNacional', {
        url: '/gestorNacional',
        templateUrl: 'views/tmpl/dashboard/gestorNacional.html',
        controller: 'DashboardGestorNacional'
      })

    //Gestor Filial
    .state('app.coordenador', {
      abstract: true,
      url: '/coordenador',
      template: '<div ui-view></div>'
    })

    //Gestor Filial
    .state('app.coordenador.autorizaReposicao', {
      url: '/autorizaReposicao',
      templateUrl: 'views/tmpl/coordenador/autorizaReposicao.html',
      controller: 'AutorizaReposicaoController',
      params: {
        parametros: {}
      },
    })

    .state('app.coordenador.distribuicao', {
      url: '/distribuicao',
      templateUrl: 'views/tmpl/coordenador/distribuicao.html',
      controller: 'DistribuicaoIndicacao',
    })

    //Contatos
    .state('app.contatos', {
      abstract: true,
      url: '/contatos',
      template: '<div ui-view></div>'
    })

    //contatos/new
    .state('app.contatos.new', {
      url: '/new',
      templateUrl: 'views/tmpl/contatos/new.html',
      controller: 'AdicionarContatosCtrl'
    })

    //contatos/enviar
    .state('app.contatos.enviar', {
      url: '/enviar',
      templateUrl: 'views/tmpl/contatos/enviar.html',
      controller: 'ContatosEnviarCtrl'
    })

    //contatos/editar
    .state('app.contatos.detalhes', {
      url: "/detalhes/:id",
      parent: "app.contatos",
      templateUrl: 'views/tmpl/contatos/detalhes.html',
      controller: 'DetalheCtrl'
    })

    //contatos/consultar
    .state('app.contatos.consultar', {
        url: "/consultar",
        templateUrl: 'views/tmpl/contatos/consultaContato.html'
      })
      .state('app.contatos.preCadastro', {
        url: "/preCadastro",
        templateUrl: 'views/tmpl/contatos/preCadastro.html',
        controller: 'PreCadastro'
      })

    //contatos/consultar
    .state('app.contatos.relatorio', {
        url: "/relatorio",
        params: {
          parametros: {}
        },
        templateUrl: 'views/tmpl/contatos/relatorio.html',
        controller: 'RelatorioController'
      })
      .state('app.contatos.relatorioEnvio', {
        url: "/relatorioEnvio",
        params: {
          parametros: null,
          corretor: null,
          situacao: null,
          respondidas: null,
          dataInicio: null,
          dataFim: null
        },
        templateUrl: 'views/tmpl/contatos/relatorioEnvio.html',
        controller: 'RelatorioEnvioController'
      })

    //Corretores
    .state('app.corretores', {
        url: '/corretores',
        abstract: true,
        template: '<div ui-view></div>'
      })
      .state('app.corretores.indicacoes', {
        url: '/indicacoes',
        templateUrl: 'views/tmpl/corretores/indicacoes.html',
        controller: 'IndicacoesCorretoresController',
        params: {
          parametros: {}
        }
      })
      .state('app.corretores.relatorioIndicacoes', {
        url: '/relatorioIndicacoes',
        templateUrl: 'views/tmpl/corretores/relatorio-indicacoes.html',
        controller : 'RelatorioIndicacoesCorretoresController'
      })
      .state('app.corretores.relatorioPrime', {
        url: "/relatorioPrime",
        templateUrl: 'views/tmpl/corretores/relatorioPrime.html',
        controller: 'RelatorioPrimeController'
      })
      .state('app.corretores.novoContato', {
        url: '/novoContato',
        templateUrl: 'views/tmpl/corretores/novoContato.html',
        controller: 'NovoContatoCorretor'
      })
      .state('app.corretores.tarefasAgendadas', {
        url: '/tarefasAgendadas',
        templateUrl: 'views/tmpl/corretores/tarefasAgendadas.html',
        controller: 'TarefasAgendadasController'
      })
      .state('app.corretores.agenda', {
        url: '/agenda',
        templateUrl: 'views/tmpl/corretores/agenda.html',
        controller: 'AgendaController',
        controllerAs: 'Agenda'
      })
      .state('app.corretores.reposicao', {
        url: '/reposicao',
        templateUrl: 'views/tmpl/corretores/reposicao.html',
        controller: 'ReposicaoController',
        controllerAs: 'Reposicao'
      })

      //Ligacoes
      .state('app.recepcao', {
        abstract: true,
        url: '/recepcao',
        template: '<div ui-view></div>'
      })

    //Ligacoes/new
    .state('app.recepcao.ligacoes', {
        url: '/ligacoes',
        templateUrl: 'views/tmpl/ligacoes/new.html'
      })
      //Ligacoes/relatorio
      .state('app.recepcao.relatorio', {
        url: '/relatorio',
        templateUrl: 'views/tmpl/ligacoes/relatorio.html',
        controller: 'LigacoesRelatorioController'
      })
      //plantoes

    //plantoes/new
    .state('app.recepcao.plantoes', {
        url: '/plantoes',
        templateUrl: 'views/tmpl/plantoes/new.html',
        controller: 'AdicionarPlantoes'
      })
      .state('app.recepcao.drag', {
        url: '/drag',
        templateUrl: 'views/tmpl/plantoes/new-drag.html',
        controller: 'DragController'
      })
      .state('app.prime', {
        abstract: true,
        url: '/prime',
        template: '<div ui-view></div>'
      })

    //contatos/enviarPrime
    .state('app.prime.enviar', {
      url: '/enviar',
      templateUrl: 'views/tmpl/prime-broker/enviar.html',
      controller: 'EnviarContatosPrimeController'
    })


    .state('app.reposicao', {
      abstract: true,
      url: '/reposicao',
      template: '<div ui-view></div>'
    })

    .state('app.reposicao.solicitacoes', {
        url: '/reposicao',
        templateUrl: 'views/tmpl/reposicao/solicitacoes.html',
        controller: 'SolicitacoesReposicaoController'
      })
      .state('app.reposicao.relatorio', {
        url: '/relatorio',
        templateUrl: 'views/tmpl/reposicao/relatorio.html',
        controller: 'RelatorioReposicaoController'
      })

    .state('app.suporte', {
      abstract: true,
      url: '/suporte',
      template: '<div ui-view></div>'
    })
    .state('app.suporte.new', {
      url: '/new',
      templateUrl: 'views/tmpl/suporte/newChamado.html',
      controller: 'NewChamadoController',
      controllerAs: 'AberturaChamado'
    })
    .state('app.suporte.novosChamados', {
      url: '/novosChamados',
      templateUrl: 'views/tmpl/suporte/novosChamados.html',
      controller: 'NovosChamadosController',
      controllerAs: 'NovosChamados'
    })
    .state('app.suporte.chamados', {
      url: '/chamados',
      templateUrl: 'views/tmpl/suporte/chamados.html',
      controller: 'ChamadosController',
      controllerAs: 'Chamados'
    })
    .state('app.suporte.meusChamados', {
      url: '/meusChamados',
      templateUrl: 'views/tmpl/suporte/meusChamados.html',
      controller: 'MeusChamadosController',
      controllerAs: 'MeusChamados'
    })
    .state('app.suporte.detalhesChamado', {
      url: '/detalhesChamado/:id',
      templateUrl: 'views/tmpl/suporte/detalhesChamado.html',
      controller: 'DetalhesChamadoController',
      controllerAs: 'DetalhesChamado'
    })



    .state('app.info', {
      abstract: true,
      url: '/info',
      template: '<div ui-view></div>'
    })

    .state('app.info.changelog', {
      url: '/changelog',
      templateUrl: 'views/tmpl/info/changelog.html',
      controller: 'ChangeLogController'
    })


    //app core pages (errors, login,signup)
    .state('core', {
        abstract: true,
        url: '/core',
        template: '<div ui-view></div>'
      })
      //login
      .state('core.login', {
        url: '/login',
        controller: 'LoginCtrl',
        templateUrl: 'views/tmpl/login/login.html'
      })
      //signup
      .state('core.signup', {
        url: '/signup',
        controller: 'SignupCtrl',
        templateUrl: 'views/tmpl/pages/signup.html'
      })
      //forgot password
      .state('core.forgotpass', {
        url: '/forgotpass',
        controller: 'ForgotPasswordCtrl',
        templateUrl: 'views/tmpl/pages/forgotpass.html'
      })
      //page 404
      .state('core.page404', {
        url: '/page404',
        templateUrl: 'views/tmpl/pages/page404.html'
      })
      //page 500
      .state('core.page500', {
        url: '/page500',
        templateUrl: 'views/tmpl/pages/page500.html'
      })
      //page offline
      .state('core.page-offline', {
        url: '/page-offline',
        templateUrl: 'views/tmpl/pages/page-offline.html'
      })

      //locked screen
    .state('core.locked', {
      url: '/locked',
      templateUrl: 'views/tmpl/pages/locked.html'
    });
  }

})();
