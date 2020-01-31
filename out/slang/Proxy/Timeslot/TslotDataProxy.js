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
var TslotDataProxy = /** @class */ (function (_super) {
    __extends(TslotDataProxy, _super);
    function TslotDataProxy(dbRow) {
        var _this = _super.call(this, dbRow) || this;
        _this.dictionaryField1 = null;
        _this.dictionaryField10 = null;
        _this.dictionaryField2 = null;
        _this.dictionaryField3 = null;
        _this.dictionaryField4 = null;
        _this.dictionaryField5 = null;
        _this.dictionaryField6 = null;
        _this.dictionaryField7 = null;
        _this.dictionaryField8 = null;
        _this.dictionaryField9 = null;
        _this.draftId = null;
        _this.endDate = null;
        _this.endTime = null;
        _this.expiryDate = null;
        _this.expiryDeadline = null;
        _this.expiryTime = null;
        _this.freeDate1 = null;
        _this.freeTime1 = null;
        _this.friday = null;
        _this.id = null;
        _this.integerField1 = null;
        _this.integerField2 = null;
        _this.integerField3 = null;
        _this.integerField4 = null;
        _this.integerField5 = null;
        _this.lastStatusLocation = null;
        _this.lockDeadline = null;
        _this.lockedByUser = null;
        _this.monday = null;
        _this.numericField1 = null;
        _this.numericField2 = null;
        _this.numericField3 = null;
        _this.numericField4 = null;
        _this.numericField5 = null;
        _this.parentId = null;
        _this.place1 = null;
        _this.place2 = null;
        _this.placeDict1 = null;
        _this.placeDict2 = null;
        _this.placeDict3 = null;
        _this.reasonLast = null;
        _this.reference1 = null;
        _this.reference10 = null;
        _this.reference2 = null;
        _this.reference3 = null;
        _this.reference4 = null;
        _this.reference5 = null;
        _this.reference6 = null;
        _this.reference7 = null;
        _this.reference8 = null;
        _this.reference9 = null;
        _this.saturday = null;
        _this.solutionId = null;
        _this.startDate = null;
        _this.startTime = null;
        _this.state = null;
        _this.statusDateLast = null;
        _this.statusLast = null;
        _this.statusSystemDateLast = null;
        _this.sunday = null;
        _this.thursday = null;
        _this.tuesday = null;
        _this.type = null;
        _this.validFromDate = null;
        _this.validFromTime = null;
        _this.validToDate = null;
        _this.validToTime = null;
        _this.version = null;
        _this.wednesday = null;
        _this.mapSQLResultRowToProxy(_this, __dirname, 'TslotDataProxy');
        return _this;
    }
    TslotDataProxy.prototype.getDictionaryField1 = function () {
        return this.dictionaryField1;
    };
    TslotDataProxy.prototype.setDictionaryField1 = function (dictionaryField1) {
        this.dictionaryField1 = dictionaryField1;
    };
    TslotDataProxy.prototype.getDictionaryField10 = function () {
        return this.dictionaryField10;
    };
    TslotDataProxy.prototype.setDictionaryField10 = function (dictionaryField10) {
        this.dictionaryField10 = dictionaryField10;
    };
    TslotDataProxy.prototype.getDictionaryField2 = function () {
        return this.dictionaryField2;
    };
    TslotDataProxy.prototype.setDictionaryField2 = function (dictionaryField2) {
        this.dictionaryField2 = dictionaryField2;
    };
    TslotDataProxy.prototype.getDictionaryField3 = function () {
        return this.dictionaryField3;
    };
    TslotDataProxy.prototype.setDictionaryField3 = function (dictionaryField3) {
        this.dictionaryField3 = dictionaryField3;
    };
    TslotDataProxy.prototype.getDictionaryField4 = function () {
        return this.dictionaryField4;
    };
    TslotDataProxy.prototype.setDictionaryField4 = function (dictionaryField4) {
        this.dictionaryField4 = dictionaryField4;
    };
    TslotDataProxy.prototype.getDictionaryField5 = function () {
        return this.dictionaryField5;
    };
    TslotDataProxy.prototype.setDictionaryField5 = function (dictionaryField5) {
        this.dictionaryField5 = dictionaryField5;
    };
    TslotDataProxy.prototype.getDictionaryField6 = function () {
        return this.dictionaryField6;
    };
    TslotDataProxy.prototype.setDictionaryField6 = function (dictionaryField6) {
        this.dictionaryField6 = dictionaryField6;
    };
    TslotDataProxy.prototype.getDictionaryField7 = function () {
        return this.dictionaryField7;
    };
    TslotDataProxy.prototype.setDictionaryField7 = function (dictionaryField7) {
        this.dictionaryField7 = dictionaryField7;
    };
    TslotDataProxy.prototype.getDictionaryField8 = function () {
        return this.dictionaryField8;
    };
    TslotDataProxy.prototype.setDictionaryField8 = function (dictionaryField8) {
        this.dictionaryField8 = dictionaryField8;
    };
    TslotDataProxy.prototype.getDictionaryField9 = function () {
        return this.dictionaryField9;
    };
    TslotDataProxy.prototype.setDictionaryField9 = function (dictionaryField9) {
        this.dictionaryField9 = dictionaryField9;
    };
    TslotDataProxy.prototype.getDraftId = function () {
        return this.draftId;
    };
    TslotDataProxy.prototype.setDraftId = function (draftId) {
        this.draftId = draftId;
    };
    TslotDataProxy.prototype.getEndDate = function () {
        return this.endDate;
    };
    TslotDataProxy.prototype.setEndDate = function (endDate) {
        this.endDate = endDate;
    };
    TslotDataProxy.prototype.getEndTime = function () {
        return this.endTime;
    };
    TslotDataProxy.prototype.setEndTime = function (endTime) {
        this.endTime = endTime;
    };
    TslotDataProxy.prototype.getExpiryDate = function () {
        return this.expiryDate;
    };
    TslotDataProxy.prototype.setExpiryDate = function (expiryDate) {
        this.expiryDate = expiryDate;
    };
    TslotDataProxy.prototype.getExpiryDeadline = function () {
        return this.expiryDeadline;
    };
    TslotDataProxy.prototype.setExpiryDeadline = function (expiryDeadline) {
        this.expiryDeadline = expiryDeadline;
    };
    TslotDataProxy.prototype.getExpiryTime = function () {
        return this.expiryTime;
    };
    TslotDataProxy.prototype.setExpiryTime = function (expiryTime) {
        this.expiryTime = expiryTime;
    };
    TslotDataProxy.prototype.getFreeDate1 = function () {
        return this.freeDate1;
    };
    TslotDataProxy.prototype.setFreeDate1 = function (freeDate1) {
        this.freeDate1 = freeDate1;
    };
    TslotDataProxy.prototype.getFreeTime1 = function () {
        return this.freeTime1;
    };
    TslotDataProxy.prototype.setFreeTime1 = function (freeTime1) {
        this.freeTime1 = freeTime1;
    };
    TslotDataProxy.prototype.isFriday = function () {
        return this.friday;
    };
    TslotDataProxy.prototype.setFriday = function (friday) {
        this.friday = friday;
    };
    TslotDataProxy.prototype.getId = function () {
        return this.id;
    };
    TslotDataProxy.prototype.setId = function (id) {
        this.id = id;
    };
    TslotDataProxy.prototype.getIntegerField1 = function () {
        return this.integerField1;
    };
    TslotDataProxy.prototype.setIntegerField1 = function (integerField1) {
        this.integerField1 = integerField1;
    };
    TslotDataProxy.prototype.getIntegerField2 = function () {
        return this.integerField2;
    };
    TslotDataProxy.prototype.setIntegerField2 = function (integerField2) {
        this.integerField2 = integerField2;
    };
    TslotDataProxy.prototype.getIntegerField3 = function () {
        return this.integerField3;
    };
    TslotDataProxy.prototype.setIntegerField3 = function (integerField3) {
        this.integerField3 = integerField3;
    };
    TslotDataProxy.prototype.getIntegerField4 = function () {
        return this.integerField4;
    };
    TslotDataProxy.prototype.setIntegerField4 = function (integerField4) {
        this.integerField4 = integerField4;
    };
    TslotDataProxy.prototype.getIntegerField5 = function () {
        return this.integerField5;
    };
    TslotDataProxy.prototype.setIntegerField5 = function (integerField5) {
        this.integerField5 = integerField5;
    };
    TslotDataProxy.prototype.getLastStatusLocation = function () {
        return this.lastStatusLocation;
    };
    TslotDataProxy.prototype.setLastStatusLocation = function (lastStatusLocation) {
        this.lastStatusLocation = lastStatusLocation;
    };
    TslotDataProxy.prototype.getLockDeadline = function () {
        return this.lockDeadline;
    };
    TslotDataProxy.prototype.setLockDeadline = function (lockDeadline) {
        this.lockDeadline = lockDeadline;
    };
    TslotDataProxy.prototype.getLockedByUser = function () {
        return this.lockedByUser;
    };
    TslotDataProxy.prototype.setLockedByUser = function (lockedByUser) {
        this.lockedByUser = lockedByUser;
    };
    TslotDataProxy.prototype.isMonday = function () {
        return this.monday;
    };
    TslotDataProxy.prototype.setMonday = function (monday) {
        this.monday = monday;
    };
    TslotDataProxy.prototype.getNumericField1 = function () {
        return this.numericField1;
    };
    TslotDataProxy.prototype.setNumericField1 = function (numericField1) {
        this.numericField1 = numericField1;
    };
    TslotDataProxy.prototype.getNumericField2 = function () {
        return this.numericField2;
    };
    TslotDataProxy.prototype.setNumericField2 = function (numericField2) {
        this.numericField2 = numericField2;
    };
    TslotDataProxy.prototype.getNumericField3 = function () {
        return this.numericField3;
    };
    TslotDataProxy.prototype.setNumericField3 = function (numericField3) {
        this.numericField3 = numericField3;
    };
    TslotDataProxy.prototype.getNumericField4 = function () {
        return this.numericField4;
    };
    TslotDataProxy.prototype.setNumericField4 = function (numericField4) {
        this.numericField4 = numericField4;
    };
    TslotDataProxy.prototype.getNumericField5 = function () {
        return this.numericField5;
    };
    TslotDataProxy.prototype.setNumericField5 = function (numericField5) {
        this.numericField5 = numericField5;
    };
    TslotDataProxy.prototype.getParentId = function () {
        return this.parentId;
    };
    TslotDataProxy.prototype.setParentId = function (parentId) {
        this.parentId = parentId;
    };
    TslotDataProxy.prototype.getPlace1 = function () {
        return this.place1;
    };
    TslotDataProxy.prototype.setPlace1 = function (place1) {
        this.place1 = place1;
    };
    TslotDataProxy.prototype.getPlace2 = function () {
        return this.place2;
    };
    TslotDataProxy.prototype.setPlace2 = function (place2) {
        this.place2 = place2;
    };
    TslotDataProxy.prototype.getPlaceDict1 = function () {
        return this.placeDict1;
    };
    TslotDataProxy.prototype.setPlaceDict1 = function (placeDict1) {
        this.placeDict1 = placeDict1;
    };
    TslotDataProxy.prototype.getPlaceDict2 = function () {
        return this.placeDict2;
    };
    TslotDataProxy.prototype.setPlaceDict2 = function (placeDict2) {
        this.placeDict2 = placeDict2;
    };
    TslotDataProxy.prototype.getPlaceDict3 = function () {
        return this.placeDict3;
    };
    TslotDataProxy.prototype.setPlaceDict3 = function (placeDict3) {
        this.placeDict3 = placeDict3;
    };
    TslotDataProxy.prototype.getReasonLast = function () {
        return this.reasonLast;
    };
    TslotDataProxy.prototype.setReasonLast = function (reasonLast) {
        this.reasonLast = reasonLast;
    };
    TslotDataProxy.prototype.getReference1 = function () {
        return this.reference1;
    };
    TslotDataProxy.prototype.setReference1 = function (reference1) {
        this.reference1 = reference1;
    };
    TslotDataProxy.prototype.getReference10 = function () {
        return this.reference10;
    };
    TslotDataProxy.prototype.setReference10 = function (reference10) {
        this.reference10 = reference10;
    };
    TslotDataProxy.prototype.getReference2 = function () {
        return this.reference2;
    };
    TslotDataProxy.prototype.setReference2 = function (reference2) {
        this.reference2 = reference2;
    };
    TslotDataProxy.prototype.getReference3 = function () {
        return this.reference3;
    };
    TslotDataProxy.prototype.setReference3 = function (reference3) {
        this.reference3 = reference3;
    };
    TslotDataProxy.prototype.getReference4 = function () {
        return this.reference4;
    };
    TslotDataProxy.prototype.setReference4 = function (reference4) {
        this.reference4 = reference4;
    };
    TslotDataProxy.prototype.getReference5 = function () {
        return this.reference5;
    };
    TslotDataProxy.prototype.setReference5 = function (reference5) {
        this.reference5 = reference5;
    };
    TslotDataProxy.prototype.getReference6 = function () {
        return this.reference6;
    };
    TslotDataProxy.prototype.setReference6 = function (reference6) {
        this.reference6 = reference6;
    };
    TslotDataProxy.prototype.getReference7 = function () {
        return this.reference7;
    };
    TslotDataProxy.prototype.setReference7 = function (reference7) {
        this.reference7 = reference7;
    };
    TslotDataProxy.prototype.getReference8 = function () {
        return this.reference8;
    };
    TslotDataProxy.prototype.setReference8 = function (reference8) {
        this.reference8 = reference8;
    };
    TslotDataProxy.prototype.getReference9 = function () {
        return this.reference9;
    };
    TslotDataProxy.prototype.setReference9 = function (reference9) {
        this.reference9 = reference9;
    };
    TslotDataProxy.prototype.isSaturday = function () {
        return this.saturday;
    };
    TslotDataProxy.prototype.setSaturday = function (saturday) {
        this.saturday = saturday;
    };
    TslotDataProxy.prototype.getSolutionId = function () {
        return this.solutionId;
    };
    TslotDataProxy.prototype.setSolutionId = function (solutionId) {
        this.solutionId = solutionId;
    };
    TslotDataProxy.prototype.getStartDate = function () {
        return this.startDate;
    };
    TslotDataProxy.prototype.setStartDate = function (startDate) {
        this.startDate = startDate;
    };
    TslotDataProxy.prototype.getStartTime = function () {
        return this.startTime;
    };
    TslotDataProxy.prototype.setStartTime = function (startTime) {
        this.startTime = startTime;
    };
    TslotDataProxy.prototype.getState = function () {
        return this.state;
    };
    TslotDataProxy.prototype.setState = function (state) {
        this.state = state;
    };
    TslotDataProxy.prototype.getStatusDateLast = function () {
        return this.statusDateLast;
    };
    TslotDataProxy.prototype.setStatusDateLast = function (statusDateLast) {
        this.statusDateLast = statusDateLast;
    };
    TslotDataProxy.prototype.getStatusLast = function () {
        return this.statusLast;
    };
    TslotDataProxy.prototype.setStatusLast = function (statusLast) {
        this.statusLast = statusLast;
    };
    TslotDataProxy.prototype.getStatusSystemDateLast = function () {
        return this.statusSystemDateLast;
    };
    TslotDataProxy.prototype.setStatusSystemDateLast = function (statusSystemDateLast) {
        this.statusSystemDateLast = statusSystemDateLast;
    };
    TslotDataProxy.prototype.isSunday = function () {
        return this.sunday;
    };
    TslotDataProxy.prototype.setSunday = function (sunday) {
        this.sunday = sunday;
    };
    TslotDataProxy.prototype.isThursday = function () {
        return this.thursday;
    };
    TslotDataProxy.prototype.setThursday = function (thursday) {
        this.thursday = thursday;
    };
    TslotDataProxy.prototype.isTuesday = function () {
        return this.tuesday;
    };
    TslotDataProxy.prototype.setTuesday = function (tuesday) {
        this.tuesday = tuesday;
    };
    TslotDataProxy.prototype.getType = function () {
        return this.type;
    };
    TslotDataProxy.prototype.setType = function (type) {
        this.type = type;
    };
    TslotDataProxy.prototype.getValidFromDate = function () {
        return this.validFromDate;
    };
    TslotDataProxy.prototype.setValidFromDate = function (validFromDate) {
        this.validFromDate = validFromDate;
    };
    TslotDataProxy.prototype.getValidFromTime = function () {
        return this.validFromTime;
    };
    TslotDataProxy.prototype.setValidFromTime = function (validFromTime) {
        this.validFromTime = validFromTime;
    };
    TslotDataProxy.prototype.getValidToDate = function () {
        return this.validToDate;
    };
    TslotDataProxy.prototype.setValidToDate = function (validToDate) {
        this.validToDate = validToDate;
    };
    TslotDataProxy.prototype.getValidToTime = function () {
        return this.validToTime;
    };
    TslotDataProxy.prototype.setValidToTime = function (validToTime) {
        this.validToTime = validToTime;
    };
    TslotDataProxy.prototype.getVersion = function () {
        return this.version;
    };
    TslotDataProxy.prototype.setVersion = function (version) {
        this.version = version;
    };
    TslotDataProxy.prototype.isWednesday = function () {
        return this.wednesday;
    };
    TslotDataProxy.prototype.setWednesday = function (wednesday) {
        this.wednesday = wednesday;
    };
    return TslotDataProxy;
}(BaseProxyObject_1.BaseProxyObject));
exports.TslotDataProxy = TslotDataProxy;
//# sourceMappingURL=TslotDataProxy.js.map