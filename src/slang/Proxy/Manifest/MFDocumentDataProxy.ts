import { BaseProxyObject } from '../Common/BaseProxyObject';

export class MFDocumentDataProxy extends BaseProxyObject {
  constructor(dbRow: any) {
    super(dbRow);
    this.mapSQLResultRowToProxy(this, __dirname, 'MFDocumentDataProxy');
  }

  private arrivalDate: Date = null;
  private arrivalTime: Date = null;
  private atdDate: Date = null;
  private atdTime: Date = null;
  private bolNr: String = null;
  private checkbox01: Boolean = null;
  private checkbox02: Boolean = null;
  private checkbox03: Boolean = null;
  private checkbox04: Boolean = null;
  private checkbox05: Boolean = null;
  private checkbox06: Boolean = null;
  private checkbox07: Boolean = null;
  private checkbox08: Boolean = null;
  private checkbox09: Boolean = null;
  private checkbox10: Boolean = null;
  private creationDate: Date = null;
  private currency01: String = null;
  private currency02: String = null;
  private currency03: String = null;
  private currency04: String = null;
  private currency05: String = null;
  private currency06: String = null;
  private currency07: String = null;
  private currency08: String = null;
  private currency09: String = null;
  private currency10: String = null;
  private custReference1: String = null;
  private custReference10: String = null;
  private custReference2: String = null;
  private custReference3: String = null;
  private custReference4: String = null;
  private custReference5: String = null;
  private custReference6: String = null;
  private custReference7: String = null;
  private custReference8: String = null;
  private custReference9: String = null;
  private date01: Date = null;
  private date02: Date = null;
  private date03: Date = null;
  private date04: Date = null;
  private date05: Date = null;
  private date06: Date = null;
  private date07: Date = null;
  private date08: Date = null;
  private date09: Date = null;
  private date10: Date = null;
  private declaredPackagesQuantity: Number = null;
  private declaredPackagesVolume: Number = null;
  private declaredPackagesWeight: Number = null;
  private departureDate: Date = null;
  private departureTime: Date = null;
  private discrepancyReportArrivalDate: Date = null;
  private discrepancyReportArrivalTime: Date = null;
  private discrepancyReportCreationDate: Date = null;
  private discrepancyReportExists: Number = null;
  private discrepancyReportRemarks: String = null;
  private discrepancyReportUserId: Number = null;
  private discrepancyReportUserName: String = null;
  private discrepancyReportUserSurname: String = null;
  private ediLock: Number = null;
  private externalId: String = null;
  private externalId2: String = null;
  private freeTextDictionary1: String = null;
  private freeTextDictionary10: String = null;
  private freeTextDictionary11: String = null;
  private freeTextDictionary12: String = null;
  private freeTextDictionary13: String = null;
  private freeTextDictionary14: String = null;
  private freeTextDictionary15: String = null;
  private freeTextDictionary16: String = null;
  private freeTextDictionary17: String = null;
  private freeTextDictionary18: String = null;
  private freeTextDictionary19: String = null;
  private freeTextDictionary2: String = null;
  private freeTextDictionary20: String = null;
  private freeTextDictionary3: String = null;
  private freeTextDictionary4: String = null;
  private freeTextDictionary5: String = null;
  private freeTextDictionary6: String = null;
  private freeTextDictionary7: String = null;
  private freeTextDictionary8: String = null;
  private freeTextDictionary9: String = null;
  private id: Number = null;
  private intNumber01: Number = null;
  private intNumber02: Number = null;
  private intNumber03: Number = null;
  private intNumber04: Number = null;
  private intNumber05: Number = null;
  private intNumber06: Number = null;
  private intNumber07: Number = null;
  private intNumber08: Number = null;
  private intNumber09: Number = null;
  private intNumber10: Number = null;
  private lastModificationDate: Date = null;
  private lastStatusLocation: String = null;
  private loadingDate: Date = null;
  private loadingTime: Date = null;
  private loadingType: String = null;
  private locationStatus: Number = null;
  private longReference01: String = null;
  private longReference02: String = null;
  private longReference03: String = null;
  private longReference04: String = null;
  private longReference05: String = null;
  private longReference06: String = null;
  private longReference07: String = null;
  private longReference08: String = null;
  private longReference09: String = null;
  private longReference10: String = null;
  private onHold: Number = null;
  private packagesQuantity: Number = null;
  private packagesVolume: Number = null;
  private packagesWeight: Number = null;
  private portOfArrival: String = null;
  private portOfDeparture: String = null;
  private realNumber01: Number = null;
  private realNumber02: Number = null;
  private realNumber03: Number = null;
  private realNumber04: Number = null;
  private realNumber05: Number = null;
  private realNumber06: Number = null;
  private realNumber07: Number = null;
  private realNumber08: Number = null;
  private realNumber09: Number = null;
  private realNumber10: Number = null;
  private reasonLast: String = null;
  private recalculate: Number = null;
  private reference: String = null;
  private routeId: String = null;
  private sendDate: Date = null;
  private serviceId: String = null;
  private shortReference01: String = null;
  private shortReference02: String = null;
  private shortReference03: String = null;
  private shortReference04: String = null;
  private shortReference05: String = null;
  private shortReference06: String = null;
  private shortReference07: String = null;
  private shortReference08: String = null;
  private shortReference09: String = null;
  private shortReference10: String = null;
  private solutionId: Number = null;
  private state: Number = null;
  private statusDateLast: Date = null;
  private statusLast: String = null;
  private statusSystemDateLast: Date = null;
  private time01: Date = null;
  private time02: Date = null;
  private time03: Date = null;
  private time04: Date = null;
  private time05: Date = null;
  private time06: Date = null;
  private time07: Date = null;
  private time08: Date = null;
  private time09: Date = null;
  private time10: Date = null;
  private transportChain: String = null;
  private transportCost: Number = null;
  private transportCostCurrency: String = null;
  private transportDepartament: String = null;
  private transportDistance: Number = null;
  private transportId: String = null;
  private transportSpecial: String = null;
  private transportState: Number = null;
  private type: Number = null;
  private upsAccountNo: String = null;
  private upsBookingNr: String = null;
  private upsPageNr: String = null;
  private userId: Number = null;
  private vesselArrivalDate: Date = null;
  private vesselArrivalTime: Date = null;
  private vesselDepartureDate: Date = null;
  private vesselDepartureTime: Date = null;
  private vesselName: String = null;

