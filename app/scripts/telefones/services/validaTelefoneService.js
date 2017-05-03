(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('ValidaTelefoneService', ValidaTelefoneService);

  ValidaTelefoneService.$inject = ['ContatosService'];

  function ValidaTelefoneService(ContatosService) {
    var servicos = {
      validaDuplicidadeTelefone: _validaDuplicidadeTelefone

    };
    return servicos;

    function _validaDuplicidadeTelefone(telefone, indiceTelefone) {
      if (telefone) {
        ContatosService
          .getByParameter('telefone', telefone)
          .then(function(telefonesContato) {

            return telefonesContato._embedded.contatos;

          }, function(error) {
            console.log(error);
          });
      }


    }


  }
})();
