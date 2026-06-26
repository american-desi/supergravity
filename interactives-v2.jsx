// ============================================
// New Interactives (v2) — compact, packed
// All of these hook into InteractiveEmbed via kind=...
// ============================================

const { useState: uS, useEffect: uE, useRef: uR, useMemo: uM } = React;

// ---------- Pendulum (physics/mechanics) ----------
const Pendulum = () => {
  const [len, setLen] = uS(180);
  const [grav, setGrav] = uS(9.8);
  const [angle, setAngle] = uS(0.6);
  const [vel, setVel] = uS(0);
  const rafRef = uR();
  uE(() => {
    let last = performance.now();
    const tick = (t) => {
      const dt = Math.min(0.05, (t - last) / 1000); last = t;
      setAngle(a => a + vel * dt);
      setVel(v => v - (grav / (len/60)) * Math.sin(angle) * dt - 0.2 * v * dt);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [angle, vel, grav, len]);
  const x = 220 + Math.sin(angle) * len;
  const y = 30 + Math.cos(angle) * len;
  return (
    <div>
      <svg viewBox="0 0 440 240" width="100%" height="260">
        <line x1={220} y1={30} x2={x} y2={y} stroke="#1a1d2b" strokeWidth="1.5"/>
        <circle cx={220} cy={30} r="3" fill="#1a1d2b"/>
        <circle cx={x} cy={y} r="14" fill="#c8621a"/>
      </svg>
      <div style={{ display:'flex', gap:16, fontSize:12, marginTop:8 }}>
        <label style={{flex:1}}>Length <input type="range" min="60" max="220" value={len} onChange={e=>setLen(+e.target.value)} style={{width:'100%'}}/></label>
        <label style={{flex:1}}>Gravity <input type="range" min="1" max="25" step="0.1" value={grav} onChange={e=>setGrav(+e.target.value)} style={{width:'100%'}}/></label>
        <button className="btn-ghost" onClick={()=>{setAngle(0.9);setVel(0);}}>Reset</button>
      </div>
    </div>
  );
};

// ---------- Wave superposition ----------
const Waves = () => {
  const [f1, setF1] = uS(1); const [f2, setF2] = uS(2);
  const [a1, setA1] = uS(1); const [a2, setA2] = uS(1);
  const [t, setT] = uS(0);
  uE(() => { const i = setInterval(() => setT(x => x + 0.05), 40); return () => clearInterval(i); }, []);
  const path = (f, a, shift=0, yOff) => {
    const pts = [];
    for (let x = 0; x <= 400; x += 4) {
      const y = yOff + Math.sin((x/400) * Math.PI * 2 * f + t + shift) * 22 * a;
      pts.push(`${x},${y}`);
    }
    return 'M' + pts.join(' L');
  };
  const sumPath = (() => {
    const pts = [];
    for (let x = 0; x <= 400; x += 4) {
      const y = 160 + (Math.sin((x/400)*Math.PI*2*f1 + t) * a1 + Math.sin((x/400)*Math.PI*2*f2 + t) * a2) * 22;
      pts.push(`${x},${y}`);
    }
    return 'M' + pts.join(' L');
  })();
  return (
    <div>
      <svg viewBox="0 0 400 210" width="100%" height="220">
        <path d={path(f1, a1, 0, 40)} fill="none" stroke="#2a4a6a" strokeWidth="1.2" opacity="0.8"/>
        <path d={path(f2, a2, 0, 90)} fill="none" stroke="#4a5d3a" strokeWidth="1.2" opacity="0.8"/>
        <line x1="0" y1="130" x2="400" y2="130" stroke="#c9c0aa"/>
        <path d={sumPath} fill="none" stroke="#c8621a" strokeWidth="2"/>
        <text x="8" y="34" fontSize="9" fontFamily="JetBrains Mono" fill="#5a5d6e">Wave A</text>
        <text x="8" y="84" fontSize="9" fontFamily="JetBrains Mono" fill="#5a5d6e">Wave B</text>
        <text x="8" y="148" fontSize="9" fontFamily="JetBrains Mono" fill="#c8621a">A + B</text>
      </svg>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, fontSize:12, marginTop:8 }}>
        <label>A freq <input type="range" min="0.5" max="5" step="0.1" value={f1} onChange={e=>setF1(+e.target.value)} style={{width:'100%'}}/></label>
        <label>B freq <input type="range" min="0.5" max="5" step="0.1" value={f2} onChange={e=>setF2(+e.target.value)} style={{width:'100%'}}/></label>
        <label>A amp <input type="range" min="0" max="1.5" step="0.1" value={a1} onChange={e=>setA1(+e.target.value)} style={{width:'100%'}}/></label>
        <label>B amp <input type="range" min="0" max="1.5" step="0.1" value={a2} onChange={e=>setA2(+e.target.value)} style={{width:'100%'}}/></label>
      </div>
    </div>
  );
};

