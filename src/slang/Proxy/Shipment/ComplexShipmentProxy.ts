import { ShipmentDataProxy } from './ShipmentDataProxy';
import { CompanyDataListProxy } from '../Company/CompanyDataListProxy';
import { CompanyDataProxy } from '../Company/CompanyDataProxy';
import { GeneralSQLRow } from '../../SQL Api/GeneralSQLRow';
import { BaseProxyObject } from '../Common/BaseProxyObject';

export class ComplexShipmentProxy extends BaseProxyObject {
  constructor(dbRow: GeneralSQLRow = new GeneralSQLRow({})) {
    super(dbRow);
    this.mapSQLResultRowToProxy(this, __dirname, 'ComplexShipmentProxy');
  }

  private addressesValidationResult: unknown = null;
  private controltowerAddresses: unknown = null;
  private controltowerCompanies: CompanyDataListProxy = null;
  private details: ShipmentDataProxy = new ShipmentDataProxy(this.sourceDbRow);
  private forwarderCompany: CompanyDataProxy = null;
  private ftxFieldsList: unknown = null;
  private openPartnerAddresses: unknown = null;
  private openPartnerCompanies: unknown = null;
  private packerCompany: CompanyDataProxy = null;
  private partnerAddresses: unknown = null;
  private partnerCompanies: CompanyDataListProxy = null;
  private positions: unknown = null;
  private receiverCompany: CompanyDataProxy = null;
  private routeFields: unknown = null;
  private senderCompany: CompanyDataProxy = null;
  private transportCompany: CompanyDataProxy = null;

  public getAddressesValidationResult(): unknown {
    return this.addressesValidationResult;
  }

  public setAddressesValidationResult(addressesValidationResult: unknown): void {
    this.addressesValidationResult = addressesValidationResult;
  }

  public getControltowerAddresses(): unknown {
    return this.controltowerAddresses;
  }

  public setControltowerAddresses(controltowerAddresses: unknown): void {
    this.controltowerAddresses = controltowerAddresses;
  }

  public getControltowerCompanies(): CompanyDataListProxy {
    return this.controltowerCompanies;
  }

  public setControltowerCompanies(controltowerCompanies: CompanyDataListProxy): void {
    this.controltowerCompanies = controltowerCompanies;
  }

  public getDetails(): ShipmentDataProxy {
    return this.details;
  }

  public setDetails(details: ShipmentDataProxy): void {
    this.details = details;
  }

  public getForwarderCompany(): CompanyDataProxy {
    return this.forwarderCompany;
  }

  public setForwarderCompany(forwarderCompany: CompanyDataProxy): void {
    this.forwarderCompany = forwarderCompany;
  }

  public getFtxFieldsList(): unknown {
    return this.ftxFieldsList;
  }

  public setFtxFieldsList(ftxFieldsList: unknown): void {
    this.ftxFieldsList = ftxFieldsList;
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

  public getPackerCompany(): CompanyDataProxy {
    return this.packerCompany;
  }

  public setPackerCompany(packerCompany: CompanyDataProxy): void {
    this.packerCompany = packerCompany;
  }

  public getPartnerAddresses(): unknown {
    return this.partnerAddresses;
  }

  public setPartnerAddresses(partnerAddresses: unknown): void {
    this.partnerAddresses = partnerAddresses;
  }

  public getPartnerCompanies(): CompanyDataListProxy {
    return this.partnerCompanies;
  }

  public setPartnerCompanies(partnerCompanies: CompanyDataListProxy): void {
    this.partnerCompanies = partnerCompanies;
  }

  public getPositions(): unknown {
    return this.positions;
  }

  public setPositions(positions: unknown): void {
    this.positions = positions;
  }

  public getReceiverCompany(): CompanyDataProxy {
    return this.receiverCompany;
  }

  public setReceiverCompany(receiverCompany: CompanyDataProxy): void {
    this.receiverCompany = receiverCompany;
  }

  public getRouteFields(): unknown {
    return this.routeFields;
  }

  public setRouteFields(routeFields: unknown): void {
    this.routeFields = routeFields;
  }

  public getSenderCompany(): CompanyDataProxy {
    return this.senderCompany;
  }

  public setSenderCompany(senderCompany: CompanyDataProxy): void {
    this.senderCompany = senderCompany;
  }

  public getTransportCompany(): CompanyDataProxy {
    return this.transportCompany;
  }

  public setTransportCompany(transportCompany: CompanyDataProxy): void {
    this.transportCompany = transportCompany;
  }
}
