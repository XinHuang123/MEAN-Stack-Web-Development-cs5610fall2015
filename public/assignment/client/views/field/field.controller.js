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
                        field = {"id": null, "label": "New Text Field", "type": "TEXTAREA", "placeholder": "New Field"};
                        break;
                     case "Date Field" :
                        field = {"id": null, "label": "New Date Field", "type": "DATE"};
                        break;
                     case "Dropdown Field" :
                        field = {"id": null, "label": "New Dropdown", "type": "OPTIONS", "options": [
                                	{"label": "Option 1", "value": "OPTION_1"},
                                	{"label": "Option 2", "value": "OPTION_2"},
                                	{"label": "Option 3", "value": "OPTION_3"}
                                ]} ;
                                break;
                     case "Checkboxes Field" :
                        field = {"id": null, "label": "New Checkboxes", "type": "CHECKBOXES", "options": [
                                               	{"label": "Option A", "value": "OPTION_A"},
                                               	{"label": "Option B", "value": "OPTION_B"},
                                               	{"label": "Option C", "value": "OPTION_C"}
                                               ]} ;
                                               break;
                     case "Radio Buttons Field" :
                        field = {"id": null, "label": "New Radio Buttons", "type": "RADIOS", "options": [
                                	{"label": "Option X", "value": "OPTION_X"},
                                	{"label": "Option Y", "value": "OPTION_Y"},
                                	{"label": "Option Z", "value": "OPTION_Z"}
                                ]};
                                break;
                     default:
                        field = {"id": null, "label": "New Text Field", "type": "TEXT", "placeholder": "New Field"};
                        break;
                }

                FieldService.createFieldForForm(formId,     field)
                            .then(function(fields) {
                                console.log(fields);
                                model.fields = fields;
                            });
            }

            function removeField(fieldId) {
            console.log("Inside removeField " + fieldId);
                FieldService.deleteFieldFromForm(formId, fieldId)
                            .then(function(fields) {
                                console.log(fields);
                                model.fields = fields;
                            });
            }

        }
})();