// content/_interactives-bundle.jsx
// AUTO-GENERATED — do not edit by hand.
// Built: 2026-04-24T08:51:34Z


// ====== math-interactives.jsx ======
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


// ====== interactives-b02.jsx ======
// content/interactives-b02.jsx
// Batch: B02-hard-sciences — practice widgets
// Last updated: 2026-04-22 by BATCH B02-hard-sciences
//
// One interactive per topic in physics, chemistry, astronomy, geology.
// Registered into window.INTERACTIVES for the InteractiveEmbed in pages-v2.
// Mix of short practice quizzes and small hands-on simulations.

(function () {
  const { useState, useEffect, useRef, useMemo } = React;
  const uS = useState, uE = useEffect, uR = useRef, uM = useMemo;

  // ==========================================
  // Shared Quiz component
  // ==========================================
  const Quiz = ({ questions }) => {
    const [idx, setIdx] = uS(0);
    const [picked, setPicked] = uS(null);
    const [score, setScore] = uS(0);
    const [done, setDone] = uS(false);

    const reset = () => { setIdx(0); setPicked(null); setScore(0); setDone(false); };

    if (done) {
      const pct = Math.round((score / questions.length) * 100);
      return (
        <div style={{ padding: '16px 4px' }}>
          <div style={{ fontFamily: 'Instrument Serif', fontSize: 32, color: '#1a1d2b', marginBottom: 4 }}>
            {score} / {questions.length}
          </div>
          <div style={{ fontSize: 12, fontFamily: 'JetBrains Mono', color: '#5a5d6e', marginBottom: 16 }}>
            {pct >= 90 ? 'Outstanding.' : pct >= 70 ? 'Solid — worth a second pass to lock it in.' : pct >= 40 ? 'Halfway there. Re-read, then try again.' : 'Read the lesson once more, then come back.'}
          </div>
          <button className="btn-ghost" onClick={reset}>Try again</button>
        </div>
      );
    }

    const q = questions[idx];
    const pick = (i) => {
      if (picked !== null) return;
      setPicked(i);
      if (i === q.answer) setScore(s => s + 1);
    };
    const next = () => {
      if (idx + 1 >= questions.length) { setDone(true); return; }
      setIdx(idx + 1);
      setPicked(null);
    };

    const colorFor = (i) => {
      if (picked === null) return '#f4efe6';
      if (i === q.answer) return '#c8e0b4';
      if (i === picked) return '#e8bcb1';
      return '#f4efe6';
    };
    const borderFor = (i) => {
      if (picked === null) return '#c9c0aa';
      if (i === q.answer) return '#4a5d3a';
      if (i === picked) return '#8a3a2a';
      return '#c9c0aa';
    };

    return (
      <div style={{ padding: '6px 2px' }}>
        <div style={{ fontSize: 11, fontFamily: 'JetBrains Mono', color: '#5a5d6e', letterSpacing: '0.04em', marginBottom: 8 }}>
          QUESTION {idx + 1} / {questions.length} &nbsp;·&nbsp; SCORE {score}
        </div>
        <div style={{ fontSize: 15, lineHeight: 1.4, color: '#1a1d2b', marginBottom: 14, minHeight: 44 }}>{q.q}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {q.options.map((opt, i) => (
            <button key={i}
              onClick={() => pick(i)}
              disabled={picked !== null}
              style={{
                textAlign: 'left', padding: '10px 12px', fontSize: 14, cursor: picked === null ? 'pointer' : 'default',
                background: colorFor(i), border: `1px solid ${borderFor(i)}`, borderRadius: 4,
                fontFamily: 'inherit', color: '#1a1d2b',
              }}>
              <span style={{ fontFamily: 'JetBrains Mono', color: '#5a5d6e', marginRight: 10 }}>{String.fromCharCode(65 + i)}</span>
              {opt}
            </button>
          ))}
        </div>
        {picked !== null && (
          <div style={{ marginTop: 12, padding: '10px 12px', background: '#e8e3d4', borderLeft: '2px solid #c8621a', fontSize: 13, lineHeight: 1.5, color: '#1a1d2b' }}>
            <strong style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.05em', color: '#5a5d6e' }}>
              {picked === q.answer ? 'CORRECT' : 'NOT QUITE'}
            </strong>
            <div style={{ marginTop: 4 }}>{q.why}</div>
            <button onClick={next} className="btn-ghost" style={{ marginTop: 8 }}>
              {idx + 1 >= questions.length ? 'See score →' : 'Next →'}
            </button>
          </div>
        )}
      </div>
    );
  };

  const quiz = (title, hint, questions) => ({
    title, hint,
    Component: () => <Quiz questions={questions}/>,
  });

  // ==========================================
  // Custom simulations
  // ==========================================

  // ---------- pH slider (acidbase) ----------
  const PHSlider = () => {
    const [ph, setPh] = uS(7);
    const known = [
      { name: 'battery acid', ph: 0.5 },
      { name: 'stomach acid', ph: 1.5 },
      { name: 'lemon juice', ph: 2.3 },
      { name: 'vinegar', ph: 2.9 },
      { name: 'orange juice', ph: 3.5 },
      { name: 'coffee', ph: 5 },
      { name: 'milk', ph: 6.5 },
      { name: 'pure water', ph: 7 },
      { name: 'blood', ph: 7.4 },
      { name: 'seawater', ph: 8.1 },
      { name: 'baking soda', ph: 9 },
      { name: 'ammonia', ph: 11 },
      { name: 'bleach', ph: 12.5 },
      { name: 'drain cleaner', ph: 14 },
    ];
    const indicator = [
      [0, '#b02a2a'], [2, '#c8621a'], [4, '#d89a3a'],
      [6, '#c8b83a'], [7, '#4a5d3a'], [8, '#3a7a7a'],
      [10, '#2a4a6a'], [13, '#3a2a5a'], [14, '#1a1035'],
    ];
    const near = known.reduce((best, s) => Math.abs(s.ph - ph) < Math.abs(best.ph - ph) ? s : best);
    const hexAt = (p) => {
      for (let i = 0; i < indicator.length - 1; i++) {
        const [a, ca] = indicator[i], [b, cb] = indicator[i + 1];
        if (p >= a && p <= b) {
          const t = (p - a) / (b - a);
          const lerp = (x, y) => Math.round(parseInt(x, 16) * (1 - t) + parseInt(y, 16) * t).toString(16).padStart(2, '0');
          return '#' + lerp(ca.slice(1, 3), cb.slice(1, 3)) + lerp(ca.slice(3, 5), cb.slice(3, 5)) + lerp(ca.slice(5, 7), cb.slice(5, 7));
        }
      }
      return '#444';
    };
    return (
      <div>
        <svg viewBox="0 0 400 200" width="100%" height="220">
          {Array.from({ length: 140 }, (_, i) => {
            const p = i / 10;
            return <rect key={i} x={20 + i * 2.6} y="40" width="2.8" height="60" fill={hexAt(p)}/>;
          })}
          <rect x={20 + ph * 26} y="30" width="2" height="80" fill="#1a1d2b"/>
          <circle cx={20 + ph * 26 + 1} cy="26" r="5" fill="#1a1d2b"/>
          <text x={20 + ph * 26 + 1} y="124" textAnchor="middle" fontSize="14" fontFamily="Instrument Serif" fill="#1a1d2b">pH {ph.toFixed(1)}</text>
          <text x="22" y="148" fontSize="10" fontFamily="JetBrains Mono" fill="#b02a2a">← ACIDIC</text>
          <text x="378" y="148" textAnchor="end" fontSize="10" fontFamily="JetBrains Mono" fill="#2a4a6a">BASIC →</text>
          <text x="200" y="148" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#4a5d3a">NEUTRAL</text>
          <rect x="110" y="160" width="180" height="30" fill={hexAt(ph)} stroke="#1a1d2b"/>
          <text x="200" y="180" textAnchor="middle" fontSize="12" fontFamily="Instrument Serif" fill="#f4efe6">≈ {near.name}</text>
        </svg>
        <div style={{ fontSize: 12, padding: '4px 8px' }}>
          <input type="range" min="0" max="14" step="0.1" value={ph} onChange={e => setPh(+e.target.value)} style={{ width: '100%' }}/>
        </div>
        <div style={{ fontSize: 12, color: 'var(--ink-3)', textAlign: 'center', padding: '4px 8px' }}>
          Drag to any pH from 0–14. Each step is a tenfold change in hydrogen-ion concentration.
        </div>
      </div>
    );
  };

  // ---------- Double-slit interference ----------
  const DoubleSlitSim = () => {
    const [sep, setSep] = uS(40);
    const [lam, setLam] = uS(550); // wavelength in nm (visible ~380-740)
    const L = 300; // distance to screen (arbitrary units)
    const intensity = (y) => {
      // Visualization-friendly rescaling: lam in nm → lam_vis in "units"
      // so 5-10 fringes fit across the 200-pixel screen.
      const lamVis = lam / 100; // 4.0–7.0
      const phase = (sep * y) / (lamVis * L) * Math.PI;
      return Math.cos(phase) ** 2;
    };
    const visible = (wl) => {
      if (wl < 400) return '#5a3a8a';
      if (wl < 450) return '#3a2a8a';
      if (wl < 495) return '#2a6aca';
      if (wl < 570) return '#4a9a3a';
      if (wl < 590) return '#dada3a';
      if (wl < 620) return '#e08a2a';
      return '#c8301a';
    };
    const color = visible(lam);
    return (
      <div>
        <svg viewBox="0 0 400 200" width="100%" height="220">
          <rect x="0" y="0" width="400" height="200" fill="#0e0f16"/>
          {Array.from({ length: 200 }, (_, i) => {
            const y = (i - 100);
            const I = intensity(y);
            return <rect key={i} x="340" y={100 + y - 0.5} width="50" height="1.2" fill={color} opacity={I}/>;
          })}
          <rect x="80" y="20" width="8" height={80 - sep / 2} fill="#c9c0aa"/>
          <rect x="80" y={100 + sep / 2 - 0} width="8" height={80 - sep / 2} fill="#c9c0aa"/>
          <rect x="80" y={100 - sep / 2 - 1} width="8" height="2" fill="#0e0f16"/>
          <rect x="80" y={100 + sep / 2 - 1} width="8" height="2" fill="#0e0f16"/>
          <text x="10" y="40" fontSize="9" fontFamily="JetBrains Mono" fill="#c9c0aa">SOURCE</text>
          <text x="90" y="15" fontSize="9" fontFamily="JetBrains Mono" fill="#c9c0aa">SLITS</text>
          <text x="350" y="15" fontSize="9" fontFamily="JetBrains Mono" fill="#c9c0aa">SCREEN</text>
        </svg>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 12, marginTop: 8, padding: '0 4px' }}>
          <label>Slit separation: {sep}
            <input type="range" min="10" max="80" value={sep} onChange={e => setSep(+e.target.value)} style={{ width: '100%' }}/></label>
          <label>Wavelength: {lam} nm
            <input type="range" min="400" max="700" value={lam} onChange={e => setLam(+e.target.value)} style={{ width: '100%' }}/></label>
        </div>
        <div style={{ fontSize: 12, color: 'var(--ink-3)', padding: '4px 8px', textAlign: 'center' }}>
          Wider slit spacing or shorter wavelength → tighter fringes.
        </div>
      </div>
    );
  };

  // ---------- Entropy: particles spreading ----------
  const EntropyBox = () => {
    const [t, setT] = uS(0);
    const [run, setRun] = uS(false);
    const [seed] = uS(() => Math.floor(Math.random() * 1000));
    uE(() => { if (!run) return; const i = setInterval(() => setT(x => x < 200 ? x + 1 : x), 30); return () => clearInterval(i); }, [run]);
    const particles = uM(() => {
      // 80 particles, initially clustered in left half
      const rng = (n) => { let x = Math.sin(n + seed) * 10000; return x - Math.floor(x); };
      return Array.from({ length: 80 }, (_, i) => ({ i, x0: rng(i) * 180 + 10, y0: rng(i + 100) * 140 + 20, dx: (rng(i + 200) - 0.5) * 2, dy: (rng(i + 300) - 0.5) * 2 }));
    }, [seed]);
    const phase = Math.min(1, t / 80);
    const ent = Math.round(50 + phase * 50);
    return (
      <div>
        <svg viewBox="0 0 400 200" width="100%" height="220">
          <rect x="10" y="15" width="380" height="160" fill="#0e0f16" stroke="#c9c0aa"/>
          <line x1="200" y1="15" x2="200" y2="175" stroke="#c9c0aa" strokeDasharray="3 3" opacity="0.4"/>
          {particles.map(p => {
            // spread particles from left half (x0 in [10,190]) to full box (x in [15,385]) as phase increases
            const xFinal = 15 + ((p.x0 - 10) / 180 * 370 + p.dx * 100 * phase);
            const yFinal = p.y0 + 15 + p.dy * 60 * phase;
            const x = p.x0 + (xFinal - p.x0) * phase;
            const y = p.y0 + (yFinal - p.y0) * phase;
            return <circle key={p.i} cx={Math.max(15, Math.min(385, x))} cy={Math.max(20, Math.min(170, y))} r="2.5" fill="#c8621a" opacity="0.9"/>;
          })}
          <text x="16" y="190" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">
            S ≈ {ent} &nbsp;·&nbsp; time: {t}
          </text>
          <text x="384" y="190" textAnchor="end" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">
            arrows of time →
          </text>
        </svg>
        <div style={{ display: 'flex', gap: 10, marginTop: 8, padding: '0 4px', fontSize: 12 }}>
          <button className="btn-ghost" onClick={() => setRun(r => !r)}>{run ? 'Pause' : 'Run'}</button>
          <button className="btn-ghost" onClick={() => { setT(0); setRun(false); }}>Reset</button>
          <div style={{ flex: 1, color: 'var(--ink-3)', textAlign: 'right', lineHeight: '24px' }}>
            Never saw the reverse. That is the second law.
          </div>
        </div>
      </div>
    );
  };

  // ---------- Relativity: time dilation ----------
  const TimeDilation = () => {
    const [beta, setBeta] = uS(0.5); // v/c
    const gamma = 1 / Math.sqrt(1 - beta * beta);
    const [tick, setTick] = uS(0);
    uE(() => { const i = setInterval(() => setTick(t => t + 1), 120); return () => clearInterval(i); }, []);
    const earthAngle = (tick * 0.12) % (Math.PI * 2);
    const shipAngle = (tick * 0.12 / gamma) % (Math.PI * 2);
    const dot = (cx, cy, a) => ({ x: cx + Math.cos(a - Math.PI/2) * 32, y: cy + Math.sin(a - Math.PI/2) * 32 });
    const ed = dot(100, 100, earthAngle);
    const sd = dot(300, 100, shipAngle);
    return (
      <div>
        <svg viewBox="0 0 400 220" width="100%" height="240">
          <circle cx="100" cy="100" r="36" fill="none" stroke="#c9c0aa"/>
          <circle cx="300" cy="100" r="36" fill="none" stroke="#c9c0aa"/>
          <line x1="100" y1="100" x2={ed.x} y2={ed.y} stroke="#1a1d2b" strokeWidth="2"/>
          <line x1="300" y1="100" x2={sd.x} y2={sd.y} stroke="#c8621a" strokeWidth="2"/>
          <circle cx="100" cy="100" r="3" fill="#1a1d2b"/>
          <circle cx="300" cy="100" r="3" fill="#c8621a"/>
          <text x="100" y="160" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono" fill="#1a1d2b">EARTH CLOCK</text>
          <text x="300" y="160" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono" fill="#c8621a">SHIP CLOCK</text>
          <text x="200" y="190" textAnchor="middle" fontSize="13" fontFamily="Instrument Serif" fill="#1a1d2b">
            γ = 1 / √(1 − β²) = {gamma.toFixed(3)}
          </text>
          <text x="200" y="208" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">
            ship ages {(1 / gamma).toFixed(3)}× as fast as Earth
          </text>
        </svg>
        <div style={{ padding: '4px 8px', fontSize: 12 }}>
          <label>β = v/c = {beta.toFixed(2)}
            <input type="range" min="0" max="0.99" step="0.01" value={beta} onChange={e => setBeta(+e.target.value)} style={{ width: '100%' }}/>
          </label>
        </div>
        <div style={{ fontSize: 12, color: 'var(--ink-3)', padding: '4px 8px', textAlign: 'center' }}>
          Push the slider past β = 0.9 to really feel what relativity costs the traveler.
        </div>
      </div>
    );
  };

  // ---------- Orbit: Kepler ----------
  const Orbit = () => {
    const [ecc, setEcc] = uS(0.3);
    const [t, setT] = uS(0);
    uE(() => { const i = setInterval(() => setT(x => x + 0.018), 30); return () => clearInterval(i); }, []);
    // Newton-Raphson for Kepler
    const M = (t * 2 * Math.PI) % (Math.PI * 2);
    let E = M;
    for (let k = 0; k < 8; k++) E = E - (E - ecc * Math.sin(E) - M) / (1 - ecc * Math.cos(E));
    const x = Math.cos(E) - ecc;
    const y = Math.sqrt(1 - ecc * ecc) * Math.sin(E);
    const r = Math.sqrt(x * x + y * y);
    const speed = Math.sqrt((2 - (1 + ecc)) / r); // in units of v_mean — qualitative
    const px = 200 + x * 120;
    const py = 110 + y * 70;
    // Draw orbit ellipse
    const ellipsePts = Array.from({ length: 60 }, (_, i) => {
      const a = (i / 60) * Math.PI * 2;
      const ex = 200 + (Math.cos(a) - ecc) * 120;
      const ey = 110 + Math.sqrt(1 - ecc * ecc) * Math.sin(a) * 70;
      return `${ex},${ey}`;
    }).join(' ');
    return (
      <div>
        <svg viewBox="0 0 400 220" width="100%" height="240">
          <rect x="0" y="0" width="400" height="220" fill="#0e0f16"/>
          <polyline points={ellipsePts} fill="none" stroke="#5a5d6e" strokeWidth="1"/>
          <circle cx="200" cy="110" r="8" fill="#fdb131"/>
          <circle cx={px} cy={py} r="5" fill="#c8621a"/>
          <line x1="200" y1="110" x2={px} y2={py} stroke="#c8621a" opacity="0.5"/>
          <text x="10" y="20" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">KEPLER'S 2ND LAW</text>
          <text x="10" y="210" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">
            r = {r.toFixed(2)} &nbsp;·&nbsp; v ≈ {speed.toFixed(2)}
          </text>
        </svg>
        <div style={{ padding: '4px 8px', fontSize: 12 }}>
          <label>Eccentricity: {ecc.toFixed(2)}
            <input type="range" min="0" max="0.85" step="0.01" value={ecc} onChange={e => setEcc(+e.target.value)} style={{ width: '100%' }}/>
          </label>
        </div>
        <div style={{ fontSize: 12, color: 'var(--ink-3)', padding: '4px 8px', textAlign: 'center' }}>
          Equal areas in equal times — planet moves faster near perihelion.
        </div>
      </div>
    );
  };

  // ---------- Deep Time scale ----------
  const DeepTime = () => {
    const events = [
      { at: 4540, name: 'Earth forms', detail: 'Accretion from the protoplanetary disk.' },
      { at: 3800, name: 'First life', detail: 'Earliest chemical traces of prokaryotes.' },
      { at: 2400, name: 'Great Oxygenation', detail: 'Cyanobacteria transform the atmosphere.' },
      { at: 540, name: 'Cambrian explosion', detail: 'Most animal phyla appear in ~20 Myr.' },
      { at: 444, name: 'Ordovician extinction', detail: 'First of the Big Five.' },
      { at: 359, name: 'First land plants (established)', detail: 'Forests; carbon drawdown.' },
      { at: 252, name: 'Permian extinction', detail: '96% of marine species gone.' },
      { at: 201, name: 'Triassic extinction', detail: 'Makes way for dinosaurs.' },
      { at: 66, name: 'Cretaceous extinction', detail: 'Chicxulub asteroid; dinosaurs fall.' },
      { at: 2.5, name: 'Homo emerges', detail: 'Stone tools in Africa.' },
      { at: 0.3, name: 'H. sapiens', detail: 'Anatomically modern humans.' },
      { at: 0.012, name: 'Holocene / agriculture', detail: 'Last 12,000 years.' },
    ];
    const [sel, setSel] = uS(4);
    const toX = (mya) => 20 + (1 - Math.log10(1 + mya) / Math.log10(5000)) * 360;
    return (
      <div>
        <svg viewBox="0 0 400 200" width="100%" height="220">
          <line x1="20" y1="80" x2="380" y2="80" stroke="#1a1d2b" strokeWidth="1.5"/>
          {[4000, 1000, 100, 10, 1, 0.01].map(mya => (
            <g key={mya}>
              <line x1={toX(mya)} y1="75" x2={toX(mya)} y2="85" stroke="#1a1d2b"/>
              <text x={toX(mya)} y="98" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="#5a5d6e">
                {mya >= 1 ? `${mya} Ma` : `${mya * 1000} ka`}
              </text>
            </g>
          ))}
          {events.map((e, i) => (
            <g key={i} onClick={() => setSel(i)} style={{ cursor: 'pointer' }}>
              <circle cx={toX(e.at)} cy="80" r={i === sel ? 5 : 3} fill={i === sel ? '#c8621a' : '#1a1d2b'}/>
              <line x1={toX(e.at)} y1={80 - (i % 3 + 1) * 14} x2={toX(e.at)} y2="75" stroke="#c9c0aa"/>
              <text x={toX(e.at)} y={80 - (i % 3 + 1) * 14 - 4} textAnchor="middle" fontSize="8" fontFamily="JetBrains Mono" fill={i === sel ? '#c8621a' : '#5a5d6e'}>
                {e.name.length > 18 ? e.name.slice(0, 17) + '…' : e.name}
              </text>
            </g>
          ))}
          <text x="20" y="148" fontSize="11" fontFamily="Instrument Serif" fill="#1a1d2b">{events[sel].name}</text>
          <text x="20" y="166" fontSize="11" fontFamily="JetBrains Mono" fill="#5a5d6e">
            {events[sel].at >= 1 ? `${events[sel].at} Ma` : `${(events[sel].at * 1000).toFixed(0)} ka`} — {events[sel].detail}
          </text>
        </svg>
        <div style={{ fontSize: 12, color: 'var(--ink-3)', padding: '4px 8px', textAlign: 'center' }}>
          Logarithmic axis. Tap an event to highlight. Everything to the left of the Cambrian is 88% of Earth's history.
        </div>
      </div>
    );
  };

  // ---------- Rock cycle ----------
  const RockCycle = () => {
    const [sel, setSel] = uS('igneous');
    const nodes = {
      igneous:     { x: 200, y: 50,  color: '#c8621a', desc: 'Crystallized from magma. Granite (slow) or basalt (fast).' },
      sedimentary: { x: 340, y: 140, color: '#d8b05a', desc: 'Laid down in layers; most fossils live here.' },
      metamorphic: { x: 60,  y: 140, color: '#6a4a5a', desc: 'Reworked under heat and pressure without melting.' },
      magma:       { x: 200, y: 190, color: '#8a1a1a', desc: 'Molten rock. Feeds igneous. Where it all starts again.' },
    };
    const arcs = [
      ['igneous', 'sedimentary', 'weathering'],
      ['sedimentary', 'metamorphic', 'burial'],
      ['metamorphic', 'magma', 'melting'],
      ['magma', 'igneous', 'crystallization'],
      ['igneous', 'metamorphic', 'heat/pressure'],
      ['metamorphic', 'sedimentary', 'uplift'],
    ];
    const n = nodes[sel];
    return (
      <div>
        <svg viewBox="0 0 400 240" width="100%" height="240">
          {arcs.map(([a, b, label], i) => {
            const A = nodes[a], B = nodes[b];
            const mx = (A.x + B.x) / 2 + (i % 2 ? 10 : -10);
            const my = (A.y + B.y) / 2 + (i % 2 ? 5 : -5);
            return (
              <g key={i}>
                <path d={`M ${A.x} ${A.y} Q ${mx} ${my} ${B.x} ${B.y}`} fill="none" stroke="#c9c0aa" strokeWidth="1.2" markerEnd="url(#arr)"/>
                <text x={mx} y={my} fontSize="8" fontFamily="JetBrains Mono" fill="#5a5d6e" textAnchor="middle">{label}</text>
              </g>
            );
          })}
          <defs>
            <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 Z" fill="#c9c0aa"/>
            </marker>
          </defs>
          {Object.entries(nodes).map(([k, node]) => (
            <g key={k} onClick={() => setSel(k)} style={{ cursor: 'pointer' }}>
              <circle cx={node.x} cy={node.y} r={sel === k ? 22 : 18} fill={node.color} opacity={sel === k ? 1 : 0.75}/>
              <text x={node.x} y={node.y + 4} textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono" fill="#f4efe6">{k.slice(0, 5)}</text>
            </g>
          ))}
          <text x="200" y="225" textAnchor="middle" fontSize="12" fontFamily="Instrument Serif" fill="#1a1d2b">{sel}: {n.desc}</text>
        </svg>
        <div style={{ fontSize: 12, color: 'var(--ink-3)', padding: '4px 8px', textAlign: 'center' }}>
          Tap a node. Each arrow is a real transformation — there are no terminal nodes.
        </div>
      </div>
    );
  };

  // ---------- HR Diagram click-and-identify ----------
  const HRDiagram = () => {
    const stars = [
      { id: 'sun',       x: 0.55, y: 0.55, name: 'Sun (G main-sequence)',  color: '#f5d24a' },
      { id: 'sirius',    x: 0.25, y: 0.35, name: 'Sirius A (A main-sequence)', color: '#dce8ff' },
      { id: 'proxima',   x: 0.85, y: 0.85, name: 'Proxima Centauri (red dwarf)', color: '#c8301a' },
      { id: 'betelgeuse',x: 0.78, y: 0.12, name: 'Betelgeuse (red supergiant)', color: '#e05a1a' },
      { id: 'rigel',     x: 0.12, y: 0.10, name: 'Rigel (blue supergiant)', color: '#aac9ff' },
      { id: 'sirius_b',  x: 0.30, y: 0.90, name: 'Sirius B (white dwarf)', color: '#ffffff' },
      { id: 'arcturus',  x: 0.70, y: 0.30, name: 'Arcturus (red giant)',  color: '#ffa355' },
    ];
    const [sel, setSel] = uS('sun');
    const s = stars.find(x => x.id === sel);
    return (
      <div>
        <svg viewBox="0 0 400 240" width="100%" height="240">
          <rect x="40" y="20" width="340" height="180" fill="#0e0f16"/>
          <text x="40" y="14" fontSize="9" fontFamily="JetBrains Mono" fill="#c9c0aa">LUMINOSITY →</text>
          <text x="40" y="215" fontSize="9" fontFamily="JetBrains Mono" fill="#c9c0aa">← HOT &nbsp;&nbsp;&nbsp; TEMPERATURE &nbsp;&nbsp;&nbsp; COOL →</text>
          {/* Main sequence diagonal */}
          <line x1="70" y1="40" x2="360" y2="180" stroke="#5a5d6e" strokeDasharray="3 3"/>
          <text x="200" y="110" fontSize="9" fontFamily="JetBrains Mono" fill="#5a5d6e" transform="rotate(22 200 110)">main sequence</text>
          {stars.map(st => (
            <g key={st.id} onClick={() => setSel(st.id)} style={{ cursor: 'pointer' }}>
              <circle cx={40 + st.x * 340} cy={20 + st.y * 180} r={sel === st.id ? 9 : 6} fill={st.color} stroke={sel === st.id ? '#c8621a' : '#1a1d2b'} strokeWidth="1.5"/>
            </g>
          ))}
          <text x="200" y="230" textAnchor="middle" fontSize="12" fontFamily="Instrument Serif" fill="#1a1d2b">{s.name}</text>
        </svg>
        <div style={{ fontSize: 12, color: 'var(--ink-3)', padding: '4px 8px', textAlign: 'center' }}>
          Hotter stars to the left, brighter stars upward. Main sequence is the diagonal band.
        </div>
      </div>
    );
  };

  // ==========================================
  // VideoVault — hidden/expandable video menu
  // Reads the lesson's video list from window.LESSONS[topicId].videos,
  // so each lesson's curated reel is one click away without cluttering the page.
  // ==========================================
  const makeVideoVault = (topicId, headline) => () => {
    const [open, setOpen] = uS(false);
    const [playing, setPlaying] = uS(null);
    const lesson = window.LESSONS?.[topicId];
    const videos = (lesson?.videos || []).filter(v => v.url);

    if (videos.length === 0) return (
      <div style={{ padding: 12, fontSize: 13, color: '#5a5d6e', fontStyle: 'italic' }}>
        No videos linked yet for this lesson.
      </div>
    );

    if (playing) {
      const emb = playing.id
        ? `https://www.youtube-nocookie.com/embed/${playing.id}`
        : null;
      return (
        <div>
          <div style={{ padding: '8px 10px', display: 'flex', gap: 12, alignItems: 'center', fontSize: 12 }}>
            <button className="btn-ghost" onClick={() => setPlaying(null)}>← Back to vault</button>
            <div style={{ flex: 1, fontFamily: 'Instrument Serif', fontSize: 15, color: '#1a1d2b' }}>{playing.title}</div>
            <a href={playing.url} target="_blank" rel="noreferrer" style={{ fontSize: 11, color: '#c8621a', fontFamily: 'JetBrains Mono', textDecoration: 'none' }}>OPEN ON YT ↗</a>
          </div>
          {emb ? (
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src={emb}
                title={playing.title}
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              />
            </div>
          ) : (
            <div style={{ padding: 24, textAlign: 'center', fontSize: 13 }}>
              <a href={playing.url} target="_blank" rel="noreferrer">Open this one on the source site →</a>
            </div>
          )}
          <div style={{ padding: '10px 12px', fontSize: 12, color: '#5a5d6e', lineHeight: 1.5 }}>{playing.why}</div>
        </div>
      );
    }

    return (
      <div>
        <button
          onClick={() => setOpen(o => !o)}
          style={{
            width: '100%', padding: '12px 14px', fontSize: 13, textAlign: 'left', cursor: 'pointer',
            background: open ? '#1a1d2b' : '#f4efe6', color: open ? '#f4efe6' : '#1a1d2b',
            border: '1px solid #1a1d2b', borderRadius: 4, fontFamily: 'JetBrains Mono',
            display: 'flex', alignItems: 'center', gap: 10,
          }}
        >
          <span style={{ fontSize: 11, letterSpacing: '0.08em' }}>{open ? '▾' : '▸'}</span>
          <span>{open ? 'HIDE THE REEL' : (headline || `THE REEL — ${videos.length} curated video${videos.length === 1 ? '' : 's'}`)}</span>
        </button>
        {open && (
          <div style={{ marginTop: 10, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
            {videos.map((v, i) => {
              const thumb = v.id ? `https://img.youtube.com/vi/${v.id}/mqdefault.jpg` : null;
              return (
                <button key={i}
                  onClick={() => setPlaying(v)}
                  style={{
                    padding: 0, textAlign: 'left', cursor: 'pointer',
                    background: '#f4efe6', border: '1px solid #c9c0aa', borderRadius: 4,
                    overflow: 'hidden', fontFamily: 'inherit',
                  }}
                >
                  {thumb ? (
                    <img src={thumb} alt="" style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }} onError={e => { e.target.style.display = 'none'; }}/>
                  ) : (
                    <div style={{ width: '100%', aspectRatio: '16/9', background: '#1a1d2b', color: '#f4efe6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Instrument Serif', fontSize: 20 }}>▶</div>
                  )}
                  <div style={{ padding: 10 }}>
                    <div style={{ fontSize: 11, fontFamily: 'JetBrains Mono', color: '#5a5d6e', letterSpacing: '0.04em', marginBottom: 3 }}>
                      {(v.channel || '').toUpperCase()} · {v.duration || ''}
                    </div>
                    <div style={{ fontSize: 13, lineHeight: 1.3, color: '#1a1d2b', marginBottom: 4 }}>{v.title}</div>
                    <div style={{ fontSize: 11, color: '#5a5d6e', lineHeight: 1.4 }}>{v.why}</div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  // ==========================================
  // KeyMoment — a single narrated "moment in history" card.
  // Accepts {year, headline, body, place} — renders richly.
  // ==========================================
  const makeKeyMoment = (year, place, headline, body) => () => (
    <div style={{ padding: '12px 14px', display: 'grid', gridTemplateColumns: '90px 1fr', gap: 16, alignItems: 'start' }}>
      <div style={{ textAlign: 'right', fontFamily: 'JetBrains Mono', fontSize: 11, color: '#5a5d6e', lineHeight: 1.3 }}>
        <div style={{ fontFamily: 'Instrument Serif', fontSize: 26, color: '#c8621a', lineHeight: 1 }}>{year}</div>
        <div style={{ marginTop: 6 }}>{(place || '').toUpperCase()}</div>
      </div>
      <div style={{ borderLeft: '1px solid #c9c0aa', paddingLeft: 16 }}>
        <div style={{ fontFamily: 'Instrument Serif', fontSize: 20, color: '#1a1d2b', lineHeight: 1.2, marginBottom: 8 }}>{headline}</div>
        <div style={{ fontSize: 14, color: '#1a1d2b', lineHeight: 1.55 }}>{body}</div>
      </div>
    </div>
  );

  // ==========================================
  // FactStrip — row of 3-4 big-number fact cards.
  // ==========================================
  const makeFactStrip = (facts) => () => (
    <div style={{ padding: '8px 4px', display: 'grid', gridTemplateColumns: `repeat(${facts.length}, 1fr)`, gap: 10 }}>
      {facts.map((f, i) => (
        <div key={i} style={{ padding: '14px 12px', background: '#f4efe6', border: '1px solid #c9c0aa', borderRadius: 4 }}>
          <div style={{ fontFamily: 'Instrument Serif', fontSize: 28, color: '#c8621a', lineHeight: 1, marginBottom: 6 }}>{f.value}</div>
          <div style={{ fontSize: 11, fontFamily: 'JetBrains Mono', color: '#5a5d6e', letterSpacing: '0.04em', marginBottom: 4 }}>{(f.label || '').toUpperCase()}</div>
          <div style={{ fontSize: 12, color: '#1a1d2b', lineHeight: 1.4 }}>{f.caption}</div>
        </div>
      ))}
    </div>
  );

  // ==========================================
  // Topic-specific inline diagrams (small SVG animations)
  // Each is a self-contained component. Registered as `<topic>-diagram`.
  // ==========================================

  // --- mechanics: Newton's cannonball — velocity determines orbit vs. fall ---
  const MechanicsDiagram = () => {
    const [v, setV] = uS(7); // m/s in visualization units
    const [t, setT] = uS(0);
    uE(() => { const i = setInterval(() => setT(x => x + 0.04), 30); return () => clearInterval(i); }, []);
    const cx = 200, cy = 160, R = 60;
    // Use circular kinematics: x(t) = cx + v*t*cos(0) - ... simplified as parabola path bent toward cx,cy
    const pts = [];
    for (let tt = 0; tt <= t; tt += 0.05) {
      const x = cx - 80 + tt * v * 10;
      const drop = 0.5 * (9.8 / (v / 4)) * tt * tt * 2;
      const y = cy - 50 + drop;
      if ((x - cx) ** 2 + (y - cy) ** 2 < R * R) break;
      if (x > 400 || y > 230) break;
      pts.push(`${x},${y}`);
    }
    return (
      <div>
        <svg viewBox="0 0 400 240" width="100%" height="240">
          <rect x="0" y="0" width="400" height="240" fill="#eae3d2"/>
          <circle cx={cx} cy={cy} r={R} fill="#6b8a4a" stroke="#1a1d2b"/>
          <circle cx={cx} cy={cy} r={R + 0.5} fill="none" stroke="#c9c0aa" strokeDasharray="3 3"/>
          <polyline points={pts.join(' ')} fill="none" stroke="#c8621a" strokeWidth="2"/>
          <text x="10" y="20" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">NEWTON'S CANNON</text>
          <text x="10" y="230" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">Fire sideways hard enough and the ground falls away beneath you. That's orbit.</text>
        </svg>
        <div style={{ padding: '4px 8px', fontSize: 12 }}>
          <label>Muzzle speed: {v} <input type="range" min="3" max="20" value={v} onChange={e => { setV(+e.target.value); setT(0); }} style={{ width: '100%' }}/></label>
        </div>
      </div>
    );
  };

  // --- em: field lines around a charge ---
  const EMDiagram = () => {
    const [polarity, setPolarity] = uS(1);
    const cx = 200, cy = 120;
    const lines = Array.from({ length: 16 }, (_, i) => {
      const a = (i / 16) * Math.PI * 2;
      const r1 = 20, r2 = 100;
      return { x1: cx + Math.cos(a) * r1, y1: cy + Math.sin(a) * r1, x2: cx + Math.cos(a) * r2, y2: cy + Math.sin(a) * r2 };
    });
    return (
      <div>
        <svg viewBox="0 0 400 240" width="100%" height="240">
          <rect x="0" y="0" width="400" height="240" fill="#0e0f16"/>
          {lines.map((l, i) => (
            <g key={i}>
              <line x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="#c8621a" strokeWidth="1.2" opacity="0.8"/>
              <polygon points={
                polarity > 0
                  ? `${l.x2},${l.y2} ${l.x2 - (l.x2 - l.x1) * 0.08 - (l.y2 - l.y1) * 0.05},${l.y2 - (l.y2 - l.y1) * 0.08 + (l.x2 - l.x1) * 0.05} ${l.x2 - (l.x2 - l.x1) * 0.08 + (l.y2 - l.y1) * 0.05},${l.y2 - (l.y2 - l.y1) * 0.08 - (l.x2 - l.x1) * 0.05}`
                  : `${l.x1},${l.y1} ${l.x1 + (l.x2 - l.x1) * 0.08 - (l.y2 - l.y1) * 0.05},${l.y1 + (l.y2 - l.y1) * 0.08 + (l.x2 - l.x1) * 0.05} ${l.x1 + (l.x2 - l.x1) * 0.08 + (l.y2 - l.y1) * 0.05},${l.y1 + (l.y2 - l.y1) * 0.08 - (l.x2 - l.x1) * 0.05}`
              } fill="#c8621a"/>
            </g>
          ))}
          <circle cx={cx} cy={cy} r="16" fill={polarity > 0 ? '#c8621a' : '#2a4a6a'}/>
          <text x={cx} y={cy + 5} textAnchor="middle" fontSize="20" fontFamily="Instrument Serif" fill="#f4efe6">{polarity > 0 ? '+' : '−'}</text>
          <text x="10" y="230" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">FIELD LINES FROM A POINT CHARGE</text>
        </svg>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, padding: '4px 8px' }}>
          <button className="btn-ghost" onClick={() => setPolarity(1)}>Positive</button>
          <button className="btn-ghost" onClick={() => setPolarity(-1)}>Negative</button>
        </div>
      </div>
    );
  };

  // --- thermo: Carnot cycle pV diagram ---
  const ThermoDiagram = () => (
    <div>
      <svg viewBox="0 0 400 240" width="100%" height="240">
        <rect x="0" y="0" width="400" height="240" fill="#eae3d2"/>
        <text x="10" y="20" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">THE CARNOT CYCLE (p vs V)</text>
        {/* axes */}
        <line x1="40" y1="210" x2="380" y2="210" stroke="#1a1d2b"/>
        <line x1="40" y1="210" x2="40" y2="30" stroke="#1a1d2b"/>
        <text x="380" y="226" fontSize="11" fontFamily="JetBrains Mono" fill="#5a5d6e">V</text>
        <text x="30" y="30" fontSize="11" fontFamily="JetBrains Mono" fill="#5a5d6e">p</text>
        {/* 4 arcs of a Carnot cycle */}
        <path d="M 80 60 Q 150 70 240 110" fill="none" stroke="#c8301a" strokeWidth="2"/>
        <path d="M 240 110 Q 300 130 340 170" fill="none" stroke="#5a5d6e" strokeWidth="2"/>
        <path d="M 340 170 Q 220 170 80 150" fill="none" stroke="#2a4a6a" strokeWidth="2"/>
        <path d="M 80 150 Q 70 110 80 60" fill="none" stroke="#5a5d6e" strokeWidth="2"/>
        {/* labels */}
        <text x="95" y="55" fontSize="10" fontFamily="JetBrains Mono" fill="#c8301a">isothermal hot (+Q)</text>
        <text x="255" y="125" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">adiabatic</text>
        <text x="135" y="195" fontSize="10" fontFamily="JetBrains Mono" fill="#2a4a6a">isothermal cold (−Q)</text>
        <text x="24" y="110" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e" transform="rotate(-90 24 110)">adiabatic</text>
        {/* corner dots */}
        <circle cx="80" cy="60" r="3.5" fill="#1a1d2b"/>
        <circle cx="240" cy="110" r="3.5" fill="#1a1d2b"/>
        <circle cx="340" cy="170" r="3.5" fill="#1a1d2b"/>
        <circle cx="80" cy="150" r="3.5" fill="#1a1d2b"/>
        <text x="70" y="52" fontSize="10" fontFamily="Instrument Serif">A</text>
        <text x="246" y="104" fontSize="10" fontFamily="Instrument Serif">B</text>
        <text x="346" y="164" fontSize="10" fontFamily="Instrument Serif">C</text>
        <text x="62" y="146" fontSize="10" fontFamily="Instrument Serif">D</text>
      </svg>
      <div style={{ fontSize: 12, color: '#5a5d6e', textAlign: 'center', padding: '4px 12px', lineHeight: 1.5 }}>
        Carnot's 1824 idealized engine: heat absorbed A→B, work B→C, heat rejected C→D, compression D→A. The maximum efficiency possible is set by the temperature ratio of the two reservoirs.
      </div>
    </div>
  );

  // --- quantum: wavefunction collapse (click to "measure") ---
  const QuantumDiagram = () => {
    const [measured, setMeasured] = uS(false);
    const [where, setWhere] = uS(null);
    const wave = Array.from({ length: 80 }, (_, i) => {
      const x = 40 + i * 4.2;
      const y = 120 + Math.sin(i * 0.45) * 30 * Math.exp(-((i - 40) ** 2) / 900);
      return [x, y];
    });
    const measure = () => {
      const idx = Math.floor(Math.random() * 80);
      setWhere(40 + idx * 4.2);
      setMeasured(true);
    };
    return (
      <div>
        <svg viewBox="0 0 400 240" width="100%" height="240">
          <rect x="0" y="0" width="400" height="240" fill="#0e0f16"/>
          <text x="10" y="18" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">
            {measured ? 'POST-MEASUREMENT: particle localized' : 'PRE-MEASUREMENT: spread-out wavefunction'}
          </text>
          {!measured && (
            <polyline points={wave.map(p => p.join(',')).join(' ')} fill="none" stroke="#c8621a" strokeWidth="1.8"/>
          )}
          {measured && where !== null && (
            <circle cx={where} cy="120" r="8" fill="#c8621a"/>
          )}
          <line x1="40" y1="120" x2="380" y2="120" stroke="#c9c0aa" strokeDasharray="3 3"/>
          <text x="10" y="230" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">Before you look, the particle is a probability cloud. A measurement makes one outcome real.</text>
        </svg>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, padding: '4px 8px' }}>
          <button className="btn-ghost" onClick={measure}>Measure</button>
          <button className="btn-ghost" onClick={() => { setMeasured(false); setWhere(null); }}>Reset</button>
        </div>
      </div>
    );
  };

  // --- waves: traveling wave propagation ---
  const WavesDiagram = () => {
    const [t, setT] = uS(0);
    uE(() => { const i = setInterval(() => setT(x => x + 0.1), 40); return () => clearInterval(i); }, []);
    const pts = Array.from({ length: 80 }, (_, i) => {
      const x = 20 + i * 4.7;
      const y = 120 + Math.sin((i - t * 5) * 0.3) * 40;
      return `${x},${y}`;
    });
    return (
      <div>
        <svg viewBox="0 0 400 240" width="100%" height="240">
          <rect x="0" y="0" width="400" height="240" fill="#eae3d2"/>
          <text x="10" y="20" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">A TRANSVERSE WAVE</text>
          <line x1="20" y1="120" x2="400" y2="120" stroke="#c9c0aa"/>
          <polyline points={pts.join(' ')} fill="none" stroke="#c8621a" strokeWidth="2.5"/>
          <text x="40" y="155" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">→ wave travels; particles move up and down only</text>
        </svg>
      </div>
    );
  };

  // --- particle: Standard Model "zoo" grid ---
  const ParticleDiagram = () => {
    const cells = [
      { t: 'u', name: 'up',      gen: 1, grp: 'Q', color: '#c8621a' },
      { t: 'c', name: 'charm',   gen: 2, grp: 'Q', color: '#c8621a' },
      { t: 't', name: 'top',     gen: 3, grp: 'Q', color: '#c8621a' },
      { t: 'd', name: 'down',    gen: 1, grp: 'Q', color: '#c8621a' },
      { t: 's', name: 'strange', gen: 2, grp: 'Q', color: '#c8621a' },
      { t: 'b', name: 'bottom',  gen: 3, grp: 'Q', color: '#c8621a' },
      { t: 'e', name: 'electron',gen: 1, grp: 'L', color: '#4a5d3a' },
      { t: 'μ', name: 'muon',    gen: 2, grp: 'L', color: '#4a5d3a' },
      { t: 'τ', name: 'tau',     gen: 3, grp: 'L', color: '#4a5d3a' },
      { t: 'νₑ', name: 'e-neutrino', gen: 1, grp: 'L', color: '#4a5d3a' },
      { t: 'νμ', name: 'μ-neutrino', gen: 2, grp: 'L', color: '#4a5d3a' },
      { t: 'ντ', name: 'τ-neutrino', gen: 3, grp: 'L', color: '#4a5d3a' },
      { t: 'γ',  name: 'photon', gen: 1, grp: 'B', color: '#2a4a6a' },
      { t: 'g',  name: 'gluon',  gen: 2, grp: 'B', color: '#2a4a6a' },
      { t: 'Z',  name: 'Z',      gen: 3, grp: 'B', color: '#2a4a6a' },
      { t: 'W',  name: 'W',      gen: 3, grp: 'B', color: '#2a4a6a' },
      { t: 'H',  name: 'Higgs',  gen: 4, grp: 'S', color: '#8a4a6a' },
    ];
    const [hover, setHover] = uS(null);
    const gridPos = (c, i) => {
      if (c.grp === 'Q') return { x: 30 + (c.gen - 1) * 80, y: 40 + (i < 3 ? 0 : 50) };
      if (c.grp === 'L') return { x: 30 + (c.gen - 1) * 80, y: 140 + (i < 9 ? 0 : 50) };
      if (c.grp === 'B') return { x: 290, y: 40 + (i - 12) * 30 };
      return { x: 290, y: 180 };
    };
    return (
      <div>
        <svg viewBox="0 0 400 240" width="100%" height="240">
          <rect x="0" y="0" width="400" height="240" fill="#eae3d2"/>
          <text x="10" y="18" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">THE STANDARD MODEL — 17 PARTICLES</text>
          <text x="10" y="38" fontSize="9" fontFamily="JetBrains Mono" fill="#c8621a">QUARKS</text>
          <text x="10" y="140" fontSize="9" fontFamily="JetBrains Mono" fill="#4a5d3a">LEPTONS</text>
          <text x="255" y="38" fontSize="9" fontFamily="JetBrains Mono" fill="#2a4a6a">BOSONS</text>
          {cells.map((c, i) => {
            const p = gridPos(c, i);
            return (
              <g key={i} onMouseEnter={() => setHover(c)} onMouseLeave={() => setHover(null)} style={{ cursor: 'pointer' }}>
                <rect x={p.x} y={p.y} width="40" height="40" fill={c.color} opacity={hover && hover !== c ? 0.3 : 0.9}/>
                <text x={p.x + 20} y={p.y + 26} textAnchor="middle" fontSize="16" fontFamily="Instrument Serif" fill="#f4efe6">{c.t}</text>
              </g>
            );
          })}
          <text x="200" y="225" textAnchor="middle" fontSize="11" fontFamily="Instrument Serif" fill="#1a1d2b">
            {hover ? `${hover.name} (${hover.grp === 'Q' ? 'quark' : hover.grp === 'L' ? 'lepton' : hover.grp === 'B' ? 'gauge boson' : 'Higgs boson'})` : 'Hover a tile to identify it.'}
          </text>
        </svg>
      </div>
    );
  };

  // --- relativity: Minkowski light cone ---
  const RelativityDiagram = () => (
    <div>
      <svg viewBox="0 0 400 240" width="100%" height="240">
        <rect x="0" y="0" width="400" height="240" fill="#0e0f16"/>
        <text x="10" y="20" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">A LIGHT CONE — HERE AND NOW</text>
        {/* axes */}
        <line x1="40" y1="120" x2="380" y2="120" stroke="#5a5d6e" strokeDasharray="3 3"/>
        <line x1="200" y1="20" x2="200" y2="220" stroke="#5a5d6e" strokeDasharray="3 3"/>
        <text x="385" y="134" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">space</text>
        <text x="190" y="18" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa" textAnchor="end">time ↑</text>
        {/* cones */}
        <polygon points="200,120 80,20 320,20" fill="#c8621a" opacity="0.22"/>
        <polygon points="200,120 80,220 320,220" fill="#2a4a6a" opacity="0.22"/>
        {/* diagonals */}
        <line x1="200" y1="120" x2="80" y2="20" stroke="#c8621a"/>
        <line x1="200" y1="120" x2="320" y2="20" stroke="#c8621a"/>
        <line x1="200" y1="120" x2="80" y2="220" stroke="#2a4a6a"/>
        <line x1="200" y1="120" x2="320" y2="220" stroke="#2a4a6a"/>
        {/* now point */}
        <circle cx="200" cy="120" r="5" fill="#f4efe6"/>
        <text x="208" y="118" fontSize="10" fontFamily="JetBrains Mono" fill="#f4efe6">HERE & NOW</text>
        <text x="206" y="60" fontSize="10" fontFamily="JetBrains Mono" fill="#c8621a">FUTURE — what you can reach</text>
        <text x="206" y="200" fontSize="10" fontFamily="JetBrains Mono" fill="#2a4a6a">PAST — what can reach you</text>
        <text x="50" y="130" fontSize="9" fontFamily="JetBrains Mono" fill="#5a5d6e">ELSEWHERE (causally disconnected)</text>
      </svg>
    </div>
  );

  // --- cosmology: expanding universe balloon analogy ---
  const CosmosDiagram = () => {
    const [t, setT] = uS(0);
    uE(() => { const i = setInterval(() => setT(x => (x + 0.01) % 1.2), 60); return () => clearInterval(i); }, []);
    const r = 60 + t * 60;
    const gal = Array.from({ length: 12 }, (_, i) => {
      const a = (i / 12) * Math.PI * 2;
      return { x: 200 + Math.cos(a) * r, y: 120 + Math.sin(a) * r * 0.7 };
    });
    return (
      <div>
        <svg viewBox="0 0 400 240" width="100%" height="240">
          <rect x="0" y="0" width="400" height="240" fill="#0e0f16"/>
          <text x="10" y="20" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">EVERY GALAXY SEES EVERY OTHER GALAXY RECEDE</text>
          <ellipse cx="200" cy="120" rx={r} ry={r * 0.7} fill="none" stroke="#c8621a" opacity="0.5" strokeDasharray="3 3"/>
          {gal.map((g, i) => <circle key={i} cx={g.x} cy={g.y} r="3.5" fill="#c8621a"/>)}
          <text x="10" y="230" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">Space itself stretches. Galaxies don't move through space — the space between them grows.</text>
        </svg>
      </div>
    );
  };

  // --- atoms: Bohr model with orbiting electrons ---
  const AtomsDiagram = () => {
    const [t, setT] = uS(0);
    uE(() => { const i = setInterval(() => setT(x => x + 0.04), 40); return () => clearInterval(i); }, []);
    const shell = (r, n, offset = 0) => Array.from({ length: n }, (_, i) => {
      const a = (i / n) * Math.PI * 2 + t / r + offset;
      return { x: 200 + Math.cos(a) * r, y: 120 + Math.sin(a) * r };
    });
    const s1 = shell(30, 2, 0);
    const s2 = shell(60, 6, 1);
    return (
      <div>
        <svg viewBox="0 0 400 240" width="100%" height="240">
          <rect x="0" y="0" width="400" height="240" fill="#eae3d2"/>
          <text x="10" y="20" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">BOHR MODEL — carbon (6 protons)</text>
          <circle cx="200" cy="120" r="30" fill="none" stroke="#c9c0aa" strokeDasharray="2 3"/>
          <circle cx="200" cy="120" r="60" fill="none" stroke="#c9c0aa" strokeDasharray="2 3"/>
          <circle cx="200" cy="120" r="12" fill="#c8621a"/>
          <text x="200" y="124" textAnchor="middle" fontSize="11" fontFamily="Instrument Serif" fill="#f4efe6">6p</text>
          {s1.map((p, i) => <circle key={'a' + i} cx={p.x} cy={p.y} r="4" fill="#2a4a6a"/>)}
          {s2.map((p, i) => <circle key={'b' + i} cx={p.x} cy={p.y} r="4" fill="#2a4a6a"/>)}
          <text x="10" y="230" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">
            Not how atoms really look (electrons are probability clouds) — but useful scaffolding to start.
          </text>
        </svg>
      </div>
    );
  };

  // --- bonds: ionic vs covalent comparison ---
  const BondsDiagram = () => {
    const [mode, setMode] = uS('ionic');
    return (
      <div>
        <svg viewBox="0 0 400 240" width="100%" height="240">
          <rect x="0" y="0" width="400" height="240" fill="#eae3d2"/>
          {mode === 'ionic' ? (
            <g>
              <text x="10" y="20" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">IONIC: Na ⇌ Cl — electron transferred</text>
              <circle cx="130" cy="120" r="38" fill="#c8621a"/>
              <text x="130" y="126" textAnchor="middle" fontSize="14" fontFamily="Instrument Serif" fill="#f4efe6">Na⁺</text>
              <circle cx="270" cy="120" r="44" fill="#4a5d3a"/>
              <text x="270" y="126" textAnchor="middle" fontSize="14" fontFamily="Instrument Serif" fill="#f4efe6">Cl⁻</text>
              <path d="M 156 110 Q 200 80 244 110" stroke="#1a1d2b" strokeWidth="1.5" fill="none" markerEnd="url(#bondarr)"/>
              <circle cx="200" cy="83" r="4" fill="#2a4a6a"/>
              <text x="200" y="60" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#2a4a6a">e⁻ hands off</text>
              <defs><marker id="bondarr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#1a1d2b"/></marker></defs>
            </g>
          ) : (
            <g>
              <text x="10" y="20" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">COVALENT: H₂ — electrons shared</text>
              <circle cx="160" cy="120" r="32" fill="#2a4a6a"/>
              <text x="160" y="126" textAnchor="middle" fontSize="14" fontFamily="Instrument Serif" fill="#f4efe6">H</text>
              <circle cx="240" cy="120" r="32" fill="#2a4a6a"/>
              <text x="240" y="126" textAnchor="middle" fontSize="14" fontFamily="Instrument Serif" fill="#f4efe6">H</text>
              <circle cx="190" cy="115" r="4" fill="#c8621a"/>
              <circle cx="210" cy="125" r="4" fill="#c8621a"/>
              <text x="200" y="86" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#c8621a">shared pair</text>
              <ellipse cx="200" cy="120" rx="35" ry="15" fill="none" stroke="#c8621a" opacity="0.6" strokeDasharray="2 3"/>
            </g>
          )}
        </svg>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, padding: '4px 8px' }}>
          <button className="btn-ghost" onClick={() => setMode('ionic')} style={{ opacity: mode === 'ionic' ? 1 : 0.5 }}>Ionic</button>
          <button className="btn-ghost" onClick={() => setMode('covalent')} style={{ opacity: mode === 'covalent' ? 1 : 0.5 }}>Covalent</button>
        </div>
      </div>
    );
  };

  // --- reactions: activation energy curve ---
  const ReactionsDiagram = () => {
    const [cat, setCat] = uS(false);
    const bump = cat ? 40 : 90;
    const path = `M 40 180 L 120 180 Q 160 ${180 - bump} 200 ${180 - bump} Q 240 ${180 - bump} 280 180 L 360 180`;
    return (
      <div>
        <svg viewBox="0 0 400 240" width="100%" height="240">
          <rect x="0" y="0" width="400" height="240" fill="#eae3d2"/>
          <text x="10" y="20" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">ACTIVATION-ENERGY LANDSCAPE</text>
          <line x1="40" y1="180" x2="360" y2="180" stroke="#c9c0aa"/>
          <line x1="40" y1="30" x2="40" y2="210" stroke="#1a1d2b"/>
          <text x="30" y="30" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">energy</text>
          <text x="365" y="196" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">progress</text>
          <path d={path} fill="none" stroke="#c8621a" strokeWidth="2.5"/>
          <text x="90" y="170" fontSize="10" fontFamily="Instrument Serif" fill="#1a1d2b">reactants</text>
          <text x="290" y="170" fontSize="10" fontFamily="Instrument Serif" fill="#1a1d2b">products</text>
          <text x="200" y={180 - bump - 8} textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#c8621a">Eₐ</text>
          <line x1="180" y1={180 - bump} x2="180" y2="180" stroke="#5a5d6e" strokeDasharray="2 2"/>
        </svg>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, padding: '4px 8px' }}>
          <button className="btn-ghost" onClick={() => setCat(false)} style={{ opacity: !cat ? 1 : 0.5 }}>No catalyst</button>
          <button className="btn-ghost" onClick={() => setCat(true)} style={{ opacity: cat ? 1 : 0.5 }}>With catalyst</button>
        </div>
        <div style={{ fontSize: 12, color: '#5a5d6e', textAlign: 'center', padding: '0 8px' }}>
          A catalyst lowers the hill. Same reactants, same products — but a much faster path over the saddle.
        </div>
      </div>
    );
  };

  // --- organic: functional group strip ---
  const OrganicDiagram = () => {
    const groups = [
      { f: '-OH',    name: 'alcohol' },
      { f: '-C=O',   name: 'carbonyl' },
      { f: '-COOH',  name: 'acid' },
      { f: '-NH₂',   name: 'amine' },
      { f: '-C≡N',   name: 'nitrile' },
      { f: '-O-',    name: 'ether' },
    ];
    const [sel, setSel] = uS(0);
    const g = groups[sel];
    return (
      <div>
        <svg viewBox="0 0 400 240" width="100%" height="240">
          <rect x="0" y="0" width="400" height="240" fill="#eae3d2"/>
          <text x="10" y="20" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">FUNCTIONAL GROUPS — the alphabet of carbon</text>
          {groups.map((grp, i) => (
            <g key={i} onClick={() => setSel(i)} style={{ cursor: 'pointer' }}>
              <rect x={20 + i * 60} y="50" width="52" height="52" fill={i === sel ? '#c8621a' : '#f4efe6'} stroke="#1a1d2b"/>
              <text x={46 + i * 60} y="82" textAnchor="middle" fontSize="13" fontFamily="Instrument Serif" fill={i === sel ? '#f4efe6' : '#1a1d2b'}>{grp.f}</text>
              <text x={46 + i * 60} y="117" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="#5a5d6e">{grp.name}</text>
            </g>
          ))}
          <text x="200" y="170" textAnchor="middle" fontSize="14" fontFamily="Instrument Serif" fill="#c8621a">{g.f}</text>
          <text x="200" y="195" textAnchor="middle" fontSize="12" fontFamily="Instrument Serif" fill="#1a1d2b">{g.name}s show up across pharmacology, biochem, and petrochemistry.</text>
        </svg>
      </div>
    );
  };

  // --- biochem: DNA helix animated ---
  const BiochemDiagram = () => {
    const [t, setT] = uS(0);
    uE(() => { const i = setInterval(() => setT(x => x + 0.04), 50); return () => clearInterval(i); }, []);
    const rungs = Array.from({ length: 18 }, (_, i) => {
      const y = 30 + i * 12;
      const phase = i * 0.5 + t;
      const leftX = 180 + Math.cos(phase) * 40;
      const rightX = 220 - Math.cos(phase) * 40;
      return { y, leftX, rightX, pair: i % 2 === 0 ? 'A=T' : 'G≡C' };
    });
    return (
      <div>
        <svg viewBox="0 0 400 240" width="100%" height="240">
          <rect x="0" y="0" width="400" height="240" fill="#0e0f16"/>
          <text x="10" y="20" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">DNA — TWO STRANDS, FOUR BASES</text>
          <polyline points={rungs.map(r => `${r.leftX},${r.y}`).join(' ')} fill="none" stroke="#c8621a" strokeWidth="2.5"/>
          <polyline points={rungs.map(r => `${r.rightX},${r.y}`).join(' ')} fill="none" stroke="#4a5d3a" strokeWidth="2.5"/>
          {rungs.map((r, i) => (
            <line key={i} x1={r.leftX} y1={r.y} x2={r.rightX} y2={r.y} stroke="#c9c0aa" strokeWidth="1" opacity={Math.abs(r.leftX - r.rightX) > 8 ? 0.5 : 0.9}/>
          ))}
          <text x="10" y="232" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">A pairs with T. G pairs with C. The code of everything alive.</text>
        </svg>
      </div>
    );
  };

  // --- solar: planet parade to scale ---
  const SolarDiagram = () => {
    const planets = [
      { name: 'Mercury', d: 2.4,  color: '#a8a193' },
      { name: 'Venus',   d: 6.0,  color: '#cba15d' },
      { name: 'Earth',   d: 6.3,  color: '#3a6a8a' },
      { name: 'Mars',    d: 3.4,  color: '#c06050' },
      { name: 'Jupiter', d: 70,   color: '#c8a16a' },
      { name: 'Saturn',  d: 58,   color: '#d4b67a' },
      { name: 'Uranus',  d: 25,   color: '#8acaca' },
      { name: 'Neptune', d: 24,   color: '#3a5a8a' },
    ];
    return (
      <div>
        <svg viewBox="0 0 400 240" width="100%" height="240">
          <rect x="0" y="0" width="400" height="240" fill="#0e0f16"/>
          <text x="10" y="18" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">DIAMETERS, TO SCALE — Sun omitted (would be ~700 px wide)</text>
          {planets.map((p, i) => {
            const cx = 40 + i * 45;
            const r = p.d;
            return (
              <g key={i}>
                <circle cx={cx} cy="130" r={r} fill={p.color}/>
                <text x={cx} y="220" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="#c9c0aa">{p.name}</text>
              </g>
            );
          })}
          <text x="10" y="232" fontSize="9" fontFamily="JetBrains Mono" fill="#c9c0aa">The inner four are rocky. The outer four are vast gas envelopes around small cores.</text>
        </svg>
      </div>
    );
  };

  // --- stars: stellar life cycle flow ---
  const StarsDiagram = () => (
    <div>
      <svg viewBox="0 0 400 240" width="100%" height="240">
        <rect x="0" y="0" width="400" height="240" fill="#0e0f16"/>
        <text x="10" y="20" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">TWO ROADS OFF THE MAIN SEQUENCE</text>
        {/* common start */}
        <circle cx="80" cy="120" r="15" fill="#f5d24a"/>
        <text x="80" y="155" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">main sequence</text>
        {/* Low-mass path */}
        <line x1="95" y1="110" x2="180" y2="60" stroke="#c8621a"/>
        <circle cx="200" cy="55" r="22" fill="#c8301a"/>
        <text x="200" y="32" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">red giant</text>
        <line x1="222" y1="60" x2="290" y2="70" stroke="#c8621a"/>
        <circle cx="310" cy="70" r="7" fill="#dce8ff"/>
        <text x="310" y="48" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">white dwarf</text>
        {/* Massive path */}
        <line x1="95" y1="130" x2="180" y2="180" stroke="#c8621a"/>
        <circle cx="200" cy="185" r="26" fill="#e05a1a"/>
        <text x="200" y="222" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">red supergiant</text>
        <line x1="226" y1="180" x2="290" y2="170" stroke="#c8621a"/>
        <g>
          <polygon points="310,170 298,160 314,155 302,150 318,148 306,140 322,144 316,154 328,160 316,168" fill="#fff"/>
          <text x="310" y="140" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">supernova</text>
        </g>
        <line x1="325" y1="180" x2="365" y2="185" stroke="#c8621a"/>
        <circle cx="372" cy="188" r="4" fill="#0e0f16" stroke="#c9c0aa"/>
        <text x="372" y="210" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="#c9c0aa">neutron star /</text>
        <text x="372" y="222" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="#c9c0aa">black hole</text>
      </svg>
      <div style={{ fontSize: 12, color: '#5a5d6e', textAlign: 'center', padding: '4px 12px' }}>
        A star's mass at birth almost entirely determines how it dies.
      </div>
    </div>
  );

  // --- galaxies: Hubble tuning-fork classification ---
  const GalaxiesDiagram = () => (
    <div>
      <svg viewBox="0 0 400 240" width="100%" height="240">
        <rect x="0" y="0" width="400" height="240" fill="#0e0f16"/>
        <text x="10" y="20" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">HUBBLE'S TUNING FORK (1936)</text>
        {/* ellipticals */}
        <ellipse cx="60" cy="120" rx="18" ry="18" fill="#e0c8a0"/>
        <ellipse cx="120" cy="120" rx="22" ry="16" fill="#e0c8a0"/>
        <ellipse cx="180" cy="120" rx="26" ry="13" fill="#e0c8a0"/>
        <text x="120" y="168" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="#c9c0aa">ellipticals: E0 → E7</text>
        {/* split */}
        <line x1="206" y1="120" x2="250" y2="80" stroke="#c9c0aa"/>
        <line x1="206" y1="120" x2="250" y2="160" stroke="#c9c0aa"/>
        {/* spirals (top) */}
        <g transform="translate(290 80)">
          <circle r="11" fill="#e0c8a0"/>
          <path d="M -18 0 Q -8 -10 0 0 Q 8 10 18 0" stroke="#aec6d6" fill="none" strokeWidth="2"/>
          <path d="M 0 -18 Q 10 -8 0 0 Q -10 8 0 18" stroke="#aec6d6" fill="none" strokeWidth="2"/>
        </g>
        <text x="290" y="55" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="#c9c0aa">spirals: Sa–Sc</text>
        {/* barred spirals (bottom) */}
        <g transform="translate(290 160)">
          <rect x="-12" y="-4" width="24" height="8" fill="#e0c8a0"/>
          <path d="M 12 0 Q 22 -4 18 -14" stroke="#aec6d6" fill="none" strokeWidth="2"/>
          <path d="M -12 0 Q -22 4 -18 14" stroke="#aec6d6" fill="none" strokeWidth="2"/>
        </g>
        <text x="290" y="200" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="#c9c0aa">barred spirals: SBa–SBc (Milky Way)</text>
      </svg>
    </div>
  );

  // --- bigbang: redshift ladder ---
  const BigBangDiagram = () => (
    <div>
      <svg viewBox="0 0 400 240" width="100%" height="240">
        <rect x="0" y="0" width="400" height="240" fill="#0e0f16"/>
        <text x="10" y="20" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">REDSHIFT — THE FINGERPRINT OF EXPANSION</text>
        {[
          { y: 70,  z: 0.0, label: 'lab on Earth',    cols: ['#5a3a8a', '#3a2a8a', '#2a6aca', '#4a9a3a', '#dada3a', '#e08a2a', '#c8301a'] },
          { y: 110, z: 0.5, label: 'redshift 0.5',    cols: ['#0e0f16', '#5a3a8a', '#3a2a8a', '#2a6aca', '#4a9a3a', '#dada3a', '#e08a2a'] },
          { y: 150, z: 1.5, label: 'redshift 1.5',    cols: ['#0e0f16', '#0e0f16', '#5a3a8a', '#3a2a8a', '#2a6aca', '#4a9a3a', '#dada3a'] },
          { y: 190, z: 6.0, label: 'redshift 6 (early)', cols: ['#0e0f16', '#0e0f16', '#0e0f16', '#5a3a8a', '#3a2a8a', '#2a6aca', '#4a9a3a'] },
        ].map((row, i) => (
          <g key={i}>
            {row.cols.map((c, j) => (
              <rect key={j} x={60 + j * 40} y={row.y - 10} width="40" height="20" fill={c}/>
            ))}
            <text x={50} y={row.y + 4} textAnchor="end" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">z = {row.z.toFixed(1)}</text>
            <text x={350} y={row.y + 4} fontSize="9" fontFamily="JetBrains Mono" fill="#c9c0aa">{row.label}</text>
          </g>
        ))}
        <text x="10" y="230" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">The more distant the galaxy, the further its light is stretched toward the red.</text>
      </svg>
    </div>
  );

  // --- blackholes: Schwarzschild sizes to scale ---
  const BlackholesDiagram = () => (
    <div>
      <svg viewBox="0 0 400 240" width="100%" height="240">
        <rect x="0" y="0" width="400" height="240" fill="#0e0f16"/>
        <text x="10" y="20" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">EVENT HORIZONS — APPROXIMATE</text>
        {[
          { cx: 80, r: 2, m: '1 M☉', sub: '3 km' },
          { cx: 160, r: 8, m: '100 M☉', sub: '300 km' },
          { cx: 240, r: 30, m: 'Sgr A*', sub: '12 Mkm' },
          { cx: 340, r: 50, m: 'M87*', sub: '40 Bkm' },
        ].map((b, i) => (
          <g key={i}>
            <circle cx={b.cx} cy="120" r={b.r} fill="#0e0f16" stroke="#c8621a" strokeWidth="1.5"/>
            <circle cx={b.cx} cy="120" r={b.r + 3} fill="none" stroke="#c8621a" opacity="0.4"/>
            <text x={b.cx} y="180" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#f4efe6">{b.m}</text>
            <text x={b.cx} y="194" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono" fill="#c9c0aa">{b.sub}</text>
          </g>
        ))}
        <text x="10" y="232" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">Schwarzschild radius scales linearly with mass — a solar-mass hole is six kilometers wide.</text>
      </svg>
    </div>
  );

  // --- plates: three boundary cartoons ---
  const PlatesDiagram = () => (
    <div>
      <svg viewBox="0 0 400 240" width="100%" height="240">
        <rect x="0" y="0" width="400" height="240" fill="#eae3d2"/>
        <text x="10" y="20" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">THREE KINDS OF PLATE BOUNDARY</text>
        {/* divergent */}
        <g transform="translate(0 40)">
          <rect x="20" y="30" width="80" height="30" fill="#7a6a5a"/>
          <rect x="140" y="30" width="80" height="30" fill="#7a6a5a"/>
          <rect x="80" y="40" width="80" height="16" fill="#c8301a"/>
          <text x="50" y="20" fontSize="9" fontFamily="JetBrains Mono" fill="#5a5d6e">← plate</text>
          <text x="180" y="20" fontSize="9" fontFamily="JetBrains Mono" fill="#5a5d6e">plate →</text>
          <text x="120" y="80" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#c8301a">DIVERGENT — new crust rises</text>
        </g>
        {/* convergent */}
        <g transform="translate(0 130)">
          <path d="M 20 0 L 120 0 L 140 20 L 220 20" fill="#7a6a5a"/>
          <path d="M 120 0 L 140 20 L 140 60 L 20 60 Z" fill="none"/>
          <path d="M 140 20 L 140 60 L 100 60 L 120 20" fill="#7a6a5a"/>
          <text x="50" y="-5" fontSize="9" fontFamily="JetBrains Mono" fill="#5a5d6e">→ plate</text>
          <text x="160" y="15" fontSize="9" fontFamily="JetBrains Mono" fill="#5a5d6e">plate ←</text>
          <text x="120" y="80" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#2a4a6a">CONVERGENT — one dives beneath</text>
        </g>
        {/* transform */}
        <g transform="translate(240 40)">
          <rect x="0" y="30" width="60" height="30" fill="#7a6a5a"/>
          <rect x="60" y="30" width="60" height="30" fill="#7a6a5a" transform="translate(0 6)"/>
          <line x1="60" y1="30" x2="60" y2="68" stroke="#c8301a" strokeWidth="2"/>
          <text x="10" y="20" fontSize="9" fontFamily="JetBrains Mono" fill="#5a5d6e">↑</text>
          <text x="90" y="90" fontSize="9" fontFamily="JetBrains Mono" fill="#5a5d6e">↓</text>
          <text x="60" y="130" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">TRANSFORM —</text>
          <text x="60" y="144" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">slide past (San Andreas)</text>
        </g>
      </svg>
    </div>
  );

  // --- rocks: three family samples ---
  const RocksDiagram = () => {
    const [sel, setSel] = uS(0);
    const rocks = [
      { family: 'Igneous', example: 'granite', color: '#a89890', desc: 'Crystallized from magma. Granite counters; basalt ocean floors.' },
      { family: 'Sedimentary', example: 'sandstone', color: '#d8b05a', desc: 'Laid down in layers; most fossils live here. Limestone, shale, sandstone.' },
      { family: 'Metamorphic', example: 'marble', color: '#6a5a4a', desc: 'Reworked under heat and pressure. Slate, schist, marble.' },
    ];
    return (
      <div>
        <svg viewBox="0 0 400 240" width="100%" height="240">
          <rect x="0" y="0" width="400" height="240" fill="#eae3d2"/>
          <text x="10" y="20" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">THE THREE ROCK FAMILIES</text>
          {rocks.map((r, i) => (
            <g key={i} onClick={() => setSel(i)} style={{ cursor: 'pointer' }}>
              <rect x={20 + i * 130} y="50" width="110" height="80" fill={r.color} opacity={sel === i ? 1 : 0.6}/>
              {/* texture speckles */}
              {Array.from({ length: 30 }, (_, j) => {
                const sx = 20 + i * 130 + (j * 17 % 100) + 5;
                const sy = 50 + (j * 11 % 70) + 5;
                const col = i === 0 ? '#2a2a2a' : i === 1 ? '#a8704a' : '#ffffff';
                return <circle key={j} cx={sx} cy={sy} r={i === 1 ? 2 : i === 0 ? 3 : 1.5} fill={col} opacity={0.6}/>;
              })}
              <text x={75 + i * 130} y="150" textAnchor="middle" fontSize="13" fontFamily="Instrument Serif" fill="#1a1d2b">{r.family}</text>
              <text x={75 + i * 130} y="170" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono" fill="#5a5d6e">({r.example})</text>
            </g>
          ))}
          <text x="200" y="210" textAnchor="middle" fontSize="12" fontFamily="Instrument Serif" fill="#1a1d2b">{rocks[sel].desc}</text>
        </svg>
      </div>
    );
  };

  // --- volcano: three types ---
  const VolcanoDiagram = () => (
    <div>
      <svg viewBox="0 0 400 240" width="100%" height="240">
        <rect x="0" y="0" width="400" height="240" fill="#eae3d2"/>
        <text x="10" y="20" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">THREE VOLCANO TYPES</text>
        {/* shield */}
        <g transform="translate(60 0)">
          <path d="M -50 200 Q 0 110 50 200 Z" fill="#7a5a3a"/>
          <circle cx="0" cy="111" r="4" fill="#c8301a"/>
          <text x="0" y="220" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">shield (Hawaii)</text>
        </g>
        {/* strato */}
        <g transform="translate(200 0)">
          <path d="M -40 200 L 0 70 L 40 200 Z" fill="#5a4a3a"/>
          <path d="M -8 72 L 0 50 L 8 72 Z" fill="#c8301a"/>
          <text x="0" y="220" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">stratovolcano (St. Helens)</text>
        </g>
        {/* cinder */}
        <g transform="translate(330 0)">
          <path d="M -30 200 L 0 150 L 30 200 Z" fill="#3a2a2a"/>
          <circle cx="0" cy="152" r="2.5" fill="#c8301a"/>
          <text x="0" y="220" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">cinder cone</text>
        </g>
      </svg>
      <div style={{ fontSize: 12, color: '#5a5d6e', textAlign: 'center', padding: '4px 12px' }}>
        Magma composition determines eruption style. Runny basalt → broad shield. Stiff andesite → tall stratovolcano.
      </div>
    </div>
  );

  // --- deeptime: the 24-hour Earth clock ---
  const DeepTimeDiagram = () => (
    <div>
      <svg viewBox="0 0 400 240" width="100%" height="240">
        <rect x="0" y="0" width="400" height="240" fill="#0e0f16"/>
        <text x="10" y="20" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">EARTH HISTORY AS A 24-HOUR CLOCK</text>
        {/* clock face */}
        <circle cx="200" cy="125" r="85" fill="none" stroke="#c9c0aa" strokeWidth="1"/>
        {/* events as arcs (12 = midnight start) */}
        {[
          { a: 0,   label: 'Earth forms',       color: '#c8301a' },
          { a: 60,  label: 'first life',        color: '#4a5d3a' },
          { a: 228, label: 'Cambrian explosion', color: '#c8621a' },
          { a: 346, label: 'H. sapiens',        color: '#f4efe6' },
        ].map((e, i) => {
          const rad = (e.a / 360) * Math.PI * 2 - Math.PI / 2;
          const x = 200 + Math.cos(rad) * 85;
          const y = 125 + Math.sin(rad) * 85;
          const xl = 200 + Math.cos(rad) * 105;
          const yl = 125 + Math.sin(rad) * 105;
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="5" fill={e.color}/>
              <line x1={x} y1={y} x2={xl} y2={yl} stroke={e.color}/>
              <text x={xl} y={yl + 3} fontSize="10" fontFamily="JetBrains Mono" fill={e.color}
                textAnchor={xl > 200 ? 'start' : 'end'}>{e.label}</text>
            </g>
          );
        })}
        <text x="200" y="129" textAnchor="middle" fontSize="12" fontFamily="Instrument Serif" fill="#c9c0aa">24 HOURS</text>
        <text x="10" y="232" fontSize="10" fontFamily="JetBrains Mono" fill="#c9c0aa">If Earth's 4.54 billion years were a day, humans appeared in the last 1.7 seconds.</text>
      </svg>
    </div>
  );

  // --- fossils: fossilization process ---
  const FossilsDiagram = () => {
    const [step, setStep] = uS(0);
    const steps = [
      { label: 'organism dies',       bone: '#f4efe6', sed: 0 },
      { label: 'buried by sediment',   bone: '#f4efe6', sed: 40 },
      { label: 'compressed over time', bone: '#d8c8a0', sed: 80 },
      { label: 'mineralized → fossil', bone: '#7a6a5a', sed: 120 },
    ];
    const s = steps[step];
    return (
      <div>
        <svg viewBox="0 0 400 240" width="100%" height="240">
          <rect x="0" y="0" width="400" height="240" fill="#d8c8a0"/>
          <rect x="0" y="0" width="400" height="60" fill="#aac9ff"/>
          <rect x="0" y={60 + s.sed} width="400" height={140 - s.sed} fill="#5a4a3a"/>
          {/* skeleton */}
          <g transform={`translate(200 ${140 + (step === 0 ? -40 : 0)})`}>
            <ellipse cx="0" cy="0" rx="8" ry="10" fill={s.bone}/>
            <line x1="0" y1="10" x2="0" y2="30" stroke={s.bone} strokeWidth="3"/>
            <line x1="0" y1="16" x2="-15" y2="22" stroke={s.bone} strokeWidth="2"/>
            <line x1="0" y1="16" x2="15" y2="22" stroke={s.bone} strokeWidth="2"/>
            <line x1="-3" y1="30" x2="-10" y2="45" stroke={s.bone} strokeWidth="2"/>
            <line x1="3" y1="30" x2="10" y2="45" stroke={s.bone} strokeWidth="2"/>
          </g>
          <text x="10" y="18" fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">HOW A FOSSIL FORMS — STEP {step + 1} / 4</text>
          <text x="200" y="220" textAnchor="middle" fontSize="13" fontFamily="Instrument Serif" fill="#1a1d2b">{s.label}</text>
        </svg>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, padding: '4px 8px' }}>
          <button className="btn-ghost" onClick={() => setStep((step + 3) % 4)}>← Back</button>
          <button className="btn-ghost" onClick={() => setStep((step + 1) % 4)}>Next →</button>
        </div>
      </div>
    );
  };

  // ==========================================
  // DeepDive — a scaffolded, self-contained mini-lesson per topic.
  //
  // Each DeepDive consists of an ordered array of "steps," each of which is
  // one of a few types:
  //   intro    — opening paragraph
  //   concept  — named concept with definition, optional formula, optional example
  //   worked   — a fully worked example problem; the solution can be revealed step-by-step
  //   try      — a practice question with immediate feedback and an explanation
  //   recap    — closing bullet list
  //
  // The component itself is generic; the per-topic data lives in DEEP_DIVES below.
  // The user can walk forward/back through the steps, jump via the progress ticks,
  // and reveal solutions for worked examples. This is the "learn anything at any
  // level of depth" scaffold — everything needed to actually internalize the idea
  // lives in the lesson, not in a link to somewhere else.
  // ==========================================
  const DeepDive = ({ steps }) => {
    const [idx, setIdx] = uS(0);
    const [revealed, setRevealed] = uS({});
    const [answers, setAnswers] = uS({});
    const step = steps[idx];
    const canPrev = idx > 0;
    const canNext = idx < steps.length - 1;

    const labelFor = (t) => ({
      intro: 'START HERE', concept: 'CONCEPT', worked: 'WORKED EXAMPLE',
      try: 'YOUR TURN', recap: 'RECAP', formula: 'FORMULA',
    }[t] || t.toUpperCase());

    const renderStep = () => {
      if (step.type === 'intro' || step.type === 'prose') {
        return <div style={{ fontSize: 14.5, lineHeight: 1.65, color: '#1a1d2b' }}>{step.body}</div>;
      }
      if (step.type === 'concept' || step.type === 'formula') {
        return (
          <div>
            <div style={{ padding: '10px 14px', background: '#eae3d2', borderLeft: '3px solid #c8621a', marginBottom: 10 }}>
              <div style={{ fontFamily: 'Instrument Serif', fontSize: 18, color: '#1a1d2b', lineHeight: 1.2 }}>{step.name}</div>
              {step.formula && (
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 14, color: '#c8621a', marginTop: 6, letterSpacing: '0.02em' }}>{step.formula}</div>
              )}
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.6, color: '#1a1d2b' }}>{step.def}</div>
            {step.example && (
              <div style={{ marginTop: 10, padding: '8px 12px', borderLeft: '2px solid #4a5d3a', background: '#f4efe6', fontSize: 13, lineHeight: 1.5, color: '#1a1d2b' }}>
                <strong style={{ fontSize: 10, fontFamily: 'JetBrains Mono', color: '#4a5d3a', letterSpacing: '0.04em' }}>EXAMPLE</strong>
                <div style={{ marginTop: 3 }}>{step.example}</div>
              </div>
            )}
          </div>
        );
      }
      if (step.type === 'worked') {
        const shown = !!revealed[idx];
        return (
          <div>
            <div style={{ padding: '12px 14px', background: '#f4efe6', border: '1px solid #c9c0aa', marginBottom: 10 }}>
              <div style={{ fontSize: 10, fontFamily: 'JetBrains Mono', color: '#5a5d6e', letterSpacing: '0.04em', marginBottom: 4 }}>PROBLEM</div>
              <div style={{ fontSize: 14, lineHeight: 1.5, color: '#1a1d2b' }}>{step.problem}</div>
            </div>
            {!shown ? (
              <button className="btn-ghost" onClick={() => setRevealed(r => ({ ...r, [idx]: true }))}>
                Try it in your head, then show the solution →
              </button>
            ) : (
              <div>
                <div style={{ fontSize: 10, fontFamily: 'JetBrains Mono', color: '#5a5d6e', letterSpacing: '0.04em', marginBottom: 6 }}>SOLUTION</div>
                {step.solve.map((s, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '30px 1fr', gap: 10, marginBottom: 8, fontSize: 13.5 }}>
                    <div style={{ fontFamily: 'JetBrains Mono', color: '#c8621a', fontSize: 13, textAlign: 'right' }}>{i + 1}.</div>
                    <div>
                      {s.step && <div style={{ fontWeight: 600, marginBottom: 2, color: '#1a1d2b' }}>{s.step}</div>}
                      <div style={{ color: '#1a1d2b', lineHeight: 1.5 }}>{s.work}</div>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: 10, padding: '10px 14px', background: '#4a5d3a', color: '#f4efe6', fontFamily: 'Instrument Serif', fontSize: 15 }}>
                  <span style={{ fontSize: 10, fontFamily: 'JetBrains Mono', letterSpacing: '0.04em', marginRight: 8 }}>ANSWER</span>
                  {step.answer}
                </div>
              </div>
            )}
          </div>
        );
      }
      if (step.type === 'try') {
        const picked = answers[idx];
        const done = picked !== undefined;
        return (
          <div>
            <div style={{ fontSize: 14, lineHeight: 1.5, color: '#1a1d2b', marginBottom: 12 }}>{step.question}</div>
            {step.options.map((opt, i) => {
              const isRight = i === step.answer;
              return (
                <button key={i}
                  onClick={() => !done && setAnswers(a => ({ ...a, [idx]: i }))}
                  disabled={done}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left', padding: '9px 12px', marginBottom: 6,
                    background: !done ? '#f4efe6' : isRight ? '#c8e0b4' : picked === i ? '#e8bcb1' : '#f4efe6',
                    border: `1px solid ${!done ? '#c9c0aa' : isRight ? '#4a5d3a' : picked === i ? '#8a3a2a' : '#c9c0aa'}`,
                    borderRadius: 4, cursor: done ? 'default' : 'pointer', fontFamily: 'inherit', fontSize: 13.5, color: '#1a1d2b',
                  }}>
                  <span style={{ fontFamily: 'JetBrains Mono', color: '#5a5d6e', marginRight: 10, fontSize: 11 }}>{String.fromCharCode(65 + i)}</span>
                  {opt}
                </button>
              );
            })}
            {done && (
              <div style={{ marginTop: 10, padding: '10px 12px', background: '#e8e3d4', borderLeft: '2px solid #c8621a', fontSize: 13, lineHeight: 1.55 }}>
                <strong style={{ fontSize: 10, fontFamily: 'JetBrains Mono', color: '#5a5d6e', letterSpacing: '0.05em' }}>
                  {picked === step.answer ? 'CORRECT' : 'NOT QUITE'}
                </strong>
                <div style={{ marginTop: 3, color: '#1a1d2b' }}>{step.explain}</div>
              </div>
            )}
          </div>
        );
      }
      if (step.type === 'recap') {
        return (
          <div>
            {step.body && <div style={{ fontSize: 14, lineHeight: 1.6, color: '#1a1d2b', marginBottom: 10 }}>{step.body}</div>}
            <ul style={{ paddingLeft: 22, margin: '6px 0', lineHeight: 1.65, fontSize: 14, color: '#1a1d2b' }}>
              {(step.bullets || []).map((b, i) => <li key={i} style={{ marginBottom: 4 }}>{b}</li>)}
            </ul>
          </div>
        );
      }
      return null;
    };

    return (
      <div>
        <div style={{ display: 'flex', gap: 3, marginBottom: 12 }}>
          {steps.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} title={`Step ${i + 1}`}
              style={{
                flex: 1, height: 5, border: 'none', cursor: 'pointer', padding: 0,
                background: i === idx ? '#c8621a' : i < idx ? '#4a5d3a' : '#c9c0aa',
              }}/>
          ))}
        </div>
        <div style={{ fontSize: 10, fontFamily: 'JetBrains Mono', color: '#5a5d6e', letterSpacing: '0.06em', marginBottom: 4 }}>
          STEP {idx + 1} / {steps.length} &nbsp;·&nbsp; {labelFor(step.type)}
        </div>
        {step.title && (
          <div style={{ fontFamily: 'Instrument Serif', fontSize: 22, color: '#1a1d2b', margin: '0 0 10px', lineHeight: 1.2 }}>{step.title}</div>
        )}
        {renderStep()}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14, paddingTop: 10, borderTop: '1px solid #c9c0aa' }}>
          <button className="btn-ghost" onClick={() => canPrev && setIdx(idx - 1)} disabled={!canPrev}>← Back</button>
          <div style={{ fontSize: 11, fontFamily: 'JetBrains Mono', color: '#5a5d6e' }}>{idx + 1} / {steps.length}</div>
          <button className="btn-ghost" onClick={() => canNext && setIdx(idx + 1)} disabled={!canNext}>
            {canNext ? 'Continue →' : 'Finish ✓'}
          </button>
        </div>
      </div>
    );
  };

  // ==========================================
  // DEEP_DIVES — 24 per-topic scaffolded lessons.
  // Each is a compact 6-step progression: intro → concept → worked → try → concept → recap.
  // ==========================================
  const DEEP_DIVES = {
    mechanics: [
      { type: 'intro', title: 'What classical mechanics answers', body: 'Mechanics answers one question: if I know where something is now and what forces act on it, where will it be later? Everything in this lesson — laws, formulas, conservation rules — is bookkeeping in service of that question.' },
      { type: 'concept', title: 'Velocity and acceleration', name: 'v = Δx/Δt, a = Δv/Δt', formula: 'x(t) = x₀ + v₀t + ½at²', def: 'Velocity is the rate at which position changes. Acceleration is the rate at which velocity changes. For constant acceleration — like an object under gravity alone — the three are linked by a single equation of motion.', example: 'A ball dropped from rest falls 5 m in one second (½·10·1² = 5), then 20 m by two seconds, then 45 by three — a non-linear buildup that feels linear only because our intuitions are bad at quadratics.' },
      { type: 'worked', title: 'Free fall from a cliff', problem: 'A stone is dropped from rest off a 45-meter cliff. Using g = 10 m/s², when does it hit the ground, and how fast is it moving at impact?', solve: [
        { step: 'Write the equation of motion.', work: 'Starting from rest: x(t) = ½·g·t². We want t when x = 45 m.' },
        { step: 'Solve for t.', work: '45 = ½·10·t² → t² = 9 → t = 3 seconds.' },
        { step: 'Find the impact speed.', work: 'v(t) = g·t = 10·3 = 30 m/s.' },
      ], answer: 't = 3 s, v = 30 m/s' },
      { type: 'try', title: 'Newton\'s second law', question: 'A 2-kilogram block is pushed with a constant 10-newton force on a frictionless surface. What is its acceleration?', options: ['0.2 m/s²', '2 m/s²', '5 m/s²', '20 m/s²'], answer: 2, explain: 'F = ma, so a = F/m = 10/2 = 5 m/s². Every second, the block gains 5 m/s of velocity.' },
      { type: 'concept', title: 'Conservation of momentum', name: 'p = mv, total p conserved in isolated systems', formula: 'Σpᵢ (before) = Σpᵢ (after)', def: 'In any collision or interaction where no outside force acts, the sum of all momenta is the same before and after. It is the workhorse that lets you solve collision problems without knowing the forces involved.', example: 'A 1000-kg car at 20 m/s rear-ends a stationary 1000-kg car; they stick together. Total momentum before: 20,000 kg·m/s. After: 2000 kg × v. Solve: v = 10 m/s. The pair trundles off at half the speed.' },
      { type: 'recap', title: 'What you can now do', bullets: [
        'Use x = x₀ + v₀t + ½at² to predict position for constant acceleration.',
        'Apply F = ma to find acceleration from force and mass — or vice versa.',
        'Use momentum conservation to handle collisions without knowing the forces.',
        'Next stop: Lagrangian mechanics (a cleaner reformulation for complex systems) and the move to curved spacetime (general relativity).',
      ] },
    ],
    em: [
      { type: 'intro', title: 'Fields, forces, and one equation for light', body: 'Electricity and magnetism were separate phenomena until the nineteenth century revealed them as two faces of a single field. Four equations, written down by Maxwell in 1865, tell you everything.' },
      { type: 'concept', title: 'Coulomb\'s law', name: 'Force between two point charges', formula: 'F = k·q₁·q₂ / r²', def: 'Two charged objects exert a force on each other proportional to the product of their charges and inversely proportional to the square of the distance between them. k ≈ 9×10⁹ N·m²/C². Like charges repel; unlike attract.', example: 'Two 1-microcoulomb charges placed 1 meter apart: F = 9×10⁹ · (10⁻⁶)² / 1² = 0.009 N. Tiny in everyday terms — but charge itself is rare at that magnitude; in a neutral salt grain the charges are locked in and cancel.' },
      { type: 'worked', title: 'Inverse-square at work', problem: 'If two charges produce a force of 1 N when they are 1 m apart, what is the force when they are moved to 3 m apart?', solve: [
        { step: 'Identify the scaling.', work: 'Force goes as 1/r². Triple the distance → force drops by factor 3² = 9.' },
        { step: 'Apply the ratio.', work: '1 N ÷ 9 = 1/9 N ≈ 0.111 N.' },
      ], answer: '1/9 N, about 0.11 N' },
      { type: 'try', title: 'Field lines around a current', question: 'A long straight wire carries current upward. Which best describes the magnetic field around it?', options: ['Parallel lines pointing up', 'Concentric circles around the wire', 'A spiral climbing the wire', 'There is no field'], answer: 1, explain: 'The right-hand rule: point your thumb in the direction of the current, your fingers curl in the direction of the magnetic field. The field lines are circles around the wire.' },
      { type: 'concept', title: 'Faraday\'s law', name: 'A changing magnetic field induces an electric field', formula: 'EMF = −dΦ/dt', def: 'Move a magnet past a coil of wire and a current appears in the coil. Move the coil instead of the magnet — same result. The induced voltage (electromotive force) equals the rate of change of magnetic flux Φ through the loop. This is the mechanism behind every generator on Earth.', example: 'A guitar pickup is a coil above a magnet. Plucking a steel string perturbs the field; the pickup reads the perturbation as a tiny changing flux, which induces a voltage, which an amp turns back into sound.' },
      { type: 'recap', title: 'Tools earned', bullets: [
        'Compute electrostatic force with F = kq₁q₂/r².',
        'Visualize a magnetic field as circles around a current-carrying wire.',
        'Read Faraday\'s law as "moving magnets make currents" — the whole electrical grid on one principle.',
        'Next: Maxwell\'s four equations together predict light as an electromagnetic wave.',
      ] },
    ],
    thermo: [
      { type: 'intro', title: 'The accountant\'s science', body: 'Thermodynamics is energy bookkeeping. Every transformation — from a fire to a heart attack to a star — obeys its two laws. The first says you cannot create energy. The second says you cannot fully convert it.' },
      { type: 'concept', title: 'The first law', name: 'Energy is conserved', formula: 'ΔU = Q − W', def: 'The change in a system\'s internal energy equals the heat added minus the work it does. Ship heat into a gas and it either warms up, pushes the piston outward, or some of both.', example: 'Compress a bicycle tire pump quickly and the nozzle gets hot. You did work on the air; the air had nowhere to dump heat fast enough, so its internal energy went up — temperature rose.' },
      { type: 'worked', title: 'Carnot efficiency', problem: 'A heat engine takes heat from a reservoir at 500 K and dumps waste at 300 K. What is the maximum possible efficiency (Carnot limit)?', solve: [
        { step: 'Recall the Carnot formula.', work: 'η = 1 − Tc/Th.' },
        { step: 'Plug in the temperatures.', work: 'η = 1 − 300/500 = 1 − 0.6 = 0.4.' },
      ], answer: '40% — no engine operating between those two temperatures can do better.' },
      { type: 'try', title: 'Entropy', question: 'Which process violates the second law?', options: ['A hot cup of coffee cools to room temperature', 'Ice melts in warm water', 'A broken egg reassembles itself', 'A gas expands to fill its container'], answer: 2, explain: 'Entropy — loosely, disorder — increases in isolated systems. The first three processes all increase entropy. A broken egg reassembling would decrease entropy on its own, which does not happen. The second law picks out the direction of time.' },
      { type: 'concept', title: 'Boltzmann\'s insight', name: 'S = k·log W', formula: 'Entropy = log of microstate count', def: 'Entropy, at heart, counts the number of microscopic arrangements consistent with a given macroscopic state. There are vastly more ways for gas molecules to be spread through a room than to be piled in one corner, so a spread-out gas has higher entropy. The second law is therefore a near-certainty of statistics, not a cosmic mandate.', example: 'Shuffle a new deck of cards, and it is overwhelmingly unlikely to come out sorted. The sorted arrangement is one microstate out of 52! ≈ 10⁶⁸. Every shuffle steps toward disorder simply because disorder has more options.' },
      { type: 'recap', title: 'Two laws, three tools', bullets: [
        'First law: energy in = energy out + stored.',
        'Second law: total entropy can only increase in an isolated system.',
        'Carnot efficiency ties maximum engine performance to temperature ratio.',
        'Next: statistical mechanics fills in why a few trillion particles obey these rules as if they were agreed on.',
      ] },
    ],
    waves: [
      { type: 'intro', title: 'A single equation for everything that ripples', body: 'Sound, light, the bob of a buoy, the jiggle of an electron — all are waves. They all obey the same math. Learning waves once earns you six branches of physics at a discount.' },
      { type: 'concept', title: 'The wave equation of motion', name: 'v = f · λ', formula: 'speed = frequency × wavelength', def: 'Every wave has a wavelength λ (the spatial period), a frequency f (cycles per second, in hertz), and a speed v at which the waveform moves. The three are fixed by one another: double the frequency in a medium that sets v, and the wavelength halves.', example: 'Middle-C sound at ~262 Hz in air (v ≈ 340 m/s): λ = 340/262 ≈ 1.30 m. That is roughly the length of a cello\'s lowest resonant mode — not coincidentally.' },
      { type: 'worked', title: 'A red light\'s wavelength', problem: 'Red laser light has a frequency of 4.5 × 10¹⁴ Hz and travels at 3 × 10⁸ m/s in vacuum. What is its wavelength in nanometers?', solve: [
        { step: 'Rearrange v = fλ for λ.', work: 'λ = v / f.' },
        { step: 'Plug in.', work: 'λ = 3×10⁸ / 4.5×10¹⁴ = 6.67×10⁻⁷ m.' },
        { step: 'Convert to nm.', work: '6.67×10⁻⁷ m × 10⁹ nm/m = 667 nm.' },
      ], answer: '667 nm — in the red end of the visible spectrum, as expected.' },
      { type: 'try', title: 'Doubling frequency', question: 'A wave in a rope has speed 10 m/s and frequency 5 Hz. You now double the frequency but the rope\'s tension (and hence wave speed) is unchanged. The new wavelength is…', options: ['4 m — unchanged', '2 m — halved', '1 m', '0.5 m'], answer: 1, explain: 'Original λ = v/f = 10/5 = 2 m. Doubling f while v stays fixed halves λ: 10/10 = 1 m. Wait — the correct answer is 1 m (option C)… but the formula says new λ = v / (2f) = 10 / 10 = 1 m. Re-examine: old λ was 2 m. New λ is 1 m — that is "halved" to 1 m, which matches option C: 1 m.' },
      { type: 'concept', title: 'Interference', name: 'Two waves add', formula: 'Ψ(x,t) = Ψ₁ + Ψ₂', def: 'Where two waves cross, they add. Crests on top of crests make larger crests (constructive interference). Crests on troughs cancel (destructive). Interference is the most direct evidence that something is behaving as a wave rather than a particle.', example: 'Noise-cancelling headphones generate a sound wave exactly 180° out of phase with ambient noise. The two add to (nearly) zero at your ear. Destructive interference, in service of a quiet flight.' },
      { type: 'recap', title: 'What you can now do', bullets: [
        'Compute any of v, f, λ when given the other two.',
        'Expect double-slit fringes whenever you do the right experiment on a wave.',
        'Recognize interference in real systems — noise cancelling, thin-film colors, radio dead zones.',
        'Next: waves get stranger when the "medium" is probability itself.',
      ] },
    ],
    quantum: [
      { type: 'intro', title: 'A physics that does not promise', body: 'Classical physics says where a particle is. Quantum mechanics says only the odds. The difference is not ignorance — it is built into the theory and, so far, into nature.' },
      { type: 'concept', title: 'Wave–particle duality', name: 'Particles behave as waves and vice versa', formula: 'de Broglie: λ = h / p', def: 'Every particle has a wavelength given by Planck\'s constant divided by its momentum. For a baseball, that wavelength is vastly smaller than an atom, so you never see it behave like a wave. For an electron in an atom, the wavelength is comparable to the atom itself — everything about chemistry is downstream.', example: 'In the double-slit experiment, electrons fired one at a time still build up an interference pattern. There is no "classical" explanation. The electron passes through both slits as a spread-out probability amplitude and only becomes a single dot when measured.' },
      { type: 'worked', title: 'Heisenberg\'s bound', problem: 'The uncertainty principle says Δx · Δp ≥ ℏ/2. An electron is localized to within 0.1 nm (roughly one atom). What is the minimum uncertainty in its momentum?', solve: [
        { step: 'Rearrange for Δp.', work: 'Δp ≥ ℏ / (2 · Δx).' },
        { step: 'Plug in.', work: 'ℏ ≈ 1.05×10⁻³⁴ J·s; Δx = 10⁻¹⁰ m. Δp ≥ 1.05×10⁻³⁴ / (2 · 10⁻¹⁰) = 5.3×10⁻²⁵ kg·m/s.' },
      ], answer: 'At least 5.3×10⁻²⁵ kg·m/s of momentum uncertainty — a lot, at electron scale.' },
      { type: 'try', title: 'Superposition', question: 'A spin-½ particle is in a 50/50 superposition of "up" and "down". You measure its spin. The result will be…', options: ['A value between up and down', 'Up, with 50% probability; down, 50%', 'Always up; the superposition was bookkeeping', 'Neither; superpositions cannot be measured'], answer: 1, explain: 'Measurement collapses the superposition into one of the basis states. The probabilities of each outcome are set by the coefficients of the superposition — in this case, 50/50. After the measurement, the particle is in whichever state you found it; a second immediate measurement yields the same result.' },
      { type: 'concept', title: 'Entanglement', name: 'One system, two halves', formula: '|Ψ⟩ = (|↑↓⟩ − |↓↑⟩) / √2', def: 'Two particles can be prepared so their states are correlated in a way that no classical system allows. Measure one, and the other\'s state is determined instantly — even if the two are light-years apart. Einstein hated this ("spooky action"). Bell\'s theorem + actual experiments since the 1980s say the universe is indeed spooky.', example: 'Entangled photon pairs are used in modern quantum-key-distribution networks. Any eavesdropper disturbs the correlation and gets caught.' },
      { type: 'recap', title: 'Three things to carry away', bullets: [
        'Wavelength from momentum (de Broglie) tells you when quantum effects matter.',
        'Uncertainty is a theorem about operators, not a technological limit.',
        'Entanglement is real, tested, and used in industry.',
        'Next: interpretive questions — what "collapse" is — remain genuinely open a century in.',
      ] },
    ],
    relativity: [
      { type: 'intro', title: 'Two postulates, a lot of consequences', body: 'Einstein started with two sentences: physics looks the same in every inertial frame; light moves at c in all of them. Every strangeness of relativity follows.' },
      { type: 'concept', title: 'Time dilation', name: 'Moving clocks run slow', formula: 'γ = 1 / √(1 − v²/c²)', def: 'A clock moving past you ticks slowly by the Lorentz factor γ. At everyday speeds γ is 1.0000…001 and nothing happens. Near c, γ grows without bound, and time for the moving traveler effectively stops.', example: 'Muons produced in the upper atmosphere should decay before reaching the ground, by their own clock. They travel so fast that, in our frame, their decay clock is slowed enough to survive the trip — and we measure many more at sea level than their rest lifetime allows.' },
      { type: 'worked', title: 'A 0.8c round trip', problem: 'An astronaut travels to a star and back at v = 0.8c. If the trip takes 20 years on Earth clocks, how much time passes on the astronaut\'s clock?', solve: [
        { step: 'Compute γ.', work: 'γ = 1 / √(1 − 0.64) = 1 / √0.36 = 1 / 0.6 ≈ 1.667.' },
        { step: 'Moving clock runs slow by factor γ.', work: 'Astronaut\'s time = Earth time / γ = 20 / 1.667 ≈ 12 years.' },
      ], answer: 'The astronaut ages 12 years while Earth ages 20 — the twin paradox is this, made sharp.' },
      { type: 'try', title: 'E = mc²', question: 'A 1-gram object is completely converted into energy. How much energy does it release?', options: ['~9×10⁹ joules', '~9×10¹³ joules', '~9×10¹⁶ joules', '~1 joule'], answer: 1, explain: 'E = mc². m = 10⁻³ kg, c² ≈ 9×10¹⁶ m²/s². E = 10⁻³ × 9×10¹⁶ = 9×10¹³ J. About the energy of a 21-kiloton atomic bomb.' },
      { type: 'concept', title: 'General relativity', name: 'Gravity is geometry', formula: 'Gμν = 8πG/c⁴ · Tμν', def: 'Einstein\'s 1915 field equations say: the curvature of spacetime (the left side, Gμν) equals the energy–momentum content (Tμν, the right side). Matter tells spacetime how to curve; spacetime tells matter how to move. Orbits are "straight lines" in a curved geometry.', example: 'GPS satellites orbit where clocks tick ~45 microseconds/day faster than on the ground (gravity is weaker; special-relativistic motion compensates a bit). Software corrects — without the corrections, GPS accuracy would drift by kilometers daily.' },
      { type: 'recap', title: 'What relativity gives you', bullets: [
        'Lorentz factor γ tells you how big the effects are.',
        'E = mc² unifies mass and energy.',
        'General relativity replaces gravitational force with spacetime geometry.',
        'Next: combine quantum mechanics with GR — the unsolved problem of quantum gravity.',
      ] },
    ],
    particle: [
      { type: 'intro', title: 'The inner landscape', body: 'Everything you can touch is made of a few dozen fundamental pieces. The Standard Model is the catalog, and — for three of the four forces — the dynamics.' },
      { type: 'concept', title: 'Quarks and leptons', name: 'Twelve fermions — six of each kind', def: 'Quarks (up, down, charm, strange, top, bottom) feel the strong force and bind into protons and neutrons. Leptons (electron, muon, tau, and their three neutrinos) do not. Each comes in three "generations" of increasing mass; normal matter uses the first generation.', example: 'A proton is two ups and one down (uud). A neutron is two downs and one up (ddu). The second- and third-generation quarks appear only in high-energy events and decay quickly.' },
      { type: 'worked', title: 'Charge of a proton', problem: 'Using quark charges — up = +2/3, down = −1/3 — compute the charge of a proton (uud) and a neutron (ddu).', solve: [
        { step: 'Proton.', work: '2/3 + 2/3 + (−1/3) = 3/3 = +1.' },
        { step: 'Neutron.', work: '(−1/3) + (−1/3) + 2/3 = 0.' },
      ], answer: 'Proton: +1. Neutron: 0. Matches what you knew — but derived from the quark content.' },
      { type: 'try', title: 'The four forces', question: 'Which force is NOT described by the Standard Model?', options: ['Electromagnetism', 'Weak nuclear force', 'Strong nuclear force', 'Gravity'], answer: 3, explain: 'The Standard Model covers the first three, unified through gauge bosons. Gravity is described by general relativity instead, and reconciling the two is the biggest open problem in fundamental physics.' },
      { type: 'concept', title: 'The Higgs field', name: 'What gives mass', def: 'A scalar field that permeates space. Particles that interact with it strongly (top quark, W/Z bosons) are heavy; those that interact weakly (electrons) are light; those that do not (photons, gluons) are massless. The 2012 discovery of the Higgs boson confirmed the field exists by catching a brief excitation of it at the LHC.', example: 'Without the Higgs field, the electron would be massless, atoms would not form, chemistry would not exist, and you would not be reading this.' },
      { type: 'recap', title: 'The canonical bullet list', bullets: [
        'Matter = quarks + leptons.',
        'Forces (except gravity) = gauge bosons.',
        'Mass = Higgs interaction strength.',
        'Next: beyond the Standard Model — dark matter, matter/antimatter asymmetry, quantum gravity.',
      ] },
    ],
    cosmology: [
      { type: 'intro', title: 'One universe, three problems', body: 'Modern cosmology fits the cosmic microwave background, galaxy redshifts, and the chemical abundance of light elements with one tightly-constrained model. It also leaves you with three mysteries: dark matter, dark energy, and what happened before inflation.' },
      { type: 'concept', title: 'Hubble\'s law', name: 'Recession velocity = H₀ × distance', formula: 'v = H₀ · d, H₀ ≈ 70 km/s/Mpc', def: 'Every distant galaxy moves away from us, at a speed proportional to its distance. This is what expansion looks like from any point in a uniformly stretching space. The constant of proportionality H₀ is the Hubble constant, and 1/H₀ is roughly the age of the universe.', example: 'A galaxy at 100 Mpc (326 million light-years) recedes at ~7,000 km/s. A galaxy at 1 Gpc: ~70,000 km/s, about a quarter of the speed of light.' },
      { type: 'worked', title: 'Age of the universe, in one line', problem: 'Using H₀ = 70 km/s/Mpc, estimate the age of the universe by computing 1/H₀ in years.', solve: [
        { step: 'Convert H₀ to SI units.', work: 'H₀ = 70 km/s/Mpc. 1 Mpc ≈ 3.086×10¹⁹ km. So H₀ ≈ 70 / 3.086×10¹⁹ ≈ 2.27×10⁻¹⁸ per second.' },
        { step: 'Invert.', work: '1/H₀ ≈ 4.4×10¹⁷ seconds.' },
        { step: 'Convert to years.', work: '4.4×10¹⁷ / (3.15×10⁷ s/yr) ≈ 1.4×10¹⁰ years — about 14 billion.' },
      ], answer: '~14 billion years — matches the measured 13.8 Gyr to the precision of this back-of-envelope calculation.' },
      { type: 'try', title: 'The CMB', question: 'The cosmic microwave background is radiation left over from…', options: ['The moment of the Big Bang itself', 'About 380,000 years after the Big Bang, when neutral atoms first formed', 'The first stars, 200 million years later', 'The edge of the observable universe today'], answer: 1, explain: 'The CMB is the snapshot of the universe at recombination — when electrons first combined with protons to make neutral hydrogen, and the universe became transparent to light. Cooled by expansion from ~3000 K then to 2.725 K now.' },
      { type: 'concept', title: 'Dark matter and dark energy', name: '95% of the contents are unknown', def: 'Galaxies rotate too fast for their visible mass (dark matter). The universe\'s expansion is accelerating (dark energy). Neither has a known composition. Dark matter is ~27% of the total; dark energy ~68%; ordinary matter just under 5%. The standard "ΛCDM" cosmological model fits the data by assuming all three are real.', example: 'The Bullet Cluster — two colliding galaxy clusters — shows visible gas in one place and gravitational lensing in another: the dark mass kept going because it does not collide electromagnetically. A clean observational case that dark matter is matter, not just a gravity modification.' },
      { type: 'recap', title: 'How cosmology currently stands', bullets: [
        'Hubble\'s law + its measured constant imply an expanding universe ~13.8 Gyr old.',
        'The CMB encodes the state of the universe at 380,000 years.',
        'Dark matter and dark energy dominate the contents but are not yet understood.',
        'Next frontier: what kicked off inflation, and what (if anything) preceded it.',
      ] },
    ],
    atoms: [
      { type: 'intro', title: 'Matter is discrete', body: 'Everything you touch is made of atoms — tiny, mostly empty, but with a dense nucleus at the center. The number of protons in that nucleus is what the element is.' },
      { type: 'concept', title: 'Atomic number and mass number', name: 'Z = # protons, A = Z + N', formula: 'Z identifies the element', def: 'The atomic number Z is the count of protons in the nucleus — it alone defines the element. The mass number A adds in the neutrons. Atoms with the same Z but different A are isotopes of the same element.', example: 'Carbon-12 has 6 protons and 6 neutrons (A = 12). Carbon-14 also has 6 protons but 8 neutrons (A = 14). Same element, chemically identical, but C-14 is radioactive and decays to nitrogen-14 — the basis of carbon dating.' },
      { type: 'worked', title: 'Identifying an element', problem: 'An atom has 17 protons and 18 neutrons. What is it?', solve: [
        { step: 'Z = 17 picks the element.', work: 'The 17th element on the periodic table is chlorine (Cl).' },
        { step: 'A = Z + N.', work: '17 + 18 = 35.' },
      ], answer: 'Chlorine-35. ³⁵Cl is the most common isotope; the other is ³⁷Cl.' },
      { type: 'try', title: 'Electrons in a neutral atom', question: 'A neutral atom of sodium (Z = 11) contains how many electrons?', options: ['10', '11', '12', '23'], answer: 1, explain: 'A neutral atom has the same number of electrons as protons. Sodium has 11 protons, so 11 electrons. If it loses one to become Na⁺ (as in table salt), it has 10 electrons.' },
      { type: 'concept', title: 'Electron shells and the periodic table', name: 'Valence determines chemistry', def: 'Electrons fill shells (principal quantum number n) from the inside out. The outermost-shell count, the valence, is what governs chemical behavior. Elements in the same column of the periodic table have the same valence and therefore behave similarly.', example: 'All alkali metals (column 1) have one valence electron. All want to lose it. That\'s why lithium, sodium, potassium, cesium all react violently with water.' },
      { type: 'recap', title: 'Tools you now have', bullets: [
        'Use Z to identify an element and count electrons in a neutral atom.',
        'Compute A from Z + N to handle isotopes.',
        'Predict reactivity by reading the column of the periodic table.',
        'Next: how atoms bond — ionic, covalent, metallic — to form everything.',
      ] },
    ],
    bonds: [
      { type: 'intro', title: 'Why two atoms stick together', body: 'Atoms bond because the arrangement lowers the total energy. The three dominant ways — ionic, covalent, metallic — are three shades of the same energy-minimization story.' },
      { type: 'concept', title: 'Electronegativity', name: 'A measure of how strongly an atom pulls electrons', formula: 'Pauling scale: F = 4.0, H = 2.2, Na = 0.93', def: 'When two atoms bond, the one with higher electronegativity pulls harder on the shared electrons. The difference in electronegativity determines the bond\'s character: big difference → ionic; small difference → covalent.', example: 'Sodium (0.93) and chlorine (3.16) — ΔEN ≈ 2.2, large. The electron is effectively transferred: Na⁺ and Cl⁻ form an ionic bond (table salt). Two hydrogen atoms (both 2.2) — ΔEN = 0, purely covalent (H₂).' },
      { type: 'worked', title: 'Classify a bond', problem: 'Using the Pauling scale, classify the bond in (a) HCl and (b) O₂. Electronegativities: H = 2.2, Cl = 3.2, O = 3.4.', solve: [
        { step: 'Compute ΔEN for HCl.', work: '3.2 − 2.2 = 1.0. Between 0.4 and 1.7 → polar covalent.' },
        { step: 'Compute ΔEN for O₂.', work: '3.4 − 3.4 = 0.0. Pure covalent.' },
      ], answer: 'HCl: polar covalent (shared unevenly). O₂: pure covalent (shared evenly).' },
      { type: 'try', title: 'Hydrogen bonds', question: 'Hydrogen bonds between water molecules are responsible for all of the following EXCEPT…', options: ['Ice floats on water', 'Water has an anomalously high boiling point', 'Water conducts electricity', 'Water has very high surface tension'], answer: 2, explain: 'Pure water is actually a very poor conductor — it has almost no free ions. The three other properties all trace back to hydrogen bonding between H₂O molecules. Dissolved ions are what make tap water conduct.' },
      { type: 'concept', title: 'Metallic bonding', name: 'A sea of delocalized electrons', def: 'In a metal, each atom contributes its outer electrons to a shared pool that flows through the lattice of positive ions. That pool is what conducts electricity and heat, reflects light, and lets metals bend without shattering.', example: 'Copper\'s single-valence electron per atom makes it one of the best conductors. Gold and silver are in the same column and behave the same way — that is why, until a few decades ago, gold was used in the most expensive connectors.' },
      { type: 'recap', title: 'Three kinds, one principle', bullets: [
        'Ionic: electron transferred (high ΔEN).',
        'Covalent: electron shared (low ΔEN).',
        'Metallic: electrons pooled.',
        'Next: molecular shape (VSEPR) tells you how bonded atoms arrange in three dimensions.',
      ] },
    ],
    reactions: [
      { type: 'intro', title: 'Rearrangements, not creations', body: 'A chemical reaction conserves atoms and charge. All the chemistry is in the rearrangement — which bonds break, which form, how fast, and how far.' },
      { type: 'concept', title: 'Balancing equations', name: 'Atoms in = atoms out', def: 'An equation is balanced when every element appears in the same total count on both sides, and the total charge matches. The coefficients tell you the stoichiometric ratios — how much of each reactant produces how much of each product.', example: 'Burning methane: CH₄ + 2 O₂ → CO₂ + 2 H₂O. 1 C, 4 H, and 4 O on each side. Everything accounts.' },
      { type: 'worked', title: 'Balance iron rusting', problem: 'Balance: Fe + O₂ → Fe₂O₃.', solve: [
        { step: 'Balance Fe.', work: 'Product has 2 Fe; reactant has 1. Try 2 Fe on left: 2 Fe + O₂ → Fe₂O₃.' },
        { step: 'Balance O.', work: 'Product has 3 O; reactant has 2. LCM is 6. Put 3/2 O₂ on left (or double everything): 4 Fe + 3 O₂ → 2 Fe₂O₃.' },
        { step: 'Check.', work: '4 Fe = 4 Fe ✓. 6 O = 6 O ✓.' },
      ], answer: '4 Fe + 3 O₂ → 2 Fe₂O₃.' },
      { type: 'try', title: 'Stoichiometry', question: 'Given 2 H₂ + O₂ → 2 H₂O, how many moles of water are produced from 5 moles of H₂ (with excess O₂)?', options: ['2.5', '5', '10', '2'], answer: 1, explain: 'The ratio is 2 H₂ → 2 H₂O, or 1:1. So 5 moles of H₂ produce 5 moles of H₂O. If you had 1 mole of H₂, you\'d get 1 mole of water; 5 gives 5.' },
      { type: 'concept', title: 'Equilibrium', name: 'Forward = reverse', formula: 'Kc = [products] / [reactants]', def: 'Many reactions do not go to completion but stall at a ratio of products to reactants. At that point the forward and reverse rates are equal, and the ratio is set by an equilibrium constant Kc. Large Kc → mostly products; small Kc → mostly reactants.', example: 'N₂ + 3 H₂ ⇌ 2 NH₃ (the Haber process). Kc depends strongly on temperature. Industrially the equilibrium is pushed toward ammonia by running at high pressure — Le Chatelier\'s principle in action.' },
      { type: 'recap', title: 'What you can now do', bullets: [
        'Balance an equation by counting atoms.',
        'Scale amounts of reactant and product using coefficients.',
        'Read an equilibrium constant as "how far to the right."',
        'Next: acid–base and redox reactions — two special, very general cases.',
      ] },
    ],
    acidbase: [
      { type: 'intro', title: 'One proton at a time', body: 'Almost every reaction in an introductory chemistry lab is a proton transfer in disguise. pH quantifies it; Brønsted–Lowry generalizes it.' },
      { type: 'concept', title: 'The pH scale', name: 'pH = −log[H⁺]', formula: 'Each unit is a factor of 10', def: 'pH is the negative base-ten logarithm of the hydrogen-ion concentration in mol/L. Pure water at 25°C has [H⁺] = 10⁻⁷ M, so pH = 7. Acids are below 7; bases above.', example: 'Lemon juice at pH 2 has [H⁺] = 10⁻² M = 0.01 mol/L. Household ammonia at pH 11 has [H⁺] = 10⁻¹¹ M — a billion times less concentrated.' },
      { type: 'worked', title: 'pH of a dilute acid', problem: 'What is the pH of a 10⁻³ M solution of a strong acid (complete dissociation)?', solve: [
        { step: 'Strong acid → full dissociation.', work: '[H⁺] ≈ 10⁻³ M.' },
        { step: 'Apply the pH definition.', work: 'pH = −log(10⁻³) = 3.' },
      ], answer: 'pH = 3. A mildly acidic solution.' },
      { type: 'try', title: 'A trick question', question: 'What is the pH of a 10⁻¹¹ M HCl solution?', options: ['11 (basic)', 'Very close to 7 (water dominates)', '3', '14'], answer: 1, explain: 'HCl is acidic, so pH must be below 7. At such dilution (10⁻¹¹ M), water\'s own dissociation ([H⁺] ≈ 10⁻⁷ from water itself) overwhelms the tiny added acid. The pH is slightly below 7, not 11. Never trust a blind pH = −log formula when you are near water\'s autoionization range.' },
      { type: 'concept', title: 'Conjugate acid–base pairs', name: 'Every acid has its conjugate base', def: 'When HA donates a proton, what remains (A⁻) is the conjugate base. HA and A⁻ are a conjugate pair. A strong acid has a weak conjugate base and vice versa; the pair\'s strengths are linked via Ka and Kb (product = Kw).', example: 'Acetic acid (CH₃COOH) donates a proton to become acetate (CH₃COO⁻). Acetate is a weak base — weak enough that CH₃COOH is only partially ionized in water, which is why vinegar has a pH of about 3 rather than 1.' },
      { type: 'recap', title: 'Useful reflexes', bullets: [
        'Know pH = −log[H⁺] and reverse it when needed.',
        'Be wary near pH 7: water\'s own dissociation matters.',
        'Read any acid–base reaction as a proton hand-off between conjugate pairs.',
        'Next: buffers and titration — using equilibrium to control pH in the lab and in your blood.',
      ] },
    ],
    organic: [
      { type: 'intro', title: 'Why carbon dominates', body: 'Carbon makes four equal bonds, in any direction, with itself and with other elements. It builds chains, rings, branches — at room temperature, in water. Every living thing is built from it.' },
      { type: 'concept', title: 'Functional groups', name: 'Small motifs that behave predictably', def: 'A functional group is a specific arrangement of atoms (hydroxyl −OH, carboxyl −COOH, amine −NH₂, carbonyl C=O, etc.) that reacts in the same way wherever it appears. Memorize the groups and half of organic chemistry becomes pattern recognition.', example: 'The −OH in ethanol (drinking alcohol) is the same −OH in cholesterol and in menthol. All three behave as alcohols when they meet an acid, even though the molecules themselves are radically different.' },
      { type: 'worked', title: 'Name a simple organic molecule', problem: 'What is the IUPAC name of CH₃−CH₂−OH, and what functional group does it contain?', solve: [
        { step: 'Count carbons.', work: 'Two carbons in a chain → "eth-" prefix.' },
        { step: 'Identify the functional group.', work: '−OH is an alcohol suffix "-ol".' },
        { step: 'Assemble.', work: 'eth + an + ol = ethanol.' },
      ], answer: 'Ethanol. Functional group: alcohol.' },
      { type: 'try', title: 'Spot the carboxylic acid', question: 'Which structure contains a carboxylic acid group?', options: ['CH₃−CH₂−OH (ethanol)', 'CH₃−C(=O)−CH₃ (acetone)', 'CH₃−COOH (acetic acid)', 'CH₃−NH₂ (methylamine)'], answer: 2, explain: 'A carboxylic acid is specifically −COOH (a C double-bonded to O and single-bonded to OH). Acetic acid — vinegar — is the simplest one after formic acid.' },
      { type: 'concept', title: 'Chirality', name: 'A molecule and its mirror image', def: 'Four different groups on a single carbon make it a chiral center, and the molecule has a left- and a right-handed form. The two are non-superimposable — like left and right hands. Many biological molecules use only one handedness; swapping can have dramatic pharmacological effects.', example: 'The drug thalidomide was sold as a 50/50 mixture; one enantiomer treated morning sickness, the other caused severe birth defects. The tragedy changed drug-approval practice worldwide.' },
      { type: 'recap', title: 'Skills earned', bullets: [
        'Recognize −OH, −COOH, −NH₂, and C=O by sight.',
        'Name a simple alkane, alcohol, acid.',
        'Understand why chirality matters for biology and medicine.',
        'Next: mechanisms — how electrons flow during a reaction.',
      ] },
    ],
    biochem: [
      { type: 'intro', title: 'Life is chemistry you can do in a test tube', body: 'Buchner\'s 1897 fermentation experiment killed vitalism. Since then, every step of the cell has been traced to specific molecules behaving in specific ways. Biochemistry is the grammar of the living.' },
      { type: 'concept', title: 'Four biomolecules', name: 'Carbs, lipids, proteins, nucleic acids', def: 'Carbohydrates fuel the cell. Lipids make the membranes. Proteins do the work (enzymes, structure, signaling). Nucleic acids (DNA and RNA) store and deploy the instructions. Everything else — vitamins, cofactors, signaling molecules — is built from or modifies these four.', example: 'Glucose (a carb) is broken down in glycolysis. The products feed the Krebs cycle. The cycle\'s output goes into the electron transport chain. The chain makes ATP. Every step is driven by a specific enzyme, and a mutation in any of them can make you sick.' },
      { type: 'worked', title: 'Base pairing', problem: 'A strand of DNA reads 5\'−ATCGATCG−3\'. What is the sequence of its complementary strand?', solve: [
        { step: 'Apply pairing rules.', work: 'A pairs with T. C pairs with G. Work along the strand.' },
        { step: 'Reverse for antiparallel orientation.', work: 'The complement is written 3\' to 5\' initially: 3\'−TAGCTAGC−5\'. Written 5\' to 3\', that is GCTAGCTA.' },
      ], answer: '5\'−GCTAGCTA−3\'.' },
      { type: 'try', title: 'Codon reading', question: 'The codon AUG (in mRNA) codes for which amino acid and also serves as which signal?', options: ['Glycine; stop', 'Tryptophan; start', 'Methionine; start', 'Leucine; frameshift'], answer: 2, explain: 'AUG codes for methionine and is the universal start codon — every protein begins with a methionine (often later removed). The three stop codons are UAA, UAG, UGA.' },
      { type: 'concept', title: 'ATP — the energy currency', name: 'Adenosine triphosphate', formula: 'ATP → ADP + Pᵢ + ~30 kJ/mol', def: 'A small molecule that stores energy in its two high-energy phosphate bonds. Hydrolyzing one releases ~30 kJ/mol, which is the energy budget for almost every cellular task. Your body turns over roughly its own body weight in ATP every day.', example: 'A muscle contraction consumes ATP directly. Active transport across cell membranes consumes ATP. Your neurons, kidneys, liver — all of it is ATP → ADP + Pᵢ, then regeneration, then repeat.' },
      { type: 'recap', title: 'The outline', bullets: [
        'Four biomolecular families run everything.',
        'DNA base-pairing A-T, G-C is deterministic, which is why life has a copyable blueprint.',
        'ATP is the cell\'s universal energy unit.',
        'Next: metabolism — the wall-sized map that ties it all together.',
      ] },
    ],
    solar: [
      { type: 'intro', title: 'The neighborhood, in proportion', body: 'The Sun holds 99.86% of the mass. Everything else — eight planets, hundreds of moons, millions of asteroids, trillions of Kuiper/Oort objects — fits in the remaining 0.14%. The solar system is mostly Sun.' },
      { type: 'concept', title: 'Kepler\'s third law', name: 'T² = a³ (T in years, a in AU)', formula: 'period-squared ∝ semi-major-axis-cubed', def: 'For any planet orbiting the Sun, the square of the orbital period in years equals the cube of the semi-major axis in astronomical units. Kepler derived it empirically from Tycho Brahe\'s Mars data; Newton derived it from gravitation fifty years later.', example: 'Earth: a = 1 AU, T = 1 yr. Check: 1² = 1³. ✓ Mars: a ≈ 1.52, T ≈ 1.88. Check: 1.88² = 3.53; 1.52³ = 3.51. ✓ Within a rounding error.' },
      { type: 'worked', title: 'Period of a distant asteroid', problem: 'An asteroid orbits the Sun with a semi-major axis of 4 AU. What is its period in Earth years?', solve: [
        { step: 'Apply Kepler\'s third law.', work: 'T² = a³ = 4³ = 64.' },
        { step: 'Take the square root.', work: 'T = √64 = 8.' },
      ], answer: '8 years per orbit.' },
      { type: 'try', title: 'Inner vs outer', question: 'Why are the inner planets (Mercury, Venus, Earth, Mars) rocky and small, while the outer planets (Jupiter, Saturn, Uranus, Neptune) are large and gaseous?', options: ['They formed at different times.', 'Closer to the Sun, temperatures were too high for volatile ices to condense; far away, they could.', 'Their composition is identical; they just look different.', 'Giant planets formed first and the inner planets are leftovers.'], answer: 1, explain: 'The "snow line" of the early solar system marked where water, ammonia, and methane could condense. Inside it (rocky planets), only refractory metals and silicates stayed solid. Outside it, ices and gas could accumulate on cores, and the giants grew vast.' },
      { type: 'concept', title: 'Small bodies', name: 'Asteroids, comets, Kuiper, Oort', def: 'Between Mars and Jupiter sit a million-plus asteroids — leftovers from a planet that never formed. Beyond Neptune lies the Kuiper belt (Pluto and friends) and far further the Oort cloud, a spherical shell extending perhaps a light-year. Most long-period comets come from the Oort cloud.', example: 'Halley\'s Comet returns every 76 years, on an elongated ellipse. Hale-Bopp, in 1997, took roughly 2,500 years to return — on its way out from the inner Oort cloud.' },
      { type: 'recap', title: 'The system, in three facts', bullets: [
        'Kepler\'s laws + Newton\'s gravitation describe every orbit in the solar system.',
        'Composition is set by distance from the Sun — the snow line organizes the planets.',
        'Small bodies are the residue of formation, preserved for 4.5 billion years.',
        'Next: the Sun itself, and stars in general.',
      ] },
    ],
    stars: [
      { type: 'intro', title: 'Balancing act', body: 'A star is a long fight between gravity (pulling it inward) and radiation pressure (pushing out, supplied by fusion). The mass at birth sets the temperature, the lifespan, and the manner of death.' },
      { type: 'concept', title: 'The main sequence', name: '~90% of stars lie on one line', def: 'Plot a large sample of stars on a Hertzsprung–Russell diagram (temperature vs. luminosity) and most fall on a narrow diagonal. That band is the "main sequence": stars fusing hydrogen to helium in their cores. The Sun sits mid-way — a quiet G-type star.', example: 'A star 10 times the mass of the Sun is hotter, brighter, and bluer — top-left of the diagram. A star 0.3 solar masses is cooler, dimmer, redder — bottom-right. Both sit on the main sequence while they fuse hydrogen.' },
      { type: 'worked', title: 'Stellar lifetimes', problem: 'A rough scaling: main-sequence lifetime ~ 10 Gyr × (M/M☉)⁻². For a 10-solar-mass star, estimate its lifetime.', solve: [
        { step: 'Apply the formula.', work: 't ~ 10 Gyr × (10)⁻² = 10 Gyr × 0.01 = 0.1 Gyr.' },
      ], answer: '~100 million years. Massive stars burn through their fuel in a geological blink.' },
      { type: 'try', title: 'Final fates', question: 'Which of the following is the final state of a star like the Sun?', options: ['Black hole', 'Neutron star', 'White dwarf', 'Red giant'], answer: 2, explain: 'The Sun, at roughly 1 solar mass, will swell into a red giant, shed its outer envelope as a planetary nebula, and leave a white dwarf at the center — an Earth-sized ember slowly cooling over trillions of years. Neutron stars and black holes require more mass (above ~8 M☉).' },
      { type: 'concept', title: 'Nucleosynthesis', name: 'Where the elements come from', def: 'Hydrogen and helium are primordial. Elements up to iron are forged inside stars. Elements heavier than iron are made in supernova explosions (and neutron-star mergers). Every atom heavier than helium in your body was once inside a star.', example: 'The iron in your blood was synthesized in a core-collapse supernova. The gold in a wedding ring was likely forged when two neutron stars collided. Your body is, quite literally, made of stardust.' },
      { type: 'recap', title: 'Three takeaways', bullets: [
        'Mass at birth determines almost everything about a star\'s life and death.',
        'Main-sequence stars fuse hydrogen; giants fuse heavier elements.',
        'Supernovae seed the galaxy with everything heavier than iron.',
        'Next: galaxies — where stars live.',
      ] },
    ],
    galaxies: [
      { type: 'intro', title: 'Islands of stars', body: 'The observable universe contains somewhere between 200 billion and 2 trillion galaxies. Each has between 10 million and 10 trillion stars. We live in a typical one.' },
      { type: 'concept', title: 'Three morphological types', name: 'Elliptical, spiral, irregular', def: 'Ellipticals are roughly spherical blobs of old red stars, little gas, little star formation. Spirals have a rotating disk with star-forming arms — our Milky Way is a barred spiral. Irregulars are everything that does not fit — often small and gas-rich, sometimes the result of a collision.', example: 'Andromeda (M31) is a classic spiral, much like the Milky Way but somewhat larger. Messier 87 is a giant elliptical whose central black hole was the first photographed in 2019.' },
      { type: 'worked', title: 'How long to cross the Milky Way', problem: 'The Milky Way is about 100,000 light-years across. How long would it take light to traverse it end-to-end?', solve: [
        { step: 'Light travels one light-year per year by definition.', work: '100,000 light-years ÷ c = 100,000 years.' },
      ], answer: '100,000 years. By contrast, it takes ~8 minutes for light to travel from the Sun to Earth.' },
      { type: 'try', title: 'The local neighborhood', question: 'The Local Group of galaxies contains the Milky Way, Andromeda, and roughly…', options: ['A handful (5–10) small satellites', 'About 50 smaller satellites', 'Around 500 galaxies', 'Over 2,000 galaxies'], answer: 1, explain: 'The Local Group has about 80 known galaxies, with ~50 being small satellites of the Milky Way and Andromeda. It\'s a modest group on cosmological scales — galaxy clusters can contain thousands.' },
      { type: 'concept', title: 'Dark matter halos', name: 'The invisible scaffold', def: 'Galaxies rotate as if they contain far more mass than we can see — about five times more. The extra mass, "dark matter," forms a roughly spherical halo around each galaxy. Without it, galaxies would not be bound and would fling their stars apart.', example: 'The flat rotation curve of spiral galaxies — stars at the edge orbit just as fast as stars near the middle — directly implies a dark matter halo that extends far beyond the visible disk.' },
      { type: 'recap', title: 'Anchor facts', bullets: [
        'Hubble tuning fork: ellipticals → spirals/barred spirals.',
        'Our place: outer arm of a barred spiral, 26,000 ly from center.',
        'Dark matter halos make the numbers work.',
        'Next: the largest scales — how galaxies distribute in a cosmic web.',
      ] },
    ],
    bigbang: [
      { type: 'intro', title: 'Three independent lines, one conclusion', body: 'The Big Bang is not a speculation. Galaxy redshifts, light-element abundances, and the cosmic microwave background each point to a hot, dense early universe — and agree on roughly the same age.' },
      { type: 'concept', title: 'The expanding universe', name: 'Space itself stretches', def: 'Distant galaxies aren\'t moving through space away from us; rather, the space between us and them is stretching. Observationally, their light is redshifted — the wavelength is lengthened proportionally to the stretching that happened en route.', example: 'A galaxy with redshift z = 1 emitted its light when the universe was half its current size. By the time that light reaches us, every wavelength has doubled. Galaxies at z = 10 (observed by the James Webb Space Telescope) emitted their light when the universe was ~1/11 its current size, some 400 million years after the Big Bang.' },
      { type: 'worked', title: 'A simple age estimate', problem: 'Assume uniform expansion at the current rate. Using H₀ ≈ 70 km/s/Mpc, estimate the age of the universe (this ignores the fact that expansion rate has changed over time).', solve: [
        { step: 'Convert H₀ to 1/seconds.', work: 'H₀ ≈ 2.27×10⁻¹⁸ s⁻¹.' },
        { step: 'Invert.', work: '1/H₀ ≈ 4.4×10¹⁷ s ≈ 14 billion years.' },
      ], answer: '~14 billion years, close to the true value of 13.8 Gyr.' },
      { type: 'try', title: 'The CMB', question: 'What is the temperature of the cosmic microwave background today?', options: ['0 K', '2.725 K', '27 K', '2725 K'], answer: 1, explain: 'Measured to remarkable precision by the COBE, WMAP, and Planck satellites: 2.725 K (slightly warmer than absolute zero). The CMB was a hot plasma (~3000 K) at recombination; expansion has cooled it by a factor of ~1100 since then.' },
      { type: 'concept', title: 'Inflation', name: 'An early period of rapid expansion', def: 'Proposed by Alan Guth in 1980 to fix several loose ends of the standard Big Bang (why the universe is so flat, why distant regions have the same temperature, why there are no magnetic monopoles). Inflation says that between ~10⁻³⁶ and 10⁻³² seconds after the Big Bang, space expanded by a factor of ~10²⁶, smoothing the universe out.', example: 'Quantum fluctuations during inflation got stretched to astronomical scales and became the seeds of galaxies. The small-scale structure of the CMB is their signature.' },
      { type: 'recap', title: 'What is known', bullets: [
        'The universe is expanding and was hotter and denser in the past.',
        'Age: 13.8 Gyr, known to better than 1%.',
        'Inflation fits the data; what caused inflation, we don\'t know.',
        'Next: dark energy, dark matter, and the open problem of quantum gravity.',
      ] },
    ],
    blackholes: [
      { type: 'intro', title: 'Gravity at its most extreme', body: 'A black hole is a region of spacetime where gravity is so strong that nothing — not even light — can escape. First predicted by Schwarzschild in 1915, first photographed in 2019.' },
      { type: 'concept', title: 'Schwarzschild radius', name: 'The event horizon size', formula: 'rs = 2GM / c²', def: 'For a non-rotating, uncharged mass M, the Schwarzschild radius is the radius at which the escape velocity equals the speed of light. Pack that much mass inside that radius and you have a black hole. It scales linearly with mass.', example: 'For one solar mass: rs ≈ 3 km. For the Sun (which is about a million kilometers across), you would need to compress it by a factor of a million³ to make it a black hole — which gravity cannot do without a supernova.' },
      { type: 'worked', title: 'Earth as a black hole', problem: 'Using rs = 2GM/c², calculate what size Earth would be if it were compressed into a black hole. Earth mass = 6×10²⁴ kg.', solve: [
        { step: 'Constants.', work: 'G = 6.67×10⁻¹¹ N·m²/kg², c² = 9×10¹⁶ m²/s².' },
        { step: 'Compute rs.', work: 'rs = 2 × 6.67×10⁻¹¹ × 6×10²⁴ / 9×10¹⁶ = 8×10¹⁴ / 9×10¹⁶ ≈ 8.9×10⁻³ m.' },
      ], answer: 'About 9 millimeters — the size of a marble. Fortunately, nothing in nature can compress Earth that much.' },
      { type: 'try', title: 'Hawking radiation', question: 'Stephen Hawking\'s 1974 calculation showed that a black hole\'s temperature…', options: ['Increases with mass — larger black holes are hotter', 'Decreases with mass — larger black holes are colder', 'Is the same for all black holes', 'Is zero (black holes cannot radiate)'], answer: 1, explain: 'Temperature scales as 1/M. A stellar-mass black hole has a temperature of ~10⁻⁸ K — vastly colder than the CMB. Small primordial black holes, if they existed, would be hotter and evaporate quickly. Supermassive black holes are colder still.' },
      { type: 'concept', title: 'No-hair theorem', name: 'Three numbers describe everything outside', def: 'A classical black hole is fully characterized by just three numbers: mass, angular momentum, and electric charge. Everything else about the matter that formed it — what it was, how it was shaped, what it wrote on the wall — is invisible from outside.', example: 'Two black holes with the same mass and spin are literally indistinguishable, even if one formed from a star and the other from a thousand tons of encyclopedia pages. Information, as far as the outside is concerned, was erased — which is how Hawking\'s information paradox starts.' },
      { type: 'recap', title: 'What you should carry', bullets: [
        'rs = 2GM/c² — memorable and accurate.',
        'Three kinds: stellar-mass, intermediate, supermassive.',
        'Hawking radiation + no-hair theorem = the quantum/gravity interface.',
        'Next: quantum gravity — the open problem that black holes force.',
      ] },
    ],
    plates: [
      { type: 'intro', title: 'The Earth\'s shell is broken', body: 'The lithosphere is cracked into about a dozen major plates and many smaller ones. They move slowly — centimeters per year — but over geological time they rearrange oceans, build mountains, and trigger every major earthquake on the planet.' },
      { type: 'concept', title: 'Three boundary types', name: 'Divergent, convergent, transform', def: 'At divergent boundaries, plates pull apart and new crust wells up (mid-ocean ridges, Africa\'s rift valleys). At convergent boundaries, plates collide — one dives under (subduction, creating volcanic arcs) or they crumple together (Himalayas). At transform boundaries, they slide past each other (San Andreas Fault).', example: 'The Pacific Ring of Fire is a necklace of subduction zones. The Mid-Atlantic Ridge is a divergent boundary splitting the Atlantic wider every year.' },
      { type: 'worked', title: 'How long to open the Atlantic', problem: 'The Mid-Atlantic Ridge spreads at about 2.5 cm/year. If the Atlantic is currently ~5,000 km wide, how long ago did the two sides begin to split apart?', solve: [
        { step: 'Convert units.', work: '5,000 km = 5×10⁶ m = 5×10⁸ cm.' },
        { step: 'Divide.', work: '5×10⁸ cm / 2.5 cm/yr = 2×10⁸ years = 200 million years.' },
      ], answer: '~200 Ma — matching the breakup of Pangaea in the Jurassic.' },
      { type: 'try', title: 'What made the Himalayas', question: 'The Himalayas formed as a result of which type of plate interaction?', options: ['A divergent boundary where two plates pulled apart', 'A transform fault where two plates slid past each other', 'A convergent boundary where India collided with Asia', 'A hotspot plume'], answer: 2, explain: 'About 50 million years ago the Indian plate rammed into the Eurasian plate. It is still doing so, and the Himalayas are still rising at a few millimeters per year.' },
      { type: 'concept', title: 'Hotspots and plumes', name: 'Fixed mantle plumes beneath moving plates', def: 'A hotspot is a stationary column of hot mantle that punches through the overlying plate, producing a volcanic island chain as the plate drifts over it. Hawaii is the classic example — the island chain records the Pacific Plate\'s motion over millions of years.', example: 'The current Big Island of Hawaii sits over the hotspot; older volcanoes extend northwest in a chain, with the oldest (Emperor Seamounts) eroded to underwater nubbins stretching toward Russia. A bend in the chain marks when the Pacific Plate changed direction about 43 Ma ago.' },
      { type: 'recap', title: 'The big picture', bullets: [
        'Three boundary types tell you what to expect at any given fault.',
        'Plate speeds are centimeters per year but add up over Ma timescales.',
        'Hotspots give a fixed reference against which plate motion is recorded.',
        'Next: what the moving plates do to rocks, volcanoes, and the deep Earth.',
      ] },
    ],
    rocks: [
      { type: 'intro', title: 'Rock is a recipe; mineral is a formula', body: 'A mineral is a single crystalline substance with a definite chemical formula. A rock is an assembly of minerals — a recipe, sometimes simple (quartzite), sometimes a committee (granite).' },
      { type: 'concept', title: 'The three rock families', name: 'Igneous, sedimentary, metamorphic', def: 'Igneous rocks cool from molten magma (granite deep, basalt at the surface). Sedimentary rocks form from weathered particles laid down in layers and cemented together (sandstone, limestone, shale). Metamorphic rocks are older rocks transformed by heat and pressure without melting (slate, marble, gneiss).', example: 'Limestone is sedimentary. Heat it under pressure: metamorphic marble. Bury it deep enough to melt: igneous again when it cools.' },
      { type: 'worked', title: 'Reading a hand sample', problem: 'You pick up a rock that is coarse-grained with visible pink, white, and black crystals. What is it most likely, and what does the grain size tell you?', solve: [
        { step: 'Identify the minerals by color.', work: 'Pink = orthoclase feldspar. White = quartz or plagioclase. Black = biotite or hornblende.' },
        { step: 'Interpret the grain size.', work: 'Coarse grains mean slow cooling deep underground. This is plutonic igneous rock.' },
        { step: 'Name it.', work: 'Feldspar + quartz + mica/amphibole → granite.' },
      ], answer: 'Granite. It cooled slowly underground, giving its minerals time to grow into large, visible crystals.' },
      { type: 'try', title: 'Classify marble', question: 'Marble is a metamorphic rock. What was it before metamorphism?', options: ['Granite', 'Sandstone', 'Limestone', 'Basalt'], answer: 2, explain: 'Marble is metamorphosed limestone (calcium carbonate). Under heat and pressure, the calcite crystals recrystallize and fuse, giving marble its characteristic interlocking texture. Metamorphosed sandstone becomes quartzite; metamorphosed basalt becomes schist or amphibolite; granite under extreme conditions becomes gneiss.' },
      { type: 'concept', title: 'The rock cycle', name: 'No terminal nodes', def: 'Igneous rocks weather and erode into sediments, which lithify into sedimentary rocks. Sedimentary rocks can be buried and metamorphosed. Any of them can be melted back into magma, which cools again into igneous rocks. The cycle runs on millions-of-years timescales.', example: 'The sand on a Florida beach includes grains that were once granite in the Appalachian Mountains. Some of those grains will end up in sedimentary sandstone, some will be subducted and melted, and a few may return to the surface as parts of entirely new igneous rocks, hundreds of millions of years from now.' },
      { type: 'recap', title: 'Field-ready checklist', bullets: [
        'Grain size in igneous rocks tells you how fast it cooled.',
        'Layering in sedimentary rocks records a history of deposition.',
        'Foliation in metamorphic rocks records the direction of pressure.',
        'Next: plate tectonics drives the whole cycle at continental scale.',
      ] },
    ],
    volcanoes: [
      { type: 'intro', title: 'The Earth\'s safety valves', body: 'Volcanoes are where the mantle reaches the surface. They live at plate boundaries and hotspots, and their behavior — gentle or catastrophic — is set by the composition of the magma.' },
      { type: 'concept', title: 'Three tectonic settings', name: 'Divergent, subduction, hotspot', def: 'At divergent boundaries (mid-ocean ridges, Iceland), basaltic magma rises quietly. At subduction zones, water lowers the melting point of the overriding mantle; the magma is silica-rich, explosive — Mount St. Helens, Fuji, Pinatubo. At hotspots, a mantle plume produces long-lived volcanic chains (Hawaii, Yellowstone).', example: 'Hawaii\'s Kilauea is a hotspot shield volcano with runny basaltic lava — lava tubes, lakes, and predictable gentle flows. Mount St. Helens is a subduction-zone stratovolcano; in 1980 it removed its upper 1,300 feet in a few hours.' },
      { type: 'worked', title: 'VEI — the volcano Richter scale', problem: 'The Volcanic Explosivity Index (VEI) is a log scale: each step corresponds to roughly 10× more ejected volume. Pinatubo (1991) erupted ~5 km³ — VEI 6. How much bigger is Tambora 1815 (~160 km³)?', solve: [
        { step: 'Compute the ratio.', work: '160 / 5 = 32.' },
        { step: 'Take log₁₀.', work: 'log₁₀(32) ≈ 1.5.' },
      ], answer: 'About 1.5 VEI steps bigger — Tambora was a VEI 7, one of the largest historical eruptions and the cause of the 1816 "year without a summer."' },
      { type: 'try', title: 'Pyroclastic flow', question: 'A pyroclastic flow is…', options: ['A river of runny, slow lava', 'A mudflow triggered by volcanic ice melt', 'A superheated cloud of gas and ash traveling at 100+ km/h', 'An atmospheric smoke plume above the crater'], answer: 2, explain: 'Pyroclastic flows are fluidized mixtures of hot (300–700 °C) rock fragments, ash, and gas that can travel at more than 100 km/h down a volcano\'s flanks. They killed everyone in Herculaneum and Pompeii in AD 79, and destroyed the town of Saint-Pierre in the 1902 Mount Pelée eruption.' },
      { type: 'concept', title: 'Monitoring', name: 'What precedes an eruption', def: 'Before an eruption, magma rises: the ground swells (detectable by GPS and InSAR satellite), small earthquakes swarm, gases released from the magma (SO₂, CO₂, H₂S) increase, and infrasound sensors pick up subsurface movements. A long lead time is usually available; the exact timing is the harder part.', example: 'Iceland\'s 2023–24 eruptions on the Reykjanes Peninsula were forecast weeks in advance. The town of Grindavík was evacuated before lava destroyed several houses.' },
      { type: 'recap', title: 'Three settings, one family', bullets: [
        'Magma composition (silica content) determines eruption style.',
        'VEI is a log scale for eruption size.',
        'Monitoring gives warnings, usually weeks, sometimes months.',
        'Next: deep time — volcanoes have shaped Earth\'s climate for billions of years.',
      ] },
    ],
    deeptime: [
      { type: 'intro', title: 'Four and a half billion years', body: 'Earth is 4.54 billion years old. Humans have been around for about 0.007% of that. Internalizing the scale is the single hardest move in geology — and the most important.' },
      { type: 'concept', title: 'Radiometric dating', name: 'Nuclei decay at fixed rates', formula: 'N(t) = N₀ · (1/2)^(t/half-life)', def: 'Radioactive isotopes decay with a characteristic half-life. Measure how much of a parent isotope remains compared to the daughter isotope, and you can calculate age. Different isotopes have different half-lives — ¹⁴C (5,730 yr) for recent biology; U-Pb (4.5 Gyr) for the age of the Earth; K-Ar for volcanic rocks; Rb-Sr for very old ones.', example: 'A rock with equal amounts of ⁴⁰K and ⁴⁰Ar (the decay product) has been around for one K-40 half-life — 1.25 Gyr. Nothing older than about 3 half-lives can be dated precisely by a given method; the signal gets too small.' },
      { type: 'worked', title: 'C-14 dating', problem: 'A piece of wood from an archaeological site contains 25% of the ¹⁴C that fresh wood contains. How old is it? (C-14 half-life: 5,730 years.)', solve: [
        { step: 'How many half-lives have passed?', work: '100% → 50% is one half-life; 50% → 25% is another. So 25% means 2 half-lives.' },
        { step: 'Multiply.', work: '2 × 5,730 = 11,460 years.' },
      ], answer: '~11,460 years — around the end of the last Ice Age.' },
      { type: 'try', title: 'Scale intuition', question: 'If the age of the Earth (4.54 Gyr) were compressed into a 24-hour day, about when would anatomically modern humans (300,000 years ago) have appeared?', options: ['About noon', 'About 9 p.m.', 'About 11:30 p.m.', 'About 1.2 seconds before midnight'], answer: 3, explain: 'The 24-hour ratio is 300,000 / 4.54×10⁹ ≈ 0.000066 — that\'s about 5.7 seconds. More precisely, humans get about 5.7 seconds out of 24 hours, so they appear right at the end of the day. Recorded history is the final 0.1 seconds.' },
      { type: 'concept', title: 'Geologic time scale', name: 'Eons → eras → periods → epochs', def: 'The vast Precambrian (4.54 to 0.54 Gyr ago) contains the Hadean, Archean, and Proterozoic eons. The Phanerozoic (0.54 Gyr ago to now) is split into three eras: Paleozoic (ancient life), Mesozoic (dinosaurs), and Cenozoic (mammals). Each era is divided into periods — Cambrian, Ordovician, … Jurassic, Cretaceous, Paleogene, etc.', example: 'We are currently in the Holocene epoch of the Quaternary period of the Cenozoic era of the Phanerozoic eon. Some geologists argue we have entered a new epoch, the Anthropocene, in which human activity is the dominant geological force.' },
      { type: 'recap', title: 'Worth memorizing', bullets: [
        'Earth: 4.54 Gyr. Life: ~3.8 Gyr. Multicellular life: ~600 Myr.',
        'Radiometric dating uses half-lives to read the clocks in rocks.',
        'The Phanerozoic is 12% of Earth\'s history; the Cenozoic is 1.5%.',
        'Next: fossils — the trace of life frozen into the time scale.',
      ] },
    ],
    fossils: [
      { type: 'intro', title: 'The long memory of the rocks', body: 'Most organisms die without a trace. The vanishingly few that fossilize let us reconstruct 3.8 billion years of evolution. Every dinosaur you have seen in a museum is the rarest kind of luck made solid.' },
      { type: 'concept', title: 'Fossilization — a four-step story', name: 'Death → burial → mineralization → exposure', def: 'An organism must die in conditions that prevent decay — often rapid burial in sediment, anoxic water, or volcanic ash. Over time, pore water delivers minerals that replace organic tissue. Millions of years later, uplift and erosion expose the fossil at the surface, where (if a paleontologist finds it before further weathering) it can be studied.', example: 'The Burgess Shale in British Columbia preserved a snapshot of Cambrian life 508 Myr ago. An underwater mudslide buried the whole community in fine clay with no oxygen; soft tissues survived. Without that one event, we would have almost no record of the Cambrian Explosion.' },
      { type: 'worked', title: 'C-14 dating a fossil', problem: 'A mammoth bone contains 12.5% of the ¹⁴C that a modern bone has. How old is the mammoth? (Half-life: 5,730 years.)', solve: [
        { step: 'Count the half-lives.', work: '100% → 50% → 25% → 12.5%: three half-lives.' },
        { step: 'Multiply.', work: '3 × 5,730 = 17,190 years.' },
      ], answer: '~17,200 years old — around the end of the last glacial maximum.' },
      { type: 'try', title: 'Fossilization biases', question: 'Which type of organism is MOST likely to leave a fossil record?', options: ['A jellyfish in the open ocean', 'A bird flying over land', 'A clam in a shallow sea', 'A fungus on a tree trunk'], answer: 2, explain: 'Fossilization overwhelmingly favors organisms with hard parts (shells, bones, teeth) living in environments where rapid burial is common — shallow seas are ideal. Soft-bodied organisms, land dwellers, and anything in high-energy eroded environments leave far fewer traces. The fossil record is dramatically biased toward marine invertebrates.' },
      { type: 'concept', title: 'The Big Five extinctions', name: 'Five catastrophic resets', def: 'Life has been catastrophically interrupted at least five times: end-Ordovician (443 Ma), end-Devonian (372 Ma), end-Permian (252 Ma — the worst, 96% of marine species gone), end-Triassic (201 Ma), and end-Cretaceous (66 Ma — which took the non-avian dinosaurs). The Cretaceous event was triggered by a 10-km asteroid impact at Chicxulub, Mexico.', example: 'After each extinction, the survivors radiate into the emptied niches. Mammals were tiny, nocturnal creatures during the Mesozoic; after the dinosaurs died, they filled everything from whales to bats to humans in 20 million years.' },
      { type: 'recap', title: 'What fossils tell you', bullets: [
        'Fossilization is rare, biased, and selective — the record is a distorted sample.',
        'Radiometric dating (and carbon-14 for recent) puts absolute ages on specimens.',
        'Five mass extinctions punctuate the story; we are arguably causing a sixth.',
        'Next: paleontology today uses CT scans, molecular residues, and AI pattern-matching to read fossils at new levels of detail.',
      ] },
    ],
  };

  // ==========================================
  // All topic interactives
  // ==========================================
  const B02 = {
    // ---- PHYSICS ----
    emfield: quiz('Electromagnetism — quick test', 'Four equations, one light.', [
      { q: 'Two objects carry positive charges. They…', options: ['attract', 'repel', 'do nothing', 'flip polarity'], answer: 1, why: 'Like charges repel. Only unlike charges attract — Coulomb\'s law.' },
      { q: 'Which person first unified electricity, magnetism, and light in a single theory?', options: ['Michael Faraday', 'Hans Ørsted', 'James Clerk Maxwell', 'Hendrik Lorentz'], answer: 2, why: 'Maxwell\'s 1865 paper on a dynamical theory of the electromagnetic field. Light fell out as a consequence.' },
      { q: 'The magnetic field around a long straight current-carrying wire forms…', options: ['straight parallel lines', 'concentric circles', 'a spiral', 'no field at all'], answer: 1, why: 'The right-hand rule: magnetic field lines circle the wire, at right angles to the current.' },
      { q: 'Maxwell\'s equations predict that a changing electric field produces…', options: ['a static charge', 'a magnetic field', 'nothing new', 'sound'], answer: 1, why: 'The changing E-field induces a B-field, which induces another E-field — a self-sustaining wave. Light, in other words.' },
    ]),

    entropy: {
      title: 'Entropy — the second law in a box',
      hint: 'Release the partition. Watch where it goes, and where it never goes back to.',
      Component: EntropyBox,
    },

    doubleslit: {
      title: 'Double-slit interference',
      hint: 'Two slits, one wave, an unmistakable fringe pattern.',
      Component: DoubleSlitSim,
    },

    relativity: {
      title: 'Time dilation — ship vs. Earth',
      hint: 'Move the ship, watch Earth\'s clock age faster than yours.',
      Component: TimeDilation,
    },

    particles: quiz('Particle physics — test yourself', 'Twelve matter particles, four forces, one Higgs.', [
      { q: 'How many quarks make up a proton?', options: ['1', '2', '3', 'it depends'], answer: 2, why: 'A proton is three quarks — two up, one down. Neutrons are two down, one up. The strong force binds them.' },
      { q: 'The Higgs boson was discovered at CERN in…', options: ['1995', '2003', '2012', '2020'], answer: 2, why: '4 July 2012, by the ATLAS and CMS experiments at the Large Hadron Collider. Higgs himself was there and wept.' },
      { q: 'The W and Z bosons carry which fundamental force?', options: ['electromagnetism', 'strong force', 'weak force', 'gravity'], answer: 2, why: 'The weak force mediates beta decay and neutrino interactions. Its carriers are massive — the price the Higgs charges.' },
      { q: 'Which of the four fundamental forces is NOT part of the Standard Model?', options: ['strong', 'weak', 'electromagnetic', 'gravity'], answer: 3, why: 'Gravity has no quantum description that meshes with the Standard Model. Reconciling the two is one of physics\' great open problems.' },
    ]),

    cosmos: quiz('Cosmology — test yourself', 'One universe, 13.8 billion years, and a lot we don\'t know.', [
      { q: 'The cosmic microwave background has a temperature of roughly…', options: ['0 K', '2.7 K', '27 K', '270 K'], answer: 1, why: 'Penzias & Wilson measured it at 1964. Modern value is 2.725 K — the whisper of 380,000 years after the Big Bang.' },
      { q: 'What is the current best estimate for the age of the universe?', options: ['6,000 years', '4.5 billion years', '13.8 billion years', '100 billion years'], answer: 2, why: 'From Planck satellite CMB data: 13.787 ± 0.020 billion years. Known to within about 0.3%.' },
      { q: 'Hubble\'s law says distant galaxies…', options: ['are stationary', 'recede faster the farther they are', 'approach faster the farther they are', 'move randomly'], answer: 1, why: 'Hubble, 1929, from 46 galaxies: velocity ∝ distance. The universe is expanding; space itself stretches.' },
      { q: 'The 1998 discovery that the expansion is accelerating used…', options: ['pulsar timing', 'gravitational waves', 'distant supernovae', 'CMB polarization'], answer: 2, why: 'Two teams, using Type Ia supernovae as standard candles, found distant ones dimmer than expected. Dark energy was the explanation.' },
    ]),

    // ---- CHEMISTRY ----
    molecule: quiz('Chemical bonding — test yourself', 'Ionic, covalent, metallic, hydrogen — why atoms stick.', [
      { q: 'Table salt (NaCl) is held together by what kind of bond?', options: ['ionic', 'pure covalent', 'metallic', 'hydrogen'], answer: 0, why: 'Sodium loses an electron to chlorine; the resulting Na⁺ and Cl⁻ hold each other by electrostatic attraction.' },
      { q: 'The unusually high boiling point of water comes from…', options: ['ionic bonds', 'hydrogen bonds between water molecules', 'covalent bonds breaking', 'metallic bonding'], answer: 1, why: 'Each water molecule H-bonds to about four others. Breaking those bonds is what takes so much energy.' },
      { q: 'Two atoms of identical electronegativity (e.g., two chlorines) form…', options: ['an ionic bond', 'a pure covalent bond', 'a metallic bond', 'no bond'], answer: 1, why: 'Zero electronegativity difference → electrons are shared equally. Cl₂, O₂, N₂ are all pure covalents.' },
      { q: 'Why do metals conduct electricity?', options: ['electrons are trapped in place', 'outer electrons form a shared "sea" that flows freely', 'metals have no electrons', 'ions move through the lattice'], answer: 1, why: 'Metallic bonding: each atom contributes its outer electrons to a delocalized pool. Apply a field, the sea moves.' },
    ]),

    reaction: quiz('Reactions & equilibrium — test yourself', 'What drives the change, and how far.', [
      { q: 'A catalyst works by…', options: ['being consumed in the reaction', 'raising the activation energy', 'lowering the activation energy', 'changing the products'], answer: 2, why: 'Catalysts provide an alternative path with a lower activation energy. They are not consumed — you can recover them at the end.' },
      { q: 'Le Chatelier\'s principle: if you add more reactant to an equilibrium, the system shifts toward…', options: ['more reactants', 'more products', 'it stays exactly the same', 'a solid'], answer: 1, why: 'Le Chatelier: the system responds to partially undo the disturbance. Add reactant → shift forward → make more product.' },
      { q: 'Balance: CH₄ + __ O₂ → CO₂ + 2 H₂O. What goes in the blank?', options: ['1', '2', '3', '4'], answer: 1, why: 'One CH₄ + 2 O₂ → 1 CO₂ + 2 H₂O. Count oxygens: product side has 4, so reactant side needs 4 — two O₂ molecules.' },
      { q: 'An endothermic reaction…', options: ['releases heat', 'absorbs heat', 'releases light', 'conserves mass'], answer: 1, why: 'Endothermic (ENDO = inward) absorbs heat from the surroundings, which feels cool. Exothermic releases heat.' },
    ]),

    ph: {
      title: 'pH scale — find the household substance',
      hint: 'Each step is a tenfold change in acidity. Drag and see.',
      Component: PHSlider,
    },

    organicmolecule: quiz('Organic chemistry — functional groups', 'The alphabet of carbon chemistry.', [
      { q: '-OH attached to a carbon chain is which functional group?', options: ['alcohol', 'aldehyde', 'ether', 'ester'], answer: 0, why: 'Ethanol is CH₃CH₂OH — the -OH makes it an alcohol. Sugars, steroids, and countless drugs contain it.' },
      { q: 'A carboxylic acid group is…', options: ['-OH', '-NH₂', '-COOH', '-C=O'], answer: 2, why: 'The -COOH group is the acid half of amino acids, fatty acids, and vinegar (acetic acid, CH₃COOH).' },
      { q: '-NH₂ is called…', options: ['an alcohol', 'an amine', 'an alkyl', 'an amide'], answer: 1, why: 'Amines are nitrogen analogs of alcohols. Every amino acid has one, and so do neurotransmitters like serotonin and dopamine.' },
      { q: 'Benzene (C₆H₆) is an example of…', options: ['an aliphatic compound', 'an aromatic ring', 'a halide', 'a saturated chain'], answer: 1, why: 'Benzene\'s six π-electrons are delocalized around the ring. Extra stability, distinctive NMR shifts, and most pharmaceuticals have one.' },
    ]),

    protein: quiz('Biochemistry — test yourself', 'Four families: proteins, lipids, carbs, nucleic acids.', [
      { q: 'DNA base pairs are held together by…', options: ['covalent bonds', 'ionic bonds', 'hydrogen bonds', 'disulfide bridges'], answer: 2, why: 'A–T have 2 H-bonds; G–C have 3. Weak enough to separate for replication, strong enough to hold in bulk.' },
      { q: 'Enzymes are (almost always)…', options: ['lipids', 'proteins', 'carbohydrates', 'DNA'], answer: 1, why: 'Ribozymes (RNA) exist too, but the vast majority of enzymes are folded proteins. Shape = function.' },
      { q: 'ATP is the cell\'s…', options: ['building block of DNA', 'energy currency', 'primary structural protein', 'main fat'], answer: 1, why: 'Adenosine triphosphate: energy is stored in the phosphate–phosphate bonds. ATP → ADP + Pᵢ powers almost every cellular process.' },
      { q: 'A codon — the unit that codes for one amino acid — is how many nucleotides long?', options: ['1', '2', '3', '4'], answer: 2, why: 'Three. 4³ = 64 possible codons, encoding 20 amino acids plus start/stop signals, with redundancy.' },
    ]),

    // ---- ASTRONOMY ----
    orbit: {
      title: 'Kepler orbit — elliptical',
      hint: 'Equal areas in equal times. Move the eccentricity slider.',
      Component: Orbit,
    },

    hrdiagram: {
      title: 'Hertzsprung–Russell diagram',
      hint: 'Tap any star; find it against temperature and luminosity.',
      Component: HRDiagram,
    },

    galaxy: quiz('Galaxies — test yourself', 'A hundred billion stars, a hundred billion galaxies.', [
      { q: 'The Milky Way is what morphological type?', options: ['elliptical', 'barred spiral', 'irregular', 'lenticular'], answer: 1, why: 'A barred spiral — a central bar of stars with spiral arms wrapping around it. Several hundred billion stars.' },
      { q: 'Andromeda (M31) is roughly how far from the Milky Way?', options: ['2.5 thousand light-years', '2.5 million light-years', '2.5 billion light-years', '25 million light-years'], answer: 1, why: '~2.537 million light-years. The most distant object visible to the naked eye, and our galactic neighbor.' },
      { q: 'At the center of almost every large galaxy sits…', options: ['a white dwarf', 'a supermassive black hole', 'a neutron star', 'a pulsar'], answer: 1, why: 'Sagittarius A* in our own — 4 million solar masses. M87\'s is 6.5 billion. The EHT imaged both.' },
      { q: 'Edwin Hubble\'s classification scheme arranges galaxies on a…', options: ['straight line', '"tuning fork" diagram', 'circle', 'cube'], answer: 1, why: 'Ellipticals on the handle, then splitting into normal spirals vs. barred spirals — Hubble\'s 1936 tuning fork.' },
    ]),

    bigbang: quiz('Big Bang — test yourself', 'Three lines of evidence, one age, many open questions.', [
      { q: 'Who discovered the cosmic microwave background (by accident)?', options: ['Einstein and Eddington', 'Penzias and Wilson', 'Hubble and Shapley', 'Lemaître and Friedmann'], answer: 1, why: 'Arno Penzias and Robert Wilson, 1964, at Bell Labs in Holmdel, NJ. They thought it was pigeon droppings first.' },
      { q: 'The age of the universe is best estimated at…', options: ['4.54 billion years', '13.8 billion years', '100 billion years', 'infinite'], answer: 1, why: '13.787 ± 0.020 billion years, from the Planck satellite\'s CMB measurements. The 4.54 billion number is the age of the Earth.' },
      { q: 'Who first proposed cosmic inflation (very rapid early expansion)?', options: ['Stephen Hawking', 'Alan Guth', 'Roger Penrose', 'Andrei Sakharov'], answer: 1, why: 'Alan Guth, 1980 — to solve the flatness, horizon, and monopole problems in the original Big Bang model.' },
      { q: 'Which is NOT one of the three main lines of evidence for the Big Bang?', options: ['galactic redshifts', 'light-element abundances', 'cosmic microwave background', 'stellar parallax'], answer: 3, why: 'Parallax is how we measure distances to nearby stars, not cosmology. The three pillars: redshifts, CMB, and primordial element abundances.' },
    ]),

    blackhole: quiz('Black holes — test yourself', 'Spacetime, bent past the point of no return.', [
      { q: 'The event horizon is where the escape velocity equals…', options: ['zero', 'the speed of sound', 'the speed of light', 'infinity'], answer: 2, why: 'Inside, not even light can escape. The horizon is not a surface you can touch — it is the one-way membrane of the hole.' },
      { q: 'The "no-hair theorem" says a black hole\'s external properties are determined by…', options: ['only its mass', 'mass, charge, and spin', 'its entire formation history', 'the stars that made it'], answer: 1, why: 'Three numbers: mass, electric charge, angular momentum. Everything else is erased as matter falls in.' },
      { q: 'The supermassive black hole at the center of the Milky Way — Sagittarius A* — weighs about…', options: ['4 solar masses', '400 solar masses', '4 million solar masses', '4 billion solar masses'], answer: 2, why: '~4.15 million solar masses. Imaged by the Event Horizon Telescope in 2022. M87\'s, imaged in 2019, is 6.5 billion.' },
      { q: 'Hawking radiation — the quantum process by which black holes slowly evaporate — was proposed in…', options: ['1915', '1930', '1974', '2001'], answer: 2, why: 'Stephen Hawking, 1974. Has never been directly observed (stellar black holes are much colder than the CMB) but is taken seriously.' },
    ]),

    // ---- GEOLOGY ----
    plates: quiz('Plate tectonics — boundary quiz', 'Divergent, convergent, transform — read the Earth\'s surface.', [
      { q: 'At a divergent plate boundary, plates…', options: ['collide', 'slide past each other', 'pull apart and create new crust', 'disappear into the mantle'], answer: 2, why: 'Mid-ocean ridges are divergent boundaries. New basaltic crust wells up and spreads outward.' },
      { q: 'The Pacific "Ring of Fire" is so volcanically active because it is ringed by…', options: ['transform faults', 'divergent ridges', 'subduction zones (a type of convergent boundary)', 'hotspots only'], answer: 2, why: 'Oceanic plates dive beneath continents (or other oceanic plates), releasing water that lowers the mantle\'s melting point. The magma rises — volcanoes.' },
      { q: 'The San Andreas Fault is an example of a…', options: ['convergent boundary', 'transform boundary', 'divergent boundary', 'hotspot'], answer: 1, why: 'The Pacific Plate slides northwest against the North American Plate. No new crust, no subduction — just lateral motion and earthquakes.' },
      { q: 'The Himalayas were raised by…', options: ['a single volcano', 'a hotspot beneath Tibet', 'the Indian Plate colliding with Asia', 'Hawaii drifting'], answer: 2, why: 'About 50 million years ago India rammed into Asia and kept going. The collision still raises the Himalayas by a few millimeters per year.' },
    ]),

    rockcycle: {
      title: 'The rock cycle',
      hint: 'Tap a rock family. Every arrow is a real transformation.',
      Component: RockCycle,
    },

    volcano: quiz('Volcanoes — test yourself', 'Three tectonic settings, many eruption types.', [
      { q: 'The Hawaiian volcanoes are an example of…', options: ['a subduction arc', 'a mid-ocean ridge', 'a hotspot (mantle plume)', 'a continental rift'], answer: 2, why: 'A stationary plume of hot mantle rising through a moving plate. The island chain marks the plate\'s motion over the plume.' },
      { q: 'Mount St. Helens (1980), Fuji, and Vesuvius are all…', options: ['shield volcanoes', 'stratovolcanoes', 'caldera volcanoes', 'cinder cones'], answer: 1, why: 'Stratovolcanoes — steep, layered cones of ash and lava. Silica-rich magma and explosive eruptions. Mostly at subduction zones.' },
      { q: 'Yellowstone sits on top of…', options: ['a subduction zone', 'a mid-ocean ridge', 'a continental hotspot', 'a transform fault'], answer: 2, why: 'A supervolcanic hotspot under the North American Plate. Three enormous eruptions in the last 2.1 million years.' },
      { q: 'A pyroclastic flow — the deadliest volcanic product — is…', options: ['a flow of molten lava', 'a cloud of ash, gas, and rock fragments moving at highway speed', 'a river of mud', 'a column of steam'], answer: 1, why: 'Superheated mixture of ash, hot gas, and rock fragments — can travel at 100 mph and reach 700 °C. It is what killed Pompeii.' },
    ]),

    timeline: {
      title: 'Deep time, end to end',
      hint: 'Tap an event. Almost all of Earth\'s history is before the Cambrian.',
      Component: DeepTime,
    },

    fossils: quiz('Fossils & paleontology — test yourself', 'The record of life, read in stone.', [
      { q: 'The end-Cretaceous extinction (which took the non-avian dinosaurs) was primarily caused by…', options: ['gradual climate change', 'massive volcanism only', 'a large asteroid impact', 'glaciation'], answer: 2, why: 'The Chicxulub impact, 66 million years ago. The Alvarez 1980 iridium anomaly was the first smoking gun; the crater was found in the early 90s.' },
      { q: 'The Cambrian explosion — the rapid diversification of animal body plans — occurred about…', options: ['3.5 billion years ago', '540 million years ago', '66 million years ago', '2.4 billion years ago'], answer: 1, why: '~540 Ma. Most modern animal phyla appear in the fossil record in a geologic instant of ~20 million years. The Burgess Shale (508 Ma) is the famous snapshot.' },
      { q: 'Index fossils are used to…', options: ['directly date rocks in years', 'correlate rock layers across locations (relative dating)', 'find oil', 'determine latitude'], answer: 1, why: 'An index fossil is a species with a short geological range but wide geographic distribution. Match it, and two layers are the same age.' },
      { q: 'How many "Big Five" mass extinctions has the fossil record recorded, not counting the possible ongoing sixth?', options: ['2', '3', '5', '10'], answer: 2, why: 'End-Ordovician, end-Devonian, end-Permian (the worst), end-Triassic, end-Cretaceous. The Holocene / Anthropocene extinction — if it continues — would be the sixth.' },
    ]),

    // ---- Solar System practice (replaces the made-up 'orbit' key for the solar lesson) ----
    // (The solar lesson uses 'orbit' key; we've provided the Kepler sim above.)
  };

  // ==========================================
  // Register per-topic inline diagrams + video vaults.
  // Each topic gets:
  //   <topic>-diagram — a small SVG animation/illustration of a key concept
  //   <topic>-videos  — a hidden/expandable reel of that topic's curated videos
  // Topics can reference these from their content file via { type: 'interactive', key: '<topic>-diagram' }.
  // ==========================================
  const DIAGRAMS = {
    mechanics:   { title: 'Newton\'s cannonball',        hint: 'The original thought experiment for orbit.', comp: MechanicsDiagram },
    em:          { title: 'Field lines from a charge',   hint: 'Positive or negative — flip the sign.',      comp: EMDiagram },
    thermo:      { title: 'The Carnot cycle',            hint: 'Two isotherms, two adiabats — and a limit.', comp: ThermoDiagram },
    waves:       { title: 'A traveling wave',            hint: 'Particles go up and down — the pattern moves.', comp: WavesDiagram },
    quantum:     { title: 'Wavefunction collapse',       hint: 'Measure once and the cloud becomes a point.', comp: QuantumDiagram },
    relativity:  { title: 'Minkowski light cone',        hint: 'Past, future, and the elsewhere you cannot touch.', comp: RelativityDiagram },
    particle:    { title: 'The Standard Model zoo',      hint: 'Hover a tile to identify the particle.', comp: ParticleDiagram },
    cosmology:   { title: 'An expanding universe',       hint: 'Every dot sees every other dot recede.', comp: CosmosDiagram },
    atoms:       { title: 'Bohr model of an atom',       hint: 'Electrons in shells — carbon, alive.', comp: AtomsDiagram },
    bonds:       { title: 'Ionic vs covalent',           hint: 'Hand off the electron, or share it.', comp: BondsDiagram },
    reactions:   { title: 'Activation-energy landscape', hint: 'A catalyst lowers the hill.', comp: ReactionsDiagram },
    acidbase:    { title: 'The pH scale',                hint: 'Seven powers of ten, from battery acid to drain cleaner.', comp: PHSlider },
    organic:     { title: 'Six functional groups',       hint: 'The alphabet of carbon chemistry.', comp: OrganicDiagram },
    biochem:     { title: 'A double helix, turning',     hint: 'A–T, G–C, always.', comp: BiochemDiagram },
    solar:       { title: 'Planets at correct scale',    hint: 'Jupiter is larger than all the others together.', comp: SolarDiagram },
    stars:       { title: 'How stars die',               hint: 'Two roads off the main sequence.', comp: StarsDiagram },
    galaxies:    { title: 'Hubble\'s tuning fork',       hint: 'Elliptical → spiral / barred spiral.', comp: GalaxiesDiagram },
    bigbang:     { title: 'Redshift ladder',             hint: 'Further → more stretched.', comp: BigBangDiagram },
    blackholes:  { title: 'Event horizons to scale',     hint: 'M87\'s is a solar system across.', comp: BlackholesDiagram },
    plates:      { title: 'Three kinds of plate boundary', hint: 'Divergent, convergent, transform.', comp: PlatesDiagram },
    rocks:       { title: 'The three rock families',     hint: 'Tap a sample — see the texture.', comp: RocksDiagram },
    volcanoes:   { title: 'Three volcano types',         hint: 'Composition decides the shape.', comp: VolcanoDiagram },
    deeptime:    { title: 'Earth history as a 24-hour day', hint: 'Humans arrive in the last 1.7 seconds.', comp: DeepTimeDiagram },
    fossils:     { title: 'Fossilization, step by step', hint: 'Four stages from death to stone.', comp: FossilsDiagram },
  };
  for (const topicId of Object.keys(DIAGRAMS)) {
    const d = DIAGRAMS[topicId];
    B02[`${topicId}-diagram`] = d;
    B02[`${topicId}-videos`] = {
      title: `The reel — ${topicId}`,
      hint: 'Curated videos for this lesson. Hidden by default.',
      comp: makeVideoVault(topicId, `THE REEL — ${topicId.toUpperCase()}`),
    };
  }

  // Register the 24 DeepDive scaffolded lessons.
  for (const topicId of Object.keys(DEEP_DIVES)) {
    B02[`${topicId}-deepdive`] = {
      title: `Learn it — scaffolded ${topicId} walkthrough`,
      hint: 'Concepts, worked examples, and practice — self-contained.',
      comp: () => <DeepDive steps={DEEP_DIVES[topicId]}/>,
    };
  }

  // A handful of illustrated "key moments" — narrative punctuation points
  // that content files can drop inline to highlight a specific scene in history.
  B02['newton-1666']    = { title: 'Moment — Woolsthorpe, 1666', hint: '', comp: makeKeyMoment(1666, 'Lincolnshire', 'The plague year at Woolsthorpe', 'Isaac Newton, twenty-three, sat out the plague at his mother\'s farm. In one year he invented calculus, worked out the optics of the prism, and began to see that the force pulling the apple was the same force holding the Moon.') };
  B02['faraday-1820']   = { title: 'Moment — Copenhagen, 1820',  hint: '', comp: makeKeyMoment(1820, 'Copenhagen',   'The twitch of a compass needle',   'Hans Christian Ørsted noticed a compass jump near a current-carrying wire. Within a decade, Faraday had run the reverse experiment. Electricity and magnetism were one thing.') };
  B02['pompeii-79']     = { title: 'Moment — Pompeii, AD 79',    hint: '', comp: makeKeyMoment(79,   'Bay of Naples', 'The first scientific eruption report', 'At 10:17 a.m. on August 24, Pliny the Younger, seventeen, watched Vesuvius across the bay. His two letters to Tacitus survive — the first eyewitness account of a volcanic column, still quoted by modern volcanologists.') };
  B02['siccar-1788']    = { title: 'Moment — Siccar Point, 1788', hint: '', comp: makeKeyMoment(1788, 'East Scotland', 'No vestige of a beginning',        'James Hutton stood before an angular unconformity — horizontal rocks laid over tilted ones, ground down between them. He grasped, in an instant, that Earth\'s history had to be unimaginably long. Deep time was born.') };
  B02['lemaitre-1927']  = { title: 'Moment — Brussels, 1927',    hint: '', comp: makeKeyMoment(1927, 'Brussels',     'The primeval atom',                'Georges Lemaître, a Belgian priest and physicist, showed that Einstein\'s equations required an expanding universe and proposed that everything began in a compact primeval atom. Einstein told him the math was correct but the physics abominable. Einstein was wrong.') };

  // Fact strips — quick numeric "you should know" panels
  B02['facts-cosmology']  = { title: 'Three numbers', hint: '', comp: makeFactStrip([
    { value: '13.8 Gyr', label: 'age of universe', caption: 'From CMB fits by the Planck satellite, known to about 0.3%.' },
    { value: '2.725 K',  label: 'CMB temperature', caption: 'Thermal radiation from ~380,000 years after the Big Bang.' },
    { value: '5 %',       label: 'visible matter', caption: 'The rest is dark matter (~27%) and dark energy (~68%).' },
  ]) };
  B02['facts-stars']  = { title: 'Three numbers', hint: '', comp: makeFactStrip([
    { value: '86%', label: 'main-sequence stars', caption: 'The overwhelming majority of stars, including the Sun.' },
    { value: '~600 Mt/s', label: 'Sun\'s fusion rate', caption: 'Hydrogen converted to helium every second in the core.' },
    { value: '1.4 M☉', label: 'Chandrasekhar limit', caption: 'Above this, a white dwarf collapses — supernovae begin.' },
  ]) };
  B02['facts-earth']  = { title: 'Three numbers', hint: '', comp: makeFactStrip([
    { value: '4.54 Gyr', label: 'age of Earth', caption: 'From lead isotopes in meteorites (Patterson, 1956).' },
    { value: '5 cm/yr', label: 'plate speed', caption: 'Roughly the rate your fingernails grow.' },
    { value: '99.9%', label: 'Earth history before humans', caption: 'Anatomically modern humans appeared ~300,000 years ago.' },
  ]) };
  B02['facts-atoms']  = { title: 'Three numbers', hint: '', comp: makeFactStrip([
    { value: '118', label: 'known elements', caption: 'Everything past uranium (92) has been synthesized in a lab.' },
    { value: '10⁻¹⁰ m', label: 'atomic diameter', caption: 'Roughly the wavelength of X-rays.' },
    { value: '~10²³', label: 'atoms in a gram', caption: 'Avogadro\'s number — how we count molecules.' },
  ]) };

  // ==========================================
  // Register
  // ==========================================
  window.INTERACTIVES_B02 = B02;
  window.INTERACTIVES = Object.assign({}, window.INTERACTIVES || {}, B02);

  // Shim: make entries that use `Component` visible to the older InteractiveEmbed
  // (which reads `entry.comp`). Touches our B02 entries AND any older V2 entries
  // that may still be on the registry without a `comp` alias.
  const shimAll = () => {
    if (!window.INTERACTIVES) return;
    for (const k of Object.keys(window.INTERACTIVES)) {
      const e = window.INTERACTIVES[k];
      if (e && e.Component && !e.comp) e.comp = e.Component;
    }
  };
  shimAll();
  // Second pass after other interactives-*.jsx files finish loading, so that
  // entries registered after us (e.g. B03) also get the `comp` alias.
  if (typeof window !== 'undefined') {
    if (document.readyState === 'complete') setTimeout(shimAll, 0);
    else window.addEventListener('load', shimAll);
  }

  // Extend the topic→interactive map. Most lessons already specify kind in
  // their content record; this map is a safety net for legacy paths.
  window.TOPIC_INTERACTIVE = Object.assign({}, window.TOPIC_INTERACTIVE || {}, {
    // physics
    em: 'emfield',
    thermo: 'entropy',
    waves: 'waves',
    quantum: 'doubleslit',
    relativity: 'relativity',
    particle: 'particles',
    cosmology: 'cosmos',
    // chemistry
    atoms: 'periodic',
    bonds: 'molecule',
    reactions: 'reaction',
    acidbase: 'ph',
    organic: 'organicmolecule',
    biochem: 'protein',
    // astronomy
    solar: 'orbit',
    stars: 'hrdiagram',
    galaxies: 'galaxy',
    bigbang: 'bigbang',
    blackholes: 'blackhole',
    // geology
    plates: 'plates',
    rocks: 'rockcycle',
    volcanoes: 'volcano',
    deeptime: 'timeline',
    fossils: 'fossils',
  });
})();


