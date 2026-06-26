// content/butchery.js
// Batch: B09-kitchen-arts
// Last updated: 2026-04-23 by BATCH B09-kitchen-arts
//
// Topics this subject must cover (from data.js):
//   Core: primals, boning

window.CONTENT = window.CONTENT || {};
window.CONTENT.butchery = {
  subjectId: 'butchery',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B09-kitchen-arts',
  topics: {

    primals: {
      id: 'primals',
      name: 'Primal Cuts',
      level: 'Intermediate',
      dek: 'The first geography every butcher learns — where the animal\'s muscles worked, and how that work shows up on a plate.',
      readTime: '12 min',

      sections: ['A map of the animal', 'Beef: the eight quarters of the steer', 'Pork and lamb', 'Work, tenderness, and flavor', 'Why the whole-animal shop disappeared, and came back'],
      body: [
        { type: 'lead', text: 'In medieval London, the Worshipful Company of Butchers kept its charter inside the walls at Smithfield Market, which had slaughtered animals for the city since at least 1174. A butcher\'s apprentice spent seven years learning the trade. Most of that time was spent learning one thing: where the joints are. An experienced butcher can break a steer into its eight primal cuts in forty minutes using a hand saw and a five-inch knife. A beginner will take three hours and ruin two roasts. The difference is entirely knowing where to cut.' },
        { type: 'h2', text: 'A map of the animal' },
        { type: 'p', text: 'A primal cut is one of the large sections a butcher separates from a carcass on the first breakdown. Each primal is a region the animal used for one kind of work — walking, standing, chewing, sitting — and each region is tender or tough depending on how hard those muscles worked. The map is remarkably stable across traditions. An English butcher, a Milanese one, and a Buenos Aires asador all separate the animal along the same lines, because the lines are anatomical. The names change. The cuts do not.' },
        { type: 'h2', text: 'Beef: the eight primals' },
        { type: 'p', text: 'On an American steer: chuck (the shoulder, hard-working muscles), rib (the upper back, less work, home of the rib-eye), loin (the lower back, almost no work, home of the tenderloin and strip steak), round (the rear leg, hard-working), brisket (the lower chest, tough but rich), plate (below the ribs, where skirt steaks come from), flank (the belly), and shank (the legs, connective tissue). A butcher breaks the carcass in this order. A cook who understands the map never buys the wrong cut for the method again.' },
        { type: 'h2', text: 'Pork, lamb, and the older maps' },
        { type: 'p', text: 'Pork divides into shoulder (Boston butt and picnic), loin, belly (where bacon is), and leg (ham). Lamb is close to the same map, scaled down: shoulder, loin (saddle), ribs (the rack), and leg. The older European cuts — French, Italian, Spanish — follow the same anatomy but with different names, different emphases, and different small cuts that American butchers often discard. The Argentinian entraña is the American skirt. The Tuscan bistecca fiorentina is a T-bone, cut thick. The geography is universal; the naming is cultural.' },
        { type: 'h2', text: 'Work, tenderness, and flavor' },
        { type: 'p', text: 'Muscles that worked hard are tougher and have more connective tissue — and more flavor. Muscles that did little work are tender and bland. This is the central trade of carnivory. A ribeye is tender because the rib muscles barely moved; a brisket is flavorful because the chest muscles held the animal\'s two-thousand-pound frame upright. The tough cuts reward slow, wet heat — they need time and water to dissolve the collagen into gelatin. The tender cuts reward fast, dry heat — they need a sear and a rest, nothing else. Every mistake in a home kitchen with beef is a mismatch of this kind.' },
        { type: 'h2', text: 'Why the whole-animal shop disappeared, and came back' },
        { type: 'p', text: 'Supermarket meat counters in the 1970s shifted almost entirely to boxed beef: carcasses broken down at the slaughterhouse, packed into cryovac, and shipped to stores as primal-ready cuts. The local butcher\'s window, once a daily craft, became a three-aisle display of plastic-wrapped sirloins. A generation later, a movement of small American butchers — Joshua and Jessica Applestone at Fleishers in Kingston, Tom Mylan in Brooklyn, Bryan Mayer in Philadelphia — started buying whole animals from nearby farms again. The whole-animal shop is now the best shop on most American high streets that has one. It is also how the trade gets passed on.' },
        { type: 'callout', text: 'The cheapest cuts on a whole animal — shank, cheek, neck, oxtail — are often the most flavorful. A neighborhood butcher will save them for customers who ask. Supermarkets usually grind them.' },
      ],

      keyTerms: ['primal cut', 'subprimal', 'chuck', 'loin', 'rib', 'round', 'brisket', 'whole-animal butchery', 'boxed beef', 'connective tissue'],

      resources: {
        videos: [
          {
            id: 'JtnsZ2JaKso',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=JtnsZ2JaKso',
            title: 'How to Butcher an Entire Pig: Every Cut of Pork Explained',
            channel: 'Bon Appétit — Handcrafted',
            duration: '19:50',
            featured: true,
            why: 'Brandt Farrell breaks down an entire pig on camera in under twenty minutes. The clearest walkthrough of pork primals and subprimals on YouTube.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/playlist?list=PLRGTjSz0VVQh_c-EJvqoQ3hcMl5z_3F5U',
            title: 'Bon Appétit Handcrafted — full butchery series',
            channel: 'Bon Appétit',
            duration: 'variable',
            featured: true,
            why: 'The full "Handcrafted" series — chicken, duck, pork, lamb, beef, tuna — each broken down in a single continuous shot by a professional butcher.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@MeatEaterTV',
            title: 'MeatEater — field-to-table butchery',
            channel: 'MeatEater',
            duration: 'variable',
            featured: true,
            why: 'Steven Rinella\'s team breaks down wild game the way an early butcher would have — starting with a whole carcass, teaching the anatomy as they go.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@EssentialCraftsman',
            title: 'Essential Craftsman — butchery videos',
            channel: 'Essential Craftsman',
            duration: 'variable',
            featured: false,
            why: 'Scott Wadsworth\'s father was a rural butcher. His "How to butcher a deer" and "cutting up a half steer" videos are the best old-school home-freezer resources on YouTube.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/BryanButcher',
            title: 'Bryan Mayer — demonstrations and classes',
            channel: 'Bryan Mayer',
            duration: 'variable',
            featured: false,
            why: 'The former Fleishers head butcher and Executive Director of the Butchers\' Guild. Mayer teaches whole-animal breakdown at a pace a beginner can follow.',
          },
        ],
        books: [
          {
            title: 'The Butcher\'s Guide to Well-Raised Meat',
            author: 'Joshua Applestone, Jessica Applestone, Alexandra Zissu',
            year: 2011,
            url: 'https://www.penguinrandomhouse.com/books/204167/the-butchers-guide-to-well-raised-meat-by-joshua-and-jessica-applestone-with-alexandra-zissu/',
            why: 'The Fleishers founders on the whole-animal shop they built in the Hudson Valley. The clearest popular primer on the American primal system.',
          },
          {
            title: 'The River Cottage Meat Book',
            author: 'Hugh Fearnley-Whittingstall',
            year: 2004,
            url: 'https://www.hachette.co.uk/titles/hugh-fearnley-whittingstall/river-cottage-meat-book/9780340831496/',
            why: 'The British argument for whole-animal cooking. Fearnley-Whittingstall\'s primal diagrams and cooking method grids are the most useful single reference for a home cook.',
          },
          {
            title: 'Whole Beast Butchery: The Complete Visual Guide to Beef, Lamb, and Pork',
            author: 'Ryan Farr',
            year: 2011,
            url: 'https://www.chroniclebooks.com/products/whole-beast-butchery',
            why: 'The San Francisco butcher\'s step-by-step photographic reference. The best bench companion when you are actually cutting.',
          },
          {
            title: 'The Meat Hook Meat Book',
            author: 'Tom Mylan',
            year: 2014,
            url: 'https://www.workman.com/products/the-meat-hook-meat-book/paperback',
            why: 'The founder of Williamsburg\'s Meat Hook, on cuts, recipes, and the shop\'s education program. Readable, opinionated, and practical.',
          },
          {
            title: 'On Food and Cooking',
            author: 'Harold McGee',
            year: 1984,
            url: 'https://en.wikipedia.org/wiki/On_Food_and_Cooking',
            why: 'McGee on meat is the best plain-English explanation of muscle structure, connective tissue, and the chemistry of tenderness.',
          },
        ],
        articles: [
          {
            title: 'Primal cut',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Primal_cut',
            why: 'The cross-national overview — US, French, British, German, and Australian maps, with diagrams.',
            year: null,
          },
          {
            title: 'Butcher',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Butcher',
            why: 'The trade and its history — the English guilds, the Smithfield market, and the modern whole-animal movement.',
            year: null,
          },
          {
            title: 'USDA Beef Cuts Chart',
            source: 'U.S. Department of Agriculture',
            url: 'https://www.ers.usda.gov/data-products/meat-price-spreads',
            why: 'The official American primal-and-subprimal map, in government bulletin form. Every supermarket counter\'s cuts trace back to this chart.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'The Butchers\' Guild (US trade association)',
            provider: 'The Butchers\' Guild',
            url: 'https://thebutchersguild.org/',
            free: true,
            why: 'The American guild\'s public resources include a primal glossary, an apprenticeship directory, and a list of whole-animal shops by state.',
          },
          {
            title: 'Meatsmith Harvest (subscription library)',
            provider: 'Farmsteadmeatsmith',
            url: 'https://meatsmith.com/',
            free: false,
            why: 'Brandon Sheard\'s on-farm butchery school puts decades of teaching online. The closest thing to an apprenticeship a home cook can do.',
          },
        ],
        tools: [
          {
            title: 'A boning knife (5–6 inch)',
            url: 'https://en.wikipedia.org/wiki/Boning_knife',
            why: 'A flexible or semi-flexible blade for following seams and riding bone. The single most-used knife in a butcher\'s kit.',
          },
          {
            title: 'A cimeter (10–12 inch)',
            url: 'https://en.wikipedia.org/wiki/Cimeter',
            why: 'The long curved blade for separating primals. A butcher uses one to make the first long cut along the chine of a steer.',
          },
          {
            title: 'A carbon-steel handsaw',
            url: 'https://en.wikipedia.org/wiki/Bone_saw',
            why: 'A Stanley hand saw with a carbon blade does bone work cleaner than any band saw a home cook will ever own. Buy a cheap one, keep it sharp.',
          },
        ],
      },

      seeAlso: ['boning', 'knife', 'heat_transfer', 'smoke'],
      prereqs: ['knife'],
      leadsTo: ['boning', 'smoke', 'aged'],

      chapterActivity: 'A monthly "break a primal" session at a Red Hook butcher shop — the owner brings a chuck roll, the chapter brings ten people, and everyone leaves with three cuts.',

      sources: [
        'https://en.wikipedia.org/wiki/Primal_cut',
        'https://en.wikipedia.org/wiki/Butcher',
        'https://thebutchersguild.org/',
      ],
      verifiedAt: '2026-04-23',
    },

    boning: {
      id: 'boning',
      name: 'Boning & Trimming',
      level: 'Advanced',
      dek: 'The patient work of following seams rather than cutting through them — the difference between a butcher and someone with a sharp knife.',
      readTime: '12 min',

      sections: ['Seams, not saws', 'The knife and the grip', 'Trimming: fat, silverskin, and gristle', 'Breaking a primal at home', 'The yield'],
      body: [
        { type: 'lead', text: 'At the World Butchers\' Challenge in Sacramento in 2022, twelve national teams of six butchers each received a side of beef, a half pig, a whole lamb, and five chickens. Three hours and thirty minutes later, each team presented a display of finished cuts — roasts tied, steaks squared, sausages rolled, offal arranged. No saws. No bandsaw. Hand tools only. Every primal had been seamed out along its anatomical joints. The judges walked the aisles with scales: the team that kept the highest yield, with the cleanest work, won. This is what professional butchery looks like when it is shown off. The rest of the time it looks exactly the same, just slower.' },
        { type: 'h2', text: 'Seams, not saws' },
        { type: 'p', text: 'The beginning butcher\'s instinct is to cut through whatever is in the way. The trained butcher\'s instinct is to find the natural separation between muscles — the silvery sheet of connective tissue called a seam — and follow it with the tip of the blade. A seamed muscle comes out whole, clean, and yields more usable meat. A sawed-through muscle is ragged and wastes what the animal gave you. Every serious butchery tradition teaches seaming first and sawing only when seaming is impossible. It is slower on the first animal and faster on the tenth.' },
        { type: 'h2', text: 'The knife and the grip' },
        { type: 'p', text: 'The boning knife — five to six inches, narrow, stiff or flexible depending on the task — is the only knife a butcher really needs. It is held in a grip that resembles a pencil for detail work and a fist for power work. The butcher\'s off-hand does most of the pulling: the meat is held away from the bone under tension, and the blade glides along the surface the bone presents, not into the meat. A stiff blade goes through a pork shoulder; a flexible one follows the curve of a ribcage.' },
        { type: 'h2', text: 'Trimming: fat, silverskin, and gristle' },
        { type: 'p', text: 'After the bone comes out, the trim begins. Silverskin — the iridescent sheet of collagen that covers tenderloins and strip loins — does not break down in cooking and must be peeled off with the blade angled upward, away from the meat. Fat gets trimmed to the thickness the cut wants: a quarter-inch cap for a ribeye, almost none for a filet. Gristle is cut out and saved for stock. A properly trimmed cut looks like it belongs in a case. An untrimmed cut looks like it belongs in a sink.' },
        { type: 'h2', text: 'Breaking a primal at home' },
        { type: 'p', text: 'A home cook can learn most of the useful butchery on a single cut: the pork shoulder. Twelve pounds, about thirty dollars, from any supermarket. Separate the blade bone with the tip of the knife, follow the seam that divides the Boston butt from the picnic, find the money muscle at the top of the butt, and pull out the knot of tender meat underneath. An afternoon of patient work gives you six kinds of cuts — roasts, steaks, a tied rolled roast, skin for cracklings, fat for rendering, bones for stock. The second shoulder is twice as fast as the first.' },
        { type: 'h2', text: 'The yield' },
        { type: 'p', text: 'The reason whole-animal butchery is economical, when it is, is yield. A pork shoulder bought whole and broken at home runs about four dollars a pound across every usable cut — roasts, steaks, sausage, lard, stock, trim. The same cuts bought piece by piece at a supermarket run ten to sixteen dollars a pound. The tradeoff is time and freezer space. Most home butchers, once they have tried it, find that both are worth it for what ends up on their plate.' },
        { type: 'callout', text: 'A butcher\'s single most important tool is the honing steel, used every minute or two between cuts. A dull blade crushes seams rather than following them, and wastes meat. Every bench butcher keeps the steel within reach.' },
      ],

      keyTerms: ['seam butchery', 'boning', 'silverskin', 'trim', 'yield', 'connective tissue', 'honing steel', 'primal break', 'subprimal'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@MeatEaterTV',
            title: 'MeatEater — deboning and trimming playlists',
            channel: 'MeatEater',
            duration: 'variable',
            featured: true,
            why: 'Steven Rinella\'s team shoots boning work in close-up with almost no edits. The deer-to-freezer videos are the clearest seam-butchery tutorials on YouTube.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@glenandfriendscooking',
            title: 'Glen & Friends Cooking — home butchery',
            channel: 'Glen & Friends Cooking',
            duration: 'variable',
            featured: true,
            why: 'Glen Powell takes a home cook\'s approach: a whole pork loin, a whole chicken, a leg of lamb, broken down on a home cutting board with an ordinary knife.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@JKenjiLopezAlt',
            title: 'Kenji López-Alt — spatchcock-and-break videos',
            channel: 'J. Kenji López-Alt',
            duration: 'variable',
            featured: true,
            why: 'Kenji\'s first-person chicken breakdowns and leg-of-lamb seams are filmed in his home kitchen. Proof that a seam-butchery technique works at home with a regular knife.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@EssentialCraftsman',
            title: 'Essential Craftsman — deer and lamb breakdowns',
            channel: 'Essential Craftsman',
            duration: 'variable',
            featured: false,
            why: 'Scott Wadsworth\'s rural-butchery videos treat the task with the same craft-first ethic he applies to trades. Patient, unflashy, the full animal on the bench.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/BryanButcher',
            title: 'Bryan Mayer — butchery demos',
            channel: 'Bryan Mayer',
            duration: 'variable',
            featured: false,
            why: 'The Butchers\' Guild\'s executive director breaking down whole animals in workshop settings. Notes for apprentices baked into every video.',
          },
        ],
        books: [
          {
            title: 'Butchering: The Complete Guide to Sausage Making, Curing, Smoking, Preserving, and Cooking Meat',
            author: 'Philip Hasheider',
            year: 2018,
            url: 'https://www.quartoknows.com/books/9780760353936/butchering.html',
            why: 'The Voyageur Press standard — step-by-step photography of breaking down beef, pork, lamb, goat, and poultry. The reference most American home butchers own.',
          },
          {
            title: 'Whole Beast Butchery',
            author: 'Ryan Farr',
            year: 2011,
            url: 'https://www.chroniclebooks.com/products/whole-beast-butchery',
            why: 'Farr\'s step-by-step seam-butchery photos, cut by cut, are the closest thing to watching a butcher at work without actually standing next to one.',
          },
          {
            title: 'The Butcher\'s Guide to Well-Raised Meat',
            author: 'Joshua Applestone, Jessica Applestone, Alexandra Zissu',
            year: 2011,
            url: 'https://www.penguinrandomhouse.com/books/204167/the-butchers-guide-to-well-raised-meat-by-joshua-and-jessica-applestone-with-alexandra-zissu/',
            why: 'The Fleishers founders on teaching apprentices to break animals. The best published window into a working shop\'s education program.',
          },
          {
            title: 'On Food and Cooking',
            author: 'Harold McGee',
            year: 1984,
            url: 'https://en.wikipedia.org/wiki/On_Food_and_Cooking',
            why: 'McGee\'s meat chapter covers muscle fiber, connective tissue, and aging — the reference every butcher ends up checking after a long day.',
          },
        ],
        articles: [
          {
            title: 'Butcher',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Butcher',
            why: 'The trade, the guilds, and the modern revival of the whole-animal shop. Pointers to the London and Paris butcher histories.',
            year: null,
          },
          {
            title: 'Boning knife',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Boning_knife',
            why: 'The tool itself — stiff versus flexible, sizes, and why American and European butchers use slightly different blade geometries.',
            year: null,
          },
          {
            title: 'World Butchers\' Challenge',
            source: 'World Butchers\' Challenge',
            url: 'https://worldbutcherschallenge.com/',
            why: 'The international competition itself. The judging criteria — yield, cleanliness, creativity — are a concise definition of what the trade calls good work.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Meatsmith Harvest (full library)',
            provider: 'Farmsteadmeatsmith',
            url: 'https://meatsmith.com/',
            free: false,
            why: 'Brandon Sheard\'s subscription library is the closest thing to an apprenticeship available online. Hours of seam-butchery footage, filmed on his Washington state farm.',
          },
          {
            title: 'The Butchers\' Guild Directory',
            provider: 'The Butchers\' Guild',
            url: 'https://thebutchersguild.org/',
            free: true,
            why: 'The American guild\'s public apprenticeship directory and whole-animal-shop map. The first place to look for a local teacher.',
          },
        ],
        tools: [
          {
            title: 'A boning knife (flexible, 6 inch)',
            url: 'https://en.wikipedia.org/wiki/Boning_knife',
            why: 'A Victorinox Fibrox flexible boning knife costs about twenty-five dollars and outperforms the ones a butcher\'s apprentice was issued in 1980.',
          },
          {
            title: 'A breaking knife (10 inch)',
            url: 'https://en.wikipedia.org/wiki/Breaking_knife',
            why: 'A straight, stiff blade for the first long cuts through a primal. Does the work a butcher used to assign to a smaller cleaver.',
          },
          {
            title: 'Butcher\'s twine',
            url: 'https://en.wikipedia.org/wiki/Butcher%27s_twine',
            why: 'Cotton, food-safe, and the one consumable a home butcher burns through. Tying a rolled roast is the last step of every good breakdown.',
          },
        ],
      },

      seeAlso: ['primals', 'knife', 'heat_transfer', 'smoke'],
      prereqs: ['primals', 'knife'],
      leadsTo: ['smoke', 'aged'],

      chapterActivity: 'A quarterly "half a pig" workshop at a Bushwick butcher — the shop opens on a Monday, breaks down a locally raised half-pig on the bench, and sends members home with a share.',

      sources: [
        'https://en.wikipedia.org/wiki/Butcher',
        'https://en.wikipedia.org/wiki/Boning_knife',
        'https://worldbutcherschallenge.com/',
        'https://thebutchersguild.org/',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
