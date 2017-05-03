(function() {
  'use strict';
  angular.module('minovateApp')
    .factory('MontaParametroService', MontaParametroService);

  MontaParametroService.$inject = [];

  function MontaParametroService() {
    var service = {
      setaNuloConverteDatas: _setaNuloConverteDatas,
      inicializaDataInicioFim: _inicializaDataInicioFim
    };
    return service;

    function _setaNuloConverteDatas(parametro) {
      if(parametro){
        Object.keys(parametro).forEach(function(elemento) {
          if (!parametro[elemento]) {
            parametro[elemento] = null;
            return;
          }
          if (parametro[elemento] instanceof Date) {
            parametro[elemento] = moment(parametro[elemento]).format('YYYY-MM-DD');
          }

        });
        return parametro;
      }

    }

    function _inicializaDataInicioFim(parametro) {
      if(parametro){
        Object.keys(parametro).forEach(function(elemento) {

          if (elemento == 'dataInicio' || elemento == 'dataFim') {
            parametro[elemento] = new Date(parametro[elemento]);
          }

        });
        return parametro;
      }

    }

  }
})();
