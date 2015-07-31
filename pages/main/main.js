angular.module('fuber')
.controller('mainPageController', function($scope, $location, userService){

    $scope.user = userService.getLoggedInUser();

    $scope.thisRestaurant = function(){  

        if($scope.restaurant === 'taco-bell'){
            $location.path('/tacobell')
        }
        if($scope.restaurant === 'arbys'){
            $location.path('/arbys')
        }
        if($scope.restaurant === 'mcdonalds') {
            $location.path('/mcdonalds')
        }
    }

    $scope.test = function(){
        
        $scope.thisRestaurant();
    }

    $scope.logout = function(){        
        //Todo: actually log out;
        $scope.logout;
        $location.path('/login');
    }

});
