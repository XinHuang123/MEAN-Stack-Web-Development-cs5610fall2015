"use strict";

(function() {
    angular
        .module("MovieApp")
        .controller("FriendController", FriendController);

    function FriendController(UserService) {
        var model = this;
        //model.findfriend = findfriend;
        model.find=find;
        //function findfriend() {
        //    var username=model.username;
        //    UserService.findUserByUsername(username)
        //        .then(function(response) {
        //            //console.log("user : " + user);
        //           model.user=response;
        //
        //        });
        //}

        function find(){
            UserService.FindAll()
                .then(function(users){
                    model.users=users;
                });
        }
    }
})();
