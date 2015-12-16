"use strict";
(function(){
    angular
        .module("MovieApp")
        .controller("LoginController", LoginController);

    function LoginController(UserService, $rootScope, $location) {
        var model = this;
        model.login = login;

        function login() {
            var username = model.userName;
            var pwd = model.password;
            if(!username||!pwd){
                model.loginError="username or password is empty";
            }
            UserService.findUserByAuth(username, pwd)
                .then(function(user){
                    if (user != null) {
                        $rootScope.currentUser=user;
                        $rootScope.$broadcast('authenticate', user);
                        $location.url("/profile");
                    }
                    else{
                        model.loginError="username and password not match"
                    }
                }
            )};

    }
})();