  public getArrivalDate(): Date {
    return this.arrivalDate;
  }

  public setArrivalDate(arrivalDate: Date): void {
    this.arrivalDate = arrivalDate;
  }

  public getArrivalTime(): Date {
    return this.arrivalTime;
  }

  public setArrivalTime(arrivalTime: Date): void {
    this.arrivalTime = arrivalTime;
  }

  public getAtdDate(): Date {
    return this.atdDate;
  }

  public setAtdDate(atdDate: Date): void {
    this.atdDate = atdDate;
  }

  public getAtdTime(): Date {
    return this.atdTime;
  }

  public setAtdTime(atdTime: Date): void {
    this.atdTime = atdTime;
  }

  public getBolNr(): String {
    return this.bolNr;
  }

  public setBolNr(bolNr: String): void {
    this.bolNr = bolNr;
  }

  public isCheckbox01(): Boolean {
    return this.checkbox01;
  }

  public setCheckbox01(checkbox01: Boolean): void {
    this.checkbox01 = checkbox01;
  }

  public isCheckbox02(): Boolean {
    return this.checkbox02;
  }

  public setCheckbox02(checkbox02: Boolean): void {
    this.checkbox02 = checkbox02;
  }

  public isCheckbox03(): Boolean {
    return this.checkbox03;
  }

  public setCheckbox03(checkbox03: Boolean): void {
    this.checkbox03 = checkbox03;
  }

  public isCheckbox04(): Boolean {
    return this.checkbox04;
  }

  public setCheckbox04(checkbox04: Boolean): void {
    this.checkbox04 = checkbox04;
  }

  public isCheckbox05(): Boolean {
    return this.checkbox05;
  }

  public setCheckbox05(checkbox05: Boolean): void {
    this.checkbox05 = checkbox05;
  }

  public isCheckbox06(): Boolean {
    return this.checkbox06;
  }

  public setCheckbox06(checkbox06: Boolean): void {
    this.checkbox06 = checkbox06;
  }

  public isCheckbox07(): Boolean {
    return this.checkbox07;
  }

  public setCheckbox07(checkbox07: Boolean): void {
    this.checkbox07 = checkbox07;
  }

  public isCheckbox08(): Boolean {
    return this.checkbox08;
  }

  public setCheckbox08(checkbox08: Boolean): void {
    this.checkbox08 = checkbox08;
  }

  public isCheckbox09(): Boolean {
    return this.checkbox09;
  }

  public setCheckbox09(checkbox09: Boolean): void {
    this.checkbox09 = checkbox09;
  }

  public isCheckbox10(): Boolean {
    return this.checkbox10;
  }

  public setCheckbox10(checkbox10: Boolean): void {
    this.checkbox10 = checkbox10;
  }

  public getCreationDate(): Date {
    return this.creationDate;
  }

