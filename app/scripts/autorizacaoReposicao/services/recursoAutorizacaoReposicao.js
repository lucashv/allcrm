(function(){
  'use-stric';
  angular.module('minovateApp')
  .factory('RecursoAutorizacaoReposicao', RecursoAutorizacaoReposicao);

  RecursoAutorizacaoReposicao.$inject = [];

  function RecursoAutorizacaoReposicao(){

    var _reposicoesPendentes = function(reposicoes){
      return reposicoes.filter(function(reposicao){
        return reposicao.contatoPagamentoId == null;
      });
    };


    return{
      reposicoesPendentes: _reposicoesPendentes

    };


  }
})();
