(function(){
	angular
		.module("WhiteBoardApp")
		.factory("CourseService",CourseService);
		
		function CourseService($http){
			var service={
				findAllCourses: findAllCourses,
				findCourseById:findCourseById,
				removeCourseById:removeCourseById,
				createCourse:createCourse,
				updateCourseById:updateCourseById
				
			};
			return service;
			
			function findAllCourses(callback)
			{
				$http.get("/rest/course")
				.success(callback 
					//function(response){
					//console.log(response); for test
					//}
				);	
			}
			
			function findCourseById(id,callback){
				$http.get("/rest/course/"+id)
				.success(callback);//in the callback function there`s a repsonse inside it	
			}
			
			function removeCourseById(id,callback){
				$http.delete("/rest/course/"+id)
				.success(callback);
			}
			
			function createCourse(course,callback){
				$http.post("/rest/course",course)
				.success(callback);
			}
			function updateCourseById(id,course,callback){
				$http.put("/rest/course/"+id,course)
				.success(callback);
			}
			
		}
})();