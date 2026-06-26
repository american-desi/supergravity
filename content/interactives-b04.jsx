// content/interactives-b04.jsx
// Batch: B04-humanities — interactive widgets
// Last updated: 2026-04-23 by BATCH B04-humanities
//
// Registers humanities widgets into window.INTERACTIVES so lessons in
// history.js, literature.js, philosophy.js, religion.js, architecture.js,
// art.js, music.js can reference them via { type: 'interactive', key: 'xxx' }.
// Loaded via type="text/babel".

(function () {
  const { useState, useEffect, useRef, useMemo } = React;
  const uS = useState, uE = useEffect, uR = useRef, uM = useMemo;

  const INK = '#1a1d2b', ORANGE = '#c8621a', GREEN = '#4a5d3a', GOLD = '#a88a3a';
  const PAPER = '#f4efe6', LIGHT = '#e8e3d4', RULE = '#c9c0aa', SUB = '#5a5d6e';
  const SERIF = 'Instrument Serif, serif', MONO = 'JetBrains Mono, monospace';

  // =============================================================
  // 1. TIMELINE — world history scroll
  // =============================================================
  const Timeline = () => {
    const events = [
      { y: -3200, label: 'Writing invented', region: 'Mesopotamia' },
      { y: -2560, label: 'Great Pyramid built', region: 'Egypt' },
      { y: -1754, label: 'Code of Hammurabi', region: 'Babylon' },
      { y: -776, label: 'First Olympic Games', region: 'Greece' },
      { y: -563, label: 'Buddha born', region: 'India' },
      { y: -551, label: 'Confucius born', region: 'China' },
      { y: -480, label: 'Battle of Salamis', region: 'Greece' },
      { y: -399, label: 'Socrates executed', region: 'Greece' },
      { y: -221, label: 'Qin unifies China', region: 'China' },
      { y: -44,  label: 'Caesar assassinated', region: 'Rome' },
      { y: 33,   label: 'Jesus crucified', region: 'Judea' },
      { y: 476,  label: 'Fall of Western Rome', region: 'Italy' },
      { y: 622,  label: 'Muhammad\'s hijra', region: 'Arabia' },
      { y: 800,  label: 'Charlemagne crowned', region: 'Francia' },
      { y: 1066, label: 'Norman Conquest', region: 'England' },
      { y: 1215, label: 'Magna Carta', region: 'England' },
      { y: 1347, label: 'Black Death arrives', region: 'Europe' },
      { y: 1439, label: 'Gutenberg press', region: 'Germany' },
      { y: 1492, label: 'Columbus sails', region: 'Atlantic' },
      { y: 1517, label: 'Luther\'s 95 Theses', region: 'Saxony' },
      { y: 1687, label: 'Newton\'s Principia', region: 'England' },
      { y: 1776, label: 'American Declaration', region: 'America' },
      { y: 1789, label: 'French Revolution', region: 'France' },
      { y: 1859, label: 'Darwin\'s Origin', region: 'England' },
      { y: 1914, label: 'World War I begins', region: 'Europe' },
      { y: 1945, label: 'Atomic bomb / UN', region: 'Global' },
      { y: 1969, label: 'Moon landing', region: 'USA' },
      { y: 1989, label: 'Berlin Wall falls', region: 'Germany' },
    ];
    const [hover, setHover] = uS(null);
    const minY = -3500, maxY = 2020, range = maxY - minY;
    const X = (y) => 30 + ((y - minY) / range) * 740;
    return (
      <div>
        <svg viewBox="0 0 800 200" width="100%" height="220">
          <line x1="30" y1="120" x2="770" y2="120" stroke={INK} strokeWidth="1.5"/>
          {[-3000, -2000, -1000, 0, 1000, 2000].map(y => (
            <g key={y}>
              <line x1={X(y)} y1="115" x2={X(y)} y2="125" stroke={INK}/>
              <text x={X(y)} y="140" textAnchor="middle" fontSize="9" fontFamily={MONO} fill={SUB}>{y < 0 ? `${-y} BCE` : `${y} CE`}</text>
            </g>
          ))}
          {events.map((e, i) => {
            const on = hover === i;
            return (
              <g key={i} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} style={{ cursor:'pointer' }}>
                <line x1={X(e.y)} y1="120" x2={X(e.y)} y2={i % 2 === 0 ? 80 : 160} stroke={on ? ORANGE : RULE}/>
                <circle cx={X(e.y)} cy="120" r={on ? 4 : 3} fill={on ? ORANGE : INK}/>
                {on && (
                  <g>
                    <rect x={Math.max(X(e.y) - 80, 5)} y={i % 2 === 0 ? 40 : 170} width="160" height="28" fill={PAPER} stroke={RULE}/>
                    <text x={Math.max(X(e.y), 85)} y={i % 2 === 0 ? 55 : 185} textAnchor="middle" fontSize="11" fontFamily={SERIF} fill={INK}>{e.label}</text>
                    <text x={Math.max(X(e.y), 85)} y={i % 2 === 0 ? 66 : 196} textAnchor="middle" fontSize="9" fontFamily={MONO} fill={SUB}>{e.region} · {e.y < 0 ? `${-e.y} BCE` : `${e.y} CE`}</text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
        <div style={{ fontSize:12, color:SUB, textAlign:'center', marginTop:-8 }}>Hover a tick to read the event. Five millennia of recorded history on one line.</div>
      </div>
    );
  };

  // =============================================================
  // 2. PERSPECTIVE — Brunelleschi one-point perspective
  // =============================================================
  const Perspective = () => {
    const [vpX, setVpX] = uS(200);
    const [vpY, setVpY] = uS(130);
    const tiles = 6;
    const lines = [];
    for (let i = -tiles; i <= tiles; i++) {
      const x = 200 + i * 40;
      lines.push({ x1: x, y1: 260, x2: vpX, y2: vpY });
    }
    // Receding horizontals
    const recedes = [];
    for (let i = 1; i <= 5; i++) {
      const t = i / 6;
      const y = 260 + (vpY - 260) * t;
      recedes.push(y);
    }
    return (
      <div>
        <svg viewBox="0 0 400 280" width="100%" height="300"
             onClick={(e) => {
               const pt = e.currentTarget.getBoundingClientRect();
               const sx = (e.clientX - pt.left) / pt.width * 400;
               const sy = (e.clientY - pt.top) / pt.height * 280;
               if (sy < 200) { setVpX(Math.max(20, Math.min(380, sx))); setVpY(Math.max(20, Math.min(180, sy))); }
             }} style={{ cursor:'crosshair' }}>
          <rect x="0" y="0" width="400" height="280" fill={PAPER}/>
          <line x1="0" y1={vpY} x2="400" y2={vpY} stroke={RULE} strokeDasharray="3 3"/>
          <text x="8" y={vpY - 4} fontSize="9" fontFamily={MONO} fill={SUB}>HORIZON</text>
          {lines.map((l, i) => <line key={i} {...l} stroke={INK} strokeOpacity="0.35"/>)}
          {recedes.map((y, i) => <line key={i} x1="40" y1={y} x2="360" y2={y} stroke={INK} strokeOpacity="0.35"/>)}
          <line x1="40" y1="260" x2="360" y2="260" stroke={INK} strokeWidth="1.5"/>
          <circle cx={vpX} cy={vpY} r="4" fill={ORANGE}/>
          <text x={vpX + 8} y={vpY + 4} fontSize="10" fontFamily={MONO} fill={ORANGE}>VANISHING POINT</text>
        </svg>
        <div style={{ fontSize:12, color:SUB, textAlign:'center' }}>Click anywhere above the floor to move the vanishing point. Alberti, 1435.</div>
      </div>
    );
  };

  // =============================================================
  // 3. ARCH COMPARE — Roman vs Gothic
  // =============================================================
  const ArchCompare = () => {
    const [view, setView] = uS('both');
    const roman = (x, y, w, h) => {
      const rx = w / 2;
      return `M ${x} ${y} L ${x} ${y - h + rx} A ${rx} ${rx} 0 0 1 ${x + w} ${y - h + rx} L ${x + w} ${y}`;
    };
    const gothic = (x, y, w, h) => {
      const mid = x + w / 2;
      const peak = y - h;
      return `M ${x} ${y} L ${x} ${y - h + w/2} Q ${x} ${peak - 5} ${mid} ${peak - 5} Q ${x + w} ${peak - 5} ${x + w} ${y - h + w/2} L ${x + w} ${y}`;
    };
    return (
      <div>
        <svg viewBox="0 0 400 240" width="100%" height="260">
          <rect x="0" y="0" width="400" height="240" fill={PAPER}/>
          <line x1="0" y1="210" x2="400" y2="210" stroke={INK} strokeWidth="1.2"/>
          {(view === 'both' || view === 'roman') && (
            <g>
              <path d={roman(60, 210, 100, 140)} stroke={INK} strokeWidth="2" fill={LIGHT}/>
              {[40,35,30,25,20,15,10].map((a, i) => (
                <line key={i} x1={110} y1={120 + i*2} x2={110 - Math.cos(a*Math.PI/180)*30} y2={120 - Math.sin(a*Math.PI/180)*20 + i*2} stroke={ORANGE} strokeOpacity="0.7"/>
              ))}
              <text x="110" y="230" textAnchor="middle" fontSize="11" fontFamily={SERIF} fill={INK}>Roman round arch</text>
              <text x="110" y="70" textAnchor="middle" fontSize="9" fontFamily={MONO} fill={ORANGE}>thrust pushes outward</text>
            </g>
          )}
          {(view === 'both' || view === 'gothic') && (
            <g>
              <path d={gothic(240, 210, 100, 180)} stroke={INK} strokeWidth="2" fill={LIGHT}/>
              <line x1="290" y1="35" x2="290" y2="180" stroke={GREEN} strokeWidth="2" strokeDasharray="4 3"/>
              <text x="290" y="230" textAnchor="middle" fontSize="11" fontFamily={SERIF} fill={INK}>Gothic pointed arch</text>
              <text x="290" y="25" textAnchor="middle" fontSize="9" fontFamily={MONO} fill={GREEN}>thrust runs more vertical</text>
            </g>
          )}
        </svg>
        <div style={{ display:'flex', gap:8, justifyContent:'center', marginTop:4 }}>
          {['roman','gothic','both'].map(v => (
            <button key={v} onClick={()=>setView(v)} style={{
              padding:'4px 10px', fontSize:11, fontFamily:MONO, letterSpacing:0.4, textTransform:'uppercase',
              background: view===v ? INK : 'transparent', color: view===v ? PAPER : INK,
              border:`1px solid ${INK}`, cursor:'pointer'
            }}>{v}</button>
          ))}
        </div>
      </div>
    );
  };

  // =============================================================
  // 4. METER SCANNER — iambic pentameter
  // =============================================================
  const Meter = () => {
    const lines = [
      { text: "Shall I compare thee to a sum mer's day?", key: [0,1,0,1,0,1,0,1,0,1], attrib: 'Sonnet 18' },
      { text: "To be or not to be that is the ques tion", key: [0,1,0,1,0,1,0,1,0,1,0], attrib: 'Hamlet' },
      { text: "When I con sid er how my light is spent", key: [0,1,0,1,0,1,0,1,0,1], attrib: 'Milton, Sonnet 19' },
    ];
    const [li, setLi] = uS(0);
    const [marks, setMarks] = uS({});
    const line = lines[li];
    const words = line.text.split(' ');
    const toggle = (i) => setMarks(m => ({ ...m, [i]: ((m[i] ?? 0) + 1) % 3 }));
    const mark = (i) => marks[i] ?? 0;
    const correct = words.every((_, i) => (mark(i) === 1 || mark(i) === 2) ? (mark(i) === 2) === (line.key[i] === 1) : true);
    return (
      <div>
        <div style={{ background:PAPER, padding:'18px 14px', border:`1px solid ${RULE}`, textAlign:'center', marginBottom:10 }}>
          <div style={{ fontSize:11, fontFamily:MONO, color:SUB, marginBottom:10, letterSpacing:0.5 }}>{line.attrib.toUpperCase()}</div>
          <div style={{ fontFamily:SERIF, fontSize:22, lineHeight:1.6, color:INK }}>
            {words.map((w, i) => {
              const m = mark(i);
              const sym = m === 2 ? '/' : m === 1 ? '⌣' : '';
              const hit = m !== 0 && (m === 2) === (line.key[i] === 1);
              return (
                <span key={i} onClick={()=>toggle(i)} style={{ cursor:'pointer', position:'relative', display:'inline-block', margin:'0 3px', color: m === 0 ? INK : hit ? GREEN : ORANGE }}>
                  <span style={{ position:'absolute', top:-18, left:'50%', transform:'translateX(-50%)', fontSize:14, fontFamily:MONO }}>{sym}</span>
                  {w}
                </span>
              );
            })}
          </div>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
          <div style={{ fontSize:12, color:SUB }}>Click a syllable: unstress (⌣) → stress (/) → clear.</div>
          <button onClick={()=>{ setLi((li+1)%lines.length); setMarks({}); }} style={{ padding:'4px 10px', fontSize:11, fontFamily:MONO, background:'transparent', border:`1px solid ${INK}`, cursor:'pointer' }}>NEXT LINE →</button>
        </div>
      </div>
    );
  };

  // =============================================================
  // 5. TROLLEY — ethics
  // =============================================================
  const Trolley = () => {
    const [pulled, setPulled] = uS(null);
    return (
      <div>
        <svg viewBox="0 0 400 200" width="100%" height="210">
          <rect x="0" y="0" width="400" height="200" fill={PAPER}/>
          {/* main track */}
          <line x1="30" y1="110" x2="380" y2="110" stroke={INK} strokeWidth="2"/>
          <line x1="30" y1="118" x2="380" y2="118" stroke={INK} strokeWidth="2"/>
          {/* switch */}
          <line x1="200" y1="110" x2={pulled === 'pull' ? 280 : 200} y2={pulled === 'pull' ? 160 : 110} stroke={pulled === 'pull' ? GREEN : SUB} strokeWidth="2"/>
          <line x1="200" y1="118" x2={pulled === 'pull' ? 280 : 200} y2={pulled === 'pull' ? 168 : 118} stroke={pulled === 'pull' ? GREEN : SUB} strokeWidth="2"/>
          {/* branch track always visible */}
          <line x1="200" y1="110" x2="380" y2="160" stroke={RULE} strokeWidth="1.5" strokeDasharray="4 3"/>
          {/* trolley */}
          <rect x={pulled === null ? 40 : pulled === 'pull' ? 250 : 320} y={pulled === 'pull' ? 135 : 98} width="30" height="20" fill={ORANGE}/>
          {/* five on main track */}
          {[0,1,2,3,4].map(i => <circle key={i} cx={310 + i*10} cy="114" r="5" fill={pulled === 'pull' ? LIGHT : INK}/>)}
          {/* one on branch */}
          <circle cx="360" cy="160" r="5" fill={pulled === 'pull' ? INK : LIGHT}/>
          {/* lever */}
          <g onClick={()=>setPulled(pulled === 'pull' ? null : 'pull')} style={{cursor:'pointer'}}>
            <circle cx="180" cy="60" r="18" fill={pulled === 'pull' ? GREEN : RULE} stroke={INK}/>
            <text x="180" y="64" textAnchor="middle" fontSize="10" fontFamily={MONO} fill={INK}>{pulled === 'pull' ? 'PULLED' : 'PULL'}</text>
          </g>
          <text x="20" y="30" fontSize="11" fontFamily={MONO} fill={SUB}>MAIN TRACK — 5 PEOPLE</text>
          <text x="250" y="188" fontSize="11" fontFamily={MONO} fill={SUB}>BRANCH — 1 PERSON</text>
        </svg>
        <div style={{ fontSize:13, color:INK, lineHeight:1.5, padding:'10px 4px', minHeight:54 }}>
          {pulled === null && 'Do nothing. Five die. Your hands are clean — but the outcome is worse.'}
          {pulled === 'pull' && 'You divert the trolley. One dies. Utilitarians call this right; Kantians point out you have used a person as a means.'}
        </div>
      </div>
    );
  };

  // =============================================================
  // 6. SHIP OF THESEUS
  // =============================================================
  const ShipTheseus = () => {
    const [replaced, setReplaced] = uS(0);
    const planks = 12;
    return (
      <div>
        <svg viewBox="0 0 400 220" width="100%" height="240">
          <rect x="0" y="0" width="400" height="220" fill={PAPER}/>
          <path d="M 60 140 Q 200 100 340 140 L 330 180 Q 200 160 70 180 Z" fill={LIGHT} stroke={INK}/>
          {Array.from({length: planks}).map((_, i) => {
            const x = 70 + i * 22;
            const replacedThis = i < replaced;
            return <rect key={i} x={x} y="142" width="18" height="32" fill={replacedThis ? GOLD : INK} opacity={replacedThis ? 0.9 : 0.8}/>;
          })}
          <line x1="200" y1="140" x2="200" y2="40" stroke={INK} strokeWidth="2"/>
          <path d="M 200 40 L 260 70 L 200 90 Z" fill={LIGHT} stroke={INK}/>
        </svg>
        <input type="range" min="0" max={planks} value={replaced} onChange={e=>setReplaced(+e.target.value)} style={{width:'100%', accentColor:ORANGE}}/>
        <div style={{ display:'flex', justifyContent:'space-between', fontSize:12, fontFamily:MONO, color:SUB, marginTop:4 }}>
          <span>{replaced} / {planks} planks replaced</span>
          <span>{replaced === 0 ? 'Original ship' : replaced === planks ? 'All planks are new — still Theseus\'s ship?' : 'Same ship?'}</span>
        </div>
        <div style={{ fontSize:12, color:SUB, marginTop:8, lineHeight:1.55 }}>
          Plutarch records this puzzle. Drag to replace planks. At what point does the ship stop being Theseus's? Now imagine the old planks are rebuilt into a second ship. Which is the real one?
        </div>
      </div>
    );
  };

  // =============================================================
  // 7. COLOR WHEEL
  // =============================================================
  const ColorWheel = () => {
    const [mode, setMode] = uS('complementary');
    const [sel, setSel] = uS(0);
    const segments = 12;
    const colors = Array.from({length: segments}, (_, i) => `hsl(${(i * 360 / segments)}, 65%, 50%)`);
    const related = (i) => {
      if (mode === 'complementary') return [(i + 6) % 12];
      if (mode === 'analogous') return [(i + 1) % 12, (i + 11) % 12];
      if (mode === 'triadic') return [(i + 4) % 12, (i + 8) % 12];
      return [];
    };
    const r = related(sel);
    return (
      <div>
        <svg viewBox="0 0 280 280" width="100%" height="280">
          {colors.map((c, i) => {
            const a0 = (i / segments) * 2 * Math.PI - Math.PI/2;
            const a1 = ((i+1) / segments) * 2 * Math.PI - Math.PI/2;
            const cx = 140, cy = 140, ri = 50, ro = 115;
            const x0o = cx + ro * Math.cos(a0), y0o = cy + ro * Math.sin(a0);
            const x1o = cx + ro * Math.cos(a1), y1o = cy + ro * Math.sin(a1);
            const x0i = cx + ri * Math.cos(a0), y0i = cy + ri * Math.sin(a0);
            const x1i = cx + ri * Math.cos(a1), y1i = cy + ri * Math.sin(a1);
            const d = `M ${x0o} ${y0o} A ${ro} ${ro} 0 0 1 ${x1o} ${y1o} L ${x1i} ${y1i} A ${ri} ${ri} 0 0 0 ${x0i} ${y0i} Z`;
            const hit = i === sel || r.includes(i);
            return <path key={i} d={d} fill={c} opacity={hit ? 1 : 0.3} stroke={INK} strokeWidth={hit ? 2 : 0.5} onClick={()=>setSel(i)} style={{cursor:'pointer'}}/>;
          })}
          <circle cx="140" cy="140" r="48" fill={PAPER} stroke={RULE}/>
          <text x="140" y="136" textAnchor="middle" fontSize="10" fontFamily={MONO} fill={SUB}>{mode.toUpperCase()}</text>
          <text x="140" y="152" textAnchor="middle" fontSize="12" fontFamily={SERIF} fill={INK}>hue {sel}</text>
        </svg>
        <div style={{ display:'flex', gap:8, justifyContent:'center', marginTop:-8 }}>
          {['complementary','analogous','triadic'].map(m => (
            <button key={m} onClick={()=>setMode(m)} style={{
              padding:'4px 10px', fontSize:11, fontFamily:MONO, letterSpacing:0.4, textTransform:'uppercase',
              background: mode===m ? INK : 'transparent', color: mode===m ? PAPER : INK,
              border:`1px solid ${INK}`, cursor:'pointer'
            }}>{m}</button>
          ))}
        </div>
      </div>
    );
  };

  // =============================================================
  // 8. CIRCLE OF FIFTHS
  // =============================================================
  const CircleFifths = () => {
    const major = ['C','G','D','A','E','B','F♯','D♭','A♭','E♭','B♭','F'];
    const minor = ['a','e','b','f♯','c♯','g♯','d♯','b♭','f','c','g','d'];
    const sharps = [0,1,2,3,4,5,6,5,4,3,2,1];
    const [sel, setSel] = uS(0);
    return (
      <div>
        <svg viewBox="0 0 280 280" width="100%" height="280">
          {major.map((key, i) => {
            const a = (i / 12) * 2 * Math.PI - Math.PI/2;
            const cx = 140 + 100 * Math.cos(a), cy = 140 + 100 * Math.sin(a);
            const hit = i === sel;
            return (
              <g key={i} onClick={()=>setSel(i)} style={{cursor:'pointer'}}>
                <circle cx={cx} cy={cy} r="22" fill={hit ? ORANGE : PAPER} stroke={INK}/>
                <text x={cx} y={cy - 2} textAnchor="middle" fontSize="14" fontFamily={SERIF} fill={hit ? PAPER : INK}>{key}</text>
                <text x={cx} y={cy + 10} textAnchor="middle" fontSize="9" fontFamily={SERIF} fill={hit ? PAPER : SUB} fontStyle="italic">{minor[i]}</text>
              </g>
            );
          })}
          <circle cx="140" cy="140" r="54" fill={PAPER} stroke={RULE}/>
          <text x="140" y="134" textAnchor="middle" fontSize="10" fontFamily={MONO} fill={SUB}>KEY OF</text>
          <text x="140" y="154" textAnchor="middle" fontSize="20" fontFamily={SERIF} fill={INK}>{major[sel]} major</text>
          <text x="140" y="170" textAnchor="middle" fontSize="10" fontFamily={MONO} fill={SUB}>{sel === 0 ? 'no accidentals' : sel <= 6 ? `${sel} sharp${sel>1?'s':''}` : `${12-sel} flat${12-sel>1?'s':''}`}</text>
        </svg>
        <div style={{ fontSize:12, color:SUB, textAlign:'center', marginTop:-6 }}>
          Each step clockwise adds a sharp (or drops a flat). The dominant of each key is the next one over. Tap to select.
        </div>
      </div>
    );
  };

  // =============================================================
  // 9. RULE OF THIRDS overlay
  // =============================================================
  const RuleOfThirds = () => {
    const [showGrid, setShowGrid] = uS(true);
    const [showGolden, setShowGolden] = uS(false);
    return (
      <div>
        <svg viewBox="0 0 400 260" width="100%" height="280">
          {/* A stylized landscape */}
          <rect x="0" y="0" width="400" height="260" fill="#6a8ba8"/>
          <rect x="0" y="130" width="400" height="130" fill="#4a5d3a"/>
          <circle cx="280" cy="85" r="30" fill="#f4d58d"/>
          <polygon points="0,180 80,110 130,160 190,100 240,170 320,120 400,180 400,260 0,260" fill="#3a4a2a"/>
          {showGrid && (
            <g>
              <line x1="133" y1="0" x2="133" y2="260" stroke={PAPER} strokeWidth="1" strokeDasharray="4 4" opacity="0.9"/>
              <line x1="267" y1="0" x2="267" y2="260" stroke={PAPER} strokeWidth="1" strokeDasharray="4 4" opacity="0.9"/>
              <line x1="0" y1="87" x2="400" y2="87" stroke={PAPER} strokeWidth="1" strokeDasharray="4 4" opacity="0.9"/>
              <line x1="0" y1="173" x2="400" y2="173" stroke={PAPER} strokeWidth="1" strokeDasharray="4 4" opacity="0.9"/>
              {[[133,87],[267,87],[133,173],[267,173]].map(([x,y], i) => (
                <circle key={i} cx={x} cy={y} r="4" fill={ORANGE}/>
              ))}
            </g>
          )}
          {showGolden && (
            <g>
              <path d="M 400 0 A 240 240 0 0 0 160 240 L 400 240 Z" fill="none" stroke={GOLD} strokeWidth="1.5" opacity="0.9"/>
              <rect x="160" y="0" width="240" height="240" fill="none" stroke={GOLD} strokeWidth="1" opacity="0.6"/>
            </g>
          )}
        </svg>
        <div style={{ display:'flex', gap:8, justifyContent:'center', marginTop:6 }}>
          <button onClick={()=>setShowGrid(!showGrid)} style={{ padding:'4px 10px', fontSize:11, fontFamily:MONO, background: showGrid ? INK : 'transparent', color: showGrid ? PAPER : INK, border:`1px solid ${INK}`, cursor:'pointer' }}>RULE OF THIRDS</button>
          <button onClick={()=>setShowGolden(!showGolden)} style={{ padding:'4px 10px', fontSize:11, fontFamily:MONO, background: showGolden ? INK : 'transparent', color: showGolden ? PAPER : INK, border:`1px solid ${INK}`, cursor:'pointer' }}>GOLDEN RATIO</button>
        </div>
        <div style={{ fontSize:12, color:SUB, textAlign:'center', marginTop:6 }}>
          Notice how the sun sits on an upper intersection. Painters and photographers do this deliberately.
        </div>
      </div>
    );
  };

  // =============================================================
  // 10. CHORD BUILDER — on a staff
  // =============================================================
  const ChordBuilder = () => {
    const [root, setRoot] = uS(4); // middle C area
    const [quality, setQuality] = uS('major');
    const names = ['C','D','E','F','G','A','B','C','D','E','F','G'];
    const intervals = { major: [0,4,7], minor: [0,3,7], dim: [0,3,6], aug: [0,4,8], maj7: [0,4,7,11] };
    const tones = intervals[quality];
    const noteY = (offset) => 95 - offset * 5; // each step = 5px
    return (
      <div>
        <svg viewBox="0 0 320 160" width="100%" height="180">
          {[0,1,2,3,4].map(i => <line key={i} x1="20" y1={60 + i*10} x2="300" y2={60 + i*10} stroke={INK} strokeWidth="0.8"/>)}
          {/* Treble clef (simplified) */}
          <text x="30" y="96" fontSize="44" fontFamily={SERIF} fill={INK}>𝄞</text>
          {/* Notes */}
          {tones.map((t, i) => (
            <g key={i}>
              <ellipse cx={180 + i*20} cy={noteY(root + Math.round(t * 7/12))} rx="7" ry="5" fill={INK}/>
              <line x1={187 + i*20} y1={noteY(root + Math.round(t * 7/12))} x2={187 + i*20} y2={noteY(root + Math.round(t * 7/12)) - 30} stroke={INK}/>
            </g>
          ))}
        </svg>
        <div style={{ display:'flex', gap:6, justifyContent:'center', marginBottom:6, flexWrap:'wrap' }}>
          {Object.keys(intervals).map(q => (
            <button key={q} onClick={()=>setQuality(q)} style={{ padding:'4px 8px', fontSize:11, fontFamily:MONO, background: quality===q ? INK : 'transparent', color: quality===q ? PAPER : INK, border:`1px solid ${INK}`, cursor:'pointer' }}>{q}</button>
          ))}
        </div>
        <div style={{ fontSize:12, color:SUB, textAlign:'center' }}>
          Root: <strong>{names[root]}</strong>. A {quality} chord = intervals {tones.join(', ')} semitones above the root. Every Western chord starts here.
        </div>
        <input type="range" min="0" max="7" value={root} onChange={e=>setRoot(+e.target.value)} style={{width:'100%', marginTop:6, accentColor:ORANGE}}/>
      </div>
    );
  };

  // =============================================================
  // 11. FUGUE VOICES — counterpoint animation
  // =============================================================
  const FugueVoices = () => {
    const [t, setT] = uS(0);
    const [running, setRunning] = uS(false);
    uE(() => { if (!running) return; const i = setInterval(() => setT(x => (x + 1) % 80), 100); return () => clearInterval(i); }, [running]);
    const subject = [0,2,1,3,4,3,2,1,0,-1,0,1];
    const voiceY = [40, 70, 100, 130];
    const entry = [0, 12, 24, 36];
    return (
      <div>
        <svg viewBox="0 0 400 180" width="100%" height="200">
          <rect x="0" y="0" width="400" height="180" fill={PAPER}/>
          {voiceY.map((y, vi) => (
            <g key={vi}>
              <line x1="20" y1={y} x2="380" y2={y} stroke={RULE} strokeDasharray="2 3"/>
              <text x="5" y={y + 4} fontSize="9" fontFamily={MONO} fill={SUB}>V{vi+1}</text>
              {subject.map((n, i) => {
                const x = 30 + (entry[vi] + i) * 8;
                if (x > 380 || (entry[vi] + i) > t) return null;
                return <circle key={i} cx={x} cy={y - n*3} r="2.5" fill={vi === 0 ? INK : vi === 1 ? ORANGE : vi === 2 ? GREEN : GOLD}/>;
              })}
            </g>
          ))}
          <text x="200" y="165" textAnchor="middle" fontSize="10" fontFamily={MONO} fill={SUB}>t = {t}</text>
        </svg>
        <button onClick={()=>{ if (t >= 79) setT(0); setRunning(!running); }} style={{ padding:'6px 14px', fontSize:11, fontFamily:MONO, background:INK, color:PAPER, border:0, cursor:'pointer', display:'block', margin:'0 auto' }}>
          {running ? '⏸ PAUSE' : t === 0 ? '▶ PLAY FUGUE' : '▶ RESUME'}
        </button>
        <div style={{ fontSize:12, color:SUB, marginTop:8, lineHeight:1.55, textAlign:'center' }}>
          The same theme enters in four voices, staggered. Bach wrote fugues in five and six voices.
        </div>
      </div>
    );
  };

  // =============================================================
  // 12. GRID PLAN — Manhattan 1811
  // =============================================================
  const GridPlan = () => {
    const [show, setShow] = uS('grid');
    return (
      <div>
        <svg viewBox="0 0 400 260" width="100%" height="280">
          <rect x="0" y="0" width="400" height="260" fill="#d8d2c0"/>
          <path d="M 60 10 Q 80 60 90 130 Q 100 200 120 250 L 180 250 Q 200 200 210 130 Q 220 60 240 10 Z" fill={LIGHT} stroke={INK}/>
          {show === 'grid' && (
            <g stroke={INK} strokeOpacity="0.45" strokeWidth="0.6">
              {Array.from({length:24}).map((_, i) => <line key={'h'+i} x1="60" y1={15 + i*10} x2="240" y2={15 + i*10}/>)}
              {Array.from({length:6}).map((_, i) => <line key={'v'+i} x1={80 + i*25} y1="10" x2={80 + i*25} y2="250"/>)}
            </g>
          )}
          {show === 'park' && (
            <g>
              {Array.from({length:24}).map((_, i) => <line key={'h'+i} x1="60" y1={15 + i*10} x2="240" y2={15 + i*10} stroke={INK} strokeOpacity="0.3"/>)}
              <rect x="130" y="70" width="45" height="90" fill={GREEN} stroke={INK}/>
              <text x="152" y="120" textAnchor="middle" fontSize="9" fontFamily={MONO} fill={PAPER}>CENTRAL PARK</text>
            </g>
          )}
          <text x="150" y="20" textAnchor="middle" fontSize="9" fontFamily={MONO} fill={SUB}>HARLEM →</text>
          <text x="150" y="250" textAnchor="middle" fontSize="9" fontFamily={MONO} fill={SUB}>← BATTERY</text>
        </svg>
        <div style={{ display:'flex', gap:8, justifyContent:'center', marginTop:6 }}>
          <button onClick={()=>setShow('grid')} style={{ padding:'4px 10px', fontSize:11, fontFamily:MONO, background: show==='grid' ? INK : 'transparent', color: show==='grid' ? PAPER : INK, border:`1px solid ${INK}`, cursor:'pointer' }}>1811 GRID</button>
          <button onClick={()=>setShow('park')} style={{ padding:'4px 10px', fontSize:11, fontFamily:MONO, background: show==='park' ? INK : 'transparent', color: show==='park' ? PAPER : INK, border:`1px solid ${INK}`, cursor:'pointer' }}>WITH CENTRAL PARK (1858)</button>
        </div>
        <div style={{ fontSize:12, color:SUB, textAlign:'center', marginTop:6, lineHeight:1.5 }}>
          The Commissioners' Plan imposed a grid of 155 streets and 12 avenues on empty upper Manhattan. Central Park was cut out of it fifty years later.
        </div>
      </div>
    );
  };

  // =============================================================
  // 13. CUNEIFORM TABLET
  // =============================================================
  const Cuneiform = () => {
    const signs = [
      { name: 'AN — sky / god', strokes: [[0,-10],[0,10],[-10,0],[10,0],[-7,-7],[7,7]] },
      { name: 'KI — earth',    strokes: [[-10,5],[10,5],[-7,-5],[7,-5],[0,-10],[0,10]] },
      { name: 'LÚ — man',      strokes: [[-5,-10],[-5,10],[5,-8],[5,8],[-10,0],[10,0]] },
      { name: 'NIN — lady',    strokes: [[0,-12],[-6,6],[6,6],[-4,-4],[4,-4],[-10,10]] },
      { name: 'É — house',     strokes: [[-10,-6],[10,-6],[-10,6],[10,6],[-12,0],[12,0]] },
    ];
    const [sel, setSel] = uS(0);
    return (
      <div>
        <svg viewBox="0 0 360 200" width="100%" height="220">
          <rect x="10" y="10" width="340" height="180" rx="8" fill="#c9a87a" stroke="#8a6a3a" strokeWidth="2"/>
          <rect x="20" y="20" width="320" height="160" fill="#d4b488" opacity="0.5"/>
          {signs.map((s, i) => (
            <g key={i} onClick={()=>setSel(i)} style={{cursor:'pointer'}} transform={`translate(${50 + i*60}, 100)`}>
              {s.strokes.map((stk, j) => {
                const [x2, y2] = stk;
                return <g key={j}>
                  <line x1="0" y1="0" x2={x2} y2={y2} stroke={i===sel ? ORANGE : '#3a2a1a'} strokeWidth={i===sel ? 2 : 1.5} strokeLinecap="round"/>
                  <circle cx={x2} cy={y2} r="1.5" fill={i===sel ? ORANGE : '#3a2a1a'}/>
                </g>;
              })}
              <rect x="-20" y="-22" width="40" height="44" fill="transparent"/>
            </g>
          ))}
        </svg>
        <div style={{ textAlign:'center', fontFamily:SERIF, fontSize:16, color:INK, marginTop:-8 }}>
          <em>{signs[sel].name}</em>
        </div>
        <div style={{ fontSize:12, color:SUB, textAlign:'center', marginTop:4, lineHeight:1.5 }}>
          Sumerian cuneiform, c. 3,000 BCE. A stylus pressed into wet clay. The oldest writing system.
        </div>
      </div>
    );
  };

  // =============================================================
  // 14. DOME CONSTRUCTION — Brunelleschi
  // =============================================================
  const Dome = () => {
    const [stage, setStage] = uS(0);
    const stages = ['drum','inner shell','outer shell','lantern'];
    return (
      <div>
        <svg viewBox="0 0 360 280" width="100%" height="300">
          <rect x="0" y="0" width="360" height="280" fill={PAPER}/>
          {/* Drum */}
          <rect x="90" y="180" width="180" height="70" fill={LIGHT} stroke={INK}/>
          {[1,2,3,4].map(i => <line key={i} x1={90 + i*36} y1="180" x2={90 + i*36} y2="250" stroke={INK} strokeOpacity="0.3"/>)}
          {/* Inner shell */}
          {stage >= 1 && <path d="M 90 180 Q 180 40 270 180 L 90 180" fill={LIGHT} stroke={INK} strokeWidth="1.5" opacity="0.85"/>}
          {/* Outer shell */}
          {stage >= 2 && <path d="M 80 180 Q 180 25 280 180" fill="none" stroke={INK} strokeWidth="2"/>}
          {stage >= 2 && <path d="M 80 180 Q 100 120 120 100 M 280 180 Q 260 120 240 100" stroke={INK} strokeOpacity="0.4" fill="none"/>}
          {/* Lantern */}
          {stage >= 3 && (
            <g>
              <rect x="165" y="10" width="30" height="30" fill={LIGHT} stroke={INK}/>
              <polygon points="150,10 180,-15 210,10" fill={LIGHT} stroke={INK}/>
              <line x1="180" y1="-15" x2="180" y2="-25" stroke={INK}/>
              <circle cx="180" cy="-25" r="3" fill={GOLD}/>
            </g>
          )}
          <text x="180" y="270" textAnchor="middle" fontSize="10" fontFamily={MONO} fill={SUB}>FLORENCE DUOMO · 1420–1436</text>
        </svg>
        <input type="range" min="0" max="3" value={stage} onChange={e=>setStage(+e.target.value)} style={{width:'100%', accentColor:ORANGE}}/>
        <div style={{ fontSize:13, fontFamily:SERIF, color:INK, textAlign:'center', marginTop:4 }}>
          Stage {stage + 1}: <em>{stages[stage]}</em>
        </div>
        <div style={{ fontSize:12, color:SUB, textAlign:'center', marginTop:4, lineHeight:1.5 }}>
          Brunelleschi's double-shell dome over the Florence cathedral — the largest since the Pantheon, and the symbolic opening move of the Renaissance.
        </div>
      </div>
    );
  };

  // =============================================================
  // 15. WORLD RELIGIONS DEMOGRAPHIC
  // =============================================================
  const Religions = () => {
    const data = [
      { name: 'Christianity', pct: 31, color: '#4a5d8a', info: '2.4B adherents' },
      { name: 'Islam',        pct: 25, color: '#4a7d5d', info: '1.9B adherents' },
      { name: 'Unaffiliated', pct: 15, color: '#8a8a8a', info: '1.2B people' },
      { name: 'Hinduism',     pct: 15, color: '#c8621a', info: '1.2B adherents' },
      { name: 'Buddhism',     pct:  7, color: '#a88a3a', info: '500M adherents' },
      { name: 'Folk religion',pct:  6, color: '#6a5a4a', info: '400M adherents' },
      { name: 'Judaism',      pct: 0.2,color: '#3a4a6a', info: '15M adherents' },
      { name: 'Other',        pct:  1, color: '#5a5d6e', info: 'Sikh, Jain, Baháʼí…' },
    ];
    const [hover, setHover] = uS(null);
    let x = 0;
    return (
      <div>
        <svg viewBox="0 0 400 180" width="100%" height="200">
          <text x="200" y="20" textAnchor="middle" fontSize="11" fontFamily={MONO} fill={SUB}>WORLD POPULATION BY RELIGIOUS AFFILIATION</text>
          {data.map((d, i) => {
            const w = (d.pct / 100) * 380;
            const r = <g key={i} onMouseEnter={()=>setHover(i)} onMouseLeave={()=>setHover(null)} style={{cursor:'pointer'}}>
              <rect x={10 + x} y="40" width={w} height="40" fill={d.color} opacity={hover===null || hover===i ? 0.95 : 0.4} stroke={INK}/>
              {w > 30 && <text x={10 + x + w/2} y={65} textAnchor="middle" fontSize="10" fontFamily={MONO} fill={PAPER}>{d.pct}%</text>}
            </g>;
            x += w;
            return r;
          })}
          {hover !== null && (
            <g>
              <text x="200" y="110" textAnchor="middle" fontSize="16" fontFamily={SERIF} fill={INK}>{data[hover].name}</text>
              <text x="200" y="128" textAnchor="middle" fontSize="11" fontFamily={MONO} fill={SUB}>{data[hover].info} · {data[hover].pct}% of humanity</text>
            </g>
          )}
          <text x="10" y="160" fontSize="9" fontFamily={MONO} fill={SUB}>SOURCE: PEW RESEARCH · APPROX.</text>
        </svg>
        <div style={{ fontSize:12, color:SUB, textAlign:'center', marginTop:-8 }}>
          Hover to see each tradition's share. The Abrahamic and Dharmic families together cover about 4.7 billion people.
        </div>
      </div>
    );
  };

  // =============================================================
  // 16. SONATA FORM — classical structure
  // =============================================================
  const SonataForm = () => {
    const [section, setSection] = uS(0);
    const parts = [
      { label: 'Exposition', desc: 'Theme 1 in tonic. Bridge. Theme 2 in dominant (or relative major if minor).', color: ORANGE, w: 35 },
      { label: 'Development', desc: 'Themes fragmented, recombined, modulated through distant keys.', color: GREEN, w: 30 },
      { label: 'Recapitulation', desc: 'Both themes return, now both in the tonic key.', color: GOLD, w: 30 },
      { label: 'Coda', desc: 'Optional closing section, often Beethovenian in scale.', color: SUB, w: 10 },
    ];
    const total = parts.reduce((s,p) => s + p.w, 0);
    let x = 0;
    return (
      <div>
        <svg viewBox="0 0 400 180" width="100%" height="200">
          <rect x="0" y="0" width="400" height="180" fill={PAPER}/>
          <text x="200" y="25" textAnchor="middle" fontSize="11" fontFamily={MONO} fill={SUB}>FIRST-MOVEMENT SONATA FORM</text>
          {parts.map((p, i) => {
            const w = (p.w / total) * 380;
            const hit = i === section;
            const r = <g key={i} onClick={()=>setSection(i)} style={{cursor:'pointer'}}>
              <rect x={10 + x} y="50" width={w} height="50" fill={p.color} opacity={hit ? 0.95 : 0.4} stroke={INK}/>
              <text x={10 + x + w/2} y="80" textAnchor="middle" fontSize="11" fontFamily={SERIF} fill={PAPER}>{p.label}</text>
            </g>;
            x += w;
            return r;
          })}
          <text x="200" y="130" textAnchor="middle" fontSize="14" fontFamily={SERIF} fill={INK}>{parts[section].label}</text>
          <foreignObject x="20" y="140" width="360" height="40">
            <div xmlns="http://www.w3.org/1999/xhtml" style={{ fontSize:11, fontFamily:MONO, color:SUB, textAlign:'center', lineHeight:1.45 }}>{parts[section].desc}</div>
          </foreignObject>
        </svg>
        <div style={{ fontSize:12, color:SUB, textAlign:'center' }}>
          The form Haydn stabilized and Beethoven inherited. Tap a section.
        </div>
      </div>
    );
  };

  // =============================================================
  // 17. GILGAMESH TABLET EXCERPT — literary reading
  // =============================================================
  const GilgameshTablet = () => {
    const verses = [
      { tablet: 'I.1', text: "He who saw the Deep, the country's foundation, who knew the ways and learned all things…" },
      { tablet: 'IX.1', text: "For his friend Enkidu, Gilgamesh wept bitterly, wandering the wilderness." },
      { tablet: 'XI.1', text: "Utnapishtim the distant spoke to Gilgamesh: 'I will reveal, Gilgamesh, a secret matter…'" },
      { tablet: 'XI.314', text: "Climb Uruk's wall and walk back and forth. Survey its foundations, examine the brickwork…" },
    ];
    const [i, setI] = uS(0);
    const v = verses[i];
    return (
      <div>
        <div style={{ background: '#d4b488', border: `2px solid #8a6a3a`, borderRadius: 8, padding: '24px 20px', fontFamily: SERIF, textAlign:'center', minHeight: 120, position:'relative' }}>
          <div style={{ position:'absolute', top:10, left:14, fontSize:10, fontFamily:MONO, color:'#3a2a1a' }}>TABLET {v.tablet}</div>
          <div style={{ fontSize:18, color:'#1a0a00', lineHeight:1.55, fontStyle:'italic', marginTop:12 }}>"{v.text}"</div>
          <div style={{ fontSize:10, fontFamily:MONO, color:'#3a2a1a', marginTop:14 }}>— Akkadian, Standard Babylonian version, tr. Andrew George</div>
        </div>
        <div style={{ display:'flex', justifyContent:'space-between', marginTop:10, fontSize:12 }}>
          <button onClick={()=>setI((i-1+verses.length)%verses.length)} style={{ background:'transparent', border:`1px solid ${INK}`, padding:'4px 10px', fontFamily:MONO, fontSize:11, cursor:'pointer' }}>← PREV</button>
          <span style={{ color:SUB }}>{i+1} / {verses.length}</span>
          <button onClick={()=>setI((i+1)%verses.length)} style={{ background:'transparent', border:`1px solid ${INK}`, padding:'4px 10px', fontFamily:MONO, fontSize:11, cursor:'pointer' }}>NEXT →</button>
        </div>
        <div style={{ fontSize:12, color:SUB, marginTop:8, lineHeight:1.55 }}>
          The oldest long poem in the world, composed in Akkadian on clay tablets around 1200 BCE, consolidating Sumerian sources a thousand years older.
        </div>
      </div>
    );
  };

  // =============================================================
  // 18. SYLLOGISM VALIDITY CHECKER
  // =============================================================
  const Syllogism = () => {
    const cases = [
      { p1:'All humans are mortal', p2:'Socrates is a human', c:'Socrates is mortal', valid:true, reason:'Modus ponens via universal instantiation — textbook valid syllogism (Barbara).' },
      { p1:'All cats are animals', p2:'Some animals are dogs', c:'Some cats are dogs', valid:false, reason:'Undistributed middle term. The "animals" in each premise may refer to different members of the class.' },
      { p1:'If it rains, the ground is wet', p2:'The ground is wet', c:'It rained', valid:false, reason:'Affirming the consequent. The ground might be wet for another reason (sprinkler, flood).' },
      { p1:'No fish are mammals', p2:'All whales are mammals', c:'No whales are fish', valid:true, reason:'Valid categorical syllogism (Celarent).' },
      { p1:'If P then Q', p2:'Not Q', c:'Not P', valid:true, reason:'Modus tollens. The workhorse of deductive refutation.' },
    ];
    const [idx, setIdx] = uS(0);
    const [guess, setGuess] = uS(null);
    const c = cases[idx];
    const correct = guess !== null && guess === c.valid;
    return (
      <div style={{ background:PAPER, padding:'20px 18px', border:`1px solid ${RULE}` }}>
        <div style={{ fontFamily:MONO, fontSize:10, color:SUB, letterSpacing:0.5, marginBottom:10 }}>SYLLOGISM {idx+1} / {cases.length}</div>
        <div style={{ fontFamily:SERIF, fontSize:16, color:INK, lineHeight:1.7 }}>
          <div>P₁ · {c.p1}.</div>
          <div>P₂ · {c.p2}.</div>
          <div style={{ borderTop:`1px solid ${RULE}`, paddingTop:8, marginTop:8 }}>∴ &nbsp;{c.c}.</div>
        </div>
        {guess === null ? (
          <div style={{ display:'flex', gap:8, marginTop:14 }}>
            <button onClick={()=>setGuess(true)} style={{ flex:1, padding:'8px 12px', fontSize:11, fontFamily:MONO, background:GREEN, color:PAPER, border:0, cursor:'pointer' }}>VALID</button>
            <button onClick={()=>setGuess(false)} style={{ flex:1, padding:'8px 12px', fontSize:11, fontFamily:MONO, background:ORANGE, color:PAPER, border:0, cursor:'pointer' }}>INVALID</button>
          </div>
        ) : (
          <div style={{ marginTop:14, padding:'10px 12px', background: correct ? '#e6f0e0' : '#f5e6d8', border:`1px solid ${correct ? GREEN : ORANGE}` }}>
            <div style={{ fontFamily:MONO, fontSize:11, color:correct ? GREEN : ORANGE, marginBottom:4 }}>{correct ? 'CORRECT.' : 'NOT QUITE.'}</div>
            <div style={{ fontSize:13, color:INK, lineHeight:1.5 }}>{c.reason}</div>
            <button onClick={()=>{ setIdx((idx+1)%cases.length); setGuess(null); }} style={{ marginTop:8, padding:'4px 10px', fontSize:11, fontFamily:MONO, background:'transparent', border:`1px solid ${INK}`, cursor:'pointer' }}>NEXT →</button>
          </div>
        )}
      </div>
    );
  };

  // =============================================================
  // Register everything
  // =============================================================
  window.INTERACTIVES_B04 = {
    timeline:       { title:'World history timeline', hint:'Hover for events.', Component: Timeline },
    perspective:    { title:'One-point perspective', hint:'Click to move the vanishing point.', Component: Perspective },
    'arch-compare': { title:'Arch: Roman vs Gothic', hint:'Compare the two structural systems.', Component: ArchCompare },
    meter:          { title:'Scan a pentameter line', hint:'Click syllables for ⌣ and /.', Component: Meter },
    trolley:        { title:'The trolley problem', hint:'Pull the lever. Or don\'t.', Component: Trolley },
    'ship-theseus': { title:'Ship of Theseus', hint:'Replace planks. When does it stop being his?', Component: ShipTheseus },
    'color-wheel':  { title:'Color relationships', hint:'Pick a hue; see its complement.', Component: ColorWheel },
    fifths:         { title:'Circle of fifths', hint:'Tap a key.', Component: CircleFifths },
    'rule-thirds':  { title:'Rule of thirds & golden ratio', hint:'Toggle the overlays.', Component: RuleOfThirds },
    'chord-builder':{ title:'Build a chord', hint:'Stack thirds; pick a quality.', Component: ChordBuilder },
    fugue:          { title:'Fugue voices', hint:'Watch four voices enter.', Component: FugueVoices },
    'grid-plan':    { title:'Manhattan 1811 grid', hint:'Before and after Central Park.', Component: GridPlan },
    cuneiform:      { title:'Cuneiform signs', hint:'Click a sign to read it.', Component: Cuneiform },
    dome:           { title:'Brunelleschi\'s dome', hint:'Build it stage by stage.', Component: Dome },
    religions:      { title:'World religious affiliation', hint:'Hover the blocks.', Component: Religions },
    'sonata-form':  { title:'Sonata form', hint:'Tap a section.', Component: SonataForm },
    'gilgamesh-tablet':{ title:'Gilgamesh excerpts', hint:'Four verses from the standard version.', Component: GilgameshTablet },
    syllogism:      { title:'Valid or invalid?', hint:'Classify the inference.', Component: Syllogism },
  };

  window.INTERACTIVES = Object.assign({}, window.INTERACTIVES || {}, window.INTERACTIVES_B04);

  // Legacy shim — some renderers read entry.comp instead of entry.Component.
  for (const k of Object.keys(window.INTERACTIVES_B04)) {
    if (!window.INTERACTIVES[k].comp) window.INTERACTIVES[k].comp = window.INTERACTIVES_B04[k].Component;
  }

  // Extend the topic → interactive default map so subjects get a default widget.
  window.TOPIC_INTERACTIVE = Object.assign({}, window.TOPIC_INTERACTIVE || {}, {
    // history
    prehistory: 'timeline',
    mesopotamia: 'cuneiform',
    egypt: 'timeline',
    greece: 'timeline',
    rome: 'timeline',
    medieval: 'arch-compare',
    islam: 'timeline',
    renaissance: 'perspective',
    exploration: 'timeline',
    enlightenment: 'timeline',
    industrial: 'timeline',
    ww: 'timeline',
    coldwar: 'timeline',
    // literature
    readclose: 'meter',
    narrative: 'meter',
    poetics: 'meter',
    rhetoric: 'syllogism',
    epic: 'gilgamesh-tablet',
    shakespeare: 'meter',
    novel: 'meter',
    world_lit: 'gilgamesh-tablet',
    // philosophy
    ethics: 'trolley',
    epistemology: 'syllogism',
    metaphysics: 'ship-theseus',
    logic: 'syllogism',
    greeks: 'syllogism',
    eastern: 'religions',
    modern_phil: 'ship-theseus',
    // religion
    abrahamic: 'religions',
    dharmic: 'religions',
    myth: 'religions',
    // architecture
    arch_history: 'dome',
    structural: 'arch-compare',
    urban_design: 'grid-plan',
    // art
    cave_to_cath: 'perspective',
    renart: 'perspective',
    modern_art: 'rule-thirds',
    drawing: 'rule-thirds',
    color: 'color-wheel',
    composition: 'rule-thirds',
    design: 'rule-thirds',
    // music
    notation: 'chord-builder',
    harmony: 'chord-builder',
    counterpoint: 'fugue',
    classical: 'sonata-form',
    jazz: 'fifths',
    popular: 'fifths',
  });
})();
