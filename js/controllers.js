'use strict';

/* A controller for the Home page */
function IndexCtrl($scope, $http, $routeParams, glossary, apiDescription) {
	glossary.get(function(data) {
		$scope.glossary = data;
		$scope.apiDescription = apiDescription;
	});
}
IndexCtrl.$inject = [ '$scope', '$http', '$routeParams', 'glossary', 'apiDescription' ];
