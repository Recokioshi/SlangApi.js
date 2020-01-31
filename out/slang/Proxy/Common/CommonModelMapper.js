"use strict";
exports.__esModule = true;
var filterModelType = function (typeName) { return function (datamodelRow) {
    return typeName === datamodelRow.type;
}; };
var mapDbRowToObject = function (dbRowObject, objectToMapInto) { return function (datamodelRow) {
    //console.log(objectToMapInto[datamodelRow.fieldName])
    if (objectToMapInto[datamodelRow.fieldName] === null) {
        if (dbRowObject[datamodelRow.databaseRepresentation])
            objectToMapInto[datamodelRow.fieldName] = dbRowObject[datamodelRow.databaseRepresentation];
    }
}; };
exports.mapSQLResultRowToProxy = function (proxyObj, proxyObjectTypeName, dbRow, datamodelFileName) {
    var datamodel = require(datamodelFileName);
    //console.log(`mapping: ${JSON.stringify(proxyObj)}`);
    datamodel
        .filter(filterModelType(proxyObjectTypeName))
        .forEach(mapDbRowToObject(dbRow.rowData, proxyObj));
};
//# sourceMappingURL=CommonModelMapper.js.map