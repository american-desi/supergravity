// Tutor v2 — overlay depth/mode controls and planner
// Wraps/replaces TutorDock to add ELI5/teen/grad depth + Socratic mode + study planner
const { useState: uT2, useEffect: uTE2, useRef: uTR2, useMemo: uTM2 } = React;

const DEPTHS = [
  { id:'eli5', label:'ELI5', note:'like I am 5' },
  { id:'teen', label:'Teen', note:'like I am 15' },
  { id:'default', label:'Normal', note:'default depth' },
  { id:'grad', label:'Grad', note:'grad school depth, use technical terms' },
];
const MODES = [
  { id:'direct', label:'Direct' },
  { id:'socratic', label:'Socratic' },
];

// Replace the old TutorDock with an enhanced version
const TutorDockV2 = ({ context, onClose }) => {
  const [tab, setTab] = uT2('chat');
  const [messages, setMessages] = uT2([]);
  const [input, setInput] = uT2('');
  const [loading, setLoading] = uT2(false);
  const [depth, setDepth] = uT2(() => localStorage.getItem('wk-depth') || 'default');
  const [mode, setMode] = uT2(() => localStorage.getItem('wk-mode') || 'direct');
  const scrollRef = uTR2(null);
  const inputRef = uTR2(null);

  uTE2(() => { localStorage.setItem('wk-depth', depth); }, [depth]);
  uTE2(() => { localStorage.setItem('wk-mode', mode); }, [mode]);
  uTE2(() => { inputRef.current?.focus(); }, []);
  uTE2(() => { scrollRef.current?.scrollTo({top:99999, behavior:'smooth'}); }, [messages, loading]);
  uTE2(() => {
    window.__tutorSeed = (prompt) => { setTab('chat'); setInput(prompt); setTimeout(()=>inputRef.current?.focus(),50); };
    return () => { window.__tutorSeed = null; };
  }, []);

  const ctxLabel = uTM2(() => {
    if (context.page === 'lesson' && context.lesson) return `Lesson · ${context.lesson.title}`;
    if (context.page === 'subject' && context.subject) return `Subject · ${context.subject.name}`;
    return 'Supergravity · Atlas';
  }, [context]);

  const systemContext = uTM2(() => {
    let s = 'You are a friendly, literary tutor inside Supergravity, an interactive learning atlas. Reply in 2–4 short paragraphs. Plain prose, no markdown bullets. Never say you are an AI. ';
    const depthNote = DEPTHS.find(d => d.id === depth)?.note;
    if (depth !== 'default') s += `Explain ${depthNote}. `;
    if (mode === 'socratic') s += 'Use the Socratic method — ask a guiding question back to the student rather than answering directly. Keep it to one or two probing questions. ';
    if (context.page === 'lesson' && context.lesson) s += `Student is reading "${context.lesson.title}": ${context.lesson.dek} `;
    else if (context.page === 'subject' && context.subject) s += `Student is browsing ${context.subject.name}: ${context.subject.desc} `;
    return s;
  }, [context, depth, mode]);

  const send = async (text) => {
    const prompt = (text ?? input).trim();
    if (!prompt || loading) return;
    const next = [...messages, { role: 'user', content: prompt }];
    setMessages(next); setInput(''); setLoading(true);
    try {
      const reply = await window.claude.complete({
        messages: [
          { role: 'user', content: systemContext + '\n\nStudent question: ' + prompt },
          ...next.slice(0, -1).map(m => ({ role: m.role, content: m.content })),
          { role: 'user', content: prompt },
        ],
      });
      setMessages([...next, { role: 'assistant', content: reply }]);
    } catch {
      setMessages([...next, { role: 'assistant', content: "I couldn't reach the library just now — try again in a moment." }]);
    } finally { setLoading(false); }
  };

  const quiz = async () => {
    setTab('chat');
    const topic = context.lesson?.title || context.subject?.name || 'a topic of your choice';
    setLoading(true);
    setMessages(m => [...m, { role: 'user', content: `Quiz me on ${topic}.` }]);
    try {
      const reply = await window.claude.complete({ messages: [{ role: 'user', content: systemContext + `\n\nGenerate ONE multiple-choice question about ${topic}. Format exactly:\n\nQUESTION: <q>\nA) <opt>\nB) <opt>\nC) <opt>\nD) <opt>\nANSWER: <letter>\nEXPLANATION: <1 sentence>` }] });
      setMessages(m => [...m, { role: 'assistant', content: reply, kind: 'quiz' }]);
    } finally { setLoading(false); }
  };

  const recommend = async () => {
    setTab('chat');
    setLoading(true);
    const visited = Object.keys(window.Progress?.load?.()?.visited || {});
    const subjectList = window.SUBJECTS.map(s => s.name).join(', ');
    const prompt = visited.length
      ? `Given a student has read these topics: ${visited.slice(0,12).join(', ')}. What one topic (from subjects: ${subjectList}) should they read next, and why? One short paragraph.`
      : `Suggest one great "first lesson" for someone new to the atlas. Pick from subjects: ${subjectList}. One short paragraph.`;
    setMessages(m => [...m, { role: 'user', content: 'What should I read next?' }]);
    try {
      const reply = await window.claude.complete({ messages: [{ role:'user', content: systemContext + '\n\n' + prompt }] });
      setMessages(m => [...m, { role: 'assistant', content: reply }]);
    } finally { setLoading(false); }
  };

  const suggestions = context.page === 'lesson' ? [
    { sym:'?', text:'Explain this like I just turned twelve.' },
    { sym:'⊕', text:'Quiz me on what I just read.' },
    { sym:'✦', text:'Connect this to something I already know.' },
    { sym:'→', text:'What should I read next?' },
  ] : context.page === 'subject' ? [
    { sym:'✦', text:'Give me a one-paragraph overview of this subject.' },
    { sym:'?', text:'Which topic here connects to the most others?' },
    { sym:'⊕', text:'What\'s a surprising fact from this field?' },
  ] : [
    { sym:'✦', text:'Design me a 30-day self-study path.' },
    { sym:'?', text:'What should I learn first if I want to understand AI?' },
    { sym:'⊕', text:'Quiz me on a random topic.' },
  ];

  return (
    <div className="tutor-dock">
      <div className="tutor-head">
        <div className="tutor-head-left">
          <div className="tutor-fab-orb" style={{ width: 20, height: 20 }}/>
          <div>
            <div className="tutor-head-name">Claude</div>
            <div className="tutor-head-sub">Tutor · {DEPTHS.find(d=>d.id===depth)?.label} · {mode === 'socratic' ? 'Socratic' : 'Direct'}</div>
          </div>
        </div>
        <button className="tutor-close" onClick={onClose}><Icon name="close" size={12}/></button>
      </div>

      <div className="tutor-modes">
        <span className="tutor-modes-lbl">Depth</span>
        {DEPTHS.map(d => (
          <button key={d.id} className={`tutor-mode-chip ${depth===d.id?'active':''}`} onClick={()=>setDepth(d.id)}>{d.label}</button>
        ))}
        <span style={{width:8}}/>
        <span className="tutor-modes-lbl">Mode</span>
        {MODES.map(m => (
          <button key={m.id} className={`tutor-mode-chip ${mode===m.id?'active':''}`} onClick={()=>setMode(m.id)}>{m.label}</button>
        ))}
      </div>

      <div className="tutor-tabs">
        <button className={`tutor-tab ${tab==='chat'?'active':''}`} onClick={()=>setTab('chat')}>Ask</button>
        <button className={`tutor-tab ${tab==='quiz'?'active':''}`} onClick={()=>{setTab('quiz'); quiz();}}>Quiz</button>
        <button className={`tutor-tab ${tab==='next'?'active':''}`} onClick={()=>{setTab('next'); recommend();}}>Next ↗</button>
        <button className={`tutor-tab ${tab==='deepen'?'active':''}`} onClick={()=>{setTab('deepen'); send('Go deeper — give me the next layer of nuance.');}}>Deeper</button>
      </div>

      <div className="tutor-body" ref={scrollRef}>
        {messages.length === 0 && (
          <>
            <div className="tutor-welcome">
              Ask me <span>anything</span> about what you're reading — explain, quiz, connect it to other fields, or plan a study path.
            </div>
            <div className="tutor-ctx"><Icon name="book" size={12}/> Context: <strong>{ctxLabel}</strong></div>
            <div className="tutor-suggest-title">Try asking</div>
            <div className="tutor-suggest">
              {suggestions.map((s, i) => (
                <button key={i} className="tutor-suggest-item" onClick={() => send(s.text)}>
                  <span className="sym">{s.sym}</span><span>{s.text}</span>
                </button>
              ))}
              <button className="tutor-suggest-item" onClick={() => send('I want to understand a specific subject in N weeks — help me design a custom plan. Ask me what subject and how many weeks, then produce a week-by-week plan referencing real topics from the atlas.')}>
                <span className="sym">✦</span><span>Design a custom study plan</span>
              </button>
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
        <textarea ref={inputRef} className="tutor-input" rows={1} value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
          placeholder="Ask about anything on this page…"/>
        <button className="tutor-send" onClick={() => send()} disabled={!input.trim() || loading}>
          <Icon name="send" size={14}/>
        </button>
      </div>
    </div>
  );
};
window.TutorDockV2 = TutorDockV2;
window.TutorDock = TutorDockV2; // override
