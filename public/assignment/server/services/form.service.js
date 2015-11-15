"use strict";
var uuid = require('node-uuid');

module.exports=function(app, formModel){

    app.get('/api/assignment/user/:userId/form', function(req, res) {
        res.json(formModel.FindFormByUserId(req.params.userId));
    });


    app.get('/api/assignment/form/:formId', function(req, res) {
        res.json(formModel.FindById(req.params.formId));
    });


    app.delete('/api/assignment/form/:formId', function(req, res){
        res.json(formModel.Delete(req.params.formId));
    });


    app.post('/api/assignment/user/:userId/form', function(req, res) {
        var newForm = req.body;
        newForm.id = uuid.v4();
        newForm.userId = Number(req.params.userId);

        res.json(formModel.Create(newForm));
    });


    app.put('/api/assignment/form/:formId', function(req, res) {
        res.json(formModel.Update(req.params.formId, req.body));
    });

};

