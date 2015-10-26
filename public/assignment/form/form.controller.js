"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($scope, $location, $rootScope, FormService) {
        var user = $rootScope.currentUser;
        $scope.addForm = addForm;
        $scope.updateForm = updateForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;
        $scope.currentForm = null;

        function init() {
            if (user == null) {
                console.log("Creating Dummy User");
                user = {
                    "id": "1",
                    "userName": "Default",
                    "lastName": " ",
                    "password": "password",
                    "email": "default@default.com"
                };
            }

            FormService.findAllFormsForUser(user.id, function(response) {
                $scope.forms = response;
            });
        }

        init();

        function addForm() {
            var newForm = null;
            var form = {
                "name": $scope.name
            };

            FormService.createFormForUser(user.id, form, function(form) {
                newForm = form;
            });

            $scope.forms.push(newForm);
            $scope.name = null;
        }

        function updateForm() {
            FormService.updateFormById(user.id, $scope.currentForm, function(form) {
                $scope.currentForm = form;
            });

            $scope.name = null;
            console.log("Updated Form");
        }

        function deleteForm(index) {
            var formId = $scope.forms[index].id;

            FormService.deleteFormById(formId, function(forms) {
                console.log("Form Deleted");
                $scope.forms = forms;
            });
        }

        function selectForm(index) {
            $scope.name = $scope.forms[index].name;
            $scope.currentForm = $scope.forms[index];
        }
    }
})();