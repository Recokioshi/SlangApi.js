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
var MFDocumentDataProxy_1 = require("./MFDocumentDataProxy");
var BaseProxyObject_1 = require("../Common/BaseProxyObject");
var GeneralSQLRow_1 = require("../../SQL Api/GeneralSQLRow");
var ComplexManifestProxy = /** @class */ (function (_super) {
    __extends(ComplexManifestProxy, _super);
    function ComplexManifestProxy(dbRow) {
        if (dbRow === void 0) { dbRow = new GeneralSQLRow_1.GeneralSQLRow({}); }
        var _this = _super.call(this, dbRow) || this;
        _this.additionalAddress = null;
        _this.carrierAddress = null;
        _this.carrierCompany = null;
        _this.container = null;
        _this.creatorAddress = null;
        _this.creatorCompany = null;
        _this.currentLocationAddress = null;
        _this.deliveryAddress = null;
        _this.details = new MFDocumentDataProxy_1.MFDocumentDataProxy(_this.sourceDbRow);
        _this.dispatcherAddress = null;
        _this.dispatcherCompany = null;
        _this.ftxFieldsList = null;
        _this.modifierAddress = null;
        _this.modifierCompany = null;
        _this.observerCompanies = null;
        _this.openPartnerAddresses = null;
        _this.openPartnerCompanies = null;
        _this.pickUpAddress = null;
        _this.receivingAgentCompany = null;
        _this.receivingForwarderAddress = null;
        _this.shipmentIds = null;
        _this.trailer = null;
        _this.vehicle = null;
        _this.mapSQLResultRowToProxy(_this, __dirname, 'ComplexManifestProxy');
        return _this;
    }
    ComplexManifestProxy.prototype.getAdditionalAddress = function () {
        return this.additionalAddress;
    };
    ComplexManifestProxy.prototype.setAdditionalAddress = function (additionalAddress) {
        this.additionalAddress = additionalAddress;
    };
    ComplexManifestProxy.prototype.getCarrierAddress = function () {
        return this.carrierAddress;
    };
    ComplexManifestProxy.prototype.setCarrierAddress = function (carrierAddress) {
        this.carrierAddress = carrierAddress;
    };
    ComplexManifestProxy.prototype.getCarrierCompany = function () {
        return this.carrierCompany;
    };
    ComplexManifestProxy.prototype.setCarrierCompany = function (carrierCompany) {
        this.carrierCompany = carrierCompany;
    };
    ComplexManifestProxy.prototype.getContainer = function () {
        return this.container;
    };
    ComplexManifestProxy.prototype.setContainer = function (container) {
        this.container = container;
    };
    ComplexManifestProxy.prototype.getCreatorAddress = function () {
        return this.creatorAddress;
    };
    ComplexManifestProxy.prototype.setCreatorAddress = function (creatorAddress) {
        this.creatorAddress = creatorAddress;
    };
    ComplexManifestProxy.prototype.getCreatorCompany = function () {
        return this.creatorCompany;
    };
    ComplexManifestProxy.prototype.setCreatorCompany = function (creatorCompany) {
        this.creatorCompany = creatorCompany;
    };
    ComplexManifestProxy.prototype.getCurrentLocationAddress = function () {
        return this.currentLocationAddress;
    };
    ComplexManifestProxy.prototype.setCurrentLocationAddress = function (currentLocationAddress) {
        this.currentLocationAddress = currentLocationAddress;
    };
    ComplexManifestProxy.prototype.getDeliveryAddress = function () {
        return this.deliveryAddress;
    };
    ComplexManifestProxy.prototype.setDeliveryAddress = function (deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    };
    ComplexManifestProxy.prototype.getDetails = function () {
        return this.details;
    };
    ComplexManifestProxy.prototype.setDetails = function (details) {
        this.details = details;
    };
    ComplexManifestProxy.prototype.getDispatcherAddress = function () {
        return this.dispatcherAddress;
    };
    ComplexManifestProxy.prototype.setDispatcherAddress = function (dispatcherAddress) {
        this.dispatcherAddress = dispatcherAddress;
    };
    ComplexManifestProxy.prototype.getDispatcherCompany = function () {
        return this.dispatcherCompany;
    };
    ComplexManifestProxy.prototype.setDispatcherCompany = function (dispatcherCompany) {
        this.dispatcherCompany = dispatcherCompany;
    };
    ComplexManifestProxy.prototype.getFtxFieldsList = function () {
        return this.ftxFieldsList;
    };
    ComplexManifestProxy.prototype.setFtxFieldsList = function (ftxFieldsList) {
        this.ftxFieldsList = ftxFieldsList;
    };
    ComplexManifestProxy.prototype.getModifierAddress = function () {
        return this.modifierAddress;
    };
    ComplexManifestProxy.prototype.setModifierAddress = function (modifierAddress) {
        this.modifierAddress = modifierAddress;
    };
    ComplexManifestProxy.prototype.getModifierCompany = function () {
        return this.modifierCompany;
    };
    ComplexManifestProxy.prototype.setModifierCompany = function (modifierCompany) {
        this.modifierCompany = modifierCompany;
    };
    ComplexManifestProxy.prototype.getObserverCompanies = function () {
        return this.observerCompanies;
    };
    ComplexManifestProxy.prototype.setObserverCompanies = function (observerCompanies) {
        this.observerCompanies = observerCompanies;
    };
    ComplexManifestProxy.prototype.getOpenPartnerAddresses = function () {
        return this.openPartnerAddresses;
    };
    ComplexManifestProxy.prototype.setOpenPartnerAddresses = function (openPartnerAddresses) {
        this.openPartnerAddresses = openPartnerAddresses;
    };
    ComplexManifestProxy.prototype.getOpenPartnerCompanies = function () {
        return this.openPartnerCompanies;
    };
    ComplexManifestProxy.prototype.setOpenPartnerCompanies = function (openPartnerCompanies) {
        this.openPartnerCompanies = openPartnerCompanies;
    };
    ComplexManifestProxy.prototype.getPickUpAddress = function () {
        return this.pickUpAddress;
    };
    ComplexManifestProxy.prototype.setPickUpAddress = function (pickUpAddress) {
        this.pickUpAddress = pickUpAddress;
    };
    ComplexManifestProxy.prototype.getReceivingAgentCompany = function () {
        return this.receivingAgentCompany;
    };
    ComplexManifestProxy.prototype.setReceivingAgentCompany = function (receivingAgentCompany) {
        this.receivingAgentCompany = receivingAgentCompany;
    };
    ComplexManifestProxy.prototype.getReceivingForwarderAddress = function () {
        return this.receivingForwarderAddress;
    };
    ComplexManifestProxy.prototype.setReceivingForwarderAddress = function (receivingForwarderAddress) {
        this.receivingForwarderAddress = receivingForwarderAddress;
    };
    ComplexManifestProxy.prototype.getShipmentIds = function () {
        return this.shipmentIds;
    };
    ComplexManifestProxy.prototype.setShipmentIds = function (shipmentIds) {
        this.shipmentIds = shipmentIds;
    };
    ComplexManifestProxy.prototype.getTrailer = function () {
        return this.trailer;
    };
    ComplexManifestProxy.prototype.setTrailer = function (trailer) {
        this.trailer = trailer;
    };
    ComplexManifestProxy.prototype.getVehicle = function () {
        return this.vehicle;
    };
    ComplexManifestProxy.prototype.setVehicle = function (vehicle) {
        this.vehicle = vehicle;
    };
    return ComplexManifestProxy;
}(BaseProxyObject_1.BaseProxyObject));
exports.ComplexManifestProxy = ComplexManifestProxy;
//# sourceMappingURL=ComplexManifestProxy.js.map