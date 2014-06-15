'use strict';

angular.module('mean.institucion').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('institucion example page', {
            url: '/institucion/example',
            templateUrl: 'institucion/views/index.html'
        });

        $stateProvider.state('new institucion', {
            url: '/institucion/create',
            templateUrl: 'institucion/views/create.html'
        });

        $stateProvider.state('list institucion', {
            url: '/institucion/list',
            templateUrl: 'institucion/views/list.html'
        });

        $stateProvider.state('generator institucion', {
            url: '/institucion/generator',
            templateUrl: 'institucion/views/listdetail.html'
        });

        $stateProvider.state('chart institucion', {
             url: '/institucion/chart',
            templateUrl: 'institucion/views/chart.html'
        });

        $stateProvider.state('view institucion', {
            url: '/institucion/:institucionId',
            templateUrl: 'institucion/views/view.html'
        });
        $stateProvider.state('edit institucion', {
            url: '/institucion/:institucionId/edit',
            templateUrl: 'institucion/views/edit.html'
        });

        $stateProvider.state('detail institucion', {
             url: '/institucion/:institucionId/detail',
            templateUrl: 'institucion/views/viewdetail.html'
        });

    }
]);
