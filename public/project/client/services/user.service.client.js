"use strict";
(function(){
    angular
        .module("MovieApp")
        .factory("UserService", UserService);

    function UserService($http, $q) {
        var service = {
            findUserByUsername:findUserByUsername,
            createUser: createUser,
            deleteUserById: deleteUserById,
            findAllUsers: findAllUsers,
            findUserByAuth: findUserByAuth,
            findUserById:findUserById,
            updateUser: updateUser
        };
        return service;


        function findUserByUsername(username){
            var deferred = $q.defer();

            $http.get("/api/project/user/username=" + username)
                .success(function(user){
                    deferred.resolve(user);
                });
            return deferred.promise;
        }

        function createUser(user) {
            var deferred = $q.defer();

            $http.post("/api/project/user", user)
                .success(function(response){
                    deferred.resolve(response);
                }).error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function deleteUserById(userId) {
            var deferred = $q.defer();

            $http.delete("/api/project/user/" + userId)
                .success(function(users){
                    deferred.resolve(users);
                });

            return deferred.promise;

        }

        function findAllUsers() {
            var deferred = $q.defer();

            $http.get("/api/project/user/")
                .success(function(response){
                    deferred.resolve(response);
                }).error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function findUserById(userId) {
            var deferred = $q.defer();

            $http.get("/api/project/user/"+userId)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }

        function findUserByAuth(userName, password) {
            var deferred = $q.defer();

            $http.get("/api/project/user?username=" + userName + "&password=" + password)
                .success(function(response){
                    deferred.resolve(response);
                }).error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function updateUser(userId, userObj) {
            var deferred = $q.defer();

            $http.put("/api/project/user/"+userId, userObj)
                .success(function(user){
                    deferred.resolve(user);
                });

            return deferred.promise;
        }


    }
})();
