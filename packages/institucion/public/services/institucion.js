'use strict';

angular.module('mean.institucion').factory('Institucion', ['$resource',
    function($resource) {
        return $resource('institucion/:institucionId', {
			institucionId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
    }
]);