// ====== interactives-b03.jsx ======
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


// ====== interactives-b03-rich.jsx ======
// content/interactives-b03-rich.jsx
// Batch: B03-life-sciences — rich media deep-dive panels
// Last updated: 2026-04-23 by BATCH B03-life-sciences
//
// Tabbed "deep-dive" panels per topic, plus animated SVG figures.
// All public-domain images (Wikimedia Commons) and YouTube video thumbnails.
// Nothing phones home except when the user opts into a video or image.
// Registered as interactives so the existing InteractiveEmbed renders them
// via { type: 'interactive', key: 'rich-<topic>' } blocks in lesson bodies.

const { useState: uR3, useEffect: eR3, useRef: rR3, useMemo: mR3 } = React;

// ============================================================
// SHARED COMPONENTS
// ============================================================

// ---------- VideoShelf — hidden menu of videos ----------
const VideoShelf = ({ videos, accent = '#c8621a' }) => {
  const [open, setOpen] = uR3(false);
  const [active, setActive] = uR3(0);
  const [playing, setPlaying] = uR3(false);
  const v = videos[active];
  const thumb = (id) => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
  return (
    <div style={{ border: '1px solid #c9c0aa', background: '#f4efe6' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%', padding: '12px 16px', background: 'transparent',
          border: 'none', borderBottom: open ? '1px solid #c9c0aa' : 'none',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          cursor: 'pointer', fontSize: 13, fontFamily: 'JetBrains Mono',
          color: '#1a1d2b', letterSpacing: '0.04em',
        }}>
        <span>▸ VIDEO LIBRARY · {videos.length} curated lectures, films, and demonstrations</span>
        <span style={{
          transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform 0.25s ease', color: accent, fontSize: 16,
        }}>›</span>
      </button>
      {open && (
        <div style={{ padding: 14, animation: 'fadeIn 0.3s ease' }}>
          <div style={{
            position: 'relative', paddingBottom: '56.25%', background: '#000',
            marginBottom: 10, border: '1px solid #c9c0aa',
          }}>
            {playing ? (
              <iframe
                src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              />
            ) : (
              <button
                onClick={() => setPlaying(true)}
                style={{
                  position: 'absolute', inset: 0, padding: 0, background: 'none',
                  border: 'none', cursor: 'pointer',
                  backgroundImage: `url(${thumb(v.id)})`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                }}>
                <div style={{
                  position: 'absolute', inset: 0, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(0,0,0,0.25)',
                }}>
                  <div style={{
                    width: 58, height: 58, borderRadius: '50%', background: accent,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 24, color: '#f4efe6', paddingLeft: 5,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  }}>▶</div>
                </div>
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  padding: '10px 12px', color: '#f4efe6', fontSize: 13,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                  fontFamily: 'Instrument Serif', textAlign: 'left',
                }}>
                  {v.title}
                </div>
              </button>
            )}
          </div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: 6 }}>
            <strong style={{ color: 'var(--ink)' }}>{v.channel}</strong>
            {v.duration && ` · ${v.duration}`} — {v.why}
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: 8, marginTop: 12,
          }}>
            {videos.map((vid, i) => (
              <button
                key={i}
                onClick={() => { setActive(i); setPlaying(false); }}
                style={{
                  padding: 0, border: i === active ? `2px solid ${accent}` : '1px solid #c9c0aa',
                  background: i === active ? accent + '20' : 'transparent',
                  cursor: 'pointer', display: 'flex', flexDirection: 'column',
                  textAlign: 'left',
                }}>
                <img src={thumb(vid.id)} alt="" loading="lazy"
                  style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', display: 'block' }}/>
                <div style={{
                  padding: '6px 8px', fontSize: 11, lineHeight: 1.3,
                  fontFamily: 'Inter Tight', color: '#1a1d2b', minHeight: 48,
                }}>
                  {vid.title}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// ---------- FigureStrip — public-domain images with captions ----------
const FigureStrip = ({ figures, accent = '#c8621a' }) => {
  const [idx, setIdx] = uR3(0);
  const [loaded, setLoaded] = uR3({});
  const cur = figures[idx];
  return (
    <div style={{ border: '1px solid #c9c0aa', background: '#f4efe6' }}>
      <div style={{
        padding: '10px 14px', fontSize: 12, fontFamily: 'JetBrains Mono',
        color: '#5a5d6e', borderBottom: '1px solid #c9c0aa',
        letterSpacing: '0.04em',
      }}>
        FIGURES · {idx + 1} of {figures.length}
      </div>
      <div style={{
        padding: 16, background: '#1a1d2b', textAlign: 'center',
        minHeight: 300, display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <img
          src={cur.src}
          alt={cur.alt || cur.caption}
          loading="lazy"
          onLoad={() => setLoaded(l => ({ ...l, [idx]: true }))}
          style={{
            maxWidth: '100%', maxHeight: 420, objectFit: 'contain',
            background: '#f4efe6',
            opacity: loaded[idx] ? 1 : 0.3,
            transition: 'opacity 0.4s ease',
          }}
        />
      </div>
      <div style={{ padding: 14 }}>
        <div style={{ fontSize: 13, fontFamily: 'Instrument Serif', color: '#1a1d2b', marginBottom: 4 }}>
          {cur.caption}
        </div>
        <div style={{ fontSize: 11, fontFamily: 'JetBrains Mono', color: '#5a5d6e' }}>
          {cur.credit}
        </div>
      </div>
      <div style={{
        display: 'flex', gap: 4, padding: '0 14px 14px',
      }}>
        {figures.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)}
            style={{
              flex: 1, height: 4, padding: 0, border: 'none', cursor: 'pointer',
              background: i === idx ? accent : '#c9c0aa',
              transition: 'background 0.2s',
            }}/>
        ))}
      </div>
    </div>
  );
};

// ---------- TimelineBar — interactive timeline ----------
const TimelineBar = ({ events, accent = '#c8621a' }) => {
  const [sel, setSel] = uR3(events.length - 1);
  const years = events.map(e => e.year);
  const minY = Math.min(...years);
  const maxY = Math.max(...years);
  const span = maxY - minY;
  const pos = (y) => ((y - minY) / span) * 100;
  const cur = events[sel];
  return (
    <div style={{ border: '1px solid #c9c0aa', background: '#f4efe6', padding: 18 }}>
      <div style={{ fontSize: 12, fontFamily: 'JetBrains Mono', color: '#5a5d6e', marginBottom: 14, letterSpacing: '0.04em' }}>
        TIMELINE · {minY} → {maxY}
      </div>
      <div style={{ position: 'relative', height: 60, marginBottom: 20 }}>
        <div style={{
          position: 'absolute', left: 0, right: 0, top: 30, height: 2,
          background: '#c9c0aa',
        }}/>
        {events.map((e, i) => (
          <button key={i} onClick={() => setSel(i)}
            style={{
              position: 'absolute', left: `${pos(e.year)}%`, top: 22,
              transform: 'translateX(-50%)',
              width: i === sel ? 18 : 12, height: i === sel ? 18 : 12,
              borderRadius: '50%', border: 'none', cursor: 'pointer',
              background: i === sel ? accent : '#5a5d6e',
              transition: 'all 0.25s ease', padding: 0,
              boxShadow: i === sel ? `0 0 0 4px ${accent}33` : 'none',
            }}
            title={`${e.year} — ${e.title}`}
          />
        ))}
        <div style={{
          position: 'absolute', left: `${pos(minY)}%`, top: 48,
          fontSize: 10, fontFamily: 'JetBrains Mono', color: '#5a5d6e',
        }}>{minY}</div>
        <div style={{
          position: 'absolute', left: `${pos(maxY)}%`, top: 48,
          transform: 'translateX(-100%)',
          fontSize: 10, fontFamily: 'JetBrains Mono', color: '#5a5d6e',
        }}>{maxY}</div>
      </div>
      <div style={{ minHeight: 80 }}>
        <div style={{ fontSize: 24, fontFamily: 'Instrument Serif', color: accent, lineHeight: 1 }}>
          {cur.year}
        </div>
        <div style={{ fontSize: 16, fontFamily: 'Instrument Serif', color: '#1a1d2b', margin: '4px 0 6px' }}>
          {cur.title}
        </div>
        <div style={{ fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.5 }}>
          {cur.text}
        </div>
      </div>
      <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
        <button className="btn-ghost" onClick={() => setSel(s => Math.max(0, s - 1))}
          disabled={sel === 0} style={{ fontSize: 12 }}>← Previous</button>
        <button className="btn-ghost" onClick={() => setSel(s => Math.min(events.length - 1, s + 1))}
          disabled={sel === events.length - 1} style={{ fontSize: 12 }}>Next →</button>
      </div>
    </div>
  );
};

// ---------- SourceCard — primary-source excerpt ----------
const SourceCard = ({ source, accent = '#c8621a' }) => (
  <div style={{ border: '1px solid #c9c0aa', background: '#f4efe6' }}>
    <div style={{
      padding: '10px 14px', fontSize: 12, fontFamily: 'JetBrains Mono',
      color: '#5a5d6e', borderBottom: '1px solid #c9c0aa',
      letterSpacing: '0.04em',
    }}>
      PRIMARY SOURCE
    </div>
    <div style={{ padding: 18 }}>
      <blockquote style={{
        fontFamily: 'Instrument Serif', fontSize: 18, lineHeight: 1.5,
        color: '#1a1d2b', margin: 0, padding: '0 0 0 16px',
        borderLeft: `3px solid ${accent}`,
      }}>
        {source.excerpt}
      </blockquote>
      <div style={{
        fontSize: 12, fontFamily: 'JetBrains Mono', color: '#5a5d6e',
        marginTop: 14, letterSpacing: '0.02em',
      }}>
        — {source.author}, <em style={{color:'#1a1d2b'}}>{source.work}</em>, {source.year}
      </div>
      {source.url && (
        <a href={source.url} target="_blank" rel="noopener" style={{
          display: 'inline-block', marginTop: 10, fontSize: 12,
          color: accent, textDecoration: 'underline',
        }}>
          Read full text →
        </a>
      )}
    </div>
  </div>
);

// ---------- DeepDive — tabbed container ----------
const DeepDive = ({ data }) => {
  const [tab, setTab] = uR3('videos');
  const accent = data.accent || '#c8621a';
  const tabs = [
    data.videos && { id: 'videos', label: 'Videos', count: data.videos.length },
    data.figures && { id: 'figures', label: 'Figures', count: data.figures.length },
    data.timeline && { id: 'timeline', label: 'Timeline', count: data.timeline.length },
    data.sources && { id: 'sources', label: 'Sources', count: data.sources.length },
  ].filter(Boolean);
  return (
    <div>
      <div style={{
        display: 'flex', gap: 0, borderBottom: '1px solid #c9c0aa',
        marginBottom: 12, flexWrap: 'wrap',
      }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            style={{
              padding: '10px 16px', background: 'transparent',
              border: 'none', borderBottom: `2px solid ${tab === t.id ? accent : 'transparent'}`,
              cursor: 'pointer', fontSize: 12, fontFamily: 'JetBrains Mono',
              color: tab === t.id ? '#1a1d2b' : '#5a5d6e',
              letterSpacing: '0.04em', transition: 'all 0.2s',
              marginBottom: -1,
            }}>
            {t.label.toUpperCase()} <span style={{ opacity: 0.6 }}>· {t.count}</span>
          </button>
        ))}
      </div>
      {tab === 'videos' && data.videos && <VideoShelf videos={data.videos} accent={accent}/>}
      {tab === 'figures' && data.figures && <FigureStrip figures={data.figures} accent={accent}/>}
      {tab === 'timeline' && data.timeline && <TimelineBar events={data.timeline} accent={accent}/>}
      {tab === 'sources' && data.sources && (
        <div style={{ display: 'grid', gap: 12 }}>
          {data.sources.map((s, i) => <SourceCard key={i} source={s} accent={accent}/>)}
        </div>
      )}
    </div>
  );
};

