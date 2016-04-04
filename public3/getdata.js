var app = angular.module("HelloWorldApp", []);

app.controller("HelloWorldController", HelloWorldController);

function HelloWorldController($scope,$http) {
    $http.get("orders.json")
        .then(function(response) {
            $scope.hello = response.data;
        });
}

//$(function($scope){
//    $.getJSON('mockdata.json',function(data){
//        console.log('success');
//        $.each(data.employees,function(i,emp){
//            //$('ul').append('<li>'+emp.firstName+' '+emp.lastName+'</li>');
//            $('tr').append('<td>'+emp.firstName+'</td>');
//        });
//    }).error(function(){
//        console.log('error');
//    });
//});
