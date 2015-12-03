"use strict";
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');

var ipaddress 	= process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port 		= process.env.OPENSHIFT_NODEJS_PORT || 3000;
var mongoURL    = process.env.OPENSHIFT_MONGODB_DB_URL || 'mongodb://localhost/cs5610';

//var connectionString = 'mongodb://127.0.0.1:27017/cs5610';
//
//if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
//    connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
//        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
//        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
//        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
//        process.env.OPENSHIFT_APP_NAME;
//}
var db = mongoose.connect(mongoURL);

app.use(express.static(__dirname + '/public'));//host the static content in public directory
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer()); //for parsing multipart/form-data

require("./public/assignment/server/app.js")(app, db, mongoose);
//require("./public/project/server/app.js")(app, db, mongoose);
process.on('uncaughtException', function (err) {
    console.log(err);
});
app.listen(port, ipaddress);