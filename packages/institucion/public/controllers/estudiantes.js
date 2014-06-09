'use strict';

angular.module('mean.institucion').controller('EstudiantesController', ['$scope', '$attrs', '$stateParams', '$location', 'Global', 'Estudiantes',
    
	function($scope, $attrs, $stateParams, $location, Global, Estudiantes) {
        //$scope.global = Global;
       

        $scope.create = function() {
            var value = new Estudiantes({
                nombre: this.nombre,
                email: this.email,
                institucionId: $scope.institucion._id
            });
            value.$save(function(response) {
                //$location.path('estudiante/' + response._id);
                $scope.find();
                //$location.path('institucion/' + $scope.institucion._id);
            });


            //this.title = '';
        };


		$scope.estaOk = function(estudiante) {
			console.log(estudiante);
			console.log($scope.institucion._id);
            if (!estudiante || estudiante.institucion !== $scope.institucion._id) return false;
            return estudiante;
            /*return $scope.global.isAdmin || estudiante.user._id === $scope.global.user._id;*/
        };
        $scope.remove = function(estudiante) {
        	console.log(estudiante);
            if (estudiante) {
                estudiante.$remove();
                for (var i in $scope.estudiantes) {
                    if ($scope.estudiantes[i] === estudiante) {
                        $scope.estudiantes.splice(i, 1);
                    }
                }
            } else {
                $scope.estudiante.$remove(function(response) {
                    $location.path('institucion/list');
                });
            }
        };

        $scope.update = function() {
            var estudiante = $scope.estudiante;
            if (!estudiante.updated) {
                estudiante.updated = [];
            }
            estudiante.updated.push(new Date().getTime());

            estudiante.$update(function() {
                $location.path('estudiante/' + estudiante._id);
            });
        };

        $scope.find = function() {
        	console.log($scope.institucion);
        	// var value = new Estudiantes({
         //        institucion: $scope.institucion
         //    });

        	// value.query(function(value) {
         //         $scope.estudiantes = value;
         //    });

        	Estudiantes.query(function(value) {
                 $scope.estudiantes = value;
            });
            // Estudiantes.get({
            //     val: $scope.institucion._id
            // }, function(estudiantes) {
            //     $scope.estudiantes = estudiantes;
            // });
        };

        $scope.findOne = function() {
            Estudiantes.get({
                estudianteId: $stateParams.estudianteId
            }, function(estudiante) {
                $scope.estudiante = estudiante;
            });
        };
    }
]);
