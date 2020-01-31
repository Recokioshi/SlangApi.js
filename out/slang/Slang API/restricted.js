"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var GeneralSQLResult_1 = require("../SQL Api/GeneralSQLResult");
var exceptions_1 = require("../../common/exceptions");
var oracleDbConnection_1 = require("../../oracleDb/oracleDbConnection");
var GeneralSQLRow_1 = require("../SQL Api/GeneralSQLRow");
var formatSqlQueryWithParams = function (query, params) {
    var formattedQuery = "" + query;
    if (formattedQuery.indexOf('?') > -1 && params.size() > 0) {
        var counter = 0;
        do {
            if (params.size() > counter) {
                var param = params.get(counter);
                formattedQuery = formattedQuery.replace('?', isNaN(Number(param)) ? (param.length ? "(" + param + ")" : "'" + param + "'") : param);
                counter++;
            }
        } while (formattedQuery.indexOf('?') > -1 && params.size() > counter);
    }
    return formattedQuery;
};
var Restricted = /** @class */ (function () {
    function Restricted() {
    }
    Restricted.prototype.getXreferenceMetaData = function () {
        throw new Error(exceptions_1.exceptions.notImplemented);
    };
    Restricted.prototype.shipmentSQL = function () {
        throw new Error(exceptions_1.exceptions.notImplemented);
    };
    Restricted.prototype.manifestSQL = function () {
        throw new Error(exceptions_1.exceptions.notImplemented);
    };
    Restricted.prototype.orderSQL = function () {
        throw new Error(exceptions_1.exceptions.notImplemented);
    };
    Restricted.prototype.deliveryNoteSQL = function () {
        throw new Error(exceptions_1.exceptions.notImplemented);
    };
    Restricted.prototype.timeslotSQL = function () {
        throw new Error(exceptions_1.exceptions.notImplemented);
    };
    Restricted.prototype.supplyDeliveryPlanSQL = function () {
        throw new Error(exceptions_1.exceptions.notImplemented);
    };
    Restricted.prototype.supplyDeliveryPlanRequirementSQL = function () {
        throw new Error(exceptions_1.exceptions.notImplemented);
    };
    Restricted.prototype.supplyDeliveryPlanAnalysisSQL = function () {
        throw new Error(exceptions_1.exceptions.notImplemented);
    };
    Restricted.prototype.containerExchangeSQL = function () {
        throw new Error(exceptions_1.exceptions.notImplemented);
    };
    Restricted.prototype.containerExchangePositionSQL = function () {
        throw new Error(exceptions_1.exceptions.notImplemented);
    };
    /**
     * @function
     * @name generalSQL
     * @param {string} preFormattedQuery
     * @param {ArrayList} params
     */
    Restricted.prototype.generalSQL = function (preFormattedQuery, params) {
        return __awaiter(this, void 0, void 0, function () {
            var mapRawSqlResultRowToGeneralSQLRow, formattedQuery, rawSqlResult, sqlRows, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mapRawSqlResultRowToGeneralSQLRow = function (rawRow) {
                            return new GeneralSQLRow_1.GeneralSQLRow(rawRow);
                        };
                        formattedQuery = formatSqlQueryWithParams(preFormattedQuery, params);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, oracleDbConnection_1.callDb(formattedQuery)];
                    case 2:
                        rawSqlResult = _a.sent();
                        sqlRows = rawSqlResult.map(mapRawSqlResultRowToGeneralSQLRow);
                        return [2 /*return*/, new GeneralSQLResult_1.GeneralSQLResult(sqlRows)];
                    case 3:
                        err_1 = _a.sent();
                        throw new Error(exceptions_1.exceptions.errorDuringExecution + ": " + err_1 + " after invoking query: \n        " + formattedQuery);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Restricted.prototype.generalSQLWithDynamicLimit = function () {
        throw new Error(exceptions_1.exceptions.notImplemented);
    };
    return Restricted;
}());
exports.restricted = new Restricted();
//# sourceMappingURL=restricted.js.map