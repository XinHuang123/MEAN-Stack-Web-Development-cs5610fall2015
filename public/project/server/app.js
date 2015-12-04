"use strict";

module.exports = function(app, mongoose, db, passport, localStrategy) {
    var userModel = require('./models/user.model.server.js')(mongoose, db, localStrategy);
    var listingModel = require('./models/listing.model.server.js')(mongoose, db);

    var userService = require('./services/user.service.server.js')(app, userModel);
    var listingService = require('./services/listing.service.server.js')(app, listingModel);
};