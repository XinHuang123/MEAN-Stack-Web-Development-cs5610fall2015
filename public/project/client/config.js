"use strict";

(function () {
    angular
        .module("MovieApp")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider.when("/home", {
            templateUrl: "views/home/home.view.html"
        })
        .when("/register", {
            templateUrl: "views/register/register.view.html",
            controller: "RegisterController",
            controllerAs: "model"
        })
        .when("/login", {
            templateUrl: "views/login/login.view.html",
            controller: "LoginController",
            controllerAs: "model"
        })
        .when("/profile", {
            templateUrl: "views/profile/profile.view.html",
            controller: "ProfileController",
            controllerAs: "model"
        })
        .when("/search", {
            templateUrl: "views/search/search.view.html",
            controller: "SearchController",
            controllerAs: "model"
        })
        .when("/addListing", {
            templateUrl: "views/addListing/addlisting.view.html",
            controller: "AddListingController",
            controllerAs: "model"
        })
        .when("/myListing", {
            templateUrl: "views/myListing/mylisting.view.html",
            controller: "MyListingController",
            controllerAs: "model"
        })
            .when("/friend", {
                templateUrl: "views/friend/friend.view.html",
                controller: "FriendController",
                controllerAs: "model"
            })
        .when("/result/:idIMDB", {
            templateUrl: "views/result/result.view.html",
            controller: "ResultController",
            controllerAs: "model"
        })
        .otherwise({
           redirectTo: "/home"
        });
    }
})();