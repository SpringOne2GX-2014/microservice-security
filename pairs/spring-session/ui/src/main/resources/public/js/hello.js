var angular = require('angular');

angular.module('hello',[])
	.controller('Hello', function Hello($scope, $http) {

		$http({
			method: 'GET',
			url: 'http://localhost:9000/token'
		}).then(function(token) {

			var headers = {
				'X-Token' : token
			};

			return $http({
				method : 'GET',
				url : 'http://localhost:9000',
				headers : headers
			});

		}).then(function(data) {
			$scope.greeting = data;
		}).catch(function(e) { // TODO: Remove
			console.error(e);
		});

	});

angular.bootstrap(document, ['hello']);
