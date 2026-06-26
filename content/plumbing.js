// content/plumbing.js
// Batch: B07-trades-I
// Last updated: 2026-04-23 by BATCH B07-trades-I
//
// Topics: pipe_types, dwv, fixtures
// Scaffold: lead -> figure -> whole idea -> before you start
//   -> sub-skills with worked examples + common mistakes
//   -> troubleshooting -> going deeper -> practice -> self-check -> first project.

window.CONTENT = window.CONTENT || {};
window.CONTENT.plumbing = {
  subjectId: 'plumbing',
  version: 3,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B07-trades-I',
  topics: {

    // ——— PIPES & FITTINGS ———
    pipe_types: {
      id: 'pipe_types',
      name: 'Pipes & Fittings',
      level: 'Beginner',
      dek: 'Copper, PEX, PVC, cast iron — each material argues a different case for the same job.',
      readTime: '18 min',

      sections: ['Whole idea', 'Before you start', 'Copper', 'PEX', 'PVC', 'Cast iron', 'Reading fittings', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'The English word plumbing comes from plumbum, the Latin for lead. Roman plumbers worked in lead because it bent without breaking and held a joint without welding. Two thousand years later, a working plumber still picks a metal or a plastic the way a Roman picked lead: for how it handles water, how it handles heat, and how long it is going to last buried in a wall. The choice is not arbitrary. Each material answers a different question.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/PEX_plumbing.jpg?width=1200', caption: 'PEX supply lines — the flexible tubing now in sixty percent of new American homes.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'Residential water comes in four flavors of pipe: copper (the traditional supply), PEX (the modern supply), PVC and ABS (the drains), and cast iron (the old drains). Each has a joining method, a code-approved use, and a failure mode. Learn the four materials and the four joining methods — sweating, crimping, solvent-welding, rubber couplings — and you can handle every residential plumbing repair.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'A tubing cutter for copper and PEX. A propane torch with MAPP gas canister for sweating copper. A PEX crimp tool with 1/2" and 3/4" rings. A PVC primer and cement. A deburring tool. Channel-lock pliers. Teflon tape. Rags and a bucket. If you own nothing else, a pipe wrench for stubborn threads.' },
        { type: 'h3', text: 'Safety' },
        { type: 'p', text: 'Turn off the water at the main before any work. Open the lowest faucet in the house to drain the system. A torch on copper is a fire hazard — keep a wet rag and a fire extinguisher at the ready, and use a flame-resistant heat shield if you are soldering near framing. Wear safety glasses; hot solder spatters.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'Nominal size — the trade name of the pipe diameter, not the actual measurement. Type L — the standard copper tubing weight for potable water (Type M is thinner, Type K is heavier). Sweating — soldering copper with a torch. Crimping — compressing a PEX ring around a barbed fitting with a calibrated tool. Solvent welding — chemically fusing PVC with primer and cement. Union — a fitting designed to be disassembled later. Tee — a three-way fitting. Elbow — a 45° or 90° turn. Coupling — a straight connector.' },

        { type: 'h2', text: 'Copper — the traditional supply' },
        { type: 'p', text: 'Type L copper at 1/2" nominal is the standard residential supply line. It resists corrosion from most municipal water, solders cleanly with a propane torch, and has a 50-year field record. The downsides: it is expensive, it is stolen off construction sites for scrap value, and sweating a joint in a flooded wall cavity is nearly impossible without draining the system.' },
        { type: 'h3', text: 'Sweating a copper joint' },
        { type: 'p', text: 'Clean the end of the pipe and the inside of the fitting with emery cloth or a wire-brush fitting brush until both surfaces are shiny. Apply flux to both surfaces with a small brush. Assemble. Heat the fitting (not the pipe) with the torch until the flux sizzles. Touch solder to the joint opposite the flame; capillary action pulls the molten solder into the gap. You should see a full ring of solder at both ends of the fitting. Wipe with a wet rag while still hot.' },
        { type: 'aside', label: 'Worked example', text: 'Soldering a 1/2" x 90° elbow to a 1/2" copper pipe. Cut the pipe square with a tubing cutter. Deburr with a reamer. Clean one inch of the pipe end with emery cloth. Clean inside the elbow with a fitting brush. Brush flux on both. Push the elbow onto the pipe. Heat the elbow, not the pipe. When flux sizzles, touch solder to the joint edge; it should flow in. Wipe hot. Total time: about three minutes once you have done ten.' },
        { type: 'aside', label: 'Common mistake', text: 'Not cleaning the pipe and fitting. Oxidation and skin oils block the solder from bonding. A joint that looks soldered but leaks when pressurized almost always failed because the surfaces were dirty. Shiny copper, every time.' },

        { type: 'h2', text: 'PEX — the modern supply' },
        { type: 'p', text: 'Cross-linked polyethylene. Flexible, freeze-resistant (it expands rather than bursts), non-corrosive, and installable with half the fittings of copper. Three variants: PEX-A (most flexible, expansion fittings), PEX-B (most common, crimp rings), PEX-C (stiffer, less common). A PEX system typically uses a central manifold with individual runs to each fixture — a "home-run" layout — which means no hidden fittings in walls and fewer pressure losses.' },
        { type: 'h3', text: 'Crimping a PEX connection' },
        { type: 'p', text: 'Cut the PEX square with a PEX cutter (a scissor-like tool). Slide a copper crimp ring over the end. Push the barbed fitting fully into the pipe; you should see the pipe stop at the shoulder. Slide the ring down over the barbs. Set the crimp tool perpendicular to the ring, squeeze until the tool bottoms out. Check with a gauge (a Go/No-Go ring) to confirm the crimp is to spec.' },
        { type: 'aside', label: 'Worked example', text: 'A PEX-B connection to a 1/2" sharkbite-free shut-off valve: cut the PEX, slide a 1/2" crimp ring onto the PEX, push the barbed end of the valve fully in, slide the ring down flush with the shoulder, crimp. Total time under 30 seconds once practiced.' },
        { type: 'aside', label: 'Common mistake', text: 'Pushing the barbed fitting in only partway. The ring must sit fully on the barbed section; if it is on the smooth lead-in, the crimp fails immediately or in six months. Push until the pipe bottoms against the shoulder of the fitting.' },

        { type: 'h2', text: 'PVC — the drain pipe' },
        { type: 'p', text: 'Polyvinyl chloride. White, rigid, solvent-welded. Used for drain, waste, and vent (DWV) lines — not for potable water supply. ABS (black) is the same idea with slightly different chemistry and solvent. Both are cheap, fast to assemble, and make a joint stronger than the pipe around it.' },
        { type: 'h3', text: 'Solvent-welding PVC' },
        { type: 'p', text: 'Cut the pipe square with a PVC saw or cutter. Deburr and chamfer the end. Dry-fit the fitting; it should slide on almost all the way. Mark the pipe where the fitting lands. Apply PVC primer (the purple liquid) to the outside of the pipe and inside of the fitting. Immediately apply PVC cement. Push the fitting fully onto the pipe with a quarter-turn twist. Hold for 30 seconds. The joint is full-strength in an hour.' },
        { type: 'aside', label: 'Common mistake', text: 'Skipping the primer. The primer softens the PVC so the cement can fuse both surfaces. Without primer, the cement sits on the surface and the joint fails in pressure. Purple first, then clear.' },

        { type: 'h2', text: 'Cast iron — the old drain' },
        { type: 'p', text: 'Gray, rigid, heavy. The drain material of pre-war American buildings. Still used in commercial work because it dampens water-flow noise better than PVC. Modern cast iron is joined with rubber couplings and stainless-steel hose clamps (called "no-hub couplings") — much faster than the lead-and-oakum joints it replaced.' },

        { type: 'h2', text: 'Reading the fittings' },
        { type: 'p', text: 'An elbow turns the line. A 90° sweeps wide or tight; a street elbow has a male end on one side and female on the other. A tee branches the line. A coupling joins two pieces. A reducer changes diameter. A union breaks apart later without cutting. A cap seals a dead end. Every joint is a place the pipe can fail; the first discipline in plumbing is to use as few fittings as the layout allows.' },

        { type: 'h2', text: 'Troubleshooting' },
        { type: 'p', text: 'Soldered joint leaks. Wasn\'t clean, or wasn\'t heated enough for the solder to flow in. Drain, cut out the joint, redo. PEX crimp leaks. Ring not fully on barb, or not crimped square. Cut out, redo. PVC joint cracks in time. No primer, or too little cement. Replace. Threaded joint leaks. Teflon tape wrong direction (it should go clockwise so tightening the joint doesn\'t push the tape back).' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'After you can sweat a copper joint and crimp a PEX fitting, the next skills are repiping (running new supply lines in a finished wall), installing a whole-house manifold with PEX home runs, and working with threaded black iron for gas. The Code Check Plumbing flipchart is the single best reference; Roger Wakefield\'s YouTube channel is the best free video library in English.' },

        { type: 'aside', label: 'Practice this week', text: 'Buy ten feet of 1/2" copper, a pack of elbows and tees, and flux and solder. Sweat ten joints in scrap, one after another. Fill with water, pressurize with a bicycle pump. Any leak means that joint wasn\'t clean enough. Under twenty dollars in material; by the tenth joint you have the skill.' },
        { type: 'aside', label: 'Self-check', text: 'Why must copper be cleaned before soldering? (Oxidation blocks the solder from bonding.) What keeps PEX from bursting when frozen? (It expands, then contracts back.) Why does PVC need primer? (To soften the surface so the cement fuses.) If any stumps you, watch Roger Wakefield "The End of Copper."' },

        { type: 'callout', text: 'First project: replace a leaky kitchen shut-off valve. Shut off water at main, drain, cut out the old valve with a tubing cutter, sweat in a quarter-turn ball valve. One hour, under $20 in parts. You will learn every step of sweating copper on a repair that a plumber would charge $200 for.' },
      ],

      keyTerms: ['copper type L', 'PEX-A', 'PEX-B', 'PVC', 'cast iron', 'sweating', 'crimp ring', 'solvent weld', 'ferrule', 'union', 'nipple', 'compression fitting', 'SharkBite', 'home-run manifold'],

      resources: {
        videos: [
          { id: 'TKdU95afr3s', source: 'youtube', url: 'https://www.youtube.com/watch?v=TKdU95afr3s', title: 'The End of Copper. Why PEX-A Is Taking Over', channel: 'Roger Wakefield', duration: '13:44', why: 'Master plumber on why new construction is almost entirely PEX.' },
          { id: 'DoymzB9Bt-Y', source: 'youtube', url: 'https://www.youtube.com/watch?v=DoymzB9Bt-Y', title: 'PEX vs Copper. The Debate Is OVER!', channel: 'Roger Wakefield', duration: '12:19', why: 'The canonical side-by-side comparison.' },
          { id: 'EVYoX9-Ik-w', source: 'youtube', url: 'https://www.youtube.com/watch?v=EVYoX9-Ik-w', title: 'PEX vs COPPER for Plumbing', channel: 'Roger Wakefield', duration: '11:07', why: 'The homeowner version of the argument.' },
          { id: null, source: 'other', url: 'https://www.thisoldhouse.com/', title: 'This Old House — plumbing with Richard Trethewey', channel: 'This Old House', duration: 'variable', why: 'Fourth-generation plumber on copper sweating and PEX install.', featured: false },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/mattrisinger', title: 'The Build Show — plumbing rough-in', channel: 'Matt Risinger', duration: 'variable', why: 'Construction-science view of residential rough-ins.', featured: false },
        ],
        books: [
          { title: 'Code Check Plumbing & Mechanical', author: 'Redwood Kardon', year: 2015, url: 'https://archive.org/details/codecheckcomplet0000kard', why: 'The flipchart every inspector carries.' },
          { title: 'Modern Plumbing', author: 'E. Keith Blankenbaker', year: 2019, url: '', why: 'The apprentice textbook.' },
          { title: 'Audel Plumbers Pocket Manual', author: 'Rex Miller', year: 2003, url: '', why: 'The pocket reference plumbers keep in the truck.' },
          { title: 'Plumbing 101', author: 'PHCC Educational Foundation', year: 2019, url: 'https://archive.org/details/plumbing1010000unse', why: 'First-year apprentice textbook.' },
        ],
        articles: [
          { title: 'Plumbing', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Plumbing', why: 'Roman lead pipes to modern PEX.', year: null },
          { title: 'Piping and plumbing fitting', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Piping_and_plumbing_fitting', why: 'Fitting taxonomy.', year: null },
          { title: 'PEX', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/PEX', why: 'The plastic that changed American plumbing.', year: null },
        ],
        courses: [
          { title: 'PHCC Plumbing Apprentice Program (Plumbing 101–401)', provider: 'PHCC', url: 'https://www.phccweb.org/', free: false, why: 'The four-year American apprenticeship.' },
          { title: 'Roger Wakefield — Master The NEC for Plumbers', provider: 'Roger Wakefield', url: 'https://rogerwakefield.com/', free: false, why: 'Exam prep and continuing ed.' },
        ],
        tools: [
          { title: 'IAPMO — Uniform Plumbing Code', url: 'https://www.iapmo.org/', why: 'The Western US plumbing code.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/PEX_plumbing.jpg?width=1200', caption: 'PEX supply manifold.', credit: 'Wikimedia Commons', alt: 'PEX supply lines' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Copper_pipe_fittings.jpg?width=1200', caption: 'Copper fittings.', credit: 'Wikimedia Commons', alt: 'Copper pipe fittings' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cast_iron_pipe.jpg?width=1200', caption: 'Cast iron drain pipe.', credit: 'Wikimedia Commons', alt: 'Cast iron pipe' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Soldering_copper_pipe.jpg?width=1200', caption: 'Sweating a copper joint.', credit: 'Wikimedia Commons', alt: 'Soldering copper' },
        ],
        animations: [
          { youtubeId: 'TKdU95afr3s', caption: 'Roger Wakefield: why PEX-A is taking over.', why: 'Reshaped American residential plumbing.' },
        ],
      },

      seeAlso: ['dwv', 'fixtures', 'refrigeration', 'ohms'],
      prereqs: [],
      leadsTo: ['dwv', 'fixtures'],

      chapterActivity: 'A Saturday sweating-copper workshop at a Queens plumbing supply — bring safety glasses, leave with a ninety and a tee you soldered.',

      sources: ['https://en.wikipedia.org/wiki/Plumbing', 'https://en.wikipedia.org/wiki/Piping_and_plumbing_fitting', 'https://en.wikipedia.org/wiki/PEX'],
      verifiedAt: '2026-04-23',
    },

    // ——— DRAIN-WASTE-VENT ———
    dwv: {
      id: 'dwv',
      name: 'Drain-Waste-Vent',
      level: 'Intermediate',
      dek: 'Gravity takes the water down; the vents keep the gas out of the house.',
      readTime: '18 min',

      sections: ['Whole idea', 'Before you start', 'Slope', 'Traps', 'Vents', 'Sizing', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'The supply side of the house is pressurized, pushed through the pipes at fifty or sixty pounds per square inch. The drain side is the opposite: everything runs by gravity, and the whole job of a drain-waste-vent system is to keep the flow going downhill without pulling sewer gas into the room. A plumbing drain is simpler than a water heater, and more subtle. A bad drain does not leak. It just stops working every time somebody flushes upstairs.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Plumbing_drain-waste-vent_system.svg?width=1200', caption: 'A DWV system: stack to the roof, traps at every fixture, slope on every run.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'A drain carries wastewater by gravity. A vent lets air into the system so the water can flow and keeps sewer gas out of the house. A trap, under every fixture, holds a cup of water that seals the drain from the room. Those three elements — slope, trap, vent — govern every DWV layout ever drawn.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'A PVC saw or hand saw. Sharpie marker for layout. PVC primer and cement. A level and a tape measure. A drill with a hole saw for stud/joist passes. A fish tape if you are retrofitting inside walls. The pipe: Schedule 40 PVC in 1½", 2", 3", and 4" diameters for a typical residential install.' },
        { type: 'h3', text: 'Safety' },
        { type: 'p', text: 'Sewer gas is flammable and toxic. Never open an active drain without ventilation and gloves. Capped stubs should be labeled. If you smell rotten egg, find the failed trap before doing anything else.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'Stack — the vertical drain that runs from the lowest fixture up through the roof. Branch drain — horizontal line serving one or more fixtures. Trap arm — the horizontal piece between a trap and the vent. P-trap — the curved fitting under every fixture. Vent — the pipe that admits air to the drain. Wet vent — a drain that also serves as the vent for a fixture above it. AAV — air admittance valve, a one-way check valve used where a traditional vent cannot run. Cleanout — a removable plug giving snake access. Grade — the slope of a drain, per foot.' },

        { type: 'h2', text: 'Slope is the engine' },
        { type: 'p', text: 'Horizontal drains slope at one-quarter inch per foot for lines 3" and smaller, one-eighth per foot for 4" and larger. Less than that and solids sit; more than that and water outruns the solids and leaves them behind. On a 10-foot run, that is 2½ inches of drop — set a level on the pipe and the bubble should read just off-center.' },
        { type: 'aside', label: 'Worked example', text: 'A 2" branch drain from a bathroom sink to the stack, 12 feet away. Required drop: 12 × 1/4 = 3 inches total. Starting at the trap arm outlet 18" below the sink, the branch will land at the stack 3 inches lower. Mark both ends, pull a string, hang the pipe with straps at every 4 feet to maintain slope.' },

        { type: 'h2', text: 'Traps — the room seal' },
        { type: 'p', text: 'Every fixture has a P-trap. Two inches of water sit in the curve, sealing the fixture from the drain and everything downstream. The trap\'s weir (the top of the outlet side) must be below the fixture\'s flood level (the overflow point of the sink or tub), or backflow is possible. A trap that dries out — because the fixture has not been used in weeks — loses its seal; sewer gas enters the room. Pour a cup of water into any unused floor drain once a month.' },
        { type: 'aside', label: 'Common mistake', text: 'Installing an S-trap instead of a P-trap. Most jurisdictions ban S-traps because they self-siphon: a rush of water can empty the trap and break the seal. Always use a P-trap with a proper vent downstream.' },

        { type: 'h2', text: 'Vents — the air supply' },
        { type: 'p', text: 'When water rushes down a stack, it pulls air behind it. Without a vent, that air is pulled from nearby traps, siphoning them dry. The vent admits atmospheric air into the drain system so the water can flow without creating a vacuum. Every trap needs a vent within a fixture-specific distance (typically 5–8 feet for 1½" arms). The vent either ties back into the main stack above the flood rim of the highest fixture, or rises independently through the roof.' },
        { type: 'h3', text: 'Trap arm distance' },
        { type: 'p', text: 'A 1½" trap arm can run 6 feet horizontally before it must reach a vent. 2" arm, 8 feet. 3" arm, 10 feet. 4" arm, 12 feet. These are code minimums — the UPC and IPC tables are on every plumber\'s phone.' },
        { type: 'h3', text: 'Wet venting' },
        { type: 'p', text: 'In a typical bathroom group, the lavatory\'s drain can serve as the vent for the toilet and tub below it — provided the geometry and size meet the code. This is called wet venting. It eliminates one roof penetration and a lot of pipe. Read Code Check Plumbing before you try it; the rules are specific.' },
        { type: 'aside', label: 'Worked example', text: 'Venting a second-floor lavatory: the drain runs 5 feet to the main stack. A 1½" vent rises from the top of the trap arm (just above the trap weir) and ties into the stack above the flood rim of the highest fixture on that stack (the tub). One vent, no roof penetration.' },

        { type: 'h2', text: 'Sizing the drain' },
        { type: 'p', text: 'Every fixture has a "drainage fixture unit" (DFU) value — a kitchen sink is 2, a bathroom group is 6, a toilet is 3, and so on. The main stack and the building drain are sized to carry the total DFU load. The Code Check flipchart has the table; a 3" stack handles most single-family houses, a 4" stack handles a commercial multi-bathroom layout.' },

        { type: 'h2', text: 'Troubleshooting' },
        { type: 'p', text: 'The sink drains slowly. Partial clog — snake it from the cleanout. A distant trap smells. Siphoning from a long-run or blocked vent. Trace the drain; look for a capped vent or a bird\'s nest in the stack cap. Gurgling when a toilet flushes. Inadequate vent — the drain is pulling air through other traps. Add a vent or an air admittance valve. A basement floor drain smells. Trap has dried out; pour in water.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'After you can size a standard bathroom group, the next topic is cast-iron drain assembly (for sound-damping in commercial), commercial grease traps, and graywater systems. The Uniform Plumbing Code and the International Plumbing Code diverge at chapter 9 (venting) — if you work near a jurisdiction boundary, know both.' },

        { type: 'aside', label: 'Practice this week', text: 'Draw the DWV for a typical bathroom group — toilet, sink, tub — on paper. Size every pipe. Show the vent path. Check against Code Check Plumbing. You will see why plumbing is called a "system" and not a "pipe."' },
        { type: 'aside', label: 'Self-check', text: 'Why does a drain need a vent? (So water can flow without pulling traps dry.) What is the typical slope of a residential 2" drain? (1/4" per foot.) What is the maximum trap arm for a 1½" drain? (6 feet.) If any stumps you, read Code Check Plumbing chapter 9.' },

        { type: 'callout', text: 'First project: install a P-trap and trap arm for a new bathroom lavatory, including a 1½" vent tying back into the stack. A single Saturday. Under $30. You will meet slope, trap, and vent together on one fixture.' },
      ],

      keyTerms: ['main stack', 'vent stack', 'fixture trap', 'wet vent', 'air admittance valve', 'cleanout', 'long-sweep elbow', 'stack vent', 'waste arm', 'grade', 'P-trap', 'S-trap', 'DFU', 'flood rim'],

      resources: {
        videos: [
          { id: 'cIL4n_rVsM0', source: 'youtube', url: 'https://www.youtube.com/watch?v=cIL4n_rVsM0', title: 'How to Drain and Vent a Kitchen', channel: 'This Old House', duration: '7:44', why: 'Richard Trethewey walks through a traditional and a bow-vent configuration.' },
          { id: '8hMo-HI56oY', source: 'youtube', url: 'https://www.youtube.com/watch?v=8hMo-HI56oY', title: 'How to Drain and Vent a Bathroom Sink', channel: 'Ask This Old House', duration: '6:21', why: 'The most common failure mode fixed in real time.' },
          { id: 'ZTJVn3vso8k', source: 'youtube', url: 'https://www.youtube.com/watch?v=ZTJVn3vso8k', title: 'How to Clear a Clogged Plumbing Vent', channel: 'This Old House', duration: '5:12', why: 'DWV troubleshooting from the plumber\'s side.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/channel/UCGIMKh92vaL0_Yc0u4GYhHA', title: 'Roger Wakefield — DWV walkthroughs', channel: 'Roger Wakefield', duration: 'variable', why: 'Master plumber on real drains and vents.', featured: false },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/mattrisinger', title: 'The Build Show — plumbing rough-in', channel: 'Matt Risinger', duration: 'variable', why: 'Whole-house rough-ins.', featured: false },
        ],
        books: [
          { title: 'Code Check Plumbing & Mechanical', author: 'Redwood Kardon', year: 2015, url: 'https://archive.org/details/codecheckcomplet0000kard', why: 'The DWV chapter is gospel in the trade.' },
          { title: 'Modern Plumbing', author: 'E. Keith Blankenbaker', year: 2019, url: '', why: 'Drain and vent sizing.' },
          { title: 'Plumbing Technology: Design and Installation', author: 'Lee Smith', year: 2015, url: '', why: 'The advanced textbook — drainage hydraulics, vent math.' },
        ],
        articles: [
          { title: 'Drain-waste-vent system', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Drain-waste-vent_system', why: 'Drainage, venting, traps — with good diagrams.', year: null },
          { title: 'Plumbing', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Plumbing', why: 'Wider context.', year: null },
          { title: 'Trap (plumbing)', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Trap_(plumbing)', why: 'Why every fixture has a U-bend.', year: null },
        ],
        courses: [
          { title: 'PHCC Plumbing Apprentice Program', provider: 'PHCC', url: 'https://www.phccweb.org/', free: false, why: 'The drain-and-vent modules of the American apprenticeship.' },
        ],
        tools: [
          { title: 'IAPMO — Uniform Plumbing Code', url: 'https://www.iapmo.org/', why: 'Chapter 9 is the drain-and-vent bible.' },
          { title: 'ICC — International Plumbing Code', url: 'https://www.iccsafe.org/', why: 'The code adopted in most of the east and center of the US.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Plumbing_drain-waste-vent_system.svg?width=1200', caption: 'DWV schematic.', credit: 'Wikimedia Commons', alt: 'DWV diagram' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/P-trap_under_sink.jpg?width=1200', caption: 'A P-trap under a bathroom sink.', credit: 'Wikimedia Commons', alt: 'P-trap' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Plumbing_vent_through_roof.jpg?width=1200', caption: 'Vent stack through a roof.', credit: 'Wikimedia Commons', alt: 'Vent stack on roof' },
        ],
        animations: [
          { youtubeId: 'cIL4n_rVsM0', caption: 'This Old House: how to drain and vent a kitchen.', why: 'The DWV stack in seven minutes.' },
        ],
      },

      seeAlso: ['pipe_types', 'fixtures', 'roofing', 'framing'],
      prereqs: ['pipe_types'],
      leadsTo: ['fixtures'],

      chapterActivity: 'A stack-diagnosis walk-through at an 1890s Brooklyn brownstone — read the original cast-iron DWV and see which vents were lost in the 1970s remodel.',

      sources: ['https://en.wikipedia.org/wiki/Drain-waste-vent_system', 'https://en.wikipedia.org/wiki/Plumbing', 'https://en.wikipedia.org/wiki/Trap_(plumbing)'],
      verifiedAt: '2026-04-23',
    },

    // ——— FIXTURES ———
    fixtures: {
      id: 'fixtures',
      name: 'Fixtures',
      level: 'Intermediate',
      dek: 'The visible plumbing — sinks, toilets, faucets — and the inches of installation that decide the feel of a room.',
      readTime: '17 min',

      sections: ['Whole idea', 'Before you start', 'Rough-in', 'Setting a toilet', 'Installing a faucet', 'Sinks & tubs', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'The plumbing in a finished house is mostly invisible. What the client sees and uses is the fixture — the faucet that turns, the sink that drains, the toilet that flushes, the shower head that drips or does not. A fixture is where the hidden labor of rough plumbing meets daily life, and where a careless installation shows itself within weeks. The difference between a fixture installed correctly and one installed quickly is often a quarter of an inch nobody is looking at.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Modern_toilet_bathroom.jpg?width=1200', caption: 'A modern toilet on a 12-inch rough-in.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'Every fixture is a final consumer of the plumbing system with one supply side, one drain side, and a trap. The installer\'s job is to marry those three to a specific fixture with the right mounting, the right gasket, and the right hardware — and to leave the result level, plumb, and leak-free.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'Channel-lock pliers, a basin wrench (the awkward tool for faucet nuts under a sink), a level, a wax ring or neoprene seal, Teflon tape, a tube of plumber\'s putty, a slip-joint pliers, shims, a pencil. A flashlight with a magnetic tail is the plumber\'s most-used gadget after channel-locks.' },
        { type: 'h3', text: 'Safety' },
        { type: 'p', text: 'Shut off water at the local angle stop before disconnecting anything. Have a bucket and rags. Never put your face under a stop valve you are opening — the gasket may give. Porcelain is heavy; a toilet tipping onto your foot is the most common non-slip injury in residential plumbing.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'Rough-in — the distance from the finished wall to the center of the fixture drain (12" for a standard toilet). Flange — the ring that seals the toilet to the drain. Wax ring — the seal between toilet and flange. Angle stop — the small shutoff under a sink or toilet. Supply riser — the flexible line between angle stop and fixture. Escutcheon — the decorative cover over a pipe penetration. Cartridge — the replaceable valve inside a modern faucet.' },

        { type: 'h2', text: 'Rough-in dimensions — the hidden geometry' },
        { type: 'p', text: 'The rough plumber sets stub-outs at exact distances from the finished wall and floor. 12 inches from the finished wall to the center of the toilet flange. 8 inches on-center for a kitchen faucet. 21 inches from the finished floor to the center of a bathroom sink supply. A rough-in off by half an inch forces the finisher to cut the drywall or tile — expensive on a finished wall.' },
        { type: 'aside', label: 'Worked example', text: 'Standard bathroom rough-ins: toilet flange 12" from back wall, 15" minimum from side wall, center 30" from any other fixture. Lavatory: supply stubs at 21" and 22" above finished floor (21 for cold, 22 for hot is a common convention), drain at 18" above floor, 4" off-center left or right depending on pedestal. Keep these on a laminated cheat sheet.' },

        { type: 'h2', text: 'Setting a toilet' },
        { type: 'p', text: 'A toilet bolts to a closet flange set into the floor. A wax ring crushes between the flange and the bowl, sealing porcelain to drain. The bowl is shimmed level from underneath; the tank is bolted to the bowl with a rubber gasket; the supply line flexes from the angle stop up into the tank.' },
        { type: 'h3', text: 'The install sequence' },
        { type: 'p', text: 'Confirm the flange is at finished-floor height or slightly above (not below — or the wax ring will not seal). Set the bowl on the flange dry-fit; mark around it with a pencil. Remove. Place the wax ring on the flange (or on the bowl, your choice). Set the bowl onto the wax ring, rocking slightly so the ring compresses. Shim to level in all four directions. Tighten the closet bolts in small steps, alternating sides. Tank: place the rubber gasket under the flush valve nut, bolt the tank to the bowl. Supply line: slip-joint to angle stop, thumb-tight, then quarter-turn with pliers.' },
        { type: 'aside', label: 'Common mistake', text: 'Overtightening the closet bolts. Porcelain is brittle; too much force cracks the bowl at the base, and the crack will leak six months later. Snug plus a quarter-turn, maximum.' },

        { type: 'h2', text: 'Installing a faucet' },
        { type: 'p', text: 'Modern single-handle faucets are mostly tool-free once you have the basin wrench. Drop the faucet through the sink deck from above, reach underneath, thread on the mounting nuts, snug with a basin wrench. Connect supply risers from the angle stops to the faucet inlets. Turn water on with the faucet open so air escapes; check for leaks at every joint.' },
        { type: 'h3', text: 'Choosing supply risers' },
        { type: 'p', text: 'Braided stainless-steel supply risers are the modern standard — flexible, durable, and rated for hot water. The cheap plastic risers that come in big-box store kits are fine for bathroom use but break down under kitchen conditions. Spend the extra three dollars on stainless.' },

        { type: 'h2', text: 'Sinks, tubs, showers' },
        { type: 'p', text: 'A drop-in sink sets on a bead of silicone in the countertop cutout; an undermount sink is clipped from below. A tub spout pushes onto a stub-out or threads on a 1/2" nipple. A shower valve is roughed into the wall before tile goes on — the valve must be plumb and its center must be at the manufacturer\'s specified depth from the finished tile face, or the trim will not seat.' },

        { type: 'h2', text: 'Troubleshooting' },
        { type: 'p', text: 'The toilet rocks. Not shimmed; rock will crack wax ring seal within days. The toilet weeps at the base. Wax ring failed — pull, reset with a new ring. The faucet drips. Cartridge worn or sediment in the seat. Disassemble and replace. The sink drain leaks. Slip-joint nuts not square, or the trap is not aligned. Loosen and reassemble.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'After basic fixture installation, the next skills are tile-set shower installations (pan liners, pre-slope, curb construction), tankless water heaters, and whole-house water filtration. Every fixture manufacturer publishes install manuals free on their site — read them before the first job on a new brand.' },

        { type: 'aside', label: 'Practice this week', text: 'Replace a bathroom faucet. Shut off angle stops, disconnect supplies, unscrew the mounting nuts from below with a basin wrench, lift the old faucet, drop in the new one, reverse. One hour, under $100 in a quality faucet. You will meet every faucet install you ever do again.' },
        { type: 'aside', label: 'Self-check', text: 'Why shim a toilet level? (An unshimmed toilet rocks; rocking breaks the wax-ring seal.) Why use braided supply risers in the kitchen? (Hot water breaks down the cheap plastic.) What is the standard toilet rough-in? (12 inches.) If any stumps you, watch Roger Wakefield "How to install a toilet."' },

        { type: 'callout', text: 'First project: replace an angle stop and supply riser under a sink. Thirty minutes, $10 in parts. You will never again be afraid of the turn-off valve under a fixture.' },
      ],

      keyTerms: ['fixture unit', 'rough-in', 'closet flange', 'wax ring', 'angle stop', 'trap arm', 'P-trap', 'escutcheon', 'supply riser', 'flush valve', 'aerator', 'cartridge', 'basin wrench'],

      resources: {
        videos: [
          { id: null, source: 'youtube', url: 'https://www.youtube.com/channel/UCGIMKh92vaL0_Yc0u4GYhHA', title: 'Roger Wakefield — fixture installation', channel: 'Roger Wakefield', duration: 'variable', why: 'Master plumber setting toilets, sinks, faucets.' },
          { id: null, source: 'other', url: 'https://www.thisoldhouse.com/', title: 'This Old House — fixture segments', channel: 'This Old House', duration: 'variable', why: 'Richard Trethewey on every common install.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/mattrisinger', title: 'The Build Show — bathroom rough-in', channel: 'Matt Risinger', duration: 'variable', why: 'Rough-in through finish on a full bathroom.' },
        ],
        books: [
          { title: 'Code Check Plumbing & Mechanical', author: 'Redwood Kardon', year: 2015, url: 'https://archive.org/details/codecheckcomplet0000kard', why: 'Fixture unit loads, rough-in heights, ADA.' },
          { title: 'Black & Decker Complete Guide to Plumbing', author: 'Cool Springs Press', year: 2021, url: '', why: 'Step-by-step for the serious DIYer.' },
          { title: 'Modern Plumbing', author: 'E. Keith Blankenbaker', year: 2019, url: '', why: 'Apprentice-level fixture rough-in.' },
        ],
        articles: [
          { title: 'Plumbing fixture', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Plumbing_fixture', why: 'Fixture taxonomy and conventions.', year: null },
          { title: 'Plumbing', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Plumbing', why: 'Historical and regulatory context.', year: null },
          { title: 'ADA Standards for Accessible Design', source: 'U.S. DOJ', url: 'https://www.ada.gov/law-and-regs/design-standards/', why: 'Accessible fixture heights and clearances.', year: null },
        ],
        courses: [
          { title: 'PHCC Plumbing Apprentice Program', provider: 'PHCC', url: 'https://www.phccweb.org/', free: false, why: 'Fixture modules of the American apprenticeship.' },
        ],
        tools: [
          { title: 'Fine Homebuilding — plumbing archive', url: 'https://www.finehomebuilding.com/', why: 'Rough-in and fixture articles by fixture type.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Modern_toilet_bathroom.jpg?width=1200', caption: 'A modern dual-flush toilet.', credit: 'Wikimedia Commons', alt: 'Modern toilet' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kitchen_faucet.jpg?width=1200', caption: 'Single-handle kitchen faucet.', credit: 'Wikimedia Commons', alt: 'Kitchen faucet' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Toilet_flange.jpg?width=1200', caption: 'A closet flange in the floor.', credit: 'Wikimedia Commons', alt: 'Toilet flange' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bathroom_sink_pedestal.jpg?width=1200', caption: 'A pedestal lavatory.', credit: 'Wikimedia Commons', alt: 'Pedestal sink' },
        ],
      },

      seeAlso: ['pipe_types', 'dwv', 'tools_wood', 'trim'],
      prereqs: ['pipe_types'],
      leadsTo: [],

      chapterActivity: 'A Saturday toilet-install workshop at a Red Hook community space — set one, shim it level, learn the hour of labor a plumber actually charges for.',

      sources: ['https://en.wikipedia.org/wiki/Plumbing_fixture', 'https://en.wikipedia.org/wiki/Plumbing'],
      verifiedAt: '2026-04-23',
    },

  },
};
