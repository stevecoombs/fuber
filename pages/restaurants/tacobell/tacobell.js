angular.module('fuber')

.controller('tacoBellController', function($scope, mainService, $timeout){
	

	mainService.getTBMenu().then(function(response){
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



// $scope.invoice = {
//         items: [{
//             qty: 10,
//             description: 'item',
//             cost: 9.95}]
//     };

//     $scope.addItem = function() {
//         $scope.invoice.items.push({
//             qty: 1,
//             description: '',
//             cost: 0
//         });
//     },

//     $scope.removeItem = function(index) {
//         $scope.invoice.items.splice(index, 1);
//     },

//     $scope.total = function() {
//         var total = 0;
//         angular.forEach($scope.invoice.items, function(item) {
//             total += item.qty * item.cost;
//         })

//         return total;
//     }