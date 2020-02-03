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
var exceptions_1 = require("../../common/exceptions");
var ArrayList_1 = require("../java.util/ArrayList");
var restricted_1 = require("./restricted");
var SlangApiStandardDatabaseQuerries_1 = __importDefault(require("../../assets/SlangApiStandardDatabaseQuerries"));
var FunctionInvoker_1 = require("./FunctionInvoker");
var Log_1 = require("./Log");
var LongListProxy_1 = require("../Proxy/LongListProxy");
var ComplexShipmentProxy_1 = require("../Proxy/Shipment/ComplexShipmentProxy");
var ComplexManifestProxy_1 = require("../Proxy/Manifest/ComplexManifestProxy");
var ComplexTslotProxy_1 = require("../Proxy/Timeslot/ComplexTslotProxy");
var ComplexShipmentListProxy_1 = require("../Proxy/Shipment/ComplexShipmentListProxy ");
var ComplexTslotListProxy_1 = require("../Proxy/Timeslot/ComplexTslotListProxy");
var ComplexManifestListProxy_1 = require("../Proxy/Manifest/ComplexManifestListProxy");
var UserInfoDataProxy_1 = require("../Proxy/UserInfoDataProxy");
var _a = require('../../assets/constants.json'), groupId = _a.groupId, companyId = _a.companyId, solutionId = _a.solutionId, loggedInUser = _a.loggedInUser;
var callStandardApiFunctionSqlQuerryWithParams = function (query, params) {
    var paramsAsArrayList = new ArrayList_1.ArrayList(params);
    try {
        return restricted_1.restricted.generalSQL(SlangApiStandardDatabaseQuerries_1["default"][query], paramsAsArrayList);
    }
    catch (err) {
        console.error(exceptions_1.exceptions.errorDuringExecution + ": err");
        return null;
    }
};
var callRequestForSingleProxyObject = function (functionName, param, newObjectClass) { return __awaiter(_this, void 0, void 0, function () {
    var rawSQLresultRows, rawShipmentRow;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, callStandardApiFunctionSqlQuerryWithParams(functionName, [param])];
            case 1:
                rawSQLresultRows = _a.sent();
                rawShipmentRow = rawSQLresultRows.elems ? rawSQLresultRows.elems[0] : null;
                return [2 /*return*/, rawShipmentRow ? new newObjectClass(rawShipmentRow) : null];
        }
    });
}); };
var callRequestForMultipleProxyObject = function (functionName, ids, elemClass, listClass) { return __awaiter(_this, void 0, void 0, function () {
    var rawSQLresultRows, retVal;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, callStandardApiFunctionSqlQuerryWithParams(functionName, [
                    ids.elems,
                ])];
            case 1:
                rawSQLresultRows = _a.sent();
                retVal = rawSQLresultRows.elems.map(function (resultRow) { return new elemClass(resultRow); });
                return [2 /*return*/, retVal.length ? new listClass(retVal) : null];
        }
    });
}); };
var Base = /** @class */ (function () {
    function Base() {
        this.log = new Log_1.Log();
        //#endregion
    }
    //#region PROXY OBJECTS FACTORIES
    Base.prototype.createLongListProxy = function () {
        return new LongListProxy_1.LongListProxy();
    };
    Base.prototype.createListProxy = function (fullProxyTypeName) {
        if (fullProxyTypeName.includes('pl.axit.slang.proxy.')) {
            switch (fullProxyTypeName.split('.').pop()) {
                case 'ComplexShipmentProxy':
                    return new ComplexShipmentListProxy_1.ComplexShipmentListProxy();
                case 'ComplexTslotProxy':
                    return new ComplexTslotListProxy_1.ComplexTslotListProxy();
                case 'ComplexManifestProxy':
                    return new ComplexManifestListProxy_1.ComplexManifestListProxy();
                default:
                    throw Error(exceptions_1.exceptions.createListProxyNoTypeImplemented);
            }
        }
        else {
            throw Error(exceptions_1.exceptions.classNameNotExists(fullProxyTypeName));
        }
    };
    Base.prototype.getNewShipment = function () {
        return new ComplexShipmentProxy_1.ComplexShipmentProxy();
    };
    Base.prototype.getNewTimeslot = function () {
        return new ComplexTslotProxy_1.ComplexTslotProxy();
    };
    Base.prototype.getNewManifest = function () {
        return new ComplexManifestProxy_1.ComplexManifestProxy();
    };
    //#endregion
    //#region EXECUTIONERS
    Base.prototype.eval = function (expression) {
        return eval(expression);
    };
    Base.prototype.invokeProtected = function (scriptName, functionName, params) {
        var functionInvoker = new FunctionInvoker_1.FunctionInvoker(functionName);
        for (var i = 0; i < params.size(); i++) {
            functionInvoker = functionInvoker.param(params.get(i));
        }
        return functionInvoker.invoke();
    };
    Base.prototype.protectedScript = function () {
        throw new Error(exceptions_1.exceptions.notImplemented);
    };
    Base.prototype.protectedFunction = function (scriptName, functionName) {
        return new FunctionInvoker_1.FunctionInvoker(functionName);
    };
    //#endregion
    //#region DATABASE ACCESSORS
    //SHIPMENT API
    Base.prototype.getShipment = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, callRequestForSingleProxyObject('getShipment', id, ComplexShipmentProxy_1.ComplexShipmentProxy)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Base.prototype.getShipments = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, callRequestForMultipleProxyObject('getShipments', ids, ComplexShipmentProxy_1.ComplexShipmentProxy, ComplexShipmentListProxy_1.ComplexShipmentListProxy)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //TIMESLOT API
    Base.prototype.getTimeslot = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, callRequestForSingleProxyObject('getTimeslot', id, ComplexTslotProxy_1.ComplexTslotProxy)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Base.prototype.getTimeslots = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, callRequestForMultipleProxyObject('getTimeslots', ids, ComplexTslotProxy_1.ComplexTslotProxy, ComplexTslotListProxy_1.ComplexTslotListProxy)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //MANIFEST API
    Base.prototype.getManifest = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, callRequestForSingleProxyObject('getManifest', id, ComplexManifestProxy_1.ComplexManifestProxy)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    Base.prototype.getManifests = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, callRequestForMultipleProxyObject('getManifests', ids, ComplexManifestProxy_1.ComplexManifestProxy, ComplexManifestListProxy_1.ComplexManifestListProxy)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //#endregion
    //#region SOLUTION CONSTANTS ACCESSORS
    Base.prototype.getGroupId = function () {
        return groupId ? groupId : null;
    };
    Base.prototype.getCompanyId = function () {
        return companyId ? companyId : null;
    };
    Base.prototype.getSolutionId = function () {
        return solutionId ? solutionId : null;
    };
    Base.prototype.getLoggedInUser = function () {
        return loggedInUser ? new UserInfoDataProxy_1.UserInfoDataProxy(loggedInUser) : null;
    };
    return Base;
}());
exports.base = new Base();
//# sourceMappingURL=base.js.map