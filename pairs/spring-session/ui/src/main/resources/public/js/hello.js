function Hello($scope, $http) {
	$http({ method: 'GET', url: 'http://localhost:9000/token' }).then(function(token) {
		var headers = {
			'X-Token' : token // Yikes! Global variable.
		};

		return $http({
			method : 'GET',
			url : 'http://localhost:9000',
			headers : headers
		})
	}).success(function(data) {
		$scope.greeting = data;
	})
	// var headers = {
	// 	'X-Token' : token // Yikes! Global variable.
	// };
	// $http({
	// 	method : 'GET',
	// 	url : 'http://localhost:9000',
	// 	headers : headers
	// }).success(function(data) {
	// 	$scope.greeting = data;
	// })
};
