// ============================================
// Command Palette (⌘K), Flashcards, Progress
// ============================================

const { useState: useStateF, useEffect: useEffectF, useMemo: useMemoF, useRef: useRefF } = React;

// ---------- PROGRESS STORE ----------
window.Progress = {
  _key: 'wk-progress',
  load() {
    try { return JSON.parse(localStorage.getItem(this._key)) || { visited: {}, completed: {}, flashcards: {} }; }
    catch { return { visited: {}, completed: {}, flashcards: {} }; }
  },
  save(p) { try { localStorage.setItem(this._key, JSON.stringify(p)); } catch {} },
  markVisited(topicId) {
    const p = this.load();
    p.visited[topicId] = Date.now();
    this.save(p);
    window.dispatchEvent(new Event('wk-progress'));
  },
  markCompleted(topicId) {
    const p = this.load();
    p.completed[topicId] = Date.now();
    p.visited[topicId] = p.visited[topicId] || Date.now();
    this.save(p);
    window.dispatchEvent(new Event('wk-progress'));
  },
  rateFlashcard(id, rating) {
    const p = this.load();
    p.flashcards[id] = { rating, at: Date.now() };
    this.save(p);
    window.dispatchEvent(new Event('wk-progress'));
  },
};

const useProgress = () => {
  const [p, setP] = useStateF(window.Progress.load());
  useEffectF(() => {
    const h = () => setP(window.Progress.load());
    window.addEventListener('wk-progress', h);
    return () => window.removeEventListener('wk-progress', h);
  }, []);
  return p;
};
window.useProgress = useProgress;

// ---------- COMMAND PALETTE ----------
const CommandPalette = ({ open, onClose, onNav }) => {
  const [q, setQ] = useStateF('');
  const [idx, setIdx] = useStateF(0);
  const inputRef = useRefF();

  useEffectF(() => {
    if (open) {
      setQ(''); setIdx(0);
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [open]);

  const allTopics = useMemoF(() => {
    return window.SUBJECTS.flatMap(s =>
      s.groups.flatMap(g => g.topics.map(t => ({
        kind: 'topic',
        id: t.id,
        name: t.name,
        desc: t.desc,
        subject: s.name,
        subjectId: s.id,
        group: g.name,
        level: t.level,
      })))
    );
  }, []);

  const subjectsAsResults = useMemoF(() =>
    window.SUBJECTS.map(s => ({ kind: 'subject', id: s.id, name: s.name, desc: s.desc, subject: 'Subject' }))
  , []);

  const actions = [
    { kind: 'action', id: 'path', name: 'The Path', desc: 'Apprentice \u2192 Companion \u2192 Fellow', run: () => onNav({ page: 'path' }) },
    { kind: 'action', id: 'chapters', name: 'The NYC Chapter', desc: 'Events, masters, venues', run: () => onNav({ page: 'chapters' }) },
    { kind: 'action', id: 'rule', name: 'The Rule of Supergravity', desc: 'What we believe', run: () => onNav({ page: 'rule' }) },
    { kind: 'action', id: 'flashcards', name: 'Study Flashcards', desc: 'Practice what you\'ve learned', run: () => onNav({ page: 'flashcards' }) },
    { kind: 'action', id: 'progress', name: 'My Progress', desc: 'Review what you\'ve read', run: () => onNav({ page: 'progress' }) },
    { kind: 'action', id: 'tutor', name: 'Open the Tutor', desc: 'Ask anything', run: () => window.__openTutor?.({}) },
    { kind: 'action', id: 'health', name: 'Content health', desc: 'Stewards\u2019 diagnostics \u2014 errors, warnings, issues', run: () => onNav({ page: 'health' }) },
  ];

  const results = useMemoF(() => {
    const query = q.trim().toLowerCase();
    const pool = [...actions, ...subjectsAsResults, ...allTopics];
    if (!query) return pool.slice(0, 10);
    const scored = pool.map(r => {
      const hay = `${r.name} ${r.desc || ''} ${r.subject || ''}`.toLowerCase();
      let score = 0;
      if (r.name.toLowerCase().startsWith(query)) score += 100;
      if (r.name.toLowerCase().includes(query)) score += 50;
      if (hay.includes(query)) score += 10;
      return { r, score };
    }).filter(x => x.score > 0);
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 12).map(x => x.r);
  }, [q]);

  useEffectF(() => { setIdx(0); }, [q]);

  const pick = (r) => {
    onClose();
    if (r.kind === 'topic') onNav({ page: 'lesson', topicId: r.id, subjectId: r.subjectId });
    else if (r.kind === 'subject') onNav({ page: 'subject', subjectId: r.id });
    else if (r.kind === 'action') r.run();
  };

  if (!open) return null;

  return (
    <div className="palette-backdrop" onClick={onClose}>
      <div className="palette" onClick={e => e.stopPropagation()}>
        <div className="palette-input-row">
          <Icon name="search" size={14}/>
          <input
            ref={inputRef}
            value={q}
            onChange={e => setQ(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'ArrowDown') { e.preventDefault(); setIdx(i => Math.min(results.length - 1, i + 1)); }
              if (e.key === 'ArrowUp') { e.preventDefault(); setIdx(i => Math.max(0, i - 1)); }
              if (e.key === 'Enter' && results[idx]) { e.preventDefault(); pick(results[idx]); }
            }}
            placeholder="Search topics, subjects, actions…"
          />
          <kbd>esc</kbd>
        </div>
        <div className="palette-results">
          {results.length === 0 && (
            <div className="palette-empty">
              <div>No matches for <strong>"{q}"</strong></div>
              <button className="btn-ghost" style={{ marginTop: 12 }} onClick={() => { onClose(); window.__openTutor?.({ prompt: `Tell me about ${q}.` }); }}>
                <Icon name="sparkle" size={12}/> Ask Claude instead
              </button>
            </div>
          )}
          {results.map((r, i) => (
            <button key={r.kind + r.id} className={`palette-item ${i === idx ? 'active' : ''}`} onClick={() => pick(r)} onMouseEnter={() => setIdx(i)}>
              <div className="palette-item-icon">
                {r.kind === 'topic' ? <Icon name="book" size={14}/> :
                 r.kind === 'subject' ? <Icon name="grid" size={14}/> :
                 <Icon name="sparkle" size={14}/>}
              </div>
              <div className="palette-item-body">
                <div className="palette-item-name">{r.name}</div>
                <div className="palette-item-desc">{r.desc}</div>
              </div>
              <div className="palette-item-tag mono">
                {r.kind === 'topic' ? r.subject : r.kind === 'subject' ? 'Subject' : 'Action'}
              </div>
            </button>
          ))}
        </div>
        <div className="palette-foot mono">
          <span>↑↓ navigate</span>
          <span>⏎ select</span>
          <span>esc close</span>
        </div>
      </div>
    </div>
  );
};
window.CommandPalette = CommandPalette;

