(function(){
    'use strict';
    angular
        .module("FormBuilderApp")
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

    function guid() {
      function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
      }
      return s4();
    }

    function createFieldForForm(formId, Field) {
        var deferred = $q.defer();
        Field.id = guid();
        $http.post("/api/assignment/form/" + formId + "/field", Field)
            .success(function(forms){
                deferred.resolve(forms);
            });

        return deferred.promise;
    }

    function getFieldsForForm(formId) {
        var deferred = $q.defer();
        $http.get("/api/assignment/form/" + formId + "/field")
            .success(function(forms){
                deferred.resolve(forms);
            });

        return deferred.promise;
    }

    function getFieldForForm(formId, FieldId) {
        var deferred = $q.defer();
        $http.get("/api/assignment/form/" + formId + "/field/" + fieldId)
            .success(function(forms){
                deferred.resolve(forms);
            });

        return deferred.promise;
    }

    function deleteFieldFromForm(formId, fieldId) {
        var deferred = $q.defer();
        $http.delete("/api/assignment/form/"+ formId + "/field/" + fieldId)
            .success(function(forms){
                deferred.resolve(forms);
            });

        return deferred.promise;

    }

    function updateField(formId, fieldId, field) {
        var deferred = $q.defer();

        $http.put("/api/assignment/form/" + formId + "/field/" + fieldId, field)
            .success(function(form){
                deferred.resolve(form);
            });

        return deferred.promise;

    }

    }

})();