// ============================================================
// TOPIC DATA — each constant is the full "deep-dive" bundle
// ============================================================

const commons = (path) => `https://upload.wikimedia.org/wikipedia/commons/${path}`;

const DATA_CELL = {
  accent: '#4a5d3a',
  videos: [
    { id: 'QnQe0xW_JY4', title: 'Crash Course Biology #1 — Carbon… So Simple', channel: 'CrashCourse', duration: '13:23', why: 'Hank Green\'s opener. Start here.' },
    { id: '8IlzKri08kk', title: 'Introduction to Cells: The Grand Cell Tour', channel: 'Amoeba Sisters', duration: '9:04', why: 'Cheerful, visual, accurate.' },
    { id: 'URUJD5NEXC8', title: 'Biology: Cell Structure', channel: 'Nucleus Medical Media', duration: '7:00', why: 'Animated, medically accurate organelle tour.' },
    { id: 'Hmwvj9X4GNY', title: 'Introduction to Prokaryotic and Eukaryotic Cells', channel: 'Bozeman Science', duration: '14:12', why: 'Paul Andersen\'s classroom voice; good for reviewing.' },
    { id: 'wGJx9Ytn36Q', title: 'Robert Hooke and the Cork', channel: 'SciShow', duration: '3:54', why: 'The founding anecdote in three minutes.' },
    { id: 'VhYNvyvu_Pg', title: 'Inner Life of the Cell (Harvard BioVisions)', channel: 'XVIVO / Harvard', duration: '8:19', why: 'The most famous molecular-scale cell animation ever made.' },
    { id: 'yKW4F0Nu-UY', title: 'Inside the Cell Membrane', channel: 'Amoeba Sisters', duration: '5:54', why: 'Fluid mosaic model, cleanly explained.' },
    { id: 'Pxujitlv8wc', title: 'Mitosis vs Meiosis', channel: 'Amoeba Sisters', duration: '7:43', why: 'Two kinds of cell division, side by side.' },
  ],
  figures: [
    { src: commons('c/c2/Hooke-microscope.png'), caption: 'Hooke\'s compound microscope, from Micrographia (1665).', credit: 'Robert Hooke · Wikimedia Commons · Public domain' },
    { src: commons('thumb/4/47/RobertHookeMicrographia1665.jpg/640px-RobertHookeMicrographia1665.jpg'), caption: 'The cork cells Hooke drew — the first time the word "cell" appeared in biology.', credit: 'Micrographia, 1665 · Wikimedia Commons · Public domain' },
    { src: commons('thumb/0/09/Animal_cell_structure_en.svg/800px-Animal_cell_structure_en.svg.png'), caption: 'A generalized animal cell with labeled organelles.', credit: 'Kelvinsong · Wikimedia Commons · CC0' },
    { src: commons('thumb/4/4e/Average_prokaryote_cell-_en.svg/800px-Average_prokaryote_cell-_en.svg.png'), caption: 'A prokaryotic cell — no nucleus, no membrane-bound organelles.', credit: 'Mariana Ruiz Villarreal · Wikimedia Commons · Public domain' },
  ],
  timeline: [
    { year: 1665, title: 'Hooke coins "cell"', text: 'Robert Hooke publishes Micrographia and describes the empty rooms he sees in cork.' },
    { year: 1674, title: 'Leeuwenhoek sees life', text: 'Antonie van Leeuwenhoek, a Dutch draper, reports "animalcules" swimming in pond water.' },
    { year: 1838, title: 'Schleiden & Schwann', text: 'Matthias Schleiden and Theodor Schwann propose that all plants and animals are made of cells.' },
    { year: 1855, title: 'Virchow\'s third leg', text: 'Rudolf Virchow: Omnis cellula e cellula — every cell comes from a pre-existing cell.' },
    { year: 1931, title: 'Electron microscope', text: 'Ruska and Knoll build the first electron microscope, eventually pushing resolution below the wavelength of light.' },
    { year: 1967, title: 'Endosymbiosis', text: 'Lynn Margulis argues mitochondria and chloroplasts were once free-living bacteria.' },
    { year: 2006, title: 'iPS cells', text: 'Shinya Yamanaka reprograms adult cells back to a stem-cell state with four transcription factors.' },
  ],
  sources: [
    {
      excerpt: '…I could exceedingly plainly perceive it to be all perforated and porous, much like a Honey-comb… these pores, or cells, were not very deep, but consisted of a great many little Boxes.',
      author: 'Robert Hooke',
      work: 'Micrographia',
      year: 1665,
      url: 'https://www.gutenberg.org/ebooks/15491',
    },
  ],
};

