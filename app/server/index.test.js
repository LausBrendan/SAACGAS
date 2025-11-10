import request from 'supertest';
import express from 'express';
import testRoutes from './routes/_test.js';

jest.mock('./db.js', () => ({
  getConnection: jest.fn(() => ({
    query: jest.fn(async (sql) => {
      if (sql.startsWith('SELECT')) return [{ id: 1, test: 'mock row' }];
      if (sql.startsWith('INSERT')) return { insertId: 123n };
    }),
    release: jest.fn(),
  })),
}));

const app = express();
app.use(express.json());
app.use('/test', testRoutes);

describe('Test routes', () => {
  test('GET /test should return rows', async () => {
    const res = await request(app).get('/test');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  }, 10000);
});