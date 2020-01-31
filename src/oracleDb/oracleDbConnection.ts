import oracledb, { Connection } from 'oracledb';
import dbConfig from './dbconfig';
import { exceptions } from '../common/exceptions';

/**
 * @function
 * @name getDbConnection
 * @description open and return connection to the db
 * @return {Promise<oracledb.Connection>} promise with db connection
 * @throws exception when connection is not established
 */
const getDbConnection = async (): Promise<oracledb.Connection> => {
  try {
    return await oracledb.getConnection(dbConfig);
  } catch (err) {
    throw new Error(`${exceptions.errorDuringExecution}: ${err}`);
  }
};

/**
 * @function
 * @name closeDbConnection
 * @description closes db connection if previously established
 * @param {Connection} connection  connection to close
 * @return {Promise<void>} promise to resolve after connection is closed
 * @throws exception when closing connection fails
 */
const closeDbConnection = async (connection: Connection): Promise<void> => {
  if (connection) {
    try {
      return connection.close();
    } catch (err) {
      throw new Error(`${exceptions.errorDuringExecution}: ${err}`);
    }
  }
};

/**
 * @function
 * @name executeDbQuery
 * @description executes query for previously opened connection
 * @param {Connection} connection  connection to perform query with
 * @return {Promise<Object[] | null>} promise with sql query result
 * @throws exception when query execution fails, or when db connection was not opened before query
 */
const executeDbQuery = async (connection: Connection, query: string): Promise<Object[] | null> => {
  try {
    const sql = query;
    const binds = {};

    const options = {
      outFormat: oracledb.OUT_FORMAT_OBJECT,
    };

    const result = await connection.execute(sql, binds, options);

    return result.rows;
  } catch (err) {
    throw new Error(`${exceptions.errorDuringExecution}: ${err}`);
  }
};

/**
 * @function
 * @name dbQuery
 * @description open db connection, execute query and close db connection
 * @return {Promise<Object[] | null>} promise with sql query result
 * @throws exceptions from opening db connection, query execution or closing db connection
 */
export const callDb = async (query: string): Promise<Object[] | null> => {
  const connection = await getDbConnection();
  const response = await executeDbQuery(connection, query);
  await closeDbConnection(connection);
  return response;
};
