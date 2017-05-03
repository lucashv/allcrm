(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('InteracaoChamadoController', InteracaoChamadoController);
  InteracaoChamadoController.$inject = [
    'Chamado',
    'ChamadoService',
    '$scope',
    'StorageService',
    'toastr',
    'FilaChamadoService',
    'UserService',
    '$uibModalInstance',
    '$state'
  ];

  function InteracaoChamadoController(
    Chamado,
    ChamadoService,
    $scope,
    StorageService,
    toastr,
    FilaChamadoService,
    UserService,
    $uibModalInstance,
    $state
  ) {

    var vm = this;
    vm.usuarioLogado = StorageService.getUserLogado().nome + ' ' + StorageService.getUserLogado().sobrenome;
    vm.cancelar = cancelar;
    vm.salvar = salvar;
    vm.detalhesChamado = _detalhesChamado;
    vm.interacoes = _interacoes;

    function _init(chamado) {

      _desabilitaDetalhes();
      _inicializaChamado(chamado);
      _getUsuarioById(chamado.usuarioCadastroId);
      _getInteracoesChamadosCache(_parametroInteracoesChamado(chamado.id));
    }


    function _desabilitaDetalhes() {
      var perfil = StorageService.getKey('idPerfil');
      vm.desabilitaDetalhes = perfil == 1 ? false : true;
    }
    function cancelar() {
      $uibModalInstance.dismiss('cancelar');
    }

    function _detalhesChamado(chamado) {
      $state.go('app.suporte.detalhesChamado', {
        id: chamado.id
      });
      $uibModalInstance.dismiss('cancelar');
    }

    function _interacoes(chamado, cache) {
      if(cache){
        _getInteracoesChamadosCache(_parametroInteracoesChamado(chamado.id));
        return;
      }
      _getInteracoesChamado(_parametroInteracoesChamado(chamado.id));
    }

    function salvar(interacao, formularioChamado, novaInteracao) {

      if (!formularioChamado.situacao.$pristine) {
        _alterarStatusChamado(_montaInteracao(angular.copy(interacao), 'status'));
        formularioChamado.situacao.$pristine = true;
      }
      if (!formularioChamado.fila.$pristine) {
        _alterarStatusChamado(_montaInteracao(angular.copy(interacao), 'fila'));
        formularioChamado.fila.$pristine = true;
      }
      if (!formularioChamado.categoria.$pristine) {
        _alterarStatusChamado(_montaInteracao(angular.copy(interacao), 'categoria'));
        formularioChamado.categoria.$pristine = true;
      }
      if (!formularioChamado.tecnico.$pristine) {
        _alterarStatusChamado(_montaInteracao(angular.copy(interacao), 'tecnico'));
        formularioChamado.tecnico.$pristine = true;
      }
      if (!formularioChamado.descricao.$pristine) {
        _criaInteracao(_montaInteracao(novaInteracao));
        formularioChamado.descricao.$pristine = true;
      }
    }

    function _alterarStatusChamado(interacao) {
      vm.loadStatus = ChamadoService
        .atualizaStatusChamado(interacao)
        .then(function(sucesso) {
          toastr.success(sucesso.mensagem);
        }, function(erro) {
          toastr.error(erro.mensagem);
          console.log(erro);
        });
    }

    function _criaInteracao(interacao) {
      vm.loadInteracaoChamado = ChamadoService
        .cadastrarInteracaoChamado(interacao)
        .then(function(sucesso) {
          vm.interacao = {};
          toastr.success(sucesso.mensagem);
        }, function(erro) {
          toastr.error(sucesso.mensagem);
        });
    }
    function _inicializaChamado(chamado) {
      vm.chamado = chamado;
      vm.chamado.filaId = chamado.filaId ? parseInt(chamado.filaId) : null;
      vm.chamado.statusId = chamado.statusId ? parseInt(chamado.statusId) : null;
      vm.chamado.tecnicoId = chamado.tecnicoId ? parseInt(chamado.tecnicoId) : null;
      vm.chamado.categoriaId = chamado.categoriaId ? parseInt(chamado.categoriaId) : null;
    }

    function _montaInteracao(interacao, tipo) {
      interacao.usuarioCadastro = StorageService.getKey('id');
      interacao.chamado = Chamado.id;
      if (tipo) {
        interacao.tipo = tipo;
      }
      return interacao;
    }
    function _parametroInteracoesChamado(chamadoId){
      return { chamadoId : chamadoId};
    }


    function _getInteracoesChamado(parametro) {
      vm.interacoesChamado = [];
      vm.loadInteracoesChamado = ChamadoService
        .listarInteracoesChamado(parametro)
        .then(function(interacoes) {
          vm.interacoesChamado = interacoes._embedded.interacao_chamado;
        }, function(erro) {
          console.log(erro);
        });
    }
    function _getInteracoesChamadosCache(parametro) {
      vm.interacoesChamado = [];
      vm.loadInteracoesChamado = ChamadoService
        .getInteracoesChamadosCache(parametro)
        .then(function(interacoes) {
          vm.interacoesChamado = interacoes._embedded.interacao_chamado;
        }, function(erro) {
          console.log(erro);
        });
    }


    function _getUsuarioById(usuarioId) {
      vm.loadDetalhesUsuario = UserService
        .getUsuariosByIdCache(usuarioId)
        .then(function(usuarioDetalhes) {
          vm.detalhesUsuario = usuarioDetalhes[0];
        }, function(erro) {
          console.log(erro);
        });
    }


    _init(Chamado);
  }
})();
