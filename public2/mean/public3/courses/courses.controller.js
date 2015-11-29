(function(){
	angular
		.module("WhiteBoardApp")
		.controller("CourseController",CourseController);
		
	function CourseController($scope,CourseService)
	{
		//ng-click event handler
		$scope.selectCourse=selectCourse;
		$scope.deleteCourse=deleteCourse;
		$scope.createCourse=createCourse;
		$scope.updateCourse=updateCourse;
		function selectCourse(id)
		{
			CourseService.findCourseById(id,function(course){//the callback needs to return course
				$scope.course=course[0];//cuz we know there`s only one
			});
		}
		function deleteCourse(id)
		{
			CourseService.removeCourseById(id,function(courses){//the courses come from server
				$scope.courses=courses;
			});	
		}
		function createCourse(course)
		{
			CourseService.createCourse(course,function(courses){//courses come from server
				$scope.courses=courses;                         //cuz server sends them back
			});	
		}
		function updateCourse(course)
		{
			CourseService.updateCourseById(course._id,course,function(courses){
				$scope.courses=courses;
			});	
		}
		CourseService.findAllCourses(function(response){
			$scope.courses=response;
		});
	}
})();
