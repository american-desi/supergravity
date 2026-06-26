// ============================================
// Root App + Router + Tutor Glue + Auth
// ============================================

const { useState: useStateA, useEffect: useEffectA } = React;

// Error boundary so one bad page (usually a malformed lesson body) can't
// blank the whole site. Renders a small recovery card and offers a route
// back to the atlas. Logs the error for the dev health dashboard.
class PageErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) { return { error }; }
  componentDidCatch(error, info) {
    (window.CONTENT_RUNTIME_ERRORS = window.CONTENT_RUNTIME_ERRORS || []).push({
      at: new Date().toISOString(),
      page: this.props.page || null,
      message: error && error.message,
      stack: info && info.componentStack,
    });
  }
  render() {
    if (!this.state.error) return this.props.children;
    const go = this.props.onNav || (() => {});
    return (
      <div style={{ maxWidth: 640, margin: '80px auto', padding: 32, fontFamily: 'Inter Tight, sans-serif', color: 'var(--ink)' }}>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 12 }}>§ Something went wrong</div>
        <h1 style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 42, lineHeight: 1.05, margin: '0 0 16px' }}>A page misfired.</h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-2)', marginBottom: 24 }}>
          This happens when a lesson's body is shaped differently than the renderer expects. Your place in the atlas is safe. You can go back and try another lesson.
        </p>
        <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, padding: 12, background: 'var(--paper-2)', borderLeft: '2px solid var(--amber)', whiteSpace: 'pre-wrap', marginBottom: 24 }}>
          {String(this.state.error && this.state.error.message || this.state.error)}
        </div>
        <button className="btn-primary" onClick={() => { this.setState({ error: null }); go({ page: 'atlas' }); }}>Back to the atlas</button>
      </div>
    );
  }
}

