// ============================================
// Workshop — document real work with photos + reflection
//   Projects → Entries (photo + caption + reflection + tags)
//   Active Session overlay — work alongside a lesson
// ============================================

const { useState: useStateW, useEffect: useEffectW, useRef: useRefW, useMemo: useMemoW } = React;

// ---------- storage ----------
const WS_KEY = 'sg-workshop';
const loadWS = () => {
  try {
    const raw = localStorage.getItem(WS_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return { projects: [], entries: [] };
};
const saveWS = (ws) => {
  try { localStorage.setItem(WS_KEY, JSON.stringify(ws)); } catch (e) {
    // likely quota exceeded — trim old entries
    console.warn('Workshop storage full, trimming oldest entries', e);
    const trimmed = { ...ws, entries: ws.entries.slice(-40) };
    try { localStorage.setItem(WS_KEY, JSON.stringify(trimmed)); } catch {}
  }
};
const uid = () => Math.random().toString(36).slice(2, 10);
const fmtDate = (ts) => new Date(ts).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
const fmtTime = (ts) => new Date(ts).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

// ---------- image compression ----------
// Downsize to max 1280px to survive localStorage quotas
const compressImage = (file, maxSide = 1280, quality = 0.82) => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;
      if (width > maxSide || height > maxSide) {
        if (width > height) { height = Math.round(height * (maxSide / width)); width = maxSide; }
        else { width = Math.round(width * (maxSide / height)); height = maxSide; }
      }
      const c = document.createElement('canvas');
      c.width = width; c.height = height;
      const ctx = c.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      resolve(c.toDataURL('image/jpeg', quality));
    };
    img.onerror = reject;
    img.src = reader.result;
  };
  reader.onerror = reject;
  reader.readAsDataURL(file);
});

// ============================================
// Seed — a few example entries so it looks lived-in first time
// ============================================
const seedIfEmpty = () => {
  const ws = loadWS();
  if (ws.projects.length > 0) return ws;
  const pBotany = { id: uid(), title: 'Kitchen garden',    subject: 'Biology',    color: 140, created: Date.now() - 86400000 * 18 };
  const pArt    = { id: uid(), title: 'Daily sketchbook',  subject: 'Art',        color: 20,  created: Date.now() - 86400000 * 12 };
  const pMath   = { id: uid(), title: 'Proof practice',    subject: 'Mathematics',color: 220, created: Date.now() - 86400000 * 6 };
  ws.projects = [pBotany, pArt, pMath];
  ws.entries = [
    { id: uid(), projectId: pBotany.id, created: Date.now() - 86400000 * 10, photo: null,
      caption: 'First true leaves on the basil. I planted 9 seeds, 7 germinated.',
      reflection: 'Cotyledons look nothing like the final leaves. Makes sense — embryos carry different tissues for different jobs. Will thin to the strongest three tomorrow.',
      tags: ['germination', 'plant-anatomy'], mood: 'curious' },
    { id: uid(), projectId: pArt.id, created: Date.now() - 86400000 * 8, photo: null,
      caption: 'Practiced blind contour of my left hand for 10 minutes.',
      reflection: 'My drawings are always too small. When I stopped looking at the page they got bigger and more honest. Note: trust the hand.',
      tags: ['observation', 'line'], mood: 'flow' },
    { id: uid(), projectId: pMath.id, created: Date.now() - 86400000 * 3, photo: null,
      caption: 'Tried to prove √2 is irrational from memory.',
      reflection: 'Got stuck where you assume a/b is in lowest terms. Had to look up why that\'s allowed — it\'s because every rational has a canonical reduced form. A small thing but I\'d never articulated it.',
      tags: ['proofs', 'number-theory'], mood: 'aha' },
  ];
  saveWS(ws);
  return ws;
};

// ============================================
// Small UI bits
// ============================================
const MoodDot = ({ mood }) => {
  const map = {
    curious: { c: 'oklch(72% 0.12 220)', l: 'curious' },
    flow:    { c: 'oklch(70% 0.14 140)', l: 'in flow' },
    aha:     { c: 'oklch(72% 0.15 60)',  l: 'aha' },
    stuck:   { c: 'oklch(68% 0.12 30)',  l: 'stuck' },
    proud:   { c: 'oklch(72% 0.14 320)', l: 'proud' },
  };
  const m = map[mood] || map.curious;
  return <span className="ws-mood"><span className="ws-mood-dot" style={{ background: m.c }}/>{m.l}</span>;
};

