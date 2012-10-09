'use strict';

/* Directives */

var module = angular.module('apiViewer.directives', []);

module.directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.html(version);
    };
  }]);

module.directive('apiName', ['apiName', function(apiName) {
	return function(scope, elm, attrs) {
		elm.text(apiName);
	};
}]);

module.directive('apiType', ['apiType', function(apiType) {
	return function(scope, elm, attrs) {
		elm.text(apiType);
	};
}]);
