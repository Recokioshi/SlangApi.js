"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _this = this;
exports.__esModule = true;
var oracledb_1 = __importDefault(require("oracledb"));
var dbconfig_1 = __importDefault(require("./dbconfig"));
var exceptions_1 = require("../common/exceptions");
/**
 * @function
 * @name getDbConnection
 * @description open and return connection to the db
 * @return {Promise<oracledb.Connection>} promise with db connection
 * @throws exception when connection is not established
 */
var getDbConnection = function () { return __awaiter(_this, void 0, void 0, function () {
    var err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, oracledb_1["default"].getConnection(dbconfig_1["default"])];
            case 1: return [2 /*return*/, _a.sent()];
            case 2:
                err_1 = _a.sent();
                throw new Error(exceptions_1.exceptions.errorDuringExecution + ": " + err_1);
            case 3: return [2 /*return*/];
        }
    });
}); };
/**
 * @function
 * @name closeDbConnection
 * @description closes db connection if previously established
 * @param {Connection} connection  connection to close
 * @return {Promise<void>} promise to resolve after connection is closed
 * @throws exception when closing connection fails
 */
var closeDbConnection = function (connection) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (connection) {
            try {
                return [2 /*return*/, connection.close()];
            }
            catch (err) {
                throw new Error(exceptions_1.exceptions.errorDuringExecution + ": " + err);
            }
        }
        return [2 /*return*/];
    });
}); };
/**
 * @function
 * @name executeDbQuery
 * @description executes query for previously opened connection
 * @param {Connection} connection  connection to perform query with
 * @return {Promise<Object[] | null>} promise with sql query result
 * @throws exception when query execution fails, or when db connection was not opened before query
 */
var executeDbQuery = function (connection, query) { return __awaiter(_this, void 0, void 0, function () {
    var sql, binds, options, result, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                sql = query;
                binds = {};
                options = {
                    outFormat: oracledb_1["default"].OUT_FORMAT_OBJECT
                };
                return [4 /*yield*/, connection.execute(sql, binds, options)];
            case 1:
                result = _a.sent();
                return [2 /*return*/, result.rows];
            case 2:
                err_2 = _a.sent();
                throw new Error(exceptions_1.exceptions.errorDuringExecution + ": " + err_2);
            case 3: return [2 /*return*/];
        }
    });
}); };
/**
 * @function
 * @name dbQuery
 * @description open db connection, execute query and close db connection
 * @return {Promise<Object[] | null>} promise with sql query result
 * @throws exceptions from opening db connection, query execution or closing db connection
 */
exports.callDb = function (query) { return __awaiter(_this, void 0, void 0, function () {
    var connection, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getDbConnection()];
            case 1:
                connection = _a.sent();
                return [4 /*yield*/, executeDbQuery(connection, query)];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, closeDbConnection(connection)];
            case 3:
                _a.sent();
                return [2 /*return*/, response];
        }
    });
}); };
//# sourceMappingURL=oracleDbConnection.js.map