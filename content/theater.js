// content/theater.js
// Batch: B13-arts-performing
// Last updated: 2026-04-23 by BATCH B13+B14
//
// Topics this subject must cover (from data.js):
//   Core: acting, directing

window.CONTENT = window.CONTENT || {};
window.CONTENT.theater = {
  subjectId: 'theater',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B13+B14',
  topics: {

    acting: {
      id: 'acting',
      name: 'Acting',
      level: 'Intermediate',
      dek: 'Given circumstances, objectives, and actions — a century-old Russian grammar for behaving truthfully in front of a thousand people.',
      readTime: '13 min',

      sections: ['The Russian invention', 'Given circumstances', 'Objective and action', 'Breath, body, voice', 'The American branches'],
      body: [
        { type: 'lead', text: 'In 1898, at the Moscow Art Theatre, a forty-year-old amateur named Konstantin Stanislavski walked into rehearsals for Chekhov\'s The Seagull and began asking his actors questions no Russian director had asked before. Why does your character enter this room? What happened to him before he walked in? What does he want from the person he is about to meet? By the time the curtain rose, Stanislavski had invented the way modern actors work, and the method — the System, as his students called it — has governed American and European acting ever since. Everything currently taught in a conservatory is an argument with, or a refinement of, Stanislavski.' },
        { type: 'h2', text: 'The Russian invention' },
        { type: 'p', text: 'Before Stanislavski, stage acting was declamatory — gesture-based, outward, indicated. Actors studied poses in books and chose "the jealous pose" or "the terrified pose" from a menu. Stanislavski asked, instead, what a real human being in the character\'s circumstances would actually do, and trained his actors to recreate the inner life that produced the behavior. His system was codified in three books — An Actor Prepares, Building a Character, Creating a Role — and passed through his students to America via the Group Theatre in New York in the 1930s. The line from Stanislavski through Lee Strasberg, Stella Adler, and Sanford Meisner is the backbone of modern American acting.' },
        { type: 'h2', text: 'Given circumstances' },
        { type: 'p', text: 'The actor\'s first job is to understand what the playwright has given. Who is this person? Where are they? What time of day, what season, what century? What has just happened to them? What relationships do they have with the other people in the scene? These are the "given circumstances" — the factual conditions the actor will play into. A Chekhov actor who has not thought carefully about whether the samovar has been lit is not ready for the scene. A Mamet actor who has not counted every real-estate deal in the text is similarly unprepared. The text is the floor. The circumstances are the walls.' },
        { type: 'h2', text: 'Objective and action' },
        { type: 'p', text: 'An objective is what the character wants. An action is what they do to get it. Stanislavski required actors to state both in transitive-verb form: not "to be angry" (a feeling, not an action) but "to make him apologize" (a doable thing). Every beat of every scene has its objective and its action, and a well-prepared actor knows both. The late Uta Hagen, in her book Respect for Acting, spelled the discipline out in nine questions every actor must answer before walking on stage. Asked what she taught students, Hagen said: "I teach them how to read a script."' },
        { type: 'h2', text: 'Breath, body, voice' },
        { type: 'p', text: 'Acting is a physical craft. An actor who cannot be heard in the back of the room is an actor who is not yet working. Cicely Berry, the Royal Shakespeare Company\'s voice director for nearly fifty years, trained Judi Dench, Ben Kingsley, and a generation of British stage actors in a voice practice built around breath, rib cage, resonance, and attention to every vowel and consonant in a Shakespearean line. Tadashi Suzuki, working from Japanese Noh tradition, trained the body with a footwork practice that now bears his name. No serious acting school skips the physical training. The body is the instrument. The script is the score.' },
        { type: 'h2', text: 'The American branches' },
        { type: 'p', text: 'The Group Theatre split in the 1930s, and its students founded three distinct schools. Lee Strasberg\'s Method, at the Actors Studio, emphasizes emotional memory — the actor drawing on private life to fuel the moment. Stella Adler, who had worked directly with Stanislavski in Paris, rejected emotional memory and emphasized imagination and given circumstances. Sanford Meisner at the Neighborhood Playhouse stripped the work down to the famous repetition exercise and a single principle: acting is living truthfully under imagined circumstances. Al Pacino studied with Strasberg. Robert De Niro studied with Adler. Diane Keaton studied with Meisner. All three are Stanislavski, branched.' },
        { type: 'quote', text: 'Acting is living truthfully under imagined circumstances.', cite: 'Sanford Meisner' },
      ],

      keyTerms: ['given circumstances', 'objective', 'action', 'beat', 'subtext', 'the Method', 'Meisner repetition', 'Stanislavski System', 'emotional memory', 'tablework', 'blocking'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TheRoyalShakespeareCompany',
            title: 'Royal Shakespeare Company — masterclasses and rehearsal archives',
            channel: 'Royal Shakespeare Company',
            duration: 'variable',
            featured: true,
            why: 'The RSC\'s official channel holds text-workshop films, John Barton\'s Playing Shakespeare extracts, and voice sessions with Cicely Berry\'s lineage. The finest free Shakespeare acting resource online.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ActorsStudio',
            title: 'Inside the Actors Studio — archive interviews',
            channel: 'Actors Studio',
            duration: 'variable',
            featured: true,
            why: 'James Lipton\'s decades of long-form interviews with Pacino, Streep, Hoffman, Hackman, and more. The best free conversation archive on the craft of American acting.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@nationaltheatre',
            title: 'National Theatre — platform talks and workshops',
            channel: 'National Theatre',
            duration: 'variable',
            featured: true,
            why: 'The NT\'s London platform talks with working actors on specific roles. Free, long, and substantive — the level of conversation you get in a green room, recorded.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@RoyalAcademyofDramaticArt',
            title: 'RADA — the Royal Academy of Dramatic Art',
            channel: 'RADA',
            duration: 'variable',
            featured: false,
            why: 'The London conservatory\'s open-workshop channel. Acting exercises, voice sessions, and graduate showcases — a look inside one of the best acting schools in the world.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@MichaelCaineOfficial',
            title: 'Michael Caine — acting in film, BBC Master Class',
            channel: 'Michael Caine / BBC',
            duration: 'variable',
            featured: false,
            why: 'Caine\'s 1987 BBC master class on acting for the camera is still the best single hour on film acting ever recorded. Clips are on YouTube and his channel.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TheatreFolk',
            title: 'Theatrefolk — exercises for the high-school and community stage',
            channel: 'Theatrefolk',
            duration: 'variable',
            featured: false,
            why: 'Lindsay Price and Craig Mason publish practical rehearsal exercises for non-conservatory settings — community theater, drama classes, amateur companies.',
          },
        ],
        books: [
          {
            title: 'An Actor Prepares',
            author: 'Konstantin Stanislavski',
            year: 1936,
            url: 'https://archive.org/details/actorprepares00stan',
            why: 'The founding text. Still required reading in every conservatory in the Western hemisphere. The Elizabeth Hapgood translation is the English standard.',
          },
          {
            title: 'Impro',
            author: 'Keith Johnstone',
            year: 1979,
            url: 'https://www.taylorfrancis.com/books/mono/10.4324/9781315063171/impro-keith-johnstone',
            why: 'The most influential book on improvisation and stage presence ever written. Johnstone\'s chapters on status are now taught in actor training worldwide.',
          },
          {
            title: 'Respect for Acting',
            author: 'Uta Hagen',
            year: 1973,
            url: 'https://archive.org/details/respectforacting00haga',
            why: 'Hagen\'s nine-question preparation is the most practical actor\'s tool in print. A small book every working actor keeps on their shelf.',
          },
          {
            title: 'Sanford Meisner on Acting',
            author: 'Sanford Meisner, Dennis Longwell',
            year: 1987,
            url: 'https://www.penguinrandomhouse.com/books/105050/sanford-meisner-on-acting-by-sanford-meisner-and-dennis-longwell/',
            why: 'Transcribed from a year of Meisner\'s classes at the Neighborhood Playhouse. The clearest account of the Meisner repetition and why it works.',
          },
          {
            title: 'The Empty Space',
            author: 'Peter Brook',
            year: 1968,
            url: 'https://archive.org/details/emptyspace0000broo',
            why: 'The English director\'s short manifesto on theater. Not an acting manual, but every serious actor reads it at twenty-two and again at forty.',
          },
        ],
        articles: [
          {
            title: 'Stanislavski\'s system',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Stanislavski%27s_system',
            why: 'Thorough reference on the System and its terminology. Well-cited across the Russian and English primary sources.',
            year: null,
          },
          {
            title: 'Method acting',
            source: 'Britannica',
            url: 'https://www.britannica.com/art/Method-acting',
            why: 'Editorial survey of Lee Strasberg\'s American Method and its influence on mid-century film acting.',
            year: null,
          },
          {
            title: 'Konstantin Stanislavski',
            source: 'Britannica',
            url: 'https://www.britannica.com/biography/Konstantin-Stanislavsky',
            why: 'Biography and context for the founder. Useful first read before opening An Actor Prepares.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Acting and the Moving Body',
            provider: 'Coursera / National Theatre',
            url: 'https://www.coursera.org/learn/acting-moving-body',
            free: true,
            why: 'Free course co-produced with the NT. Body-based training on breath, voice, and physical presence for the stage.',
          },
          {
            title: 'Shakespeare and His World',
            provider: 'FutureLearn / University of Warwick',
            url: 'https://www.futurelearn.com/courses/shakespeare-and-his-world',
            free: true,
            why: 'Jonathan Bate\'s free course on the plays in context. Useful for actors preparing Shakespeare roles.',
          },
        ],
        tools: [
          {
            title: 'Folger Shakespeare Library — full texts',
            url: 'https://www.folger.edu/explore/shakespeares-works/',
            why: 'The Folger\'s authoritative, annotated, free editions of every Shakespeare play. The text every English-language Shakespeare actor works from.',
          },
          {
            title: 'Actors Equity',
            url: 'https://actorsequity.org/',
            why: 'The US actors\' union. Contract standards, audition listings, and health-and-safety rules that working stage actors navigate daily.',
          },
        ],
        primarySources: [
          {
            title: 'Hamlet\'s advice to the players',
            url: 'https://www.folger.edu/explore/shakespeares-works/hamlet/read/3/2/',
            why: 'Shakespeare\'s own instructions to actors, Act 3 Scene 2. Still the best short acting essay in the English language.',
          },
        ],
      },

      seeAlso: ['directing', 'shakespeare', 'narrative', 'poetics'],
      prereqs: [],
      leadsTo: ['directing'],

      chapterActivity: 'A Sunday-afternoon "scene study" circle at the HB Studio in the West Village — members bring two pages of a play and work each other\'s scenes for the afternoon.',

      sources: [
        'https://en.wikipedia.org/wiki/Stanislavski%27s_system',
        'https://www.britannica.com/art/Method-acting',
        'https://www.britannica.com/biography/Konstantin-Stanislavsky',
      ],
      verifiedAt: '2026-04-23',
    },

    directing: {
      id: 'directing',
      name: 'Directing',
      level: 'Advanced',
      dek: 'Shaping the whole — casting, rehearsing, staging, and holding every choice to the same spine of meaning.',
      readTime: '14 min',

      sections: ['The director invented late', 'Reading the play', 'Casting and the tablework', 'Blocking — the director\'s handwriting', 'The room and the show'],
      body: [
        { type: 'lead', text: 'Before 1874, theaters had stage managers. After 1874, they had directors. That year the Duke of Saxe-Meiningen brought his ensemble to Berlin with a production of Julius Caesar in which every crowd member had a distinct character, every costume had been researched from paintings, and every piece of stage business had been rehearsed with the same care as the verse. The production was a sensation; the idea — that a single imagination should shape every element of a production — became the modern theater. The director is not an ancient role. It is a recent invention, and still a contested one.' },
        { type: 'h2', text: 'The director invented late' },
        { type: 'p', text: 'The great actor-managers of the English nineteenth century — Garrick, Kean, Irving — ran their own companies and performed the leading roles, and that was the model until the Meiningen Ensemble toured Europe. By 1905 Konstantin Stanislavski in Moscow and Max Reinhardt in Berlin were working as full-time directors. By 1920 the role was established. By 1950 every serious production had one. The director\'s job, as it settled, was to unify everything — casting, set, lighting, music, performance — around a single interpretation of the text. Elia Kazan called it "the controlling intelligence of the production." Peter Brook called it "holding the empty space."' },
        { type: 'h2', text: 'Reading the play' },
        { type: 'p', text: 'A director\'s first job is to read the play until they know what it is about. Not the plot — the meaning. Kazan, before rehearsing A Streetcar Named Desire, wrote long notes on what the play was "really" about: "the destruction of the last chivalrous civilization by the new barbarism." Every choice in rehearsal then served that spine. A director who begins rehearsal without that clarity ends up arbitrating performances instead of shaping one. Tablework — the first days of rehearsal spent sitting around a table reading the play aloud — is where that clarity is tested, among actors, out loud, in dialogue.' },
        { type: 'h2', text: 'Casting and the tablework' },
        { type: 'p', text: 'Casting is the largest single directorial decision. Elia Kazan liked to say that casting was eighty percent of directing; Harold Prince said ninety. The right actor for a role brings half the performance already. Around the table, the director reads the play with the cast, asks questions, challenges assumptions, listens. This is not a rehearsal; it is a parliament. A director who rushes tablework and gets into blocking on day two is a director who will relitigate the play in tech week. A director who lingers at the table risks boring the cast. The line between "enough" and "too much" is a professional instinct earned by doing it wrong twice.' },
        { type: 'h2', text: 'Blocking — the director\'s handwriting' },
        { type: 'p', text: 'Blocking is where actors stand and how they move through the space. Good blocking serves the story; bad blocking serves nothing. A character who crosses to the window when they decide to leave has made a visual argument. A character who stands still when they should have moved has drained the scene of a choice. Directors block intuitively (Mike Nichols famously said he blocked whole productions in thirty minutes and spent the rest of the time refining) or systematically (Peter Hall mapped the entire play on graph paper before day one). Both approaches work. What does not work is blocking on the fly, without thought, and hoping the actors will cover.' },
        { type: 'h2', text: 'The room and the show' },
        { type: 'p', text: 'The thing a great director protects is the room — the rehearsal atmosphere. Actors are asked to be vulnerable in public, in front of strangers, for weeks, on someone else\'s words. A director who mocks, humiliates, or picks favorites destroys the room, and the performance is flat on opening night. A director who holds the room — safe, focused, playful — gets performances no one knew they had in them. Elia Kazan, who was not a gentle man, nevertheless wrote that the director\'s most important quality was the ability to make an actor feel seen. The show the audience watches on opening night was built in that room, months before.' },
        { type: 'quote', text: 'I can take any empty space and call it a bare stage. A man walks across this empty space whilst someone else is watching him, and this is all that is needed for an act of theatre to be engaged.', cite: 'Peter Brook, The Empty Space (1968)' },
      ],

      keyTerms: ['the spine', 'tablework', 'blocking', 'casting', 'dramaturgy', 'the beat', 'the super-objective', 'tech week', 'sitzprobe', 'mise-en-scène', 'actor-director trust'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@nationaltheatre',
            title: 'National Theatre — platform talks with directors',
            channel: 'National Theatre',
            duration: 'variable',
            featured: true,
            why: 'Long-form NT conversations with directors — Sam Mendes, Marianne Elliott, Rufus Norris, Ivo van Hove — on specific productions. The best free director interviews online.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TheRoyalShakespeareCompany',
            title: 'Royal Shakespeare Company — directors in rehearsal',
            channel: 'Royal Shakespeare Company',
            duration: 'variable',
            featured: true,
            why: 'John Barton\'s Playing Shakespeare lectures, plus contemporary RSC rehearsal films. The best free window into how Shakespeare gets staged.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TheGuardian',
            title: 'The Guardian — theater-director interviews',
            channel: 'The Guardian',
            duration: 'variable',
            featured: true,
            why: 'The Guardian\'s long-form filmed interviews with working directors — Katie Mitchell, Simon McBurney, Yaël Farber, Indhu Rubasingham. Substantive and free.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ActorsStudio',
            title: 'Actors Studio interviews with directors',
            channel: 'Actors Studio',
            duration: 'variable',
            featured: false,
            why: 'James Lipton\'s filmed conversations with Mike Nichols, Sidney Lumet, and Elia Kazan on their direction processes. Master-class length.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@LaMAMAArchives',
            title: 'La MaMa ETC archive',
            channel: 'La MaMa Experimental Theatre Club',
            duration: 'variable',
            featured: false,
            why: 'The downtown New York experimental theater\'s archive holds Robert Wilson, Mabou Mines, and Richard Foreman rehearsal material — rarely-seen process footage.',
          },
        ],
        books: [
          {
            title: 'A Director Prepares',
            author: 'Anne Bogart',
            year: 2001,
            url: 'https://www.taylorfrancis.com/books/mono/10.4324/9780203131091/director-prepares-anne-bogart',
            why: 'The American SITI Company director\'s meditation on the director\'s craft. Written in seven essays, each on a single problem — stereotype, violence, memory.',
          },
          {
            title: 'The Empty Space',
            author: 'Peter Brook',
            year: 1968,
            url: 'https://archive.org/details/emptyspace0000broo',
            why: 'The English director\'s short masterpiece. Four chapters — Deadly, Holy, Rough, Immediate — that define modern theatrical thinking.',
          },
          {
            title: 'On Directing',
            author: 'Harold Clurman',
            year: 1972,
            url: 'https://archive.org/details/ondirecting00clur',
            why: 'The Group Theatre co-founder\'s practical and philosophical handbook. Clurman directed Arthur Miller, Clifford Odets, and Carson McCullers. A master\'s teaching.',
          },
          {
            title: 'Elia Kazan: A Life',
            author: 'Elia Kazan',
            year: 1988,
            url: 'https://archive.org/details/elia-kazan-a-life',
            why: 'Kazan\'s autobiography and an informal directing textbook. Includes his actual production notebooks for Streetcar, Death of a Salesman, and On the Waterfront.',
          },
          {
            title: 'Making a Play: A Practical Guide to Directing',
            author: 'Peter Hall',
            year: 1999,
            url: 'https://www.worldcat.org/title/making-an-exhibition-of-myself/oclc/42834900',
            why: 'Peter Hall ran the RSC and the National Theatre; his memoir-manual is the other half of a British directing education.',
          },
        ],
        articles: [
          {
            title: 'Theatre director',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Theatre_director',
            why: 'Good survey of the role\'s history and the major schools — Stanislavski, Brecht, Artaud, Grotowski, Brook.',
            year: null,
          },
          {
            title: 'Meiningen Ensemble',
            source: 'Britannica',
            url: 'https://www.britannica.com/topic/Meiningen-Players',
            why: 'Background on the Duke of Saxe-Meiningen\'s company — the production that invented the modern director.',
            year: null,
          },
          {
            title: 'Peter Brook',
            source: 'The Guardian',
            url: 'https://www.theguardian.com/stage/peter-brook',
            why: 'The paper\'s long-running coverage of Brook\'s career, with obituary features from 2022 that summarize his contribution.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Introduction to Directing',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/21m-710-script-analysis-spring-2005/',
            free: true,
            why: 'MIT\'s script-analysis course, the foundation of directing pedagogy. Syllabus, reading list, and assignment prompts free.',
          },
          {
            title: 'RSC Playing Shakespeare Workshops (free archive)',
            provider: 'Royal Shakespeare Company',
            url: 'https://www.rsc.org.uk/shakespeare-learning-zone',
            free: true,
            why: 'The RSC\'s learning zone — how the company rehearses and directs Shakespeare, with video, worksheets, and texts.',
          },
        ],
        tools: [
          {
            title: 'Dramatists Play Service',
            url: 'https://www.dramatists.com/',
            why: 'The standard US play-licensing house. Rights, scripts, production materials for nearly every modern American play.',
          },
          {
            title: 'Concord Theatricals',
            url: 'https://www.concordtheatricals.com/',
            why: 'The other major licensing house, with Samuel French\'s catalogue. Between Concord and Dramatists, most of the English-language rep lives here.',
          },
        ],
        primarySources: [
          {
            title: 'Elia Kazan\'s notebook for A Streetcar Named Desire (1947)',
            url: 'https://en.wikipedia.org/wiki/Elia_Kazan',
            why: 'The production notebook Kazan kept as he prepared Streetcar. An extraordinary primary document on how a director reads a play.',
          },
        ],
      },

      seeAlso: ['acting', 'shakespeare', 'shots', 'editing'],
      prereqs: ['acting'],
      leadsTo: [],

      chapterActivity: 'A monthly "director\'s table" at the Public Theater cafe — members bring a three-page scene they are staging or thinking about and workshop the director\'s notebook around coffee.',

      sources: [
        'https://en.wikipedia.org/wiki/Theatre_director',
        'https://www.britannica.com/topic/Meiningen-Players',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
