'use strict';

angular.module('mean.institucion').controller('InstitucionController', ['$scope', '$stateParams', '$location', 'Global', 'Institucion',
    function($scope, $stateParams, $location, Global, Institucion) {
        $scope.global = Global;
        /*$scope.package = {
            name: 'institucion'
        };*/

        $scope.create = function() {
            //console.log('createa');
            //console.log('create2a');
            var value = new Institucion({
                title: this.title,
                content: this.content
            });
            value.$save(function(response) {
                $location.path('institucion/' + response._id);
            });

            //this.title = '';
        };

        $scope.remove = function(item) {
            if (item) {
                item.$remove();
                for (var i in $scope.instituciones) {
                    if ($scope.instituciones[i] === item) {
                        $scope.instituciones.splice(i, 1);
                        console.log('general malito');
                    }
                }
            } else {
                $scope.item.$remove(function(response) {
                    console.log('loco');
                    $location.path('institucion/list');
                });
            }
        };

        $scope.update = function() {
            var institucion = $scope.institucion;
            if (!institucion.updated) {
                institucion.updated = [];
            }
            institucion.updated.push(new Date().getTime());

            institucion.$update(function() {
                $location.path('institucion/' + institucion._id);
            });
        };

        $scope.find = function() {
            //console.log(Institucion);
            //console.log('sdsd');
            Institucion.query(function(value) {
                 $scope.instituciones = value;
            });
        };


        $scope.findOne = function() {
            Institucion.get({
                institucionId: $stateParams.institucionId
            }, function(institucion) {
                $scope.institucion = institucion;
                $scope.global.institucion = institucion;
            });
        };
    }
]);


// 'use strict';

// angular.module('mean').controller('InstitucionController', ['$scope', '$stateParams', '$location', 'Global', 'Institucion',
//     function($scope, $stateParams, $location, Global, Institucion) {
//         $scope.global = Global;

//         // $scope.hasAuthorization = function(article) {
//         //     if (!article || !article.user) return false;
//         //     return $scope.global.isAdmin || article.user._id === $scope.global.user._id;
//         // };



//         $scope.update = function() {
//             var article = $scope.article;
//             if (!article.updated) {
//                 article.updated = [];
//             }
//             article.updated.push(new Date().getTime());

//             article.$update(function() {
//                 $location.path('articles/' + article._id);
//             });
//         };


//     }
// ]);
