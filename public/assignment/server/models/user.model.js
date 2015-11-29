var users = require('../models/user.mock.json');
var q = require("q");
/*
 You'll notice that angular services all start with $, e.g., $scope, $routeProvider, $http, $q
 These are all provided to us through a magical mechanism called injection. We just ask for
 it as a parameter by name and the framework just passes it to us. But for this to work you
 have to use a particular well known name, such as $q. The $ is so that it does not collide
 with other variables you might want to call q, scope, route, etc.

 On the server we don't have this magical injection mechanism, so we use the good old
 fashion way of requiring a library and using it in a module. We happen to call it 'q' but
 it could be whatever.
 */
module.exports = function(app) {
//accept dependency objects in module constructor, eg pass app, db and other instances in constructor
//module.exports = function(...)
    var api = {

            //CRUD
            addNewUser : addNewUser,
            findAllUsers: findAllUsers,
            findUserById : findUserById,
            updateUser: updateUser,
            deleteUser : deleteUser,
            //user model API
            findUserByUsername : findUserByUsername,
            findUserByCredentials : findUserByCredentials,
        };
        return api;


        function addNewUser(newUser) {

            var deferred = q.defer();

            var newUser = newUser;
            console.log(newUser);
            users.push(newUser);

            deferred.resolve(newUser);
            return deferred.promise;
        }


        function findAllUsers() {

            var deferred = q.defer();
            deferred.resolve(users);
            return deferred.promise;
        }



        function findUserById(userId) {

            var deferred = q.defer();
            for(var user in users) {//for in loop used to find the index which is not an Integer
                if(users[user].id.localeCompare(userId) == 0) {
                //The localeCompare() method compares two strings in the current locale.
                    deferred.resolve(users[user]);
                }
            }
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


        function findUserByUsername(username) {

            var deferred = q.defer();
            for(var user in users) {
                if(users[user].username.localeCompare(username) == 0) {
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


};

