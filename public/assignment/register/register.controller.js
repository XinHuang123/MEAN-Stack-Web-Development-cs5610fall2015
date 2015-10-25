"use strict";
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location, UserService, $rootScope)
    {

        $scope.$location = $location;

        $scope.register = function() {

            UserService.createUser($scope.registerUser, function(newUser){
                $rootScope.user = newUser;
                $location.url("/profile");


            });
        }

    }
})();
