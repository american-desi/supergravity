// content/coffee.js
// Batch: B09-kitchen-arts
// Last updated: 2026-04-23 by BATCH B09-kitchen-arts
//
// Topics this subject must cover (from data.js):
//   Core: beans, roasting, brewing

window.CONTENT = window.CONTENT || {};
window.CONTENT.coffee = {
  subjectId: 'coffee',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B09-kitchen-arts',
  topics: {

    beans: {
      id: 'beans',
      name: 'Beans & Origins',
      level: 'Beginner',
      dek: 'Every cup starts with a seed from a mountain shrub — and where that shrub grew explains almost everything that follows.',
      readTime: '11 min',

      sections: ['The seed of a red fruit', 'Arabica, Robusta, and the battle of species', 'The coffee belt', 'Processing, the hidden variable', 'Why a bag of beans is dated'],
      body: [
        { type: 'lead', text: 'A shepherd named Kaldi, somewhere in the Ethiopian highlands around the ninth century, noticed his goats dancing after chewing on the red berries of a particular shrub. He tried the berries, stayed up all night, and — the story goes — showed them to a local monk. The monk\'s order, suspicious of a fruit that suppressed sleep, threw the berries onto a fire, smelled what was rising from them, and pulled the roasted beans back out of the coals. The whole of modern coffee begins with a smell. It begins, that is, with roasting.' },
        { type: 'h2', text: 'The seed of a red fruit' },
        { type: 'p', text: 'Coffee is not a bean. It is a seed — in fact, the two seeds nested inside a small red fruit called a coffee cherry. The tree that produces them, Coffea, grows only in a narrow belt of tropical highlands. Picked ripe, the cherry is peeled, the fruit\'s sweet mucilage is washed or fermented off the seed, the seed is dried, and the green bean that remains is what gets shipped to roasters. Before it is roasted, it looks like a pale green pistachio. The color of coffee is an invention of the fire.' },
        { type: 'h2', text: 'Arabica, Robusta, and the battle of species' },
        { type: 'p', text: 'Of the hundred-plus species in the Coffea genus, two matter commercially. Coffea arabica, the older and more delicate, accounts for about sixty percent of world production; it grows slowly at high altitude, needs cooler temperatures, and produces a more aromatic cup. Coffea canephora — commonly called Robusta — is a tougher lowland plant with about twice the caffeine, a more bitter profile, and a much higher disease tolerance. Most supermarket blends are mixed. Most specialty coffee is pure arabica. Climate change is quietly reshuffling this map: arabica\'s altitude requirement is being squeezed upward as growing regions warm.' },
        { type: 'h2', text: 'The coffee belt' },
        { type: 'p', text: 'The tropical band where coffee grows, between roughly 23 degrees north and 23 degrees south, runs through Ethiopia and Kenya, across into Yemen, over to Colombia and Brazil, and through Indonesia and Vietnam. Each region has a signature: Ethiopian coffees tend toward floral jasmine and berry; Kenyan toward black-currant acidity; Colombian toward chocolate and red fruit; Ethiopian Yirgacheffes toward bright citrus; Sumatran toward earthy, low-acidity depth. Terroir, the same concept that governs wine, governs coffee, and the best third-wave roasters label the farm, the altitude, and the processing method of every lot.' },
        { type: 'h2', text: 'Processing, the hidden variable' },
        { type: 'p', text: 'After picking, the cherry must be separated from the seed. Washed processing (wet-processing) removes the fruit quickly with water; the resulting coffee tastes cleaner, brighter, and more recognizably of origin. Natural processing (dry-processing) lets the cherry dry on the seed in the sun; the coffee tastes fruitier, heavier, sweeter. Honey processing is a middle path, keeping some of the mucilage during drying. Two beans from the same farm, processed differently, taste like different coffees. A bag that tells you the process is a bag from a roaster who cares.' },
        { type: 'h2', text: 'Why a bag of beans is dated' },
        { type: 'p', text: 'Freshly roasted coffee off-gasses CO₂ and loses volatile aromatics over weeks. A roaster who stamps a roast date on the bag — not a best-by date — is selling you the information you need. Drink between seven and twenty-one days off-roast for the best cup. A bag stamped two months ago is still fine. A bag with no roast date is almost certainly already stale, regardless of what the packaging says.' },
        { type: 'callout', text: 'The most instructive three dollars a coffee drinker can spend is on a small bag of a single-origin Ethiopian, drunk alongside a single-origin Colombian and a single-origin Sumatran — all brewed identically. The differences are a better education than any book.' },
      ],

      keyTerms: ['Coffea arabica', 'Coffea canephora', 'Robusta', 'terroir', 'coffee cherry', 'washed process', 'natural process', 'honey process', 'third wave', 'roast date'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@jameshoffmann',
            title: 'James Hoffmann — full channel',
            channel: 'James Hoffmann',
            duration: 'variable',
            featured: true,
            why: 'The 2007 World Barista Champion, cofounder of London\'s Square Mile Coffee Roasters, and the single most influential coffee educator on the internet. Start with his Ultimate Guide to French Press.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@EuropeanCoffeeTrip',
            title: 'European Coffee Trip — origin travel films',
            channel: 'European Coffee Trip',
            duration: 'variable',
            featured: true,
            why: 'The Czech duo\'s on-location visits to coffee farms in Ethiopia, Colombia, Brazil, and Rwanda. The best farm-to-cup documentary series available free.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@OniCoffee',
            title: 'Onyx Coffee Lab — coffee education',
            channel: 'Onyx Coffee Lab',
            duration: 'variable',
            featured: true,
            why: 'The Arkansas specialty roaster films tasting, processing, and cupping explainers in their lab. The clearest American third-wave videos on origin and process.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@LanceHedrick',
            title: 'Lance Hedrick — coffee science',
            channel: 'Lance Hedrick',
            duration: 'variable',
            featured: false,
            why: 'A barista champion who obsessively tests variables with pharmaceutical-grade equipment. The rigorous counterpoint to Hoffmann\'s polish.',
          },
        ],
        books: [
          {
            title: 'The World Atlas of Coffee',
            author: 'James Hoffmann',
            year: 2014,
            url: 'https://www.jameshoffmann.co.uk/books',
            why: 'The standard one-volume reference for coffee origin. Second edition, 2018. Region by region, with maps and tasting notes, it is the book a new third-wave drinker should own.',
          },
          {
            title: 'How to Make the Best Coffee at Home',
            author: 'James Hoffmann',
            year: 2022,
            url: 'https://www.jameshoffmann.co.uk/books',
            why: 'Hoffmann\'s brewing companion to the Atlas. Plainly written, method by method, with calibration charts.',
          },
          {
            title: 'The Coffee Dictionary',
            author: 'Maxwell Colonna-Dashwood',
            year: 2017,
            url: 'https://www.hachette.co.uk/titles/maxwell-colonna-dashwood/the-coffee-dictionary/9781784723804/',
            why: 'A reference by a three-time UK barista champion. Alphabetical, concise, beautifully illustrated — the book you keep open on the counter.',
          },
          {
            title: 'Uncommon Grounds',
            author: 'Mark Pendergrast',
            year: 1999,
            url: 'https://www.basicbooks.com/titles/mark-pendergrast/uncommon-grounds/9780465061969/',
            why: 'The authoritative popular history of coffee as a commodity — slavery, colonial plantations, the New York and London exchanges, and Starbucks. Revised 2010.',
          },
        ],
        articles: [
          {
            title: 'Coffea arabica',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Coffea_arabica',
            why: 'Botany, history, and the IUCN Endangered listing. A good orientation to the plant beneath every specialty bag.',
            year: null,
          },
          {
            title: 'Coffee bean',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Coffee_bean',
            why: 'Origins, species comparison, chemistry, and processing. Well-cited with pointers to the specialty trade literature.',
            year: null,
          },
          {
            title: 'James Hoffmann',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/James_Hoffmann',
            why: 'The biography of the educator most shaping modern coffee literacy. The "pioneer of Britain\'s third-wave coffee movement."',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Coffee Skills Program',
            provider: 'Specialty Coffee Association',
            url: 'https://sca.coffee/sca-education',
            free: false,
            why: 'The SCA\'s professional curriculum covers Introduction to Coffee, Green Coffee, Sensory, Brewing, Barista Skills, and Roasting — each as a graded module. The industry standard.',
          },
          {
            title: 'Barista Hustle courses',
            provider: 'Barista Hustle',
            url: 'https://www.baristahustle.com/',
            free: false,
            why: 'Matt Perger\'s online coffee school, where many professional baristas train. Free blog, paid course tracks, all taught by former world champions.',
          },
        ],
        tools: [
          {
            title: 'A vacuum-sealed storage canister',
            url: 'https://en.wikipedia.org/wiki/Coffee_bean',
            why: 'Green beans keep for years; roasted beans are already gassing off. An airtight canister with a one-way valve slows staling by weeks.',
          },
          {
            title: 'A basic refractometer (optional)',
            url: 'https://en.wikipedia.org/wiki/Refractometer',
            why: 'The VST Coffee Tools refractometer measures total dissolved solids to two decimal places — the way a serious brewer calibrates a recipe. Unnecessary for a casual drinker, revelatory for a hobbyist.',
          },
        ],
      },

      seeAlso: ['roasting', 'brewing', 'wine', 'tasting'],
      prereqs: [],
      leadsTo: ['roasting', 'brewing'],

      chapterActivity: 'A monthly "three origins" cupping at a Williamsburg roaster — Ethiopian, Colombian, Sumatran, side by side, blind-labeled.',

      sources: [
        'https://en.wikipedia.org/wiki/Coffea_arabica',
        'https://en.wikipedia.org/wiki/Coffee_bean',
        'https://en.wikipedia.org/wiki/James_Hoffmann',
        'https://sca.coffee/',
      ],
      verifiedAt: '2026-04-23',
    },

    roasting: {
      id: 'roasting',
      name: 'Roasting',
      level: 'Intermediate',
      dek: 'A green bean meets a drum at 200°C and, in about twelve minutes, becomes everything we think coffee is.',
      readTime: '12 min',

      sections: ['From pale green to aromatic brown', 'First crack, second crack', 'Light, medium, dark — and why', 'The roast curve', 'Why roast date beats roast level'],
      body: [
        { type: 'lead', text: 'In 1864, a Cincinnati grocer named Jabez Burns patented a drum roaster that turned itself with a crank and ejected the beans through a side door at the moment the operator decided they were done. Before Burns, coffee was roasted at home over a fire, one pan at a time, and the variance was extraordinary. After Burns, coffee could be roasted in commercial quantities at a consistent level by a person with a watch. Every modern commercial roaster, from a one-kilo sample roaster to a two-hundred-kilo industrial drum, is descended from his basic design. The chemistry is the same as it ever was; the control has gotten better.' },
        { type: 'h2', text: 'From pale green to aromatic brown' },
        { type: 'p', text: 'A green coffee bean is dense, flavorless, and smells vaguely grassy. Heat it past about 160°C in a drum and it loses water, turns yellow, then tan. Push past 200°C and the Maillard reaction accelerates, sugars caramelize, and the bean darkens to brown. The complexity is extraordinary: roasted coffee contains more than eight hundred identified aromatic compounds, many of which form in a specific thirty-second window of the roast and disappear if the window is missed. Coffee roasting is a chemistry problem, and roasters who understand that chemistry produce better coffee.' },
        { type: 'h2', text: 'First crack, second crack' },
        { type: 'p', text: 'Somewhere around 196°C, the water vapor inside each bean builds enough pressure to crack the cellular structure audibly. A sample drum full of beans sounds like popcorn — this is first crack. It marks the beginning of what anyone can taste as coffee. The roaster can stop shortly after (a light roast), ride the long plateau between cracks (a medium), or push on until the bean cracks again at roughly 224°C — second crack — which is the marker of a dark roast. The two cracks are the roaster\'s map.' },
        { type: 'h2', text: 'Light, medium, dark — and why' },
        { type: 'p', text: 'A light roast preserves the origin — the Ethiopian floral, the Kenyan blackcurrant, the Colombian caramel. The trade is that light roasts are more acidic and the flavor vocabulary is less familiar to American palates trained on darker coffee. A medium roast balances origin with the familiar caramel-chocolate-toast register. A dark roast tastes mostly like roasting itself; the origin is almost gone, replaced by carbon-forward, oily, smoky notes. French, Italian, and Starbucks roasts live here. There is no right answer. There is only what the roaster wants and what you do.' },
        { type: 'h2', text: 'The roast curve' },
        { type: 'p', text: 'A modern sample roast records temperature and time continuously, producing a curve from charge to drop. A well-shaped curve rises through the drying phase, flattens through the Maillard phase, and shows a tight, measured development phase from first crack to drop. Scott Rao, the American roasting consultant, argues that a declining rate of rise past first crack is the signature of a clean roast. Read his books and you will never look at a curve the same way. Read his books and you may also decide you never want to roast a bean yourself.' },
        { type: 'h2', text: 'Why roast date beats roast level' },
        { type: 'p', text: 'A fresh medium-roasted bean from a specialty roaster will, almost always, taste better than an expensive dark-roasted bean that has sat on a shelf for three months. Coffee loses aroma faster than almost any pantry item in your kitchen — within weeks, not months. The single biggest upgrade a drinker can make, before buying a new grinder or a better kettle, is to move from a supermarket bag to a local roaster\'s bag stamped with a roast date.' },
        { type: 'callout', text: 'Oil on the surface of a bean is a sign of a dark roast — and of staling once the bag is open. Lightly roasted beans stay dry and retain their aromatics longer. A visibly oily bean is a bean past its best week.' },
      ],

      keyTerms: ['Maillard reaction', 'first crack', 'second crack', 'development time', 'roast profile', 'rate of rise', 'light roast', 'medium roast', 'dark roast', 'origin character'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@jameshoffmann',
            title: 'James Hoffmann — roasting fundamentals',
            channel: 'James Hoffmann',
            duration: 'variable',
            featured: true,
            why: 'Hoffmann\'s roasting explainers — light vs dark, what you\'re tasting, why fresher matters — are the clearest primer on YouTube for drinkers who have never watched a roast.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@OniCoffee',
            title: 'Onyx Coffee Lab — roast profiling',
            channel: 'Onyx Coffee Lab',
            duration: 'variable',
            featured: true,
            why: 'The Arkansas specialty roaster films actual roast sessions with their drum curve on-screen, narrating decisions in real time.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@Sweet-MariasCoffee',
            title: 'Sweet Maria\'s Coffee — home roasting',
            channel: 'Sweet Maria\'s',
            duration: 'variable',
            featured: true,
            why: 'The California home-roasting supplier\'s channel is the canonical resource for hobbyist roasters. Covers popcorn-popper roasting through full drum rigs.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@EuropeanCoffeeTrip',
            title: 'European Coffee Trip — roaster visits',
            channel: 'European Coffee Trip',
            duration: 'variable',
            featured: false,
            why: 'Documentary-grade visits to specialty roasters across Europe — Square Mile, La Cabra, April Coffee, and others.',
          },
        ],
        books: [
          {
            title: 'The Coffee Roaster\'s Companion',
            author: 'Scott Rao',
            year: 2014,
            url: 'https://scottrao.com/',
            why: 'The working roaster\'s standard reference. Compact, uncompromising, the most-cited text in the American specialty roasting industry.',
          },
          {
            title: 'Modulating the Flavor Profile of Coffee',
            author: 'Rob Hoos',
            year: 2015,
            url: 'https://www.robhooscoffee.com/',
            why: 'A rigorous, data-heavy short book on the thermal variables that shape the cup. The modern companion to Rao\'s book — both are often read together.',
          },
          {
            title: 'The World Atlas of Coffee',
            author: 'James Hoffmann',
            year: 2014,
            url: 'https://www.jameshoffmann.co.uk/books',
            why: 'Hoffmann\'s chapter on roasting is the clearest popular-science account of what the fire is doing, and why the drinker should care.',
          },
          {
            title: 'On Food and Cooking',
            author: 'Harold McGee',
            year: 1984,
            url: 'https://en.wikipedia.org/wiki/On_Food_and_Cooking',
            why: 'McGee on roasted plant seeds — coffee, cacao, nuts — is the most compact explanation of roasting chemistry a cook can read in an hour.',
          },
        ],
        articles: [
          {
            title: 'Coffee roasting',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Coffee_roasting',
            why: 'History, technique, and the temperature-time tables. A good reference before reading Rao.',
            year: null,
          },
          {
            title: 'Maillard reaction',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Maillard_reaction',
            why: 'The chemistry that explains why a coffee bean tastes like coffee and not like grass.',
            year: null,
          },
          {
            title: 'SCA Roasting Handbook',
            source: 'Specialty Coffee Association',
            url: 'https://sca.coffee/research/protocols-best-practices',
            why: 'The industry\'s canonical best-practices document on roast development, cooling, and color measurement.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'SCA Roasting Professional',
            provider: 'Specialty Coffee Association',
            url: 'https://sca.coffee/sca-education',
            free: false,
            why: 'The three-level roasting track in the SCA\'s Coffee Skills Program — Foundation, Intermediate, Professional. The industry certification.',
          },
          {
            title: 'Mill City Roasters — free webinars',
            provider: 'Mill City Roasters',
            url: 'https://www.millcityroasters.com/training',
            free: true,
            why: 'The Minneapolis roaster-manufacturer runs a free weekly webinar with working roasters. The most accessible professional training online.',
          },
        ],
        tools: [
          {
            title: 'A home sample roaster (Behmor, Aillio, Kaldi)',
            url: 'https://en.wikipedia.org/wiki/Coffee_roasting',
            why: 'A Behmor 1600+ (~$400) or Aillio Bullet R1 (~$2,500) is the realistic range for a committed home roaster. A popcorn popper is where most hobbyists start.',
          },
          {
            title: 'Artisan roast-logging software (free)',
            url: 'https://artisan-scope.org/',
            why: 'Open-source roast software that reads drum and bean temperatures from most home and commercial roasters, and draws the profile curve in real time.',
          },
          {
            title: 'A color meter (Agtron or Tonino)',
            url: 'https://en.wikipedia.org/wiki/Coffee_roasting',
            why: 'The objective measure of roast level. A Tonino is $250 and open-source; an Agtron is $4,000 and industry standard. Both measure ground-coffee reflectance.',
          },
        ],
      },

      seeAlso: ['beans', 'brewing', 'heat_transfer', 'bread'],
      prereqs: ['beans'],
      leadsTo: ['brewing'],

      chapterActivity: 'A "meet the roaster" drop-in at a Bushwick micro-roaster — watch a twelve-minute sample roast, taste the results at first-crack, second-crack, and development-time variations.',

      sources: [
        'https://en.wikipedia.org/wiki/Coffee_roasting',
        'https://en.wikipedia.org/wiki/Maillard_reaction',
        'https://sca.coffee/',
        'https://scottrao.com/',
      ],
      verifiedAt: '2026-04-23',
    },

    brewing: {
      id: 'brewing',
      name: 'Brewing Methods',
      level: 'Intermediate',
      dek: 'Hot water through ground coffee, yes — but the ratio, the grind, and the time are where the whole craft lives.',
      readTime: '13 min',

      sections: ['What extraction really is', 'The four variables', 'Pour-over, French press, espresso', 'The grinder is the ingredient', 'A weekday cup, done right'],
      body: [
        { type: 'lead', text: 'In 1908, a Dresden housewife named Melitta Bentz got tired of bitter coffee. She punched holes in a brass cup, blotted a piece of her son\'s school paper across the holes, dumped ground coffee on top, and poured hot water through. The filter caught the grounds; the paper trapped the oils; the coffee tasted cleaner than anything her neighbors were drinking. Bentz patented the design in June of 1908. The Melitta filter is still, with small modifications, the pour-over cone everyone uses today. All the modern specialty brewers — the V60, the Kalita Wave, the Chemex — are variations on Bentz\'s insight.' },
        { type: 'h2', text: 'What extraction really is' },
        { type: 'p', text: 'Brewing is chemistry. Hot water dissolves the soluble compounds inside a ground coffee particle — acids first (bright), then sugars (sweet), then bitter compounds (harsh). If you stop too early, the coffee is sour and thin. If you go too long, it is bitter and flat. The sweet spot, measured, is an extraction yield between 18 and 22 percent of the ground coffee\'s mass, with the resulting brew at around 1.3 to 1.5 percent dissolved solids. A refractometer reads these numbers. A tongue, with practice, does the same.' },
        { type: 'h2', text: 'The four variables' },
        { type: 'p', text: 'Ratio (grams of coffee to grams of water), grind (coarseness), time (how long water and coffee are in contact), and temperature. That is the whole brew recipe. A French press wants coarse grind, long time, water off the boil. An espresso wants very fine grind, thirty seconds, and nine bars of pressure. A pour-over wants medium grind, three-and-a-half minutes, and a careful pour. Everything else is refinement.' },
        { type: 'h2', text: 'Pour-over, French press, espresso' },
        { type: 'p', text: 'Pour-over — Hario V60, Kalita Wave, Chemex — passes water through the grounds into a cup. The result is bright, clean, origin-forward. French press immerses the grounds in water for four minutes and filters through a metal mesh; the result is heavier, with more suspended oils and fines. Espresso forces water at nine bars through a tightly packed puck in under thirty seconds, producing a concentrated shot with a layer of emulsified oils on top called crema. A drinker who learns the three has a working model of every major café drink on earth.' },
        { type: 'h2', text: 'The grinder is the ingredient' },
        { type: 'p', text: 'The most common advice in modern coffee is also the most often ignored: buy a better grinder before you buy anything else. A burr grinder produces particles of consistent size. A blade grinder produces everything from dust to gravel, which extracts unevenly and tastes harsh. The quality of the particles — and especially the uniformity of the particle size — is the ceiling on every other decision. A cheap grinder on a good bean is worse than a good grinder on a decent bean.' },
        { type: 'h2', text: 'A weekday cup, done right' },
        { type: 'p', text: 'A home drinker aiming for one excellent cup in under five minutes: fifteen grams of medium-ground specialty beans, stamped with a roast date in the past three weeks; 250 grams of water at 96°C; a pour-over cone; four minutes total contact time with a thirty-second bloom first. A kitchen scale, a gooseneck kettle, and a gram of attention. The difference between this cup and the drip machine on the counter is not small. It is not subtle. It is the difference between remembering the coffee and reaching for sugar to cover it.' },
        { type: 'callout', text: 'Water matters more than home brewers suspect. Hard water pulls more body and bitterness; soft water pulls more acidity and clarity. Many specialty roasters sell water recipes (Third Wave Water, Lotus) that transform the cup for two dollars a month.' },
      ],

      keyTerms: ['extraction yield', 'total dissolved solids (TDS)', 'bloom', 'burr grinder', 'V60', 'French press', 'espresso', 'crema', 'brew ratio', 'bypass'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@jameshoffmann',
            title: 'James Hoffmann — Ultimate V60 / French Press / Espresso guides',
            channel: 'James Hoffmann',
            duration: 'variable',
            featured: true,
            why: 'The "Ultimate Guide to" series — French press, V60, AeroPress — are the most-watched coffee tutorials on YouTube. For good reason.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@LanceHedrick',
            title: 'Lance Hedrick — brewing deep dives',
            channel: 'Lance Hedrick',
            duration: 'variable',
            featured: true,
            why: 'A barista champion who tests everything. His videos on grind distribution, refractometry, and espresso variables are the rigorous companion to Hoffmann\'s polish.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@LifebyStein',
            title: 'Matt Winton / LifebyStein — home espresso',
            channel: 'LifebyStein',
            duration: 'variable',
            featured: true,
            why: 'Matt Winton, a former World Barista Championship competitor, films home espresso technique with judge\'s eye. Essential for anyone buying a first espresso machine.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@OniCoffee',
            title: 'Onyx Coffee Lab — brewing and sensory',
            channel: 'Onyx Coffee Lab',
            duration: 'variable',
            featured: false,
            why: 'The Arkansas roaster\'s lab-based exploration of brewing variables. Shorter, denser, and more rigorous than most specialty-brand content.',
          },
        ],
        books: [
          {
            title: 'How to Make the Best Coffee at Home',
            author: 'James Hoffmann',
            year: 2022,
            url: 'https://www.jameshoffmann.co.uk/books',
            why: 'Method by method, with recipes calibrated by a former world champion. The home brewer\'s reference.',
          },
          {
            title: 'The Professional Barista\'s Handbook',
            author: 'Scott Rao',
            year: 2008,
            url: 'https://scottrao.com/',
            why: 'The book that shaped a decade of specialty brewing. Dense, uncompromising, the reference for anyone serious about espresso or pour-over.',
          },
          {
            title: 'Water for Coffee',
            author: 'Maxwell Colonna-Dashwood, Christopher H. Hendon',
            year: 2015,
            url: 'https://www.colonnacoffee.com/books/water-for-coffee',
            why: 'A Bath barista and an Oxford chemist on why brewing water matters more than any other variable most drinkers overlook. Short, technical, practical.',
          },
          {
            title: 'The World Atlas of Coffee',
            author: 'James Hoffmann',
            year: 2014,
            url: 'https://www.jameshoffmann.co.uk/books',
            why: 'The brewing section is shorter than in his home-brewing book, but cross-referenced to origins — the best place to start before choosing a brewer.',
          },
        ],
        articles: [
          {
            title: 'Coffee preparation',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Coffee_preparation',
            why: 'A broad overview of every major brewing method, from Turkish ibrik to cold brew. A good reference before reading the technical books.',
            year: null,
          },
          {
            title: 'SCA Golden Cup Standard',
            source: 'Specialty Coffee Association',
            url: 'https://sca.coffee/research/protocols-best-practices',
            why: 'The industry\'s extraction and strength targets, expressed in refractometer numbers. The equation the whole modern brewing conversation is built on.',
            year: null,
          },
          {
            title: 'Espresso',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Espresso',
            why: 'History, method, and the Italian codifications that made the nine-bar thirty-second shot what it is.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'SCA Barista Skills Professional',
            provider: 'Specialty Coffee Association',
            url: 'https://sca.coffee/sca-education',
            free: false,
            why: 'The espresso-focused track in the SCA\'s Coffee Skills Program. The certification working baristas take seriously.',
          },
          {
            title: 'Barista Hustle — free blog and guides',
            provider: 'Barista Hustle',
            url: 'https://www.baristahustle.com/',
            free: true,
            why: 'Matt Perger\'s free blog covers grind distribution, extraction theory, milk steaming, and water chemistry. The best free barista education on the internet.',
          },
        ],
        tools: [
          {
            title: 'A burr grinder (Baratza Encore / Fellow Ode)',
            url: 'https://en.wikipedia.org/wiki/Burr_mill',
            why: 'The single biggest improvement a home brewer can make. A $150 burr grinder produces more consistent results than a $30 blade grinder will ever reach.',
          },
          {
            title: 'A gooseneck kettle',
            url: 'https://en.wikipedia.org/wiki/Electric_kettle',
            why: 'The narrow spout allows controlled pouring for pour-over brewing. A Bonavita, Brewista, or Fellow Stagg is the home-barista standard.',
          },
          {
            title: 'A kitchen scale (0.1 g resolution)',
            url: 'https://en.wikipedia.org/wiki/Kitchen_scale',
            why: 'A brew recipe is meaningless without grams. A $30 scale with 0.1 gram resolution is the price of admission for any serious brewing.',
          },
          {
            title: 'A Hario V60 or Kalita Wave',
            url: 'https://en.wikipedia.org/wiki/Brewed_coffee',
            why: 'The two dominant pour-over cones. A V60 is more forgiving of technique; a Kalita Wave has a flat bottom and is more consistent across skill levels.',
          },
        ],
      },

      seeAlso: ['beans', 'roasting', 'heat_transfer', 'cocktails'],
      prereqs: ['beans', 'roasting'],
      leadsTo: [],

      chapterActivity: 'A "one bean, three brewers" morning at a Park Slope café — same roast, brewed pour-over, French press, and AeroPress, tasted against a printed sensory wheel.',

      sources: [
        'https://en.wikipedia.org/wiki/Coffee_preparation',
        'https://en.wikipedia.org/wiki/Espresso',
        'https://sca.coffee/',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
