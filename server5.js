var express = require('express');
var app = express();

//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/WhiteBoardDB');//connect to database

//app.get('/someURL',function(req,res){
//    res.send('hello world')
//});

//app.get('/someURL',function(req,res){
//    var array=[{title:"Java"},{title:'C#'}];
//    res.send(array);
//});

app.use(express.static(__dirname + '/public4'));//host the static content in public directory

app.listen(3000);
