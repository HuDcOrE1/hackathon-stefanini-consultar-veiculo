angular.module("app").controller("ControladorDaPagina", ControladorDaPagina);
    ControladorDaPagina.$inject = ["$rootScope", "$scope", "$location", 
        "$q", '$filter','$routeParams', 'ConsultaVeiculoService'];

    function ControladorDaPagina($rootScope, $scope, $location, 
        $q, $filter, $routeParams, ConsultaVeiculoService){
        vm = this;
        vm.ola = "Olá Mundo!!!"
        
        vm.goToListagem = function(){
            //$location.path("listagem/100000");
            vm.executaConsultaModelo();
        }

        vm.executaConsultaModelo = function(){
           vm.marcas = ConsultaVeiculoService.executaConsultaModelo_GET();
           console.log(vm.marcas)
        }




        };
        