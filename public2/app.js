(function(){
	angular
			.module("WhiteBoardApp",[])
			.controller("CourseController",courseController);
			
	function courseController($scope,$http,CourseService){//$http query data from URL
		
		CourseService.readAllCourses(renderCourses);				

		$scope.removeCourse=removeCourse;

		function removeCourse(index)
		{
			CourseService.deleteCourseById(index,renderCourses);
		}
		
		function renderCourses(response)
		{
			$scope.courses=response;
		}
		
		$scope.updateCourse=updateCourse;
		function updateCourse(course)
		{
			CourseService.updateCourseById($scope.selectedCourseIndex,course,renderCourses);
		}
		
		$scope.createCourse=createCourse;
		function createCourse(course)
		{
			CourseService.createCourse(course,renderCourses);
		}

		$scope.selectCourse=selectCourse;
		function selectCourse(index)
		{
			$scope.selectedCourseIndex=index;
			CourseService.readOneCourseById(index,function(response)
			{
				$scope.course=response;
			});
		}
	}
})();


