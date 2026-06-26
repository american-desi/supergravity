// ============================================
// HeroVisual — three scenes, cycles every 7s
//   Scene 1: Drone FPV over wildflower field
//   Scene 2: Cosmos with gravity masses + particles
//   Scene 3: Living mathematics (functions, fractals, curves)
// ============================================

const HeroVisual = () => {
  const canvasRef = React.useRef(null);
  const rafRef = React.useRef(0);
  const sceneRef = React.useRef(0);
  const [sceneIdx, setSceneIdx] = React.useState(0);
  const pointerRef = React.useRef({ x: null, y: null, active: false });

  const SCENES = ['flowers', 'cosmos', 'math'];
  const SCENE_LABELS = ['I · Field', 'II · Cosmos', 'III · Numbers'];
  const DURATION = 7000;
  const FADE = 900;

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0, DPR = 1;

    const resize = () => {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      W = rect.width; H = rect.height;
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const onMove = (ev) => {
      const rect = canvas.getBoundingClientRect();
      const touch = ev.touches?.[0];
      const cx = (touch ? touch.clientX : ev.clientX) - rect.left;
      const cy = (touch ? touch.clientY : ev.clientY) - rect.top;
      pointerRef.current.x = cx / rect.width;
      pointerRef.current.y = cy / rect.height;
      pointerRef.current.active = true;
    };
    const onLeave = () => { pointerRef.current.active = false; };
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('touchmove', onMove, { passive: true });
    canvas.addEventListener('mouseleave', onLeave);

    // ============================================
    // SCENE 1 — Drone FPV over wildflower field
    // Pseudo-3D: horizon + ground that scrolls + flowers parallaxed
    // ============================================
    const flowers = [];
    const NUM_FLOWERS = 120;
    const FLOWER_COLORS = [
      '#ff6b8e', // rose pink
      '#ffb13d', // marigold
      '#f5e04a', // yellow
      '#a366e0', // violet
      '#ffffff', // daisy
      '#ff4d4d', // red poppy
      '#ff9dbf', // soft pink
      '#6fd0e8', // forget-me-not
    ];
    for (let i = 0; i < NUM_FLOWERS; i++) {
      flowers.push({
        x: Math.random() * 2 - 0.5,          // world x (-0.5 to 1.5)
        z: Math.random(),                     // depth (0=near, 1=far)
        color: FLOWER_COLORS[Math.floor(Math.random() * FLOWER_COLORS.length)],
        petals: 4 + Math.floor(Math.random() * 4),
        size: 0.6 + Math.random() * 0.6,
        sway: Math.random() * Math.PI * 2,
      });
    }
    // Grass blades
    const blades = [];
    for (let i = 0; i < 260; i++) {
      blades.push({
        x: Math.random() * 2 - 0.5,
        z: Math.random(),
        h: 0.5 + Math.random() * 0.6,
        sway: Math.random() * Math.PI * 2,
      });
    }
    // Clouds
    const clouds = Array.from({ length: 5 }, () => ({
      x: Math.random(),
      y: 0.1 + Math.random() * 0.25,
      w: 0.2 + Math.random() * 0.25,
      speed: 0.00002 + Math.random() * 0.00003,
    }));
    // Birds (tiny V-shapes, far away)
    const birds = Array.from({ length: 3 }, () => ({
      x: Math.random(),
      y: 0.15 + Math.random() * 0.15,
      speed: 0.00003 + Math.random() * 0.00002,
      phase: Math.random() * Math.PI * 2,
    }));

    const drawFlowersScene = (t, alpha) => {
      ctx.globalAlpha = alpha;
      // Sky gradient (warm evening)
      const sky = ctx.createLinearGradient(0, 0, 0, H * 0.7);
      sky.addColorStop(0, '#f5c078');     // horizon glow
      sky.addColorStop(0.35, '#f28a5c');  // amber
      sky.addColorStop(0.7, '#c45a6e');   // sunset rose
      sky.addColorStop(1, '#5e3a6e');     // violet-dusk
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, W, H);

      // Sun
      const sunX = W * 0.72;
      const sunY = H * 0.48;
      const sunR = H * 0.14;
      const sunGrad = ctx.createRadialGradient(sunX, sunY, 0, sunX, sunY, sunR * 2);
      sunGrad.addColorStop(0, 'rgba(255,240,180,0.95)');
      sunGrad.addColorStop(0.5, 'rgba(255,190,110,0.4)');
      sunGrad.addColorStop(1, 'rgba(255,140,90,0)');
      ctx.fillStyle = sunGrad;
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunR * 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#fff2c4';
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunR * 0.6, 0, Math.PI * 2);
      ctx.fill();

      // Clouds
      for (const c of clouds) {
        c.x += c.speed * 16;
        if (c.x > 1.3) c.x = -0.3;
        const cx = c.x * W;
        const cy = c.y * H;
        const cw = c.w * W;
        const ch = cw * 0.3;
        ctx.fillStyle = 'rgba(255,235,210,0.5)';
        for (let k = 0; k < 4; k++) {
          ctx.beginPath();
          ctx.arc(cx + k * cw * 0.22 - cw * 0.3, cy + Math.sin(k) * ch * 0.1, ch * (0.6 + (k % 2) * 0.2), 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Birds
      for (const b of birds) {
        b.x += b.speed * 16;
        if (b.x > 1.1) b.x = -0.1;
        const bx = b.x * W;
        const by = b.y * H + Math.sin(t * 0.003 + b.phase) * 4;
        const flap = Math.sin(t * 0.01 + b.phase) * 4;
        ctx.strokeStyle = 'rgba(70,40,60,0.7)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(bx - 6, by + flap);
        ctx.lineTo(bx, by);
        ctx.lineTo(bx + 6, by + flap);
        ctx.stroke();
      }

      // Ground: trapezoidal field with gradient + scrolling lines
      const horizonY = H * 0.55;
      const ground = ctx.createLinearGradient(0, horizonY, 0, H);
      ground.addColorStop(0, '#6a8c3a');
      ground.addColorStop(0.4, '#4a7030');
      ground.addColorStop(1, '#2f4a20');
      ctx.fillStyle = ground;
      ctx.fillRect(0, horizonY, W, H - horizonY);

      // Grass blades — depth-sorted (far to near)
      const sortedBlades = [...blades].sort((a, b) => b.z - a.z);
      const scrollSpeed = 0.00025;
      for (const g of sortedBlades) {
        // Animate forward (decrease z)
        g.z -= scrollSpeed * 16;
        if (g.z < 0) { g.z += 1; g.x = Math.random() * 2 - 0.5; }
        const depth = 1 - g.z;
        // Perspective: map z to y and scale
        const groundY = horizonY + (H - horizonY) * Math.pow(depth, 0.6);
        const persp = Math.pow(depth, 1.2);
        const screenX = (g.x - 0.5) * W * (0.5 + persp * 2.5) + W / 2;
        if (screenX < -20 || screenX > W + 20) continue;
        const sway = Math.sin(t * 0.003 + g.sway) * 3 * persp;
        const bladeH = g.h * 30 * persp;
        ctx.strokeStyle = `rgba(${80 + depth * 60}, ${140 + depth * 60}, ${60 + depth * 40}, ${0.4 + depth * 0.5})`;
        ctx.lineWidth = 1 + persp * 1.5;
        ctx.beginPath();
        ctx.moveTo(screenX, groundY);
        ctx.lineTo(screenX + sway, groundY - bladeH);
        ctx.stroke();
      }

      // Flowers — depth-sorted & animated forward
      const sortedFlowers = [...flowers].sort((a, b) => b.z - a.z);
      for (const f of sortedFlowers) {
        f.z -= scrollSpeed * 16;
        if (f.z < 0) { f.z += 1; f.x = Math.random() * 2 - 0.5; }
        const depth = 1 - f.z;
        const groundY = horizonY + (H - horizonY) * Math.pow(depth, 0.6);
        const persp = Math.pow(depth, 1.2);
        const screenX = (f.x - 0.5) * W * (0.5 + persp * 2.5) + W / 2;
        if (screenX < -40 || screenX > W + 40) continue;
        const sway = Math.sin(t * 0.003 + f.sway) * 4 * persp;
        const stemH = 20 * persp;
        const flowerY = groundY - stemH;
        const flowerR = f.size * 10 * persp;

        // Stem
        ctx.strokeStyle = `rgba(60,110,40,${0.5 + depth * 0.4})`;
        ctx.lineWidth = 1 + persp;
        ctx.beginPath();
        ctx.moveTo(screenX, groundY);
        ctx.quadraticCurveTo(screenX + sway * 0.5, groundY - stemH * 0.5, screenX + sway, flowerY);
        ctx.stroke();

        // Petals
        for (let p = 0; p < f.petals; p++) {
          const ang = (p / f.petals) * Math.PI * 2 + t * 0.0006;
          const pr = flowerR * 0.9;
          ctx.fillStyle = f.color + 'e0';
          ctx.beginPath();
          ctx.ellipse(screenX + sway + Math.cos(ang) * pr * 0.5, flowerY + Math.sin(ang) * pr * 0.5, pr * 0.6, pr * 0.35, ang, 0, Math.PI * 2);
          ctx.fill();
        }
        // Center
        ctx.fillStyle = '#ffd84d';
        ctx.beginPath();
        ctx.arc(screenX + sway, flowerY, flowerR * 0.3, 0, Math.PI * 2);
        ctx.fill();
      }

      // Lens vignette + slight motion blur hint
      const vign = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.7);
      vign.addColorStop(0, 'rgba(0,0,0,0)');
      vign.addColorStop(1, 'rgba(0,0,0,0.35)');
      ctx.fillStyle = vign;
      ctx.fillRect(0, 0, W, H);

      // Subtle FPV overlay: crosshair + corner readouts
      ctx.globalAlpha = alpha * 0.4;
      ctx.strokeStyle = 'rgba(255,240,200,0.4)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(W / 2 - 20, H / 2); ctx.lineTo(W / 2 - 6, H / 2);
      ctx.moveTo(W / 2 + 6, H / 2); ctx.lineTo(W / 2 + 20, H / 2);
      ctx.moveTo(W / 2, H / 2 - 20); ctx.lineTo(W / 2, H / 2 - 6);
      ctx.moveTo(W / 2, H / 2 + 6); ctx.lineTo(W / 2, H / 2 + 20);
      ctx.stroke();
      ctx.font = '10px JetBrains Mono, monospace';
      ctx.fillStyle = 'rgba(255,240,200,0.6)';
      ctx.fillText(`◉ REC · ${(t / 1000).toFixed(1)}s`, 16, 20);
      ctx.fillText(`ALT ${(20 + Math.sin(t * 0.001) * 5).toFixed(1)}m`, W - 80, 20);

      ctx.globalAlpha = 1;
    };

    // ============================================
    // SCENE 2 — Cosmos (gravity masses, particles, comets)
    // ============================================
    const masses = [
      { bx: 0.28, by: 0.55, m: 1.00, hue: '#e09a5a', r: 26, seed: Math.random() * 10 },
      { bx: 0.72, by: 0.42, m: 0.6,  hue: '#ff6b8e', r: 20, seed: Math.random() * 10 },
      { bx: 0.55, by: 0.78, m: 0.4,  hue: '#8b5fc4', r: 14, seed: Math.random() * 10 },
    ];
    const massSeeds = masses.map((m, i) => ({
      ax: 0.05 + i * 0.012, ay: 0.04 + i * 0.009,
      fx: 0.00016 + i * 0.00002, fy: 0.00021 + i * 0.00003,
      px: Math.random() * Math.PI * 2, py: Math.random() * Math.PI * 2,
    }));
    const stars = Array.from({ length: 160 }, () => ({
      x: Math.random(), y: Math.random(),
      s: Math.random() * 1.4 + 0.2,
      tw: Math.random() * Math.PI * 2, tf: 0.0008 + Math.random() * 0.0025,
    }));
    const orbiters = [];
    for (let i = 0; i < 14; i++) {
      orbiters.push({
        massIdx: i % masses.length,
        r: 0.05 + Math.random() * 0.22,
        theta: Math.random() * Math.PI * 2,
        speed: (Math.random() > 0.5 ? 1 : -1) * (0.0006 + Math.random() * 0.0015),
        size: 0.8 + Math.random() * 2,
        hue: ['#ffd89a', '#e09a5a', '#ff6b8e', '#8b5fc4', '#4fb8a8'][i % 5],
        trail: [],
      });
    }
    const dust = Array.from({ length: 100 }, () => ({
      x: Math.random(), y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0003,
      s: 0.5 + Math.random() * 1.5,
      hue: ['#ffd89a', '#e09a5a', '#ff6b8e', '#4fb8a8'][Math.floor(Math.random() * 4)],
    }));
    const comets = [];
    let nextComet = 1500 + Math.random() * 2500;

    const drawCosmosScene = (t, alpha, dt) => {
      ctx.globalAlpha = alpha;
      // Deep space
      ctx.fillStyle = '#080b1a';
      ctx.fillRect(0, 0, W, H);

      // Nebula wash
      const neb = ctx.createRadialGradient(W * 0.3, H * 0.4, 0, W * 0.3, H * 0.4, W * 0.7);
      neb.addColorStop(0, 'rgba(139,95,196,0.15)');
      neb.addColorStop(0.5, 'rgba(232,92,122,0.08)');
      neb.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = neb;
      ctx.fillRect(0, 0, W, H);

      // Stars with twinkle
      ctx.globalCompositeOperation = 'lighter';
      for (const s of stars) {
        const tw = 0.3 + (Math.sin(t * s.tf + s.tw) * 0.5 + 0.5) * 0.7;
        ctx.fillStyle = `rgba(255,240,220,${(tw * alpha).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(s.x * W, s.y * H, s.s, 0, Math.PI * 2);
        ctx.fill();
      }

      // Move masses
      const activeMasses = masses.map((m, i) => {
        const seed = massSeeds[i];
        return {
          ...m,
          x: m.bx + Math.sin(t * seed.fx + seed.px) * seed.ax,
          y: m.by + Math.cos(t * seed.fy + seed.py) * seed.ay,
          pulse: 1 + Math.sin(t * 0.002 + m.seed) * 0.2,
        };
      });

      // Warped grid
      ctx.lineWidth = 0.5;
      const COLS = 22, ROWS = 12;
      for (let r = 0; r <= ROWS; r++) {
        const ny = r / ROWS;
        ctx.beginPath();
        for (let c = 0; c <= COLS; c++) {
          const nx = c / COLS;
          let dx = 0, dy = 0;
          for (const m of activeMasses) {
            const rx = nx - m.x, ry = ny - m.y;
            const r2 = rx * rx + ry * ry + 0.005;
            const f = (m.m * 0.018) / r2;
            dx -= rx * f; dy -= ry * f;
          }
          const x = (nx + dx) * W, y = (ny + dy) * H;
          if (c === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(224,154,90,${(0.12 * alpha).toFixed(3)})`;
        ctx.stroke();
      }
      for (let c = 0; c <= COLS; c++) {
        const nx = c / COLS;
        ctx.beginPath();
        for (let r = 0; r <= ROWS; r++) {
          const ny = r / ROWS;
          let dx = 0, dy = 0;
          for (const m of activeMasses) {
            const rx = nx - m.x, ry = ny - m.y;
            const r2 = rx * rx + ry * ry + 0.005;
            const f = (m.m * 0.018) / r2;
            dx -= rx * f; dy -= ry * f;
          }
          const x = (nx + dx) * W, y = (ny + dy) * H;
          if (r === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(255,216,154,${(0.08 * alpha).toFixed(3)})`;
        ctx.stroke();
      }

      // Masses
      for (const m of activeMasses) {
        const cx = m.x * W, cy = m.y * H, rd = m.r * m.pulse;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, rd * 3);
        grad.addColorStop(0, m.hue);
        grad.addColorStop(0.3, m.hue + 'aa');
        grad.addColorStop(1, m.hue + '00');
        ctx.fillStyle = grad;
        ctx.beginPath(); ctx.arc(cx, cy, rd * 3, 0, Math.PI * 2); ctx.fill();
        // Core
        ctx.fillStyle = '#fff3d0';
        ctx.beginPath(); ctx.arc(cx, cy, Math.max(2, m.m * 5), 0, Math.PI * 2); ctx.fill();
      }

      // Orbiters
      for (const o of orbiters) {
        const m = activeMasses[o.massIdx];
        o.theta += o.speed * dt;
        const ox = m.x + Math.cos(o.theta) * o.r;
        const oy = m.y + Math.sin(o.theta) * o.r * 0.5;
        o.trail.push({ x: ox, y: oy });
        if (o.trail.length > 18) o.trail.shift();
        for (let i = 0; i < o.trail.length - 1; i++) {
          const a = (i / o.trail.length);
          const p1 = o.trail[i], p2 = o.trail[i + 1];
          ctx.strokeStyle = o.hue + Math.floor(a * 140 * alpha).toString(16).padStart(2, '0');
          ctx.lineWidth = o.size * a * 0.8;
          ctx.beginPath(); ctx.moveTo(p1.x * W, p1.y * H); ctx.lineTo(p2.x * W, p2.y * H); ctx.stroke();
        }
        ctx.fillStyle = o.hue;
        ctx.beginPath(); ctx.arc(ox * W, oy * H, o.size, 0, Math.PI * 2); ctx.fill();
      }

      // Dust
      for (const p of dust) {
        for (const m of activeMasses) {
          const rx = m.x - p.x, ry = m.y - p.y;
          const r2 = rx * rx + ry * ry + 0.001;
          const f = (m.m * 0.00000012) / r2;
          p.vx += rx * f; p.vy += ry * f;
        }
        p.vx *= 0.995; p.vy *= 0.995;
        p.x += p.vx; p.y += p.vy;
        if (p.x < -0.05 || p.x > 1.05 || p.y < -0.05 || p.y > 1.05) {
          p.x = Math.random(); p.y = Math.random();
          p.vx = (Math.random() - 0.5) * 0.0003;
          p.vy = (Math.random() - 0.5) * 0.0003;
        }
        const px = p.x * W, py = p.y * H;
        const speed = Math.hypot(p.vx, p.vy);
        const br = Math.min(1, 0.35 + speed * 500);
        ctx.fillStyle = p.hue + Math.floor(br * 200 * alpha).toString(16).padStart(2, '0');
        ctx.beginPath(); ctx.arc(px, py, p.s, 0, Math.PI * 2); ctx.fill();
      }

      // Comets
      nextComet -= dt;
      if (nextComet <= 0) {
        const fromLeft = Math.random() > 0.5;
        comets.push({
          x: fromLeft ? -0.05 : 1.05, y: Math.random() * 0.7 + 0.1,
          vx: (fromLeft ? 1 : -1) * (0.003 + Math.random() * 0.004),
          vy: (Math.random() - 0.5) * 0.0015,
          life: 1, hue: Math.random() > 0.5 ? '#ffd89a' : '#4fb8a8',
          size: 1.5 + Math.random() * 2,
        });
        nextComet = 1500 + Math.random() * 2500;
      }
      for (let i = comets.length - 1; i >= 0; i--) {
        const c = comets[i];
        c.x += c.vx * (dt / 16);
        c.y += c.vy * (dt / 16);
        c.life -= 0.005 * (dt / 16);
        if (c.life <= 0 || c.x < -0.15 || c.x > 1.15) { comets.splice(i, 1); continue; }
        const cx = c.x * W, cy = c.y * H;
        const grad = ctx.createLinearGradient(cx, cy, cx - c.vx * W * 30, cy - c.vy * H * 30);
        grad.addColorStop(0, c.hue);
        grad.addColorStop(0.5, c.hue + '66');
        grad.addColorStop(1, c.hue + '00');
        ctx.strokeStyle = grad; ctx.lineWidth = c.size * 1.5;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx - c.vx * W * 30, cy - c.vy * H * 30); ctx.stroke();
        ctx.fillStyle = c.hue;
        ctx.beginPath(); ctx.arc(cx, cy, c.size * 1.2, 0, Math.PI * 2); ctx.fill();
      }

      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 1;
    };

    // ============================================
    // SCENE 3 — Living mathematics
    // Rotating Fourier-like sum, Lissajous, golden spiral, animated graph
    // ============================================
    const mathParticles = Array.from({ length: 200 }, () => ({
      x: Math.random(), y: Math.random(),
      vx: 0, vy: 0,
      hue: ['#4fb8a8', '#e09a5a', '#ffd89a', '#8b5fc4', '#f5c042'][Math.floor(Math.random() * 5)],
    }));

    const drawMathScene = (t, alpha) => {
      ctx.globalAlpha = alpha;
      // Graph paper background (warm cream)
      const bg = ctx.createLinearGradient(0, 0, 0, H);
      bg.addColorStop(0, '#f4ecd8');
      bg.addColorStop(1, '#e8dcc0');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Graph grid
      ctx.strokeStyle = 'rgba(180,140,100,0.18)';
      ctx.lineWidth = 0.5;
      const cell = 32;
      for (let x = 0; x < W; x += cell) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += cell) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }
      // Major grid lines every 4th
      ctx.strokeStyle = 'rgba(180,140,100,0.35)';
      ctx.lineWidth = 0.8;
      for (let x = 0; x < W; x += cell * 4) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += cell * 4) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Axis
      const originY = H * 0.55;
      ctx.strokeStyle = 'rgba(60,30,15,0.6)';
      ctx.lineWidth = 1.3;
      ctx.beginPath(); ctx.moveTo(0, originY); ctx.lineTo(W, originY); ctx.stroke();

      // Animated Fourier sum: sin(x) + sin(3x)/3 + sin(5x)/5 ... (square-wave approximation, harmonics growing in)
      const numHarmonics = 8;
      const amp = H * 0.18;
      ctx.lineWidth = 2.5;
      // Draw each partial sum with fading
      for (let h = 1; h <= numHarmonics; h++) {
        const reveal = Math.min(1, Math.max(0, (Math.sin(t * 0.00045 + h * 0.35) + 0.6)));
        if (reveal <= 0) continue;
        ctx.strokeStyle = `rgba(224,90,60,${(0.15 + reveal * 0.1) * alpha})`;
        ctx.beginPath();
        for (let px = 0; px <= W; px += 2) {
          const x = (px / W) * Math.PI * 6 + t * 0.0008;
          let y = 0;
          for (let k = 1; k <= h; k++) {
            const n = 2 * k - 1;
            y += Math.sin(n * x) / n;
          }
          const sy = originY - y * amp * 0.9;
          if (px === 0) ctx.moveTo(px, sy); else ctx.lineTo(px, sy);
        }
        ctx.stroke();
      }
      // Primary curve (full sum) — thick
      ctx.strokeStyle = `rgba(140,55,35,${0.9 * alpha})`;
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let px = 0; px <= W; px += 2) {
        const x = (px / W) * Math.PI * 6 + t * 0.0008;
        let y = 0;
        for (let k = 1; k <= numHarmonics; k++) {
          const n = 2 * k - 1;
          y += Math.sin(n * x) / n;
        }
        const sy = originY - y * amp * 0.9;
        if (px === 0) ctx.moveTo(px, sy); else ctx.lineTo(px, sy);
      }
      ctx.stroke();

      // Lissajous curve in top-left corner
      const lx = W * 0.14, ly = H * 0.28, lR = Math.min(W, H) * 0.1;
      ctx.strokeStyle = `rgba(79,184,168,${0.85 * alpha})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      const a = 3 + Math.sin(t * 0.0003) * 0.5;
      const b = 4 + Math.cos(t * 0.00025) * 0.5;
      for (let i = 0; i <= 200; i++) {
        const th = (i / 200) * Math.PI * 2;
        const px = lx + Math.sin(a * th + t * 0.0004) * lR;
        const py = ly + Math.sin(b * th) * lR * 0.8;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();
      // Label
      ctx.font = '11px JetBrains Mono, monospace';
      ctx.fillStyle = `rgba(60,30,15,${0.55 * alpha})`;
      ctx.fillText('Lissajous', lx - lR * 0.6, ly - lR - 8);

      // Golden spiral top-right
      const gx = W * 0.82, gy = H * 0.28, gR = Math.min(W, H) * 0.11;
      ctx.strokeStyle = `rgba(139,95,196,${0.85 * alpha})`;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      const phi = 1.618033;
      const rot = t * 0.0004;
      for (let i = 0; i <= 220; i++) {
        const th = (i / 30) * Math.PI + rot;
        const r = Math.pow(phi, th * 0.1) * 1.5;
        if (r > gR * 1.2) break;
        const px = gx + Math.cos(th) * r;
        const py = gy + Math.sin(th) * r;
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.stroke();
      ctx.font = '11px JetBrains Mono, monospace';
      ctx.fillStyle = `rgba(60,30,15,${0.55 * alpha})`;
      ctx.fillText('φ = 1.618…', gx - 36, gy - gR - 8);

      // Equation overlay (typewriter-style)
      ctx.font = 'italic 18px "Crimson Text", Georgia, serif';
      ctx.fillStyle = `rgba(60,30,15,${0.7 * alpha})`;
      ctx.fillText('f(x) = Σ sin((2k−1)x) / (2k−1)', W * 0.04, H * 0.8);
      ctx.font = '11px JetBrains Mono, monospace';
      ctx.fillStyle = `rgba(60,30,15,${0.45 * alpha})`;
      ctx.fillText('square wave · Fourier approximation', W * 0.04, H * 0.85);

      // Bouncing "unit circle → sine" demo bottom-right
      const ux = W * 0.82, uy = H * 0.72, uR = Math.min(W, H) * 0.07;
      ctx.strokeStyle = `rgba(60,30,15,${0.55 * alpha})`;
      ctx.lineWidth = 1.2;
      ctx.beginPath(); ctx.arc(ux, uy, uR, 0, Math.PI * 2); ctx.stroke();
      // Rotating point
      const ang = t * 0.001;
      const spx = ux + Math.cos(ang) * uR;
      const spy = uy + Math.sin(ang) * uR;
      ctx.strokeStyle = `rgba(79,184,168,${0.8 * alpha})`;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(ux, uy); ctx.lineTo(spx, spy); ctx.stroke();
      ctx.fillStyle = `rgba(224,90,60,${0.95 * alpha})`;
      ctx.beginPath(); ctx.arc(spx, spy, 4, 0, Math.PI * 2); ctx.fill();

      // Floating digits — drift upward like equations evaporating
      for (const p of mathParticles) {
        p.y -= 0.0003;
        p.x += Math.sin(t * 0.0005 + p.y * 5) * 0.0002;
        if (p.y < -0.05) { p.y = 1.05; p.x = Math.random(); }
      }
      ctx.font = '13px JetBrains Mono, monospace';
      const DIGITS = ['π', 'e', '∞', 'Σ', '∫', '∂', 'φ', '√', '∆', '2', '3', '7', '1', '0', 'x', 'y'];
      for (let i = 0; i < mathParticles.length; i++) {
        const p = mathParticles[i];
        const ch = DIGITS[i % DIGITS.length];
        ctx.fillStyle = p.hue + Math.floor(40 * alpha).toString(16).padStart(2, '0');
        ctx.fillText(ch, p.x * W, p.y * H);
      }

      ctx.globalAlpha = 1;
    };

    // ============================================
    // MAIN LOOP + scene switching
    // ============================================
    let sceneStart = performance.now();
    let prevScene = 0;
    let curScene = 0;
    let lastFrame = sceneStart;

    const frame = (now) => {
      const dt = Math.min(now - lastFrame, 40);
      lastFrame = now;
      const t = now;

      const elapsed = now - sceneStart;
      // Scene progress
      if (elapsed > DURATION) {
        prevScene = curScene;
        curScene = (curScene + 1) % SCENES.length;
        sceneRef.current = curScene;
        setSceneIdx(curScene);
        sceneStart = now;
      }

      // Determine crossfade alpha
      let curAlpha = 1;
      let prevAlpha = 0;
      const fadeIn = Math.min(1, elapsed / FADE);
      curAlpha = fadeIn;
      prevAlpha = 1 - fadeIn;

      // Clear
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = '#0a0e1a';
      ctx.fillRect(0, 0, W, H);

      const drawScene = (idx, alpha) => {
        if (alpha <= 0) return;
        ctx.save();
        if (SCENES[idx] === 'flowers') drawFlowersScene(t, alpha);
        else if (SCENES[idx] === 'cosmos') drawCosmosScene(t, alpha, dt);
        else if (SCENES[idx] === 'math') drawMathScene(t, alpha);
        ctx.restore();
      };

      // Draw prev then current on top
      if (prevAlpha > 0 && prevScene !== curScene) drawScene(prevScene, prevAlpha);
      drawScene(curScene, curAlpha);

      rafRef.current = requestAnimationFrame(frame);
    };

    rafRef.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('touchmove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="hero-visual"/>
      <div className="hero-scene-indicator">
        {['I · Field', 'II · Cosmos', 'III · Numbers'].map((label, i) => (
          <span key={i} className={i === sceneIdx ? 'active' : ''}>{label}</span>
        ))}
      </div>
    </>
  );
};

window.HeroVisual = HeroVisual;
