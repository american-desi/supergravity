// netlify/functions/chat.js
// Netlify Function — OpenAI proxy (mirrors api/chat.js for Vercel).
// Accepts: POST { messages, model?, max_tokens?, system? }
// Returns: { completion } or { error }

export async function handler(event) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return { statusCode: 503, headers, body: JSON.stringify({ error: 'API key not configured on server.' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  const { messages, model, max_tokens, system } = body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: 'messages array required' }) };
  }

  const openaiMessages = [];
  if (system) openaiMessages.push({ role: 'system', content: system });
  openaiMessages.push(...messages);

  try {
    const upstream = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: model || 'gpt-4o-mini',
        max_tokens: max_tokens || 1024,
        messages: openaiMessages,
      }),
    });

    if (!upstream.ok) {
      const text = await upstream.text().catch(() => '');
      return { statusCode: upstream.status, headers, body: JSON.stringify({ error: `OpenAI ${upstream.status}: ${text.slice(0, 300)}` }) };
    }

    const data = await upstream.json();
    const completion = data.choices?.[0]?.message?.content ?? '';
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ completion, content: [{ text: completion }] }),
    };
  } catch (err) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message || 'Internal error' }) };
  }
}
