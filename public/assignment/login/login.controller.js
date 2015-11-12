"use strict";
(function(){
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $rootScope, $location, UserService){
        $scope.login = login;
        $scope.$location = $location;

        function login(){
            UserService.findUserByUsernameAndPassword(
                $scope.username,
                $scope.password,
                //callback
                function(user){
                    if(user != null){
                        $rootScope.currentUser = user;
                        $location.path('/profile');
                    }else{
                        $location.path('/register');
                    }
                })
        }
        //scope是html和单个controller之间的桥梁，数据绑定就靠他了。rootscope是各个controller中scope的桥梁。用rootscope定义的值，可以在各个controller中使用
    }
})();