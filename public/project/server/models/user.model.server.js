"use strict";

module.exports = function (mongoose, db, localStrategy) {
    var q = require('q');
    var UserSchema = require('./user.schema.server.js')(mongoose);
    var RentUserModel = db.model('RentUserModel', UserSchema);

    var api = {
        Create: createUser,
        Update: updateUser,
        Delete: deleteUser,
        FindAll: findAllUsers,
        FindById: findUserById,
        FindByUserName: findUserByName,
        FindByAuth: findUserByAuth
    };

    return api;

    function createUser(user) {
        var deferred = q.defer();

        RentUserModel.create(user, function (err, newUser) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(newUser);
            }
        });
        return deferred.promise;
    }

    function updateUser(id, user) {
        var deferred = q.defer();

        RentUserModel.findById(id, function (err, updateUser) {
            updateUser.firstname = user.firstname;
            updateUser.lastname = user.lastname;
            updateUser.username = user.username;
            updateUser.password = user.password;
            updateUser.email = user.email;

            updateUser.save(function (err, updatedUser) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(updatedUser);
                }
            });
        });
        return deferred.promise;
    }

    function deleteUser(id) {
        var deferred = q.defer();

        RentUserModel.remove({_id: id}, function (err, status) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(status);
            }
        });
        return deferred.promise;
    }

    function findAllUsers() {
        var deferred = q.defer();

        RentUserModel.find(function (err, users) {
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

    function findUserByName(username) {
        var deferred = q.defer();

        RentUserModel.findOne({username: username}, function (err, user) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });
        return deferred.promise;
    }

    function findUserByAuth(username, password) {
        var deferred = q.defer();

        RentUserModel.findOne({username: username, password: password}, function (err, user) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }
};