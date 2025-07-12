const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool.query('SELECT current_database();')
  .then(res => console.log('✅ Connected to DB:', res.rows[0].current_database))
  .catch(err => console.error('❌ Connection Error:', err));
console.log(pool);
module.exports = pool;
