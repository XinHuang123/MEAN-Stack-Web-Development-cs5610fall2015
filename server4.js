var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/WhiteBoardDB');//connect to database

app.use(express.static(__dirname + '/public2'));//host the static content in public directory

app.listen(3000);