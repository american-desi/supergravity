// content/wine.js
// Batch: B09-kitchen-arts
// Last updated: 2026-04-23 by BATCH B09-kitchen-arts
//
// Topics this subject must cover (from data.js):
//   Core: varietals, tasting

window.CONTENT = window.CONTENT || {};
window.CONTENT.wine = {
  subjectId: 'wine',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B09-kitchen-arts',
  topics: {

    varietals: {
      id: 'varietals',
      name: 'Grape Varietals',
      level: 'Intermediate',
      dek: 'A thousand-plus named grapes; about twenty that explain ninety percent of the wine you will ever drink.',
      readTime: '13 min',

      sections: ['A vine is its own clock', 'The international reds', 'The international whites', 'The regional specialists', 'Terroir, the grape\'s accent'],
      body: [
        { type: 'lead', text: 'On a limestone hillside in the Côte d\'Or, eighty miles southeast of Paris, a single species of grape has been planted and replanted for a thousand years. The Cistercian monks of Cîteaux, during the middle ages, walked the same hillsides season after season and watched closely enough to notice that one terrace produced consistently better wine than the one next to it — even with the same grape and the same year. They called the good terraces climats. Burgundy is still divided along their maps. The grape is Pinot Noir. The land is what makes it what it is.' },
        { type: 'h2', text: 'A vine is its own clock' },
        { type: 'p', text: 'There are more than ten thousand named grape varieties on record. Perhaps a thousand of them are in significant commercial production. Twenty explain the wines most people drink: the six international reds (Cabernet Sauvignon, Merlot, Pinot Noir, Syrah, Grenache, Sangiovese); the six international whites (Chardonnay, Sauvignon Blanc, Riesling, Pinot Gris, Gewürztraminer, Chenin Blanc); and another handful of regional specialists that define their homelands. Learning the twenty is the work of a year, and it is enough to understand a wine list.' },
        { type: 'h2', text: 'The international reds' },
        { type: 'p', text: 'Cabernet Sauvignon is the grape of Bordeaux\'s left bank and Napa\'s famous cabs — thick-skinned, high in tannin, dark fruit, long-lived. Merlot is softer, plum and chocolate, the right-bank cousin. Pinot Noir is the high-maintenance genius: thin-skinned, cherry and earth, at its finest in Burgundy. Syrah (or Shiraz) is peppery and meaty — the Rhône in France, Barossa in Australia. Grenache is warm, strawberry and spice, the backbone of Châteauneuf-du-Pape. Sangiovese is the Tuscan sunburst — the grape of Chianti, Brunello, and Vino Nobile di Montepulciano.' },
        { type: 'h2', text: 'The international whites' },
        { type: 'p', text: 'Chardonnay is the whitest white — a near-neutral grape whose character is mostly the winemaker\'s hand. Unoaked (Chablis, cold fermentation) it is flint and green apple; oaked (California, malolactic fermentation) it is butter and toasted nut. Sauvignon Blanc is grass, grapefruit, and gooseberry — at its sharpest in the Loire (Sancerre) and New Zealand\'s Marlborough. Riesling is underappreciated: a grape capable of bone-dry and heavenly-sweet, the signature of Germany\'s Mosel. Pinot Gris (Pinot Grigio in Italy) is light and crisp; Gewürztraminer is lychee and rose; Chenin Blanc swings between dry Vouvray and the greatest sweet wines in Anjou.' },
        { type: 'h2', text: 'The regional specialists' },
        { type: 'p', text: 'Nebbiolo — the grape of Barolo and Barbaresco — is tar and roses, austere young, extraordinary old. Tempranillo is the Spanish workhorse, the grape of Rioja and Ribera del Duero. Malbec thrives in Argentina\'s high-altitude Mendoza, deep and fruited. Touriga Nacional builds Portuguese Port. Albariño makes the salt-air whites of Galicia. Assyrtiko is the volcanic island grape of Santorini. Each of these is somebody\'s favorite wine. Learning them unlocks an entire region at a time.' },
        { type: 'h2', text: 'Terroir, the grape\'s accent' },
        { type: 'p', text: 'The same grape planted in different places produces noticeably different wines. Pinot Noir in Burgundy tastes of mushroom and red fruit; in Oregon\'s Willamette Valley it tastes of cherry and earth; in Sonoma\'s Russian River it is riper, with darker fruit. The grape is one variable; the soil, slope, altitude, climate, and farming practice are all others. Terroir is the French word for the entire package — the reason the same vine speaks with a regional accent. Every serious wine education, in the end, is an education in terroir.' },
        { type: 'callout', text: 'The twelve "international varieties" make up roughly two-thirds of the wine in any American wine shop. Learning them by tasting four a month is a one-year curriculum. Learning them by memorizing a book is a ten-year misery.' },
      ],

      keyTerms: ['varietal', 'terroir', 'tannin', 'malolactic fermentation', 'Cabernet Sauvignon', 'Pinot Noir', 'Chardonnay', 'Riesling', 'climat', 'indigenous variety'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@WineFolly',
            title: 'Wine Folly — full channel',
            channel: 'Wine Folly',
            duration: 'variable',
            featured: true,
            why: 'Madeline Puckette, a Court of Master Sommeliers–certified educator, runs the most-followed wine-education channel on YouTube. Clear, visual, approachable.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@KonstantinBaum',
            title: 'Konstantin Baum MW — full channel',
            channel: 'Konstantin Baum',
            duration: 'variable',
            featured: true,
            why: 'A Master of Wine filming serious tastings and region deep-dives from his German cellar. The best advanced-amateur channel on YouTube.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.netflix.com/title/70275779',
            title: 'Somm (documentary series)',
            channel: 'Netflix / Forgotten Man Films',
            duration: '93:00',
            featured: true,
            why: 'Jason Wise\'s 2012 documentary following four candidates through the Master Sommelier exam. Still the best popular introduction to serious wine study.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@MattWalls',
            title: 'Matt Walls — Rhône specialist',
            channel: 'Matt Walls',
            duration: 'variable',
            featured: false,
            why: 'A Decanter magazine editor on Syrah, Grenache, and the Rhône\'s appellations. Region-deep rather than broadly introductory.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@JamesSucklingTV',
            title: 'James Suckling — producer interviews',
            channel: 'James Suckling',
            duration: 'variable',
            featured: false,
            why: 'The long-time Wine Spectator critic\'s interviews with winemakers. Useful for hearing specific producers explain their choices.',
          },
        ],
        books: [
          {
            title: 'The Oxford Companion to Wine',
            author: 'Jancis Robinson (ed.)',
            year: 1994,
            url: 'https://www.jancisrobinson.com/ocw',
            why: 'The reference — four thousand entries on grapes, regions, and the history of winemaking. Every serious wine book written since cites it. Fifth edition, 2023.',
          },
          {
            title: 'Wine Grapes',
            author: 'Jancis Robinson, Julia Harding, José Vouillamoz',
            year: 2012,
            url: 'https://www.jancisrobinson.com/wine-grapes',
            why: 'A 1,200-page taxonomy of 1,368 grape varieties, including DNA parentage. The definitive reference for varietals, written by the discipline\'s standard-setter.',
          },
          {
            title: 'The World Atlas of Wine',
            author: 'Hugh Johnson, Jancis Robinson',
            year: 1971,
            url: 'https://www.jancisrobinson.com/awa',
            why: 'The atlas — region-by-region maps and tasting context. Now in its eighth edition (2019). If the Oxford Companion is a dictionary, this is the gazetteer.',
          },
          {
            title: 'The Wine Bible',
            author: 'Karen MacNeil',
            year: 2001,
            url: 'https://www.workman.com/products/the-wine-bible-3rd-edition',
            why: 'The most readable single-volume introduction. MacNeil\'s American voice and comprehensive scope make it the book that turns drinkers into students. Third edition, 2022.',
          },
          {
            title: 'Windows on the World Complete Wine Course',
            author: 'Kevin Zraly',
            year: 1985,
            url: 'https://www.kevinzraly.com/',
            why: 'The longest-running American wine-education book. Zraly taught the course at Windows on the World atop the World Trade Center for seventeen years; the curriculum still works.',
          },
        ],
        articles: [
          {
            title: 'Wine',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Wine',
            why: 'Overview, history, chemistry, and major regions. Well-cited with reading pointers to the classical texts.',
            year: null,
          },
          {
            title: 'Jancis Robinson',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Jancis_Robinson',
            why: 'The biography of the discipline\'s most-cited author. Useful context before reading the Oxford Companion.',
            year: null,
          },
          {
            title: 'List of grape varieties',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/List_of_grape_varieties',
            why: 'A catalog with links. Not a narrative, but a reliable starting list for anyone tracking which varieties are planted where.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'WSET Level 1 / Level 2 Award in Wines',
            provider: 'Wine & Spirit Education Trust',
            url: 'https://www.wsetglobal.com/qualifications/wines/',
            free: false,
            why: 'The global entry-level wine qualification. The Level 2 course is the one most serious amateurs take; it pairs a textbook, a tasting curriculum, and an exam.',
          },
          {
            title: 'Court of Master Sommeliers — Introductory Course',
            provider: 'Court of Master Sommeliers Americas',
            url: 'https://www.mastersommeliers.org/pages/court-master-sommeliers-americas-introductory',
            free: false,
            why: 'The first rung of the sommelier ladder, two days of intensive instruction. Prep materials are public; the course itself is paid.',
          },
          {
            title: 'Jancis Robinson — Purple Pages (resources)',
            provider: 'Jancis Robinson',
            url: 'https://www.jancisrobinson.com/',
            free: false,
            why: 'The largest online wine-writing archive in English, running since 1999. Subscribers get the full archive; the public side runs major articles and glossaries.',
          },
        ],
        tools: [
          {
            title: 'A decent wine glass (Zalto or Gabriel-Glas)',
            url: 'https://en.wikipedia.org/wiki/Wine_glass',
            why: 'A thin-rimmed, tulip-shaped glass concentrates aromatics and changes how a wine tastes. Not marketing — measurable.',
          },
          {
            title: 'The Jancis Robinson wine-glass study archive',
            url: 'https://www.jancisrobinson.com/articles',
            why: 'Robinson\'s long-running head-to-head glass tests are the only rigorous public evidence on whether glassware matters. Spoiler: it does.',
          },
        ],
      },

      seeAlso: ['tasting', 'aged', 'vinegar', 'cocktails'],
      prereqs: [],
      leadsTo: ['tasting'],

      chapterActivity: 'A monthly "twelve grapes, twelve months" club at a Cobble Hill wine shop — each session covers one international variety in two bottles (an Old World and a New World).',

      sources: [
        'https://en.wikipedia.org/wiki/Wine',
        'https://en.wikipedia.org/wiki/Jancis_Robinson',
        'https://www.jancisrobinson.com/',
        'https://www.mastersommeliers.org/',
      ],
      verifiedAt: '2026-04-23',
    },

    tasting: {
      id: 'tasting',
      name: 'How to Taste',
      level: 'Intermediate',
      dek: 'See, smell, sip — a methodical three-step that sounds fussy until you start catching things you could not catch before.',
      readTime: '12 min',

      sections: ['The deductive tasting grid', 'See: what the color tells you', 'Smell: the nose carries most of the work', 'Sip: where the structure lives', 'What tasting is for, honestly'],
      body: [
        { type: 'lead', text: 'In 1976, a London-based American wine merchant named Steven Spurrier organized a blind tasting at the Hôtel Intercontinental in Paris, pitting ten of the best-regarded French wines against a dozen obscure Californians. Nine French judges, all luminaries in the trade, scored the wines without knowing which was which. A Stag\'s Leap Cabernet from Napa beat every Bordeaux on the table. A Chateau Montelena Chardonnay beat every white Burgundy. The trade in France did not take the result well. The point was not that California made better wine. The point was that tasting — when it is honest — reveals what is in the glass, not what is on the label.' },
        { type: 'h2', text: 'The deductive tasting grid' },
        { type: 'p', text: 'The Court of Master Sommeliers teaches a structured deductive grid: sight, nose, palate, initial conclusion, final conclusion. The point is not to produce a flourish of adjectives. The point is to narrow a wine by elimination — Old World or New, warm climate or cool, likely grape, likely region, approximate age. A sommelier candidate, blind, is expected to place a wine within six words to pass. Most drinkers who practice the grid end up correctly identifying a grape on about the fifth try. This is encouraging.' },
        { type: 'h2', text: 'See: what the color tells you' },
        { type: 'p', text: 'Tilt the glass against a white surface. A young red is ruby or purple; an old red fades to garnet and then to brick-brown at the rim. A young white is pale straw; an old white deepens to gold and then to amber. A thin, watery rim suggests a cool-climate wine; a deep, dense color suggests a warm one. A Pinot Noir is almost always translucent; a Malbec almost never is. Five seconds of color gives you half a dozen clues before you sniff.' },
        { type: 'h2', text: 'Smell: the nose carries most of the work' },
        { type: 'p', text: 'Swirl, sniff. The human tongue distinguishes five tastes; the human nose distinguishes thousands of aromas. Almost everything we call "flavor" in wine is actually smell, read through the retronasal passage as we swallow. A disciplined taster notes primary aromas (the grape itself — fruit, floral, herbal), secondary aromas (fermentation — yeast, cream, butter), and tertiary aromas (age — mushroom, leather, tobacco, honey). A young wine is almost all primary. An old wine is almost all tertiary. The middle is the interesting territory.' },
        { type: 'h2', text: 'Sip: where the structure lives' },
        { type: 'p', text: 'Hold a small sip in the mouth. Acidity shows up as a tightening in the cheeks and under the jaw. Tannin shows up as a drying sensation on the gums. Alcohol shows up as a warmth in the chest. Body is the weight of the wine on the tongue. Length is how long the flavor sits after you swallow. Sweetness and bitterness are tongue-tastes. Five structural axes, each one an observation, and the structure is what tells you a wine\'s climate, its age, and most of its quality.' },
        { type: 'h2', text: 'What tasting is for, honestly' },
        { type: 'p', text: 'The point of structured tasting is not to impress anyone at a dinner party. The point is to notice. A drinker who practices the grid notices more with every glass — more in the wine and, eventually, more in food, tea, coffee, and the sea air. Tasting is a training in attention. It happens to be a particularly enjoyable one. And unlike most disciplines, it rewards you in the currency of the practice itself: the more you pay attention, the more you taste.' },
        { type: 'quote', text: 'The first taste tells you only what wine you are drinking. The second tells you who you are.', cite: 'Hugh Johnson' },
      ],

      keyTerms: ['deductive tasting', 'primary aromas', 'secondary aromas', 'tertiary aromas', 'retronasal', 'tannin', 'acidity', 'body', 'length', 'finish'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@KonstantinBaum',
            title: 'Konstantin Baum MW — blind-tasting deep dives',
            channel: 'Konstantin Baum',
            duration: 'variable',
            featured: true,
            why: 'A Master of Wine walks through his own blind-tasting reasoning on camera — colour, nose, palate, conclusion. The clearest working example of the deductive grid on YouTube.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.netflix.com/title/70275779',
            title: 'Somm (2012) and Somm: Into the Bottle',
            channel: 'Netflix / Forgotten Man Films',
            duration: '90:00 each',
            featured: true,
            why: 'Jason Wise\'s documentary series follows candidates through the Master Sommelier blind-tasting exam. The best popular window into what serious tasting looks like.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@WineFolly',
            title: 'Wine Folly — How to Taste Wine',
            channel: 'Wine Folly',
            duration: 'variable',
            featured: true,
            why: 'Madeline Puckette\'s four-minute tutorials on the mechanics — swirl, sniff, sip — are the easiest entry for a first-time taster. Honest about what the grid does and does not measure.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ScottsonWine',
            title: 'Scotts on Wine — tasting tutorials',
            channel: 'Scotts on Wine',
            duration: 'variable',
            featured: false,
            why: 'A Court-of-Master-Sommeliers candidate demonstrating deductive tastings in real time. Teaches the pacing the exam expects.',
          },
        ],
        books: [
          {
            title: 'The Oxford Companion to Wine',
            author: 'Jancis Robinson (ed.)',
            year: 1994,
            url: 'https://www.jancisrobinson.com/ocw',
            why: 'The tasting entry is the standard definition of terminology; the fault entries are the canonical reference for identifying brett, TCA, and oxidation.',
          },
          {
            title: 'The Wine Bible',
            author: 'Karen MacNeil',
            year: 2001,
            url: 'https://www.workman.com/products/the-wine-bible-3rd-edition',
            why: 'MacNeil\'s "Mastering Wine" chapters are the best writerly introduction to tasting as a practice — not a test.',
          },
          {
            title: 'Wine Tasting: A Professional Handbook',
            author: 'Ronald S. Jackson',
            year: 2002,
            url: 'https://www.elsevier.com/books/wine-tasting/jackson/978-0-12-801813-2',
            why: 'The academic reference — Jackson is a plant biologist and wine chemist. Dry, rigorous, the book the scientists in the field actually cite.',
          },
          {
            title: 'The Judgment of Paris: California vs. France and the Historic 1976 Paris Tasting That Revolutionized Wine',
            author: 'George M. Taber',
            year: 2005,
            url: 'https://www.simonandschuster.com/books/Judgment-of-Paris/George-M-Taber/9780743247528',
            why: 'The Time magazine reporter who was the only journalist present at the Paris tasting. The best popular account of the event that changed how the world thinks about tasting.',
          },
        ],
        articles: [
          {
            title: 'Wine tasting',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Wine_tasting',
            why: 'History and methodology, with careful notes on the blind-tasting literature on expert reliability. A sobering read for anyone prone to taking a gold medal seriously.',
            year: null,
          },
          {
            title: 'Wine tasting descriptors',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Wine_tasting_descriptors',
            why: 'An alphabetical glossary of the vocabulary. Sourced from MacNeil, Robinson, and the WSET curriculum.',
            year: null,
          },
          {
            title: 'Court of Master Sommeliers Tasting Framework',
            source: 'Court of Master Sommeliers Americas',
            url: 'https://www.mastersommeliers.org/',
            why: 'The institution that set the deductive framework most American sommeliers use. Public resources include the framework itself and the criteria for each certification level.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'WSET Level 2 & Level 3 Awards in Wines',
            provider: 'Wine & Spirit Education Trust',
            url: 'https://www.wsetglobal.com/qualifications/wines/',
            free: false,
            why: 'The Level 3 course teaches the WSET\'s Systematic Approach to Tasting — the international reference method. Taught worldwide, pared with structured tasting practice.',
          },
          {
            title: 'Master Sommelier exam preparation (free materials)',
            provider: 'Guild of Sommeliers',
            url: 'https://www.guildsomm.com/',
            free: false,
            why: 'The Guild of Sommeliers\' study site — flashcards, tasting grids, region maps. The de facto study library for candidates at every level.',
          },
        ],
        tools: [
          {
            title: 'A proper tasting glass (ISO 3591)',
            url: 'https://en.wikipedia.org/wiki/ISO_3591',
            why: 'The neutral ISO glass is the standard for structured tastings. Every classroom in the WSET and Court of Master Sommeliers uses it.',
          },
          {
            title: 'A wine aroma wheel',
            url: 'https://www.winearomawheel.com/',
            why: 'Ann Noble\'s UC Davis 1984 taxonomy, now a canonical reference. A printable wheel is the tasting equivalent of a first dictionary.',
          },
        ],
      },

      seeAlso: ['varietals', 'aged', 'beans', 'classics'],
      prereqs: ['varietals'],
      leadsTo: [],

      chapterActivity: 'A "three blind, one night" tasting at a Carroll Gardens wine bar — three bottles poured from decanters, members walk the grid together, the host reveals at the end.',

      sources: [
        'https://en.wikipedia.org/wiki/Wine_tasting',
        'https://en.wikipedia.org/wiki/Wine_tasting_descriptors',
        'https://www.mastersommeliers.org/',
        'https://www.wsetglobal.com/',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
