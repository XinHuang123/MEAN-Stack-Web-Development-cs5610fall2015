"use strict";
module.exports = function (app, model) {
    app.post("/api/project/user", createUser);
    app.get("/api/project/user", findUsers);
    app.get("/api/project/user/:id", findUserById);
    app.put("/api/project/user/:id", updateUser);
    app.delete("/api/project/user/:id", deleteUser);
    app.get("/api/project/user/username=:username", findUserByUsername);


    function findUserByUsername(req,res){
        console.log("Inside server side findUserByUsername");
        var username=req.params.username;
        model
            .findUserByUsername(username)
            .then(function(user){
               res.json(user);
            });
    }

    function createUser(req, res) {
        var user = req.body;

        model.Create(user)
            .then(function(newUser) {
                res.json(newUser);
            });
    }

    function findUsers(req, res) {
        var username = req.query.username;
        var password = req.query.password;

        if (username == null && password == null) {
            model.FindAll()
                .then(function (users) {
                    res.json(users);
                });
        } else if (username != null && password == null) {
            model.FindByUserName(username)
                .then(function (user) {
                    res.json(user);
                });
        } else {
            model.FindByAuth(username, password)
                .then(function (user) {
                    res.json(user);
                });
        }
    }

    function findUserById(req, res) {
        var id = req.params.id;

        model.FindById(id)
            .then(function (user) {
                res.json(user);
            });
    }

    //function updateUser(req, res) {
    //    var user = req.body;
    //    var id = req.params.id;
    //
    //    model.Update(id, user)
    //        .then(function (updatedUser) {
    //            res.json(updatedUser);
    //        });
    //}
    function updateUser(req, res) {
        console.log("Inside server side updateUser");
        var userId = req.params.id;
        var userObj = req.body;
        model
            .updateUser(userId, userObj)
            .then(function(user){
                console.log("Updated user: " + user);
                res.json(user);
            });
    }


    function deleteUser(req, res) {
        console.log("Inside server side deleteUser");
        var userId = req.params.id;
        model
            .deleteUser(userId)
            .then(function(users){
                res.json(users);
            });
    }

};