"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');
var mongoose = require('mongoose');
var localStrategy = require('passport-local').Strategy;
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();
var connectionString = 'mongodb://127.0.0.1:27017/cs5610';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({ secret: 'this is the secret', resave: false, saveUninitialized: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/public'));

if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
    connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
        process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
        process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
        process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
        process.env.OPENSHIFT_APP_NAME;
}

var db = mongoose.connect(connectionString);
require("./public/assignment/server/app.js")(app, mongoose, db);
//require("./public/project/server/app.js")(app, mongoose, db, passport, localStrategy);
require("./public/project/server/app.js")(app, mongoose, db, passport, localStrategy);
require("./public/project/server/services/search.service.server.js")(app);

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.listen(port, ipaddress);

