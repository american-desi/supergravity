// content/martial.js
// Batch: B14-movement
// Last updated: 2026-04-23 by BATCH B13+B14
//
// Topics this subject must cover (from data.js):
//   Core: striking, grappling

window.CONTENT = window.CONTENT || {};
window.CONTENT.martial = {
  subjectId: 'martial',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B13+B14',
  topics: {

    striking: {
      id: 'striking',
      name: 'Striking Arts',
      level: 'Beginner',
      dek: 'Boxing, Muay Thai, karate — the traditions of hitting, blocking, and not getting hit.',
      readTime: '13 min',

      sections: ['The three striking traditions', 'Boxing, the Western grammar', 'Muay Thai, the eight limbs', 'Karate, the forms, and the honest limits', 'Sparring, slowly'],
      body: [
        { type: 'lead', text: 'The oldest boxing gloves we have are leather-padded hand-wraps from a third-century-BCE Greek statue in the British Museum. The oldest illustration of Thai boxers shows them painted on the walls of Wat Phra Chetuphon in Bangkok, in a martial style the Siamese army used against Burma in the eighteenth century. The oldest karate kata, carried from Fujian China to Okinawa in the late nineteenth century, is still practiced today, barely altered, in a dojo a mile from my apartment. Striking arts are among the oldest organized human practices on record. They outlast languages. They outlast empires. They outlast almost everything.' },
        { type: 'h2', text: 'The three striking traditions' },
        { type: 'p', text: 'Modern striking arts cluster in three major traditions. Boxing is the Western lineage — hands only, descended from Greek pugilism through English bare-knuckle prize-fighting to the gloved Queensberry-rules sport of the twentieth century. Muay Thai is the Southeast Asian lineage — hands, elbows, knees, and shins, trained for full-contact ring competition. Karate is the Japanese-Okinawan lineage — hands, feet, and body, organized into forms (kata) and application drills (bunkai). The three traditions overlap in movement vocabulary but differ sharply in rules, pedagogy, and culture. A working practitioner usually knows one well and has studied at least one other.' },
        { type: 'h2', text: 'Boxing, the Western grammar' },
        { type: 'p', text: 'Boxing\'s vocabulary is small and deep. Jab, cross, hook, uppercut — four punches, thrown from a balanced stance, in infinite combinations, defended with slips, parries, rolls, and footwork. The craft is in the small details: hand height, foot placement, breath, the exact timing of a slip-and-counter. Teddy Atlas, Freddie Roach, and Emanuel Steward trained world champions by refining the fundamentals for years. Boxing is the striking tradition with the deepest empirical literature — the most documented sparring, the most filmed bouts, and the most peer-reviewed coaching tradition. A new student who drills the jab for an hour a day for six months has more skill than most people will ever need.' },
        { type: 'h2', text: 'Muay Thai, the eight limbs' },
        { type: 'p', text: 'Muay Thai is called the art of eight limbs: two fists, two elbows, two knees, two shins. The full-contact sport, governed in Thailand since the 1920s, is brutal, honest, and technically sophisticated. Clinch work — controlling your opponent at close range with collar ties and body locks — is a whole sub-discipline. Leg kicks, thrown to the thigh, are more damaging over a fight than any other strike; Muay Thai fighters condition their shins by drilling on pads thousands of times. A Muay Thai gym in the West teaches pad work, clinch drills, and controlled sparring; a gym in Thailand runs two hard sessions a day for fighters whose profession this is.' },
        { type: 'h2', text: 'Karate, the forms, and the honest limits' },
        { type: 'p', text: 'Karate offers the most formally organized striking pedagogy — belt systems, kata sequences, and a wide range of styles from Shotokan\'s long stances to Kyokushin\'s full-contact body strikes. The best karate practice is technically demanding and physically disciplined. The honest caveat: a traditional karate curriculum alone, without full-contact sparring and pressure testing, produces fighters who often struggle against boxers or Muay Thai practitioners in open competition. This is not a secret; Kyokushin karate addressed the gap sixty years ago by instituting bare-knuckle full-contact tournaments, and serious karate schools now cross-train. A student should choose a karate school that spars honestly. One that promotes through forms alone is teaching choreography.' },
        { type: 'h2', text: 'Sparring, slowly' },
        { type: 'p', text: 'The most common mistake a new striker makes is sparring hard too early. A beginner who has drilled for three weeks and then takes a full-power punch to the head learns nothing and risks a concussion. Serious gyms start new students on "technical sparring" — light contact, no head shots, pulling strikes, working specific drills — for months before adding pressure. A lifelong student in their fifties can spar usefully for decades. A twenty-year-old who hammered hard sparring from week one may have neurological problems at forty. Protect your head. The body heals. The brain does not.' },
        { type: 'callout', text: 'First month: boxing gym three times a week. Skip rope as warm-up. Shadow-box for ten minutes. Pad work with a coach for twenty. Conditioning for ten. No sparring for the first month. By the end, you will have a jab, a basic stance, and the reliable habit of keeping your hands up. That is enough to build on for a lifetime.' },
        { type: 'callout', text: 'A note on safety: head trauma — concussion, and the chronic cumulative kind called CTE — is a real risk in all striking arts. Serious modern gyms limit hard sparring, use headgear judiciously, and know the symptoms of concussion. Choose a gym whose coaches take this seriously. Walk away from one that does not.' },
      ],

      keyTerms: ['jab', 'cross', 'hook', 'uppercut', 'clinch', 'teep', 'roundhouse', 'kata', 'bunkai', 'sparring', 'shadow-boxing', 'pad work', 'concussion protocol'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@RamseyDewey',
            title: 'Ramsey Dewey — martial arts fact-checker and coach',
            channel: 'Ramsey Dewey',
            duration: 'variable',
            featured: true,
            why: 'An American Muay Thai and sanda coach living in Shanghai. Dewey\'s channel is a patient, critical, cross-traditional examination of striking — what works, what is folklore, and why.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@LawrenceKenshin',
            title: 'Sensei Seth — karate honesty and traditional arts',
            channel: 'Sensei Seth',
            duration: 'variable',
            featured: true,
            why: 'An American karate black belt who tests traditional techniques against modern pressure. Critical and welcoming; essential for anyone entering a karate school.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ESPNMMA',
            title: 'ESPN MMA / UFC Fight Pass — archived fights and breakdowns',
            channel: 'ESPN MMA',
            duration: 'variable',
            featured: true,
            why: 'The most complete free archive of high-level striking in live competition. Study fights at eighty percent speed to learn the vocabulary in context.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@SyndicateMMA',
            title: 'Syndicate MMA — John Wood\'s Las Vegas gym',
            channel: 'Syndicate MMA',
            duration: 'variable',
            featured: false,
            why: 'A working MMA gym\'s free tutorial archive. Drills, pad work, and corner coaching from an active competitive environment.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@LiamHarrison',
            title: 'Liam Harrison — Muay Thai pad work and technique',
            channel: 'Liam Harrison',
            duration: 'variable',
            featured: false,
            why: 'English Muay Thai fighter with an extraordinary career. His tutorial channel teaches leg kicks, teeps, and clinch work from someone who has used all of it at the highest level.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@Modernmuaythai',
            title: 'Sean Fagan — Modern Muay Thai',
            channel: 'Sean Fagan',
            duration: 'variable',
            featured: false,
            why: 'Fagan\'s free tutorials are the most complete Muay Thai curriculum on YouTube for non-Thai students. Technique, pad work, and Thailand training-camp advice.',
          },
        ],
        books: [
          {
            title: 'Championship Fighting: Explosive Punching and Aggressive Defense',
            author: 'Jack Dempsey',
            year: 1950,
            url: 'https://archive.org/details/championship-fighting-explosive-punching-and-aggressive-defense-pdfdrive',
            why: 'The heavyweight champion\'s own instructional. Dempsey\'s "falling step" and his biomechanics of punching are still taught today. Short, clear, foundational.',
          },
          {
            title: 'Boxing: A Cultural History',
            author: 'Kasia Boddy',
            year: 2008,
            url: 'https://www.reaktionbooks.co.uk/work/boxing',
            why: 'Boddy\'s scholarly history of boxing from the Greeks to Ali and beyond. The cultural-historical reference for the most documented striking art.',
          },
          {
            title: 'The Textbook of Modern Karate',
            author: 'Teruyuki Okazaki, Milorad V. Stričević',
            year: 1984,
            url: 'https://www.worldcat.org/title/textbook-of-modern-karate/oclc/11915316',
            why: 'Master Okazaki\'s methodical Shotokan reference. The best English-language technical karate text still in print.',
          },
          {
            title: 'Muay Thai: A Living Legacy',
            author: 'Kat Prayukvong, Lesley D. Junlakan',
            year: 2001,
            url: 'https://www.worldcat.org/title/muay-thai-a-living-legacy/oclc/48155525',
            why: 'The definitive cultural and technical guide to the Thai art. Published in Bangkok and widely used as a reference in Thailand itself.',
          },
          {
            title: 'On Boxing',
            author: 'Joyce Carol Oates',
            year: 1987,
            url: 'https://www.harpercollins.com/products/on-boxing-joyce-carol-oates',
            why: 'Oates\'s short literary meditation on the sport. Not a how-to; a serious essay on why humans fight and watch fighting. Every thinking boxer reads it.',
          },
        ],
        articles: [
          {
            title: 'Boxing',
            source: 'Britannica',
            url: 'https://www.britannica.com/sports/boxing',
            why: 'Editorial history and technical survey. Good first read before the Boddy book.',
            year: null,
          },
          {
            title: 'Muay Thai',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Muay_Thai',
            why: 'Solid reference article with Thai cultural and linguistic context.',
            year: null,
          },
          {
            title: 'Karate',
            source: 'Britannica',
            url: 'https://www.britannica.com/sports/karate',
            why: 'Editorial history of the Japanese-Okinawan tradition. Useful for distinguishing the major styles.',
            year: null,
          },
          {
            title: 'Chronic traumatic encephalopathy and combat sports',
            source: 'Brain Injury Research Institute',
            url: 'https://www.protectthebrain.org/',
            why: 'Primary source for the current medical understanding of CTE in combat sports. Essential reading for anyone considering serious training.',
          },
        ],
        courses: [
          {
            title: 'USA Boxing certification program',
            provider: 'USA Boxing',
            url: 'https://www.teamusa.com/usa-boxing',
            free: false,
            why: 'The American amateur boxing governing body. Coach and athlete certification, the legitimate path into the sport.',
          },
          {
            title: 'Muay Thai camps in Thailand (Sitmonchai, Tiger Muay Thai, etc.)',
            provider: 'Multiple gyms',
            url: 'https://www.sitmonchaigym.com/',
            free: false,
            why: 'A month or two at a Thai gym remains the most concentrated training camp in Muay Thai. The pilgrimage many serious practitioners take once.',
          },
        ],
        tools: [
          {
            title: 'Everlast / Cleto Reyes / Winning — boxing gloves',
            url: 'https://www.cletoreyes.com/',
            why: 'The three reference glove-makers. Cleto Reyes of Mexico is the standard professional boxing glove for seventy years.',
          },
          {
            title: 'Fairtex Muay Thai gear',
            url: 'https://www.fairtex.com/',
            why: 'The reference Thai-made Muay Thai equipment supplier. Every serious Muay Thai gym has Fairtex pads in the corner.',
          },
        ],
        primarySources: [
          {
            title: 'Muhammad Ali vs. Sonny Liston (1964) — full fight',
            url: 'https://en.wikipedia.org/wiki/Muhammad_Ali_vs._Sonny_Liston',
            why: 'One of the most studied heavyweight fights ever. Watch for footwork, jab rhythm, and the sudden style shift that Liston could not solve.',
          },
        ],
      },

      seeAlso: ['grappling', 'yoga', 'running'],
      prereqs: [],
      leadsTo: ['grappling'],

      chapterActivity: 'A Saturday-morning beginner\'s boxing class at Gleason\'s Gym in Dumbo — the oldest active boxing gym in the United States. Walk in, pay for the day, learn the jab.',

      sources: [
        'https://www.britannica.com/sports/boxing',
        'https://en.wikipedia.org/wiki/Muay_Thai',
        'https://www.britannica.com/sports/karate',
      ],
      verifiedAt: '2026-04-23',
    },

    grappling: {
      id: 'grappling',
      name: 'Grappling Arts',
      level: 'Intermediate',
      dek: 'Judo, wrestling, Brazilian jiu-jitsu — the traditions of throwing, pinning, and submitting.',
      readTime: '13 min',

      sections: ['A separate branch of fighting', 'Wrestling, the oldest sport', 'Judo and the science of throwing', 'Brazilian jiu-jitsu and the ground game', 'Training as the curriculum'],
      body: [
        { type: 'lead', text: 'In 1914, a small Japanese judoka named Mitsuyo Maeda stepped off a boat in Belém, Brazil. He was thirty-five, had traveled the world for fifteen years teaching judo, and had been sent north by his Kodokan teachers to promote Japanese immigration. A local politician named Gastão Gracie helped him settle, and in return Maeda taught Gastão\'s son Carlos judo. Carlos taught his brothers; one of them, Hélio, adapted the art for his own smaller body; four generations later, the Gracie family\'s modified judo had conquered the modern sport of mixed martial arts and renamed itself Brazilian jiu-jitsu. Grappling arts travel, and the pedagogy travels with them.' },
        { type: 'h2', text: 'A separate branch of fighting' },
        { type: 'p', text: 'Striking is about distance — keeping it, closing it, hitting across it. Grappling is about contact. Once you are holding another person, the rules of the engagement change completely. Balance matters more than speed. Leverage matters more than strength. Small adjustments — a shift of weight, a hand on the wrist, a hip-check — decide matches. Striking arts reward repetition of technique; grappling arts reward repetition plus live, resisting training. You cannot learn grappling without rolling with people who are trying to grapple back. It is the defining feature of the training.' },
        { type: 'h2', text: 'Wrestling, the oldest sport' },
        { type: 'p', text: 'Wrestling appears in the oldest records of athletic competition. A bronze figurine of two wrestlers from Khafajah, Iraq, is 2,500 years older than the Iliad. Greek Olympic pankration, Mongolian bökh, Indian kushti, American folkstyle, collegiate freestyle — all are regional variants of the basic human problem of pinning another person without weapons. Modern wrestling splits into freestyle and Greco-Roman (no leg attacks below the waist). Collegiate American "folkstyle" differs slightly from international freestyle. Wrestlers are the best athletes in most combat-sport gyms. Their training — two practices a day, twice-a-week competition, decades of drilling — is unforgiving and transferable.' },
        { type: 'h2', text: 'Judo and the science of throwing' },
        { type: 'p', text: 'Jigoro Kano, a Japanese educator, founded judo in 1882 by synthesizing older ju-jutsu schools into a safer, teachable art. Kano organized the throws into families — hand throws, hip throws, leg throws, sacrifice throws — codified belt ranks (the first martial art to do so), and founded the Kodokan, still judo\'s headquarters. Judo is now an Olympic sport and practiced in nearly every country. Throws — ippon seoi nage, uchi mata, harai goshi — require hundreds of careful repetitions with a partner called uke who takes the falls. Every judoka learns ukemi, the art of falling, before they learn to throw. It is possibly the most useful single skill in any martial art, because falling happens in life, not just in a dojo.' },
        { type: 'h2', text: 'Brazilian jiu-jitsu and the ground game' },
        { type: 'p', text: 'Brazilian jiu-jitsu descended from judo through Maeda and the Gracies, and focused almost entirely on the ground — guards, sweeps, mounts, chokes, joint locks. The practice is live: a BJJ class ends with "rolling," five-minute timed matches with full resistance under rules that forbid strikes but allow nearly any submission. BJJ spread globally in the 1990s after the first UFC events showed that a trained grappler could defeat a larger untrained striker on the ground. Modern BJJ has splintered into gi (with the traditional jacket and belt) and no-gi (in shorts and rashguard), with different technical vocabularies. A new student rolls three or four times a week for a year to earn a blue belt. A black belt takes ten years or more.' },
        { type: 'h2', text: 'Training as the curriculum' },
        { type: 'p', text: 'A grappling gym is a small intimate community. You sweat on strangers, you are choked by them, you pin them on the way to your own submission — and forty-five minutes later you drink water with them and laugh. The culture is less formal than striking gyms; hazing is rare; ego is quickly sanded off in any gym worth its mats because everyone loses to everyone, regularly. The standard advice for a new grappler is the same in every tradition. Show up consistently. Roll with higher belts whenever they are willing. Pay attention when you lose. Take notes. Trim your fingernails. The art teaches itself, if you are there for long enough.' },
        { type: 'callout', text: 'First month: judo or BJJ three times a week. Learn to fall — ukemi, breakfall, side and back fall — in the first two weeks. No sparring or heavy rolling for the first three weeks. Find a training partner roughly your size. Drill the first two techniques the instructor shows you until you can do them in your sleep. After thirty days, you will have a foundation it would otherwise take a year to accidentally accumulate.' },
        { type: 'callout', text: 'A note on safety: ear damage (cauliflower ear), joint injuries, and skin infections (ringworm, staph, impetigo) are the common grappling risks. Wear protective headgear if you care about your ears. Stop rolling immediately if a joint lock is applied and refuse to "work out of" it. Shower right after practice. Wash your gi and rash guard after every session.' },
      ],

      keyTerms: ['takedown', 'double-leg', 'single-leg', 'ippon seoi nage', 'uchi mata', 'ukemi', 'guard', 'mount', 'side control', 'armbar', 'rear naked choke', 'triangle', 'rolling'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@BJJFanatics',
            title: 'BJJ Fanatics — technique instructionals from every major BJJ coach',
            channel: 'BJJ Fanatics',
            duration: 'variable',
            featured: true,
            why: 'The leading publisher of BJJ instruction, with hundreds of free clips from John Danaher, Gordon Ryan, Craig Jones, and the rest of the active competitor-coaches.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@BernardoFaria',
            title: 'Bernardo Faria — five-time BJJ world champion',
            channel: 'Bernardo Faria BJJ',
            duration: 'variable',
            featured: true,
            why: 'Bernardo Faria\'s patient, technical channel teaches a specific repertoire of BJJ moves drawn from his championship career. The best structured free curriculum.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@KodokanJudoInstitute',
            title: 'Kodokan Judo Institute — historic archive',
            channel: 'Kodokan',
            duration: 'variable',
            featured: true,
            why: 'The Japanese Kodokan\'s own historical archive includes Jigoro Kano\'s instructional films and many technical demonstrations unavailable elsewhere.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ShintaroHigashi',
            title: 'Shintaro Higashi — judo for the modern student',
            channel: 'Shintaro Higashi',
            duration: 'variable',
            featured: false,
            why: 'A New York-based judo black belt whose channel is the best contemporary free judo instruction in English. Hands-on, accessible, patient.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@CoachSchaeferBBRJJ',
            title: 'Coach Schaefer / Black Belt Magazine archives',
            channel: 'Various',
            duration: 'variable',
            featured: false,
            why: 'Historical wrestling and grappling instruction. Dan Gable clinics, Cael Sanderson breakdowns, and the rest of the American wrestling canon.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@RamseyDewey',
            title: 'Ramsey Dewey — grappling critique and cross-training',
            channel: 'Ramsey Dewey',
            duration: 'variable',
            featured: false,
            why: 'Dewey\'s grappling videos are a critical examination of what actually works across traditions. Useful for the student considering which grappling art to begin.',
          },
        ],
        books: [
          {
            title: 'Kodokan Judo',
            author: 'Jigoro Kano',
            year: 1955,
            url: 'https://archive.org/details/kodokanjudo0000kano',
            why: 'The founder\'s own systematic description of his art. The most important single grappling text ever written.',
          },
          {
            title: 'Jiu-Jitsu University',
            author: 'Saulo Ribeiro, Kevin Howell',
            year: 2008,
            url: 'https://victorybelt.com/product/jiu-jitsu-university/',
            why: 'The best single-volume BJJ textbook. Organized by belt level — white belt survival, blue belt escapes, and so on up the ranks.',
          },
          {
            title: 'Choque',
            author: 'Roberto Pedreira',
            year: 2014,
            url: 'https://www.globaltrainingreport.com/choque.htm',
            why: 'Pedreira\'s three-volume primary-sourced history of Brazilian jiu-jitsu. The reference for separating Gracie family myth from documented history.',
          },
          {
            title: 'Wrestling Tough',
            author: 'Mike Chapman',
            year: 2005,
            url: 'https://us.humankinetics.com/products/wrestling-tough',
            why: 'The most-cited American wrestling training book. The mental and tactical training that top American wrestlers use.',
          },
          {
            title: 'The Gift of the Gracies',
            author: 'Reila Gracie (trans.)',
            year: 2008,
            url: 'https://www.globaltrainingreport.com/reilagracie.htm',
            why: 'A primary-source account of the Gracie family and its lineage from Carlos and Hélio Gracie. Controversial, necessary reading for BJJ students.',
          },
        ],
        articles: [
          {
            title: 'Judo',
            source: 'Britannica',
            url: 'https://www.britannica.com/sports/judo',
            why: 'Editorial history of Kano and the Kodokan. Good first read.',
            year: null,
          },
          {
            title: 'Brazilian jiu-jitsu',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Brazilian_jiu-jitsu',
            why: 'Comprehensive reference with primary sources on the Maeda-Gracie transmission and the modern sport.',
            year: null,
          },
          {
            title: 'Wrestling',
            source: 'Britannica',
            url: 'https://www.britannica.com/sports/wrestling',
            why: 'Survey of the oldest organized sport, covering ancient and modern forms.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Kodokan Judo Institute (open training and international visitor program)',
            provider: 'Kodokan',
            url: 'https://kodokanjudoinstitute.org/en/',
            free: false,
            why: 'The founding judo institute in Tokyo. Visiting practitioners can train, observe, and earn Kodokan rank recognition.',
          },
          {
            title: 'USA Wrestling coaching and athlete certification',
            provider: 'USA Wrestling',
            url: 'https://www.teamusa.com/usa-wrestling',
            free: false,
            why: 'The American wrestling governing body. Certification, rule books, and the club registry for the United States.',
          },
        ],
        tools: [
          {
            title: 'BJJ Heroes competition history database',
            url: 'https://www.bjjheroes.com/',
            why: 'Scholarly archive of BJJ competition and lineages. The reference for settling questions about who trained with whom, and who won what.',
          },
          {
            title: 'Shoyoroll / Hayabusa / Fuji gear',
            url: 'https://www.fujimats.com/',
            why: 'The standard grappling-equipment suppliers. A single durable gi lasts a serious student three or four years.',
          },
        ],
        primarySources: [
          {
            title: 'Helio Gracie vs. Masahiko Kimura (1951, São Paulo)',
            url: 'https://en.wikipedia.org/wiki/Masahiko_Kimura',
            why: 'The legendary 1951 match in which the Japanese judoka Masahiko Kimura defeated Hélio Gracie with the arm-lock that now bears his name. A documented primary event in grappling history.',
          },
        ],
      },

      seeAlso: ['striking', 'running', 'climbing'],
      prereqs: [],
      leadsTo: [],

      chapterActivity: 'A Friday-night open mat at Marcelo Garcia BJJ on West 29th Street — drop in, roll with strangers, pay by the day. The most famous open mat in New York.',

      sources: [
        'https://www.britannica.com/sports/judo',
        'https://en.wikipedia.org/wiki/Brazilian_jiu-jitsu',
        'https://www.britannica.com/sports/wrestling',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
