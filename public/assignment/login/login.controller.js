"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $rootScope, $location, UserService){
        $scope.login = login;
        $scope.$location = $location;

        function login(){
            UserService.findUserByUsernameAndPassword(
                $scope.username,
                $scope.password,
                function(user){
                    if(user != null){
                        $rootScope.currentUser = user;
                        $location.url('/profile');
                    }else{
                        $location.url('/register');
                    }
                })
        }
    }
})();