  public setCreationDate(creationDate: Date): void {
    this.creationDate = creationDate;
  }

  public getCurrency01(): String {
    return this.currency01;
  }

  public setCurrency01(currency01: String): void {
    this.currency01 = currency01;
  }

  public getCurrency02(): String {
    return this.currency02;
  }

  public setCurrency02(currency02: String): void {
    this.currency02 = currency02;
  }

  public getCurrency03(): String {
    return this.currency03;
  }

  public setCurrency03(currency03: String): void {
    this.currency03 = currency03;
  }

  public getCurrency04(): String {
    return this.currency04;
  }

  public setCurrency04(currency04: String): void {
    this.currency04 = currency04;
  }

  public getCurrency05(): String {
    return this.currency05;
  }

  public setCurrency05(currency05: String): void {
    this.currency05 = currency05;
  }

  public getCurrency06(): String {
    return this.currency06;
  }

  public setCurrency06(currency06: String): void {
    this.currency06 = currency06;
  }

  public getCurrency07(): String {
    return this.currency07;
  }

  public setCurrency07(currency07: String): void {
    this.currency07 = currency07;
  }

  public getCurrency08(): String {
    return this.currency08;
  }

  public setCurrency08(currency08: String): void {
    this.currency08 = currency08;
  }

  public getCurrency09(): String {
    return this.currency09;
  }

  public setCurrency09(currency09: String): void {
    this.currency09 = currency09;
  }

  public getCurrency10(): String {
    return this.currency10;
  }

  public setCurrency10(currency10: String): void {
    this.currency10 = currency10;
  }

  public getCustReference1(): String {
    return this.custReference1;
  }

  public setCustReference1(custReference1: String): void {
    this.custReference1 = custReference1;
  }

  public getCustReference10(): String {
    return this.custReference10;
  }

  public setCustReference10(custReference10: String): void {
    this.custReference10 = custReference10;
  }

  public getCustReference2(): String {
    return this.custReference2;
  }

  public setCustReference2(custReference2: String): void {
    this.custReference2 = custReference2;
  }

  public getCustReference3(): String {
    return this.custReference3;
  }

  public setCustReference3(custReference3: String): void {
    this.custReference3 = custReference3;
  }

  public getCustReference4(): String {
    return this.custReference4;
  }

  public setCustReference4(custReference4: String): void {
    this.custReference4 = custReference4;
  }

  public getCustReference5(): String {
    return this.custReference5;
  }

  public setCustReference5(custReference5: String): void {
    this.custReference5 = custReference5;
  }

  public getCustReference6(): String {
    return this.custReference6;
  }

  public setCustReference6(custReference6: String): void {
    this.custReference6 = custReference6;
  }

  public getCustReference7(): String {
    return this.custReference7;
  }

  public setCustReference7(custReference7: String): void {
    this.custReference7 = custReference7;
  }

  public getCustReference8(): String {
    return this.custReference8;
  }

  public setCustReference8(custReference8: String): void {
    this.custReference8 = custReference8;
  }

  public getCustReference9(): String {
    return this.custReference9;
  }

  public setCustReference9(custReference9: String): void {
    this.custReference9 = custReference9;
  }

  public getDate01(): Date {
    return this.date01;
  }

  public setDate01(date01: Date): void {
    this.date01 = date01;
  }

  public getDate02(): Date {
    return this.date02;
  }

  public setDate02(date02: Date): void {
    this.date02 = date02;
  }

  public getDate03(): Date {
    return this.date03;
  }

  public setDate03(date03: Date): void {
    this.date03 = date03;
  }

  public getDate04(): Date {
    return this.date04;
  }

  public setDate04(date04: Date): void {
    this.date04 = date04;
  }

  public getDate05(): Date {
    return this.date05;
  }

  public setDate05(date05: Date): void {
    this.date05 = date05;
  }

  public getDate06(): Date {
    return this.date06;
  }

  public setDate06(date06: Date): void {
    this.date06 = date06;
  }

  public getDate07(): Date {
    return this.date07;
  }

  public setDate07(date07: Date): void {
    this.date07 = date07;
  }

  public getDate08(): Date {
    return this.date08;
  }

  public setDate08(date08: Date): void {
    this.date08 = date08;
  }

  public getDate09(): Date {
    return this.date09;
  }

  public setDate09(date09: Date): void {
    this.date09 = date09;
  }

  public getDate10(): Date {
    return this.date10;
  }

  public setDate10(date10: Date): void {
    this.date10 = date10;
  }

  public getDeclaredPackagesQuantity(): Number {
    return this.declaredPackagesQuantity;
  }

