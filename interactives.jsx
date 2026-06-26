// ============================================
// Interactive Lesson Embeds
// ============================================

const { useState: useStateI, useEffect: useEffectI, useRef: useRefI, useMemo } = React;

// Newton's First Law — frictionless puck
const NewtonFirst = () => {
  const [friction, setFriction] = useStateI(0.02);
  const [force, setForce] = useStateI(0);
  const [running, setRunning] = useStateI(false);
  const stateRef = useRefI({ x: 60, v: 0 });
  const [tick, setTick] = useStateI(0);

  useEffectI(() => {
    if (!running) return;
    let raf;
    const loop = () => {
      const s = stateRef.current;
      s.v += force * 0.02;
      s.v *= (1 - friction);
      s.x += s.v;
      if (s.x > 540) { s.x = 540; s.v = -Math.abs(s.v) * 0.6; }
      if (s.x < 20) { s.x = 20; s.v = Math.abs(s.v) * 0.6; }
      setTick(t => t + 1);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [running, friction, force]);

  const reset = () => { stateRef.current = { x: 60, v: 0 }; setTick(t => t + 1); };

  return (
    <div>
      <svg viewBox="0 0 600 200" style={{ width: '100%', height: 200, background: 'var(--paper)', border: '1px solid var(--rule-soft)' }}>
        <line x1="20" y1="140" x2="580" y2="140" stroke="var(--ink)" strokeWidth="1"/>
        {Array.from({length: 14}).map((_, i) => (
          <line key={i} x1={40 + i*40} y1="140" x2={45 + i*40} y2="148" stroke="var(--ink-3)" strokeWidth="0.5"/>
        ))}
        <circle cx={stateRef.current.x} cy="125" r="14" fill="var(--amber)" stroke="var(--ink)" strokeWidth="1.5"/>
        {force !== 0 && (
          <g>
            <line x1={stateRef.current.x} y1="125" x2={stateRef.current.x + force * 8} y2="125" stroke="var(--wine)" strokeWidth="2"/>
            <polygon points={`${stateRef.current.x + force * 8},125 ${stateRef.current.x + force * 8 - Math.sign(force)*6},121 ${stateRef.current.x + force * 8 - Math.sign(force)*6},129`} fill="var(--wine)"/>
          </g>
        )}
        <text x="30" y="170" fontSize="10" fontFamily="monospace" fill="var(--ink-3)">position: {Math.round(stateRef.current.x)}px · velocity: {stateRef.current.v.toFixed(2)}</text>
      </svg>
      <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 16, alignItems: 'center' }}>
        <label style={{ fontSize: 12 }}>
          <div className="mono" style={{ marginBottom: 6, color: 'var(--ink-3)' }}>Friction: {friction.toFixed(3)}</div>
          <input type="range" min="0" max="0.1" step="0.005" value={friction} onChange={e => setFriction(+e.target.value)} style={{ width: '100%' }}/>
        </label>
        <label style={{ fontSize: 12 }}>
          <div className="mono" style={{ marginBottom: 6, color: 'var(--ink-3)' }}>Force: {force}</div>
          <input type="range" min="-10" max="10" step="1" value={force} onChange={e => setForce(+e.target.value)} style={{ width: '100%' }}/>
        </label>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn-ghost" onClick={() => setRunning(r => !r)}>{running ? '⏸ Pause' : '▶ Play'}</button>
          <button className="btn-ghost" onClick={reset}>↺</button>
        </div>
      </div>
    </div>
  );
};

