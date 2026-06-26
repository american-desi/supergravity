// content/astronomy.js
// Owned by batch: B02-hard-sciences
// Last updated: 2026-04-22 by BATCH B02-hard-sciences
//
// Topics this subject must cover (from data.js):
//   Solar & Stellar: solar, stars, galaxies
//   Cosmos:          bigbang, blackholes

window.CONTENT = window.CONTENT || {};
window.CONTENT.astronomy = {
  subjectId: 'astronomy',
  version: 1,
  lastUpdated: '2026-04-22',
  curator: 'BATCH B02-hard-sciences',
  topics: {

    solar: {
      id: 'solar',
      name: 'Solar System',
      level: 'Beginner',
      dek: 'The Sun, eight planets, a few dwarf planets, and a few trillion smaller objects — the neighborhood, properly described.',
      readTime: '11 min',

      sections: ['A collapsing cloud', 'The inner and outer worlds', 'The Sun itself', 'A few trillion smaller things', 'What we are still learning'],
      body: [
        { type: 'lead', text: 'Roughly four and a half billion years ago, a cloud of hydrogen and heavier debris began to collapse under its own gravity somewhere in the outer third of the Milky Way. The center condensed and ignited into a star. Around it, the remaining material flattened into a spinning disk and sorted itself — by temperature and gravity — into rocky worlds close in and gas giants further out. The story of how we know this is one of the great achievements of modern science.' },
        { type: 'interactive', key: 'solar-deepdive' },
        { type: 'h2', text: 'Inner and outer' },
        { type: 'p', text: 'The inner solar system — Mercury, Venus, Earth, Mars — is made of rock and metal, in shells of mantle and crust. The outer worlds — Jupiter, Saturn, Uranus, Neptune — are enormous envelopes of hydrogen and helium around dense cores. Between them is the asteroid belt. Beyond Neptune is the Kuiper belt, and beyond that the Oort cloud, a vast and tenuous spherical shell of comets extending perhaps a light-year out. The Voyager probes, launched in 1977, are only just leaving its inner edge.' },
        { type: 'interactive', key: 'solar-diagram' },
        { type: 'h2', text: 'The Sun' },
        { type: 'p', text: 'The Sun is an average star — neither enormous, nor tiny, nor particularly hot or cool for its kind. It fuses hydrogen into helium in its core at a rate of roughly six hundred million tons a second, and has been doing so for five billion years. It has another five billion to go before it swells into a red giant and, in a series of relatively calm expansions, swallows the inner planets. The Sun is 99.86 percent of all the mass in the solar system.' },
        { type: 'h2', text: 'Small bodies' },
        { type: 'p', text: 'Between the planets sit more than a million known asteroids, thousands of comets, and hundreds of moons. Some of these are worlds in their own right: Jupiter\'s Ganymede is larger than Mercury; Saturn\'s Titan has a dense atmosphere and liquid hydrocarbon lakes. Pluto, demoted from planet status in 2006, is one of a growing catalog of dwarf worlds in the outer reaches. Every decade we discover an object or two that forces us to revise the rough sketch.' },
        { type: 'h2', text: 'Exoplanets — the solar system, elsewhere' },
        { type: 'p', text: 'Until the mid-1990s, no one had directly observed a planet around another star. Today, thanks to the Kepler, TESS, and James Webb missions, we know of more than 5,500 confirmed exoplanets. They range from Jupiter-sized gas giants in tight orbits (so-called "hot Jupiters") to rocky worlds in the habitable zones of red dwarfs. A significant fraction of Sun-like stars, we now believe, host at least one Earth-sized planet in the liquid-water zone. Whether any of them host life is the biggest question in the field.' },
        { type: 'h2', text: 'What we are still learning' },
        { type: 'p', text: 'The Parker Solar Probe, launched in 2018, has dipped inside the Sun\'s corona. The James Webb Space Telescope is mapping the atmospheres of distant exoplanets. NASA\'s Europa Clipper, launched 2024, will probe the ice-covered ocean on Jupiter\'s Europa for signs of life. A thousand years from now it is not the planets themselves that will have changed — it is our map of them.' },
        { type: 'interactive', key: 'solar-videos' },
        { type: 'callout', text: 'Voyager 1, now in interstellar space, remains our most distant working spacecraft. Its radio signal takes more than twenty-two hours to reach Earth.' },
      ],

      keyTerms: ['planet', 'dwarf planet', 'asteroid', 'comet', 'Kuiper belt', 'Oort cloud', 'heliosphere', 'terrestrial', 'gas giant'],

      resources: {
        videos: [
          {
            id: 'TKM0P3XlMNA',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=TKM0P3XlMNA',
            title: 'Introduction to the Solar System (Crash Course Astronomy #9)',
            channel: 'Crash Course',
            duration: '12:16',
            why: 'Phil Plait\'s sixteen-minute orientation — Sun, planets, small bodies — the right starting place.',
          },
          {
            id: 'b22HKFMIfWo',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=b22HKFMIfWo',
            title: 'The Sun (Crash Course Astronomy #10)',
            channel: 'Crash Course',
            duration: '11:10',
            why: 'What the Sun is, how it works, and the thirty thousand earth-diameters of plasma above our heads.',
          },
          {
            id: 'KsF_hdjWJjo',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=KsF_hdjWJjo',
            title: 'The Solar System — our home in space',
            channel: 'Kurzgesagt — In a Nutshell',
            duration: '7:25',
            why: 'An infographic tour, beautifully animated. Use it as the palate-cleanser between Crash Course episodes.',
          },
        ],
        books: [
          {
            title: 'Cosmos',
            author: 'Carl Sagan',
            year: 1980,
            url: '',
            why: 'The book of the television series. Chapters 1–3 remain the best popular orientation to the solar system.',
          },
          {
            title: 'The Planets',
            author: 'Dava Sobel',
            year: 2005,
            url: '',
            why: 'A short book of essays on each world — astronomically accurate and genuinely literary. Rare combination.',
          },
          {
            title: 'Astrophysics for People in a Hurry',
            author: 'Neil deGrasse Tyson',
            year: 2017,
            url: '',
            why: 'Modern, short, current. Tyson\'s chapter on the solar system is the concise reference tour.',
          },
        ],
        articles: [
          {
            title: 'Solar System',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Solar_System',
            why: 'Comprehensive, well-cited, with excellent tables and images. The best single text reference.',
            year: null,
          },
          {
            title: 'Solar System Exploration',
            source: 'NASA',
            url: 'https://science.nasa.gov/solar-system/',
            why: 'NASA\'s hub — click any world for mission status, recent imagery, and current science.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Crash Course Astronomy (full series)',
            provider: 'Crash Course / PBS',
            url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL',
            free: true,
            why: 'Phil Plait\'s forty-six-episode astronomy course. Episodes 9–19 cover the solar system in depth. Free.',
          },
        ],
        tools: [
          {
            title: 'NASA Eyes on the Solar System',
            url: 'https://eyes.nasa.gov/apps/solar-system/',
            why: 'JPL\'s interactive 3-D browser. Fly to any probe, any planet, any moon, at any date.',
          },
          {
            title: 'Stellarium Web',
            url: 'https://stellarium-web.org/',
            why: 'Free browser planetarium. Enter your location, get tonight\'s sky, including visible planets.',
          },
          {
            title: 'Astronomy Picture of the Day',
            url: 'https://apod.nasa.gov/apod/astropix.html',
            why: 'A new annotated image every day since 1995. The archive reads like a tour of the solar system.',
          },
        ],
      },

      interactive: { kind: 'orbit' },
      seeAlso: ['stars', 'galaxies', 'astronomy_amateur', 'plates'],
      prereqs: [],
      leadsTo: ['stars', 'galaxies', 'cosmology'],

      chapterActivity: 'Spring and fall family observing sessions at the Rose Center for Earth and Space (American Museum of Natural History) — the Hayden Planetarium\'s 9:30 p.m. Friday shows are the best public science in New York City.',

      examples: [{
        title: 'Kepler\'s third law',
        problem: 'An asteroid orbits the Sun with a semi-major axis of 4 AU. What is its period in Earth years?',
        steps: [
          { text: 'Apply Kepler\'s third law (T in years, a in AU).', math: 'T² = a³' },
          { text: 'Plug in.', math: 'T² = 4³ = 64 → T = 8' },
        ],
        answer: '8 years per orbit.',
      }],
      practice: [
        { q: 'Which planet is the largest in the solar system? (one word)', a: 'Jupiter', hint: 'Gas giant, ~318 Earth masses.', solution: 'Jupiter. Its mass is more than all other planets combined.', difficulty: 'easy' },
        { q: 'What fraction of the solar system\'s mass is in the Sun, to the nearest percent? (e.g., "99%")', a: '99.86%', acceptable: ['99.9%', '99.86', '99%', '100%'], hint: 'Essentially all of it.', solution: '~99.86%. Everything else — planets, asteroids, comets, dust — shares the remaining 0.14%.', difficulty: 'medium' },
        { q: 'Mars orbits at about 1.52 AU. Using Kepler\'s third law (T² = a³), what is its period in Earth years (to 2 decimal places)?', a: '1.88', acceptable: ['1.87', '1.9'], hint: 'T = √(1.52³).', solution: 'a³ = 1.52³ ≈ 3.51. T = √3.51 ≈ 1.87 years. Matches the observed 1.88 years.', difficulty: 'medium' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Solar_System',
        'https://science.nasa.gov/solar-system/',
        'https://apod.nasa.gov/apod/astropix.html',
      ],
      verifiedAt: '2026-04-22',
    },

    stars: {
      id: 'stars',
      name: 'Stars & Stellar Evolution',
      level: 'Intermediate',
      dek: 'From the collapse of a gas cloud to a white dwarf, a neutron star, or a black hole — the biography of a star.',
      readTime: '12 min',

      sections: ['The Hertzsprung–Russell diagram', 'Main sequence', 'The end of the middle age', 'Supernova', 'Neutron stars and black holes'],
      body: [
        { type: 'lead', text: 'In the first years of the twentieth century, a Danish chemist named Ejnar Hertzsprung and a Princeton astronomer named Henry Norris Russell, working independently, each plotted stars on a graph: brightness against temperature. The plot was not the featureless scatter they expected. It was a narrow diagonal line, with a cluster of stars above it and a small population below. They had drawn, accidentally, the first map of stellar evolution.' },
        { type: 'interactive', key: 'stars-deepdive' },
        { type: 'interactive', key: 'facts-stars' },
        { type: 'h2', text: 'Main sequence' },
        { type: 'p', text: 'The diagonal line on the HR diagram is called the main sequence. A main-sequence star is one that is fusing hydrogen into helium in its core, and almost every visible star is on it. The Sun is a G-type main-sequence star, a quiet worker in the middle of the diagram. More massive stars burn hotter and faster and die young — a star ten times the mass of the Sun may live only ten million years. Less massive stars fuse at a lazy pace and endure for a hundred billion.' },
        { type: 'interactive', key: 'stars-diagram' },
        { type: 'h2', text: 'The end of the middle age' },
        { type: 'p', text: 'When a star exhausts the hydrogen in its core, it swells into a red giant. The outer layers cool; the core contracts and begins to fuse helium into carbon. Sun-like stars go through this phase, shed their outer envelopes as a planetary nebula, and leave behind a dense, Earth-sized ember called a white dwarf. A white dwarf is the last page of the book for stars under about eight solar masses.' },
        { type: 'h2', text: 'Supernova' },
        { type: 'p', text: 'Massive stars take a different road. In their cores, fusion proceeds through heavier and heavier elements — carbon, oxygen, neon, silicon — stopping only at iron, which costs more energy to fuse than it releases. At that point the core collapses in a fraction of a second and the outer layers explode. A supernova briefly outshines a galaxy and seeds space with the heavier elements. Almost all the iron in your blood and the calcium in your bones was forged in one of these explosions, a long time before the Earth existed.' },
        { type: 'h2', text: 'Neutron stars and black holes' },
        { type: 'p', text: 'What\'s left after a supernova depends on how much mass survives. Below a few solar masses, you get a neutron star — the densest object in the universe short of a black hole, a sun\'s mass packed into a city. Pulsars, discovered by Jocelyn Bell Burnell in 1967, are rotating neutron stars whose beams sweep past Earth on a predictable clock. Above that, you get a black hole. The end of a massive star is not a fizzle; it is a full punctuation.' },
        { type: 'interactive', key: 'stars-videos' },
        { type: 'quote', text: 'We are made of star-stuff.', cite: 'Carl Sagan, Cosmos (1980)' },
      ],

      keyTerms: ['main sequence', 'HR diagram', 'red giant', 'white dwarf', 'supernova', 'neutron star', 'nucleosynthesis'],

      resources: {
        videos: [
          {
            id: 'ld75W1dz-h0',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=ld75W1dz-h0',
            title: 'Stars (Crash Course Astronomy #26)',
            channel: 'Crash Course',
            duration: '11:40',
            why: 'Phil Plait\'s sixteen-minute introduction to what a star is and how we classify them.',
          },
          {
            id: 'jfvMtCHv1q4',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=jfvMtCHv1q4',
            title: 'Low Mass Stars (Crash Course Astronomy #29)',
            channel: 'Crash Course',
            duration: '11:25',
            why: 'The life and slow death of a Sun-like star — the episode that sets up the whole story.',
          },
          {
            id: 'PWx9DurgPn8',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=PWx9DurgPn8',
            title: 'High Mass Stars (Crash Course Astronomy #31)',
            channel: 'Crash Course',
            duration: '11:30',
            why: 'Fusion up to iron, and the supernova at the end. Best twelve minutes on the topic at this level.',
          },
        ],
        books: [
          {
            title: 'Cosmos',
            author: 'Carl Sagan',
            year: 1980,
            url: '',
            why: 'Chapter 9, "The Lives of the Stars," remains the finest piece of popular science writing on the subject.',
          },
          {
            title: 'The Fabric of the Cosmos',
            author: 'Brian Greene',
            year: 2004,
            url: '',
            why: 'Greene is strongest on the physics beneath stellar phenomena — relativity, nucleosynthesis, the quantum vacuum.',
          },
          {
            title: 'An Introduction to Modern Astrophysics',
            author: 'Bradley W. Carroll and Dale A. Ostlie',
            year: 1996,
            url: '',
            why: 'The standard senior undergraduate text. Dense, essential, has the equations in it.',
          },
        ],
        articles: [
          {
            title: 'Stellar evolution',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Stellar_evolution',
            why: 'Thorough, well-cited reference. The HR diagram section is particularly good.',
            year: null,
          },
          {
            title: 'Nucleosynthesis',
            source: 'Encyclopaedia Britannica',
            url: 'https://www.britannica.com/science/nucleosynthesis',
            why: 'Where the elements come from, written for a general reader. Covers Big Bang, stellar, and supernova nucleosynthesis.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Crash Course Astronomy (full series)',
            provider: 'Crash Course / PBS',
            url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL',
            free: true,
            why: 'Episodes 26–36 cover stars in depth. Free and complete.',
          },
        ],
        tools: [
          {
            title: 'HR Diagram Explorer (Las Cumbres Observatory)',
            url: 'https://astro.unl.edu/naap/hr/hr.html',
            why: 'Browser-based HR diagram simulator. Drag stars, watch them evolve, see where they sit.',
          },
          {
            title: 'Astronomy Picture of the Day — stellar images',
            url: 'https://apod.nasa.gov/apod/archivepix.html',
            why: 'Searchable APOD archive. Type "supernova" or "nebula" for hundreds of annotated examples.',
          },
        ],
      },

      interactive: { kind: 'hrdiagram' },
      seeAlso: ['solar', 'galaxies', 'bigbang', 'blackholes'],
      prereqs: ['solar'],
      leadsTo: ['galaxies', 'blackholes'],

      chapterActivity: 'The Amateur Astronomers Association of New York runs public stargazing nights on the High Line and in Carl Schurz Park on clear Friday nights between April and October.',

      examples: [{
        title: 'Lifetime of a massive star',
        problem: 'A rough scaling for main-sequence lifetime: t ~ 10 Gyr × (M/M☉)⁻². Estimate the lifetime of a 10-solar-mass star.',
        steps: [
          { text: 'Plug in M/M☉ = 10.', math: 't ~ 10 Gyr × 10⁻² = 0.1 Gyr' },
        ],
        answer: '~100 million years. Massive stars burn through their hydrogen dramatically faster than the Sun.',
      }],
      practice: [
        { q: 'Our Sun is a G-type main-sequence star. When it runs out of core hydrogen, it will become a ___ giant. (one word)', a: 'red', acceptable: ['red giant'], hint: 'Cool outer envelope, glowing red.', solution: 'Red. Sun-like stars swell to red giants, then shed their envelopes as planetary nebulae, leaving white dwarfs.', difficulty: 'easy' },
        { q: 'Stars more massive than ~8 solar masses die as a supernova. What compact object is left if the remnant is below ~3 solar masses? (two words)', a: 'neutron star', hint: 'As dense as an atomic nucleus.', solution: 'Neutron star. A sun\'s mass compressed into a city-sized sphere. Above ~3 M☉ remnant mass, a black hole forms instead.', difficulty: 'medium' },
        { q: 'What is the approximate surface temperature of the Sun, in Kelvin?', a: '5800', acceptable: ['5778', '5800 K', '~5800', '6000', '5500'], hint: 'Close to 6000 K.', solution: '~5778 K. This classifies the Sun as a G2V star. A-type stars are hotter (~10,000 K); M-type are cooler (~3000 K).', difficulty: 'medium' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Stellar_evolution',
        'https://www.britannica.com/science/nucleosynthesis',
      ],
      verifiedAt: '2026-04-22',
    },

    galaxies: {
      id: 'galaxies',
      name: 'Galaxies',
      level: 'Intermediate',
      dek: 'A hundred billion stars bound by gravity — and a hundred billion such islands distributed through the observable universe.',
      readTime: '12 min',

      sections: ['Hubble and the island universes', 'Types of galaxies', 'The Milky Way', 'Clusters, walls, and the cosmic web', 'Where the subject is now'],
      body: [
        { type: 'lead', text: 'For most of recorded history, the faint smudge in Andromeda was assumed to be a cloud of gas inside our own Milky Way. In 1923, Edwin Hubble photographed it with the hundred-inch telescope at Mount Wilson and identified a Cepheid variable star — a kind of star whose brightness reveals its distance. The number he got back made Andromeda a galaxy unto itself, two and a half million light-years away. The universe, overnight, became enormous.' },
        { type: 'interactive', key: 'galaxies-deepdive' },
        { type: 'h2', text: 'Types of galaxies' },
        { type: 'p', text: 'Hubble himself introduced the basic taxonomy, which still stands with modifications. Elliptical galaxies are rounded, dominated by old red stars, and have largely exhausted their gas. Spirals, like our Milky Way, have flat rotating disks, central bulges, and star-forming arms. Irregulars are the rest — often small, often gas-rich, often the result of collisions. Hubble arranged them on a "tuning fork" diagram that is not quite an evolutionary sequence but is still the first thing taught.' },
        { type: 'interactive', key: 'galaxies-diagram' },
        { type: 'h2', text: 'The Milky Way' },
        { type: 'p', text: 'Our own galaxy is a barred spiral, about 100,000 light-years across, containing somewhere between a hundred and four hundred billion stars. The Sun sits in one of the outer arms, roughly 26,000 light-years from the galactic center. At that center is a supermassive black hole, Sagittarius A*, weighing about four million solar masses, photographed for the first time in 2022 by the Event Horizon Telescope.' },
        { type: 'h2', text: 'The cosmic web' },
        { type: 'p', text: 'Galaxies are not scattered uniformly. Gravity has organized them into groups, clusters, superclusters, and vast filamentary walls, separated by voids tens of millions of light-years across. The Local Group — containing the Milky Way, Andromeda, and roughly fifty smaller satellites — is part of the Virgo Supercluster, which is part of the Laniakea Supercluster, which is one filament of a cosmic web that extends as far as our telescopes can see.' },
        { type: 'h2', text: 'Where the subject is now' },
        { type: 'p', text: 'The James Webb Space Telescope, operating since 2022, has photographed galaxies less than 300 million years after the Big Bang — earlier than theory had suggested possible. Galaxy formation was a solved problem in 2015. In 2026 it is an open one again. This is what a healthy science looks like.' },
        { type: 'p', text: 'Separately, a mystery: the rotation curves of galaxies show that they are held together by more mass than we can see — roughly five times more. Dark matter, whatever it is, dominates galactic dynamics at every scale. Without it, spiral arms would fly apart; galaxy clusters would not be bound; the large-scale structure of the universe could not have formed in the time it has. That it is there is nearly certain. What it is, no one knows.' },
        { type: 'interactive', key: 'galaxies-videos' },
        { type: 'callout', text: 'The Milky Way and Andromeda are moving toward each other at roughly 250,000 miles per hour. They will collide in about four and a half billion years.' },
      ],

      keyTerms: ['galaxy', 'Milky Way', 'spiral', 'elliptical', 'supermassive black hole', 'redshift', 'cosmic web', 'Local Group'],

      resources: {
        videos: [
          {
            id: 'tj_QPnO8vpQ',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=tj_QPnO8vpQ',
            title: 'The Milky Way (Crash Course Astronomy #37)',
            channel: 'Crash Course',
            duration: '11:39',
            why: 'Phil Plait on our own galaxy — structure, contents, and our position in it.',
          },
          {
            id: 'I82ADyJC7wE',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=I82ADyJC7wE',
            title: 'Galaxies, Part 1 (Crash Course Astronomy #38)',
            channel: 'Crash Course',
            duration: '12:14',
            why: 'Once you understand the Milky Way, Plait takes you to other galaxies and Hubble\'s tuning-fork classification.',
          },
          {
            id: '9W3RsaWuCuE',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=9W3RsaWuCuE',
            title: 'Dark Matter (Crash Course Astronomy #41)',
            channel: 'Crash Course',
            duration: '11:40',
            why: 'Galaxies rotate too fast for their visible mass. This episode explains how we know, and what we think is happening.',
          },
        ],
        books: [
          {
            title: 'The Realm of the Nebulae',
            author: 'Edwin Hubble',
            year: 1936,
            url: 'https://archive.org/details/in.ernet.dli.2015.210893',
            why: 'Hubble\'s own account of the discoveries that showed there were other galaxies. Historic and readable.',
          },
          {
            title: 'The Extravagant Universe',
            author: 'Robert Kirshner',
            year: 2002,
            url: '',
            why: 'A lead observer on the 1998 supernova survey describes how the accelerating universe was discovered, galaxy by galaxy.',
          },
          {
            title: 'Galaxies: A Very Short Introduction',
            author: 'John Gribbin',
            year: 2008,
            url: '',
            why: 'A hundred and fifty pages by a working science writer. The ideal briefing before heavier reading.',
          },
        ],
        articles: [
          {
            title: 'Galaxy',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Galaxy',
            why: 'Thorough reference, with strong sections on classification, structure, and the cosmic web.',
            year: null,
          },
          {
            title: 'Hubble, "A relation between distance and radial velocity among extra-galactic nebulae" (1929)',
            source: 'Proceedings of the National Academy of Sciences',
            url: 'https://www.pnas.org/doi/10.1073/pnas.15.3.168',
            why: 'The paper that established the expansion of the universe. Free full text at PNAS.',
            year: 1929,
          },
        ],
        courses: [
          {
            title: 'Crash Course Astronomy (full series)',
            provider: 'Crash Course / PBS',
            url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL',
            free: true,
            why: 'Episodes 37–43 cover galaxies, dark matter, and large-scale structure.',
          },
        ],
        tools: [
          {
            title: 'NASA / IPAC Extragalactic Database',
            url: 'https://ned.ipac.caltech.edu/',
            why: 'The reference database for extragalactic astronomy. Search any galaxy by name; get the papers, the images, the distance.',
          },
          {
            title: 'SIMBAD Astronomical Database',
            url: 'https://simbad.u-strasbg.fr/simbad/',
            why: 'European equivalent of NED; the other authoritative astronomical database. Worth knowing both.',
          },
        ],
        primarySources: [
          {
            title: 'Hubble\'s 1929 PNAS paper (full scan)',
            url: 'https://www.pnas.org/doi/10.1073/pnas.15.3.168',
            why: 'Edwin Hubble\'s original six-page paper, on 46 galaxies, in which cosmic expansion first appears.',
          },
        ],
      },

      interactive: { kind: 'galaxy' },
      seeAlso: ['stars', 'cosmology', 'bigbang', 'blackholes'],
      prereqs: ['stars'],
      leadsTo: ['bigbang', 'blackholes'],

      chapterActivity: 'Quarterly meet-ups at Brooklyn\'s Green-Wood Cemetery observatory night — public telescope time with the Brooklyn Amateur Astronomy Association.',

      examples: [{
        title: 'Light time across the Milky Way',
        problem: 'The Milky Way is about 100,000 light-years in diameter. How long would it take light to cross it from end to end?',
        steps: [
          { text: 'One light-year per year, by definition.', math: '100,000 ly ÷ c = 100,000 years' },
        ],
        answer: '100,000 years. Compare: light from the Sun reaches Earth in 8 minutes; from the nearest star, 4.2 years.',
      }],
      practice: [
        { q: 'What type of galaxy is the Milky Way? (two words)', a: 'barred spiral', hint: 'Has a central bar of stars with spiral arms.', solution: 'Barred spiral. Our galactic bar is about 25,000 light-years long.', difficulty: 'easy' },
        { q: 'At the center of nearly every large galaxy sits a ___ black hole. (one word)', a: 'supermassive', acceptable: ['super-massive'], hint: 'Millions to billions of solar masses.', solution: 'Supermassive. Sagittarius A* in our galaxy weighs 4 million suns; M87\'s weighs 6.5 billion.', difficulty: 'easy' },
        { q: 'Andromeda (M31) is approximately how many million light-years from the Milky Way?', a: '2.5', acceptable: ['2.5 Mly', '2.54', '2.537'], hint: 'The farthest object visible to the naked eye.', solution: '~2.5 million light-years (2.537 Mly). Andromeda and the Milky Way are the two largest members of the Local Group.', difficulty: 'medium' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Galaxy',
        'https://www.pnas.org/doi/10.1073/pnas.15.3.168',
      ],
      verifiedAt: '2026-04-22',
    },

    bigbang: {
      id: 'bigbang',
      name: 'The Big Bang',
      level: 'Advanced',
      dek: 'How a universe becomes something, 13.8 billion years ago — and the surprisingly specific evidence that it happened.',
      readTime: '13 min',

      sections: ['Lemaître\'s primeval atom', 'The evidence, in three pieces', 'The cosmic microwave background', 'Inflation', 'What the theory does not claim'],
      body: [
        { type: 'lead', text: 'In 1927, a Belgian priest and physicist named Georges Lemaître, examining Einstein\'s field equations, concluded that the universe had to be either expanding or contracting. He proposed that the cosmos had begun as a single, extremely dense "primeval atom" and had been expanding ever since. Einstein, when he met Lemaître two years later, famously told him that his calculations were correct but that his physics was abominable. In the end Einstein was wrong. Lemaître was right.' },
        { type: 'interactive', key: 'bigbang-deepdive' },
        { type: 'interactive', key: 'lemaitre-1927' },
        { type: 'h2', text: 'The evidence, in three pieces' },
        { type: 'p', text: 'The Big Bang theory is not a speculation. It rests on three distinct lines of evidence that converge to the same number. First: the recession of distant galaxies, measured by Hubble in 1929, shows the universe is expanding and lets you calculate its age by running the expansion backward. Second: the relative abundance of light elements (hydrogen, helium, lithium, deuterium) matches what you would expect from nuclear fusion in a hot, dense early universe. Third — most persuasive — is the cosmic microwave background.' },
        { type: 'interactive', key: 'bigbang-diagram' },
        { type: 'h2', text: 'The cosmic microwave background' },
        { type: 'p', text: 'In 1964, Bell Labs engineers Arno Penzias and Robert Wilson, calibrating a radio antenna in New Jersey, could not get rid of a hiss. It came from every direction, day and night, winter and summer. They realized eventually that they were hearing heat — thermal radiation left from roughly 380,000 years after the Big Bang, when the universe first became transparent to light. The CMB has since been mapped to extraordinary precision by the COBE, WMAP, and Planck satellites. Its tiny temperature fluctuations, one part in a hundred thousand, encode the structure of the universe at that age and have let cosmologists estimate its age at 13.8 billion years to within about 0.3 percent.' },
        { type: 'h2', text: 'Inflation' },
        { type: 'p', text: 'The original Big Bang model left some features of the universe unexplained — why it is so flat, why it looks the same in every direction, why distant regions that have never been in contact have the same temperature. In the early 1980s Alan Guth proposed that the very early universe went through a brief period of exponential expansion called inflation. Inflation solved the existing puzzles, predicted the spectrum of cosmic microwave background fluctuations (which was later measured), and is now the standard extension of the theory.' },
        { type: 'h2', text: 'What the theory does not claim' },
        { type: 'p', text: 'The Big Bang describes the evolution of the universe after a certain extremely early time. It does not claim to know what, if anything, came before; it does not claim to know what, if anything, lies beyond the observable universe; it does not claim that the universe began from a point, only that it was very dense. The honest limit of modern cosmology is at the Planck time, 10⁻⁴³ seconds in, before which general relativity and quantum mechanics become incompatible and no one yet has the right equations.' },
        { type: 'interactive', key: 'bigbang-videos' },
        { type: 'quote', text: 'The more the universe seems comprehensible, the more it also seems pointless.', cite: 'Steven Weinberg, The First Three Minutes (1977)' },
      ],

      keyTerms: ['cosmic microwave background', 'redshift', 'inflation', 'Hubble constant', 'primordial nucleosynthesis', 'recombination', 'Planck time'],

      resources: {
        videos: [
          {
            id: '9B7Ix2VQEGo',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=9B7Ix2VQEGo',
            title: 'The Big Bang, Cosmology Part 1 (Crash Course Astronomy #42)',
            channel: 'Crash Course',
            duration: '12:31',
            why: 'Phil Plait\'s twelve-minute overview of the evidence. The right first video.',
          },
          {
            id: 'aPStj2ZuXug',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=aPStj2ZuXug',
            title: 'Why the Big Bang Definitely Happened',
            channel: 'PBS Space Time',
            duration: '11:23',
            why: 'Matthew O\'Dowd walks through the three converging lines of evidence in rigorous detail.',
          },
          {
            id: 'pSHVbLPWA28',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=pSHVbLPWA28',
            title: 'How Big is the Universe?',
            channel: 'Kurzgesagt — In a Nutshell',
            duration: '7:58',
            why: 'The scale of things, gorgeously animated. A good decompress between the heavier material.',
          },
        ],
        books: [
          {
            title: 'The First Three Minutes',
            author: 'Steven Weinberg',
            year: 1977,
            url: '',
            why: 'A Nobel laureate\'s popular account of the first moments of the universe. Nearly fifty years old, still essentially correct.',
          },
          {
            title: 'A Brief History of Time',
            author: 'Stephen Hawking',
            year: 1988,
            url: '',
            why: 'Still the book most often picked up and most often finished. Dated in spots, enduring in spirit.',
          },
          {
            title: 'The Inflationary Universe',
            author: 'Alan Guth',
            year: 1997,
            url: '',
            why: 'Guth\'s own account of how he discovered inflation in 1979. Good on the research process as well as the physics.',
          },
        ],
        articles: [
          {
            title: 'Big Bang',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Big_Bang',
            why: 'Comprehensive reference. The observational evidence section is particularly good.',
            year: null,
          },
          {
            title: 'Cosmology',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/cosmology/',
            why: 'What cosmology is, as a science. Careful on what the theory does and does not claim.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Cosmology',
            provider: 'Stanford / Theoretical Minimum',
            url: 'https://theoreticalminimum.com/courses/cosmology/2013/winter',
            free: true,
            why: 'Leonard Susskind\'s course on cosmology. Assumes calculus and a little GR; builds the rest.',
          },
        ],
        tools: [
          {
            title: 'Planck CMB Map (ESA)',
            url: 'https://www.esa.int/Science_Exploration/Space_Science/Planck/Planck_reveals_first_stars_were_born_late',
            why: 'ESA\'s page on the Planck CMB map. Beautifully annotated images of the universe at 380,000 years old.',
          },
          {
            title: 'WMAP — Wilkinson Microwave Anisotropy Probe',
            url: 'https://science.nasa.gov/mission/wmap/wmap-overview/',
            why: 'NASA\'s WMAP mission page — the all-sky microwave map that nailed down the universe\'s age to within 1%.',
          },
        ],
        primarySources: [
          {
            title: 'Georges Lemaître — MacTutor biography',
            url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Lemaitre/',
            why: 'The St Andrews MacTutor history of science entry on Lemaître. Includes the 1927 paper in context, with citations to the original Annales de la Société Scientifique de Bruxelles and the 1931 MNRAS English translation.',
          },
        ],
      },

      interactive: { kind: 'bigbang' },
      seeAlso: ['cosmology', 'galaxies', 'relativity', 'particle'],
      prereqs: ['stars', 'galaxies'],
      leadsTo: ['blackholes'],

      chapterActivity: 'Annual late-spring visit to the Hayden Planetarium\'s live show "Worlds Beyond Earth" at the Rose Center — followed by drinks at Café Fiorello across Columbus Avenue.',

      examples: [{
        title: 'A galaxy at redshift z = 1',
        problem: 'Light from a galaxy arrives with wavelengths doubled relative to emission (z = 1). When was the light emitted, relative to the age of the universe now?',
        steps: [
          { text: 'Cosmological redshift: (1 + z) = a_now / a_then.', math: 'a_now / a_then = 1 + 1 = 2' },
          { text: 'Interpret.', math: 'The universe was half its current size when the light was emitted.' },
        ],
        answer: 'The universe was half its current size when the light left — roughly 6 billion years ago in Λ-CDM cosmology.',
      }],
      practice: [
        { q: 'Who discovered the cosmic microwave background? (two surnames, e.g., "Smith and Jones")', a: 'Penzias and Wilson', acceptable: ['Penzias & Wilson', 'Wilson and Penzias'], hint: 'Bell Labs engineers, 1964.', solution: 'Arno Penzias and Robert Wilson, 1964. They were calibrating an antenna and could not get rid of a persistent hiss. They won the 1978 Nobel.', difficulty: 'medium' },
        { q: 'What is the measured age of the universe, to 1 decimal place in billions of years?', a: '13.8', acceptable: ['13.787', '13.8 Gyr'], hint: 'From Planck satellite CMB data.', solution: '13.8 Gyr (precisely: 13.787 ± 0.020 Gyr).', difficulty: 'easy' },
        { q: 'Which theory proposes that the very early universe went through a brief period of exponential expansion? (one word)', a: 'inflation', acceptable: ['cosmic inflation'], hint: 'Alan Guth, 1980.', solution: 'Inflation. Guth\'s proposal solves the flatness, horizon, and monopole problems, and predicts the spectrum of CMB fluctuations.', difficulty: 'medium' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Big_Bang',
        'https://plato.stanford.edu/entries/cosmology/',
      ],
      verifiedAt: '2026-04-22',
    },

    blackholes: {
      id: 'blackholes',
      name: 'Black Holes',
      level: 'Advanced',
      dek: 'Where physics bends — regions of spacetime so curved that not even light can leave.',
      readTime: '13 min',

      sections: ['Schwarzschild\'s solution', 'Event horizons and singularities', 'Three kinds', 'Hawking radiation', 'The 2019 and 2022 photographs'],
      body: [
        { type: 'lead', text: 'In December 1915, a German physicist named Karl Schwarzschild, serving on the Russian front, wrote down the first exact solution to Einstein\'s field equations. He sent the calculations home by post. Einstein replied that he had "not expected that one could formulate the exact solution of the problem in such a simple way." Four months later Schwarzschild was dead of a skin disease contracted in the trenches. His solution, worked out from a battlefield, was the first mathematical description of what we now call a black hole.' },
        { type: 'interactive', key: 'blackholes-deepdive' },
        { type: 'h2', text: 'Event horizon and singularity' },
        { type: 'p', text: 'A black hole is a region of spacetime where gravity is so strong that no path — not even one traveled by light — can lead out. The boundary of this region is called the event horizon. Once past it, you cannot get back. Inside, according to general relativity, is a singularity, a point of infinite density where the equations of the theory break down. The black hole\'s only external properties are its mass, its charge, and its spin — a principle John Wheeler summarized as "black holes have no hair."' },
        { type: 'interactive', key: 'blackholes-diagram' },
        { type: 'h2', text: 'Three kinds' },
        { type: 'p', text: 'Stellar-mass black holes, roughly five to fifty times the mass of the Sun, form when a massive star collapses at the end of its life. Supermassive black holes, millions or billions of solar masses, sit at the centers of galaxies; how they got that big remains an open question. Intermediate-mass black holes, between the two, are predicted and increasingly observed. The Milky Way\'s own Sagittarius A* weighs about four million suns.' },
        { type: 'h2', text: 'Hawking and the quantum twist' },
        { type: 'p', text: 'Stephen Hawking showed in 1974 that black holes should radiate thermally at a temperature inversely proportional to their mass — they are not truly black. This "Hawking radiation" has never been observed directly (the temperature of a stellar-mass black hole is a hundred-millionth of a kelvin), but the calculation has already transformed how physicists think about the intersection of quantum mechanics and gravity. It also implies black holes eventually evaporate — over timescales so long that they dwarf the current age of the universe.' },
        { type: 'h2', text: 'The information paradox' },
        { type: 'p', text: 'Hawking\'s calculation also exposed the deepest puzzle in theoretical physics: if a black hole swallows information and then radiates only thermal heat, that information is lost. But quantum mechanics forbids information loss. The resulting paradox has launched forty years of debate, and recent work (holography, the AdS/CFT correspondence, "islands" in the gravitational path integral) suggests the information is preserved — but by mechanisms that are startling, and, as of 2026, still not fully settled.' },
        { type: 'h2', text: 'LIGO and the Event Horizon Telescope' },
        { type: 'p', text: 'For a hundred years, black holes existed only as solutions to equations. That changed in 2015, when the LIGO interferometer detected a gravitational-wave signal matching the merger of two stellar-mass black holes. In 2019 the Event Horizon Telescope — an Earth-scale radio array — published the first direct image of the shadow of the supermassive black hole at the center of M87, fifty-five million light-years away. In 2022 it did the same for Sagittarius A*. A century of theory has become a laboratory subject.' },
        { type: 'interactive', key: 'blackholes-videos' },
        { type: 'callout', text: 'A one-solar-mass black hole would have an event horizon just under six kilometers wide. The Sun itself is 1.4 million kilometers across. Black holes are mostly much smaller than you picture them.' },
      ],

      keyTerms: ['event horizon', 'singularity', 'Schwarzschild radius', 'Hawking radiation', 'accretion disk', 'gravitational wave', 'supermassive'],

      resources: {
        videos: [
          {
            id: 'e-P5IFTqB98',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=e-P5IFTqB98',
            title: 'Black Holes Explained — From Birth to Death',
            channel: 'Kurzgesagt — In a Nutshell',
            duration: '7:43',
            why: 'An accurate, brilliantly animated seven-minute overview. The right first video for anyone.',
          },
          {
            id: 'yWO-cvGETRQ',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=yWO-cvGETRQ',
            title: 'Why Black Holes Could Delete The Universe — The Information Paradox',
            channel: 'Kurzgesagt — In a Nutshell',
            duration: '10:13',
            why: 'On Hawking\'s calculation and the open problem it created. The paradox still has no consensus resolution.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/playlist?list=PLsPUh22kYmNBl4h0i4mI5zDflExXJMo_x',
            title: 'Black Holes — PBS Space Time playlist',
            channel: 'PBS Space Time',
            duration: 'variable',
            why: 'Matthew O\'Dowd\'s multi-year series on black holes at graduate-physics depth. Pick any episode; the whole playlist is excellent.',
          },
        ],
        books: [
          {
            title: 'Black Holes and Time Warps',
            author: 'Kip Thorne',
            year: 1994,
            url: '',
            why: 'A Nobel laureate\'s popular history of black-hole research from Schwarzschild to LIGO. Still the definitive account.',
          },
          {
            title: 'A Brief History of Time',
            author: 'Stephen Hawking',
            year: 1988,
            url: '',
            why: 'Chapters 6–8 remain the clearest popular treatment of event horizons, Hawking radiation, and singularities.',
          },
          {
            title: 'Gravitation',
            author: 'Charles Misner, Kip Thorne, and John Wheeler',
            year: 1973,
            url: '',
            why: 'The advanced graduate text — "MTW." Part VI, on gravitational collapse and black holes, is the canonical technical treatment.',
          },
        ],
        articles: [
          {
            title: 'Black hole',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Black_hole',
            why: 'Comprehensive, well-cited overview. Good sections on observational evidence and the information paradox.',
            year: null,
          },
          {
            title: 'First Image of a Black Hole (ESO press release, eso1907)',
            source: 'European Southern Observatory / EHT Collaboration',
            url: 'https://www.eso.org/public/news/eso1907/',
            why: 'The ESO press release for the April 2019 EHT image of M87*. Includes all six accompanying papers and the primary-resolution image.',
            year: 2019,
          },
        ],
        courses: [
          {
            title: 'General Relativity',
            provider: 'Stanford / Theoretical Minimum',
            url: 'https://theoreticalminimum.com/courses/general-relativity/2012/fall',
            free: true,
            why: 'Susskind\'s course on GR — the framework in which black holes actually live. Assumes undergraduate physics.',
          },
        ],
        tools: [
          {
            title: 'Gravitational Wave Open Science Center (GWOSC)',
            url: 'https://gwosc.org/',
            why: 'LIGO/Virgo/KAGRA\'s public data portal — every detected event, with tutorials on reproducing the analyses yourself.',
          },
          {
            title: 'ESO — Black Hole image archive',
            url: 'https://www.eso.org/public/images/archive/category/blackholes/',
            why: 'ESO\'s archive of EHT and other black-hole images, including the 2019 M87* and 2022 Sagittarius A* photographs in their original resolutions.',
          },
        ],
      },

      interactive: { kind: 'blackhole' },
      seeAlso: ['relativity', 'cosmology', 'stars', 'galaxies'],
      prereqs: ['stars', 'relativity'],
      leadsTo: [],

      chapterActivity: 'Occasional public lectures at Columbia\'s Pupin Physics Laboratories — the astrophysics department\'s "Physics in the Public Interest" evenings, published each semester.',

      examples: [{
        title: 'Schwarzschild radius of the Sun',
        problem: 'Using rs = 2GM/c², compute the Schwarzschild radius of the Sun. M_sun = 2×10³⁰ kg, G = 6.67×10⁻¹¹ N·m²/kg², c² = 9×10¹⁶ m²/s².',
        steps: [
          { text: 'Apply the formula.', math: 'rs = 2 · 6.67×10⁻¹¹ · 2×10³⁰ / 9×10¹⁶' },
          { text: 'Compute.', math: 'rs ≈ 2.67×10²⁰ / 9×10¹⁶ ≈ 2960 m ≈ 3 km' },
        ],
        answer: 'About 3 km. The Sun itself is 1.4 million km across; to become a black hole it would need to compress by a factor of ~4×10⁵.',
      }],
      practice: [
        { q: 'At the event horizon, the escape velocity equals what? (one word)', a: 'c', acceptable: ['speed of light', 'light speed', 'lightspeed'], hint: 'Light cannot escape from inside.', solution: 'The speed of light, c. Inside the horizon, no path leads out, not even a light path.', difficulty: 'easy' },
        { q: 'Per the no-hair theorem, a black hole has only three measurable external properties: mass, angular momentum, and ___ (one word).', a: 'charge', acceptable: ['electric charge'], hint: 'The third conserved quantity.', solution: 'Charge. Everything else about what formed the black hole — its color, its writing, its composition — is lost to external observers.', difficulty: 'medium' },
        { q: 'What is the mass of Sagittarius A* (the Milky Way\'s central black hole), in millions of solar masses (e.g., "4")?', a: '4', acceptable: ['~4', '4.15', '4 million'], hint: 'EHT imaged it in 2022.', solution: '~4 million solar masses (4.15). Compare M87* (imaged in 2019): 6.5 billion solar masses.', difficulty: 'medium' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Black_hole',
        'https://www.eso.org/public/news/eso1907/',
      ],
      verifiedAt: '2026-04-22',
    },

  },
};
