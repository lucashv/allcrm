(function() {

  'use strict';
  angular.module('minovateApp')
    .controller('PreCadastro', PreCadastro);

  PreCadastro.$inject = [
    '$scope',
    'AclService',
    'PreCadastroService',
    '$uibModal',
    'StorageService',
    'toastr'

  ];

  function PreCadastro(
    $scope,
    AclService,
    PreCadastroService,
    $uibModal,
    StorageService,
    toastr
  ) {

    var idModulo = 2;
    AclService.validaPermisao(idModulo);



    $scope.page = {
      title: 'Contato',
      subtitle: 'Pré-cadastro'
    };
    $scope.contato = {};
    $scope.preCadastros = [];

    $scope.loadPreContatos = PreCadastroService.get().then(function(preCadastros) {
      $scope.preCadastros = preCadastros._embedded.pre_cadastro;
    }, function(error) {
      console.log(error);

    });

    $scope.exibeContato = function(contato, indice) {
      $scope.dadosPreContato = true;
      $scope.contato = contato;
      $scope.contato.indice = indice;
    };

    $scope.fechar = function() {
      $scope.contato = {};
      $scope.dadosPreContato = false;
    };

    $scope.interesse = function(interesse) {

      if (interesse != 0) {
        return "Sim";
      }
      return "Não";
    };


    $scope.validarPreContato = function(valido, preContato, indice) {

      var aviso = {};
      var mensagem = {};

      if (valido == 'V') {
        aviso = {
          titulo: "Validação pré-contato",
          mensagem: "A partir deste pré-contato será gerado um novo contato no sistema."
        };
        mensagem = {
          sucesso: "Novo contato gerado com sucesso a partir do pré-contato",
          erro: "Ocorreu um erro ao tentar gerar um novo contato apartir do pré-contato. "
        };

      } else {
        aviso = {
          titulo: "Pré-contato inválido",
          mensagem: "Este pré-contato estará sendo inativado, não sendo gerado um contato no sistema."
        };
        mensagem = {
          sucesso: "Pré-contato atualizado com sucesso.",
          erro: "Ocorreu um erro ao tentar inativar o pré-contato. "
        };

      }
      confirmacao(aviso)
        .result
        .then(function(confirmacao) {
          atualizaContato(_preContato(preContato, valido), indice, mensagem);
        }, function() {

        });
    };

    var confirmacao = function(aviso) {
      return $uibModal.open({
        templateUrl: '../../views/tmpl/corretores/modalConfirmacao.html',
        controller: 'ModalConfirmacaoController',
        size: 'sm',
        resolve: {
          aviso: function() {
            return aviso;
          }
        }
      });
    };

    function atualizaContato(contato, indiceContato, mensagem) {
      $scope.loadUpdate = PreCadastroService.
      update(contato)
        .then(function(success) {
          toastr.success(mensagem.sucesso);
          $scope.contato = {};
          $scope.dadosPreContato = false;
          $scope.preCadastros.splice(indiceContato, 1);
        }, function(error) {
          console.log(error);
          toastr.error(mensagem.erro);
        });
    }


    var _preContato = function(preContato, status) {
      return {
        id: preContato.id,
        status: status,
        usuarioValidacaoId: StorageService.getKey('id')
      };
    };

  }
})();
