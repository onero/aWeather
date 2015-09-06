aWeather.service('cityService', function() {
	
	this.city = "Esbjerg";
});

aWeather.service('weatherService', ['$resource', function($resource) {
	
	this.GetWeather = function(city, days) {
	var weatherAPI = 	$resource("http://api.openweathermap.org/data/2.5/forecast/daily?&units=metric", {
callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});

	return weatherAPI.get({ q: city, cnt: days });
	 };
	
}]);