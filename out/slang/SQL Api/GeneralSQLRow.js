"use strict";
exports.__esModule = true;
var getFieldWithParam = function (dataSource, param) {
    var ret = Number.isNaN(Number(param))
        ? dataSource[param]
        : dataSource[Object.keys(dataSource)[param]];
    return ret;
};
var GeneralSQLRow = /** @class */ (function () {
    function GeneralSQLRow(newRowData) {
        this.rowData = {};
        this.rowData = newRowData;
    }
    GeneralSQLRow.prototype.getBoolean = function (param) {
        return Boolean(getFieldWithParam(this.rowData, param));
    };
    GeneralSQLRow.prototype.getCharacter = function (param) {
        var charAsString = String(getFieldWithParam(this.rowData, param));
        var retVal = charAsString.length === 1 ? charAsString : null;
        return retVal;
    };
    GeneralSQLRow.prototype.getDouble = function (param) {
        return Number(getFieldWithParam(this.rowData, param));
    };
    GeneralSQLRow.prototype.getFloat = function (param) {
        return Number(getFieldWithParam(this.rowData, param));
    };
    GeneralSQLRow.prototype.getInteger = function (param) {
        return Number(getFieldWithParam(this.rowData, param));
    };
    GeneralSQLRow.prototype.getLong = function (param) {
        return Number(getFieldWithParam(this.rowData, param));
    };
    GeneralSQLRow.prototype.getShort = function (param) {
        return Number(getFieldWithParam(this.rowData, param));
    };
    GeneralSQLRow.prototype.getString = function (param) {
        return String(getFieldWithParam(this.rowData, param));
    };
    GeneralSQLRow.prototype.getDate = function (param) {
        return new Date(getFieldWithParam(this.rowData, param));
    };
    GeneralSQLRow.prototype.getDateString = function (param) {
        return String(new Date(getFieldWithParam(this.rowData, param)));
    };
    return GeneralSQLRow;
}());
exports.GeneralSQLRow = GeneralSQLRow;
//# sourceMappingURL=GeneralSQLRow.js.map