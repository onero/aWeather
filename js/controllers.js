aWeather.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {
																			 
		$scope.city = cityService.city;
																			 
		$scope.$watch('city', function() {
			cityService.city = $scope.city;		
		});
	
	$scope.submit = function() {
		$location.path ("/forecast");
	};
																			 
}]);

aWeather.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {
																					 
		 $scope.city = cityService.city;
	
			$scope.days = $routeParams.days || '2';
																					 
		 $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
	
	$scope.convertToDate = function(dt) {
		return new Date(dt*1000);
	};
	
}]);