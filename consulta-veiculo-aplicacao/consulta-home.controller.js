angular.module("app").controller("ControladorDaPagina", ControladorDaPagina);
    ControladorDaPagina.$inject = ["$rootScope", "$scope", "$location", 
        "$q", '$filter','$routeParams', 'ConsultaVeiculoService'];

    function ControladorDaPagina($rootScope, $scope, $location, 
        $q, $filter, $routeParams, ConsultaVeiculoService){
        vm = this;
        vm.ola = "Olá Mundo!!!"

        
        vm.chamaAfuncaoInicial = function(){
            vm.executaConsultaModelo();
        }


        vm.executaConsultaModelo = function(){
           vm.marcas = ConsultaVeiculoService.executaConsultaModelo_GET().then(function(resposta){
                if(resposta){
                    vm.marcas =  resposta;
                    console.log(vm.marcas)
                }
           });
        }




        };
        