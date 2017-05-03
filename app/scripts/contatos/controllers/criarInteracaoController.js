(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('ModalCriarInteracao', ModalCriarInteracao);

  ModalCriarInteracao.$inject = ['$state',
    '$scope',
    '$uibModalInstance',
    'SituacoesInteracoesService',
    'InteracoesService',
    'interacaoContato',
    'StorageService',
    'toastr',
    'UsuarioAgendaService',
    'StatusComboService',
    '$injector',
    'sitesList',
    'fornecedorList',
    'outrasOrigensList',
    '$moment',
    'OperadoraService',
    'ProdutosService',
    'VendaProdutoContatoService',
    '$stateParams'

  ];

  function ModalCriarInteracao($state,
    $scope,
    $uibModalInstance,
    SituacoesInteracoesService,
    InteracoesService,
    interacaoContato,
    StorageService,
    toastr,
    UsuarioAgendaService,
    StatusComboService,
    $injector,
    sitesList,
    fornecedorList,
    outrasOrigensList,
    $moment,
    OperadoraService,
    ProdutosService,
    VendaProdutoContatoService,
    $stateParams

  ) {

    function init() {

      var state;
      var getState = function() {
        if (!state) {
          state = $injector.get('$state');
        }
        return state;
      };
      $scope.interacao = [];
      $scope.situacaoList = [];
      $scope.format = 'dd/MM/yyyy';
      $scope.dateOptions = {
        formatYear: 'yyyy',
        'class': 'datepicker'
      };
      $scope.calendario = {
        opened: false
      };

      $scope.hstep = 1;
      $scope.mstep = 1;
      $scope.ismeridian = false;
      $scope.dynamicTooltip = 'Esta solicitação de reposição será avaliada pelo seu gestor.';

      //para o caso da reentrada
      $scope.sitesList = sitesList;
      $scope.fornecedorList = fornecedorList;
      $scope.outrasOrigensList = outrasOrigensList;

      //informar produto vendido
      $scope.produtoVendido = false;
      $scope.exibeOperadoras = false;
      $scope.exibeProdutos = false;


      $scope.loadingInsertInteracao = SituacoesInteracoesService
        .query().then(function(data) {
          if (getState().current.name == 'app.contatos.new') {
            $scope.situacaoList = StatusComboService.setEntrouContatoNovamente(data._embedded.situacoes_interacoes);
            return;
          }
          $scope.situacaoList = StatusComboService.setComboStatus(data._embedded.situacoes_interacoes, StorageService.getUserLogado());
        });
    }

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

    $scope.criaInteracao = function(novaInteracao) {
      if (novaInteracao.retorno) {
        salvarLembreteAgenda(novaInteracao);
      }
      salvaInteracao(novaInteracao);
    };

    $scope.exibeProdutoVenda = function() {
      $scope.exibeOperadoras = true;
      $scope.loading = OperadoraService.getData().then(function(data) {
        $scope.operadorasList = data._embedded.operadoras;
      });

    }

    $scope.getProdutosOperadora = function(operadora) {
      $scope.loadProdutos = ProdutosService.getProdutoByOperadora(operadora).then(function(data) {
        $scope.produtos = data._embedded.produtos;
        $scope.exibeProdutos = true;
      }, function(error) {
        $scope.produtos = {};
        $scope.exibeProdutos = false;
        toastr.info("Nao existem produtos cadastrados para essa operadora.");
        return;
      });
    }

    $scope.exibeAgendador = function(option) {


      if (option.id == 5) {
        $scope.exibeProdutoVenda();
      }

      $scope.botaoReposicao = false;
      $scope.exibirOrigens = false;
      var habilitaBotaoReposicao = [7, 10, 16];
      var tipoEnvioInvalidosReposicao = [7, 8];
      var validoReposicao = tipoEnvioInvalidosReposicao.indexOf(interacaoContato.idTipoEnvio);

      if (habilitaBotaoReposicao.indexOf(option.id) !== -1 && validoReposicao == -1) {
        $scope.botaoReposicao = true;
        return;
      }

      if (option.id == 17 || mostraOrigens()) {
        $scope.exibirOrigens = true;
        return;
      }
      var necessitaAgendar = [4, 6, 9, 11, 12, 15];
      if (option) {
        if (necessitaAgendar.indexOf(option.id) !== -1) {
          $scope.mostrarAgendador = true;
          return;
        }
        $scope.mostrarAgendador = false;
        $scope.interacao.retorno = false;
      }
    };

    var montarAgenda = function(novaInteracao) {
      return novaInteracao = {
        idUsuario: StorageService.getKey("id"),
        titulo: novaInteracao.titulo,
        descricao: novaInteracao.observacao,
        idContato: interacaoContato.contatoId,
        dataAgenda: $moment(novaInteracao.dataRetorno).format("YYYY-MM-DD"),
        className:  'bg-primary'

      };
    }

    function salvaInteracao(novaInteracao) {

      var interacao = montaInteracao(novaInteracao);

      $scope.loadingInsertInteracao = InteracoesService.create(interacao);
      $scope.loadingInsertInteracao.then(function(success) {
        toastr.success('Interação criada com successo');
        if (typeof novaInteracao.produtoVenido !== "undefined") {
          gravaVendaProduto(novaInteracao);
        }
        $uibModalInstance.close(interacao);
      }, function(error) {
        toastr.error('Erro ao criar interação:' + error);
      });
    }

    function gravaVendaProduto(novaInteracao) {

      VendaProdutoContatoService.create(_getVendaProdutoContato(novaInteracao)).then(function(success) {
        toastr.success('Venda gravada com sucesso.');
      }, function(error) {
        toastr.error('Erro ao registrar a venda :' + error.mensagem);
      })
    }

    function _getVendaProdutoContato(produtoVendaContato) {
      var vendaProdutoContato = {
        usuarioVenda: StorageService.getKey('id'),
        contato: interacaoContato.contatoId,
        produto: produtoVendaContato.produtoVenido,
        interacaoPai: interacaoContato.idInteracoesContato
      };

      return vendaProdutoContato;
    }

    function salvarLembreteAgenda(novaInteracao) {
      $scope.loadingInsertInteracao = UsuarioAgendaService.create(montarAgenda(novaInteracao));
      $scope.loadingInsertInteracao.then(function(success) {
        toastr.success('Novo lembrete adicionado com successo na sua agenda');
      }, function(error) {
        toastr.error('Erro: ' + error);
      });
    }

    function montaInteracao(novaInteracao) {
      var interacao = {};

      if (!!novaInteracao.origemTipo) {
        return interacao = {
          idContato: interacaoContato.contatoId,
          idUsuarioCad: StorageService.getKey('id'),
          idCorretor: interacaoContato.corretorId,
          origem: novaInteracao.origem,
          origemTipo: novaInteracao.origemTipo,
          idInteracaoPai: interacaoContato.idInteracaoPai,
          situacao: novaInteracao.situacao.id,
          observacao: novaInteracao.observacao,
          enviarEmail: false
        };
      } else {
        return interacao = {
          idContato: interacaoContato.contatoId,
          idUsuarioCad: StorageService.getKey('id'),
          idCorretor: interacaoContato.corretorId,
          idOrigem: interacaoContato.idOrigem,
          origemTipo: interacaoContato.origem,
          idInteracaoPai: interacaoContato.idInteracoesContato,
          situacao: novaInteracao.situacao.id,
          observacao: novaInteracao.observacao,
          enviarEmail: false,
          solicitacaoReposicao: novaInteracao.reposicao
        };
      }
    };

    var mostraOrigens = function() {
      return !!sitesList || !!fornecedorList || !!outrasOrigensList;
    };

    $scope.openCalendario = function() {
      $scope.calendario.opened = true;
    };

    $scope.setaTituloLembrete = function(interacao) {
      console.log(interacao);
      $scope.interacao.titulo = interacao.situacao.descricao;
    };
    init();

  }

})();
