"use strict";
//var users = require('../models/user.mock.json');
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
module.exports = function(mongoose,db) {
//accept dependency objects in module constructor, eg pass app, db and other instances in constructor
//module.exports = function(...)

    var UserSchema = require("./user.schema.js")(mongoose);
    var userModel = mongoose.model("userModel", UserSchema);

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
        //console.log("inside user.model.js findUserById!!!!!");
            var deferred = q.defer();
            userModel.findById(userId, function(err, user){
                            deferred.resolve(user);
                        });
            return deferred.promise;
        }

        function findUserByCredentials(credentials) {
        console.log("inside user.model.js findUserByCredentials");
            var deferred = q.defer();
            console.log(credentials.username + " " + credentials.password);
             userModel.find({username: credentials.username,
                            password: credentials.password}, function(err, user){
                deferred.resolve(user);
            });
            return deferred.promise;
        }

        function findUserByUsername(username) {
        console.log("inside user.model.js findUserByUsername");
            var deferred = q.defer();
            userModel.find({username : username}, function(err, user){
                            deferred.resolve(user);
                        });
            return deferred.promise;
        }

        function findAllUsers() {
        console.log("inside user.model.js findAll");
            var deferred = q.defer();
            userModel.find(function(err, users){
                deferred.resolve(users);
            });
            return deferred.promise;
        }

        function deleteUser(userId) {
        console.log("inside user.model.js deleteUser");
            var deferred = q.defer();
            userModel.remove({_id: userId}, function(err, user){
                   if(err) {
                       deferred.reject(err);
                   } else {
                       deferred.resolve(user);
                   }
            });
            return deferred.promise;
        }

        function addNewUser(newUser) {
        console.log("inside user.model.js addNewUser");
            var deferred = q.defer();
            console.log(newUser);
            userModel.create(newUser, function(err, doc){
                 deferred.resolve(doc);
            });
            return deferred.promise;
        }

        function updateUser(userId, userObj) {
        console.log("inside user.model.js updateUser");
            var deferred = q.defer();
            console.log("update user userId: "+ userId);
            //userObj.delete("_id");
            userModel.update({_id: userId}, {$set: userObj}, function(err, user) {
                     if(err) {
                        console.log("Cud not find Usr!!");
                         deferred.reject(err);
                     } else {
                     console.log("Update successful!");
                         userModel.findById(userId, function(err,usr) {
                                console.log(usr);
                                deferred.resolve(usr);
                         });
                     }
                 });
            return deferred.promise;
        }

};

