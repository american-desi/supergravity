// ============================================
// Pages v2: Daily, Glossary, Timeline, Map, Random + enhanced LessonPage
// ============================================

const { useState: uS2, useEffect: uE2, useMemo: uM2, useRef: uR2 } = React;

// ---------- Helpers ----------
const allTopics = () => window.SUBJECTS.flatMap(s => s.groups.flatMap(g => g.topics.map(t => ({...t, subjectId: s.id, subjectName: s.name}))));

// ---------- LESSON PAGE V2 (rich format + fallback) ----------
const LessonPageV2 = ({ topicId, subjectId, onNav }) => {
  const lesson = window.LESSONS[topicId];
  // Fall back to the lesson's own subject id if the nav-supplied one is stale
  // or missing — this handles cross-linked navigation from seeAlso / search.
  const effectiveSubjectId = subjectId || lesson?.subject;
  const subject = window.SUBJECTS.find(s => s.id === effectiveSubjectId)
                || { id: effectiveSubjectId, name: lesson?.subject || 'Atlas', groups: [] };
  const topic = subject.groups.flatMap(g => g.topics).find(t => t.id === topicId)
             || { id: topicId, name: lesson?.title || topicId, level: lesson?.difficulty || '', desc: lesson?.dek || '' };
  const [drawerOpen, setDrawerOpen] = uS2(false);

  uE2(() => { if (topicId) window.Progress?.markVisited(topicId); }, [topicId]);
  uE2(() => {
    const onKey = (e) => { if (e.key === 'Escape') setDrawerOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  if (!lesson || !lesson.body) {
    return <LessonStubV2 topic={topic} subject={subject} topicId={topicId} onNav={onNav}/>;
  }

  const videos = lesson.videos || window.TOPIC_VIDEOS?.[topicId] || [];
  const images = lesson.images || [];
  const animations = lesson.animations || [];
  const articles = lesson.articles || [];
  const primarySources = lesson.primarySources || [];
  const tools = lesson.tools || [];
  const courses = lesson.courses || [];
  const allT = allTopics();
  const seeAlso = (lesson.seeAlso || []).map(id => allT.find(t => t.id === id)).filter(Boolean).slice(0, 5);
  const interactiveKey = window.TOPIC_INTERACTIVE?.[topicId];

  const totalMedia = videos.length + images.length + animations.length + articles.length + primarySources.length + tools.length + courses.length;

  return (
    <div className="lesson" data-screen-label={`lesson-${topicId}`}>
      <div className="lesson-meta">
        <span>{subject.name}</span><span>·</span>
        <span>{lesson.readTime}</span><span>·</span>
        <span>{lesson.difficulty}</span>
      </div>
      <div className="lesson-header">
        <div className="eyebrow" style={{ marginBottom: 16 }}>{topic?.name ? `Lesson · ${topic.name}` : 'Lesson'}</div>
        <h1 className="serif">{lesson.title}</h1>
        <p className="dek">{lesson.dek}</p>
        {lesson.image && <img src={lesson.image} alt="" className="lesson-hero-img" onError={e=>e.target.style.display='none'}/>}
        <div className="lesson-progress" style={{marginTop: lesson.image ? 32 : 24}}>
          {(lesson.sections || []).map((s, i) => (
            <div key={i} className={`lesson-progress-seg ${i === 0 ? 'current' : ''}`}/>
          ))}
        </div>
      </div>

      {totalMedia > 0 && (
        <button
          className="media-shelf-trigger"
          onClick={() => setDrawerOpen(true)}
          title="Open the media shelf (press M)"
        >
          <span className="media-shelf-trigger-bar"/>
          <span className="media-shelf-trigger-label">
            <span className="media-shelf-trigger-eyebrow">The shelf</span>
            <span className="media-shelf-trigger-count">{totalMedia} item{totalMedia===1?'':'s'}</span>
          </span>
        </button>
      )}

      <article className="lesson-body">
        <Prerequisites prerequisites={lesson.prerequisites} onNav={onNav}/>

        {lesson.body.map((block, i) => <BodyBlock key={i} block={block}/>)}

        {interactiveKey && <InteractiveEmbed kind={interactiveKey}/>}

        {lesson.examples?.length > 0 && (
          <section style={{ margin:'32px 0' }}>
            <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:11, letterSpacing:0.6, textTransform:'uppercase', color:'var(--ink-3)', marginBottom:12 }}>
              Worked examples
            </div>
            {lesson.examples.map((ex, i) => <WorkedExample key={i} {...ex}/>)}
          </section>
        )}

        {lesson.practice?.length > 0 && <PracticeSet problems={lesson.practice}/>}

        <Subtopics subtopics={lesson.subtopics}/>

        {videos.length > 0 && <LessonVideoShelf videos={videos}/>}

        {lesson.keyTerms && lesson.keyTerms.length > 0 && (
          <section className="key-terms">
            <div className="key-terms-title">Key terms</div>
            <div className="key-terms-list">
              {lesson.keyTerms.map(t => (
                <button key={t} className="key-term-chip" onClick={() => window.__openTutor?.({ prompt: `Define ${t} in the context of ${lesson.title}.` })}>{t}</button>
              ))}
            </div>
          </section>
        )}

        {lesson.furtherReading && lesson.furtherReading.length > 0 && (
          <section className="further-reading">
            <div className="further-reading-title">Further reading</div>
            {lesson.furtherReading.map((b, i) => (
              <div key={i} className="book-row">
                <div className="book-spine"/>
                <div className="book-info">
                  <div className="book-title">{b.title}</div>
                  <div className="book-author">{b.author}</div>
                  {b.note && <div className="book-note">{b.note}</div>}
                </div>
              </div>
            ))}
          </section>
        )}

        {seeAlso.length > 0 && (
          <section className="see-also">
            <div className="see-also-title">See also</div>
            <div className="see-also-grid">
              {seeAlso.map(t => (
                <div key={t.id} className="see-also-item" onClick={() => onNav({ page: 'lesson', topicId: t.id, subjectId: t.subjectId })}>
                  <div className="see-also-sub">{t.subjectName}</div>
                  <div className="see-also-name">{t.name}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Supergravity pull — cross-field gravity between disciplines */}
        {seeAlso.length > 0 && (
          <section className="sg-pull">
            <div className="sg-pull-eyebrow">⬡ The supergravity pull</div>
            <p className="sg-pull-sub">Every field in the Atlas exerts a pull on every other. Here's where this topic reaches.</p>
            <div className="sg-pull-grid">
              {seeAlso.slice(0, 4).map(t => {
                const s = window.SUBJECTS && window.SUBJECTS.find(sub => sub.groups.flatMap(g => g.topics).some(tp => tp.id === t.id));
                const hex = (s && window.SUBJECT_HEX && window.SUBJECT_HEX[s.id]) || 'var(--ink-3)';
                const dek = window.LESSONS && window.LESSONS[t.id] ? window.LESSONS[t.id].dek : '';
                return (
                  <div key={t.id} className="sg-pull-card" style={{ borderLeft: `3px solid ${hex}` }}
                    onClick={() => onNav({ page: 'lesson', topicId: t.id, subjectId: t.subjectId || (s && s.id) })}>
                    <div className="sg-pull-subject" style={{ color: hex }}>{s ? s.name : ''}</div>
                    <div className="sg-pull-name">{t.name}</div>
                    {dek && <div className="sg-pull-dek">{dek}</div>}
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </article>

      <div className="lesson-nav">
        <div className="lesson-nav-item" onClick={() => onNav({ page: 'subject', subjectId })}>
          <div className="lesson-nav-dir">← Back</div>
          <div className="lesson-nav-title">All {subject.name} topics</div>
        </div>
        <div className="lesson-nav-item next" onClick={() => { window.Progress?.markCompleted(topicId); window.__openTutor?.({ prompt: `Quiz me on "${lesson.title}".` }); }}>
          <div className="lesson-nav-dir">Mark complete →</div>
          <div className="lesson-nav-title">Take the quiz</div>
        </div>
      </div>

      <MediaDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        lesson={lesson}
        videos={videos}
        images={images}
        animations={animations}
        articles={articles}
        primarySources={primarySources}
        tools={tools}
        courses={courses}
      />
    </div>
  );
};
window.LessonPageV2 = LessonPageV2;

// Enhanced stub (videos + see-also even when no body)
const LessonStubV2 = ({ topic, subject, topicId, onNav }) => {
  const [reply, setReply] = uS2(null);
  const [loading, setLoading] = uS2(false);
  const videos = window.TOPIC_VIDEOS?.[topicId] || [];
  const interactiveKey = window.TOPIC_INTERACTIVE?.[topicId];

  // Defensive defaults — both subject and topic can be absent when a lesson
  // is linked without a matching data.js entry.
  const safeSubject = subject || { name: 'Atlas', id: '' };
  const safeTopic = topic || { name: topicId, level: '', desc: '' };

  const generate = async () => {
    setLoading(true);
    try {
      const text = await window.claude.complete({
        messages: [{
          role: 'user',
          content: `Write a short (2 paragraph) introductory lesson on "${safeTopic.name}" at ${safeTopic.level || 'Beginner'} level, from ${safeSubject.name}. Description: ${safeTopic.desc}. Write as an essayist — no markdown, no bullets. Start with a vivid specific image.`
        }]
      });
      setReply(text);
    } finally { setLoading(false); }
  };

  return (
    <div className="lesson" data-screen-label={`lesson-${topicId}-stub`}>
      <div className="lesson-meta"><span>{safeSubject.name}</span><span>·</span><span>{safeTopic.level || ''}</span><span>·</span><span>Outline</span></div>
      <div className="lesson-header">
        <div className="eyebrow" style={{ marginBottom: 16 }}>Lesson</div>
        <h1 className="serif">{safeTopic.name}</h1>
        <p className="dek">{safeTopic.desc}</p>
      </div>
      <div className="lesson-body">
        {!reply && !loading && (
          <div style={{ padding: '40px 0' }}>
            <p className="lead">This topic is in the atlas but doesn't have a hand-authored deep dive yet. Claude can write you one on the spot.</p>
            <button className="btn-primary" onClick={generate}><Icon name="sparkle" size={12}/> Generate a lesson</button>
          </div>
        )}
        {loading && <div style={{ padding: '60px 0', textAlign: 'center', color: 'var(--ink-3)' }}>
          <div className="tutor-typing" style={{ justifyContent: 'center' }}><span/><span/><span/></div>
          <div style={{ marginTop: 12, fontSize: 13 }}>Writing your lesson…</div>
        </div>}
        {reply && <>
          <p className="lead">{reply.split('\n\n')[0]}</p>
          {reply.split('\n\n').slice(1).map((p, i) => <p key={i}>{p}</p>)}
        </>}

        {interactiveKey && <InteractiveEmbed kind={interactiveKey}/>}

        {videos.length > 0 && (
          <section className="lesson-videos">
            <div className="lesson-videos-title">Watch · Curated videos</div>
            {videos.map((v, i) => <VideoCard key={i} {...v}/>)}
          </section>
        )}
      </div>
      <div className="lesson-nav">
        <div className="lesson-nav-item" onClick={() => onNav({ page: 'subject', subjectId: safeSubject.id })}>
          <div className="lesson-nav-dir">← Back</div>
          <div className="lesson-nav-title">All {safeSubject.name} topics</div>
        </div>
        <div className="lesson-nav-item next" onClick={() => window.__openTutor?.({ prompt: `Explain ${safeTopic.name} in another way.` })}>
          <div className="lesson-nav-dir">Ask Claude →</div>
          <div className="lesson-nav-title">Another angle</div>
        </div>
      </div>
    </div>
  );
};

// ---------- Video card with click-to-play ----------
const VideoCard = ({ id, title, channel, why }) => {
  const [play, setPlay] = uS2(false);
  return (
    <div className="video-card">
      <div className="video-thumb" onClick={() => setPlay(true)}>
        {!play ? <>
          <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" onError={e=>{e.target.style.display='none';}}/>
          <div className="video-play"><div className="video-play-btn"/></div>
        </> : <iframe src={`https://www.youtube.com/embed/${id}?autoplay=1`} title={title} allow="autoplay; encrypted-media" allowFullScreen/>}
      </div>
      <div className="video-meta">
        <div className="video-meta-text">
          <div className="video-title">{title}</div>
          <div className="video-channel">{channel}</div>
          {why && <div className="video-why">{why}</div>}
        </div>
      </div>
    </div>
  );
};
window.VideoCard = VideoCard;

// ---------- Inline figure/image block ----------
const LessonFigure = ({ src, alt, caption, credit, width }) => {
  const [ok, setOk] = uS2(true);
  if (!src || !ok) return null;
  return (
    <figure className="lesson-figure" style={{ margin: '32px 0', maxWidth: width || '100%' }}>
      <img src={src} alt={alt || ''} onError={() => setOk(false)}
           style={{ width: '100%', height: 'auto', display: 'block', border: '1px solid var(--rule-soft)', background: '#f4efe6' }}/>
      {(caption || credit) && (
        <figcaption style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: 12.5, color: 'var(--ink-3)', marginTop: 8, lineHeight: 1.5 }}>
          {caption}
          {credit && <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, display: 'block', marginTop: 4, color: 'var(--ink-3)', opacity: 0.75 }}>{credit}</span>}
        </figcaption>
      )}
    </figure>
  );
};
window.LessonFigure = LessonFigure;

// ---------- Video shelf: first few open, rest behind a disclosure ----------
const LessonVideoShelf = ({ videos }) => {
  const [open, setOpen] = uS2(false);
  // Support an explicit `featured: true|false` flag. If none of the videos
  // specify it, default to the first 3 being featured.
  const hasFlags = videos.some(v => v.featured !== undefined);
  const featured = hasFlags ? videos.filter(v => v.featured !== false) : videos.slice(0, 3);
  const hidden = hasFlags ? videos.filter(v => v.featured === false) : videos.slice(3);
  return (
    <section className="lesson-videos">
      <div className="lesson-videos-title">Watch · Curated videos</div>
      {featured.map((v, i) => <VideoCard key={`f-${i}`} {...v}/>)}
      {hidden.length > 0 && (
        <>
          <button
            className="video-disclosure"
            onClick={() => setOpen(o => !o)}
            style={{
              display:'flex', alignItems:'center', justifyContent:'space-between',
              width:'100%', marginTop: 18, padding:'14px 18px',
              background: 'var(--paper)', border:'1px solid var(--rule-soft)',
              borderRadius: 4, cursor:'pointer',
              fontFamily: 'JetBrains Mono, monospace', fontSize: 11, letterSpacing: 0.4, textTransform:'uppercase',
              color: 'var(--ink)',
            }}>
            <span>{open ? 'Hide' : 'Show'} {hidden.length} more {hidden.length === 1 ? 'video' : 'videos'}</span>
            <span style={{ fontSize: 14, transition:'transform 200ms ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
          </button>
          {open && (
            <div style={{ marginTop: 18, paddingTop: 18, borderTop: '1px solid var(--rule-soft)' }}>
              {hidden.map((v, i) => <VideoCard key={`h-${i}`} {...v}/>)}
            </div>
          )}
        </>
      )}
    </section>
  );
};
window.LessonVideoShelf = LessonVideoShelf;

// ---------- Inline gallery ----------
const LessonGallery = ({ images, caption }) => {
  const items = images || [];
  if (!items.length) return null;
  return (
    <figure className="lesson-gallery">
      <div className="lesson-gallery-grid" style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.min(items.length, 3)}, 1fr)`,
        gap: 8,
        margin: '32px 0 0',
      }}>
        {items.map((im, i) => (
          <img key={i} src={im.src || im.url} alt={im.alt || ''}
               title={im.caption || ''}
               onError={e => { e.target.style.display = 'none'; }}
               style={{ width:'100%', height: 220, objectFit:'cover', border:'1px solid var(--rule-soft)', background:'#f4efe6' }}/>
        ))}
      </div>
      {caption && <figcaption style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: 12.5, color: 'var(--ink-3)', marginTop: 8 }}>{caption}</figcaption>}
    </figure>
  );
};
window.LessonGallery = LessonGallery;

// ---------- Inline animation / GIF / embed ----------
const LessonAnimation = ({ src, url, caption, credit, kind, youtubeId, poster }) => {
  const resolved = src || url;
  if (youtubeId) {
    return (
      <figure style={{ margin: '32px 0' }}>
        <div style={{ position: 'relative', width:'100%', aspectRatio: '16 / 9', background:'var(--ink)', border: '1px solid var(--rule-soft)' }}>
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?modestbranding=1&rel=0`}
            title={caption || 'Animation'}
            allow="encrypted-media; picture-in-picture"
            allowFullScreen
            style={{ position:'absolute', inset: 0, width:'100%', height:'100%', border: 0 }}
          />
        </div>
        {(caption || credit) && (
          <figcaption style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: 12.5, color: 'var(--ink-3)', marginTop: 8, lineHeight: 1.5 }}>
            {caption}
            {credit && <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, display:'block', marginTop: 4, opacity: 0.75 }}>{credit}</span>}
          </figcaption>
        )}
      </figure>
    );
  }
  if (!resolved) return null;
  const isVideo = kind === 'video' || /\.(mp4|webm|ogg)($|\?)/i.test(resolved);
  return (
    <figure style={{ margin: '32px 0' }}>
      {isVideo
        ? <video src={resolved} poster={poster} controls loop muted playsInline style={{ width:'100%', height:'auto', display:'block', border:'1px solid var(--rule-soft)', background:'#f4efe6' }}/>
        : <img src={resolved} alt={caption || ''} onError={e => { e.target.style.display = 'none'; }} style={{ width:'100%', height:'auto', display:'block', border:'1px solid var(--rule-soft)', background:'#f4efe6' }}/>
      }
      {(caption || credit) && (
        <figcaption style={{ fontFamily: 'Inter Tight, sans-serif', fontSize: 12.5, color: 'var(--ink-3)', marginTop: 8, lineHeight: 1.5 }}>
          {caption}
          {credit && <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10.5, display:'block', marginTop: 4, opacity: 0.75 }}>{credit}</span>}
        </figcaption>
      )}
    </figure>
  );
};
window.LessonAnimation = LessonAnimation;

