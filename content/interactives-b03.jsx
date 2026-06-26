// content/interactives-b03.jsx
// Batch: B03-life-sciences — interactive widgets
// Last updated: 2026-04-22 by BATCH B03-life-sciences
//
// Registers compact SVG/React widgets into window.INTERACTIVES so that
// lessons in biology.js, medicine.js, psychology.js can reference them
// via { interactive: { kind: 'xxx' } }. Loaded via type="text/babel".

const { useState: uS3, useEffect: uE3, useRef: uR3, useMemo: uM3 } = React;

// ---------- Punnett Square (genetics) ----------
const Punnett = () => {
  const [p1, setP1] = uS3(['A','a']);
  const [p2, setP2] = uS3(['A','a']);
  const grid = p1.map(a1 => p2.map(a2 => [a1, a2].sort((x,y) => x<y?-1:1).join('')));
  const flat = grid.flat();
  const counts = flat.reduce((acc, g) => { acc[g] = (acc[g]||0)+1; return acc; }, {});
  const phen = flat.filter(g => g.includes('A')).length;
  const rec = flat.length - phen;
  const toggle = (which, idx) => {
    if (which === 1) setP1(p => p.map((v,i) => i===idx ? (v==='A'?'a':'A') : v));
    else setP2(p => p.map((v,i) => i===idx ? (v==='A'?'a':'A') : v));
  };
  return (
    <div>
      <svg viewBox="0 0 320 260" width="100%" height="280">
        <text x="160" y="18" textAnchor="middle" fontSize="12" fontFamily="JetBrains Mono" fill="#5a5d6e">PARENT 2 ↓</text>
        <text x="16" y="135" fontSize="12" fontFamily="JetBrains Mono" fill="#5a5d6e" transform="rotate(-90 16 135)">PARENT 1 ↓</text>
        {p2.map((a,i) => (
          <g key={'p2'+i} onClick={()=>toggle(2,i)} style={{cursor:'pointer'}}>
            <rect x={110+i*70} y={30} width="60" height="30" fill={a==='A'?'#4a5d3a':'#c8621a'} opacity="0.85"/>
            <text x={140+i*70} y={50} textAnchor="middle" fontSize="18" fontFamily="Instrument Serif" fill="#f4efe6">{a}</text>
          </g>
        ))}
        {p1.map((a,i) => (
          <g key={'p1'+i} onClick={()=>toggle(1,i)} style={{cursor:'pointer'}}>
            <rect x={40} y={70+i*70} width="60" height="30" fill={a==='A'?'#4a5d3a':'#c8621a'} opacity="0.85"/>
            <text x={70} y={90+i*70} textAnchor="middle" fontSize="18" fontFamily="Instrument Serif" fill="#f4efe6">{a}</text>
          </g>
        ))}
        {grid.map((row,i) => row.map((g,j) => (
          <g key={i+'-'+j}>
            <rect x={110+j*70} y={70+i*70} width="60" height="60" fill={g.includes('A')?'#e8e3d4':'#f4efe6'} stroke="#c9c0aa"/>
            <text x={140+j*70} y={106+i*70} textAnchor="middle" fontSize="20" fontFamily="Instrument Serif" fill="#1a1d2b">{g}</text>
          </g>
        )))}
        <text x="16" y="240" fontSize="11" fontFamily="JetBrains Mono" fill="#1a1d2b">
          Dominant phenotype: {phen}/4 · Recessive: {rec}/4
        </text>
      </svg>
      <div style={{ fontSize:12, color:'var(--ink-3)', textAlign:'center' }}>
        Tap an allele to flip it between dominant (A) and recessive (a).
      </div>
    </div>
  );
};

