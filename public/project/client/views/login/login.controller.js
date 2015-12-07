"use strict";
(function() {
    angular
        .module("Restaurant")
        .controller("LoginController", LoginController);

    function LoginController($scope, $location, $rootScope, UserService, $http) {
        $scope.$location = $location;
        $scope.login = login;
        $scope.loginerror = false;


        //console.log("Hello");
        //
        //var config = {
        //    headers: {
        //        user_key: "45a370392f581a1a8992763ad55671d7"
        //    }
        //};

        $http.get("https://developers.zomato.com/api/v2.1/search?q=bbq", config)
            .then(function(response){
                console.log(response);
            }, function(error){
                console.log(error);
            });

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
//"use strict";
//(function() {
//    angular
//        .module("Restaurant")
//        .controller("LoginController", LoginController);
//    function LoginController(UserService, $rootScope, $location) {
//        var model = this;
//        model.login = login;
//
//        function login() {
//            var username = model.userName;
//            var pwd = model.password;
//            UserService.FindByAuth(username, pwd)
//                .then(function(user){
//                    if (user != null) {
//                        //$rootScope.curusername = user[0].username;
//                        //$rootScope.curpwd = user[0].password;
//                        //console.log(user[0]._id + " " + user[0].id);
//                        //$rootScope.curid = user[0]._id;
//                        //$rootScope.curemail = user[0].email;
//                        //$rootScope.firstname = user[0].firstName;
//                        //$rootScope.lastname = user[0].lastName;
//                        $rootScope.currentUser=user;
//                        $location.url("/home");
//                    }
//                }
//            )};
//
//    }
//})();


