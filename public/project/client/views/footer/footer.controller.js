"use strict";

(function() {
    angular
        .module("Restaurant")
        .controller("FooterController", FooterController);

    function FooterController($scope, $location) {
        $scope.$location = $location;
    }
})();
