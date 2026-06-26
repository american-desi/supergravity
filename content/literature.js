// content/literature.js
// Batch: B04-humanities
// Last updated: 2026-04-22 by BATCH B04-humanities

window.CONTENT = window.CONTENT || {};
window.CONTENT.literature = {
  subjectId: 'literature',
  version: 1,
  lastUpdated: '2026-04-22',
  curator: 'BATCH B04-humanities',
  topics: {

    readclose: {
      id: 'readclose',
      name: 'Close Reading',
      level: 'Beginner',
      dek: 'The discipline of slowing down until the sentence gives up its meaning — the foundation of every other literary skill.',
      readTime: '10 min',

      sections: ['What close reading is for', 'The first pass', 'The second pass', 'What to do when you are stuck'],
      body: [
        { type: 'lead', text: 'In the 1920s, at Cambridge, a young don named I. A. Richards handed his students a stack of poems with no titles, no authors, no dates, and asked them to write down what they thought. The responses were uniformly confident and, when he revealed the poets\' names, frequently wrong. The experiment, published as Practical Criticism in 1929, founded modern close reading — the discipline of noticing what the page actually says before reaching for everything you know about it.' },
        { type: 'h2', text: 'Not every reading is a close reading' },
        { type: 'p', text: 'Most reading is extensive: we move through a novel for the story, through an essay for the argument, through a news piece for the information. Close reading slows to a crawl. It rereads the sentence. It notices the word that could have been chosen instead. It pays attention to rhythm, punctuation, sound, repetition, connotation. The goal is not to find a hidden meaning but to see the meaning the writer has put on the page and that a fast reader misses.' },
        { type: 'h2', text: 'A first pass: what does the sentence do?' },
        { type: 'p', text: 'Before any interpretation, describe. A reader might notice, in the first line of Pride and Prejudice — "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife" — that the sentence has the mock-gravity of a philosophical proposition, that "universally" is slightly too grand, that the comma before "must" slows the cadence just enough to ironize the claim. None of that requires knowing anything about Regency England. It requires reading the sentence twice.' },
        { type: 'h2', text: 'A second pass: what is the sentence not doing?' },
        { type: 'p', text: 'The second pass asks what the writer could have done and did not. Austen could have written "Every rich single man wants a wife." She wrote the other sentence. The difference — the inflated diction, the legalistic cadence, the invisible but audible ironic quote-marks around "universally" — is the writer\'s signature. Close readers train themselves to hear that signature in a paragraph, in a page, eventually in a sentence lifted at random from a thousand-page novel.' },
        { type: 'h2', text: 'Stuck? Change scale.' },
        { type: 'p', text: 'If a passage is not giving up its sense, change the scale of attention. Read the paragraph aloud; you will hear pauses the eye misses. Or zoom out: what does this passage do in the chapter, and what does that chapter do in the book? The two directions — narrower and wider — often rescue each other.' },
        { type: 'callout', text: 'A useful exercise: take a single paragraph from something you know well. Retype it. Then change one word. The act of re-entering the prose at typing speed will show you what you never saw at reading speed.' },
      ],

      keyTerms: ['diction', 'tone', 'syntax', 'connotation', 'ambiguity', 'irony', 'cadence'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@Nerdwriter1',
            title: 'Nerdwriter1 — close readings of sentences, paintings, and scenes (channel)',
            channel: 'Nerdwriter1',
            duration: 'variable',
            why: 'Evan Puschak\'s whole video-essay career is, in effect, close reading applied to the culture. The episodes on prose sentences are particularly useful models.',
          },
          {
            id: 'v3IeJATbMBA',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=v3IeJATbMBA',
            title: 'How to Read a Poem, with Mary Oliver',
            channel: 'OnBeing (Krista Tippett)',
            duration: 'variable',
            why: 'Mary Oliver talking about reading poetry slowly is worth more than a dozen handbooks. Pair with her short essay of the same title.',
          },
          {
            id: 'PUgLYsE2toM',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=PUgLYsE2toM',
            title: 'Reading Fiction: An Introduction (Yale English)',
            channel: 'Open Yale Courses',
            duration: 'variable',
            why: 'Introductory lecture for Yale\'s ENGL 300 — literary theory tethered to close reading of real texts.',
          },
        ],
        books: [
          {
            title: 'Practical Criticism',
            author: 'I. A. Richards',
            year: 1929,
            url: '',
            why: 'The book that founded close reading as a teaching practice. Richards\'s examples are now vintage, but the method is still current.',
          },
          {
            title: 'How to Read a Poem: And Fall in Love with Poetry',
            author: 'Edward Hirsch',
            year: 1999,
            url: '',
            why: 'A working poet\'s guide to slow reading. Concrete, un-academic, generous.',
          },
          {
            title: 'The Art of the Novel',
            author: 'Milan Kundera',
            year: 1986,
            url: '',
            why: 'Kundera reading the sentences of Cervantes, Sterne, and Kafka. The writer teaching how he reads.',
          },
        ],
        articles: [
          {
            title: 'Close reading',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Close_reading',
            why: 'Useful for the history of the term and the lineage from New Criticism forward.',
            year: null,
          },
          {
            title: 'How to Read Literature Like a Professor — an overview',
            source: 'The Atlantic',
            url: 'https://www.theatlantic.com/entertainment/archive/2014/02/how-to-read-literature-like-a-professor/283923/',
            why: 'Thomas C. Foster\'s classroom method, boiled down for general readers.',
            year: 2014,
          },
        ],
        courses: [
          {
            title: 'ENGL 300 — Introduction to Theory of Literature',
            provider: 'Open Yale Courses (Paul Fry)',
            url: 'https://oyc.yale.edu/english/engl-300',
            free: true,
            why: 'Paul Fry\'s Yale course, free. Theory grounded in close reading — the best single free resource on the subject.',
          },
        ],
      },

      seeAlso: ['narrative', 'poetics', 'rhetoric'],
      prereqs: [],
      leadsTo: ['poetics', 'rhetoric', 'narrative'],

      chapterActivity: 'A slow-reading night at the Strand\'s rare-book room once a month — one short story, one hour, eight readers, one line-by-line conversation.',

      sources: [
        'https://en.wikipedia.org/wiki/Close_reading',
        'https://oyc.yale.edu/english/engl-300',
      ],
      verifiedAt: '2026-04-22',
    },

    narrative: {
      id: 'narrative',
      name: 'Narrative & Plot',
      level: 'Beginner',
      dek: 'The oldest technology humans have — a sequence of events arranged so that a listener needs the next one.',
      readTime: '11 min',

      sections: ['Story is not plot', 'Character is a pattern of choice', 'The shapes narratives take', 'Why we need them'],
      body: [
        { type: 'lead', text: 'E. M. Forster, lecturing at Cambridge in 1927, drew the sharpest line anyone has drawn in narrative theory. "The king died and then the queen died" is a story — two events in sequence. "The king died and then the queen died of grief" is a plot — events arranged so that one causes the next. Ninety years of screenwriting manuals are a footnote to that distinction.' },
        { type: 'h2', text: 'Plot is what holds the reader' },
        { type: 'p', text: 'A plot is a chain of causes and consequences, each link pulling the reader to the next. When the chain breaks — a scene that does not need to be there, a development that arrives without setup — the reader notices, even if they cannot say why. The test is simple: remove the scene and read the book again. If the later pages are the same, the scene was a story, not a plot. Forster\'s queen has done her work. The first queen has not.' },
        { type: 'h2', text: 'Character: a pattern of choice under pressure' },
        { type: 'p', text: 'Character in narrative is not a description; it is a record of choices. We know Odysseus from what he decides when he hears the Sirens. We know Elizabeth Bennet from what she decides when Darcy proposes. We know Hamlet, painfully, from what he cannot decide. Watch how a writer forces her characters into moments of pressure, then watch what they do: that is where character lives.' },
        { type: 'h2', text: 'Shapes' },
        { type: 'p', text: 'The three-act structure, the five-act tragedy, the Freytag pyramid, the monomyth, the novella\'s single-arc compression, the novel\'s multi-line braid — these are inherited shapes, not rules. Kurt Vonnegut once drew the shapes of eight famous stories on a chalkboard as rising and falling lines. The lecture is on YouTube and worth watching once. The shapes are useful the way a sonnet\'s fourteen lines are useful: they structure a problem that might otherwise sprawl.' },
        { type: 'h2', text: 'Why narrative is not optional' },
        { type: 'p', text: 'Jonathan Gottschall called humans "the storytelling animal," and the data bear him out. Children make narratives before they make sentences. Dreams are narratives. Memory is narrative. When neuroscientists disrupt the brain\'s narrative-construction networks, the patient\'s sense of self also disrupts. Whatever else a novelist is doing, she is exercising a cognitive faculty that evolved because narratives are how we model futures.' },
        { type: 'quote', text: 'We tell ourselves stories in order to live.', cite: 'Joan Didion, The White Album' },
      ],

      keyTerms: ['plot', 'story', 'character', 'point of view', 'exposition', 'climax', 'denouement', 'narrator'],

      resources: {
        videos: [
          {
            id: 'oP3c1h8v2ZQ',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=oP3c1h8v2ZQ',
            title: 'Kurt Vonnegut, The Shapes of Stories',
            channel: 'David Comberg / archival',
            duration: '4:36',
            why: 'Vonnegut\'s famous four-minute blackboard lecture. Every beginning writer should see it once.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@LessonsfromtheScreenplay',
            title: 'Lessons from the Screenplay (channel)',
            channel: 'Lessons from the Screenplay',
            duration: 'variable',
            why: 'Michael Tucker\'s close readings of film screenplays — plot structure, character choice, scene mechanics — are the best free writing course online.',
          },
          {
            id: 'EPm0ybvyGrM',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=EPm0ybvyGrM',
            title: 'The Hero\'s Journey (Crash Course Mythology #25)',
            channel: 'CrashCourse',
            duration: '12:32',
            why: 'Mike Rugnetta on the Campbellian monomyth, with honest caveats about where it fits and does not.',
          },
        ],
        books: [
          {
            title: 'Aspects of the Novel',
            author: 'E. M. Forster',
            year: 1927,
            url: '',
            why: 'The Cambridge lectures on character, plot, fantasy, prophecy. Eighty pages, irreplaceable.',
          },
          {
            title: 'Story: Substance, Structure, Style, and the Principles of Screenwriting',
            author: 'Robert McKee',
            year: 1997,
            url: '',
            why: 'Screenwriters\' bible, but the principles about scene construction transfer to any narrative medium.',
          },
          {
            title: 'The Storytelling Animal: How Stories Make Us Human',
            author: 'Jonathan Gottschall',
            year: 2012,
            url: '',
            why: 'Cognitive science of narrative — why our brains are wired for plot. A useful contemporary complement to Forster.',
          },
        ],
        articles: [
          {
            title: 'Narrative',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Narrative',
            why: 'Overview of the term across literature, film, history, and cognitive science.',
            year: null,
          },
          {
            title: 'Plot (narrative)',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Plot_(narrative)',
            why: 'Entry covering Aristotle, Freytag, three-act, and contemporary screenwriting models.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'The Modern and the Postmodern',
            provider: 'Coursera (Wesleyan, Michael S. Roth)',
            url: 'https://www.coursera.org/learn/modern-postmodern-1',
            free: true,
            why: 'Wesleyan\'s free course traces narrative technique from Kant to Calvino. Good for serious readers.',
          },
        ],
      },

      seeAlso: ['readclose', 'poetics', 'novel'],
      prereqs: ['readclose'],
      leadsTo: ['novel', 'shakespeare', 'poetics'],

      chapterActivity: 'A monthly short-story reading group at the Center for Fiction in Fort Greene, where members rotate in a single story to dissect each month.',

      sources: [
        'https://en.wikipedia.org/wiki/Narrative',
        'https://en.wikipedia.org/wiki/Plot_(narrative)',
      ],
      verifiedAt: '2026-04-22',
    },

    poetics: {
      id: 'poetics',
      name: 'Poetics & Meter',
      level: 'Intermediate',
      dek: 'Meter, image, line — the machinery that lets a poem carry more than a paragraph can.',
      readTime: '12 min',

      sections: ['The line, the pause, the breath', 'Meter in English', 'Image', 'Why the rules still matter'],
      body: [
        { type: 'lead', text: 'In the first chapter of his Poetics, Aristotle observed that rhythm, language, and melody together make the raw material of poetry. Twenty-three centuries later, every working poet from Seamus Heaney to Tracy K. Smith still writes inside the same three categories — rhythm, sound, image — and makes decisions about each of them, line by line.' },
        { type: 'h2', text: 'The line is not the sentence' },
        { type: 'p', text: 'A poem is the only form of literary writing in which the line is a unit of meaning. Where a line breaks, a pause opens. A sentence carried over two lines means something different from the same sentence ended on one — the break can emphasize, undercut, hang a word in the air. When you read a poem, the first thing to notice is where the lines end. That is half the poet\'s art.' },
        { type: 'h2', text: 'Meter in English' },
        { type: 'p', text: 'English is a stress-timed language, which means its natural rhythm comes from alternations of heavy and light syllables, not the number of syllables. The five-beat iambic pentameter — da-DUM da-DUM da-DUM da-DUM da-DUM — is the closest meter to ordinary English speech, and it is what Shakespeare, Milton, and almost every English poet of consequence has written in. You can scan a Shakespeare line on your fingers; it takes five minutes to learn and repays every year of reading after.' },
        { type: 'h2', text: 'Image and figure' },
        { type: 'p', text: 'A metaphor is not decoration. When Shakespeare writes, in Sonnet 73, "Bare ruined choirs where late the sweet birds sang," the word choirs — the benches in a cathedral — and the autumn branches — which look like those benches — and the birds that used to sit on them — become the same thing. That fusion is what a poem does that a paragraph cannot: compress two things into one without losing either.' },
        { type: 'h2', text: 'Why the rules matter even when broken' },
        { type: 'p', text: 'Free verse is not formless; it is form that has absorbed meter into its bones. Walt Whitman broke the pentameter deliberately; T. S. Eliot worked against it, beat by beat. To read modernist or contemporary poetry well, you need to hear the meter it is departing from. Learn to scan five lines of Shakespeare, and Elizabeth Bishop\'s loosened pentameters will suddenly sound like what they are: a long conversation with the English line.' },
        { type: 'quote', text: 'Poetry is what gets lost in translation.', cite: 'Robert Frost, Paris Review interview, 1960' },
      ],

      keyTerms: ['iambic pentameter', 'meter', 'scansion', 'line break', 'enjambment', 'metaphor', 'image', 'free verse'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@PoetryFoundation',
            title: 'Poetry Foundation — Essential American Poets (channel)',
            channel: 'Poetry Foundation',
            duration: 'variable',
            why: 'Archival recordings of poets reading their own work — the first half of a poem\'s life, before print.',
          },
          {
            id: 'bnp_DK-kiXs',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=bnp_DK-kiXs',
            title: 'Seamus Heaney reads "Digging"',
            channel: 'Seamus Heaney reading (RTÉ)',
            duration: '1:45',
            why: 'The Irish Nobel laureate reads his first famous poem. Hear the alliteration before you see it.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@92ndStreetY',
            title: '92nd Street Y — Poetry Center readings',
            channel: '92nd Street Y',
            duration: 'variable',
            why: 'The 92nd Street Y Poetry Center has hosted nearly every major poet of the last seventy years. The archive is a treasure.',
          },
        ],
        books: [
          {
            title: 'The Sounds of Poetry: A Brief Guide',
            author: 'Robert Pinsky',
            year: 1998,
            url: '',
            why: 'Former US Poet Laureate, ninety pages, all practical. If you read one book on meter, read this one.',
          },
          {
            title: 'A Poet\'s Glossary',
            author: 'Edward Hirsch',
            year: 2014,
            url: '',
            why: 'An alphabetical reference — terza rima, villanelle, caesura — each entry an essay. A lifetime\'s reference in one volume.',
          },
          {
            title: 'The Norton Anthology of Poetry',
            author: 'Margaret Ferguson et al. (editors)',
            year: 1970,
            url: '',
            why: 'The standard canonical anthology in English. Current editions go from Beowulf to contemporary, with careful annotation.',
          },
        ],
        articles: [
          {
            title: 'Meter (poetry)',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Meter_(poetry)',
            why: 'Clear entry covering classical feet, English stress-timing, and modern variants.',
            year: null,
          },
          {
            title: 'Poetry Foundation — Learn',
            source: 'Poetry Foundation',
            url: 'https://www.poetryfoundation.org/learn',
            why: 'Free articles on form, meter, close reading, and the lives of specific poets. The best free poetry resource online.',
            year: null,
          },
          {
            title: 'Academy of American Poets — Poetic Forms',
            source: 'poets.org',
            url: 'https://poets.org/glossary',
            why: 'Browsable glossary of forms and terms with linked example poems.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Modern & Contemporary American Poetry (ModPo)',
            provider: 'Coursera (University of Pennsylvania, Al Filreis)',
            url: 'https://www.coursera.org/learn/modpo',
            free: true,
            why: 'Al Filreis\'s legendary free course — thirty thousand adults have taken it. The best online poetry classroom there is.',
          },
        ],
        primarySources: [
          {
            title: 'Aristotle\'s Poetics',
            url: 'https://www.gutenberg.org/ebooks/1974',
            why: 'The founding treatise on dramatic and poetic form. Short; still current.',
          },
        ],
      },

      seeAlso: ['readclose', 'shakespeare', 'epic'],
      prereqs: ['readclose'],
      leadsTo: ['shakespeare', 'epic'],

      chapterActivity: 'Seasonal poetry nights at Poets House in Battery Park City — open-mic reading and one guest critic per month.',

      sources: [
        'https://en.wikipedia.org/wiki/Meter_(poetry)',
        'https://www.poetryfoundation.org/learn',
        'https://poets.org/',
      ],
      verifiedAt: '2026-04-22',
    },

    rhetoric: {
      id: 'rhetoric',
      name: 'Rhetoric',
      level: 'Intermediate',
      dek: 'The systematic study of how language moves people — a discipline twenty-four centuries old and still running every election.',
      readTime: '12 min',

      sections: ['The Greek invention', 'Ethos, pathos, logos', 'Figures', 'The modern afterlife'],
      body: [
        { type: 'lead', text: 'In a democratic assembly at Athens in the fifth century BCE, ordinary citizens stood up in turn and argued for or against a proposed law. A bad speaker lost the vote. A good speaker could get a war voted for. Rhetoric — the systematic study of persuasion — was invented because there was, suddenly, a political reason to get very good very fast.' },
        { type: 'h2', text: 'The discipline\'s Greek inheritance' },
        { type: 'p', text: 'Aristotle\'s Rhetoric, written around 350 BCE, still organizes most of what is said about persuasion today. A speech, he said, has three possible appeals: to the character of the speaker (ethos), to the emotion of the audience (pathos), and to the argument itself (logos). A good speaker balances all three. A speech made of pure logos is a legal brief; of pure pathos, a tear-jerker; of pure ethos, a testimonial. The art is the mix.' },
        { type: 'h2', text: 'Ethos, pathos, logos in the wild' },
        { type: 'p', text: 'Every political speech you have ever heard rests on the Aristotelian tripod. When Barack Obama opened his 2004 Democratic Convention speech with his biography, he was building ethos. When he invoked hope, he was reaching for pathos. When he enumerated policy commitments, he was offering logos. Most arguments that fail fail because one leg of the tripod is missing.' },
        { type: 'h2', text: 'Figures: the named moves' },
        { type: 'p', text: 'Classical rhetoric catalogued hundreds of figures — specific repeatable arrangements of words. Anaphora is the repetition of a word at the start of successive clauses ("We shall fight on the beaches, we shall fight on the landing grounds…"). Chiasmus reverses the order of a phrase in its successor ("Ask not what your country can do for you — ask what you can do for your country."). Zeugma yokes two unlike objects with one verb. Each figure is a compressed technology for emphasis. Learn twenty and you will hear them working in any speech.' },
        { type: 'h2', text: 'Why rhetoric is back' },
        { type: 'p', text: 'In the age of social media, rhetoric has not vanished; it has gotten faster and meaner. The hundred-and-forty-character insult is a rhetorical figure (brachylogia). The viral ad is a compressed Ciceronian oration. A citizen who has never read Aristotle is still persuaded — or not — by the moves Aristotle named. Rhetoric is, at minimum, a reading skill: the faculty of hearing the argument that the sentence is making at the level of sound and structure.' },
      ],

      keyTerms: ['ethos', 'pathos', 'logos', 'anaphora', 'chiasmus', 'metaphor', 'enthymeme', 'sophistry'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@voxdotcom',
            title: 'Vox — "The Rhetoric of..." series',
            channel: 'Vox',
            duration: 'variable',
            why: 'Vox has produced multiple close readings of presidential rhetoric, stump speeches, and viral ads. Good application.',
          },
          {
            id: 'NPhNYg5RI-I',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=NPhNYg5RI-I',
            title: 'How to use rhetoric to get what you want (Camille A. Langston, TED-Ed)',
            channel: 'TED-Ed',
            duration: '4:30',
            why: 'A tidy four-minute recap of ethos/pathos/logos, with modern examples.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=yGMG6pjrNbE',
            title: 'I Have a Dream (Martin Luther King Jr., August 28, 1963)',
            channel: 'archival',
            duration: '17:00',
            why: 'The twentieth century\'s most-studied piece of American rhetoric. Watch once for the argument, once for the figures.',
          },
        ],
        books: [
          {
            title: 'Rhetoric',
            author: 'Aristotle',
            year: -350,
            url: 'https://www.gutenberg.org/ebooks/6762',
            why: 'The founding treatise. Three short books; read I.2 at minimum for the ethos/pathos/logos distinction.',
          },
          {
            title: 'Classical Rhetoric for the Modern Student',
            author: 'Edward P. J. Corbett and Robert J. Connors',
            year: 1965,
            url: '',
            why: 'The standard textbook — clear, modern examples, every figure you need to know.',
          },
          {
            title: 'Thank You for Arguing',
            author: 'Jay Heinrichs',
            year: 2007,
            url: '',
            why: 'Popular, funny introduction that manages to be both serious and accessible. A good gateway book.',
          },
        ],
        articles: [
          {
            title: 'Rhetoric',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/aristotle-rhetoric/',
            why: 'Christof Rapp on Aristotle\'s treatise. The best online introduction.',
            year: 2023,
          },
          {
            title: 'Silva Rhetoricae (The Forest of Rhetoric)',
            source: 'Brigham Young University',
            url: 'http://rhetoric.byu.edu/',
            why: 'Gideon Burton\'s encyclopedia of every rhetorical figure, each with definition and example. An indispensable reference.',
            year: null,
          },
          {
            title: 'Rhetoric',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Rhetoric',
            why: 'Good overview of the discipline\'s history from Greek sophists to modern communication theory.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'English Composition I (Duke)',
            provider: 'Coursera (Duke University)',
            url: 'https://www.coursera.org/learn/english-composition',
            free: true,
            why: 'Free course on argumentative writing that explicitly uses the rhetorical triangle. A good companion to Heinrichs.',
          },
        ],
        primarySources: [
          {
            title: 'Pericles\'s Funeral Oration (Thucydides II.34-46)',
            url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0200%3Abook%3D2%3Achapter%3D34',
            why: 'The first great speech of the Western tradition, in the Perseus parallel text.',
          },
          {
            title: 'Lincoln\'s Gettysburg Address (1863)',
            url: 'https://www.loc.gov/exhibits/gettysburg-address/',
            why: 'Library of Congress\'s scholarly edition with multiple drafts. Two-minute speech, infinite close reading.',
          },
        ],
      },

      seeAlso: ['readclose', 'greeks', 'narrative'],
      prereqs: ['readclose'],
      leadsTo: ['narrative', 'shakespeare'],

      chapterActivity: 'A quarterly evening of great speeches read aloud in Cooper Union\'s Great Hall lobby, the room where Lincoln launched his 1860 campaign.',

      sources: [
        'https://plato.stanford.edu/entries/aristotle-rhetoric/',
        'http://rhetoric.byu.edu/',
        'https://en.wikipedia.org/wiki/Rhetoric',
      ],
      verifiedAt: '2026-04-22',
    },

    epic: {
      id: 'epic',
      name: 'Ancient Epic',
      level: 'Intermediate',
      dek: 'Long narrative poems composed in meter, usually about a hero, sometimes about a city, always about a world.',
      readTime: '13 min',

      sections: ['Gilgamesh and the beginning', 'Homer', 'Virgil\'s Roman answer', 'Why they still read'],
      body: [
        { type: 'lead', text: 'Sometime around 700 BCE, on an island in the eastern Aegean, a blind singer — or several singers working in the same tradition, we are not sure — stitched together inherited oral poems into two long narratives. One follows a ten-year siege of a city; the other, a ten-year journey home. The Iliad and the Odyssey were passed down by rhapsodes, written down in Athens around 525 BCE, and have not been out of print for twenty-five centuries.' },
        { type: 'h2', text: 'Before Homer' },
        { type: 'p', text: 'The oldest long poem in the world is the Epic of Gilgamesh, written in Sumerian around 2100 BCE and consolidated in Akkadian around 1200. A king grieves his dead friend Enkidu and sets out across the earth to find a cure for death. He fails; the poem ends with him contemplating the walls of his city. Three and a half thousand years old, Gilgamesh feels astonishingly modern — a grown man\'s reckoning with mortality.' },
        { type: 'h2', text: 'Homer\'s two poems' },
        { type: 'p', text: 'The Iliad is the more compressed of Homer\'s two. It covers only six weeks of the Trojan War, focused on the wrath of Achilles after a dispute with Agamemnon, and ends before the famous wooden horse that the movie audiences expect. The Odyssey is broader: Odysseus\'s ten-year voyage home, with shipwrecks, sirens, and a finale of domestic revenge in his own hall. Between them, the two poems became the textbook of Greek civilization — every educated Greek could quote them, and a Greek child learned letters by copying them.' },
        { type: 'h2', text: 'Virgil and the Roman answer' },
        { type: 'p', text: 'In the 20s BCE, commissioned by the emperor Augustus, the Roman poet Virgil wrote the Aeneid — twelve books, in Latin hexameters, on the Trojan prince Aeneas\'s voyage from burning Troy to the founding of Rome. Virgil\'s poem is more self-conscious than Homer\'s; it knows it is founding an empire. Dante in the fourteenth century picked Virgil as his guide through hell and purgatory for exactly that reason: Virgil had seen farther into the consequences of history than any other pagan.' },
        { type: 'h2', text: 'Why any modern reader should still care' },
        { type: 'p', text: 'The ancient epics invent, in sequence, the psychology of the grieving man (Gilgamesh), the physics of rage (the Iliad), the architecture of longing (the Odyssey), and the politics of sacrifice (the Aeneid). Read in the right translations — Emily Wilson\'s Odyssey, Robert Fagles\'s Iliad, Seamus Heaney\'s or Sarah Ruden\'s Aeneid, Sophus Helle\'s Gilgamesh — they are alive on the page. A literary culture that has not read them is walking around its own library with its eyes closed.' },
      ],

      keyTerms: ['epic', 'hexameter', 'Homer', 'Virgil', 'Gilgamesh', 'in medias res', 'epic simile', 'Muse'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=tMX31mtGhdQ',
            title: 'Why Should You Read the Iliad? (Jill Dash, TED-Ed)',
            channel: 'TED-Ed',
            duration: '4:40',
            why: 'Short, good orientation to Homer\'s first poem for a reader about to open it.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=8Z9FQxcCAZ0',
            title: 'Why Should You Read the Odyssey? (Jill Dash, TED-Ed)',
            channel: 'TED-Ed',
            duration: '4:13',
            why: 'The companion video.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://oyc.yale.edu/classics/clcv-205',
            title: 'Introduction to Ancient Greek History — lectures on Homer',
            channel: 'Open Yale Courses (Donald Kagan)',
            duration: 'variable',
            why: 'Kagan\'s opening lectures discuss Homer as history and literature at once. Free.',
          },
        ],
        books: [
          {
            title: 'The Odyssey (tr. Emily Wilson)',
            author: 'Homer',
            year: -700,
            url: 'https://www.gutenberg.org/ebooks/1727',
            why: 'Wilson\'s 2017 translation is the current best. The Samuel Butler translation on Gutenberg is serviceable as a free alternative.',
          },
          {
            title: 'The Iliad (tr. Robert Fagles)',
            author: 'Homer',
            year: -700,
            url: 'https://www.gutenberg.org/ebooks/2199',
            why: 'Fagles\'s Penguin translation is the contemporary standard; Butler\'s Gutenberg text is the free fallback.',
          },
          {
            title: 'The Aeneid (tr. Sarah Ruden)',
            author: 'Virgil',
            year: -19,
            url: 'https://www.gutenberg.org/ebooks/228',
            why: 'Ruden\'s 2008 translation is spare, fast, and faithful. Dryden\'s great 1697 translation is on Gutenberg if you want the free version.',
          },
        ],
        articles: [
          {
            title: 'Epic poetry',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Epic_poetry',
            why: 'Good comparative overview — Mesopotamian, Greek, Roman, Indian, medieval.',
            year: null,
          },
          {
            title: 'Homer',
            source: 'Stanford Encyclopedia of Philosophy / Perseus',
            url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.04.0059',
            why: 'Perseus\'s Homer page — parallel Greek and English, with scholarly apparatus.',
            year: null,
          },
          {
            title: 'The Epic of Gilgamesh',
            source: 'World History Encyclopedia',
            url: 'https://www.worldhistory.org/gilgamesh/',
            why: 'Short, well-illustrated entry with a careful survey of the manuscript tradition.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'The Ancient Greek Hero',
            provider: 'edX (Harvard, Gregory Nagy)',
            url: 'https://www.edx.org/learn/humanities/harvard-university-the-ancient-greek-hero',
            free: true,
            why: 'Gregory Nagy\'s free Harvard course — the deepest online reading of Homer. Run with the companion free book.',
          },
        ],
        primarySources: [
          {
            title: 'The Aeneid (tr. John Dryden, 1697)',
            url: 'https://www.gutenberg.org/ebooks/228',
            why: 'Dryden\'s verse translation on Gutenberg — the classic English version.',
          },
          {
            title: 'The Epic of Gilgamesh (Wikipedia portal with translation links)',
            url: 'https://en.wikipedia.org/wiki/Epic_of_Gilgamesh',
            why: 'Wikipedia\'s detailed entry links to the Andrew George and N. K. Sandars editions and to scholarly facsimiles of the standard Akkadian text.',
          },
        ],
      },

      seeAlso: ['mesopotamia', 'greece', 'rome', 'poetics'],
      prereqs: ['readclose'],
      leadsTo: ['novel', 'shakespeare'],

      chapterActivity: 'A summer reading series on the Great Lawn in Central Park — one book of the Odyssey per weekend in August, cushions provided.',

      sources: [
        'https://en.wikipedia.org/wiki/Epic_poetry',
        'https://www.worldhistory.org/gilgamesh/',
      ],
      verifiedAt: '2026-04-22',
    },

    shakespeare: {
      id: 'shakespeare',
      name: 'Shakespeare',
      level: 'Intermediate',
      dek: 'Thirty-seven plays and one hundred and fifty-four sonnets that have outlived four centuries of changing tastes and remain unavoidable.',
      readTime: '13 min',

      sections: ['The man, briefly', 'The plays and how they work', 'The poetry', 'Why you cannot escape him'],
      body: [
        { type: 'lead', text: 'William Shakespeare died in 1616 leaving his second-best bed to his wife, no manuscript of any play in his own hand, and — as we now know — the most-performed, most-translated, most-quoted body of work in English. We have the texts because two friends in 1623 gathered his manuscripts and had them printed in a folio. Without those two men, Hamlet would be a rumor.' },
        { type: 'h2', text: 'A brief life in outline' },
        { type: 'p', text: 'Shakespeare was born in Stratford-upon-Avon in 1564, the son of a glover. At eighteen he married Anne Hathaway, eight years older, who was pregnant with their daughter. By his late twenties he was in London, writing plays and acting, a shareholder in the Lord Chamberlain\'s Men (later the King\'s Men). He retired to Stratford wealthy and died on his fifty-second birthday. The wild biographical speculation that surrounds him survives mostly on the lack of letters; he was a working professional.' },
        { type: 'h2', text: 'The plays' },
        { type: 'p', text: 'Conventionally sorted into comedies, histories, tragedies, and romances, Shakespeare\'s plays reach their first full confidence in the late 1590s (Henry IV, A Midsummer Night\'s Dream, Romeo and Juliet), hit a peak of tragic writing between 1599 and 1608 (Hamlet, Othello, King Lear, Macbeth), and end with the late romances (The Winter\'s Tale, The Tempest). They are written in a mixture of prose — used for low characters, casual speech, comic patter — and iambic pentameter — used for high characters, passion, philosophy. The effect on stage is that a character\'s mode of speech is itself a commentary on their moral weight.' },
        { type: 'h2', text: 'The sonnets' },
        { type: 'p', text: 'The 154 sonnets published in 1609 — some addressed to a "fair youth," some to a "dark lady" — contain the densest single body of lyric poetry in the language. They are fourteen-line arguments: three four-line quatrains set a problem, a closing couplet turns the key. Learn one by heart; you will understand half of what English poetry has been doing since.' },
        { type: 'h2', text: 'Why he is still there' },
        { type: 'p', text: 'Shakespeare invented, or stabilized in English, an astonishing number of words and phrases still in use: swagger, lonely, bedroom, eyeball, "a foregone conclusion," "the be-all and end-all," "wild-goose chase." He invented the modern soliloquy — a character thinking on stage, out loud — which is the basic technology of the psychological novel two centuries later. And his plays are open enough that every generation finds their argument in them. A 1950s Lear, a 1980s Hamlet, a 2020s Twelfth Night are all recognizably the same play doing new work.' },
        { type: 'quote', text: 'He was not of an age, but for all time.', cite: 'Ben Jonson, First Folio, 1623' },
      ],

      keyTerms: ['First Folio', 'iambic pentameter', 'soliloquy', 'Globe Theatre', 'sonnet', 'Quarto', 'tragedy', 'romance'],

      resources: {
        videos: [
          {
            id: null,
            source: 'other',
            url: 'https://www.folger.edu/',
            title: 'Folger Shakespeare Library video lectures',
            channel: 'Folger Shakespeare Library',
            duration: 'variable',
            why: 'The Folger\'s online video series includes full filmed productions, scholars\' close readings, and actors\' workshops. The single best free Shakespeare resource.',
          },
          {
            id: 'XVyiAfZ2hbU',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=XVyiAfZ2hbU',
            title: 'Hamlet (Almereyda, trailer/excerpts)',
            channel: 'archival',
            duration: 'variable',
            why: 'Contemporary adaptations are a way in; browse Crash Course Literature for Mike Rugnetta and John Green\'s Shakespeare episodes.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@pbs',
            title: 'PBS — Shakespeare Uncovered (series landing)',
            channel: 'PBS',
            duration: 'multiple 60:00',
            why: 'One-hour specials on individual plays with actors and directors who have staged them.',
          },
        ],
        books: [
          {
            title: 'The Complete Works of Shakespeare',
            author: 'William Shakespeare',
            year: 1623,
            url: 'https://www.folger.edu/explore/shakespeares-works/',
            why: 'The Folger editions, now fully free online, are the modern-standard texts with notes on every page.',
          },
          {
            title: 'Shakespeare: The Invention of the Human',
            author: 'Harold Bloom',
            year: 1998,
            url: '',
            why: 'Bloom\'s mammoth, opinionated, sometimes infuriating close readings of each play. Not a textbook; an argument.',
          },
          {
            title: 'Will in the World',
            author: 'Stephen Greenblatt',
            year: 2004,
            url: '',
            why: 'The best modern biography of Shakespeare, written with a novelist\'s pace by a great historicist critic.',
          },
        ],
        articles: [
          {
            title: 'William Shakespeare',
            source: 'Britannica',
            url: 'https://www.britannica.com/biography/William-Shakespeare',
            why: 'Thorough editorial biography with careful attention to the documentary evidence.',
            year: null,
          },
          {
            title: 'Shakespeare\'s Life',
            source: 'Folger Shakespeare Library',
            url: 'https://www.folger.edu/explore/shakespeares-life/',
            why: 'The Folger\'s own summary, with images of the primary documents.',
            year: null,
          },
          {
            title: 'First Folio',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/First_Folio',
            why: 'Detailed article on the 1623 collected edition and its textual history.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Shakespeare After All: The Later Plays',
            provider: 'Harvard (Marjorie Garber, free lectures)',
            url: 'https://www.youtube.com/@harvard',
            free: true,
            why: 'Garber\'s Harvard course, partially available in recorded lectures. Pair with her book Shakespeare After All.',
          },
          {
            title: 'Shakespeare: On the Page and in Performance',
            provider: 'Wellesley (Yu Jin Ko, edX)',
            url: 'https://www.edx.org/',
            free: true,
            why: 'Free online Shakespeare course that pairs reading with performance clips.',
          },
        ],
        primarySources: [
          {
            title: 'First Folio (Folger Digital Image Collection)',
            url: 'https://luna.folger.edu/luna/servlet/Folger1~6~6',
            why: 'High-resolution scans of the 1623 First Folio — you can read the original typesetting.',
          },
          {
            title: 'The Sonnets (Folger Shakespeare)',
            url: 'https://www.folger.edu/explore/shakespeares-works/shakespeares-sonnets/',
            why: 'The Folger\'s annotated Sonnets online. Read #18, #29, #73, #116, #130 first.',
          },
        ],
      },

      seeAlso: ['poetics', 'rhetoric', 'renaissance'],
      prereqs: ['readclose', 'poetics'],
      leadsTo: ['novel', 'world_lit'],

      chapterActivity: 'Annual pilgrimage to Shakespeare in the Park at the Delacorte Theater in the summer, plus a winter Sonnets-reading night at the Morgan Library.',

      sources: [
        'https://www.britannica.com/biography/William-Shakespeare',
        'https://www.folger.edu/',
        'https://en.wikipedia.org/wiki/First_Folio',
      ],
      verifiedAt: '2026-04-22',
    },

    novel: {
      id: 'novel',
      name: 'The Novel',
      level: 'Intermediate',
      dek: 'A four-hundred-year-old form that has outlived its own obituary at least three times, and now spans every continent.',
      readTime: '13 min',

      sections: ['The form\'s origins', 'The nineteenth-century high noon', 'Modernism', 'The novel now'],
      body: [
        { type: 'lead', text: 'In 1605, an out-of-work Spanish soldier in his late fifties published a comic story about a man who had read too many chivalric romances and decided to become a knight. Don Quixote is usually called the first modern novel — long enough to digest a world, psychologically granular, ironic about its own form. The form itself would go on to eat every other genre.' },
        { type: 'h2', text: 'Before Cervantes' },
        { type: 'p', text: 'Long prose fictions existed before 1605 — Greek and Latin romances, the medieval Tale of Genji (Murasaki Shikibu, c. 1010), picaresque Spanish anti-romances. What Cervantes added was self-consciousness: Don Quixote quotes other novels, argues with his own genre, makes his characters realize they are in a book. That meta-fictional DNA runs through everything the form has done since.' },
        { type: 'h2', text: 'The nineteenth-century high noon' },
        { type: 'p', text: 'Between roughly 1815 and 1890, the novel reached a shape that most readers still take as the default: a third-person narrator, a large cast across several social layers, a marriage plot or a money plot or both, and enough length to let the reader live with the characters. Jane Austen, Balzac, Dickens, George Eliot, Tolstoy, Dostoevsky, Henry James, and Flaubert were all doing variations on the form at once. Eliot\'s Middlemarch (1871–72) is often named the best novel in English; Tolstoy\'s War and Peace (1869) is usually named the largest.' },
        { type: 'h2', text: 'Modernism and after' },
        { type: 'p', text: 'By 1900 the old form was beginning to feel too tidy. Henry James pushed into interior consciousness. Marcel Proust built a seven-volume meditation on time. James Joyce in Ulysses (1922) retold the Odyssey in one Dublin day, moving through stream-of-consciousness chapter by chapter. Virginia Woolf in To the Lighthouse did similar work in a quarter of the length. The omniscient narrator was questioned; the unreliable narrator became possible; the novel absorbed film technique, psychology, and whatever else was at hand.' },
        { type: 'h2', text: 'The form now' },
        { type: 'p', text: 'Readers sometimes talk about the novel\'s decline; the evidence is against them. The Latin American "boom" (García Márquez, Borges, Cortázar), the post-colonial novel (Achebe, Rushdie, Adichie, Ngũgĩ), Japanese and Korean contemporary fiction (Murakami, Han Kang), the global diaspora of literary English — the form in 2026 is larger, more various, and more globally distributed than at any point in its history. What Cervantes started is still going.' },
      ],

      keyTerms: ['novel', 'picaresque', 'realism', 'free indirect discourse', 'stream of consciousness', 'unreliable narrator', 'modernism', 'postcolonial'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@CrashCourse',
            title: 'Crash Course Literature (John Green)',
            channel: 'CrashCourse',
            duration: 'variable',
            why: 'Four seasons\' worth of close readings of canonical novels — Gatsby, Beloved, Slaughterhouse-Five, Things Fall Apart, and more. The orientation library.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@LRB',
            title: 'London Review of Books — lectures and conversations',
            channel: 'London Review of Books',
            duration: 'variable',
            why: 'The LRB\'s video archive of lectures and author conversations is an education in how working novelists talk about their form.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://oyc.yale.edu/english/engl-291',
            title: 'The American Novel Since 1945 (ENGL 291)',
            channel: 'Open Yale Courses (Amy Hungerford)',
            duration: 'variable',
            why: 'Amy Hungerford\'s Yale lectures, free. Pair with Cleanth Brooks\'s older but still brilliant lectures available in the same catalog.',
          },
        ],
        books: [
          {
            title: 'Don Quixote',
            author: 'Miguel de Cervantes',
            year: 1605,
            url: 'https://www.gutenberg.org/ebooks/996',
            why: 'The founding novel, in Edith Grossman\'s modern translation (or the Gutenberg Ormsby for free). Read Book I; Book II can wait.',
          },
          {
            title: 'Middlemarch',
            author: 'George Eliot',
            year: 1872,
            url: 'https://www.gutenberg.org/ebooks/145',
            why: 'Virginia Woolf called it "one of the few English novels written for grown-up people." Eight hundred pages, every one earned.',
          },
          {
            title: 'Things Fall Apart',
            author: 'Chinua Achebe',
            year: 1958,
            url: '',
            why: 'The novel that answered Conrad from the inside. The foundational work of African anglophone fiction and one of the most-read novels of the twentieth century.',
          },
        ],
        articles: [
          {
            title: 'Novel',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Novel',
            why: 'Long survey of the form, its history, and its national traditions.',
            year: null,
          },
          {
            title: 'The History of the Novel',
            source: 'Britannica',
            url: 'https://www.britannica.com/art/novel',
            why: 'Comprehensive editorial overview from the Byzantine romance to the present.',
            year: null,
          },
          {
            title: 'The Rise of the Novel',
            source: 'SEP — Aesthetics of the Novel',
            url: 'https://plato.stanford.edu/entries/fiction/',
            why: 'Peter Lamarque on the philosophy of fiction. The theoretical companion to Watt\'s historical book.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'ENGL 291 — The American Novel Since 1945',
            provider: 'Open Yale Courses',
            url: 'https://oyc.yale.edu/english/engl-291',
            free: true,
            why: 'Amy Hungerford\'s full course, free video and transcript. One of OYC\'s finest.',
          },
        ],
        primarySources: [
          {
            title: 'Jane Austen — Pride and Prejudice',
            url: 'https://www.gutenberg.org/ebooks/1342',
            why: 'The most-taught novel in English, free on Gutenberg. A masterclass in free indirect discourse.',
          },
        ],
      },

      seeAlso: ['readclose', 'narrative', 'world_lit', 'shakespeare'],
      prereqs: ['readclose', 'narrative'],
      leadsTo: ['world_lit'],

      chapterActivity: 'A monthly novel-reading group at Greenlight Bookstore in Fort Greene, working through one canonical long novel each season — Middlemarch for the fall.',

      sources: [
        'https://en.wikipedia.org/wiki/Novel',
        'https://www.britannica.com/art/novel',
        'https://oyc.yale.edu/english/engl-291',
      ],
      verifiedAt: '2026-04-22',
    },

    world_lit: {
      id: 'world_lit',
      name: 'World Literature',
      level: 'Advanced',
      dek: 'The literatures of the non-Anglophone world — what you have been missing, and where to start.',
      readTime: '13 min',

      sections: ['What "world literature" has come to mean', 'Four great traditions', 'Reading in translation', 'Where to start'],
      body: [
        { type: 'lead', text: 'In 1827, Goethe, then nearly eighty, told his secretary Eckermann that he had been reading a Chinese novel and that the age of national literatures was over: Weltliteratur, he said, was the era now beginning. The observation was ahead of its time. Two centuries later, a reader in English has access to translations of roughly a tenth of what has been written in the world — enough to spend a life reading, and still miss nine-tenths.' },
        { type: 'h2', text: 'What the term has come to mean' },
        { type: 'p', text: 'For most of the twentieth century, "world literature" meant, in practice, a Penguin Classics shelf of dead white European men. That has changed. David Damrosch\'s influential 2003 book What Is World Literature? redefined the category as writing that circulates beyond its culture of origin — a definition that admits the Mahabharata, the Icelandic sagas, the Thousand and One Nights, and contemporary Korean fiction on the same footing.' },
        { type: 'h2', text: 'Four traditions worth a reader\'s long loyalty' },
        { type: 'p', text: 'Chinese: Dream of the Red Chamber (Cao Xueqin, 1791) is one of the longest great novels ever written; modern Chinese fiction (Lu Xun, Eileen Chang, Mo Yan) is in good English translation. Japanese: The Tale of Genji (Murasaki Shikibu, c. 1010) predates the European novel by six centuries; twentieth-century Japanese fiction (Tanizaki, Kawabata, Ōe, Murakami) is well served. Arabic: the pre-Islamic odes, the Thousand and One Nights, Naguib Mahfouz\'s Cairo Trilogy. Latin American: the Boom generation (García Márquez, Vargas Llosa, Borges, Cortázar) transformed the novel in the 1960s and 70s and is still being absorbed.' },
        { type: 'h2', text: 'Reading in translation is still reading' },
        { type: 'p', text: 'The old complaint that a translation is only a shadow of the original is partially true and wholly unhelpful. Unless you plan to spend ten years learning Russian, reading Tolstoy in Pevear-and-Volokhonsky is reading Tolstoy. Pick translators deliberately: Emily Wilson for Homer, Lydia Davis for Proust, Anthea Bell for Kafka, Edith Grossman for García Márquez, Deborah Smith for Han Kang. A good translator is not an invisible conduit but a writer working in two languages at once.' },
        { type: 'h2', text: 'Starting points' },
        { type: 'p', text: 'If you are reading broadly for the first time, five books will open more doors than a year of survey classes: One Hundred Years of Solitude (García Márquez), The Tale of Genji (Murasaki), The Brothers Karamazov (Dostoevsky), Things Fall Apart (Achebe), and whichever short-story writer of your century you have not yet met — Borges, Munro, Baldwin, Lispector. Read one completely before starting the next.' },
        { type: 'callout', text: 'The Nobel Prize in Literature, for all its politics, is still a usable reading list: 121 laureates since 1901, roughly half of whom wrote in languages other than English.' },
      ],

      keyTerms: ['Weltliteratur', 'canon', 'translation', 'postcolonial literature', 'Boom generation', 'Mahabharata', 'Genji', 'magical realism'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@CrashCourse',
            title: 'Crash Course Literature — international episodes (One Hundred Years of Solitude, Things Fall Apart, Beloved, Don Quixote)',
            channel: 'CrashCourse',
            duration: 'variable',
            why: 'John Green\'s Crash Course Literature devotes a season to canonical novels from outside the US and UK.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.nobelprize.org/prizes/literature/',
            title: 'The Nobel Prize in Literature — lecture archive',
            channel: 'Nobel Prize Organization',
            duration: 'variable',
            why: 'Most laureates\' Nobel lectures are available as video or text. Toni Morrison\'s and Orhan Pamuk\'s are essential.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=EPm0ybvyGrM',
            title: 'Crash Course Mythology',
            channel: 'CrashCourse',
            duration: 'variable',
            why: 'A global tour of mythic traditions — Mesopotamian, African, Norse, Polynesian — as the pre-history of world narrative.',
          },
        ],
        books: [
          {
            title: 'One Hundred Years of Solitude (tr. Gregory Rabassa)',
            author: 'Gabriel García Márquez',
            year: 1967,
            url: '',
            why: 'The novel that built magical realism into a tradition. Rabassa\'s translation was the one García Márquez said was better than the original.',
          },
          {
            title: 'The Tale of Genji (tr. Royall Tyler)',
            author: 'Murasaki Shikibu',
            year: 1010,
            url: '',
            why: 'The world\'s first full-dress psychological novel, a thousand pages from eleventh-century Japan. Royall Tyler\'s 2001 translation is the one to read.',
          },
          {
            title: 'What Is World Literature?',
            author: 'David Damrosch',
            year: 2003,
            url: '',
            why: 'The definitional book of the subfield, by the Harvard scholar who organizes the concept. Read if you want to think about the category as well as its contents.',
          },
        ],
        articles: [
          {
            title: 'World literature',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/World_literature',
            why: 'Survey with sections on Goethe\'s coinage, postcolonial reframings, and the current scholarly debate.',
            year: null,
          },
          {
            title: 'Nobel Prize in Literature — laureates',
            source: 'Nobel Prize Organization',
            url: 'https://www.nobelprize.org/prizes/lists/all-nobel-prizes-in-literature/',
            why: 'Browse the full list. Every name is a reading project.',
            year: null,
          },
          {
            title: 'Words Without Borders',
            source: 'Words Without Borders',
            url: 'https://www.wordswithoutborders.org/',
            why: 'Monthly online magazine of international literature in English translation since 2003. The best single contemporary portal.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Masterpieces of World Literature',
            provider: 'edX (Harvard, David Damrosch)',
            url: 'https://www.edx.org/learn/literature/harvard-university-masterpieces-of-world-literature',
            free: true,
            why: 'Damrosch\'s free Harvard course, the author\'s own introduction to his subject.',
          },
        ],
        primarySources: [
          {
            title: 'One Thousand and One Nights (Richard Burton translation)',
            url: 'https://www.gutenberg.org/ebooks/5667',
            why: 'Burton\'s Victorian translation on Gutenberg. Use alongside a modern edition; the frame tale is unmissable.',
          },
        ],
      },

      seeAlso: ['novel', 'epic', 'shakespeare'],
      prereqs: ['novel', 'readclose'],
      leadsTo: [],

      chapterActivity: 'A quarterly translation reading at Community Bookstore in Park Slope — a novel in English alongside its French, Spanish, or Japanese, read and compared aloud.',

      sources: [
        'https://en.wikipedia.org/wiki/World_literature',
        'https://www.wordswithoutborders.org/',
        'https://www.nobelprize.org/prizes/literature/',
      ],
      verifiedAt: '2026-04-22',
    },

  },
};
