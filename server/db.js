const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: '2123',
  host: 'localhost',
  port: '5432',
  database:'smoothmove'
});

module.exports = pool;
