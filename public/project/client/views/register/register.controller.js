"use strict";

(function() {
    angular
        .module("Restaurant")
        .controller("RegisterController", RegisterController);

    function RegisterController(UserService, $location, $rootScope) {
        var model = this;
        model.getAllUsers = getAllUsers;
        model.register = register;

        function init() {
            UserService.FindAll()
                .then(function(users){
                    model.allUsers = users;
                });
        }
        init();

        function getAllUsers() {
            UserService.FindAll()
                .then(function(users){
                    model.allUsers = users;
                });
        }

        function register(){
            var username = model.user.userName;
            var pwd = model.user.password;
            var email = model.user.email;
            var firstname = model.user.firstName;
            var lastname = model.user.lastName;
            var userObj = {username: username, password: pwd , email: email,firstname:firstname,lastname:lastname};
            var user = UserService.Create(userObj)
                .then(function(user){
                    if(user != null) {
                        //$rootScope.curusername = user.username;
                        //$rootScope.curpwd = user.password;
                        //$rootScope.curid = user._id;
                        //$rootScope.curemail = user.email;
                        $rootScope.currentUser=user;
                        $location.url("/profile");
                    }
                });
        }
    }
})();