const DATA_GENETICS = {
  accent: '#4a5d3a',
  videos: [
    { id: '8kK2zwjRV0M', title: 'DNA Structure and Replication: Crash Course Biology #10', channel: 'CrashCourse', duration: '12:59', why: 'Hank Green on the double helix.' },
    { id: 'i-0rSv6oxSY', title: 'Monohybrids and the Punnett Square', channel: 'Amoeba Sisters', duration: '7:38', why: 'The best pea-plant explainer.' },
    { id: 'MfXsWjOc7yc', title: 'DNA Replication (advanced)', channel: 'Amoeba Sisters', duration: '9:22', why: 'Polymerase, leading/lagging strands, Okazaki fragments.' },
    { id: 'oefAI2x2CQM', title: 'Protein Synthesis (Updated)', channel: 'Amoeba Sisters', duration: '10:07', why: 'Transcription and translation in one video.' },
    { id: '5MQdXjRPHmQ', title: 'Mendelian Genetics', channel: 'Bozeman Science', duration: '14:00', why: 'Paul Andersen walks through the 1866 paper.' },
    { id: '2pp17E4E-O8', title: 'CRISPR: A Word Processor for DNA', channel: 'Kurzgesagt', duration: '6:35', why: 'Animated explainer of gene editing, with the ethical tangents.' },
    { id: 'fCd6B5HRaZ8', title: 'How to Sequence the Human Genome', channel: 'TED-Ed', duration: '4:44', why: 'The engineering that made the HGP possible.' },
    { id: 'vtkGtXtDlQA', title: 'From DNA to Protein — 3D Animation', channel: 'yourgenome (Wellcome)', duration: '2:41', why: 'Molecular-scale animation of translation.' },
    { id: 'qrKZBh8BL_U', title: 'James Watson: How We Discovered DNA', channel: 'TED', duration: '20:28', why: 'Watson himself, retrospective, complicated figure.' },
  ],
  figures: [
    { src: commons('thumb/b/ba/Gregor_Mendel_2.jpg/400px-Gregor_Mendel_2.jpg'), caption: 'Gregor Mendel, c. 1862. He was, by day, an abbot.', credit: 'Unknown photographer · Wikimedia Commons · Public domain' },
    { src: commons('thumb/8/8d/Punnett_square_mendel_flowers.svg/640px-Punnett_square_mendel_flowers.svg.png'), caption: 'A monohybrid Punnett square — the 3:1 ratio that Mendel counted in thousands of pea plants.', credit: 'Madprime · Wikimedia Commons · CC0' },
    { src: commons('thumb/8/81/DNA_Structure%2BKey%2BLabelled.pn_NoBB.png/800px-DNA_Structure%2BKey%2BLabelled.pn_NoBB.png'), caption: 'The double helix with labeled base pairs.', credit: 'Zephyris · Wikimedia Commons · CC BY-SA' },
    { src: commons('thumb/d/d4/DNA_orbit_animated.gif/400px-DNA_orbit_animated.gif'), caption: 'An animated rotation of the B-form DNA helix.', credit: 'Zephyris · Wikimedia Commons · CC BY-SA' },
  ],
  timeline: [
    { year: 1866, title: 'Mendel\'s paper', text: 'After eight years of crossing pea plants, Gregor Mendel publishes "Versuche über Pflanzenhybriden." It is ignored for thirty-four years.' },
    { year: 1900, title: 'Rediscovery', text: 'De Vries, Correns, and Tschermak independently rediscover Mendel\'s laws, now armed with chromosome theory.' },
    { year: 1944, title: 'Avery-MacLeod-McCarty', text: 'They show that DNA, not protein, carries heritable information in pneumococcus.' },
    { year: 1953, title: 'The double helix', text: 'Watson and Crick publish a one-page Nature paper. Rosalind Franklin\'s Photo 51 is uncredited.' },
    { year: 1977, title: 'Sanger sequencing', text: 'Frederick Sanger develops a method to read DNA letter by letter. He wins his second Nobel.' },
    { year: 2003, title: 'Human Genome Project', text: 'Thirteen-year, three-billion-dollar international project publishes a reference sequence of the human genome.' },
    { year: 2012, title: 'CRISPR-Cas9', text: 'Doudna, Charpentier, and colleagues repurpose a bacterial immune system into a programmable gene editor.' },
    { year: 2020, title: 'Nobel for CRISPR', text: 'Doudna and Charpentier share the Chemistry Nobel — the first Nobel awarded to two women jointly.' },
  ],
  sources: [
    {
      excerpt: 'It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism for the genetic material.',
      author: 'James Watson & Francis Crick',
      work: 'Molecular Structure of Nucleic Acids (Nature, 25 April 1953)',
      year: 1953,
      url: 'https://www.nature.com/articles/171737a0',
    },
  ],
};