// ---------- Action Potential (neuro) ----------
const ActionPotential = () => {
  const [fired, setFired] = uS3(false);
  const [t, setT] = uS3(0);
  uE3(() => { if (!fired) return; const i = setInterval(() => setT(x => { if (x >= 100) { setFired(false); return 0; } return x + 2; }), 30); return () => clearInterval(i); }, [fired]);
  // Voltage trace: rest (-70mV) → depolarize (+40mV) → repolarize (-80mV) → rest
  const V = (x) => {
    if (x < 10) return -70;
    if (x < 25) return -70 + (x-10) * 7.3; // depolarization 0-15ms
    if (x < 40) return 40 - (x-25) * 8;    // repolarization 15-30ms
    if (x < 55) return -80 + (x-40) * 0.67;
    return -70;
  };
  const path = Array.from({length: Math.min(t,100)+1}, (_,i) => `${20 + i*3.6},${150 - (V(i)+80)*1.2}`).join(' L');
  return (
    <div>
      <svg viewBox="0 0 400 200" width="100%" height="220">
        <line x1="20" y1={150 - (-70+80)*1.2} x2="380" y2={150 - (-70+80)*1.2} stroke="#c9c0aa" strokeDasharray="3 3"/>
        <text x="385" y={150 - (-70+80)*1.2 + 4} fontSize="9" fontFamily="JetBrains Mono" fill="#5a5d6e">–70 mV</text>
        <line x1="20" y1={150 - (40+80)*1.2} x2="380" y2={150 - (40+80)*1.2} stroke="#c9c0aa" strokeDasharray="3 3"/>
        <text x="385" y={150 - (40+80)*1.2 + 4} fontSize="9" fontFamily="JetBrains Mono" fill="#5a5d6e">+40 mV</text>
        {t > 0 && <path d={'M' + path} fill="none" stroke="#c8621a" strokeWidth="2"/>}
        <text x="20" y="180" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">MEMBRANE POTENTIAL</text>
        <text x="260" y="180" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">TIME (ms) →</text>
      </svg>
      <div style={{ display:'flex', gap:12, marginTop:8, alignItems:'center', fontSize:13 }}>
        <button className="btn-ghost" onClick={()=>{setT(0);setFired(true);}} disabled={fired}>
          Fire the neuron
        </button>
        <span style={{ color:'var(--ink-3)', fontSize:12 }}>
          Depolarization (Na⁺ in) → repolarization (K⁺ out) → brief hyperpolarization.
        </span>
      </div>
    </div>
  );
};

// ---------- Body Systems (anatomy) ----------
const BodySystems = () => {
  const systems = [
    { id:'nerv', label:'Nervous', desc:'Brain, spinal cord, peripheral nerves. Electrical signaling.', regions:[[150,28,30]] },
    { id:'card', label:'Cardiovascular', desc:'Heart and vessels. Closed loop, pumped ~70 beats/minute.', regions:[[145,90,18]] },
    { id:'resp', label:'Respiratory', desc:'Lungs exchange O₂ and CO₂ across alveolar membrane.', regions:[[125,85,22],[170,85,22]] },
    { id:'dig',  label:'Digestive', desc:'Mouth → stomach → small intestine → colon. Absorption.', regions:[[150,135,24]] },
    { id:'renal',label:'Renal', desc:'Kidneys filter blood; nephron is the functional unit.', regions:[[125,125,10],[170,125,10]] },
    { id:'skel', label:'Musculoskeletal', desc:'Bones, joints, muscles. Support, leverage, movement.', regions:[[110,200,12],[185,200,12]] },
  ];
  const [sel, setSel] = uS3('nerv');
  const cur = systems.find(s => s.id === sel);
  return (
    <div>
      <svg viewBox="0 0 300 260" width="100%" height="280">
        <ellipse cx="150" cy="28" rx="18" ry="22" fill="#e8e3d4" stroke="#1a1d2b"/>
        <rect x="120" y="48" width="60" height="12" fill="#e8e3d4" stroke="#1a1d2b"/>
        <path d="M 110 60 L 110 170 L 130 240 L 170 240 L 190 170 L 190 60 Z" fill="#e8e3d4" stroke="#1a1d2b"/>
        <line x1="110" y1="75" x2="80"  y2="150" stroke="#1a1d2b" strokeWidth="6"/>
        <line x1="190" y1="75" x2="220" y2="150" stroke="#1a1d2b" strokeWidth="6"/>
        {cur.regions.map((r,i) => (
          <circle key={i} cx={r[0]} cy={r[1]} r={r[2]} fill="#c8621a" opacity="0.6">
            <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
          </circle>
        ))}
      </svg>
      <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginTop:4 }}>
        {systems.map(s => (
          <button key={s.id} className="btn-ghost" onClick={()=>setSel(s.id)}
            style={{ background: sel===s.id ? '#c8621a' : 'transparent', color: sel===s.id ? '#f4efe6' : 'var(--ink)', fontSize:12 }}>
            {s.label}
          </button>
        ))}
      </div>
      <div style={{ fontSize:13, color:'var(--ink-3)', marginTop:8, minHeight:36 }}>
        <strong style={{color:'var(--ink)'}}>{cur.label}.</strong> {cur.desc}
      </div>
    </div>
  );
};

