"use strict";

(function() {
    angular
        .module("MovieApp")
        .controller("SearchController", SearchController);

    function SearchController($scope,SearchService) {
        var model=this;
        model.search=search;
        model.like=like;

        function search(title){
            SearchService.searchMovieByTitle(title).then(function(response){
                model.response=response;
            });
        }

        function like(movie){
            SearchService.likes(movie);
        }

        //$scope.searchMovie=searchMovie;
        //$scope.likeMovie=likeMovie;
        //
        //
        //function searchMovie(title){
        //    SearchService.searchMovieByTitle(title,function(response){
        //        $scope.response=response;
        //    });
        //
        //}
        //
        //function likeMovie(idIMDB){
        //    SearchService.likeMovie(idIMDB,function(response){
        //
        //    });
        //}



    }
})();