// ---------- FLASHCARDS PAGE ----------
const FLASHCARD_DECK = [
  { id: 'f1', subject: 'Math', q: "What is the derivative of sin(x)?", a: "cos(x)" },
  { id: 'f2', subject: 'Math', q: "What does the quadratic formula solve?", a: "Any equation of the form ax² + bx + c = 0." },
  { id: 'f3', subject: 'Science', q: "State Newton's Second Law.", a: "Force equals mass times acceleration: F = ma." },
  { id: 'f4', subject: 'Science', q: "What are the four ingredients of natural selection?", a: "Variation, heredity, differential reproduction, and time." },
  { id: 'f5', subject: 'Science', q: "What molecule carries genetic information?", a: "DNA — a double helix of four bases (A, T, C, G)." },
  { id: 'f6', subject: 'Science', q: "What does the Second Law of Thermodynamics say?", a: "Entropy never decreases in a closed system." },
  { id: 'f7', subject: 'History', q: "What were the three main offices on Rome's cursus honorum (in order)?", a: "Quaestor, praetor, consul — each one year, held in pairs." },
  { id: 'f8', subject: 'History', q: "What technology spread with Renaissance painting?", a: "Linear perspective — the geometric rule for putting three dimensions on a flat surface." },
  { id: 'f9', subject: 'Literature', q: "What rhythm is iambic pentameter?", a: "Ten syllables per line, alternating unstressed-stressed: da-DUM × 5." },
  { id: 'f10', subject: 'Literature', q: "What is the hinge act in a five-act Shakespeare play?", a: "Act Three — the point of no return." },
  { id: 'f11', subject: 'CS', q: "What is O(n log n) famously the complexity of?", a: "The fastest comparison-based sorting algorithms (merge sort, heap sort)." },
  { id: 'f12', subject: 'CS', q: "What 2017 paper launched the transformer era?", a: "\"Attention Is All You Need.\"" },
  { id: 'f13', subject: 'Math', q: "What does an eigenvector of a matrix represent?", a: "A direction the matrix preserves — only stretched, not rotated." },
  { id: 'f14', subject: 'Science', q: "What makes two slits produce an interference pattern?", a: "The wave nature of light — crests and troughs adding or cancelling." },
  { id: 'f15', subject: 'Music', q: "What form dominated Baroque composition?", a: "The fugue — a subject stated and imitated across multiple voices." },
];

