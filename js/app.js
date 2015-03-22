var shopApp = angular.module('shopApp', [
	'ngRoute',
	'shopControllers',
	'shopDirectives',
	'shopFactory'
]);

shopApp.config(function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'home.html',
			controller: 'ShopListCtrl'
		})
		.when('/confirm', {
			templateUrl: 'confirm.html',
			controller: 'CartCtrl'
		})
		.when('/buy', {
			templateUrl: 'buy.html',
			controller: 'BuyCtrl'
		})
		.when('/overview', {
			templateUrl: 'overview.html',
			controller: 'BuyCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});