// ============================================
// PAGE COMPONENTS
// ============================================

const { useState: useStateP, useMemo: useMemoP } = React;

// ---------- ATLAS (HOME) ----------
const AtlasPage = ({ onNav }) => {
  return (
    <div className="atlas" data-screen-label="atlas">
      <section className="atlas-hero">
        <div>
          <div className="eyebrow">Edition MMXXVI · Vol. 01</div>
          <h1 style={{ marginTop: 20 }}>
            Every subject,<br/>
            <em>one atlas.</em>
          </h1>
        </div>
        <div className="atlas-hero-meta">
          <p>A living encyclopedia of school and beyond — eight subjects, three hundred and twelve topics, each opening into interactive lessons, visualizations, and a tutor who never tires of your questions.</p>
          <p style={{ color: 'var(--ink-2)' }}>Built for the curious of any age.</p>
          <div className="atlas-stats">
            <div>
              <div className="stat-num serif">8</div>
              <div className="stat-lbl">Core Subjects</div>
            </div>
            <div>
              <div className="stat-num serif">312</div>
              <div className="stat-lbl">Topics</div>
            </div>
            <div>
              <div className="stat-num serif">1.4k</div>
              <div className="stat-lbl">Lessons</div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-header">
        <div>
          <div className="eyebrow">§ I</div>
          <h2 className="serif">The Eight Subjects</h2>
        </div>
        <div className="section-header-right">
          <button className="btn-ghost"><Icon name="grid" size={12}/> Grid</button>
          <button className="btn-ghost"><Icon name="tree" size={12}/> Tree view</button>
        </div>
      </div>

      <div className="subject-grid">
        {window.SUBJECTS.map(s => (
          <div key={s.id} className="subject-card" onClick={() => onNav({ page: 'subject', subjectId: s.id })} style={{ '--accent': s.accent }}>
            <div className="sc-accent"/>
            <div className="sc-head">
              <span className="sc-num">№ {s.num}</span>
              <span className="sc-count">{s.topicCount} topics</span>
            </div>
            <div className="sc-viz"><SubjectViz kind={s.viz} color={window.SUBJECT_HEX[s.id]}/></div>
            <div>
              <div className="sc-name">{s.name}</div>
              <div className="sc-tag">— {s.tag}</div>
            </div>
          </div>
        ))}
      </div>

      <section className="featured">
        <div className="featured-body">
          <div className="eyebrow">Tutor Mode</div>
          <h2 className="serif">Claude reads along with you.</h2>
          <p>
            Every lesson carries an AI tutor who sees exactly what you see. Highlight a sentence to ask about it. Request a quiz on what you just read. Ask for the history of an idea, or the math underneath a metaphor — as many times as you like, at whatever depth you want.
          </p>
          <button className="btn-primary" onClick={() => window.__openTutor?.({ prompt: 'Give me a tour of what you can do here.' })}>
            <Icon name="sparkle" size={12}/> Meet Claude
          </button>
        </div>
        <div className="featured-visual">
          <svg viewBox="0 0 400 280" width="100%" height="100%">
            <defs>
              <radialGradient id="orb" cx="30%" cy="30%">
                <stop offset="0%" stopColor="#e09a5a"/>
                <stop offset="60%" stopColor="#c8621a"/>
                <stop offset="100%" stopColor="#6b2a0a"/>
              </radialGradient>
            </defs>
            <circle cx="200" cy="140" r="70" fill="url(#orb)"/>
            <circle cx="200" cy="140" r="90" fill="none" stroke="rgba(224,154,90,0.3)" strokeDasharray="2 4"/>
            <circle cx="200" cy="140" r="120" fill="none" stroke="rgba(224,154,90,0.15)" strokeDasharray="1 6"/>
            {[0, 72, 144, 216, 288].map(a => {
              const rad = (a * Math.PI) / 180;
              return <circle key={a} cx={200 + 90 * Math.cos(rad)} cy={140 + 90 * Math.sin(rad)} r="3" fill="#e09a5a"/>
            })}
            <text x="200" y="260" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgba(244,239,230,0.5)" letterSpacing="3">
              CONTEXT · QUESTION · ANSWER
            </text>
          </svg>
        </div>
      </section>

      <div className="section-header">
        <div>
          <div className="eyebrow">§ II</div>
          <h2 className="serif">Curated Pathways</h2>
        </div>
      </div>
      <div className="pathways">
        <div className="pathway" onClick={() => onNav({ page: 'subject', subjectId: 'science' })}>
          <div className="pathway-num">I</div>
          <h3 className="serif">How the Universe Works</h3>
          <div className="pathway-desc">From atoms to galaxies. Physics, chemistry, and the cosmos, in twelve steps.</div>
          <div className="pathway-meta">
            <span>12 lessons</span><span>·</span><span>~4 hours</span><span>·</span><span>Beginner friendly</span>
          </div>
        </div>
        <div className="pathway" onClick={() => onNav({ page: 'subject', subjectId: 'history' })}>
          <div className="pathway-num">II</div>
          <h3 className="serif">The Long Human Story</h3>
          <div className="pathway-desc">Ten thousand years of us — agriculture, cities, empires, ideas, and their consequences.</div>
          <div className="pathway-meta">
            <span>15 lessons</span><span>·</span><span>~6 hours</span><span>·</span><span>Any level</span>
          </div>
        </div>
        <div className="pathway" onClick={() => onNav({ page: 'subject', subjectId: 'math' })}>
          <div className="pathway-num">III</div>
          <h3 className="serif">From Arithmetic to Calculus</h3>
          <div className="pathway-desc">Rebuild mathematical confidence, one idea at a time. No gaps, no filler.</div>
          <div className="pathway-meta">
            <span>18 lessons</span><span>·</span><span>~8 hours</span><span>·</span><span>Starts at zero</span>
          </div>
        </div>
      </div>

      <div className="section-header">
        <div>
          <div className="eyebrow">§ III</div>
          <h2 className="serif">Your study tools</h2>
        </div>
      </div>
      <div className="pathways">
        <div className="pathway" onClick={() => onNav({ page: 'flashcards' })}>
          <div className="pathway-num">✦</div>
          <h3 className="serif">Flashcards</h3>
          <div className="pathway-desc">Short prompts across every subject. Flip, rate, move on. Memory, rehearsed.</div>
          <div className="pathway-meta"><span>15 cards</span><span>·</span><span>All subjects</span></div>
        </div>
        <div className="pathway" onClick={() => onNav({ page: 'progress' })}>
          <div className="pathway-num">§</div>
          <h3 className="serif">My Progress</h3>
          <div className="pathway-desc">Your reading ledger — visited, completed, reviewed. Pick up where you left off.</div>
          <div className="pathway-meta"><span>Per-subject</span><span>·</span><span>Persistent</span></div>
        </div>
        <div className="pathway" onClick={() => window.__openPalette?.()}>
          <div className="pathway-num">⌘K</div>
          <h3 className="serif">Search everything</h3>
          <div className="pathway-desc">Jump to any topic, subject, or action. The whole atlas, a keystroke away.</div>
          <div className="pathway-meta"><span>Keyboard-first</span><span>·</span><span>Fuzzy</span></div>
        </div>
      </div>

      <footer className="footer">
        <div>
          <strong style={{ fontFamily: 'var(--serif)', fontSize: 15 }}>Supergravity</strong> · An interactive atlas of everything that ought to be taught.
        </div>
        <div className="mono">Edition MMXXVI · Printed on pixels</div>
      </footer>
    </div>
  );
};
window.AtlasPage = AtlasPage;