// ---------- Periodic table ----------
const PeriodicTable = () => {
  const el = [['H',1,1,1],['He',2,18,1],['Li',3,1,2],['Be',4,2,2],['B',5,13,2],['C',6,14,2],['N',7,15,2],['O',8,16,2],['F',9,17,2],['Ne',10,18,2],
    ['Na',11,1,3],['Mg',12,2,3],['Al',13,13,3],['Si',14,14,3],['P',15,15,3],['S',16,16,3],['Cl',17,17,3],['Ar',18,18,3],
    ['K',19,1,4],['Ca',20,2,4],['Fe',26,8,4],['Cu',29,11,4],['Zn',30,12,4],['Br',35,17,4],['Kr',36,18,4],
    ['Au',79,11,6],['Ag',47,11,5],['Hg',80,12,6],['Pb',82,14,6],['U',92,3,7]];
  const [sel, setSel] = uS(null);
  const color = (g) => g===1?'#c8621a':g===2?'#e09a5a':g>=13&&g<=17?'#4a5d3a':g===18?'#2a4a6a':'#6b4a2a';
  return (
    <div>
      <svg viewBox="0 0 360 180" width="100%" height="200">
        {el.map(([sym, z, g, p]) => (
          <g key={z} onClick={()=>setSel({sym,z})} style={{cursor:'pointer'}}>
            <rect x={(g-1)*18+4} y={(p-1)*22+4} width="16" height="20" fill={color(g)} opacity={sel?.z===z?1:0.82}/>
            <text x={(g-1)*18+12} y={(p-1)*22+16} fontSize="8" fontFamily="Inter Tight" fontWeight="600" fill="#f4efe6" textAnchor="middle">{sym}</text>
          </g>
        ))}
      </svg>
      <div style={{ fontSize:13, color:'var(--ink-3)', textAlign:'center', marginTop:8 }}>
        {sel ? <><strong style={{color:'var(--ink)'}}>{sel.sym}</strong> · atomic # {sel.z}</> : 'Tap an element.'}
      </div>
    </div>
  );
};

// ---------- DNA helix ----------
const DNA = () => {
  const [t, setT] = uS(0);
  uE(() => { const i = setInterval(() => setT(x => x + 0.03), 40); return () => clearInterval(i); }, []);
  const pairs = [];
  for (let i = 0; i < 20; i++) {
    const y = i * 18 + 10;
    const phase = i * 0.5 + t;
    const x1 = 220 + Math.sin(phase) * 80;
    const x2 = 220 - Math.sin(phase) * 80;
    const base = ['A','T','C','G'][i%4];
    const partner = base==='A'?'T':base==='T'?'A':base==='C'?'G':'C';
    pairs.push({y, x1, x2, base, partner, front: Math.sin(phase)>0});
  }
  return (
    <svg viewBox="0 0 440 380" width="100%" height="400">
      {pairs.map((p,i) => (
        <g key={i}>
          <line x1={p.x1} y1={p.y} x2={p.x2} y2={p.y} stroke="#c9c0aa" strokeWidth="1"/>
          <circle cx={p.x1} cy={p.y} r="5" fill={p.front?'#c8621a':'#8a3d0a'}/>
          <circle cx={p.x2} cy={p.y} r="5" fill={p.front?'#4a5d3a':'#2a3a1a'}/>
          <text x={p.x1} y={p.y+2} fontSize="7" fill="#f4efe6" textAnchor="middle" fontFamily="JetBrains Mono">{p.base}</text>
          <text x={p.x2} y={p.y+2} fontSize="7" fill="#f4efe6" textAnchor="middle" fontFamily="JetBrains Mono">{p.partner}</text>
        </g>
      ))}
    </svg>
  );
};

// ---------- Circle of Fifths (music) ----------
const CircleFifths = () => {
  const notes = ['C','G','D','A','E','B','F♯','C♯','A♭','E♭','B♭','F'];
  const [sel, setSel] = uS(0);
  const cx=160, cy=160, r=120;
  return (
    <div>
      <svg viewBox="0 0 320 320" width="100%" height="320">
        <circle cx={cx} cy={cy} r={r} fill="none" stroke="#c9c0aa"/>
        {notes.map((n,i) => {
          const a = (i/12) * Math.PI * 2 - Math.PI/2;
          const x = cx + Math.cos(a) * r;
          const y = cy + Math.sin(a) * r;
          const isSel = sel === i;
          const isHighlight = [sel, (sel+1)%12, (sel+11)%12, (sel+9)%12].includes(i);
          return (
            <g key={n} onClick={()=>setSel(i)} style={{cursor:'pointer'}}>
              <circle cx={x} cy={y} r={isSel?22:18} fill={isSel?'#c8621a':isHighlight?'#e0d8c4':'#f4efe6'} stroke="#1a1d2b" strokeWidth={isSel?2:1}/>
              <text x={x} y={y+5} textAnchor="middle" fontSize="14" fontFamily="Instrument Serif" fill={isSel?'#f4efe6':'#1a1d2b'}>{n}</text>
            </g>
          );
        })}
        <text x={cx} y={cy-6} textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono" fill="#5a5d6e">KEY OF</text>
        <text x={cx} y={cy+18} textAnchor="middle" fontSize="28" fontFamily="Instrument Serif">{notes[sel]}</text>
      </svg>
      <div style={{ fontSize:12, color:'var(--ink-3)', textAlign:'center' }}>
        Highlighted: relative minor, perfect 4th, perfect 5th.
      </div>
    </div>
  );
};

// ---------- Probability dice ----------
const Dice = () => {
  const [rolls, setRolls] = uS([]);
  const roll = () => setRolls(r => [...r, Math.floor(Math.random()*6)+1+Math.floor(Math.random()*6)+1]);
  const counts = {}; for (let i=2;i<=12;i++) counts[i]=0;
  rolls.forEach(r => counts[r]++);
  const max = Math.max(1, ...Object.values(counts));
  return (
    <div>
      <div style={{display:'flex',gap:8,alignItems:'end',height:180,padding:'0 12px'}}>
        {Array.from({length:11},(_,i)=>i+2).map(n => (
          <div key={n} style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',gap:4}}>
            <div style={{fontSize:10,fontFamily:'JetBrains Mono',color:'var(--ink-3)'}}>{counts[n]}</div>
            <div style={{width:'100%',height:(counts[n]/max)*140,background:n===7?'#c8621a':'#2a4a6a',minHeight:2,transition:'height 0.15s'}}/>
            <div style={{fontSize:11,fontFamily:'JetBrains Mono'}}>{n}</div>
          </div>
        ))}
      </div>
      <div style={{display:'flex',gap:8,marginTop:16,justifyContent:'center'}}>
        <button className="btn-primary" onClick={roll}>Roll 2d6</button>
        <button className="btn-primary" onClick={()=>{for(let i=0;i<100;i++)roll();}}>Roll 100×</button>
        <button className="btn-ghost" onClick={()=>setRolls([])}>Clear</button>
      </div>
      <div style={{fontSize:12,color:'var(--ink-3)',textAlign:'center',marginTop:8}}>
        {rolls.length} rolls. 7 appears most because it has the most combinations (6 of 36).
      </div>
    </div>
  );
};

// ---------- Perspective (drawing/art) ----------
const Perspective = () => {
  const [vx, setVx] = uS(200); const [vy, setVy] = uS(100);
  const lines = [];
  for (let i = 0; i < 16; i++) {
    const a = (i/16) * Math.PI * 2;
    lines.push({x1:vx,y1:vy,x2:vx+Math.cos(a)*500,y2:vy+Math.sin(a)*500});
  }
  return (
    <div>
      <svg viewBox="0 0 400 220" width="100%" height="240" onMouseMove={e=>{
        const rect = e.currentTarget.getBoundingClientRect();
        setVx(((e.clientX-rect.left)/rect.width)*400);
        setVy(((e.clientY-rect.top)/rect.height)*220);
      }}>
        <rect width="400" height="220" fill="#ebe4d4"/>
        {lines.map((l,i) => <line key={i} {...l} stroke="#5a5d6e" strokeWidth="0.5" opacity="0.5"/>)}
        <circle cx={vx} cy={vy} r="4" fill="#c8621a"/>
        <text x={vx+8} y={vy-8} fontSize="10" fontFamily="JetBrains Mono" fill="#c8621a">VANISHING POINT</text>
        <line x1="0" y1={vy} x2="400" y2={vy} stroke="#1a1d2b" strokeDasharray="2 4" opacity="0.3"/>
      </svg>
      <div style={{fontSize:12,color:'var(--ink-3)',textAlign:'center',marginTop:8}}>Move your mouse to place the vanishing point.</div>
    </div>
  );
};

// ---------- Supply & Demand ----------
const Market = () => {
  const [shift, setShift] = uS(0);
  const pts = (fn) => {
    const a = []; for (let q = 0; q <= 100; q += 5) a.push(`${q*3.6+20},${fn(q)}`); return 'M' + a.join(' L');
  };
  const demand = q => 180 - q * 1.5;
  const supply = q => 20 + q * 1.4 - shift * 30;
  // Equilibrium: demand = supply → 180 - 1.5q = 20 + 1.4q - 30s → q = (160+30s)/2.9
  const eqQ = (160 + 30*shift) / 2.9;
  const eqP = demand(eqQ);
  return (
    <div>
      <svg viewBox="0 0 400 220" width="100%" height="240">
        <line x1="20" y1="200" x2="400" y2="200" stroke="#1a1d2b"/>
        <line x1="20" y1="0" x2="20" y2="200" stroke="#1a1d2b"/>
        <path d={pts(demand)} fill="none" stroke="#2a4a6a" strokeWidth="1.5"/>
        <path d={pts(supply)} fill="none" stroke="#c8621a" strokeWidth="1.5"/>
        <circle cx={eqQ*3.6+20} cy={eqP} r="5" fill="#4a5d3a"/>
        <text x="380" y="30" fontSize="10" fontFamily="JetBrains Mono" fill="#2a4a6a">DEMAND</text>
        <text x="380" y="190" fontSize="10" fontFamily="JetBrains Mono" fill="#c8621a">SUPPLY</text>
        <text x={eqQ*3.6+28} y={eqP-6} fontSize="10" fontFamily="JetBrains Mono" fill="#4a5d3a">EQ</text>
        <text x="24" y="12" fontSize="9" fontFamily="JetBrains Mono" fill="#5a5d6e">PRICE</text>
        <text x="370" y="215" fontSize="9" fontFamily="JetBrains Mono" fill="#5a5d6e">QUANTITY</text>
      </svg>
      <div style={{marginTop:8}}>
        <label style={{fontSize:12}}>Supply shift <input type="range" min="-1" max="1" step="0.1" value={shift} onChange={e=>setShift(+e.target.value)} style={{width:'100%'}}/></label>
        <div style={{fontSize:12,color:'var(--ink-3)',textAlign:'center'}}>
          Equilibrium price: <strong style={{color:'var(--ink)'}}>${(eqP/8).toFixed(2)}</strong> · quantity: <strong style={{color:'var(--ink)'}}>{eqQ.toFixed(0)}</strong>
        </div>
      </div>
    </div>
  );
};

// ---------- Knot tying (crafts/sailing) ----------
const Knot = () => {
  const knots = {
    'bowline': 'M50,120 Q90,40 160,80 T280,140 Q240,200 180,170 T110,160',
    'fig8': 'M50,120 Q110,40 170,120 Q230,200 290,120',
    'square': 'M50,120 L120,80 L190,140 L260,100 M60,110 L130,150 L200,90 L270,130',
    'clove': 'M50,90 L280,90 M60,110 L280,110 M140,70 Q160,100 180,130',
  };
  const [sel, setSel] = uS('bowline');
  return (
    <div>
      <svg viewBox="0 0 340 220" width="100%" height="240">
        <path d={knots[sel]} fill="none" stroke="#c8621a" strokeWidth="6" strokeLinecap="round"/>
        <path d={knots[sel]} fill="none" stroke="#6b2a0a" strokeWidth="2" strokeDasharray="3 3" opacity="0.4"/>
      </svg>
      <div style={{display:'flex',gap:6,justifyContent:'center'}}>
        {Object.keys(knots).map(k => (
          <button key={k} className={sel===k?'btn-primary':'btn-ghost'} onClick={()=>setSel(k)} style={{fontSize:11,textTransform:'capitalize'}}>{k}</button>
        ))}
      </div>
    </div>
  );
};

// ---------- Exposure triangle ----------
const Exposure = () => {
  const [iso, setIso] = uS(400);
  const [shutter, setShutter] = uS(125);
  const [aperture, setAperture] = uS(4);
  const ev = Math.log2(iso/100) + Math.log2(shutter/60) - Math.log2(aperture*aperture/4);
  const bright = Math.max(0, Math.min(1, 0.5 + ev * 0.15));
  return (
    <div>
      <div style={{width:'100%',aspectRatio:'16/8',background:`hsl(25, 40%, ${bright*60}%)`,position:'relative',border:'1px solid var(--rule)'}}>
        <div style={{position:'absolute',left:'20%',top:'30%',width:80,height:80,borderRadius:'50%',background:`hsl(40,30%,${bright*70}%)`,filter:`blur(${aperture<2.8?8:0}px)`}}/>
        <div style={{position:'absolute',inset:0,background:'radial-gradient(circle at 30% 30%, transparent, rgba(0,0,0,0.2))'}}/>
        <div style={{position:'absolute',bottom:8,right:12,fontFamily:'JetBrains Mono',fontSize:11,color:'rgba(244,239,230,0.8)'}}>EV {ev.toFixed(1)}</div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:12,fontSize:12,marginTop:12}}>
        <label>ISO {iso}<input type="range" min="100" max="3200" step="100" value={iso} onChange={e=>setIso(+e.target.value)} style={{width:'100%'}}/></label>
        <label>Shutter 1/{shutter}<input type="range" min="4" max="2000" value={shutter} onChange={e=>setShutter(+e.target.value)} style={{width:'100%'}}/></label>
        <label>ƒ/{aperture.toFixed(1)}<input type="range" min="1.4" max="22" step="0.1" value={aperture} onChange={e=>setAperture(+e.target.value)} style={{width:'100%'}}/></label>
      </div>
    </div>
  );
};

