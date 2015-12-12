"use strict";
(function() {
    angular
        .module("MovieApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $location, $rootScope, UserService) {
        $scope.$location = $location;
        $scope.login = login;
        $scope.loginerror = false;


        function login() {
            var userName = $scope.userName;
            var password = $scope.password;

            if (!userName || !password) {
                $scope.loginErrorMessage = "Please enter your username and password";
                $scope.loginerror = true;
            }

            UserService.FindByAuth(userName, password).
                then(function(user) {
                    if (user) {
                        $scope.user = user;
                        $rootScope.currentUser = user;
                        $rootScope.$broadcast('authenticate', user);
                        $location.url("/home");
                    } else {
                        $scope.loginerror = true;
                        $scope.loginErrorMessage = "Oh Snap! Your credentials did not match our records. Please try again!"
                    }
                });
        }
    }
})();



