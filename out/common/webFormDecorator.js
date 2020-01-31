"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
                decoratedObject[propName.original] = new webForm_1.WebFormCollection(__spreadArrays(field).map(function (elemInField) {
                    return exports.decorateObjectWithGetterAndSetter(elemInField);
                }));
                addGetterToObject(decoratedObject, propName);
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