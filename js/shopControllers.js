var shopControllers = angular.module('shopControllers', []);

shopControllers.controller('ShopListCtrl', function ($scope, ShopArticlesFactory, CartFactory){

	ShopArticlesFactory.list(function(data) {
		$scope.articles = data;
	});

	$scope.addToCart = function(article) {
		CartFactory.addArticle(article);
	}
});


shopControllers.controller('CartCtrl', function ($scope, CartFactory){

	CartFactory.list(function(data) {
		$scope.cartItems = data;
	});

	$scope.remove = function(cartItem) {
		CartFactory.remove(cartItem);
	}
});

shopControllers.controller('BuyCtrl', function($scope, BuyerFactory) {

	BuyerFactory.getBuyer(function(data) {
		$scope.buyer = data;
	});
});