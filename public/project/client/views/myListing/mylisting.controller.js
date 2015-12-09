"use strict";

(function() {
    angular
        .module("MovieApp")
        .controller("MyListingController", MyListingController);

    function MyListingController(SearchService,$rootScope) {
        var model=this;
        var user=$rootScope.currentUser;
        model.likes=user.like;

        model.getlike=getlike;

        function getlike(){

        }

    }
})();
