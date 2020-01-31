import { exceptions } from '../../common/exceptions';
import { ArrayList } from '../java.util/ArrayList';
import { restricted } from './restricted';
import standardApiQuerries from './SlangApiStandardDatabaseQuerries';
import { FunctionInvoker } from './FunctionInvoker';
import { Log } from './Log';
import { LongListProxy } from '../Proxy/LongListProxy';
import { ComplexShipmentProxy } from '../Proxy/Shipment/ComplexShipmentProxy';
import { ComplexManifestProxy } from '../Proxy/Manifest/ComplexManifestProxy';
import { ComplexTslotProxy } from '../Proxy/Timeslot/ComplexTslotProxy';
import { ComplexShipmentListProxy } from '../Proxy/Shipment/ComplexShipmentListProxy ';
import { GeneralSQLRow } from '../SQL Api/GeneralSQLRow';
import { ComplexTslotListProxy } from '../Proxy/Timeslot/ComplexTslotListProxy';
import { ComplexManifestListProxy } from '../Proxy/Manifest/ComplexManifestListProxy';
import { UserInfoDataProxy } from '../Proxy/UserInfoDataProxy';
const { groupId, companyId, solutionId, loggedInUser } = require('../../../constants.json');

const callStandardApiFunctionSqlQuerryWithParams = (query: string, params: any[]) => {
  const paramsAsArrayList = new ArrayList(params);
  try {
    return restricted.generalSQL(standardApiQuerries[query], paramsAsArrayList);
  } catch (err) {
    console.error(`${exceptions.errorDuringExecution}: err`);
    return null;
  }
};

const callRequestForSingleProxyObject = async <T>(
  functionName: string,
  param: string | number,
  newObjectClass: new (sqlResult: GeneralSQLRow) => T
): Promise<T | null> => {
  const rawSQLresultRows = await callStandardApiFunctionSqlQuerryWithParams(functionName, [param]);
  const rawShipmentRow = rawSQLresultRows.elems ? rawSQLresultRows.elems[0] : null;
  return rawShipmentRow ? new newObjectClass(rawShipmentRow) : null;
};

const callRequestForMultipleProxyObject = async <ElemType, ListType>(
  functionName: string,
  ids: LongListProxy,
  elemClass: new (sqlResult: GeneralSQLRow) => ElemType,
  listClass: new (elems: ElemType[]) => ListType
): Promise<ListType | null> => {
  const rawSQLresultRows = await callStandardApiFunctionSqlQuerryWithParams(functionName, [
    ids.elems,
  ]);
  const retVal = rawSQLresultRows.elems.map((resultRow: GeneralSQLRow) => new elemClass(resultRow));
  return retVal.length ? new listClass(retVal) : null;
};

class Base {
  log = new Log();

  //#region PROXY OBJECTS FACTORIES
  createLongListProxy(): LongListProxy {
    return new LongListProxy();
  }

  createListProxy(fullProxyTypeName: string) {
    if (fullProxyTypeName.includes('pl.axit.slang.proxy.')) {
      switch (fullProxyTypeName.split('.').pop()) {
        case 'ComplexShipmentProxy':
          return new ComplexShipmentListProxy();
        case 'ComplexTslotProxy':
          return new ComplexTslotListProxy();
        case 'ComplexManifestProxy':
          return new ComplexManifestListProxy();
        default:
          throw Error(exceptions.createListProxyNoTypeImplemented);
      }
    } else {
      throw Error(exceptions.classNameNotExists(fullProxyTypeName));
    }
  }

  getNewShipment(): ComplexShipmentProxy {
    return new ComplexShipmentProxy();
  }

  getNewTimeslot(): ComplexTslotProxy {
    return new ComplexTslotProxy();
  }

  getNewManifest(): ComplexManifestProxy {
    return new ComplexManifestProxy();
  }
  //#endregion

  //#region EXECUTIONERS
  eval(expression: string) {
    return eval(expression);
  }

  invokeProtected(scriptName: string, functionName: string, params?: ArrayList): any {
    let functionInvoker = new FunctionInvoker(functionName);
    for (let i = 0; i < params.size(); i++) {
      functionInvoker = functionInvoker.param(params.get(i));
    }
    return functionInvoker.invoke();
  }

  protectedScript() {
    throw new Error(exceptions.notImplemented);
  }

  protectedFunction(scriptName: string, functionName: string): FunctionInvoker {
    return new FunctionInvoker(functionName);
  }
  //#endregion

  //#region DATABASE ACCESSORS
  //SHIPMENT API
  async getShipment(id: string | number): Promise<ComplexShipmentProxy | null> {
    return await callRequestForSingleProxyObject<ComplexShipmentProxy>(
      'getShipment',
      id,
      ComplexShipmentProxy
    );
  }

  async getShipments(ids: LongListProxy): Promise<ComplexShipmentListProxy | null> {
    return await callRequestForMultipleProxyObject<ComplexShipmentProxy, ComplexShipmentListProxy>(
      'getShipments',
      ids,
      ComplexShipmentProxy,
      ComplexShipmentListProxy
    );
  }

  //TIMESLOT API
  async getTimeslot(id: string | number): Promise<ComplexTslotProxy | null> {
    return await callRequestForSingleProxyObject<ComplexTslotProxy>(
      'getTimeslot',
      id,
      ComplexTslotProxy
    );
  }

  async getTimeslots(ids: LongListProxy): Promise<ComplexTslotListProxy | null> {
    return await callRequestForMultipleProxyObject<ComplexTslotProxy, ComplexTslotListProxy>(
      'getTimeslots',
      ids,
      ComplexTslotProxy,
      ComplexTslotListProxy
    );
  }

  //MANIFEST API
  async getManifest(id: string | number): Promise<ComplexManifestProxy | null> {
    return await callRequestForSingleProxyObject<ComplexManifestProxy>(
      'getManifest',
      id,
      ComplexManifestProxy
    );
  }

  async getManifests(ids: LongListProxy): Promise<ComplexManifestListProxy | null> {
    return await callRequestForMultipleProxyObject<ComplexManifestProxy, ComplexManifestListProxy>(
      'getManifests',
      ids,
      ComplexManifestProxy,
      ComplexManifestListProxy
    );
  }
  //#endregion

  //#region SOLUTION CONSTANTS ACCESSORS

  getGroupId(): number | null {
    return groupId ? groupId : null;
  }

  getCompanyId(): number | null {
    return companyId ? companyId : null;
  }

  getSolutionId(): number | null {
    return solutionId ? solutionId : null;
  }

  getLoggedInUser(): UserInfoDataProxy | null {
    return loggedInUser ? new UserInfoDataProxy(loggedInUser) : null;
  }

  //#endregion
}

export const base = new Base();
