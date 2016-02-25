

(function() {
    'use strict';

    angular
        .module('projectApp')
        .controller('VerempresaCtrl', VerempresaCtrl);

    VerempresaCtrl.$inject = ['$scope','$firebaseArray'];

    /* @ngInject */
    function VerempresaCtrl($scope, $firebaseArray) {
        var vm = this;
        vm.title = 'VerempresaCtrl';

        //activate();
        //$.material.init();

        ////////////////
        
        var datRef = new Firebase('https://dbarcadia.firebaseio.com/Empresa');
        $scope.Empresa = $firebaseArray(datRef);
          
        $scope.Eliminar = function(id){
           $scope.Empresa.$remove(id);

        }
        
    }
})();