// content/baking.js
// Batch: B09-kitchen-arts
// Last updated: 2026-04-23 by BATCH B09-kitchen-arts
//
// Topics this subject must cover (from data.js):
//   Core: bread, cookies, sourdough

window.CONTENT = window.CONTENT || {};
window.CONTENT.baking = {
  subjectId: 'baking',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B09-kitchen-arts',
  topics: {

    bread: {
      id: 'bread',
      name: 'Bread',
      level: 'Intermediate',
      dek: 'Four ingredients, three hours of waiting, and the oldest sustained conversation humans have with a single-celled organism.',
      readTime: '13 min',

      sections: ['Four ingredients, a lot of time', 'Why gluten matters', 'The fermentation that does the flavor', 'The oven spring', 'The home loaf'],
      body: [
        { type: 'lead', text: 'In a 2018 excavation on the northeastern edge of modern-day Jordan, at a site called Shubayqa 1, archaeologists sifted through the hearth of a stone shelter and found blackened crumbs. The charred fragments were wild-grain bread, baked on a hot stone fourteen thousand years ago, four millennia before agriculture. Humans were making bread before we knew how to farm the grain. We have been negotiating with yeast, in other words, since before civilization itself.' },
        { type: 'h2', text: 'Four ingredients, a lot of time' },
        { type: 'p', text: 'A loaf of country bread is flour, water, salt, and yeast — four ingredients whose proportions, in a baker\'s percentage, run something like 100 / 75 / 2 / 1. The gram scale is not optional. Volume measurements are the reason home bread is inconsistent; a cup of flour can vary by forty percent depending on how it was scooped. Every serious baker weighs. Every serious baker writes those weights on a sticky note on the oven door.' },
        { type: 'h2', text: 'Why gluten matters' },
        { type: 'p', text: 'Wheat contains two proteins — glutenin and gliadin — that, when mixed with water and worked mechanically, cross-link into a network called gluten. Gluten is what traps the carbon dioxide yeast produces; without it, the gas escapes and the loaf is flat. The long kneading that older cookbooks prescribe develops gluten mechanically; the long rests that modern no-knead recipes use develop it enzymatically, while you sleep. Both work. Both give you a loaf.' },
        { type: 'h2', text: 'The fermentation that does the flavor' },
        { type: 'p', text: 'Yeast fermentation produces carbon dioxide (the lift), ethanol (which mostly bakes off), and a crowd of aromatic byproducts — esters, alcohols, acids — that are almost the entire flavor of good bread. A fast loaf, two hours from mix to oven, rises the same amount as a slow one, but tastes thinner. A loaf fermented cold for twenty-four hours in the fridge has four times the flavor compounds. The math is simple: the more time you give the yeast, within reason, the more flavor you get for free.' },
        { type: 'h2', text: 'The oven spring' },
        { type: 'p', text: 'A shaped loaf, scored at the top, meets a 250°C oven and the trapped gas inside it suddenly expands. The crumb structure you see cut open is the record of that expansion — the tight spots are where the gluten held; the open holes are where it gave way. A properly hydrated loaf springs open along the score by an inch or more in the first ten minutes, then sets as the outer crust hardens. This is the moment a home baker stands in front of the oven with a flashlight and watches.' },
        { type: 'h2', text: 'The home loaf' },
        { type: 'p', text: 'Jim Lahey\'s 2006 no-knead recipe, published in the New York Times by Mark Bittman, showed home bakers that a long slow rise in a covered pot could produce a loaf better than the bakery\'s. Eighteen hours, a Dutch oven, and no kneading. The method changed home baking permanently, and it is still the right recipe for someone making their second loaf. The first loaf is harder, because the first loaf is always harder.' },
        { type: 'callout', text: 'Steam in the first ten minutes of baking is the difference between a bread-shaped cracker and a real loaf. A preheated Dutch oven with the lid on traps the loaf\'s own steam. No other home technique comes close.' },
      ],

      keyTerms: ['gluten', 'hydration', 'baker\'s percentage', 'autolyse', 'bulk fermentation', 'proof', 'oven spring', 'crumb structure', 'crust', 'scoring'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@KingArthurBakingCompany',
            title: 'King Arthur Baking — full channel',
            channel: 'King Arthur Baking Company',
            duration: 'variable',
            featured: true,
            why: 'The Vermont flour mill\'s educational channel is the best-resourced bread-teaching operation on the internet. Instructors from their Baking School film technique videos in a working bakery.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@aragusea',
            title: 'Adam Ragusea — no-knead bread series',
            channel: 'Adam Ragusea',
            duration: 'variable',
            featured: true,
            why: 'Ragusea\'s "the one bread everyone should know" and "why I use a Dutch oven" videos are the least-intimidating entry to the no-knead method.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@foodwishes',
            title: 'Chef John — bread episodes',
            channel: 'Food Wishes',
            duration: 'variable',
            featured: true,
            why: 'Chef John has been making bread on camera since 2007. His focaccia, no-knead loaf, and pizza-dough episodes are patient first introductions.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@bingingwithbabish',
            title: 'Basics with Babish — Bread',
            channel: 'Babish Culinary Universe',
            duration: 'variable',
            featured: false,
            why: 'Andrew Rea\'s Basics bread episodes are the most visually legible on YouTube. Overhead shots, clean cuts, every step at the right distance.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@joshuaweissman',
            title: 'Joshua Weissman — bread playlists',
            channel: 'Joshua Weissman',
            duration: 'variable',
            featured: false,
            why: 'Weissman trained in professional bakeries and the technique shows. His country-loaf and baguette videos are demanding but rewarding.',
          },
        ],
        books: [
          {
            title: 'On Food and Cooking: The Science and Lore of the Kitchen',
            author: 'Harold McGee',
            year: 1984,
            url: 'https://en.wikipedia.org/wiki/On_Food_and_Cooking',
            why: 'The chapter on doughs and batters is the canonical explanation of what gluten is and what fermentation does. Starting-point reading for any serious bread baker.',
          },
          {
            title: 'The Bread Baker\'s Apprentice',
            author: 'Peter Reinhart',
            year: 2001,
            url: 'https://www.peterreinhart.com/books/',
            why: 'The book that taught a generation of Americans how to make bakery-quality bread at home. The twelve-step method is now the American standard.',
          },
          {
            title: 'Flour Water Salt Yeast',
            author: 'Ken Forkish',
            year: 2012,
            url: 'https://kensartisan.com/flour-water-salt-yeast/',
            why: 'The Portland pizza maker\'s home-baker reference. Clearer on hydration math than any other book, and his cold-retard schedule is the one most home bakers end up using.',
          },
          {
            title: 'Tartine Bread',
            author: 'Chad Robertson',
            year: 2010,
            url: 'https://en.wikipedia.org/wiki/Tartine_Bakery',
            why: 'The book that moved the American country loaf from bakery to home kitchen. The first section\'s "basic country bread" recipe is the one every serious hobbyist learns.',
          },
          {
            title: 'Ratio: The Simple Codes Behind the Craft of Everyday Cooking',
            author: 'Michael Ruhlman',
            year: 2009,
            url: 'https://ruhlman.com/ratio-2/',
            why: 'Ruhlman\'s five-to-three ratio (flour to water, by weight) is the single most useful fact a new bread baker can memorize. Every loaf starts there.',
          },
        ],
        articles: [
          {
            title: 'Bread',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Bread',
            why: 'A serviceable overview, with a careful history section. The references at the bottom point to the food-archaeology papers on pre-agricultural bread.',
            year: null,
          },
          {
            title: 'Gluten',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Gluten',
            why: 'Protein chemistry and its medical context. A good place to read about why a well-hydrated dough builds gluten with minimal kneading.',
            year: null,
          },
          {
            title: 'King Arthur Baking — Bread Topic Hub',
            source: 'King Arthur Baking',
            url: 'https://www.kingarthurbaking.com/learn/guides/bread',
            why: 'An editorial hub with recipes, troubleshooting, and hydration calculators. The free equivalent of a bread-school course.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'King Arthur Baking School (free online classes)',
            provider: 'King Arthur Baking',
            url: 'https://www.kingarthurbaking.com/baking-school',
            free: true,
            why: 'King Arthur hosts a rotating schedule of free live virtual classes with their staff instructors, plus recorded sessions in an open library.',
          },
          {
            title: 'Professional Bread Baking',
            provider: 'SF Baking Institute',
            url: 'https://www.sfbi.com/bread-baking-courses',
            free: false,
            why: 'Michel Suas\'s school in South San Francisco trains professional bakers. His textbook Advanced Bread and Pastry is the American culinary-school standard.',
          },
        ],
        tools: [
          {
            title: 'A kitchen scale (accurate to 1 gram)',
            url: 'https://en.wikipedia.org/wiki/Kitchen_scale',
            why: 'Bread is the first kitchen task where weighing truly matters. An ounce-accurate scale is not good enough.',
          },
          {
            title: 'A Dutch oven',
            url: 'https://en.wikipedia.org/wiki/Dutch_oven',
            why: 'Preheated with the lid on, it traps the loaf\'s own steam for the first fifteen minutes of baking. No other home tool produces a comparable crust.',
          },
          {
            title: 'A lame (scoring blade)',
            url: 'https://en.wikipedia.org/wiki/Lame_(kitchen_tool)',
            why: 'A double-edged razor on a stick, angled for scoring loaves. A shallow cut controls where the loaf opens during oven spring.',
          },
        ],
      },

      seeAlso: ['sourdough', 'cookies', 'heat_transfer', 'lacto'],
      prereqs: ['heat_transfer'],
      leadsTo: ['sourdough', 'lamination', 'custards'],

      chapterActivity: 'A "loaf swap" at a Fort Greene community oven — six bakers, six Dutch ovens, one Saturday morning, and cross-sliced comparison of what long ferment does to crumb.',

      sources: [
        'https://en.wikipedia.org/wiki/Bread',
        'https://en.wikipedia.org/wiki/Gluten',
        'https://en.wikipedia.org/wiki/Tartine_Bakery',
        'https://www.kingarthurbaking.com/learn/guides/bread',
      ],
      verifiedAt: '2026-04-23',
    },

    cookies: {
      id: 'cookies',
      name: 'Cookies',
      level: 'Beginner',
      dek: 'The first recipe most home bakers ever touch — and a surprisingly deep introduction to emulsion, aeration, and the chemistry of sugar.',
      readTime: '10 min',

      sections: ['The creaming method', 'Why the butter temperature matters', 'The three levers: spread, chew, and crisp', 'The one-pan chocolate-chip cookie', 'A short defense of patience'],
      body: [
        { type: 'lead', text: 'In 1930, Ruth Wakefield ran the Toll House Inn, a converted tollhouse on the highway between Boston and New Bedford. The story that she ran out of baker\'s chocolate and substituted cut-up chunks of Nestlé bar is almost certainly wrong — she was a trained dietitian who developed recipes methodically — but the cookie she published in her 1938 cookbook became, through a licensing deal with Nestlé that traded her recipe for a lifetime supply of chocolate, the most-baked cookie on earth.' },
        { type: 'h2', text: 'The creaming method' },
        { type: 'p', text: 'Most cookie recipes begin the same way: beat room-temperature butter with sugar until the color lightens and the volume grows. What is actually happening is mechanical aeration — the sugar crystals cut air pockets into the butter, and those pockets expand in the oven. A cookie that has been creamed correctly rises into a soft, tender texture. A cookie made with melted butter spreads out and crisps. Both are legitimate, both are delicious, both come from the same ingredients. The difference is five minutes with a mixer.' },
        { type: 'h2', text: 'Why the butter temperature matters' },
        { type: 'p', text: 'Butter at 18°C — cool enough that a finger dents it but not so cool that the dent stays sharp — creams best. Warmer and it greases out; colder and it refuses to hold air. The same logic applies to the rested dough: chilled overnight, a cookie dough bakes into a thicker, chewier cookie with more Maillard browning, because the sugars and amino acids have had time to diffuse through the dough. The New York Times\' 2008 "perfect chocolate chip cookie" article made this a household technique; it remains the single biggest upgrade to a recipe most bakers already have.' },
        { type: 'h2', text: 'The three levers: spread, chew, and crisp' },
        { type: 'p', text: 'More sugar, warmer butter, and less flour give you a thin, crisp, lacy cookie. Less sugar, colder butter, more flour, and a taller scoop give you a thick, chewy cookie. Bread flour (more protein) yields chew; cake flour (less protein) yields tender crumble. Brown sugar holds moisture and adds caramel; white sugar crisps and browns. A beginning baker does not need to memorize this. A baker on their fifth batch learns to reach for each lever deliberately.' },
        { type: 'h2', text: 'The one-pan chocolate-chip cookie' },
        { type: 'p', text: 'Kenji López-Alt\'s brown-butter chocolate-chip cookie — butter browned in the pan, poured over sugar, whisked together, folded with chocolate — is the recipe most cooks end up making for the rest of their lives. Twenty minutes of work, an hour in the fridge, twelve minutes in the oven. The browned butter carries a nutty depth that ordinary creamed butter cannot produce. The method also happens to require exactly one mixing bowl.' },
        { type: 'h2', text: 'A short defense of patience' },
        { type: 'p', text: 'The single most common cookie mistake is underchilling the dough. A warm dough spreads before it sets; a cold dough holds its shape long enough for the outside to cook first and the inside to stay soft. Professional bakeries portion their dough and refrigerate it for at least twelve hours, sometimes thirty-six, before baking. The home version: scoop, refrigerate overnight on a sheet, bake straight from cold.' },
        { type: 'callout', text: 'Weigh your flour. A cup of all-purpose flour is anywhere from 120 to 170 grams depending on how you scoop. The difference between a great cookie recipe and a mediocre one is almost always the flour weight.' },
      ],

      keyTerms: ['creaming method', 'browning (Maillard)', 'brown butter', 'bread flour vs. cake flour', 'leavening', 'rest period', 'baker\'s percentage', 'sugar crystal'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@JKenjiLopezAlt',
            title: 'Kenji López-Alt — brown-butter chocolate-chip cookies',
            channel: 'J. Kenji López-Alt',
            duration: 'variable',
            featured: true,
            why: 'Kenji\'s Food Lab cookie recipe, filmed in his home kitchen. His argument for brown butter, aged dough, and a weighed recipe is the most persuasive on the internet.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ClaireSaffitz',
            title: 'Claire Saffitz — Dessert Person',
            channel: 'Claire Saffitz',
            duration: 'variable',
            featured: true,
            why: 'Saffitz, a Bon Appétit alumna with a professional pastry background, makes dessert demonstration videos that feel like a short college seminar. Her cookie episodes are patient and thorough.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@KingArthurBakingCompany',
            title: 'King Arthur Baking — cookie playlist',
            channel: 'King Arthur Baking Company',
            duration: 'variable',
            featured: true,
            why: 'King Arthur\'s test-kitchen staff film cookie techniques using the methodical pacing of a working bakery. Good on troubleshooting, which most YouTube channels skip.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@foodwishes',
            title: 'Chef John — cookie episodes',
            channel: 'Food Wishes',
            duration: 'variable',
            featured: false,
            why: 'Chef John\'s "chewy chocolate chip cookie" episode is the single ten-minute recipe most-bookmarked by beginners. For good reason.',
          },
        ],
        books: [
          {
            title: 'The All-New All-Purpose Joy of Cooking',
            author: 'Irma S. Rombauer, Marion Rombauer Becker, Ethan Becker',
            year: 1931,
            url: 'https://en.wikipedia.org/wiki/Joy_of_Cooking',
            why: 'The original American kitchen reference. The cookie chapter teaches the creaming method, the drop method, and the icebox method — the three shapes of the American cookie.',
          },
          {
            title: 'The Food Lab: Better Home Cooking Through Science',
            author: 'J. Kenji López-Alt',
            year: 2015,
            url: 'https://www.kenjilopezalt.com/the-food-lab',
            why: 'The chocolate-chip-cookie chapter is forty pages of tested variables — flour type, butter temperature, rest time, sugar ratio — the most rigorous cookie recipe in print.',
          },
          {
            title: 'Baking Illustrated',
            author: 'America\'s Test Kitchen',
            year: 2004,
            url: 'https://www.americastestkitchen.com/books/baking-illustrated',
            why: 'ATK\'s methodical, test-everything approach applied to home baking. Each cookie recipe documents the variables they tested and what worked.',
          },
          {
            title: 'Ratio: The Simple Codes Behind the Craft of Everyday Cooking',
            author: 'Michael Ruhlman',
            year: 2009,
            url: 'https://ruhlman.com/ratio-2/',
            why: 'Cookies are a 1:2:3 ratio (sugar:fat:flour) by weight; once you know the grammar, you can invent a new cookie on a Tuesday. Ruhlman\'s best pages are on exactly this.',
          },
        ],
        articles: [
          {
            title: 'Cookie',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Cookie',
            why: 'Good taxonomy — the seven cookie types, the etymology, the Toll House story. Reference-grade rather than practical.',
            year: null,
          },
          {
            title: 'The Science of the Best Chocolate Chip Cookies',
            source: 'Serious Eats',
            url: 'https://www.seriouseats.com/the-food-lab-the-best-chocolate-chip-cookies',
            why: 'Kenji\'s original Food Lab column, much longer than the cookbook version. The single best documentation of cookie variable-testing on the internet.',
            year: 2013,
          },
          {
            title: 'King Arthur Baking — Cookies Topic Hub',
            source: 'King Arthur Baking',
            url: 'https://www.kingarthurbaking.com/learn/guides/cookies',
            why: 'Troubleshooting, recipes, and substitutions from the Vermont flour mill\'s staff. A working bakery\'s reference, not a food magazine\'s.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'King Arthur Baking School — Cookie classes (online)',
            provider: 'King Arthur Baking',
            url: 'https://www.kingarthurbaking.com/baking-school/virtual',
            free: true,
            why: 'Rotating free and paid live sessions from the King Arthur instructors. The free cookie classes are some of the most-watched on the platform.',
          },
        ],
        tools: [
          {
            title: 'A portion scoop (#40, ~22 g)',
            url: 'https://en.wikipedia.org/wiki/Ice_cream_scoop',
            why: 'A spring-release portion scoop gives every cookie the same mass, which matters more for even baking than any other tool on this list.',
          },
          {
            title: 'Half-sheet pans with parchment',
            url: 'https://en.wikipedia.org/wiki/Sheet_pan',
            why: 'The aluminum half-sheet is the American restaurant standard. With parchment it\'s the single surface on which most American cookies are baked.',
          },
          {
            title: 'A stand mixer (or a hand mixer)',
            url: 'https://en.wikipedia.org/wiki/Stand_mixer',
            why: 'The creaming method wants five minutes of continuous beating, which is hard to do by hand without a workout and hard to do well without a timer. A cheap hand mixer works.',
          },
        ],
      },

      seeAlso: ['bread', 'custards', 'lamination', 'seasoning'],
      prereqs: [],
      leadsTo: ['bread', 'sourdough', 'custards'],

      chapterActivity: 'A "cookie lab" at a Ditmas Park kitchen — six bakers, one base recipe, each altering a single variable (flour, butter, rest, sugar) and tasting blind at the end.',

      sources: [
        'https://en.wikipedia.org/wiki/Cookie',
        'https://en.wikipedia.org/wiki/Joy_of_Cooking',
        'https://www.kingarthurbaking.com/learn/guides/cookies',
      ],
      verifiedAt: '2026-04-23',
    },

    sourdough: {
      id: 'sourdough',
      name: 'Sourdough',
      level: 'Advanced',
      dek: 'Bread leavened by a jar of wild yeast and bacteria you feed like a houseplant — the oldest living thing in most kitchens.',
      readTime: '14 min',

      sections: ['A jar that is alive', 'The two microbes', 'The schedule', 'Shaping, scoring, and patience', 'The starter as an heirloom'],
      body: [
        { type: 'lead', text: 'A flood in San Francisco in 1849 brought thousands of miners up the coast; the new city lost most of its wooden storefronts and ate mostly bread. The sourdough starters the gold miners carried in their packs produced a loaf tangier and longer-keeping than the yeasted bread of the East Coast — and the bacteria responsible, isolated by a San Francisco State University researcher in 1970, was named Lactobacillus sanfranciscensis in the city\'s honor. The starter itself was older than the city. A single lineage, through generations of bakers, can be centuries old.' },
        { type: 'h2', text: 'A jar that is alive' },
        { type: 'p', text: 'A sourdough starter is a thick flour-and-water slurry that has been colonized, mostly from the flour itself, by wild yeast and lactic-acid bacteria. Fed twice a day with equal weights of flour and water, it doubles between feedings, bubbles visibly, and smells sweetly acidic. An established starter is effectively an ecosystem in miniature: a stable community of organisms that rises reliably when you bake, survives a week in the fridge when you don\'t, and can, with care, outlive you.' },
        { type: 'h2', text: 'The two microbes' },
        { type: 'p', text: 'A healthy starter holds two kingdoms in balance. The yeast — Saccharomyces and Candida species, depending on the culture — produce carbon dioxide and ethanol. The bacteria — Lactobacillus species — produce lactic and acetic acid. The yeasts provide the lift; the bacteria provide the sour. A starter fed warm stays lactic (softer, yogurty sour). A starter fed cold drifts acetic (sharper, vinegar sour). A baker\'s choice, read in the loaf.' },
        { type: 'h2', text: 'The schedule' },
        { type: 'p', text: 'A sourdough country loaf is a two-day commitment. On day one, you feed the starter in the morning, mix the final dough in the afternoon, and fold it every half hour for three hours. At bedtime the dough goes into the refrigerator for a long cold retard. On day two morning, you pull, shape, let it warm and rise for an hour, and bake it hot in a Dutch oven. The whole operation is eight active minutes, spread across forty hours. This is the central trade: sourdough takes time, not work.' },
        { type: 'h2', text: 'Shaping, scoring, and patience' },
        { type: 'p', text: 'A well-shaped boule holds surface tension: the outer skin is tight, the interior stays supported through the long rise. Shaping badly is the most common reason a promising dough collapses in the oven. The score — a shallow cut with a lame, made just before the dough goes in — tells the loaf where to open. Without a score, the loaf splits where it pleases, which is rarely where you want. With a score, you get an ear: a raised flap of crust that opens and curls over the top of the loaf.' },
        { type: 'h2', text: 'The starter as an heirloom' },
        { type: 'p', text: 'Chad Robertson\'s starter at Tartine is said to be twenty years old. Carl Griffith\'s starter, carried west on the Oregon Trail in 1847, is still distributed as a dried crumb for anyone who wants a piece of it. A starter does not need to be ancient. It does need to be kept. Fed, refrigerated, rescued from the back of the fridge when it gets thin, handed down. It is the oldest living thing in most homes that own one, and the only ingredient in your kitchen that has a lineage.' },
        { type: 'callout', text: 'A sourdough starter failure is almost never fatal. If yours smells off, discard all but a tablespoon, add fifty grams of fresh flour and fifty of water, and feed twice a day for three days. Starters are forgiving; bakers are the ones who get nervous.' },
      ],

      keyTerms: ['wild yeast', 'lactic-acid bacteria', 'starter (levain)', 'autolyse', 'bulk fermentation', 'cold retard', 'boule', 'score', 'ear', 'hydration'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@thebreadcode',
            title: 'The Bread Code — sourdough technique playlists',
            channel: 'The Bread Code',
            duration: 'variable',
            featured: true,
            why: 'Hendrik Kleinwächter, a German home baker turned educator, runs the most rigorous free sourdough channel on YouTube. His starter-troubleshooting videos are the reference.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ThePerfectLoaf',
            title: 'Maurizio Leo — The Perfect Loaf',
            channel: 'The Perfect Loaf',
            duration: 'variable',
            featured: true,
            why: 'Maurizio Leo, a New Mexico home baker whose Tartine-adjacent schedules made serious sourdough accessible, films technique in his own kitchen with a working baker\'s calm.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@KingArthurBakingCompany',
            title: 'King Arthur Baking — sourdough fundamentals',
            channel: 'King Arthur Baking Company',
            duration: 'variable',
            featured: true,
            why: 'The Vermont mill\'s Martin Philip and staff run a sourdough class series. King Arthur\'s flour is what most American starter recipes are written for.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@FullProofBaking',
            title: 'Full Proof Baking — Kristen Dennis',
            channel: 'Full Proof Baking',
            duration: 'variable',
            featured: false,
            why: 'A former molecular biologist who applies lab discipline to home sourdough. Her "lamination" technique for high-hydration doughs is now standard in advanced home baking.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@joshuaweissman',
            title: 'Joshua Weissman — sourdough playlist',
            channel: 'Joshua Weissman',
            duration: 'variable',
            featured: false,
            why: 'Weissman\'s rigorous long-form sourdough videos are the most-watched beginner series on YouTube. His country-loaf recipe is the one most first-timers try.',
          },
        ],
        books: [
          {
            title: 'Tartine Bread',
            author: 'Chad Robertson',
            year: 2010,
            url: 'https://en.wikipedia.org/wiki/Tartine_Bakery',
            why: 'The book that brought the San Francisco country loaf into American home kitchens. The "basic country bread" chapter is the single most-followed sourdough recipe of the last fifteen years.',
          },
          {
            title: 'Flour Water Salt Yeast',
            author: 'Ken Forkish',
            year: 2012,
            url: 'https://kensartisan.com/flour-water-salt-yeast/',
            why: 'The clearest American home-baker sourdough book. Forkish\'s time-scheduling tables let a working person plan a loaf around a weekend.',
          },
          {
            title: 'The Sourdough Framework',
            author: 'Hendrik Kleinwächter',
            year: 2024,
            url: 'https://www.the-sourdough-framework.com/',
            why: 'A free, open-source, continually updated scientific sourdough book. The author runs The Bread Code channel and the book is effectively a distillation of a decade of his experiments.',
          },
          {
            title: 'The Rye Baker',
            author: 'Stanley Ginsberg',
            year: 2016,
            url: 'https://www.theryebaker.com/',
            why: 'Sourdough is older than wheat; the rye traditions of Central and Eastern Europe are where the craft most clearly lives. Ginsberg\'s book is the only English-language reference.',
          },
          {
            title: 'On Food and Cooking',
            author: 'Harold McGee',
            year: 1984,
            url: 'https://en.wikipedia.org/wiki/On_Food_and_Cooking',
            why: 'McGee on fermentation is the cleanest explanation of what yeast and bacteria are doing to the dough, and why a cold retard makes a different loaf from a warm one.',
          },
        ],
        articles: [
          {
            title: 'Sourdough',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Sourdough',
            why: 'History, microbiology, and the San Francisco Lactobacillus story. Good references at the bottom for further reading.',
            year: null,
          },
          {
            title: 'Maintain Your Sourdough Starter (The Perfect Loaf)',
            source: 'The Perfect Loaf',
            url: 'https://www.theperfectloaf.com/7-rules-for-maintaining-a-healthy-sourdough-starter/',
            why: 'Maurizio Leo\'s seven rules, with photos. The most-shared starter guide on the internet.',
            year: null,
          },
          {
            title: 'Maintaining Your Sourdough Starter',
            source: 'King Arthur Baking',
            url: 'https://www.kingarthurbaking.com/blog/2017/04/26/maintaining-sourdough-starter',
            why: 'The Vermont mill\'s most-referenced sourdough article. Covers feeding schedules, float tests, and common failure modes.',
            year: 2017,
          },
        ],
        courses: [
          {
            title: 'Sourdough Fundamentals (King Arthur Baking School)',
            provider: 'King Arthur Baking',
            url: 'https://www.kingarthurbaking.com/baking-school',
            free: false,
            why: 'King Arthur\'s cohort-based online and in-person sourdough classes. Taught by the baking-school instructors; free live Q&A sessions are regular.',
          },
          {
            title: 'Perfect Loaf Challenge (free course)',
            provider: 'The Bread Code',
            url: 'https://breadco.de/challenge',
            free: true,
            why: 'Hendrik Kleinwächter\'s free ten-day starter-through-first-loaf course. A spreadsheet, a schedule, and one daily email.',
          },
        ],
        tools: [
          {
            title: 'A quart-size jar with a loose lid',
            url: 'https://en.wikipedia.org/wiki/Mason_jar',
            why: 'Glass, see-through, rubber band at the feed line so you can watch the starter rise. A canning jar with the lid resting loose is all most home bakers use.',
          },
          {
            title: 'A banneton (proofing basket)',
            url: 'https://en.wikipedia.org/wiki/Banneton',
            why: 'A linen-lined cane basket for the final shaped rise. Gives the loaf its signature ringed appearance and keeps high-hydration doughs from flattening.',
          },
          {
            title: 'A bench scraper',
            url: 'https://en.wikipedia.org/wiki/Bench_scraper',
            why: 'A stainless rectangle the size of a paperback. For dividing, shaping, cleaning the bench, lifting wet dough — the one tool that works in every step.',
          },
        ],
      },

      seeAlso: ['bread', 'lacto', 'fresh_cheese', 'vinegar'],
      prereqs: ['bread'],
      leadsTo: ['lamination', 'lacto', 'vinegar'],

      chapterActivity: 'A quarterly "starter share" at a Crown Heights kitchen — bakers bring a tablespoon of their starter, label its age and feeding schedule, and trade for a neighbor\'s.',

      sources: [
        'https://en.wikipedia.org/wiki/Sourdough',
        'https://en.wikipedia.org/wiki/Tartine_Bakery',
        'https://www.theperfectloaf.com/',
        'https://www.the-sourdough-framework.com/',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
