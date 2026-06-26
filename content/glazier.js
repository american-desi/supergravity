// content/glazier.js
// Batch: B08-trades-II
// Last updated: 2026-04-23 by Session B08 (scaffolding pass)

window.CONTENT = window.CONTENT || {};
window.CONTENT.glazier = {
  subjectId: 'glazier',
  version: 3,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B08-trades-II',
  topics: {

    glass_types: {
      id: 'glass_types',
      name: 'Glass Types',
      level: 'Beginner',
      dek: 'Tempered, laminated, low-E — the material is the same, the behavior under stress completely different.',
      readTime: '17 min',

      sections: ['Float glass, the default', 'Tempered: stronger, safer, irreversible', 'Laminated: the windshield idea', 'Low-E and the quiet revolution', 'Annealed to aerogel', 'How to think about it', 'Work through one', 'Try these', 'When it goes wrong', 'What to try next'],
      body: [
        { type: 'lead', text: 'In 1959, at a plant in St Helens, Lancashire, Alastair Pilkington finally got his molten glass to flow out onto a bath of molten tin without ripples. The sheet came off the line flat and polished on both sides — no grinding, no hand work. Within a decade the float-glass process had ended the centuries-long craft of plate-glass production and reset what every window in the world cost. Every piece of architectural glass in your city today begins its life on a river of tin.' },
        { type: 'h2', text: 'Float glass, the default' },
        { type: 'p', text: 'Ordinary window glass — the stuff in an old house, in a picture frame, in a greenhouse — is annealed float glass. It is clear, cheap, and catastrophically dangerous when it breaks. A fallen annealed pane shatters into long curved daggers, and thousands of people lost fingers, eyes, and more before the building codes caught up. Today, pure annealed glass is prohibited from any location where a person might walk into it: doors, shower enclosures, sidelights, anything within eighteen inches of the floor. The rule is simple enough that children learn it.' },
        { type: 'h2', text: 'Tempered: stronger, safer, irreversible' },
        { type: 'p', text: 'Tempered glass is float glass that has been reheated to about 620 °C and then cooled with rapid jets of air on both sides. The skin contracts first and ends up in compression; the interior contracts later and ends up in tension. The result is a sheet four times stronger than ordinary glass that, when it finally fails, fragments into small rounded pebbles. A tempered pane cannot be cut or drilled after tempering — every hole, every edge detail, must be specified before the glass goes into the oven. A glazier who takes a tempered side window back to the shop to trim it gets a pile of gravel.' },
        { type: 'h2', text: 'Laminated: the windshield idea' },
        { type: 'p', text: 'In 1903 a French chemist named Édouard Bénédictus dropped a flask that had been coated with cellulose nitrate. The flask broke but held together. He patented the result, and by the 1920s automobile windshields were being made by sandwiching a sheet of plastic — now polyvinyl butyral, PVB — between two sheets of annealed glass. Struck hard enough to break, laminated glass cracks into the classic spider-web pattern but stays in its frame. Every car windshield ever built is laminated. Modern storefronts, hurricane glazing, and museum display cases are too.' },
        { type: 'h2', text: 'Low-E and the quiet revolution' },
        { type: 'p', text: 'Since the 1980s, every serious window in a cold climate has been coated with an invisible metallic oxide layer a few dozen atoms thick — a low-emissivity, or low-E, coating. The coating lets visible light through while reflecting long-wavelength infrared. In winter, it keeps your heat inside; in summer, it keeps the sun\'s radiant heat outside. Paired with a sealed double-pane unit filled with argon, a low-E window is between five and ten times more insulating than the single pane it replaced. You cannot see it. It is one of the most consequential building-science changes of the last fifty years.' },
        { type: 'h2', text: 'Annealed to aerogel' },
        { type: 'p', text: 'Beyond the standard kinds, there are a half-dozen specialty glasses any glazier eventually meets. Borosilicate for ovens and labs, with thermal expansion so low it shrugs off boiling water poured on ice. Wired glass, embedded with a steel mesh for fire resistance (and now increasingly replaced because the wire is a hazard on impact). Ceramic glass for fireplaces, which can see 700 °C without crazing. Vacuum-insulated glass, a few millimeters thick and R-12 insulating, barely a market product yet. And transparent aerogel, the frothy silica foam with the highest insulating value of any solid known — waiting for architecture to get around to it.' },
        { type: 'callout', text: 'The tool that defines the trade is the glass-cutting wheel — a tiny hardened-steel disc, the size of an aspirin, running in a brass holder. A single firm pass scores the surface; a careful snap over a dowel runs the score into a clean break. The whole kit fits in a pocket and costs less than dinner.' },

        { type: 'h2', text: 'How to think about it' },
        { type: 'p', text: 'Glass is a liquid that forgot to keep flowing. At room temperature it behaves as a brittle solid; at a few hundred degrees it becomes viscous; at seven hundred degrees it pours. Every type of glass you work with is the same base material (silica plus soda plus lime) treated differently — heat-treated, coated, laminated, or layered — to give it different failure modes. The only question a glazier really asks is: when this pane breaks, what does it do? An annealed pane cuts you; a tempered pane crumbles; a laminated pane cracks but stays put. The building code is written around those three answers.' },
        { type: 'h2', text: 'Work through one' },
        { type: 'p', text: 'A homeowner wants to install a new glass shower enclosure. Code requires the glass to be safety-rated — either tempered or laminated. The glazier measures the opening, draws up a shop ticket with the pane dimensions plus hole locations for the hinge hardware. The ticket goes to the tempering plant. Ten days later a truck delivers tempered panels with holes already cut and edges polished. The glazier verifies the panels match the ticket (you cannot re-drill a tempered pane), dry-fits them in the opening with setting blocks, confirms plumb and level, then silicones the joints. Total on-site time: about three hours. The lead time and the no-take-backs are the whole tempering story.' },
        { type: 'h2', text: 'Try these' },
        { type: 'p', text: 'First: find the small etched stamp in a corner of a tempered pane in your own life — a glass shower door, a tempered car side window, a storefront. The stamp will read "ANSI Z97.1" or "CPSC 16 CFR 1201" and identify the fabricator. Second: look at a car windshield after a stone chip. The spider-web pattern on the outer surface with the inner surface still smooth is laminated glass doing its job — the PVB layer holding both panes together. Third: hold a piece of ordinary annealed glass against a daylight window and rock it; you will see ripples and distortions. A float pane from a modern plant is flat enough that you cannot see ripples against the same horizon.' },
        { type: 'h2', text: 'When it goes wrong' },
        { type: 'p', text: 'Tempered glass sometimes shatters spontaneously — nickel-sulfide inclusions in the melt expand over time and eventually exceed the internal tension. Rare, but it happens, and it always makes the news when it happens on a balcony. Laminated glass delaminates — the PVB layer separates at the edges after decades of UV exposure or water ingress. The fix is replacement. Low-E coatings that touch the wrong side (coating on surface 1, exposed to weather) degrade quickly. Insulated glass units (IGUs) eventually fail at their perimeter seal, and you see the fog of trapped condensation between the panes; replace the IGU, not the frame.' },
        { type: 'h2', text: 'What to try next' },
        { type: 'p', text: 'Past identifying glass types, the next rungs are learning to cut and snap glass yourself (half-hour class at any stained-glass studio), specifying IGUs by U-factor and SHGC (the two numbers on every NFRC label), reading a curtain-wall detail drawing, and working with structural glazing silicones. Past that lies the craft world — stained glass, fused glass, kiln work at Corning — and the engineering world of glass floors, glass stairs, and glass-fin structural assemblies. Each is its own career.' },
      ],

      keyTerms: ['float glass', 'annealed glass', 'tempered glass', 'laminated glass', 'low-E coating', 'insulated glazing unit', 'PVB interlayer', 'safety glass', 'borosilicate', 'spandrel glass'],

      scaffolding: {
        mentalModel: {
          analogy: 'Glass is a liquid that forgot to keep flowing. Every "type" is the same base material treated differently to change what happens when it breaks: annealed cuts you, tempered crumbles, laminated cracks but stays put.',
          whereItBreaks: 'The analogy does not capture the subtleties of coatings (low-E, self-cleaning, electrochromic) or of non-silica glasses (chalcogenide, metallic). It also masks the engineering of IGU seal design.',
        },
        workedExample: {
          prompt: 'Specify safety glass for a new residential shower enclosure.',
          scenario: 'Homeowner wants a frameless enclosure, 36" × 72" glass panel plus a hinged door, standard US code compliance (CPSC 16 CFR 1201).',
          steps: [
            { step: 'Measure the opening to the nearest 1/16" at top, middle, and bottom.', why: 'Existing openings are never true rectangles; take the smallest dimension.' },
            { step: 'Specify 3/8" tempered glass with polished edges and a 1/2" hinge-hole pattern per hardware spec.', why: '3/8" is the standard frameless-shower thickness; holes must be pre-drilled before tempering.' },
            { step: 'Submit the shop ticket with exact sizes and hole locations to the fabricator.', why: 'Tempered glass cannot be cut or drilled after heat treatment.' },
            { step: 'Ten-day lead time; verify panel matches ticket upon delivery.', why: 'Errors discovered on site require a re-order — another ten days.' },
            { step: 'Install with setting blocks at the quarter points; silicone the vertical joints; cure 24 hours before use.', why: 'The blocks carry the weight; the silicone seals the joint; cure time prevents joint failure.' },
          ],
          result: 'Code-compliant tempered shower enclosure, installed in one afternoon but with ten days of lead time upstream. Fifteen years of service life expected.',
        },
        exercises: [
          { level: 'beginner', prompt: 'Find a piece of tempered glass in your life (shower door, oven, car rear window). Locate the etched certification stamp in a corner.', hint: 'It will say "ANSI Z97.1" or "CPSC 16 CFR 1201" and include a manufacturer code.', solution: 'The stamp proves the pane was fabricated and certified as safety glass. If you cannot find a stamp, the pane may be annealed — a code violation in many locations.' },
          { level: 'beginner', prompt: 'Look at a storefront window. Is it likely tempered, laminated, or IGU? What clues tell you?', hint: 'Size, location relative to floor, and building occupancy.', solution: 'Large panes close to the floor in commercial settings are almost always tempered (required by code for safety) or laminated (required in hurricane zones and high-security storefronts). IGUs are identifiable by their perimeter spacer visible at the edge when looking closely.' },
          { level: 'intermediate', prompt: 'A customer wants to tint a tempered sliding door with window film. Is this safe? What risks exist?', hint: 'Thermal stress from differential heating.', solution: 'Applying film to tempered glass is generally acceptable but increases thermal-stress risk. Dark films absorb heat and can cause thermal breakage at the edges (where the glass is typically weaker due to manufacturing). Professional installers use tempered-glass-rated film and recommend matching SHGC to existing glass.' },
          { level: 'intermediate', prompt: 'An IGU in a residential window shows fog between the panes. What has failed, and what is the repair?', hint: 'The perimeter seal.', solution: 'The primary and secondary seals around the IGU perimeter have failed, admitting moisture. The desiccant strip inside the spacer has saturated. The repair is replacement of the entire IGU (not just re-sealing) — the failure is cumulative and re-sealing rarely holds. Modern IGUs are typically guaranteed 10–20 years.' },
          { level: 'advanced', prompt: 'A high-rise building has a tempered-glass balcony railing that has shattered three times in five years. What might be happening, and what mitigations exist?', hint: 'Nickel-sulfide inclusions.', solution: 'Spontaneous tempered-glass breakage from nickel-sulfide (NiS) inclusions. During heat-treat, tiny NiS particles in the melt transform to a larger-volume phase over years, eventually exceeding the internal tensile stress. Mitigations: (1) heat-soak testing, a second heat cycle at 290°C that forces any unstable inclusions to break the glass in the factory, removing those panes before installation; (2) specifying heat-soaked tempered glass going forward; (3) replacing with laminated tempered (which holds together even if one ply fails).' },
        ],
        troubleshooting: [
          { symptom: 'Glass shattered "for no reason"', likelyCauses: ['Nickel-sulfide inclusion (tempered)', 'Edge damage stress concentration', 'Thermal stress', 'Impact not observed'], quickTest: 'Examine the fracture pattern — small cubes = tempered, long radial cracks from one point = annealed or impact.', fix: 'Replace with heat-soaked tempered or laminated safety glass. Protect edges during install.' },
          { symptom: 'Fog between double-pane glass', likelyCauses: ['IGU perimeter seal failure'], quickTest: 'Confirm the condensation is between panes, not on either surface.', fix: 'Replace the IGU (not the window frame).' },
          { symptom: 'Laminated glass yellowing or delaminating at edges', likelyCauses: ['PVB degradation from UV or moisture'], quickTest: 'Visual inspection.', fix: 'Full pane replacement.' },
          { symptom: 'Low-E coating scratched off in one area', likelyCauses: ['Wrong cleaner (ammonia strips some coatings)', 'Abrasive pad used in cleaning'], quickTest: 'Look for a dull area visible at oblique angle.', fix: 'Coating damage is permanent. Educate cleaner (use neutral-pH glass cleaner, soft cloth only).' },
          { symptom: 'Tempered pane does not match shop ticket upon delivery', likelyCauses: ['Fabricator error', 'Shipping damage'], quickTest: 'Compare measurements and hole locations to the original drawing.', fix: 'Document with photos, reject delivery, reorder.' },
          { symptom: 'Annealed pane cracks during install', likelyCauses: ['Frame not flat', 'Over-tightening fasteners', 'Pinch points'], quickTest: 'Verify frame is plumb and square before install.', fix: 'Correct the frame; always use setting blocks to isolate the pane from frame stresses.' },
        ],
        progression: [
          { level: 'novice', canDo: 'Identify annealed, tempered, laminated, and IGU glass by sight and certification stamp.', shouldNext: 'Learn to score and snap annealed glass; visit a local glass shop to see the cutting table.' },
          { level: 'apprentice', canDo: 'Measure and specify shop tickets for tempered glass; install IGUs in residential frames; identify and document glass failure modes.', shouldNext: 'Learn structural silicone installation; read NFRC energy labels and specify IGUs by U-factor and SHGC.' },
          { level: 'journeyman', canDo: 'Install commercial curtain-wall glazing; supervise tempered-glass deliveries; troubleshoot IGU and coating failures.', shouldNext: 'Become an IUPAT instructor, specialize in hurricane or blast glazing, or move into glass-facade engineering.' },
        ],
        glossary: [
          { term: 'Annealed glass', def: 'Ordinary float glass that has cooled slowly. Cheap and clear but breaks into long sharp shards. Not legal for hazardous locations.' },
          { term: 'Tempered glass', def: 'Float glass reheated and rapid-cooled to put its skin in compression. Four times stronger; breaks into small rounded pebbles. Cannot be cut after tempering.' },
          { term: 'Laminated glass', def: 'Two or more panes bonded by a plastic interlayer (usually PVB). Cracks but stays in the frame. Standard for car windshields and security glazing.' },
          { term: 'IGU', def: 'Insulated Glazing Unit. Two or more panes sealed around the perimeter with a gas-filled air space. Standard modern residential window.' },
          { term: 'Low-E coating', def: 'Low-emissivity metal-oxide coating, a few dozen atoms thick, that reflects long-wavelength infrared while passing visible light.' },
          { term: 'U-factor', def: 'Rate of non-solar heat transfer through a window. Lower is better; a good residential triple-pane reads 0.20 or less.' },
          { term: 'SHGC', def: 'Solar Heat Gain Coefficient. Fraction of solar radiation admitted. High in cold climates; low in hot ones.' },
        ],
      },

      resources: {
        videos: [
          { id: null, source: 'other', url: 'https://glassmaking.cmog.org/studio/video-series', title: 'Corning Museum of Glass — Techniques video series', channel: 'Corning Museum of Glass', duration: 'variable', kind: 'museum', why: 'The world\'s leading glass museum\'s forty-plus-video archive: blowing, flameworking, cold working, casting. The best free museum-grade glass education online.' },
          { id: null, source: 'other', url: 'https://www.pilkington.com/en/global/about/education/the-float-process/the-float-process-step-by-step', title: 'The Float Process, step by step', channel: 'Pilkington', duration: 'interactive article', kind: 'animation', why: 'The inventor\'s own company walkthrough of the float process with 3D illustrations of each stage. Authoritative and well-made.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@corningmuseumofglass', title: 'Corning Museum of Glass — live glassmaking demos', channel: 'Corning Museum of Glass', duration: 'variable', kind: 'museum', why: 'Live and archived demonstrations from the museum\'s world-class studio. The daily hot-shop show is streamed.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@ThisOldHouse', title: 'This Old House — window and glazing segments', channel: 'This Old House', duration: 'variable', kind: 'tutorial', why: 'Tom Silva and Richard Trethewey on why windows fail and how to choose replacements. The most trusted trade content on American television.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@PracticalEngineeringChannel', title: 'Practical Engineering — how tempered glass works', channel: 'Practical Engineering', duration: 'variable', kind: 'documentary', why: 'Grady Hillhouse, civil engineer, explains thermal tempering and why a tempered pane shatters the way it does. The clearest demonstration of internal stress on YouTube.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@Lesics', title: 'Lesics — how float glass is made', channel: 'Lesics', duration: 'variable', kind: 'animation', why: 'Sabin Mathew\'s animated factory walkthrough of the Pilkington process. Clean 3D diagrams of each stage.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@TheEngineeringMindset', title: 'The Engineering Mindset — glazing and IGU animations', channel: 'The Engineering Mindset', duration: 'variable', kind: 'animation', why: 'Paul Evans\'s animations of double-glazed, triple-glazed, and low-E window construction.', collapsed: true },
        ],
        books: [
          { title: 'NGA\'s GANA Glazing Manual', author: 'National Glass Association', year: 2022, url: 'https://www.glass.org/news/2023/nga-publishes-updated-gana-glazing-manual', why: 'The definitive trade reference. Every commercial glazier keeps a copy in the truck.' },
          { title: 'Glass Construction Manual', author: 'Christian Schittich, Gerald Staib, et al.', year: 2007, url: 'https://www.degruyterbrill.com/document/doi/10.11129/detail.9783034615693/html?lang=en', why: 'The Birkhäuser/Detail reference for architects and builders working with structural glass.' },
          { title: 'The Visual Handbook of Building and Remodeling', author: 'Charlie Wing', year: 2019, url: 'https://archive.org/details/visualhandbookof0000wing', why: 'Wing\'s chapters on windows and glazing are the gentlest entry for a homeowner or general contractor.' },
          { title: 'Glass: A World History', author: 'Alan Macfarlane and Gerry Martin', year: 2002, url: 'https://www.worldcat.org/title/glass-a-world-history/oclc/48834692', why: 'The University of Chicago/Cambridge pairing of historians on how glass made the scientific revolution possible.' },
          { title: 'Glass in Building: Principles, Applications, Examples', author: 'Hans Schober', year: 2014, url: 'https://www.degruyterbrill.com/document/doi/10.11129/9783955532482/html', why: 'A Detail/Birkhäuser engineering-grade reference on structural and architectural glass for designers and engineers.' },
        ],
        articles: [
          { title: 'Glass', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Glass', why: 'Covers the material itself, from six-thousand-year-old Levantine beads to modern borosilicate.', year: null },
          { title: 'Tempered glass', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Tempered_glass', why: 'History, thermal and chemical tempering, standard thicknesses, and why nickel-sulfide inclusions sometimes cause spontaneous breakage.', year: null },
          { title: 'Laminated glass', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Laminated_glass', why: 'The Bénédictus story, the PVB chemistry, the ASTM impact tests.', year: null },
          { title: 'Float glass', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Float_glass', why: 'The Pilkington process in detail — the industrial history that made modern glazing possible.', year: null },
          { title: 'Pilkington', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Pilkington', why: 'The company that invented float glass and licensed the process worldwide.', year: null },
          { title: 'Insulated glazing', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Insulated_glazing', why: 'Double- and triple-pane IGU construction, gas fills, spacer technology.', year: null },
        ],
        courses: [
          { title: 'IUPAT Glaziers Apprenticeship', provider: 'International Union of Painters and Allied Trades', url: 'https://iupat.org/apprenticeship/', free: true, why: 'The four-year, 8,000-hour apprenticeship that is still the main on-ramp to commercial glazing in the United States.' },
          { title: 'Corning Museum of Glass — classes and workshops', provider: 'The Studio, Corning Museum of Glass', url: 'https://classes.cmog.org/', free: false, why: 'The world-class glass studio in upstate New York runs short courses in every technique.' },
        ],
        tools: [
          { title: 'Toyo supercutter (oil-fed glass cutter)', url: 'https://en.wikipedia.org/wiki/Glass_cutter', why: 'The pocket tool every glazier carries.' },
          { title: 'Running pliers', url: 'https://en.wikipedia.org/wiki/Glass_cutter', why: 'The pliers designed to run a score into a clean break.' },
          { title: 'Suction-cup lifter', url: 'https://en.wikipedia.org/wiki/Suction_cup', why: 'The way every sheet of plate glass has moved since the 1930s.' },
        ],
        primarySources: [
          { title: 'Pilkington 1959 float-glass announcement (Royal Society)', url: 'https://royalsocietypublishing.org/doi/10.1098/rspa.1969.0212', why: 'Lionel Alexander Bethune Pilkington\'s 1969 review-lecture paper in the Royal Society journal.' },
          { title: 'Bénédictus 1909 laminated-glass patent', url: 'https://en.wikipedia.org/wiki/Laminated_glass', why: 'The accident that led to safety glass.' },
        ],
      },

      seeAlso: ['setting', 'tolerances'],
      prereqs: [],
      leadsTo: ['setting'],
      chapterActivity: 'Saturday demos at a Red Hook glass-studio — scoring, snapping, and the safe way to handle a full sheet.',
      sources: [
        'https://en.wikipedia.org/wiki/Tempered_glass',
        'https://en.wikipedia.org/wiki/Laminated_glass',
        'https://en.wikipedia.org/wiki/Float_glass',
        'https://en.wikipedia.org/wiki/Insulated_glazing',
        'https://en.wikipedia.org/wiki/Pilkington',
        'https://www.pilkington.com/en/global/about/education/the-float-process/the-float-process-step-by-step',
      ],
      verifiedAt: '2026-04-23',
    },

    setting: {
      id: 'setting',
      name: 'Setting Glass',
      level: 'Intermediate',
      dek: 'Measuring, cutting, cushioning, sealing — the mostly invisible sequence that makes a window actually close.',
      readTime: '17 min',

      sections: ['The measurement is not the opening', 'Cushions and setting blocks', 'Glazing compounds and tapes', 'The storefront problem', 'Retrofit vs. new construction', 'How to think about it', 'Work through one', 'Try these', 'When it goes wrong', 'What to try next'],
      body: [
        { type: 'lead', text: 'A glazier arrives on a site with nothing the client recognizes as glass. There is a pane on the truck, stood on edge in a wooden A-frame, wrapped in paper and packing tape. There are buckets of putty, rolls of rubber setting tape, bags of plastic shims color-coded by thickness, tubes of silicone sealant, a putty knife with a blade honed to a knife edge, a glass cutter, and a pair of Kevlar sleeves. Everything in the truck exists so that the pane, by the end of the afternoon, will disappear into the wall.' },
        { type: 'h2', text: 'The measurement is not the opening' },
        { type: 'p', text: 'The first rule of setting glass is that you never cut to the size of the opening. You subtract — an eighth of an inch, a sixteenth, whatever the frame\'s tolerance demands — so the pane can sit inside its rabbet without touching the metal or wood directly. Glass that bears hard against a frame will crack the first time the building moves. A careful glazier measures twice from opposite corners of the opening to check that it is actually a rectangle — because openings in real buildings usually aren\'t — and lets the smallest measurement govern.' },
        { type: 'h2', text: 'Cushions and setting blocks' },
        { type: 'p', text: 'Inside every properly set window, the glass does not touch the frame anywhere. Two small neoprene setting blocks, placed at the quarter points along the bottom edge, carry the weight. Edge clearance around the rest of the pane is held by rubber spacers. This arrangement lets the frame expand and contract with heat, lets the building shift, lets the glass stay intact through thirty years of weather. It is invisible to the occupant and the only reason the window survives.' },
        { type: 'h2', text: 'Glazing compounds and tapes' },
        { type: 'p', text: 'The sealing material depends on the era and the frame. A hundred-year-old wooden sash is glazed with linseed-oil putty, bedded behind the pane and tooled in a clean triangular bead. A mid-century aluminum storefront uses dense rubber gaskets that compress under a snap-in stop. A contemporary curtain wall is sealed with structural silicone in a continuous bead, engineered and tested to carry wind loads without mechanical fasteners. Each technology displaces the last without replacing it — every working glazier still learns putty, because old buildings outlast their glaziers.' },
        { type: 'h2', text: 'The storefront problem' },
        { type: 'p', text: 'Commercial storefront glazing is different from residential windows in every practical way. Panes are larger than a single person can safely carry. Openings are high and exposed. Code requires tempered or laminated safety glass in any pane within thirty-six inches of the floor or any door. The standard tool for moving a large pane is a pair of suction cups with a steel handle; the standard second person is the one watching for trucks on the sidewalk. A storefront job is one where the union apprenticeship\'s hours on safety, fall protection, and rigging earn back their cost in the first afternoon.' },
        { type: 'h2', text: 'Retrofit vs. new construction' },
        { type: 'p', text: 'Most glazing in North America is retrofit — replacing a failed insulated-glass unit in an existing aluminum or vinyl frame, or reglazing a wooden sash in a landmarked brownstone. Each has its own folklore. An IGU replacement is a matter of removing the outer stop, popping the unit, cleaning the frame, laying new setting tape, and snapping the stop back. A wooden sash reglaze — where the failing putty is chipped out with a glazier\'s chisel, the old glazier\'s points pulled, the pane removed, the rabbet primed, fresh putty bedded, new glass set, new points driven, new putty tooled around the perimeter — is half an hour of careful work that gives a window another forty years.' },
        { type: 'callout', text: 'A pane of glass carried the wrong way — flat, rather than on edge — can crack under its own weight in the middle of a span. Rule on every glazier\'s first day: glass always travels on edge, and always with one hand below and one hand supporting the top corner.' },

        { type: 'h2', text: 'How to think about it' },
        { type: 'p', text: 'The pane floats inside the frame. It is suspended on two tiny rubber blocks at the bottom, kept from touching the frame anywhere else, and sealed with a material that can flex as the building flexes. The frame is the pane\'s enemy as much as its friend — rigid contact breaks glass. Every detail in a glazing assembly exists to absorb movement: thermal, wind-load, building settlement, seismic. The glazier\'s real job is to place a fragile rigid object inside a moving flexible structure so that the two never argue.' },
        { type: 'h2', text: 'Work through one' },
        { type: 'p', text: 'An old brownstone needs its parlor-floor window reglazed. The pane has cracked; the putty is ninety years old and crumbling. The glazier removes the sash, lays it on a bench, chisels out the old putty with a heat gun softening it first, pulls the old glazier\'s points with pliers, removes the broken pane. Measures the rabbet (the rectangular groove around the inside edge of the sash) and subtracts 1/8" for clearance. Cuts new glass on a tile cutter, runs the score with running pliers. Primes the raw-wood rabbet with boiled linseed oil (dry wood sucks oil out of new putty and the putty fails). Beds a thin layer of putty in the rabbet, sets the new pane in, presses it down firmly, drives new glazier\'s points every six inches, then tools a neat triangular putty bead around the perimeter. Let it skin for two weeks before painting.' },
        { type: 'h2', text: 'Try these' },
        { type: 'p', text: 'First: cut a piece of scrap annealed glass using a glass cutter. The motion is a single smooth pass pressing down about as hard as writing with a pen. Snap the score over a dowel. If the break is clean, you have the basic skill; if it runs off, you pressed too soft or too hard. Second: measure an actual window opening in your home at top, middle, and bottom. You will likely find a quarter-inch variation. This is why glaziers always measure three places. Third: look at a wooden-sash window near you. Find the triangular putty bead around each pane. Note where it has cracked or pulled away — the failure mode of every old window.' },
        { type: 'h2', text: 'When it goes wrong' },
        { type: 'p', text: 'Glass cracks during installation when the frame is not flat or the setting blocks are wrong — pressure concentrates at one point and shatters the pane. IGUs fog because the perimeter seal failed; replace the unit. Putty pulls away because the rabbet was not primed; always prime bare wood with linseed oil before bedding putty. Storefront silicone adhesion fails in UV over years; use the silicone manufacturer\'s primer on aluminum. Tempered glass delivered with the wrong hole pattern is a total loss — verify every shop ticket before the panel leaves the fabricator.' },
        { type: 'h2', text: 'What to try next' },
        { type: 'p', text: 'Past basic residential setting, the next rungs are reglazing historic wooden sashes (a specialty trade in landmarked buildings), storefront aluminum glazing with gaskets, full IGU replacements in vinyl frames, and structural-silicone curtain-wall work. Past that lies the rigging and high-rise world: four-sided structural glass panels installed by crane, blast-resistant glazing for government buildings, and the decorative craft of stained and leaded glass. Each demands a different apprenticeship.' },
      ],

      keyTerms: ['rabbet', 'setting block', 'glazing compound', 'silicone sealant', 'structural glazing', 'edge clearance', 'bite', 'weep hole', 'glazier\'s points', 'curtain wall'],

      scaffolding: {
        mentalModel: {
          analogy: 'The pane floats inside the frame. Two rubber blocks at the bottom hold it up; rubber spacers keep it from touching the frame edges; a flexible sealant seals the gap. The glazier\'s job is to place a fragile rigid object inside a moving flexible structure so neither breaks the other.',
          whereItBreaks: 'The analogy understates structural-silicone glazing, where the sealant is genuinely carrying wind load, not just sealing. In that world, the silicone is a structural adhesive and its bond line is engineered.',
        },
        workedExample: {
          prompt: 'Reglaze a 20"×30" wooden sash in a 1920s Brooklyn brownstone. The original pane is cracked; putty is crumbling.',
          scenario: 'Sash removed from building, on a bench in the shop.',
          steps: [
            { step: 'Soften old putty with a heat gun; chisel out carefully with a 1/2" glazier\'s chisel.', why: 'Old putty is hard; heat softens it and prevents damage to the rabbet edges.' },
            { step: 'Pull old glazier\'s points with pliers; remove broken pane; vacuum debris from the rabbet.', why: 'Clean rabbet is required for new putty to bond.' },
            { step: 'Measure the rabbet at top, middle, bottom; subtract 1/8" for edge clearance; cut new annealed single-strength glass.', why: 'Real openings are not square; always take the smallest dimension and subtract for clearance.' },
            { step: 'Prime bare wood rabbet with boiled linseed oil; let absorb 30 minutes.', why: 'Dry wood pulls oil from new putty, causing early putty failure. Priming locks the wood.' },
            { step: 'Bed a thin layer of linseed-oil putty in the rabbet; press new pane into place.', why: 'The bedding putty seals the back of the pane against weather.' },
            { step: 'Drive new glazier\'s points every 4–6 inches with a putty knife or point driver.', why: 'Points retain the pane while the putty cures.' },
            { step: 'Tool a neat triangular putty bead around the perimeter; angle ~30–45°.', why: 'The triangle sheds water and gives a crisp visible edge.' },
            { step: 'Let putty skin for 2 weeks before painting; paint must bridge putty onto glass by 1/16" to seal.', why: 'Uncured putty absorbs paint unevenly; the paint seal is what makes the job last 40 years.' },
          ],
          result: 'Sash reglazed, ready to reinstall after 2 weeks of putty cure. Expected service life: 40+ years if painted and maintained.',
        },
        exercises: [
          { level: 'beginner', prompt: 'Cut a piece of annealed glass using a glass cutter and running pliers. What tells you the score is deep enough?', hint: 'Listen and feel.', solution: 'A good score makes a continuous scratching sound. The line should be a consistent silver-colored ribbon, not a white dotted line. If you see white, you pressed too hard; if you see nothing, not hard enough. Practice on scrap until consistent.' },
          { level: 'beginner', prompt: 'Measure a window opening in your home at top, middle, and bottom. Is the opening a true rectangle?', hint: 'The measurements will differ.', solution: 'Almost no real opening is a true rectangle. A 1/4" variation is normal on older houses. Always measure at three heights and use the smallest dimension as your pane size, minus edge clearance.' },
          { level: 'intermediate', prompt: 'You install a new IGU in a vinyl frame. Two weeks later, the customer reports condensation on the inside glass surface during cold weather. Is the IGU failing?', hint: 'Surface condensation is different from between-pane condensation.', solution: 'Condensation on interior glass surfaces in cold weather means the indoor humidity is too high for the window\'s thermal performance, not that the IGU has failed. Between-pane condensation (fog inside the IGU) indicates IGU seal failure. Teach the customer to read the location of the condensation.' },
          { level: 'intermediate', prompt: 'A newly installed large tempered-glass storefront panel cracks 48 hours after installation. You have not returned to the site. What are the candidate causes?', hint: 'Think about what happened in those 48 hours.', solution: 'Candidates: (1) thermal stress — direct sun on part of the pane while edges are cold, (2) a nickel-sulfide inclusion, (3) improper setting-block placement causing pressure concentration, (4) the frame racking as the building moves. Investigate: photograph the fracture pattern (radial from one point = impact or stress concentration; random = inclusion), check setting blocks, review weather logs for the period.' },
          { level: 'advanced', prompt: 'A curtain-wall panel specified with structural silicone glazing needs to be replaced. What is different about the replacement sequence compared to a gasket-glazed unit?', hint: 'Structural silicone is an adhesive, not a gasket.', solution: 'Structural silicone bonds the glass to the frame — it is the primary means of wind-load retention. Replacement requires: (1) cutting the old silicone out carefully without damaging the aluminum substrate; (2) surface preparation per manufacturer specification (solvent wipe, primer, cure window); (3) temporary mechanical support during silicone cure (often 7–21 days); (4) silicone manufacturer field inspection and sign-off on the repair. This is not a same-day job.' },
        ],
        troubleshooting: [
          { symptom: 'Glass cracks during install', likelyCauses: ['Frame out of plane', 'Missing or wrong setting blocks', 'Edge damage from shipping', 'Pinch point in frame'], quickTest: 'Check frame with a 4-foot level.', fix: 'Shim frame flat before re-install; use proper setting blocks; inspect pane edges before install.' },
          { symptom: 'Putty pulls away from wood rabbet within a year', likelyCauses: ['Rabbet not primed', 'Wrong putty (latex instead of linseed)', 'Painting too soon'], quickTest: 'Probe putty with a fingernail.', fix: 'Remove failed putty; prime wood with boiled linseed oil; bed new linseed putty; wait 2 weeks before painting.' },
          { symptom: 'Fog between IGU panes', likelyCauses: ['Perimeter seal failure'], quickTest: 'Confirm fog location — between panes, not surface.', fix: 'Replace IGU.' },
          { symptom: 'Silicone joint pulling away from aluminum frame', likelyCauses: ['No primer used', 'Wrong silicone grade', 'Contaminated substrate'], quickTest: 'Check manufacturer data sheet for primer requirement.', fix: 'Remove, clean, prime per spec, re-silicone.' },
          { symptom: 'Interior condensation on window surface', likelyCauses: ['High indoor humidity', 'Poor window thermal performance', 'Cold drafts around frame'], quickTest: 'Measure indoor RH with hygrometer.', fix: 'Not a window failure; educate customer on ventilation and humidity control.' },
          { symptom: 'Storefront glass flexes visibly in wind', likelyCauses: ['Pane thickness under-spec', 'Frame deflection excessive'], quickTest: 'Compare pane specification to wind-load calculation.', fix: 'Structural engineer review; may require thicker glass or additional framing mullions.' },
        ],
        progression: [
          { level: 'novice', canDo: 'Measure an opening, cut annealed glass to size, carry glass safely on edge.', shouldNext: 'Learn to glaze a wood sash with linseed putty and glazier\'s points.' },
          { level: 'apprentice', canDo: 'Replace residential IGUs; reglaze wood sash in-shop; install setting blocks correctly.', shouldNext: 'Storefront aluminum glazing with gaskets; basic structural silicone work.' },
          { level: 'journeyman', canDo: 'Install curtain-wall panels; work at height with rigging; specify shop tickets; supervise a small crew.', shouldNext: 'Specialize in historic reglazing, high-rise structural glazing, or blast/security applications.' },
        ],
        glossary: [
          { term: 'Rabbet', def: 'The L-shaped recess around the inside edge of a sash or frame that holds the glass.' },
          { term: 'Setting block', def: 'A small neoprene or EPDM block (typically 4" long) placed at the quarter points along the bottom rabbet to carry the pane\'s weight.' },
          { term: 'Bite', def: 'The distance from the edge of the glass to the sealant face. Standard minimum is 1/4" to 3/8" for structural silicone.' },
          { term: 'Weep hole', def: 'A small drainage opening in the bottom of a glazed frame that lets incidental water escape before it damages the frame.' },
          { term: 'Glazier\'s points', def: 'Small triangular or diamond-shaped metal pins driven into a wooden rabbet to retain a pane while the putty cures.' },
          { term: 'Edge clearance', def: 'The gap between the pane edge and the frame, allowing for thermal movement. Typically 1/8" for residential, larger for large commercial panels.' },
          { term: 'Structural silicone', def: 'Silicone sealant engineered to carry wind load, bonding glass directly to a frame without mechanical fasteners.' },
        ],
      },

      resources: {
        videos: [
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@ThisOldHouse', title: 'This Old House — window repair and glass replacement', channel: 'This Old House', duration: 'variable', kind: 'tutorial', why: 'Tom Silva\'s segments on reglazing wooden sashes and installing new windows remain the most trusted residential demonstrations on film.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@ScottBrownCarpentry', title: 'Scott Brown Carpentry — window installation', channel: 'Scott Brown Carpentry', duration: 'variable', kind: 'shop', why: 'A New Zealand carpenter whose detailed window-install videos — flashing, sealing, squaring — translate directly to glazing work anywhere.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@FineHomebuilding', title: 'Fine Homebuilding — window and glazing tutorials', channel: 'Fine Homebuilding', duration: 'variable', kind: 'tutorial', why: 'Taunton Press\'s own channel, linked to the magazine\'s archive.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@TheNationalGlassAssociation', title: 'National Glass Association — glazing technique videos', channel: 'National Glass Association', duration: 'variable', kind: 'tutorial', why: 'The trade association\'s own technical videos on commercial glazing, silicone application, and code compliance.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@corningmuseumofglass', title: 'Corning Museum of Glass — flat glass demonstrations', channel: 'Corning Museum of Glass', duration: 'variable', kind: 'museum', why: 'For anyone interested in how flat glass is cut and worked in the studio rather than on the site.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@HomeRenoVisionDIY', title: 'Home RenoVision DIY — window installation', channel: 'Home RenoVision DIY', duration: 'variable', kind: 'tutorial', why: 'Jeff Thorman films full residential window replacements. The DIY homeowner\'s complete walkthrough.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@MattRisinger', title: 'Matt Risinger — building science and high-performance windows', channel: 'Matt Risinger', duration: 'variable', kind: 'documentary', why: 'A Texas builder who explains why a window leak is almost never the glass itself.', collapsed: true },
        ],
        books: [
          { title: 'NGA\'s GANA Glazing Manual', author: 'National Glass Association', year: 2022, url: 'https://www.glass.org/news/2023/nga-publishes-updated-gana-glazing-manual', why: 'The industry reference on sealants, setting blocks, edge clearances, and every installation detail.' },
          { title: 'Residential Glazing Guide', author: 'National Glass Association', year: 2020, url: 'https://www.glass.org/store', why: 'NGA\'s companion volume for residential work.' },
          { title: 'The Visual Handbook of Building and Remodeling', author: 'Charlie Wing', year: 2019, url: 'https://archive.org/details/visualhandbookof0000wing', why: 'Wing\'s drawings of window-to-wall flashing details are the cleanest in print.' },
          { title: 'Fenestration Manual', author: 'American Architectural Manufacturers Association', year: 2019, url: 'https://fgiaonline.org/', why: 'The AAMA\'s technical reference on window systems.' },
          { title: 'Windows and Skylights', author: 'Scott McBride', year: 2008, url: 'https://www.taunton.com/store/product/windows-skylights/', why: 'Taunton\'s book in the Builder\'s Best Guide series.' },
        ],
        articles: [
          { title: 'Glazier', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Glazier', why: 'Trade overview, hazards, apprenticeship paths, licensing states.', year: null },
          { title: 'Insulated glazing', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Insulated_glazing', why: 'How a double- or triple-pane IGU is assembled, sealed, and installed.', year: null },
          { title: 'Glass Magazine — NGA Resources for Glaziers', source: 'Glass Magazine', url: 'https://www.glassmagazine.com/article/nga-resources-glaziers-installers', why: 'Current trade-magazine guide to NGA\'s free technical bulletins.', year: 2023 },
          { title: 'Curtain wall', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Curtain_wall_(architecture)', why: 'The large-building glazing system that dominates modern architecture.', year: null },
        ],
        courses: [
          { title: 'IUPAT Glaziers Apprenticeship', provider: 'International Union of Painters and Allied Trades', url: 'https://iupat.org/apprenticeship/', free: true, why: 'Four years, 8,000 paid hours, classroom plus on-the-job.' },
          { title: 'NGA MyGlassClass online training', provider: 'National Glass Association', url: 'https://www.glass.org/education', free: false, why: 'The industry\'s own online learning platform — certifications in architectural glazing, auto glazing, and installation safety.' },
        ],
        tools: [
          { title: 'Glass suction cups (double, with locking levers)', url: 'https://en.wikipedia.org/wiki/Suction_cup', why: 'The way every sheet of plate glass has moved since the 1930s. Carried in pairs.' },
          { title: 'Glazier\'s putty knife', url: 'https://en.wikipedia.org/wiki/Putty_knife', why: 'A stiff, narrow blade honed nearly to a razor. Tools the traditional triangular bead of linseed-oil putty on a wood sash.' },
          { title: 'Glazing point driver (glazier\'s push-point tool)', url: 'https://en.wikipedia.org/wiki/Glazier', why: 'Drives flat metal points into the rabbet to hold a pane in place before the putty goes on.' },
          { title: 'Score-and-snap glass cutter (Fletcher or Toyo)', url: 'https://en.wikipedia.org/wiki/Glass_cutter', why: 'The wheel-and-oil tool that scores glass in a single pass.' },
        ],
        primarySources: [
          { title: 'ASTM C1036 — Standard for flat glass', url: 'https://www.astm.org/c1036-21.html', why: 'The ASTM standard every glazier cites and every manufacturer tests to.' },
        ],
      },

      seeAlso: ['glass_types', 'tolerances'],
      prereqs: ['glass_types'],
      leadsTo: [],
      chapterActivity: 'A spring window-reglazing workshop at a Crown Heights brownstone — hot linseed putty, wood sashes, and instruction from a union journeyman.',
      sources: [
        'https://en.wikipedia.org/wiki/Glazier',
        'https://en.wikipedia.org/wiki/Insulated_glazing',
        'https://en.wikipedia.org/wiki/Curtain_wall_(architecture)',
        'https://www.glass.org/news/2023/nga-publishes-updated-gana-glazing-manual',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
