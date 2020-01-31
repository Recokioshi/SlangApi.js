"use strict";
exports.__esModule = true;
var CommonModelMapper_1 = require("./CommonModelMapper");
var BaseProxyObject = /** @class */ (function () {
    function BaseProxyObject(dbRow) {
        var _this = this;
        this.mapSQLResultRowToProxy = function (childObject, dirname, proxyObjectName) {
            CommonModelMapper_1.mapSQLResultRowToProxy(childObject, proxyObjectName, _this.sourceDbRow, dirname + "/ProxyModelMapping.json");
        };
        this.sourceDbRow = dbRow;
    }
    return BaseProxyObject;
}());
exports.BaseProxyObject = BaseProxyObject;
//# sourceMappingURL=BaseProxyObject.js.map