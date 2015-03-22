var shopDirectives = angular.module('shopDirectives', []);

shopDirectives.directive('cartitem', function(){
	return {
		scope: { item: '=' },
		restrict: 'E',
		template: '{{item.name}}, {{item.price | currency}} x {{item.amount}}'
	};
});