//server side
"use strict";
var q = require("q");

module.exports = function(mongoose,db) {

    var RestaurantSchema = require("./restaurant.schema.js")(mongoose);
    var RestaurantModel = mongoose.model("RestaurantModel", RestaurantSchema);

    var api = {

        findRestaurantByName : findRestaurantByName,
        findRestaurantByLocation : findRestaurantByLocation,
        findRestaurantByRate : findRestaurantByRate,
        findAllRestaurant: findAllRestaurant,
    };
    return api;

    function findRestaurantByName(name) {
        console.log("inside restaurant.model.js findRestaurantByName");
        var deferred = q.defer();
        RestaurantModel.find({name : name}, function(err, restaurant){
            deferred.resolve(restaurant);
        });
        return deferred.promise;
    }

    function findRestaurantByLocation(location) {
        console.log("inside restaurant.model.js findRestaurantByLocation");
        var deferred = q.defer();
        RestaurantModel.find({location : location}, function(err, restaurant){
            deferred.resolve(restaurant);
        });
        return deferred.promise;
    }

    function findRestaurantByRate(rate) {
        console.log("inside restaurant.model.js findRestaurantByRate");
        var deferred = q.defer();
        RestaurantModel.find({rate : rate}, function(err, restaurant){
            deferred.resolve(restaurant);
        });
        return deferred.promise;
    }

    function findAllRestaurant() {
        console.log("inside restaurant.model.js findAllRestaurant");
        var deferred = q.defer();
        RestaurantModel.find(function(err, restaurants){
            deferred.resolve(restaurants);
        });
        return deferred.promise;
    }


};


