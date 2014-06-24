'use strict';

angular.module('mean.example').controller('ExampleController', ['$scope', 'Global', 'Example',
    function($scope, Global, Example) {
        $scope.global = Global;
        $scope.package = {
            name: 'example'
        };
    }
]);