// ---------- Color wheel ----------
const ColorWheel = () => {
  const [h, setH] = uS(20);
  const harmonies = [
    {n:'Complementary', offs:[0,180]},
    {n:'Triadic', offs:[0,120,240]},
    {n:'Analogous', offs:[-30,0,30]},
    {n:'Split-comp', offs:[0,150,210]},
  ];
  const [hi, setHi] = uS(0);
  const cx=130,cy=130,r=100;
  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:20}}>
      <svg viewBox="0 0 260 260" width="100%">
        {Array.from({length:360},(_,i) => {
          const a1 = (i-0.5)/180*Math.PI, a2 = (i+0.5)/180*Math.PI;
          return <path key={i} d={`M${cx},${cy} L${cx+Math.cos(a1)*r},${cy+Math.sin(a1)*r} A${r},${r} 0 0 1 ${cx+Math.cos(a2)*r},${cy+Math.sin(a2)*r} Z`} fill={`hsl(${i},70%,55%)`}/>;
        })}
        {harmonies[hi].offs.map((o,i) => {
          const a = ((h+o)%360)/180*Math.PI;
          return <circle key={i} cx={cx+Math.cos(a)*r} cy={cy+Math.sin(a)*r} r="10" fill="#f4efe6" stroke="#1a1d2b" strokeWidth="2"/>;
        })}
      </svg>
      <div>
        <div style={{display:'flex',flexDirection:'column',gap:6}}>
          {harmonies.map((har,i) => (
            <button key={i} className={hi===i?'btn-primary':'btn-ghost'} style={{justifyContent:'flex-start'}} onClick={()=>setHi(i)}>{har.n}</button>
          ))}
        </div>
        <label style={{display:'block',fontSize:12,marginTop:16}}>Base hue
          <input type="range" min="0" max="359" value={h} onChange={e=>setH(+e.target.value)} style={{width:'100%'}}/>
        </label>
        <div style={{display:'flex',gap:4,marginTop:8}}>
          {harmonies[hi].offs.map((o,i) => (
            <div key={i} style={{flex:1,height:32,background:`hsl(${(h+o+360)%360},70%,55%)`}}/>
          ))}
        </div>
      </div>
    </div>
  );
};

