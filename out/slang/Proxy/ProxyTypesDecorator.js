"use strict";
exports.__esModule = true;
var capitalizeFirstLetter = function (key) { return key.charAt(0).toUpperCase() + key.slice(1); };
var addGetterToObject = function (objectToDecorate, propName) {
    objectToDecorate["get" + propName] = function () { return objectToDecorate[propName]; };
};
var addSetterToObject = function (objectToDecorate, propName) {
    objectToDecorate["set" + propName] = function (newValue) {
        objectToDecorate[propName] = newValue;
    };
};
var addGetterAndSetterToObject = function (decoratedObject) { return function (propName) {
    addGetterToObject(decoratedObject, propName);
    addSetterToObject(decoratedObject, propName);
}; };
exports.decorateObjectWithGetterAndSetter = function (initialObject) {
    Object.keys(initialObject)
        .map(capitalizeFirstLetter)
        .forEach(addGetterAndSetterToObject(initialObject));
    return initialObject;
};
//# sourceMappingURL=ProxyTypesDecorator.js.map