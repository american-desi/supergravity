// ============================================
// Claude Tutor Dock
// ============================================

const { useState: useStateT, useEffect: useEffectT, useRef: useRefT, useMemo } = React;

const SUGGESTIONS_BY_CONTEXT = {
  atlas: [
    { sym: '✦', text: 'Design me a 30-day self-study path across two subjects.' },
    { sym: '?', text: 'What should I learn first if I want to understand AI?' },
    { sym: '⊕', text: 'Quiz me on a random topic.' },
  ],
  subject: [
    { sym: '✦', text: 'Give me a one-paragraph overview of this whole subject.' },
    { sym: '?', text: 'Which topic here connects to the most others?' },
    { sym: '⊕', text: "What's a surprising fact from this field?" },
  ],
  lesson: [
    { sym: '?', text: 'Explain this to me like I just turned twelve.' },
    { sym: '⊕', text: 'Quiz me on what I just read.' },
    { sym: '✦', text: 'Connect this to something I already know.' },
    { sym: '→', text: "What should I read next?" },
  ],
};

const TutorDock = ({ context, onClose }) => {
  const [tab, setTab] = useStateT('chat');
  const [messages, setMessages] = useStateT([]);
  const [input, setInput] = useStateT('');
  const [loading, setLoading] = useStateT(false);
  const scrollRef = useRefT(null);
  const inputRef = useRefT(null);

  useEffectT(() => {
    inputRef.current?.focus();
  }, []);

  useEffectT(() => {
    scrollRef.current?.scrollTo({ top: 99999, behavior: 'smooth' });
  }, [messages, loading]);

  // Expose a programmatic opener
  useEffectT(() => {
    window.__tutorSeed = (prompt) => {
      setTab('chat');
      setInput(prompt);
      setTimeout(() => inputRef.current?.focus(), 50);
    };
    return () => { window.__tutorSeed = null; };
  }, []);

  const ctxLabel = useMemo(() => {
    if (context.page === 'lesson' && context.lesson) return `Lesson · ${context.lesson.title}`;
    if (context.page === 'subject' && context.subject) return `Subject · ${context.subject.name}`;
    return 'Supergravity · Atlas';
  }, [context]);

  const systemContext = useMemo(() => {
    let s = 'You are a friendly, slightly literary tutor inside Supergravity, an interactive learning atlas. Reply in 2–4 short paragraphs max. Use plain prose, no markdown bullets unless asked. Never mention that you are an AI or model. ';
    if (context.page === 'lesson' && context.lesson) {
      s += `The student is currently reading "${context.lesson.title}": ${context.lesson.dek} `;
    } else if (context.page === 'subject' && context.subject) {
      s += `The student is browsing the ${context.subject.name} subject: ${context.subject.desc} `;
    }
    return s;
  }, [context]);

  const send = async (text) => {
    const prompt = (text ?? input).trim();
    if (!prompt || loading) return;
    const next = [...messages, { role: 'user', content: prompt }];
    setMessages(next);
    setInput('');
    setLoading(true);
    try {
      const history = next.map(m => ({ role: m.role, content: m.content }));
      const reply = await window.claude.complete({
        messages: [
          { role: 'user', content: systemContext + '\n\nStudent question: ' + prompt },
          ...history.slice(0, -1).map(m => ({ role: m.role, content: m.content })),
          { role: 'user', content: prompt },
        ],
      });
      setMessages([...next, { role: 'assistant', content: reply }]);
    } catch (err) {
      setMessages([...next, { role: 'assistant', content: "I couldn't reach the library just now — try again in a moment." }]);
    } finally {
      setLoading(false);
    }
  };

  const quiz = async () => {
    setTab('chat');
    const topic = context.lesson?.title || context.subject?.name || 'a topic of your choice';
    setLoading(true);
    setMessages(m => [...m, { role: 'user', content: `Quiz me on ${topic}.` }]);
    try {
      const reply = await window.claude.complete({
        messages: [{
          role: 'user',
          content: systemContext + `\n\nGenerate ONE multiple-choice question about ${topic} at ${context.lesson?.difficulty || 'an appropriate'} level. Format it exactly like this, no extra text:\n\nQUESTION: <the question>\nA) <option>\nB) <option>\nC) <option>\nD) <option>\nANSWER: <letter>\nEXPLANATION: <1 sentence>`
        }]
      });
      setMessages(m => [...m, { role: 'assistant', content: reply, kind: 'quiz' }]);
    } finally { setLoading(false); }
  };

  const suggestions = context.page === 'lesson' ? SUGGESTIONS_BY_CONTEXT.lesson
    : context.page === 'subject' ? SUGGESTIONS_BY_CONTEXT.subject
    : SUGGESTIONS_BY_CONTEXT.atlas;

  return (
    <div className="tutor-dock">
      <div className="tutor-head">
        <div className="tutor-head-left">
          <div className="tutor-fab-orb" style={{ width: 20, height: 20 }}/>
          <div>
            <div className="tutor-head-name">Claude</div>
            <div className="tutor-head-sub">Tutor mode · context aware</div>
          </div>
        </div>
        <button className="tutor-close" onClick={onClose}><Icon name="close" size={12}/></button>
      </div>

      <div className="tutor-tabs">
        <button className={`tutor-tab ${tab === 'chat' ? 'active' : ''}`} onClick={() => setTab('chat')}>Ask</button>
        <button className={`tutor-tab ${tab === 'quiz' ? 'active' : ''}`} onClick={() => { setTab('quiz'); quiz(); }}>Quiz me</button>
        <button className={`tutor-tab ${tab === 'deepen' ? 'active' : ''}`} onClick={() => { setTab('deepen'); send('Go deeper — give me the next layer of nuance on the topic I\'m reading.'); }}>Go deeper</button>
      </div>

      <div className="tutor-body" ref={scrollRef}>
        {messages.length === 0 && (
          <>
            <div className="tutor-welcome">
              Ask me <span>anything</span> about what you're reading — I can explain, quiz, or connect it to other fields.
            </div>
            <div className="tutor-ctx">
              <Icon name="book" size={12}/> Context: <strong>{ctxLabel}</strong>
            </div>
            <div className="tutor-suggest-title">Try asking</div>
            <div className="tutor-suggest">
              {suggestions.map((s, i) => (
                <button key={i} className="tutor-suggest-item" onClick={() => send(s.text)}>
                  <span className="sym">{s.sym}</span>
                  <span>{s.text}</span>
                </button>
              ))}
            </div>
          </>
        )}
        {messages.map((m, i) => (
          m.kind === 'quiz' && m.role === 'assistant' ? <QuizMessage key={i} text={m.content}/> :
          <div key={i} className={`tutor-msg ${m.role === 'user' ? 'user' : 'claude'}`}>
            {m.content.split('\n').map((ln, j) => <div key={j}>{ln || '\u00a0'}</div>)}
          </div>
        ))}
        {loading && <div className="tutor-typing"><span/><span/><span/></div>}
      </div>

      <div className="tutor-input-row">
        <textarea
          ref={inputRef}
          className="tutor-input"
          rows={1}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
          }}
          placeholder="Ask about anything on this page…"
        />
        <button className="tutor-send" onClick={() => send()} disabled={!input.trim() || loading}>
          <Icon name="send" size={14}/>
        </button>
      </div>
    </div>
  );
};

