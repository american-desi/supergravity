// Vercel serverless function — Claude proxy.
// Keeps ANTHROPIC_API_KEY server-side; client never sees it.
// Accepts: POST { messages, model?, max_tokens?, system? }
// Returns: { completion } (string) or { error } on failure.

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(503).json({ error: 'API key not configured on server.' });

  const { messages, model, max_tokens, system } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages array required' });
  }

  try {
    const body = {
      model: model || 'claude-haiku-4-5-20251001',
      max_tokens: max_tokens || 1024,
      messages,
    };
    if (system) body.system = system;

    const upstream = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!upstream.ok) {
      const text = await upstream.text().catch(() => '');
      return res.status(upstream.status).json({ error: `Anthropic ${upstream.status}: ${text.slice(0, 300)}` });
    }

    const data = await upstream.json();
    const completion = data.content?.[0]?.text ?? '';
    return res.status(200).json({ completion, content: data.content });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Internal error' });
  }
}
