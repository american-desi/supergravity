// content/masonry.js
// Batch: B07-trades-I
// Last updated: 2026-04-23 by BATCH B07-trades-I
//
// Topics: brick, block, stone. Scaffolded lessons with worked examples + practice.

window.CONTENT = window.CONTENT || {};
window.CONTENT.masonry = {
  subjectId: 'masonry',
  version: 3,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B07-trades-I',
  topics: {

    // ——— BRICKLAYING ———
    brick: {
      id: 'brick',
      name: 'Bricklaying',
      level: 'Intermediate',
      dek: 'The course, the bond, the joint — and a craft that outlasts every surrounding trade.',
      readTime: '19 min',

      sections: ['Whole idea', 'Before you start', 'Mortar', 'Laying a course', 'Bonds', 'Joints', 'Repointing', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'The oldest fired bricks yet found were pulled from the ruins of Mohenjo-daro in the Indus Valley, made around 2500 BCE to the same dimensional ratio that a British bricklayer would use four thousand years later. A brick is a unit designed to fit the hand: one that a mason can pick up, butter with mortar, and lay down without setting his trowel aside. Every courthouse, every Georgian rowhouse, every nineteenth-century mill was built this way, one brick at a time. The skill outlasts the building.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bricklayer.jpg?width=1200', caption: 'A bricklayer at the corner — the hardest spot on any wall.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'A brick wall is a stack of small, uniform units glued together with a weaker, sacrificial material (mortar) in a pattern that distributes loads and allows the wall to breathe. The mason lays five or six bricks to a string line, steps back, checks, and lays five more. Speed comes from rhythm, not hurry.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'A 10-inch brick trowel. A 4-foot spirit level. A chalk line. A steel jointer sized to the joint you want (3/8" concave is standard). A mason\'s brush. A brick hammer and a brick set for cuts. A hawk or mortar board. A 5-gallon bucket for mix. For big jobs, a mortar mixer and a pair of mortar pans.' },
        { type: 'h3', text: 'Safety' },
        { type: 'p', text: 'Portland cement is caustic — gloves, long sleeves, safety glasses. Chronic exposure causes dermatitis. Don\'t let wet mortar sit on skin; rinse immediately. On scaffolding, tie off above six feet per OSHA 1926. Silica dust from cut brick and concrete is a known carcinogen — wet cutting and N95 masks.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'Course — a horizontal row of brick. Bed joint — the horizontal mortar joint. Head joint — the vertical mortar joint. Bond — the pattern in which bricks are laid. Face — the visible side. Stretcher — brick laid with its long side showing. Header — brick laid with its end showing. Lead — the stepped-up corner courses built first to guide the line. Jointer — the tool that shapes the visible mortar. Repointing — removing and replacing old mortar without disturbing the brick.' },

        { type: 'h2', text: 'Mortar — the sacrificial element' },
        { type: 'p', text: 'Modern mortar is Type N (1 part portland, 1 part lime, 6 parts sand) for typical above-grade work; Type S (stronger, more portland) for load-bearing; Type M (strongest, used rarely) for foundations. Historic buildings before 1920 were mortared with pure lime; they must be repointed with lime, not portland — the harder cement cracks the softer brick around it. Mix to a consistency that holds a peak when scooped with the trowel but slides off cleanly when the trowel is tilted.' },

        { type: 'h2', text: 'Laying a course' },
        { type: 'p', text: 'Spread a bed of mortar — roughly 3/8" thick, the length of about four bricks. Butter the end of a brick with mortar (the head joint). Lay the brick into the bed, tap with the trowel handle to set the bed joint to 3/8", shove the head joint tight to the previous brick. Scrape off excess mortar with the trowel. Move on. Every fifth brick, check the course with a level; every course, check plumb at the corners.' },
        { type: 'aside', label: 'Worked example', text: 'A 4-foot wall section, four courses tall, running bond. Build up the left and right corner leads first (four bricks tall each, stepping back with each course). Snap a string line at the top of each course from corner to corner, pulled tight with line blocks. Lay bricks between the leads to the line. Every bed joint 3/8", every head joint 3/8", every corner course offset by half a brick from the one below. Total time for a practiced bricklayer: 20 minutes. For a beginner: 90 minutes.' },
        { type: 'aside', label: 'Common mistake', text: 'Skipping the string line. Without it, courses wave and each one is visibly different. The string is tight; the bricks are laid to the string; the wall is straight.' },

        { type: 'h2', text: 'Bonds — patterns that tell the eye' },
        { type: 'p', text: 'Running bond: every course offset by half a brick. The ubiquitous American pattern. Flemish bond: alternating headers and stretchers in each course, with each header centered on a stretcher below. The elegant 18th-century pattern of Colonial Williamsburg. English bond: alternate courses of all headers and all stretchers — the strongest for load-bearing. Stack bond: aligned joints, all stretchers — only decorative; it has no structural value. The bond changes how load distributes through the wall and how the wall looks in daylight.' },

        { type: 'h2', text: 'Finishing the joint' },
        { type: 'p', text: 'After the mortar has set enough that a thumb pressed into it leaves only a slight print ("thumbprint hard," usually 20-45 minutes in normal weather), strike the joints with a jointer. A concave tool rounds the joint inward; a V-jointer leaves a V; a raked joint scrapes the mortar back from the brick face (dramatic but holds water and wears fast). Brush the wall lightly with a mason\'s brush to remove crumbs.' },

        { type: 'h2', text: 'Repointing — the most common masonry job' },
        { type: 'p', text: 'Failed old mortar is raked out to a depth of about 3/4" with a chisel or a small grinder (don\'t widen the joint; follow the existing profile). The joint is blown clean, misted with water, and filled with matching mortar — critically, with a similar lime content and strength as the original. The new joint is tooled to match the old profile. A badly repointed joint is worse than a failing one: portland-cement mortar against lime-bonded brick cracks the brick, not the joint.' },

        { type: 'h2', text: 'Troubleshooting' },
        { type: 'p', text: 'The wall bows out. Lead was not plumb; stop, tear down the last course, re-plumb the lead, resume. Mortar is cracking between the bricks. Movement not accommodated — in long walls, control joints every 20-30 feet. Efflorescence (white salt deposits). Water migrating through the wall carrying dissolved salts — improve drainage and flashing. Brick face spalling. Mortar was too strong for the brick; repoint with softer mortar.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'After running-bond brickwork, the next skills are arches (flat, segmental, and Roman), chimney construction, historic repointing (including finding matching lime mortar), and thin brick veneer. Richard Kreh\'s "Masonry Skills" is the classroom textbook; the Brick Industry Association publishes a full free technical notes library.' },

        { type: 'aside', label: 'Practice this week', text: 'Mix a single bucket of Type N mortar. Lay a 2-foot-long section of wall on a concrete slab, three courses tall. Tool the joints when they are thumbprint-hard. Tear it down the next morning, scrape the bricks clean, try again. Ten dollars of material, an afternoon of time, and you will meet every sensation of the trade.' },
        { type: 'aside', label: 'Self-check', text: 'What is the standard bed joint thickness? (3/8".) Why must historic buildings be repointed with lime mortar? (Portland cracks soft historic brick.) What is "thumbprint hard"? (The point at which mortar will hold a thumb impression but not deform — the moment to tool.) If any stumps you, watch This Old House "How to Lay Brick."' },

        { type: 'callout', text: 'First project: a small garden wall, three feet long by eighteen inches tall, running bond, on a poured concrete footing. A Saturday. Twenty dollars in brick, three dollars in mortar. Every step of the trade is in that wall.' },
      ],

      keyTerms: ['running bond', 'Flemish bond', 'English bond', 'header', 'stretcher', 'course', 'Type N mortar', 'Type S mortar', 'repointing', 'jointer', 'brick trowel', 'bed joint', 'head joint', 'lead', 'efflorescence'],

      resources: {
        videos: [
          { id: 'suR7KgwuA6M', source: 'youtube', url: 'https://www.youtube.com/watch?v=suR7KgwuA6M', title: 'How to Lay Brick', channel: 'This Old House', duration: '6:38', why: 'Mason Mark McCullough on tools, mortar, first courses.' },
          { id: 'NgWo18yKEpk', source: 'youtube', url: 'https://www.youtube.com/watch?v=NgWo18yKEpk', title: 'Brick Installation — Drainage Cavity Wall', channel: 'Building Science', duration: '8:24', why: 'Why modern brick is veneer with a drainage cavity.' },
          { id: 'vkM1dp_2zRk', source: 'youtube', url: 'https://www.youtube.com/watch?v=vkM1dp_2zRk', title: 'Rainscreen Drainage & Weeps for Brick Veneer', channel: 'Hohmann & Barnard', duration: '9:53', why: 'Drainage plane, flashing, weep holes.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@essentialcraftsman', title: 'Essential Craftsman — brick videos', channel: 'Essential Craftsman', duration: 'variable', why: 'Daily rhythm of laying brick.', featured: false },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/mattrisinger', title: 'The Build Show — brick veneer', channel: 'Matt Risinger', duration: 'variable', why: 'Modern brick-veneer construction.', featured: false },
        ],
        books: [
          { title: 'Masonry Skills', author: 'Richard T. Kreh', year: 2014, url: '', why: 'American classroom standard.' },
          { title: 'Modern Masonry: Brick, Block, Stone', author: 'Kicklighter & Andera', year: 2022, url: '', why: 'Goodheart-Willcox textbook.' },
          { title: 'Building with Masonry', author: 'Dick Kreh', year: 1998, url: '', why: 'Taunton Pros By Pros.' },
          { title: 'Brickwork — A practical treatise', author: 'Walker', year: 1903, url: 'https://commons.wikimedia.org/wiki/File:Brickwork,_a_practical_treatise_embodying_the_general_and_higher_principles_of_bricklaying,_cutting_and_setting_..._and_a_series_of_problems_in_applied_geometry_(IA_brickworkpractic00walkrich).pdf', why: 'Public-domain treatise on bond geometry.' },
        ],
        articles: [
          { title: 'Brickwork', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Brickwork', why: 'Bonds, mortar, history.', year: null },
          { title: 'Mortar (masonry)', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Mortar_(masonry)', why: 'Why portland-on-lime cracks brick.', year: null },
          { title: 'Masonry', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Masonry', why: 'Wider context.', year: null },
        ],
        courses: [
          { title: 'NCCER Masonry', provider: 'NCCER', url: 'https://www.nccer.org/', free: false, why: 'American apprenticeship curriculum.' },
          { title: 'IMI apprenticeship', provider: 'International Masonry Institute', url: 'https://imiweb.org/', free: false, why: 'BAC union\'s training arm.' },
        ],
        tools: [
          { title: 'Concrete Masonry & Hardscapes Association', url: 'https://ncma.org/', why: 'Technical resources for the modern mason.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bricklayer.jpg?width=1200', caption: 'A bricklayer at the corner.', credit: 'Wikimedia Commons', alt: 'Bricklayer' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Brickwork_pattern_flemish_bond.jpg?width=1200', caption: 'Flemish bond.', credit: 'Wikimedia Commons', alt: 'Flemish bond' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/English_bond_brickwork.jpg?width=1200', caption: 'English bond.', credit: 'Wikimedia Commons', alt: 'English bond' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Brick_trowel.jpg?width=1200', caption: 'A mason\'s trowel.', credit: 'Wikimedia Commons', alt: 'Brick trowel' },
        ],
        animations: [
          { youtubeId: 'suR7KgwuA6M', caption: 'This Old House: how to lay brick.', why: 'Six focused minutes from a thirty-year mason.' },
        ],
      },

      seeAlso: ['block', 'stone', 'framing', 'flashing'],
      prereqs: [],
      leadsTo: ['block', 'stone'],

      chapterActivity: 'A Saturday bricklaying workshop at a Bushwick brickyard.',

      sources: ['https://en.wikipedia.org/wiki/Brickwork', 'https://en.wikipedia.org/wiki/Mortar_(masonry)', 'https://en.wikipedia.org/wiki/Masonry'],
      verifiedAt: '2026-04-23',
    },

    // ——— CONCRETE BLOCK ———
    block: {
      id: 'block',
      name: 'Concrete Block',
      level: 'Beginner',
      dek: 'Structural, fast, unglamorous — the unit behind every American basement and warehouse wall.',
      readTime: '17 min',

      sections: ['Whole idea', 'Before you start', 'The unit', 'Laying block', 'Reinforcement', 'Cavity walls', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'The concrete masonry unit was patented in 1900 by a Boston bricklayer named Harmon Palmer, and by 1930 it had replaced brick in the bones of American commercial construction. A CMU — nominal sixteen inches long, eight inches high, eight inches thick — lays up three times as fast as brick, for a third of the labor, to make a wall that is structurally stronger. It is the unit behind every American basement wall, every school hallway, every warehouse, and every retaining wall holding a hillside off the street.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Concrete_masonry_unit.jpg?width=1200', caption: 'A standard 8x8x16 concrete masonry unit.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'CMU is big brick. The technique is the same — trowel, level, line, course — but with a larger unit, fewer joints, and the ability to reinforce the hollow cells with rebar and grout to turn a stack of block into a monolithic reinforced wall.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'An 8-inch mason\'s trowel (slightly longer than a brick trowel). A 48-inch level. A chalk line. A mason\'s line with line blocks. A 2-lb brick hammer and mason\'s chisel. A mason\'s brush. Scaffolding for anything over 4 feet tall. A 5-gallon mortar pan on a stand.' },
        { type: 'h3', text: 'Safety' },
        { type: 'p', text: 'An 8-inch-wide CMU weighs about 38 lbs; lift with your legs. Bend knees, not back. Silica dust from cutting block is a hazard — wet-cut with a diamond blade and respiratory protection.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'CMU — Concrete Masonry Unit. Cell — the hollow core of a block. Bond beam — a course of block with cells filled with grout and rebar to act as a horizontal beam. Face shell — the thicker outer wall of the block. Web — the thinner internal walls. Grout — a pourable mortar used to fill cells around rebar. Control joint — an intentional vertical break allowing movement.' },

        { type: 'h2', text: 'The unit' },
        { type: 'p', text: 'Nominal dimensions: 8x8x16. Actual: 7⅝ x 7⅝ x 15⅝, so that a block plus a 3/8" mortar joint equals 16 inches exactly. Variations: 4-inch, 6-inch, and 12-inch wide (for different wall thicknesses); bullnose blocks (rounded corner); sash blocks (slot for window jamb); pilaster blocks (reinforced column). Lightweight blocks with expanded-shale aggregate weigh half as much as dense-aggregate and are easier on the back.' },

        { type: 'h2', text: 'Laying block' },
        { type: 'p', text: 'First course is critical. Lay a full bed of mortar on the footing, set blocks, check for level every two blocks, and check for square diagonally across the building. Subsequent courses get mortar only on the webs and face shells — not on the cells, unless they\'ll be grouted. Snap a chalk line on the footing for the inside face of the wall before starting.' },
        { type: 'aside', label: 'Worked example', text: 'An 8-foot-long, 4-foot-tall basement wall: six courses of CMU (6 × 8" = 48"). Lay the first course full bed, including end blocks. Subsequent courses on just the webs and face shells. Cells containing rebar and grout are filled after every 4 feet of lift, to avoid blowouts. Total mortar: about 5 cubic feet. Total block: about 48 stretchers and 6 corner blocks.' },
        { type: 'aside', label: 'Common mistake', text: 'Pouring grout into cells that weren\'t intended to be grouted. The mortar joints blow out. Only cells around rebar should be grouted; use cleanout blocks at the bottom for inspection.' },

        { type: 'h2', text: 'Reinforcement' },
        { type: 'p', text: 'Modern code requires vertical rebar in CMU walls at 40-48 inch intervals, wired to horizontal rebar at every bond beam (typically every 4 feet of height). Rebar is set before block-laying, and cells around the rebar are grouted. Horizontal joint reinforcement — a prefabricated ladder or truss of wire — is laid in the bed joint every other course, tying the two face shells together.' },

        { type: 'h2', text: 'Cavity walls — the modern exterior' },
        { type: 'p', text: 'A typical modern American exterior wall is a cavity wall: an interior CMU wall for structure, a 2-inch air cavity, and a brick veneer on the outside. The cavity drains water that gets past the brick; weep holes at the bottom let it escape. Metal ties every 16" vertically and 24" horizontally connect the two walls.' },

        { type: 'h2', text: 'Troubleshooting' },
        { type: 'p', text: 'The wall bows. First course wasn\'t level, or the leads were not plumb. Stop, re-plumb. A grouted cell blew a joint. Rate of pour too high; lifts must be limited (typically 4-foot lifts) and cleanouts are essential. Efflorescence on the face. Water migrating; check flashing and cap.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'After CMU foundation walls, the next skills are reinforced CMU for seismic zones, CMU plaster finish, architectural block (split-face, ribbed, or ground-face), and ICF (insulated concrete forms, a related modern alternative). CMHA\'s TEK notes are the industry reference.' },

        { type: 'aside', label: 'Practice this week', text: 'Lay six courses of CMU on a poured slab or footing, building a short freestanding wall. Mix your own mortar. Check every course for level. Tool the joints. Under $50 in block and mortar. You will learn the heft and the rhythm.' },
        { type: 'aside', label: 'Self-check', text: 'What is the nominal vs actual size of an 8x8x16 block? (15⅝" + 3/8" joint = 16".) Why is horizontal joint reinforcement important? (It ties the two face shells together and resists shrinkage cracks.) Where does a typical bond beam go? (Every 4 feet of wall height, and at the top of the wall.) If any stumps you, watch Essential Craftsman\'s CMU videos.' },

        { type: 'callout', text: 'First project: build a small CMU planter box, 3 feet square by 2 feet tall. You meet every step of block work — footing, leveling, coursing, bond-beam cap — at landscaping scale.' },
      ],

      keyTerms: ['CMU', 'cinder block', 'cell', 'bond beam', 'rebar', 'grout', 'veneer', 'cavity wall', 'pilaster', 'face shell', 'running bond', 'control joint', 'joint reinforcement', 'cleanout'],

      resources: {
        videos: [
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@essentialcraftsman', title: 'Essential Craftsman — block wall builds', channel: 'Essential Craftsman', duration: 'variable', why: 'Full foundation walls on camera.' },
          { id: null, source: 'other', url: 'https://www.thisoldhouse.com/', title: 'This Old House — foundation and retaining wall', channel: 'This Old House', duration: 'variable', why: 'Foundation repair and retaining walls.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/mattrisinger', title: 'The Build Show — concrete and CMU', channel: 'Matt Risinger', duration: 'variable', why: 'Building-science view on waterproofing.', featured: false },
        ],
        books: [
          { title: 'Masonry Skills', author: 'Richard T. Kreh', year: 2014, url: '', why: 'Block-laying, reinforcement, grouting.' },
          { title: 'Modern Masonry: Brick, Block, Stone', author: 'Kicklighter & Andera', year: 2022, url: '', why: 'CMU dimensions and grout requirements.' },
          { title: 'Building with Masonry', author: 'Dick Kreh', year: 1998, url: '', why: 'Foundations, retaining walls, reinforced piers.' },
        ],
        articles: [
          { title: 'Concrete masonry unit', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Concrete_masonry_unit', why: 'Dimensions, composition, strength ranges.', year: null },
          { title: 'Masonry', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Masonry', why: 'Wider context and seismic considerations.', year: null },
        ],
        courses: [
          { title: 'NCCER Masonry', provider: 'NCCER', url: 'https://www.nccer.org/', free: false, why: 'Block modules of the American apprenticeship.' },
        ],
        tools: [
          { title: 'CMHA technical resources', url: 'https://ncma.org/', why: 'TEK notes — design tables, grouting, reinforcement schedules.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Concrete_masonry_unit.jpg?width=1200', caption: 'A standard CMU.', credit: 'Wikimedia Commons', alt: 'CMU' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Block_wall_under_construction.jpg?width=1200', caption: 'Block wall mid-course.', credit: 'Wikimedia Commons', alt: 'Block wall' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Reinforced_CMU_wall.jpg?width=1200', caption: 'Reinforced block wall with exposed rebar.', credit: 'Wikimedia Commons', alt: 'Reinforced CMU' },
        ],
      },

      seeAlso: ['brick', 'stone', 'framing', 'roofing'],
      prereqs: [],
      leadsTo: ['brick', 'stone'],

      chapterActivity: 'A foundation-pour weekend at a Staten Island lot.',

      sources: ['https://en.wikipedia.org/wiki/Concrete_masonry_unit', 'https://en.wikipedia.org/wiki/Masonry'],
      verifiedAt: '2026-04-23',
    },

    // ——— STONEWORK ———
    stone: {
      id: 'stone',
      name: 'Stonework',
      level: 'Advanced',
      dek: 'Natural, irregular, beautiful — and the oldest building craft practiced anywhere.',
      readTime: '20 min',

      sections: ['Whole idea', 'Before you start', 'Reading stone', 'Dressed stone', 'Dry stone', 'Foundations', 'Tooling', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'The dry-stone walls crossing the Yorkshire Dales and the Burren in western Ireland were laid without mortar, without machinery, by people who had stones in the field and fences to build. Some of them have stood, with seasonal maintenance, for six hundred years. At the other end of the craft, the ashlar granite facing of Grand Central Terminal was quarried, cut, dressed, and set by stonemasons whose guild traces its continuous descent to the medieval lodges of the cathedral builders.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dry_stone_wall_01.JPG?width=1200', caption: 'A dry stone wall in Yorkshire — laid without mortar, standing for centuries.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'Stone comes out of the earth in irregular shapes; the mason\'s job is to arrange those shapes so the weight of the wall holds itself together. Every stone has a good face, a bed (the flat side), and a back. Every stone placed correctly makes the wall stronger; every stone placed incorrectly makes it weaker. That is the whole craft, whether dry or mortared.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'A 3-lb stone hammer for splitting and trimming. A set of stonemason\'s chisels (point, pitching tool, hand tracer). A 4-foot level. A straight edge. For dry stone: a pair of wallers\' hammers and a lump of string. For mortared stone: standard masonry tools plus a hawk for pointing. Gloves always; the stones scrape.' },
        { type: 'h3', text: 'Safety' },
        { type: 'p', text: 'Stone chips fly. Safety glasses. Steel-toed boots. Lift with legs; never lift a stone you can\'t carry at arm\'s length without bending. Work with a partner on anything over fifty pounds. Silica dust on cutting — wet-cut and respirator.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'Ashlar — dressed, squared stone laid in courses with mortar. Rubble — irregular, unshaped stone. Dry stone — walls built without mortar. Bed — the flat surface a stone sits on. Hearting — the small stones packed into the interior of a dry-stone wall. Through stone — a long stone laid across the wall, tying the two faces together. Coping — the top course; often long, thin stones set on edge or vertical. Pinning — small stones wedged under larger ones to stabilize.' },

        { type: 'h2', text: 'Reading stone — the first skill' },
        { type: 'p', text: 'Every stone has a face (the best-looking side, goes outward), a bed (the flat side, goes down), and a back. Granite is hard and unforgiving; limestone is soft enough to carve; slate splits in parallel planes; sandstone has grain and weathers along it. A stone placed upside down will shed water into the wall instead of off it. The mason picks up a stone, looks at it, rotates it through its possibilities, and sets it where it belongs. This is not a skill that can be taught in a book.' },

        { type: 'h2', text: 'Dressed stone (ashlar)' },
        { type: 'p', text: 'Ashlar work uses stones shaped to uniform dimensions — either in the quarry or in the workshop by a banker mason — then laid up with mortar like oversize brick. The joints are typically 3/8" to 1/2". Courses can run all the same height (coursed ashlar) or vary (random ashlar). It is slow, expensive, and beautiful.' },

        { type: 'h2', text: 'Dry stone — the harder craft' },
        { type: 'p', text: 'A dry stone wall is built in three parts: two faces of carefully placed stones with the best faces outward, a hearting of small stones filling the middle, and coping stones on top. The rules: every stone crosses a joint below it (no stacked joints); every course contains "through stones" every few feet tying the two faces together; each stone\'s longest axis runs into the wall, not along it. The golden rule is "one on two, two on one" — no stone sits on a single joint.' },
        { type: 'aside', label: 'Worked example', text: 'Building a 3-foot-tall dry-stone wall on a simple footing: dig a 6-inch trench wider than the wall, tamp the bottom, place the largest stones in the bottom course as the base. Above that, courses of medium stones with the best face outward. Every 18 inches horizontally and 12 inches vertically, place a through stone. Hearting fills the center as you go. At the top, a course of coping stones set on edge or stood vertically.' },
        { type: 'aside', label: 'Common mistake', text: 'Stacking joints. When two joints on adjacent courses align, the wall has a vertical seam that will fail first. Every stone must cross the joint below it. This is the most-broken rule and the most damaging.' },

        { type: 'h2', text: 'Foundations for stone walls' },
        { type: 'p', text: 'Stone is heavy; foundations matter. Dry-stone walls can sit on a tamped gravel footing 6-12 inches deep. Mortared stone walls need a concrete footing below the frost line — typically 36-48 inches in the northern US. Skimp on the footing and the wall cracks in the first frost cycle.' },

        { type: 'h2', text: 'Tooling stone' },
        { type: 'p', text: 'A stone can be split by driving a point chisel into a scored line. A flat face can be dressed by working a hand tracer along the edge. A textured surface can be created by pecking with a bush hammer. A polished face is machined. Each tool has a characteristic mark; a trained mason can date stone work by the tool marks alone. Traditional hand work looks different from machine-cut; both are correct, each for its context.' },

        { type: 'h2', text: 'Troubleshooting' },
        { type: 'p', text: 'The wall bulges outward. Wall is too tall for its batter (taper); dry walls typically batter 1:6 (narrower at top). Rebuild the bulge. Stones wiggle. Insufficient pinning; pack small stones underneath. Wall is falling apart over time. Freeze-thaw; likely missing a coping course that sheds water. Joints are cracking in a mortared wall. Likely portland on limestone — repoint with lime mortar.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'After dry stone walls, the next territories are dressed ashlar masonry, historic restoration (matching stone and mortar to originals), stone carving, and the rare specialty of stone arch and vault construction. The Stone Trust in Vermont offers certification courses; Ian Cramb\'s "The Art of the Stonemason" is the classic written reference.' },

        { type: 'aside', label: 'Practice this week', text: 'Build a three-foot section of dry stone wall, eighteen inches tall, from fieldstone on a gravel base. Every stone must cross the joint below it. Every 18 inches horizontally, place a through stone. Step back after every course, check the batter (the inward lean), adjust. One afternoon; no permit required if under 4 feet tall in most jurisdictions.' },
        { type: 'aside', label: 'Self-check', text: 'What is a through stone? (A stone that goes the full width of the wall, tying both faces.) What is the typical batter of a dry-stone wall? (1:6 — about 1 inch in from vertical for every 6 inches of height.) Why do dry stone walls have a coping course? (Sheds water and locks the top stones together.) If any stumps you, watch The Stone Trust\'s workshop time-lapse.' },

        { type: 'callout', text: 'First project: a small garden bench of three large flat stones, dry-laid. No mortar, no footing for a bench this short. One hour. Total cost: the price of three stones from a landscape yard. You will meet every stone-sensation of the trade.' },
      ],

      keyTerms: ['ashlar', 'rubble', 'dry stone', 'bed', 'through stone', 'coping stone', 'dressed stone', 'banker mason', 'fixer mason', 'chisel and mash', 'pointing', 'quoin', 'hearting', 'batter'],

      resources: {
        videos: [
          { id: 'XxuvV96sbE4', source: 'youtube', url: 'https://www.youtube.com/watch?v=XxuvV96sbE4', title: 'Dry Stone Wall: One Day Indoor Workshop Time Lapse', channel: 'The Stone Trust', duration: '3:17', why: 'A day\'s work in three minutes.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@DryStoneWallingAssociationofGr', title: 'DSWA-GB', channel: 'Dry Stone Walling Association of Great Britain', duration: 'variable', why: 'The craft\'s oldest advocacy body.' },
          { id: null, source: 'other', url: 'https://www.thisoldhouse.com/', title: 'This Old House — stonework', channel: 'This Old House', duration: 'variable', why: 'Mark McCullough and Roger Cook on American projects.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@essentialcraftsman', title: 'Essential Craftsman — stonework', channel: 'Essential Craftsman', duration: 'variable', why: 'Scott Wadsworth on dressed stone.', featured: false },
          { id: null, source: 'other', url: 'https://thestonetrust.org/how-to-videos/', title: 'The Stone Trust — How-To Videos', channel: 'The Stone Trust', duration: 'variable', why: 'Only North American center for year-round dry-stone instruction.', featured: false },
        ],
        books: [
          { title: 'The Art of the Stonemason', author: 'Ian Cramb', year: 1992, url: 'https://archive.org/details/artofstonemason0000cram', why: 'Fifth-generation Scottish stonemason\'s classic.' },
          { title: 'Masonry Skills', author: 'Richard T. Kreh', year: 2014, url: '', why: 'American classroom text, rubble and ashlar.' },
          { title: 'Dry Stone Walling: A Practical Handbook', author: 'BTCV', year: 2013, url: '', why: 'British field-tested guide.' },
          { title: 'Building with Stone', author: 'Charles McRaven', year: 1989, url: '', why: 'American stone houses, walls, fireplaces.' },
        ],
        articles: [
          { title: 'Stonemasonry', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Stonemasonry', why: 'Göbekli Tepe to modern stereotomy.', year: null },
          { title: 'Dry stone', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Dry_stone', why: 'Walling without mortar, regional traditions.', year: null },
          { title: 'Mortar (masonry)', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Mortar_(masonry)', why: 'Critical for historic stone.', year: null },
        ],
        courses: [
          { title: 'The Stone Trust', provider: 'The Stone Trust (Vermont)', url: 'https://thestonetrust.org/', free: false, why: 'American DSWA branch, certification in 7 states.' },
          { title: 'DSWA-GB', provider: 'DSWA-GB', url: 'https://www.dswa.org.uk/', free: false, why: 'The original certifying body.' },
        ],
        tools: [
          { title: 'Trow and Holden', url: 'https://www.trowandholden.com/', why: 'Vermont maker of hand-forged stonemason tools.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dry_stone_wall_01.JPG?width=1200', caption: 'Dry stone wall in Yorkshire.', credit: 'Wikimedia Commons', alt: 'Dry stone wall' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dry_stone_wall_builder.JPG?width=1200', caption: 'A waller selecting a stone.', credit: 'Wikimedia Commons', alt: 'Dry stone builder' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ashlar_masonry.jpg?width=1200', caption: 'Ashlar masonry.', credit: 'Wikimedia Commons', alt: 'Ashlar' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Stonemason_tools.jpg?width=1200', caption: 'Traditional stonemason tools.', credit: 'Wikimedia Commons', alt: 'Stonemason tools' },
        ],
        animations: [
          { youtubeId: 'XxuvV96sbE4', caption: 'The Stone Trust: one-day wall, time-lapsed.', why: 'A day of patient hands in three minutes.' },
        ],
      },

      seeAlso: ['brick', 'block', 'forge', 'flashing'],
      prereqs: ['brick'],
      leadsTo: [],

      chapterActivity: 'A dry-stone walling weekend with The Stone Trust at a Hudson Valley farm.',

      sources: ['https://en.wikipedia.org/wiki/Stonemasonry', 'https://en.wikipedia.org/wiki/Masonry', 'https://en.wikipedia.org/wiki/Dry_stone', 'https://thestonetrust.org/'],
      verifiedAt: '2026-04-23',
    },

  },
};
