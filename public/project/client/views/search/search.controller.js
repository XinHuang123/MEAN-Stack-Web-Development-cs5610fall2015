'use strict';
(function(){
    angular
        .module("ProjectApp")
        .controller("SearchController", SearchController);

    function SearchController(RestaurantService) {
        var model = this;
        model.seach = search;

        function search(){

        }

    }
})();
