(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('ModalEditarContatoCtrl', ModalEditarContatoCtrl);

  ModalEditarContatoCtrl.$inject = [
    '$scope',
    '$uibModal',
    'dadosContato',
    'telefonesContato',
    'emailsContato',
    '$uibModalInstance',
    'ContatosService',
    'TelefoneService',
    'toastr',
    'StorageService',
    'EmailService',
    'OperadorasTelefonesService'
  ];

  function ModalEditarContatoCtrl(
    $scope,
    $uibModal,
    dadosContato,
    telefonesContato,
    emailsContato,
    $uibModalInstance,
    ContatosService,
    TelefoneService,
    toastr,
    StorageService,
    EmailService,
    OperadorasTelefonesService
  ) {


    // idPerfil = 4 OPERADOR DE LEADS
    $scope.edicaoEmailTelefone = StorageService.getKey('idPerfil') != 4;
    $scope.contato = dadosContato;
    $scope.novosEmails = [];
    $scope.emailsContato = emailsContato;
    $scope.novosTelefones = [];
    $scope.telefonesContato = telefonesContato;
    if(telefonesContato){
      delete $scope.telefonesContato._links;
    }


    _init();

    function _init() {
      OperadorasTelefonesService
        .getOperadorasTelefone()
        .then(function(operadoras) {
          $scope.operadorasTelefone = operadoras._embedded.operadoras_telefones;
        }, function(erro) {
          console.log(erro);
        });
    }




    $scope.addEmail = function(contato) {
      $scope.novosEmails.push({
        contatoId: contato.contatoId,
        operadoraId: 1
      });
    };
    $scope.addTel = function(contato) {
      $scope.novosTelefones.push({
        contatoId: contato.contatoId,
        operadoraId: 1
      });
    };
    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };
    $scope.ocultarAviso = function() {
      $scope.showAviso = false;
    };

    function retornaArray(elemento) {
      var elementos = [];
      elementos.push(angular.copy(elemento));
      return elementos;
    }


    $scope.alterarEmail = function(email) {
      _updateEmails(retornaArray(email));
    };
    $scope.alterarTelefone = function(telefone) {
      _updateTelefones(retornaArray(telefone));
    };

    $scope.salvarNovoEmail = function(email) {
      _saveEmails(retornaArray(email));
    };
    $scope.salvarNovoTelefone = function(telefone) {
      _saveTelefone(retornaArray(telefone));
    };


    $scope.salvarEdicaoContato = function(contato, novosTelefones, novosEmails, telefonesContato, emailsContato) {
      var _contato = {
        contatoId: contato.contatoId,
        nome: contato.nome,
        idade: contato.idade,
        situacao: contato.idSituacao,
        idUsuarioCad: contato.idUsuarioCadastro,
        observacao: contato.observacao
      };

      updateContato(_contato);
    };



    $scope.validaDuplicidadeEmail = function(email, indice) {
      ContatosService.getByParameter('email', email)
          .then(function(success) {
            if (success.total_items) {
              $scope.showAviso = true;
              $scope.aviso = {
                tipo: 'Email',
                texto: 'O Email: ' + email + ' , já está cadastrado no sistema.',
              };
              $scope.novosEmails[indice].email = '';
            }
          });
    };

    $scope.validaDuplicidadeTelefone = function(telefone, indice) {
      ContatosService.getByParameter('telefone', telefone)
        .then(function(success) {
          if (success.total_items) {
            $scope.showAviso = true;
            $scope.aviso = {
              tipo: 'Telefone',
              texto: 'O Telefone: ' + telefone.telefone + ' , já está cadastrado no sistema.',
            };
            $scope.novosTelefones[indice].telefone = '';
          }
        });
    };


    function _saveEmails(email) {
      $scope.loadCreateEmail = EmailService.new(email)
        .then(function(success) {
          toastr.success('Novos email(s) cadastrado(s) com sucesso.');
        }, function(error) {
          console.log(error);
          toastr.error('Erro ao salvar o(s) email(s) :');
        });
    }

    function _saveTelefone(telefones) {
      $scope.loadCreateTelefone = TelefoneService.create(telefones)
        .then(function(success) {
          toastr.success('Novos telefone(s) cadastrado(s) com sucesso.');
        }, function(error) {
          console.log(error);
          toastr.error('Erro ao salvar o(s) telefone(s) :');
        });
    }

    function updateContato(contato) {
      $scope.loadUpdateContato = ContatosService.update(contato, contato.contatoId)
        .then(function(success) {
          toastr.success('Contato alterado com sucesso.');
        }, function(error) {
          console.log(error);
          toastr.error('Erro ao alterar contato :');
        });
    }

    function _updateEmails(email) {
      $scope.loadUpdateEmail = EmailService.update(email, 0)
        .then(function(success) {
          toastr.success('Email(s) alterado(s) com sucesso.');
        }, function(error) {
          console.log(error);
          toastr.error('Não foi possível alterar o(s) email(s).');
        });
    }

    function _updateTelefones(telefone) {
      $scope.loadUpdateTelefone = TelefoneService.update(telefone, 0)
        .then(function(success) {
          toastr.success('Telefone alterado com sucesso.');
        }, function(error) {
          console.log(error);
        });
    }




  }
})();
