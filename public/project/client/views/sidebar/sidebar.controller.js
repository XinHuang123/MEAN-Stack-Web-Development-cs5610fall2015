(function() {
    'use strict';
    angular
        .module("ProjectApp")
        .controller("SidebarController", SidebarController);

    function SidebarController($scope, $location)
    {
        $scope.$location = $location;
    }
})();