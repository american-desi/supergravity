// content/machining.js
// Batch: B08-trades-II
// Last updated: 2026-04-23 by Session B08 (scaffolding pass)
//
// Topics: lathe, mill, tolerances
// Each topic carries a full scaffolding block — see _issues.md.

window.CONTENT = window.CONTENT || {};
window.CONTENT.machining = {
  subjectId: 'machining',
  version: 3,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B08-trades-II',
  topics: {

    lathe: {
      id: 'lathe',
      name: 'The Lathe',
      level: 'Intermediate',
      dek: 'The oldest machine tool — and the one every machinist still measures their hand on.',
      readTime: '18 min',

      sections: ['Turning on a centerline', 'Anatomy of a machine', 'Feeds, speeds, and feel', 'A brief history of the headstock', 'Why the lathe survives', 'How to think about it', 'Work through one', 'Try these', 'When it goes wrong', 'What to try next'],
      body: [
        { type: 'lead', text: 'The earliest lathes we know of were Egyptian, about 1300 BC: two stakes driven into the ground, a cord wrapped around the workpiece, a second man pulling the cord back and forth while the first held a chisel. Four thousand years later, the basic idea is unchanged. A piece of material rotates around an axis. A tool touches it. The tool wins.' },
        { type: 'h2', text: 'Turning on a centerline' },
        { type: 'p', text: 'A lathe\'s job is to produce shapes that are round in cross-section. Almost everything you own has a few: the shaft of a motor, the legs of a table, the bolts holding your car together. The workpiece spins in a chuck; the tool, mounted rigidly on a slide, moves along the piece or into it. Move the tool along parallel to the axis and you get a cylinder. Move it perpendicular and you get a face. Move it at an angle, with a cutting tip ground to the right profile, and you get a thread. Every turned shape is one of those three motions, or a combination.' },
        { type: 'h2', text: 'Anatomy of a machine' },
        { type: 'p', text: 'The bed is the long iron spine; everything else bolts to it. The headstock sits at the left, housing the main spindle that holds and drives the work. The tailstock slides on the bed at the right, supporting the far end of long pieces or holding a drill chuck. The carriage rides between them on precisely scraped ways, carrying the toolpost across the work. The lead screw and feed rod run under the bed and turn the carriage\'s motion into tight, repeatable cuts. Learn those six words — bed, headstock, tailstock, carriage, lead screw, feed rod — and you can read almost any lathe in any language.' },
        { type: 'h2', text: 'Feeds, speeds, and feel' },
        { type: 'p', text: 'Cutting speed is the speed of the work past the tool, measured at the tool tip in surface feet per minute. Feed is how fast the tool advances along the piece, in thousandths of an inch per revolution. The right numbers depend on the material, the tool, and how rigid the whole setup is — but a machinist with an hour of practice can hear when it is wrong. A proper cut makes a continuous chip and a steady tone. A bad cut chatters, squeals, or tears. The machine tells you. Your job is to listen before you reach for the handwheel.' },
        { type: 'h2', text: 'A brief history of the headstock' },
        { type: 'p', text: 'In 1751, in a shop in Marseille, the French shipwright Jacques de Vaucanson built a metal-cutting lathe with a rigid iron frame instead of the wooden one used until then. In 1775, John Wilkinson in England built a lathe capable of boring a cast-iron cylinder accurately enough for a Boulton & Watt steam engine — the cylinder James Watt had been unable to find anywhere else. In 1797, Henry Maudslay added a lead screw and slide rest and made the lathe into the machine we recognize today. Maudslay\'s apprentices, Joseph Whitworth and James Nasmyth among them, turned the rest of industrial Britain into a working machine shop.' },
        { type: 'h2', text: 'Why the lathe survives' },
        { type: 'p', text: 'Industry moved to CNC decades ago. And yet every serious shop still keeps a manual engine lathe at the end of the row, with a bar of brass clamped in it and a toolbit ground by hand. CNC is faster for fifty parts. For one part, for a prototype, for a repair that nobody anticipated, nothing beats a human with a handwheel and forty years of calluses. The lathe survives because the simplest problems are still the ones a factory cannot solve.' },
        { type: 'quote', text: 'He that can turn well will never starve.', cite: 'English workshop proverb, nineteenth century' },
        { type: 'callout', text: 'The tool that defines the trade is the Starrett 0–1" micrometer — reads to a ten-thousandth on a good day, lasts a career if dropped rarely, and the first precision tool most machinists buy themselves.' },

        { type: 'h2', text: 'How to think about it' },
        { type: 'p', text: 'A lathe is a single-point chisel attacking a spinning log. The work does the moving; the tool stands still and guides the cut. Every decision a machinist makes collapses to three questions: how fast should the work spin (surface speed), how fast should the tool travel (feed), and how deep should the cut go (depth). Read those three variables correctly for the material at hand and the lathe rewards you with a continuous curly chip and a shiny surface. Read them wrong and you get a screaming tool, a torn finish, and a broken tip. The craft is in learning to read them without calculation.' },
        { type: 'h2', text: 'Work through one' },
        { type: 'p', text: 'A machinist is handed a piece of 1018 cold-rolled steel, one inch diameter by six inches long, and asked to turn a section to 0.750" diameter for three inches, with a +0.000/-0.002" tolerance. She faces the end to remove the saw mark, spots the center, supports the tail with a live center. She picks a speed chart: 1018 at a depth of 0.050" with a carbide insert wants about 120 SFM, which on a 1.000" bar is 460 RPM. She feeds at 0.008" per revolution. She takes three roughing passes of 0.040" depth each, leaving 0.010" for finishing. She changes to a finishing insert with a smaller nose radius, takes a 0.005" cut, measures with a micrometer, and sneaks up on 0.750" in two more passes. Total time at the lathe: twelve minutes. Total time reading the print, checking stock, setting up the tool: twenty-five minutes. Lathe work is mostly setup.' },
        { type: 'h2', text: 'Try these' },
        { type: 'p', text: 'First: with a piece of scrap round stock, practice facing — the operation of cutting the end square. Feed from the outside edge toward the center, take a light cut, and listen for the tone. Second: practice parallel turning — move the carriage along the length while the tool removes a thin shaving. Measure with a caliper at the start and end of your pass. A difference of more than two thousandths tells you the tailstock is not aligned with the headstock. Third: grind your own HSS toolbit from a blank. The geometry — side rake, back rake, front relief, side relief — takes an hour to learn and reveals more about cutting than any textbook can.' },
        { type: 'h2', text: 'When it goes wrong' },
        { type: 'p', text: 'Chatter is the most common lathe sin — a machine-gun stuttering as the work tries to vibrate out of the chuck. The causes in order of likelihood: tool hanging out too far from the post, insufficient work support, wrong speed, dull tool, chuck too loose. Cut the tool stickout in half, add a tailstock center, and the chatter usually disappears. Taper — a part that measures larger at one end than the other — means the tailstock is offset, the ways are worn, or the compound is unlocked. Torn surface finish means the tool is too dull or the speed is too low. Blue or purple chips mean you are cutting too fast; silver chips are just right; long stringy chips around the chuck are a safety hazard and a sign of too slow a feed.' },
        { type: 'h2', text: 'What to try next' },
        { type: 'p', text: 'Past simple turning, the next rungs are threading (cutting a precise helix with a pointed tool and a lead screw), boring (enlarging a hole to size with an inside tool), taper turning (using a taper attachment or the compound slide), and knurling (impressing a grip pattern with a hardened wheel). The craft ceiling is visible on Clickspring\'s channel, where a single clock component is turned from raw brass over three episodes, and in Stefan Gotteswinter\'s videos, where a home shop holds tolerances tighter than many factories. Every one of those skills starts with a good roughing cut on a piece of scrap.' },
      ],

      keyTerms: ['chuck', 'headstock', 'tailstock', 'carriage', 'tool post', 'cutting speed', 'feed rate', 'lead screw', 'slide rest', 'four-jaw chuck'],

      scaffolding: {
        mentalModel: {
          analogy: 'A lathe is a single-point chisel attacking a spinning log. Three variables govern every cut — speed, feed, and depth. Read them right and the chip curls, the tone holds, and the surface shines.',
          whereItBreaks: 'The analogy breaks for multi-tooth operations (knurling, live-tool turn-mill) and for interrupted cuts (castings with voids). Those require a different mental model closer to milling.',
        },
        workedExample: {
          prompt: 'Turn a 1.000" dia. 1018 steel bar down to a 0.750" +0.000/-0.002" diameter over three inches of length.',
          scenario: 'Carbide insert tooling on a 12x36 manual lathe, work held in a three-jaw chuck with tailstock support.',
          steps: [
            { step: 'Face the end and center-drill for a live center.', why: 'The live center prevents deflection at the tailstock end. Without it, the part tapers.' },
            { step: 'Pick speed: 1018 at 120 SFM with carbide. On 1.000" stock, SFM / (π × dia) × 12 = 460 RPM.', why: 'Speed chart is in surface feet per minute; RPM depends on current diameter.' },
            { step: 'Rough at 0.040" depth per pass, feed 0.008"/rev, leave 0.010" for finishing.', why: 'Heavy rough cuts are efficient; a finishing allowance gives the last pass clean stock to work.' },
            { step: 'Switch to a finishing insert, 0.005" depth, reduce feed to 0.004"/rev.', why: 'A smaller nose radius and lighter feed produce a better surface. Reduces heat and deflection.' },
            { step: 'Sneak up on 0.750" — take a 0.005" cut, measure, then take the final 0.0025" to land within tolerance.', why: 'Final sizing is always iterative. Measuring between passes guarantees you do not overshoot.' },
          ],
          result: 'Final diameter 0.749", length 3.00". Well inside the +0.000/-0.002" band. Total setup plus cutting: 35–40 minutes.',
        },
        exercises: [
          {
            level: 'beginner',
            prompt: 'Face the end of a piece of scrap bar stock square. What tells you the end is actually square, not just shiny?',
            hint: 'Use an indicator or a known-flat surface.',
            solution: 'Put the faced end against a surface plate or an indicator; rotate the bar by hand. A square face shows zero movement across the face as the bar turns. A dished or crowned face shows a dial-indicator reading change.',
          },
          {
            level: 'beginner',
            prompt: 'Turn a section of bar stock to a target diameter. The first measurement reads 0.010" oversize. The second reads 0.008". The third reads 0.006". What is happening?',
            hint: 'Each pass removes less material than commanded.',
            solution: 'The tool, the toolpost, the cross-slide screw, and the work itself are all springing slightly under cutting force. This is spring-cut behavior. Take a pass at zero-depth commanded (spring pass) and measure — you will often find the part has gotten smaller. Use a final spring pass to clean up, or command 0.001" deeper than you need.',
          },
          {
            level: 'intermediate',
            prompt: 'The turned surface is rougher than expected even after a finishing pass at 0.002" depth. What are the candidate causes, and how do you isolate each?',
            hint: 'Think: tool, work, machine, operator.',
            solution: 'Possible causes: dull or chipped tool (change insert); wrong feed (too fast tears, too slow scrapes); built-up edge on the tool (common with aluminum at slow speeds — increase speed); spindle runout (indicate a ground bar in the chuck to check); loose compound or cross-slide gib (tighten, recheck). Test by changing one variable at a time.',
          },
          {
            level: 'intermediate',
            prompt: 'Cut a 3/4"-10 thread using the threading dial on a manual lathe. What sequence of operations puts a clean, properly sized thread on the bar?',
            hint: 'Threading is scary but mechanical — the half-nut engages at a specific mark for each turn.',
            solution: 'Face and chamfer the end. Set compound to 29° for thread cutting. Turn the OD to nominal thread diameter. Engage the half-nut on the dial mark every pass; feed in 0.005" on the compound per pass until depth reaches the chart value for 3/4"-10 (0.065" for a 60° thread). Back out cleanly at the end of each pass. Check with a thread gauge or a nut. Chamfer the lead-in.',
          },
          {
            level: 'advanced',
            prompt: 'You need to turn a 24" aluminum shaft to ±0.0005" TIR over its full length. What setup do you use, and what order of operations?',
            hint: 'A long, thin shaft deflects. The answer is in support and heat.',
            solution: 'Drive with a lathe dog from the chuck; support in centers on both ends; use a steady rest midway. Rough first, let the part cool to ambient, then finish. Take light finishing cuts (0.003" or less) with a sharp tool. Coolant helps — aluminum expands fast under cut heat. Measure with an indicator against a surface plate after the part has stabilized. If runout is out of tolerance, the shaft is bowed (warm-worked) and needs to be straightened before final cuts.',
          },
        ],
        troubleshooting: [
          { symptom: 'Chatter — machine-gun stuttering', likelyCauses: ['Tool overhang too long', 'Insufficient work support', 'Speed too high', 'Dull tool', 'Loose gibs'], quickTest: 'Reduce tool stickout by half; add a tailstock center.', fix: 'Shorten tool stickout, use a live center on long work, slow down slightly, check and tighten gibs.' },
          { symptom: 'Work tapers larger at tailstock end', likelyCauses: ['Tailstock offset', 'Worn bed ways', 'Compound slide unlocked'], quickTest: 'Turn a test bar and measure both ends with a mic.', fix: 'Align tailstock by turning a test bar, measuring, adjusting the tailstock offset screws, re-measuring.' },
          { symptom: 'Torn or ragged surface', likelyCauses: ['Dull tool', 'Speed too slow', 'Tool rake wrong for material', 'Built-up edge'], quickTest: 'Change the insert.', fix: 'Fresh tool, increase speed 20%, or regrind for the correct rake.' },
          { symptom: 'Tool chatter only on certain diameters', likelyCauses: ['Part resonance at specific RPM'], quickTest: 'Change RPM by 10–15% and listen.', fix: 'Adjust RPM; every part-tool combination has quiet and loud RPM ranges.' },
          { symptom: 'Tool breaks on heavy cuts', likelyCauses: ['Too much depth', 'Feed too high for material', 'Insert grade wrong'], quickTest: 'Reduce depth of cut by half.', fix: 'Split the cut into multiple lighter passes; match insert grade to material.' },
          { symptom: 'Long stringy chips wrapping around the work', likelyCauses: ['Feed too slow', 'Tool has no chip breaker'], quickTest: 'Pause and clear chips — never with hands.', fix: 'Increase feed rate; use a chip-breaker insert; stop and clear with a hook or brush.' },
          { symptom: 'Thread pitch wrong', likelyCauses: ['Wrong lead-screw gearing', 'Wrong threading-dial mark engaged'], quickTest: 'Check gear-box settings against the chart.', fix: 'Verify gears; engage the half-nut on the correct dial mark for the thread\'s pitch.' },
        ],
        progression: [
          { level: 'novice', canDo: 'Face, chamfer, and parallel-turn on bar stock. Read a micrometer to a thousandth. Change a carbide insert.', shouldNext: 'Learn to grind HSS toolbits; the geometry is the lesson.' },
          { level: 'apprentice', canDo: 'Hold a single diameter within two thousandths. Turn between centers. Cut internal and external threads with a threading dial.', shouldNext: 'Learn taper turning with the compound, knurling, and bore work with boring bars.' },
          { level: 'journeyman', canDo: 'Hold tenths on small parts. Set up a four-jaw chuck and dial in off-center work. Thread-cut metric threads on an imperial lead screw with change gears.', shouldNext: 'Specialize — gunsmithing, watchmaking, aerospace — or move to CNC programming. The craft has no ceiling.' },
        ],
        glossary: [
          { term: 'Surface speed (SFM)', def: 'The speed of the work past the tool in surface feet per minute. Depends on material and tool — 120 SFM for carbide on mild steel, 250+ for aluminum.' },
          { term: 'Feed rate', def: 'How far the tool advances per revolution of the work. Typical: 0.003"–0.020" per rev depending on roughing or finishing.' },
          { term: 'Depth of cut', def: 'How deep into the work the tool is set per pass. Roughing: 0.030"–0.100". Finishing: 0.002"–0.010".' },
          { term: 'Chuck runout', def: 'The degree to which a piece held in a chuck wobbles around its theoretical axis. Good 3-jaw chucks hold within 0.003" TIR; 4-jaws can be dialed to 0.0001".' },
          { term: 'Spring pass', def: 'A repeat finishing cut at zero additional depth. Relieves the elastic springback of the machine and produces a final, slightly smaller dimension.' },
          { term: 'Threading dial', def: 'A rotating indicator that tells the operator when to close the half-nut to pick up a previous thread path.' },
          { term: 'Tailstock', def: 'The sliding support at the right end of the lathe bed. Holds live centers, drill chucks, or dead centers.' },
        ],
      },

      resources: {
        videos: [
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@Abom79', title: 'Abom79 — manual lathe work', channel: 'Abom79', duration: 'variable', kind: 'shop', why: 'Adam Booth, third-generation machinist, runs a real job shop on camera. The classroom most of us never got.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@ThisOldTony', title: 'This Old Tony — machining fundamentals', channel: 'This Old Tony', duration: 'variable', kind: 'tutorial', why: 'The funniest serious machinist on YouTube. Anonymous, meticulous, and remarkably good at explaining why tolerances matter.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@BlondiHacks', title: 'Blondihacks — hobby-shop lathe work', channel: 'Blondihacks', duration: 'variable', kind: 'tutorial', why: 'Quinn Dunki, writing for the home-shop amateur, starts where the professionals never bother — turning your first part, grinding your first toolbit.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@Clickspring', title: 'Clickspring — precision clockmaking on a small lathe', channel: 'Clickspring', duration: 'variable', kind: 'shop', why: 'Chris built an entire skeleton clock from brass stock one episode at a time. The most beautifully shot machining channel on YouTube.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@stefangotteswinter', title: 'Stefan Gotteswinter — miniature precision machining', channel: 'Stefan Gotteswinter', duration: 'variable', kind: 'shop', why: 'A German prototype machinist working at tenths in a home shop. Proof that precision is patience, not money.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@NYCCNC', title: 'NYC CNC — CAD/CAM and CNC turning', channel: 'NYC CNC', duration: 'variable', kind: 'tutorial', why: 'John Saunders films his machine shop from a first-time-user perspective. The on-ramp for anyone stepping from manual to CNC.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@AvE', title: 'AvE — BOLTR teardowns (rough, technical)', channel: 'AvE', duration: 'variable', kind: 'documentary', why: 'The Canadian "skookum-choochers" channel. Irreverent, profane, and remarkably good at showing why a Chinese lathe feels like a Chinese lathe.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@Lesics', title: 'Lesics — CNC lathe operation animated', channel: 'Lesics', duration: 'variable', kind: 'animation', why: '3D animated explanation of how a modern CNC turning center works. Good complement to manual-machine channels.', collapsed: true },
        ],
        books: [
          { title: 'Machinery\'s Handbook', author: 'Erik Oberg, Franklin D. Jones, et al.', year: 1914, url: 'https://books.industrialpress.com/machinery-handbook/', why: 'In continuous print since 1914. Three thousand pages of tables, formulas, and fits — the bible every machine shop keeps within reach.' },
          { title: 'The Amateur\'s Lathe', author: 'Lawrence H. Sparey', year: 1948, url: 'https://archive.org/details/amateurslathe0000unse', why: 'The definitive English-language primer on the small lathe. Out of print for decades and still the first book most teachers hand you.' },
          { title: 'Metalworking Sink or Swim', author: 'Tom Lipton', year: 2009, url: 'https://books.industrialpress.com/9780831133627/metalworking-sink-or-swim/', why: 'Forty years of shop tricks, one per page, with a thousand color photos. The modern replacement for thumbing through old American Machinist back issues.' },
          { title: 'Lathework: A Complete Course', author: 'Harold Hall', year: 2003, url: 'https://www.crowood.com/products/lathework-a-complete-course-by-harold-hall', why: 'Crowood\'s workshop-practice series — a twelve-project course aimed at bench lathes. The book to work through, project by project.' },
          { title: 'How to Run a Lathe', author: 'South Bend Lathe Works', year: 1914, url: 'https://archive.org/details/HowToRunALathe', why: 'The original instruction manual South Bend shipped with every lathe for seventy-five years. Free on the Internet Archive. Still useful.' },
          { title: 'Tools for the Self-Reliant Workshop (The Lathe Book)', author: 'Ernie Conover', year: 2003, url: 'https://www.worldcat.org/title/lathe-book/oclc/52386499', why: 'Ernie Conover on the metalworking lathe for the serious amateur. Clear on tooling choices and where to spend money.' },
        ],
        articles: [
          { title: 'Lathe', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Lathe', why: 'A surprisingly thorough historical and technical survey, with good diagrams of every major lathe type from watchmaker\'s to vertical boring mill.', year: null },
          { title: 'Lathe', source: 'Britannica', url: 'https://www.britannica.com/technology/lathe', why: 'Short, clean, and focused on the three essential configurations: speed, engine, and screwcutting.', year: null },
          { title: 'Henry Maudslay', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Henry_Maudslay', why: 'The man who put a lead screw on a lathe and trained a generation of British mechanics. The genealogy of modern machine tools starts with him.', year: null },
          { title: 'History of Machine Tools', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/History_of_machine_tools', why: 'A long, citation-heavy piece with the full arc from the eighteenth century to CNC.', year: null },
        ],
        courses: [
          { title: 'Practical Machinist — forums and curated channel list', provider: 'Practical Machinist', url: 'https://www.practicalmachinist.com/forum/threads/youtube-machining-channels.377938/', free: true, why: 'The curated list of serious machining channels maintained by working machinists. Better than any paid intro course on the internet.' },
          { title: 'Home Shop Machinist (free article archive)', provider: 'Village Press', url: 'https://homeshopmachinist.net/', free: false, why: 'The magazine of hobbyist machining in the US since 1982. Back issues are where most home-shop lathe knowledge was first written down.' },
        ],
        tools: [
          { title: 'Starrett 0–1" micrometer', url: 'https://www.starrett.com/', why: 'The single tool a machinist buys first. Reads to a ten-thousandth on a good day. Everything else is a complement.' },
          { title: 'Quick-change tool post', url: 'https://en.wikipedia.org/wiki/Tool_post', why: 'The upgrade that turns a frustrating lathe into a productive one. Changes tools in three seconds instead of three minutes.' },
          { title: 'Four-jaw independent chuck', url: 'https://en.wikipedia.org/wiki/Chuck_(engineering)', why: 'The chuck that holds what a three-jaw cannot — off-center work, square bar, odd castings. One of each is the right loadout.' },
          { title: 'Carbide-insert turning tools (CCMT, TNMG, etc.)', url: 'https://en.wikipedia.org/wiki/Indexable_insert', why: 'The hand-ground toolbits of 1950 still work. Indexable carbide is faster, tougher, and lasts through harder material. Most shops now use both.' },
        ],
        primarySources: [
          { title: 'Henry Maudslay\'s screw-cutting lathe (Science Museum Group)', url: 'https://collection.sciencemuseumgroup.org.uk/objects/co55851/maudslays-screw-cutting-lathe-about-1800-lathe-screw-cutting-lathes', why: 'The original machine, preserved in London. The first lathe to combine a rigid slide rest with a precision lead screw.' },
          { title: 'South Bend \'How to Run a Lathe\' (first edition scan)', url: 'https://archive.org/details/HowToRunALathe', why: 'An operator manual from 1914 that is still more readable than many modern textbooks. Priceless primary source.' },
        ],
      },

      seeAlso: ['mill', 'tolerances', 'welding', 'mig'],
      prereqs: [],
      leadsTo: ['mill', 'tolerances'],
      chapterActivity: 'Open-shop Saturdays at a Gowanus metal co-op — bring stock, get fifteen minutes on the South Bend with a mentor at your elbow.',
      sources: [
        'https://en.wikipedia.org/wiki/Lathe',
        'https://www.britannica.com/technology/lathe',
        'https://en.wikipedia.org/wiki/Henry_Maudslay',
        'https://en.wikipedia.org/wiki/History_of_machine_tools',
      ],
      verifiedAt: '2026-04-23',
    },

    mill: {
      id: 'mill',
      name: 'The Mill',
      level: 'Intermediate',
      dek: 'The machine that put the parts of every other machine into square.',
      readTime: '17 min',

      sections: ['The flat world', 'Bridgeport and after', 'The three axes', 'Setup is the job', 'Climb versus conventional', 'How to think about it', 'Work through one', 'Try these', 'When it goes wrong', 'What to try next'],
      body: [
        { type: 'lead', text: 'A young mechanic named Eli Whitney, hired in 1798 to produce ten thousand muskets, could not afford a gunsmith for each one. He needed every part of every gun to fit every other gun of the same model — what we now call interchangeable parts. The machine he and his contemporaries worked out for the task was the milling machine, a sort of sideways lathe where the cutter spins and the work stays still. Within a century it had reshaped every industry that touched metal.' },
        { type: 'h2', text: 'The flat world' },
        { type: 'p', text: 'If the lathe is the machine of round things, the mill is the machine of flat ones. A rotating multi-tooth cutter, held vertically or horizontally, sweeps over a workpiece clamped to a sliding table. Each tooth takes a small bite; together they leave a face so flat and parallel that you can read a newspaper through the light gap against a straightedge. Everything rectangular, everything square, everything with pockets and slots and holes in particular places — most of it started as a block that went through a mill.' },
        { type: 'h2', text: 'Bridgeport and after' },
        { type: 'p', text: 'In 1938, a company in Bridgeport, Connecticut, introduced a vertical knee mill with a turret head that became so dominant the name turned generic. Any small vertical mill is a "Bridgeport" the way any photocopy is a "Xerox." The original machines are still working in shops across America, eighty years later, because they were massively overbuilt and simple to rebuild. Learn to run a Bridgeport and you can run almost any manual mill made since.' },
        { type: 'h2', text: 'The three axes' },
        { type: 'p', text: 'X is the long axis of the table; you crank it left and right. Y is the short axis; in and out. Z is vertical, either by raising the knee that carries the table or by lowering the quill that carries the spindle. Every milled feature is some combination of those three motions plus the spin of the cutter. Read any milling print and you are tracing a path in those coordinates, the same path a CNC mill will follow ten thousand times if the job needs it.' },
        { type: 'h2', text: 'Setup is the job' },
        { type: 'p', text: 'A good milling operation is eighty percent setup. The work has to be clamped perfectly parallel to the table; the vise has to be trammed in to a couple of tenths; the stock has to be tight enough not to move but not so tight it bows. A careful machinist spends twenty minutes setting up a five-minute cut. Novices do the opposite and spend the rest of the afternoon scrapping the part.' },
        { type: 'h2', text: 'Climb versus conventional' },
        { type: 'p', text: 'A cutter can feed into the work so the teeth hit from below (conventional milling) or from above (climb milling). Climb milling leaves a better surface finish and longer tool life on a rigid modern machine — but on a worn manual machine with backlash in the lead screw, climb milling can catch the work and ruin everything in a cut. The rule is: climb on CNC, conventional on manual. Break the rule knowing why you are breaking it.' },
        { type: 'callout', text: 'The small iron block sitting on top of the vise is an edge finder. Brought slowly against the work until it jumps sideways, it tells the machinist where the edge is to within half a thousandth. It looks primitive and is remarkably reliable; every manual mill on earth has one.' },

        { type: 'h2', text: 'How to think about it' },
        { type: 'p', text: 'A mill is a flour mill tipped on its side, eating metal instead of wheat. The cutter spins in one axis; the work rides on a table that moves in the other two. To make any shape, you chain simple motions along X, Y, and Z. The discipline is in the setup: how you hold the work determines whether you get a good part or a vibrating ruined one. Every milling print reads the same — an origin, a set of dimensions from that origin, and a tolerance on each. The operator\'s job is to establish the origin and then let the machine walk through the numbers.' },
        { type: 'h2', text: 'Work through one' },
        { type: 'p', text: 'A machinist is given a rough piece of 6061 aluminum — 2.1" by 3.1" by 4.1" — and asked to square it into a 2.000" × 3.000" × 4.000" block, ±0.005". She starts by tramming the vise with a dial indicator: sweeping the indicator across the fixed vise jaw and adjusting the vise base until the reading is within 0.0005" across the jaw length. She clamps the roughest face down onto a pair of parallels, taps the work down with a dead-blow, and faces the up-facing side to clean it. Flip. Mill the second side parallel. Flip to stand the work on its clean faces and mill the narrow sides. Six faces, six operations, each referenced off the previous. Total time: thirty minutes. The block is now square, parallel, and to size — the foundation of every more complicated operation a mill can do.' },
        { type: 'h2', text: 'Try these' },
        { type: 'p', text: 'First: tram the vise on your mill with a dial indicator. You are aiming for the fixed jaw to be parallel to the X-axis within half a thousandth. If it takes you fifteen minutes the first time, you are doing it right. Second: square a piece of scrap 6061 aluminum — a soft, forgiving material — into a two-inch cube. The six-face sequence teaches more about milling than any textbook. Third: find the center of a round piece of stock using a coaxial indicator or an edge finder. A mill that is zeroed on the true center of a round part can drill patterns, mill pockets, and repeat indefinitely without re-picking up the reference.' },
        { type: 'h2', text: 'When it goes wrong' },
        { type: 'p', text: 'The most common milling mistake is not tramming the vise. An untrammed vise produces parallel faces that are not square to each other, and every subsequent operation inherits the error. The second most common is not deburring between operations: a burr left on the reference face lifts the work by a few thousandths, and what should be flat becomes stepped. Chatter on a mill usually means the cutter stickout is too long, the RPM is wrong for the cutter diameter, or the work is insufficiently clamped. A cutter loaded with aluminum swarf (chip-welded to the flutes) is the usual cause of a broken end mill; blow the flutes clean between cuts. And if the part feels hot after a finishing cut, it will grow by a thousandth or two — let it cool before you measure.' },
        { type: 'h2', text: 'What to try next' },
        { type: 'p', text: 'Past basic squaring, the next rungs are drilling holes on a pattern, milling a slot to size with a fly cutter, machining a pocket, and making a fixture that holds a specific part for a production run of ten. Past that sits the CNC world — starting with writing a part program in Fusion 360, posting G-code, and running it on a hobbyist machine like the Tormach or Haas. The Bridgeport you learned on is the gateway, not the destination.' },
      ],

      keyTerms: ['end mill', 'face mill', 'vise', 'edge finder', 'quill', 'knee', 'climb milling', 'conventional milling', 'tramming', 'DRO'],

      scaffolding: {
        mentalModel: {
          analogy: 'A mill is a flour mill tipped on its side, eating metal instead of wheat. Three translations (X, Y, Z) plus one rotation (the spindle) make every cut.',
          whereItBreaks: 'It underplays the fourth and fifth axes on multi-axis CNC mills, which allow compound cuts impossible on a three-axis machine. Also underplays surface milling where the tool traces a complex 3D path.',
        },
        workedExample: {
          prompt: 'Square a rough piece of 6061 aluminum (2.1 × 3.1 × 4.1") to a finished 2.000 × 3.000 × 4.000" block, ±0.005".',
          scenario: 'Manual Bridgeport mill, 6" Kurt vise, 3/8" 3-flute carbide end mill for sides and a 2" face mill for the faces.',
          steps: [
            { step: 'Tram the vise fixed jaw parallel to X within 0.0005" across the jaw.', why: 'Every reference on this part comes off the fixed jaw. An out-of-tram vise produces parallel-but-not-square work.' },
            { step: 'Put the roughest face on parallels, clamp lightly, tap down with a dead-blow until parallels are just pinched.', why: 'Work that floats above the parallels will not be parallel to the table after machining.' },
            { step: 'Face mill the upper surface in a single pass (or two) to clean up.', why: 'Establishes the first flat reference.' },
            { step: 'Flip 180°; clean face down on parallels. Face the now-up side.', why: 'Sides 1 and 2 parallel after this operation.' },
            { step: 'Stand the work on a long clean edge; face the short ends.', why: 'Sides 3 and 4 square to sides 1 and 2.' },
            { step: 'Stand on short end; face the long ends.', why: 'Sides 5 and 6 complete the block.' },
            { step: 'Measure all three dimensions with a micrometer; take a final light cut on any oversize face.', why: 'Final sizing. Aluminum grows with heat — let the block sit five minutes before the last measure.' },
          ],
          result: 'A 2.000" × 3.000" × 4.000" block, square, parallel, and within ±0.005" on every dimension. 30–45 minutes.',
        },
        exercises: [
          {
            level: 'beginner',
            prompt: 'Tram a vise on a mill. What reading does a dial indicator show when the vise is properly aligned, and what reading tells you the vise needs correction?',
            hint: 'Run the indicator across the fixed jaw.',
            solution: 'A well-trammed vise shows no more than 0.0005" of change across the full length of the fixed jaw. Any reading over that means unlatch the vise base, rotate a fraction of a degree, re-tighten, re-indicate. It\'s iterative and takes practice.',
          },
          {
            level: 'beginner',
            prompt: 'Use an edge finder to locate the X-zero on the left edge of a piece of stock. What does the edge finder do, and how do you know when it has "found" the edge?',
            hint: 'The spinning edge finder will jump sideways.',
            solution: 'Spin the mill at ~1,000 RPM. Lower the edge finder until it is beside the work at mid-thickness. Feed the table slowly toward the work. The edge finder tip will wobble, then as it contacts the work it will deflect into a stable offset, and at the precise edge it will "jump" sideways. The tip radius is 0.100" (usually), so add 0.100" to the displayed X value to find true zero.',
          },
          {
            level: 'intermediate',
            prompt: 'You mill a slot 0.500" wide × 1.000" long × 0.250" deep into a block. The slot comes out slightly tapered — wider at the top than the bottom. Why?',
            hint: 'Think about rigidity, not the cutter itself.',
            solution: 'Either the cutter is deflecting (stickout too long), the spindle is loose, or the head is tilted slightly. Measure with a depth mic at both ends of the slot; if it\'s consistent taper, check head tram. A 3/8" end mill at 1.5" stickout will flex 0.002" or more under side load.',
          },
          {
            level: 'intermediate',
            prompt: 'You need to drill a 5-hole pattern on a 2" bolt-circle at 72° spacing. How do you lay it out without a rotary table?',
            hint: 'Trig and the DRO, or a pre-drilled index fixture.',
            solution: 'Compute X-Y coordinates for each hole from the center: hole n at (R cos θ, R sin θ) for θ = 0°, 72°, 144°, 216°, 288° and R = 1.000". Program the coordinates into the DRO. Pick each hole center from DRO; center-drill, drill to depth, move to the next. If you have a rotary table, clamp the work on center and index 72° between drills — faster and eliminates the math.',
          },
          {
            level: 'advanced',
            prompt: 'You need to hold a tapped hole within ±0.001" of a true position relative to two edges. What is the sequence, and where do the errors come from?',
            hint: 'True position is measured from the datum edges.',
            solution: 'Establish datums A (bottom) and B (left edge) first by squaring those faces. Pick up their intersection with an edge finder, set DRO zero. Drill the tap hole. Tap the thread. Measure the hole center with a coax indicator or with a pin gage in the hole indicated against a granite. True position errors come from: (1) edge-finder radius error, (2) drill-bit wander in hard material, (3) spindle-to-quill alignment, (4) operator zeroing. Cumulative error: ±0.002" is typical unless everything is dialed.',
          },
        ],
        troubleshooting: [
          { symptom: 'Chatter when milling', likelyCauses: ['Tool stickout too long', 'RPM wrong', 'Climb vs. conventional mismatch', 'Loose vise'], quickTest: 'Reduce stickout; switch between climb/conventional; try ±20% on RPM.', fix: 'Shorten stickout, correct direction, tighten vise.' },
          { symptom: 'Part is not square after the six-face sequence', likelyCauses: ['Vise not trammed', 'Burr on reference face', 'Parallels not seated'], quickTest: 'Check each face with a machinist\'s square.', fix: 'Re-tram vise; debur meticulously; reseat parallels and work.' },
          { symptom: 'End mill squeals under cut', likelyCauses: ['RPM too high', 'Feed too low', 'Dull cutter'], quickTest: 'Change RPM and feed per the Machinist\'s Handbook chart for the material.', fix: 'Match SFM and feed per tooth to material; replace dull cutter.' },
          { symptom: 'Cutter loads up with aluminum chips', likelyCauses: ['Insufficient coolant/lubricant', 'Wrong flute geometry', 'Feed too low'], quickTest: 'Blow flutes clean; apply WD-40 or cutting oil.', fix: 'Use a 2- or 3-flute end mill for aluminum; increase feed; apply coolant.' },
          { symptom: 'Slot milled oversize', likelyCauses: ['Cutter runout', 'Climb milling on manual with backlash', 'Worn collet'], quickTest: 'Indicate cutter runout in the collet.', fix: 'Replace collet if runout over 0.001"; switch to conventional; take a roughing pass then finish climbing.' },
          { symptom: 'Head not square to table (sides tapered)', likelyCauses: ['Head nodded or tilted'], quickTest: 'Indicate spindle sweep across table in X and Y.', fix: 'Square the head: loosen, adjust, re-indicate, retighten.' },
          { symptom: 'Back of vise lifts under heavy cut', likelyCauses: ['Vise base bolts loose', 'Insufficient T-slot clamps'], quickTest: 'Lay a hand on the vise during a cut — any movement is a problem.', fix: 'Tighten vise bolts; add clamping studs.' },
        ],
        progression: [
          { level: 'novice', canDo: 'Tram a vise, square a block, pick up an edge, drill to depth.', shouldNext: 'Learn to change collets, set head tram, and pick up a center with a coax indicator.' },
          { level: 'apprentice', canDo: 'Hold a hole pattern ±0.001"; mill a pocket to size; face to a finish; use a fly cutter.', shouldNext: 'Learn to make fixtures for repeat work; run a rotary table; tap holes to spec.' },
          { level: 'journeyman', canDo: 'Work from a blueprint without guidance; set up for thin or awkward parts; hold tenths on small features.', shouldNext: 'Move to CNC programming or specialize in tool and die, gunsmithing, or mold work.' },
        ],
        glossary: [
          { term: 'Tramming', def: 'The process of squaring the mill\'s spindle to the table and the vise jaw to an axis. The first setup step of every precision job.' },
          { term: 'Climb milling', def: 'Feeding the work into the cutter such that the teeth enter with maximum chip thickness. Better finish and tool life on rigid machines; dangerous on worn manual machines.' },
          { term: 'Conventional milling', def: 'Feeding such that teeth enter with zero chip thickness and grow. Safer on manual machines but harder on tools.' },
          { term: 'DRO', def: 'Digital Read-Out. A bolt-on electronic readout for table position, typically resolving to 0.0002" or 0.005 mm.' },
          { term: 'Collet', def: 'The precision clamping sleeve that holds end mills in the spindle. Loose-fitting collets ruin tolerance.' },
          { term: 'Parallels', def: 'Matched steel bars, precisely ground to equal height, placed under work in a vise to raise it above the vise bed.' },
          { term: 'SFM', def: 'Surface Feet per Minute. Cutter edge speed at its cutting radius. Material- and tool-dependent; Machinist\'s Handbook lists values.' },
        ],
      },

      resources: {
        videos: [
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@ThisOldTony', title: 'This Old Tony — squaring a block on the mill', channel: 'This Old Tony', duration: 'variable', kind: 'tutorial', why: 'His stock-squaring video is a rite of passage. Tramming the mill, selecting faces, checking against a surface plate — all in one short, funny tutorial.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@Abom79', title: 'Abom79 — Bridgeport milling work', channel: 'Abom79', duration: 'variable', kind: 'shop', why: 'Hours of real job-shop milling, on the exact kind of knee mill most hobby shops inherit second-hand.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@BlondiHacks', title: 'Blondihacks — first cuts on a mini-mill', channel: 'Blondihacks', duration: 'variable', kind: 'tutorial', why: 'Quinn Dunki walks an absolute beginner through their first setup and cut. The gentlest on-ramp on YouTube.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@NYCCNC', title: 'NYC CNC — CAM and CNC milling tutorials', channel: 'NYC CNC', duration: 'variable', kind: 'tutorial', why: 'John Saunders\'s channel is the starting point for anyone stepping into Fusion 360 and CNC work. Patient, upbeat, practical.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@JeremyFielding', title: 'Jeremy Fielding — contraption engineering', channel: 'Jeremy Fielding', duration: 'variable', kind: 'shop', why: 'A North Alabama contraption-engineer-by-trade films real machine design, from concept sketches to the finished cut. Remarkably well-explained.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@stefangotteswinter', title: 'Stefan Gotteswinter — miniature precision', channel: 'Stefan Gotteswinter', duration: 'variable', kind: 'shop', why: 'Gotteswinter works at a half-thousandth of an inch on small parts in a home shop. A masterclass in patience and in why a good vise matters.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@Lesics', title: 'Lesics — CNC milling machine explained', channel: 'Lesics', duration: 'variable', kind: 'animation', why: '3D animation of a modern machining center — how the tool changer, the coolant system, and the gantry work together.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@TheEngineeringMindset', title: 'The Engineering Mindset — milling animations', channel: 'The Engineering Mindset', duration: 'variable', kind: 'animation', why: 'Paul Evans\'s channel — cutaway animations of every subsystem. A good second view when the This Old Tony tutorials go quickly.', collapsed: true },
        ],
        books: [
          { title: 'Machinery\'s Handbook', author: 'Erik Oberg, Franklin D. Jones, et al.', year: 1914, url: 'https://books.industrialpress.com/machinery-handbook/', why: 'The bible. Feeds and speeds tables, end-mill geometries, fit charts, every formula a milling operation needs.' },
          { title: 'Machine Shop Practice', author: 'Karl Moltrecht', year: 1981, url: 'https://books.industrialpress.com/machine-shop-practice-volume-1/', why: 'The two-volume classroom text many trade schools still use. Clear on why, not just how.' },
          { title: 'Metalworking Sink or Swim', author: 'Tom Lipton', year: 2009, url: 'https://books.industrialpress.com/9780831133627/metalworking-sink-or-swim/', why: 'Lipton\'s milling chapter is full of the tricks that turn a hobbyist into a craftsperson — vise stops, parallels, pump-action work holding.' },
          { title: 'Milling: A Complete Course', author: 'Harold Hall', year: 2004, url: 'https://www.crowood.com/products/milling-a-complete-course-by-harold-hall', why: 'Crowood\'s project-driven course for the small shop. Works through a set of exercises that build real technique.' },
          { title: 'Manual of Industrial Molded Parts', author: 'Joe Martin', year: 2001, url: 'https://www.sherline.com/product/manual-by-joe-martin/', why: 'Sherline founder Joe Martin\'s thousand-page shop compendium. Unconventional and extremely useful.' },
          { title: 'Technology of Machine Tools', author: 'Steve F. Krar', year: 2010, url: 'https://www.mheducation.com/highered/product/technology-machine-tools-krar-gill/M9780073510835.html', why: 'McGraw-Hill\'s current vocational textbook. The classroom text most North American community colleges adopt.' },
        ],
        articles: [
          { title: 'Milling (machining)', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Milling_(machining)', why: 'The history runs from Samuel Rehe in 1783 through the Bridgeport dominance of the twentieth century. Good diagrams of every process.', year: null },
          { title: 'Climb Milling vs. Conventional Milling', source: 'Harvey Performance Company', url: 'https://www.harveyperformance.com/in-the-loupe/climb-milling-conventional-milling/', why: 'The cleanest explanation of the one concept every new machinist gets wrong for the first hundred hours.', year: null },
          { title: 'Bridgeport (machine tool brand)', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Bridgeport_(machine_tool_brand)', why: 'How a Connecticut machine became a noun. Good on the industrial context that made knee mills dominate the postwar American shop.', year: null },
          { title: 'Eli Whitney and interchangeable parts', source: 'Smithsonian', url: 'https://www.si.edu/spotlight/eli-whitney', why: 'The primary-source context for why milling mattered: making muskets with parts that fit any musket.', year: null },
        ],
        courses: [
          { title: 'Practical Machinist — community forum archive', provider: 'Practical Machinist', url: 'https://www.practicalmachinist.com/', free: true, why: 'Twenty years of working-machinist Q&A, fully searchable. Better than any paid course for real troubleshooting.' },
          { title: 'MIT 2.008 — Design and Manufacturing II (archived OCW)', provider: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/search/?q=manufacturing', free: true, why: 'MIT\'s manufacturing course; search OCW for current iterations. Classroom-grade material on process planning and part design.' },
        ],
        tools: [
          { title: 'Kurt D688 milling vise', url: 'https://kurtworkholding.com/', why: 'The one bench vise every serious small shop owns. A new one costs eight hundred dollars and lasts a career.' },
          { title: 'Edge finder (mechanical)', url: 'https://en.wikipedia.org/wiki/Edge_finder', why: 'Ten dollars. Finds the edge of your work to half a thousandth of an inch. Absurdly useful.' },
          { title: 'Digital readout (DRO)', url: 'https://en.wikipedia.org/wiki/Digital_readout', why: 'Reads the position of each axis to a thousandth, independent of the lead screw. Removes most of the math from a manual job.' },
          { title: 'Parallels and 123 blocks', url: 'https://en.wikipedia.org/wiki/Machining_fixture', why: 'Fifteen dollars of ground steel that makes work-holding reliable. Every serious vise rides on a pair of parallels.' },
        ],
      },

      seeAlso: ['lathe', 'tolerances', 'welding'],
      prereqs: ['lathe'],
      leadsTo: ['tolerances'],
      chapterActivity: 'Tuesday-evening mill night at a Long Island City maker space — one Bridgeport, one instructor, four students.',
      sources: [
        'https://en.wikipedia.org/wiki/Milling_(machining)',
        'https://en.wikipedia.org/wiki/Bridgeport_(machine_tool_brand)',
        'https://books.industrialpress.com/machinery-handbook/',
      ],
      verifiedAt: '2026-04-23',
    },

    tolerances: {
      id: 'tolerances',
      name: 'Tolerances & Fits',
      level: 'Advanced',
      dek: 'The invisible grammar of every machine: how close is close enough, and why it is never closer than it must be.',
      readTime: '18 min',

      sections: ['The economics of precision', 'Whitworth and the three-plate method', 'Classes of fit', 'How you measure', 'The shop philosophy', 'How to think about it', 'Work through one', 'Try these', 'When it goes wrong', 'What to try next'],
      body: [
        { type: 'lead', text: 'In 1840, Joseph Whitworth of Manchester demonstrated that three flat plates, scraped against each other in pairs, would eventually produce three surfaces flat to a tenth of a thousandth of an inch — closer than any machine of the era could match. Whitworth\'s method made the modern world possible. Interchangeable parts, mass production, every industry that leans on bolt-together assembly: all of it is a long footnote to the observation that flatness is a stable state three bodies can discover together.' },
        { type: 'h2', text: 'The economics of precision' },
        { type: 'p', text: 'The first law of tolerances is that tight is expensive. A shaft turned to ±0.010" is a ten-minute job on a manual lathe. The same shaft to ±0.0001" is a dial-indicator-and-coffee exercise that can take an hour, and the tooling costs more. A good design is one that demands precision only where it matters — on the mating surface, the bearing seat, the piston bore — and grants cheerful slop everywhere else. Drawings with a tight tolerance in every block are the work of engineers who have never spent a day on a shop floor.' },
        { type: 'h2', text: 'Whitworth and the three-plate method' },
        { type: 'p', text: 'Two flat plates, rubbed together, can both be convex and still match each other perfectly. Three plates cannot. By scraping A against B, B against C, and C against A, in rotation, the only stable end-state is all three dead flat. Whitworth\'s first set of reference plates took him eighteen months. The British arsenal at Woolwich still owned a set of Whitworth-scraped surface plates in the twentieth century, traceable to the originals. Every precision measuring plane in the world is a descendant of that method.' },
        { type: 'h2', text: 'Classes of fit' },
        { type: 'p', text: 'When two parts meet, the standard classifications describe how they go together. A clearance fit leaves a measurable gap — the shaft is smaller than the hole, and the part rotates freely. A transition fit is right at the edge, sometimes going together easily, sometimes needing a tap. An interference fit is larger than the hole; it goes in with a press or a heat shrink and stays there. Bearings, gears, locating pins — each wants a different fit, and each fit is numbered in handbooks so a machinist in Dayton and a draftsman in Stuttgart can communicate in inches or millimeters without ambiguity.' },
        { type: 'h2', text: 'How you measure' },
        { type: 'p', text: 'A six-inch steel rule is good to a sixty-fourth. A caliper is good to a thousandth when the operator is careful. A micrometer is good to a tenth of a thousandth, which is to say a quarter the thickness of a human hair. Gauge blocks stacked in the right combination give you any dimension you like to a millionth of an inch, and a surface plate lets you know whether your measurements are on a surface flat enough to trust. Measuring is its own discipline; the machinist who cannot trust her micrometer cannot trust anything else.' },
        { type: 'h2', text: 'The shop philosophy' },
        { type: 'p', text: 'Old hands will say that no part is ever exactly to size; it is only within the allowed error of your measurement. The discipline of tolerances is the discipline of knowing how wrong you are and how wrong that is allowed to be. Nothing else in a shop quite teaches intellectual honesty the way a stack of gauge blocks does. They are either right or they are not, and they do not argue.' },
        { type: 'callout', text: 'The expression 0.001" is called "one thou." In metric shops, 0.025 mm is the same magnitude and called "twenty-five microns." Every machinist becomes bilingual in units within the first year on the job.' },

        { type: 'h2', text: 'How to think about it' },
        { type: 'p', text: 'Tolerances are the grammar of machines. A dimension without a tolerance is a suggestion; a dimension with a tolerance is a contract. Loose tolerances forgive the shop and cost nothing; tight tolerances bind the shop and cost money. A good designer treats tolerance as a budget to be allocated where it actually matters. A bearing bore wants H7 clearance around its shaft; a valve stem wants a running fit that is neither rattling nor tight; a press-fit dowel pin wants interference measured in tenths. Read a print and you are reading a story about which features hold the machine together and which are along for the ride.' },
        { type: 'h2', text: 'Work through one' },
        { type: 'p', text: 'A machinist receives a print for a shaft running in a bronze bushing. The call-out is Ø0.500" h6 for the shaft and Ø0.500" H7 for the bushing bore — a standard clearance fit. She looks up h6 in Machinery\'s Handbook: the shaft must fall between 0.4998" and 0.5000". She looks up H7: the bore must fall between 0.5000" and 0.5008". Worst-case clearance: 0.0002" minimum (bore at 0.5000", shaft at 0.4998") to 0.0010" maximum (bore at 0.5008", shaft at 0.4998"). She turns the shaft to 0.4999" (mid-tolerance) to leave herself margin. She bores the bushing to 0.5004". The fit is 0.0005" clearance — a smooth running fit. One look at the print, one handbook lookup, one measurement plan.' },
        { type: 'h2', text: 'Try these' },
        { type: 'p', text: 'First: with a 0-1" micrometer, measure the same gauge pin three times, from three different hand positions. If your three readings differ by more than 0.0001", your grip is not consistent — the culprit is usually the thimble being overtightened on one reading and loose on another. Use the friction thimble (the small knurled ratchet at the end); stop turning when you hear three clicks. Second: stack gauge blocks to produce a target dimension (say, 1.234"). Use the minimum number of blocks. Every block added to a stack introduces a tiny error — the shop rule is no more than four blocks in a stack for precision work. Third: indicate a granite surface plate across its diagonal with a dial indicator; a grade-A plate will read within 0.0001" across 12 inches.' },
        { type: 'h2', text: 'When it goes wrong' },
        { type: 'p', text: 'The most common tolerance mistake is not accounting for temperature. A steel part measured at 80°F will read 0.0001" larger than the same part at 70°F. Precision work is done in climate-controlled rooms for a reason. The second most common is measuring tool error: a cheap micrometer is fine for a thousandth but will lie to you at a ten-thousandth; a calibration standard (gauge blocks) is the only way to know. The third is mistaking a good surface finish for a good dimension: a ground surface can look perfect and be 0.003" out of spec. Finally, tolerance stack-up: five parts each machined to ±0.005" of their nominal dimensions can stack into a final assembly error of ±0.025" — or much more if the stack is computed wrong.' },
        { type: 'h2', text: 'What to try next' },
        { type: 'p', text: 'The next rungs: learn to read GD&T symbols (position, flatness, parallelism, runout) on a print; use a CMM (coordinate-measuring machine) to inspect a part against a 3D model; set up an environmental-controlled measuring room; write an inspection plan for a five-part assembly. The ceiling is in the calibration labs at NIST and Moore Special Tool — rooms where the instruments measure against measured-against-measured chains of traceability back to the International System. Reading Wayne Moore\'s Foundations of Mechanical Accuracy is the closest most of us get to that world.' },
      ],

      keyTerms: ['clearance fit', 'transition fit', 'interference fit', 'tolerance stack-up', 'GD&T', 'micrometer', 'gauge block', 'surface plate', 'three-plate method', 'IT grade'],

      scaffolding: {
        mentalModel: {
          analogy: 'Tolerances are a budget. You have a fixed amount of "tight" to spend on a part; spend it on features that actually matter, and give the rest cheerful slop. Every blueprint with ±0.001" on every dimension was drawn by someone who has never paid for a part.',
          whereItBreaks: 'Aerospace, medical, and semiconductor work really do demand tight everywhere — because the consequences of a loose dimension are catastrophic, not economic. The analogy is for commercial production, not for flight-critical hardware.',
        },
        workedExample: {
          prompt: 'Design a shaft-in-bushing fit for a 0.500" nominal shaft. The shaft should rotate freely but not rattle.',
          scenario: 'Look up H7/h6 clearance fit in Machinery\'s Handbook. Shaft h6 tolerance: -0.0000/-0.0004". Bore H7 tolerance: +0.0008/+0.0000".',
          steps: [
            { step: 'Compute worst-case clearance.', why: 'Minimum: bore at 0.5000", shaft at 0.4998" → 0.0002" clearance. Maximum: bore at 0.5008", shaft at 0.4996" → 0.0012" clearance.' },
            { step: 'Plan the machining: turn the shaft to the middle of h6 (0.4998"), bore the bushing to the middle of H7 (0.5004").', why: 'Aiming for the middle of each tolerance band gives margin on either side in case of measurement or cutting error.' },
            { step: 'Measure each with a micrometer and bore mic; confirm they hit nominal.', why: 'Never finish without measuring.' },
            { step: 'Assemble. Feel the fit. It should slide with finger pressure and show no rock.', why: 'The numbers are the contract; the feel is the verification.' },
          ],
          result: 'Clearance fit of ~0.0005" at nominal. Shaft rotates freely, no rattle. One print, two handbook lookups, two measurements, one assembly.',
        },
        exercises: [
          {
            level: 'beginner',
            prompt: 'Measure a Ø0.500" pin gage three times with a 0-1" micrometer. All three readings should match within 0.0001". Do yours?',
            hint: 'The friction thimble is the small knurled ratchet at the end of the mic. Use it; do not crank the main thimble.',
            solution: 'If readings differ by more than 0.0001", the inconsistency is almost always grip pressure. Use the friction thimble and stop at three clicks. Also, clean the anvils and the pin, hold the mic steady, and measure at the same point on the pin.',
          },
          {
            level: 'beginner',
            prompt: 'Stack gauge blocks to produce a target of 1.234". Use four blocks or fewer. Which four?',
            hint: 'Standard 81-block set: wear blocks (0.050"), tenths (0.1001"-0.1009"), hundredths (0.101"-0.149"), tenths (0.050"-0.950"), inches (1"-4").',
            solution: 'One solution: 0.1004" + 0.133" + 1.001" = 1.234" (three blocks). Another: 0.050" (wear block) + 0.184" + 1.000" = 1.234" (three blocks). Four blocks or fewer is standard because each wrung joint introduces ~2 millionths of an inch of error.',
          },
          {
            level: 'intermediate',
            prompt: 'A print calls for a Ø1.000" shaft with an h7 tolerance and a matching H7 bore in a housing. The shaft measures 0.9998" and the bore measures 1.0008". Is the fit within spec? How much clearance do you have?',
            hint: 'Look up h7 and H7 in Machinery\'s Handbook.',
            solution: 'h7 for Ø1.000" nominal: -0.0000/-0.0010". So 0.9998" is within h7. H7 for Ø1.000": +0.0010/+0.0000". 1.0008" is within H7. Clearance: 1.0008 - 0.9998 = 0.0010". Well within an H7/h7 clearance fit, which can range from zero to 0.0020". The fit is in spec.',
          },
          {
            level: 'intermediate',
            prompt: 'A five-part assembly stacks five dimensions, each ±0.005". The customer needs the overall stack within ±0.010". What is the statistical versus worst-case expected variation?',
            hint: 'Worst-case is arithmetic; statistical is RSS (root-sum-square).',
            solution: 'Worst-case: ±0.005 × 5 = ±0.025". Fails the ±0.010" requirement. Statistical (RSS, assuming normal distribution): √(5 × 0.005²) = 0.0112". Still marginal. The design needs tighter per-part tolerances — perhaps ±0.002" on each part, which gives RSS ±0.0045" (comfortable). Or select for match. Or redesign.',
          },
          {
            level: 'advanced',
            prompt: 'A shaft measures 0.5002" at 70°F in the measuring room. The shaft will operate at 200°F. What is its effective dimension at operating temperature, and why might this matter for the fit?',
            hint: 'Steel coefficient of thermal expansion: ~6.5 × 10⁻⁶ per °F.',
            solution: 'ΔL = L × α × ΔT = 0.5002 × 6.5e-6 × 130 = 0.0004". At 200°F, the shaft is effectively 0.5006". If the bushing is aluminum (α = 13e-6/°F) and also heats, it grows more, and clearance increases. If the bushing is bronze (α ≈ 10e-6/°F) and stays at room temperature while the shaft heats, the clearance vanishes and the shaft seizes. Thermal expansion is why interference fits require heat (heat the outer part to expand it, drop the shaft in, let it cool).',
          },
        ],
        troubleshooting: [
          { symptom: 'Three measurements of the same part give three different readings', likelyCauses: ['Inconsistent grip pressure', 'Anvil contamination', 'Surface finish error'], quickTest: 'Clean the mic and part, use the friction thimble, stop at three clicks.', fix: 'Practice on a pin gage until three readings match within 0.0001".' },
          { symptom: 'Part measures in spec at bench but will not fit assembly', likelyCauses: ['Temperature difference', 'Burr on measured face', 'Out-of-roundness not caught by 2-point mic'], quickTest: 'Re-measure at assembly temperature; check for burrs; measure at multiple angles.', fix: 'Control temperature; debur; use a V-block or roundness gage.' },
          { symptom: 'Micrometer reads 0.000 but mics don\'t close flat', likelyCauses: ['Zero off', 'Anvils damaged', 'Bent spindle'], quickTest: 'Close mic on clean anvils; check with a standard.', fix: 'Adjust zero per manufacturer; replace mic if anvils damaged.' },
          { symptom: 'Gauge-block stack won\'t wring together', likelyCauses: ['Oil or dust film', 'Block surfaces damaged', 'Humidity too high'], quickTest: 'Wipe with clean chamois and wring with a sliding motion.', fix: 'Keep blocks clean and oil-filmed; handle with tweezers or clean gloves.' },
          { symptom: 'Part rejected for true position out of spec', likelyCauses: ['Measurement off wrong datum', 'Fixture error', 'Actual hole center drift'], quickTest: 'Re-measure from the print-specified datums in the specified order.', fix: 'True position is measured from datums A, B, C in order. Using secondary datums first yields wrong answers.' },
          { symptom: 'Surface finish good but dimension out of spec', likelyCauses: ['Tool wear', 'Machine deflection', 'Spring back'], quickTest: 'Measure at multiple points; take a spring cut.', fix: 'Change tool; take light spring passes; rerun at a known rigid setup.' },
        ],
        progression: [
          { level: 'novice', canDo: 'Read a micrometer and caliper reliably. Know the difference between clearance, transition, and interference fits. Look up tolerance values in Machinery\'s Handbook.', shouldNext: 'Learn to wring gauge blocks; measure against a surface plate with a dial indicator.' },
          { level: 'apprentice', canDo: 'Hold a ±0.0005" tolerance on a shaft. Read basic GD&T callouts. Inspect a part from a print against its features.', shouldNext: 'Learn advanced GD&T (position, profile, runout); use a height gauge with gauge blocks.' },
          { level: 'journeyman', canDo: 'Hold tenths on production parts. Write inspection plans. Troubleshoot tolerance stack-ups.', shouldNext: 'Move into metrology, quality engineering, or aerospace/medical inspection.' },
        ],
        glossary: [
          { term: 'IT grade', def: 'ISO tolerance grade — a numerical code (IT01 to IT18) describing how tight a tolerance is relative to the nominal size. IT7 is a typical machined part; IT01 is gauge-quality.' },
          { term: 'H7/h6 fit', def: 'A standard ISO clearance fit: H7 bore (plus-only tolerance from nominal) paired with h6 shaft (minus-only tolerance). Used for rotating shafts in bushings.' },
          { term: 'Wring', def: 'The physical act of sliding two gauge blocks together until they adhere via molecular attraction and thin oil film. Wrung joints are accurate to millionths.' },
          { term: 'TIR (Total Indicator Reading)', def: 'The full swing a dial indicator shows when a feature is rotated through 360°. A measure of roundness, runout, or concentricity.' },
          { term: 'Datum', def: 'A reference feature on a part from which other dimensions are measured. GD&T prints label them A, B, C in order of precedence.' },
          { term: 'Stack-up', def: 'The cumulative effect of individual part tolerances on an assembled dimension. Can be worst-case (linear sum) or statistical (RSS).' },
          { term: 'Traceability', def: 'The documented chain of calibrated measurements linking a shop gauge back to a national standard (in the US, NIST).' },
        ],
      },

      resources: {
        videos: [
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@ThisOldTony', title: 'This Old Tony — precision measurement videos', channel: 'This Old Tony', duration: 'variable', kind: 'tutorial', why: 'Several of his tutorials explicitly cover measurement, gauge blocks, and reasoning about fits. Always funny, always exact.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@Abom79', title: 'Abom79 — working to tenths', channel: 'Abom79', duration: 'variable', kind: 'shop', why: 'Adam Booth takes real shop work to a tenth of a thousandth and narrates every pass. The best feel for what tight tolerance looks like in practice.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@ProjectFarm', title: 'Project Farm — tool accuracy shootouts', channel: 'Project Farm', duration: 'variable', kind: 'documentary', why: 'Todd\'s comparisons of calipers, micrometers, and measuring tools settle the "does the cheap one work" question with real data.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@stefangotteswinter', title: 'Stefan Gotteswinter — precision measuring demos', channel: 'Stefan Gotteswinter', duration: 'variable', kind: 'shop', why: 'Gotteswinter films himself using and checking gauge blocks, sine bars, and jig-borer work. Unusually clean demos of precision metrology.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@Clickspring', title: 'Clickspring — how precise fits are made by hand', channel: 'Clickspring', duration: 'variable', kind: 'shop', why: 'Chris demonstrates interference fits, shrink fits, and lapping — at clockmaker scale, where a thousandth is enormous.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@Lesics', title: 'Lesics — GD&T basics animated', channel: 'Lesics', duration: 'variable', kind: 'animation', why: 'Animated overview of geometric dimensioning and tolerancing symbols — flatness, parallelism, position, true position.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@GDandTBasics', title: 'GD&T Basics — practitioner channel', channel: 'GD&T Basics', duration: 'variable', kind: 'lecture', why: 'A dedicated channel run by certified senior-level GD&T professionals. The standard classroom on YouTube.', collapsed: true },
        ],
        books: [
          { title: 'Machinery\'s Handbook', author: 'Erik Oberg, Franklin D. Jones, et al.', year: 1914, url: 'https://books.industrialpress.com/machinery-handbook/', why: 'The standard tables for every fit class in both ANSI and ISO. If you own one machining reference, it is this one.' },
          { title: 'Geometric Dimensioning and Tolerancing', author: 'David Madsen', year: 2013, url: 'https://books.industrialpress.com/9780831134211/geometric-dimensioning-and-tolerancing/', why: 'The standard classroom text on GD&T, the symbolic language of modern engineering drawings. Teaches you to read a print.' },
          { title: 'Foundations of Mechanical Accuracy', author: 'Wayne R. Moore', year: 1970, url: 'https://archive.org/details/foundationsofmec0000moor', why: 'The Moore Special Tool Company treatise on jig boring and extreme precision. A strange, beautiful book; still the reference on how one actually achieves tenths.' },
          { title: 'Exactly: How Precision Engineers Created the Modern World', author: 'Simon Winchester', year: 2018, url: 'https://www.harpercollins.com/products/the-perfectionists-simon-winchester', why: 'Winchester on the social history of precision, from Wilkinson\'s boring mill to Hubble\'s mirror. The humane book to read before the technical ones.' },
          { title: 'Inspection and Gauging', author: 'Clifford W. Kennedy', year: 1987, url: 'https://books.industrialpress.com/9780831111496/inspection-and-gaging/', why: 'The industrial-press reference on dimensional inspection. Dry, thorough, the shop standard.' },
        ],
        articles: [
          { title: 'Engineering tolerance', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Engineering_tolerance', why: 'Good survey of ISO IT grades, the H7/h6 system, and the Taguchi loss function for anyone who wants the theory.', year: null },
          { title: 'Joseph Whitworth', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Joseph_Whitworth', why: 'The Manchester mechanic who invented the three-plate method, gave England the Whitworth screw thread, and founded a rifle works. A remarkable career.', year: null },
          { title: 'Limits, Fits and Tolerances', source: 'Engineering Product Design (educational)', url: 'https://engineeringproductdesign.com/knowledge-base/limits-fits-tolerances/', why: 'A cleaner diagram-heavy explainer of the standard fit classes than Wikipedia offers.', year: null },
          { title: 'Gauge block', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Gauge_block', why: 'The Carl Edvard Johansson invention that made precision measurement portable. Good history and working diagrams.', year: null },
        ],
        courses: [
          { title: 'Practical Machinist — forums and tolerance threads', provider: 'Practical Machinist', url: 'https://www.practicalmachinist.com/', free: true, why: 'Working machinists answering questions from other working machinists. Search "shaft tolerance" and you will spend a weekend reading.' },
          { title: 'GD&T Basics — free online fundamentals', provider: 'GD&T Basics', url: 'https://www.gdandtbasics.com/', free: true, why: 'The web\'s most-linked free course on geometric dimensioning and tolerancing. Good diagrams, self-paced.' },
        ],
        tools: [
          { title: 'Starrett or Mitutoyo 0-1" micrometer', url: 'https://www.starrett.com/', why: 'A good mic reads to a ten-thousandth and lasts a career. Buying a cheap one teaches a hard lesson fast.' },
          { title: 'Granite surface plate (12" x 18" grade B minimum)', url: 'https://en.wikipedia.org/wiki/Surface_plate', why: 'The reference plane for every precision measurement. Heavy, unglamorous, indispensable.' },
          { title: 'Gauge-block set', url: 'https://en.wikipedia.org/wiki/Gauge_block', why: 'Eighty-one steel blocks stacked to any dimension you like, accurate to a millionth. The meter stick of precision work.' },
          { title: 'Sine bar and gauge blocks', url: 'https://en.wikipedia.org/wiki/Sine_bar', why: 'Used with gauge blocks to establish any angle to arc-second precision. The classroom answer to "how do you measure an angle that tight".' },
          { title: 'Tesa or Mahr dial indicator (.0005" resolution)', url: 'https://en.wikipedia.org/wiki/Dial_indicator', why: 'Mounted on a magnetic base, it finds runout, taper, and flatness. The mill shop\'s second most-used precision tool.' },
        ],
        primarySources: [
          { title: 'Johansson\'s original gauge-block patent', url: 'https://en.wikipedia.org/wiki/Carl_Edvard_Johansson', why: 'Carl Edvard Johansson\'s 1901 invention standardized precision measurement around the world. The patents and preserved early sets are museum pieces.' },
        ],
      },

      seeAlso: ['lathe', 'mill', 'engine_basics'],
      prereqs: ['lathe', 'mill'],
      leadsTo: [],
      chapterActivity: 'Monthly metrology night at a Queens maker space — practice on borrowed gauge blocks, coffee and arguments provided.',
      sources: [
        'https://en.wikipedia.org/wiki/Engineering_tolerance',
        'https://en.wikipedia.org/wiki/Joseph_Whitworth',
        'https://en.wikipedia.org/wiki/Gauge_block',
        'https://books.industrialpress.com/machinery-handbook/',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
