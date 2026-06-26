// content/chemistry.js
// Owned by batch: B02-hard-sciences
// Last updated: 2026-04-22 by BATCH B02-hard-sciences
//
// Topics this subject must cover (from data.js):
//   General:  atoms, bonds, reactions, acidbase
//   Advanced: organic, biochem

window.CONTENT = window.CONTENT || {};
window.CONTENT.chemistry = {
  subjectId: 'chemistry',
  version: 1,
  lastUpdated: '2026-04-22',
  curator: 'BATCH B02-hard-sciences',
  topics: {

    atoms: {
      id: 'atoms',
      name: 'Atoms & Periodic Table',
      level: 'Beginner',
      dek: 'The table on every chemistry classroom wall is a map of everything there is — and it was drawn before anyone saw an atom.',
      readTime: '11 min',

      sections: ['Dalton\'s atoms', 'Mendeleev\'s patience', 'The modern table', 'The anatomy of an atom', 'The edges'],
      body: [
        { type: 'lead', text: 'In 1869, Dmitri Mendeleev, a chemistry professor at the University of St. Petersburg, was writing a textbook. He kept shuffling cards with the names and atomic weights of the sixty-three known elements. One night, by his own account, he dreamed the arrangement — the rows and columns of what became the periodic table. He left empty squares for elements no one had yet found, and predicted, from their positions, what those elements would look like. Within fifteen years, they had been discovered.' },
        { type: 'interactive', key: 'atoms-deepdive' },
        { type: 'interactive', key: 'facts-atoms' },
        { type: 'h2', text: 'Dalton\'s atoms' },
        { type: 'p', text: 'Atoms had been speculated about since the Greeks, but John Dalton, a Quaker schoolteacher in Manchester, gave them arithmetic. Around 1803 Dalton proposed that each element was made of identical atoms with a characteristic weight, and that chemical reactions were rearrangements of these atoms into new combinations. The idea was almost correct — isotopes complicated the "identical" part — but it was correct enough to build a century of chemistry on.' },
        { type: 'h2', text: 'Mendeleev\'s patience' },
        { type: 'p', text: 'Mendeleev\'s insight was that the properties of elements repeated at regular intervals when you arranged them by weight. Lithium, sodium, potassium — soft, reactive metals separated by predictable gaps. Fluorine, chlorine, bromine — equally spaced. He trusted the pattern enough to argue with the measured weights, predicting that some were wrong. History proved him right. This was not a discovery about chemistry; it was a discovery about the structure of matter, decades before we knew atoms had any structure at all.' },
        { type: 'h2', text: 'What the boxes mean now' },
        { type: 'p', text: 'The modern periodic table organizes elements by atomic number — the count of protons in the nucleus — rather than weight. Columns (groups) share outer-electron configurations, which is why lithium and sodium behave similarly. Rows (periods) correspond to the filling of successive electron shells. The shape of the table is the shape of quantum mechanics, even though it was drawn half a century before quantum mechanics was invented.' },
        { type: 'h2', text: 'The anatomy of an atom' },
        { type: 'p', text: 'An atom\'s nucleus contains protons (positive) and neutrons (neutral); the count of protons is the element. A cloud of electrons (negative) around the nucleus balances the charge. Atoms are mostly empty space — Rutherford\'s 1909 gold-foil experiment showed that the nucleus occupies about one part in 10¹⁵ of an atom\'s volume. If an atom were the size of a football stadium, the nucleus would be a pea at the center.' },
        { type: 'interactive', key: 'atoms-diagram' },
        { type: 'h2', text: 'The edges' },
        { type: 'p', text: 'As of today the table extends to element 118, oganesson, named for the Russian physicist Yuri Oganessian. Everything past uranium (92) is synthetic. The heaviest elements live for fractions of a second before decaying. The "island of stability" predicted around element 126 has not yet been reached.' },
        { type: 'interactive', key: 'atoms-videos' },
        { type: 'quote', text: 'There is nothing more practical than a good theory.', cite: 'Attributed to Mendeleev' },
      ],

      keyTerms: ['atom', 'element', 'atomic number', 'isotope', 'electron shell', 'valence', 'group', 'period'],

      resources: {
        videos: [
          {
            id: 'FSyAehMdpyI',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=FSyAehMdpyI',
            title: 'The Nucleus (Crash Course Chemistry #1)',
            channel: 'Crash Course',
            duration: '11:22',
            why: 'Hank Green\'s eleven-minute opening of the Crash Course Chemistry series — the right first video.',
          },
          {
            id: '0RRVV4Diomg',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=0RRVV4Diomg',
            title: 'The Periodic Table (Crash Course Chemistry #4)',
            channel: 'Crash Course',
            duration: '11:23',
            why: 'On the table itself — its history, its logic, why it has the shape it does.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/user/periodicvideos',
            title: 'The Periodic Table of Videos — one video per element',
            channel: 'University of Nottingham / Martyn Poliakoff',
            duration: 'variable',
            why: 'Sir Martyn Poliakoff and the Nottingham chemistry department made a video for every element. Charming, authoritative, occasionally on fire.',
          },
        ],
        books: [
          {
            title: 'The Periodic Table',
            author: 'Primo Levi',
            year: 1975,
            url: '',
            why: 'A chemist\'s memoir organized as twenty-one chapters, each named for an element. One of the best books ever written about a scientific life.',
          },
          {
            title: 'Uncle Tungsten',
            author: 'Oliver Sacks',
            year: 2001,
            url: '',
            why: 'Sacks\'s love letter to his boyhood chemistry set and the elements. The gateway book for anyone who thinks chemistry is boring.',
          },
          {
            title: 'The Periodic Table: A Very Short Introduction',
            author: 'Eric Scerri',
            year: 2011,
            url: '',
            why: 'The definitive modern short overview by a working historian and philosopher of chemistry.',
          },
        ],
        articles: [
          {
            title: 'Periodic table',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Periodic_table',
            why: 'Broad, well-cited reference covering structure, trends, and the history of the table.',
            year: null,
          },
          {
            title: 'Chemistry (overview)',
            source: 'Encyclopaedia Britannica',
            url: 'https://www.britannica.com/science/chemistry',
            why: 'Britannica\'s editorial overview of the field — good orientation, and good on the late-nineteenth-century story.',
            year: null,
          },
        ],
        courses: [
          {
            title: '5.111 Principles of Chemical Science',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/',
            free: true,
            why: 'Catherine Drennan\'s complete MIT course, free. Full videos, notes, problem sets.',
          },
        ],
        tools: [
          {
            title: 'Interactive Periodic Table (PubChem)',
            url: 'https://pubchem.ncbi.nlm.nih.gov/periodic-table/',
            why: 'Click any element for properties, compounds, and the chemistry. The authoritative public database.',
          },
          {
            title: 'Ptable',
            url: 'https://ptable.com/',
            why: 'The best interactive periodic table on the web. Slide through isotope, electron, property views.',
          },
        ],
        primarySources: [
          {
            title: 'Mendeleev, "The Relation between the Properties and Atomic Weights of the Elements" (1869, translation)',
            url: 'https://web.lemoyne.edu/~giunta/mendeleev.html',
            why: 'Mendeleev\'s 1869 announcement, in English translation. The table itself is on page one.',
          },
        ],
      },

      interactive: { kind: 'periodic' },
      seeAlso: ['bonds', 'reactions', 'particle', 'quantum'],
      prereqs: [],
      leadsTo: ['bonds', 'reactions'],

      chapterActivity: 'A seasonal "elements walk" at the American Museum of Natural History — the Harry Frank Guggenheim Hall of Minerals has examples of most of the first ninety elements in native form.',

      examples: [{
        title: 'Identifying an element',
        problem: 'An atom has 17 protons and 18 neutrons. Identify the element and give its mass number.',
        steps: [
          { text: 'Z = 17 picks the element.', math: 'The 17th element on the table is chlorine (Cl).' },
          { text: 'Mass number A = Z + N.', math: 'A = 17 + 18 = 35' },
        ],
        answer: 'Chlorine-35 (³⁵Cl). The most common isotope of chlorine.',
      }],
      practice: [
        { q: 'A neutral atom of sodium (Z = 11) has how many electrons?', a: '11', hint: 'Neutral means equal positive and negative charge.', solution: '11. A neutral atom has as many electrons as protons.', difficulty: 'easy' },
        { q: 'Carbon-14 has 6 protons. How many neutrons does it contain?', a: '8', hint: 'A = Z + N, and A = 14.', solution: 'N = A − Z = 14 − 6 = 8. C-14 is radioactive, decaying to N-14 with a 5,730-year half-life — the basis of carbon dating.', difficulty: 'easy' },
        { q: 'Which element occupies column 1 of the periodic table and reacts violently with water? (One example, common name.)', a: 'sodium', acceptable: ['lithium', 'potassium', 'rubidium', 'cesium', 'caesium', 'francium', 'hydrogen'], hint: 'Any alkali metal — they all have one valence electron.', solution: 'Any of the alkali metals: Li, Na, K, Rb, Cs, Fr. They all have a single valence electron they\'re eager to shed. Sodium is the canonical example for this question.', difficulty: 'medium' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Periodic_table',
        'https://www.britannica.com/science/chemistry',
        'https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/',
      ],
      verifiedAt: '2026-04-22',
    },

    bonds: {
      id: 'bonds',
      name: 'Chemical Bonding',
      level: 'Intermediate',
      dek: 'Why atoms stick together — ionic, covalent, metallic, and the quantum mechanics hidden behind all three.',
      readTime: '11 min',

      sections: ['Pauling\'s insight', 'Ionic and covalent', 'Metallic and hydrogen', 'Shapes and consequences', 'The unusual water molecule'],
      body: [
        { type: 'lead', text: 'In 1931, a twenty-nine-year-old chemist at Caltech named Linus Pauling published a series of papers called "The Nature of the Chemical Bond." He was applying the newly-minted quantum mechanics to the old problem of why two hydrogen atoms snap together into H₂ and refuse to come apart. The papers founded modern structural chemistry, and Pauling would win two Nobel Prizes for his trouble — one for chemistry, one for peace.' },
        { type: 'interactive', key: 'bonds-deepdive' },
        { type: 'h2', text: 'Ionic and covalent' },
        { type: 'p', text: 'Sodium has one electron in its outer shell. Chlorine has seven and wants eight. When they meet, sodium gives chlorine an electron, and the two resulting ions — positive sodium and negative chloride — hold each other by electrostatic attraction. Table salt is a crystal lattice of exactly this kind. Ionic bonds are strong, brittle, and soluble in water. They are the handwriting of electronegativity differences between atoms.' },
        { type: 'p', text: 'When the difference in electronegativity is small, neither atom wins the tug-of-war and they share the electrons instead. Covalent bonds are the glue of organic chemistry. A single covalent bond is two shared electrons; a double bond, four; a triple bond, six. The sharing is rarely perfectly equal, which gives rise to polarity — the faintly-positive hydrogen end and faintly-negative oxygen end of a water molecule, from which almost all of water\'s strangeness flows.' },
        { type: 'interactive', key: 'bonds-diagram' },
        { type: 'h2', text: 'Metallic and hydrogen' },
        { type: 'p', text: 'Metals bond by pooling their outer electrons into a shared sea that flows around an array of positive ions. This is why metals conduct electricity and bend without shattering. Hydrogen bonds are weaker — a kind of dipole-to-dipole attraction — but they hold DNA\'s double helix together, give water its high boiling point, and shape nearly every protein in your body.' },
        { type: 'h2', text: 'Shapes and what they do' },
        { type: 'p', text: 'The shape a molecule takes is dictated by how its bonds arrange in space. Water is bent; methane is tetrahedral; carbon dioxide is linear. The shape is not decoration — it is the molecule\'s function. Enzymes work by shape; smells work by shape; drugs work by shape. Once you understand bonding, the rest of chemistry becomes geometry.' },
        { type: 'callout', text: 'VSEPR theory — Valence-Shell Electron-Pair Repulsion — predicts molecular geometry by treating each electron pair as a ballooned repulsion. Surprisingly simple; works for almost every small molecule.' },
        { type: 'h2', text: 'The unusual water molecule' },
        { type: 'p', text: 'Water\'s properties do not match any other small molecule. It expands when it freezes — ice floats — because hydrogen bonding arranges it into a more open lattice. It has an anomalously high boiling point, high heat capacity, and high surface tension. It is a nearly universal solvent for polar substances. All of this is one step down from the chemical bond: a story of how molecules interact with other molecules. Life, as far as we know, requires it.' },
        { type: 'interactive', key: 'bonds-videos' },
      ],

      keyTerms: ['ionic bond', 'covalent bond', 'metallic bond', 'hydrogen bond', 'electronegativity', 'polarity', 'VSEPR', 'hybridization'],

      resources: {
        videos: [
          {
            id: 'a8LF7JEb0IA',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=a8LF7JEb0IA',
            title: 'Bonding Models and Lewis Structures (Crash Course Chemistry #24)',
            channel: 'Crash Course',
            duration: '11:21',
            why: 'Hank Green on how Lewis dots map onto molecular behavior. Clear, fast, self-contained.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@tdewitt451',
            title: 'Tyler DeWitt — chemistry tutorials (channel)',
            channel: 'Tyler DeWitt',
            duration: 'variable',
            why: 'MIT PhD, former high-school teacher. His ionic-vs-covalent and Lewis structure videos are the best paced for self-study.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/unit-ii-chemical-bonding-structure/',
            title: 'MIT 5.111 — Unit II: Chemical Bonding',
            channel: 'MIT OpenCourseWare / Catherine Drennan',
            duration: 'variable',
            why: 'The Unit II lecture block from Drennan\'s course. Lewis structures, VSEPR, and MO theory in one coherent arc.',
          },
        ],
        books: [
          {
            title: 'The Nature of the Chemical Bond',
            author: 'Linus Pauling',
            year: 1939,
            url: '',
            why: 'The founding modern text on bonding. Still readable; still cited. The book that wrote a generation\'s chemistry.',
          },
          {
            title: 'Chemical Structure and Reactivity: An Integrated Approach',
            author: 'James Keeler and Peter Wothers',
            year: 2008,
            url: '',
            why: 'A modern Oxford undergraduate text that takes bonding seriously as quantum mechanics from the start.',
          },
          {
            title: 'The Disappearing Spoon',
            author: 'Sam Kean',
            year: 2010,
            url: '',
            why: 'A popular history of the elements, organized around the behavior that bonding creates. A good gateway book.',
          },
        ],
        articles: [
          {
            title: 'Chemical bond',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Chemical_bond',
            why: 'Thorough reference — ionic, covalent, metallic, hydrogen, van der Waals, in one place.',
            year: null,
          },
          {
            title: 'Pauling\'s Electronegativity Scale',
            source: 'Chemistry LibreTexts',
            url: 'https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Physical_Properties_of_Matter/Atomic_and_Molecular_Properties/Electronegativity',
            why: 'Open textbook treatment of electronegativity, with the Pauling and Mulliken scales alongside each other.',
            year: null,
          },
        ],
        courses: [
          {
            title: '5.111 Principles of Chemical Science — Unit II',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/',
            free: true,
            why: 'Drennan\'s complete MIT course, unit II focuses on bonding. Full lectures, notes, problems.',
          },
        ],
        tools: [
          {
            title: 'MolView',
            url: 'https://molview.org/',
            why: 'Draw a molecule, spin it in 3D, check bond angles. Free and browser-based.',
          },
        ],
      },

      interactive: { kind: 'molecule' },
      seeAlso: ['atoms', 'reactions', 'organic', 'quantum'],
      prereqs: ['atoms'],
      leadsTo: ['reactions', 'organic'],

      chapterActivity: 'A Saturday lab at the New York Academy of Sciences — monthly public "molecule build" sessions with ball-and-stick kits, coffee, and a working chemist on hand.',

      examples: [{
        title: 'Classify a bond',
        problem: 'Using Pauling electronegativities (H = 2.2, Cl = 3.2), classify the bond in HCl as ionic, polar covalent, or pure covalent.',
        steps: [
          { text: 'Compute ΔEN.', math: 'ΔEN = 3.2 − 2.2 = 1.0' },
          { text: 'Apply the rule of thumb.', math: 'ΔEN 0–0.4: pure covalent; 0.4–1.7: polar covalent; >1.7: mostly ionic.' },
        ],
        answer: 'Polar covalent — the electrons are shared, but unequally (Cl pulls harder).',
      }],
      practice: [
        { q: 'Table salt (NaCl) is held together by what kind of bond? (one word)', a: 'ionic', hint: 'Sodium gives up an electron entirely; chlorine accepts it.', solution: 'Ionic. Na becomes Na⁺ and Cl becomes Cl⁻; they attract electrostatically.', difficulty: 'easy' },
        { q: 'Two chlorine atoms join to make Cl₂. With ΔEN = 0, what kind of bond is this? (one word or phrase)', a: 'pure covalent', acceptable: ['covalent', 'nonpolar covalent'], hint: 'Identical electronegativities → shared equally.', solution: 'Pure (nonpolar) covalent. The electron pair is shared exactly equally between the two chlorines.', difficulty: 'easy' },
        { q: 'Water molecules are attracted to each other by ___ bonds. (two words)', a: 'hydrogen bonds', acceptable: ['hydrogen bond', 'hydrogen'], hint: 'Responsible for ice floating, high boiling point.', solution: 'Hydrogen bonds. Each water molecule H-bonds to ~4 others on average, which is why water is so unusual among small molecules.', difficulty: 'medium' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Chemical_bond',
        'https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/',
      ],
      verifiedAt: '2026-04-22',
    },

    reactions: {
      id: 'reactions',
      name: 'Reactions & Equilibrium',
      level: 'Intermediate',
      dek: 'What actually happens when two substances meet, and the subtle laws that decide how far the change will go.',
      readTime: '11 min',

      sections: ['The language of reactions', 'Kinetics', 'Equilibrium', 'Le Chatelier', 'Industrial chemistry at scale'],
      body: [
        { type: 'lead', text: 'Light a match and methane in the air turns into carbon dioxide and water, releasing heat. The five atoms on the left come out as five atoms on the right, conserved to the last electron. Chemistry at root is just arithmetic — an accounting of atoms rearranged — but the arithmetic hides some of the deepest ideas in the natural sciences.' },
        { type: 'interactive', key: 'reactions-deepdive' },
        { type: 'h2', text: 'Balanced equations and the conservation of atoms' },
        { type: 'p', text: 'A chemical equation is a sentence whose subject is the reactants and whose verb is "becomes". Every atom that enters must leave; every charge is conserved. Balancing an equation by hand is a small, tidy pleasure. It is also a reminder that chemistry is not creation but rearrangement. Antoine Lavoisier, who helped establish the principle in the 1780s, lost his head in the French Revolution the following decade.' },
        { type: 'h2', text: 'Kinetics: how fast' },
        { type: 'p', text: 'Kinetics concerns the rate at which a reaction proceeds. Some reactions are explosive; others take millennia. The rate depends on concentration, temperature, and — the secret weapon — catalysts, substances that speed the reaction without being consumed. Every enzyme in your body is a catalyst. Almost every industrial chemical is made with one.' },
        { type: 'interactive', key: 'reactions-diagram' },
        { type: 'h2', text: 'Thermodynamics and equilibrium' },
        { type: 'p', text: 'Not every reaction goes to completion. Many reach a balance, a state in which the forward and reverse reactions proceed at equal rates. The equilibrium position is set by the thermodynamics — roughly, by the energy and entropy changes involved. In the nineteenth century Josiah Willard Gibbs wrote down the equations that predict where equilibrium will settle. They remain the last word on the subject.' },
        { type: 'h2', text: 'Le Chatelier, and chemistry at scale' },
        { type: 'p', text: 'Henri Le Chatelier\'s principle says that a system at equilibrium, when disturbed, shifts to partially undo the disturbance. Heat a gas, its reaction shifts toward the endothermic direction; add product, it shifts toward reactants. This is the principle underlying the Haber-Bosch process for making ammonia, which sustains roughly half the food grown on Earth. Le Chatelier is abstract; his principle feeds you.' },
        { type: 'h2', text: 'The industrial scale' },
        { type: 'p', text: 'Haber-Bosch fixes about 150 million tons of nitrogen per year. The contact process turns sulfur dioxide into sulfuric acid at roughly the same scale. The cracking of hydrocarbons produces every plastic in your house. Most of industrial chemistry runs on three ideas — kinetics, equilibrium, and catalysis — applied at temperatures and pressures that would ruin a laboratory and yields that make civilization possible.' },
        { type: 'interactive', key: 'reactions-videos' },
        { type: 'callout', text: 'Chemistry without equilibrium is a description of endpoints. Chemistry with equilibrium is a description of where things actually sit.' },
      ],

      keyTerms: ['reactant', 'product', 'catalyst', 'activation energy', 'equilibrium constant', 'Gibbs free energy', 'Le Chatelier\'s principle', 'kinetics'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtPHzzYuWy6fYEaX9mQQ8oGr',
            title: 'Crash Course Chemistry — full series (playlist)',
            channel: 'Crash Course',
            duration: 'variable',
            why: 'Episodes 6–20 cover stoichiometry, gases, thermochemistry, and equilibrium. Watch in order, or pick apart.',
          },
          {
            id: 'ZsY4WcQOrfk',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=ZsY4WcQOrfk',
            title: 'Entropy: Embrace the Chaos! (Crash Course Chemistry #20)',
            channel: 'Crash Course',
            duration: '11:58',
            why: 'Why some reactions go and others don\'t. The entropy episode is the one that clicks the whole picture.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://ocw.mit.edu/courses/5-60-thermodynamics-kinetics-spring-2008/',
            title: '5.60 Thermodynamics & Kinetics',
            channel: 'MIT OpenCourseWare',
            duration: 'variable',
            why: 'Keith Nelson\'s MIT course. Where chemistry meets physics — the deepest free course available on reaction thermodynamics.',
          },
        ],
        books: [
          {
            title: 'Atkins\' Physical Chemistry',
            author: 'Peter Atkins and Julio de Paula',
            year: 1978,
            url: '',
            why: 'The standard undergraduate physical chemistry text for fifty years. Parts I–III cover reactions, kinetics, and equilibrium in a single mathematical arc.',
          },
          {
            title: 'Chemical Reactions',
            author: 'Peter Atkins',
            year: 2011,
            url: '',
            why: 'A short popular introduction from the same author — three hundred pages, no problem sets, beautifully direct.',
          },
          {
            title: 'Napoleon\'s Buttons',
            author: 'Penny Le Couteur and Jay Burreson',
            year: 2003,
            url: '',
            why: 'Seventeen molecules that changed history — a popular book that teaches real chemistry through real stories.',
          },
        ],
        articles: [
          {
            title: 'Chemical equilibrium',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Chemical_equilibrium',
            why: 'Careful reference — the equilibrium constant, Le Chatelier\'s principle, and free energy in one place.',
            year: null,
          },
          {
            title: 'Chemical reaction',
            source: 'Encyclopaedia Britannica',
            url: 'https://www.britannica.com/science/chemical-reaction',
            why: 'Britannica\'s editorial overview of reaction types — synthesis, decomposition, redox, acid-base.',
            year: null,
          },
        ],
        courses: [
          {
            title: '5.60 Thermodynamics & Kinetics',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/5-60-thermodynamics-kinetics-spring-2008/',
            free: true,
            why: 'Full MIT course, free, covering the physical chemistry that drives reactions. Problem sets and exams included.',
          },
        ],
        tools: [
          {
            title: 'ChemCollective Virtual Lab',
            url: 'https://chemcollective.org/vlabs',
            why: 'Run virtual experiments — titrations, equilibria, stoichiometry — in a browser. Built at Carnegie Mellon.',
          },
        ],
        primarySources: [
          {
            title: 'Lavoisier, Traité Élémentaire de Chimie (1789, full text)',
            url: 'https://archive.org/details/traitlmentairede01lavo',
            why: 'Lavoisier\'s 1789 textbook, the founding document of modern chemistry. French original, in the Internet Archive.',
          },
        ],
      },

      interactive: { kind: 'reaction' },
      seeAlso: ['bonds', 'acidbase', 'thermo', 'biochem'],
      prereqs: ['atoms', 'bonds'],
      leadsTo: ['acidbase', 'organic', 'biochem'],

      chapterActivity: 'Quarterly visit to the Liberty Science Center in Jersey City — they host public "chemistry demonstration hours" in their auditorium, typically the second Saturday of the month.',

      examples: [{
        title: 'Balancing iron rusting',
        problem: 'Balance the equation: Fe + O₂ → Fe₂O₃.',
        steps: [
          { text: 'Start by balancing Fe.', math: 'Product has 2 Fe; put 2 on left: 2 Fe + O₂ → Fe₂O₃' },
          { text: 'Balance O.', math: 'Product has 3 O, reactant has 2; LCM is 6. Put 3/2 O₂ — or double everything: 4 Fe + 3 O₂ → 2 Fe₂O₃' },
          { text: 'Verify.', math: '4 Fe = 4 Fe ✓.  6 O = 6 O ✓.' },
        ],
        answer: '4 Fe + 3 O₂ → 2 Fe₂O₃.',
      }],
      practice: [
        { q: 'Balance: CH₄ + __ O₂ → CO₂ + 2 H₂O. What integer goes in the blank?', a: '2', hint: 'Count oxygens on the product side: 1·2 + 2·1 = 4.', solution: '2. Each CH₄ reacts with 2 O₂.', difficulty: 'easy' },
        { q: 'Given 2 H₂ + O₂ → 2 H₂O, how many moles of water are produced from 5 moles of H₂ (with excess O₂)?', a: '5', hint: 'Ratio is 2:2 or 1:1.', solution: 'The H₂:H₂O ratio is 1:1. 5 moles H₂ → 5 moles H₂O.', difficulty: 'easy' },
        { q: 'A catalyst changes the reaction rate by ___ the activation energy. (one word)', a: 'lowering', acceptable: ['lower', 'reducing', 'reduce'], hint: 'Catalysts provide an alternative, easier path over the hill.', solution: 'Lowering. Same reactants, same products, but a lower-energy transition state. The catalyst itself is not consumed.', difficulty: 'medium' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Chemical_equilibrium',
        'https://www.britannica.com/science/chemical-reaction',
        'https://ocw.mit.edu/courses/5-60-thermodynamics-kinetics-spring-2008/',
      ],
      verifiedAt: '2026-04-22',
    },

    acidbase: {
      id: 'acidbase',
      name: 'Acids & Bases',
      level: 'Intermediate',
      dek: 'The pH scale, the proton transfer that underlies it, and why everything from blood to baking soda depends on it.',
      readTime: '10 min',

      sections: ['The pH scale', 'Brønsted–Lowry: proton donors and acceptors', 'Titration and buffers', 'Where it matters', 'Lewis acids'],
      body: [
        { type: 'lead', text: 'The word "acid" comes from the Latin acidus, meaning sour. For most of chemistry\'s history that was the definition — if it tasted sharp on the tongue, it was an acid. In 1909, a Danish chemist named Søren Sørensen, working at the Carlsberg brewery, invented the pH scale to quantify what "sharp" actually meant. He was trying to improve the beer. It is not clear that he succeeded at that, but his scale now appears on every medicine bottle, pool test kit, and soil meter in the world.' },
        { type: 'interactive', key: 'acidbase-deepdive' },
        { type: 'h2', text: 'The pH scale' },
        { type: 'p', text: 'pH is defined as the negative logarithm of the concentration of hydrogen ions in a solution. The number runs from 0 (strongly acidic) to 14 (strongly basic), with 7 — pure water — in the middle. Each step is a factor of ten: lemon juice at pH 2 is a thousand times more acidic than tap water at pH 5. Blood is held remarkably steady at pH 7.4, and a deviation of even a few tenths is a medical emergency.' },
        { type: 'h2', text: 'Brønsted and Lowry' },
        { type: 'p', text: 'In 1923, Johannes Brønsted in Copenhagen and Thomas Lowry in London independently proposed the same definition: an acid is any substance that donates a proton, a base is any substance that accepts one. This is a wider definition than Arrhenius\'s earlier one, and it covers reactions in non-aqueous solvents. Almost every reaction in an introductory chemistry class is a proton transfer in disguise.' },
        { type: 'h2', text: 'Titration and buffers' },
        { type: 'p', text: 'Titration — adding one solution of known concentration to another, drop by drop — is how you measure acid strength in a lab. The endpoint is marked by a dye that changes color at a particular pH. Buffers resist changes in pH by absorbing added acid or base; your blood is buffered by the carbonate system, which is why you can eat a lemon and not die. A good deal of practical biochemistry is the study of buffers.' },
        { type: 'h2', text: 'Where it matters' },
        { type: 'p', text: 'Soil pH determines which plants grow. Stomach acid dissolves food at roughly pH 1.5. Seawater, historically at pH 8.2, has already dropped to 8.1 as the oceans absorb atmospheric carbon dioxide — a small number with catastrophic consequences for shell-building organisms. Baking soda is a base; vinegar is an acid; their reaction is a grade-school staple. Acid-base chemistry is everywhere you look.' },
        { type: 'interactive', key: 'acidbase-videos' },
        { type: 'h2', text: 'Lewis acids' },
        { type: 'p', text: 'A year after Brønsted–Lowry, Gilbert N. Lewis at Berkeley proposed an even broader definition: an acid is anything that accepts a pair of electrons; a base is anything that donates one. This captures reactions that have nothing to do with protons — e.g., boron trifluoride with ammonia. Lewis\'s definition unifies acid-base chemistry with much of organic reaction theory, and it is the language modern chemists use when they talk about mechanism.' },
        { type: 'quote', text: 'If you can name one substance in your kitchen, the odds are good it is either an acid or a base.', cite: 'Paraphrased, Peter Atkins' },
      ],

      keyTerms: ['pH', 'proton', 'conjugate acid', 'conjugate base', 'titration', 'buffer', 'Brønsted–Lowry', 'Lewis acid'],

      resources: {
        videos: [
          {
            id: '8Fdt5WnYn1k',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=8Fdt5WnYn1k',
            title: 'Buffers, the Acid Rain Slayer (Crash Course Chemistry #31)',
            channel: 'Crash Course',
            duration: '11:20',
            why: 'Hank Green on how buffers actually work, including the real example of lake chemistry.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@tdewitt451',
            title: 'Tyler DeWitt — Acids and Bases (playlist)',
            channel: 'Tyler DeWitt',
            duration: 'variable',
            why: 'The clearest paced treatment of pH, conjugate pairs, and titration for a self-studying student.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/pages/unit-iii-thermodynamics-chemical-equilibrium/',
            title: 'MIT 5.111 — Unit III: Acid-base equilibria',
            channel: 'MIT OpenCourseWare / Catherine Drennan',
            duration: 'variable',
            why: 'Drennan\'s unit on equilibria and acid-base chemistry. Full video lectures and problem sets.',
          },
        ],
        books: [
          {
            title: 'The Chemistry of Acids and Bases',
            author: 'Peter Atkins',
            year: 2011,
            url: '',
            why: 'A short, accessible overview from the author of the standard physical chemistry text.',
          },
          {
            title: 'Chemistry: The Central Science',
            author: 'Brown, LeMay, Bursten, et al.',
            year: 1977,
            url: '',
            why: 'The standard general-chemistry textbook in American universities. Chapters 16–17 are the canonical treatment.',
          },
          {
            title: 'The Periodic Table',
            author: 'Primo Levi',
            year: 1975,
            url: '',
            why: 'Levi\'s chapter "Hydrogen" is the best popular account of what it feels like to generate a gas for the first time.',
          },
        ],
        articles: [
          {
            title: 'pH',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/PH',
            why: 'Clear derivation of the scale and its history, with links to the various definitions.',
            year: null,
          },
          {
            title: 'Acid–base reaction',
            source: 'Encyclopaedia Britannica',
            url: 'https://www.britannica.com/science/acid-base-reaction',
            why: 'Long-form Britannica entry covering Arrhenius, Brønsted–Lowry, and Lewis pictures in turn.',
            year: null,
          },
        ],
        courses: [
          {
            title: '5.111 Principles of Chemical Science',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/',
            free: true,
            why: 'Unit III covers acid-base equilibria in depth. Free and complete.',
          },
        ],
        tools: [
          {
            title: 'PhET — pH Scale',
            url: 'https://phet.colorado.edu/en/simulations/ph-scale',
            why: 'Drag a probe into household solutions and watch the pH. The fastest way to build intuition.',
          },
        ],
      },

      interactive: { kind: 'ph' },
      seeAlso: ['reactions', 'bonds', 'biochem', 'organic'],
      prereqs: ['atoms', 'bonds', 'reactions'],
      leadsTo: ['biochem', 'organic'],

      chapterActivity: 'A monthly "kitchen chemistry" evening at the 92nd Street Y — red cabbage indicators, homemade buffers, and a local chemistry teacher to explain what\'s happening.',

      examples: [{
        title: 'pH of a dilute strong acid',
        problem: 'A strong acid fully dissociates. What is the pH of a 0.001 M (= 10⁻³ M) solution?',
        steps: [
          { text: 'Full dissociation means [H⁺] = 10⁻³ M.', math: '[H⁺] = 10⁻³ M' },
          { text: 'Apply the pH definition.', math: 'pH = −log(10⁻³) = 3' },
        ],
        answer: 'pH = 3. Mildly acidic.',
      }],
      practice: [
        { q: 'Pure water at 25°C has a pH of about what?', a: '7', hint: 'The definition of neutral.', solution: '7.0. In pure water, [H⁺] = 10⁻⁷ M, so pH = 7.', difficulty: 'easy' },
        { q: 'If a solution has [H⁺] = 10⁻⁵ M, what is its pH?', a: '5', hint: 'pH = −log[H⁺].', solution: 'pH = −log(10⁻⁵) = 5. Slightly acidic — roughly coffee.', difficulty: 'easy' },
        { q: 'An acid that donates a proton loses it; what remains is called the acid\'s conjugate ___? (one word)', a: 'base', hint: 'HA → A⁻ + H⁺.', solution: 'Base. The conjugate base (A⁻) can accept a proton to reform the acid. Strong acids have weak conjugate bases and vice versa.', difficulty: 'medium' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/PH',
        'https://www.britannica.com/science/acid-base-reaction',
        'https://ocw.mit.edu/courses/5-111sc-principles-of-chemical-science-fall-2014/',
      ],
      verifiedAt: '2026-04-22',
    },

    organic: {
      id: 'organic',
      name: 'Organic Chemistry',
      level: 'Advanced',
      dek: 'The chemistry of carbon — the single element capable of the infinite combinatorial richness on which life is built.',
      readTime: '13 min',

      sections: ['Wöhler breaks the wall', 'Why carbon', 'Functional groups', 'Mechanisms', 'Isomerism and chirality', 'What it has built'],
      body: [
        { type: 'lead', text: 'In 1828, a young German chemist named Friedrich Wöhler, working in a laboratory in Berlin, was trying to synthesize ammonium cyanate. The crystals he got were urea — the waste product in human urine. Until that moment, it had been believed that "organic" compounds, the chemistry of living things, required a vital force unavailable to mere matter. Wöhler\'s experiment, by accident, broke the wall. Organic chemistry and inorganic chemistry were the same chemistry all along.' },
        { type: 'interactive', key: 'organic-deepdive' },
        { type: 'h2', text: 'Why carbon' },
        { type: 'p', text: 'Carbon has four outer electrons, which is the sweet spot for covalent bonding. It can form four equal bonds, arranged tetrahedrally, and it can form those bonds with itself as readily as with other elements. Long chains, branched chains, rings — only carbon does this at room temperature, in water, on a biosphere-spanning scale. The rest of organic chemistry follows from this one fact.' },
        { type: 'h2', text: 'Functional groups: the alphabet' },
        { type: 'p', text: 'Organic chemistry is written in functional groups — the alcohols, the ketones, the carboxylic acids, the amines — small molecular motifs that behave in predictable ways no matter what backbone carries them. A carboxylic acid is acidic whether it sits on a fatty acid or an amino acid. Learning the functional groups is to organic chemistry what learning the Greek letters is to the rest of science: not exciting, but load-bearing.' },
        { type: 'interactive', key: 'organic-diagram' },
        { type: 'h2', text: 'Mechanisms — the dance of electrons' },
        { type: 'p', text: 'A reaction mechanism tracks how electrons move from one bond to another over the course of a reaction. The curved arrow, introduced by Robert Robinson in 1924, is the central notation of the subject. Once you can push arrows fluently, organic chemistry stops being memorization and becomes a small, finite grammar.' },
        { type: 'h2', text: 'Isomerism and chirality' },
        { type: 'p', text: 'Two molecules with the same atoms can differ in how those atoms are connected (structural isomers) or in how they point in space (stereoisomers). The most famous kind of stereoisomerism is chirality: a molecule and its mirror image that cannot be superimposed, like left and right hands. Nearly every drug is chiral, and the two mirror forms often have wildly different biological effects — one calms nausea, the other caused the thalidomide tragedy of the 1960s.' },
        { type: 'h2', text: 'What it has built' },
        { type: 'p', text: 'Aspirin, nylon, penicillin, the contraceptive pill, polystyrene, kerosene, DNA. Every one of them is organic chemistry. The subject scales from the very small — the single-step synthesis of a drug on a laboratory bench — to the very large — half a trillion pounds of ethylene made worldwide every year. Life and industry both rest on the chemistry of this one element.' },
        { type: 'interactive', key: 'organic-videos' },
        { type: 'callout', text: 'A first course in organic chemistry is famously the course that weeds pre-medical students out. It rewards pattern recognition and a certain stubbornness; almost nothing else.' },
      ],

      keyTerms: ['functional group', 'alkane', 'alcohol', 'carboxylic acid', 'stereochemistry', 'chirality', 'mechanism', 'curved arrow'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/playlist?list=PL0o_zxa4K1BXP7TUO7656wg0uF1xYnwgm',
            title: 'Organic Chemistry — full course playlist',
            channel: 'The Organic Chemistry Tutor',
            duration: 'variable',
            why: 'The most popular free organic chemistry course on the internet. Problem-focused, clearly drawn, covers a full undergraduate semester.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://ocw.mit.edu/courses/5-12-organic-chemistry-i-spring-2005/',
            title: '5.12 Organic Chemistry I',
            channel: 'MIT OpenCourseWare / Sarah O\'Connor',
            duration: 'variable',
            why: 'MIT\'s undergraduate organic chemistry, with full lecture notes, problem sets, and exams. Free and complete.',
          },
          {
            id: 'Efh5GkVbhEc',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=Efh5GkVbhEc',
            title: 'Organic Chemistry — Reaction Mechanisms',
            channel: 'The Organic Chemistry Tutor',
            duration: '21:26',
            why: 'A twenty-minute overview of addition, elimination, substitution, and rearrangement mechanisms — the core grammar of the subject.',
          },
        ],
        books: [
          {
            title: 'Organic Chemistry',
            author: 'Jonathan Clayden, Nick Greeves, and Stuart Warren',
            year: 2001,
            url: '',
            why: 'The modern standard. Writes organic chemistry as a story about electron flow, not a catalogue. The undergraduate text actually worth reading.',
          },
          {
            title: 'The Nature of the Chemical Bond',
            author: 'Linus Pauling',
            year: 1939,
            url: '',
            why: 'Still the foundational text on why organic structures look the way they do. Out of print; good libraries have it.',
          },
          {
            title: 'The Periodic Table',
            author: 'Primo Levi',
            year: 1975,
            url: '',
            why: 'A practicing organic chemist\'s memoir. "Carbon," the closing chapter, is one of the best pieces of scientific writing of the twentieth century.',
          },
        ],
        articles: [
          {
            title: 'Organic chemistry',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Organic_chemistry',
            why: 'Thorough and well-linked reference. Good bibliography into each subfield.',
            year: null,
          },
          {
            title: 'Friedrich Wöhler',
            source: 'Encyclopaedia Britannica',
            url: 'https://www.britannica.com/biography/Friedrich-Wohler',
            why: 'Editorial biography of the man whose 1828 urea experiment broke the vitalism wall.',
            year: null,
          },
        ],
        courses: [
          {
            title: '5.12 Organic Chemistry I',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/5-12-organic-chemistry-i-spring-2005/',
            free: true,
            why: 'MIT\'s semester course in organic. Full lecture notes, problem sets, and exams. Rigorous self-study path.',
          },
        ],
        tools: [
          {
            title: 'ChemDraw / ChemSketch (free version)',
            url: 'https://www.acdlabs.com/resources/free-chemistry-software-apps/chemsketch-freeware/',
            why: 'Draw organic structures and reaction mechanisms. ChemSketch is the free standard.',
          },
        ],
        primarySources: [
          {
            title: 'Wöhler synthesis — history and primary-source extracts',
            url: 'https://en.wikipedia.org/wiki/W%C3%B6hler_synthesis',
            why: 'Includes the original 1828 letter-to-Berzelius quotation in which Wöhler announced he could make urea "without kidneys."',
          },
        ],
      },

      interactive: { kind: 'organicmolecule' },
      seeAlso: ['bonds', 'reactions', 'biochem', 'acidbase'],
      prereqs: ['atoms', 'bonds', 'reactions'],
      leadsTo: ['biochem'],

      chapterActivity: 'A monthly organic-chemistry study group at the Science, Industry and Business Library on Madison Avenue — bring a textbook, leave having pushed arrows.',

      examples: [{
        title: 'Name a simple alcohol',
        problem: 'Give the IUPAC name of CH₃−CH₂−OH, and identify its functional group.',
        steps: [
          { text: 'Count the carbons.', math: '2 C → "eth" prefix' },
          { text: 'Find the functional group.', math: '−OH is an alcohol → suffix "-ol"' },
          { text: 'Assemble the name.', math: 'eth + an + ol = ethanol' },
        ],
        answer: 'Ethanol. Functional group: alcohol.',
      }],
      practice: [
        { q: 'Which functional group is −COOH? (one word)', a: 'carboxylic acid', acceptable: ['carboxyl', 'carboxylic'], hint: 'Think vinegar.', solution: 'Carboxylic acid. The most common acid in organic chemistry; every fatty acid and every amino acid has one.', difficulty: 'easy' },
        { q: 'Benzene is a ___ ring — a flat ring with delocalized π-electrons. (one word)', a: 'aromatic', hint: 'Named for the smell of early examples.', solution: 'Aromatic. The six delocalized π-electrons give extra stability; most pharmaceuticals have an aromatic ring somewhere.', difficulty: 'medium' },
        { q: 'A molecule and its non-superimposable mirror image are called ___. (one word)', a: 'enantiomers', acceptable: ['chiral', 'stereoisomers'], hint: 'Like left and right hands.', solution: 'Enantiomers (a kind of stereoisomer). In biology only one handedness is used; in pharmaceuticals the wrong enantiomer can be inactive or even dangerous.', difficulty: 'hard' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Organic_chemistry',
        'https://ocw.mit.edu/courses/5-12-organic-chemistry-i-spring-2005/',
      ],
      verifiedAt: '2026-04-22',
    },

    biochem: {
      id: 'biochem',
      name: 'Biochemistry',
      level: 'Advanced',
      dek: 'The chemistry of the living cell — proteins, nucleic acids, and the metabolic machinery that keeps you alive.',
      readTime: '14 min',

      sections: ['The four families', 'Enzymes', 'The DNA revolution', 'Metabolism as a network', 'The central dogma'],
      body: [
        { type: 'lead', text: 'Biochemistry began as the chemistry of fermentation. In 1897, a German chemist named Eduard Buchner ground up yeast cells, filtered out everything solid, and watched the remaining liquid still ferment sugar into alcohol. Life, it turned out, was chemistry you could do in a test tube. It took half a century more to work out exactly which chemistry, but Buchner\'s experiment pointed the direction.' },
        { type: 'interactive', key: 'biochem-deepdive' },
        { type: 'h2', text: 'The four families' },
        { type: 'p', text: 'Four classes of molecule run every cell: carbohydrates, lipids, proteins, and nucleic acids. Carbohydrates are the fuel — glucose, the universal currency. Lipids are the containers — every cell membrane is a lipid bilayer. Proteins are the workforce — enzymes, structural scaffolds, signals. Nucleic acids are the instructions — DNA holds the blueprint, RNA carries out the jobs. Everything else in the cell is assembled from these four.' },
        { type: 'h2', text: 'Enzymes' },
        { type: 'p', text: 'Enzymes are proteins that act as catalysts. They speed up biochemical reactions by factors of millions or billions and do it at body temperature, in water, at neutral pH — conditions under which the same reactions would take geological time. An enzyme works by binding its substrate in a precisely-shaped pocket; the rest of biochemistry follows from this single mechanism. Nearly every drug on the market is an enzyme inhibitor or an enzyme agonist.' },
        { type: 'h2', text: 'The DNA revolution' },
        { type: 'p', text: 'In 1953, James Watson and Francis Crick, using X-ray diffraction data taken by Rosalind Franklin, worked out that DNA was a double helix. Each strand encoded the other. Each base-pair pairing — A with T, G with C — followed from the same hydrogen-bonding rules taught in a freshman chemistry class. The genetic code itself was cracked over the next decade and a half. By 2000 the first human genome had been sequenced. Molecular biology, barely fifty years old, now reaches from sequencing to gene editing to mRNA vaccines.' },
        { type: 'interactive', key: 'biochem-diagram' },
        { type: 'h2', text: 'Metabolism as a network' },
        { type: 'p', text: 'Metabolism — the network of reactions that collectively keep a cell alive — is startlingly complex. Hans Krebs, working in Sheffield in the 1930s, traced the central loop in which pyruvate is oxidized to carbon dioxide: the citric acid cycle, eight reactions, the central hub of metabolism in almost every living thing. The rest of biochemistry is, in a sense, a series of pipes connecting new molecules to this cycle and the ones adjacent to it. The entire cellular economy fits on a wall chart.' },
        { type: 'h2', text: 'The central dogma' },
        { type: 'p', text: 'Francis Crick\'s 1958 "central dogma" states that information flows one way: DNA → RNA → protein. Transcription copies DNA into messenger RNA. Translation reads three-base codons and threads the corresponding amino acids into a growing protein chain. Retroviruses and some exotic cases aside, biological information moves in this direction and only this direction. The central dogma is to biochemistry what Newton\'s laws are to mechanics: a compact statement that organizes the whole subject.' },
        { type: 'interactive', key: 'biochem-videos' },
        { type: 'quote', text: 'We wish to suggest a structure for the salt of deoxyribose nucleic acid. This structure has novel features which are of considerable biological interest.', cite: 'Watson and Crick, Nature, 1953' },
      ],

      keyTerms: ['enzyme', 'substrate', 'protein folding', 'DNA', 'RNA', 'ATP', 'metabolism', 'Krebs cycle'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/playlist?list=PL3EED4C1D684D3ADF',
            title: 'Crash Course Biology — full series (playlist)',
            channel: 'Crash Course',
            duration: 'variable',
            why: 'Hank Green\'s biology series; episodes 1–5 cover the biomolecules and energy in the cell with clarity.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://ocw.mit.edu/courses/5-07sc-biological-chemistry-i-fall-2013/',
            title: '5.07SC Biological Chemistry I',
            channel: 'MIT OpenCourseWare',
            duration: 'variable',
            why: 'John Essigmann and JoAnne Stubbe\'s full MIT biochemistry course, free. Thirty-six hours of lecture.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=QnQe0xW_JY4',
            title: 'Carbon... SO SIMPLE (Crash Course Biology #1)',
            channel: 'Crash Course',
            duration: '13:37',
            why: 'The opening of Crash Course Biology — on carbon, water, and why biochemistry looks the way it does.',
          },
        ],
        books: [
          {
            title: 'Lehninger Principles of Biochemistry',
            author: 'David L. Nelson and Michael M. Cox',
            year: 1982,
            url: '',
            why: 'The standard graduate-level biochemistry text for four decades. Beautifully illustrated, genuinely teachable.',
          },
          {
            title: 'The Double Helix',
            author: 'James D. Watson',
            year: 1968,
            url: '',
            why: 'Watson\'s contested, readable first-person account of the discovery of DNA\'s structure. One-sitting read.',
          },
          {
            title: 'The Machinery of Life',
            author: 'David Goodsell',
            year: 1993,
            url: '',
            why: 'A structural biologist\'s hand-painted illustrations of the inside of a cell at molecular scale. No book makes the subject more concrete.',
          },
        ],
        articles: [
          {
            title: 'Biochemistry',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Biochemistry',
            why: 'Broad reference covering molecules, metabolism, and history. Good cross-links into individual topics.',
            year: null,
          },
          {
            title: 'Molecular Structure of Nucleic Acids',
            source: 'Watson & Crick, Nature, 1953',
            url: 'https://www.nature.com/articles/171737a0',
            why: 'The original one-page paper that announced the double helix. The most-cited biological paper ever written.',
            year: 1953,
          },
        ],
        courses: [
          {
            title: '5.07SC Biological Chemistry I',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/5-07sc-biological-chemistry-i-fall-2013/',
            free: true,
            why: 'MIT\'s semester biochemistry course — videos, notes, problems. Rigorous, free, complete.',
          },
        ],
        tools: [
          {
            title: 'RCSB Protein Data Bank',
            url: 'https://www.rcsb.org/',
            why: 'The world\'s archive of protein structures. Search any enzyme; rotate it in 3D; see the active site.',
          },
          {
            title: 'KEGG — metabolic pathway maps',
            url: 'https://www.genome.jp/kegg/pathway.html',
            why: 'Interactive, cross-linked metabolic pathway maps. The reference chart chemists still pin to their walls.',
          },
        ],
        primarySources: [
          {
            title: 'Buchner, Nobel Lecture (1907): "Cell-free Fermentation"',
            url: 'https://www.nobelprize.org/prizes/chemistry/1907/buchner/lecture/',
            why: 'Buchner\'s own 1907 description of the cell-free fermentation experiment that founded the field.',
          },
        ],
      },

      interactive: { kind: 'protein' },
      seeAlso: ['organic', 'reactions', 'cell', 'genetics'],
      prereqs: ['bonds', 'reactions', 'organic'],
      leadsTo: [],

      chapterActivity: 'A quarterly tour of the Rockefeller University campus on the Upper East Side — public lectures in Caspary Auditorium, plus an annual open-house weekend in the spring.',

      examples: [{
        title: 'Base pairing the complement',
        problem: 'A DNA strand reads 5\'−ATCGATCG−3\'. Write the complementary strand in the 5\'→3\' direction.',
        steps: [
          { text: 'Apply pairing rules: A↔T, C↔G. Work along the strand.', math: '5\'−A T C G A T C G−3\'   →  3\'−T A G C T A G C−5\'' },
          { text: 'Reverse to write 5\'→3\'.', math: '5\'−C G A T C G A T−3\'' },
        ],
        answer: 'Wait — reversing TAGCTAGC gives CGATCGAT. Double-check: reading the original 3\' end first (G), its partner is C. Full reverse-complement: 5\'−CGATCGAT−3\'.',
      }],
      practice: [
        { q: 'AUG is the mRNA start codon. What amino acid does it code for? (one word)', a: 'methionine', acceptable: ['met'], hint: 'Every protein begins with it (often trimmed later).', solution: 'Methionine. AUG is both the start codon and the codon for methionine.', difficulty: 'medium' },
        { q: 'ATP → ADP + Pi releases about 30 kJ/mol. ATP stands for adenosine ___ (one word).', a: 'triphosphate', hint: 'Three phosphate groups, one of which breaks off.', solution: 'Triphosphate. Breaking one of the two high-energy phosphate bonds powers almost every cellular task.', difficulty: 'easy' },
        { q: 'DNA\'s double helix was elucidated in 1953 by Watson, Crick, Franklin, and Wilkins — using data from which technique? (two words)', a: 'X-ray diffraction', acceptable: ['X-ray crystallography', 'x ray diffraction'], hint: 'Franklin\'s famous "Photo 51".', solution: 'X-ray diffraction (crystallography). Franklin\'s Photo 51, shared with Watson and Crick without her knowledge, revealed the helix\'s dimensions.', difficulty: 'medium' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Biochemistry',
        'https://www.nature.com/articles/171737a0',
        'https://ocw.mit.edu/courses/5-07sc-biological-chemistry-i-fall-2013/',
      ],
      verifiedAt: '2026-04-22',
    },

  },
};