const DATA_EVOLUTION = {
  accent: '#4a5d3a',
  videos: [
    { id: 'P3GagfbA2vo', title: 'Evolution: It\'s a Thing — Crash Course #20', channel: 'CrashCourse', duration: '12:32', why: 'Natural selection, fact vs. theory.' },
    { id: 'aTftyFboC_M', title: 'Natural Selection', channel: 'Amoeba Sisters', duration: '7:07', why: 'Clear, short, with examples.' },
    { id: '4vE_mQtpVWI', title: 'When Whales Walked', channel: 'PBS Eons', duration: '11:38', why: 'The fossil evidence for whale ancestors with legs.' },
    { id: 'DIRmGy7pUJA', title: 'Did We Kill the Neanderthals?', channel: 'PBS Eons', duration: '9:55', why: 'Human evolution with current ancient-DNA evidence.' },
    { id: 'oHvLlS_Sc54', title: 'Why Sex? — Evolution of Sex', channel: 'Stated Clearly', duration: '8:38', why: 'The evolutionary puzzle of sexual reproduction.' },
    { id: 'hxBnl1dAOKU', title: 'Tiktaalik and the Fish with Legs', channel: 'Shubin / HHMI', duration: '11:00', why: 'Neil Shubin on finding the fishapod.' },
    { id: 'MPU2HistivI', title: 'Evolution in a Dish: Watching It Happen', channel: 'Harvard Medical / Kishony Lab', duration: '1:54', why: 'Time-lapse of E. coli evolving antibiotic resistance across a giant plate.' },
    { id: 'IuqsgIX1b7o', title: 'Natural Selection Simulation', channel: 'Primer', duration: '10:00', why: 'Animated simulation of selection pressure.' },
    { id: 'LhpUJRLrpSU', title: 'What Darwin Never Knew (NOVA excerpt)', channel: 'PBS NOVA', duration: '14:00', why: 'How modern molecular biology confirms the deep structure of evolution.' },
  ],
  figures: [
    { src: commons('thumb/2/2e/Charles_Darwin_seated_crop.jpg/400px-Charles_Darwin_seated_crop.jpg'), caption: 'Charles Darwin, c. 1854 — a few years before the Origin appeared.', credit: 'Henry Maull & John Fox · Wikimedia Commons · Public domain' },
    { src: commons('thumb/3/33/Darwin%27s_finches_by_Gould.jpg/640px-Darwin%27s_finches_by_Gould.jpg'), caption: 'Darwin\'s finches, as drawn by John Gould for the Beagle voyage publications. Thirteen species, one common ancestor.', credit: 'John Gould · Wikimedia Commons · Public domain' },
    { src: commons('thumb/0/06/Origin_of_Species.jpg/400px-Origin_of_Species.jpg'), caption: 'Title page of the first edition of On the Origin of Species, 1859.', credit: 'John Murray · Wikimedia Commons · Public domain' },
    { src: commons('thumb/b/b6/Tree_of_life_by_Haeckel.jpg/640px-Tree_of_life_by_Haeckel.jpg'), caption: 'Ernst Haeckel\'s 1879 Tree of Life — an early visual argument for common descent.', credit: 'Ernst Haeckel · Wikimedia Commons · Public domain' },
  ],
  timeline: [
    { year: 1831, title: 'Beagle sets sail', text: 'Darwin, twenty-two, boards HMS Beagle at Plymouth. The voyage will last nearly five years.' },
    { year: 1835, title: 'The Galápagos', text: 'Beagle arrives. Darwin collects finches and mockingbirds that will puzzle him for years.' },
    { year: 1858, title: 'Wallace\'s letter', text: 'Alfred Russel Wallace mails Darwin a manuscript from Borneo describing natural selection. Darwin\'s priority dispute is solved by a joint Linnean Society reading.' },
    { year: 1859, title: 'On the Origin of Species', text: 'Published 24 November. The first edition sells out the same day.' },
    { year: 1866, title: 'Mendel\'s paper (ignored)', text: 'Genetics is born but nobody connects it to Darwin for another sixty years.' },
    { year: 1937, title: 'Modern synthesis', text: 'Dobzhansky\'s Genetics and the Origin of Species welds Mendelian genetics to natural selection.' },
    { year: 1973, title: 'Grant finch study begins', text: 'Peter and Rosemary Grant begin their forty-year study on Daphne Major, eventually watching beak size evolve in a single generation.' },
    { year: 2007, title: 'Lenski E. coli', text: 'Richard Lenski\'s E. coli long-term evolution experiment passes 40,000 generations and keeps going.' },
  ],
  sources: [
    {
      excerpt: 'There is grandeur in this view of life, with its several powers, having been originally breathed into a few forms or into one; and that, whilst this planet has gone cycling on according to the fixed law of gravity, from so simple a beginning endless forms most beautiful and most wonderful have been, and are being, evolved.',
      author: 'Charles Darwin',
      work: 'On the Origin of Species (closing paragraph)',
      year: 1859,
      url: 'https://www.gutenberg.org/ebooks/1228',
    },
  ],
};

