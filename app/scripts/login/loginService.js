(function () {
    'use strict';

    angular.module('minovateApp').factory('LoginService', LoginService);
    LoginService.$inject = ['$resource', 'ApiUrlService'];

    function LoginService($resource, ApiUrlService) {
        var service = {
            login: _login
        };
        /*return service;
         
         function _login(user) {
         console.log("Teste: " + user.usuario + "; senha: " + user.password);
         }
         */
        /*
        return $resource(ApiUrlService.getUrl() + "/auth-ldap/", {},
                {
                    create: {
                        method: 'POST'
                    }
                });*/
        return $resource(ApiUrlService.getUrl() + "/usuarios/", {}, {
            create: {
                method: 'POST'
            }
        });

    }
})();
