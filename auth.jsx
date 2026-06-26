// ============================================
// Auth — dummy Google sign-in + demo user + profile menu
// ============================================

const DEMO_USER = {
  id: 'demo-alex',
  name: 'Alex Morgan',
  email: 'alex.morgan@gmail.com',
  given: 'Alex',
  avatar: null, // renders initials
  initials: 'AM',
  accentHue: 26, // warm amber
  memberSince: 'March 2024',
  timezone: 'Pacific Time',
};

// ---------- Google G logo ----------
const GoogleG = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

// ---------- Avatar ----------
const Avatar = ({ user, size = 32 }) => {
  if (!user) return null;
  const s = { width: size, height: size, fontSize: size * 0.42 };
  return (
    <div
      className="sg-avatar"
      style={{ ...s, background: `oklch(62% 0.14 ${user.accentHue})` }}
      aria-label={user.name}
    >
      {user.initials}
    </div>
  );
};

// ---------- Auth hook ----------
const useAuth = () => {
  const [user, setUser] = React.useState(() => {
    try {
      const raw = localStorage.getItem('sg-user');
      if (raw) return JSON.parse(raw);
    } catch {}
    return null;
  });
  React.useEffect(() => {
    try {
      if (user) localStorage.setItem('sg-user', JSON.stringify(user));
      else localStorage.removeItem('sg-user');
    } catch {}
  }, [user]);
  return [user, setUser];
};
window.useAuth = useAuth;

// ---------- Sign-in page ----------
const SignInPage = ({ onSignIn }) => {
  const [loading, setLoading] = React.useState(null); // 'google' | 'demo' | null

  const doSignIn = (which) => {
    setLoading(which);
    setTimeout(() => onSignIn(DEMO_USER), which === 'demo' ? 600 : 1100);
  };

  return (
    <div className="sg-signin">
      <div className="sg-signin-canvas">
        {window.HeroVisual && <window.HeroVisual/>}
      </div>
      <div className="sg-signin-overlay"/>

      <div className="sg-signin-card">
        <div className="sg-signin-brand">
          <svg width="44" height="44" viewBox="0 0 40 40" aria-hidden="true">
            <defs>
              <radialGradient id="sg-signin-core" cx="38%" cy="38%" r="55%">
                <stop offset="0%" stopColor="#ffd89a"/>
                <stop offset="45%" stopColor="#e09a5a"/>
                <stop offset="100%" stopColor="#6b2a0a"/>
              </radialGradient>
            </defs>
            <g stroke="rgba(60,30,15,0.25)" strokeWidth="0.6" fill="none">
              <ellipse cx="20" cy="20" rx="17" ry="6"/>
              <ellipse cx="20" cy="20" rx="17" ry="10" transform="rotate(60 20 20)"/>
              <ellipse cx="20" cy="20" rx="17" ry="10" transform="rotate(-60 20 20)"/>
            </g>
            <circle cx="20" cy="20" r="6.5" fill="url(#sg-signin-core)"/>
            <ellipse cx="20" cy="20" rx="15" ry="4.5" fill="none" stroke="#e09a5a" strokeWidth="0.7" transform="rotate(-22 20 20)"/>
            <circle cx="33.5" cy="15.2" r="1.4" fill="#e09a5a"/>
          </svg>
          <div>
            <div className="sg-signin-name">Supergravity</div>
            <div className="sg-signin-tag">Atlas of Everything</div>
          </div>
        </div>

        <h1 className="sg-signin-h1">
          A quieter place<br/>to learn.
        </h1>
        <p className="sg-signin-sub">
          Curated lessons, a tutor in your pocket, gentle habits, and a calmer way to spend the hours you already have.
        </p>

        <button
          className="sg-btn sg-btn-google"
          onClick={() => doSignIn('google')}
          disabled={loading !== null}
        >
          {loading === 'google'
            ? <><span className="sg-spinner"/>Signing in…</>
            : <><GoogleG size={18}/>Continue with Google</>}
        </button>

        <div className="sg-signin-or"><span>or</span></div>

        <button
          className="sg-btn sg-btn-demo"
          onClick={() => doSignIn('demo')}
          disabled={loading !== null}
        >
          {loading === 'demo'
            ? <><span className="sg-spinner"/>Loading demo…</>
            : <>→ Try the demo (no account)</>}
        </button>

        <div className="sg-signin-legal">
          By continuing you agree to our <a>Terms</a> and <a>Privacy Policy</a>. This is a prototype; no real accounts are created.
        </div>
      </div>

      <div className="sg-signin-footer">
        <span>Est. 2024</span>
        <span>·</span>
        <span>Made with care</span>
        <span>·</span>
        <span>v3.2</span>
      </div>
    </div>
  );
};
window.SignInPage = SignInPage;

