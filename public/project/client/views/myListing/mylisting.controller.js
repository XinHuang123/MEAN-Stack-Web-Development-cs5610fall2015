"use strict";

(function() {
    angular
        .module("MovieApp")
        .controller("MyListingController", MyListingController);

    function MyListingController($scope, $location) {
        $scope.$location = $location;
    }
})();
