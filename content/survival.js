// content/survival.js
// Batch: B12-life-skills-II-outdoor
// Last updated: 2026-04-23 by BATCH B12-life-skills-II-outdoor
//
// Topics from data.js: priorities_survival, fire

window.CONTENT = window.CONTENT || {};
window.CONTENT.survival = {
  subjectId: 'survival',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B12-life-skills-II-outdoor',
  topics: {

    priorities_survival: {
      id: 'priorities_survival',
      name: 'The Rule of Threes',
      level: 'Beginner',
      dek: 'Three minutes without air, three hours without shelter, three days without water, three weeks without food — the survivalist\'s clock.',
      readTime: '10 min',

      sections: ['The clock that decides everything', 'Stop, think, observe, plan', 'Shelter before fire', 'When to stay put'],
      body: [
        { type: 'lead', text: 'In 1972, a small Cessna carrying a Uruguayan rugby team crashed in the high Andes. Sixteen of the forty-five passengers and crew were alive seventy-two days later when two of them, having walked out of the mountains, brought help to the rest. The survivors had everything they needed to die — and they would have, except they prioritized correctly. Their first day was about shelter from cold. Their first weeks were about water from snow. The decision to make food from the bodies of the dead came after the more immediate problems were addressed. Survival, the field instructors at NOLS like to say, is not a problem to solve. It is a sequence to follow.' },
        { type: 'h2', text: 'The clock that decides everything' },
        { type: 'p', text: 'The Rule of Threes is a useful clinical estimate of how long a healthy adult can go without each of survival\'s four essentials. Three minutes without breathable air — for example, lost in smoke, or trapped under water. Three hours without shelter from severe weather — exposure to cold rain, hard wind, or extreme heat will kill before dehydration. Three days without water. Three weeks without food. The numbers are approximate and conditions vary, but the order of priority is correct: respond to the smallest number first. Most people who die in survival situations do so because they reverse the order — they spend their first hours hunting for food while shelter and water remain unaddressed.' },
        { type: 'h2', text: 'Stop, think, observe, plan' },
        { type: 'p', text: 'When you realize you are lost or in trouble, do nothing for a few minutes. The acronym taught at almost every survival school is STOP: Stop, Think, Observe, Plan. The instinct to keep moving in any direction is dangerous; the instinct to react to the panic is worse. Sit. Inventory what you have. Look at what is around you. Make a plan that uses the daylight you have left. The single best predictor of survival in wilderness emergencies is not skill or fitness. It is the ability to remain calm enough to choose the next action.' },
        { type: 'h2', text: 'Shelter before fire' },
        { type: 'p', text: 'In any cold, wet, or windy condition, shelter is the first task. Hypothermia can kill in hours; the wet hiker who decides to gather firewood before getting under cover often does not live to light the fire. The minimum useful shelter is anything that breaks the wind and gets you off the ground. A space blanket, a fallen tree, a rock overhang, a hasty lean-to of branches — these are not luxuries. They are the difference between a body that maintains 98 degrees and one that does not. Build the shelter before darkness; build it where you are, not where you would prefer to be.' },
        { type: 'h2', text: 'When to stay put' },
        { type: 'p', text: 'For most lost hikers, the right answer is to stay where you are. Your route was probably known to someone; search and rescue starts there. A moving target is much harder to find than a stationary one, and the stationary one can spend its energy on shelter and signal rather than navigation. The exceptions are narrow: if the location is genuinely unsafe, if rescue is unlikely (no one knew where you were going), or if you are within a confident half-day\'s walk of certain help. Most survival emergencies are best solved by sitting still and being noisy — bright signal mirror, loud whistle, a fire that smokes.' },
        { type: 'callout', text: 'Always tell a trusted person where you are going and when you will be back. Carry a map and compass and know how to use them. A satellite messenger like a Garmin inReach has saved more wilderness travelers in the past decade than any other piece of equipment. Survival is mostly prevention.' },
      ],

      keyTerms: ['Rule of Threes', 'STOP acronym', 'hypothermia', 'shelter priority', 'signal', 'water purification', 'situational awareness', 'survival kit'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@RaysVlog',
            title: 'Ray Mears — full channel',
            channel: 'Ray Mears',
            duration: 'variable',
            featured: true,
            why: 'The British bushcraft instructor whose decades of teaching set the modern standard. Calm, accurate, and deep on technique rather than gear.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@NOLSStudent',
            title: 'NOLS — National Outdoor Leadership School',
            channel: 'NOLS',
            duration: 'variable',
            featured: true,
            why: 'NOLS\'s instructional channel. Concise, evidence-based videos from the most respected wilderness school in North America.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@MorsKochanski',
            title: 'Mors Kochanski — full channel',
            channel: 'Karamat Wilderness Ways',
            duration: 'variable',
            featured: false,
            why: 'The Canadian boreal-forest bushcraft master, now passed but his videos preserved. Deep on the foundational skills.',
          },
        ],
        books: [
          {
            title: 'SAS Survival Handbook',
            author: 'John "Lofty" Wiseman',
            year: 1986,
            url: 'https://en.wikipedia.org/wiki/The_SAS_Survival_Handbook',
            why: 'The standard pocket reference. Now in its third edition; written by the SAS\'s former chief survival instructor.',
          },
          {
            title: 'Bushcraft 101',
            author: 'Dave Canterbury',
            year: 2014,
            url: 'https://en.wikipedia.org/wiki/Bushcraft',
            why: 'A modern American survival reference centered on the "5 Cs" of survivability — cutting tool, combustion, cordage, container, cover.',
          },
          {
            title: 'Deep Survival',
            author: 'Laurence Gonzales',
            year: 2003,
            url: 'https://en.wikipedia.org/wiki/Laurence_Gonzales',
            why: 'A psychology of who lives and who dies in survival situations. The most important book on the mental side of the field.',
          },
        ],
        articles: [
          {
            title: 'Survival skills',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Survival_skills',
            why: 'Comprehensive reference on the major skills, with notes on outdated practices to avoid.',
            year: null,
          },
          {
            title: 'Hypothermia',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Hypothermia',
            why: 'The most likely killer in any temperate-zone wilderness emergency. Worth knowing the stages cold.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'NOLS Wilderness Medicine',
            provider: 'National Outdoor Leadership School',
            url: 'https://www.nols.edu/en/wilderness-medicine/',
            free: false,
            why: 'The Wilderness First Aid (16-hour) and Wilderness First Responder (80-hour) courses are the standard certifications. Worth the cost if you spend serious time outdoors.',
          },
        ],
      },

      seeAlso: ['fire', 'mapreading', 'firstaid'],
      prereqs: [],
      leadsTo: ['fire'],
      chapterActivity: 'A late-fall "lost in the woods" tabletop drill at a Catskills lodge — small groups walk through real cases from search-and-rescue records; comes alive once leaves are off and disorientation in the woods becomes plausible to imagine.',
      sources: [
        'https://en.wikipedia.org/wiki/Survival_skills',
        'https://en.wikipedia.org/wiki/The_SAS_Survival_Handbook',
        'https://www.nols.edu/en/wilderness-medicine/',
      ],
      verifiedAt: '2026-04-23',
    },

    fire: {
      id: 'fire',
      name: 'Fire',
      level: 'Beginner',
      dek: 'A controlled fire is warmth, light, water-purification, signal, and morale — and the difference between knowing how to start one and not is small until it isn\'t.',
      readTime: '10 min',

      sections: ['The fire triangle', 'Tinder, kindling, fuel', 'A good lay', 'Methods, in order of difficulty'],
      body: [
        { type: 'lead', text: 'Some of the oldest hearths in the human archaeological record — at Wonderwerk Cave in South Africa, dated to about a million years ago — predate Homo sapiens by hundreds of thousands of years. Our ancestors were tending fire before they had the brains to write about it. The skill that defined our species, more than any tool, is the ability to make and keep a fire going on demand. The good news is that almost anyone can learn it. The bad news is that almost no one has practiced it lately, and the night you need to is a poor time to start.' },
        { type: 'h2', text: 'The fire triangle' },
        { type: 'p', text: 'A fire requires three things in the right proportions: heat, fuel, and oxygen. Remove any of the three and the fire dies. Almost every failure to start a fire is a failure on one of these axes — wet fuel that never reaches ignition temperature, a smothered structure that cannot breathe, an ignition source that cools too fast. The simple model is enough to diagnose almost every problem with a struggling fire and to fix it: more air for a smoldering fire, drier and finer fuel for a fire that will not catch, a bigger ignition source for a fire that keeps going out.' },
        { type: 'h2', text: 'Tinder, kindling, fuel' },
        { type: 'p', text: 'Every fire is built in three classes of material. Tinder catches a spark or holds a flame: the dry inner bark of birch or cedar, fluff from cattail heads, fine dry grass, dryer lint, char cloth, the cotton ball with petroleum jelly that lives in every prepared kit. Kindling carries the flame upward: pencil-thin dry twigs, split fatwood, slivers of resinous pine. Fuel keeps the fire alive: progressively larger wrist-thick branches, then split logs as the bed of coals develops. The mistake beginners make is to skip a class — to put kindling on tinder before the tinder is established, or to put fuel on kindling that has not built a real bed of glowing wood.' },
        { type: 'h2', text: 'A good lay' },
        { type: 'p', text: 'The teepee is the classic shape — tinder in the center, kindling stacked around it like a small wigwam, fuel added once the structure is burning. The lean-to lays a long support stick over a windbreak, with kindling leaning against it; useful in wind. The log-cabin is built like a child\'s log cabin around a tinder core; useful in wet conditions because it is more stable as it burns down. Choose your shape for the conditions, but build it carefully — most fires that fail have been built sloppily, with too much smothering material at the base.' },
        { type: 'h2', text: 'Methods, in order of difficulty' },
        { type: 'p', text: 'The right answer is to carry a Bic lighter — the most reliable, cheapest, lightest piece of survival equipment available. A waterproof match case is the second redundant layer. A ferrocerium rod (a "ferro rod" or "fire steel") throws bright sparks into prepared tinder and works wet and at high altitude where lighters can fail. The bow drill, the hand drill, the fire piston, the fire plough — primitive friction methods all — work but require an order of magnitude more skill, dry conditions, and the right woods. They are worth learning; they are not worth depending on. Carry the lighter.' },
        { type: 'callout', text: 'Build the fire small. Most beginners build fires twice as big as they need; the bigger fire wastes fuel, scorches whoever is sitting near it, and makes a poor cooking fire. A small steady fire is more useful than a roaring one and far easier to maintain.' },
      ],

      keyTerms: ['fire triangle', 'tinder', 'kindling', 'fuel', 'ferro rod', 'tinder bundle', 'bow drill', 'fire lay', 'feather stick'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@RaysVlog',
            title: 'Ray Mears — Fire-craft videos',
            channel: 'Ray Mears',
            duration: 'variable',
            featured: true,
            why: 'Mears\'s fire-by-friction videos are the canonical demonstration of bow-drill technique. Slow, careful, repeatable.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@MorsKochanski',
            title: 'Mors Kochanski — Fire and shelter',
            channel: 'Karamat Wilderness Ways',
            duration: 'variable',
            featured: true,
            why: 'Kochanski\'s "super shelter" and the friction-fire videos are the most-cited bushcraft references on the topic.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@CoalcrackerBushcraft',
            title: 'Coalcracker Bushcraft — full channel',
            channel: 'Dan Coppins',
            duration: 'variable',
            featured: true,
            why: 'A working bushcraft school in Pennsylvania. The fire-prep, ferro-rod, and feather-stick videos are excellent practical instruction.',
          },
        ],
        books: [
          {
            title: 'Bushcraft: Outdoor Skills and Wilderness Survival',
            author: 'Mors Kochanski',
            year: 1988,
            url: 'https://en.wikipedia.org/wiki/Mors_Kochanski',
            why: 'The Canadian boreal-forest classic. The fire chapter has been the standard reference for two generations of bushcraft teachers.',
          },
          {
            title: 'SAS Survival Handbook',
            author: 'John "Lofty" Wiseman',
            year: 1986,
            url: 'https://en.wikipedia.org/wiki/The_SAS_Survival_Handbook',
            why: 'The fire chapter covers improvised methods for nearly every climate.',
          },
          {
            title: 'The Bushcraft Field Guide to Trapping, Gathering & Cooking in the Wild',
            author: 'Dave Canterbury',
            year: 2015,
            url: 'https://en.wikipedia.org/wiki/Bushcraft',
            why: 'The first chapters cover fire as the precondition for cooking and water purification. Practical and well-illustrated.',
          },
        ],
        articles: [
          {
            title: 'Fire making',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Fire_making',
            why: 'A history of human fire-making methods, from friction to ferrocerium.',
            year: null,
          },
          {
            title: 'Bushcraft',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Bushcraft',
            why: 'The cultural and technical history of bushcraft as a distinct field, with a fire section.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'NOLS — Wilderness Skills',
            provider: 'National Outdoor Leadership School',
            url: 'https://www.nols.edu/',
            free: false,
            why: 'The most respected wilderness-skills curriculum in North America. Their courses include fire, shelter, and navigation in working contexts.',
          },
        ],
        tools: [
          {
            title: 'Ferrocerium rod',
            url: 'https://en.wikipedia.org/wiki/Ferrocerium',
            why: 'The most reliable backup ignition source. Throws 3,000-degree sparks; works wet and at altitude.',
          },
        ],
      },

      seeAlso: ['priorities_survival', 'mapreading', 'knots'],
      prereqs: ['priorities_survival'],
      leadsTo: [],
      chapterActivity: 'A fall "fire night" at a Hudson Valley campground — three lays, three methods, ferro-rod practice for everyone; comes alive in October once leaves are dry enough to make tinder gathering instructive.',
      sources: [
        'https://en.wikipedia.org/wiki/Fire_making',
        'https://en.wikipedia.org/wiki/Bushcraft',
        'https://en.wikipedia.org/wiki/The_SAS_Survival_Handbook',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
