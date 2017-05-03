(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('CadastroLembreteController', CadastroLembreteController);
  CadastroLembreteController.$inject = [
    'Lembrete',
    '$uibModalInstance',
    'StorageService',
    'UsuarioAgendaService',
    'ContatosService',
    'toastr'
  ];

  function CadastroLembreteController(
    Lembrete,
    $uibModalInstance,
    StorageService,
    UsuarioAgendaService,
    ContatosService,
    toastr
  ) {
    var vm = this;
    vm.lembrete = {};

    vm.format = 'dd/MM/yyyy';
    vm.calendario = {
      opened: false
    };
    vm.dateOptions = {
      formatYear: 'yyyy',
      'class': 'datepicker'
    };
    vm.class = [{
      nome: 'cyan',
      class: 'bg-cyan'
    }, {
      nome: 'amethyst',
      class: 'bg-amethyst'
    }, {
      nome: 'green',
      class: 'bg-green'
    }, {
      nome: 'orange',
      class: 'bg-orange'
    }, {
      nome: 'red',
      class: 'bg-red'
    }, {
      nome: 'greensea',
      class: 'bg-greensea'
    }, {
      nome: 'dutch',
      class: 'bg-dutch'
    }, {
      nome: 'hotpink',
      class: 'bg-hotpink'
    }, {
      nome: 'drank',
      class: 'bg-drank'
    }, {
      nome: 'blue',
      class: 'bg-blue'
    }, {
      nome: 'lightred',
      class: 'bg-lightred'
    }, {
      nome: 'slategray',
      class: 'bg-slategray'
    }, {
      nome: 'darkgray',
      class: 'bg-darkgray'
    }, {
      nome: 'primary',
      class: 'bg-primary'
    }, {
      nome: 'success',
      class: 'bg-success'
    }, {
      nome: 'warning',
      class: 'bg-warning'
    }, {
      nome: 'danger',
      class: 'bg-danger'
    }, {
      nome: 'info',
      class: 'bg-info'
    }];


    vm.openCalendario = _openCalendario;
    vm.salvar = _salvar;
    vm.setClassCartao = _setClassCartao;
    vm.exibirCor = _exibirCor;
    vm.exibirContatos = _exibirContatos;
    vm.fecharOpcoes = _fecharOpcoes;
    vm.cancelar = _cancelar;


    _init(Lembrete);

    function _init(evento) {

      
      if (evento) {
        vm.lembrete = evento;
        vm.lembrete.start = moment(evento.data_agenda, 'YYYY-MM-DD')._d;
        if (Array.isArray(evento.className)) {
          vm.lembrete.className = evento.className[0];
        }
        if (evento.contato_id || evento.contatoId) {
          var contatoId = evento.contato_id ? evento.contato_id : evento.contatoId;
          _getContato(contatoId);
        }
      }
    }

    function _exibirCor(exibe) {
      vm.exibeTabelaCores = exibe;
      vm.exibeContatos = false;
    }

    function _exibirContatos(exibe) {
      vm.exibeContatos = exibe;
      vm.exibeTabelaCores = false;
    }

    function _fecharOpcoes() {
      vm.exibeContatos = false;
      vm.exibeTabelaCores = false;
    }

    function _getContato(contatoId) {
      vm.loadContato = ContatosService.getById(contatoId)
        .then(function(contato) {
          _montaContato(contato);
        });
    }

    function _montaContato(contato) {
      vm.contato = contato;
      vm.contato.idContato = contato.contatoId;
    }


    function _cancelar() {
      $uibModalInstance.dismiss('cancel');
    }

    function _openCalendario() {
      vm.calendario.opened = true;
    }

    function _setClassCartao(classe) {
      vm.lembrete.className = classe.class;
      vm.exibeTabelaCores = false;
    }

    function _salvar(lembrete, contato) {
      var novoLembrete = _montaParametro(lembrete, contato);
      if (lembrete.id) {
        _updateLembrete(novoLembrete, lembrete);
        return;
      }
      lembrete.update = false;
      _salvarLembrete(novoLembrete, lembrete);

    }

    function _salvarLembrete(novoLembrete, lembreteCalendario) {
      vm.loadLembrete = UsuarioAgendaService
        .create(novoLembrete)
        .then(function(sucesso) {
          toastr.success('Lembrete criado com sucesso.');
          lembreteCalendario.id = sucesso.id;
          lembreteCalendario.data_agenda = sucesso.dataAgenda.date;
          if(novoLembrete.idContato){
            lembreteCalendario.contato_id = novoLembrete.idContato;
          }
          $uibModalInstance.close(lembreteCalendario);
        }, function(erro) {
          console.log(erro);
        });
    }

    function _updateLembrete(lembrete, lembreteCalendario) {
      vm.loadLembrete = UsuarioAgendaService
        .update(lembrete)
        .then(function(sucesso) {
          toastr.success('Lembrete atualizado com sucesso.');
          if(lembreteCalendario){
            lembreteCalendario.data_agenda = sucesso.dataAgenda.date;
          }
          if(lembrete.idContato){
            lembreteCalendario.contato_id = lembrete.idContato;
          }
          lembreteCalendario.update = true;
          $uibModalInstance.close(lembreteCalendario);
        }, function(erro) {
          toastr.error('Ocorreu um errro ao atualizar o lembrete.');
          console.log(erro);
        });
    }

    function _montaParametro(lembrete, contato) {
      var novoEvento = {
        idUsuario: StorageService.getKey("id"),
        titulo: lembrete.title,
        descricao: lembrete.info,
        dataAgenda: moment(lembrete.start).format('YYYY-MM-DD'),
        className: lembrete.className ? lembrete.className : 'bg-primary',
        id: lembrete.id ? lembrete.id : undefined,
        enviarEmail: lembrete.enviarEmail
      };

      if (contato) {
        novoEvento.idContato = contato.idContato;
      }
      return novoEvento;
    }

    function _montaParametroCalendairo(lembrete) {
      var lembreteUpdate = {
        title: lembrete.title,
        info: lembrete.info,
        start: lembrete.start,
        className: lembrete.className ? lembrete.className : 'bg-primary',
        id: lembrete.id,
        update: true
      };

      return lembreteUpdate;
    }

  }
})();
