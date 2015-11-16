var forms = require('../models/form.mock.json');
var q = require("q");
var uuid = require('node-uuid');

module.exports = function(app) {

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
        var userForms = [] ;
        for(var form in forms) {
            if(forms[form].userId == userId) {
                userForms.push(forms[form]);
            }
        }
        deferred.resolve(userForms);
        return deferred.promise;
    }

    function deleteForm(formId) {
    console.log("inside form.model.js deleteForm");
        var deferred = q.defer();
        var userForms = [];
        var userId  = "0";
        console.log("starting for loop");
        for(var form in forms) {
        console.log(formId + " " + forms[form].id);
            if(forms[form].id.localeCompare(formId) == 0) {
            console.log(formId + " " + forms[form].userId);
                userId = forms[form].userId;
                forms.splice(form, 1);
                break;
            }
        }
        for(var form in forms) {
            if(forms[form].userId == userId) {
                userForms.push(forms[form]);
            }
        }
        deferred.resolve(userForms);
        return deferred.promise;
    }

    function createNewForm(newForm) {
    console.log("inside form.model.js createNewForm");
        var deferred = q.defer();
        console.log(newForm);
        forms.push(newForm);
        deferred.resolve(newForm);
        return deferred.promise;
    }

    function updateForm(formId, formObj) {
    console.log("inside form.model.js updateForm");
        var deferred = q.defer();
        var userForms = [];
        var userId  = "0";
        for(var i = 0; i < forms.length; i++)  {
        console.log(forms[i].id);
            if(forms[i].id.localeCompare(formId) == 0) {
                forms[i].title = formObj.title;
                userId = forms[i].userId;
            }
        }

        for(var form in forms) {
            if(forms[form].userId == userId) {
                userForms.push(forms[form]);
            }
        }
        deferred.resolve(userForms);
        return deferred.promise;
    }

    function findFormByTitle(title) {
    var deferred = q.defer();
        for(var form in forms) {
            if(forms[form].title.localeCompare(title) == 0) {
                console.log("Found form!");
                deferred.resolve(forms[form]);
            }
        }
        return deferred.promise;
    }

    function findFormById(formId) {
    var deferred = q.defer();
        for(var form in forms) {
            if(forms[form].id.localeCompare(formId) == 0) {
                console.log("Found form!");
                deferred.resolve(forms[form]);
            }
        }
        return deferred.promise;
    }

    function findAllForms() {
        var deferred = q.defer();
        deferred.resolve(forms);
        return deferred.promise;
    }

    function createNewFieldForFormId(formId, fieldObj) {
        console.log("inside form.model.js createNewFieldForFormId");
            var deferred = q.defer();
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

