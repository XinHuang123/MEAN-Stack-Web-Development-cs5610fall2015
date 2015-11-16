var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//require("./experiments/nodejs/expressjs/server.js")(app);
//require("./public/angularjsClient/server.js")(app);
//require("./public/angularjsClient/jsonp/server/MovieService.js")(app);
//require("./public/movies/server/app.js")(app);
require("./public/assignment/server/app.js")(app);



app.listen(port, ipaddress);


