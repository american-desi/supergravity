// ============================================
// Chapters — NYC (Chapter I)
// Local events, founding masters, partner venues.
// This is the social/IRL surface of Supergravity. For launch it is one
// chapter in one city, hand-run by the founder.
// ============================================

const { useState: uCS, useMemo: uCM } = React;

// ——— Seed data ———
// Events are hand-written for the first season. Real implementation will
// eventually pull from a booking backend (Luma, then a native one).

const NYC_EVENTS = [
  {
    id: 'ev-intro-atlas',
    date: 'Thu · May 2',
    time: '7:00 – 8:30 pm',
    title: 'The Atlas: An Introduction',
    host: 'The Founder',
    hostRole: 'Chapter Steward',
    venue: 'Jefferson Market Library · West Village',
    subject: 'Orientation',
    audience: 'All ages 13+',
    price: 'Free · Members and guests',
    desc: 'An opening salon. Read the Rule aloud. Introduce the Path. Meet the founding Companions. Bring a friend.',
    spots: 'Room for 28 · 9 left',
    kind: 'salon',
  },
  {
    id: 'ev-philo-symposium',
    date: 'Tue · May 7',
    time: '7:30 – 9:00 pm',
    title: 'Plato\'s Symposium · a close reading',
    host: 'A. Ruiz',
    hostRole: 'Fellow, Philosophy',
    venue: 'Cathedral of St. John the Divine · St. Saviour\'s Chapel',
    subject: 'Philosophy · Wisdom Traditions',
    audience: '15+ · intergenerational',
    price: '$12 · Members · $20 · Guests',
    desc: 'One text, read slowly, over a long evening. We will focus on Diotima\'s speech. Bring any edition; pages are supplied.',
    spots: 'Room for 20 · 6 left',
    kind: 'seminar',
  },
  {
    id: 'ev-hand-tools',
    date: 'Sat · May 11',
    time: '10:00 am – 1:00 pm',
    title: 'Hand Tools · a first afternoon',
    host: 'M. Okafor',
    hostRole: 'Master, Woodworking',
    venue: 'NYC Resistor · Gowanus, Brooklyn',
    subject: 'Trades · Woodworking',
    audience: '13+ · teens welcome with parent or adult member',
    price: '$45 · includes materials',
    desc: 'Learn to sharpen, set, and use a hand plane, a chisel, and a dovetail saw. You will take home a small piece of joined wood.',
    spots: 'Room for 10 · 2 left',
    kind: 'workshop',
  },
  {
    id: 'ev-shabbat-study',
    date: 'Fri · May 17',
    time: '5:00 – 6:30 pm',
    title: 'Reading Ecclesiastes · across traditions',
    host: 'Rabbi D. Klein · Rev. M. Alvarez',
    hostRole: 'Guest teachers',
    venue: 'B\'nai Jeshurun · Upper West Side',
    subject: 'Wisdom Traditions',
    audience: 'All ages 13+',
    price: 'Free · open to the public',
    desc: 'A Jewish and a Christian reader open the same text, side by side. Held before the BJ community Shabbat; all are welcome to stay or slip out.',
    spots: 'No RSVP needed',
    kind: 'seminar',
  },
  {
    id: 'ev-astronomy-field',
    date: 'Sat · May 25',
    time: '9:30 pm – 12:00 am',
    title: 'A Night Sky, in the city',
    host: 'S. Park',
    hostRole: 'Companion, Astronomy',
    venue: 'Pier 1 · Brooklyn Bridge Park',
    subject: 'Astronomy',
    audience: 'All ages 13+',
    price: '$10 · Members · $15 · Guests',
    desc: 'Two small telescopes. Jupiter, the moon, and whatever Manhattan light permits. Bring a warm coat.',
    spots: 'Room for 16 · 11 left',
    kind: 'field',
  },
  {
    id: 'ev-gathering-spring',
    date: 'Sat · Jun 7',
    time: '4:00 – 9:00 pm',
    title: 'The Gathering · Spring',
    host: 'All Fellows',
    hostRole: 'Chapter',
    venue: 'Prospect Park Picnic House',
    subject: 'Ceremony · All subjects',
    audience: 'Members and guests · 13+',
    price: '$25 · includes supper',
    desc: 'The seasonal ceremony. New Apprentices, Companions, and Fellows are recognized. We eat together. The Rule is read aloud.',
    spots: 'Room for 80 · 54 left',
    kind: 'ceremony',
  },
];

