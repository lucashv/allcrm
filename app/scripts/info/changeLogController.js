(function() {
  'use strict';
  angular.module('minovateApp')
    .controller('ChangeLogController', ChangeLogController);

  ChangeLogController.$inject = ['$scope', 'ChangeLogService'];

  function ChangeLogController($scope, ChangeLogService) {

    init();

    function init() {
      var logs = ChangeLogService.getData();
          logs.then(function(res){
            $scope.logs =  res._embedded.versoes;
            de($scope.logs );
          });

    }
  }

})();
