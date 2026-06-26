// ============================================
// Shared UI Components + Visualizations
// ============================================

const { useState, useEffect, useRef, useMemo } = React;

// --- Icons ---
const Icon = ({ name, size = 16 }) => {
  const paths = {
    search: <path d="M11 11l4 4M7 13A6 6 0 1 0 7 1a6 6 0 0 0 0 12z" />,
    arrow: <path d="M3 8h10m-4-4l4 4-4 4" />,
    arrowLeft: <path d="M13 8H3m4 4L3 8l4-4" />,
    close: <path d="M4 4l8 8m0-8l-8 8" />,
    send: <path d="M2 8l12-6-4 14-3-6-5-2z" />,
    sparkle: <path d="M8 1v4m0 6v4M1 8h4m6 0h4M3 3l2.5 2.5M10.5 10.5L13 13M13 3l-2.5 2.5M5.5 10.5L3 13" />,
    book: <path d="M3 2h5a2 2 0 0 1 2 2v10a2 2 0 0 0-2-2H3V2zm10 0H8a2 2 0 0 0-2 2v10a2 2 0 0 1 2-2h5V2z" />,
    check: <path d="M3 8l3 3 7-7" />,
    bolt: <path d="M8 1L3 9h4l-1 6 5-8H7l1-6z" />,
    grid: <path d="M2 2h5v5H2zm7 0h5v5H9zm-7 7h5v5H2zm7 0h5v5H9z" />,
    tree: <path d="M8 2v12M8 6l-3-3M8 6l3-3M8 10l-4-2M8 10l4-2" />,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
};
window.Icon = Icon;

// --- Subject Visualization Glyphs ---
const SubjectViz = ({ kind, color }) => {
  const c = color || '#1a1d2b';
  const glyphs = {
    math: (
      <svg viewBox="0 0 200 100">
        <g stroke={c} strokeWidth="1" fill="none">
          <path d="M20 80 Q 50 20, 80 80 T 140 80 T 180 50" strokeWidth="1.2"/>
          <circle cx="40" cy="50" r="18" strokeDasharray="2 3"/>
          <line x1="60" y1="30" x2="180" y2="30" strokeDasharray="1 3"/>
          <text x="110" y="70" fontFamily="Georgia, serif" fontSize="28" fontStyle="italic" fill={c}>∫</text>
          <text x="150" y="90" fontFamily="Georgia, serif" fontSize="18" fontStyle="italic" fill={c}>π</text>
        </g>
      </svg>
    ),
    science: (
      <svg viewBox="0 0 200 100">
        <g stroke={c} strokeWidth="1" fill="none">
          <circle cx="100" cy="50" r="8" fill={c}/>
          <ellipse cx="100" cy="50" rx="60" ry="20"/>
          <ellipse cx="100" cy="50" rx="60" ry="20" transform="rotate(60 100 50)"/>
          <ellipse cx="100" cy="50" rx="60" ry="20" transform="rotate(-60 100 50)"/>
          <circle cx="160" cy="50" r="3" fill={c}/>
          <circle cx="40" cy="50" r="3" fill={c}/>
        </g>
      </svg>
    ),
    history: (
      <svg viewBox="0 0 200 100">
        <g stroke={c} strokeWidth="1" fill="none">
          <line x1="10" y1="70" x2="190" y2="70"/>
          <g>
            {[30, 60, 90, 120, 150, 180].map(x => <line key={x} x1={x} y1="66" x2={x} y2="74"/>)}
          </g>
          <circle cx="30" cy="40" r="4" fill={c}/>
          <circle cx="90" cy="30" r="4" fill={c}/>
          <circle cx="150" cy="45" r="4" fill={c}/>
          <path d="M30 40 L 60 55 L 90 30 L 120 50 L 150 45 L 180 35" strokeDasharray="2 2"/>
        </g>
      </svg>
    ),
    literature: (
      <svg viewBox="0 0 200 100">
        <g stroke={c} strokeWidth="1" fill="none">
          <rect x="40" y="20" width="60" height="70" rx="1"/>
          <rect x="100" y="20" width="60" height="70" rx="1"/>
          <line x1="100" y1="20" x2="100" y2="90"/>
          <g strokeWidth="0.5">
            {[35, 45, 55, 65].map(y => <line key={`l${y}`} x1="50" y1={y} x2="90" y2={y}/>)}
            {[35, 45, 55, 65].map(y => <line key={`r${y}`} x1="110" y1={y} x2="150" y2={y}/>)}
          </g>
          <text x="62" y="82" fontSize="9" fill={c} fontStyle="italic">§</text>
        </g>
      </svg>
    ),
    geography: (
      <svg viewBox="0 0 200 100">
        <g stroke={c} strokeWidth="1" fill="none">
          <circle cx="100" cy="50" r="35"/>
          <path d="M65 50 Q 85 30, 100 50 T 135 50" strokeWidth="1.2"/>
          <path d="M65 50 Q 85 70, 100 50 T 135 50" strokeWidth="0.8" strokeDasharray="2 2"/>
          <line x1="100" y1="15" x2="100" y2="85" strokeDasharray="1 3"/>
          <line x1="65" y1="50" x2="135" y2="50" strokeDasharray="1 3"/>
          <circle cx="100" cy="50" r="2" fill={c}/>
        </g>
      </svg>
    ),
    art: (
      <svg viewBox="0 0 200 100">
        <g fill="none" stroke={c} strokeWidth="1">
          <circle cx="70" cy="50" r="25" fill={c} fillOpacity="0.1"/>
          <rect x="90" y="30" width="40" height="40" fill={c} fillOpacity="0.15" transform="rotate(8 110 50)"/>
          <path d="M130 50 L 170 30 L 170 70 Z" fill={c} fillOpacity="0.08"/>
        </g>
      </svg>
    ),
    music: (
      <svg viewBox="0 0 200 100">
        <g stroke={c} strokeWidth="0.8" fill="none">
          {[30, 40, 50, 60, 70].map(y => <line key={y} x1="20" y1={y} x2="180" y2={y}/>)}
          <circle cx="50" cy="55" r="4" fill={c}/>
          <line x1="54" y1="55" x2="54" y2="25"/>
          <circle cx="90" cy="45" r="4" fill={c}/>
          <line x1="94" y1="45" x2="94" y2="20"/>
          <circle cx="130" cy="60" r="4" fill={c}/>
          <line x1="134" y1="60" x2="134" y2="30"/>
          <path d="M54 25 Q 74 22, 94 20" strokeWidth="1.5"/>
        </g>
      </svg>
    ),
    cs: (
      <svg viewBox="0 0 200 100">
        <g stroke={c} strokeWidth="1" fill="none">
          <rect x="30" y="25" width="140" height="50" rx="1"/>
          <line x1="30" y1="35" x2="170" y2="35"/>
          <circle cx="38" cy="30" r="1.5" fill={c}/>
          <circle cx="44" cy="30" r="1.5" fill={c}/>
          <circle cx="50" cy="30" r="1.5" fill={c}/>
          <text x="40" y="52" fontFamily="monospace" fontSize="9" fill={c}>{`> learn()`}</text>
          <text x="40" y="65" fontFamily="monospace" fontSize="9" fill={c}>{`  returns wisdom`}</text>
        </g>
      </svg>
    ),
  };
  return glyphs[kind] || null;
};
window.SubjectViz = SubjectViz;

// --- Age Mode Toggle ---
// Explorer = friendly/visual mode for kids; Scholar = default full-density mode.
const AgeToggle = () => {
  const [mode, setMode] = useState(() => {
    try { return localStorage.getItem('sg-age-mode') || 'scholar'; } catch { return 'scholar'; }
  });
  useEffect(() => {
    document.body.classList.toggle('age-explorer', mode === 'explorer');
    try { localStorage.setItem('sg-age-mode', mode); } catch {}
  }, [mode]);
  const next = mode === 'explorer' ? 'scholar' : 'explorer';
  return (
    <button
      className={`age-toggle age-toggle--${mode}`}
      onClick={() => setMode(next)}
      title={mode === 'explorer' ? 'Switch to Scholar mode (full depth)' : 'Switch to Explorer mode (kid-friendly)'}
    >
      <span className="age-toggle-icon">{mode === 'explorer' ? '🔭' : '📖'}</span>
      <span className="age-toggle-label">{mode === 'explorer' ? 'Explorer' : 'Scholar'}</span>
    </button>
  );
};
window.AgeToggle = AgeToggle;

// --- Topbar ---
const Topbar = ({ crumbs, onNav, user, onSignOut }) => (
  <header className="topbar">
    <div className="brand" onClick={() => onNav({ page: user ? 'home' : 'atlas' })}>
      <svg className="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
        <defs>
          <radialGradient id="sg-core" cx="38%" cy="38%" r="55%">
            <stop offset="0%" stopColor="#ffd89a"/>
            <stop offset="45%" stopColor="#e09a5a"/>
            <stop offset="100%" stopColor="#6b2a0a"/>
          </radialGradient>
        </defs>
        {/* bent spacetime grid — lensing */}
        <g stroke="rgba(244,239,230,0.18)" strokeWidth="0.6" fill="none">
          <ellipse cx="20" cy="20" rx="17" ry="6"/>
          <ellipse cx="20" cy="20" rx="17" ry="10" transform="rotate(60 20 20)"/>
          <ellipse cx="20" cy="20" rx="17" ry="10" transform="rotate(-60 20 20)"/>
        </g>
        {/* mass — warping the field */}
        <circle cx="20" cy="20" r="6.5" fill="url(#sg-core)"/>
        {/* orbit + satellite */}
        <ellipse cx="20" cy="20" rx="15" ry="4.5" fill="none" stroke="rgba(224,154,90,0.55)" strokeWidth="0.7" transform="rotate(-22 20 20)"/>
        <circle cx="33.5" cy="15.2" r="1.4" fill="#e09a5a"/>
      </svg>
      <div>
        <div className="brand-name">Supergravity</div>
        <div className="brand-sub">Atlas of Everything</div>
      </div>
    </div>
    <nav className="nav-crumb">
      {crumbs.map((c, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="sep">/</span>}
          {i < crumbs.length - 1
            ? <a onClick={c.onClick}>{c.label}</a>
            : <span className="current">{c.label}</span>}
        </React.Fragment>
      ))}
    </nav>
    <nav className="nav-primary">
      <a onClick={() => onNav({ page: 'atlas' })}>Atlas</a>
      <a onClick={() => onNav({ page: 'path' })}>The Path</a>
      <a onClick={() => onNav({ page: 'chapters' })}>Chapter · NYC</a>
      <a onClick={() => onNav({ page: 'rule' })}>The Rule</a>
    </nav>
    <div className="topbar-actions">
      <AgeToggle/>
      <div className="search" onClick={() => window.__openPalette?.()}>
        <Icon name="search" size={14}/>
        <input placeholder="Search the atlas…" readOnly/>
        <kbd>⌘K</kbd>
      </div>
      {user && window.ProfileMenu && <window.ProfileMenu user={user} onSignOut={onSignOut} onNav={onNav}/>}
      {!user && (
        <div className="sg-auth-btns">
          <button className="sg-auth-link" onClick={() => window.__openSignIn?.('in')}>Sign in</button>
          <button className="sg-auth-cta" onClick={() => window.__openSignIn?.('up')}>Sign up</button>
        </div>
      )}
    </div>
  </header>
);
window.Topbar = Topbar;

// --- Level badge color helper ---
const levelColor = (level) => {
  if (level === 'Beginner') return 'var(--moss)';
  if (level === 'Intermediate') return 'var(--lapis)';
  return 'var(--wine)';
};
window.levelColor = levelColor;

Object.assign(window, { Icon, SubjectViz, Topbar, levelColor });
