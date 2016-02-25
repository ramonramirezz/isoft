(function() {
    'use strict';

    angular
        .module('projectApp')
        .controller('CrearempresaCtrl', CrearempresaCtrl);

    CrearempresaCtrl.$inject = ['$scope','$firebaseArray'];

    /* @ngInject */
    function CrearempresaCtrl($scope, $firebaseArray) {
        var vm = this;
        vm.title = 'CrearempresaCtrl';

        //activate();
        //$.material.init();

        ////////////////
        
        var datRef = new Firebase('https://dbarcadia.firebaseio.com/Empresa');
        $scope.Empresa = $firebaseArray(datRef);

        $scope.Agregar = function () {

        	$scope.Empresa.$add({
                  Correo:$scope.Nombre,
                  Descripcion:$scope.Jefe,
                  Jefe:$scope.Correo,
                  Nombre:$scope.Descripcion
        	});

              $scope.Nombre = '';
              $scope.Correo = '';
              $scope.Jefe = '';
              $scope.Descripcion = '';
        }
    }
})();
