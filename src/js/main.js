var app = angular.module('dentApp', []);


app.controller('servController', function($scope, $http) {

	$scope.respSt = true;
	$scope.services = {};
	$scope.resStatus = null;
	$scope.respText = '';
	$scope.closeModal = function() {
		$scope.respSt = true;
	};
	$http({
		method: 'GET',
		url: 'http://504080.com/api/v1/services/categories',
		headers: {
			'Authorization': '5f4b2fb83ad777ae6fd5f8a04a03590457b9d92b'
		}
	}).then(function(response){
		$scope.services = response.data.data;
	},
	function(response) {
		console.log(response);
		$scope.respSt = false;

		switch(response.status) {

			case 401:
				$scope.resStatus = response.status;
				$scope.respText = response.statusText;

			case 500:
				$scope.resStatus = response.status;
				$scope.respText = response.statusText;

		}
	})	
})