// Newton's Third Law — paired forces
const NewtonThird = () => {
  const [push, setPush] = useStateI(30);
  return (
    <div>
      <svg viewBox="0 0 600 200" style={{ width: '100%', height: 200, background: 'var(--paper)', border: '1px solid var(--rule-soft)' }}>
        <rect x="280" y="20" width="40" height="160" fill="var(--ink)" opacity="0.15"/>
        <line x1="300" y1="20" x2="300" y2="180" stroke="var(--ink)" strokeDasharray="3 3"/>
        <rect x={220 - push*0.3} y="80" width="60" height="40" fill="var(--amber)" stroke="var(--ink)"/>
        <line x1="220" y1="100" x2={220 + push} y2="100" stroke="var(--wine)" strokeWidth="2"/>
        <polygon points={`${220+push},100 ${220+push-6},96 ${220+push-6},104`} fill="var(--wine)"/>
        <text x={220+push+8} y="96" fontSize="11" fontFamily="monospace" fill="var(--wine)">action: {push}N</text>
        <line x1="380" y1="100" x2={380 - push} y2="100" stroke="var(--lapis)" strokeWidth="2"/>
        <polygon points={`${380-push},100 ${380-push+6},96 ${380-push+6},104`} fill="var(--lapis)"/>
        <text x={380-push-80} y="96" fontSize="11" fontFamily="monospace" fill="var(--lapis)">reaction: {push}N</text>
        <text x="285" y="195" fontSize="10" fontFamily="monospace" fill="var(--ink-3)">wall</text>
      </svg>
      <div style={{ marginTop: 16 }}>
        <div className="mono" style={{ marginBottom: 6, color: 'var(--ink-3)' }}>Push force: {push} newtons</div>
        <input type="range" min="0" max="100" value={push} onChange={e => setPush(+e.target.value)} style={{ width: '100%' }}/>
        <div style={{ marginTop: 12, fontSize: 13, color: 'var(--ink-2)', fontStyle: 'italic' }}>
          Every push on the wall produces an equal and opposite push from the wall. Try to make them unequal — you can't.
        </div>
      </div>
    </div>
  );
};