// ---------- SUBJECT PAGE ----------
const SubjectPage = ({ subject, onNav }) => {
  const [view, setView] = useStateP('topics');

  return (
    <div className="subject-page" data-screen-label={`subject-${subject.id}`}>
      <section className="subject-hero">
        <div>
          <div className="subject-hero-num">Subject № {subject.num} · {subject.topicCount} topics</div>
          <h1 className="serif">{subject.name}</h1>
          <div className="sc-tag" style={{ marginTop: 16 }}>— {subject.tag}</div>
        </div>
        <div className="subject-hero-desc">
          <p>{subject.desc}</p>
          <p style={{ color: 'var(--ink-3)', fontSize: 14 }}>
            Organized into {subject.groups.length} clusters. Start anywhere — Claude will adapt to your level and fill in what's missing.
          </p>
        </div>
      </section>

      <div className="subject-nav">
        <div className={`subject-nav-item ${view === 'topics' ? 'active' : ''}`} onClick={() => setView('topics')}>All topics</div>
        <div className={`subject-nav-item ${view === 'path' ? 'active' : ''}`} onClick={() => setView('path')}>Suggested path</div>
        <div className={`subject-nav-item ${view === 'timeline' ? 'active' : ''}`} onClick={() => setView('timeline')}>Timeline</div>
        <div className={`subject-nav-item ${view === 'people' ? 'active' : ''}`} onClick={() => setView('people')}>Thinkers</div>
      </div>

      {view === 'topics' && (
        <div className="topic-map">
          <aside className="topic-outline">
            <div className="topic-outline-title">Contents</div>
            {subject.groups.map(g => (
              <div key={g.name} className="topic-outline-group">
                <div className="topic-outline-group-name serif">{g.name}</div>
                {g.topics.map(t => (
                  <a key={t.id} className="topic-outline-item" onClick={() => onNav({ page: 'lesson', topicId: t.id, subjectId: subject.id })}>
                    {t.name}
                  </a>
                ))}
              </div>
            ))}
          </aside>
          <div className="topic-content">
            {subject.groups.map((g, gi) => (
              <div key={g.name} className="topic-group-section">
                <div className="topic-group-header">
                  <div>
                    <div className="eyebrow">Cluster № {gi + 1}</div>
                    <h2 className="serif" style={{ marginTop: 6 }}>{g.name}</h2>
                  </div>
                  <div className="mono" style={{ color: 'var(--ink-3)' }}>{g.topics.length} topics</div>
                </div>
                <div className="topic-list">
                  {g.topics.map((t, i) => (
                    <div key={t.id} className="topic-card" onClick={() => onNav({ page: 'lesson', topicId: t.id, subjectId: subject.id })}>
                      <div className="topic-card-head">
                        <span className="topic-card-num">{String(i + 1).padStart(2, '0')}</span>
                        <span className="topic-card-level" style={{ color: window.levelColor(t.level) }}>{t.level}</span>
                      </div>
                      <h3 className="serif">{t.name}</h3>
                      <div className="topic-card-desc">{t.desc}</div>
                      <div className="topic-card-foot">
                        <span>Read → </span>
                        <span>{window.LESSONS[t.id] ? 'Deep dive' : 'Outline'}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {view === 'path' && <PathView subject={subject} onNav={onNav}/>}
      {view === 'timeline' && <TimelineView subject={subject}/>}
      {view === 'people' && <PeopleView subject={subject}/>}
    </div>
  );
};
window.SubjectPage = SubjectPage;

const PathView = ({ subject, onNav }) => {
  const allTopics = subject.groups.flatMap(g => g.topics.map(t => ({ ...t, group: g.name })));
  return (
    <div style={{ margin: '48px 0', maxWidth: 800 }}>
      <div className="eyebrow" style={{ marginBottom: 16 }}>Recommended order</div>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: 24, top: 0, bottom: 0, width: 1, background: 'var(--rule)' }}/>
        {allTopics.map((t, i) => (
          <div key={t.id} style={{ display: 'flex', gap: 20, padding: '12px 0', cursor: 'pointer' }} onClick={() => onNav({ page: 'lesson', topicId: t.id, subjectId: subject.id })}>
            <div style={{
              width: 48, height: 48, borderRadius: '50%',
              background: 'var(--paper)', border: '1px solid var(--ink)',
              display: 'grid', placeItems: 'center',
              fontFamily: 'var(--serif)', fontSize: 18, flexShrink: 0, zIndex: 1,
            }}>{i + 1}</div>
            <div style={{ flex: 1, paddingTop: 6 }}>
              <div className="mono" style={{ color: 'var(--ink-3)', fontSize: 10 }}>{t.group.toUpperCase()} · {t.level}</div>
              <div className="serif" style={{ fontSize: 22, marginTop: 2 }}>{t.name}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 4 }}>{t.desc}</div>
            </div>
            <div style={{ alignSelf: 'center', color: 'var(--ink-3)' }}><Icon name="arrow" size={14}/></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const TimelineView = ({ subject }) => (
  <div style={{ margin: '48px 0', padding: 40, background: 'var(--paper-2)', border: '1px solid var(--rule)', textAlign: 'center' }}>
    <div className="eyebrow">Under construction</div>
    <div className="serif" style={{ fontSize: 28, margin: '12px 0 8px' }}>Timeline view coming soon</div>
    <div style={{ color: 'var(--ink-3)', fontSize: 14 }}>A chronological map of {subject.name.toLowerCase()} — events, discoveries, and the people behind them.</div>
  </div>
);

const PeopleView = ({ subject }) => {
  const people = {
    math: ['Euclid', 'Archimedes', 'Al-Khwarizmi', 'Descartes', 'Newton', 'Euler', 'Gauss', 'Riemann', 'Ramanujan', 'Noether', 'Gödel', 'Turing'],
    science: ['Aristotle', 'Galileo', 'Newton', 'Lavoisier', 'Darwin', 'Maxwell', 'Curie', 'Einstein', 'Bohr', 'Feynman', 'McClintock', 'Franklin'],
    history: ['Herodotus', 'Thucydides', 'Ibn Khaldun', 'Voltaire', 'Marx', 'Tuchman', 'Braudel', 'Hobsbawm'],
    literature: ['Homer', 'Sappho', 'Dante', 'Shakespeare', 'Austen', 'Dostoevsky', 'Woolf', 'Borges', 'Morrison'],
    geography: ['Eratosthenes', 'Al-Idrisi', 'Mercator', 'Humboldt', 'Wegener', 'Sauer'],
    art: ['Giotto', 'Leonardo', 'Rembrandt', 'Hokusai', 'Manet', 'Cézanne', 'Picasso', 'Kahlo'],
    music: ['Bach', 'Mozart', 'Beethoven', 'Debussy', 'Ellington', 'Coltrane', 'Stravinsky'],
    cs: ['Lovelace', 'Turing', 'von Neumann', 'Knuth', 'Dijkstra', 'Hopper', 'Berners-Lee'],
  };
  const list = people[subject.id] || [];
  return (
    <div style={{ margin: '48px 0' }}>
      <div className="eyebrow" style={{ marginBottom: 20 }}>Thinkers to know</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 1, background: 'var(--rule-soft)', border: '1px solid var(--rule-soft)' }}>
        {list.map(name => (
          <div key={name} style={{ background: 'var(--paper)', padding: '20px 16px', cursor: 'pointer' }} onClick={() => window.__openTutor?.({ prompt: `Give me a one-paragraph portrait of ${name} and what they are known for.` })}>
            <div className="serif" style={{ fontSize: 20 }}>{name}</div>
            <div className="mono" style={{ color: 'var(--ink-3)', marginTop: 6, fontSize: 9 }}>Tap to learn →</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ---------- LESSON PAGE ----------
const LessonPage = ({ topicId, subjectId, onNav }) => {
  const subject = window.SUBJECTS.find(s => s.id === subjectId);
  const topic = subject?.groups.flatMap(g => g.topics).find(t => t.id === topicId);
  const lesson = window.LESSONS[topicId];

  React.useEffect(() => {
    if (topicId) window.Progress?.markVisited(topicId);
  }, [topicId]);

  if (!lesson) {
    return <LessonStub topic={topic} subject={subject} onNav={onNav}/>;
  }

  return (
    <div className="lesson" data-screen-label={`lesson-${topicId}`}>
      <div className="lesson-meta">
        <span>{subject.name}</span>
        <span>·</span>
        <span>{lesson.readTime}</span>
        <span>·</span>
        <span>{lesson.difficulty}</span>
      </div>
      <div className="lesson-header">
        <div className="eyebrow" style={{ marginBottom: 16 }}>{topic?.name ? `Lesson · ${topic.name}` : 'Lesson'}</div>
        <h1 className="serif">{lesson.title}</h1>
        <p className="dek">{lesson.dek}</p>
        <div className="lesson-progress">
          {lesson.sections.map((s, i) => (
            <div key={i} className={`lesson-progress-seg ${i === 0 ? 'current' : ''}`}/>
          ))}
        </div>
      </div>
      <article className="lesson-body">
        {lesson.body.map((block, i) => {
          if (block.type === 'lead') return <p key={i} className="lead">{block.text}</p>;
          if (block.type === 'h2') return <h2 key={i} className="serif">{block.text}</h2>;
          if (block.type === 'h3') return <h3 key={i}>{block.text}</h3>;
          if (block.type === 'p') return <p key={i}>{block.text}</p>;
          if (block.type === 'quote') return (
            <blockquote key={i} className="pull-quote">
              "{block.text}"
              <cite>— {block.cite}</cite>
            </blockquote>
          );
          if (block.type === 'interactive') return <InteractiveEmbed key={i} kind={block.key}/>;
          return null;
        })}
        {lesson.resources && <LessonResources resources={lesson.resources}/>}
      </article>

      <div className="lesson-nav">
        <div className="lesson-nav-item" onClick={() => onNav({ page: 'subject', subjectId })}>
          <div className="lesson-nav-dir">← Back</div>
          <div className="lesson-nav-title">All {subject.name} topics</div>
        </div>
        <div className="lesson-nav-item next" onClick={() => { window.Progress?.markCompleted(topicId); window.__openTutor?.({ prompt: 'Quiz me on what I just read.' }); }}>
          <div className="lesson-nav-dir">Mark complete →</div>
          <div className="lesson-nav-title">Take the quiz</div>
        </div>
      </div>
    </div>
  );
};
window.LessonPage = LessonPage;

const LessonStub = ({ topic, subject, onNav }) => {
  const [reply, setReply] = useStateP(null);
  const [loading, setLoading] = useStateP(false);

  const generate = async () => {
    setLoading(true);
    try {
      const text = await window.claude.complete({
        messages: [{
          role: 'user',
          content: `Write a short (2 paragraph) introductory lesson on "${topic.name}" at ${topic.level} level, from the subject of ${subject.name}. Description: ${topic.desc}. Write as an essayist — no markdown, no bullets, no headings. Start with a vivid specific image or example.`
        }]
      });
      setReply(text);
    } finally { setLoading(false); }
  };

  return (
    <div className="lesson" data-screen-label={`lesson-${topic?.id}-stub`}>
      <div className="lesson-meta">
        <span>{subject.name}</span><span>·</span><span>{topic?.level}</span><span>·</span><span>Outline</span>
      </div>
      <div className="lesson-header">
        <div className="eyebrow" style={{ marginBottom: 16 }}>Lesson</div>
        <h1 className="serif">{topic?.name}</h1>
        <p className="dek">{topic?.desc}</p>
      </div>
      <div className="lesson-body">
        {!reply && !loading && (
          <div style={{ padding: '40px 0' }}>
            <p className="lead">This lesson doesn't have a deep-dive article yet — but Claude can write you one on the spot.</p>
            <button className="btn-primary" onClick={generate}><Icon name="sparkle" size={12}/> Generate an introductory lesson</button>
          </div>
        )}
        {loading && (
          <div style={{ padding: '60px 0', textAlign: 'center', color: 'var(--ink-3)' }}>
            <div className="tutor-typing" style={{ justifyContent: 'center' }}><span/><span/><span/></div>
            <div style={{ marginTop: 12, fontSize: 13 }}>Writing your lesson…</div>
          </div>
        )}
        {reply && (
          <>
            <p className="lead">{reply.split('\n\n')[0]}</p>
            {reply.split('\n\n').slice(1).map((p, i) => <p key={i}>{p}</p>)}
            <div style={{ marginTop: 40, padding: 20, background: 'var(--paper-2)', border: '1px dashed var(--rule)', fontSize: 13, color: 'var(--ink-3)' }}>
              ✦ Generated live by your tutor. Ask Claude to go deeper, add examples, or quiz you on it.
            </div>
          </>
        )}
      </div>
      <div className="lesson-nav">
        <div className="lesson-nav-item" onClick={() => onNav({ page: 'subject', subjectId: subject.id })}>
          <div className="lesson-nav-dir">← Back</div>
          <div className="lesson-nav-title">All {subject.name} topics</div>
        </div>
        <div className="lesson-nav-item next" onClick={() => window.__openTutor?.({ prompt: `Explain ${topic?.name} in a different way.` })}>
          <div className="lesson-nav-dir">Ask Claude →</div>
          <div className="lesson-nav-title">Another angle on this</div>
        </div>
      </div>
    </div>
  );
};
