// content/cleaning.js
// Batch: B11-life-skills-I
// Last updated: 2026-04-23 by BATCH B11-life-skills-I
//
// Topics from data.js: routines, stains

window.CONTENT = window.CONTENT || {};
window.CONTENT.cleaning = {
  subjectId: 'cleaning',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B11-life-skills-I',
  topics: {

    routines: {
      id: 'routines',
      name: 'Routines',
      level: 'Beginner',
      dek: 'A house stays clean not from heroic Saturdays but from small, consistent habits the residents barely notice they do.',
      readTime: '9 min',

      sections: ['The two minutes that prevent two hours', 'A daily and weekly skeleton', 'Seasonal work', 'Why routines beat motivation'],
      body: [
        { type: 'lead', text: 'In 1869 Catharine Beecher and her sister Harriet Beecher Stowe published The American Woman\'s Home, the first comprehensive English-language manual of household management. Their argument, novel at the time, was that running a house was a craft with principles, not a domestic mystery — and that the principles were teachable. Most modern advice on cleaning is still working out the implications. The single most important one is the same now as then: a clean house is the residue of small, repeated motions, not large, occasional ones.' },
        { type: 'h2', text: 'The two minutes that prevent two hours' },
        { type: 'p', text: 'The most useful single rule is the one David Allen put into Getting Things Done: if a task takes less than two minutes, do it now. Wipe the counter when you leave the kitchen. Hang up the coat when you walk in. Run the dishwasher before bed; empty it with the morning coffee. Each of these motions is trivial; the cumulative effect is a house that does not require a Saturday devoted to recovery. The hard part is not the motions themselves but the conviction that the small ones matter.' },
        { type: 'h2', text: 'A daily and weekly skeleton' },
        { type: 'p', text: 'A workable household routine has roughly three layers. Daily: dishes, kitchen counter, one load of laundry if needed, beds made, ten minutes of pickup before sleep. Weekly: bathrooms, vacuuming, mopping the kitchen, sheets, the visible dust. Monthly: refrigerator wipe-down, baseboards, oven, the stuff that builds quietly. The schedule matters less than the existence of one. Households where everyone knows whose Tuesday is the bathrooms are calmer than households where the bathrooms are no one\'s.' },
        { type: 'h2', text: 'Seasonal work' },
        { type: 'p', text: 'Twice a year the household needs the deeper pass that does not fit into a week — windows, behind the furniture, the closets, the seasonal swap of coats and shoes. The Victorians called the spring version "spring cleaning" because heating in winter left a year of soot in every room; the practice survives because it works. An autumn pass before the holidays is the natural twin. Two long Saturdays save many short, frustrated ones.' },
        { type: 'h2', text: 'Why routines beat motivation' },
        { type: 'p', text: 'The behavioral psychologist B.F. Skinner observed seventy years ago that habits, not feelings, do most of the work of a steady life. Cleaning is the canonical case. People who keep a clean house do not, on average, have stronger feelings about cleanliness than people who do not. They have more reliable habits. The implication is hopeful: you can build the house you want by building the routine, not by waiting to want it more. The motivation tends to follow the practice, not the other way around.' },
        { type: 'callout', text: 'A timer changes almost everything. Set it for fifteen minutes, work as fast as you can, stop when it rings. Almost any room becomes presentable in fifteen focused minutes; almost no room becomes presentable in three hours of vague intention.' },
      ],

      keyTerms: ['two-minute rule', 'habit stacking', 'maintenance vs deep cleaning', 'reset routine', 'spring cleaning', 'zone cleaning', 'minimum viable tidiness', 'cleaning cadence'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@CleanMySpace',
            title: 'Clean My Space — full channel',
            channel: 'Melissa Maker',
            duration: 'variable',
            featured: true,
            why: 'Melissa Maker has run a cleaning company for twenty years and built the most credible cleaning channel on YouTube. Start with the speed-cleaning routines.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@GoCleanCo',
            title: 'Go Clean Co — full channel',
            channel: 'Sarah McAllister',
            duration: 'variable',
            featured: true,
            why: 'A Calgary cleaning company that turned bleach-and-baking-soda fundamentals into an enormous following. Visual, opinionated, useful.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@KCBalanced',
            title: 'KC Davis (Struggle Care) — full channel',
            channel: 'KC Davis, LPC',
            duration: 'variable',
            featured: true,
            why: 'A licensed therapist on cleaning when motivation is hard. The "care tasks are morally neutral" framing is the gentlest version of the field.',
          },
        ],
        books: [
          {
            title: 'How to Clean Practically Anything',
            author: 'Consumer Reports',
            year: 2014,
            url: 'https://en.wikipedia.org/wiki/Consumer_Reports',
            why: 'The reference book for what actually works on what surface. Tested, neutral, and free of brand sponsorship.',
          },
          {
            title: 'The Life-Changing Magic of Tidying Up',
            author: 'Marie Kondo',
            year: 2010,
            url: 'https://en.wikipedia.org/wiki/The_Life-Changing_Magic_of_Tidying_Up',
            why: 'The KonMari method is debated; the underlying argument — that tidying is decisions about what to keep, not where to put it — is sound.',
          },
          {
            title: 'Home Comforts: The Art and Science of Keeping House',
            author: 'Cheryl Mendelson',
            year: 1999,
            url: 'https://en.wikipedia.org/wiki/Cheryl_Mendelson',
            why: 'A philosophy professor turned authority on housekeeping. Eight hundred pages; the standard reference for everything from sheets to silver.',
          },
        ],
        articles: [
          {
            title: 'Housekeeping',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Housekeeping',
            why: 'Comprehensive reference, including the institutional and industrial sides of the practice.',
            year: null,
          },
          {
            title: 'Cleaning Schedules — A Realistic Approach',
            source: 'Good Housekeeping Institute',
            url: 'https://www.goodhousekeeping.com/home/cleaning/',
            why: 'A century-old testing institute that still publishes practical, evidence-based household guides.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'How to Keep House While Drowning (workshop series)',
            provider: 'Struggle Care',
            url: 'https://www.strugglecare.com',
            free: false,
            why: 'KC Davis\'s workshop and book on care tasks for the chronically overwhelmed. Compassionate and practical.',
          },
        ],
      },

      seeAlso: ['stains', 'timemgmt', 'finance'],
      prereqs: [],
      leadsTo: ['stains'],
      chapterActivity: 'A January "reset Saturday" at a Crown Heights laundromat-café — bring a load of laundry, leave with a printed weekly cleaning schedule.',
      sources: [
        'https://en.wikipedia.org/wiki/Housekeeping',
        'https://en.wikipedia.org/wiki/The_Life-Changing_Magic_of_Tidying_Up',
        'https://en.wikipedia.org/wiki/Consumer_Reports',
      ],
      verifiedAt: '2026-04-23',
    },

    stains: {
      id: 'stains',
      name: 'Stain Removal',
      level: 'Beginner',
      dek: 'Most stains come out if you reach them in the first hour and choose the right solvent — and most stains do not, because we wait.',
      readTime: '9 min',

      sections: ['Like dissolves like', 'The four classes of stain', 'A small kit that handles almost everything', 'When to give up'],
      body: [
        { type: 'lead', text: 'Every clean line on a freshly laundered shirt is the result of a centuries-old chemistry experiment. The Phoenicians washed wool in fermented urine for the ammonia. Roman fullers stomped togas in vats of stale bath water. The first synthetic detergent was invented in Germany during World War I to replace soap supplies blockaded by the British. The principle behind all of it has not changed: a stain is a substance held to a fiber by chemistry, and removal is the matching chemistry that lets the substance go.' },
        { type: 'h2', text: 'Like dissolves like' },
        { type: 'p', text: 'The most useful single fact in stain removal is the chemist\'s rule of thumb: like dissolves like. Water dissolves polar substances — sugar, salt, juice, blood. Oil dissolves nonpolar substances — grease, butter, lipstick, motor oil. Detergent has both kinds of ends and bridges the two, which is why a quick rinse with cold water and a dab of dish soap will defeat most everyday spills. The mistake is to reach for hot water on a protein stain (it cooks the protein into the fiber) or for water on an oil stain (it spreads the oil and seals it in).' },
        { type: 'h2', text: 'The four classes of stain' },
        { type: 'p', text: 'For practical purposes, almost every household stain falls into one of four classes. Protein stains — blood, egg, dairy, sweat, grass — want cold water and an enzymatic detergent; never hot water until the stain is gone. Oil stains — grease, butter, salad dressing, lipstick — want dish soap or an oil-cutting prewash, applied dry, then warm water. Tannin stains — coffee, tea, red wine, fruit — want cool water, then dish soap, then if needed an oxygen bleach (sodium percarbonate). Dye stains — ballpoint ink, mustard, washable marker — are the hardest; rubbing alcohol or hairspray can lift fresh ones, but old ones often will not come out.' },
        { type: 'h2', text: 'A small kit that handles almost everything' },
        { type: 'p', text: 'You do not need a cabinet of single-purpose products. A serious cleaning kit fits on one shelf: liquid dish soap, an enzymatic laundry detergent, white vinegar, baking soda, oxygen bleach (OxiClean or generic), rubbing alcohol, a stiff toothbrush, and a stack of clean white cotton rags. With these, applied promptly and with the right solvent for the stain class, you can defeat ninety percent of household disasters. The other ten percent need professional dry cleaning or, occasionally, acceptance.' },
        { type: 'h2', text: 'When to give up' },
        { type: 'p', text: 'Some stains are forever. Old set protein stains — blood that went through the dryer, sweat in white cotton — often will not come out. Tannins in silk are nearly always permanent. Pigment from rust, permanent marker, or wood stain has bonded with the fiber chemically. The honest move is to know when something is finished, and either repurpose the garment or let it go. The pursuit of an unrecoverable stain is one of the most reliable ways to ruin a piece of clothing that was almost still useful.' },
        { type: 'callout', text: 'On any unfamiliar fabric, test the cleaning solvent on a hidden seam first. Five seconds of testing has saved more shirts than any other single piece of cleaning advice.' },
      ],

      keyTerms: ['enzymatic detergent', 'oxygen bleach', 'tannin', 'protein stain', 'oil-based stain', 'dye stain', 'pre-treatment', 'colorfastness'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@CleanMySpace',
            title: 'Clean My Space — Stain Removal playlist',
            channel: 'Melissa Maker',
            duration: 'variable',
            featured: true,
            why: 'Maker\'s stain videos work through the four classes with real garments. The blood, red wine, and grease videos are the canonical references.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@GoCleanCo',
            title: 'Go Clean Co — Stain & Laundry videos',
            channel: 'Sarah McAllister',
            duration: 'variable',
            featured: true,
            why: 'McAllister\'s commitment to bleach and the "Tide and a soak" method is opinionated and effective. Worth watching even if you disagree.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@AmericanCleaningInstitute',
            title: 'American Cleaning Institute — full channel',
            channel: 'American Cleaning Institute',
            duration: 'variable',
            featured: false,
            why: 'The trade association of detergent makers. Less personality than the YouTubers; more technically careful.',
          },
        ],
        books: [
          {
            title: 'How to Clean Practically Anything',
            author: 'Consumer Reports',
            year: 2014,
            url: 'https://en.wikipedia.org/wiki/Consumer_Reports',
            why: 'The standard reference. The stain-removal chart in the back is the most useful single page on the subject in print.',
          },
          {
            title: 'Home Comforts',
            author: 'Cheryl Mendelson',
            year: 1999,
            url: 'https://en.wikipedia.org/wiki/Cheryl_Mendelson',
            why: 'Mendelson\'s laundry chapters are unrivaled. The reference book for fabric and stain together.',
          },
          {
            title: 'Talking Dirty Laundry with the Queen of Clean',
            author: 'Linda Cobb',
            year: 2003,
            url: 'https://en.wikipedia.org/wiki/Cleaning',
            why: 'The "Queen of Clean" syndicated columns collected. Old-fashioned, practical, full of remedies.',
          },
        ],
        articles: [
          {
            title: 'Stain removal',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Stain_removal',
            why: 'A practical reference with the chemistry of detergent action.',
            year: null,
          },
          {
            title: 'Stain Removal Guide',
            source: 'American Cleaning Institute',
            url: 'https://www.cleaninginstitute.org/cleaning-tips/clothes/stain-removal-guide',
            why: 'A free, alphabetical stain-by-stain guide from the trade association. The most reliable quick reference online.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Laundry Basics',
            provider: 'Tide / P&G Learning',
            url: 'https://tide.com/en-us/how-to-wash-clothes',
            free: true,
            why: 'A detergent maker\'s free guide. Skip the marketing; the technical sections are genuinely useful.',
          },
        ],
        tools: [
          {
            title: 'OxiClean (sodium percarbonate)',
            url: 'https://en.wikipedia.org/wiki/Sodium_percarbonate',
            why: 'The oxygen bleach behind most stain-removal magic. Generic versions work identically.',
          },
        ],
      },

      seeAlso: ['routines', 'chemistry', 'sewing'],
      prereqs: ['routines'],
      leadsTo: [],
      chapterActivity: 'A spring "stains lab" at a Brooklyn community center — bring a stained shirt, leave knowing which class of stain it is and how to defeat its siblings.',
      sources: [
        'https://en.wikipedia.org/wiki/Stain_removal',
        'https://www.cleaninginstitute.org/cleaning-tips/clothes/stain-removal-guide',
        'https://en.wikipedia.org/wiki/Consumer_Reports',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
