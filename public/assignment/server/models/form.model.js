//var forms = require('../models/form.mock.json');
var q = require("q");
var uuid = require('node-uuid');

module.exports = function(mongoose, db) {

    var FormSchema = require("./form.schema.js")(mongoose);
    var formModel = mongoose.model("formModel", FormSchema);

    var api = {
        findFormByTitle : findFormByTitle,
        findAllForms: findAllForms,
        findFormById : findFormById,
        findAllFormsForUser : findAllFormsForUser,
        createNewForm : createNewForm,
        updateForm : updateForm,
        deleteForm : deleteForm,
        createNewFieldForFormId : createNewFieldForFormId,
        updateFieldForFormId : updateFieldForFormId,
        deleteFieldByFormIdAndFieldId : deleteFieldByFormIdAndFieldId,
        findFieldByFormIdAndFieldId : findFieldByFormIdAndFieldId,
        findAllFieldsForFormId: findAllFieldsForFormId
    };
    return api;

    function updateFieldForFormId(fieldId, formId, fieldObj) {
        console.log("inside form.model.js deleteFieldByFormIdAndFieldId");
        var deferred = q.defer();
        for(var form in forms) {
            if(forms[form].id.localeCompare(formId) == 0) {
                var allFields = forms[form].fields;
                for(var field in allFields) {
                    if(allFields[field].id.localeCompare(fieldId) == 0) {
                        allFields[field].id = fieldObj.id;
                        allFields[field].label = fieldObj.label;
                        if(allFields[field].type.localeCompare(fieldObj.type) == 0) {
                            switch(allFields[field].type) {
                                 case "TEXTAREA" :
                                    allFields[field].placeholder = fieldObj.placeholder;
                                 case "OPTIONS" :
                                    allFields[field].options = fieldObj.options;
                                 case "CHECKBOXES" :
                                     allFields[field].options = fieldObj.options;
                                  case "RADIOS" :
                                     allFields[field].options = fieldObj.options;
                                 case "DATE" :
                                 default:
                                    allFields[field].placeholder = fieldObj.placeholder;
                            }
                        }
                        deferred.resolve(allFields);
                    }
                }
            }
        }
        return deferred.promise;
    }

    function deleteFieldByFormIdAndFieldId(fieldId, formId) {
        console.log("inside form.model.js deleteFieldByFormIdAndFieldId");
        var deferred = q.defer();
        var Fields = [];
        for(var form in forms) {
            if(forms[form].id.localeCompare(formId) == 0) {
                var allFields = forms[form].fields;
                for(var field in allFields) {
                    if(allFields[field].id.localeCompare(fieldId) == 0) {
                        allFields.splice(field, 1);
                    }
                }
                for(var field in allFields) {
                    Fields.push(allFields[field]);
                }
            }
        }
        deferred.resolve(Fields);
        return deferred.promise;
    }

    function findFieldByFormIdAndFieldId(fieldId, formId) {
        console.log("inside form.model.js findAllFieldsForFormId");
        var deferred = q.defer();
        for(var form in forms) {
            if(forms[form].id.localeCompare(formId) == 0) {
                var allFields = forms[form].fields;
                for(var field in allFields) {
                    if(allFields[field].id.localeCompare(fieldId) == 0) {
                        allFields.splice(field, 1);
                        deferred.resolve(allFields[field]);
                    }
                }
            }
        }
        return deferred.promise;
    }

    function findAllFieldsForFormId(formId) {
        console.log("inside form.model.js findAllFieldsForFormId");
        var deferred = q.defer();
        var allFields;
        for(var form in forms) {
            if(forms[form].id.localeCompare(formId) == 0) {
                allFields = forms[form].fields;
            }
        }
        deferred.resolve(allFields);
        return deferred.promise;
    }

    function findAllFormsForUser(userId) {
    console.log("inside form.model.js findAllFormsForUser");
        var deferred = q.defer();
        formModel.find({userId: userId}, function(err, forms){
            deferred.resolve(forms);
        });
        return deferred.promise;
    }

    function deleteForm(formId) {
    console.log("inside form.model.js deleteForm");
        var deferred = q.defer();
        var userId = formModel.find( { }, { title: 0 } );
        userModel.remove({_id: userId}, function(err, user){
               if(err) {
                    console.log("Error deleting form for user!");
                   deferred.reject(err);
               } else {
                   formModel.find({userId: userId}, function(err, form){
                        deferred.resolve(form);
                    });
               }
        });
        deferred.resolve(userForms);
        return deferred.promise;
    }

    function createNewForm(newForm) {
    console.log("inside form.model.js createNewForm");
        var deferred = q.defer();
        console.log(newForm);
        formModel.create(newForm, function(err, form){
            console.log("Created new form!!!");
             deferred.resolve(form);
        });
        return deferred.promise;
    }

    function updateForm(formId, formObj) {
    console.log("inside form.model.js updateForm");
        var deferred = q.defer();
        var userId = formModel.find( { }, { title: 0 } );
        formModel.update({_id: formId}, {$set: formObj}, function(err, forms) {
             if(err) {
                console.log("Cud not find Usr!!");
                 deferred.reject(err);
             } else {
             console.log("Update successful!");
                 formModel.find({userId: userId}, function(err, form){
                     deferred.resolve(form);
                 });
             }
         });
        return deferred.promise;
    }

    function findFormByTitle(title) {
    var deferred = q.defer();
        formModel.find({title: title}, function(err, form){
         deferred.resolve(form);
     });
        return deferred.promise;
    }

    function findFormById(formId) {
    var deferred = q.defer();
        formModel.findById(formId, function(err, forms){
            deferred.resolve(forms);
        });
        return deferred.promise;
    }

    function findAllForms() {
        var deferred = q.defer();
        formModel.find(function(err, forms) {
             deferred.resolve(forms);
        });
        return deferred.promise;
    }

    function createNewFieldForFormId(formId, fieldObj) {
        console.log("inside form.model.js createNewFieldForFormId");
            var deferred = q.defer();
            //generate new id from uuid
            fieldObj.id = uuid.v1();
            console.log("new form id: " + fieldObj.id);
            for(var form in forms) {
                if(forms[form].id.localeCompare(formId) == 0) {
                   var allFields = forms[form].fields;
                   if(typeof allFields !== "undefined") {
                       allFields.push(fieldObj);
                       deferred.resolve(allFields);
                   } else {
                       allFields = [];
                       allFields.push(fieldObj);
                       forms[form].fields = allFields;
                       deferred.resolve(allFields);
                   }
                }
            }
            return deferred.promise;
    }


};

