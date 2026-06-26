// content/welding.js
// Batch: B07-trades-I
// Last updated: 2026-04-23 by BATCH B07-trades-I
//
// Topics: mig, tig, stick
// Scaffold: lead -> figure -> whole idea -> before you start
//   -> sub-skills with worked examples + common mistakes
//   -> troubleshooting -> going deeper -> practice -> self-check -> first project.

window.CONTENT = window.CONTENT || {};
window.CONTENT.welding = {
  subjectId: 'welding',
  version: 3,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B07-trades-I',
  topics: {

    // ——— MIG WELDING ———
    mig: {
      id: 'mig',
      name: 'MIG Welding',
      level: 'Beginner',
      dek: 'Wire-feed welding — the process that built modern American manufacturing, and the easiest way in.',
      readTime: '17 min',

      sections: ['Whole idea', 'Before you start', 'The machine', 'Running a bead', 'Joints', 'Settings', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'In 1948, the Linde Division of Union Carbide introduced a welding process that fed a continuous wire electrode through a torch while shielding the arc with inert gas. It was meant for aluminum; steel, it turned out, loved it too. Within a decade, the American auto industry had adopted what became known as Gas Metal Arc Welding, or MIG. The process did not require the skill of stick welding or the patience of TIG. It was fast, forgiving, and could be learned in a long weekend. Every car built in Detroit from the 1960s on was held together, in part, by MIG welds.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/GMAW.welding.af.ncs.jpg?width=1200', caption: 'A MIG weld in progress.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'Hold a gun, pull a trigger, wire feeds out, an arc melts a puddle, you drag the puddle along the joint. The machine keeps every parameter constant so the welder can focus on travel speed and puddle size. Learn the sound of a good MIG arc — a crisp, continuous bacon-frying sizzle — and you have 90% of the skill.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'A 120-volt or 240-volt MIG machine (Hobart, Lincoln, Miller all make good entry machines at under $700). A bottle of 75/25 argon-CO₂ shielding gas. 0.030 or 0.035 ER70S-6 wire. An auto-darkening welding helmet. Leather gloves. A grinder with a cut-off wheel. Vise-Grip locking clamps. Fire-resistant jacket or apron. Cheap safety glasses to wear under the hood.' },
        { type: 'h3', text: 'Safety' },
        { type: 'p', text: 'UV from the arc will sunburn exposed skin in thirty seconds and damage eyes in less. An auto-darkening helmet is not optional. Fumes from galvanized steel cause zinc fume fever — use a respirator on coated metal. Ventilate. OSHA 29 CFR 1910.252 is the standard. AWS Safety in Welding is the trade\'s own guidance.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'GMAW — Gas Metal Arc Welding (the formal name for MIG). Shielding gas — the inert gas flowing around the arc. Wire feed speed — how fast the wire leaves the gun, in inches per minute. Voltage — sets the arc length and heat. Short-circuit transfer — the low-voltage mode where the wire touches the puddle and shorts briefly; good for thin metal. Spray transfer — high-voltage mode where metal sprays across the arc; faster, for thicker steel. Stickout — how far the wire extends from the tip (typically 3/8").' },

        { type: 'h2', text: 'The machine' },
        { type: 'p', text: 'Every MIG machine has a wire-feed speed knob and a voltage knob, plus a gas flow meter on the regulator. Inside the door of every quality machine is a settings chart for the wire diameter you are using: find your metal thickness, note the starting voltage and wire speed. That is the starting point; fine-tune by ear and eye.' },

        { type: 'h2', text: 'Running a bead' },
        { type: 'p', text: 'Hold the gun at about 15° from vertical, pushing or pulling the torch along the joint. Keep 3/8" of wire out of the tip. Pull the trigger: the wire feeds, the arc strikes, a puddle forms. Move at a steady pace — a good bead looks like a stack of dimes or a smooth ripple pattern. The arc should sound like bacon frying. If it pops and spits, turn down the voltage. If it sputters and the wire bunches, turn up the wire speed.' },
        { type: 'aside', label: 'Worked example', text: 'A flat-position butt weld on 1/8" mild steel: 0.030 wire, 75/25 gas at 25 CFH, voltage around 18, wire speed around 270 IPM. Stickout 3/8". Travel speed about 12 IPM. A clean bead is about 5/16" wide. Adjust voltage for the sound, wire speed for the puddle size. Practice on scrap until the bead is consistent.' },
        { type: 'aside', label: 'Common mistake', text: 'Moving too fast. A beginner instinctively hurries; the bead thins, the puddle does not wet into the base metal, and cold laps form (metal piled on top without fusion). Slow down until the puddle clearly flows out to both edges of the joint.' },

        { type: 'h2', text: 'Joints' },
        { type: 'p', text: 'Five fundamental joints: butt (two pieces edge-to-edge), lap (one over the other), tee (perpendicular), corner (two edges forming an L), edge (two pieces standing upright). Every structure made of steel reduces to combinations of these. Practice each on scrap until the bead reads clean.' },

        { type: 'h2', text: 'Settings, in practice' },
        { type: 'p', text: 'For mild steel: 0.030 wire and 75/25 argon-CO₂ for anything under 1/4" thick. Pure CO₂ is cheaper but spits more; the 75/25 blend is the working-shop default. On anything over 1/4", move to 0.035 wire and consider spray transfer. On galvanized, expect extra fume and porosity — grind the zinc off the weld zone first.' },

        { type: 'h2', text: 'Troubleshooting' },
        { type: 'p', text: 'The bead is piled up, not flat. Travel speed too slow, or voltage too low. Spatter everywhere. Voltage too high for wire speed; turn voltage down. Weld is porous. Shielding gas blew away (draft or wind), or the metal was dirty/galvanized. Wire crashes into the plate and bunches. Wire speed too high, voltage too low. The arc is erratic. Bad ground clamp connection; clean the metal where the clamp lands.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'After a weekend of mild-steel butts and lap joints, the next steps are out-of-position welding (vertical and overhead), flux-cored wire (for outdoor work where shielding gas blows away), and aluminum MIG (which requires a spool gun or push-pull torch). Jeffus\'s "Welding: Principles and Applications" is the classroom text; AWS SENSE certification is the national credential.' },

        { type: 'aside', label: 'Practice this week', text: 'Weld twenty flat-position butt joints on 1/8" mild steel scrap. Cut each in half with a grinder; look at the weld cross-section. The weld bead should wet into both pieces of base metal, with no cold lap. By the twentieth weld, most beginners get a consistent, good joint.' },
        { type: 'aside', label: 'Self-check', text: 'What sound does a good MIG arc make? (Bacon frying.) What is the typical stickout? (3/8".) Why does galvanized steel cause porosity? (Zinc vaporizes in the arc.) If any stumps you, watch Essential Craftsman "Introduction to Welding."' },

        { type: 'callout', text: 'First project: weld a simple steel frame — four pieces of 1"x1" angle iron mitered at 45° and MIG-welded at the corners. One hour of shop time. You will meet every basic MIG operation in one project.' },
      ],

      keyTerms: ['GMAW', 'wire feed speed', 'shielding gas', 'contact tip', 'MIG gun', 'spray transfer', 'short-circuit transfer', 'argon-CO₂', 'flux-cored', 'auto-darkening helmet', 'stickout', 'porosity', 'cold lap', 'spool gun'],

      resources: {
        videos: [
          { id: 'jy5wRgNOIkE', source: 'youtube', url: 'https://www.youtube.com/watch?v=jy5wRgNOIkE', title: 'Introduction to Welding', channel: 'Essential Craftsman', duration: '18:04', why: 'The first welding video anyone should watch.' },
          { id: '5M9I_bBrnZ0', source: 'youtube', url: 'https://www.youtube.com/watch?v=5M9I_bBrnZ0', title: '5 Types of Welding Explained', channel: 'TimWelds', duration: '12:33', why: 'Side-by-side comparison of five processes.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/c/LetsWeldSomething', title: 'Bob Moffatt — Let\'s Weld Something', channel: 'Bob Moffatt', duration: 'variable', why: '40+ years of MIG experience.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/channel/UCqq70AnPkj4-UApS_m_6mPw', title: 'Welding Tips and Tricks', channel: 'Jody Collier', duration: 'variable', why: 'Close-up arc shots, clear language.', featured: false },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@essentialcraftsman', title: 'Essential Craftsman — welding', channel: 'Essential Craftsman', duration: 'variable', why: 'Scott Wadsworth on beginner setups.', featured: false },
        ],
        books: [
          { title: 'Welding: Principles and Applications', author: 'Larry Jeffus', year: 2020, url: 'https://archive.org/details/weldingprinciple0000jeff_c6i5', why: 'The most-used American welding textbook.' },
          { title: 'Modern Welding', author: 'Althouse, Turnquist, Bowditch', year: 2020, url: '', why: 'Goodheart-Willcox classroom text.' },
          { title: 'The Welder\'s Handbook', author: 'Richard Finch', year: 2007, url: '', why: 'Practical pocket guide.' },
          { title: 'GMAW/FCAW Handbook', author: 'William H. Minnick', year: 2018, url: '', why: 'AWS SENSE-aligned wire-feed reference.' },
        ],
        articles: [
          { title: 'Gas metal arc welding', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Gas_metal_arc_welding', why: 'Physics and history.', year: null },
          { title: 'Welding', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Welding', why: 'Featured-article overview.', year: null },
          { title: 'OSHA 1910.252', source: 'U.S. DOL', url: 'https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.252', why: 'The federal welding safety standard.', year: null },
        ],
        courses: [
          { title: 'AWS SENSE Entry Welder Program', provider: 'AWS', url: 'https://www.aws.org/', free: false, why: 'Entry-level national certification.' },
          { title: 'WelderSkills', provider: 'Jody Collier', url: 'https://www.welderskills.com/', free: false, why: 'Paid online courses from Welding Tips and Tricks.' },
        ],
        tools: [
          { title: 'Lincoln Electric', url: 'https://www.lincolnelectric.com/', why: 'American MIG standard.' },
          { title: 'Miller Electric', url: 'https://www.millerwelds.com/', why: 'The other American MIG standard.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/GMAW.welding.af.ncs.jpg?width=1200', caption: 'MIG weld in progress.', credit: 'Wikimedia Commons', alt: 'MIG weld' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/GMAW_diagram_en.svg?width=1200', caption: 'MIG process diagram.', credit: 'Wikimedia Commons', alt: 'MIG diagram' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/GMAW_weld_area.svg?width=1200', caption: 'Close-up of the weld area.', credit: 'Wikimedia Commons', alt: 'MIG weld area' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Welding_helmet.jpg?width=1200', caption: 'Auto-darkening helmet.', credit: 'Wikimedia Commons', alt: 'Welding helmet' },
        ],
        animations: [
          { youtubeId: '5M9I_bBrnZ0', caption: 'TimWelds: five welding processes in twelve minutes.', why: 'The quickest process tour.' },
        ],
      },

      seeAlso: ['tig', 'stick', 'forge', 'ohms'],
      prereqs: [],
      leadsTo: ['tig', 'stick'],

      chapterActivity: 'A Saturday MIG crash course at a Gowanus metal shop.',

      sources: ['https://en.wikipedia.org/wiki/Gas_metal_arc_welding', 'https://en.wikipedia.org/wiki/Welding', 'https://www.aws.org/'],
      verifiedAt: '2026-04-23',
    },

    // ——— TIG WELDING ———
    tig: {
      id: 'tig',
      name: 'TIG Welding',
      level: 'Advanced',
      dek: 'The slowest, cleanest welding process — and the one that reveals the welder.',
      readTime: '19 min',

      sections: ['Whole idea', 'Before you start', 'The torch', 'Three hands', 'Steel', 'Aluminum', 'Stainless', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'In 1941, engineers at Northrop Aircraft developed a welding process that used a non-consumable tungsten electrode and helium shielding gas, originally to weld magnesium airframes. Seventy-five years later, the same process — now usually run with argon and called Gas Tungsten Arc Welding, or TIG — is the standard for any weld that must be strong, precise, and photographed.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gas_arc_welding_(TIG_%26_MIG).PNG?width=1200', caption: 'TIG and MIG side by side.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'Hold a torch with a sharpened tungsten electrode in one hand. Dip filler rod into the puddle with the other. Control the amperage with a foot pedal. Unlike MIG, nothing is automatic — you are adjusting heat, speed, and filler by hand at the same time. The craft is closest in feel to playing a wind instrument.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'An AC/DC TIG machine (Lincoln Precision TIG, Miller Syncrowave, or an inverter like Everlast at budget). A bottle of pure argon shielding gas. Tungsten electrodes (2% lanthanated for most work, pure tungsten for aluminum on older AC machines). Cerium or thoriated tungsten for some applications. Filler rod (ER70S-2 for steel, 4043 or 5356 for aluminum, 308L for stainless). A foot pedal. Same PPE as MIG.' },
        { type: 'h3', text: 'Safety' },
        { type: 'p', text: 'Same as MIG, plus: tungsten electrodes can break off in the puddle and fly. Grind tungsten with the wheel running along the tip, not across — a cross-grind produces airborne particles. If you use thoriated tungsten, grind only in a well-ventilated area with a dust collector.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'GTAW — Gas Tungsten Arc Welding. Tungsten — the non-consumable electrode. Filler rod — the hand-fed rod melted into the puddle. Foot pedal — controls the arc current. AC balance — the ratio of positive to negative half-cycles in AC (for aluminum). Back purge — argon behind the weld to prevent oxidation (stainless, titanium). Gas lens — a nozzle insert that produces smoother, more concentrated shielding.' },

        { type: 'h2', text: 'The torch' },
        { type: 'p', text: 'A TIG torch holds the tungsten electrode in a collet and directs shielding gas around it through a ceramic or glass cup. The tungsten is sharpened to a point for DC (steel and stainless) or balled at the tip for older AC machines (aluminum). Modern inverters run square-wave AC and use a sharpened tip on aluminum too.' },

        { type: 'h2', text: 'Three hands, one puddle' },
        { type: 'p', text: 'Left hand moves the torch at a steady pace. Right hand dips the filler rod into the puddle and withdraws it, rhythmically, just as the puddle reaches its hottest point. Right foot modulates the pedal — down for more heat, up for less. All three coordinate through the hood at a viewing distance of about eight inches. Beginners try to do everything at once and dip the tungsten immediately, contaminating it. Masters pace their hands and feet like a drummer.' },
        { type: 'aside', label: 'Worked example', text: 'A carbon-steel butt weld on 1/8" mild steel: DC electrode negative (DCEN), 2% lanthanated tungsten sharpened to a point, pure argon at 15 CFH, pedal amps maxed at about 100. Strike the arc on the starter plate. Walk the arc to the start of the joint. Puddle forms; dip filler. Move forward an eighth-inch; puddle forms again; dip. Repeat. The bead should look like a stack of dimes.' },
        { type: 'aside', label: 'Common mistake', text: 'Dipping the tungsten into the puddle. The molten steel contaminates the tungsten; the arc wanders; the weld is ruined. Stop, grind the tungsten clean, restart. Everyone does this their first hundred welds.' },

        { type: 'h2', text: 'Steel' },
        { type: 'p', text: 'Steel TIG runs on DCEN (electrode negative). Pure argon. ER70S-2 filler. A sharpened tungsten. Amperage sized to metal thickness: roughly 1 amp per 0.001" of thickness (so 1/8" = 0.125" = 125 A max). Pedal-modulate to avoid burn-through.' },

        { type: 'h2', text: 'Aluminum — the hardest common metal' },
        { type: 'p', text: 'Aluminum runs on AC. The alternating current cleans the oxide layer (half the cycle) and melts the metal (the other half). AC balance — the ratio — is adjustable on modern machines; more cleaning for dirty metal, more penetration for thick. 4043 filler for most work, 5356 for high-strength or anodized applications. Pre-heat thick aluminum; it sucks heat away from the puddle like a sponge.' },

        { type: 'h2', text: 'Stainless — the surface matters' },
        { type: 'p', text: 'Stainless runs on DCEN like steel, with ER308L or ER316L filler. The challenge is heat: stainless warps easily and discolors at moderate heat. Low amperage, fast travel, back-purge on pipe welds to prevent internal oxidation (the dreaded "sugar"). The finished weld, done right, is the silver color of the base metal, not rainbow-heat-tinted.' },

        { type: 'h2', text: 'Troubleshooting' },
        { type: 'p', text: 'Tungsten contaminated. Stop, break off the contaminated tip, regrind. Weld is black/crystalline. Not enough shielding gas or too much pressure (gas blowing away from the puddle). Turn CFH down and check cup integrity. Bead is humped. Travel speed too fast — puddle not wetting out. Aluminum won\'t form a puddle. Metal too thick for amperage, or AC balance too far toward cleaning.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'After carbon steel and aluminum, the next domains are stainless pipe with back-purging, titanium (requires elaborate gas shielding), and pulse TIG (current alternates between high and low to control penetration on thin metal). Jody Collier\'s entire channel is a graduate school on the subject.' },

        { type: 'aside', label: 'Practice this week', text: 'On a scrap plate of 1/8" mild steel, practice laying down a puddle without filler. Just drag the arc and let the steel flow in place. When you can produce a clean, shiny puddle trail for 6 inches without dipping the tungsten, add filler. Build the hands before you build the bead.' },
        { type: 'aside', label: 'Self-check', text: 'What current does TIG use on aluminum? (AC.) What does DCEN stand for? (Direct Current Electrode Negative.) What prevents internal oxidation on stainless pipe welds? (Back purge with argon inside the pipe.) If any stumps you, watch Jody Collier "TIG Welding for Beginners."' },

        { type: 'callout', text: 'First project: a small picture frame in mild steel 1/8" flat bar, TIG-welded at the miters. One morning. You will meet pedal control, tungsten handling, and filler timing in a project that is genuinely yours.' },
      ],

      keyTerms: ['GTAW', 'heliarc', 'tungsten electrode', 'foot pedal', 'AC balance', 'filler rod', 'argon shielding', 'pulse TIG', 'back purge', 'stack of dimes', 'cup', 'gas lens', 'DCEN', 'lanthanated'],

      resources: {
        videos: [
          { id: 'e2Frbe2a2PE', source: 'youtube', url: 'https://www.youtube.com/watch?v=e2Frbe2a2PE', title: 'TIG Welding Tips and Tricks for the Beginner', channel: 'Jody Collier', duration: '11:08', why: 'Canonical beginner TIG video.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/channel/UCqq70AnPkj4-UApS_m_6mPw', title: 'Welding Tips and Tricks — full TIG library', channel: 'Jody Collier', duration: 'variable', why: 'Best free TIG library in English.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/c/LetsWeldSomething', title: 'Bob Moffatt — Let\'s Weld Something (TIG)', channel: 'Bob Moffatt', duration: 'variable', why: 'Aluminum and stainless TIG demos.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@essentialcraftsman', title: 'Essential Craftsman — TIG segments', channel: 'Essential Craftsman', duration: 'variable', why: 'Setting up a beginner TIG machine.', featured: false },
        ],
        books: [
          { title: 'Welding: Principles and Applications', author: 'Larry Jeffus', year: 2020, url: 'https://archive.org/details/weldingprinciple0000jeff_c6i5', why: 'Classroom standard.' },
          { title: 'Modern Welding', author: 'Althouse, Turnquist, Bowditch', year: 2020, url: '', why: 'TIG subprocesses with parameter tables.' },
          { title: 'AWS Welding Handbook, Volume 2', author: 'AWS', year: 2004, url: 'https://www.aws.org/', why: 'The engineering reference.' },
        ],
        articles: [
          { title: 'Gas tungsten arc welding', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Gas_tungsten_arc_welding', why: 'Heliarc history, physics.', year: null },
          { title: 'Welding', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Welding', why: 'Safety sections.', year: null },
          { title: 'Welding Tips and Tricks', source: 'Jody Collier', url: 'https://www.weldingtipsandtricks.com/', why: 'Over a thousand TIG articles.', year: null },
        ],
        courses: [
          { title: 'AWS SENSE Advanced Welder Program', provider: 'AWS', url: 'https://www.aws.org/', free: false, why: 'Level II credential includes aluminum and stainless TIG.' },
        ],
        tools: [
          { title: 'Miller Syncrowave / Lincoln Precision TIG', url: 'https://www.millerwelds.com/', why: 'American TIG standards.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gas_arc_welding_(TIG_%26_MIG).PNG?width=1200', caption: 'TIG vs MIG schematic.', credit: 'Wikimedia Commons', alt: 'TIG vs MIG' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/TIG_welding_close-up.jpg?width=1200', caption: 'TIG arc close-up.', credit: 'Wikimedia Commons', alt: 'TIG close-up' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aluminum_TIG_weld.jpg?width=1200', caption: 'Finished TIG weld on aluminum.', credit: 'Wikimedia Commons', alt: 'TIG aluminum' },
        ],
        animations: [
          { youtubeId: 'e2Frbe2a2PE', caption: 'Jody Collier: TIG for beginners.', why: 'Eleven-minute launch of a thousand weekend welders.' },
        ],
      },

      seeAlso: ['mig', 'stick', 'forge', 'ohms'],
      prereqs: ['mig'],
      leadsTo: [],

      chapterActivity: 'A Saturday TIG open-shop at a Long Island City metal school.',

      sources: ['https://en.wikipedia.org/wiki/Gas_tungsten_arc_welding', 'https://en.wikipedia.org/wiki/Welding', 'https://www.aws.org/'],
      verifiedAt: '2026-04-23',
    },

    // ——— STICK WELDING ———
    stick: {
      id: 'stick',
      name: 'Stick Welding',
      level: 'Intermediate',
      dek: 'Shielded metal arc welding — rugged, portable, and still the process that holds pipelines and pressure vessels together.',
      readTime: '17 min',

      sections: ['Whole idea', 'Before you start', 'Electrodes', 'Striking', 'Running a bead', 'Reading the slag', 'Positions', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'A stick welder on a windy hillside, welding pipe two hundred miles from the nearest air compressor, is running a process that has not fundamentally changed since 1927. Shielded Metal Arc Welding — SMAW, or stick — uses a consumable electrode coated in flux. The electrode melts to form the filler; the flux melts to form a shielding slag. You need no shielding gas, no wire feeder, no clean workpiece. You need a transformer, a ground clamp, and a stick.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/SMAW_weld_area_PL.svg?width=1200', caption: 'The SMAW process: coated rod, arc, slag, weld metal.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'Strike an arc between a coated steel rod and a grounded workpiece. The rod melts into the puddle; the flux coating vaporizes into a shielding gas and forms slag on the cooled weld. You move at a steady pace, maintaining a consistent arc length roughly equal to the rod diameter. That is the entire process. Everything else is variation by rod type and position.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'A stick welder (AC or AC/DC; the Lincoln Tombstone AC225 has been in production since the 1960s). Rods — start with E6013 at 1/8" diameter for general work. Leather gloves and jacket. Auto-darkening helmet. Chipping hammer and wire brush. A ground clamp. Lots of scrap plate.' },
        { type: 'h3', text: 'Safety' },
        { type: 'p', text: 'Same UV and fume concerns as MIG. Additionally: hot slag flies off the weld as it cools — wear long sleeves and keep the collar buttoned. The flux coating of some rods (low-hydrogen 7018s) must be kept dry; moisture in the coating causes hydrogen cracks in the weld. Store rods in a rod oven or hermetic tube.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'SMAW — Shielded Metal Arc Welding. Electrode — the coated rod, also called stick. Flux — the coating that vaporizes into shielding gas and forms slag. Slag — the glassy coating on the finished bead. Arc length — distance from the rod tip to the workpiece, usually equal to rod diameter. Polarity — DCEP (reverse polarity, electrode positive) for most applications; DCEN or AC for specific rod types. E-number — the rod classification; E6010 is a 60 ksi all-position rod with a cellulose coating.' },

        { type: 'h2', text: 'Electrodes — the whole kit is in the coating' },
        { type: 'p', text: 'Stick rods are classified by a four-digit AWS number. E6010: cellulose coating, all positions, deep penetration, for pipeline root passes on dirty steel. E6011: AC-friendly version of 6010. E6013: general-purpose, easy to strike, mild steel. E7018: low-hydrogen rod, smooth bead, high tensile strength, required on most structural work. Learn 6013 first (easy), then 7018 (harder but more common in the trade).' },
        { type: 'aside', label: 'Worked example', text: 'A beginner running a 1/8" E6013 on 1/4" mild steel, flat position: amperage around 110-130, DCEP or AC. Strike by scratching like a match, lift to establish the arc, then lower to 1/8" above the work. Travel at a pace that makes the bead 3x the rod diameter wide (about 3/8" on a 1/8" rod). The bead should be uniform and slightly crowned.' },
        { type: 'aside', label: 'Common mistake', text: 'Arc length too long. The bead becomes wide and splattered; the flux cannot shield the puddle adequately. Keep the arc about one rod diameter long. If you hear the arc sputter and hiss, you are too far; if it sticks and goes dark, too close.' },

        { type: 'h2', text: 'Striking the arc' },
        { type: 'p', text: 'Two methods. The scratch start: drag the electrode across the workpiece like striking a match. The tap start: tap the rod straight down, then lift. Both establish the arc; scratch is easier for beginners. If the rod sticks to the work, bend the electrode holder sharply to break it free.' },

        { type: 'h2', text: 'Running a bead' },
        { type: 'p', text: 'Hold the rod at 15-30° off perpendicular, leaning in the direction of travel. Maintain arc length. Drag for E6013 and E7018 (most common stick rods); push for cellulose rods like E6010. Travel at the speed that produces a uniform bead — beginners tend to move too fast. Listen: a steady bacon-frying crackle means a clean arc. Pops and spatter mean arc too long.' },

        { type: 'h2', text: 'Reading the slag' },
        { type: 'p', text: 'After the bead cools, chip the slag with a hammer. A clean weld has slag that chips off in sheets, revealing a uniform bead with regular ripples. Uneven slag coverage or pockets mean travel speed was wrong. Cracks in the slag can indicate cracks in the weld beneath. After slag removal, wire-brush the bead.' },

        { type: 'h2', text: 'Positions' },
        { type: 'p', text: 'Flat (1G): easiest. Horizontal (2G): moderate; gravity pulls the puddle down, so the bead tends to sag. Vertical (3G): harder; either run uphill (most common) or downhill (faster but shallow penetration). Overhead (4G): hardest; gravity tries to drop the puddle onto the welder. Structural welders must pass qualification tests in at least 2G, 3G, and 4G.' },

        { type: 'h2', text: 'Troubleshooting' },
        { type: 'p', text: 'Rod sticks to work. Arc went too short; break free and restart with more arc length. Bead is porous. Wet rod (7018 especially) — bake or replace. Slag gets trapped in the weld. Travel too fast; slow down or reduce rod angle. Weld is undercut at the edge. Arc too long or travel too fast. The weld cracks. Wrong rod for the metal, or quench-cooled from high heat.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'After flat-position mild steel, the progression is vertical (3G), overhead (4G), structural certification (AWS D1.1), and pipe welding (uphill 6010 root, 7018 fill). Hoobasar Rampaul\'s "Pipe Welding Procedures" is the bible of the pipeline trade; Bob Moffatt\'s videos show the technique.' },

        { type: 'aside', label: 'Practice this week', text: 'Lay twenty flat-position E6013 stringer beads on scrap plate. Chip each, inspect, and note what was different between the clean ones and the sloppy ones. By the twentieth, your bead starts to stabilize.' },
        { type: 'aside', label: 'Self-check', text: 'What is the typical arc length? (One rod diameter.) Why must 7018 rods be kept dry? (Moisture causes hydrogen cracking.) Which rod is common for pipeline root passes? (E6010.) If any stumps you, watch Essential Craftsman "Stick Welding Tips for Beginners."' },

        { type: 'callout', text: 'First project: weld two pieces of 1/4" flat bar together in a lap joint with E6013 on a cheap stick welder. Chip the slag, inspect, and cut through the joint with a grinder to see the penetration. One hour. Cost under $10 in rods.' },
      ],

      keyTerms: ['SMAW', 'stick electrode', 'flux coating', 'slag', 'E6010', 'E6013', 'E7018', 'arc length', 'amperage', 'constant current', 'stringer bead', 'weave', 'root pass', 'DCEP'],

      resources: {
        videos: [
          { id: 'BrJ-ALF7va4', source: 'youtube', url: 'https://www.youtube.com/watch?v=BrJ-ALF7va4', title: 'Stick Welding tips for beginners #1', channel: 'Essential Craftsman', duration: '16:42', why: 'Beginner stick walkthrough.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/c/LetsWeldSomething', title: 'Bob Moffatt — Let\'s Weld Something (stick)', channel: 'Bob Moffatt', duration: 'variable', why: 'Pipe and structural stick.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/channel/UCqq70AnPkj4-UApS_m_6mPw', title: 'Welding Tips and Tricks — stick', channel: 'Jody Collier', duration: 'variable', why: 'Stick fundamentals with arc shots.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@essentialcraftsman', title: 'Essential Craftsman — stick series', channel: 'Essential Craftsman', duration: 'variable', why: 'Beginner SMAW series.', featured: false },
        ],
        books: [
          { title: 'Welding: Principles and Applications', author: 'Larry Jeffus', year: 2020, url: 'https://archive.org/details/weldingprinciple0000jeff_c6i5', why: 'SMAW chapters are the classroom standard.' },
          { title: 'Modern Welding', author: 'Althouse, Turnquist, Bowditch', year: 2020, url: '', why: 'AWS E-number taxonomy.' },
          { title: 'Pipe Welding Procedures', author: 'Hoobasar Rampaul', year: 2003, url: '', why: 'Pipeline welder\'s reference.' },
        ],
        articles: [
          { title: 'Shielded metal arc welding', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Shielded_metal_arc_welding', why: 'Process and electrode classification.', year: null },
          { title: 'Welding', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Welding', why: 'Larger context.', year: null },
          { title: 'AWS Welding Handbook', source: 'AWS', url: 'https://pubs.aws.org/', why: 'The trade\'s reference.', year: null },
        ],
        courses: [
          { title: 'AWS SENSE Entry Welder Program', provider: 'AWS', url: 'https://www.aws.org/', free: false, why: 'National entry-level certification.' },
          { title: 'Hobart Institute of Welding Technology', provider: 'Hobart', url: 'https://welding.org/', free: false, why: 'Residential welding school.' },
        ],
        tools: [
          { title: 'Lincoln / ESAB stick machines', url: 'https://www.lincolnelectric.com/', why: 'Lincoln Tombstone is the 60-year American standard.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/SMAW_weld_area_PL.svg?width=1200', caption: 'SMAW weld area.', credit: 'Wikimedia Commons', alt: 'SMAW diagram' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Stick_welding_arc.jpg?width=1200', caption: 'A stick arc on structural steel.', credit: 'Wikimedia Commons', alt: 'Stick arc' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Welding_rod_stub.jpg?width=1200', caption: 'Spent electrode stubs.', credit: 'Wikimedia Commons', alt: 'Stick stubs' },
        ],
        animations: [
          { youtubeId: 'BrJ-ALF7va4', caption: 'Essential Craftsman: stick for beginners.', why: 'Best free stick-welding intro.' },
        ],
      },

      seeAlso: ['mig', 'tig', 'forge', 'code'],
      prereqs: [],
      leadsTo: ['tig'],

      chapterActivity: 'A stick-welding night at a Bronx union training center.',

      sources: ['https://en.wikipedia.org/wiki/Shielded_metal_arc_welding', 'https://en.wikipedia.org/wiki/Welding', 'https://www.aws.org/'],
      verifiedAt: '2026-04-23',
    },

  },
};
