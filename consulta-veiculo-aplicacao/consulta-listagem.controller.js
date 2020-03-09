angular.module("app").controller("ListagemController", ListagemController);
    ListagemController.$inject = ["$rootScope", "$scope", "$location", "$q", '$filter','$routeParams'];

    function ListagemController($rootScope, $scope, $location, $q, $filter,$routeParams){
        vm = this;
        vm.ola = "Listagem";

        alert($routeParams.codigoVeiculo);
        vm.goToListagem = function(){
            $location.path("listagem");
        }




        };