"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);//inside UserService define the service interface

    function UserService() {
        var users = [];

        var service = {
            findUserByNameAndPassword: findUserByNameAndPassword,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        }

        return service;

        function findUserByNameAndPassword(userName, password, callback) {
            var currentUser = null;
            for (var i = 0; i < users.length; i++) {
                if ((users[i].userName == userName) && (users[i].password == password)) {
                    currentUser = users[i];
                    callback(currentUser);
                }
            }
            callback(null);

        }

        function findAllUsers(callback) {
            callback(users);
        }

        function createUser(user, callback) {
            var usersExists = false;

            for (var i = 0; i < users.length; i++) {
                if (users[i].userName === user.userName) {
                    console.log("User name already exists");
                    usersExists = true;
                    callback(null);
                }
            }

            if (!usersExists) {
                user.id = guid();
                users.push(user);//javascript array has push() method
        }

            callback(user);
        }

        function deleteUserById(userId, callback) {
            var index = null;

            for (var i = 0; i < users.length; i++) {
                if (users[i].id === userId) {
                    index = i;
                    break;
                }
            }
            if (index !== null) {
                users.splice(index, 1);
            }
            callback(users)
        }

        function updateUser(userId, user, callback) {
            for (var i = 0; i < users.length; i++) {
                if (users[i].id === userId) {
                    users[i] = user;
                }
            }
            callback(user);
        }

        function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }
    }
})();