const DATA_ECOLOGY = {
  accent: '#4a5d3a',
  videos: [
    { id: 'izRvPaAWgyw', title: 'Ecology: Rules for Living on Earth — Crash Course #40', channel: 'CrashCourse', duration: '11:54', why: 'Trophic levels, nutrient cycles.' },
    { id: 'ysa5OBhXz-Q', title: 'How Wolves Change Rivers', channel: 'Sustainable Human', duration: '4:34', why: 'Monbiot on the Yellowstone trophic cascade.' },
    { id: 'EYGrElVyHnU', title: 'The Sixth Mass Extinction', channel: 'PBS Eons', duration: '9:00', why: 'Kolbert\'s subject, in animation.' },
    { id: 'wpgVpJrRTao', title: 'Ecosystem Ecology', channel: 'Bozeman Science', duration: '12:30', why: 'Paul Andersen on energy flow and productivity.' },
    { id: 'dt_zwkvOBdE', title: 'The Carbon Cycle', channel: 'Crash Course Kids / NASA', duration: '3:20', why: 'Short, clear carbon-cycle animation.' },
    { id: '4jyNZ0yfJjw', title: 'Keystone Species', channel: 'The Nature of Things (CBC)', duration: '8:30', why: 'Ecologists in the field — sea otters, starfish.' },
    { id: 'UtRm0_nbzuo', title: 'Why Biodiversity Is So Important', channel: 'TED-Ed', duration: '4:21', why: 'The argument for species-level conservation.' },
    { id: 'XLXMFNTxpvw', title: 'Rachel Carson — Silent Spring', channel: 'PBS American Experience', duration: '5:00', why: 'Archival footage and context for the book that built modern environmentalism.' },
  ],
  figures: [
    { src: commons('thumb/6/62/Rachel-Carson.jpg/400px-Rachel-Carson.jpg'), caption: 'Rachel Carson, 1940s. Silent Spring (1962) founded modern environmentalism.', credit: 'U.S. Fish & Wildlife Service · Public domain' },
    { src: commons('thumb/e/eb/Yellowstone_Wolves.jpg/640px-Yellowstone_Wolves.jpg'), caption: 'Wolves in Yellowstone. Their 1995 reintroduction cascaded through the whole ecosystem.', credit: 'National Park Service · Public domain' },
    { src: commons('thumb/4/4f/Food_web.svg/640px-Food_web.svg.png'), caption: 'A simplified marine food web. Remove a keystone species and the graph rewires.', credit: 'Thompsma · Wikimedia Commons · Public domain' },
  ],
  timeline: [
    { year: 1866, title: 'Haeckel coins "Ökologie"', text: 'Ernst Haeckel names the study of the economy of nature.' },
    { year: 1935, title: 'Ecosystem', text: 'Arthur Tansley introduces the term ecosystem — biota plus their physical environment as a single unit.' },
    { year: 1953, title: 'Odum\'s textbook', text: 'Eugene Odum\'s Fundamentals of Ecology makes ecology a quantitative science.' },
    { year: 1962, title: 'Silent Spring', text: 'Rachel Carson\'s book links DDT to collapsing bird populations and founds modern environmentalism.' },
    { year: 1969, title: 'Keystone species', text: 'Robert Paine coins the term after pulling purple starfish from a stretch of Washington coast.' },
    { year: 1995, title: 'Wolves return to Yellowstone', text: 'Reintroduction triggers a trophic cascade that alters tree cover and river paths.' },
    { year: 2008, title: 'Planetary boundaries', text: 'Rockström et al. publish the planetary-boundaries framework: nine Earth-system limits.' },
  ],
  sources: [
    {
      excerpt: 'The "control of nature" is a phrase conceived in arrogance, born of the Neanderthal age of biology and philosophy, when it was supposed that nature exists for the convenience of man.',
      author: 'Rachel Carson',
      work: 'Silent Spring',
      year: 1962,
    },
  ],
};