const FlashcardsPage = ({ onNav }) => {
  const [i, setI] = useStateF(0);
  const [flipped, setFlipped] = useStateF(false);
  const [filter, setFilter] = useStateF('All');
  const progress = useProgress();

  const deck = useMemoF(() => filter === 'All' ? FLASHCARD_DECK : FLASHCARD_DECK.filter(c => c.subject === filter), [filter]);
  const card = deck[i % deck.length];
  const subjects = ['All', ...new Set(FLASHCARD_DECK.map(c => c.subject))];

  const rate = (rating) => {
    window.Progress.rateFlashcard(card.id, rating);
    setFlipped(false);
    setI(x => (x + 1) % deck.length);
  };

  const seen = Object.keys(progress.flashcards || {}).length;

  return (
    <div className="flashcards-page" data-screen-label="flashcards">
      <div className="lesson-meta" style={{ maxWidth: 800, margin: '0 auto', padding: '24px 48px' }}>
        <span>Study</span><span>·</span><span>{deck.length} cards</span><span>·</span><span>{seen} reviewed</span>
      </div>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 48px 60px' }}>
        <div style={{ padding: '20px 0 32px', borderBottom: '1px solid var(--rule)' }}>
          <div className="eyebrow" style={{ marginBottom: 14 }}>Flashcard study mode</div>
          <h1 className="serif" style={{ fontSize: 56, lineHeight: 0.95 }}>Test yourself.</h1>
          <div className="dek" style={{ fontSize: 17, color: 'var(--ink-2)', marginTop: 12, maxWidth: 520 }}>
            Spaced practice across every subject. Click the card to flip, rate yourself, move on.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, margin: '24px 0', flexWrap: 'wrap' }}>
          {subjects.map(s => (
            <button key={s} onClick={() => { setFilter(s); setI(0); setFlipped(false); }}
              style={{
                padding: '6px 14px', fontSize: 12, borderRadius: 999,
                background: filter === s ? 'var(--ink)' : 'var(--paper-2)',
                color: filter === s ? 'var(--paper)' : 'var(--ink-3)',
              }}>{s}</button>
          ))}
        </div>

        <div className="flashcard-stage" onClick={() => setFlipped(f => !f)}>
          <div className={`flashcard ${flipped ? 'flipped' : ''}`}>
            <div className="flashcard-face flashcard-front">
              <div className="mono" style={{ color: 'var(--ink-3)' }}>{card.subject} · Question {i + 1} / {deck.length}</div>
              <div className="serif" style={{ fontSize: 34, lineHeight: 1.2, textAlign: 'center', padding: '0 20px', maxWidth: 600 }}>{card.q}</div>
              <div className="mono" style={{ color: 'var(--ink-3)' }}>Click to reveal →</div>
            </div>
            <div className="flashcard-face flashcard-back">
              <div className="mono" style={{ color: 'var(--amber)' }}>Answer</div>
              <div className="serif" style={{ fontSize: 26, lineHeight: 1.35, textAlign: 'center', padding: '0 20px', maxWidth: 600, fontStyle: 'italic' }}>{card.a}</div>
              <div className="mono" style={{ color: 'var(--ink-3)' }}>Rate your recall ↓</div>
            </div>
          </div>
        </div>

        {flipped && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginTop: 20 }}>
            <button className="flashcard-rate" style={{ borderColor: '#6b2a3a' }} onClick={() => rate('again')}>
              <div className="serif" style={{ fontSize: 20 }}>Again</div>
              <div className="mono" style={{ color: 'var(--ink-3)', marginTop: 4 }}>Didn't know it</div>
            </button>
            <button className="flashcard-rate" style={{ borderColor: '#8b6b3a' }} onClick={() => rate('hard')}>
              <div className="serif" style={{ fontSize: 20 }}>Hard</div>
              <div className="mono" style={{ color: 'var(--ink-3)', marginTop: 4 }}>Struggled</div>
            </button>
            <button className="flashcard-rate" style={{ borderColor: '#4a5d3a' }} onClick={() => rate('easy')}>
              <div className="serif" style={{ fontSize: 20 }}>Easy</div>
              <div className="mono" style={{ color: 'var(--ink-3)', marginTop: 4 }}>Got it</div>
            </button>
          </div>
        )}

        <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between' }}>
          <button className="btn-ghost" onClick={() => { setI(x => (x - 1 + deck.length) % deck.length); setFlipped(false); }}><Icon name="arrowLeft" size={12}/> Previous</button>
          <button className="btn-ghost" onClick={() => window.__openTutor?.({ prompt: `Explain the answer to this flashcard in more depth: Q: ${card.q} A: ${card.a}` })}>
            <Icon name="sparkle" size={12}/> Ask Claude to elaborate
          </button>
          <button className="btn-ghost" onClick={() => { setI(x => (x + 1) % deck.length); setFlipped(false); }}>Next <Icon name="arrow" size={12}/></button>
        </div>
      </div>
    </div>
  );
};
window.FlashcardsPage = FlashcardsPage;

