"use strict";
var model=require("../models/movie.model.server.js")();
module.exports=function(app){
    app.post("/api/project//movies/likes/:idIMDB",likes);
    app.get("/api/project//movies/likes",getlikes);

    function likes(req,res){
        var idIMDB=req.params.idIMDB;
        var movie=req.body;
        console.log("likes"+idIMDB);
        model.likes(idIMDB,movie );
    }
    function getlikes(req,res){
        res.json(model.getLikes());

    }
}
