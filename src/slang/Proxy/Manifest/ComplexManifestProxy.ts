import { MFAddressDataProxy } from './MFAddressDataProxy';
import { CompanyDataProxy } from '../Company/CompanyDataProxy';
import { MFDocumentDataProxy } from './MFDocumentDataProxy';
import { CompanyDataListProxy } from '../Company/CompanyDataListProxy';
import { LongListProxy } from '../LongListProxy';
import { BaseProxyObject } from '../Common/BaseProxyObject';
import { GeneralSQLRow } from '../../SQL Api/GeneralSQLRow';

export class ComplexManifestProxy extends BaseProxyObject {
  constructor(dbRow: GeneralSQLRow = new GeneralSQLRow({})) {
    super(dbRow);
    this.mapSQLResultRowToProxy(this, __dirname, 'ComplexManifestProxy');
  }

  private additionalAddress: MFAddressDataProxy = null;
  private carrierAddress: MFAddressDataProxy = null;
  private carrierCompany: CompanyDataProxy = null;
  private container: unknown = null;
  private creatorAddress: MFAddressDataProxy = null;
  private creatorCompany: CompanyDataProxy = null;
  private currentLocationAddress: MFAddressDataProxy = null;
  private deliveryAddress: MFAddressDataProxy = null;
  private details: MFDocumentDataProxy = new MFDocumentDataProxy(this.sourceDbRow);
  private dispatcherAddress: MFAddressDataProxy = null;
  private dispatcherCompany: CompanyDataProxy = null;
  private ftxFieldsList: unknown = null;
  private modifierAddress: MFAddressDataProxy = null;
  private modifierCompany: CompanyDataProxy = null;
  private observerCompanies: CompanyDataListProxy = null;
  private openPartnerAddresses: unknown = null;
  private openPartnerCompanies: unknown = null;
  private pickUpAddress: MFAddressDataProxy = null;
  private receivingAgentCompany: CompanyDataProxy = null;
  private receivingForwarderAddress: MFAddressDataProxy = null;
  private shipmentIds: LongListProxy = null;
  private trailer: unknown = null;
  private vehicle: unknown = null;

  public getAdditionalAddress(): MFAddressDataProxy {
    return this.additionalAddress;
  }

  public setAdditionalAddress(additionalAddress: MFAddressDataProxy): void {
    this.additionalAddress = additionalAddress;
  }

  public getCarrierAddress(): MFAddressDataProxy {
    return this.carrierAddress;
  }

  public setCarrierAddress(carrierAddress: MFAddressDataProxy): void {
    this.carrierAddress = carrierAddress;
  }

  public getCarrierCompany(): CompanyDataProxy {
    return this.carrierCompany;
  }

  public setCarrierCompany(carrierCompany: CompanyDataProxy): void {
    this.carrierCompany = carrierCompany;
  }

  public getContainer(): unknown {
    return this.container;
  }

  public setContainer(container: unknown): void {
    this.container = container;
  }

  public getCreatorAddress(): MFAddressDataProxy {
    return this.creatorAddress;
  }

  public setCreatorAddress(creatorAddress: MFAddressDataProxy): void {
    this.creatorAddress = creatorAddress;
  }

  public getCreatorCompany(): CompanyDataProxy {
    return this.creatorCompany;
  }

  public setCreatorCompany(creatorCompany: CompanyDataProxy): void {
    this.creatorCompany = creatorCompany;
  }

  public getCurrentLocationAddress(): MFAddressDataProxy {
    return this.currentLocationAddress;
  }

  public setCurrentLocationAddress(currentLocationAddress: MFAddressDataProxy): void {
    this.currentLocationAddress = currentLocationAddress;
  }

  public getDeliveryAddress(): MFAddressDataProxy {
    return this.deliveryAddress;
  }

  public setDeliveryAddress(deliveryAddress: MFAddressDataProxy): void {
    this.deliveryAddress = deliveryAddress;
  }

  public getDetails(): MFDocumentDataProxy {
    return this.details;
  }

  public setDetails(details: MFDocumentDataProxy): void {
    this.details = details;
  }

  public getDispatcherAddress(): MFAddressDataProxy {
    return this.dispatcherAddress;
  }

  public setDispatcherAddress(dispatcherAddress: MFAddressDataProxy): void {
    this.dispatcherAddress = dispatcherAddress;
  }

  public getDispatcherCompany(): CompanyDataProxy {
    return this.dispatcherCompany;
  }

  public setDispatcherCompany(dispatcherCompany: CompanyDataProxy): void {
    this.dispatcherCompany = dispatcherCompany;
  }

  public getFtxFieldsList(): unknown {
    return this.ftxFieldsList;
  }

  public setFtxFieldsList(ftxFieldsList: unknown): void {
    this.ftxFieldsList = ftxFieldsList;
  }

  public getModifierAddress(): MFAddressDataProxy {
    return this.modifierAddress;
  }

  public setModifierAddress(modifierAddress: MFAddressDataProxy): void {
    this.modifierAddress = modifierAddress;
  }

  public getModifierCompany(): CompanyDataProxy {
    return this.modifierCompany;
  }

  public setModifierCompany(modifierCompany: CompanyDataProxy): void {
    this.modifierCompany = modifierCompany;
  }

  public getObserverCompanies(): CompanyDataListProxy {
    return this.observerCompanies;
  }

  public setObserverCompanies(observerCompanies: CompanyDataListProxy): void {
    this.observerCompanies = observerCompanies;
  }

  public getOpenPartnerAddresses(): unknown {
    return this.openPartnerAddresses;
  }

  public setOpenPartnerAddresses(openPartnerAddresses: unknown): void {
    this.openPartnerAddresses = openPartnerAddresses;
  }

  public getOpenPartnerCompanies(): unknown {
    return this.openPartnerCompanies;
  }

  public setOpenPartnerCompanies(openPartnerCompanies: unknown): void {
    this.openPartnerCompanies = openPartnerCompanies;
  }

  public getPickUpAddress(): MFAddressDataProxy {
    return this.pickUpAddress;
  }

  public setPickUpAddress(pickUpAddress: MFAddressDataProxy): void {
    this.pickUpAddress = pickUpAddress;
  }

  public getReceivingAgentCompany(): CompanyDataProxy {
    return this.receivingAgentCompany;
  }

  public setReceivingAgentCompany(receivingAgentCompany: CompanyDataProxy): void {
    this.receivingAgentCompany = receivingAgentCompany;
  }

  public getReceivingForwarderAddress(): MFAddressDataProxy {
    return this.receivingForwarderAddress;
  }

  public setReceivingForwarderAddress(receivingForwarderAddress: MFAddressDataProxy): void {
    this.receivingForwarderAddress = receivingForwarderAddress;
  }

  public getShipmentIds(): LongListProxy {
    return this.shipmentIds;
  }

  public setShipmentIds(shipmentIds: LongListProxy): void {
    this.shipmentIds = shipmentIds;
  }

  public getTrailer(): unknown {
    return this.trailer;
  }

  public setTrailer(trailer: unknown): void {
    this.trailer = trailer;
  }

  public getVehicle(): unknown {
    return this.vehicle;
  }

  public setVehicle(vehicle: unknown): void {
    this.vehicle = vehicle;
  }
}