// ---------- Circulation / heart rate (physiology) ----------
const Circulation = () => {
  const [hr, setHr] = uS3(72);
  const [sv, setSv] = uS3(70); // stroke volume mL
  const [phase, setPhase] = uS3(0);
  uE3(() => { const i = setInterval(() => setPhase(p => (p + 1) % 60), 1000 / (hr/60 * 60) ); return () => clearInterval(i); }, [hr]);
  const co = (hr * sv) / 1000; // L/min
  const beat = phase < 20 ? 1 : 0.6;
  return (
    <div>
      <svg viewBox="0 0 360 220" width="100%" height="240">
        <path d={`M 120 110 Q 120 60 160 60 Q 200 60 200 110 Q 200 160 160 190 Q 120 160 120 110 Z`}
              fill="#c8621a" opacity={beat} transform={`scale(${0.95 + 0.1*beat}) translate(${160 - 160*(0.95 + 0.1*beat)/0.95}, ${115 - 115*(0.95 + 0.1*beat)/0.95})`}/>
        <text x="160" y="120" textAnchor="middle" fontSize="14" fontFamily="Instrument Serif" fill="#f4efe6">♥</text>
        <text x="20" y="30" fontSize="11" fontFamily="JetBrains Mono" fill="#1a1d2b">HR {hr} bpm</text>
        <text x="20" y="48" fontSize="11" fontFamily="JetBrains Mono" fill="#1a1d2b">SV {sv} mL</text>
        <text x="20" y="66" fontSize="13" fontFamily="JetBrains Mono" fill="#c8621a">CO = {co.toFixed(1)} L/min</text>
        <text x="220" y="48" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">resting adult ≈ 5 L/min</text>
      </svg>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, fontSize:12, marginTop:8 }}>
        <label>Heart rate <input type="range" min="40" max="200" value={hr} onChange={e=>setHr(+e.target.value)} style={{width:'100%'}}/></label>
        <label>Stroke volume <input type="range" min="40" max="130" value={sv} onChange={e=>setSv(+e.target.value)} style={{width:'100%'}}/></label>
      </div>
      <div style={{ fontSize:12, color:'var(--ink-3)', marginTop:4 }}>
        Cardiac output = heart rate × stroke volume. Exercise raises both; endurance training raises SV.
      </div>
    </div>
  );
};

