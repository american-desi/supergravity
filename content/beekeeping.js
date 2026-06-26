// content/beekeeping.js
// Batch: B12-life-skills-II-outdoor
// Last updated: 2026-04-23 by BATCH B12-life-skills-II-outdoor
//
// Topics from data.js: hive, seasons_bees

window.CONTENT = window.CONTENT || {};
window.CONTENT.beekeeping = {
  subjectId: 'beekeeping',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B12-life-skills-II-outdoor',
  topics: {

    hive: {
      id: 'hive',
      name: 'The Hive',
      level: 'Beginner',
      dek: 'A colony of fifty thousand bees runs on a chemical conversation older than agriculture — and the beekeeper\'s job is mostly to listen in.',
      readTime: '11 min',

      sections: ['What a colony actually is', 'The three castes', 'Inside the box', 'The Langstroth design'],
      body: [
        { type: 'lead', text: 'In 1851 a Massachusetts pastor named Lorenzo Langstroth realized that bees would not glue together two pieces of wood as long as the gap between them was about three-eighths of an inch — what he named the bee space. He used the discovery to design a hive whose internal frames could be lifted out one at a time, intact, without destroying the colony. Almost every modern beekeeper, anywhere in the world, still works in some descendant of Langstroth\'s box. The eight thousand years of beekeeping before him involved breaking the hive open with smoke and a knife.' },
        { type: 'h2', text: 'What a colony actually is' },
        { type: 'p', text: 'A honeybee colony is best thought of not as a collection of bees but as a single organism — what biologists call a superorganism — whose cells happen to be able to fly. The colony makes decisions, regulates its temperature, builds its body (the comb), reproduces (by swarming), and dies when its functions break down. Individual bees are extensions of the colony\'s purpose, not independent actors. A worker bee outside the hive is roughly analogous to a white blood cell that has briefly left a body to do a task.' },
        { type: 'h2', text: 'The three castes' },
        { type: 'p', text: 'A colony has one queen, a few hundred to a few thousand drones in summer (none in winter), and twenty thousand to sixty thousand female workers depending on the season. The queen lays all the eggs — up to two thousand a day at peak. Drones, the colony\'s only males, exist for one purpose: to mate with virgin queens from other colonies during nuptial flights. Workers do everything else: nursing larvae, building wax comb, guarding the entrance, foraging for nectar and pollen, processing nectar into honey, and ventilating the hive on hot days. A worker\'s lifespan is six weeks in summer and several months over winter; the queen lives one to four years.' },
        { type: 'h2', text: 'Inside the box' },
        { type: 'p', text: 'Open a working hive on a warm afternoon and you see a remarkably ordered city. The bottom box (the brood chamber) holds frames of capped brood — the developing larvae and pupae sealed under wax — surrounded by an arc of stored pollen and an outer arc of honey. The boxes above (supers) hold mostly honey, kept above the brood by a queen excluder grate that lets workers through but keeps the larger queen below. The bees keep the brood-chamber temperature within one or two degrees of 95°F year-round, regardless of weather, by clustering, fanning, and evaporating water.' },
        { type: 'h2', text: 'The Langstroth design' },
        { type: 'p', text: 'The standard American hive is the Langstroth: ten frames per box, boxes stackable, frames removable. The British prefer the slightly smaller National hive; the French Dadant uses a deeper brood box; and a growing number of hobbyists use top-bar hives or Warré hives that more closely mimic feral colonies. Each design has a passionate constituency. For a first-year beekeeper anywhere in the United States, the Langstroth is the default — most of the supplies, the books, and the local mentors will assume it.' },
        { type: 'callout', text: 'Get a mentor. Beekeeping is one of the few crafts where the gap between a book\'s description of a problem and recognizing it in your own hive is enormous. Most local beekeeping clubs will pair a new beekeeper with an experienced one for free.' },
      ],

      keyTerms: ['queen', 'drone', 'worker', 'brood', 'super', 'frame', 'bee space', 'queen excluder', 'foundation', 'propolis'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@UoGBees',
            title: 'University of Guelph Honey Bee Research Centre — full channel',
            channel: 'University of Guelph',
            duration: 'variable',
            featured: true,
            why: 'Canada\'s leading honeybee research center. The Paul Kelly hive-inspection videos are the canonical visual references for new beekeepers worldwide.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@FrederickDunn',
            title: 'Frederick Dunn — full channel',
            channel: 'Frederick Dunn',
            duration: 'variable',
            featured: true,
            why: 'A Pennsylvania beekeeper running multiple hive types side by side. The clearest practical channel for a first-year beekeeper.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@OldDrone',
            title: 'OldDrone (David Burns) — full channel',
            channel: 'David Burns',
            duration: 'variable',
            featured: false,
            why: 'A working sideliner with decades of experience. Good for the diagnostic side of beekeeping.',
          },
        ],
        books: [
          {
            title: 'Beekeeping for Dummies',
            author: 'Howland Blackiston',
            year: 2024,
            url: 'https://en.wikipedia.org/wiki/For_Dummies',
            why: 'Despite the title, the most-recommended modern beginner book. Now in its fifth edition; covers Langstroth, top-bar, and flow hives.',
          },
          {
            title: 'The Hive and the Honey-Bee',
            author: 'Lorenzo Langstroth',
            year: 1853,
            url: 'https://en.wikipedia.org/wiki/L._L._Langstroth',
            why: 'The original. Out of date for modern equipment; still readable, still beautiful, still in print after 170 years.',
          },
          {
            title: 'Honeybee Democracy',
            author: 'Thomas D. Seeley',
            year: 2010,
            url: 'https://en.wikipedia.org/wiki/Thomas_Seeley',
            why: 'Cornell\'s great honeybee scientist on how a swarm chooses its new home. The most beautiful modern book about colony intelligence.',
          },
        ],
        articles: [
          {
            title: 'Beekeeping',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Beekeeping',
            why: 'Comprehensive reference, with the equipment, methods, and global statistics.',
            year: null,
          },
          {
            title: 'Honey bee',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Honey_bee',
            why: 'The biology, the genus, the species, and the ecological context.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'University of Montana — Master Beekeeper Program',
            provider: 'University of Montana',
            url: 'https://www.umt.edu/sell/cps/master-beekeeping/',
            free: false,
            why: 'The most respected English-language certification program. Three levels, online, with a practical residency component.',
          },
          {
            title: 'Local beekeeping clubs',
            provider: 'American Beekeeping Federation',
            url: 'https://www.abfnet.org/',
            free: false,
            why: 'The federation\'s state-by-state directory. The single highest-leverage step a new beekeeper can take is to join the local club.',
          },
        ],
      },

      seeAlso: ['seasons_bees', 'gardening', 'biology'],
      prereqs: [],
      leadsTo: ['seasons_bees'],
      chapterActivity: 'A spring "open hive" Saturday at a Bronx community apiary — suit up, watch a working inspection, decide whether you actually want a colony of your own; this comes alive in late May when colonies are at peak strength.',
      sources: [
        'https://en.wikipedia.org/wiki/Beekeeping',
        'https://en.wikipedia.org/wiki/Honey_bee',
        'https://www.abfnet.org/',
      ],
      verifiedAt: '2026-04-23',
    },

    seasons_bees: {
      id: 'seasons_bees',
      name: 'Seasonal Management',
      level: 'Intermediate',
      dek: 'A beekeeper\'s year is four very different jobs run twelve months apart — and getting any of them wrong loses the colony.',
      readTime: '11 min',

      sections: ['Spring — buildup and swarm prevention', 'Summer — supering and the honey flow', 'Fall — feeding and Varroa', 'Winter — leave them alone'],
      body: [
        { type: 'lead', text: 'A colony of honeybees runs on a calendar older than humans. In late winter, weeks before the gardener notices anything, the queen starts laying again. By late spring the colony is at maximum strength and ready to reproduce by swarming. By midsummer the workers are hauling in nectar and packing it into honey at a furious pace. By fall the work shifts to provisioning for winter, and by November the cluster has formed and the colony enters a kind of half-sleep that lasts until February. The beekeeper\'s job is to read which page of the calendar the bees are on and act accordingly.' },
        { type: 'h2', text: 'Spring — buildup and swarm prevention' },
        { type: 'p', text: 'In late February or early March, the queen begins laying eggs in earnest. The first dandelions and maple flowers feed the explosive growth of brood. By April or May the colony may have outgrown its space, at which point it does what colonies have done for millions of years: produces a new queen and swarms — half the bees fly off with the old queen to find new quarters. Lost swarms are romantic and inconvenient. Modern management adds boxes early ("supering up"), gives the colony work building comb in new space, and sometimes splits the colony deliberately to head off a swarm.' },
        { type: 'h2', text: 'Summer — supering and the honey flow' },
        { type: 'p', text: 'In most North American climates the heaviest nectar flow runs from late May through mid-July, depending on the local floral mix. During the flow the beekeeper\'s job is mostly to keep adding empty supers above the brood chamber so the bees have room to store the incoming honey. Late July is the typical first harvest in the Northeast. The bees should be left enough honey for themselves — about sixty pounds in a cold climate — and the surplus is what the beekeeper takes. After the flow, the colony rebuilds and prepares for fall.' },
        { type: 'h2', text: 'Fall — feeding and Varroa' },
        { type: 'p', text: 'Late summer and early fall are the most consequential weeks of the beekeeper\'s year. Two jobs matter most. First, mite management: Varroa destructor, a parasitic mite that arrived in the United States in the 1980s, is the single largest cause of overwinter colony loss. The mite population peaks in late summer; treatment in August or September — oxalic acid, formic acid, or thymol, depending on the beekeeper\'s philosophy — gives the winter bees a chance. Second, ensure the colony has enough stores; thin colonies are fed sugar syrup until the cluster forms and feeding becomes impossible.' },
        { type: 'h2', text: 'Winter — leave them alone' },
        { type: 'p', text: 'Once the cluster forms, the beekeeper\'s job is mostly to do nothing. Wrap the hive against wind in cold climates, ensure the entrance has not iced over, lift the back of the hive every few weeks to feel its weight (a heavy hive has stores; a light one is in trouble). Open inspections in winter break the cluster and chill the brood. The colony will look dead from outside — no flight, no buzz — but inside, in the cluster, the bees keep the queen at 75°F by shivering. On the first warm day of February, they fly out for a single cleansing flight, and the year begins again.' },
        { type: 'callout', text: 'About a third of US managed colonies die each winter, mostly from Varroa-related causes. New beekeepers should plan to lose at least their first colony, and to start with two so they can compare. This is an honest cost of the craft, not a failure.' },
      ],

      keyTerms: ['swarming', 'supering', 'honey flow', 'Varroa destructor', 'mite count', 'cluster', 'overwintering', 'feeding'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@UoGBees',
            title: 'University of Guelph — Seasonal Management playlists',
            channel: 'University of Guelph',
            duration: 'variable',
            featured: true,
            why: 'Paul Kelly\'s spring, summer, fall, and winter management videos work as a structured course on the working calendar.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@FrederickDunn',
            title: 'Frederick Dunn — Seasonal videos',
            channel: 'Frederick Dunn',
            duration: 'variable',
            featured: true,
            why: 'Dunn\'s month-by-month videos walk through the actual decisions a beekeeper faces, including Varroa-treatment choices.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@randyoliver',
            title: 'Randy Oliver / Scientific Beekeeping',
            channel: 'Scientific Beekeeping',
            duration: 'variable',
            featured: true,
            why: 'A working sideliner who is also a trained biologist. The technical reference for Varroa management and treatment timing.',
          },
        ],
        books: [
          {
            title: 'The Beekeeper\'s Handbook',
            author: 'Diana Sammataro & Alphonse Avitabile',
            year: 2021,
            url: 'https://en.wikipedia.org/wiki/Beekeeping',
            why: 'The standard American textbook. Now in its fifth edition; treats seasonal management as the spine of the craft.',
          },
          {
            title: 'The Practical Beekeeper',
            author: 'Michael Bush',
            year: 2011,
            url: 'https://en.wikipedia.org/wiki/Treatment-free_beekeeping',
            why: 'The leading treatment-free perspective. Read alongside Sammataro for the full debate over Varroa management.',
          },
          {
            title: 'Following the Bloom',
            author: 'Douglas Whynott',
            year: 1991,
            url: 'https://en.wikipedia.org/wiki/Migratory_beekeeping',
            why: 'A reporter\'s year with American migratory beekeepers. A different scale than backyard work, but the seasonal logic is the same and beautifully observed.',
          },
        ],
        articles: [
          {
            title: 'Varroa destructor',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Varroa_destructor',
            why: 'The biology and management of the parasite that defines modern beekeeping.',
            year: null,
          },
          {
            title: 'Honey Bee Health Coalition — Varroa Tools',
            source: 'Honey Bee Health Coalition',
            url: 'https://honeybeehealthcoalition.org/varroa/',
            why: 'The single most useful free resource for treatment decisions, with the current evidence on each method.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Honey Bee Biology and Beekeeping',
            provider: 'University of Florida (free PDF)',
            url: 'https://entnemdept.ufl.edu/honey-bee/extension/',
            free: true,
            why: 'UF\'s extension materials are the most comprehensive free university resource for North American beekeepers.',
          },
        ],
      },

      seeAlso: ['hive', 'gardening', 'composting'],
      prereqs: ['hive'],
      leadsTo: [],
      chapterActivity: 'A late-August Varroa-monitoring evening at a Brooklyn rooftop apiary — sugar-roll the bees, count the mites, decide on a treatment; this comes alive in the eight critical weeks before fall.',
      sources: [
        'https://en.wikipedia.org/wiki/Beekeeping',
        'https://en.wikipedia.org/wiki/Varroa_destructor',
        'https://honeybeehealthcoalition.org/varroa/',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
