//Define an angular module for our app
var app = angular.module('URLShortener', ['ngRoute', 'ngResource']);

//Define Routing for app
app.config(function($routeProvider) {
    $routeProvider.
      when('/', {
		templateUrl: 'templates/main.html',
		controller: 'mainController'
	}).
      otherwise({
      	template: 'Redirect to url'
		//redirectTo: '/404'
    });
});

/*
app.config(['$httpProvider', function($httpProvider) {
	//$httpProvider.defaults.withCredentials = true;
	$httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);
*/

/* API's base url */
app.run(['$window', function($window) {
	$window.baseUrl = 'http://localhost:8000/api';
}]);