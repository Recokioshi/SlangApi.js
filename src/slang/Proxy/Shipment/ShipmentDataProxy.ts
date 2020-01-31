import { ShipmentAddressDataProxy } from "./ShipmentAddressDataProxy"
import { CostPositionDataListProxy } from "../Cost/CostPositionDataListProxy"
import { BaseProxyObject } from "../Common/BaseProxyObject";

export class ShipmentDataProxy  extends BaseProxyObject {
    constructor(dbRow: any) {
        super(dbRow);
        this.mapSQLResultRowToProxy(this, __dirname, 'ShipmentDataProxy')
    }

  private COD: Boolean = null;
  private CODCurrency: String = null;
  private EUR1Nr: String = null;
  private PODBarcode: String = null;
  private PODQuantity: number = null;
  private PODReason: number = null;
  private PODStatus: number = null;
  private addService: String = null;
  private additionalRemarks1: String = null;
  private additionalRemarks2: String = null;
  private additionalRemarks3: String = null;
  private additionalService2: String = null;
  private aeNr: String = null;
  private agreedRate: number = null;
  private agreedRateCurrency: String = null;
  private akmNr: String = null;
  private arrangeDelivery: Boolean = null;
  private asnShipment: number = null;
  private ataDate: Date = null;
  private ataTime: Date = null;
  private atdDate: Date = null;
  private atdTime: Date = null;
  private billingAddress: ShipmentAddressDataProxy = null;
  private bookingReason: String = null;
  private bookingStatus: number = null;
  private cargoValue: number = null;
  private cargoValueCurrency: String = null;
  private cashOnDelivery: String = null;
  private cashOnDeliveryThirdParty: String = null;
  private cashOnDeliveryThirdPartyCountry: String = null;
  private cashOnPlace: String = null;
  private cepDocumentId: String = null;
  private cepServiceCode: String = null;
  private cepServiceName: String = null;
  private cepServiceOptions: String = null;
  private certificateOfOriginNr: String = null;
  private chargeableWeight: number = null;
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
  private completeDelivery: Boolean = null;
  private completionDate: Date = null;
  private completionTime: Date = null;
  private consigneeSeaport: String = null;
  private consignorAddress: ShipmentAddressDataProxy = null;
  private consolidated: number = null;
  private costs: CostPositionDataListProxy = null;
  private creationDate: Date = null;
  private ctaDate: Date = null;
  private ctaTime: Date = null;
  private currShipmentId: number = null;
  private currentLocation: ShipmentAddressDataProxy = null;
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
  private customerVersion: number = null;
  private customerVersionDate: Date = null;
  private customerVersionModDate: Date = null;
  private customsCargoCurrency: String = null;
  private customsCargoValue: number = null;
  private customsCertificateOfOrigin: Boolean = null;
  private customsEUR1: Boolean = null;
  private customsNoPreference: Boolean = null;
  private customsRemarks: String = null;
  private customsValue: number = null;
  private customsValueCurrency: String = null;
  private dangerGoodsDeclaration: Boolean = null;
  private dangerGoodsLabel: number = null;
  private dangergoodsLanguage: String = null;
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
  private declaredPositionsQuantity: number = null;
  private declaredPositionsVolume: number = null;
  private declaredPositionsWeight: number = null;
  private delay: number = null;
  private delayReason: String = null;
  private delayStatusFlag: number = null;
  private deliveredBy: String = null;
  private deliveryInstruction: String = null;
  private departureSeaport: String = null;
  private destinationAirport: String = null;
  private detachedReason: String = null;
  private detachedStatus: number = null;
  private directLoading: Boolean = null;
  private distributionCode: String = null;
  private documents: String = null;
  private draftName: String = null;
  private etaDate: Date = null;
  private externalDocExists: Boolean = null;
  private finalDestReachedFlag: Boolean = null;
  private flightNr: String = null;
  private freeText1: String = null;
  private freeText2: String = null;
  private freeText3: String = null;
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
  private freeTextDictionary21: String = null;
  private freeTextDictionary22: String = null;
  private freeTextDictionary23: String = null;
  private freeTextDictionary24: String = null;
  private freeTextDictionary25: String = null;
  private freeTextDictionary26: String = null;
  private freeTextDictionary27: String = null;
  private freeTextDictionary28: String = null;
  private freeTextDictionary29: String = null;
  private freeTextDictionary3: String = null;
  private freeTextDictionary30: String = null;
  private freeTextDictionary31: String = null;
  private freeTextDictionary32: String = null;
  private freeTextDictionary33: String = null;
  private freeTextDictionary34: String = null;
  private freeTextDictionary35: String = null;
  private freeTextDictionary36: String = null;
  private freeTextDictionary37: String = null;
  private freeTextDictionary38: String = null;
  private freeTextDictionary39: String = null;
  private freeTextDictionary4: String = null;
  private freeTextDictionary40: String = null;
  private freeTextDictionary41: String = null;
  private freeTextDictionary42: String = null;
  private freeTextDictionary43: String = null;
  private freeTextDictionary44: String = null;
  private freeTextDictionary45: String = null;
  private freeTextDictionary46: String = null;
  private freeTextDictionary47: String = null;
  private freeTextDictionary48: String = null;
  private freeTextDictionary49: String = null;
  private freeTextDictionary5: String = null;
  private freeTextDictionary50: String = null;
  private freeTextDictionary6: String = null;
  private freeTextDictionary7: String = null;
  private freeTextDictionary8: String = null;
  private freeTextDictionary9: String = null;
  private freeTextLanguage: String = null;
  private freight: String = null;
  private goodCategory: String = null;
  private goodsAreDocuments: Boolean = null;
  private goodsDescription: String = null;
  private hawbNr: String = null;
  private id: number = null;
  private insurance: number = null;
  private insuranceCurrency: String = null;
  private intNumber01: number = null;
  private intNumber02: number = null;
  private intNumber03: number = null;
  private intNumber04: number = null;
  private intNumber05: number = null;
  private intNumber06: number = null;
  private intNumber07: number = null;
  private intNumber08: number = null;
  private intNumber09: number = null;
  private intNumber10: number = null;
  private labelForm: String = null;
  private lastModificationDate: Date = null;
  private lastStatusLocation: String = null;
  private lcNr: String = null;
  private linkParameter: String = null;
  private loadingListId: number = null;
  private loadingType: String = null;
  private locationStatus: number = null;
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
  private longReference11: String = null;
  private longReference12: String = null;
  private longReference13: String = null;
  private longReference14: String = null;
  private longReference15: String = null;
  private longReference16: String = null;
  private longReference17: String = null;
  private longReference18: String = null;
  private longReference19: String = null;
  private longReference20: String = null;
  private longReference21: String = null;
  private longReference22: String = null;
  private longReference23: String = null;
  private longReference24: String = null;
  private longReference25: String = null;
  private mawbNr: String = null;
  private missingTschedReason: String = null;
  private missingTschedStatus: number = null;
  private monitorState3: number = null;
  private monitorState4: number = null;
  private nahverkehrsTourNr: String = null;
  private neutralAddress: ShipmentAddressDataProxy = null;
  private neutralize: Boolean = null;
  private notifyAddress: ShipmentAddressDataProxy = null;
  private notifyAddress2: ShipmentAddressDataProxy = null;
  private nptaDate: Date = null;
  private nptaTime: Date = null;
  private numberOfLoadingPositions: number = null;
  private onHold: number = null;
  private optionalCollectionAddress: ShipmentAddressDataProxy = null;
  private optionalReceiverAddress: ShipmentAddressDataProxy = null;
  private packerAddress: ShipmentAddressDataProxy = null;
  private paymentType: String = null;
  private positionsDimWeight: number = null;
  private positionsLiter: number = null;
  private positionsLoadingMeters: number = null;
  private positionsPayableLoadingMeters: number = null;
  private positionsPayableLoadingMeters2: number = null;
  private positionsQuantity: number = null;
  private positionsVolume: number = null;
  private positionsWeight: number = null;
  private preferredDelivery: Boolean = null;
  private priority: Boolean = null;
  private problemWithDeliveryReason: String = null;
  private problemWithDeliveryStatus: number = null;
  private propagationDeactivated: Boolean = null;
  private realNumber01: number = null;
  private realNumber02: number = null;
  private realNumber03: number = null;
  private realNumber04: number = null;
  private realNumber05: number = null;
  private realNumber06: number = null;
  private realNumber07: number = null;
  private realNumber08: number = null;
  private realNumber09: number = null;
  private realNumber10: number = null;
  private reasonLast: String = null;
  private receiptDate: Date = null;
  private receiptDateTo: Date = null;
  private receiptSpecification: number = null;
  private receiptTime: Date = null;
  private receiverAddress: ShipmentAddressDataProxy = null;
  private reference1: String = null;
  private reference2: String = null;
  private reference2Dict: String = null;
  private reference3: String = null;
  private reference4: String = null;
  private remarks1: String = null;
  private remarks2: String = null;
  private remarks3: String = null;
  private remarksDictionary1: String = null;
  private remarksDictionary2: String = null;
  private remarksDictionary3: String = null;
  private requestedReceiptDate: Date = null;
  private requestedReceiptSpecification: number = null;
  private requestedReceiptTime: Date = null;
  private requestedReceiptTimeTo: Date = null;
  private requestedSupplyDate: Date = null;
  private requestedSupplySpecification: number = null;
  private requestedSupplyTime: Date = null;
  private requestedSupplyTimeTo: Date = null;
  private returnDocuments: Boolean = null;
  private route: String = null;
  private routingConstraintName: String = null;
  private saturdayDelivery: Boolean = null;
  private saturdayPickup: Boolean = null;
  private selfReceipt: Boolean = null;
  private selfWithdraw: Boolean = null;
  private sendDate: Date = null;
  private senderAddress: ShipmentAddressDataProxy = null;
  private senderEmail: String = null;
  private senderFax: String = null;
  private senderName: String = null;
  private senderPhoneNr: String = null;
  private serverName: String = null;
  private service: String = null;
  private shippingLine: ShipmentAddressDataProxy = null;
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
  private shortReference11: String = null;
  private shortReference12: String = null;
  private shortReference13: String = null;
  private shortReference14: String = null;
  private shortReference15: String = null;
  private shortReference16: String = null;
  private shortReference17: String = null;
  private shortReference18: String = null;
  private shortReference19: String = null;
  private shortReference20: String = null;
  private shortReference21: String = null;
  private shortReference22: String = null;
  private shortReference23: String = null;
  private shortReference24: String = null;
  private shortReference25: String = null;
  private slvs: Boolean = null;
  private solutionId: number = null;
  private spedShipmentId: String = null;
  private stackable: Boolean = null;
  private state: number = null;
  private state3: number = null;
  private state4: number = null;
  private statusDateLast: Date = null;
  private statusLast: String = null;
  private statusSystemDateLast: Date = null;
  private stoppageTime: number = null;
  private supplierNr: String = null;
  private supplyDate: Date = null;
  private supplyDateTo: Date = null;
  private supplySpecification: number = null;
  private supplyTime: Date = null;
  private systemCreateDate: Date = null;
  private systemLastModificationDate: Date = null;
  private templateType: number = null;
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
  private toTheDebitOf: number = null;
  private toleranceLevel1: number = null;
  private toleranceLevel2: number = null;
  private toleranceLevel3: number = null;
  private tourNrSequence: number = null;
  private transportAddress: ShipmentAddressDataProxy = null;
  private transportInsurance: Boolean = null;
  private transportStage: number = null;
  private transportState: number = null;
  private transportVehicle: number = null;
  private type: number = null;
  private typeOfReference: String = null;
  private typeofDocument: number = null;
  private upsAccount: String = null;
  private upsBilling: String = null;
  private upsCOD: String = null;
  private upsDocType: String = null;
  private upsPostalCode: String = null;
  private valid: Boolean = null;
  private vesselDepartureDate: Date = null;
  private vesselName: String = null;
  private viewed: number = null;
  private voyageNr: String = null;
  private wholeValid: Boolean = null;
  private worth: number = null;
  private worthCurrency: String = null;
  private zoll: Boolean   = null;