const MoodPicker = ({ value, onChange }) => {
  const opts = ['curious', 'flow', 'aha', 'stuck', 'proud'];
  return (
    <div className="ws-mood-picker">
      {opts.map(o => (
        <button key={o} className={'ws-mood-btn' + (value === o ? ' on' : '')} onClick={() => onChange(o)}>
          <MoodDot mood={o}/>
        </button>
      ))}
    </div>
  );
};

// ============================================
// New Entry modal — upload + caption + reflection + tags
// ============================================
const NewEntryModal = ({ projects, initialProjectId, onClose, onSave }) => {
  const [projectId, setProjectId] = useStateW(initialProjectId || projects[0]?.id || '');
  const [photo, setPhoto] = useStateW(null);
  const [caption, setCaption] = useStateW('');
  const [reflection, setReflection] = useStateW('');
  const [tagsText, setTagsText] = useStateW('');
  const [mood, setMood] = useStateW('curious');
  const [busy, setBusy] = useStateW(false);
  const [dragOver, setDragOver] = useStateW(false);
  const fileRef = useRefW(null);

  const handleFile = async (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    setBusy(true);
    try {
      const dataUrl = await compressImage(file);
      setPhoto(dataUrl);
    } catch (e) { console.error(e); }
    setBusy(false);
  };

  const getReflectionHelp = async () => {
    if (!caption.trim()) return;
    setBusy(true);
    try {
      const prompt = `I'm documenting real work on "${caption}". Give me ONE short, open-ended reflection question (max 18 words) that will help me notice something I might have missed. Just the question — no preface.`;
      const ans = await window.claude.complete(prompt);
      setReflection(r => r ? r + '\n\n' + ans.trim() : ans.trim());
    } catch (e) { console.error(e); }
    setBusy(false);
  };

  const save = () => {
    if (!projectId || (!caption.trim() && !photo)) return;
    const entry = {
      id: uid(),
      projectId,
      created: Date.now(),
      photo,
      caption: caption.trim(),
      reflection: reflection.trim(),
      tags: tagsText.split(',').map(s => s.trim()).filter(Boolean),
      mood,
    };
    onSave(entry);
  };

  return (
    <div className="ws-modal-backdrop" onMouseDown={onClose}>
      <div className="ws-modal" onMouseDown={(e) => e.stopPropagation()}>
        <div className="ws-modal-head">
          <div>
            <div className="ws-modal-eyebrow">Workshop</div>
            <h2>Document your work</h2>
          </div>
          <button className="ws-x" onClick={onClose}>✕</button>
        </div>

        <div className="ws-modal-body">
          <div className="ws-field">
            <label>Project</label>
            <select value={projectId} onChange={(e) => setProjectId(e.target.value)}>
              {projects.map(p => <option key={p.id} value={p.id}>{p.title} · {p.subject}</option>)}
            </select>
          </div>

          <div
            className={'ws-drop' + (dragOver ? ' over' : '') + (photo ? ' has' : '')}
            onClick={() => fileRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFile(e.dataTransfer.files?.[0]); }}
          >
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              capture="environment"
              style={{ display: 'none' }}
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
            {photo ? (
              <>
                <img src={photo} alt="Your work"/>
                <button className="ws-drop-replace" onClick={(e) => { e.stopPropagation(); fileRef.current?.click(); }}>
                  Replace
                </button>
              </>
            ) : (
              <div className="ws-drop-empty">
                <div className="ws-drop-icon">◫</div>
                <div className="ws-drop-t">{busy ? 'Processing…' : 'Drop a photo, or tap to choose'}</div>
                <div className="ws-drop-s">Hand-drawn work, a sketch, a garden, a recipe, a notebook page</div>
              </div>
            )}
          </div>

          <div className="ws-field">
            <label>What did you do? <span className="ws-req">required</span></label>
            <input
              className="ws-input"
              value={caption}
              placeholder="One line — the concrete thing you made or tried."
              onChange={(e) => setCaption(e.target.value)}
            />
          </div>

          <div className="ws-field">
            <label>
              Reflection
              <button className="ws-ai" onClick={getReflectionHelp} disabled={!caption.trim() || busy}>
                {busy ? '…' : '✦ Ask Claude for a prompt'}
              </button>
            </label>
            <textarea
              className="ws-textarea"
              rows={4}
              value={reflection}
              placeholder="What surprised you? What was harder than expected? What will you try next?"
              onChange={(e) => setReflection(e.target.value)}
            />
          </div>

          <div className="ws-field-row">
            <div className="ws-field">
              <label>Tags</label>
              <input
                className="ws-input"
                value={tagsText}
                placeholder="comma, separated, topics"
                onChange={(e) => setTagsText(e.target.value)}
              />
            </div>
            <div className="ws-field">
              <label>State</label>
              <MoodPicker value={mood} onChange={setMood}/>
            </div>
          </div>
        </div>

        <div className="ws-modal-foot">
          <button className="home-btn quiet" onClick={onClose}>Cancel</button>
          <button className="home-btn primary" onClick={save} disabled={!caption.trim() || !projectId}>
            Save entry
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================
// New Project modal
// ============================================
const NewProjectModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useStateW('');
  const [subject, setSubject] = useStateW('Art');
  const [color, setColor] = useStateW(40);
  const subjects = (window.SUBJECTS || []).map(s => s.name);
  const choices = subjects.length ? subjects : ['Art', 'Biology', 'Mathematics', 'Music', 'Writing', 'Engineering', 'Life'];
  return (
    <div className="ws-modal-backdrop" onMouseDown={onClose}>
      <div className="ws-modal small" onMouseDown={(e) => e.stopPropagation()}>
        <div className="ws-modal-head">
          <div>
            <div className="ws-modal-eyebrow">Workshop</div>
            <h2>New project</h2>
          </div>
          <button className="ws-x" onClick={onClose}>✕</button>
        </div>
        <div className="ws-modal-body">
          <div className="ws-field">
            <label>Title</label>
            <input
              className="ws-input"
              value={title}
              autoFocus
              placeholder="e.g. Watercolor portraits, Sourdough log, C++ exercises"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="ws-field">
            <label>Subject area</label>
            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
              {choices.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="ws-field">
            <label>Accent color</label>
            <div className="ws-color-row">
              {[20, 60, 140, 200, 260, 320].map(h => (
                <button
                  key={h}
                  className={'ws-color' + (color === h ? ' on' : '')}
                  style={{ background: `oklch(65% 0.15 ${h})` }}
                  onClick={() => setColor(h)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="ws-modal-foot">
          <button className="home-btn quiet" onClick={onClose}>Cancel</button>
          <button
            className="home-btn primary"
            disabled={!title.trim()}
            onClick={() => onSave({ id: uid(), title: title.trim(), subject, color, created: Date.now() })}
          >
            Create project
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================
// Entry detail modal (view + edit reflection)
// ============================================
const EntryDetail = ({ entry, project, onClose, onUpdate, onDelete }) => {
  const [reflection, setReflection] = useStateW(entry.reflection || '');
  const [dirty, setDirty] = useStateW(false);
  const save = () => { onUpdate({ ...entry, reflection: reflection.trim() }); setDirty(false); };
  return (
    <div className="ws-modal-backdrop" onMouseDown={onClose}>
      <div className="ws-modal wide" onMouseDown={(e) => e.stopPropagation()}>
        <div className="ws-modal-head">
          <div>
            <div className="ws-modal-eyebrow" style={{ color: `oklch(55% 0.15 ${project?.color || 40})` }}>
              {project?.title} · {project?.subject}
            </div>
            <h2>{entry.caption}</h2>
            <div className="ws-entry-meta">
              {fmtDate(entry.created)} at {fmtTime(entry.created)}
              {entry.mood && <> · <MoodDot mood={entry.mood}/></>}
            </div>
          </div>
          <button className="ws-x" onClick={onClose}>✕</button>
        </div>
        <div className="ws-modal-body two-col">
          <div className="ws-detail-photo">
            {entry.photo ? <img src={entry.photo} alt={entry.caption}/> : (
              <div className="ws-detail-nophoto">No photo attached</div>
            )}
          </div>
          <div className="ws-detail-right">
            <div className="ws-field">
              <label>Reflection</label>
              <textarea
                className="ws-textarea"
                rows={8}
                value={reflection}
                onChange={(e) => { setReflection(e.target.value); setDirty(true); }}
              />
            </div>
            {entry.tags?.length > 0 && (
              <div className="ws-tags">
                {entry.tags.map(t => <span key={t} className="ws-tag">#{t}</span>)}
              </div>
            )}
          </div>
        </div>
        <div className="ws-modal-foot">
          <button
            className="home-btn quiet"
            style={{ color: '#a83434', marginRight: 'auto' }}
            onClick={() => { if (confirm('Delete this entry?')) onDelete(entry); }}
          >Delete</button>
          <button className="home-btn quiet" onClick={onClose}>{dirty ? 'Discard' : 'Close'}</button>
          {dirty && <button className="home-btn primary" onClick={save}>Save changes</button>}
        </div>
      </div>
    </div>
  );
};

// ============================================
// WorkshopPage
// ============================================
const WorkshopPage = ({ user, onNav }) => {
  const [ws, setWs] = useStateW(() => seedIfEmpty());
  const [activeProject, setActiveProject] = useStateW('all');
  const [showNewEntry, setShowNewEntry] = useStateW(false);
  const [showNewProject, setShowNewProject] = useStateW(false);
  const [viewEntry, setViewEntry] = useStateW(null);
  const [view, setView] = useStateW('grid'); // grid | timeline

  useEffectW(() => saveWS(ws), [ws]);

  const filtered = useMemoW(() => {
    let es = [...ws.entries].sort((a, b) => b.created - a.created);
    if (activeProject !== 'all') es = es.filter(e => e.projectId === activeProject);
    return es;
  }, [ws, activeProject]);

  const projectOf = (id) => ws.projects.find(p => p.id === id);

  const stats = useMemoW(() => {
    const totalEntries = ws.entries.length;
    const withPhoto = ws.entries.filter(e => e.photo).length;
    const withReflection = ws.entries.filter(e => e.reflection && e.reflection.length > 30).length;
    const daysActive = new Set(ws.entries.map(e => new Date(e.created).toDateString())).size;
    return { totalEntries, withPhoto, withReflection, daysActive };
  }, [ws]);

  const saveEntry = (entry) => {
    setWs(w => ({ ...w, entries: [entry, ...w.entries] }));
    setShowNewEntry(false);
  };
  const updateEntry = (entry) => {
    setWs(w => ({ ...w, entries: w.entries.map(e => e.id === entry.id ? entry : e) }));
    setViewEntry(entry);
  };
  const deleteEntry = (entry) => {
    setWs(w => ({ ...w, entries: w.entries.filter(e => e.id !== entry.id) }));
    setViewEntry(null);
  };
  const saveProject = (p) => {
    setWs(w => ({ ...w, projects: [...w.projects, p] }));
    setShowNewProject(false);
    setActiveProject(p.id);
  };

  return (
    <div className="ws-page">
      <header className="ws-hero">
        <div>
          <div className="ws-hero-eyebrow">Workshop</div>
          <h1 className="ws-hero-h1">Your studio of<br/><em>actually made things.</em></h1>
          <p className="ws-hero-sub">
            Learning sticks when it leaves your head and enters the world. Upload a photo of your work, write what you tried, notice what surprised you.
          </p>
        </div>
        <div className="ws-hero-stats">
          <div><div className="v">{stats.totalEntries}</div><div className="l">entries</div></div>
          <div><div className="v">{ws.projects.length}</div><div className="l">projects</div></div>
          <div><div className="v">{stats.daysActive}</div><div className="l">days making</div></div>
          <div><div className="v">{stats.withReflection}</div><div className="l">reflections</div></div>
        </div>
      </header>

      <div className="ws-toolbar">
        <div className="ws-project-tabs">
          <button
            className={'ws-ptab' + (activeProject === 'all' ? ' on' : '')}
            onClick={() => setActiveProject('all')}
          >
            <span>All work</span>
            <span className="ws-ptab-count">{ws.entries.length}</span>
          </button>
          {ws.projects.map(p => (
            <button
              key={p.id}
              className={'ws-ptab' + (activeProject === p.id ? ' on' : '')}
              onClick={() => setActiveProject(p.id)}
              style={{ '--c': `oklch(60% 0.14 ${p.color})` }}
            >
              <span className="ws-ptab-dot"/>
              <span>{p.title}</span>
              <span className="ws-ptab-count">{ws.entries.filter(e => e.projectId === p.id).length}</span>
            </button>
          ))}
          <button className="ws-ptab add" onClick={() => setShowNewProject(true)}>+ Project</button>
        </div>
        <div className="ws-toolbar-r">
          <div className="ws-viewtoggle">
            <button className={view === 'grid' ? 'on' : ''} onClick={() => setView('grid')}>Grid</button>
            <button className={view === 'timeline' ? 'on' : ''} onClick={() => setView('timeline')}>Timeline</button>
          </div>
          <button className="home-btn primary" onClick={() => setShowNewEntry(true)}>
            + New entry
          </button>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="ws-empty">
          <div className="ws-empty-glyph">◫</div>
          <h3>Nothing here yet.</h3>
          <p>Start a project, then upload a photo of the first thing you try.</p>
          <button className="home-btn primary" onClick={() => setShowNewEntry(true)}>Document your first thing</button>
        </div>
      ) : view === 'grid' ? (
        <div className="ws-grid">
          {filtered.map(e => {
            const p = projectOf(e.projectId);
            return (
              <article key={e.id} className="ws-card" onClick={() => setViewEntry(e)}>
                <div className="ws-card-photo">
                  {e.photo ? <img src={e.photo} alt={e.caption}/> : (
                    <div className="ws-card-nophoto" style={{ background: `oklch(94% 0.03 ${p?.color || 40})` }}>
                      <span style={{ color: `oklch(50% 0.12 ${p?.color || 40})` }}>◇</span>
                    </div>
                  )}
                </div>
                <div className="ws-card-body">
                  <div className="ws-card-meta" style={{ color: `oklch(50% 0.14 ${p?.color || 40})` }}>
                    {p?.title} · {fmtDate(e.created)}
                  </div>
                  <div className="ws-card-caption">{e.caption}</div>
                  {e.reflection && (
                    <div className="ws-card-reflection">{e.reflection.slice(0, 120)}{e.reflection.length > 120 ? '…' : ''}</div>
                  )}
                  <div className="ws-card-foot">
                    {e.mood && <MoodDot mood={e.mood}/>}
                    {e.tags?.slice(0, 2).map(t => <span key={t} className="ws-tag sm">#{t}</span>)}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="ws-timeline">
          {filtered.map(e => {
            const p = projectOf(e.projectId);
            return (
              <div key={e.id} className="ws-tl-row" onClick={() => setViewEntry(e)}>
                <div className="ws-tl-date">
                  <div className="d">{new Date(e.created).getDate()}</div>
                  <div className="m">{new Date(e.created).toLocaleDateString('en-US', { month: 'short' })}</div>
                </div>
                <div className="ws-tl-track" style={{ background: `oklch(60% 0.14 ${p?.color || 40})` }}/>
                <div className="ws-tl-body">
                  <div className="ws-tl-proj" style={{ color: `oklch(45% 0.14 ${p?.color || 40})` }}>
                    {p?.title}
                  </div>
                  <div className="ws-tl-cap">{e.caption}</div>
                  {e.reflection && <div className="ws-tl-refl">{e.reflection}</div>}
                  <div className="ws-tl-foot">
                    {e.mood && <MoodDot mood={e.mood}/>}
                    {e.tags?.map(t => <span key={t} className="ws-tag sm">#{t}</span>)}
                  </div>
                </div>
                {e.photo && (
                  <div className="ws-tl-photo"><img src={e.photo} alt={e.caption}/></div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {showNewEntry && (
        <NewEntryModal
          projects={ws.projects}
          initialProjectId={activeProject !== 'all' ? activeProject : null}
          onClose={() => setShowNewEntry(false)}
          onSave={saveEntry}
        />
      )}
      {showNewProject && (
        <NewProjectModal onClose={() => setShowNewProject(false)} onSave={saveProject}/>
      )}
      {viewEntry && (
        <EntryDetail
          entry={viewEntry}
          project={projectOf(viewEntry.projectId)}
          onClose={() => setViewEntry(null)}
          onUpdate={updateEntry}
          onDelete={deleteEntry}
        />
      )}
    </div>
  );
};
window.WorkshopPage = WorkshopPage;

// ============================================
// WorkPad — sliding panel that opens over any lesson
// "I'm doing this alongside reading" — note + photo + save to workshop
// ============================================
const WorkPadFab = () => {
  const [open, setOpen] = useStateW(false);
  return (
    <>
      <button className="ws-fab" onClick={() => setOpen(true)} aria-label="Open work pad">
        <span>◫</span>
        <span className="ws-fab-l">Work pad</span>
      </button>
      {open && <WorkPad onClose={() => setOpen(false)}/>}
    </>
  );
};
window.WorkPadFab = WorkPadFab;

const WorkPad = ({ onClose }) => {
  const [ws, setWs] = useStateW(() => seedIfEmpty());
  const [projectId, setProjectId] = useStateW(ws.projects[0]?.id || '');
  const [notes, setNotes] = useStateW('');
  const [photos, setPhotos] = useStateW([]);
  const [savedMsg, setSavedMsg] = useStateW(null);
  const fileRef = useRefW(null);

  const addPhoto = async (file) => {
    if (!file) return;
    const url = await compressImage(file, 1024, 0.78);
    setPhotos(p => [...p, url]);
  };

  const saveToWorkshop = () => {
    if (!notes.trim() && photos.length === 0) return;
    const entries = [];
    const baseTime = Date.now();
    if (photos.length > 0) {
      photos.forEach((photo, i) => {
        entries.push({
          id: uid(), projectId, created: baseTime + i, photo,
          caption: notes.trim() ? (i === 0 ? notes.trim() : `${notes.trim()} (${i + 1})`) : 'Work pad capture',
          reflection: '', tags: ['work-pad'], mood: 'flow',
        });
      });
    } else {
      entries.push({
        id: uid(), projectId, created: baseTime, photo: null,
        caption: notes.trim(), reflection: '', tags: ['work-pad'], mood: 'flow',
      });
    }
    const next = { ...ws, entries: [...entries, ...ws.entries] };
    setWs(next); saveWS(next);
    setSavedMsg(`Saved ${entries.length} ${entries.length === 1 ? 'entry' : 'entries'} to Workshop.`);
    setTimeout(() => { setNotes(''); setPhotos([]); setSavedMsg(null); }, 1400);
  };

  return (
    <div className="ws-pad-backdrop" onMouseDown={onClose}>
      <div className="ws-pad" onMouseDown={(e) => e.stopPropagation()}>
        <div className="ws-pad-head">
          <div>
            <div className="ws-modal-eyebrow">Work pad</div>
            <h3>Do alongside the lesson</h3>
          </div>
          <button className="ws-x" onClick={onClose}>✕</button>
        </div>
        <div className="ws-pad-body">
          <div className="ws-field">
            <label>Save to project</label>
            <select value={projectId} onChange={(e) => setProjectId(e.target.value)}>
              {ws.projects.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
            </select>
          </div>

          <div className="ws-field">
            <label>Notes · sketches · what you're trying</label>
            <textarea
              className="ws-textarea"
              rows={6}
              value={notes}
              placeholder="Write what you're working through. Type fragments, questions, whatever — this is your scratch space."
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <div className="ws-field">
            <label>Capture your work ({photos.length})</label>
            <div className="ws-pad-photos">
              {photos.map((p, i) => (
                <div key={i} className="ws-pad-photo">
                  <img src={p} alt=""/>
                  <button onClick={() => setPhotos(ps => ps.filter((_, j) => j !== i))}>✕</button>
                </div>
              ))}
              <button className="ws-pad-add" onClick={() => fileRef.current?.click()}>
                <span>+</span><span>Add photo</span>
              </button>
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                capture="environment"
                style={{ display: 'none' }}
                onChange={(e) => { addPhoto(e.target.files?.[0]); e.target.value = ''; }}
              />
            </div>
          </div>
        </div>
        <div className="ws-pad-foot">
          {savedMsg ? <div className="ws-saved">✓ {savedMsg}</div> : (
            <>
              <button className="home-btn quiet" onClick={onClose}>Close</button>
              <button
                className="home-btn primary"
                disabled={!notes.trim() && photos.length === 0}
                onClick={saveToWorkshop}
              >Save to Workshop</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
window.WorkPad = WorkPad;
Object.assign(window, { WorkshopPage, WorkPadFab, WorkPad });
