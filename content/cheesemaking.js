// content/cheesemaking.js
// Batch: B09-kitchen-arts
// Last updated: 2026-04-23 by BATCH B09-kitchen-arts
//
// Topics this subject must cover (from data.js):
//   Core: fresh_cheese, aged

window.CONTENT = window.CONTENT || {};
window.CONTENT.cheesemaking = {
  subjectId: 'cheesemaking',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B09-kitchen-arts',
  topics: {

    fresh_cheese: {
      id: 'fresh_cheese',
      name: 'Fresh Cheeses',
      level: 'Beginner',
      dek: 'An afternoon, a gallon of milk, a splash of acid, and the oldest transformation in dairy — the cheese you can actually make at home.',
      readTime: '11 min',

      sections: ['A gallon of milk, a splash of acid', 'The three families', 'Ricotta, paneer, and the quickest cheeses', 'Mozzarella, the stretched curd', 'Why the fresh cheeses are the honest ones'],
      body: [
        { type: 'lead', text: 'An Arab traveler named ibn Battuta, riding across fourteenth-century India, wrote admiringly of a white cheese served pressed into cakes and cut with a knife. The cheese he was describing, paneer, had been made on the subcontinent at least since the Mughals arrived, and probably much longer. It is curdled with lemon juice and needs no aging. A home cook can produce the same cheese in about forty minutes, with milk from a carton and juice from a grocery-store lemon. Fresh cheese is the starting point of dairy. It is also, unexpectedly, the easiest thing in this entire atlas to make yourself.' },
        { type: 'h2', text: 'A gallon of milk, a splash of acid' },
        { type: 'p', text: 'Milk is a suspension of fat, water, and protein. Casein, the dominant milk protein, holds itself in solution only at a near-neutral pH. Drop the pH — with lemon juice, vinegar, or the acid produced by lactic bacteria — and the casein molecules crash out of suspension into soft, springy curds. Heat the milk first and the curd is firmer. Add salt and it tastes like cheese. This is effectively the whole technique. Everything else in cheesemaking is variation.' },
        { type: 'h2', text: 'The three families' },
        { type: 'p', text: 'Acid-set cheeses — ricotta, paneer, queso fresco — use citric or acetic acid and set in minutes. Rennet-set cheeses — mozzarella, feta, most firm cheeses — use the enzyme chymosin, traditionally extracted from the stomach lining of a nursing calf, now usually produced by genetically modified yeast. Culture-set cheeses — yogurt, cultured cream, crème fraîche, cottage cheese — use live lactic bacteria to drop the pH gradually. A home cook can make one cheese from each family with a single shopping trip.' },
        { type: 'h2', text: 'Ricotta, paneer, and the quickest cheeses' },
        { type: 'p', text: 'Ricotta, in the industrial version, is remade from whey — a thrifty second pressing, literally re-cooked (ri-cotta). The home version is simpler: whole milk heated to a near-boil, a tablespoon of lemon juice stirred in, five minutes of rest, and a strain through cheesecloth. Fifteen minutes from start to finish. Paneer is the same idea with the curd pressed under a weight for an hour. Queso fresco is the same again, salted and crumbled. Each is a canonical cheese of a great cuisine. Each costs three dollars to make at home and produces a pound.' },
        { type: 'h2', text: 'Mozzarella, the stretched curd' },
        { type: 'p', text: 'Mozzarella is where the first rennet-set technique begins. Warm milk, citric acid, a tiny dose of rennet, a twenty-minute wait for the curd to set, a cut, a second gentle heat. The curds are strained and then — the defining step — plunged into hot water, kneaded, and stretched until they run like smooth taffy. The Italians call the family pasta filata, stretched curd. A first mozzarella is an hour\'s work and a revelation; the factory mozzarella in a supermarket bag is a different food from the fresh one you pull yourself.' },
        { type: 'h2', text: 'Why the fresh cheeses are the honest ones' },
        { type: 'p', text: 'A fresh cheese cannot hide. It is the milk, the acid, the salt, and the hand of the person who made it. No aging mellows a mistake. No rind disguises an off-flavor. The great industrial cheeses — cheddar, Comté, Roquefort — earn their glamour by surviving years. The fresh cheeses earn theirs by being honest about what they are. A good home cheese comes from good milk. A bad home cheese is improved by no amount of patience. This is also the reason every cheesemaking tradition in the world begins with the fresh cheeses, and why a cook who learns those three recipes has a working model of everything that comes next.' },
        { type: 'callout', text: 'Ultra-pasteurized milk will not set into cheese. The high heat denatures the casein proteins. Buy whole milk pasteurized at 72°C for fifteen seconds (HTST) — every supermarket sells it; the label reads "pasteurized," not "ultra-pasteurized" or "UHT".' },
      ],

      keyTerms: ['casein', 'whey', 'curd', 'rennet', 'chymosin', 'citric acid', 'pasta filata', 'acid-set cheese', 'culture'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@foodwishes',
            title: 'Chef John — fresh-mozzarella and ricotta episodes',
            channel: 'Food Wishes',
            duration: 'variable',
            featured: true,
            why: 'Chef John\'s ten-minute ricotta and mozzarella recipes are the lowest-intimidation entry to cheesemaking on YouTube. Voice-over calm, first-person, patient.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@JKenjiLopezAlt',
            title: 'Kenji López-Alt — ricotta, paneer, fresh cheese',
            channel: 'J. Kenji López-Alt',
            duration: 'variable',
            featured: true,
            why: 'Kenji\'s home-kitchen paneer and ricotta videos include the full why-it-works chemistry alongside the technique. His case for weighing milk by gram is persuasive.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@GavinWebber',
            title: 'Gavin Webber — Little Green Cheese',
            channel: 'Gavin Webber',
            duration: 'variable',
            featured: true,
            why: 'The Australian home cheesemaker\'s free YouTube series is the single most comprehensive home cheesemaking channel. Start with his fresh-cheese playlist.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@MaangchiNet',
            title: 'Maangchi — Korean homemade tofu and cheese techniques',
            channel: 'Maangchi',
            duration: 'variable',
            featured: false,
            why: 'Tofu and fresh-cheese techniques are cognates — the same acid-set-and-press method. Maangchi\'s dubu is a quietly illuminating parallel to paneer.',
          },
        ],
        books: [
          {
            title: 'Home Cheese Making',
            author: 'Ricki Carroll',
            year: 1982,
            url: 'https://cheesemaking.com/products/home-cheese-making',
            why: 'The standard American home-cheesemaking book. Carroll founded the New England Cheesemaking Supply Company in 1978 and the book, now in its fourth edition, has taught three generations of Americans the craft.',
          },
          {
            title: 'Mastering Artisan Cheesemaking',
            author: 'Gianaclis Caldwell',
            year: 2012,
            url: 'https://www.chelseagreen.com/product/mastering-artisan-cheesemaking/',
            why: 'A working goat dairy\'s owner, who teaches at the American Cheese Society. The clearest modern reference for the technical side of the craft.',
          },
          {
            title: 'On Food and Cooking',
            author: 'Harold McGee',
            year: 1984,
            url: 'https://en.wikipedia.org/wiki/On_Food_and_Cooking',
            why: 'McGee on dairy is the canonical popular-science reference. His pages on casein aggregation, curd formation, and the chemistry of rennet explain why the home recipes work.',
          },
          {
            title: 'Di Bruno Bros. House of Cheese',
            author: 'Tenaya Darlington',
            year: 2013,
            url: 'https://www.running-press.com/titles/tenaya-darlington/di-bruno-bros-house-of-cheese/9780762451036/',
            why: 'A cheesemonger\'s reference to what you taste, rather than what you make. The companion to the how-to books — "how do I know what I\'m eating" is the other half of the craft.',
          },
        ],
        articles: [
          {
            title: 'Cheesemaking',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Cheesemaking',
            why: 'Good overview of the three cheesemaking families — acid-set, rennet-set, culture-set — with pointers to the classical European traditions.',
            year: null,
          },
          {
            title: 'Rennet',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Rennet',
            why: 'The enzyme, its animal and microbial sources, and the near-total industrial transition to genetically produced chymosin. Essential context for the rennet-set cheeses.',
            year: null,
          },
          {
            title: 'Cheese (Wikipedia)',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Cheese',
            why: 'Cross-cultural survey, with national and regional traditions. Pair with Cheesemaking for the full picture.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'The Cheesemaking 101 Series (free)',
            provider: 'New England Cheesemaking Supply',
            url: 'https://cheesemaking.com/pages/cheesemaking-recipes',
            free: true,
            why: 'Ricki Carroll\'s free online recipe library covers fifty fresh and aged cheeses, each in a structured recipe-plus-why format. Uses her own supply kits but is readable on its own.',
          },
        ],
        tools: [
          {
            title: 'Cheesecloth (butter muslin)',
            url: 'https://en.wikipedia.org/wiki/Cheesecloth',
            why: 'Fine-weave butter muslin strains curds without letting the small ones escape. Grade-90 cheesecloth is the American home standard.',
          },
          {
            title: 'A digital thermometer',
            url: 'https://en.wikipedia.org/wiki/Thermometer',
            why: 'Milk chemistry is temperature-sensitive within a few degrees. A Thermapen or Thermoworks Dot is overkill — a ten-dollar instant-read is plenty.',
          },
          {
            title: 'Rennet tablets or liquid rennet',
            url: 'https://en.wikipedia.org/wiki/Rennet',
            why: 'A single Junket tablet, crushed and dissolved, sets a gallon of milk. A small bottle of liquid rennet sets a hundred. Either is six dollars.',
          },
        ],
      },

      seeAlso: ['aged', 'lacto', 'bread', 'vinegar'],
      prereqs: [],
      leadsTo: ['aged'],

      chapterActivity: 'A Sunday "pull your own mozzarella" hour at a Carroll Gardens dairy shop — the owner brings the curd, the members bring the gloves, everyone leaves with a ball.',

      sources: [
        'https://en.wikipedia.org/wiki/Cheesemaking',
        'https://en.wikipedia.org/wiki/Rennet',
        'https://cheesemaking.com/',
      ],
      verifiedAt: '2026-04-23',
    },

    aged: {
      id: 'aged',
      name: 'Aged Cheeses',
      level: 'Advanced',
      dek: 'What happens to a cheese when you leave it alone in a cold, damp room for two years — and why the best of them are the only foods that taste like a place.',
      readTime: '13 min',

      sections: ['The cave', 'The affinage', 'The three great aged families', 'Terroir, in cheese', 'A home cellar, realistically'],
      body: [
        { type: 'lead', text: 'In the Jura mountains of eastern France, a cheese cooperative called a fruitière collects milk from the dairy farmers of a valley each morning, combines it into a single two-hundred-liter vat, and presses the day\'s curd into wheels weighing forty kilograms each. The wheels are washed, turned, and rubbed with brine almost every day for at least twelve months, sometimes three years. The cheese is Comté, eaten by roughly forty percent of the French population, and it tastes different in every batch because it tastes like the grass the cows ate that week. This is what aging does. It concentrates. It translates a landscape.' },
        { type: 'h2', text: 'The cave' },
        { type: 'p', text: 'An aged cheese requires three things: a salted curd, a bacterial culture, and a place that stays cool and humid for a long time. A traditional cheese cave is a limestone cellar at 12–14°C with 90% relative humidity. A modern commercial cheese room is a climate-controlled cellar that holds the same numbers with instruments. A home cheesemaker can get away with a wine fridge. The aging itself is mostly patience, which is to say, the hardest ingredient to source.' },
        { type: 'h2', text: 'The affinage' },
        { type: 'p', text: 'An affineur is a cheese-raiser — a specialist who takes young cheese from the maker and coaxes it toward what it is meant to be. A washed-rind cheese is wiped with brine or with a brandy-saltwater solution every day or two to encourage Brevibacterium linens, the orange-rind bacterium that smells, to many, like feet. A bloomy-rind cheese is inoculated with Penicillium candidum and left untouched; the mold colonizes the surface in a soft white bloom. A hard cheese is rubbed with salt, wrapped in cloth, and turned weekly. Each of these is a daily relationship with a wheel for months.' },
        { type: 'h2', text: 'The three great aged families' },
        { type: 'p', text: 'The Alpine wheels — Comté, Gruyère, Emmental, Beaufort — are the old mountain cheeses made in large summer batches when a herd moved to high pasture. They age twelve to thirty-six months and are the nutty, caramel-sweet references of the family. The blues — Roquefort from France, Stilton from England, Gorgonzola from Italy, Cabrales from Spain — are inoculated with Penicillium roqueforti and pierced with needles that let air feed the mold\'s veined growth through the wheel. The washed-rinds — Époisses, Taleggio, Limburger, Munster — are the ones that smell wrong and taste right. A cheese shop with all three families is a cheese shop.' },
        { type: 'h2', text: 'Terroir, in cheese' },
        { type: 'p', text: 'The French concept of terroir — that a food carries the taste of the specific place it comes from — applies to cheese even more tangibly than to wine. The grass a cow ate in a particular valley in a particular month carries volatile compounds into the milk that survive into the aged cheese. The same recipe applied in two different valleys produces two different cheeses. This is why the protected-designation-of-origin (PDO) system exists: Comté is only Comté if it came from the Jura and was made by the fruitière system. A factory wheel from Wisconsin using the same recipe is a good cheese. It is not Comté.' },
        { type: 'h2', text: 'A home cellar, realistically' },
        { type: 'p', text: 'A full aged cheese at home is ambitious but possible. A wine fridge set to 12°C, a plastic bin with a damp paper towel for humidity, a cheese mat, and a schedule of turning and brining. Six months in, you have a first little wheel. Most home cheesemakers do this once to understand it and then defer the rest to the affineurs at a good cheesemonger — which is, honestly, the right division of labor. A home cook can make every fresh cheese in a kitchen. An aged cheese deserves a room of its own.' },
        { type: 'callout', text: 'The American cheese revival of the past thirty years has produced aged wheels that genuinely rival European standards. Jasper Hill Farm in Vermont, Uplands Cheese in Wisconsin, and Cowgirl Creamery in California all run affinage programs that would be at home in a French cellar.' },
      ],

      keyTerms: ['affinage', 'affineur', 'terroir', 'PDO', 'Penicillium roqueforti', 'Penicillium candidum', 'Brevibacterium linens', 'washed rind', 'bloomy rind', 'Alpine'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@GavinWebber',
            title: 'Gavin Webber — aged-cheese playlists',
            channel: 'Gavin Webber',
            duration: 'variable',
            featured: true,
            why: 'Gavin Webber\'s home-cheesemaking channel is the most complete aged-cheese resource on YouTube for hobbyists. His "Dutch-style Gouda" series follows a wheel from vat to four-month wheel.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.netflix.com/title/80007945',
            title: 'Somm: Into the Bottle and Chef\'s Table: France (cheese episodes)',
            channel: 'Netflix',
            duration: '50:00 each',
            featured: true,
            why: 'The Chef\'s Table France episodes visit French cheese cellars and the makers who run them. Not a how-to, but the best footage of professional affinage on video.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@NealsYardDairy',
            title: 'Neal\'s Yard Dairy — cheesemonger videos',
            channel: 'Neal\'s Yard Dairy',
            duration: 'variable',
            featured: true,
            why: 'The London affineur\'s channel includes maker visits, tasting walk-throughs, and explanations of British territorial cheeses that do not exist outside a handful of farms.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@JasperHillFarm',
            title: 'Jasper Hill Farm — cellar and dairy',
            channel: 'Jasper Hill Farm',
            duration: 'variable',
            featured: false,
            why: 'The Vermont dairy\'s own videos on affinage, including footage of their underground cellars housing thousands of wheels for farms across the American Northeast.',
          },
        ],
        books: [
          {
            title: 'Mastering Artisan Cheesemaking',
            author: 'Gianaclis Caldwell',
            year: 2012,
            url: 'https://www.chelseagreen.com/product/mastering-artisan-cheesemaking/',
            why: 'The modern standard for serious cheesemakers, including chapters on aging protocols, cave setup, and the microbiology of ripening. For a home cheesemaker past the fresh-cheese stage.',
          },
          {
            title: 'Home Cheese Making',
            author: 'Ricki Carroll',
            year: 1982,
            url: 'https://cheesemaking.com/products/home-cheese-making',
            why: 'Carroll\'s chapter on aged cheeses is the canonical home-scale protocol for Gouda, cheddar, and Alpine-style wheels. Revised through 2002 and again after.',
          },
          {
            title: 'Reinventing the Wheel: Milk, Microbes, and the Fight for Real Cheese',
            author: 'Bronwen Percival, Francis Percival',
            year: 2017,
            url: 'https://www.ucpress.edu/book/9780520291577/reinventing-the-wheel',
            why: 'The Neal\'s Yard Dairy team\'s argument for raw-milk cheese and the small-farm ecosystem. Part history, part microbiology, part advocacy — the most-discussed serious cheese book of the last decade.',
          },
          {
            title: 'The Science of Cheese',
            author: 'Michael H. Tunick',
            year: 2014,
            url: 'https://global.oup.com/academic/product/the-science-of-cheese-9780199922307',
            why: 'An Oxford University Press textbook by a USDA cheese chemist. The most complete English-language reference on the chemistry and microbiology of aging.',
          },
          {
            title: 'On Food and Cooking',
            author: 'Harold McGee',
            year: 1984,
            url: 'https://en.wikipedia.org/wiki/On_Food_and_Cooking',
            why: 'McGee on cheese connects the microbial and enzymatic work of ripening to the observable flavors. The opening pages of the dairy chapter are the cleanest summary in print.',
          },
        ],
        articles: [
          {
            title: 'Cheese ripening',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Cheese_ripening',
            why: 'Definitions, biochemistry, and the micro-ecology of rind formation. A good companion to the Caldwell book.',
            year: null,
          },
          {
            title: 'Comté cheese',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Comt%C3%A9_cheese',
            why: 'The PDO rules, the fruitière cooperative system, and the grading jury. The single best article on how a protected aged cheese is actually regulated.',
            year: null,
          },
          {
            title: 'Neal\'s Yard Dairy',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Neal%27s_Yard_Dairy',
            why: 'The London firm that saved British farmhouse cheese in the 1980s by buying directly from farms and aging at their Bermondsey warehouse.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Certified Cheese Professional (ACS)',
            provider: 'American Cheese Society',
            url: 'https://www.cheesesociety.org/certification/',
            free: false,
            why: 'The American Cheese Society\'s professional certification — the cheesemonger\'s equivalent of the Court of Master Sommeliers. Prep materials are public; the exam is paid.',
          },
          {
            title: 'Cheesemaking online courses',
            provider: 'Gianaclis Caldwell / Pholia Farm',
            url: 'https://pholiafarm.com/cheesemaking-classes/',
            free: false,
            why: 'Caldwell\'s school runs online cheesemaking classes at a progression from home-dairy through professional-scale. Paid, and worth it for a serious amateur.',
          },
        ],
        tools: [
          {
            title: 'A wine fridge set to 12°C',
            url: 'https://en.wikipedia.org/wiki/Cheese_cave',
            why: 'The cheapest reliable cheese cave a home cheesemaker can set up. Holds temperature within half a degree and humidity with a damp paper towel.',
          },
          {
            title: 'A cheese press',
            url: 'https://en.wikipedia.org/wiki/Cheese_press',
            why: 'The Dutch-style or gear-driven press is the tool for hard cheeses. A cheap home press is fifty dollars; a commercial one runs into the thousands.',
          },
          {
            title: 'A cheese trier (iron)',
            url: 'https://en.wikipedia.org/wiki/Cheese_iron',
            why: 'A chromed steel probe that cuts a core out of an aged wheel to taste it without slicing it open. The affineur\'s stethoscope.',
          },
        ],
      },

      seeAlso: ['fresh_cheese', 'wine', 'lacto', 'vinegar'],
      prereqs: ['fresh_cheese'],
      leadsTo: ['wine'],

      chapterActivity: 'A quarterly "three cheeses" tasting at a Williamsburg cheesemonger — one Alpine, one blue, one washed-rind, with the affineur walking members through the ages and terroirs.',

      sources: [
        'https://en.wikipedia.org/wiki/Cheese_ripening',
        'https://en.wikipedia.org/wiki/Comt%C3%A9_cheese',
        'https://en.wikipedia.org/wiki/Neal%27s_Yard_Dairy',
        'https://www.chelseagreen.com/product/mastering-artisan-cheesemaking/',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
