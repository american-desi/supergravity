// content/fermentation.js
// Batch: B09-kitchen-arts
// Last updated: 2026-04-23 by BATCH B09-kitchen-arts
//
// Topics this subject must cover (from data.js):
//   Core: lacto, vinegar

window.CONTENT = window.CONTENT || {};
window.CONTENT.fermentation = {
  subjectId: 'fermentation',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B09-kitchen-arts',
  topics: {

    lacto: {
      id: 'lacto',
      name: 'Lacto-Fermentation',
      level: 'Beginner',
      dek: 'The simplest preservation technique humans ever invented — salt, vegetables, time, and a family of bacteria that does the work for free.',
      readTime: '11 min',

      sections: ['Salt, water, and a jar', 'The bacteria that show up', 'Sauerkraut and kimchi', 'Why it keeps', 'A home ferment, safely'],
      body: [
        { type: 'lead', text: 'In 219 BCE, the engineer building the Great Wall of China provisioned his laborers with a fermented cabbage pickled in rice wine. Two thousand years later, Captain Cook sailed to the Pacific with 60 barrels of sauerkraut on the Resolution and lost no sailor to scurvy. The same bacteria were doing the same job in both cases. Lacto-fermentation is the most widespread preservation technique in human history: found in almost every cuisine, developed independently on every inhabited continent, and still, in a refrigerated world, the technique that makes the most flavorful vegetables on a home shelf.' },
        { type: 'h2', text: 'Salt, water, and a jar' },
        { type: 'p', text: 'The recipe, in its simplest form, is two percent salt by weight. Chop vegetables, salt them, pack them under their own liquid in a jar, and wait. Three to seven days at room temperature is enough for most things. The salt draws water out of the vegetables through osmosis and suppresses the bacteria that would rot them, while tolerating the ones that will preserve them. The Latin name is lactobacillus, which is also the bacterium at the bottom of every yogurt and sourdough starter. It arrives from the vegetables themselves and the air. You do not add it; you let it come.' },
        { type: 'h2', text: 'The bacteria that show up' },
        { type: 'p', text: 'A ferment goes through three phases. Leuconostoc mesenteroides starts the work, producing carbon dioxide and mild acid. Lactobacillus plantarum takes over once the pH drops below 4.4, driving the acid production further and producing the tangy flavor that defines a finished ferment. Lactobacillus brevis finishes the job, if you let it, and produces the deeper flavor of a long-fermented kraut. A two-day ferment is spritely; a three-week ferment is serious. The same cabbage tastes different at every stage.' },
        { type: 'h2', text: 'Sauerkraut, kimchi, and a world of cognates' },
        { type: 'p', text: 'Sauerkraut is cabbage, salt, and time. Kimchi is cabbage, salt, chiles, garlic, ginger, scallion, fish sauce, and time. Sauerkraut is the German cognate; kimchi the Korean; tsukemono the Japanese; choucroute the Alsatian; curtido the Salvadoran. The grammar is the same. The punctuation is the spice. Every traditional cuisine that faced winter without refrigeration invented some version of this preservation. Most of those versions are still being made.' },
        { type: 'h2', text: 'Why it keeps' },
        { type: 'p', text: 'A finished lacto-ferment has a pH between 3.2 and 3.8 — sharply acidic. Very few spoilage bacteria can live at that acidity, which is why a properly fermented vegetable, refrigerated, keeps for months and often years. The same acidity makes the ferment hostile to botulism, which cannot grow below pH 4.6. Home fermentation, contrary to the worry most beginners arrive with, is the safest form of home food preservation, because the biology guards against failure. An obviously spoiled ferment smells wrong immediately; you will know.' },
        { type: 'h2', text: 'A home ferment, safely' },
        { type: 'p', text: 'A half-gallon mason jar, two pounds of shredded green cabbage, twenty grams of kosher salt, a cabbage leaf to weigh the rest down, and a loose lid to let the gas escape. Pack, weigh down, cover, and leave on the counter at room temperature. Taste at day three; taste at day seven. When it tastes the way you want, move it to the fridge. That is the whole technique. A first ferment teaches you to trust the biology. The tenth teaches you to improvise.' },
        { type: 'callout', text: 'Anything below the brine is safe; anything above it can mold. A weight — a plate, a glass lid, a fermentation-specific disk — that keeps the vegetables submerged is the single most important piece of equipment. The rest is optional.' },
        { type: 'quote', text: 'Fermentation is an act of co-creation, a collaboration with invisible workers who have been transforming food for as long as there has been food.', cite: 'Sandor Katz, The Art of Fermentation' },
      ],

      keyTerms: ['Lactobacillus', 'sauerkraut', 'kimchi', 'brine', 'anaerobic', 'pH', 'osmosis', 'lactic acid', 'Leuconostoc'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/playlist?list=PLKtIunYVkv_SUyXj_6Fe53okfzM9yVq1F',
            title: 'It\'s Alive with Brad (full playlist)',
            channel: 'Bon Appétit / Brad Leone',
            duration: 'variable',
            featured: true,
            why: 'Brad Leone\'s seven-year run of fermentation videos at Bon Appétit. His kraut, kimchi, and hot-sauce episodes are the most-watched fermentation content on YouTube.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.wildfermentation.com/videos/',
            title: 'Sandor Katz — workshop recordings and talks',
            channel: 'Wild Fermentation',
            duration: 'variable',
            featured: true,
            why: 'Katz\'s own workshops, posted by him and his publishers. The original sauerkraut demonstration that taught a generation of American home fermenters.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@MaangchiNet',
            title: 'Maangchi — kimchi playlist',
            channel: 'Maangchi',
            duration: 'variable',
            featured: true,
            why: 'Emily Kim, who runs YouTube\'s leading Korean-cooking channel, has filmed kimchi in every season and style. The baechu kimchi video is the reference.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@FermentationAdventure',
            title: 'Fermentation Adventure — Jeff Bennett',
            channel: 'Fermentation Adventure',
            duration: 'variable',
            featured: false,
            why: 'Jeff and Tracy Bennett\'s on-camera interviews with working fermenters — cheesemakers, brewers, vinegar makers, sauerkraut producers. The best American fermentation travel channel.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ClevelandKraut',
            title: 'Cleveland Kitchen — how-to videos',
            channel: 'Cleveland Kitchen',
            duration: 'variable',
            featured: false,
            why: 'The Ohio family operation makes serious commercial kraut and puts their home-scale technique on camera in short, practical videos.',
          },
        ],
        books: [
          {
            title: 'The Art of Fermentation',
            author: 'Sandor Ellix Katz',
            year: 2012,
            url: 'https://www.chelseagreen.com/product/the-art-of-fermentation/',
            why: 'The James Beard–winning reference. The New York Times called it one of the most influential cookbooks of the past century. The standard book for anyone serious about fermentation.',
          },
          {
            title: 'Wild Fermentation',
            author: 'Sandor Ellix Katz',
            year: 2003,
            url: 'https://www.chelseagreen.com/product/wild-fermentation-2/',
            why: 'The original — shorter, recipe-forward, and the book most people start with. Updated second edition, 2016.',
          },
          {
            title: 'The Noma Guide to Fermentation',
            author: 'René Redzepi, David Zilber',
            year: 2018,
            url: 'https://www.artisanbooks.com/products/the-noma-guide-to-fermentation',
            why: 'The technical reference from the Copenhagen restaurant\'s fermentation lab. Beautifully photographed, chemically precise, and heavily skewed toward lactic-ferments and misos.',
          },
          {
            title: 'On Food and Cooking',
            author: 'Harold McGee',
            year: 1984,
            url: 'https://en.wikipedia.org/wiki/On_Food_and_Cooking',
            why: 'McGee on fermentation explains the microbiology in a way Katz\'s books explicitly build upon. The two are frequently read together.',
          },
          {
            title: 'Fermented Vegetables',
            author: 'Kirsten K. Shockey, Christopher Shockey',
            year: 2014,
            url: 'https://www.storey.com/books/fermented-vegetables/',
            why: 'A Storey Publishing reference specifically for lacto-fermented vegetables. The recipes are arranged by vegetable, which is the orientation a home cook usually wants.',
          },
        ],
        articles: [
          {
            title: 'Lactic acid fermentation',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Lactic_acid_fermentation',
            why: 'The biochemistry and the bacterial genera. A good companion to Katz\'s more practical explanations.',
            year: null,
          },
          {
            title: 'Fermentation in food processing',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Fermentation_in_food_processing',
            why: 'The broader frame — lactic, alcoholic, acetic, and other fermentations, with a comparative history across cuisines.',
            year: null,
          },
          {
            title: 'Sandor Katz',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Sandor_Katz',
            why: 'The man who put fermentation back on American kitchen counters. A good profile of the author of the standard references.',
            year: null,
          },
          {
            title: 'Kimchi',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Kimchi',
            why: 'Over 180 documented varieties, UNESCO-inscribed cultural heritage, and the canonical example of a regional lacto-ferment tradition.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Fermentation Classes at the Art of Fermentation',
            provider: 'Sandor Katz',
            url: 'https://www.wildfermentation.com/workshops/',
            free: false,
            why: 'Katz\'s own schedule of residencies, workshops, and hands-on classes — some at his Tennessee home, many traveling.',
          },
          {
            title: 'Fermentation for a Changing World (free open course)',
            provider: 'Cornell / edX',
            url: 'https://www.edx.org/learn/food-science',
            free: true,
            why: 'Cornell\'s food-science department occasionally offers an open online course on fermentation that covers the lactic, alcoholic, and acetic pathways.',
          },
        ],
        tools: [
          {
            title: 'A half-gallon wide-mouth mason jar',
            url: 'https://en.wikipedia.org/wiki/Mason_jar',
            why: 'Glass, wide enough to pack and weigh, a standard that fits every accessory on the market. Two dollars each.',
          },
          {
            title: 'A glass fermentation weight',
            url: 'https://en.wikipedia.org/wiki/Fermentation',
            why: 'A small glass disk that sits on top of the kraut and keeps every shred submerged. Or use a cabbage leaf. Either one works.',
          },
          {
            title: 'An airlock fermentation lid',
            url: 'https://en.wikipedia.org/wiki/Airlock',
            why: 'A one-way valve that lets gas out and keeps oxygen out. Not required — a loose lid works — but reduces the "burp the jar" routine.',
          },
        ],
      },

      seeAlso: ['vinegar', 'fresh_cheese', 'sourdough', 'seasoning'],
      prereqs: [],
      leadsTo: ['vinegar', 'aged', 'sourdough'],

      chapterActivity: 'A spring "put up the cabbage" workshop at a Gowanus community kitchen — two heads per person, five pounds of salt on the table, everyone leaves with a labeled jar.',

      sources: [
        'https://en.wikipedia.org/wiki/Lactic_acid_fermentation',
        'https://en.wikipedia.org/wiki/Kimchi',
        'https://en.wikipedia.org/wiki/Sandor_Katz',
        'https://www.chelseagreen.com/product/the-art-of-fermentation/',
      ],
      verifiedAt: '2026-04-23',
    },

    vinegar: {
      id: 'vinegar',
      name: 'Vinegar',
      level: 'Intermediate',
      dek: 'The second fermentation — what happens to alcohol when you let the right bacteria have a turn at it.',
      readTime: '12 min',

      sections: ['From wine to vinegar', 'The mother', 'The Orléans method and the factory shortcut', 'Kinds, and why', 'A vinegar on the counter'],
      body: [
        { type: 'lead', text: 'The French word vinaigre means, literally, sour wine — vin aigre. The product is older than its name: Babylonian cuneiform tablets from around 3000 BCE record vinegar as both a condiment and a cleaning agent. In 1863 Louis Pasteur, investigating why the vinegar production in the region of Orléans produced better and more reliable product than competitors\', isolated the specific bacterium responsible: Acetobacter aceti. The same organism, then as now, converts ethanol to acetic acid. What Pasteur discovered was that vinegar is a two-step fermentation. First you make alcohol; then you wait.' },
        { type: 'h2', text: 'From wine to vinegar' },
        { type: 'p', text: 'Any beverage that contains between five and twelve percent alcohol can become vinegar. Wine becomes wine vinegar. Cider becomes cider vinegar. Sake becomes rice vinegar. Beer becomes malt vinegar. The alcohol is the food; Acetobacter bacteria, which live on skins of grapes and apples and drift through any kitchen\'s air, eat the ethanol and excrete acetic acid. The process requires oxygen, so the liquid must be exposed to air. It takes from three weeks to three months, depending on the temperature and the strength of the starting alcohol.' },
        { type: 'h2', text: 'The mother' },
        { type: 'p', text: 'On the surface of a vinegar in progress, the Acetobacter colony forms a gelatinous biofilm called the mother of vinegar. Translucent, beige, the texture of a soft rubber pancake. In a working vinegar culture, the mother sinks and rises as generations live and die. A commercial bottle of unpasteurized vinegar often contains a small piece of mother at the bottom, which will start a new ferment if given an appropriate alcohol to eat. It is the starter of the vinegar world.' },
        { type: 'h2', text: 'The Orléans method and the factory shortcut' },
        { type: 'p', text: 'Traditional wine vinegar is made in wooden barrels, slowly, with the mother floating on a large surface of wine. The result is complex, aromatic, and expensive. Industrial vinegar is made in a submerged tank with forced oxygenation — the Frings process — which finishes in twenty-four hours. The fast method produces a vinegar that is acidic but thin. The slow method produces a vinegar that tastes like something. The single biggest upgrade a home cook can make is switching from supermarket white vinegar to an actual wine vinegar.' },
        { type: 'h2', text: 'Kinds, and why each exists' },
        { type: 'p', text: 'White wine vinegar is for salads and pickles, where the wine flavor would overwhelm. Red wine vinegar is for heartier vinaigrettes and stews. Cider vinegar is for everything from the American South and most baking. Rice vinegar is for Japanese and Chinese kitchens, lower acid and gentler. Balsamic vinegar, real balsamic from Modena, is a concentrated grape must aged in wood for at least twelve years — a condiment rather than a vinegar, the way cognac is a brandy. The supermarket impostors aged four months in industrial tanks are not the same thing.' },
        { type: 'h2', text: 'A vinegar on the counter' },
        { type: 'p', text: 'A half-gallon jar, two bottles of inexpensive red wine, a third of a cup of unpasteurized vinegar with its mother, a breathable cloth over the top. Sit it on a counter out of direct sunlight, stir once a week, and taste at six weeks. When the alcohol is gone and the vinegar smells sharp, strain and bottle. A kitchen producing its own vinegar smells faintly sour in a way that a lot of older European kitchens would have, year-round. Which is also to say that the smell is old, familiar, and correct.' },
        { type: 'callout', text: 'Real balsamic, the DOP product of Modena and Reggio Emilia, is sold in fifty-milliliter bottles for twenty to two hundred dollars and drizzled at the table. The eight-dollar supermarket version is a different product — colored wine vinegar with caramel. It is useful. It is not balsamic.' },
      ],

      keyTerms: ['Acetobacter', 'mother of vinegar', 'acetic acid', 'Orléans method', 'Frings process', 'balsamic', 'mother', 'aceto balsamico tradizionale'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/playlist?list=PLKtIunYVkv_SUyXj_6Fe53okfzM9yVq1F',
            title: 'It\'s Alive with Brad — fermentation episodes',
            channel: 'Bon Appétit / Brad Leone',
            duration: 'variable',
            featured: true,
            why: 'Brad Leone makes vinegar on camera in the "Goin\' Places" spinoff and several It\'s Alive episodes. The best introduction to the mother-of-vinegar technique for home cooks.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ClevelandKraut',
            title: 'Cleveland Kitchen — vinegar how-to',
            channel: 'Cleveland Kitchen',
            duration: 'variable',
            featured: true,
            why: 'A commercial fermenter\'s home-scale breakdown of cider and red-wine vinegar. Short, practical, shot in a home kitchen.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@FermentationAdventure',
            title: 'Fermentation Adventure — vinegar maker interviews',
            channel: 'Fermentation Adventure',
            duration: 'variable',
            featured: true,
            why: 'Visits to small-producer vinegar makers in Italy and the US, including an episode on the Orléans method in a French cellar.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@MaangchiNet',
            title: 'Maangchi — persimmon vinegar',
            channel: 'Maangchi',
            duration: 'variable',
            featured: false,
            why: 'Korean persimmon vinegar is a traditional home ferment. Maangchi\'s quiet, first-person recipe shows the patience of a seasonal vinegar culture.',
          },
        ],
        books: [
          {
            title: 'The Art of Fermentation',
            author: 'Sandor Ellix Katz',
            year: 2012,
            url: 'https://www.chelseagreen.com/product/the-art-of-fermentation/',
            why: 'Katz\'s chapter on vinegar is the clearest plain-English account of the Orléans method, the role of the mother, and how to start a home vinegar without a purchased culture.',
          },
          {
            title: 'The Noma Guide to Fermentation',
            author: 'René Redzepi, David Zilber',
            year: 2018,
            url: 'https://www.artisanbooks.com/products/the-noma-guide-to-fermentation',
            why: 'Noma\'s vinegar chapter documents techniques for fruit, herb, and vegetable vinegars that do not appear anywhere else in print — with beautifully photographed step-by-steps.',
          },
          {
            title: 'On Food and Cooking',
            author: 'Harold McGee',
            year: 1984,
            url: 'https://en.wikipedia.org/wiki/On_Food_and_Cooking',
            why: 'McGee on vinegar is the clearest chemistry — the Acetobacter cycle, the oxygen requirement, and why aged balsamic tastes different from a year-old red wine vinegar.',
          },
          {
            title: 'True Brews',
            author: 'Emma Christensen',
            year: 2013,
            url: 'https://www.penguinrandomhouse.com/books/215826/true-brews-by-emma-christensen/',
            why: 'An approachable home-brewer\'s guide that covers cider, beer, mead, and the vinegar you make from what is left over.',
          },
        ],
        articles: [
          {
            title: 'Vinegar',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Vinegar',
            why: 'History, production methods, varieties, and the full etymology. Well-cited with seventy references.',
            year: null,
          },
          {
            title: 'Acetic acid bacteria',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Acetic_acid_bacteria',
            why: 'The microbiology. The Acetobacter genus is the vinegar worker; this article describes the genome and the oxygen-dependent metabolism.',
            year: null,
          },
          {
            title: 'Balsamic vinegar of Modena',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Balsamic_vinegar',
            why: 'The DOP and DOC rules, the traditional Modenese aging protocol, and the difference between the real condiment and its supermarket namesake.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Workshops at the Art of Fermentation',
            provider: 'Sandor Katz',
            url: 'https://www.wildfermentation.com/workshops/',
            free: false,
            why: 'Katz\'s residencies cover vinegar as one of the five classical ferments. The syllabus has not changed much in twenty years.',
          },
          {
            title: 'The Vinegar Institute (industry resources)',
            provider: 'The Vinegar Institute',
            url: 'https://versatilevinegar.org/',
            free: true,
            why: 'The American industry association\'s public resources on vinegar types, production methods, and basic chemistry. A neutral reference.',
          },
        ],
        tools: [
          {
            title: 'A large glass jar with a breathable cover',
            url: 'https://en.wikipedia.org/wiki/Mason_jar',
            why: 'Vinegar fermentation needs oxygen. A jar covered with a coffee filter or cheesecloth is the right vessel — a sealed jar will suffocate the Acetobacter.',
          },
          {
            title: 'A pH meter',
            url: 'https://en.wikipedia.org/wiki/PH_meter',
            why: 'A twenty-dollar digital pH meter tells you whether the vinegar has finished. Supermarket bottles hit pH 2.4; a home vinegar is done somewhere between 3.0 and 3.5.',
          },
          {
            title: 'An unpasteurized vinegar with mother (starter)',
            url: 'https://en.wikipedia.org/wiki/Mother_of_vinegar',
            why: 'Bragg\'s cider vinegar and many natural-wine vinegars include live mother. A quarter cup in a new batch starts the culture.',
          },
        ],
      },

      seeAlso: ['lacto', 'aged', 'wine', 'classics'],
      prereqs: ['lacto'],
      leadsTo: ['aged', 'classics', 'varietals'],

      chapterActivity: 'A quarterly "finish the bottle" vinegar start at a wine-bar kitchen — everyone brings the last glass of a bottle, the group combines them into a house vinegar, and splits the results in six months.',

      sources: [
        'https://en.wikipedia.org/wiki/Vinegar',
        'https://en.wikipedia.org/wiki/Acetic_acid_bacteria',
        'https://en.wikipedia.org/wiki/Balsamic_vinegar',
        'https://www.chelseagreen.com/product/the-art-of-fermentation/',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
