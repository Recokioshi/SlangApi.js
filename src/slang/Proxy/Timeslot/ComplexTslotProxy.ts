import { LongListProxy } from '../LongListProxy';
import { TslotDataProxy } from './TslotDataProxy';
import { TslotAddressDataProxy } from './TslotAddressDataProxy';
import { TslotCompanyDataProxy } from './TslotCompanyDataProxy';
import { TslotAddressDataListProxy } from './TslotAddressDataListProxy';
import { TslotCompanyDataListProxy } from './TslotCompanyDataListProxy';
import { BaseProxyObject } from '../Common/BaseProxyObject';
import { GeneralSQLRow } from '../../SQL Api/GeneralSQLRow';

export class ComplexTslotProxy extends BaseProxyObject {
  constructor(dbRow: GeneralSQLRow = new GeneralSQLRow({})) {
    super(dbRow);
    this.mapSQLResultRowToProxy(this, __dirname, 'ComplexTslotProxy');
  }

  private bookerAddress: TslotAddressDataProxy = null;
  private bookerCompany: TslotCompanyDataProxy = null;
  private details: TslotDataProxy = new TslotDataProxy(this.sourceDbRow);
  private manifestIds: LongListProxy = null;
  private observerAddresses: TslotAddressDataListProxy = null;
  private observerCompanies: TslotCompanyDataListProxy = null;
  private ownerAddress: TslotAddressDataProxy = null;
  private ownerCompany: TslotCompanyDataProxy = null;
  private scenarios: unknown = null;
  private shipmentIds: LongListProxy = null;

  public getBookerAddress(): TslotAddressDataProxy {
    return this.bookerAddress;
  }

  public setBookerAddress(bookerAddress: TslotAddressDataProxy): void {
    this.bookerAddress = bookerAddress;
  }

  public getBookerCompany(): TslotCompanyDataProxy {
    return this.bookerCompany;
  }

  public setBookerCompany(bookerCompany: TslotCompanyDataProxy): void {
    this.bookerCompany = bookerCompany;
  }

  public getDetails(): TslotDataProxy {
    return this.details;
  }

  public setDetails(details: TslotDataProxy): void {
    this.details = details;
  }

  public getManifestIds(): LongListProxy {
    return this.manifestIds;
  }

  public setManifestIds(manifestIds: LongListProxy): void {
    this.manifestIds = manifestIds;
  }

  public getObserverAddresses(): TslotAddressDataListProxy {
    return this.observerAddresses;
  }

  public setObserverAddresses(observerAddresses: TslotAddressDataListProxy): void {
    this.observerAddresses = observerAddresses;
  }

  public getObserverCompanies(): TslotCompanyDataListProxy {
    return this.observerCompanies;
  }

  public setObserverCompanies(observerCompanies: TslotCompanyDataListProxy): void {
    this.observerCompanies = observerCompanies;
  }

  public getOwnerAddress(): TslotAddressDataProxy {
    return this.ownerAddress;
  }

  public setOwnerAddress(ownerAddress: TslotAddressDataProxy): void {
    this.ownerAddress = ownerAddress;
  }

  public getOwnerCompany(): TslotCompanyDataProxy {
    return this.ownerCompany;
  }

  public setOwnerCompany(ownerCompany: TslotCompanyDataProxy): void {
    this.ownerCompany = ownerCompany;
  }

  public getScenarios(): unknown {
    return this.scenarios;
  }

  public setScenarios(scenarios: unknown): void {
    this.scenarios = scenarios;
  }

  public getShipmentIds(): LongListProxy {
    return this.shipmentIds;
  }

  public setShipmentIds(shipmentIds: LongListProxy): void {
    this.shipmentIds = shipmentIds;
  }
}
