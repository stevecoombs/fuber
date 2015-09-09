angular.module('fuber')

.controller('mcdonaldsController', function($scope, mainService, $timeout){
	

	mainService.getMcDMenu().then(function(response){
		$scope.menu = response.data.results;
	});	

	$scope.items = [];

	$scope.addItem = function(thing, price) {
        $scope.items.push({
            description: thing,
            cost: price
        });
    },

	$scope.removeItem = function(index){
		$scope.items.splice(index, 1);
	},

	$scope.total = function(){
		var total = 0;
		angular.forEach($scope.items, function(items){
			total += items.cost;
		});

		return total;
	};
});