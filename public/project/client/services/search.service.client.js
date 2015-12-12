"use strict";
(function(){
    angular
        .module("MovieApp")
        .factory("SearchService",SearchService);

    function SearchService($http,$q){
        var service={
            searchMovieByTitle:searchMovieByTitle,
            likes:likes,
            getlike:getlike,
            follow:follow
        };
        return service;


        function searchMovieByTitle(title){
            var deferred=$q.defer();
            var url="http://www.myapifilms.com/imdb?title=TITLE&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=5&forceYear=0&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&similarMovies=0&adultSearch=0&callback=JSON_CALLBACK";

            url=url.replace("TITLE", title);
            $http.jsonp(url)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function likes(movie,currentuserid){
            var deferred=$q.defer();
            $http.post("/api/project/movies/likes/"+movie.idIMDB+"/"+ currentuserid,movie)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function follow(user,currentuserid){
            var deferred=$q.defer();
            $http.post("/api/project/user/follow/"+user.username+"/"+ currentuserid,user)
                .success(function(response){
                    deferred.resolve(response);
                });
            return deferred.promise;
        }

        function getlike() {
            var deferred = $q.defer();
            var url = "/api/project/movies/likes";

            $http.get(url)
                .success(function(response){
                    deferred.resolve(response);
                }).error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }


    }
})();
