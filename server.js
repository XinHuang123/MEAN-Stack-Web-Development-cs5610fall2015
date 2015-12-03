"use strict";
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var passport = require('passport');
// var cookieParser = require('cookie-parser');
// var GoogleStrategy = require('passport-google-oauth');
var mongoose = require('mongoose');
//var db = mongoose.connect('mongodb://localhost/cs5610');
var connectionString = 'mongodb://127.0.0.1:27017/cs5610';

if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}

var db = mongoose.connect(connectionString);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

require("./public/project/server/app.js")(app,db,mongoose);
require("./public/assignment/server/app.js")(app,db,mongoose);
process.on('uncaughtException', function (err) {
    console.log(err);
});

app.listen(port, ipaddress);