(function() {
  'use strict';

  angular.module('minovateApp')
    .factory('RecursoModal', RecursoModal);
  RecursoModal.$inject = ['$uibModal'];

  function RecursoModal($uibModal) {

    var service = {
      confirmacao: _confirmacao,
      reentrada: _reentrada

    };
    return service;

    function _confirmacao(aviso) {

      return $uibModal.open({
        templateUrl: '../../views/tmpl/corretores/modalConfirmacao.html',
        controller: 'ModalConfirmacaoController',
        resolve: {
          aviso: function() {
            return aviso;
          }
        }
      });
    }


    function _reentrada(interacao, tempoEnvio, interacoes, contato) {
      return $uibModal.open({
        templateUrl: '../../views/tmpl/contatos/reentrada.html',
        controller: 'ReentradaCrontroller',
        resolve: {
          InteracaoContato: function() {
            return interacao;
          },
          UltimoEnvio: function() {
            return tempoEnvio;
          },
          InteracoesContato: function() {
            return interacoes;
          },
          Contato: function() {
            return contato;
          }
        }
      });
    }


  };

})();
