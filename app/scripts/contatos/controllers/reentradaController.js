(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('ReentradaCrontroller', ReentradaCrontroller);

  ReentradaCrontroller.$inject = ['$state',
    '$scope',
    '$uibModal',
    '$uibModalInstance',
    'SituacoesInteracoesService',
    'InteracoesService',
    'InteracaoContato',
    'StorageService',
    'toastr',
    'SitesService',
    'FornecedoresService',
    'OutrasOrigensService',
    'UltimoEnvio',
    'InteracoesContato',
    '$moment',
    'Interacoes',
    'Contato'
  ];

  function ReentradaCrontroller($state,
    $scope,
    $uibModal,
    $uibModalInstance,
    SituacoesInteracoesService,
    InteracoesService,
    InteracaoContato,
    StorageService,
    toastr,
    SitesService,
    FornecedoresService,
    OutrasOrigensService,
    UltimoEnvio,
    InteracoesContato,
    $moment,
    Interacoes,
    Contato

  ) {

    _init();

    function _init() {

      _getOrigens();
      _getFornecedores();
      _getSites();
      $scope.ultimoEnvio = UltimoEnvio;
      $scope.interacao = {};
      $scope.contato = Contato;
      $scope.contato.aviso = {
        tipo: 'Contato já se encontra cadastrado no sistema.',
        texto: Contato.telefone ? 'O Telefone: ' + Contato.telefone +', já está cadastrado no sistema.' : 'O Email: ' + Contato.email +', já está cadastrado no sistema.'
      };

    }
    function _getOrigens() {
      $scope.loadOrigens = OutrasOrigensService
        .getData()
        .then(function(success) {
          $scope.outrasOrigensList = success._embedded.origens_interacoes;
        }, function(erro) {
          console.log(erro);
        });
    }

    function _getFornecedores() {
      $scope.loadFornecedores = FornecedoresService
        .getData()
        .then(function(success) {
          $scope.fornecedorList = success._embedded.fornecedores;
        }, function(erro) {
          console.log(erro);
        });
    }

    function _getSites() {
      $scope.loadSites = SitesService
        .getData()
        .then(function(success) {
          $scope.sitesList = success._embedded.sites;
        }, function(erro) {
          console.log(erro);
        });
    }




    $scope.acessar = function(idContato) {
      $scope.loadingAcesse = $state.go('app.contatos.detalhes', {
        id: idContato
      });
      $uibModalInstance.dismiss('cancel');
    };

    $scope.fecharAlertaInteracao = function() {
      $scope.alertaInteracaoCadastradaSemEnvio = '';
      $scope.mensagem = '';
      $scope.mensagemOrigem = '';
    }

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

    function verificaOrigem(interacaoOrigemId, novaInteracao) {

      var existeOrigem = Interacoes.verificaOrigem(InteracoesContato, interacaoOrigemId);
      $scope.interacao.existeOrigem = existeOrigem;
      $scope.mensagemOrigem = (existeOrigem ? 'Este contato já entrou por esta origem, será avaliado a regra das 24 horas.' :
        'O contato irá para a tela de envio pois está reentrando por uma nova origem.');
      verificaCadastroSemEnvio(InteracoesContato, novaInteracao, existeOrigem);
    }

    function verificaCadastroSemEnvio(interacoes, novaInteracao, existeOrigem) {

      var interacaoCadastradaSemEnvio = Interacoes.verificaCadastroSemEnvio(interacoes);
      if (!interacaoCadastradaSemEnvio) {
        $scope.mensagem = UltimoEnvio > 24 ?
          'Este contato irá para a tela de envio para que possa ser novamente enviado a um corretor, pois já se passaram mais de 24 horas desde o último envio.' : 'Irá ser cadastrado uma reentrada nas interações do contato.';
        return;
      }
      $scope.cadastradoSemEnvio = true;
      $scope.alertaInteracaoCadastradaSemEnvio = 'Esse contato já foi cadastrado no sistema mas não foi enviado para um corretor. ';
      $scope.mensagem = '';
      $scope.mensagemOrigem = '';
    }

    $scope.reentrada = function(novaInteracao) {
      $scope.mensagem = '';
      $scope.mensagemOrigem = '';
      var parametro = {
        tipoConsulta: 'interacoesOrigem',
        origemTipo: novaInteracao.origemTipo,
        origem: novaInteracao.origem.id
      };
      _getInteracaoOrigem(parametro, novaInteracao)
    };

    function _getInteracaoOrigem(parametro, novaInteracao) {
      $scope.loadOrigem = OutrasOrigensService
        .getIdInteracaoOrigem(parametro)
        .then(function(interacaoOrigem) {
          verificaOrigem(interacaoOrigem._embedded.origens_interacoes[0].id, novaInteracao);
        }, function(erro) {
          console.log(erro);
        });
    }

    function criarInteracao(novaInteracao) {
      $scope.loadingInsertInteracao = InteracoesService
        .create(novaInteracao)
        .then(function(success) {
          var mensagem = ((novaInteracao.situacao == 17) ? 'Cadastrado uma reentrada para o contato' : 'Contato enviado para a tela de envio.');
          toastr.success(mensagem);
          $uibModalInstance.close(novaInteracao.idContato);
        }, function(error) {
          toastr.error('Erro ao criar interação:' + error);
        });
    }
    $scope.criaInteracao = function(novaInteracao) {
      criarInteracao(montaInteracao(novaInteracao, novaInteracao.existeOrigem));
    };
    var montaInteracao = function(novaInteracao, existeOrigem) {
      if (!existeOrigem || UltimoEnvio > 24) {
        return {
          idContato: InteracaoContato.contatoId,
          idUsuarioCad: StorageService.getKey('id'),
          origem: novaInteracao.origem,
          origemTipo: novaInteracao.origemTipo,
          situacao: 1,
          observacao: 'Contato cadastrado no sistema'
        };
      }
      if (UltimoEnvio <= 24) {
        return {
          idContato: InteracaoContato.contatoId,
          idUsuarioCad: StorageService.getKey('id'),
          idCorretor: InteracaoContato.corretorId,
          origem: novaInteracao.origem,
          origemTipo: novaInteracao.origemTipo,
          idInteracaoPai: InteracaoContato.idInteracaoPai,
          situacao: 17,
          observacao: 'Contato reentrou por uma nova origem.'
        };
      }
    };


  }

})();
