// ============================================
// ATLAS V3 — Category-driven, searchable, dense
// ============================================

const { useState: useStateA3, useMemo: useMemoA3, useEffect: useEffectA3, useRef: useRefA3 } = React;

// Category metadata (ordering + descriptions)
const ATLAS_CATEGORIES = [
  { id: 'Academic',     num: 'I',    label: 'The Academic Tradition',  tag: 'Schoolhouse & university', note: 'Math, science, history, literature — the core curriculum of Western education, plus the humanities beyond it.' },
  { id: 'Tech',         num: 'II',   label: 'Tools of the Present',    tag: 'Modern & digital',         note: 'Computing, data, security — the literacies the last fifty years made essential.' },
  { id: 'Arts',         num: 'III',  label: 'The Creative Arts',       tag: 'Made things',              note: 'Visual, performance, and narrative arts — craft as culture.' },
  { id: 'Trades',       num: 'IV',   label: 'The Building Trades',     tag: 'Hands on structure',       note: 'Carpentry, wiring, welding, masonry — the crafts that raise a building and keep it standing.' },
  { id: 'Culinary',     num: 'V',    label: 'The Kitchen Arts',        tag: 'Food & drink',             note: 'Cooking, baking, fermentation, and everything that ends on a plate.' },
  { id: 'Crafts',       num: 'VI',   label: 'Handcrafts',              tag: 'The slow arts',            note: 'Pottery, sewing, woodworking, bookbinding — making things by hand, badly at first and eventually well.' },
  { id: 'Life Skills',  num: 'VII',  label: 'Life, Practical',         tag: 'Everyday competence',      note: 'Money, health, home, car — the curriculum school forgot.' },
  { id: 'Movement',     num: 'VIII', label: 'The Body, Trained',       tag: 'Sport & movement',         note: 'Yoga, martial arts, climbing — disciplines of strength, mobility, and attention.' },
  { id: 'Nature',       num: 'IX',   label: 'The Outdoors',            tag: 'Field & sky',              note: 'Birding, weather, fishing, stars — reading the world without a screen.' },
  { id: 'Games',        num: 'X',    label: 'Games & Curiosities',     tag: 'The odd & the old',        note: 'Chess, etiquette, the untranslatable traditions that round out a life.' },
  { id: 'Unconventional', num: 'XI', label: 'Unconventional',          tag: 'Softer ground',            note: null },
];

