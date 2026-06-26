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
