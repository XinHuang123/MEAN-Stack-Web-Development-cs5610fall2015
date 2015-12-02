"use strict";
module.exports = function(mongoose) {
    var RestaurantSchema = mongoose.Schema({
        "Name": String,
        "Location" : String,
        "Rate" : String,
        "userId" : String,
    }, {collection: "cs5610.project.restaurant"});

    return RestaurantSchema;
};
