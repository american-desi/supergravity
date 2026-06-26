// content/climbing.js
// Batch: B14-movement
// Last updated: 2026-04-23 by BATCH B13+B14
//
// Topics this subject must cover (from data.js):
//   Core: technique_climb, safety

window.CONTENT = window.CONTENT || {};
window.CONTENT.climbing = {
  subjectId: 'climbing',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B13+B14',
  topics: {

    technique_climb: {
      id: 'technique_climb',
      name: 'Technique',
      level: 'Beginner',
      dek: 'Footwork first — the small, quiet skill that separates climbers from people who boulder hard and blow out their fingers.',
      readTime: '12 min',

      sections: ['Why footwork, not fingers', 'The three things the feet do', 'Balance, the body\'s weight over the foot', 'Movement — the hip into the wall', 'The grades that tell you nothing'],
      body: [
        { type: 'lead', text: 'At the Fontainebleau forest south of Paris, where climbers have been bouldering on sandstone since the 1910s, there is a single move on a problem called "La Marie-Rose" (1946) that rewards four decades of refinement. The move is a high left foot, a gentle shift of weight, and a reach. No strength. No athleticism. Just the precise knowledge of where to put your foot, how to press into it, and the willingness to trust that pressure. This is the whole art of climbing in one gesture. People who climb well are not stronger than people who climb poorly. They are better at standing on things.' },
        { type: 'h2', text: 'Why footwork, not fingers' },
        { type: 'p', text: 'New climbers try to pull themselves up walls with their arms. This is exhausting and wrong. A climber\'s arms get tired in minutes; their legs can push for hours. The art is to put as much weight on the feet as possible and use the hands mainly for balance. Look at any elite climber — Adam Ondra, Janja Garnbret, Chris Sharma — and watch what the feet do. The feet are precise, quiet, weight-bearing. The hands move between holds; the feet anchor the body. A climber who learns to trust their feet in their first six months develops twice as fast over the next two years as one who tries to muscle everything.' },
        { type: 'h2', text: 'The three things the feet do' },
        { type: 'p', text: 'A climbing shoe is designed for three kinds of foothold work. Edging — pressing the inside edge of the shoe down on a small hold, often no larger than a quarter inch. Smearing — pressing the whole rubber sole onto a featureless slab or dihedral, relying on friction alone. Toe-hooking and heel-hooking — using the back or top of the foot to hook a hold and pull the body toward the wall. Beginners almost never use the last two; advanced climbers use them constantly. A new climber\'s project for their first year is to make edging reliable. Foot placements should be silent — the foot lands exactly where you want it, doesn\'t slip, doesn\'t re-adjust.' },
        { type: 'h2', text: 'Balance, the body\'s weight over the foot' },
        { type: 'p', text: 'The second skill is weight distribution. A climber with one foot on a hold has their body\'s weight either balanced over that foot — efficient, sustainable — or pulling away from it, which forces the hands to compensate. Good climbers position their hips directly over the supporting foot, which lets the leg extend and relax. Great climbers move the hips across and under the wall to keep their weight where it needs to be for the next reach. The most-taught drill for new climbers — the "quiet feet" drill, where the climber tries to boulder an easy problem without making a sound with their feet — trains exactly this balance.' },
        { type: 'h2', text: 'Movement — the hip into the wall' },
        { type: 'p', text: 'A climber who stands facing the wall with their chest square takes the whole weight of their body on their arms. A climber who turns one hip into the wall — the "drop knee" position — pulls themselves close to the rock, shifts their center of mass over their foot, and extends their reach. This is the single most transformative technique a beginner learns. Once you can drop-knee, walls that looked impossible open up. Climbing coaches spend a lot of their students\' time on this one movement because every harder technique builds on it.' },
        { type: 'h2', text: 'The grades that tell you nothing' },
        { type: 'p', text: 'Climbing grades are a notoriously soft measure. Yosemite Decimal System (5.10a, 5.11d, 5.12b) rates sport and traditional routes. V-grades (V0 to V17) rate boulder problems. French grades (6a, 7c+, 9a) rate routes in Europe. All three are subjective, vary by region and by gym, and say less about your ability than the moves themselves. Two climbers at the same "V4" might be working on opposite skills. The valuable measure is not the grade. It is whether a climber can move efficiently through a sequence — whether the feet are quiet, the hips are in, the hands are relaxed. New climbers fixate on grades. Experienced climbers fixate on movement.' },
        { type: 'callout', text: 'First month: bouldering gym three times a week. No ropes. Do every problem you can, even the easy ones, then do them again with quiet feet. Do not try to climb your limit for the first three weeks; your fingers and pulleys are not ready for the load. At week four, start trying harder problems, but only if your warm-up feels good. A finger injury at week two of your climbing career will set you back six months.' },
      ],

      keyTerms: ['edging', 'smearing', 'toe-hook', 'heel-hook', 'drop knee', 'flagging', 'mantle', 'hip turn', 'quiet feet', 'crimp', 'open hand', 'slab', 'overhang'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@MagnusMidtbo',
            title: 'Magnus Midtbø — training and technique',
            channel: 'Magnus Midtbø',
            duration: 'variable',
            featured: true,
            why: 'Retired Norwegian comp climber. His channel covers everything from technique to trying harder with elite pros; entertaining and technically dense.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@EpicTV',
            title: 'EpicTV Climbing Daily',
            channel: 'EpicTV Climbing',
            duration: 'variable',
            featured: true,
            why: 'Daily climbing news and technique series. The consistent long-running professional outdoor-climbing channel with the broadest reach.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@LatticeTraining',
            title: 'Lattice Training — science-based technique and training',
            channel: 'Lattice Training',
            duration: 'variable',
            featured: true,
            why: 'Tom Randall and Ollie Torr\'s coaching company. The most rigorous sports-science approach to climbing training in English. Technique videos are disciplined and corrective.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@HannahMorrisBouldering',
            title: 'Hannah Morris Bouldering',
            channel: 'Hannah Morris Bouldering',
            duration: 'variable',
            featured: false,
            why: 'Positive, welcoming bouldering content for new and intermediate climbers. Good technique breakdowns without gym-bro intensity.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@Mellow',
            title: 'Mellow Climbing — Giles Cardozo\'s films',
            channel: 'Mellow Climbing',
            duration: 'variable',
            featured: false,
            why: 'High-quality cinematic climbing films with technique threading through. Study the footwork of the pros Mellow profiles.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@NeilGresham',
            title: 'Neil Gresham — Masterclass',
            channel: 'Neil Gresham',
            duration: 'variable',
            featured: false,
            why: 'Veteran UK climbing coach. Clear, technical, old-school — a good counterpoint to the viral-cut YouTube channels.',
          },
        ],
        books: [
          {
            title: 'The Rock Climber\'s Training Manual',
            author: 'Mike Anderson, Mark Anderson',
            year: 2014,
            url: 'https://rockclimberstrainingmanual.com/',
            why: 'The most thorough modern training manual for serious climbers. The Andersons\' Rock Prodigy program is now the standard structured plan in climbing.',
          },
          {
            title: 'Self-Coached Climber',
            author: 'Dan Hague, Douglas Hunter',
            year: 2006,
            url: 'https://www.stackpolebooks.com/9780811733397/',
            why: 'The single best introduction to climbing technique. Precise movement analysis with clear photography. Every coach hands it to new students.',
          },
          {
            title: 'Training for Climbing',
            author: 'Eric Hörst',
            year: 2008,
            url: 'https://www.rowman.com/ISBN/9781493435593/Training-for-Climbing-The-Definitive-Guide-to-Improving-Your-Performance-Third-Edition',
            why: 'Eric Hörst\'s long-running reference. Now in its third edition. Less cutting-edge than the Andersons, more accessible.',
          },
          {
            title: 'The Push: A Climber\'s Journey of Endurance, Risk, and Going Beyond Limits',
            author: 'Tommy Caldwell',
            year: 2017,
            url: 'https://www.penguinrandomhouse.com/books/316030/the-push-by-tommy-caldwell/',
            why: 'Tommy Caldwell\'s autobiography covers most of the important climbing of the last thirty years. The human side of the skill.',
          },
          {
            title: 'The Enduring Passion',
            author: 'Royal Robbins',
            year: 2017,
            url: 'https://www.worldcat.org/title/my-life-in-climbing/oclc/1004812',
            why: 'The late Royal Robbins\'s memoir. Yosemite big-wall pioneer whose ethics shaped modern American climbing. Short, reverent, real.',
          },
        ],
        articles: [
          {
            title: 'Climbing',
            source: 'Britannica',
            url: 'https://www.britannica.com/sports/climbing',
            why: 'Editorial survey of the sport\'s disciplines — bouldering, sport, trad, alpine.',
            year: null,
          },
          {
            title: 'Bouldering',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Bouldering',
            why: 'Reference article on the grading systems, history, and modern competition scene.',
            year: null,
          },
          {
            title: 'Climbing wall',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Climbing_wall',
            why: 'The history of the climbing gym, now the on-ramp for almost all new climbers.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'AMGA (American Mountain Guides Association) single-pitch instructor',
            provider: 'AMGA',
            url: 'https://amga.com/',
            free: false,
            why: 'The American certification for climbing instructors. Useful framing for understanding what professional climbing instruction looks like.',
          },
          {
            title: 'Neil Gresham\'s Masterclass (YouTube, free)',
            provider: 'Neil Gresham',
            url: 'https://www.youtube.com/@NeilGresham',
            free: true,
            why: 'Free structured technique curriculum by a veteran UK coach. Watch in sequence for a genuine introductory course.',
          },
        ],
        tools: [
          {
            title: 'La Sportiva / Scarpa climbing shoes',
            url: 'https://www.lasportiva.com/en/climbing',
            why: 'The reference shoe makers. La Sportiva\'s Tarantula or Scarpa\'s Origin are the standard beginner shoes; every gym stocks a rental from one of these brands.',
          },
          {
            title: 'Mountain Project',
            url: 'https://www.mountainproject.com/',
            why: 'Crowd-sourced outdoor-climbing route database. The de facto planning tool for any trip outside the gym in North America.',
          },
        ],
        primarySources: [
          {
            title: 'La Marie-Rose, Bas Cuvier (Fontainebleau, first climbed 1946)',
            url: 'https://en.wikipedia.org/wiki/Fontainebleau_(climbing)',
            why: 'The iconic early Fontainebleau problem. Still climbed today. Every serious boulderer has tried it or knows the footage.',
          },
        ],
      },

      seeAlso: ['safety', 'running', 'yoga'],
      prereqs: [],
      leadsTo: ['safety'],

      chapterActivity: 'A Wednesday-evening bouldering meetup at The Cliffs in Long Island City — gym-wide, beginners welcome, members rotate projects and give each other gentle beta.',

      sources: [
        'https://www.britannica.com/sports/climbing',
        'https://en.wikipedia.org/wiki/Bouldering',
        'https://en.wikipedia.org/wiki/Climbing_wall',
      ],
      verifiedAt: '2026-04-23',
    },

    safety: {
      id: 'safety',
      name: 'Safety Systems',
      level: 'Intermediate',
      dek: 'Knots, belays, anchors — the mechanical systems that hold human beings off the ground.',
      readTime: '13 min',

      sections: ['Why safety matters more than skill', 'The knots that actually matter', 'Belaying, the partner\'s job', 'Anchors and trust', 'Accidents happen in the casual moments'],
      body: [
        { type: 'lead', text: 'In 2016, a thirty-six-year-old American climber named Brad Gobright fell sixteen hundred feet to his death off a route in Mexico. His partner had weighted the rappel incorrectly and the rope ran through the anchor rather than through the rappel device. Gobright was one of the best free soloists alive. He had climbed El Capitan without ropes. He died on a casual, easy rappel because a system failed. The lesson of climbing safety is not that the sport is dangerous for extreme projects. It is that the sport kills people on the small things — the moments when attention lapsed, when a system went unchecked, when a partner was trusted without a second check. Climb long enough and you will find yourself in the casual moments. Safety is the discipline of staying alert during them.' },
        { type: 'h2', text: 'Why safety matters more than skill' },
        { type: 'p', text: 'Climbing is an inherently risky sport. Every year a handful of experienced climbers die because a system failed, not because the climb was too hard. Lynn Hill, the first person ever to free-climb the Nose on El Capitan, has written that "a partner check takes ten seconds and might save your life." That is not rhetoric. It is numerical truth: most climbing accidents in the American Alpine Club\'s Accidents in North American Climbing would have been prevented by a partner check. Skill without safety systems just means climbing higher and harder before a system fails. Safety first means the margin for error is always wider than the climbing.' },
        { type: 'h2', text: 'The knots that actually matter' },
        { type: 'p', text: 'A working climber needs four knots reliably: the figure-eight follow-through (for tying into the harness), the clove hitch (for anchor building), the Munter hitch (a backup belay when a device is lost), and the prusik or friction hitch (for ascending a rope or backing up a rappel). A good climbing gym teaches all four in the first week of a top-rope course. A climbing partner who cannot tie a figure-eight reliably in any light, in any weather, with any rope, should not be your rope partner. Knots are drilled the way a pilot drills checklists. They are tied the same way every single time. Variations are the opening of accidents.' },
        { type: 'h2', text: 'Belaying, the partner\'s job' },
        { type: 'p', text: 'A belayer is the person at the other end of the rope. Their job is to catch a fall. Modern tube-style devices — the Black Diamond ATC and its cousins — require constant attention from the belayer; a lapse of a second at the wrong moment can kill a climber. Assisted-braking devices like the Petzl Grigri add a mechanical backup but do not eliminate the need for attention. Every gym teaches the PBUS technique (pull, brake, under, slide) because it keeps a hand on the brake strand at all times. A belayer who takes their brake hand off the rope to check their phone is committing the most common mistake in modern climbing. The phone can wait. The climber cannot.' },
        { type: 'h2', text: 'Anchors and trust' },
        { type: 'p', text: 'In outdoor climbing, the anchor is the point at the top of a pitch where the rope is secured to the rock. A good anchor is redundant, equalized, and non-extending — the SERENE principle (or its various mnemonics). Redundant means at least two independent attachment points to the rock; if one fails, the other holds. Equalized means the load is shared between them. Non-extending means that if one fails, the other does not shock-load the system by allowing the anchor to fall several inches. Building anchors is the first skill an outdoor climber learns after belaying, and every single anchor is checked by both partners before any weight goes on it. There are no second chances on anchors.' },
        { type: 'h2', text: 'Accidents happen in the casual moments' },
        { type: 'p', text: 'The American Alpine Club\'s annual Accidents in North American Climbing reports the same pattern over and over. Most climbing accidents happen to experienced climbers on routes that were not at their limit, in the transition moments — rappelling off the top, cleaning an anchor, lowering a partner, switching devices. The lapse is almost never on the hard move. It is in the moment when the climber\'s brain relaxes because the hard part is over. This is the real lesson of climbing safety. Stay alert in the casual moments. Check your knot before every climb. Check your partner\'s belay device before every climb. Check the rope threads through both loops of the harness. Every time. No exceptions.' },
        { type: 'callout', text: 'Before every climb, perform the partner check. Harness buckled (doubled back). Figure-eight knot tied correctly through both loops. Belay device oriented correctly with the rope. Locking carabiner locked. Helmet on. Ask your partner: "On belay?" Wait for: "Belay on." This ritual takes ten seconds. Skipping it has killed hundreds of climbers.' },
        { type: 'callout', text: 'A note on safety: climbing outside carries risks that climbing in the gym largely does not — objective hazards like rockfall, weather, and remote terrain. A climber who moves from the gym to the outdoors should take a single-pitch instructor course or climb with an experienced mentor for at least their first ten outdoor climbing days. There is no substitute for supervised in-person instruction when lives are on the rope.' },
      ],

      keyTerms: ['figure-eight follow-through', 'clove hitch', 'Munter hitch', 'prusik', 'partner check', 'belay', 'PBUS', 'top rope', 'lead belay', 'anchor', 'SERENE', 'rappel', 'auto-block'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@HowNOTtoHighline',
            title: 'HowNOT2 — rigorous gear and safety testing',
            channel: 'HowNOT2',
            duration: 'variable',
            featured: true,
            why: 'Ryan Jenks destroys climbing gear on camera to see what actually fails. The best safety-research channel on the internet. Watch before making any gear decision.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@PetzlOfficial',
            title: 'Petzl — technical manuals and videos',
            channel: 'Petzl',
            duration: 'variable',
            featured: true,
            why: 'The French equipment maker\'s educational channel. Belaying, rappelling, anchor-building demonstrations from the company that sells most of the gear. Industry-standard reference.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@AmericanAlpineClub',
            title: 'American Alpine Club — accident reports and education',
            channel: 'American Alpine Club',
            duration: 'variable',
            featured: true,
            why: 'The AAC\'s educational channel. Accident case studies and safety courses. The most important single safety resource for American climbers.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@HardIsEasy',
            title: 'Hard Is Easy — Yoann Senechal',
            channel: 'Hard Is Easy',
            duration: 'variable',
            featured: false,
            why: 'Former mountain guide whose videos combine entertainment with serious safety content. The best personality-driven safety channel for new climbers.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@AMGA1979',
            title: 'American Mountain Guides Association',
            channel: 'AMGA',
            duration: 'variable',
            featured: false,
            why: 'The AMGA\'s educational videos on professional-level climbing techniques. Beyond the beginner material but useful as an aspiration.',
          },
        ],
        books: [
          {
            title: 'Mountaineering: The Freedom of the Hills',
            author: 'The Mountaineers',
            year: 1960,
            url: 'https://www.mountaineers.org/books/books/mountaineering-the-freedom-of-the-hills-9th-edition',
            why: 'The ninth edition (2017) of the encyclopedic American mountaineering reference. Chapters on ropes, belaying, anchors, and rescue are the foundation of every outdoor-climbing course.',
          },
          {
            title: 'Climbing Anchors',
            author: 'John Long, Bob Gaines',
            year: 1993,
            url: 'https://www.falcon.com/climbing-anchors-9781493-017672',
            why: 'John Long\'s anchor manual. Still in print after thirty years. The single book most outdoor climbers own.',
          },
          {
            title: 'Accidents in North American Climbing',
            author: 'American Alpine Club',
            year: 1948,
            url: 'https://americanalpineclub.org/accidents',
            why: 'Annual publication since 1948. The disciplined study of climbing accidents and their causes. Every serious climber reads a year\'s volume now and then to stay sharp.',
          },
          {
            title: 'The Self-Coached Climber',
            author: 'Dan Hague, Douglas Hunter',
            year: 2006,
            url: 'https://www.stackpolebooks.com/9780811733397/',
            why: 'Technique book with excellent safety chapters. Pair with Freedom of the Hills for a comprehensive first-year education.',
          },
          {
            title: 'Rock Climbing: Mastering Basic Skills',
            author: 'Craig Luebben',
            year: 2004,
            url: 'https://www.worldcat.org/title/rock-climbing-mastering-basic-skills/oclc/54456796',
            why: 'Luebben\'s illustrated instructional is the most commonly assigned book in climbing courses. Deeply illustrated knots and anchor systems.',
          },
        ],
        articles: [
          {
            title: 'Belaying',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Belaying',
            why: 'Good reference article on belaying methods, devices, and technique. Good starting point for vocabulary.',
            year: null,
          },
          {
            title: 'Anchor (climbing)',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Anchor_(climbing)',
            why: 'Reference article on anchors, SERENE principles, and the history of anchor philosophy.',
            year: null,
          },
          {
            title: 'American Alpine Club Accident Database',
            source: 'American Alpine Club',
            url: 'https://americanalpineclub.org/accidents',
            why: 'Searchable database of climbing accidents going back to 1948. An education in staying alive.',
          },
        ],
        courses: [
          {
            title: 'AMGA Single Pitch Instructor',
            provider: 'American Mountain Guides Association',
            url: 'https://amga.com/program/single-pitch-instructor/',
            free: false,
            why: 'The American certification for teaching roped climbing. Any mentor worth learning from has taken this course; the curriculum is the professional safety standard.',
          },
          {
            title: 'AAC Know the Ropes (free)',
            provider: 'American Alpine Club',
            url: 'https://americanalpineclub.org/know-the-ropes',
            free: true,
            why: 'The AAC\'s free annual safety bulletin covers one major topic (belaying, rappelling, anchor-building, lowering) in depth each year. Essential reading.',
          },
        ],
        tools: [
          {
            title: 'Petzl Grigri (assisted-braking belay device)',
            url: 'https://www.petzl.com/US/en/Sport/Belay-devices-and-descenders/GRIGRI',
            why: 'The industry-standard assisted-braking belay device. Not a replacement for proper belay technique, but a meaningful backup.',
          },
          {
            title: 'Black Diamond ATC Guide (tube-style belay device)',
            url: 'https://www.blackdiamondequipment.com/en_US/product/atc-guide-belay-device/',
            why: 'The standard tube-style belay device, in use on most multi-pitch climbs worldwide.',
          },
          {
            title: 'UIAA (International Climbing and Mountaineering Federation) safety standards',
            url: 'https://www.theuiaa.org/safety-standards/',
            why: 'The international authority on climbing-equipment safety certification. Every piece of modern climbing gear is either UIAA- or CE-certified.',
          },
        ],
        primarySources: [
          {
            title: 'AAC Accidents in North American Climbing — 2022 edition',
            url: 'https://americanalpineclub.org/p/anac-2022',
            why: 'A recent volume of the AAC\'s annual publication. Short, disciplined reports of what went wrong in each of the past year\'s accidents, with analysis.',
          },
        ],
      },

      seeAlso: ['technique_climb', 'knots', 'survival'],
      prereqs: ['technique_climb'],
      leadsTo: [],

      chapterActivity: 'A Saturday "knot and belay refresher" at Brooklyn Boulders Gowanus — members drill the figure-eight, the Munter, and the prusik, then run a mock partner check with every combination of partners.',

      sources: [
        'https://en.wikipedia.org/wiki/Belaying',
        'https://en.wikipedia.org/wiki/Anchor_(climbing)',
        'https://americanalpineclub.org/accidents',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
