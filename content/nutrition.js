// content/nutrition.js
// Batch: B11-life-skills-I
// Last updated: 2026-04-23 by BATCH B11-life-skills-I
//
// Topics from data.js: macros, micronutrients

window.CONTENT = window.CONTENT || {};
window.CONTENT.nutrition = {
  subjectId: 'nutrition',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B11-life-skills-I',
  topics: {

    macros: {
      id: 'macros',
      name: 'Macronutrients',
      level: 'Beginner',
      dek: 'The three big buckets — protein, fat, and carbohydrate — that supply the calories every cell runs on.',
      readTime: '10 min',

      sections: ['Protein', 'Fat — the long rehabilitation', 'Carbohydrate', 'How much, in practice'],
      body: [
        { type: 'lead', text: 'In 1827, the English physician William Prout drew a chart with three columns — saccharinous, oleaginous, albuminous — and proposed that almost everything humans eat is built from these three classes of substance. Two centuries of biochemistry have refined his terms but not his structure. The macronutrients still do most of the work.' },
        { type: 'h2', text: 'Protein' },
        { type: 'p', text: 'Protein is what the body uses to build and repair itself: muscle, organ tissue, skin, hair, every enzyme that catalyzes every reaction. The body cannot store it the way it stores fat or glycogen, which is why eating it across the day matters more than eating a heroic quantity once. Most healthy adults need somewhere between 0.8 and 1.6 grams per kilogram of body weight per day, with the higher end appropriate for older adults and those doing serious resistance training. Animal sources contain all nine essential amino acids; plant eaters get the same result by combining a few different plant sources across the day.' },
        { type: 'h2', text: 'Fat — the long rehabilitation' },
        { type: 'p', text: 'For thirty years, between roughly 1970 and 2000, dietary fat was treated as the principal villain of the American diet. The case has not held up. The major intervention trials, including the Women\'s Health Initiative, found no clear benefit from cutting fat in isolation; what mattered was what the calories were replaced with. Olive oil and nuts are now linked to lower cardiovascular risk in the strongest dietary trials, including PREDIMED. Saturated fat is still treated cautiously, trans fats have been banned almost everywhere, and the consensus has settled on a relatively quiet middle: most fats are fine, ultra-processed fried things are not.' },
        { type: 'h2', text: 'Carbohydrate' },
        { type: 'p', text: 'Carbohydrate is the body\'s preferred fuel — easily broken down to glucose, easily burned. The honest distinction is not between carbohydrate and not, but between intact whole foods (oats, beans, fruit, potatoes) and ultra-processed concentrates (soda, white bread, candy). The first feed the body slowly and come bundled with fiber and micronutrients; the second produce the blood-sugar spikes and cravings that low-carb diets correctly identify as a problem. The diet that works is mostly the first kind, modestly of the second.' },
        { type: 'h2', text: 'How much, in practice' },
        { type: 'p', text: 'For nearly all healthy adults the simple instruction is: hit your protein, eat plants and minimally processed staples for the rest, drink water, and stop counting. Counting calories accurately for more than a few weeks is psychologically expensive and most studies show that, after a year, the people who counted weighed about the same as the people who did not. Habits beat arithmetic. The macronutrient table is most useful as a way to make sure protein is not being ignored.' },
        { type: 'callout', text: 'A pound of body fat stores about 3,500 calories. The math suggests rapid loss; the body has spent two million years learning to defeat the math. Slow change is the only kind that lasts.' },
      ],

      keyTerms: ['protein', 'amino acid', 'saturated fat', 'unsaturated fat', 'glucose', 'fiber', 'glycemic index', 'caloric density', 'satiety'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@HealthcareTriage',
            title: 'Healthcare Triage — full channel',
            channel: 'Healthcare Triage',
            duration: 'variable',
            featured: true,
            why: 'Aaron Carroll, professor of pediatrics at Indiana University, runs the most reliable health-news show on YouTube. The diet and nutrition playlists are calm, evidence-graded, and free of supplement marketing.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@nutritionmadesimple',
            title: 'Nutrition Made Simple — full channel',
            channel: 'Gil Carvalho, MD/PhD',
            duration: 'variable',
            featured: true,
            why: 'A research scientist with a clinical background reading the actual papers and explaining what they mean. The clearest single voice on nutrition science online.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=CrxqLgrXuO4',
            title: 'Sugar: The Bitter Truth',
            channel: 'University of California Television',
            duration: '1:29:27',
            featured: true,
            why: 'Robert Lustig\'s 2009 lecture that started the modern conversation about added sugar. Long, controversial in spots, and still essential.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@HubermanLab',
            title: 'Huberman Lab — Nutrition episodes',
            channel: 'Andrew Huberman',
            duration: 'variable',
            featured: false,
            why: 'A Stanford neurobiologist\'s long-form interviews. Use the nutrition episodes; treat the supplement segments with skepticism.',
          },
        ],
        books: [
          {
            title: 'In Defense of Food',
            author: 'Michael Pollan',
            year: 2008,
            url: 'https://en.wikipedia.org/wiki/In_Defense_of_Food',
            why: 'Seven words: "Eat food. Not too much. Mostly plants." The book is the slow argument behind the slogan.',
          },
          {
            title: 'How Not to Die',
            author: 'Michael Greger',
            year: 2015,
            url: 'https://en.wikipedia.org/wiki/Michael_Greger',
            why: 'A plant-forward physician\'s reading of the literature. Argumentative, heavily cited; you can disagree with the conclusion and still profit from the citations.',
          },
          {
            title: 'Why We Get Sick',
            author: 'Benjamin Bikman',
            year: 2020,
            url: 'https://en.wikipedia.org/wiki/Insulin_resistance',
            why: 'A clear modern primer on insulin resistance — the metabolic story behind most chronic disease in rich countries.',
          },
        ],
        articles: [
          {
            title: 'Nutrient',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Nutrient',
            why: 'Comprehensive reference for the chemistry of macros and micros.',
            year: null,
          },
          {
            title: 'The Nutrition Source',
            source: 'Harvard T.H. Chan School of Public Health',
            url: 'https://nutritionsource.hsph.harvard.edu/',
            why: 'The most trustworthy free nutrition resource on the web. Updated continuously, written by people who read the trials.',
            year: null,
          },
          {
            title: 'Dietary Guidelines for Americans',
            source: 'USDA / HHS',
            url: 'https://www.dietaryguidelines.gov/',
            why: 'The federal recommendations, revised every five years. Useful as a baseline; read the criticism alongside.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Stanford Introduction to Food and Health',
            provider: 'Coursera (Stanford)',
            url: 'https://www.coursera.org/learn/food-and-health',
            free: true,
            why: 'Maya Adam\'s short, lucid course. Audit free; clarifies the gap between what we know and what we are sold.',
          },
        ],
        tools: [
          {
            title: 'NIH Dietary Reference Intakes',
            url: 'https://ods.od.nih.gov/HealthInformation/Dietary_Reference_Intakes.aspx',
            why: 'The reference numbers — RDAs, ULs, AIs — for every nutrient, in one place.',
          },
        ],
      },

      seeAlso: ['micronutrients', 'biochem', 'cooking'],
      prereqs: [],
      leadsTo: ['micronutrients'],
      chapterActivity: 'A monthly potluck at a Harlem community kitchen, organized around one macronutrient at a time — beans-and-rice for protein in February, olive-oil tasting in May.',
      sources: [
        'https://en.wikipedia.org/wiki/Nutrient',
        'https://nutritionsource.hsph.harvard.edu/',
        'https://www.dietaryguidelines.gov/',
      ],
      verifiedAt: '2026-04-23',
    },

    micronutrients: {
      id: 'micronutrients',
      name: 'Micronutrients',
      level: 'Intermediate',
      dek: 'Vitamins and minerals — present in trace amounts, indispensable, and where most modern diets quietly fall short.',
      readTime: '11 min',

      sections: ['What they do', 'The deficiencies that still matter', 'Supplements — when and when not', 'Eating across the rainbow'],
      body: [
        { type: 'lead', text: 'In 1747 the Scottish naval surgeon James Lind ran what is widely called the first controlled clinical trial. He divided twelve scurvy-stricken sailors into six pairs and gave each pair a different treatment. The pair that got two oranges and a lemon a day was, within a week, fit for duty. Vitamin C had not been isolated; the word vitamin would not exist for another century and a half. But the principle was clear — that some substances, in tiny amounts, are the difference between life and a slow, ugly death.' },
        { type: 'h2', text: 'What they do' },
        { type: 'p', text: 'There are thirteen recognized vitamins and a longer list of essential minerals. None of them provide energy in the calorie sense; their job is to make the machinery of metabolism run. Iron carries oxygen in red blood cells. Calcium and vitamin D build bone. The B vitamins are co-factors in dozens of reactions; deficiencies show up as fatigue, anemia, neurological symptoms. Iodine, a trace element, is the reason American salt is iodized — adding it ended endemic goiter in the Great Lakes "goiter belt" within a single generation.' },
        { type: 'h2', text: 'The deficiencies that still matter' },
        { type: 'p', text: 'In rich countries, scurvy is rare and beriberi rarer still — but several deficiencies remain common. Vitamin D is widely low in anyone who works indoors at high latitude. Iron is commonly low in menstruating women and in vegetarians. B12 is reliably low in vegans without supplementation, because plants do not make it. Magnesium and potassium are widely under-consumed. The recommended dietary allowances were set conservatively to prevent disease, not to optimize health, but most of the population still does not meet them.' },
        { type: 'h2', text: 'Supplements — when and when not' },
        { type: 'p', text: 'Supplements are useful for documented deficiencies and a short list of common ones — D in winter, B12 for vegans, folate in early pregnancy, iron when blood work shows low ferritin. They are mostly useless or actively harmful for everyone else. Beta-carotene supplements raised lung-cancer risk in smokers in the CARET trial; vitamin E supplementation has shown small but real harms in several trials. The supplement industry is barely regulated; the labels are often inaccurate. Buy from a brand audited by USP or NSF if you must.' },
        { type: 'h2', text: 'Eating across the rainbow' },
        { type: 'p', text: 'The simplest practical rule is the one your grandmother gave you: eat a wide variety of plants in many colors. The colors are pigments — anthocyanins in berries, lycopene in tomatoes, beta-carotene in carrots — and they correlate roughly with the micronutrient profile. The Mediterranean and Okinawan diets have the longest record of population-level health for almost identical reasons: lots of plants, lots of variety, modest portions of everything else. The micronutrients come along for the ride.' },
        { type: 'callout', text: 'The half-life of vitamin C is about thirty minutes. The body uses what it can and excretes the rest. A megadose of vitamin C is mostly an investment in expensive urine.' },
      ],

      keyTerms: ['vitamin', 'mineral', 'co-factor', 'deficiency', 'recommended dietary allowance', 'fortification', 'phytochemical', 'bioavailability', 'antioxidant'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@nutritionmadesimple',
            title: 'Nutrition Made Simple — Vitamins & Minerals playlist',
            channel: 'Gil Carvalho, MD/PhD',
            duration: 'variable',
            featured: true,
            why: 'Carvalho\'s deep dives on D, B12, magnesium, iron — each video summarizing the trials behind the supplement aisle.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@HealthcareTriage',
            title: 'Healthcare Triage — full channel',
            channel: 'Healthcare Triage',
            duration: 'variable',
            featured: true,
            why: 'Aaron Carroll\'s short videos on what supplements actually do — and what they do not.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@PhysionicOfficial',
            title: 'Physionic — full channel',
            channel: 'Physionic',
            duration: 'variable',
            featured: true,
            why: 'Nicolas Verhoeven walks through individual nutrition papers in detail. Slower than other channels — that is the value.',
          },
        ],
        books: [
          {
            title: 'The Vitamin Cure',
            author: 'Andrew W. Saul',
            year: 2008,
            url: 'https://en.wikipedia.org/wiki/Orthomolecular_medicine',
            why: 'Read for the orthomolecular perspective and the bibliography; read with the skepticism modern trials warrant.',
          },
          {
            title: 'Vitamania',
            author: 'Catherine Price',
            year: 2015,
            url: 'https://en.wikipedia.org/wiki/Vitamania_(book)',
            why: 'The history of how vitamins became cultural objects — and why the supplement industry is what it is.',
          },
          {
            title: 'Modern Nutrition in Health and Disease',
            author: 'Catharine Ross et al.',
            year: 2020,
            url: 'https://en.wikipedia.org/wiki/Nutrition',
            why: 'The standard graduate-level textbook. The reference clinicians and dietitians actually cite.',
          },
        ],
        articles: [
          {
            title: 'Vitamin',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Vitamin',
            why: 'Comprehensive reference, well sourced, with the discovery history of each vitamin.',
            year: null,
          },
          {
            title: 'Vitamins and Minerals',
            source: 'Harvard T.H. Chan School of Public Health',
            url: 'https://nutritionsource.hsph.harvard.edu/vitamins/',
            why: 'Plain-English summary of every vitamin and mineral, with food sources and warning signs.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Stanford Introduction to Food and Health',
            provider: 'Coursera (Stanford)',
            url: 'https://www.coursera.org/learn/food-and-health',
            free: true,
            why: 'Free audit. Maya Adam covers the major micronutrient questions in the second half.',
          },
        ],
        tools: [
          {
            title: 'NIH Office of Dietary Supplements — Fact Sheets',
            url: 'https://ods.od.nih.gov/factsheets/list-all/',
            why: 'A short, careful fact sheet for every common supplement. Always read this before you take anything.',
          },
        ],
        primarySources: [
          {
            title: 'James Lind, A Treatise of the Scurvy (1753)',
            url: 'https://archive.org/details/treatiseonscurvy00lind',
            why: 'The book that founded clinical nutrition — one of the great primary documents in medicine.',
          },
        ],
      },

      seeAlso: ['macros', 'biochem', 'medicine'],
      prereqs: ['macros'],
      leadsTo: [],
      chapterActivity: 'A late-summer farmers-market walk in Union Square: pick a different colored vegetable each week, learn its phytochemical profile.',
      sources: [
        'https://en.wikipedia.org/wiki/Vitamin',
        'https://nutritionsource.hsph.harvard.edu/vitamins/',
        'https://ods.od.nih.gov/factsheets/list-all/',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
