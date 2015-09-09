angular.module('fuber');

app.service('mainService', function($http){

	this.getTBMenu = function(results){
		return $http.get('https://api.import.io/store/data/8ce5a407-dbc3-4f21-9bef-8c482e993bcc/_query?input/webpage/url=http%3A%2F%2Fwww.fastfoodmenuprices.com%2Ftaco-bell-prices%2F&_user=4e0267c8-8c33-4869-aba1-731c833f3232&_apikey=4e0267c88c334869aba1731c833f323266db35c91ce0dd711eb57736e83609b342777ebf5ff8ba3f84fe73227ca8b44878f2d32200f04ee2af93a1031b8c10b888d7ceadd4995b145055f329e0486d13')
	};

	this.getMcDMenu = function(results){
		return $http.get('https://api.import.io/store/data/c97e36db-a028-4888-9279-8c500ed8d262/_query?input/webpage/url=http%3A%2F%2Fwww.fastfoodmenuprices.com%2Fmcdonalds-prices%2F&_user=4e0267c8-8c33-4869-aba1-731c833f3232&_apikey=4e0267c88c334869aba1731c833f323266db35c91ce0dd711eb57736e83609b342777ebf5ff8ba3f84fe73227ca8b44878f2d32200f04ee2af93a1031b8c10b888d7ceadd4995b145055f329e0486d13')
	};

	this.getArbysMenu = function(results){
		return $http.get('https://api.import.io/store/data/84ed0f39-0201-451f-a413-16adfae7dcf9/_query?input/webpage/url=http%3A%2F%2Fwww.fastfoodmenuprices.com%2Farbys-prices%2F&_user=4e0267c8-8c33-4869-aba1-731c833f3232&_apikey=4e0267c88c334869aba1731c833f323266db35c91ce0dd711eb57736e83609b342777ebf5ff8ba3f84fe73227ca8b44878f2d32200f04ee2af93a1031b8c10b888d7ceadd4995b145055f329e0486d13')
	}

	

});


