(function(){
	angular
		.module("WhiteBoardApp")
		.factory("CourseService",courseService);
		
		function courseService($http)
		{
			var service={
				createCourse: createCourse,
				readAllCourses:readAllCourses,
				readOneCourseById:readOneCourseById,
				deleteCourseById:deleteCourseById,
				updateCourseById:updateCourseById
			};
			return service;
			
			function createCourse(course,callback)
			{
				$http
					.post("/rest/course",course)
					.success(callback);
			}
								
			function readAllCourses(callback)
			{
				$http
					.get("/rest/course")
					.success(callback);			
			}
			
			function readOneCourseById(id, callback)
			{
				$http
					.get("/rest/course/"+id)
					.success(callback);
			}
			
			function deleteCourseById(id, callback)
			{
				$http
					.delete("/rest/course/"+id)
					.success(callback);
			}
			
			function updateCourseById(id,course,callback)
			{
				$http
					.put("/rest/course/"+id,course)//course =the data we want to parse
					.success(callback);
			}
			
		}
})();