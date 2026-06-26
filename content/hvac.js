// content/hvac.js
// Batch: B07-trades-I
// Last updated: 2026-04-23 by BATCH B07-trades-I
//
// Topics: refrigeration, ductwork, thermostats. Scaffolded with worked examples + practice.

window.CONTENT = window.CONTENT || {};
window.CONTENT.hvac = {
  subjectId: 'hvac',
  version: 3,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B07-trades-I',
  topics: {

    // ——— REFRIGERATION CYCLE ———
    refrigeration: {
      id: 'refrigeration',
      name: 'Refrigeration Cycle',
      level: 'Intermediate',
      dek: 'Compress a gas, let it expand, and it gets cold — the twentieth century\'s most consequential engineering trick.',
      readTime: '19 min',

      sections: ['Whole idea', 'Before you start', 'The four components', 'Latent heat', 'Refrigerants', 'Gauges', 'Superheat & subcooling', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'In 1902, a 25-year-old engineer named Willis Carrier was trying to control the humidity in a Brooklyn printing plant whose paper kept jamming the presses on hot July days. He designed a machine that condensed a circulating gas over chilled coils, pulled moisture out of the air, and — almost as a side effect — cooled the room. Air conditioning was not invented to make people comfortable. It was invented to print better. Every refrigerator, every heat pump, every split system you will ever service is a descendant of that Brooklyn machine.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Heatpump2.svg?width=1200', caption: 'The four-component vapor-compression cycle.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'Cold is the absence of heat. A refrigeration system does not create cold; it moves heat from where you don\'t want it (inside the house) to where you do (outside). The four components — compressor, condenser, expansion valve, evaporator — form a closed loop in which a refrigerant alternates between liquid and gas, picking up heat inside and dumping it outside.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'A manifold gauge set (digital Fieldpiece or analog). A vacuum pump for evacuating a system before charging. Refrigerant recovery machine (required by law to legally handle refrigerants). Leak detector (electronic or bubble soap). A temperature probe clamp for measuring pipe temperatures. A digital multimeter for the electrical side.' },
        { type: 'h3', text: 'Safety' },
        { type: 'p', text: 'Refrigerants at pressure freeze skin on contact. Refrigerant in a confined space can asphyxiate. EPA Section 608 certification is required by federal law to legally buy, handle, or vent refrigerants. R-32 and R-454B are mildly flammable; do not smoke or use torch near charged lines.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'Compressor — raises refrigerant pressure and temperature. Condenser — outdoor coil, rejects heat. Evaporator — indoor coil, absorbs heat. Expansion valve (TXV, EEV) or capillary tube — drops pressure between condenser and evaporator. Suction line — low-pressure gas returning to compressor. Liquid line — high-pressure liquid leaving the condenser. Superheat — temperature of the refrigerant vapor above its boiling point at that pressure. Subcooling — temperature of the liquid below its condensing point. Delta-T — the temperature drop across the evaporator.' },

        { type: 'h2', text: 'The four components in detail' },
        { type: 'p', text: 'Compressor: takes low-pressure, cold gas from the evaporator, squeezes it to high pressure and high temperature, sends to condenser. Three types — scroll (modern split systems), reciprocating (older equipment and commercial), rotary (minisplits). Condenser: a finned coil with a fan, where hot high-pressure gas gives up heat to outdoor air and condenses into liquid. Expansion device: drops pressure by a known amount; the pressure drop causes a temperature drop. Evaporator: a finned coil indoors where the cold, low-pressure refrigerant boils as it absorbs heat from the passing air, turning back to gas and returning to the compressor.' },

        { type: 'h2', text: 'Latent heat — the physics' },
        { type: 'p', text: 'The trick behind all refrigeration is the latent heat of vaporization. A liquid absorbs a large amount of heat when it boils — for R-410A, about 80 BTU per pound. It gives that heat back when it condenses. The cycle pumps this heat from evaporator (indoor) to condenser (outdoor) using the refrigerant\'s phase change as a shuttle. The compressor does the work; the refrigerant is the carrier.' },
        { type: 'aside', label: 'Worked example', text: 'A 3-ton air conditioner (36,000 BTU/hr). At 80 BTU/lb latent heat, it needs to evaporate 36,000/80 = 450 lbs/hr of refrigerant, or 7.5 lbs/minute, to move that much heat from inside to outside. The compressor churns this amount through the loop continuously when the unit is running.' },

        { type: 'h2', text: 'Refrigerants — a chain of compromises' },
        { type: 'p', text: 'Early refrigerators used ammonia (toxic) or sulfur dioxide (worse). In 1928, Thomas Midgley Jr. synthesized R-12 (Freon) — nontoxic, nonflammable, cheap. Also, as Molina and Rowland proved in 1974, destroying the ozone layer. The 1987 Montreal Protocol phased it out. R-22 replaced it, then R-410A, now R-32 and R-454B. Each new refrigerant trades one property for another: lower ozone depletion but higher global warming potential, or better performance but mild flammability. Every field tech works with whichever compromise is on the nameplate.' },

        { type: 'h2', text: 'Reading the gauges' },
        { type: 'p', text: 'The manifold connects to the suction and liquid service ports on the system. Suction (blue, low-side) pressure reads low — typically 60-70 psi for R-410A cooling. Liquid (red, high-side) pressure reads high — typically 250-350 psi for R-410A. The gauges have temperature scales corresponding to each refrigerant: the temperature at which the refrigerant would boil at that pressure.' },

        { type: 'h2', text: 'Superheat and subcooling' },
        { type: 'p', text: 'Superheat is the difference between the actual suction-line temperature and the saturation temperature at suction pressure. It tells you if the evaporator is using all of its surface to boil refrigerant. Typical target: 8-12°F. Subcooling is the liquid-line equivalent: how far below condensing temperature is the liquid. Typical target: 10-12°F. These two measurements diagnose 90% of what is wrong with a charged system.' },
        { type: 'aside', label: 'Worked example', text: 'R-410A system. Suction pressure 120 psi (saturation temp 40°F). Suction line actual temp 52°F. Superheat = 52 - 40 = 12°F. Acceptable. Liquid pressure 350 psi (saturation 104°F). Liquid line temp 94°F. Subcooling = 104 - 94 = 10°F. Acceptable. The system is correctly charged.' },
        { type: 'aside', label: 'Common mistake', text: 'Adding refrigerant to compensate for a dirty filter or a blocked coil. The superheat rises because the evaporator is starved for airflow, not for charge. Adding refrigerant makes the problem worse, not better. Always check airflow before adjusting charge.' },

        { type: 'h2', text: 'Troubleshooting — the field diagnostic' },
        { type: 'p', text: 'Low suction, low head, warm supply air. Undercharged; find the leak, repair, evacuate, recharge. High head pressure. Dirty condenser coil or failed condenser fan. Warm supply air but correct pressures. Indoor airflow issue; check filter and blower. Compressor trips on overload. Overcharged, or head pressure too high; check condenser fan. Ice on evaporator. Low airflow over indoor coil (dirty filter, blocked return); do not add refrigerant.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'After basic split-system diagnostics, the next territories are heat pumps (the same cycle with a reversing valve), minisplits (inverter-driven variable-capacity systems), commercial refrigeration (larger systems, different refrigerants, more complex controls), and commissioning per ACCA Manual T. HVAC School\'s podcast catalog is the single best free deep-dive in English.' },

        { type: 'aside', label: 'Practice this week', text: 'On a friend\'s A/C system (with permission), attach a manifold gauge set and read superheat and subcooling. Compare to the unit\'s nameplate target values. You will see in five minutes whether the system is charged correctly — a skill that technicians charge $200 for.' },
        { type: 'aside', label: 'Self-check', text: 'What are the four components of the refrigeration cycle? (Compressor, condenser, expansion valve, evaporator.) What is superheat? (Suction-line temperature above saturation.) What certification is required to handle refrigerants? (EPA Section 608.) If any stumps you, watch Bryan Orr\'s "Refrigeration Cycle 101."' },

        { type: 'callout', text: 'First project: take the EPA Section 608 Core and Type I exam (for small appliances). Online, under $25, self-paced. Required to buy most refrigerants legally. The exam covers the cycle, the refrigerants, the regulations — the knowledge every HVAC tech starts with.' },
      ],

      keyTerms: ['compressor', 'condenser', 'evaporator', 'expansion valve', 'superheat', 'subcooling', 'latent heat', 'refrigerant', 'Montreal Protocol', 'EPA 608', 'TXV', 'delta-T', 'saturation', 'manifold'],

      resources: {
        videos: [
          { id: 'ByF6U9Cybdc', source: 'youtube', url: 'https://www.youtube.com/watch?v=ByF6U9Cybdc', title: 'HVAC 1st Year Apprenticeship — Refrigeration Cycle', channel: 'HVAC School', duration: '54:32', why: 'Bryan Orr teaches the whole cycle.' },
          { id: 'VJX0LyxRV0E', source: 'youtube', url: 'https://www.youtube.com/watch?v=VJX0LyxRV0E', title: 'Refrigeration Cycle 101', channel: 'HVAC School', duration: '28:04', why: 'Shorter companion class.' },
          { id: null, source: 'other', url: 'https://www.hvacrschool.com/', title: 'HVAC School — full explainers', channel: 'Bryan Orr', duration: 'variable', why: 'Free podcast, videos, tech tips.' },
          { id: null, source: 'other', url: 'https://www.thisoldhouse.com/', title: 'This Old House — HVAC segments', channel: 'This Old House', duration: 'variable', why: 'Richard Trethewey on heat-pump retrofits.', featured: false },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/mattrisinger', title: 'The Build Show — heat pumps', channel: 'Matt Risinger', duration: 'variable', why: 'Modern high-performance HVAC.', featured: false },
        ],
        books: [
          { title: 'Modern Refrigeration and Air Conditioning', author: 'Althouse, Turnquist, Bracciano', year: 2025, url: '', why: 'Goodheart-Willcox 22nd edition.' },
          { title: 'Refrigeration & Air Conditioning Technology', author: 'Whitman, Johnson, Tomczyk, Silberstein', year: 2020, url: 'https://archive.org/details/refrigerationair0000unse', why: 'Delmar classroom text.' },
          { title: 'This Old House HVAC', author: 'Trethewey & Best', year: 1994, url: '', why: 'Clearest homeowner primer.' },
          { title: 'ASHRAE Handbook — Refrigeration', author: 'ASHRAE', year: 2022, url: 'https://www.ashrae.org/technical-resources/ashrae-handbook', why: 'Engineer\'s reference.' },
        ],
        articles: [
          { title: 'Vapor-compression refrigeration', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Vapor-compression_refrigeration', why: 'P-H diagram and cycle detail.', year: null },
          { title: 'Refrigeration', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Refrigeration', why: 'Ice harvesting to modern mechanical.', year: null },
          { title: 'ASHRAE Handbook', source: 'ASHRAE', url: 'https://www.ashrae.org/technical-resources/ashrae-handbook', why: 'The professional reference.', year: null },
        ],
        courses: [
          { title: 'EPA Section 608 Certification', provider: 'EPA', url: 'https://www.epa.gov/section608', free: false, why: 'Federally required to handle refrigerant.' },
          { title: 'HVAC School', provider: 'Bryan Orr', url: 'https://www.hvacrschool.com/', free: true, why: 'Best free working-tech education online.' },
        ],
        tools: [
          { title: 'Fieldpiece gauges', url: 'https://www.fieldpiece.com/', why: 'Digital manifold gauges with wireless probes.' },
          { title: 'TruTech Tools', url: 'https://trutechtools.com/', why: 'Curated tool shop for HVAC.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Heatpump2.svg?width=1200', caption: 'Heat pump / refrigeration cycle.', credit: 'Wikimedia Commons', alt: 'Heat pump' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Refrigeration_PV_diagram.svg?width=1200', caption: 'P-V diagram of the cycle.', credit: 'Wikimedia Commons', alt: 'P-V diagram' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/HVAC_condenser_unit.jpg?width=1200', caption: 'Outdoor condenser unit.', credit: 'Wikimedia Commons', alt: 'Condenser unit' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Absorption_refrigerator_working.svg?width=1200', caption: 'Absorption-cycle alternative.', credit: 'Wikimedia Commons', alt: 'Absorption cycle' },
        ],
        animations: [
          { youtubeId: 'VJX0LyxRV0E', caption: 'HVAC School: Refrigeration Cycle 101.', why: 'Best free cycle introduction.' },
        ],
      },

      seeAlso: ['ductwork', 'thermostats', 'ohms', 'pipe_types'],
      prereqs: [],
      leadsTo: ['ductwork', 'thermostats'],

      chapterActivity: 'A Saturday manifold-gauge clinic at a Queens HVAC supply.',

      sources: ['https://en.wikipedia.org/wiki/Vapor-compression_refrigeration', 'https://en.wikipedia.org/wiki/Refrigeration', 'https://www.hvacrschool.com/'],
      verifiedAt: '2026-04-23',
    },

    // ——— DUCTWORK ———
    ductwork: {
      id: 'ductwork',
      name: 'Ductwork',
      level: 'Intermediate',
      dek: 'The invisible river of air that makes a furnace actually heat a house — and fails more often than the equipment.',
      readTime: '18 min',

      sections: ['Whole idea', 'Before you start', 'Static pressure', 'Manual J & D', 'Materials', 'Sealing', 'Balancing', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'A properly sized furnace hooked to a badly designed duct system is a properly sized furnace in a house that is cold. The equipment does not heat; the air coming out of the registers heats. Everything between the plenum on top of the furnace and the grille in the hallway bedroom is the ductwork trade\'s responsibility, and it is the part of an HVAC installation that most frequently fails to do its job. Surveys of American homes find that typical duct systems lose 20 to 40 percent of their conditioned air to leaks and poor design.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ductwork_in_basement.jpg?width=1200', caption: 'Rigid galvanized ductwork in a basement.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'Air has mass. Moving it takes pressure. A duct system\'s job is to deliver the design airflow to every room at the design static pressure, using supply trunks, branches, and registers. Get the sizing right and the equipment works; get it wrong and the bedroom at the end of the run is always five degrees off.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'Tin snips (red for left cuts, green for right, yellow for straight). A 1-lb hammer. A hand seamer for S-cleats and drives. A sheet-metal screw gun. Mastic and a brush. UL-181 rated foil tape. A duct stretcher for flex. A manometer for static-pressure readings. An anemometer for airflow measurements.' },
        { type: 'h3', text: 'Safety' },
        { type: 'p', text: 'Sheet-metal edges cut. Gloves on every cut piece. Respirator for old fiberglass duct liner (may be asbestos in pre-1980 installations; test first). Eye protection for sheet-metal screws flying off.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'Plenum — the box on top of the furnace where ducts connect. Trunk — the main supply duct. Branch — a smaller duct off the trunk feeding a register. Register — the grille at the end of a supply branch. Return — the duct carrying air back to the furnace. Static pressure — the pressure difference between duct and ambient, measured in inches of water column. CFM — cubic feet per minute, the unit of airflow.' },

        { type: 'h2', text: 'Static pressure — the constraint' },
        { type: 'p', text: 'A residential air handler is rated at a specific total external static pressure (TESP), typically 0.5 inches water column. All the duct system\'s restrictions — filter, coil, trunk, elbows, registers — must add up to less than that. A typical failure: an installer puts a high-MERV filter on a 0.5 WC system; the filter alone uses 0.3 WC, leaving 0.2 for the whole rest of the system. The blower struggles, airflow drops, the coil freezes.' },
        { type: 'aside', label: 'Worked example', text: 'An 80,000 BTU furnace moving 1,200 CFM at 0.5 WC. Filter: 0.1 WC. Coil: 0.15 WC. Supply plenum and trunk: 0.10 WC. Return plenum: 0.05 WC. Registers: 0.05 WC. Total: 0.45 WC — within budget. Swap the filter to a higher MERV (0.2 WC) and the total goes to 0.55 WC — over budget; airflow drops below design.' },

        { type: 'h2', text: 'Manual J and Manual D' },
        { type: 'p', text: 'ACCA Manual J calculates the heating and cooling load room-by-room — accounting for windows, walls, infiltration, internal gains. Output: CFM required per room. Manual D then sizes the ducts to deliver that CFM at the design static pressure. Most American residential HVAC is installed without either calculation, which is why most American residential HVAC is miserable. Both Manuals are ANSI standards; the Manual J + D pair is the baseline of quality design.' },

        { type: 'h2', text: 'Materials' },
        { type: 'p', text: 'Rigid galvanized sheet metal: the gold standard. Fabricated from coils to fit the job, sealed with mastic, insulated externally, lasts 40 years. Rectangular for main trunks, round for branches. Flex duct: a spring-wire helix in a plastic sleeve, insulated. Cheap, fast, forgiving — but easily crushed and much higher friction per foot than rigid. Fabric duct: fabric tubes with perforations, common in warehouses and commercial where the run is visible and quiet operation matters.' },

        { type: 'h2', text: 'Sealing the ducts' },
        { type: 'p', text: 'Every seam is a potential leak. Traditional cloth duct tape desiccates and falls off; the modern standard is water-based mastic (brushed on) or UL-181B-FX foil tape. Every joint, every boot-to-floor transition, every take-off gets sealed. A duct-blaster test pressurizes the duct system to measure leakage; target under 4% of total airflow for new construction.' },
        { type: 'aside', label: 'Worked example', text: 'A typical 1,800 sq ft ranch home has 30 duct seams. At 2 CFM leakage per seam untreated, that\'s 60 CFM — 5% of a 1,200 CFM system — leaking to attic or crawlspace. Mastic each seam and leakage drops to 0.2 CFM per joint, or 6 CFM total — under 0.5%. The difference is $50 in mastic and two hours of work.' },

        { type: 'h2', text: 'Balancing' },
        { type: 'p', text: 'Each branch has a balancing damper near the trunk — a butterfly vane adjustable with a handle. After installation, each room is measured with an anemometer at the register; dampers are adjusted until every room gets its design CFM. A balanced system reads consistent comfort room-to-room. An unbalanced system reads the classic "the master bedroom is always too cold."' },

        { type: 'h2', text: 'Troubleshooting' },
        { type: 'p', text: 'Far rooms are underconditioned. Long runs of flex, or branch too small; redesign or add a zone damper. Static pressure is above design. Filter too restrictive, coil dirty, or undersized return; measure each component. Ducts rumble. Velocity too high for duct size; enlarge trunk or split flow. Register whistles. Damper closed too far or register itself is too small for the CFM.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'After basic residential duct design, the next domains are zoning (motorized dampers and a zone panel for multi-zone control), VAV (variable air volume commercial systems), and DOAS (dedicated outdoor air systems for ventilation). ACCA\'s Manual J S D T course covers all four; ASHRAE Handbook HVAC Systems and Equipment is the engineering reference.' },

        { type: 'aside', label: 'Practice this week', text: 'Borrow a digital manometer (Fieldpiece makes a pocket one for $150). Measure TESP on your own HVAC system with the filter in place, then without, then with a different filter. You will see firsthand how much static the filter consumes, and which filter your system can actually tolerate.' },
        { type: 'aside', label: 'Self-check', text: 'What is a typical residential TESP rating? (0.5 WC.) What does Manual D calculate? (Duct sizes to deliver Manual J CFM at design static.) What is the modern duct-seam sealant? (Water-based mastic or UL-181B-FX foil tape.) If any stumps you, read HVAC School\'s duct-design series.' },

        { type: 'callout', text: 'First project: measure the static pressure across your house\'s air filter. Five-minute test, $150 in a pocket manometer, and you will know whether your system is correctly loaded — a diagnostic most contractors never make.' },
      ],

      keyTerms: ['plenum', 'trunk line', 'branch duct', 'supply register', 'return grille', 'static pressure', 'Manual J', 'Manual D', 'mastic', 'duct blaster', 'CFM', 'balancing damper', 'TESP', 'W.C.'],

      resources: {
        videos: [
          { id: null, source: 'other', url: 'https://www.hvacrschool.com/', title: 'HVAC School — duct design and diagnostics', channel: 'Bryan Orr', duration: 'variable', why: 'Free library on duct sizing and static pressure.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/mattrisinger', title: 'The Build Show — duct design', channel: 'Matt Risinger', duration: 'variable', why: 'Building-science view on right-sized ducts.' },
          { id: null, source: 'other', url: 'https://www.thisoldhouse.com/', title: 'This Old House — duct retrofit', channel: 'This Old House', duration: 'variable', why: 'Retrofit on historic houses.', featured: false },
        ],
        books: [
          { title: 'Modern Refrigeration and Air Conditioning', author: 'Althouse, Turnquist, Bracciano', year: 2025, url: '', why: 'Ductwork chapters cover rigid, flex, Manual D.' },
          { title: 'Refrigeration & Air Conditioning Technology', author: 'Whitman, Johnson, Tomczyk, Silberstein', year: 2020, url: 'https://archive.org/details/refrigerationair0000unse', why: 'Static pressure diagnostics.' },
          { title: 'Manual D: Residential Duct Systems', author: 'ACCA', year: 2016, url: 'https://www.acca.org/standards/technical-manuals/manual-d', why: 'ANSI Standard 1 for residential ducts.' },
        ],
        articles: [
          { title: 'Duct (flow)', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Duct_(flow)', why: 'Materials and components.', year: null },
          { title: 'HVAC', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Heating,_ventilation,_and_air_conditioning', why: 'Wider context.', year: null },
          { title: 'ASHRAE Handbook — Systems', source: 'ASHRAE', url: 'https://www.ashrae.org/technical-resources/ashrae-handbook', why: 'Engineer-level duct design.', year: null },
        ],
        courses: [
          { title: 'ACCA Manual J, S, D in a Day', provider: 'ACCA', url: 'https://www.acca.org/education/combined-manuals', free: false, why: 'The three ANSI standards in one day.' },
        ],
        tools: [
          { title: 'Retrotec / Energy Conservatory Duct Blaster', url: 'https://www.energyconservatory.com/', why: 'Calibrated duct-leakage fan.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ductwork_in_basement.jpg?width=1200', caption: 'Rigid galvanized duct trunk.', credit: 'Wikimedia Commons', alt: 'Basement ductwork' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Flexible_duct.jpg?width=1200', caption: 'Flex duct.', credit: 'Wikimedia Commons', alt: 'Flex duct' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ductwork_seams_mastic.jpg?width=1200', caption: 'Mastic-sealed seams.', credit: 'Wikimedia Commons', alt: 'Duct mastic' },
        ],
      },

      seeAlso: ['refrigeration', 'thermostats', 'framing', 'roofing'],
      prereqs: ['refrigeration'],
      leadsTo: ['thermostats'],

      chapterActivity: 'A duct-blaster afternoon at a Flatbush apartment retrofit.',

      sources: ['https://en.wikipedia.org/wiki/Duct_(flow)', 'https://www.acca.org/standards/technical-manuals/manual-d', 'https://www.ashrae.org/technical-resources/ashrae-handbook'],
      verifiedAt: '2026-04-23',
    },

    // ——— THERMOSTATS / CONTROLS ———
    thermostats: {
      id: 'thermostats',
      name: 'Controls',
      level: 'Beginner',
      dek: 'Thermostats and zoning — the brain that tells the HVAC system when to run.',
      readTime: '17 min',

      sections: ['Whole idea', 'Before you start', 'The switch logic', 'Low-voltage wiring', 'Heat pumps', 'Zoning', 'Smart thermostats', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'In 1620, Cornelis Drebbel — a Dutch inventor at the court of James I — built a mercury thermostat for an egg incubator: a curved glass tube whose mercury rose with heat and closed a damper on a charcoal stove. Two hundred and sixty-three years later, Warren S. Johnson patented the bimetal strip that would make the electric thermostat practical. Every smart thermostat on a living-room wall today is descended from both.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Honeywell_Thermostat.jpg?width=1200', caption: 'The Honeywell round thermostat — Henry Dreyfuss, 1953.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'At its core, a thermostat is a switch controlled by a thermometer. When the room is too cold, it closes a 24-volt contact; when the room is warm enough, it opens. The 24 V contact controls a relay or gas valve in the HVAC equipment itself. Everything else — smart scheduling, geofencing, utility demand response — is layered on top of that switch.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'A small screwdriver. A level (to mount plumb). A multimeter for testing the 24 V control wiring. A label maker or painter\'s tape and pen for marking wires. Phone camera for a pre-removal photo.' },
        { type: 'h3', text: 'Safety' },
        { type: 'p', text: 'Turn off power at the air handler before working on the control board. 24 V does not hurt you, but shorting R to C will blow the transformer fuse — and you will lose the system until you replace it.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'R — 24 V hot from the transformer. C — 24 V common (return). W — call for heat. Y — call for cool (compressor). G — call for fan (blower). O / B — reversing valve for heat pumps. W2 / Y2 — second-stage heat or cool. Aux — auxiliary (emergency) electric heat for heat pumps. Setpoint — the temperature you asked for. Differential — how far above/below setpoint before the thermostat cycles.' },

        { type: 'h2', text: 'The switch logic' },
        { type: 'p', text: 'A thermostat compares the sensed room temperature to the setpoint. If the difference exceeds the differential (typically 1°F), it closes the appropriate contact: W for heat, Y+G for cool. The contact stays closed until the room reaches setpoint plus differential. Then it opens. Short cycling — rapid on-off-on — happens when the differential is too narrow or the equipment is oversized.' },

        { type: 'h2', text: 'Low-voltage wiring' },
        { type: 'p', text: 'Thermostat wire is 18 AWG low-voltage cable, typically 5 to 8 conductors, each color-coded to a terminal. The colors are conventional but not standardized — always label wires before disconnecting, and always match to the terminal letter, not the color. Two rules: every thermostat needs R (hot) and C (common) to power itself; every call needs one of W, Y, G, or a heat-pump variant.' },
        { type: 'aside', label: 'Worked example', text: 'Wiring a basic two-stage gas furnace with A/C: R (red, 24V hot), C (blue, common), W1 (white, first-stage heat), Y (yellow, cool), G (green, fan). Five wires. Connect each to its labeled terminal on both the furnace control board and the thermostat.' },
        { type: 'aside', label: 'Common mistake', text: 'No C wire. Many old thermostats ran on batteries only; they had no C wire. Smart thermostats need C to power themselves. If your existing wiring has no C, add one (pull new cable or use a Fast-Stat common maker) before installing a smart thermostat.' },

        { type: 'h2', text: 'Heat pumps — a few extra wires' },
        { type: 'p', text: 'A heat pump needs an O or B wire for the reversing valve (O energized in cool mode, B energized in heat mode — brand-dependent). It also typically needs an Aux wire for emergency electric heat. A dual-fuel setup (heat pump + gas furnace backup) adds more terminals. Modern communicating thermostats (Lennox S30, Carrier Infinity, Trane ComfortLink II) use proprietary 4-wire serial protocols instead of discrete terminals.' },

        { type: 'h2', text: 'Zoning — two or more thermostats, one system' },
        { type: 'p', text: 'A zoning system adds motorized dampers in the ducts and a zone control panel between multiple thermostats and one piece of equipment. Each thermostat opens or closes its branch damper and calls the equipment through the panel. The panel coordinates — prevents conflicting calls, manages bypass air, staggers fan operation. A house with hot upstairs and cold downstairs benefits dramatically; a small ranch house does not.' },

        { type: 'h2', text: 'Smart thermostats and the C-wire' },
        { type: 'p', text: 'The Nest, Ecobee, and Honeywell T-series all require constant low-voltage power (the C wire) because they have always-on Wi-Fi radios and color screens. Documented savings in controlled studies: 5-12% on heating, slightly more on cooling. The bigger win is diagnostic data: runtime history exposes short-cycling compressors and oversized equipment in five minutes.' },

        { type: 'h2', text: 'Troubleshooting' },
        { type: 'p', text: 'No heat call. R-W not continuous; check wiring. Short cycling. Differential too narrow, or equipment oversized, or thermostat in draft from a register. Smart thermostat loses Wi-Fi. Usually an issue at the router; reboot. System runs in wrong mode (heat instead of cool). O/B reversing-valve configuration backwards in setup; toggle in thermostat settings.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'After basic thermostat installation, the next topics are modulating controls for inverter heat pumps (smooth capacity modulation rather than on/off), communicating thermostats with proprietary protocols, outdoor reset controls for hydronic systems, and demand-response programs with utilities. HVAC School\'s podcast covers all four in depth.' },

        { type: 'aside', label: 'Practice this week', text: 'Replace an old dial thermostat with a programmable or smart one. Label the existing wires with painter\'s tape before disconnecting. Match them to the new board. Ten minutes of work; a tangible HVAC win.' },
        { type: 'aside', label: 'Self-check', text: 'What is the R terminal? (24 V hot.) What is the C terminal for? (24 V common, to power smart thermostats.) What does the O wire do on a heat pump? (Energizes the reversing valve in cool mode.) If any stumps you, read HVAC School\'s thermostat-wiring primer.' },

        { type: 'callout', text: 'First project: replace a mercury or dial thermostat with a programmable one. Fifteen minutes. Under $40. You will handle 24 V wiring for the first time and learn every terminal letter.' },
      ],

      keyTerms: ['setpoint', 'differential', 'heat call', 'cool call', 'reversing valve', 'staging', 'zoning', '24-volt control', 'C-wire', 'demand response', 'bimetal', 'thermistor', 'R terminal', 'Aux heat'],

      resources: {
        videos: [
          { id: null, source: 'other', url: 'https://www.hvacrschool.com/', title: 'HVAC School — thermostats and controls', channel: 'Bryan Orr', duration: 'variable', why: 'Heat-pump wiring and staging logic.' },
          { id: null, source: 'other', url: 'https://www.thisoldhouse.com/', title: 'This Old House — thermostat installs', channel: 'This Old House', duration: 'variable', why: 'Richard Trethewey on upgrades.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/mattrisinger', title: 'The Build Show — modulating systems', channel: 'Matt Risinger', duration: 'variable', why: 'Communicating thermostats and heat pumps.', featured: false },
        ],
        books: [
          { title: 'Modern Refrigeration and Air Conditioning', author: 'Althouse, Turnquist, Bracciano', year: 2025, url: '', why: 'Controls chapters.' },
          { title: 'Refrigeration & Air Conditioning Technology', author: 'Whitman, Johnson, Tomczyk, Silberstein', year: 2020, url: 'https://archive.org/details/refrigerationair0000unse', why: 'Thermostat wiring and zoning.' },
          { title: 'This Old House HVAC', author: 'Trethewey & Best', year: 1994, url: '', why: 'Homeowner primer.' },
        ],
        articles: [
          { title: 'Thermostat', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Thermostat', why: 'History and taxonomy.', year: null },
          { title: 'HVAC', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Heating,_ventilation,_and_air_conditioning', why: 'Wider context.', year: null },
        ],
        courses: [
          { title: 'HVAC School', provider: 'Bryan Orr', url: 'https://www.hvacrschool.com/', free: true, why: 'Free daily tech tips.' },
        ],
        tools: [
          { title: 'Ecobee / Nest / Honeywell T-series', url: 'https://www.ecobee.com/', why: 'Three dominant smart-thermostat lines.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Honeywell_Thermostat.jpg?width=1200', caption: 'Honeywell round thermostat.', credit: 'Wikimedia Commons', alt: 'Honeywell' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bimetallic_thermostat.jpg?width=1200', caption: 'Bimetal-strip thermostat.', credit: 'Wikimedia Commons', alt: 'Bimetal' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Nest_thermostat.jpg?width=1200', caption: 'Nest Learning Thermostat.', credit: 'Wikimedia Commons', alt: 'Nest' },
        ],
      },

      seeAlso: ['refrigeration', 'ductwork', 'ohms', 'wiring'],
      prereqs: [],
      leadsTo: ['ductwork'],

      chapterActivity: 'A thermostat-swap clinic at a Brooklyn MakerLab.',

      sources: ['https://en.wikipedia.org/wiki/Thermostat', 'https://en.wikipedia.org/wiki/Heating,_ventilation,_and_air_conditioning'],
      verifiedAt: '2026-04-23',
    },

  },
};
