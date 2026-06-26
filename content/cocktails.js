// content/cocktails.js
// Batch: B09-kitchen-arts
// Last updated: 2026-04-23 by BATCH B09-kitchen-arts
//
// Topics this subject must cover (from data.js):
//   Core: classics, technique

window.CONTENT = window.CONTENT || {};
window.CONTENT.cocktails = {
  subjectId: 'cocktails',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B09-kitchen-arts',
  topics: {

    classics: {
      id: 'classics',
      name: 'The Classics',
      level: 'Beginner',
      dek: 'A dozen recipes that have not been improved in a hundred years — and a history that ties them to the dark-wood bar where each was born.',
      readTime: '12 min',

      sections: ['Three, the perfect cocktail number', 'The Old Fashioned', 'The Martini', 'The Negroni and the Manhattan', 'Why the classics stayed'],
      body: [
        { type: 'lead', text: 'In May 1862, a bartender named Jerry Thomas published the first drinks book in America, titled plainly How to Mix Drinks, or, the Bon-Vivant\'s Companion. Thomas had traveled by steamer and stage up and down the East Coast working behind bars in New York, New Orleans, San Francisco, and Charleston, and his book was the first anyone had written down the recipes he had been mixing. A line in the introduction defined the word cocktail as a "bittered sling" — spirit, sugar, water, bitters. That four-ingredient formula is still, more than a century and a half later, the genetic code of most cocktails in a good bar.' },
        { type: 'h2', text: 'Three, the perfect cocktail number' },
        { type: 'p', text: 'The great classic recipes are, almost without exception, three-ingredient drinks. Spirit plus modifier plus accent. An Old Fashioned: whiskey, sugar, bitters. A Daiquiri: rum, lime, sugar. A Martini: gin, vermouth, bitters. A Manhattan: whiskey, vermouth, bitters. David Embury, a New York attorney who wrote the 1948 reference The Fine Art of Mixing Drinks, argued that a good cocktail needed one source of strength, one of softness, and one of seasoning. Every modern cocktail manual teaches the same rule. There are four- and five-ingredient drinks that work; there are very few that work better than their three-ingredient cousins.' },
        { type: 'h2', text: 'The Old Fashioned' },
        { type: 'p', text: 'The Old Fashioned is the drink Jerry Thomas would recognize unchanged. Two ounces of bourbon or rye, a teaspoon of sugar (or a barspoon of simple syrup), two dashes of Angostura bitters, stirred over ice, served with a twist of orange peel. The drink is called Old Fashioned because, by the 1880s, it was — new bartenders were layering complication onto their cocktails, and drinkers asked for the old-fashioned way. A well-made Old Fashioned is the cleanest demonstration of whiskey\'s character. It is also the most-sold classic cocktail in the world, as of the 2020s, six years running.' },
        { type: 'h2', text: 'The Martini' },
        { type: 'p', text: 'The Martini is the drink that argues with itself. Originally a 2:1 gin-to-vermouth stirred drink with orange bitters, the classic mid-century ratio moved to 5:1 and then, through the 1950s drift toward drier versions, to 7:1 or "breathe the vermouth over the gin." Vodka martinis displaced gin for a generation; the craft-cocktail revival pulled the ratio back to something the drink\'s nineteenth-century inventors would recognize. A modern bar\'s Martini is gin, a proper dry vermouth (Dolin or Noilly Prat), and a dash of bitters — stirred until the glass frosts, strained, garnished with a twist or an olive.' },
        { type: 'h2', text: 'The Negroni and the Manhattan' },
        { type: 'p', text: 'The Negroni — equal parts gin, sweet vermouth, Campari — was reportedly first mixed for Count Camillo Negroni in Florence in 1919 when he asked his barman to strengthen his Americano. The proportion is iconic: a one-to-one-to-one ratio is not a common cocktail structure, and the bitterness of Campari is what pulls the drink together. The Manhattan — rye or bourbon, sweet vermouth, bitters — is New York\'s signature, attributed to the Manhattan Club in the 1870s and canonical since. Both age beautifully. Both can be made in a home kitchen with three bottles.' },
        { type: 'h2', text: 'Why the classics stayed' },
        { type: 'p', text: 'A classic cocktail earns its staying power by being indestructible. The Old Fashioned survives bad whiskey and good, careful bartending and rushed. The Martini survives changes in ratio and changes in garnish. The Daiquiri survives cheap lime. The classics are robust because they were refined, over decades, into drinks that forgive everything but outright neglect. A modern craft bar\'s invention menu is a showcase of a particular bartender\'s style. The back of the classic list is the discipline. Every serious program keeps both open.' },
        { type: 'callout', text: 'A great cocktail is mostly ice. Ice manages dilution — too little and the drink is hot and harsh; too much and it is watery. Stirred drinks are diluted about twenty percent; shaken drinks, thirty. The ice is not garnish. It is an ingredient.' },
      ],

      keyTerms: ['cocktail', 'Old Fashioned', 'Martini', 'Manhattan', 'Negroni', 'Daiquiri', 'bitters', 'vermouth', 'spec', 'three-and-three'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TheEducatedBarfly',
            title: 'The Educated Barfly — classics playlist',
            channel: 'The Educated Barfly',
            duration: 'variable',
            featured: true,
            why: 'Leandro DiMonriva, a career Los Angeles bartender, films single-drink tutorials that are the most-watched cocktail videos on YouTube. His Old Fashioned video alone has set a generation\'s default.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@StevetheBartender',
            title: 'Steve the Bartender — full channel',
            channel: 'Steve the Bartender',
            duration: 'variable',
            featured: true,
            why: 'Steven Roennfeldt, an Australian bartender, is methodical and approachable. His "10 classic cocktails every home bar should know" is a one-hour evening\'s education.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@HowtoDrink',
            title: 'How to Drink — Greg Benson',
            channel: 'How to Drink',
            duration: 'variable',
            featured: true,
            why: 'Greg Benson\'s series pairs historical context with exact specs. His "the evolution of the martini" and "what is a cocktail" are mini-essays as much as tutorials.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@cocktailchemistry',
            title: 'Cocktail Chemistry — Nick Fisher',
            channel: 'Cocktail Chemistry',
            duration: 'variable',
            featured: false,
            why: 'Beautifully shot and scientifically curious — clear ice, syrups, and the physics of stirring. The counterpoint to the camera-on-bartender channels.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@AnderErickson',
            title: 'Anders Erickson — full channel',
            channel: 'Anders Erickson',
            duration: 'variable',
            featured: false,
            why: 'A Chicago bartender whose short-form tutorials are unusually honest about the quirks of each recipe. Good for someone who wants to understand rather than memorize.',
          },
        ],
        books: [
          {
            title: 'The Fine Art of Mixing Drinks',
            author: 'David A. Embury',
            year: 1948,
            url: 'https://en.wikipedia.org/wiki/The_Fine_Art_of_Mixing_Drinks',
            why: 'The most influential cocktail book of the twentieth century. Embury, a New York attorney, organized cocktails into six families and argued for principles rather than recipes. Still the cleanest thinking in the literature.',
          },
          {
            title: 'Imbibe! From Absinthe Cocktail to Whiskey Smash',
            author: 'David Wondrich',
            year: 2007,
            url: 'https://www.penguinrandomhouse.com/books/316540/imbibe-updated-and-revised-edition-by-david-wondrich/',
            why: 'The James Beard–winning biography of Jerry Thomas, with every one of his recipes annotated. The book that gave the modern cocktail revival its history.',
          },
          {
            title: 'The PDT Cocktail Book',
            author: 'Jim Meehan',
            year: 2011,
            url: 'https://www.hachettebookgroup.com/titles/jim-meehan/the-pdt-cocktail-book/9781402779237/',
            why: 'The recipe book from New York\'s Please Don\'t Tell. The canonical modern reference — illustrated, specced, and meticulously attributed.',
          },
          {
            title: 'Death & Co: Modern Classic Cocktails',
            author: 'David Kaplan, Nick Fauchald, Alex Day',
            year: 2014,
            url: 'https://www.penguinrandomhouse.com/books/221050/death-co-by-david-kaplan-nick-fauchald-and-alex-day/',
            why: 'The New York bar\'s recipes and, more importantly, its teaching on spec and build. The best-organized modern cocktail reference for a home bartender.',
          },
          {
            title: 'The Savoy Cocktail Book',
            author: 'Harry Craddock',
            year: 1930,
            url: 'https://www.abebooks.com/servlet/SearchResults?kn=savoy+cocktail+book+craddock',
            why: 'Craddock\'s American Bar at the Savoy Hotel in London was the place American bartenders exiled by Prohibition rebuilt the craft. The book is the Prohibition-era archive.',
          },
        ],
        articles: [
          {
            title: 'Old fashioned (cocktail)',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Old_fashioned_(cocktail)',
            why: 'History, canonical spec, and the regional variations (Wisconsin brandy, Kentucky bourbon). The best single reference on the drink.',
            year: null,
          },
          {
            title: 'Jerry Thomas (bartender)',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Jerry_Thomas_(bartender)',
            why: 'The father of American mixology. His 1862 Bar-Tender\'s Guide is the founding document of the literature.',
            year: null,
          },
          {
            title: 'Dale DeGroff',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Dale_DeGroff',
            why: 'The bartender who kicked off the modern cocktail revival at the Rainbow Room in the late 1980s. His Craft of the Cocktail is the bridge between Embury and the 2000s craft scene.',
            year: null,
          },
          {
            title: 'Difford\'s Guide',
            source: 'Difford\'s Guide',
            url: 'https://www.diffordsguide.com/',
            why: 'The largest searchable cocktail database on the internet. Simon Difford maintains tens of thousands of recipes with attributed history and variations.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'BarSmarts Advanced',
            provider: 'BarSmarts / Pernod Ricard',
            url: 'https://www.barsmarts.com/',
            free: true,
            why: 'A free online bartending curriculum created by Dale DeGroff, Doug Frost MS, Steve Olson, Andy Seymour, and Paul Pacult. The industry\'s standard entry-level education.',
          },
          {
            title: 'Tales of the Cocktail Foundation',
            provider: 'Tales of the Cocktail',
            url: 'https://talesofthecocktail.org/',
            free: false,
            why: 'The New Orleans cocktail conference every July, with hundreds of free and paid educational sessions archived on their site.',
          },
        ],
        tools: [
          {
            title: 'A jigger (1 oz / 2 oz)',
            url: 'https://en.wikipedia.org/wiki/Jigger_(bartending)',
            why: 'Every recipe in the classic canon is a specification. A jigger is not precious — it is the one tool that separates a home bar from a dorm room.',
          },
          {
            title: 'A mixing glass and a barspoon',
            url: 'https://en.wikipedia.org/wiki/Mixing_glass',
            why: 'Stirred drinks need a clear glass so you can watch dilution and a long-handled spoon to work the ice. The Japanese Yarai glass is the industry standard.',
          },
          {
            title: 'A Hawthorne strainer',
            url: 'https://en.wikipedia.org/wiki/Cocktail_strainer',
            why: 'The coiled-spring strainer for shaken drinks. Works with a shaker tin. Essential for a clean pour.',
          },
        ],
      },

      seeAlso: ['technique', 'wine', 'tasting', 'aged'],
      prereqs: [],
      leadsTo: ['technique'],

      chapterActivity: 'A monthly "three-bottle classics" hour at a Red Hook cocktail bar — one bottle of rye, one of gin, one of Campari, and every classic made from them.',

      sources: [
        'https://en.wikipedia.org/wiki/Old_fashioned_(cocktail)',
        'https://en.wikipedia.org/wiki/Jerry_Thomas_(bartender)',
        'https://en.wikipedia.org/wiki/Dale_DeGroff',
        'https://www.diffordsguide.com/',
      ],
      verifiedAt: '2026-04-23',
    },

    technique: {
      id: 'technique',
      name: 'Technique',
      level: 'Intermediate',
      dek: 'Stir, shake, build, muddle — four verbs, each with a rule about when it applies and why the answer is almost never "whatever".',
      readTime: '12 min',

      sections: ['The first rule: spirit-only stirs, citrus-containing shakes', 'Stirring', 'Shaking', 'Build and muddle', 'Ice and dilution, the hidden craft'],
      body: [
        { type: 'lead', text: 'In 1948, David Embury, a New York lawyer who took his cocktails more seriously than his legal practice, published a book whose opening chapters laid out an argument: a well-made cocktail was not a matter of creativity but of technique. He listed the mistakes — warm ice, bruised citrus, wrong strain — and then, methodically, the cures. The book was dismissed by some bartenders of the era as armchair theory. Every serious cocktail book written since has agreed with Embury. A bartender at the World Class bartending championships in 2025 will explain dilution curves in the same terms Embury did seventy years before.' },
        { type: 'h2', text: 'The first rule: spirit-only stirs, citrus-containing shakes' },
        { type: 'p', text: 'The simplest rule in the craft: if a drink contains only spirits, bitters, and sugar — Martini, Manhattan, Old Fashioned, Negroni — stir it. If a drink contains citrus, dairy, or egg — Daiquiri, Whiskey Sour, Gimlet, Ramos Gin Fizz — shake it. The reason is aesthetic and physical: stirring produces a silky, clear drink; shaking produces a textured, aerated one. A stirred sour is dull; a shaken Manhattan is cloudy. The ingredients tell you which verb applies.' },
        { type: 'h2', text: 'Stirring' },
        { type: 'p', text: 'A mixing glass filled two-thirds with ice, the ingredients poured in on top, a long barspoon worked smoothly around the inside of the glass. The motion is a quiet whirlpool — the ice circulates, the liquid chills, a small amount of water dilutes in. Thirty seconds is a rough target for a standard spec, though counting is a less reliable guide than a tasting spoon. The drink is ready when it tastes cold, diluted enough to round off the alcohol but still plainly strong. Strain into a chilled glass.' },
        { type: 'h2', text: 'Shaking' },
        { type: 'p', text: 'A Boston shaker — two tins seated together — is the professional tool. A Cobbler shaker (the three-piece with a built-in strainer) is a serviceable home alternative. Fill with ice about two-thirds, add the ingredients, seat the tins firmly, and shake hard for twelve to fifteen seconds. The goal is chill, dilution, and aeration — the froth on a Daiquiri or the white cap on a sour is protein and air, not marketing. Double-strain through a fine mesh if the drink is egg-white or has small citrus fibers. A hard shake looks violent. It is supposed to.' },
        { type: 'h2', text: 'Build and muddle' },
        { type: 'p', text: 'A built drink is made in its serving glass — a Mojito built over crushed ice, a Gin and Tonic built in a highball. Fewer dishes, simpler to execute, fewer places for things to go wrong. A muddled drink bruises a solid ingredient — usually herbs, fruit, or sugar — to release its oils. A Caipirinha starts muddled, with lime and sugar crushed under a wooden muddler before the cachaça is added. The key to muddling is firmness, not force. Pressing a mint leaf is right; pulverizing it releases chlorophyll and bitterness.' },
        { type: 'h2', text: 'Ice and dilution, the hidden craft' },
        { type: 'p', text: 'Dilution is not a bug. A three-ounce stirred cocktail served straight up has dissolved roughly half an ounce of water on its way to the glass. That water is the reason the drink tastes round instead of hot. Shaken drinks dilute faster — twenty-five to thirty percent by volume. Big, dense ice dilutes more slowly than small, cloudy ice, which is why a single large cube in an Old Fashioned lasts half an hour while the bar next door\'s crushed-ice version is watery in five minutes. The ice is half the recipe.' },
        { type: 'callout', text: 'A chilled glass matters more than most home bartenders believe. A cold martini poured into a warm glass is a warm martini within ninety seconds. Keep glasses in the freezer. Pull them out as you start the stir.' },
      ],

      keyTerms: ['dilution', 'stir', 'shake', 'muddle', 'double strain', 'Boston shaker', 'jigger', 'Hawthorne strainer', 'mise en place', 'Lewis bag'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TheEducatedBarfly',
            title: 'The Educated Barfly — technique playlist',
            channel: 'The Educated Barfly',
            duration: 'variable',
            featured: true,
            why: 'Leandro DiMonriva\'s "how to stir a cocktail" and "how to shake" are the most-viewed technique tutorials on YouTube. Real-time filming of professional practice.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@AnderErickson',
            title: 'Anders Erickson — technique fundamentals',
            channel: 'Anders Erickson',
            duration: 'variable',
            featured: true,
            why: 'Erickson\'s "five cocktail techniques every bartender should know" is a tight, well-filmed introduction to the verbs — with the honest tradeoffs of each.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@cocktailchemistry',
            title: 'Cocktail Chemistry — science of technique',
            channel: 'Cocktail Chemistry',
            duration: 'variable',
            featured: true,
            why: 'Nick Fisher\'s lab-grade videos on dilution rates, ice density, and stirring curves — the technical case for everything the classic bartenders knew by feel.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@DiffordsGuide',
            title: 'Difford\'s Guide — technique videos',
            channel: 'Difford\'s Guide',
            duration: 'variable',
            featured: false,
            why: 'The database\'s own video content, frequently featuring professional bartenders demonstrating signature drinks. Short, practical, tightly shot.',
          },
        ],
        books: [
          {
            title: 'Liquid Intelligence: The Art and Science of the Perfect Cocktail',
            author: 'Dave Arnold',
            year: 2014,
            url: 'https://www.norton.com/books/Liquid-Intelligence',
            why: 'The Booker & Dax/French Culinary Institute chef on the physics of a cocktail. The definitive modern technical reference — dilution, ice, centrifuges, and clarification.',
          },
          {
            title: 'The Fine Art of Mixing Drinks',
            author: 'David A. Embury',
            year: 1948,
            url: 'https://en.wikipedia.org/wiki/The_Fine_Art_of_Mixing_Drinks',
            why: 'Embury\'s opening chapters on technique remain the cleanest in the literature. Every modern book refines his argument rather than replacing it.',
          },
          {
            title: 'Death & Co: Modern Classic Cocktails',
            author: 'David Kaplan, Nick Fauchald, Alex Day',
            year: 2014,
            url: 'https://www.penguinrandomhouse.com/books/221050/death-co-by-david-kaplan-nick-fauchald-and-alex-day/',
            why: 'The technique section is the most visually comprehensive in any modern book — photographed step-by-step builds by the New York bar\'s team.',
          },
          {
            title: 'The PDT Cocktail Book',
            author: 'Jim Meehan',
            year: 2011,
            url: 'https://www.hachettebookgroup.com/titles/jim-meehan/the-pdt-cocktail-book/9781402779237/',
            why: 'Every recipe is specced with ice, technique, glassware, and garnish. Reading the specs is a short course in technique.',
          },
        ],
        articles: [
          {
            title: 'Cocktail',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Cocktail',
            why: 'Etymology, taxonomy, and the canonical drink-family trees. A good reference before Embury.',
            year: null,
          },
          {
            title: 'Mixing glass',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Mixing_glass',
            why: 'The tool — Japanese Yarai patterns, sizes, and the history of the bar implement. A small but important corner of the literature.',
            year: null,
          },
          {
            title: 'Difford\'s Guide — How to stir a cocktail',
            source: 'Difford\'s Guide',
            url: 'https://www.diffordsguide.com/encyclopedia/1070/bws/stirring-cocktails',
            why: 'Difford\'s written reference on the technique, with the history of the method and the working bartender\'s checklist.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'BarSmarts Advanced',
            provider: 'BarSmarts / Pernod Ricard',
            url: 'https://www.barsmarts.com/',
            free: true,
            why: 'The DeGroff/Frost/Olson/Pacult free curriculum covers technique with video demonstrations and a proctored exam at the end.',
          },
          {
            title: 'Beverage Alcohol Resource',
            provider: 'BAR 5-Day Program',
            url: 'https://www.barsmarts.com/',
            free: false,
            why: 'The industry\'s five-day intensive, taught by the same faculty. The entry-level professional certification most serious craft programs expect.',
          },
        ],
        tools: [
          {
            title: 'A Japanese mixing glass (Yarai pattern)',
            url: 'https://en.wikipedia.org/wiki/Mixing_glass',
            why: 'Thick, weighted, with a pour spout. The one stirring glass that never feels cheap. Cocktail Kingdom and Umami Mart both carry them.',
          },
          {
            title: 'Boston shaker (two tins)',
            url: 'https://en.wikipedia.org/wiki/Cocktail_shaker',
            why: 'Two fitted stainless tins. The professional standard — faster, easier to strain, and larger capacity than a cobbler shaker.',
          },
          {
            title: 'A Lewis bag and mallet',
            url: 'https://en.wikipedia.org/wiki/Lewis_bag',
            why: 'A canvas bag and a wooden mallet for crushing ice. The right tool for a Mint Julep and a Mai Tai; the small piece of equipment that separates a thoughtful home bar from a careless one.',
          },
          {
            title: 'A Cocktail Kingdom barspoon (11 inch)',
            url: 'https://en.wikipedia.org/wiki/Bar_spoon',
            why: 'A weighted, spiral-shafted long spoon for stirring. Length matters; a short spoon is for baking, not for mixing.',
          },
        ],
      },

      seeAlso: ['classics', 'tasting', 'aged', 'brewing'],
      prereqs: ['classics'],
      leadsTo: [],

      chapterActivity: 'A "four verbs" workshop at a Brooklyn Heights bar — one bartender, four drinks, each demonstrating one of stir, shake, build, muddle with the same two spirits.',

      sources: [
        'https://en.wikipedia.org/wiki/Cocktail',
        'https://en.wikipedia.org/wiki/Mixing_glass',
        'https://en.wikipedia.org/wiki/The_Fine_Art_of_Mixing_Drinks',
        'https://www.diffordsguide.com/',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
