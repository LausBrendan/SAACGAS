import express from 'express';
import request from 'supertest';
import testRoutes from './_test.js';

jest.mock('../db.js', () => {
  return {
    getConnection: jest.fn(() => ({
      query: jest.fn(async (sql) => {
        if (sql.startsWith('SELECT')) {
          return [{ id: 1, test: 'Hello from mock DB' }];
        }
        if (sql.startsWith('INSERT')) {
          return { insertId: 123n };
        }
      }),
      release: jest.fn(),
    })),
  };
});

describe('Test routes', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use('/test', testRoutes);
  });

  test('GET /test returns mocked rows', async () => {
    const res = await request(app).get('/test');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ id: 1, test: 'Hello from mock DB' }]);
  });

  test('POST /test inserts a new row', async () => {
    const res = await request(app)
      .post('/test')
      .send({ test: 'New mock row' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ insertId: '123' });
  });
});