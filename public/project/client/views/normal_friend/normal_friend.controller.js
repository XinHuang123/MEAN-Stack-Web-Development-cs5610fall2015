"use strict";

(function() {
    angular
        .module("MovieApp")
        .controller("NormalFriendController", NormalFriendController);

    function NormalFriendController(UserService,$rootScope,SearchService) {
        var model = this;
        model.find=find;
        model.follow=follow;
        model.update=update;
        model.select=select;
        model.remove=remove;

        function init() {
            UserService.findAllUsers()
                .then(function(users){
                    model.users = users;
                });
        }
        init();

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
            var userId=model.user._id;
            UserService.updateUser(userId,user)
                .then(function(users){
                    model.users=users;
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
                .then(function(users){//the courses come from server
                    model.users=users;
                });

        }





    }
})();

