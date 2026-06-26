// ============================================
// Lesson Resources + Additional Interactives
// ============================================

const LessonResources = ({ resources }) => {
  if (!resources) return null;
  const { videos = [], reads = [], primary = [] } = resources;
  const Section = ({ title, items, icon }) => items.length === 0 ? null : (
    <div className="res-group">
      <div className="res-group-head">
        <span className="res-group-icon">{icon}</span>
        <span className="res-group-title">{title}</span>
        <span className="res-group-count">{items.length}</span>
      </div>
      <ul className="res-list">
        {items.map((r, i) => (
          <li key={i} className="res-item">
            <a className="res-link" href={r.url} target="_blank" rel="noopener noreferrer">
              <div className="res-item-title">{r.title}</div>
              <div className="res-item-meta">{r.author || r.source || r.url}</div>
            </a>
            <a className="res-arrow" href={r.url} target="_blank" rel="noopener noreferrer" aria-label="Open link">↗</a>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <aside className="lesson-resources">
      <div className="res-header">
        <div className="eyebrow">Go deeper</div>
        <h2 className="serif res-title">Curated sources</h2>
        <p className="res-dek">Where to spend the next hour — lectures, books, primary sources. Handpicked, not auto-generated.</p>
      </div>
      <Section title="Watch" items={videos} icon="▶"/>
      <Section title="Read" items={reads} icon="◨"/>
      <Section title="Primary sources" items={primary} icon="✦"/>
    </aside>
  );
};
window.LessonResources = LessonResources;

// =========== NEW INTERACTIVES ===========

const { useState: useStateX, useEffect: useEffectX, useRef: useRefX } = React;

// --- Exposure Triangle ---
const ExposureTriangle = () => {
  const [aperture, setAperture] = useStateX(5.6);  // f-number
  const [shutter, setShutter] = useStateX(125);    // 1/x
  const [iso, setIso] = useStateX(400);
  // Exposure value: higher = brighter
  const ev = Math.log2((aperture*aperture) * (1/shutter) * (100/iso)) * -1;
  const brightness = Math.max(0, Math.min(1, (ev + 6) / 12));
  const dof = 1 / aperture;  // bigger aperture = shallow
  const motion = 1 / shutter;
  return (
    <div style={{display:'grid', gap:16, padding:8}}>
      <div style={{
        height:120, borderRadius:6, position:'relative', overflow:'hidden',
        background: `linear-gradient(${brightness>0.5?'180deg':'0deg'}, rgba(255,240,200,${brightness}) 0%, rgba(30,30,40,${1-brightness}) 100%)`,
        border:'1px solid var(--rule)'
      }}>
        <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', gap: 30}}>
          <div style={{width:56, height:56, borderRadius:'50%', background:'#d4a574', filter:`blur(${(1-dof*4)*8}px)`, opacity: brightness*0.8+0.2}}/>
          <div style={{width:40, height:80, background:'#6b8e4e', transform:`translateX(${motion*1500}px)`, opacity: brightness*0.8+0.2}}/>
          <div style={{width:56, height:56, borderRadius:'50%', background:'#8a6b4a', filter:`blur(${(1-dof*4)*4}px)`, opacity: brightness*0.8+0.2}}/>
        </div>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:12, fontSize:12}}>
        <label>
          <div>Aperture: f/{aperture.toFixed(1)}</div>
          <input type="range" min="1.4" max="22" step="0.1" value={aperture} onChange={e=>setAperture(+e.target.value)} style={{width:'100%'}}/>
          <div style={{color:'var(--ink-3)', fontSize:11, marginTop:2}}>{aperture<2.8?'shallow DOF':'deep DOF'}</div>
        </label>
        <label>
          <div>Shutter: 1/{shutter}s</div>
          <input type="range" min="15" max="2000" step="1" value={shutter} onChange={e=>setShutter(+e.target.value)} style={{width:'100%'}}/>
          <div style={{color:'var(--ink-3)', fontSize:11, marginTop:2}}>{shutter<60?'motion blur':'frozen'}</div>
        </label>
        <label>
          <div>ISO: {iso}</div>
          <input type="range" min="100" max="6400" step="100" value={iso} onChange={e=>setIso(+e.target.value)} style={{width:'100%'}}/>
          <div style={{color:'var(--ink-3)', fontSize:11, marginTop:2}}>{iso>1600?'noisy':'clean'}</div>
        </label>
      </div>
    </div>
  );
};

// --- CPR Tempo ---
const CPRTempo = () => {
  const [running, setRunning] = useStateX(false);
  const [count, setCount] = useStateX(0);
  const [beat, setBeat] = useStateX(false);
  const BPM = 110;
  useEffectX(()=>{
    if (!running) return;
    const iv = setInterval(()=>{
      setCount(c=>c+1);
      setBeat(true);
      setTimeout(()=>setBeat(false), 120);
    }, 60000/BPM);
    return ()=>clearInterval(iv);
  }, [running]);
  return (
    <div style={{display:'grid', placeItems:'center', gap:16, padding:20}}>
      <div style={{
        width:140, height:140, borderRadius:'50%',
        background: beat ? '#8a2a2a' : '#c04a4a',
        transform: beat ? 'scale(1.15)' : 'scale(1)',
        transition: 'transform 80ms, background 80ms',
        display:'grid', placeItems:'center', color:'#fff', fontWeight:600
      }}>
        <div style={{fontSize:32, fontFamily:'var(--serif)'}}>{count}</div>
      </div>
      <div style={{fontSize:13, color:'var(--ink-3)', textAlign:'center'}}>
        Target: {BPM} BPM · "Stayin' Alive" tempo<br/>
        Push ≥ 2 inches deep, let chest recoil fully
      </div>
      <button className="btn-ghost" onClick={()=>{ setRunning(r=>!r); if(running) setCount(0); }}>
        {running ? 'Stop' : 'Start compressions'}
      </button>
    </div>
  );
};

// --- Pour-over Extraction ---
const PourOverSim = () => {
  const [grind, setGrind] = useStateX(5); // 1-10, fine to coarse
  const [time, setTime] = useStateX(180); // seconds
  const [ratio, setRatio] = useStateX(16); // 1:N
  // Sweet spot: grind 5, time 180, ratio 16
  const extraction = 15 + (time/180)*3 + (6-grind)*0.8; // TDS-ish
  let verdict = 'Balanced';
  let color = '#6a8a4a';
  if (extraction < 17) { verdict = 'Under-extracted · sour'; color = '#a8a84a'; }
  else if (extraction > 22) { verdict = 'Over-extracted · bitter'; color = '#6a3a2a'; }
  return (
    <div style={{display:'grid', gap:14, padding:8}}>
      <div style={{
        padding:'24px', textAlign:'center', border:'1px solid var(--rule)', borderRadius:6,
        background: `linear-gradient(180deg, #f5ede0 0%, ${color} 100%)`,
        color:'#fff', fontFamily:'var(--serif)', fontSize:22
      }}>
        {extraction.toFixed(1)}% extraction
        <div style={{fontSize:12, opacity:0.9, marginTop:4, fontFamily:'var(--sans)'}}>{verdict}</div>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:12, fontSize:12}}>
        <label><div>Grind: {grind<4?'fine':grind>7?'coarse':'medium'}</div>
          <input type="range" min="1" max="10" value={grind} onChange={e=>setGrind(+e.target.value)} style={{width:'100%'}}/></label>
        <label><div>Time: {time}s</div>
          <input type="range" min="90" max="300" step="15" value={time} onChange={e=>setTime(+e.target.value)} style={{width:'100%'}}/></label>
        <label><div>Ratio: 1:{ratio}</div>
          <input type="range" min="12" max="20" value={ratio} onChange={e=>setRatio(+e.target.value)} style={{width:'100%'}}/></label>
      </div>
    </div>
  );
};

