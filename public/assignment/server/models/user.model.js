var users = require('../models/user.mock.json');
var q = require("q");

module.exports = function(app) {

    var api = {
            findUserById : findUserById,
            findUserByUsername : findUserByUsername,
            findUserByCredentials : findUserByCredentials,
            findAllUsers: findAllUsers,
            deleteUser : deleteUser,
            addNewUser : addNewUser,
            updateUser: updateUser
        };
        return api;

        function findUserById(userId) {

            var deferred = q.defer();
            for(var user in users) {
                if(users[user].id.localeCompare(userId) == 0) {
                    deferred.resolve(users[user]);
                }
            }
            return deferred.promise;
        }

        function findUserByCredentials(credentials) {

            var deferred = q.defer();
            for(var user in users) {
                if(users[user].username.localeCompare(credentials.username) == 0 &&
                   users[user].password.localeCompare(credentials.password) == 0) {
                    deferred.resolve(users[user]);
                }
            }
            return deferred.promise;
        }

        function findUserByUsername(username) {

            var deferred = q.defer();
            for(var user in users) {
                if(users[user].username.localeCompare(username) == 0) {
                    deferred.resolve(users[user]);
                }
            }
            return deferred.promise;
        }

        function findAllUsers() {

            var deferred = q.defer();
            deferred.resolve(users);
            return deferred.promise;
        }

        function deleteUser(userId) {

            var deferred = q.defer();
            for(var user in users) {
                if(users[i].id == userId) {
                    users.splice(user, 1);
                    deferred.resolve(users);
                }
            }
            return deferred.promise;
        }

        function addNewUser(newUser) {

            var deferred = q.defer();
            var newUser = newUser;
            console.log(newUser);
            users.push(newUser);
            deferred.resolve(newUser);
            return deferred.promise;
        }

        function updateUser(userId, userObj) {

            var deferred = q.defer();
            for(var i = 0; i < users.length; i++)  {
            console.log(users[i].id);
                if(users[i].id == userId) {
                    users[i].username = userObj.username;
                    users[i].password = userObj.password;
                    users[i].firstName = userObj.firstName;
                    users[i].lastName = userObj.lastName;
                    deferred.resolve(users[i]);
                }
            }
            return deferred.promise;
        }
};

