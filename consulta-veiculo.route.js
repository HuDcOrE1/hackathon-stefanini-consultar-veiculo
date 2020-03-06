angular.module('app').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'consulta-veiculo-aplicacao/templates/consultar-home.html',
            controller: 'controladorDaPagina as vm'
        });
});