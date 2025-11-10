import express from 'express';
import cors from 'cors';
import testRoutes from './routes/test.js';
import bedrockRoute from './routes/aiAgent.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/test', testRoutes);
app.use('/api/ai', bedrockRoute);

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
