'use strict';

angular.module('mean.institucion').controller('InstitucionController', ['$scope', 'Global', 'Institucion',
    function($scope, Global, Institucion) {
        $scope.global = Global;
        $scope.package = {
            name: 'institucion'
        };
    }
]);
