"use strict";

var app = angular.module("Restaurant", ["ngRoute"]);

app.directive("navigation", function () {
    return {
        restrict: 'E',
        templateUrl: 'views/header/header.view.html',
        controller: 'HeaderController'
    }
});

app.directive("pageFooter", function () {
    return {
        restrict: 'E',
        templateUrl: 'views/footer/footer.view.html'
    }
});
