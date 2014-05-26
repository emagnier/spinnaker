'use strict';

angular.module('spinnakerApp')
    .controller('HeaderCtrl', function($scope, $location) {
        $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };
    });
