import { BaseProxyObject } from '../Common/BaseProxyObject';

export class TslotDataProxy extends BaseProxyObject {
  constructor(dbRow: any) {
    super(dbRow);
    this.mapSQLResultRowToProxy(this, __dirname, 'TslotDataProxy');
  }

  private dictionaryField1: String = null;
  private dictionaryField10: String = null;
  private dictionaryField2: String = null;
  private dictionaryField3: String = null;
  private dictionaryField4: String = null;
  private dictionaryField5: String = null;
  private dictionaryField6: String = null;
  private dictionaryField7: String = null;
  private dictionaryField8: String = null;
  private dictionaryField9: String = null;
  private draftId: Number = null;
  private endDate: Date = null;
  private endTime: Date = null;
  private expiryDate: Date = null;
  private expiryDeadline: Number = null;
  private expiryTime: Date = null;
  private freeDate1: Date = null;
  private freeTime1: Date = null;
  private friday: Boolean = null;
  private id: Number = null;
  private integerField1: Number = null;
  private integerField2: Number = null;
  private integerField3: Number = null;
  private integerField4: Number = null;
  private integerField5: Number = null;
  private lastStatusLocation: String = null;
  private lockDeadline: Date = null;
  private lockedByUser: String = null;
  private monday: Boolean = null;
  private numericField1: Number = null;
  private numericField2: Number = null;
  private numericField3: Number = null;
  private numericField4: Number = null;
  private numericField5: Number = null;
  private parentId: Number = null;
  private place1: String = null;
  private place2: String = null;
  private placeDict1: String = null;
  private placeDict2: String = null;
  private placeDict3: String = null;
  private reasonLast: String = null;
  private reference1: String = null;
  private reference10: String = null;
  private reference2: String = null;
  private reference3: String = null;
  private reference4: String = null;
  private reference5: String = null;
  private reference6: String = null;
  private reference7: String = null;
  private reference8: String = null;
  private reference9: String = null;
  private saturday: Boolean = null;
  private solutionId: Number = null;
  private startDate: Date = null;
  private startTime: Date = null;
  private state: String = null;
  private statusDateLast: Date = null;
  private statusLast: String = null;
  private statusSystemDateLast: Date = null;
  private sunday: Boolean = null;
  private thursday: Boolean = null;
  private tuesday: Boolean = null;
  private type: String = null;
  private validFromDate: Date = null;
  private validFromTime: Date = null;
  private validToDate: Date = null;
  private validToTime: Date = null;
  private version: Number = null;
  private wednesday: Boolean = null;

  public getDictionaryField1(): String {
    return this.dictionaryField1;
  }

  public setDictionaryField1(dictionaryField1: String): void {
    this.dictionaryField1 = dictionaryField1;
  }

  public getDictionaryField10(): String {
    return this.dictionaryField10;
  }

  public setDictionaryField10(dictionaryField10: String): void {
    this.dictionaryField10 = dictionaryField10;
  }

  public getDictionaryField2(): String {
    return this.dictionaryField2;
  }

  public setDictionaryField2(dictionaryField2: String): void {
    this.dictionaryField2 = dictionaryField2;
  }

  public getDictionaryField3(): String {
    return this.dictionaryField3;
  }

  public setDictionaryField3(dictionaryField3: String): void {
    this.dictionaryField3 = dictionaryField3;
  }

  public getDictionaryField4(): String {
    return this.dictionaryField4;
  }

  public setDictionaryField4(dictionaryField4: String): void {
    this.dictionaryField4 = dictionaryField4;
  }

  public getDictionaryField5(): String {
    return this.dictionaryField5;
  }

  public setDictionaryField5(dictionaryField5: String): void {
    this.dictionaryField5 = dictionaryField5;
  }

  public getDictionaryField6(): String {
    return this.dictionaryField6;
  }

  public setDictionaryField6(dictionaryField6: String): void {
    this.dictionaryField6 = dictionaryField6;
  }

  public getDictionaryField7(): String {
    return this.dictionaryField7;
  }

  public setDictionaryField7(dictionaryField7: String): void {
    this.dictionaryField7 = dictionaryField7;
  }

  public getDictionaryField8(): String {
    return this.dictionaryField8;
  }

  public setDictionaryField8(dictionaryField8: String): void {
    this.dictionaryField8 = dictionaryField8;
  }

  public getDictionaryField9(): String {
    return this.dictionaryField9;
  }

  public setDictionaryField9(dictionaryField9: String): void {
    this.dictionaryField9 = dictionaryField9;
  }

  public getDraftId(): Number {
    return this.draftId;
  }

