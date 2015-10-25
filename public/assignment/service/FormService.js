"use strict";
(function()
{
    angular
        .module("FormBuilderApp")
        .factory("FormService", formService);

    function formService()
    {
        var forms = [ ];

        var service = {
            createFormForUser: createFormForUser,
            findAllFormsForUser : findAllFormsForUser,
            deleteFormById : deleteFormById,
            updateFormById : updateFormById
        };

        return service;

        function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }

        function createFormForUser(userId, form, callback)
        {
            var newForm = {
                id : guid(),
                userid : userId,
                formName : form.formName
            }
            forms.push(newForm);
            callback(newForm);
        }

        function findAllFormsForUser(userId, callback)
        {
            var formArr = [];
            for (var form in forms){
                if (form.userid == userId){
                    formArr.push(form);
                }
            }
            callback(formArr);
        }

        function deleteFormById(formId, callback)
        {
            for (var form in forms){
                if (form .id == formId){
                    forms.splice(form,1);
                }
            }
            callback(forms);
        }

        function updateFormById(formId, newForm, callback)
        {
            for (var form in forms){
                if (form.id == formId){
                    form.userid = newForm.userid;
                    form.formName = newForm.formName;
                    callback(form);
                }
            }
            callback(null);
        }

    }
})();