"use strict";
module.exports=function(app,model){
    app.post("/api/project/movies/likes/:idIMDB/:currentuserid",likes);
    app.post("/api/project/user/follow/:username/:currentuserid",follow);
    app.get("/api/project/movies/likes",getlikes);

    function likes(req,res){
        var idIMDB=req.params.idIMDB;
        var currentuserid=req.params.currentuserid;
        var movie=req.body;
        console.log("likes"+idIMDB+"currentuserid"+currentuserid);
        model.likes(idIMDB,movie,currentuserid);
    }

    function follow(req,res){
        var username=req.params.username;
        var currentuserid=req.params.currentuserid;
        var user=req.body;
        model.follow(username,user,currentuserid);
    }


    function getlikes(req,res){
        ////res.json(model.getLikes());
        //model
        //    .getlikes()
        //    .then(function(likes){
        //       res.json(likes);
        //    });

    }


}
