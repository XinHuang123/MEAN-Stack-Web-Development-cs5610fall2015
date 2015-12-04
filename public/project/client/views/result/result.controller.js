"use strict";

(function() {
    angular
        .module("Restaurant")
        .controller("ResultController", ResultController);

    function ResultController($scope, $location) {
        $scope.$location = $location;
    }
})();
