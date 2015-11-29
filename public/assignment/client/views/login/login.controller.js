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
                                $rootScope.curusername = user[0].username;
                                $rootScope.curpwd = user[0].password;
                                console.log(user[0]._id + " " + user[0].id);
                                $rootScope.curid = user[0]._id;
                                $rootScope.curemail = user[0].email;
                                $rootScope.firstname = user[0].firstName;
                                $rootScope.lastname = user[0].lastName;
                                $location.url("/profile");
                                }
                            }
                        )};

    }
})();