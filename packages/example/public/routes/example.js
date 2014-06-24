'use strict';

angular.module('mean.example').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('example example page', {
            url: '/example/example',
            templateUrl: 'example/views/index.html'
        });
    }
]);
