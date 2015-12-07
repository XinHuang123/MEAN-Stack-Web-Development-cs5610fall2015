"use strict";

(function() {
    angular
        .module("Restaurant")
        .controller("SearchController", SearchController);

    function SearchController($scope,$http,SearchService) {
        //$scope.$location = $location;
        //var url="https://api.yelp.com/v2/search/?location=Boston&limit=1&callback=JSONP_CALLBACK";
        //var url="http://www.myapifilms.com/imdb?title=TITLE&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=5&forceYear=0&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&similarMovies=0&adultSearch=0&callback=JSON_CALLBACK";
        $scope.searchMovie=searchMovie;
        $scope.likeMovie=likeMovie;


        function searchMovie(title){
            SearchService.searchMovieByTitle(title,function(response){
                $scope.response=response;
            });
            //var searchurl=url.replace(/TITLE/g, title);
            //$http.jsonp(searchurl)
            //    .success(function(response){
            //        $scope.response=response;
            //    });
        }

        function likeMovie(idIMDB){
            SearchService.likeMovie(idIMDB,function(response){

            });
        }



    }
})();
