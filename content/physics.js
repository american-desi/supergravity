// content/physics.js
// Owned by batch: B02-hard-sciences
// Last updated: 2026-04-22 by BATCH B02-hard-sciences
//
// Topics this subject must cover (from data.js):
//   Classical: mechanics, em, thermo, waves
//   Modern:    quantum, relativity, particle, cosmology

window.CONTENT = window.CONTENT || {};
window.CONTENT.physics = {
  subjectId: 'physics',
  version: 1,
  lastUpdated: '2026-04-22',
  curator: 'BATCH B02-hard-sciences',
  topics: {

    mechanics: {
      id: 'mechanics',
      name: 'Classical Mechanics',
      level: 'Intermediate',
      dek: 'Newton\'s three laws, and two centuries of consequences — the physics of falling apples and orbiting planets.',
      readTime: '12 min',

      sections: ['A plague year at Woolsthorpe', 'The three laws', 'Conservation laws', 'The deeper formulation', 'The Principia today'],
      body: [
        { type: 'lead', text: 'In the plague year of 1666, Isaac Newton left Cambridge for his mother\'s farm in Lincolnshire. In the garden there was an apple tree. He was twenty-three. By the time he returned to the university he had invented the calculus, worked out the optics of the prism, and begun to see that the force that pulled the apple was the same force that held the Moon.' },
        { type: 'interactive', key: 'mechanics-deepdive' },
        { type: 'interactive', key: 'newton-1666' },
        { type: 'h2', text: 'The three laws' },
        { type: 'p', text: 'Newton\'s Principia, published in 1687, opens with three deceptively simple statements. An object in motion stays in motion unless acted on. The force on a body equals its mass times its acceleration. For every action there is an equal and opposite reaction. Together these three sentences — and the mathematics Newton built around them — described the motion of everything from cannonballs to comets, and they held as the last word on the subject for over two hundred years.' },
        { type: 'p', text: 'Newton\'s most breathtaking move came at the end of Book III: the same law of gravity that pulls an apple to the ground, he argued, also holds the Moon in its orbit. Book III works out the equation quantitatively, using contemporary measurements of the Moon\'s distance and period. The numbers agreed. A thought experiment — a cannon at the top of a high mountain firing a ball so fast it never comes down — made the picture concrete.' },
        { type: 'interactive', key: 'mechanics-diagram' },
        { type: 'h2', text: 'Conservation laws' },
        { type: 'p', text: 'Beneath the three laws lies something subtler: quantities that do not change. Energy is conserved. Momentum is conserved. Angular momentum is conserved. A figure skater pulls her arms in and spins faster, not because her muscles push her around but because her angular momentum cannot go anywhere else. Conservation laws turn out to be the real skeleton of physics — they survive the transition to relativity and quantum mechanics, while the three laws themselves do not.' },
        { type: 'callout', text: 'Noether\'s theorem (1915) ties each conservation law to a symmetry of nature: energy conservation to time-translation, momentum to space-translation, angular momentum to rotations. An invariance in, a conservation law out.' },
        { type: 'h2', text: 'Lagrange and Hamilton' },
        { type: 'p', text: 'A century after Newton, Joseph-Louis Lagrange showed that the same mechanics could be rewritten in a form that never mentioned force at all. Instead of pushing and pulling, you define an energy function — the Lagrangian — and watch the system take the path that makes a certain quantity stationary. William Rowan Hamilton went further still. The Hamiltonian and Lagrangian reformulations look like mathematical housekeeping at first, then you realize that quantum mechanics grows naturally out of them and Newtonian force does not. The new language was the right one all along.' },
        { type: 'h2', text: 'The Principia today' },
        { type: 'p', text: 'For objects larger than an atom and slower than light, classical mechanics remains exact enough to land spacecraft on comets. Every bridge, every airplane, every rifle shot is designed with Newton\'s equations. The subject is old but not finished — chaos theory, nonlinear dynamics, and molecular simulation all live within it, and fields like celestial mechanics still turn up surprises three centuries after Newton closed his notebook.' },
        { type: 'interactive', key: 'mechanics-videos' },
        { type: 'quote', text: 'If I have seen further, it is by standing on the shoulders of giants.', cite: 'Isaac Newton, 1675' },
      ],

      keyTerms: ['force', 'inertia', 'momentum', 'kinetic energy', 'conservation law', 'Lagrangian', 'reference frame'],

      resources: {
        videos: [
          {
            id: null,
            source: 'other',
            url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/',
            title: '8.01 Classical Mechanics — full course',
            channel: 'MIT OpenCourseWare',
            duration: 'variable',
            why: 'Walter Lewin\'s famous course, re-recorded. Free videos, notes, and problem sets from an actual MIT undergrad class.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/playlist?list=PL09HhnlAMGuoh-m56T8zm5yH6oG-_Ufi5',
            title: 'Classical Mechanics — lecture collection',
            channel: 'Stanford / Leonard Susskind',
            duration: 'variable',
            why: 'The first course in Susskind\'s Theoretical Minimum. Chalk-and-talk, demanding, the real thing at a civilian pace.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.feynmanlectures.caltech.edu/messenger.html',
            title: 'The Character of Physical Law (Messenger Lectures, 1964)',
            channel: 'Richard Feynman / Cornell',
            duration: '~7 hrs',
            why: 'Feynman at Cornell, on film. Lecture 3 — "The Great Conservation Principles" — is the best hour on the subject ever recorded.',
          },
        ],
        books: [
          {
            title: 'The Principia: Mathematical Principles of Natural Philosophy',
            author: 'Isaac Newton',
            year: 1687,
            url: 'https://archive.org/details/newtonspmathema00newtrich',
            why: 'The book that started it all. Readable in Cohen\'s modern translation; terrifying in Latin.',
          },
          {
            title: 'The Feynman Lectures on Physics, Vol. I',
            author: 'Richard Feynman',
            year: 1963,
            url: 'https://www.feynmanlectures.caltech.edu/I_toc.html',
            why: 'Free online. Chapters 7–12 cover classical mechanics with the clearest physical intuition ever written down.',
          },
          {
            title: 'Classical Mechanics',
            author: 'John R. Taylor',
            year: 2005,
            url: '',
            why: 'The modern standard undergraduate text. Lagrangians arrive in Chapter 7 and the world opens up.',
          },
        ],
        articles: [
          {
            title: 'Classical mechanics',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Classical_mechanics',
            why: 'Broad, well-linked reference — good for the relation of Newtonian, Lagrangian, and Hamiltonian formulations.',
            year: null,
          },
          {
            title: 'Newton\'s Philosophy',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/newton-philosophy/',
            why: 'The ideas behind the Principia, and the debate with Leibniz and Descartes.',
            year: null,
          },
        ],
        courses: [
          {
            title: '8.01 Classical Mechanics',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/',
            free: true,
            why: 'Complete MIT undergraduate course — lectures, problem sets, exams. No prerequisites past calculus.',
          },
          {
            title: 'The Theoretical Minimum: Classical Mechanics',
            provider: 'Stanford / Susskind',
            url: 'https://theoreticalminimum.com/courses/classical-mechanics/2011/fall',
            free: true,
            why: 'For adults who want the real thing. Starts with the principle of least action and treats Newton as a special case.',
          },
        ],
        tools: [
          {
            title: 'PhET Simulations',
            url: 'https://phet.colorado.edu/en/simulations/category/physics/motion',
            why: 'University of Colorado\'s interactive physics simulations. Free and browser-based.',
          },
        ],
        primarySources: [
          {
            title: 'Philosophiæ Naturalis Principia Mathematica (1687 facsimile)',
            url: 'https://www.gutenberg.org/ebooks/28233',
            why: 'Gutenberg facsimile of the Principia. Latin, but the diagrams and the famous preface are legible.',
          },
        ],
      },

      interactive: { kind: 'pendulum' },
      seeAlso: ['em', 'relativity', 'calc1', 'diffeq'],
      prereqs: ['calc1', 'algebra', 'trig'],
      leadsTo: ['em', 'thermo', 'relativity'],

      chapterActivity: 'A monthly "old physics" meetup at the Museum of Mathematics on East 26th Street — pendulums, inclined planes, and a pitcher of water.',

      examples: [
        {
          title: 'Free fall from a cliff',
          problem: 'A stone is dropped from rest off a 45-meter cliff. Using g = 10 m/s², when does it hit the ground, and how fast is it moving at impact?',
          steps: [
            { text: 'Start from the equation of motion for constant acceleration from rest.', math: 'x(t) = ½·g·t²' },
            { text: 'Solve for t when x = 45 m.', math: '45 = ½·10·t²  →  t² = 9  →  t = 3 s' },
            { text: 'Impact speed comes from v(t) = g·t.', math: 'v = 10·3 = 30 m/s' },
          ],
          answer: 't = 3 s, v = 30 m/s',
        },
        {
          title: 'Collision of two billiard balls',
          problem: 'A 0.2-kg ball moving at 3 m/s strikes an identical stationary ball and they stick. What is their common speed afterward? (Conservation of momentum; frictionless table.)',
          steps: [
            { text: 'Write total momentum before.', math: 'p = (0.2)(3) + (0.2)(0) = 0.6 kg·m/s' },
            { text: 'After collision: total mass 0.4 kg at speed v.', math: '0.4·v = 0.6  →  v = 1.5 m/s' },
          ],
          answer: '1.5 m/s — half the original, because the moving mass doubled.',
        },
      ],
      practice: [
        { q: 'A 2-kg block is pushed with 10 N on a frictionless surface. What is its acceleration, in m/s²?', a: '5', acceptable: ['5 m/s^2', '5.0'], hint: 'F = ma, rearranged.', solution: 'a = F/m = 10/2 = 5 m/s². Every second, the block gains 5 m/s of velocity.', difficulty: 'easy' },
        { q: 'A car moving at 20 m/s brakes to a stop in 4 seconds. What is the magnitude of its deceleration, in m/s²?', a: '5', acceptable: ['5.0', '-5'], hint: 'Δv = a·t, solve for a.', solution: '|a| = Δv/t = 20/4 = 5 m/s². The minus sign indicates deceleration.', difficulty: 'easy' },
        { q: 'Two balls collide head-on: 1 kg at +2 m/s and 1 kg at −2 m/s. They stick together. What is their final speed, in m/s?', a: '0', acceptable: ['zero'], hint: 'Total momentum before = total momentum after.', solution: 'p_before = (1)(2) + (1)(−2) = 0. So p_after = 0, meaning v = 0. The two balls stop dead.', difficulty: 'medium' },
      ],
      subtopics: [
        {
          id: 'mech-kinematics',
          name: 'Kinematics — describing motion',
          level: 'Beginner', readTime: '6 min',
          summary: 'Position, velocity, acceleration. The three quantities for tracking where an object is and where it\'s going.',
          body: [
            { type: 'p', text: 'Kinematics answers a single question in words: where will this be at time t? Three quantities answer it — position (x), velocity (v, the rate at which x changes), and acceleration (a, the rate at which v changes). For constant acceleration, they are linked by x(t) = x₀ + v₀·t + ½·a·t².' },
            { type: 'p', text: 'The equation above is perhaps the most used formula in all of physics. Memorize it. It handles projectile motion, free fall, braking distance, and anything else where acceleration is constant.' },
          ],
          examples: [{
            title: 'How far does a car travel in 3 seconds?',
            problem: 'A car starts from rest and accelerates at 2 m/s². How far does it travel in 3 seconds?',
            steps: [
              { text: 'Apply x = x₀ + v₀·t + ½·a·t², with x₀ = v₀ = 0.', math: 'x = ½·a·t²' },
              { text: 'Plug in.', math: 'x = ½·(2)·(3²) = 9 m' },
            ],
            answer: '9 meters.',
          }],
          practice: [
            { q: 'An object falls from rest. How far has it dropped after 2 seconds? Use g = 10 m/s². Answer in meters.', a: '20', hint: 'x = ½·g·t²', solution: 'x = ½·10·4 = 20 m.', difficulty: 'easy' },
            { q: 'A ball thrown straight up at 20 m/s takes how many seconds to reach its peak? Use g = 10 m/s².', a: '2', hint: 'At the peak, v = 0. Solve v = v₀ − g·t = 0.', solution: 't = v₀/g = 20/10 = 2 s.', difficulty: 'easy' },
          ],
          keyTerms: ['position', 'velocity', 'acceleration', 'equation of motion'],
        },
        {
          id: 'mech-dynamics',
          name: 'Dynamics — why things move',
          level: 'Intermediate', readTime: '6 min',
          summary: 'Newton\'s three laws, culminating in F = ma. The cause of motion is force.',
          body: [
            { type: 'p', text: 'Where kinematics describes motion, dynamics explains it. Newton\'s first law: an object continues in its state of motion unless a net force acts. Second: net force equals mass times acceleration (F = ma). Third: every action has an equal and opposite reaction.' },
            { type: 'p', text: 'The second law is the workhorse. Given the forces on an object and its mass, you can compute its acceleration and, via kinematics, its future position and velocity. Every problem in introductory mechanics reduces to this pair of steps.' },
          ],
          examples: [{
            title: 'Elevator scale reading',
            problem: 'A 70-kg person stands on a bathroom scale in an elevator accelerating upward at 2 m/s². What does the scale read (in newtons)?',
            steps: [
              { text: 'The scale reads the normal force N it exerts on the person.', math: 'N − m·g = m·a  (Newton II)' },
              { text: 'Solve for N.', math: 'N = m·(g + a) = 70·(10 + 2) = 840 N' },
            ],
            answer: '840 N — heavier than the person\'s 700 N "weight" at rest.',
          }],
          practice: [
            { q: 'A 5 kg object has a net force of 20 N acting on it. Its acceleration, in m/s²?', a: '4', hint: 'F = ma.', solution: 'a = F/m = 20/5 = 4 m/s².', difficulty: 'easy' },
            { q: 'Two masses (3 kg and 7 kg) are joined by a string over a frictionless pulley. The net mass difference is 4 kg; total mass is 10 kg. What is their acceleration (Atwood machine; g = 10)? Answer in m/s².', a: '4', hint: 'Net force = (m₁ − m₂)·g; acceleration = net force / total mass.', solution: 'a = (m₁ − m₂)·g / (m₁ + m₂) = 4·10/10 = 4 m/s².', difficulty: 'medium' },
          ],
          keyTerms: ['force', 'mass', "Newton's laws", 'net force'],
        },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Classical_mechanics',
        'https://plato.stanford.edu/entries/newton-philosophy/',
        'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/',
      ],
      verifiedAt: '2026-04-22',
    },

    em: {
      id: 'em',
      name: 'Electromagnetism',
      level: 'Advanced',
      dek: 'The theory of light, magnetism, and electric current — four equations that changed the world.',
      readTime: '13 min',

      sections: ['A thread through the nineteenth century', 'Faraday\'s lines of force', 'Maxwell\'s four equations', 'The fields are real', 'What it built'],
      body: [
        { type: 'lead', text: 'In 1820, Hans Christian Ørsted was lecturing in Copenhagen when he noticed a compass needle twitch near a current-carrying wire. Within a decade, Michael Faraday at the Royal Institution was running the reverse experiment — moving a magnet near a coil and watching a current appear. And in the 1860s a young Scottish physicist named James Clerk Maxwell wrote down four equations that linked the two phenomena forever.' },
        { type: 'interactive', key: 'em-deepdive' },
        { type: 'interactive', key: 'faraday-1820' },
        { type: 'h2', text: 'Faraday\'s lines of force' },
        { type: 'p', text: 'Faraday had almost no mathematics. He reasoned in pictures. Around a magnet he imagined invisible lines running from north pole to south, curving through space. Around a current-carrying wire, circles of magnetic influence. Faraday\'s "lines of force" were ridiculed by Continental physicists who preferred action-at-a-distance, but they turned out to be closer to the truth than anyone expected.' },
        { type: 'interactive', key: 'em-diagram' },
        { type: 'h2', text: 'Maxwell\'s four equations' },
        { type: 'p', text: 'Maxwell gave Faraday\'s pictures their algebra. The four equations bearing his name describe how electric and magnetic fields arise from charges and currents, and how each can induce the other. They fit on a t-shirt. They also, once you solve them, predict that a changing electric field produces a changing magnetic field which produces a changing electric field — a wave, propagating at exactly the speed of light. Maxwell\'s great insight was to realize that light itself was an electromagnetic wave.' },
        { type: 'p', text: 'The four equations, in their modern form: Gauss\'s law relates electric flux to enclosed charge; Gauss\'s magnetism says there are no magnetic monopoles; Faraday\'s law turns a changing magnetic field into an electric field; Ampère\'s law (with Maxwell\'s correction) turns a current or a changing electric field into a magnetic field. That is, strictly, the entire classical theory of light, radio, magnetism, electricity, and everything that plugs in.' },
        { type: 'h2', text: 'The fields are real' },
        { type: 'p', text: 'One of the permanent mental shifts Maxwell forces on you is that the fields are not bookkeeping. The electric and magnetic fields carry energy and momentum; they exist in empty space; they are the medium through which charges interact. This is the first time in physics that a mathematical abstraction turned out to be as real as the objects it described.' },
        { type: 'h2', text: 'What it built' },
        { type: 'p', text: 'Every electric motor, every radio transmitter, every optical fiber, every MRI machine — all of them are direct applications of Maxwell\'s equations. Special relativity came out of taking the equations seriously. Quantum electrodynamics — the quantum version of Maxwell\'s theory — is the most precisely tested theory in the history of science: it predicts the electron\'s magnetic moment to twelve decimal places, and experiment agrees to all twelve.' },
        { type: 'interactive', key: 'em-videos' },
        { type: 'callout', text: 'Maxwell died in 1879, four years before Heinrich Hertz demonstrated radio waves in the laboratory and confirmed the prediction.' },
      ],

      keyTerms: ['electric field', 'magnetic field', 'Maxwell\'s equations', 'electromagnetic wave', 'Faraday\'s law', 'Lorentz force', 'gauge invariance'],

      resources: {
        videos: [
          {
            id: null,
            source: 'other',
            url: 'https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2007/',
            title: '8.02 Physics II: Electricity and Magnetism — full course',
            channel: 'MIT OpenCourseWare',
            duration: 'variable',
            why: 'TEAL-format MIT course with demonstrations, notes, and experiments. The canonical free EM course online.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.feynmanlectures.caltech.edu/II_toc.html',
            title: 'Feynman Lectures on Physics, Volume II (full text)',
            channel: 'Caltech',
            duration: 'variable',
            why: 'Feynman\'s treatment of EM — reads like a novel, thinks like a physicist. The chapters on fields and waves are unmatched.',
          },
          {
            id: 'bHIhgxav9LY',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=bHIhgxav9LY',
            title: 'The Big Misconception About Electricity',
            channel: 'Veritasium',
            duration: '14:48',
            why: 'Derek Muller on how EM energy actually flows in a circuit — through the fields, not the wires. Rewires how you picture current.',
          },
        ],
        books: [
          {
            title: 'A Treatise on Electricity and Magnetism',
            author: 'James Clerk Maxwell',
            year: 1873,
            url: 'https://archive.org/details/electricandmagne01maxwrich',
            why: 'The original. Dense and Victorian, but Volume I Chapter 1 has Maxwell\'s own pedagogical outline of the whole subject.',
          },
          {
            title: 'Introduction to Electrodynamics',
            author: 'David J. Griffiths',
            year: 1981,
            url: '',
            why: 'The modern undergraduate standard. Clear, funny in places, genuinely teaches you how to solve problems.',
          },
          {
            title: 'Faraday, Maxwell, and the Electromagnetic Field',
            author: 'Nancy Forbes and Basil Mahon',
            year: 2014,
            url: '',
            why: 'A beautifully paced joint biography that doubles as a conceptual history of the subject.',
          },
        ],
        articles: [
          {
            title: 'Electromagnetism',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Electromagnetism',
            why: 'Comprehensive reference with good cross-links into the subfields.',
            year: null,
          },
          {
            title: 'A Dynamical Theory of the Electromagnetic Field',
            source: 'Maxwell, 1865 (Royal Society)',
            url: 'https://en.wikisource.org/wiki/A_Dynamical_Theory_of_the_Electromagnetic_Field',
            why: 'Maxwell\'s landmark paper, in which the equations first appear. Wikisource has the full text.',
            year: 1865,
          },
        ],
        courses: [
          {
            title: '8.02 Electricity and Magnetism',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2007/',
            free: true,
            why: 'A full university course, free, with problem sets and exams. Still the gold standard.',
          },
        ],
        tools: [
          {
            title: 'PhET — Electricity & Magnets',
            url: 'https://phet.colorado.edu/en/simulations/category/physics/electricity-magnets-and-circuits',
            why: 'Play with charges and fields. The "Faraday\'s Law" sim gets the induction picture across in five minutes.',
          },
        ],
      },

      interactive: { kind: 'emfield' },
      seeAlso: ['mechanics', 'waves', 'quantum', 'relativity'],
      prereqs: ['calc2', 'mechanics', 'linalg'],
      leadsTo: ['waves', 'quantum'],

      chapterActivity: 'Quarterly visit to the New York Hall of Science\'s Connected Worlds gallery — large-scale demonstrations of induction, plus a talk from a Con Edison engineer.',

      examples: [{
        title: 'Coulomb\'s law',
        problem: 'Two point charges of +1 μC each are held 1 m apart. What is the force between them? k = 9 × 10⁹ N·m²/C².',
        steps: [
          { text: 'Write Coulomb\'s law.', math: 'F = k·q₁·q₂ / r²' },
          { text: 'Plug in.', math: 'F = 9×10⁹ · (10⁻⁶)² / 1² = 9×10⁻³ N' },
        ],
        answer: '9 mN — tiny in everyday terms because coulombs are very big units of charge.',
      }],
      practice: [
        { q: 'If two charges produce a force of 1 N at 1 m apart, what is the force at 3 m apart? (Answer in fraction of 1 N, e.g., "1/9")', a: '1/9', acceptable: ['0.111', '0.11'], hint: 'Force scales as 1/r².', solution: 'Triple the distance → force drops by 9×. F = 1/9 N ≈ 0.111 N.', difficulty: 'easy' },
        { q: 'Around a long straight wire carrying upward current, the magnetic field forms what shape (one word)?', a: 'circles', acceptable: ['concentric circles', 'circle'], hint: 'Right-hand rule: curl your fingers with the current.', solution: 'Concentric circles around the wire, at right angles to the current. The strength falls as 1/r.', difficulty: 'easy' },
        { q: 'Maxwell\'s equations predict electromagnetic waves travel at what speed, c (in meters per second, to 2 significant figures in scientific notation, e.g., "3e8")?', a: '3e8', acceptable: ['3.0e8', '300000000', '3×10⁸', '3 × 10^8'], hint: 'The speed of light.', solution: 'c = 1/√(ε₀·μ₀) ≈ 3 × 10⁸ m/s. Matching the measured speed of light was how Maxwell realized that light IS an EM wave.', difficulty: 'medium' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Electromagnetism',
        'https://ocw.mit.edu/courses/8-02-physics-ii-electricity-and-magnetism-spring-2007/',
        'https://www.feynmanlectures.caltech.edu/II_toc.html',
      ],
      verifiedAt: '2026-04-22',
    },

    thermo: {
      id: 'thermo',
      name: 'Thermodynamics',
      level: 'Intermediate',
      dek: 'The science of heat, work, and the one quantity that always increases.',
      readTime: '12 min',

      sections: ['Steam and the first law', 'Carnot and the engine that cannot exist', 'Entropy', 'Statistical mechanics', 'Why the arrow'],
      body: [
        { type: 'lead', text: 'Thermodynamics is the only branch of physics that began in a workshop. In the 1820s a young French engineer named Sadi Carnot, trying to understand why English steam engines were more efficient than French ones, wrote a short book that accidentally founded a whole science.' },
        { type: 'interactive', key: 'thermo-deepdive' },
        { type: 'h2', text: 'The first law and the conservation of energy' },
        { type: 'p', text: 'The first law of thermodynamics is the accountant\'s law: you cannot get more energy out of a system than you put in. Heat is a form of energy; work is a form of energy; they can convert into each other, but the books always balance. James Prescott Joule, the son of a Manchester brewer, spent years measuring how much mechanical work produced how much heat. The result was the calorie-to-joule conversion that still bears his name.' },
        { type: 'h2', text: 'Carnot\'s cycle' },
        { type: 'p', text: 'Sadi Carnot, in 1824, asked a purely theoretical question: what is the maximum possible efficiency of a heat engine? The answer, he showed, depends only on the temperature ratio between the hot reservoir (where heat enters) and the cold reservoir (where it leaves). No engine, however cleverly built, can do better. The Carnot cycle — two isothermal strokes and two adiabatic ones — describes the upper limit. Every real engine you will ever see falls short of it.' },
        { type: 'interactive', key: 'thermo-diagram' },
        { type: 'h2', text: 'The second law, and why time has a direction' },
        { type: 'p', text: 'The second law is the law that all first-time students find strange and all physicists find beautiful. It says that a quantity called entropy — a measure of disorder, or of how many microscopic arrangements correspond to a given macroscopic state — can only increase in an isolated system. Ice melts in your drink because more arrangements of the water molecules correspond to liquid than to solid, not because of any imbalance of forces. The arrow of time, the direction of heat flow, the inefficiency of every engine — all fall out of the second law.' },
        { type: 'h2', text: 'Boltzmann and the statistical foundation' },
        { type: 'p', text: 'Ludwig Boltzmann, working in Vienna in the 1870s, showed that thermodynamics was ultimately about counting. The entropy of a gas was the logarithm of the number of microscopic states consistent with its macroscopic temperature and pressure. This single insight — engraved on his tombstone, S = k log W — bridges thermodynamics and the underlying mechanics of atoms. It is one of the great unifications of physics.' },
        { type: 'callout', text: 'Boltzmann died by suicide in 1906, partly from scientific frustration: the atomic picture he had championed was still considered speculative. Einstein\'s 1905 paper on Brownian motion finally settled the matter a year before.' },
        { type: 'h2', text: 'Why it is a one-way science' },
        { type: 'p', text: 'Unlike Newton\'s laws or Maxwell\'s equations, the second law is not time-reversible. It names a direction. Some physicists find this embarrassing; others find it profound. Either way, it is the only law of physics we have that explains why we remember the past and not the future.' },
        { type: 'interactive', key: 'thermo-videos' },
        { type: 'quote', text: 'The law that entropy always increases holds, I think, the supreme position among the laws of Nature.', cite: 'Arthur Eddington, 1928' },
      ],

      keyTerms: ['entropy', 'first law', 'second law', 'heat engine', 'Carnot cycle', 'Boltzmann constant', 'statistical mechanics'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/playlist?list=PL177B242D4104DCC5',
            title: 'Statistical Mechanics — lecture series',
            channel: 'Stanford / Leonard Susskind',
            duration: 'variable',
            why: 'Susskind\'s full Theoretical Minimum course, free on YouTube. Gets to the statistical foundation fast.',
          },
          {
            id: 'ZsY4WcQOrfk',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=ZsY4WcQOrfk',
            title: 'Entropy: Embrace the Chaos! (Crash Course Chemistry #20)',
            channel: 'Crash Course',
            duration: '11:58',
            why: 'Hank Green\'s twelve-minute introduction to entropy. Pairs well with a textbook chapter.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://ocw.mit.edu/courses/5-60-thermodynamics-kinetics-spring-2008/',
            title: '5.60 Thermodynamics & Kinetics',
            channel: 'MIT OpenCourseWare',
            duration: 'variable',
            why: 'Keith Nelson\'s MIT course. More chemistry-flavored than 8.044 but a superb self-study path.',
          },
        ],
        books: [
          {
            title: 'Reflections on the Motive Power of Fire',
            author: 'Sadi Carnot',
            year: 1824,
            url: 'https://archive.org/details/reflectionsonmot00carn',
            why: 'The founding document, in English translation. Seventy pages; the idea of the heat cycle arrives on page thirty.',
          },
          {
            title: 'Thermal Physics',
            author: 'Charles Kittel and Herbert Kroemer',
            year: 1980,
            url: '',
            why: 'The modern standard undergraduate text. Builds statistical mechanics from the ground up and makes it feel inevitable.',
          },
          {
            title: 'The Refrigerator and the Universe',
            author: 'Martin Goldstein and Inge F. Goldstein',
            year: 1993,
            url: '',
            why: 'The best popular book on the second law — historical, warm, and wise. Out of print but in most library systems.',
          },
        ],
        articles: [
          {
            title: 'Thermodynamics',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Thermodynamics',
            why: 'Well-organized overview with good section on the historical development.',
            year: null,
          },
          {
            title: 'Philosophy of Statistical Mechanics',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/statphys-statmech/',
            why: 'Why entropy is strange, and what the arrow of time actually rests on.',
            year: null,
          },
        ],
        courses: [
          {
            title: '5.60 Thermodynamics & Kinetics',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/5-60-thermodynamics-kinetics-spring-2008/',
            free: true,
            why: 'A semester\'s worth of lectures, problem sets, and exams from MIT chemistry. Accessible after introductory calculus.',
          },
        ],
        tools: [
          {
            title: 'PhET — States of Matter',
            url: 'https://phet.colorado.edu/en/simulations/states-of-matter',
            why: 'Watch temperature and pressure drive phase changes. A quick way to build intuition for what the equations describe.',
          },
        ],
      },

      interactive: { kind: 'entropy' },
      seeAlso: ['mechanics', 'quantum', 'bonds', 'reactions'],
      prereqs: ['calc1', 'mechanics'],
      leadsTo: ['quantum', 'cosmology'],

      chapterActivity: 'A winter tour of the steam tunnels under Manhattan — Con Ed offers occasional public walks of the city\'s district steam system, the largest still running.',

      examples: [{
        title: 'Carnot efficiency',
        problem: 'A heat engine runs between a hot reservoir at 500 K and a cold reservoir at 300 K. What is its maximum possible efficiency?',
        steps: [
          { text: 'Write the Carnot efficiency formula.', math: 'η = 1 − Tc/Th' },
          { text: 'Plug in.', math: 'η = 1 − 300/500 = 0.4' },
        ],
        answer: '40%. No engine operating between those two temperatures, no matter how cleverly built, can do better.',
      }],
      practice: [
        { q: 'A heat engine operates between reservoirs at 600 K and 300 K. What is the Carnot (maximum) efficiency, as a decimal (e.g., "0.5")?', a: '0.5', acceptable: ['50%', '0.50', '1/2'], hint: 'η = 1 − Tc/Th.', solution: 'η = 1 − 300/600 = 0.5 (or 50%).', difficulty: 'easy' },
        { q: 'Entropy of an isolated system (per the second law) can only…? (one word, e.g., increase/decrease/stay)', a: 'increase', acceptable: ['increase or stay the same'], hint: 'The arrow of time.', solution: 'Strictly: ΔS ≥ 0 for an isolated system. In any real process, entropy increases. Time itself is defined by this direction.', difficulty: 'easy' },
        { q: 'Who engraved S = k·log W on his tombstone? (surname)', a: 'Boltzmann', hint: 'Austrian physicist, 1844–1906.', solution: 'Ludwig Boltzmann. The equation ties thermodynamic entropy to the number of microstates consistent with a macrostate.', difficulty: 'medium' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Thermodynamics',
        'https://plato.stanford.edu/entries/statphys-statmech/',
        'https://ocw.mit.edu/courses/5-60-thermodynamics-kinetics-spring-2008/',
      ],
      verifiedAt: '2026-04-22',
    },

    waves: {
      id: 'waves',
      name: 'Waves & Optics',
      level: 'Intermediate',
      dek: 'How light, sound, and water share the same mathematics — and why a soap bubble shows colors.',
      readTime: '11 min',

      sections: ['The common pattern', 'Interference and diffraction', 'Everyday optics', 'Wave, particle, both', 'What waves do for us'],
      body: [
        { type: 'lead', text: 'Drop a stone in a pond. The ripples that spread outward are the same object, mathematically, as the sound that leaves your mouth when you speak, the light streaming out of a desk lamp, and the slow oscillation of an electron in its orbital. Everything that propagates as a wave obeys the same equation, and that equation has been surprising physicists since the seventeenth century.' },
        { type: 'interactive', key: 'waves-deepdive' },
        { type: 'interactive', key: 'waves-diagram' },
        { type: 'h2', text: 'The common pattern' },
        { type: 'p', text: 'A wave is a disturbance that carries energy without permanently carrying the medium. On a pond, water molecules bob up and down; they do not travel with the wave. A struck guitar string shakes back and forth; the tone travels to your ear, but the string never leaves the guitar. Every wave has a wavelength, a frequency, and a speed — and those three are related by a single equation that Johannes Kepler would have recognized.' },
        { type: 'h2', text: 'Interference and diffraction' },
        { type: 'p', text: 'Thomas Young\'s 1801 double-slit experiment is the oldest surviving demonstration that light is a wave. Two narrow slits, a screen behind, and a lamp in front — and instead of two bright bands you get a striped pattern of light and dark. The striping is interference, and it cannot happen unless waves are adding and canceling. Diffraction is the same phenomenon at the edge of an obstacle: waves bending, going around corners, blurring shadows. Both are the handwriting of the wave.' },
        { type: 'h2', text: 'Everyday optics' },
        { type: 'p', text: 'The colors of a soap bubble, the rainbow after rain, the reason a diamond sparkles, the fact that sunsets are red — all are optics, and all are simple once you know the wavelength of light and the index of refraction of the medium. Isaac Newton split white light with a prism in 1666 and understood that the colors were already present, not created by the glass. This is still the right way to think about it.' },
        { type: 'p', text: 'Snell\'s law gives the bending at a boundary; Fresnel\'s equations give the reflected and transmitted amplitudes. Total internal reflection, which keeps the light inside an optical fiber, is what made transatlantic video calls cheap. Polarization explains why certain sunglasses cut glare and why liquid-crystal displays work. Every bit of that follows from the same wave picture Young sketched in chalk.' },
        { type: 'h2', text: 'Wave, particle, both' },
        { type: 'p', text: 'The twentieth century complicated matters. Einstein\'s 1905 paper on the photoelectric effect showed that light, which Young had proven to be a wave, also comes in discrete packets called photons. Louis de Broglie then proposed that matter itself had a wave character. The resolution is quantum mechanics, and the waves there are not of anything tangible but of probability. The classical wave equation, remarkably, remains the first thing you learn.' },
        { type: 'interactive', key: 'waves-videos' },
        { type: 'h2', text: 'What waves do for us' },
        { type: 'p', text: 'Waves are the medium of most of what we know: radio, television, microwave ovens, Wi-Fi, MRI scans, ultrasound, sonar, seismology, spectroscopy, lasers, and every telescope ever built. The mathematics of waves — Fourier analysis, group velocity, dispersion — is one of the great reusable tools of science and engineering.' },
      ],

      keyTerms: ['wavelength', 'frequency', 'interference', 'diffraction', 'refraction', 'polarization', 'coherence'],

      resources: {
        videos: [
          {
            id: null,
            source: 'other',
            url: 'https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/',
            title: '8.03 Physics III: Vibrations and Waves',
            channel: 'MIT OpenCourseWare',
            duration: 'variable',
            why: 'Yen-Jie Lee\'s complete MIT course on waves and optics. Twenty-four lectures, full notes, exams.',
          },
          {
            id: 'Iuv6hY6zsd0',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=Iuv6hY6zsd0',
            title: 'The Original Double Slit Experiment',
            channel: 'Veritasium',
            duration: '7:47',
            why: 'Derek Muller actually builds Young\'s apparatus and runs it. Better than a textbook diagram.',
          },
          {
            id: 'p-MNSLsjjdo',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=p-MNSLsjjdo',
            title: 'The Quantum Experiment that Broke Reality',
            channel: 'PBS Space Time',
            duration: '10:10',
            why: 'Matthew O\'Dowd on the double-slit and what it forced physicists to accept about wave–particle duality.',
          },
        ],
        books: [
          {
            title: 'Opticks',
            author: 'Isaac Newton',
            year: 1704,
            url: 'https://www.gutenberg.org/ebooks/33504',
            why: 'Still the most readable of Newton\'s books — Queries at the end remain a masterpiece of scientific speculation.',
          },
          {
            title: 'QED: The Strange Theory of Light and Matter',
            author: 'Richard Feynman',
            year: 1985,
            url: '',
            why: 'Feynman\'s Alix G. Mautner lectures. Arrows and clocks, no equations — the deepest popular book on optics ever written.',
          },
          {
            title: 'Optics',
            author: 'Eugene Hecht',
            year: 1974,
            url: '',
            why: 'The standard undergraduate text since the 1970s. Clear diagrams, thorough, a genuine pleasure to study from.',
          },
        ],
        articles: [
          {
            title: 'Optics',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Optics',
            why: 'History-rich overview from Ibn al-Haytham through modern quantum optics.',
            year: null,
          },
          {
            title: 'Young\'s Experiment',
            source: 'Encyclopaedia Britannica',
            url: 'https://www.britannica.com/science/light/Youngs-double-slit-experiment',
            why: 'Short, careful explanation of the double-slit setup and what it demonstrated.',
            year: null,
          },
        ],
        courses: [
          {
            title: '8.03 Vibrations and Waves',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/',
            free: true,
            why: 'Full MIT course, free, with demos and problem sets. Covers sound, light, and mechanical waves uniformly.',
          },
        ],
        tools: [
          {
            title: 'PhET — Waves on a String',
            url: 'https://phet.colorado.edu/en/simulations/wave-on-a-string',
            why: 'Drag the end of a string up and down and watch the wave propagate, reflect, interfere. The best five-minute intuition-builder.',
          },
        ],
        primarySources: [
          {
            title: 'Young, "The Bakerian Lecture — Experiments on the Nature of Light" (1802)',
            url: 'https://en.wikisource.org/wiki/The_Bakerian_Lecture:_On_the_Theory_of_Light_and_Colours',
            why: 'Thomas Young\'s own account of the double-slit result that overturned Newton\'s corpuscular theory.',
          },
        ],
      },

      interactive: { kind: 'waves' },
      seeAlso: ['em', 'quantum', 'mechanics', 'waves'],
      prereqs: ['calc1', 'mechanics'],
      leadsTo: ['em', 'quantum'],

      chapterActivity: 'Saturday afternoons at Pier 45 on the Hudson — the Physics Reading Group brings prisms, slinkies, and laser pointers to the river walk.',

      examples: [{
        title: 'Wavelength of red light',
        problem: 'Red laser light has frequency 4.5 × 10¹⁴ Hz. In vacuum (c = 3 × 10⁸ m/s), what is its wavelength?',
        steps: [
          { text: 'Rearrange the master equation.', math: 'v = f·λ  ⇒  λ = v / f' },
          { text: 'Plug in.', math: 'λ = 3×10⁸ / 4.5×10¹⁴ = 6.67×10⁻⁷ m = 667 nm' },
        ],
        answer: '~667 nm — in the red end of the visible spectrum, as advertised.',
      }],
      practice: [
        { q: 'A sound wave in air (v = 340 m/s) has frequency 170 Hz. What is its wavelength, in meters?', a: '2', acceptable: ['2.0', '2 m'], hint: 'λ = v/f.', solution: 'λ = 340/170 = 2 m.', difficulty: 'easy' },
        { q: 'Double the frequency of a wave in a rope; if the rope tension (and speed v) stay the same, the wavelength ___ (one word).', a: 'halves', acceptable: ['halved', 'is halved'], hint: 'v = f·λ. If v is fixed and f doubles…', solution: 'λ = v/f. Double f → λ halves. The wave oscillates twice as fast but moves at the same speed, so each cycle is half the spatial length.', difficulty: 'easy' },
        { q: 'Constructive interference requires the two waves to be in phase; destructive interference requires them to be ___ out of phase (in degrees).', a: '180', acceptable: ['180 degrees', 'π'], hint: 'Crest on trough.', solution: '180° (= π radians). Crest of one wave lines up with trough of the other; they sum to zero. Noise-cancelling headphones work exactly this way.', difficulty: 'medium' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Optics',
        'https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/',
      ],
      verifiedAt: '2026-04-22',
    },

    quantum: {
      id: 'quantum',
      name: 'Quantum Mechanics',
      level: 'Advanced',
      dek: 'The logic of the very small — strange, verified, and the foundation of everything that has a chip in it.',
      readTime: '14 min',

      sections: ['The crisis of classical physics', 'Waves of probability', 'Heisenberg and uncertainty', 'Entanglement', 'The honest front'],
      body: [
        { type: 'lead', text: 'In 1900, a conservative German physicist named Max Planck, trying to fix a minor inconsistency in the theory of thermal radiation, introduced a single new assumption: energy came in discrete packets. Planck himself considered the assumption a mathematical trick and spent years trying to talk himself out of it. He never succeeded, and the twentieth century went another way.' },
        { type: 'interactive', key: 'quantum-deepdive' },
        { type: 'h2', text: 'The crisis of classical physics' },
        { type: 'p', text: 'Three experimental problems, by 1905, were impossible to reconcile with classical physics: the spectrum of light emitted by hot bodies, the photoelectric effect, and the stability of atoms. Classical electromagnetism predicted that an electron orbiting a nucleus should radiate energy and spiral into it within a nanosecond. Matter obviously did not do this. Something in the foundations was wrong.' },
        { type: 'interactive', key: 'quantum-diagram' },
        { type: 'h2', text: 'Waves of probability' },
        { type: 'p', text: 'The resolution came in two forms. Erwin Schrödinger wrote down a wave equation for matter, in which a particle was described by a spread-out wave function. Werner Heisenberg wrote down a formalism using matrices, with no waves in sight. The two turned out to be mathematically equivalent. What both insisted on was strange: the wave function did not describe a physical wave but the probability of a measurement result. Where classical physics said where a particle was, quantum mechanics said only the odds.' },
        { type: 'h2', text: 'Heisenberg\'s uncertainty' },
        { type: 'p', text: 'Heisenberg\'s uncertainty principle says you cannot simultaneously know position and momentum of a particle with unlimited precision. This is not a technological limit; it is a structural feature of the theory. The more sharply you measure one, the more the other blurs. It follows directly from the fact that the two quantities, in quantum mechanics, are represented by operators that do not commute.' },
        { type: 'h2', text: 'Entanglement' },
        { type: 'p', text: 'Two particles prepared together can become entangled: measure one, and the other\'s state is instantly determined, no matter how far apart the two have flown. Einstein called it "spooky action at a distance" and thought it showed the theory was incomplete. In 1964, John Bell proposed an experimental test. Starting with Alain Aspect\'s experiments in the early 1980s and confirmed with extraordinary precision since, the results favor quantum mechanics. Nature is spooky. Einstein was wrong.' },
        { type: 'interactive', key: 'quantum-videos' },
        { type: 'h2', text: 'The honest front' },
        { type: 'p', text: 'A hundred years in, quantum mechanics is the most successful theory in the history of science. It predicts the behavior of atoms to eleven decimal places. It underlies semiconductors, lasers, MRI machines, chemistry itself. It also has not told us what is actually going on. What "collapses" when a measurement is made? What is a measurement, exactly? These are the questions that Einstein never stopped asking, and that remain the honest front of the subject.' },
        { type: 'quote', text: 'I think I can safely say that nobody understands quantum mechanics.', cite: 'Richard Feynman, 1965' },
      ],

      keyTerms: ['wave function', 'Schrödinger equation', 'uncertainty principle', 'superposition', 'entanglement', 'operator', 'measurement problem'],

      resources: {
        videos: [
          {
            id: null,
            source: 'other',
            url: 'https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2013/',
            title: '8.04 Quantum Physics I',
            channel: 'MIT OpenCourseWare',
            duration: 'variable',
            why: 'Allan Adams\'s full MIT course. Watch lecture 1 (superposition and the double slit) before anything else.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/playlist?list=PL701CD168D02FF56F',
            title: 'Quantum Mechanics — Theoretical Minimum',
            channel: 'Stanford / Leonard Susskind',
            duration: 'variable',
            why: 'Susskind\'s second Theoretical Minimum course. Presents quantum mechanics as a generalization of probability, not a mystery.',
          },
          {
            id: 'tafGL02EUOA',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=tafGL02EUOA',
            title: 'Quantum Entanglement and the Great Bohr–Einstein Debate',
            channel: 'PBS Space Time',
            duration: '13:22',
            why: 'Matthew O\'Dowd on Bell\'s theorem and the experiments that turned a philosophical argument into a settled result.',
          },
        ],
        books: [
          {
            title: 'The Principles of Quantum Mechanics',
            author: 'P. A. M. Dirac',
            year: 1930,
            url: '',
            why: 'Still the cleanest exposition ever written, by the physicist who invented the notation. Demanding; worth it.',
          },
          {
            title: 'Introduction to Quantum Mechanics',
            author: 'David J. Griffiths',
            year: 1994,
            url: '',
            why: 'The modern undergraduate standard. Clear problems, an elegant build from wave equation to angular momentum.',
          },
          {
            title: 'QED: The Strange Theory of Light and Matter',
            author: 'Richard Feynman',
            year: 1985,
            url: '',
            why: 'Feynman explains quantum electrodynamics to an audience with no mathematics. The clearest popular book on the subject, full stop.',
          },
        ],
        articles: [
          {
            title: 'Quantum Mechanics',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/qm/',
            why: 'Jenann Ismael\'s overview — what the theory says, what it does not say, and why the interpretations matter.',
            year: null,
          },
          {
            title: 'Quantum mechanics',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Quantum_mechanics',
            why: 'Comprehensive, well-cited reference with links to all the major experiments and formalisms.',
            year: null,
          },
        ],
        courses: [
          {
            title: '8.04 Quantum Physics I',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2013/',
            free: true,
            why: 'Allan Adams\'s MIT course. Legendary first lecture. Full videos, notes, problem sets.',
          },
        ],
        tools: [
          {
            title: 'PhET — Quantum Simulations',
            url: 'https://phet.colorado.edu/en/simulations/category/physics/quantum-phenomena',
            why: 'Free in-browser simulations of the double-slit, Stern-Gerlach, and more. Invaluable for building intuition.',
          },
        ],
      },

      interactive: { kind: 'doubleslit' },
      seeAlso: ['em', 'waves', 'particle', 'atoms'],
      prereqs: ['calc2', 'linalg', 'mechanics'],
      leadsTo: ['particle', 'cosmology'],

      chapterActivity: 'A reading group working through Feynman\'s QED chapter by chapter, Wednesday evenings at the Strand\'s Rare Book Room on Broadway.',

      examples: [{
        title: 'Heisenberg on an electron',
        problem: 'An electron is localized to within Δx = 0.1 nm (roughly one atom). Use Δx·Δp ≥ ℏ/2 to find the minimum uncertainty in its momentum. Take ℏ = 1.05×10⁻³⁴ J·s.',
        steps: [
          { text: 'Rearrange for Δp.', math: 'Δp ≥ ℏ / (2·Δx)' },
          { text: 'Plug in with Δx = 10⁻¹⁰ m.', math: 'Δp ≥ 1.05×10⁻³⁴ / (2·10⁻¹⁰) = 5.25×10⁻²⁵ kg·m/s' },
        ],
        answer: 'At least about 5.3×10⁻²⁵ kg·m/s of momentum uncertainty — huge at the electron scale.',
      }],
      practice: [
        { q: 'A photon has frequency 5×10¹⁴ Hz. Its energy is E = h·f, where h = 6.63×10⁻³⁴ J·s. In joules, to 2 sig figs (use scientific notation like "3.3e-19").', a: '3.3e-19', acceptable: ['3.3×10⁻¹⁹', '3.3 × 10^-19'], hint: 'E = h·f.', solution: 'E = 6.63×10⁻³⁴ · 5×10¹⁴ = 3.3×10⁻¹⁹ J. The energy of one photon of visible light.', difficulty: 'medium' },
        { q: 'Wavefunctions represent the probability ___ of a measurement outcome. (one word)', a: 'amplitude', acceptable: ['amplitudes', 'density'], hint: 'It\'s the *squared magnitude* of the wavefunction that gives probabilities; the wavefunction itself is the ___.', solution: 'Amplitude. The Born rule: |ψ|² gives probability density. ψ is the amplitude.', difficulty: 'medium' },
        { q: 'In 1964, John Bell showed that quantum mechanics is inconsistent with any theory of local ___ variables. (one word)', a: 'hidden', hint: 'Einstein\'s "spooky" complaint.', solution: 'Hidden variables. Bell\'s theorem + Aspect\'s 1980s experiments ruled them out. Nature really is non-local.', difficulty: 'hard' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Quantum_mechanics',
        'https://plato.stanford.edu/entries/qm/',
        'https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2013/',
      ],
      verifiedAt: '2026-04-22',
    },

    relativity: {
      id: 'relativity',
      name: 'Relativity',
      level: 'Advanced',
      dek: 'Einstein\'s geometric theory of space, time, and gravity — and the long project of verifying it.',
      readTime: '14 min',

      sections: ['The patent clerk\'s year', 'Special relativity', 'General relativity', 'The 1919 eclipse', 'A hundred years of confirmations'],
      body: [
        { type: 'lead', text: 'In 1905, a twenty-six-year-old clerk at the Swiss Patent Office in Bern, working in the evenings, published four papers that remade physics. One of them, a short note on the electrodynamics of moving bodies, contained what would come to be called the special theory of relativity. Einstein had no academic position. He had been turned down by every university to which he applied.' },
        { type: 'interactive', key: 'relativity-deepdive' },
        { type: 'h2', text: 'Special relativity' },
        { type: 'p', text: 'Special relativity rests on two postulates. The laws of physics take the same form in every inertial frame. The speed of light in vacuum is the same in every inertial frame. These two sentences, taken together, seem harmless and turn out to be incendiary. Time dilates; lengths contract; simultaneity is frame-dependent; and mass and energy turn out to be the same thing, measured in different units. E = mc² is a corollary, and not the most surprising one.' },
        { type: 'interactive', key: 'relativity-diagram' },
        { type: 'h2', text: 'General relativity' },
        { type: 'p', text: 'Ten years later, Einstein completed a vastly more ambitious theory. Gravity, he argued, was not a force but a curvature of spacetime itself. A planet orbits the Sun not because the Sun pulls on it but because the Sun bends the geometry of the nearby vacuum, and the planet follows the straightest available path through that curved geometry. The mathematics, which Einstein had to learn from his friend Marcel Grossmann, was differential geometry — the same language Bernhard Riemann had developed sixty years earlier for purely abstract reasons.' },
        { type: 'callout', text: 'Relativity is not a revision of Newtonian gravity but an extension. When gravity is weak and velocities are small, Einstein\'s equations reduce exactly to Newton\'s.' },
        { type: 'h2', text: 'The 1919 eclipse' },
        { type: 'p', text: 'General relativity predicted that starlight grazing the Sun should be deflected by a measurable angle. In May 1919, a British expedition led by Arthur Eddington, observing a total eclipse on the island of Príncipe, measured the deflection and found Einstein\'s prediction correct. The London Times announced the result in November. Einstein became world-famous overnight — an outcome that, by his own account, he never really recovered from.' },
        { type: 'h2', text: 'A hundred years of confirmations' },
        { type: 'p', text: 'Every subsequent test has confirmed general relativity to higher precision. GPS satellites correct for both special and general relativistic time dilation; without the corrections, positions would drift by kilometers per day. LIGO detected gravitational waves in 2015, exactly as Einstein predicted a century earlier. The 2019 Event Horizon Telescope image of the black hole at the center of M87 is a visual confirmation of the theory in its most extreme regime.' },
        { type: 'p', text: 'The theory may yet fail — at singularities, inside black holes, in the first instants of the universe. The search for a theory of quantum gravity, which reconciles general relativity with quantum mechanics, is the largest unfinished problem in theoretical physics. String theory, loop quantum gravity, causal set theory, and asymptotic safety are some of the serious contenders. None has been confirmed. Einstein\'s equations still have room to be wrong, and that is where the next revolution will come from.' },
        { type: 'interactive', key: 'relativity-videos' },
      ],

      keyTerms: ['spacetime', 'Lorentz transformation', 'time dilation', 'equivalence principle', 'geodesic', 'curvature', 'gravitational wave'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/playlist?list=PLCCD6C043FEC59772',
            title: 'Special Relativity — lecture collection',
            channel: 'Stanford / Leonard Susskind',
            duration: 'variable',
            why: 'Susskind\'s course, free. Begins at the postulates and builds the whole thing without apology.',
          },
          {
            id: 'AwhKZ3fd9JA',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=AwhKZ3fd9JA',
            title: 'General Relativity & Curved Spacetime Explained',
            channel: 'PBS Space Time',
            duration: '9:42',
            why: 'A clean, visual introduction to general relativity as geometry. Matthew O\'Dowd at his best.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=aKwJayXTZUs',
            title: 'The Best Test of General Relativity (by 2 Misplaced Satellites)',
            channel: 'Veritasium',
            duration: '15:59',
            why: 'Derek Muller on a 2018 confirmation of the equivalence principle. A good example of how the theory still gets tested.',
          },
        ],
        books: [
          {
            title: 'Relativity: The Special and General Theory',
            author: 'Albert Einstein',
            year: 1916,
            url: 'https://www.gutenberg.org/ebooks/30155',
            why: 'Einstein\'s own popular exposition, written for a general reader. Free on Gutenberg.',
          },
          {
            title: 'Spacetime Physics',
            author: 'Edwin Taylor and John Archibald Wheeler',
            year: 1963,
            url: 'https://www.eftaylor.com/spacetimephysics/',
            why: 'The standard pedagogical path into special relativity. Problem-driven, clear, with Wheeler\'s characteristic energy.',
          },
          {
            title: 'Gravitation',
            author: 'Charles Misner, Kip Thorne, and John Wheeler',
            year: 1973,
            url: '',
            why: 'The canonical advanced text, known as "MTW." Thirteen hundred pages; every page rewards the reader.',
          },
        ],
        articles: [
          {
            title: 'General relativity',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/General_relativity',
            why: 'Careful, well-cited overview. The tests-and-evidence section is excellent.',
            year: null,
          },
          {
            title: 'Early Philosophical Interpretations of General Relativity',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/genrel-early/',
            why: 'On what Einstein\'s theory meant to the physicists and philosophers who first tried to absorb it.',
            year: null,
          },
          {
            title: 'Mass–Energy Equivalence',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/equivME/',
            why: 'What E = mc² actually claims, and how it has been tested.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Special and General Relativity',
            provider: 'Stanford / Theoretical Minimum',
            url: 'https://theoreticalminimum.com/courses/special-relativity-and-classical-field-theory/2012/spring',
            free: true,
            why: 'Full lecture series, free. The natural sequel to Susskind\'s classical mechanics course.',
          },
        ],
        primarySources: [
          {
            title: 'Einstein, "On the Electrodynamics of Moving Bodies" (1905, English translation)',
            url: 'https://www.fourmilab.ch/etexts/einstein/specrel/www/',
            why: 'The paper that founded special relativity. Surprisingly readable — Einstein\'s prose is better than the myth of it.',
          },
        ],
      },

      interactive: { kind: 'relativity' },
      seeAlso: ['mechanics', 'em', 'cosmology', 'blackholes'],
      prereqs: ['em', 'calc2', 'linalg'],
      leadsTo: ['cosmology', 'particle'],

      chapterActivity: 'The Hayden Planetarium at the American Museum of Natural History runs occasional public lectures on general relativity; the chapter organizes a group reservation each spring.',

      examples: [{
        title: 'Time dilation at 0.8c',
        problem: 'An astronaut travels to a star and back at v = 0.8c. If the trip takes 20 years on Earth clocks, how many years pass on the astronaut\'s clock?',
        steps: [
          { text: 'Compute the Lorentz factor γ.', math: 'γ = 1 / √(1 − 0.64) = 1 / 0.6 ≈ 1.667' },
          { text: 'Moving clock runs slow by γ.', math: 't_astronaut = 20 / γ ≈ 12' },
        ],
        answer: 'About 12 years on the astronaut\'s clock while 20 pass on Earth. This is the twin paradox made concrete.',
      }],
      practice: [
        { q: 'E = m·c². A 1-gram object fully converted to energy releases approximately how many joules (use scientific notation with 1 sig fig, e.g., "9e13")?', a: '9e13', acceptable: ['9.0e13', '9 × 10^13', '9×10¹³'], hint: 'c ≈ 3×10⁸ m/s, c² ≈ 9×10¹⁶ m²/s².', solution: 'E = (0.001 kg)(9×10¹⁶) = 9×10¹³ J. Roughly the energy of a 21-kiloton atomic bomb.', difficulty: 'medium' },
        { q: 'At v/c = 0.6, what is γ (to 2 decimal places)?', a: '1.25', hint: 'γ = 1/√(1 − 0.36).', solution: 'γ = 1/√0.64 = 1/0.8 = 1.25. Clocks tick 25% slower.', difficulty: 'medium' },
        { q: 'In general relativity, gravity is reinterpreted as the curvature of ___. (one word)', a: 'spacetime', acceptable: ['space-time', 'space time'], hint: 'Einstein\'s 1915 insight.', solution: 'Spacetime. Matter and energy curve spacetime; the curvature tells matter how to move. Orbits are "straightest possible paths" in a curved geometry.', difficulty: 'easy' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/General_relativity',
        'https://plato.stanford.edu/entries/genrel-early/',
        'https://plato.stanford.edu/entries/equivME/',
      ],
      verifiedAt: '2026-04-22',
    },

    particle: {
      id: 'particle',
      name: 'Particle Physics',
      level: 'Advanced',
      dek: 'The Standard Model — twelve matter particles, four forces, one Higgs, and a long list of questions.',
      readTime: '13 min',

      sections: ['What\'s in a proton', 'The Standard Model', 'The Higgs', 'What is missing', 'How we look'],
      body: [
        { type: 'lead', text: 'In 1909, Ernest Rutherford and his students fired alpha particles at a thin gold foil and watched a few of them bounce straight back. "It was almost as incredible," Rutherford later said, "as if you fired a fifteen-inch shell at a piece of tissue paper and it came back and hit you." They had discovered the atomic nucleus. Over the following century, physicists kept firing smaller and smaller probes at smaller and smaller targets, and the inner landscape kept unfolding.' },
        { type: 'interactive', key: 'particle-deepdive' },
        { type: 'h2', text: 'The subatomic zoo' },
        { type: 'p', text: 'By the 1960s, accelerator experiments were producing hundreds of short-lived particles whose patterns nobody could explain. Murray Gell-Mann proposed that the protons and neutrons were made of more fundamental things he called quarks. The quark model, initially dismissed as bookkeeping, was confirmed by deep inelastic scattering experiments at SLAC in the late 1960s. The quarks were real.' },
        { type: 'interactive', key: 'particle-diagram' },
        { type: 'h2', text: 'The Standard Model' },
        { type: 'p', text: 'By 1975, the Standard Model was essentially complete. Twelve matter particles — six quarks and six leptons, each with an antiparticle. Four fundamental forces, three of which (electromagnetism, the weak force, the strong force) are carried by gauge bosons. Gravity is not part of the model. The theory predicted the existence of particles that had not yet been observed — the W and Z bosons, the top quark, the Higgs — and over the following decades, each was found exactly where it was supposed to be.' },
        { type: 'h2', text: 'The Higgs boson' },
        { type: 'p', text: 'The last predicted particle, the Higgs, eluded detection for nearly fifty years. It was finally observed at CERN in July 2012, using the Large Hadron Collider, a seventeen-mile ring buried under the Franco-Swiss border. Peter Higgs, then eighty-three, wept at the announcement. The Higgs field explains why the other fundamental particles have the masses they do — a single particle at the foundation of everything we weigh.' },
        { type: 'h2', text: 'How we look' },
        { type: 'p', text: 'Particle physics lives on accelerators and detectors. The LHC at CERN is the largest, smashing protons at 13 TeV. Neutrino experiments (Super-K, IceCube, DUNE) probe the lightest of particles in underground tanks and Antarctic ice. Astroparticle experiments (Fermi, HESS) read cosmic gamma rays. Each scale of probe opens a different regime. The next machine — a proposed 100-km ring or a muon collider — is the subject of serious argument in the field right now.' },
        { type: 'interactive', key: 'particle-videos' },
        { type: 'h2', text: 'What is missing' },
        { type: 'p', text: 'The Standard Model does not include gravity. It does not explain dark matter, which makes up roughly a quarter of the universe. It does not explain dark energy, which makes up most of the rest. It does not explain why the universe is made of matter and not antimatter. It is the most successful theory physics has ever produced, and it is manifestly incomplete. The next century of the subject is the search for what replaces it.' },
      ],

      keyTerms: ['quark', 'lepton', 'boson', 'Standard Model', 'Higgs field', 'gauge symmetry', 'Feynman diagram'],

      resources: {
        videos: [
          {
            id: 'V5kgruUjVBs',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=V5kgruUjVBs',
            title: 'Quantum Invariance & The Origin of The Standard Model',
            channel: 'PBS Space Time',
            duration: '15:09',
            why: 'A rigorous overview in fifteen minutes. Covers the particle content and the gauge structure clearly.',
          },
          {
            id: 'RIg1Vh7uPyw',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=RIg1Vh7uPyw',
            title: 'What is a Higgs Boson?',
            channel: 'Fermilab / Don Lincoln',
            duration: '6:56',
            why: 'Fermilab senior scientist Don Lincoln\'s short explainer. Correct and clear, as all his videos are.',
          },
          {
            id: 'PHiyQID7SBs',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=PHiyQID7SBs',
            title: 'The Equation That Explains (Nearly) Everything!',
            channel: 'PBS Space Time',
            duration: '18:59',
            why: 'Matthew O\'Dowd unpacks the Standard Model Lagrangian — the single equation that encodes the whole theory.',
          },
        ],
        books: [
          {
            title: 'The Second Creation',
            author: 'Robert Crease and Charles Mann',
            year: 1986,
            url: '',
            why: 'The best popular history of twentieth-century particle physics. Classic, and still in print.',
          },
          {
            title: 'Deep Down Things',
            author: 'Bruce Schumm',
            year: 2004,
            url: '',
            why: 'A physicist\'s careful, algebra-free exposition of the gauge theories behind the Standard Model. Unusual and excellent.',
          },
          {
            title: 'The Particle at the End of the Universe',
            author: 'Sean Carroll',
            year: 2012,
            url: '',
            why: 'On the discovery of the Higgs boson. Well-paced popular science, with real physics content.',
          },
        ],
        articles: [
          {
            title: 'Standard Model',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Standard_Model',
            why: 'Comprehensive reference article with tables of particles, forces, and ongoing open questions.',
            year: null,
          },
          {
            title: 'The Higgs Boson',
            source: 'CERN',
            url: 'https://home.cern/science/physics/higgs-boson',
            why: 'CERN\'s own explainer, written by the laboratory that found the Higgs. Clear and authoritative.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Introduction to Particle Physics',
            provider: 'MIT OpenCourseWare — 8.701',
            url: 'https://ocw.mit.edu/courses/8-701-introduction-to-nuclear-and-particle-physics-fall-2020/',
            free: true,
            why: 'Graduate-level MIT course, full notes, problem sets. Demanding but complete.',
          },
        ],
        tools: [
          {
            title: 'CERN Open Data Portal',
            url: 'https://opendata.cern.ch/',
            why: 'Actual LHC data, released for public use, with tutorials on reproducing Higgs-discovery analyses yourself.',
          },
        ],
      },

      interactive: { kind: 'particles' },
      seeAlso: ['quantum', 'relativity', 'cosmology', 'atoms'],
      prereqs: ['quantum', 'em'],
      leadsTo: ['cosmology'],

      chapterActivity: 'An annual field trip to Brookhaven National Laboratory on Long Island — the Relativistic Heavy Ion Collider offers public tours in September and April.',

      examples: [{
        title: 'Charge of a proton from its quarks',
        problem: 'A proton is uud (two up quarks, one down quark). Up quark charge: +2/3. Down quark charge: −1/3. What is the proton\'s total charge?',
        steps: [
          { text: 'Add the quark charges.', math: '(+2/3) + (+2/3) + (−1/3) = +3/3 = +1' },
        ],
        answer: '+1, in units of elementary charge. Exactly what we measure.',
      }],
      practice: [
        { q: 'A neutron is ddu (two downs, one up). What is its charge (as a number)?', a: '0', acceptable: ['zero'], hint: '(−1/3) + (−1/3) + (+2/3) = ?', solution: 'Two downs contribute −2/3; one up contributes +2/3. Total: 0. Neutrons are neutral, as their name implies.', difficulty: 'easy' },
        { q: 'Which force binds quarks together inside a proton? (one word)', a: 'strong', acceptable: ['strong force', 'strong nuclear force', 'strong interaction'], hint: 'One of the four fundamental forces. Mediated by gluons.', solution: 'The strong force, mediated by gluons. Much stronger than electromagnetism at these scales — it has to overcome the electrostatic repulsion between same-sign quarks.', difficulty: 'easy' },
        { q: 'In what year was the Higgs boson discovered at CERN?', a: '2012', hint: 'July of that year — Peter Higgs wept at the announcement.', solution: '2012, by the ATLAS and CMS experiments at the LHC. Higgs himself, then 83, was in the audience.', difficulty: 'medium' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Standard_Model',
        'https://home.cern/science/physics/higgs-boson',
      ],
      verifiedAt: '2026-04-22',
    },

    cosmology: {
      id: 'cosmology',
      name: 'Cosmology',
      level: 'Advanced',
      dek: 'The universe as a single object — its age, its shape, its origin, and its strange accelerating fate.',
      readTime: '14 min',

      sections: ['Hubble at Mount Wilson', 'An expanding universe', 'The cosmic microwave background', 'Dark matter and dark energy', 'The honest edge'],
      body: [
        { type: 'lead', text: 'In 1923, Edwin Hubble stood at the hundred-inch telescope at Mount Wilson, above Pasadena, and photographed a faint smudge in the constellation Andromeda. He found in it a Cepheid variable star whose brightness let him calculate the distance: far beyond the Milky Way. The smudge was a galaxy of its own. The universe, it turned out, was enormous.' },
        { type: 'interactive', key: 'cosmology-deepdive' },
        { type: 'interactive', key: 'facts-cosmology' },
        { type: 'h2', text: 'An expanding universe' },
        { type: 'p', text: 'A few years later, Hubble noticed that almost every distant galaxy was moving away from us, and that the more distant ones were moving faster. Georges Lemaître, a Belgian priest and physicist, had already predicted exactly this from Einstein\'s field equations and proposed that the universe had begun in a compact "primeval atom." The theory was not popular at first. Fred Hoyle, trying to dismiss it on the BBC in 1949, called it the "Big Bang." The name stuck.' },
        { type: 'interactive', key: 'cosmology-diagram' },
        { type: 'h2', text: 'The cosmic microwave background' },
        { type: 'p', text: 'In 1964, two Bell Labs engineers named Penzias and Wilson, using a repurposed radar antenna in Holmdel, New Jersey, could not get rid of a hiss in their data. They cleaned the horn, including of pigeon droppings. The hiss remained. It was the cosmic microwave background — thermal radiation left over from roughly 380,000 years after the Big Bang, cooled to about 2.7 kelvin. The CMB has since been mapped at extraordinary precision by the COBE, WMAP, and Planck satellites; its tiny temperature fluctuations encode the structure of the early universe.' },
        { type: 'h2', text: 'Dark matter and dark energy' },
        { type: 'p', text: 'Galaxies rotate as if they contain roughly five times more mass than we can see. The universe\'s expansion, measured using distant supernovae in the late 1990s, is accelerating. These are the two great anomalies of modern cosmology. We call them dark matter and dark energy because it is better than calling them "matter we cannot find" and "repulsion we cannot explain." Together they make up roughly 95 percent of the contents of the universe, and we have almost no idea what they are.' },
        { type: 'p', text: 'The candidates for dark matter include weakly interacting massive particles (WIMPs), axions, sterile neutrinos, and primordial black holes. Direct-detection experiments like XENON and LUX have ruled out large regions of the WIMP parameter space without finding anything. Dark energy is the more radical mystery: it behaves like a cosmological constant — a kind of intrinsic energy of empty space — but its measured value is smaller than quantum field theory naively predicts by a factor of roughly 10¹²⁰. This is the worst prediction in the history of physics, and we have no solid idea why.' },
        { type: 'interactive', key: 'cosmology-videos' },
        { type: 'h2', text: 'The honest edge' },
        { type: 'p', text: 'The Standard Model of cosmology fits the data from the CMB, from supernovae, from galaxy surveys, to a remarkable degree. But the questions it leaves open are not small ones. What happened before inflation? Is the universe finite? Will the expansion continue forever? These are the questions on which the next generation of telescopes — the James Webb, the Vera Rubin Observatory, LISA — are staked.' },
        { type: 'quote', text: 'Not only is the universe stranger than we imagine, it is stranger than we can imagine.', cite: 'Attributed to J. B. S. Haldane' },
      ],

      keyTerms: ['Big Bang', 'redshift', 'cosmic microwave background', 'dark matter', 'dark energy', 'inflation', 'Hubble\'s law'],

      resources: {
        videos: [
          {
            id: 'aPStj2ZuXug',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=aPStj2ZuXug',
            title: 'Why the Big Bang Definitely Happened',
            channel: 'PBS Space Time',
            duration: '11:23',
            why: 'A careful, mathematics-light overview of the evidence for the Big Bang theory — what it claims and what it does not.',
          },
          {
            id: 'RUE_LUqcTvM',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=RUE_LUqcTvM',
            title: 'What Does Dark Energy Really Do?',
            channel: 'PBS Space Time',
            duration: '8:13',
            why: 'A short, rigorous introduction to the 1998 supernova result and what followed.',
          },
          {
            id: 'pSHVbLPWA28',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=pSHVbLPWA28',
            title: 'How Big is the Universe?',
            channel: 'Kurzgesagt — In a Nutshell',
            duration: '7:58',
            why: 'The scale of things, gorgeously animated. A palate cleanser between lectures.',
          },
        ],
        books: [
          {
            title: 'The First Three Minutes',
            author: 'Steven Weinberg',
            year: 1977,
            url: '',
            why: 'A Nobel laureate\'s popular account of the first moments of the universe. Forty years old and still correct in its essentials.',
          },
          {
            title: 'The Big Picture',
            author: 'Sean Carroll',
            year: 2016,
            url: '',
            why: 'A contemporary Caltech cosmologist on how physics actually fits together — from particles to consciousness.',
          },
          {
            title: 'A Brief History of Time',
            author: 'Stephen Hawking',
            year: 1988,
            url: '',
            why: 'Still the book most often picked up by amateurs and most often finished. Dated in places, classic in total.',
          },
        ],
        articles: [
          {
            title: 'Big Bang',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Big_Bang',
            why: 'Thorough and well-cited reference, with up-to-date discussion of Planck-era cosmology.',
            year: null,
          },
          {
            title: 'Cosmology',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/cosmology/',
            why: 'What cosmology is, as a science — with particular attention to the fine-tuning and multiverse debates.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Cosmology',
            provider: 'Stanford / Theoretical Minimum',
            url: 'https://theoreticalminimum.com/courses/cosmology/2013/winter',
            free: true,
            why: 'Susskind\'s full cosmology course. Presumes calculus and a little general relativity; builds everything else.',
          },
        ],
        tools: [
          {
            title: 'NASA / IPAC Extragalactic Database',
            url: 'https://ned.ipac.caltech.edu/',
            why: 'The reference database for extragalactic astronomy — look up any galaxy by name, see the papers and images.',
          },
          {
            title: 'Astronomy Picture of the Day',
            url: 'https://apod.nasa.gov/apod/astropix.html',
            why: 'A new astronomical image, with a short annotation by a working astronomer, every day since 1995.',
          },
        ],
      },

      interactive: { kind: 'cosmos' },
      seeAlso: ['relativity', 'particle', 'bigbang', 'galaxies'],
      prereqs: ['relativity', 'quantum'],
      leadsTo: [],

      chapterActivity: 'Monthly rooftop observation nights at the Amateur Astronomers Association of New York\'s site on Pier 1 in Brooklyn Bridge Park — clear-sky viewing with club telescopes, followed by a short talk.',

      examples: [{
        title: 'Age of the universe from H₀',
        problem: 'Using Hubble\'s constant H₀ ≈ 70 km/s/Mpc, estimate the age of the universe by taking 1/H₀. (Assume uniform expansion — this ignores expansion-rate history.)',
        steps: [
          { text: 'Convert H₀ to SI (1/s).', math: 'H₀ = 70 km/s/Mpc; 1 Mpc ≈ 3.086×10¹⁹ km; H₀ ≈ 2.27×10⁻¹⁸ s⁻¹' },
          { text: 'Invert.', math: '1/H₀ ≈ 4.4×10¹⁷ s' },
          { text: 'Convert to years.', math: '÷ (3.15×10⁷ s/yr) ≈ 1.4×10¹⁰ yr' },
        ],
        answer: '~14 billion years. Matches the true value (13.8 Gyr) remarkably well for a back-of-envelope calculation.',
      }],
      practice: [
        { q: 'Temperature of the cosmic microwave background today, in kelvin (to 3 sig figs)?', a: '2.73', acceptable: ['2.725', '2.73 K'], hint: 'Penzias and Wilson\'s hiss.', solution: '2.725 K — the cooled afterglow of the hot early universe, measured to remarkable precision by COBE, WMAP, and Planck.', difficulty: 'easy' },
        { q: 'The observed accelerating expansion of the universe (1998) is attributed to a mysterious component called dark ___ (one word).', a: 'energy', acceptable: ['dark energy'], hint: 'Not matter — matter would slow expansion.', solution: 'Dark energy. Makes up ~68% of the total energy density. Its best current description is Einstein\'s cosmological constant Λ.', difficulty: 'easy' },
        { q: 'The CMB is radiation from about how many years after the Big Bang (in thousands, e.g., "380")?', a: '380', acceptable: ['380,000', '380000', '~380'], hint: 'When the universe cooled enough for protons + electrons → neutral hydrogen. Photons then streamed freely.', solution: '~380,000 years — the epoch of "recombination," when the universe first became transparent to light.', difficulty: 'medium' },
      ],

      sources: [
        'https://en.wikipedia.org/wiki/Big_Bang',
        'https://plato.stanford.edu/entries/cosmology/',
        'https://apod.nasa.gov/apod/astropix.html',
      ],
      verifiedAt: '2026-04-22',
    },

  },
};
