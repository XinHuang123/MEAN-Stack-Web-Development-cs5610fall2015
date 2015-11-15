"use strict";
var uuid = require('node-uuid');

module.exports = function(app) {
    var forms = require('./form.mock.json');

    var api = {
        Create: Create,
        FindAll: FindAll,
        FindById: FindById,
        FindFormByTitle: FindFormByTitle,
        Update: Update,
        Delete: Delete,
        //additional methods
        FindFormByUserId: FindFormByUserId,
        FindFieldById: FindFieldById,
        RemoveField: RemoveField,
        AddField: AddField,
        UpdateField: UpdateField
    };

    return api;

    function Create(form) {
        forms.push(form);
        return forms;
    }

    function FindAll() { return forms; }
/*
find: arr.find(callback[, thisArg])

*The find() method returns a value in the array,
* if an element in the array satisfies the provided testing function.
* Otherwise undefined is returned.
*/
    function FindById(id) {
        return forms.find(function(element, index, array) {
            return element.id === id;
        });
    }
/*
*
* filter: array1.filter(callbackfn[, thisArg])
* callbackfn(value, index, array1)
* A new array that contains all the values for which the callback function returns true.
* If the callback function returns false for all elements of array1,
* the length of the new array is 0.
*/
    function FindFormByTitle(title) {
        return forms.filter(function(value, index, array) {
            return value.title === title;
        });
    }

    function Update(id, newForm) {
        var form = FindById(id);
        for(var k in newForm) {
            form[k] = newForm[k];
        }
        return forms;
    }

    function Delete(id) {
        var index = forms.findIndex(function (item, index, array) {
            return item.id === id;
        });

        if (index != -1) {
            forms.splice(index, 1);
        }
        return forms;
    }

    //additional methods
    function FindFormByUserId(userId) {
        return forms.filter(function(value, index, array) {
            return value.userId.toString() === userId;
        });
    }

    function FindFieldById(formId, fieldId) {
        var form = FindById(formId);
        return form.fields.find(function(element, index, array) {
            return element.id === fieldId;
        });
    }

    function RemoveField(formId, fieldId) {
        var form = FindById(formId);
        var fieldIndex = form.fields.findIndex(function(item, index, array) {
            return item.id === fieldId;
        });

        form.fields.splice(fieldIndex, 1);
        return form.fields;
    }

    function AddField(formId, newField) {
        var form = FindById(formId);
        newField.id = uuid.v1();
        form.fields.push(newField);
        return form.fields;
    }

    function UpdateField(formId, fieldId, newField) {
        var field = FindFieldById(formId, fieldId);
        for(var k in newField) {
            field[k] = newField[k];
        }
    }


};