  public setDraftId(draftId: Number): void {
    this.draftId = draftId;
  }

  public getEndDate(): Date {
    return this.endDate;
  }

  public setEndDate(endDate: Date): void {
    this.endDate = endDate;
  }

  public getEndTime(): Date {
    return this.endTime;
  }

  public setEndTime(endTime: Date): void {
    this.endTime = endTime;
  }

  public getExpiryDate(): Date {
    return this.expiryDate;
  }

  public setExpiryDate(expiryDate: Date): void {
    this.expiryDate = expiryDate;
  }

  public getExpiryDeadline(): Number {
    return this.expiryDeadline;
  }

  public setExpiryDeadline(expiryDeadline: Number): void {
    this.expiryDeadline = expiryDeadline;
  }

  public getExpiryTime(): Date {
    return this.expiryTime;
  }

  public setExpiryTime(expiryTime: Date): void {
    this.expiryTime = expiryTime;
  }

  public getFreeDate1(): Date {
    return this.freeDate1;
  }

  public setFreeDate1(freeDate1: Date): void {
    this.freeDate1 = freeDate1;
  }

  public getFreeTime1(): Date {
    return this.freeTime1;
  }

  public setFreeTime1(freeTime1: Date): void {
    this.freeTime1 = freeTime1;
  }

  public isFriday(): Boolean {
    return this.friday;
  }

  public setFriday(friday: Boolean): void {
    this.friday = friday;
  }

  public getId(): Number {
    return this.id;
  }

  public setId(id: Number): void {
    this.id = id;
  }

  public getIntegerField1(): Number {
    return this.integerField1;
  }

  public setIntegerField1(integerField1: Number): void {
    this.integerField1 = integerField1;
  }

  public getIntegerField2(): Number {
    return this.integerField2;
  }

  public setIntegerField2(integerField2: Number): void {
    this.integerField2 = integerField2;
  }

  public getIntegerField3(): Number {
    return this.integerField3;
  }

  public setIntegerField3(integerField3: Number): void {
    this.integerField3 = integerField3;
  }

  public getIntegerField4(): Number {
    return this.integerField4;
  }

  public setIntegerField4(integerField4: Number): void {
    this.integerField4 = integerField4;
  }

  public getIntegerField5(): Number {
    return this.integerField5;
  }

  public setIntegerField5(integerField5: Number): void {
    this.integerField5 = integerField5;
  }

  public getLastStatusLocation(): String {
    return this.lastStatusLocation;
  }

  public setLastStatusLocation(lastStatusLocation: String): void {
    this.lastStatusLocation = lastStatusLocation;
  }

  public getLockDeadline(): Date {
    return this.lockDeadline;
  }

  public setLockDeadline(lockDeadline: Date): void {
    this.lockDeadline = lockDeadline;
  }

  public getLockedByUser(): String {
    return this.lockedByUser;
  }

  public setLockedByUser(lockedByUser: String): void {
    this.lockedByUser = lockedByUser;
  }

  public isMonday(): Boolean {
    return this.monday;
  }

  public setMonday(monday: Boolean): void {
    this.monday = monday;
  }

  public getNumericField1(): Number {
    return this.numericField1;
  }

  public setNumericField1(numericField1: Number): void {
    this.numericField1 = numericField1;
  }

  public getNumericField2(): Number {
    return this.numericField2;
  }

  public setNumericField2(numericField2: Number): void {
    this.numericField2 = numericField2;
  }

  public getNumericField3(): Number {
    return this.numericField3;
  }

  public setNumericField3(numericField3: Number): void {
    this.numericField3 = numericField3;
  }

  public getNumericField4(): Number {
    return this.numericField4;
  }

  public setNumericField4(numericField4: Number): void {
    this.numericField4 = numericField4;
  }

  public getNumericField5(): Number {
    return this.numericField5;
  }

  public setNumericField5(numericField5: Number): void {
    this.numericField5 = numericField5;
  }

  public getParentId(): Number {
    return this.parentId;
  }

  public setParentId(parentId: Number): void {
    this.parentId = parentId;
  }

  public getPlace1(): String {
    return this.place1;
  }

  public setPlace1(place1: String): void {
    this.place1 = place1;
  }

  public getPlace2(): String {
    return this.place2;
  }

  public setPlace2(place2: String): void {
    this.place2 = place2;
  }

  public getPlaceDict1(): String {
    return this.placeDict1;
  }

  public setPlaceDict1(placeDict1: String): void {
    this.placeDict1 = placeDict1;
  }

  public getPlaceDict2(): String {
    return this.placeDict2;
  }

  public setPlaceDict2(placeDict2: String): void {
    this.placeDict2 = placeDict2;
  }

