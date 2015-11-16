(function(){
    'use strict';
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController(UserService, $rootScope, $location) {
        var model = this;
        model.login = login;

        function login() {
            var username = model.username;
            var pwd = model.pwd;
            UserService.findUserByUsernameAndPassword(username, pwd)
                        .then(function(user){
                         if (user != null) {
                                $rootScope.curusername = user.username;
                                $rootScope.curpwd = user.password;
                                $rootScope.curid = user.id;
                                $rootScope.curemail = user.email;
                                $rootScope.firstname = user.firstName;
                                $rootScope.lastname = user.lastName;
                                $location.url("/profile");
                                }
                            }
                        )};

    }
})();