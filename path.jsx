// ============================================
// The Path — Apprentice → Companion → Fellow
// The core new identity: a three-stage practice-based progression,
// repeated across any subject. The ideal member is Fellow in 1–2 subjects,
// Companion in 3–5, Apprentice in many.
// ============================================

const { useState: uPS, useEffect: uPE, useMemo: uPM } = React;

const STAGES = [
  {
    id: 'apprentice',
    num: 'I',
    name: 'Apprentice',
    sub: 'You have begun.',
    color: 'var(--moss, #5a7a55)',
    qualifies: [
      'Read the three foundational lessons in the subject',
      'Attended one chapter event on the subject, in person',
      'Produced a first piece of work — a page of notes, a sketch, a dish, a proof, a prayer',
    ],
    earns: [
      'A name in the directory of apprentices',
      'Permission to attend all chapter events in the subject',
      'A Companion to check in with once a season',
    ],
    voice:
      'An Apprentice is not a beginner. A beginner has not yet started. An Apprentice has crossed the threshold, and now the work is simply to continue — not to impress, not to finish, only to stay near the subject long enough for it to become familiar.',
  },
  {
    id: 'companion',
    num: 'II',
    name: 'Companion',
    sub: 'You are committed.',
    color: 'var(--amber, #c88a3a)',
    qualifies: [
      'Fifty hours of attested practice, logged in your Workshop',
      'A substantial body of work — a portfolio, a finished project, a written account',
      'A relationship with a Fellow who has read your work and attested to its seriousness',
    ],
    earns: [
      'A Companion\'s mark on your profile, in the subject',
      'Standing to lead reading groups and small seminars',
      'An Apprentice of your own, should you wish one',
    ],
    voice:
      'A Companion walks beside the subject — long enough to have private opinions, honest disagreements, favorite passages. Companions are the middle country of any discipline, and most of Supergravity\'s daily life is made by them.',
  },
  {
    id: 'fellow',
    num: 'III',
    name: 'Fellow',
    sub: 'You can teach it.',
    color: 'var(--plum, #5a3a6a)',
    qualifies: [
      'Recognized by two existing Fellows of the subject — in writing, at the seasonal gathering',
      'A public work: a lecture given, a class taught, an exhibition mounted, a body of writing published',
      'A written Rule of your own: how you practice the subject, what you believe about it',
    ],
    earns: [
      'The Fellow\'s mark — permanent, witnessed, granted in ceremony',
      'Standing to host chapter events and take on Companions',
      'A vote on the admission of new Fellows in the subject',
    ],
    voice:
      'A Fellow has done the subject long enough to have earned the right to a point of view. Fellows teach. Fellows host. Fellows are how Supergravity continues after any one of us is gone. The title is not a badge — it is a promise to the community.',
  },
];

const PathPage = ({ onNav, user }) => {
  return (
    <div className="path-page" data-screen-label="path">
      {/* ——— Masthead ——— */}
      <header className="path-hero">
        <div className="eyebrow">§ How we recognize becoming</div>
        <h1 className="serif path-hero-title">The Path</h1>
        <p className="path-hero-dek">
          Three stages, earned over time, in any subject in the atlas. There are no grades, no streaks,
          no points. Only the Path — witnessed, marked, and repeated across as many subjects as a life has
          time for.
        </p>
        <div className="path-hero-roman">
          <span className="path-roman-num">I</span>
          <span className="path-roman-arrow">→</span>
          <span className="path-roman-num">II</span>
          <span className="path-roman-arrow">→</span>
          <span className="path-roman-num">III</span>
        </div>
      </header>

      {/* ——— The three stages ——— */}
      <section className="path-stages">
        {STAGES.map((s) => (
          <article key={s.id} className="path-stage" style={{ '--stage-color': s.color }}>
            <div className="path-stage-head">
              <div className="path-stage-num">{s.num}</div>
              <div>
                <div className="path-stage-name serif">{s.name}</div>
                <div className="path-stage-sub">{s.sub}</div>
              </div>
            </div>

            <p className="path-stage-voice">{s.voice}</p>

            <div className="path-stage-cols">
              <div className="path-stage-col">
                <div className="path-stage-col-title">What qualifies you</div>
                <ul>{s.qualifies.map((q, i) => <li key={i}>{q}</li>)}</ul>
              </div>
              <div className="path-stage-col">
                <div className="path-stage-col-title">What you earn</div>
                <ul>{s.earns.map((e, i) => <li key={i}>{e}</li>)}</ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ——— On repetition across subjects ——— */}
      <section className="path-repeat">
        <div className="eyebrow">§ The shape of a life here</div>
        <h2 className="serif">One Path. Many subjects.</h2>
        <p className="path-repeat-lead">
          The Path is not a ladder to climb once. It is a pattern you walk many times — once for every
          subject that asks it of you. A serious member, after some years, will be a Fellow of one or two
          things, a Companion in a handful more, an Apprentice in many.
        </p>
        <p>
          This is what we mean by a <em>liberally educated person</em>, in the old sense of the phrase —
          not a polymath, which is a word reserved for the rare, but a person at home in several rooms
          of the world, and still curious about the rest.
        </p>
      </section>

      {/* ——— The ceremony ——— */}
      <section className="path-ceremony">
        <div className="eyebrow">§ On the marks</div>
        <h2 className="serif">Earned in person.</h2>
        <p>
          Marks are never awarded by the app. They are granted at the seasonal gathering of the chapter,
          in the presence of members, by existing Fellows of the subject. The Apprentice's mark is small;
          the Companion's has weight; the Fellow's is witnessed and read aloud.
        </p>
        <p>
          This is the one thing we ask you to accept before joining: that recognition worth having is
          slow, public, and given by people who know your work.
        </p>
      </section>

      {/* ——— CTA ——— */}
      <section className="path-cta">
        <div className="path-cta-inner">
          <div>
            <div className="serif path-cta-title">Begin as an Apprentice.</div>
            <div className="path-cta-sub">
              Read a lesson attentively. Come to one chapter event. Produce a first piece of work.
            </div>
          </div>
          <div className="path-cta-btns">
            <button className="btn-primary" onClick={() => onNav({ page: 'atlas' })}>Open the atlas →</button>
            <button className="btn-ghost" onClick={() => onNav({ page: 'chapters' })}>See the NYC chapter</button>
            <button className="btn-ghost" onClick={() => onNav({ page: 'rule' })}>Read the Rule</button>
          </div>
        </div>
      </section>
    </div>
  );
};

window.PathPage = PathPage;
window.PATH_STAGES = STAGES;
