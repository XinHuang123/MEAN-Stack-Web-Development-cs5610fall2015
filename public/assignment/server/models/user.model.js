"use strict";

var users=require("./user.mock.json");
var uuid = require('node-uuid');

module.exports=function(app){
    var api={
        Create: Create,
        FindAll: FindAll,
        FindById: FindById,
        FindUserByUsername: FindUserByUsername,
        FindUserByCredentials: FindUserByCredentials,
        Update: Update,
        Delete: Delete
    };
    return api;

    function Create(user){
        user.id=uuid.v4();// Generate a v4 (random) id
        users.push(user);
        return user;
    }

    function FindAll(){
        return users;
    }

    function FindUserByUsername(username) {
        return users.find(function(element, index, array) {
            return element.username === username;
        });
    }

    function FindUserByCredentials(credentials){
        return users.find(function(element,index,array){
            return element.username==credentials.username&&item.password==credentials.password;
        });
    }


    function Update(id,newUser){
        var user=FindById(id);
        for(var k in newUser){
            user[k]=newUser[k];
        }
        return user;
    }

    function Delete(id){
        var index=FindById(id);
        if(index!=-1){
            users.splice(index,1);
        }
        return users;

    }

    function FindById(id) {
        return users.find(function(element, index, array) {
            return element.id === id;
        });
    }



}