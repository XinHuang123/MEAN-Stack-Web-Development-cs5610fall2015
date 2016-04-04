"use strict";
var app = angular.module("HelloWorldApp", []);

app.controller("HelloWorldController", HelloWorldController);

function HelloWorldController($scope,$) {
    $.ajax({
        url: "mockdata.json",
        dataType: "json",
        success: function(data) {
            console.log(data);
            $scope.hello="Mark";
            $('body').append(data.employees[0].firstName);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log('ERROR', textStatus, errorThrown);
        }
    });
}



//$.ajax({
//    url: "mockdata.json",
//    dataType: "json",
//    success: function(data) {
//        console.log(data);
//        $scope.hello="Mark";
//        $('body').append(data.employees[0].firstName);
//    },
//    error: function(jqXHR, textStatus, errorThrown) {
//        console.log('ERROR', textStatus, errorThrown);
//    }
//});
