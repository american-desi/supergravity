// content/automotive.js
// Batch: B08-trades-II
// Last updated: 2026-04-23 by Session B08 (scaffolding pass)
//
// Topics: engine_basics, brakes, diag
//
// Each topic now carries a full scaffolding block — mental model, worked
// example, leveled exercises, troubleshooting tree, progression ladder,
// glossary — plus body prose extended with the matching h2 sections.
// See content/_issues.md for field shape and renderer-integration notes.

window.CONTENT = window.CONTENT || {};
window.CONTENT.automotive = {
  subjectId: 'automotive',
  version: 3,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B08-trades-II',
  topics: {

    engine_basics: {
      id: 'engine_basics',
      name: 'Engine Basics',
      level: 'Beginner',
      dek: 'Four strokes, a thousand small explosions a minute, and a century of engineering tucked under one hood.',
      readTime: '18 min',

      sections: ['The four-stroke idea', 'What the parts actually do', 'The breath and the fire', 'Why it rarely fails', 'Where the hands go', 'How to think about it', 'Work through one', 'Try these', 'When it goes wrong', 'What to try next'],
      body: [
        { type: 'lead', text: 'In 1876, a traveling salesman named Nikolaus Otto, working outside Cologne, built an engine that drew a fuel-air mixture into a cylinder, squeezed it, lit it, and pushed it out — in four strokes of a piston. Otto had no formal engineering training. His engine was quieter than the gas engines of the day, used half the fuel, and ran so smoothly that the first customers in Paris thought the salesmen were lying about the output. A century and a half later, every gasoline car you have ever ridden in is a small factory for repeating Otto\'s idea several dozen times a second.' },
        { type: 'h2', text: 'Suck, squeeze, bang, blow' },
        { type: 'p', text: 'The four strokes of a gasoline engine are intake, compression, power, and exhaust — a little poem every mechanic learns. On the intake stroke, the piston drops and pulls air and atomized fuel into the cylinder through an open valve. On the compression stroke, the piston rises and squeezes the mixture into a fraction of its original volume, making it volatile. A spark plug fires; the mixture ignites; the expanding gas drives the piston down on the power stroke. On the exhaust stroke, the piston rises again and pushes the spent gases out a second valve. Four strokes, one fire, one crankshaft revolution worth of useful work.' },
        { type: 'p', text: 'A modern four-cylinder running at 3,000 RPM fires a hundred times per second. A V8 at the same RPM fires two hundred. The engine feels continuous to the foot on the accelerator because the crankshaft\'s flywheel carries enough inertia to smooth the pulses into a single motion.' },
        { type: 'h2', text: 'What the parts actually do' },
        { type: 'p', text: 'The cylinder is a precisely honed tube; the piston is a slug of aluminum that slides inside it on thin iron rings that seal against the wall. The crankshaft at the bottom converts the piston\'s straight-line motion into rotation, the way a leg turns a bicycle pedal. The camshaft at the top opens and closes the valves in time with the crankshaft, driven by a belt or chain that ties the two together. The timing is everything: open the wrong valve at the wrong moment and you bend a valve against a piston, an expensive kind of wrong.' },
        { type: 'h2', text: 'The breath and the fire' },
        { type: 'p', text: 'Modern gasoline engines breathe through a computer-managed throttle, atomize fuel through high-pressure injectors mounted directly in each cylinder, and trigger ignition from a coil pack that sits on top of every spark plug. A knock sensor in the block listens for detonation and pulls timing the instant it hears anything out of place. A camshaft-position sensor tells the engine computer exactly where each valve is at every microsecond. Otto would not recognize the control system. The combustion event — the fire itself — is the same.' },
        { type: 'h2', text: 'Why a modern engine rarely fails' },
        { type: 'p', text: 'A car engine in 1970 was a thing you babied. Oil changes every three thousand miles, points and plugs every fifteen thousand, a rebuild at eighty. A car engine in 2026 runs for a quarter of a million miles on scheduled maintenance that amounts to oil, coolant, and filters. The difference is mostly manufacturing tolerance, better metallurgy, and an engine computer that trims the fuel-air mixture a thousand times a second. What kills modern engines is neglect, overheating, and cheap oil, in roughly that order.' },
        { type: 'h2', text: 'Where the hands go' },
        { type: 'p', text: 'The beginner\'s work is mostly at the accessible edges: checking oil on a dipstick, reading the little black-on-yellow service sticker, changing a serpentine belt, replacing spark plugs on a four-cylinder where you can see them. Everything harder lives under the intake manifold or behind the timing cover, and needs the right torque wrench, the right sockets, and the patience not to cross-thread anything into aluminum. The hardest lesson is not technical. It is that most serious engine failures begin as something small and ignored — a seep around a gasket, a slightly low coolant level, a faint ticking — that the owner drove past for six more months.' },
        { type: 'callout', text: 'The one number worth knowing: a healthy gasoline engine makes between 130 and 175 pounds of compression per cylinder when cranked with a compression gauge, and every cylinder should be within about ten percent of its neighbors. A bad hole shows up there first.' },

        { type: 'h2', text: 'How to think about it' },
        { type: 'p', text: 'An engine is a timed air pump whose only reason for existing is to burn fuel at the right moment. If you cannot remember anything else, remember those six words. The pump moves air through four predictable strokes; the fire happens at the top of compression; everything the mechanic does — valves, injectors, spark plugs, sensors — exists so that the fire happens exactly when the pump is ready for it. When an engine runs badly, one of three things is wrong: the pump is not sealing (compression), the fire is wrong (ignition), or the fuel and air are out of proportion (mixture). Every diagnostic flowchart eventually collapses into those three questions.' },
        { type: 'h2', text: 'Work through one' },
        { type: 'p', text: 'A 2008 Honda Civic with 140,000 miles is down on power and gets poor fuel economy. The owner changed spark plugs and the air filter a month ago; no check-engine light is on. The mechanic connects a compression gauge and cranks the engine. Cylinder one reads 165 psi, cylinders two and four read 160, and cylinder three reads 95. The two candidates are a bent valve or worn rings on cylinder three. A wet compression test — a spoonful of oil squirted into the cylinder before retesting — raises the reading to 140 psi. Oil seals rings but not valves. Diagnosis: worn rings on cylinder three. The engine is tired; the owner has a decision to make.' },
        { type: 'h2', text: 'Try these' },
        { type: 'p', text: 'First: open the hood on your own car and find, in this order, the oil dipstick, the coolant reservoir, the brake-fluid reservoir, the engine air filter, and the positive terminal of the battery. If it takes more than four minutes, try again next week. Second: buy a compression tester for thirty dollars, remove one spark plug with the engine warm, and take a reading. The goal is the ritual, not the number. Third: locate the serpentine belt and trace its path around the pulleys with a finger. Understanding what that belt drives — alternator, water pump, power steering, air conditioning — maps most of what is bolted to the front of the engine.' },
        { type: 'h2', text: 'When it goes wrong' },
        { type: 'p', text: 'An engine that will not start is almost always one of three faults: no spark, no fuel, or no compression. Test in that order — spark is cheapest, fuel is next, compression requires the most tools. An engine that starts but runs rough at idle and smooths out above 1,500 RPM is usually a vacuum leak, a dirty throttle body, or a bad EGR valve. An engine that runs hot wants, in order: coolant, a working thermostat, a clear radiator, and a functioning fan. An engine that burns oil between changes is either worn rings, bad valve seals, or a clogged PCV valve; the smoke color tells you which — blue on startup is valve seals, blue under load is rings.' },
        { type: 'h2', text: 'What to try next' },
        { type: 'p', text: 'If this chapter felt easy, the next rung is learning to change a timing belt on a four-cylinder with the head still on — a two-hour job the first time, fifteen minutes once it becomes familiar, and the point at which most hobbyists stop being hobbyists. Beyond that sits the diagnostic craft in the next topic, the parallel world of diesel engines, and the small-engine work that teaches you everything the car hides. A life in engines begins with the patience to do the easy things right a hundred times before attempting the hard ones once.' },

        { type: 'quote', text: 'Keep your car well, and it will carry you.', cite: 'John Muir, How to Keep Your Volkswagen Alive' },
      ],

      keyTerms: ['four-stroke cycle', 'cylinder', 'piston', 'crankshaft', 'camshaft', 'compression ratio', 'spark plug', 'valve timing', 'intake manifold', 'Otto cycle'],

      scaffolding: {
        mentalModel: {
          analogy: 'An engine is a timed air pump that happens to also burn fuel. The pump moves air through four strokes; the fire happens at the top of compression; everything else is plumbing, timing, or control.',
          whereItBreaks: 'The analogy breaks down with rotary engines (Wankel), turbines, and electric motors, which are not reciprocating at all. It also masks how subtle valve timing really is — overlap, duration, lift, and lobe separation each shape the engine\'s character.',
        },
        workedExample: {
          prompt: 'A 2008 Honda Civic is down on power. The owner changed plugs and an air filter last month. No check-engine light. What next?',
          scenario: 'Compression gauge readings are taken with the engine warm, all plugs out, throttle held open, cranking each cylinder four compression strokes.',
          steps: [
            { step: 'Cylinder 1: 165 psi. Cylinder 2: 160. Cylinder 3: 95. Cylinder 4: 160.', why: 'Cylinder 3 is more than 10% below its neighbors — a failed hole.' },
            { step: 'Squirt a tablespoon of engine oil into cylinder 3 and retest.', why: 'This is a "wet" compression test. Oil seals worn rings but not bad valves.' },
            { step: 'Cylinder 3 wet reading: 140 psi.', why: 'The oil raised compression significantly — worn rings, not a leaking valve.' },
            { step: 'Confirm with a leak-down test or listen at the oil fill cap for blow-by.', why: 'A leak-down tester isolates where pressurized air escapes. Rings leak into the crankcase.' },
          ],
          result: 'Diagnosis: worn rings on cylinder 3. Rebuild or replace the engine; plugs and filters were fine — the engine itself was tired.',
        },
        exercises: [
          {
            level: 'beginner',
            prompt: 'Open the hood and, without looking at a diagram, name in order: oil dipstick, coolant reservoir, brake fluid, engine air filter, and battery positive terminal.',
            hint: 'The dipstick is usually yellow or orange. The coolant reservoir is translucent with min/max lines. Brake fluid is under a cap labeled "DOT 3" or "DOT 4". The air filter sits in a large rectangular black box. Battery terminals are red (+) and black (-).',
            solution: 'If you find all five within four minutes, you can read an engine bay. If not, try again next week — this is a motor skill.',
          },
          {
            level: 'beginner',
            prompt: 'Check your engine oil correctly. What does a reading between the two dipstick marks tell you? What does a reading above the top mark tell you?',
            hint: 'Park on level ground; engine off at least five minutes. Pull, wipe, reinsert, pull again.',
            solution: 'Between the marks: normal. Above the top: overfilled (this can damage seals and foam the oil — drain some). Below the bottom: low, add oil in 1/2-quart increments and recheck after a few minutes.',
          },
          {
            level: 'intermediate',
            prompt: 'Given a cylinder that reads 75 psi against three neighbors at 155, is the problem a valve or a ring? How would you test, and what would you expect to see?',
            hint: 'The wet compression test.',
            solution: 'Add a tablespoon of oil into the weak cylinder. Valves will not reseal from oil; rings will. If the reading jumps significantly (+30 psi or more), it is rings. If it stays flat, it is valves. You can also do a leak-down test and listen at the exhaust (exhaust valve), intake (intake valve), or oil fill cap (rings).',
          },
          {
            level: 'intermediate',
            prompt: 'Spark plugs are pulled at 60,000 miles. Cylinders 1, 2, and 4 are light tan; cylinder 3 is wet and black. What does this suggest?',
            hint: 'Read the plug like a story.',
            solution: 'A wet, black plug on a single cylinder indicates either a fouling injector (running rich on that hole only), a bad coil, or a leaking intake valve seal letting oil into the chamber. Swap the coil to another cylinder and retest — if the symptom moves, it\'s the coil. If it stays, it\'s the injector or the seal.',
          },
          {
            level: 'advanced',
            prompt: 'An engine loses all compression on every cylinder after a timing-belt snap. Why, and what is the repair?',
            hint: 'Interference vs. non-interference design.',
            solution: 'On an interference engine — most modern four-cylinders — a snapped timing belt stops the camshaft while the crankshaft keeps turning. At least one valve will be open when a piston comes up, and the piston will strike the valve. Result: bent valves on multiple cylinders. Repair requires removing the head, replacing every bent valve, resurfacing the head, and a new timing belt, water pump, and tensioners on reassembly. A several-thousand-dollar job.',
          },
        ],
        troubleshooting: [
          {
            symptom: 'Crank, no start',
            likelyCauses: ['No spark', 'No fuel', 'Low compression'],
            quickTest: 'Pull a spark plug; ground it on the engine block; crank — look for a blue spark. Then listen for the fuel pump pressurizing for two seconds when the key is turned to "on".',
            fix: 'No spark: check coils, crank sensor, and ignition fuse. No fuel: check fuel pump relay, pump fuse, and pressure at the rail. No compression across all cylinders: suspect timing belt/chain.',
          },
          {
            symptom: 'Rough idle, smooths above 1,500 RPM',
            likelyCauses: ['Vacuum leak', 'Dirty throttle body', 'Failing EGR valve', 'Partially clogged idle-air passage'],
            quickTest: 'Spray carb cleaner around intake gaskets and vacuum lines with the engine running. RPM change = vacuum leak.',
            fix: 'Replace the leaking gasket or line; clean the throttle body with a shop rag and cleaner; inspect or replace the EGR valve.',
          },
          {
            symptom: 'Runs hot under load, cool at idle',
            likelyCauses: ['Stuck-open thermostat (cool) or partially clogged radiator (hot under load)', 'Weak water pump', 'Air in the cooling system'],
            quickTest: 'Feel the upper radiator hose — it should warm noticeably a minute after startup if the thermostat is working.',
            fix: 'Replace the thermostat; flush the cooling system; bleed air per manufacturer procedure (many cars have a bleed screw).',
          },
          {
            symptom: 'Blue smoke on startup, clears after a minute',
            likelyCauses: ['Failing valve stem seals'],
            quickTest: 'Look at the tailpipe on first start after an overnight. Blue = oil burning; white = coolant; black = fuel.',
            fix: 'Valve-stem seals can be replaced without removing the head using compressed air to hold each valve closed — an advanced DIY job or a cheap shop job.',
          },
          {
            symptom: 'Blue smoke under acceleration',
            likelyCauses: ['Worn piston rings'],
            quickTest: 'Wet compression test.',
            fix: 'Ring replacement requires pulling the engine or at least the oil pan and head. This is a rebuild.',
          },
          {
            symptom: 'Oil consumption, no visible smoke',
            likelyCauses: ['Clogged PCV valve pressurizing the crankcase', 'Very slow external leak'],
            quickTest: 'Pull the PCV valve and shake it — it should rattle. Park on clean cardboard overnight and look for drips.',
            fix: 'Replace the PCV valve (ten dollars). Trace leaks to the valve cover, rear main seal, or oil pan gasket.',
          },
          {
            symptom: 'Ticking that changes with engine speed',
            likelyCauses: ['Collapsed lifter', 'Worn timing chain', 'Exhaust leak at the manifold'],
            quickTest: 'Use a long screwdriver as a stethoscope on the valve cover, then on the exhaust manifold. The sound will be loudest at the source.',
            fix: 'Lifter: flush with a can of engine cleaner; if that fails, replace lifters. Timing chain: replace the chain, tensioner, and guides. Exhaust leak: replace the manifold gasket.',
          },
        ],
        progression: [
          { level: 'novice', canDo: 'Check oil and coolant. Change the air filter. Read a check-engine code with a phone app. Identify the parts at the front of the engine.', shouldNext: 'Learn to change oil and rotate tires; these are the two most common shop services and the first dollars a DIY owner saves.' },
          { level: 'apprentice', canDo: 'Change spark plugs, serpentine belts, and brake pads. Diagnose common fault codes. Pull and replace a battery. Run a compression test.', shouldNext: 'Learn to change a timing belt on a four-cylinder with the head still on — a rite of passage that tests torque, sequence, and patience.' },
          { level: 'journeyman', canDo: 'Rebuild a cylinder head. Diagnose electrical faults with a scope. Replace a water pump or a clutch. Read a wiring diagram without translation.', shouldNext: 'Specialize — diesels, hybrids, or restoration — or start teaching. The craft rewards depth more than breadth past this point.' },
        ],
        glossary: [
          { term: 'Otto cycle', def: 'The four-stroke thermodynamic cycle — intake, compression, power, exhaust — named for Nikolaus Otto\'s 1876 engine.' },
          { term: 'Compression ratio', def: 'The ratio of cylinder volume at bottom dead center to cylinder volume at top dead center. Gasoline engines run around 10:1; diesels 18:1 and up.' },
          { term: 'Valve timing', def: 'The precise points in the crankshaft\'s rotation when each valve opens and closes, controlled by the camshaft.' },
          { term: 'Interference engine', def: 'An engine whose pistons and open valves occupy overlapping space; a broken timing belt bends valves. Most modern four-cylinders are interference.' },
          { term: 'Knock', def: 'Uncontrolled detonation of the fuel-air mixture, audible as a rattling noise, destructive if allowed to continue. A knock sensor tells the ECU to retard timing at the first sign.' },
          { term: 'Blow-by', def: 'Combustion gases that escape past the piston rings into the crankcase. A small amount is normal; excess indicates ring wear.' },
          { term: 'TDC (top dead center)', def: 'The highest point a piston reaches in its cylinder. The reference point for all engine timing.' },
        ],
      },

      resources: {
        videos: [
          { id: null, source: 'other', url: 'https://animagraffs.com/how-a-car-engine-works/', title: 'How a Car Engine Works (interactive animation)', channel: 'Animagraffs', duration: 'interactive', kind: 'animation', why: 'Jacob O\'Neal\'s interactive 3D animated infographic is the best single visualisation of a running engine on the internet. Scroll and the pistons fire.' },
          { id: null, source: 'other', url: 'https://animatedengines.com/otto.html', title: 'Four-Stroke (Otto Cycle) animation', channel: 'Animated Engines', duration: 'interactive', kind: 'animation', why: 'Matt Keveney\'s hand-built engine animations have been running in classrooms since 1999. The clearest static-plus-motion diagram of Otto\'s cycle anywhere.' },
          { id: 'nx9Fos8ZQbc', source: 'youtube', url: 'https://www.youtube.com/watch?v=nx9Fos8ZQbc', title: 'How Four Stroke Engines Work', channel: 'saVRee', duration: '22:00', kind: 'long-form', why: 'Long-form animated walkthrough with cutaway models. Slower than most YouTube intros, which is what the subject needs.', collapsed: true },
          { id: 'eKUEZY3R3cI', source: 'youtube', url: 'https://www.youtube.com/watch?v=eKUEZY3R3cI', title: 'The Only Video You\'ll Need to Watch to Know how 4 Stroke and 2 Stroke Engines Work', channel: 'd4a', duration: '14:16', kind: 'tutorial', why: 'Clearest side-by-side of the two engine cycles on YouTube. Ends your confusion about why chainsaws sound different from cars.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@EngineeringExplained', title: 'Engineering Explained — engine basics playlists', channel: 'Engineering Explained', duration: 'variable', kind: 'lecture', why: 'Jason Fenske, mechanical-engineering degree in hand, whiteboards through why compression matters, why V8s sound like that, and what variable valve timing actually changes.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@ChrisFix', title: 'ChrisFix — beginner auto repair', channel: 'ChrisFix', duration: 'variable', kind: 'tutorial', why: 'The most-watched DIY mechanic on the internet. Patient, shot at eye level, aimed at a first-time wrench.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@Lesics', title: 'Lesics — mechanical engineering animations', channel: 'Lesics', duration: 'variable', kind: 'animation', why: 'Sabin Mathew\'s team produces 3D engineering animations with minimal jargon. Their engine playlists walk through every subsystem.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@TheEngineeringMindset', title: 'The Engineering Mindset — engine subsystems', channel: 'The Engineering Mindset', duration: 'variable', kind: 'animation', why: 'Paul Evans\'s animation channel — cooling, lubrication, valvetrain, turbocharging, each explained with elegant cutaway diagrams.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@RealEngineering', title: 'Real Engineering — engineering essays on vehicles', channel: 'Real Engineering', duration: 'variable', kind: 'documentary', why: 'Brian McManus\'s documentary-grade long-form essays on engines, drivetrains, and the history of propulsion. Beautifully made.', collapsed: true },
        ],
        books: [
          { title: 'How to Keep Your Volkswagen Alive: A Manual of Step-by-Step Procedures for the Compleat Idiot', author: 'John Muir', year: 1969, url: 'https://archive.org/details/howtokeepyourvol00muir', why: 'Self-published two million times. The original humane repair manual — philosophical, illustrated by Peter Aschwanden, still the friendliest entry to an engine in print.' },
          { title: 'Auto Repair For Dummies', author: 'Deanna Sclar', year: 2019, url: 'https://www.barnesandnoble.com/w/auto-repair-for-dummies-deanna-sclar/1100321754', why: 'The honest modern replacement for Muir — updated for fuel injection, OBD-II, hybrids. Sclar writes for the owner who wants to understand, not just follow.' },
          { title: 'How Cars Work', author: 'Tom Newton', year: 1999, url: 'https://books.google.com/books/about/How_Cars_Work.html?id=ZhEEAAAACAAJ', why: 'A pocket-sized illustrated primer on the 250 parts that matter. Written for teenagers and still the fastest way to get an adult up to speed.' },
          { title: 'The Internal-Combustion Engine in Theory and Practice, Vols. I & II', author: 'Charles Fayette Taylor', year: 1985, url: 'https://mitpress.mit.edu/books/internal-combustion-engine-theory-and-practice-second-edition-volume-1', why: 'The MIT Press reference — Taylor taught automotive engineering at MIT for decades. The serious engineering companion to the hobbyist books.' },
          { title: 'Smokey Yunick\'s Power Secrets', author: 'Henry "Smokey" Yunick', year: 1984, url: 'https://www.amazon.com/Smokey-Yunicks-Power-Secrets-Yunick/dp/0931472067', why: 'The two-time NASCAR Mechanic of the Year on engine preparation. Foul-mouthed, funny, and the closest the sport has ever come to a classic.' },
          { title: 'The Visual Handbook of Automobile Mechanics', author: 'Don Knowles', year: 1999, url: 'https://archive.org/details/visualhandbookof0000knol', why: 'A thousand exploded diagrams — the fastest way to learn what every part is called before you have to ask a counter clerk for one.' },
        ],
        articles: [
          { title: 'Internal combustion engine', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Internal_combustion_engine', why: 'Featured-length overview with a careful history section, good diagrams, and the math of the Otto cycle for anyone who wants it.', year: null },
          { title: 'Internal-combustion engine', source: 'Britannica', url: 'https://www.britannica.com/technology/internal-combustion-engine', why: 'Tighter editorial take, written by a practicing engineer. Good companion to the Wikipedia article — read both.', year: null },
          { title: 'Four-stroke engine', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Four-stroke_engine', why: 'Deeper detail on the Otto cycle itself, with thermal-efficiency math and historical attribution to Alphonse Beau de Rochas and Otto.', year: null },
          { title: 'Nikolaus Otto', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Nikolaus_Otto', why: 'The inventor\'s life — a self-taught grocer who kept the patent until it was nullified by a prior-art challenge from Alphonse Beau de Rochas.', year: null },
        ],
        courses: [
          { title: 'Chilton Auto Repair Manuals (online library)', provider: 'Haynes / Chilton', url: 'https://us.haynes.com/blogs/tips-tutorials/chilton-repair-manuals-the-enduring-standard-in-automotive-know-how', free: false, why: 'Most public libraries in the US give cardholders free online access to the full Chilton manual database. The standard workshop reference since the late 1920s.' },
          { title: 'ASE Automobile & Light Truck Certification (A-series)', provider: 'National Institute for Automotive Service Excellence', url: 'https://www.ase.com/tests/ase-certification-tests/automobile-light-truck-tests', free: false, why: 'Study guides are free; exams are paid. The structure of a real automotive curriculum in the United States.' },
        ],
        tools: [
          { title: 'OBD-II scanner (basic Bluetooth dongle)', url: 'https://en.wikipedia.org/wiki/On-board_diagnostics', why: 'A twenty-dollar dongle plus a free phone app reads every check-engine code your car will ever throw. The single best first tool.' },
          { title: 'Digital torque wrench (1/2" drive)', url: 'https://en.wikipedia.org/wiki/Torque_wrench', why: 'Every fastener on a modern engine has a torque spec. Cross-threaded aluminum threads are why shops keep a lifetime of Heli-coils on hand.' },
          { title: 'Compression gauge', url: 'https://en.wikipedia.org/wiki/Compression_ratio', why: 'The first real diagnostic tool. A cylinder\'s compression is the quickest look inside the engine without opening it.' },
        ],
        primarySources: [
          { title: 'Otto\'s 1876 four-stroke patent (German Patent 532)', url: 'https://en.wikipedia.org/wiki/Nikolaus_Otto#Four-stroke_engine', why: 'The document that gave Otto the name of the cycle. Later overturned when Alphonse Beau de Rochas\'s earlier theoretical paper surfaced — the first great patent dispute in automotive history.' },
        ],
      },

      seeAlso: ['brakes', 'diag', 'diesel_basics', 'carb', 'tuneup'],
      prereqs: [],
      leadsTo: ['brakes', 'diag', 'diesel_basics'],
      chapterActivity: 'Saturday engine-teardown days at a LIC community shop, working through a scrap four-cylinder one valve at a time.',
      sources: [
        'https://en.wikipedia.org/wiki/Internal_combustion_engine',
        'https://www.britannica.com/technology/internal-combustion-engine',
        'https://en.wikipedia.org/wiki/Four-stroke_engine',
        'https://en.wikipedia.org/wiki/Nikolaus_Otto',
        'https://animagraffs.com/how-a-car-engine-works/',
        'https://animatedengines.com/otto.html',
      ],
      verifiedAt: '2026-04-23',
    },

    brakes: {
      id: 'brakes',
      name: 'Brakes',
      level: 'Intermediate',
      dek: 'The only system on a car whose failure is never inconvenient and always an emergency.',
      readTime: '18 min',

      sections: ['The hydraulic chain', 'Disc versus drum', 'ABS and the year driving changed', 'What actually wears', 'The beginner\'s brake job', 'How to think about it', 'Work through one', 'Try these', 'When it goes wrong', 'What to try next'],
      body: [
        { type: 'lead', text: 'In 1953, a Jaguar C-Type won the 24 Hours of Le Mans partly because it could stop. The car was not the fastest on the track. It had disc brakes, borrowed from aircraft, while its rivals still used drum brakes that faded to uselessness under a day of hard racing. Within a decade, every serious road car in the world had moved to discs. Good brakes, it turned out, were a bigger advantage than horsepower.' },
        { type: 'h2', text: 'The hydraulic chain' },
        { type: 'p', text: 'Press the pedal and you push a piston in a master cylinder; the master cylinder pushes incompressible fluid through steel lines to four wheels; the fluid pushes smaller pistons in calipers; the calipers squeeze pads against a spinning disc. Hydraulics give you the mechanical advantage — a small force at the pedal becomes a large force at the wheel — and the near-instant response that makes a two-ton sedan feel balanced under your right foot. Pascal described the principle in 1653; Gottlieb Daimler put it in a car in 1921; the Wagner Electric Corporation engineer Malcolm Loughead patented the production four-wheel hydraulic brake in 1919.' },
        { type: 'h2', text: 'Disc versus drum' },
        { type: 'p', text: 'A disc brake grips a spinning metal rotor between two pads, like a clothespin. It sheds heat quickly and recovers from water almost immediately. A drum brake presses shoes outward against the inside of a spinning drum. Drums are cheaper, self-energize (the rotation helps the shoe bite harder), and work well as parking brakes. Most modern cars run discs on the front, where seventy percent of braking happens, and drums or discs on the rear. Fade — the loss of braking power when the whole system gets too hot — is mostly a drum-brake problem, and mostly solved.' },
        { type: 'h2', text: 'ABS and the year driving changed' },
        { type: 'p', text: 'Bosch shipped the first electronic anti-lock braking system on the Mercedes S-Class in 1978. A wheel-speed sensor at each corner reports rotation to a dedicated computer; when the computer sees a wheel decelerating faster than the others — about to skid — it pulses the brake for that wheel up to twenty-five times a second through a solenoid valve in the fluid line. The driver feels a buzz in the pedal; the tire never loses grip. ABS changed the physics of driving. A panic stop with ABS is shorter than any unaided human can match and preserves steering control through the event. Within twenty years, most passenger cars in the developed world had it standard, and within thirty, US regulations required it.' },
        { type: 'h2', text: 'What actually wears' },
        { type: 'p', text: 'Brake pads are a sacrificial material — a blend of fibers, metals, and binders — engineered to convert your kinetic energy into heat by grinding themselves down. They wear in millimeters per year. Rotors wear too, more slowly, and are machined or replaced when their thickness drops below the stamped minimum. Brake fluid absorbs water from the air over time, lowering its boiling point; a flush every two or three years is the single cheapest piece of real safety maintenance a car owner can do. None of this is glamorous. All of it is serious.' },
        { type: 'h2', text: 'The beginner\'s brake job' },
        { type: 'p', text: 'Changing pads on a typical front disc setup is a Saturday: jack the car, remove the wheel, pull the caliper bolts, slide out the old pads, compress the caliper piston with a C-clamp, slide in the new pads, reinstall. The common mistakes are reusing worn hardware, failing to torque the caliper bolts, and forgetting to press the pedal a few times before driving off to seat the new pads. Do one side and keep the other intact as a reference: when you are lost, look at the side you have not taken apart yet.' },
        { type: 'callout', text: 'Copper in brake pads was banned in most US states starting in 2014 after runoff from highway drains was linked to salmon die-offs. The industry responded with ceramic and sintered-steel friction compounds that also happen to last longer and dust less on wheels.' },

        { type: 'h2', text: 'How to think about it' },
        { type: 'p', text: 'Brakes are a hydraulic lever that converts kinetic energy into heat. The pedal is the handle; the pads are the cutting edge; the rotors are the grindstone. Everything that can go wrong in a brake system falls into one of three categories: the fluid cannot transmit pressure (a leak, a spongy pedal, air in the line), the pads cannot grip (glazed, worn, or contaminated), or the rotor cannot dissipate heat (warped, scored, or undersized). Hold those three questions in mind and most brake problems answer themselves within two minutes of looking.' },
        { type: 'h2', text: 'Work through one' },
        { type: 'p', text: 'A 2012 Subaru Outback pulls hard to the right when braking from highway speed. Pads were replaced two years ago. The mechanic jacks the car, spins each front wheel by hand, and finds the right side noticeably harder to turn — a sticking caliper, almost certainly. A closer look shows the right outer pad is worn to metal while the right inner is at half thickness; the caliper piston is sticking in its bore, pressing the inner pad harder than the outer but never fully releasing. The fix is a caliper rebuild or replacement plus a fresh set of pads, a new rotor (the old one is scored), and a brake-fluid flush because moisture-laden fluid accelerates piston corrosion.' },
        { type: 'h2', text: 'Try these' },
        { type: 'p', text: 'First: look at your own front brake pads through the wheel without removing anything. A flashlight and a crouch will show you the remaining friction-material thickness. Less than a quarter inch means plan the job for a weekend; less than an eighth means do not put it off. Second: after any drive, touch the front wheels (carefully — they may be hot) and compare their temperatures. A wheel significantly hotter than its mate means a dragging caliper. Third: with the engine off, press the brake pedal five times firmly. It should stop firm and high. A pedal that sinks toward the floor slowly is a master-cylinder problem; a pedal that sinks and then bounces back up is air in the line.' },
        { type: 'h2', text: 'When it goes wrong' },
        { type: 'p', text: 'A soft pedal means air in the line or a failing master cylinder. A pulling car under braking means a sticking caliper, a collapsed brake hose, or uneven pads. A grinding noise means you waited too long to change pads — the backing plate is now eating the rotor. A shuddering pedal under hard braking means warped rotors or, on modern cars, uneven pad-material transfer (cured by bedding the pads). A clicking from a wheel under braking means loose pad-retention hardware. Squealing is usually harmless and indicates dust; continuous squealing is a wear-indicator tab telling you pads are nearly done.' },
        { type: 'h2', text: 'What to try next' },
        { type: 'p', text: 'After you can change front pads in an afternoon, the next rungs are a full brake-fluid flush using a one-person vacuum bleeder, replacing a collapsed brake hose, rebuilding a caliper with a seal kit, and diagnosing an ABS fault with a scan tool. The craft ceiling is high: professional race mechanics choose pad compounds by expected track temperature, match master-cylinder bore sizes to pedal feel, and balance front-to-rear brake bias with proportioning valves. Most drivers never need to go there. Knowing that such a world exists is the foundation of taking brakes seriously.' },
      ],

      keyTerms: ['disc brake', 'drum brake', 'caliper', 'rotor', 'brake pad', 'master cylinder', 'brake fade', 'DOT fluid', 'ABS', 'wheel-speed sensor'],

      scaffolding: {
        mentalModel: {
          analogy: 'Brakes are a river-diversion: push water in a pipe, the pipe pushes a gate against a turning wheel. When any link in the chain breaks — water, pipe, gate, or wheel — the car does not stop.',
          whereItBreaks: 'The analogy misses regenerative braking (electric cars bleed energy back into the battery), engine braking (exhaust-valve retarders on heavy trucks), and aerodynamic braking (airliners and some supercars). It also underplays how much brake feel matters — the human judgment that reads the pedal is half the system.',
        },
        workedExample: {
          prompt: 'A 2012 Subaru Outback pulls hard right when braking at highway speed. Pads were replaced two years ago. What next?',
          scenario: 'The mechanic jacks the front axle, spins each wheel by hand with the engine off, and listens for drag.',
          steps: [
            { step: 'Right front wheel is noticeably harder to turn than left.', why: 'Unequal drag at idle is the fingerprint of a sticking caliper.' },
            { step: 'Remove the wheel; inspect pad thickness.', why: 'Differential wear across the two pads in one caliper isolates the fault.' },
            { step: 'Right outer pad: worn to backing plate. Right inner pad: 50% thickness.', why: 'The inner pad wears more because the piston is stuck extending it harder than the outer.' },
            { step: 'Rotor scored, heat-spotted. Caliper piston resists compression with a C-clamp.', why: 'Corroded piston in its bore; the seal is no longer wiping it clean.' },
          ],
          result: 'Repair: replace caliper (or rebuild with a seal kit), replace rotor, install a full set of new pads, and flush brake fluid front-and-rear. Moisture in old fluid is what corroded the piston.',
        },
        exercises: [
          {
            level: 'beginner',
            prompt: 'Inspect your own front brake pads without removing a wheel. How much friction material is left in millimeters? What is the wear-indicator tab, and can you see it?',
            hint: 'A flashlight through the wheel spokes. The pad sits between the rotor and the caliper bracket.',
            solution: 'New pads are typically 10–12 mm thick. Below 3 mm is time to replace. The wear-indicator tab is a small steel tongue that contacts the rotor when the pad is nearly worn out; its contact produces the characteristic brake-wear squeal.',
          },
          {
            level: 'beginner',
            prompt: 'After a ten-minute city drive, carefully touch each front wheel. One is much hotter than the other. What does that mean?',
            hint: 'A hot wheel is a wheel whose brake was dragging during the drive.',
            solution: 'A sticking caliper on that corner. Confirm by jacking the wheel and feeling for drag with the engine off. Do not drive it long; dragging calipers cook fluid, boil bearings, and can start fires.',
          },
          {
            level: 'intermediate',
            prompt: 'After a brake-pad change, the pedal feels soft and goes nearly to the floor before biting. What happened?',
            hint: 'Think about what you pushed against when you compressed the caliper piston.',
            solution: 'The pedal needs to be pumped several times after reassembly to re-seat the pistons against the new (thicker) pads. If it is still soft after ten pumps, air got into the system during the job and the brakes need bleeding. Always open the bleeder screw when compressing the caliper piston so you push fluid back out the bleeder, not back up to the master cylinder, which can push debris into the ABS module.',
          },
          {
            level: 'intermediate',
            prompt: 'How do you bed new brake pads correctly, and why does it matter?',
            hint: 'Bedding is a controlled series of decelerations that deposits friction material evenly on the rotor.',
            solution: 'From 35 mph, brake firmly to 5 mph without stopping, five to ten times, with ~30 seconds between each to let the rotors cool. Do not come to a full stop immediately after the last one — the hot pad will deposit material unevenly on the rotor, causing a shudder. An unbedded pad glazes, squeals, or makes the rotor look "warped" when the rotor is actually fine.',
          },
          {
            level: 'advanced',
            prompt: 'The ABS light is on and a scan tool reports fault code C0035 (left front wheel speed sensor). The sensor itself reads continuity correctly with a multimeter. What is likely wrong?',
            hint: 'C-codes are chassis codes. Sensor faults are rarely the sensor itself.',
            solution: 'Most likely a damaged tone ring (the toothed wheel the sensor reads) or an air gap that has opened up because the wheel-bearing hub is moving. Inspect the tone ring for missing or chewed teeth; check wheel-bearing play. Wiring between sensor and module can also be chafed; swap the signal to a scope and look for the AC signal while spinning the wheel.',
          },
        ],
        troubleshooting: [
          { symptom: 'Pedal goes to the floor', likelyCauses: ['Brake-line leak', 'Failed master cylinder', 'Air in the lines'], quickTest: 'Look under the car for wet spots; press pedal slowly — sinking without leaks points at master cylinder.', fix: 'Replace the leaking line, repair the master cylinder, or bleed the system.' },
          { symptom: 'Car pulls under braking', likelyCauses: ['Sticking caliper', 'Collapsed brake hose', 'Uneven pads', 'Grease on one rotor'], quickTest: 'Jack the car and spin each wheel by hand. Drag = caliper or hose.', fix: 'Replace caliper or hose; clean rotor with brake cleaner; replace pads in axle pairs.' },
          { symptom: 'Shudder under hard braking', likelyCauses: ['Uneven pad-material transfer (DTV)', 'Warped rotor', 'Loose caliper bracket'], quickTest: 'Re-bed the pads. If shudder persists, measure rotor thickness variation.', fix: 'Re-bedding often cures it. If not, replace rotors and pads together.' },
          { symptom: 'Grinding noise', likelyCauses: ['Pad worn to backing plate', 'Rock caught in dust shield'], quickTest: 'Visual inspection.', fix: 'New pads, probably new rotor.' },
          { symptom: 'Continuous high-pitch squeal', likelyCauses: ['Wear-indicator tab contacting rotor', 'Dust'], quickTest: 'Inspect pad thickness.', fix: 'Replace pads if thin; compressed-air blow-out and a thin film of disc-brake quiet can cure dust squeal.' },
          { symptom: 'Pedal pulses (not just under ABS)', likelyCauses: ['Warped rotor', 'Uneven material transfer'], quickTest: 'Measure rotor runout with a dial indicator.', fix: 'Machine or replace rotor; re-bed pads after.' },
          { symptom: 'ABS light on', likelyCauses: ['Wheel-speed sensor fault', 'Wiring damage', 'Module fault', 'Low brake fluid'], quickTest: 'Read codes with an OBD-II scanner.', fix: 'Most commonly a chewed sensor harness or a damaged tone ring.' },
          { symptom: 'Spongy pedal after pad change', likelyCauses: ['Air drawn into master cylinder', 'Unbled system'], quickTest: 'Pump the pedal — does it firm up?', fix: 'Bleed each caliper in the correct order (farthest from master cylinder first).' },
        ],
        progression: [
          { level: 'novice', canDo: 'Identify the parts through the wheel, read pad thickness, press the pedal and describe what it feels like.', shouldNext: 'Watch a ChrisFix brake-pad-change video end to end; assemble the tools; plan the first job.' },
          { level: 'apprentice', canDo: 'Change front and rear pads; bleed brakes with a helper; replace a caliper; bed pads correctly.', shouldNext: 'Learn to flush fluid solo with a vacuum bleeder; diagnose a pulling brake; rebuild a caliper with a seal kit.' },
          { level: 'journeyman', canDo: 'Diagnose ABS faults with a scope; rebuild master cylinders; match pad compounds to driving; tune brake bias with proportioning valves.', shouldNext: 'Move into performance/race brake work or teach apprentices. This is where the trade starts being craft.' },
        ],
        glossary: [
          { term: 'Caliper', def: 'The clamp that squeezes brake pads against the rotor. Contains one or more hydraulic pistons.' },
          { term: 'Rotor', def: 'The metal disc mounted on the wheel hub that the pads grip. Usually cast iron; sometimes carbon-ceramic on performance cars.' },
          { term: 'Brake fade', def: 'The loss of braking force when the friction system gets too hot — pads outgas, fluid boils, or rotors glaze. Mostly a drum-brake issue; largely engineered out of modern disc systems.' },
          { term: 'Bed the pads', def: 'The initial process of gently cycling new pads to deposit a uniform layer of friction material on the rotor.' },
          { term: 'Master cylinder', def: 'The hydraulic pump at the brake pedal. Converts pedal travel into line pressure.' },
          { term: 'DOT fluid', def: 'The standardized hydraulic fluid used in brakes. DOT 3, 4, and 5.1 are glycol-based and hygroscopic; DOT 5 is silicone and incompatible with the others.' },
          { term: 'ABS', def: 'Anti-lock braking system. Pulses brake pressure many times per second to prevent wheel lockup during hard braking, preserving steering.' },
        ],
      },

      resources: {
        videos: [
          { id: '6H7nwlT_qNY', source: 'youtube', url: 'https://www.youtube.com/watch?v=6H7nwlT_qNY', title: 'BRAKES: How They Work — Science Garage', channel: 'Donut Media', duration: '9:03', kind: 'tutorial', why: 'Bart Bidlingmeyer cuts apart an actual caliper and walks through the hydraulic chain on camera. The best single-video introduction.' },
          { id: null, source: 'other', url: 'https://www.lesics.com/understanding-anti-lock-braking-system.html', title: 'Understanding the Anti-lock Braking System (illustrated)', channel: 'Lesics', duration: 'interactive article', kind: 'animation', why: 'The clearest illustrated walkthrough of ABS on the internet. Diagrams and animations paired with plain-English explanation.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@ChrisFix', title: 'ChrisFix — how to change brake pads and rotors', channel: 'ChrisFix', duration: 'variable', kind: 'tutorial', why: 'Chris\'s step-by-step brake-pad replacement videos are the de facto tutorial for first-time DIY brake jobs. Watch his front and rear pad videos before starting yours.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@EngineeringExplained', title: 'Engineering Explained — brake physics and fluid', channel: 'Engineering Explained', duration: 'variable', kind: 'lecture', why: 'Jason Fenske on why brake fluid boils, why bigger brakes are not always better brakes, and the math behind pad material choice.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@Lesics', title: 'Lesics — how disc brakes work', channel: 'Lesics', duration: 'variable', kind: 'animation', why: 'Animated teardown of the entire hydraulic circuit — master cylinder, proportioning valve, caliper piston, pad. Best visual of the pressure path.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@TheEngineeringMindset', title: 'The Engineering Mindset — braking systems animated', channel: 'The Engineering Mindset', duration: 'variable', kind: 'animation', why: 'Cutaway animations of drum, disc, and electric-assisted systems. Pairs well with the Lesics video for a second angle.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@SmarterEveryDay', title: 'Smarter Every Day — friction and motion videos', channel: 'Smarter Every Day', duration: 'variable', kind: 'documentary', why: 'Destin Sandlin\'s slow-motion treatments of friction, wheel slip, and mechanical wear give a physicist\'s feel for why brakes behave the way they do.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@EricTheCarGuy', title: 'EricTheCarGuy — brake job walkthroughs', channel: 'EricTheCarGuy', duration: 'variable', kind: 'shop', why: 'Eric O\'s shop videos cover everything the Chris-Fix tutorials skip — stuck caliper slides, warped rotors, seized hardware.', collapsed: true },
        ],
        books: [
          { title: 'Brake Handbook', author: 'Fred Puhn', year: 1987, url: 'https://www.google.com/books/edition/Brake_Handbook/ng8KAQAAMAAJ', why: 'The go-to reference for amateurs tuning brake systems — still cited forty years on for its clear treatment of pad selection, bias, and fade.' },
          { title: 'Auto Repair For Dummies', author: 'Deanna Sclar', year: 2019, url: 'https://www.barnesandnoble.com/w/auto-repair-for-dummies-deanna-sclar/1100321754', why: 'Sclar\'s brake chapter is the gentlest treatment of pad replacement in print. Friendly without being condescending.' },
          { title: 'How Cars Work', author: 'Tom Newton', year: 1999, url: 'https://books.google.com/books/about/How_Cars_Work.html?id=ZhEEAAAACAAJ', why: 'Newton\'s illustrated spreads on the brake hydraulic circuit are a useful mental model before you ever lift a wheel.' },
          { title: 'Fundamentals of Machine Component Design', author: 'Robert C. Juvinall and Kurt M. Marshek', year: 2020, url: 'https://www.amazon.com/Fundamentals-Machine-Component-Design-Juvinall/dp/1119723604', why: 'The mechanical-engineering textbook with the standard academic treatment of clutch and brake design. For readers who want the math.' },
          { title: 'Brake Design and Safety', author: 'Rudolf Limpert', year: 2011, url: 'https://www.sae.org/publications/books/content/r-398/', why: 'The SAE reference on passenger-vehicle brake design. Dense, authoritative, the industry\'s own textbook.' },
        ],
        articles: [
          { title: 'Disc brake', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Disc_brake', why: 'History from Lanchester\'s 1902 patent to modern calipers, plus clear diagrams of how the whole assembly hangs together.', year: null },
          { title: 'Anti-lock braking system', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Anti-lock_braking_system', why: 'The 1978 Bosch Mercedes launch, the physics, and country-by-country regulatory timeline.', year: null },
          { title: 'How Disc Brakes Work', source: 'HowStuffWorks', url: 'https://auto.howstuffworks.com/auto-parts/brakes/brake-types/disc-brake.htm', why: 'Marshall Brain\'s original tutorial, with exploded diagrams. Dated in places but still the clearest step-by-step.', year: null },
          { title: 'How ABS Works', source: 'How a Car Works', url: 'https://www.howacarworks.com/technology/how-abs-works', why: 'Illustrated explanation of the wheel-speed sensor, pulse valve, and hydraulic control unit. Companion to the Wikipedia article.', year: null },
        ],
        courses: [
          { title: 'Chilton Auto Repair (online, free with a public library card)', provider: 'Haynes / Chilton', url: 'https://us.haynes.com/blogs/tips-tutorials/chilton-repair-manuals-the-enduring-standard-in-automotive-know-how', free: true, why: 'Every brake job is model-specific. Your car\'s Chilton page will tell you torque specs, fluid type, and which bolts to replace.' },
          { title: 'ASE A5 Brakes Certification', provider: 'National Institute for Automotive Service Excellence', url: 'https://www.ase.com/tests/ase-certification-tests/automobile-light-truck-tests/brakes-a5', free: false, why: 'The industry credential. Study guides and task lists are free — worth reading even if you never test.' },
        ],
        tools: [
          { title: 'Torque wrench (1/2" drive, 20–150 ft-lb)', url: 'https://en.wikipedia.org/wiki/Torque_wrench', why: 'Lug nuts and caliper bolts are torque-critical. A fifty-dollar click-type wrench outlasts three cars.' },
          { title: 'Caliper piston compressor', url: 'https://en.wikipedia.org/wiki/Disc_brake', why: 'The $15 block-and-screw tool that retracts a caliper piston without damage. A C-clamp works in a pinch but chews up dust boots.' },
          { title: 'Brake bleeder (one-person, vacuum or pressure)', url: 'https://en.wikipedia.org/wiki/Brake_bleeding', why: 'Bleeding brakes is a two-person job without one; with one, it is a quiet Saturday task.' },
        ],
        primarySources: [
          { title: 'Lanchester 1902 disc-brake patent', url: 'https://en.wikipedia.org/wiki/Disc_brake#History', why: 'Frederick Lanchester\'s UK patent, the first serious disc-brake design. Ignored for fifty years until Dunlop revived it for aircraft and Jaguar moved it to cars.' },
        ],
      },

      seeAlso: ['engine_basics', 'diag', 'tolerances'],
      prereqs: ['engine_basics'],
      leadsTo: ['diag'],
      chapterActivity: 'Monthly brake-and-fluid clinic at a Queens community garage — bring your car, bring a friend, leave with fresh pads.',
      sources: [
        'https://en.wikipedia.org/wiki/Disc_brake',
        'https://en.wikipedia.org/wiki/Anti-lock_braking_system',
        'https://auto.howstuffworks.com/auto-parts/brakes/brake-types/disc-brake.htm',
        'https://www.lesics.com/understanding-anti-lock-braking-system.html',
      ],
      verifiedAt: '2026-04-23',
    },

    diag: {
      id: 'diag',
      name: 'Diagnostics',
      level: 'Intermediate',
      dek: 'A modern car talks. The skill is knowing which questions to ask, and in what order.',
      readTime: '18 min',

      sections: ['The OBD-II contract', 'Codes are clues, not answers', 'The logic of elimination', 'The cheap tools that matter', 'Reading a scope like a map', 'How to think about it', 'Work through one', 'Try these', 'When it goes wrong', 'What to try next'],
      body: [
        { type: 'lead', text: 'Somewhere under the dashboard of every car sold in the United States since 1996 is a trapezoidal port the size of a postage stamp. Plug a scanner into it and the car — forty separate microprocessors, two thousand feet of wiring, three hundred sensors — will tell you what is wrong. Sometimes it even tells you the truth.' },
        { type: 'h2', text: 'The OBD-II contract' },
        { type: 'p', text: 'On-Board Diagnostics, second generation, was mandated by California\'s Air Resources Board and picked up federally in 1996. Every passenger vehicle sold since uses the same connector, the same protocols, and the same five-digit trouble codes. A P0300 means a random misfire on any car, from a 1998 Civic to a 2025 Porsche. This is the first standard in automotive history that treats the car\'s brain as a public interface. The repair industry has never quite recovered from the shock of not needing a manufacturer\'s proprietary tool just to see what the check-engine light is about.' },
        { type: 'h2', text: 'Codes are clues, not answers' },
        { type: 'p', text: 'A trouble code tells you where the engine computer saw a parameter outside expected limits. It does not tell you the cause. A P0171 — system too lean, bank one — can be a vacuum leak, a bad oxygen sensor, a failing fuel pump, or a cracked intake boot. The skill of diagnostics is in turning a code into a hypothesis, and a hypothesis into a single test. Mechanics who skip that step order parts at the customer\'s expense until the light goes out; the good ones confirm before they spend.' },
        { type: 'h2', text: 'The logic of elimination' },
        { type: 'p', text: 'The reliable pattern: reproduce the symptom, read the codes, check the freeze-frame data the computer stored at the moment of the fault, then test the cheapest thing that could cause it first. If the code is a misfire on cylinder three, swap the coil from cylinder three with the coil from cylinder one and drive it again. If the misfire moves to cylinder one, the coil is bad. If it stays on three, the coil is not the problem. A thirty-second swap saves a forty-dollar guess.' },
        { type: 'h2', text: 'What to own' },
        { type: 'p', text: 'The baseline kit is cheaper than a tank of gas. A twenty-dollar Bluetooth OBD-II dongle and a free phone app will read and clear codes. A digital multimeter reads voltage, resistance, and continuity. A cheap infrared thermometer catches a dead cylinder before a compression test does, because a dead cylinder runs cold. A compression gauge settles every remaining argument about engine health. These four tools find ninety percent of what a shop charges a hundred and fifty dollars an hour to find.' },
        { type: 'h2', text: 'Reading a scope like a map' },
        { type: 'p', text: 'The next tool up — the automotive lab scope, or oscilloscope — turns an electrical signal into a picture. A healthy crankshaft-position sensor traces a clean square wave; a dying one traces a square wave with a notch cut in it every other cycle. A good ignition coil fires with a burn line that runs flat for a millisecond; a dead one fires with a burn line that rises like a hill. Learn to read the picture and you can diagnose faults that code scanners will never catch. Paul Danner of ScannerDanner built a career teaching this — first in a Pennsylvania vocational school, then to a million people on YouTube.' },
        { type: 'callout', text: 'Codes P0300 through P0312 are misfire codes. Codes starting with P01 are fuel and air. P02 is injectors and fuel trim. P03 is ignition and misfire. P04 is emissions controls. Learn the prefixes and you can narrow a problem in seconds.' },

        { type: 'h2', text: 'How to think about it' },
        { type: 'p', text: 'Diagnostics is not guessing. Diagnostics is a structured interrogation of a witness — the car — that only answers the questions you put to it. Start with symptom-as-described. Reproduce it. Capture every fault code and freeze-frame snapshot the computer will give you. Form a hypothesis narrow enough to be tested by a single measurement. Run the test. If the hypothesis holds, proceed to the fix; if it does not, form the next hypothesis. The mechanics who have "magic" are the ones who have done this a thousand times and skip to the likely hypothesis without saying so. They are not skipping steps; they are doing them fast.' },
        { type: 'h2', text: 'Work through one' },
        { type: 'p', text: 'A 2010 Toyota Camry has a check-engine light and the owner reports a slight hesitation under acceleration. Scan tool reads P0171 (system too lean, bank one). Freeze-frame data shows the fault triggered at 2,400 RPM, 60% load, coolant 185 °F — so a warm, moderately loaded condition. The mechanic\'s hypothesis list, ordered by cheapest test: vacuum leak (smoke test the intake), mass air-flow sensor drift (compare grams-per-second reading to the expected at idle), fuel-pressure low (gauge at the rail), or oxygen sensor reporting wrong. A smoke test reveals a small leak at the PCV hose at the back of the intake — a ten-dollar rubber fitting. One test, one fault, one cheap part. Total time: forty-five minutes.' },
        { type: 'h2', text: 'Try these' },
        { type: 'p', text: 'First: buy a twenty-dollar Bluetooth OBD-II dongle (OBDLink, BlueDriver, or Kiwi 3) and a free phone app (OBD Fusion, Car Scanner, Torque). Plug it in, scan your own car, read every stored code, and note the live-data parameters: coolant temperature, short- and long-term fuel trim, mass air-flow reading at idle, engine load. Do this even if no check-engine light is on — the baseline is the most valuable data you will ever collect. Second: with the engine off, measure the battery voltage with a multimeter (should read 12.4–12.7V). Start the engine; it should read 13.8–14.4V. If it reads below 12V engine-off or below 13.2V engine-on, you have a battery or charging-system problem that will masquerade as a dozen other faults. Third: find your car\'s MAF sensor and clean it with MAF-specific cleaner spray — a five-minute job that fixes an astonishing number of lean codes.' },
        { type: 'h2', text: 'When it goes wrong' },
        { type: 'p', text: 'The most common diagnostic failure is ordering parts against a code without confirming the cause. The second most common is chasing the wrong code: many drivers clear codes before anyone looks at them, or clear multiple codes so that an upstream fault (failing cam position sensor) is masked by downstream symptoms (misfires, lean codes). Rule: never clear a code until you have photographed the freeze-frame and noted which codes were current versus pending. The third failure is ignoring intermittent faults because they are not active right now — set the scan tool to record live data on a drive that reproduces the fault, then review the recording.' },
        { type: 'h2', text: 'What to try next' },
        { type: 'p', text: 'Past code reading, the next rungs are mode-06 monitor readings (which show the pending fault indicators the computer is watching), live-data recording during a test drive, fuel-trim analysis for long-term fuel mixture health, and scope work on sensor and injector signals. The craft ceiling is in Paul Danner\'s studio in Pittsburgh and Eric Ziegler\'s shop in Pennsylvania — professional diagnosticians who fix what the dealer could not. Watching two years of ScannerDanner videos is the closest thing to a free master\'s program the internet offers.' },
      ],

      keyTerms: ['OBD-II', 'diagnostic trouble code', 'freeze frame', 'misfire', 'fuel trim', 'oxygen sensor', 'scan tool', 'CAN bus', 'oscilloscope', 'PID'],

      scaffolding: {
        mentalModel: {
          analogy: 'The car is a witness. Codes are clues, not verdicts. Your job is prosecutor, not juror — keep asking for evidence until one hypothesis fits everything.',
          whereItBreaks: 'Intermittent faults that never set a code do not fit the witness analogy. For those, diagnostics becomes surveillance: record live data across many drives and watch for the pattern.',
        },
        workedExample: {
          prompt: 'A 2010 Toyota Camry has a check-engine light. Owner reports hesitation on acceleration. Code: P0171 (system too lean, bank one). What next?',
          scenario: 'Freeze-frame data at fault: 2,400 RPM, 60% engine load, coolant 185°F, long-term fuel trim +18%, short-term +12%.',
          steps: [
            { step: 'Rank the hypotheses by cheapest test: vacuum leak → MAF sensor drift → low fuel pressure → bad O2 sensor.', why: 'Positive long-term fuel trim means the ECU is adding fuel to compensate — unmetered air is getting in, or fuel is short.' },
            { step: 'Spray carb cleaner or smoke-test the intake with the engine idling.', why: 'A vacuum leak reveals itself as a change in idle RPM when the solvent finds it, or as visible smoke escaping.' },
            { step: 'Smoke escapes at the PCV hose fitting at the back of the intake manifold.', why: 'Cracked rubber fitting.' },
            { step: 'Replace the fitting, clear codes, test drive.', why: 'Confirm the fix before handing the keys back.' },
          ],
          result: 'Fault confirmed as a vacuum leak at the PCV hose. Ten-dollar part; forty-five minutes total. No parts-cannon required.',
        },
        exercises: [
          {
            level: 'beginner',
            prompt: 'Plug an OBD-II scanner into your own car. Record every stored code (even if none), the current fuel trims, and the coolant temperature and battery voltage at idle.',
            hint: 'These baseline readings are free evidence for any future diagnostic. A phone app is fine.',
            solution: 'Typical healthy readings: no stored or pending codes; short-term fuel trim near zero; long-term fuel trim between -5% and +5%; coolant 180–200°F after warm-up; battery 13.8–14.4V engine running. Write these down and you have a baseline.',
          },
          {
            level: 'beginner',
            prompt: 'Your check-engine light flashes instead of staying solid. What does flashing mean, and what should you do?',
            hint: 'Solid is an emissions fault; flashing is different.',
            solution: 'A flashing check-engine light indicates an active misfire severe enough to damage the catalytic converter within minutes. Do not drive; tow the vehicle if needed. Pull the codes immediately; you will almost certainly find a misfire DTC (P0300-P0312).',
          },
          {
            level: 'intermediate',
            prompt: 'The scan tool reports P0302 (misfire, cylinder 2) on a four-cylinder. What is the fastest way to determine if the fault is a coil, an injector, or a spark plug?',
            hint: 'Move components physically; observe where the fault moves.',
            solution: 'Swap the coil from cylinder 2 with the coil from cylinder 1. Clear the code. Drive until the misfire reappears. If the code is now P0301, the coil is bad. If it is still P0302, repeat with the injector. If still P0302 after both swaps, it is the spark plug, the wiring, or mechanical (low compression on cylinder 2).',
          },
          {
            level: 'intermediate',
            prompt: 'Your car sets a P0420 (catalyst efficiency below threshold). The catalytic converter is expensive. What are you obligated to check before replacing it?',
            hint: 'P0420 is set when the downstream O2 sensor looks too similar to the upstream one — meaning the cat is not scrubbing the exhaust as well as it should.',
            solution: 'First confirm the downstream O2 sensor itself is working — swap it with a known-good one, or scope its signal at idle and under cruise. Then check for exhaust leaks before the cat (an air leak lets ambient O2 reach the downstream sensor, faking a dead cat). Also check for engine misfires or a rich condition, either of which can destroy a good cat or fool the monitoring. Only then conclude the cat is genuinely failed.',
          },
          {
            level: 'advanced',
            prompt: 'A BMW sets a "random misfire" code only when starting from cold and only in humid weather. By the time the car is at the shop, the symptom is gone and no code is current. How do you proceed?',
            hint: 'Intermittent faults require surveillance, not bench testing.',
            solution: 'Capture mode-06 data — the monitor values that show marginal operation without setting an active DTC. Record live data during the next cold start with a data-logging scanner. Inspect the ignition system for moisture-sensitive cracks (distributor cap on older cars, coil-on-plug boots on newer). Look for signs of water intrusion around the engine harness. The fault is almost always a tracking ignition component revealed by humidity.',
          },
        ],
        troubleshooting: [
          { symptom: 'Check-engine light solid', likelyCauses: ['One of several thousand faults'], quickTest: 'Read the code with any OBD-II scanner.', fix: 'Narrow by code prefix: P00xx is mechanical/electrical; P01xx is fuel/air; P02xx is injectors; P03xx is ignition/misfire; P04xx is emissions.' },
          { symptom: 'Check-engine light flashing', likelyCauses: ['Severe misfire damaging the catalyst'], quickTest: 'Pull over; do not drive.', fix: 'Diagnose misfire code immediately.' },
          { symptom: 'Code came back after clearing', likelyCauses: ['Fault not fixed', 'Root cause misdiagnosed', 'Soft code from temporary condition'], quickTest: 'Check freeze-frame data — does it match the reported symptoms?', fix: 'Re-diagnose using freeze-frame conditions.' },
          { symptom: 'No code but the light is on', likelyCauses: ['Intermittent pending code', 'Gas cap loose', 'Emissions readiness not complete'], quickTest: 'Check for pending codes (different from stored).', fix: 'Drive a complete drive cycle; tighten gas cap; watch for recurrence.' },
          { symptom: 'Multiple unrelated codes', likelyCauses: ['Single root cause upstream', 'Low battery voltage', 'Ground fault'], quickTest: 'Check battery and grounds first.', fix: 'Diagnose in code-number order — lowest numbers often upstream.' },
          { symptom: 'Scanner reads nothing, port powered', likelyCauses: ['Blown OBD fuse', 'Comm module failure', 'Bent pins in the connector'], quickTest: 'Check for power and ground on the OBD-II connector; inspect pins.', fix: 'Replace fuse; in rare cases replace the CAN gateway module.' },
          { symptom: 'Random misfire only in the rain', likelyCauses: ['Cracked coil', 'Water in the spark-plug wells', 'Bad plug boot'], quickTest: 'Spray the ignition coils with water from a spray bottle while the engine runs.', fix: 'Replace the leaking coil or boot.' },
        ],
        progression: [
          { level: 'novice', canDo: 'Plug in a scanner, read codes, look up what they mean, identify the freeze-frame conditions.', shouldNext: 'Learn the five common code families and what each typically points at; keep a baseline of healthy fuel trims for your car.' },
          { level: 'apprentice', canDo: 'Form a testable hypothesis from a code; run a single confirming test; fix the actual cause; clear codes and verify.', shouldNext: 'Add a scope to your kit; learn fuel-trim diagnosis; read mode-06 monitors.' },
          { level: 'journeyman', canDo: 'Diagnose intermittent faults with live-data recording; read coil burn lines and injector waveforms on a scope; reverse-engineer unfamiliar systems from a wiring diagram.', shouldNext: 'Start charging for it. The diagnostic craft is a career unto itself.' },
        ],
        glossary: [
          { term: 'OBD-II', def: 'The 1996-onward US standard for vehicle self-diagnostics. One connector, one protocol, five-digit codes.' },
          { term: 'DTC', def: 'Diagnostic Trouble Code. A letter (P for powertrain, B for body, C for chassis, U for network) plus four digits.' },
          { term: 'Freeze frame', def: 'A snapshot of key sensor values at the moment a fault was first set — RPM, load, coolant temp, fuel trims. Essential diagnostic data.' },
          { term: 'Fuel trim', def: 'A percentage describing how much the ECU is adjusting fuel to correct mixture. Short-term (STFT) is immediate; long-term (LTFT) is a learned average.' },
          { term: 'Mode 06', def: 'A standardized OBD-II service that exposes the internal monitor results — pending, borderline, and healthy indicators — even when no DTC is set.' },
          { term: 'MAF', def: 'Mass Air-Flow sensor. Measures the mass of air entering the engine; essential for correct fuel metering.' },
          { term: 'Lambda / O2 sensor', def: 'An oxygen sensor in the exhaust. Reports whether combustion was rich or lean; the ECU uses its signal to close the fuel-trim loop.' },
        ],
      },

      resources: {
        videos: [
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@ScannerDanner', title: 'ScannerDanner — real diagnostic case studies', channel: 'ScannerDanner', duration: 'variable', kind: 'shop', why: 'Paul Danner, automotive instructor in Pittsburgh, films actual bay work. Long, patient, unglamorous — the best diagnostic channel on YouTube.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@EricTheCarGuy', title: 'EricTheCarGuy — diagnostics fundamentals', channel: 'EricTheCarGuy', duration: 'variable', kind: 'tutorial', why: 'Twenty-plus years as an independent mechanic before he started filming. His OBD-II primer videos are a good place to start.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@ChrisFix', title: 'ChrisFix — How to read and clear check engine codes', channel: 'ChrisFix', duration: 'variable', kind: 'tutorial', why: 'The gentlest on-ramp to plugging in a scanner. Chris walks through a free phone app and a cheap dongle.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@SouthMainAutoRepairLLC', title: 'South Main Auto Repair — mobile diagnostics', channel: 'South Main Auto Repair', duration: 'variable', kind: 'shop', why: 'Eric O runs a rural upstate-New-York shop and films every diagnostic he does. The working diagnostician\'s working channel.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@WeberAuto', title: 'Weber Auto — powertrain and hybrid teardowns', channel: 'Weber Auto', duration: 'variable', kind: 'lecture', why: 'John Kelly, Weber State University instructor, gives classroom-grade lectures on every modern transmission and hybrid system.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@PineHollowAutoDiagnostics', title: 'Pine Hollow Auto Diagnostics', channel: 'Pine Hollow Auto Diagnostics', duration: 'variable', kind: 'shop', why: 'Eric Ziegler of Pennsylvania on advanced scope and scan-tool diagnostics. Pairs well with ScannerDanner.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@RainmanRaysRepairs', title: 'Rainman Ray\'s Repairs', channel: 'Rainman Ray\'s Repairs', duration: 'variable', kind: 'shop', why: 'Florida independent shop, consistently one of the most-watched diagnostic channels. Variety of vehicles, plain explanation.', collapsed: true },
        ],
        books: [
          { title: 'Automotive Diagnostic Systems: Understanding OBD-I and OBD-II', author: 'Keith McCord', year: 2011, url: 'https://www.amazon.com/Automotive-Diagnostic-Systems-Understanding-II/dp/1934709069', why: 'The standalone book on OBD-II for enthusiasts. McCord writes for the driver who wants to do more than clear the light.' },
          { title: 'Auto Repair For Dummies', author: 'Deanna Sclar', year: 2019, url: 'https://www.barnesandnoble.com/w/auto-repair-for-dummies-deanna-sclar/1100321754', why: 'Sclar\'s diagnostics chapter is a quiet, confident walk-through of what a code is and why you should not panic when you see one.' },
          { title: 'How to Diagnose and Repair Automotive Electrical Systems', author: 'Tracy Martin', year: 2005, url: 'https://www.google.com/books/edition/How_to_Diagnose_and_Repair_Automotive_El/fIFLFvPpFrUC', why: 'Electrical faults drive most modern diagnostic work. Martin\'s book is the clearest introduction for someone with a multimeter and patience.' },
          { title: 'Performance Diagnostics with the Scanner Danner', author: 'Paul Danner', year: 2015, url: 'https://scannerdanner.com/engine-performance-diagnostics-the-book.html', why: 'Danner\'s self-published textbook, sold through his own site. The only companion most of his YouTube students ever need.' },
          { title: 'Modern Automotive Technology', author: 'James E. Duffy', year: 2019, url: 'https://www.g-w.com/modern-automotive-technology-2020', why: 'Goodheart-Willcox\'s classroom textbook — the one many US vocational programs use. Comprehensive, illustrated, authoritative.' },
        ],
        articles: [
          { title: 'On-board diagnostics', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/On-board_diagnostics', why: 'The timeline from OBD-I to OBD-II to the newer UDS standard, plus a readable protocol reference.', year: null },
          { title: 'OBD-II PIDs (parameter IDs)', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/OBD-II_PIDs', why: 'The full lookup table of every data parameter a scanner can request. Bookmark it.', year: null },
          { title: 'CAN bus', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/CAN_bus', why: 'The twisted-pair networking standard that lets all of a car\'s computers talk to each other. Good technical overview for anyone thinking about reading live data.', year: null },
          { title: 'Mitchell1 ProDemand', source: 'Mitchell1 / Snap-on', url: 'https://www.prodemand.com/', why: 'The professional repair-information platform — labor times, wiring diagrams, TSBs. Many libraries subscribe. Know what the pros are reading.', year: null },
        ],
        courses: [
          { title: 'Chilton Auto Repair Manuals (online, free with a public library card)', provider: 'Haynes / Chilton', url: 'https://us.haynes.com/blogs/tips-tutorials/chilton-repair-manuals-the-enduring-standard-in-automotive-know-how', free: true, why: 'Codes are generic; the diagnostic flowchart is model-specific. Your car\'s Chilton entry will tell you what to test first.' },
          { title: 'Autoshop 101 — free technical library', provider: 'Kevin Sullivan, Autoshop 101', url: 'http://www.autoshop101.com/techarticles/technicalarticles.html', free: true, why: 'A retired Toyota master technician\'s free PDF library — electrical theory, wiring diagrams, sensor operation. Decades of classroom material.' },
        ],
        tools: [
          { title: 'OBD-II Bluetooth adapter + free app', url: 'https://en.wikipedia.org/wiki/On-board_diagnostics', why: 'A twenty-dollar dongle plus OBD Fusion, Car Scanner, or Torque Lite turns any phone into a live data display.' },
          { title: 'Digital multimeter', url: 'https://en.wikipedia.org/wiki/Multimeter', why: 'Voltage at the fuse, resistance across the sensor, continuity down the wire. The one non-negotiable electrical tool.' },
          { title: 'Automotive oscilloscope (Pico or similar)', url: 'https://en.wikipedia.org/wiki/Oscilloscope', why: 'The tool that lifts you from hobbyist to diagnostician. Sees signals a multimeter averages into nonsense.' },
          { title: 'Infrared thermometer', url: 'https://en.wikipedia.org/wiki/Infrared_thermometer', why: 'Ten dollars. Finds dead cylinders by temperature and stuck caliper pistons by heat signature.' },
        ],
      },

      seeAlso: ['engine_basics', 'brakes', 'ecu', 'ohms'],
      prereqs: ['engine_basics'],
      leadsTo: ['ecu'],
      chapterActivity: 'Thursday-night "check-engine clinic" at the Brooklyn Public Library tech room — bring your code, bring your car.',
      sources: [
        'https://en.wikipedia.org/wiki/On-board_diagnostics',
        'https://en.wikipedia.org/wiki/OBD-II_PIDs',
        'https://en.wikipedia.org/wiki/CAN_bus',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
