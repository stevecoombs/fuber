var app = angular.module('fuber', ['ngRoute', 'firebase']);

app.constant('fb', {
  url: 'https://fuber.firebaseio.com/'
})
app.config(function($routeProvider){
        $routeProvider.
            when('/login', {
                templateUrl: 'pages/login/login.html'
            }).
            when('/main', {
                templateUrl: 'pages/main/main.html'
            }).
            when('/checkout/:checkoutId', {
                templateUrl: 'pages/checkout/checkout.html'
            }).
            when('/tacobell', {
                templateUrl: 'pages/restaurants/tacobell/tacobell.html'
            }).
            when('/mcdonalds', {
                templateUrl: 'pages/restaurants/mcdonalds/mcdonalds.html'
            }).
            when('/arbys', {
                templateUrl: 'pages/restaurants/arbys/arbys.html'
            }).
            otherwise({
                redirectTo: '/login'
            });
});