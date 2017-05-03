(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('NavCtrl', NavCtrl);

  NavCtrl.inject = ['$scope', 'StorageService'];

  function NavCtrl($scope, StorageService) {

    $scope.oneAtATime = false;

    $scope.status = {
      isFirstOpen: true,
      isSecondOpen: true,
      isThirdOpen: true
    };

    $scope.nav = {
      title: 'CRM',
      settings: {
        navbarHeaderColor: 'scheme-black',
        sidebarColor: 'scheme-black',
        brandingColor: 'scheme-black',
        activeColor: 'cyan-scheme-color',
        headerFixed: true,
        asideFixed: true,
        rightbarShow: false
      },
      dashboardRota: StorageService.getKey('rotaInicial')
    };

    $scope.listaModulos = angular.fromJson(StorageService.getKey('listaAcesso'));






  }
})();
