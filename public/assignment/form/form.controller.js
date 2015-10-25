"use strict";
(function () {
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);
    function FormController($scope, $rootScope, FormService) {
        $scope.forms = [];
        var selectedForm = {};
        var selected = false;
        var user = $rootScope.user;

        function initForm() {
            if (user == null) {
                user = {
                    id : '11111111111'
                };
            }
            $scope.forms = FormService.findAllFormsForUser(user.id, callback);
        }

        initForm();

        function callback(form) {
            return form;
        }

        function addForm() {
            var form = {
                name: $scope.name
            };
            var form = FormService.createFormForUser(user.id, form, callback);
            $scope.forms.push(form);
        }

        function deleteForm(index) {
            var form = $scope.forms[index];
            FormService.deleteFormById(form.id, callback);
            $scope.forms = FormService.findAllFormsForUser(user.id, callback);
        }

        function updateForm() {
            if (selected == false)
                return;
            var newName = $scope.name;
            selectedForm['name'] = newName;
            FormService.updateFormById(selectedForm.id, selectedForm, callback);
            selected = false;
        }

        function selectForm(index) {
            selectedForm = $scope.forms[index];
            selected = true;
        }

        $scope.addForm = addForm;
        $scope.deleteForm = deleteForm;
        $scope.updateForm = updateForm;
        $scope.selectForm = selectForm;

    }

})();