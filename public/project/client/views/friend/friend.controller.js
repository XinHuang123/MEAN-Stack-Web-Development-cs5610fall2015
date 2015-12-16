"use strict";

(function() {
    angular
        .module("MovieApp")
        .controller("FriendController", FriendController);

    function FriendController(UserService,$rootScope,SearchService) {
        var model = this;
        model.find=find;
        model.follow=follow;
        model.update=update;
        model.select=select;
        model.remove=remove;

        function find(){
            UserService.findAllUsers()
                .then(function(users){
                    model.users=users;
                });
        }

        function follow(user){
            var currentuserid=$rootScope.currentUser._id;
            SearchService.follow(user,currentuserid);
        }

        function update(user){
            var userId=user._id;
            UserService.updateUser(userId,user)
                .then(function(user){
                    model.user=user;
                });
        }


        function select(id){
            UserService.findUserById(id)
                .then(function(user){
                    model.user=user;
                });
        }

        function remove(id){
            UserService.deleteUserById(id)
                .then(function(user){
                    model.user=user;
                });

        }
        function init() {
            UserService.findAllUsers()
                .then(function(users){
                    model.users = users;
                });
        }
        init();



    }
})();
