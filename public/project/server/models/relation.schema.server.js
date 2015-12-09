"use strict";

module.exports = function(mongoose) {
    var RelationSchema = new mongoose.Schema({
        currentuserid:String,
        like:[]
    }, {collection: 'cs5610.project.relation'});

    return RelationSchema;
};

