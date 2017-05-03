(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('StorageService', StorageService);
  StorageService.$inject = ['localStorageService'];

  function StorageService(localStorageService) {

    var service = {
      setValue: _setValue,
      removeKey: _removeKey,
      getKey: _getKey,
      getNome: _getNome,
      removeAll: _removeAll,
      getUserLogado: _getUserLogado,
      setUser: _setUser

    };
    return service;

    function _setValue(key, val) {
      return localStorageService.set(key, "" + val + "");
    };

    function _removeKey(key) {
      return localStorageService.remove(key);
    };

    function _getKey(key) {
      return localStorageService.get(key);
    };

    function _getNome() {
      return localStorageService.get('nome');
    };

    function _removeAll() {
      return localStorageService.clearAll();
    };

    function _getUserLogado() {

      var user = {
        id: localStorageService.get('id'),
        idPerfil: localStorageService.get('idPerfil'),
        nome: localStorageService.get('nome'),
        sobrenome: localStorageService.get('sobreNome'),
        perfil: localStorageService.get('perfil'),
        cpf: localStorageService.get('cpf'),
        telefone_1: localStorageService.get('telefone_1'),
        telefone_2: localStorageService.get('telefone_2'),
        email: localStorageService.get('email'),
        filial: localStorageService.get('idFilial'),
      };
      return user;
    };

    function _setUser(user) {
      localStorageService.set('nome', user.nome);
      localStorageService.set('sobreNome', user.sobre_nome);
      localStorageService.set('perfil', user.perfil.perfil);
      localStorageService.set('email', user.email);
      localStorageService.set('idPerfil', '' + user.perfil.id);
      localStorageService.set('idFilial', '' + user.filial.id);
      localStorageService.set('envioBloqueado', '' + user.is_envio_bloqueado);
    };



  }

})();
