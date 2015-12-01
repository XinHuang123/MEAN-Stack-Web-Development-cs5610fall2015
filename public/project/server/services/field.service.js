//var model = require("../models/form.model.js")();

module.exports = function(app, model) {
    app.post("/api/assignment/form/:formId/field", createNewFieldForFormId);
    app.put("/api/assignment/form/:formId/field/:fieldId", updateFieldForFormId);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteFieldByFormIdAndFieldId);
    app.get("/api/assignment/form/:formId/field/:fieldId", findFieldByFormIdAndFieldId);
    app.get("/api/assignment/form/:formId/field", findAllFieldsForFormId);

    function createNewFieldForFormId(req, res) {
        console.log("Inside server side createNewFieldForFormId - fields");
        var formId = req.params.formId;
        var fieldObj = req.body;
        console.log("In server!!!!!!!!!!! field: ", fieldObj);
        model
            .createNewFieldForFormId(formId, fieldObj)
            .then(function(form){
                res.json(form);
            });
    }

    function findAllFieldsForFormId(req, res){
        console.log("Inside server side findAllFieldsForFormId - fields");
        var formId = req.params.formId;
        model
            .findAllFieldsForFormId(formId)
            .then(function(fields){
                res.json(fields);
            });
    }

    function findFieldByFormIdAndFieldId(req, res){
        console.log("Inside server side findFieldByFormIdAndFieldId - fields");
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        model
            .findFieldByFormIdAndFieldId(fieldId, formId)
            .then(function(field){
                res.json(field);
            });
    }

    function updateFieldForFormId(req, res) {
    console.log("Inside server side updateForm - forms");
    var formId = req.params.formId;
    var fieldId = req.params.fieldId;
    var fieldObj = req.body;
        model
            .updateFieldForFormId(fieldId, formId, fieldObj)
            .then(function(form){
                res.json(form);
            });
    }

    function deleteFieldByFormIdAndFieldId(req, res) {
    console.log("Inside server side deleteForm - forms");
    var formId = req.params.formId;
    var fieldId = req.params.fieldId;
        model
            .deleteFieldByFormIdAndFieldId(fieldId, formId)
            .then(function(form){
                res.json(form);
            });
    }

};