const FOUNDING_MASTERS = [
  { name: 'A. Ruiz', subject: 'Philosophy', bio: 'Adjunct at The New School. Lifelong reader of the dialogues. Runs a long-standing Symposium group.' },
  { name: 'M. Okafor', subject: 'Woodworking', bio: 'Twenty years in furniture. Teaches one Saturday a month out of Gowanus. Pro-hand-tool, skeptic of the router.' },
  { name: 'S. Park', subject: 'Astronomy', bio: 'Amateur astronomer, retired MTA engineer. Two telescopes. Will tell you why Jupiter is better than Saturn.' },
  { name: 'J. Morales', subject: 'Cooking', bio: 'Line cook turned home teacher. Mexican and Cantonese. Will not let you skip mise en place.' },
  { name: 'Rabbi D. Klein', subject: 'Wisdom Traditions', bio: 'Community rabbi. Talmud study once a week, open to all. Reads Ecclesiastes in Hebrew, loudly.' },
  { name: 'Rev. M. Alvarez', subject: 'Wisdom Traditions', bio: 'Episcopal priest. Teaches contemplative reading. Has opinions about the Book of Common Prayer.' },
  { name: 'L. Chen', subject: 'Mathematics', bio: 'Math PhD dropout. Now a programmer. Runs a proof-writing circle for adults who were told they "weren\'t math people."' },
  { name: 'F. Abdi', subject: 'Poetry & Calligraphy', bio: 'Calligrapher and translator. Brings brushes and ink. Teaches the shape of letters alongside the shape of a line.' },
  { name: 'T. Grady', subject: 'Bike Mechanics', bio: 'Neighborhood wrench. Will teach you to build a wheel from scratch. Opinionated about tire pressure.' },
  { name: 'E. Volkov', subject: 'Choral Singing', bio: 'Choir director, conservatory-trained. Runs a public sing every first Sunday. No audition, no judgment.' },
];

const PARTNER_VENUES = [
  { name: 'New York Public Library', where: 'Schwarzman (42nd) & Jefferson Market', note: 'Free meeting rooms; civic credibility.' },
  { name: 'Brooklyn Public Library', where: 'Central · Grand Army Plaza', note: 'Community programming partner; teen-friendly.' },
  { name: 'Cathedral of St. John the Divine', where: 'Morningside Heights', note: 'Pluralist by long tradition. Chapels for seminars; great hall for gatherings.' },
  { name: 'B\'nai Jeshurun', where: 'Upper West Side', note: 'Progressive congregation; open to public-facing study.' },
  { name: 'Redeemer Presbyterian', where: 'Upper West Side & LES', note: 'Serious reading culture; strong public programming.' },
  { name: 'NYC Resistor', where: 'Gowanus, Brooklyn', note: 'Trades and making; member-run hack space.' },
  { name: 'The Strand · Center for Fiction', where: 'Manhattan & Brooklyn', note: 'Literary events; reading-list partners.' },
  { name: 'Prospect Park & Brooklyn Bridge Park', where: 'Outdoor', note: 'Seasonal gatherings and astronomy nights.' },
];

const EVENT_KINDS = [
  { id: 'all', label: 'All events' },
  { id: 'salon', label: 'Salons' },
  { id: 'seminar', label: 'Seminars' },
  { id: 'workshop', label: 'Workshops' },
  { id: 'field', label: 'Field' },
  { id: 'ceremony', label: 'Gatherings' },
];

