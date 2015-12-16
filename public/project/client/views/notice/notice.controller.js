"use strict";
(function(){
    angular
        .module("MovieApp")
        .controller("NoticeController", NoticeController);

    function NoticeController() {
        var model = this;
        model.notice1="When a user likes a movie or follows other users, we need to refresh and relogin to check the like list or following result.";
        model.notice2= "In the friend page, the update button somehow doesn`t work remotely, but it works locally.";
    }
})();




