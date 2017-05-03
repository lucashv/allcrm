(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('RelatorioController', RelatorioController);

  RelatorioController.$inject = [
    '$scope',
    '$stateParams',
    '$location',
    '$moment',
    'StorageService',
    'AclService',
    'CorretoresService',
    'FornecedoresService',
    'OutrasOrigensService',
    'SitesService',
    'OperadoraService',
    'TiposEnviosService',
    'SituacoesInteracoesService',
    'InteracoesService',
    'toastr',
    'CorretoresComboService',
    'UserService',
    'FiliaisService'
  ];

  function RelatorioController(
    $scope,
    $stateParams,
    $location,
    $moment,
    StorageService,
    AclService,
    CorretoresService,
    FornecedoresService,
    OutrasOrigensService,
    SitesService,
    OperadoraService,
    TiposEnviosService,
    SituacoesInteracoesService,
    InteracoesService,
    toastr,
    CorretoresComboService,
    UserService,
    FiliaisService
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
    // $scope.parametro = [];
    $scope.itensPorPagina = 10;
    $scope.tamanhoArray = 0;
    $scope.page = {
      title: 'Contato',
      subtitle: 'Relatório Contatos'
    };

    $scope.mostarCalendarioInicio = {
      opened: false
    };
    $scope.mostarCalendarioFim = {
      opened: false
    };





    function init() {
      _validaExibicaoFilial();
      _validaExibicaoFilial();
      _getFornecedores();
      _getUsuarioCadastro();
      _getFiliais();
      _getSituacoesInteracoes();
      _getTiposEnvios();
      _getOperadoras();
      _getSites();
      _getOutrasOrigens();
      _getCorretores();

    }

    $scope.atualizaQtdItensVisualizados = function(quantidadeItens) {
      $scope.itensPorPagina = quantidadeItens;
    };



    function _validaExibicaoFilial() {
      $scope.exibeFiliais = false;
      //perfis que podem filtrar por filial
      var permiteVerTodasFiliais = ["1", "3", "4", "5", "6", "8", "7", "11"];
      var perfil = StorageService.getKey("idPerfil");
      var exibeFiliais = permiteVerTodasFiliais.indexOf(perfil, 0);

      if (exibeFiliais !== -1) {
        $scope.exibeFiliais = true;
      } else {
        $scope.parametro = {
          filialId: StorageService.getKey("idFilial")
        };

      }

    }

    function _getFornecedores() {
      $scope.loadFornecedores = FornecedoresService.getData()
        .then(function(success) {
          $scope.fornecedorList = success._embedded.fornecedores;
        });
    }

    function _getUsuarioCadastro() {
      $scope.loadUusuarios = UserService.getUsuarioCadastroContato(4)
        .then(function(sucesso) {
          $scope.usuariosCadastro = sucesso._embedded.usuarios;
        }, function(erro) {
          console.log(erro);
        });
    }

    function _getFiliais() {

      $scope.loadFiliais = FiliaisService.getFiliais()
        .then(function(filiais) {
          $scope.filiais = filiais._embedded.filiais;
        }, function(erro) {
          console.log(erro);
        });
    }


    function _getSituacoesInteracoes() {

      $scope.loadSituacoes = SituacoesInteracoesService.query()
        .then(function(success) {
          $scope.situacaoList = success._embedded.situacoes_interacoes;
        });
    }

    function _getTiposEnvios() {
      $scope.loadTiposEnvios = TiposEnviosService.getData()
        .then(function(success) {
          $scope.tiposEnvios = success._embedded.tipos_envios;
        });

    }


    function _getOperadoras() {
      $scope.loadOperadoras = OperadoraService.getData()
        .then(function(data) {
          $scope.operadorasList = data._embedded.operadoras;
        });

    }


    function _getSites() {
      $scope.loadSites = SitesService.getData()
        .then(function(success) {
          $scope.sitesList = success._embedded.sites;
        });
    }

    function _getOutrasOrigens() {
      $scope.loadOrigens = OutrasOrigensService.getData()
        .then(function(success) {
          $scope.outrasOrigensList = success._embedded.origens_interacoes;
        });
    }

    function _getCorretores() {
      $scope.loadCorretores = CorretoresService.getByParameter("todos")
        .then(function(success) {
          var corretoresList = success._embedded.corretores;
          if ($scope.exibeFiliais) {
            $scope.corretoresList = corretoresList;
            return;
          }
          $scope.corretoresList = CorretoresComboService.setComboCorretor(corretoresList, StorageService.getKey('idFilial'));
        });
    }

    $scope.consultar = function(parametro) {
      $scope.interacoes = [];
      $scope.mostrarRelatorio = false;
      if (validaParametros(parametro)) {
        var parametroConsulta = angular.copy(parametro);
        $scope.loadRelatorio = InteracoesService.getRelatorioGeralMultiplos(montaParametros(parametroConsulta));
        $scope.loadRelatorio.then(function(success) {

          $scope.interacoes = _montaTable(success._embedded.interacoes);


          $scope.totalizadoresInteracoes = success._embedded.interacoes[success.total_items - 1];
          $scope.tamanhoArray = $scope.interacoes.length;
          $scope.mostrarRelatorio = true;
        }, function(error) {
          if (error.status == 404) {
            toastr.info('Sem resultados com esses paramêtros.');
            $scope.mostrarRelatorio = false;
            $scope.interacoes = {};
            return;
          }
          console.log(error);
        });

      }

    };

    function _montaTable(interacoes) {
      interacoes.forEach(function(interacao) {
        interacao.origem = interacao.site ? interacao.site : interacao.fornecedorNome ? interacao.fornecedorNome : interacao.outra_origem ? interacao.outra_origem : 'Origem não informada.';
      });
      return interacoes;
    }



    $scope.imprimirRelatorio = function() {
      window.print();
    };

    $scope.limpar = function() {
      $scope.parametro = {};
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


    function montaParametros(parametro) {

      parametro.multiplos = parametro.origemDashCoordenador ? false : true;
      if (parametro.origemDashCoordenador) delete parametro.origemDashCoordenador;
      parametro.dataInicio = typeof parametro.dataInicio != 'undefined' ? $moment(parametro.dataInicio).format("YYYY-MM-DD") : false;
      parametro.dataFim = typeof parametro.dataFim != 'undefined' ? $moment(parametro.dataFim).format("YYYY-MM-DD") : false;
      return serialize(parametro);

    };

    function _validaMultiplosParametros(parametro) {
      var retorno = false;
      if (parametro) {
        Object.keys(parametro).forEach(function(elemento) {
          if (parametro[elemento] instanceof Array) {
            retorno = true;
          }
        });
      }
      return retorno;
    }

    function serialize(obj) {
      var param = '?' + Object.keys(obj).reduce(function(a, k) {
        a.push(k + '=' + encodeURIComponent(obj[k]));
        return a
      }, []).join('&');
      return param.substring(1);
    }

    $scope.openCalendarioInicio = function() {
      $scope.mostarCalendarioInicio.opened = true;
    };
    $scope.openCalendarioFim = function() {
      $scope.mostarCalendarioFim.opened = true;
    };


    $scope.toggleMin = function() {
      $scope.minDate = $scope.minDate ? null : new Date();
    };

    init();


    if ($stateParams.parametros.corretorId) {
      $stateParams.parametros.origemDashCoordenador = true;
      $scope.consultar($stateParams.parametros);
    }


  }
})();
