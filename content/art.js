// content/art.js
// Batch: B04-humanities
// Last updated: 2026-04-22 by BATCH B04-humanities

window.CONTENT = window.CONTENT || {};
window.CONTENT.art = {
  subjectId: 'art',
  version: 1,
  lastUpdated: '2026-04-22',
  curator: 'BATCH B04-humanities',
  topics: {

    cave_to_cath: {
      id: 'cave_to_cath',
      name: 'Cave to Cathedral',
      level: 'Beginner',
      dek: 'Thirty-five thousand years of image-making — from Chauvet\'s bulls to Giotto\'s frescoes — sketched in a single arc.',
      readTime: '12 min',

      sections: ['The first pictures', 'Egypt, Greece, Rome', 'Byzantium and the Middle Ages', 'Giotto and the threshold'],
      body: [
        { type: 'lead', text: 'In a limestone cave in southern France, about 36,000 years ago, somebody ground charcoal into a paste and drew a running horse on the wall. The Chauvet paintings — rediscovered in 1994, and the subject of Werner Herzog\'s Cave of Forgotten Dreams — are not charming primitives. They are fully formed works of observation by someone who had spent a lifetime looking at animals. The history of Western art begins there, not at the Parthenon.' },
        { type: 'h2', text: 'Paleolithic and Neolithic image-making' },
        { type: 'p', text: 'The cave painters of Chauvet, Lascaux, and Altamira worked with a tight palette (charcoal, ochre, manganese) and a genuine sense of animal anatomy. They painted by torchlight, often far inside caves, and their images appear to have had ritual rather than decorative purposes. With the Neolithic came pottery, figurines, and eventually monumental architecture — Stonehenge, Malta\'s megaliths, Göbekli Tepe in Turkey. The separation of "art" from "craft" is a modern invention; for most of human history the two were the same thing.' },
        { type: 'h2', text: 'Egypt, Greece, Rome' },
        { type: 'p', text: 'Egyptian art, remarkably stable for three thousand years, is ruled by conventions of proportion — the human figure drawn with shoulders facing forward and face in profile, the figure\'s size indicating its social rank. Greek art, starting around 700 BCE, began to pursue naturalism and — by the fifth century, in Polykleitos and Phidias — reached a canonical rendering of the idealized human body that became the template for Western art for twenty-five centuries. Roman art inherited the Greek vocabulary and added something Greece had been reluctant about: individual portraiture, often with merciless realism. Read a Roman gravestone and you see the face of a bookkeeper dead two thousand years.' },
        { type: 'h2', text: 'Byzantium and the medieval West' },
        { type: 'p', text: 'After Rome, the Eastern Roman Empire — Byzantium — developed a visual language organized around icons: images of Christ, the Mother of God, and the saints, rendered in a deliberately non-naturalistic flat style that emphasized spiritual presence over physical likeness. Western medieval art absorbed the icon and then diverged, through Romanesque and then Gothic, into the great programs of stained glass and stone sculpture at Chartres, Notre-Dame, and Amiens. For most of the Middle Ages, art was made for the Church and read by the Church-going public as theology.' },
        { type: 'h2', text: 'Giotto and the opening' },
        { type: 'p', text: 'In the Arena Chapel at Padua, around 1305, a Tuscan painter named Giotto di Bondone did something nobody in Europe had done for centuries: he painted people as if they had weight, shadow, and psychology. Faces showed grief. Bodies had volume. Clothes draped over flesh. The frescoes are the single most important inflection point between the medieval and the Renaissance; every Italian painter for the next two hundred years worked in the shadow of what Giotto had opened.' },
        { type: 'quote', text: 'All that philosophers had said of God was ineffable, and all that poets had sung of him, and yet Giotto painted him.', cite: 'paraphrased from Cennino Cennini, Il libro dell\'arte, c. 1400' },
      ],

      keyTerms: ['cave painting', 'hieratic scale', 'classical naturalism', 'icon', 'fresco', 'Romanesque', 'Gothic', 'Giotto'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@smarthistoryvideos',
            title: 'Smarthistory — Prehistoric, Ancient, Medieval (playlists)',
            channel: 'Smarthistory',
            duration: 'variable',
            why: 'Beth Harris and Steven Zucker\'s short videos in front of the actual works. The best free art history resource on the web.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TheArtAssignment',
            title: 'The Art Assignment (channel)',
            channel: 'The Art Assignment (Sarah Urist Green)',
            duration: 'variable',
            why: 'PBS-funded series by Sarah Urist Green. The "Art Trip" and "Art Cooking" episodes are unusually good introductions to works and methods.',
          },
          {
            id: 'sBwpT3HC9dE',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=sBwpT3HC9dE',
            title: 'Paleolithic Art in 6 Minutes',
            channel: 'Curious Muse',
            duration: '6:05',
            why: 'A short orientation to the Chauvet/Lascaux/Altamira paintings, for the reader who has not yet encountered them.',
          },
        ],
        books: [
          {
            title: 'The Story of Art',
            author: 'E. H. Gombrich',
            year: 1950,
            url: '',
            why: 'The best single-volume art history in English. Gombrich wrote it for a non-specialist audience; it has been in print for seventy-five years and is still the book.',
          },
          {
            title: 'Ways of Seeing',
            author: 'John Berger',
            year: 1972,
            url: '',
            why: 'The companion to Berger\'s BBC series. 160 pages, politically pointed, changed how a generation looked at paintings.',
          },
          {
            title: 'Art: A Visual History',
            author: 'Robert Cumming',
            year: 2005,
            url: '',
            why: 'A DK coffee-table art history — less literary than Gombrich, more illustrated. A good companion on the shelf.',
          },
        ],
        articles: [
          {
            title: 'Heilbrunn Timeline of Art History',
            source: 'The Metropolitan Museum of Art',
            url: 'https://www.metmuseum.org/toah/',
            why: 'The Met\'s free art-history curriculum: essays, chronologies, and thousands of object pages, organized by period and region. The best single online reference.',
            year: null,
          },
          {
            title: 'Western art',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Western_painting',
            why: 'Long survey article with strong cross-linking to individual movements and artists.',
            year: null,
          },
          {
            title: 'Cave painting',
            source: 'Britannica',
            url: 'https://www.britannica.com/art/cave-painting',
            why: 'Editorial overview of Paleolithic cave art with the current scholarly dating.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Introduction to Art History (4.601)',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/4-601-introduction-to-art-history-fall-2018/',
            free: true,
            why: 'Kristel Smentek\'s free MIT course. Lectures, readings, assignments, all online.',
          },
        ],
        primarySources: [
          {
            title: 'Lascaux (French Ministry of Culture virtual tour)',
            url: 'https://archeologie.culture.gouv.fr/lascaux/en',
            why: 'The official room-by-room virtual tour of the Lascaux cave paintings.',
          },
          {
            title: 'Giotto\'s Arena Chapel (Khan Academy / Smarthistory)',
            url: 'https://smarthistory.org/giotto-arena-scrovegni-chapel-part-1-of-4/',
            why: 'Four-video close reading of the single most important fresco cycle in Western art.',
          },
        ],
      },

      seeAlso: ['renart', 'modern_art', 'drawing', 'prehistory'],
      prereqs: [],
      leadsTo: ['renart', 'drawing'],

      chapterActivity: 'Monthly Sunday mornings at the Met — the European paintings galleries on the second floor, one room at a time, with a volunteer art-history docent.',

      sources: [
        'https://www.metmuseum.org/toah/',
        'https://en.wikipedia.org/wiki/Western_painting',
        'https://www.britannica.com/art/cave-painting',
      ],
      verifiedAt: '2026-04-22',
    },

    renart: {
      id: 'renart',
      name: 'Renaissance Art',
      level: 'Intermediate',
      dek: 'Two centuries in Italy, the Netherlands, and Germany when painters solved perspective, anatomy, and light — and made human beings look human.',
      readTime: '13 min',

      sections: ['Perspective, the Florentine discovery', 'Anatomy and the body', 'The Northern alternative', 'What "Renaissance art" ended up meaning'],
      body: [
        { type: 'lead', text: 'Sometime around 1415, Filippo Brunelleschi stood in the main doorway of Florence\'s cathedral and held up a small painted panel with a hole drilled through the center. He asked a bystander to look through the hole at a mirror held out in front, which reflected the painted panel. The reflected image showed the Baptistery across the piazza — in one-point perspective, mathematically exact. In a single demonstration, Brunelleschi had reinvented a visual science that had been lost since Rome.' },
        { type: 'h2', text: 'Linear perspective, the Florentine discovery' },
        { type: 'p', text: 'Brunelleschi\'s method was codified in 1435 by Leon Battista Alberti\'s treatise On Painting, which gave artists an exact geometric procedure: choose a horizon line, place a vanishing point, and draw orthogonals converging to it. Masaccio\'s fresco The Tribute Money, painted in the Brancacci Chapel around 1427, is usually cited as the first great painting to use the new system. Within a generation, every Italian painter who mattered was working in perspective. The flat gold-ground altarpieces of the medieval world gave way to paintings that looked like windows onto rooms.' },
        { type: 'h2', text: 'Anatomy and the body' },
        { type: 'p', text: 'Leonardo da Vinci, Michelangelo, and a handful of their contemporaries were the first European artists in a thousand years to dissect cadavers systematically. Leonardo\'s anatomical drawings — now in Windsor Castle — are accurate in a way no Western drawings had been since Greek sculpture. Michelangelo painted the muscles on the Sistine ceiling as a man who had held the bones in his hands. This anatomical realism was coupled with a return to the classical idealization of the human body; the result was the High Renaissance figure, which every academic curriculum in Europe would teach for four hundred years.' },
        { type: 'h2', text: 'The Northern alternative' },
        { type: 'p', text: 'Meanwhile, in Flanders, a different Renaissance was happening. Jan van Eyck in Bruges, working in oil on panel around the 1430s, achieved a level of observational precision — the stubble on a chin, the weave of a carpet, the reflection in an eye — that the Italians could not match, because they were still working in fresco and egg tempera. The Northern Renaissance (van Eyck, Rogier van der Weyden, Hieronymus Bosch, Pieter Bruegel the Elder, Albrecht Dürer) absorbed Italian perspective and added its own close observation of light, material, and the peasant world.' },
        { type: 'h2', text: 'The longer meaning of "Renaissance"' },
        { type: 'p', text: 'The works we group under "Renaissance art" span about two centuries and several countries, and the things they have in common — realism, observation, the return to classical models, the emergence of the independent artist as a creative personality — mark a break in how Europe would make images for the next five hundred years. Leonardo kept notebooks. Dürer signed his prints. Titian negotiated his fees. The modern idea of the artist as genius was born here.' },
        { type: 'callout', text: 'Giorgio Vasari\'s Lives of the Most Eminent Painters, Sculptors, and Architects (1550, revised 1568) is the founding book of art history, and also why the Italian Renaissance story has historically been told as primarily Florentine. Read him against the Northern sources.' },
      ],

      keyTerms: ['linear perspective', 'chiaroscuro', 'sfumato', 'fresco', 'oil on panel', 'humanism', 'contrapposto', 'High Renaissance'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@smarthistoryvideos',
            title: 'Smarthistory — Renaissance playlists',
            channel: 'Smarthistory',
            duration: 'variable',
            why: 'Long-running series of short videos in front of the actual paintings. The "Early Italian Renaissance" and "High Renaissance" playlists are essential.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@Nerdwriter1',
            title: 'Nerdwriter1 — close readings of Renaissance works',
            channel: 'Nerdwriter1',
            duration: 'variable',
            why: 'Evan Puschak\'s video essays on individual paintings — Vermeer, Leonardo, Caravaggio — model how to look at a single work for ten minutes.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.bbc.co.uk/programmes/b00nq3l4',
            title: 'Civilisations (BBC, 2018)',
            channel: 'BBC',
            duration: 'multiple 60:00',
            why: 'The revised BBC Civilisations series includes major episodes on Renaissance art with modern scholarship.',
          },
        ],
        books: [
          {
            title: 'The Lives of the Most Eminent Painters, Sculptors, and Architects',
            author: 'Giorgio Vasari',
            year: 1550,
            url: 'https://www.gutenberg.org/ebooks/25326',
            why: 'The founding text of art history. Vol. 1 is free on Gutenberg; read the lives of Giotto, Masaccio, Brunelleschi.',
          },
          {
            title: 'On Painting',
            author: 'Leon Battista Alberti',
            year: 1435,
            url: 'https://archive.org/details/DellaPitturaAlberti',
            why: 'The treatise that codified linear perspective. Short, foundational, still readable.',
          },
          {
            title: 'The Renaissance in Italy: A Social and Cultural History of the Rinascimento',
            author: 'Guido Ruggiero',
            year: 2015,
            url: '',
            why: 'A contemporary scholarly survey of the whole Italian Renaissance, with strong attention to the art.',
          },
        ],
        articles: [
          {
            title: 'Italian Renaissance painting',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Italian_Renaissance_painting',
            why: 'Long, well-illustrated entry covering Early, High, and Late Renaissance.',
            year: null,
          },
          {
            title: 'Renaissance Art',
            source: 'Heilbrunn Timeline (Met Museum)',
            url: 'https://www.metmuseum.org/toah/hd/ren/hd_ren.htm',
            why: 'The Met\'s essay on Italian Renaissance art, with links to hundreds of relevant objects in their collection.',
            year: null,
          },
          {
            title: 'Northern Renaissance',
            source: 'Khan Academy / Smarthistory',
            url: 'https://smarthistory.org/renaissance-reformation/northern-renaissance/',
            why: 'Free, scholar-written curriculum on van Eyck, Dürer, Bosch, and Bruegel. Better than most textbooks.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Italian Renaissance Art (Smarthistory curriculum)',
            provider: 'Smarthistory',
            url: 'https://smarthistory.org/renaissance-reformation/italian-renaissance/',
            free: true,
            why: 'Free, comprehensive curriculum on Italian Renaissance painting, sculpture, and architecture, written by working scholars.',
          },
        ],
        primarySources: [
          {
            title: 'Leonardo da Vinci — Notebooks (selected, Gutenberg)',
            url: 'https://www.gutenberg.org/ebooks/5000',
            why: 'The Jean Paul Richter translation of Leonardo\'s notebooks on Gutenberg.',
          },
          {
            title: 'Vasari — Lives, Vol. 1 (Gutenberg)',
            url: 'https://www.gutenberg.org/ebooks/25326',
            why: 'The Italian original has been translated; read the Giotto and Masaccio lives as starting points.',
          },
        ],
      },

      seeAlso: ['cave_to_cath', 'modern_art', 'renaissance', 'drawing'],
      prereqs: ['cave_to_cath'],
      leadsTo: ['modern_art'],

      chapterActivity: 'Seasonal evenings at the Frick Collection — Vermeer, Bellini, Holbein in one intimate mansion, with the quiet the Met\'s galleries never give you.',

      sources: [
        'https://www.metmuseum.org/toah/hd/ren/hd_ren.htm',
        'https://en.wikipedia.org/wiki/Italian_Renaissance_painting',
        'https://smarthistory.org/renaissance-reformation/italian-renaissance/',
      ],
      verifiedAt: '2026-04-22',
    },

    modern_art: {
      id: 'modern_art',
      name: 'Modern Art',
      level: 'Intermediate',
      dek: 'From Manet\'s 1863 scandal to Pollock\'s drip paintings — a hundred years of painters asking what a painting could still do.',
      readTime: '13 min',

      sections: ['Manet and the break', 'Impressionism and after', 'The twentieth-century explosions', 'After 1945'],
      body: [
        { type: 'lead', text: 'In May 1863, the Salon des Refusés opened in Paris, showing works that had been rejected by the official Salon. One painting drew crowds and laughter and outrage: Édouard Manet\'s Déjeuner sur l\'herbe, which showed two clothed men picnicking in a forest with a naked woman looking straight at the viewer. The scandal was not the nudity — the Salon was full of mythological nudes — but the directness of the gaze and the flatness of the paint. Most histories of modern art begin with that canvas.' },
        { type: 'h2', text: 'Manet and the break' },
        { type: 'p', text: 'What made Manet a threshold figure was not his subject matter but his handling. He flattened shadows. He painted surfaces without modeling. He let the canvas show through. His Olympia, shown at the 1865 Salon, is a courtesan on a bed looking straight at you, painted in blocks of tone that refuse the conventional illusion of three-dimensional flesh. The painting is still at the Musée d\'Orsay; it still makes visitors uncomfortable, which is approximately what Manet wanted.' },
        { type: 'h2', text: 'Impressionism and post-impressionism' },
        { type: 'p', text: 'Monet, Renoir, Pissarro, Morisot, and Degas followed Manet\'s lead and worked outside — painting landscapes in broken color and shifting light, painting dancers and bathers and commuters. The 1874 group show that gave the movement its name was a commercial failure and a critical one; forty years later, Monet\'s Water Lilies were being painted at scale for museums. After Impressionism came Cézanne, who argued that painting was about structure and geometry; Van Gogh, who argued that it was about feeling; Gauguin, who argued that it was about symbol and decoration. All three had died by 1906; their arguments shaped the next half-century.' },
        { type: 'h2', text: 'The twentieth-century explosions' },
        { type: 'p', text: 'In the decade before the First World War, Picasso and Braque invented Cubism — fractured surfaces, multiple viewpoints, collage. The Italian Futurists celebrated machines; the German Expressionists (Kirchner, Kandinsky, the Blue Rider group) pursued emotional intensity through color. The Russian Constructivists made art serve revolution. The Dadaists mocked everything. The Surrealists — Dalí, Magritte, de Chirico, Max Ernst — painted dreams with oil-painting craftsmanship. Each movement was, in effect, a hypothesis about what painting was still for now that photography had taken its old job of recording appearances.' },
        { type: 'h2', text: 'After 1945: New York takes over' },
        { type: 'p', text: 'The Second World War pushed the center of Western art from Paris to New York. Jackson Pollock\'s drip paintings, Willem de Kooning\'s women, Mark Rothko\'s color-fields, Barnett Newman\'s zips — the Abstract Expressionists argued that a painting could dispense with subject matter entirely and still function as a serious object. Pop Art (Warhol, Lichtenstein) swung back to images from consumer culture. Minimalism (Donald Judd, Agnes Martin) reduced the object to its essentials. By the 1980s, "postmodern" painting was absorbing every prior movement at once. The twenty-first-century picture is more plural and more international than any prior moment in the history of art.' },
        { type: 'quote', text: 'Every good painter paints what he is.', cite: 'Jackson Pollock, interview with William Wright, 1950' },
      ],

      keyTerms: ['Impressionism', 'Post-Impressionism', 'Cubism', 'Fauvism', 'Surrealism', 'Abstract Expressionism', 'Pop Art', 'Minimalism'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@smarthistoryvideos',
            title: 'Smarthistory — Modernism playlists (Impressionism through Abstract Expressionism)',
            channel: 'Smarthistory',
            duration: 'variable',
            why: 'Beth Harris and Steven Zucker on Manet, Monet, Cézanne, Picasso, Pollock — in front of the actual works, every time.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TheArtAssignment',
            title: 'The Art Assignment — episodes on Modernism',
            channel: 'The Art Assignment (Sarah Urist Green)',
            duration: 'variable',
            why: 'The "Case For..." episodes on individual twentieth-century artists (Yayoi Kusama, Bruce Nauman, Agnes Martin) are unusually good.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@greatartexplained',
            title: 'Great Art Explained (channel)',
            channel: 'Great Art Explained (James Payne)',
            duration: 'variable',
            why: 'Fifteen-minute deep reads of single modern paintings, with attention to historical context. Excellent for the curious adult.',
          },
        ],
        books: [
          {
            title: 'Art Since 1900',
            author: 'Hal Foster, Rosalind Krauss, Yve-Alain Bois, Benjamin H. D. Buchloh, David Joselit',
            year: 2004,
            url: '',
            why: 'The standard scholarly history of twentieth-century art, organized by year. Dense, authoritative, very much required reading for serious students.',
          },
          {
            title: 'The Shock of the New',
            author: 'Robert Hughes',
            year: 1980,
            url: '',
            why: 'The book of Hughes\'s BBC series, still the most elegant general introduction to modernism. Hughes\'s prose is one of the glories of twentieth-century art writing.',
          },
          {
            title: 'Modern Art: A Very Short Introduction',
            author: 'David Cottington',
            year: 2005,
            url: '',
            why: 'A hundred and fifty pages; the shortest serious entry to the field. Good first book.',
          },
        ],
        articles: [
          {
            title: 'Modern art',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Modern_art',
            why: 'Long survey article with separate entries on every movement.',
            year: null,
          },
          {
            title: 'MoMA — Learning portal',
            source: 'Museum of Modern Art',
            url: 'https://www.moma.org/learn/',
            why: 'MoMA\'s free curriculum covers every major twentieth-century movement with essays, videos, and object pages.',
            year: null,
          },
          {
            title: 'Khan Academy — 20th-century art',
            source: 'Khan Academy / Smarthistory',
            url: 'https://www.khanacademy.org/humanities/art-1010',
            why: 'The Smarthistory curriculum on twentieth-century art, hosted on Khan Academy, free.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Modern Art & Ideas',
            provider: 'Coursera (MoMA)',
            url: 'https://www.coursera.org/learn/modern-art-ideas',
            free: true,
            why: 'MoMA\'s own free course on twentieth-century art, built around the collection.',
          },
        ],
        primarySources: [
          {
            title: 'Manet — Olympia (Musée d\'Orsay object page)',
            url: 'https://en.wikipedia.org/wiki/Olympia_(Manet)',
            why: 'Wikipedia\'s entry links to the Musée d\'Orsay\'s official page and to the 1865 Salon reviews.',
          },
          {
            title: 'Kandinsky — Concerning the Spiritual in Art (1911)',
            url: 'https://www.gutenberg.org/ebooks/5321',
            why: 'Kandinsky\'s manifesto on abstract painting. Short and foundational.',
          },
        ],
      },

      seeAlso: ['renart', 'cave_to_cath', 'photography'],
      prereqs: ['renart'],
      leadsTo: [],

      chapterActivity: 'Monthly evenings at MoMA — free for NYC chapter members on Friday nights, gallery by gallery, 1870 to the present.',

      sources: [
        'https://en.wikipedia.org/wiki/Modern_art',
        'https://www.moma.org/learn/',
        'https://www.coursera.org/learn/modern-art-ideas',
      ],
      verifiedAt: '2026-04-22',
    },

    drawing: {
      id: 'drawing',
      name: 'Drawing',
      level: 'Beginner',
      dek: 'The most basic visual art there is — a line, a surface, and a pair of eyes learning to agree.',
      readTime: '11 min',

      sections: ['Why drawing is still taught', 'Contour and gesture', 'Value, light, shadow', 'The habit of drawing'],
      body: [
        { type: 'lead', text: 'In a Florentine workshop in the 1470s, an apprentice named Leonardo da Vinci was given the usual beginner\'s task: copy the master\'s drawings. Leonardo took it further. He drew animals, machines, currents of water, the muscles of the shoulder, the wings of birds. His notebooks, running to some 7,000 surviving pages, are the single greatest argument ever made that to look hard is a thinking skill, not only an aesthetic one. Drawing, five hundred years after Leonardo, is still the quickest way to train a pair of eyes.' },
        { type: 'h2', text: 'Why you should learn to draw even if you do not want to be an artist' },
        { type: 'p', text: 'Drawing is the act of paying close attention with your hand. It forces you to see things you have been looking past — the exact angle of a nose, the way a shadow falls across a chin, the real shape of a shoulder. Doctors in the early twentieth century were often taught anatomical drawing for this reason; so were architects, botanists, field biologists. The skill is not decorative. It is a form of noticing, and the noticing transfers to other domains.' },
        { type: 'h2', text: 'Contour and gesture, the two drawings' },
        { type: 'p', text: 'The two foundational exercises in any beginning drawing class are contour and gesture. A contour drawing is a slow, continuous line that traces the edge of an object; a blind contour drawing (not looking at the paper) is a useful exercise in paying attention to the object rather than to the drawing. A gesture drawing is its opposite — ten to sixty seconds to capture the overall energy, weight, and motion of a figure or pose. Master those two, and the rest of drawing is an extension of them.' },
        { type: 'h2', text: 'Value, light, and shadow' },
        { type: 'p', text: 'After line comes value — the gradations of light and dark. The Renaissance term is chiaroscuro, the play of light and shadow that gives a drawing the illusion of volume. Training the eye to see value means squinting at a subject until the color drops out and only the lightness-darkness remains; a beginner drawer is almost always getting colors right and values wrong. Most of the difference between a drawing that works and one that does not is in the values.' },
        { type: 'h2', text: 'The habit more than the talent' },
        { type: 'p', text: 'People talk about drawing as if it were a gift. It is overwhelmingly a practice. A sketchbook, twenty minutes a day, for a year, will take almost anyone from "I cannot draw" to "I am, in fact, drawing." The test is not whether your drawings look like the object; the test is whether you have learned to look at the object. Kimon Nicolaides, an American drawing teacher, wrote that drawing does not make the hand skilled — it makes the eye honest. That is exactly right.' },
      ],

      keyTerms: ['contour', 'gesture', 'value', 'chiaroscuro', 'cross-hatching', 'negative space', 'sight-size', 'proportion'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ProkoTV',
            title: 'Proko (channel)',
            channel: 'Proko (Stan Prokopenko)',
            duration: 'variable',
            why: 'Stan Prokopenko\'s free lessons on figure drawing, anatomy, and portraits are the current best drawing tutorials on YouTube. Start with the "Drawing Basics" and "Figure Drawing Fundamentals" playlists.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@DrawingTutorialsOnline',
            title: 'Drawing Tutorials Online — Matt Fussell',
            channel: 'The Virtual Instructor',
            duration: 'variable',
            why: 'A working artist\'s patient lessons in pencil, ink, charcoal, and pastel. Less flashy than Proko; often more useful for absolute beginners.',
          },
          {
            id: 'kdMCT95UTQA',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=kdMCT95UTQA',
            title: 'How to Draw (Betty Edwards, documentary)',
            channel: 'archival',
            duration: '26:00',
            why: 'Betty Edwards of "Drawing on the Right Side of the Brain" demonstrating her method. The pedagogy that opened drawing for a generation of adults.',
          },
        ],
        books: [
          {
            title: 'Drawing on the Right Side of the Brain',
            author: 'Betty Edwards',
            year: 1979,
            url: '',
            why: 'The most effective how-to-draw book ever written, based on Edwards\'s observation that adult beginners are fighting their own pattern recognition. Widely in print, widely translated.',
          },
          {
            title: 'The Natural Way to Draw',
            author: 'Kimon Nicolaides',
            year: 1941,
            url: '',
            why: 'Nicolaides\'s year-long self-study course. Demanding, beautifully written, unmatched in its insistence on gesture and contour.',
          },
          {
            title: 'Keys to Drawing',
            author: 'Bert Dodson',
            year: 1985,
            url: '',
            why: 'A patient American textbook organized around observation exercises. Excellent if Edwards doesn\'t click.',
          },
        ],
        articles: [
          {
            title: 'Drawing',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Drawing',
            why: 'Survey article with sections on materials, techniques, and history.',
            year: null,
          },
          {
            title: 'Chiaroscuro',
            source: 'Encyclopædia Britannica',
            url: 'https://www.britannica.com/art/chiaroscuro',
            why: 'Short editorial on the light-dark tradition from Leonardo to Caravaggio.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Drawing Nature, Science and Culture: Natural History Illustration 101',
            provider: 'edX (University of Newcastle, Australia)',
            url: 'https://www.edx.org/learn/drawing/the-university-of-newcastle-australia-drawing-nature-science-and-culture-natural-history-illustration-101',
            free: true,
            why: 'A free drawing-from-observation course with the discipline of natural-history illustration. Excellent foundation.',
          },
        ],
        tools: [
          {
            title: 'Line of Action — figure drawing practice',
            url: 'https://line-of-action.com/practice-tools/figure-drawing/',
            why: 'Free online timed figure-drawing reference, with a vast library of poses. The single most useful online drawing tool.',
          },
        ],
      },

      seeAlso: ['composition', 'color', 'cave_to_cath'],
      prereqs: [],
      leadsTo: ['composition', 'color'],

      chapterActivity: 'A weekly Sunday drawing group at Bryant Park in warm months and at the NYPL\'s picture collection in winter — sketchbooks provided, no talent required.',

      sources: [
        'https://en.wikipedia.org/wiki/Drawing',
        'https://www.britannica.com/art/chiaroscuro',
      ],
      verifiedAt: '2026-04-22',
    },

    color: {
      id: 'color',
      name: 'Color Theory',
      level: 'Beginner',
      dek: 'The science and practice of how colors behave next to each other — Newton, Goethe, and the artists who had to paint the consequences.',
      readTime: '11 min',

      sections: ['Newton\'s prism', 'Goethe\'s counter-argument', 'The color wheel in use', 'How painters actually mix'],
      body: [
        { type: 'lead', text: 'In 1666, a twenty-three-year-old Isaac Newton, sitting out the plague in his mother\'s farmhouse, held a glass prism up to a beam of sunlight and watched the white light split into a spectrum of colors on the wall. He repeated the experiment with a second prism, which combined the spectrum back into white. The argument this settled — that color is not a property of objects but of light — founded the physics of color. A hundred and forty years later, Goethe would spend most of his intellectual life trying to prove Newton wrong. He was wrong to do so, but he was productively wrong.' },
        { type: 'h2', text: 'Newton and the physics of color' },
        { type: 'p', text: 'Newton identified seven colors in the spectrum — red, orange, yellow, green, blue, indigo, violet — and organized them on a color wheel, with red and violet meeting. (The number seven was partly a numerological choice; the physics does not care about it.) Color, in the Newtonian account, is a property of wavelengths of light. The color of an object depends on which wavelengths it reflects. This is the account physics and optics still teach.' },
        { type: 'h2', text: 'Goethe\'s counter-argument' },
        { type: 'p', text: 'Goethe\'s Theory of Colours (1810) spent twenty years trying to reinterpret Newton\'s prism experiments as evidence that color emerges at the boundary between light and darkness, not from white light\'s internal structure. As physics he was wrong. As phenomenology he was onto something: he studied afterimages, color constancy, the way that a shadow cast in yellow lamplight can appear blue. Goethe\'s color wheel — organized by perceptual harmony rather than spectral position — became the one artists actually used.' },
        { type: 'h2', text: 'How a working painter uses a color wheel' },
        { type: 'p', text: 'The painter\'s color wheel organizes colors around primaries (red, yellow, blue) and their mixtures (orange, green, violet, the secondaries), with tertiaries between them. Opposites on the wheel — red and green, blue and orange, yellow and violet — are complementary; placed next to each other they intensify, and mixed together they mute toward grey. The rules of thumb are more useful than their theoretical justification: place warms against cools to make things advance; lower saturation to create distance; limit your palette to three colors plus white and you will almost always get a better painting than from a full paintbox.' },
        { type: 'h2', text: 'The practical vocabulary' },
        { type: 'p', text: 'Hue is the name of the color — red, blue, chartreuse. Value is how light or dark it is. Chroma (or saturation) is how intense or muted it is. Most beginner mistakes are value mistakes; most intermediate mistakes are chroma mistakes. Joseph Albers\'s Interaction of Color (1963) — a book that consists mostly of colored paper squares with careful captions — is the single best training for an eye that wants to see these three variables separately.' },
      ],

      keyTerms: ['hue', 'value', 'chroma', 'complementary colors', 'primary', 'secondary', 'tertiary', 'color temperature'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@jamesgurneyart',
            title: 'James Gurney (channel)',
            channel: 'James Gurney',
            duration: 'variable',
            why: 'The author of Color and Light — a working illustrator\'s short videos on color observation and plein-air painting.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ProkoTV',
            title: 'Proko — color theory series',
            channel: 'Proko (Stan Prokopenko & Marshall Vandruff)',
            duration: 'variable',
            why: 'Stan\'s color lessons with Marshall Vandruff. Structured, free, with exercises.',
          },
          {
            id: 'AAkeWBs4lSI',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=AAkeWBs4lSI',
            title: 'A Brief History of Color in Art',
            channel: 'The Art Assignment',
            duration: '9:47',
            why: 'Sarah Urist Green on where pigments came from and what that meant for what painters could paint.',
          },
        ],
        books: [
          {
            title: 'Interaction of Color',
            author: 'Josef Albers',
            year: 1963,
            url: '',
            why: 'The Bauhaus master\'s course in how color behaves next to color. 150 exercises, a lifetime of eye-training.',
          },
          {
            title: 'Color and Light: A Guide for the Realist Painter',
            author: 'James Gurney',
            year: 2010,
            url: '',
            why: 'The best contemporary book on practical color for representational painters. Gurney paints; he teaches from the bench.',
          },
          {
            title: 'Theory of Colours',
            author: 'Johann Wolfgang von Goethe',
            year: 1810,
            url: 'https://archive.org/details/goethestheoryofc00goet',
            why: 'Goethe\'s book, free on Archive.org. Wrong about Newton, revelatory about perception.',
          },
        ],
        articles: [
          {
            title: 'Color theory',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Color_theory',
            why: 'Good overview article with sections on the physics, the history, and the practical color wheel.',
            year: null,
          },
          {
            title: 'Color',
            source: 'Encyclopædia Britannica',
            url: 'https://www.britannica.com/science/color',
            why: 'Britannica\'s editorial overview — physics, physiology, and culture.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'The Language of Color',
            provider: 'Coursera (Rochester Institute of Technology)',
            url: 'https://www.coursera.org/learn/color-language',
            free: true,
            why: 'RIT\'s free course on color perception and application. Scientific rather than artistic, a useful complement to Albers.',
          },
        ],
        tools: [
          {
            title: 'Adobe Color',
            url: 'https://color.adobe.com/',
            why: 'Browser-based color-wheel tool. Pick a base color and see analogous, complementary, triadic, and tetradic palettes instantly.',
          },
          {
            title: 'Coolors',
            url: 'https://coolors.co/',
            why: 'Fast palette generator with one-key-press variation. Good for quickly exploring color relationships.',
          },
        ],
      },

      seeAlso: ['drawing', 'composition', 'design'],
      prereqs: [],
      leadsTo: ['composition', 'design'],

      chapterActivity: 'A monthly Saturday painting meet-up at Pratt Institute\'s open-studio sessions, with specific focus on color-mixing drills from Albers.',

      sources: [
        'https://en.wikipedia.org/wiki/Color_theory',
        'https://www.britannica.com/science/color',
      ],
      verifiedAt: '2026-04-22',
    },

    composition: {
      id: 'composition',
      name: 'Composition',
      level: 'Intermediate',
      dek: 'The arrangement of shapes, values, and lines that decides whether the eye reads a picture at all.',
      readTime: '11 min',

      sections: ['What composition is', 'Classical devices', 'Value and mass', 'The modern critique'],
      body: [
        { type: 'lead', text: 'In the Louvre, hanging in the Denon wing, is a painting by Poussin called The Rape of the Sabine Women. Beneath the mythological subject is a ruthlessly organized grid of diagonals, verticals, and horizontal bands. Every figure is placed for a reason. No horse is looking in the wrong direction. Poussin was famous for laying out wax figures on a miniature stage to plan his compositions before he touched a brush. Composition is what every picture has, whether the painter admits to it or not.' },
        { type: 'h2', text: 'What the word covers' },
        { type: 'p', text: 'Composition is the arrangement of the visual elements within the frame — shapes, masses, lines of force, areas of light and dark, focal points. It is not the same as subject matter. Two paintings of the same bowl of fruit can have opposite compositions. It is also not the same as style. A Pollock and a Raphael are both compositions, built on different principles. Composition is the answer to the question: where does the eye go, in what order, and why?' },
        { type: 'h2', text: 'The classical devices' },
        { type: 'p', text: 'Renaissance and Baroque painters worked with a handful of reliable armatures. The rule of thirds — placing key elements along imaginary lines that divide the frame into nine equal rectangles. The golden ratio — a more exotic version of the same idea, based on a specific proportion repeatedly used in classical architecture. The Rembrandt triangle — the pyramidal group in which heavier elements anchor the bottom and lighter elements rise. The serpentine (figura serpentinata) — a twisting S-curve for single figures. These are not laws, but they are so regularly effective that every painter should know when they are using them and when they are not.' },
        { type: 'h2', text: 'Value is composition\'s quietest tool' },
        { type: 'p', text: 'If you convert any great painting to greyscale, you see its underlying structure more clearly. A Caravaggio becomes three black shapes and two white ones. A Vermeer becomes a subtle gradient from a shadowed left side to a lit right. A successful composition is almost always a strong pattern of values — the colors come second. An old studio trick: squint at your own work in progress until the colors fade, and look at the values that remain.' },
        { type: 'h2', text: 'The twentieth century\'s rebellion' },
        { type: 'p', text: 'Modernism generally, and abstract art specifically, rewrote the rules. Mondrian composed with perpendicular lines and three primary colors. Rothko composed with large stacked rectangles of fog-edged color. Pollock composed by pouring paint and stopping. The classical devices are still there in most of them — Mondrian worked out his grids with painstaking care — but the vocabulary has widened. A contemporary painter chooses from a much larger menu of compositional possibilities than a Renaissance painter did, and every choice still counts.' },
        { type: 'callout', text: 'A useful exercise: take a painting you like, and make a small thumbnail of it in five gray values (white, light gray, mid gray, dark gray, black). You will see the composition\'s armature in two minutes. Do this for twenty paintings and you will start to see your own.' },
      ],

      keyTerms: ['focal point', 'rule of thirds', 'golden ratio', 'leading line', 'negative space', 'value pattern', 'asymmetry', 'balance'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@Nerdwriter1',
            title: 'Nerdwriter1 — composition close readings',
            channel: 'Nerdwriter1',
            duration: 'variable',
            why: 'Evan Puschak breaks down the composition of specific films and paintings. The Kubrick and Spielberg essays are good models.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@EveryFrameaPainting',
            title: 'Every Frame a Painting (archived)',
            channel: 'Every Frame a Painting',
            duration: 'variable',
            why: 'Tony Zhou\'s now-ended series on visual composition in film is the finest free course on how the eye reads moving images.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@jamesgurneyart',
            title: 'James Gurney — composition tutorials',
            channel: 'James Gurney',
            duration: 'variable',
            why: 'Practical composition advice from a working representational painter.',
          },
        ],
        books: [
          {
            title: 'Painting as a Pastime',
            author: 'Winston Churchill',
            year: 1948,
            url: '',
            why: 'Churchill the amateur painter on composition, in a fifty-page essay that is surprisingly perceptive. Worth reading for the prose alone.',
          },
          {
            title: 'Composition',
            author: 'Arthur Wesley Dow',
            year: 1899,
            url: 'https://archive.org/details/cu31924031269946',
            why: 'Dow\'s turn-of-the-century textbook, still in print. The book that shaped American art education — Georgia O\'Keeffe was his student.',
          },
          {
            title: 'Framed Ink: Drawing and Composition for Visual Storytellers',
            author: 'Marcos Mateu-Mestre',
            year: 2010,
            url: '',
            why: 'A working storyboard artist\'s textbook on composition for narrative images. Practical, concrete, widely used in animation schools.',
          },
        ],
        articles: [
          {
            title: 'Composition (visual arts)',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Composition_(visual_arts)',
            why: 'Good overview with sections on classical devices and modern approaches.',
            year: null,
          },
          {
            title: 'Rule of thirds',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Rule_of_thirds',
            why: 'On the most-cited composition rule, its origin in photography, and when to break it.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Seeing Through Photographs',
            provider: 'Coursera (MoMA)',
            url: 'https://www.coursera.org/learn/photography',
            free: true,
            why: 'Sarah Meister\'s free MoMA course on photographic composition and meaning, keyed to the museum\'s collection.',
          },
        ],
      },

      seeAlso: ['drawing', 'color', 'design', 'photography'],
      prereqs: ['drawing'],
      leadsTo: ['design', 'photography'],

      chapterActivity: 'A monthly film-composition evening at Metrograph on the Lower East Side — one film selected for its visual composition, watched attentively, discussed after.',

      sources: [
        'https://en.wikipedia.org/wiki/Composition_(visual_arts)',
        'https://en.wikipedia.org/wiki/Rule_of_thirds',
      ],
      verifiedAt: '2026-04-22',
    },

    design: {
      id: 'design',
      name: 'Design Principles',
      level: 'Intermediate',
      dek: 'The discipline of making things that work, using tools — contrast, alignment, proximity, rhythm, hierarchy — old enough to be almost invisible.',
      readTime: '11 min',

      sections: ['Design is not decoration', 'The four classical principles', 'Hierarchy and flow', 'Where form follows function'],
      body: [
        { type: 'lead', text: 'In 1908, the Austrian architect Adolf Loos published an essay called "Ornament and Crime" in which he argued, in the then-new rhetoric of modernism, that decoration on a useful object was a cultural failing. The argument was a caricature, but it set the terms for the twentieth century: design, at its modernist best, was about clarity, function, and the removal of inessentials. That aesthetic argument is also, almost accidentally, a set of practical design principles — and those principles are older than the argument.' },
        { type: 'h2', text: 'Design is not the same as decoration' },
        { type: 'p', text: 'Design is the discipline of making a thing — a typeface, a chair, a website, a salt shaker, a subway map — so that it works well, is understood, and can be made. Ornament is a subset of design, and usually a small one. A beautifully designed chair does not need carved legs to be beautifully designed. When design is done well, it gets out of the way: the viewer pays attention to the subject, the reader understands the text, the sitter sits comfortably.' },
        { type: 'h2', text: 'Four principles everyone should learn' },
        { type: 'p', text: 'Contrast: make different things look different. If two elements are not the same, make them clearly not the same — in size, weight, color, or shape. Alignment: every element should have a visual relationship with another element on the page. Nothing floats at random. Proximity: group related items close together, and move unrelated items apart. Repetition: reuse elements — colors, shapes, spacing — to create rhythm and unity. Robin Williams\'s Non-Designer\'s Design Book, published in 1994, turned these four principles into an entire design education; she called them CRAP, which every design student has since memorized under duress.' },
        { type: 'h2', text: 'Hierarchy and flow' },
        { type: 'p', text: 'Good design controls where the eye goes first, second, and third. Hierarchy is the deliberate arrangement of importance through size, weight, color, and spacing. A magazine article has a title that is larger than its author name that is larger than its body text; a subway map has thicker lines for the main trains than the branch lines; a website has a primary call-to-action that reads before the secondary one. The test is simple: look at the layout for one second, then look away. What do you remember? That is what you have emphasized — whether you meant to or not.' },
        { type: 'h2', text: 'Form, function, and the quiet argument' },
        { type: 'p', text: 'The American architect Louis Sullivan wrote in 1896 that "form ever follows function," and the phrase became the rallying cry of modernist design. It is mostly true and occasionally glib. A purely functional chair is not always a good chair; a purely functional website is not always a good website. The discipline matures when it recognizes that function is plural — a chair needs to be sittable and also desirable and also manufacturable and also recognizable — and that good design is the art of balancing those functions in a single object.' },
        { type: 'quote', text: 'Good design is as little design as possible.', cite: 'Dieter Rams, tenth principle' },
      ],

      keyTerms: ['hierarchy', 'contrast', 'alignment', 'proximity', 'repetition', 'grid', 'typography', 'affordance'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@thefutur',
            title: 'The Futur — design and typography (channel)',
            channel: 'The Futur',
            duration: 'variable',
            why: 'Chris Do\'s channel on commercial design, typography, and running a design practice. Pragmatic, professional.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@Vox',
            title: 'Vox — "Design Canon" episodes',
            channel: 'Vox',
            duration: 'variable',
            why: 'Vox has produced well-researched videos on iconic design objects — the New York subway map, Helvetica, the original iMac. Browse the "Vox Borders" and design playlists.',
          },
          {
            id: '1RQsHfdBx28',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=1RQsHfdBx28',
            title: 'How an Icon is Made — Dieter Rams',
            channel: 'Gary Hustwit / archival',
            duration: 'variable',
            why: 'Dieter Rams on his ten principles. The documentary Rams (2018) is paid; this clip is a good free window into it.',
          },
        ],
        books: [
          {
            title: 'The Design of Everyday Things',
            author: 'Don Norman',
            year: 1988,
            url: '',
            why: 'The classic on why some doors are confusing and some are not. The best single book on usability and the psychology of design.',
          },
          {
            title: 'The Non-Designer\'s Design Book',
            author: 'Robin Williams',
            year: 1994,
            url: '',
            why: 'The book that taught a generation of non-designers the four principles. Still the first book to give to anyone who wants to make better handouts, posters, or slides.',
          },
          {
            title: 'Grid Systems in Graphic Design',
            author: 'Josef Müller-Brockmann',
            year: 1981,
            url: '',
            why: 'The Swiss master\'s textbook on the grid. A bilingual (German/English) classic and still the most influential book on page design.',
          },
        ],
        articles: [
          {
            title: 'Design',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Design',
            why: 'Broad survey of design as a discipline across product, graphic, industrial, and interaction.',
            year: null,
          },
          {
            title: 'Dieter Rams — Ten Principles of Good Design',
            source: 'Vitsoe (Rams\'s company)',
            url: 'https://www.vitsoe.com/us/about/good-design',
            why: 'Rams\'s ten principles on their official hosts\' site. Every designer should read them once a year.',
            year: null,
          },
          {
            title: 'The Principles of Design',
            source: 'Interaction Design Foundation',
            url: 'https://www.interaction-design.org/literature/topics/design-principles',
            why: 'A clear, well-maintained encyclopedia-style portal to design principles, by the largest online design school.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Graphic Design Specialization',
            provider: 'Coursera (California Institute of the Arts)',
            url: 'https://www.coursera.org/specializations/graphic-design',
            free: true,
            why: 'CalArts\'s free graphic design specialization. The "Fundamentals of Graphic Design" course is the best first step.',
          },
        ],
        tools: [
          {
            title: 'Figma',
            url: 'https://www.figma.com/',
            why: 'The dominant browser-based design tool. Free starter tier; widely used professionally.',
          },
        ],
      },

      seeAlso: ['composition', 'color', 'drawing', 'arch_history'],
      prereqs: ['composition'],
      leadsTo: [],

      chapterActivity: 'Monthly visits to the Cooper Hewitt Smithsonian Design Museum on the Upper East Side — one rotating exhibition each session, followed by cocktails at a bar on Madison.',

      sources: [
        'https://en.wikipedia.org/wiki/Design',
        'https://www.vitsoe.com/us/about/good-design',
        'https://www.interaction-design.org/literature/topics/design-principles',
      ],
      verifiedAt: '2026-04-22',
    },

  },
};
