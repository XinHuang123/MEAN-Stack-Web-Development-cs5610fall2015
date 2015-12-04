"use strict";

(function() {
    angular
        .module("Restaurant")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, $location) {
        $scope.$location = $location;
    }
})();
