(function() {
    'use strict';

    angular
        .module('projectApp')
        .controller('EditarempresaCtrl', EditarempresaCtrl);

    EditarempresaCtrl.$inject = ['$scope','$firebaseArray'];

    /* @ngInject */
    function EditarempresaCtrl($scope, $firebaseArray) {
        var vm = this;
        vm.title = 'EditarempresaCtrl';

        //activate();
        //$.material.init();

        ////////////////
        
        var datRef = new Firebase('https://dbarcadia.firebaseio.com/Empresa');
        $scope.Empresa = $firebaseArray(datRef);
          
        
        
    }
})();
