//"use strict";
//(function() {
//    angular
//        .module("Restaurant")
//        .controller("ProfileController", ProfileController);
//
//    function ProfileController($scope, $location) {
//        $scope.$location = $location;
//    }
//})();
"use strict";
(function() {
    angular
        .module("Restaurant")
        .controller("ProfileController", ProfileController);

    function ProfileController(UserService,$rootScope) {
        var model = this;
        model.update = update;
        var loginuser=$rootScope.currentUser;

        //model.username = $rootScope.curusername;
        //model.password = $rootScope.curpwd;
        //model.email = $rootScope.curemail;
        //model.firstname = $rootScope.firstname;
        //model.lastname = $rootScope.lastname;
        model.username = loginuser.username;
        model.password = loginuser.password;
        model.email = loginuser.email;
        model.firstname = loginuser.firstname;
        model.lastname = loginuser.lastname;
        function update(){
            var userobj = {username: model.username, password: model.password, id: loginuser._id,
                email: model.email, firstname: model.firstname, lastname: model.lastname};

            UserService.Update(loginuser._id, userobj)
                .then(function(user){
                    if(user != null) {
                        console.log("user : " + user);
                        console.log("Updated username: " + user.username);
                        $rootScope.currentUser=userobj;
                        //$rootScope.curusername = user.username;
                        //$rootScope.curpwd = user.password;
                        //$rootScope.curid = user._id;
                        //$rootScope.curemail = user.email;
                        //$rootScope.firstname = user.firstName;
                        //$rootScope.lastname = user.lastName;
                        //$rootScope.currentUser=
                    }
                });
        }
    }
})();
