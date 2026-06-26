// content/carrepair.js
// Batch: B12-life-skills-II-outdoor
// Last updated: 2026-04-23 by BATCH B12-life-skills-II-outdoor
//
// Topics from data.js: oil_change, tires, jumping
//
// Subject is "Basic Car Care" — for the non-mechanic. Aim is competence
// to handle roadside emergencies and avoid being upsold by a shop.

window.CONTENT = window.CONTENT || {};
window.CONTENT.carrepair = {
  subjectId: 'carrepair',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B12-life-skills-II-outdoor',
  topics: {

    oil_change: {
      id: 'oil_change',
      name: 'Oil & Fluids',
      level: 'Beginner',
      dek: 'A car runs on six fluids; learn to check the dipsticks and most modern engines will outlive their original owners.',
      readTime: '9 min',

      sections: ['What the oil actually does', 'How often, and what kind', 'The other five fluids', 'Doing it yourself, or not'],
      body: [
        { type: 'lead', text: 'In 1903, the first crankcase oil sold for automobiles was a single grade of mineral oil pumped from the same wells that lit the lamps of New York. A modern motor oil is a dozen blended base stocks loaded with detergents, dispersants, anti-wear additives, viscosity-index improvers, and friction modifiers — a fluid as engineered as the engine it lubricates. The good news for the non-mechanic is that the routine has not changed much: open the hood once a month, pull the dipstick, top up if low, change the oil according to the manual.' },
        { type: 'h2', text: 'What the oil actually does' },
        { type: 'p', text: 'Engine oil does four jobs at once. It lubricates the moving metal so it does not weld itself together. It carries heat away from the pistons. It carries grit and combustion byproducts to the filter. And, increasingly, it cushions hydraulic lifters and turbocharger bearings that depend on a film of oil to function. Oil that has gone too long becomes too dirty, too acidic, and too thin to do these jobs. The first symptom of failure is rarely a noise; it is a slow, expensive shortening of the engine\'s life.' },
        { type: 'h2', text: 'How often, and what kind' },
        { type: 'p', text: 'Modern synthetic oils, paired with modern engines, last far longer than the old quick-lube standard of three thousand miles. Most manufacturers now specify intervals between five and ten thousand miles, sometimes longer. The owner\'s manual is the only authority that matters; ignore the sticker the shop puts on your windshield. Use the viscosity grade (5W-30, 0W-20, etc.) called for in the manual. Synthetic blends are fine for older cars; full synthetic is required for many newer ones, especially turbocharged engines.' },
        { type: 'h2', text: 'The other five fluids' },
        { type: 'p', text: 'Beyond engine oil, a modern car has five fluid systems worth knowing. Coolant (in the radiator overflow tank) prevents overheating and corrosion; check the level cold, top up with the right color. Transmission fluid wears out; some cars have a dipstick, many newer ones do not, and skipping the recommended change is the most common cause of premature transmission failure. Brake fluid absorbs water over time and should be flushed every two or three years. Power steering fluid is mostly forgotten until the pump whines. Windshield washer fluid is the only one you can ignore at no cost beyond visibility.' },
        { type: 'h2', text: 'Doing it yourself, or not' },
        { type: 'p', text: 'An oil change at home costs about thirty dollars in parts and an hour of time. The work is physically straightforward but messy: ramps or jack stands, a drain pan, a filter wrench, a torque wrench for the drain plug. The case for doing it yourself is mostly about knowing your car. The case against is that the cost difference is small if you find a good independent shop, and a good shop will catch problems you would not. The middle path most owners settle into: have the shop do most oil changes; do one yourself every couple of years to stay familiar.' },
        { type: 'callout', text: 'Never overfill the engine oil. Too much oil is worse than too little — it gets whipped into foam by the crankshaft, foam does not lubricate, and bearings start to fail. Always check after, with the engine off and the car level.' },
      ],

      keyTerms: ['viscosity', 'synthetic oil', 'oil filter', 'dipstick', 'coolant', 'transmission fluid', 'brake fluid', 'OEM specification'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ChrisFix',
            title: 'ChrisFix — full channel',
            channel: 'ChrisFix',
            duration: 'variable',
            featured: true,
            why: 'The most-watched DIY car-repair channel on YouTube. The oil-change and fluid-check videos are the canonical walk-throughs for any modern car.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@EngineeringExplained',
            title: 'Engineering Explained — full channel',
            channel: 'Jason Fenske',
            duration: 'variable',
            featured: true,
            why: 'A mechanical engineer explaining the why behind every fluid system. Worth subscribing for the long term.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ScottyKilmer',
            title: 'Scotty Kilmer — full channel',
            channel: 'Scotty Kilmer',
            duration: 'variable',
            featured: true,
            why: 'A fifty-year mechanic on what to do, what to skip, and what most shops will try to sell you that you do not need.',
          },
        ],
        books: [
          {
            title: 'How to Keep Your Volkswagen Alive',
            author: 'John Muir',
            year: 1969,
            url: 'https://en.wikipedia.org/wiki/John_Muir_(engineer)',
            why: 'The hippie-era cult classic that taught a generation of non-mechanics how to keep an air-cooled VW running. Out of date for new cars; the spirit and the diagnostic logic remain unmatched.',
          },
          {
            title: 'Auto Repair For Dummies',
            author: 'Deanna Sclar',
            year: 2019,
            url: 'https://en.wikipedia.org/wiki/For_Dummies',
            why: 'The most-recommended modern beginner reference. Sclar wrote the original 1976 edition; the current one is up to date and well-illustrated.',
          },
          {
            title: 'Chilton or Haynes Manual (for your specific car)',
            author: 'Chilton / Haynes',
            year: 2024,
            url: 'https://en.wikipedia.org/wiki/Haynes_Manual',
            why: 'The model-specific repair manual is the authoritative DIY reference. Haynes for the photographic version; Chilton for the more textual.',
          },
        ],
        articles: [
          {
            title: 'Motor oil',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Motor_oil',
            why: 'The chemistry, the viscosity grades, and the difference between mineral, semi-synthetic, and full-synthetic oils.',
            year: null,
          },
          {
            title: 'Oil Change Frequency Guide',
            source: 'AAA',
            url: 'https://www.aaa.com/autorepair/articles/oil-changes',
            why: 'AAA\'s independent guidance on intervals, viscosities, and what the dashboard light actually means.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'AutoEducation.com',
            provider: 'AutoEducation',
            url: 'https://www.autoeducation.com',
            free: true,
            why: 'Free, model-agnostic basic car-care course. Compact and practical.',
          },
        ],
      },

      seeAlso: ['tires', 'jumping', 'engine_basics'],
      prereqs: [],
      leadsTo: ['tires'],
      chapterActivity: 'A late-spring "open hood" Saturday at a Brooklyn community garage — a working mechanic shows residents the dipsticks on five different cars, then they check their own.',
      sources: [
        'https://en.wikipedia.org/wiki/Motor_oil',
        'https://www.aaa.com/autorepair/articles/oil-changes',
      ],
      verifiedAt: '2026-04-23',
    },

    tires: {
      id: 'tires',
      name: 'Tires',
      level: 'Beginner',
      dek: 'Four small patches of rubber are the only thing between the car and the road; almost no other maintenance is as important.',
      readTime: '10 min',

      sections: ['The contact patch', 'Pressure, the silent killer', 'Tread, rotation, and the penny test', 'When to replace'],
      body: [
        { type: 'lead', text: 'In 1888 a Belfast veterinarian named John Boyd Dunlop watched his son ride a tricycle on a brick path and decided the boy needed a smoother ride. Dunlop wrapped the wheels in air-filled rubber tubes; he had reinvented the pneumatic tire (André Michelin would shortly improve it for cars). Every modern tire — radial, steel-belted, computer-designed — is a refinement of the same idea: a small patch of compressed air-and-rubber that has to keep a one-ton object pointed where the driver intends.' },
        { type: 'h2', text: 'The contact patch' },
        { type: 'p', text: 'Each tire on a typical passenger car contacts the road through a patch about the size of an adult\'s palm. The whole weight of the car, the whole grip you need to brake, every steering input — all of it travels through four palm-sized patches of rubber. Almost everything that goes wrong with car handling traces back to those patches: too little pressure, too little tread, too much wear on one side, the wrong tire for the season. The single most useful safety habit a driver can have is to know what the contact patches look like, and to look at them every couple of weeks.' },
        { type: 'h2', text: 'Pressure, the silent killer' },
        { type: 'p', text: 'Underinflated tires waste fuel, wear out faster on the edges, run hotter, and — in the worst case — fail catastrophically at highway speed. The correct pressure is on the sticker inside the driver\'s door jamb, not on the tire sidewall (the sidewall lists the maximum, which is not the right pressure for normal driving). Check pressure cold — before driving, or after the car has sat for several hours — once a month and before every long trip. The cheap pencil gauge in the glove box pays for itself the first time it catches a slow leak.' },
        { type: 'h2', text: 'Tread, rotation, and the penny test' },
        { type: 'p', text: 'New tires have about 10/32 of an inch of tread. The legal minimum in most US states is 2/32. Below that, wet braking distances stretch enormously and hydroplaning becomes a real risk. The classic check: hold a penny upside down (Lincoln\'s head pointing into the tread); if you can see all of his head, the tread is too low. Tires should be rotated front-to-back roughly every five to seven thousand miles to wear evenly; many shops will do this free with an oil change. An alignment every couple of years prevents the inside-edge wear that ruins tires before their time.' },
        { type: 'h2', text: 'When to replace' },
        { type: 'p', text: 'Tires age out as well as wear out. The rubber compounds harden over six to ten years even on a parked car; the date code on the sidewall (the four-digit DOT number) tells you when the tire was made. A tire over ten years old should be replaced regardless of tread. Replace tires in pairs at minimum — both fronts, both rears — to keep handling balanced. All-wheel-drive cars usually need all four replaced together; mismatched diameters strain the differential and shorten its life.' },
        { type: 'callout', text: 'A spare tire — the donut in the trunk — is rated for fifty miles at fifty miles an hour. Drive it home or to the nearest tire shop, then replace it. It is not a permanent tire; treating it as one is one of the more common ways to cause a serious freeway accident.' },
      ],

      keyTerms: ['contact patch', 'tire pressure', 'tread depth', 'rotation', 'alignment', 'load index', 'speed rating', 'DOT date code'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ChrisFix',
            title: 'ChrisFix — Tire playlists',
            channel: 'ChrisFix',
            duration: 'variable',
            featured: true,
            why: 'ChrisFix\'s tire-rotation, pressure-check, and flat-changing videos are the canonical visual references for any new driver.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TyreReviews',
            title: 'Tyre Reviews — full channel',
            channel: 'Jonathan Benson',
            duration: 'variable',
            featured: true,
            why: 'The most rigorous independent tire-testing channel on YouTube. The seasonal-tire and wet-braking comparisons are the references industry insiders watch.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@EngineeringExplained',
            title: 'Engineering Explained — Tire physics videos',
            channel: 'Jason Fenske',
            duration: 'variable',
            featured: true,
            why: 'Fenske on contact patch, slip angle, and why hydroplaning happens. Engineering, not opinion.',
          },
        ],
        books: [
          {
            title: 'Auto Repair For Dummies',
            author: 'Deanna Sclar',
            year: 2019,
            url: 'https://en.wikipedia.org/wiki/For_Dummies',
            why: 'Sclar\'s tire and brake chapters are the clearest beginner reference outside a model-specific manual.',
          },
          {
            title: 'High-Performance Handling Handbook',
            author: 'Don Alexander',
            year: 2009,
            url: 'https://en.wikipedia.org/wiki/Tire',
            why: 'For the reader who wants to understand contact patch and slip angle the way race engineers do.',
          },
          {
            title: 'Chilton or Haynes Manual (for your specific car)',
            author: 'Chilton / Haynes',
            year: 2024,
            url: 'https://en.wikipedia.org/wiki/Haynes_Manual',
            why: 'Includes torque specs, jacking points, and tire-rotation patterns specific to your car.',
          },
        ],
        articles: [
          {
            title: 'Tire',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Tire',
            why: 'Comprehensive reference on construction, rating systems, and the long history.',
            year: null,
          },
          {
            title: 'Tires 101',
            source: 'NHTSA',
            url: 'https://www.nhtsa.gov/equipment/tires',
            why: 'The federal regulator\'s plain-English guide to tire safety, ratings, and recalls.',
            year: null,
          },
        ],
        tools: [
          {
            title: 'Treadwear, traction, and temperature ratings (UTQG)',
            url: 'https://en.wikipedia.org/wiki/Uniform_Tire_Quality_Grading',
            why: 'The DOT\'s required ratings, explained. Useful when shopping for new tires.',
          },
        ],
      },

      seeAlso: ['oil_change', 'jumping', 'engine_basics'],
      prereqs: ['oil_change'],
      leadsTo: ['jumping'],
      chapterActivity: 'A pre-summer "tire safety" Saturday at a Bronx auto shop: residents bring their cars; a working tech checks pressure, tread, and date codes for free.',
      sources: [
        'https://en.wikipedia.org/wiki/Tire',
        'https://www.nhtsa.gov/equipment/tires',
      ],
      verifiedAt: '2026-04-23',
    },

    jumping: {
      id: 'jumping',
      name: 'Jumping a Battery',
      level: 'Beginner',
      dek: 'Red to red, black to ground — a five-minute skill that converts a stranded morning into a normal one.',
      readTime: '8 min',

      sections: ['Why batteries die', 'The exact procedure', 'Modern hazards', 'When jumping does not work'],
      body: [
        { type: 'lead', text: 'A car battery has two jobs: spin the starter motor for the few seconds it takes to start the engine, and run the radio when the engine is off. Almost everything else is the alternator, which charges the battery while the engine runs. A flat battery on a winter morning is rarely a sign that the battery has failed — it is usually a sign that the car was driven a few short trips in cold weather and the alternator never had time to fully recharge it. Jumping it is a five-minute skill that everyone who drives should know.' },
        { type: 'h2', text: 'Why batteries die' },
        { type: 'p', text: 'A 12-volt lead-acid battery loses some charge every day, even sitting still — accessories like the clock, the alarm, and the keyless-entry receiver draw a small current continuously. Cold weather doubles or triples the strain because the chemistry runs slower, and a cold engine is harder to crank. Most batteries last three to five years; toward the end, the symptoms are slow cranking on cold mornings and dim headlights at idle. A battery that has been deeply discharged a few times — left with the lights on overnight, or sat for a month — is usually permanently weakened.' },
        { type: 'h2', text: 'The exact procedure' },
        { type: 'p', text: 'Park the working car close enough that the cables reach, but not touching. Both ignitions off. Open both hoods. With the dead battery, connect red (positive) cable clamp to the dead battery\'s positive terminal (marked +). Connect the other red clamp to the working battery\'s positive terminal. Connect black (negative) clamp to the working battery\'s negative terminal. Connect the other black clamp to a clean unpainted metal point on the dead car\'s engine block — not the battery negative terminal. Start the working car, let it run a couple of minutes, then start the dead car. Once it starts, remove the clamps in reverse order: black off the engine, black off the working battery, red off the working battery, red off the dead battery. Drive the rescued car for at least twenty minutes to recharge.' },
        { type: 'h2', text: 'Modern hazards' },
        { type: 'p', text: 'Modern cars are full of sensitive electronics that an incorrect jump can damage. The key safety rules: never let the clamps touch each other while connected to a battery; never connect the dead car\'s negative clamp directly to the dead battery (the spark can ignite hydrogen gas seeping from a flat battery); always wear safety glasses; never lean over a battery while connecting. If the car is hybrid or electric, do not jump from its high-voltage system — only from the auxiliary 12V battery, which is in a different location. Read the owner\'s manual once before you need to.' },
        { type: 'h2', text: 'When jumping does not work' },
        { type: 'p', text: 'If the car will not start after a clean jump, the battery is probably beyond rescue and needs replacement. If it starts but dies immediately when the cables come off, the alternator is failing. If you hear a single loud click but no cranking, the starter solenoid may be the problem rather than the battery. A modern jump pack — a lithium-ion brick that fits in a glove box, a hundred dollars — eliminates the need for a second car entirely and is one of the better fifty-to-hundred-dollar safety investments most drivers can make.' },
        { type: 'callout', text: 'A car that needs jumping every few weeks does not need more jumping. It needs a new battery, an alternator check, or an investigation into the parasitic drain. The pattern, not the event, is the diagnosis.' },
      ],

      keyTerms: ['lead-acid battery', 'alternator', 'cold cranking amps', 'starter solenoid', 'parasitic draw', 'jump pack', 'auxiliary battery', 'reserve capacity'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ChrisFix',
            title: 'ChrisFix — How to Jump Start a Car',
            channel: 'ChrisFix',
            duration: 'variable',
            featured: true,
            why: 'The most-watched jump-start tutorial on YouTube. Slow, careful, and walks through both cars.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ScottyKilmer',
            title: 'Scotty Kilmer — Battery diagnosis videos',
            channel: 'Scotty Kilmer',
            duration: 'variable',
            featured: true,
            why: 'Kilmer\'s videos on telling whether the issue is the battery, the alternator, or the starter — the diagnostic skill behind the procedure.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@AAANational',
            title: 'AAA — Battery & Roadside videos',
            channel: 'AAA',
            duration: 'variable',
            featured: true,
            why: 'The actual roadside service organization\'s instructional videos. Less personality; more correct procedure.',
          },
        ],
        books: [
          {
            title: 'Auto Repair For Dummies',
            author: 'Deanna Sclar',
            year: 2019,
            url: 'https://en.wikipedia.org/wiki/For_Dummies',
            why: 'Sclar\'s electrical chapter walks through battery, alternator, and starter as a system.',
          },
          {
            title: 'How to Keep Your Volkswagen Alive',
            author: 'John Muir',
            year: 1969,
            url: 'https://en.wikipedia.org/wiki/John_Muir_(engineer)',
            why: 'The historical curiosity that taught a million owners how to read electrical symptoms. Still wonderful, even if your car is not a VW.',
          },
          {
            title: 'Chilton or Haynes Manual (for your specific car)',
            author: 'Chilton / Haynes',
            year: 2024,
            url: 'https://en.wikipedia.org/wiki/Haynes_Manual',
            why: 'The owner\'s manual covers the basics; Chilton/Haynes covers the diagnostic flow when those basics are not enough.',
          },
        ],
        articles: [
          {
            title: 'Jump start (vehicle)',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Jump_start_(vehicle)',
            why: 'The procedure, the safety hazards, and the history of the twelve-volt automotive system.',
            year: null,
          },
          {
            title: 'How to Jump-Start a Car',
            source: 'AAA',
            url: 'https://www.aaa.com/autorepair/articles/how-to-jumpstart-a-car',
            why: 'AAA\'s plain-English guide. The most authoritative free reference for the exact sequence.',
            year: null,
          },
        ],
        tools: [
          {
            title: 'Lithium jump pack',
            url: 'https://en.wikipedia.org/wiki/Battery_charger',
            why: 'A glove-box-sized lithium-ion jump pack will start most modern cars without a second vehicle. The single most useful piece of new car-care kit since the cell phone.',
          },
        ],
      },

      seeAlso: ['oil_change', 'tires', 'engine_basics'],
      prereqs: ['oil_change'],
      leadsTo: [],
      chapterActivity: 'A late-fall "battery clinic" at a Queens public-works yard — bring your car if you suspect a weak battery, leave with a load-test reading and a working jump pack rental option.',
      sources: [
        'https://en.wikipedia.org/wiki/Jump_start_(vehicle)',
        'https://www.aaa.com/autorepair/articles/how-to-jumpstart-a-car',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
