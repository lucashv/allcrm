(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('NovoContatoCorretor', NovoContatoCorretor);

  NovoContatoCorretor.$inject = ['$scope',
    'StorageService',
    'OperadoraService',
    'ContatosService',
    'toastr',
    'InteracoesService',
    '$state',
    '$uibModal',
    'ProdutosService'
  ];

  function NovoContatoCorretor($scope,
    StorageService,
    OperadoraService,
    ContatosService,
    toastr,
    InteracoesService,
    $state,
    $uibModal,
    ProdutosService
  ) {

    $scope.page = {
      title: 'Meus Contatos',
    };


    $scope.open = function(contato, emails, telefones) {

      var aviso = {}
      aviso.titulo = "Confirmar Inclusão?";
      aviso.mensagem = "Esse contato será incluído nas suas indicações.";
      if (contato.prime) {
        aviso.titulo = "Incluir Contato Prime Broker?";
        aviso.mensagem = "Esse contato será enviado para a Prime Broker como uma nova indicação de seguros, você tem certeza?";
      }
      var modalInstance = $uibModal.open({
        templateUrl: '../../views/tmpl/corretores/modalConfirmacao.html',
        controller: 'ModalConfirmacaoController',
        size: 'sm',
        resolve: {
          aviso: function() {
            return aviso;
          }
        }
      });

      modalInstance.result.then(function(confirmacao) {

        $scope.salvaContato(contato, emails, telefones);

      }, function() {

      });
    };

    function montaArrayProdutosContato(produtosInteresse, contatoId) {
      var produtoContato = {};
      var produtosContato = [];
      produtosInteresse.forEach(function(produto) {
        produtoContato = {
          produtoId: produto,
          contatoId: contatoId
        };
        produtosContato.push(produtoContato);
      });
      return produtosContato;
    }

    function updateProdutosContato(produtosInteresse, contatoId) {
      $scope.loadProdutosContato = ContatosService
        .updatePprodutosContato(montaArrayProdutosContato(produtosInteresse, contatoId))
        .then(function(success) {
            $state.reload();
        }, function(error) {
          console.log(error);
        });
    }

    $scope.salvaContato = function(contato, emails, telefones, produtos) {

      var novoContato = montaContato(contato, emails, telefones);


      $scope.loadingForm = ContatosService
        .create(novoContato)
        .then(function(response) {

          if (novoContato.origem.id == 15) {
            toastr.success('Contato Prime Broker salvo com sucesso.');
            updateProdutosContato(contato.produtos, response.contato.id);
            return;
          }

          toastr.success('Contato salvo com sucesso.');

          var novaInteracao = montaInteracao(response.contato, response.interacao);

          $scope.loadingForm = InteracoesService.create(novaInteracao).then(function(success) {

            toastr.success('Contato adicionado as suas indicações com sucesso.');
            $state.reload();
            return;

          }, function(error) {
            toastr.error('Erro ao enviadar contato ao corretor.');
          });
        },
        function(error) {
          toastr.error('Erro ao salvar contato :', {
            positionClass: "toast-bottom-right"
          }, {
            showDuration: "300"
          });
        });
    };

    $scope.validaDuplicidadeTelefone = function(telefone, indiceTelefone) {
      if (!!telefone) {
        $scope.aviso = null;
        $scope.showAviso = false;
        $scope.emailRepetido = false;
        ContatosService
          .getByParameter('telefone', telefone)
          .then(function(success) {
            if (success.total_items > 0) {
              $scope.telefones[indiceTelefone - 1].telefone = null;
              $scope.showAviso = true;
              $scope.telefoneRepetido = success._embedded.contatos[0];

              $scope.aviso = {
                tipo: 'Telefone',
                texto: 'O Telefone: ' + $scope.telefoneRepetido.telefone + ', já está cadastrado no sistema.',
              };
            }
          }, function(error) {
            console.log(error);
          });
      }

    };

    $scope.montaComboOperadora = function(tipo) {



      var parametros = {
        matrizId: 1
      };

      if (tipo == 'prime') {
        parametros.matrizId = 19;

        var parametro = {
          categoriaProdutoId: 3
        };

        ProdutosService.getProdutos(parametro)
          .then(function(produtos) {
            $scope.produtos = produtos._embedded.produtos;
          }, function(erro) {
            console.log(erro);
        });
      }

      $scope.promise = OperadoraService.getData(parametros);
      $scope.loadingForm = $scope.promise.$promise;
      $scope.promise.then(function(data) {
        $scope.operadorasList = data._embedded.operadoras;
      });

    }

    $scope.validaDuplicidadeEmail = function(email, indiceEmail) {

      if (!!email) {
        $scope.showAviso = false;
        $scope.aviso = null;
        $scope.telefoneRepetido = false;
        ContatosService.getByParameter('email', email).then(function(success) {
          if (success.total_items > 0) {
            $scope.emails[indiceEmail - 1].email = null;
            $scope.showAviso = true;
            $scope.emailRepetido = success._embedded.contatos[0];

            $scope.aviso = {
              tipo: 'Email',
              texto: 'O Email: ' + $scope.emailRepetido.email + ', já está cadastrado no sistema.',
            };
          }
        }, function(error) {
          console.log(error);
        });
      }

    };

    function montaContato(contato, emails, telefones) {

      var enviarParaSeguro = false;
      if (contato.tipo == "pme") {
        var empresa = contato.empresa;
        if (empresa == 'Não Informado.') {
          empresa = null;
        }
        var numeroPessoas = contato.numeroPessoas;
      }

      var origem = {
        id: 5
      };

      if (contato.prime) {
        origem.id = 15;
        var enviarParaSeguro = 'seguro';
      }


      var contato = {
        emails: emails,
        telefones: telefones,
        idUsuarioCad: StorageService.getKey('id'),
        situacao: 1,
        origemTipo: "outras",
        origem: origem,
        idOperadora: contato.operadora,
        idade: contato.idade,
        tipo: contato.tipo,
        observacao: contato.observacao,
        nome: contato.nome,
        empresa: empresa,
        numeroPessoas: numeroPessoas,
        leadPrime: contato.prime ,
        enviarPara :   (enviarParaSeguro !== false) ? enviarParaSeguro : null
      };
      console.log(contato);
      return contato;
    }

    function montaInteracao(contato, interacao) {

      var idInteracaoPai = interacao.id;

      var novaInteracao = {
        idContato: contato.id,
        idInteracaoPai: idInteracaoPai,
        idUsuarioCad: StorageService.getKey('id'),
        idCorretor: StorageService.getKey('id'),
        idOrigem: 120, //indicacao propia
        origemTipo: "outras",
        observacao: 'Indicação própria.',
        situacao: 2, // Enviado ao corretor.
        idTipoEnvio: 17, //Contato Próprio
        enviarEmail: true,
      };
      return novaInteracao;
    }


    $scope.telefones = [{
      identify: 'telefone'
    }];

    $scope.emails = [{
      identify: 'email'
    }];

    $scope.addTel = function() {
      var newItemNo = $scope.telefones.length + 1;
      $scope.telefones.push({
        'identify': 'telefone' + newItemNo
      });
    };

    $scope.removeTel = function() {
      var lastItem = $scope.telefones.length - 1;
      $scope.telefones.splice(lastItem);
    };

    $scope.addEmail = function() {
      var newItemNo = $scope.emails.length + 1;
      $scope.emails.push({
        'identify': 'email' + newItemNo
      });
    };

    $scope.removeEmail = function() {
      var lastItem = $scope.emails.length - 1;
      $scope.emails.splice(lastItem);
    };

  };

})();
