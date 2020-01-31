import { GeneralSQLRow } from "../../SQL Api/GeneralSQLRow";

type CommonModelMapping = {
  type: string;
  fieldName: string;
  databaseType: string;
  databaseRepresentation: string;
};

const filterModelType = (typeName: string) => (datamodelRow: CommonModelMapping) =>
  typeName === datamodelRow.type;

const mapDbRowToObject = <T>(dbRowObject: Object, objectToMapInto: T) => (
  datamodelRow: CommonModelMapping
) => {
  //console.log(objectToMapInto[datamodelRow.fieldName])
  if (objectToMapInto[datamodelRow.fieldName] === null) {
    if (dbRowObject[datamodelRow.databaseRepresentation])
      objectToMapInto[datamodelRow.fieldName] = dbRowObject[datamodelRow.databaseRepresentation];
  }
};

export const mapSQLResultRowToProxy = (
  proxyObj: Object,
  proxyObjectTypeName: string,
  dbRow: GeneralSQLRow,
  datamodelFileName: string
) => {
  const datamodel = require(datamodelFileName) as CommonModelMapping[];
  //console.log(`mapping: ${JSON.stringify(proxyObj)}`);
  datamodel
    .filter(filterModelType(proxyObjectTypeName))
    .forEach(mapDbRowToObject(dbRow.rowData, proxyObj));
};