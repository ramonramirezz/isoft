

(function() {
    'use strict';

    angular
        .module('projectApp')
        .controller('VerempresaCtrl', VerempresaCtrl);

    VerempresaCtrl.$inject = ['$scope','$firebaseObject'];

    /* @ngInject */
    function VerempresaCtrl($scope, $firebaseObject) {
        var vm = this;
        vm.title = 'VerempresaCtrl';

        //activate();
        //$.material.init();

        ////////////////
        
        var datRef = new Firebase('https://dbarcadia.firebaseio.com/Empresa');
        $scope.Empresa = $firebaseObject(datRef);
        $scope.Empresa.$ref().key();
        $scope.Eliminar = function(item){
           $scope.Empresa.$remove(item);

        }
        
    }
})();