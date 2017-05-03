(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('AdicionarLigacoesCtrl', AdicionarLigacoesCtrl);
  AdicionarLigacoesCtrl.$inject = ['$scope',
    'TiposLigacoesService',
    'ContatosService',
    '$state',
    'PlantoesService',
    'toastr',
    'DateService',
    'StorageService',
    'InteracoesService',
    'AclService',
    'OperadoraService',
    'LigacaoInformacaoService',
    'Interacoes',
    'FiliaisService'
  ];

  function AdicionarLigacoesCtrl($scope,
    TiposLigacoesService,
    ContatosService,
    $state,
    PlantoesService,
    toastr,
    DateService,
    StorageService,
    InteracoesService,
    AclService,
    OperadoraService,
    LigacaoInformacaoService,
    Interacoes,
    FiliaisService
  ) {

    var idModulo = 5;
    AclService.validaPermisao(idModulo);
    _init();

    function _init() {

      var perfil = StorageService.getKey('idPerfil');

      if (perfil == 11 || perfil == 1) {
        $scope.visualizaComboFiliais = true;
        listaFiliais();
      }
    }



    function listaFiliais() {
      $scope.loadFiliais = FiliaisService.getFiliais()
        .then(function(filiais) {
          $scope.filiais = filiais._embedded.filiais;

        }, function(erro) {
          console.log(erro);
        });
    }



    $scope.exibeReposicao = true;

    $scope.adicionarTelefones = true;
    $scope.ligacao = {};
    $scope.page = {
      title: 'Ligações',
      subtitle: 'Cadastrar Ligações'
    };

    $scope.telefones = [{
      identify: 'telefone'
    }];

    function montaInteracao(contato, interacao, novaLigacao, reposicao, plantao) {



      if (contato.contatoJaCadastrado) {
        if (contato.tempoDesdeUltimoEnvio <= 24) {
          return {
            idContato: contato.interacoes.contatoId,
            idUsuarioCad: StorageService.getKey('id'),
            idCorretor: contato.interacoes.corretorId,
            origem: {
              id: _getOrigem(contato.filial)
            },
            origemTipo: "outras",
            idInteracaoPai: contato.interacoes.idInteracaoPai,
            observacao: "Cliente entrou em contato novamente.",
            situacao: 17,
            plantao: contato.plantao,
          };
        }
        return {
          idContato: contato.interacoes.contatoId,
          idUsuarioCad: StorageService.getKey('id'),
          idCorretor: contato.plantao.usuario_corretor.id,
          origem: {
            id: _getOrigem(contato.filial)
          },
          origemTipo: "outras",
          observacao: "Contato cadastrado no sistema.",
          situacao: 1,
          plantao: contato.plantao,
          contatoJaCadastrado: contato.contatoJaCadastrado,

        };
      }

      var idInteracaoPai = typeof contato.idInteracaoPai !== 'undefined' ? contato.idInteracaoPai : contato.idInteracaoContatoId;
      reposicao = typeof reposicao !== 'undefined' ? reposicao : false;
      $scope.errosEnvioEmail = [];
      var tipoEnvio = 23; // odonto
      var obsInteracao = "Indicação recebida no plantão Odontologico." // odonto

      if ($scope.ligacao.tipo.id == 3) {
        tipoEnvio = 21; // Plantao Presencial
        obsInteracao = "Indicação recebida no plantão Presencial."
      }

      if ($scope.ligacao.tipo.id == 1) {
        tipoEnvio = 22; // Plantao Saude
        obsInteracao = "Indicação recebida no plantão Saúde."
      }


      interacao = {
        idInteracaoPai: interacao.id,
        idContato: contato.id,
        idUsuarioCad: StorageService.getKey('id'),
        idCorretor: novaLigacao.plantao.usuario_corretor.id,
        origem: {
          id: _getOrigem(contato.filial)
        },
        origemTipo: "outras",
        observacao: obsInteracao,
        situacao: 2, // Enviado ao corretor.
        idTipoEnvio: tipoEnvio,
        enviarEmail: false,
        plantao: plantao,
        isReposicao: reposicao
      };
      //Envio tipo 8 => ligacao reposicao
      if (reposicao) {
        interacao.idTipoEnvio = 8;
        interacao.observacao = 'Indicação recebida pelo plantão, referente a reposição.';
      }

      return interacao;
    };

    /**
     *Se a filial for MAtriz Odonto o origem sera '0800-ligacao'
     */
    function _getOrigem(filialId) {
      return filialId == 20 ? 19 : 2;
    }

    $scope.salvarLigacao = function(ligacao) {


      if (!ligacao.plantao) {
        $scope.exibeMensagemAlerta = true;
        $scope.mensagemAlerta = 'Não é possível cadastrar uma ligação sem um corretor. Verifique se foi selecionado um plantão ou se existe algum corretor cadastrado no mesmo.';
        return;
      }

      if (ligacao.contatoJaCadastrado) {
        ligacao.interacoes = Interacoes.enviadasAoCorretor(ligacao.interacoes);
        cadastroInteracao(montaInteracao(ligacao));
        return;
      }

      if (ligacao.tipo.id === 4 || ligacao.tipo.id === 5) {
        saveLigacaoInformacao(createLigacaoInformacao(ligacao));
      }

      var novaLigacao = createLigacao(ligacao);

      if (novaLigacao.isReposicao) {
        var validaReposicao = validaExisteReposicao(novaLigacao.plantao);
        if (!validaReposicao) {
          return;
        }
      }
      cadastrarLigacao(novaLigacao);
    };

    function cadastrarLigacao(novaLigacao) {

      $scope.loadingForm = ContatosService
        .create(novaLigacao)
        .then(function(response) {


            $scope.telefones = [{
              identify: 'telefone'
            }];
            $scope.ligacao.nome = null;
            $scope.showAviso = false;

            toastr.success('Ligação gravada com sucesso.');
            var interacao;

            if (novaLigacao.isReposicao) {
              interacao = montaInteracao(response.contato, response.interacao, novaLigacao, true, novaLigacao.plantao);
            } else {
              interacao = montaInteracao(response.contato, response.interacao, novaLigacao, false, novaLigacao.plantao);
            }

            cadastroInteracao(interacao);

          },
          function(error) {
            toastr.error('Erro ao salvar contato.');
          });
    }

    function cadastroInteracao(interacao) {

      $scope.loadingForm = InteracoesService
        .create(interacao)
        .then(function(success) {

          if (interacao.contatoJaCadastrado) {
            delete interacao.contatoJaCadastrado;
            delete $scope.ligacao.contatoJaCadastrado;
            interacao.idInteracaoPai = success.id;
            interacao.observacao = "Enviado ao corretor.";
            interacao.situacao = 2;
            cadastroInteracao(interacao);
          }

          $scope.telefones = [{
            identify: 'telefone'
          }];
          $scope.ligacao.nome = "";
          delete $scope.ligacao.interacoes;
          $scope.showAviso = false;


          toastr.success('Contato enviado ao corretor com sucesso.');

          if (interacao.isReposicao) {
            removeReposicao(interacao.plantao);
          } else {
            atualizaDataUltimoEnvio(interacao.plantao);
          }

        }, function(error) {
          toastr.error('Erro ao enviadar contato para o corretor.');
        });
    }

    function removeReposicao(plantao) {

      var removePlantao = angular.copy(plantao);
      removePlantao.tipoUpdate = 'removeReposicao';
      $scope.ligacao.isReposicao = false;

      $scope.loadAddReposicao = PlantoesService.update(removePlantao);
      $scope.loadAddReposicao.then(function(success) {

        toastr.success('Reposição paga com sucesso');
        $scope.atualizaComboCorretor($scope.ligacao.tipo.id, plantao.filial.id);
        return true;
      }, function(error) {
        toastr.error('Erro ao pagar Reposicao.');
      });
    }

    function ultimaPosicaoFila(posicaoAtual) {
      var posicao = posicaoAtual;
      $scope.displayedCollection.forEach(function(corretor) {
        if (corretor.posicao > posicao) {
          posicao = corretor.posicao;
        }
      });
      return posicao + 1;
    }


    function atualizaDataUltimoEnvio(plantao) {
      plantao.posicao = ultimaPosicaoFila(plantao.posicao);
      plantao.tipoUpdate = 'posicao';
      $scope.loadAddReposicao = PlantoesService.update(plantao);
      $scope.loadAddReposicao.then(function(success) {
        $scope.atualizaComboCorretor(plantao.tipo.id, plantao.filial.id);
      }, function(error) {
        toastr.error('Erro ao atualizar plantao!');
      });

    }

    function saveLigacaoInformacao(createLigacaoInformacao) {
      $scope.loadLigacaoInformacao = LigacaoInformacaoService
        .save(createLigacaoInformacao)
        .then(function(res) {
          toastr.success('Ligação de informação gravada com sucesso.');
          $state.reload();
          $scope.telefones = [];
        }, function(error) {
          toastr.error('Erro ao gravar Ligação de informação.');
        });

    }


    function createLigacaoInformacao(ligacao) {
      var operadoraId = false;
      if (typeof ligacao.operadora != 'undefined') {
        operadoraId = ligacao.operadora.id;
      }

      var ligacaoInformacao = {
        nome: ligacao.nome,
        telefone: $scope.telefones[0].telefone,
        usuarioCadastroId: StorageService.getKey('id'),
        tipoLigacao: ligacao.tipo.id
      };
      return ligacaoInformacao;
    }

    function createLigacao(ligacao) {

      ligacao.isReposicao = ligacao.isReposicao ? true : false;
      ligacao.telefones = $scope.telefones;
      ligacao.situacao = 1;
      ligacao.idUsuarioCad = StorageService.getKey('id');
      ligacao.origemTipo = "outras";
      ligacao.origem = {
        id: _getOrigem(ligacao.filial)
      };
      return ligacao;
    }

    $scope.addReposicao = function(plantao) {
      plantao.tipoUpdate = 'addReposicao';
      $scope.loadAddReposicao = PlantoesService.update(plantao);
      $scope.loadAddReposicao.then(function(success) {
        plantao.reposicao = plantao.reposicao + 1;
        toastr.success('Reposição adicionada com sucesso');
        $scope.atualizaComboCorretor(plantao.tipo.id, plantao.filial.id);
      }, function(error) {
        toastr.error('Erro ao adicionarReposicao.');
      });
    };

    function validaExisteReposicao(plantao) {
      if (plantao.reposicao <= 0) {
        $scope.ligacao.isReposicao = false;
        if (!$scope.showAvisoReposicao) {
          $scope.showAvisoReposicao = !$scope.showAvisoReposicao;
        }
        return false;
      }
      return true;
    };




    $scope.atualizaComboCorretor = function(tipoPlantao, filialId) {

      if (tipoPlantao) {
        $scope.corretorList = [];
        var tipo = getTipoConsulta(tipoPlantao);

        if (tipo !== 'informacao' && tipo !== 'transferenciaInterna') {
          filialId = (tipoPlantao == 2 && StorageService.getKey('idFilial') == 1) ? 20 : filialId;
          getCorretoresPorTipo(tipoPlantao, filialId);


        } else {
          $scope.showCorretor = false;
          $scope.adicionarTelefones = false;
          $scope.showTableCorretor = false;
          $scope.exibeReposicao = false;
          $scope.exibeOperadora = false;
          if (tipo == 'informacao') {
            $scope.exibeOperadora = true;
            var loadOperadoras = OperadoraService.getData().then(function(res) {
              $scope.operadorasList = res._embedded.operadoras;
            });
          }
        }

      }


    };




    function parametroListaPlantao(tipoId, idFilial) {
      return {
        tipoId: tipoId,
        tipo: 'tipo',
        filialId: ((idFilial) ? idFilial : StorageService.getKey('idFilial'))
      };
    }

    function getCorretoresPorTipo(tipoPlantao, filialId) {
      $scope.showTableCorretor = false;

      $scope.loadPlantao = PlantoesService.getPlantao(parametroListaPlantao(tipoPlantao, filialId))
        .then(function(success) {
          $scope.corretorList = getCorretoresAtivos(success._embedded.plantoes);

          if ($scope.corretorList.length <= 0) {
            toastr.info('Sem corretores ativos nesse plantão.');
            $scope.showCorretor = false;
            return;
          }
          $scope.showTableCorretor = true;
          $scope.adicionarTelefones = true;
          $scope.showCorretor = true;
          $scope.ligacao.plantao = $scope.corretorList[0];
          $scope.displayedCollection = $scope.ligacao.plantao;

          $scope.data = [].concat($scope.corretorList);
          $scope.data = getHora($scope.data);
          return true;
        }, function(erro) {
          if (erro.status === 404) {
            toastr.info('Sem corretores ativos nesse plantão.');
            $scope.showCorretor = false;
            $scope.showTableCorretor = false;
          }
        });

    };

    function getCorretoresAtivos(corretores) {
      var corretoresAtivos = [];

      for (var i = 0; i < corretores.length; i++) {

        if (!corretores[i].bloqueado) {
          corretoresAtivos.push(corretores[i]);
        }
      }
      return corretoresAtivos;
    };

    $scope.perdeuLigacao = function(plantao) {
      plantao.posicao = ultimaPosicaoFila(plantao.posicao);
      plantao.tipoUpdate = 'perdeuLigacao';
      $scope.loadPerdeuLigacao = PlantoesService
        .update(plantao)
        .then(function(success) {
          $scope.atualizaComboCorretor(plantao.tipo.id, plantao.filial.id);
        }, function(error) {

        });
    };

    function getTipoConsulta(item) {
      var tipo;
      tipo = 'informacao';

      if (item === 1) {
        tipo = 1;
      }

      if (item === 2) {
        tipo = 2;
      }

      if (item === 3) {
        tipo = 3;
      }

      if (item === 5) {
        tipo = 'transferenciaInterna';
      }

      return tipo;
    };



    $scope.addTel = function() {
      $scope.telefones.push({
        'identify': 'telefone'
      });
    };

    $scope.removeTel = function() {
      var lastItem = $scope.telefones.length - 1;
      $scope.telefones.splice(lastItem);
    };

    $scope.loadTipos = TiposLigacoesService.getData();
    $scope.loadTipos.then(function(success) {
      $scope.tiposLigacoesList = success._embedded.tipos_ligacao;
    });



    //Separar em um serviço
    $scope.validaDuplicidadeTelefone = function(telefone, indiceTelefone, ligacaoTipo) {
      $scope.aviso = null;
      $scope.showAviso = false;
      $scope.emailRepetido = false;
      if (ligacaoTipo == 5 || ligacaoTipo == 4) {
        return;
      }
      if (telefone) {
        ContatosService
          .getByParameter('telefone', telefone)
          .then(function(telefonesContato) {
            $scope.telefoneRepetido = telefonesContato._embedded.contatos[0];
            if (telefonesContato.total_items) {
              $scope.showAviso = true;
              $scope.aviso = {
                tipo: 'Telefone',
                texto: 'O Telefone: ' + telefonesContato._embedded.contatos[0].telefone + ', já está cadastrado no sistema.'
              };
              _interacoesContato(telefonesContato._embedded.contatos[0], telefone, indiceTelefone);
            }

          }, function(error) {
            console.log(error);
          });
      }

    };


    function _interacoesContato(contato, telefone, indiceTelefone) {
      InteracoesService.getByContatoId(contato.id)
        .then(function(response) {
          $scope.ligacao.tempoDesdeUltimoEnvio = Interacoes.tempoDesdeUltimoEnvio(response._embedded.interacoes);
          $scope.ligacao.contatoJaCadastrado = true;
          $scope.ligacao.interacoes = response._embedded.interacoes;
          $scope.ligacao.nome = response._embedded.interacoes[0].nome;
          $scope.telefones[indiceTelefone - 1].telefone = telefone;
        }, function(error) {
          toastr.error('Erro ao consultar dados do contato.');
        });

    };

    $scope.acessar = function(telefone) {
      $scope.loadingAcesse = $state.go('app.contatos.detalhes', {
        id: telefone.id
      });
    };

    $scope.showAviso = false;

    $scope.ocultaAviso = function() {
      $scope.showAviso = false;
      $scope.exibeMensagemAlerta = false;
    };

    function getHora(plantoesLis) {
      var lista = plantoesLis;
      for (var i = 0; i < lista.length; i++) {
        lista[i].ultimo_envio = DateService.getHora(lista[i].ultimo_envio);
      }
      return lista;
    };

    $scope.ocultaAvisoReposicao = function() {
      $scope.showAvisoReposicao = !$scope.showAvisoReposicao;
    };

    $scope.limpar = function() {
      $scope.ligacao = {};
      $scope.telefones = [{
        identify: 'telefone'
      }];
      $scope.exibeMensagemAlerta = false;
      $scope.showAviso = false;
    };



  }


})();
