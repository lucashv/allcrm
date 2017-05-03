'use strict';

/**
 * @ngdoc overview
 * @name minovateApp
 * @description
 * # minovateApp
 *
 * Main module of the application.
 */

/*jshint -W079 */

var app = angular
  .module('minovateApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngMessages',
    'picardy.fontawesome',
    'ui.bootstrap',
    'ui.router',
    'ui.utils',
    'angular-loading-bar',
    'angular-momentjs',
    'FBAngular',
    'lazyModel',
    'toastr',
    'angularBootstrapNavTree',
    'oc.lazyLoad',
    'ui.select',
    'ui.tree',
    'textAngular',
    'colorpicker.module',
    'angularFileUpload',
    'ngImgCrop',
    'datatables',
    'datatables.bootstrap',
    'datatables.colreorder',
    'datatables.colvis',
    'datatables.tabletools',
    'datatables.scroller',
    'datatables.columnfilter',
    'ui.grid',
    'ui.grid.resizeColumns',
    'ui.grid.edit',
    'ui.grid.moveColumns',
    'ngTable',
    'smart-table',
    'angular-flot',
    'angular-rickshaw',
    'easypiechart',
    'uiGmapgoogle-maps',
    'ui.calendar',
    'ngTagsInput',
    'pascalprecht.translate',
    'ngMaterial',
    'localytics.directives',
    'leaflet-directive',
    'wu.masonry',
    'ipsum',
    'angular-intro',
    'dragularModule',
    'LocalStorageModule',
    'APIInterceptor',
    'cgBusy',
    'ui.utils.masks',
    'ngCapsLock',
    'htmlSortable'
  ])


//Configuracao do armazenamento local
.config(['localStorageServiceProvider', function(localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('');
}])

.config(['$httpProvider', function($httpProvider) {
  $httpProvider.interceptors.push(function($q) {
    return {
      responseError: function(rejection) {
        if (rejection.status <= 0) {
          de(rejection);
          return;
        }
        return $q.reject(rejection);
      }
    };
  });
}])

.value('cgBusyDefaults', {
  message: 'Carregando...',
  backdrop: true,
})

.config(['uiSelectConfig', function(uiSelectConfig) {
  uiSelectConfig.theme = 'bootstrap';
}])

.config(['uibDatepickerConfig', function(uibDatepickerConfig) {
  uibDatepickerConfig.showWeeks = false;
}])




function de(data) {
  return console.log(data);
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
