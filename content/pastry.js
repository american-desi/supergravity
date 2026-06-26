// content/pastry.js
// Batch: B09-kitchen-arts
// Last updated: 2026-04-23 by BATCH B09-kitchen-arts
//
// Topics this subject must cover (from data.js):
//   Core: lamination, custards

window.CONTENT = window.CONTENT || {};
window.CONTENT.pastry = {
  subjectId: 'pastry',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B09-kitchen-arts',
  topics: {

    lamination: {
      id: 'lamination',
      name: 'Lamination',
      level: 'Advanced',
      dek: 'The patient origami of folding butter into dough — eighty-one layers in a croissant, a thousand in a puff pastry, all from three folds and a rolling pin.',
      readTime: '13 min',

      sections: ['What a laminated dough is, precisely', 'Three folds, eighty-one layers', 'The temperature trap', 'Croissant versus puff pastry', 'Why the whole thing is worth the trouble'],
      body: [
        { type: 'lead', text: 'The first recorded croissant was served in Vienna in 1839, at a bakery owned by an Austrian artillery officer turned baker named August Zang who had brought his city\'s kipferl — a crescent-shaped yeast pastry — to a new shop on the Rue de Richelieu in Paris. The Parisians flattered the imported pastry by reworking its dough with French butter and French lamination technique, until by the end of the nineteenth century the French croissant was an entirely different thing from what Zang had carried across the border. By the time Julia Child put one in an American cookbook in 1961, the recipe ran to thirty-six hours. Good lamination, then as now, is the point where the European bakery meets the scientific laboratory.' },
        { type: 'h2', text: 'What a laminated dough is, precisely' },
        { type: 'p', text: 'A laminated dough is a block of dough with a thin sheet of butter folded into it, rolled out, folded again, rolled, and folded a third time. The butter stays separate from the dough in hundreds of thin, intact layers. In the oven, water in the butter turns to steam and forces the layers apart; the butterfat keeps them from sealing back together. The result is a pastry that is all surface and air — eighty-one layers in a traditional three-fold croissant, two hundred and forty-three in a puff-pastry six-fold, nearly a thousand in some advanced laminations. The honeycomb crumb of a well-made croissant is a record of every fold.' },
        { type: 'h2', text: 'Three folds, eighty-one layers' },
        { type: 'p', text: 'The classic croissant uses three "letter folds" or "book folds," each of which triples the number of layers. Three layers become nine, nine become twenty-seven, twenty-seven become eighty-one. Puff pastry uses more folds and no yeast: a hundred-plus, sometimes several hundred layers, each impossibly thin. Too few folds and the pastry is coarse; too many and the butter disappears into the dough and the whole structure collapses. Like a lot of traditional baking, the numbers were empirically settled well before anyone understood why they worked.' },
        { type: 'h2', text: 'The temperature trap' },
        { type: 'p', text: 'The central difficulty of lamination is temperature. If the butter is too cold, it cracks and tears holes in the dough during rolling. If the butter is too warm, it melts into the dough and the layers merge. The sweet spot is a butter that is cold enough to hold its shape but pliant enough to roll with the dough at roughly the same rate. Professional bakers work in chilled rooms, rolling quickly, returning the dough to the fridge every fifteen minutes to firm the butter back up. A home baker\'s kitchen is too warm for much of the year. A countertop marble slab, used like an ice pack, is the traditional fix.' },
        { type: 'h2', text: 'Croissant versus puff pastry' },
        { type: 'p', text: 'A croissant dough is a yeasted dough; the butter layers provide flakiness, but the yeast is still doing the primary lifting. A puff pastry dough is unyeasted; the lift is entirely from the steam phase change of water in the butter. Both pastries are laminated, but their flavor and texture are quite different — a croissant has the soft, slightly tangy interior of a bread; a puff pastry is all butter and brittle shatter. Danish pastry is the third major laminate: a croissant dough with egg and more sugar, folded, shaped, and filled. Phyllo is the outlier — rolled or stretched so thin that the layers are added individually, not folded in.' },
        { type: 'h2', text: 'Why the whole thing is worth the trouble' },
        { type: 'p', text: 'A laminated dough is the defining test of a pastry kitchen. A good bakery can almost always be judged by the cross-section of their croissant: a clean honeycomb, an open texture that snaps when torn, a base that is crisp rather than greasy. A home baker who successfully laminates a batch has closed the gap between what is available in a supermarket case and what is available in a good Parisian bakery. The tradeoff is time — three hours of active work spread over twenty-four, in a chilled kitchen, with a level of attention that a first-time baker will find almost therapeutic by the time the finished croissants come out.' },
        { type: 'callout', text: 'European butter at 83 to 85 percent fat — Plugra, Kerrygold, Elle & Vire — has about four percent less water than American butter (80 percent fat). For lamination, the higher fat content is a measurable advantage. The pastry is flakier and the kitchen stays less wet.' },
      ],

      keyTerms: ['lamination', 'détrempe', 'beurrage', 'letter fold', 'book fold', 'puff pastry', 'croissant', 'viennoiserie', 'honeycomb', 'kipferl'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ClaireSaffitz',
            title: 'Claire Saffitz — croissant and puff pastry',
            channel: 'Claire Saffitz',
            duration: 'variable',
            featured: true,
            why: 'Claire Saffitz\'s long-form croissant video, filmed in her kitchen over two days, is the canonical home-baker\'s reference. Every step photographed in close-up.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@KingArthurBakingCompany',
            title: 'King Arthur Baking — lamination series',
            channel: 'King Arthur Baking Company',
            duration: 'variable',
            featured: true,
            why: 'The Vermont mill\'s baking-school videos on laminated doughs, filmed in their test bakery. Good on troubleshooting and tool choice.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.youtube.com/watch?v=VkmsFA5ebUI',
            title: 'Croissants — Savoring the Good Life (Chef Dominique Ansel)',
            channel: 'PBS',
            duration: 'variable',
            featured: true,
            why: 'Dominique Ansel — the SoHo pastry chef who invented the Cronut — walks through a classic croissant technique with the discipline of a French pastry-school graduate.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@joshuaweissman',
            title: 'Joshua Weissman — croissants from scratch',
            channel: 'Joshua Weissman',
            duration: 'variable',
            featured: false,
            why: 'Weissman\'s two-part croissant video is the most-watched beginner lamination series on YouTube. Relentlessly thorough and transparent about his mistakes.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@BakeryClass',
            title: 'Hanbit Cho — Bakery Class',
            channel: 'Bakery Class',
            duration: 'variable',
            featured: false,
            why: 'A Korean pastry-school instructor filming professional laminations with professional equipment. Useful for seeing what restaurant-quality technique actually looks like.',
          },
        ],
        books: [
          {
            title: 'Advanced Bread and Pastry',
            author: 'Michel Suas',
            year: 2008,
            url: 'https://www.cengage.com/c/advanced-bread-and-pastry-1e-suas/9781418011697/',
            why: 'The American culinary-school textbook. Suas founded the San Francisco Baking Institute and his book is the reference most bread and pastry programs teach from.',
          },
          {
            title: 'The Professional Pastry Chef',
            author: 'Bo Friberg',
            year: 2002,
            url: 'https://www.wiley.com/en-us/The+Professional+Pastry+Chef%3A+Fundamentals+of+Baking+and+Pastry%2C+4th+Edition-p-9780471218258',
            why: 'The longer-standing American pastry-school textbook. Friberg taught at the Culinary Institute of America and his book covers lamination alongside every other technique a pastry chef uses.',
          },
          {
            title: 'Tartine',
            author: 'Elisabeth Prueitt, Chad Robertson',
            year: 2006,
            url: 'https://en.wikipedia.org/wiki/Tartine_Bakery',
            why: 'The San Francisco bakery\'s original book — Prueitt\'s pastry side, including the croissants and laminates that made the bakery famous.',
          },
          {
            title: 'Ratio: The Simple Codes Behind the Craft of Everyday Cooking',
            author: 'Michael Ruhlman',
            year: 2009,
            url: 'https://ruhlman.com/ratio-2/',
            why: 'Ruhlman\'s laminate ratios are a cheat sheet for the home baker. Three-to-one dough to butter; three folds, two turns; and you have a croissant.',
          },
          {
            title: 'The Violet Bakery Cookbook',
            author: 'Claire Ptak',
            year: 2015,
            url: 'https://tenspeed.com/books/',
            why: 'The London bakery\'s book, filled with simpler laminated pastries — scones, shortcrusts — that are a realistic first step for a home pastry baker.',
          },
        ],
        articles: [
          {
            title: 'Laminated dough',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Laminated_dough',
            why: 'Definitions, examples (croissant, puff, Danish, kouign-amann), and the physics of the butter-steam phase change.',
            year: null,
          },
          {
            title: 'Croissant',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Croissant',
            why: 'The history from kipferl through Zang\'s Vienna bakery to modern France, with the key technique notes.',
            year: null,
          },
          {
            title: 'Puff pastry',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Puff_pastry',
            why: 'The Carême attribution, the difference between puff and croissant, and the modern rough-puff variant.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Classic Pastry Arts',
            provider: 'Institute of Culinary Education',
            url: 'https://www.ice.edu/newyork/career-programs/pastry-baking-arts',
            free: false,
            why: 'One of the two leading American pastry programs, in New York. Syllabus public; the program itself is the full-time professional track.',
          },
          {
            title: 'San Francisco Baking Institute',
            provider: 'SFBI',
            url: 'https://www.sfbi.com/',
            free: false,
            why: 'Michel Suas\'s school — professional bread-and-pastry training, short-course options for enthusiasts. The modern American laminate curriculum traces back here.',
          },
          {
            title: 'King Arthur Baking School — Laminated Pastries',
            provider: 'King Arthur Baking',
            url: 'https://www.kingarthurbaking.com/baking-school',
            free: false,
            why: 'Virtual and in-person classes on croissants and puff pastry. Paid but shorter-commitment than a full pastry program.',
          },
        ],
        tools: [
          {
            title: 'A marble pastry slab',
            url: 'https://en.wikipedia.org/wiki/Pastry_board',
            why: 'Marble holds cold, which means the butter holds its shape longer while you roll. The traditional French pastry surface for a reason.',
          },
          {
            title: 'A French rolling pin (no handles)',
            url: 'https://en.wikipedia.org/wiki/Rolling_pin',
            why: 'A cylindrical dowel without handles lets you feel the dough under your palms and roll with even pressure. The professional standard.',
          },
          {
            title: 'A bench scraper',
            url: 'https://en.wikipedia.org/wiki/Bench_scraper',
            why: 'The flat steel rectangle for squaring the dough, cutting the butter block, and scraping the bench clean between folds. The pastry kitchen\'s most-used hand tool.',
          },
          {
            title: 'European butter at 83%+ fat',
            url: 'https://en.wikipedia.org/wiki/Butter',
            why: 'Plugra, Kerrygold, Elle & Vire. Higher fat, less water, laminates better. A dollar more a pound is cheap insurance for twenty-four hours of work.',
          },
        ],
      },

      seeAlso: ['custards', 'bread', 'sourdough', 'cookies'],
      prereqs: ['bread'],
      leadsTo: ['custards'],

      chapterActivity: 'A two-day "Saturday and Sunday" croissant workshop at a Carroll Gardens bakery — Saturday afternoon is the détrempe and the lock-in; Sunday morning is the fold, the shape, and the bake.',

      sources: [
        'https://en.wikipedia.org/wiki/Laminated_dough',
        'https://en.wikipedia.org/wiki/Croissant',
        'https://en.wikipedia.org/wiki/Puff_pastry',
      ],
      verifiedAt: '2026-04-23',
    },

    custards: {
      id: 'custards',
      name: 'Custards',
      level: 'Intermediate',
      dek: 'Eggs, milk, sugar, and heat — the four ingredients that cover every important dessert from crème anglaise to crème brûlée.',
      readTime: '12 min',

      sections: ['Eggs and the thickening temperature', 'Stirred versus baked', 'Crème anglaise, the mother custard', 'Pastry cream and the starch trick', 'Why temperature is everything'],
      body: [
        { type: 'lead', text: 'In 1691, the chef to the duc d\'Orléans, a man named François Massialot, published a book called Le Cuisinier Royal et Bourgeois that contained — buried in a chapter on sweets — a recipe for crème brûlée. A thin custard of egg yolks, cream, and sugar, baked in a water bath until barely set, chilled, then dusted with sugar and scorched under a salamander so the top cracked like a sheet of glass. Three hundred years later, with only modest modifications, this is still the recipe. A custard is the most indestructible pastry dessert a home kitchen can make, and also, in a professional kitchen, one of the most frequently failed.' },
        { type: 'h2', text: 'Eggs and the thickening temperature' },
        { type: 'p', text: 'The proteins in an egg yolk begin to coagulate at roughly 65°C (149°F), and finish setting at about 82°C (180°F). In the narrow window between those two temperatures, an egg-thickened sauce transitions from runny liquid to silken nappé — the state where the sauce coats the back of a spoon and holds a drawn line. Push past 82°C and the proteins curdle into visible lumps; the sauce breaks and can no longer be rescued. A custard cook lives in this window, with a thermometer or a long-practiced eye.' },
        { type: 'h2', text: 'Stirred versus baked' },
        { type: 'p', text: 'A stirred custard — crème anglaise, lemon curd, pastry cream — is cooked on the stovetop over a low flame, constantly whisked, until it thickens. A baked custard — crème brûlée, flan, pots de crème, cheesecake — is cooked in a water bath in a low oven, which keeps the temperature gentle and even. Both work because of the same egg chemistry; both fail if the heat is rushed. The stirred custard is the everyday skill. The baked custard is the restaurant dessert.' },
        { type: 'h2', text: 'Crème anglaise, the mother custard' },
        { type: 'p', text: 'Crème anglaise — literally "English cream" — is the base of many of the great dessert preparations. Egg yolks whisked with sugar, warmed with infused milk or cream, cooked gently to nappé. Frozen and churned, it becomes ice cream. Thickened with starch, it becomes pastry cream. Set with gelatin, it becomes Bavarian cream. Folded with whipped cream, it becomes mousseline. Learn to make crème anglaise and you have inherited a whole dessert repertoire. It is the Escoffier mother sauce of the pastry section.' },
        { type: 'h2', text: 'Pastry cream and the starch trick' },
        { type: 'p', text: 'Pastry cream (crème pâtissière) is crème anglaise fortified with cornstarch or flour, and here is where it gets interesting: the starch changes the chemistry. Starch granules, when fully cooked, prevent the egg proteins from overcooking — they raise the safe upper temperature past 100°C. This means pastry cream can, and must, be brought briefly to a full boil to activate the starch. An undercooked pastry cream tastes like raw flour. A properly boiled one is silky and stable. It holds in the refrigerator for days and is the filling of eclairs, mille-feuilles, Boston cream pies, and a hundred other things.' },
        { type: 'h2', text: 'Why temperature is everything' },
        { type: 'p', text: 'A custard is the most temperature-sensitive dish in a home kitchen. Five degrees is the difference between silk and curdled; the difference between a clean brûlée and a grainy one; the difference between a set flan and a weepy one. A digital probe thermometer, used religiously, solves ninety percent of custard problems at home. The other ten percent is technique: tempering a small amount of the warm milk into the yolks before combining, straining the finished custard through a fine mesh, and — always — cooling in an ice bath to stop the carryover cook. A custard that has been pulled at the right moment and chilled is almost impossible to ruin.' },
        { type: 'callout', text: 'A water bath for a baked custard is not decorative. The water holds the oven\'s effective temperature at 100°C, preventing the custard from exceeding the 82°C threshold where the eggs curdle. Leave the bath out and you will bake scrambled eggs in sugar.' },
      ],

      keyTerms: ['custard', 'crème anglaise', 'pastry cream', 'crème brûlée', 'nappé', 'tempering', 'water bath (bain-marie)', 'cornstarch', 'coagulation', 'carryover'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ClaireSaffitz',
            title: 'Claire Saffitz — custard and ice cream',
            channel: 'Claire Saffitz',
            duration: 'variable',
            featured: true,
            why: 'Saffitz, a trained pastry chef, films custard technique with the patience of a cooking-school demo. Her crème brûlée and lemon tart videos are the home-baker reference.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@foodwishes',
            title: 'Chef John — classic custard episodes',
            channel: 'Food Wishes',
            duration: 'variable',
            featured: true,
            why: 'Chef John\'s crème brûlée, flan, and pot de crème episodes are patient, first-person demos with the chemistry lightly embedded.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@KingArthurBakingCompany',
            title: 'King Arthur Baking — custard fundamentals',
            channel: 'King Arthur Baking Company',
            duration: 'variable',
            featured: true,
            why: 'The Vermont mill\'s staff on the science and technique of custards. Good on how pastry cream differs from crème anglaise and when to use which.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@JacquesPepinFoundation',
            title: 'Jacques Pépin Foundation — classic custards',
            channel: 'Jacques Pépin Foundation',
            duration: 'variable',
            featured: false,
            why: 'The French-trained American master in his own kitchen, making crème caramel and floating islands at ninety years old. The oldest living authority on the classical technique.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@JKenjiLopezAlt',
            title: 'Kenji López-Alt — cheesecake and custards',
            channel: 'J. Kenji López-Alt',
            duration: 'variable',
            featured: false,
            why: 'Kenji\'s baked-custard videos (Basque cheesecake, crème brûlée) are the home-cook science companion to the pastry-school references.',
          },
        ],
        books: [
          {
            title: 'The Professional Pastry Chef',
            author: 'Bo Friberg',
            year: 2002,
            url: 'https://www.wiley.com/en-us/The+Professional+Pastry+Chef%3A+Fundamentals+of+Baking+and+Pastry%2C+4th+Edition-p-9780471218258',
            why: 'The American pastry school\'s textbook. Friberg\'s custards chapter is the standard reference — ratios, temperatures, and failure modes all documented.',
          },
          {
            title: 'Ratio: The Simple Codes Behind the Craft of Everyday Cooking',
            author: 'Michael Ruhlman',
            year: 2009,
            url: 'https://ruhlman.com/ratio-2/',
            why: 'Ruhlman\'s custard ratios (two yolks per cup of milk for a pourable; four per cup for a set custard) are the cheat sheet every home baker wants and few memorize.',
          },
          {
            title: 'Dessert Person',
            author: 'Claire Saffitz',
            year: 2020,
            url: 'https://www.dessertperson.com/',
            why: 'The modern home-baker\'s pastry reference. Saffitz\'s custards chapter covers the family from crème anglaise through diplomat cream with photos of each failure mode.',
          },
          {
            title: 'On Food and Cooking',
            author: 'Harold McGee',
            year: 1984,
            url: 'https://en.wikipedia.org/wiki/On_Food_and_Cooking',
            why: 'McGee on eggs and custards is the clearest plain-English explanation of coagulation temperatures, the starch-protects-eggs trick, and why a water bath matters.',
          },
          {
            title: 'The Fundamental Techniques of Classic Pastry Arts',
            author: 'French Culinary Institute',
            year: 2009,
            url: 'https://www.penguinrandomhouse.com/books/237244/the-fundamental-techniques-of-classic-pastry-arts-by-french-culinary-institute/',
            why: 'The ICE/FCI pastry textbook. Organized by technique rather than dish, with custards as one of the six foundational categories.',
          },
        ],
        articles: [
          {
            title: 'Custard',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Custard',
            why: 'Definitions, history from medieval European kitchens, and the chemistry of coagulation.',
            year: null,
          },
          {
            title: 'Crème anglaise',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Cr%C3%A8me_anglaise',
            why: 'The mother custard — history, classical ratios, and the relationship to ice cream.',
            year: null,
          },
          {
            title: 'Pastry cream',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Pastry_cream',
            why: 'The starched variant — why it must be boiled, why it holds longer, and which classic desserts depend on it.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'King Arthur Baking School — Custards & Creams',
            provider: 'King Arthur Baking',
            url: 'https://www.kingarthurbaking.com/baking-school',
            free: false,
            why: 'The Vermont mill\'s online and in-person pastry courses cover every major custard and cream. Scheduled live sessions; recorded library.',
          },
          {
            title: 'Institute of Culinary Education — Pastry & Baking Arts',
            provider: 'ICE',
            url: 'https://www.ice.edu/newyork/career-programs/pastry-baking-arts',
            free: false,
            why: 'The professional pastry certificate in New York. Syllabus and philosophy are public. A serious commitment for anyone making pastry a second career.',
          },
        ],
        tools: [
          {
            title: 'A digital instant-read thermometer',
            url: 'https://en.wikipedia.org/wiki/Thermometer',
            why: 'The 82°C ceiling on custards is the single most important number in a home pastry kitchen. A Thermapen reads in one second; a ThermoPop reads in three; either is transformational.',
          },
          {
            title: 'A fine-mesh sieve (chinois)',
            url: 'https://en.wikipedia.org/wiki/Chinois',
            why: 'Every finished custard goes through a sieve. The mesh catches the small amounts of overcooked egg near the bottom of the pan and the stringy chalazae from the yolks.',
          },
          {
            title: 'A kitchen torch (or a good broiler)',
            url: 'https://en.wikipedia.org/wiki/Blowtorch',
            why: 'A propane or butane torch caramelizes the top of a crème brûlée faster and more evenly than a broiler. The Iwatani Bernzomatic is the American standard. Forty dollars.',
          },
          {
            title: 'A bain-marie (water bath)',
            url: 'https://en.wikipedia.org/wiki/Bain-marie',
            why: 'A rectangular roasting pan with a kitchen towel at the bottom (to steady ramekins) holds three or four custards for a baked preparation. The single item of equipment the classical pastry kitchen never does without.',
          },
        ],
      },

      seeAlso: ['lamination', 'cookies', 'fresh_cheese', 'heat_transfer'],
      prereqs: ['heat_transfer'],
      leadsTo: ['lamination'],

      chapterActivity: 'A "four custards" afternoon at a Gowanus pastry kitchen — crème anglaise, pastry cream, crème brûlée, and flan, each made in a single two-hour session from the same six eggs and a quart of cream.',

      sources: [
        'https://en.wikipedia.org/wiki/Custard',
        'https://en.wikipedia.org/wiki/Cr%C3%A8me_anglaise',
        'https://en.wikipedia.org/wiki/Pastry_cream',
        'https://en.wikipedia.org/wiki/On_Food_and_Cooking',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