// ---------- PROGRESS PAGE ----------
const ProgressPage = ({ onNav }) => {
  const progress = useProgress();
  const visitedIds = Object.keys(progress.visited || {});
  const completedIds = Object.keys(progress.completed || {});
  const flashcards = progress.flashcards || {};

  const allTopics = useMemoF(() => window.SUBJECTS.flatMap(s => s.groups.flatMap(g => g.topics.map(t => ({ ...t, subjectId: s.id, subjectName: s.name })))), []);
  const visitedTopics = visitedIds.map(id => allTopics.find(t => t.id === id)).filter(Boolean)
    .sort((a, b) => (progress.visited[b.id] || 0) - (progress.visited[a.id] || 0));

  const bySubject = {};
  window.SUBJECTS.forEach(s => {
    const topicIds = s.groups.flatMap(g => g.topics.map(t => t.id));
    const v = topicIds.filter(id => progress.visited[id]).length;
    bySubject[s.id] = { total: topicIds.length, visited: v, subject: s };
  });

  const totalVisited = visitedIds.length;
  const totalTopics = allTopics.length;
  const pct = Math.round((totalVisited / totalTopics) * 100);
  const flashCount = Object.keys(flashcards).length;
  const easyCount = Object.values(flashcards).filter(f => f.rating === 'easy').length;

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px' }} data-screen-label="progress">
      <div className="eyebrow">Your ledger</div>
      <h1 className="serif" style={{ fontSize: 80, lineHeight: 0.95, marginTop: 16, letterSpacing: '-0.03em' }}>
        What you've<br/><em style={{ color: 'var(--amber)' }}>learned.</em>
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, marginTop: 48, border: '1px solid var(--rule)' }}>
        {[
          { num: totalVisited, lbl: 'Topics visited', sub: `of ${totalTopics}` },
          { num: completedIds.length, lbl: 'Lessons completed' },
          { num: flashCount, lbl: 'Flashcards reviewed' },
          { num: easyCount, lbl: 'Marked easy' },
        ].map((s, i) => (
          <div key={i} style={{ padding: '28px 24px', borderRight: i < 3 ? '1px solid var(--rule)' : 'none' }}>
            <div className="serif" style={{ fontSize: 56, lineHeight: 1, color: 'var(--ink)' }}>{s.num}</div>
            <div className="mono" style={{ color: 'var(--ink-3)', marginTop: 10 }}>{s.lbl}</div>
            {s.sub && <div className="mono" style={{ color: 'var(--ink-4)', marginTop: 4 }}>{s.sub}</div>}
          </div>
        ))}
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 60, marginBottom: 20, paddingBottom: 14, borderBottom: '1px solid var(--rule)' }}>By subject</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        {Object.values(bySubject).map(({ subject, visited, total }) => {
          const p = (visited / total) * 100;
          return (
            <div key={subject.id} onClick={() => onNav({ page: 'subject', subjectId: subject.id })} style={{ padding: 20, border: '1px solid var(--rule)', background: 'var(--paper)', cursor: 'pointer' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div className="serif" style={{ fontSize: 22 }}>{subject.name}</div>
                <div className="mono" style={{ color: 'var(--ink-3)' }}>{visited}/{total}</div>
              </div>
              <div style={{ height: 4, background: 'var(--paper-3)', marginTop: 14, position: 'relative' }}>
                <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: `${p}%`, background: window.SUBJECT_HEX[subject.id], transition: 'width 0.5s' }}/>
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="serif" style={{ fontSize: 32, marginTop: 60, marginBottom: 20, paddingBottom: 14, borderBottom: '1px solid var(--rule)' }}>Recently studied</h2>
      {visitedTopics.length === 0 ? (
        <div style={{ padding: 40, background: 'var(--paper-2)', textAlign: 'center', color: 'var(--ink-3)' }}>
          Nothing here yet — open a lesson and your path starts recording.
        </div>
      ) : (
        <div>
          {visitedTopics.slice(0, 10).map(t => (
            <div key={t.id} onClick={() => onNav({ page: 'lesson', topicId: t.id, subjectId: t.subjectId })}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 0', borderBottom: '1px solid var(--rule-soft)', cursor: 'pointer' }}>
              <div>
                <div className="serif" style={{ fontSize: 20 }}>{t.name}</div>
                <div className="mono" style={{ color: 'var(--ink-3)', marginTop: 4 }}>{t.subjectName} · {t.level}</div>
              </div>
              <div className="mono" style={{ color: 'var(--ink-3)' }}>
                {progress.completed[t.id] ? '✓ completed' : 'visited'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
window.ProgressPage = ProgressPage;

Object.assign(window, { CommandPalette, FlashcardsPage, ProgressPage, useProgress });
