(function() {
  'use strict';
  angular.module('minovateApp').
  factory('DateService', DateService);

  DateService.$inject = ['$filter'];

  function DateService($filter) {
    var DateServiceApi = {};


    DateServiceApi.getDataAtualMysql = function() {
      var d = new Date,
        date = [d.getFullYear(),
          (d.getMonth() + 1).padLeft(),
          d.getDate().padLeft()

        ].join('-') + ' ' + [d.getHours().padLeft(),
          d.getMinutes().padLeft(),
          d.getSeconds().padLeft()
        ].join(':');
      return date;
    };


    Number.prototype.padLeft = function(base,chr){
      var  len = (String(base || 10).length - String(this).length)+1;
      return len > 0? new Array(len).join(chr || '0')+this : this;
    };

    DateServiceApi.formatBrasil = function(data, somenteData)
    {
      var somenteData = typeof somenteData !== 'undefined' ? true : false;
      var d = new Date(data);
      d = [ d.getDate().padLeft(),
           (d.getMonth() + 1).padLeft(),
            d.getFullYear() ]
      .join('/') + ' ' +[d.getHours().padLeft(),
                        d.getMinutes().padLeft(),
                        d.getSeconds().padLeft()
      ].join(':');

      if(somenteData){
        return d.substr(0,10);
      }
      return d;
    };

    DateServiceApi.formatMysql = function(date)
    {
      var data = date.split('/');
      var dia = data[0];
      var mes = data[1];
      var ano = data[2];
       data =  ano+'-'+mes+'-'+dia;
       return data;
    };

    DateServiceApi.getHora = function(date)
    {
      return date.substr(11, 20);
    };


  DateServiceApi.getDatePickerMySql = function(date)
  {
    return 	$filter('date')(date, "yyyy-MM-dd");
  };

  DateServiceApi.converteDatas = function(data){

    var dataParaConverterExiste = typeof data !== 'undefined' ? data : false;
    if (dataParaConverterExiste) {
      return DateServiceApi.getDatePickerMySql(data);
    }
  };

  DateServiceApi.converteDatasFormatoBR = function(contatos) {
      var lista = contatos;
      for (var i = 0; i < lista.length; i++) {
          contatos[i].dataCadastro = DateServiceApi.formatBrasil(contatos[i].dataCadastro);
      }
      return lista;
  };


  return DateServiceApi;
}

})();
