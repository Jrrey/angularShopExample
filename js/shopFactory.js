var shopFactory = angular.module('shopFactory', []);

shopFactory.factory('ShopArticlesFactory', function($http){

	var cachedData;

	function getData(callback){
		if(cachedData) {
			callback(cachedData);
		} else {
			$http.get('json/articles.json').success(function(data){
				cachedData = data;
				callback(data);
			});
		}
	}

	return {
		list: getData
	};
});

shopFactory.factory('CartFactory', function(){
	var items = [];
	return {
		list: function (callback) {
			callback(items);
		},
		addArticle: function (article ) {
			if(items.indexOf(article) != -1) {
				article.amount++;
			}else {
				article.amount = 1;
				items.push(article);
			}
		},
		remove: function(article) {
			if(items.indexOf(article) != -1) {
				if(article.amount > 1) {
					article.amount--;
				}else{
					items.splice(items.indexOf(article), 1);
				}
			}
		}
	}
});

shopFactory.factory('BuyerFactory', function() {
	var buyerDetails = {
		name: 'test name',
		firstname: 'test firstname',
		street: 'test street',
		zipcode: 'test zipcode',
		city: 'test city',
		email: 'test email'
	};

	return {
		getBuyer: function (callback) {
			callback(buyerDetails);
		}
	}
});