// ---------- Tree of Life ----------
const TreeOfLife = () => {
  const nodes = [
    {id:'luca',n:'LUCA',x:200,y:20,p:null},
    {id:'bact',n:'Bacteria',x:80,y:90,p:'luca'},
    {id:'arch',n:'Archaea',x:200,y:90,p:'luca'},
    {id:'euk',n:'Eukarya',x:320,y:90,p:'luca'},
    {id:'proto',n:'Protists',x:260,y:160,p:'euk'},
    {id:'plant',n:'Plants',x:310,y:210,p:'euk'},
    {id:'fung',n:'Fungi',x:360,y:210,p:'euk'},
    {id:'anim',n:'Animals',x:380,y:160,p:'euk'},
    {id:'chord',n:'Chordates',x:370,y:230,p:'anim'},
    {id:'mamm',n:'Mammals',x:360,y:285,p:'chord'},
    {id:'prim',n:'Primates',x:380,y:320,p:'mamm'},
    {id:'hum',n:'Humans',x:400,y:345,p:'prim'},
  ];
  const byId = Object.fromEntries(nodes.map(n=>[n.id,n]));
  return (
    <svg viewBox="0 0 440 380" width="100%" height="400">
      {nodes.filter(n=>n.p).map(n => {
        const p = byId[n.p];
        return <path key={n.id} d={`M${p.x},${p.y} Q${p.x},${(p.y+n.y)/2} ${n.x},${n.y}`} fill="none" stroke="#8a6b3a" strokeWidth="1.5"/>;
      })}
      {nodes.map(n => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={n.id==='luca'?8:n.id==='hum'?6:5} fill={n.id==='hum'?'#c8621a':'#4a5d3a'}/>
          <text x={n.x} y={n.y-10} textAnchor="middle" fontSize="11" fontFamily="Instrument Serif" fill="#1a1d2b">{n.n}</text>
        </g>
      ))}
      <text x="20" y="370" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">~3.8 Gy of descent</text>
    </svg>
  );
};

