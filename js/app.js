var shopApp = angular.module('shopApp', [
	'ngRoute',
	'shopControllers',
	'shopDirectives',
	'shopFactory'
]);

shopApp.config(function($routeProvider) {
	$routeProvider.
		when('/', {
			templateUrl: 'views/home.html',
			controller: 'ShopListCtrl'
		})
		.when('/confirm', {
			templateUrl: 'views/confirm.html',
			controller: 'CartCtrl'
		})
		.when('/buy', {
			templateUrl: 'views/buy.html',
			controller: 'BuyCtrl'
		})
		.when('/overview', {
			templateUrl: 'views/overview.html',
			controller: 'BuyCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});