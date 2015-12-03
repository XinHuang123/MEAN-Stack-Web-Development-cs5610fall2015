(function(){
    'use strict';
    angular
        .module("ProjectApp")
        .factory("FieldService", FieldService);

    function FieldService($http, $q) {
    var api = {
        createFieldForForm: createFieldForForm,
        getFieldsForForm: getFieldsForForm,
        getFieldForForm: getFieldForForm,
        deleteFieldFromForm: deleteFieldFromForm,
        updateField: updateField
    };
        return api;

    function createFieldForForm(formId, Field) {
        var deferred = $q.defer();
        console.log("Going to server, field: "+ Field);
        $http.post("/api/project/form/" + formId + "/field", Field)
            .success(function(forms){
                deferred.resolve(forms);
            });

        return deferred.promise;
    }

    function getFieldsForForm(formId) {
        var deferred = $q.defer();
        console.log("Inside getfieldsforform");
        $http.get("/api/project/form/" + formId + "/field")
            .success(function(forms){
                deferred.resolve(forms);
            });

        return deferred.promise;
    }

    function getFieldForForm(formId, FieldId) {
        var deferred = $q.defer();
        $http.get("/api/project/form/" + formId + "/field/" + fieldId)
            .success(function(forms){
                deferred.resolve(forms);
            });

        return deferred.promise;
    }

    function deleteFieldFromForm(formId, fieldId) {
        var deferred = $q.defer();
        $http.delete("/api/project/form/"+ formId + "/field/" + fieldId)
            .success(function(forms){
                deferred.resolve(forms);
            });

        return deferred.promise;

    }

    function updateField(formId, fieldId, field) {
        var deferred = $q.defer();

        $http.put("/api/project/form/" + formId + "/field/" + fieldId, field)
            .success(function(form){
                deferred.resolve(form);
            });
        return deferred.promise;
    }

    }

})();