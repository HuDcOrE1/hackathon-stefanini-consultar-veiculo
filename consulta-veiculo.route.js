angular.module('app').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'consulta-veiculo-aplicacao/templates/consultar-home.html',
            controller: 'ControladorDaPagina as vm'
        })
        .when('/listagem/:codigoVeiculo', {
            templateUrl: 'consulta-veiculo-aplicacao/templates/consultar-listagem.html',
            controller: 'ListagemController as vm'
        })
        ;
});