'use strict';

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
  PORT2,
  HOST2,
  HOST_URL2,
  SQL_USER2,
  SQL_PASSWORD2,
  SQL_DATABASE2,
  SQL_SERVER2,
} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === 'true';

assert(PORT2, 'PORT is require');
assert(HOST2, 'HOST is required');

module.exports = {
  server: SQL_SERVER2,
  database: SQL_DATABASE2,
  user: SQL_USER2,
  password: SQL_PASSWORD2,
  options: {
    encrypt: false,
    enableArithAbort: true,
    truestConnection: true,
  },
  requestTimeout: 300000,
};
