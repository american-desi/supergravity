// ============================================
// WORLD KNOWLEDGE — Master Lessons Library
// Deep dives with external resources (videos, articles, primary sources)
// ============================================

window.LESSONS = {};

Object.assign(window.LESSONS, {

  // ============ MATHEMATICS ============
  'arith': {
    subject: 'math', title: 'Arithmetic & Number', dek: 'The oldest mathematics — and the one every other branch leans on.',
    readTime: '10 min', difficulty: 'Beginner',
    sections: ['Counting', 'Operations', 'Place value', 'Why it works'],
    body: [
      { type: 'lead', text: 'Before geometry had proofs, before algebra had letters, humans were tying knots in cords and stacking pebbles. Arithmetic is the bedrock — simple enough for a five-year-old, deep enough that number theorists still argue about the integers.' },
      { type: 'h2', text: 'Place value, the trick we take for granted' },
      { type: 'p', text: 'The Hindu-Arabic numeral system, carried to Europe in the twelfth century through Arabic translations of Brahmagupta, gave us the single most important mathematical invention after the number itself: positional notation. A 3 in the tens place means thirty; the same glyph in the hundreds place means three hundred. Try doing long division in Roman numerals and you will understand why this mattered.' },
      { type: 'h2', text: 'Why the operations compose' },
      { type: 'p', text: 'Addition is repeated counting. Multiplication is repeated addition. Exponentiation is repeated multiplication. Each operation is the last one, iterated. The pattern continues upward (tetration, pentation) — but falls apart past exponentiation, because the brain runs out of hooks.' },
      { type: 'quote', text: 'God made the integers; all else is the work of man.', cite: 'Leopold Kronecker' },
    ],
    resources: {
      videos: [
        { title: 'The History of Counting', author: '3Blue1Brown / Numberphile', url: 'https://www.youtube.com/watch?v=cZw6KkwHXp4' },
        { title: 'Place value explained', author: 'Khan Academy', url: 'https://www.khanacademy.org/math/arithmetic-home/multiply-divide/place-value' },
      ],
      reads: [
        { title: 'Numeral system', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Numeral_system' },
        { title: 'Hindu–Arabic numerals', source: 'Britannica', url: 'https://www.britannica.com/topic/Hindu-Arabic-numerals' },
      ],
    },
  },

  'algebra': {
    subject: 'math', title: 'Algebra', dek: 'The moment mathematics learned to speak about anything at all.',
    readTime: '12 min', difficulty: 'Beginner',
    sections: ['Why x', 'The balance', 'Quadratics', 'Practice'],
    body: [
      { type: 'lead', text: "Arithmetic is about specific numbers. Algebra is about any number. The trick — introducing a symbol to stand for something unknown — sounds small. It changed what mathematics could do." },
      { type: 'h2', text: 'The word is Arabic' },
      { type: 'p', text: "\"Algebra\" comes from al-jabr, meaning \"restoration\" — the title of a ninth-century treatise by al-Khwarizmi, the Baghdad polymath whose name also gave us \"algorithm.\" His book taught how to restore balance to an equation by moving terms across the equals sign." },
      { type: 'h2', text: 'The balance beam' },
      { type: 'p', text: "An equation is a pair of scales. Whatever you do to one side, you must do to the other. Subtract 3 from both sides, the balance holds. Divide both sides by 2, it still holds. Solving for x is nothing more than moving things across the beam until x stands alone." },
      { type: 'h2', text: 'The quadratic formula' },
      { type: 'p', text: "For any equation of the form ax² + bx + c = 0, the two possible values of x are given by x = (−b ± √(b² − 4ac)) / 2a — a single formula you can carry in your pocket for life. The part under the square root, the discriminant, tells you whether the roots are real, repeated, or imaginary." },
    ],
    resources: {
      videos: [
        { title: 'Essence of Algebra', author: '3Blue1Brown', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr' },
        { title: 'Algebra Basics', author: 'Khan Academy', url: 'https://www.khanacademy.org/math/algebra' },
      ],
      reads: [
        { title: 'History of Algebra', source: 'MacTutor', url: 'https://mathshistory.st-andrews.ac.uk/HistTopics/Arabic_mathematics/' },
        { title: 'Al-Khwarizmi', source: 'Britannica', url: 'https://www.britannica.com/biography/al-Khwarizmi' },
      ],
    },
  },

  'calc1': {
    subject: 'math', title: 'Calculus I — Derivatives', dek: 'Newton and Leibniz, independently, discovered how to put numbers on change itself.',
    readTime: '18 min', difficulty: 'Intermediate',
    sections: ['The motivation', 'Limits', 'The derivative', 'Applications'],
    body: [
      { type: 'lead', text: "Before 1666, there was no way to ask \"how fast is something changing at a single instant?\" — and get a precise answer. In that summer, hiding from plague at his mother\'s farm, Newton figured it out. Leibniz, working separately in Germany, got there within a decade. They spent the rest of their lives fighting about priority." },
      { type: 'h2', text: 'The core move' },
      { type: 'p', text: "To find the slope of a curve at point P, you pick a nearby point Q, compute the slope of the straight line through them, and ask what happens as Q slides arbitrarily close to P. The slopes get closer and closer to a specific number — the derivative. The bit that makes it rigorous is called a \"limit,\" and it took another two centuries (Cauchy, Weierstrass) to define it without hand-waving." },
      { type: 'interactive', key: 'deriv-plot' },
      { type: 'h2', text: 'Why it mattered' },
      { type: 'p', text: "Calculus let physics put numbers on orbits, on pendulums, on the vibration of a string. Maxwell\'s equations, relativity, quantum mechanics, every branch of engineering — all of it hangs off this one idea. There is a reason every college freshman in the sciences still meets it." },
      { type: 'quote', text: "If I have seen further it is by standing on the shoulders of Giants.", cite: "Isaac Newton, letter to Hooke, 1675" },
    ],
    resources: {
      videos: [
        { title: 'Essence of Calculus (full series)', author: '3Blue1Brown', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr' },
        { title: 'Calculus 1 lectures', author: 'Prof. Leonard', url: 'https://www.youtube.com/playlist?list=PLF797E961509B4EB5' },
      ],
      reads: [
        { title: 'Calculus Made Easy (Silvanus Thompson, free)', source: 'Project Gutenberg', url: 'https://www.gutenberg.org/ebooks/33283' },
        { title: 'Paul\'s Online Math Notes — Calculus I', source: 'Lamar U.', url: 'https://tutorial.math.lamar.edu/Classes/CalcI/CalcI.aspx' },
      ],
    },
  },

  'linalg': {
    subject: 'math', title: 'Linear Algebra', dek: 'The mathematics of transformations — the hidden engine of almost all modern computation.',
    readTime: '20 min', difficulty: 'Advanced',
    sections: ['Vectors', 'Matrices', 'Eigenvalues', 'Applications'],
    body: [
      { type: 'lead', text: "If calculus is the math of continuous change, linear algebra is the math of structured change. A matrix takes a vector and moves it somewhere else — rotating, stretching, projecting — according to a rule you can read off a grid of numbers." },
      { type: 'h2', text: 'Everything is a transformation' },
      { type: 'p', text: "Rotate an image? Multiply by a rotation matrix. Classify handwritten digits? Multiply by a learned matrix. Project 3D graphics onto a 2D screen? Matrix multiplication. Google\'s original PageRank? An eigenvector problem. Linear algebra is the silent dependency of almost all quantitative work in the 21st century." },
      { type: 'h2', text: 'Eigenvalues, the skeleton' },
      { type: 'p', text: "An eigenvector of a matrix is a direction the matrix preserves — it gets stretched but not turned. The eigenvalue is how much it stretches. Once you know them, you know the essential behavior of the matrix forever; everything else is detail." },
    ],
    resources: {
      videos: [
        { title: 'Essence of Linear Algebra (full series)', author: '3Blue1Brown', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab' },
        { title: 'MIT 18.06 Linear Algebra', author: 'Gilbert Strang', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/' },
      ],
      reads: [
        { title: 'Immersive Linear Algebra', source: 'immersivemath.com', url: 'http://immersivemath.com/ila/index.html' },
        { title: 'Linear algebra done right (Axler, free PDF)', source: 'Springer', url: 'https://linear.axler.net/' },
      ],
    },
  },

  'stats': {
    subject: 'math', title: 'Statistics & Probability', dek: 'How to reason under uncertainty — the literacy of the data age.',
    readTime: '16 min', difficulty: 'Intermediate',
    sections: ['Probability', 'Distributions', 'Inference', 'Bayesian thinking'],
    body: [
      { type: 'lead', text: "Laplace called it \"common sense reduced to calculation.\" Statistics is the branch of math that takes a messy, partial, noisy sample of the world and tells you — with stated confidence — what the whole world probably looks like." },
      { type: 'h2', text: 'The central limit theorem' },
      { type: 'p', text: "Take almost any distribution. Sample from it. Average those samples. Do it again. The distribution of those averages will be approximately bell-shaped — a normal distribution — no matter what shape you started with. This one theorem is why statistics works at all." },
      { type: 'h2', text: 'Bayes, the updated belief' },
      { type: 'p', text: "Bayes\' rule tells you how to update what you believe when new evidence arrives. P(hypothesis | evidence) ∝ P(evidence | hypothesis) × P(hypothesis). That single line is the mathematical spine of modern machine learning, medical diagnosis, and spam filters." },
    ],
    resources: {
      videos: [
        { title: 'Statistics Fundamentals', author: 'StatQuest (Josh Starmer)', url: 'https://www.youtube.com/playlist?list=PLblh5JKOoLUK0FLuzwntyYI10UQFUhsY9' },
        { title: 'Bayes Theorem, visualized', author: '3Blue1Brown', url: 'https://www.youtube.com/watch?v=HZGCoVF3YvM' },
      ],
      reads: [
        { title: 'Seeing Theory (visual textbook)', source: 'Brown University', url: 'https://seeing-theory.brown.edu/' },
        { title: 'OpenIntro Statistics (free)', source: 'openintro.org', url: 'https://www.openintro.org/book/os/' },
      ],
    },
  },

  // ============ PHYSICS ============
  'mechanics': {
    subject: 'physics', title: 'Classical Mechanics', dek: 'Three laws, written by Newton, that govern everything from falling apples to the moon\'s orbit.',
    readTime: '18 min', difficulty: 'Intermediate',
    sections: ['The three laws', 'Gravitation', 'Energy & momentum', 'Practice'],
    body: [
      { type: 'lead', text: "In 1687, Newton published the Principia Mathematica — three laws of motion plus a universal law of gravitation. With those four statements, plus calculus (which he invented for the purpose), he explained planetary orbits, tides, the precession of the equinoxes, and every projectile you\'ve ever seen." },
      { type: 'h2', text: 'The first law, truly' },
      { type: 'p', text: "An object in motion stays in motion unless a force acts on it. The word that matters is unless — Aristotle thought motion required a continuous push. Galileo, rolling balls down inclined planes, figured out that friction was hiding the truth. Newton formalized it." },
      { type: 'interactive', key: 'newton-first' },
      { type: 'h2', text: 'The third law' },
      { type: 'p', text: "For every action, an equal and opposite reaction. Not sequential — simultaneous. You press on the floor with your weight; the floor presses back. Rockets don\'t push against air, they push against their own exhaust." },
      { type: 'interactive', key: 'newton-third' },
    ],
    resources: {
      videos: [
        { title: 'MIT 8.01 Classical Mechanics', author: 'Walter Lewin', url: 'https://www.youtube.com/playlist?list=PLyQSN7X0ro2314mKyUiOILaOC2hk6Pc3j' },
        { title: 'The Feynman Lectures (videos)', author: 'Caltech / Feynman', url: 'https://www.feynmanlectures.caltech.edu/' },
      ],
      reads: [
        { title: 'Principia (Newton, English translation)', source: 'Archive.org', url: 'https://archive.org/details/newtonspmathema00newtrich' },
        { title: 'Classical Mechanics', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Classical_mechanics' },
      ],
    },
  },

  'quantum': {
    subject: 'physics', title: 'Quantum Mechanics', dek: 'The logic of the very small — where particles behave like waves and outcomes are genuinely probabilistic.',
    readTime: '22 min', difficulty: 'Advanced',
    sections: ['The weirdness', 'Wave–particle duality', 'Superposition', 'Interpretations'],
    body: [
      { type: 'lead', text: "In 1900, Max Planck suggested — as a mathematical trick — that energy comes in discrete packets. In 1905, Einstein took the trick literally and explained the photoelectric effect, winning his only Nobel Prize. By 1930, we had a complete theory so counterintuitive that Feynman later said nobody really understands it." },
      { type: 'h2', text: 'The double-slit experiment' },
      { type: 'p', text: "Shoot electrons one at a time through two slits. They land on a screen in an interference pattern — as if each electron went through both slits and interfered with itself. Put a detector at the slits to see which one it took, and the pattern disappears. Observing the electron changes its behavior." },
      { type: 'interactive', key: 'double-slit' },
      { type: 'h2', text: 'Superposition' },
      { type: 'p', text: "Before measurement, a quantum system exists in a combination of possible states — not \"we don\'t know which\" but genuinely both at once, provably, via interference. Measurement collapses the superposition into one outcome. Why? Nobody agrees. That\'s what \"interpretations of quantum mechanics\" means." },
      { type: 'quote', text: "I think I can safely say that nobody really understands quantum mechanics.", cite: "Richard Feynman" },
    ],
    resources: {
      videos: [
        { title: 'Quantum Mechanics: Visually intuitive', author: '3Blue1Brown', url: 'https://www.youtube.com/watch?v=MzRCDLre1b4' },
        { title: 'The Feynman Lectures — QM', author: 'Feynman', url: 'https://www.feynmanlectures.caltech.edu/III_toc.html' },
        { title: 'Double-slit experiment', author: 'Veritasium', url: 'https://www.youtube.com/watch?v=qCmtegdqOOA' },
      ],
      reads: [
        { title: 'Quantum mechanics', source: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/qm/' },
        { title: 'Interpretations of QM', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Interpretations_of_quantum_mechanics' },
      ],
    },
  },

  'relativity': {
    subject: 'physics', title: 'Relativity', dek: 'Einstein noticed that the speed of light is the same for every observer — and rewrote space, time, and gravity to make that true.',
    readTime: '20 min', difficulty: 'Advanced',
    sections: ['Special relativity', 'General relativity', 'Evidence', 'Consequences'],
    body: [
      { type: 'lead', text: "In 1905 — the annus mirabilis — a patent clerk in Bern published four papers that each would have won a Nobel Prize. One of them was special relativity. Ten years later he extended it to include gravity, and space and time became a single four-dimensional thing that curves in the presence of mass." },
      { type: 'h2', text: 'The bending of light' },
      { type: 'p', text: "General relativity predicts that gravity bends light. In 1919, Arthur Eddington observed a solar eclipse from Príncipe and measured stars near the sun\'s edge shifting by exactly the amount Einstein predicted. The front page of The Times of London, 7 November 1919: \"Revolution in science.\"" },
      { type: 'h2', text: 'GPS would not work without it' },
      { type: 'p', text: "Clocks on GPS satellites run faster than clocks on the ground (less gravity) and slower due to their motion (special relativity). The corrections add up to about 38 microseconds per day — which would cause 10-kilometer position errors within a day. Your phone implicitly trusts Einstein every time you open Maps." },
    ],
    resources: {
      videos: [
        { title: 'Relativity explained', author: 'PBS Space Time', url: 'https://www.youtube.com/playlist?list=PLsPUh22kYmNAnhUEkXWXMvkZSheVjhWpT' },
        { title: 'Einstein\'s General Theory', author: 'MinutePhysics', url: 'https://www.youtube.com/watch?v=xGxSTzaID3k' },
      ],
      reads: [
        { title: 'Relativity: The Special and General Theory (Einstein, free)', source: 'Project Gutenberg', url: 'https://www.gutenberg.org/ebooks/30155' },
        { title: 'General Relativity', source: 'Stanford Encyclopedia of Philosophy', url: 'https://plato.stanford.edu/entries/genrel-early/' },
      ],
    },
  },

  'thermo': {
    subject: 'physics', title: 'Thermodynamics', dek: 'Four laws that govern everything from kettles to black holes.',
    readTime: '18 min', difficulty: 'Intermediate',
    sections: ['The four laws', 'Entropy', 'Heat engines', 'Practice'],
    body: [
      { type: 'lead', text: "If physics were a village, thermodynamics would be the oldest resident — the one who watched the steam engines come and go and learned, from them, something true about time itself." },
      { type: 'h2', text: 'The laws, plain' },
      { type: 'p', text: "Zeroth: if A and B are each in equilibrium with C, they are in equilibrium with each other (temperature exists). First: energy is conserved. Second: entropy never decreases in a closed system. Third: you cannot reach absolute zero. Four statements, universally true, and the second is the one that hurts." },
      { type: 'h2', text: 'Why you can\'t unbreak an egg' },
      { type: 'p', text: "An intact egg is one arrangement of molecules. A broken egg is many. Entropy is the count of arrangements; the universe drifts toward high-entropy states simply because there are more of them. The arrow of time is nothing more than this statistical preference — rolled out across galaxies." },
    ],
    resources: {
      videos: [
        { title: 'Entropy: Embrace the Chaos', author: 'Crash Course Chemistry', url: 'https://www.youtube.com/watch?v=ri_4dDvcZeM' },
        { title: 'Thermodynamics series', author: 'Professor Dave Explains', url: 'https://www.youtube.com/playlist?list=PLybg94GvOJ9Eeu_hvfpF2vY_IRnP27FQH' },
      ],
      reads: [
        { title: 'Laws of thermodynamics', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Laws_of_thermodynamics' },
      ],
    },
  },

  // ============ CHEMISTRY ============
  'atoms': {
    subject: 'chemistry', title: 'Atoms & the Periodic Table', dek: 'Every substance you will ever encounter, built from roughly a hundred parts.',
    readTime: '14 min', difficulty: 'Beginner',
    sections: ['The idea', 'The table', 'Bonding preview', 'Practice'],
    body: [
      { type: 'lead', text: "The ancient Greeks guessed it. John Dalton made it quantitative. Dmitri Mendeleev arranged the guesses into a chart so useful it still hangs on every chemistry wall. Matter is not continuous; it comes in discrete pieces, and those pieces repeat in patterns." },
      { type: 'h2', text: 'Why the table has that shape' },
      { type: 'p', text: "Rows (periods) correspond to electron shells; columns (groups) share valence electrons and therefore chemistry. Noble gases are aloof — a full outer shell. Alkali metals are promiscuous — one electron too many. Halogens are thirsty for one more. The whole table is a map of social behavior at the atomic scale." },
      { type: 'h2', text: 'Mendeleev\'s gamble' },
      { type: 'p', text: "When Mendeleev laid out the table in 1869, there were gaps. Rather than fudging, he predicted the properties of elements that nobody had found yet — gallium, scandium, germanium. Within two decades, all three had been discovered, matching his predictions almost exactly." },
    ],
    resources: {
      videos: [
        { title: 'Periodic Videos (every element)', author: 'University of Nottingham', url: 'https://www.youtube.com/@periodicvideos' },
        { title: 'Crash Course Chemistry', author: 'Hank Green', url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtPHzzYuWy6fYEaX9mQQ8oGr' },
      ],
      reads: [
        { title: 'Interactive Periodic Table', source: 'Ptable', url: 'https://ptable.com/' },
        { title: 'Mendeleev\'s original paper (English translation)', source: 'Chemistry Europe', url: 'https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/chin.201915345' },
      ],
    },
  },

  'organic': {
    subject: 'chemistry', title: 'Organic Chemistry', dek: 'The chemistry of carbon — and therefore of every living thing, every plastic, every drug.',
    readTime: '18 min', difficulty: 'Advanced',
    sections: ['Why carbon', 'Functional groups', 'Reactions', 'Synthesis'],
    body: [
      { type: 'lead', text: "Carbon can form four bonds, and it bonds happily to itself. That is the single fact from which the rest of organic chemistry unfolds — millions of compounds, from methane to insulin, all built from chains and rings of carbon decorated with a handful of other atoms." },
      { type: 'h2', text: 'Functional groups' },
      { type: 'p', text: "Organic chemists see molecules not as atoms but as groups — alcohols, carbonyls, amines, aromatic rings. Each group has predictable behavior. Learn a dozen and you can read most of biochemistry." },
    ],
    resources: {
      videos: [
        { title: 'Organic Chemistry — full course', author: 'Prof. Michael Evans (freeOCW)', url: 'https://www.youtube.com/@ProfessorEvans' },
        { title: 'Organic Chemistry Tutor', author: 'The Organic Chemistry Tutor', url: 'https://www.youtube.com/@TheOrganicChemistryTutor' },
      ],
      reads: [
        { title: 'Organic Chemistry (Clayden, free chapters)', source: 'Oxford University Press', url: 'https://global.oup.com/academic/product/organic-chemistry-9780199270293' },
      ],
    },
  },

  // ============ BIOLOGY ============
  'cell': {
    subject: 'biology', title: 'The Cell', dek: 'The smallest thing that is alive — and a factory more intricate than any city.',
    readTime: '15 min', difficulty: 'Beginner',
    sections: ['Intuition', 'The parts', 'Division', 'Practice'],
    body: [
      { type: 'lead', text: "Every living thing you have ever seen is made of cells. A blue whale has about a hundred quadrillion; a bacterium is exactly one. The cell is where chemistry becomes biology — where molecules start doing things on purpose." },
      { type: 'h2', text: 'Inside the factory' },
      { type: 'p', text: "A eukaryotic cell has a nucleus holding the instructions (DNA), mitochondria that turn food into usable energy, ribosomes that read the instructions and build proteins, and a membrane that decides what gets in and out. Every organelle has a job. None of them work alone." },
      { type: 'h2', text: 'The most important meeting in history' },
      { type: 'p', text: "About 1.5 billion years ago, one cell engulfed another and didn\'t digest it. That swallowed cell became the mitochondrion. Every complex life form today descends from that partnership. You are carrying the descendants of a bacterium in every cell of your body." },
      { type: 'quote', text: "Omnis cellula e cellula — every cell from a cell.", cite: "Rudolf Virchow, 1858" },
    ],
    resources: {
      videos: [
        { title: 'Inner Life of the Cell', author: 'Harvard BioVisions', url: 'https://www.youtube.com/watch?v=FzcTgrxMzZk' },
        { title: 'Crash Course Biology: Eukaryopolis', author: 'Hank Green', url: 'https://www.youtube.com/watch?v=cj8dDTHGJBY' },
      ],
      reads: [
        { title: 'Molecular Biology of the Cell (textbook, open chapters)', source: 'NCBI Bookshelf', url: 'https://www.ncbi.nlm.nih.gov/books/NBK21054/' },
        { title: 'The Cell', source: 'Britannica', url: 'https://www.britannica.com/science/cell-biology' },
      ],
    },
  },

  'genetics': {
    subject: 'biology', title: 'DNA and Heredity', dek: 'Four letters, three and a half billion pairs, one body.',
    readTime: '16 min', difficulty: 'Intermediate',
    sections: ['The molecule', 'The code', 'Inheritance', 'Practice'],
    body: [
      { type: 'lead', text: "In 1953, James Watson and Francis Crick published a one-page paper describing a double helix. It was the most important page in twentieth-century biology — built partly on Rosalind Franklin\'s X-ray crystallography, which they saw without her permission. Suddenly every question about inheritance had, in principle, a chemical answer." },
      { type: 'h2', text: 'The code is universal' },
      { type: 'p', text: "DNA is a chain of four bases — A, T, C, G — paired across two strands. Every three bases code for one amino acid; strings of amino acids fold into proteins; proteins do almost everything a body does. The code is the same in a bacterium, an oak, and a human. Insulin genes from a human, spliced into yeast, produce real human insulin. We bet lives on this universality every day." },
      { type: 'h2', text: 'Mendel, mostly right' },
      { type: 'p', text: "Gregor Mendel bred peas in a monastery garden and worked out the rules of inheritance before anyone knew DNA existed. His laws — dominance, segregation, independent assortment — still hold for simple traits. Most real traits are more tangled; heights, diseases, personalities depend on thousands of genes interacting with each other and the world." },
    ],
    resources: {
      videos: [
        { title: 'DNA structure and replication', author: 'Crash Course Biology', url: 'https://www.youtube.com/watch?v=8kK2zwjRV0M' },
        { title: 'DNA Replication (3D)', author: 'Drew Berry / WEHI-TV', url: 'https://www.youtube.com/watch?v=TNKWgcFPHqw' },
      ],
      reads: [
        { title: 'Watson & Crick 1953 (Nature)', source: 'Nature archive', url: 'https://www.nature.com/articles/171737a0' },
        { title: 'DNA From the Beginning', source: 'Cold Spring Harbor', url: 'http://www.dnaftb.org/' },
      ],
    },
  },

  'evolution': {
    subject: 'biology', title: 'Evolution', dek: 'Descent with modification — the single best idea anyone ever had.',
    readTime: '18 min', difficulty: 'Intermediate',
    sections: ['The ingredients', 'The evidence', 'Misunderstandings', 'Practice'],
    body: [
      { type: 'lead', text: "Darwin wasn\'t the first to suspect species change — his grandfather Erasmus wrote about it — but he was the first to propose a mechanism that actually worked: natural selection. Variation, heredity, differential reproduction, time. That\'s it. Given enough generations, the math is unforgiving." },
      { type: 'h2', text: 'Four ingredients, any world' },
      { type: 'p', text: "If organisms vary, if some variations are heritable, and if some variations lead to more surviving offspring — then the population will shift toward the better-adapted. This is true whether you\'re talking about beetles, viruses, or English words. It\'s a substrate-independent algorithm." },
      { type: 'interactive', key: 'evolution-sim' },
      { type: 'h2', text: 'The evidence is overwhelming' },
      { type: 'p', text: "Fossil transitions, shared DNA across species, vestigial structures, observed speciation in real time, the geographic distribution of species — every line of evidence points the same way. Evolution is as well-established as atoms or germs." },
    ],
    resources: {
      videos: [
        { title: 'The Evolution of Life', author: 'Kurzgesagt', url: 'https://www.youtube.com/watch?v=H2_6cqa2cP4' },
        { title: 'Why Evolution Is True', author: 'Jerry Coyne (Stanford lecture)', url: 'https://www.youtube.com/watch?v=PiknzVlVMVQ' },
      ],
      reads: [
        { title: 'On the Origin of Species (full text, free)', source: 'Project Gutenberg', url: 'https://www.gutenberg.org/ebooks/1228' },
        { title: 'Understanding Evolution', source: 'UC Berkeley', url: 'https://evolution.berkeley.edu/' },
      ],
    },
  },

  'neuro': {
    subject: 'biology', title: 'Neuroscience', dek: 'The brain studying itself — and finding that this is harder than it sounds.',
    readTime: '18 min', difficulty: 'Advanced',
    sections: ['The neuron', 'Circuits', 'Plasticity', 'Consciousness'],
    body: [
      { type: 'lead', text: "Eighty-six billion neurons, each connected to thousands of others, firing at rates from a handful per second to several hundred. Out of that tangle emerges everything you have ever thought, felt, or remembered. We understand individual neurons well. What emerges from them, we are only beginning to glimpse." },
      { type: 'h2', text: 'The action potential' },
      { type: 'p', text: "Hodgkin and Huxley, in the 1950s, worked out how the giant axon of a squid fires an electrical pulse — a moving wave of sodium and potassium flux. That work, done on a literally squishy experimental preparation, earned a Nobel Prize and remains the bedrock of how we understand brain signaling." },
    ],
    resources: {
      videos: [
        { title: '2-Minute Neuroscience', author: 'Neuroscientifically Challenged', url: 'https://www.youtube.com/@Neuroscientificallychallenged' },
        { title: 'Principles of Neural Science', author: 'Kandel lectures', url: 'https://www.youtube.com/@ColumbiaZuckermanInstitute' },
      ],
      reads: [
        { title: 'Neuroscience: Exploring the Brain (open chapters)', source: 'Lippincott', url: 'https://www.ncbi.nlm.nih.gov/books/NBK10799/' },
      ],
    },
  },

  // ============ ASTRONOMY ============
  'solar': {
    subject: 'astronomy', title: 'The Solar System', dek: 'Eight planets, a star, and a vast zoo of smaller bodies.',
    readTime: '14 min', difficulty: 'Beginner',
    sections: ['The star', 'Rocky worlds', 'Gas giants', 'The rest'],
    body: [
      { type: 'lead', text: "The sun is a pretty average yellow dwarf, 4.6 billion years old and halfway through its life. Around it orbit four rocky worlds close in, four gas and ice giants further out, a belt of asteroids in between, and a truly enormous number of small icy bodies past Neptune." },
      { type: 'h2', text: 'The planets, briefly' },
      { type: 'p', text: "Mercury: airless, cratered. Venus: runaway greenhouse, surface hot enough to melt lead. Earth: the only known biosphere. Mars: cold desert with a thin atmosphere and polar ice caps. Jupiter: a failed star with a thousand-year storm. Saturn: the rings. Uranus: tipped on its side. Neptune: blue, windy, and very far away." },
    ],
    resources: {
      videos: [
        { title: 'The Solar System (documentary)', author: 'BBC / Brian Cox', url: 'https://www.youtube.com/watch?v=oMJn_iL3S7g' },
        { title: 'Crash Course Astronomy', author: 'Phil Plait', url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtPAJr1ysd5yGIyiSFuh0mIL' },
      ],
      reads: [
        { title: 'Eyes on the Solar System', source: 'NASA (interactive)', url: 'https://eyes.nasa.gov/apps/solar-system/' },
        { title: 'Solar System Exploration', source: 'NASA', url: 'https://science.nasa.gov/solar-system/' },
      ],
    },
  },

  'blackholes': {
    subject: 'astronomy', title: 'Black Holes', dek: 'Where physics bends — and where general relativity first made its strangest prediction.',
    readTime: '16 min', difficulty: 'Advanced',
    sections: ['What they are', 'How they form', 'Event horizons', 'The first image'],
    body: [
      { type: 'lead', text: "In 1915, within weeks of Einstein publishing general relativity, Karl Schwarzschild — a German physicist serving in World War I — solved the field equations for a spherical mass. The solution had an edge past which nothing could return. Einstein didn\'t believe such objects existed. He was wrong." },
      { type: 'h2', text: 'The photograph that settled it' },
      { type: 'p', text: "In April 2019, the Event Horizon Telescope — a planet-sized array of radio dishes — released an image of the supermassive black hole at the center of M87. An orange donut against black. The ring was exactly the shape and size general relativity had predicted a century earlier." },
    ],
    resources: {
      videos: [
        { title: 'What is a black hole?', author: 'Veritasium', url: 'https://www.youtube.com/watch?v=kOEDG3j1bjs' },
        { title: 'Black Hole Explained', author: 'Kurzgesagt', url: 'https://www.youtube.com/watch?v=e-P5IFTqB98' },
      ],
      reads: [
        { title: 'Event Horizon Telescope — M87 images', source: 'eventhorizontelescope.org', url: 'https://eventhorizontelescope.org/' },
        { title: 'Black holes', source: 'NASA', url: 'https://science.nasa.gov/universe/black-holes/' },
      ],
    },
  },

  // ============ HISTORY ============
  'rome': {
    subject: 'history', title: 'Rome', dek: 'A small Italian city that, over a thousand years, became the Mediterranean world — and then wasn\'t.',
    readTime: '22 min', difficulty: 'Intermediate',
    sections: ['Kingdom', 'Republic', 'Empire', 'Why it fell'],
    body: [
      { type: 'lead', text: "Legend says Romulus founded Rome in 753 BC. A kingdom for 250 years, a republic for 500, an empire for another 500 in the west (and a thousand more in the east as Byzantium). Few institutions have ever cast so long a shadow — roads, law, the calendar, the month of August, the alphabet you\'re reading right now." },
      { type: 'interactive', key: 'rome-map' },
      { type: 'h2', text: 'The Republic worked by exhausting everyone' },
      { type: 'p', text: "Rome\'s constitution was a baroque web of offices, assemblies, and magistrates designed to prevent anyone from gaining too much power. For centuries it worked. Then, in the first century BC, the generals realized their armies were personally loyal to them rather than to the state. Caesar crossed the Rubicon in 49 BC. The Republic didn\'t formally end — it just stopped being what it had been." },
      { type: 'h2', text: 'Why it fell (the short version)' },
      { type: 'p', text: "Fiscal overstretch, plague, currency debasement, civil war, barbarian migration pressured by the Huns, and the splitting of the empire into halves that no longer defended each other. It didn\'t \"fall\" in a single year; it unwound across the fifth century, in the west, while thriving in the east for another thousand." },
    ],
    resources: {
      videos: [
        { title: 'The Fall of Rome (short)', author: 'Kings and Generals', url: 'https://www.youtube.com/watch?v=6eVYUVo1Z3M' },
        { title: 'Rome: A History', author: 'Mary Beard (BBC)', url: 'https://www.youtube.com/watch?v=6tkjTPuY8rE' },
        { title: 'History of Rome podcast', author: 'Mike Duncan', url: 'https://thehistoryofrome.typepad.com/' },
      ],
      reads: [
        { title: 'SPQR: A History of Ancient Rome', source: 'Mary Beard (book)', url: 'https://en.wikipedia.org/wiki/SPQR:_A_History_of_Ancient_Rome' },
        { title: 'Ancient Rome', source: 'Britannica', url: 'https://www.britannica.com/place/ancient-Rome' },
      ],
    },
  },

  'renaissance': {
    subject: 'history', title: 'The Renaissance', dek: 'Three hundred years during which Europe remembered what it had forgotten.',
    readTime: '18 min', difficulty: 'Intermediate',
    sections: ['What it was', 'Florence', 'The spread', 'After'],
    body: [
      { type: 'lead', text: "The word means rebirth. What was being reborn, in the humanists\' telling, was antiquity — the Greek and Roman learning that had survived in scraps through the medieval centuries. But something new was being born at the same time: a self-conscious modernity." },
      { type: 'h2', text: 'Why Florence' },
      { type: 'p', text: "A republic of merchants grown rich on wool and banking. The Medici bankrolled artists the way Silicon Valley now bankrolls startups. Competition between city-states meant every prince wanted the best painter, the best architect, the best library — and paid accordingly." },
      { type: 'h2', text: 'Perspective and humanism' },
      { type: 'p', text: "Two technologies spread together: linear perspective, which let painters put the world on a flat surface as the eye sees it, and humanism, which put the human being at the center of inquiry. Both said: look again. Measure. Trust what you see." },
    ],
    resources: {
      videos: [
        { title: 'Renaissance (The Great Courses preview)', author: 'Kenneth Bartlett', url: 'https://www.youtube.com/watch?v=rDgRZ2TGbiw' },
        { title: 'Smarthistory: Renaissance art', author: 'Smarthistory', url: 'https://smarthistory.org/early-renaissance-in-florence/' },
      ],
      reads: [
        { title: 'Renaissance', source: 'Britannica', url: 'https://www.britannica.com/event/Renaissance' },
        { title: 'The Prince (Machiavelli, free)', source: 'Project Gutenberg', url: 'https://www.gutenberg.org/ebooks/1232' },
      ],
    },
  },

  'industrial': {
    subject: 'history', title: 'The Industrial Revolution', dek: 'Steam, coal, factories — and the most dramatic change in human life since agriculture.',
    readTime: '16 min', difficulty: 'Intermediate',
    sections: ['Why Britain', 'The innovations', 'Consequences', 'The long now'],
    body: [
      { type: 'lead', text: "For 10,000 years after agriculture, average living standards barely moved. Then, starting in northern England around 1760, something unprecedented happened — output per person began to double, then double again. That process, compounded, is why a modern poor person lives better materially than an early modern king." },
      { type: 'h2', text: 'Why Britain first' },
      { type: 'p', text: "Cheap coal near the surface, expensive labor, navigable rivers, a culture of tinkerers, strong property rights, and a patent system that let inventors profit. Watt\'s separate-condenser steam engine (1769) made coal-powered machines viable far from rivers. Everything else flowed from there." },
    ],
    resources: {
      videos: [
        { title: 'The Industrial Revolution', author: 'Crash Course World History', url: 'https://www.youtube.com/watch?v=zhL5DCizj5c' },
        { title: 'The Industrial Revolution (documentary)', author: 'Niall Ferguson / PBS', url: 'https://www.youtube.com/watch?v=7QT8EmL0fKo' },
      ],
      reads: [
        { title: 'The British Industrial Revolution in Global Perspective', source: 'R. C. Allen (book summary)', url: 'https://www.cambridge.org/core/books/british-industrial-revolution-in-global-perspective/' },
      ],
    },
  },

  // ============ LITERATURE ============
  'shakespeare': {
    subject: 'literature', title: 'Shakespeare', dek: 'The glovemaker\'s son from Stratford who wrote thirty-nine plays that still won\'t go away.',
    readTime: '18 min', difficulty: 'Intermediate',
    sections: ['The life', 'The plays', 'How to read him', 'Why he endures'],
    body: [
      { type: 'lead', text: "Born 1564, died 1616. Grammar-school education, three children by twenty-one, a career in London as an actor-shareholder, and — somehow — the most quoted body of work in any language except the King James Bible. Nobody agrees why." },
      { type: 'h2', text: 'Iambic pentameter' },
      { type: 'p', text: "Ten syllables a line, alternating unstressed-stressed: da-DUM, da-DUM, da-DUM, da-DUM, da-DUM. It\'s the natural rhythm of English speech, slightly formalized. Once you hear it, you can\'t unhear it — and the moments when Shakespeare breaks the meter become visible as deliberate emotional choices." },
      { type: 'interactive', key: 'meter-tap' },
      { type: 'quote', text: "He was not of an age, but for all time.", cite: "Ben Jonson, on Shakespeare, 1623" },
    ],
    resources: {
      videos: [
        { title: 'Shakespeare Uncovered', author: 'PBS', url: 'https://www.pbs.org/wnet/shakespeare-uncovered/' },
        { title: 'Hamlet (Kenneth Branagh)', author: 'full film', url: 'https://www.youtube.com/watch?v=HjwlRDQDwCg' },
        { title: 'Shakespeare\'s Plays — analysis', author: 'The School of Life', url: 'https://www.youtube.com/watch?v=B7jD9JSQnaQ' },
      ],
      reads: [
        { title: 'Complete Works (free, searchable)', source: 'MIT Shakespeare', url: 'http://shakespeare.mit.edu/' },
        { title: 'Folger Shakespeare Library', source: 'folger.edu', url: 'https://www.folger.edu/explore/shakespeares-works/' },
      ],
    },
  },

  'novel': {
    subject: 'literature', title: 'The Novel', dek: 'A form that barely existed in 1600 and has come to dominate every other.',
    readTime: '14 min', difficulty: 'Intermediate',
    sections: ['The origin', 'Realism', 'Modernism', 'The present'],
    body: [
      { type: 'lead', text: "Cervantes\' Don Quixote (1605) is usually called the first modern novel. What was new? A long prose narrative, about ordinary people, that took interiority seriously — what a character thinks, how perception colors reality. Every novel since is arguing with that template." },
    ],
    resources: {
      videos: [
        { title: 'What is a novel?', author: 'CrashCourse Literature', url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtOeEc9ME62zTfqc0h6Pe8vb' },
      ],
      reads: [
        { title: 'Don Quixote (free translation)', source: 'Project Gutenberg', url: 'https://www.gutenberg.org/ebooks/996' },
      ],
    },
  },

  // ============ CS ============
  'algorithms': {
    subject: 'cs', title: 'Algorithms', dek: 'How to solve problems in recipes — and tell a good recipe from a bad one.',
    readTime: '16 min', difficulty: 'Intermediate',
    sections: ['Big-O', 'Sorting', 'Graphs', 'Practice'],
    body: [
      { type: 'lead', text: "An algorithm is a finite list of steps. A good algorithm finishes without wasting steps. Computer science spends most of its time deciding what \"without wasting\" means in a world where problems grow without bound." },
      { type: 'h2', text: 'Big-O in one paragraph' },
      { type: 'p', text: "Forget the constants. Ask: as n grows huge, how does the number of steps scale? O(1) is instant. O(log n) is almost instant. O(n) is fine. O(n log n) is the best you can do for sorting. O(n²) is tolerable for small n. O(2ⁿ) is bad, O(n!) worse. That is the vocabulary." },
      { type: 'h2', text: 'Sorting is the staircase' },
      { type: 'p', text: "Bubble sort: quadratic, obvious, bad. Merge sort: n log n, recursive, elegant. Quicksort: same on average, faster in practice. Every CS student walks this staircase and learns something real about trade-offs." },
    ],
    resources: {
      videos: [
        { title: 'Introduction to Algorithms (MIT 6.006)', author: 'Erik Demaine', url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/' },
        { title: 'Algorithms course', author: 'Abdul Bari', url: 'https://www.youtube.com/playlist?list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O' },
      ],
      reads: [
        { title: 'CLRS (textbook)', source: 'MIT Press', url: 'https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/' },
        { title: 'visualgo.net — algorithms animated', source: 'visualgo', url: 'https://visualgo.net/' },
      ],
    },
  },

  'ai': {
    subject: 'cs', title: 'Artificial Intelligence', dek: 'How a stack of linear algebra learned to write, see, and talk back.',
    readTime: '20 min', difficulty: 'Advanced',
    sections: ['The long history', 'Neural nets', 'Large models', 'Where it\'s going'],
    body: [
      { type: 'lead', text: "For most of its history, AI was the name for a promise that kept getting postponed. In the last decade that changed. The reason is prosaic: we figured out how to throw a lot of data and a lot of compute at a simple architecture and watched it generalize in ways nobody predicted." },
      { type: 'h2', text: 'The neuron, digitized' },
      { type: 'p', text: "An artificial neuron takes inputs, multiplies each by a weight, sums them, and passes the result through a nonlinear function. Stack millions in layers. Feed in an image. Adjust weights until the output matches the label. This recipe — with enough examples — does most of modern AI." },
      { type: 'h2', text: 'Transformers ate the field' },
      { type: 'p', text: "In 2017, a paper titled \"Attention Is All You Need\" proposed an architecture called the transformer. It turned out to scale almost embarrassingly well: bigger models, trained on more data, got monotonically better at nearly everything. Today\'s language and image models are all transformers at heart." },
      { type: 'quote', text: "We can only see a short distance ahead, but we can see plenty there that needs to be done.", cite: "Alan Turing, 1950" },
    ],
    resources: {
      videos: [
        { title: 'But what is a neural network?', author: '3Blue1Brown', url: 'https://www.youtube.com/watch?v=aircAruvnKk' },
        { title: 'Let\'s build GPT', author: 'Andrej Karpathy', url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY' },
        { title: 'Attention Is All You Need — explained', author: 'Yannic Kilcher', url: 'https://www.youtube.com/watch?v=iDulhoQ2pro' },
      ],
      reads: [
        { title: 'Attention Is All You Need (original paper)', source: 'arXiv', url: 'https://arxiv.org/abs/1706.03762' },
        { title: 'Deep Learning (Goodfellow, free online)', source: 'deeplearningbook.org', url: 'https://www.deeplearningbook.org/' },
      ],
    },
  },

  'programming': {
    subject: 'cs', title: 'Programming Basics', dek: 'Telling a computer exactly what to do — and the art of being exact.',
    readTime: '14 min', difficulty: 'Beginner',
    sections: ['The idea', 'Variables & control flow', 'Functions', 'Debugging'],
    body: [
      { type: 'lead', text: "A computer is a machine that does exactly what you tell it, which is both its strength and its curse. Programming is the discipline of being precise enough that a machine can do what you mean." },
    ],
    resources: {
      videos: [
        { title: 'CS50x (Harvard intro to CS)', author: 'David Malan', url: 'https://cs50.harvard.edu/x/' },
        { title: 'Automate the Boring Stuff with Python', author: 'Al Sweigart', url: 'https://automatetheboringstuff.com/' },
      ],
      reads: [
        { title: 'The Missing Semester of Your CS Education', source: 'MIT', url: 'https://missing.csail.mit.edu/' },
      ],
    },
  },

  // ============ COOKING ============
  'knife': {
    subject: 'cooking', title: 'Knife Skills', dek: 'The first and last kitchen skill — the one that never stops getting better.',
    readTime: '10 min', difficulty: 'Beginner',
    sections: ['The grip', 'The rock', 'The cuts', 'Care'],
    body: [
      { type: 'lead', text: "Before recipes, before seasoning, before heat — the knife. A dull knife is more dangerous than a sharp one: it slips. A sharp knife that you hold correctly does most of the work itself." },
      { type: 'interactive', key: 'pour-over' },
      { type: 'h2', text: 'The pinch grip' },
      { type: 'p', text: "Don\'t grip the handle like a broomstick. Pinch the blade between thumb and bent forefinger just forward of the bolster; the remaining three fingers curl around the handle. This gives you control over the edge, not just the handle." },
      { type: 'h2', text: 'The guiding hand' },
      { type: 'p', text: "The hand holding the food is a claw. Fingertips curled under, second knuckles forward, thumb tucked behind. The flat of the blade rides against the knuckles. You cannot cut what you cannot reach, and the knuckle wall is the speed limit." },
    ],
    resources: {
      videos: [
        { title: 'Basic Knife Skills', author: 'Jacques Pépin', url: 'https://www.youtube.com/watch?v=G43KCXwmmxE' },
        { title: 'How to Sharpen a Knife', author: 'Bon Appétit / Brad Leone', url: 'https://www.youtube.com/watch?v=C11AqjiWgzY' },
      ],
      reads: [
        { title: 'The Food Lab — knife skills', source: 'Serious Eats', url: 'https://www.seriouseats.com/knife-skills-how-to-use-a-chefs-knife' },
      ],
    },
  },

  'bread': {
    subject: 'baking', title: 'Bread', dek: 'Flour, water, salt, yeast, time. Four ingredients that built civilizations.',
    readTime: '14 min', difficulty: 'Intermediate',
    sections: ['The fermentation', 'Gluten', 'Method', 'Troubleshooting'],
    body: [
      { type: 'lead', text: "Bread is the oldest prepared food with a name. The same four ingredients, in the same ratios, made the loaves in Pompeii\'s ovens and the baguettes that came out of your Parisian boulangerie this morning. What varies is technique — time, temperature, shape." },
      { type: 'h2', text: 'Gluten is a mechanical problem' },
      { type: 'p', text: "Wheat has two proteins — glutenin and gliadin — that, when hydrated and agitated, form elastic networks. That network traps the CO₂ that yeast makes. No gluten, no rise. The kneading is not optional; it\'s the whole point." },
    ],
    resources: {
      videos: [
        { title: 'Beginner\'s Sourdough', author: 'Joshua Weissman', url: 'https://www.youtube.com/watch?v=sTAiDki7AQA' },
        { title: 'Bread Baking with Ken Forkish', author: 'Breadtopia', url: 'https://breadtopia.com/video-recipes/' },
      ],
      reads: [
        { title: 'Flour Water Salt Yeast', source: 'Ken Forkish (book)', url: 'https://www.kensartisan.com/fwsy' },
        { title: 'The Perfect Loaf', source: 'theperfectloaf.com', url: 'https://www.theperfectloaf.com/' },
      ],
    },
  },

  // ============ MUSIC ============
  'classical': {
    subject: 'music', title: 'The Classical Tradition', dek: 'Four centuries, four eras, one ongoing conversation.',
    readTime: '16 min', difficulty: 'Intermediate',
    sections: ['Baroque', 'Classical', 'Romantic', 'Modern'],
    body: [
      { type: 'lead', text: "What we loosely call \"classical music\" is not one style but a lineage — a conversation between composers dead and alive, each responding to the last, each adding something the form didn\'t yet know it needed." },
      { type: 'h2', text: 'Baroque: pattern and counterpoint' },
      { type: 'p', text: "Bach\'s fugues are puzzles that happen to be beautiful. The baroque ear loved pattern, symmetry, and voices weaving around each other in strict rules. Listen for the subject entering in each voice, one after another." },
      { type: 'h2', text: 'Romantic: emotion, foregrounded' },
      { type: 'p', text: "Beethoven is the hinge. Before him, the composer was a craftsman. After him, the composer was an artist whose inner life was the subject. Brahms, Mahler, Chopin — the whole nineteenth century is people trying to put bigger feelings into sound." },
    ],
    resources: {
      videos: [
        { title: 'How Beethoven\'s 5th works', author: 'Inside the Score', url: 'https://www.youtube.com/watch?v=3XyPw-aZkk8' },
        { title: 'Bach\'s Art of Fugue, explained', author: 'Inside the Score / Early Music', url: 'https://www.youtube.com/watch?v=Y-YKKUT_Qu8' },
      ],
      reads: [
        { title: 'IMSLP — free scores', source: 'imslp.org', url: 'https://imslp.org/' },
        { title: 'Western classical music timeline', source: 'Britannica', url: 'https://www.britannica.com/art/Western-music' },
      ],
    },
  },

  // ============ PHOTOGRAPHY ============
  'exposure': {
    subject: 'photography', title: 'The Exposure Triangle', dek: 'Aperture, shutter, ISO — the three dials every photograph negotiates.',
    readTime: '12 min', difficulty: 'Beginner',
    sections: ['Light is a budget', 'Aperture', 'Shutter speed', 'ISO'],
    body: [
      { type: 'lead', text: "Every photograph is a fixed amount of light, arrived at through three independent controls. Let too little in: dark. Too much: washed out. The craft is in which control you change — because each of them changes something else about the image beyond brightness." },
      { type: 'interactive', key: 'exposure-triangle' },
      { type: 'h2', text: 'The three sliders' },
      { type: 'p', text: "Aperture controls depth of field (f/1.8 = creamy background, f/16 = everything in focus). Shutter speed controls motion (1/2000 = frozen, 1/30 = blur). ISO controls noise (100 = clean, 6400 = grainy). Want a blurred background in bright sun? Open the aperture, and the shutter has to close faster to compensate." },
    ],
    resources: {
      videos: [
        { title: 'The Exposure Triangle', author: 'Peter McKinnon', url: 'https://www.youtube.com/watch?v=nHzCPhn_D-o' },
        { title: 'Photography Basics', author: 'Mango Street', url: 'https://www.youtube.com/@MangoStreet' },
      ],
      reads: [
        { title: 'Cambridge in Colour (tutorials)', source: 'cambridgeincolour.com', url: 'https://www.cambridgeincolour.com/tutorials.htm' },
      ],
    },
  },

  // ============ FINANCE ============
  'investing': {
    subject: 'finance', title: 'Investing', dek: 'Index funds, compound interest, and the surprisingly boring math of getting rich slowly.',
    readTime: '14 min', difficulty: 'Intermediate',
    sections: ['Compounding', 'Index funds', 'Risk & return', 'Common mistakes'],
    body: [
      { type: 'lead', text: "There are two ways to get rich: start with money, or start early. Compounding — earning returns on your returns — is the reason even modest monthly contributions, left alone for forty years, become life-changing sums. It feels impossibly slow, then suddenly isn\'t." },
      { type: 'interactive', key: 'compound-interest' },
      { type: 'h2', text: 'Why index funds beat active management' },
      { type: 'p', text: "The math is brutal: after fees, most actively managed funds underperform a simple index fund that just buys the whole market. Jack Bogle figured this out in 1976 and founded Vanguard. For almost all individual investors, \"buy the index, hold forever\" is the correct answer." },
    ],
    resources: {
      videos: [
        { title: 'The Little Book of Common Sense Investing (Bogle) — summary', author: 'The Plain Bagel', url: 'https://www.youtube.com/@ThePlainBagel' },
        { title: 'How to Invest (free course)', author: 'Khan Academy', url: 'https://www.khanacademy.org/college-careers-more/personal-finance' },
      ],
      reads: [
        { title: 'The Bogleheads Wiki', source: 'bogleheads.org', url: 'https://www.bogleheads.org/wiki/Main_Page' },
        { title: 'A Random Walk Down Wall Street', source: 'Burton Malkiel (book)', url: 'https://en.wikipedia.org/wiki/A_Random_Walk_Down_Wall_Street' },
      ],
    },
  },

  // ============ FIRST AID ============
  'cpr': {
    subject: 'firstaid', title: 'CPR & AED', dek: 'Thirty compressions, two breaths, a steady tempo. A skill you hope never to use.',
    readTime: '10 min', difficulty: 'Beginner',
    sections: ['Recognize', 'Compress', 'AED', 'Until help arrives'],
    body: [
      { type: 'lead', text: "Sudden cardiac arrest is almost always fatal without CPR. Every minute without compressions cuts survival by about 10%. The single most important thing an untrained person can do is push hard and fast in the center of the chest — at least 100 times a minute, at least 2 inches deep." },
      { type: 'interactive', key: 'cpr-tempo' },
      { type: 'h2', text: 'The tempo' },
      { type: 'p', text: "The Bee Gees\' \"Stayin\' Alive\" is exactly 103 beats per minute. The British Heart Foundation teaches it as the rhythm for chest compressions. Hum it and keep the pace." },
      { type: 'h2', text: 'AEDs are idiot-proof on purpose' },
      { type: 'p', text: "Public Automatic External Defibrillators are designed so that anyone, with no training, can follow the voice prompts. The device analyzes the rhythm and only shocks if it will help. You cannot hurt someone by using one." },
    ],
    resources: {
      videos: [
        { title: 'Hands-Only CPR', author: 'American Heart Association', url: 'https://www.youtube.com/watch?v=M4ACYp75mjU' },
        { title: 'How to use an AED', author: 'British Heart Foundation', url: 'https://www.youtube.com/watch?v=Pf6i4cxQCss' },
      ],
      reads: [
        { title: 'CPR resources', source: 'American Heart Association', url: 'https://cpr.heart.org/' },
        { title: 'Red Cross First Aid', source: 'redcross.org', url: 'https://www.redcross.org/take-a-class/first-aid' },
      ],
    },
  },

  // ============ CHESS ============
  'openings': {
    subject: 'chess', title: 'Chess Openings', dek: 'The first twenty moves of centuries of refinement.',
    readTime: '12 min', difficulty: 'Beginner',
    sections: ['Principles', 'Main openings', 'Traps', 'Study'],
    body: [
      { type: 'lead', text: "Three principles govern every opening: control the center, develop your pieces (knights before bishops), and get your king safe (castle). Memorize no moves. Understand these three things and most openings will play themselves." },
    ],
    resources: {
      videos: [
        { title: 'Chess Openings for Beginners', author: 'GothamChess', url: 'https://www.youtube.com/watch?v=8IlJ3v8I4Z8' },
        { title: 'Best Chess Openings', author: 'ChessNetwork', url: 'https://www.youtube.com/@ChessNetwork' },
      ],
      reads: [
        { title: 'Lichess Study — openings', source: 'lichess.org', url: 'https://lichess.org/study' },
        { title: 'Chess.com openings database', source: 'chess.com', url: 'https://www.chess.com/openings' },
      ],
    },
  },

  // ============ PHILOSOPHY ============
  'ethics': {
    subject: 'philosophy', title: 'Ethics', dek: 'How should we live? Three traditions, still arguing.',
    readTime: '14 min', difficulty: 'Beginner',
    sections: ['Virtue', 'Duty', 'Consequences', 'Modern takes'],
    body: [
      { type: 'lead', text: "Philosophers have been arguing about how to live a good life for at least 2,500 years. Three answers have endured: cultivate virtue (Aristotle), follow universalizable rules (Kant), maximize good consequences (Mill, Bentham). Each captures something the others miss." },
      { type: 'h2', text: 'The trolley problem' },
      { type: 'p', text: "A runaway trolley will kill five people. You can pull a lever to divert it onto a side track where it will kill one. Do you pull? What if, instead of a lever, you had to push one large person off a bridge? Most people say yes to the lever and no to the push — exposing that our moral intuitions are not as consistent as our stated principles." },
    ],
    resources: {
      videos: [
        { title: 'Justice (full Harvard course)', author: 'Michael Sandel', url: 'https://www.youtube.com/playlist?list=PL30C13C91CFFEFEA6' },
        { title: 'Crash Course Philosophy: Ethics', author: 'Hank Green', url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtNgK6MZucdYldNkMybYIHKR' },
      ],
      reads: [
        { title: 'Stanford Encyclopedia — Ethics', source: 'SEP', url: 'https://plato.stanford.edu/entries/ethics-virtue/' },
      ],
    },
  },

  // ============ PSYCHOLOGY ============
  'cognition': {
    subject: 'psychology', title: 'Cognition', dek: 'Attention, memory, thought — the machinery of everyday mind.',
    readTime: '14 min', difficulty: 'Beginner',
    sections: ['Attention', 'Memory', 'Thinking fast & slow', 'Biases'],
    body: [
      { type: 'lead', text: "Daniel Kahneman\'s central idea: the mind has two systems. System 1 is fast, automatic, intuitive. System 2 is slow, effortful, reasoned. System 1 runs most of your life. System 2 takes credit for it. Almost every cognitive bias you\'ve heard of — anchoring, availability, confirmation — is System 1 getting away with it." },
    ],
    resources: {
      videos: [
        { title: 'Thinking, Fast and Slow (Kahneman lecture)', author: 'Google Talks', url: 'https://www.youtube.com/watch?v=CjVQJdIrDJ0' },
        { title: 'Crash Course Psychology', author: 'Hank Green', url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6' },
      ],
      reads: [
        { title: 'Thinking, Fast and Slow', source: 'Kahneman (book)', url: 'https://en.wikipedia.org/wiki/Thinking,_Fast_and_Slow' },
      ],
    },
  },

  // ============ ECONOMICS ============
  'micro': {
    subject: 'economics', title: 'Microeconomics', dek: 'Supply, demand, prices — and why markets allocate things the way they do.',
    readTime: '14 min', difficulty: 'Beginner',
    sections: ['Scarcity', 'Markets', 'Elasticity', 'Failure modes'],
    body: [
      { type: 'lead', text: "Every economic question starts with scarcity — finite resources, infinite wants. Prices are the messenger system that lets a decentralized economy allocate those resources without anyone being in charge. When they work, they work beautifully. When they fail, the failures have names: externalities, public goods, information asymmetry, monopoly." },
    ],
    resources: {
      videos: [
        { title: 'Crash Course Economics', author: 'Adriene Hill & Jacob Clifford', url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtPNZwz5_o_5uirJ8gQXnhEO' },
        { title: 'Principles of Microeconomics', author: 'MIT OCW', url: 'https://ocw.mit.edu/courses/14-01-principles-of-microeconomics-fall-2018/' },
      ],
      reads: [
        { title: 'Marginal Revolution University', source: 'MRU.org', url: 'https://mru.org/' },
      ],
    },
  },

  // ============ PROGRAMMING / WORKING WITH AI ============
  'prompts': {
    subject: 'ai_craft', title: 'Prompting', dek: 'The new literacy — telling a language model what you actually want.',
    readTime: '10 min', difficulty: 'Beginner',
    sections: ['Clarity', 'Context', 'Constraints', 'Iteration'],
    body: [
      { type: 'lead', text: "A language model is a very smart collaborator who has amnesia and cannot read your mind. Everything it knows about your task has to fit in the prompt. Prompting well is mostly about being specific the way you\'d be specific with a new employee on their first day." },
      { type: 'h2', text: 'Role, task, constraints, examples' },
      { type: 'p', text: "Tell the model who it is (\"you are a concise copy editor\"), what to do (\"rewrite this paragraph for a technical audience\"), any constraints (\"keep it under 80 words, no em-dashes\"), and — the biggest lever — give it one or two examples of the output you want. Examples beat instructions." },
    ],
    resources: {
      videos: [
        { title: 'ChatGPT Prompt Engineering for Developers', author: 'DeepLearning.AI / Andrew Ng', url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/' },
        { title: 'Prompt engineering guide', author: 'Anthropic', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
      ],
      reads: [
        { title: 'Prompting Guide', source: 'promptingguide.ai', url: 'https://www.promptingguide.ai/' },
      ],
    },
  },

  // ============ GEOGRAPHY ============
  'climate': {
    subject: 'geography', title: 'Climate Systems', dek: 'Wind, ocean, sun — the planetary engine that sets every weather pattern you\'ve experienced.',
    readTime: '16 min', difficulty: 'Intermediate',
    sections: ['The sun', 'Wind cells', 'Ocean currents', 'Climate change'],
    body: [
      { type: 'lead', text: "The sun hits the equator nearly straight on and the poles at a glancing angle. That temperature difference is the engine. The atmosphere and the oceans try to even it out by moving heat poleward. Every cyclone, monsoon, and trade wind is part of that endless redistribution." },
    ],
    resources: {
      videos: [
        { title: 'Climate Science in a Nutshell', author: 'NASA Climate', url: 'https://climate.nasa.gov/' },
        { title: 'Why the Earth has seasons', author: 'Minute Earth', url: 'https://www.youtube.com/watch?v=DD_8Jm5pTLk' },
      ],
      reads: [
        { title: 'IPCC Reports', source: 'ipcc.ch', url: 'https://www.ipcc.ch/reports/' },
      ],
    },
  },

  // ============ WOODWORKING ============
  'mortise_tenon': {
    subject: 'woodworking', title: 'The Mortise & Tenon Joint', dek: 'Five thousand years old and still the strongest way to join two pieces of wood at a right angle.',
    readTime: '12 min', difficulty: 'Advanced',
    sections: ['The joint', 'Cutting it', 'Variations', 'Practice'],
    body: [
      { type: 'lead', text: "Archaeologists have found mortise-and-tenon joints in Egyptian tombs, Chinese temples, and European timber-frame barns. The pinned or wedged version will outlast the wood itself. A glued tenon is stronger than the wood around it — if the joint fails, the board breaks first." },
    ],
    resources: {
      videos: [
        { title: 'How to cut a mortise and tenon', author: 'Paul Sellers', url: 'https://www.youtube.com/watch?v=7mKfO4a1k4M' },
        { title: 'Hand-cut M&T', author: 'Rob Cosman', url: 'https://www.youtube.com/@RobCosman' },
      ],
      reads: [
        { title: 'The Essential Woodworker (Robert Wearing)', source: 'Lost Art Press', url: 'https://lostartpress.com/' },
      ],
    },
  },

  // ============ PUBLIC SPEAKING ============
  'structure': {
    subject: 'publicspeaking', title: 'Talk Structure', dek: 'Open strong, close stronger. Repeat the thesis. The rest is details.',
    readTime: '10 min', difficulty: 'Beginner',
    sections: ['Hook', 'Three acts', 'The close', 'Delivery'],
    body: [
      { type: 'lead', text: "A talk is a story, not an essay. Essays can be read back. A talk has to land in real time, with an audience whose attention you\'re borrowing and have to keep earning. The structure that works is almost always the same: hook, thesis, three points, close." },
    ],
    resources: {
      videos: [
        { title: 'TED\'s secret to great public speaking', author: 'Chris Anderson (TED)', url: 'https://www.ted.com/talks/chris_anderson_ted_s_secret_to_great_public_speaking' },
        { title: 'How to speak', author: 'Patrick Winston (MIT)', url: 'https://www.youtube.com/watch?v=Unzc731iCUY' },
      ],
      reads: [
        { title: 'TED Talks: The Official TED Guide', source: 'Chris Anderson (book)', url: 'https://www.ted.com/read/ted-talks' },
      ],
    },
  },

  // ============ COFFEE ============
  'brewing': {
    subject: 'coffee', title: 'Brewing Methods', dek: 'Grind, water, time, ratio — four dials, infinite coffees.',
    readTime: '12 min', difficulty: 'Intermediate',
    sections: ['Extraction', 'Pour-over', 'Espresso', 'Immersion'],
    body: [
      { type: 'lead', text: "Brewing is a ratio and an extraction. Sixty grams of coffee to a liter of water is the standard \"Golden Ratio\" the SCA teaches. What changes with method is time and turbulence — espresso extracts in 25 seconds under 9 bars of pressure; cold brew takes 18 hours without any pressure at all." },
    ],
    resources: {
      videos: [
        { title: 'Hoffmann\'s V60 Technique', author: 'James Hoffmann', url: 'https://www.youtube.com/watch?v=AI4ynXzkSQo' },
        { title: 'The World Atlas of Coffee', author: 'James Hoffmann', url: 'https://www.youtube.com/@jameshoffmann' },
      ],
      reads: [
        { title: 'The Coffee Compass', source: 'Barista Hustle', url: 'https://www.baristahustle.com/' },
      ],
    },
  },

  // ============ CHEESEMAKING ============
  'fresh_cheese': {
    subject: 'cheesemaking', title: 'Fresh Cheeses', dek: 'Milk plus acid plus heat — and you have ricotta, paneer, queso fresco before dinner.',
    readTime: '10 min', difficulty: 'Beginner',
    sections: ['The chemistry', 'Ricotta in 30 min', 'Paneer', 'Mozzarella'],
    body: [
      { type: 'lead', text: "Heat a gallon of whole milk to about 180°F. Stir in three tablespoons of lemon juice or white vinegar. Wait ten minutes. The milk splits into white curds and translucent whey. Scoop the curds into cheesecloth. Salt. You have just made ricotta, which has been made exactly this way for two thousand years." },
    ],
    resources: {
      videos: [
        { title: 'Homemade Ricotta', author: 'Alton Brown', url: 'https://www.youtube.com/watch?v=0yVBx6O8Rwc' },
        { title: 'Make Mozzarella at home', author: 'Pro Home Cooks', url: 'https://www.youtube.com/watch?v=mH6Y1s7OwFY' },
      ],
      reads: [
        { title: 'The Art of Natural Cheesemaking', source: 'David Asher (book)', url: 'https://www.chelseagreen.com/product/the-art-of-natural-cheesemaking/' },
      ],
    },
  },

  // ============ RELIGION ============
  'abrahamic': {
    subject: 'religion', title: 'The Abrahamic Religions', dek: 'Judaism, Christianity, Islam — three traditions, one family tree.',
    readTime: '16 min', difficulty: 'Intermediate',
    sections: ['Shared roots', 'Each tradition', 'Schisms', 'Today'],
    body: [
      { type: 'lead', text: "All three trace their lineage to Abraham — a Bronze Age patriarch who, according to the stories, left Ur in Mesopotamia on a divine command. From that shared root grew Judaism (covenant with one God, Torah), Christianity (Jesus as messiah, New Testament), and Islam (Muhammad as the final prophet, Quran). Together they count roughly 4 billion adherents." },
    ],
    resources: {
      videos: [
        { title: 'Religion for Breakfast', author: 'Andrew Henry', url: 'https://www.youtube.com/@ReligionForBreakfast' },
        { title: 'The Story of the Jews', author: 'Simon Schama (BBC)', url: 'https://www.youtube.com/watch?v=aY9Yg14w8bI' },
      ],
      reads: [
        { title: 'A History of God', source: 'Karen Armstrong (book)', url: 'https://en.wikipedia.org/wiki/A_History_of_God' },
      ],
    },
  },

  // ============ YOGA ============
  'sun_sal': {
    subject: 'yoga', title: 'Sun Salutations', dek: 'Twelve postures, one flow — the moving prayer of modern yoga.',
    readTime: '8 min', difficulty: 'Beginner',
    sections: ['The sequence', 'Breath', 'Variations', 'Practice'],
    body: [
      { type: 'lead', text: "Surya Namaskar — the Sun Salutation — is the backbone of most modern yoga practices. Twelve postures flowed through with the breath, five or ten rounds, and your body is warm, your focus gathered, and you are reminded why you rolled out the mat." },
    ],
    resources: {
      videos: [
        { title: 'Sun Salutation A (Ashtanga)', author: 'Yoga With Adriene', url: 'https://www.youtube.com/watch?v=pA9RABXpLKY' },
        { title: '30 Day Yoga Journey', author: 'Yoga With Adriene', url: 'https://www.youtube.com/@yogawithadriene' },
      ],
      reads: [
        { title: 'Light on Yoga', source: 'B.K.S. Iyengar', url: 'https://en.wikipedia.org/wiki/Light_on_Yoga' },
      ],
    },
  },

  // ============ SURVIVAL ============
  'priorities_survival': {
    subject: 'survival', title: 'The Rule of Threes', dek: 'Three minutes without air. Three hours without shelter. Three days without water. Three weeks without food.',
    readTime: '8 min', difficulty: 'Beginner',
    sections: ['Air', 'Shelter', 'Water', 'Food'],
    body: [
      { type: 'lead', text: "Wilderness survival instructors teach the rule as a priority list. In a bad situation, don\'t start with fire-by-friction or building a rabbit snare. Start with: am I breathing? Can I stay warm? Do I have water? Food is last. Most people who die in the wild die of exposure, not hunger." },
    ],
    resources: {
      videos: [
        { title: 'Survival Priorities', author: 'MCQ Bushcraft', url: 'https://www.youtube.com/@MCQBushcraft' },
        { title: 'How to Start a Fire', author: 'Primitive Technology', url: 'https://www.youtube.com/@primitivetechnology9550' },
      ],
      reads: [
        { title: 'Bushcraft 101', source: 'Dave Canterbury (book)', url: 'https://en.wikipedia.org/wiki/Dave_Canterbury' },
      ],
    },
  },

  // ============ GEOLOGY ============
  'plates': {
    subject: 'geology', title: 'Plate Tectonics', dek: 'The Earth\'s surface is broken into pieces, and they move — which explains almost everything.',
    readTime: '14 min', difficulty: 'Beginner',
    sections: ['The idea', 'Evidence', 'Mechanisms', 'Consequences'],
    body: [
      { type: 'lead', text: "Alfred Wegener suggested in 1912 that the continents had once been one mass — Pangaea — and had drifted apart. Geologists laughed at him for fifty years. Then, in the 1960s, the evidence of sea-floor spreading and symmetric magnetic stripes on either side of mid-ocean ridges forced them to admit he was right. Plate tectonics is now the unifying theory of Earth science, playing the role evolution plays in biology." },
    ],
    resources: {
      videos: [
        { title: 'Plate Tectonics explained', author: 'MinuteEarth', url: 'https://www.youtube.com/watch?v=kwfNGatxUJI' },
        { title: 'How the Earth Was Made', author: 'History Channel', url: 'https://www.youtube.com/watch?v=gUWqOsRIi4U' },
      ],
      reads: [
        { title: 'Plate tectonics', source: 'USGS', url: 'https://www.usgs.gov/programs/earthquake-hazards/plate-tectonics' },
      ],
    },
  },
});
