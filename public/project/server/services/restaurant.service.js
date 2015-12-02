//server side
'use strict';
module.exports = function(app, model) {
    app.get("/api/project/restaurant/", findAllRestaurant);
    app.get("/api/project/restaurant/name=:name", findRestaurantByName);
    app.get("/api/project/restaurant/location=:location", findRestaurantByLocation);
    app.get("/api/project/restaurant/rate=:rate", findRestaurantByRate);

    function findAllRestaurant(req, res) {
        console.log("server side findAllRestaurant!");
        model
            .findAllRestaurant()
            .then(function(restaurants){
                res.json(restaurants);
            });
    }

    function findRestaurantByName(req, res) {
        console.log("server side findRestaurantByName");
        var name = req.params.name;
        model
            .findRestaurantByName(username)
            .then(function(user){
                res.json(user);
            });
    }

    function findRestaurantByLocation(req, res) {
        console.log("server side findRestaurantByLocation");
        var location = req.params.location;
        model
            .findRestaurantByLocation(location)
            .then(function(location){
                res.json(location);
            });
    }

    function findRestaurantByRate(req, res) {
        console.log("server side findRestaurantByRate");
        var rate = req.params.rate;
        model
            .findRestaurantByRate(rate)
            .then(function(rate){
                res.json(rate);
            });
    }



};