// Evolution simulator
const EvolutionSim = () => {
  const [gen, setGen] = useStateI(0);
  const [pop, setPop] = useStateI(() => Array.from({ length: 40 }, () => ({ color: Math.random(), x: Math.random(), y: Math.random() })));
  const [env, setEnv] = useStateI(0.7); // dark environment favors dark colors

  const advance = () => {
    // fitness = 1 - |color - env|^2, survivors reproduce with mutation
    const scored = pop.map(p => ({ ...p, fit: 1 - Math.pow(p.color - env, 2) }));
    scored.sort((a, b) => b.fit - a.fit);
    const survivors = scored.slice(0, 20);
    const children = survivors.map(p => ({
      color: Math.max(0, Math.min(1, p.color + (Math.random() - 0.5) * 0.1)),
      x: Math.random(),
      y: Math.random()
    }));
    setPop([...survivors.map(s => ({ color: s.color, x: Math.random(), y: Math.random() })), ...children]);
    setGen(g => g + 1);
  };

  const reset = () => {
    setPop(Array.from({ length: 40 }, () => ({ color: Math.random(), x: Math.random(), y: Math.random() })));
    setGen(0);
  };

  const avgColor = pop.reduce((s, p) => s + p.color, 0) / pop.length;

  const bg = `rgb(${244 - env*180}, ${239 - env*180}, ${230 - env*180})`;

  return (
    <div>
      <div style={{ position: 'relative', width: '100%', height: 260, background: bg, border: '1px solid var(--rule-soft)', overflow: 'hidden' }}>
        {pop.map((p, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${p.x * 96}%`,
            top: `${p.y * 90}%`,
            width: 14, height: 14,
            borderRadius: '50%',
            background: `rgb(${244 - p.color*200}, ${200 - p.color*150}, ${180 - p.color*140})`,
            border: '1px solid rgba(0,0,0,0.2)',
            transition: 'all 0.4s',
          }}/>
        ))}
      </div>
      <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: 20, alignItems: 'center' }}>
        <div>
          <div className="mono" style={{ marginBottom: 6, color: 'var(--ink-3)' }}>Environment darkness: {(env*100).toFixed(0)}%</div>
          <input type="range" min="0" max="1" step="0.05" value={env} onChange={e => setEnv(+e.target.value)} style={{ width: '100%' }}/>
        </div>
        <div className="mono" style={{ color: 'var(--ink-3)' }}>
          GEN {String(gen).padStart(3, '0')} · avg pigment {(avgColor*100).toFixed(0)}%
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="btn-primary" onClick={advance}>Advance 1 Generation</button>
          <button className="btn-ghost" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

// Meter tapper
const MeterTap = () => {
  const line = "But SOFT, what LIGHT through YON-der WIN-dow BREAKS";
  const beats = line.split(' ');
  const [playing, setPlaying] = useStateI(false);
  const [beat, setBeat] = useStateI(-1);

  useEffectI(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setBeat(b => {
        if (b >= beats.length - 1) { setPlaying(false); return -1; }
        return b + 1;
      });
    }, 500);
    return () => clearInterval(id);
  }, [playing, beats.length]);

  const play = () => { setBeat(-1); setPlaying(true); };

  return (
    <div>
      <div style={{ padding: '40px 20px', background: 'var(--paper)', border: '1px solid var(--rule-soft)', textAlign: 'center', fontFamily: 'var(--serif)', fontSize: 28, lineHeight: 1.4 }}>
        {beats.map((b, i) => {
          const isStress = b === b.toUpperCase();
          return (
            <span key={i} style={{
              display: 'inline-block',
              margin: '0 4px',
              padding: '2px 6px',
              background: beat === i ? 'var(--amber)' : 'transparent',
              color: beat === i ? 'var(--paper)' : (isStress ? 'var(--ink)' : 'var(--ink-4)'),
              fontWeight: isStress ? 600 : 400,
              transition: 'all 0.15s',
            }}>
              {b.toLowerCase()}
            </span>
          );
        })}
      </div>
      <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="mono" style={{ color: 'var(--ink-3)' }}>
          da-DUM · da-DUM · da-DUM · da-DUM · da-DUM
        </div>
        <button className="btn-primary" onClick={play} disabled={playing}>
          {playing ? 'Speaking…' : '▶ Hear the meter'}
        </button>
      </div>
    </div>
  );
};

// Derivative plot
const DerivPlot = () => {
  const [x0, setX0] = useStateI(50);
  const f = (x) => Math.sin(x / 20) * 30 + 50;
  const fprime = (x) => Math.cos(x / 20) * 30 / 20;
  const h = 0.001;
  const slope = (f(x0 + h) - f(x0)) / h;

  const pts = Array.from({ length: 100 }, (_, i) => {
    const x = i * 6;
    return `${x},${100 - f(x)}`;
  }).join(' ');

  return (
    <div>
      <svg viewBox="0 0 600 200" style={{ width: '100%', height: 220, background: 'var(--paper)', border: '1px solid var(--rule-soft)' }}>
        <line x1="0" y1="150" x2="600" y2="150" stroke="var(--rule)"/>
        {Array.from({length: 10}).map((_, i) => (
          <line key={i} x1={i*60} y1="0" x2={i*60} y2="200" stroke="var(--rule-soft)"/>
        ))}
        <polyline points={pts.split(' ').map(p => { const [x,y] = p.split(','); return `${+x}, ${+y + 50}`; }).join(' ')} fill="none" stroke="var(--ink)" strokeWidth="1.5"/>
        {/* tangent */}
        <line
          x1={x0*6 - 60}
          y1={(100 - f(x0)) + 50 + slope*60}
          x2={x0*6 + 60}
          y2={(100 - f(x0)) + 50 - slope*60}
          stroke="var(--amber)"
          strokeWidth="2"
        />
        <circle cx={x0*6} cy={100 - f(x0) + 50} r="5" fill="var(--amber)" stroke="var(--ink)"/>
        <text x="10" y="20" fontSize="11" fontFamily="monospace" fill="var(--ink-3)">f(x) = sin(x/20) · 30 + 50</text>
        <text x="10" y="36" fontSize="11" fontFamily="monospace" fill="var(--amber)">f'({x0}) = {slope.toFixed(3)}</text>
      </svg>
      <div style={{ marginTop: 12 }}>
        <div className="mono" style={{ marginBottom: 6, color: 'var(--ink-3)' }}>x = {x0} — drag to move the tangent</div>
        <input type="range" min="0" max="100" value={x0} onChange={e => setX0(+e.target.value)} style={{ width: '100%' }}/>
      </div>
    </div>
  );
};

// Rome interactive map (simplified provinces)
const RomeMap = () => {
  const [year, setYear] = useStateI(-100);
  // blobs grow over time
  const regions = [
    { name: 'Italia', startYear: -500, cx: 50, cy: 50, r: 9 },
    { name: 'Sicilia', startYear: -241, cx: 52, cy: 60, r: 4 },
    { name: 'Hispania', startYear: -206, cx: 30, cy: 55, r: 11 },
    { name: 'Graecia', startYear: -146, cx: 62, cy: 55, r: 6 },
    { name: 'Gallia', startYear: -51, cx: 42, cy: 38, r: 12 },
    { name: 'Aegyptus', startYear: -30, cx: 70, cy: 75, r: 7 },
    { name: 'Britannia', startYear: 43, cx: 35, cy: 22, r: 7 },
    { name: 'Dacia', startYear: 106, cx: 62, cy: 40, r: 6 },
  ];
  const active = regions.filter(r => r.startYear <= year);
  return (
    <div>
      <svg viewBox="0 0 100 100" style={{ width: '100%', height: 300, background: 'var(--paper-3)', border: '1px solid var(--rule-soft)' }}>
        {/* sketchy landmass */}
        <path d="M 10 30 Q 20 20, 40 25 T 80 20 L 85 40 Q 80 50, 85 60 L 90 85 L 50 90 L 20 80 L 10 60 Z" fill="var(--paper-2)" stroke="var(--ink)" strokeWidth="0.2"/>
        {active.map((r, i) => (
          <g key={r.name} style={{ opacity: 0.8 }}>
            <circle cx={r.cx} cy={r.cy} r={r.r} fill="var(--amber)" fillOpacity="0.35" stroke="var(--amber)" strokeWidth="0.3"/>
            <text x={r.cx} y={r.cy + 1} textAnchor="middle" fontSize="2.2" fontFamily="Georgia" fill="var(--ink)">{r.name}</text>
          </g>
        ))}
      </svg>
      <div style={{ marginTop: 12 }}>
        <div className="mono" style={{ marginBottom: 6, color: 'var(--ink-3)' }}>
          {year < 0 ? `${Math.abs(year)} BC` : `AD ${year}`} · {active.length} provinces
        </div>
        <input type="range" min="-500" max="200" step="10" value={year} onChange={e => setYear(+e.target.value)} style={{ width: '100%' }}/>
      </div>
    </div>
  );
};

// Double-slit
const DoubleSlit = () => {
  const [wavelength, setWavelength] = useStateI(40);
  const [slitSep, setSlitSep] = useStateI(50);

  const screenData = useMemo(() => {
    const d = slitSep;
    const L = 200;
    return Array.from({ length: 200 }, (_, i) => {
      const y = i - 100;
      const pathDiff = d * y / L;
      const phase = (2 * Math.PI * pathDiff) / wavelength;
      const intensity = Math.pow(Math.cos(phase / 2), 2);
      return intensity;
    });
  }, [wavelength, slitSep]);

  return (
    <div>
      <svg viewBox="0 0 400 220" style={{ width: '100%', height: 240, background: 'var(--ink)', border: '1px solid var(--rule-soft)' }}>
        <rect x="0" y="0" width="400" height="220" fill="var(--ink)"/>
        {/* source */}
        <circle cx="30" cy="110" r="6" fill="var(--amber)"/>
        {/* barrier */}
        <rect x="150" y="20" width="4" height={90 - slitSep/2} fill="var(--paper-3)"/>
        <rect x="150" y={110 - slitSep/2 + 4} width="4" height={slitSep - 8} fill="var(--paper-3)"/>
        <rect x="150" y={110 + slitSep/2} width="4" height={90 - slitSep/2} fill="var(--paper-3)"/>
        {/* screen pattern */}
        {screenData.map((v, i) => (
          <rect key={i} x="350" y={10 + i} width="40" height="1" fill={`rgba(224, 154, 90, ${v})`}/>
        ))}
        {/* wave lines */}
        {[...Array(12)].map((_, i) => (
          <circle key={i} cx="152" cy={110 - slitSep/2} r={i * wavelength / 2} fill="none" stroke={`rgba(224,154,90,${0.3 - i*0.02})`} strokeWidth="0.5"/>
        ))}
        {[...Array(12)].map((_, i) => (
          <circle key={`b${i}`} cx="152" cy={110 + slitSep/2} r={i * wavelength / 2} fill="none" stroke={`rgba(224,154,90,${0.3 - i*0.02})`} strokeWidth="0.5"/>
        ))}
        <text x="20" y="210" fontSize="9" fontFamily="monospace" fill="var(--paper-3)">source</text>
        <text x="140" y="210" fontSize="9" fontFamily="monospace" fill="var(--paper-3)">two slits</text>
        <text x="350" y="210" fontSize="9" fontFamily="monospace" fill="var(--paper-3)">screen</text>
      </svg>
      <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <div className="mono" style={{ marginBottom: 6, color: 'var(--ink-3)' }}>Wavelength: {wavelength}</div>
          <input type="range" min="10" max="80" value={wavelength} onChange={e => setWavelength(+e.target.value)} style={{ width: '100%' }}/>
        </div>
        <div>
          <div className="mono" style={{ marginBottom: 6, color: 'var(--ink-3)' }}>Slit separation: {slitSep}</div>
          <input type="range" min="20" max="100" value={slitSep} onChange={e => setSlitSep(+e.target.value)} style={{ width: '100%' }}/>
        </div>
      </div>
    </div>
  );
};

// ---------- pH Scale ----------
const PhScale = () => {
  const [pH, setpH] = useStateI(7);
  const examples = [
    'Battery acid','Stomach acid','Lemon juice','Vinegar',
    'Tomato juice','Coffee','Milk','Pure water','Seawater',
    'Baking soda','Milk of magnesia','Ammonia solution',
    'Bleach','Oven cleaner','Drain cleaner',
  ];
  const getColor = (v) => {
    const colors = ['#c0392b','#e74c3c','#e67e22','#d35400','#f39c12','#f1c40f','#2ecc71','#27ae60','#1abc9c','#3498db','#2980b9','#2471a3','#8e44ad','#7d3c98','#6c3483'];
    return colors[Math.round(Math.max(0, Math.min(14, v)))];
  };
  const acidBase = pH < 7 ? 'Acid' : pH > 7 ? 'Base' : 'Neutral';
  const logLabel = pH <= 7 ? `[H⁺] = 10⁻${pH} mol/L` : `[OH⁻] = 10⁻${14 - pH} mol/L`;
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 24 }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', background: getColor(pH), display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'monospace', fontSize: 30, fontWeight: 700, flexShrink: 0, transition: 'background 0.25s' }}>
          {pH}
        </div>
        <div>
          <div style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic', fontSize: 22, marginBottom: 4 }}>{examples[pH]}</div>
          <div className="mono" style={{ color: 'var(--ink-3)', fontSize: 12 }}>{acidBase} · {logLabel}</div>
        </div>
      </div>
      <div style={{ position: 'relative', height: 20, borderRadius: 10, marginBottom: 12, overflow: 'hidden', background: 'linear-gradient(to right,#c0392b,#e67e22,#f1c40f,#27ae60,#3498db,#6c3483)' }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${(pH / 14) * 100}%`, width: 3, background: '#fff', boxShadow: '0 0 6px rgba(0,0,0,.5)', transform: 'translateX(-50%)', transition: 'left 0.2s' }}/>
      </div>
      <input type="range" min="0" max="14" step="1" value={pH} onChange={e => setpH(+e.target.value)} style={{ width: '100%', marginBottom: 8 }}/>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, fontFamily: 'monospace', color: 'var(--ink-3)' }}>
        {Array.from({ length: 15 }, (_, i) => <span key={i}>{i}</span>)}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, fontFamily: 'monospace', color: 'var(--ink-3)', marginTop: 6 }}>
        <span style={{ color: '#e74c3c' }}>← More acidic</span><span>Neutral</span><span style={{ color: '#6c3483' }}>More basic →</span>
      </div>
    </div>
  );
};

