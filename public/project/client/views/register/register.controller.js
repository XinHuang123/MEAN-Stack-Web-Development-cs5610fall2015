"use strict";

(function() {
    angular
        .module("Restaurant")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location, $rootScope, UserService) {
        $scope.$location = $location;
        $scope.register = register;

        function register() {
            $scope.regError = null;

            if ($scope.userName && $scope.password && $scope.verifyPassword && $scope.email) {
                if ($scope.password != $scope.verifyPassword) {
                    $scope.regError = "Passwords do not match";
                } else {
                    UserService.FindAll()
                        .then(function (users) {

                            for (var i = 0; i < users.length; i++) {
                                if (users[i].username === $scope.userName) {
                                    var message = "User Name already exists. Please choose a different one. We accept only letters and numbers in usernames";

                                    if ($scope.regError) {
                                        $scope.regError += " | " + message;
                                    } else {
                                        $scope.regError = message;
                                    }
                                }
                                if (users[i].email === $scope.email) {
                                    var message = "Email already in use";

                                    if ($scope.regError) {
                                        $scope.regError += " | " + message;
                                    } else {
                                        $scope.regError = message;
                                    }
                                }
                            }

                            if (!$scope.regError) {
                                var user = {
                                    firstname: $scope.firstName,
                                    lastname: $scope.lastName,
                                    username: $scope.userName,
                                    password: $scope.password,
                                    email: $scope.email
                                };

                                UserService.Create(user)
                                    .then(function (newUser) {
                                        $rootScope.currentUser = newUser;
                                        $rootScope.$broadcast('authenticate', newUser);
                                        $location.url('/home');
                                    });
                            }
                        });
                }
            } else {
                $scope.regError = "All fields are required"
            }
        }
    }
})();