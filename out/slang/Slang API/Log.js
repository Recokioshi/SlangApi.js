"use strict";
exports.__esModule = true;
/**
 * @class
 * @name log
 * @description Representation of log object in slang
 */
var Log = /** @class */ (function () {
    function Log() {
    }
    /**
     * @function
     * @name debug
     * @param {any} arg any object to print
     * @description prints argument into console
     */
    Log.prototype.debug = function (arg) {
        console.log(String(arg));
    };
    return Log;
}());
exports.Log = Log;
//# sourceMappingURL=Log.js.map