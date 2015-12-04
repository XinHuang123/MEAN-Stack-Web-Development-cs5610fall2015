"use strict";

(function() {
    angular
        .module("Restaurant")
        .controller("AddListingController", AddListingController);

    function AddListingController($scope, $location) {
        $scope.$location = $location;
    }
})();
