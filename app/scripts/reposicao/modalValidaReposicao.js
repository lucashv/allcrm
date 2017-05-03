(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('ModalValidaReposica', ModalValidaReposica);

  ModalValidaReposica.$inject = ['$scope', '$injector', 'Aprovada', 'Solicitacao', 'StorageService', 'SolicitacaoReposicaoService', '$uibModalInstance', 'toastr'];

  function ModalValidaReposica($scope, $injector, Aprovada, Solicitacao, StorageService, SolicitacaoReposicaoService, $uibModalInstance, toastr) {

    function init() {

      $scope.reposicao = {};

      $scope.titulo = "Negação de Solicitação de Reposição.";
      $scope.reposicao.situacao = 0;

      if (Aprovada) {
        $scope.reposicao.situacao = 1;
        $scope.titulo = "Aprovar Solicitação de Reposição.";
      }

      var state;
      var getState = function() {
        if (!state) {
          state = $injector.get('$state');
        }
        return state;
      };

    }

    $scope.cancel = function() {
      $uibModalInstance.dismiss('cancel');
    };

    var converteBooleano = function(contatoValido) {
      return ((contatoValido == false) ? 0 : 1);
    };

    $scope.confirmar = function(reposicao) {
      console.log(reposicao);
      console.log(montaParametros(reposicao));
  
      $scope.loadModal = SolicitacaoReposicaoService.aprovaReprovaSolicitacao(montaParametros(reposicao));
      $scope.loadModal.then(function(res) {
        toastr.success('Sucesso ao atualizar solicitação de reposição.');
        $uibModalInstance.close(Solicitacao);
      }, function(error) {
        toastr.error('Erro ao aprovar/reprovar solicitação.');
        $uibModalInstance.close(Solicitacao);
        console.log(error);
      });

    };

    function montaParametros(rep) {
      var reposicao = {
        id: Solicitacao.id,
        situacao: rep.situacao,
        usuarioAvaliacaoId: StorageService.getKey('id'),
        observacao: rep.observacao,
        contatoValido: rep.contatoValido
      };

      return reposicao;
    }


    init();

  }

})();