  public setDeclaredPackagesQuantity(declaredPackagesQuantity: Number): void {
    this.declaredPackagesQuantity = declaredPackagesQuantity;
  }

  public getDeclaredPackagesVolume(): Number {
    return this.declaredPackagesVolume;
  }

  public setDeclaredPackagesVolume(declaredPackagesVolume: Number): void {
    this.declaredPackagesVolume = declaredPackagesVolume;
  }

  public getDeclaredPackagesWeight(): Number {
    return this.declaredPackagesWeight;
  }

  public setDeclaredPackagesWeight(declaredPackagesWeight: Number): void {
    this.declaredPackagesWeight = declaredPackagesWeight;
  }

  public getDepartureDate(): Date {
    return this.departureDate;
  }

  public setDepartureDate(departureDate: Date): void {
    this.departureDate = departureDate;
  }

  public getDepartureTime(): Date {
    return this.departureTime;
  }

  public setDepartureTime(departureTime: Date): void {
    this.departureTime = departureTime;
  }

  public getDiscrepancyReportArrivalDate(): Date {
    return this.discrepancyReportArrivalDate;
  }

  public setDiscrepancyReportArrivalDate(discrepancyReportArrivalDate: Date): void {
    this.discrepancyReportArrivalDate = discrepancyReportArrivalDate;
  }

  public getDiscrepancyReportArrivalTime(): Date {
    return this.discrepancyReportArrivalTime;
  }

  public setDiscrepancyReportArrivalTime(discrepancyReportArrivalTime: Date): void {
    this.discrepancyReportArrivalTime = discrepancyReportArrivalTime;
  }

  public getDiscrepancyReportCreationDate(): Date {
    return this.discrepancyReportCreationDate;
  }

  public setDiscrepancyReportCreationDate(discrepancyReportCreationDate: Date): void {
    this.discrepancyReportCreationDate = discrepancyReportCreationDate;
  }

  public getDiscrepancyReportExists(): Number {
    return this.discrepancyReportExists;
  }

  public setDiscrepancyReportExists(discrepancyReportExists: Number): void {
    this.discrepancyReportExists = discrepancyReportExists;
  }

  public getDiscrepancyReportRemarks(): String {
    return this.discrepancyReportRemarks;
  }

  public setDiscrepancyReportRemarks(discrepancyReportRemarks: String): void {
    this.discrepancyReportRemarks = discrepancyReportRemarks;
  }

  public getDiscrepancyReportUserId(): Number {
    return this.discrepancyReportUserId;
  }

  public setDiscrepancyReportUserId(discrepancyReportUserId: Number): void {
    this.discrepancyReportUserId = discrepancyReportUserId;
  }

  public getDiscrepancyReportUserName(): String {
    return this.discrepancyReportUserName;
  }

  public setDiscrepancyReportUserName(discrepancyReportUserName: String): void {
    this.discrepancyReportUserName = discrepancyReportUserName;
  }

  public getDiscrepancyReportUserSurname(): String {
    return this.discrepancyReportUserSurname;
  }

  public setDiscrepancyReportUserSurname(discrepancyReportUserSurname: String): void {
    this.discrepancyReportUserSurname = discrepancyReportUserSurname;
  }

  public getEdiLock(): Number {
    return this.ediLock;
  }

  public setEdiLock(ediLock: Number): void {
    this.ediLock = ediLock;
  }

  public getExternalId(): String {
    return this.externalId;
  }

  public setExternalId(externalId: String): void {
    this.externalId = externalId;
  }

  public getExternalId2(): String {
    return this.externalId2;
  }

  public setExternalId2(externalId2: String): void {
    this.externalId2 = externalId2;
  }

  public getFreeTextDictionary1(): String {
    return this.freeTextDictionary1;
  }

  public setFreeTextDictionary1(freeTextDictionary1: String): void {
    this.freeTextDictionary1 = freeTextDictionary1;
  }

  public getFreeTextDictionary10(): String {
    return this.freeTextDictionary10;
  }

  public setFreeTextDictionary10(freeTextDictionary10: String): void {
    this.freeTextDictionary10 = freeTextDictionary10;
  }

  public getFreeTextDictionary11(): String {
    return this.freeTextDictionary11;
  }

  public setFreeTextDictionary11(freeTextDictionary11: String): void {
    this.freeTextDictionary11 = freeTextDictionary11;
  }

  public getFreeTextDictionary12(): String {
    return this.freeTextDictionary12;
  }

  public setFreeTextDictionary12(freeTextDictionary12: String): void {
    this.freeTextDictionary12 = freeTextDictionary12;
  }

  public getFreeTextDictionary13(): String {
    return this.freeTextDictionary13;
  }