const AtlasPage = ({ onNav }) => {
  const [query, setQuery] = useStateA3('');
  const [view, setView] = useStateA3(() => localStorage.getItem('atlas_view') || 'grid');
  const [activeCat, setActiveCat] = useStateA3('all');
  const scrollRef = useRefA3({});

  useEffectA3(() => { localStorage.setItem('atlas_view', view); }, [view]);

  // Group by category
  const byCategory = useMemoA3(() => {
    const groups = {};
    window.SUBJECTS.forEach(s => {
      const cat = s.category || 'Unconventional';
      (groups[cat] = groups[cat] || []).push(s);
    });
    return groups;
  }, []);

  // Build search index (subjects + all topics)
  const searchIndex = useMemoA3(() => {
    const rows = [];
    window.SUBJECTS.forEach(s => {
      rows.push({ kind: 'subject', id: s.id, subjectId: s.id, title: s.name, sub: s.tag, where: s.category || '', haystack: `${s.name} ${s.tag} ${s.desc} ${s.category}`.toLowerCase() });
      s.groups.forEach(g => {
        g.topics.forEach(t => {
          rows.push({
            kind: 'topic',
            id: t.id,
            subjectId: s.id,
            title: t.name,
            sub: t.desc,
            where: `${s.name} · ${g.name}`,
            haystack: `${t.name} ${t.desc} ${s.name} ${g.name}`.toLowerCase(),
          });
        });
      });
    });
    return rows;
  }, []);

  const results = useMemoA3(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return searchIndex.filter(r => r.haystack.includes(q)).slice(0, 100);
  }, [query, searchIndex]);

  // Stats
  const totalTopics = useMemoA3(() => window.SUBJECTS.reduce((a, s) => a + s.groups.reduce((b, g) => b + g.topics.length, 0), 0), []);
  const totalLessons = useMemoA3(() => Object.keys(window.LESSONS || {}).length, []);

  // Categories to show (ordered)
  const visibleCats = useMemoA3(() => {
    const all = ATLAS_CATEGORIES.filter(c => byCategory[c.id]?.length);
    if (activeCat === 'all') return all;
    return all.filter(c => c.id === activeCat);
  }, [activeCat, byCategory]);

  const scrollToCat = (catId) => {
    setActiveCat('all');
    setTimeout(() => {
      scrollRef.current[catId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 40);
  };

  return (
    <div className="atlas-v3" data-screen-label="atlas">
      {/* Hero with animated spacetime canvas */}
      <div className="atlas-hero-wrap">
        {window.HeroVisual && <window.HeroVisual/>}
        <header className="atlas-v3-hero">
          <div>
            <div className="dateline">
              <span>Edition MMXXVI · Vol. 01</span>
              <span>The Complete Atlas</span>
            </div>
            <h1>Every subject,<br/><em>one atlas.</em></h1>
          </div>
          <div className="atlas-v3-hero-right">
            A living encyclopedia of school and beyond. {window.SUBJECTS.length} subjects, organized by tradition — from calculus to carpentry to cocktails. Each opens into topics, rich lessons, and a tutor who never tires of your questions.
            <div className="counter">
              <span><strong>{window.SUBJECTS.length}</strong>Subjects</span>
              <span><strong>{totalTopics}</strong>Topics</span>
              <span><strong>{totalLessons}</strong>Deep dives</span>
            </div>
          </div>
        </header>
      </div>

      {/* Toolbar */}
      <div className="atlas-toolbar">
        <label className="atlas-search">
          <span className="atlas-search-icon">⌕</span>
          <input
            type="text"
            placeholder="Search any subject, topic, or idea…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus={false}
          />
          {query && <span className="atlas-search-hit">{results?.length || 0}</span>}
          {query && <button className="btn-ghost" style={{ padding: '4px 8px', fontSize: 10 }} onClick={() => setQuery('')}>ESC</button>}
        </label>
        <div className="atlas-viewtoggle">
          <button className={view === 'grid' ? 'active' : ''} onClick={() => setView('grid')}>Grid</button>
          <button className={view === 'index' ? 'active' : ''} onClick={() => setView('index')}>Index</button>
          <button className={view === 'shelf' ? 'active' : ''} onClick={() => setView('shelf')}>Shelf</button>
        </div>
      </div>

      {/* If searching, show flat results */}
      {results ? (
        <SearchResults results={results} query={query} onNav={onNav}/>
      ) : (
        <>
          {/* Category tabs */}
          <nav className="atlas-cats">
            <div className={`atlas-cat-tab ${activeCat === 'all' ? 'active' : ''}`} onClick={() => setActiveCat('all')}>
              All
              <span className="atlas-cat-tab-count">{window.SUBJECTS.length}</span>
            </div>
            {ATLAS_CATEGORIES.filter(c => byCategory[c.id]?.length).map(c => (
              <div
                key={c.id}
                className={`atlas-cat-tab ${activeCat === c.id ? 'active' : ''}`}
                onClick={() => (activeCat === 'all' ? scrollToCat(c.id) : setActiveCat(c.id))}
              >
                {c.label.replace(/^The /, '')}
                <span className="atlas-cat-tab-count">{byCategory[c.id].length}</span>
              </div>
            ))}
          </nav>

          {/* Category sections */}
          {visibleCats.map(cat => (
            <section
              key={cat.id}
              className="atlas-category"
              ref={(el) => { if (el) scrollRef.current[cat.id] = el; }}
            >
              <div className="atlas-cat-head">
                <div className="num">{cat.num}.</div>
                <div>
                  <h2 className="serif">{cat.label}</h2>
                  {cat.note && <div style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 8, maxWidth: 620, lineHeight: 1.55 }}>{cat.note}</div>}
                </div>
                <div className="tag">
                  <div><strong>{byCategory[cat.id].length}</strong> subjects</div>
                  <div style={{ marginTop: 4 }}>{byCategory[cat.id].reduce((a, s) => a + (s.topicCount || 0), 0)} topics</div>
                </div>
              </div>

              {view === 'grid' && <CategoryGrid subjects={byCategory[cat.id]} onNav={onNav}/>}
              {view === 'index' && <CategoryIndex subjects={byCategory[cat.id]} onNav={onNav}/>}
              {view === 'shelf' && <CategoryShelf subjects={byCategory[cat.id]} onNav={onNav}/>}
            </section>
          ))}
        </>
      )}

      {/* Quick tools strip */}
      {!results && (
        <section style={{ marginTop: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 4 }}>§ Quick tools</div>
          <div className="atlas-quick">
            <div className="atlas-quick-item" onClick={() => onNav({ page: 'daily' })}>
              <div className="sym">☀</div>
              <div className="lbl">Today's Atlas</div>
              <div className="desc">A daily front-page — one lesson, one term, one moment in history.</div>
            </div>
            <div className="atlas-quick-item" onClick={() => onNav({ page: 'flashcards' })}>
              <div className="sym">✦</div>
              <div className="lbl">Flashcards</div>
              <div className="desc">Short prompts across every subject. Flip, rate, move on.</div>
            </div>
            <div className="atlas-quick-item" onClick={() => onNav({ page: 'glossary' })}>
              <div className="sym">A</div>
              <div className="lbl">Glossary</div>
              <div className="desc">Every key term, alphabetized. The index of ideas.</div>
            </div>
            <div className="atlas-quick-item" onClick={() => onNav({ page: 'timeline' })}>
              <div className="sym">↦</div>
              <div className="lbl">Timeline</div>
              <div className="desc">The long story, laid end to end. From big bang to last Tuesday.</div>
            </div>
            <div className="atlas-quick-item" onClick={() => onNav({ page: 'map' })}>
              <div className="sym">◎</div>
              <div className="lbl">World Map</div>
              <div className="desc">Places that changed history — pinned and clickable.</div>
            </div>
            <div className="atlas-quick-item" onClick={() => onNav({ page: 'random' })}>
              <div className="sym">?</div>
              <div className="lbl">Surprise me</div>
              <div className="desc">Spin the wheel. Land on something you didn't know you wanted to learn.</div>
            </div>
            <div className="atlas-quick-item" onClick={() => onNav({ page: 'progress' })}>
              <div className="sym">§</div>
              <div className="lbl">My Progress</div>
              <div className="desc">Your reading ledger — visited, completed, reviewed.</div>
            </div>
            <div className="atlas-quick-item" onClick={() => window.__openTutor?.({ prompt: 'Give me a tour of what you can do here.' })}>
              <div className="sym">✺</div>
              <div className="lbl">Meet the Tutor</div>
              <div className="desc">A Socratic partner who's read along with you the whole way.</div>
            </div>
          </div>
        </section>
      )}

      <footer className="footer">
        <div>
          <strong style={{ fontFamily: 'var(--serif)', fontSize: 15 }}>Supergravity</strong> · An interactive atlas of everything that ought to be taught.
        </div>
        <div className="mono">Edition MMXXVI · Printed on pixels</div>
      </footer>
    </div>
  );
};

