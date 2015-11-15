"use strict";

module.exports=function(app, userModel){

//creates a new user embedded in the body of the request, and responds with an array of all users
    app.post("/api/assignment/user",function(req,res)
    {
        var newUser=req.body;
        res.json(userModel.Create(newUser));
    });

//responds with an array of all users
    app.get("/api/assignment/user",function(req,res)
    {
        res.json(userModel.FindAll());
    });

//responds with a single user whose id property is equal to the id path parameter
    app.get("/api/assignment/user/:id",function(req,res)
    {
        res.json(userModel.FindById(req.params["id"]));
    });

//responds with a single user whose username property is equal to the username path parameter
/*
    app.get("/api/assignment/user?username=username",function(req,res)
    {
        res.json(model.FindAll());
    });
*/
    //?username=username
    app.get('/api/assignment/user', function(req, res) {
        var username = req.param('username');
        var password = req.param('password');

        if(username == null && password == null) {
            res.json(userModel.FindAll());
        } else if (password == null) {
            res.json(userModel.FindUserByUsername(username));
        } else {
            res.json(userModel.FindUserByCredentials({
                username: username,
                password: password
            }));
        }
    });
//updates an existing user whose id property is equal to the id path parameter.
// The new properties are set to the values in the user object embedded in the HTTP request.
// Responds with an array of all users
    app.put("/api/assignemnt/user/:id",function(req,res)
    {
       res.json(userModel.Update(req.params["id"],req.body));
    });

//removes an existing user whose id property is equal to the id path parameter.
// Responds with an array of all users
    app.delete("/api/assignment/user/:id",function(req,res){
        res.json(userModel.Delete(req.params["id"]));
    });
};