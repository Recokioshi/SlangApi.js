"use strict";
exports.__esModule = true;
exports["default"] = (function () {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i] = arguments[_i];
    }
    return function (args) {
        return functions.reduceRight(function (arg, fn) { return fn(arg); }, args);
    };
});
//# sourceMappingURL=compose.js.map