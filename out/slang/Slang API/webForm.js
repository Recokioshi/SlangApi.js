"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var webFormDecorator_1 = require("../../common/webFormDecorator");
var loadedWebForm = require('../../../webForm.json');
var WebFormCollection = /** @class */ (function () {
    function WebFormCollection(dataSource) {
        this.collectionDataSource = dataSource;
    }
    WebFormCollection.prototype.get = function (index) {
        return this.collectionDataSource[index];
    };
    WebFormCollection.prototype.size = function () {
        return this.collectionDataSource.length;
    };
    WebFormCollection.prototype.create = function () {
        var newElem = __assign({}, this.collectionDataSource[0]);
        Object.keys(newElem).forEach(function (key) {
            newElem[key] = null;
        });
        newElem = webFormDecorator_1.decorateObjectWithGetterAndSetter(newElem);
        //@ts-ignore
        this.collectionDataSource.push(newElem);
        return newElem;
    };
    return WebFormCollection;
}());
exports.WebFormCollection = WebFormCollection;
var WebFormBuilder = /** @class */ (function () {
    function WebFormBuilder(webFormDataSource) {
        this.webFormStructure = webFormDataSource;
    }
    WebFormBuilder.prototype.getWebForm = function () {
        return webFormDecorator_1.decorateObjectWithGetterAndSetter(this.webFormStructure);
    };
    return WebFormBuilder;
}());
exports.webForm = new WebFormBuilder(loadedWebForm).getWebForm();
//# sourceMappingURL=webForm.js.map