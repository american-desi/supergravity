// content/dance.js
// Batch: B13-arts-performing
// Last updated: 2026-04-23 by BATCH B13+B14
//
// Topics this subject must cover (from data.js):
//   Core: ballet, social_dance

window.CONTENT = window.CONTENT || {};
window.CONTENT.dance = {
  subjectId: 'dance',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B13+B14',
  topics: {

    ballet: {
      id: 'ballet',
      name: 'Ballet',
      level: 'Intermediate',
      dek: 'Five positions, four centuries, and a classical vocabulary that every concert dance still argues with.',
      readTime: '13 min',

      sections: ['A French court, a Russian court', 'The five positions', 'The barre and the center', 'The ballets that survived', 'Balanchine and the American line'],
      body: [
        { type: 'lead', text: 'In 1661, Louis XIV — who had been dancing as the Sun King on French court stages since he was thirteen — founded the Académie Royale de Danse in Paris and asked the court ballet master Pierre Beauchamp to systematize the steps. Beauchamp codified the five positions of the feet and the five positions of the arms that every ballet dancer on earth still rehearses every morning. The vocabulary is that old, that French, and that court-bound. When a student in Brooklyn or Moscow or Havana lifts an arm to second position tomorrow, they are doing what a seventeenth-century French courtier invented to flatter a king.' },
        { type: 'h2', text: 'A French court, a Russian court' },
        { type: 'p', text: 'The ballet was born in the French court and grew up in the Russian one. Paris invented the form; Saint Petersburg, under the tsars, perfected it. Marius Petipa, a French emigré who spent fifty years at the Mariinsky, choreographed The Sleeping Beauty, Swan Lake, and The Nutcracker in the last three decades of the nineteenth century, and those ballets — with scores by Tchaikovsky, a collaborator who wrote music on Petipa\'s count sheets — are the canon every major company still performs. After the Russian Revolution in 1917, the dancers scattered: George Balanchine and Serge Lifar to Paris, Mikhail Fokine to New York, Anna Pavlova on world tour. Ballet went everywhere.' },
        { type: 'h2', text: 'The five positions' },
        { type: 'p', text: 'Every ballet class in the world begins with the feet in first position — heels together, toes turned out — and moves through second, third, fourth, and fifth. The turnout, which comes from the hip, is the physical signature of ballet; no other dance form demands it so completely. The arms — bras bas through first to fifth, port de bras — describe their own geometry in the air. A beginner spends months making the feet and arms remember the positions without thinking. An advanced dancer spends a career refining the same five positions. The form is strict because the vocabulary built on top of it — pirouettes, arabesques, jetés, fouettés — requires that the foundation be exact.' },
        { type: 'h2', text: 'The barre and the center' },
        { type: 'p', text: 'A ballet class is ninety minutes long and built on a fixed structure. The first forty-five minutes happen at the barre — pliés, tendus, dégagés, rond de jambes, grand battements — warming the body and refining alignment with one hand on a wooden rail. The second forty-five minutes happen in the center, without the barre, with the combinations growing longer and larger until the class ends in grand allegro — big jumps across the floor on the diagonal. The structure has been essentially unchanged since Agrippina Vaganova codified the Russian syllabus in the 1930s. Every professional ballet dancer in the world takes this class, every day, for their entire career.' },
        { type: 'h2', text: 'The ballets that survived' },
        { type: 'p', text: 'A dozen ballets from the nineteenth-century canon are still performed more nights than all other ballets combined. Giselle (1841), Swan Lake (1877), The Sleeping Beauty (1890), The Nutcracker (1892), Don Quixote, La Bayadère, Coppélia. These are the narrative ballets — story-driven, full-evening, with a named heroine and a clearly staged corps. In the twentieth century, Balanchine created a parallel tradition of plotless ballets in which the dancing itself is the subject: Apollo, Serenade, Agon, Jewels. Both traditions are alive. The New York City Ballet still performs Balanchine. American Ballet Theatre and the Royal Ballet still perform the Petipa canon. Most serious dancers work in both.' },
        { type: 'h2', text: 'Balanchine and the American line' },
        { type: 'p', text: 'George Balanchine arrived in New York in 1933 at the invitation of Lincoln Kirstein, who offered him an American ballet school and eventually an American company. Balanchine\'s answer to the invitation was "first a school," and the School of American Ballet opened in 1934 on a single floor of a midtown office building. The company it produced — the New York City Ballet, from 1948 — became the most influential ballet company in the world. Balanchine\'s style — fast, musical, stripped of narrative, built to American jazz rhythms and Stravinsky scores — is the American addition to the tradition. Every dancer trained in the United States is, at some remove, a Balanchine dancer.' },
        { type: 'callout', text: 'Pointe shoes — the stiff-toed satin shoes that let a female dancer stand on the tips of her toes — were made possible by a shoemaker\'s box of glue and paper in the 1820s. They wear out in hours. A principal dancer at New York City Ballet goes through a hundred and fifty pairs in a season.' },
      ],

      keyTerms: ['first through fifth position', 'plié', 'tendu', 'arabesque', 'pirouette', 'port de bras', 'barre', 'grand allegro', 'pointe', 'pas de deux', 'Vaganova', 'Cecchetti'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@NewYorkCityBallet',
            title: 'New York City Ballet — official channel',
            channel: 'New York City Ballet',
            duration: 'variable',
            featured: true,
            why: 'NYCB\'s free archive — Balanchine interviews, rehearsal footage, anatomy-of-a-dance series, and the Nutcracker company film. The richest free ballet resource online.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TheRoyalBallet',
            title: 'Royal Opera House — The Royal Ballet',
            channel: 'Royal Opera House',
            duration: 'variable',
            featured: true,
            why: 'Covent Garden\'s free rehearsal films, insight evenings, and the World Ballet Day archive. Access to class and coaching footage from one of the great companies.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@BolshoiTheatre',
            title: 'Bolshoi Theatre — official channel',
            channel: 'Bolshoi Theatre',
            duration: 'variable',
            featured: true,
            why: 'Historic and current Bolshoi performance clips, company class, and archival Vaganova teaching. The Russian line at the source.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@MarquiseDance',
            title: 'Kathryn Morgan — NYCB and beyond',
            channel: 'Kathryn Morgan',
            duration: 'variable',
            featured: false,
            why: 'Former NYCB soloist Kathryn Morgan\'s long-running ballet channel. Variation breakdowns, honest career reflections, and beginner-adult technique advice.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@AmericanBalletTheatre',
            title: 'American Ballet Theatre — official channel',
            channel: 'American Ballet Theatre',
            duration: 'variable',
            featured: false,
            why: 'ABT\'s video archive holds coaching sessions with Makarova, Farrell, and other legends of the repertoire.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.marquee.tv/browse/genre/dance',
            title: 'Marquee TV — dance streaming',
            channel: 'Marquee TV',
            duration: 'variable',
            featured: false,
            why: 'Streaming service (paid, free trial) with the Royal Ballet, Bolshoi, Paris Opera, and Dutch National catalogue. The best curated dance film library online.',
          },
        ],
        books: [
          {
            title: 'Apollo\'s Angels: A History of Ballet',
            author: 'Jennifer Homans',
            year: 2010,
            url: 'https://www.penguinrandomhouse.com/books/91195/apollos-angels-by-jennifer-homans/',
            why: 'The first comprehensive history of ballet in the English language, and the best. Homans was a professional dancer; she writes with the craft\'s respect.',
          },
          {
            title: 'Technique of Classical Ballet',
            author: 'Agrippina Vaganova',
            year: 1934,
            url: 'https://archive.org/details/basicprinciplesb00vaga',
            why: 'The Russian syllabus that defined twentieth-century ballet training. Still the most widely used pedagogical text in the world.',
          },
          {
            title: 'Balanchine\'s Complete Stories of the Great Ballets',
            author: 'George Balanchine, Francis Mason',
            year: 1977,
            url: 'https://archive.org/details/balanchinescompl00bala',
            why: 'The choreographer\'s own scene-by-scene programs for five hundred ballets. The reference book in every ballet library.',
          },
          {
            title: 'Dancing on My Grave',
            author: 'Gelsey Kirkland, Greg Lawrence',
            year: 1986,
            url: 'https://archive.org/details/dancingonmygrave00kirk',
            why: 'The ABT and NYCB principal\'s unsparing memoir. The most honest account of a classical dancer\'s life ever written.',
          },
          {
            title: 'I Was a Dancer',
            author: 'Jacques d\'Amboise',
            year: 2011,
            url: 'https://www.penguinrandomhouse.com/books/180908/i-was-a-dancer-by-jacques-damboise/',
            why: 'The great Balanchine dancer\'s memoir of fifty years in ballet. Warmer than Kirkland and just as inside.',
          },
        ],
        articles: [
          {
            title: 'Ballet',
            source: 'Britannica',
            url: 'https://www.britannica.com/art/ballet',
            why: 'Editorial survey from court ballet to the twenty-first century. Good first read before the Homans book.',
            year: null,
          },
          {
            title: 'Glossary of ballet',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Glossary_of_ballet',
            why: 'The most complete free glossary of French ballet terms with English definitions and video links. A working reference.',
            year: null,
          },
          {
            title: 'George Balanchine',
            source: 'The New York Public Library for the Performing Arts',
            url: 'https://www.nypl.org/locations/lpa/jerome-robbins-dance-division',
            why: 'The Jerome Robbins Dance Division holds the largest performing-arts archive in the world. Balanchine\'s papers, films, and rehearsal recordings live here.',
          },
        ],
        courses: [
          {
            title: 'NYCB Workout — free archive clips',
            provider: 'New York City Ballet',
            url: 'https://www.youtube.com/@NewYorkCityBallet',
            free: true,
            why: 'NYCB\'s historic company-class archive and the digital-season workshop videos. Free, short, company-level exercises.',
          },
          {
            title: 'Introduction to Ballet',
            provider: 'English National Ballet',
            url: 'https://www.ballet.org.uk/learn/',
            free: true,
            why: 'ENB\'s free learning portal with beginner-adult video, terminology, and repertoire context.',
          },
        ],
        tools: [
          {
            title: 'Jerome Robbins Dance Division (NYPL)',
            url: 'https://www.nypl.org/locations/lpa/jerome-robbins-dance-division',
            why: 'The world\'s largest dance archive, at Lincoln Center. Free to visit; any ballet historian or serious student uses it.',
          },
        ],
        primarySources: [
          {
            title: 'Swan Lake (1877) — Tchaikovsky / Petipa-Ivanov',
            url: 'https://en.wikipedia.org/wiki/Swan_Lake',
            why: 'The canonical Romantic ballet. Watch any full-length production and every later ballet will have a reference point.',
          },
        ],
      },

      seeAlso: ['social_dance', 'classical', 'acting'],
      prereqs: [],
      leadsTo: ['social_dance'],

      chapterActivity: 'A Friday open class for adults at Gibney in Union Square — beginners welcome, live pianist, ninety minutes of barre and center taught by a working dancer.',

      sources: [
        'https://www.britannica.com/art/ballet',
        'https://en.wikipedia.org/wiki/Glossary_of_ballet',
      ],
      verifiedAt: '2026-04-23',
    },

    social_dance: {
      id: 'social_dance',
      name: 'Social Dances',
      level: 'Beginner',
      dek: 'Salsa, swing, tango — the couples traditions where the whole point is to dance with the person in front of you.',
      readTime: '12 min',

      sections: ['Social, not stage', 'The lead and the follow', 'A tour of the big traditions', 'The frame and the connection', 'Music, not counts'],
      body: [
        { type: 'lead', text: 'On a humid August night in 1913, a Buenos Aires couple named Casimiro Aín and his partner performed a new dance called the tango at the Bal Tabarin in Paris, and within a year the dance had swept the European capitals and crossed the Atlantic. Forty years later, black teenagers in Harlem invented the Lindy Hop at the Savoy Ballroom. Thirty years after that, Cuban and Puerto Rican immigrants in New York forged salsa at the Palladium. Every one of these traditions still packs dance halls on weeknights, in a line that runs unbroken from the original dancers to whoever is leading a beginner through their first basic step in Manhattan tonight.' },
        { type: 'h2', text: 'Social, not stage' },
        { type: 'p', text: 'Social dance is different from performance dance. The audience is the partner. The point is not to demonstrate — it is to enjoy the dance with another person and to navigate the floor among twenty other couples doing the same thing. A dancer who shows off at a milonga makes a pest of themselves. A dancer who listens to the music and moves well with their partner is invited back. The skills you need — a clear frame, attentive weight, a good ear for phrasing — are not the skills of a solo performer. They are the skills of a good partner.' },
        { type: 'h2', text: 'The lead and the follow' },
        { type: 'p', text: 'Most traditional social dances use a lead and a follow. The lead — historically the man, now often anyone — initiates the next movement; the follow — historically the woman, now often anyone — interprets it. Neither role is harder. A good follow is more skilled than most leads. In contemporary dance communities the roles are increasingly fluid, with dancers trained in both, and the modern convention is to use "leader" and "follower" rather than gendered terms. The invitation, connection, and response are the same whoever leads.' },
        { type: 'h2', text: 'A tour of the big traditions' },
        { type: 'p', text: 'Argentine tango is walked; the 4/4 is slow and breaking the music into halves and thirds is the improviser\'s game. Salsa, on-1 or on-2, is a New York-Cuban hybrid danced fast to clave rhythm; the basic step is forward-back or back-forward over two bars. Swing covers a family — Lindy Hop (the 1930s original), East Coast swing (the simpler six-count later variant), Balboa (close-embrace), West Coast swing (a slotted modern partner dance) — all descended from the Savoy. Blues dancing is slow, close, and grounded. Ballroom — waltz, foxtrot, cha-cha — has a formal pedagogy still taught in every dance studio. No one tradition is "correct"; each has its music, its geography, and its aesthetic.' },
        { type: 'h2', text: 'The frame and the connection' },
        { type: 'p', text: 'Every partnered dance depends on frame — the elastic posture of the arms and back through which lead and follow communicate. A limp frame transmits nothing; a rigid one hurts. A good frame is firm without being stiff, responsive without being floppy. The connection is what flows through it: weight, direction, timing, intention. Teachers say the follow is "listening" and the lead is "speaking," but both are always doing both. A beginner spends a year feeling for the connection. An experienced dancer feels it in the first eight bars with a new partner and adjusts.' },
        { type: 'h2', text: 'Music, not counts' },
        { type: 'p', text: 'Beginners dance to counts — one two three, or slow slow quick quick — because the body needs the numbers to keep time. Experienced dancers dance to music. They hit accents, pause on phrase breaks, take the breath where the bandleader takes it. This is why the same couple dancing to a good band and to a mediocre recording looks like two different couples. The music does most of the work of a good dance. A teacher once summed it up: "The counts are training wheels. Take them off as soon as you can stay up without them."' },
        { type: 'callout', text: 'Every serious social-dance community in New York runs a weekly dance. Tango at La Nacional on 14th Street. Salsa at the Copacabana. Swing at Swing 46 and Lincoln Center\'s Midsummer Night Swing. You can walk into any of them, take a free half-hour lesson before the band starts, and dance all night with strangers who will patiently lead or follow a beginner.' },
      ],

      keyTerms: ['lead', 'follow', 'frame', 'connection', 'basic step', 'clave', 'milonga', 'Lindy Hop', 'cross-body lead', 'dip', 'cross-step', 'cabeceo'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@LearnToDance',
            title: 'Tango: Murat and Michelle Erdemsel',
            channel: 'Learn Argentine Tango',
            duration: 'variable',
            featured: true,
            why: 'Tango maestros whose structured free tutorials on posture, walking, and musicality are used as first-step references by teachers worldwide.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@iALOfficial',
            title: 'iAL Studios — salsa and bachata instruction',
            channel: 'International Association of Latin Dance',
            duration: 'variable',
            featured: true,
            why: 'The largest free library of social-salsa and bachata instructional video online, with named teachers and graded progressions.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@iLindy',
            title: 'iLindy — Kevin St. Laurent and Jo Hoffberg',
            channel: 'iLindy',
            duration: 'variable',
            featured: true,
            why: 'The most trusted online Lindy Hop school. Hundreds of free tutorial clips, progressively organized.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@EddieTorresNY',
            title: 'Eddie Torres — New York salsa',
            channel: 'Eddie Torres',
            duration: 'variable',
            featured: false,
            why: 'The Mambo King. Eddie Torres essentially founded modern New York on-2 salsa; his tapes and workshops are history in motion.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@FrankieManningFoundation',
            title: 'Frankie Manning Foundation — Lindy Hop archive',
            channel: 'Frankie Manning Foundation',
            duration: 'variable',
            featured: false,
            why: 'The foundation keeping the Savoy Ballroom\'s godfather alive. Rare historical clips and free instructional material.',
          },
        ],
        books: [
          {
            title: 'Frankie Manning: Ambassador of Lindy Hop',
            author: 'Frankie Manning, Cynthia R. Millman',
            year: 2007,
            url: 'https://temple.manifoldapp.org/projects/frankie-manning',
            why: 'The autobiography of the man who invented the aerial in Lindy Hop at the Savoy Ballroom. A genuine primary source on American social dance.',
          },
          {
            title: 'Paper Tangos',
            author: 'Julie Taylor',
            year: 1998,
            url: 'https://www.dukeupress.edu/paper-tangos',
            why: 'An anthropologist and tango dancer on the politics and embodiment of the dance. Probably the best book in English on tango as a lived practice.',
          },
          {
            title: 'Dance of the Millions: Latin America and the Debt Crisis',
            author: 'John A. Booth / Also see: Salsa! Havana Heat, Bronx Beat',
            year: 2004,
            url: 'https://temple.manifoldapp.org/projects/salsa-rising',
            why: 'Juan Flores\'s Salsa Rising is the reference history of New York salsa. Cultural, musical, and social, from the Palladium onward.',
          },
          {
            title: 'Savoy: The Cradle of American Swing',
            author: 'Frank Driggs, Harris Lewine',
            year: 2015,
            url: 'https://www.worldcat.org/title/savoy-cradle-of-american-swing/oclc/879601611',
            why: 'A photographic and historical record of the Harlem ballroom where Lindy Hop was born and every American social dance has a root.',
          },
          {
            title: 'Tango: The Art History of Love',
            author: 'Robert Farris Thompson',
            year: 2005,
            url: 'https://www.penguinrandomhouse.com/books/117907/tango-by-robert-farris-thompson/',
            why: 'The Yale art-historian\'s monumental work on tango\'s African origins, Argentine flowering, and global diaspora. The scholar\'s reference.',
          },
        ],
        articles: [
          {
            title: 'Social dance',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Social_dance',
            why: 'Good survey with links into every major tradition. Use as a hub for deeper reading.',
            year: null,
          },
          {
            title: 'Lindy Hop',
            source: 'Britannica',
            url: 'https://www.britannica.com/art/Lindy-Hop',
            why: 'Short editorial history. Good for placing Lindy in the American cultural line from ragtime through swing.',
            year: null,
          },
          {
            title: 'Tango (music and dance)',
            source: 'Britannica',
            url: 'https://www.britannica.com/art/tango-dance',
            why: 'Editorial piece on the dance\'s Buenos Aires origins and global spread.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Lincoln Center Midsummer Night Swing — free beginner lessons',
            provider: 'Lincoln Center',
            url: 'https://www.lincolncenter.org/series/midsummer-night-swing',
            free: true,
            why: 'Every summer, Lincoln Center offers half-hour free lessons before live swing bands. One of the great introductions to social dance in the United States.',
          },
          {
            title: 'Swing Dance Essentials (iLindy)',
            provider: 'iLindy',
            url: 'https://www.ilindy.com/',
            free: false,
            why: 'Online Lindy Hop curriculum with both free and paid tiers. The most structured internet-based dance school.',
          },
        ],
        tools: [
          {
            title: 'Dance Happens Here (NYC social-dance calendar)',
            url: 'https://www.dance-happens-here.com/',
            why: 'Long-running aggregator of every social dance in New York City — where, when, and what tradition. The starting point for anyone who wants to go out dancing tonight.',
          },
        ],
        primarySources: [
          {
            title: 'Hellzapoppin\' (1941) — Whitey\'s Lindy Hoppers',
            url: 'https://en.wikipedia.org/wiki/Hellzapoppin%27_(film)',
            why: 'The three-minute Lindy sequence in Hellzapoppin\' is the single most famous clip of social dance ever filmed. Essentially the birth certificate of Lindy Hop on film.',
          },
        ],
      },

      seeAlso: ['ballet', 'popular', 'jazz'],
      prereqs: [],
      leadsTo: [],

      chapterActivity: 'A monthly "first Sunday" beginner tango practica at La Nacional on West 14th — lesson, then three hours of social dancing, experienced partners happy to lead or follow newcomers.',

      sources: [
        'https://en.wikipedia.org/wiki/Social_dance',
        'https://www.britannica.com/art/Lindy-Hop',
        'https://www.britannica.com/art/tango-dance',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
