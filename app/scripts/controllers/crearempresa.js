(function() {
    'use strict';

    angular
        .module('projectApp')
        .controller('CrearempresaCtrl', CrearempresaCtrl);

    CrearempresaCtrl.$inject = ['empresaSrv'];

    /* @ngInject */
    function CrearempresaCtrl(empresaSrv) {
        const vm = this;
        vm.title = 'CrearempresaCtrl';

        vm.Agregar = agregar;

        //activate();
        //$.material.init();

        function agregar(){
          vm.addEmpresa = {
            Correo:vm.Correo,
            Descripcion: vm.Descripcion,
            Jefe: vm.Jefe,
            Nombre: vm.Nombre
          }

          empresaSrv.addEmpresa(vm.addEmpresa);

          vm.Nombre = '';
          vm.Correo = '';
          vm.Jefe = '';
          vm.Descripcion = '';
        }
        
    }
})();
