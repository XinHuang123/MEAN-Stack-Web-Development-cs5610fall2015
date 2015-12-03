(function() {
    'use strict';
    angular
        .module("ProjectApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $location)
    {
        $scope.$location = $location;
    }
})();

