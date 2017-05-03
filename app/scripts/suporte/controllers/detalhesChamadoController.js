(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('DetalhesChamadoController', DetalhesChamadoController);
  DetalhesChamadoController.$inject = [
    '$stateParams',
    'ChamadoService',
    'RecursoModalSuporte',
    'UserService',
    'StorageService',
    'toastr'
  ];

  function DetalhesChamadoController(
    $stateParams,
    ChamadoService,
    RecursoModalSuporte,
    UserService,
    StorageService,
    toastr
  ) {
    var vm = this;
    vm.usuarioLogado = StorageService.getUserLogado().nome + ' ' + StorageService.getUserLogado().sobrenome;
    vm.homologarChamado = _homologarChamado;
    vm.interagir = _interagir;

    function _interagir(chamado) {

      RecursoModalSuporte.interacaoChamado(chamado)
        .result
        .then(function() {

        }, function() {
          _getInteracoesChamadoCache(_parametroInteracoesChamado(chamado.id));
        });
    }

    function _getChamado(chamadoId) {
      vm.loadDetalhesChamado = ChamadoService.getById(chamadoId)
        .then(function(chamado) {
          console.log(chamado[0]);
          vm.chamado = chamado[0];
          vm.solicitarHomologacao = chamado[0].statusId == 4 ? true : false;
          _exibeBtnInteracao(chamado[0].statusId, StorageService.getKey('idPerfil'));

          _getUsuarioById(chamado[0].usuarioCadastroId);
        }, function(erro) {
          console.log(erro);
        });
    }

    function _exibeBtnInteracao(statusChamado, perfilId) {
      vm.exibeBtnInteracao = statusChamado != 5 ? true : perfilId == 1? true : false;
    }

    function _homologarChamado(chamado, statusId, interacao) {
      if (interacao.descricao) {
        _criaInteracao(_montaInteracao(chamado, statusId, interacao));
        return;
      }
      _alterarStatusChamado(montaInteracao(chamado, statusId, interacao));

    }

    function _montaInteracao(chamado, statusId, interacao) {
      var interacaoChamado = {
        usuarioCadastro: StorageService.getKey('id'),
        chamado: chamado.id,
        descricao: interacao.descricao
      };

      if (statusId) {
        interacaoChamado.tipo = 'status';
        interacaoChamado.statusId = statusId;
      }
      return interacaoChamado;
    }

    function _criaInteracao(interacao) {
      vm.loadInteracaoChamado = ChamadoService
        .cadastrarInteracaoChamado(interacao)
        .then(function(sucesso) {
          _alterarStatusChamado(interacao);
          vm.interacao = {};
          toastr.success(sucesso.mensagem);
        }, function(erro) {
          toastr.error(sucesso.mensagem);
        });
    }

    function _alterarStatusChamado(interacao) {
      vm.loadStatus = ChamadoService
        .atualizaStatusChamado(interacao)
        .then(function(sucesso) {
          vm.solicitarHomologacao = false;
          toastr.success(sucesso.mensagem);
        }, function(erro) {
          toastr.error(erro.mensagem);
          console.log(erro);
        });
    }

    function _getInteracoesChamadoCache(parametro) {
      vm.loadInteracoesChamado = ChamadoService
        .getInteracoesChamadosCache(parametro)
        .then(function(chamado) {
          vm.interacoesChamado = chamado._embedded.interacao_chamado;
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

    function _parametroInteracoesChamado(chamadoId) {
      return {
        chamadoId: chamadoId
      };
    }

    function _init(chamadoId) {
      _getChamado(chamadoId);
      _getInteracoesChamadoCache(_parametroInteracoesChamado(chamadoId));
    }
    _init($stateParams.id);
  }
})();
