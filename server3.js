var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cs5610');//connect to database

var CourseSchema=new mongoose.Schema({
	title:String,
	seats:{type: Number, default:25},
	starts:{type:Date, default:Date.now}
}, {collection:"course"});//to connect directly to course collection

var Course =mongoose.model("Course",CourseSchema);//"Course"is used to connect collection Course
//Course is a reference


function findAll(callback)
{
	Course.find(callback);
}


function findByTitle(title, callback)
{
	Course.find({title:title},callback);	
}


function createCourse(course)
{
	Course.create(course, 
	function(err,results){//this function is used to notify us whether it is successful or not
		console.log(err);
		console.log(results);
	});	
}

//below is used for test
findAll(renderCourses);
function renderCourses(err,resultSet)
{
	//console.log(err);
	//console.log(resultSet);
	for(var r in resultSet)
	{
		var title =resultSet[r].title;
		var seats =resultSet[r].seats;
		console.log([title,seats]);
	}
}


var courses=[
	{title:"Course 1", seats:11},
	{title:"Course 2", seats:22},
	{title:"Course 3", seats:33},
	{title:"Course 4", seats:44},
];



//database to a restful manner
app.get('/rest/course', function(req, res){
  findAll(function(err,results)
  {
		  res.json(results);
  })
});
app.listen(3000);

