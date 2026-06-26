// Vercel serverless function — OpenAI proxy.
// Keeps OPENAI_API_KEY server-side; client never sees it.
// Accepts: POST { messages, model?, max_tokens?, system? }
// Returns: { completion } (string) or { error } on failure.

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return res.status(503).json({ error: 'API key not configured on server.' });

  const { messages, model, max_tokens, system } = req.body || {};
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages array required' });
  }

  // Convert Anthropic-style { role, content } messages to OpenAI format
  // (they share the same shape, but add system as a message if provided)
  const openaiMessages = [];
  if (system) openaiMessages.push({ role: 'system', content: system });
  openaiMessages.push(...messages);

  try {
    const upstream = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: model || 'gpt-4o-mini',
        max_tokens: max_tokens || 1024,
        messages: openaiMessages,
      }),
    });

    if (!upstream.ok) {
      const text = await upstream.text().catch(() => '');
      return res.status(upstream.status).json({ error: `OpenAI ${upstream.status}: ${text.slice(0, 300)}` });
    }

    const data = await upstream.json();
    const completion = data.choices?.[0]?.message?.content ?? '';
    return res.status(200).json({ completion, content: [{ text: completion }] });
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Internal error' });
  }
}
