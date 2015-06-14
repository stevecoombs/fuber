var app = angular.module('fuber');

app.service('userService', function($location, $firebaseAuth, fb){

    
    var user = {
        name: ''
    };

    this.getLoggedInUser = function(){
        return user;
    }

    this.logout = function(){
    	var ref = new Firebase(fb.url);
    	var authObj = $firebaseAuth(ref);
    	ref.$unauth();
    	$location.path('login')
    };

    this.loginWithGoogle = function(){
    	var ref = new Firebase(fb.url);
    	var authObj = $firebaseAuth(ref)
		authObj.$authWithOAuthPopup("google") 
			.then(function(authData){
				user.name = authData.google.displayName;
				$location.path('main');
				console.log(authData);
			})
			.catch(function(error){
				console.error('Authentication failed:', error);
			});
    }

});