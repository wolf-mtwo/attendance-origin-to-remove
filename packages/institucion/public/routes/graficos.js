'use strict';

angular.module('mean.institucion').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('index graficos', {
            url: '/graficos/:estudianteId',
            templateUrl: 'institucion/views/graficos/index.html'
        });
    }
]);
