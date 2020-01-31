const { solutionId } = require('../../../constants.json');

export default {
  getShipment: `SELECT * FROM WOADM.SHIPMENT WHERE SHIPMENTID = ? AND SOLUTION_ID = ${solutionId}`,
  getShipments: `SELECT * FROM WOADM.SHIPMENT WHERE SHIPMENTID IN ? AND SOLUTION_ID = ${solutionId}`,
  getShipmentsForManifest: `SELECT * FROM WOADM.SHIPMENT WHERE SHIPMENTID IN ? AND SOLUTION_ID = ${solutionId}`,

  getTimeslot: `SELECT * FROM WOADM.TSLOT WHERE ID = ? AND SOLUTION_ID = ${solutionId}`,
  getTimeslots: `SELECT * FROM WOADM.TSLOT WHERE ID IN ? AND SOLUTION_ID = ${solutionId}`,
  getManifest: `SELECT * FROM WOADM.MFDOCUMENT WHERE ID = ? AND SOLUTION_ID = ${solutionId}`,
  getManifests: `SELECT * FROM WOADM.MFDOCUMENT WHERE ID IN ? AND SOLUTION_ID = ${solutionId}`,
};
