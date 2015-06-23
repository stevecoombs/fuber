angular.module('fuber');

app.service('mainService', function($http){

	this.getTBMenu = function(results){
		return $http.get('https://api.import.io/store/data/5a1d74c6-f81d-41ca-830e-7ebda7d63bf2/_query?input/webpage/url=http%3A%2F%2Fwww.fastfoodmenuprices.com%2Ftaco-bell-prices%2F&_user=4e0267c8-8c33-4869-aba1-731c833f3232&_apikey=4e0267c8-8c33-4869-aba1-731c833f3232%3AZts1yRzg3XEetXc26DYJs0J3fr9f%2BLo%2FhP5zInyotEh48tMiAPBO4q%2BToQMbjBC4iNfOrdSZWxRQVfMp4EhtEw%3D%3D')
	};

	

});


