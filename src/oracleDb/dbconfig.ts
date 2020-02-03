require('dotenv').config();

export default {
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  connectString: process.env.CONNECT_STRING,
};
