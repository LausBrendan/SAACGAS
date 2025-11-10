import express from 'express';
import pool from '../db.js';

const router = express.Router();

// Get all test rows
router.get('/', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query('SELECT * FROM test');

    const safeRows = rows.map(row => {
      const newRow = {};
      for (const key in row) {
        newRow[key] = typeof row[key] === 'bigint' ? row[key].toString() : row[key];
      }
      return newRow;
    });

    res.json(safeRows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  } finally {
    if (conn) conn.release();
  }
});


// Add a new test row
router.post('/', async (req, res) => {
  const { test } = req.body;
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query('INSERT INTO test (test) VALUES (?)', [test]);
    res.json({ insertId: result.insertId.toString() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  } finally {
    if (conn) conn.release();
  }
});

export default router;
