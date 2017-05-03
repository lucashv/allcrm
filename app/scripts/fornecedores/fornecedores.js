(function() {
 'use strict';
 angular.module('minovateApp')
 .controller('FornecedoresCtrl', FornecedoresCtrl);
  FornecedoresCtrl.$inject = ['FornecedoresService', '$scope','ngTableParams','$filter','$element'];
    function FornecedoresCtrl (FornecedoresService,$scope,ngTableParams,$filter,$element) {

    $scope.listaFornecedores = function() {
        if(!$scope.fornecedores) {
            FornecedoresService.query(function(success){
               var data = success._embedded.fornecedores;
               $scope.fornecedores = data;

                $scope.tableParams = new ngTableParams({
                  page: 1,            // show first page
                  count: 15,          // count per page
                  filter: {
                    name: 'A'       // initial filter
                  },
                  sorting: {
                    nome: 'asc'     // initial sorting
                  }
                }, {
                  total: data.length, // length of data
                  getData: function ($defer, params) {
                    // use build-in angular filter
                    var filteredData = params.filter() ?
                        $filter('filter')(data, params.filter()) :
                        data;
                    var orderedData = params.sorting() ?
                        $filter('orderBy')(filteredData, params.orderBy()) :
                        data;

                    params.total(orderedData.length); // set total for recalc pagination
                    $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                  }
                });
              });

              }

    };




    $scope.listaFornecedores();

    $scope.page = {
        title: 'Fornecedores',
        subtitle: 'Listar'
    };


 }


})();
