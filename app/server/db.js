import mariadb from 'mariadb';
import dotenv from 'dotenv';
dotenv.config();

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  connectionLimit: 5,
  ssl: { rejectUnauthorized: true }
});

async function testConnection() {
  let conn;
  try {
    conn = await pool.getConnection();
    console.log('DB connected successfully!');
  } catch (err) {
    console.error('DB connection failed:', err);
  } finally {
    if (conn) conn.release();
  }
}

testConnection();

export default pool;
