'use strict';

angular.module('mean.institucion').config(['$stateProvider',
    function($stateProvider) {

        $stateProvider.state('index reporte', {
            url: '/reporte',
            templateUrl: 'institucion/views/reporte/index.html'
        });

        $stateProvider.state('tabla reporte', {
            url: '/reporte/:institucionId/tabla',
            templateUrl: 'institucion/views/reporte/tabla.html'
        });

        $stateProvider.state('day reporte', {
            url: '/day/:institucionId',
            templateUrl: 'institucion/views/reporte/day.html'
        });

        $stateProvider.state('day report reporte', {
            url: '/day/:institucionId/report/:dayId',
            templateUrl: 'institucion/views/reporte/report.html'
        });
    }
]);
