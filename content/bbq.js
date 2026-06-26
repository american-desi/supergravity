// content/bbq.js
// Batch: B09-kitchen-arts
// Last updated: 2026-04-23 by BATCH B09-kitchen-arts
//
// Topics this subject must cover (from data.js):
//   Core: smoke, styles

window.CONTENT = window.CONTENT || {};
window.CONTENT.bbq = {
  subjectId: 'bbq',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B09-kitchen-arts',
  topics: {

    smoke: {
      id: 'smoke',
      name: 'The Smoke',
      level: 'Intermediate',
      dek: 'Low heat, fragrant wood, fifteen hours of patience — and a forty-pound brisket turns into the most uncompromising piece of cooking in America.',
      readTime: '13 min',

      sections: ['Why smoke is a seasoning', 'The 225 target', 'Choice of wood', 'The stall, and why to trust it', 'The pitmaster\'s patience'],
      body: [
        { type: 'lead', text: 'At four in the morning in Austin, Texas, outside a plain cinderblock building on East 11th Street, Aaron Franklin loads a live oak fire into his offset smoker and slides a row of trimmed brisket over the heat. By eleven, when the doors open, he has been tending the fire for seven hours; by three, when the pit empties out, he has been tending it for eleven. A Franklin brisket costs thirty-five dollars a pound and sells out most afternoons. What the customers are paying for is the wood, the weather, and the attention of the pitmaster who has not sat down since dawn.' },
        { type: 'h2', text: 'Why smoke is a seasoning' },
        { type: 'p', text: 'Wood smoke is a complex aerosol of phenols, carbonyls, and particulates that settles onto meat and dissolves into the surface fat. Hundreds of individually identifiable aroma molecules contribute to what we call smokiness — guaiacol for bacon-like depth, syringol for clove, eugenol for warmth. Smoke is not a cooking method in itself; barbecue cooks by indirect radiant heat. Smoke is a seasoning, applied over many hours. The reason a brisket takes twelve hours to smoke, and not four, is partly tenderness — and partly that a short smoke is not smoky enough.' },
        { type: 'h2', text: 'The 225 target' },
        { type: 'p', text: 'American barbecue runs low: 107°C (225°F) is the classic target, sometimes a little hotter, rarely cooler. At this temperature the fat in a brisket or pork shoulder has time to render; the connective tissue has time to dissolve from collagen into gelatin; and the surface has time to form the dark, peppery crust the trade calls bark. A brisket cooked at 350°F comes out chewy and underdeveloped; one cooked at 200°F stalls for half a day. 225°F is the sweet spot, empirically validated across half a century of pitmasters.' },
        { type: 'h2', text: 'Choice of wood' },
        { type: 'p', text: 'Each traditional American barbecue wood has a signature. Oak, the Texan default, is mild and versatile. Hickory, a Southern staple, is bolder, with a bacon-like edge. Mesquite, the South Texas and ranch standard, is sharply aromatic and works for shorter cooks; it gets bitter over twelve hours. Pecan splits the difference between hickory and oak. Cherry and apple are milder, sweet-edged, and the canonical pairing for pork and poultry. A pit full of fruitwood smells like a bakery; a pit full of mesquite smells like the American West.' },
        { type: 'h2', text: 'The stall, and why to trust it' },
        { type: 'p', text: 'At around 65°C internal temperature, a brisket stops cooking. The thermometer hangs at 150–160°F for hours, sometimes five hours, and new pitmasters panic. What is happening is evaporative cooling: the meat is sweating, and the phase change from liquid to vapor pulls as much heat off the surface as the smoker is adding. The stall is not a problem. It is the reason the interior has time to become tender. Many pitmasters speed through the stall by wrapping the meat in butcher paper at around 155°F — a technique sometimes called the Texas Crutch. Purists disapprove. The stall comes in its own time, wrapped or not.' },
        { type: 'h2', text: 'The pitmaster\'s patience' },
        { type: 'p', text: 'The single most important skill a pitmaster develops is reading the fire. An offset smoker is a mechanical machine with two chimneys, a firebox, and a cooking chamber, but the fire inside it is a living thing — it breathes with the weather, the wind, the humidity. A good pitmaster reads the smoke color (blue-white is right, white-white is too wet, black is dirty) and adjusts the intake damper every few minutes. Fourteen hours of this is, to someone who has never done it, an unreasonable amount of attention. To a Texan who grew up around it, it is how a weekend is spent.' },
        { type: 'callout', text: 'The smoke ring — a half-centimeter pink band just below the bark — is the chemical signature of nitric oxide binding to myoglobin in the outer surface of the meat. It has nothing to do with flavor, but pitmasters love it, and judging competitions score it.' },
      ],

      keyTerms: ['225°F', 'bark', 'smoke ring', 'stall', 'offset smoker', 'Texas Crutch', 'indirect heat', 'collagen', 'rendering', 'pitmaster'],

      resources: {
        videos: [
          {
            id: null,
            source: 'other',
            url: 'https://www.pbs.org/show/bbq-with-franklin/',
            title: 'BBQ with Franklin (PBS series)',
            channel: 'PBS / Austin PBS',
            duration: 'variable',
            featured: true,
            why: 'Aaron Franklin\'s PBS series — the canonical modern brisket education. Each episode is a patient master class filmed at his Austin smoker.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@MeatChurchBBQ',
            title: 'Meat Church BBQ — full channel',
            channel: 'Meat Church BBQ',
            duration: 'variable',
            featured: true,
            why: 'Matt Pittman\'s working-Texas-pitmaster channel is the most-watched American barbecue channel on YouTube. Brisket, ribs, pork butt — all filmed at his backyard rig.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@MadScientistBBQ',
            title: 'Mad Scientist BBQ — Jeremy Yoder',
            channel: 'Mad Scientist BBQ',
            duration: 'variable',
            featured: true,
            why: 'Yoder\'s analytical channel runs controlled smoker experiments — wood comparisons, wrap versus no-wrap, rub science. The data-first counterpoint to the Texas tradition videos.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@FranklinBarbecue',
            title: 'Franklin Barbecue — official channel',
            channel: 'Franklin Barbecue',
            duration: 'variable',
            featured: false,
            why: 'Aaron Franklin\'s own channel — shorter-form, focused on pit technique and restaurant operations. A working pitmaster\'s daily log.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@malcomreed',
            title: 'HowToBBQRight — Malcom Reed',
            channel: 'Malcom Reed',
            duration: 'variable',
            featured: false,
            why: 'A Memphis-in-May competition pitmaster running a backyard-and-comp channel. His pork-shoulder and rib techniques are the Memphis-style reference on YouTube.',
          },
        ],
        books: [
          {
            title: 'Franklin Barbecue: A Meat-Smoking Manifesto',
            author: 'Aaron Franklin, Jordan Mackay',
            year: 2015,
            url: 'https://franklinbbq.com/book/',
            why: 'The canonical modern reference. Franklin\'s Central Texas method, explained step-by-step with photographs, by the pitmaster who rebuilt American interest in brisket.',
          },
          {
            title: 'Meathead: The Science of Great Barbecue and Grilling',
            author: 'Meathead Goldwyn',
            year: 2016,
            url: 'https://amazingribs.com/mhsciencebook',
            why: 'The science book. Goldwyn runs AmazingRibs.com, the reference site for anyone who wants to know why low-and-slow works. Uncompromising on myths.',
          },
          {
            title: 'Smokestack Lightning: Adventures in the Heart of Barbecue Country',
            author: 'Lolis Eric Elie',
            year: 1996,
            url: 'https://www.amazon.com/Smokestack-Lightning-Adventures-Heart-Barbecue/dp/1580085709',
            why: 'The cultural history. Elie\'s road-trip through the American South, interviewing pitmasters in their shops. The best piece of barbecue journalism in book form.',
          },
          {
            title: 'Project Smoke',
            author: 'Steven Raichlen',
            year: 2016,
            url: 'https://www.workman.com/products/project-smoke',
            why: 'Raichlen is the author of the long-running Barbecue Bible and host of Project Smoke. The book is method-first, covering hot-smoked and cold-smoked techniques across world traditions.',
          },
          {
            title: 'On Food and Cooking',
            author: 'Harold McGee',
            year: 1984,
            url: 'https://en.wikipedia.org/wiki/On_Food_and_Cooking',
            why: 'McGee on smoke and low-heat cooking explains the chemistry — phenols, guaiacol, syringol — that every pitmaster can taste but few can name.',
          },
        ],
        articles: [
          {
            title: 'Barbecue',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Barbecue',
            why: 'The global overview — Spanish barbacoa origins, American regional traditions, South African braai, Central Asian shashlik. Well-cited.',
            year: null,
          },
          {
            title: 'Smoking (cooking)',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Smoking_(cooking)',
            why: 'The technique article — hot and cold smoking, wood chemistry, and food-safety considerations for both.',
            year: null,
          },
          {
            title: 'AmazingRibs.com — The Science',
            source: 'AmazingRibs',
            url: 'https://amazingribs.com/more-technique-and-science/more-cooking-science/',
            why: 'Meathead Goldwyn\'s open-access science library. Every wrap, every rub, every myth, tested and explained.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Aaron Franklin Teaches Texas-Style BBQ',
            provider: 'MasterClass',
            url: 'https://www.masterclass.com/classes/aaron-franklin-teaches-texas-style-bbq',
            free: false,
            why: 'Franklin\'s MasterClass — sixteen lessons filmed at his Austin pit. Paid, but many libraries offer free access.',
          },
          {
            title: 'Kansas City Barbecue Society — certified judge program',
            provider: 'Kansas City Barbecue Society',
            url: 'https://www.kcbs.us/certified-bbq-judge',
            free: false,
            why: 'The KCBS judging curriculum is a structured education in evaluating competition barbecue — appearance, taste, tenderness. Useful even for cooks who never plan to judge.',
          },
        ],
        tools: [
          {
            title: 'An offset smoker or a kettle grill with a two-zone fire',
            url: 'https://en.wikipedia.org/wiki/Smoking_(cooking)',
            why: 'A true offset smoker (Oklahoma Joe, Lang, Yoder) is the Texas standard. A Weber kettle with charcoal banked on one side is the beginner\'s rig — and it genuinely works.',
          },
          {
            title: 'Two digital probe thermometers',
            url: 'https://en.wikipedia.org/wiki/Meat_thermometer',
            why: 'One for the pit, one for the meat. A Thermoworks Signals or a Fireboard runs both at once, with alarms. Cooking by time alone is the most common first-smoker mistake.',
          },
          {
            title: 'Hardwood lump charcoal and seasoned wood splits',
            url: 'https://en.wikipedia.org/wiki/Charcoal',
            why: 'Briquettes contain binders that affect flavor. Lump charcoal is just wood burned to carbon. A box of well-seasoned oak splits for the fire is the other half of the equation.',
          },
        ],
      },

      seeAlso: ['styles', 'primals', 'heat_transfer', 'seasoning'],
      prereqs: ['heat_transfer', 'seasoning'],
      leadsTo: ['styles'],

      chapterActivity: 'A quarterly "overnight smoke" at a Red Hook fire pit — a fourteen-pound brisket on an offset, five bartenders and a butcher trading the fire in three-hour shifts.',

      sources: [
        'https://en.wikipedia.org/wiki/Barbecue',
        'https://en.wikipedia.org/wiki/Smoking_(cooking)',
        'https://amazingribs.com/',
        'https://franklinbbq.com/',
      ],
      verifiedAt: '2026-04-23',
    },

    styles: {
      id: 'styles',
      name: 'Regional Styles',
      level: 'Beginner',
      dek: 'Four American regions, four different answers to the same question — what makes meat, smoke, and sauce taste right?',
      readTime: '12 min',

      sections: ['Texas: beef and salt and pepper', 'The Carolinas: whole hog, vinegar, and mustard', 'Memphis: ribs, wet and dry', 'Kansas City: the sauce state', 'Why the regions stayed regional'],
      body: [
        { type: 'lead', text: 'In 1908, a Black barber named Henry Perry set up a trolley-barn smoker in the 18th and Vine neighborhood of Kansas City and started selling smoked meat wrapped in newspaper. By the 1920s Perry had two restaurants and the young man who would later become Arthur Bryant working his pits. Perry died in 1940; Bryant opened his own place in 1946; Gates and Sons opened across town in 1946; and the Kansas City sauce — thick, sweet, tomato-and-molasses — crystallized into the style we know now. This is how every American barbecue region got built: a founding pitmaster, a cluster of descendants, and a century of local pride.' },
        { type: 'h2', text: 'Texas: beef and salt and pepper' },
        { type: 'p', text: 'Central Texas barbecue is the most austere in the country. Beef brisket, rubbed with nothing but salt and coarse black pepper, smoked over oak for twelve or more hours, served sliced on butcher paper with sliced white bread, raw onion, and pickled jalapeño. No sauce. The tradition grew out of Czech and German meat markets in towns like Lockhart, Taylor, and Elgin, where immigrants smoked leftover meat to sell at the end of the day. Kreuz Market in Lockhart, Black\'s in Lockhart, Louie Mueller in Taylor — the Texas quartet is a pilgrimage. Franklin Barbecue in Austin is the modern showpiece.' },
        { type: 'h2', text: 'The Carolinas: whole hog, vinegar, and mustard' },
        { type: 'p', text: 'North Carolina barbecue is pork. In the east, it is the whole hog, pulled and chopped and dressed in a vinegar-and-red-pepper mop — no tomato, no sweetness, a bright and aggressive sauce that cuts the pork\'s richness. In the west (Lexington-style), it is pork shoulder, with a slightly tomato-tinged vinegar dip. South Carolina is split into four sauce regions, the strangest of which is the mustard-based gold running through the state\'s middle — a Carolina inheritance from German settlers. A Carolinan traveling to Kansas City tastes their sauce as syrup. A Kansas Citian in Carolina tastes theirs as water. Both are at home in their own valley.' },
        { type: 'h2', text: 'Memphis: ribs, wet and dry' },
        { type: 'p', text: 'Memphis is pork ribs, and the city is divided on the sauce question. Wet ribs are glazed in a tomato-molasses sauce during the cook; dry ribs are coated in a spice rub and served without sauce. Both have their icons — Rendezvous, in its alley across from the Peabody Hotel, dries; Corky\'s wets. The Memphis in May World Championship Barbecue Cooking Contest, held every May, is the world\'s largest pork-only barbecue competition, with several hundred teams cooking through a long Memphis weekend. The ribs are the argument. The city is the stage.' },
        { type: 'h2', text: 'Kansas City: the sauce state' },
        { type: 'p', text: 'Kansas City does it all — beef, pork, poultry, sausage, and famously burnt ends, the crisp corner pieces of a brisket point that were once thrown away and now command a premium. The style\'s signature is the sauce: thick, sweet, and tomato-molasses-based, applied after the smoke. The American Royal competition each fall is the largest barbecue competition in the world, drawing hundreds of teams. KC Masterpiece, invented by a local dentist in the 1970s and now a national brand, is the Kansas City sauce\'s commercial export. Gates, Bryant\'s, Jack Stack, Joe\'s — the Kansas City quartet runs wide.' },
        { type: 'h2', text: 'Why the regions stayed regional' },
        { type: 'p', text: 'American barbecue is one of the last regional American cuisines. The styles formed before rail and persisted because the traditions lived inside families and restaurants rather than cookbooks. A Texan who moves to North Carolina often discovers, for the first time, that the word barbecue does not mean beef. A Carolinian who moves to Kansas City often finds their first bite of burnt ends revelatory. Each region is deeply committed to being right. Each region, on its own terms, is.' },
        { type: 'callout', text: 'Alabama\'s white sauce — mayonnaise, vinegar, black pepper, lemon — is the country\'s most underrated regional barbecue sauce, invented by Big Bob Gibson\'s in Decatur in 1925 and applied to smoked chicken. Northerners discovering it rarely go back to red sauce on a bird.' },
      ],

      keyTerms: ['Central Texas', 'Lockhart', 'eastern North Carolina', 'Lexington-style', 'mustard-based', 'burnt ends', 'Memphis in May', 'American Royal', 'whole hog', 'Alabama white'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@MeatChurchBBQ',
            title: 'Meat Church BBQ — regional recipe series',
            channel: 'Meat Church BBQ',
            duration: 'variable',
            featured: true,
            why: 'Matt Pittman\'s regional tour — Central Texas brisket, Memphis ribs, Kansas City burnt ends, Carolina pulled pork — each with technique notes and regional context.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.netflix.com/title/80176842',
            title: 'Chef\'s Table: BBQ',
            channel: 'Netflix',
            duration: '4 × 40:00',
            featured: true,
            why: 'David Gelb\'s four-episode series profiling Tootsie Tomanetz (Texas), Rodney Scott (South Carolina), Rosalia Chay Chuc (Yucatán), and Lennox Hastie (Australia). The best popular introduction to regional barbecue philosophy.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@malcomreed',
            title: 'HowToBBQRight — Malcom Reed (Memphis)',
            channel: 'Malcom Reed',
            duration: 'variable',
            featured: true,
            why: 'A Memphis competition cook — his rib, shoulder, and hot link recipes are the Memphis reference on the internet.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@MadScientistBBQ',
            title: 'Mad Scientist BBQ — Jeremy Yoder',
            channel: 'Mad Scientist BBQ',
            duration: 'variable',
            featured: false,
            why: 'Yoder\'s regional comparison tests — brisket technique by region, sauce ingredients tested against heat. Rigorous where the tradition videos are instinctive.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@FranklinBarbecue',
            title: 'Franklin Barbecue — Central Texas reference',
            channel: 'Franklin Barbecue',
            duration: 'variable',
            featured: false,
            why: 'Aaron Franklin\'s channel is the single clearest window into the Central Texas philosophy: the grain, the pepper, the long oak fire.',
          },
        ],
        books: [
          {
            title: 'Smokestack Lightning: Adventures in the Heart of Barbecue Country',
            author: 'Lolis Eric Elie',
            year: 1996,
            url: 'https://www.amazon.com/Smokestack-Lightning-Adventures-Heart-Barbecue/dp/1580085709',
            why: 'The cultural history. Elie drove the South interviewing the pitmasters who had just spent forty years at a smoker. The best journalism on the subject.',
          },
          {
            title: 'The Barbecue! Bible',
            author: 'Steven Raichlen',
            year: 1998,
            url: 'https://www.workman.com/products/the-barbecue-bible-10th-anniversary',
            why: 'Five hundred recipes, a global scope, a clear regional structure. The first book most American home cooks own on the subject.',
          },
          {
            title: 'Republic of Barbecue: Stories Beyond the Brisket',
            author: 'Elizabeth Engelhardt (ed.)',
            year: 2009,
            url: 'https://utpress.utexas.edu/books/englhardt-republic-barbecue',
            why: 'An oral-history project from the University of Texas at Austin — thirty-one Texas pitmasters in their own words. A deeply local document.',
          },
          {
            title: 'Franklin Barbecue: A Meat-Smoking Manifesto',
            author: 'Aaron Franklin, Jordan Mackay',
            year: 2015,
            url: 'https://franklinbbq.com/book/',
            why: 'The modern Central Texas reference — philosophy, technique, and the fire itself. Every brisket cook in America owns this book.',
          },
          {
            title: 'Meathead: The Science of Great Barbecue and Grilling',
            author: 'Meathead Goldwyn',
            year: 2016,
            url: 'https://amazingribs.com/mhsciencebook',
            why: 'The science of why each region works. Goldwyn is opinionated and empirical; his regional chapters are the crossover between tradition and testing.',
          },
        ],
        articles: [
          {
            title: 'Barbecue in the United States',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Barbecue_in_the_United_States',
            why: 'The national overview and a map of the regional styles. Good first read.',
            year: null,
          },
          {
            title: 'Barbecue in Texas',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Texas_barbecue',
            why: 'The four Texas subregions with pitmasters, towns, and history — from the Czech meat markets forward.',
            year: null,
          },
          {
            title: 'Kansas City–style barbecue',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Kansas_City-style_barbecue',
            why: 'Henry Perry\'s lineage, the major restaurants, and the sauce origin.',
            year: null,
          },
          {
            title: 'Memphis-style barbecue',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Memphis-style_barbecue',
            why: 'The dry-versus-wet argument, the World Championship festival, and the pit history along Beale Street.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Aaron Franklin Teaches Texas-Style BBQ',
            provider: 'MasterClass',
            url: 'https://www.masterclass.com/classes/aaron-franklin-teaches-texas-style-bbq',
            free: false,
            why: 'Franklin\'s paid course — sixteen lessons, Central Texas discipline. Many public libraries offer it free through their MasterClass licensing.',
          },
          {
            title: 'Southern Foodways Alliance — oral histories',
            provider: 'University of Mississippi',
            url: 'https://www.southernfoodways.org/oral-history/',
            free: true,
            why: 'The SFA\'s free online archive of pitmaster interviews — transcripts, audio, and photographs from across the American South. The scholarly regional reference.',
          },
        ],
        tools: [
          {
            title: 'A regional sauce shelf',
            url: 'https://en.wikipedia.org/wiki/Barbecue_sauce',
            why: 'Four bottles — an eastern Carolina vinegar, a Memphis tomato, a Kansas City molasses-sweet, an Alabama white — make a side-by-side tasting that explains the regions faster than any book.',
          },
          {
            title: 'A kettle grill',
            url: 'https://en.wikipedia.org/wiki/Weber-Stephen_Products',
            why: 'The Weber kettle is the universal American backyard smoker. With a charcoal snake setup, it can cook any regional style adequately — and every home cook learns the fundamentals on one.',
          },
        ],
      },

      seeAlso: ['smoke', 'primals', 'seasoning', 'classics'],
      prereqs: ['smoke'],
      leadsTo: [],

      chapterActivity: 'A "four regions, one afternoon" tasting at a Gowanus backyard — brisket, ribs, pulled pork, and burnt ends, each paired with the canonical regional sauce, and a map on the fence.',

      sources: [
        'https://en.wikipedia.org/wiki/Barbecue_in_the_United_States',
        'https://en.wikipedia.org/wiki/Texas_barbecue',
        'https://en.wikipedia.org/wiki/Kansas_City-style_barbecue',
        'https://en.wikipedia.org/wiki/Memphis-style_barbecue',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
