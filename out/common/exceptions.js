"use strict";
exports.__esModule = true;
exports.exceptions = {
    notImplemented: 'Not implemented.',
    errorDuringExecution: 'Error during execution of sql query.',
    noFunctionDeclaredForName: "Function is not declared. If you call functions with invoke method from base, be sure to add this function in file 'invokingFunctions in the root directory. Missing function name:'",
    createListProxyNoTypeImplemented: 'Requested type not implemented yet.',
    classNameNotExists: function (className) { return "Class of name " + className + " does not exist"; }
};
//# sourceMappingURL=exceptions.js.map