import express from 'express';
import request from 'supertest';
import bedrockRoute from './aiAgent.js';

jest.mock('@aws-sdk/client-bedrock-agent-runtime', () => {
  return {
    BedrockAgentRuntimeClient: jest.fn(() => ({
      send: jest.fn(async (command) => {
        if (command.inputText === 'fail') {
          throw new Error('Mock API failure');
        }
        return {
          completion: [
            { chunk: { bytes: new TextEncoder().encode('Hello') } },
            { chunk: { bytes: new TextEncoder().encode(' from AI') } },
          ],
        };
      }),
    })),
    InvokeAgentCommand: jest.fn((params) => params),
  };
});

describe('AI Agent route', () => {
  let app;

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use('/api/ai', bedrockRoute);
  });

  test('POST /api/ai/chat returns AI reply', async () => {
    const res = await request(app)
      .post('/api/ai/chat')
      .send({ userMessage: 'Hello AI' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ reply: 'Hello from AI' });
  });

  test('POST /api/ai/chat without message returns 400', async () => {
    const res = await request(app).post('/api/ai/chat').send({});
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ error: 'Missing userMessage' });
  });

  test('POST /api/ai/chat handles API failure', async () => {
    const res = await request(app)
      .post('/api/ai/chat')
      .send({ userMessage: 'fail' });

    expect(res.statusCode).toBe(500);
    expect(res.body).toHaveProperty('error', 'Mock API failure');
  });
});