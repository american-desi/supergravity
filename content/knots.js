// content/knots.js
// Batch: B12-life-skills-II-outdoor
// Last updated: 2026-04-23 by BATCH B12-life-skills-II-outdoor
//
// Topics from data.js: essential, uses

window.CONTENT = window.CONTENT || {};
window.CONTENT.knots = {
  subjectId: 'knots',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B12-life-skills-II-outdoor',
  topics: {

    essential: {
      id: 'essential',
      name: 'The Essential Knots',
      level: 'Beginner',
      dek: 'A short list of about ten knots, learned cold, will handle nearly every rope problem outside a working ship or a climbing wall.',
      readTime: '10 min',

      sections: ['What a knot actually does', 'The first four', 'The next six', 'How to learn them'],
      body: [
        { type: 'lead', text: 'A 50,000-year-old fragment of fiber cord, knotted twice, was recovered from a Neanderthal site in southeastern France in 2020 — the oldest direct evidence of human knot tying. The knot in question would not look unfamiliar to a modern sailor. Across fifty thousand years, the same handful of basic configurations of bent and twisted rope have done the work of fastening every culture\'s tents, boats, packs, and animals. Almost everything you might need to do with a rope is one of about ten knots.' },
        { type: 'h2', text: 'What a knot actually does' },
        { type: 'p', text: 'A knot, in the strict sense, is a configuration of rope that holds a load by friction — the rope pinches itself against itself, and the harder you pull, the tighter the pinch. A bend joins two ropes together. A hitch attaches a rope to an object. A loop creates a fixed eye in the rope. Every knot is rated by three properties: how easy it is to tie, how reliably it holds, and how easy it is to untie afterward. Almost no knot scores perfectly on all three; choosing the right knot is choosing the right tradeoff.' },
        { type: 'h2', text: 'The first four' },
        { type: 'p', text: 'If you learn only four knots, learn these. The bowline (#1010 in Ashley\'s book) makes a fixed loop at the end of a rope; it is the workhorse of sailing, rescue, and almost any application where you need a loop that will hold under load and untie easily afterward. The clove hitch attaches a rope to a post or rail, easy to tie and adjust. The figure-eight is the climbing world\'s standard tie-in knot — easy to inspect, holds bombproof. The square knot (reef knot) joins two ropes of equal diameter for non-critical tasks like reefing a sail or tying a parcel; it is famously not strong enough for serious loads.' },
        { type: 'h2', text: 'The next six' },
        { type: 'p', text: 'Beyond those four, six more cover almost every remaining situation. The taut-line hitch (sometimes called the midshipman\'s hitch) makes an adjustable loop along a line — for guying out a tarp or tent, it is the only knot you need. The two half-hitches, or the round-turn-and-two-half-hitches, secure a rope to a ring or post. The trucker\'s hitch creates a mechanical advantage for tightening a load — the most useful knot in the bed of a pickup truck. The sheet bend joins two ropes of unequal diameter, where the square knot would fail. The double fisherman\'s joins climbing-rope ends. The constrictor hitch grips a bundle the harder it is pulled. With those ten knots, almost no rope task in ordinary life is beyond you.' },
        { type: 'h2', text: 'How to learn them' },
        { type: 'p', text: 'The trick to learning knots is volume, not complexity. Take a four-foot length of half-inch nylon or cotton rope; carry it in a coat pocket; tie the same knot fifteen or twenty times across an evening. Within a week the muscle memory is permanent. The mistake almost every beginner makes is to try to learn knots from a static photograph in a book. Use Animated Knots by Grog instead, which animates each step of every important knot, or watch a video. The hands learn knots; the eyes only watch them being learned.' },
        { type: 'callout', text: 'There is no such thing as a knot that is "right" in every situation. The bowline is the right loop for most purposes; the figure-eight is the right loop for rock climbing because climbers can inspect it across the rope at a glance. Choose the knot for the job, not the job for the knot you happen to know.' },
      ],

      keyTerms: ['bend', 'hitch', 'loop', 'bowline', 'clove hitch', 'figure-eight', 'square knot', 'taut-line hitch', 'trucker\'s hitch', 'sheet bend'],

      resources: {
        videos: [
          {
            id: null,
            source: 'other',
            url: 'https://www.animatedknots.com/',
            title: 'Animated Knots by Grog',
            channel: 'Animated Knots',
            duration: 'variable',
            featured: true,
            why: 'The canonical knot-learning resource on the web. Step-by-step animations of every important knot, with the right knot grouped by use case. Free, accurate, and beautiful.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@AnimatedKnots',
            title: 'Animated Knots by Grog — full channel',
            channel: 'Animated Knots',
            duration: 'variable',
            featured: true,
            why: 'The YouTube version of the same animations. Useful when you want a slow real-time demonstration.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@CoalcrackerBushcraft',
            title: 'Coalcracker Bushcraft — Knots playlist',
            channel: 'Dan Coppins',
            duration: 'variable',
            featured: true,
            why: 'A bushcraft school\'s walk-through of the camp knots — taut-line, trucker\'s, bowline, clove hitch — with practical context.',
          },
        ],
        books: [
          {
            title: 'The Ashley Book of Knots',
            author: 'Clifford W. Ashley',
            year: 1944,
            url: 'https://en.wikipedia.org/wiki/The_Ashley_Book_of_Knots',
            why: 'The reference for all knots — 3,857 numbered entries, 7,000 illustrations. Even people who do not know much about knots cite "ABoK" numbers.',
          },
          {
            title: 'Knots: The Complete Visual Guide',
            author: 'Des Pawson',
            year: 2009,
            url: 'https://en.wikipedia.org/wiki/Des_Pawson',
            why: 'A founding member of the International Guild of Knot Tyers. Photographs of every step; the most accessible modern reference.',
          },
          {
            title: 'The Klutz Book of Knots',
            author: 'John Cassidy',
            year: 1985,
            url: 'https://en.wikipedia.org/wiki/Klutz_Press',
            why: 'A children\'s book with real ropes through holes in the pages. The book that has taught more first-knot tyers than any other in the past fifty years.',
          },
        ],
        articles: [
          {
            title: 'List of knots',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/List_of_knots',
            why: 'A categorized index of every named knot, with pages for each.',
            year: null,
          },
          {
            title: 'Bowline',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Bowline',
            why: 'The history, the mechanics, and the variants of the most useful knot in the world.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'International Guild of Knot Tyers',
            provider: 'IGKT',
            url: 'https://www.igkt.net/',
            free: false,
            why: 'The international society for serious knot tyers, with regional branches that hold workshops.',
          },
        ],
      },

      seeAlso: ['uses', 'sailing', 'survival'],
      prereqs: [],
      leadsTo: ['uses'],
      chapterActivity: 'A monthly knots circle at a Brooklyn workshop space — bring a four-foot length of rope; learn one or two knots a session; comes alive in spring as the camping and sailing seasons start.',
      sources: [
        'https://en.wikipedia.org/wiki/List_of_knots',
        'https://en.wikipedia.org/wiki/The_Ashley_Book_of_Knots',
        'https://www.animatedknots.com/',
      ],
      verifiedAt: '2026-04-23',
    },

    uses: {
      id: 'uses',
      name: 'When to Use What',
      level: 'Intermediate',
      dek: 'Every knot has a job; matching knot to job is most of what working people with rope actually do.',
      readTime: '10 min',

      sections: ['By task, not by name', 'Loads and shock loads', 'Materials matter', 'Inspect before you trust'],
      body: [
        { type: 'lead', text: 'In 1944 the artist and sailor Clifford Ashley published The Ashley Book of Knots, the work of eleven years. Within its 3,857 entries Ashley cataloged not only how to tie each knot but, more usefully, when. Anyone who has watched a sailor tie a clove hitch in five seconds, or a climber inspect a figure-eight follow-through with the casual practiced glance of someone who has done it ten thousand times, is watching the same skill: matching knot to task without thinking about it. The trick is not learning more knots; it is knowing which knots to reach for.' },
        { type: 'h2', text: 'By task, not by name' },
        { type: 'p', text: 'A useful way to learn knots is to organize them by the job they do, not by their name. To make a fixed loop at the end of a line: bowline (general), figure-eight follow-through (climbing). To attach a line to a post: clove hitch (temporary), round-turn-and-two-half-hitches (heavier load). To join two lines: sheet bend (different sizes), double fisherman\'s (climbing). To tighten a line down: trucker\'s hitch. To grip something cylindrical: constrictor hitch. The serious knot-tyer\'s mental index is organized by problem; the knot is the answer they reach for.' },
        { type: 'h2', text: 'Loads and shock loads' },
        { type: 'p', text: 'A static load — a load that pulls on a knot steadily — is what most knot-strength ratings assume. A shock load, where the rope catches a falling weight, is dramatically more demanding. Climbers use the figure-eight follow-through and double fisherman\'s precisely because they hold and remain inspectable under shock loads; they avoid the bowline for tying in not because it cannot hold but because its variants are easier to mistake under stress. Outside the climbing world, almost no knot you tie will ever face a shock load. Inside it, the knots are different and the inspection is constant.' },
        { type: 'h2', text: 'Materials matter' },
        { type: 'p', text: 'A knot that holds in cotton rope may slip in slick nylon. A knot that holds in nylon may not hold in modern Dyneema, which is so slippery that some traditional knots — including the bowline — fail in it. Most camp and household work is in cotton, manila, or nylon, and the standard knots work as expected. Climbing and serious sailing have moved to high-performance synthetics; before tying knots in these you should know which knots are tested in them. Modern climbing manuals are explicit about which knots to use with which ropes.' },
        { type: 'h2', text: 'Inspect before you trust' },
        { type: 'p', text: 'The discipline that distinguishes climbers and sailors from casual rope users is the habit of inspection. Tie the knot, dress it (smooth out the curves so each strand sits where it should), set it (tighten by pulling on each strand separately), then look at it. A climber\'s tie-in is checked by their partner before every climb. A sailor\'s docking line is glanced at after every adjustment. The inspection takes seconds and prevents nearly every rope failure that does not involve the rope itself breaking. The habit is more important than knowing one more knot.' },
        { type: 'callout', text: 'Better to know a knot and not need it, than need a knot and not know it. The motto belongs to Animated Knots — and to every working sailor, climber, and arborist who has ever done something useful with a rope.' },
      ],

      keyTerms: ['static load', 'shock load', 'dressing a knot', 'setting a knot', 'kernmantle', 'rope diameter', 'rope material', 'knot inspection'],

      resources: {
        videos: [
          {
            id: null,
            source: 'other',
            url: 'https://www.animatedknots.com/by-activity',
            title: 'Animated Knots — by activity',
            channel: 'Animated Knots',
            duration: 'variable',
            featured: true,
            why: 'The "by activity" index — the right way to learn knots in context. Camping, boating, climbing, fishing, surgical, decorative — each section gives the right knots for the job.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@AnimatedKnots',
            title: 'Animated Knots — full channel',
            channel: 'Animated Knots',
            duration: 'variable',
            featured: true,
            why: 'YouTube versions of the same step-by-step animations. Useful when you want to see the timing of a single knot in real time.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@HowNOTtoHIGHLINE',
            title: 'HowNotToHighline — Knots & Climbing playlist',
            channel: 'Ryan Jenks',
            duration: 'variable',
            featured: true,
            why: 'A high-line and climbing channel that breaks knots to demonstrate how and when they fail. Empirical, sometimes startling, and the best modern reference for shock-loaded applications.',
          },
        ],
        books: [
          {
            title: 'The Ashley Book of Knots',
            author: 'Clifford W. Ashley',
            year: 1944,
            url: 'https://en.wikipedia.org/wiki/The_Ashley_Book_of_Knots',
            why: 'Almost every entry includes Ashley\'s opinion on the knot\'s best uses. The single most useful "when to use what" reference in print.',
          },
          {
            title: 'On Rope: North American Vertical Rope Techniques',
            author: 'Bruce Smith & Allen Padgett',
            year: 1996,
            url: 'https://en.wikipedia.org/wiki/Single-rope_technique',
            why: 'The authoritative reference for caving and rescue rope work — the most demanding modern application of knots.',
          },
          {
            title: 'Mountaineering: The Freedom of the Hills',
            author: 'The Mountaineers',
            year: 2017,
            url: 'https://en.wikipedia.org/wiki/Mountaineering:_The_Freedom_of_the_Hills',
            why: 'The standard climbing reference. The knots-and-anchors chapter is the canonical mountaineering treatment of shock-load applications.',
          },
        ],
        articles: [
          {
            title: 'Knot strength',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Knot#Strength',
            why: 'A short but useful summary of how knots reduce rope strength and how the reduction varies by knot.',
            year: null,
          },
          {
            title: 'Knot dressing',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Dressing_a_knot',
            why: 'The under-discussed step between tying a knot and trusting it.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'AMGA — Single Pitch Instructor course',
            provider: 'American Mountain Guides Association',
            url: 'https://amga.com/programs/single-pitch-instructor/',
            free: false,
            why: 'For anyone who wants their rope skills to be inspected by professionals. The SPI course is the entry point to the formal climbing-rope curriculum.',
          },
        ],
      },

      seeAlso: ['essential', 'sailing', 'climbing'],
      prereqs: ['essential'],
      leadsTo: [],
      chapterActivity: 'A "knots in context" workshop at a Brooklyn climbing gym — pair the bowline with the figure-eight follow-through, tie both, see why each belongs to its world; comes alive in winter when indoor climbing is the season.',
      sources: [
        'https://en.wikipedia.org/wiki/The_Ashley_Book_of_Knots',
        'https://en.wikipedia.org/wiki/List_of_knots',
        'https://www.animatedknots.com/',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
