'use strict';

/**
 * @ngdoc service
 * @name projectApp.empresa.srv
 * @description
 * # empresa.srv
 * Factory in the projectApp.
 */
(function() {
    'use strict';

    angular
        .module('projectApp')
        .factory('empresaSrv', empresaSrv);

    empresaSrv.$inject = ['$firebaseArray','url','$firebaseObject'];

    /* @ngInject */
    function empresaSrv($firebaseArray,url,$firebaseObject) {
      const _url = url;
      const _ref = new Firebase(_url+'Empresa');
      const vm = {};
      
      return {
        setListToScope: function() {
          vm.empresa = $firebaseArray(_ref);
          console.log(vm.empresa);
          return vm.empresa;
        },
        addEmpresa: function(item){
          _ref.push(item);
        },
        eliminarEmpresa: function(id){
          console.log(id);
          var itemRef = new Firebase(_url + '/Empresa/' + id);
          itemRef.remove();
        },
        getEmpresa: function(id){
          var arrayRef = new Firebase(url+'Empresa').child(id);
          vm.datos = $firebaseArray(arrayRef);
          vm.datos.$loaded(function (list) {
            vm.empresa = list;
            return vm.empresa;
          });
          console.log(vm.datos);
          return vm.datos;
        }
      };
    }
})();





