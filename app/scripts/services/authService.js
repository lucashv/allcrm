(function(){
'use strict';
angular.module('minovateApp')
  .factory('AuthService',AuthService);
  AuthService.inject =  ['StorageService'];

    function AuthService(StorageService){

        var AuthServiceApi = {};

        AuthServiceApi.IsAuthenticated = function () {
            var userName = StorageService.getNome() ? StorageService.getNome() : false;
            return userName;
        };
        return AuthServiceApi;
    }
})();