// ---------- Media Drawer: the hidden menu ----------
const MediaDrawer = ({ open, onClose, lesson, videos, images, animations, articles, primarySources, tools, courses }) => {
  const [tab, setTab] = uS2('videos');

  uE2(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const counts = {
    videos: videos.length,
    images: images.length,
    animations: animations.length,
    articles: articles.length,
    primarySources: primarySources.length,
    tools: tools.length,
    courses: courses.length,
  };
  const tabs = [
    ['videos', 'Watch', counts.videos],
    ['animations', 'Motion', counts.animations],
    ['images', 'See', counts.images],
    ['articles', 'Read', counts.articles],
    ['courses', 'Learn', counts.courses],
    ['primarySources', 'Primary', counts.primarySources],
    ['tools', 'Tools', counts.tools],
  ].filter(([, , n]) => n > 0);

  return (
    <>
      <div className="media-drawer-backdrop" onClick={onClose}/>
      <aside className="media-drawer" role="dialog" aria-label="Media shelf">
        <header className="media-drawer-header">
          <div>
            <div className="media-drawer-eyebrow">The shelf · {lesson.title}</div>
            <h2 className="serif media-drawer-title">Deep dive</h2>
          </div>
          <button className="media-drawer-close" onClick={onClose} aria-label="Close">×</button>
        </header>

        <nav className="media-drawer-tabs">
          {tabs.map(([key, label, count]) => (
            <button
              key={key}
              className={`media-drawer-tab ${tab === key ? 'is-active' : ''}`}
              onClick={() => setTab(key)}
            >
              {label}
              <span className="media-drawer-tab-count">{count}</span>
            </button>
          ))}
        </nav>

        <div className="media-drawer-body">
          {tab === 'videos' && videos.map((v, i) => <VideoCard key={i} {...v}/>)}

          {tab === 'animations' && animations.map((a, i) => (
            <div key={i} style={{ marginBottom: 28 }}>
              <LessonAnimation {...a}/>
              {a.title && <div style={{ fontFamily:'var(--serif)', fontSize: 19, marginTop: 6 }}>{a.title}</div>}
              {a.why && <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 4, lineHeight: 1.5, fontStyle:'italic' }}>{a.why}</div>}
            </div>
          ))}

          {tab === 'images' && (
            <div style={{ display:'grid', gridTemplateColumns:'1fr', gap: 20 }}>
              {images.map((im, i) => (
                <figure key={i} style={{ margin: 0 }}>
                  <img src={im.src || im.url} alt={im.alt || ''}
                       onError={e => { e.target.style.display = 'none'; }}
                       style={{ width: '100%', height: 'auto', display:'block', border:'1px solid var(--rule-soft)' }}/>
                  {(im.caption || im.credit || im.why) && (
                    <figcaption style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 8, lineHeight: 1.5 }}>
                      {im.caption}
                      {im.why && <div style={{ color:'var(--ink-3)', fontStyle:'italic', marginTop: 4 }}>{im.why}</div>}
                      {im.credit && <div style={{ fontFamily:'var(--mono)', fontSize: 10.5, marginTop: 4, opacity: 0.75 }}>{im.credit}</div>}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}

          {tab === 'articles' && (
            <ul className="media-drawer-list">
              {articles.map((a, i) => (
                <li key={i}>
                  <a href={a.url} target="_blank" rel="noopener noreferrer">
                    <div className="media-drawer-list-title">{a.title}</div>
                    <div className="media-drawer-list-sub">{a.source}{a.year ? ` · ${a.year}` : ''}</div>
                    {a.why && <div className="media-drawer-list-why">{a.why}</div>}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {tab === 'courses' && (
            <ul className="media-drawer-list">
              {courses.map((c, i) => (
                <li key={i}>
                  <a href={c.url} target="_blank" rel="noopener noreferrer">
                    <div className="media-drawer-list-title">{c.title}</div>
                    <div className="media-drawer-list-sub">{c.provider}{c.free ? ' · Free' : ''}</div>
                    {c.why && <div className="media-drawer-list-why">{c.why}</div>}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {tab === 'primarySources' && (
            <ul className="media-drawer-list">
              {primarySources.map((p, i) => (
                <li key={i}>
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    <div className="media-drawer-list-title">{p.title}</div>
                    {p.why && <div className="media-drawer-list-why">{p.why}</div>}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {tab === 'tools' && (
            <ul className="media-drawer-list">
              {tools.map((t, i) => (
                <li key={i}>
                  <a href={t.url} target="_blank" rel="noopener noreferrer">
                    <div className="media-drawer-list-title">{t.title}</div>
                    {t.why && <div className="media-drawer-list-why">{t.why}</div>}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </>
  );
};
window.MediaDrawer = MediaDrawer;

// ============================================
// SCAFFOLDING: subtopics, worked examples, practice
// ============================================

// Renders a body block (shared helper for subtopics)
const BodyBlock = ({ block }) => {
  if (block.type === 'lead') return <p className="lead">{block.text}</p>;
  if (block.type === 'h2') return <h2 className="serif">{block.text}</h2>;
  if (block.type === 'h3') return <h3>{block.text}</h3>;
  if (block.type === 'p') return <p>{block.text}</p>;
  if (block.type === 'callout') return <div className="lesson-callout">{block.text}</div>;
  if (block.type === 'quote') return <blockquote className="pull-quote">"{block.text}"<cite>— {block.cite}</cite></blockquote>;
  if (block.type === 'image' || block.type === 'figure') return <LessonFigure {...block}/>;
  if (block.type === 'gallery') return <LessonGallery {...block}/>;
  if (block.type === 'animation') return <LessonAnimation {...block}/>;
  if (block.type === 'aside') return <aside className="lesson-aside"><div className="lesson-aside-label">{block.label || 'Aside'}</div>{block.text}</aside>;
  return null;
};

// ---------- Worked Example: step-through with reveal ----------
const WorkedExample = ({ title, problem, steps = [], answer }) => {
  const [revealed, setRevealed] = uS2(0);
  const done = revealed >= steps.length;
  return (
    <div className="worked-example" style={{
      margin: '24px 0', padding: '20px 22px',
      background: '#f4efe6', border: '1px solid var(--rule-soft)', borderRadius: 4,
    }}>
      <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:10.5, letterSpacing:0.6, textTransform:'uppercase', color:'var(--ink-3)', marginBottom:6 }}>Worked example</div>
      {title && <div style={{ fontFamily:'Instrument Serif, serif', fontSize:22, marginBottom:8 }}>{title}</div>}
      {problem && <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:14, padding:'10px 14px', background:'var(--paper)', border:'1px solid var(--rule-soft)', borderRadius:3, marginBottom:14, whiteSpace:'pre-wrap', lineHeight:1.5 }}>{problem}</div>}
      {steps.slice(0, revealed).map((s, i) => (
        <div key={i} style={{ margin:'10px 0', paddingLeft:20, borderLeft:'2px solid var(--wine, #6b2a3a)' }}>
          <div style={{ fontSize:10.5, fontFamily:'JetBrains Mono, monospace', color:'var(--ink-3)', marginBottom:4 }}>Step {i+1}</div>
          <div style={{ fontSize:14, lineHeight:1.6 }}>{s.text}</div>
          {s.math && <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:14, marginTop:6, padding:'6px 10px', background:'var(--paper)', display:'inline-block', border:'1px solid var(--rule-soft)', borderRadius:3 }}>{s.math}</div>}
        </div>
      ))}
      {!done && (
        <button onClick={() => setRevealed(r => r + 1)}
                style={{ marginTop:12, padding:'8px 16px', background:'var(--ink)', color:'var(--paper)', border:'none', borderRadius:2, cursor:'pointer',
                         fontFamily:'JetBrains Mono, monospace', fontSize:11, letterSpacing:0.4, textTransform:'uppercase' }}>
          {revealed === 0 ? 'Show first step' : `Show step ${revealed + 1}`} →
        </button>
      )}
      {done && answer && (
        <div style={{ marginTop:16, padding:'10px 14px', background:'var(--ink)', color:'var(--paper)', borderRadius:3, fontFamily:'JetBrains Mono, monospace', fontSize:14 }}>
          <span style={{ fontSize:10, opacity:0.7, marginRight:8 }}>ANSWER</span>{answer}
        </div>
      )}
      {done && (
        <button onClick={() => setRevealed(0)}
                style={{ marginTop:10, marginLeft:0, padding:'6px 12px', background:'transparent', color:'var(--ink-3)', border:'1px solid var(--rule-soft)', borderRadius:2, cursor:'pointer', fontSize:11 }}>
          ↺ Reset
        </button>
      )}
    </div>
  );
};
window.WorkedExample = WorkedExample;

// ---------- Practice Problem: input, check, hint, solution ----------
const normalize = (s) => (s || '').toString().trim().toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9π√+\-*/^().,=<>]/g, '');
const PracticeProblem = ({ q, a, acceptable, hint, solution, difficulty, index }) => {
  const [val, setVal] = uS2('');
  const [state, setState] = uS2(null); // 'ok' | 'no' | null
  const [hintOpen, setHintOpen] = uS2(false);
  const [showSol, setShowSol] = uS2(false);
  const check = () => {
    const candidates = [a, ...(acceptable || [])].filter(Boolean).map(normalize);
    const got = normalize(val);
    setState(candidates.includes(got) ? 'ok' : 'no');
    if (candidates.includes(got)) setShowSol(true);
  };
  const diffColor = { easy: '#4a5d3a', medium: '#c8621a', hard: '#6b2a3a' }[difficulty] || 'var(--ink-3)';
  return (
    <div style={{ margin:'16px 0', padding:'16px 18px', background:'var(--paper)', border:'1px solid var(--rule-soft)', borderRadius:4 }}>
      <div style={{ display:'flex', alignItems:'baseline', gap:10, marginBottom:8 }}>
        <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize:10.5, color:'var(--ink-3)', textTransform:'uppercase', letterSpacing:0.5 }}>Q{index != null ? index + 1 : ''}</span>
        {difficulty && <span style={{ fontSize:10, fontFamily:'JetBrains Mono, monospace', color:diffColor, textTransform:'uppercase', letterSpacing:0.5 }}>· {difficulty}</span>}
      </div>
      <div style={{ fontSize:15, lineHeight:1.55, marginBottom:12 }}>{q}</div>
      <div style={{ display:'flex', gap:8, alignItems:'center', flexWrap:'wrap' }}>
        <input type="text" value={val} onChange={e => { setVal(e.target.value); if (state) setState(null); }}
               onKeyDown={e => { if (e.key === 'Enter') check(); }}
               placeholder="Your answer…"
               style={{ flex:'1 1 180px', padding:'8px 12px', fontFamily:'JetBrains Mono, monospace', fontSize:14,
                        background:'#f4efe6', border:`1.5px solid ${state==='ok'?'#4a5d3a':state==='no'?'#c8621a':'var(--rule-soft)'}`,
                        borderRadius:2, color:'var(--ink)' }}/>
        <button onClick={check}
                style={{ padding:'8px 14px', background:'var(--ink)', color:'var(--paper)', border:'none', borderRadius:2,
                         cursor:'pointer', fontFamily:'JetBrains Mono, monospace', fontSize:11, letterSpacing:0.4, textTransform:'uppercase' }}>
          Check
        </button>
        {hint && (
          <button onClick={() => setHintOpen(h => !h)}
                  style={{ padding:'8px 12px', background:'transparent', color:'var(--ink-3)', border:'1px solid var(--rule-soft)',
                           borderRadius:2, cursor:'pointer', fontSize:11 }}>
            {hintOpen ? 'Hide hint' : 'Hint'}
          </button>
        )}
      </div>
      {state === 'ok' && <div style={{ marginTop:10, fontFamily:'JetBrains Mono, monospace', fontSize:12, color:'#4a5d3a' }}>✓ Correct.</div>}
      {state === 'no' && <div style={{ marginTop:10, fontFamily:'JetBrains Mono, monospace', fontSize:12, color:'#c8621a' }}>✗ Not quite. Try again — or peek at the hint.</div>}
      {hintOpen && hint && (
        <div style={{ marginTop:10, padding:'10px 12px', background:'#f4efe6', borderLeft:'2px solid var(--amber, #c8a857)', fontSize:13, lineHeight:1.5 }}>
          <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize:10, color:'var(--ink-3)', textTransform:'uppercase', letterSpacing:0.5, marginRight:8 }}>Hint</span>
          {hint}
        </div>
      )}
      {showSol && solution && (
        <div style={{ marginTop:10, padding:'10px 12px', background:'#f4efe6', borderLeft:'2px solid var(--ink)', fontSize:13, lineHeight:1.5 }}>
          <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize:10, color:'var(--ink-3)', textTransform:'uppercase', letterSpacing:0.5, marginRight:8 }}>Solution</span>
          {solution}
        </div>
      )}
      {state && !showSol && solution && (
        <button onClick={() => setShowSol(true)}
                style={{ marginTop:8, padding:'4px 10px', background:'transparent', color:'var(--ink-3)', border:'none', cursor:'pointer', fontSize:11, textDecoration:'underline' }}>
          Show solution anyway
        </button>
      )}
    </div>
  );
};
window.PracticeProblem = PracticeProblem;

const PracticeSet = ({ problems }) => {
  if (!problems || !problems.length) return null;
  return (
    <section style={{ margin:'32px 0' }}>
      <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:11, letterSpacing:0.6, textTransform:'uppercase', color:'var(--ink-3)', marginBottom:12 }}>
        Practice · {problems.length} problem{problems.length === 1 ? '' : 's'}
      </div>
      {problems.map((p, i) => <PracticeProblem key={i} index={i} {...p}/>)}
    </section>
  );
};
window.PracticeSet = PracticeSet;

// ---------- Prerequisites bar ----------
const Prerequisites = ({ prerequisites, onNav }) => {
  if (!prerequisites || !prerequisites.length) return null;
  const allT = allTopics();
  return (
    <aside style={{ margin:'24px 0', padding:'14px 18px', background:'#f4efe6', border:'1px solid var(--rule-soft)', borderRadius:4 }}>
      <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:10.5, letterSpacing:0.6, textTransform:'uppercase', color:'var(--ink-3)', marginBottom:8 }}>
        Before you begin
      </div>
      <div style={{ fontSize:13.5, lineHeight:1.55, marginBottom:10 }}>
        This topic assumes you are comfortable with the following. If any of them look unfamiliar, open that lesson first.
      </div>
      <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
        {prerequisites.map((p, i) => {
          if (typeof p === 'string') {
            const t = allT.find(a => a.id === p);
            if (!t) return null;
            return (
              <button key={i} onClick={() => onNav?.({ page:'lesson', topicId:t.id, subjectId:t.subjectId })}
                      style={{ padding:'6px 12px', background:'var(--paper)', border:'1px solid var(--rule-soft)',
                               borderRadius:20, cursor:'pointer', fontSize:12, color:'var(--ink)' }}>
                {t.subjectName} · {t.name} →
              </button>
            );
          }
          return (
            <div key={i} style={{ padding:'6px 12px', background:'var(--paper)', border:'1px solid var(--rule-soft)', borderRadius:20, fontSize:12 }}>
              {p.text || p.name}{p.why && <span style={{ color:'var(--ink-3)' }}> — {p.why}</span>}
            </div>
          );
        })}
      </div>
    </aside>
  );
};
window.Prerequisites = Prerequisites;

// ---------- Subtopics: expand-to-deep-dive accordion ----------
const Subtopics = ({ subtopics }) => {
  const [open, setOpen] = uS2(null);
  if (!subtopics || !subtopics.length) return null;
  return (
    <section style={{ margin:'48px 0 24px' }}>
      <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:11, letterSpacing:0.6, textTransform:'uppercase', color:'var(--ink-3)', marginBottom:14 }}>
        Deep dive · {subtopics.length} subtopic{subtopics.length === 1 ? '' : 's'}
      </div>
      <div style={{ borderTop:'1px solid var(--rule-soft)' }}>
        {subtopics.map((st, i) => {
          const isOpen = open === i;
          return (
            <div key={st.id || i} style={{ borderBottom:'1px solid var(--rule-soft)' }}>
              <button onClick={() => setOpen(isOpen ? null : i)}
                      style={{ width:'100%', padding:'20px 4px', background:'none', border:'none', textAlign:'left', cursor:'pointer',
                               display:'flex', alignItems:'baseline', gap:16 }}>
                <span style={{ fontFamily:'JetBrains Mono, monospace', fontSize:11, color:'var(--ink-3)', minWidth:32 }}>
                  {String(i+1).padStart(2,'0')}
                </span>
                <span style={{ flex:1 }}>
                  <div style={{ fontFamily:'Instrument Serif, serif', fontSize:22, color:'var(--ink)' }}>{st.name}</div>
                  {st.summary && <div style={{ fontSize:13.5, color:'var(--ink-3)', marginTop:4, lineHeight:1.5 }}>{st.summary}</div>}
                </span>
                <span style={{ fontSize:14, color:'var(--ink-3)', transition:'transform 200ms ease', transform:isOpen?'rotate(180deg)':'rotate(0deg)', marginTop:6 }}>▾</span>
              </button>
              {isOpen && (
                <div style={{ padding:'8px 0 36px 48px' }}>
                  {st.level && <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:10.5, letterSpacing:0.5, textTransform:'uppercase', color:'var(--ink-3)', marginBottom:14 }}>{st.level}{st.readTime ? ` · ${st.readTime}` : ''}</div>}
                  {st.body?.map((b, bi) => <BodyBlock key={bi} block={b}/>)}
                  {st.examples?.length > 0 && (
                    <section style={{ marginTop:24 }}>
                      <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:11, letterSpacing:0.6, textTransform:'uppercase', color:'var(--ink-3)', marginBottom:10 }}>Worked examples</div>
                      {st.examples.map((ex, ei) => <WorkedExample key={ei} {...ex}/>)}
                    </section>
                  )}
                  {st.practice?.length > 0 && <PracticeSet problems={st.practice}/>}
                  {st.keyTerms?.length > 0 && (
                    <div style={{ marginTop:20, padding:'14px 18px', background:'#f4efe6', borderRadius:3 }}>
                      <div style={{ fontFamily:'JetBrains Mono, monospace', fontSize:10.5, letterSpacing:0.5, textTransform:'uppercase', color:'var(--ink-3)', marginBottom:8 }}>Vocabulary</div>
                      <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
                        {st.keyTerms.map((t, ti) => (
                          <button key={ti} className="key-term-chip" onClick={() => window.__openTutor?.({ prompt: `Define "${t}" in the context of ${st.name}.` })}>{t}</button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
window.Subtopics = Subtopics;

// ---------- DAILY PAGE ----------
const DailyPage = ({ onNav }) => {
  const today = new Date();
  const seed = Math.floor(today.getTime() / 86400000);
  const all = uM2(() => allTopics(), []);
  const pick = (offset) => all[(seed + offset * 997) % all.length];
  const featured = pick(0);
  const moreTopics = [pick(1), pick(2), pick(3), pick(4)];
  const dateStr = today.toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' });

  return (
    <div className="daily-page" data-screen-label="daily">
      <div className="daily-dateline">
        <span>Vol. MMXXVI · No. {seed % 365}</span>
        <span>{dateStr}</span>
      </div>
      <div className="daily-masthead">The <em>Daily</em> Atlas</div>

      <div className="daily-section-label">§ Today's lesson</div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:32,alignItems:'baseline',cursor:'pointer'}} onClick={() => onNav({page:'lesson',topicId:featured.id,subjectId:featured.subjectId})}>
        <div>
          <div className="eyebrow" style={{marginBottom:10}}>{featured.subjectName} · {featured.level}</div>
          <h2 className="serif" style={{fontSize:48,lineHeight:1,letterSpacing:'-0.03em'}}>{featured.name}</h2>
        </div>
        <div style={{color:'var(--ink-2)',fontSize:16,lineHeight:1.6}}>
          <p>{featured.desc}</p>
          <div className="btn-primary" style={{marginTop:16}}>Read today's lesson <Icon name="arrow" size={12}/></div>
        </div>
      </div>

      <div className="daily-section-label">§ Also worth your time</div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1px',background:'var(--rule)',border:'1px solid var(--rule)'}}>
        {moreTopics.map(t => (
          <div key={t.id} style={{background:'var(--paper)',padding:24,cursor:'pointer'}} onClick={() => onNav({page:'lesson',topicId:t.id,subjectId:t.subjectId})}>
            <div className="eyebrow" style={{marginBottom:8}}>{t.subjectName}</div>
            <div className="serif" style={{fontSize:24,lineHeight:1.15}}>{t.name}</div>
            <div style={{fontSize:13,color:'var(--ink-3)',marginTop:8,lineHeight:1.5}}>{t.desc}</div>
          </div>
        ))}
      </div>

      <div className="daily-section-label">§ The editors recommend</div>
      <div style={{padding:24,background:'var(--ink)',color:'var(--paper)'}}>
        <div className="serif" style={{fontSize:28,lineHeight:1.2}}>Ask Claude for a custom study plan.</div>
        <div style={{color:'rgba(244,239,230,0.7)',fontSize:14,marginTop:8,maxWidth:480}}>Tell the tutor your goal and timeframe. Claude will design a week-by-week path through the atlas to get you there.</div>
        <button className="btn-primary" style={{background:'var(--amber)',marginTop:16}} onClick={() => window.__openTutor?.({ prompt: 'Help me design a custom study plan. Ask me what I want to learn and over what timeframe.' })}>
          <Icon name="sparkle" size={12}/> Open the planner
        </button>
      </div>
    </div>
  );
};
window.DailyPage = DailyPage;

// ---------- GLOSSARY PAGE ----------
const GlossaryPage = ({ onNav }) => {
  const [q, setQ] = uS2('');
  const entries = uM2(() => {
    const out = [];
    Object.entries(window.LESSONS).forEach(([topicId, lesson]) => {
      if (!lesson.keyTerms) return;
      const subj = window.SUBJECTS.find(s => s.id === lesson.subject);
      lesson.keyTerms.forEach(term => {
        out.push({ term, topicId, lessonTitle: lesson.title, subjectId: lesson.subject, subjectName: subj?.name || lesson.subject });
      });
    });
    // Deduplicate same term
    const seen = new Set();
    return out.filter(e => seen.has(e.term) ? false : (seen.add(e.term), true))
              .sort((a,b) => a.term.localeCompare(b.term));
  }, []);

  const filtered = entries.filter(e => !q || e.term.toLowerCase().includes(q.toLowerCase()));
  const byLetter = uM2(() => {
    const m = {};
    filtered.forEach(e => {
      const l = e.term[0].toUpperCase();
      (m[l] ||= []).push(e);
    });
    return m;
  }, [filtered]);
  const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="glossary-page" data-screen-label="glossary">
      <div className="glossary-head">
        <div className="eyebrow">§ Reference</div>
        <h1 className="serif" style={{marginTop:16}}>Glossary</h1>
        <div style={{fontSize:15,color:'var(--ink-3)',marginTop:12,maxWidth:520,lineHeight:1.55}}>
          Every key term in the atlas, alphabetized and cross-referenced. Tap any entry to read the lesson it comes from, or ask Claude for a plain-English definition.
        </div>
        <div className="glossary-search">
          <Icon name="search" size={16}/>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Find a term…" autoFocus/>
        </div>
        <div className="glossary-alpha">
          {ALPHA.map(l => (
            <a key={l} className={`glossary-letter ${byLetter[l]?'has':'empty'}`} href={`#glossary-${l}`}>{l}</a>
          ))}
        </div>
      </div>

      {ALPHA.filter(l => byLetter[l]).map(letter => (
        <div key={letter} id={`glossary-${letter}`} className="glossary-section">
          <div className="glossary-section-letter">{letter}</div>
          {byLetter[letter].map((e, i) => (
            <div key={i} className="glossary-entry" onClick={() => onNav({page:'lesson',topicId:e.topicId,subjectId:e.subjectId})}>
              <div className="glossary-entry-term">{e.term}</div>
              <div className="glossary-entry-def">
                <em style={{color:'var(--ink-3)'}}>From {e.lessonTitle}.</em> Click to read the lesson in which this term is defined in context.
              </div>
              <div className="glossary-entry-from">{e.subjectName}</div>
            </div>
          ))}
        </div>
      ))}

      {entries.length === 0 && <div style={{padding:40,textAlign:'center',color:'var(--ink-3)'}}>No terms yet — key terms appear as lessons are authored.</div>}
    </div>
  );
};
window.GlossaryPage = GlossaryPage;

// ---------- TIMELINE PAGE ----------
const TimelineEvents = [
  // Prehistory & antiquity
  { y: -10000, row:'history', title:'Agriculture begins', topic:'prehistory' },
  { y: -3200, row:'history', title:'Writing invented (Mesopotamia)', topic:'mesopotamia' },
  { y: -2560, row:'history', title:'Great Pyramid of Giza', topic:'egypt' },
  { y: -800, row:'history', title:'Homeric epics', topic:'greece' },
  { y: -500, row:'history', title:'Classical Greece', topic:'greece' },
  { y: -300, row:'science', title:"Euclid's Elements", topic:'geom' },
  { y: -212, row:'science', title:'Archimedes', topic:'math' },
  { y: 476, row:'history', title:'Fall of Western Rome', topic:'rome' },
  { y: 800, row:'history', title:'Islamic Golden Age', topic:'islam' },
  { y: 1215, row:'history', title:'Magna Carta', topic:'medieval' },
  { y: 1450, row:'history', title:'Printing press', topic:'renaissance' },
  { y: 1492, row:'history', title:'Columbus reaches Americas', topic:'exploration' },
  { y: 1543, row:'science', title:'Copernicus: heliocentrism', topic:'astronomy' },
  { y: 1609, row:'science', title:'Galileo & the telescope', topic:'astronomy' },
  { y: 1687, row:'science', title:"Newton's Principia", topic:'mechanics' },
  { y: 1776, row:'history', title:'American Declaration of Independence', topic:'enlightenment' },
  { y: 1789, row:'history', title:'French Revolution', topic:'enlightenment' },
  { y: 1800, row:'science', title:'Battery invented (Volta)', topic:'em' },
  { y: 1859, row:'science', title:"Darwin's On the Origin of Species", topic:'evolution' },
  { y: 1865, row:'science', title:"Maxwell's equations", topic:'em' },
  { y: 1879, row:'tech', title:'Light bulb (Edison)', topic:'electrical' },
  { y: 1900, row:'science', title:"Planck's quantum hypothesis", topic:'quantum' },
  { y: 1905, row:'science', title:'Einstein: special relativity', topic:'relativity' },
  { y: 1914, row:'history', title:'WWI begins', topic:'ww' },
  { y: 1915, row:'science', title:'General relativity', topic:'relativity' },
  { y: 1936, row:'tech', title:"Turing's universal machine", topic:'ai' },
  { y: 1939, row:'history', title:'WWII begins', topic:'ww' },
  { y: 1945, row:'history', title:'Nuclear age begins', topic:'ww' },
  { y: 1953, row:'science', title:'DNA structure (Watson, Crick, Franklin)', topic:'genetics' },
  { y: 1957, row:'tech', title:'Sputnik', topic:'solar' },
  { y: 1969, row:'tech', title:'Moon landing', topic:'solar' },
  { y: 1983, row:'tech', title:'Internet (TCP/IP adoption)', topic:'programming' },
  { y: 1989, row:'tech', title:'World Wide Web', topic:'programming' },
  { y: 2007, row:'tech', title:'iPhone', topic:'ai_craft' },
  { y: 2012, row:'tech', title:'Deep learning breakthrough (AlexNet)', topic:'ai' },
  { y: 2017, row:'tech', title:'Transformer architecture', topic:'ai' },
  { y: 2022, row:'tech', title:'ChatGPT; LLMs enter public life', topic:'ai' },
  // Arts
  { y: -500, row:'arts', title:'Greek tragedy', topic:'theater' },
  { y: 1504, row:'arts', title:"Michelangelo's David", topic:'renart' },
  { y: 1606, row:'arts', title:'Shakespeare writing', topic:'shakespeare' },
  { y: 1722, row:'arts', title:"Bach's Well-Tempered Clavier", topic:'classical' },
  { y: 1824, row:'arts', title:"Beethoven's 9th Symphony", topic:'classical' },
  { y: 1874, row:'arts', title:'First Impressionist exhibition', topic:'art' },
  { y: 1907, row:'arts', title:"Picasso's Les Demoiselles d'Avignon", topic:'art' },
  { y: 1927, row:'arts', title:'Sound film arrives', topic:'film' },
];

const TimelinePage = ({ onNav }) => {
  const [filter, setFilter] = uS2('all');
  const events = filter === 'all' ? TimelineEvents : TimelineEvents.filter(e => e.row === filter);
  const minY = -10500, maxY = 2030;
  const pos = y => ((y - minY) / (maxY - minY)) * 100;
  const ticks = [-10000, -5000, -2000, 0, 500, 1000, 1500, 1800, 1900, 1950, 2000];
  const rows = ['history','science','tech','arts'];
  const rowLabels = { history:'History & Politics', science:'Science', tech:'Technology', arts:'Arts & Letters' };

  return (
    <div className="timeline-page" data-screen-label="timeline">
      <div className="timeline-head">
        <div className="eyebrow">§ Reference</div>
        <h1 className="serif" style={{marginTop:16}}>The Unified Timeline</h1>
        <div style={{fontSize:15,color:'var(--ink-3)',marginTop:12,maxWidth:560,lineHeight:1.55}}>
          Twelve thousand years, one chart. Science, history, technology, and art laid out along the same axis — because they happened to the same people.
        </div>
        <div className="timeline-filter">
          {['all',...rows].map(r => (
            <button key={r} className={`timeline-filter-chip ${filter===r?'active':''}`} onClick={()=>setFilter(r)}>
              {r==='all'?'Everything':rowLabels[r]}
            </button>
          ))}
        </div>
      </div>

      <div className="timeline-scale">
        {ticks.map(t => (
          <React.Fragment key={t}>
            <div className="timeline-scale-tick" style={{left:`${pos(t)}%`}}/>
            <div className="timeline-scale-label" style={{left:`${pos(t)}%`}}>{t<0?`${-t} BCE`:`${t} CE`}</div>
          </React.Fragment>
        ))}
      </div>

      <div className="timeline-rows">
        {rows.filter(r => filter==='all'||filter===r).map(row => (
          <div key={row} className="timeline-row">
            <div className="timeline-row-label">{rowLabels[row]}</div>
            <div className="timeline-track">
              {events.filter(e => e.row===row).map((e, i) => {
                const topic = allTopics().find(t => t.id === e.topic);
                return (
                  <div key={i} className="timeline-event" style={{left:`${pos(e.y)}%`, top:`${20 + (i%3)*20}%`}}
                       onClick={() => topic && onNav({page:'lesson',topicId:topic.id,subjectId:topic.subjectId})}>
                    <div className="timeline-event-date">{e.y<0?`${-e.y} BCE`:e.y}</div>
                    <div>{e.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
window.TimelinePage = TimelinePage;

// ---------- MAP PAGE ----------
const MapPins = [
  { x: 265, y: 180, name:'Athens', topic:'greece', note:'Classical Greece, philosophy, democracy.' },
  { x: 268, y: 175, name:'Rome', topic:'rome', note:'Republic and empire.' },
  { x: 295, y: 200, name:'Alexandria', topic:'egypt', note:'Ancient library, center of learning.' },
  { x: 325, y: 195, name:'Baghdad', topic:'islam', note:'Islamic Golden Age — House of Wisdom.' },
  { x: 305, y: 205, name:'Jerusalem', topic:'religion', note:'Three faiths, one hill.' },
  { x: 255, y: 165, name:'Florence', topic:'renaissance', note:'Quattrocento, the Medici.' },
  { x: 180, y: 160, name:'Paris', topic:'enlightenment', note:'The Enlightenment.' },
  { x: 225, y: 140, name:'London', topic:'industrial', note:'Industrial Revolution.' },
  { x: 420, y: 235, name:'Nalanda', topic:'religion', note:'Ancient Buddhist university.' },
  { x: 480, y: 175, name:'Beijing', topic:'history', note:'Chinese dynastic capital.' },
  { x: 475, y: 230, name:'Angkor', topic:'history', note:'Khmer empire.' },
  { x: 130, y: 195, name:'Timbuktu', topic:'history', note:'West African center of learning.' },
  { x: 120, y: 250, name:'Great Zimbabwe', topic:'history', note:'Medieval African state.' },
  { x: 125, y: 240, name:'Congo', topic:'geography', note:'Basin of the second-longest river.' },
  { x: 560, y: 275, name:'Sydney', topic:'geography', note:'' },
  { x: 620, y: 270, name:'Polynesia', topic:'exploration', note:'Pacific navigation.' },
  { x: 80, y: 230, name:'Teotihuacan', topic:'history', note:'Pre-Columbian metropolis.' },
  { x: 100, y: 280, name:'Machu Picchu', topic:'history', note:'Inca citadel.' },
  { x: 145, y: 170, name:'Washington DC', topic:'politics', note:'US capital.' },
  { x: 520, y: 155, name:'Siberia', topic:'geography', note:'Crossroads of Ice Age migration.' },
];

const MapPage = ({ onNav }) => {
  const [hover, setHover] = uS2(null);
  // Simple stylized world SVG (continental blobs)
  return (
    <div className="map-page" data-screen-label="map">
      <div className="map-head">
        <div className="eyebrow">§ Reference</div>
        <h1 className="serif" style={{marginTop:16}}>The Atlas, mapped</h1>
        <div style={{fontSize:15,color:'var(--ink-3)',marginTop:12,maxWidth:560,lineHeight:1.55}}>
          Ideas happen somewhere. Hover a pin to see which lesson lives there; click to jump.
        </div>
      </div>
      <div className="map-frame" onMouseMove={e => {
        if (hover) setHover(h => ({...h, clientX: e.clientX, clientY: e.clientY}));
      }}>
        <svg viewBox="0 0 700 400" xmlns="http://www.w3.org/2000/svg">
          <rect width="700" height="400" fill="#ebe4d4"/>
          {/* Stylized landmasses */}
          <g fill="#c9c0aa" stroke="#8a8c6a" strokeWidth="0.5">
            {/* N America */}
            <path d="M50,80 Q20,150 60,220 Q90,280 160,290 L180,260 Q170,220 190,180 L170,130 L140,90 Q90,60 50,80Z"/>
            {/* S America */}
            <path d="M110,280 Q90,340 120,370 Q145,380 150,340 L140,310 Q130,290 110,280Z"/>
            {/* Europe */}
            <path d="M210,120 Q190,160 220,180 L260,175 L280,150 L270,125 Q250,100 210,120Z"/>
            {/* Africa */}
            <path d="M230,190 Q215,250 240,310 Q270,335 280,300 L300,260 Q310,230 295,200 L260,185 Z"/>
            {/* Asia */}
            <path d="M300,90 Q400,80 500,100 Q550,120 560,170 Q540,220 470,240 L420,250 Q380,240 350,210 L320,180 L310,140 Z"/>
            {/* SE Asia / islands */}
            <path d="M480,230 Q510,250 500,270 L470,265 Z"/>
            <path d="M520,250 L555,260 L550,275 L525,270 Z"/>
            {/* Australia */}
            <path d="M540,260 Q580,255 600,280 Q590,300 550,295 Q530,280 540,260 Z"/>
            {/* Antarctica hint */}
            <path d="M100,380 L600,380 L600,400 L100,400 Z" opacity="0.5"/>
          </g>

          {/* Pins */}
          {MapPins.map((p,i) => (
            <g key={i} className="map-pin"
               onMouseEnter={e => setHover({...p, clientX: e.clientX, clientY: e.clientY})}
               onMouseLeave={() => setHover(null)}
               onClick={() => {
                 const t = allTopics().find(x => x.id === p.topic);
                 if (t) onNav({page:'lesson',topicId:t.id,subjectId:t.subjectId});
               }}>
              <circle cx={p.x} cy={p.y} r="5" fill="#c8621a" stroke="#6b2a0a" strokeWidth="1.5"/>
            </g>
          ))}
        </svg>
        {hover && (
          <div className="map-pin-tooltip" style={{
            left: Math.min(window.innerWidth - 260, (hover.clientX || 0) - 120),
            top: (hover.clientY || 0) - 80,
            position: 'fixed',
          }}>
            <strong>{hover.name}</strong>
            {hover.note}
          </div>
        )}
      </div>
    </div>
  );
};
window.MapPage = MapPage;

// ---------- RANDOM PAGE ----------
const RandomPage = ({ onNav }) => {
  const all = uM2(() => allTopics(), []);
  const [spinning, setSpinning] = uS2(false);
  const [current, setCurrent] = uS2(() => all[Math.floor(Math.random()*all.length)]);
  const spin = () => {
    setSpinning(true);
    let n = 0;
    const id = setInterval(() => {
      setCurrent(all[Math.floor(Math.random()*all.length)]);
      n++;
      if (n > 16) { clearInterval(id); setSpinning(false); }
    }, 70);
  };
  return (
    <div className="random-page" data-screen-label="random">
      <div className="eyebrow" style={{marginTop:40}}>§ Serendipity</div>
      <h1 className="serif" style={{fontSize:'clamp(56px,8vw,96px)',letterSpacing:'-0.035em',marginTop:16}}>Surprise me.</h1>
      <div style={{color:'var(--ink-3)',fontSize:15,maxWidth:480,margin:'16px auto 0',lineHeight:1.55}}>
        One topic, chosen by chance. The best way to learn something you didn't know you wanted to learn.
      </div>

      <div className={`random-wheel ${spinning?'spinning':''}`}>
        <div>
          <div className="eyebrow" style={{marginBottom:12}}>{current.subjectName} · {current.level}</div>
          <div><em>{current.name}</em></div>
          <div style={{fontFamily:'var(--sans)',fontSize:15,color:'var(--ink-3)',maxWidth:500,margin:'16px auto 0',lineHeight:1.5}}>{current.desc}</div>
        </div>
      </div>

      <div style={{display:'flex',gap:10,justifyContent:'center'}}>
        <button className="btn-primary" onClick={spin} disabled={spinning}><Icon name="sparkle" size={12}/> Spin again</button>
        <button className="btn-primary" style={{background:'var(--amber)'}} onClick={() => onNav({page:'lesson',topicId:current.id,subjectId:current.subjectId})}>Read this lesson →</button>
      </div>
    </div>
  );
};
window.RandomPage = RandomPage;
