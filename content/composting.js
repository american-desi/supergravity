// content/composting.js
// Batch: B12-life-skills-II-outdoor
// Last updated: 2026-04-23 by BATCH B12-life-skills-II-outdoor
//
// Topics from data.js: hot_comp, worm

window.CONTENT = window.CONTENT || {};
window.CONTENT.composting = {
  subjectId: 'composting',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B12-life-skills-II-outdoor',
  topics: {

    hot_comp: {
      id: 'hot_comp',
      name: 'Hot Composting',
      level: 'Beginner',
      dek: 'A managed pile reaches 130°F or more, kills weed seeds and pathogens, and turns kitchen scraps into garden gold in three months.',
      readTime: '9 min',

      sections: ['What heat does', 'The carbon-to-nitrogen ratio', 'Building a hot pile', 'Reading the temperature'],
      body: [
        { type: 'lead', text: 'In 1924 the British agronomist Sir Albert Howard, working in Indore in central India, watched local farmers build long, layered piles of crop residue and animal manure that became fragrant black humus in months instead of years. He called it the Indore method, and it became the foundation of the modern organic-farming movement. The method depends on one observation: a managed pile of organic matter, kept warm and moist and turned, will heat itself from inside, and the heat itself does most of the work.' },
        { type: 'h2', text: 'What heat does' },
        { type: 'p', text: 'The microbial communities that decompose organic matter generate heat as a byproduct of metabolism. Pile a few cubic feet of the right mixture and the inside of the pile rises within days to 130 to 160 degrees Fahrenheit. At those temperatures, weed seeds die, plant pathogens die, and a different community of thermophilic microbes takes over and accelerates decomposition. The pile finishes faster, smells better, and produces a more uniform compost than the slow cold version that just sits in a corner.' },
        { type: 'h2', text: 'The carbon-to-nitrogen ratio' },
        { type: 'p', text: 'Compost gardeners speak of "browns" and "greens." Browns are carbon-rich materials — dry leaves, straw, shredded cardboard, wood chips. Greens are nitrogen-rich — grass clippings, kitchen scraps, fresh manure, coffee grounds. The microbial chemistry wants roughly twenty-five to thirty parts carbon to one part nitrogen. By volume, the rough rule is two-to-one or three-to-one browns to greens. Too many greens and the pile turns slimy and smells of ammonia; too many browns and it does not heat at all and decomposes slowly.' },
        { type: 'h2', text: 'Building a hot pile' },
        { type: 'p', text: 'A pile that will heat needs roughly a cubic yard of material — about three feet on each side. Smaller and the heat dissipates; larger and the inside goes anaerobic. Layer browns and greens like a lasagna, water as you build (the pile should feel like a wrung-out sponge), and turn it every four or five days for the first few weeks. Each turn introduces oxygen and exposes the cooler outer layers to the hot center. After a month it should be unrecognizable as its components; after three months you have finished compost — dark, crumbly, smelling of forest floor.' },
        { type: 'h2', text: 'Reading the temperature' },
        { type: 'p', text: 'A long-stem compost thermometer, twenty dollars from any garden store, is the single most useful piece of compost equipment. A pile that climbs to 140 degrees in three days, holds for a week, then drops as you turn it, is doing what it should. A pile that never climbs needs more nitrogen, more moisture, or more mass. A pile that smells of ammonia needs more browns. A pile that smells like a swamp needs to be turned to introduce oxygen. Almost every compost problem is diagnosable from temperature and smell.' },
        { type: 'callout', text: 'Two things to keep out of a home compost pile: meat or dairy (the wrong microbes; attracts vermin) and pet feces (pathogens that survive even hot composting). Everything else from a kitchen — including bones, in a working hot pile — eventually becomes soil.' },
      ],

      keyTerms: ['thermophilic', 'C:N ratio', 'browns and greens', 'turning', 'aeration', 'humus', 'curing', 'mesophilic'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@selfsufficientme',
            title: 'Self Sufficient Me — Composting playlist',
            channel: 'Mark Valencia',
            duration: 'variable',
            featured: true,
            why: 'Valencia\'s composting videos are the visual equivalent of a working backyard system. Watch the hot-pile build before you build your first one.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@DavidTheGood',
            title: 'David the Good — Compost Everything playlist',
            channel: 'David Goodman',
            duration: 'variable',
            featured: true,
            why: 'Goodman\'s argument is that almost any organic matter belongs in a compost pile. The "Compost Everything" series is opinionated and useful.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@charlesdowding1nodig',
            title: 'Charles Dowding — Composting videos',
            channel: 'Charles Dowding',
            duration: 'variable',
            featured: true,
            why: 'Dowding\'s decades of side-by-side comparisons of compost methods. Calm, evidence-driven, and the standard reference for no-dig gardeners.',
          },
        ],
        books: [
          {
            title: 'The Rodale Book of Composting',
            author: 'Grace Gershuny & Deborah L. Martin',
            year: 1992,
            url: 'https://en.wikipedia.org/wiki/Rodale,_Inc.',
            why: 'The American standard reference. Now in a substantially updated 2018 edition; both editions are common in libraries.',
          },
          {
            title: 'The Humanure Handbook',
            author: 'Joseph Jenkins',
            year: 1995,
            url: 'https://en.wikipedia.org/wiki/Humanure',
            why: 'Strictly speaking outside the home garden, but the chapters on the science of thermophilic composting are the most accessible technical introduction in print. Free PDF on Jenkins\'s site.',
          },
          {
            title: 'An Agricultural Testament',
            author: 'Sir Albert Howard',
            year: 1940,
            url: 'https://en.wikipedia.org/wiki/Albert_Howard',
            why: 'The book that introduced the Indore method to the West and started the organic movement. Free in the public domain.',
          },
        ],
        articles: [
          {
            title: 'Compost',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Compost',
            why: 'Comprehensive reference on the chemistry, biology, and the major composting methods.',
            year: null,
          },
          {
            title: 'Composting at Home',
            source: 'US EPA',
            url: 'https://www.epa.gov/recycle/composting-home',
            why: 'The federal agency\'s plain-English guide. Good for the regulations and a baseline reference.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Master Composter Programs',
            provider: 'Cooperative Extension System',
            url: 'https://extension.umn.edu/composting',
            free: true,
            why: 'Many states offer free Master Composter certificates through their land-grant extensions. Find your state\'s equivalent.',
          },
        ],
        primarySources: [
          {
            title: 'An Agricultural Testament (full text)',
            url: 'https://soilandhealth.org/wp-content/uploads/01aglibrary/010138howardat/IAH/Howard.AnAgriculturalTestament.pdf',
            why: 'Howard\'s 1940 book in full, free, hosted by the Soil and Health Library.',
          },
        ],
      },

      seeAlso: ['worm', 'soil', 'gardening'],
      prereqs: [],
      leadsTo: ['worm'],
      chapterActivity: 'A spring compost-build morning at a Bushwick community garden — bring a bag of leaves; build a cubic yard of layered hot pile; comes alive in late April when fresh greens begin to outpace winter scraps.',
      sources: [
        'https://en.wikipedia.org/wiki/Compost',
        'https://www.epa.gov/recycle/composting-home',
        'https://en.wikipedia.org/wiki/Albert_Howard',
      ],
      verifiedAt: '2026-04-23',
    },

    worm: {
      id: 'worm',
      name: 'Vermicomposting',
      level: 'Intermediate',
      dek: 'A bin of red wigglers under the sink turns kitchen scraps into the most valuable compost there is — and asks for almost nothing in return.',
      readTime: '10 min',

      sections: ['Why worms', 'The right worm and the right bin', 'Feeding and harvesting', 'Worm castings as fertilizer'],
      body: [
        { type: 'lead', text: 'Mary Appelhof was a Michigan biology teacher who, in the 1970s, became frustrated that her household kitchen scraps had nowhere useful to go in a Northern winter. She started keeping a wooden box of red wiggler worms under the sink. The book she wrote about it, Worms Eat My Garbage, came out in 1982 and has now introduced four decades of households to vermicomposting — the surprisingly elegant system in which earthworms, not heat, do the work.' },
        { type: 'h2', text: 'Why worms' },
        { type: 'p', text: 'Vermicompost — the dark, granular castings that earthworms produce — is by every measure the most concentrated and biologically active compost a home gardener can make. Studies at Cornell and Ohio State have shown that small amounts of worm castings outperform much larger volumes of conventional compost in plant trials, with effects on plant growth that exceed what the simple nutrient analysis predicts. The microbial diversity of worm castings, and the trace plant hormones that pass through the worm gut, do more than feed plants — they prime them.' },
        { type: 'h2', text: 'The right worm and the right bin' },
        { type: 'p', text: 'The worm to use is Eisenia fetida, the red wiggler — a small, tolerant, surface-dwelling species that thrives in shallow bins of decomposing organic matter. The earthworms in your garden are different species (mostly Lumbricus terrestris) and will not survive in a bin. The bin itself is simple: a shallow plastic tote with air holes, a layer of moist shredded cardboard or newspaper for bedding, a pound or two of red wigglers from a worm farm or local seller. Keep it between fifty-five and seventy-five degrees, in shade, indoors or in a garage. A good bin has no smell.' },
        { type: 'h2', text: 'Feeding and harvesting' },
        { type: 'p', text: 'Red wigglers will eat about half their weight in kitchen scraps per day in optimal conditions. Bury small amounts in different corners of the bin so they have time to break down. Avoid meat, dairy, oil, citrus in quantity, and onions in quantity. The worms multiply to match the food supply, which is also their cap — they will not overrun a bin in normal household use. Harvesting after a few months is a matter of pushing the finished castings to one side, adding fresh bedding and food to the other, and waiting a couple of weeks for the worms to migrate.' },
        { type: 'h2', text: 'Worm castings as fertilizer' },
        { type: 'p', text: 'A handful of worm castings worked into a planting hole, or a tablespoon brewed into a quart of water as a tea, will visibly accelerate seedlings and houseplants. Unlike strong synthetic fertilizers, worm castings cannot burn roots or leaves; the nutrients are released slowly as soil microbes process them. Many serious vegetable gardeners run a worm bin in parallel with a hot compost pile precisely because the two products do different things — bulk soil amendment from the pile, microbial inoculant from the worms.' },
        { type: 'callout', text: 'A worm bin is the only food-scrap solution that works in an apartment with no yard. A small bin under the sink processes the daily output of one or two people, costs almost nothing to run, and produces, twice a year, the finest fertilizer available for houseplants and balcony pots.' },
      ],

      keyTerms: ['Eisenia fetida', 'red wiggler', 'castings', 'bedding', 'leachate', 'worm tea', 'vermicompost', 'continuous-flow bin'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@WormFarmAlchemy',
            title: 'Worm Farm Alchemy — full channel',
            channel: 'Sam Sycamore / various',
            duration: 'variable',
            featured: true,
            why: 'A working vermiculturist on real bin maintenance, harvesting, and troubleshooting. The most active practical channel in the field.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@theurbanworm',
            title: 'Urban Worm Company — full channel',
            channel: 'Urban Worm Company',
            duration: 'variable',
            featured: true,
            why: 'Steve Churchill\'s channel. Practical bin builds, continuous-flow systems, and clear answers to beginner questions.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@selfsufficientme',
            title: 'Self Sufficient Me — Worm farm videos',
            channel: 'Mark Valencia',
            duration: 'variable',
            featured: true,
            why: 'Valencia\'s outdoor worm farm and bathtub bin videos are the most-watched introductions for backyard composters.',
          },
        ],
        books: [
          {
            title: 'Worms Eat My Garbage',
            author: 'Mary Appelhof',
            year: 1982,
            url: 'https://en.wikipedia.org/wiki/Mary_Appelhof',
            why: 'The book that started the modern vermicomposting movement. Now in a 35th-anniversary edition revised by Appelhof\'s collaborators.',
          },
          {
            title: 'The Earth Moved: On the Remarkable Achievements of Earthworms',
            author: 'Amy Stewart',
            year: 2004,
            url: 'https://en.wikipedia.org/wiki/Amy_Stewart_(author)',
            why: 'A natural history of earthworms — Darwin to modern soil scientists. Read for context, not method.',
          },
          {
            title: 'Vermiculture Technology',
            author: 'Clive A. Edwards et al.',
            year: 2010,
            url: 'https://en.wikipedia.org/wiki/Vermicompost',
            why: 'The graduate-level reference. The chapters on vermicompost research and large-scale systems are the technical reading list.',
          },
        ],
        articles: [
          {
            title: 'Vermicompost',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Vermicompost',
            why: 'Comprehensive reference, with the research record on plant growth.',
            year: null,
          },
          {
            title: 'Worm Composting Basics',
            source: 'Cornell Cooperative Extension',
            url: 'https://compost.css.cornell.edu/worms/basics.html',
            why: 'Cornell\'s plain-English guide. The clearest free reference for setting up a first bin.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Vermicomposting',
            provider: 'NC State Extension',
            url: 'https://composting.ces.ncsu.edu/vermicomposting-2/',
            free: true,
            why: 'The most thorough free university extension course on vermiculture, with manuals for both household and institutional bins.',
          },
        ],
        tools: [
          {
            title: 'Red wiggler suppliers',
            url: 'https://en.wikipedia.org/wiki/Eisenia_fetida',
            why: 'Local worm-farm suppliers usually sell pounds for thirty to fifty dollars. Worth searching by zip code.',
          },
        ],
      },

      seeAlso: ['hot_comp', 'soil', 'gardening'],
      prereqs: ['hot_comp'],
      leadsTo: [],
      chapterActivity: 'A March worm-bin build at a Park Slope library — bring a plastic tote; leave with a bin, bedding, and a half-pound of red wigglers; this comes alive once kitchens warm enough that scraps accumulate quickly.',
      sources: [
        'https://en.wikipedia.org/wiki/Vermicompost',
        'https://compost.css.cornell.edu/worms/basics.html',
        'https://composting.ces.ncsu.edu/vermicomposting-2/',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
