"use strict";
module.exports = function(app, mongoose, db, passport, localStrategy) {
    var userModel = require('./models/user.model.server.js')(mongoose, db, localStrategy);
    require('./services/user.service.server.js')(app, userModel);

    var relationModel = require('./models/movie.model.server.js')(mongoose, db);
    require('./services/search.service.server.js')(app,relationModel);

    //var listingModel = require('./models/listing.model.server.js')(mongoose, db);
    //require('./services/listing.service.server.js')(app, listingModel);


};