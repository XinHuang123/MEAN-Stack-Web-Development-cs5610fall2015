(function(){
    'use strict';
         angular
             .module("FormBuilderApp")
             .controller("FormController", FormController);

         function FormController(UserService, $rootScope, FormService) {

            var model = this;
            model.addForm = addForm;
            model.updateForm = updateForm;
            model.deleteForm = deleteForm;
            model.selectForm = selectForm;
            model.forms = [];

            function init() {
            console.log("inside form controller" + $rootScope.curid);
             FormService.findAllFormsForUser($rootScope.curid)
                        .then(function(forms){
                            model.forms = forms;
                        });
             }
             init();

             function addForm() {
                var formObj = { userId: $rootScope.curid, title: model.title};
                FormService.createFormForUser($rootScope.curid, formObj)
                           .then(function(form){
                             model.currentform = form;
                             model.forms.push(model.currentform);
                            });
             }

             function updateForm() {
                var newForm = { title : model.title, userId: $rootScope.curid};
                console.log(newForm.title + " " + newForm._id);
                 FormService.updateFormById(model.currentForm._id, newForm)
                            .then(function(forms){
                                console.log("Updated Form-title: " + forms[0].title);
                                model.forms= forms;
                            });
             }


             function deleteForm(formId) {
                console.log("Form to delete: " + formId);
                 FormService.deleteFormById(formId)
                            .then(function(forms){
                            console.log(forms);
                            FormService.findAllFormsForUser($rootScope.curid)
                                    .then(function(forms){
                                        model.forms = forms;
                                    });
                            });
             }

             function selectForm(formId) {
                  FormService.getFormById(formId)
                              .then(function(form){
                              console.log(form.title + " " + form._id);
                                  model.title = form.title;
                                  model.currentForm = form;
                              });
             }

         }
     })();