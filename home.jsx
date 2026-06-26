// ============================================
// HomePage — personal dashboard for signed-in users
// Focus: productivity · happiness · learning · lifestyle
// ============================================

const { useState: useStateH, useEffect: useEffectH, useRef: useRefH, useMemo: useMemoH } = React;

// ---------- small helpers ----------
const todayKey = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
};
const loadJSON = (k, fallback) => {
  try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
};
const saveJSON = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
const greet = () => {
  const h = new Date().getHours();
  if (h < 5) return 'Working late';
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  if (h < 21) return 'Good evening';
  return 'Winding down';
};
const dayLabel = () => {
  const d = new Date();
  return d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
};

// ============================================
// Hero greeting strip
// ============================================
const HomeHello = ({ user, mood, onMood }) => {
  const moods = [
    { id: 'glow',  label: 'Glowing',  sym: '✦' },
    { id: 'calm',  label: 'Calm',     sym: '◐' },
    { id: 'focus', label: 'Focused',  sym: '◉' },
    { id: 'tired', label: 'Tired',    sym: '◌' },
    { id: 'anx',   label: 'Anxious',  sym: '◎' },
  ];
  return (
    <section className="home-hello">
      <div className="home-hello-l">
        <div className="home-date">{dayLabel()}</div>
        <h1 className="home-greet">{greet()}, {user.given}.</h1>
        <p className="home-sub">A few quiet minutes here will ripple through the rest of the day.</p>
      </div>
      <div className="home-hello-r">
        <div className="home-mood-label">How are you arriving today?</div>
        <div className="home-mood-row">
          {moods.map(m => (
            <button
              key={m.id}
              className={'home-mood' + (mood === m.id ? ' on' : '')}
              onClick={() => onMood(m.id)}
            >
              <span className="home-mood-sym">{m.sym}</span>
              <span>{m.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// Focus timer (pomodoro-ish, gentle)
// ============================================
const FocusTimer = () => {
  const PRESETS = [
    { id: 'deep',   label: 'Deep work',    mins: 50 },
    { id: 'pomo',   label: 'Pomodoro',     mins: 25 },
    { id: 'sprint', label: 'Sprint',       mins: 15 },
    { id: 'rest',   label: 'Rest',         mins: 5  },
  ];
  const [preset, setPreset] = useStateH(PRESETS[1]);
  const [seconds, setSeconds] = useStateH(25 * 60);
  const [running, setRunning] = useStateH(false);
  const intent = useRefH('Read one lesson attentively.');
  const [intentText, setIntentText] = useStateH(() => loadJSON('sg-focus-intent', 'Read one lesson attentively.'));
  useEffectH(() => saveJSON('sg-focus-intent', intentText), [intentText]);

  useEffectH(() => {
    if (!running) return;
    const id = setInterval(() => {
      setSeconds(s => {
        if (s <= 1) { setRunning(false); return 0; }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running]);

  const pick = (p) => { setPreset(p); setSeconds(p.mins * 60); setRunning(false); };
  const reset = () => { setSeconds(preset.mins * 60); setRunning(false); };
  const pct = 1 - seconds / (preset.mins * 60);
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');

  return (
    <div className="home-card home-focus">
      <div className="home-card-head">
        <h3>Focus session</h3>
        <span className="home-card-tag">Productivity</span>
      </div>
      <div className="home-focus-dial">
        <svg viewBox="0 0 120 120" width="160" height="160">
          <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(60,30,15,0.1)" strokeWidth="4"/>
          <circle
            cx="60" cy="60" r="52" fill="none"
            stroke="oklch(62% 0.16 38)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={`${pct * 326.7} 326.7`}
            transform="rotate(-90 60 60)"
            style={{ transition: 'stroke-dasharray 1s linear' }}
          />
        </svg>
        <div className="home-focus-time">
          <div className="home-focus-big">{mm}:{ss}</div>
          <div className="home-focus-preset">{preset.label}</div>
        </div>
      </div>
      <div className="home-focus-presets">
        {PRESETS.map(p => (
          <button key={p.id} className={'home-chip' + (preset.id === p.id ? ' on' : '')} onClick={() => pick(p)}>
            {p.label} · {p.mins}m
          </button>
        ))}
      </div>
      <label className="home-intent-label">Intention for this session</label>
      <input
        className="home-intent-input"
        value={intentText}
        onChange={(e) => setIntentText(e.target.value)}
        placeholder="What's the one thing?"
      />
      <div className="home-focus-actions">
        <button className="home-btn primary" onClick={() => setRunning(r => !r)}>
          {running ? 'Pause' : seconds === 0 ? 'Done ✓' : 'Begin'}
        </button>
        <button className="home-btn quiet" onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

// ============================================
// Gratitude journal (3 things)
// ============================================
const Gratitude = () => {
  const [entries, setEntries] = useStateH(() => loadJSON(`sg-grat-${todayKey()}`, ['', '', '']));
  useEffectH(() => saveJSON(`sg-grat-${todayKey()}`, entries), [entries]);
  const filled = entries.filter(e => e.trim().length > 0).length;
  const prompts = [
    'a small pleasure',
    'a person who made today better',
    'something your body did for you',
  ];
  return (
    <div className="home-card home-grat">
      <div className="home-card-head">
        <h3>Three small graces</h3>
        <span className="home-card-tag happiness">Happiness</span>
      </div>
      <div className="home-grat-sub">What went gently right today? {filled}/3</div>
      {entries.map((e, i) => (
        <div className="home-grat-row" key={i}>
          <span className="home-grat-num">{i + 1}</span>
          <input
            value={e}
            placeholder={prompts[i]}
            onChange={(ev) => {
              const next = [...entries]; next[i] = ev.target.value; setEntries(next);
            }}
          />
          {e.trim() && <span className="home-grat-check">✓</span>}
        </div>
      ))}
    </div>
  );
};

// ============================================
// Breathing box — 4-4-4-4 animated
// ============================================
const Breathing = () => {
  const [t, setT] = useStateH(0);
  const [running, setRunning] = useStateH(false);
  useEffectH(() => {
    if (!running) return;
    let raf, start = performance.now();
    const step = (now) => { setT((now - start) / 1000); raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [running]);
  const cycle = t % 16;
  let phase = 'Inhale', size = 40, inst = 'Breathe in through the nose';
  if (cycle < 4) { size = 40 + (cycle / 4) * 120; phase = 'Inhale'; inst = 'Fill slowly, 4 counts'; }
  else if (cycle < 8) { size = 160; phase = 'Hold'; inst = 'Hold gently, 4 counts'; }
  else if (cycle < 12) { size = 160 - ((cycle - 8) / 4) * 120; phase = 'Exhale'; inst = 'Release through the mouth'; }
  else { size = 40; phase = 'Rest'; inst = 'Empty pause, 4 counts'; }
  const countdown = 4 - Math.floor(cycle % 4);

  return (
    <div className="home-card home-breath">
      <div className="home-card-head">
        <h3>Box breathing</h3>
        <span className="home-card-tag happiness">Happiness</span>
      </div>
      <div className="home-breath-stage">
        <div
          className="home-breath-orb"
          style={{ width: size, height: size, opacity: running ? 1 : 0.35 }}
        />
        <div className="home-breath-text">
          <div className="home-breath-phase">{phase}</div>
          {running && <div className="home-breath-count">{countdown}</div>}
        </div>
      </div>
      <div className="home-breath-inst">{running ? inst : '4 seconds in, hold, out, rest. Repeat for calm.'}</div>
      <button className="home-btn primary wide" onClick={() => { setRunning(r => !r); if (!running) setT(0); }}>
        {running ? 'End session' : 'Begin breathing'}
      </button>
    </div>
  );
};

// ============================================
// Learning: continue + recommendations
// ============================================
const ContinueLearning = ({ onNav }) => {
  const recs = useMemoH(() => {
    const all = (window.SUBJECTS || []).flatMap(s =>
      s.groups.flatMap(g => g.topics.map(t => ({ ...t, subject: s })))
    );
    // Seeded pseudo-random selection for stability
    const seed = todayKey().charCodeAt(8) || 3;
    return all.slice(seed % Math.max(1, all.length - 6), (seed % Math.max(1, all.length - 6)) + 4);
  }, []);
  const continueLesson = recs[0];

  return (
    <div className="home-card home-learn wide">
      <div className="home-card-head">
        <h3>Today's curriculum</h3>
        <span className="home-card-tag learning">Learning</span>
      </div>

      {continueLesson && (
        <div className="home-continue" onClick={() => onNav({ page: 'lesson', subjectId: continueLesson.subject.id, topicId: continueLesson.id })}>
          <div className="home-continue-eyebrow">Continue where you left off</div>
          <div className="home-continue-title">{continueLesson.name}</div>
          <div className="home-continue-meta">
            <span>{continueLesson.subject.name}</span>
            <span>·</span>
            <span>{continueLesson.level || 'Beginner'}</span>
            <span>·</span>
            <span>3 of 8 sections</span>
          </div>
          <div className="home-continue-bar"><div style={{ width: '37%' }}/></div>
          <button className="home-btn ghost">Resume →</button>
        </div>
      )}

      <div className="home-rec-head">Recommended for your afternoon</div>
      <div className="home-rec-grid">
        {recs.slice(1).map(r => (
          <div
            key={r.id}
            className="home-rec"
            onClick={() => onNav({ page: 'lesson', subjectId: r.subject.id, topicId: r.id })}
          >
            <div className="home-rec-subj">{r.subject.name}</div>
            <div className="home-rec-title">{r.name}</div>
            <div className="home-rec-meta">{r.level || 'Beginner'} · ~12 min</div>
          </div>
        ))}
      </div>

      <div className="home-learn-foot">
        <button className="home-btn quiet" onClick={() => onNav({ page: 'workshop' })}>◫ Workshop →</button>
        <button className="home-btn quiet" onClick={() => onNav({ page: 'daily' })}>Daily brief</button>
        <button className="home-btn quiet" onClick={() => onNav({ page: 'random' })}>Surprise me</button>
        <button className="home-btn quiet" onClick={() => onNav({ page: 'atlas' })}>Full atlas</button>
      </div>
    </div>
  );
};

// ============================================
// Habit tracker (7-day)
// ============================================
const Habits = () => {
  const defaults = [
    { id: 'learn', label: 'Learn 15 min',   sym: '◇' },
    { id: 'walk',  label: 'Walk outside',   sym: '↗' },
    { id: 'water', label: 'Drink water',    sym: '◌' },
    { id: 'sleep', label: 'Sleep by 11pm',  sym: '◐' },
    { id: 'read',  label: 'Read 10 pages',  sym: '❏' },
  ];
  const [state, setState] = useStateH(() => loadJSON('sg-habits', {}));
  const days = useMemoH(() => {
    const arr = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(); d.setDate(d.getDate() - i);
      arr.push({
        key: `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`,
        label: d.toLocaleDateString('en-US', { weekday: 'short' })[0],
        num: d.getDate(),
        isToday: i === 0,
      });
    }
    return arr;
  }, []);
  const toggle = (habit, day) => {
    const k = `${day}:${habit}`;
    const next = { ...state, [k]: !state[k] };
    setState(next);
    saveJSON('sg-habits', next);
  };
  return (
    <div className="home-card home-habits">
      <div className="home-card-head">
        <h3>Small habits</h3>
        <span className="home-card-tag lifestyle">Lifestyle</span>
      </div>
      <div className="home-habit-grid">
        <div/>
        {days.map(d => (
          <div key={d.key} className={'home-habit-day' + (d.isToday ? ' today' : '')}>
            <div className="hd-l">{d.label}</div>
            <div className="hd-n">{d.num}</div>
          </div>
        ))}
        {defaults.map(h => (
          <React.Fragment key={h.id}>
            <div className="home-habit-name"><span className="sym">{h.sym}</span>{h.label}</div>
            {days.map(d => {
              const on = state[`${d.key}:${h.id}`];
              return (
                <button
                  key={d.key}
                  className={'home-habit-cell' + (on ? ' on' : '') + (d.isToday ? ' today' : '')}
                  onClick={() => toggle(h.id, d.key)}
                  aria-label={`${h.label} on ${d.key}`}
                />
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// ============================================
// Streak + stats card
// ============================================
const StreakCard = () => {
  // fake but plausible values
  const stats = [
    { label: 'Streak', value: '12', unit: 'days', tone: 'warm' },
    { label: 'This week', value: '4.2', unit: 'hrs', tone: 'cool' },
    { label: 'Lessons', value: '38', unit: 'done', tone: 'moss' },
    { label: 'Flashcards', value: '214', unit: 'cards', tone: 'plum' },
  ];
  return (
    <div className="home-card home-stats">
      <div className="home-card-head">
        <h3>Your rhythm</h3>
        <span className="home-card-tag learning">Learning</span>
      </div>
      <div className="home-stats-grid">
        {stats.map(s => (
          <div key={s.label} className={'home-stat tone-' + s.tone}>
            <div className="home-stat-v">{s.value}</div>
            <div className="home-stat-u">{s.unit}</div>
            <div className="home-stat-l">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="home-week">
        <div className="home-week-label">Last 14 days</div>
        <div className="home-week-bars">
          {Array.from({ length: 14 }, (_, i) => {
            const h = [30, 60, 45, 20, 80, 55, 0, 70, 90, 40, 65, 85, 50, 72][i];
            return <div key={i} className="home-week-bar" style={{ height: `${h}%` }}/>;
          })}
        </div>
      </div>
    </div>
  );
};

// ============================================
// Quote / word of the day
// ============================================
const WordOfTheDay = () => {
  const words = [
    { w: 'saudade', pos: 'n. Portuguese', d: 'a deep, melancholic longing for something absent — a person, a place, a time you can never return to.' },
    { w: 'meraki', pos: 'n. Greek', d: 'doing something with soul, creativity, love; leaving a piece of yourself in the work.' },
    { w: 'komorebi', pos: 'n. Japanese', d: 'the scattered sunlight that filters through the leaves of trees.' },
    { w: 'hygge', pos: 'n. Danish', d: 'the feeling of cozy contentment — candles, warm socks, a quiet hour with someone dear.' },
    { w: 'mamihlapinatapai', pos: 'n. Yaghan', d: 'a look shared by two who both wish the other would begin something they both desire but neither will start.' },
  ];
  const idx = todayKey().charCodeAt(9) % words.length;
  const { w, pos, d } = words[idx];
  return (
    <div className="home-card home-word">
      <div className="home-card-head">
        <h3>Word for today</h3>
        <span className="home-card-tag">Learning</span>
      </div>
      <div className="home-word-w">{w}</div>
      <div className="home-word-pos">{pos}</div>
      <div className="home-word-d">{d}</div>
    </div>
  );
};

// ============================================
// Evening reflection
// ============================================
const EveningReflection = () => {
  const key = `sg-reflect-${todayKey()}`;
  const [text, setText] = useStateH(() => loadJSON(key, ''));
  useEffectH(() => saveJSON(key, text), [text, key]);
  const prompts = [
    'What surprised you today?',
    'What did you learn that you want to keep?',
    'Who deserves a thank-you?',
    'What drained you? What filled you?',
    'What will tomorrow-you thank today-you for?',
  ];
  const idx = todayKey().charCodeAt(6) % prompts.length;
  return (
    <div className="home-card home-reflect">
      <div className="home-card-head">
        <h3>Evening reflection</h3>
        <span className="home-card-tag happiness">Happiness</span>
      </div>
      <div className="home-reflect-prompt">{prompts[idx]}</div>
      <textarea
        className="home-reflect-text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="A few sentences is enough…"
        rows={5}
      />
      <div className="home-reflect-meta">
        {text.trim() ? `${text.trim().split(/\s+/).length} words · saved` : 'Auto-saves as you type'}
      </div>
    </div>
  );
};

// ============================================
// Tutor nudge card
// ============================================
const TutorNudge = () => (
  <div className="home-card home-tutor-nudge">
    <div className="home-tn-glow"/>
    <div className="home-tn-eyebrow">Tutor</div>
    <div className="home-tn-title">Ask anything, get a patient, plain-English answer.</div>
    <div className="home-tn-body">
      Claude is standing by to explain, quiz, or think alongside you. Press <kbd>⌘J</kbd> any time, or start with a question.
    </div>
    <div className="home-tn-actions">
      <button className="home-btn primary" onClick={() => window.__openTutor?.()}>Open tutor</button>
      <button className="home-btn quiet" onClick={() => window.__openTutor?.({ prompt: 'Make me a 20-minute study plan for today.' })}>Plan my 20 min</button>
      <button className="home-btn quiet" onClick={() => window.__openTutor?.({ prompt: 'Teach me something I probably don\'t know.' })}>Surprise me</button>
    </div>
  </div>
);

// ============================================
// Root HomePage
// ============================================
const HomePage = ({ user, onNav }) => {
  const [mood, setMood] = useStateH(() => loadJSON(`sg-mood-${todayKey()}`, null));
  useEffectH(() => { if (mood) saveJSON(`sg-mood-${todayKey()}`, mood); }, [mood]);

  return (
    <div className="home-page">
      <HomeHello user={user} mood={mood} onMood={setMood}/>

      <div className="home-grid">
        {/* Row 1: continue learning (wide) + focus */}
        <ContinueLearning onNav={onNav}/>
        <FocusTimer/>

        {/* Row 2: stats + tutor + breathing */}
        <StreakCard/>
        <TutorNudge/>
        <Breathing/>

        {/* Row 3: gratitude + habits + word */}
        <Gratitude/>
        <Habits/>
        <WordOfTheDay/>

        {/* Row 4: evening reflection full width */}
        <EveningReflection/>
      </div>
    </div>
  );
};
window.HomePage = HomePage;
