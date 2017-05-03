(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('CacheService', CacheService);
  CacheService.$inject = ['$cacheFactory'];

  function CacheService($cacheFactory) {
    return $cacheFactory('cacheCRM');
  }
})();