const ChaptersPage = ({ onNav, user }) => {
  const [kind, setKind] = uCS('all');
  const events = kind === 'all' ? NYC_EVENTS : NYC_EVENTS.filter(e => e.kind === kind);

  return (
    <div className="chapters-page" data-screen-label="chapters">
      {/* ——— Masthead ——— */}
      <header className="chapters-head">
        <div className="eyebrow">§ The chapter · New York City</div>
        <h1 className="serif chapters-title">In person, in the city.</h1>
        <p className="chapters-dek">
          Chapter I meets across the five boroughs — in libraries, church basements, maker spaces, and
          parks. Events are the heart of Supergravity. The atlas and the tutor are how you prepare;
          the chapter is where you become a member.
        </p>
        <div className="chapters-stats">
          <div><div className="chapters-stat-n serif">1</div><div className="chapters-stat-l">Chapter</div></div>
          <div><div className="chapters-stat-n serif">10</div><div className="chapters-stat-l">Founding masters</div></div>
          <div><div className="chapters-stat-n serif">8</div><div className="chapters-stat-l">Partner venues</div></div>
          <div><div className="chapters-stat-n serif">{NYC_EVENTS.length}</div><div className="chapters-stat-l">Events this season</div></div>
        </div>
      </header>

      {/* ——— Upcoming events ——— */}
      <section className="chapters-section">
        <div className="chapters-section-row">
          <h2 className="serif chapters-section-title">Upcoming</h2>
          <div className="chapters-kind-row">
            {EVENT_KINDS.map(k => (
              <button
                key={k.id}
                className={`chapters-kind-btn ${kind === k.id ? 'active' : ''}`}
                onClick={() => setKind(k.id)}
              >
                {k.label}
              </button>
            ))}
          </div>
        </div>

        <div className="chapters-events">
          {events.map(ev => (
            <article key={ev.id} className={`chapters-event kind-${ev.kind}`}>
              <div className="chapters-event-date">
                <div className="chapters-event-date-d">{ev.date}</div>
                <div className="chapters-event-date-t">{ev.time}</div>
              </div>
              <div className="chapters-event-body">
                <div className="chapters-event-tags">
                  <span className="chapters-event-subject">{ev.subject}</span>
                  <span className="chapters-event-audience">{ev.audience}</span>
                </div>
                <h3 className="serif chapters-event-title">{ev.title}</h3>
                <p className="chapters-event-desc">{ev.desc}</p>
                <div className="chapters-event-meta">
                  <div><span className="lbl">Host</span> <span>{ev.host} · {ev.hostRole}</span></div>
                  <div><span className="lbl">Where</span> <span>{ev.venue}</span></div>
                  <div><span className="lbl">Price</span> <span>{ev.price}</span></div>
                </div>
              </div>
              <div className="chapters-event-cta">
                <div className="chapters-event-spots">{ev.spots}</div>
                <button
                  className="btn-primary"
                  onClick={() => {
                    if (!user) return window.__openSignIn?.();
                    alert(`RSVP for "${ev.title}" — booking backend not yet wired. This will confirm your seat in the full launch.`);
                  }}
                >
                  {user ? 'Reserve a seat' : 'Sign in to reserve'}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ——— Founding masters ——— */}
      <section className="chapters-section">
        <h2 className="serif chapters-section-title">Founding masters</h2>
        <p className="chapters-section-lead">
          The first ten teachers of Chapter I — Fellows who have agreed to host the opening season.
          Each is vetted, background-checked where needed, and has committed to one public event per
          month. New masters are recognized at The Gathering by existing Fellows of the subject.
        </p>
        <div className="chapters-masters">
          {FOUNDING_MASTERS.map((m, i) => (
            <div key={i} className="chapters-master">
              <div className="chapters-master-mark serif">{m.name.split(' ').map(p => p[0]).join('')}</div>
              <div className="chapters-master-body">
                <div className="chapters-master-name">{m.name}</div>
                <div className="chapters-master-subj">{m.subject}</div>
                <div className="chapters-master-bio">{m.bio}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ——— Venues ——— */}
      <section className="chapters-section">
        <h2 className="serif chapters-section-title">Where we meet</h2>
        <p className="chapters-section-lead">
          Supergravity does not own a building. We are guests in the third places New York has already
          built — libraries, houses of worship, shops, and parks. This is by design: a chapter is a
          current moving through the city, not a new wall inside it.
        </p>
        <div className="chapters-venues">
          {PARTNER_VENUES.map((v, i) => (
            <div key={i} className="chapters-venue">
              <div className="chapters-venue-name">{v.name}</div>
              <div className="chapters-venue-where">{v.where}</div>
              <div className="chapters-venue-note">{v.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ——— On safety, for parents ——— */}
      <section className="chapters-section chapters-safety">
        <div className="eyebrow">§ For parents of members aged 13–17</div>
        <h2 className="serif">How teens are kept safe.</h2>
        <div className="chapters-safety-grid">
          <div>
            <div className="chapters-safety-name">Vetted hosts</div>
            <p>Every adult who hosts a teen-facing event passes a background check and signs a code of conduct before the first event.</p>
          </div>
          <div>
            <div className="chapters-safety-name">Public venues only</div>
            <p>All events take place in libraries, houses of worship, shops, or parks — never in private homes, and never behind closed doors.</p>
          </div>
          <div>
            <div className="chapters-safety-name">Group-only apprenticeships</div>
            <p>No one-to-one adult–minor meetings on the platform. Mentorship for teens happens in groups, or with a parent present.</p>
          </div>
          <div>
            <div className="chapters-safety-name">Parental consent</div>
            <p>A parent or guardian confirms each teen account and is notified for every event they register for.</p>
          </div>
        </div>
      </section>

      {/* ——— CTA ——— */}
      <section className="chapters-cta">
        <div className="chapters-cta-inner">
          <div>
            <div className="serif chapters-cta-title">Become a founding member.</div>
            <div className="chapters-cta-sub">
              The first cohort of Chapter I is forming now. Members pay $25 / month — this includes the
              atlas, the tutor, and one free event per month. Supporters pay more to seed the chapter.
            </div>
          </div>
          <div className="chapters-cta-btns">
            {!user && <button className="btn-primary" onClick={() => window.__openSignIn?.('up')}>Apply to join →</button>}
            {user && <button className="btn-primary" onClick={() => alert('Membership checkout not yet wired. Thank you for the interest — we will email you within the week.')}>Apply to join →</button>}
            <button className="btn-ghost" onClick={() => onNav({ page: 'rule' })}>Read the Rule first</button>
            <button className="btn-ghost" onClick={() => onNav({ page: 'path' })}>See the Path</button>
          </div>
        </div>
      </section>
    </div>
  );
};

window.ChaptersPage = ChaptersPage;
window.NYC_EVENTS = NYC_EVENTS;
window.FOUNDING_MASTERS = FOUNDING_MASTERS;
window.PARTNER_VENUES = PARTNER_VENUES;
