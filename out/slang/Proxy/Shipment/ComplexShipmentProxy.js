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
var ShipmentDataProxy_1 = require("./ShipmentDataProxy");
var GeneralSQLRow_1 = require("../../SQL Api/GeneralSQLRow");
var BaseProxyObject_1 = require("../Common/BaseProxyObject");
var ComplexShipmentProxy = /** @class */ (function (_super) {
    __extends(ComplexShipmentProxy, _super);
    function ComplexShipmentProxy(dbRow) {
        if (dbRow === void 0) { dbRow = new GeneralSQLRow_1.GeneralSQLRow({}); }
        var _this = _super.call(this, dbRow) || this;
        _this.addressesValidationResult = null;
        _this.controltowerAddresses = null;
        _this.controltowerCompanies = null;
        _this.details = new ShipmentDataProxy_1.ShipmentDataProxy(_this.sourceDbRow);
        _this.forwarderCompany = null;
        _this.ftxFieldsList = null;
        _this.openPartnerAddresses = null;
        _this.openPartnerCompanies = null;
        _this.packerCompany = null;
        _this.partnerAddresses = null;
        _this.partnerCompanies = null;
        _this.positions = null;
        _this.receiverCompany = null;
        _this.routeFields = null;
        _this.senderCompany = null;
        _this.transportCompany = null;
        _this.mapSQLResultRowToProxy(_this, __dirname, 'ComplexShipmentProxy');
        return _this;
    }
    ComplexShipmentProxy.prototype.getAddressesValidationResult = function () {
        return this.addressesValidationResult;
    };
    ComplexShipmentProxy.prototype.setAddressesValidationResult = function (addressesValidationResult) {
        this.addressesValidationResult = addressesValidationResult;
    };
    ComplexShipmentProxy.prototype.getControltowerAddresses = function () {
        return this.controltowerAddresses;
    };
    ComplexShipmentProxy.prototype.setControltowerAddresses = function (controltowerAddresses) {
        this.controltowerAddresses = controltowerAddresses;
    };
    ComplexShipmentProxy.prototype.getControltowerCompanies = function () {
        return this.controltowerCompanies;
    };
    ComplexShipmentProxy.prototype.setControltowerCompanies = function (controltowerCompanies) {
        this.controltowerCompanies = controltowerCompanies;
    };
    ComplexShipmentProxy.prototype.getDetails = function () {
        return this.details;
    };
    ComplexShipmentProxy.prototype.setDetails = function (details) {
        this.details = details;
    };
    ComplexShipmentProxy.prototype.getForwarderCompany = function () {
        return this.forwarderCompany;
    };
    ComplexShipmentProxy.prototype.setForwarderCompany = function (forwarderCompany) {
        this.forwarderCompany = forwarderCompany;
    };
    ComplexShipmentProxy.prototype.getFtxFieldsList = function () {
        return this.ftxFieldsList;
    };
    ComplexShipmentProxy.prototype.setFtxFieldsList = function (ftxFieldsList) {
        this.ftxFieldsList = ftxFieldsList;
    };
    ComplexShipmentProxy.prototype.getOpenPartnerAddresses = function () {
        return this.openPartnerAddresses;
    };
    ComplexShipmentProxy.prototype.setOpenPartnerAddresses = function (openPartnerAddresses) {
        this.openPartnerAddresses = openPartnerAddresses;
    };
    ComplexShipmentProxy.prototype.getOpenPartnerCompanies = function () {
        return this.openPartnerCompanies;
    };
    ComplexShipmentProxy.prototype.setOpenPartnerCompanies = function (openPartnerCompanies) {
        this.openPartnerCompanies = openPartnerCompanies;
    };
    ComplexShipmentProxy.prototype.getPackerCompany = function () {
        return this.packerCompany;
    };
    ComplexShipmentProxy.prototype.setPackerCompany = function (packerCompany) {
        this.packerCompany = packerCompany;
    };
    ComplexShipmentProxy.prototype.getPartnerAddresses = function () {
        return this.partnerAddresses;
    };
    ComplexShipmentProxy.prototype.setPartnerAddresses = function (partnerAddresses) {
        this.partnerAddresses = partnerAddresses;
    };
    ComplexShipmentProxy.prototype.getPartnerCompanies = function () {
        return this.partnerCompanies;
    };
    ComplexShipmentProxy.prototype.setPartnerCompanies = function (partnerCompanies) {
        this.partnerCompanies = partnerCompanies;
    };
    ComplexShipmentProxy.prototype.getPositions = function () {
        return this.positions;
    };
    ComplexShipmentProxy.prototype.setPositions = function (positions) {
        this.positions = positions;
    };
    ComplexShipmentProxy.prototype.getReceiverCompany = function () {
        return this.receiverCompany;
    };
    ComplexShipmentProxy.prototype.setReceiverCompany = function (receiverCompany) {
        this.receiverCompany = receiverCompany;
    };
    ComplexShipmentProxy.prototype.getRouteFields = function () {
        return this.routeFields;
    };
    ComplexShipmentProxy.prototype.setRouteFields = function (routeFields) {
        this.routeFields = routeFields;
    };
    ComplexShipmentProxy.prototype.getSenderCompany = function () {
        return this.senderCompany;
    };
    ComplexShipmentProxy.prototype.setSenderCompany = function (senderCompany) {
        this.senderCompany = senderCompany;
    };
    ComplexShipmentProxy.prototype.getTransportCompany = function () {
        return this.transportCompany;
    };
    ComplexShipmentProxy.prototype.setTransportCompany = function (transportCompany) {
        this.transportCompany = transportCompany;
    };
    return ComplexShipmentProxy;
}(BaseProxyObject_1.BaseProxyObject));
exports.ComplexShipmentProxy = ComplexShipmentProxy;
//# sourceMappingURL=ComplexShipmentProxy.js.map