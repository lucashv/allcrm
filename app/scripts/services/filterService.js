(function(){
    'use strict';
    angular.module('minovateApp')
        .factory('FilterService',FilterService);
        FilterService.$inject =  ['FiltrosApi'];

        function FilterService(FiltrosApi) {

            FiltrosApi = {};

            FiltrosApi.setValue = function(key, val) {
                return;
            };
            return FiltrosApi;
        }

})();
