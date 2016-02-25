'use strict';

/**
 * @ngdoc function
 * @name projectApp.controller:EditarempresaCtrl
 * @description
 * # EditarempresaCtrl
 * Controller of the projectApp
 */
(function() {
    'use strict';

    angular
        .module('projectApp')
        .controller('EditarempresaCtrl', EditarempresaCtrl);

    EditarempresaCtrl.$inject = ['empresaSrv','$routeParams'];

    /* @ngInject */
    function EditarempresaCtrl(empresaSrv, $routeParams) {
        const vm = this;
        vm.title = 'EditarempresaCtrl';

        vm.id = $routeParams.idEmpresa;
        console.log(vm.id);

        vm.empresa = empresaSrv.getEmpresa(vm.id);

        console.log(vm.empresa);
    }
})();