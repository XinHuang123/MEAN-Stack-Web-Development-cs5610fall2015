"use strict";

(function(){
    angular
        .module("Restaurant")
        .factory("UserService", UserService);

    function UserService($http, $q) {
        var service = {
            Create: createUser,
            Update: updateUser,
            Delete: deleteUser,
            FindAll: findAllUsers,
            FindByAuth: findUserByAuth
        };

        return service;

        function createUser(user) {
            var deferred = $q.defer();
            var url = '/api/project/user';

            $http.post(url, user)
                .success(function(response){
                    deferred.resolve(response);
                }).error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function updateUser(userId, user) {
            var deferred = $q.defer();
            var url = '/api/project/user/' + userId;

            $http.put(url, user)
                .success(function(response){
                    deferred.resolve(response);
                }).error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function deleteUser(userId) {
            var deferred = $q.defer();
            var url = '/api/project/user/' + userId;

            $http.delete(url, user)
                .success(function(response){
                    deferred.resolve(response);
                }).error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function findAllUsers() {
            var deferred = $q.defer();
            var url = '/api/project/user/';

            $http.get(url)
                .success(function(response){
                    deferred.resolve(response);
                }).error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function findUserByAuth(userName, password) {
            var deferred = $q.defer();
            var url = '/api/project/user?username=' + userName + "&password=" + password;

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
