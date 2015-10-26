"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService() {
        var forms = [];

        var service = {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        }

        return service;

        function createFormForUser(userId, form, callback) {
            form.id = guid();
            form.userid = userId;

            forms.push(form);

            callback(form);
        }

        function findAllFormsForUser(userId, callback) {
            var requiredForms = [];

            for (var i = 0; i < forms.length; i++) {
                if (forms[i].userid === userId) {
                    requiredForms.push(forms[i]);
                }
            }

            callback(requiredForms);
        }

        function deleteFormById(formId, callback) {
            for (var i = 0; i < forms.length; i++) {
                console.log(forms[i].id + "  " + formId);
                if (forms[i].id == formId) {
                    console.log("equal");
                    forms.splice(i, 1);
                    break;
                }
            }

            callback(forms);
        }

        function updateFormById(formId, newForm, callback) {
            for (var i = 0; i < forms.length; i++) {
                if (forms[i].id === formId) {
                    forms[i] = newForm;
                }
            }

            callback(forms);
        }

        function guid() {
            function s4() {
                return Math.floor((1 + Math.random()) * 0x10000)
                    .toString(16)
                    .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
                s4() + '-' + s4() + s4() + s4();
        }
    }
})();