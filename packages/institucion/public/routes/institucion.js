'use strict';

angular.module('mean.institucion').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('institucion example page', {
            url: '/institucion/example',
            templateUrl: 'institucion/views/index.html'
        });
    }
]);
