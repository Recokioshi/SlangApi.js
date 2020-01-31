require('dotenv').config();

export default {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  connectString: `(DESCRIPTION =
    (ADDRESS_LIST =
      (ADDRESS = (PROTOCOL = TCP)(HOST = sv-ora01-psdev1.cid31tg8iien.eu-central-1.rds.amazonaws.com)(PORT = 1521))
    )
    (CONNECT_DATA =
      (SID = axfour)
    )
  )`,
};
