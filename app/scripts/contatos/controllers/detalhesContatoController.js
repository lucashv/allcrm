(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('DetalheCtrl', DetalheCtrl);

  DetalheCtrl.$inject = [
    '$state',
    '$stateParams',
    '$scope',
    'TelefoneService',
    'InteracoesService',
    '$uibModal',
    '$log',
    'ContatosService',
    'EnviaEmailService',
    'toastr',
    'EmailService',
    'StorageService',
    'Interacoes',
    'ContatosProdutosService',
    'RecursoModal',
    'RecursoModalCorretores'
  ];

  function DetalheCtrl(
    $state,
    $stateParams,
    $scope,
    TelefoneService,
    InteracoesService,
    $uibModal,
    $log,
    ContatosService,
    EnviaEmailService,
    toastr,
    EmailService,
    StorageService,
    Interacoes,
    ContatosProdutosService,
    RecursoModal,
    RecursoModalCorretores
  ) {
    $scope.contato = null;
    $scope.exibeDevolverIndicacaoSeguro = false;
    $scope.exibeContato = false;
    $scope.exibeAviso = false;
    $scope.itemsByPage = 25;
    $scope.tamanhoArray = 0;
    $scope.filial = StorageService.getKey('idFilial') != 19;
    $scope.dataAtual = new Date();
    $scope.usuarioLogado = StorageService.getKey('nome') + ' ' + StorageService.getKey('sobreNome');



    function init() {

      _exibeDevolvarIndicaoSeguro();

      $scope.loadingInteracoes = InteracoesService.getByContatoId($stateParams.id).then(function(response) {
        $scope.interacoes = Interacoes.filtraInteracoes(response._embedded.interacoes, StorageService.getUserLogado());
        if (!$scope.interacoes.length) {
          $state.go(StorageService.getKey('rotaInicial'));
          toastr.error('Você não tem autorização para visualizar esse contato.');
        }
        if ($scope.interacoes[0].solicitaReposicao && StorageService.getKey('idPerfil') == 2) {
          $state.go(StorageService.getKey('rotaInicial'));
          toastr.info('Você solicitou reposição para este contato.');
        }

        $scope.tamanhoArray = $scope.interacoes.length;
        $scope.data = [].concat($scope.interacoes);
        $scope.loadContato = ContatosService.getById($stateParams.id).then(function(contato) {
          $scope.contato = contato;
          $scope.exibeContato = true;
        });
        $scope.loadTelefones = TelefoneService.getByIdContato($stateParams.id).then(function(telefones) {
          $scope.telefonesContato = telefones.telefones;
        });
        $scope.loadEmails = EmailService.getByIdContato($stateParams.id).then(function(emails) {
          $scope.emailsContato = emails.emails;
        });
        $scope.loadProdutosContato = ContatosProdutosService
          .contatosProdutos(contatoId($stateParams.id))
          .then(function(produtos) {
            if (!produtos.total_items) {
              $scope.produtoMensagem = 'Não foram informados os produtos de interesse do cliente.';
            }
            $scope.contatosProdutos = produtos._embedded.contatos_produtos;

          }, function(erro) {
            console.log(erro);
          });


      }, function(error) {
        toastr.error('Erro ao consultar dados do contato.');
      });

    }


    function contatoId(contatoId) {
      return {
        contatoId: contatoId
      };
    };


    function criarEmail(dadosEnvioEmail) {
      var dados = {
        idContato: dadosEnvioEmail.contatoId,
        idCorretor: dadosEnvioEmail.corretorId,
        idTipoEnvio: dadosEnvioEmail.idTipoEnvio
      };
      return dados;
    }


    $scope.criarInteracaoNaPai = function(interacaoPai) {

      if (verificaPerfil()) {
        modalInteracao(interacaoPai);
        return;
      }
    };


    $scope.criarInteracao = function(interacoes) {

      var interacao = [];
      var idPerfil = StorageService.getKey('idPerfil');
      if (verificaPerfil()) {
        $scope.alertaInteracao = "Para criar uma interação utilize os botões ao lado da respectiva Interação Pai!";
        return;
      }
      if (Interacoes.bloqueiaInteracaoCorretor(interacoes, idPerfil, false)) {
        $scope.alertaInteracao = 'Não é possível realizar novas interações em contatos com a situação: "' + interacoes[0].situcao + '".';
        return;
      }
      interacao = Interacoes.interacoesPaiUsuario(interacoes, StorageService.getKey('id'));
      if (interacoes[0].solicitaReposicao) {
        $scope.alertaInteracao = 'Não é possível realizar novas interações após ter solicitado reposição no contato: ';
        return;
      }
      if (!!interacao) {
        modalInteracao(interacao[0]);
      } else {
        $scope.alertaInteracao = "Não é possível realizar novas interações, pois o seu usuário não possuí nenhum vínculo com uma interação Pai. Para criar novas interações utilize o botão ao lado das interações.";
      }
    };



    $scope.criarLembrete = function() {


      RecursoModalCorretores
        .cadastroLembreteCalendario($scope.interacoes[$scope.interacoes.length - 1])
        .result
        .then(function() {

        }, function() {

        });
    };

    $scope.devolveIndicaoSeguro = function(interacoes, contato) {
      console.log(interacoes, contato);

      var modalInstance = $uibModal.open({
        templateUrl: '../../views/tmpl/contatos/modalDevolverIndicacaoPrime.html',
        controller: 'ModalDevolverIndicacaoPrimeController',
        resolve: {
          Interacoes: function() {
            return angular.copy(interacoes);
          },
          Contato: function() {
            return angular.copy(contato);
          }
        }
      });
    };


    $scope.editarContato = function(contato, emailsContato, telefonesContato) {
      var modalInstance = $uibModal.open({
        templateUrl: '../../views/tmpl/contatos/modalEditarContato.html',
        controller: 'ModalEditarContatoCtrl',
        size: 'lg',
        resolve: {
          dadosContato: function() {
            return angular.copy(contato);
          },
          emailsContato: function() {
            return angular.copy(emailsContato);
          },
          telefonesContato: function() {
            return angular.copy(telefonesContato);
          }
        }
      });
      modalInstance.result.then(function(contato) {
        init();
      }, function(retornoModal) {
        init();
      });
    };
    $scope.excluirContato = function(contato) {

      var aviso = {
        titulo: 'Exclusão de contato',
        mensagem: 'Todas as informações deste contato serão inativadas do sistema.',
        observacao: true
      };
      RecursoModal
        .confirmacao(aviso)
        .result
        .then(function(motivo) {
          _updateContato(contato, motivo);
        }, function() {

        });
    };

    function _updateContato(contato, motivo) {
      contato.motivo = motivo;
      contato.usuarioId = StorageService.getKey('id');
      contato.tipo = 'inativar';


      $scope.loadUpdateContato = ContatosService
        .update(contato, contato.contatoId)
        .then(function(sucesso) {
          toastr.success('Contato inativado do sistema com sucesso.');
          $state.go(StorageService.getKey('rotaInicial'));
        }, function(erro) {
          toastr.error('Ocorreu um erro ao inativar o contato do sistema.');
          console.log(erro);
        });
    }

    function _exibeDevolvarIndicaoSeguro() {
      if (StorageService.getKey("idFilial") != "19") {
        return;
      }
      $scope.exibeDevolverIndicacaoSeguro = false;
    }
    $scope.fecharAlertaInteracao = function() {
      $scope.alertaInteracao = '';
    };


    $scope.fundoInteracao = function(interacao) {
      return;

      if (interacao.operadora.filial.id != 19) {
        return 'bg-primary lter';
      }
      return 'bg-success lter';
    };


    $scope.geraIndicacaoPrime = function(interacoes, contato) {
      console.log(StorageService.getKey('idPerfil'));
      if (Interacoes.bloqueiaInteracaoCorretor(interacoes, StorageService.getKey('idPerfil'), true)) {
        $scope.alertaInteracao = 'Não é possível realizar novas interações em contatos com a situação: "' + interacoes[0].situcao + '".';
        return;
      }

      if (Interacoes.jaEnviado(interacoes)) {
        $scope.alertaInteracao = 'Contato já enviado para a corretora de seguros.';
        return;
      }

      var modalInstance = $uibModal.open({
        templateUrl: '../../views/tmpl/contatos/modalGerarIndicacaoPrime.html',
        controller: 'ModalGerarIndicacaoPrimeController',
        resolve: {
          Interacoes: function() {
            return angular.copy(interacoes);
          },
          Contato: function() {
            return angular.copy(contato);
          }
        }
      });

      modalInstance.result.then(function(resposta) {
        if (resposta) {
          $state.reload();
        }
      });

    };
    $scope.habilitaInteracaoPai = function(idInteracaoPai) {
      var perfil = StorageService.getKey('idPerfil');
      var perfilValido = perfil == 4 || perfil == 1;
      if (idInteracaoPai == null && perfilValido) {
        return true;
      }
      return false;
    };

    $scope.imprimirRelatorio = function() {
      window.print();
    };

    function modalInteracao(interacoes) {
      var modalInstance = $uibModal.open({
        templateUrl: '../../views/tmpl/contatos/modalNovaInteracao.html',
        controller: 'ModalCriarInteracao',
        resolve: {
          interacaoContato: function() {
            // return  interacoes[interacoes.length - 1];
            return interacoes;
          },
          sitesList: function() {
            return null;
          },
          fornecedorList: function() {
            return null;
          },
          outrasOrigensList: function() {
            return null;
          }
        }
      });

      modalInstance.result.then(function() {
        $state.reload();
      }, function() {

      });
    }
    $scope.reenviarEmail = function(dadosEmail) {
      var email = criarEmail(dadosEmail);
      $scope.loadingEnvioEmail = EnviaEmailService.create(email).then(function(success) {
        toastr.success('Email reenviado com sucesso.');

      }, function(error) {
        toastr.error('Erro ao reenviar email.');
      });
    };

    function verificaPerfil() {
      var idPerfil = StorageService.getKey('idPerfil');
      return (idPerfil == 1 || idPerfil == 4);
    }



    init();
  }

})();
