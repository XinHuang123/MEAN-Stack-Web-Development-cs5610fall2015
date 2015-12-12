"use strict";
(function() {
    angular
        .module("MovieApp")
        .controller("UserProfileController", UserProfileController);

    function UserProfileController($routeParams) {
        var model = this;
        model.username=$routeParams.username;
        model.firstname=$routeParams.firstname;
        model.lastname=$routeParams.lastname;
        model.email=$routeParams.email;
    }
})();