const QuizMessage = ({ text }) => {
  const [selected, setSelected] = useStateT(null);
  const [revealed, setRevealed] = useStateT(false);

  const parsed = useMemo(() => {
    const q = text.match(/QUESTION:\s*(.+)/)?.[1] || text;
    const opts = ['A', 'B', 'C', 'D'].map(L => {
      const m = text.match(new RegExp(`${L}\\)\\s*(.+)`));
      return m ? m[1] : null;
    }).filter(Boolean);
    const ans = text.match(/ANSWER:\s*([A-D])/)?.[1];
    const expl = text.match(/EXPLANATION:\s*(.+)/s)?.[1];
    return { q, opts, ans, expl };
  }, [text]);

  if (!parsed.opts.length) {
    return <div className="tutor-msg claude">{text}</div>;
  }

  const letters = ['A','B','C','D'];

  return (
    <div className="quiz-card">
      <div className="quiz-q">{parsed.q}</div>
      <div className="quiz-opts">
        {parsed.opts.map((o, i) => {
          const L = letters[i];
          let cls = 'quiz-opt';
          if (revealed) {
            if (L === parsed.ans) cls += ' correct';
            else if (L === selected) cls += ' wrong';
          }
          return (
            <button key={i} className={cls} disabled={revealed} onClick={() => { setSelected(L); setRevealed(true); }}>
              <strong style={{ marginRight: 8, fontFamily: 'var(--mono)', fontSize: 11 }}>{L}</strong>{o}
            </button>
          );
        })}
      </div>
      {revealed && parsed.expl && (
        <div style={{ marginTop: 12, padding: 10, background: 'var(--paper)', fontSize: 13, fontStyle: 'italic', borderLeft: '2px solid var(--amber)' }}>
          {parsed.expl}
        </div>
      )}
    </div>
  );
};

window.TutorDock = TutorDock;

const TutorFab = ({ onOpen }) => (
  <button className="tutor-fab" onClick={onOpen}>
    <div className="tutor-fab-orb"/>
    <span className="tutor-fab-label">Ask Claude</span>
    <span className="tutor-fab-kbd">⌘J</span>
  </button>
);
window.TutorFab = TutorFab;

Object.assign(window, { TutorDock, TutorFab, QuizMessage });