// ---------- Dose-Response (pharmacology) ----------
const DoseResponse = () => {
  const [dose, setDose] = uS3(5);
  const ed50 = 5, td50 = 20;
  const sig = (d, k) => 1 / (1 + Math.pow(k/Math.max(d, 0.01), 2));
  const eff = sig(dose, ed50);
  const tox = sig(dose, td50);
  const pathE = Array.from({length:61}, (_,i) => { const d = i*0.6; return `${20 + i*5.5},${180 - sig(d, ed50)*140}`; }).join(' L');
  const pathT = Array.from({length:61}, (_,i) => { const d = i*0.6; return `${20 + i*5.5},${180 - sig(d, td50)*140}`; }).join(' L');
  return (
    <div>
      <svg viewBox="0 0 360 220" width="100%" height="240">
        <line x1="20" y1="180" x2="350" y2="180" stroke="#1a1d2b"/>
        <line x1="20" y1="40" x2="20" y2="180" stroke="#1a1d2b"/>
        <path d={'M' + pathE} fill="none" stroke="#4a5d3a" strokeWidth="2"/>
        <path d={'M' + pathT} fill="none" stroke="#c8621a" strokeWidth="2"/>
        <line x1={20 + dose*5.5 / 0.6} y1="40" x2={20 + dose*5.5 / 0.6} y2="180" stroke="#1a1d2b" strokeDasharray="3 3"/>
        <circle cx={20 + dose*5.5 / 0.6} cy={180 - eff*140} r="5" fill="#4a5d3a"/>
        <circle cx={20 + dose*5.5 / 0.6} cy={180 - tox*140} r="5" fill="#c8621a"/>
        <text x="250" y="58" fontSize="11" fontFamily="JetBrains Mono" fill="#4a5d3a">EFFECT {(eff*100).toFixed(0)}%</text>
        <text x="250" y="74" fontSize="11" fontFamily="JetBrains Mono" fill="#c8621a">TOXICITY {(tox*100).toFixed(0)}%</text>
        <text x="20" y="200" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">DOSE →</text>
      </svg>
      <div style={{ display:'flex', gap:12, marginTop:8, alignItems:'center', fontSize:12 }}>
        <label style={{flex:1}}>Dose {dose.toFixed(1)} <input type="range" min="0" max="36" step="0.1" value={dose} onChange={e=>setDose(+e.target.value)} style={{width:'100%'}}/></label>
      </div>
      <div style={{ fontSize:12, color:'var(--ink-3)', marginTop:4 }}>
        Therapeutic window: dose where effect is high and toxicity is still low. The gap shrinks fast.
      </div>
    </div>
  );
};

// ---------- SIR epidemic model (public_health) ----------
const SIR = () => {
  const [r0, setR0] = uS3(2.5);
  const series = uM3(() => {
    const beta = r0 * 0.1, gamma = 0.1;
    let S = 0.999, I = 0.001, R = 0;
    const pts = [];
    for (let t = 0; t < 200; t++) {
      pts.push([S, I, R]);
      const dS = -beta * S * I;
      const dI = beta * S * I - gamma * I;
      const dR = gamma * I;
      S += dS; I += dI; R += dR;
    }
    return pts;
  }, [r0]);
  const line = (idx, color) => 'M' + series.map((p,t) => `${20 + t*1.7},${180 - p[idx]*160}`).join(' L');
  const peakI = series.reduce((m,p) => Math.max(m, p[1]), 0);
  return (
    <div>
      <svg viewBox="0 0 380 220" width="100%" height="240">
        <line x1="20" y1="180" x2="360" y2="180" stroke="#1a1d2b"/>
        <path d={line(0, 0)} fill="none" stroke="#4a5d3a" strokeWidth="1.8"/>
        <path d={line(1, 1)} fill="none" stroke="#c8621a" strokeWidth="2"/>
        <path d={line(2, 2)} fill="none" stroke="#2a4a6a" strokeWidth="1.8"/>
        <text x="280" y="40" fontSize="10" fontFamily="JetBrains Mono" fill="#4a5d3a">S susceptible</text>
        <text x="280" y="56" fontSize="10" fontFamily="JetBrains Mono" fill="#c8621a">I infected</text>
        <text x="280" y="72" fontSize="10" fontFamily="JetBrains Mono" fill="#2a4a6a">R recovered</text>
        <text x="20" y="200" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">TIME →</text>
        <text x="20" y="216" fontSize="10" fontFamily="JetBrains Mono" fill="#c8621a">peak infected: {(peakI*100).toFixed(1)}%</text>
      </svg>
      <div style={{ display:'flex', gap:12, marginTop:8, alignItems:'center', fontSize:12 }}>
        <label style={{flex:1}}>R₀ = {r0.toFixed(1)} <input type="range" min="0.5" max="6" step="0.1" value={r0} onChange={e=>setR0(+e.target.value)} style={{width:'100%'}}/></label>
      </div>
      <div style={{ fontSize:12, color:'var(--ink-3)', marginTop:4 }}>
        Each infected person transmits to R₀ others on average. Below 1.0, the outbreak burns out.
      </div>
    </div>
  );
};

