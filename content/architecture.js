// content/architecture.js
// Batch: B04-humanities
// Last updated: 2026-04-22 by BATCH B04-humanities

window.CONTENT = window.CONTENT || {};
window.CONTENT.architecture = {
  subjectId: 'architecture',
  version: 1,
  lastUpdated: '2026-04-22',
  curator: 'BATCH B04-humanities',
  topics: {

    arch_history: {
      id: 'arch_history',
      name: 'History of Architecture',
      level: 'Intermediate',
      dek: 'Five thousand years of humans sheltering and showing off — from pyramid to dome to glass wall.',
      readTime: '13 min',

      sections: ['The ancient orders', 'Gothic and the pointed arch', 'Renaissance and the return', 'Modernism and after'],
      body: [
        { type: 'lead', text: 'Around 2550 BCE, along the west bank of the Nile, a pharaoh named Khufu commissioned a tomb in the shape of a pyramid. It took about two decades, a workforce of tens of thousands, and the displacement of roughly six million tons of limestone. For almost four thousand years, the Great Pyramid of Giza was the tallest structure on Earth. Almost every later chapter of architectural history is a conversation with monuments like that one: how to make a building stand, how to make it say something, how to do both at once.' },
        { type: 'h2', text: 'The classical orders' },
        { type: 'p', text: 'The Greeks, inheriting the Egyptian pyramid and the Mesopotamian ziggurat, did something different: they organized their columns into three orders — Doric, Ionic, Corinthian — each with its own proportions, capitals, and moods. The Parthenon on the Athenian Acropolis, built in the 430s BCE, is the canonical example. The Romans added engineering — concrete, the arch, the barrel vault, the dome — which let them build structures of a scale Greek post-and-lintel construction could not reach. The Pantheon\'s concrete dome, built around 128 CE, remained the largest unreinforced dome in the world for nearly two thousand years.' },
        { type: 'h2', text: 'Gothic, the pointed arch, and the structural leap' },
        { type: 'p', text: 'Between about 1140 and 1500, in northern France and then across Europe, cathedral-builders worked out a new structural system: the pointed arch (which directs loads more vertically than the round arch), the ribbed vault (which concentrates loads onto columns rather than walls), and the flying buttress (which resists the outward thrust from outside). Together these three made possible walls of glass — the great stained-glass windows at Chartres (c. 1220), Notre-Dame (c. 1200), and Beauvais (c. 1272, partially collapsed). The Gothic was, in its day, a piece of high technology.' },
        { type: 'h2', text: 'The Renaissance return' },
        { type: 'p', text: 'Filippo Brunelleschi, working in Florence in the 1420s, solved a problem that had stumped the city for a century: how to put a dome on the unfinished cathedral without the scaffolding that was available. His double-shell dome, rising 114 meters above the city, reopened a conversation with Roman architecture that Alberti, Palladio, and Michelangelo would continue for the next two centuries. Palladio\'s Four Books of Architecture, published in 1570, became the textbook of Renaissance architectural theory and, through Thomas Jefferson and the English country house, of American government buildings.' },
        { type: 'h2', text: 'Modernism, postmodernism, and now' },
        { type: 'p', text: 'Steel, reinforced concrete, the elevator, and electric light — all arrived in the late nineteenth century, and together they rewrote the grammar. Louis Sullivan\'s tall buildings in Chicago, the Bauhaus in Weimar and Dessau, Le Corbusier\'s Villa Savoye (1931), Mies van der Rohe\'s Farnsworth House (1951), Frank Lloyd Wright\'s Fallingwater (1937) — the modernist canon still shapes how any architect thinks about space, surface, and structure. Since the 1970s the field has splintered: postmodernism, deconstructivism, sustainable design, parametric computation. The through-line is still Vitruvius\'s old three-part test: firmness, commodity, delight.' },
        { type: 'quote', text: 'Architecture is frozen music.', cite: 'Goethe, in conversation with Eckermann, 1829' },
      ],

      keyTerms: ['Doric order', 'pointed arch', 'flying buttress', 'dome', 'Palladian', 'International Style', 'Bauhaus', 'Vitruvian triad'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@smarthistoryvideos',
            title: 'Smarthistory — Architecture (channel and playlists)',
            channel: 'Smarthistory',
            duration: 'variable',
            why: 'Beth Harris and Steven Zucker stand in front of the actual buildings and talk about them for six minutes at a time. The single best free art-and-architecture resource online.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@bbc',
            title: 'How We Built Britain / The Brits Who Built the Modern World (BBC documentaries)',
            channel: 'BBC',
            duration: 'variable',
            why: 'BBC has produced multiple serious documentary series on British and international architecture; the Rogers/Foster/Grimshaw episodes are particularly strong.',
          },
          {
            id: 'jm34N9wRGE0',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=jm34N9wRGE0',
            title: 'Why Is This Building the Most Important Building of the 20th Century? (ARTiculations on the Villa Savoye)',
            channel: 'ARTiculations',
            duration: '13:36',
            why: 'A close video reading of Le Corbusier\'s manifesto building. Use as a model for how to look at any modernist work.',
          },
        ],
        books: [
          {
            title: 'A Global History of Architecture',
            author: 'Francis D. K. Ching, Mark M. Jarzombek, and Vikramaditya Prakash',
            year: 2007,
            url: '',
            why: 'The current best single-volume survey — genuinely global, beautifully drawn, organized chronologically in thousand-year slices.',
          },
          {
            title: 'The Ten Books on Architecture',
            author: 'Vitruvius',
            year: -15,
            url: 'https://www.gutenberg.org/ebooks/20239',
            why: 'The only surviving Roman architectural treatise, and the source of every Renaissance architect\'s theory. Free on Gutenberg.',
          },
          {
            title: 'Towards a New Architecture',
            author: 'Le Corbusier',
            year: 1923,
            url: '',
            why: 'The manifesto of twentieth-century modernism. "A house is a machine for living in." Read to understand what the modernists thought they were doing.',
          },
        ],
        articles: [
          {
            title: 'Architecture',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Architecture',
            why: 'Well-sourced survey with links to each period and style.',
            year: null,
          },
          {
            title: 'History of architecture',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/History_of_architecture',
            why: 'Chronological overview from prehistoric shelters to the contemporary, with links to tradition-specific articles.',
            year: null,
          },
          {
            title: 'Pritzker Architecture Prize — laureates',
            source: 'Pritzker Architecture Prize',
            url: 'https://www.pritzkerprize.com/',
            why: 'The field\'s highest honor; every laureate since 1979, with short essays by the jury. The easiest way to find your way to contemporary architects who matter.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Introduction to Art History (4.601)',
            provider: 'MIT OpenCourseWare (Kristel Smentek)',
            url: 'https://ocw.mit.edu/courses/4-601-introduction-to-art-history-fall-2018/',
            free: true,
            why: 'MIT\'s free course covers architecture substantially alongside the other visual arts. Lectures, readings, assignments — all online.',
          },
        ],
        primarySources: [
          {
            title: 'Alberti — De re aedificatoria (Ten Books on Architecture, 1485)',
            url: 'https://en.wikipedia.org/wiki/De_re_aedificatoria',
            why: 'Alberti\'s Renaissance response to Vitruvius; Wikipedia links to several online editions.',
          },
          {
            title: 'Palladio — The Four Books of Architecture (1570)',
            url: 'https://archive.org/details/fourbooksofarchi00pall',
            why: 'Palladio\'s influential treatise. The 1738 Isaac Ware English edition on Archive.org.',
          },
        ],
      },

      seeAlso: ['renaissance', 'structural', 'urban_design'],
      prereqs: [],
      leadsTo: ['structural', 'urban_design'],

      chapterActivity: 'Seasonal walking tours of New York\'s architectural spine — the Woolworth Building, the Seagram Building, the Guggenheim, the Oculus — with rotating guest speakers from the Architectural League.',

      sources: [
        'https://en.wikipedia.org/wiki/Architecture',
        'https://en.wikipedia.org/wiki/History_of_architecture',
        'https://www.pritzkerprize.com/',
      ],
      verifiedAt: '2026-04-22',
    },

    structural: {
      id: 'structural',
      name: 'Structural Thinking',
      level: 'Intermediate',
      dek: 'The physics of keeping buildings up — compression, tension, span, and the elegant economy of load paths.',
      readTime: '12 min',

      sections: ['The four forces', 'Post and lintel', 'Arch, vault, dome', 'Steel, cables, shells'],
      body: [
        { type: 'lead', text: 'Every building, from a Sumerian hut to the Burj Khalifa, is a negotiation with gravity. The weight of the roof has to get to the ground. The wind on the facade has to get to the ground. The live load of the people on the fifth floor has to get to the ground. Structural engineering — which is what architecture is, under the dress — is the art of making those forces travel a clear path.' },
        { type: 'h2', text: 'The four forces' },
        { type: 'p', text: 'Structural elements carry four kinds of force. Compression squeezes a member end to end: a stone column is in compression. Tension stretches a member: a steel cable is in tension. Bending combines the two unequally across a beam\'s cross-section: the top is in compression, the bottom in tension. Shear is the sliding of one plane past another. Every material has characteristic strengths: stone is strong in compression, weak in tension; steel is strong in both; concrete is strong in compression, which is why reinforced concrete embeds steel bars in its tension zones.' },
        { type: 'h2', text: 'Post and lintel — the oldest system' },
        { type: 'p', text: 'Two vertical columns (posts) carry a horizontal beam (lintel). Stonehenge does this. The Parthenon does this. A framed house does this. The limitation is that stone cannot span very far in bending — its tension side fails — so post-and-lintel buildings in stone have small openings and thick walls. Greek temples look the way they do partly for reasons of beauty and partly because the architrave stones would have snapped if the columns had stood further apart.' },
        { type: 'h2', text: 'The arch and its children' },
        { type: 'p', text: 'The Romans made an engineering leap: the arch. A semicircular arch carries its load along a curved line of compression, so it needs no material in tension. Arches can span further than beams. An arch extruded becomes a vault; a vault rotated becomes a dome. The Pantheon\'s dome, built around 128 CE, is still a standard item in every engineering curriculum. The Gothic pointed arch carries loads more vertically than the Roman round one, allowing thinner walls and taller cathedrals. Every great nineteenth-century railway viaduct is, in essence, a run of Roman arches.' },
        { type: 'h2', text: 'Steel, cables, shells' },
        { type: 'p', text: 'Nineteenth-century iron and, after 1860, Bessemer steel transformed structure. Steel is strong in both compression and tension, so it can make beams that bend without breaking and cables that can carry huge loads in pure tension. The Brooklyn Bridge (1883), the Eiffel Tower (1889), and the first Chicago skyscrapers belong to this generation. In the twentieth century, thin concrete shells (Candela), cable-stayed domes (Buckminster Fuller), and tensile fabric roofs (Frei Otto) showed that structure could be pushed to astonishingly light forms. The best contemporary architecture often hides its structural logic, but the logic is always there.' },
        { type: 'callout', text: 'A useful habit: when you walk past a building, ask how it is standing up. Where are the columns? Where are the beams? What is in compression, what is in tension? The answers are almost always legible, once you start looking.' },
      ],

      keyTerms: ['compression', 'tension', 'bending', 'shear', 'post and lintel', 'arch', 'truss', 'reinforced concrete'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@PracticalEngineeringChannel',
            title: 'Practical Engineering (channel)',
            channel: 'Practical Engineering (Grady Hillhouse)',
            duration: 'variable',
            why: 'Hillhouse, a working civil engineer, makes short explanations of infrastructure, structures, and failures. The "How Bridges Work" and "Dams" series are especially good.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TheB1M',
            title: 'The B1M — construction and structure',
            channel: 'The B1M',
            duration: 'variable',
            why: 'Documentary-quality videos on major construction projects worldwide, with attention to the structural choices being made and why.',
          },
          {
            id: 'EL7Sg05cYHo',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=EL7Sg05cYHo',
            title: 'How Do Arches Work?',
            channel: 'Practical Engineering',
            duration: '5:38',
            why: 'A six-minute explanation of the physics of arches — the structural move that made the Romans possible.',
          },
        ],
        books: [
          {
            title: 'Why Buildings Stand Up: The Strength of Architecture',
            author: 'Mario Salvadori',
            year: 1980,
            url: '',
            why: 'The classic accessible introduction to structures, by a Columbia structural engineer who taught architects. Still the book.',
          },
          {
            title: 'Why Buildings Fall Down: How Structures Fail',
            author: 'Mario Salvadori and Matthys Levy',
            year: 1992,
            url: '',
            why: 'The companion volume — case studies of famous structural failures. Teaches more about structure than any introduction could.',
          },
          {
            title: 'Structures: Or Why Things Don\'t Fall Down',
            author: 'J. E. Gordon',
            year: 1978,
            url: '',
            why: 'J. E. Gordon, materials scientist, writes about structural principles with uncommon wit. An undergraduate classic.',
          },
        ],
        articles: [
          {
            title: 'Structural engineering',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Structural_engineering',
            why: 'Well-sourced overview with separate entries on each structural form.',
            year: null,
          },
          {
            title: 'Tacoma Narrows Bridge (1940)',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Tacoma_Narrows_Bridge_(1940)',
            why: 'The most-taught structural failure in engineering history, with the famous 1940 footage linked from the article.',
            year: null,
          },
          {
            title: 'Arch',
            source: 'Encyclopædia Britannica',
            url: 'https://www.britannica.com/technology/arch-architecture',
            why: 'Britannica on the structural mechanics and history of the arch.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Structures — 1.050 and 1.571 (MIT)',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/1-050-solid-mechanics-fall-2004/',
            free: true,
            why: 'MIT\'s introductory solid mechanics course, free. The technical engineering companion to Salvadori.',
          },
        ],
        primarySources: [
          {
            title: 'Eiffel Tower — engineering drawings archive',
            url: 'https://www.toureiffel.paris/en/the-monument/key-figures',
            why: 'Official Eiffel Tower technical site. The definitive nineteenth-century steel structure.',
          },
        ],
      },

      seeAlso: ['arch_history', 'urban_design'],
      prereqs: ['arch_history'],
      leadsTo: ['urban_design'],

      chapterActivity: 'A monthly Saturday walk along the East River promenade — the Brooklyn and Manhattan bridges in close sight — with a structural engineer explaining how each one works.',

      sources: [
        'https://en.wikipedia.org/wiki/Structural_engineering',
        'https://en.wikipedia.org/wiki/Tacoma_Narrows_Bridge_(1940)',
        'https://www.britannica.com/technology/arch-architecture',
      ],
      verifiedAt: '2026-04-22',
    },

    urban_design: {
      id: 'urban_design',
      name: 'Urban Design',
      level: 'Advanced',
      dek: 'The design of cities as wholes — the argument between grid and organic growth, highway and sidewalk, density and sprawl.',
      readTime: '13 min',

      sections: ['What a city is for', 'Jacobs versus Moses', 'Density, walkability, transit', 'The contemporary problem'],
      body: [
        { type: 'lead', text: 'In 1811, a commission appointed by the New York state legislature laid a plan across the empty upper half of Manhattan: 155 east-west streets crossing twelve north-south avenues, in an uncompromising grid that ran from Houston Street to 155th. There were no parks — Central Park would not be designed for another fifty years — and the plan was openly hostile to anything other than rectangular commercial lots. Almost everything any New Yorker has ever loved or complained about in their city was shaped by that plan. Urban design is what happens when someone decides at the scale of a city.' },
        { type: 'h2', text: 'What a city is for' },
        { type: 'p', text: 'A city is an answer to the problem of too many strangers living too close together, and the answer gets different in each generation. Classical cities were organized around religious and civic centers. Roman cities were organized around the forum and the grid imposed on top of conquered land. Medieval European cities were organized around the cathedral, the market, and the walls. Nineteenth-century industrial cities were organized around the railway station and the factory. The contemporary city is organized, disagreeably, around the car — a decision that has aged worse than any other major twentieth-century design choice.' },
        { type: 'h2', text: 'Jacobs versus Moses' },
        { type: 'p', text: 'The great American urbanist argument of the twentieth century was between Robert Moses, who built hundreds of miles of expressways through and around New York between the 1930s and the 1960s, and Jane Jacobs, whose 1961 book The Death and Life of Great American Cities defended the dense, mixed-use, walkable block against the towers-in-a-park logic of Le Corbusier and the highway logic of Moses. Jacobs won the argument intellectually and eventually on several key projects (her campaign stopped the Lower Manhattan Expressway). Moses won, for a long time, on the ground. The argument is still shaping every planning decision in every city.' },
        { type: 'h2', text: 'The things a good urbanist pays attention to' },
        { type: 'p', text: 'Density — how many people live per acre. Walkability — can daily errands be done on foot. Transit — is there a functioning alternative to the car. Block size — small blocks create options, large blocks create barriers. Building frontage — blank walls kill a street. Mixed use — a neighborhood with only housing, or only offices, or only shops, is dead half the day. Public space — parks, plazas, benches, wide sidewalks. Great cities score well on all of these, mostly because of decisions made a hundred years ago.' },
        { type: 'h2', text: 'The contemporary problem' },
        { type: 'p', text: 'Cities now house more than half of humanity, and climate change has raised the stakes for how we build them. The global housing crisis and the global climate crisis are the same crisis, and most of the workable answers look the same: build more housing, build it closer together, build transit that can move people without burning carbon, stop subsidizing single-family sprawl. Whether any country\'s political system can make those changes on the required timescale is a question neither architects nor urbanists can answer alone.' },
        { type: 'quote', text: 'Cities have the capability of providing something for everybody, only because, and only when, they are created by everybody.', cite: 'Jane Jacobs, The Death and Life of Great American Cities' },
      ],

      keyTerms: ['urban design', 'walkability', 'density', 'mixed use', 'zoning', 'new urbanism', 'transit-oriented development', 'gentrification'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@NotJustBikes',
            title: 'Not Just Bikes (channel)',
            channel: 'Not Just Bikes',
            duration: 'variable',
            why: 'A Canadian living in Amsterdam, making the case for walkable, transit-oriented urbanism using before-and-after video. The best entry-level urbanism channel on YouTube.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@CityBeautiful',
            title: 'City Beautiful (channel)',
            channel: 'City Beautiful',
            duration: 'variable',
            why: 'Dave Amos, a working urban planner, makes careful explanations of zoning, highways, housing economics, and design. More technical than Not Just Bikes.',
          },
          {
            id: 'Pbs6ZYRWTEM',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=Pbs6ZYRWTEM',
            title: 'Jane Jacobs and the Future of Cities (Streetfilms interview archive)',
            channel: 'Streetfilms',
            duration: 'variable',
            why: 'Archival interviews with Jacobs and her successors. Use for voices that have lived the argument.',
          },
        ],
        books: [
          {
            title: 'The Death and Life of Great American Cities',
            author: 'Jane Jacobs',
            year: 1961,
            url: '',
            why: 'The founding text of modern urbanism. The first fifty pages are the best twenty-five cents\' worth of city-making advice ever written.',
          },
          {
            title: 'The Power Broker',
            author: 'Robert Caro',
            year: 1974,
            url: '',
            why: 'Caro\'s 1,300-page biography of Robert Moses. The best book ever written about how a city gets shaped by a single person\'s will.',
          },
          {
            title: 'Walkable City',
            author: 'Jeff Speck',
            year: 2012,
            url: '',
            why: 'A working city planner\'s contemporary case for density, sidewalks, and slower cars. The readable modern successor to Jacobs.',
          },
        ],
        articles: [
          {
            title: 'Urban design',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Urban_design',
            why: 'Overview with distinctions between urban design, urban planning, and landscape architecture.',
            year: null,
          },
          {
            title: 'Jane Jacobs',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Jane_Jacobs',
            why: 'Good biographical overview with pointers into her key books and campaigns.',
            year: null,
          },
          {
            title: 'Congress for the New Urbanism — Charter',
            source: 'Congress for the New Urbanism',
            url: 'https://www.cnu.org/who-we-are/charter-new-urbanism',
            why: 'The 1996 charter that gathered Jacobs\'s insights into a design movement. Twenty-seven principles, one page.',
            year: 1996,
          },
        ],
        courses: [
          {
            title: 'Designing Cities',
            provider: 'Coursera (University of Pennsylvania)',
            url: 'https://www.coursera.org/learn/designing-cities',
            free: true,
            why: 'Penn\'s free course on urban design, taught by Gary Hack and colleagues. A strong survey.',
          },
        ],
        primarySources: [
          {
            title: 'The Commissioners\' Plan of 1811 (NYC grid)',
            url: 'https://en.wikipedia.org/wiki/Commissioners%27_Plan_of_1811',
            why: 'Wikipedia\'s detailed entry, linked to Maps and NYC Municipal Archives scans.',
          },
        ],
      },

      seeAlso: ['arch_history', 'cities', 'structural'],
      prereqs: ['arch_history'],
      leadsTo: [],

      chapterActivity: 'Month-long walking series through three exemplary neighborhoods — the West Village, Jackson Heights, and Bay Ridge — with attention to density, streetwall, and block size, led by a rotating Municipal Art Society docent.',

      sources: [
        'https://en.wikipedia.org/wiki/Urban_design',
        'https://en.wikipedia.org/wiki/Jane_Jacobs',
        'https://www.cnu.org/who-we-are/charter-new-urbanism',
      ],
      verifiedAt: '2026-04-22',
    },

  },
};
