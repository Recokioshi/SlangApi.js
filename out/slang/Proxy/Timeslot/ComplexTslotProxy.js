"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var TslotDataProxy_1 = require("./TslotDataProxy");
var BaseProxyObject_1 = require("../Common/BaseProxyObject");
var GeneralSQLRow_1 = require("../../SQL Api/GeneralSQLRow");
var ComplexTslotProxy = /** @class */ (function (_super) {
    __extends(ComplexTslotProxy, _super);
    function ComplexTslotProxy(dbRow) {
        if (dbRow === void 0) { dbRow = new GeneralSQLRow_1.GeneralSQLRow({}); }
        var _this = _super.call(this, dbRow) || this;
        _this.bookerAddress = null;
        _this.bookerCompany = null;
        _this.details = new TslotDataProxy_1.TslotDataProxy(_this.sourceDbRow);
        _this.manifestIds = null;
        _this.observerAddresses = null;
        _this.observerCompanies = null;
        _this.ownerAddress = null;
        _this.ownerCompany = null;
        _this.scenarios = null;
        _this.shipmentIds = null;
        _this.mapSQLResultRowToProxy(_this, __dirname, 'ComplexTslotProxy');
        return _this;
    }
    ComplexTslotProxy.prototype.getBookerAddress = function () {
        return this.bookerAddress;
    };
    ComplexTslotProxy.prototype.setBookerAddress = function (bookerAddress) {
        this.bookerAddress = bookerAddress;
    };
    ComplexTslotProxy.prototype.getBookerCompany = function () {
        return this.bookerCompany;
    };
    ComplexTslotProxy.prototype.setBookerCompany = function (bookerCompany) {
        this.bookerCompany = bookerCompany;
    };
    ComplexTslotProxy.prototype.getDetails = function () {
        return this.details;
    };
    ComplexTslotProxy.prototype.setDetails = function (details) {
        this.details = details;
    };
    ComplexTslotProxy.prototype.getManifestIds = function () {
        return this.manifestIds;
    };
    ComplexTslotProxy.prototype.setManifestIds = function (manifestIds) {
        this.manifestIds = manifestIds;
    };
    ComplexTslotProxy.prototype.getObserverAddresses = function () {
        return this.observerAddresses;
    };
    ComplexTslotProxy.prototype.setObserverAddresses = function (observerAddresses) {
        this.observerAddresses = observerAddresses;
    };
    ComplexTslotProxy.prototype.getObserverCompanies = function () {
        return this.observerCompanies;
    };
    ComplexTslotProxy.prototype.setObserverCompanies = function (observerCompanies) {
        this.observerCompanies = observerCompanies;
    };
    ComplexTslotProxy.prototype.getOwnerAddress = function () {
        return this.ownerAddress;
    };
    ComplexTslotProxy.prototype.setOwnerAddress = function (ownerAddress) {
        this.ownerAddress = ownerAddress;
    };
    ComplexTslotProxy.prototype.getOwnerCompany = function () {
        return this.ownerCompany;
    };
    ComplexTslotProxy.prototype.setOwnerCompany = function (ownerCompany) {
        this.ownerCompany = ownerCompany;
    };
    ComplexTslotProxy.prototype.getScenarios = function () {
        return this.scenarios;
    };
    ComplexTslotProxy.prototype.setScenarios = function (scenarios) {
        this.scenarios = scenarios;
    };
    ComplexTslotProxy.prototype.getShipmentIds = function () {
        return this.shipmentIds;
    };
    ComplexTslotProxy.prototype.setShipmentIds = function (shipmentIds) {
        this.shipmentIds = shipmentIds;
    };
    return ComplexTslotProxy;
}(BaseProxyObject_1.BaseProxyObject));
exports.ComplexTslotProxy = ComplexTslotProxy;
//# sourceMappingURL=ComplexTslotProxy.js.map