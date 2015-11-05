"use strict";
(function() {
    angular
        .module('FormBuilderApp')
        .controller('RegisterController', RegisterController)

    function RegisterController($scope, $rootScope, $location, UserService) {
        $scope.login = login;
        $scope.register = register;
        $scope.$location = $location;

        function login() {
            var user = {
                username: $scope.username,
                password: $scope.password,
                email: $scope.email
            }
            UserService.createUser(user, function (user) {
                if (user) {
                    $rootScope.user = user
                    $location.path('/profile')
                }
            })
        }

    }
})()
