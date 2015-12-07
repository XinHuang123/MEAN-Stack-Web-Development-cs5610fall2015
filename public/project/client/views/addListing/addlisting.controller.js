"use strict";

(function() {
    angular
        .module("MovieApp")
        .controller("AddListingController", AddListingController);

    function AddListingController($scope, $location) {
        $scope.$location = $location;
    }
})();
