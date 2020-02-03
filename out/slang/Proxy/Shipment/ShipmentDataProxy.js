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
var BaseProxyObject_1 = require("../Common/BaseProxyObject");
var ShipmentDataProxy = /** @class */ (function (_super) {
    __extends(ShipmentDataProxy, _super);
    function ShipmentDataProxy(dbRow) {
        var _this = _super.call(this, dbRow) || this;
        _this.COD = null;
        _this.CODCurrency = null;
        _this.EUR1Nr = null;
        _this.PODBarcode = null;
        _this.PODQuantity = null;
        _this.PODReason = null;
        _this.PODStatus = null;
        _this.addService = null;
        _this.additionalRemarks1 = null;
        _this.additionalRemarks2 = null;
        _this.additionalRemarks3 = null;
        _this.additionalService2 = null;
        _this.aeNr = null;
        _this.agreedRate = null;
        _this.agreedRateCurrency = null;
        _this.akmNr = null;
        _this.arrangeDelivery = null;
        _this.asnShipment = null;
        _this.ataDate = null;
        _this.ataTime = null;
        _this.atdDate = null;
        _this.atdTime = null;
        _this.billingAddress = null;
        _this.bookingReason = null;
        _this.bookingStatus = null;
        _this.cargoValue = null;
        _this.cargoValueCurrency = null;
        _this.cashOnDelivery = null;
        _this.cashOnDeliveryThirdParty = null;
        _this.cashOnDeliveryThirdPartyCountry = null;
        _this.cashOnPlace = null;
        _this.cepDocumentId = null;
        _this.cepServiceCode = null;
        _this.cepServiceName = null;
        _this.cepServiceOptions = null;
        _this.certificateOfOriginNr = null;
        _this.chargeableWeight = null;
        _this.checkbox01 = null;
        _this.checkbox02 = null;
        _this.checkbox03 = null;
        _this.checkbox04 = null;
        _this.checkbox05 = null;
        _this.checkbox06 = null;
        _this.checkbox07 = null;
        _this.checkbox08 = null;
        _this.checkbox09 = null;
        _this.checkbox10 = null;
        _this.completeDelivery = null;
        _this.completionDate = null;
        _this.completionTime = null;
        _this.consigneeSeaport = null;
        _this.consignorAddress = null;
        _this.consolidated = null;
        _this.costs = null;
        _this.creationDate = null;
        _this.ctaDate = null;
        _this.ctaTime = null;
        _this.currShipmentId = null;
        _this.currentLocation = null;
        _this.custReference1 = null;
        _this.custReference10 = null;
        _this.custReference2 = null;
        _this.custReference3 = null;
        _this.custReference4 = null;
        _this.custReference5 = null;
        _this.custReference6 = null;
        _this.custReference7 = null;
        _this.custReference8 = null;
        _this.custReference9 = null;
        _this.customerVersion = null;
        _this.customerVersionDate = null;
        _this.customerVersionModDate = null;
        _this.customsCargoCurrency = null;
        _this.customsCargoValue = null;
        _this.customsCertificateOfOrigin = null;
        _this.customsEUR1 = null;
        _this.customsNoPreference = null;
        _this.customsRemarks = null;
        _this.customsValue = null;
        _this.customsValueCurrency = null;
        _this.dangerGoodsDeclaration = null;
        _this.dangerGoodsLabel = null;
        _this.dangergoodsLanguage = null;
        _this.date01 = null;
        _this.date02 = null;
        _this.date03 = null;
        _this.date04 = null;
        _this.date05 = null;
        _this.date06 = null;
        _this.date07 = null;
        _this.date08 = null;
        _this.date09 = null;
        _this.date10 = null;
        _this.declaredPositionsQuantity = null;
        _this.declaredPositionsVolume = null;
        _this.declaredPositionsWeight = null;
        _this.delay = null;
        _this.delayReason = null;
        _this.delayStatusFlag = null;
        _this.deliveredBy = null;
        _this.deliveryInstruction = null;
        _this.departureSeaport = null;
        _this.destinationAirport = null;
        _this.detachedReason = null;
        _this.detachedStatus = null;
        _this.directLoading = null;
        _this.distributionCode = null;
        _this.documents = null;
        _this.draftName = null;
        _this.etaDate = null;
        _this.externalDocExists = null;
        _this.finalDestReachedFlag = null;
        _this.flightNr = null;
        _this.freeText1 = null;
        _this.freeText2 = null;
        _this.freeText3 = null;
        _this.freeTextDictionary1 = null;
        _this.freeTextDictionary10 = null;
        _this.freeTextDictionary11 = null;
        _this.freeTextDictionary12 = null;
        _this.freeTextDictionary13 = null;
        _this.freeTextDictionary14 = null;
        _this.freeTextDictionary15 = null;
        _this.freeTextDictionary16 = null;
        _this.freeTextDictionary17 = null;
        _this.freeTextDictionary18 = null;
        _this.freeTextDictionary19 = null;
        _this.freeTextDictionary2 = null;
        _this.freeTextDictionary20 = null;
        _this.freeTextDictionary21 = null;
        _this.freeTextDictionary22 = null;
        _this.freeTextDictionary23 = null;
        _this.freeTextDictionary24 = null;
        _this.freeTextDictionary25 = null;
        _this.freeTextDictionary26 = null;
        _this.freeTextDictionary27 = null;
        _this.freeTextDictionary28 = null;
        _this.freeTextDictionary29 = null;
        _this.freeTextDictionary3 = null;
        _this.freeTextDictionary30 = null;
        _this.freeTextDictionary31 = null;
        _this.freeTextDictionary32 = null;
        _this.freeTextDictionary33 = null;
        _this.freeTextDictionary34 = null;
        _this.freeTextDictionary35 = null;
        _this.freeTextDictionary36 = null;
        _this.freeTextDictionary37 = null;
        _this.freeTextDictionary38 = null;
        _this.freeTextDictionary39 = null;
        _this.freeTextDictionary4 = null;
        _this.freeTextDictionary40 = null;
        _this.freeTextDictionary41 = null;
        _this.freeTextDictionary42 = null;
        _this.freeTextDictionary43 = null;
        _this.freeTextDictionary44 = null;
        _this.freeTextDictionary45 = null;
        _this.freeTextDictionary46 = null;
        _this.freeTextDictionary47 = null;
        _this.freeTextDictionary48 = null;
        _this.freeTextDictionary49 = null;
        _this.freeTextDictionary5 = null;
        _this.freeTextDictionary50 = null;
        _this.freeTextDictionary6 = null;
        _this.freeTextDictionary7 = null;
        _this.freeTextDictionary8 = null;
        _this.freeTextDictionary9 = null;
        _this.freeTextLanguage = null;
        _this.freight = null;
        _this.goodCategory = null;
        _this.goodsAreDocuments = null;
        _this.goodsDescription = null;
        _this.hawbNr = null;
        _this.id = null;
        _this.insurance = null;
        _this.insuranceCurrency = null;
        _this.intNumber01 = null;
        _this.intNumber02 = null;
        _this.intNumber03 = null;
        _this.intNumber04 = null;
        _this.intNumber05 = null;
        _this.intNumber06 = null;
        _this.intNumber07 = null;
        _this.intNumber08 = null;
        _this.intNumber09 = null;
        _this.intNumber10 = null;
        _this.labelForm = null;
        _this.lastModificationDate = null;
        _this.lastStatusLocation = null;
        _this.lcNr = null;
        _this.linkParameter = null;
        _this.loadingListId = null;
        _this.loadingType = null;
        _this.locationStatus = null;
        _this.longReference01 = null;
        _this.longReference02 = null;
        _this.longReference03 = null;
        _this.longReference04 = null;
        _this.longReference05 = null;
        _this.longReference06 = null;
        _this.longReference07 = null;
        _this.longReference08 = null;
        _this.longReference09 = null;
        _this.longReference10 = null;
        _this.longReference11 = null;
        _this.longReference12 = null;
        _this.longReference13 = null;
        _this.longReference14 = null;
        _this.longReference15 = null;
        _this.longReference16 = null;
        _this.longReference17 = null;
        _this.longReference18 = null;
        _this.longReference19 = null;
        _this.longReference20 = null;
        _this.longReference21 = null;
        _this.longReference22 = null;
        _this.longReference23 = null;
        _this.longReference24 = null;
        _this.longReference25 = null;
        _this.mawbNr = null;
        _this.missingTschedReason = null;
        _this.missingTschedStatus = null;
        _this.monitorState3 = null;
        _this.monitorState4 = null;
        _this.nahverkehrsTourNr = null;
        _this.neutralAddress = null;
        _this.neutralize = null;
        _this.notifyAddress = null;
        _this.notifyAddress2 = null;
        _this.nptaDate = null;
        _this.nptaTime = null;
        _this.numberOfLoadingPositions = null;
        _this.onHold = null;
        _this.optionalCollectionAddress = null;
        _this.optionalReceiverAddress = null;
        _this.packerAddress = null;
        _this.paymentType = null;
        _this.positionsDimWeight = null;
        _this.positionsLiter = null;
        _this.positionsLoadingMeters = null;
        _this.positionsPayableLoadingMeters = null;
        _this.positionsPayableLoadingMeters2 = null;
        _this.positionsQuantity = null;
        _this.positionsVolume = null;
        _this.positionsWeight = null;
        _this.preferredDelivery = null;
        _this.priority = null;
        _this.problemWithDeliveryReason = null;
        _this.problemWithDeliveryStatus = null;
        _this.propagationDeactivated = null;
        _this.realNumber01 = null;
        _this.realNumber02 = null;
        _this.realNumber03 = null;
        _this.realNumber04 = null;
        _this.realNumber05 = null;
        _this.realNumber06 = null;
        _this.realNumber07 = null;
        _this.realNumber08 = null;
        _this.realNumber09 = null;
        _this.realNumber10 = null;
        _this.reasonLast = null;
        _this.receiptDate = null;
        _this.receiptDateTo = null;
        _this.receiptSpecification = null;
        _this.receiptTime = null;
        _this.receiverAddress = null;
        _this.reference1 = null;
        _this.reference2 = null;
        _this.reference2Dict = null;
        _this.reference3 = null;
        _this.reference4 = null;
        _this.remarks1 = null;
        _this.remarks2 = null;
        _this.remarks3 = null;
        _this.remarksDictionary1 = null;
        _this.remarksDictionary2 = null;
        _this.remarksDictionary3 = null;
        _this.requestedReceiptDate = null;
        _this.requestedReceiptSpecification = null;
        _this.requestedReceiptTime = null;
        _this.requestedReceiptTimeTo = null;
        _this.requestedSupplyDate = null;
        _this.requestedSupplySpecification = null;
        _this.requestedSupplyTime = null;
        _this.requestedSupplyTimeTo = null;
        _this.returnDocuments = null;
        _this.route = null;
        _this.routingConstraintName = null;
        _this.saturdayDelivery = null;
        _this.saturdayPickup = null;
        _this.selfReceipt = null;
        _this.selfWithdraw = null;
        _this.sendDate = null;
        _this.senderAddress = null;
        _this.senderEmail = null;
        _this.senderFax = null;
        _this.senderName = null;
        _this.senderPhoneNr = null;
        _this.serverName = null;
        _this.service = null;
        _this.shippingLine = null;
        _this.shortReference01 = null;
        _this.shortReference02 = null;
        _this.shortReference03 = null;
        _this.shortReference04 = null;
        _this.shortReference05 = null;
        _this.shortReference06 = null;
        _this.shortReference07 = null;
        _this.shortReference08 = null;
        _this.shortReference09 = null;
        _this.shortReference10 = null;
        _this.shortReference11 = null;
        _this.shortReference12 = null;
        _this.shortReference13 = null;
        _this.shortReference14 = null;
        _this.shortReference15 = null;
        _this.shortReference16 = null;
        _this.shortReference17 = null;
        _this.shortReference18 = null;
        _this.shortReference19 = null;
        _this.shortReference20 = null;
        _this.shortReference21 = null;
        _this.shortReference22 = null;
        _this.shortReference23 = null;
        _this.shortReference24 = null;
        _this.shortReference25 = null;
        _this.slvs = null;
        _this.solutionId = null;
        _this.spedShipmentId = null;
        _this.stackable = null;
        _this.state = null;
        _this.state3 = null;
        _this.state4 = null;
        _this.statusDateLast = null;
        _this.statusLast = null;
        _this.statusSystemDateLast = null;
        _this.stoppageTime = null;
        _this.supplierNr = null;
        _this.supplyDate = null;
        _this.supplyDateTo = null;
        _this.supplySpecification = null;
        _this.supplyTime = null;
        _this.systemCreateDate = null;
        _this.systemLastModificationDate = null;
        _this.templateType = null;
        _this.time01 = null;
        _this.time02 = null;
        _this.time03 = null;
        _this.time04 = null;
        _this.time05 = null;
        _this.time06 = null;
        _this.time07 = null;
        _this.time08 = null;
        _this.time09 = null;
        _this.time10 = null;
        _this.toTheDebitOf = null;
        _this.toleranceLevel1 = null;
        _this.toleranceLevel2 = null;
        _this.toleranceLevel3 = null;
        _this.tourNrSequence = null;
        _this.transportAddress = null;
        _this.transportInsurance = null;
        _this.transportStage = null;
        _this.transportState = null;
        _this.transportVehicle = null;
        _this.type = null;
        _this.typeOfReference = null;
        _this.typeofDocument = null;
        _this.upsAccount = null;
        _this.upsBilling = null;
        _this.upsCOD = null;
        _this.upsDocType = null;
        _this.upsPostalCode = null;
        _this.valid = null;
        _this.vesselDepartureDate = null;
        _this.vesselName = null;
        _this.viewed = null;
        _this.voyageNr = null;
        _this.wholeValid = null;
        _this.worth = null;
        _this.worthCurrency = null;
        _this.zoll = null;
        _this.mapSQLResultRowToProxy(_this, __dirname, 'ShipmentDataProxy');
        return _this;
    }
    ShipmentDataProxy.prototype.isCOD = function () {
        return this.COD;
    };
    ShipmentDataProxy.prototype.setCOD = function (COD) {
        this.COD = COD;
    };
    ShipmentDataProxy.prototype.getCODCurrency = function () {
        return this.CODCurrency;
    };
    ShipmentDataProxy.prototype.setCODCurrency = function (CODCurrency) {
        this.CODCurrency = CODCurrency;
    };
    ShipmentDataProxy.prototype.getEUR1Nr = function () {
        return this.EUR1Nr;
    };
    ShipmentDataProxy.prototype.setEUR1Nr = function (EUR1Nr) {
        this.EUR1Nr = EUR1Nr;
    };
    ShipmentDataProxy.prototype.getPODBarcode = function () {
        return this.PODBarcode;
    };
    ShipmentDataProxy.prototype.setPODBarcode = function (PODBarcode) {
        this.PODBarcode = PODBarcode;
    };
    ShipmentDataProxy.prototype.getPODQuantity = function () {
        return this.PODQuantity;
    };
    ShipmentDataProxy.prototype.setPODQuantity = function (PODQuantity) {
        this.PODQuantity = PODQuantity;
    };
    ShipmentDataProxy.prototype.getPODReason = function () {
        return this.PODReason;
    };
    ShipmentDataProxy.prototype.setPODReason = function (PODReason) {
        this.PODReason = PODReason;
    };
    ShipmentDataProxy.prototype.getPODStatus = function () {
        return this.PODStatus;
    };
    ShipmentDataProxy.prototype.setPODStatus = function (PODStatus) {
        this.PODStatus = PODStatus;
    };
    ShipmentDataProxy.prototype.getAddService = function () {
        return this.addService;
    };
    ShipmentDataProxy.prototype.setAddService = function (addService) {
        this.addService = addService;
    };
    ShipmentDataProxy.prototype.getAdditionalRemarks1 = function () {
        return this.additionalRemarks1;
    };
    ShipmentDataProxy.prototype.setAdditionalRemarks1 = function (additionalRemarks1) {
        this.additionalRemarks1 = additionalRemarks1;
    };
    ShipmentDataProxy.prototype.getAdditionalRemarks2 = function () {
        return this.additionalRemarks2;
    };
    ShipmentDataProxy.prototype.setAdditionalRemarks2 = function (additionalRemarks2) {
        this.additionalRemarks2 = additionalRemarks2;
    };
    ShipmentDataProxy.prototype.getAdditionalRemarks3 = function () {
        return this.additionalRemarks3;
    };
    ShipmentDataProxy.prototype.setAdditionalRemarks3 = function (additionalRemarks3) {
        this.additionalRemarks3 = additionalRemarks3;
    };
    ShipmentDataProxy.prototype.getAdditionalService2 = function () {
        return this.additionalService2;
    };
    ShipmentDataProxy.prototype.setAdditionalService2 = function (additionalService2) {
        this.additionalService2 = additionalService2;
    };
    ShipmentDataProxy.prototype.getAeNr = function () {
        return this.aeNr;
    };
    ShipmentDataProxy.prototype.setAeNr = function (aeNr) {
        this.aeNr = aeNr;
    };
    ShipmentDataProxy.prototype.getAgreedRate = function () {
        return this.agreedRate;
    };
    ShipmentDataProxy.prototype.setAgreedRate = function (agreedRate) {
        this.agreedRate = agreedRate;
    };
    ShipmentDataProxy.prototype.getAgreedRateCurrency = function () {
        return this.agreedRateCurrency;
    };
    ShipmentDataProxy.prototype.setAgreedRateCurrency = function (agreedRateCurrency) {
        this.agreedRateCurrency = agreedRateCurrency;
    };
    ShipmentDataProxy.prototype.getAkmNr = function () {
        return this.akmNr;
    };
    ShipmentDataProxy.prototype.setAkmNr = function (akmNr) {
        this.akmNr = akmNr;
    };
    ShipmentDataProxy.prototype.isArrangeDelivery = function () {
        return this.arrangeDelivery;
    };
    ShipmentDataProxy.prototype.setArrangeDelivery = function (arrangeDelivery) {
        this.arrangeDelivery = arrangeDelivery;
    };
    ShipmentDataProxy.prototype.getAsnShipment = function () {
        return this.asnShipment;
    };
    ShipmentDataProxy.prototype.setAsnShipment = function (asnShipment) {
        this.asnShipment = asnShipment;
    };
    ShipmentDataProxy.prototype.getAtaDate = function () {
        return this.ataDate;
    };
    ShipmentDataProxy.prototype.setAtaDate = function (ataDate) {
        this.ataDate = ataDate;
    };
    ShipmentDataProxy.prototype.getAtaTime = function () {
        return this.ataTime;
    };
    ShipmentDataProxy.prototype.setAtaTime = function (ataTime) {
        this.ataTime = ataTime;
    };
    ShipmentDataProxy.prototype.getAtdDate = function () {
        return this.atdDate;
    };
    ShipmentDataProxy.prototype.setAtdDate = function (atdDate) {
        this.atdDate = atdDate;
    };
    ShipmentDataProxy.prototype.getAtdTime = function () {
        return this.atdTime;
    };
    ShipmentDataProxy.prototype.setAtdTime = function (atdTime) {
        this.atdTime = atdTime;
    };
    ShipmentDataProxy.prototype.getBillingAddress = function () {
        return this.billingAddress;
    };
    ShipmentDataProxy.prototype.setBillingAddress = function (billingAddress) {
        this.billingAddress = billingAddress;
    };
    ShipmentDataProxy.prototype.getBookingReason = function () {
        return this.bookingReason;
    };
    ShipmentDataProxy.prototype.setBookingReason = function (bookingReason) {
        this.bookingReason = bookingReason;
    };
    ShipmentDataProxy.prototype.getBookingStatus = function () {
        return this.bookingStatus;
    };
    ShipmentDataProxy.prototype.setBookingStatus = function (bookingStatus) {
        this.bookingStatus = bookingStatus;
    };
    ShipmentDataProxy.prototype.getCargoValue = function () {
        return this.cargoValue;
    };
    ShipmentDataProxy.prototype.setCargoValue = function (cargoValue) {
        this.cargoValue = cargoValue;
    };
    ShipmentDataProxy.prototype.getCargoValueCurrency = function () {
        return this.cargoValueCurrency;
    };
    ShipmentDataProxy.prototype.setCargoValueCurrency = function (cargoValueCurrency) {
        this.cargoValueCurrency = cargoValueCurrency;
    };
    ShipmentDataProxy.prototype.getCashOnDelivery = function () {
        return this.cashOnDelivery;
    };
    ShipmentDataProxy.prototype.setCashOnDelivery = function (cashOnDelivery) {
        this.cashOnDelivery = cashOnDelivery;
    };
    ShipmentDataProxy.prototype.getCashOnDeliveryThirdParty = function () {
        return this.cashOnDeliveryThirdParty;
    };
    ShipmentDataProxy.prototype.setCashOnDeliveryThirdParty = function (cashOnDeliveryThirdParty) {
        this.cashOnDeliveryThirdParty = cashOnDeliveryThirdParty;
    };
    ShipmentDataProxy.prototype.getCashOnDeliveryThirdPartyCountry = function () {
        return this.cashOnDeliveryThirdPartyCountry;
    };
    ShipmentDataProxy.prototype.setCashOnDeliveryThirdPartyCountry = function (cashOnDeliveryThirdPartyCountry) {
        this.cashOnDeliveryThirdPartyCountry = cashOnDeliveryThirdPartyCountry;
    };
    ShipmentDataProxy.prototype.getCashOnPlace = function () {
        return this.cashOnPlace;
    };
    ShipmentDataProxy.prototype.setCashOnPlace = function (cashOnPlace) {
        this.cashOnPlace = cashOnPlace;
    };
    ShipmentDataProxy.prototype.getCepDocumentId = function () {
        return this.cepDocumentId;
    };
    ShipmentDataProxy.prototype.setCepDocumentId = function (cepDocumentId) {
        this.cepDocumentId = cepDocumentId;
    };
    ShipmentDataProxy.prototype.getCepServiceCode = function () {
        return this.cepServiceCode;
    };
    ShipmentDataProxy.prototype.setCepServiceCode = function (cepServiceCode) {
        this.cepServiceCode = cepServiceCode;
    };
    ShipmentDataProxy.prototype.getCepServiceName = function () {
        return this.cepServiceName;
    };
    ShipmentDataProxy.prototype.setCepServiceName = function (cepServiceName) {
        this.cepServiceName = cepServiceName;
    };
    ShipmentDataProxy.prototype.getCepServiceOptions = function () {
        return this.cepServiceOptions;
    };
    ShipmentDataProxy.prototype.setCepServiceOptions = function (cepServiceOptions) {
        this.cepServiceOptions = cepServiceOptions;
    };
    ShipmentDataProxy.prototype.getCertificateOfOriginNr = function () {
        return this.certificateOfOriginNr;
    };
    ShipmentDataProxy.prototype.setCertificateOfOriginNr = function (certificateOfOriginNr) {
        this.certificateOfOriginNr = certificateOfOriginNr;
    };
    ShipmentDataProxy.prototype.getChargeableWeight = function () {
        return this.chargeableWeight;
    };
    ShipmentDataProxy.prototype.setChargeableWeight = function (chargeableWeight) {
        this.chargeableWeight = chargeableWeight;
    };
    ShipmentDataProxy.prototype.isCheckbox01 = function () {
        return this.checkbox01;
    };
    ShipmentDataProxy.prototype.setCheckbox01 = function (checkbox01) {
        this.checkbox01 = checkbox01;
    };
    ShipmentDataProxy.prototype.isCheckbox02 = function () {
        return this.checkbox02;
    };
    ShipmentDataProxy.prototype.setCheckbox02 = function (checkbox02) {
        this.checkbox02 = checkbox02;
    };
    ShipmentDataProxy.prototype.isCheckbox03 = function () {
        return this.checkbox03;
    };
    ShipmentDataProxy.prototype.setCheckbox03 = function (checkbox03) {
        this.checkbox03 = checkbox03;
    };
    ShipmentDataProxy.prototype.isCheckbox04 = function () {
        return this.checkbox04;
    };
    ShipmentDataProxy.prototype.setCheckbox04 = function (checkbox04) {
        this.checkbox04 = checkbox04;
    };
    ShipmentDataProxy.prototype.isCheckbox05 = function () {
        return this.checkbox05;
    };
    ShipmentDataProxy.prototype.setCheckbox05 = function (checkbox05) {
        this.checkbox05 = checkbox05;
    };
    ShipmentDataProxy.prototype.isCheckbox06 = function () {
        return this.checkbox06;
    };
    ShipmentDataProxy.prototype.setCheckbox06 = function (checkbox06) {
        this.checkbox06 = checkbox06;
    };
    ShipmentDataProxy.prototype.isCheckbox07 = function () {
        return this.checkbox07;
    };
    ShipmentDataProxy.prototype.setCheckbox07 = function (checkbox07) {
        this.checkbox07 = checkbox07;
    };
    ShipmentDataProxy.prototype.isCheckbox08 = function () {
        return this.checkbox08;
    };
    ShipmentDataProxy.prototype.setCheckbox08 = function (checkbox08) {
        this.checkbox08 = checkbox08;
    };
    ShipmentDataProxy.prototype.isCheckbox09 = function () {
        return this.checkbox09;
    };
    ShipmentDataProxy.prototype.setCheckbox09 = function (checkbox09) {
        this.checkbox09 = checkbox09;
    };
    ShipmentDataProxy.prototype.isCheckbox10 = function () {
        return this.checkbox10;
    };
    ShipmentDataProxy.prototype.setCheckbox10 = function (checkbox10) {
        this.checkbox10 = checkbox10;
    };
    ShipmentDataProxy.prototype.isCompleteDelivery = function () {
        return this.completeDelivery;
    };
    ShipmentDataProxy.prototype.setCompleteDelivery = function (completeDelivery) {
        this.completeDelivery = completeDelivery;
    };
    ShipmentDataProxy.prototype.getCompletionDate = function () {
        return this.completionDate;
    };
    ShipmentDataProxy.prototype.setCompletionDate = function (completionDate) {
        this.completionDate = completionDate;
    };
    ShipmentDataProxy.prototype.getCompletionTime = function () {
        return this.completionTime;
    };
    ShipmentDataProxy.prototype.setCompletionTime = function (completionTime) {
        this.completionTime = completionTime;
    };
    ShipmentDataProxy.prototype.getConsigneeSeaport = function () {
        return this.consigneeSeaport;
    };
    ShipmentDataProxy.prototype.setConsigneeSeaport = function (consigneeSeaport) {
        this.consigneeSeaport = consigneeSeaport;
    };
    ShipmentDataProxy.prototype.getConsignorAddress = function () {
        return this.consignorAddress;
    };
    ShipmentDataProxy.prototype.setConsignorAddress = function (consignorAddress) {
        this.consignorAddress = consignorAddress;
    };
    ShipmentDataProxy.prototype.getConsolidated = function () {
        return this.consolidated;
    };
    ShipmentDataProxy.prototype.setConsolidated = function (consolidated) {
        this.consolidated = consolidated;
    };
    ShipmentDataProxy.prototype.getCosts = function () {
        return this.costs;
    };
    ShipmentDataProxy.prototype.setCosts = function (costs) {
        this.costs = costs;
    };
    ShipmentDataProxy.prototype.getCreationDate = function () {
        return this.creationDate;
    };
    ShipmentDataProxy.prototype.setCreationDate = function (creationDate) {
        this.creationDate = creationDate;
    };
    ShipmentDataProxy.prototype.getCtaDate = function () {
        return this.ctaDate;
    };
    ShipmentDataProxy.prototype.setCtaDate = function (ctaDate) {
        this.ctaDate = ctaDate;
    };
    ShipmentDataProxy.prototype.getCtaTime = function () {
        return this.ctaTime;
    };
    ShipmentDataProxy.prototype.setCtaTime = function (ctaTime) {
        this.ctaTime = ctaTime;
    };
    ShipmentDataProxy.prototype.getCurrShipmentId = function () {
        return this.currShipmentId;
    };
    ShipmentDataProxy.prototype.setCurrShipmentId = function (currShipmentId) {
        this.currShipmentId = currShipmentId;
    };
    ShipmentDataProxy.prototype.getCurrentLocation = function () {
        return this.currentLocation;
    };
    ShipmentDataProxy.prototype.setCurrentLocation = function (currentLocation) {
        this.currentLocation = currentLocation;
    };
    ShipmentDataProxy.prototype.getCustReference1 = function () {
        return this.custReference1;
    };
    ShipmentDataProxy.prototype.setCustReference1 = function (custReference1) {
        this.custReference1 = custReference1;
    };
    ShipmentDataProxy.prototype.getCustReference10 = function () {
        return this.custReference10;
    };
    ShipmentDataProxy.prototype.setCustReference10 = function (custReference10) {
        this.custReference10 = custReference10;
    };
    ShipmentDataProxy.prototype.getCustReference2 = function () {
        return this.custReference2;
    };
    ShipmentDataProxy.prototype.setCustReference2 = function (custReference2) {
        this.custReference2 = custReference2;
    };
    ShipmentDataProxy.prototype.getCustReference3 = function () {
        return this.custReference3;
    };
    ShipmentDataProxy.prototype.setCustReference3 = function (custReference3) {
        this.custReference3 = custReference3;
    };
    ShipmentDataProxy.prototype.getCustReference4 = function () {
        return this.custReference4;
    };
    ShipmentDataProxy.prototype.setCustReference4 = function (custReference4) {
        this.custReference4 = custReference4;
    };
    ShipmentDataProxy.prototype.getCustReference5 = function () {
        return this.custReference5;
    };
    ShipmentDataProxy.prototype.setCustReference5 = function (custReference5) {
        this.custReference5 = custReference5;
    };
    ShipmentDataProxy.prototype.getCustReference6 = function () {
        return this.custReference6;
    };
    ShipmentDataProxy.prototype.setCustReference6 = function (custReference6) {
        this.custReference6 = custReference6;
    };
    ShipmentDataProxy.prototype.getCustReference7 = function () {
        return this.custReference7;
    };
    ShipmentDataProxy.prototype.setCustReference7 = function (custReference7) {
        this.custReference7 = custReference7;
    };
    ShipmentDataProxy.prototype.getCustReference8 = function () {
        return this.custReference8;
    };
    ShipmentDataProxy.prototype.setCustReference8 = function (custReference8) {
        this.custReference8 = custReference8;
    };
    ShipmentDataProxy.prototype.getCustReference9 = function () {
        return this.custReference9;
    };
    ShipmentDataProxy.prototype.setCustReference9 = function (custReference9) {
        this.custReference9 = custReference9;
    };
    ShipmentDataProxy.prototype.getCustomerVersion = function () {
        return this.customerVersion;
    };
    ShipmentDataProxy.prototype.setCustomerVersion = function (customerVersion) {
        this.customerVersion = customerVersion;
    };
    ShipmentDataProxy.prototype.getCustomerVersionDate = function () {
        return this.customerVersionDate;
    };
    ShipmentDataProxy.prototype.setCustomerVersionDate = function (customerVersionDate) {
        this.customerVersionDate = customerVersionDate;
    };
    ShipmentDataProxy.prototype.getCustomerVersionModDate = function () {
        return this.customerVersionModDate;
    };
    ShipmentDataProxy.prototype.setCustomerVersionModDate = function (customerVersionModDate) {
        this.customerVersionModDate = customerVersionModDate;
    };
    ShipmentDataProxy.prototype.getCustomsCargoCurrency = function () {
        return this.customsCargoCurrency;
    };
    ShipmentDataProxy.prototype.setCustomsCargoCurrency = function (customsCargoCurrency) {
        this.customsCargoCurrency = customsCargoCurrency;
    };
    ShipmentDataProxy.prototype.getCustomsCargoValue = function () {
        return this.customsCargoValue;
    };
    ShipmentDataProxy.prototype.setCustomsCargoValue = function (customsCargoValue) {
        this.customsCargoValue = customsCargoValue;
    };
    ShipmentDataProxy.prototype.isCustomsCertificateOfOrigin = function () {
        return this.customsCertificateOfOrigin;
    };
    ShipmentDataProxy.prototype.setCustomsCertificateOfOrigin = function (customsCertificateOfOrigin) {
        this.customsCertificateOfOrigin = customsCertificateOfOrigin;
    };
    ShipmentDataProxy.prototype.isCustomsEUR1 = function () {
        return this.customsEUR1;
    };
    ShipmentDataProxy.prototype.setCustomsEUR1 = function (customsEUR1) {
        this.customsEUR1 = customsEUR1;
    };
    ShipmentDataProxy.prototype.isCustomsNoPreference = function () {
        return this.customsNoPreference;
    };
    ShipmentDataProxy.prototype.setCustomsNoPreference = function (customsNoPreference) {
        this.customsNoPreference = customsNoPreference;
    };
    ShipmentDataProxy.prototype.getCustomsRemarks = function () {
        return this.customsRemarks;
    };
    ShipmentDataProxy.prototype.setCustomsRemarks = function (customsRemarks) {
        this.customsRemarks = customsRemarks;
    };
    ShipmentDataProxy.prototype.getCustomsValue = function () {
        return this.customsValue;
    };
    ShipmentDataProxy.prototype.setCustomsValue = function (customsValue) {
        this.customsValue = customsValue;
    };
    ShipmentDataProxy.prototype.getCustomsValueCurrency = function () {
        return this.customsValueCurrency;
    };
    ShipmentDataProxy.prototype.setCustomsValueCurrency = function (customsValueCurrency) {
        this.customsValueCurrency = customsValueCurrency;
    };
    ShipmentDataProxy.prototype.isDangerGoodsDeclaration = function () {
        return this.dangerGoodsDeclaration;
    };
    ShipmentDataProxy.prototype.setDangerGoodsDeclaration = function (dangerGoodsDeclaration) {
        this.dangerGoodsDeclaration = dangerGoodsDeclaration;
    };
    ShipmentDataProxy.prototype.getDangerGoodsLabel = function () {
        return this.dangerGoodsLabel;
    };
    ShipmentDataProxy.prototype.setDangerGoodsLabel = function (dangerGoodsLabel) {
        this.dangerGoodsLabel = dangerGoodsLabel;
    };
    ShipmentDataProxy.prototype.getDangergoodsLanguage = function () {
        return this.dangergoodsLanguage;
    };
    ShipmentDataProxy.prototype.setDangergoodsLanguage = function (dangergoodsLanguage) {
        this.dangergoodsLanguage = dangergoodsLanguage;
    };
    ShipmentDataProxy.prototype.getDate01 = function () {
        return this.date01;
    };
    ShipmentDataProxy.prototype.setDate01 = function (date01) {
        this.date01 = date01;
    };
    ShipmentDataProxy.prototype.getDate02 = function () {
        return this.date02;
    };
    ShipmentDataProxy.prototype.setDate02 = function (date02) {
        this.date02 = date02;
    };
    ShipmentDataProxy.prototype.getDate03 = function () {
        return this.date03;
    };
    ShipmentDataProxy.prototype.setDate03 = function (date03) {
        this.date03 = date03;
    };
    ShipmentDataProxy.prototype.getDate04 = function () {
        return this.date04;
    };
    ShipmentDataProxy.prototype.setDate04 = function (date04) {
        this.date04 = date04;
    };
    ShipmentDataProxy.prototype.getDate05 = function () {
        return this.date05;
    };
    ShipmentDataProxy.prototype.setDate05 = function (date05) {
        this.date05 = date05;
    };
    ShipmentDataProxy.prototype.getDate06 = function () {
        return this.date06;
    };
    ShipmentDataProxy.prototype.setDate06 = function (date06) {
        this.date06 = date06;
    };
    ShipmentDataProxy.prototype.getDate07 = function () {
        return this.date07;
    };
    ShipmentDataProxy.prototype.setDate07 = function (date07) {
        this.date07 = date07;
    };
    ShipmentDataProxy.prototype.getDate08 = function () {
        return this.date08;
    };
    ShipmentDataProxy.prototype.setDate08 = function (date08) {
        this.date08 = date08;
    };
    ShipmentDataProxy.prototype.getDate09 = function () {
        return this.date09;
    };
    ShipmentDataProxy.prototype.setDate09 = function (date09) {
        this.date09 = date09;
    };
    ShipmentDataProxy.prototype.getDate10 = function () {
        return this.date10;
    };
    ShipmentDataProxy.prototype.setDate10 = function (date10) {
        this.date10 = date10;
    };
    ShipmentDataProxy.prototype.getDeclaredPositionsQuantity = function () {
        return this.declaredPositionsQuantity;
    };
    ShipmentDataProxy.prototype.setDeclaredPositionsQuantity = function (declaredPositionsQuantity) {
        this.declaredPositionsQuantity = declaredPositionsQuantity;
    };
    ShipmentDataProxy.prototype.getDeclaredPositionsVolume = function () {
        return this.declaredPositionsVolume;
    };
    ShipmentDataProxy.prototype.setDeclaredPositionsVolume = function (declaredPositionsVolume) {
        this.declaredPositionsVolume = declaredPositionsVolume;
    };
    ShipmentDataProxy.prototype.getDeclaredPositionsWeight = function () {
        return this.declaredPositionsWeight;
    };
    ShipmentDataProxy.prototype.setDeclaredPositionsWeight = function (declaredPositionsWeight) {
        this.declaredPositionsWeight = declaredPositionsWeight;
    };
    ShipmentDataProxy.prototype.getDelay = function () {
        return this.delay;
    };
    ShipmentDataProxy.prototype.setDelay = function (delay) {
        this.delay = delay;
    };
    ShipmentDataProxy.prototype.getDelayReason = function () {
        return this.delayReason;
    };
    ShipmentDataProxy.prototype.setDelayReason = function (delayReason) {
        this.delayReason = delayReason;
    };
    ShipmentDataProxy.prototype.getDelayStatusFlag = function () {
        return this.delayStatusFlag;
    };
    ShipmentDataProxy.prototype.setDelayStatusFlag = function (delayStatusFlag) {
        this.delayStatusFlag = delayStatusFlag;
    };
    ShipmentDataProxy.prototype.getDeliveredBy = function () {
        return this.deliveredBy;
    };
    ShipmentDataProxy.prototype.setDeliveredBy = function (deliveredBy) {
        this.deliveredBy = deliveredBy;
    };
    ShipmentDataProxy.prototype.getDeliveryInstruction = function () {
        return this.deliveryInstruction;
    };
    ShipmentDataProxy.prototype.setDeliveryInstruction = function (deliveryInstruction) {
        this.deliveryInstruction = deliveryInstruction;
    };
    ShipmentDataProxy.prototype.getDepartureSeaport = function () {
        return this.departureSeaport;
    };
    ShipmentDataProxy.prototype.setDepartureSeaport = function (departureSeaport) {
        this.departureSeaport = departureSeaport;
    };
    ShipmentDataProxy.prototype.getDestinationAirport = function () {
        return this.destinationAirport;
    };
    ShipmentDataProxy.prototype.setDestinationAirport = function (destinationAirport) {
        this.destinationAirport = destinationAirport;
    };
    ShipmentDataProxy.prototype.getDetachedReason = function () {
        return this.detachedReason;
    };
    ShipmentDataProxy.prototype.setDetachedReason = function (detachedReason) {
        this.detachedReason = detachedReason;
    };
    ShipmentDataProxy.prototype.getDetachedStatus = function () {
        return this.detachedStatus;
    };
    ShipmentDataProxy.prototype.setDetachedStatus = function (detachedStatus) {
        this.detachedStatus = detachedStatus;
    };
    ShipmentDataProxy.prototype.isDirectLoading = function () {
        return this.directLoading;
    };
    ShipmentDataProxy.prototype.setDirectLoading = function (directLoading) {
        this.directLoading = directLoading;
    };
    ShipmentDataProxy.prototype.getDistributionCode = function () {
        return this.distributionCode;
    };
    ShipmentDataProxy.prototype.setDistributionCode = function (distributionCode) {
        this.distributionCode = distributionCode;
    };
    ShipmentDataProxy.prototype.getDocuments = function () {
        return this.documents;
    };
    ShipmentDataProxy.prototype.setDocuments = function (documents) {
        this.documents = documents;
    };
    ShipmentDataProxy.prototype.getDraftName = function () {
        return this.draftName;
    };
    ShipmentDataProxy.prototype.setDraftName = function (draftName) {
        this.draftName = draftName;
    };
    ShipmentDataProxy.prototype.getEtaDate = function () {
        return this.etaDate;
    };
    ShipmentDataProxy.prototype.setEtaDate = function (etaDate) {
        this.etaDate = etaDate;
    };
    ShipmentDataProxy.prototype.isExternalDocExists = function () {
        return this.externalDocExists;
    };
    ShipmentDataProxy.prototype.setExternalDocExists = function (externalDocExists) {
        this.externalDocExists = externalDocExists;
    };
    ShipmentDataProxy.prototype.isFinalDestReachedFlag = function () {
        return this.finalDestReachedFlag;
    };
    ShipmentDataProxy.prototype.setFinalDestReachedFlag = function (finalDestReachedFlag) {
        this.finalDestReachedFlag = finalDestReachedFlag;
    };
    ShipmentDataProxy.prototype.getFlightNr = function () {
        return this.flightNr;
    };
    ShipmentDataProxy.prototype.setFlightNr = function (flightNr) {
        this.flightNr = flightNr;
    };
    ShipmentDataProxy.prototype.getFreeText1 = function () {
        return this.freeText1;
    };
    ShipmentDataProxy.prototype.setFreeText1 = function (freeText1) {
        this.freeText1 = freeText1;
    };
    ShipmentDataProxy.prototype.getFreeText2 = function () {
        return this.freeText2;
    };
    ShipmentDataProxy.prototype.setFreeText2 = function (freeText2) {
        this.freeText2 = freeText2;
    };
    ShipmentDataProxy.prototype.getFreeText3 = function () {
        return this.freeText3;
    };
    ShipmentDataProxy.prototype.setFreeText3 = function (freeText3) {
        this.freeText3 = freeText3;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary1 = function () {
        return this.freeTextDictionary1;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary1 = function (freeTextDictionary1) {
        this.freeTextDictionary1 = freeTextDictionary1;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary10 = function () {
        return this.freeTextDictionary10;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary10 = function (freeTextDictionary10) {
        this.freeTextDictionary10 = freeTextDictionary10;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary11 = function () {
        return this.freeTextDictionary11;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary11 = function (freeTextDictionary11) {
        this.freeTextDictionary11 = freeTextDictionary11;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary12 = function () {
        return this.freeTextDictionary12;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary12 = function (freeTextDictionary12) {
        this.freeTextDictionary12 = freeTextDictionary12;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary13 = function () {
        return this.freeTextDictionary13;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary13 = function (freeTextDictionary13) {
        this.freeTextDictionary13 = freeTextDictionary13;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary14 = function () {
        return this.freeTextDictionary14;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary14 = function (freeTextDictionary14) {
        this.freeTextDictionary14 = freeTextDictionary14;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary15 = function () {
        return this.freeTextDictionary15;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary15 = function (freeTextDictionary15) {
        this.freeTextDictionary15 = freeTextDictionary15;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary16 = function () {
        return this.freeTextDictionary16;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary16 = function (freeTextDictionary16) {
        this.freeTextDictionary16 = freeTextDictionary16;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary17 = function () {
        return this.freeTextDictionary17;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary17 = function (freeTextDictionary17) {
        this.freeTextDictionary17 = freeTextDictionary17;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary18 = function () {
        return this.freeTextDictionary18;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary18 = function (freeTextDictionary18) {
        this.freeTextDictionary18 = freeTextDictionary18;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary19 = function () {
        return this.freeTextDictionary19;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary19 = function (freeTextDictionary19) {
        this.freeTextDictionary19 = freeTextDictionary19;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary2 = function () {
        return this.freeTextDictionary2;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary2 = function (freeTextDictionary2) {
        this.freeTextDictionary2 = freeTextDictionary2;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary20 = function () {
        return this.freeTextDictionary20;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary20 = function (freeTextDictionary20) {
        this.freeTextDictionary20 = freeTextDictionary20;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary21 = function () {
        return this.freeTextDictionary21;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary21 = function (freeTextDictionary21) {
        this.freeTextDictionary21 = freeTextDictionary21;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary22 = function () {
        return this.freeTextDictionary22;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary22 = function (freeTextDictionary22) {
        this.freeTextDictionary22 = freeTextDictionary22;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary23 = function () {
        return this.freeTextDictionary23;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary23 = function (freeTextDictionary23) {
        this.freeTextDictionary23 = freeTextDictionary23;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary24 = function () {
        return this.freeTextDictionary24;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary24 = function (freeTextDictionary24) {
        this.freeTextDictionary24 = freeTextDictionary24;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary25 = function () {
        return this.freeTextDictionary25;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary25 = function (freeTextDictionary25) {
        this.freeTextDictionary25 = freeTextDictionary25;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary26 = function () {
        return this.freeTextDictionary26;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary26 = function (freeTextDictionary26) {
        this.freeTextDictionary26 = freeTextDictionary26;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary27 = function () {
        return this.freeTextDictionary27;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary27 = function (freeTextDictionary27) {
        this.freeTextDictionary27 = freeTextDictionary27;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary28 = function () {
        return this.freeTextDictionary28;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary28 = function (freeTextDictionary28) {
        this.freeTextDictionary28 = freeTextDictionary28;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary29 = function () {
        return this.freeTextDictionary29;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary29 = function (freeTextDictionary29) {
        this.freeTextDictionary29 = freeTextDictionary29;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary3 = function () {
        return this.freeTextDictionary3;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary3 = function (freeTextDictionary3) {
        this.freeTextDictionary3 = freeTextDictionary3;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary30 = function () {
        return this.freeTextDictionary30;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary30 = function (freeTextDictionary30) {
        this.freeTextDictionary30 = freeTextDictionary30;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary31 = function () {
        return this.freeTextDictionary31;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary31 = function (freeTextDictionary31) {
        this.freeTextDictionary31 = freeTextDictionary31;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary32 = function () {
        return this.freeTextDictionary32;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary32 = function (freeTextDictionary32) {
        this.freeTextDictionary32 = freeTextDictionary32;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary33 = function () {
        return this.freeTextDictionary33;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary33 = function (freeTextDictionary33) {
        this.freeTextDictionary33 = freeTextDictionary33;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary34 = function () {
        return this.freeTextDictionary34;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary34 = function (freeTextDictionary34) {
        this.freeTextDictionary34 = freeTextDictionary34;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary35 = function () {
        return this.freeTextDictionary35;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary35 = function (freeTextDictionary35) {
        this.freeTextDictionary35 = freeTextDictionary35;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary36 = function () {
        return this.freeTextDictionary36;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary36 = function (freeTextDictionary36) {
        this.freeTextDictionary36 = freeTextDictionary36;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary37 = function () {
        return this.freeTextDictionary37;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary37 = function (freeTextDictionary37) {
        this.freeTextDictionary37 = freeTextDictionary37;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary38 = function () {
        return this.freeTextDictionary38;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary38 = function (freeTextDictionary38) {
        this.freeTextDictionary38 = freeTextDictionary38;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary39 = function () {
        return this.freeTextDictionary39;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary39 = function (freeTextDictionary39) {
        this.freeTextDictionary39 = freeTextDictionary39;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary4 = function () {
        return this.freeTextDictionary4;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary4 = function (freeTextDictionary4) {
        this.freeTextDictionary4 = freeTextDictionary4;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary40 = function () {
        return this.freeTextDictionary40;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary40 = function (freeTextDictionary40) {
        this.freeTextDictionary40 = freeTextDictionary40;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary41 = function () {
        return this.freeTextDictionary41;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary41 = function (freeTextDictionary41) {
        this.freeTextDictionary41 = freeTextDictionary41;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary42 = function () {
        return this.freeTextDictionary42;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary42 = function (freeTextDictionary42) {
        this.freeTextDictionary42 = freeTextDictionary42;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary43 = function () {
        return this.freeTextDictionary43;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary43 = function (freeTextDictionary43) {
        this.freeTextDictionary43 = freeTextDictionary43;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary44 = function () {
        return this.freeTextDictionary44;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary44 = function (freeTextDictionary44) {
        this.freeTextDictionary44 = freeTextDictionary44;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary45 = function () {
        return this.freeTextDictionary45;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary45 = function (freeTextDictionary45) {
        this.freeTextDictionary45 = freeTextDictionary45;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary46 = function () {
        return this.freeTextDictionary46;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary46 = function (freeTextDictionary46) {
        this.freeTextDictionary46 = freeTextDictionary46;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary47 = function () {
        return this.freeTextDictionary47;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary47 = function (freeTextDictionary47) {
        this.freeTextDictionary47 = freeTextDictionary47;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary48 = function () {
        return this.freeTextDictionary48;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary48 = function (freeTextDictionary48) {
        this.freeTextDictionary48 = freeTextDictionary48;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary49 = function () {
        return this.freeTextDictionary49;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary49 = function (freeTextDictionary49) {
        this.freeTextDictionary49 = freeTextDictionary49;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary5 = function () {
        return this.freeTextDictionary5;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary5 = function (freeTextDictionary5) {
        this.freeTextDictionary5 = freeTextDictionary5;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary50 = function () {
        return this.freeTextDictionary50;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary50 = function (freeTextDictionary50) {
        this.freeTextDictionary50 = freeTextDictionary50;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary6 = function () {
        return this.freeTextDictionary6;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary6 = function (freeTextDictionary6) {
        this.freeTextDictionary6 = freeTextDictionary6;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary7 = function () {
        return this.freeTextDictionary7;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary7 = function (freeTextDictionary7) {
        this.freeTextDictionary7 = freeTextDictionary7;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary8 = function () {
        return this.freeTextDictionary8;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary8 = function (freeTextDictionary8) {
        this.freeTextDictionary8 = freeTextDictionary8;
    };
    ShipmentDataProxy.prototype.getFreeTextDictionary9 = function () {
        return this.freeTextDictionary9;
    };
    ShipmentDataProxy.prototype.setFreeTextDictionary9 = function (freeTextDictionary9) {
        this.freeTextDictionary9 = freeTextDictionary9;
    };
    ShipmentDataProxy.prototype.getFreeTextLanguage = function () {
        return this.freeTextLanguage;
    };
    ShipmentDataProxy.prototype.setFreeTextLanguage = function (freeTextLanguage) {
        this.freeTextLanguage = freeTextLanguage;
    };
    ShipmentDataProxy.prototype.getFreight = function () {
        return this.freight;
    };
    ShipmentDataProxy.prototype.setFreight = function (freight) {
        this.freight = freight;
    };
    ShipmentDataProxy.prototype.getGoodCategory = function () {
        return this.goodCategory;
    };
    ShipmentDataProxy.prototype.setGoodCategory = function (goodCategory) {
        this.goodCategory = goodCategory;
    };
    ShipmentDataProxy.prototype.isGoodsAreDocuments = function () {
        return this.goodsAreDocuments;
    };
    ShipmentDataProxy.prototype.setGoodsAreDocuments = function (goodsAreDocuments) {
        this.goodsAreDocuments = goodsAreDocuments;
    };
    ShipmentDataProxy.prototype.getGoodsDescription = function () {
        return this.goodsDescription;
    };
    ShipmentDataProxy.prototype.setGoodsDescription = function (goodsDescription) {
        this.goodsDescription = goodsDescription;
    };
    ShipmentDataProxy.prototype.getHawbNr = function () {
        return this.hawbNr;
    };
    ShipmentDataProxy.prototype.setHawbNr = function (hawbNr) {
        this.hawbNr = hawbNr;
    };
    ShipmentDataProxy.prototype.getId = function () {
        return this.id;
    };
    ShipmentDataProxy.prototype.setId = function (id) {
        this.id = id;
    };
    ShipmentDataProxy.prototype.getInsurance = function () {
        return this.insurance;
    };
    ShipmentDataProxy.prototype.setInsurance = function (insurance) {
        this.insurance = insurance;
    };
    ShipmentDataProxy.prototype.getInsuranceCurrency = function () {
        return this.insuranceCurrency;
    };
    ShipmentDataProxy.prototype.setInsuranceCurrency = function (insuranceCurrency) {
        this.insuranceCurrency = insuranceCurrency;
    };
    ShipmentDataProxy.prototype.getIntNumber01 = function () {
        return this.intNumber01;
    };
    ShipmentDataProxy.prototype.setIntNumber01 = function (intNumber01) {
        this.intNumber01 = intNumber01;
    };
    ShipmentDataProxy.prototype.getIntNumber02 = function () {
        return this.intNumber02;
    };
    ShipmentDataProxy.prototype.setIntNumber02 = function (intNumber02) {
        this.intNumber02 = intNumber02;
    };
    ShipmentDataProxy.prototype.getIntNumber03 = function () {
        return this.intNumber03;
    };
    ShipmentDataProxy.prototype.setIntNumber03 = function (intNumber03) {
        this.intNumber03 = intNumber03;
    };
    ShipmentDataProxy.prototype.getIntNumber04 = function () {
        return this.intNumber04;
    };
    ShipmentDataProxy.prototype.setIntNumber04 = function (intNumber04) {
        this.intNumber04 = intNumber04;
    };
    ShipmentDataProxy.prototype.getIntNumber05 = function () {
        return this.intNumber05;
    };
    ShipmentDataProxy.prototype.setIntNumber05 = function (intNumber05) {
        this.intNumber05 = intNumber05;
    };
    ShipmentDataProxy.prototype.getIntNumber06 = function () {
        return this.intNumber06;
    };
    ShipmentDataProxy.prototype.setIntNumber06 = function (intNumber06) {
        this.intNumber06 = intNumber06;
    };
    ShipmentDataProxy.prototype.getIntNumber07 = function () {
        return this.intNumber07;
    };
    ShipmentDataProxy.prototype.setIntNumber07 = function (intNumber07) {
        this.intNumber07 = intNumber07;
    };
    ShipmentDataProxy.prototype.getIntNumber08 = function () {
        return this.intNumber08;
    };
    ShipmentDataProxy.prototype.setIntNumber08 = function (intNumber08) {
        this.intNumber08 = intNumber08;
    };
    ShipmentDataProxy.prototype.getIntNumber09 = function () {
        return this.intNumber09;
    };
    ShipmentDataProxy.prototype.setIntNumber09 = function (intNumber09) {
        this.intNumber09 = intNumber09;
    };
    ShipmentDataProxy.prototype.getIntNumber10 = function () {
        return this.intNumber10;
    };
    ShipmentDataProxy.prototype.setIntNumber10 = function (intNumber10) {
        this.intNumber10 = intNumber10;
    };
    ShipmentDataProxy.prototype.getLabelForm = function () {
        return this.labelForm;
    };
    ShipmentDataProxy.prototype.setLabelForm = function (labelForm) {
        this.labelForm = labelForm;
    };
    ShipmentDataProxy.prototype.getLastModificationDate = function () {
        return this.lastModificationDate;
    };
    ShipmentDataProxy.prototype.setLastModificationDate = function (lastModificationDate) {
        this.lastModificationDate = lastModificationDate;
    };
    ShipmentDataProxy.prototype.getLastStatusLocation = function () {
        return this.lastStatusLocation;
    };
    ShipmentDataProxy.prototype.setLastStatusLocation = function (lastStatusLocation) {
        this.lastStatusLocation = lastStatusLocation;
    };
    ShipmentDataProxy.prototype.getLcNr = function () {
        return this.lcNr;
    };
    ShipmentDataProxy.prototype.setLcNr = function (lcNr) {
        this.lcNr = lcNr;
    };
    ShipmentDataProxy.prototype.getLinkParameter = function () {
        return this.linkParameter;
    };
    ShipmentDataProxy.prototype.setLinkParameter = function (linkParameter) {
        this.linkParameter = linkParameter;
    };
    ShipmentDataProxy.prototype.getLoadingListId = function () {
        return this.loadingListId;
    };
    ShipmentDataProxy.prototype.setLoadingListId = function (loadingListId) {
        this.loadingListId = loadingListId;
    };
    ShipmentDataProxy.prototype.getLoadingType = function () {
        return this.loadingType;
    };
    ShipmentDataProxy.prototype.setLoadingType = function (loadingType) {
        this.loadingType = loadingType;
    };
    ShipmentDataProxy.prototype.getLocationStatus = function () {
        return this.locationStatus;
    };
    ShipmentDataProxy.prototype.setLocationStatus = function (locationStatus) {
        this.locationStatus = locationStatus;
    };
    ShipmentDataProxy.prototype.getLongReference01 = function () {
        return this.longReference01;
    };
    ShipmentDataProxy.prototype.setLongReference01 = function (longReference01) {
        this.longReference01 = longReference01;
    };
    ShipmentDataProxy.prototype.getLongReference02 = function () {
        return this.longReference02;
    };
    ShipmentDataProxy.prototype.setLongReference02 = function (longReference02) {
        this.longReference02 = longReference02;
    };
    ShipmentDataProxy.prototype.getLongReference03 = function () {
        return this.longReference03;
    };
    ShipmentDataProxy.prototype.setLongReference03 = function (longReference03) {
        this.longReference03 = longReference03;
    };
    ShipmentDataProxy.prototype.getLongReference04 = function () {
        return this.longReference04;
    };
    ShipmentDataProxy.prototype.setLongReference04 = function (longReference04) {
        this.longReference04 = longReference04;
    };
    ShipmentDataProxy.prototype.getLongReference05 = function () {
        return this.longReference05;
    };
    ShipmentDataProxy.prototype.setLongReference05 = function (longReference05) {
        this.longReference05 = longReference05;
    };
    ShipmentDataProxy.prototype.getLongReference06 = function () {
        return this.longReference06;
    };
    ShipmentDataProxy.prototype.setLongReference06 = function (longReference06) {
        this.longReference06 = longReference06;
    };
    ShipmentDataProxy.prototype.getLongReference07 = function () {
        return this.longReference07;
    };
    ShipmentDataProxy.prototype.setLongReference07 = function (longReference07) {
        this.longReference07 = longReference07;
    };
    ShipmentDataProxy.prototype.getLongReference08 = function () {
        return this.longReference08;
    };
    ShipmentDataProxy.prototype.setLongReference08 = function (longReference08) {
        this.longReference08 = longReference08;
    };
    ShipmentDataProxy.prototype.getLongReference09 = function () {
        return this.longReference09;
    };
    ShipmentDataProxy.prototype.setLongReference09 = function (longReference09) {
        this.longReference09 = longReference09;
    };
    ShipmentDataProxy.prototype.getLongReference10 = function () {
        return this.longReference10;
    };
    ShipmentDataProxy.prototype.setLongReference10 = function (longReference10) {
        this.longReference10 = longReference10;
    };
    ShipmentDataProxy.prototype.getLongReference11 = function () {
        return this.longReference11;
    };
    ShipmentDataProxy.prototype.setLongReference11 = function (longReference11) {
        this.longReference11 = longReference11;
    };
    ShipmentDataProxy.prototype.getLongReference12 = function () {
        return this.longReference12;
    };
    ShipmentDataProxy.prototype.setLongReference12 = function (longReference12) {
        this.longReference12 = longReference12;
    };
    ShipmentDataProxy.prototype.getLongReference13 = function () {
        return this.longReference13;
    };
    ShipmentDataProxy.prototype.setLongReference13 = function (longReference13) {
        this.longReference13 = longReference13;
    };
    ShipmentDataProxy.prototype.getLongReference14 = function () {
        return this.longReference14;
    };
    ShipmentDataProxy.prototype.setLongReference14 = function (longReference14) {
        this.longReference14 = longReference14;
    };
    ShipmentDataProxy.prototype.getLongReference15 = function () {
        return this.longReference15;
    };
    ShipmentDataProxy.prototype.setLongReference15 = function (longReference15) {
        this.longReference15 = longReference15;
    };
    ShipmentDataProxy.prototype.getLongReference16 = function () {
        return this.longReference16;
    };
    ShipmentDataProxy.prototype.setLongReference16 = function (longReference16) {
        this.longReference16 = longReference16;
    };
    ShipmentDataProxy.prototype.getLongReference17 = function () {
        return this.longReference17;
    };
    ShipmentDataProxy.prototype.setLongReference17 = function (longReference17) {
        this.longReference17 = longReference17;
    };
    ShipmentDataProxy.prototype.getLongReference18 = function () {
        return this.longReference18;
    };
    ShipmentDataProxy.prototype.setLongReference18 = function (longReference18) {
        this.longReference18 = longReference18;
    };
    ShipmentDataProxy.prototype.getLongReference19 = function () {
        return this.longReference19;
    };
    ShipmentDataProxy.prototype.setLongReference19 = function (longReference19) {
        this.longReference19 = longReference19;
    };
    ShipmentDataProxy.prototype.getLongReference20 = function () {
        return this.longReference20;
    };
    ShipmentDataProxy.prototype.setLongReference20 = function (longReference20) {
        this.longReference20 = longReference20;
    };
    ShipmentDataProxy.prototype.getLongReference21 = function () {
        return this.longReference21;
    };
    ShipmentDataProxy.prototype.setLongReference21 = function (longReference21) {
        this.longReference21 = longReference21;
    };
    ShipmentDataProxy.prototype.getLongReference22 = function () {
        return this.longReference22;
    };
    ShipmentDataProxy.prototype.setLongReference22 = function (longReference22) {
        this.longReference22 = longReference22;
    };
    ShipmentDataProxy.prototype.getLongReference23 = function () {
        return this.longReference23;
    };
    ShipmentDataProxy.prototype.setLongReference23 = function (longReference23) {
        this.longReference23 = longReference23;
    };
    ShipmentDataProxy.prototype.getLongReference24 = function () {
        return this.longReference24;
    };
    ShipmentDataProxy.prototype.setLongReference24 = function (longReference24) {
        this.longReference24 = longReference24;
    };
    ShipmentDataProxy.prototype.getLongReference25 = function () {
        return this.longReference25;
    };
    ShipmentDataProxy.prototype.setLongReference25 = function (longReference25) {
        this.longReference25 = longReference25;
    };
    ShipmentDataProxy.prototype.getMawbNr = function () {
        return this.mawbNr;
    };
    ShipmentDataProxy.prototype.setMawbNr = function (mawbNr) {
        this.mawbNr = mawbNr;
    };
    ShipmentDataProxy.prototype.getMissingTschedReason = function () {
        return this.missingTschedReason;
    };
    ShipmentDataProxy.prototype.setMissingTschedReason = function (missingTschedReason) {
        this.missingTschedReason = missingTschedReason;
    };
    ShipmentDataProxy.prototype.getMissingTschedStatus = function () {
        return this.missingTschedStatus;
    };
    ShipmentDataProxy.prototype.setMissingTschedStatus = function (missingTschedStatus) {
        this.missingTschedStatus = missingTschedStatus;
    };
    ShipmentDataProxy.prototype.getMonitorState3 = function () {
        return this.monitorState3;
    };
    ShipmentDataProxy.prototype.setMonitorState3 = function (monitorState3) {
        this.monitorState3 = monitorState3;
    };
    ShipmentDataProxy.prototype.getMonitorState4 = function () {
        return this.monitorState4;
    };
    ShipmentDataProxy.prototype.setMonitorState4 = function (monitorState4) {
        this.monitorState4 = monitorState4;
    };
    ShipmentDataProxy.prototype.getNahverkehrsTourNr = function () {
        return this.nahverkehrsTourNr;
    };
    ShipmentDataProxy.prototype.setNahverkehrsTourNr = function (nahverkehrsTourNr) {
        this.nahverkehrsTourNr = nahverkehrsTourNr;
    };
    ShipmentDataProxy.prototype.getNeutralAddress = function () {
        return this.neutralAddress;
    };
    ShipmentDataProxy.prototype.setNeutralAddress = function (neutralAddress) {
        this.neutralAddress = neutralAddress;
    };
    ShipmentDataProxy.prototype.isNeutralize = function () {
        return this.neutralize;
    };
    ShipmentDataProxy.prototype.setNeutralize = function (neutralize) {
        this.neutralize = neutralize;
    };
    ShipmentDataProxy.prototype.getNotifyAddress = function () {
        return this.notifyAddress;
    };
    ShipmentDataProxy.prototype.setNotifyAddress = function (notifyAddress) {
        this.notifyAddress = notifyAddress;
    };
    ShipmentDataProxy.prototype.getNotifyAddress2 = function () {
        return this.notifyAddress2;
    };
    ShipmentDataProxy.prototype.setNotifyAddress2 = function (notifyAddress2) {
        this.notifyAddress2 = notifyAddress2;
    };
    ShipmentDataProxy.prototype.getNptaDate = function () {
        return this.nptaDate;
    };
    ShipmentDataProxy.prototype.setNptaDate = function (nptaDate) {
        this.nptaDate = nptaDate;
    };
    ShipmentDataProxy.prototype.getNptaTime = function () {
        return this.nptaTime;
    };
    ShipmentDataProxy.prototype.setNptaTime = function (nptaTime) {
        this.nptaTime = nptaTime;
    };
    ShipmentDataProxy.prototype.getNumberOfLoadingPositions = function () {
        return this.numberOfLoadingPositions;
    };
    ShipmentDataProxy.prototype.setNumberOfLoadingPositions = function (numberOfLoadingPositions) {
        this.numberOfLoadingPositions = numberOfLoadingPositions;
    };
    ShipmentDataProxy.prototype.getOnHold = function () {
        return this.onHold;
    };
    ShipmentDataProxy.prototype.setOnHold = function (onHold) {
        this.onHold = onHold;
    };
    ShipmentDataProxy.prototype.getOptionalCollectionAddress = function () {
        return this.optionalCollectionAddress;
    };
    ShipmentDataProxy.prototype.setOptionalCollectionAddress = function (optionalCollectionAddress) {
        this.optionalCollectionAddress = optionalCollectionAddress;
    };
    ShipmentDataProxy.prototype.getOptionalReceiverAddress = function () {
        return this.optionalReceiverAddress;
    };
    ShipmentDataProxy.prototype.setOptionalReceiverAddress = function (optionalReceiverAddress) {
        this.optionalReceiverAddress = optionalReceiverAddress;
    };
    ShipmentDataProxy.prototype.getPackerAddress = function () {
        return this.packerAddress;
    };
    ShipmentDataProxy.prototype.setPackerAddress = function (packerAddress) {
        this.packerAddress = packerAddress;
    };
    ShipmentDataProxy.prototype.getPaymentType = function () {
        return this.paymentType;
    };
    ShipmentDataProxy.prototype.setPaymentType = function (paymentType) {
        this.paymentType = paymentType;
    };
    ShipmentDataProxy.prototype.getPositionsDimWeight = function () {
        return this.positionsDimWeight;
    };
    ShipmentDataProxy.prototype.setPositionsDimWeight = function (positionsDimWeight) {
        this.positionsDimWeight = positionsDimWeight;
    };
    ShipmentDataProxy.prototype.getPositionsLiter = function () {
        return this.positionsLiter;
    };
    ShipmentDataProxy.prototype.setPositionsLiter = function (positionsLiter) {
        this.positionsLiter = positionsLiter;
    };
    ShipmentDataProxy.prototype.getPositionsLoadingMeters = function () {
        return this.positionsLoadingMeters;
    };
    ShipmentDataProxy.prototype.setPositionsLoadingMeters = function (positionsLoadingMeters) {
        this.positionsLoadingMeters = positionsLoadingMeters;
    };
    ShipmentDataProxy.prototype.getPositionsPayableLoadingMeters = function () {
        return this.positionsPayableLoadingMeters;
    };
    ShipmentDataProxy.prototype.setPositionsPayableLoadingMeters = function (positionsPayableLoadingMeters) {
        this.positionsPayableLoadingMeters = positionsPayableLoadingMeters;
    };
    ShipmentDataProxy.prototype.getPositionsPayableLoadingMeters2 = function () {
        return this.positionsPayableLoadingMeters2;
    };
    ShipmentDataProxy.prototype.setPositionsPayableLoadingMeters2 = function (positionsPayableLoadingMeters2) {
        this.positionsPayableLoadingMeters2 = positionsPayableLoadingMeters2;
    };
    ShipmentDataProxy.prototype.getPositionsQuantity = function () {
        return this.positionsQuantity;
    };
    ShipmentDataProxy.prototype.setPositionsQuantity = function (positionsQuantity) {
        this.positionsQuantity = positionsQuantity;
    };
    ShipmentDataProxy.prototype.getPositionsVolume = function () {
        return this.positionsVolume;
    };
    ShipmentDataProxy.prototype.setPositionsVolume = function (positionsVolume) {
        this.positionsVolume = positionsVolume;
    };
    ShipmentDataProxy.prototype.getPositionsWeight = function () {
        return this.positionsWeight;
    };
    ShipmentDataProxy.prototype.setPositionsWeight = function (positionsWeight) {
        this.positionsWeight = positionsWeight;
    };
    ShipmentDataProxy.prototype.isPreferredDelivery = function () {
        return this.preferredDelivery;
    };
    ShipmentDataProxy.prototype.setPreferredDelivery = function (preferredDelivery) {
        this.preferredDelivery = preferredDelivery;
    };
    ShipmentDataProxy.prototype.isPriority = function () {
        return this.priority;
    };
    ShipmentDataProxy.prototype.setPriority = function (priority) {
        this.priority = priority;
    };
    ShipmentDataProxy.prototype.getProblemWithDeliveryReason = function () {
        return this.problemWithDeliveryReason;
    };
    ShipmentDataProxy.prototype.setProblemWithDeliveryReason = function (problemWithDeliveryReason) {
        this.problemWithDeliveryReason = problemWithDeliveryReason;
    };
    ShipmentDataProxy.prototype.getProblemWithDeliveryStatus = function () {
        return this.problemWithDeliveryStatus;
    };
    ShipmentDataProxy.prototype.setProblemWithDeliveryStatus = function (problemWithDeliveryStatus) {
        this.problemWithDeliveryStatus = problemWithDeliveryStatus;
    };
    ShipmentDataProxy.prototype.isPropagationDeactivated = function () {
        return this.propagationDeactivated;
    };
    ShipmentDataProxy.prototype.setPropagationDeactivated = function (propagationDeactivated) {
        this.propagationDeactivated = propagationDeactivated;
    };
    ShipmentDataProxy.prototype.getRealNumber01 = function () {
        return this.realNumber01;
    };
    ShipmentDataProxy.prototype.setRealNumber01 = function (realNumber01) {
        this.realNumber01 = realNumber01;
    };
    ShipmentDataProxy.prototype.getRealNumber02 = function () {
        return this.realNumber02;
    };
    ShipmentDataProxy.prototype.setRealNumber02 = function (realNumber02) {
        this.realNumber02 = realNumber02;
    };
    ShipmentDataProxy.prototype.getRealNumber03 = function () {
        return this.realNumber03;
    };
    ShipmentDataProxy.prototype.setRealNumber03 = function (realNumber03) {
        this.realNumber03 = realNumber03;
    };
    ShipmentDataProxy.prototype.getRealNumber04 = function () {
        return this.realNumber04;
    };
    ShipmentDataProxy.prototype.setRealNumber04 = function (realNumber04) {
        this.realNumber04 = realNumber04;
    };
    ShipmentDataProxy.prototype.getRealNumber05 = function () {
        return this.realNumber05;
    };
    ShipmentDataProxy.prototype.setRealNumber05 = function (realNumber05) {
        this.realNumber05 = realNumber05;
    };
    ShipmentDataProxy.prototype.getRealNumber06 = function () {
        return this.realNumber06;
    };
    ShipmentDataProxy.prototype.setRealNumber06 = function (realNumber06) {
        this.realNumber06 = realNumber06;
    };
    ShipmentDataProxy.prototype.getRealNumber07 = function () {
        return this.realNumber07;
    };
    ShipmentDataProxy.prototype.setRealNumber07 = function (realNumber07) {
        this.realNumber07 = realNumber07;
    };
    ShipmentDataProxy.prototype.getRealNumber08 = function () {
        return this.realNumber08;
    };
    ShipmentDataProxy.prototype.setRealNumber08 = function (realNumber08) {
        this.realNumber08 = realNumber08;
    };
    ShipmentDataProxy.prototype.getRealNumber09 = function () {
        return this.realNumber09;
    };
    ShipmentDataProxy.prototype.setRealNumber09 = function (realNumber09) {
        this.realNumber09 = realNumber09;
    };
    ShipmentDataProxy.prototype.getRealNumber10 = function () {
        return this.realNumber10;
    };
    ShipmentDataProxy.prototype.setRealNumber10 = function (realNumber10) {
        this.realNumber10 = realNumber10;
    };
    ShipmentDataProxy.prototype.getReasonLast = function () {
        return this.reasonLast;
    };
    ShipmentDataProxy.prototype.setReasonLast = function (reasonLast) {
        this.reasonLast = reasonLast;
    };
    ShipmentDataProxy.prototype.getReceiptDate = function () {
        return this.receiptDate;
    };
    ShipmentDataProxy.prototype.setReceiptDate = function (receiptDate) {
        this.receiptDate = receiptDate;
    };
    ShipmentDataProxy.prototype.getReceiptDateTo = function () {
        return this.receiptDateTo;
    };
    ShipmentDataProxy.prototype.setReceiptDateTo = function (receiptDateTo) {
        this.receiptDateTo = receiptDateTo;
    };
    ShipmentDataProxy.prototype.getReceiptSpecification = function () {
        return this.receiptSpecification;
    };
    ShipmentDataProxy.prototype.setReceiptSpecification = function (receiptSpecification) {
        this.receiptSpecification = receiptSpecification;
    };
    ShipmentDataProxy.prototype.getReceiptTime = function () {
        return this.receiptTime;
    };
    ShipmentDataProxy.prototype.setReceiptTime = function (receiptTime) {
        this.receiptTime = receiptTime;
    };
    ShipmentDataProxy.prototype.getReceiverAddress = function () {
        return this.receiverAddress;
    };
    ShipmentDataProxy.prototype.setReceiverAddress = function (receiverAddress) {
        this.receiverAddress = receiverAddress;
    };
    ShipmentDataProxy.prototype.getReference1 = function () {
        return this.reference1;
    };
    ShipmentDataProxy.prototype.setReference1 = function (reference1) {
        this.reference1 = reference1;
    };
    ShipmentDataProxy.prototype.getReference2 = function () {
        return this.reference2;
    };
    ShipmentDataProxy.prototype.setReference2 = function (reference2) {
        this.reference2 = reference2;
    };
    ShipmentDataProxy.prototype.getReference2Dict = function () {
        return this.reference2Dict;
    };
    ShipmentDataProxy.prototype.setReference2Dict = function (reference2Dict) {
        this.reference2Dict = reference2Dict;
    };
    ShipmentDataProxy.prototype.getReference3 = function () {
        return this.reference3;
    };
    ShipmentDataProxy.prototype.setReference3 = function (reference3) {
        this.reference3 = reference3;
    };
    ShipmentDataProxy.prototype.getReference4 = function () {
        return this.reference4;
    };
    ShipmentDataProxy.prototype.setReference4 = function (reference4) {
        this.reference4 = reference4;
    };
    ShipmentDataProxy.prototype.getRemarks1 = function () {
        return this.remarks1;
    };
    ShipmentDataProxy.prototype.setRemarks1 = function (remarks1) {
        this.remarks1 = remarks1;
    };
    ShipmentDataProxy.prototype.getRemarks2 = function () {
        return this.remarks2;
    };
    ShipmentDataProxy.prototype.setRemarks2 = function (remarks2) {
        this.remarks2 = remarks2;
    };
    ShipmentDataProxy.prototype.getRemarks3 = function () {
        return this.remarks3;
    };
    ShipmentDataProxy.prototype.setRemarks3 = function (remarks3) {
        this.remarks3 = remarks3;
    };
    ShipmentDataProxy.prototype.getRemarksDictionary1 = function () {
        return this.remarksDictionary1;
    };
    ShipmentDataProxy.prototype.setRemarksDictionary1 = function (remarksDictionary1) {
        this.remarksDictionary1 = remarksDictionary1;
    };
    ShipmentDataProxy.prototype.getRemarksDictionary2 = function () {
        return this.remarksDictionary2;
    };
    ShipmentDataProxy.prototype.setRemarksDictionary2 = function (remarksDictionary2) {
        this.remarksDictionary2 = remarksDictionary2;
    };
    ShipmentDataProxy.prototype.getRemarksDictionary3 = function () {
        return this.remarksDictionary3;
    };
    ShipmentDataProxy.prototype.setRemarksDictionary3 = function (remarksDictionary3) {
        this.remarksDictionary3 = remarksDictionary3;
    };
    ShipmentDataProxy.prototype.getRequestedReceiptDate = function () {
        return this.requestedReceiptDate;
    };
    ShipmentDataProxy.prototype.setRequestedReceiptDate = function (requestedReceiptDate) {
        this.requestedReceiptDate = requestedReceiptDate;
    };
    ShipmentDataProxy.prototype.getRequestedReceiptSpecification = function () {
        return this.requestedReceiptSpecification;
    };
    ShipmentDataProxy.prototype.setRequestedReceiptSpecification = function (requestedReceiptSpecification) {
        this.requestedReceiptSpecification = requestedReceiptSpecification;
    };
    ShipmentDataProxy.prototype.getRequestedReceiptTime = function () {
        return this.requestedReceiptTime;
    };
    ShipmentDataProxy.prototype.setRequestedReceiptTime = function (requestedReceiptTime) {
        this.requestedReceiptTime = requestedReceiptTime;
    };
    ShipmentDataProxy.prototype.getRequestedReceiptTimeTo = function () {
        return this.requestedReceiptTimeTo;
    };
    ShipmentDataProxy.prototype.setRequestedReceiptTimeTo = function (requestedReceiptTimeTo) {
        this.requestedReceiptTimeTo = requestedReceiptTimeTo;
    };
    ShipmentDataProxy.prototype.getRequestedSupplyDate = function () {
        return this.requestedSupplyDate;
    };
    ShipmentDataProxy.prototype.setRequestedSupplyDate = function (requestedSupplyDate) {
        this.requestedSupplyDate = requestedSupplyDate;
    };
    ShipmentDataProxy.prototype.getRequestedSupplySpecification = function () {
        return this.requestedSupplySpecification;
    };
    ShipmentDataProxy.prototype.setRequestedSupplySpecification = function (requestedSupplySpecification) {
        this.requestedSupplySpecification = requestedSupplySpecification;
    };
    ShipmentDataProxy.prototype.getRequestedSupplyTime = function () {
        return this.requestedSupplyTime;
    };
    ShipmentDataProxy.prototype.setRequestedSupplyTime = function (requestedSupplyTime) {
        this.requestedSupplyTime = requestedSupplyTime;
    };
    ShipmentDataProxy.prototype.getRequestedSupplyTimeTo = function () {
        return this.requestedSupplyTimeTo;
    };
    ShipmentDataProxy.prototype.setRequestedSupplyTimeTo = function (requestedSupplyTimeTo) {
        this.requestedSupplyTimeTo = requestedSupplyTimeTo;
    };
    ShipmentDataProxy.prototype.isReturnDocuments = function () {
        return this.returnDocuments;
    };
    ShipmentDataProxy.prototype.setReturnDocuments = function (returnDocuments) {
        this.returnDocuments = returnDocuments;
    };
    ShipmentDataProxy.prototype.getRoute = function () {
        return this.route;
    };
    ShipmentDataProxy.prototype.setRoute = function (route) {
        this.route = route;
    };
    ShipmentDataProxy.prototype.getRoutingConstraintName = function () {
        return this.routingConstraintName;
    };
    ShipmentDataProxy.prototype.setRoutingConstraintName = function (routingConstraintName) {
        this.routingConstraintName = routingConstraintName;
    };
    ShipmentDataProxy.prototype.isSaturdayDelivery = function () {
        return this.saturdayDelivery;
    };
    ShipmentDataProxy.prototype.setSaturdayDelivery = function (saturdayDelivery) {
        this.saturdayDelivery = saturdayDelivery;
    };
    ShipmentDataProxy.prototype.isSaturdayPickup = function () {
        return this.saturdayPickup;
    };
    ShipmentDataProxy.prototype.setSaturdayPickup = function (saturdayPickup) {
        this.saturdayPickup = saturdayPickup;
    };
    ShipmentDataProxy.prototype.isSelfReceipt = function () {
        return this.selfReceipt;
    };
    ShipmentDataProxy.prototype.setSelfReceipt = function (selfReceipt) {
        this.selfReceipt = selfReceipt;
    };
    ShipmentDataProxy.prototype.isSelfWithdraw = function () {
        return this.selfWithdraw;
    };
    ShipmentDataProxy.prototype.setSelfWithdraw = function (selfWithdraw) {
        this.selfWithdraw = selfWithdraw;
    };
    ShipmentDataProxy.prototype.getSendDate = function () {
        return this.sendDate;
    };
    ShipmentDataProxy.prototype.setSendDate = function (sendDate) {
        this.sendDate = sendDate;
    };
    ShipmentDataProxy.prototype.getSenderAddress = function () {
        return this.senderAddress;
    };
    ShipmentDataProxy.prototype.setSenderAddress = function (senderAddress) {
        this.senderAddress = senderAddress;
    };
    ShipmentDataProxy.prototype.getSenderEmail = function () {
        return this.senderEmail;
    };
    ShipmentDataProxy.prototype.setSenderEmail = function (senderEmail) {
        this.senderEmail = senderEmail;
    };
    ShipmentDataProxy.prototype.getSenderFax = function () {
        return this.senderFax;
    };
    ShipmentDataProxy.prototype.setSenderFax = function (senderFax) {
        this.senderFax = senderFax;
    };
    ShipmentDataProxy.prototype.getSenderName = function () {
        return this.senderName;
    };
    ShipmentDataProxy.prototype.setSenderName = function (senderName) {
        this.senderName = senderName;
    };
    ShipmentDataProxy.prototype.getSenderPhoneNr = function () {
        return this.senderPhoneNr;
    };
    ShipmentDataProxy.prototype.setSenderPhoneNr = function (senderPhoneNr) {
        this.senderPhoneNr = senderPhoneNr;
    };
    ShipmentDataProxy.prototype.getServerName = function () {
        return this.serverName;
    };
    ShipmentDataProxy.prototype.setServerName = function (serverName) {
        this.serverName = serverName;
    };
    ShipmentDataProxy.prototype.getService = function () {
        return this.service;
    };
    ShipmentDataProxy.prototype.setService = function (service) {
        this.service = service;
    };
    ShipmentDataProxy.prototype.getShippingLine = function () {
        return this.shippingLine;
    };
    ShipmentDataProxy.prototype.setShippingLine = function (shippingLine) {
        this.shippingLine = shippingLine;
    };
    ShipmentDataProxy.prototype.getShortReference01 = function () {
        return this.shortReference01;
    };
    ShipmentDataProxy.prototype.setShortReference01 = function (shortReference01) {
        this.shortReference01 = shortReference01;
    };
    ShipmentDataProxy.prototype.getShortReference02 = function () {
        return this.shortReference02;
    };
    ShipmentDataProxy.prototype.setShortReference02 = function (shortReference02) {
        this.shortReference02 = shortReference02;
    };
    ShipmentDataProxy.prototype.getShortReference03 = function () {
        return this.shortReference03;
    };
    ShipmentDataProxy.prototype.setShortReference03 = function (shortReference03) {
        this.shortReference03 = shortReference03;
    };
    ShipmentDataProxy.prototype.getShortReference04 = function () {
        return this.shortReference04;
    };
    ShipmentDataProxy.prototype.setShortReference04 = function (shortReference04) {
        this.shortReference04 = shortReference04;
    };
    ShipmentDataProxy.prototype.getShortReference05 = function () {
        return this.shortReference05;
    };
    ShipmentDataProxy.prototype.setShortReference05 = function (shortReference05) {
        this.shortReference05 = shortReference05;
    };
    ShipmentDataProxy.prototype.getShortReference06 = function () {
        return this.shortReference06;
    };
    ShipmentDataProxy.prototype.setShortReference06 = function (shortReference06) {
        this.shortReference06 = shortReference06;
    };
    ShipmentDataProxy.prototype.getShortReference07 = function () {
        return this.shortReference07;
    };
    ShipmentDataProxy.prototype.setShortReference07 = function (shortReference07) {
        this.shortReference07 = shortReference07;
    };
    ShipmentDataProxy.prototype.getShortReference08 = function () {
        return this.shortReference08;
    };
    ShipmentDataProxy.prototype.setShortReference08 = function (shortReference08) {
        this.shortReference08 = shortReference08;
    };
    ShipmentDataProxy.prototype.getShortReference09 = function () {
        return this.shortReference09;
    };
    ShipmentDataProxy.prototype.setShortReference09 = function (shortReference09) {
        this.shortReference09 = shortReference09;
    };
    ShipmentDataProxy.prototype.getShortReference10 = function () {
        return this.shortReference10;
    };
    ShipmentDataProxy.prototype.setShortReference10 = function (shortReference10) {
        this.shortReference10 = shortReference10;
    };
    ShipmentDataProxy.prototype.getShortReference11 = function () {
        return this.shortReference11;
    };
    ShipmentDataProxy.prototype.setShortReference11 = function (shortReference11) {
        this.shortReference11 = shortReference11;
    };
    ShipmentDataProxy.prototype.getShortReference12 = function () {
        return this.shortReference12;
    };
    ShipmentDataProxy.prototype.setShortReference12 = function (shortReference12) {
        this.shortReference12 = shortReference12;
    };
    ShipmentDataProxy.prototype.getShortReference13 = function () {
        return this.shortReference13;
    };
    ShipmentDataProxy.prototype.setShortReference13 = function (shortReference13) {
        this.shortReference13 = shortReference13;
    };
    ShipmentDataProxy.prototype.getShortReference14 = function () {
        return this.shortReference14;
    };
    ShipmentDataProxy.prototype.setShortReference14 = function (shortReference14) {
        this.shortReference14 = shortReference14;
    };
    ShipmentDataProxy.prototype.getShortReference15 = function () {
        return this.shortReference15;
    };
    ShipmentDataProxy.prototype.setShortReference15 = function (shortReference15) {
        this.shortReference15 = shortReference15;
    };
    ShipmentDataProxy.prototype.getShortReference16 = function () {
        return this.shortReference16;
    };
    ShipmentDataProxy.prototype.setShortReference16 = function (shortReference16) {
        this.shortReference16 = shortReference16;
    };
    ShipmentDataProxy.prototype.getShortReference17 = function () {
        return this.shortReference17;
    };
    ShipmentDataProxy.prototype.setShortReference17 = function (shortReference17) {
        this.shortReference17 = shortReference17;
    };
    ShipmentDataProxy.prototype.getShortReference18 = function () {
        return this.shortReference18;
    };
    ShipmentDataProxy.prototype.setShortReference18 = function (shortReference18) {
        this.shortReference18 = shortReference18;
    };
    ShipmentDataProxy.prototype.getShortReference19 = function () {
        return this.shortReference19;
    };
    ShipmentDataProxy.prototype.setShortReference19 = function (shortReference19) {
        this.shortReference19 = shortReference19;
    };
    ShipmentDataProxy.prototype.getShortReference20 = function () {
        return this.shortReference20;
    };
    ShipmentDataProxy.prototype.setShortReference20 = function (shortReference20) {
        this.shortReference20 = shortReference20;
    };
    ShipmentDataProxy.prototype.getShortReference21 = function () {
        return this.shortReference21;
    };
    ShipmentDataProxy.prototype.setShortReference21 = function (shortReference21) {
        this.shortReference21 = shortReference21;
    };
    ShipmentDataProxy.prototype.getShortReference22 = function () {
        return this.shortReference22;
    };
    ShipmentDataProxy.prototype.setShortReference22 = function (shortReference22) {
        this.shortReference22 = shortReference22;
    };
    ShipmentDataProxy.prototype.getShortReference23 = function () {
        return this.shortReference23;
    };
    ShipmentDataProxy.prototype.setShortReference23 = function (shortReference23) {
        this.shortReference23 = shortReference23;
    };
    ShipmentDataProxy.prototype.getShortReference24 = function () {
        return this.shortReference24;
    };
    ShipmentDataProxy.prototype.setShortReference24 = function (shortReference24) {
        this.shortReference24 = shortReference24;
    };
    ShipmentDataProxy.prototype.getShortReference25 = function () {
        return this.shortReference25;
    };
    ShipmentDataProxy.prototype.setShortReference25 = function (shortReference25) {
        this.shortReference25 = shortReference25;
    };
    ShipmentDataProxy.prototype.isSlvs = function () {
        return this.slvs;
    };
    ShipmentDataProxy.prototype.setSlvs = function (slvs) {
        this.slvs = slvs;
    };
    ShipmentDataProxy.prototype.getSolutionId = function () {
        return this.solutionId;
    };
    ShipmentDataProxy.prototype.setSolutionId = function (solutionId) {
        this.solutionId = solutionId;
    };
    ShipmentDataProxy.prototype.getSpedShipmentId = function () {
        return this.spedShipmentId;
    };
    ShipmentDataProxy.prototype.setSpedShipmentId = function (spedShipmentId) {
        this.spedShipmentId = spedShipmentId;
    };
    ShipmentDataProxy.prototype.isStackable = function () {
        return this.stackable;
    };
    ShipmentDataProxy.prototype.setStackable = function (stackable) {
        this.stackable = stackable;
    };
    ShipmentDataProxy.prototype.getState = function () {
        return this.state;
    };
    ShipmentDataProxy.prototype.setState = function (state) {
        this.state = state;
    };
    ShipmentDataProxy.prototype.getState3 = function () {
        return this.state3;
    };
    ShipmentDataProxy.prototype.setState3 = function (state3) {
        this.state3 = state3;
    };
    ShipmentDataProxy.prototype.getState4 = function () {
        return this.state4;
    };
    ShipmentDataProxy.prototype.setState4 = function (state4) {
        this.state4 = state4;
    };
    ShipmentDataProxy.prototype.getStatusDateLast = function () {
        return this.statusDateLast;
    };
    ShipmentDataProxy.prototype.setStatusDateLast = function (statusDateLast) {
        this.statusDateLast = statusDateLast;
    };
    ShipmentDataProxy.prototype.getStatusLast = function () {
        return this.statusLast;
    };
    ShipmentDataProxy.prototype.setStatusLast = function (statusLast) {
        this.statusLast = statusLast;
    };
    ShipmentDataProxy.prototype.getStatusSystemDateLast = function () {
        return this.statusSystemDateLast;
    };
    ShipmentDataProxy.prototype.setStatusSystemDateLast = function (statusSystemDateLast) {
        this.statusSystemDateLast = statusSystemDateLast;
    };
    ShipmentDataProxy.prototype.getStoppageTime = function () {
        return this.stoppageTime;
    };
    ShipmentDataProxy.prototype.setStoppageTime = function (stoppageTime) {
        this.stoppageTime = stoppageTime;
    };
    ShipmentDataProxy.prototype.getSupplierNr = function () {
        return this.supplierNr;
    };
    ShipmentDataProxy.prototype.setSupplierNr = function (supplierNr) {
        this.supplierNr = supplierNr;
    };
    ShipmentDataProxy.prototype.getSupplyDate = function () {
        return this.supplyDate;
    };
    ShipmentDataProxy.prototype.setSupplyDate = function (supplyDate) {
        this.supplyDate = supplyDate;
    };
    ShipmentDataProxy.prototype.getSupplyDateTo = function () {
        return this.supplyDateTo;
    };
    ShipmentDataProxy.prototype.setSupplyDateTo = function (supplyDateTo) {
        this.supplyDateTo = supplyDateTo;
    };
    ShipmentDataProxy.prototype.getSupplySpecification = function () {
        return this.supplySpecification;
    };
    ShipmentDataProxy.prototype.setSupplySpecification = function (supplySpecification) {
        this.supplySpecification = supplySpecification;
    };
    ShipmentDataProxy.prototype.getSupplyTime = function () {
        return this.supplyTime;
    };
    ShipmentDataProxy.prototype.setSupplyTime = function (supplyTime) {
        this.supplyTime = supplyTime;
    };
    ShipmentDataProxy.prototype.getSystemCreateDate = function () {
        return this.systemCreateDate;
    };
    ShipmentDataProxy.prototype.setSystemCreateDate = function (systemCreateDate) {
        this.systemCreateDate = systemCreateDate;
    };
    ShipmentDataProxy.prototype.getSystemLastModificationDate = function () {
        return this.systemLastModificationDate;
    };
    ShipmentDataProxy.prototype.setSystemLastModificationDate = function (systemLastModificationDate) {
        this.systemLastModificationDate = systemLastModificationDate;
    };
    ShipmentDataProxy.prototype.getTemplateType = function () {
        return this.templateType;
    };
    ShipmentDataProxy.prototype.setTemplateType = function (templateType) {
        this.templateType = templateType;
    };
    ShipmentDataProxy.prototype.getTime01 = function () {
        return this.time01;
    };
    ShipmentDataProxy.prototype.setTime01 = function (time01) {
        this.time01 = time01;
    };
    ShipmentDataProxy.prototype.getTime02 = function () {
        return this.time02;
    };
    ShipmentDataProxy.prototype.setTime02 = function (time02) {
        this.time02 = time02;
    };
    ShipmentDataProxy.prototype.getTime03 = function () {
        return this.time03;
    };
    ShipmentDataProxy.prototype.setTime03 = function (time03) {
        this.time03 = time03;
    };
    ShipmentDataProxy.prototype.getTime04 = function () {
        return this.time04;
    };
    ShipmentDataProxy.prototype.setTime04 = function (time04) {
        this.time04 = time04;
    };
    ShipmentDataProxy.prototype.getTime05 = function () {
        return this.time05;
    };
    ShipmentDataProxy.prototype.setTime05 = function (time05) {
        this.time05 = time05;
    };
    ShipmentDataProxy.prototype.getTime06 = function () {
        return this.time06;
    };
    ShipmentDataProxy.prototype.setTime06 = function (time06) {
        this.time06 = time06;
    };
    ShipmentDataProxy.prototype.getTime07 = function () {
        return this.time07;
    };
    ShipmentDataProxy.prototype.setTime07 = function (time07) {
        this.time07 = time07;
    };
    ShipmentDataProxy.prototype.getTime08 = function () {
        return this.time08;
    };
    ShipmentDataProxy.prototype.setTime08 = function (time08) {
        this.time08 = time08;
    };
    ShipmentDataProxy.prototype.getTime09 = function () {
        return this.time09;
    };
    ShipmentDataProxy.prototype.setTime09 = function (time09) {
        this.time09 = time09;
    };
    ShipmentDataProxy.prototype.getTime10 = function () {
        return this.time10;
    };
    ShipmentDataProxy.prototype.setTime10 = function (time10) {
        this.time10 = time10;
    };
    ShipmentDataProxy.prototype.getToTheDebitOf = function () {
        return this.toTheDebitOf;
    };
    ShipmentDataProxy.prototype.setToTheDebitOf = function (toTheDebitOf) {
        this.toTheDebitOf = toTheDebitOf;
    };
    ShipmentDataProxy.prototype.getToleranceLevel1 = function () {
        return this.toleranceLevel1;
    };
    ShipmentDataProxy.prototype.setToleranceLevel1 = function (toleranceLevel1) {
        this.toleranceLevel1 = toleranceLevel1;
    };
    ShipmentDataProxy.prototype.getToleranceLevel2 = function () {
        return this.toleranceLevel2;
    };
    ShipmentDataProxy.prototype.setToleranceLevel2 = function (toleranceLevel2) {
        this.toleranceLevel2 = toleranceLevel2;
    };
    ShipmentDataProxy.prototype.getToleranceLevel3 = function () {
        return this.toleranceLevel3;
    };
    ShipmentDataProxy.prototype.setToleranceLevel3 = function (toleranceLevel3) {
        this.toleranceLevel3 = toleranceLevel3;
    };
    ShipmentDataProxy.prototype.getTourNrSequence = function () {
        return this.tourNrSequence;
    };
    ShipmentDataProxy.prototype.setTourNrSequence = function (tourNrSequence) {
        this.tourNrSequence = tourNrSequence;
    };
    ShipmentDataProxy.prototype.getTransportAddress = function () {
        return this.transportAddress;
    };
    ShipmentDataProxy.prototype.setTransportAddress = function (transportAddress) {
        this.transportAddress = transportAddress;
    };
    ShipmentDataProxy.prototype.isTransportInsurance = function () {
        return this.transportInsurance;
    };
    ShipmentDataProxy.prototype.setTransportInsurance = function (transportInsurance) {
        this.transportInsurance = transportInsurance;
    };
    ShipmentDataProxy.prototype.getTransportStage = function () {
        return this.transportStage;
    };
    ShipmentDataProxy.prototype.setTransportStage = function (transportStage) {
        this.transportStage = transportStage;
    };
    ShipmentDataProxy.prototype.getTransportState = function () {
        return this.transportState;
    };
    ShipmentDataProxy.prototype.setTransportState = function (transportState) {
        this.transportState = transportState;
    };
    ShipmentDataProxy.prototype.getTransportVehicle = function () {
        return this.transportVehicle;
    };
    ShipmentDataProxy.prototype.setTransportVehicle = function (transportVehicle) {
        this.transportVehicle = transportVehicle;
    };
    ShipmentDataProxy.prototype.getType = function () {
        return this.type;
    };
    ShipmentDataProxy.prototype.setType = function (type) {
        this.type = type;
    };
    ShipmentDataProxy.prototype.getTypeOfReference = function () {
        return this.typeOfReference;
    };
    ShipmentDataProxy.prototype.setTypeOfReference = function (typeOfReference) {
        this.typeOfReference = typeOfReference;
    };
    ShipmentDataProxy.prototype.getTypeofDocument = function () {
        return this.typeofDocument;
    };
    ShipmentDataProxy.prototype.setTypeofDocument = function (typeofDocument) {
        this.typeofDocument = typeofDocument;
    };
    ShipmentDataProxy.prototype.getUpsAccount = function () {
        return this.upsAccount;
    };
    ShipmentDataProxy.prototype.setUpsAccount = function (upsAccount) {
        this.upsAccount = upsAccount;
    };
    ShipmentDataProxy.prototype.getUpsBilling = function () {
        return this.upsBilling;
    };
    ShipmentDataProxy.prototype.setUpsBilling = function (upsBilling) {
        this.upsBilling = upsBilling;
    };
    ShipmentDataProxy.prototype.getUpsCOD = function () {
        return this.upsCOD;
    };
    ShipmentDataProxy.prototype.setUpsCOD = function (upsCOD) {
        this.upsCOD = upsCOD;
    };
    ShipmentDataProxy.prototype.getUpsDocType = function () {
        return this.upsDocType;
    };
    ShipmentDataProxy.prototype.setUpsDocType = function (upsDocType) {
        this.upsDocType = upsDocType;
    };
    ShipmentDataProxy.prototype.getUpsPostalCode = function () {
        return this.upsPostalCode;
    };
    ShipmentDataProxy.prototype.setUpsPostalCode = function (upsPostalCode) {
        this.upsPostalCode = upsPostalCode;
    };
    ShipmentDataProxy.prototype.isValid = function () {
        return this.valid;
    };
    ShipmentDataProxy.prototype.setValid = function (valid) {
        this.valid = valid;
    };
    ShipmentDataProxy.prototype.getVesselDepartureDate = function () {
        return this.vesselDepartureDate;
    };
    ShipmentDataProxy.prototype.setVesselDepartureDate = function (vesselDepartureDate) {
        this.vesselDepartureDate = vesselDepartureDate;
    };
    ShipmentDataProxy.prototype.getVesselName = function () {
        return this.vesselName;
    };
    ShipmentDataProxy.prototype.setVesselName = function (vesselName) {
        this.vesselName = vesselName;
    };
    ShipmentDataProxy.prototype.getViewed = function () {
        return this.viewed;
    };
    ShipmentDataProxy.prototype.setViewed = function (viewed) {
        this.viewed = viewed;
    };
    ShipmentDataProxy.prototype.getVoyageNr = function () {
        return this.voyageNr;
    };
    ShipmentDataProxy.prototype.setVoyageNr = function (voyageNr) {
        this.voyageNr = voyageNr;
    };
    ShipmentDataProxy.prototype.isWholeValid = function () {
        return this.wholeValid;
    };
    ShipmentDataProxy.prototype.setWholeValid = function (wholeValid) {
        this.wholeValid = wholeValid;
    };
    ShipmentDataProxy.prototype.getWorth = function () {
        return this.worth;
    };
    ShipmentDataProxy.prototype.setWorth = function (worth) {
        this.worth = worth;
    };
    ShipmentDataProxy.prototype.getWorthCurrency = function () {
        return this.worthCurrency;
    };
    ShipmentDataProxy.prototype.setWorthCurrency = function (worthCurrency) {
        this.worthCurrency = worthCurrency;
    };
    ShipmentDataProxy.prototype.isZoll = function () {
        return this.zoll;
    };
    ShipmentDataProxy.prototype.setZoll = function (zoll) {
        this.zoll = zoll;
    };
    return ShipmentDataProxy;
}(BaseProxyObject_1.BaseProxyObject));
exports.ShipmentDataProxy = ShipmentDataProxy;
//# sourceMappingURL=ShipmentDataProxy.js.map