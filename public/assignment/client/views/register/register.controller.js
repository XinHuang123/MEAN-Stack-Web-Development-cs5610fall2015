(function(){
    'use strict';
         angular
             .module("FormBuilderApp")
             .controller("RegisterController", RegisterController);

         function RegisterController(UserService, $location, $rootScope) {
            var model = this;
            model.getAllUsers = getAllUsers;
            model.register = register;

           function init() {
               UserService.findAllUsers()
                           .then(function(users){
                               model.allUsers = users;
                           });
            }
            init();

            function getAllUsers() {
                UserService.findAllUsers()
                            .then(function(users){
                                model.allUsers = users;
                            });
            }

             function register(){
                var username = model.user.userName;
                var pwd = model.user.pwd;
                var email = model.user.email;
                var userObj = {username: username, password: pwd , email: email};
                var user = UserService.createUser(userObj)
                                      .then(function(user){
                                        if(user != null) {
                                            $rootScope.curusername = user.username;
                                            $rootScope.curpwd = user.password;
                                            $rootScope.curid = user.id;
                                            $rootScope.curemail = user.email;
                                            $location.url("/profile");
                                        }
                                      });
             }
         }
    })();