  public setFreeTextDictionary13(freeTextDictionary13: String): void {
    this.freeTextDictionary13 = freeTextDictionary13;
  }

  public getFreeTextDictionary14(): String {
    return this.freeTextDictionary14;
  }

  public setFreeTextDictionary14(freeTextDictionary14: String): void {
    this.freeTextDictionary14 = freeTextDictionary14;
  }

  public getFreeTextDictionary15(): String {
    return this.freeTextDictionary15;
  }

  public setFreeTextDictionary15(freeTextDictionary15: String): void {
    this.freeTextDictionary15 = freeTextDictionary15;
  }

  public getFreeTextDictionary16(): String {
    return this.freeTextDictionary16;
  }

  public setFreeTextDictionary16(freeTextDictionary16: String): void {
    this.freeTextDictionary16 = freeTextDictionary16;
  }

  public getFreeTextDictionary17(): String {
    return this.freeTextDictionary17;
  }

  public setFreeTextDictionary17(freeTextDictionary17: String): void {
    this.freeTextDictionary17 = freeTextDictionary17;
  }

  public getFreeTextDictionary18(): String {
    return this.freeTextDictionary18;
  }

  public setFreeTextDictionary18(freeTextDictionary18: String): void {
    this.freeTextDictionary18 = freeTextDictionary18;
  }

  public getFreeTextDictionary19(): String {
    return this.freeTextDictionary19;
  }

  public setFreeTextDictionary19(freeTextDictionary19: String): void {
    this.freeTextDictionary19 = freeTextDictionary19;
  }

  public getFreeTextDictionary2(): String {
    return this.freeTextDictionary2;
  }

  public setFreeTextDictionary2(freeTextDictionary2: String): void {
    this.freeTextDictionary2 = freeTextDictionary2;
  }

  public getFreeTextDictionary20(): String {
    return this.freeTextDictionary20;
  }

  public setFreeTextDictionary20(freeTextDictionary20: String): void {
    this.freeTextDictionary20 = freeTextDictionary20;
  }

  public getFreeTextDictionary3(): String {
    return this.freeTextDictionary3;
  }

  public setFreeTextDictionary3(freeTextDictionary3: String): void {
    this.freeTextDictionary3 = freeTextDictionary3;
  }

  public getFreeTextDictionary4(): String {
    return this.freeTextDictionary4;
  }

  public setFreeTextDictionary4(freeTextDictionary4: String): void {
    this.freeTextDictionary4 = freeTextDictionary4;
  }

  public getFreeTextDictionary5(): String {
    return this.freeTextDictionary5;
  }

  public setFreeTextDictionary5(freeTextDictionary5: String): void {
    this.freeTextDictionary5 = freeTextDictionary5;
  }

  public getFreeTextDictionary6(): String {
    return this.freeTextDictionary6;
  }

  public setFreeTextDictionary6(freeTextDictionary6: String): void {
    this.freeTextDictionary6 = freeTextDictionary6;
  }

  public getFreeTextDictionary7(): String {
    return this.freeTextDictionary7;
  }

  public setFreeTextDictionary7(freeTextDictionary7: String): void {
    this.freeTextDictionary7 = freeTextDictionary7;
  }

  public getFreeTextDictionary8(): String {
    return this.freeTextDictionary8;
  }

  public setFreeTextDictionary8(freeTextDictionary8: String): void {
    this.freeTextDictionary8 = freeTextDictionary8;
  }

  public getFreeTextDictionary9(): String {
    return this.freeTextDictionary9;
  }

  public setFreeTextDictionary9(freeTextDictionary9: String): void {
    this.freeTextDictionary9 = freeTextDictionary9;
  }

  public getId(): Number {
    return this.id;
  }

  public setId(id: Number): void {
    this.id = id;
  }

  public getIntNumber01(): Number {
    return this.intNumber01;
  }

  public setIntNumber01(intNumber01: Number): void {
    this.intNumber01 = intNumber01;
  }

  public getIntNumber02(): Number {
    return this.intNumber02;
  }

  public setIntNumber02(intNumber02: Number): void {
    this.intNumber02 = intNumber02;
  }

  public getIntNumber03(): Number {
    return this.intNumber03;
  }

  public setIntNumber03(intNumber03: Number): void {
    this.intNumber03 = intNumber03;
  }

  public getIntNumber04(): Number {
    return this.intNumber04;
  }

  public setIntNumber04(intNumber04: Number): void {
    this.intNumber04 = intNumber04;
  }

  public getIntNumber05(): Number {
    return this.intNumber05;
  }

  public setIntNumber05(intNumber05: Number): void {
    this.intNumber05 = intNumber05;
  }

