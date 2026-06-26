// ============================================
// The Rule of Supergravity
// One-page manifesto / constitution. Christian-rooted in form (echoes of
// Benedict, the liturgical year, contemplative practice) without being
// sectarian in content. Hospitable to every tradition.
// ============================================

const { useState: uRS, useMemo: uRM } = React;

const RULE = {
  preamble: [
    'Supergravity is a school without a building, and a chapter is a building without a school — a local, living group, bound together by a Path and a Rule, under the care of its Fellows.',
    'The atlas is our textbook, the tutor is our patient companion, the workshop is where we keep our working, and the chapter is where we become a people. The four are one thing.',
    'We do not claim to replace school for everyone. We claim to make a place, for those who want it, that has what school is missing — continuity, community, and a way of being recognized for what you actually know.',
  ],
  tenets: [
    {
      name: 'We learn to become, not to accumulate.',
      body:
        'A Supergravity member is not collecting facts, hours, or badges. We are shaping a life. Progress is measured in how much of the world has become familiar, not in what can be demonstrated on a test.',
    },
    {
      name: 'We learn in public, among friends.',
      body:
        'Reading alone has its hour. But the heart of the Path is the chapter — a local group that meets in person, witnesses one another\'s work, and over years forms a friendship around the love of learning. Online is scaffolding; the chapter is home.',
    },
    {
      name: 'We make things with our hands.',
      body:
        'Every member works at least one subject with the body — a craft, a trade, a cooked dish, an instrument, a garden. We do not accept a purely intellectual life as a sufficient life.',
    },
    {
      name: 'We keep a workshop.',
      body:
        'Each member keeps an ongoing record of their practice — what was read, what was made, what was understood, what was still puzzling. The Workshop is the journal of your Path, and the evidence at every stage.',
    },
    {
      name: 'We honor the traditions.',
      body:
        'Supergravity is rooted in the long Western tradition of liberal arts, shaped by a Christian founder who does not press that inheritance on anyone. We read Scripture the way we read Plato, Rumi, the Analects, the Upanishads, and Marcus Aurelius — attentively, humbly, and with respect. Every wisdom tradition has a seat at the table. No one is asked to sit where they do not belong.',
    },
    {
      name: 'We keep a sabbath.',
      body:
        'One day of every seven is not for learning. We do not track streaks. We do not push notifications on that day. Rest is part of the practice, not its interruption.',
    },
    {
      name: 'We recognize one another in person.',
      body:
        'Apprentices, Companions, and Fellows are named at the seasonal gathering of the chapter, before the group, by existing Fellows of the subject. No recognition is awarded by software. No mark is given for time served alone.',
    },
    {
      name: 'We teach as soon as we are able.',
      body:
        'The moment you become a Companion, you become available to an Apprentice. The moment you become a Fellow, you become responsible for hosting. Learning that does not return itself to the community is private, and Supergravity is not private.',
    },
  ],
  forbidden: [
    'We do not use streaks, points, XP, leaderboards, or any other device that turns learning into a game. Curiosity does not need a scoreboard.',
    'We do not evangelize. No faith is pushed on anyone; no member is recruited by deception. The atlas and the chapter are the invitation; nothing else.',
    'We do not permit adult–minor meetings outside of sanctioned group events. Apprenticeships for members under eighteen happen in groups, in public venues, with a parent or guardian informed.',
    'We do not tolerate contempt. Disagreement is our oxygen; contempt is our poison. A member who makes the chapter unsafe for good-faith disagreement is asked to leave.',
    'We do not sell member data. We do not advertise on this platform. Members pay a small sum, and the chapter is funded by what members pay.',
  ],
  promises: [
    'To every Apprentice: you will be known by name, within a season, by at least one Companion and one Fellow.',
    'To every Companion: you will be given real work — to lead a reading, to mentor an Apprentice, to host a small event — and you will be supported in doing it.',
    'To every Fellow: you will be honored in ceremony, your authority in your subject will be respected, and you will have a vote in what the chapter becomes.',
    'To every chapter: you will be a local and peculiar thing, shaped by the city you are in and the people who show up — not a franchise of a thing somewhere else.',
  ],
  seasons: [
    { name: 'Advent of the Year', when: 'Early autumn', note: 'New Apprentices are welcomed. The year\'s reading is announced.' },
    { name: 'Mid-winter Intensive', when: 'January', note: 'A week of close work. Small seminars. Long evenings. One shared text.' },
    { name: 'Lenten Quiet', when: 'Early spring', note: 'A month of reduced programming. Reading, walking, and the Workshop.' },
    { name: 'The Gathering', when: 'Late spring', note: 'The seasonal ceremony. New marks granted. Fellows affirmed. The chapter eats together.' },
    { name: 'Summer Field', when: 'Summer', note: 'Outdoor and hands-on subjects lead. Trades, crafts, astronomy, the garden.' },
  ],
};

