'use strict';

angular.module('mean.institucion').controller('InstitucionController', ['$scope', '$http', '$stateParams', '$location', 'Global', 'Institucion', 'Estudiantes',
    function($scope, $http, $stateParams, $location, Global, Institucion, Estudiantes) {
        $scope.global = Global;
        $scope.actuales = [];

        $scope.create = function() {
            var value = new Institucion({
                title: this.title,
                content: this.content
            });
            value.$save(function(response) {
                $location.path('institucion/' + response._id);
            });

            //this.title = '';
        };

        $scope.nana = function() {
            console.log('sss');
            //google.setOnLoadCallback(drawChart);
              
                
            console.log('sss');
        };

        $scope.llamarlista = function() {
            $http.post('/day', {
                institucionId: $stateParams.institucionId
            }).
            success(function(data, status, headers, config) {
                angular.forEach($scope.actuales, function(value, key) {
                    console.log(value._id);
                    $http.post('/horario', {
                        estudianteId: value._id,
                        dayId: data._id
                    }).
                    success(function(data, status, headers, config) {
                        console.log(data);
                    });
                });
            });
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
            Institucion.query(function(value) {
                 $scope.instituciones = value;
            });
        };


        $scope.findOne = function() {
            Institucion.get({
                institucionId: $stateParams.institucionId
            }, function(institucion) {
                //$scope.global.institucion = institucion;
                $scope.institucion = institucion;
            });
        };

        $scope.estaOk2 = function(estudiante) {
            if (!estudiante || estudiante.institucion !== $scope.institucion._id) return false;
            return estudiante;
        };

        $scope.presente = function(estudiante) {
            $scope.actuales.push(estudiante);
            for (var i in $scope.estudiantes) {
                if ($scope.estudiantes[i] === estudiante) {
                    $scope.estudiantes.splice(i, 1);
                }
            }
            console.log('presente');
        };

        $scope.falta = function(estudiante) {
            $scope.estudiantes.push(estudiante);
            for (var i in $scope.actuales) {
                if ($scope.actuales[i] === estudiante) {
                    $scope.actuales.splice(i, 1);
                }
            }
            console.log('falta');
        };

        $scope.findOneByestudents = function() {
            Institucion.get({
                institucionId: $stateParams.institucionId
            }, function(institucion) {
                //$scope.global.institucion = institucion;
                $scope.institucion = institucion;


                Estudiantes.query(function(value) {
                     $scope.estudiantes = value;
                });
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
