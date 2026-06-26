// content/history.js
// Batch: B04-humanities
// Last updated: 2026-04-22 by BATCH B04-humanities

window.CONTENT = window.CONTENT || {};
window.CONTENT.history = {
  subjectId: 'history',
  version: 1,
  lastUpdated: '2026-04-22',
  curator: 'BATCH B04-humanities',
  topics: {

    prehistory: {
      id: 'prehistory',
      name: 'Prehistory',
      level: 'Beginner',
      dek: 'Three million years of human life, reconstructed from bone, stone, and the residues in old hearths.',
      readTime: '11 min',

      sections: ['Before the word', 'How we know what we know', 'The Neolithic turn', 'The invention of writing'],
      body: [
        { type: 'lead', text: 'In a limestone cave in the Dordogne valley, in the winter of 1940, four teenagers followed their dog into a hole and found themselves inside an art gallery seventeen thousand years old. The walls of Lascaux are covered with bulls and horses and stags, painted by a people who left no names. Most of human history is like this — eloquent objects, silent makers. The job of prehistory is to listen closely to what they left.' },
        { type: 'h2', text: 'The long stretch' },
        { type: 'p', text: 'Prehistory is everything before writing, which in most of the world means everything before about 3,200 BCE. By some measures that is 99.9% of the human story. We share the anatomy of our species with people who lived two hundred thousand years ago; we share grandparents, distantly, with people who lived three million years back. A historian reading Thucydides is closer in time to us than Thucydides was to the cave painters of Chauvet.' },
        { type: 'h2', text: 'How you recover a world with no writing' },
        { type: 'p', text: 'Archaeology works by inference. A hearth tells you someone cooked; the bones around it tell you what they ate; the wear on a tooth tells you what grains they milled; the isotopes in the tooth tell you where they grew up. Genetics has turned out to be an unexpected ally: ancient DNA from a finger bone in a Siberian cave revealed a whole human species, the Denisovans, that nobody knew existed until 2010.' },
        { type: 'h2', text: 'The Neolithic revolution' },
        { type: 'p', text: 'Around twelve thousand years ago, in several places at once, people began to plant the seeds they had been gathering. The shift from foraging to farming — what V. Gordon Childe called the Neolithic Revolution — is the single largest change in how human beings live. It produced surplus, surplus produced cities, cities produced class, and class produced most of the rest of recorded history. It also made people shorter, sicker, and less free. The trade-off is still being argued about.' },
        { type: 'h2', text: 'The moment writing starts' },
        { type: 'p', text: 'Writing was invented at least three times independently: in Mesopotamia around 3,200 BCE, in China around 1,200 BCE, and in Mesoamerica around 900 BCE. The Sumerian scribes at Uruk began with accounting — tallies of barley and sheep — and only later got around to poetry. Prehistory ends, in any given region, the moment someone can write down a sentence that an archaeologist can read.' },
      ],

      keyTerms: ['Paleolithic', 'Neolithic', 'hominin', 'domestication', 'stratigraphy', 'Denisovan', 'Homo sapiens'],

      resources: {
        videos: [
          {
            id: 'Yocja_N5s1I',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=Yocja_N5s1I',
            title: 'The Agricultural Revolution: Crash Course World History #1',
            channel: 'CrashCourse',
            duration: '11:05',
            why: 'John Green on the Neolithic turn, delivered at the usual Crash Course clip. The best eleven-minute entry to where recorded history comes from.',
          },
          {
            id: 'nzDgnOrl3-c',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=nzDgnOrl3-c',
            title: 'Paleolithic Cave Paintings: The First Human Art',
            channel: 'The Art Assignment',
            duration: '9:14',
            why: 'Sarah Green on why the Chauvet and Lascaux paintings are not charming primitives but fully formed works of art — and how we know.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@pbseons',
            title: 'PBS Eons (channel)',
            channel: 'PBS Eons',
            duration: 'variable',
            why: 'Short, well-researched episodes on human origins, Neanderthals, Denisovans, and the peopling of the Americas. Browse the "Human Origins" playlist.',
          },
        ],
        books: [
          {
            title: 'Sapiens: A Brief History of Humankind',
            author: 'Yuval Noah Harari',
            year: 2011,
            url: '',
            why: 'The recent book most educated adults have read on this subject. Sweeping and sometimes over-confident, but the frame is useful.',
          },
          {
            title: 'The Dawn of Everything: A New History of Humanity',
            author: 'David Graeber and David Wengrow',
            year: 2021,
            url: '',
            why: 'A dense, generous corrective to the tidy stadial story of farming, cities, states. The book to read second.',
          },
          {
            title: 'Man Makes Himself',
            author: 'V. Gordon Childe',
            year: 1936,
            url: 'https://archive.org/details/man-makes-himself',
            why: 'The classic that gave us the term "Neolithic Revolution." Still readable; still argued with.',
          },
        ],
        articles: [
          {
            title: 'Prehistory',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Prehistory',
            why: 'Well-cited survey of the periodization, the methods, and the fights.',
            year: null,
          },
          {
            title: 'Human Evolution',
            source: 'Smithsonian — What Does It Mean to Be Human?',
            url: 'https://humanorigins.si.edu/evidence/human-family-tree',
            why: 'The Smithsonian\'s interactive family tree, with each hominin species summarized by the curators who actually hold the bones.',
            year: null,
          },
          {
            title: 'Neolithic Revolution',
            source: 'World History Encyclopedia',
            url: 'https://www.worldhistory.org/Neolithic/',
            why: 'Concise entry with a strong bibliography, ideal as a second article after Wikipedia.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Human Prehistory and the First Civilizations',
            provider: 'The Great Courses (Brian M. Fagan)',
            url: 'https://www.thegreatcourses.com/',
            free: false,
            why: 'Fagan is the field\'s best living popularizer; the lectures are a paid option, but the companion textbook "People of the Earth" is widely available through libraries.',
          },
        ],
        tools: [
          {
            title: 'Smithsonian Human Origins Interactive Timeline',
            url: 'https://humanorigins.si.edu/evidence/human-fossils/species',
            why: 'Hover any species to get the defining fossils, the dates, and the current consensus on how they fit.',
          },
        ],
        primarySources: [
          {
            title: 'Lascaux (French Ministry of Culture virtual tour)',
            url: 'https://archeologie.culture.gouv.fr/lascaux/en',
            why: 'The official government tour of the cave, room by room. The closest most people will ever get.',
          },
        ],
      },

      seeAlso: ['mesopotamia', 'egypt', 'deeptime'],
      prereqs: [],
      leadsTo: ['mesopotamia', 'egypt'],

      chapterActivity: 'A Saturday morning walk through the Hall of Human Origins at the American Museum of Natural History, followed by coffee at the Library Café across the park.',

      sources: [
        'https://en.wikipedia.org/wiki/Prehistory',
        'https://humanorigins.si.edu/evidence/human-family-tree',
        'https://www.worldhistory.org/Neolithic/',
      ],
      verifiedAt: '2026-04-22',
    },

    mesopotamia: {
      id: 'mesopotamia',
      name: 'Mesopotamia',
      level: 'Beginner',
      dek: 'The first cities, the first laws, the first poem — all from the floodplain between two rivers.',
      readTime: '12 min',

      sections: ['The land between the rivers', 'Cuneiform and the scribal mind', 'Law, Gilgamesh, and the city', 'The long afterlife'],
      body: [
        { type: 'lead', text: 'Around 3,200 BCE, in a city called Uruk on the Euphrates, a temple accountant pressed a reed into wet clay and invented writing. The tablets we recover are shopping lists — so many bushels of barley, so many sheep, delivered to so-and-so. From that accounting gesture came, eventually, the first poem, the first law code, and the basic vocabulary of the state.' },
        { type: 'h2', text: 'The land between the rivers' },
        { type: 'p', text: 'Mesopotamia, from the Greek for "between rivers," was the plain between the Tigris and the Euphrates in what is now Iraq. It was flat, fertile, and unlucky in one way: it had no wood, no stone, no metal. Everything useful had to be imported. So Mesopotamians became traders, accountants, and city-builders before anyone else, because they had to be.' },
        { type: 'h2', text: 'Cuneiform, the first writing' },
        { type: 'p', text: 'Sumerian cuneiform started as pictograms and ended as wedges. A scribe pressed the end of a cut reed into wet clay; the baked tablets are practically indestructible, which is why we have hundreds of thousands of them. They tell us about grain rationing, beer recipes, love spells, complaints from a copper merchant named Ea-nāṣir about the quality of a recent shipment — the oldest customer-service dispute on record, 3,800 years old.' },
        { type: 'h2', text: 'Hammurabi, Gilgamesh, Enheduanna' },
        { type: 'p', text: 'By the eighteenth century BCE, Hammurabi of Babylon had issued the code inscribed on the stele now in the Louvre: 282 rulings on property, injury, marriage, and slaves. A few centuries earlier, scribes wrote down the Epic of Gilgamesh, the oldest long poem in the world, whose king grieves a lost friend in language a reader can still feel. Older than both is Enheduanna, the Akkadian high priestess who signed her hymns by name — the first author in world literature we can point to.' },
        { type: 'h2', text: 'Why it keeps mattering' },
        { type: 'p', text: 'The week has seven days because the Babylonians counted moon-phases; the hour has sixty minutes because they counted in sixties; the circle has 360 degrees for the same reason. Western astrology and Western astronomy both descend from their star charts. When you hear the phrase "an eye for an eye," you are quoting a Sumerian legal principle four thousand years old.' },
      ],

      keyTerms: ['Sumer', 'cuneiform', 'ziggurat', 'Code of Hammurabi', 'Gilgamesh', 'city-state', 'Akkadian'],

      resources: {
        videos: [
          {
            id: 'sohXPx_XZ6Y',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=sohXPx_XZ6Y',
            title: 'Mesopotamia: Crash Course World History #3',
            channel: 'CrashCourse',
            duration: '12:18',
            why: 'John Green on Sumer, Akkad, and Babylon — the fast version, with enough jokes to stick.',
          },
          {
            id: 'PdhefuuJmk4',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=PdhefuuJmk4',
            title: 'The Epic of Gilgamesh (audiobook, Andrew George translation read by George Guidall)',
            channel: 'Thug Notes / Literary Roadhouse',
            duration: 'variable',
            why: 'A plain reading of the Andrew George translation, which is now the scholarly standard. Use it while you follow along in print.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.bl.uk/learning/timeline/item126484.html',
            title: 'British Museum — Mesopotamia collection highlights',
            channel: 'The British Museum',
            duration: 'variable',
            why: 'Short video talks and object notes by curators at the museum that holds the largest Mesopotamian collection outside Iraq.',
          },
        ],
        books: [
          {
            title: 'The Epic of Gilgamesh',
            author: 'Andrew George (translator)',
            year: 1999,
            url: '',
            why: 'The Penguin Classics edition, the current scholarly standard. The Babylonian text on facing pages, with a long introduction that teaches you how to read it.',
          },
          {
            title: 'Babylon: Mesopotamia and the Birth of Civilization',
            author: 'Paul Kriwaczek',
            year: 2010,
            url: '',
            why: 'A readable single-volume history, from Ubaid villages to the Persian conquest. A journalist\'s pace with a scholar\'s footnotes.',
          },
          {
            title: 'Ancient Mesopotamia: Portrait of a Dead Civilization',
            author: 'A. Leo Oppenheim',
            year: 1964,
            url: '',
            why: 'The classic. Still the book historians of the ancient Near East argue with. Demanding but indispensable.',
          },
        ],
        articles: [
          {
            title: 'Mesopotamia',
            source: 'World History Encyclopedia',
            url: 'https://www.worldhistory.org/Mesopotamia/',
            why: 'Concise, well-illustrated overview with a strong reading list.',
            year: null,
          },
          {
            title: 'Code of Hammurabi',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Code_of_Hammurabi',
            why: 'Clear summary with the full text in translation. Worth reading a dozen laws cold to feel how a bureaucracy of four thousand years ago actually thought.',
            year: null,
          },
          {
            title: 'Cuneiform',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Cuneiform',
            why: 'Good long-form entry on the script, its evolution, and its decipherment.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Introduction to Ancient Empires',
            provider: 'Khan Academy (Big History / Ancient World)',
            url: 'https://www.khanacademy.org/humanities/world-history/world-history-beginnings',
            free: true,
            why: 'The best structured free on-ramp — short videos, exercises, and the Big-History frame.',
          },
        ],
        primarySources: [
          {
            title: 'The Epic of Gilgamesh (Wikipedia portal with translation links)',
            url: 'https://en.wikipedia.org/wiki/Epic_of_Gilgamesh',
            why: 'The Wikipedia entry has a full translation history and links to the Andrew George and N. K. Sandars editions.',
          },
          {
            title: 'Code of Hammurabi — full text (Yale Avalon Project)',
            url: 'https://avalon.law.yale.edu/ancient/hamframe.asp',
            why: 'The L.W. King translation hosted by Yale\'s Avalon Project. Read five laws at random.',
          },
        ],
      },

      seeAlso: ['prehistory', 'egypt', 'greece'],
      prereqs: ['prehistory'],
      leadsTo: ['egypt', 'greece'],

      chapterActivity: 'A monthly evening in the Ancient Near East galleries at the Metropolitan Museum, where a group reads Gilgamesh aloud across from the Assyrian reliefs.',

      sources: [
        'https://en.wikipedia.org/wiki/Cuneiform',
        'https://www.worldhistory.org/Mesopotamia/',
        'https://en.wikipedia.org/wiki/Code_of_Hammurabi',
      ],
      verifiedAt: '2026-04-22',
    },

    egypt: {
      id: 'egypt',
      name: 'Ancient Egypt',
      level: 'Beginner',
      dek: 'Three thousand years of a single civilization along a single river — longer than anything else that has happened since.',
      readTime: '13 min',

      sections: ['The gift of the Nile', 'Old, Middle, New', 'Writing and afterlife', 'The long closing'],
      body: [
        { type: 'lead', text: 'For two thousand seven hundred years, a civilization on the banks of the Nile built temples, buried kings, and wrote hymns in the same script. To put that in perspective: Cleopatra, the last pharaoh, lived closer in time to a first-generation iPhone owner than to the builders of the Great Pyramid at Giza. The pyramid was already ancient when she was born.' },
        { type: 'h2', text: 'The gift of the Nile' },
        { type: 'p', text: 'Herodotus called Egypt "the gift of the river," and he meant it mechanically. Every July the Nile flooded on schedule, leaving a black ribbon of fertile silt along its banks. Beyond that ribbon was desert. Egyptian civilization grew up in a thin strip of farmland protected on both sides by sand — a geography that gave the country unusual continuity. Kings might change; the harvest calendar did not.' },
        { type: 'h2', text: 'The three kingdoms' },
        { type: 'p', text: 'Egyptologists divide pharaonic history into three Kingdoms — Old, Middle, New — separated by two "Intermediate Periods" of fragmentation. The Old Kingdom (c. 2686–2181 BCE) is the age of the great pyramids. The Middle Kingdom is the age of literature — elegant tales about shipwrecked sailors and a peasant who argues his way through nine speeches. The New Kingdom is the age of empire, Tutankhamun, Hatshepsut, Ramesses II. By the time of Alexander the Great, Egyptian civilization was already older than any civilization alive today.' },
        { type: 'h2', text: 'Writing, the soul, and the afterlife' },
        { type: 'p', text: 'Egyptian religion is the longest continuous theology in recorded history. The core idea — that the soul outlives the body, and that the journey between depends on how you lived — predates every philosophical system now alive. The Book of the Dead is a practical guide to that journey: what to say to the jackal-headed judge, which gates to name, how to protect your heart from the scales. The hieroglyphic script, legible again since Champollion deciphered the Rosetta Stone in 1822, gave us back their own voices.' },
        { type: 'h2', text: 'The very long ending' },
        { type: 'p', text: 'Persian, Macedonian, Roman, Byzantine, Arab — Egypt was ruled by outsiders for the last two thousand years of its classical life, and the old religion slowly lost its priests. The last hieroglyphic inscription we have is from the temple of Philae, 394 CE. When Napoleon\'s scholars landed in 1798 and began cataloguing the ruins, the continent\'s oldest civilization had to be learned from the ground up, the way archaeologists learn Mesopotamia. It is still being learned.' },
      ],

      keyTerms: ['pharaoh', 'hieroglyphics', 'Nile', 'Old Kingdom', 'New Kingdom', 'Book of the Dead', 'Rosetta Stone'],

      resources: {
        videos: [
          {
            id: 'Z3Wvu6e_jRI',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=Z3Wvu6e_jRI',
            title: 'Ancient Egypt: Crash Course World History #4',
            channel: 'CrashCourse',
            duration: '11:51',
            why: 'John Green on three thousand years, delivered fast. Use as an orientation before any book.',
          },
          {
            id: 'YkGyhrIbfSc',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=YkGyhrIbfSc',
            title: 'The Great Pyramid of Giza',
            channel: 'Smarthistory',
            duration: '6:49',
            why: 'Beth Harris and Steven Zucker on the logistics and symbolism of the most famous building ever raised. Short and dense.',
          },
          {
            id: 'KgwlRnXgefY',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=KgwlRnXgefY',
            title: 'Book of the Dead of Hunefer',
            channel: 'Smarthistory',
            duration: '5:41',
            why: 'A close reading of one of the most famous funerary papyri, now in the British Museum. The best way to understand Egyptian afterlife belief is to read a document.',
          },
        ],
        books: [
          {
            title: 'The Oxford History of Ancient Egypt',
            author: 'Ian Shaw (editor)',
            year: 2000,
            url: '',
            why: 'The standard reference — one essay per period, by the scholar currently writing the definitive book on that period.',
          },
          {
            title: 'The Rise and Fall of Ancient Egypt',
            author: 'Toby Wilkinson',
            year: 2010,
            url: '',
            why: 'A recent, readable single-volume narrative by a working Egyptologist. The book to give a curious adult.',
          },
          {
            title: 'Ancient Egyptian Literature: An Anthology',
            author: 'John L. Foster (translator)',
            year: 2001,
            url: '',
            why: 'The songs, love poems, wisdom texts, and tomb autobiographies of people who lived four thousand years ago, translated to be read as poems.',
          },
        ],
        articles: [
          {
            title: 'Ancient Egypt',
            source: 'World History Encyclopedia',
            url: 'https://www.worldhistory.org/egypt/',
            why: 'Richly illustrated overview, with linked entries for every dynasty and major site.',
            year: null,
          },
          {
            title: 'Egyptian hieroglyphs',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Egyptian_hieroglyphs',
            why: 'Clear entry on the script, its grammar, and the story of the Rosetta Stone.',
            year: null,
          },
          {
            title: 'Rosetta Stone',
            source: 'The British Museum',
            url: 'https://www.britishmuseum.org/collection/object/Y_EA24',
            why: 'The object itself, with the full conservation record and the museum\'s curatorial history.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Introduction to Ancient Egypt and Its Civilization',
            provider: 'Coursera (University of Pennsylvania)',
            url: 'https://www.coursera.org/learn/ancient-egypt',
            free: true,
            why: 'David Silverman\'s course, free to audit. Pairs with the Penn Museum collection.',
          },
        ],
        primarySources: [
          {
            title: 'Book of the Dead (Wikipedia portal with images and translation links)',
            url: 'https://en.wikipedia.org/wiki/Book_of_the_Dead',
            why: 'The Wikipedia entry links to high-resolution British Museum scans of the Papyrus of Ani and to several online translations.',
          },
        ],
      },

      seeAlso: ['mesopotamia', 'prehistory', 'greece'],
      prereqs: ['prehistory'],
      leadsTo: ['greece', 'rome'],

      chapterActivity: 'A standing monthly visit to the Temple of Dendur at the Metropolitan Museum — dawn hours, when the light through the glass wall is what it would have been on the Nile.',

      sources: [
        'https://www.worldhistory.org/egypt/',
        'https://en.wikipedia.org/wiki/Egyptian_hieroglyphs',
        'https://www.britishmuseum.org/collection/object/Y_EA24',
      ],
      verifiedAt: '2026-04-22',
    },

    greece: {
      id: 'greece',
      name: 'Classical Greece',
      level: 'Intermediate',
      dek: 'A scatter of small cities on a stony peninsula that somehow produced philosophy, drama, history, and the idea of the citizen.',
      readTime: '13 min',

      sections: ['The polis', 'The Persian crisis', 'The Athenian moment', 'What the Greeks invented'],
      body: [
        { type: 'lead', text: 'In 480 BCE, on a narrow strait between an island and the mainland, a few hundred Greek ships destroyed the invasion fleet of the largest empire the world had yet seen. The battle of Salamis saved a collection of fractious little city-states whose combined population was smaller than modern Brooklyn. Within fifty years, that collection had produced Aeschylus, Sophocles, Euripides, Herodotus, Thucydides, Socrates, and the architects of the Parthenon.' },
        { type: 'h2', text: 'The polis as a technology of self-government' },
        { type: 'p', text: 'A Greek polis was not a city in the modern sense but a small political community, usually centered on a fortified hill, with a hinterland of farms. There were hundreds of them, each run by its own citizens, each fiercely independent. Monarchy they distrusted. Tyrants — meaning anyone who seized power outside the law — they despised. The idea that adult male citizens should rule themselves, vote on wars, and be judged only by their peers came out of this political geography. So, unavoidably, did slavery and the exclusion of women, which the Greeks took for granted.' },
        { type: 'h2', text: 'The Persian Wars' },
        { type: 'p', text: 'Twice in a generation, the Persian Empire invaded mainland Greece. In 490 BCE the Athenians beat them at Marathon; in 480 BCE the Spartan king Leonidas held the pass at Thermopylae long enough for the Greek fleet, under Themistocles, to win the sea-fight at Salamis. Herodotus wrote the whole story down a generation later, inventing the form we still call history. The phrase is his: his word historia just means "inquiry."' },
        { type: 'h2', text: 'Periclean Athens' },
        { type: 'p', text: 'For about fifty years after the Persian Wars, Athens ran an informal empire, taxed its allies, and spent the tribute on what is now called the Acropolis — the Parthenon, the Erechtheion, the temple of Athena Nike. In the same few decades the theater of Dionysus staged Aeschylus\'s Oresteia, Sophocles\'s Oedipus Rex, and the comedies of Aristophanes. Socrates walked the agora and annoyed people into examining their lives. Then, inevitably, Athens picked a fight with Sparta, lost the Peloponnesian War, and the moment was over.' },
        { type: 'h2', text: 'What the Greeks actually invented' },
        { type: 'p', text: 'It is a commonplace to say the Greeks invented everything; it is more accurate to say they invented the habit of asking what everything is. Philosophy as an independent activity, geometry as a deductive science, tragedy as a literary form, history as an evidence-based inquiry, democracy as a specific political arrangement — all of these emerged in Greek between about 600 and 300 BCE. The argument has continued ever since.' },
        { type: 'quote', text: 'Of all forms of government, democracy is the worst — except for all the others.', cite: 'Winston Churchill, paraphrasing a very old idea' },
      ],

      keyTerms: ['polis', 'democracy', 'Peloponnesian War', 'Athens', 'Sparta', 'Pericles', 'Parthenon', 'hoplite'],

      resources: {
        videos: [
          {
            id: '-plCXQpOknI',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=-plCXQpOknI',
            title: '2,500 Years of History in 15 Minutes: Greece',
            channel: 'BazBattles / Kings and Generals',
            duration: '15:00',
            why: 'A single-map narrative of what happened and when. Use as a spine before reading the long-form material.',
          },
          {
            id: 'ZPJhyCoAd9g',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=ZPJhyCoAd9g',
            title: 'The Persians & Greeks: Crash Course World History #5',
            channel: 'CrashCourse',
            duration: '12:24',
            why: 'Twelve minutes on the Persian Wars and the Athenian century, told with the usual jokes.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://oyc.yale.edu/classics/clcv-205',
            title: 'Introduction to Ancient Greek History (CLCV 205)',
            channel: 'Open Yale Courses (Donald Kagan)',
            duration: 'variable',
            why: 'Twenty-four lectures by the late Donald Kagan, the foremost American historian of the Greeks, free in video and transcript.',
          },
        ],
        books: [
          {
            title: 'The Histories',
            author: 'Herodotus (tr. Tom Holland)',
            year: -440,
            url: 'https://www.gutenberg.org/ebooks/2707',
            why: 'The founding work of historical writing. Read one chapter at random — the gossipy, marvelous tone is unmistakable.',
          },
          {
            title: 'The History of the Peloponnesian War',
            author: 'Thucydides (tr. Rex Warner)',
            year: -411,
            url: 'https://www.gutenberg.org/ebooks/7142',
            why: 'Cooler and more clinical than Herodotus. Pericles\'s funeral oration is still one of the great set pieces of political rhetoric.',
          },
          {
            title: 'The Greeks',
            author: 'H. D. F. Kitto',
            year: 1951,
            url: '',
            why: 'Seven decades old and still the most elegant short introduction in English. A Penguin paperback everyone should own.',
          },
        ],
        articles: [
          {
            title: 'Classical Greece',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Classical_Greece',
            why: 'Careful survey with a strong bibliography.',
            year: null,
          },
          {
            title: 'Athens',
            source: 'World History Encyclopedia',
            url: 'https://www.worldhistory.org/Athens/',
            why: 'Concise entry focused on the institutions — Council of 500, Areopagus, Assembly — that made Athenian democracy tick.',
            year: null,
          },
          {
            title: 'Ancient Greek Philosophy',
            source: 'Internet Encyclopedia of Philosophy',
            url: 'https://iep.utm.edu/greekphi/',
            why: 'Accessible overview linking Presocratics through Hellenistic schools.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'CLCV 205 — Introduction to Ancient Greek History',
            provider: 'Open Yale Courses',
            url: 'https://oyc.yale.edu/classics/clcv-205',
            free: true,
            why: 'Donald Kagan\'s free lecture series. Every adult\'s best path into the subject.',
          },
        ],
        primarySources: [
          {
            title: 'Perseus Digital Library',
            url: 'https://www.perseus.tufts.edu/hopper/',
            why: 'The scholarly portal for classical texts in Greek, Latin, and English, hosted at Tufts.',
          },
          {
            title: 'Pericles\'s Funeral Oration (Thucydides, Book 2.34–46)',
            url: 'https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.01.0200%3Abook%3D2%3Achapter%3D34',
            why: 'The single most quoted piece of ancient political rhetoric, in the Perseus parallel text.',
          },
        ],
      },

      seeAlso: ['rome', 'greeks', 'mesopotamia'],
      prereqs: ['mesopotamia'],
      leadsTo: ['rome', 'greeks', 'renaissance'],

      chapterActivity: 'Monthly evening readings of Greek tragedy in translation at the Morgan Library\'s public reading room, followed by drinks at a café off Madison Avenue.',

      sources: [
        'https://en.wikipedia.org/wiki/Classical_Greece',
        'https://www.worldhistory.org/Athens/',
        'https://oyc.yale.edu/classics/clcv-205',
      ],
      verifiedAt: '2026-04-22',
    },

    rome: {
      id: 'rome',
      name: 'Rome',
      level: 'Intermediate',
      dek: 'From seven hills on the Tiber to an empire ringing the Mediterranean — a twelve-hundred-year experiment in power.',
      readTime: '14 min',

      sections: ['The Republic', 'The Principate', 'The long decline', 'Why Rome still matters'],
      body: [
        { type: 'lead', text: 'On a March afternoon in 44 BCE, a group of senators in togas stabbed Julius Caesar twenty-three times on the floor of a theater in Rome. They thought they were saving the Republic. They were, in fact, ending it. The next five centuries of Mediterranean history would be an empire.' },
        { type: 'h2', text: 'The Republic and its rules' },
        { type: 'p', text: 'Rome was founded, or so it claimed, in 753 BCE. For its first two and a half centuries it was a kingdom. In 509 BCE the last king was thrown out and the Roman Republic began: two elected consuls each year, a Senate of aristocrats, a Popular Assembly for the common citizens. The constitution was unwritten, cobbled together over time, and held together by a culture of ferocious civic virtue — mos maiorum, "the way of the ancestors." It lasted five hundred years before ambitious generals with loyal private armies pulled it apart.' },
        { type: 'h2', text: 'Augustus and the Principate' },
        { type: 'p', text: 'After a generation of civil wars, Caesar\'s adopted son Octavian won a sea-battle at Actium in 31 BCE and, with remarkable skill, rebuilt a monarchy inside the institutional shell of the Republic. He took the name Augustus and became, formally, just "First Citizen" — princeps. The Senate kept meeting; the consuls kept being elected. But the armies obeyed Augustus, and so did the tax collectors, and so the empire was his. The peace he imposed, the Pax Romana, held for two centuries.' },
        { type: 'h2', text: 'Decline, fall, and afterlife' },
        { type: 'p', text: 'Edward Gibbon famously argued in 1776 that Rome fell to Christianity and the barbarians. Modern historians have added a dozen other causes — plague, inflation, overstretched frontiers, the difficulty of moving grain. What is undisputed is that by 476 CE the last emperor in the West had been deposed, and that the Eastern half — what we now call Byzantium — continued for another thousand years from Constantinople, keeping the title "Romans" until 1453. The Western collapse produced the early Middle Ages. The Eastern survival kept classical learning alive long enough to hand it to the Arabs, and through them to the Renaissance.' },
        { type: 'h2', text: 'The long Roman shadow' },
        { type: 'p', text: 'Every European constitution quotes Rome. Every legal code borrows from the Corpus Juris Civilis that Justinian compiled in the 530s. Every American federal building cribs Roman columns. The months July and August are named after Caesar and Augustus. The word empire comes from imperium, the Latin for "command." Two thousand years later, a nontrivial share of the West\'s vocabulary for power is still Roman.' },
        { type: 'quote', text: 'They make a desert and call it peace.', cite: 'Tacitus, putting the words in a Briton\'s mouth' },
      ],

      keyTerms: ['Republic', 'Senate', 'Augustus', 'Pax Romana', 'Caesar', 'imperium', 'Byzantine Empire', 'mos maiorum'],

      resources: {
        videos: [
          {
            id: '47UgfEuQ4P4',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=47UgfEuQ4P4',
            title: 'The Roman Empire. Or Republic. Or…Which Was It?: Crash Course World History #10',
            channel: 'CrashCourse',
            duration: '12:37',
            why: 'John Green on the Republic-to-Empire transition, in the length of an episode of a sitcom.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@HistoriaCivilis',
            title: 'Historia Civilis — Roman military and political history (channel)',
            channel: 'Historia Civilis',
            duration: 'variable',
            why: 'Obsessively researched, animated battle-by-battle accounts of the late Republic and early Empire. Watch the "Caesar\'s Civil War" series in order.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.bbc.co.uk/programmes/m000lfjz',
            title: 'Mary Beard — Meet the Romans (BBC, 2012)',
            channel: 'BBC',
            duration: '3 x 60:00',
            why: 'Mary Beard walks the streets of Rome, reading gravestones. The single best documentary on what Roman daily life looked like.',
          },
        ],
        books: [
          {
            title: 'SPQR: A History of Ancient Rome',
            author: 'Mary Beard',
            year: 2015,
            url: '',
            why: 'The current best single volume, by the Cambridge classicist who has spent a lifetime on this subject.',
          },
          {
            title: 'The Decline and Fall of the Roman Empire',
            author: 'Edward Gibbon',
            year: 1776,
            url: 'https://www.gutenberg.org/ebooks/731',
            why: 'Gibbon\'s six volumes, on Gutenberg. Read the preface and the first chapter at least; the prose is one of the glories of English.',
          },
          {
            title: 'The Twelve Caesars',
            author: 'Suetonius (tr. Robert Graves)',
            year: 121,
            url: '',
            why: 'Gossip, tyranny, and administrative detail from a civil servant who had access to the imperial archives. The source of every later "bad Caesar" story.',
          },
        ],
        articles: [
          {
            title: 'Roman Empire',
            source: 'World History Encyclopedia',
            url: 'https://www.worldhistory.org/Roman_Empire/',
            why: 'Concise narrative with strong maps and a running bibliography.',
            year: null,
          },
          {
            title: 'Roman Republic',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Roman_Republic',
            why: 'Good summary of the institutions and the slow constitutional collapse.',
            year: null,
          },
          {
            title: 'Fall of the Western Roman Empire',
            source: 'Encyclopædia Britannica',
            url: 'https://www.britannica.com/event/ancient-Rome/The-fall-of-the-Western-Empire',
            why: 'A short editorial piece summarizing the current consensus about how and why the West went.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'The Roman Empire (Great Courses, Garrett Fagan)',
            provider: 'Wondrium / The Teaching Company',
            url: 'https://www.thegreatcourses.com/',
            free: false,
            why: 'Fagan\'s lecture series is the gold-standard audio course on Rome; the author\'s death in 2017 means no sequel is coming.',
          },
          {
            title: 'The Roman World',
            provider: 'Yale (optional; see OYC classics section)',
            url: 'https://oyc.yale.edu/classics',
            free: true,
            why: 'Yale Open Courses does not list a standalone Rome course, but its classics page links the available lecture series and public talks worth watching.',
          },
        ],
        primarySources: [
          {
            title: 'The Aeneid (Virgil, in Dryden\'s translation)',
            url: 'https://www.gutenberg.org/ebooks/228',
            why: 'Rome\'s founding epic, commissioned by Augustus. Read Book 6.',
          },
          {
            title: 'Caesar\'s Gallic Wars',
            url: 'https://www.gutenberg.org/ebooks/10657',
            why: 'Caesar\'s own account of his campaigns in Gaul — a masterclass in how a politician writes his own press.',
          },
        ],
      },

      seeAlso: ['greece', 'medieval', 'islam'],
      prereqs: ['greece'],
      leadsTo: ['medieval', 'renaissance'],

      chapterActivity: 'A seasonal walk through the Metropolitan Museum\'s Roman Court, reading Catullus and Horace aloud in the covered atrium.',

      sources: [
        'https://www.worldhistory.org/Roman_Empire/',
        'https://en.wikipedia.org/wiki/Roman_Republic',
        'https://www.britannica.com/event/ancient-Rome/The-fall-of-the-Western-Empire',
      ],
      verifiedAt: '2026-04-22',
    },

    medieval: {
      id: 'medieval',
      name: 'Medieval Europe',
      level: 'Intermediate',
      dek: 'A thousand years that were neither as dark, as uniform, nor as Christian as the name "Middle Ages" suggests.',
      readTime: '13 min',

      sections: ['What the term hides', 'After Rome', 'The high medieval century', 'Black Death and the opening of the world'],
      body: [
        { type: 'lead', text: 'In 800 CE, on Christmas Day in Rome, the Frankish king Charlemagne walked up to the altar of St. Peter\'s, and the Pope placed a crown on his head and declared him Emperor of the Romans. The Roman Empire in the West had been gone for more than three centuries. The gesture was either an end or a beginning, depending on which century you were standing in.' },
        { type: 'h2', text: 'Why "medieval" is a slur that stuck' },
        { type: 'p', text: 'The word "medieval" was coined by Renaissance humanists who wanted their own century to sound like a return to classical greatness after a long dark trough. The thousand years from roughly 500 to 1500 were neither uniformly dark nor uniformly anything. They saw the preservation of classical learning, the invention of the university, the Gothic cathedral, the three-field system, the water-mill, the printing press, Islamic Andalusia, Byzantium, and the flowering of Hebrew philosophy. A good historian refuses the adjective "medieval" unless forced.' },
        { type: 'h2', text: 'After Rome' },
        { type: 'p', text: 'The Western Roman Empire unraveled slowly, not in a single fall but over two centuries. In its place a patchwork of Germanic kingdoms emerged — Franks in Gaul, Visigoths in Spain, Lombards in Italy, Saxons in Britain — each gradually Christianized, each partially Romanized in law and custom. The Eastern Roman Empire, what we retrospectively call Byzantium, survived at Constantinople with the Emperor Justinian codifying Roman law in the 530s, a legal document that would shape every European constitution for the next fifteen centuries.' },
        { type: 'h2', text: 'The High Middle Ages' },
        { type: 'p', text: 'Between roughly 1000 and 1300 CE, Europe underwent something like a boom. The climate warmed. Ploughs got heavier. The population roughly doubled. Cities emerged — Venice, Bruges, Paris, London — run by merchant classes whose legal autonomy was new. Universities appeared at Bologna, Paris, Oxford. Aquinas wrote the Summa Theologica. Chartres and Notre Dame went up. In 1215 the English barons forced King John to sign Magna Carta, inserting into European political vocabulary the idea that even a king stands under the law.' },
        { type: 'h2', text: 'The Black Death and after' },
        { type: 'p', text: 'In 1347 a merchant ship carrying fleas carrying the plague bacterium docked in Sicily. Within four years, perhaps a third of the European population was dead. The Church\'s authority, the feudal labor contract, and the medieval theological certainty about death all took blows they never recovered from. What emerged from the later fourteenth century — humanism, nation-states, printing, exploration — is what we call the Renaissance, but the medieval world made it possible.' },
        { type: 'callout', text: 'The "Dark Ages" was originally a narrower term, used by Petrarch for the centuries immediately after Rome\'s fall. Most historians have now retired it; the early medieval period had shorter novels and fewer marble columns, but it was not dark.' },
      ],

      keyTerms: ['feudalism', 'manorialism', 'Charlemagne', 'Magna Carta', 'Black Death', 'Crusades', 'Scholasticism', 'Byzantine Empire'],

      resources: {
        videos: [
          {
            id: 'rNu8XDBSn10',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=rNu8XDBSn10',
            title: 'The Dark Ages…How Dark Were They, Really?: Crash Course World History #14',
            channel: 'CrashCourse',
            duration: '12:28',
            why: 'John Green on why the "Dark Ages" label is misleading. The short version of what takes a historian a whole semester.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://oyc.yale.edu/history/hist-210',
            title: 'The Early Middle Ages, 284–1000 (HIST 210)',
            channel: 'Open Yale Courses (Paul Freedman)',
            duration: 'variable',
            why: 'Paul Freedman\'s twenty-two Yale lectures, free in video and transcript. The best serious introduction online.',
          },
          {
            id: 'qXa7hR4V7ks',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=qXa7hR4V7ks',
            title: 'The Black Death: Crash Course World History #10',
            channel: 'Crash Course World History 2',
            duration: '13:14',
            why: 'A focused episode on the plague of 1347–51 — the demographic earthquake that reshaped medieval Europe.',
          },
        ],
        books: [
          {
            title: 'The Making of the Middle Ages',
            author: 'R. W. Southern',
            year: 1953,
            url: '',
            why: 'A short, elegant classic by an Oxford medievalist. Still the best single volume on the high Middle Ages.',
          },
          {
            title: 'A Distant Mirror: The Calamitous 14th Century',
            author: 'Barbara Tuchman',
            year: 1978,
            url: '',
            why: 'Tuchman follows one French nobleman through the century of plague, war, and schism. Narrative history at its best.',
          },
          {
            title: 'The Discarded Image',
            author: 'C. S. Lewis',
            year: 1964,
            url: '',
            why: 'Lewis on what the medievals actually thought the cosmos looked like. Will change how you read Dante, Chaucer, and the cathedral walls.',
          },
        ],
        articles: [
          {
            title: 'Middle Ages',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Middle_Ages',
            why: 'A careful entry with a strong section on the historiography of the term.',
            year: null,
          },
          {
            title: 'Feudalism',
            source: 'Encyclopædia Britannica',
            url: 'https://www.britannica.com/topic/feudalism',
            why: 'Editorial piece pushing back on the cartoon version most of us learned in school.',
            year: null,
          },
          {
            title: 'Magna Carta',
            source: 'The British Library',
            url: 'https://www.bl.uk/magna-carta',
            why: 'The library\'s dedicated microsite, with high-resolution images of the 1215 original.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'HIST 210 — The Early Middle Ages, 284–1000',
            provider: 'Open Yale Courses',
            url: 'https://oyc.yale.edu/history/hist-210',
            free: true,
            why: 'Freedman\'s lectures, free. The opening sequence on Late Antiquity is particularly good.',
          },
        ],
        primarySources: [
          {
            title: 'Magna Carta (full text, British Library)',
            url: 'https://www.bl.uk/magna-carta/articles/magna-carta-english-translation',
            why: 'The 1215 charter in modern English, annotated.',
          },
        ],
      },

      seeAlso: ['rome', 'islam', 'renaissance'],
      prereqs: ['rome'],
      leadsTo: ['renaissance', 'islam'],

      chapterActivity: 'Afternoon visits to The Cloisters in Fort Tryon Park — seasonal readings of Chaucer in the herb garden, and mulled wine afterwards at a pub on Broadway.',

      sources: [
        'https://en.wikipedia.org/wiki/Middle_Ages',
        'https://www.britannica.com/topic/feudalism',
        'https://oyc.yale.edu/history/hist-210',
      ],
      verifiedAt: '2026-04-22',
    },

    islam: {
      id: 'islam',
      name: 'Islamic Golden Age',
      level: 'Intermediate',
      dek: 'From the House of Wisdom in Baghdad to the libraries of Córdoba — four centuries when the world\'s science spoke Arabic.',
      readTime: '13 min',

      sections: ['From Medina to Baghdad', 'The House of Wisdom', 'Al-Andalus', 'The long inheritance'],
      body: [
        { type: 'lead', text: 'In 762 CE, the Caliph al-Mansur broke ground on a circular city on the Tigris. He called it Madinat as-Salam — the City of Peace. Two generations later it had a population of more than a million, a library translating the whole of Greek philosophy into Arabic, and a standing commission tasked with finding and paying for every extant scientific manuscript in the known world. Europe at the time had Charlemagne, who could read but not write.' },
        { type: 'h2', text: 'From Medina to Baghdad' },
        { type: 'p', text: 'Muhammad began preaching in Mecca around 610 CE and died in Medina in 632 having founded a community that was both a religion and a polity. Within a century, his successors had conquered an empire stretching from Spain to Central Asia — the fastest territorial expansion in world history. By 750 the Abbasid dynasty had moved the capital from Damascus to Iraq and founded Baghdad, positioning itself between the Mediterranean economy and the Silk Road.' },
        { type: 'h2', text: 'The House of Wisdom' },
        { type: 'p', text: 'The Abbasid court in Baghdad sponsored a translation movement without parallel in world history. Greek texts — Aristotle, Galen, Ptolemy, Euclid — were translated through Syriac into Arabic; Sanskrit mathematics came in through Persian. Al-Khwarizmi wrote the first book on algebra, giving the discipline its name. Al-Razi compiled the first systematic pharmacopoeia. Ibn al-Haytham, working in Cairo around 1000 CE, wrote the Book of Optics, in which he laid out an experimental method seven centuries before anyone in Europe did the same thing. The "Golden Age" is not a sentimental label; it is a measurable thing.' },
        { type: 'h2', text: 'Al-Andalus' },
        { type: 'p', text: 'Across the Mediterranean, Muslim Spain — al-Andalus — ran from 711 to 1492. At its height in the tenth century, Córdoba was the largest city in Europe, with a library said to hold four hundred thousand volumes. Jewish, Christian, and Muslim scholars worked side by side on astronomy, medicine, philosophy. Maimonides, the medieval rabbi whose Guide for the Perplexed is a foundation of Jewish thought, wrote in Arabic. So did Ibn Rushd — Averroes — whose commentaries on Aristotle reached Thomas Aquinas two hundred years later by way of the Latin translators of Toledo.' },
        { type: 'h2', text: 'What the world kept' },
        { type: 'p', text: 'When European universities emerged in the twelfth century, their curricula were half Arabic in origin. The numeral system, algebra, algorithm (al-Khwarizmi\'s name), alchemy, alkali, zenith, nadir, admiral, almanac — the English language still carries the loanwords. Every medieval doctor read an Arabic translation of Galen. Every medieval astronomer read Arabic adaptations of Ptolemy. That recovery was the thing the Renaissance could then renaissance.' },
      ],

      keyTerms: ['caliphate', 'House of Wisdom', 'Abbasids', 'al-Andalus', 'al-Khwarizmi', 'Averroes', 'Maimonides', 'translation movement'],

      resources: {
        videos: [
          {
            id: 'uCpxxOxuYsI',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=uCpxxOxuYsI',
            title: 'Islam and Politics: Crash Course World History #216',
            channel: 'CrashCourse',
            duration: '14:24',
            why: 'John Green on the expansion and legacy. Use as orientation before reading Hourani.',
          },
          {
            id: 'TpcbfxtdoI8',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=TpcbfxtdoI8',
            title: 'The Islamic Golden Age',
            channel: 'Crash Course History of Science #5',
            duration: '12:17',
            why: 'Hank Green specifically on the translation movement and the experimental tradition of Ibn al-Haytham.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.1001inventions.com/',
            title: '1001 Inventions — Muslim Heritage (video library)',
            channel: '1001 Inventions',
            duration: 'variable',
            why: 'Charitable foundation\'s video library, vetted by working historians of science.',
          },
        ],
        books: [
          {
            title: 'A History of the Arab Peoples',
            author: 'Albert Hourani',
            year: 1991,
            url: '',
            why: 'The standard single-volume history by a scholar who spent a career on it. Start here.',
          },
          {
            title: 'Lost Enlightenment: Central Asia\'s Golden Age from the Arab Conquest to Tamerlane',
            author: 'S. Frederick Starr',
            year: 2013,
            url: '',
            why: 'A modern corrective: the Golden Age was not only Arab and not only in Baghdad. Beautifully written, widely respected.',
          },
          {
            title: 'The Ornament of the World',
            author: 'María Rosa Menocal',
            year: 2002,
            url: '',
            why: 'A literary history of al-Andalus — Muslim, Christian, Jewish — by a Yale scholar who writes like a novelist.',
          },
        ],
        articles: [
          {
            title: 'Islamic Golden Age',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Islamic_Golden_Age',
            why: 'Careful summary with separate entries for each major discipline.',
            year: null,
          },
          {
            title: 'The House of Wisdom',
            source: 'World History Encyclopedia',
            url: 'https://www.worldhistory.org/House_of_Wisdom/',
            why: 'Short entry on the Baghdad institution that ran the translation movement.',
            year: null,
          },
          {
            title: 'Arabic mathematics: forgotten brilliance?',
            source: 'MacTutor',
            url: 'https://mathshistory.st-andrews.ac.uk/HistTopics/Arabic_mathematics/',
            why: 'O\'Connor and Robertson on why the history of mathematics is not a straight line from Athens to Cambridge.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'The Emergence of the Modern Middle East',
            provider: 'Tel Aviv University (Coursera)',
            url: 'https://www.coursera.org/learn/modern-middle-east',
            free: true,
            why: 'Asher Susser\'s free course; the opening modules cover the medieval foundations.',
          },
        ],
        primarySources: [
          {
            title: 'The Book of Optics (Ibn al-Haytham) — background and excerpts',
            url: 'https://en.wikipedia.org/wiki/Book_of_Optics',
            why: 'Wikipedia\'s entry, with a careful discussion of which manuscripts survive and where.',
          },
        ],
      },

      seeAlso: ['medieval', 'renaissance', 'abrahamic'],
      prereqs: ['medieval'],
      leadsTo: ['renaissance', 'exploration'],

      chapterActivity: 'Monthly gatherings in the Metropolitan Museum\'s Islamic Art galleries, reading Rumi and Ibn al-Haytham in bilingual editions.',

      sources: [
        'https://en.wikipedia.org/wiki/Islamic_Golden_Age',
        'https://www.worldhistory.org/House_of_Wisdom/',
        'https://mathshistory.st-andrews.ac.uk/HistTopics/Arabic_mathematics/',
      ],
      verifiedAt: '2026-04-22',
    },

    renaissance: {
      id: 'renaissance',
      name: 'Renaissance',
      level: 'Intermediate',
      dek: 'A three-hundred-year argument that the ancient world was worth returning to, conducted in paint, ink, and bronze.',
      readTime: '12 min',

      sections: ['Why Florence, why then', 'Humanism', 'The print revolution', 'The long shadow'],
      body: [
        { type: 'lead', text: 'In the summer of 1401, the city of Florence held a competition for the bronze doors of its baptistery. Two young sculptors, Lorenzo Ghiberti and Filippo Brunelleschi, each submitted a panel of the sacrifice of Isaac. Ghiberti won; Brunelleschi left for Rome in a sulk and spent a decade measuring ancient ruins. The dome he later built on Florence cathedral was the largest since the Pantheon, and the Renaissance had its first engineering problem solved.' },
        { type: 'h2', text: 'Why Florence, why then' },
        { type: 'p', text: 'Northern Italy in 1400 was the richest, most urbanized place in Europe, and its cities ran themselves. Merchant republics like Florence and Venice had money and civic pride to spend; bankers like the Medici had reason to commission art that would stand next to any ancient sculpture. The Black Death, fifty years earlier, had killed a third of the population and driven up the wages of the survivors — which included, decisively, the artisans.' },
        { type: 'h2', text: 'Humanism was a method, not an attitude' },
        { type: 'p', text: 'What the Renaissance humanists — Petrarch, Bruni, Valla, Erasmus — invented was not humanism as we now loosely use the word. They invented a research method: go back to the earliest manuscripts, compare them, fix the scribal errors, restore the classical Latin. In 1440 Lorenzo Valla proved with grammatical analysis that the Donation of Constantine, the document on which a thousand years of papal claims to Italy rested, was a medieval forgery. Philology had become a weapon of empire.' },
        { type: 'h2', text: 'Gutenberg and the torrent of pages' },
        { type: 'p', text: 'Around 1450 a German goldsmith named Johannes Gutenberg finished a press with movable metal type. Within fifty years Europe had some twenty million printed books — more books than its scribes had produced in the previous thousand years. The Bible, Erasmus\'s New Testament, Copernicus, Vesalius, Luther\'s 95 Theses: each was a publication event in a way that was now possible for the first time. Without the press, there is no Reformation, no Scientific Revolution, no Enlightenment.' },
        { type: 'h2', text: 'What the rebirth actually was' },
        { type: 'p', text: 'The Renaissance was never an age of pure light, and its writers had no illusions otherwise: Machiavelli watched the French sack Florence, Erasmus watched Europe tear itself apart over which Latin New Testament to trust. But in a few generations, artists relearned how to draw a foot, scholars relearned how to edit a text, architects relearned how to build a dome, and a handful of them taught all of Europe to do the same.' },
        { type: 'quote', text: 'There is no excellent beauty that hath not some strangeness in the proportion.', cite: 'Francis Bacon, Essays, 1625' },
      ],

      keyTerms: ['humanism', 'Medici', 'Florence', 'Petrarch', 'Erasmus', 'perspective', 'print', 'Reformation'],

      resources: {
        videos: [
          {
            id: 'nzGylKpFDVk',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=nzGylKpFDVk',
            title: 'The Renaissance: Was it a Thing? — Crash Course World History #22',
            channel: 'CrashCourse',
            duration: '11:48',
            why: 'John Green on the historiographic argument itself: was the Renaissance really a break, or a useful story we tell?',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@smarthistoryvideos',
            title: 'Smarthistory — Renaissance (channel / playlist)',
            channel: 'Smarthistory',
            duration: 'variable',
            why: 'Beth Harris and Steven Zucker stand in front of the actual paintings and talk about them for six minutes at a time. The most useful art-history resource on the internet.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.bbc.co.uk/programmes/b00nq3l4',
            title: 'Civilisations (BBC, 2018)',
            channel: 'BBC',
            duration: 'multiple',
            why: 'The second series of Civilisations covers the Renaissance with modern scholarship. Simon Schama\'s episodes are especially strong.',
          },
        ],
        books: [
          {
            title: 'The Civilization of the Renaissance in Italy',
            author: 'Jacob Burckhardt',
            year: 1860,
            url: 'https://www.gutenberg.org/ebooks/49343',
            why: 'The founding interpretive work. Half a century of modern scholarship is a dialogue with Burckhardt.',
          },
          {
            title: 'The Swerve: How the World Became Modern',
            author: 'Stephen Greenblatt',
            year: 2011,
            url: '',
            why: 'Pulitzer-winning narrative of Poggio Bracciolini\'s 1417 rediscovery of Lucretius. A useful gateway for non-specialists.',
          },
          {
            title: 'The Prince',
            author: 'Niccolò Machiavelli',
            year: 1532,
            url: 'https://www.gutenberg.org/ebooks/1232',
            why: 'Ninety pages that invented modern political thought. Read the Mansfield translation if you can, Gutenberg if not.',
          },
        ],
        articles: [
          {
            title: 'Renaissance',
            source: 'Encyclopædia Britannica',
            url: 'https://www.britannica.com/event/Renaissance',
            why: 'Concise editorial summary with strong illustrations and cross-links.',
            year: null,
          },
          {
            title: 'Italian Renaissance',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Italian_Renaissance',
            why: 'Long, well-sourced entry with separate sections on art, science, and politics.',
            year: null,
          },
          {
            title: 'Printing press',
            source: 'Britannica',
            url: 'https://www.britannica.com/technology/printing-press',
            why: 'On Gutenberg, the economics of early printing, and the Reformation.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'The Italian Renaissance',
            provider: 'Smarthistory (free)',
            url: 'https://smarthistory.org/proto-renaissance-italy/',
            free: true,
            why: 'Organized curriculum of Renaissance art, with scholars writing short essays keyed to specific works. Free.',
          },
        ],
        primarySources: [
          {
            title: 'Leonardo da Vinci\'s Notebooks (selected)',
            url: 'https://www.gutenberg.org/ebooks/5000',
            why: 'The Jean Paul Richter translation of Leonardo\'s notebooks on Gutenberg — a window into a Renaissance mind at work.',
          },
        ],
      },

      seeAlso: ['medieval', 'exploration', 'renart'],
      prereqs: ['medieval'],
      leadsTo: ['exploration', 'enlightenment', 'renart'],

      chapterActivity: 'Seasonal afternoons at The Morgan Library to see rotating Renaissance manuscripts, paired with a reading group that has been working through Castiglione\'s Courtier for a year.',

      sources: [
        'https://www.britannica.com/event/Renaissance',
        'https://en.wikipedia.org/wiki/Italian_Renaissance',
        'https://smarthistory.org/proto-renaissance-italy/',
      ],
      verifiedAt: '2026-04-22',
    },

    exploration: {
      id: 'exploration',
      name: 'Age of Exploration',
      level: 'Intermediate',
      dek: 'European ships, African and Asian trade networks, and the catastrophic meeting of worlds that reshaped the planet.',
      readTime: '13 min',

      sections: ['Before 1492', 'The Columbian Exchange', 'Empire by contract', 'The bill comes due'],
      body: [
        { type: 'lead', text: 'On August 3, 1492, three ships left the Spanish port of Palos. Their captain, an ambitious Genoese sailor named Cristoforo Colombo, thought he could reach the Indies by sailing west. He was wrong about the size of the Earth — Eratosthenes had it right eighteen centuries earlier — but lucky: a landmass he did not know existed caught his ship, and a hundred and fifty million people who did not know he was coming were about to live inside his mistake.' },
        { type: 'h2', text: 'Before 1492, the world was already connected' },
        { type: 'p', text: 'It is tempting but wrong to picture 1491 as a world of disconnected continents. The Silk Road had been moving silks and spices from Chang\'an to Rome for over a thousand years. East African ports were trading with China. Mali\'s king Mansa Musa had made the hajj to Mecca in 1324 and handed out so much gold in Cairo that the city\'s currency was destabilized for a decade. What the Iberians added, starting with Prince Henry\'s Portuguese navigators in the 1420s, was the sea route around Africa — breaking the Mediterranean-and-Silk-Road monopoly.' },
        { type: 'h2', text: 'The Columbian Exchange' },
        { type: 'p', text: 'When Columbus\'s ships made landfall, they began the biggest biological event since the extinction of the dinosaurs. Potatoes, maize, tomatoes, peppers, and cacao moved east. Horses, wheat, sugar, and smallpox moved west. Within a century, between eighty and ninety percent of the indigenous population of the Americas was dead, overwhelmingly from disease. The surviving populations were reorganized under European colonial rule, and an Atlantic slave trade of twelve million African captives over three centuries filled the labor gap on the sugar, tobacco, and cotton plantations that the new world system demanded.' },
        { type: 'h2', text: 'Empire as a joint-stock corporation' },
        { type: 'p', text: 'The major innovation of seventeenth-century European empire-making was not the ship but the corporation. The Dutch East India Company (VOC, 1602) and its English counterpart (1600) were private firms given monopolistic trading rights by their governments. They raised capital through public share sales — the original stock exchange — and used it to fund voyages, armies, and plantations. By the eighteenth century the VOC was, effectively, a sovereign power in Indonesia. The phrase "too big to fail" has a longer history than the 2008 bailouts suggest.' },
        { type: 'h2', text: 'The cost' },
        { type: 'p', text: 'Historians in the last generation have re-reckoned the bill. The potato, from the Andes, eventually prevented famines across northern Europe and doubled its population; the Atlantic slave trade and settler colonialism hollowed out two other continents for the benefit of a third. Sugar, tobacco, and cotton — three New World export crops — subsidized the Industrial Revolution. The world we now inhabit, with its boundaries, languages, and economic rankings, was mostly drawn between 1492 and 1800. Understanding the present requires understanding that story whole.' },
      ],

      keyTerms: ['Columbian Exchange', 'Vasco da Gama', 'Atlantic slave trade', 'VOC', 'joint-stock company', 'conquistador', 'Treaty of Tordesillas'],

      resources: {
        videos: [
          {
            id: 'FZwcx06tdHI',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=FZwcx06tdHI',
            title: 'The Columbian Exchange: Crash Course World History #23',
            channel: 'CrashCourse',
            duration: '12:47',
            why: 'John Green on the ecological side of 1492 — diseases, crops, animals. The angle most schools still miss.',
          },
          {
            id: 'ogDmIMyoI3E',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=ogDmIMyoI3E',
            title: 'The Atlantic Slave Trade: Crash Course World History #24',
            channel: 'CrashCourse',
            duration: '12:12',
            why: 'The companion episode, on the twelve-million-person human side of the same system.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://slavevoyages.org/',
            title: 'SlaveVoyages — Trans-Atlantic Slave Trade Database',
            channel: 'Emory University',
            duration: 'variable',
            why: 'The database of 36,000 slave-trade voyages with ship logs, ports, and mortality. Not a video — but one of the great digital humanities projects, worth an evening.',
          },
        ],
        books: [
          {
            title: '1491: New Revelations of the Americas Before Columbus',
            author: 'Charles C. Mann',
            year: 2005,
            url: '',
            why: 'The best single book on what the pre-contact Americas actually looked like, by a journalist who interviewed every working archaeologist in the field.',
          },
          {
            title: '1493: Uncovering the New World Columbus Created',
            author: 'Charles C. Mann',
            year: 2011,
            url: '',
            why: 'Mann\'s follow-up, on the ecological and economic consequences. Read the two together.',
          },
          {
            title: 'The Black Jacobins',
            author: 'C. L. R. James',
            year: 1938,
            url: '',
            why: 'James\'s classic history of the Haitian Revolution — the enslaved who defeated Napoleon. One of the great histories of the twentieth century.',
          },
        ],
        articles: [
          {
            title: 'Columbian Exchange',
            source: 'Britannica',
            url: 'https://www.britannica.com/event/Columbian-exchange',
            why: 'Alfred Crosby coined the term; this Britannica entry is a careful summary of his framework.',
            year: null,
          },
          {
            title: 'Age of Discovery',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Age_of_Discovery',
            why: 'Good overview with sections on each national project — Portuguese, Spanish, Dutch, English, French.',
            year: null,
          },
          {
            title: 'Atlantic slave trade',
            source: 'World History Encyclopedia',
            url: 'https://www.worldhistory.org/Atlantic_Slave_Trade/',
            why: 'Short, well-cited entry with numbers drawn from the SlaveVoyages database.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'The Age of Jefferson',
            provider: 'University of Virginia (Coursera)',
            url: 'https://www.coursera.org/learn/the-age-of-jefferson',
            free: true,
            why: 'Peter Onuf\'s course covers the Atlantic world of the late exploration era from an American angle. Free to audit.',
          },
        ],
        primarySources: [
          {
            title: 'Columbus\'s Letter on the First Voyage (1493)',
            url: 'https://www.gilderlehrman.org/history-resources/spotlight-primary-source/columbus-reports-his-first-voyage-1493',
            why: 'The Gilder Lehrman Institute\'s annotated edition of the letter Columbus wrote on the return trip.',
          },
        ],
      },

      seeAlso: ['renaissance', 'industrial', 'islam'],
      prereqs: ['renaissance'],
      leadsTo: ['enlightenment', 'industrial'],

      chapterActivity: 'A walking day on Manhattan\'s lower tip — Fraunces Tavern, the African Burial Ground National Monument, and a boat out to the Statue of Liberty at dusk.',

      sources: [
        'https://www.britannica.com/event/Columbian-exchange',
        'https://en.wikipedia.org/wiki/Age_of_Discovery',
        'https://slavevoyages.org/',
      ],
      verifiedAt: '2026-04-22',
    },

    enlightenment: {
      id: 'enlightenment',
      name: 'The Enlightenment',
      level: 'Intermediate',
      dek: 'The century when reason, rights, and public argument became political programs — and turned over every state that touched them.',
      readTime: '12 min',

      sections: ['Sapere aude', 'The republic of letters', 'Revolutions', 'Inheritances'],
      body: [
        { type: 'lead', text: 'In 1784, in a magazine essay in Berlin, Immanuel Kant answered a question the editor had posed: What is Enlightenment? Kant gave one of the most quoted definitions in the history of philosophy. Enlightenment, he wrote, is man\'s emergence from his self-incurred immaturity. The reader\'s job was to dare to know: Sapere aude. That slogan, lifted from Horace, became the motto of an entire century.' },
        { type: 'h2', text: 'A method, not a doctrine' },
        { type: 'p', text: 'The Enlightenment was not one idea. It was a temperament — skeptical, empirical, cosmopolitan — applied by different people to different problems. John Locke rebuilt political legitimacy on consent. David Hume dismantled the arguments for miracles. Adam Smith reframed economics around self-interest and division of labor. Voltaire attacked the Catholic Church. Rousseau attacked Voltaire. Diderot, with an inherited debt and a government censor at his door, spent twenty-five years editing an encyclopedia meant to hold the entire world\'s useful knowledge between its covers.' },
        { type: 'h2', text: 'The republic of letters' },
        { type: 'p', text: 'None of this was a coordinated program. What held it together was a European network of correspondents, pamphleteers, coffeehouses, and salons — the "republic of letters" — which let a text written in Edinburgh be read in Naples in a month. Madame Geoffrin hosted Paris\'s most important salon for thirty years. Benjamin Franklin, in London and Paris, was the American franchise. The Berlin Academy ran a prize competition every year on whatever question the King of Prussia wanted argued out in public.' },
        { type: 'h2', text: 'The revolutions' },
        { type: 'p', text: 'The American Declaration of Independence reads like a Lockean treaty; the Declaration of the Rights of Man quotes Rousseau. The Haitian revolution of 1791 was fought by people who had read both. By 1815 the monarchies of Europe had either fallen to republics, survived by promising constitutions, or dug in for a century of reactionary rearguard. What had been a library question in 1750 was a barricade question by 1800.' },
        { type: 'h2', text: 'What the Enlightenment left the rest of us' },
        { type: 'p', text: 'Religious toleration as a legal default. Rights treated as inherent to persons, not granted by governments. The idea that a criminal code should be rational, written down, and not a private instrument of the king. The idea that economic policy should be debated, measured, and contested. Modern readers often take these for settled; the Enlightenment is a reminder that they are barely three hundred years old and under renegotiation every decade.' },
        { type: 'callout', text: 'The Scottish Enlightenment — Hume, Smith, Reid, Ferguson — is the part of the story most often left out of French-centered tellings. It produced most of the philosophical back end: moral sentiment, political economy, the limits of reason.' },
      ],

      keyTerms: ['reason', 'social contract', 'natural rights', 'Encyclopédie', 'salon', 'Kant', 'Voltaire', 'Adam Smith'],

      resources: {
        videos: [
          {
            id: 'NnoFj2cMRLY',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=NnoFj2cMRLY',
            title: 'The Enlightenment: Crash Course European History #18',
            channel: 'CrashCourse',
            duration: '14:27',
            why: 'John Green on Locke, Hume, Voltaire, Kant. The orientation video for the movement.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://oyc.yale.edu/history/hist-202',
            title: 'European Civilization, 1648–1945 (HIST 202)',
            channel: 'Open Yale Courses (John Merriman)',
            duration: 'variable',
            why: 'John Merriman\'s twenty-four Yale lectures — the best serious online lecture series on the period.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=HlrB9qZgvww',
            title: 'In Our Time — Voltaire\'s Candide (BBC Radio 4)',
            channel: 'BBC In Our Time',
            duration: '42:00',
            why: 'Melvyn Bragg hosts three Enlightenment scholars on Voltaire\'s most famous satire. One of In Our Time\'s finest episodes.',
          },
        ],
        books: [
          {
            title: 'The Enlightenment: The Rise of Modern Paganism',
            author: 'Peter Gay',
            year: 1966,
            url: '',
            why: 'The standard American academic history of the movement. Two volumes; stand-alone reading in either.',
          },
          {
            title: 'The Enlightenment: And Why It Still Matters',
            author: 'Anthony Pagden',
            year: 2013,
            url: '',
            why: 'A contemporary argument for the durable intellectual program, grounded in current scholarship.',
          },
          {
            title: 'Candide',
            author: 'Voltaire',
            year: 1759,
            url: 'https://www.gutenberg.org/ebooks/4650',
            why: 'The short novel that ended any European hope of Leibnizian optimism. Ninety pages, still funny.',
          },
        ],
        articles: [
          {
            title: 'Enlightenment',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/enlightenment/',
            why: 'William Bristow\'s long essay on the philosophy of the movement. The place to go second.',
            year: 2017,
          },
          {
            title: 'Age of Enlightenment',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Age_of_Enlightenment',
            why: 'Good overview with separate sections on French, Scottish, German, and American strands.',
            year: null,
          },
          {
            title: 'Encyclopédie',
            source: 'Britannica',
            url: 'https://www.britannica.com/topic/Encyclopedie',
            why: 'On the project that produced seventeen volumes of text and eleven of plates, and almost got everyone involved imprisoned.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'HIST 202 — European Civilization, 1648–1945',
            provider: 'Open Yale Courses',
            url: 'https://oyc.yale.edu/history/hist-202',
            free: true,
            why: 'Merriman\'s lectures; the opening half is one of the finest Enlightenment narratives on video.',
          },
        ],
        primarySources: [
          {
            title: 'Kant, "What is Enlightenment?" (1784)',
            url: 'https://www.marxists.org/reference/subject/ethics/kant/enlightenment.htm',
            why: 'Kant\'s short reply to the Berlinische Monatsschrift. Five pages, foundational.',
          },
        ],
      },

      seeAlso: ['renaissance', 'industrial', 'modern_phil'],
      prereqs: ['renaissance'],
      leadsTo: ['industrial', 'modern_phil'],

      chapterActivity: 'Monthly salon evenings at the NYPL\'s Rose Reading Room reservation hall — readings from Diderot, Voltaire, and Madame du Châtelet, with follow-on dinners at a nearby French bistro.',

      sources: [
        'https://plato.stanford.edu/entries/enlightenment/',
        'https://en.wikipedia.org/wiki/Age_of_Enlightenment',
        'https://oyc.yale.edu/history/hist-202',
      ],
      verifiedAt: '2026-04-22',
    },

    industrial: {
      id: 'industrial',
      name: 'Industrial Revolution',
      level: 'Intermediate',
      dek: 'A century when British coal, cotton, and steam turned human life from agrarian to urban in a single lifetime.',
      readTime: '12 min',

      sections: ['Coal, cotton, steam', 'The move to the city', 'The global second wave', 'The bill we still pay'],
      body: [
        { type: 'lead', text: 'In 1776, the same year the American colonists declared independence and Adam Smith published The Wealth of Nations, an engineer named James Watt shipped the first commercial steam engine out of a workshop in Birmingham. Inside two generations, a country of six million people living on coal seams had become the workshop of the world. The average Briton ate more, wore cleaner cloth, and worked more hours in more noise than any generation before them. Nearly every economic pattern we now take for granted — wage labor, factories, commuting — dates from this century.' },
        { type: 'h2', text: 'Coal, cotton, steam' },
        { type: 'p', text: 'Britain in 1760 had three lucky resources: cheap coal, a well-watered network of navigable rivers, and an Empire supplying raw cotton from slave plantations in the Americas and India. It also had a precocious financial system and the world\'s best patent law. Watt\'s steam engine, improved by the 1780s, replaced water mills: factories no longer had to sit next to fast-running streams. Cotton thread, once spun by hand, was now spun by machine, at fifty times the pace. By 1830 the railways were running.' },
        { type: 'h2', text: 'The move to the city' },
        { type: 'p', text: 'In 1750, roughly 80% of Britons farmed. By 1850, under half did. The spare labor poured into Manchester, Leeds, Birmingham, and Glasgow, living in back-to-back brick housing that Friedrich Engels toured in 1844 and described with appalled precision. Child labor, twelve-hour shifts, black rivers, cholera — these are the costs that appear in every serious account, alongside the real gains in food security and material wealth. Both are true at once; the question of which mattered more depended on which class you were born into.' },
        { type: 'h2', text: 'The global second wave' },
        { type: 'p', text: 'By 1870, the industrial model had spread to Belgium, Germany, the United States, and Japan. By 1900, the United States was the largest economy in the world. The second wave came with steel (Bessemer), electricity (Edison, Tesla), internal combustion (Otto, Daimler), and the telephone (Bell) — and, critically, with mass-produced consumer goods. Henry Ford\'s moving assembly line in 1913 turned the automobile from a rich man\'s toy into a working-class commodity.' },
        { type: 'h2', text: 'The bill' },
        { type: 'p', text: 'The carbon emitted by industrial Britain was small by modern standards, but it was the first drop of what is now an atmospheric flood. Almost every contemporary environmental problem — climate change, plastic, industrial agriculture, supply-chain fragility — traces to decisions made in these two centuries. So does the standard of living most readers of this essay enjoy. The Industrial Revolution is the first chapter of a story not yet finished.' },
      ],

      keyTerms: ['steam engine', 'factory system', 'enclosure', 'Manchester', 'Luddites', 'assembly line', 'proletariat', 'capital'],

      resources: {
        videos: [
          {
            id: 'zjK7PWmRRyg',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=zjK7PWmRRyg',
            title: 'Coal, Steam, and The Industrial Revolution: Crash Course World History #32',
            channel: 'CrashCourse',
            duration: '10:37',
            why: 'John Green on the classic why-Britain-first question. The orientation video.',
          },
          {
            id: '9tTR9W5fHw0',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=9tTR9W5fHw0',
            title: 'Capitalism and the Dutch East India Company: Crash Course World History #229',
            channel: 'CrashCourse',
            duration: '10:18',
            why: 'John Green on the financial plumbing that made industrial capital formation possible two centuries before the factories arrived.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://oyc.yale.edu/history/hist-202',
            title: 'European Civilization, 1648–1945 (HIST 202)',
            channel: 'Open Yale Courses (John Merriman)',
            duration: 'variable',
            why: 'Merriman\'s Yale lectures on the long nineteenth century. The industrial lectures sit in the middle of the course.',
          },
        ],
        books: [
          {
            title: 'The Industrial Revolution in World History',
            author: 'Peter N. Stearns',
            year: 1993,
            url: '',
            why: 'The standard textbook — short, balanced, global.',
          },
          {
            title: 'The Condition of the Working Class in England',
            author: 'Friedrich Engels',
            year: 1845,
            url: 'https://www.gutenberg.org/ebooks/17306',
            why: 'Engels\'s first-hand account of Manchester\'s slums at twenty-four, before Marx. Still unsettling.',
          },
          {
            title: 'A Culture of Growth: The Origins of the Modern Economy',
            author: 'Joel Mokyr',
            year: 2016,
            url: '',
            why: 'The current best argument for why the Industrial Revolution happened when and where it did, by an economic historian at Northwestern.',
          },
        ],
        articles: [
          {
            title: 'Industrial Revolution',
            source: 'Britannica',
            url: 'https://www.britannica.com/event/Industrial-Revolution',
            why: 'Good editorial overview with careful dating and sector-by-sector detail.',
            year: null,
          },
          {
            title: 'Industrial Revolution',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Industrial_Revolution',
            why: 'Long, well-cited entry with strong coverage of labor and demographic consequences.',
            year: null,
          },
          {
            title: 'The Wealth of Nations (summary)',
            source: 'Adam Smith Institute',
            url: 'https://www.adamsmith.org/the-wealth-of-nations',
            why: 'Free, scholarly summary of Smith\'s five-book argument. Use as a companion while reading the primary text.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'The Industrial Revolution',
            provider: 'OpenLearn (Open University)',
            url: 'https://www.open.edu/openlearn/history-the-arts/history/social-economic-history/the-industrial-revolution/content-section-0',
            free: true,
            why: 'OU\'s free short course. Good for the British case in particular.',
          },
        ],
        primarySources: [
          {
            title: 'The Wealth of Nations',
            url: 'https://www.gutenberg.org/ebooks/3300',
            why: 'Adam Smith\'s full text on Gutenberg. Read Book I, chapters 1–3 at least.',
          },
        ],
      },

      seeAlso: ['enlightenment', 'ww', 'exploration'],
      prereqs: ['enlightenment'],
      leadsTo: ['ww', 'coldwar'],

      chapterActivity: 'An afternoon at the Tenement Museum on Orchard Street, followed by a short walking tour of the Lower East Side\'s garment-district landmarks.',

      sources: [
        'https://www.britannica.com/event/Industrial-Revolution',
        'https://en.wikipedia.org/wiki/Industrial_Revolution',
        'https://oyc.yale.edu/history/hist-202',
      ],
      verifiedAt: '2026-04-22',
    },

    ww: {
      id: 'ww',
      name: 'World Wars',
      level: 'Advanced',
      dek: 'The thirty-year civil war of Europe, from Sarajevo in 1914 to Berlin in 1945, that ended its five-century global dominance.',
      readTime: '14 min',

      sections: ['The crisis of 1914', 'The armistice that failed', 'The second war', 'Consequences'],
      body: [
        { type: 'lead', text: 'On June 28, 1914, a Bosnian Serb named Gavrilo Princip shot the Archduke Franz Ferdinand on a street corner in Sarajevo. By early August, five empires were at war. Within four years, four of them were gone: the German, the Austro-Hungarian, the Russian, and the Ottoman. The fifth — the British — survived the decade only to find itself bankrupted and unable to hold the next one. Everything about the second half of the twentieth century was the aftermath.' },
        { type: 'h2', text: 'Why 1914 escalated' },
        { type: 'p', text: 'The historian Christopher Clark titled his 2012 book on the war\'s origins The Sleepwalkers, and the title stuck because it is right. No great power wanted a continental war in 1914. Each made defensible decisions that, compounded by military timetables, mobilization commitments, and treaty obligations, locked the continent into four years of trench warfare that killed something like 17 million people. The Western Front barely moved. A generation of young men was buried in a strip of Belgium and northern France a few hundred kilometers long.' },
        { type: 'h2', text: 'The peace that did not hold' },
        { type: 'p', text: 'The Treaty of Versailles in 1919 demanded crushing reparations from Germany, redrew the map of Central Europe without always asking the inhabitants, and left the Soviet Union — newly Bolshevik — outside the settlement. The Great Depression of 1929 then collapsed the Weimar Republic. By 1933, the German chancellor was Adolf Hitler, committed to tearing up Versailles and, as he wrote openly in Mein Kampf, to racial war against Europe\'s Jews and Slavs.' },
        { type: 'h2', text: 'The second war' },
        { type: 'p', text: 'The Second World War was, if measured in deaths, the worst event in human history: probably 70 to 85 million dead, of whom two-thirds were civilians. The Holocaust systematically murdered two-thirds of Europe\'s Jews, along with Roma, Sinti, Soviet prisoners, homosexuals, and people with disabilities. The air war over Germany and Japan killed hundreds of thousands of civilians by bombing. Two American atomic weapons ended the war in the Pacific on August 6 and 9, 1945; together they killed something over 200,000 people in the first four months. The next war, everyone now understood, could end history.' },
        { type: 'h2', text: 'After 1945' },
        { type: 'p', text: 'The United States and the Soviet Union emerged as superpowers, and every country between Berlin and the Bering Strait spent the next half-century negotiating the consequences. The European empires decolonized. The United Nations, the Universal Declaration of Human Rights, the Genocide Convention, and the Geneva Conventions were attempts to write rules that would prevent a third attempt. Whether they have succeeded is the question of your own lifetime.' },
        { type: 'quote', text: 'Europe before 1914 was the world\'s hope. Europe after 1918 was the world\'s warning.', cite: 'paraphrased from Tony Judt' },
      ],

      keyTerms: ['Western Front', 'trench warfare', 'Treaty of Versailles', 'totalitarianism', 'Holocaust', 'blitzkrieg', 'Eastern Front', 'atomic bomb'],

      resources: {
        videos: [
          {
            id: '_XPZQ0LAlR4',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=_XPZQ0LAlR4',
            title: 'Archdukes, Cynicism, and World War I: Crash Course World History #36',
            channel: 'CrashCourse',
            duration: '14:13',
            why: 'John Green\'s orientation to the first war\'s causes. Watch before reading Tuchman.',
          },
          {
            id: 'Q78COTwT7nE',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=Q78COTwT7nE',
            title: 'World War II: Crash Course World History #38',
            channel: 'CrashCourse',
            duration: '12:08',
            why: 'Orientation to the second war; watch both Crash Course episodes before any deeper reading.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TheGreatWar',
            title: 'The Great War (channel)',
            channel: 'The Great War / Real Time History',
            duration: 'variable',
            why: 'A remarkable series that ran week by week for the centenary of WWI, then followed with a similar series for the interwar and WWII years. Browse the "Week by Week" playlists.',
          },
        ],
        books: [
          {
            title: 'The Guns of August',
            author: 'Barbara Tuchman',
            year: 1962,
            url: '',
            why: 'Pulitzer-winning narrative of the first month of the First World War. The book that still teaches readers how a continent sleepwalks into a disaster.',
          },
          {
            title: 'Postwar: A History of Europe Since 1945',
            author: 'Tony Judt',
            year: 2005,
            url: '',
            why: 'Nine hundred pages on what both wars left behind. The best single volume on the Cold War\'s European geography.',
          },
          {
            title: 'The Destruction of the European Jews',
            author: 'Raul Hilberg',
            year: 1961,
            url: '',
            why: 'The founding work of Holocaust scholarship. A demanding, necessary book — the bureaucracy of genocide, documented.',
          },
        ],
        articles: [
          {
            title: 'World War I',
            source: 'Britannica',
            url: 'https://www.britannica.com/event/World-War-I',
            why: 'Comprehensive editorial overview with strong maps.',
            year: null,
          },
          {
            title: 'World War II',
            source: 'Britannica',
            url: 'https://www.britannica.com/event/World-War-II',
            why: 'Britannica\'s long, well-organized entry, with timelines and theater-by-theater coverage.',
            year: null,
          },
          {
            title: 'The Holocaust',
            source: 'United States Holocaust Memorial Museum',
            url: 'https://encyclopedia.ushmm.org/content/en/article/introduction-to-the-holocaust',
            why: 'The USHMM Encyclopedia, by working historians. Use alongside Hilberg.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'HIST 202 — European Civilization, 1648–1945',
            provider: 'Open Yale Courses (John Merriman)',
            url: 'https://oyc.yale.edu/history/hist-202',
            free: true,
            why: 'Merriman\'s lectures end with the Second World War; the final ten are a sober seminar on how Europe got to 1945.',
          },
        ],
        primarySources: [
          {
            title: 'Treaty of Versailles (full text, Yale Avalon Project)',
            url: 'https://avalon.law.yale.edu/subject_menus/versailles_menu.asp',
            why: 'Yale\'s Avalon Project has the full text. Article 231 is the one that later mattered most.',
          },
          {
            title: 'Universal Declaration of Human Rights (1948)',
            url: 'https://www.un.org/en/about-us/universal-declaration-of-human-rights',
            why: 'The UN document that tried to answer the question, in thirty articles.',
          },
        ],
      },

      seeAlso: ['industrial', 'coldwar', 'enlightenment'],
      prereqs: ['industrial'],
      leadsTo: ['coldwar'],

      chapterActivity: 'Annual November visit to the Intrepid Sea, Air & Space Museum pier, with a reading of Wilfred Owen and Anna Akhmatova on the flight deck at dusk.',

      sources: [
        'https://www.britannica.com/event/World-War-I',
        'https://www.britannica.com/event/World-War-II',
        'https://encyclopedia.ushmm.org/content/en/article/introduction-to-the-holocaust',
      ],
      verifiedAt: '2026-04-22',
    },

    coldwar: {
      id: 'coldwar',
      name: 'Cold War',
      level: 'Advanced',
      dek: 'Forty-five years in which two superpowers armed themselves with enough warheads to end civilization — and, barely, did not.',
      readTime: '13 min',

      sections: ['The split of 1945', 'The hot proxy wars', '1989', 'The inheritance'],
      body: [
        { type: 'lead', text: 'In October 1962, for thirteen days, an American president and a Soviet premier moved warships around the Caribbean, and the rest of the world read the paper and wondered if it would be alive next month. The Cuban Missile Crisis came closer to nuclear war than any subsequent event; declassified records show that at least three Soviet submarine officers, under depth-charge attack and without contact with Moscow, were one vote away from firing nuclear torpedoes at the US fleet. One man, Vasili Arkhipov, voted no. This is the granularity at which the Cold War actually ran.' },
        { type: 'h2', text: 'Why the alliance ended' },
        { type: 'p', text: 'In 1945, the United States and the Soviet Union had defeated Germany together. Within three years they were adversaries. The standard causes are all real — Stalin\'s refusal to hold free elections in Eastern Europe, Truman\'s atomic monopoly, mutual ideological hostility, simple geopolitical suspicion — but the deepest reason was probably structural: two powers that large, with worldviews that incompatible, could not share the continent. By 1948 Europe was divided along the line the Red Army had reached. Churchill had already given it a name: the Iron Curtain.' },
        { type: 'h2', text: 'The proxy wars' },
        { type: 'p', text: 'The Cold War never went hot between the principals, but it ran as a shooting war almost everywhere else. Korea (1950–53) ended roughly where it started, with millions dead and a still-unresolved armistice. Vietnam (1955–75) cost three million Vietnamese lives and broke a generation of American political consensus. Afghanistan (1979–89) collapsed the Soviet army. Angola, Nicaragua, El Salvador, the Congo, Iran, Guatemala — the list of countries whose governments were overthrown or whose civil wars were prolonged by superpower intervention runs into the dozens.' },
        { type: 'h2', text: '1989' },
        { type: 'p', text: 'In a series of astonishingly fast events between June 1989 and December 1991, Poland held free elections, Hungary opened its border with Austria, East Germans poured across, the Berlin Wall came down, and the Soviet Union dissolved into fifteen successor states. Francis Fukuyama wrote an essay titled "The End of History?" and the title seemed, for a decade, plausible. It does not seem plausible now.' },
        { type: 'h2', text: 'What we inherited' },
        { type: 'p', text: 'The nuclear arsenal still exists — fewer warheads now, but enough to end civilization several times over. The Cold War\'s economic institutions (IMF, World Bank, NATO) are still running; its political maps (Korea, the former Yugoslavia, the post-Soviet borders of Russia and Ukraine) are still active flashpoints. And the argument about whether the American-led order that emerged from 1945 is a hegemonic project or a shared liberal one is now, again, an open question.' },
        { type: 'callout', text: 'The phrase "Cold War" was popularized by the American financier Bernard Baruch in a speech in April 1947; the English writer George Orwell had used it a year earlier, in the essay "You and the Atomic Bomb."' },
      ],

      keyTerms: ['containment', 'NATO', 'Warsaw Pact', 'Cuban Missile Crisis', 'Berlin Wall', 'mutually assured destruction', 'glasnost', 'Iron Curtain'],

      resources: {
        videos: [
          {
            id: 'y9HjvHZfCUI',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=y9HjvHZfCUI',
            title: 'USA vs USSR Fight! The Cold War: Crash Course World History #39',
            channel: 'CrashCourse',
            duration: '12:34',
            why: 'John Green\'s orientation — a fast, accurate, funny version of the forty-five-year story.',
          },
          {
            id: 'Mb-xWPbUEbc',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=Mb-xWPbUEbc',
            title: 'The Cuban Missile Crisis: A Thirteen-Day Game of Nuclear Chicken',
            channel: 'CrashCourse US History',
            duration: '13:46',
            why: 'The episode on the single most dangerous two weeks in human history.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://digitalarchive.wilsoncenter.org/collections',
            title: 'Wilson Center Cold War International History Project',
            channel: 'Woodrow Wilson International Center',
            duration: 'variable',
            why: 'Not video but the scholarly portal — declassified documents from both sides, curated by the Wilson Center\'s Cold War historians.',
          },
        ],
        books: [
          {
            title: 'The Cold War: A New History',
            author: 'John Lewis Gaddis',
            year: 2005,
            url: '',
            why: 'The current standard single-volume introduction by the Yale historian who has spent fifty years on this subject.',
          },
          {
            title: 'Postwar: A History of Europe Since 1945',
            author: 'Tony Judt',
            year: 2005,
            url: '',
            why: 'The other essential single volume, focused on Europe. Read the two in alternation.',
          },
          {
            title: 'Secondhand Time: The Last of the Soviets',
            author: 'Svetlana Alexievich',
            year: 2013,
            url: '',
            why: 'Nobel Prize-winning oral history of the Soviet collapse as ordinary Russians lived it. No Cold-War library is complete without Alexievich.',
          },
        ],
        articles: [
          {
            title: 'Cold War',
            source: 'Britannica',
            url: 'https://www.britannica.com/event/Cold-War',
            why: 'Concise editorial overview; useful as a one-sitting orientation.',
            year: null,
          },
          {
            title: 'Cold War',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Cold_War',
            why: 'Long, well-cited, with separate sections for every proxy theater.',
            year: null,
          },
          {
            title: 'The Fall of the Berlin Wall',
            source: 'Wilson Center Digital Archive',
            url: 'https://digitalarchive.wilsoncenter.org/search?search_api_fulltext=berlin%20wall%201989',
            why: 'Primary documents, curated: the Politburo transcripts, the Hungarian foreign ministry cables, the Stasi reports. Worth an afternoon.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'The Cold War',
            provider: 'Yale Open Courses (HIST 276, optional)',
            url: 'https://oyc.yale.edu/history',
            free: true,
            why: 'Yale\'s open-courses history page hosts several series that touch the Cold War era. Pair with Gaddis.',
          },
        ],
        primarySources: [
          {
            title: 'Kennan\'s Long Telegram (1946)',
            url: 'https://digitalarchive.wilsoncenter.org/document/kennans-long-telegram',
            why: 'George Kennan\'s cable from Moscow that laid out the doctrine of containment. Read it cold.',
          },
          {
            title: 'Churchill\'s "Iron Curtain" Speech (1946)',
            url: 'https://winstonchurchill.org/resources/speeches/1946-1963-elder-statesman/the-sinews-of-peace/',
            why: 'Fulton, Missouri, March 5, 1946. The speech that gave the era its phrase.',
          },
        ],
      },

      seeAlso: ['ww', 'industrial'],
      prereqs: ['ww'],
      leadsTo: [],

      chapterActivity: 'Evening seminars at the Bryant Park reading room, working through Alexievich\'s Secondhand Time in bilingual editions with Russian-speaking members of the NYC chapter.',

      sources: [
        'https://www.britannica.com/event/Cold-War',
        'https://en.wikipedia.org/wiki/Cold_War',
        'https://digitalarchive.wilsoncenter.org/',
      ],
      verifiedAt: '2026-04-22',
    },

  },
};
