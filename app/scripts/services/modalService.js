(function() {
    'use strict';

    angular
        .module('minovateApp')
        .service('ModalService', ModalService);

    ModalService.$inject = ['$modal'];
    function ModalService($modal) {

        var modalDefaults = {
            backdrop: false,
            keyboard: false,
            animation: false,
            size: '',
            windowClass: '',
            templateUrl: '',
            controller: ''
        };

        var modalOptions = {};

        this.showModal = function (customModalDefaults, customModalOptions) {
                if (!customModalDefaults){
                customModalDefaults = {};
            }

            var tempModalDefaults = {};
            var tempModalOptions = {};

            angular.extend(tempModalDefaults, modalDefaults, customModalDefaults);
            angular.extend(tempModalOptions, modalOptions, customModalOptions);

            this.getCustomModalOptions = function(){
                return customModalOptions;
            };

            this.getTempModalOptions = function(){
                return tempModalOptions;
            };

            tempModalDefaults.controller = customModalDefaults.controller;
            return $modal.open(tempModalDefaults).result;
        };
    }
})();
