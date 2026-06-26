// content/djing.js
// Batch: B13-arts-performing
// Last updated: 2026-04-23 by BATCH B13+B14
//
// Topics this subject must cover (from data.js):
//   Core: beatmatch, phrasing

window.CONTENT = window.CONTENT || {};
window.CONTENT.djing = {
  subjectId: 'djing',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B13+B14',
  topics: {

    beatmatch: {
      id: 'beatmatch',
      name: 'Beatmatching',
      level: 'Intermediate',
      dek: 'Two records, one tempo — the foundational skill of club DJing and the sound of a seamless night.',
      readTime: '12 min',

      sections: ['A Bronx origin story', 'The turntable and the pitch fader', 'Matching, beat by beat', 'The modern shortcut — and why DJs still learn the old way', 'Blending, not just matching'],
      body: [
        { type: 'lead', text: 'On a humid August night in 1973, at a back-to-school party in the recreation room of 1520 Sedgwick Avenue in the Bronx, an eighteen-year-old Jamaican immigrant named Clive Campbell — who called himself DJ Kool Herc — stopped playing the full funk records his older sister had requested and started cutting back and forth between the instrumental breaks on two copies of the same 45. The crowd went up for the breaks. Herc played only the breaks. The "break" became a musical unit; the DJ became an author. Hip-hop was born that night. And so was the idea that a DJ\'s fundamental skill is blending two records into a continuous motion.' },
        { type: 'h2', text: 'A Bronx origin story' },
        { type: 'p', text: 'DJ Kool Herc, Afrika Bambaataa, and Grandmaster Flash built the vocabulary of the club DJ in the Bronx in the mid-1970s. Flash invented punch phrasing and the backspin; Grand Wizzard Theodore\'s teenage brother\'s accidental needle-scratch in 1975 became the scratch. The Chicago house and Detroit techno DJs of the early 1980s — Frankie Knuckles, Larry Levan at the Paradise Garage, Jeff Mills — extended the form into extended, beat-aligned, all-night mixes. By the late 1980s, beatmatching — keeping two records playing at the same tempo and on the same downbeat — was the entry-level skill. It still is.' },
        { type: 'h2', text: 'The turntable and the pitch fader' },
        { type: 'p', text: 'The standard club turntable is a Technics SL-1200, a Japanese direct-drive deck first produced in 1972 and still — after a brief hiatus — being manufactured today. The 1200\'s pitch fader adjusts the record\'s speed by up to eight percent up or down, which is how beatmatching is physically possible. A DJ takes the incoming record, listens to it in one headphone while the audience hears the outgoing record, spins the incoming platter slightly faster or slower with a finger on the edge, adjusts the pitch fader to match tempos, and releases the incoming deck at the exact instant a downbeat arrives. Done right, the audience never hears the cut. One song becomes another.' },
        { type: 'h2', text: 'Matching, beat by beat' },
        { type: 'p', text: 'Beatmatching has two parts: matching the tempo and matching the phase. Matching the tempo is a matter of counting: the incoming record is either faster or slower, and the pitch fader corrects it. Matching the phase is a matter of feel: the incoming record\'s downbeat lines up with the outgoing record\'s downbeat, one-two-three-four against one-two-three-four. A good DJ can beatmatch two records in ten seconds. A new DJ spends weeks of bedroom practice before they can do it on cue. The skill is mechanical, and it becomes invisible. After a year the ears match beats automatically while the mind thinks about the next tune.' },
        { type: 'h2', text: 'The modern shortcut — and why DJs still learn the old way' },
        { type: 'p', text: 'Since around 2005, digital DJ software — Serato, Traktor, Rekordbox — has displayed each track\'s tempo as a number (the BPM) and drawn its beats as a waveform on a laptop screen. A beginner can "sync" two tracks with a single button, matching tempos and phase automatically. This is now the standard at clubs and festivals. Many new DJs never learn to beatmatch by ear. Older DJs — and most serious ones — still learn the manual skill because it teaches the listener inside you what matching actually sounds like. A DJ who only syncs will struggle when a track drifts, a drum loop is slightly off, or the software crashes.' },
        { type: 'h2', text: 'Blending, not just matching' },
        { type: 'p', text: 'Beatmatching is the beginning, not the end. The actual skill is blending — using a three-band EQ, the crossfader, and the pitch to bring in one track while taking out another in a way that feels musical. The standard technique is a "long blend" across sixteen or thirty-two bars: bring in the kick of the new track under the bass of the old one, slowly roll off the old bass, cut the old high hats, let the new track take over the midrange, finally cut the old completely. Done right, the listener never notices the moment of transition. Done wrong, it sounds like two records, which is exactly what it is.' },
        { type: 'callout', text: 'The "bedroom DJ" — the novice practicing with headphones in a small room alone — is still the way most professionals begin. Buy two cheap turntables, a mixer, and two crates of cheap twelve-inches. Beatmatch every night for six months. At the end of six months you are a DJ. There is no shortcut worth the name.' },
      ],

      keyTerms: ['BPM', 'pitch fader', 'crossfader', 'cue point', 'downbeat', 'phase', 'sync', 'headphone cue', 'EQ kill', 'slip-cueing', 'drift', 'headroom'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@CrossfaderTV',
            title: 'Crossfader — DJ tutorials and gear reviews',
            channel: 'Crossfader',
            duration: 'variable',
            featured: true,
            why: 'Long-running beginner-friendly DJ school on YouTube. Patient, structured tutorials on beatmatching, EQ blending, and gear.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@DJTechTools',
            title: 'DJ TechTools — tutorials and industry interviews',
            channel: 'DJ TechTools',
            duration: 'variable',
            featured: true,
            why: 'The DJ-industry magazine\'s video channel. Tutorials, gear deep-dives, and interviews with working professional DJs.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@BoilerRoom',
            title: 'Boiler Room — archive of booth-view DJ sets',
            channel: 'Boiler Room',
            duration: 'variable',
            featured: true,
            why: 'The essential filmed archive of contemporary DJ performance. Close-up camera on the decks — watch working DJs match and blend in real time.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@MixMagTV',
            title: 'Mixmag — Lab and Recovery sessions',
            channel: 'Mixmag',
            duration: 'variable',
            featured: false,
            why: 'The London dance magazine\'s filmed DJ series. Working DJs at the top of their game, from every style. A free education in reading a crowd.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@djcarlocox',
            title: 'Carlo Cox — "living legend" long sets',
            channel: 'Carl Cox',
            duration: 'variable',
            featured: false,
            why: 'The three-deck techno legend\'s official channel. Watching Carl Cox mix on three turntables is one of the great educations in the craft.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@Resident-Advisor',
            title: 'Resident Advisor — podcasts and interviews',
            channel: 'Resident Advisor',
            duration: 'variable',
            featured: false,
            why: 'The electronic-music publication\'s filmed interview and podcast archive. Substantial DJ-on-DJ conversation.',
          },
        ],
        books: [
          {
            title: 'Last Night a DJ Saved My Life',
            author: 'Bill Brewster, Frank Broughton',
            year: 1999,
            url: 'https://groveatlantic.com/book/last-night-a-dj-saved-my-life/',
            why: 'The definitive history of the DJ, from disco through house and techno. The standard reference for every working DJ\'s understanding of their lineage.',
          },
          {
            title: 'How to DJ Right',
            author: 'Bill Brewster, Frank Broughton',
            year: 2002,
            url: 'https://groveatlantic.com/book/how-to-dj-right/',
            why: 'The companion how-to book. The most widely read beginner\'s DJ manual of the past twenty years. Still essentially correct in the digital era.',
          },
          {
            title: 'Energy Flash: A Journey Through Rave Music and Dance Culture',
            author: 'Simon Reynolds',
            year: 1998,
            url: 'https://faber.co.uk/9780571289134-energy-flash.html',
            why: 'The most influential history of the rave era. Reynolds is the critic every DJ ends up reading. Context for why the records you are mixing mattered when they mattered.',
          },
          {
            title: 'Can\'t Stop Won\'t Stop: A History of the Hip-Hop Generation',
            author: 'Jeff Chang',
            year: 2005,
            url: 'https://us.macmillan.com/books/9780312425791/cantstopwontstop',
            why: 'The founding history of hip-hop as a cultural movement. Essential background for anyone learning to DJ in the tradition Kool Herc started.',
          },
          {
            title: 'The Record Players',
            author: 'Bill Brewster, Frank Broughton',
            year: 2010,
            url: 'https://groveatlantic.com/book/the-record-players/',
            why: 'Oral history of DJ culture through interviews with the originators — Francis Grasso, Jellybean Benitez, Larry Levan\'s peers, David Mancuso. Primary source.',
          },
        ],
        articles: [
          {
            title: 'Beatmatching',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Beatmatching',
            why: 'Careful technical reference with references to Grasso, Herc, and the development of the practice.',
            year: null,
          },
          {
            title: 'Disc jockey',
            source: 'Britannica',
            url: 'https://www.britannica.com/art/disc-jockey',
            why: 'Editorial survey from radio DJ to club DJ. Historical framing for the modern turntablist.',
            year: null,
          },
          {
            title: 'Resident Advisor archive',
            source: 'Resident Advisor',
            url: 'https://ra.co/news',
            why: 'The standard working publication for club DJs and electronic musicians. Features, feature-length interviews, and reviews.',
          },
        ],
        courses: [
          {
            title: 'Crossfader DJ School (free YouTube curriculum)',
            provider: 'Crossfader',
            url: 'https://www.youtube.com/@CrossfaderTV',
            free: true,
            why: 'The most complete free beginner\'s DJ course online. Structured by skill, not by gear brand. Start here.',
          },
          {
            title: 'Point Blank Music School online courses',
            provider: 'Point Blank',
            url: 'https://www.pointblankmusicschool.com/',
            free: false,
            why: 'The London-based DJ and production school offers paid online courses in DJing, production, and mixing. The industry\'s standard formal curriculum.',
          },
        ],
        tools: [
          {
            title: 'Technics SL-1200 / SL-1210',
            url: 'https://www.technics.com/us/products/turntables/sl1200mk7.html',
            why: 'The reference club turntable since 1972. A modern working DJ learns on a 1200 regardless of what they end up playing on.',
          },
          {
            title: 'Serato DJ',
            url: 'https://serato.com/',
            why: 'The industry-standard digital DJ software. The first step when graduating from vinyl to digital is usually Serato with a Rane or Pioneer controller.',
          },
          {
            title: 'Rekordbox / Pioneer CDJ',
            url: 'https://rekordbox.com/en/',
            why: 'The Pioneer ecosystem is now the club standard worldwide. Rekordbox is the companion software every working DJ learns.',
          },
        ],
        primarySources: [
          {
            title: 'Grandmaster Flash — The Adventures of Grandmaster Flash on the Wheels of Steel (1981)',
            url: 'https://en.wikipedia.org/wiki/The_Adventures_of_Grandmaster_Flash_on_the_Wheels_of_Steel',
            why: 'The first recorded DJ mix released as a single. The Rosetta Stone of turntablism — beatmatching, scratching, cutting, all in seven minutes.',
          },
        ],
      },

      seeAlso: ['phrasing', 'popular', 'jazz'],
      prereqs: [],
      leadsTo: ['phrasing'],

      chapterActivity: 'A "beatmatch clinic" Sunday afternoon at a member\'s Brooklyn studio — two turntables, a mixer, and paired practice with a rotating partner. Leave when you can keep two records locked for thirty-two bars.',

      sources: [
        'https://en.wikipedia.org/wiki/Beatmatching',
        'https://www.britannica.com/art/disc-jockey',
      ],
      verifiedAt: '2026-04-23',
    },

    phrasing: {
      id: 'phrasing',
      name: 'Phrasing',
      level: 'Advanced',
      dek: 'Mixing on the right bar — the difference between two records playing at the same tempo and two records speaking to each other.',
      readTime: '12 min',

      sections: ['What a "phrase" is', 'The eight-bar grid', 'Why the drop matters', 'Energy curves across a set', 'Reading the room'],
      body: [
        { type: 'lead', text: 'Frankie Knuckles, the DJ at Chicago\'s Warehouse whose residency named house music, used to say that the difference between a DJ and a great DJ was that the great DJ always mixed on the right bar. Beatmatching is arithmetic — match the tempo, align the downbeat, cut. Phrasing is rhetoric. It is the sense that a house track has its own internal structure — intro, build, breakdown, drop, outro — and that blending it into the next track at the wrong point insults both records. The difference between amateurs and professionals in DJing is, more than anything else, phrasing.' },
        { type: 'h2', text: 'What a "phrase" is' },
        { type: 'p', text: 'Dance-music tracks are built in eight-bar phrases. Every eight bars something changes — a new element enters, an old one drops out, a riser climbs, a vocal lands. A sixteen-bar phrase contains two eight-bar phrases; a thirty-two-bar phrase, four. The entire architecture of a house, techno, drum-and-bass, or bass-music track is some variation of this grid. A DJ who cuts in the middle of a phrase — at bar five of eight, for instance — breaks the listener\'s expectation and disrupts the dance floor. A DJ who cuts on the first beat of a new phrase is delivering what the music is already promising.' },
        { type: 'h2', text: 'The eight-bar grid' },
        { type: 'p', text: 'Counting phrases while mixing is the discipline of the craft. A DJ learning to phrase listens for the break — the moment the drums cut out and a new element enters — and counts back eight bars to the previous break. Over time the counting becomes automatic. A skilled DJ can tell you where they are in a phrase at any moment: "breaks in four," "drop in sixteen," "eight bars until the bridge." This is the internal clock that allows the long blend. Without it, a blend that matched tempo perfectly still sounds wrong because it landed in the middle of a phrase.' },
        { type: 'h2', text: 'Why the drop matters' },
        { type: 'p', text: 'Every modern dance track builds toward a drop — the moment the build ends and the full energy of the track arrives, usually at bar sixty-five or bar ninety-seven of a ninety-six-bar intro. The drop is the emotional architecture of the track. A DJ who blends two tracks so that their drops coincide — that the incoming track\'s drop arrives at the moment the outgoing track\'s drop returns — creates a single larger moment that neither track would have alone. A DJ who lands a drop halfway through another track\'s outro has failed the night. The difference is two seconds of timing, and it is the difference between a professional and a disaster.' },
        { type: 'h2', text: 'Energy curves across a set' },
        { type: 'p', text: 'A long DJ set — four hours at a club, twelve hours at a festival afterparty — has an energy curve. A DJ starts softer than the night requires, builds to a peak around hour two, cools slightly to let the room breathe, rises again. The curve is not a straight line up; it breathes. The French DJ Laurent Garnier\'s legendary Manumission sets, the Detroit techno pioneer Derrick May\'s all-nighters, Danny Tenaglia\'s eighteen-hour marathons — all have structure, and the structure is an emotional arc drawn in track selection and phrasing. A DJ who plays at the same intensity for four hours is not playing a set. They are playing a playlist.' },
        { type: 'h2', text: 'Reading the room' },
        { type: 'p', text: 'The final art is reading the crowd. A DJ behind two decks in a basement at three in the morning watches what the floor is doing and adjusts in real time. If the energy flags, the next track has to raise it; if the energy is cresting, the next track has to match and extend. A good DJ has a long crate — a hundred and twenty tracks or more, if they are playing four hours — and selects live, based on what the floor needs. This is what distinguishes a human DJ from a curated playlist and what no algorithm has replaced. A set is a conversation with the room. Phrasing is how the DJ holds up their end of the conversation.' },
        { type: 'quote', text: 'The DJ who always mixes on the one is the DJ who respects the record.', cite: 'Frankie Knuckles' },
      ],

      keyTerms: ['eight-bar phrase', 'sixteen-bar phrase', 'downbeat', 'the drop', 'build', 'breakdown', 'energy curve', 'set architecture', 'long blend', 'crate selection', 'reading the floor'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@BoilerRoom',
            title: 'Boiler Room — full sets from working DJs',
            channel: 'Boiler Room',
            duration: 'variable',
            featured: true,
            why: 'The definitive archive of contemporary DJ performance. Watch a Jamie xx, Ben UFO, or Honey Dijon set all the way through to see phrasing and energy architecture in practice.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@Cercle',
            title: 'Cercle — destination DJ sets at scale',
            channel: 'Cercle',
            duration: 'variable',
            featured: true,
            why: 'Filmed DJ sets from locations around the world. Watch Dixon at the Forbidden City or Adriatique on the Uyuni Salt Flats; every set is an energy-curve case study.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@DJTechTools',
            title: 'DJ TechTools — phrasing and harmonic mixing tutorials',
            channel: 'DJ TechTools',
            duration: 'variable',
            featured: true,
            why: 'The standard online DJ-industry publication\'s video channel. Tutorials specifically on phrasing, key-mixing, and set construction.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@MixMagTV',
            title: 'Mixmag — Lab sessions',
            channel: 'Mixmag',
            duration: 'variable',
            featured: false,
            why: 'Long-format filmed sessions. A great way to hear a full set built in real time with camera on the decks.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@Resident-Advisor',
            title: 'Resident Advisor podcast and mix series',
            channel: 'Resident Advisor',
            duration: 'variable',
            featured: false,
            why: 'Recorded mixes from working DJs with context on the selections. Critical listening material.',
          },
        ],
        books: [
          {
            title: 'Last Night a DJ Saved My Life',
            author: 'Bill Brewster, Frank Broughton',
            year: 1999,
            url: 'https://groveatlantic.com/book/last-night-a-dj-saved-my-life/',
            why: 'The canonical DJ history. Pay close attention to the chapters on Larry Levan and Frankie Knuckles — the DJs who invented modern phrasing in New York and Chicago clubs.',
          },
          {
            title: 'How to DJ Right',
            author: 'Bill Brewster, Frank Broughton',
            year: 2002,
            url: 'https://groveatlantic.com/book/how-to-dj-right/',
            why: 'The practical companion. Chapters on programming and set architecture — the book\'s most-transferred chapters to the digital era.',
          },
          {
            title: 'Life and Death on the New York Dance Floor, 1980–1983',
            author: 'Tim Lawrence',
            year: 2016,
            url: 'https://www.dukeupress.edu/life-and-death-on-the-new-york-dance-floor-1980-1983',
            why: 'Tim Lawrence\'s cultural history of the Paradise Garage / Loft / Danceteria era. The single best study of what the great DJs actually did in a room over four hours.',
          },
          {
            title: 'Energy Flash',
            author: 'Simon Reynolds',
            year: 1998,
            url: 'https://faber.co.uk/9780571289134-energy-flash.html',
            why: 'Reynolds on rave music and its arc. Still the best close-reading of how a DJ\'s selection drives the emotional life of the dance floor.',
          },
          {
            title: 'House Music: The Oral History',
            author: 'Terry Matthew (2013) / Sheldon Pearce compendiums',
            year: 2013,
            url: 'https://www.worldcat.org/title/house-the-oral-history/oclc/852164252',
            why: 'The Chicago and New York DJs who made house tell the story themselves. The authoritative insider view.',
          },
        ],
        articles: [
          {
            title: 'Phrase (music)',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Phrase_(music)',
            why: 'Reference article on musical phrasing as a general concept, with the specific application to electronic music covered in cross-links.',
            year: null,
          },
          {
            title: 'House music',
            source: 'Britannica',
            url: 'https://www.britannica.com/art/house-music',
            why: 'Editorial history of the genre that DJ phrasing grew up in. Good context for why an eight-bar grid is the grid.',
            year: null,
          },
          {
            title: 'Frankie Knuckles: The Godfather of House Music',
            source: 'The New York Times (obituary)',
            url: 'https://www.nytimes.com/2014/04/02/arts/music/frankie-knuckles-house-music-pioneer-dies-at-59.html',
            why: 'Obituary and analysis. A short portrait of the DJ whose phrasing invented modern dance music.',
            year: 2014,
          },
        ],
        courses: [
          {
            title: 'Point Blank Music School — DJ program',
            provider: 'Point Blank',
            url: 'https://www.pointblankmusicschool.com/',
            free: false,
            why: 'The London school\'s formal DJ curriculum covers phrasing, harmonic mixing, and set architecture. The standard professional on-ramp.',
          },
        ],
        tools: [
          {
            title: 'Mixed in Key',
            url: 'https://mixedinkey.com/',
            why: 'Software that analyses every track in a library and assigns its musical key, simplifying harmonic mixing decisions. Now standard in DJ workflows.',
          },
          {
            title: 'Resident Advisor event listings',
            url: 'https://ra.co/events',
            why: 'Worldwide club and festival calendar. The starting place for any serious listener to find the DJs actually working.',
          },
        ],
        primarySources: [
          {
            title: 'Larry Levan — Live at the Paradise Garage (1979–1987 recordings)',
            url: 'https://en.wikipedia.org/wiki/Larry_Levan',
            why: 'Bootleg and released recordings from the Paradise Garage. The foundational library of extended DJ phrasing as an art form.',
          },
        ],
      },

      seeAlso: ['beatmatch', 'jazz', 'popular'],
      prereqs: ['beatmatch'],
      leadsTo: [],

      chapterActivity: 'A late-night "phrasing clinic" on a Thursday at Public Records in Gowanus — members take turns playing a thirty-minute set and the rest critique only the phrase placement and the energy curve.',

      sources: [
        'https://en.wikipedia.org/wiki/Phrase_(music)',
        'https://www.britannica.com/art/house-music',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
