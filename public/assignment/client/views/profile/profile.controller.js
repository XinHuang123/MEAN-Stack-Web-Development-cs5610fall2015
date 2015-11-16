(function(){
    'use strict';
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController(UserService, $rootScope) {
        var model = this;
        model.update = update;

        model.username = $rootScope.curusername;
        model.pwd = $rootScope.curpwd;
        model.email = $rootScope.curemail;
        model.firstname = $rootScope.firstname;
        model.lastname = $rootScope.lastname;

        function update(){
            var userobj = {username: model.username, password: model.pwd, id: $rootScope.curid,
            email: model.email, firstName: model.firstname, lastName: model.lastname};

            UserService.updateUser($rootScope.curid, userobj)
                        .then(function(user){
                            if(user != null) {
                                $rootScope.curusername = user.username;
                                $rootScope.curpwd = user.password;
                                $rootScope.curid = user.id;
                                $rootScope.curemail = user.email;
                                $rootScope.firstname = user.firstName;
                                $rootScope.lastname = user.lastName;
                            }
                        });
        }
    }
})();