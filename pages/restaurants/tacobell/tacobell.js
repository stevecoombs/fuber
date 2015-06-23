angular.module('fuber')

.controller('tacoBellController', function($scope, mainService){
	

	mainService.getTBMenu().then(function(response){
		$scope.menu = response.data.results
	});	

	$scope.invoice = {
		items: [{
			qty: 0, 
			description: '', 
			cost: ''
		}]
	};
	console.log($scope.invoice)

	$scope.addItem = function(thing, price) {
        $scope.invoice.items.push({
            qty: 1,
            description: thing,
            cost: price
        });
    },

	$scope.removeItem = function(index){
		$scope.invoice.items.splice(index, 1);
	},

	$scope.total = function(){
		var total = 0;
		angular.forEach($scope.invoice.items, function(items){
			total += items.qty * items.cost;
		})

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