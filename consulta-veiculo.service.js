(function (angular, undefined) {
    "use strict";
    angular.module("app").factory("ConsultaVeiculoService", ConsultaVeiculoService);
    ConsultaVeiculoService.$inject = ["$http"];
    function ConsultaVeiculoService($http) {
        var service = {
            executarServicoIIB_POST: function (urlServico, dados) {
                var url = "{basePath}" + urlServico;
                url = url.replace("{basePath}", baseAPIPath);
                return $http.post(url, dados).then(tratarResposta, tratarErro);
            },
            executaConsultaModelo_GET: function(){
                var urlServico = 'http://fipeapi.appspot.com/api/1/motos/marcas.json';
                return $http.get(urlServico).then(tratarResposta, tratarErro);
            }
        };

        function tratarResposta(response) {
            return response.data;
        }

        function tratarErro(error) {
            return error.data;
        }

        return service;

    }

})(angular);