// ---------- Logic gates ----------
const Logic = () => {
  const [a, setA] = uS(0); const [b, setB] = uS(1);
  const gates = { AND: a&&b, OR: a||b, XOR: a^b, NAND: !(a&&b)?1:0, NOR: !(a||b)?1:0 };
  return (
    <div>
      <div style={{display:'flex',gap:12,justifyContent:'center',alignItems:'center',padding:'20px 0'}}>
        <button className={a?'btn-primary':'btn-ghost'} onClick={()=>setA(a?0:1)} style={{minWidth:80,fontSize:16}}>A = {a}</button>
        <button className={b?'btn-primary':'btn-ghost'} onClick={()=>setB(b?0:1)} style={{minWidth:80,fontSize:16}}>B = {b}</button>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:6}}>
        {Object.entries(gates).map(([n,v]) => (
          <div key={n} style={{textAlign:'center',padding:12,border:'1px solid var(--rule)',background:v?'#4a5d3a':'var(--paper)',color:v?'#f4efe6':'var(--ink)'}}>
            <div style={{fontFamily:'JetBrains Mono',fontSize:10,letterSpacing:'0.15em',opacity:0.7}}>{n}</div>
            <div style={{fontSize:22,fontFamily:'Instrument Serif',marginTop:4}}>{v}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ---------- Ecosystem (predator-prey) ----------
const PredatorPrey = () => {
  const [data, setData] = uS(() => {
    const d = []; let p=100,w=10;
    for (let t = 0; t < 200; t++) {
      d.push({t, p, w});
      const dp = 0.1*p - 0.01*p*w;
      const dw = 0.005*p*w - 0.1*w;
      p = Math.max(1, p + dp); w = Math.max(0.5, w + dw);
    }
    return d;
  });
  const maxP = Math.max(...data.map(d=>d.p));
  const maxW = Math.max(...data.map(d=>d.w));
  return (
    <svg viewBox="0 0 400 220" width="100%" height="240">
      <line x1="20" y1="200" x2="400" y2="200" stroke="#1a1d2b"/>
      <path d={'M' + data.map(d => `${20 + d.t*1.9},${200 - (d.p/maxP)*180}`).join(' L')} fill="none" stroke="#4a5d3a" strokeWidth="1.5"/>
      <path d={'M' + data.map(d => `${20 + d.t*1.9},${200 - (d.w/maxW)*180}`).join(' L')} fill="none" stroke="#c8621a" strokeWidth="1.5"/>
      <text x="340" y="30" fontSize="10" fontFamily="JetBrains Mono" fill="#4a5d3a">RABBITS</text>
      <text x="340" y="44" fontSize="10" fontFamily="JetBrains Mono" fill="#c8621a">WOLVES</text>
      <text x="24" y="12" fontSize="9" fontFamily="JetBrains Mono" fill="#5a5d6e">POPULATION</text>
      <text x="360" y="215" fontSize="9" fontFamily="JetBrains Mono" fill="#5a5d6e">TIME →</text>
    </svg>
  );
};

// ---------- Registry ----------
window.INTERACTIVES_V2 = {
  pendulum: { title: 'Live pendulum — adjust length and gravity', hint: 'Period ∝ √(L/g) — try it.', Component: Pendulum },
  waves: { title: 'Wave superposition', hint: 'Any signal is a sum of sines — Fourier, live.', Component: Waves },
  periodic: { title: 'Periodic table — tap an element', hint: 'Columns share valence electrons and therefore chemistry.', Component: PeriodicTable },
  dna: { title: 'DNA double helix', hint: 'A pairs with T, C pairs with G — always.', Component: DNA },
  fifths: { title: 'Circle of fifths', hint: 'Why some keys sound "near" and others "far".', Component: CircleFifths },
  dice: { title: '2d6 — the law of large numbers', hint: 'Roll many times and the histogram finds its shape.', Component: Dice },
  perspective: { title: 'One-point perspective', hint: 'Every parallel line meets at the vanishing point.', Component: Perspective },
  market: { title: 'Supply meets demand', hint: 'Equilibrium = where curves cross.', Component: Market },
  knot: { title: 'Four essential knots', hint: 'Lifesaving, sailing, climbing — every person should know these.', Component: Knot },
  exposure: { title: 'Exposure triangle', hint: 'ISO, shutter, aperture — each costs something.', Component: Exposure },
  color: { title: 'Color harmonies', hint: 'Why some color pairs sing and others argue.', Component: ColorWheel },
  tree: { title: 'Tree of life', hint: 'Every living thing, one ancestor.', Component: TreeOfLife },
  logic: { title: 'Logic gates', hint: 'Every computer is a pile of these.', Component: Logic },
  ecosystem: { title: 'Predator & prey', hint: 'Lotka–Volterra — populations oscillate forever.', Component: PredatorPrey },
};

// Merge into window.INTERACTIVES if present (so InteractiveEmbed picks them up)
window.INTERACTIVES = Object.assign({}, window.INTERACTIVES || {}, window.INTERACTIVES_V2);

// Map lesson → default interactive
window.TOPIC_INTERACTIVE = {
  mechanics: 'pendulum', waves: 'waves', thermo: 'pendulum',
  atoms: 'periodic', bonds: 'periodic', reactions: 'periodic',
  cell: 'dna', genetics: 'dna', evolution: 'tree', biochem: 'dna', ecology: 'ecosystem',
  classical: 'fifths', harmony: 'fifths', jazz: 'fifths', notation: 'fifths',
  stats: 'dice',
  renaissance: 'perspective', drawing: 'perspective', art: 'perspective', renart: 'perspective',
  economics: 'market',
  sailing: 'knot', survival: 'knot', knots: 'knot',
  photography: 'exposure', film: 'exposure',
  color: 'color',
  programming: 'logic', cs: 'logic', algorithms: 'logic', digital: 'logic',
};
