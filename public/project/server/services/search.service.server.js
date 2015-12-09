"use strict";
module.exports=function(app,model){
    app.post("/api/project//movies/likes/:idIMDB/:currentuserid",likes);
    app.get("/api/project//movies/likes",getlikes);

    function likes(req,res){
        var idIMDB=req.params.idIMDB;
        var currentuserid=req.params.currentuserid;
        var movie=req.body;
        console.log("likes"+idIMDB+"currentuserid"+currentuserid);
        model.likes(idIMDB,movie,currentuserid);
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
