//client side
'use strict';
(function(){
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
            $http.get("/api/project/restaurant/name="+RestaurantByName)
                .success(function(Restaurant){
                    deferred.resolve(Restaurant);
                });
            return deferred.promise;
        }



        function findRestaurantByLocation(location) {
            var deferred = $q.defer();
            $http.get("/api/project/restaurant/location=" + location)
                .success(function(location){
                    deferred.resolve(location);
                });

            return deferred.promise;
        }

        function findRestaurantByRate(rate){
            var deferred=$q.defer();
            $http.get("/api/project/restaurant/rate="+rate)
                .success(function(rate){
                deferred.resolve(location);
            });
            return deferred.promise;
        }


    }
})();