// ---------- Sign-in modal (shown from top-right button) ----------
const SignInModal = ({ onClose, onSignIn }) => {
  const [loading, setLoading] = React.useState(null);
  const [mode, setMode] = React.useState('in'); // 'in' | 'up'
  const doSignIn = (which) => {
    setLoading(which);
    setTimeout(() => onSignIn(DEMO_USER), which === 'demo' ? 500 : 900);
  };
  return (
    <div className="sg-modal-backdrop" onMouseDown={onClose}>
      <div className="sg-signin-card sg-signin-card-modal" onMouseDown={(e) => e.stopPropagation()}>
        <button className="ws-x sg-modal-x" onClick={onClose} aria-label="Close">✕</button>
        <div className="sg-signin-brand">
          <svg width="36" height="36" viewBox="0 0 40 40" aria-hidden="true">
            <defs>
              <radialGradient id="sg-modal-core" cx="38%" cy="38%" r="55%">
                <stop offset="0%" stopColor="#ffd89a"/>
                <stop offset="45%" stopColor="#e09a5a"/>
                <stop offset="100%" stopColor="#6b2a0a"/>
              </radialGradient>
            </defs>
            <g stroke="rgba(60,30,15,0.25)" strokeWidth="0.6" fill="none">
              <ellipse cx="20" cy="20" rx="17" ry="6"/>
              <ellipse cx="20" cy="20" rx="17" ry="10" transform="rotate(60 20 20)"/>
              <ellipse cx="20" cy="20" rx="17" ry="10" transform="rotate(-60 20 20)"/>
            </g>
            <circle cx="20" cy="20" r="6.5" fill="url(#sg-modal-core)"/>
          </svg>
          <div>
            <div className="sg-signin-name">Supergravity</div>
            <div className="sg-signin-tag">Atlas of Everything</div>
          </div>
        </div>
        <div className="sg-modal-tabs">
          <button className={mode === 'in' ? 'on' : ''} onClick={() => setMode('in')}>Sign in</button>
          <button className={mode === 'up' ? 'on' : ''} onClick={() => setMode('up')}>Sign up</button>
        </div>
        <h1 className="sg-signin-h1" style={{ fontSize: 32 }}>
          {mode === 'in' ? 'Welcome back.' : 'Start your atlas.'}
        </h1>
        <p className="sg-signin-sub">
          {mode === 'in'
            ? 'Pick up your streak, habits, and work where you left off.'
            : 'A lifetime of curiosity, saved in one place. No credit card.'}
        </p>
        <button className="sg-btn sg-btn-google" onClick={() => doSignIn('google')} disabled={loading !== null}>
          {loading === 'google'
            ? <><span className="sg-spinner"/>Signing in…</>
            : <><GoogleG size={18}/>{mode === 'in' ? 'Continue with Google' : 'Sign up with Google'}</>}
        </button>
        <div className="sg-signin-or"><span>or</span></div>
        <button className="sg-btn sg-btn-demo" onClick={() => doSignIn('demo')} disabled={loading !== null}>
          {loading === 'demo' ? <><span className="sg-spinner"/>Loading demo…</> : <>→ Try the demo (no account)</>}
        </button>
        <div className="sg-signin-legal">
          By continuing you agree to our <a>Terms</a> and <a>Privacy Policy</a>. Prototype — no real accounts.
        </div>
      </div>
    </div>
  );
};
window.SignInModal = SignInModal;

// ---------- Profile menu (topbar) ----------
const ProfileMenu = ({ user, onSignOut, onNav }) => {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = (e) => { if (!ref.current?.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);
  return (
    <div className="sg-profile" ref={ref}>
      <button className="sg-profile-btn" onClick={() => setOpen(o => !o)} aria-label="Profile">
        <Avatar user={user} size={30}/>
        <span className="sg-profile-name">{user.given}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
          <path d="M2 3.5 L5 6.5 L8 3.5" stroke="currentColor" fill="none" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      {open && (
        <div className="sg-profile-menu" role="menu">
          <div className="sg-profile-head">
            <Avatar user={user} size={44}/>
            <div>
              <div className="sg-profile-mn">{user.name}</div>
              <div className="sg-profile-me">{user.email}</div>
            </div>
          </div>
          <div className="sg-profile-section">
            <button className="sg-profile-item" onClick={() => { setOpen(false); onNav({ page: 'home' }); }}>
              <Icon name="star" size={14}/> Your dashboard
            </button>
            <button className="sg-profile-item" onClick={() => { setOpen(false); onNav({ page: 'workshop' }); }}>
              <Icon name="book" size={14}/> Workshop
            </button>
            <button className="sg-profile-item" onClick={() => { setOpen(false); onNav({ page: 'progress' }); }}>
              <Icon name="book" size={14}/> Learning progress
            </button>
            <button className="sg-profile-item" onClick={() => { setOpen(false); onNav({ page: 'flashcards' }); }}>
              <Icon name="cards" size={14}/> Flashcards
            </button>
          </div>
          <div className="sg-profile-section">
            <div className="sg-profile-mini">
              <span>Member since</span><span>{user.memberSince}</span>
            </div>
            <div className="sg-profile-mini">
              <span>Stage</span><span>Apprentice</span>
            </div>
          </div>
          <div className="sg-profile-section">
            <button className="sg-profile-item" onClick={() => { setOpen(false); onNav({ page: 'path' }); }}>
              <Icon name="tree" size={14}/> The Path
            </button>
            <button className="sg-profile-item" onClick={() => { setOpen(false); onNav({ page: 'chapters' }); }}>
              <Icon name="grid" size={14}/> NYC Chapter
            </button>
            <button className="sg-profile-item" onClick={() => { setOpen(false); onNav({ page: 'rule' }); }}>
              <Icon name="book" size={14}/> The Rule
            </button>
          </div>
          <div className="sg-profile-section">
            <button className="sg-profile-item quiet">
              <Icon name="book" size={14}/> Settings
            </button>
            <button className="sg-profile-item danger" onClick={onSignOut}>
              <Icon name="close" size={14}/> Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
window.ProfileMenu = ProfileMenu;
Object.assign(window, { SignInPage, ProfileMenu, Avatar, GoogleG, useAuth, DEMO_USER });
