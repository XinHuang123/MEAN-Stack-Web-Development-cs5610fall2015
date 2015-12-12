"use strict";
module.exports=function(mongoose,db){
    var q = require('q');
    var UserSchema = require('./user.schema.server.js')(mongoose);
    var relationModel = db.model('relationModel',UserSchema);


    var api={
        likes:likes,
        getLikes:getLikes,
        rate:rate,
        dislike:dislike,
        comment:comment,
        follow:follow
    };
    return api;

    function follow(username,user,currentuserid){
        var deferred= q.defer();
        relationModel.findById(currentuserid, function (err, updateUser) {
            updateUser.follow.push(user);

            updateUser.save(function (err, updatedUser) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(updatedUser);
                }
            });
        });

    }

    function likes(idIMDB,movie,currentuserid){
        var deferred= q.defer();
        relationModel.findById(currentuserid, function (err, updateUser) {
            updateUser.like.push(movie);

            updateUser.save(function (err, updatedUser) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(updatedUser);
                }
            });
        });

    }

    function dislike(){

    }

    function getLikes(userId){
        //var deferred = q.defer();
        //relationModel.findById(userId, function(err, user){
        //    deferred.resolve(user);
        //});
        //return deferred.promise;
    }

    function rate(){

    }


    function comment(){

    }

}

