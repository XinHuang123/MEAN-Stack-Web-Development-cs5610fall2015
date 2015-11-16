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

            function init() {
            console.log("insdie form controller" + $rootScope.curid);
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
                var newForm = { id : model.currentForm.id, title : model.title};
                 FormService.updateFormById(model.currentForm.id, newForm)
                            .then(function(forms){
                                model.forms= forms;
                            });
             }


             function deleteForm(formId) {
                 FormService.deleteFormById(formId)
                            .then(function(forms){
                            console.log(forms);
                                model.forms = forms;
                            });
             }

             function selectForm(formId) {
                  FormService.getFormById(formId)
                              .then(function(form){
                              console.log(form.title);
                                  model.title = form.title;
                                  model.currentForm = form;
                              });
             }

         }
     })();