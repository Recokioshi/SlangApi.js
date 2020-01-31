import { GeneralSQLResult } from '../SQL Api/GeneralSQLResult';
import { ArrayList } from '../java.util/ArrayList';
import { exceptions } from '../../common/exceptions';
import { callDb } from '../../oracleDb/oracleDbConnection';
import { GeneralSQLRow } from '../SQL Api/GeneralSQLRow';

const formatSqlQueryWithParams = (query: string, params: ArrayList) => {
  var formattedQuery = `${query}`;
  if (formattedQuery.indexOf('?') > -1 && params.size() > 0) {
    var counter = 0;
    do {
      if (params.size() > counter) {
        var param = params.get(counter);
        formattedQuery = formattedQuery.replace(
          '?',
          isNaN(Number(param)) ? (param.length ? `(${param})` : `'${param}'`) : param
        );
        counter++;
      }
    } while (formattedQuery.indexOf('?') > -1 && params.size() > counter);
  }
  return formattedQuery;
};

class Restricted {
  getXreferenceMetaData() {
    throw new Error(exceptions.notImplemented);
  }

  shipmentSQL() {
    throw new Error(exceptions.notImplemented);
  }

  manifestSQL() {
    throw new Error(exceptions.notImplemented);
  }

  orderSQL() {
    throw new Error(exceptions.notImplemented);
  }

  deliveryNoteSQL() {
    throw new Error(exceptions.notImplemented);
  }

  timeslotSQL() {
    throw new Error(exceptions.notImplemented);
  }

  supplyDeliveryPlanSQL() {
    throw new Error(exceptions.notImplemented);
  }

  supplyDeliveryPlanRequirementSQL() {
    throw new Error(exceptions.notImplemented);
  }

  supplyDeliveryPlanAnalysisSQL() {
    throw new Error(exceptions.notImplemented);
  }

  containerExchangeSQL() {
    throw new Error(exceptions.notImplemented);
  }

  containerExchangePositionSQL() {
    throw new Error(exceptions.notImplemented);
  }

  /**
   * @function
   * @name generalSQL
   * @param {string} preFormattedQuery
   * @param {ArrayList} params
   */
  async generalSQL(preFormattedQuery: string, params: ArrayList): Promise<GeneralSQLResult> {
    const mapRawSqlResultRowToGeneralSQLRow = (rawRow: Object): GeneralSQLRow =>
      new GeneralSQLRow(rawRow);

    const formattedQuery = formatSqlQueryWithParams(preFormattedQuery, params);
    try {
      const rawSqlResult = await callDb(formattedQuery);
      const sqlRows = rawSqlResult.map(mapRawSqlResultRowToGeneralSQLRow);
      return new GeneralSQLResult(sqlRows);
    } catch (err) {
      throw new Error(`${exceptions.errorDuringExecution}: ${err} after invoking query: 
        ${formattedQuery}`);
    }
  }

  generalSQLWithDynamicLimit() {
    throw new Error(exceptions.notImplemented);
  }
}

export const restricted = new Restricted();
