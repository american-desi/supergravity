// content/sailing.js
// Batch: B12-life-skills-II-outdoor
// Last updated: 2026-04-23 by BATCH B12-life-skills-II-outdoor
//
// Topics from data.js: points, tacking

window.CONTENT = window.CONTENT || {};
window.CONTENT.sailing = {
  subjectId: 'sailing',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B12-life-skills-II-outdoor',
  topics: {

    points: {
      id: 'points',
      name: 'Points of Sail',
      level: 'Beginner',
      dek: 'Where the wind comes from, relative to the boat, names every direction a sailboat can go — and decides what the sailor must do.',
      readTime: '10 min',

      sections: ['The wind\'s clock', 'The no-go zone', 'Reaches and runs', 'The forces, briefly'],
      body: [
        { type: 'lead', text: 'The Phoenicians sailed the Mediterranean three thousand years ago in vessels that could only go where the wind pushed them. The lateen sail of the medieval Arab dhow, and the fore-and-aft rigs that came after it in northern Europe, transformed the relationship between wind and water — for the first time a boat could sail across the wind, and even, by zigzagging, against it. Every modern sailor learning to read the wind around their boat is learning the geometry that took two thousand years to discover.' },
        { type: 'h2', text: 'The wind\'s clock' },
        { type: 'p', text: 'A modern sailor names the boat\'s direction not by compass, but by the angle between the boat\'s heading and the wind. Imagine the wind as the twelve o\'clock position on a clock; the points of sail are the angles the boat can sit relative to it. Close-hauled is sailing as close to the wind as the boat will go — about 45 degrees off, on either side. Beam reach is sailing perpendicular to the wind. Broad reach is sailing well off the wind. Run is sailing directly downwind. Each point requires a different set and trim of the sails, and each carries the boat through the water in a different way.' },
        { type: 'h2', text: 'The no-go zone' },
        { type: 'p', text: 'The wedge of about 90 degrees — 45 degrees on either side of dead upwind — is the no-go zone, the directions a typical sailboat cannot sail. To get to a point upwind of where you are, you must zigzag — sail close-hauled on one side of the wind, then come about and sail close-hauled on the other. The journey is a series of long diagonals, each called a tack. Total distance sailed is greater than the rhumb line, but the boat does, eventually, reach upwind. Modern racing boats can hold tighter angles; modest cruisers cannot do better than about 45 degrees.' },
        { type: 'h2', text: 'Reaches and runs' },
        { type: 'p', text: 'A beam reach — wind across the side of the boat — is the fastest and easiest point of sail for most modern sloops and the one most sailors prefer. The boat heels to leeward, the sails are eased to about 45 degrees off the centerline, and the apparent wind feels strong. A broad reach is faster still in moderate winds. A run, dead downwind, sounds easy but is the most dangerous point — the boom can swing across without warning (an accidental jibe) hard enough to break the rig or knock a crewmember overboard. Most experienced sailors broad-reach in zigzags downwind rather than run square.' },
        { type: 'h2', text: 'The forces, briefly' },
        { type: 'p', text: 'A sail upwind works like an aircraft wing held vertical: the curved leeward surface accelerates the air across it, creating lower pressure that pulls the boat forward. The keel below resists sideways motion, converting the pull into forward speed. Downwind, the sail is acting more like a parachute, simply caught by the wind. The fact that a sailboat can sail toward the wind that is pushing it baffled mariners for two thousand years and was understood properly only with the development of fluid dynamics in the early twentieth century.' },
        { type: 'callout', text: 'Tell a beginner sailor "the wind is your dance partner, not your enemy" and they think you are speaking poetically. After a few seasons they realize you were being literal — every adjustment is a response to what the wind has just done.' },
      ],

      keyTerms: ['close-hauled', 'beam reach', 'broad reach', 'run', 'no-go zone', 'apparent wind', 'true wind', 'leeward', 'windward', 'leeway'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@nautilussailing',
            title: 'Nautilus Sailing — full channel',
            channel: 'Nautilus Sailing',
            duration: 'variable',
            featured: true,
            why: 'A working sailing school\'s short videos on the points of sail and basic maneuvers. Use as a visual companion to the text.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@SailingMagazineUK',
            title: 'Yachting Monthly — full channel',
            channel: 'Yachting Monthly',
            duration: 'variable',
            featured: true,
            why: 'The British sailing magazine\'s YouTube channel. Tom Cunliffe\'s seamanship videos are the most authoritative free instruction online.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@RYAUK',
            title: 'Royal Yachting Association — full channel',
            channel: 'RYA',
            duration: 'variable',
            featured: true,
            why: 'The British governing body\'s instructional videos. Short, accurate, and the basis of the RYA Day Skipper syllabus that most international sailors learn from.',
          },
        ],
        books: [
          {
            title: 'The Annapolis Book of Seamanship',
            author: 'John Rousmaniere',
            year: 1983,
            url: 'https://en.wikipedia.org/wiki/John_Rousmaniere',
            why: 'The standard American reference. Now in its fourth edition; the chapters on sail trim and points of sail are the canonical introduction.',
          },
          {
            title: 'Sailing Alone Around the World',
            author: 'Joshua Slocum',
            year: 1900,
            url: 'https://en.wikipedia.org/wiki/Sailing_Alone_Around_the_World',
            why: 'The first book to read about why anyone sails. Slocum was the first person to sail solo around the world; the book is one of the most beautifully written sea narratives in English.',
          },
          {
            title: 'Royal Yachting Association — Day Skipper Handbook',
            author: 'Sara Hopkinson',
            year: 2017,
            url: 'https://en.wikipedia.org/wiki/Royal_Yachting_Association',
            why: 'The textbook for the Day Skipper certificate, which is the recognized first-rung qualification in much of the world.',
          },
        ],
        articles: [
          {
            title: 'Point of sail',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Point_of_sail',
            why: 'Comprehensive reference, with diagrams of every point and the apparent vs. true wind distinction.',
            year: null,
          },
          {
            title: 'Sail',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Sail',
            why: 'The physics of how sails actually work, with the modern aerodynamic understanding.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'US Sailing — Basic Keelboat',
            provider: 'US Sailing',
            url: 'https://www.ussailing.org/education/adult/keelboat-courses/',
            free: false,
            why: 'The American national governing body\'s certification course. Taught at sailing schools and yacht clubs across the country.',
          },
        ],
      },

      seeAlso: ['tacking', 'mapreading', 'knots'],
      prereqs: [],
      leadsTo: ['tacking'],
      chapterActivity: 'A summer evening sail on Long Island Sound out of City Island — beginners learn to feel the wind through the tiller; comes alive June through September when the prevailing southwesterlies are reliable.',
      sources: [
        'https://en.wikipedia.org/wiki/Point_of_sail',
        'https://en.wikipedia.org/wiki/Sail',
        'https://www.ussailing.org/education/adult/keelboat-courses/',
      ],
      verifiedAt: '2026-04-23',
    },

    tacking: {
      id: 'tacking',
      name: 'Tacking & Jibing',
      level: 'Intermediate',
      dek: 'Two ways of changing tack — through the wind, or away from it — with very different consequences if you get them wrong.',
      readTime: '11 min',

      sections: ['Tacking through the wind', 'Jibing — the careful one', 'The choreography of the cockpit', 'Beating to windward'],
      body: [
        { type: 'lead', text: 'When the boat changes direction so that the wind, which had been blowing from one side, now blows from the other, the maneuver has a name. Through the wind it is a tack; away from the wind, downwind, it is a jibe. The first is gentle and forgiving; the second can be violent and dangerous if mishandled. Knowing the difference, and the small choreography that goes with each, is the moment a passenger becomes a crew.' },
        { type: 'h2', text: 'Tacking through the wind' },
        { type: 'p', text: 'When close-hauled, the bow is pointed about 45 degrees off the wind. To tack, the helm is pushed down (the tiller toward the sail) so the bow swings up through the eye of the wind and falls off on the other side. The sails luff briefly as the bow crosses dead upwind, then fill on the new side as the boat completes the turn. The crew releases the windward jib sheet as it crosses, and pulls in the new leeward sheet hand over hand. A clean tack takes a few seconds; a sloppy one stalls the boat in irons, the bow stuck head to wind, requiring a bit of reverse-rudder to recover.' },
        { type: 'h2', text: 'Jibing — the careful one' },
        { type: 'p', text: 'A jibe is the same maneuver but downwind: the stern crosses the wind instead of the bow. The catch is that on a run the boom is far out over the leeward rail, and during the maneuver it must swing across the boat — across the heads of any inattentive crew — and then snap into position on the other side. An uncontrolled jibe in any wind worth sailing in can break the boom, tear the sail, snap a stay, or knock a crew member overboard. The controlled version: ease the mainsheet, rotate the boat so the wind comes from a beam, watch the boom carefully as it crosses, and ease the new sheet out smoothly.' },
        { type: 'h2', text: 'The choreography of the cockpit' },
        { type: 'p', text: 'A boat sailed by two or more people works best when each crew member knows in advance who does what during a maneuver. The standard call: the helmsman announces "ready about" (the crew prepares the new sheet, the off-side crew unwinds the active sheet); the crew responds "ready" when set; the helmsman calls "helm\'s a-lee" or "tacking" and turns. A jibe gets its own warning — "stand by to jibe" — because a head meeting an unannounced boom can end a season. Practiced, the maneuver is one of the more elegant pieces of choreography in any sport.' },
        { type: 'h2', text: 'Beating to windward' },
        { type: 'p', text: 'Sailing toward an upwind destination requires repeated tacks — long zigzags called beats. The strategy is part geometry (the longer leg first, ideally), part tactics (use shifts in wind direction to gain ground), and part respect for tide and current, which can erase or amplify each tack\'s gain. A good beat is the most satisfying point of sail to do well. A poor one can keep a boat working hard for an afternoon and end up with no progress made. The competitive racer\'s sense of the wind — knowing twenty seconds before the cruising sailor that a header is coming — is a skill built only by hours on the water.' },
        { type: 'callout', text: 'In all but light air, sailors call out "boom!" before a jibe. Crew duck. The boom does not. The single most common cause of head injury on small sailboats is an unexpected jibe.' },
      ],

      keyTerms: ['tack', 'jibe', 'in irons', 'mainsheet', 'jib sheet', 'beat', 'lay line', 'header', 'lift', 'preventer'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@SailingMagazineUK',
            title: 'Yachting Monthly — Tom Cunliffe seamanship',
            channel: 'Yachting Monthly',
            duration: 'variable',
            featured: true,
            why: 'Cunliffe\'s tacking and jibing videos are the canonical demonstration. He has been teaching seamanship for forty years.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@RYAUK',
            title: 'RYA — Tacking and Gybing tutorials',
            channel: 'Royal Yachting Association',
            duration: 'variable',
            featured: true,
            why: 'The British governing body\'s instructional videos. Short, careful, and the basis of the syllabus most cruising sailors learn from.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@nautilussailing',
            title: 'Nautilus Sailing — Maneuvers playlist',
            channel: 'Nautilus Sailing',
            duration: 'variable',
            featured: true,
            why: 'A working sailing school\'s practical demonstrations of every basic maneuver, from a sloop\'s cockpit perspective.',
          },
        ],
        books: [
          {
            title: 'The Annapolis Book of Seamanship',
            author: 'John Rousmaniere',
            year: 1983,
            url: 'https://en.wikipedia.org/wiki/John_Rousmaniere',
            why: 'The standard American reference. The maneuvering chapter is the cleanest in print.',
          },
          {
            title: 'Bowditch\'s American Practical Navigator',
            author: 'Nathaniel Bowditch',
            year: 1802,
            url: 'https://en.wikipedia.org/wiki/American_Practical_Navigator',
            why: 'The serious reference at the high end. Now maintained by the National Geospatial-Intelligence Agency; free PDF downloads.',
          },
          {
            title: 'Sailing Smart',
            author: 'Buddy Melges',
            year: 1996,
            url: 'https://en.wikipedia.org/wiki/Buddy_Melges',
            why: 'America\'s Cup-winning Olympic sailor on tactics. The wind-shift chapters reframe tacking as a tactical decision.',
          },
        ],
        articles: [
          {
            title: 'Tacking (sailing)',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Tacking_(sailing)',
            why: 'Diagrams, common errors, and the historical evolution of the maneuver.',
            year: null,
          },
          {
            title: 'Jibe',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Jibe',
            why: 'The mechanics of the downwind turn, with emphasis on the safety considerations.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'US Sailing — Basic Keelboat',
            provider: 'US Sailing',
            url: 'https://www.ussailing.org/education/adult/keelboat-courses/',
            free: false,
            why: 'A weekend on the water with a certified instructor will teach you to tack and jibe better than any book. Worth the money.',
          },
        ],
        primarySources: [
          {
            title: 'Bowditch — full text (NGA)',
            url: 'https://msi.nga.mil/Publications/APN',
            why: 'Free PDF of the current Bowditch from the National Geospatial-Intelligence Agency.',
          },
        ],
      },

      seeAlso: ['points', 'mapreading', 'knots'],
      prereqs: ['points'],
      leadsTo: [],
      chapterActivity: 'A late-summer "Friday-night beats" series at City Island Yacht Club — short courses upwind in eight knots of southwest breeze; comes alive August into early October.',
      sources: [
        'https://en.wikipedia.org/wiki/Tacking_(sailing)',
        'https://en.wikipedia.org/wiki/Jibe',
        'https://en.wikipedia.org/wiki/American_Practical_Navigator',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
