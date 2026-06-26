// content/mapreading.js
// Batch: B12-life-skills-II-outdoor
// Last updated: 2026-04-23 by BATCH B12-life-skills-II-outdoor
//
// Topics from data.js: topo, bearings

window.CONTENT = window.CONTENT || {};
window.CONTENT.mapreading = {
  subjectId: 'mapreading',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B12-life-skills-II-outdoor',
  topics: {

    topo: {
      id: 'topo',
      name: 'Reading a Topo',
      level: 'Beginner',
      dek: 'Contour lines turn three-dimensional country into a sheet of paper that, once you can read it, tells you how far, how steep, and how to get there.',
      readTime: '11 min',

      sections: ['Contour lines, the great trick', 'Scale, distance, and time', 'Symbols and the map\'s vocabulary', 'Reading the country before you walk into it'],
      body: [
        { type: 'lead', text: 'In 1789, the French royal cartographer César-François Cassini de Thury and his son finished the first complete topographic map of an entire country. The Carte de Cassini covered France in 182 sheets, the labor of four generations of one family. The contour line — the technical innovation that allowed elevation to appear on a flat map — would not arrive for another fifty years, in the work of the Dutch surveyor Nicolaas Cruquius. The contour line is, in retrospect, one of the most important inventions in the history of representation. It made a country fit on a table.' },
        { type: 'h2', text: 'Contour lines, the great trick' },
        { type: 'p', text: 'A contour line connects all points on the map at a single elevation. Lines close together mean the land is steep; lines far apart mean it is gentle. Closed loops are summits or basins; the inside of the loop is the higher (or lower) ground. Contour lines that bend toward higher ground are valleys; those that bend toward lower ground are ridges. Once you can read these patterns, a topographic map is a three-dimensional model of the country, viewable at a glance, that lives on a folded piece of paper in your back pocket.' },
        { type: 'h2', text: 'Scale, distance, and time' },
        { type: 'p', text: 'Scale is the ratio of map distance to ground distance. A 1:24,000 USGS topo (the American standard) means one inch on the map is twenty-four thousand inches on the ground — about 2,000 feet. Most British Ordnance Survey maps are 1:25,000 or 1:50,000. The smaller the scale, the more detail; the larger, the more country fits on the sheet. Naismith\'s rule, written by a Scottish mountaineer in 1892, gives a useful first estimate of walking time: an hour for every three miles of distance, plus an additional half-hour for every thousand feet of climb. Real walking time depends on terrain, weather, and fitness; the formula is the place to start.' },
        { type: 'h2', text: 'Symbols and the map\'s vocabulary' },
        { type: 'p', text: 'Every map of any quality has a legend that names its symbols, but the major American conventions are stable across the USGS catalog. Black is human-made: roads, buildings, trails. Blue is water. Green is vegetation; the deeper the green, the denser. Brown is contour lines and natural relief. Red is significant roads and survey markers. The trail you can see on the ground is not always the trail on the map; the trail on the map is not always still on the ground. A working hiker treats both as data points and trusts neither completely.' },
        { type: 'h2', text: 'Reading the country before you walk into it' },
        { type: 'p', text: 'The most important habit a map-reader can develop is what surveyors call orientation: spreading the map flat, turning it until its features line up with the country in front of you, and reading the relationship between map and landscape continuously as you move through it. A map kept folded in a pocket is much less useful than a map handled every twenty minutes. The skill is partly memory, partly geometry, and largely the cumulative effect of practice. Most people can teach themselves to navigate by topo map in a single weekend in country they know.' },
        { type: 'callout', text: 'A modern phone with offline maps (Gaia GPS, CalTopo, OnX) is wonderful and should not be the only thing you carry. Batteries die, screens crack, signals are absent in the canyons that need them most. The paper map and the compass do not need batteries. Carry both.' },
      ],

      keyTerms: ['contour line', 'contour interval', 'topographic map', 'scale', 'legend', 'datum', 'relief', 'col', 'spur', 'reentrant'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@REI',
            title: 'REI Co-op — Map & Compass playlist',
            channel: 'REI Co-op',
            duration: 'variable',
            featured: true,
            why: 'REI\'s outdoor-school videos on reading topo maps are the standard introduction for American backpackers. Free and well-paced.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@NOLSStudent',
            title: 'NOLS — Wilderness Navigation playlist',
            channel: 'NOLS',
            duration: 'variable',
            featured: true,
            why: 'NOLS instructors on the actual field skill of reading country, not just a sheet of paper. The most rigorous American video reference.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@OrdnanceSurveyVideos',
            title: 'Ordnance Survey GetOutside — full channel',
            channel: 'Ordnance Survey',
            duration: 'variable',
            featured: true,
            why: 'The British national mapping agency\'s video library on map symbols, contours, and route planning. The OS standard is the cleanest cartographic system in the world.',
          },
        ],
        books: [
          {
            title: 'Be Expert with Map and Compass',
            author: 'Björn Kjellström',
            year: 1955,
            url: 'https://en.wikipedia.org/wiki/Bj%C3%B6rn_Kjellstr%C3%B6m',
            why: 'The standard introduction since 1955; Kjellström co-founded the Silva compass company. Now in updated editions; the basic explanation has not been improved upon.',
          },
          {
            title: 'Wilderness Navigation',
            author: 'Bob & Mike Burns',
            year: 2015,
            url: 'https://en.wikipedia.org/wiki/The_Mountaineers_(club)',
            why: 'The Mountaineers\' modern field reference for backpackers and climbers. Concise and practical.',
          },
          {
            title: 'NOLS Wilderness Navigation',
            author: 'Gene Trantham & Darran Wells',
            year: 2014,
            url: 'https://en.wikipedia.org/wiki/National_Outdoor_Leadership_School',
            why: 'NOLS\'s pocket guide. The chapters on terrain features and reading the country are the best in print.',
          },
        ],
        articles: [
          {
            title: 'Topographic map',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Topographic_map',
            why: 'Comprehensive reference, with the history and the international conventions.',
            year: null,
          },
          {
            title: 'USGS Topographic Maps',
            source: 'United States Geological Survey',
            url: 'https://www.usgs.gov/programs/national-geospatial-program/topographic-maps',
            why: 'The federal program that publishes American topo maps. Free downloads and historical scans of every quad ever produced.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'REI — Navigation Basics class',
            provider: 'REI Co-op',
            url: 'https://www.rei.com/learn/expert-advice/navigation-basics.html',
            free: true,
            why: 'REI\'s free written guide and in-store classes. The cheapest way to put a topo map in your hands with someone to ask questions.',
          },
        ],
        tools: [
          {
            title: 'CalTopo',
            url: 'https://caltopo.com/',
            why: 'The most powerful free web map for backcountry route planning. Layers USGS topos, slope angle, satellite, and historical maps.',
          },
          {
            title: 'OpenStreetMap',
            url: 'https://www.openstreetmap.org/',
            why: 'The Wikipedia of maps. Crowd-sourced, free, and the base layer for most modern mapping apps.',
          },
        ],
        primarySources: [
          {
            title: 'USGS topoView',
            url: 'https://ngmdb.usgs.gov/topoview/',
            why: 'Free downloads of every USGS topographic map ever published, including a century of historical scans. The primary source.',
          },
        ],
      },

      seeAlso: ['bearings', 'survival', 'cartography'],
      prereqs: [],
      leadsTo: ['bearings'],
      chapterActivity: 'A late-spring "topo Saturday" in Harriman State Park — bring a printed USGS quad of the area; walk it with a working orienteer; this comes alive in May once the trails are dry and snowmelt is past.',
      sources: [
        'https://en.wikipedia.org/wiki/Topographic_map',
        'https://www.usgs.gov/programs/national-geospatial-program/topographic-maps',
      ],
      verifiedAt: '2026-04-23',
    },

    bearings: {
      id: 'bearings',
      name: 'Taking a Bearing',
      level: 'Intermediate',
      dek: 'A bearing is a direction stated in degrees from north — and the connection between map and compass that turns navigation into geometry.',
      readTime: '11 min',

      sections: ['What a bearing is', 'Map to compass: the field bearing', 'Compass to map: the back bearing', 'Magnetic declination, the slow correction'],
      body: [
        { type: 'lead', text: 'In 1218 a Chinese alchemist\'s manual described a small, magnetized iron fish floating in a bowl of water; the fish always pointed south. Two centuries later, sailors in the Mediterranean were using mounted versions to find their way across the Atlantic. The compass changed the geography of the world. The skill of taking a bearing — using the compass to convert a map into a direction you can walk in, or to convert a distant landmark into a line on the map — is the small piece of practical mathematics that makes the compass useful in the field.' },
        { type: 'h2', text: 'What a bearing is' },
        { type: 'p', text: 'A bearing is a direction stated as the number of degrees clockwise from north, from 0 to 360. Due north is 0 (or 360). East is 90. South is 180. West is 270. A bearing of 045 is northeast; 225 is southwest. A baseplate compass — the kind you slide across a map — has a rotating bezel marked in degrees, an arrow on the baseplate (the direction-of-travel arrow), and a magnetic needle. The whole instrument is designed to convert the geometry of a map into a number you can hold in your hand.' },
        { type: 'h2', text: 'Map to compass: the field bearing' },
        { type: 'p', text: 'To find a bearing from where you are to a destination on the map: place the long edge of the compass baseplate on the line between the two points, with the direction-of-travel arrow pointing toward the destination. Rotate the bezel until its orienting lines are parallel to the map\'s north-south grid lines, and its "N" points to the top of the map. Read the number under the index line on the baseplate; that is the bearing in degrees from grid north. Then, holding the compass level in front of you, turn your body until the needle aligns with the orienting arrow ("box the needle"). The direction-of-travel arrow now points exactly at your destination.' },
        { type: 'h2', text: 'Compass to map: the back bearing' },
        { type: 'p', text: 'The reverse is also useful. If you can see a known landmark — a distinctive peak, a tower — point the compass at it, rotate the bezel until the needle is boxed, and read the bearing. To plot it on the map: place a corner of the compass on the symbol for the landmark, rotate the whole compass (not the bezel) until its orienting lines align with grid north on the map, and draw a line along the baseplate. Your position is somewhere on that line. Two such bearings, from two known landmarks, intersect at your position — a triangulation that has been used by navigators for several hundred years.' },
        { type: 'h2', text: 'Magnetic declination, the slow correction' },
        { type: 'p', text: 'The magnetic North Pole is not the geographic North Pole; the difference between the two is called magnetic declination, and it varies with both location and time. In New York City, declination in 2026 is about 13 degrees west; that is, the compass needle points 13 degrees west of true north. The map\'s grid is aligned to true north; the compass needle is aligned to magnetic north. To navigate accurately, you must add or subtract the local declination — the formula is "east is least, west is best" (subtract east declination, add west). Modern declination-adjustable compasses let you set the correction once on the bezel and forget it. Forgetting to apply declination is the single most common cause of map-and-compass navigation errors.' },
        { type: 'callout', text: 'Practice in known country before you trust the skill in unknown country. A weekend with a printed USGS quad and a baseplate compass in your local park, taking and walking bearings between fixed objects, will do more than any number of books. The compass needle is honest; the operator is the variable.' },
      ],

      keyTerms: ['bearing', 'azimuth', 'baseplate compass', 'orienting arrow', 'direction-of-travel arrow', 'magnetic declination', 'true north', 'grid north', 'triangulation', 'back bearing'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@REI',
            title: 'REI Co-op — Map & Compass tutorials',
            channel: 'REI Co-op',
            duration: 'variable',
            featured: true,
            why: 'REI\'s "How to Use a Compass" video is the most-watched tutorial on the bearings procedure. Slow, accurate, and with the right physical demonstrations.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@NOLSStudent',
            title: 'NOLS — Compass and Bearings playlist',
            channel: 'NOLS',
            duration: 'variable',
            featured: true,
            why: 'NOLS instructors on the field application of bearings and back bearings. The triangulation video is unusually clear.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@OrdnanceSurveyVideos',
            title: 'Ordnance Survey GetOutside — Compass tutorials',
            channel: 'Ordnance Survey',
            duration: 'variable',
            featured: true,
            why: 'The British national mapping agency\'s plain-language compass instruction. The British system is identical to the American on all the relevant geometry.',
          },
        ],
        books: [
          {
            title: 'Be Expert with Map and Compass',
            author: 'Björn Kjellström',
            year: 1955,
            url: 'https://en.wikipedia.org/wiki/Bj%C3%B6rn_Kjellstr%C3%B6m',
            why: 'Still the cleanest written explanation of the entire procedure. Kjellström designed the Silva baseplate compass on which most modern instruments are based.',
          },
          {
            title: 'Wilderness Navigation',
            author: 'Bob & Mike Burns',
            year: 2015,
            url: 'https://en.wikipedia.org/wiki/Mountaineering:_The_Freedom_of_the_Hills',
            why: 'The Mountaineers\' practical manual. The bearings and triangulation chapters are the field-tested standard.',
          },
          {
            title: 'Mountaineering: The Freedom of the Hills',
            author: 'The Mountaineers',
            year: 2017,
            url: 'https://en.wikipedia.org/wiki/Mountaineering:_The_Freedom_of_the_Hills',
            why: 'The classic American climbing reference. The navigation chapter covers bearings in the context of serious mountain travel.',
          },
        ],
        articles: [
          {
            title: 'Bearing (navigation)',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Bearing_(navigation)',
            why: 'Comprehensive reference on the geometry, with the magnetic declination details.',
            year: null,
          },
          {
            title: 'Magnetic declination',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Magnetic_declination',
            why: 'The history and physics of the difference between magnetic and true north, with current declination calculators.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'NOLS — Wilderness Navigation Course',
            provider: 'National Outdoor Leadership School',
            url: 'https://www.nols.edu/',
            free: false,
            why: 'A weekend course in real country with NOLS instructors will teach you bearings better than any other format.',
          },
          {
            title: 'REI — Navigation classes',
            provider: 'REI Co-op',
            url: 'https://www.rei.com/learn/expert-advice/navigation-basics.html',
            free: true,
            why: 'REI\'s free written guides and low-cost in-store classes. The cheapest way to learn the bearings procedure with someone to ask questions.',
          },
        ],
        tools: [
          {
            title: 'NOAA Magnetic Declination Calculator',
            url: 'https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml',
            why: 'Enter your zip code; get the current local declination. The federal agency that maintains the World Magnetic Model.',
          },
        ],
      },

      seeAlso: ['topo', 'survival', 'cartography'],
      prereqs: ['topo'],
      leadsTo: [],
      chapterActivity: 'A summer "compass and quad" Saturday in Sterling Forest — set bearings between marked landmarks, triangulate to a position, walk back; comes alive in June and September when the woods are clear and the bugs are tolerable.',
      sources: [
        'https://en.wikipedia.org/wiki/Bearing_(navigation)',
        'https://en.wikipedia.org/wiki/Magnetic_declination',
        'https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
