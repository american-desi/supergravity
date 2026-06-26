// content/carpentry.js
// Batch: B07-trades-I
// Last updated: 2026-04-23 by BATCH B07-trades-I
//
// Topics: tools_wood, framing, joinery, trim, cabinetry
//
// Scaffold per topic:
//   lead -> figure -> 'Whole idea' -> 'Before you start' (tools/safety/words)
//   -> sub-skills (with Worked example + Common mistakes asides each)
//   -> 'Troubleshooting' -> 'Going deeper' -> 'Practice this week' aside
//   -> 'Self-check' aside -> 'First project' callout.

window.CONTENT = window.CONTENT || {};
window.CONTENT.carpentry = {
  subjectId: 'carpentry',
  version: 3,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B07-trades-I',
  topics: {

    // ——— TOOLS OF THE TRADE ———
    tools_wood: {
      id: 'tools_wood',
      name: 'Tools of the Trade',
      level: 'Beginner',
      dek: 'Before the cut comes the measure; before the measure, the tool in the hand.',
      readTime: '18 min',

      sections: ['Whole idea', 'Before you start', 'Measuring', 'Marking', 'Cutting', 'Assembly', 'Sharpening', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'A carpenter walking onto a job site in 1820 would recognize, and could still use, most of the tools a framer reaches for today. The claw hammer, the handsaw, the combination square, the chalk line, the level — these are not improvements on older tools so much as old tools polished. The power tools that joined them after 1930 are newer and louder, but the discipline is the same: you cannot cut what you have not marked, and you cannot mark what you have not measured.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Carpenter_at_work.jpg?width=1200', caption: 'A carpenter at work — the two tools on the bench are older than the building around them.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'Every tool in a carpenter\'s kit does one of four things: measure, mark, cut, or fasten. Learn the hand version of each job before you buy the power version. The hand tools train the habits — hold the tape square, mark with a V, cut to the line — that make the power tools safe and useful. In that order, nothing you buy is wasted.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'The starter kit' },
        { type: 'p', text: 'Under eighty dollars gets you everything you need for the first month. A 16-ounce claw hammer. A 25-foot tape measure marked in sixteenths. A seven-inch Swanson speed square. A 24-inch spirit level. A sharp pencil and a utility knife with fresh blades. A chalk line. Two six-inch C-clamps. Keep them in a bucket; add a tool a month.' },
        { type: 'h3', text: 'Safety first, every time' },
        { type: 'p', text: 'OSHA 29 CFR 1926 covers every construction site in the United States. The rules that matter on day one: safety glasses on any power tool; hearing protection for anything louder than a vacuum; steel-toed boots; no loose sleeves or jewelry near a blade; never reach over a spinning saw to grab a cutoff. Every shop injury you will ever hear about traces to one of those rules being skipped.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'Kerf — the width of the saw cut. Scribe — to mark one piece by tracing the shape of another. Plumb — vertical, measured with a level. Level — horizontal. Square — at exactly ninety degrees. Reveal — the visible margin between two pieces. Hold-down — any clamp that keeps work still. Waste side — the part of the board that will be thrown away; the line should live on the keep side.' },

        { type: 'h2', text: 'Measuring well' },
        { type: 'p', text: 'A tape measure has two tricks most beginners miss. The hook at the end slides back and forth by the thickness of the hook itself, so the first inch reads correctly whether you are measuring inside a box or from an edge. The black diamonds at 19.2 inches are stud-and-truss centers for a twenty-four-inch-on-center layout. Read the tape from the same side every time — most American tapes have the main numbers on one side and the fractions on the other — and hold it flat to the work.' },
        { type: 'aside', label: 'Worked example', text: 'You need a shelf 48 inches long to fit between two walls that are 48 1/8 inches apart. Take three measurements — at the floor, at the eye, and at the ceiling — because the walls are not parallel. The three readings are 48 3/16, 48 1/8, and 48 1/16. Cut to the smallest minus a sixteenth for clearance: 48 inches exactly. The shelf will drop in at every height.' },
        { type: 'aside', label: 'Common mistake', text: 'Holding the tape against a rough surface and reading the nearest eighth when the true number is a sixteenth away. Fractional errors compound: three cuts each a sixteenth short is a quarter inch at the end. Trust the smaller division on the tape.' },

        { type: 'h2', text: 'Marking with intent' },
        { type: 'p', text: 'A pencil line has thickness. A carpenter marks with a V that points at the cut, because the tip of the V is unambiguous. A sharp pencil makes a fine line; a dull one makes a wide one that will be wrong by a sixteenth. Replace the pencil before it rounds off. For precise joinery, use a knife line: a utility knife or marking knife drawn along a square cuts the wood fibers and leaves a groove the saw will track into.' },
        { type: 'h3', text: 'The speed square' },
        { type: 'p', text: 'The speed square is the tool that earns its name. Hold the fence against the edge of a board, and the 90-degree edge crosses the face perpendicular — that is your crosscut line. Rotate it and the triangle marks 45 degrees without any setup. The tables stamped on the face let you mark rafter angles directly in degrees; Scott Wadsworth\'s videos on this tool alone will save you months of fumbling with a framing square.' },
        { type: 'aside', label: 'Practice', text: 'Take a scrap 2x4. Mark three square crosscut lines with a pencil using the speed square. Then mark three more with a utility knife drawn along the same square. Cut all six with a handsaw. You will see — and feel — the difference: the knife-scored cuts are crisper and start cleaner.' },

        { type: 'h2', text: 'Cutting to the line' },
        { type: 'p', text: 'A handsaw started well cuts itself. Start the kerf on the far side of the board with a short, slow backward stroke; the teeth find the line and stop wandering. The first full forward stroke should follow the groove you started. Keep your eye on the line, not on the saw, and let the weight of the tool do the work. A circular saw is a handsaw that moves on its own — same principle, faster travel. Set the depth so the teeth project about a quarter inch below the board; less than that and the saw binds, more than that and the kickback risk rises.' },
        { type: 'aside', label: 'Worked example', text: 'Cross-cutting a 2x4 with a circular saw: support both sides of the cut so the offcut does not pinch the blade. Keep the shoe flat on the board. Start the saw off the wood, let it reach full speed, then push it into the cut. Listen — if the saw slows, something is pinching. Back off and reset.' },
        { type: 'aside', label: 'Common mistake', text: 'Holding the waste side. If the cutoff is supported by your hand, your hand is in the path of the blade\'s exit arc. Support both ends of the cut on sawhorses or a workbench; let the offcut fall free.' },

        { type: 'h2', text: 'Fastening cleanly' },
        { type: 'p', text: 'A nail is driven at the sharp end, not the head. Start with light taps while you hold the nail between thumb and forefinger, then swing from the elbow once the nail stands on its own. A sixteen-penny (16d) nail is 3½ inches long — the standard for framing. Hit the head square and the nail goes straight; hit it at an angle and the nail bends. A screw is a nail that resists pullout; a drill-driver with a torque clutch lets you set screws flush without stripping the heads.' },
        { type: 'aside', label: 'Worked example', text: 'Driving a 16d nail into a stud: four or five medium blows after the first two taps. If the nail bends at the third blow, pull it, check that the wood is not splitting (which means you are too close to the end), and start fresh. Pre-drilling a sixteenth-inch pilot hole eliminates splits at board ends.' },

        { type: 'h2', text: 'Sharpening — the skill that extends every tool' },
        { type: 'p', text: 'A dull chisel is a dangerous chisel: it requires more force, and the force slips. Sharpening is simple in principle (two flat stones, progressively finer grits, and patience) and maddening in practice (every angle, every pressure, matters). Find a cheap combination stone, a honing guide, and spend twenty minutes a week on it. In a year you will sharpen better than a craftsman who has owned a grinder for thirty.' },
        { type: 'h3', text: 'The two-stone method' },
        { type: 'p', text: 'Coarse stone (about 1,000 grit) establishes the bevel and removes chips. Fine stone (6,000 grit or a leather strop with compound) polishes the edge. Start with the flat back of the chisel on the coarse stone — the back must be dead flat. Then work the bevel at 25 degrees. Finish on the fine stone. Strop on leather to remove the wire edge. The blade should shave the hair off your forearm.' },

        { type: 'h2', text: 'Troubleshooting' },
        { type: 'p', text: 'The pieces do not fit. Measure again — did you read from the correct side of the tape? The cut is not square. Check that the speed square fence was against a clean edge. The screw stripped. You forgot to pre-drill, or the pilot was too big. The circular saw kicked back. The blade pinched because the offcut was unsupported; always support both sides. The chisel dug too deep. Bevel was pointing the wrong way; in a paring cut, the bevel goes up.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'The next tools to buy, in order: a jigsaw for curves, a compound miter saw for repeated angle cuts, a router for shaping edges, a block plane for finesse. Each replaces a slower hand tool; none replaces the judgment to use it. When you are ready for joinery, read the Joinery topic next; when you are ready to frame a wall, go to Framing.' },

        { type: 'aside', label: 'Practice this week', text: 'Using only the starter kit, build a sawhorse from a single 8-foot 2x4 and a half-sheet of plywood. The design is on YouTube under "2x4 sawhorse plans." You will use every tool in the bucket, and when you are done, you have a workbench that holds the next project.' },
        { type: 'aside', label: 'Self-check', text: 'Can you name the three reasons to pre-drill a pilot hole? Can you explain why the offcut must be supported on both sides? Can you describe the difference between a rip cut and a cross cut? If you cannot answer any of these, watch the Essential Craftsman "Mastering the Basic Tools" playlist before you buy your next tool.' },

        { type: 'callout', text: 'First project: a sawhorse. Tools: the full starter kit. Material: one 8-foot 2x4 and a 2x2 ripped from a sheet of 3/4 plywood. Time: two hours on a Saturday. Cost: under fifteen dollars. You will own a piece of shop furniture you built, and every tool in the bucket will have done real work.' },
      ],

      keyTerms: ['speed square', 'combination square', 'chalk line', 'claw hammer', 'circular saw', 'compound miter', 'plumb', 'level', 'square', 'OSHA 1926', 'kerf', 'scribe', 'pilot hole', 'reveal', 'kickback'],

      resources: {
        videos: [
          { id: 'xra7CamEldU', source: 'youtube', url: 'https://www.youtube.com/watch?v=xra7CamEldU', title: 'It\'s Not Just a Simple Framing Square. It\'s a Whole Lot More', channel: 'Essential Craftsman', duration: '14:20', why: 'Forty years behind the tool. The single best tool-education video on YouTube.' },
          { id: 'V1S4ZVHDc9A', source: 'youtube', url: 'https://www.youtube.com/watch?v=V1S4ZVHDc9A', title: 'Framing Square Pro Tips', channel: 'Essential Craftsman', duration: '11:42', why: 'The older companion — practical layout tricks the apprentice rarely gets taught.' },
          { id: 'd7e6IOdKfVw', source: 'youtube', url: 'https://www.youtube.com/watch?v=d7e6IOdKfVw', title: 'Building a Craftsman House: Start-to-Finish Timelapse', channel: 'Essential Craftsman', duration: '16:24', why: 'Watch every tool come out, in order, over a full house build.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/playlist?list=PLRZePj70B4Iy_cf9Ad-B9KC-PYF2XXOu6', title: 'Mastering the Basic Tools of Carpentry (playlist)', channel: 'Essential Craftsman', duration: 'playlist', why: 'The full first-tool curriculum in one place.', featured: false },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@StumpyNubs', title: 'Stumpy Nubs — tool tips and tricks', channel: 'Stumpy Nubs (James Hamilton)', duration: 'variable', why: 'Weekly tool videos; strongest on table-saw safety and measuring.', featured: false },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/rexkrueger', title: 'Woodwork for Humans', channel: 'Rex Krueger', duration: 'variable', why: 'Pre-industrial hand tools, demystified.', featured: false },
        ],
        books: [
          { title: 'Carpentry', author: 'Leonard Koel', year: 1985, url: 'https://archive.org/details/carpentry00koel_m1g', why: 'The American Technical Publishers classroom textbook. Still used by apprentices.' },
          { title: 'The Complete Manual of Woodworking', author: 'Albert Jackson, David Day, Simon Jennings', year: 1989, url: '', why: 'Visual, encyclopedic, patient. Best single tool reference in print.' },
          { title: 'Why We Make Things and Why It Matters', author: 'Peter Korn', year: 2013, url: 'https://godine.com/products/why-we-make-things-and-why-it-matters', why: 'The founder of the Center for Furniture Craftsmanship on why the tool in the hand still matters.' },
          { title: 'The Anarchist\'s Workbench', author: 'Christopher Schwarz', year: 2020, url: 'https://lostartpress.com/products/the-anarchist-s-workbench', why: 'Free PDF. One good bench, a short list of tools, and a manifesto for the hand-tool carpenter.' },
          { title: 'The Essential Woodworker', author: 'Robert Wearing', year: 1988, url: '', why: 'The British classic. Tools as progression from simple to refined.' },
        ],
        articles: [
          { title: 'Carpentry', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Carpentry', why: 'Competent overview with a good tool list and bibliography.', year: null },
          { title: 'OSHA 29 CFR 1926 — Construction Industry', source: 'U.S. Department of Labor', url: 'https://www.osha.gov/construction', why: 'The federal rules for every American job site.', year: null },
          { title: 'Framing square', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Framing_square', why: 'The tables stamped on the face of the tool, explained.', year: null },
          { title: 'Sharpening', source: 'Lee Valley Tools', url: 'https://www.leevalley.com/en-us/discover/everyday-know-how/categories/sharpening', why: 'The Canadian toolmaker\'s guide — more readable than any textbook on edge geometry.', year: null },
        ],
        courses: [
          { title: 'NCCER Carpentry', provider: 'NCCER', url: 'https://www.nccer.org/', free: false, why: 'Standard American carpentry apprenticeship curriculum.' },
          { title: 'MT Copeland — Carpentry courses', provider: 'MT Copeland', url: 'https://mtcopeland.com/', free: false, why: 'Online trade courses filmed on real job sites.' },
        ],
        tools: [
          { title: 'Fine Homebuilding', url: 'https://www.finehomebuilding.com/', why: 'Taunton\'s trade magazine. Decades of tool and technique archive.' },
          { title: 'Swanson Tool — Speed Square reference', url: 'https://swansontoolco.com/', why: 'The Swanson Blue Book, free PDF — pocket reference for every rafter angle.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Carpenter_at_work.jpg?width=1200', caption: 'A working carpenter with a handsaw and marking gauge.', credit: 'Wikimedia Commons', alt: 'Carpenter at work' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Framing_square.jpg?width=1200', caption: 'A steel framing square.', credit: 'Wikimedia Commons', alt: 'Framing square' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sloyd_carpentry_tools.jpg?width=1200', caption: 'A traditional Sloyd woodworking kit.', credit: 'Wikimedia Commons', alt: 'Sloyd carpentry tools' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Circular_saw_blade.jpg?width=1200', caption: 'A carbide-tipped circular saw blade.', credit: 'Wikimedia Commons', alt: 'Circular saw blade' },
        ],
        animations: [
          { youtubeId: 'xra7CamEldU', caption: 'Essential Craftsman: what the framing square actually does.', why: 'Twelve minutes with a master.' },
        ],
      },

      seeAlso: ['framing', 'joinery', 'trim', 'cabinetry', 'hand_tools'],
      prereqs: [],
      leadsTo: ['framing', 'trim', 'joinery'],

      chapterActivity: 'A monthly tool-sharpening meetup at the Brooklyn Tool Library — bring your dullest chisel, leave with an edge.',

      sources: ['https://en.wikipedia.org/wiki/Carpentry', 'https://en.wikipedia.org/wiki/Framing_square', 'https://www.osha.gov/construction'],
      verifiedAt: '2026-04-23',
    },

    // ——— FRAMING ———
    framing: {
      id: 'framing',
      name: 'Framing',
      level: 'Intermediate',
      dek: 'The skeleton under every wooden house — laid out, nailed up, and hidden forever behind drywall.',
      readTime: '22 min',

      sections: ['Whole idea', 'Before you start', 'Layout', 'Walls', 'Floors', 'Roofs', 'Sheathing', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'The modern wood-frame house is a nineteenth-century Chicago invention. In the 1830s a carpenter named Augustine Taylor built a church out of thin, standard-sized lumber held together by machine-cut nails — faster and lighter than the heavy mortise-and-tenon timber framing it replaced. Older carpenters called it "balloon framing" because they thought it would blow away in the first wind. It didn\'t, and the American housing stock has been built out of nominal two-by-fours ever since.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Framing_construction.jpg?width=1200', caption: 'A platform-framed house mid-build. Each floor is its own working deck.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'Framing is the structure that carries every load in a wooden building — gravity (floors, roofs, snow), wind, and seismic — and then hides inside the wall. Almost every American single-family house built since World War II is platform-framed: a stack of floor decks with walls standing on top of each. Understand the four pieces — studs in walls, joists in floors, rafters or trusses in roofs, and sheathing tying it all together — and you understand every framed house.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'A framing hammer (22-ounce, usually), a 25-foot tape, a speed square, a chalk line, a 4-foot level, and a circular saw. Add a framing nail gun if you are doing more than a shed. A framing square — the big L-shaped one — is the rafter-layout tool.' },
        { type: 'h3', text: 'Safety' },
        { type: 'p', text: 'Fall protection above six feet (OSHA 1926 Subpart M). Steel-toed boots. Safety glasses on any power tool. Never stand under a wall as it is being raised. Respect the nail gun — treat it like a loaded firearm, and never point it at another person.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'Stud — vertical member in a wall. Plate — horizontal, top or bottom of a wall. Joist — horizontal, supports a floor or ceiling. Rafter — sloped, supports a roof. Truss — engineered roof assembly. Header — beam over an opening. King stud — full-height stud at the side of an opening. Cripple — short stud above or below an opening. Sheathing — plywood or OSB nailed to the frame for shear. On-center (OC) — distance between centers of studs.' },

        { type: 'h2', text: 'Layout is the whole job' },
        { type: 'p', text: 'A framer who knows layout is worth two who know how to swing a hammer. Everything else is just execution. Layout begins with a chalk line snapped on the deck where the wall will stand, and a series of pencil marks on both the top and bottom plates — one mark per stud, one mark per opening. When the marks are right, every stud lands on its line. When the marks are wrong, nothing fits.' },
        { type: 'h3', text: 'Reading a plan' },
        { type: 'p', text: 'A floor plan gives you overall dimensions, stud spacing (usually 16 inches on center for 2x4 walls), rough opening sizes for doors and windows, and header sizes. A detail sheet shows the stacked layers — subfloor, bottom plate, stud, top plate. The critical number is the rough-opening size, which includes the shim space the installer needs: typically 1/2 inch wider and taller than the actual window.' },
        { type: 'h3', text: 'Marking the plates' },
        { type: 'p', text: 'Lay the two plates of a wall side by side on the deck. Pull your tape from one end and mark a square pencil line at 15 1/4, 31 1/4, 47 1/4, and so on — that puts the face of every stud on a 16-inch grid. Draw an X on the far side of each line; the stud goes on the X. At openings, mark the king studs with K, the trimmers with T, and the cripples with C. When both plates have the same marks, snap them apart and stand a row of studs between them.' },
        { type: 'aside', label: 'Worked example', text: 'A 12-foot wall with one 3-foot door centered. Studs on 16" OC: marks at 15 1/4, 31 1/4, 47 1/4, 63 1/4, 79 1/4, 95 1/4, 111 1/4, 127 1/4 inches. The door is centered at 72": rough opening 3\'2" wide, so cut a 38" gap in the stud layout between 53 and 91 inches. Add king studs just outside, trimmers inside, header above. The header supports two cripples above and the whole load path stays continuous. Done this way, every drywall panel and every baseboard lands on a stud.' },
        { type: 'aside', label: 'Common mistake', text: 'Laying out from the wrong end. If you start marking from the right end of the wall but the adjacent wall starts its layout from the left, the studs do not align across corners, and drywall seams will fall in random places. Pick one corner of the house as datum and pull every wall from it.' },

        { type: 'h2', text: 'Walls — flat, then up' },
        { type: 'p', text: 'Every wall is built flat on the deck. Stretch a top plate and a bottom plate side by side on sawhorses, cut studs to length (92 5/8 inches is the standard precut for an 8-foot wall), and nail them up. Nail two 16d nails through the plate into the end grain of each stud. Stand the wall, plumb it with a level, brace it temporarily with a long diagonal, and nail the bottom plate to the deck.' },
        { type: 'h3', text: 'Headers and openings' },
        { type: 'p', text: 'A header spans the opening for a door or window and transfers the load above it to the king studs on either side. For typical residential openings under 8 feet, two 2x10s nailed together with a 1/2-inch plywood spacer between them (to match the 3½-inch wall thickness) is the workhorse. Taller openings want engineered LVL headers; your plans will spec them.' },
        { type: 'aside', label: 'Worked example', text: 'Rough opening for a 3\'0" x 6\'8" prehung interior door: header length equals the R.O. width plus the trimmer thickness on each side — 38" + 1½" + 1½" = 41". Header sits on two trimmers (each 80¼" tall for an 82½" R.O.). Total door opening in the wall frame: 41" wide x 82½" tall before king studs.' },
        { type: 'aside', label: 'Common mistake', text: 'Forgetting the double top plate. The top of every wall has two plates: the first nailed to the studs, the second laid on top and offset so its seams do not line up with the seams below. Single top plates only exist in advanced framing (with careful load paths). On everything else, double.' },

        { type: 'h2', text: 'Floors and joists' },
        { type: 'p', text: 'Floor joists are the horizontal beams that carry the floor over a span. 2x10s at 16" OC carry a typical 14-foot residential span; 2x12s stretch to 16 feet. The International Residential Code spans tables (or the Code Check flipchart) tell you which joist for which span, and you follow them. Joists land on the top plates of the wall below and are capped with rim joists at the ends. Blocking — short pieces nailed between joists — prevents them from rolling and stiffens the floor against bounce.' },
        { type: 'h3', text: 'Subfloor' },
        { type: 'p', text: 'A subfloor of 3/4-inch tongue-and-groove plywood or OSB is glued and nailed to the joists to tie the floor into a rigid diaphragm. Glue first, then nails on 6 inches at the edges and 12 inches in the field. A squeaky floor is almost always a subfloor that was nailed but not glued. Glue is the difference.' },

        { type: 'h2', text: 'Roofs — the right triangle solved' },
        { type: 'p', text: 'Every common rafter is a right triangle. The rise is the vertical change from the wall to the ridge. The run is the horizontal distance. The hypotenuse is the rafter itself, cut to sit on the wall at the bottom (with a bird\'s-mouth notch) and against the ridge at the top (with a plumb cut). All the math is on the framing square.' },
        { type: 'aside', label: 'Worked example', text: 'A 6-in-12 roof over a house that is 24 feet wide. Each rafter runs from the wall to the ridge — 12 feet of run, 6 feet of rise (half-inch per inch of run times 12 feet of run = 6 feet). Rafter length (ignoring overhang and notches) equals √(12² + 6²) = √180 = 13.42 feet = 13\'5". Use the framing-square table: the "line length per foot of run" column at 6/12 reads 13.42. Multiply by 12 feet of run, get 161 inches = 13\'5". Same answer, faster.' },
        { type: 'h3', text: 'Trusses versus stick framing' },
        { type: 'p', text: 'Trusses are engineered assemblies — chords and webs connected with toothed metal plates — that replace the job of cutting individual rafters. They are delivered to site, craned onto the walls, and nailed down. Stick-framed roofs (cut on site) are rarer in new construction but still dominant in restoration and custom work. A carpenter should know both; trusses save labor, sticks give design flexibility.' },

        { type: 'h2', text: 'Sheathing ties it together' },
        { type: 'p', text: 'Plywood or OSB nailed to the outside of walls, floors, and roofs turns the frame from a row of sticks into a rigid box. The nailing schedule — typically 6 inches on the edges and 12 inches in the field for 8d nails — is what gives the wall its shear strength. Skip the edge nails and the wall sways like a ladder in wind. In hurricane and seismic zones, the schedule tightens to 4 inches on the edges.' },
        { type: 'aside', label: 'Worked example', text: 'A 4x8 sheet of sheathing nailed at 6" edges, 12" field, with 8d nails: that is roughly 48 nails per sheet. At a typical house, you may put up 50–80 sheets. A nail gun pays for itself on the first sheathing day.' },

        { type: 'h2', text: 'Troubleshooting' },
        { type: 'p', text: 'The wall is out of plumb. Your top plate was nailed before the wall was plumbed. Loosen the diagonal brace, plumb it, re-brace, then nail. The corner is not square. Measure the diagonals of the floor before you stand walls: they must be equal within a sixteenth over 30 feet. The drywall seam does not land on a stud. Your layout started from the wrong end of the wall. The rafters do not land on the ridge. Your rise or run is off; recut one and use it as a pattern to check the rest.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'Once you have framed a shed, the next step is advanced framing (2x6 on 24" centers with single top plates and stacked loads — a 20% labor and lumber reduction with better insulation performance), balloon-framed tall walls (like a two-story stairwell), and hip roofs with irregular pitches. Read Rob Thallon\'s Graphic Guide to Frame Construction cover to cover. After that, read Will Holladay\'s A Roof Cutter\'s Secrets.' },

        { type: 'aside', label: 'Practice this week', text: 'Frame a 4-foot-wide, 8-foot-tall demo wall with a 2-foot-wide rough opening in the middle. Use one sheet of OSB for sheathing. Total cost under $40. You will cut studs, mark plates, nail a header, set trimmers, and sheath. Most common mistakes show up at this scale without ruining a whole house.' },
        { type: 'aside', label: 'Self-check', text: 'How many trimmers go under a 6-foot header? (Two each side for spans over 4 feet.) What is the rough-opening height for a 6\'8" door? (About 82½".) What is the rise per foot of run for a 6/12 pitch? (6 inches.) If any answer stumps you, open the Code Check Complete flipchart or rewind the Essential Craftsman "Framing: The Parts of a Wall" video.' },

        { type: 'callout', text: 'First project: a 8x8 garden shed on a gravel pad. Framed walls, a simple gable roof at 6/12, a 3-foot door, a single fixed window. Two weekends of labor with one helper. You will meet every mistake a framer can make — safely, cheaply, outside.' },
      ],

      keyTerms: ['stud', 'header', 'joist', 'rafter', 'top plate', 'sole plate', 'on-center spacing', 'platform framing', 'balloon framing', 'shear wall', 'truss', 'ridge beam', 'king stud', 'cripple', 'rough opening'],

      resources: {
        videos: [
          { id: 'ARNrj42sY2M', source: 'youtube', url: 'https://www.youtube.com/watch?v=ARNrj42sY2M', title: 'Framing: The Parts of a Wall', channel: 'Essential Craftsman', duration: '14:45', why: 'Every piece of a framed wall, named in order. The best first framing video.' },
          { id: 'l8-LpSRrW44', source: 'youtube', url: 'https://www.youtube.com/watch?v=l8-LpSRrW44', title: 'Framing Pro Tips', channel: 'Essential Craftsman', duration: '12:18', why: 'Habits that separate pros from weekend framers.' },
          { id: 'AGCC-_Cuhhw', source: 'youtube', url: 'https://www.youtube.com/watch?v=AGCC-_Cuhhw', title: 'Due Diligence — Spec House EP.01', channel: 'Essential Craftsman', duration: '21:02', why: 'First episode of the full house-build series.' },
          { id: 'jIsX4gZ7WFI', source: 'youtube', url: 'https://www.youtube.com/watch?v=jIsX4gZ7WFI', title: 'Framing Dormer Walls Ep.60', channel: 'Essential Craftsman', duration: '18:07', why: 'Dormers are the hardest thing residential framers regularly face.', featured: false },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/mattrisinger', title: 'The Build Show — modern high-performance framing', channel: 'Matt Risinger', duration: 'variable', why: 'Modern framing that also air-seals.', featured: false },
          { id: null, source: 'other', url: 'https://www.thisoldhouse.com/', title: 'This Old House — Tom Silva framing segments', channel: 'This Old House', duration: 'variable', why: 'Forty years of American restoration television.', featured: false },
        ],
        books: [
          { title: 'Graphic Guide to Frame Construction', author: 'Rob Thallon', year: 2009, url: 'https://archive.org/details/graphicguidetofr0000thal', why: 'The standard reference. 500 drawings of every detail a framer will meet.' },
          { title: 'A Roof Cutter\'s Secrets to Framing the Custom Home', author: 'Will Holladay', year: 2005, url: '', why: 'Production framer\'s book. The rafter-math classic.' },
          { title: 'Code Check Complete', author: 'Redwood Kardon', year: 2012, url: 'https://archive.org/details/codecheckcomplet0000kard', why: 'The flipchart every inspector carries.' },
          { title: 'The Very Efficient Carpenter', author: 'Larry Haun', year: 1992, url: '', why: 'Production framing at speed — from the man who framed 600 tract houses.' },
        ],
        articles: [
          { title: 'Framing (construction)', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Framing_(construction)', why: 'Balloon, platform, and timber framing — with history.', year: null },
          { title: 'Building Science Corporation — Insight articles', source: 'Building Science Corporation', url: 'https://www.buildingscience.com/', why: 'Why walls fail, from Joseph Lstiburek.', year: null },
          { title: 'Advanced Framing (2x6 24"OC)', source: 'APA — The Engineered Wood Association', url: 'https://www.apawood.org/advanced-framing', why: 'The trade association\'s advanced-framing primer.', year: null },
        ],
        courses: [
          { title: 'MT Copeland — Framing courses', provider: 'MT Copeland', url: 'https://mtcopeland.com/', free: false, why: 'Online courses filmed on real job sites.' },
          { title: 'NCCER Framing', provider: 'NCCER', url: 'https://www.nccer.org/', free: false, why: 'The apprenticeship-grade curriculum.' },
        ],
        tools: [
          { title: 'Fine Homebuilding — framing archive', url: 'https://www.finehomebuilding.com/project-guides/framing', why: 'Twenty years of Taunton\'s framing articles.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Framing_construction.jpg?width=1200', caption: 'Platform-framed house mid-build.', credit: 'Wikimedia Commons', alt: 'Platform framing' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Roof_truss_at_Newburgh_Free_Library.jpg?width=1200', caption: 'Roof trusses set in place.', credit: 'Wikimedia Commons', alt: 'Roof trusses' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/House_framing_example.jpg?width=1200', caption: 'Typical stud wall with header and king studs.', credit: 'Wikimedia Commons', alt: 'Stud wall' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Balloon_framing.jpg?width=1200', caption: 'Balloon framing, the predecessor to platform.', credit: 'Wikimedia Commons', alt: 'Balloon framing' },
        ],
        animations: [
          { youtubeId: 'd7e6IOdKfVw', caption: 'Essential Craftsman: full house build, start to finish, time-lapse.', why: 'The rhythm of framing, compressed to sixteen minutes.' },
        ],
      },

      seeAlso: ['tools_wood', 'joinery', 'shingles', 'trim', 'cabinetry'],
      prereqs: ['tools_wood'],
      leadsTo: ['trim', 'shingles', 'cabinetry'],

      chapterActivity: 'A weekend shed-build at the Red Hook Community Workshop — the cheapest way to learn every step of framing in forty hours.',

      sources: ['https://en.wikipedia.org/wiki/Framing_(construction)', 'https://www.buildingscience.com/', 'https://archive.org/details/graphicguidetofr0000thal'],
      verifiedAt: '2026-04-23',
    },

    // ——— JOINERY ———
    joinery: {
      id: 'joinery',
      name: 'Joinery',
      level: 'Intermediate',
      dek: 'How wood meets wood — the quiet craft that separates a framer from a furniture maker.',
      readTime: '20 min',

      sections: ['Whole idea', 'Before you start', 'Wood movement', 'Butt & lap', 'Mortise & tenon', 'Dovetails', 'Glue-up', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'A joint is a promise between two boards. The mortise and tenon under a Shaker table, the dovetails in a chest of drawers, the tongue and groove at the edge of a floorboard — each was worked out by people who could not order a new piece when the old one split. Joinery is carpentry turned inward: the question is no longer how to hold a building up, but how to hold two pieces of wood together for two hundred years.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mortise_and_tenon_joint.png?width=1200', caption: 'The anatomy of a mortise and tenon.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'A good joint does three things at once: it resists the force trying to separate the pieces; it lets the wood move with humidity without cracking; and it registers so that glue or fasteners can be applied cleanly. Every joint in every piece of furniture is a compromise between those three. Learn five joints well and you can build almost any piece of wood furniture ever made.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'A marking knife, a combination square, a marking gauge, a pair of chisels (1/4 inch and 3/4 inch), a back saw (dovetail or tenon), a mallet, clamps. Add a bench with a vise. No power tools are required — the hand set is faster for a single joint and more accurate for the first thousand.' },
        { type: 'h3', text: 'Safety' },
        { type: 'p', text: 'A sharp chisel is a safe chisel. Keep both hands behind the edge. Never hold the workpiece in the path of the blade; clamp it to the bench. If you find yourself pushing hard, sharpen.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'End grain — the ends of the wood fibers; absorbs glue poorly and can split. Long grain — the sides of the fibers; glues strongly. Mortise — the hole. Tenon — the tongue. Rails and stiles — horizontal and vertical members of a frame. Pins and tails — the two halves of a dovetail. Reveal — the visible margin. Proud — standing slightly above a surface. Flush — level with a surface.' },

        { type: 'h2', text: 'Wood moves — the first rule' },
        { type: 'p', text: 'Every joint must respect the fact that wood swells and shrinks across the grain with humidity. Along the grain it barely moves. Across it, a twelve-inch-wide board can move a quarter inch between July and February. A joint that restrains cross-grain movement will split the board; a joint that allows it will last centuries. This is why panels float in frames, and why wide tabletops use breadboard ends screwed through slotted holes.' },

        { type: 'h2', text: 'The butt joint and the lap joint' },
        { type: 'p', text: 'The butt joint — one board against another, glued and optionally screwed — is the simplest and the weakest. End grain glues poorly; the joint fails in tension. Reinforcing with dowels, pocket screws, or biscuits raises the strength from useless to useful. A lap joint takes a notch out of each board so the two overlap; more gluing surface, simple to cut, much stronger. Start with laps when you start learning.' },
        { type: 'aside', label: 'Worked example', text: 'A half-lap corner for a picture frame: two 3/4-inch-thick pieces, each with a 3/8-inch-deep notch cut on the end, the notches equal to the width of the other piece. Overlap them, glue, clamp. The joint is as strong as the grain around it. Cut the notches with a backsaw and pare to the line with a chisel.' },

        { type: 'h2', text: 'Mortise and tenon — the canonical joint' },
        { type: 'p', text: 'A rectangular hole (the mortise) in one piece; a matching tongue (the tenon) on the other. Fitted and glued, the joint resists tension, compression, and twisting. Every chair, table, and traditional timber-frame building uses some version of it. The classical proportions: tenon thickness one-third the stock thickness, length 2/3 the mortise depth, with shoulders all around.' },
        { type: 'h3', text: 'Marking' },
        { type: 'p', text: 'Use a marking gauge set to one-third of the stock thickness. Mark both cheeks of the tenon and the sides of the mortise. Use a square and a marking knife for the shoulders. Every line is a knife line, not a pencil line — the saw will find it.' },
        { type: 'h3', text: 'Cutting the tenon' },
        { type: 'p', text: 'Saw the shoulders first with a tenon saw, cutting on the waste side of the knife line. Then saw the cheeks down to the shoulders. Pare any remaining tenon cheek material with a wide chisel. The tenon should slide into the mortise with hand pressure only.' },
        { type: 'h3', text: 'Cutting the mortise' },
        { type: 'p', text: 'Drill a row of overlapping holes with a Forstner bit sized to the mortise width, drilled just shy of the mortise depth. Pare the walls square with a chisel. Or chop the whole thing with a mortise chisel and a mallet — slower but more satisfying.' },
        { type: 'aside', label: 'Worked example', text: 'Tenon on a 3/4-inch rail: marking gauge at 1/4 inch from each face, so the tenon is 1/4 inch thick. Length 3/4 inch into a 1-inch deep mortise. Shoulders all around. Cut the shoulders first, then the cheeks, then fit. A well-cut tenon is called a "friction fit": it takes mild hand pressure to slide home.' },
        { type: 'aside', label: 'Common mistake', text: 'Cutting to the knife line rather than the waste side of it. If you cut on the line, you are half a saw-kerf too narrow; the joint is loose. Always saw on the waste side and pare to the line.' },

        { type: 'h2', text: 'Dovetails — the unbreakable corner' },
        { type: 'p', text: 'Interlocking trapezoidal pins and tails, angled so that pulling the joint apart pulls it tighter. Used since the Egyptians for drawer corners and chest joinery. Cut by hand with a dovetail saw and a chisel in about twenty minutes per corner; cut with a router jig in three. The hand-cut ones carry the fact that a person made them; the machine-cut ones are mechanically identical.' },
        { type: 'h3', text: 'Marking and cutting tails first' },
        { type: 'p', text: 'Most hand-cut-dovetail traditions cut the tails first. Set a marking gauge to the thickness of the pin board, scribe a line across the tail board at that depth. Use a sliding bevel set to 1:7 (for softwoods) or 1:8 (for hardwoods). Mark and cut the tails with a dovetail saw, chop the waste with a chisel, then use the finished tails as a template to mark the pins.' },
        { type: 'aside', label: 'Worked example', text: 'A 6-inch-wide drawer side (3/4-inch thick pine) joined to a drawer front (3/4-inch cherry). Three tails, two pins. Set bevel at 1:7. Mark the tails with a knife, saw to the line, chisel the waste out from both sides. Lay the tail board on the pin board, scribe the pin positions with a knife. Saw the pins, chisel the waste. Fit, pare any tight spots, glue.' },
        { type: 'aside', label: 'Common mistake', text: 'Gaps in the finished joint. Almost always from sawing outside the line on one piece and inside the line on the other. Practice on cheap pine first; the joint will be ugly for about the first six you cut, and clean by the tenth.' },

        { type: 'h2', text: 'The glue-up' },
        { type: 'p', text: 'A joint is only as strong as the wood around it, provided the glue has full contact on fresh, clean surfaces. Yellow PVA (Titebond II or III) is the workhorse. Spread a thin film on both surfaces of the joint, clamp, wipe the squeeze-out with a damp rag, and wait an hour. Full cure is 24 hours. On a long glue-up, work in stages — don\'t try to glue the whole thing in one session. Cauls across the width keep the assembly flat.' },

        { type: 'h2', text: 'Troubleshooting' },
        { type: 'p', text: 'The joint is loose. Saw was wide of the line; shim with a strip of veneer or move to a tighter joint. The joint cracks the board. Cross-grain restraint is fighting wood movement; let the panel float, or use elongated screw holes. The glue squeezes out black. Air-dried wood absorbed glue unevenly — wipe with a damp rag within minutes, not after it cures. The dovetails have gaps. Use a toothpick glued into the gap and pare flush; on the next project, saw on the waste side of the line.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'After mortise-and-tenon and dovetails, the next joints to learn are the sliding dovetail (for shelving into case sides), the breadboard end (wide panel with cross-grain end strip), and the Japanese kanawa tsugi scarf joint (for splicing beams). Jim Tolpin\'s "Illustrated Cabinetmaking" is the single best reference for the advanced repertoire.' },

        { type: 'aside', label: 'Practice this week', text: 'Cut a practice mortise-and-tenon in scrap pine. Then a half-lap. Then a single dovetail corner. Do all three in one afternoon. Each takes about forty minutes of focused work; by the end you will have done every operation a serious cabinetmaker does for the rest of their life, at a small scale.' },
        { type: 'aside', label: 'Self-check', text: 'Why does end grain glue poorly? (Fibers absorb glue into the end, starving the joint.) What is the classical tenon thickness relative to stock? (One-third.) Why do dovetails cut tails-first in most traditions? (Tails are easier to cut cleanly; using them as a template produces pins that match.) If any of these stump you, rewatch Stumpy Nubs "The right way to size mortises and tenons."' },

        { type: 'callout', text: 'First project: a small pine box with a dovetailed lid. Four corners of through-dovetails, a bottom panel floating in a groove, a simple lift-off lid with a finger hole. A full Saturday. Total cost under fifteen dollars. Every joint in the box will teach you a principle you will use for the rest of your life.' },
      ],

      keyTerms: ['mortise and tenon', 'dovetail', 'rabbet', 'dado', 'tongue and groove', 'butt joint', 'lap joint', 'wood movement', 'end grain', 'face grain', 'dowel', 'biscuit', 'marking knife', 'marking gauge'],

      resources: {
        videos: [
          { id: 'o76SUMGDxFE', source: 'youtube', url: 'https://www.youtube.com/watch?v=o76SUMGDxFE', title: 'Are you doing it wrong? The right way to size mortises and tenons.', channel: 'Stumpy Nubs', duration: '14:32', why: 'The sizing rules most beginners miss.' },
          { id: 'Bx1Mg2mTMO0', source: 'youtube', url: 'https://www.youtube.com/watch?v=Bx1Mg2mTMO0', title: 'Make loose-tenon joinery without a Festool Domino', channel: 'Stumpy Nubs', duration: '12:08', why: 'Domino-quality joints for a tenth the cost.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/rexkrueger', title: 'Woodwork for Humans — hand-cut joinery', channel: 'Rex Krueger', duration: 'variable', why: 'Pre-industrial joinery with cheap tools.' },
          { id: null, source: 'other', url: 'https://www.newyankee.com/', title: 'The New Yankee Workshop (archive)', channel: 'Norm Abram', duration: 'variable', why: '21 seasons of American furniture.', featured: false },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@StumpyNubs', title: 'Stumpy Nubs — full joinery playlist', channel: 'Stumpy Nubs', duration: 'variable', why: 'Self-paced joinery apprenticeship.', featured: false },
        ],
        books: [
          { title: 'The Complete Book of Woodworking Joints', author: 'Terrie Noll', year: 2002, url: '', why: 'Every joint, drawn and explained. The shelf reference.' },
          { title: 'The Joiner and Cabinet Maker', author: 'Anonymous (ed. Schwarz & Moskowitz)', year: 1839, url: '', why: '1839 English apprentice novel with modern commentary.' },
          { title: 'Why We Make Things and Why It Matters', author: 'Peter Korn', year: 2013, url: 'https://godine.com/products/why-we-make-things-and-why-it-matters', why: 'On cutting a joint that nobody will see, correctly.' },
          { title: 'The Essential Woodworker', author: 'Robert Wearing', year: 1988, url: '', why: 'British classic; progression of joints.' },
          { title: 'By Hand and Eye', author: 'Jim Tolpin & George Walker', year: 2013, url: '', why: 'Pre-industrial design grammar — where joint proportions come from.' },
        ],
        articles: [
          { title: 'Joinery', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Joinery', why: 'Taxonomy with drawings.', year: null },
          { title: 'Fine Woodworking — joinery archive', source: 'Fine Woodworking', url: 'https://www.finewoodworking.com/', why: 'The magazine of record.', year: null },
          { title: 'Woodworking joints', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Woodworking_joints', why: 'Comparison of twenty joints.', year: null },
        ],
        courses: [
          { title: 'Center for Furniture Craftsmanship', provider: 'CFC (Rockport, ME)', url: 'https://www.woodschool.org/', free: false, why: 'Best in-person joinery training in the US.' },
        ],
        tools: [
          { title: 'Lee Valley / Veritas', url: 'https://www.leevalley.com/', why: 'Marking gauges, chisels, mortise floats.' },
          { title: 'Lie-Nielsen Toolworks', url: 'https://www.lie-nielsen.com/', why: 'American hand planes and chisels.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mortise_and_tenon_joint.png?width=1200', caption: 'Mortise-and-tenon anatomy.', credit: 'Wikimedia Commons', alt: 'Mortise and tenon' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dovetail-joint-pins-tails.png?width=1200', caption: 'Dovetail pins and tails.', credit: 'Wikimedia Commons', alt: 'Dovetails' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Through_dovetail_joint.jpg?width=1200', caption: 'Hand-cut through-dovetail corner.', credit: 'Wikimedia Commons', alt: 'Through dovetail' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Joint-lapped.png?width=1200', caption: 'A half-lap joint.', credit: 'Wikimedia Commons', alt: 'Half-lap joint' },
        ],
        animations: [
          { youtubeId: 'o76SUMGDxFE', caption: 'Stumpy Nubs: sizing mortises and tenons.', why: 'Watch before cutting your first joint.' },
        ],
      },

      seeAlso: ['tools_wood', 'cabinetry', 'mortise_tenon', 'trim', 'framing'],
      prereqs: ['tools_wood'],
      leadsTo: ['cabinetry', 'trim'],

      chapterActivity: 'A hand-cut dovetail workshop at a Gowanus woodworking co-op — bring a chisel, leave with a small box.',

      sources: ['https://en.wikipedia.org/wiki/Joinery', 'https://en.wikipedia.org/wiki/Woodworking_joints', 'https://www.finewoodworking.com/', 'https://godine.com/products/why-we-make-things-and-why-it-matters'],
      verifiedAt: '2026-04-23',
    },

    // ——— TRIM & MOLDING ———
    trim: {
      id: 'trim',
      name: 'Trim & Molding',
      level: 'Intermediate',
      dek: 'The part of a room you actually see — and the reason the rough framing gets forgiven.',
      readTime: '18 min',

      sections: ['Whole idea', 'Before you start', 'Baseboard', 'Casing', 'Crown', 'Scribing', 'Finish', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'Every room you have ever been in has been framed with lumber that is not straight, on a floor that is not flat, against walls that are not plumb. Trim is the carpenter\'s way of lying politely. The baseboard hides the gap between the drywall and the floor; the casing hides the gap between the drywall and the window frame; the crown molding hides the line where the wall meets the ceiling. When trim is done well, the room looks as if it were built out of stone.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Crown_molding.jpg?width=1200', caption: 'Crown molding — a descendant of the Greek cymatium.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'Trim is the last thing installed and the only thing that shows. Its practical purpose is to close the gaps rough carpenters leave; its aesthetic purpose is to give the eye something to rest on. Done well, it is invisible. Done poorly, it is the first thing a visitor notices. The skill is not in cutting exotic profiles — it is in fitting pieces tight against walls that are never truly plumb, square, or flat.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'A 10-inch compound miter saw on a stand, a coping saw, a pneumatic 16-gauge or 18-gauge finish nailer, a pencil, a tape, a level, a combination square, a block plane, a pair of scribes, painter\'s caulk, wood filler. Most trim carpenters also carry a laser level for long runs.' },
        { type: 'h3', text: 'Safety' },
        { type: 'p', text: 'Safety glasses on every cut. Hearing protection on the miter saw. Keep your hand 6 inches from the blade — the miter saw is the finger-remover in every trim shop. Disconnect the air from the nail gun when you change a nail, leave a site, or hand the tool to someone else.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'Miter — a cut at 45 degrees, usually at an outside corner. Cope — fitting one piece\'s profile to cover the profile of the next. Scribe — marking one piece to match the contour of an adjacent surface. Reveal — the amount of the underlying piece left showing. Return — a trim piece bent back on itself at 90 degrees to form a closed end. Caulk — the filler that hides small gaps before paint.' },

        { type: 'h2', text: 'Baseboard — start here' },
        { type: 'p', text: 'A baseboard runs along the floor where the wall meets it. It comes in a dozen profiles; a typical builder profile is 3½ inches tall with a slight radiused top, or 5½ inches for a more traditional look. Cut to length with one end square to the wall and the other end joined to the adjacent run — either mitered at an outside corner or coped at an inside corner.' },
        { type: 'h3', text: 'Coping versus mitering' },
        { type: 'p', text: 'At an inside corner, a good baseboard is not mitered. It is coped: one piece runs square to the wall, the other is cut at 45 degrees and then the back is carved away along the profile with a coping saw so the face fits against the first piece. Mitered inside corners open up when the wood shrinks; coped corners close up against each other and hide the seasonal movement.' },
        { type: 'aside', label: 'Worked example', text: 'A simple bedroom: four walls. Start on the longest wall with two square ends. Cope the ends of the two return walls where they meet it. Leave the short fourth wall for last; cut it to length between the cope marks. When the caulk goes in, every joint is tight.' },
        { type: 'aside', label: 'Common mistake', text: 'Coping the wrong end. The piece that is butted into the wall stays square; the piece that crosses the corner gets coped. If you cope both, there is a gap in the corner. If you cope the square one, the piece will not sit flat against the wall.' },

        { type: 'h2', text: 'Door and window casing' },
        { type: 'p', text: 'Casing wraps a door or window frame on three sides (four, for a window). Most casing sits back from the inside edge of the jamb by a consistent reveal — usually 3/16 or 1/4 inch. The corners can be mitered (45 degrees) or plinth-blocked (traditional square blocks at head and foot). A plinth-blocked door looks ten times more expensive than a mitered one and takes the same labor.' },

        { type: 'h2', text: 'Crown molding — the hardest trim' },
        { type: 'p', text: 'Crown sits at the wall-ceiling junction at an angle, not flat against the wall. Most crown is installed "sprung" — tilted so the top sits tight to the ceiling and the bottom against the wall — at either 38 or 45 degrees. Cutting miters on a sprung molding requires you to either set the saw with compound angles or hold the molding upside down against the saw fence as if the fence were the wall and the table were the ceiling. Gary Katz\'s crown-molding program series is the single best instruction on this anywhere.' },
        { type: 'aside', label: 'Worked example', text: 'A run of 3 5/8" crown in a rectangular room with four 90-degree inside corners and no outside corners. Cope every joint. Cut each piece with the top tilted away from you on the saw (held against the fence upside-down). Bevel 0, miter 45 for the right-hand side. Flip the piece for the left-hand side. Then back-cut with a coping saw along the visible profile. Slide it into place; it should hug the previous piece without a gap.' },
        { type: 'aside', label: 'Common mistake', text: 'Assuming the room is square. It is not. Measure the actual angle at each corner with a digital protractor or the Starrett mitre angle tool; most corners are 89 or 91 degrees, not 90, and the miter or cope must compensate. A tight joint on the wrong angle still reads as a gap.' },

        { type: 'h2', text: 'Scribing — the pro move' },
        { type: 'p', text: 'When a board meets a wavy wall or a floor that drops a quarter inch over six feet, you cannot just push the board against the surface — a gap will show. Instead you scribe: set a scribing tool (a small compass) to the largest gap, drag the compass along the wavy surface with the piece in place, and the pencil traces a matching wave onto the edge of the trim. Cut to the line with a block plane or jigsaw. The piece drops into place with no gap.' },

        { type: 'h2', text: 'Finishing' },
        { type: 'p', text: 'Paint-grade trim is filled with wood putty at the nail holes, caulked at every seam and along the wall, sanded, and painted with an oil-based or acrylic enamel. Stain-grade trim has no caulk — the joints must be cut tight, the holes are filled with colored wax, and the finish is oil or a wipe-on varnish. Paint hides; stain reveals. Plan the trim accordingly.' },

        { type: 'h2', text: 'Troubleshooting' },
        { type: 'p', text: 'The miter has a gap. The wall is out of square; cut a slightly over-45 miter (like 46 degrees) on one side. The cope does not fit. You cut on the wrong end; cope the piece that crosses the joint. The crown is sloping. The walls are not level at the ceiling; either scribe the top edge of the crown to follow the ceiling, or install a wider crown that swallows the variation. The baseboard is uneven at the floor. Scribe to the floor and plane to the line.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'Once you have installed a full room of modern builder trim, the next step is custom-profile work — using a router and a shaper to cut your own moldings — and period reproduction. Marianne Cusato\'s "Get Your House Right" and Brent Hull\'s "Historic Millwork" cover the proportions of classical trim, which modern builders routinely get wrong.' },

        { type: 'aside', label: 'Practice this week', text: 'Install baseboard and door casing in a closet. One inside corner, one outside corner, one door. Total labor: three hours. Total material: twenty dollars. Every joint you will encounter in a full-house trim job is there, in miniature.' },
        { type: 'aside', label: 'Self-check', text: 'Why do coped inside corners stay tight when wood shrinks? (The cope overlaps, so shrinkage exposes nothing.) What is the typical reveal on door casing? (3/16 or 1/4 inch.) What does "sprung" mean for crown molding? (Installed tilted, with air behind it, rather than flat to the wall.) If any stumps you, watch Gary Katz Program 5.' },

        { type: 'callout', text: 'First project: install a full trim package in a closet — baseboard, door casing, a small shoe. Half a day. Under $30 in material. You meet coping, mitering, scribing, and nailing in a space nobody will judge you for if the first try is rough.' },
      ],

      keyTerms: ['baseboard', 'casing', 'crown molding', 'chair rail', 'wainscoting', 'coping', 'miter', 'scribe', 'ogee', 'reveal', 'cove', 'bead', 'plinth block', 'return'],

      resources: {
        videos: [
          { id: 'Z29w3gTO6Do', source: 'youtube', url: 'https://www.youtube.com/watch?v=Z29w3gTO6Do', title: 'Installing Crown Molding, Program 5: Fundamentals', channel: 'Gary Katz', duration: '41:17', why: 'The master class.' },
          { id: 'ls-mRYtsjsA', source: 'youtube', url: 'https://www.youtube.com/watch?v=ls-mRYtsjsA', title: 'Installing Crown Molding, Program 6: Advanced Techniques', channel: 'Gary Katz', duration: '43:02', why: 'Vaulted ceilings, sprung crown, mitered returns.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@StumpyNubs', title: 'Stumpy Nubs — coping and trim', channel: 'Stumpy Nubs', duration: 'variable', why: 'Short, direct videos on coping.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/channel/UCzr30osBdTmuFUS8IfXtXmg', title: 'Essential Craftsman — trim carpentry', channel: 'Essential Craftsman', duration: 'variable', why: 'The finish end of a house build.', featured: false },
          { id: null, source: 'other', url: 'https://www.thisoldhouse.com/', title: 'This Old House — trim segments', channel: 'This Old House', duration: 'variable', why: 'Restoration-grade trim with Tom Silva and Norm Abram.', featured: false },
        ],
        books: [
          { title: 'Trim Carpentry and Built-Ins', author: 'Clayton DeKorne', year: 2005, url: '', why: 'Taunton\'s Pros By Pros volume. Case-study projects.' },
          { title: 'Get Your House Right', author: 'Marianne Cusato', year: 2008, url: '', why: 'Architect\'s guide to the proportions of casing, crown, and wainscot.' },
          { title: 'The Four Books of Architecture', author: 'Andrea Palladio', year: 1570, url: 'https://archive.org/details/fourbooksofarchi00pall', why: 'The classical source — every router bit descends from here.' },
          { title: 'Finish Carpentry', author: 'Fine Homebuilding Editors', year: 2005, url: '', why: 'Compilation of the best Fine Homebuilding trim articles.' },
        ],
        articles: [
          { title: 'Molding (decorative)', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Molding_(decorative)', why: 'Taxonomy of profiles with Greek and Roman ancestry.', year: null },
          { title: 'THISisCarpentry — coping crown', source: 'Gary Katz', url: 'https://www.thisiscarpentry.com/2019/03/01/cutting-coping-crown-molding/', why: 'The single best English-language article on coping.', year: 2019 },
          { title: 'Fine Homebuilding — trim & finish', source: 'Fine Homebuilding', url: 'https://www.finehomebuilding.com/', why: 'Decades of practical trim articles.', year: null },
        ],
        courses: [
          { title: 'MT Copeland — Trim Carpentry', provider: 'MT Copeland', url: 'https://mtcopeland.com/', free: false, why: 'Online courses with working trim carpenters.' },
          { title: 'Katz Roadshow', provider: 'Gary Katz', url: 'https://garymkatz.com/', free: false, why: 'Free or low-cost seminars at lumberyards.' },
        ],
        tools: [
          { title: 'Festool Kapex miter saw', url: 'https://www.festoolusa.com/', why: 'The miter saw many working trim carpenters use.' },
          { title: 'Collins Tool — Coping Foot', url: 'https://collinstool.com/', why: 'A jigsaw attachment for fast, repeatable coping.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Crown_molding.jpg?width=1200', caption: 'Crown molding at the ceiling line.', credit: 'Wikimedia Commons', alt: 'Crown molding' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Moldings_classical_orders.png?width=1200', caption: 'Classical molding profiles.', credit: 'Wikimedia Commons', alt: 'Classical moldings' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Baseboard_detail.jpg?width=1200', caption: 'A detailed baseboard with cap and shoe.', credit: 'Wikimedia Commons', alt: 'Baseboard detail' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Coping_saw.jpg?width=1200', caption: 'A coping saw.', credit: 'Wikimedia Commons', alt: 'Coping saw' },
        ],
        animations: [
          { youtubeId: 'Z29w3gTO6Do', caption: 'Gary Katz: crown molding fundamentals.', why: 'Forty minutes that replace a year of YouTube hunting.' },
        ],
      },

      seeAlso: ['framing', 'joinery', 'cabinetry', 'tools_wood'],
      prereqs: ['tools_wood', 'framing'],
      leadsTo: ['cabinetry'],

      chapterActivity: 'A coping-saw crash course at the Old House Trust in Richmond Town — one Saturday, one run of crown molding, no electricity.',

      sources: ['https://en.wikipedia.org/wiki/Molding_(decorative)', 'https://www.thisiscarpentry.com/', 'https://www.finehomebuilding.com/'],
      verifiedAt: '2026-04-23',
    },

    // ——— CABINETRY ———
    cabinetry: {
      id: 'cabinetry',
      name: 'Cabinetry',
      level: 'Advanced',
      dek: 'Boxes with doors — and the most technically demanding carpentry most people ever commission.',
      readTime: '22 min',

      sections: ['Whole idea', 'Before you start', 'Anatomy', 'Case construction', 'Doors', 'Drawers', 'Installation', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'The kitchen cabinet is one of the few pieces of furniture whose quality is measured in sixteenths of an inch. A drawer that sticks in August and rattles in January is a drawer whose builder did not respect wood movement; a door whose reveal varies from top to bottom is a door that was hung on a face frame out of square. Cabinetmaking is the branch of carpentry where framing habits fail. The tolerances are closer, the materials more expensive, and the client is going to open it twenty times a day for thirty years.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kitchen_cabinets_installed.jpg?width=1200', caption: 'Kitchen base and wall cabinets installed.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'A cabinet is a box with a front that opens. Every cabinet you will ever build, buy, or install is that box plus two choices: face frame or frameless, and overlay or inset doors. Master the box and those two decisions and you can build any cabinet — kitchen, bath, closet, library, media center.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'A table saw for ripping plywood sides, a track saw if you prefer. A combination machine or a router for dados and rabbets. A drill press or a 35 mm Forstner bit for hinge cups. A pocket-hole jig (Kreg) for face-frame joinery. A pneumatic brad nailer. Four 24-inch clamps. A laser level for installation.' },
        { type: 'h3', text: 'Safety' },
        { type: 'p', text: 'Push sticks on every rip cut. Dust mask on any MDF or plywood work — the glue in engineered wood contains formaldehyde, and the dust is worse than you think. Eye and ear protection. Keep the shop floor clear; a cabinet tipping off a workbench is a serious injury.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'Face frame — a hardwood border screwed to the front of the box. Frameless — a box with thicker sides and no face frame, doors mount directly to the sides. Inset — doors sit flush with the cabinet front. Overlay — doors cover the cabinet front edges. Reveal — the gap between adjacent doors. Cup hinge — the European "cup" that fits into a 35 mm hole drilled in the door back. Undermount slide — drawer slide concealed beneath the drawer. Scribe strip — an oversize filler that gets scribed to a wavy wall during installation.' },

        { type: 'h2', text: 'The anatomy of a cabinet' },
        { type: 'p', text: 'A base cabinet has two sides, a bottom, a back, and a front that is either a face frame or nothing. Wall cabinets add a top. Every part is usually 3/4-inch plywood for sides, 1/2-inch for backs, 3/4-inch solid hardwood for face frames. The back is set into a rabbet or groove cut into the sides, which keeps the cabinet square and prevents it from racking. The bottom fits into dados cut in the sides, or rests on cleats screwed to the sides.' },

        { type: 'h2', text: 'Building the case' },
        { type: 'h3', text: 'Face-frame construction' },
        { type: 'p', text: 'Traditional American cabinets. Cut the 3/4" plywood sides to 23½" deep and 34½" tall (the standard base-cabinet height to the top of the box). Cut rabbets or grooves for the back. Glue and screw the bottom into the sides. Insert the back panel. Build a separate face frame from 1½" wide hardwood — two rails, two stiles — using pocket-hole joinery. Glue and brad-nail the face frame to the box. The face frame is oversized slightly and planed flush to the box after glue-up.' },
        { type: 'h3', text: 'Frameless construction' },
        { type: 'p', text: 'European-style. The 3/4" plywood sides are the face of the cabinet — no face frame. All hinges mount directly to the sides in 35 mm holes drilled on a standard 32 mm grid. Doors overlay the full face of the box. The style is cleaner and takes fewer steps, but is less forgiving of out-of-square walls during install.' },
        { type: 'aside', label: 'Worked example', text: 'A simple 24" base cabinet, face-frame construction. Two 3/4" plywood sides at 23½" x 34½". One plywood bottom at 22¼" x 23¼". A 1/4" plywood back at 22½" x 34½" sitting in 1/4" rabbets in the sides. A face frame of 1½" wide poplar: two stiles at 34½", a top rail at 21", a bottom rail at 21", joined with 1¼" pocket screws. Total stock: a half-sheet of plywood, ten linear feet of 1½" poplar, twenty pocket screws.' },
        { type: 'aside', label: 'Common mistake', text: 'Nailing the face frame on before the box is truly square. Once the face frame is on, it fixes the box at whatever angle it is. Measure diagonals before you attach the frame; they must be equal within a 32nd.' },

        { type: 'h2', text: 'Doors — the five-piece frame-and-panel' },
        { type: 'p', text: 'The five-piece cabinet door — two rails, two stiles, and a floating panel — is the solution to wood movement cabinetmakers settled on in the seventeenth century. The panel floats in a groove, never glued, so it can swell and shrink without cracking the door. Modern cabinet shops cut the rails and stiles with a matching pair of router bits (a coping bit for the rail ends, a sticking bit for the edge profile), producing a joint that is glued only on the rails and stiles — never to the panel.' },
        { type: 'aside', label: 'Worked example', text: 'A 15" x 30" shaker-style inset door: two stiles at 30" long x 2¼" wide, two rails at 10½" x 2¼", a 1/4" plywood panel at 11" x 25½". Cut a 1/4" groove 3/8" deep on the inner edge of every piece. Cut a 3/8" tenon on each rail end to fit the groove. Assemble dry first; the panel should float in the groove with about 1/16" of room. Glue only the rail tenons.' },

        { type: 'h2', text: 'Drawers — the dovetailed box' },
        { type: 'p', text: 'A drawer is a box of four sides and a bottom, riding on slides. The traditional best drawer has dovetailed corners (hand or machine cut), a plywood bottom floating in a groove, and undermount soft-close slides attached to the sides. A commercial-grade drawer uses 1/2" or 5/8" Baltic birch plywood with dado-and-rabbet corner joints — weaker than dovetails but fast and acceptable for most residential work.' },

        { type: 'h2', text: 'Installation is where most cabinets fail' },
        { type: 'p', text: 'Every wall bows. Every floor slopes. Every inside corner is not ninety degrees. Installation begins with a laser level on the wall establishing the high point of the floor, and a horizontal line 34½" above that — that is where the top of every base cabinet lands. Scribe strips on the first and last cabinet in a run let you plane them to match the wall. Every cabinet is shimmed from the floor until its top is level and its face is plumb, then screwed to the studs through the back rail.' },
        { type: 'aside', label: 'Worked example', text: 'Installing a four-cabinet run on a wall that is half an inch out of level over eight feet. Find the high point of the floor with a laser, set the first cabinet there and shim any cabinet that comes later to match the high point\'s height. Expose scribe strips by oversizing the end cabinets by 1 inch. After all cabinets are screwed together and to the wall, scribe and plane the end strips to the walls they butt into. The run reads dead level; all the error is absorbed in the toe kick.' },

        { type: 'h2', text: 'Troubleshooting' },
        { type: 'p', text: 'The doors don\'t close flush. The hinges need adjusting — European hinges have three adjustment screws for in-out, up-down, and side-to-side. The drawer sticks. The slides are not parallel; loosen, square, retighten. The reveal between doors is uneven. The face frame is out of square, or the hinges are not set to the same depth. Scribe strips show a visible gap. You did not scribe them before installing; cut a new one and reinstall.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'After a kitchen of basic boxes, the next step is inset doors (much more demanding of accuracy), the 32 mm European system (with a Blum line-boring machine), and solid-wood casework. James Krenov\'s "The Cabinetmaker\'s Notebook" is the philosophy; Jim Tolpin\'s "Building Traditional Kitchen Cabinets" is the reference.' },

        { type: 'aside', label: 'Practice this week', text: 'Build a single 24" base cabinet — face frame, one door, one drawer — for your shop or garage. You will encounter every technique a kitchen requires, at a tenth the material cost. When you hang the door and the reveal is inconsistent, you\'ll learn more than a week of reading.' },
        { type: 'aside', label: 'Self-check', text: 'Why do cabinet doors have floating panels? (So the panel can move with humidity without cracking.) What is the standard base-cabinet height to the top of the box? (34½".) What are the three adjustment screws on a European hinge? (In-out, up-down, side-to-side.) If any stumps you, rewatch the Stumpy Nubs cabinetry playlist.' },

        { type: 'callout', text: 'First project: a shop cabinet — 30" wide, one door, one drawer, face frame. A single day of shop time, $100 in plywood and hardware. You will hit every tolerance problem a kitchen will throw at you, at a tenth of the cost, with no client watching.' },
      ],

      keyTerms: ['face frame', 'frameless', 'European hinge', 'rail and stile', 'floating panel', 'drawer box', 'reveal', 'toe kick', 'scribe strip', 'inset door', '32mm system', 'pocket hole', 'cup hinge', 'undermount slide'],

      resources: {
        videos: [
          { id: null, source: 'other', url: 'https://www.newyankee.com/', title: 'The New Yankee Workshop — built-ins and cabinets (archive)', channel: 'Norm Abram', duration: 'variable', why: 'Seasons of face-frame cabinetry on camera.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@StumpyNubs', title: 'Stumpy Nubs — cabinetry tutorials', channel: 'Stumpy Nubs', duration: 'variable', why: 'Door-making and installation details.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/rexkrueger', title: 'Woodwork for Humans — built-in storage', channel: 'Rex Krueger', duration: 'variable', why: 'Hand-tool and hybrid approaches.', featured: false },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/c/BuildShowNetwork', title: 'Build Show Network — kitchen installs', channel: 'Build Show Network', duration: 'variable', why: 'Modern installs with integrated appliance panels.', featured: false },
        ],
        books: [
          { title: 'Building Traditional Kitchen Cabinets', author: 'Jim Tolpin', year: 1994, url: '', why: 'The Taunton reference. Dimensioned drawings.' },
          { title: 'The Cabinetmaker\'s Notebook', author: 'James Krenov', year: 1976, url: '', why: 'The philosophy of twentieth-century cabinetmaking.' },
          { title: 'The Complete Manual of Woodworking', author: 'Jackson, Day, Jennings', year: 1989, url: '', why: 'Hardware and hinge reference.' },
          { title: 'Illustrated Cabinetmaking', author: 'Bill Hylton', year: 2008, url: '', why: 'Hundreds of dimensioned drawings.' },
        ],
        articles: [
          { title: 'Cabinetry', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Cabinetry', why: 'Standard dimensions and construction history.', year: null },
          { title: 'Fine Woodworking — cabinets archive', source: 'Fine Woodworking', url: 'https://www.finewoodworking.com/', why: 'Most thorough cabinetmaking archive in English.', year: null },
          { title: 'The 32mm System', source: 'Fine Woodworking', url: 'https://www.finewoodworking.com/', why: 'Primer on the European frameless grid.', year: null },
        ],
        courses: [
          { title: 'Center for Furniture Craftsmanship — Twelve-Week Intensive', provider: 'CFC', url: 'https://www.woodschool.org/', free: false, why: 'American gold-standard.' },
          { title: 'North Bennet Street School — Cabinet & Furniture Making', provider: 'NBSS Boston', url: 'https://www.nbss.edu/', free: false, why: 'Two-year diploma program, 1885 tradition.' },
        ],
        tools: [
          { title: 'Blum hardware', url: 'https://www.blum.com/', why: 'Austrian hinge and slide standard.' },
          { title: 'Häfele', url: 'https://www.hafele.com/', why: 'The other European hardware giant.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kitchen_cabinets_installed.jpg?width=1200', caption: 'Installed kitchen cabinets.', credit: 'Wikimedia Commons', alt: 'Kitchen cabinets' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cabinet_door_joinery.jpg?width=1200', caption: 'A five-piece frame-and-panel cabinet door.', credit: 'Wikimedia Commons', alt: 'Frame and panel door' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Drawer_dovetail_joint.jpg?width=1200', caption: 'Hand-cut drawer dovetails.', credit: 'Wikimedia Commons', alt: 'Drawer dovetails' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Blum_cabinet_hinge.jpg?width=1200', caption: 'A European cup hinge.', credit: 'Wikimedia Commons', alt: 'European cabinet hinge' },
        ],
      },

      seeAlso: ['joinery', 'trim', 'mortise_tenon', 'tools_wood'],
      prereqs: ['joinery', 'tools_wood'],
      leadsTo: [],

      chapterActivity: 'A small-shop tour at a Gowanus cabinet shop — see a face-frame and a frameless box built side by side.',

      sources: ['https://en.wikipedia.org/wiki/Cabinetry', 'https://www.finewoodworking.com/'],
      verifiedAt: '2026-04-23',
    },

  },
};
