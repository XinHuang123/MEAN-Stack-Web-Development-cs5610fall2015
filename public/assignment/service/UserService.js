"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService(){
        var users = [];

        var service = {
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        };
        return service;

        function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }


        function findUserByUsernameAndPassword(username, password, callback) {
            for (var user in users) {
                if (user.username == username && user.password == password) {
                    callback(user);
                }
            }
            callback(null);

        }

        function findAllUsers(callback){
            callback(users);
        }

        function createUser(newuser, callback){
            var newUser = {
                id : guid(),
                username : newser.username,
                password : newuser.password,
                email : newuser.email,
                firstName : null,
                lastName : null
            };
            users.push(newUser);
            callback(newUser);
        }

        function deleteUserById(userid, callback){
            for(var user in users){
                if(user.id === userid){
                    users.splice(user, 1);
                }
            }
            callback(users);
        }


        function updateUser(userid, updatedUser, callback){
            for(var user in users){
                if(user.id === userid){
                    user.username = updatedUser.username;
                    user.password = updatedUser.password;
                    user.firstName = updatedUser.firstName;
                    user.lastName = updatedUser.lastName;
                    user.email = updatedUser.email;
                    callback(user);
                }
                callback(null);
            }
        }
    }

})();