// content/gardening.js
// Batch: B12-life-skills-II-outdoor
// Last updated: 2026-04-23 by BATCH B12-life-skills-II-outdoor
//
// Topics from data.js: soil, veggies, perennials

window.CONTENT = window.CONTENT || {};
window.CONTENT.gardening = {
  subjectId: 'gardening',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B12-life-skills-II-outdoor',
  topics: {

    soil: {
      id: 'soil',
      name: 'Soil',
      level: 'Beginner',
      dek: 'Every gardening question is, at root, a soil question — and a healthy garden is mostly a healthy six inches under your feet.',
      readTime: '10 min',

      sections: ['What soil actually is', 'Texture, structure, biology', 'Reading your soil', 'Building it back'],
      body: [
        { type: 'lead', text: 'In 1881, Charles Darwin published the last book of his life. It was not about evolution. It was about earthworms — a four-hundred-page meditation on the small invertebrates that, he argued, had quietly built the topsoil of England by passing it through their bodies. Darwin\'s estimate, that worms move tens of tons of soil per acre per year, has since been confirmed across many landscapes. The garden begins, as he saw it, in the dark and silent labor of what is underneath.' },
        { type: 'h2', text: 'What soil actually is' },
        { type: 'p', text: 'Soil is not dirt. A healthy soil is roughly forty-five percent mineral particles, five percent organic matter, twenty-five percent water, and twenty-five percent air, with a population of microbes and small animals that, by mass, exceeds the population of large animals on the surface. The mineral fraction comes from rock, weathered over thousands of years; the organic fraction from plants and animals decomposing into humus. Plants do not eat soil. They eat the dissolved minerals, water, and microbially derived compounds that move through it. The garden you see is the visible part of an enormous, mostly invisible system.' },
        { type: 'h2', text: 'Texture, structure, biology' },
        { type: 'p', text: 'A useful soil has three properties. Texture — the relative proportion of sand, silt, and clay — you can change only slowly. Structure — how those particles aggregate into crumbs that hold water and let roots through — you can change quickly with organic matter and the right tillage practices. Biology — the worms, fungi, bacteria, nematodes — you build by feeding them: compost, mulch, cover crops, and a refusal to dose them with broad-spectrum chemicals. The fungal network of mycorrhizae alone, partnering with the roots of most plants, can extend their reach for water and phosphorus by an order of magnitude.' },
        { type: 'h2', text: 'Reading your soil' },
        { type: 'p', text: 'Two cheap tests answer most beginning questions. The first is a soil pH test from a hardware store; most plants want roughly 6.0 to 7.0, blueberries want 4.5 to 5.5, lavender wants 7.0 to 8.0. The second is a sedimentation jar — soil and water shaken in a clear jar, allowed to settle for a day. The layers tell you the sand-silt-clay ratio. For anything more, send a sample to your state\'s land-grant university extension service for under twenty dollars; they will send back a full nutrient profile.' },
        { type: 'h2', text: 'Building it back' },
        { type: 'p', text: 'Most American garden soil is depleted by a century of monoculture lawn or construction-site stripping. The repair is straightforward: a two-to-three-inch layer of compost worked in once a year, mulch on top to keep moisture in and weeds down, and a strict ban on the rototiller, which destroys the soil structure you are trying to build. Three years of this and almost any soil starts producing food. The lazy version — sheet-mulching, lasagna gardening — works almost as well with even less digging.' },
        { type: 'callout', text: 'A square foot of healthy soil contains more living organisms than there are humans on Earth. Almost everything you do as a gardener either feeds them or starves them.' },
      ],

      keyTerms: ['soil texture', 'soil structure', 'humus', 'pH', 'mycorrhiza', 'cation exchange', 'organic matter', 'tilth'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@selfsufficientme',
            title: 'Self Sufficient Me — full channel',
            channel: 'Mark Valencia',
            duration: 'variable',
            featured: true,
            why: 'An Australian backyard gardener who teaches the basics — soil building, composting, raised beds — at a working-garden pace.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@DavidTheGood',
            title: 'David the Good — full channel',
            channel: 'David Goodman',
            duration: 'variable',
            featured: true,
            why: 'A composting and tropical-gardening evangelist with a deep practical bench. The "Compost Everything" videos are a useful counterpoint to fussier methods.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@BackToReality',
            title: 'Back to Reality — full channel',
            channel: 'Back to Reality',
            duration: 'variable',
            featured: true,
            why: 'A working homesteader on soil-building from scratch on poor land. Honest about what works in year one versus year five.',
          },
          {
            id: 'A0Mh1iIDcdg',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=A0Mh1iIDcdg',
            title: 'Symphony of the Soil (trailer)',
            channel: 'Lily Films',
            duration: '2:31',
            featured: false,
            why: 'Deborah Koons Garcia\'s feature documentary on soil. The full film is worth tracking down through a library.',
          },
        ],
        books: [
          {
            title: 'Rodale\'s All-New Encyclopedia of Organic Gardening',
            author: 'Fern Marshall Bradley & Barbara W. Ellis',
            year: 1992,
            url: 'https://en.wikipedia.org/wiki/Rodale,_Inc.',
            why: 'The standard American reference for working organic gardens. Six hundred pages; the soil chapter alone is worth the shelf space.',
          },
          {
            title: 'Teaming with Microbes',
            author: 'Jeff Lowenfels & Wayne Lewis',
            year: 2010,
            url: 'https://en.wikipedia.org/wiki/Mycorrhizae',
            why: 'The book that made the soil-food-web understandable to home gardeners. Now in a third edition.',
          },
          {
            title: 'The Formation of Vegetable Mould Through the Action of Worms',
            author: 'Charles Darwin',
            year: 1881,
            url: 'https://en.wikipedia.org/wiki/The_Formation_of_Vegetable_Mould,_through_the_Action_of_Worms',
            why: 'Darwin\'s last book. The originating modern text for soil biology, and a beautiful example of patient observation.',
          },
        ],
        articles: [
          {
            title: 'Soil',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Soil',
            why: 'The most comprehensive free reference, with the chemistry, biology, and history.',
            year: null,
          },
          {
            title: 'Soils — RHS Advice',
            source: 'Royal Horticultural Society',
            url: 'https://www.rhs.org.uk/soil-composts-mulches/soil-types',
            why: 'The British standard. The clearest free guide to soil types and what to plant in each.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'University Extension — Soil Basics',
            provider: 'University of Minnesota Extension',
            url: 'https://extension.umn.edu/yard-and-garden',
            free: true,
            why: 'Free, regionally accurate, and run by working soil scientists. Find your own state\'s land-grant equivalent.',
          },
        ],
        primarySources: [
          {
            title: 'Darwin, The Formation of Vegetable Mould (full text)',
            url: 'https://www.gutenberg.org/ebooks/2355',
            why: 'Project Gutenberg\'s free public-domain edition of the Darwin worm book.',
          },
        ],
      },

      seeAlso: ['veggies', 'perennials', 'composting'],
      prereqs: [],
      leadsTo: ['veggies'],
      chapterActivity: 'A March soil-test Saturday at a Brooklyn community garden — bring a jar of soil; an extension volunteer demonstrates pH testing and the sedimentation jar; this comes alive in early spring as beds are being readied.',
      sources: [
        'https://en.wikipedia.org/wiki/Soil',
        'https://www.rhs.org.uk/soil-composts-mulches/soil-types',
        'https://extension.umn.edu/yard-and-garden',
      ],
      verifiedAt: '2026-04-23',
    },

    veggies: {
      id: 'veggies',
      name: 'Vegetable Gardening',
      level: 'Intermediate',
      dek: 'Most of what most gardeners grow has been refined for thousands of years to want exactly the conditions a small garden can give it.',
      readTime: '11 min',

      sections: ['Starting from seed', 'The seasons of a vegetable bed', 'A short list to start with', 'Pests and patience'],
      body: [
        { type: 'lead', text: 'In 1812 a Massachusetts schoolteacher named David Landreth published the first American vegetable seed catalog. His list ran to less than a hundred varieties. The Bailey Hortorium\'s 1976 census put the number of vegetable cultivars sold in the United States at over twelve thousand. The wealth has come at a cost — most home gardeners now grow varieties bred for industrial agriculture, not for a small bed in good light. The first useful move for a new vegetable gardener is to seek out the heirloom seed catalogs that sell varieties bred for flavor, not shipping.' },
        { type: 'h2', text: 'Starting from seed' },
        { type: 'p', text: 'Almost any vegetable can be started from seed cheaper than from a nursery start, with a wider choice of varieties. The basic kit: a seed-starting mix (not garden soil), some shallow trays, a sunny window or an LED shop light, and a willingness to read the back of the packet. Most vegetables fall into one of two camps: cool-season crops (lettuce, spinach, peas, brassicas) want to be in the ground six weeks before the last frost; warm-season crops (tomatoes, peppers, squash, beans) want to wait until the soil is at least sixty degrees. The frost-date map for your zip code is the most important calendar in a vegetable gardener\'s life.' },
        { type: 'h2', text: 'The seasons of a vegetable bed' },
        { type: 'p', text: 'A productive bed runs three crops a year in most temperate climates: a spring round (peas, lettuce, radishes), a summer round (tomatoes, beans, squash), a fall round (more lettuce, kale, garlic planted for next summer). The bed never sits empty for long; that is how you build soil and discourage weeds. Eliot Coleman\'s work in Maine demonstrated that an unheated cold frame can extend the season by months at either end. The successful kitchen garden is less about size than about pacing.' },
        { type: 'h2', text: 'A short list to start with' },
        { type: 'p', text: 'Almost every experienced vegetable gardener gives the same advice to beginners: start small, start with what you actually want to eat, and start with the easy crops. Tomatoes, basil, lettuce, beans, zucchini, kale, garlic, herbs — these are forgiving, productive, and worth the bed space. Avoid corn (greedy, demanding, easily disappointed), cauliflower (fussy), and celery (a vanity project) until you have a few seasons under your belt. A four-by-eight raised bed can feed a household significantly through the summer if planted well and watered consistently.' },
        { type: 'h2', text: 'Pests and patience' },
        { type: 'p', text: 'Every garden gets hit by something — aphids, hornworms, squash bugs, slugs, the neighbor\'s rabbit, a midsummer fungal blight. Two principles cover most of what you need to know. First, healthy plants in healthy soil resist most pests; the diseased and weak ones are usually marked for removal anyway. Second, a balanced garden — diverse plantings, flowers for pollinators, no broad-spectrum pesticides — develops its own ecosystem of predators within a couple of seasons. Patience here is not optional. The first year of a garden is mostly survival; year three is when the garden begins to be itself.' },
        { type: 'callout', text: 'The single most useful tool for a vegetable garden is not a tool at all. It is a notebook. Note what you planted, when, and how it did. Year three you will start consulting your own records more than any book.' },
      ],

      keyTerms: ['hardiness zone', 'frost date', 'cool-season crop', 'warm-season crop', 'succession planting', 'heirloom variety', 'companion planting', 'cover crop'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@selfsufficientme',
            title: 'Self Sufficient Me — full channel',
            channel: 'Mark Valencia',
            duration: 'variable',
            featured: true,
            why: 'A backyard gardener who walks through actual vegetable beds, season by season, with practical fixes when things go wrong.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@DavidTheGood',
            title: 'David the Good — full channel',
            channel: 'David Goodman',
            duration: 'variable',
            featured: true,
            why: 'Goodman\'s "grow or die" channel emphasizes resilience and resourcefulness over fussiness — useful corrective to gear-heavy gardening media.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@charlesdowding1nodig',
            title: 'Charles Dowding — No Dig Gardening',
            channel: 'Charles Dowding',
            duration: 'variable',
            featured: true,
            why: 'The leading practitioner of no-dig vegetable gardening, with three decades of side-by-side trials. Calm, evidence-based, and surprisingly meditative.',
          },
        ],
        books: [
          {
            title: 'The New Vegetable & Herb Expert',
            author: 'D. G. Hessayon',
            year: 1997,
            url: 'https://en.wikipedia.org/wiki/D._G._Hessayon',
            why: 'The Hessayon Expert series has sold over fifty million copies. Each crop on its own page, with a sketch, a sowing chart, and a troubleshooter. The reference for the working bed.',
          },
          {
            title: 'The Vegetable Gardener\'s Bible',
            author: 'Edward C. Smith',
            year: 2009,
            url: 'https://en.wikipedia.org/wiki/Vegetable_farming',
            why: 'The standard American reference for raised-bed gardens. Photo-heavy, well-organized, and appropriate for beginners.',
          },
          {
            title: 'The Year-Round Vegetable Gardener',
            author: 'Niki Jabbour',
            year: 2011,
            url: 'https://en.wikipedia.org/wiki/Eliot_Coleman',
            why: 'Jabbour\'s adaptation of Eliot Coleman\'s methods for cold climates. The clearest book on growing in shoulder seasons.',
          },
        ],
        articles: [
          {
            title: 'Vegetable farming',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Vegetable_farming',
            why: 'Comprehensive reference on cultivation, with the history of the major vegetable crops.',
            year: null,
          },
          {
            title: 'Vegetable Gardening — RHS Advice',
            source: 'Royal Horticultural Society',
            url: 'https://www.rhs.org.uk/vegetables',
            why: 'The British standard. Crop-by-crop sowing dates, common problems, free.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Vegetable Gardening — UMN Extension',
            provider: 'University of Minnesota Extension',
            url: 'https://extension.umn.edu/vegetables',
            free: true,
            why: 'Free, regionally accurate, written by extension agronomists. Find your own state\'s equivalent.',
          },
        ],
        tools: [
          {
            title: 'USDA Plant Hardiness Zone Map',
            url: 'https://planthardiness.ars.usda.gov/',
            why: 'The first thing to look up. Determines almost every planting decision in a temperate climate.',
          },
        ],
      },

      seeAlso: ['soil', 'perennials', 'composting'],
      prereqs: ['soil'],
      leadsTo: ['perennials'],
      chapterActivity: 'A late-April seed-starting evening at a Brooklyn community garden — bring a tray, leave with tomato and pepper starts; the season begins eight weeks before the last frost in early May.',
      sources: [
        'https://en.wikipedia.org/wiki/Vegetable_farming',
        'https://www.rhs.org.uk/vegetables',
        'https://planthardiness.ars.usda.gov/',
      ],
      verifiedAt: '2026-04-23',
    },

    perennials: {
      id: 'perennials',
      name: 'Perennials',
      level: 'Intermediate',
      dek: 'Plants that come back year after year reward patience the way annuals reward attention — and the longest gardens in the world are mostly perennial.',
      readTime: '10 min',

      sections: ['What perennial means', 'The first year sleeps', 'Designing for succession', 'Native plants and the modern garden'],
      body: [
        { type: 'lead', text: 'In 1936 the British plantswoman Vita Sackville-West and her husband, Harold Nicolson, began planting the garden at Sissinghurst Castle. Eighty-five years later, hundreds of thousands of visitors a year still walk through the rooms of perennial border she designed — the white garden in moonlight, the cottage garden in summer dusk. The garden is older than most of the people in it. That is what perennials make possible: a garden that grows along a different clock from the gardener.' },
        { type: 'h2', text: 'What perennial means' },
        { type: 'p', text: 'A perennial is a plant whose roots persist through winter and resprout in spring, year after year. Some live three or four seasons (delphiniums); some live a human lifetime (peonies, hostas); some appear to live forever (English oaks, the giant sequoias). Annuals, by contrast, complete their entire life cycle in one season. Biennials take two. Almost every garden mixes them: annuals for instant color, biennials for foxgloves and hollyhocks, perennials for the bones of the garden that come back without being replanted.' },
        { type: 'h2', text: 'The first year sleeps' },
        { type: 'p', text: 'There is a saying among perennial gardeners: "First year sleeps, second year creeps, third year leaps." Most perennials spend their first season establishing roots underground while the visible plant looks disappointing. The second year produces modest growth. The third year, the plant comes into its true scale. Beginning gardeners almost always overplant because the first year looks empty; veteran gardeners deliberately plant young perennials too far apart, knowing what they will become. Patience here is not virtue; it is technique.' },
        { type: 'h2', text: 'Designing for succession' },
        { type: 'p', text: 'A perennial border that holds interest from April through October needs plants that bloom in different windows: hellebores and bulbs in early spring, peonies and irises in late spring, daylilies and phlox in summer, asters and grasses in fall. Gertrude Jekyll, the great Edwardian designer, mapped these in colored notation and arranged them by both height and bloom time so that a sweep of the eye in any week landed on a coherent picture. Modern naturalistic designers — Piet Oudolf, Nigel Dunnett — have extended the idea with grasses and seedheads that carry the garden through winter as well.' },
        { type: 'h2', text: 'Native plants and the modern garden' },
        { type: 'p', text: 'Doug Tallamy\'s research at the University of Delaware reframed the perennial garden over the past two decades: most introduced ornamentals support almost no native insects, and the collapse of native insect populations in suburban America is partly a story of gardens planted from European nurseries. The current best practice is to anchor a garden with regional natives — coneflowers, milkweeds, asters, native grasses — and use ornamentals as accents. The garden becomes prettier to a wider population than just the gardener.' },
        { type: 'callout', text: 'The most reliable perennial in most American gardens is the daylily. The most overplanted is also the daylily. The lesson generalizes: the easy plants become invasive; the difficult ones become beloved.' },
      ],

      keyTerms: ['perennial', 'biennial', 'herbaceous', 'rhizome', 'division', 'naturalistic planting', 'succession of bloom', 'pollinator garden'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@gardeneranswer',
            title: 'Garden Answer — full channel',
            channel: 'Laura LeBoutillier',
            duration: 'variable',
            featured: true,
            why: 'A nursery-trained designer working a real garden week by week. The perennial-design videos are unusually visual.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@PieterOudolf',
            title: 'Piet Oudolf interviews & lectures',
            channel: 'various',
            duration: 'variable',
            featured: true,
            why: 'The leading living perennial designer. His public lectures are worth tracking down through Vimeo and PBS.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@MonteDon',
            title: 'Gardeners\' World with Monty Don',
            channel: 'BBC',
            duration: 'variable',
            featured: true,
            why: 'The long-running BBC show. Monty Don\'s perennial-border episodes are the slow-television canon of the field.',
          },
        ],
        books: [
          {
            title: 'The Well-Tempered Garden',
            author: 'Christopher Lloyd',
            year: 1970,
            url: 'https://en.wikipedia.org/wiki/Christopher_Lloyd_(gardener)',
            why: 'Lloyd was the most witty and opinionated garden writer of the twentieth century. The book that taught modern English gardeners how to write about perennials.',
          },
          {
            title: 'Bringing Nature Home',
            author: 'Douglas W. Tallamy',
            year: 2007,
            url: 'https://en.wikipedia.org/wiki/Douglas_W._Tallamy',
            why: 'The book that started the native-plant movement in American suburban gardens. Empirical, persuasive, and available in updated editions.',
          },
          {
            title: 'Planting: A New Perspective',
            author: 'Piet Oudolf & Noel Kingsbury',
            year: 2013,
            url: 'https://en.wikipedia.org/wiki/Piet_Oudolf',
            why: 'The naturalistic-planting bible. Plant lists, photographs, and the long argument for grasses and seedheads as design elements.',
          },
        ],
        articles: [
          {
            title: 'Perennial plant',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Perennial_plant',
            why: 'Comprehensive reference, with the botanical taxonomy and the major garden categories.',
            year: null,
          },
          {
            title: 'Herbaceous Perennials — RHS Advice',
            source: 'Royal Horticultural Society',
            url: 'https://www.rhs.org.uk/plants-blogs/plants/october-2017/herbaceous-perennials',
            why: 'The British standard for choosing, planting, and dividing perennials.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Perennial Gardens',
            provider: 'University of Minnesota Extension',
            url: 'https://extension.umn.edu/yard-and-garden',
            free: true,
            why: 'Free, regional, and continuously updated. Find your land-grant university\'s extension service for hyperlocal versions.',
          },
        ],
        tools: [
          {
            title: 'National Wildlife Federation — Native Plant Finder',
            url: 'https://nativeplantfinder.nwf.org/',
            why: 'Enter your zip code; get the native plants that support the most local pollinators. Tallamy\'s research, made practical.',
          },
        ],
      },

      seeAlso: ['soil', 'veggies', 'composting'],
      prereqs: ['soil'],
      leadsTo: [],
      chapterActivity: 'A fall "perennial swap" at a Prospect Park community garden — divide and trade peonies, hostas, and grasses; this works best in late September when plants are easier to lift.',
      sources: [
        'https://en.wikipedia.org/wiki/Perennial_plant',
        'https://www.rhs.org.uk/',
        'https://nativeplantfinder.nwf.org/',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