  public getIntNumber06(): Number {
    return this.intNumber06;
  }

  public setIntNumber06(intNumber06: Number): void {
    this.intNumber06 = intNumber06;
  }

  public getIntNumber07(): Number {
    return this.intNumber07;
  }

  public setIntNumber07(intNumber07: Number): void {
    this.intNumber07 = intNumber07;
  }

  public getIntNumber08(): Number {
    return this.intNumber08;
  }

  public setIntNumber08(intNumber08: Number): void {
    this.intNumber08 = intNumber08;
  }

  public getIntNumber09(): Number {
    return this.intNumber09;
  }

  public setIntNumber09(intNumber09: Number): void {
    this.intNumber09 = intNumber09;
  }

  public getIntNumber10(): Number {
    return this.intNumber10;
  }

  public setIntNumber10(intNumber10: Number): void {
    this.intNumber10 = intNumber10;
  }

  public getLastModificationDate(): Date {
    return this.lastModificationDate;
  }

  public setLastModificationDate(lastModificationDate: Date): void {
    this.lastModificationDate = lastModificationDate;
  }

  public getLastStatusLocation(): String {
    return this.lastStatusLocation;
  }

  public setLastStatusLocation(lastStatusLocation: String): void {
    this.lastStatusLocation = lastStatusLocation;
  }

  public getLoadingDate(): Date {
    return this.loadingDate;
  }

  public setLoadingDate(loadingDate: Date): void {
    this.loadingDate = loadingDate;
  }

  public getLoadingTime(): Date {
    return this.loadingTime;
  }

  public setLoadingTime(loadingTime: Date): void {
    this.loadingTime = loadingTime;
  }

  public getLoadingType(): String {
    return this.loadingType;
  }

  public setLoadingType(loadingType: String): void {
    this.loadingType = loadingType;
  }

  public getLocationStatus(): Number {
    return this.locationStatus;
  }

  public setLocationStatus(locationStatus: Number): void {
    this.locationStatus = locationStatus;
  }

  public getLongReference01(): String {
    return this.longReference01;
  }

  public setLongReference01(longReference01: String): void {
    this.longReference01 = longReference01;
  }

  public getLongReference02(): String {
    return this.longReference02;
  }

  public setLongReference02(longReference02: String): void {
    this.longReference02 = longReference02;
  }

  public getLongReference03(): String {
    return this.longReference03;
  }

  public setLongReference03(longReference03: String): void {
    this.longReference03 = longReference03;
  }

  public getLongReference04(): String {
    return this.longReference04;
  }

  public setLongReference04(longReference04: String): void {
    this.longReference04 = longReference04;
  }

  public getLongReference05(): String {
    return this.longReference05;
  }

  public setLongReference05(longReference05: String): void {
    this.longReference05 = longReference05;
  }

  public getLongReference06(): String {
    return this.longReference06;
  }

  public setLongReference06(longReference06: String): void {
    this.longReference06 = longReference06;
  }

  public getLongReference07(): String {
    return this.longReference07;
  }

  public setLongReference07(longReference07: String): void {
    this.longReference07 = longReference07;
  }

  public getLongReference08(): String {
    return this.longReference08;
  }

  public setLongReference08(longReference08: String): void {
    this.longReference08 = longReference08;
  }

  public getLongReference09(): String {
    return this.longReference09;
  }

  public setLongReference09(longReference09: String): void {
    this.longReference09 = longReference09;
  }

  public getLongReference10(): String {
    return this.longReference10;
  }

  public setLongReference10(longReference10: String): void {
    this.longReference10 = longReference10;
  }

  public getOnHold(): Number {
    return this.onHold;
  }

  public setOnHold(onHold: Number): void {
    this.onHold = onHold;
  }

  public getPackagesQuantity(): Number {
    return this.packagesQuantity;
  }

  public setPackagesQuantity(packagesQuantity: Number): void {
    this.packagesQuantity = packagesQuantity;
  }

  public getPackagesVolume(): Number {
    return this.packagesVolume;
  }

  public setPackagesVolume(packagesVolume: Number): void {
    this.packagesVolume = packagesVolume;
  }

  public getPackagesWeight(): Number {
    return this.packagesWeight;
  }

  public setPackagesWeight(packagesWeight: Number): void {
    this.packagesWeight = packagesWeight;
  }

  public getPortOfArrival(): String {
    return this.portOfArrival;
  }

  public setPortOfArrival(portOfArrival: String): void {
    this.portOfArrival = portOfArrival;
  }

  public getPortOfDeparture(): String {
    return this.portOfDeparture;
  }

  public setPortOfDeparture(portOfDeparture: String): void {
    this.portOfDeparture = portOfDeparture;
  }