// ---------- Stroop test (cognition) ----------
const Stroop = () => {
  const colors = [ ['RED','#c8621a'], ['GREEN','#4a5d3a'], ['BLUE','#2a4a6a'], ['ORANGE','#e09a5a'] ];
  const [trial, setTrial] = uS3(null);
  const [score, setScore] = uS3({correct:0, total:0});
  const [start, setStart] = uS3(null);
  const [rt, setRt] = uS3(null);
  const newTrial = () => {
    const word = colors[Math.floor(Math.random()*4)];
    let ink;
    do { ink = colors[Math.floor(Math.random()*4)]; } while (ink[0] === word[0]);
    setTrial({ word: word[0], ink: ink[1], inkName: ink[0] });
    setStart(performance.now());
    setRt(null);
  };
  const choose = (name) => {
    const correct = name === trial.inkName;
    setScore(s => ({correct: s.correct + (correct?1:0), total: s.total+1}));
    setRt(Math.round(performance.now() - start));
    setTimeout(newTrial, 600);
  };
  uE3(() => { if (!trial) newTrial(); }, []);
  if (!trial) return null;
  return (
    <div style={{ textAlign:'center' }}>
      <div style={{ fontSize:44, fontFamily:'Instrument Serif', color: trial.ink, margin:'20px 0' }}>
        {trial.word}
      </div>
      <div style={{ fontSize:12, color:'var(--ink-3)', marginBottom:10 }}>
        Click the <em>ink color</em>, not the word.
      </div>
      <div style={{ display:'flex', gap:8, justifyContent:'center', flexWrap:'wrap' }}>
        {colors.map(c => (
          <button key={c[0]} onClick={()=>choose(c[0])}
            style={{ background:c[1], color:'#f4efe6', padding:'6px 12px', border:'none', cursor:'pointer', fontFamily:'JetBrains Mono', fontSize:12 }}>
            {c[0]}
          </button>
        ))}
      </div>
      <div style={{ fontSize:12, color:'var(--ink-3)', marginTop:12 }}>
        Score: {score.correct} / {score.total}{rt !== null && ` · ${rt} ms`}
      </div>
    </div>
  );
};

// ---------- Piaget Conservation (development) ----------
const Conservation = () => {
  const [poured, setPoured] = uS3(false);
  const [asked, setAsked] = uS3(null);
  return (
    <div>
      <svg viewBox="0 0 360 220" width="100%" height="240">
        <rect x="60" y="80" width="60" height="120" fill="none" stroke="#1a1d2b" strokeWidth="1.5"/>
        <rect x="60" y={80 + 60} width="60" height="60" fill="#2a4a6a" opacity="0.7"/>
        <text x="90" y="216" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono" fill="#5a5d6e">short wide</text>
        {poured ? (
          <>
            <rect x="220" y="40" width="30" height="160" fill="none" stroke="#1a1d2b" strokeWidth="1.5"/>
            <rect x="220" y={40 + 40} width="30" height="120" fill="#2a4a6a" opacity="0.7"/>
            <text x="235" y="216" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono" fill="#5a5d6e">tall narrow</text>
          </>
        ) : (
          <>
            <rect x="200" y="80" width="60" height="120" fill="none" stroke="#1a1d2b" strokeWidth="1.5"/>
            <rect x="200" y={80 + 60} width="60" height="60" fill="#2a4a6a" opacity="0.7"/>
            <text x="230" y="216" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono" fill="#5a5d6e">short wide</text>
          </>
        )}
        <text x="180" y="30" textAnchor="middle" fontSize="12" fontFamily="Instrument Serif" fill="#1a1d2b">
          Same volume of water in both.
        </text>
      </svg>
      <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginTop:8, fontSize:12 }}>
        <button className="btn-ghost" onClick={()=>{setPoured(p=>!p); setAsked(null);}}>
          {poured ? 'Reset glasses' : 'Pour into tall glass'}
        </button>
        <button className="btn-ghost" onClick={()=>setAsked('pre')} disabled={!poured}>Ask a 4-year-old</button>
        <button className="btn-ghost" onClick={()=>setAsked('con')} disabled={!poured}>Ask an 8-year-old</button>
      </div>
      <div style={{ fontSize:13, color:'var(--ink-3)', marginTop:10, minHeight:40 }}>
        {asked === 'pre' && <><strong>Preoperational child:</strong> "The tall one has more!" (Judges by height, not volume.)</>}
        {asked === 'con' && <><strong>Concrete operational child:</strong> "They still have the same amount." (Conservation achieved.)</>}
        {!asked && 'Pour the water, then ask each child how much is in the tall glass.'}
      </div>
    </div>
  );
};

