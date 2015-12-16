(function(){
    'use strict';
    angular
        .module("MovieApp")
        .controller("RegisterController", RegisterController);

    function RegisterController(UserService, $location, $rootScope) {
        var model = this;
        model.register = register;

        function init() {
            UserService.findAllUsers()
                .then(function(users){
                    model.allUsers = users;
                });
        }
        init();

        function register(){
            var username = model.userName;
            var pwd = model.password;
            var email = model.email;
            var firstname = model.firstName;
            var lastname = model.lastName;
            var role=model.role;
            var userObj = {username: username, password: pwd , email: email,firstname:firstname,lastname:lastname,role:role };
            if(model.password!=model.verifyPassword){
                model.Error="Password not match"
            }
            else{
                var user = UserService.createUser(userObj)
                    .then(function(user){
                        if(user != null) {
                            $rootScope.currentUser=user;
                            $rootScope.$broadcast('authenticate', user);
                            $location.url("/home");
                        }
                    });
            }

        }
    }
})();
