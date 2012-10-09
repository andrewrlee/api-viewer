'use strict';


angular.module('apiViewer', ['apiViewer.filters', 'apiViewer.services', 'apiViewer.directives', 'ngSanitize', 'ngResource']).
  config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {templateUrl: 'partials/home.html', controller: IndexCtrl});
    $routeProvider.otherwise({redirectTo: '/'});
  }]);

