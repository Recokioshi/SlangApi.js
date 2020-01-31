"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var BaseProxyObject_1 = require("../Common/BaseProxyObject");
var MFDocumentDataProxy = /** @class */ (function (_super) {
    __extends(MFDocumentDataProxy, _super);
    function MFDocumentDataProxy(dbRow) {
        var _this = _super.call(this, dbRow) || this;
        _this.arrivalDate = null;
        _this.arrivalTime = null;
        _this.atdDate = null;
        _this.atdTime = null;
        _this.bolNr = null;
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
        _this.creationDate = null;
        _this.currency01 = null;
        _this.currency02 = null;
        _this.currency03 = null;
        _this.currency04 = null;
        _this.currency05 = null;
        _this.currency06 = null;
        _this.currency07 = null;
        _this.currency08 = null;
        _this.currency09 = null;
        _this.currency10 = null;
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
        _this.declaredPackagesQuantity = null;
        _this.declaredPackagesVolume = null;
        _this.declaredPackagesWeight = null;
        _this.departureDate = null;
        _this.departureTime = null;
        _this.discrepancyReportArrivalDate = null;
        _this.discrepancyReportArrivalTime = null;
        _this.discrepancyReportCreationDate = null;
        _this.discrepancyReportExists = null;
        _this.discrepancyReportRemarks = null;
        _this.discrepancyReportUserId = null;
        _this.discrepancyReportUserName = null;
        _this.discrepancyReportUserSurname = null;
        _this.ediLock = null;
        _this.externalId = null;
        _this.externalId2 = null;
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
        _this.freeTextDictionary3 = null;
        _this.freeTextDictionary4 = null;
        _this.freeTextDictionary5 = null;
        _this.freeTextDictionary6 = null;
        _this.freeTextDictionary7 = null;
        _this.freeTextDictionary8 = null;
        _this.freeTextDictionary9 = null;
        _this.id = null;
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
        _this.lastModificationDate = null;
        _this.lastStatusLocation = null;
        _this.loadingDate = null;
        _this.loadingTime = null;
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
        _this.onHold = null;
        _this.packagesQuantity = null;
        _this.packagesVolume = null;
        _this.packagesWeight = null;
        _this.portOfArrival = null;
        _this.portOfDeparture = null;
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
        _this.recalculate = null;
        _this.reference = null;
        _this.routeId = null;
        _this.sendDate = null;
        _this.serviceId = null;
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
        _this.solutionId = null;
        _this.state = null;
        _this.statusDateLast = null;
        _this.statusLast = null;
        _this.statusSystemDateLast = null;
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
        _this.transportChain = null;
        _this.transportCost = null;
        _this.transportCostCurrency = null;
        _this.transportDepartament = null;
        _this.transportDistance = null;
        _this.transportId = null;
        _this.transportSpecial = null;
        _this.transportState = null;
        _this.type = null;
        _this.upsAccountNo = null;
        _this.upsBookingNr = null;
        _this.upsPageNr = null;
        _this.userId = null;
        _this.vesselArrivalDate = null;
        _this.vesselArrivalTime = null;
        _this.vesselDepartureDate = null;
        _this.vesselDepartureTime = null;
        _this.vesselName = null;
        _this.mapSQLResultRowToProxy(_this, __dirname, 'MFDocumentDataProxy');
        return _this;
    }
    MFDocumentDataProxy.prototype.getArrivalDate = function () {
        return this.arrivalDate;
    };
    MFDocumentDataProxy.prototype.setArrivalDate = function (arrivalDate) {
        this.arrivalDate = arrivalDate;
    };
    MFDocumentDataProxy.prototype.getArrivalTime = function () {
        return this.arrivalTime;
    };
    MFDocumentDataProxy.prototype.setArrivalTime = function (arrivalTime) {
        this.arrivalTime = arrivalTime;
    };
    MFDocumentDataProxy.prototype.getAtdDate = function () {
        return this.atdDate;
    };
    MFDocumentDataProxy.prototype.setAtdDate = function (atdDate) {
        this.atdDate = atdDate;
    };
    MFDocumentDataProxy.prototype.getAtdTime = function () {
        return this.atdTime;
    };
    MFDocumentDataProxy.prototype.setAtdTime = function (atdTime) {
        this.atdTime = atdTime;
    };
    MFDocumentDataProxy.prototype.getBolNr = function () {
        return this.bolNr;
    };
    MFDocumentDataProxy.prototype.setBolNr = function (bolNr) {
        this.bolNr = bolNr;
    };
    MFDocumentDataProxy.prototype.isCheckbox01 = function () {
        return this.checkbox01;
    };
    MFDocumentDataProxy.prototype.setCheckbox01 = function (checkbox01) {
        this.checkbox01 = checkbox01;
    };
    MFDocumentDataProxy.prototype.isCheckbox02 = function () {
        return this.checkbox02;
    };
    MFDocumentDataProxy.prototype.setCheckbox02 = function (checkbox02) {
        this.checkbox02 = checkbox02;
    };
    MFDocumentDataProxy.prototype.isCheckbox03 = function () {
        return this.checkbox03;
    };
    MFDocumentDataProxy.prototype.setCheckbox03 = function (checkbox03) {
        this.checkbox03 = checkbox03;
    };
    MFDocumentDataProxy.prototype.isCheckbox04 = function () {
        return this.checkbox04;
    };
    MFDocumentDataProxy.prototype.setCheckbox04 = function (checkbox04) {
        this.checkbox04 = checkbox04;
    };
    MFDocumentDataProxy.prototype.isCheckbox05 = function () {
        return this.checkbox05;
    };
    MFDocumentDataProxy.prototype.setCheckbox05 = function (checkbox05) {
        this.checkbox05 = checkbox05;
    };
    MFDocumentDataProxy.prototype.isCheckbox06 = function () {
        return this.checkbox06;
    };
    MFDocumentDataProxy.prototype.setCheckbox06 = function (checkbox06) {
        this.checkbox06 = checkbox06;
    };
    MFDocumentDataProxy.prototype.isCheckbox07 = function () {
        return this.checkbox07;
    };
    MFDocumentDataProxy.prototype.setCheckbox07 = function (checkbox07) {
        this.checkbox07 = checkbox07;
    };
    MFDocumentDataProxy.prototype.isCheckbox08 = function () {
        return this.checkbox08;
    };
    MFDocumentDataProxy.prototype.setCheckbox08 = function (checkbox08) {
        this.checkbox08 = checkbox08;
    };
    MFDocumentDataProxy.prototype.isCheckbox09 = function () {
        return this.checkbox09;
    };
    MFDocumentDataProxy.prototype.setCheckbox09 = function (checkbox09) {
        this.checkbox09 = checkbox09;
    };
    MFDocumentDataProxy.prototype.isCheckbox10 = function () {
        return this.checkbox10;
    };
    MFDocumentDataProxy.prototype.setCheckbox10 = function (checkbox10) {
        this.checkbox10 = checkbox10;
    };
    MFDocumentDataProxy.prototype.getCreationDate = function () {
        return this.creationDate;
    };
    MFDocumentDataProxy.prototype.setCreationDate = function (creationDate) {
        this.creationDate = creationDate;
    };
    MFDocumentDataProxy.prototype.getCurrency01 = function () {
        return this.currency01;
    };
    MFDocumentDataProxy.prototype.setCurrency01 = function (currency01) {
        this.currency01 = currency01;
    };
    MFDocumentDataProxy.prototype.getCurrency02 = function () {
        return this.currency02;
    };
    MFDocumentDataProxy.prototype.setCurrency02 = function (currency02) {
        this.currency02 = currency02;
    };
    MFDocumentDataProxy.prototype.getCurrency03 = function () {
        return this.currency03;
    };
    MFDocumentDataProxy.prototype.setCurrency03 = function (currency03) {
        this.currency03 = currency03;
    };
    MFDocumentDataProxy.prototype.getCurrency04 = function () {
        return this.currency04;
    };
    MFDocumentDataProxy.prototype.setCurrency04 = function (currency04) {
        this.currency04 = currency04;
    };
    MFDocumentDataProxy.prototype.getCurrency05 = function () {
        return this.currency05;
    };
    MFDocumentDataProxy.prototype.setCurrency05 = function (currency05) {
        this.currency05 = currency05;
    };
    MFDocumentDataProxy.prototype.getCurrency06 = function () {
        return this.currency06;
    };
    MFDocumentDataProxy.prototype.setCurrency06 = function (currency06) {
        this.currency06 = currency06;
    };
    MFDocumentDataProxy.prototype.getCurrency07 = function () {
        return this.currency07;
    };
    MFDocumentDataProxy.prototype.setCurrency07 = function (currency07) {
        this.currency07 = currency07;
    };
    MFDocumentDataProxy.prototype.getCurrency08 = function () {
        return this.currency08;
    };
    MFDocumentDataProxy.prototype.setCurrency08 = function (currency08) {
        this.currency08 = currency08;
    };
    MFDocumentDataProxy.prototype.getCurrency09 = function () {
        return this.currency09;
    };
    MFDocumentDataProxy.prototype.setCurrency09 = function (currency09) {
        this.currency09 = currency09;
    };
    MFDocumentDataProxy.prototype.getCurrency10 = function () {
        return this.currency10;
    };
    MFDocumentDataProxy.prototype.setCurrency10 = function (currency10) {
        this.currency10 = currency10;
    };
    MFDocumentDataProxy.prototype.getCustReference1 = function () {
        return this.custReference1;
    };
    MFDocumentDataProxy.prototype.setCustReference1 = function (custReference1) {
        this.custReference1 = custReference1;
    };
    MFDocumentDataProxy.prototype.getCustReference10 = function () {
        return this.custReference10;
    };
    MFDocumentDataProxy.prototype.setCustReference10 = function (custReference10) {
        this.custReference10 = custReference10;
    };
    MFDocumentDataProxy.prototype.getCustReference2 = function () {
        return this.custReference2;
    };
    MFDocumentDataProxy.prototype.setCustReference2 = function (custReference2) {
        this.custReference2 = custReference2;
    };
    MFDocumentDataProxy.prototype.getCustReference3 = function () {
        return this.custReference3;
    };
    MFDocumentDataProxy.prototype.setCustReference3 = function (custReference3) {
        this.custReference3 = custReference3;
    };
    MFDocumentDataProxy.prototype.getCustReference4 = function () {
        return this.custReference4;
    };
    MFDocumentDataProxy.prototype.setCustReference4 = function (custReference4) {
        this.custReference4 = custReference4;
    };
    MFDocumentDataProxy.prototype.getCustReference5 = function () {
        return this.custReference5;
    };
    MFDocumentDataProxy.prototype.setCustReference5 = function (custReference5) {
        this.custReference5 = custReference5;
    };
    MFDocumentDataProxy.prototype.getCustReference6 = function () {
        return this.custReference6;
    };
    MFDocumentDataProxy.prototype.setCustReference6 = function (custReference6) {
        this.custReference6 = custReference6;
    };
    MFDocumentDataProxy.prototype.getCustReference7 = function () {
        return this.custReference7;
    };
    MFDocumentDataProxy.prototype.setCustReference7 = function (custReference7) {
        this.custReference7 = custReference7;
    };
    MFDocumentDataProxy.prototype.getCustReference8 = function () {
        return this.custReference8;
    };
    MFDocumentDataProxy.prototype.setCustReference8 = function (custReference8) {
        this.custReference8 = custReference8;
    };
    MFDocumentDataProxy.prototype.getCustReference9 = function () {
        return this.custReference9;
    };
    MFDocumentDataProxy.prototype.setCustReference9 = function (custReference9) {
        this.custReference9 = custReference9;
    };
    MFDocumentDataProxy.prototype.getDate01 = function () {
        return this.date01;
    };
    MFDocumentDataProxy.prototype.setDate01 = function (date01) {
        this.date01 = date01;
    };
    MFDocumentDataProxy.prototype.getDate02 = function () {
        return this.date02;
    };
    MFDocumentDataProxy.prototype.setDate02 = function (date02) {
        this.date02 = date02;
    };
    MFDocumentDataProxy.prototype.getDate03 = function () {
        return this.date03;
    };
    MFDocumentDataProxy.prototype.setDate03 = function (date03) {
        this.date03 = date03;
    };
    MFDocumentDataProxy.prototype.getDate04 = function () {
        return this.date04;
    };
    MFDocumentDataProxy.prototype.setDate04 = function (date04) {
        this.date04 = date04;
    };
    MFDocumentDataProxy.prototype.getDate05 = function () {
        return this.date05;
    };
    MFDocumentDataProxy.prototype.setDate05 = function (date05) {
        this.date05 = date05;
    };
    MFDocumentDataProxy.prototype.getDate06 = function () {
        return this.date06;
    };
    MFDocumentDataProxy.prototype.setDate06 = function (date06) {
        this.date06 = date06;
    };
    MFDocumentDataProxy.prototype.getDate07 = function () {
        return this.date07;
    };
    MFDocumentDataProxy.prototype.setDate07 = function (date07) {
        this.date07 = date07;
    };
    MFDocumentDataProxy.prototype.getDate08 = function () {
        return this.date08;
    };
    MFDocumentDataProxy.prototype.setDate08 = function (date08) {
        this.date08 = date08;
    };
    MFDocumentDataProxy.prototype.getDate09 = function () {
        return this.date09;
    };
    MFDocumentDataProxy.prototype.setDate09 = function (date09) {
        this.date09 = date09;
    };
    MFDocumentDataProxy.prototype.getDate10 = function () {
        return this.date10;
    };
    MFDocumentDataProxy.prototype.setDate10 = function (date10) {
        this.date10 = date10;
    };
    MFDocumentDataProxy.prototype.getDeclaredPackagesQuantity = function () {
        return this.declaredPackagesQuantity;
    };
    MFDocumentDataProxy.prototype.setDeclaredPackagesQuantity = function (declaredPackagesQuantity) {
        this.declaredPackagesQuantity = declaredPackagesQuantity;
    };
    MFDocumentDataProxy.prototype.getDeclaredPackagesVolume = function () {
        return this.declaredPackagesVolume;
    };
    MFDocumentDataProxy.prototype.setDeclaredPackagesVolume = function (declaredPackagesVolume) {
        this.declaredPackagesVolume = declaredPackagesVolume;
    };
    MFDocumentDataProxy.prototype.getDeclaredPackagesWeight = function () {
        return this.declaredPackagesWeight;
    };
    MFDocumentDataProxy.prototype.setDeclaredPackagesWeight = function (declaredPackagesWeight) {
        this.declaredPackagesWeight = declaredPackagesWeight;
    };
    MFDocumentDataProxy.prototype.getDepartureDate = function () {
        return this.departureDate;
    };
    MFDocumentDataProxy.prototype.setDepartureDate = function (departureDate) {
        this.departureDate = departureDate;
    };
    MFDocumentDataProxy.prototype.getDepartureTime = function () {
        return this.departureTime;
    };
    MFDocumentDataProxy.prototype.setDepartureTime = function (departureTime) {
        this.departureTime = departureTime;
    };
    MFDocumentDataProxy.prototype.getDiscrepancyReportArrivalDate = function () {
        return this.discrepancyReportArrivalDate;
    };
    MFDocumentDataProxy.prototype.setDiscrepancyReportArrivalDate = function (discrepancyReportArrivalDate) {
        this.discrepancyReportArrivalDate = discrepancyReportArrivalDate;
    };
    MFDocumentDataProxy.prototype.getDiscrepancyReportArrivalTime = function () {
        return this.discrepancyReportArrivalTime;
    };
    MFDocumentDataProxy.prototype.setDiscrepancyReportArrivalTime = function (discrepancyReportArrivalTime) {
        this.discrepancyReportArrivalTime = discrepancyReportArrivalTime;
    };
    MFDocumentDataProxy.prototype.getDiscrepancyReportCreationDate = function () {
        return this.discrepancyReportCreationDate;
    };
    MFDocumentDataProxy.prototype.setDiscrepancyReportCreationDate = function (discrepancyReportCreationDate) {
        this.discrepancyReportCreationDate = discrepancyReportCreationDate;
    };
    MFDocumentDataProxy.prototype.getDiscrepancyReportExists = function () {
        return this.discrepancyReportExists;
    };
    MFDocumentDataProxy.prototype.setDiscrepancyReportExists = function (discrepancyReportExists) {
        this.discrepancyReportExists = discrepancyReportExists;
    };
    MFDocumentDataProxy.prototype.getDiscrepancyReportRemarks = function () {
        return this.discrepancyReportRemarks;
    };
    MFDocumentDataProxy.prototype.setDiscrepancyReportRemarks = function (discrepancyReportRemarks) {
        this.discrepancyReportRemarks = discrepancyReportRemarks;
    };
    MFDocumentDataProxy.prototype.getDiscrepancyReportUserId = function () {
        return this.discrepancyReportUserId;
    };
    MFDocumentDataProxy.prototype.setDiscrepancyReportUserId = function (discrepancyReportUserId) {
        this.discrepancyReportUserId = discrepancyReportUserId;
    };
    MFDocumentDataProxy.prototype.getDiscrepancyReportUserName = function () {
        return this.discrepancyReportUserName;
    };
    MFDocumentDataProxy.prototype.setDiscrepancyReportUserName = function (discrepancyReportUserName) {
        this.discrepancyReportUserName = discrepancyReportUserName;
    };
    MFDocumentDataProxy.prototype.getDiscrepancyReportUserSurname = function () {
        return this.discrepancyReportUserSurname;
    };
    MFDocumentDataProxy.prototype.setDiscrepancyReportUserSurname = function (discrepancyReportUserSurname) {
        this.discrepancyReportUserSurname = discrepancyReportUserSurname;
    };
    MFDocumentDataProxy.prototype.getEdiLock = function () {
        return this.ediLock;
    };
    MFDocumentDataProxy.prototype.setEdiLock = function (ediLock) {
        this.ediLock = ediLock;
    };
    MFDocumentDataProxy.prototype.getExternalId = function () {
        return this.externalId;
    };
    MFDocumentDataProxy.prototype.setExternalId = function (externalId) {
        this.externalId = externalId;
    };
    MFDocumentDataProxy.prototype.getExternalId2 = function () {
        return this.externalId2;
    };
    MFDocumentDataProxy.prototype.setExternalId2 = function (externalId2) {
        this.externalId2 = externalId2;
    };
    MFDocumentDataProxy.prototype.getFreeTextDictionary1 = function () {
        return this.freeTextDictionary1;
    };
    MFDocumentDataProxy.prototype.setFreeTextDictionary1 = function (freeTextDictionary1) {
        this.freeTextDictionary1 = freeTextDictionary1;
    };
    MFDocumentDataProxy.prototype.getFreeTextDictionary10 = function () {
        return this.freeTextDictionary10;
    };
    MFDocumentDataProxy.prototype.setFreeTextDictionary10 = function (freeTextDictionary10) {
        this.freeTextDictionary10 = freeTextDictionary10;
    };
    MFDocumentDataProxy.prototype.getFreeTextDictionary11 = function () {
        return this.freeTextDictionary11;
    };
    MFDocumentDataProxy.prototype.setFreeTextDictionary11 = function (freeTextDictionary11) {
        this.freeTextDictionary11 = freeTextDictionary11;
    };
    MFDocumentDataProxy.prototype.getFreeTextDictionary12 = function () {
        return this.freeTextDictionary12;
    };
    MFDocumentDataProxy.prototype.setFreeTextDictionary12 = function (freeTextDictionary12) {
        this.freeTextDictionary12 = freeTextDictionary12;
    };
    MFDocumentDataProxy.prototype.getFreeTextDictionary13 = function () {
        return this.freeTextDictionary13;
    };
    MFDocumentDataProxy.prototype.setFreeTextDictionary13 = function (freeTextDictionary13) {
        this.freeTextDictionary13 = freeTextDictionary13;
    };
    MFDocumentDataProxy.prototype.getFreeTextDictionary14 = function () {
        return this.freeTextDictionary14;
    };
    MFDocumentDataProxy.prototype.setFreeTextDictionary14 = function (freeTextDictionary14) {
        this.freeTextDictionary14 = freeTextDictionary14;
    };
    MFDocumentDataProxy.prototype.getFreeTextDictionary15 = function () {
        return this.freeTextDictionary15;
    };
    MFDocumentDataProxy.prototype.setFreeTextDictionary15 = function (freeTextDictionary15) {
        this.freeTextDictionary15 = freeTextDictionary15;
    };
    MFDocumentDataProxy.prototype.getFreeTextDictionary16 = function () {
        return this.freeTextDictionary16;
    };
    MFDocumentDataProxy.prototype.setFreeTextDictionary16 = function (freeTextDictionary16) {
        this.freeTextDictionary16 = freeTextDictionary16;
    };
    MFDocumentDataProxy.prototype.getFreeTextDictionary17 = function () {
        return this.freeTextDictionary17;
    };
    MFDocumentDataProxy.prototype.setFreeTextDictionary17 = function (freeTextDictionary17) {
        this.freeTextDictionary17 = freeTextDictionary17;
    };
    MFDocumentDataProxy.prototype.getFreeTextDictionary18 = function () {
        return this.freeTextDictionary18;
    };
    MFDocumentDataProxy.prototype.setFreeTextDictionary18 = function (freeTextDictionary18) {
        this.freeTextDictionary18 = freeTextDictionary18;
    };
    MFDocumentDataProxy.prototype.getFreeTextDictionary19 = function () {
        return this.freeTextDictionary19;
    };
    MFDocumentDataProxy.prototype.setFreeTextDictionary19 = function (freeTextDictionary19) {
        this.freeTextDictionary19 = freeTextDictionary19;
    };
    MFDocumentDataProxy.prototype.getFreeTextDictionary2 = function () {
        return this.freeTextDictionary2;
    };
    MFDocumentDataProxy.prototype.setFreeTextDictionary2 = function (freeTextDictionary2) {
        this.freeTextDictionary2 = freeTextDictionary2;
    };
    MFDocumentDataProxy.prototype.getFreeTextDictionary20 = function () {
        return this.freeTextDictionary20;
    };
    MFDocumentDataProxy.prototype.setFreeTextDictionary20 = function (freeTextDictionary20) {
        this.freeTextDictionary20 = freeTextDictionary20;
    };
    MFDocumentDataProxy.prototype.getFreeTextDictionary3 = function () {
        return this.freeTextDictionary3;
    };
    MFDocumentDataProxy.prototype.setFreeTextDictionary3 = function (freeTextDictionary3) {
        this.freeTextDictionary3 = freeTextDictionary3;
    };
    MFDocumentDataProxy.prototype.getFreeTextDictionary4 = function () {
        return this.freeTextDictionary4;
    };
    MFDocumentDataProxy.prototype.setFreeTextDictionary4 = function (freeTextDictionary4) {
        this.freeTextDictionary4 = freeTextDictionary4;
    };
    MFDocumentDataProxy.prototype.getFreeTextDictionary5 = function () {
        return this.freeTextDictionary5;
    };
    MFDocumentDataProxy.prototype.setFreeTextDictionary5 = function (freeTextDictionary5) {
        this.freeTextDictionary5 = freeTextDictionary5;
    };
    MFDocumentDataProxy.prototype.getFreeTextDictionary6 = function () {
        return this.freeTextDictionary6;
    };
    MFDocumentDataProxy.prototype.setFreeTextDictionary6 = function (freeTextDictionary6) {
        this.freeTextDictionary6 = freeTextDictionary6;
    };
    MFDocumentDataProxy.prototype.getFreeTextDictionary7 = function () {
        return this.freeTextDictionary7;
    };
    MFDocumentDataProxy.prototype.setFreeTextDictionary7 = function (freeTextDictionary7) {
        this.freeTextDictionary7 = freeTextDictionary7;
    };
    MFDocumentDataProxy.prototype.getFreeTextDictionary8 = function () {
        return this.freeTextDictionary8;
    };
    MFDocumentDataProxy.prototype.setFreeTextDictionary8 = function (freeTextDictionary8) {
        this.freeTextDictionary8 = freeTextDictionary8;
    };
    MFDocumentDataProxy.prototype.getFreeTextDictionary9 = function () {
        return this.freeTextDictionary9;
    };
    MFDocumentDataProxy.prototype.setFreeTextDictionary9 = function (freeTextDictionary9) {
        this.freeTextDictionary9 = freeTextDictionary9;
    };
    MFDocumentDataProxy.prototype.getId = function () {
        return this.id;
    };
    MFDocumentDataProxy.prototype.setId = function (id) {
        this.id = id;
    };
    MFDocumentDataProxy.prototype.getIntNumber01 = function () {
        return this.intNumber01;
    };
    MFDocumentDataProxy.prototype.setIntNumber01 = function (intNumber01) {
        this.intNumber01 = intNumber01;
    };
    MFDocumentDataProxy.prototype.getIntNumber02 = function () {
        return this.intNumber02;
    };
    MFDocumentDataProxy.prototype.setIntNumber02 = function (intNumber02) {
        this.intNumber02 = intNumber02;
    };
    MFDocumentDataProxy.prototype.getIntNumber03 = function () {
        return this.intNumber03;
    };
    MFDocumentDataProxy.prototype.setIntNumber03 = function (intNumber03) {
        this.intNumber03 = intNumber03;
    };
    MFDocumentDataProxy.prototype.getIntNumber04 = function () {
        return this.intNumber04;
    };
    MFDocumentDataProxy.prototype.setIntNumber04 = function (intNumber04) {
        this.intNumber04 = intNumber04;
    };
    MFDocumentDataProxy.prototype.getIntNumber05 = function () {
        return this.intNumber05;
    };
    MFDocumentDataProxy.prototype.setIntNumber05 = function (intNumber05) {
        this.intNumber05 = intNumber05;
    };
    MFDocumentDataProxy.prototype.getIntNumber06 = function () {
        return this.intNumber06;
    };
    MFDocumentDataProxy.prototype.setIntNumber06 = function (intNumber06) {
        this.intNumber06 = intNumber06;
    };
    MFDocumentDataProxy.prototype.getIntNumber07 = function () {
        return this.intNumber07;
    };
    MFDocumentDataProxy.prototype.setIntNumber07 = function (intNumber07) {
        this.intNumber07 = intNumber07;
    };
    MFDocumentDataProxy.prototype.getIntNumber08 = function () {
        return this.intNumber08;
    };
    MFDocumentDataProxy.prototype.setIntNumber08 = function (intNumber08) {
        this.intNumber08 = intNumber08;
    };
    MFDocumentDataProxy.prototype.getIntNumber09 = function () {
        return this.intNumber09;
    };
    MFDocumentDataProxy.prototype.setIntNumber09 = function (intNumber09) {
        this.intNumber09 = intNumber09;
    };
    MFDocumentDataProxy.prototype.getIntNumber10 = function () {
        return this.intNumber10;
    };
    MFDocumentDataProxy.prototype.setIntNumber10 = function (intNumber10) {
        this.intNumber10 = intNumber10;
    };
    MFDocumentDataProxy.prototype.getLastModificationDate = function () {
        return this.lastModificationDate;
    };
    MFDocumentDataProxy.prototype.setLastModificationDate = function (lastModificationDate) {
        this.lastModificationDate = lastModificationDate;
    };
    MFDocumentDataProxy.prototype.getLastStatusLocation = function () {
        return this.lastStatusLocation;
    };
    MFDocumentDataProxy.prototype.setLastStatusLocation = function (lastStatusLocation) {
        this.lastStatusLocation = lastStatusLocation;
    };
    MFDocumentDataProxy.prototype.getLoadingDate = function () {
        return this.loadingDate;
    };
    MFDocumentDataProxy.prototype.setLoadingDate = function (loadingDate) {
        this.loadingDate = loadingDate;
    };
    MFDocumentDataProxy.prototype.getLoadingTime = function () {
        return this.loadingTime;
    };
    MFDocumentDataProxy.prototype.setLoadingTime = function (loadingTime) {
        this.loadingTime = loadingTime;
    };
    MFDocumentDataProxy.prototype.getLoadingType = function () {
        return this.loadingType;
    };
    MFDocumentDataProxy.prototype.setLoadingType = function (loadingType) {
        this.loadingType = loadingType;
    };
    MFDocumentDataProxy.prototype.getLocationStatus = function () {
        return this.locationStatus;
    };
    MFDocumentDataProxy.prototype.setLocationStatus = function (locationStatus) {
        this.locationStatus = locationStatus;
    };
    MFDocumentDataProxy.prototype.getLongReference01 = function () {
        return this.longReference01;
    };
    MFDocumentDataProxy.prototype.setLongReference01 = function (longReference01) {
        this.longReference01 = longReference01;
    };
    MFDocumentDataProxy.prototype.getLongReference02 = function () {
        return this.longReference02;
    };
    MFDocumentDataProxy.prototype.setLongReference02 = function (longReference02) {
        this.longReference02 = longReference02;
    };
    MFDocumentDataProxy.prototype.getLongReference03 = function () {
        return this.longReference03;
    };
    MFDocumentDataProxy.prototype.setLongReference03 = function (longReference03) {
        this.longReference03 = longReference03;
    };
    MFDocumentDataProxy.prototype.getLongReference04 = function () {
        return this.longReference04;
    };
    MFDocumentDataProxy.prototype.setLongReference04 = function (longReference04) {
        this.longReference04 = longReference04;
    };
    MFDocumentDataProxy.prototype.getLongReference05 = function () {
        return this.longReference05;
    };
    MFDocumentDataProxy.prototype.setLongReference05 = function (longReference05) {
        this.longReference05 = longReference05;
    };
    MFDocumentDataProxy.prototype.getLongReference06 = function () {
        return this.longReference06;
    };
    MFDocumentDataProxy.prototype.setLongReference06 = function (longReference06) {
        this.longReference06 = longReference06;
    };
    MFDocumentDataProxy.prototype.getLongReference07 = function () {
        return this.longReference07;
    };
    MFDocumentDataProxy.prototype.setLongReference07 = function (longReference07) {
        this.longReference07 = longReference07;
    };
    MFDocumentDataProxy.prototype.getLongReference08 = function () {
        return this.longReference08;
    };
    MFDocumentDataProxy.prototype.setLongReference08 = function (longReference08) {
        this.longReference08 = longReference08;
    };
    MFDocumentDataProxy.prototype.getLongReference09 = function () {
        return this.longReference09;
    };
    MFDocumentDataProxy.prototype.setLongReference09 = function (longReference09) {
        this.longReference09 = longReference09;
    };
    MFDocumentDataProxy.prototype.getLongReference10 = function () {
        return this.longReference10;
    };
    MFDocumentDataProxy.prototype.setLongReference10 = function (longReference10) {
        this.longReference10 = longReference10;
    };
    MFDocumentDataProxy.prototype.getOnHold = function () {
        return this.onHold;
    };
    MFDocumentDataProxy.prototype.setOnHold = function (onHold) {
        this.onHold = onHold;
    };
    MFDocumentDataProxy.prototype.getPackagesQuantity = function () {
        return this.packagesQuantity;
    };
    MFDocumentDataProxy.prototype.setPackagesQuantity = function (packagesQuantity) {
        this.packagesQuantity = packagesQuantity;
    };
    MFDocumentDataProxy.prototype.getPackagesVolume = function () {
        return this.packagesVolume;
    };
    MFDocumentDataProxy.prototype.setPackagesVolume = function (packagesVolume) {
        this.packagesVolume = packagesVolume;
    };
    MFDocumentDataProxy.prototype.getPackagesWeight = function () {
        return this.packagesWeight;
    };
    MFDocumentDataProxy.prototype.setPackagesWeight = function (packagesWeight) {
        this.packagesWeight = packagesWeight;
    };
    MFDocumentDataProxy.prototype.getPortOfArrival = function () {
        return this.portOfArrival;
    };
    MFDocumentDataProxy.prototype.setPortOfArrival = function (portOfArrival) {
        this.portOfArrival = portOfArrival;
    };
    MFDocumentDataProxy.prototype.getPortOfDeparture = function () {
        return this.portOfDeparture;
    };
    MFDocumentDataProxy.prototype.setPortOfDeparture = function (portOfDeparture) {
        this.portOfDeparture = portOfDeparture;
    };
    MFDocumentDataProxy.prototype.getRealNumber01 = function () {
        return this.realNumber01;
    };
    MFDocumentDataProxy.prototype.setRealNumber01 = function (realNumber01) {
        this.realNumber01 = realNumber01;
    };
    MFDocumentDataProxy.prototype.getRealNumber02 = function () {
        return this.realNumber02;
    };
    MFDocumentDataProxy.prototype.setRealNumber02 = function (realNumber02) {
        this.realNumber02 = realNumber02;
    };
    MFDocumentDataProxy.prototype.getRealNumber03 = function () {
        return this.realNumber03;
    };
    MFDocumentDataProxy.prototype.setRealNumber03 = function (realNumber03) {
        this.realNumber03 = realNumber03;
    };
    MFDocumentDataProxy.prototype.getRealNumber04 = function () {
        return this.realNumber04;
    };
    MFDocumentDataProxy.prototype.setRealNumber04 = function (realNumber04) {
        this.realNumber04 = realNumber04;
    };
    MFDocumentDataProxy.prototype.getRealNumber05 = function () {
        return this.realNumber05;
    };
    MFDocumentDataProxy.prototype.setRealNumber05 = function (realNumber05) {
        this.realNumber05 = realNumber05;
    };
    MFDocumentDataProxy.prototype.getRealNumber06 = function () {
        return this.realNumber06;
    };
    MFDocumentDataProxy.prototype.setRealNumber06 = function (realNumber06) {
        this.realNumber06 = realNumber06;
    };
    MFDocumentDataProxy.prototype.getRealNumber07 = function () {
        return this.realNumber07;
    };
    MFDocumentDataProxy.prototype.setRealNumber07 = function (realNumber07) {
        this.realNumber07 = realNumber07;
    };
    MFDocumentDataProxy.prototype.getRealNumber08 = function () {
        return this.realNumber08;
    };
    MFDocumentDataProxy.prototype.setRealNumber08 = function (realNumber08) {
        this.realNumber08 = realNumber08;
    };
    MFDocumentDataProxy.prototype.getRealNumber09 = function () {
        return this.realNumber09;
    };
    MFDocumentDataProxy.prototype.setRealNumber09 = function (realNumber09) {
        this.realNumber09 = realNumber09;
    };
    MFDocumentDataProxy.prototype.getRealNumber10 = function () {
        return this.realNumber10;
    };
    MFDocumentDataProxy.prototype.setRealNumber10 = function (realNumber10) {
        this.realNumber10 = realNumber10;
    };
    MFDocumentDataProxy.prototype.getReasonLast = function () {
        return this.reasonLast;
    };
    MFDocumentDataProxy.prototype.setReasonLast = function (reasonLast) {
        this.reasonLast = reasonLast;
    };
    MFDocumentDataProxy.prototype.getRecalculate = function () {
        return this.recalculate;
    };
    MFDocumentDataProxy.prototype.setRecalculate = function (recalculate) {
        this.recalculate = recalculate;
    };
    MFDocumentDataProxy.prototype.getReference = function () {
        return this.reference;
    };
    MFDocumentDataProxy.prototype.setReference = function (reference) {
        this.reference = reference;
    };
    MFDocumentDataProxy.prototype.getRouteId = function () {
        return this.routeId;
    };
    MFDocumentDataProxy.prototype.setRouteId = function (routeId) {
        this.routeId = routeId;
    };
    MFDocumentDataProxy.prototype.getSendDate = function () {
        return this.sendDate;
    };
    MFDocumentDataProxy.prototype.setSendDate = function (sendDate) {
        this.sendDate = sendDate;
    };
    MFDocumentDataProxy.prototype.getServiceId = function () {
        return this.serviceId;
    };
    MFDocumentDataProxy.prototype.setServiceId = function (serviceId) {
        this.serviceId = serviceId;
    };
    MFDocumentDataProxy.prototype.getShortReference01 = function () {
        return this.shortReference01;
    };
    MFDocumentDataProxy.prototype.setShortReference01 = function (shortReference01) {
        this.shortReference01 = shortReference01;
    };
    MFDocumentDataProxy.prototype.getShortReference02 = function () {
        return this.shortReference02;
    };
    MFDocumentDataProxy.prototype.setShortReference02 = function (shortReference02) {
        this.shortReference02 = shortReference02;
    };
    MFDocumentDataProxy.prototype.getShortReference03 = function () {
        return this.shortReference03;
    };
    MFDocumentDataProxy.prototype.setShortReference03 = function (shortReference03) {
        this.shortReference03 = shortReference03;
    };
    MFDocumentDataProxy.prototype.getShortReference04 = function () {
        return this.shortReference04;
    };
    MFDocumentDataProxy.prototype.setShortReference04 = function (shortReference04) {
        this.shortReference04 = shortReference04;
    };
    MFDocumentDataProxy.prototype.getShortReference05 = function () {
        return this.shortReference05;
    };
    MFDocumentDataProxy.prototype.setShortReference05 = function (shortReference05) {
        this.shortReference05 = shortReference05;
    };
    MFDocumentDataProxy.prototype.getShortReference06 = function () {
        return this.shortReference06;
    };
    MFDocumentDataProxy.prototype.setShortReference06 = function (shortReference06) {
        this.shortReference06 = shortReference06;
    };
    MFDocumentDataProxy.prototype.getShortReference07 = function () {
        return this.shortReference07;
    };
    MFDocumentDataProxy.prototype.setShortReference07 = function (shortReference07) {
        this.shortReference07 = shortReference07;
    };
    MFDocumentDataProxy.prototype.getShortReference08 = function () {
        return this.shortReference08;
    };
    MFDocumentDataProxy.prototype.setShortReference08 = function (shortReference08) {
        this.shortReference08 = shortReference08;
    };
    MFDocumentDataProxy.prototype.getShortReference09 = function () {
        return this.shortReference09;
    };
    MFDocumentDataProxy.prototype.setShortReference09 = function (shortReference09) {
        this.shortReference09 = shortReference09;
    };
    MFDocumentDataProxy.prototype.getShortReference10 = function () {
        return this.shortReference10;
    };
    MFDocumentDataProxy.prototype.setShortReference10 = function (shortReference10) {
        this.shortReference10 = shortReference10;
    };
    MFDocumentDataProxy.prototype.getSolutionId = function () {
        return this.solutionId;
    };
    MFDocumentDataProxy.prototype.setSolutionId = function (solutionId) {
        this.solutionId = solutionId;
    };
    MFDocumentDataProxy.prototype.getState = function () {
        return this.state;
    };
    MFDocumentDataProxy.prototype.setState = function (state) {
        this.state = state;
    };
    MFDocumentDataProxy.prototype.getStatusDateLast = function () {
        return this.statusDateLast;
    };
    MFDocumentDataProxy.prototype.setStatusDateLast = function (statusDateLast) {
        this.statusDateLast = statusDateLast;
    };
    MFDocumentDataProxy.prototype.getStatusLast = function () {
        return this.statusLast;
    };
    MFDocumentDataProxy.prototype.setStatusLast = function (statusLast) {
        this.statusLast = statusLast;
    };
    MFDocumentDataProxy.prototype.getStatusSystemDateLast = function () {
        return this.statusSystemDateLast;
    };
    MFDocumentDataProxy.prototype.setStatusSystemDateLast = function (statusSystemDateLast) {
        this.statusSystemDateLast = statusSystemDateLast;
    };
    MFDocumentDataProxy.prototype.getTime01 = function () {
        return this.time01;
    };
    MFDocumentDataProxy.prototype.setTime01 = function (time01) {
        this.time01 = time01;
    };
    MFDocumentDataProxy.prototype.getTime02 = function () {
        return this.time02;
    };
    MFDocumentDataProxy.prototype.setTime02 = function (time02) {
        this.time02 = time02;
    };
    MFDocumentDataProxy.prototype.getTime03 = function () {
        return this.time03;
    };
    MFDocumentDataProxy.prototype.setTime03 = function (time03) {
        this.time03 = time03;
    };
    MFDocumentDataProxy.prototype.getTime04 = function () {
        return this.time04;
    };
    MFDocumentDataProxy.prototype.setTime04 = function (time04) {
        this.time04 = time04;
    };
    MFDocumentDataProxy.prototype.getTime05 = function () {
        return this.time05;
    };
    MFDocumentDataProxy.prototype.setTime05 = function (time05) {
        this.time05 = time05;
    };
    MFDocumentDataProxy.prototype.getTime06 = function () {
        return this.time06;
    };
    MFDocumentDataProxy.prototype.setTime06 = function (time06) {
        this.time06 = time06;
    };
    MFDocumentDataProxy.prototype.getTime07 = function () {
        return this.time07;
    };
    MFDocumentDataProxy.prototype.setTime07 = function (time07) {
        this.time07 = time07;
    };
    MFDocumentDataProxy.prototype.getTime08 = function () {
        return this.time08;
    };
    MFDocumentDataProxy.prototype.setTime08 = function (time08) {
        this.time08 = time08;
    };
    MFDocumentDataProxy.prototype.getTime09 = function () {
        return this.time09;
    };
    MFDocumentDataProxy.prototype.setTime09 = function (time09) {
        this.time09 = time09;
    };
    MFDocumentDataProxy.prototype.getTime10 = function () {
        return this.time10;
    };
    MFDocumentDataProxy.prototype.setTime10 = function (time10) {
        this.time10 = time10;
    };
    MFDocumentDataProxy.prototype.getTransportChain = function () {
        return this.transportChain;
    };
    MFDocumentDataProxy.prototype.setTransportChain = function (transportChain) {
        this.transportChain = transportChain;
    };
    MFDocumentDataProxy.prototype.getTransportCost = function () {
        return this.transportCost;
    };
    MFDocumentDataProxy.prototype.setTransportCost = function (transportCost) {
        this.transportCost = transportCost;
    };
    MFDocumentDataProxy.prototype.getTransportCostCurrency = function () {
        return this.transportCostCurrency;
    };
    MFDocumentDataProxy.prototype.setTransportCostCurrency = function (transportCostCurrency) {
        this.transportCostCurrency = transportCostCurrency;
    };
    MFDocumentDataProxy.prototype.getTransportDepartament = function () {
        return this.transportDepartament;
    };
    MFDocumentDataProxy.prototype.setTransportDepartament = function (transportDepartament) {
        this.transportDepartament = transportDepartament;
    };
    MFDocumentDataProxy.prototype.getTransportDistance = function () {
        return this.transportDistance;
    };
    MFDocumentDataProxy.prototype.setTransportDistance = function (transportDistance) {
        this.transportDistance = transportDistance;
    };
    MFDocumentDataProxy.prototype.getTransportId = function () {
        return this.transportId;
    };
    MFDocumentDataProxy.prototype.setTransportId = function (transportId) {
        this.transportId = transportId;
    };
    MFDocumentDataProxy.prototype.getTransportSpecial = function () {
        return this.transportSpecial;
    };
    MFDocumentDataProxy.prototype.setTransportSpecial = function (transportSpecial) {
        this.transportSpecial = transportSpecial;
    };
    MFDocumentDataProxy.prototype.getTransportState = function () {
        return this.transportState;
    };
    MFDocumentDataProxy.prototype.setTransportState = function (transportState) {
        this.transportState = transportState;
    };
    MFDocumentDataProxy.prototype.getType = function () {
        return this.type;
    };
    MFDocumentDataProxy.prototype.setType = function (type) {
        this.type = type;
    };
    MFDocumentDataProxy.prototype.getUpsAccountNo = function () {
        return this.upsAccountNo;
    };
    MFDocumentDataProxy.prototype.setUpsAccountNo = function (upsAccountNo) {
        this.upsAccountNo = upsAccountNo;
    };
    MFDocumentDataProxy.prototype.getUpsBookingNr = function () {
        return this.upsBookingNr;
    };
    MFDocumentDataProxy.prototype.setUpsBookingNr = function (upsBookingNr) {
        this.upsBookingNr = upsBookingNr;
    };
    MFDocumentDataProxy.prototype.getUpsPageNr = function () {
        return this.upsPageNr;
    };
    MFDocumentDataProxy.prototype.setUpsPageNr = function (upsPageNr) {
        this.upsPageNr = upsPageNr;
    };
    MFDocumentDataProxy.prototype.getUserId = function () {
        return this.userId;
    };
    MFDocumentDataProxy.prototype.setUserId = function (userId) {
        this.userId = userId;
    };
    MFDocumentDataProxy.prototype.getVesselArrivalDate = function () {
        return this.vesselArrivalDate;
    };
    MFDocumentDataProxy.prototype.setVesselArrivalDate = function (vesselArrivalDate) {
        this.vesselArrivalDate = vesselArrivalDate;
    };
    MFDocumentDataProxy.prototype.getVesselArrivalTime = function () {
        return this.vesselArrivalTime;
    };
    MFDocumentDataProxy.prototype.setVesselArrivalTime = function (vesselArrivalTime) {
        this.vesselArrivalTime = vesselArrivalTime;
    };
    MFDocumentDataProxy.prototype.getVesselDepartureDate = function () {
        return this.vesselDepartureDate;
    };
    MFDocumentDataProxy.prototype.setVesselDepartureDate = function (vesselDepartureDate) {
        this.vesselDepartureDate = vesselDepartureDate;
    };
    MFDocumentDataProxy.prototype.getVesselDepartureTime = function () {
        return this.vesselDepartureTime;
    };
    MFDocumentDataProxy.prototype.setVesselDepartureTime = function (vesselDepartureTime) {
        this.vesselDepartureTime = vesselDepartureTime;
    };
    MFDocumentDataProxy.prototype.getVesselName = function () {
        return this.vesselName;
    };
    MFDocumentDataProxy.prototype.setVesselName = function (vesselName) {
        this.vesselName = vesselName;
    };
    return MFDocumentDataProxy;
}(BaseProxyObject_1.BaseProxyObject));
exports.MFDocumentDataProxy = MFDocumentDataProxy;
//# sourceMappingURL=MFDocumentDataProxy.js.map