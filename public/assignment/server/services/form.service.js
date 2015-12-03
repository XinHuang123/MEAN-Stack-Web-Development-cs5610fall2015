//var model = require("../models/form.model.js")();

module.exports = function(app, model) {
    app.get("/api/assignment/form", findAllForms);
    app.put("/api/assignment/form/:formId", updateForm);
    app.get("/api/assignment/user/:userId/form", findAllFormsForUser);
    app.post("/api/assignment/user/:userId/form", createNewForm);
    app.delete("/api/assignment/form/:formId", deleteForm);
    app.get("/api/assignment/form/:formId", findFormById);

    function createNewForm(req, res) {
        console.log("Inside server side createNewForm - forms");
        var form = req.body;
        model
            .createNewForm(form)
            .then(function(forms){
                res.json(forms);
            });
    }

    function findAllFormsForUser(req, res){
        console.log("Inside server side findAllFormsForUser - forms");
        var userId = req.params.userId;
        model
            .findAllFormsForUser(userId)
            .then(function(forms){
                res.json(forms);
            });
    }

    function findFormById(req, res){
        console.log("Inside server side findAllFormsForUser - forms");
        var formId = req.params.formId;
        model
            .findFormById(formId)
            .then(function(form){
                res.json(form);
            });
    }

    function findAllForms(req, res){
        console.log("Inside server side findAllForms - forms");
        model
            .findAllForms()
            .then(function(user){
                res.json(user);
            });
    }

    function updateForm(req, res) {
    console.log("Inside server side updateForm - forms");
    var formId = req.params.formId;
    console.log("Inside update form.service.js: " + formId);
    var formObj = req.body;
        model
            .updateForm(formId, formObj)
            .then(function(form){
                res.json(form);
            });
    }

    function deleteForm(req, res) {
    console.log("Inside server side deleteForm - forms");
    var formId = req.params.formId;
    console.log(formId);
        model
            .deleteForm(formId)
            .then(function(forms){
                res.json(forms);
            });
    }

};