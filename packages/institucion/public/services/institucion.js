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

// 'use strict';

// //Articles service used for articles REST endpoint
// angular.module('mean').factory('Articles', ['$resource',
// 	function($resource) {
// 		return $resource('articles/:articleId', {
// 			articleId: '@_id'
// 		}, {
// 			update: {
// 				method: 'PUT'
// 			}
// 		});
// 	}
// ]);
