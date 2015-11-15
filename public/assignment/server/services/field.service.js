"use strict";

module.exports = function(app, formModel) {
    app.get('/api/assignment/form/:formId/field', function(req, res) {
        res.json(formModel.FindById(req.params.formId).fields);
    });

    app.get('/api/assignment/form/:formId/field/:fieldId',
        function(req, res){
            res.json(formModel.FindFieldById(req.params.formId, req.params.fieldId));
        });

    app.delete('/api/assignment/form/:formId/field/:fieldId',
        function(req, res) {
            // return fields array
            res.json(formModel.RemoveField(req.params.formId, req.params.fieldId));
        });

    app.post('/api/assignment/form/:formId/field', function(req, res) {
        // return fields array
        res.json(formModel.AddField(req.params.formId, req.body));
    });

    app.put('/api/assignment/form/:formId/field/:fieldId',
        function(req, res) {
            res.json(formModel.UpdateField(
                req.params.formId,
                req.params.fieldId,
                req.body));
        });
}