const RulePage = ({ onNav }) => {
  return (
    <div className="rule-page" data-screen-label="rule">
      {/* ——— Masthead ——— */}
      <header className="rule-head">
        <div className="eyebrow">§ A plain statement of what we are</div>
        <h1 className="serif rule-title">The Rule of Supergravity</h1>
        <div className="rule-dateline">
          <span>Chapter I · NYC</span>
          <span>·</span>
          <span>Anno MMXXVI</span>
        </div>
      </header>

      {/* ——— Preamble ——— */}
      <section className="rule-section rule-preamble">
        <div className="rule-section-label">Preamble</div>
        {RULE.preamble.map((p, i) => (
          <p key={i} className={i === 0 ? 'lead' : ''}>{p}</p>
        ))}
      </section>

      {/* ——— Tenets ——— */}
      <section className="rule-section">
        <div className="rule-section-label">The eight tenets</div>
        <ol className="rule-tenets">
          {RULE.tenets.map((t, i) => (
            <li key={i} className="rule-tenet">
              <div className="rule-tenet-n">{String(i + 1).padStart(2, '0')}</div>
              <div className="rule-tenet-body">
                <div className="rule-tenet-name serif">{t.name}</div>
                <p>{t.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ——— Forbidden ——— */}
      <section className="rule-section">
        <div className="rule-section-label">What we do not do</div>
        <ul className="rule-forbidden">
          {RULE.forbidden.map((f, i) => <li key={i}>{f}</li>)}
        </ul>
      </section>

      {/* ——— Promises ——— */}
      <section className="rule-section">
        <div className="rule-section-label">What we promise</div>
        <ul className="rule-promises">
          {RULE.promises.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </section>

      {/* ——— Liturgical year ——— */}
      <section className="rule-section">
        <div className="rule-section-label">The year, in five seasons</div>
        <p>
          The chapter runs on a rhythm, not a calendar. These five seasons are kept in every Supergravity
          chapter, however each city chooses to fill them.
        </p>
        <div className="rule-seasons">
          {RULE.seasons.map((s, i) => (
            <div key={i} className="rule-season">
              <div className="rule-season-when">{s.when}</div>
              <div className="rule-season-name serif">{s.name}</div>
              <div className="rule-season-note">{s.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ——— Colophon ——— */}
      <footer className="rule-foot">
        <div className="rule-foot-line"/>
        <p className="rule-foot-body">
          This Rule may be edited only by the sitting Fellows of the chapter, only in the week following
          The Gathering, and only with the assent of two-thirds. It is read aloud, in full, once a year,
          to everyone present. It is kept short on purpose.
        </p>
        <div className="rule-foot-cta">
          <button className="btn-primary" onClick={() => onNav({ page: 'path' })}>Read about the Path →</button>
          <button className="btn-ghost" onClick={() => onNav({ page: 'chapters' })}>See the NYC chapter</button>
        </div>
      </footer>
    </div>
  );
};

window.RulePage = RulePage;
window.RULE = RULE;