  public getRealNumber01(): Number {
    return this.realNumber01;
  }

  public setRealNumber01(realNumber01: Number): void {
    this.realNumber01 = realNumber01;
  }

  public getRealNumber02(): Number {
    return this.realNumber02;
  }

  public setRealNumber02(realNumber02: Number): void {
    this.realNumber02 = realNumber02;
  }

  public getRealNumber03(): Number {
    return this.realNumber03;
  }

  public setRealNumber03(realNumber03: Number): void {
    this.realNumber03 = realNumber03;
  }

  public getRealNumber04(): Number {
    return this.realNumber04;
  }

  public setRealNumber04(realNumber04: Number): void {
    this.realNumber04 = realNumber04;
  }

  public getRealNumber05(): Number {
    return this.realNumber05;
  }

  public setRealNumber05(realNumber05: Number): void {
    this.realNumber05 = realNumber05;
  }

  public getRealNumber06(): Number {
    return this.realNumber06;
  }

  public setRealNumber06(realNumber06: Number): void {
    this.realNumber06 = realNumber06;
  }

  public getRealNumber07(): Number {
    return this.realNumber07;
  }

  public setRealNumber07(realNumber07: Number): void {
    this.realNumber07 = realNumber07;
  }

  public getRealNumber08(): Number {
    return this.realNumber08;
  }

  public setRealNumber08(realNumber08: Number): void {
    this.realNumber08 = realNumber08;
  }

  public getRealNumber09(): Number {
    return this.realNumber09;
  }

  public setRealNumber09(realNumber09: Number): void {
    this.realNumber09 = realNumber09;
  }

  public getRealNumber10(): Number {
    return this.realNumber10;
  }

  public setRealNumber10(realNumber10: Number): void {
    this.realNumber10 = realNumber10;
  }

  public getReasonLast(): String {
    return this.reasonLast;
  }

  public setReasonLast(reasonLast: String): void {
    this.reasonLast = reasonLast;
  }

  public getRecalculate(): Number {
    return this.recalculate;
  }

  public setRecalculate(recalculate: Number): void {
    this.recalculate = recalculate;
  }

  public getReference(): String {
    return this.reference;
  }

  public setReference(reference: String): void {
    this.reference = reference;
  }

  public getRouteId(): String {
    return this.routeId;
  }

  public setRouteId(routeId: String): void {
    this.routeId = routeId;
  }

  public getSendDate(): Date {
    return this.sendDate;
  }

  public setSendDate(sendDate: Date): void {
    this.sendDate = sendDate;
  }

  public getServiceId(): String {
    return this.serviceId;
  }

  public setServiceId(serviceId: String): void {
    this.serviceId = serviceId;
  }

  public getShortReference01(): String {
    return this.shortReference01;
  }

  public setShortReference01(shortReference01: String): void {
    this.shortReference01 = shortReference01;
  }

  public getShortReference02(): String {
    return this.shortReference02;
  }

  public setShortReference02(shortReference02: String): void {
    this.shortReference02 = shortReference02;
  }

  public getShortReference03(): String {
    return this.shortReference03;
  }

  public setShortReference03(shortReference03: String): void {
    this.shortReference03 = shortReference03;
  }

  public getShortReference04(): String {
    return this.shortReference04;
  }

  public setShortReference04(shortReference04: String): void {
    this.shortReference04 = shortReference04;
  }

  public getShortReference05(): String {
    return this.shortReference05;
  }

  public setShortReference05(shortReference05: String): void {
    this.shortReference05 = shortReference05;
  }

  public getShortReference06(): String {
    return this.shortReference06;
  }

  public setShortReference06(shortReference06: String): void {
    this.shortReference06 = shortReference06;
  }

  public getShortReference07(): String {
    return this.shortReference07;
  }

  public setShortReference07(shortReference07: String): void {
    this.shortReference07 = shortReference07;
  }

  public getShortReference08(): String {
    return this.shortReference08;
  }

  public setShortReference08(shortReference08: String): void {
    this.shortReference08 = shortReference08;
  }

  public getShortReference09(): String {
    return this.shortReference09;
  }

  public setShortReference09(shortReference09: String): void {
    this.shortReference09 = shortReference09;
  }

  public getShortReference10(): String {
    return this.shortReference10;
  }

  public setShortReference10(shortReference10: String): void {
    this.shortReference10 = shortReference10;
  }

  public getSolutionId(): Number {
    return this.solutionId;
  }

  public setSolutionId(solutionId: Number): void {
    this.solutionId = solutionId;
  }

  public getState(): Number {
    return this.state;
  }

