(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name minovateApp.controller:PagesLoginCtrl
     * @description
     * # PagesLoginCtrl
     * Controller of the minovateApp
     */
    angular.module('minovateApp')
            .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope',
        '$state',
        'LoginService',
        'toastr',
        'toastrConfig',
        'StorageService',
        'UserService',
        '$timeout',
        '$cookieStore',
        'AclService'
    ];

    function LoginCtrl($scope,
            $state,
            LoginService,
            toastr,
            toastrConfig,
            StorageService,
            UserService,
            $timeout,
            $cookieStore,
            AclService
            ) {

        $scope.login = function () {
            $scope.loginLoading = true;
            StorageService.removeAll();
            var response = LoginService.login($scope.user); //LoginService.create($scope.user);
            $scope.loadingLogin = response;
            response.$promise.then(function (success) {
                $scope.loginLoading = false;
                StorageService.setValue('id', success.id);
                toastr.success('Login efetuado com sucesso.', {
                    positionClass: "toast-bottom-right"
                }, {
                    showDuration: "100"
                });
                StorageService.setUser(success);

                var secs = 3600;
                var now = new Date();
                var exp = new Date(now.getTime() + secs * 1000);
                document.cookie = 'authCookie=1; expires=' + exp.toUTCString();
                $scope.loadMenu = AclService.modulosAcesso(success.perfil.id)
                        .then(function (listaAcesso) {
                            StorageService.setValue('listaAcesso', angular.toJson(listaAcesso._embedded.acl));
                            StorageService.setValue('rotaInicial', success.perfil.rotaInicial);
                            if (document.cookie.indexOf("ultimaRota") >= 0) {
                                $state.go(getCookie("ultimaRota"));
                                return;
                            } else {
                                console.log(getCookie("auth"));
                                $state.go(success.perfil.rotaInicial);
                                return;
                            }


                        }, function (error) {
                            console.log('Erro meu irmão!');
                        });


            }, function (error) {
                $scope.loginLoading = false;
                if (error.status === 412) {
                    toastr.info('O perfil do usuário não se encontra cadastrado no CRM.');
                    return;
                }
                if (error.status === 404) {
                    toastr.info('A filial do usuário não se encontra cadastrado no CRM.');
                    return;
                }
                if (error.status === 403) {
                    toastr.error('Usuário ou senha inválidos, tente novamente.');
                }
                $scope.user.password = '';
            });

        };

        $scope.voltarLogin = function () {
            var rotaInicial = StorageService.getKey('rotaInicial');
            $state.go(rotaInicial);
        };

        $scope.refresh = function () {
            $state.reload();
        };

    }
})();