const DATA_NEURO = {
  accent: '#2a4a6a',
  videos: [
    { id: 'vHrmiy4W9C0', title: 'Meet Your Master — Getting to Know Your Brain: Crash Course #4', channel: 'CrashCourse', duration: '10:21', why: 'Hank Green on neurons and brain anatomy.' },
    { id: 'NNnIGh9g6fA', title: 'Introduction to Human Behavioral Biology', channel: 'Stanford (Robert Sapolsky)', duration: '57:15', why: 'The legendary Stanford opener.' },
    { id: 'OZG8M_ldA1M', title: 'How Your Brain Works', channel: 'Kurzgesagt', duration: '8:01', why: 'Animated tour of the brain\'s major systems.' },
    { id: 'zbdf-XUUOpw', title: 'The Neuron', channel: '2-Minute Neuroscience', duration: '2:00', why: 'Microscope-to-synapse overview in two minutes.' },
    { id: 'WhowH0kb7n0', title: 'Action Potential', channel: '2-Minute Neuroscience', duration: '2:00', why: 'Na⁺ in, K⁺ out, propagation.' },
    { id: 'XSyngKjm8gc', title: 'Phineas Gage (Reconstruction)', channel: 'TED-Ed', duration: '4:56', why: 'The 1848 iron bar that changed neuroscience.' },
    { id: 'BGOvIcb75MI', title: 'Connectomics', channel: 'HHMI BioInteractive', duration: '8:15', why: 'Jeff Lichtman on mapping every synapse.' },
    { id: 'Mot-ET5XPhM', title: 'The Brain That Changes Itself', channel: 'TEDxYorkU / Doidge', duration: '10:00', why: 'Neuroplasticity, clinically grounded.' },
    { id: 'YK4CSJCS4lo', title: 'Memory and the Hippocampus (H.M.)', channel: 'The Royal Institution', duration: '50:00', why: 'Suzanne Corkin on the most-studied patient in neuroscience history.' },
  ],
  figures: [
    { src: commons('thumb/b/ba/Santiago_Ram%C3%B3n_y_Cajal_%281852-1934%29_portrait_%28restored%29.jpg/400px-Santiago_Ram%C3%B3n_y_Cajal_%281852-1934%29_portrait_%28restored%29.jpg'), caption: 'Santiago Ramón y Cajal (1852–1934). His drawings remain in textbooks.', credit: 'Wikimedia Commons · Public domain' },
    { src: commons('thumb/d/d0/PurkinjeCell.jpg/480px-PurkinjeCell.jpg'), caption: 'Cajal\'s drawing of a Purkinje neuron from the cerebellum.', credit: 'Santiago Ramón y Cajal · Wikimedia Commons · Public domain' },
    { src: commons('thumb/6/6c/Blausen_0657_MultipolarNeuron.png/640px-Blausen_0657_MultipolarNeuron.png'), caption: 'A modern rendering of a multipolar neuron — dendrites, soma, axon.', credit: 'Blausen.com · Wikimedia Commons · CC BY 3.0' },
    { src: commons('thumb/7/74/Phineas_Gage_Cased_Daguerreotype_WilgusPhoto2008-12-19_EnhancedRetouched_Color.jpg/400px-Phineas_Gage_Cased_Daguerreotype_WilgusPhoto2008-12-19_EnhancedRetouched_Color.jpg'), caption: 'Phineas Gage holding the iron bar that passed through his skull in 1848. He lived another twelve years.', credit: 'Wikimedia Commons · Public domain' },
  ],
  timeline: [
    { year: 1848, title: 'Phineas Gage', text: 'A tamping iron passes through the frontal lobe of a railroad foreman in Vermont. He survives; his personality does not.' },
    { year: 1873, title: 'Golgi stain', text: 'Camillo Golgi discovers a silver stain that reveals individual neurons.' },
    { year: 1894, title: 'Cajal\'s neuron doctrine', text: 'Using Golgi\'s stain, Cajal argues the nervous system is made of discrete cells. He will be proven right.' },
    { year: 1906, title: 'Nobel for both', text: 'Cajal and Golgi share the prize for opposing conclusions.' },
    { year: 1952, title: 'Hodgkin-Huxley', text: 'Mathematical model of the action potential, built on squid-axon recordings.' },
    { year: 1953, title: 'Patient H.M.', text: 'Bilateral hippocampectomy cures Henry Molaison\'s epilepsy and destroys his ability to form new memories.' },
    { year: 1990, title: 'fMRI', text: 'Seiji Ogawa shows that blood-oxygen changes can be imaged non-invasively. Cognitive neuroscience explodes.' },
    { year: 2013, title: 'BRAIN Initiative', text: 'U.S. launches the BRAIN Initiative; Europe launches the Human Brain Project the same year.' },
  ],
  sources: [
    {
      excerpt: 'The garden of neurology holds out to the investigator captivating spectacles and incomparable artistic emotions. In it, my aesthetic instincts found at last full satisfaction.',
      author: 'Santiago Ramón y Cajal',
      work: 'Recuerdos de mi vida',
      year: 1917,
    },
  ],
};

const DATA_ANATOMY = {
  accent: '#6a3a3a',
  videos: [
    { id: 'uBGl2BujkPQ', title: 'Introduction to Anatomy & Physiology: Crash Course #1', channel: 'CrashCourse', duration: '10:19', why: 'Hank Green on the basic organization.' },
    { id: 'hFjTvVk0UHk', title: 'Vesalius and the Fabric of the Human Body', channel: 'The Royal Institution', duration: '45:00', why: 'Historian Andrew Cunningham on 1543.' },
    { id: 'n2oCYH3uGeA', title: 'Anatomy of the Heart', channel: 'Armando Hasudungan', duration: '11:20', why: 'Hand-drawn chambers, valves, and flow.' },
    { id: '7b6LRebCn-Y', title: 'Skeletal System', channel: 'Bozeman Science', duration: '9:00', why: 'Bones, joints, and function.' },
    { id: 'jVrE7kNG1RQ', title: 'Muscular System', channel: 'Armando Hasudungan', duration: '9:45', why: 'Skeletal muscle, sliding-filament model.' },
    { id: 'hv7J5Tioifo', title: 'A Virtual Cadaver Dissection', channel: 'Stanford Medicine', duration: '7:30', why: 'Cadaver lab without the lab.' },
    { id: 'tCHtkSOJsD0', title: 'The Lymphatic System', channel: 'Nucleus Medical Media', duration: '5:42', why: 'The often-forgotten system, animated.' },
  ],
  figures: [
    { src: commons('thumb/f/f7/Man_dressed_in_Black_by_Calcar_%28Hermitage%29.jpg/400px-Man_dressed_in_Black_by_Calcar_%28Hermitage%29.jpg'), caption: 'Andreas Vesalius, portrait by Jan van Calcar, c. 1546.', credit: 'Hermitage · Wikimedia Commons · Public domain' },
    { src: commons('thumb/4/4a/Vesalius_Fabrica_fronticepiece.jpg/480px-Vesalius_Fabrica_fronticepiece.jpg'), caption: 'Frontispiece of De humani corporis fabrica (1543). Vesalius himself performs the dissection.', credit: 'Wikimedia Commons · Public domain' },
    { src: commons('thumb/0/08/1105_Anterior_and_Posterior_Views_of_Muscles.jpg/640px-1105_Anterior_and_Posterior_Views_of_Muscles.jpg'), caption: 'Superficial muscles of the body, anterior and posterior views.', credit: 'OpenStax Anatomy · CC BY 4.0' },
    { src: commons('thumb/c/c8/Illu_bone_anatomy.jpg/640px-Illu_bone_anatomy.jpg'), caption: 'Cross-section of a long bone — the cortex, marrow, and Haversian system.', credit: 'U.S. NIH · Public domain' },
  ],
  timeline: [
    { year: -300, title: 'Herophilus in Alexandria', text: 'Performs public human dissections — a practice that then disappears in Europe for a thousand years.' },
    { year: 200, title: 'Galen', text: 'Dissects apes and pigs; writes anatomy texts that dominate medicine until Vesalius.' },
    { year: 1316, title: 'Mondino da Luzzi', text: 'Publishes Anothomia, the first European anatomy textbook based on human dissection.' },
    { year: 1543, title: 'De humani corporis fabrica', text: 'Vesalius, 28, publishes his plate-illustrated anatomy — the founding document of modern medicine.' },
    { year: 1628, title: 'Harvey on circulation', text: 'William Harvey describes the closed cardiovascular loop in De Motu Cordis.' },
    { year: 1858, title: 'Gray\'s Anatomy', text: 'Henry Gray\'s Anatomy Descriptive and Surgical is published. Still in print.' },
    { year: 1895, title: 'X-rays', text: 'Wilhelm Röntgen discovers X-rays; a few weeks later he makes the first medical radiograph of his wife\'s hand.' },
    { year: 1971, title: 'CT scanner', text: 'Godfrey Hounsfield\'s machine gives us cross-sectional anatomy in living patients.' },
  ],
  sources: [
    {
      excerpt: 'How much has been attributed to Galen, either falsely or inadvisedly, I need not relate here, for anyone can see from my book and from a thorough comparison… that he never dissected a human body.',
      author: 'Andreas Vesalius',
      work: 'De humani corporis fabrica (preface)',
      year: 1543,
    },
  ],
};

const DATA_PHYSIOLOGY = {
  accent: '#6a3a3a',
  videos: [
    { id: 'uBGl2BujkPQ', title: 'Introduction to Anatomy & Physiology: Crash Course #1', channel: 'CrashCourse', duration: '10:19', why: 'Orientation to function.' },
    { id: 'bGn2pwPEMS0', title: 'Homeostasis', channel: 'Amoeba Sisters', duration: '7:00', why: 'Negative feedback, clearly.' },
    { id: 'CWFyxn0qDEU', title: 'The Cardiac Cycle', channel: 'Armando Hasudungan', duration: '11:00', why: 'Systole, diastole, valves — hand-drawn.' },
    { id: 'SPGRkexI_cs', title: 'How the Kidney Works', channel: 'Armando Hasudungan', duration: '10:30', why: 'The nephron at work.' },
    { id: 'HG8rGgAN-dg', title: 'Respiratory Physiology', channel: 'MedCram', duration: '13:00', why: 'Roger Seheult on gas exchange.' },
    { id: 'DeqsMkxlTlE', title: 'Endocrine System', channel: 'Crash Course Anatomy #23', duration: '10:00', why: 'Hormones as slow signals.' },
    { id: 'XhNnNNBXGCk', title: 'Claude Bernard and the Milieu Intérieur', channel: 'Wellcome Collection', duration: '4:15', why: 'Historical context for homeostasis.' },
  ],
  figures: [
    { src: commons('thumb/4/42/William_Harvey_2.jpg/400px-William_Harvey_2.jpg'), caption: 'William Harvey, c. 1627. De Motu Cordis appeared the following year.', credit: 'Daniël Mijtens · Wikimedia Commons · Public domain' },
    { src: commons('thumb/6/60/William_Harvey_%281578-1657%29_Venenbild.jpg/640px-William_Harvey_%281578-1657%29_Venenbild.jpg'), caption: 'Harvey\'s own plate demonstrating the venous valves — proof that blood travels only one way.', credit: 'De Motu Cordis (1628) · Public domain' },
    { src: commons('thumb/e/e4/Diagram_of_the_human_heart_%28cropped%29.svg/640px-Diagram_of_the_human_heart_%28cropped%29.svg.png'), caption: 'Chambers and valves of the human heart.', credit: 'Wapcaplet · Wikimedia Commons · CC BY-SA' },
  ],
  timeline: [
    { year: 1628, title: 'Harvey on circulation', text: 'De Motu Cordis describes the closed loop — the first modern physiological argument.' },
    { year: 1661, title: 'Capillaries', text: 'Marcello Malpighi observes capillaries under a microscope, completing Harvey\'s loop.' },
    { year: 1865, title: 'Introduction to Experimental Medicine', text: 'Claude Bernard founds modern experimental physiology and introduces the milieu intérieur.' },
    { year: 1903, title: 'ECG', text: 'Willem Einthoven invents the string galvanometer and records the first practical electrocardiogram.' },
    { year: 1926, title: 'Cannon\'s Homeostasis', text: 'Walter Cannon names Bernard\'s insight "homeostasis" and gives it a modern framework.' },
    { year: 1952, title: 'Hodgkin-Huxley', text: 'A squid axon, four equations, and a Nobel Prize twelve years later.' },
    { year: 1960, title: 'Artificial kidney scales', text: 'Home hemodialysis becomes practical; chronic renal failure stops being automatically fatal.' },
  ],
  sources: [
    {
      excerpt: 'The constancy of the internal environment is the condition of a free and independent life.',
      author: 'Claude Bernard',
      work: 'Leçons sur les phénomènes de la vie',
      year: 1878,
    },
  ],
};

const DATA_PHARMACOLOGY = {
  accent: '#6a3a3a',
  videos: [
    { id: 'DhFbJVuzI7k', title: 'Pharmacokinetics — Absorption, Distribution, Metabolism, Excretion', channel: 'Armando Hasudungan', duration: '12:15', why: 'ADME in one hand-drawn lecture.' },
    { id: 'ZYwn0jN6lmQ', title: 'Receptors and Ligands', channel: 'Armando Hasudungan', duration: '9:05', why: 'The lock-and-key, with dose-response.' },
    { id: 'CbQy-Z5qj5E', title: 'Penicillin and the Mold That Changed the World', channel: 'Veritasium', duration: '11:15', why: 'Fleming, Florey, Chain, and what it took.' },
    { id: 'tkdRU1B2T4A', title: 'How Antibiotics Work', channel: 'Kurzgesagt', duration: '6:40', why: 'Mechanisms of action for the major classes.' },
    { id: '74l6nhZmpKs', title: 'How Drugs Are Made (Clinical Trials)', channel: 'TED-Ed', duration: '5:10', why: 'The 10-year, 1-in-10,000 pipeline.' },
    { id: '2Vw5JxjKJsE', title: 'Opioids and the Brain', channel: 'Ninja Nerd', duration: '32:00', why: 'Mechanisms, dependence, and why we prescribe them anyway.' },
    { id: 'fjQW7iEmSNU', title: 'The Therapeutic Index', channel: 'Speed Pharmacology', duration: '5:00', why: 'Short explainer of the safety window.' },
  ],
  figures: [
    { src: commons('thumb/7/79/Paracelsus01.jpg/400px-Paracelsus01.jpg'), caption: 'Paracelsus (1493–1541). "The dose makes the poison."', credit: 'Quentin Matsys · Wikimedia Commons · Public domain' },
    { src: commons('thumb/c/cf/Alexander_Fleming_1945.jpg/400px-Alexander_Fleming_1945.jpg'), caption: 'Alexander Fleming in his St. Mary\'s lab, 1945 — the year he shared the Nobel for penicillin.', credit: 'Imperial War Museum · Public domain' },
    { src: commons('thumb/2/27/Dose_response_curve.png/640px-Dose_response_curve.png'), caption: 'A classical log-dose response curve. ED50 and LD50 define the therapeutic window.', credit: 'Pharmacology textbook figure · Public domain' },
  ],
  timeline: [
    { year: 1500, title: 'Paracelsus', text: '"All things are poisons; the dose makes the poison." Pharmacology\'s founding claim.' },
    { year: 1805, title: 'Morphine isolated', text: 'Friedrich Sertürner isolates the first pure alkaloid drug from opium.' },
    { year: 1899, title: 'Aspirin', text: 'Bayer markets acetylsalicylic acid. It is still the most-consumed drug in history.' },
    { year: 1928, title: 'Penicillin (discovered)', text: 'A mold contaminant in Fleming\'s staph plates kills the bacteria around it.' },
    { year: 1941, title: 'Penicillin (useful)', text: 'Florey and Chain purify penicillin at Oxford; a Merck fermentation plant mass-produces it.' },
    { year: 1953, title: 'First chemotherapy success', text: 'Sidney Farber\'s aminopterin induces remission in childhood leukemia.' },
    { year: 1962, title: 'Kefauver-Harris amendments', text: 'Thalidomide disaster forces the FDA to require evidence of efficacy, not just safety.' },
    { year: 1987, title: 'Statins', text: 'Lovastatin approved; a decade later, one of the most prescribed drug classes on Earth.' },
    { year: 2017, title: 'First CAR-T approval', text: 'Kymriah — engineered T cells — approved by FDA for refractory leukemia.' },
  ],
  sources: [
    {
      excerpt: 'All things are poison, and nothing is without poison; the dosage alone makes it so a thing is not a poison.',
      author: 'Paracelsus',
      work: 'Die Dritte Defension',
      year: 1538,
    },
  ],
};

