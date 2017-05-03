(function(){
  'use strict';

  /**
 * @ngdoc function
 * @name minovateApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('MainCtrl',MainCtrl);
  MainCtrl.$inject = ['$scope', '$http', '$translate','StorageService','$state', '$location'];

   function MainCtrl ($scope, $http, $translate,StorageService,$state, $location) {

     var corMenus = "scheme-black";

     if($location.port() !== 80) {
       corMenus = "scheme-lightred";
     }

    $scope.main = {
      title: 'CRM',
      settings: {
        navbarHeaderColor: corMenus,
        sidebarColor: corMenus,
        brandingColor: corMenus,
        activeColor: 'cyan-scheme-color',
        headerFixed: true,
        asideFixed: true,
        rightbarShow: false
      },
      dashboardRota  : StorageService.getKey('rotaInicial')
    };

    $scope.ajaxFaker = function(){
      $state.reload();
      $scope.data=[];
    };


  }


})();