const App = () => {
  const [user, setUser] = window.useAuth();
  const [showSignIn, setShowSignIn] = useStateA(false);
  const [nav, setNav] = useStateA(() => {
    try {
      const saved = localStorage.getItem('wk-nav');
      if (saved) return JSON.parse(saved);
    } catch {}
    return { page: 'atlas' };
  });
  const [tutorOpen, setTutorOpen] = useStateA(false);
  const [paletteOpen, setPaletteOpen] = useStateA(false);
  const [askTip, setAskTip] = useStateA(null);

  useEffectA(() => {
    try { localStorage.setItem('wk-nav', JSON.stringify(nav)); } catch {}
    window.scrollTo(0, 0);
  }, [nav]);

  useEffectA(() => {
    window.__openTutor = ({ prompt } = {}) => {
      setTutorOpen(true);
      if (prompt) setTimeout(() => window.__tutorSeed?.(prompt), 100);
    };
    window.__openPalette = () => setPaletteOpen(true);
    return () => { window.__openTutor = null; window.__openPalette = null; };
  }, []);

  useEffectA(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'j') {
        e.preventDefault();
        setTutorOpen(t => !t);
      }
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setPaletteOpen(p => !p);
      }
      if (e.key === 'Escape') {
        setTutorOpen(false);
        setPaletteOpen(false);
        setAskTip(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffectA(() => {
    const onUp = () => {
      const sel = window.getSelection();
      const text = sel?.toString().trim();
      if (!text || text.length < 4 || text.length > 300) { setAskTip(null); return; }
      if (!sel.rangeCount) { setAskTip(null); return; }
      const range = sel.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      if (!rect || rect.width === 0) { setAskTip(null); return; }
      const anchor = sel.anchorNode?.parentElement;
      if (!anchor?.closest('.lesson-body, .topic-card-desc, .atlas-hero-meta')) { setAskTip(null); return; }
      setAskTip({
        x: rect.left + rect.width / 2 + window.scrollX,
        y: rect.top + window.scrollY - 42,
        text,
      });
    };
    const onDown = (e) => {
      if (e.target?.closest?.('.ask-tip')) return;
      setTimeout(() => {
        if (!window.getSelection()?.toString().trim()) setAskTip(null);
      }, 10);
    };
    document.addEventListener('mouseup', onUp);
    document.addEventListener('mousedown', onDown);
    return () => {
      document.removeEventListener('mouseup', onUp);
      document.removeEventListener('mousedown', onDown);
    };
  }, []);

  // ---- Auth is optional; sign-in is a modal ----
  const openSignIn = () => setShowSignIn(true);
  useEffectA(() => { window.__openSignIn = openSignIn; return () => { window.__openSignIn = null; }; }, []);
  const doSignIn = (u) => { setUser(u); setShowSignIn(false); setNav({ page: 'home' }); };

  const subject = nav.subjectId ? window.SUBJECTS.find(s => s.id === nav.subjectId) : null;
  const topic = nav.topicId && subject ? subject.groups.flatMap(g => g.topics).find(t => t.id === nav.topicId) : null;
  const lesson = nav.topicId ? window.LESSONS[nav.topicId] : null;

  const crumbs = [];
  if (user) crumbs.push({ label: 'Home', onClick: () => setNav({ page: 'home' }) });
  if (nav.page === 'atlas') crumbs.push(user ? { label: 'Atlas' } : { label: 'Atlas' });
  else if (nav.page === 'workshop') crumbs.push({ label: 'Workshop' });
  else if (nav.page === 'path') crumbs.push({ label: 'The Path' });
  else if (nav.page === 'rule') crumbs.push({ label: 'The Rule' });
  else if (nav.page === 'chapters') crumbs.push({ label: 'Chapter · NYC' });
  else if (nav.page === 'health') crumbs.push({ label: 'Content health' });
  else if (subject) {
    crumbs.push({ label: 'Atlas', onClick: () => setNav({ page: 'atlas' }) });
    crumbs.push({ label: subject.name, onClick: () => setNav({ page: 'subject', subjectId: subject.id }) });
    if (topic) crumbs.push({ label: topic.name });
  } else if (nav.page !== 'home') {
    crumbs.push({ label: nav.page.charAt(0).toUpperCase() + nav.page.slice(1) });
  }
  if (crumbs.length === 0) crumbs.push({ label: 'Atlas' });

  const tutorContext = { page: nav.page, subject, topic, lesson: lesson ? { ...lesson, id: nav.topicId } : null, user };

  const signOut = () => {
    setUser(null);
    setNav({ page: 'atlas' });
  };

  // Pages that require sign-in
  const requiresAuth = ['home', 'workshop', 'progress', 'flashcards'].includes(nav.page);
  if (requiresAuth && !user) {
    setTimeout(() => { setShowSignIn(true); setNav({ page: 'atlas' }); }, 0);
  }

  return (
    <div className="app">
      <Topbar crumbs={crumbs} onNav={setNav} user={user} onSignOut={signOut} onSignIn={openSignIn}/>
      <main className="main">
        <PageErrorBoundary page={nav.page} onNav={setNav} key={nav.page + ':' + (nav.topicId || '')}>
          {nav.page === 'home' && <window.HomePage user={user} onNav={setNav}/>}
          {nav.page === 'workshop' && <window.WorkshopPage user={user} onNav={setNav}/>}
          {nav.page === 'atlas' && <AtlasPage onNav={setNav}/>}
          {nav.page === 'subject' && subject && <SubjectPage subject={subject} onNav={setNav}/>}
          {nav.page === 'lesson' && <LessonPageV2 topicId={nav.topicId} subjectId={nav.subjectId} onNav={setNav}/>}
          {nav.page === 'flashcards' && <FlashcardsPage onNav={setNav}/>}
          {nav.page === 'progress' && <ProgressPage onNav={setNav}/>}
          {nav.page === 'daily' && <DailyPage onNav={setNav}/>}
          {nav.page === 'glossary' && <GlossaryPage onNav={setNav}/>}
          {nav.page === 'timeline' && <TimelinePage onNav={setNav}/>}
          {nav.page === 'map' && <MapPage onNav={setNav}/>}
          {nav.page === 'random' && <RandomPage onNav={setNav}/>}
          {nav.page === 'path' && <window.PathPage onNav={setNav} user={user}/>}
          {nav.page === 'rule' && <window.RulePage onNav={setNav}/>}
          {nav.page === 'chapters' && <window.ChaptersPage onNav={setNav} user={user}/>}
          {nav.page === 'health' && <window.ContentHealthPage onNav={setNav}/>}
        </PageErrorBoundary>
      </main>

      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} onNav={setNav}/>

      {askTip && (
        <button
          className="ask-tip"
          style={{ left: askTip.x, top: askTip.y, transform: 'translateX(-50%)' }}
          onMouseDown={(e) => {
            e.preventDefault();
            window.__openTutor?.({ prompt: `Explain this passage: "${askTip.text}"` });
            setAskTip(null);
            window.getSelection()?.removeAllRanges();
          }}
        >
          <span className="ask-tip-dot"/>
          Ask Claude about this
        </button>
      )}

      {!tutorOpen && <TutorFab onOpen={() => setTutorOpen(true)}/>}
      {tutorOpen && <TutorDock context={tutorContext} onClose={() => setTutorOpen(false)}/>}

      {/* Work Pad — available on lesson & subject pages for signed-in users */}
      {user && (nav.page === 'lesson' || nav.page === 'subject') && window.WorkPadFab && <window.WorkPadFab/>}

      {/* Sign-in modal */}
      {showSignIn && <window.SignInModal onClose={() => setShowSignIn(false)} onSignIn={doSignIn}/>}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
