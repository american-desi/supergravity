// ============================================
// content/math-interactives.jsx
// Batch: B01-mathematics
// Owned-by: BATCH B01-mathematics
//
// Practice-oriented interactives for each math topic. Registers new keys
// on window.INTERACTIVES so the existing InteractiveEmbed renders them
// wherever a topic's `interactive: { kind: '...' }` points here.
//
// Registered kinds:
//   numberline    — arith, algebra  (drag-to-answer arithmetic quiz)
//   pythag        — geom            (right-triangle with live a²+b² = c²)
//   unitcircle    — trig            (sweep angle, see sin/cos)
//   funcplotter   — precalc         (pick a function, see its graph)
//   derivative    — calc1           (tangent line and slope)
//   riemann       — calc2           (Riemann sums converging)
//   slopefield    — diffeq          (click to drop initial condition)
//   transform2d   — linalg          (drag matrix columns, grid warps)
//   sieve         — numtheory       (animated Sieve of Eratosthenes)
// ============================================

(function () {
  const { useState: uS, useEffect: uE, useRef: uR, useMemo: uM } = React;

  // ---------- numberline: arithmetic quiz on a number line ----------
  const NumberLine = () => {
    const makeQ = () => {
      const a = Math.floor(Math.random() * 21) - 10;
      const b = Math.floor(Math.random() * 21) - 10;
      const op = Math.random() < 0.5 ? '+' : '−';
      const ans = op === '+' ? a + b : a - b;
      return { a, b, op, ans };
    };
    const [q, setQ] = uS(makeQ);
    const [pos, setPos] = uS(0);
    const [result, setResult] = uS(null);
    const [streak, setStreak] = uS(0);
    const svgRef = uR();
    const W = 420, H = 150, PAD = 20, MIN = -20, MAX = 20;
    const xFor = (v) => PAD + ((v - MIN) / (MAX - MIN)) * (W - 2 * PAD);

    const onMove = (e) => {
      if (result !== null) return;
      const svg = svgRef.current; if (!svg) return;
      const rect = svg.getBoundingClientRect();
      const clientX = e.clientX ?? e.touches?.[0]?.clientX;
      const xPx = ((clientX - rect.left) / rect.width) * W;
      const v = Math.round(MIN + ((xPx - PAD) / (W - 2 * PAD)) * (MAX - MIN));
      setPos(Math.max(MIN, Math.min(MAX, v)));
    };
    const check = () => {
      const ok = pos === q.ans;
      setResult(ok ? 'ok' : 'no');
      if (ok) setStreak(s => s + 1); else setStreak(0);
    };
    const next = () => { setQ(makeQ()); setPos(0); setResult(null); };

    return (
      <div>
        <div style={{ fontSize: 14, marginBottom: 10, color: 'var(--ink-3)' }}>
          Solve <strong style={{ color: 'var(--ink)', fontFamily: 'JetBrains Mono' }}>{q.a} {q.op} {q.b}</strong> — drag the marker to the answer.
          <span style={{ float: 'right', fontSize: 11, color: 'var(--ink-3)' }}>streak: {streak}</span>
        </div>
        <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} width="100%" height={H}
             onMouseMove={onMove} onTouchMove={onMove} style={{ cursor: 'grab', touchAction: 'none' }}>
          <line x1={PAD} y1={H/2} x2={W-PAD} y2={H/2} stroke="#1a1d2b" strokeWidth="1"/>
          {Array.from({length: MAX - MIN + 1}).map((_, i) => {
            const v = MIN + i;
            const x = xFor(v);
            const major = v % 5 === 0;
            return (
              <g key={v}>
                <line x1={x} y1={H/2 - (major ? 6 : 3)} x2={x} y2={H/2 + (major ? 6 : 3)} stroke="#5a5d6e" strokeWidth={major ? 1 : 0.5}/>
                {major && <text x={x} y={H/2 + 22} fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e" textAnchor="middle">{v}</text>}
              </g>
            );
          })}
          <circle cx={xFor(pos)} cy={H/2} r="10"
                  fill={result === 'ok' ? '#4a5d3a' : result === 'no' ? '#c8621a' : '#2a4a6a'}/>
          <text x={xFor(pos)} y={H/2 - 18} fontSize="12" fontFamily="JetBrains Mono" fill="#1a1d2b" textAnchor="middle" fontWeight="600">{pos}</text>
        </svg>
        <div style={{ marginTop: 10, display: 'flex', gap: 8, alignItems: 'center', fontSize: 12 }}>
          {result === null && <button className="btn-ghost" onClick={check}>Check</button>}
          {result === 'ok' && <><span style={{ color: '#4a5d3a' }}>Correct.</span><button className="btn-ghost" onClick={next}>Next</button></>}
          {result === 'no' && <><span style={{ color: '#c8621a' }}>Not quite — the answer is {q.ans}.</span><button className="btn-ghost" onClick={next}>Next</button></>}
        </div>
      </div>
    );
  };

  // ---------- pythag: right triangle with live a²+b²=c² ----------
  const Pythag = () => {
    const [a, setA] = uS(3);
    const [b, setB] = uS(4);
    const W = 520, H = 300, ORIGIN_X = 200, ORIGIN_Y = 240;
    const SCALE = 14;
    const c = Math.sqrt(a*a + b*b);
    const ax = ORIGIN_X + a * SCALE;
    const by = ORIGIN_Y - b * SCALE;
    const bigA = a * SCALE >= 34;
    const bigB = b * SCALE >= 34;
    const bigC = c * SCALE >= 34;
    return (
      <div>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H}>
          {/* a² square — on the horizontal leg, hanging below */}
          <rect x={ORIGIN_X} y={ORIGIN_Y} width={a*SCALE} height={a*SCALE} fill="#2a4a6a" opacity="0.18" stroke="#2a4a6a" strokeWidth="0.5"/>
          {bigA && <text x={ORIGIN_X + a*SCALE/2} y={ORIGIN_Y + a*SCALE/2 + 4} fontSize="12" fontFamily="JetBrains Mono" fill="#2a4a6a" textAnchor="middle">a² = {a*a}</text>}
          {/* b² square — to the left of the vertical leg */}
          <rect x={ORIGIN_X - b*SCALE} y={by} width={b*SCALE} height={b*SCALE} fill="#4a5d3a" opacity="0.18" stroke="#4a5d3a" strokeWidth="0.5"/>
          {bigB && <text x={ORIGIN_X - b*SCALE/2} y={by + b*SCALE/2 + 4} fontSize="12" fontFamily="JetBrains Mono" fill="#4a5d3a" textAnchor="middle">b² = {b*b}</text>}
          {/* c² square — on the hypotenuse, pointing away from the triangle */}
          {(() => {
            const dx = ax - ORIGIN_X, dy = by - ORIGIN_Y;
            const len = Math.sqrt(dx*dx + dy*dy);
            if (len === 0) return null;
            const ux = dx/len, uy = dy/len;
            const px = uy, py = -ux;
            const p1 = { x: ORIGIN_X, y: ORIGIN_Y };
            const p2 = { x: ax, y: by };
            const p3 = { x: ax + px*len, y: by + py*len };
            const p4 = { x: ORIGIN_X + px*len, y: ORIGIN_Y + py*len };
            const cx = (p1.x+p2.x+p3.x+p4.x)/4;
            const cy = (p1.y+p2.y+p3.y+p4.y)/4;
            return (
              <g>
                <polygon points={`${p1.x},${p1.y} ${p2.x},${p2.y} ${p3.x},${p3.y} ${p4.x},${p4.y}`}
                         fill="#c8621a" opacity="0.18" stroke="#c8621a" strokeWidth="0.5"/>
                {bigC && <text x={cx} y={cy+4} fontSize="12" fontFamily="JetBrains Mono" fill="#c8621a" textAnchor="middle">c² = {a*a+b*b}</text>}
              </g>
            );
          })()}
          {/* triangle legs (drawn last so they sit above squares) */}
          <line x1={ORIGIN_X} y1={ORIGIN_Y} x2={ax} y2={ORIGIN_Y} stroke="#1a1d2b" strokeWidth="2"/>
          <line x1={ORIGIN_X} y1={ORIGIN_Y} x2={ORIGIN_X} y2={by} stroke="#1a1d2b" strokeWidth="2"/>
          <line x1={ax} y1={ORIGIN_Y} x2={ORIGIN_X} y2={by} stroke="#1a1d2b" strokeWidth="2"/>
          {/* right-angle marker */}
          <path d={`M ${ORIGIN_X} ${ORIGIN_Y - 10} L ${ORIGIN_X + 10} ${ORIGIN_Y - 10} L ${ORIGIN_X + 10} ${ORIGIN_Y}`} fill="none" stroke="#1a1d2b" strokeWidth="1"/>
        </svg>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 12, marginTop: 8 }}>
          <label>Leg a: {a} <input type="range" min="1" max="8" step="1" value={a} onChange={e=>setA(+e.target.value)} style={{width:'100%'}}/></label>
          <label>Leg b: {b} <input type="range" min="1" max="8" step="1" value={b} onChange={e=>setB(+e.target.value)} style={{width:'100%'}}/></label>
        </div>
        <div style={{ fontFamily:'JetBrains Mono', fontSize: 12, color: 'var(--ink-3)', marginTop: 6, textAlign: 'center' }}>
          <span style={{color:'#2a4a6a'}}>a²</span> + <span style={{color:'#4a5d3a'}}>b²</span> = {a*a} + {b*b} = <strong style={{color:'var(--ink)'}}>{a*a+b*b}</strong> = <span style={{color:'#c8621a'}}>c²</span> → c = {c.toFixed(3)}
        </div>
      </div>
    );
  };

  // ---------- unitcircle: sweep an angle ----------
  const UnitCircle = () => {
    const [deg, setDeg] = uS(30);
    const rad = deg * Math.PI / 180;
    const cx = 200, cy = 180, r = 130;
    const px = cx + Math.cos(rad) * r;
    const py = cy - Math.sin(rad) * r;
    const s = Math.sin(rad), c = Math.cos(rad), tVal = Math.tan(rad);
    const sweepPath = `M ${cx} ${cy} L ${cx + r} ${cy} A ${r} ${r} 0 ${deg > 180 ? 1 : 0} 0 ${px} ${py} Z`;
    return (
      <div>
        <svg viewBox="0 0 400 310" width="100%" height="310">
          {/* axes */}
          <line x1="40" y1={cy} x2="360" y2={cy} stroke="#5a5d6e" strokeWidth="0.5"/>
          <line x1={cx} y1="30" x2={cx} y2="330" stroke="#5a5d6e" strokeWidth="0.5"/>
          {/* circle */}
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="#1a1d2b" strokeWidth="1"/>
          {/* swept wedge */}
          <path d={sweepPath} fill="#c8621a" opacity="0.12"/>
          {/* projections */}
          <line x1={px} y1={py} x2={px} y2={cy} stroke="#2a4a6a" strokeWidth="1.5" strokeDasharray="3 3"/>
          <line x1={px} y1={py} x2={cx} y2={py} stroke="#4a5d3a" strokeWidth="1.5" strokeDasharray="3 3"/>
          {/* radius */}
          <line x1={cx} y1={cy} x2={px} y2={py} stroke="#1a1d2b" strokeWidth="1.5"/>
          <circle cx={px} cy={py} r="5" fill="#c8621a"/>
          {/* labels */}
          <text x={cx} y={320} fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e" textAnchor="middle">cos θ = {c.toFixed(3)}</text>
          <text x={40} y={cy - 8} fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">sin θ = {s.toFixed(3)}</text>
          <text x={cx + 8} y={cy - 8} fontSize="10" fontFamily="JetBrains Mono" fill="#1a1d2b">θ = {deg}°</text>
        </svg>
        <div style={{ marginTop: 8, fontSize: 12 }}>
          <label>Angle θ <input type="range" min="0" max="360" step="1" value={deg} onChange={e=>setDeg(+e.target.value)} style={{width:'100%'}}/></label>
          <div style={{ display:'flex', gap:16, justifyContent:'center', marginTop:6, fontFamily:'JetBrains Mono', fontSize:11, color:'var(--ink-3)' }}>
            <span>sin: <strong style={{color:'#2a4a6a'}}>{s.toFixed(3)}</strong></span>
            <span>cos: <strong style={{color:'#4a5d3a'}}>{c.toFixed(3)}</strong></span>
            <span>tan: <strong style={{color:'#c8621a'}}>{Math.abs(c) < 0.01 ? '∞' : tVal.toFixed(3)}</strong></span>
          </div>
        </div>
      </div>
    );
  };

  // ---------- funcplotter: pick a function, plot it ----------
  const FuncPlotter = () => {
    const fns = [
      { id: 'lin',  label: 'f(x) = x',          f: x => x },
      { id: 'sq',   label: 'f(x) = x²',         f: x => x*x },
      { id: 'cu',   label: 'f(x) = x³',         f: x => x*x*x },
      { id: 'recip',label: 'f(x) = 1/x',        f: x => 1/x },
      { id: 'abs',  label: 'f(x) = |x|',        f: x => Math.abs(x) },
      { id: 'sin',  label: 'f(x) = sin(x)',     f: x => Math.sin(x) },
      { id: 'exp',  label: 'f(x) = eˣ',         f: x => Math.exp(x) },
      { id: 'log',  label: 'f(x) = ln(x)',      f: x => Math.log(x) },
    ];
    const [id, setId] = uS('sq');
    const [zoom, setZoom] = uS(5);
    const fn = fns.find(fn => fn.id === id);
    const W = 420, H = 260, cx = W/2, cy = H/2, scale = 20 * (5/zoom);
    const path = uM(() => {
      const pts = [];
      for (let px = 0; px <= W; px += 2) {
        const x = (px - cx) / scale;
        let y;
        try { y = fn.f(x); } catch { continue; }
        if (!isFinite(y) || Math.abs(y) > 1000) { pts.push(null); continue; }
        const py = cy - y * scale;
        pts.push({ px, py });
      }
      let d = '', pen = false;
      for (const p of pts) {
        if (!p || p.py < -100 || p.py > H + 100) { pen = false; continue; }
        d += (pen ? ' L ' : ' M ') + p.px + ' ' + p.py;
        pen = true;
      }
      return d;
    }, [id, scale]);
    return (
      <div>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H}>
          {/* grid */}
          {Array.from({length: 21}).map((_, i) => {
            const gx = (i-10) * scale + cx;
            const gy = (i-10) * scale + cy;
            return (
              <g key={i}>
                <line x1={gx} y1={0} x2={gx} y2={H} stroke="#e9e3d3" strokeWidth="0.5"/>
                <line x1={0} y1={gy} x2={W} y2={gy} stroke="#e9e3d3" strokeWidth="0.5"/>
              </g>
            );
          })}
          {/* axes */}
          <line x1={0} y1={cy} x2={W} y2={cy} stroke="#1a1d2b" strokeWidth="1"/>
          <line x1={cx} y1={0} x2={cx} y2={H} stroke="#1a1d2b" strokeWidth="1"/>
          {/* function */}
          <path d={path} fill="none" stroke="#c8621a" strokeWidth="2"/>
        </svg>
        <div style={{ display: 'flex', gap: 8, marginTop: 8, fontSize: 12, flexWrap: 'wrap' }}>
          {fns.map(fn => (
            <button key={fn.id} className="btn-ghost"
                    style={{ fontFamily: 'JetBrains Mono', fontSize: 11, padding: '4px 8px',
                             background: id === fn.id ? '#c8621a' : 'transparent',
                             color: id === fn.id ? '#f4efe6' : 'var(--ink)' }}
                    onClick={() => setId(fn.id)}>{fn.label}</button>
          ))}
        </div>
        <label style={{ display:'block', marginTop:8, fontSize:12 }}>Zoom: <input type="range" min="2" max="15" step="0.5" value={zoom} onChange={e=>setZoom(+e.target.value)} style={{width:'60%', verticalAlign:'middle'}}/></label>
      </div>
    );
  };

  // ---------- derivative: tangent line on a curve ----------
  const Derivative = () => {
    const [x0, setX0] = uS(0.6);
    const [which, setWhich] = uS('sq');
    const fns = {
      sq:  { label: 'f(x) = x²',       f: x => x*x,        df: x => 2*x },
      cu:  { label: 'f(x) = x³',       f: x => x*x*x,      df: x => 3*x*x },
      sin: { label: 'f(x) = sin(x)',   f: x => Math.sin(x),df: x => Math.cos(x) },
      exp: { label: 'f(x) = eˣ',       f: x => Math.exp(x),df: x => Math.exp(x) },
    };
    const W = 420, H = 260, cx = W/2, cy = H/2, scale = 40;
    const { f, df, label } = fns[which];
    const y0 = f(x0), m = df(x0);
    const path = uM(() => {
      let d = '';
      for (let px = 0; px <= W; px += 2) {
        const x = (px - cx)/scale;
        const y = f(x); if (!isFinite(y)) continue;
        const py = cy - y*scale; if (py < -200 || py > H+200) continue;
        d += (d ? ' L ' : 'M ') + px + ' ' + py;
      }
      return d;
    }, [which]);
    const px0 = cx + x0*scale, py0 = cy - y0*scale;
    const tangent = (() => {
      const x1 = -6, x2 = 6;
      const tY = (x) => y0 + m*(x - x0);
      const toPx = (x) => [cx + x*scale, cy - tY(x)*scale];
      const [a1,b1] = toPx(x1), [a2,b2] = toPx(x2);
      return `M ${a1} ${b1} L ${a2} ${b2}`;
    })();
    return (
      <div>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H}>
          <line x1={0} y1={cy} x2={W} y2={cy} stroke="#1a1d2b" strokeWidth="0.5"/>
          <line x1={cx} y1={0} x2={cx} y2={H} stroke="#1a1d2b" strokeWidth="0.5"/>
          <path d={path} fill="none" stroke="#2a4a6a" strokeWidth="2"/>
          <path d={tangent} fill="none" stroke="#c8621a" strokeWidth="2" opacity="0.85"/>
          {isFinite(py0) && <circle cx={px0} cy={py0} r="5" fill="#c8621a"/>}
        </svg>
        <div style={{ display:'flex', gap:6, marginTop:8, fontSize:11 }}>
          {Object.entries(fns).map(([k,v]) => (
            <button key={k} className="btn-ghost" style={{ fontFamily:'JetBrains Mono', padding:'4px 8px', background: which===k?'#2a4a6a':'transparent', color: which===k?'#f4efe6':'var(--ink)' }} onClick={()=>setWhich(k)}>{v.label}</button>
          ))}
        </div>
        <label style={{display:'block', marginTop:8, fontSize:12}}>x = {x0.toFixed(2)} <input type="range" min="-3" max="3" step="0.05" value={x0} onChange={e=>setX0(+e.target.value)} style={{width:'100%'}}/></label>
        <div style={{ fontFamily:'JetBrains Mono', fontSize:11, color:'var(--ink-3)', textAlign:'center', marginTop:4 }}>
          {label} · f({x0.toFixed(2)}) = {y0.toFixed(3)} · slope f'({x0.toFixed(2)}) = <strong style={{color:'#c8621a'}}>{m.toFixed(3)}</strong>
        </div>
      </div>
    );
  };

  // ---------- riemann: rectangles approaching an integral ----------
  const Riemann = () => {
    const [n, setN] = uS(8);
    const [rule, setRule] = uS('mid');
    const a = 0, b = 2;
    const f = (x) => x*x;                 // ∫₀² x² dx = 8/3
    const trueVal = 8/3;
    const W = 420, H = 220, pad = 30;
    const plotW = W - 2*pad, plotH = H - 2*pad;
    const xTo = (x) => pad + ((x - a)/(b - a)) * plotW;
    const yMax = 4.5;
    const yTo = (y) => H - pad - (y/yMax) * plotH;
    const rects = [];
    let sum = 0;
    const dx = (b - a) / n;
    for (let i = 0; i < n; i++) {
      const x = a + i*dx;
      const sample = rule === 'left' ? x : rule === 'right' ? x + dx : x + dx/2;
      const h = f(sample); sum += h * dx;
      rects.push({ x, h });
    }
    const curvePath = (() => {
      let d = '';
      for (let px = pad; px <= W - pad; px += 2) {
        const x = a + ((px - pad)/plotW) * (b - a);
        d += (d ? ' L ' : 'M ') + px + ' ' + yTo(f(x));
      }
      return d;
    })();
    return (
      <div>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H}>
          <line x1={pad} y1={H-pad} x2={W-pad} y2={H-pad} stroke="#1a1d2b" strokeWidth="1"/>
          <line x1={pad} y1={pad} x2={pad} y2={H-pad} stroke="#1a1d2b" strokeWidth="1"/>
          {rects.map((r, i) => {
            const sample = rule === 'left' ? r.x : rule === 'right' ? r.x + dx : r.x + dx/2;
            const hY = yTo(f(sample));
            return <rect key={i} x={xTo(r.x)} y={hY} width={xTo(r.x + dx) - xTo(r.x)} height={(H-pad) - hY} fill="#c8621a" opacity="0.3" stroke="#c8621a" strokeWidth="0.5"/>;
          })}
          <path d={curvePath} fill="none" stroke="#2a4a6a" strokeWidth="2"/>
          <text x={W-pad} y={H-pad+14} fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e" textAnchor="end">x = 2</text>
          <text x={pad} y={H-pad+14} fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e" textAnchor="start">x = 0</text>
          <text x={pad+4} y={pad+10} fontSize="10" fontFamily="JetBrains Mono" fill="#2a4a6a">f(x) = x²</text>
        </svg>
        <div style={{ display:'flex', gap:8, marginTop:8, fontSize:11 }}>
          {['left','mid','right'].map(r => (
            <button key={r} className="btn-ghost" style={{ padding:'4px 10px', background: rule===r?'#c8621a':'transparent', color: rule===r?'#f4efe6':'var(--ink)' }} onClick={()=>setRule(r)}>{r}</button>
          ))}
        </div>
        <label style={{display:'block', marginTop:8, fontSize:12}}>n = {n} rectangles <input type="range" min="1" max="100" step="1" value={n} onChange={e=>setN(+e.target.value)} style={{width:'100%'}}/></label>
        <div style={{ fontFamily:'JetBrains Mono', fontSize:11, color:'var(--ink-3)', textAlign:'center', marginTop:4 }}>
          estimate: <strong style={{color:'#c8621a'}}>{sum.toFixed(4)}</strong> · true value 8/3 ≈ {trueVal.toFixed(4)} · error {Math.abs(sum - trueVal).toFixed(4)}
        </div>
      </div>
    );
  };

  // ---------- slopefield: click to drop an initial condition ----------
  const SlopeField = () => {
    // dy/dx = y - x  (a classic)
    const f = (x, y) => y - x;
    const W = 420, H = 260, cx = W/2, cy = H/2, scale = 24;
    const [pts, setPts] = uS([]);
    const arrows = [];
    for (let gx = -8; gx <= 8; gx++) {
      for (let gy = -5; gy <= 5; gy++) {
        const px = cx + gx*scale, py = cy - gy*scale;
        const m = f(gx, gy);
        const theta = Math.atan(m);
        const len = 9;
        const dx = Math.cos(theta) * len, dy = -Math.sin(theta) * len;
        arrows.push({ x1: px - dx, y1: py - dy, x2: px + dx, y2: py + dy });
      }
    }
    const onClick = (e) => {
      const svg = e.currentTarget;
      const rect = svg.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * W;
      const py = ((e.clientY - rect.top) / rect.height) * H;
      const x0 = (px - cx)/scale, y0 = (cy - py)/scale;
      // Integrate forward and backward with RK4
      const trace = (dir) => {
        const path = [];
        let x = x0, y = y0, h = 0.04 * dir;
        for (let i = 0; i < 400; i++) {
          const pxCur = cx + x*scale, pyCur = cy - y*scale;
          if (pxCur < 0 || pxCur > W || pyCur < 0 || pyCur > H) break;
          if (Math.abs(y) > 50) break;
          path.push([pxCur, pyCur]);
          const k1 = f(x, y);
          const k2 = f(x + h/2, y + h*k1/2);
          const k3 = f(x + h/2, y + h*k2/2);
          const k4 = f(x + h, y + h*k3);
          y += h * (k1 + 2*k2 + 2*k3 + k4) / 6;
          x += h;
        }
        return path;
      };
      const forward = trace(1), backward = trace(-1).reverse();
      const combined = [...backward, [cx + x0*scale, cy - y0*scale], ...forward];
      setPts(prev => [...prev, combined]);
    };
    return (
      <div>
        <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} onClick={onClick} style={{ cursor:'crosshair' }}>
          <line x1={0} y1={cy} x2={W} y2={cy} stroke="#5a5d6e" strokeWidth="0.5"/>
          <line x1={cx} y1={0} x2={cx} y2={H} stroke="#5a5d6e" strokeWidth="0.5"/>
          {arrows.map((a, i) => <line key={i} x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2} stroke="#2a4a6a" strokeWidth="1" opacity="0.5"/>)}
          {pts.map((path, i) => (
            <path key={i} d={'M ' + path.map(p => p.join(' ')).join(' L ')} fill="none" stroke="#c8621a" strokeWidth="1.8"/>
          ))}
        </svg>
        <div style={{ display:'flex', justifyContent:'space-between', marginTop:8, fontSize:12 }}>
          <span style={{ color:'var(--ink-3)' }}>Click anywhere to drop an initial condition. ODE: dy/dx = y − x</span>
          <button className="btn-ghost" onClick={()=>setPts([])}>Clear</button>
        </div>
      </div>
    );
  };

  // ---------- transform2d: drag matrix columns ----------
  const Transform2D = () => {
    const W = 420, H = 320, cx = W/2, cy = H/2, scale = 36;
    const [i, setI] = uS({ x: 1, y: 0 });
    const [j, setJ] = uS({ x: 0, y: 1 });
    const [drag, setDrag] = uS(null);
    const svgRef = uR();
    const toSvg = (v) => ({ x: cx + v.x*scale, y: cy - v.y*scale });
    const onMove = (e) => {
      if (!drag) return;
      const rect = svgRef.current.getBoundingClientRect();
      const cxp = e.clientX ?? e.touches?.[0]?.clientX;
      const cyp = e.clientY ?? e.touches?.[0]?.clientY;
      const px = ((cxp - rect.left)/rect.width)*W;
      const py = ((cyp - rect.top)/rect.height)*H;
      const x = (px - cx)/scale, y = (cy - py)/scale;
      const snap = (v) => Math.round(v*4)/4;
      if (drag === 'i') setI({ x: snap(x), y: snap(y) });
      if (drag === 'j') setJ({ x: snap(x), y: snap(y) });
    };
    // transformed grid
    const gridLines = [];
    for (let k = -5; k <= 5; k++) {
      // vertical (parametrized by j)
      const p1 = { x: i.x*k + j.x*(-5), y: i.y*k + j.y*(-5) };
      const p2 = { x: i.x*k + j.x*(5),  y: i.y*k + j.y*(5) };
      gridLines.push({ p1, p2 });
      // horizontal (parametrized by i)
      const q1 = { x: i.x*(-5) + j.x*k, y: i.y*(-5) + j.y*k };
      const q2 = { x: i.x*(5)  + j.x*k, y: i.y*(5)  + j.y*k };
      gridLines.push({ p1: q1, p2: q2 });
    }
    const det = i.x * j.y - i.y * j.x;
    const iP = toSvg(i), jP = toSvg(j);
    return (
      <div>
        <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} width="100%" height={H}
             onMouseMove={onMove} onTouchMove={onMove}
             onMouseUp={()=>setDrag(null)} onMouseLeave={()=>setDrag(null)} onTouchEnd={()=>setDrag(null)}
             style={{ touchAction:'none' }}>
          {gridLines.map((l, idx) => {
            const p1 = toSvg(l.p1), p2 = toSvg(l.p2);
            return <line key={idx} x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y} stroke="#c9c0aa" strokeWidth="0.5"/>;
          })}
          <line x1={0} y1={cy} x2={W} y2={cy} stroke="#1a1d2b" strokeWidth="0.5"/>
          <line x1={cx} y1={0} x2={cx} y2={H} stroke="#1a1d2b" strokeWidth="0.5"/>
          <line x1={cx} y1={cy} x2={iP.x} y2={iP.y} stroke="#c8621a" strokeWidth="2"/>
          <line x1={cx} y1={cy} x2={jP.x} y2={jP.y} stroke="#4a5d3a" strokeWidth="2"/>
          <circle cx={iP.x} cy={iP.y} r="8" fill="#c8621a" onMouseDown={()=>setDrag('i')} onTouchStart={()=>setDrag('i')} style={{ cursor:'grab' }}/>
          <circle cx={jP.x} cy={jP.y} r="8" fill="#4a5d3a" onMouseDown={()=>setDrag('j')} onTouchStart={()=>setDrag('j')} style={{ cursor:'grab' }}/>
          <text x={iP.x + 10} y={iP.y - 4} fontSize="11" fontFamily="JetBrains Mono" fill="#c8621a">î</text>
          <text x={jP.x + 10} y={jP.y - 4} fontSize="11" fontFamily="JetBrains Mono" fill="#4a5d3a">ĵ</text>
        </svg>
        <div style={{ fontFamily:'JetBrains Mono', fontSize:11, color:'var(--ink-3)', textAlign:'center', marginTop:6 }}>
          A = [[{i.x.toFixed(2)}, {j.x.toFixed(2)}], [{i.y.toFixed(2)}, {j.y.toFixed(2)}]] · det = <strong style={{color: det < 0 ? '#c8621a':'var(--ink)'}}>{det.toFixed(3)}</strong>
        </div>
        <div style={{ fontSize:11, color:'var(--ink-3)', textAlign:'center', marginTop:2 }}>Drag the orange and green handles. Determinant is the area of the unit square after the transform.</div>
      </div>
    );
  };

  // ---------- sieve: Sieve of Eratosthenes, animated ----------
  const Sieve = () => {
    const MAX = 100;
    const [step, setStep] = uS(0);
    const [playing, setPlaying] = uS(false);
    uE(() => {
      if (!playing) return;
      const id = setInterval(() => setStep(s => s >= 10 ? (setPlaying(false), 10) : s + 1), 900);
      return () => clearInterval(id);
    }, [playing]);
    const state = uM(() => {
      // composite[n] becomes true once some prime has struck n.
      const composite = Array(MAX + 1).fill(false);
      composite[0] = composite[1] = true;  // 0 and 1 are not prime
      const confirmed = new Set();        // primes we've already processed
      const hits = [];                     // primes in order processed
      for (let p = 2; p <= MAX; p++) {
        if (composite[p]) continue;
        hits.push(p);
        if (hits.length > step) break;
        confirmed.add(p);
        for (let q = p*p; q <= MAX; q += p) composite[q] = true;
      }
      return { composite, confirmed, currentPrime: hits[step - 1] ?? null, maxSteps: hits.length };
    }, [step]);
    const cols = 10;
    return (
      <div>
        <svg viewBox="0 0 420 280" width="100%" height="280">
          {Array.from({length: MAX}).map((_, idx) => {
            const n = idx + 1;
            const col = (n - 1) % cols;
            const row = Math.floor((n - 1) / cols);
            const x = col * 40 + 12, y = row * 26 + 12;
            const isCurrent = state.currentPrime === n;
            const isConfirmed = state.confirmed.has(n);
            const isStruck = n > 1 && state.composite[n];
            const fill = n === 1 ? '#c9c0aa'
              : isCurrent ? '#c8621a'
              : isConfirmed ? '#4a5d3a'
              : isStruck ? '#d6ccb8'
              : '#f0e9d6';
            const textColor = isConfirmed || isCurrent ? '#f4efe6' : isStruck ? '#8a8070' : '#1a1d2b';
            return (
              <g key={n}>
                <rect x={x} y={y} width="34" height="20" rx="2" fill={fill}
                      stroke={isCurrent ? '#1a1d2b' : '#c9c0aa'} strokeWidth={isCurrent ? 1 : 0.5}/>
                {isStruck && <line x1={x + 5} y1={y + 10} x2={x + 29} y2={y + 10} stroke="#8a8070" strokeWidth="1"/>}
                <text x={x + 17} y={y + 14} fontSize="10" fontFamily="JetBrains Mono" fill={textColor}
                      textAnchor="middle" fontWeight={isConfirmed || isCurrent ? 600 : 400}>{n}</text>
              </g>
            );
          })}
        </svg>
        <div style={{ display:'flex', gap:8, alignItems:'center', marginTop:8, fontSize:12, flexWrap:'wrap' }}>
          <button className="btn-ghost" onClick={()=>{setStep(0); setPlaying(false);}}>Reset</button>
          <button className="btn-ghost" onClick={()=>setStep(s => Math.min(s + 1, 10))}>Next step</button>
          <button className="btn-ghost" onClick={()=>setPlaying(p => !p)}>{playing ? 'Pause' : 'Play'}</button>
          <span style={{ color:'var(--ink-3)', marginLeft:'auto', fontFamily:'JetBrains Mono', fontSize:11 }}>
            {step === 0
              ? 'All candidates unknown. Press Next to sieve with 2.'
              : state.currentPrime
                ? `Step ${step}: ${state.currentPrime} is prime — striking its multiples from ${state.currentPrime*state.currentPrime} up.`
                : 'Sieving complete — green squares are the primes up to 100.'}
          </span>
        </div>
      </div>
    );
  };

  // ---------- Registry ----------
  const MATH_INTERACTIVES = {
    numberline:  { title: 'Arithmetic on a number line', hint: 'Drag the marker to the answer.', Component: NumberLine },
    pythag:      { title: 'Pythagoras, live', hint: 'a² + b² = c², one drag at a time.', Component: Pythag },
    unitcircle:  { title: 'The unit circle', hint: 'Sweep an angle; read sin and cos.', Component: UnitCircle },
    funcplotter: { title: 'Function plotter', hint: 'Pick a function; compare their shapes.', Component: FuncPlotter },
    derivative:  { title: 'Tangent line', hint: 'The slope of the tangent is the derivative.', Component: Derivative },
    riemann:     { title: 'Riemann sums', hint: 'More rectangles, closer to the integral.', Component: Riemann },
    slopefield:  { title: 'Slope field', hint: 'Click to drop a solution curve.', Component: SlopeField },
    transform2d: { title: '2×2 linear transformation', hint: 'Drag î and ĵ; the grid warps with them.', Component: Transform2D },
    sieve:       { title: 'Sieve of Eratosthenes', hint: 'The oldest prime-finder, step by step.', Component: Sieve },
  };

  // Merge into the shared registry. The existing InteractiveEmbed in
  // interactives.jsx reads from window.INTERACTIVES, and interactives-v2.jsx
  // already uses the same Object.assign trick to land there.
  window.INTERACTIVES = Object.assign({}, window.INTERACTIVES || {}, MATH_INTERACTIVES);

  // Shim so that entries with `{ title, hint, Component }` also work when
  // accessed through the older InteractiveEmbed (which expects `comp`).
  for (const k of Object.keys(MATH_INTERACTIVES)) {
    const entry = MATH_INTERACTIVES[k];
    if (!window.INTERACTIVES[k].comp) window.INTERACTIVES[k].comp = entry.Component;
  }

  // interactives-v2.jsx assigns `window.TOPIC_INTERACTIVE = { ... }` with a
  // hard-coded map, which wipes whatever _bootstrap.js merged from CONTENT.
  // Re-merge the math topic → kind mappings on top so our topics get a widget.
  // This file loads AFTER interactives-v2.jsx in index.html, so we win the race.
  const MATH_TOPIC_INTERACTIVE = {
    arith: 'numberline',
    algebra: 'numberline',
    geom: 'pythag',
    trig: 'unitcircle',
    precalc: 'funcplotter',
    calc1: 'derivative',
    calc2: 'riemann',
    diffeq: 'slopefield',
    stats: 'dice',
    linalg: 'transform2d',
    discrete: 'logic',
    numtheory: 'sieve',
  };
  window.TOPIC_INTERACTIVE = Object.assign({}, window.TOPIC_INTERACTIVE || {}, MATH_TOPIC_INTERACTIVE);
})();
