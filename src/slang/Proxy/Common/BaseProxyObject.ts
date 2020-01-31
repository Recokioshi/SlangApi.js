import { mapSQLResultRowToProxy } from './CommonModelMapper';
import { GeneralSQLRow } from '../../SQL Api/GeneralSQLRow';

interface IBaseProxyObject {
  sourceDbRow: GeneralSQLRow;
  mapSQLResultRowToProxy: Function
}

export class BaseProxyObject implements IBaseProxyObject {
  sourceDbRow: GeneralSQLRow;
  mapSQLResultRowToProxy = (childObject: BaseProxyObject,  dirname: string, proxyObjectName: string) =>{
    mapSQLResultRowToProxy(childObject, proxyObjectName, this.sourceDbRow, `${dirname}/ProxyModelMapping.json`);
  }
  constructor(dbRow: GeneralSQLRow) {
    this.sourceDbRow = dbRow;
  }
}