// ---------- GRID VIEW ----------
const CategoryGrid = ({ subjects, onNav }) => (
  <div className="atlas-grid">
    {subjects.map(s => (
      <div
        key={s.id}
        className="atlas-grid-card"
        onClick={() => onNav({ page: 'subject', subjectId: s.id })}
        style={{ '--accent': window.SUBJECT_HEX?.[s.id] || s.accent }}
      >
        <div className="accent"/>
        <div className="atlas-grid-card-head">
          <span className="atlas-grid-card-num">№ {s.num}</span>
          <span>{s.category}</span>
        </div>
        <div style={{ flex: 1 }}>
          <div className="atlas-grid-card-name">{s.name}</div>
          <div className="atlas-grid-card-tag">— {s.tag}</div>
        </div>
        <div className="atlas-grid-card-topics">
          <span>{s.topicCount} topics</span>
          <span>Enter →</span>
        </div>
      </div>
    ))}
  </div>
);

// ---------- INDEX (dense list) VIEW ----------
const CategoryIndex = ({ subjects, onNav }) => (
  <div className="atlas-index">
    {subjects.map(s => (
      <div
        key={s.id}
        className="atlas-index-row"
        onClick={() => onNav({ page: 'subject', subjectId: s.id })}
      >
        <span className="num">{s.num}</span>
        <span className="main">
          <span className="name">{s.name}</span>
          <span className="tag">— {s.tag}</span>
        </span>
        <span className="count">{s.topicCount} topics →</span>
      </div>
    ))}
  </div>
);

