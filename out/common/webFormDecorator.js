"use strict";
exports.__esModule = true;
var webForm_1 = require("../slang/Slang API/webForm");
var capitalizeFirstLetter = function (key) { return ({
    capitalized: key.charAt(0).toUpperCase() + key.slice(1),
    original: key
}); };
var addGetterToObject = function (objectToDecorate, propName) {
    objectToDecorate["get" + propName.capitalized] = function () { return objectToDecorate[propName.original]; };
};
var addSetterToObject = function (objectToDecorate, propName) {
    objectToDecorate["set" + propName.capitalized] = function (newValue) {
        objectToDecorate[propName.original] = newValue;
    };
};
var addGetterAndSetterToSimpleType = function (objectToDecorate, propName) {
    addGetterToObject(objectToDecorate, propName);
    addSetterToObject(objectToDecorate, propName);
};
var addGetterAndSetterToObject = function (decoratedObject) { return function (propName) {
    var field = decoratedObject[propName.original];
    var typeOfField = typeof field;
    switch (typeOfField) {
        case 'string':
        case 'number':
            addGetterAndSetterToSimpleType(decoratedObject, propName);
            break;
        case 'object':
            if (Array.isArray(field)) {
                decoratedObject[propName.original] = new webForm_1.WebFormCollection(field.slice().map(function (elemInField) {
                    return exports.decorateObjectWithGetterAndSetter(elemInField);
                }));
                addGetterToObject(decoratedObject, propName);
            }
            else if (field === null) {
                addGetterAndSetterToSimpleType(decoratedObject, propName);
            }
            else {
                addGetterToObject(decoratedObject, propName);
                field = exports.decorateObjectWithGetterAndSetter(field);
            }
            break;
        default:
    }
}; };
exports.decorateObjectWithGetterAndSetter = function (initialObject) {
    Object.keys(initialObject)
        .map(capitalizeFirstLetter)
        .forEach(addGetterAndSetterToObject(initialObject));
    return initialObject;
};
//# sourceMappingURL=webFormDecorator.js.map