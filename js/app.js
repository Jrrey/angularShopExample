var shopApp = angular.module('shopApp', [
	'ngRoute',
	'shopControllers',
	'shopFactory'
]);

shopApp.config(function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'home.html',
			controller: 'ShopListCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
});