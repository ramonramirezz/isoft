(function() {
    'use strict';

    angular
        .module('projectApp')
        .factory("Auth", ["$firebaseAuth",
  			function($firebaseAuth) {
    		var ref = new Firebase("https://dbarcadia.firebaseio.com");
    		return $firebaseAuth(ref);
  		}
])
        .controller('CrearusuarioCtrl', CrearusuarioCtrl);
        
    CrearusuarioCtrl.$inject = ['$scope','Auth','$location'];

    /* @ngInject */
    function CrearusuarioCtrl($scope, Auth, $location) {
        var vm = this;
        vm.title = 'CrearusuarioCtrl';

        //activate();
        //$.material.init();

        ////////////////
        $scope.createUser = function(){
        Auth.$createUser({
        	email: $scope.email,
       		password: $scope.password
      	}).then(function(userData) {
        	alert(userData.uid);
             
            // pls.$child("Usuario").$child(userData.uid).$add({
            //      nombre:$scope.Nombre,
            //      descripcion:$scope.Descripcion

            // },callback);
            

      	}).catch(function(error) {
        		alert(error);
      	});
        };
        
          
       
        
    }
})();