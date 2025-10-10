import 'dotenv/config';
import express from 'express';
import fetch from 'node-fetch';

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5174;

// Example: proxy to OpenAI (similar for Anthropic/Google)
app.post('/api/ai', async (req, res) => {
  try {
    const { provider = 'openai', payload } = req.body;

    if (provider === 'openai') {
      const r = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const data = await r.json();
      return res.status(r.ok ? 200 : 400).json(data);
    }

    // TODO: add Anthropic / Google routes similarly, using their keys
    return res.status(400).json({ error: 'Unknown provider' });

  } catch (e:any) {
    return res.status(500).json({ error: e.message });
  }
});

app.get('/api/health', (_, res) => res.json({ ok: true }));

app.listen(PORT, () => console.log(`Local API listening on http://localhost:${PORT}`));
