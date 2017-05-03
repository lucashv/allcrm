(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('DragController', DragController);

  DragController.$inject = [
    '$scope',
    '$state',
    'PlantoesService',
    '$uibModal',
    'TiposPlantoesService',
    '$log',
    'toastr',
    'CorretoresService',
    'AclService',
    'StorageService'
  ];

  function DragController(
    $scope,
    $state,
    PlantoesService,
    $uibModal,
    TiposPlantoesService,
    $log,
    toastr,
    CorretoresService,
    AclService,
    StorageService
  ) {

    var idModulo = 7;
    AclService.validaPermisao(idModulo);
    $scope.dataAtual = new Date().toLocaleDateString();
    $scope.page = {

      subtitle: 'DRAG'
    };

    $scope.plantoes = [{
      nome: 'Saúde',
      tipo: {
        tipoId: 1,
        nome: 'saude'
      },
      corretores: []
    }, {
      nome: 'Odonto',
      tipo: {
        tipoId: 2,
        nome: 'odonto'
      },
      corretores: []
    }, {
      nome: 'Presencial',
      tipo: {
        tipoId: 3,
        nome: 'presencial'
      },
      corretores: []
    }];

  $scope.sortableOptions = {
    connectWith: '.connected'
  };
  $scope.seiLa = function(dataSets){
    console.log('aqui');
    console.log(dataSets);
  };

 $scope.dataSets = {
  firstSet: [
   { id: 1, name: 'A' },
   { id: 2, name: 'B' },
   { id: 3, name: 'C' },
   { id: 4, name: 'D' }
  ],
  secondSet: [
   { id: 1, name: 'A' },
   { id: 2, name: 'B' },
   { id: 3, name: 'C' },
   { id: 4, name: 'D' }
  ],
  thirdSet: [
   { id: 1, name: 'A' },
   { id: 2, name: 'B' },
   { id: 3, name: 'C' },
   { id: 4, name: 'D' }
  ]
 };


    function init() {

      // $scope.carregarPlantoes(1, 0);
      // $scope.carregarPlantoes(2, 1);
      // $scope.carregarPlantoes(3, 2);


      $scope.loadCorretores = CorretoresService
        .getByFilial(parametroPesquisaCorretor())
        .then(function(corretores) {
          $scope.listaCorretores = corretores._embedded.corretores;
        }, function(erro) {
          console.log(erro);
        });

      $scope.loadingTiposPlantoes = TiposPlantoesService.getData()
        .then(function(success) {
          $scope.tiposPlantoesList = success._embedded.tipos_plantoes;
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



    $scope.salvar = function(plantao) {

      plantao.usuarioCadastro = StorageService.getKey('id');
      plantao.filialId = StorageService.getKey('idFilial');
      $scope.loadingSalvar = PlantoesService
        .create(plantao)
        .then(function(success) {
          console.log(success);
          toastr.success('Corretor adicionado ao plantão com successo.');
          $scope.carregarPlantoes(plantao.tipo.id, selecionaListaPlantao(plantao));
          $scope.plantao = {};
        }, function(error) {
          toastr.error('Erro ao adicionar corretor ao plantão.');

        });

    };

    function selecionaListaPlantao(plantao) {
      var indice;
      $scope.plantoes.forEach(function(plantaoI, indiceFor) {
        if (plantaoI.tipo.tipoId == plantao.tipo.id) {
          indice = indiceFor;
        }
      });
      $scope.plantoes[indice].active = true;
      return indice;
    }

    $scope.carregarPlantoes = function(tipoId, indice) {

      $scope.loadPlantao = PlantoesService.getPlantao(parametroListaPlantao(tipoId))
        .then(function(success) {
          $scope.plantoes[indice].corretores = success._embedded.plantoes;
        }, function(erro) {
          console.log(erro);
          toastr.error(erro.data.detail);
        });
    };

    function parametroListaPlantao(tipoId) {
      return {
        tipoId: tipoId,
        tipo: 'tipo'
      };
    }

    function parametroPesquisaCorretor() {
      var parametro = {
        tipo: ((StorageService.getKey('idPerfil') == 11) ? 'todos' : 'filial'),
        filialId: StorageService.getKey('idFilial')
      };
      return parametro;
    }


    init();

  }

})();