    public isCOD(): Boolean {
        return this.COD;
    }

    public setCOD(COD: Boolean): void {
        this.COD = COD;
    }

    public getCODCurrency(): String {
        return this.CODCurrency;
    }

    public setCODCurrency(CODCurrency: String): void {
        this.CODCurrency = CODCurrency;
    }

    public getEUR1Nr(): String {
        return this.EUR1Nr;
    }

    public setEUR1Nr(EUR1Nr: String): void {
        this.EUR1Nr = EUR1Nr;
    }

    public getPODBarcode(): String {
        return this.PODBarcode;
    }

    public setPODBarcode(PODBarcode: String): void {
        this.PODBarcode = PODBarcode;
    }

    public getPODQuantity(): number {
        return this.PODQuantity;
    }

    public setPODQuantity(PODQuantity: number): void {
        this.PODQuantity = PODQuantity;
    }

    public getPODReason(): number {
        return this.PODReason;
    }

    public setPODReason(PODReason: number): void {
        this.PODReason = PODReason;
    }

    public getPODStatus(): number {
        return this.PODStatus;
    }

    public setPODStatus(PODStatus: number): void {
        this.PODStatus = PODStatus;
    }

    public getAddService(): String {
        return this.addService;
    }

    public setAddService(addService: String): void {
        this.addService = addService;
    }

    public getAdditionalRemarks1(): String {
        return this.additionalRemarks1;
    }

    public setAdditionalRemarks1(additionalRemarks1: String): void {
        this.additionalRemarks1 = additionalRemarks1;
    }

    public getAdditionalRemarks2(): String {
        return this.additionalRemarks2;
    }

    public setAdditionalRemarks2(additionalRemarks2: String): void {
        this.additionalRemarks2 = additionalRemarks2;
    }

    public getAdditionalRemarks3(): String {
        return this.additionalRemarks3;
    }

    public setAdditionalRemarks3(additionalRemarks3: String): void {
        this.additionalRemarks3 = additionalRemarks3;
    }

    public getAdditionalService2(): String {
        return this.additionalService2;
    }

    public setAdditionalService2(additionalService2: String): void {
        this.additionalService2 = additionalService2;
    }

    public getAeNr(): String {
        return this.aeNr;
    }

    public setAeNr(aeNr: String): void {
        this.aeNr = aeNr;
    }

    public getAgreedRate(): number {
        return this.agreedRate;
    }

    public setAgreedRate(agreedRate: number): void {
        this.agreedRate = agreedRate;
    }

    public getAgreedRateCurrency(): String {
        return this.agreedRateCurrency;
    }

    public setAgreedRateCurrency(agreedRateCurrency: String): void {
        this.agreedRateCurrency = agreedRateCurrency;
    }

    public getAkmNr(): String {
        return this.akmNr;
    }

    public setAkmNr(akmNr: String): void {
        this.akmNr = akmNr;
    }

    public isArrangeDelivery(): Boolean {
        return this.arrangeDelivery;
    }

    public setArrangeDelivery(arrangeDelivery: Boolean): void {
        this.arrangeDelivery = arrangeDelivery;
    }

    public getAsnShipment(): number {
        return this.asnShipment;
    }

    public setAsnShipment(asnShipment: number): void {
        this.asnShipment = asnShipment;
    }

    public getAtaDate(): Date {
        return this.ataDate;
    }

    public setAtaDate(ataDate: Date): void {
        this.ataDate = ataDate;
    }

    public getAtaTime(): Date {
        return this.ataTime;
    }

