(function() {
  'use strict';
  angular.module('minovateApp').factory('Interacoes', Interacoes);

  Interacoes.$inject = ['$moment'];

  function Interacoes($moment) {


    var servico = {
      bloqueiaInteracaoCorretor: _bloqueiaInteracaoCorretor,
      interacoesFilhasUsuario: _interacoesFilhasUsuario,
      interacoesPai: _interacoesPai,
      interacoesPaiUsuario: _interacoesPaiUsuario,
      jaEnviado: _jaEnviado,
      jaEnviadoCorretor: _jaEnviadoCorretor,
      filtraInteracoes: _filtraInteracoes,
      enviadasAoCorretor: _enviadasAoCorretor,
      tempoDesdeUltimoEnvio: _tempoDesdeUltimoEnvio,
      verificaCadastroSemEnvio: _verificaCadastroSemEnvio,
      verificaOrigem: _verificaOrigem
    };
    return servico;

    function _bloqueiaInteracaoCorretor (interacoes, idPerfil, gerarIndicacaoSeguro) {
      var status = [10, 16];
      //idPerfil : 2 Corretor
      var perfilBloqueio = (idPerfil == 2);
      if(!gerarIndicacaoSeguro){
        status.push(7);
      }

      return !(status.indexOf(interacoes[0].idSituacao) == -1) && perfilBloqueio;
    };

    function _interacoesFilhasUsuario  (interacoes, interacoesPai) {
      var interacoesUsuario = [];
      interacoesPai.forEach(function(interacaoPai) {
        interacoesUsuario.push(interacaoPai);
        interacoes.forEach(function(interacao) {
          if (interacaoPai.idInteracoesContato == interacao.idInteracaoPai) {
            interacoesUsuario.push(interacao);
          }
        });
      });
      return interacoesUsuario;
    };

    function _interacoesPai (interacoes) {
      return interacoes.filter(function(interacao, indice) {
        return interacao.idInteracaoPai == null;
      });
    };

    function _interacoesPaiUsuario (interacoes, usuarioId) {
      return interacoes.filter(function(interacao, indice) {
        var usuarioValido = interacao.idUsuarioCadastro == usuarioId || interacao.corretorId == usuarioId;
        if (interacao.idInteracaoPai == null && usuarioValido) {
          return interacao;
        }
      });
    };

    function _jaEnviado  (interacoes) {
      return interacoes.some(function(interacoes) {
        return interacoes.origemId == 144;
      });
    };

    function _jaEnviadoCorretor(interacoes, corretorId) {
      return interacoes.some(function(interacoes) {
        return interacoes.corretorId == corretorId;
      });
    };

    function _filtraInteracoes(interacoes, usuarioLogado) {
      var interacoesPai = [];
      if (usuarioLogado.idPerfil == 2) {
        interacoesPai = _interacoesPaiUsuario(interacoes, usuarioLogado.id);
        return _interacoesFilhasUsuario(interacoes, interacoesPai);
      }
      interacoesPai = _interacoesPai(interacoes);
      return _interacoesFilhasUsuario(interacoes, interacoesPai);
    };

    function _enviadasAoCorretor (interacoes) {
      // origemId = 144 Indicação Interna
      var enviadasAoCorretor = interacoes.filter(function(interacao) {
        return interacao.idSituacao == 2 && interacao.origemId != 144;
      });
      return enviadasAoCorretor[enviadasAoCorretor.length - 1];
    };

    function _tempoDesdeUltimoEnvio(interacoesContato) {
      var ultimaInteracaoEnvio = _enviadasAoCorretor(interacoesContato);
      var horarioComposto = "" + moment.duration(new moment().diff(moment(ultimaInteracaoEnvio.dataCadastro, "DD-MM-YYYY HH:mm"))).asHours();
      var hora = horarioComposto.split(".", 1);
      return hora[0];
    }

    function _verificaCadastroSemEnvio(interacoes) {
      return interacoes.some(function(interacao) {
        return interacao.idInteracaoPai == null && interacao.idSituacao == 1;
      });
    }

    function _verificaOrigem(interacoes, interacaoOrigemId) {
      return interacoes.some(function(interacao) {
        return interacao.origemId == interacaoOrigemId;
      })
    }

  }
})();
