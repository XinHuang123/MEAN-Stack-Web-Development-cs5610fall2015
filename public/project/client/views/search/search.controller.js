"use strict";

(function() {
    angular
        .module("MovieApp")
        .controller("SearchController", SearchController);

    function SearchController(SearchService,$rootScope) {
        var model=this;
        model.search=search;
        model.like=like;

        function search(title){
            SearchService.searchMovieByTitle(title).then(function(response){
                model.response=response;
            });
        }

        function like(movie){
            var currentuserid=$rootScope.currentUser._id;
            SearchService.likes(movie,currentuserid);
        }




    }
})();
