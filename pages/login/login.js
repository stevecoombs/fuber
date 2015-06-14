angular.module('fuber')
.controller('loginPageController', function($scope, userService){

	$scope.loginWithGoogle = function(){
		userService.loginWithGoogle();
	}    

});