//var model = require("../models/user.model.js")();

module.exports = function(app, model) {
    app.get("/api/assignment/user/username=:username&password=:password", findUserByUsernameAndPassword);
    app.get("/api/assignment/user", findAllUsers);
    app.get("/api/assignment/user/:id", findUserById);
    app.post("/api/assignment/user", addNewUser);
    app.put("/api/assignment/user/:id", updateUser);
    app.delete("/api/assignment/user/:id", deleteUser);
    app.get("/api/assignment/user/username=:username", findUserByUsername);

    function findAllUsers(req, res) {
    console.log("Inside findAllUsers!");
        model
            .findAllUsers()
            .then(function(users){
                res.json(users);
            });
    }

    function findUserByUsername(req, res) {
        console.log("Inside server side findUserByUsername");
        var username = req.params.username;
        model
            .findUserByUsername(username)
            .then(function(user){
                res.json(user);
            });
    }

    function findUserByUsernameAndPassword(req, res) {
    console.log("Inside server side findUserByUsernameAndPassword");
        var username = req.params.username;
        var pwd = req.params.password;
        var credentials = {
            username: username,
            password: pwd
        };
        model
            .findUserByCredentials(credentials)
            .then(function(user){
                console.log(user);
                res.json(user);
            });
    }

    function addNewUser(req, res) {
        console.log("Inside server side addNewUser");
        var user = req.body;
        model
            .addNewUser(user)
            .then(function(users){
                res.json(users);
            });
    }

    function findUserById(req, res){
        console.log("Inside server side findUserById");
        var userId = req.params.id;
        model
            .findUserById(userId)
            .then(function(user){
                res.json(user);
            });
    }

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