// content/geology.js
// Owned by batch: B02-hard-sciences
// Last updated: 2026-04-22 by BATCH B02-hard-sciences
//
// Topics this subject must cover (from data.js):
//   Structure: plates, rocks, volcanoes
//   History:   deeptime, fossils

window.CONTENT = window.CONTENT || {};
window.CONTENT.geology = {
  subjectId: 'geology',
  version: 1,
  lastUpdated: '2026-04-22',
  curator: 'BATCH B02-hard-sciences',
  topics: {

    plates: {
      id: 'plates',
      name: 'Plate Tectonics',
      level: 'Beginner',
      dek: 'The surface of the Earth is broken into a dozen enormous rafts, and they move — about as fast as a fingernail grows.',
      readTime: '12 min',

      sections: ['Wegener in the wilderness', 'The sea floor solves it', 'The dozen rafts', 'Everything downstream', 'A young theory, still growing'],
      body: [
        { type: 'lead', text: 'In 1912, a thirty-one-year-old German meteorologist named Alfred Wegener stood before the Geological Society in Frankfurt and proposed that the continents had once been joined together in a single landmass. The evidence, he said, was in their shapes — the bulge of Brazil fits neatly into the Gulf of Guinea — and in the matching fossils and rock formations on either side of the Atlantic. The geologists in the room were unpersuaded, largely because Wegener could not explain what would make a continent move. He died in a blizzard on the Greenland ice sheet in 1930, his theory essentially rejected.' },
        { type: 'interactive', key: 'plates-deepdive' },
        { type: 'interactive', key: 'facts-earth' },
        { type: 'h2', text: 'The sea floor gives it up' },
        { type: 'p', text: 'In the late 1950s, oceanographers began mapping the mid-Atlantic ridge — a seven-thousand-mile mountain range running along the bottom of the ocean. Harry Hess at Princeton proposed that the ridge was where new sea floor was being born, extruded like a slow conveyor belt on either side. Magnetic striping in the rock, matching the known history of Earth\'s magnetic reversals, confirmed the idea. By 1968 the picture had come together. Continents moved not because they plowed through the sea floor, as Wegener had awkwardly imagined, but because they rode it.' },
        { type: 'h2', text: 'The dozen rafts' },
        { type: 'p', text: 'The lithosphere — the rigid outer shell of the Earth — is broken into about a dozen large plates and many smaller ones. They move at speeds between ten and a hundred and sixty millimeters a year, driven by convection in the hot plastic mantle beneath. Where plates pull apart (divergent boundaries), new crust forms and the ocean widens. Where they collide (convergent), one dives beneath the other or they crumple into mountain ranges. Where they slide past each other (transform), you get the San Andreas Fault and its kin.' },
        { type: 'interactive', key: 'plates-diagram' },
        { type: 'h2', text: 'Everything downstream' },
        { type: 'p', text: 'The theory explains, in a single framework, almost the entire surface history of the planet: the rise of the Himalayas (India ramming Asia), the Pacific Ring of Fire (subduction around the Pacific), the mid-ocean ridges (spreading), the Wilson cycles of continents splitting and rejoining. Earthquakes are plate boundaries relieving stress. Most volcanoes sit at plate edges. Diamond deposits, oil reservoirs, ore bodies — all are predictable from the tectonic history of the ground beneath you.' },
        { type: 'h2', text: 'A young theory, still growing' },
        { type: 'p', text: 'Plate tectonics became geology\'s unifying theory only in the late 1960s — so recently that geologists trained in the fifties retired without it, and geologists trained in the seventies now dominate the field. Modern work maps plate motions by GPS, models mantle convection on supercomputers, and asks what Earth\'s tectonic pattern means for its surprisingly habitable climate. It is the closest thing geology has to Newton\'s laws.' },
        { type: 'interactive', key: 'plates-videos' },
        { type: 'quote', text: 'Does not the gigantic Mid-Atlantic Ridge… rise from a place in the Earth\'s crust where, as the continents moved westwardly apart, a crack has opened?', cite: 'Alfred Wegener, The Origin of Continents and Oceans (1915)' },
      ],

      keyTerms: ['lithosphere', 'mantle', 'divergent boundary', 'convergent boundary', 'transform fault', 'subduction', 'mid-ocean ridge', 'hotspot'],

      resources: {
        videos: [
          {
            id: '7CPv0NSIG2M',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=7CPv0NSIG2M',
            title: 'The Plate Tectonics Revolution (Crash Course Geography #19)',
            channel: 'Crash Course',
            duration: '12:42',
            why: 'The thirteen-minute history of how the theory became consensus. The right first video.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://pubs.usgs.gov/gip/dynamic/dynamic.html',
            title: 'This Dynamic Earth (USGS, full text)',
            channel: 'U.S. Geological Survey',
            duration: 'read',
            why: 'The USGS\'s full-length illustrated reference on plate tectonics. Animations and maps at the end.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.usgs.gov/educational-resources/plate-tectonics',
            title: 'Plate Tectonics — USGS educational hub',
            channel: 'U.S. Geological Survey',
            duration: 'variable',
            why: 'Short USGS animations (convergent, divergent, transform boundaries) on a single page. Use them to check your mental picture.',
          },
        ],
        books: [
          {
            title: 'The Origin of Continents and Oceans',
            author: 'Alfred Wegener',
            year: 1915,
            url: 'https://archive.org/details/originofcontinen0000wege',
            why: 'The founding document. Wegener\'s evidence for continental drift, from fossils to coastline shapes. Vindicated posthumously.',
          },
          {
            title: 'Annals of the Former World',
            author: 'John McPhee',
            year: 1998,
            url: '',
            why: 'McPhee spent twenty years driving the fortieth parallel with geologists. The section "Basin and Range" is the best popular introduction to the lived experience of plate tectonics. Pulitzer Prize.',
          },
          {
            title: 'Plate Tectonics: An Insider\'s History of the Modern Theory of the Earth',
            author: 'Naomi Oreskes (editor)',
            year: 2001,
            url: '',
            why: 'Essays by the people who built the theory, collected in one volume. The closest thing to a field primer written by the eyewitnesses.',
          },
        ],
        articles: [
          {
            title: 'Plate tectonics',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Plate_tectonics',
            why: 'Comprehensive, well-cited overview. Diagrams of every boundary type; good history section.',
            year: null,
          },
          {
            title: 'Alfred Wegener — UCMP Biography',
            source: 'University of California Museum of Paleontology',
            url: 'https://ucmp.berkeley.edu/history/wegener.html',
            why: 'Berkeley\'s concise biography of Wegener, with the story of how the theory was rejected and eventually vindicated.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Geology Education Resources',
            provider: 'U.S. Geological Survey',
            url: 'https://www.usgs.gov/educational-resources/geology-education',
            free: true,
            why: 'USGS\'s top-level portal to free geology teaching resources — lesson plans, lectures, videos, and maps.',
          },
        ],
        tools: [
          {
            title: 'USGS Earthquake Map',
            url: 'https://earthquake.usgs.gov/earthquakes/map/',
            why: 'Real-time map of recent earthquakes worldwide. Nothing makes the plate boundaries more vivid.',
          },
          {
            title: 'GPlates',
            url: 'https://www.gplates.org/',
            why: 'The free, open-source plate-reconstruction software used by working geologists. Spin the Earth back 500 million years.',
          },
        ],
        primarySources: [
          {
            title: 'Wegener presentation to the Geological Society (Jan 6, 1912) — APS History',
            url: 'https://www.aps.org/apsnews/2019/01/alfred-wegener-theory-continental-drift',
            why: 'American Physical Society historical note on Wegener\'s January 1912 Frankfurt presentation that launched the theory.',
          },
        ],
      },

      interactive: { kind: 'plates' },
      seeAlso: ['rocks', 'volcanoes', 'deeptime', 'geography'],
      prereqs: [],
      leadsTo: ['rocks', 'volcanoes', 'deeptime'],

      chapterActivity: 'Spring and fall walking tours of Central Park\'s Manhattan schist outcrops, led by a volunteer from the New York Paleontological Society — the oldest rocks in the city are exposed near Umpire Rock at 63rd Street.',

      examples: [{
        title: 'When did the Atlantic begin to open?',
        problem: 'The Mid-Atlantic Ridge spreads at about 2.5 cm/year. The Atlantic is roughly 5,000 km wide. How long ago did the split begin?',
        steps: [
          { text: 'Convert units.', math: '5,000 km = 5×10⁸ cm' },
          { text: 'Divide by rate.', math: '5×10⁸ cm / 2.5 cm·yr⁻¹ = 2×10⁸ yr' },
        ],
        answer: '~200 million years ago — matching the breakup of Pangaea in the Jurassic.',
      }],
      practice: [
        { q: 'The San Andreas Fault is what type of plate boundary? (one word)', a: 'transform', hint: 'Two plates slide past each other.', solution: 'Transform. The Pacific Plate moves northwest against the North American Plate.', difficulty: 'easy' },
        { q: 'The Himalayas are rising from the collision of which two plates? (e.g., "India and Asia")', a: 'India and Asia', acceptable: ['India and Eurasia', 'Indian and Eurasian'], hint: 'Began ~50 million years ago.', solution: 'The Indian plate is still ramming into the Eurasian plate, pushing up the Himalayas a few millimeters each year.', difficulty: 'medium' },
        { q: 'The Hawaiian islands were formed by a stationary ___ beneath the drifting Pacific plate. (one word)', a: 'hotspot', acceptable: ['plume', 'mantle plume'], hint: 'Not at a plate boundary.', solution: 'Hotspot (mantle plume). The chain of islands records the plate\'s motion over the fixed plume.', difficulty: 'medium' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Plate_tectonics',
        'https://pubs.usgs.gov/gip/dynamic/dynamic.html',
        'https://ucmp.berkeley.edu/history/wegener.html',
      ],
      verifiedAt: '2026-04-22',
    },

    rocks: {
      id: 'rocks',
      name: 'Rocks & Minerals',
      level: 'Intermediate',
      dek: 'The three families — igneous, sedimentary, metamorphic — and the slow cycle that turns one into another.',
      readTime: '11 min',

      sections: ['What a rock is', 'The three families', 'The rock cycle', 'Reading an outcrop', 'Minerals underfoot'],
      body: [
        { type: 'lead', text: 'A rock is a naturally occurring solid made of one or more minerals. A mineral is a naturally occurring solid with a definite chemical composition and a crystalline structure. The two definitions, properly chewed on, contain most of geology. Granite is a rock; quartz is a mineral; granite contains quartz; the difference is that a mineral has one formula and a rock is a recipe.' },
        { type: 'interactive', key: 'rocks-deepdive' },
        { type: 'h2', text: 'Igneous — born of fire' },
        { type: 'p', text: 'Igneous rocks form when molten rock cools and crystallizes. If the cooling happens slowly deep underground, the crystals grow large, and you get granite — the pink-and-black speckled counters every kitchen has met. If the cooling happens fast, at the surface, the crystals barely form and you get basalt, the black stone of most of the ocean floor. Every igneous rock is a frozen mineral soup; the rate of freezing determines the texture.' },
        { type: 'h2', text: 'Sedimentary — made by accumulation' },
        { type: 'p', text: 'Sedimentary rocks form from stuff that has been weathered and transported and laid down somewhere — sand in a dune, mud on a sea floor, calcium carbonate from dying organisms. Compressed and cemented, sandstone, shale, and limestone are the result. Most of the exposed rock at Earth\'s surface is sedimentary. Fossils, almost without exception, are found in sedimentary rock. Sedimentary rocks are history.' },
        { type: 'h2', text: 'Metamorphic — reworked under pressure' },
        { type: 'p', text: 'When an existing rock is buried deep enough that its minerals recrystallize without melting, you get a metamorphic rock. Shale becomes slate becomes phyllite becomes schist becomes gneiss as temperature and pressure increase. Limestone becomes marble; sandstone becomes quartzite. Each metamorphic rock is a fingerprint of the pressure and temperature it endured on its way back to the surface.' },
        { type: 'interactive', key: 'rocks-diagram' },
        { type: 'h2', text: 'The rock cycle' },
        { type: 'p', text: 'The three families exchange members. Igneous rock weathers into sediment which lithifies into sedimentary rock which can be metamorphosed into metamorphic rock which can be melted back into magma and re-cooled as igneous. The cycle runs on timescales of tens to hundreds of millions of years and is the reason the planet does not get geologically boring. Reading a rock is, in practice, reading where in this cycle it currently sits.' },
        { type: 'h2', text: 'Minerals underfoot' },
        { type: 'p', text: 'More than 6,000 mineral species have been described. A handful — feldspars, quartz, mica, amphiboles, pyroxenes — make up more than 90% of the crust. Mohs\' hardness scale, Friedrich Mohs\' 1812 practical tool, ranks minerals from talc (1) to diamond (10) by what scratches what. Modern mineralogy uses X-ray diffraction, electron microprobes, and synchrotron beamlines to read crystal structures to atomic precision.' },
        { type: 'interactive', key: 'rocks-videos' },
        { type: 'callout', text: 'The oldest surviving mineral on Earth is a tiny zircon crystal from Jack Hills, Western Australia, dated to 4.4 billion years old — older than most of the crust around it.' },
      ],

      keyTerms: ['mineral', 'igneous', 'sedimentary', 'metamorphic', 'crystal', 'weathering', 'rock cycle', 'stratum'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@eons',
            title: 'PBS Eons (channel)',
            channel: 'PBS Eons',
            duration: 'variable',
            why: 'The PBS paleontology channel covers rock formations as the stage on which life plays out. Fifteen-minute episodes, accurate, well-made.',
          },
          {
            id: '1gMU7zfDqfg',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=1gMU7zfDqfg',
            title: 'How Does the Earth Create Different Landforms? (Crash Course Geography #20)',
            channel: 'Crash Course',
            duration: '12:19',
            why: 'On weathering, erosion, and the sedimentary family — the part of geology that shapes the surface you walk on.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.usgs.gov/educational-resources/geology-education',
            title: 'Rocks and Minerals — USGS Resources',
            channel: 'USGS',
            duration: 'variable',
            why: 'USGS photo glossary of rock types and formation processes. Authoritative, short, well-labeled.',
          },
        ],
        books: [
          {
            title: 'Annals of the Former World',
            author: 'John McPhee',
            year: 1998,
            url: '',
            why: 'McPhee teaches rock reading, at full length, on car trips with real geologists. The best popular instruction ever written.',
          },
          {
            title: 'Rocks and Minerals (Peterson Field Guide)',
            author: 'Frederick H. Pough',
            year: 1953,
            url: '',
            why: 'The practical pocket guide, in print since 1953. Seven hundred species, keyed to what you can actually see and do with them.',
          },
          {
            title: 'The Hidden Beauty of Rocks',
            author: 'Andrea and Antonella Casolli',
            year: 2015,
            url: '',
            why: 'A book of photomicrographs of rocks in polarized light. Looks like abstract art; is the real structure of the planet.',
          },
        ],
        articles: [
          {
            title: 'Rock (geology)',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Rock_(geology)',
            why: 'Careful, well-illustrated reference article covering the three families and the rock cycle.',
            year: null,
          },
          {
            title: 'Mineral',
            source: 'Encyclopaedia Britannica',
            url: 'https://www.britannica.com/science/mineral-chemical-compound',
            why: 'Britannica\'s treatment of what a mineral is, with the definition by Nickel that still governs the IMA.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Physical Geology (open textbook)',
            provider: 'BCcampus / Steven Earle',
            url: 'https://opentextbc.ca/physicalgeology2ed/',
            free: true,
            why: 'Full open-licensed undergraduate physical geology textbook, with chapters on minerals, igneous, sedimentary, and metamorphic rocks.',
          },
        ],
        tools: [
          {
            title: 'Mindat.org',
            url: 'https://www.mindat.org/',
            why: 'The world\'s largest open mineralogy database. Look up any mineral, see localities, photographs, properties.',
          },
          {
            title: 'USGS Mineral Resources Online',
            url: 'https://mrdata.usgs.gov/',
            why: 'USGS\'s mineral-deposit maps of the United States. Search by mineral or by state.',
          },
        ],
      },

      interactive: { kind: 'rockcycle' },
      seeAlso: ['plates', 'volcanoes', 'deeptime', 'fossils'],
      prereqs: ['plates'],
      leadsTo: ['volcanoes', 'fossils'],

      chapterActivity: 'A rotating monthly meetup at the New York Mineralogical Club in the Explorers Club basement on East 70th Street — bring a rock, leave knowing what it is.',

      examples: [{
        title: 'Reading a hand sample',
        problem: 'A coarse-grained rock has visible pink, white, and black crystals. Identify the rock and explain what the grain size tells you.',
        steps: [
          { text: 'Identify minerals by color.', math: 'Pink = orthoclase; white = quartz/plagioclase; black = biotite/hornblende' },
          { text: 'Interpret grain size.', math: 'Coarse grains = slow cooling, deep underground (plutonic igneous).' },
          { text: 'Name it.', math: 'Feldspar + quartz + mica ⇒ granite' },
        ],
        answer: 'Granite. It cooled slowly underground, giving crystals time to grow large.',
      }],
      practice: [
        { q: 'Limestone, heated and compressed, metamorphoses into what? (one word)', a: 'marble', hint: 'A favorite of sculptors.', solution: 'Marble. The calcite recrystallizes into larger interlocking crystals, giving marble its characteristic texture.', difficulty: 'easy' },
        { q: 'Basalt and granite are both ___ rocks, but basalt cooled quickly (fine-grained) while granite cooled slowly (coarse). (one word)', a: 'igneous', hint: 'Cooled from magma.', solution: 'Igneous. Basalt is extrusive (erupted); granite is intrusive (solidified underground).', difficulty: 'easy' },
        { q: 'The oldest surviving mineral grains on Earth are found in Western Australia and are made of which mineral? (one word)', a: 'zircon', acceptable: ['zircons'], hint: 'ZrSiO₄ — dated to ~4.4 billion years.', solution: 'Zircon. Jack Hills zircons are older than most of the crust around them and provide the best evidence that Earth had liquid water very early.', difficulty: 'hard' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Rock_(geology)',
        'https://www.britannica.com/science/mineral-chemical-compound',
        'https://opentextbc.ca/physicalgeology2ed/',
      ],
      verifiedAt: '2026-04-22',
    },

    volcanoes: {
      id: 'volcanoes',
      name: 'Volcanoes',
      level: 'Intermediate',
      dek: 'Where the mantle breaks through — the Earth\'s safety valves, the makers of continents, and occasional civilization-enders.',
      readTime: '11 min',

      sections: ['Three places volcanoes live', 'What comes out', 'Famous eruptions', 'Monitoring and prediction'],
      body: [
        { type: 'lead', text: 'At 10:17 on the morning of August 24, in the year we call 79 AD, the Roman town of Pompeii was buried by a cloud of hot ash and pumice. An eyewitness, the seventeen-year-old Pliny the Younger, watched the eruption from across the bay and wrote a pair of letters that survive as the first scientific description of a volcanic event. Modern volcanologists still call that kind of eruption — vertical column, sustained ash fall — "Plinian" in his honor.' },
        { type: 'interactive', key: 'volcanoes-deepdive' },
        { type: 'interactive', key: 'pompeii-79' },
        { type: 'h2', text: 'Where volcanoes live' },
        { type: 'p', text: 'Most volcanoes sit at plate boundaries. Subduction zones — where one plate dives under another — produce the explosive stratovolcanoes of the Pacific Rim: Mount Fuji, Mount St. Helens, Mount Pinatubo. Mid-ocean ridges produce the less dramatic but vastly larger pillow-basalt eruptions that pave most of the ocean floor. A third kind, the hotspot, punches through the middle of a plate from a fixed plume beneath the mantle. Hawaii is a hotspot; so is Yellowstone.' },
        { type: 'interactive', key: 'volcanoes-diagram' },
        { type: 'h2', text: 'What comes out' },
        { type: 'p', text: 'The three products of an eruption are lava (the molten rock itself), tephra (fragmented material, from ash to bomb-sized chunks), and gases (mostly water vapor, with carbon dioxide, sulfur dioxide, and other volatiles). Which of these dominate depends on the composition of the magma. Runny basalts flow in rivers; stiff silica-rich magmas build pressure and explode. Pyroclastic flows — superheated mixtures of ash, rock, and gas, traveling downhill at a hundred miles an hour — are the single most dangerous volcanic product. They are what killed Pompeii.' },
        { type: 'h2', text: 'Eruptions that rewrote history' },
        { type: 'p', text: 'Thera (roughly 1600 BCE) may have ended the Minoan civilization on Crete and written itself, indirectly, into the Atlantis myth. Laki, in Iceland in 1783, released enough sulfur to cool the Northern Hemisphere climate, contribute to crop failures, and — historians now argue — help trigger the French Revolution. Tambora in 1815 produced the famous "year without a summer." Krakatoa in 1883 was heard three thousand miles away. Mount St. Helens in 1980 took fifty-seven lives and removed the top 1,300 feet of the mountain in nine hours.' },
        { type: 'h2', text: 'Monitoring' },
        { type: 'p', text: 'Volcanoes give warnings. Before an eruption, the ground swells as magma rises, gas emissions change, and earthquake swarms begin. The USGS Cascades Volcano Observatory has been watching Mount St. Helens, Rainier, and Hood since 1980. Similar networks exist in Japan, Italy, Iceland, Indonesia, and every other volcano-prone country. Nobody yet can predict a specific eruption\'s date, but the window — within months, within weeks — can now usually be narrowed well enough to evacuate.' },
        { type: 'interactive', key: 'volcanoes-videos' },
        { type: 'quote', text: 'Ashes began to fall upon us. I looked round; a dense black mist seemed to be following us, spreading over the country like a flood.', cite: 'Pliny the Younger, Letters (c. 100 AD)' },
      ],

      keyTerms: ['magma', 'lava', 'pyroclastic flow', 'tephra', 'caldera', 'stratovolcano', 'shield volcano', 'hotspot', 'subduction'],

      resources: {
        videos: [
          {
            id: null,
            source: 'other',
            url: 'https://www.usgs.gov/educational-resources/usgs-educational-videos-and-animations',
            title: 'USGS Volcano Videos & Animations',
            channel: 'U.S. Geological Survey',
            duration: 'variable',
            why: 'Short, authoritative clips on eruption types, pyroclastic flows, and lahars. The reference source.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@eons',
            title: 'PBS Eons (channel)',
            channel: 'PBS Eons',
            duration: 'variable',
            why: 'PBS Eons has excellent episodes on supervolcanoes, flood basalts, and mass extinctions. Search for "Yellowstone" or "Deccan Traps."',
          },
          {
            id: null,
            source: 'other',
            url: 'https://volcano.si.edu/',
            title: 'Smithsonian Global Volcanism Program',
            channel: 'Smithsonian',
            duration: 'variable',
            why: 'Current eruptions worldwide, with video feeds and updates. The authoritative monitoring hub.',
          },
        ],
        books: [
          {
            title: 'Eruptions that Shook the World',
            author: 'Clive Oppenheimer',
            year: 2011,
            url: '',
            why: 'A working volcanologist\'s history of major eruptions from Thera to Pinatubo and their downstream consequences.',
          },
          {
            title: 'Krakatoa: The Day the World Exploded',
            author: 'Simon Winchester',
            year: 2003,
            url: '',
            why: 'The single most famous eruption in modern history, told by a trained geologist who writes like a journalist.',
          },
          {
            title: 'Volcanoes',
            author: 'Peter Francis and Clive Oppenheimer',
            year: 2003,
            url: '',
            why: 'The standard undergraduate textbook. Thorough, illustrated, genuinely readable.',
          },
        ],
        articles: [
          {
            title: 'Volcano',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Volcano',
            why: 'Comprehensive reference. Eruption-type table is particularly good.',
            year: null,
          },
          {
            title: 'Pliny the Younger — letters on the eruption of Vesuvius',
            source: 'Attalus.org (J. Melmoth translation)',
            url: 'https://www.attalus.org/info/pliny.html',
            why: 'Pliny\'s two letters to Tacitus (6.16 and 6.20) describing his uncle\'s death and the eruption of AD 79. The first scientific eruption report.',
            year: 100,
          },
        ],
        courses: [
          {
            title: 'Volcano Hazards Program — Educational Resources',
            provider: 'U.S. Geological Survey',
            url: 'https://www.usgs.gov/programs/VHP/educational-resources',
            free: true,
            why: 'USGS teaching resources on volcano hazards, including lesson plans and recorded lectures on specific volcanoes.',
          },
        ],
        tools: [
          {
            title: 'Smithsonian Global Volcanism Program Database',
            url: 'https://volcano.si.edu/search_volcano.cfm',
            why: 'Searchable database of every Holocene volcano on Earth — location, eruption history, photographs.',
          },
          {
            title: 'USGS Volcano Hazards Program',
            url: 'https://www.usgs.gov/programs/VHP',
            why: 'Current alert levels for every monitored U.S. volcano. Updated in real time.',
          },
        ],
      },

      interactive: { kind: 'volcano' },
      seeAlso: ['plates', 'rocks', 'deeptime'],
      prereqs: ['plates', 'rocks'],
      leadsTo: ['deeptime'],

      chapterActivity: 'An annual spring visit to the American Museum of Natural History\'s Hall of Planet Earth — particularly the tethered tour of the "volcanoes" section, which includes actual lava samples from Mount St. Helens.',

      examples: [{
        title: 'VEI of a major eruption',
        problem: 'The Volcanic Explosivity Index (VEI) is a log scale: each step = ~10× more ejected volume. Pinatubo (1991) erupted ~5 km³ (VEI 6). How much bigger was Tambora (1815), which erupted ~160 km³?',
        steps: [
          { text: 'Compute the ratio.', math: '160 / 5 = 32' },
          { text: 'Take log₁₀.', math: 'log₁₀(32) ≈ 1.5' },
        ],
        answer: 'About 1.5 VEI steps bigger: Tambora was a VEI 7. Its sulfur output caused the 1816 "year without a summer."',
      }],
      practice: [
        { q: 'Hawaii sits over a mantle ___, not a plate boundary. (one word)', a: 'hotspot', acceptable: ['plume', 'mantle plume'], hint: 'Fixed column of hot mantle.', solution: 'Hotspot (mantle plume). The chain of islands marks the Pacific Plate\'s motion over the fixed plume.', difficulty: 'easy' },
        { q: 'What kind of volcano is Mount St. Helens? (one word)', a: 'stratovolcano', acceptable: ['strato', 'composite', 'composite volcano'], hint: 'Steep, layered cone. Subduction-zone style.', solution: 'Stratovolcano (composite volcano). Steep-sided, layers of ash and lava. Explosive because of silica-rich magma.', difficulty: 'medium' },
        { q: 'Superheated mixtures of gas, ash, and rock fragments moving at 100+ km/h are called ___ flows. (one word)', a: 'pyroclastic', hint: 'What killed Pompeii.', solution: 'Pyroclastic flows. The single deadliest volcanic product — they obliterated Pompeii in AD 79 and St-Pierre in 1902.', difficulty: 'medium' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Volcano',
        'https://volcano.si.edu/',
        'https://www.usgs.gov/programs/VHP',
      ],
      verifiedAt: '2026-04-22',
    },

    deeptime: {
      id: 'deeptime',
      name: 'Deep Time',
      level: 'Intermediate',
      dek: 'Four and a half billion years — the single idea that geology gave the rest of human thought.',
      readTime: '12 min',

      sections: ['Hutton at Siccar Point', 'Lyell and uniformitarianism', 'The calendar', 'Numbers humans cannot really feel', 'Calibrating the calendar'],
      body: [
        { type: 'lead', text: 'On a rocky beach on the east coast of Scotland, in the summer of 1788, a Scottish doctor named James Hutton stood before an outcrop at Siccar Point and looked at two rock formations lying on top of each other at sharply different angles. The bottom rocks were old; they had been folded and tilted and then worn flat; the upper rocks had been laid down, much later, across the worn-down stumps of the lower set. Hutton understood, looking at this single wall, that the Earth\'s history had to be enormously, inconceivably long — much longer than the several thousand years the theology of his era allowed. "No vestige of a beginning, no prospect of an end," he wrote. This is the moment deep time was born.' },
        { type: 'interactive', key: 'deeptime-deepdive' },
        { type: 'interactive', key: 'siccar-1788' },
        { type: 'h2', text: 'Lyell and uniformitarianism' },
        { type: 'p', text: 'Hutton\'s ideas were rescued and developed by Charles Lyell, whose Principles of Geology (1830–33) became the textbook that Charles Darwin took on the Beagle. Lyell\'s central claim — uniformitarianism — was that the same geological processes visible today, acting over enormous stretches of time, were sufficient to explain the rock record. No floods, no catastrophes, just erosion, deposition, and the slow grind of plate movements. The claim has since been modified (asteroid impacts do exist), but the instinct to explain the past by the present is still geology\'s deepest habit.' },
        { type: 'h2', text: 'The calendar' },
        { type: 'p', text: 'Modern geology divides the 4.54 billion years of Earth\'s history into eons, eras, periods, and epochs. The Hadean (4.54 to 4.0 Ga) was formless and molten. The Archean and Proterozoic (4.0 to 0.54 Ga) made up a vast Precambrian during which life emerged and slowly diversified. The Phanerozoic ("visible life," 540 million years ago to now) is divided into three eras: the Paleozoic, Mesozoic, and Cenozoic — the age of old, middle, and new life. Five mass extinctions punctuate the story. We are in the Cenozoic; arguably also in a sixth extinction, one we have caused ourselves.' },
        { type: 'interactive', key: 'deeptime-diagram' },
        { type: 'h2', text: 'The numbers that humans cannot really feel' },
        { type: 'p', text: 'Written history covers about 5,000 years. Agriculture is about 12,000 years old. Anatomically modern humans have existed for about 300,000. The dinosaurs dominated the Mesozoic for 165 million years before the Cretaceous extinction, a span more than five hundred times all of human history. Trilobites lived for nearly 300 million years; they were old by the time the dinosaurs started. The Earth\'s 4.54-billion-year age is almost impossible to internalize, which is why McPhee invented the word "geological" as a synonym for impossibly slow.' },
        { type: 'h2', text: 'Calibrating the calendar' },
        { type: 'p', text: 'The numbers we use for geological dates come from radiometric dating — measuring the decay of naturally-occurring radioactive isotopes like uranium-238 or potassium-40 in rock. The first reasonably accurate age of the Earth came from Clair Patterson in 1956, using lead isotopes in meteorites. The modern estimate is 4.54 billion years, known to within about 1%. Geology is no longer speculative about its dates.' },
        { type: 'interactive', key: 'deeptime-videos' },
        { type: 'quote', text: 'The result, therefore, of our present enquiry is, that we find no vestige of a beginning,—no prospect of an end.', cite: 'James Hutton, Theory of the Earth (1788)' },
      ],

      keyTerms: ['uniformitarianism', 'radiometric dating', 'Precambrian', 'Phanerozoic', 'Paleozoic', 'Mesozoic', 'Cenozoic', 'eon', 'epoch'],

      resources: {
        videos: [
          {
            id: 'S7TUe5w6RHo',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=S7TUe5w6RHo',
            title: '4.5 Billion Years in 1 Hour',
            channel: 'Kurzgesagt — In a Nutshell',
            duration: '59:39',
            why: 'Kurzgesagt\'s hour-long animation of Earth\'s history, a million years per second. The best time-scale intuition builder available.',
          },
          {
            id: 'jDF-N3A60DE',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=jDF-N3A60DE',
            title: 'Deep Time (Crash Course Astronomy #45)',
            channel: 'Crash Course',
            duration: '12:38',
            why: 'Phil Plait on the long perspective — Earth\'s past, the Sun\'s future, the timescales astrophysicists are comfortable with.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@eons',
            title: 'PBS Eons (channel)',
            channel: 'PBS Eons',
            duration: 'variable',
            why: 'PBS Eons is fundamentally a deep-time channel. Every episode tells a story located at a specific point on the geological calendar.',
          },
        ],
        books: [
          {
            title: 'Annals of the Former World',
            author: 'John McPhee',
            year: 1998,
            url: '',
            why: 'McPhee coined the term "deep time" in Basin and Range (1981), book one of this Pulitzer-winning tetralogy. The finest popular book on geological time ever written.',
          },
          {
            title: 'Principles of Geology',
            author: 'Charles Lyell',
            year: 1830,
            url: 'https://www.gutenberg.org/ebooks/33224',
            why: 'Lyell\'s foundational text. Darwin carried it on the Beagle. Free on Gutenberg; still readable, still arguing.',
          },
          {
            title: 'Timefulness: How Thinking Like a Geologist Can Help Save the World',
            author: 'Marcia Bjornerud',
            year: 2018,
            url: '',
            why: 'A modern geologist\'s argument that humans\' inability to feel deep time is a civilizational weakness worth correcting.',
          },
        ],
        articles: [
          {
            title: 'Geologic time scale',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Geologic_time_scale',
            why: 'The full calendar with ages and key events, well-cited and continuously updated.',
            year: null,
          },
          {
            title: 'James Hutton — MacTutor biography',
            source: 'MacTutor History of Mathematics',
            url: 'https://mathshistory.st-andrews.ac.uk/Biographies/Hutton_James/',
            why: 'The St Andrews biography of Hutton, who gave geology the concept of deep time.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Physical Geology (open textbook)',
            provider: 'BCcampus / Steven Earle',
            url: 'https://opentextbc.ca/physicalgeology2ed/',
            free: true,
            why: 'Chapters 8–9 of this free undergraduate text cover geological time and its measurement.',
          },
        ],
        tools: [
          {
            title: 'International Chronostratigraphic Chart (ICS)',
            url: 'https://stratigraphy.org/ICSchart/ChronostratChart2023-09.pdf',
            why: 'The International Commission on Stratigraphy\'s authoritative time scale, as a print-ready PDF. The current version, last updated September 2023.',
          },
          {
            title: 'Deep Time Walk',
            url: 'https://www.deeptimewalk.org/',
            why: 'An app and set of resources that turn Earth history into a 4.6-kilometer walk. A way to feel the scale physically.',
          },
        ],
        primarySources: [
          {
            title: 'James Hutton, Theory of the Earth (1788/1795 — Gutenberg)',
            url: 'https://www.gutenberg.org/files/12861/12861-h/12861-h.htm',
            why: 'Hutton\'s founding work in full. The "no vestige of a beginning" line is in the 1788 Royal Society of Edinburgh paper reprinted in Volume 1.',
          },
        ],
      },

      interactive: { kind: 'timeline' },
      seeAlso: ['fossils', 'rocks', 'plates', 'evolution'],
      prereqs: ['rocks'],
      leadsTo: ['fossils'],

      chapterActivity: 'Spring and fall trips to Riverside Park\'s schist outcrops — the "Inwood marble" you walk past on the Hudson is 450 million years old, weathered out of the roots of a long-gone mountain range.',

      examples: [{
        title: 'Dating with carbon-14',
        problem: 'A piece of wood contains 25% of the ¹⁴C that fresh wood has. Carbon-14 has a half-life of 5,730 years. How old is the sample?',
        steps: [
          { text: 'Count half-lives elapsed.', math: '100% → 50% → 25%: two half-lives' },
          { text: 'Multiply.', math: '2 × 5,730 = 11,460 yr' },
        ],
        answer: '~11,460 years — around the end of the last Ice Age.',
      }],
      practice: [
        { q: 'How old is the Earth, in billions of years (to 2 decimals)?', a: '4.54', acceptable: ['4.5', '4.54 Gyr', '4.5 billion'], hint: 'First measured accurately by Clair Patterson, 1956.', solution: '4.54 billion years, determined by uranium-lead dating of meteorites (which formed at the same time as Earth).', difficulty: 'easy' },
        { q: 'What era of the Phanerozoic eon did the dinosaurs dominate? (one word)', a: 'Mesozoic', hint: 'The "middle life" era, 252–66 Ma.', solution: 'Mesozoic. It contains the Triassic, Jurassic, and Cretaceous periods.', difficulty: 'medium' },
        { q: 'About what percentage of Earth\'s 4.54-billion-year history is represented by the Phanerozoic (the last 540 million years)?', a: '12', acceptable: ['~12', '12%', '11.9'], hint: '540 / 4540 ≈ ?', solution: '~12%. The Precambrian — everything BEFORE the Cambrian — is 88% of Earth\'s history. Most of that time had only microbial life.', difficulty: 'medium' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Geologic_time_scale',
        'https://mathshistory.st-andrews.ac.uk/Biographies/Hutton_James/',
      ],
      verifiedAt: '2026-04-22',
    },

    fossils: {
      id: 'fossils',
      name: 'Fossils & Paleontology',
      level: 'Intermediate',
      dek: 'The record of life in the rocks — four billion years, five mass extinctions, and the long detective story of how it all fits together.',
      readTime: '13 min',

      sections: ['Steno, Cuvier, and the first fossils', 'How a fossil forms', 'The five great extinctions', 'Recent decades'],
      body: [
        { type: 'lead', text: 'In 1666, a Danish physician named Nicolas Steno, working in Florence, dissected a shark and noticed that its teeth were identical in shape to certain "tongue stones" that farmers had been finding in Tuscan fields for centuries. The tongue stones were not the fingernails of petrified saints, as folklore held. They were fossil shark teeth. Steno\'s follow-up work on how sedimentary layers were laid down — the principle of superposition, that lower layers are older — founded stratigraphy and, with it, the scientific study of fossils.' },
        { type: 'interactive', key: 'fossils-deepdive' },
        { type: 'h2', text: 'Cuvier and the fact of extinction' },
        { type: 'p', text: 'A hundred and fifty years later, the French anatomist Georges Cuvier, comparing elephant skulls with mammoth skulls in the Paris Museum, demonstrated that mammoths were a distinct species that had gone extinct. It sounds obvious now. It was a radical idea at the time, one that contradicted the notion of a perfect Creation. Cuvier\'s comparative anatomy also let him reconstruct whole animals from fragmentary remains, which remains most of what paleontology is.' },
        { type: 'h2', text: 'How a fossil forms' },
        { type: 'p', text: 'The vast majority of living things leave no fossil at all. To fossilize, an organism typically needs to be buried quickly, in sediment, under conditions that favor mineral replacement rather than decay. Hard parts — bones, shells, teeth, wood — fossilize best. Soft-tissue preservation is rare enough that each case is a news event. Fossil sites like the Burgess Shale (508 million years old) and the Jehol Biota in China (125 million) are prized because they preserved things that nothing else did.' },
        { type: 'interactive', key: 'fossils-diagram' },
        { type: 'h2', text: 'The five great extinctions' },
        { type: 'p', text: 'The fossil record shows that life has been catastrophically interrupted at least five times. The end-Ordovician (443 million years ago), end-Devonian (372 Ma), end-Permian (252 Ma, the worst — 96% of marine species gone), end-Triassic (201 Ma), and end-Cretaceous (66 Ma, the one that took the non-avian dinosaurs). The end-Cretaceous, we now know, was triggered by a ten-kilometer asteroid that struck the Yucatán; the evidence was identified by Luis and Walter Alvarez in 1980 and confirmed by the discovery of the Chicxulub crater a decade later.' },
        { type: 'h2', text: 'Recent decades' },
        { type: 'p', text: 'Paleontology is a vastly more active science now than it was a generation ago. CT scanning reveals internal anatomy without destroying specimens. Molecular paleontology extracts preserved proteins and, in very young fossils, DNA. The discovery of feathered dinosaurs in China in the 1990s reshaped our picture of the origin of birds. New hominin species continue to turn up — Australopithecus sediba in 2008, Homo naledi in 2013, Homo luzonensis in 2019. The past is not finished.' },
        { type: 'interactive', key: 'fossils-videos' },
        { type: 'quote', text: 'I believe the fossils are a picture, and often a very imperfect picture, of events that really occurred.', cite: 'Charles Darwin, On the Origin of Species (1859)' },
      ],

      keyTerms: ['fossil', 'stratigraphy', 'index fossil', 'superposition', 'taphonomy', 'mass extinction', 'trace fossil', 'Cambrian explosion'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@eons',
            title: 'PBS Eons (channel)',
            channel: 'PBS Eons',
            duration: 'variable',
            why: 'The best free resource on paleontology. Ten-minute episodes, each on a specific organism or event, hundreds of them.',
          },
          {
            id: 'S7TUe5w6RHo',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=S7TUe5w6RHo',
            title: '4.5 Billion Years in 1 Hour',
            channel: 'Kurzgesagt — In a Nutshell',
            duration: '59:39',
            why: 'Watch this after you understand deep time — every mass extinction whips past and you feel what that meant.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.amnh.org/exhibitions/permanent/fossil-halls',
            title: 'AMNH Fossil Halls — virtual tour',
            channel: 'American Museum of Natural History',
            duration: 'variable',
            why: 'The AMNH runs the best fossil exhibits in North America. The online collections let you rotate Tyrannosaurus, Apatosaurus, and others in 3D.',
          },
        ],
        books: [
          {
            title: 'Wonderful Life: The Burgess Shale and the Nature of History',
            author: 'Stephen Jay Gould',
            year: 1989,
            url: '',
            why: 'Gould on the Cambrian explosion and its reinterpretation. The book that made paleontology glamorous in the twentieth century.',
          },
          {
            title: 'The Sixth Extinction: An Unnatural History',
            author: 'Elizabeth Kolbert',
            year: 2014,
            url: '',
            why: 'Kolbert\'s Pulitzer-winning account of the extinction event currently underway, reported from fossil sites and endangered ones.',
          },
          {
            title: 'On the Origin of Species',
            author: 'Charles Darwin',
            year: 1859,
            url: 'https://www.gutenberg.org/ebooks/1228',
            why: 'Chapters 9 and 10 of Origin are Darwin\'s careful treatment of what the fossil record shows — and what it fails to show.',
          },
        ],
        articles: [
          {
            title: 'Fossil',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Fossil',
            why: 'Thorough reference on fossilization processes, fossil types, and the major fossil-bearing rock formations.',
            year: null,
          },
          {
            title: 'Alvarez, "Extraterrestrial Cause for the Cretaceous-Tertiary Extinction" (1980, Science)',
            source: 'Science (AAAS)',
            url: 'https://www.science.org/doi/10.1126/science.208.4448.1095',
            why: 'The landmark paper that identified the asteroid impact behind the Cretaceous extinction. A canonical example of a hypothesis proposed, tested, confirmed.',
            year: 1980,
          },
        ],
        courses: [
          {
            title: 'Dinosaurs 101 — open paleontology course',
            provider: 'University of Alberta (Coursera)',
            url: 'https://www.coursera.org/learn/dino-101',
            free: true,
            why: 'Philip Currie\'s twelve-lesson introduction to dinosaur paleontology. Free to audit; the best free course on the subject.',
          },
        ],
        tools: [
          {
            title: 'Paleobiology Database',
            url: 'https://paleobiodb.org/',
            why: 'Every published fossil occurrence, mapped. Filter by taxon, age, or location. Professional paleontologists use it daily.',
          },
          {
            title: 'Smithsonian Paleobiology Collections',
            url: 'https://naturalhistory.si.edu/research/paleobiology/collections',
            why: 'Search 40+ million specimens in the Smithsonian\'s paleobiology collection. Photos and locality data for most.',
          },
        ],
        primarySources: [
          {
            title: 'Cuvier, "Essay on the Theory of the Earth" (1813, English translation)',
            url: 'https://www.gutenberg.org/ebooks/62918',
            why: 'Cuvier\'s own 1813 exposition on catastrophism and the fact of extinction. Gutenberg has the full English translation.',
          },
        ],
      },

      interactive: { kind: 'fossils' },
      seeAlso: ['deeptime', 'rocks', 'evolution', 'plates'],
      prereqs: ['deeptime', 'rocks'],
      leadsTo: [],

      chapterActivity: 'Quarterly behind-the-scenes tours of the American Museum of Natural History\'s paleontology collection — arranged twice a year through the museum\'s members program.',

      examples: [{
        title: 'Dating a mammoth bone',
        problem: 'A mammoth bone contains 12.5% of the ¹⁴C that a modern bone contains. C-14 half-life: 5,730 years. How old is the bone?',
        steps: [
          { text: 'Count half-lives.', math: '100% → 50% → 25% → 12.5%: three half-lives' },
          { text: 'Multiply.', math: '3 × 5,730 = 17,190 yr' },
        ],
        answer: '~17,200 years — around the end of the last glacial maximum.',
      }],
      practice: [
        { q: 'The end-Cretaceous extinction (66 Ma, wiping out non-avian dinosaurs) was primarily caused by what? (one or two words)', a: 'asteroid impact', acceptable: ['asteroid', 'impact', 'meteor impact', 'bolide', 'chicxulub'], hint: 'Chicxulub crater, Yucatán.', solution: 'A 10-km asteroid impact at Chicxulub, Mexico. The iridium anomaly identified by the Alvarezes (1980) was the smoking gun; the crater was found in the early 1990s.', difficulty: 'easy' },
        { q: 'How many "Big Five" mass extinctions has the fossil record recorded?', a: '5', acceptable: ['five'], hint: 'End-Ordovician, end-Devonian, end-Permian, end-Triassic, end-Cretaceous.', solution: '5. The end-Permian was the worst — about 96% of marine species gone. The Anthropocene (if current trends continue) would make a sixth.', difficulty: 'easy' },
        { q: 'The Cambrian Explosion — when most animal phyla first appeared — occurred about how many million years ago?', a: '540', acceptable: ['~540', '540 Ma', '538', '541'], hint: 'Base of the Phanerozoic eon.', solution: '~540 Ma. Most body plans we see today appeared in ~20 Myr — a geological blink.', difficulty: 'medium' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Fossil',
        'https://www.science.org/doi/10.1126/science.208.4448.1095',
      ],
      verifiedAt: '2026-04-22',
    },

  },
};