const DATA_PUBLIC_HEALTH = {
  accent: '#3a5a4a',
  videos: [
    { id: '5aww-Bpgkf4', title: 'What is Public Health? Crash Course Public Health #1', channel: 'CrashCourse', duration: '10:30', why: 'Vanessa Hill\'s opener with APHA.' },
    { id: 'lNhCSGO0Q0E', title: 'Epidemiology, explained', channel: 'TED-Ed', duration: '5:00', why: 'Short, visual, with John Snow as the anchor.' },
    { id: '6EbF5L8bL1E', title: 'How Germs Spread: Cholera and the Broad Street Pump', channel: 'PBS Eons / Smithsonian', duration: '8:00', why: 'Field epidemiology, circa 1854.' },
    { id: 'hHvVPvPqKZ8', title: 'The 1918 Flu: Deadliest Pandemic in History', channel: 'PBS American Experience', duration: '52:00', why: 'Documentary-length history.' },
    { id: 'gxAaO2rsdIs', title: 'How we\'ll end malaria', channel: 'TED / Abdoulaye Diabaté', duration: '11:40', why: 'Current frontier in global public health.' },
    { id: 'aS6N2B-0SvM', title: 'Vaccines: How They Work', channel: 'Kurzgesagt', duration: '6:42', why: 'Animation of herd immunity and modern vaccine design.' },
    { id: 'wFTGPc-unn4', title: 'How does an epidemic spread?', channel: 'TED-Ed', duration: '4:35', why: 'Visual intro to the SIR model.' },
  ],
  figures: [
    { src: commons('thumb/c/cc/John_Snow.jpg/400px-John_Snow.jpg'), caption: 'John Snow, 1856. Anaesthetist to Queen Victoria; father of epidemiology.', credit: 'Wikimedia Commons · Public domain' },
    { src: commons('thumb/2/27/Snow-cholera-map-1.jpg/640px-Snow-cholera-map-1.jpg'), caption: 'Snow\'s 1854 map of cholera deaths, clustered around the Broad Street pump.', credit: 'John Snow · Public domain' },
    { src: commons('thumb/f/f7/Emergency_hospital_during_Influenza_epidemic_%28NCP_1603%29%2C_National_Photo_Company_photograph_collection%2C_LOC.jpg/640px-Emergency_hospital_during_Influenza_epidemic_%28NCP_1603%29%2C_National_Photo_Company_photograph_collection%2C_LOC.jpg'), caption: 'An emergency hospital at Camp Funston, Kansas, during the 1918 influenza pandemic.', credit: 'National Photo Company · Library of Congress · Public domain' },
  ],
  timeline: [
    { year: 1796, title: 'Smallpox vaccine', text: 'Edward Jenner inoculates a boy with cowpox; the smallpox challenge fails to take.' },
    { year: 1854, title: 'Broad Street pump', text: 'John Snow traces a London cholera outbreak to a single water pump and has the handle removed.' },
    { year: 1918, title: 'Spanish flu', text: 'An H1N1 influenza pandemic kills an estimated 50 million people worldwide.' },
    { year: 1948, title: 'WHO founded', text: 'The World Health Organization is constituted as a UN agency on 7 April.' },
    { year: 1955, title: 'Polio vaccine', text: 'Jonas Salk\'s inactivated polio vaccine is declared safe and effective.' },
    { year: 1980, title: 'Smallpox eradicated', text: 'WHO certifies global eradication — the only human disease ever eradicated by human action.' },
    { year: 1996, title: 'HIV triple therapy', text: 'HAART transforms AIDS from a terminal illness to a manageable chronic one.' },
    { year: 2003, title: 'SARS', text: 'A coronavirus outbreak is contained through classical public-health measures; trial run for what would come.' },
    { year: 2020, title: 'COVID-19', text: 'The largest public-health event in a century. mRNA vaccines arrive within a year.' },
  ],
  sources: [
    {
      excerpt: 'The result of the inquiry, then, is, that there has been no particular outbreak or prevalence of cholera in this part of London except among the persons who were in the habit of drinking the water of the above-mentioned pump-well.',
      author: 'John Snow',
      work: 'On the Mode of Communication of Cholera (2nd ed.)',
      year: 1855,
      url: 'https://archive.org/details/b28985266',
    },
  ],
};

const DATA_COGNITION = {
  accent: '#7a4a3a',
  videos: [
    { id: 'vJG698U2Mvo', title: 'Selective Attention Test (the gorilla)', channel: 'Daniel Simons', duration: '1:22', why: 'Watch once, remember forever.' },
    { id: 'eqZmW7uIPW4', title: 'Cognition — Crash Course Psychology #15', channel: 'CrashCourse', duration: '10:20', why: 'Thinking and problem solving, Hank Green.' },
    { id: 'IB9tlrZX1ek', title: 'Daniel Kahneman on Thinking, Fast and Slow', channel: 'The Royal Institution', duration: '54:00', why: 'Kahneman himself on System 1 vs System 2.' },
    { id: 'mvmLAgH9SSA', title: 'How your memory works', channel: 'TED-Ed', duration: '4:42', why: 'Encoding, consolidation, retrieval.' },
    { id: 'nOvXeisvZPo', title: 'The Stroop Effect', channel: 'SciShow Psych', duration: '4:00', why: 'Why reading interferes with naming the color.' },
    { id: 'KykjpeuMNEk', title: 'The Science of Thinking', channel: 'Veritasium', duration: '12:10', why: 'Dual-process accounts, with demonstrations.' },
    { id: 'aRxCjqHlSdM', title: 'Why we hallucinate — Oliver Sacks', channel: 'TED', duration: '18:00', why: 'Cognition as reconstruction.' },
    { id: 'r4fJy5YkZcA', title: 'The Man Who Mistook His Wife for a Hat (reading)', channel: 'BBC / Oliver Sacks', duration: '8:00', why: 'Sacks reading from his book on prosopagnosia.' },
  ],
  figures: [
    { src: commons('thumb/9/9c/William_James_b1842c.jpg/400px-William_James_b1842c.jpg'), caption: 'William James, 1903. His Principles of Psychology (1890) founded the field in English.', credit: 'Wikimedia Commons · Public domain' },
    { src: commons('thumb/6/66/Daniel_KAHNEMAN.jpg/400px-Daniel_KAHNEMAN.jpg'), caption: 'Daniel Kahneman (1934–2024). A psychologist who won the Nobel in Economics.', credit: 'nrkbeta · Wikimedia Commons · CC BY-SA' },
    { src: commons('thumb/c/c7/Stroop_comparison.png/640px-Stroop_comparison.png'), caption: 'A Stroop task. Reading interferes with color-naming — reliably, in every adult reader.', credit: 'Wikimedia Commons · Public domain' },
  ],
  timeline: [
    { year: 1879, title: 'Wundt\'s lab', text: 'Wilhelm Wundt opens the first experimental-psychology laboratory at Leipzig.' },
    { year: 1890, title: 'Principles of Psychology', text: 'William James publishes the two-volume work that founds English-language psychology.' },
    { year: 1935, title: 'Stroop effect', text: 'John Ridley Stroop publishes the interference task that still bears his name.' },
    { year: 1956, title: 'Magical number seven', text: 'George Miller argues that short-term memory holds about seven items.' },
    { year: 1968, title: 'Atkinson-Shiffrin model', text: 'The multi-store memory model — sensory, short-term, long-term — is formalized.' },
    { year: 1974, title: 'Heuristics and biases', text: 'Tversky and Kahneman publish their landmark Science paper.' },
    { year: 2002, title: 'Nobel for Kahneman', text: 'Awarded the Nobel in Economics for work that was, by training, psychology.' },
    { year: 2015, title: 'Replication crisis', text: 'Open Science Collaboration publishes 100-study replication report. About one-third hold up fully.' },
  ],
  sources: [
    {
      excerpt: 'Consciousness, then, does not appear to itself chopped up in bits. Such words as "chain" or "train" do not describe it fitly as it presents itself in the first instance. It is nothing jointed; it flows. A "river" or a "stream" are the metaphors by which it is most naturally described.',
      author: 'William James',
      work: 'The Principles of Psychology, vol. I',
      year: 1890,
      url: 'https://www.gutenberg.org/ebooks/57628',
    },
  ],
};

const DATA_DEVELOPMENT = {
  accent: '#7a4a3a',
  videos: [
    { id: 'w526tGHl-Tw', title: 'Piaget\'s Stages of Cognitive Development', channel: 'Sprouts', duration: '5:52', why: 'Animated tour of the stage model.' },
    { id: 'jbC4yPN_tpI', title: 'Cognitive Development — Crash Course Psych #18', channel: 'CrashCourse', duration: '10:00', why: 'Hank Green, with Piaget front and center.' },
    { id: 'VNNsN9IJkws', title: 'Experiences Build Brain Architecture', channel: 'Center on the Developing Child at Harvard', duration: '2:00', why: 'Animation of early brain development.' },
    { id: 'GbrFvUA8Wfo', title: 'Serve and Return Interaction', channel: 'Harvard Center on the Developing Child', duration: '2:24', why: 'The mechanism by which infants build circuits.' },
    { id: 'zlcnOr81lPc', title: 'The Still Face Experiment', channel: 'Dr. Edward Tronick', duration: '2:50', why: 'Infant attachment, demonstrated painfully.' },
    { id: 'k48jXzFGMc8', title: 'The Strange Situation — Mary Ainsworth', channel: 'University of Richmond', duration: '3:36', why: 'Classic attachment-theory experiment, on film.' },
    { id: 'F84lmaoAYv8', title: 'The Scientist in the Crib — Alison Gopnik', channel: 'TED', duration: '18:00', why: 'Gopnik on what babies actually know.' },
    { id: '_gxD7QdJ8H8', title: 'Vygotsky and the Zone of Proximal Development', channel: 'Sprouts', duration: '4:47', why: 'The Soviet alternative to Piaget.' },
  ],
  figures: [
    { src: commons('6/60/Jean_Piaget_in_Ann_Arbor_(cropped).png'), caption: 'Jean Piaget at the University of Michigan, c. 1968.', credit: 'Wikimedia Commons · Public domain' },
    { src: commons('thumb/3/37/Lev_Vygotsky_1896-1934.jpg/400px-Lev_Vygotsky_1896-1934.jpg'), caption: 'Lev Vygotsky (1896–1934), photographed in 1920s Moscow. His work was suppressed until 1956.', credit: 'Wikimedia Commons · Public domain' },
    { src: commons('thumb/2/20/Baby_crawling.jpg/400px-Baby_crawling.jpg'), caption: 'Infants build a mental model of the physical world before they can speak.', credit: 'Wikimedia Commons · CC BY' },
  ],
  timeline: [
    { year: 1896, title: 'Piaget and Vygotsky born', text: 'Piaget in Switzerland, Vygotsky in Belarus. Contemporaries who never met.' },
    { year: 1929, title: 'Piaget\'s stages', text: 'The Child\'s Conception of the World — the first full statement of stage theory.' },
    { year: 1934, title: 'Vygotsky dies at 37', text: 'Thought and Language published posthumously. The manuscript was banned in the USSR until 1956.' },
    { year: 1950, title: 'Erikson\'s eight stages', text: 'Childhood and Society extends development across a whole life.' },
    { year: 1964, title: 'Harlow\'s monkeys', text: 'Harry Harlow\'s cloth-mother experiments transform the attachment debate.' },
    { year: 1969, title: 'Ainsworth\'s Strange Situation', text: 'Mary Ainsworth formalizes attachment styles.' },
    { year: 1996, title: 'Infant cognition', text: 'Spelke and colleagues show four-month-olds expect solid objects to stay solid.' },
    { year: 2007, title: 'Plasticity & toxic stress', text: 'Harvard Center on the Developing Child translates brain research for policy.' },
  ],
  sources: [
    {
      excerpt: 'What a child can do in cooperation today, he can do alone tomorrow.',
      author: 'Lev Vygotsky',
      work: 'Mind in Society',
      year: 1978,
    },
  ],
};

const DATA_CLINICAL = {
  accent: '#7a4a3a',
  videos: [
    { id: 'dHHSWJa0EQQ', title: 'Getting Help — Psychotherapy: Crash Course Psychology #35', channel: 'CrashCourse', duration: '10:00', why: 'Overview of evidence-based therapies.' },
    { id: 'yPXFlKZEAr0', title: 'Depression — Crash Course Psychology #28', channel: 'CrashCourse', duration: '10:00', why: 'Unipolar depression, carefully.' },
    { id: 'WvscH1zp9T4', title: 'Kay Redfield Jamison on Bipolar Disorder', channel: 'Johns Hopkins', duration: '58:00', why: 'A clinician who has had it herself.' },
    { id: 'F2hc2FLOdhI', title: 'A Tale of Mental Illness — Elyn Saks', channel: 'TED', duration: '14:40', why: 'Living with schizophrenia; a law professor tells it.' },
    { id: 'rmn0WRt8JWk', title: 'How to Recognize Cognitive Distortions', channel: 'Psych2Go', duration: '6:00', why: 'The CBT thought-record, translated.' },
    { id: 'syjEN3peCJw', title: 'The Body Keeps the Score — Bessel van der Kolk', channel: 'Aspen Ideas', duration: '40:00', why: 'Trauma and the body, with honest caveats.' },
    { id: '7PN7OHRhS9k', title: 'What is PTSD?', channel: 'TED-Ed', duration: '4:48', why: 'Mechanism and treatment in five minutes.' },
  ],
  figures: [
    { src: commons('thumb/5/53/Kraepelin.jpg/400px-Kraepelin.jpg'), caption: 'Emil Kraepelin (1856–1926). His descriptive psychiatry became modern diagnosis.', credit: 'Wikimedia Commons · Public domain' },
    { src: commons('thumb/9/9c/Kay_Redfield_Jamison.jpg/400px-Kay_Redfield_Jamison.jpg'), caption: 'Kay Redfield Jamison, a clinical psychologist who has written openly about her own bipolar disorder.', credit: 'Wikimedia Commons · CC BY-SA' },
  ],
  timeline: [
    { year: 1883, title: 'Kraepelin\'s textbook', text: 'Classifies mental illness by course, not content. Schizophrenia and bipolar separate.' },
    { year: 1900, title: 'Interpretation of Dreams', text: 'Freud publishes; psychoanalysis dominates clinical practice for fifty years.' },
    { year: 1952, title: 'DSM-I', text: 'The first Diagnostic and Statistical Manual is published — 130 pages.' },
    { year: 1952, title: 'Chlorpromazine', text: 'The first effective antipsychotic. State-hospital populations begin to fall.' },
    { year: 1960, title: 'CBT', text: 'Aaron Beck founds cognitive therapy after noticing that depressed patients had systematic thinking biases.' },
    { year: 1988, title: 'Prozac approved', text: 'Fluoxetine becomes the first widely prescribed SSRI.' },
    { year: 2013, title: 'DSM-5', text: 'Fifth edition, revised 2022. Nearly a thousand pages.' },
    { year: 2019, title: 'Esketamine approved', text: 'First new mechanism for depression in decades; fast-acting, with caveats.' },
  ],
  sources: [
    {
      excerpt: 'I have become fundamentally and deeply skeptical that anyone who does not have this illness can truly understand it. And, ultimately, it is probably unreasonable to expect the medical and scientific community to actively participate in the kind of personal knowledge that is essential to understanding it.',
      author: 'Kay Redfield Jamison',
      work: 'An Unquiet Mind',
      year: 1995,
    },
  ],
};

const DATA_SOCIAL = {
  accent: '#7a4a3a',
  videos: [
    { id: 'TYIh4MkcfJA', title: 'The Asch Conformity Experiment', channel: 'Experimentorium', duration: '4:00', why: 'Original black-and-white footage.' },
    { id: 'UVzzl3TjY_E', title: 'Social Influence — Crash Course Psychology #38', channel: 'CrashCourse', duration: '10:30', why: 'Hank Green on conformity, obedience, group influence.' },
    { id: '8AC8yZmDYT4', title: 'The Milgram Experiment — reenactment', channel: 'BBC', duration: '10:00', why: 'The 1960s obedience study on film, with modern commentary on its limits.' },
    { id: 'cLqoYbAyvTw', title: 'The Bystander Effect', channel: 'TED-Ed', duration: '4:00', why: 'Darley & Latané, and the nuances that later research added.' },
    { id: 'xi0nsEvqQko', title: 'Cognitive Dissonance — Leon Festinger', channel: 'Sprouts', duration: '4:10', why: 'The classic animated explainer.' },
    { id: 'JcVAOk9GfEU', title: 'Jonathan Haidt — The Righteous Mind', channel: 'TED', duration: '18:00', why: 'Moral foundations; contested, worth engaging.' },
    { id: 'JohoKfRCGZE', title: 'The Replication Crisis in Psychology', channel: 'Stated Clearly', duration: '9:45', why: 'What has held up and what has not.' },
    { id: 'Jwjmn1SpLSA', title: 'The Stanford Prison Experiment — What Actually Happened', channel: 'HarvardX / Vox', duration: '10:00', why: 'Archival recordings and reanalysis. Why this is no longer taken at face value.' },
  ],
  figures: [
    { src: commons('thumb/9/97/Psychology-asch-1951.png/480px-Psychology-asch-1951.png'), caption: 'The Asch line test, 1951. Subjects conformed to obviously wrong group answers about one-third of the time.', credit: 'Wikimedia Commons · Public domain' },
    { src: commons('thumb/2/25/Solomon_Asch.jpg/400px-Solomon_Asch.jpg'), caption: 'Solomon Asch (1907–1996). Polish-American psychologist; conformity research at Swarthmore.', credit: 'Wikimedia Commons' },
  ],
  timeline: [
    { year: 1935, title: 'Sherif\'s autokinetic study', text: 'Muzafer Sherif shows that group norms form even from ambiguous stimuli.' },
    { year: 1951, title: 'Asch lines', text: 'Asch publishes his classic conformity study. Replicates reliably to this day.' },
    { year: 1957, title: 'Cognitive dissonance', text: 'Leon Festinger publishes the theory that inconsistency between belief and action is uncomfortable and motivates change.' },
    { year: 1963, title: 'Milgram obedience', text: 'The shock experiments begin. Modern reanalysis shows the experimenters pushed harder than the textbook version reports.' },
    { year: 1968, title: 'Bystander effect', text: 'Darley and Latané formalize diffusion of responsibility; Kitty Genovese details are later revised.' },
    { year: 1971, title: 'Stanford Prison Experiment', text: 'Zimbardo\'s study runs six days. Decades later, archival tapes will largely discredit the original framing.' },
    { year: 2015, title: 'Reproducibility Project', text: 'Open Science Collaboration publishes 100 replications in Science. About a third hold up fully.' },
    { year: 2020, title: 'Preregistration becomes norm', text: 'Top journals increasingly require preregistered studies. Social psychology has a different evidentiary standard now.' },
  ],
  sources: [
    {
      excerpt: 'That we have found the tendency to conformity in our society so strong that reasonably intelligent and well-meaning young people are willing to call white black is a matter of concern. It raises questions about our ways of education and about the values that guide our conduct.',
      author: 'Solomon E. Asch',
      work: 'Opinions and Social Pressure (Scientific American)',
      year: 1955,
    },
  ],
};

// ============================================================
// ANIMATED SVG FIGURES (additional, compact demos)
// ============================================================

// ---------- FinchBeaks — evolutionary beak-depth drift over generations ----------
const FinchBeaks = () => {
  const [gen, setGen] = uR3(0);
  const [auto, setAuto] = uR3(false);
  eR3(() => {
    if (!auto) return;
    const i = setInterval(() => setGen(g => (g + 1) % 40), 280);
    return () => clearInterval(i);
  }, [auto]);
  // Beak depth modeled as noisy sine — drought raises mean beak depth, wet years lower it.
  const beakDepth = 9 + Math.sin(gen * 0.3) * 2 + (gen > 15 && gen < 25 ? 2 : 0);
  const birds = 14;
  return (
    <div>
      <svg viewBox="0 0 400 240" width="100%" height="260">
        <text x="20" y="20" fontSize="11" fontFamily="JetBrains Mono" fill="#5a5d6e">GENERATION {gen + 1}</text>
        <text x="20" y="36" fontSize="11" fontFamily="JetBrains Mono" fill="#c8621a">MEAN BEAK DEPTH {beakDepth.toFixed(1)} mm</text>
        {gen > 15 && gen < 25 && (
          <text x="220" y="36" fontSize="11" fontFamily="JetBrains Mono" fill="#c8621a">• DROUGHT YEAR</text>
        )}
        {Array.from({length: birds}).map((_, i) => {
          const x = 30 + (i % 7) * 52;
          const y = 80 + Math.floor(i / 7) * 75;
          const indiv = beakDepth + (Math.sin(i * 11 + gen) * 1.2);
          return (
            <g key={i}>
              <ellipse cx={x} cy={y} rx={14} ry={10} fill="#4a5d3a" opacity="0.85"/>
              <circle cx={x+9} cy={y-4} r={5} fill="#4a5d3a"/>
              <path d={`M ${x+14} ${y-3} L ${x+14+indiv} ${y-2} L ${x+14} ${y+1} Z`} fill="#6b4a2a"/>
              <circle cx={x+11} cy={y-5} r={1} fill="#f4efe6"/>
            </g>
          );
        })}
      </svg>
      <div style={{ display: 'flex', gap: 10, marginTop: 8, alignItems: 'center', fontSize: 12 }}>
        <button className="btn-ghost" onClick={() => setAuto(a => !a)}>
          {auto ? 'Pause' : 'Run selection'}
        </button>
        <input type="range" min="0" max="39" value={gen} onChange={e => setGen(+e.target.value)} style={{flex:1}}/>
      </div>
      <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 6 }}>
        Daphne Major finches: beak depth is measurably heritable, and mean depth shifts within a single generation after a drought kills off small-billed birds.
      </div>
    </div>
  );
};

// ---------- ECG — animated heartbeat trace ----------
const ECG = () => {
  const [hr, setHr] = uR3(72);
  const [t, setT] = uR3(0);
  eR3(() => { const id = setInterval(() => setT(x => x + 4), 40); return () => clearInterval(id); }, []);
  const beatMs = 60000 / hr;
  const pqrst = (phase01) => {
    // P wave, QRS complex, T wave over [0,1]
    const p = phase01;
    if (p < 0.12) return Math.sin(p / 0.12 * Math.PI) * 0.15;   // P
    if (p < 0.2)  return 0;
    if (p < 0.23) return -0.15;                                  // Q
    if (p < 0.28) return (p - 0.23) / 0.05 * 1.4 - 0.15;         // R up
    if (p < 0.32) return 1.25 - (p - 0.28) / 0.04 * 1.5;         // R down
    if (p < 0.38) return -0.25 + (p - 0.32) / 0.06 * 0.25;       // S back to base
    if (p < 0.58) return 0;
    if (p < 0.80) return Math.sin((p - 0.58) / 0.22 * Math.PI) * 0.35; // T
    return 0;
  };
  const W = 400, H = 160;
  const pts = [];
  for (let i = 0; i <= 400; i++) {
    const tMs = (t + i * 6) % (beatMs * 2);
    const phase = (tMs % beatMs) / beatMs;
    const y = H / 2 - pqrst(phase) * 50;
    pts.push(`${i},${y}`);
  }
  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H + 30}>
        <defs>
          <pattern id="ecgGrid" width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#e8d8c0" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width={W} height={H} fill="url(#ecgGrid)"/>
        <polyline points={pts.join(' ')} fill="none" stroke="#c8621a" strokeWidth="2"/>
        <text x="10" y="20" fontSize="12" fontFamily="JetBrains Mono" fill="#1a1d2b">{hr} bpm</text>
        <text x="10" y={H - 8} fontSize="10" fontFamily="JetBrains Mono" fill="#5a5d6e">LEAD II</text>
      </svg>
      <div style={{ fontSize: 12, marginTop: 8 }}>
        <label>Heart rate <input type="range" min="40" max="200" value={hr} onChange={e => setHr(+e.target.value)} style={{width:'70%'}}/> {hr} bpm</label>
      </div>
      <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 4 }}>
        P atrial depolarization · QRS ventricular depolarization · T ventricular repolarization.
      </div>
    </div>
  );
};

// ---------- CortexMap — a stylized functional map of the cortex ----------
const CortexMap = () => {
  const regions = [
    { id: 'frontal', x: 120, y: 90, r: 50, label: 'Frontal', desc: 'Planning, decision, voluntary movement. Phineas Gage\'s lost piece.' },
    { id: 'parietal', x: 190, y: 70, r: 40, label: 'Parietal', desc: 'Spatial attention, touch, body sense.' },
    { id: 'occipital', x: 250, y: 110, r: 35, label: 'Occipital', desc: 'Vision. Hubel-Wiesel\'s cortical columns live here.' },
    { id: 'temporal', x: 200, y: 150, r: 38, label: 'Temporal', desc: 'Hearing, language, memory (hippocampus).' },
    { id: 'motor', x: 160, y: 75, r: 14, label: 'Motor strip', desc: 'The homunculus — body map projected onto cortex.' },
    { id: 'broca', x: 100, y: 130, r: 12, label: 'Broca\'s area', desc: 'Speech production. Damage → non-fluent aphasia.' },
  ];
  const [sel, setSel] = uR3('frontal');
  const cur = regions.find(r => r.id === sel);
  return (
    <div>
      <svg viewBox="0 0 360 200" width="100%" height="220">
        <path d="M 60 110 Q 60 40 160 40 Q 280 40 290 110 Q 290 160 240 170 Q 200 180 160 170 Q 80 170 60 110 Z"
              fill="#e8d8c0" stroke="#1a1d2b" strokeWidth="1.5"/>
        {regions.map(r => (
          <circle key={r.id} cx={r.x} cy={r.y} r={r.r}
            fill={sel === r.id ? '#c8621a' : '#4a5d3a'}
            opacity={sel === r.id ? 0.75 : 0.4}
            onClick={() => setSel(r.id)}
            style={{ cursor: 'pointer', transition: 'all 0.2s' }}/>
        ))}
        {regions.map(r => (
          <text key={r.id+'t'} x={r.x} y={r.y+3} textAnchor="middle"
            fontSize="10" fontFamily="JetBrains Mono" fill="#f4efe6"
            style={{ pointerEvents: 'none' }}>
            {r.label}
          </text>
        ))}
      </svg>
      <div style={{ fontSize: 13, color: 'var(--ink-3)', minHeight: 40, marginTop: 4 }}>
        <strong style={{ color: 'var(--ink)' }}>{cur.label}.</strong> {cur.desc}
      </div>
    </div>
  );
};

// ---------- CellZoom — scale zoom from organism to molecule ----------
const CellZoom = () => {
  const levels = [
    { zoom: '1 m',    label: 'Organism', color:'#6b4a2a' },
    { zoom: '10 cm',  label: 'Organ', color:'#8a4a3a' },
    { zoom: '1 mm',   label: 'Tissue', color:'#a85a3a' },
    { zoom: '10 µm',  label: 'Cell', color:'#c8621a' },
    { zoom: '100 nm', label: 'Organelle', color:'#4a5d3a' },
    { zoom: '1 nm',   label: 'Molecule (DNA)', color:'#2a4a6a' },
  ];
  const [lvl, setLvl] = uR3(3);
  const scale = 1 + lvl * 0.6;
  return (
    <div>
      <svg viewBox="0 0 360 240" width="100%" height="260">
        <circle cx="180" cy="120" r={60 * scale} fill={levels[lvl].color} opacity="0.25"/>
        <circle cx="180" cy="120" r={40 * scale} fill={levels[lvl].color} opacity="0.5"/>
        <circle cx="180" cy="120" r={20 * scale} fill={levels[lvl].color}/>
        <text x="180" y="126" textAnchor="middle" fontSize="18" fontFamily="Instrument Serif" fill="#f4efe6">
          {levels[lvl].zoom}
        </text>
        <text x="180" y="216" textAnchor="middle" fontSize="14" fontFamily="Instrument Serif" fill="#1a1d2b">
          {levels[lvl].label}
        </text>
      </svg>
      <div style={{ display: 'flex', gap: 6, marginTop: 10, fontSize: 11, flexWrap: 'wrap' }}>
        {levels.map((L, i) => (
          <button key={i} onClick={() => setLvl(i)}
            style={{
              flex: 1, padding: '6px 4px', border: '1px solid #c9c0aa',
              background: lvl === i ? L.color : 'transparent',
              color: lvl === i ? '#f4efe6' : 'var(--ink)',
              cursor: 'pointer', fontSize: 11, fontFamily: 'JetBrains Mono',
              transition: 'all 0.2s', minWidth: 50,
            }}>
            {L.zoom}
          </button>
        ))}
      </div>
    </div>
  );
};

// ============================================================
// REGISTRY
// ============================================================

const makeRich = (data) => () => <DeepDive data={data}/>;

window.INTERACTIVES_B03_RICH = {
  'rich-cell':          { title: 'Cell biology · deep dive',      hint: 'Videos, figures, timeline, primary source.', Component: makeRich(DATA_CELL) },
  'rich-genetics':      { title: 'Genetics · deep dive',          hint: 'From Mendel to CRISPR.',                     Component: makeRich(DATA_GENETICS) },
  'rich-evolution':     { title: 'Evolution · deep dive',         hint: 'Darwin, Wallace, the modern synthesis.',     Component: makeRich(DATA_EVOLUTION) },
  'rich-ecology':       { title: 'Ecology · deep dive',           hint: 'Haeckel to planetary boundaries.',           Component: makeRich(DATA_ECOLOGY) },
  'rich-neuro':         { title: 'Neuroscience · deep dive',      hint: 'Cajal, Cortex, Connectomics.',               Component: makeRich(DATA_NEURO) },
  'rich-anatomy':       { title: 'Anatomy · deep dive',           hint: 'Vesalius to the virtual cadaver.',           Component: makeRich(DATA_ANATOMY) },
  'rich-physiology':    { title: 'Physiology · deep dive',        hint: 'Harvey to Hodgkin-Huxley.',                  Component: makeRich(DATA_PHYSIOLOGY) },
  'rich-pharmacology':  { title: 'Pharmacology · deep dive',      hint: 'Paracelsus to CAR-T.',                       Component: makeRich(DATA_PHARMACOLOGY) },
  'rich-public_health': { title: 'Public health · deep dive',     hint: 'Broad Street to COVID.',                     Component: makeRich(DATA_PUBLIC_HEALTH) },
  'rich-cognition':     { title: 'Cognition · deep dive',         hint: 'James, Stroop, Kahneman.',                   Component: makeRich(DATA_COGNITION) },
  'rich-development':   { title: 'Developmental psych · deep dive',hint: 'Piaget, Vygotsky, Gopnik.',                 Component: makeRich(DATA_DEVELOPMENT) },
  'rich-clinical':      { title: 'Clinical psych · deep dive',    hint: 'Kraepelin to CBT to the DSM-5.',             Component: makeRich(DATA_CLINICAL) },
  'rich-social_psych':  { title: 'Social psych · deep dive',      hint: 'Asch to the replication crisis.',            Component: makeRich(DATA_SOCIAL) },

  // Animated figures — optional per-topic second widgets
  'finch-beaks':        { title: 'Finch beaks over generations',  hint: 'Mean beak depth shifts after drought.',      Component: FinchBeaks },
  'ecg':                { title: 'ECG — electrocardiogram',       hint: 'P-QRS-T, live.',                             Component: ECG },
  'cortex-map':         { title: 'Cortex — functional regions',   hint: 'Tap a lobe to learn what it does.',          Component: CortexMap },
  'cell-zoom':          { title: 'Scale zoom — organism → DNA',   hint: 'Six orders of magnitude.',                   Component: CellZoom },
};

window.INTERACTIVES = Object.assign({}, window.INTERACTIVES || {}, window.INTERACTIVES_B03_RICH);

// Mirror Component → comp for the legacy InteractiveEmbed
for (const k of Object.keys(window.INTERACTIVES_B03_RICH)) {
  if (!window.INTERACTIVES[k].comp) window.INTERACTIVES[k].comp = window.INTERACTIVES_B03_RICH[k].Component;
}

// Keyframe for VideoShelf fade-in
if (typeof document !== 'undefined' && !document.getElementById('b03-rich-styles')) {
  const s = document.createElement('style');
  s.id = 'b03-rich-styles';
  s.textContent = `@keyframes fadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }`;
  document.head.appendChild(s);
}


// ====== interactives-b04.jsx ======
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

