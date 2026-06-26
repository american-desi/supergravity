// ============================================
// Hero lessons (rich format) — 10 authored topics
// Schema: { subject, title, dek, readTime, difficulty, sections, body, videos, seeAlso, furtherReading, keyTerms, image }
// body block types: lead, h2, h3, p, quote, interactive, image, keyterm, callout
// ============================================

window.LESSONS = window.LESSONS || {};

// Overlay / extend existing lessons with new fields where appropriate, and add new ones.

Object.assign(window.LESSONS, {
  'cell': {
    ...(window.LESSONS['cell'] || {}),
    subject: 'biology',
    title: 'The Cell',
    dek: 'The smallest thing that is alive — and a factory more intricate than any city.',
    readTime: '15 min',
    difficulty: 'Beginner',
    sections: ['Intuition', 'Inside the factory', 'Division', 'Practice'],
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200',
    body: [
      { type: 'lead', text: 'Every living thing you have ever seen is made of cells. A blue whale has about a hundred quadrillion of them; a bacterium is exactly one. The cell is the unit where chemistry becomes biology — where molecules start doing things on purpose.' },
      { type: 'h2', text: 'Inside the factory' },
      { type: 'p', text: 'A eukaryotic cell has a nucleus holding the instructions (DNA), mitochondria that turn food into usable energy, ribosomes that read instructions and build proteins, and a membrane that decides what gets in and out. Every organelle has a job. None of them work alone.' },
      { type: 'callout', text: 'A single human cell contains about 2 meters of DNA, folded into a nucleus 6 micrometers across. That is a ratio like stuffing 40 kilometers of fishing line into a tennis ball.' },
      { type: 'h2', text: 'Dividing is the whole point' },
      { type: 'p', text: 'Cells grow by copying themselves. The DNA unwinds, each strand templates a new partner, the cell splits — and now there are two where there was one. Do this trillions of times from a single fertilized egg and you get a person.' },
      { type: 'quote', text: 'Omnis cellula e cellula — every cell from a cell.', cite: 'Rudolf Virchow, 1858' },
    ],
    videos: [
      { id: '8IlzKri08kk', title: 'Inner Life of the Cell', channel: 'Harvard BioVisions', why: 'A Hollywood-quality animation of what actually happens inside a single cell.' },
      { id: 'URUJD5NEXC8', title: 'The Wacky History of Cell Theory', channel: 'TED-Ed', why: '5-minute history of how we discovered cells exist.' },
    ],
    seeAlso: ['genetics', 'evolution', 'atoms', 'biochem'],
    furtherReading: [
      { title: 'Molecular Biology of the Cell', author: 'Bruce Alberts et al.', note: 'The canonical textbook — open access online.' },
      { title: 'The Machinery of Life', author: 'David Goodsell', note: 'Illustrated, for beginners.' },
    ],
    keyTerms: ['Cell', 'Nucleus', 'Mitochondria', 'Ribosome', 'Membrane', 'Eukaryote', 'Prokaryote', 'Organelle'],
  },

  'algebra': {
    subject: 'math',
    title: 'Algebra',
    dek: 'The moment mathematics learned to speak about anything at all.',
    readTime: '12 min',
    difficulty: 'Beginner',
    sections: ['Why x', 'The balance beam', 'Quadratics', 'Practice'],
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200',
    body: [
      { type: 'lead', text: 'Arithmetic is about specific numbers. Algebra is about any number. The trick — introducing a symbol to stand for something unknown — sounds small. It changed what mathematics could do.' },
      { type: 'h2', text: 'The balance beam' },
      { type: 'p', text: 'An equation is a pair of scales. Whatever you do to one side, you must do to the other. Subtract 3 from both sides, and the balance holds. Divide both sides by 2, and it still holds. Solving for x is nothing more than moving things across the beam until x is alone.' },
      { type: 'h2', text: 'The quadratic formula' },
      { type: 'p', text: 'For any equation of the form ax² + bx + c = 0, the two possible values of x are given by a single formula you can carry in your pocket for life. Memorize it once; solve every quadratic, forever.' },
      { type: 'callout', text: 'x = (−b ± √(b² − 4ac)) / 2a. The expression under the root — the discriminant — tells you whether there are two solutions, one, or none at all.' },
    ],
    videos: [
      { id: 'NybHckSEQBI', title: 'Algebra Basics: What Are Variables?', channel: 'Math Antics', why: 'Friendly intro to the idea of a variable.' },
      { id: 'l3XzepN03KQ', title: 'The Map of Mathematics', channel: 'Domain of Science', why: 'Where algebra sits in the whole landscape of math.' },
    ],
    seeAlso: ['arith', 'geom', 'calc1', 'linalg'],
    furtherReading: [
      { title: 'Algebra', author: 'Israel Gelfand', note: 'Short, beautiful, rigorous.' },
    ],
    keyTerms: ['Variable', 'Equation', 'Quadratic', 'Discriminant', 'Coefficient', 'Linear'],
  },

  'genetics': {
    subject: 'biology',
    title: 'DNA and Heredity',
    dek: 'Four letters, three and a half billion pairs, one body.',
    readTime: '16 min',
    difficulty: 'Intermediate',
    sections: ['The molecule', 'The code', 'Inheritance', 'Practice'],
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=1200',
    body: [
      { type: 'lead', text: 'In 1953, two young scientists published a one-page paper describing a double helix. It was the most important page in twentieth-century biology. Suddenly every question about inheritance had, in principle, a chemical answer.' },
      { type: 'h2', text: 'The code' },
      { type: 'p', text: 'DNA is a chain of four bases — A, T, C, G — paired across two strands. Every three bases code for one amino acid; strings of amino acids fold into proteins; proteins do almost everything a body does. The code is universal: a human gene read by a bacterium produces the same protein.' },
      { type: 'h2', text: 'Mendel, mostly right' },
      { type: 'p', text: 'Gregor Mendel bred peas in a monastery garden and worked out the rules of inheritance before anyone knew DNA existed. His laws still hold for simple traits. Most real traits turn out to be more tangled — heights, diseases, and personalities depend on thousands of genes interacting with each other and the world.' },
    ],
    videos: [
      { id: 'zwibgNGe4aY', title: 'DNA Structure and Replication', channel: 'Crash Course', why: 'Hank Green at his clearest.' },
      { id: 'qzT6Lg7qEAI', title: 'The Genius of Mendel', channel: 'Stated Clearly', why: 'Beautiful animation of the pea experiments.' },
    ],
    seeAlso: ['cell', 'evolution', 'biochem', 'ai'],
    furtherReading: [
      { title: 'The Gene: An Intimate History', author: 'Siddhartha Mukherjee' },
      { title: 'The Double Helix', author: 'James Watson', note: 'The discovery, from the inside.' },
    ],
    keyTerms: ['DNA', 'Gene', 'Chromosome', 'Allele', 'Genotype', 'Phenotype', 'Mutation', 'Mendelian'],
  },

  'ai': {
    subject: 'cs',
    title: 'Artificial Intelligence',
    dek: 'How a stack of linear algebra learned to write, see, and talk back.',
    readTime: '20 min',
    difficulty: 'Advanced',
    sections: ['History', 'Neural nets', 'Transformers', "Where it's going"],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
    body: [
      { type: 'lead', text: 'For most of its history, AI was the name for a promise that kept getting postponed. In the last decade that changed. The reason is prosaic: we figured out how to throw a lot of data and a lot of compute at a simple architecture and watched it generalize in ways nobody predicted.' },
      { type: 'h2', text: 'The neuron, digitized' },
      { type: 'p', text: 'An artificial neuron takes a bunch of inputs, multiplies each by a weight, sums them up, and passes the result through a nonlinear function. Stack millions of these in layers. Feed in an image. Adjust the weights until the output matches the label. This simple recipe — trained on enough examples — does most of modern AI.' },
      { type: 'h2', text: 'Transformers ate the field' },
      { type: 'p', text: 'In 2017, a paper titled "Attention Is All You Need" proposed an architecture called the transformer. It turned out to scale almost embarrassingly well: bigger models, trained on more data, got monotonically better at nearly everything. Today\'s language and image models are all transformers at heart.' },
      { type: 'quote', text: 'We can only see a short distance ahead, but we can see plenty there that needs to be done.', cite: 'Alan Turing, 1950' },
    ],
    videos: [
      { id: 'aircAruvnKk', title: 'But what IS a neural network?', channel: '3Blue1Brown', why: 'The canonical visual explanation.' },
      { id: 'wjZofJX0v4M', title: 'What is a Transformer?', channel: '3Blue1Brown', why: 'The architecture behind ChatGPT, visualized.' },
      { id: 'kCc8FmEb1nY', title: "Let's build GPT from scratch", channel: 'Andrej Karpathy', why: 'If you want the hands-on view.' },
    ],
    seeAlso: ['algorithms', 'linalg', 'datascience', 'robotics', 'ai_craft'],
    furtherReading: [
      { title: 'Deep Learning', author: 'Goodfellow, Bengio, Courville' },
      { title: 'The Alignment Problem', author: 'Brian Christian' },
    ],
    keyTerms: ['Neural Network', 'Transformer', 'Training', 'Backpropagation', 'Gradient Descent', 'Attention', 'LLM', 'Embedding'],
  },

  'relativity': {
    subject: 'physics',
    title: 'Relativity',
    dek: 'Space, time, and the moment physics stopped being common sense.',
    readTime: '22 min',
    difficulty: 'Advanced',
    sections: ['Special', 'General', 'Predictions', 'Practice'],
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=1200',
    body: [
      { type: 'lead', text: 'In 1905 a patent clerk in Bern published a paper that changed what space and time meant. Ten years later he extended it to gravity. Both papers are short. Both are correct. Both violate every intuition the human brain evolved to have.' },
      { type: 'h2', text: 'Special relativity, in one sentence' },
      { type: 'p', text: 'The speed of light is the same for every observer, regardless of how they are moving. Everything strange — time dilation, length contraction, E = mc² — follows from that single stubborn fact.' },
      { type: 'h2', text: 'General relativity, in one sentence' },
      { type: 'p', text: 'Gravity is not a force. Mass bends spacetime, and things moving in bent spacetime appear to attract. A falling apple is simply following the straightest possible line through a geometry warped by Earth.' },
      { type: 'callout', text: 'Every GPS satellite has to correct for relativity — about 38 microseconds per day. Without the correction your map would drift by 10 kilometers a day.' },
    ],
    videos: [
      { id: 'wrwgIjBUYVc', title: "Einstein's Relativity and the Quantum Revolution", channel: 'Yale Courses', why: 'A 40-lecture free course if you want the full ride.' },
      { id: 'ev9zrt__lec', title: 'General Relativity Explained in 7 Levels', channel: 'WIRED', why: 'From kid to expert in one sitting.' },
      { id: 'AwhKZ3fd9JA', title: 'The Speed of Light is NOT About Light', channel: 'PBS Space Time', why: 'Why c is the speed limit of causality itself.' },
    ],
    seeAlso: ['mechanics', 'cosmology', 'blackholes', 'quantum'],
    furtherReading: [
      { title: 'Relativity: The Special and General Theory', author: 'Albert Einstein', note: 'Einstein wrote a version for the public. Still in print.' },
      { title: 'Spacetime Physics', author: 'Taylor & Wheeler' },
    ],
    keyTerms: ['Special Relativity', 'General Relativity', 'Spacetime', 'Time Dilation', 'E=mc²', 'Geodesic', 'Light Cone'],
  },

  'evolution': {
    subject: 'biology',
    title: 'Evolution',
    dek: 'Four ingredients, four billion years, every living thing.',
    readTime: '18 min',
    difficulty: 'Intermediate',
    sections: ['The mechanism', 'Evidence', 'Misconceptions', 'Practice'],
    image: 'https://images.unsplash.com/photo-1507296950490-f80cf2d04b22?w=1200',
    body: [
      { type: 'lead', text: 'Darwin\'s idea has been called the single best idea anyone ever had. It explains how blind chemistry produces eyes, wings, nervous systems, and the person reading this sentence — without any plan, designer, or foresight.' },
      { type: 'h2', text: 'Four ingredients' },
      { type: 'p', text: 'Variation — individuals differ. Heredity — children resemble parents. Differential reproduction — some variants leave more offspring. Time — repeat for millions of generations. That is the whole mechanism. Everything else is detail.' },
      { type: 'h2', text: 'Why it is so often misunderstood' },
      { type: 'p', text: 'Evolution is not "survival of the fittest" in any dramatic sense; most organisms simply live and reproduce a little better than average. It does not aim at anything — no species is "more evolved" than another; horseshoe crabs and humans have both been evolving for the same 4 billion years. And it is not random. Mutation is random; selection is the opposite of random.' },
    ],
    videos: [
      { id: '2f7EJVVGZXk', title: 'Myths and Misconceptions about Evolution', channel: 'TED-Ed', why: 'Fixes the most common misunderstandings in 5 minutes.' },
      { id: 'oMsLaXFMefM', title: 'What is Evolution?', channel: 'Stated Clearly', why: 'Beautifully animated, shows the mechanism end to end.' },
    ],
    seeAlso: ['cell', 'genetics', 'ecology', 'human_evo', 'deeptime'],
    furtherReading: [
      { title: 'The Selfish Gene', author: 'Richard Dawkins' },
      { title: 'Why Evolution Is True', author: 'Jerry Coyne' },
    ],
    keyTerms: ['Natural Selection', 'Mutation', 'Fitness', 'Speciation', 'Common Ancestor', 'Adaptation', 'Drift'],
  },

  'renaissance': {
    subject: 'history',
    title: 'The Renaissance',
    dek: 'Three hundred years during which Europe remembered what it had forgotten.',
    readTime: '18 min',
    difficulty: 'Intermediate',
    sections: ['What it was', 'Florence', 'Perspective & humanism', 'Legacy'],
    image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1200',
    body: [
      { type: 'lead', text: 'The word means rebirth. What was being reborn, in the humanists\' telling, was antiquity — the Greek and Roman learning that had survived in scraps through the medieval centuries. But something new was being born at the same time: a self-conscious modernity.' },
      { type: 'h2', text: 'Why Florence' },
      { type: 'p', text: 'A republic of merchants grown rich on wool and banking. The Medici bankrolled artists the way Silicon Valley now bankrolls startups. Competition between city-states meant every prince wanted the best painter, the best architect, the best library — and paid accordingly.' },
      { type: 'h2', text: 'Perspective and humanism' },
      { type: 'p', text: 'Two technologies spread together: linear perspective, which let painters put the world on a flat surface as the eye sees it, and humanism, which put the human being at the center of inquiry. Both said: look again. Measure. Trust what you see.' },
    ],
    videos: [
      { id: 'Vufba_ZcoR0', title: 'The Renaissance: Was it a Thing?', channel: 'Crash Course', why: 'John Green on the most interrogated historical period.' },
      { id: 'lRvUZZBkeQ4', title: 'How one-point linear perspective works', channel: 'TED-Ed', why: 'The technology that transformed painting.' },
    ],
    seeAlso: ['medieval', 'art', 'renart', 'exploration', 'arch_history'],
    furtherReading: [
      { title: 'The Civilization of the Renaissance in Italy', author: 'Jacob Burckhardt', note: 'The classic 19th-century study.' },
      { title: 'The Swerve', author: 'Stephen Greenblatt' },
    ],
    keyTerms: ['Humanism', 'Perspective', 'Medici', 'Florence', 'Quattrocento', 'Patronage'],
  },

  'thermo': {
    subject: 'physics',
    title: 'Thermodynamics',
    dek: 'Four laws that govern everything from kettles to black holes.',
    readTime: '18 min',
    difficulty: 'Intermediate',
    sections: ['The laws', 'Entropy', 'Heat engines', 'Practice'],
    image: 'https://images.unsplash.com/photo-1541873676-a18131494184?w=1200',
    body: [
      { type: 'lead', text: 'If physics were a village, thermodynamics would be the oldest resident — the one who watched the steam engines come and go and learned, from them, something true about time itself.' },
      { type: 'h2', text: 'The laws, plain' },
      { type: 'p', text: 'Zeroth: if A and B are each in equilibrium with C, they are in equilibrium with each other (temperature exists). First: energy is conserved. Second: entropy never decreases in a closed system. Third: you cannot reach absolute zero. Four statements, universally true, and the second is the one that hurts.' },
      { type: 'h2', text: 'Why you can\'t unbreak an egg' },
      { type: 'p', text: 'An intact egg is one arrangement of molecules. A broken egg is many. Entropy is the count of arrangements; the universe drifts toward high-entropy states simply because there are more of them. The "arrow of time" is nothing more than this statistical preference — rolled out across galaxies.' },
    ],
    videos: [
      { id: '8N1BxHgsoOw', title: 'The Laws of Thermodynamics', channel: 'Crash Course', why: 'Concise, visual, accurate.' },
      { id: 'sMb00lz-IfE', title: 'The Misunderstood Nature of Entropy', channel: 'Veritasium', why: 'Why the "disorder" metaphor for entropy is misleading.' },
    ],
    seeAlso: ['mechanics', 'quantum', 'atoms', 'cosmology'],
    furtherReading: [
      { title: 'The Four Laws That Drive the Universe', author: 'Peter Atkins' },
    ],
    keyTerms: ['Entropy', 'Energy', 'Temperature', 'Heat', 'Equilibrium', 'Carnot Cycle'],
  },

  'algorithms': {
    subject: 'cs',
    title: 'Algorithms',
    dek: 'How to solve problems in recipes — and how to tell a good recipe from a bad one.',
    readTime: '16 min',
    difficulty: 'Intermediate',
    sections: ['Big-O', 'Sorting', 'Graphs', 'Practice'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200',
    body: [
      { type: 'lead', text: 'An algorithm is a finite list of steps. A good algorithm finishes the job without wasting steps. Computer science spends most of its time deciding what "without wasting" means in a world where problems can grow without bound.' },
      { type: 'h2', text: 'Big-O in one paragraph' },
      { type: 'p', text: 'Forget the constants. Ask: as n grows huge, how does the number of steps scale? O(1) is instant. O(log n) is almost instant. O(n) is fine. O(n log n) is the best you can do for sorting. O(n²) is tolerable for small n. O(2ⁿ) is bad, and O(n!) is worse. That is the whole vocabulary.' },
      { type: 'h2', text: 'Sorting: the staircase of the field' },
      { type: 'p', text: 'Bubble sort: quadratic, obvious, bad. Merge sort: n log n, recursive, elegant. Quicksort: same on average, faster in practice. Every CS student walks up this staircase and learns something real about trade-offs.' },
    ],
    videos: [
      { id: 'kPRA0W1kECg', title: '15 Sorting Algorithms in 6 Minutes', channel: 'Timo Bingmann', why: 'Visual + audio. The canonical sorting video.' },
      { id: '09_LlHjoEiY', title: 'Algorithms — What is an algorithm?', channel: 'Computerphile', why: 'Warm, thoughtful introduction.' },
    ],
    seeAlso: ['programming', 'datastructures', 'ai', 'crypto', 'datascience'],
    furtherReading: [
      { title: 'Introduction to Algorithms (CLRS)', author: 'Cormen, Leiserson, Rivest, Stein', note: 'The textbook.' },
      { title: 'Grokking Algorithms', author: 'Aditya Bhargava', note: 'Friendly, illustrated.' },
    ],
    keyTerms: ['Big-O', 'Sorting', 'Recursion', 'Graph', 'Complexity', 'Dynamic Programming', 'Greedy'],
  },

  'classical': {
    subject: 'music',
    title: 'The Classical Tradition',
    dek: 'Four centuries, four eras, one ongoing conversation.',
    readTime: '16 min',
    difficulty: 'Intermediate',
    sections: ['Baroque', 'Classical', 'Romantic', 'Modern'],
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1200',
    body: [
      { type: 'lead', text: 'What we loosely call "classical music" is not one style but a lineage — a conversation between composers dead and alive, each responding to the last, each adding something the form didn\'t yet know it needed.' },
      { type: 'h2', text: 'Baroque: pattern and counterpoint' },
      { type: 'p', text: 'Bach\'s fugues are puzzles that happen to be beautiful. The baroque ear loved pattern, symmetry, and voices weaving around each other in strict rules. Listen for the subject entering in each voice, one after another.' },
      { type: 'h2', text: 'Romantic: emotion, foregrounded' },
      { type: 'p', text: 'Beethoven is the hinge. Before him, the composer was a craftsman. After him, the composer was an artist whose inner life was the subject. Brahms, Mahler, Chopin — the whole nineteenth century is people trying to put bigger feelings into sound.' },
    ],
    videos: [
      { id: 'ipzR9bhei_o', title: "Bach's Toccata and Fugue in D minor, Visualized", channel: 'smalin', why: 'See the fugue as it plays.' },
      { id: 'BhQIKrQ4OBI', title: "Beethoven's 5th — explained", channel: 'Inside the Score', why: 'How four notes became a universe.' },
    ],
    seeAlso: ['harmony', 'counterpoint', 'notation', 'jazz'],
    furtherReading: [
      { title: 'The Rest is Noise', author: 'Alex Ross', note: 'The 20th century of classical music.' },
    ],
    keyTerms: ['Fugue', 'Sonata', 'Symphony', 'Counterpoint', 'Tonality', 'Leitmotif'],
  },

  'atoms': {
    subject: 'chemistry',
    title: 'Atoms & the Periodic Table',
    dek: 'Every substance you will ever encounter, built from roughly a hundred parts.',
    readTime: '14 min',
    difficulty: 'Beginner',
    sections: ['The idea', 'The table', 'Bonding', 'Practice'],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200',
    body: [
      { type: 'lead', text: 'The ancient Greeks guessed it. John Dalton made it quantitative. Dmitri Mendeleev arranged the guesses into a chart so useful it still hangs on every chemistry wall. Matter is not continuous; it comes in discrete pieces, and those pieces repeat in patterns.' },
      { type: 'h2', text: 'Rows and columns mean something' },
      { type: 'p', text: 'The rows (periods) correspond to electron shells; the columns (groups) share valence electrons and therefore chemistry. Noble gases are aloof. Alkali metals are promiscuous. Halogens are thirsty for one more electron. The whole table is a map of social behavior at the atomic scale.' },
    ],
    videos: [
      { id: 'FSyAehMdpyI', title: 'The 2,400-year search for the atom', channel: 'TED-Ed', why: 'From Democritus to Bohr in 5 minutes.' },
      { id: '0RRVV4Diomg', title: 'The Periodic Table: Crash Course Chemistry', channel: 'Crash Course', why: 'Hank Green walks the table.' },
    ],
    seeAlso: ['bonds', 'reactions', 'quantum', 'organic'],
    furtherReading: [
      { title: 'The Disappearing Spoon', author: 'Sam Kean', note: 'History stories behind every element.' },
    ],
    keyTerms: ['Atom', 'Proton', 'Electron', 'Neutron', 'Element', 'Period', 'Group', 'Valence'],
  },

  'linalg': {
    subject: 'math',
    title: 'Linear Algebra',
    dek: 'The mathematics of transformations — and the hidden engine of almost all modern computation.',
    readTime: '20 min',
    difficulty: 'Advanced',
    sections: ['Vectors', 'Matrices', 'Eigenvalues', 'Applications'],
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200',
    body: [
      { type: 'lead', text: 'If calculus is the math of continuous change, linear algebra is the math of structured change. A matrix takes a vector and moves it somewhere else — rotating, stretching, projecting — according to a rule you can read off a grid of numbers.' },
      { type: 'h2', text: 'Everything is a transformation' },
      { type: 'p', text: "Want to rotate an image? Multiply by a rotation matrix. Classify handwritten digits? Multiply by a learned matrix. Project 3D graphics onto a 2D screen? Matrix multiplication. Google's original page-ranking algorithm? An eigenvector problem. Linear algebra is the silent dependency of almost all quantitative work." },
      { type: 'h2', text: 'Eigenvalues and the skeleton of a matrix' },
      { type: 'p', text: 'An eigenvector of a matrix is a direction the matrix preserves — it gets stretched but not turned. The eigenvalue is how much it stretches. Together they are the skeleton: once you know them, you know the essential behavior of the matrix forever.' },
    ],
    videos: [
      { id: 'fNk_zzaMoSs', title: 'Essence of Linear Algebra', channel: '3Blue1Brown', why: 'The single best visual introduction to the subject ever made.' },
      { id: 'PFDu9oVAE-g', title: 'Eigenvectors and eigenvalues', channel: '3Blue1Brown', why: 'Makes the word "eigen" actually mean something.' },
    ],
    seeAlso: ['algebra', 'calc1', 'ai', 'datascience', 'gamedev'],
    furtherReading: [
      { title: 'Linear Algebra Done Right', author: 'Sheldon Axler' },
      { title: 'No Bullshit Guide to Linear Algebra', author: 'Ivan Savov' },
    ],
    keyTerms: ['Vector', 'Matrix', 'Eigenvalue', 'Eigenvector', 'Dot Product', 'Determinant', 'Rank', 'Basis'],
  },
});

// Also write a default videos/seeAlso map used as fallback for lessons without them
window.TOPIC_VIDEOS = {
  'mechanics': [{ id: 'kKKM8Y-u7ds', title: "Newton's 3 Laws", channel: 'Crash Course' }],
  'em': [{ id: 'x1-SibwIPM4', title: 'The Four Maxwell Equations', channel: 'Parth G' }],
  'quantum': [{ id: 'p7bzE1E5PMY', title: "What's the Deal with Quantum Mechanics?", channel: 'Veritasium' }],
  'calc1': [{ id: 'WUvTyaaNkzM', title: 'Essence of Calculus', channel: '3Blue1Brown' }],
  'stats': [{ id: 'MXaJ7sa7q-8', title: 'Statistics — an introduction', channel: 'StatQuest' }],
  'programming': [{ id: 'zOjov-2OZ0E', title: 'What is programming?', channel: 'Kurzgesagt' }],
  'cosmology': [{ id: 'wNDGgL73ihY', title: 'Timelapse of the Universe', channel: 'melodysheep' }],
  'blackholes': [{ id: 'e-P5IFTqB98', title: 'Black Holes Explained', channel: 'Kurzgesagt' }],
  'solar': [{ id: 'libKVRa01L8', title: 'The Solar System', channel: 'Kurzgesagt' }],
  'plates': [{ id: 'RAx_56gpB08', title: 'Plate Tectonics Explained', channel: 'MinuteEarth' }],
  'rocks': [{ id: 'fpyln-aPKIE', title: 'The Rock Cycle', channel: 'Learn Bright' }],
  'rome': [{ id: 'uTsj7N5W5H0', title: 'The Fall of Rome', channel: 'Historia Civilis' }],
  'greece': [{ id: 'LE2v3sUzTH4', title: 'Ancient Greece in 18 Minutes', channel: 'Arzamas' }],
  'ww': [{ id: 'mFUlxOrFDhE', title: 'World War II in Color', channel: 'World War Two' }],
  'shakespeare': [{ id: 'RgKAFK5djSk', title: 'Why Shakespeare loved iambic pentameter', channel: 'TED-Ed' }],
  'photography': [{ id: 'F8T94sdiNjc', title: 'The Exposure Triangle', channel: 'B&H Photo' }],
  'knife': [{ id: 'YrHpeEwk_-U', title: 'Knife Skills 101', channel: 'ChefSteps' }],
  'bread': [{ id: 'LS6V92OVxEA', title: 'How to Make Sourdough Bread', channel: 'Joshua Weissman' }],
  'framing': [{ id: 'LuEAGXCzI6Y', title: 'Rough Framing a Wall', channel: 'Essential Craftsman' }],
  'cpr': [{ id: 'M4ACYp75mjU', title: 'CPR in 60 Seconds', channel: 'British Heart Foundation' }],
  'budgeting': [{ id: 'HQzoZfc3GwQ', title: 'How to Budget', channel: 'The Financial Diet' }],
  'chess': [{ id: 'fb-bdfE7Lf0', title: 'Chess Fundamentals', channel: 'GothamChess' }],
  'openings': [{ id: 'lWfNezCEWBQ', title: 'The 5 Best Chess Openings', channel: 'GothamChess' }],
  'drawing': [{ id: 'hJ-YFKkKL9c', title: 'How to Draw — for Beginners', channel: 'Proko' }],
  'color': [{ id: 'AvgCkHrcj90', title: 'The Art of Color', channel: 'The Art Assignment' }],
  'exposure': [{ id: 'F8T94sdiNjc', title: 'The Exposure Triangle', channel: 'B&H Photo' }],
};
