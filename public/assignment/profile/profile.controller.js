"use strict";
(function()
{
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, $location, UserService, $rootScope)
    {

        $scope.$location = $location;

        $scope.update = function() {

            UserService.updateUser($scope.profileUser.id, $scope.profileUser, function(user){

                if(user != null)
                {
                    $rootScope.user = user;
                    $location.url("/profile");

                }
            });
        }

    }
})();
