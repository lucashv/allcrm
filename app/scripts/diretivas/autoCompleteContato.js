(function() {
  'use strict';
  angular.module('minovateApp')
    .directive('autoCompleteContato', autoCompleteContato);

  function autoCompleteContato() {
    var ddo = {
      restrict: 'AE',
      templateUrl: 'views/tmpl/diretivas/autoCompleteContato.html',
      scope: {
        contatoSelecionado: '=contato',
        exibe: '='
      },
      controller: AutoCompleteContatoController,
      controllerAs: 'vm',
      bindToController: true
    };
    return ddo;

  }

  AutoCompleteContatoController.$inject = ['InteracoesService', 'StorageService', 'toastr'];

  function AutoCompleteContatoController(InteracoesService, StorageService, toastr) {
    var vm = this;
    vm.contatos = [];

    vm.pesquisaContato = _pesquisaContato;
    vm.selecionarContato = _selecionarContato;

    function _selecionarContato(contato) {
      vm.contatoSelecionado = {
        idContato: contato.idContato,
        nome: contato.nomeContato
      };
      vm.exibe = false;
    }

    function _pesquisaContato(contato) {
      if (contato) {
        // if (contato.nome.length == 0) vm.contatos = [];
        if (contato.nome.length >= 4) {
          _gerRelatorioGeral(contato);
        }
      }
    }

    function _gerRelatorioGeral(contato) {
      contato.corretorId = StorageService.getKey('id');
      contato.multiplos = true;
      InteracoesService.gerRelatorioGeral(contato)
        .then(function(contatos) {

          if (vm.contatos.length) {
            verificarExistenciaContatos(contatos._embedded.interacoes, vm.contatos);
          } else {
            vm.contatos = contatos._embedded.interacoes;

          }
        }, function(erro) {
          console.log(erro);
          toastr.info('Sem resultados para contatos com o nome ' + contato.nome);

        });
    }

    function verificarExistenciaContatos(novosContatos) {
      novosContatos.forEach(function(novoContato) {
        var existeContato = vm.contatos.some(function(contato) {
          return contato.idContato == novoContato.idContato;
        });
        if (!existeContato) {
          vm.contatos.push(novoContato);
        }
      });
    }


  }
})();
