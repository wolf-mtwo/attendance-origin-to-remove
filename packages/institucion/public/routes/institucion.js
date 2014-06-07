'use strict';

angular.module('mean.institucion').config(['$stateProvider',
    function($stateProvider) {
        // $stateProvider.state('institucion example page', {
        //     url: '/institucion/example',
        //     templateUrl: 'institucion/views/index.html'
        // });

        $stateProvider.state('new institucion', {
            url: '/institucion/create',
            templateUrl: 'institucion/views/create.html'
        });

        $stateProvider.state('list institucion', {
            url: '/institucion/list',
            templateUrl: 'institucion/views/list.html'
        });

// .state('article by id', {
//                 url: '/articles/:articleId',
//                 templateUrl: 'articles/views/view.html',
//                 resolve: {
//                     loggedin: checkLoggedin
//                 }
//             });

        $stateProvider.state('view institucion', {
            url: '/institucion/:institucionId',
            templateUrl: 'institucion/views/view.html'
        });


// // .state('edit article', {
//                 url: '/articles/:articleId/edit',
//                 templateUrl: 'articles/views/edit.html',

        $stateProvider.state('edit institucion', {
            url: '/institucion/:institucionId/edit',
            templateUrl: 'institucion/views/edit.html'
        });
    }
]);
