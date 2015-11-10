var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public2'));//host the static content in public directory

//bodyparser for update and create
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(multer());//for parsing multipart/form-data


var courses=[
			{title:"Java 101", seats: 23, start: new Date()},
			{title:"C# 101", seats: 34, start: new Date(2015,9,4)},
			{title:"Node.js 101", seats: 45, start: new Date(2016,1,15)},			
		];
// /rest/ can distinguish this data from other type of data
//readAllCourses
app.get("/rest/course",function(req,res){
	
		res.send(courses);
});
//readOneCourseById
app.get("/rest/course/:id", function(req,res)
{
	var index=req.params["id"];
	res.send(courses[index]);
});

//deleteCourseById
app.delete("/rest/course/:id", function(req,res)
{
	var index=req.params["id"];
	courses.splice(index,1);
	res.send(courses);
});

//updateCourseById
app.put("/rest/course/:id",function(req,res)
{
	var index=req.params["id"];
	var course=req.body;
	courses[index].title=course.title;
	courses[index].seats=course.seats;
	courses[index].start=course.start;
	res.send(courses);
});

//createCourse
app.post("/rest/course",function(req,res)
{
	var course=req.body;
	courses.push(course);
	res.send(courses);
});

app.listen(3000);