  public setState(state: Number): void {
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

  public getTime01(): Date {
    return this.time01;
  }

  public setTime01(time01: Date): void {
    this.time01 = time01;
  }

  public getTime02(): Date {
    return this.time02;
  }

  public setTime02(time02: Date): void {
    this.time02 = time02;
  }

  public getTime03(): Date {
    return this.time03;
  }

  public setTime03(time03: Date): void {
    this.time03 = time03;
  }

  public getTime04(): Date {
    return this.time04;
  }

  public setTime04(time04: Date): void {
    this.time04 = time04;
  }

  public getTime05(): Date {
    return this.time05;
  }

  public setTime05(time05: Date): void {
    this.time05 = time05;
  }

  public getTime06(): Date {
    return this.time06;
  }

  public setTime06(time06: Date): void {
    this.time06 = time06;
  }

  public getTime07(): Date {
    return this.time07;
  }

  public setTime07(time07: Date): void {
    this.time07 = time07;
  }

  public getTime08(): Date {
    return this.time08;
  }

  public setTime08(time08: Date): void {
    this.time08 = time08;
  }

  public getTime09(): Date {
    return this.time09;
  }

  public setTime09(time09: Date): void {
    this.time09 = time09;
  }

  public getTime10(): Date {
    return this.time10;
  }

  public setTime10(time10: Date): void {
    this.time10 = time10;
  }

  public getTransportChain(): String {
    return this.transportChain;
  }

  public setTransportChain(transportChain: String): void {
    this.transportChain = transportChain;
  }

  public getTransportCost(): Number {
    return this.transportCost;
  }

  public setTransportCost(transportCost: Number): void {
    this.transportCost = transportCost;
  }

  public getTransportCostCurrency(): String {
    return this.transportCostCurrency;
  }

  public setTransportCostCurrency(transportCostCurrency: String): void {
    this.transportCostCurrency = transportCostCurrency;
  }

  public getTransportDepartament(): String {
    return this.transportDepartament;
  }

  public setTransportDepartament(transportDepartament: String): void {
    this.transportDepartament = transportDepartament;
  }

  public getTransportDistance(): Number {
    return this.transportDistance;
  }

  public setTransportDistance(transportDistance: Number): void {
    this.transportDistance = transportDistance;
  }

  public getTransportId(): String {
    return this.transportId;
  }

  public setTransportId(transportId: String): void {
    this.transportId = transportId;
  }

  public getTransportSpecial(): String {
    return this.transportSpecial;
  }

  public setTransportSpecial(transportSpecial: String): void {
    this.transportSpecial = transportSpecial;
  }

  public getTransportState(): Number {
    return this.transportState;
  }

  public setTransportState(transportState: Number): void {
    this.transportState = transportState;
  }

  public getType(): Number {
    return this.type;
  }

  public setType(type: Number): void {
    this.type = type;
  }

  public getUpsAccountNo(): String {
    return this.upsAccountNo;
  }

  public setUpsAccountNo(upsAccountNo: String): void {
    this.upsAccountNo = upsAccountNo;
  }

  public getUpsBookingNr(): String {
    return this.upsBookingNr;
  }

  public setUpsBookingNr(upsBookingNr: String): void {
    this.upsBookingNr = upsBookingNr;
  }

  public getUpsPageNr(): String {
    return this.upsPageNr;
  }

  public setUpsPageNr(upsPageNr: String): void {
    this.upsPageNr = upsPageNr;
  }

  public getUserId(): Number {
    return this.userId;
  }

  public setUserId(userId: Number): void {
    this.userId = userId;
  }

  public getVesselArrivalDate(): Date {
    return this.vesselArrivalDate;
  }

  public setVesselArrivalDate(vesselArrivalDate: Date): void {
    this.vesselArrivalDate = vesselArrivalDate;
  }

  public getVesselArrivalTime(): Date {
    return this.vesselArrivalTime;
  }

  public setVesselArrivalTime(vesselArrivalTime: Date): void {
    this.vesselArrivalTime = vesselArrivalTime;
  }

  public getVesselDepartureDate(): Date {
    return this.vesselDepartureDate;
  }

  public setVesselDepartureDate(vesselDepartureDate: Date): void {
    this.vesselDepartureDate = vesselDepartureDate;
  }

  public getVesselDepartureTime(): Date {
    return this.vesselDepartureTime;
  }

  public setVesselDepartureTime(vesselDepartureTime: Date): void {
    this.vesselDepartureTime = vesselDepartureTime;
  }

  public getVesselName(): String {
    return this.vesselName;
  }

  public setVesselName(vesselName: String): void {
    this.vesselName = vesselName;
  }
}
