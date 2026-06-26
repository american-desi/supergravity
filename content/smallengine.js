// content/smallengine.js
// Batch: B08-trades-II
// Last updated: 2026-04-23 by Session B08 (scaffolding pass)

window.CONTENT = window.CONTENT || {};
window.CONTENT.smallengine = {
  subjectId: 'smallengine',
  version: 3,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B08-trades-II',
  topics: {

    carb: {
      id: 'carb',
      name: 'Carburetors',
      level: 'Beginner',
      dek: 'A needle, a jet, a float, and a draft of moving air — the small machine that fed every engine for a century.',
      readTime: '17 min',

      sections: ['A plain idea, elegantly solved', 'Anatomy of a simple carburetor', 'Why it fails, always in winter', 'Rebuild, clean, or replace', 'Two-stroke carburetors are different', 'How to think about it', 'Work through one', 'Try these', 'When it goes wrong', 'What to try next'],
      body: [
        { type: 'lead', text: 'Every small engine at the back of a garage — the chainsaw, the weed trimmer, the Briggs & Stratton in the old rotary mower — has, at its heart, a carburetor the size of a small orange, held together with four screws and a gasket. It is the last place in modern small-engine work where the problem is almost always mechanical and almost always fixable by hand. Fuel injection has crept into larger lawn tractors and the occasional snowblower, but the carburetor is still how most of these engines meet their fuel, and it is still the first place a small-engine mechanic looks when the machine will not start.' },
        { type: 'h2', text: 'A plain idea, elegantly solved' },
        { type: 'p', text: 'A carburetor uses the Bernoulli principle. Air rushes through a narrow throat; the pressure in the throat drops; fuel, held at atmospheric pressure in a small bowl below, is pushed up through a calibrated jet into the airstream, atomizing as it goes. The result is a combustible mist that the engine sucks into the cylinder. The whole device is passive — no electronics, no sensors, no electricity. Lay one on a bench next to a 2026 fuel injector and it looks ancient. It works anyway.' },
        { type: 'h2', text: 'Anatomy of a simple carburetor' },
        { type: 'p', text: 'The float bowl at the bottom holds a small reservoir of fuel, kept at a constant level by a pivoting float and a needle valve — the same principle as the toilet tank. A main jet, a small brass fitting with a calibrated hole, meters fuel into the throat at running speed. A pilot jet handles idle. A throttle plate above regulates airflow; a choke plate above that enriches the mixture for cold starts. Most small-engine carburetors add a small accelerator pump to squirt extra fuel when the throttle opens suddenly, because the airflow moves faster than the fuel can follow. Ten or twelve parts total. Any working mechanic can have one apart in five minutes.' },
        { type: 'h2', text: 'Why it fails, always in winter' },
        { type: 'p', text: 'Carburetors die from varnish. Modern gasoline, especially the ethanol-blended kind sold in most American pumps, begins to evaporate and gum within about thirty days in a fuel tank. By spring, every small passage in the carburetor is partly or fully blocked by brown varnish that looks like old maple syrup. The engine cranks and coughs and will not quite start. The mechanic pulls the bowl, soaks the metal body in a can of carb cleaner overnight, and runs a fine wire through each jet. Nine out of ten won\'t-start calls on a spring Saturday end with a clean carburetor and fresh fuel.' },
        { type: 'h2', text: 'Rebuild, clean, or replace' },
        { type: 'p', text: 'A carburetor rebuild kit — gaskets, seals, a fresh needle-and-seat, sometimes a new float — costs ten dollars. A complete replacement carburetor, often Chinese-made, costs twenty. There is a live debate among small-engine technicians about when to rebuild and when to replace; purists insist that the original metal body is always better, pragmatists point out that a cheap replacement lasts eight years in normal homeowner use. Most working shops do a bit of both. Either way, the ritual is the same: drain the old fuel, pull the carburetor, clean or replace, reinstall with fresh fuel stabilized for winter, and watch the machine come back to life.' },
        { type: 'h2', text: 'Two-stroke carburetors are different' },
        { type: 'p', text: 'The chainsaw\'s carburetor is a Walbro or a Zama — a diaphragm carburetor, not a float bowl. Because a chainsaw is used at any angle, including upside down, it cannot rely on gravity holding fuel in a bowl. Instead, pulses of crankcase pressure from the engine\'s two-stroke cycle work a flexible diaphragm that pumps fuel through a metering lever. Mixture is set by two brass screws labelled "L" for low speed and "H" for high speed, adjusted by a splined tool that the homeowner never owns. A well-tuned Stihl saw runs like a sewing machine. A badly tuned one seizes on the first hot day.' },
        { type: 'callout', text: 'The tool that defines the trade is the Stihl carburetor adjustment tool — a tiny splined screwdriver, the size of a matchstick, that fits the mixture screws on sealed small-engine carburetors. Without it you cannot tune a chainsaw. With it, any two-stroke can be set to run right in about a minute.' },

        { type: 'h2', text: 'How to think about it' },
        { type: 'p', text: 'A carburetor is a perfume atomizer that happens to feed an engine. The same Bernoulli principle that draws perfume into moving air draws fuel into the intake charge. The cleverness of the design is in the calibration — different jets, different throats, different accelerator systems — each tuned to a specific engine\'s demand. But the underlying physics is simple enough to grasp in a minute, which is why a carburetor rarely baffles a curious owner for long. Fuel injection is more accurate, more adaptive, and more efficient. The carburetor is more honest: a narrow throat, a calibrated hole, and moving air. That is the whole story.' },
        { type: 'h2', text: 'Work through one' },
        { type: 'p', text: 'A rotary mower will not start in April after sitting all winter. The technician\'s workflow: drain the tank into a jar — brown varnished fuel smells like shellac, confirming old gas. Remove the fuel line from the carburetor inlet. Remove the air filter housing and the carburetor mounting screws. Pull the carburetor off; note the linkages and the gasket orientation for reassembly. Remove the float bowl (one bolt). Pump out the old fuel; the bottom is coated in varnish. Remove the float, the needle, the seat. Blow out every passage with carb cleaner; run a fine wire (guitar string works) through the main jet and the pilot jet; repeat carb cleaner. Install a rebuild kit — new gaskets, fresh needle — reassemble. Reinstall on the engine. Fill tank with fresh gasoline plus stabilizer. First pull: pops. Third pull: runs. Tune idle screw to smooth. Total time: forty-five minutes. Cost: ten dollars of gaskets and two gallons of gas.' },
        { type: 'h2', text: 'Try these' },
        { type: 'p', text: 'First: identify a carburetor on any small engine in your world — a mower, a generator, a chainsaw, a snowblower. Find the bowl at the bottom (float-style) or the diaphragm cover (two-stroke). Find the choke lever, the throttle lever. The linkages are all visible; follow them. Second: with the engine off and the cap removed, sniff the fuel. Fresh gasoline smells sharp and slightly sweet; old gasoline smells sour and slightly fishy. If it smells wrong, the carburetor probably needs cleaning even if the engine starts. Third: buy a carburetor rebuild kit for a specific engine (search the model number plus "carb kit"). Sit at a kitchen table and disassemble, study, and reassemble the carburetor once without running the engine. The whole machine is visible and mechanical.' },
        { type: 'h2', text: 'When it goes wrong' },
        { type: 'p', text: 'A carburetor that seems clean but still runs rich means the float is waterlogged or out of adjustment — sinks too far, unseats the needle, floods the bowl. A brass float can be re-soldered; plastic floats are always replaced. A carburetor that runs lean means a jet is partially blocked or an air leak exists between carburetor and engine — spray carb cleaner on the gasket surfaces with the engine running; RPM change = leak. A chainsaw that cuts out at full throttle usually has the "H" screw set too lean, and the saw is about to seize; richen (turn counter-clockwise) a quarter turn and retest. Flooding at startup means the choke was used too long or the needle-and-seat is leaking — inspect.' },
        { type: 'h2', text: 'What to try next' },
        { type: 'p', text: 'Past basic bowl carburetors, the next rungs are diaphragm carburetors on two-stroke equipment (Walbro and Zama), complex multi-barrel carburetors on larger lawn tractors, electronic fuel injection on newer equipment, and ultrasonic-cleaning professional rebuilds. Paul Dempsey\'s book is the classroom text for the trade; donyboy73 and Steve\'s Small Engine Saloon are the best free video resources. A career path exists in professional equipment-equipment-repair shops, mower dealers, and rural service operations.' },
      ],

      keyTerms: ['float bowl', 'main jet', 'pilot jet', 'choke', 'venturi', 'needle and seat', 'idle mixture screw', 'accelerator pump', 'diaphragm carburetor', 'Walbro'],

      scaffolding: {
        mentalModel: {
          analogy: 'A carburetor is a perfume atomizer that happens to feed an engine. Bernoulli\'s principle: air through a narrow throat drops pressure; fuel is pushed from a bowl into the airstream, atomizing on the way. No electronics; just moving air and calibrated holes.',
          whereItBreaks: 'Fails on modern fuel-injected small engines (Honda GX390 EFI, newer Kohler Courage). Also does not capture altitude compensation — a carburetor runs rich at high altitude because air density drops while jet size is fixed.',
        },
        workedExample: {
          prompt: 'A gas lawn mower will not start after sitting all winter. Gas is old, carburetor suspected.',
          scenario: 'Push mower with a Briggs & Stratton engine, float-bowl carburetor.',
          steps: [
            { step: 'Drain the tank into a jar; inspect and smell the fuel.', why: 'Varnished, fishy-smelling fuel confirms the problem starts with the carburetor being sticky.' },
            { step: 'Remove air filter, choke linkage, throttle linkage, and mounting screws. Pull the carb off.', why: 'Noting linkage positions now avoids confusion at reassembly.' },
            { step: 'Drain the float bowl; clean with carb cleaner.', why: 'Varnish in the bowl is the first layer; jets are inside.' },
            { step: 'Remove float, needle, seat. Blow through the main and pilot jets; run a fine wire through each.', why: 'Blocked jets are the specific fault; physical clearing restores flow.' },
            { step: 'Install rebuild kit: new gaskets, fresh needle-and-seat, sometimes new float.', why: 'Ten-dollar kit replaces everything that wears.' },
            { step: 'Reassemble with bowl gasket seated properly; reinstall on engine.', why: 'A pinched bowl gasket is the #1 cause of post-rebuild leaks.' },
            { step: 'Fill with fresh gas + STA-BIL; prime; pull. Tune idle screw if rough.', why: 'Fresh fuel plus clean carb equals running engine. Stabilizer extends fuel life if the mower will sit again.' },
          ],
          result: 'Engine running in 45 minutes. Cost: $10 rebuild kit, $6 fresh gas. Saved $120 shop-minimum repair charge.',
        },
        exercises: [
          { level: 'beginner', prompt: 'Identify the carburetor on a small engine. Find the float bowl (round dome at bottom) or the diaphragm cover (flat cover on a two-stroke).', hint: 'The carburetor sits between the air filter and the engine block.', solution: 'On four-stroke engines (mowers, generators, tillers): look for a round metal bowl at the bottom of the carburetor. On two-stroke engines (chainsaws, trimmers, leaf blowers): look for a flat cover with a diaphragm underneath. Both carburetors have a choke lever on top, a throttle connection, and a fuel inlet.' },
          { level: 'beginner', prompt: 'Drain old fuel from a stored lawn mower. Let it sit in a jar for a minute. What does fresh versus old fuel look and smell like?', hint: 'Old gas changes color and smell.', solution: 'Fresh gasoline is clear or pale yellow and smells sharp. Old gasoline (> 60 days in a vented tank) is yellow-to-brown and smells sour, slightly fishy or shellac-like. If the fuel in the tank is old, the carburetor is almost certainly varnished and needs cleaning. Discard old fuel at a hazardous-waste collection point.' },
          { level: 'intermediate', prompt: 'You rebuild a carburetor and reinstall it. The engine starts but runs rough and black smoke comes out of the exhaust. What is likely wrong?', hint: 'Too much fuel for the air.', solution: 'Either the choke is stuck closed (check the choke linkage — should fully open at run position), the float is set too high (flooding the bowl), or the needle-and-seat are leaking. Confirm choke first — it\'s the easiest. Then drop the bowl and inspect float level against the manufacturer spec. If both are correct, replace the needle-and-seat.' },
          { level: 'intermediate', prompt: 'A chainsaw cuts wood fine at full throttle but bogs down when you let off the trigger. What is the mixture problem, and which screw do you adjust?', hint: 'Think about idle and transition circuits.', solution: 'This is a lean idle problem — the "L" (low-speed) mixture is too lean, so when the throttle closes the engine starves. Turn the L screw counter-clockwise (richer) in 1/8-turn increments until the engine returns to idle smoothly. If the H (high-speed) screw is the issue, the symptom would appear at full throttle — make sure you understand which circuit governs which RPM range.' },
          { level: 'advanced', prompt: 'A rebuilt Walbro diaphragm carburetor runs for ten seconds and dies. Rebuilt the same way as a float-bowl carb. What might be different?', hint: 'Diaphragm carbs have specific orientation and test requirements.', solution: 'Common diaphragm-carb rebuild mistakes: (1) diaphragm installed upside down — the stamped "UP" must face up; (2) metering lever height not set to spec with a depth gauge (varies by model, often 0.060"); (3) pulse line (the tube connecting carb to crankcase) cracked or disconnected — without crankcase pulse pressure, the diaphragm pump cannot move fuel; (4) pop-off pressure not tested (should hold 10+ psi for 10 seconds on a test bench). Diaphragm carbs need a Mityvac-style tester and a service manual — they do not forgive guesswork.' },
        ],
        troubleshooting: [
          { symptom: 'Engine will not start', likelyCauses: ['Bad fuel', 'Clogged jet', 'No spark', 'No compression'], quickTest: 'Spark test, drain fuel, quick carb bowl clean.', fix: 'Fresh fuel; jet cleaning; plug replacement; compression test if needed.' },
          { symptom: 'Engine starts but dies quickly', likelyCauses: ['Float stuck', 'Idle jet partially clogged', 'Fuel cap not venting'], quickTest: 'Loosen fuel cap; does engine keep running?', fix: 'Clean vent in fuel cap; remove and clean idle jet; free the float.' },
          { symptom: 'Runs rough, black smoke', likelyCauses: ['Stuck choke', 'Float too high', 'Leaking needle-and-seat'], quickTest: 'Check choke linkage; drop bowl and inspect float.', fix: 'Free choke; adjust float level; replace needle-and-seat.' },
          { symptom: 'Runs lean, stalls under load', likelyCauses: ['Clogged main jet', 'Air leak at intake gasket', 'Low fuel pressure'], quickTest: 'Spray carb cleaner on gasket faces with engine running.', fix: 'Clean main jet; replace intake gasket; inspect fuel filter.' },
          { symptom: 'Chainsaw cuts fine but bogs at idle', likelyCauses: ['L mixture screw too lean'], quickTest: 'Richen L 1/8 turn; re-test.', fix: 'Dial in L until idle transition is smooth.' },
          { symptom: 'Chainsaw screams at full throttle, no power', likelyCauses: ['H mixture too lean (dangerous — can seize engine)'], quickTest: 'Richen H immediately.', fix: 'Never run a two-stroke lean at WOT; always err rich.' },
          { symptom: 'Fuel leaks out of bowl vent', likelyCauses: ['Float stuck high', 'Needle-and-seat failed', 'Float waterlogged'], quickTest: 'Tap float bowl gently; does leaking stop?', fix: 'Replace float and needle-and-seat; drain and reassemble.' },
          { symptom: 'Hard starting after rebuild', likelyCauses: ['Wrong float level', 'Gasket pinched', 'Linkage not returned to position'], quickTest: 'Verify reassembly against shop notes or online diagrams.', fix: 'Re-check float height; re-seat gaskets; verify linkage.' },
        ],
        progression: [
          { level: 'novice', canDo: 'Identify a carburetor; drain old fuel; change a spark plug.', shouldNext: 'Remove and reinstall a float bowl; clean a visible jet; learn the tools.' },
          { level: 'apprentice', canDo: 'Rebuild a float-bowl carburetor; diagnose starting problems; tune idle mixture.', shouldNext: 'Diaphragm carburetors on two-stroke equipment; ultrasonic cleaning; multiple-brand service.' },
          { level: 'journeyman', canDo: 'Service any small-engine carburetor; advise on fuel storage and stabilization; run a small shop.', shouldNext: 'Fuel injection on newer equipment; EETC certification; specialty work (vintage, competitive karting, outdoor power equipment dealerships).' },
        ],
        glossary: [
          { term: 'Float bowl', def: 'The reservoir at the bottom of a gravity-fed carburetor. Fuel is held in the bowl at constant level by the float and needle-and-seat.' },
          { term: 'Main jet', def: 'A calibrated brass fitting that meters fuel at running RPM. Replaceable; different sizes for altitude or performance.' },
          { term: 'Pilot jet', def: 'A smaller calibrated fitting for idle and low-speed operation. Often a replacement target during rebuild.' },
          { term: 'Choke', def: 'A butterfly valve that restricts airflow for cold starts, enriching the mixture. Usually a lever or knob on the engine.' },
          { term: 'Venturi', def: 'The narrow throat of the carburetor where air speeds up and pressure drops, drawing fuel into the airstream.' },
          { term: 'Diaphragm carburetor', def: 'A carburetor using a flexible diaphragm pumped by crankcase pressure instead of a gravity-fed float bowl. Used on two-stroke equipment that operates at any angle.' },
          { term: 'Pop-off pressure', def: 'The pressure at which the metering lever and needle unseat in a diaphragm carburetor. Tested with a Mityvac-style gauge; spec is 10+ psi typically.' },
        ],
      },

      resources: {
        videos: [
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@donyboy73', title: 'donyboy73 — small engine carburetor rebuilds', channel: 'donyboy73', duration: 'variable', kind: 'shop', why: 'Don, a Canadian small-engine mechanic, films careful carburetor teardowns.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@stevessmallenginesaloon', title: 'Steve\'s Small Engine Saloon — carburetor troubleshooting', channel: 'Steve\'s Small Engine Saloon', duration: 'variable', kind: 'tutorial', why: 'Steve Mellows films family-and-friends repairs on his kitchen workbench.' },
          { id: null, source: 'other', url: 'https://www.briggsandstratton.com/na/en_us/support/videos/browse/4-stroke-theory.html', title: 'How a 4-Stroke Engine Works', channel: 'Briggs & Stratton', duration: 'variable', kind: 'animation', why: 'The manufacturer\'s own official animated explainer.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@ProjectFarm', title: 'Project Farm — fuel stabilizer and ethanol tests', channel: 'Project Farm', duration: 'variable', kind: 'documentary', why: 'Todd runs brutal comparison tests of fuel stabilizers and carb cleaners.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@TaryInc', title: 'Taryl Fixes All — small engine repair (entertaining)', channel: 'Taryl Fixes All', duration: 'variable', kind: 'shop', why: 'A Pennsylvania small-engine shop that films in full character.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@ChickanicMotoSports', title: 'Chickanic — small engine repair', channel: 'Chickanic', duration: 'variable', kind: 'shop', why: 'Bre, a working small-engine mechanic, films her shop work.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@Lesics', title: 'Lesics — how a carburetor works (animated)', channel: 'Lesics', duration: 'variable', kind: 'animation', why: '3D animation of the Venturi, float, and jets.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@TheEngineeringMindset', title: 'The Engineering Mindset — fuel systems animated', channel: 'The Engineering Mindset', duration: 'variable', kind: 'animation', why: 'Paul Evans animates fuel pumps, carburetors, and injection systems.', collapsed: true },
        ],
        books: [
          { title: 'Small Gas Engine Repair', author: 'Paul Dempsey', year: 2016, url: 'https://archive.org/details/smallgasenginere00demp', why: 'The McGraw-Hill classic.' },
          { title: 'How to Repair Briggs & Stratton Engines', author: 'Paul Dempsey', year: 2008, url: 'https://www.worldcat.org/title/how-to-repair-briggs-stratton-engines/oclc/191865681', why: 'The companion volume, narrower in scope.' },
          { title: 'How to Keep Your Volkswagen Alive', author: 'John Muir', year: 1969, url: 'https://archive.org/details/howtokeepyourvol00muir', why: 'Muir\'s carburetor chapters teach mechanical intuition.' },
          { title: 'Chain Saw Service Manual', author: 'Penton Staff / Clymer', year: 2013, url: 'https://www.worldcat.org/title/chain-saw-service-manual/oclc/882114998', why: 'The standard two-stroke service manual.' },
          { title: 'Small Engines and Outdoor Power Equipment', author: 'Kevin Jernigan, Editors of Cool Springs Press', year: 2015, url: 'https://www.quartoknows.com/books/9781591866107/Small-Engines-and-Outdoor-Power-Equipment.html', why: 'The homeowner-scale illustrated bible.' },
        ],
        articles: [
          { title: 'Carburetor', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Carburetor', why: 'Featured-length article.', year: null },
          { title: 'Carburetor', source: 'Britannica', url: 'https://www.britannica.com/technology/carburetor', why: 'Editorial short form.', year: null },
          { title: 'Two-stroke engine', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Two-stroke_engine', why: 'Many small-engine carburetors feed two-stroke engines.', year: null },
          { title: 'Walbro (company and carburetor range)', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Walbro', why: 'The company whose diaphragm carburetors sit in most American chainsaws.', year: null },
        ],
        courses: [
          { title: 'Briggs & Stratton 4-Cycle Theory video library', provider: 'Briggs & Stratton', url: 'https://www.briggsandstratton.com/na/en_us/support/videos/browse/4-stroke-theory.html', free: true, why: 'The manufacturer\'s own free curriculum.' },
          { title: 'OPE Engine Service school (EETC certification)', provider: 'Equipment & Engine Training Council', url: 'https://www.eetc.org/', free: false, why: 'The North American professional credential for outdoor power equipment technicians.' },
        ],
        tools: [
          { title: 'Carburetor rebuild kit (engine-specific)', url: 'https://en.wikipedia.org/wiki/Carburetor', why: 'Ten dollars of gaskets and seals.' },
          { title: 'Ultrasonic cleaner', url: 'https://en.wikipedia.org/wiki/Ultrasonic_cleaning', why: 'The modern replacement for an overnight soak in carb cleaner.' },
          { title: 'Stihl splined carburetor adjustment tool', url: 'https://www.stihlusa.com/', why: 'The non-negotiable tool for two-stroke power equipment.' },
          { title: 'Carb jet cleaning wires (0.010" to 0.030")', url: 'https://en.wikipedia.org/wiki/Jet_(fluid)', why: 'A set of six or eight fine stainless wires.' },
        ],
        primarySources: [
          { title: 'Karl Benz\'s 1888 carburetor patent', url: 'https://en.wikipedia.org/wiki/Karl_Benz', why: 'The patent that gave the automobile its first practical carburetor.' },
        ],
      },

      seeAlso: ['tuneup', 'engine_basics', 'diag'],
      prereqs: [],
      leadsTo: ['tuneup'],
      chapterActivity: 'Spring tune-up day at a community garden in Sunnyside — bring your rusty mower, leave with a carburetor you rebuilt yourself.',
      sources: [
        'https://en.wikipedia.org/wiki/Carburetor',
        'https://www.britannica.com/technology/carburetor',
        'https://en.wikipedia.org/wiki/Two-stroke_engine',
        'https://en.wikipedia.org/wiki/Walbro',
      ],
      verifiedAt: '2026-04-23',
    },

    tuneup: {
      id: 'tuneup',
      name: 'Tune-Ups',
      level: 'Beginner',
      dek: 'Spark, fuel, air — the three-legged stool every small engine stands on, and the one the owner can keep level themselves.',
      readTime: '17 min',

      sections: ['Three things an engine needs', 'The spring ritual', 'Sharpening the blade, which counts as maintenance', 'Why the Stihl survives a decade of abuse', 'Reading a spark plug', 'How to think about it', 'Work through one', 'Try these', 'When it goes wrong', 'What to try next'],
      body: [
        { type: 'lead', text: 'On the first warm Saturday in April, in any American suburb, a particular sound drifts over the backyard fences: a pull-cord rope, yanked and yanked again by a man who is hoping this is the year his mower starts on the first try. It rarely is. The cure is not a new mower. It is a two-hour sitting-on-the-driveway tune-up — the same one grandfathers did for sixty years, with the same three components the engine needs and nothing more mysterious than a spark plug wrench.' },
        { type: 'h2', text: 'Three things an engine needs' },
        { type: 'p', text: 'A small four-stroke engine needs spark, fuel, and air. A spark plug fires at the right moment. Clean fuel reaches the carburetor. Clean air reaches the intake. If all three are present, the engine runs. If even one is missing or wrong, nothing happens. The whole of small-engine troubleshooting is figuring out, in a sensible order, which leg of the stool has gone bad. A spring tune-up restores all three preemptively, which is why it works.' },
        { type: 'h2', text: 'The spring ritual' },
        { type: 'p', text: 'Pull the spark plug, read it, and replace it — a new one costs two dollars, and a black or oily old plug tells you something the new plug will also reveal next year. Drain the old fuel from the tank into a jar; if it smells like varnish, it is varnish. Fill with fresh gasoline stabilized for storage. Pop the air-filter housing and either blow out a foam element or replace a paper one. Drain the oil from the sump, refill to the mark on the dipstick with fresh SAE 30 or 10W-30. Check the blade. Start the engine. Listen for a clean idle. The whole job takes an hour and a half on a push mower, longer on a riding tractor, and it prevents almost every common failure the homeowner-repair forums complain about.' },
        { type: 'h2', text: 'Sharpening the blade, which counts as maintenance' },
        { type: 'p', text: 'A dull mower blade does not cut grass; it tears grass. The tear leaves the torn tip brown and the lawn looking yellow from the street. A sharp blade leaves a clean green cut. Blades are sharpened once a season with a bench grinder and a file, or swapped for a new one for twelve dollars at a hardware store. This is the one maintenance item even careful owners forget, and the one that makes the most visible difference in the lawn itself. Chainsaws have the same problem on a shorter timescale: a fresh chain makes a chainsaw feel like a new tool.' },
        { type: 'h2', text: 'Why the Stihl survives a decade of abuse' },
        { type: 'p', text: 'The Stihl chainsaw, the Honda lawn-and-garden engine, the Kohler Command on a riding mower — these are the machines in the folklore of every suburb, famous for starting on the third pull after a decade sitting in a shed. The secret is not just good manufacturing; it is that their owners tend to know about fuel stabilizer, about running the carburetor dry at the end of the season, about storing with fresh oil. The machines are worthy of the attention. A neglected Stihl dies as fast as any other small engine. A tuned one lasts a working life.' },
        { type: 'h2', text: 'Reading a spark plug' },
        { type: 'p', text: 'The spark plug is an engine\'s diary. A healthy plug comes out with a light tan deposit on the electrode — the color of milk-coffee — indicating clean, complete combustion. A plug crusted with black, dry carbon indicates a rich mixture or a stuck choke. An oily black plug indicates oil is getting into the combustion chamber, either past worn rings or past bad valve seals. A white or chalky plug indicates a lean mixture or an air leak, sometimes a cooling problem. A plug with the electrode burned round indicates detonation, usually from the wrong heat range or bad fuel. Ten seconds looking at an old plug will tell a careful mechanic most of what there is to know about the engine below it.' },
        { type: 'callout', text: 'Ethanol is the great enemy of small engines. Ten percent ethanol gasoline — the standard pump blend in the United States — absorbs water and corrodes carburetor bodies over a storage winter. Real-gas stations or canned ethanol-free fuel are worth the surcharge for any engine that sits for more than a month.' },
        { type: 'quote', text: 'If it starts on the first pull in April, you did the tune-up right in October.', cite: 'Small-engine shop proverb' },

        { type: 'h2', text: 'How to think about it' },
        { type: 'p', text: 'A tune-up is giving the engine clean examples of each of the three things it wants: clean air, clean fuel, and strong spark. Each one has a consumable part that represents it — air filter, fuel in the tank, spark plug. Replace or refresh the consumables and the engine has no excuse for running poorly. This is why the spring tune-up is a ritual rather than a diagnosis: you are restoring the engine\'s inputs to known-good, which eliminates three out of four possible failure modes in a single morning. If the engine still misbehaves afterward, the fault is not in the inputs; it is in the engine itself, and that is a different afternoon.' },
        { type: 'h2', text: 'Work through one' },
        { type: 'p', text: 'A typical push-mower spring tune-up, thirty minutes of actual work. Step one: warm the engine by running it briefly, then shut off and drain the oil while warm — pulled plug, tipped mower onto its side (carburetor up, always), oil flows into a pan. Step two: refill with fresh SAE 30 to the full mark on the dipstick. Step three: remove the air filter — foam gets soap-washed and re-oiled, paper gets thrown away and replaced. Step four: pull the spark plug with a socket; inspect the color; gap a new plug to 0.030" (or manufacturer spec) and install. Step five: drain the old fuel (don\'t forget the carburetor bowl) and refill with fresh gasoline plus STA-BIL. Step six: sharpen or replace the blade. Step seven: pull the starter cord; the engine should start in one or two pulls. Tune the idle screw if needed. Total: thirty minutes; the mower is now good for the season.' },
        { type: 'h2', text: 'Try these' },
        { type: 'p', text: 'First: remove the spark plug from a small engine in your life. Read it against the standard color chart (easily findable on NGK or Autolite\'s sites). What did the engine tell you about how it has been running? Second: perform a compression test on the same engine — a thirty-dollar gauge, screwed into the plug hole, reads the cylinder\'s pressure at full crank. A healthy four-stroke small engine reads 90–120 psi; below 60 means worn rings or valves. Third: time yourself doing a full spring tune-up on a cooperative small engine. First time: an hour. Third time: under thirty minutes, with fewer tools needed each round.' },
        { type: 'h2', text: 'When it goes wrong' },
        { type: 'p', text: 'An engine that will not start after a tune-up has had something broken, not fixed. The most common mistake is the fuel cut-off — many mowers have a valve between tank and carburetor that a tune-up can leave closed. Second is the spark plug not torqued firmly (loose plug = no compression in that cylinder). Third is the air filter installed upside-down or incorrectly seated, starving the engine of air. Fourth is over-filling the oil — above the dipstick max foams the oil and the engine cannot lubricate. Fifth is fuel stale before you got to it; drain and refill with truly fresh gas. If none of those: test spark (remove plug, ground to block, crank, look for spark), test fuel delivery (prime or choke, observe), test compression. One of the three will be failing.' },
        { type: 'h2', text: 'What to try next' },
        { type: 'p', text: 'Past the spring tune-up, the next rungs are full service on four-stroke engines (valve clearance adjustment, governor adjustment, carburetor rebuild), chainsaw service (chain maintenance, clutch and bearing wear, two-stroke carb tuning), riding mower service (deck leveling, belt replacement, hydro transmission fluid), and winter storage protocols (proper shutdown, stabilizer dosage, plug preservation). Paul Dempsey\'s book is the full curriculum. EETC certification is the professional path.' },
      ],

      keyTerms: ['spark plug', 'air filter', 'fuel stabilizer', 'oil viscosity', 'gap', 'compression test', 'ignition coil', 'blade sharpening', 'flywheel key', 'primer bulb'],

      scaffolding: {
        mentalModel: {
          analogy: 'A tune-up is giving the engine clean examples of each of the three things it wants: clean air, clean fuel, strong spark. Replace or refresh the consumables that represent each — filter, gasoline, plug — and the engine has no excuse for running badly.',
          whereItBreaks: 'The analogy breaks for fuel-injected small engines (newer Honda GX EFI), where ECU faults cannot be fixed by consumables. It also understates storage protocols — running a carb dry before winter is often more important than spring prep.',
        },
        workedExample: {
          prompt: 'Perform a spring tune-up on a typical push mower with a Briggs & Stratton four-stroke.',
          scenario: 'Mower sat all winter; last fall\'s fuel still in the tank.',
          steps: [
            { step: 'Run the engine briefly to warm the oil, or warm in sun.', why: 'Warm oil flows more completely from the sump.' },
            { step: 'Tip mower carburetor-up; drain oil through the plug or dipstick tube into a pan.', why: 'Wrong-side tilting floods the carburetor or fouls the plug.' },
            { step: 'Refill with fresh SAE 30 or 10W-30 to the dipstick full mark. Do not overfill.', why: 'Over-fill foams oil and blocks crankcase breather; can damage the engine.' },
            { step: 'Pull and read the spark plug. Gap new plug to manufacturer spec (often 0.030"). Install with correct torque.', why: 'Worn plugs misfire; too-tight plugs strip threads; too-loose plugs lose compression.' },
            { step: 'Replace or clean air filter. Foam: wash with soap, dry, re-oil lightly. Paper: throw out, install new.', why: 'A clogged filter chokes the engine and fouls the plug over time.' },
            { step: 'Drain old fuel from tank and carburetor bowl. Refill with fresh gasoline + fuel stabilizer.', why: 'Ethanol-blended fuel goes bad in 60 days; stabilizer extends to 12 months.' },
            { step: 'Sharpen or replace the blade. Balance with a cone balancer after sharpening.', why: 'Dull blade tears rather than cuts; unbalanced blade vibrates and wears the engine.' },
            { step: 'Pull the cord. Engine should start in 1–3 pulls. Let it run, then tune the idle adjustment if rough.', why: 'Fresh inputs = prompt start. If it does not start, the fault is deeper.' },
          ],
          result: 'Thirty minutes, $15 in parts, mower runs like new for another season.',
        },
        exercises: [
          { level: 'beginner', prompt: 'Remove the spark plug from a small engine. Compare its color and condition to an NGK spark plug reading chart (free online). What does the plug tell you?', hint: 'Light tan = healthy; black dry = rich; black oily = oil burning; white = lean.', solution: 'Reading plugs is a 30-year skill compressed into 10 seconds. Light tan coffee-with-cream color means complete combustion. Black wet/oily means oil is getting into the combustion chamber (valve seals, rings, or head gasket). Black dry sooty means rich mixture (stuck choke, dirty air filter, bad carburetor). White or chalky means lean mixture (air leak, clogged jet, wrong heat-range plug). Dark shiny glaze means lead fouling (rare now). Electrode burnt round means severe detonation.' },
          { level: 'beginner', prompt: 'Sharpen a dull mower blade using a file or bench grinder. How do you tell when it is sharp enough?', hint: 'Sharpen, not razor-sharp.', solution: 'A mower blade should be sharp enough to cut paper with moderate pressure — not razor-sharp. Sharpening angle matches the factory bevel (usually 30°). After sharpening, balance the blade on a blade balancer (a cone) — if one end drops, grind material off that side. An unbalanced blade vibrates the engine and wears the crankshaft bearing.' },
          { level: 'intermediate', prompt: 'A mower ran fine last fall; after a spring tune-up including new plug, fresh oil, fresh fuel, it will not start. What do you check first?', hint: 'Something the tune-up did.', solution: 'Check what the tune-up might have disturbed: (1) fuel shut-off valve — many mowers have one; ensure it is open; (2) spark plug torque and the plug wire properly seated; (3) air filter correctly installed and not blocking airflow; (4) oil level not overfilled (can shut off the engine via low-oil sensor if foamed). If none of those, test spark and fuel delivery separately.' },
          { level: 'intermediate', prompt: 'A chainsaw that ran fine last fall will not start this spring. You confirmed fresh fuel and new spark plug. What is the most likely cause?', hint: 'Two-stroke carburetors suffer more than four-stroke.', solution: 'Diaphragm carburetor on the chainsaw is almost certainly varnished. The diaphragm itself may be stiff. Remove the carb, disassemble, clean in carb cleaner, install a rebuild kit with new diaphragm. Alternatively, try a primer bulb — on many saws, pumping the primer is faster than a cold-start procedure and will reveal if fuel is reaching the carburetor. If primer stays flat, the fuel line or pickup is the problem.' },
          { level: 'advanced', prompt: 'You run a small-engine shop. A customer brings back a mower that ran fine for a week after tune-up, then quit. Symptoms: no spark. The ignition coil tests within spec cold. What might be happening?', hint: 'Thermal failure of electronics.', solution: 'The ignition coil is failing when hot. Many cheap imported coils fail this way — they test fine cold (resistance in spec) but fail to fire when the engine is near operating temperature. Test by running the engine to warm, then killing and immediately checking spark. If no spark hot, replace with a known-good coil (often OEM rather than aftermarket). Also check for flywheel key integrity — a sheared key will change timing and cause no-start after heat.' },
        ],
        troubleshooting: [
          { symptom: 'Will not start, no spark', likelyCauses: ['Bad plug', 'Failed coil', 'Sheared flywheel key', 'Safety switch open (riding mowers)'], quickTest: 'Test spark at plug; check kill switch; verify seat-safety circuit on riders.', fix: 'New plug, test coil resistance, inspect flywheel key, verify switch contact.' },
          { symptom: 'Will not start, has spark', likelyCauses: ['No fuel to carb', 'Carburetor varnished', 'Low compression'], quickTest: 'Prime or choke and observe; pull plug, squirt a teaspoon of fuel in, try again.', fix: 'If the fuel squirt makes it start and die, confirm fuel-delivery problem. If no start with fuel in cylinder, compression test.' },
          { symptom: 'Starts, dies immediately', likelyCauses: ['Choke stuck closed (flooded)', 'Stuck idle circuit', 'Tank vent blocked'], quickTest: 'Loosen fuel cap; does engine run longer?', fix: 'Free choke; clean idle jet; clear tank vent.' },
          { symptom: 'Runs but surges at idle', likelyCauses: ['Clogged idle circuit', 'Air leak at carb-to-engine gasket'], quickTest: 'Spray carb cleaner at gasket faces; RPM change = leak.', fix: 'Replace intake gasket; clean or rebuild carb idle circuit.' },
          { symptom: 'Runs rough under load, dies', likelyCauses: ['Main jet restricted', 'Fuel filter clogged', 'Low fuel pump pressure (diaphragm carbs)'], quickTest: 'Inspect fuel filter; observe carb bowl level.', fix: 'New fuel filter; rebuild carb; check tank pickup.' },
          { symptom: 'Hard to start hot', likelyCauses: ['Vapor lock', 'Worn coil (thermal failure)', 'Needle-and-seat leaking (flooding hot)'], quickTest: 'Let cool and retry; meanwhile test spark when hot.', fix: 'Replace coil; replace needle-and-seat.' },
          { symptom: 'Blue smoke from exhaust', likelyCauses: ['Worn rings', 'Tipped mower wrong way (oil in cylinder)', 'Worn valve seals'], quickTest: 'Let run 2-3 minutes; does smoke clear?', fix: 'If clears, oil spilled into cylinder — normal after tipping. If persistent, compression test and ring/valve evaluation.' },
          { symptom: 'Blade vibrates', likelyCauses: ['Dull or damaged blade', 'Unbalanced blade after sharpening', 'Loose blade bolt'], quickTest: 'Check blade balance on a cone.', fix: 'Rebalance; torque bolt to spec.' },
        ],
        progression: [
          { level: 'novice', canDo: 'Pull and read a spark plug; change engine oil; replace an air filter; fill with stabilized fuel.', shouldNext: 'Sharpen a blade; do a full spring tune-up on one engine.' },
          { level: 'apprentice', canDo: 'Full tune-up on four-stroke mowers and tillers; basic chainsaw service; diagnose common no-start conditions.', shouldNext: 'Learn carburetor rebuilding, valve adjustment, and two-stroke tuning.' },
          { level: 'journeyman', canDo: 'Run a small-engine shop; service any brand; tune two-strokes precisely; advise customers on storage.', shouldNext: 'EETC certification; dealer-level brand training (Husqvarna, Stihl, Honda); specialize if desired.' },
        ],
        glossary: [
          { term: 'Spark plug gap', def: 'The distance between the plug\'s center and ground electrodes. Typical small engine: 0.025–0.035". Set with a gap gauge before installing.' },
          { term: 'Fuel stabilizer', def: 'An additive that slows gasoline oxidation during storage. STA-BIL and similar products extend fuel life from 60 days to 12+ months.' },
          { term: 'Compression test', def: 'Measuring the pressure a cylinder produces when cranked. Healthy small four-stroke: 90–120 psi. Low reading indicates ring or valve wear.' },
          { term: 'Flywheel key', def: 'A small soft-metal sliver that keys the flywheel to the crankshaft. A impact (hitting a rock) shears the key and changes ignition timing.' },
          { term: 'SAE 30 vs. 10W-30', def: 'SAE 30 is a single-weight oil, SAE 10W-30 is a multigrade. Both work in most small four-strokes; manufacturer specifies.' },
          { term: 'Primer bulb', def: 'The small rubber bulb on many small engines that injects fuel directly into the carburetor bowl for cold start.' },
          { term: 'Kill switch', def: 'The grounding switch that grounds the ignition coil to stop the engine. Safety features (dead-man bail, seat switch) also ground the coil.' },
        ],
      },

      resources: {
        videos: [
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@donyboy73', title: 'donyboy73 — annual lawnmower tune-up', channel: 'donyboy73', duration: 'variable', kind: 'tutorial', why: 'Don\'s annual mower-tune-up videos are the canonical small-engine-service tutorial.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@stevessmallenginesaloon', title: 'Steve\'s Small Engine Saloon — spring start-up series', channel: 'Steve\'s Small Engine Saloon', duration: 'variable', kind: 'tutorial', why: 'Steve\'s early-season videos cover every common won\'t-start failure.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@ProjectFarm', title: 'Project Farm — small engine oil and spark plug tests', channel: 'Project Farm', duration: 'variable', kind: 'documentary', why: 'Todd runs comparisons of small-engine oils, spark plugs, and fuel additives.' },
          { id: null, source: 'other', url: 'https://www.briggsandstratton.com/na/en_us/support/videos/browse/4-stroke-theory.html', title: 'Briggs & Stratton — 4-Cycle Theory animation library', channel: 'Briggs & Stratton', duration: 'variable', kind: 'animation', why: 'The manufacturer\'s animated walkthrough.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@TaryInc', title: 'Taryl Fixes All — seasonal maintenance', channel: 'Taryl Fixes All', duration: 'variable', kind: 'shop', why: 'A Pennsylvania small-engine shop films full tune-ups.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@ChickanicMotoSports', title: 'Chickanic — small engine shop tune-ups', channel: 'Chickanic', duration: 'variable', kind: 'shop', why: 'Bre walks through service work on mowers, blowers, and trimmers.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@StihlUSA', title: 'Stihl USA — official chainsaw maintenance', channel: 'Stihl USA', duration: 'variable', kind: 'tutorial', why: 'The manufacturer\'s official service videos on chainsaw maintenance.', collapsed: true },
        ],
        books: [
          { title: 'Small Gas Engine Repair', author: 'Paul Dempsey', year: 2016, url: 'https://archive.org/details/smallgasenginere00demp', why: 'The master reference.' },
          { title: 'Chain Saw Service Manual', author: 'Penton Staff / Clymer', year: 2013, url: 'https://www.worldcat.org/title/chain-saw-service-manual/oclc/882114998', why: 'The standard two-stroke service manual.' },
          { title: 'How to Keep Your Volkswagen Alive', author: 'John Muir', year: 1969, url: 'https://archive.org/details/howtokeepyourvol00muir', why: 'Muir\'s tune-up chapters teach the attitude.' },
          { title: 'Small Engines and Outdoor Power Equipment', author: 'Kevin Jernigan, Editors of Cool Springs Press', year: 2015, url: 'https://www.quartoknows.com/books/9781591866107/Small-Engines-and-Outdoor-Power-Equipment.html', why: 'The homeowner-scale illustrated bible.' },
          { title: 'Two-Stroke Tuner\'s Handbook', author: 'Gordon Jennings', year: 1973, url: 'https://archive.org/details/TwoStrokeTunersHandbook', why: 'The sacred text of two-stroke tuning.' },
        ],
        articles: [
          { title: 'Four-stroke engine', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Four-stroke_engine', why: 'Context for how a small four-stroke works.', year: null },
          { title: 'Spark plug', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Spark_plug', why: 'What that small porcelain object does.', year: null },
          { title: 'Two-stroke engine', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Two-stroke_engine', why: 'A tune-up on a two-stroke differs from a four-stroke.', year: null },
          { title: 'NGK spark plug heat range chart', source: 'NGK', url: 'https://www.ngksparkplugs.com/en/resources/tech-tips/tech-insights', why: 'The manufacturer\'s technical library.', year: null },
        ],
        courses: [
          { title: 'Briggs & Stratton 4-Cycle Theory video library', provider: 'Briggs & Stratton', url: 'https://www.briggsandstratton.com/na/en_us/support/videos/browse/4-stroke-theory.html', free: true, why: 'The manufacturer\'s own free curriculum.' },
          { title: 'Husqvarna online product service guides', provider: 'Husqvarna', url: 'https://www.husqvarna.com/us/support/', free: true, why: 'Model-specific service guides from the Swedish manufacturer.' },
        ],
        tools: [
          { title: 'Spark plug gap gauge and wrench', url: 'https://en.wikipedia.org/wiki/Spark_plug', why: 'Five dollars. Used on every tune-up.' },
          { title: 'Bench grinder with mower-blade jig', url: 'https://en.wikipedia.org/wiki/Bench_grinder', why: 'The way most people sharpen their own blade.' },
          { title: 'Fuel stabilizer (STA-BIL or equivalent)', url: 'https://en.wikipedia.org/wiki/Gasoline', why: 'Twelve-ounce bottle keeps a tank stable through winter.' },
          { title: 'Chainsaw chain file and gauge', url: 'https://www.stihlusa.com/products/chain-saws/chains-and-bars/', why: 'A small round file and a depth-gauge keep a chain sharp.' },
          { title: 'Compression tester (with Schrader adapter)', url: 'https://en.wikipedia.org/wiki/Compression_ratio', why: 'A thirty-dollar gauge that screws into the spark-plug hole.' },
        ],
      },

      seeAlso: ['carb', 'engine_basics', 'diag'],
      prereqs: ['carb'],
      leadsTo: [],
      chapterActivity: 'March tune-up day at a Queens community garden — benches, oil pans, spark-plug sockets, and a retired Husqvarna dealer teaching newcomers.',
      sources: [
        'https://en.wikipedia.org/wiki/Four-stroke_engine',
        'https://en.wikipedia.org/wiki/Spark_plug',
        'https://en.wikipedia.org/wiki/Two-stroke_engine',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
