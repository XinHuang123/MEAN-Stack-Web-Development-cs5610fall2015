"use strict";

(function() {
    angular
        .module("Restaurant")
        .controller("MyListingController", MyListingController);

    function MyListingController($scope, $location) {
        $scope.$location = $location;
    }
})();