  public getPlaceDict3(): String {
    return this.placeDict3;
  }

  public setPlaceDict3(placeDict3: String): void {
    this.placeDict3 = placeDict3;
  }

  public getReasonLast(): String {
    return this.reasonLast;
  }

  public setReasonLast(reasonLast: String): void {
    this.reasonLast = reasonLast;
  }

  public getReference1(): String {
    return this.reference1;
  }

  public setReference1(reference1: String): void {
    this.reference1 = reference1;
  }

  public getReference10(): String {
    return this.reference10;
  }

  public setReference10(reference10: String): void {
    this.reference10 = reference10;
  }

  public getReference2(): String {
    return this.reference2;
  }

  public setReference2(reference2: String): void {
    this.reference2 = reference2;
  }

  public getReference3(): String {
    return this.reference3;
  }

  public setReference3(reference3: String): void {
    this.reference3 = reference3;
  }

  public getReference4(): String {
    return this.reference4;
  }

  public setReference4(reference4: String): void {
    this.reference4 = reference4;
  }

  public getReference5(): String {
    return this.reference5;
  }

  public setReference5(reference5: String): void {
    this.reference5 = reference5;
  }

  public getReference6(): String {
    return this.reference6;
  }

  public setReference6(reference6: String): void {
    this.reference6 = reference6;
  }

  public getReference7(): String {
    return this.reference7;
  }

  public setReference7(reference7: String): void {
    this.reference7 = reference7;
  }

  public getReference8(): String {
    return this.reference8;
  }

  public setReference8(reference8: String): void {
    this.reference8 = reference8;
  }

  public getReference9(): String {
    return this.reference9;
  }

  public setReference9(reference9: String): void {
    this.reference9 = reference9;
  }

  public isSaturday(): Boolean {
    return this.saturday;
  }

  public setSaturday(saturday: Boolean): void {
    this.saturday = saturday;
  }

  public getSolutionId(): Number {
    return this.solutionId;
  }

  public setSolutionId(solutionId: Number): void {
    this.solutionId = solutionId;
  }

  public getStartDate(): Date {
    return this.startDate;
  }

  public setStartDate(startDate: Date): void {
    this.startDate = startDate;
  }

  public getStartTime(): Date {
    return this.startTime;
  }

  public setStartTime(startTime: Date): void {
    this.startTime = startTime;
  }

  public getState(): String {
    return this.state;
  }

  public setState(state: String): void {
    this.state = state;
  }

  public getStatusDateLast(): Date {
    return this.statusDateLast;
  }

  public setStatusDateLast(statusDateLast: Date): void {
    this.statusDateLast = statusDateLast;
  }

  public getStatusLast(): String {
    return this.statusLast;
  }

  public setStatusLast(statusLast: String): void {
    this.statusLast = statusLast;
  }

  public getStatusSystemDateLast(): Date {
    return this.statusSystemDateLast;
  }

  public setStatusSystemDateLast(statusSystemDateLast: Date): void {
    this.statusSystemDateLast = statusSystemDateLast;
  }

  public isSunday(): Boolean {
    return this.sunday;
  }

  public setSunday(sunday: Boolean): void {
    this.sunday = sunday;
  }

  public isThursday(): Boolean {
    return this.thursday;
  }

  public setThursday(thursday: Boolean): void {
    this.thursday = thursday;
  }

  public isTuesday(): Boolean {
    return this.tuesday;
  }

  public setTuesday(tuesday: Boolean): void {
    this.tuesday = tuesday;
  }

  public getType(): String {
    return this.type;
  }

  public setType(type: String): void {
    this.type = type;
  }

  public getValidFromDate(): Date {
    return this.validFromDate;
  }

  public setValidFromDate(validFromDate: Date): void {
    this.validFromDate = validFromDate;
  }

  public getValidFromTime(): Date {
    return this.validFromTime;
  }

  public setValidFromTime(validFromTime: Date): void {
    this.validFromTime = validFromTime;
  }

  public getValidToDate(): Date {
    return this.validToDate;
  }

  public setValidToDate(validToDate: Date): void {
    this.validToDate = validToDate;
  }

  public getValidToTime(): Date {
    return this.validToTime;
  }

  public setValidToTime(validToTime: Date): void {
    this.validToTime = validToTime;
  }

  public getVersion(): Number {
    return this.version;
  }

  public setVersion(version: Number): void {
    this.version = version;
  }

  public isWednesday(): Boolean {
    return this.wednesday;
  }

  public setWednesday(wednesday: Boolean): void {
    this.wednesday = wednesday;
  }
}
