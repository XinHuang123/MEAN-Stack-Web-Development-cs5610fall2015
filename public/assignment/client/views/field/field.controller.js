(function(){
    'use strict';
         angular
             .module("FormBuilderApp")
             .controller("FieldController", FieldController);

         function FieldController(UserService, FieldService, $routeParams, $rootScope) {
           var model = this;
           var formId = $routeParams.formId;
           var userId = $routeParams.userId;
           model.addField = addField;
           model.removeField = removeField;

           function init() {
           console.log(formId);
            FieldService.getFieldsForForm(formId)
                       .then(function(fields){
                           model.fields = fields;
                       });
            }
            init();

            function addField(fieldType) {
            console.log(fieldType);
            var field = {} ;
                switch(fieldType) {
                     case "Multi Line Text Field" :
                        field = {"label": "New Text Field", "fieldType": "TEXTAREA", "placeholder": "New Field"};
                        break;
                     case "Date Field" :
                        field = {"label": "New Date Field", "fieldType": "DATE"};
                        break;
                     case "Dropdown Field" :
                        field = {"label": "New Dropdown", "fieldType": "SELECT",  "options": [
                                	{"label": "Option 1", "value": "OPTION_1"},
                                	{"label": "Option 2", "value": "OPTION_2"},
                                	{"label": "Option 3", "value": "OPTION_3"}
                                ]} ;
                                break;
                     case "Checkboxes Field" :
                        field = {"label": "New Checkboxes", "fieldType": "CHECKBOX", "options": [
                                    {"label": "Option A", "value": "OPTION_A"},
                                    {"label": "Option B", "value": "OPTION_B"},
                                    {"label": "Option C", "value": "OPTION_C"}
                               ]} ;
                               break;
                     case "Radio Buttons Field" :
                        field = {"label": "New Radio Buttons", "fieldType": "RADIO", "options": [
                                	{"label": "Option X", "value": "OPTION_X"},
                                	{"label": "Option Y", "value": "OPTION_Y"},
                                	{"label": "Option Z", "value": "OPTION_Z"}
                                ]};
                                break;
                     default:
                        field = {"label": "New Text Field", "fieldType": "TEXT", "placeholder": "New Field"};
                        break;
                }

                FieldService.createFieldForForm(formId, field)
                            .then(function(form) {
                                console.log(form.fields);
                                model.fields = form.fields;
                            });
            }

            function removeField(fieldId) {
            console.log("Inside removeField " + fieldId);
                FieldService.deleteFieldFromForm(formId, fieldId)
                            .then(function(form) {
                                console.log(form.fields);
                                model.fields = form.fields;
                            });
            }

        }
})();