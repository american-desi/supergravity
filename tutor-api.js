// ============================================
// Tutor API shim — makes window.claude.complete() a real callable.
//
// Priority order:
//   1. Externally-injected window.claude.complete (Claude.ai artifacts sandbox).
//   2. /api/chat — Vercel serverless function (holds the Anthropic key server-side).
//      Detected by checking if the current origin matches the deployed site.
//   3. localStorage 'sg-api-url' override — for custom proxies / local dev.
//   4. Friendly "not configured" message — never crashes silently.
// ============================================

(function () {
  const injected = window.claude && typeof window.claude.complete === 'function'
    ? window.claude.complete.bind(window.claude)
    : null;

  const STORAGE_KEY = 'sg-api-url';

  async function completeViaProxy(url, payload) {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const body = await res.text().catch(() => '');
      throw new Error(`Proxy ${res.status}: ${body.slice(0, 200)}`);
    }
    const data = await res.json();
    if (typeof data.completion === 'string') return data.completion;
    if (Array.isArray(data.content) && data.content[0]?.text) return data.content[0].text;
    throw new Error('Proxy returned unexpected shape.');
  }

  async function complete(payload) {
    if (injected) return injected(payload);

    // Try the built-in Vercel serverless proxy first (available when deployed).
    // Falls back gracefully if the endpoint doesn't exist (local file:// or GitHub Pages).
    try {
      const builtinUrl = '/api/chat';
      // Only attempt if we're on an http(s) origin (not file://)
      if (typeof window !== 'undefined' && window.location.protocol.startsWith('http')) {
        const probe = await fetch(builtinUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (probe.ok) {
          const data = await probe.json();
          if (typeof data.completion === 'string') return data.completion;
          if (Array.isArray(data.content) && data.content[0]?.text) return data.content[0].text;
        }
        if (probe.status !== 404) {
          throw new Error(`Proxy ${probe.status}`);
        }
        // 404 → /api/chat not deployed, fall through to next option
      }
    } catch (e) {
      if (!e.message.includes('404') && !e.message.includes('fetch')) throw e;
    }

    let proxyUrl = null;
    try { proxyUrl = localStorage.getItem(STORAGE_KEY); } catch {}
    if (proxyUrl) return completeViaProxy(proxyUrl, payload);

    return "The tutor isn't connected to a model yet. To enable it: deploy to Vercel and set ANTHROPIC_API_KEY, or run `supergravityConfigure('https://your-proxy.example.com/chat')` in the console.";
  }

  window.claude = window.claude || {};
  window.claude.complete = complete;

  window.supergravityConfigure = function (url) {
    try {
      if (!url) { localStorage.removeItem(STORAGE_KEY); return 'Proxy cleared.'; }
      localStorage.setItem(STORAGE_KEY, url);
      return `Proxy set to ${url}. Reload the page.`;
    } catch (e) {
      return 'Could not write to localStorage: ' + e.message;
    }
  };
})();
