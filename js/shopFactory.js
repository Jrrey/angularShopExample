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
	var id = 0;
	return {
		list: function (callback) {
			callback(items);
		},
		addArticle: function (article ) {
			if(items.indexOf(article) != -1) {
				if(isNaN(article.amount)) {
					article.amount = 2
				}else{
					article.amount++;
				}
			}else {
				items.push(article);
			}
		}
	}
});

