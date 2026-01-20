import express from 'express';
import cors from 'cors';
import { generateNarrative } from '../core/eru.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/narrate', (req, res) => {
  try {
    const result = generateNarrative(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3001, () =>
  console.log('Eru AI listening on port 3001')
);