// Iframe wrapper — for self-contained HTML simulations ported from other projects
const makeIframeSim = (src, fallbackTitle) => {
  const Sim = () => {
    const [ready, setReady] = useStateI(false);
    return (
      <div style={{ position: 'relative', borderRadius: 8, overflow: 'hidden' }}>
        {!ready && (
          <div style={{ height: 480, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--paper-2)', color: 'var(--ink-3)', fontFamily: 'monospace', fontSize: 13 }}>
            Loading {fallbackTitle}…
          </div>
        )}
        <iframe src={src} title={fallbackTitle}
          style={{ width: '100%', height: 500, border: 'none', display: ready ? 'block' : 'none' }}
          sandbox="allow-scripts allow-same-origin"
          onLoad={() => setReady(true)}
        />
      </div>
    );
  };
  return Sim;
};

const INTERACTIVES = {
  'newton-first': { title: "Frictionless Puck", comp: NewtonFirst },
  'newton-third': { title: "Action & Reaction", comp: NewtonThird },
  'evolution-sim': { title: "Natural Selection, Fast-Forward", comp: EvolutionSim },
  'meter-tap': { title: "Iambic Pentameter Tapper", comp: MeterTap },
  'deriv-plot': { title: "Tangent Line Visualizer", comp: DerivPlot },
  'rome-map': { title: "Rome, Century by Century", comp: RomeMap },
  'double-slit': { title: "Double-Slit Experiment", comp: DoubleSlit },
  'ph': { title: "pH Scale Explorer", comp: PhScale },
  'chaos': { title: "Chaos Theory Explorer", comp: makeIframeSim('content/sims/chaos.html', 'Chaos Theory Explorer') },
  'fluid': { title: "Fluid Dynamics Simulator", comp: makeIframeSim('content/sims/fluid.html', 'Fluid Dynamics') },
  'particle-life': { title: "Particle Life — Emergence", comp: makeIframeSim('content/sims/particle.html', 'Particle Life') },
  'math-game': { title: "Math Mania Mini-Games", comp: makeIframeSim('content/sims/kinneret.html', 'Math Mania') },
};

const InteractiveEmbed = ({ kind }) => {
  const entry = INTERACTIVES[kind];
  if (!entry) return null;
  const Comp = entry.comp;
  if (!Comp) return null;
  return (
    <div className="interactive">
      <div className="interactive-head">
        <div><span className="interactive-dot"/><span className="interactive-title">Interactive · {entry.title}</span></div>
        <div className="mono" style={{ color: 'var(--ink-3)' }}>drag / play</div>
      </div>
      <div className="interactive-body"><Comp/></div>
      <div className="interactive-foot">
        <span>Experiment freely — your changes don't save.</span>
        <button className="btn-ghost" onClick={() => window.__openTutor?.({ prompt: `Explain what I'm seeing in the "${entry.title}" interactive.` })}>
          <Icon name="sparkle" size={12}/> Ask Claude to explain
        </button>
      </div>
    </div>
  );
};
window.InteractiveEmbed = InteractiveEmbed;
window.INTERACTIVES = INTERACTIVES;