// ---------- SHELF (book-spine) VIEW ----------
const CategoryShelf = ({ subjects, onNav }) => (
  <div className="atlas-shelf">
    {subjects.map(s => (
      <div
        key={s.id}
        className="atlas-shelf-book"
        title={`${s.name} — ${s.tag}`}
        onClick={() => onNav({ page: 'subject', subjectId: s.id })}
        style={{ '--accent': window.SUBJECT_HEX?.[s.id] || s.accent, background: window.SUBJECT_HEX?.[s.id] || s.accent }}
      >
        <div className="sb-num">№ {s.num}</div>
        <div className="sb-name">{s.name}</div>
        <div className="sb-foot">{s.topicCount}</div>
      </div>
    ))}
  </div>
);

// ---------- SEARCH RESULTS ----------
const SearchResults = ({ results, query, onNav }) => {
  if (!results.length) {
    return (
      <div className="atlas-empty">
        Nothing matches <em>"{query}"</em>.<br/>
        <span style={{ fontSize: 14, fontStyle: 'normal' }}>Try another word, or ask the tutor.</span>
      </div>
    );
  }
  const subjects = results.filter(r => r.kind === 'subject');
  const topics = results.filter(r => r.kind === 'topic');
  return (
    <div>
      <div className="atlas-results-head">
        <span>Results for "{query}"</span>
        <span>{results.length} match{results.length === 1 ? '' : 'es'}</span>
      </div>
      {subjects.length > 0 && (
        <>
          <div className="eyebrow" style={{ margin: '18px 0 10px' }}>Subjects · {subjects.length}</div>
          {subjects.map(r => (
            <div key={`s-${r.id}`} className="atlas-result-row" onClick={() => onNav({ page: 'subject', subjectId: r.subjectId })}>
              <span className="kind">Subject</span>
              <span>
                <div className="title">{r.title}</div>
                <div className="sub">— {r.sub}</div>
              </span>
              <span className="where">{r.where}</span>
              <span className="count">→</span>
            </div>
          ))}
        </>
      )}
      {topics.length > 0 && (
        <>
          <div className="eyebrow" style={{ margin: '28px 0 10px' }}>Topics · {topics.length}</div>
          {topics.map(r => (
            <div key={`t-${r.id}`} className="atlas-result-row" onClick={() => onNav({ page: 'lesson', topicId: r.id, subjectId: r.subjectId })}>
              <span className="kind">{window.LESSONS[r.id] ? 'Lesson' : 'Topic'}</span>
              <span>
                <div className="title">{r.title}</div>
                <div className="sub">{r.sub}</div>
              </span>
              <span className="where">{r.where}</span>
              <span className="count">→</span>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

window.AtlasPage = AtlasPage;
