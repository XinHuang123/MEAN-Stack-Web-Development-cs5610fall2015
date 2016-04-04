'use strict';
var app=angular.module("NeuroSkyApp",[]);
app.controller("ProductController", ProductController);

function ProductController($scope,$http){
//test1: retrieve data from API
//    $(init);
//    function init(){
//        $.ajax({
//            url:"https://neurosky.myshopify.com/admin/orders.json",
//            dataType:"jsonp",
//            success:function(response){
//                console.log(response);
//                alert("hello");
//            }
//        })
//    }

//test2: retrieve data from API
    var url="https://neurosky.myshopify.com/admin/orders.json?format=JSONP&callback=JSON_CALLBACK";
    $http.jsonp(url)
        .success(function(response) {
            alert("success");
            })
        .error(function(){
            alert("error");
            });
    //change the header
    $http.defaults.headers.common.Authorization = 'X-Shopify-Access-Token: b4c180211ff41cb74ec895e0c1c26125';

    $http.get("/json/orders (8).json")
    //$http.get("orders_last7days.json")//start:2015-02-01 end:start:2015-03-01
        //var url="https://neurosky.myshopify.com/admin/orders.json?format=JSONP&callback=JSON_CALLBACK";
        //$http.jsonp(url)
        .then(function(response) {

            $scope.search=function(start,end){
                console.log(start);
                $scope.startTime=start;
                $scope.endTime=end;
                console.log(end);
                var timedata=response.data;
            }


            //merge the products which have same title
            var data=response.data;
            var newData = {line_items:[]};

            for (var i = 0; i < data.orders.length;i++){
                //console.log(data.orders[i].line_items.length);
                for(var j=0;j< data.orders[i].line_items.length;j++){
                    var resindex = newDataContains(data.orders[i].line_items[j].title);
                    console.log(resindex);
                    //console.log(data.orders[i].line_items(j).length);
                    if (resindex == -1){
                        console.log("Adding new data");
                        //newData.line_items[m].push({line_items:[]});
                        newData.line_items.push({title: data.orders[i].line_items[j].title,
                                                quantity: data.orders[i].line_items[j].quantity,
                                                price:data.orders[i].line_items[j].price});
                        console.log(newData.line_items);
                    }
                    else {
                        console.log("Data already exists increasing quantity");
                        newData.line_items[resindex].quantity += data.orders[i].line_items[j].quantity;
                    }
                }
            }

            function newDataContains(title){
                for (var a=0; a < newData.line_items.length; a++){
                    if (JSON.stringify(newData.line_items[a].title) == JSON.stringify(title)) {
                        return a;
                    }
                }
                return -1;
            }
            console.log(newData);


            var initdata=newData.line_items;
            //default order by the length of the title
            initdata.sort(function(a,b){
                if(a.title.length> b.title.length)return 1;
                if(a.title.length< b.title.length)return -1;
                return 0;
            });

            /*
            * ng-click order the item by Price, Quantity, Total Amount
            */
            $scope.Price=function(count){
                console.log("click price");
                //sort the order by price
                var res_price=initdata;
                if(count%2==0){
                    res_price.sort(function(a,b) {
                        if (b.price < a.price)return -1;
                        if (b.price > a.price)return 1;
                        return 0;
                    });
                }
                else{
                    res_price.sort(function(a,b) {
                        if (a.price > b.price)return 1;
                        if (a.price < b.price)return -1;
                        return 0;
                    });
                }

            }

            $scope.Quantity=function(count){
                console.log(count);
                console.log("click quantity");
                //sort the order by quantity
                var res_quantity=initdata;
                if(count%2==0){
                    res_quantity.sort(function(a,b) {
                        if (a.quantity > b.quantity)return -1;
                        if (a.quantity < b.quantity)return 1;
                        return 0;
                    });
                }
                else{
                    res_quantity.sort(function(a,b) {
                        if (a.quantity > b.quantity)return 1;
                        if (a.quantity < b.quantity)return -1;
                        return 0;
                    });
                }
            }


            $scope.TotalAmount=function(count){
                console.log("click total amount");
                //sort the order by total amount
                var res_totalAmount=initdata;
                if(count%2==0){
                    res_totalAmount.sort(function(a,b) {
                        if (a.quantity* a.price > b.quantity* b.price)return -1;
                        if (a.quantity* a.price < b.quantity* b.price)return 1;
                        return 0;
                    });
                }
                else{
                    res_totalAmount.sort(function(a,b) {
                        if (a.quantity* a.price > b.quantity* b.price)return 1;
                        if (a.quantity* a.price < b.quantity* b.price)return -1;
                        return 0;
                    });
                }
            }


            //$scope.result=newData.line_items;
            $scope.result=initdata;


    });


}

