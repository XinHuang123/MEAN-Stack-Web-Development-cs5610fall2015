(function(){
    'use strict';
    angular
        .module("FormBuilderApp")
        .factory("RestaurantService", RestaurantService);

    function RestaurantService($http, $q) {

        var api = {
            findAllRestaurant: findAllRestaurant,
            findRestaurantByName: findRestaurantByName,
            findRestaurantByLocation:findRestaurantByLocation,
            findRestaurantByRate:findRestaurantByRate
        };
        return api;



        function findAllRestaurant() {
            var deferred = $q.defer();
            $http.get("/api/project/restaurant/")
                .success(function(restaurants){
                    deferred.resolve(restaurants);
                });

            return deferred.promise;
        }

        function findRestaurantByName(RestaurantByName) {
            var deferred = $q.defer();
            $http.get("/api/project/restaurant/"+RestaurantByName)
                .success(function(Restaurant){
                    deferred.resolve(Restaurant);
                });
            return deferred.promise;
        }



        function findRestaurantByLocation(location) {
            var deferred = $q.defer();
            $http.get("/api/project/restaurant/username=" + username)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }




    }
})();
