(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('AdicionarPlantoes', AdicionarPlantoes);

  AdicionarPlantoes.$inject = [
    '$scope',
    '$state',
    'PlantoesService',
    '$uibModal',
    'TiposPlantoesService',
    '$log',
    'toastr',
    'CorretoresService',
    'AclService',
    'StorageService',
    'FiliaisService'
  ];

  function AdicionarPlantoes(
    $scope,
    $state,
    PlantoesService,
    $uibModal,
    TiposPlantoesService,
    $log,
    toastr,
    CorretoresService,
    AclService,
    StorageService,
    FiliaisService
  ) {

    var idModulo = 7;
    AclService.validaPermisao(idModulo);
    $scope.dataAtual = new Date().toLocaleDateString();
    $scope.page = {
      title: 'Plantões',
      subtitle: 'Cadastrar Plantões'
    };
    $scope.sortableOptions = {
      placeholder: '<tr><td colspan="5">&nbsp;</td></tr>',
      forcePlaceholderSize: true
    };

    function init() {
      $scope.filial = parseInt(StorageService.getKey('idFilial'));
      getCorretores();
      listaTipoPlantoes();
      listaFiliais();
    }

    $scope.salvar = function(novoPlantao, plantoes) {
      cadastrarPlantao(montaPlantao(angular.copy(novoPlantao), plantoes));
    };

    function cadastrarPlantao(plantao) {
      $scope.loadingSalvar = PlantoesService
        .create(plantao)
        .then(function(success) {
          toastr.success('Corretor adicionado ao plantão com successo.');
          listaCorretoresPlantao(plantao.tipo.id, plantao.tipo.id - 1, plantao.filial);
          $scope.plantao = {};
        }, function(error) {
          toastr.error('Erro ao adicionar corretor ao plantão.');
        });
    }

    $scope.carregaListaCorretoresPlantao = function(novoPlantao, plantoes) {
      if (novoPlantao.tipo) {
        $scope.filial = parseInt(novoPlantao.filial);
        listaCorretoresPlantao(novoPlantao.tipo.id, selecionaListaPlantao(novoPlantao), novoPlantao.filial);
      }
    };

    function selecionaListaPlantao(novoPlantao) {
      $scope.plantoes[novoPlantao.tipo.id - 1].active = true;
      return novoPlantao.tipo.id - 1;
    }

    function listaCorretoresPlantao(tipoId, indice, filialId) {
      $scope.plantoes[indice].corretores = [];
      $scope.loadCorretoresPlantao = PlantoesService
        .getPlantao(parametroListaPlantao(tipoId, filialId))
        .then(function(success) {
          $scope.plantoes[indice].corretores = success._embedded.plantoes;
        }, function(erro) {
          console.log(erro);
          toastr.info(erro.data.detail);
        });
    }

    $scope.getListaPlantaoFilial = function(filialId, plantoes) {

      var indiceDoPlantaoAtivo = plantoes.findIndex(function(elemento) {
        return elemento.active == true;
      });
      listaCorretoresPlantao(plantoes[indiceDoPlantaoAtivo].id, indiceDoPlantaoAtivo, filialId);
    }

    $scope.carregarPlantoes = function(tipoId, indice, filialId) {
      listaCorretoresPlantao(tipoId, indice, filialId);
    };

    $scope.retiraCorretorPlantao = function(corretor, plantao) {
      corretor.tipoUpdate = 'inativa';
      $scope.loadDelete = PlantoesService.update(corretor)
        .then(function(success) {
          toastr.success('Corretor removido do plantão com sucesso');
          retiraCorretorLista(corretor, plantao);
        }, function(error) {
          toastr.error('Erro ao remover plantão.');
        });

    };

    function retiraCorretorLista(corretor, plantao) {
      var indicePlantao = $scope.plantoes.indexOf(plantao);
      var indiceCorretor = $scope.plantoes[indicePlantao].corretores.indexOf(corretor);
      $scope.plantoes[indicePlantao].corretores.splice(indiceCorretor, 1);
    }


    init();

    //para não atrapalhar a refatoração pois já estão funcionando

    function getCorretores(filialId) {
      $scope.loadCorretores = CorretoresService
        .getByFilial(parametroPesquisaCorretor(filialId))
        .then(function(corretores) {
          $scope.listaCorretores = corretores._embedded.corretores;
        }, function(erro) {
          console.log(erro);
        });
    }

    function listaFiliais() {
      $scope.loadFiliais = FiliaisService.getFiliais()
        .then(function(filiais) {
          $scope.filiais = filiais._embedded.filiais;
        }, function(erro) {
          console.log(erro);
        });
    }

    function listaTipoPlantoes() {
      $scope.loadingTiposPlantoes = TiposPlantoesService.getData()
        .then(function(success) {
          $scope.tiposPlantoesList = success._embedded.tipos_plantoes;
          $scope.plantoes = success._embedded.tipos_plantoes;
          listaCorretoresPlantao(1, 0, StorageService.getKey('idFilial'));
        }, function(erro) {
          console.log(erro);
        });
    }

    $scope.limparPlantao = function(indicePlantao, tipoId) {
      $scope.loadingLimpa = PlantoesService.deletePlantao(tipoId)
        .then(function(success) {
          toastr.success('Plantão limpo com sucesso');
          $scope.plantoes[indicePlantao].corretores = [];
        }, function(error) {
          toastr.error('Erro ao limpar Plantão');
        });
    };


    $scope.atualizaBloqueio = function(plantao) {
      plantao.bloqueado = !plantao.bloqueado;
      plantao.tipoUpdate = 'bloqueio';
      PlantoesService.update(plantao, function(success) {
        console.log('Bloqueio atualizado com sucesso');
      }, function(error) {
        plantao.bloqueado = !corretor.bloqueado;
        toastr.error('Erro ao atualizar status do corretor.');
      });
    };

    $scope.salvarOrdemPlantao = function(plantao) {
      plantao.corretores.forEach(function(corretor) {
        corretor.tipoUpdate = "posicao";
        $scope.loadOrdem = PlantoesService.update(corretor)
          .then(function(success) {

          });
      });
    };


    $scope.reordenarFila = function(startModel, destModel, start, end, indice) {
      destModel.forEach(function(corretor, indice) {
        corretor.posicao = indice + 1;
      });
    };

    function parametroListaPlantao(tipoId, idFilial) {
      return {
        tipoId: tipoId,
        tipo: 'tipo',
        filialId: ((idFilial) ? idFilial : StorageService.getKey('idFilial'))
      };
    }

    function parametroPesquisaCorretor(filialId) {
      var parametro = {
        tipo: 'todos'
      };
      return parametro;
    }

    function montaPlantao(novoPlantao, plantoes) {
      novoPlantao.posicao = plantoes[novoPlantao.tipo.id - 1].corretores.length + 1;
      novoPlantao.usuarioCadastro = StorageService.getKey('id');
      novoPlantao.corretor.filialId = novoPlantao.filial;
      return novoPlantao;
    }

  }

})();