// ---------- CBT Thought Record (clinical) ----------
const ThoughtRecord = () => {
  const items = [
    { thought: "I failed one interview. I'll never get a job.", distortion: 'overgeneralization' },
    { thought: "My boss frowned. She must hate my work.", distortion: 'mind-reading' },
    { thought: "If I'm not perfect at this, I'm a total failure.", distortion: 'all-or-nothing' },
    { thought: "The party will definitely be a disaster.", distortion: 'catastrophizing' },
    { thought: "They didn't text back. It's because I'm boring.", distortion: 'personalization' },
  ];
  const distortions = ['overgeneralization','mind-reading','all-or-nothing','catastrophizing','personalization'];
  const [i, setI] = uS3(0);
  const [picked, setPicked] = uS3(null);
  const item = items[i];
  const choose = (d) => setPicked(d);
  const next = () => { setPicked(null); setI(x => (x+1) % items.length); };
  return (
    <div>
      <div style={{ background:'#f4efe6', padding:14, border:'1px solid #c9c0aa', margin:'8px 0 12px' }}>
        <div style={{ fontSize:11, fontFamily:'JetBrains Mono', color:'#5a5d6e', marginBottom:4 }}>AUTOMATIC THOUGHT</div>
        <div style={{ fontSize:15, fontFamily:'Instrument Serif', color:'#1a1d2b' }}>"{item.thought}"</div>
      </div>
      <div style={{ fontSize:12, color:'var(--ink-3)', marginBottom:6 }}>Which cognitive distortion is at work?</div>
      <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
        {distortions.map(d => (
          <button key={d} onClick={()=>choose(d)} className="btn-ghost"
            style={{
              background: picked === d ? (d === item.distortion ? '#4a5d3a' : '#c8621a') : 'transparent',
              color: picked === d ? '#f4efe6' : 'var(--ink)',
              fontSize:12
            }}>
            {d}
          </button>
        ))}
      </div>
      <div style={{ fontSize:13, color:'var(--ink-3)', marginTop:10, minHeight:34 }}>
        {picked && picked === item.distortion && <><strong style={{color:'#4a5d3a'}}>Right.</strong> Classic {picked}.</>}
        {picked && picked !== item.distortion && <><strong style={{color:'#c8621a'}}>Not quite.</strong> This is {item.distortion}.</>}
      </div>
      <button className="btn-ghost" style={{ marginTop:6 }} onClick={next}>Next thought →</button>
    </div>
  );
};

