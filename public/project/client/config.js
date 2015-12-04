"use strict";

(function () {
    angular
        .module("Restaurant")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider.when("/home", {
            templateUrl: "views/home/home.view.html"
        })
        .when("/register", {
            templateUrl: "views/register/register.view.html",
            controller: "RegisterController"
        })
        .when("/login", {
            templateUrl: "views/login/login.view.html",
            controller: "LoginController"
        })
        .when("/profile", {
            templateUrl: "views/profile/profile.view.html",
            controller: "ProfileController"
        })
        .when("/search", {
            templateUrl: "views/search/search.view.html",
            controller: "SearchController"
        })
        .when("/addListing", {
            templateUrl: "views/addListing/addlisting.view.html",
            controller: "AddListingController"
        })
        .when("/myListing", {
            templateUrl: "views/myListing/mylisting.view.html",
            controller: "MyListingController"
        })
        .when("/result", {
            templateUrl: "views/result/result.view.html",
            controller: "ResultController"
        })
        .otherwise({
           redirectTo: "/home"
        });
    }
})();