'use strict';

/* Services Module */
var services = angular.module('apiViewer.services', []);

services.value('version', version);
services.value('apiName', apiName);
services.value('apiDescription', apiDescription);
services.value('apiType', apiType);

services.factory('glossary', [ '$resource',
		function($resource) {
			return $resource(dataLocation);
		} ]);
