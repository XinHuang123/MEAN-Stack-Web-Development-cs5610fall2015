"use strict";

(function() {
    angular
        .module("MovieApp")
        .controller("FooterController", FooterController);

    function FooterController($scope, $location) {
        $scope.$location = $location;
    }
})();
