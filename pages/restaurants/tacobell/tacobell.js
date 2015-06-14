angular.module('fuber')

.controller('tacoBellController', function($scope, mainService){

	$scope.displayTBMenu = function(){		
		mainService.getTBMenu($scope.showText).then(function(response){
			$scope.menu = response.data
		});
	}
})