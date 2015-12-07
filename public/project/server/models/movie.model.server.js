var myLikes=[];
module.exports=function(){
    var api={
        likes:likes,
        getLikes:getLikes,
        rate:rate,
        dislike:dislike,
        comment:comment
    };
    return api;
    function likes(idIMDB,movie){
        myLikes.push({
            "idIMDB":idIMDB,
            "title":movie.title,
            "poster":movie.urlPoster
        });
    }
    function getLikes(){
        return myLikes;
    }

    function rate(){

    }

    function dislike(){

    }
    function comment(){

    }

}
//"use strict";
//var mock=require(mock.json.js);
//module.exports=function(){
//    var api={
//        findAllUsers:findAllUsers,
//        findUserById:findUserById,
//        findAllMoviesForUser:findAllMoviesForUser,
//        userLikesMovie:userLikesMovie
//    };
//    return api;
//
//    function findAllUsers(){
//        return mock;
//    }
//    function findUserById(id){
//        for(var i=0;i<mock.length;i++){
//            if(mock[i].id==id){
//                return mock[i];
//            }
//        }
//    }
//
//    function findAllMoviesForUser(){
//
//    }
//
//    function userLikesMovie(userId,idIMDB){
//        var user=findUserById(userId);
//        user.likes.push({'idIMDB':idIMDB});
//    }
//};
//
//
