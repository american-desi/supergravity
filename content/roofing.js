// content/roofing.js
// Batch: B07-trades-I
// Last updated: 2026-04-23 by BATCH B07-trades-I
//
// Topics: shingles, flashing. Scaffolded with worked examples + practice.

window.CONTENT = window.CONTENT || {};
window.CONTENT.roofing = {
  subjectId: 'roofing',
  version: 3,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B07-trades-I',
  topics: {

    // ——— SHINGLES ———
    shingles: {
      id: 'shingles',
      name: 'Shingles',
      level: 'Beginner',
      dek: 'Asphalt, slate, metal, tile — the overlap, the course, and the weather above it.',
      readTime: '18 min',

      sections: ['Whole idea', 'Before you start', 'Underlayment', 'Starter course', 'Field courses', 'Hips and ridges', 'Ventilation', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'Roof shingles are one of the oldest ideas in construction: overlap small flat units from the bottom up so that water runs down the finished face and never reaches the substrate. Cedar shakes at Plimoth Plantation. Slate on the Pantheon. Clay tile on every nineteenth-century Italian villa. Asphalt on three-quarters of American roofs for the last hundred years. The material changes; the logic does not.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Asphalt_shingle_roof.jpg?width=1200', caption: 'An asphalt-shingled roof in course.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'Water sheds by gravity. Overlap small flat units so every drop runs down the visible face and off the edge. Add underlayment beneath for the drops that inevitably get through. Flash every penetration and every plane change. The whole discipline of roofing is built on that four-sentence rule.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'A roofing hammer or pneumatic coil nailer. Roofing nails (galvanized, 1¼" for typical architectural shingles). A utility knife with hook blades. A chalk line. A flat bar. A tape measure. Harness and lanyard for fall protection. Soft-soled boots. Tear-off shovel (if stripping an old roof).' },
        { type: 'h3', text: 'Safety' },
        { type: 'p', text: 'OSHA 29 CFR 1926 Subpart M requires fall protection above six feet, including on residential roofs. A proper anchor, harness, and lanyard are not optional — roofing is the most lethal trade per worker in American construction. More people die off ordinary two-story houses than off ten-story commercial buildings, because commercial crews take fall protection seriously.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'Pitch — roof slope, expressed as rise-over-run (6/12 means 6" of rise per 12" of run). Underlayment — the water-resistive layer under the shingles (felt paper or synthetic). Ice-and-water shield — a self-adhered rubberized membrane at eaves and valleys. Starter strip — the first course that the second course bonds to. Exposure — the visible part of each shingle (5⅝" typical for 3-tab). Ridge cap — the shingles at the peak. Drip edge — the L-shaped metal at the eaves.' },

        { type: 'h2', text: 'Underlayment' },
        { type: 'p', text: 'The first layer over the sheathing. Traditionally 15 or 30-lb felt paper; modern practice is synthetic underlayment (lighter, stronger, less UV-sensitive). In the first three to six feet from the eaves — the ice-dam zone — a self-adhered ice-and-water shield is code-required in most cold climates. In valleys, a full-width ice-and-water shield runs the length of the valley, then the field underlayment laps over it.' },

        { type: 'h2', text: 'Starter course' },
        { type: 'p', text: 'Before the first course of regular shingles, a starter strip runs along the eaves. You can buy purpose-made starter strips, or cut them from the top of 3-tab shingles (removing the tabs, leaving the bonding strip). The starter is installed with its adhesive strip along the bottom edge, so the first full course bonds to it. Without a starter strip, the first course has no bond and lifts in the first windstorm.' },
        { type: 'aside', label: 'Worked example', text: 'Installing on a 40-foot eave: snap a chalk line 1/2" below the eave (so the starter overhangs into the gutter). Lay the first starter strip aligned with the gable end. Lay subsequent pieces end-to-end, overlapping by 1/4". Nail 1" above the adhesive strip. First course of architectural shingles then sits on top, offset by a half-tab.' },

        { type: 'h2', text: 'Field courses' },
        { type: 'p', text: 'Each course starts at the gable end and runs across. Architectural shingles (laminated) require an offset of 6 inches per course; the manufacturer specifies the pattern on the package. Nails go in the designated nail zone (a strip indicated on the shingle itself, usually with a line or color band), four per shingle for most installs, six in high-wind zones. Nails below the line void the warranty; nails above the line fail to hold the shingle.' },
        { type: 'aside', label: 'Common mistake', text: 'Overdriving the nails. The gun set too hot punches the nail through the shingle; the shingle then has nothing to hold it. Set the nail gun so the nail seats flush but does not sink below the shingle surface.' },

        { type: 'h2', text: 'Hips and ridges' },
        { type: 'p', text: 'The peak of the roof and every hip get a ridge cap — specialized shingles (or cut-down 3-tabs) bent over the peak and installed from the far end of the ridge toward the prevailing wind. Each cap covers the nail of the one before it. On an open-hip or ridge-vent installation, the cap shingles are nailed to each side of the ridge-vent material, leaving a slot below for warm air to escape the attic.' },

        { type: 'h2', text: 'Ventilation — the forgotten step' },
        { type: 'p', text: 'A roof without adequate ventilation fails prematurely — shingles cook from below, ice dams form in winter, and the attic becomes uninhabitable. Code requires a minimum 1:150 ratio of net free vent area to attic floor area, split roughly 50/50 between intake (soffit vents at the eaves) and exhaust (ridge vent at the peak). Adding insulation without improving venting is a common retrofit error.' },

        { type: 'h2', text: 'Troubleshooting' },
        { type: 'p', text: 'Shingles lift in wind. Nails driven too high, or no starter strip. Granules in the gutter. Normal for the first few years (construction debris), problematic for older roofs (end of life). Leak at a valley. Valley underlayment laid incorrectly, or nails within 6" of the valley centerline. Leak at a penetration (vent pipe). Flashing failed; see the Flashing topic. Attic condensation. Inadequate ventilation; add soffit vents.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'After basic asphalt, the next materials are standing-seam metal (crimped or snap-lock panels), slate (carpenter\'s craft with 80-to-400-year life), clay tile (fire resistance, thermal mass), and synthetic shingles (composites mimicking slate or cedar). NRCA\'s Steep-Slope Roof Systems Manual is the trade\'s own reference; Mike Guertin\'s "Roofing with Asphalt Shingles" is the working-roofer\'s book.' },

        { type: 'aside', label: 'Practice this week', text: 'Install shingles on a dog house or small shed. All the operations of a full roof — underlayment, starter, courses, hips — at a scale that fits in the driveway. One hour, $20 in materials. You will know whether you enjoy the work before committing to an actual roof.' },
        { type: 'aside', label: 'Self-check', text: 'What is the minimum roof pitch for standard asphalt shingles? (4/12.) What is the purpose of the starter strip? (Gives the first course something to bond to.) Why does ventilation matter? (Prevents ice dams, cools shingles from below, keeps attic dry.) If any stumps you, watch Essential Craftsman\'s roofing series.' },

        { type: 'callout', text: 'First project: re-shingle a shed or outbuilding. Permit usually not required for outbuildings under 120 sq ft. Two afternoons. Under $100 in materials. Every technique from a full roof, at a safe scale.' },
      ],

      keyTerms: ['course', 'exposure', 'headlap', 'underlayment', 'ice-and-water shield', 'starter strip', 'drip edge', 'three-tab', 'architectural shingle', 'ridge cap', 'ridge vent', 'eave', 'pitch', 'nail zone'],

      resources: {
        videos: [
          { id: null, source: 'other', url: 'https://www.thisoldhouse.com/', title: 'This Old House — roofing', channel: 'This Old House', duration: 'variable', why: 'Real asphalt tear-offs and installations.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@essentialcraftsman', title: 'Essential Craftsman — roofing series', channel: 'Essential Craftsman', duration: 'variable', why: 'Full asphalt install on the spec house.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/mattrisinger', title: 'The Build Show — roofing and ventilation', channel: 'Matt Risinger', duration: 'variable', why: 'Modern roofing assemblies and venting.' },
        ],
        books: [
          { title: 'Roofing with Asphalt Shingles', author: 'Mike Guertin', year: 2002, url: '', why: 'Taunton Pros By Pros, 200 color photos.' },
          { title: 'The NRCA Roofing Manual: Steep-slope Roof Systems', author: 'NRCA', year: 2025, url: 'https://www.nrca.net/roofing-guidelines', why: 'The professional reference.' },
          { title: 'Graphic Guide to Frame Construction', author: 'Rob Thallon', year: 2009, url: 'https://archive.org/details/graphicguidetofr0000thal', why: 'The structural substrate.' },
        ],
        articles: [
          { title: 'Asphalt shingle', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Asphalt_shingle', why: 'Material technical summary.', year: null },
          { title: 'Roof shingle', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Roof_shingle', why: 'Material survey and lifespans.', year: null },
          { title: 'Domestic roof construction', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Domestic_roof_construction', why: 'Structure beneath the shingles.', year: null },
        ],
        courses: [
          { title: 'NRCA University', provider: 'NRCA', url: 'https://www.nrca.net/', free: false, why: 'Installer-certification for asphalt, metal, and low-slope.' },
        ],
        tools: [
          { title: 'Fine Homebuilding — roofing archive', url: 'https://www.finehomebuilding.com/', why: 'Decades of roofing articles by material and detail.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Asphalt_shingle_roof.jpg?width=1200', caption: 'Asphalt-shingled roof.', credit: 'Wikimedia Commons', alt: 'Asphalt roof' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Slate_roof.jpg?width=1200', caption: 'Slate roofing — 80-to-400-year lifespan.', credit: 'Wikimedia Commons', alt: 'Slate roof' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Standing_seam_metal_roof.jpg?width=1200', caption: 'Standing-seam metal roof.', credit: 'Wikimedia Commons', alt: 'Metal roof' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Clay_roof_tile.jpg?width=1200', caption: 'Clay roof tiles.', credit: 'Wikimedia Commons', alt: 'Clay tile' },
        ],
      },

      seeAlso: ['flashing', 'framing', 'tools_wood', 'dwv'],
      prereqs: [],
      leadsTo: ['flashing'],

      chapterActivity: 'A Saturday tear-off and re-roof at a Habitat for Humanity site in Newark.',

      sources: ['https://en.wikipedia.org/wiki/Asphalt_shingle', 'https://en.wikipedia.org/wiki/Roof_shingle', 'https://www.nrca.net/roofing-guidelines'],
      verifiedAt: '2026-04-23',
    },

    // ——— FLASHING ———
    flashing: {
      id: 'flashing',
      name: 'Flashing',
      level: 'Intermediate',
      dek: 'Where two planes meet, water tries to get in — and flashing is how the roofer says no.',
      readTime: '18 min',

      sections: ['Whole idea', 'Before you start', 'Step flashing', 'Valleys', 'Chimneys', 'Penetrations', 'Kickouts', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'Almost every roof failure is a flashing failure. The field of shingles, if installed correctly, holds water out for thirty years; but at every chimney, every dormer, every vent pipe, every wall-to-roof junction, there is a seam the shingle cannot close on its own. Flashing is the thin metal — lead, copper, aluminum, stainless, sometimes rubber or self-adhered membrane — that bridges those seams and sends the water back onto the shingles where it belongs.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Step_flashing.jpg?width=1200', caption: 'Step flashing at a wall-to-roof junction.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'Every flashing does the same thing: overlap the adjacent material in the direction of water flow, so water runs down the face of the flashing and onto the shingles below. If you can see at a glance which direction water travels across a detail, you know whether the flashing is right-side-up or upside-down. Almost every leak is flashing that was installed inverted.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'Tin snips. A hand brake or seamer for bending metal. A chalk line. Roofing nails and screws. A flat bar. Caulk gun with polyurethane or butyl sealant. Flashing material: aluminum is cheap and the residential default; copper outlasts the shingles (and costs five times as much); lead for complex chimney work; self-adhered membrane for belt-and-suspenders backup.' },
        { type: 'h3', text: 'Safety' },
        { type: 'p', text: 'Fall protection, as always. Cuts from metal edges — gloves. Sheet-metal dust from cutting — safety glasses. Never drive fasteners where water will flow; every penetration is a potential leak.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'Step flashing — L-bent pieces stepped up a wall-to-roof junction, one per shingle course. Counterflashing — the piece that covers the top edge of the step flashing, often let into a masonry reglet. Valley flashing — wide metal or membrane running the length of a roof valley. Pipe boot — flashing for a vent pipe penetration. Kickout — the short flashing at the bottom of a wall-to-roof junction that directs water into the gutter. Cricket — a small roof built on the uphill side of a chimney to divert water around it. Reglet — the groove cut into masonry to receive counterflashing.' },

        { type: 'h2', text: 'Step flashing' },
        { type: 'p', text: 'The canonical roof-to-wall junction. At every shingle course, a rectangular piece of metal — typically 5" x 7", bent along the long axis into an L — is laid so the horizontal leg goes under the shingle above and the vertical leg sits against the wall. The next course of shingles covers the bottom of the vertical leg. Counterflashing covers the top of the wall leg. The weatherproofing is the result of the two overlaps in the correct direction.' },
        { type: 'aside', label: 'Worked example', text: 'Flashing where a roof meets a side wall: at each course of shingles, slide a step flashing under the shingle. The vertical leg extends 4" up the wall. The horizontal leg is 4-5" wide, covering most of the shingle\'s width. The next course of shingles covers the horizontal leg of the flashing below. Repeat up the wall. Finally, wall siding or counterflashing covers the vertical legs from above.' },
        { type: 'aside', label: 'Common mistake', text: 'Using one long strip of flashing instead of step-by-step pieces. Water running down the wall then hits the single long piece and is diverted sideways at the wall-roof junction, often finding its way behind the siding. Step flashing, one piece per course, is the only way that works.' },

        { type: 'h2', text: 'Valleys — open or closed' },
        { type: 'p', text: 'Open valley: a wide strip of metal (aluminum, copper, or 24-gauge galvanized) runs the length of the valley, exposed; shingles on both sides are trimmed back to show a 4-6 inch strip of metal in the valley center. Closed valley: shingles are interwoven across the valley or laid through it; the valley is underlaid with ice-and-water shield or metal but not visible. Open valleys shed water faster and last longer; closed valleys are cheaper and more common. Both work if underlayment is correct.' },

        { type: 'h2', text: 'Chimneys — the hardest flashing' },
        { type: 'p', text: 'A chimney has four sides, each needing a different flashing. Front (downslope): a one-piece apron flashing covers the intersection and extends up the chimney 4-6". Sides: step flashing, one per shingle course, with counterflashing cut into the mortar joint. Back (upslope): a saddle or cricket — a small roof that splits water around the chimney, flashed to the main roof. Every flashing is overlapped by the next higher one; every counterflashing covers the top of the next lower flashing. A mis-flashed chimney is the most common serious roof leak.' },

        { type: 'h2', text: 'Penetrations' },
        { type: 'p', text: 'Plumbing vents, chimneys, bath fans, skylights — each requires a flashing designed for that penetration. A typical plumbing vent gets a pipe boot: a flange with a rubber collar sized to the pipe. The flange sits under the shingles upslope of the pipe and over the shingles downslope. Skylights come with manufacturer-supplied flashing kits; use them.' },

        { type: 'h2', text: 'Kickout flashings' },
        { type: 'p', text: 'Where a sloped roof meets a wall at an angle — e.g., where a roof runs past the corner of a house — the water flowing down the wall/roof junction must be diverted into the gutter. A kickout flashing is a small bent piece at the bottom of the run that catches water and redirects it out. Skip the kickout and water runs behind the siding; the sheathing rots within five years. Matt Risinger has built his reputation on harping about this one detail.' },

        { type: 'h2', text: 'Troubleshooting' },
        { type: 'p', text: 'Leak appears near a chimney. Flashing at the back (upslope) is missing the saddle. Install a cricket. Water stain on drywall ten feet from the roof edge. Wicking — could be coming from far upstream. Inspect all flashings on the path from roof to stain. Gutters overflow at one point only. Kickout flashing missing. Leak at a pipe penetration. Pipe boot collar cracked from UV; replace.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'After basic residential flashing, the next territories are architectural metal (custom copper detailing on high-end residential), low-slope membrane terminations (TPO, EPDM), historic restoration (lead flashing on copper, or copper over slate), and commercial roof details. NRCA\'s Architectural Metal Flashing Manual is the trade\'s reference; the FGI Field Guide is the installer\'s pocket version.' },

        { type: 'aside', label: 'Practice this week', text: 'Bend a piece of flashing by hand on a bench vise and a block of wood. Make a simple step flashing (5" x 7", bent on the long axis at 90°). Do ten. You will learn to read sheet metal: which way it wants to go, how much force to apply, how to correct a bent piece without kinking it.' },
        { type: 'aside', label: 'Self-check', text: 'Which way does step flashing overlap? (Each upper piece overlaps the one below, shingle-fashion.) What is a kickout flashing for? (To direct water from a roof-wall junction into the gutter.) Why install a cricket on the upslope side of a chimney? (To split water flow around the chimney.) If any stumps you, watch Matt Risinger\'s kickout-flashing video.' },

        { type: 'callout', text: 'First project: install a pipe-boot flashing around a plumbing vent stack on a small shed. Cut the shingles away, slip the boot under the upslope shingle, lap the next course over the flange, seal with a small bead of roof cement. Thirty minutes. You will understand how every penetration is flashed.' },
      ],

      keyTerms: ['step flashing', 'counterflashing', 'valley flashing', 'pipe boot', 'kickout flashing', 'drip edge', 'cricket', 'reglet', 'ice-and-water shield', 'headwall flashing', 'saddle', 'apron', 'chimney flashing'],

      resources: {
        videos: [
          { id: null, source: 'other', url: 'https://www.thisoldhouse.com/', title: 'This Old House — flashing details', channel: 'This Old House', duration: 'variable', why: 'Every historic restoration includes flashing.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/mattrisinger', title: 'The Build Show — flashing and moisture control', channel: 'Matt Risinger', duration: 'variable', why: 'Kickout and wall-to-roof required viewing.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@essentialcraftsman', title: 'Essential Craftsman — chimney flashing', channel: 'Essential Craftsman', duration: 'variable', why: 'Step + counterflash around masonry.' },
        ],
        books: [
          { title: 'Roofing with Asphalt Shingles', author: 'Mike Guertin', year: 2002, url: '', why: 'Thorough flashing chapter.' },
          { title: 'The NRCA Roofing Manual: Architectural Metal Flashing', author: 'NRCA', year: 2026, url: 'https://www.nrca.net/roofing-guidelines', why: 'Trade flashing manual.' },
          { title: 'Graphic Guide to Frame Construction', author: 'Rob Thallon', year: 2009, url: 'https://archive.org/details/graphicguidetofr0000thal', why: 'The framing details flashings actually seal.' },
        ],
        articles: [
          { title: 'Flashing (weatherproofing)', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Flashing_(weatherproofing)', why: 'Flashing types and materials.', year: null },
          { title: 'Domestic roof construction', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Domestic_roof_construction', why: 'Flashing in the roof assembly context.', year: null },
          { title: 'Building Science Corporation — water management', source: 'BSC', url: 'https://www.buildingscience.com/', why: 'Lstiburek on why walls and roofs fail at flashings.', year: null },
        ],
        courses: [
          { title: 'NRCA University — flashing and detailing', provider: 'NRCA', url: 'https://www.nrca.net/', free: false, why: 'Installer-certification modules on flashing.' },
        ],
        tools: [
          { title: 'Fine Homebuilding — flashing archive', url: 'https://www.finehomebuilding.com/', why: 'Mike Guertin columns on kickout and chimney flashing.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Step_flashing.jpg?width=1200', caption: 'Step flashing at a wall-to-roof junction.', credit: 'Wikimedia Commons', alt: 'Step flashing' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Chimney_flashing.jpg?width=1200', caption: 'Chimney flashing — apron, step, saddle.', credit: 'Wikimedia Commons', alt: 'Chimney flashing' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Roof_valley_flashing.jpg?width=1200', caption: 'Valley flashing.', credit: 'Wikimedia Commons', alt: 'Valley flashing' },
        ],
      },

      seeAlso: ['shingles', 'framing', 'dwv', 'brick'],
      prereqs: ['shingles'],
      leadsTo: [],

      chapterActivity: 'A chimney-flashing workshop at a Bed-Stuy brownstone.',

      sources: ['https://en.wikipedia.org/wiki/Flashing_(weatherproofing)', 'https://en.wikipedia.org/wiki/Domestic_roof_construction', 'https://www.nrca.net/roofing-guidelines'],
      verifiedAt: '2026-04-23',
    },

  },
};
