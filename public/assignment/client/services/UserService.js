(function(){
    'use strict';
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($http, $q) {

        var api = {
            findAllUsers: findAllUsers,
            findUserById: findUserById,
            findUserByUsername: findUserByUsername,
            findUserByUsernameAndPassword: findUserByUsernameAndPassword,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        };
        return api;

        function uniqueId() {
          function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
          }
          return s4();
        }


        function createUser(userObj) {
            var deferred = $q.defer();
            userObj.id = uniqueId();
            $http.post("/api/assignment/user/", userObj)
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function findAllUsers() {
            var deferred = $q.defer();
            $http.get("/api/assignment/user/")
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function findUserById(userId) {
            var deferred = $q.defer();
            $http.get("/api/assignment/user/"+userId)
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function findUserByUsernameAndPassword(username, password) {
            var deferred = $q.defer();
            $http.get("/api/assignment/user/username=" + username + "&password=" + password)//query form the client side
                .success(function(response){
                    console.log("inside client side" + response);
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function findUserByUsername(username) {
            var deferred = $q.defer();
            $http.get("/api/assignment/user/username=" + username)
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function deleteUserById(userId) {
            var deferred = $q.defer();
            $http.delete("/api/assignment/user/" + userId)
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;

        }

        function updateUser(userId, userObj) {
            var deferred = $q.defer();

            $http.put("/api/assignment/user/"+userId, userObj)
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

    }
})();