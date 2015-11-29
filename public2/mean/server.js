var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer());//for parsing multipart/form-data


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/WhiteBoardDB');//connect to database

app.use(express.static(__dirname + '/public3'));//host the static content in public directory


var CourseSchema=new mongoose.Schema({
	title:String,
	seats:{type:Number, default:25},
	starts:{type:Date, default:Date.now}
},{collection:"course"});
//connect directly to course database

var Course=mongoose.model("Course",CourseSchema);
//now we can use Course as the api	
//"Course"is used to connect collection Course

//get data from database
app.get("/rest/course",function(req,res){//receive the get command
	Course.find(function(err,data){//this is mongod language
		res.json(data);//send data as json back to clinet
	});
});
//get course by id
app.get("/rest/course/:id",function(req,res){
	Course.find({_id:req.params.id},
	function(err,data){
		res.json(data);
	});
});
//delete
app.delete("/rest/course/:id",function(req,res){
	Course.remove({_id:req.params.id},function(err,result){
		Course.find(function(err,data){		
			res.json(data);
		});		
	});
});
//create
app.post("/rest/course",function(req,res){
	var course=req.body;
	Course.create(course,function(err,data){
		Course.find(function(err,data){	//retrieve all the data	
			res.json(data);
		});
	});
});
//update
app.put("/rest/course/:id",function(req,res){
	var course=req.body;
	Course.findOneAndUpdate({_id:req.params.id},
	{title:course.title,seats:course.seats,starts:course.starts},
	function(err,data){
		Course.find(function(err,data){	//retrieve all the data	
			res.json(data);
		});
	});		
});

app.listen(3000);