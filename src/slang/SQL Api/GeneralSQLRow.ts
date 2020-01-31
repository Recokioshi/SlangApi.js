const getFieldWithParam = (dataSource: Object, param: number | string) => {
  const ret = Number.isNaN(Number(param))
    ? dataSource[param]
    : dataSource[Object.keys(dataSource)[param]];
  return ret;
};

export class GeneralSQLRow {
  rowData = {};

  constructor(newRowData: Object) {
    this.rowData = newRowData;
  }

  getBoolean(param: number | string): Boolean {
    return Boolean(getFieldWithParam(this.rowData, param));
  }

  getCharacter(param: number | string): String {
    const charAsString = String(getFieldWithParam(this.rowData, param));
    const retVal = charAsString.length === 1 ? charAsString : null;
    return retVal;
  }

  getDouble(param: number | string): Number {
    return Number(getFieldWithParam(this.rowData, param));
  }

  getFloat(param: number | string): Number {
    return Number(getFieldWithParam(this.rowData, param));
  }

  getInteger(param: number | string): Number {
    return Number(getFieldWithParam(this.rowData, param));
  }

  getLong(param: number | string): Number {
    return Number(getFieldWithParam(this.rowData, param));
  }

  getShort(param: number | string): Number {
    return Number(getFieldWithParam(this.rowData, param));
  }

  getString(param: number | string): String {
    return String(getFieldWithParam(this.rowData, param));
  }

  getDate(param: number | string): Date {
    return new Date(getFieldWithParam(this.rowData, param));
  }

  getDateString(param: number | string): String {
    return String(new Date(getFieldWithParam(this.rowData, param)));
  }
}
