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
        .controller('MainCtrl', MainCtrl);
        
    MainCtrl.$inject = ['$scope','Auth'];

    /* @ngInject */
    function MainCtrl($scope, Auth) {
        var vm = this;
        vm.title = 'MainCtrl';

        //activate();
        //$.material.init();

        ////////////////
        $scope.createUser = function(){
        Auth.$createUser({
        	email: $scope.email,
       		password: $scope.password
      	}).then(function(userData) {
        	alert(userData.uid);
      	}).catch(function(error) {
        		alert(error);
      	});
        };
        
          
       
        
    }
})();
