// content/cycling.js
// Batch: B14-movement
// Last updated: 2026-04-23 by BATCH B13+B14
//
// Topics this subject must cover (from data.js):
//   Core: maintenance, riding

window.CONTENT = window.CONTENT || {};
window.CONTENT.cycling = {
  subjectId: 'cycling',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B13+B14',
  topics: {

    maintenance: {
      id: 'maintenance',
      name: 'Bike Maintenance',
      level: 'Beginner',
      dek: 'Chain, brakes, tires — the three systems every cyclist should be able to service on the side of a road with what fits in a jersey pocket.',
      readTime: '12 min',

      sections: ['The three essential systems', 'The chain, lubed and clean', 'Brakes, tuned and aligned', 'Tires, pumped and patched', 'Why the home mechanic thing matters'],
      body: [
        { type: 'lead', text: 'In 1903, at the finish line of the first Tour de France in the Parc des Princes velodrome in Paris, a cyclist named Maurice Garin rolled in with a bicycle he had repaired seven times on the road — broken spokes, replaced tires, once a bent fork straightened with a stone. The Tour organizers had required every rider to be their own mechanic; if a wheel broke, the cyclist fixed it or abandoned. A century later, professional cyclists have team cars with spare bikes. Every other cyclist on earth still has to know how to keep their own bicycle running. The skills have not changed much. The systems that break are still the chain, the brakes, and the tires, and a cyclist who can service those three can finish almost any ride.' },
        { type: 'h2', text: 'The three essential systems' },
        { type: 'p', text: 'Every bicycle has three systems that need regular attention: the drivetrain (chain, cassette, derailleurs), the brakes (pads, cables, hydraulic fluid), and the tires (pressure, patches, tubes). Everything else is either set-and-forget (the frame, the wheels\' bearings if sealed) or occasional (bar tape, saddle height, shifter cables). A cyclist who learns the three essentials has nineteen-twentieths of the home-mechanic skills they will ever use. The remaining bits — hub overhauls, bottom-bracket replacements, suspension servicing — are either rare enough or specialized enough that most cyclists send the bike to a shop once a year and do the rest themselves.' },
        { type: 'h2', text: 'The chain, lubed and clean' },
        { type: 'p', text: 'A chain is twenty-seven dollars of steel links that, unlubricated, will wear out a hundred-and-fifty-dollar cassette and chainrings in a few hundred miles. A chain, lubricated, will itself last two to five thousand miles depending on conditions. The ritual is simple: every few hundred miles, wipe the chain clean with a rag, squeeze a drop of chain lube onto every link, let it soak in, and wipe off the excess. That is it. A dry chain squeaks; a soaked chain picks up dirt; a properly lubed chain runs silent and barely shiny. A chain-checker tool — a six-dollar steel strip with two tabs — tells you when the chain has stretched 0.5% and needs replacing before it eats the cassette.' },
        { type: 'h2', text: 'Brakes, tuned and aligned' },
        { type: 'p', text: 'Modern bicycles run either rim brakes (on road bikes until recently, and still on many) or disc brakes (on all mountain bikes and most new road bikes). Both need the same two kinds of attention. The pads wear down and must be replaced when the wear indicator appears — every five thousand miles or so, for a road bike; more often on a mountain bike. The alignment drifts and must be reset occasionally so the pad hits the rotor squarely without rubbing. Hydraulic disc brakes require bleeding — the fluid replaced every couple of years — which is the one task most home mechanics outsource. Rim brakes are simpler. Either way, brakes are the one system where a small investment in knowledge returns a large improvement in every ride.' },
        { type: 'h2', text: 'Tires, pumped and patched' },
        { type: 'p', text: 'The most common failure on any ride is a flat tire. Every cyclist should know how to fix one on the road in five minutes. The process is straightforward: remove the wheel, lever the tire off the rim, pull out the tube, find the leak (listen, feel, or dip in water), patch it or replace with a spare tube, check the inside of the tire for what caused the puncture (glass, thorn, wire), reinstall, pump, and ride. Tubeless tires — increasingly standard on mountain and gravel bikes — seal most punctures automatically but require occasional sealant top-offs. Pressure matters: under-inflated tires pinch-flat, over-inflated tires ride harsh. A floor pump with a gauge is the single best tool investment a cyclist makes after the bike itself.' },
        { type: 'h2', text: 'Why the home mechanic thing matters' },
        { type: 'p', text: 'A cyclist who can change a tube on the side of the road, tune a derailleur, or replace a brake pad is free in a way a cyclist who cannot is not. Riding in remote areas — a gravel century in Vermont, a backpacking trip in the Rockies — is survivable only because every rider can fix their own machine. Even in a city, a flat tire at four p.m. on the way to a dinner means the bike is a problem until a shop opens the next morning, unless you can fix it in fifteen minutes. The skills are not hard. They are specific knowledge, transmitted in person or on YouTube, and a half-dozen cheap tools. The ratio of usefulness to time-invested is among the best in any domain of adult life.' },
        { type: 'callout', text: 'First month: learn three skills in three weeks. Week one: fix a flat tire, start to finish, in under ten minutes, with your own bike as the test case. Week two: clean and lube the chain with a proper routine. Week three: adjust the rear derailleur so every gear shifts cleanly. After one month, you own your bicycle in a way most cyclists never do.' },
      ],

      keyTerms: ['drivetrain', 'cassette', 'chainring', 'derailleur', 'chain lube', 'brake pad', 'rotor', 'rim brake', 'disc brake', 'tubeless', 'presta valve', 'schrader valve', 'tire lever'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@parktoolcompany',
            title: 'Park Tool — the definitive free bike-mechanic library',
            channel: 'Park Tool',
            duration: 'variable',
            featured: true,
            why: 'Calvin Jones of Park Tool has been filming bicycle-mechanic tutorials for over fifteen years. The single most complete free bike-repair curriculum on the internet.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@globalcyclingnetwork',
            title: 'Global Cycling Network (GCN)',
            channel: 'Global Cycling Network',
            duration: 'variable',
            featured: true,
            why: 'The largest cycling channel on YouTube. Maintenance content is excellent; Simon Richardson\'s tutorials are particularly clear for beginners.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@gmbn',
            title: 'Global Mountain Bike Network (GMBN)',
            channel: 'Global Mountain Bike Network',
            duration: 'variable',
            featured: true,
            why: 'The sister channel to GCN covering mountain-bike specifics — suspension, tubeless, brakes, drivetrain. Essential for MTB home mechanics.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@RJTheBikeGuy',
            title: 'RJ The Bike Guy — practical repair tutorials',
            channel: 'RJ The Bike Guy',
            duration: 'variable',
            featured: false,
            why: 'RJ repairs used bicycles from curbside finds. His tutorials on common problems — worn cassettes, frozen cables, broken spokes — are the most useful home-mechanic content for older bikes.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@BerkshireCycling',
            title: 'Seth\'s Bike Hacks — mountain bike maintenance',
            channel: 'Seth\'s Bike Hacks',
            duration: 'variable',
            featured: false,
            why: 'Seth Alvo\'s long-running MTB channel has a deep catalogue of home-mechanic content for the mountain-bike rider.',
          },
        ],
        books: [
          {
            title: 'Zinn & the Art of Road Bike Maintenance',
            author: 'Lennard Zinn',
            year: 1998,
            url: 'https://velopress.com/zinn-the-art-of-road-bike-maintenance-6th-edition/',
            why: 'The standard American road-bike repair manual. Now in its sixth edition. Every well-stocked home shop has it on the bench.',
          },
          {
            title: 'Zinn & the Art of Mountain Bike Maintenance',
            author: 'Lennard Zinn',
            year: 1996,
            url: 'https://velopress.com/zinn-the-art-of-mountain-bike-maintenance-6th-edition/',
            why: 'The mountain-bike companion. The single most complete print reference for home MTB repair.',
          },
          {
            title: 'Bicycling Science',
            author: 'David Gordon Wilson, Jim Papadopoulos',
            year: 1974,
            url: 'https://mitpress.mit.edu/9780262731546/bicycling-science/',
            why: 'The MIT Press academic reference on bicycle engineering. Why the bike works — drivetrain efficiency, tire rolling resistance, aerodynamics. Deep, technical, fascinating.',
          },
          {
            title: 'The Complete Book of Bicycling',
            author: 'Eugene A. Sloane',
            year: 1974,
            url: 'https://archive.org/details/completebookofbi00sloa',
            why: 'The 1970s American bicycle boom produced this encyclopedic reference. Still useful for framebuilding history, component overviews, and classic repair.',
          },
          {
            title: 'The Cyclist\'s Training Bible',
            author: 'Joe Friel',
            year: 2018,
            url: 'https://velopress.com/the-cyclists-training-bible-5th-edition/',
            why: 'Not a maintenance book, but the standard training reference paired with any serious cyclist\'s workbench reading.',
          },
        ],
        articles: [
          {
            title: 'Bicycle maintenance',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Bicycle#Maintenance',
            why: 'Survey reference with links to specific systems.',
            year: null,
          },
          {
            title: 'Sheldon Brown\'s bicycle technical pages',
            source: 'Sheldon Brown',
            url: 'https://www.sheldonbrown.com/home.html',
            why: 'Sheldon Brown, a legendary American bike mechanic who died in 2008, left behind the most comprehensive free technical site on bicycles. Still maintained; still indispensable.',
          },
          {
            title: 'Park Tool Blog',
            source: 'Park Tool',
            url: 'https://www.parktool.com/blog',
            why: 'Park Tool\'s written companion to the video channel. Clear, illustrated, exhaustive.',
          },
        ],
        courses: [
          {
            title: 'Park Tool School (free online curriculum)',
            provider: 'Park Tool',
            url: 'https://www.parktool.com/blog/repair-help',
            free: true,
            why: 'Park Tool\'s online school — videos organized into progressive lessons from basic to advanced. Free and comprehensive.',
          },
          {
            title: 'United Bicycle Institute (professional certification)',
            provider: 'United Bicycle Institute',
            url: 'https://bikeschool.com/',
            free: false,
            why: 'Ashland, Oregon\'s professional bike-mechanic school. Paid, intensive, the standard for anyone entering the trade.',
          },
        ],
        tools: [
          {
            title: 'Park Tool Home Mechanic Starter Kit (SK-3)',
            url: 'https://www.parktool.com/product/home-mechanic-starter-kit-sk-3',
            why: 'The standard small home-mechanic toolkit. Has every tool needed for the essential chain, brake, and tire work.',
          },
          {
            title: 'Feedback Sports Pro-Elite Repair Stand',
            url: 'https://www.feedbacksports.com/product/pro-elite-repair-stand/',
            why: 'The gold standard of home-use bicycle repair stands. Expensive, lasts decades, makes maintenance dramatically easier.',
          },
          {
            title: 'Topeak JoeBlow floor pump',
            url: 'https://www.topeak.com/global/en/product/200-joe-blow-sport-iii',
            why: 'The reference floor pump. Accurate pressure gauge, reliable head, lasts ten years.',
          },
        ],
        primarySources: [
          {
            title: 'Sheldon Brown\'s complete articles archive',
            url: 'https://www.sheldonbrown.com/articles.html',
            why: 'Sheldon Brown\'s original writings, preserved. A primary source in a way few other internet bike resources are.',
          },
        ],
      },

      seeAlso: ['riding', 'smallengine', 'running'],
      prereqs: [],
      leadsTo: ['riding'],

      chapterActivity: 'A monthly "bring your broken bike" workshop at Time\'s Up! in the East Village — volunteer mechanics help members diagnose problems and do the repair themselves on a real stand with real tools.',

      sources: [
        'https://en.wikipedia.org/wiki/Bicycle',
        'https://www.sheldonbrown.com/home.html',
      ],
      verifiedAt: '2026-04-23',
    },

    riding: {
      id: 'riding',
      name: 'Group Riding',
      level: 'Intermediate',
      dek: 'Pacelines and etiquette — the small shared language that turns a group of cyclists into a group ride.',
      readTime: '13 min',

      sections: ['Why groups exist', 'The paceline, simply', 'Calling hazards', 'The unwritten etiquette', 'Why the Saturday group ride is the heart of cycling'],
      body: [
        { type: 'lead', text: 'On the first Sunday of most weeks in most cycling-friendly American cities, a group of twenty or thirty cyclists gathers at a coffee shop at seven in the morning, rolls out on a prescribed forty-mile loop, and returns at ten. The ride has a name. The route is a decade old. The pace is fast enough that a new rider will get dropped if they can\'t hold the back wheel; slow enough that the regulars can talk. Somebody\'s job is sweeping up stragglers. Somebody\'s job is setting the tempo. The structure is informal, unspoken, and tightly observed. This is how most serious amateur cyclists got fast — by hanging on to Saturday rides until they did not get dropped anymore, and then sliding up the paceline.' },
        { type: 'h2', text: 'Why groups exist' },
        { type: 'p', text: 'Cycling in a group is faster and easier than cycling alone. The cyclist at the front punches a hole in the air; every cyclist behind sits in the draft and rides at about thirty percent less power for the same speed. A well-organized paceline of ten riders averages twenty-five miles an hour on flat ground while each individual rider would manage twenty-one on their own. This is not marginal; it is the single largest free speed gain in endurance sports. Professional teams in the Tour de France are built around it. Amateur groups on Saturday morning use exactly the same principle. A new rider\'s first fast ride is usually a revelation — you look down at the speedometer in disbelief at the speed you are sustaining, only to realize the pace is the group\'s, not yours.' },
        { type: 'h2', text: 'The paceline, simply' },
        { type: 'p', text: 'The basic paceline is a single file of riders rotating through the front. The lead rider takes the wind for a pull of a minute or two, then pulls off to one side, slows, and drifts to the back as the next rider takes the front. Over the course of an hour, every rider has done their fair share of work at the front. In a double paceline, two files of riders rotate in opposite directions — the left file advancing, the right file retreating — and the rotation is nearly continuous. The skill is holding a steady wheel: stay six to twelve inches from the wheel ahead, match pace smoothly, do not jerk the bike, do not half-wheel (riding a wheel\'s length ahead of your partner). It takes months of riding with more experienced cyclists to learn to hold a wheel confidently.' },
        { type: 'h2', text: 'Calling hazards' },
        { type: 'p', text: 'In a paceline, the cyclist ahead blocks the cyclist behind from seeing the road in front of them. The convention is to call out every hazard — "hole!", "glass!", "gravel!", "car back!", "car up!" — along with hand signals pointing to the hazard. Each rider passes the call back to the one behind, so a hole called at the front of a thirty-rider group is shouted a dozen times and pointed at by every rider before the last rider sees it. This is not optional. A missed call — a rider who sees a pothole and doesn\'t shout — can send the back of the group into a crash. Groups with cyclists who don\'t call are groups with cyclists who don\'t ride with each other twice.' },
        { type: 'h2', text: 'The unwritten etiquette' },
        { type: 'p', text: 'The etiquette of a group ride is learned by riding one. A new rider\'s job is to hang at the back, take no pulls, and stay invisible. After three or four rides, the new rider can sit deeper in the group and take short pulls. By ten rides, they know the regulars and can take a proper rotation. Certain things are sacrosanct. No sudden accelerations out of the paceline (called a "surge" and frowned on). No half-wheeling the rider next to you. No touching brakes hard — feather them or slow by sitting up in the wind. No passing the front rider on a designated no-drop ride. No dropping anyone on a designated no-drop ride. Cycling communities run almost entirely on trust and tradition. Break the rules and the regulars will stop riding with you.' },
        { type: 'h2', text: 'Why the Saturday group ride is the heart of cycling' },
        { type: 'p', text: 'Most amateur cyclists who have achieved real fitness did so riding with faster people. No training plan substitutes for being in a paceline with riders stronger than you, holding on week after week, getting dropped, coming back, and eventually not getting dropped. The ride structure has been nearly unchanged since the 1890s, when American and British clubs rolled out on the same routes they still use today. Walk into any cycling-heavy coffee shop at seven a.m. on a Saturday morning in Boulder, Portland, or Brooklyn and you will see the same scene. It is the heart of cycling as a community. No app has replicated it. No app will.' },
        { type: 'callout', text: 'Before your first group ride, find a no-drop ride on Ride with GPS or a local cycling-club calendar. Show up ten minutes early. Introduce yourself to the ride leader. Stay at the back for the whole ride — do not take pulls, do not surge. Call hazards. Thank the ride leader at the end. Return next Saturday. By the fourth or fifth week, you\'ll be part of the group, and the invisible curriculum of group riding will have begun.' },
      ],

      keyTerms: ['paceline', 'draft', 'pull', 'rotation', 'half-wheeling', 'echelon', 'drop', 'no-drop ride', 'wheel-sucker', 'hand signals', 'cornering', 'climbing out of the saddle'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@globalcyclingnetwork',
            title: 'Global Cycling Network (GCN) — group-riding etiquette',
            channel: 'Global Cycling Network',
            duration: 'variable',
            featured: true,
            why: 'GCN\'s group-riding tutorials are specific, well-filmed, and honest about the social conventions. The best free introduction to paceline work.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@dylanjawnson',
            title: 'Dylan Johnson — science-based amateur racing and training',
            channel: 'Dylan Johnson',
            duration: 'variable',
            featured: true,
            why: 'A current American elite cyclist with a rigorous, citations-first training channel. Excellent on the physiology of group riding.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@peakstocoast',
            title: 'PelotonUSA / major American race archives',
            channel: 'Peaks to Coast',
            duration: 'variable',
            featured: true,
            why: 'Race footage from American amateur and pro events. Study the paceline work of the lead groups; it is the same structure a Saturday group ride uses.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@LanterneRougeYT',
            title: 'Lanterne Rouge — pro racing analysis',
            channel: 'Lanterne Rouge',
            duration: 'variable',
            featured: false,
            why: 'Benji Naesen\'s tactical analyses of Tour, Giro, and Vuelta stages. Useful for understanding what pros do in pacelines at the highest level.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TheVeganCyclist',
            title: 'The Vegan Cyclist — California group-ride culture',
            channel: 'Vegan Cyclist',
            duration: 'variable',
            featured: false,
            why: 'Tyler Pearce documents his weekly group rides in Los Angeles. A vivid portrait of what American Saturday-morning ride culture actually looks like.',
          },
        ],
        books: [
          {
            title: 'The Cyclist\'s Training Bible',
            author: 'Joe Friel',
            year: 2018,
            url: 'https://velopress.com/the-cyclists-training-bible-5th-edition/',
            why: 'The standard American training reference, now in its fifth edition. Covers group riding as part of a structured plan.',
          },
          {
            title: 'Racing Tactics for Cyclists',
            author: 'Thomas Prehn',
            year: 2005,
            url: 'https://velopress.com/racing-tactics-for-cyclists/',
            why: 'The tactical textbook for amateur racers, but useful for anyone who wants to understand how groups behave under stress.',
          },
          {
            title: 'Need for the Bike',
            author: 'Paul Fournel',
            year: 2003,
            url: 'https://www.worldcat.org/title/need-for-the-bike/oclc/51306928',
            why: 'The French writer and Oulipo member\'s short essays on cycling life. The best literary book on what riding feels like, group rides included.',
          },
          {
            title: 'The Rider',
            author: 'Tim Krabbé',
            year: 1978,
            url: 'https://www.bloomsbury.com/us/rider-9781582342900/',
            why: 'The cult novel by the Dutch amateur racer. Every professional cyclist has read it. Essential portrait of the inner experience of hard riding in a group.',
          },
          {
            title: 'Bicycling Science',
            author: 'David Gordon Wilson, Jim Papadopoulos',
            year: 1974,
            url: 'https://mitpress.mit.edu/9780262731546/bicycling-science/',
            why: 'The MIT Press technical reference, with chapters on drafting and aerodynamics that explain the physics of group riding.',
          },
        ],
        articles: [
          {
            title: 'Paceline',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Paceline',
            why: 'Reference article on paceline structure and the physics of drafting. Useful first read.',
            year: null,
          },
          {
            title: 'Peloton',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Peloton',
            why: 'Reference on the large-group riding formation used in professional cycling. The big-group version of the same paceline principles.',
            year: null,
          },
          {
            title: 'Cycling',
            source: 'Britannica',
            url: 'https://www.britannica.com/sports/cycling',
            why: 'Editorial survey of the sport and its subcultures. Useful framing for someone new to the amateur scene.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'League of American Bicyclists Smart Cycling',
            provider: 'League of American Bicyclists',
            url: 'https://bikeleague.org/ridesmart/',
            free: false,
            why: 'The nationwide bicycle-education program. Classes on traffic riding, group riding, and safe commuting, taught by certified instructors.',
          },
          {
            title: 'USA Cycling coaching education',
            provider: 'USA Cycling',
            url: 'https://usacycling.org/coaching',
            free: false,
            why: 'The American cycling governing body\'s structured coaching program. Useful framing for understanding the sport\'s formal pedagogy.',
          },
        ],
        tools: [
          {
            title: 'Ride with GPS',
            url: 'https://ridewithgps.com/',
            why: 'The standard route-planning and GPS-tracking tool for North American cyclists. Most group rides publish their routes on Ride with GPS.',
          },
          {
            title: 'Strava',
            url: 'https://www.strava.com/',
            why: 'The global training log and social network. Segments, group rides, and the informal accountability structure of the modern cyclist.',
          },
          {
            title: 'TrainerRoad / Zwift',
            url: 'https://www.trainerroad.com/',
            why: 'Indoor structured-training platforms. Essential for winter training and structured interval work that makes group rides possible on Saturday.',
          },
        ],
        primarySources: [
          {
            title: 'Tour de France 2023 — Stage 20 (final time trial)',
            url: 'https://en.wikipedia.org/wiki/2023_Tour_de_France',
            why: 'The final stages of any recent Tour are case studies in paceline work. Study the team rides; they are Saturday morning at full volume.',
          },
        ],
      },

      seeAlso: ['maintenance', 'running'],
      prereqs: ['maintenance'],
      leadsTo: [],

      chapterActivity: 'A Saturday-morning "no-drop" group ride meeting at the Hungarian Pastry Shop near Columbia — twenty miles along the Hudson up to the George Washington Bridge and back, ride leader at the back to collect everyone, coffee at the end.',

      sources: [
        'https://en.wikipedia.org/wiki/Paceline',
        'https://en.wikipedia.org/wiki/Peloton',
        'https://www.britannica.com/sports/cycling',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
