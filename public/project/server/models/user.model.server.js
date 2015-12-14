"use strict";
var q = require("q");
module.exports = function (mongoose, db, localStrategy) {
    var UserSchema = require('./user.schema.server.js')(mongoose);
    var UserModel = mongoose.model('RentUserModel', UserSchema);

    var api = {
        Create: createUser,
        updateUser: updateUser,
        deleteUser : deleteUser,
        FindAll: findAllUsers,
        FindById: findUserById,
        findUserByUsername: findUserByUsername,
        FindByAuth: findUserByAuth
    };
    return api;


    function createUser(user) {
        var deferred = q.defer();

        UserModel.create(user, function (err, newUser) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(newUser);
            }
        });
        return deferred.promise;
    }

    function updateUser(userId, userObj) {
        var deferred = q.defer();
        UserModel.update({_id: userId}, {$set: userObj}, function(err, user) {
            if(err) {
                console.log("Cud not find Usr!!");
                deferred.reject(err);
            } else {
                console.log("Update successful!");
                RentUserModel.findById(userId, function(err,usr) {
                    console.log(usr);
                    deferred.resolve(usr);
                });
            }
        });
        return deferred.promise;
    }

    function deleteUser(userId) {
        console.log("inside user.model.js deleteUser");
        var deferred = q.defer();
        UserModel.remove({_id: userId}, function(err, user){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });
        return deferred.promise;
    }

    function findAllUsers() {
        var deferred = q.defer();

        UserModel.find(function (err, users) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(users);
            }
        });
        return deferred.promise;
    }

    function findUserById(id) {
        var deferred = q.defer();

        RentUserModel.findById({_id: id}, function (err, user) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });
        return deferred.promise;
    }

    function findUserByUsername(username) {
        var deferred = q.defer();
        UserModel.find({username : username}, function(err, user){
            deferred.resolve(user);
        });
        return deferred.promise;
    }

    function findUserByAuth(username, password) {
        var deferred = q.defer();

        UserModel.findOne({username: username, password: password}, function (err, user) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }
};