"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var invokingFunctions_1 = __importDefault(require("../../invokingFunctions"));
var exceptions_1 = require("../../common/exceptions");
/**
 * @class
 * @name FunctionInvoker
 * @description class that holds function with params for invoke later
 */
var FunctionInvoker = /** @class */ (function () {
    function FunctionInvoker(functionName) {
        this.functionName = '';
        this.params = [];
        this.functionName = functionName;
    }
    FunctionInvoker.prototype.param = function (paramValue) {
        this.params.push(paramValue);
        return this;
    };
    FunctionInvoker.prototype.invoke = function () {
        var funToInvoke = invokingFunctions_1["default"][this.functionName];
        if (funToInvoke) {
            return funToInvoke.apply(void 0, this.params);
        }
        else {
            throw new Error("" + exceptions_1.exceptions.noFunctionDeclaredForName + this.functionName);
        }
    };
    return FunctionInvoker;
}());
exports.FunctionInvoker = FunctionInvoker;
//# sourceMappingURL=FunctionInvoker.js.map