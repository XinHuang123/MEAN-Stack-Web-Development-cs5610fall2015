"use strict";

module.exports = function(mongoose) {
    var UserSchema = new mongoose.Schema({
        firstname: String,
        lastname: String,
        username: String,
        password: String,
        email: String
    }, {collection: 'cs5610.project.user'});

    return UserSchema;
};

