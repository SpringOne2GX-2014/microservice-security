function Hello($scope, $http) {
	$http({
		method : 'GET',
		url : 'http://localhost:9000/token'
	}).then(function(token) {

		var headers = {
			'X-Token' : token
		};

		return $http({
			method : 'GET',
			url : 'http://localhost:9000',
			headers : headers
		})

	}).success(function(data) {
		$scope.greeting = data;
	})
};
