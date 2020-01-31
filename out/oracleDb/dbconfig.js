"use strict";
exports.__esModule = true;
require('dotenv').config();
exports["default"] = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    connectString: "(DESCRIPTION =\n    (ADDRESS_LIST =\n      (ADDRESS = (PROTOCOL = TCP)(HOST = sv-ora01-psdev1.cid31tg8iien.eu-central-1.rds.amazonaws.com)(PORT = 1521))\n    )\n    (CONNECT_DATA =\n      (SID = axfour)\n    )\n  )"
};
//# sourceMappingURL=dbconfig.js.map