    public setAtaTime(ataTime: Date): void {
        this.ataTime = ataTime;
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

    public getBillingAddress(): ShipmentAddressDataProxy {
        return this.billingAddress;
    }

    public setBillingAddress(billingAddress: ShipmentAddressDataProxy): void {
        this.billingAddress = billingAddress;
    }

    public getBookingReason(): String {
        return this.bookingReason;
    }

    public setBookingReason(bookingReason: String): void {
        this.bookingReason = bookingReason;
    }

    public getBookingStatus(): number {
        return this.bookingStatus;
    }

    public setBookingStatus(bookingStatus: number): void {
        this.bookingStatus = bookingStatus;
    }

    public getCargoValue(): number {
        return this.cargoValue;
    }

    public setCargoValue(cargoValue: number): void {
        this.cargoValue = cargoValue;
    }

    public getCargoValueCurrency(): String {
        return this.cargoValueCurrency;
    }

    public setCargoValueCurrency(cargoValueCurrency: String): void {
        this.cargoValueCurrency = cargoValueCurrency;
    }

    public getCashOnDelivery(): String {
        return this.cashOnDelivery;
    }

    public setCashOnDelivery(cashOnDelivery: String): void {
        this.cashOnDelivery = cashOnDelivery;
    }

    public getCashOnDeliveryThirdParty(): String {
        return this.cashOnDeliveryThirdParty;
    }

    public setCashOnDeliveryThirdParty(cashOnDeliveryThirdParty: String): void {
        this.cashOnDeliveryThirdParty = cashOnDeliveryThirdParty;
    }

    public getCashOnDeliveryThirdPartyCountry(): String {
        return this.cashOnDeliveryThirdPartyCountry;
    }

    public setCashOnDeliveryThirdPartyCountry(cashOnDeliveryThirdPartyCountry: String): void {
        this.cashOnDeliveryThirdPartyCountry = cashOnDeliveryThirdPartyCountry;
    }

    public getCashOnPlace(): String {
        return this.cashOnPlace;
    }

    public setCashOnPlace(cashOnPlace: String): void {
        this.cashOnPlace = cashOnPlace;
    }

    public getCepDocumentId(): String {
        return this.cepDocumentId;
    }

    public setCepDocumentId(cepDocumentId: String): void {
        this.cepDocumentId = cepDocumentId;
    }

    public getCepServiceCode(): String {
        return this.cepServiceCode;
    }

    public setCepServiceCode(cepServiceCode: String): void {
        this.cepServiceCode = cepServiceCode;
    }

    public getCepServiceName(): String {
        return this.cepServiceName;
    }

    public setCepServiceName(cepServiceName: String): void {
        this.cepServiceName = cepServiceName;
    }

    public getCepServiceOptions(): String {
        return this.cepServiceOptions;
    }

    public setCepServiceOptions(cepServiceOptions: String): void {
        this.cepServiceOptions = cepServiceOptions;
    }

    public getCertificateOfOriginNr(): String {
        return this.certificateOfOriginNr;
    }

    public setCertificateOfOriginNr(certificateOfOriginNr: String): void {
        this.certificateOfOriginNr = certificateOfOriginNr;
    }

    public getChargeableWeight(): number {
        return this.chargeableWeight;
    }

    public setChargeableWeight(chargeableWeight: number): void {
        this.chargeableWeight = chargeableWeight;
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

    public isCompleteDelivery(): Boolean {
        return this.completeDelivery;
    }

    public setCompleteDelivery(completeDelivery: Boolean): void {
        this.completeDelivery = completeDelivery;
    }

    public getCompletionDate(): Date {
        return this.completionDate;
    }

    public setCompletionDate(completionDate: Date): void {
        this.completionDate = completionDate;
    }

    public getCompletionTime(): Date {
        return this.completionTime;
    }

    public setCompletionTime(completionTime: Date): void {
        this.completionTime = completionTime;
    }

    public getConsigneeSeaport(): String {
        return this.consigneeSeaport;
    }

    public setConsigneeSeaport(consigneeSeaport: String): void {
        this.consigneeSeaport = consigneeSeaport;
    }

    public getConsignorAddress(): ShipmentAddressDataProxy {
        return this.consignorAddress;
    }

    public setConsignorAddress(consignorAddress: ShipmentAddressDataProxy): void {
        this.consignorAddress = consignorAddress;
    }

    public getConsolidated(): number {
        return this.consolidated;
    }

    public setConsolidated(consolidated: number): void {
        this.consolidated = consolidated;
    }

    public getCosts(): CostPositionDataListProxy {
        return this.costs;
    }

    public setCosts(costs: CostPositionDataListProxy): void {
        this.costs = costs;
    }

    public getCreationDate(): Date {
        return this.creationDate;
    }

    public setCreationDate(creationDate: Date): void {
        this.creationDate = creationDate;
    }

    public getCtaDate(): Date {
        return this.ctaDate;
    }

    public setCtaDate(ctaDate: Date): void {
        this.ctaDate = ctaDate;
    }

    public getCtaTime(): Date {
        return this.ctaTime;
    }

    public setCtaTime(ctaTime: Date): void {
        this.ctaTime = ctaTime;
    }

    public getCurrShipmentId(): number {
        return this.currShipmentId;
    }

    public setCurrShipmentId(currShipmentId: number): void {
        this.currShipmentId = currShipmentId;
    }

    public getCurrentLocation(): ShipmentAddressDataProxy {
        return this.currentLocation;
    }

    public setCurrentLocation(currentLocation: ShipmentAddressDataProxy): void {
        this.currentLocation = currentLocation;
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

    public getCustomerVersion(): number {
        return this.customerVersion;
    }

    public setCustomerVersion(customerVersion: number): void {
        this.customerVersion = customerVersion;
    }

    public getCustomerVersionDate(): Date {
        return this.customerVersionDate;
    }

    public setCustomerVersionDate(customerVersionDate: Date): void {
        this.customerVersionDate = customerVersionDate;
    }

    public getCustomerVersionModDate(): Date {
        return this.customerVersionModDate;
    }

    public setCustomerVersionModDate(customerVersionModDate: Date): void {
        this.customerVersionModDate = customerVersionModDate;
    }

    public getCustomsCargoCurrency(): String {
        return this.customsCargoCurrency;
    }

    public setCustomsCargoCurrency(customsCargoCurrency: String): void {
        this.customsCargoCurrency = customsCargoCurrency;
    }

    public getCustomsCargoValue(): number {
        return this.customsCargoValue;
    }

    public setCustomsCargoValue(customsCargoValue: number): void {
        this.customsCargoValue = customsCargoValue;
    }

    public isCustomsCertificateOfOrigin(): Boolean {
        return this.customsCertificateOfOrigin;
    }

    public setCustomsCertificateOfOrigin(customsCertificateOfOrigin: Boolean): void {
        this.customsCertificateOfOrigin = customsCertificateOfOrigin;
    }

    public isCustomsEUR1(): Boolean {
        return this.customsEUR1;
    }

    public setCustomsEUR1(customsEUR1: Boolean): void {
        this.customsEUR1 = customsEUR1;
    }

    public isCustomsNoPreference(): Boolean {
        return this.customsNoPreference;
    }

    public setCustomsNoPreference(customsNoPreference: Boolean): void {
        this.customsNoPreference = customsNoPreference;
    }

    public getCustomsRemarks(): String {
        return this.customsRemarks;
    }

    public setCustomsRemarks(customsRemarks: String): void {
        this.customsRemarks = customsRemarks;
    }

    public getCustomsValue(): number {
        return this.customsValue;
    }

    public setCustomsValue(customsValue: number): void {
        this.customsValue = customsValue;
    }

    public getCustomsValueCurrency(): String {
        return this.customsValueCurrency;
    }

    public setCustomsValueCurrency(customsValueCurrency: String): void {
        this.customsValueCurrency = customsValueCurrency;
    }

    public isDangerGoodsDeclaration(): Boolean {
        return this.dangerGoodsDeclaration;
    }

    public setDangerGoodsDeclaration(dangerGoodsDeclaration: Boolean): void {
        this.dangerGoodsDeclaration = dangerGoodsDeclaration;
    }

    public getDangerGoodsLabel(): number {
        return this.dangerGoodsLabel;
    }

    public setDangerGoodsLabel(dangerGoodsLabel: number): void {
        this.dangerGoodsLabel = dangerGoodsLabel;
    }

    public getDangergoodsLanguage(): String {
        return this.dangergoodsLanguage;
    }

    public setDangergoodsLanguage(dangergoodsLanguage: String): void {
        this.dangergoodsLanguage = dangergoodsLanguage;
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

    public getDeclaredPositionsQuantity(): number {
        return this.declaredPositionsQuantity;
    }

    public setDeclaredPositionsQuantity(declaredPositionsQuantity: number): void {
        this.declaredPositionsQuantity = declaredPositionsQuantity;
    }

    public getDeclaredPositionsVolume(): number {
        return this.declaredPositionsVolume;
    }

    public setDeclaredPositionsVolume(declaredPositionsVolume: number): void {
        this.declaredPositionsVolume = declaredPositionsVolume;
    }

    public getDeclaredPositionsWeight(): number {
        return this.declaredPositionsWeight;
    }

    public setDeclaredPositionsWeight(declaredPositionsWeight: number): void {
        this.declaredPositionsWeight = declaredPositionsWeight;
    }

    public getDelay(): number {
        return this.delay;
    }

    public setDelay(delay: number): void {
        this.delay = delay;
    }

    public getDelayReason(): String {
        return this.delayReason;
    }

    public setDelayReason(delayReason: String): void {
        this.delayReason = delayReason;
    }

    public getDelayStatusFlag(): number {
        return this.delayStatusFlag;
    }

    public setDelayStatusFlag(delayStatusFlag: number): void {
        this.delayStatusFlag = delayStatusFlag;
    }

    public getDeliveredBy(): String {
        return this.deliveredBy;
    }

    public setDeliveredBy(deliveredBy: String): void {
        this.deliveredBy = deliveredBy;
    }

    public getDeliveryInstruction(): String {
        return this.deliveryInstruction;
    }

    public setDeliveryInstruction(deliveryInstruction: String): void {
        this.deliveryInstruction = deliveryInstruction;
    }

    public getDepartureSeaport(): String {
        return this.departureSeaport;
    }

    public setDepartureSeaport(departureSeaport: String): void {
        this.departureSeaport = departureSeaport;
    }

    public getDestinationAirport(): String {
        return this.destinationAirport;
    }

    public setDestinationAirport(destinationAirport: String): void {
        this.destinationAirport = destinationAirport;
    }

    public getDetachedReason(): String {
        return this.detachedReason;
    }

    public setDetachedReason(detachedReason: String): void {
        this.detachedReason = detachedReason;
    }

    public getDetachedStatus(): number {
        return this.detachedStatus;
    }

    public setDetachedStatus(detachedStatus: number): void {
        this.detachedStatus = detachedStatus;
    }

    public isDirectLoading(): Boolean {
        return this.directLoading;
    }

    public setDirectLoading(directLoading: Boolean): void {
        this.directLoading = directLoading;
    }

    public getDistributionCode(): String {
        return this.distributionCode;
    }

    public setDistributionCode(distributionCode: String): void {
        this.distributionCode = distributionCode;
    }

    public getDocuments(): String {
        return this.documents;
    }

    public setDocuments(documents: String): void {
        this.documents = documents;
    }

    public getDraftName(): String {
        return this.draftName;
    }

    public setDraftName(draftName: String): void {
        this.draftName = draftName;
    }

    public getEtaDate(): Date {
        return this.etaDate;
    }

    public setEtaDate(etaDate: Date): void {
        this.etaDate = etaDate;
    }

    public isExternalDocExists(): Boolean {
        return this.externalDocExists;
    }

    public setExternalDocExists(externalDocExists: Boolean): void {
        this.externalDocExists = externalDocExists;
    }

    public isFinalDestReachedFlag(): Boolean {
        return this.finalDestReachedFlag;
    }

    public setFinalDestReachedFlag(finalDestReachedFlag: Boolean): void {
        this.finalDestReachedFlag = finalDestReachedFlag;
    }

    public getFlightNr(): String {
        return this.flightNr;
    }

    public setFlightNr(flightNr: String): void {
        this.flightNr = flightNr;
    }

    public getFreeText1(): String {
        return this.freeText1;
    }

    public setFreeText1(freeText1: String): void {
        this.freeText1 = freeText1;
    }

    public getFreeText2(): String {
        return this.freeText2;
    }

    public setFreeText2(freeText2: String): void {
        this.freeText2 = freeText2;
    }

    public getFreeText3(): String {
        return this.freeText3;
    }

    public setFreeText3(freeText3: String): void {
        this.freeText3 = freeText3;
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

    public getFreeTextDictionary21(): String {
        return this.freeTextDictionary21;
    }

    public setFreeTextDictionary21(freeTextDictionary21: String): void {
        this.freeTextDictionary21 = freeTextDictionary21;
    }

    public getFreeTextDictionary22(): String {
        return this.freeTextDictionary22;
    }

    public setFreeTextDictionary22(freeTextDictionary22: String): void {
        this.freeTextDictionary22 = freeTextDictionary22;
    }

    public getFreeTextDictionary23(): String {
        return this.freeTextDictionary23;
    }

    public setFreeTextDictionary23(freeTextDictionary23: String): void {
        this.freeTextDictionary23 = freeTextDictionary23;
    }

    public getFreeTextDictionary24(): String {
        return this.freeTextDictionary24;
    }

    public setFreeTextDictionary24(freeTextDictionary24: String): void {
        this.freeTextDictionary24 = freeTextDictionary24;
    }

    public getFreeTextDictionary25(): String {
        return this.freeTextDictionary25;
    }

    public setFreeTextDictionary25(freeTextDictionary25: String): void {
        this.freeTextDictionary25 = freeTextDictionary25;
    }

    public getFreeTextDictionary26(): String {
        return this.freeTextDictionary26;
    }

    public setFreeTextDictionary26(freeTextDictionary26: String): void {
        this.freeTextDictionary26 = freeTextDictionary26;
    }

    public getFreeTextDictionary27(): String {
        return this.freeTextDictionary27;
    }

    public setFreeTextDictionary27(freeTextDictionary27: String): void {
        this.freeTextDictionary27 = freeTextDictionary27;
    }

    public getFreeTextDictionary28(): String {
        return this.freeTextDictionary28;
    }

    public setFreeTextDictionary28(freeTextDictionary28: String): void {
        this.freeTextDictionary28 = freeTextDictionary28;
    }

    public getFreeTextDictionary29(): String {
        return this.freeTextDictionary29;
    }

    public setFreeTextDictionary29(freeTextDictionary29: String): void {
        this.freeTextDictionary29 = freeTextDictionary29;
    }

    public getFreeTextDictionary3(): String {
        return this.freeTextDictionary3;
    }

    public setFreeTextDictionary3(freeTextDictionary3: String): void {
        this.freeTextDictionary3 = freeTextDictionary3;
    }

    public getFreeTextDictionary30(): String {
        return this.freeTextDictionary30;
    }

    public setFreeTextDictionary30(freeTextDictionary30: String): void {
        this.freeTextDictionary30 = freeTextDictionary30;
    }

    public getFreeTextDictionary31(): String {
        return this.freeTextDictionary31;
    }

    public setFreeTextDictionary31(freeTextDictionary31: String): void {
        this.freeTextDictionary31 = freeTextDictionary31;
    }

    public getFreeTextDictionary32(): String {
        return this.freeTextDictionary32;
    }

    public setFreeTextDictionary32(freeTextDictionary32: String): void {
        this.freeTextDictionary32 = freeTextDictionary32;
    }

    public getFreeTextDictionary33(): String {
        return this.freeTextDictionary33;
    }

    public setFreeTextDictionary33(freeTextDictionary33: String): void {
        this.freeTextDictionary33 = freeTextDictionary33;
    }

    public getFreeTextDictionary34(): String {
        return this.freeTextDictionary34;
    }

    public setFreeTextDictionary34(freeTextDictionary34: String): void {
        this.freeTextDictionary34 = freeTextDictionary34;
    }

    public getFreeTextDictionary35(): String {
        return this.freeTextDictionary35;
    }

    public setFreeTextDictionary35(freeTextDictionary35: String): void {
        this.freeTextDictionary35 = freeTextDictionary35;
    }

    public getFreeTextDictionary36(): String {
        return this.freeTextDictionary36;
    }

    public setFreeTextDictionary36(freeTextDictionary36: String): void {
        this.freeTextDictionary36 = freeTextDictionary36;
    }

    public getFreeTextDictionary37(): String {
        return this.freeTextDictionary37;
    }

    public setFreeTextDictionary37(freeTextDictionary37: String): void {
        this.freeTextDictionary37 = freeTextDictionary37;
    }

    public getFreeTextDictionary38(): String {
        return this.freeTextDictionary38;
    }

    public setFreeTextDictionary38(freeTextDictionary38: String): void {
        this.freeTextDictionary38 = freeTextDictionary38;
    }

    public getFreeTextDictionary39(): String {
        return this.freeTextDictionary39;
    }

    public setFreeTextDictionary39(freeTextDictionary39: String): void {
        this.freeTextDictionary39 = freeTextDictionary39;
    }

    public getFreeTextDictionary4(): String {
        return this.freeTextDictionary4;
    }

    public setFreeTextDictionary4(freeTextDictionary4: String): void {
        this.freeTextDictionary4 = freeTextDictionary4;
    }

    public getFreeTextDictionary40(): String {
        return this.freeTextDictionary40;
    }

    public setFreeTextDictionary40(freeTextDictionary40: String): void {
        this.freeTextDictionary40 = freeTextDictionary40;
    }

    public getFreeTextDictionary41(): String {
        return this.freeTextDictionary41;
    }

    public setFreeTextDictionary41(freeTextDictionary41: String): void {
        this.freeTextDictionary41 = freeTextDictionary41;
    }

    public getFreeTextDictionary42(): String {
        return this.freeTextDictionary42;
    }

    public setFreeTextDictionary42(freeTextDictionary42: String): void {
        this.freeTextDictionary42 = freeTextDictionary42;
    }

    public getFreeTextDictionary43(): String {
        return this.freeTextDictionary43;
    }

    public setFreeTextDictionary43(freeTextDictionary43: String): void {
        this.freeTextDictionary43 = freeTextDictionary43;
    }

    public getFreeTextDictionary44(): String {
        return this.freeTextDictionary44;
    }

    public setFreeTextDictionary44(freeTextDictionary44: String): void {
        this.freeTextDictionary44 = freeTextDictionary44;
    }

    public getFreeTextDictionary45(): String {
        return this.freeTextDictionary45;
    }

    public setFreeTextDictionary45(freeTextDictionary45: String): void {
        this.freeTextDictionary45 = freeTextDictionary45;
    }

    public getFreeTextDictionary46(): String {
        return this.freeTextDictionary46;
    }

    public setFreeTextDictionary46(freeTextDictionary46: String): void {
        this.freeTextDictionary46 = freeTextDictionary46;
    }

    public getFreeTextDictionary47(): String {
        return this.freeTextDictionary47;
    }

    public setFreeTextDictionary47(freeTextDictionary47: String): void {
        this.freeTextDictionary47 = freeTextDictionary47;
    }

    public getFreeTextDictionary48(): String {
        return this.freeTextDictionary48;
    }

    public setFreeTextDictionary48(freeTextDictionary48: String): void {
        this.freeTextDictionary48 = freeTextDictionary48;
    }

    public getFreeTextDictionary49(): String {
        return this.freeTextDictionary49;
    }

    public setFreeTextDictionary49(freeTextDictionary49: String): void {
        this.freeTextDictionary49 = freeTextDictionary49;
    }

    public getFreeTextDictionary5(): String {
        return this.freeTextDictionary5;
    }

    public setFreeTextDictionary5(freeTextDictionary5: String): void {
        this.freeTextDictionary5 = freeTextDictionary5;
    }

    public getFreeTextDictionary50(): String {
        return this.freeTextDictionary50;
    }

    public setFreeTextDictionary50(freeTextDictionary50: String): void {
        this.freeTextDictionary50 = freeTextDictionary50;
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

    public getFreeTextLanguage(): String {
        return this.freeTextLanguage;
    }

    public setFreeTextLanguage(freeTextLanguage: String): void {
        this.freeTextLanguage = freeTextLanguage;
    }

    public getFreight(): String {
        return this.freight;
    }

    public setFreight(freight: String): void {
        this.freight = freight;
    }

    public getGoodCategory(): String {
        return this.goodCategory;
    }

    public setGoodCategory(goodCategory: String): void {
        this.goodCategory = goodCategory;
    }

    public isGoodsAreDocuments(): Boolean {
        return this.goodsAreDocuments;
    }

    public setGoodsAreDocuments(goodsAreDocuments: Boolean): void {
        this.goodsAreDocuments = goodsAreDocuments;
    }

    public getGoodsDescription(): String {
        return this.goodsDescription;
    }

    public setGoodsDescription(goodsDescription: String): void {
        this.goodsDescription = goodsDescription;
    }

    public getHawbNr(): String {
        return this.hawbNr;
    }

    public setHawbNr(hawbNr: String): void {
        this.hawbNr = hawbNr;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getInsurance(): number {
        return this.insurance;
    }

    public setInsurance(insurance: number): void {
        this.insurance = insurance;
    }

    public getInsuranceCurrency(): String {
        return this.insuranceCurrency;
    }

    public setInsuranceCurrency(insuranceCurrency: String): void {
        this.insuranceCurrency = insuranceCurrency;
    }

    public getIntNumber01(): number {
        return this.intNumber01;
    }

    public setIntNumber01(intNumber01: number): void {
        this.intNumber01 = intNumber01;
    }

    public getIntNumber02(): number {
        return this.intNumber02;
    }

    public setIntNumber02(intNumber02: number): void {
        this.intNumber02 = intNumber02;
    }

    public getIntNumber03(): number {
        return this.intNumber03;
    }

    public setIntNumber03(intNumber03: number): void {
        this.intNumber03 = intNumber03;
    }

    public getIntNumber04(): number {
        return this.intNumber04;
    }

    public setIntNumber04(intNumber04: number): void {
        this.intNumber04 = intNumber04;
    }

    public getIntNumber05(): number {
        return this.intNumber05;
    }

    public setIntNumber05(intNumber05: number): void {
        this.intNumber05 = intNumber05;
    }

    public getIntNumber06(): number {
        return this.intNumber06;
    }

    public setIntNumber06(intNumber06: number): void {
        this.intNumber06 = intNumber06;
    }

    public getIntNumber07(): number {
        return this.intNumber07;
    }

    public setIntNumber07(intNumber07: number): void {
        this.intNumber07 = intNumber07;
    }

    public getIntNumber08(): number {
        return this.intNumber08;
    }

    public setIntNumber08(intNumber08: number): void {
        this.intNumber08 = intNumber08;
    }

    public getIntNumber09(): number {
        return this.intNumber09;
    }

    public setIntNumber09(intNumber09: number): void {
        this.intNumber09 = intNumber09;
    }

    public getIntNumber10(): number {
        return this.intNumber10;
    }

    public setIntNumber10(intNumber10: number): void {
        this.intNumber10 = intNumber10;
    }

    public getLabelForm(): String {
        return this.labelForm;
    }

    public setLabelForm(labelForm: String): void {
        this.labelForm = labelForm;
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

    public getLcNr(): String {
        return this.lcNr;
    }

    public setLcNr(lcNr: String): void {
        this.lcNr = lcNr;
    }

    public getLinkParameter(): String {
        return this.linkParameter;
    }

    public setLinkParameter(linkParameter: String): void {
        this.linkParameter = linkParameter;
    }

    public getLoadingListId(): number {
        return this.loadingListId;
    }

    public setLoadingListId(loadingListId: number): void {
        this.loadingListId = loadingListId;
    }

    public getLoadingType(): String {
        return this.loadingType;
    }

    public setLoadingType(loadingType: String): void {
        this.loadingType = loadingType;
    }

    public getLocationStatus(): number {
        return this.locationStatus;
    }

    public setLocationStatus(locationStatus: number): void {
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

    public getLongReference11(): String {
        return this.longReference11;
    }

    public setLongReference11(longReference11: String): void {
        this.longReference11 = longReference11;
    }

    public getLongReference12(): String {
        return this.longReference12;
    }

    public setLongReference12(longReference12: String): void {
        this.longReference12 = longReference12;
    }

    public getLongReference13(): String {
        return this.longReference13;
    }

    public setLongReference13(longReference13: String): void {
        this.longReference13 = longReference13;
    }

    public getLongReference14(): String {
        return this.longReference14;
    }

    public setLongReference14(longReference14: String): void {
        this.longReference14 = longReference14;
    }

    public getLongReference15(): String {
        return this.longReference15;
    }

    public setLongReference15(longReference15: String): void {
        this.longReference15 = longReference15;
    }

    public getLongReference16(): String {
        return this.longReference16;
    }

    public setLongReference16(longReference16: String): void {
        this.longReference16 = longReference16;
    }

    public getLongReference17(): String {
        return this.longReference17;
    }

    public setLongReference17(longReference17: String): void {
        this.longReference17 = longReference17;
    }

    public getLongReference18(): String {
        return this.longReference18;
    }

    public setLongReference18(longReference18: String): void {
        this.longReference18 = longReference18;
    }

    public getLongReference19(): String {
        return this.longReference19;
    }

    public setLongReference19(longReference19: String): void {
        this.longReference19 = longReference19;
    }

    public getLongReference20(): String {
        return this.longReference20;
    }

    public setLongReference20(longReference20: String): void {
        this.longReference20 = longReference20;
    }

    public getLongReference21(): String {
        return this.longReference21;
    }

    public setLongReference21(longReference21: String): void {
        this.longReference21 = longReference21;
    }

    public getLongReference22(): String {
        return this.longReference22;
    }

    public setLongReference22(longReference22: String): void {
        this.longReference22 = longReference22;
    }

    public getLongReference23(): String {
        return this.longReference23;
    }

    public setLongReference23(longReference23: String): void {
        this.longReference23 = longReference23;
    }

    public getLongReference24(): String {
        return this.longReference24;
    }

    public setLongReference24(longReference24: String): void {
        this.longReference24 = longReference24;
    }

    public getLongReference25(): String {
        return this.longReference25;
    }

    public setLongReference25(longReference25: String): void {
        this.longReference25 = longReference25;
    }

    public getMawbNr(): String {
        return this.mawbNr;
    }

    public setMawbNr(mawbNr: String): void {
        this.mawbNr = mawbNr;
    }

    public getMissingTschedReason(): String {
        return this.missingTschedReason;
    }

    public setMissingTschedReason(missingTschedReason: String): void {
        this.missingTschedReason = missingTschedReason;
    }

    public getMissingTschedStatus(): number {
        return this.missingTschedStatus;
    }

    public setMissingTschedStatus(missingTschedStatus: number): void {
        this.missingTschedStatus = missingTschedStatus;
    }

    public getMonitorState3(): number {
        return this.monitorState3;
    }

    public setMonitorState3(monitorState3: number): void {
        this.monitorState3 = monitorState3;
    }

    public getMonitorState4(): number {
        return this.monitorState4;
    }

    public setMonitorState4(monitorState4: number): void {
        this.monitorState4 = monitorState4;
    }

    public getNahverkehrsTourNr(): String {
        return this.nahverkehrsTourNr;
    }

    public setNahverkehrsTourNr(nahverkehrsTourNr: String): void {
        this.nahverkehrsTourNr = nahverkehrsTourNr;
    }

    public getNeutralAddress(): ShipmentAddressDataProxy {
        return this.neutralAddress;
    }

    public setNeutralAddress(neutralAddress: ShipmentAddressDataProxy): void {
        this.neutralAddress = neutralAddress;
    }

    public isNeutralize(): Boolean {
        return this.neutralize;
    }

    public setNeutralize(neutralize: Boolean): void {
        this.neutralize = neutralize;
    }

    public getNotifyAddress(): ShipmentAddressDataProxy {
        return this.notifyAddress;
    }

    public setNotifyAddress(notifyAddress: ShipmentAddressDataProxy): void {
        this.notifyAddress = notifyAddress;
    }

    public getNotifyAddress2(): ShipmentAddressDataProxy {
        return this.notifyAddress2;
    }

    public setNotifyAddress2(notifyAddress2: ShipmentAddressDataProxy): void {
        this.notifyAddress2 = notifyAddress2;
    }

    public getNptaDate(): Date {
        return this.nptaDate;
    }

    public setNptaDate(nptaDate: Date): void {
        this.nptaDate = nptaDate;
    }

    public getNptaTime(): Date {
        return this.nptaTime;
    }

    public setNptaTime(nptaTime: Date): void {
        this.nptaTime = nptaTime;
    }

    public getNumberOfLoadingPositions(): number {
        return this.numberOfLoadingPositions;
    }

    public setNumberOfLoadingPositions(numberOfLoadingPositions: number): void {
        this.numberOfLoadingPositions = numberOfLoadingPositions;
    }

    public getOnHold(): number {
        return this.onHold;
    }

    public setOnHold(onHold: number): void {
        this.onHold = onHold;
    }

    public getOptionalCollectionAddress(): ShipmentAddressDataProxy {
        return this.optionalCollectionAddress;
    }

    public setOptionalCollectionAddress(optionalCollectionAddress: ShipmentAddressDataProxy): void {
        this.optionalCollectionAddress = optionalCollectionAddress;
    }

    public getOptionalReceiverAddress(): ShipmentAddressDataProxy {
        return this.optionalReceiverAddress;
    }

    public setOptionalReceiverAddress(optionalReceiverAddress: ShipmentAddressDataProxy): void {
        this.optionalReceiverAddress = optionalReceiverAddress;
    }

    public getPackerAddress(): ShipmentAddressDataProxy {
        return this.packerAddress;
    }

    public setPackerAddress(packerAddress: ShipmentAddressDataProxy): void {
        this.packerAddress = packerAddress;
    }

    public getPaymentType(): String {
        return this.paymentType;
    }

    public setPaymentType(paymentType: String): void {
        this.paymentType = paymentType;
    }

    public getPositionsDimWeight(): number {
        return this.positionsDimWeight;
    }

    public setPositionsDimWeight(positionsDimWeight: number): void {
        this.positionsDimWeight = positionsDimWeight;
    }

    public getPositionsLiter(): number {
        return this.positionsLiter;
    }

    public setPositionsLiter(positionsLiter: number): void {
        this.positionsLiter = positionsLiter;
    }

    public getPositionsLoadingMeters(): number {
        return this.positionsLoadingMeters;
    }

    public setPositionsLoadingMeters(positionsLoadingMeters: number): void {
        this.positionsLoadingMeters = positionsLoadingMeters;
    }

    public getPositionsPayableLoadingMeters(): number {
        return this.positionsPayableLoadingMeters;
    }

    public setPositionsPayableLoadingMeters(positionsPayableLoadingMeters: number): void {
        this.positionsPayableLoadingMeters = positionsPayableLoadingMeters;
    }

    public getPositionsPayableLoadingMeters2(): number {
        return this.positionsPayableLoadingMeters2;
    }

    public setPositionsPayableLoadingMeters2(positionsPayableLoadingMeters2: number): void {
        this.positionsPayableLoadingMeters2 = positionsPayableLoadingMeters2;
    }

    public getPositionsQuantity(): number {
        return this.positionsQuantity;
    }

    public setPositionsQuantity(positionsQuantity: number): void {
        this.positionsQuantity = positionsQuantity;
    }

    public getPositionsVolume(): number {
        return this.positionsVolume;
    }

    public setPositionsVolume(positionsVolume: number): void {
        this.positionsVolume = positionsVolume;
    }

    public getPositionsWeight(): number {
        return this.positionsWeight;
    }

    public setPositionsWeight(positionsWeight: number): void {
        this.positionsWeight = positionsWeight;
    }

    public isPreferredDelivery(): Boolean {
        return this.preferredDelivery;
    }

    public setPreferredDelivery(preferredDelivery: Boolean): void {
        this.preferredDelivery = preferredDelivery;
    }

    public isPriority(): Boolean {
        return this.priority;
    }

    public setPriority(priority: Boolean): void {
        this.priority = priority;
    }

    public getProblemWithDeliveryReason(): String {
        return this.problemWithDeliveryReason;
    }

    public setProblemWithDeliveryReason(problemWithDeliveryReason: String): void {
        this.problemWithDeliveryReason = problemWithDeliveryReason;
    }

    public getProblemWithDeliveryStatus(): number {
        return this.problemWithDeliveryStatus;
    }

    public setProblemWithDeliveryStatus(problemWithDeliveryStatus: number): void {
        this.problemWithDeliveryStatus = problemWithDeliveryStatus;
    }

    public isPropagationDeactivated(): Boolean {
        return this.propagationDeactivated;
    }

    public setPropagationDeactivated(propagationDeactivated: Boolean): void {
        this.propagationDeactivated = propagationDeactivated;
    }

    public getRealNumber01(): number {
        return this.realNumber01;
    }

    public setRealNumber01(realNumber01: number): void {
        this.realNumber01 = realNumber01;
    }

    public getRealNumber02(): number {
        return this.realNumber02;
    }

    public setRealNumber02(realNumber02: number): void {
        this.realNumber02 = realNumber02;
    }

    public getRealNumber03(): number {
        return this.realNumber03;
    }

    public setRealNumber03(realNumber03: number): void {
        this.realNumber03 = realNumber03;
    }

    public getRealNumber04(): number {
        return this.realNumber04;
    }

    public setRealNumber04(realNumber04: number): void {
        this.realNumber04 = realNumber04;
    }

    public getRealNumber05(): number {
        return this.realNumber05;
    }

    public setRealNumber05(realNumber05: number): void {
        this.realNumber05 = realNumber05;
    }

    public getRealNumber06(): number {
        return this.realNumber06;
    }

    public setRealNumber06(realNumber06: number): void {
        this.realNumber06 = realNumber06;
    }

    public getRealNumber07(): number {
        return this.realNumber07;
    }

    public setRealNumber07(realNumber07: number): void {
        this.realNumber07 = realNumber07;
    }

    public getRealNumber08(): number {
        return this.realNumber08;
    }

    public setRealNumber08(realNumber08: number): void {
        this.realNumber08 = realNumber08;
    }

    public getRealNumber09(): number {
        return this.realNumber09;
    }

    public setRealNumber09(realNumber09: number): void {
        this.realNumber09 = realNumber09;
    }

    public getRealNumber10(): number {
        return this.realNumber10;
    }

    public setRealNumber10(realNumber10: number): void {
        this.realNumber10 = realNumber10;
    }

    public getReasonLast(): String {
        return this.reasonLast;
    }

    public setReasonLast(reasonLast: String): void {
        this.reasonLast = reasonLast;
    }

    public getReceiptDate(): Date {
        return this.receiptDate;
    }

    public setReceiptDate(receiptDate: Date): void {
        this.receiptDate = receiptDate;
    }

    public getReceiptDateTo(): Date {
        return this.receiptDateTo;
    }

    public setReceiptDateTo(receiptDateTo: Date): void {
        this.receiptDateTo = receiptDateTo;
    }

    public getReceiptSpecification(): number {
        return this.receiptSpecification;
    }

    public setReceiptSpecification(receiptSpecification: number): void {
        this.receiptSpecification = receiptSpecification;
    }

    public getReceiptTime(): Date {
        return this.receiptTime;
    }

    public setReceiptTime(receiptTime: Date): void {
        this.receiptTime = receiptTime;
    }

    public getReceiverAddress(): ShipmentAddressDataProxy {
        return this.receiverAddress;
    }

    public setReceiverAddress(receiverAddress: ShipmentAddressDataProxy): void {
        this.receiverAddress = receiverAddress;
    }

    public getReference1(): String {
        return this.reference1;
    }

    public setReference1(reference1: String): void {
        this.reference1 = reference1;
    }

    public getReference2(): String {
        return this.reference2;
    }

    public setReference2(reference2: String): void {
        this.reference2 = reference2;
    }

    public getReference2Dict(): String {
        return this.reference2Dict;
    }

    public setReference2Dict(reference2Dict: String): void {
        this.reference2Dict = reference2Dict;
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

    public getRemarks1(): String {
        return this.remarks1;
    }

    public setRemarks1(remarks1: String): void {
        this.remarks1 = remarks1;
    }

    public getRemarks2(): String {
        return this.remarks2;
    }

    public setRemarks2(remarks2: String): void {
        this.remarks2 = remarks2;
    }

    public getRemarks3(): String {
        return this.remarks3;
    }

    public setRemarks3(remarks3: String): void {
        this.remarks3 = remarks3;
    }

    public getRemarksDictionary1(): String {
        return this.remarksDictionary1;
    }

    public setRemarksDictionary1(remarksDictionary1: String): void {
        this.remarksDictionary1 = remarksDictionary1;
    }

    public getRemarksDictionary2(): String {
        return this.remarksDictionary2;
    }

    public setRemarksDictionary2(remarksDictionary2: String): void {
        this.remarksDictionary2 = remarksDictionary2;
    }

    public getRemarksDictionary3(): String {
        return this.remarksDictionary3;
    }

    public setRemarksDictionary3(remarksDictionary3: String): void {
        this.remarksDictionary3 = remarksDictionary3;
    }

    public getRequestedReceiptDate(): Date {
        return this.requestedReceiptDate;
    }

    public setRequestedReceiptDate(requestedReceiptDate: Date): void {
        this.requestedReceiptDate = requestedReceiptDate;
    }

    public getRequestedReceiptSpecification(): number {
        return this.requestedReceiptSpecification;
    }

    public setRequestedReceiptSpecification(requestedReceiptSpecification: number): void {
        this.requestedReceiptSpecification = requestedReceiptSpecification;
    }

    public getRequestedReceiptTime(): Date {
        return this.requestedReceiptTime;
    }

    public setRequestedReceiptTime(requestedReceiptTime: Date): void {
        this.requestedReceiptTime = requestedReceiptTime;
    }

    public getRequestedReceiptTimeTo(): Date {
        return this.requestedReceiptTimeTo;
    }

    public setRequestedReceiptTimeTo(requestedReceiptTimeTo: Date): void {
        this.requestedReceiptTimeTo = requestedReceiptTimeTo;
    }

    public getRequestedSupplyDate(): Date {
        return this.requestedSupplyDate;
    }

    public setRequestedSupplyDate(requestedSupplyDate: Date): void {
        this.requestedSupplyDate = requestedSupplyDate;
    }

    public getRequestedSupplySpecification(): number {
        return this.requestedSupplySpecification;
    }

    public setRequestedSupplySpecification(requestedSupplySpecification: number): void {
        this.requestedSupplySpecification = requestedSupplySpecification;
    }

    public getRequestedSupplyTime(): Date {
        return this.requestedSupplyTime;
    }

    public setRequestedSupplyTime(requestedSupplyTime: Date): void {
        this.requestedSupplyTime = requestedSupplyTime;
    }

    public getRequestedSupplyTimeTo(): Date {
        return this.requestedSupplyTimeTo;
    }

    public setRequestedSupplyTimeTo(requestedSupplyTimeTo: Date): void {
        this.requestedSupplyTimeTo = requestedSupplyTimeTo;
    }

    public isReturnDocuments(): Boolean {
        return this.returnDocuments;
    }

    public setReturnDocuments(returnDocuments: Boolean): void {
        this.returnDocuments = returnDocuments;
    }

    public getRoute(): String {
        return this.route;
    }

    public setRoute(route: String): void {
        this.route = route;
    }

    public getRoutingConstraintName(): String {
        return this.routingConstraintName;
    }

    public setRoutingConstraintName(routingConstraintName: String): void {
        this.routingConstraintName = routingConstraintName;
    }

    public isSaturdayDelivery(): Boolean {
        return this.saturdayDelivery;
    }

    public setSaturdayDelivery(saturdayDelivery: Boolean): void {
        this.saturdayDelivery = saturdayDelivery;
    }

    public isSaturdayPickup(): Boolean {
        return this.saturdayPickup;
    }

    public setSaturdayPickup(saturdayPickup: Boolean): void {
        this.saturdayPickup = saturdayPickup;
    }

    public isSelfReceipt(): Boolean {
        return this.selfReceipt;
    }

    public setSelfReceipt(selfReceipt: Boolean): void {
        this.selfReceipt = selfReceipt;
    }

    public isSelfWithdraw(): Boolean {
        return this.selfWithdraw;
    }

    public setSelfWithdraw(selfWithdraw: Boolean): void {
        this.selfWithdraw = selfWithdraw;
    }

    public getSendDate(): Date {
        return this.sendDate;
    }

    public setSendDate(sendDate: Date): void {
        this.sendDate = sendDate;
    }

    public getSenderAddress(): ShipmentAddressDataProxy {
        return this.senderAddress;
    }

    public setSenderAddress(senderAddress: ShipmentAddressDataProxy): void {
        this.senderAddress = senderAddress;
    }

    public getSenderEmail(): String {
        return this.senderEmail;
    }

    public setSenderEmail(senderEmail: String): void {
        this.senderEmail = senderEmail;
    }

    public getSenderFax(): String {
        return this.senderFax;
    }

    public setSenderFax(senderFax: String): void {
        this.senderFax = senderFax;
    }

    public getSenderName(): String {
        return this.senderName;
    }

    public setSenderName(senderName: String): void {
        this.senderName = senderName;
    }

    public getSenderPhoneNr(): String {
        return this.senderPhoneNr;
    }

    public setSenderPhoneNr(senderPhoneNr: String): void {
        this.senderPhoneNr = senderPhoneNr;
    }

    public getServerName(): String {
        return this.serverName;
    }

    public setServerName(serverName: String): void {
        this.serverName = serverName;
    }

    public getService(): String {
        return this.service;
    }

    public setService(service: String): void {
        this.service = service;
    }

    public getShippingLine(): ShipmentAddressDataProxy {
        return this.shippingLine;
    }

    public setShippingLine(shippingLine: ShipmentAddressDataProxy): void {
        this.shippingLine = shippingLine;
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

    public getShortReference11(): String {
        return this.shortReference11;
    }

    public setShortReference11(shortReference11: String): void {
        this.shortReference11 = shortReference11;
    }

    public getShortReference12(): String {
        return this.shortReference12;
    }

    public setShortReference12(shortReference12: String): void {
        this.shortReference12 = shortReference12;
    }

    public getShortReference13(): String {
        return this.shortReference13;
    }

    public setShortReference13(shortReference13: String): void {
        this.shortReference13 = shortReference13;
    }

    public getShortReference14(): String {
        return this.shortReference14;
    }

    public setShortReference14(shortReference14: String): void {
        this.shortReference14 = shortReference14;
    }

    public getShortReference15(): String {
        return this.shortReference15;
    }

    public setShortReference15(shortReference15: String): void {
        this.shortReference15 = shortReference15;
    }

    public getShortReference16(): String {
        return this.shortReference16;
    }

    public setShortReference16(shortReference16: String): void {
        this.shortReference16 = shortReference16;
    }

    public getShortReference17(): String {
        return this.shortReference17;
    }

    public setShortReference17(shortReference17: String): void {
        this.shortReference17 = shortReference17;
    }

    public getShortReference18(): String {
        return this.shortReference18;
    }

    public setShortReference18(shortReference18: String): void {
        this.shortReference18 = shortReference18;
    }

    public getShortReference19(): String {
        return this.shortReference19;
    }

    public setShortReference19(shortReference19: String): void {
        this.shortReference19 = shortReference19;
    }

    public getShortReference20(): String {
        return this.shortReference20;
    }

    public setShortReference20(shortReference20: String): void {
        this.shortReference20 = shortReference20;
    }

    public getShortReference21(): String {
        return this.shortReference21;
    }

    public setShortReference21(shortReference21: String): void {
        this.shortReference21 = shortReference21;
    }

    public getShortReference22(): String {
        return this.shortReference22;
    }

    public setShortReference22(shortReference22: String): void {
        this.shortReference22 = shortReference22;
    }

    public getShortReference23(): String {
        return this.shortReference23;
    }

    public setShortReference23(shortReference23: String): void {
        this.shortReference23 = shortReference23;
    }

    public getShortReference24(): String {
        return this.shortReference24;
    }

    public setShortReference24(shortReference24: String): void {
        this.shortReference24 = shortReference24;
    }

    public getShortReference25(): String {
        return this.shortReference25;
    }

    public setShortReference25(shortReference25: String): void {
        this.shortReference25 = shortReference25;
    }

    public isSlvs(): Boolean {
        return this.slvs;
    }

    public setSlvs(slvs: Boolean): void {
        this.slvs = slvs;
    }

    public getSolutionId(): number {
        return this.solutionId;
    }

    public setSolutionId(solutionId: number): void {
        this.solutionId = solutionId;
    }

    public getSpedShipmentId(): String {
        return this.spedShipmentId;
    }

    public setSpedShipmentId(spedShipmentId: String): void {
        this.spedShipmentId = spedShipmentId;
    }

    public isStackable(): Boolean {
        return this.stackable;
    }

    public setStackable(stackable: Boolean): void {
        this.stackable = stackable;
    }

    public getState(): number {
        return this.state;
    }

    public setState(state: number): void {
        this.state = state;
    }

    public getState3(): number {
        return this.state3;
    }

    public setState3(state3: number): void {
        this.state3 = state3;
    }

    public getState4(): number {
        return this.state4;
    }

    public setState4(state4: number): void {
        this.state4 = state4;
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

    public getStoppageTime(): number {
        return this.stoppageTime;
    }

    public setStoppageTime(stoppageTime: number): void {
        this.stoppageTime = stoppageTime;
    }

    public getSupplierNr(): String {
        return this.supplierNr;
    }

    public setSupplierNr(supplierNr: String): void {
        this.supplierNr = supplierNr;
    }

    public getSupplyDate(): Date {
        return this.supplyDate;
    }

    public setSupplyDate(supplyDate: Date): void {
        this.supplyDate = supplyDate;
    }

    public getSupplyDateTo(): Date {
        return this.supplyDateTo;
    }

    public setSupplyDateTo(supplyDateTo: Date): void {
        this.supplyDateTo = supplyDateTo;
    }

    public getSupplySpecification(): number {
        return this.supplySpecification;
    }

    public setSupplySpecification(supplySpecification: number): void {
        this.supplySpecification = supplySpecification;
    }

    public getSupplyTime(): Date {
        return this.supplyTime;
    }

    public setSupplyTime(supplyTime: Date): void {
        this.supplyTime = supplyTime;
    }

    public getSystemCreateDate(): Date {
        return this.systemCreateDate;
    }

    public setSystemCreateDate(systemCreateDate: Date): void {
        this.systemCreateDate = systemCreateDate;
    }

    public getSystemLastModificationDate(): Date {
        return this.systemLastModificationDate;
    }

    public setSystemLastModificationDate(systemLastModificationDate: Date): void {
        this.systemLastModificationDate = systemLastModificationDate;
    }

    public getTemplateType(): number {
        return this.templateType;
    }

    public setTemplateType(templateType: number): void {
        this.templateType = templateType;
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

    public getToTheDebitOf(): number {
        return this.toTheDebitOf;
    }

    public setToTheDebitOf(toTheDebitOf: number): void {
        this.toTheDebitOf = toTheDebitOf;
    }

    public getToleranceLevel1(): number {
        return this.toleranceLevel1;
    }

    public setToleranceLevel1(toleranceLevel1: number): void {
        this.toleranceLevel1 = toleranceLevel1;
    }

    public getToleranceLevel2(): number {
        return this.toleranceLevel2;
    }

    public setToleranceLevel2(toleranceLevel2: number): void {
        this.toleranceLevel2 = toleranceLevel2;
    }

    public getToleranceLevel3(): number {
        return this.toleranceLevel3;
    }

    public setToleranceLevel3(toleranceLevel3: number): void {
        this.toleranceLevel3 = toleranceLevel3;
    }

    public getTourNrSequence(): number {
        return this.tourNrSequence;
    }

    public setTourNrSequence(tourNrSequence: number): void {
        this.tourNrSequence = tourNrSequence;
    }

    public getTransportAddress(): ShipmentAddressDataProxy {
        return this.transportAddress;
    }

    public setTransportAddress(transportAddress: ShipmentAddressDataProxy): void {
        this.transportAddress = transportAddress;
    }

    public isTransportInsurance(): Boolean {
        return this.transportInsurance;
    }

    public setTransportInsurance(transportInsurance: Boolean): void {
        this.transportInsurance = transportInsurance;
    }

    public getTransportStage(): number {
        return this.transportStage;
    }

    public setTransportStage(transportStage: number): void {
        this.transportStage = transportStage;
    }

    public getTransportState(): number {
        return this.transportState;
    }

    public setTransportState(transportState: number): void {
        this.transportState = transportState;
    }

    public getTransportVehicle(): number {
        return this.transportVehicle;
    }

    public setTransportVehicle(transportVehicle: number): void {
        this.transportVehicle = transportVehicle;
    }

    public getType(): number {
        return this.type;
    }

    public setType(type: number): void {
        this.type = type;
    }

    public getTypeOfReference(): String {
        return this.typeOfReference;
    }

    public setTypeOfReference(typeOfReference: String): void {
        this.typeOfReference = typeOfReference;
    }

    public getTypeofDocument(): number {
        return this.typeofDocument;
    }

    public setTypeofDocument(typeofDocument: number): void {
        this.typeofDocument = typeofDocument;
    }

    public getUpsAccount(): String {
        return this.upsAccount;
    }

    public setUpsAccount(upsAccount: String): void {
        this.upsAccount = upsAccount;
    }

    public getUpsBilling(): String {
        return this.upsBilling;
    }

    public setUpsBilling(upsBilling: String): void {
        this.upsBilling = upsBilling;
    }

    public getUpsCOD(): String {
        return this.upsCOD;
    }

    public setUpsCOD(upsCOD: String): void {
        this.upsCOD = upsCOD;
    }

    public getUpsDocType(): String {
        return this.upsDocType;
    }

    public setUpsDocType(upsDocType: String): void {
        this.upsDocType = upsDocType;
    }

    public getUpsPostalCode(): String {
        return this.upsPostalCode;
    }

    public setUpsPostalCode(upsPostalCode: String): void {
        this.upsPostalCode = upsPostalCode;
    }

    public isValid(): Boolean {
        return this.valid;
    }

    public setValid(valid: Boolean): void {
        this.valid = valid;
    }

    public getVesselDepartureDate(): Date {
        return this.vesselDepartureDate;
    }

    public setVesselDepartureDate(vesselDepartureDate: Date): void {
        this.vesselDepartureDate = vesselDepartureDate;
    }

    public getVesselName(): String {
        return this.vesselName;
    }

    public setVesselName(vesselName: String): void {
        this.vesselName = vesselName;
    }

    public getViewed(): number {
        return this.viewed;
    }

    public setViewed(viewed: number): void {
        this.viewed = viewed;
    }

    public getVoyageNr(): String {
        return this.voyageNr;
    }

    public setVoyageNr(voyageNr: String): void {
        this.voyageNr = voyageNr;
    }

    public isWholeValid(): Boolean {
        return this.wholeValid;
    }

    public setWholeValid(wholeValid: Boolean): void {
        this.wholeValid = wholeValid;
    }

    public getWorth(): number {
        return this.worth;
    }

    public setWorth(worth: number): void {
        this.worth = worth;
    }

    public getWorthCurrency(): String {
        return this.worthCurrency;
    }

    public setWorthCurrency(worthCurrency: String): void {
        this.worthCurrency = worthCurrency;
    }

    public isZoll(): Boolean {
        return this.zoll;
    }

    public setZoll(zoll: Boolean): void {
        this.zoll = zoll;
    }

}