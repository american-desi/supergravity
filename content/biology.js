// content/biology.js
// Batch: B03-life-sciences
// Last updated: 2026-04-22 by BATCH B03-life-sciences
//
// Topics this subject must cover (from data.js):
//   Cells & Genes: cell, genetics, evolution
//   Systems:       ecology, neuro, anatomy

window.CONTENT = window.CONTENT || {};
window.CONTENT.biology = {
  subjectId: 'biology',
  version: 1,
  lastUpdated: '2026-04-22',
  curator: 'BATCH B03-life-sciences',
  topics: {

    // ——— CELL BIOLOGY ———
    cell: {
      id: 'cell',
      name: 'Cell Biology',
      level: 'Beginner',
      dek: 'The smallest thing that counts as alive — and the unit every other biology lesson eventually returns to.',
      readTime: '12 min',

      sections: ['Hooke\'s cork', 'The cell theory', 'Prokaryotes and eukaryotes', 'A working city', 'Origin of complex life'],
      body: [
        { type: 'lead', text: 'In 1665, an English polymath named Robert Hooke placed a sliver of cork under an early microscope and saw that it was made of tiny empty rooms. He called them cells, after the bare sleeping quarters of monks. The word stuck, though Hooke was looking at dead plant walls — the living interior would not be seen clearly for another two centuries. His book, Micrographia, became the surprise bestseller of Restoration London. Samuel Pepys stayed up until two in the morning reading it and called it the most ingenious book he had ever read.' },
        { type: 'h2', text: 'From Hooke to the cell theory' },
        { type: 'p', text: 'It took until the 1830s for Matthias Schleiden, a Berlin botanist, and Theodor Schwann, his zoologist friend, to argue that every plant and every animal is built of cells. Another decade passed before Rudolf Virchow, the Prussian pathologist who would later help found medical science, added the third leg: Omnis cellula e cellula — every cell comes from a pre-existing cell. That three-part claim — life is cellular, the cell is the unit of function, cells only come from cells — is the closest thing biology has to Newton\'s laws.' },
        { type: 'p', text: 'The theory settled a question that had unsettled natural philosophy for two millennia. Maggots on rotting meat, fungi on damp wood, mice in grain sacks — they seemed to appear from nothing. Spontaneous generation was the default explanation from Aristotle through the seventeenth century. Louis Pasteur finally killed it in 1859 with a set of swan-neck flask experiments as elegant as any in the history of science. Life, it turned out, only ever came from life, and the unit of that coming-from was the cell.' },
        { type: 'interactive', key: 'cell-zoom' },
        { type: 'h2', text: 'Two kingdoms of container' },
        { type: 'p', text: 'Cells split into two great families. Prokaryotes — the bacteria and archaea — keep their DNA loose in the cytoplasm and run lean; they were the only life on Earth for the first billion and a half years. Eukaryotes package their DNA inside a nucleus and carry organelles: mitochondria for power, the endoplasmic reticulum for protein assembly, Golgi bodies for dispatch, lysosomes for demolition. Every plant, animal, fungus, and protist is eukaryotic. Most of the biomass on Earth, though, is bacterial — by mass, by cell count, by genetic diversity, the microbial world dwarfs everything we can see with the naked eye.' },
        { type: 'h2', text: 'A city, not a bag' },
        { type: 'p', text: 'The interior of a eukaryotic cell is not a puddle. It is traffic — vesicles shuttling along protein highways, ribosomes stamping out proteins by the second, enzymes folding and unfolding in tuned rhythms. David Goodsell\'s watercolor illustrations of the cell\'s crowded interior, painted to scale with every molecule where it lives, changed how a generation of biologists pictured the thing they had been drawing as circles and ovals. A single eukaryotic cell contains something like forty million proteins at any moment, most of them recycled within hours.' },
        { type: 'callout', text: 'A human body is built from about thirty-seven trillion cells. It also carries, in its gut alone, about thirty-eight trillion bacterial cells. The question of where you end and your microbiome begins is, at the cellular level, almost arbitrary.' },
        { type: 'h2', text: 'The mitochondrion\'s long backstory' },
        { type: 'p', text: 'In 1967, Lynn Margulis published a paper — rejected by fifteen journals before it found a home — arguing that mitochondria and chloroplasts were once free-living bacteria that got swallowed and never left. Her endosymbiotic theory was ridiculed for a decade before the molecular evidence forced the field to accept it. Mitochondria still carry a loop of their own DNA, inherited only through the maternal line; they divide on their own schedule; their inner membrane still resembles a bacterial one. The power plants inside your cells are, in a real sense, tenants who moved in two billion years ago and never left.' },
        { type: 'p', text: 'The consequence of that ancient merger is almost the entire tree of complex life. Prokaryotes can do chemistry; they cannot easily build big. Eukaryotes can build big because each cell has dozens to thousands of mitochondria running oxidative phosphorylation in parallel, which gives eukaryotic cells a hundred thousand times more energy per gene than a bacterium. Without that one merger, perhaps two billion years ago, Earth would still be a planet of bacterial mats.' },
        { type: 'quote', text: 'The bacteria that live in our bodies outnumber our cells. If we were evicted by them, we would all disappear.', cite: 'Lynn Margulis, Symbiotic Planet (1998)' },
        { type: 'interactive', key: 'rich-cell' },
      ],

      keyTerms: ['cell', 'cell theory', 'prokaryote', 'eukaryote', 'organelle', 'mitochondrion', 'endosymbiosis', 'nucleus'],

      resources: {
        videos: [
          {
            id: 'QnQe0xW_JY4',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=QnQe0xW_JY4',
            title: 'Carbon... SO SIMPLE: Crash Course Biology #1',
            channel: 'CrashCourse',
            duration: '13:23',
            why: 'The opening episode of Hank Green\'s forty-part Crash Course Biology. Start here if you have not thought about cells since high school.',
          },
          {
            id: '8IlzKri08kk',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=8IlzKri08kk',
            title: 'Introduction to Cells: The Grand Cell Tour',
            channel: 'Amoeba Sisters',
            duration: '9:04',
            why: 'Ten minutes, cheerful, visual. The Amoeba Sisters are the clearest introduction to cell structure on the internet.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.ibiology.org/online-biology-courses/cell-biology-flipped-course/',
            title: 'Cell Biology Flipped Course',
            channel: 'iBiology',
            duration: 'variable',
            why: 'Research-level seminars from working scientists — Ron Vale on motor proteins, Randy Schekman on vesicle traffic — organized into an upper-undergraduate course.',
          },
        ],
        books: [
          {
            title: 'Molecular Biology of the Cell',
            author: 'Bruce Alberts et al.',
            year: 2022,
            url: '',
            why: 'The standard graduate-level textbook since 1983. Cited in almost every cell-biology paper you will ever read; beautifully illustrated.',
          },
          {
            title: 'The Machinery of Life',
            author: 'David S. Goodsell',
            year: 2009,
            url: '',
            why: 'Goodsell\'s watercolor cross-sections of cells — drawn to scale, with every molecule where it lives. The book that taught a generation how to picture a cell.',
          },
          {
            title: 'The Vital Question: Energy, Evolution, and the Origins of Complex Life',
            author: 'Nick Lane',
            year: 2015,
            url: '',
            why: 'A biochemist\'s argument for why eukaryotes appeared once, late, and by accident. The best popular account of what mitochondria are actually doing.',
          },
        ],
        articles: [
          {
            title: 'Cell (biology)',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Cell_(biology)',
            why: 'A featured-class overview with careful sections on discovery, structure, and function, and a good bibliography.',
            year: null,
          },
          {
            title: 'Cell',
            source: 'Encyclopædia Britannica',
            url: 'https://www.britannica.com/science/cell-biology',
            why: 'Britannica\'s editorial entry, split across multiple chapters by working biologists. A cleaner narrative than most textbooks.',
            year: null,
          },
          {
            title: 'The Origin of Mitochondria',
            source: 'Nature Education',
            url: 'https://www.nature.com/scitable/topicpage/the-origin-of-mitochondria-14232356/',
            why: 'Scitable\'s accessible summary of the endosymbiotic theory and the evidence that closed it.',
            year: 2010,
          },
        ],
        courses: [
          {
            title: 'Fundamentals of Biology (MIT 7.01SC)',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/7-01sc-fundamentals-of-biology-fall-2011/',
            free: true,
            why: 'Full MIT undergraduate course — video lectures, problem sets, and exams. Covers biochemistry, molecular biology, genetics, and recombinant DNA.',
          },
          {
            title: 'Biology library',
            provider: 'Khan Academy',
            url: 'https://www.khanacademy.org/science/biology',
            free: true,
            why: 'Paced, indexed, with checks for understanding. Good alongside a textbook, not instead of one.',
          },
        ],
        tools: [
          {
            title: 'BioRender',
            url: 'https://www.biorender.com/',
            why: 'The standard drag-and-drop tool for drawing scientifically accurate cell diagrams. Free tier exists; students use it constantly.',
          },
        ],
        primarySources: [
          {
            title: 'Hooke\'s Micrographia (1665)',
            url: 'https://www.gutenberg.org/ebooks/15491',
            why: 'The original plates, including the cork drawing that gave us the word cell. Project Gutenberg\'s free edition.',
          },
        ],
      },

      interactive: { kind: 'dna' },
      seeAlso: ['genetics', 'evolution', 'anatomy', 'biochem'],
      prereqs: [],
      leadsTo: ['genetics', 'anatomy', 'neuro'],

      chapterActivity: 'A monthly microscope night at the Brooklyn Microscope Club — bring a pond sample, borrow a scope, draw what you see.',

      sources: [
        'https://en.wikipedia.org/wiki/Cell_(biology)',
        'https://www.britannica.com/science/cell-biology',
        'https://www.ibiology.org/',
        'https://ocw.mit.edu/courses/7-01sc-fundamentals-of-biology-fall-2011/',
      ],
      verifiedAt: '2026-04-22',
    },

    // ——— GENETICS ———
    genetics: {
      id: 'genetics',
      name: 'Genetics & DNA',
      level: 'Intermediate',
      dek: 'From a monk\'s pea garden to the human genome — the long story of how traits are written and copied.',
      readTime: '14 min',

      sections: ['Mendel in the cloister', 'The code itself', 'The double helix', 'Replication and error', 'From sequence to medicine'],
      body: [
        { type: 'lead', text: 'Between 1856 and 1863, an Augustinian monk in what is now the Czech Republic grew some thirty thousand pea plants in a small monastery garden and counted, with stubborn patience, how tall they were and what color their flowers came out. Gregor Mendel published his results in 1866 to near-total silence; forty-four reprints were mailed to European botanists, and as far as we can tell not one of them understood what the paper was about. He died in 1884 still a mostly unknown abbot. The paper was rediscovered in 1900 by three botanists independently, and genetics has not stopped moving since.' },
        { type: 'h2', text: 'The gene as an abstraction' },
        { type: 'p', text: 'Mendel did not know about DNA. He did not know about chromosomes. What he had was a statistical claim: heritable traits behave as if they come in discrete units, one from each parent, that assort independently. When you cross a purple-flowered pea with a white one, all the offspring are purple; when you cross those F1 hybrids with each other, three in four offspring are purple and one in four is white. The white-flower allele is not blended out of existence; it is hiding, recessive, waiting. For sixty years the unit was an accounting fiction. Then Avery, MacLeod, and McCarty in 1944, and Hershey and Chase with their radioactive bacteriophages in 1952, pinned it down to a specific molecule — deoxyribonucleic acid, which had until then been considered too simple to carry the weight of heredity.' },
        { type: 'h2', text: 'The double helix' },
        { type: 'p', text: 'In February 1953 James Watson and Francis Crick, working at the Cavendish in Cambridge and leaning hard on an X-ray photograph taken by Rosalind Franklin at King\'s College London, published a one-page paper in Nature proposing a double-helical structure for DNA. Franklin\'s Photo 51 had been shown to them without her knowledge; her contribution was named only obliquely in the paper and she died in 1958, four years before the Nobel. The paper itself is 842 words long, illustrated by a single schematic drawn by Crick\'s wife Odile. The elegance of it is that the structure immediately suggests the mechanism: pull the two strands apart and each one is a template for the other. Heredity became chemistry overnight.' },
        { type: 'interactive', key: 'rich-genetics' },
        { type: 'h2', text: 'Replication, transcription, translation' },
        { type: 'p', text: 'The central dogma of molecular biology, as Crick named it in 1957, runs: DNA is copied into DNA when cells divide, transcribed into messenger RNA when a gene is read, and translated into protein when the RNA reaches a ribosome. Every cell in your body is doing all three constantly — a fertilized egg becomes a two-meter-long adult by roughly forty generations of this machinery, working without supervision. The replication machinery has an intrinsic error rate of about one base in ten thousand; after proofreading and mismatch repair, that drops to one in a billion. The small fraction that slips through is what evolution works with.' },
        { type: 'h2', text: 'From the Human Genome to CRISPR' },
        { type: 'p', text: 'The Human Genome Project ran from 1990 to 2003, cost about three billion dollars, and produced a reference sequence of the three billion base pairs in a human cell. Sequencing a genome today costs less than two hundred dollars and takes a day. The twenty years since have added genome-wide association studies, population-scale sequencing, and — with CRISPR-Cas9 in 2012 — a way to edit genes at specific locations in live cells. Jennifer Doudna and Emmanuelle Charpentier shared the Chemistry Nobel for it in 2020, the first Nobel awarded to two women jointly. Genetics is now an engineering field as much as a descriptive one, and the ethical questions — germline editing, biometric privacy, access — are catching up.' },
        { type: 'callout', text: 'Every human on Earth carries roughly 175 new mutations — tiny differences from either parent — in their 3-billion-letter genome. Most are silent. A handful will be deleterious. One, very occasionally, will matter for the species.' },
        { type: 'quote', text: 'It has not escaped our notice that the specific pairing we have postulated immediately suggests a possible copying mechanism for the genetic material.', cite: 'Watson & Crick, Nature, 25 April 1953' },
      ],

      keyTerms: ['gene', 'allele', 'chromosome', 'DNA', 'RNA', 'transcription', 'translation', 'CRISPR', 'genome'],

      resources: {
        videos: [
          {
            id: '8kK2zwjRV0M',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=8kK2zwjRV0M',
            title: 'DNA Structure and Replication: Crash Course Biology #10',
            channel: 'CrashCourse',
            duration: '12:59',
            why: 'Hank Green on the double helix and how it copies itself. Clear, fast, and cites the 1953 paper directly.',
          },
          {
            id: 'i-0rSv6oxSY',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=i-0rSv6oxSY',
            title: 'Monohybrids and the Punnett Square Guinea Pigs',
            channel: 'Amoeba Sisters',
            duration: '7:38',
            why: 'Punnett squares done without condescension, with hairless guinea pigs as the example. The best Mendelian-cross explainer for an adult beginner.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.ibiology.org/explore/?fwp_topics=genetics-gene-regulation',
            title: 'Genetics & Gene Regulation (lectures)',
            channel: 'iBiology',
            duration: 'variable',
            why: 'Research-level talks from named geneticists — Jennifer Doudna on CRISPR, Eric Lander on the genome. Harder, worth it.',
          },
        ],
        books: [
          {
            title: 'The Gene: An Intimate History',
            author: 'Siddhartha Mukherjee',
            year: 2016,
            url: '',
            why: 'A Pulitzer-winning physician-historian walks from Mendel to CRISPR. The best single-volume account for a general reader.',
          },
          {
            title: 'The Double Helix',
            author: 'James D. Watson',
            year: 1968,
            url: '',
            why: 'Watson\'s memoir of the race to DNA — vain, funny, uncharitable, indispensable. Read it alongside Brenda Maddox\'s biography of Franklin.',
          },
          {
            title: 'The Selfish Gene',
            author: 'Richard Dawkins',
            year: 1976,
            url: '',
            why: 'Still the clearest popular argument for the gene\'s-eye view of evolution. Fifty years later it remains a standard first text.',
          },
        ],
        articles: [
          {
            title: 'Experiments on Plant Hybridization (English translation)',
            source: 'Wikipedia article',
            url: 'https://en.wikipedia.org/wiki/Experiments_on_Plant_Hybridization',
            why: 'Wikipedia\'s entry on the 1866 paper, with links to translations. The paper itself is under ten thousand words and readable.',
            year: null,
          },
          {
            title: 'Molecular Structure of Nucleic Acids',
            source: 'Nature (1953)',
            url: 'https://www.nature.com/articles/171737a0',
            why: 'The original one-page Watson-and-Crick paper. Free on Nature\'s open archive.',
            year: 1953,
          },
          {
            title: 'An Overview of the Human Genome Project',
            source: 'NIH National Human Genome Research Institute',
            url: 'https://www.genome.gov/human-genome-project',
            why: 'The official U.S. reference for the project that gave us the reference sequence — methods, timelines, and results.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Fundamentals of Biology — Genetics units (MIT 7.01SC)',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/7-01sc-fundamentals-of-biology-fall-2011/',
            free: true,
            why: 'Eric Lander\'s own MIT unit on Mendelian genetics, mapping, and pedigree analysis. Video lectures and problem sets.',
          },
          {
            title: 'High school biology — DNA, genes, and chromosomes',
            provider: 'Khan Academy',
            url: 'https://www.khanacademy.org/science/biology/dna-as-the-genetic-material',
            free: true,
            why: 'Paced, visual, with checks. A solid pre-class review.',
          },
        ],
        tools: [
          {
            title: 'NCBI Gene',
            url: 'https://www.ncbi.nlm.nih.gov/gene/',
            why: 'Search any gene by name, see the sequence, the known variants, and the papers that describe it.',
          },
        ],
        primarySources: [
          {
            title: 'Mendel\'s paper "Versuche über Pflanzenhybriden" (English translations)',
            url: 'https://en.wikipedia.org/wiki/Experiments_on_Plant_Hybridization',
            why: 'Links to the standard Druery/Bateson and Abbott/Fairbanks translations. Worth reading in the original; the prose is patient and almost legal.',
          },
        ],
      },

      interactive: { kind: 'punnett' },
      seeAlso: ['cell', 'evolution', 'biochem', 'neuro'],
      prereqs: ['cell'],
      leadsTo: ['evolution', 'biochem'],

      chapterActivity: 'Twice-a-year genealogy-and-genetics meetup at a DUMBO coffee shop — bring your 23andMe or ancestry print-out and a family tree sketch.',

      sources: [
        'https://en.wikipedia.org/wiki/Genetics',
        'https://www.nature.com/articles/171737a0',
        'https://www.genome.gov/human-genome-project',
      ],
      verifiedAt: '2026-04-22',
    },

    // ——— EVOLUTION ———
    evolution: {
      id: 'evolution',
      name: 'Evolution',
      level: 'Intermediate',
      dek: 'Descent with modification — the single idea that ties every living thing on the planet together.',
      readTime: '14 min',

      sections: ['The voyage and the finches', 'Natural selection', 'The modern synthesis', 'Evolution you can watch', 'The tree of life'],
      body: [
        { type: 'lead', text: 'In December 1831 a twenty-two-year-old Charles Darwin boarded a ten-gun sloop named HMS Beagle in Plymouth harbor and sailed, more or less by accident, into the central idea of modern biology. The voyage lasted almost five years. The finches he collected in the Galápagos — mistaken at first for unrelated species of blackbirds and wrens — were re-identified back in London as thirteen varieties of one family, differing chiefly in the shape of their beaks. Darwin kept the insight to himself for more than two decades. He married, raised ten children, fell into chronic illness, wrote books about barnacles and coral reefs, and privately assembled a vast mass of evidence for an argument he was afraid to publish.' },
        { type: 'h2', text: 'The mechanism Darwin gave us' },
        { type: 'p', text: 'Natural selection is, by Darwin\'s own description, almost embarrassingly simple. Organisms vary. More are born than can survive. Variations that help survival and reproduction are passed on more often than those that do not. Iterate for deep time and you get finches with thirteen different bills and whales with vestigial hipbones. Darwin spent twenty years afraid to publish, not because the argument was weak but because he understood exactly how much it would disturb. He called the unpublished manuscript, in private letters, "like confessing a murder."' },
        { type: 'p', text: 'What forced his hand was a letter. In June 1858 he opened a package from a young naturalist named Alfred Russel Wallace, posted from Borneo, containing a manuscript that laid out natural selection almost exactly as Darwin had been drafting it. The ethical dilemma was solved by a compromise: their joint paper was read to the Linnean Society on 1 July 1858, with neither author present — Wallace was still in Malaysia, and Darwin was at the funeral of his infant son. Origin of Species appeared a year and a half later. The first printing sold out the day it went on sale.' },
        { type: 'interactive', key: 'finch-beaks' },
        { type: 'h2', text: 'The modern synthesis' },
        { type: 'p', text: 'Darwin had a theory but no mechanism of heredity. Mendel, working at the same time, had a mechanism but no audience. It took until the 1930s and 40s — R.A. Fisher and J.B.S. Haldane in England, Sewall Wright in Chicago, Theodosius Dobzhansky among the fruit flies at Columbia, Ernst Mayr on the birds of New Guinea — to weld the two together. The resulting "modern synthesis" remains the standard framework: evolution is change in allele frequencies in a population over generations, driven by four forces — selection, drift, mutation, and migration. Every finding since, from kin selection to neutral theory to evo-devo, has extended this frame without replacing it.' },
        { type: 'h2', text: 'Evolution you can actually watch' },
        { type: 'p', text: 'Peter and Rosemary Grant, two British biologists at Princeton, spent more than forty years on a single Galápagos island — Daphne Major, a volcanic cone about the size of a small park — measuring, ringing, and bleeding every finch they could catch. Across droughts and wet years, beak depth rose and fell by measurable amounts in a single generation. Antibiotic resistance in bacteria, insecticide resistance in mosquitoes, lactase persistence in adult humans, color change in the peppered moth during the Industrial Revolution — evolution is not only a historical argument. It is an ongoing observable. Richard Lenski\'s lab at Michigan State has now grown E. coli for more than seventy-five thousand generations; the bacteria have evolved new metabolic abilities in front of the cameras.' },
        { type: 'h2', text: 'Descent, deep time, and the tree' },
        { type: 'p', text: 'Every species alive today shares common ancestors with every other. The tree of life, rooted some 3.8 billion years ago, has been rewritten several times as new molecular data has come in — the old five-kingdom system collapsed into three domains in Carl Woese\'s rRNA analyses, and horizontal gene transfer has fuzzed the base of the tree into something more web-like. But its shape above the trunk is now well established. You are a primate, a mammal, a vertebrate, an animal, a eukaryote — each ring wider and older than the last. You share roughly half your genes with a banana, ninety-nine percent with a chimpanzee, and all of them with some cousin, however distant, who has also been evolving for 3.8 billion years. Learning to feel that in your bones is most of what an evolution course is for.' },
        { type: 'callout', text: 'Natural selection is not a force with foresight. It has no direction, no intent, no goals. It is simply the fact that variants which leave more offspring become more common. Everything elaborate that follows is the working-out of that accountant\'s arithmetic over four billion years.' },
        { type: 'quote', text: 'There is grandeur in this view of life, with its several powers, having been originally breathed into a few forms or into one; and that... from so simple a beginning endless forms most beautiful and most wonderful have been, and are being, evolved.', cite: 'Charles Darwin, On the Origin of Species, closing paragraph' },
        { type: 'interactive', key: 'rich-evolution' },
      ],

      keyTerms: ['natural selection', 'adaptation', 'speciation', 'common descent', 'genetic drift', 'fitness', 'modern synthesis', 'phylogeny'],

      resources: {
        videos: [
          {
            id: 'P3GagfbA2vo',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=P3GagfbA2vo',
            title: 'Evolution: It\'s a Thing — Crash Course Biology #20',
            channel: 'CrashCourse',
            duration: '12:32',
            why: 'Hank Green in full flow on natural selection, with the necessary tangent on why common objections misfire.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@pbseons',
            title: 'PBS Eons — channel',
            channel: 'PBS Eons',
            duration: 'variable',
            why: 'A superb PBS series on paleontology and deep time, narrated by working paleontologists. The best current videos on how the tree actually branched.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.ibiology.org/evolution/',
            title: 'Evolution (lecture series)',
            channel: 'iBiology',
            duration: 'variable',
            why: 'Research-level talks from working evolutionary biologists — Dan Fisher on mammoths, Jonathan Losos on island lizards. Deeper than the introductory videos.',
          },
        ],
        books: [
          {
            title: 'On the Origin of Species',
            author: 'Charles Darwin',
            year: 1859,
            url: 'https://www.gutenberg.org/ebooks/1228',
            why: 'The founding text. The first edition is under two hundred pages in modern type and still the best place to meet the argument.',
          },
          {
            title: 'The Beak of the Finch',
            author: 'Jonathan Weiner',
            year: 1994,
            url: '',
            why: 'Pulitzer-winning account of the Grants\' forty-year finch study on Daphne Major. Shows evolution measured year by year.',
          },
          {
            title: 'Your Inner Fish',
            author: 'Neil Shubin',
            year: 2008,
            url: '',
            why: 'The paleontologist who dug up Tiktaalik explains human anatomy through its fishy ancestry. Clear and warmly written.',
          },
        ],
        articles: [
          {
            title: 'Understanding Evolution',
            source: 'UC Museum of Paleontology (Berkeley)',
            url: 'https://evolution.berkeley.edu/',
            why: 'The best free online introduction to evolutionary biology, with a careful section on common misconceptions. Built for teachers and their students.',
            year: null,
          },
          {
            title: 'Natural selection',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/natural-selection/',
            why: 'A philosopher\'s careful unpacking of what natural selection is actually a claim about. Surprisingly readable.',
            year: null,
          },
          {
            title: 'Evolution',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Evolution',
            why: 'Featured-article overview with strong sections on mechanisms and a good bibliography.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Evolution Flipped Course',
            provider: 'iBiology',
            url: 'https://www.ibiology.org/evolution/',
            free: true,
            why: 'Ten-session undergraduate course assembled from iBiology talks — from the evidence for descent to Hardy-Weinberg equilibrium.',
          },
        ],
        tools: [
          {
            title: 'OneZoom Tree of Life',
            url: 'https://www.onezoom.org/',
            why: 'An interactive, zoomable tree of life. Find yourself, then zoom out until you share a branch with a sea sponge.',
          },
          {
            title: 'TimeTree',
            url: 'https://timetree.org/',
            why: 'Enter two species, get the estimated time since their last common ancestor. Built on published molecular-clock data.',
          },
        ],
        primarySources: [
          {
            title: 'Darwin\'s On the Origin of Species (1859, Gutenberg)',
            url: 'https://www.gutenberg.org/ebooks/1228',
            why: 'The first edition in full, free, in every major e-reader format.',
          },
          {
            title: 'Darwin and Wallace, 1858 Linnean Society paper (full text, darwin-online.org.uk)',
            url: 'https://darwin-online.org.uk/content/frameset?viewtype=text&itemID=F1699b&pageseq=1',
            why: 'The joint Darwin-Wallace paper as read to the Linnean Society on 1 July 1858. The diplomatic compromise that launched natural selection into print.',
          },
        ],
      },

      interactive: { kind: 'evolution-sim' },
      seeAlso: ['genetics', 'cell', 'ecology', 'anatomy'],
      prereqs: ['cell', 'genetics'],
      leadsTo: ['ecology', 'human_evo'],

      chapterActivity: 'A reading group that works through Origin of Species one chapter a month at a Park Slope bookstore; open to anyone who has finished the previous chapter.',

      sources: [
        'https://evolution.berkeley.edu/',
        'https://plato.stanford.edu/entries/natural-selection/',
        'https://www.gutenberg.org/ebooks/1228',
      ],
      verifiedAt: '2026-04-22',
    },

    // ——— ECOLOGY ———
    ecology: {
      id: 'ecology',
      name: 'Ecology',
      level: 'Intermediate',
      dek: 'The study of how living things live together — and what happens when the arrangements come apart.',
      readTime: '12 min',

      sections: ['Haeckel\'s word', 'Populations and communities', 'Energy and nutrients', 'Keystones and cascades', 'The planetary scale'],
      body: [
        { type: 'lead', text: 'In 1866, a young German zoologist named Ernst Haeckel, then 32 and writing his general morphology, coined the word Ökologie from the Greek oikos, meaning household. He meant the economy of nature — who eats what, who lives where, how energy and matter circulate among the living. The name stuck. The science did not become rigorous for another hundred years, when Charles Elton at Oxford formalized the food chain, Robert MacArthur and E.O. Wilson built the theory of island biogeography on a hotel napkin, and Eugene Odum turned ecology from natural history into a quantitative discipline.' },
        { type: 'h2', text: 'Levels of organization' },
        { type: 'p', text: 'Ecology works at nested scales. An individual organism lives inside a population of its own species; populations live inside communities of interacting species; communities live inside ecosystems that include the physical environment; ecosystems fit inside the biosphere. Most ecological questions are about moving between these scales — how a ten-degree temperature change in a stream propagates upward into a fishery collapse, how a single genetic sweep in a mosquito reshapes malaria transmission across a continent.' },
        { type: 'h2', text: 'Energy down, nutrients around' },
        { type: 'p', text: 'Almost all the energy in the living world comes from the sun, captured by plants and algae and cyanobacteria through photosynthesis. Roughly ninety percent of it is lost as heat at every trophic level, which is why food chains are short — three or four links is typical, five is unusual. A thousand kilograms of grass supports a hundred kilograms of deer, which supports ten kilograms of wolf. Nutrients — nitrogen, phosphorus, carbon — cycle rather than flow, moving between air, water, soil, and bodies on timescales from days to millennia. The carbon cycle is currently the most politically consequential diagram in biology.' },
        { type: 'h2', text: 'The keystone and the cascade' },
        { type: 'p', text: 'In 1969 the ecologist Robert Paine, working at the University of Washington\'s Makah Bay station, pried purple starfish off a stretch of Washington coast and watched the tidepools collapse into a near-monoculture of mussels. He called the starfish a keystone species, after the central stone in an arch whose removal brings the whole structure down. The concept has since been applied to wolves in Yellowstone, sea otters in Alaskan kelp forests, elephants on the savannah, and beavers in the American Northwest. Remove the keystone and the ecosystem rearranges, often in ways that take decades to notice.' },
        { type: 'h2', text: 'The planetary scale' },
        { type: 'p', text: 'Ecology merged, in the late twentieth century, with climate science and biogeochemistry into what is sometimes called Earth-system science. The planet\'s average surface temperature is now about 1.3 °C above pre-industrial levels; species ranges are shifting poleward at tens of kilometers a decade; the current extinction rate is on the order of a hundred to a thousand times the long-term background. Rachel Carson, writing about pesticides in 1962, is still the model for this kind of attention. Silent Spring was banned or quietly suppressed in several state agencies; it also led, within a decade, to the banning of DDT and the founding of the EPA.' },
        { type: 'interactive', key: 'rich-ecology' },
      ],

      keyTerms: ['population', 'community', 'ecosystem', 'biome', 'trophic level', 'keystone species', 'carbon cycle', 'biodiversity'],

      resources: {
        videos: [
          {
            id: 'izRvPaAWgyw',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=izRvPaAWgyw',
            title: 'Ecology — Rules for Living on Earth: Crash Course Biology #40',
            channel: 'CrashCourse',
            duration: '11:54',
            why: 'The closing episode of the first Crash Course Biology series. Hank Green on trophic levels, nutrient cycles, and how to think about ecosystems.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@pbseons',
            title: 'PBS Eons — channel',
            channel: 'PBS Eons',
            duration: 'variable',
            why: 'Deep-time ecology — what past communities looked like, why some collapsed, how climate and life are coupled.',
          },
          {
            id: 'ysa5OBhXz-Q',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=ysa5OBhXz-Q',
            title: 'How Wolves Change Rivers',
            channel: 'Sustainable Human',
            duration: '4:34',
            why: 'George Monbiot narrates the Yellowstone trophic cascade in four and a half minutes. A visceral introduction to what keystone species do.',
          },
        ],
        books: [
          {
            title: 'Silent Spring',
            author: 'Rachel Carson',
            year: 1962,
            url: '',
            why: 'The book that founded modern environmentalism. Still the best example of patient scientific writing aimed at a general reader.',
          },
          {
            title: 'The Diversity of Life',
            author: 'Edward O. Wilson',
            year: 1992,
            url: '',
            why: 'Wilson\'s survey of biodiversity — island biogeography, species-area curves, the long history of extinction. Beautifully written.',
          },
          {
            title: 'The Sixth Extinction: An Unnatural History',
            author: 'Elizabeth Kolbert',
            year: 2014,
            url: '',
            why: 'Pulitzer-winning reporting from the front lines of the current biodiversity crisis. Field-based, unhurried, grim.',
          },
        ],
        articles: [
          {
            title: 'Ecology',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Ecology',
            why: 'Featured-article overview with good sections on history, levels of organization, and current research.',
            year: null,
          },
          {
            title: 'Keystone species',
            source: 'Encyclopædia Britannica',
            url: 'https://www.britannica.com/science/keystone-species',
            why: 'Short, careful editorial piece on one of ecology\'s most durable ideas, with examples from marine, prairie, and forest systems.',
            year: null,
          },
          {
            title: 'IPCC Sixth Assessment Report — Summary for Policymakers',
            source: 'Intergovernmental Panel on Climate Change',
            url: 'https://www.ipcc.ch/report/ar6/wg1/',
            why: 'The authoritative current synthesis of climate science. The Summary for Policymakers is short and meant to be read by people who are not specialists.',
            year: 2021,
          },
        ],
        courses: [
          {
            title: 'Principles of Evolution, Ecology and Behavior (Yale EEB 122)',
            provider: 'Open Yale Courses',
            url: 'https://oyc.yale.edu/ecology-and-evolutionary-biology/eeb-122',
            free: true,
            why: 'Stephen Stearns\'s Yale undergraduate course — thirty-six lectures with transcripts, free. The best ecology-and-evolution course on the open web.',
          },
        ],
        tools: [
          {
            title: 'iNaturalist',
            url: 'https://www.inaturalist.org/',
            why: 'Photograph a plant or animal, get an identification, contribute to a global biodiversity database. Ecology as a participant sport.',
          },
        ],
      },

      interactive: { kind: 'ecosystem' },
      seeAlso: ['evolution', 'cell', 'meteorology', 'birding'],
      prereqs: ['cell', 'evolution'],
      leadsTo: ['meteorology', 'birding'],

      chapterActivity: 'A monthly bioblitz in Prospect Park — walk a transect, log every species you see on iNaturalist, compare notes over coffee.',

      sources: [
        'https://en.wikipedia.org/wiki/Ecology',
        'https://www.britannica.com/science/keystone-species',
        'https://www.ipcc.ch/report/ar6/wg1/',
      ],
      verifiedAt: '2026-04-22',
    },

    // ——— NEUROSCIENCE ———
    neuro: {
      id: 'neuro',
      name: 'Neuroscience',
      level: 'Advanced',
      dek: 'The only organ that ever tried to understand itself — and mostly hasn\'t.',
      readTime: '15 min',

      sections: ['Cajal\'s drawings', 'The neuron and the synapse', 'Circuits and systems', 'The hard problem'],
      body: [
        { type: 'lead', text: 'In the 1890s a Spanish pathologist named Santiago Ramón y Cajal sat at his desk in Madrid with a microscope, a tub of silver nitrate, and a stubborn refusal to believe the consensus view of the brain. Most of his contemporaries held that nerve tissue was a continuous reticulum. Cajal, using a staining method invented by his rival Camillo Golgi — who would later share the Nobel with him for the opposite conclusion — drew thousands of individual cells with precise arborizing branches, and argued that the brain was made of discrete units in contact but not continuous. He was right. The drawings, which he executed himself by hand at the microscope, are still reproduced in textbooks today.' },
        { type: 'h2', text: 'The neuron and the synapse' },
        { type: 'p', text: 'A neuron is a specialized cell that takes in signals through a branching dendritic tree, integrates them in its cell body, and sends an output down a single axon. The signal itself is an action potential — a wave of ion flux, driven by voltage-gated sodium and potassium channels, that travels at up to a hundred meters per second along the axon. At the axon\'s end, a chemical messenger crosses a small gap called a synapse and either excites or inhibits the next neuron. The human brain contains about eighty-six billion neurons and roughly a hundred trillion synapses — more connections than there are stars in the Milky Way.' },
        { type: 'interactive', key: 'cortex-map' },
        { type: 'h2', text: 'From cells to circuits' },
        { type: 'p', text: 'Individual neurons are interesting; what the field has spent the last fifty years on is how they are wired. David Hubel and Torsten Wiesel\'s 1960s recordings from the cat visual cortex showed that neurons there respond to oriented edges — the first piece of the image-processing pipeline you are using right now to read this sentence. Retinal ganglion cells detect contrast; thalamic relays pass the signal; cortical columns compute edges, then corners, then shapes; association areas stitch it all into objects you can recognize as words. Each step adds a layer of abstraction. Modern neuroscience is mostly the study of these hierarchies in whatever organism will sit still for it — fruit flies, zebrafish larvae, mice with optogenetic tags, humans in MRI scanners.' },
        { type: 'h2', text: 'The parts you can lose' },
        { type: 'p', text: 'Much of what we know about the human brain comes from people who have lost parts of theirs. Phineas Gage in 1848 — a Vermont railroad foreman whose frontal lobe was pierced by a tamping iron and who lived another twelve years with a markedly changed personality. Henry Molaison ("H.M.") in 1953 — a young man whose bilateral hippocampectomy cured his epilepsy and destroyed his ability to form new long-term memories. Broca\'s patient "Tan" in 1861 — so called because it was nearly the only word he could still say. Oliver Sacks\'s patients in the 1980s. These case studies, along with modern functional imaging, have mapped the brain\'s functional geography in rough but useful terms.' },
        { type: 'h2', text: 'What is still hard' },
        { type: 'p', text: 'Neuroscience can describe, in ever-finer detail, the machinery that produces behavior. What it cannot yet do is explain how any of that machinery feels like anything from the inside. The philosopher David Chalmers called this the hard problem of consciousness in 1995, and it has not gotten much softer since. Global workspace theory, integrated information theory, higher-order theory — there are candidates, but no consensus. A serious neuroscientist is honest about the gap between a neural correlate of consciousness and an explanation of it.' },
        { type: 'callout', text: 'Cajal and Golgi shared the 1906 Nobel Prize for their opposite conclusions about the same tissue. Golgi gave a Nobel lecture defending a continuous net; Cajal gave one defending discrete neurons. Cajal was right; Golgi\'s stain still bears his name.' },
        { type: 'interactive', key: 'rich-neuro' },
      ],

      keyTerms: ['neuron', 'synapse', 'action potential', 'neurotransmitter', 'cortex', 'hippocampus', 'fMRI', 'plasticity', 'consciousness'],

      resources: {
        videos: [
          {
            id: 'vHrmiy4W9C0',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=vHrmiy4W9C0',
            title: 'Meet Your Master — Getting to Know Your Brain: Crash Course Psychology #4',
            channel: 'CrashCourse',
            duration: '10:21',
            why: 'Hank Green on neurons, synapses, and brain anatomy — a tight overview in under eleven minutes.',
          },
          {
            id: 'NNnIGh9g6fA',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=NNnIGh9g6fA',
            title: 'Introduction to Human Behavioral Biology',
            channel: 'Stanford (Robert Sapolsky)',
            duration: '57:15',
            why: 'The opening lecture of Sapolsky\'s legendary Stanford course. Start here; watch the rest of the twenty-five if you have the time.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.ibiology.org/explore/?fwp_topics=neuroscience',
            title: 'Neuroscience (lecture collection)',
            channel: 'iBiology',
            duration: 'variable',
            why: 'Research seminars from working neuroscientists — Catherine Dulac on pheromones, Cori Bargmann on circuits, Christof Koch on consciousness.',
          },
        ],
        books: [
          {
            title: 'Principles of Neural Science',
            author: 'Eric R. Kandel, John Koester, Sarah Mack, and Steven Siegelbaum (eds.)',
            year: 2021,
            url: '',
            why: 'The standard graduate-level textbook, now in its sixth edition. Written by a Nobel laureate and his colleagues; cited everywhere.',
          },
          {
            title: 'The Man Who Mistook His Wife for a Hat',
            author: 'Oliver Sacks',
            year: 1985,
            url: '',
            why: 'Sacks\'s case histories from clinical neurology, written with the attention of a novelist. Still the best introduction to what the brain\'s parts actually do.',
          },
          {
            title: 'In Search of Memory',
            author: 'Eric Kandel',
            year: 2006,
            url: '',
            why: 'The Nobelist\'s scientific autobiography — Vienna, the sea slug Aplysia, and how long-term memory works at the synapse.',
          },
        ],
        articles: [
          {
            title: 'Neuron',
            source: 'Scholarpedia',
            url: 'http://www.scholarpedia.org/article/Neuron',
            why: 'Peer-reviewed encyclopedia entry written by specialists. More technical than Wikipedia, with careful citations.',
            year: null,
          },
          {
            title: 'Consciousness',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/consciousness/',
            why: 'The reference entry on the philosophical side of the hard problem. Reading this and Kandel in tandem is how you learn where the field actually stands.',
            year: null,
          },
          {
            title: 'Brain Basics: Know Your Brain',
            source: 'NIH National Institute of Neurological Disorders and Stroke',
            url: 'https://www.ninds.nih.gov/health-information/public-education/brain-basics/brain-basics-know-your-brain',
            why: 'Plain-language U.S. government introduction to brain anatomy and function, written for patients and their families.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Human Behavioral Biology (Stanford BIO 150)',
            provider: 'Stanford / YouTube',
            url: 'https://www.youtube.com/playlist?list=PL848F2368C90DDC3D',
            free: true,
            why: 'Robert Sapolsky\'s twenty-five-lecture course, recorded and posted in full. The gold-standard free course on brain-and-behavior.',
          },
          {
            title: 'Fundamentals of Neuroscience (HarvardX)',
            provider: 'edX',
            url: 'https://www.edx.org/course/fundamentals-of-neuroscience-part-1-the-electrical-properties-of-the-neuron',
            free: true,
            why: 'David Cox\'s three-part Harvard course on the biophysics of the neuron, the synapse, and cognition. Audit is free.',
          },
        ],
        tools: [
          {
            title: 'Allen Brain Atlas',
            url: 'https://portal.brain-map.org/',
            why: 'Interactive, searchable atlases of the mouse and human brain — gene expression, connectivity, cell types. The single best free neuroscience resource on the web.',
          },
        ],
      },

      interactive: { kind: 'neuron' },
      seeAlso: ['cognition', 'physiology', 'anatomy', 'clinical'],
      prereqs: ['cell', 'anatomy'],
      leadsTo: ['cognition', 'clinical'],

      chapterActivity: 'A neuroscience journal-club night at a Greenwich Village café — pick one recent paper, read it over the week, argue about it Thursday.',

      sources: [
        'https://plato.stanford.edu/entries/consciousness/',
        'http://www.scholarpedia.org/article/Neuron',
        'https://portal.brain-map.org/',
      ],
      verifiedAt: '2026-04-22',
    },

    // ——— ANATOMY ———
    anatomy: {
      id: 'anatomy',
      name: 'Human Anatomy',
      level: 'Intermediate',
      dek: 'The body, mapped — a subject that began in graveyards and is still taught, mostly, on real cadavers.',
      readTime: '12 min',

      sections: ['Vesalius at Padua', 'Gross and microscopic', 'Systems of the body', 'The cadaver lab', 'Imaging the living'],
      body: [
        { type: 'lead', text: 'In 1543 a twenty-eight-year-old Flemish anatomist named Andreas Vesalius, then Professor of Surgery at the University of Padua, published a folio volume called De humani corporis fabrica — On the Fabric of the Human Body. The plates were woodcuts, most of them drawn by an artist in Titian\'s workshop, Jan van Calcar. The text demolished most of what the medical world had been teaching for thirteen hundred years, on the authority of Galen, who had dissected only apes and pigs. Modern anatomy dates from that book; modern medicine dates, arguably, from the same year.' },
        { type: 'h2', text: 'Dissection, and the slow triumph of looking' },
        { type: 'p', text: 'Vesalius insisted, scandalously, on doing his own dissections rather than having a barber-surgeon cut while he read Galen aloud from a high chair. The figures in the Fabrica are drawn from the body, not copied from older texts. The mistake he found most often in Galen — and there are hundreds — is the kind any anatomist now makes when a student describes a structure they have only read about: a rete mirabile at the base of the brain that exists in oxen but not in humans; a liver with five lobes; a heart septum with pores that would have let blood pass between the ventricles if it existed. Vesalius found none of it. He said so, politely, for about nine hundred pages.' },
        { type: 'h2', text: 'Two scales of the same subject' },
        { type: 'p', text: 'Gross anatomy is the anatomy you can see with the naked eye — bones, muscles, organs, vessels, nerves. Histology is the anatomy you need a microscope for — the four classic tissue types (epithelial, connective, muscular, nervous) and how they are arranged. A medical student learns both. A functional understanding of the liver requires knowing both that it sits under the right diaphragm, receives about a quarter of the cardiac output through two separate blood supplies, and produces roughly a liter of bile a day — and that its hepatocytes are stacked in plates one cell thick along sinusoids of blood, each hepatocyte touching a tiny bile canaliculus on one side and a blood space on the other.' },
        { type: 'h2', text: 'The systems of the body' },
        { type: 'p', text: 'Anatomy is usually taught one system at a time: skeletal, muscular, cardiovascular, respiratory, digestive, urinary, reproductive, endocrine, nervous, integumentary, lymphatic. The divisions are partly pedagogical — the body is, in practice, one interconnected thing, and any decent clinician thinks about it that way. But the systems are how textbooks organize an otherwise overwhelming amount of naming. A first-year medical student learns thousands of anatomical terms in one semester. A practicing surgeon can identify the structures in a dissected abdomen by touch, with eyes closed, in a way that looks to outsiders like magic and is simply ten thousand hours of looking.' },
        { type: 'h2', text: 'The cadaver lab, and why it survives' },
        { type: 'p', text: 'Digital anatomy is now extraordinary — 3D reconstructions from CT scans, augmented-reality tables, interactive atlases, VR dissection. But most medical schools still require students to dissect a human body, and most clinicians in training agree the experience is irreplaceable. The argument is partly about variation: no two donors are alike, and a real cadaver teaches something about anatomical variability — the occasional fourth coronary artery branch, the aberrant right subclavian — that a perfect idealized model cannot. The argument is also about respect: the body, once a person, is a subject and not a screen. The donor is not anonymous to the team that works on her; most programs hold a memorial service at the end of the year.' },
        { type: 'h2', text: 'Imaging the living' },
        { type: 'p', text: 'The second revolution in anatomy, after Vesalius, has been the ability to look inside living bodies. X-rays arrived in 1895 — Röntgen discovered them in November and radiographed his wife\'s hand within weeks. CT in 1971, MRI clinically in the 1980s, functional MRI and PET in the 1990s, portable ultrasound now on a smartphone. A modern medical student\'s anatomy education mixes cadaver dissection with reading live CT scans side by side — learning the three-dimensional structure of the real body both in the teaching lab and at the bedside.' },
        { type: 'quote', text: 'It seems to me that the whole Galenic system of anatomy has been built on the bodies of apes, not men.', cite: 'Andreas Vesalius, De humani corporis fabrica (1543), letter to the reader' },
        { type: 'interactive', key: 'rich-anatomy' },
      ],

      keyTerms: ['gross anatomy', 'histology', 'cadaver', 'fascia', 'organ system', 'Vesalius', 'Galen', 'anatomical position'],

      resources: {
        videos: [
          {
            id: 'uBGl2BujkPQ',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=uBGl2BujkPQ',
            title: 'Introduction to Anatomy & Physiology: Crash Course A&P #1',
            channel: 'CrashCourse',
            duration: '10:19',
            why: 'Hank Green on the basic vocabulary and organization of the human body. The first of a 47-part series.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@DoctorNajeebLectures',
            title: 'Dr. Najeeb Lectures',
            channel: 'Dr. Najeeb Lectures',
            duration: 'variable',
            why: 'A Pakistani physician whose long, whiteboard-taught lectures are beloved by medical students worldwide. Paid archive, but free samples on YouTube.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.acland.com/',
            title: 'Acland\'s Video Atlas of Human Anatomy',
            channel: 'Robert D. Acland',
            duration: 'variable',
            why: 'Acland\'s narrated dissection videos are the reference standard for learning gross anatomy from real tissue. Library access through most universities.',
          },
        ],
        books: [
          {
            title: 'Anatomy: Descriptive and Surgical (Gray\'s Anatomy, 1st edition)',
            author: 'Henry Gray',
            year: 1858,
            url: 'https://archive.org/details/anatomydescripti1858gray',
            why: 'Still in print more than 160 years later. The first edition is free on the Internet Archive; modern editions (Gray\'s Anatomy for Students) are what medical schools actually use.',
          },
          {
            title: 'The Anatomy Coloring Book',
            author: 'Wynn Kapit and Lawrence M. Elson',
            year: 1977,
            url: '',
            why: 'A surprisingly effective way to learn anatomy — coloring the structures as you name them. In print since 1977 and still a student standard.',
          },
          {
            title: 'Stiff: The Curious Lives of Human Cadavers',
            author: 'Mary Roach',
            year: 2003,
            url: '',
            why: 'A witty, humane survey of what happens to bodies donated to science. Not a textbook, but a humanizing companion to one.',
          },
        ],
        articles: [
          {
            title: 'Human body',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Human_body',
            why: 'Overview article with a system-by-system outline and links into much more detailed entries on each organ.',
            year: null,
          },
          {
            title: 'Body Systems',
            source: 'MedlinePlus (U.S. National Library of Medicine)',
            url: 'https://medlineplus.gov/bodysystems.html',
            why: 'Authoritative, patient-facing entries on every major system — written by NIH staff and reviewed by physicians.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Anatomy: Human Neuroanatomy, Musculoskeletal, Cardiovascular, Gastrointestinal, Respiratory (Michigan)',
            provider: 'Coursera (University of Michigan)',
            url: 'https://www.coursera.org/specializations/anatomy',
            free: true,
            why: 'Full anatomy specialization from the University of Michigan medical school, free to audit. Cadaver-based videos.',
          },
        ],
        tools: [
          {
            title: 'Complete Anatomy (Elsevier) / BioDigital Human',
            url: 'https://www.biodigital.com/',
            why: 'Interactive 3D anatomy atlas in the browser. Free account gives useful viewing; medical schools buy the full Elsevier suite.',
          },
        ],
        primarySources: [
          {
            title: 'Vesalius, De humani corporis fabrica (1543, scanned)',
            url: 'https://archive.org/details/gri_33125008502920',
            why: 'The Internet Archive\'s scan of the first edition from the Getty Research Institute. The woodcuts are as good as anything published in the four hundred and eighty years since.',
          },
        ],
      },

      interactive: { kind: 'body-systems' },
      seeAlso: ['cell', 'physiology', 'neuro', 'firstaid'],
      prereqs: ['cell'],
      leadsTo: ['physiology', 'neuro'],

      chapterActivity: 'A life-drawing session at the Art Students League on West 57th Street — figure drawing as anatomy study, practiced since the Renaissance.',

      sources: [
        'https://en.wikipedia.org/wiki/Human_body',
        'https://medlineplus.gov/bodysystems.html',
        'https://archive.org/details/anatomydescripti1858gray',
      ],
      verifiedAt: '2026-04-22',
    },

  },
};
