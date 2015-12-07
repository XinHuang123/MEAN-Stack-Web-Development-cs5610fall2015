"use strict";
module.exports=function(app){
    app.post("/api/project/user/:userId/movie/:idIMDB/like",function(req,res){
        var userId=req.params.userId;
        var idIMDB=req.params.idIMDB;
        console.log(userId);
        console.log(idIMDB);
    });
}