// ---------- Asch Conformity (social_psych) ----------
const Asch = () => {
  const lines = [ {len:80, key:'A'}, {len:110, key:'B'}, {len:95, key:'C'} ];
  const target = 110; // matches B
  const [confeds, setConfeds] = uS3(0);
  const [picked, setPicked] = uS3(null);
  const wrongConfedChoice = 'A';
  const prediction = confeds === 0 ? 99 : confeds <= 2 ? 88 : confeds <= 4 ? 68 : confeds >= 6 ? 24 : 40;
  return (
    <div>
      <svg viewBox="0 0 360 200" width="100%" height="220">
        <text x="10" y="20" fontSize="11" fontFamily="JetBrains Mono" fill="#5a5d6e">TARGET</text>
        <line x1="60" y1="40" x2={60+target} y2="40" stroke="#1a1d2b" strokeWidth="3"/>
        <text x="10" y="90" fontSize="11" fontFamily="JetBrains Mono" fill="#5a5d6e">COMPARISON</text>
        {lines.map((l,i) => (
          <g key={l.key} onClick={()=>setPicked(l.key)} style={{cursor:'pointer'}}>
            <line x1={60 + i*100} y1="130" x2={60 + i*100 + l.len} y2="130" stroke={picked===l.key ? '#c8621a' : '#1a1d2b'} strokeWidth="3"/>
            <text x={60 + i*100 + l.len/2} y="152" textAnchor="middle" fontSize="13" fontFamily="Instrument Serif" fill={picked===l.key ? '#c8621a' : '#1a1d2b'}>{l.key}</text>
          </g>
        ))}
        {confeds > 0 && <text x="10" y="190" fontSize="11" fontFamily="JetBrains Mono" fill="#c8621a">
          {confeds} confederate{confeds>1?'s':''} say "{wrongConfedChoice}" first.
        </text>}
      </svg>
      <div style={{ display:'flex', gap:12, marginTop:8, alignItems:'center', fontSize:12 }}>
        <label style={{flex:1}}>Confederates answering first: {confeds} <input type="range" min="0" max="7" value={confeds} onChange={e=>{setConfeds(+e.target.value);setPicked(null);}} style={{width:'100%'}}/></label>
      </div>
      <div style={{ fontSize:12, color:'var(--ink-3)', marginTop:6, minHeight:38 }}>
        Asch (1951): with 0 confederates, ~99% pick B (correct). With 3+ confederates answering "{wrongConfedChoice}" first, about {100-prediction}% of subjects conform at least once.
        {picked && <div style={{marginTop:4}}>You picked {picked}. Correct answer is B.</div>}
      </div>
    </div>
  );
};

// ---------- Register ----------
window.INTERACTIVES_B03 = {
  punnett:       { title: 'Punnett square', hint: 'Toggle alleles; watch the 3:1 ratio appear.', Component: Punnett },
  neuron:        { title: 'Action potential', hint: 'Fire the neuron; watch ions flow.', Component: ActionPotential },
  'body-systems':{ title: 'Body systems', hint: 'Tap a system to locate it.', Component: BodySystems },
  circulation:   { title: 'Cardiac output', hint: 'CO = HR × SV. Move the sliders.', Component: Circulation },
  'dose-response':{ title: 'Dose-response', hint: 'Effect and toxicity rise together.', Component: DoseResponse },
  sir:           { title: 'SIR epidemic model', hint: 'Slide R₀ below 1 to see the outbreak fizzle.', Component: SIR },
  stroop:        { title: 'Stroop test', hint: 'Click the ink color, not the word.', Component: Stroop },
  conservation:  { title: 'Piaget conservation', hint: 'Same water, taller glass. Does it change?', Component: Conservation },
  'thought-record':{ title: 'Thought record', hint: 'Name the cognitive distortion.', Component: ThoughtRecord },
  asch:          { title: 'Asch line test', hint: 'Add confederates; watch conformity rise.', Component: Asch },
};

window.INTERACTIVES = Object.assign({}, window.INTERACTIVES || {}, window.INTERACTIVES_B03);

// Shim: the legacy InteractiveEmbed in interactives.jsx reads entry.comp,
// not entry.Component. Mirror Component onto comp so both paths render.
for (const k of Object.keys(window.INTERACTIVES_B03)) {
  if (!window.INTERACTIVES[k].comp) window.INTERACTIVES[k].comp = window.INTERACTIVES_B03[k].Component;
}

// Extend the topic map
window.TOPIC_INTERACTIVE = Object.assign({}, window.TOPIC_INTERACTIVE || {}, {
  cell: 'dna',
  genetics: 'punnett',
  evolution: 'evolution-sim',
  ecology: 'ecosystem',
  neuro: 'neuron',
  anatomy: 'body-systems',
  physiology: 'circulation',
  pharmacology: 'dose-response',
  public_health: 'sir',
  cognition: 'stroop',
  development: 'conservation',
  clinical: 'thought-record',
  social_psych: 'asch',
});
