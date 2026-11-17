// FushaGo back end: an Express server.
// Start it with: npm run dev   (then open http://localhost:3001/health)
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const prisma = require('./db');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // lets the front end (another port) call this server
app.use(express.json()); // lets us read JSON sent by the front end

// Health check: answers "ok" if the server runs and the database answers.
app.get('/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok', database: 'connected' });
  } catch (error) {
    res.status(500).json({ status: 'error', database: 'not connected' });
  }
});

app.listen(PORT, () => {
  console.log(`FushaGo back end running on http://localhost:${PORT}`);
});