// --- Compound interest ---
const CompoundSim = () => {
  const [monthly, setMonthly] = useStateX(500);
  const [years, setYears] = useStateX(30);
  const [rate, setRate] = useStateX(7);
  const r = rate/100/12;
  const n = years*12;
  const final = monthly * ((Math.pow(1+r, n) - 1) / r);
  const contributed = monthly * n;
  const earned = final - contributed;
  const points = [];
  for (let y=0; y<=years; y++) {
    const nm = y*12;
    const v = nm===0 ? 0 : monthly * ((Math.pow(1+r, nm) - 1) / r);
    points.push(v);
  }
  const max = Math.max(...points);
  const W = 320, H = 120;
  const path = points.map((v,i)=>{
    const x = (i/years)*W;
    const y = H - (v/max)*H;
    return (i===0?'M':'L')+x.toFixed(1)+','+y.toFixed(1);
  }).join(' ');
  return (
    <div style={{display:'grid', gap:12, padding:8}}>
      <div style={{background:'var(--paper-2)', padding:12, borderRadius:6}}>
        <svg width={W} height={H} style={{display:'block', width:'100%'}}>
          <path d={path+` L${W},${H} L0,${H} Z`} fill="#3a5a4a" opacity="0.15"/>
          <path d={path} stroke="#3a5a4a" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      <div style={{display:'flex', justifyContent:'space-between', fontSize:13, padding:'0 4px'}}>
        <div><div style={{color:'var(--ink-3)', fontSize:11}}>Final balance</div><div style={{fontFamily:'var(--serif)', fontSize:20}}>${Math.round(final).toLocaleString()}</div></div>
        <div><div style={{color:'var(--ink-3)', fontSize:11}}>You contributed</div><div style={{fontFamily:'var(--serif)', fontSize:20}}>${Math.round(contributed).toLocaleString()}</div></div>
        <div><div style={{color:'var(--ink-3)', fontSize:11}}>Interest earned</div><div style={{fontFamily:'var(--serif)', fontSize:20, color:'#3a5a4a'}}>${Math.round(earned).toLocaleString()}</div></div>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:12, fontSize:12}}>
        <label><div>Monthly: ${monthly}</div>
          <input type="range" min="50" max="3000" step="50" value={monthly} onChange={e=>setMonthly(+e.target.value)} style={{width:'100%'}}/></label>
        <label><div>Years: {years}</div>
          <input type="range" min="5" max="50" value={years} onChange={e=>setYears(+e.target.value)} style={{width:'100%'}}/></label>
        <label><div>Return: {rate}%</div>
          <input type="range" min="1" max="12" step="0.5" value={rate} onChange={e=>setRate(+e.target.value)} style={{width:'100%'}}/></label>
      </div>
    </div>
  );
};

// Register new interactives
if (window.INTERACTIVES) {
  Object.assign(window.INTERACTIVES, {
    'exposure-triangle': { title: "Exposure Triangle", comp: ExposureTriangle },
    'cpr-tempo': { title: "CPR Tempo Metronome", comp: CPRTempo },
    'pour-over': { title: "Pour-Over Extraction", comp: PourOverSim },
    'compound-interest': { title: "Compound Interest", comp: CompoundSim },
  });
}
Object.assign(window, { ExposureTriangle, CPRTempo, PourOverSim, CompoundSim, LessonResources });
