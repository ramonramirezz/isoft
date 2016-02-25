

(function() {
    'use strict';

    angular
        .module('projectApp')
        .controller('VerempresaCtrl', VerempresaCtrl);

    VerempresaCtrl.$inject = ['empresaSrv'];

    /* @ngInject */
    function VerempresaCtrl(empresaSrv) {
        const vm = this;
        vm.title = 'VerempresaCtrl';

        vm.deleteEmpresa = deleteEmpresa;
        //$.material.init();
        
        vm.empresa = empresaSrv.setListToScope();

        function deleteEmpresa(id){
            empresaSrv.eliminarEmpresa(id);
        }

        
        
    }
})();