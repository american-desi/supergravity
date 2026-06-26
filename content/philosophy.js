// content/philosophy.js
// Batch: B04-humanities
// Last updated: 2026-04-22 by BATCH B04-humanities

window.CONTENT = window.CONTENT || {};
window.CONTENT.philosophy = {
  subjectId: 'philosophy',
  version: 1,
  lastUpdated: '2026-04-22',
  curator: 'BATCH B04-humanities',
  topics: {

    ethics: {
      id: 'ethics',
      name: 'Ethics',
      level: 'Beginner',
      dek: 'The two-and-a-half-thousand-year argument about how a person should live and what we owe each other.',
      readTime: '12 min',

      sections: ['The three families', 'Virtue', 'Duty', 'Consequence', 'Living with the disagreement'],
      body: [
        { type: 'lead', text: 'Outside an Athenian courtroom in 399 BCE, a seventy-year-old stonemason named Socrates was sentenced to death for corrupting the city\'s youth. He could have fled; friends had arranged the horses. He drank the hemlock instead, and his student Plato wrote the scene down. The question at stake — what makes an action right, even when it costs you — is the question ethics has been arguing about ever since.' },
        { type: 'h2', text: 'Three families of answer' },
        { type: 'p', text: 'Western moral philosophy has, for most of its history, answered the question three different ways. Virtue ethics, inherited from Aristotle, says that the right act is the one a good person would do — and that becoming a good person is a lifelong project of habituation. Deontology, inherited from Kant, says that there are duties we are bound to regardless of consequence — do not lie, do not treat people as mere means — and that a moral act is one done from such a duty. Consequentialism, most famously utilitarianism (Bentham, Mill), says the right act is the one that produces the most well-being. Each family has a long tradition, a standard objection, and a contemporary revival.' },
        { type: 'h2', text: 'Virtue: character over rule' },
        { type: 'p', text: 'Aristotle\'s Nicomachean Ethics argues that we become courageous by doing courageous acts, honest by telling the truth. Character is the accumulation of practice. The goal — eudaimonia, usually translated "flourishing" — is not momentary happiness but a life well lived. The revival of virtue ethics in the twentieth century (Anscombe, Foot, MacIntyre) rejected the idea that morality could be reduced to a rulebook and put the virtuous person back at the center.' },
        { type: 'h2', text: 'Duty: Kant\'s hard rules' },
        { type: 'p', text: 'Immanuel Kant, writing in Königsberg in the 1780s, thought the right act was the one that you could will to be a universal law — the Categorical Imperative. Lying about a murderer\'s location to save a friend? Kant says no, on the famous cold reading; the intuition most of us have is to lie. The argument about that case is the argument about whether any rule can be kept without exception when other lives are on the line.' },
        { type: 'h2', text: 'Consequence: the greatest good' },
        { type: 'p', text: 'Jeremy Bentham and John Stuart Mill, writing in nineteenth-century England, proposed that the morally best act is the one that produces the most happiness for the most people. The great advantage of the view is its clarity; the great difficulty is that it can ask you to do terrible things if the sums come out right. The trolley problem — divert a train to kill one person instead of five — is a laboratory version of that difficulty, and philosophers have been arguing about it for fifty years.' },
        { type: 'h2', text: 'Why the disagreement is not going away' },
        { type: 'p', text: 'The three families capture three real things about moral life — character matters, rules matter, consequences matter — and no one of them alone matches our full intuitions. A mature moral thinker moves between them. Ethics is not a solved subject but a practice: reading the hard cases, weighing the reasons, trying to act better than you did last month.' },
        { type: 'quote', text: 'An unexamined life is not worth living.', cite: 'Socrates, as reported by Plato in the Apology' },
      ],

      keyTerms: ['virtue ethics', 'deontology', 'utilitarianism', 'eudaimonia', 'Categorical Imperative', 'trolley problem', 'moral realism', 'metaethics'],

      resources: {
        videos: [
          {
            id: 'kBdfcR-8hEY',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=kBdfcR-8hEY',
            title: 'Justice: What\'s the Right Thing to Do? (Harvard, Michael Sandel) — Lecture 1',
            channel: 'Harvard',
            duration: '55:12',
            why: 'The first of twelve lectures in Sandel\'s famous Harvard course. The single best introduction to normative ethics on video.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@crashcourse',
            title: 'Crash Course Philosophy (season on ethics)',
            channel: 'CrashCourse',
            duration: 'variable',
            why: 'Hank Green\'s season on moral philosophy — ten-minute episodes on virtue, Kant, utilitarianism, metaethics.',
          },
          {
            id: 'ZyECfV__YBc',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=ZyECfV__YBc',
            title: 'The Trolley Problem (Big Think)',
            channel: 'Big Think',
            duration: '5:43',
            why: 'A crisp summary of the most famous ethical thought experiment.',
          },
        ],
        books: [
          {
            title: 'Nicomachean Ethics',
            author: 'Aristotle',
            year: -350,
            url: 'https://www.gutenberg.org/ebooks/8438',
            why: 'The founding text of virtue ethics. Read Book I on eudaimonia at minimum.',
          },
          {
            title: 'Groundwork of the Metaphysics of Morals',
            author: 'Immanuel Kant',
            year: 1785,
            url: 'https://www.gutenberg.org/ebooks/5682',
            why: 'Kant\'s short, demanding book in which the Categorical Imperative is first laid out.',
          },
          {
            title: 'Justice: What\'s the Right Thing to Do?',
            author: 'Michael J. Sandel',
            year: 2009,
            url: '',
            why: 'The book of Sandel\'s Harvard course — the most accessible introduction to contemporary normative ethics in print.',
          },
        ],
        articles: [
          {
            title: 'Virtue Ethics',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/ethics-virtue/',
            why: 'Rosalind Hursthouse\'s entry. The place to go second, after Sandel.',
            year: 2022,
          },
          {
            title: 'Kant\'s Moral Philosophy',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/kant-moral/',
            why: 'Robert Johnson and Adam Cureton\'s long, careful entry on the Categorical Imperative.',
            year: 2022,
          },
          {
            title: 'Consequentialism',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/consequentialism/',
            why: 'Walter Sinnott-Armstrong on utilitarianism and its variants.',
            year: 2023,
          },
        ],
        courses: [
          {
            title: 'Justice (Harvard)',
            provider: 'edX (Harvard, Michael Sandel)',
            url: 'https://www.edx.org/learn/ethics/harvard-university-justice',
            free: true,
            why: 'Sandel\'s free online version of his famous course. Twelve lectures; take them in order.',
          },
        ],
        primarySources: [
          {
            title: 'Plato\'s Apology',
            url: 'https://www.gutenberg.org/ebooks/1656',
            why: 'Socrates\' defense speech at his trial. Twenty pages; still the best entry to ancient moral thought.',
          },
        ],
      },

      seeAlso: ['greeks', 'modern_phil', 'metaphysics'],
      prereqs: [],
      leadsTo: ['epistemology', 'metaphysics', 'logic'],

      chapterActivity: 'A monthly ethics reading group at Brooklyn Public Library\'s central branch — one hard case each session, discussion led by a volunteer professor or lawyer from the neighborhood.',

      sources: [
        'https://plato.stanford.edu/entries/ethics-virtue/',
        'https://plato.stanford.edu/entries/kant-moral/',
        'https://plato.stanford.edu/entries/consequentialism/',
      ],
      verifiedAt: '2026-04-22',
    },

    epistemology: {
      id: 'epistemology',
      name: 'Epistemology',
      level: 'Intermediate',
      dek: 'The branch of philosophy that asks what knowledge is, how we get it, and why most of what we believe cannot count.',
      readTime: '12 min',

      sections: ['What counts as knowing', 'The Gettier problem', 'Empiricists vs rationalists', 'The skeptic at the door'],
      body: [
        { type: 'lead', text: 'In 1963, a philosopher at Wayne State named Edmund Gettier published a three-page paper that, for most of the next sixty years, set the agenda for epistemology. The paper gave two short examples. Each showed a case in which a person held a belief that was true, and had excellent justification for the belief, and yet would not — on any normal understanding — count as knowing the thing. Three pages. Two examples. Most epistemologists have been trying to patch the definition ever since.' },
        { type: 'h2', text: 'The classical definition' },
        { type: 'p', text: 'From Plato\'s Theaetetus onward, the standard Western definition of knowledge was "justified true belief." To know that p is to believe p, to have p be true, and to have a good reason for the belief. Each of the three conditions seems necessary. You cannot know something false. You cannot know something you don\'t believe. And merely guessing right does not look like knowledge.' },
        { type: 'h2', text: 'Gettier\'s problem' },
        { type: 'p', text: 'Gettier\'s cases showed that the three conditions are not sufficient. Suppose you see a clock in the train station that reads 3:14; you believe, with justification, that it is 3:14; and it happens to be 3:14. But the clock is broken, frozen at 3:14 since last Tuesday. You have a justified true belief — and you do not know. Dozens of attempts to patch the definition (adding a fourth condition, replacing "justification") have produced dozens of counter-examples. The problem is alive.' },
        { type: 'h2', text: 'Where knowledge comes from' },
        { type: 'p', text: 'The seventeenth and eighteenth centuries staged a long argument about sources. Rationalists (Descartes, Spinoza, Leibniz) held that some knowledge is available to reason alone — mathematics, logic, the existence of the self. Empiricists (Locke, Berkeley, Hume) held that all knowledge comes, ultimately, through the senses. Kant tried to combine the two in his Critique of Pure Reason (1781) and produced a philosophy whose difficulty is still proverbial. Contemporary cognitive science has, in its quiet way, settled some of the old disputes: we have innate structures for language and certain kinds of reasoning, and we also learn an enormous amount from experience.' },
        { type: 'h2', text: 'The skeptic at the door' },
        { type: 'p', text: 'Every epistemology has to answer the skeptic. How do you know you are not dreaming? How do you know your memories are reliable? How do you know there is a world outside your mind at all? Descartes posed the demon who might be deceiving you; the movie The Matrix updated the demon to a computer simulation. The honest answer is that we cannot defeat the skeptic on his own terms — but we can notice that he has given us a word, "know," that we already use, and that our practice of using it contains the rough outline of what we mean.' },
      ],

      keyTerms: ['justified true belief', 'Gettier problem', 'empiricism', 'rationalism', 'skepticism', 'a priori', 'reliabilism', 'internalism'],

      resources: {
        videos: [
          {
            id: 'Il9yAsBdSWw',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=Il9yAsBdSWw',
            title: 'Intro to Epistemology',
            channel: 'Crash Course Philosophy #7 (Hank Green)',
            duration: '10:26',
            why: 'Hank Green\'s ten-minute entry to the subject. Good orientation before anything longer.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@KaneB',
            title: 'Kane B — philosophy lecture series',
            channel: 'Kane B',
            duration: 'variable',
            why: 'A working academic\'s careful lecture series on epistemology topics, from Gettier to contextualism.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.wi-phi.com/',
            title: 'Wireless Philosophy (wi-phi)',
            channel: 'Wireless Philosophy',
            duration: 'variable',
            why: 'Yale\'s collaborative video project — short animated lectures by working philosophers. The epistemology playlist covers Gettier, skepticism, and testimony.',
          },
        ],
        books: [
          {
            title: 'An Enquiry Concerning Human Understanding',
            author: 'David Hume',
            year: 1748,
            url: 'https://www.gutenberg.org/ebooks/9662',
            why: 'The short, brilliant Humean statement of radical empiricism. Section IV on causation is the most-taught chapter in modern epistemology.',
          },
          {
            title: 'Critique of Pure Reason',
            author: 'Immanuel Kant',
            year: 1781,
            url: 'https://www.gutenberg.org/ebooks/4280',
            why: 'The hardest book in the Western canon, but unavoidable. Read the Prolegomena first; the full Critique is a lifetime project.',
          },
          {
            title: 'Epistemology: A Contemporary Introduction',
            author: 'Robert Audi',
            year: 1998,
            url: '',
            why: 'The standard textbook. Careful, ecumenical, well-organized. Current editions reflect the post-Gettier literature.',
          },
        ],
        articles: [
          {
            title: 'Epistemology',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/epistemology/',
            why: 'Matthias Steup and Ram Neta\'s overview entry. Read once for orientation; come back for depth.',
            year: 2024,
          },
          {
            title: 'The Analysis of Knowledge',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/knowledge-analysis/',
            why: 'Jonathan Ichikawa and Matthias Steup on the Gettier industry.',
            year: null,
          },
          {
            title: 'Epistemology',
            source: 'Internet Encyclopedia of Philosophy',
            url: 'https://iep.utm.edu/epistemo/',
            why: 'David Truncellito\'s IEP entry — a second angle on the same material.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Introduction to Philosophy',
            provider: 'Coursera (University of Edinburgh)',
            url: 'https://www.coursera.org/learn/philosophy',
            free: true,
            why: 'Edinburgh\'s free survey course; the epistemology unit is especially good.',
          },
        ],
        primarySources: [
          {
            title: 'Gettier, "Is Justified True Belief Knowledge?" (1963)',
            url: 'https://philpapers.org/archive/GETIJT-2.pdf',
            why: 'The paper itself. Three pages. Read it cold.',
          },
        ],
      },

      seeAlso: ['ethics', 'metaphysics', 'logic'],
      prereqs: ['ethics'],
      leadsTo: ['metaphysics', 'modern_phil'],

      chapterActivity: 'A quarterly reading group on "Three Short Papers" in the NYPL Milstein Room — each session covers one paper (Gettier, Nagel\'s "What Is It Like to Be a Bat?", Williamson on knowledge).',

      sources: [
        'https://plato.stanford.edu/entries/epistemology/',
        'https://plato.stanford.edu/entries/knowledge-analysis/',
        'https://iep.utm.edu/epistemo/',
      ],
      verifiedAt: '2026-04-22',
    },

    metaphysics: {
      id: 'metaphysics',
      name: 'Metaphysics',
      level: 'Advanced',
      dek: 'The oldest questions in philosophy — what exists, what could have been, and what it means to be a thing at all.',
      readTime: '12 min',

      sections: ['The name is Aristotle\'s', 'Being and categories', 'Identity over time', 'Free will'],
      body: [
        { type: 'lead', text: 'Around 330 BCE, Aristotle died leaving behind a set of fourteen books on the foundations of being. His later editors did not know what to call them, so they placed them on the shelf after (meta) the Physics, and the accidental title stuck. Metaphysics, in Aristotle\'s hands, was the study of "being qua being" — the most general questions a thinking person can ask. Twenty-three hundred years later, the subject still means approximately the same thing.' },
        { type: 'h2', text: 'What the subject asks' },
        { type: 'p', text: 'Metaphysics asks what there is, at the most basic level. Are there only physical things, or are there also minds, numbers, possibilities, moral facts? What makes something the same thing over time: is the body you have now the same body you had at six? What is a cause? What is it to be a person? The questions sound abstract, but they touch every other subject. A theory of free will shapes a theory of punishment. A theory of personal identity shapes the ethics of consent. A theory of causation is the foundation of every science.' },
        { type: 'h2', text: 'The classical categories' },
        { type: 'p', text: 'Aristotle sorted beings into ten categories: substance, quantity, quality, relation, place, time, position, state, action, passion. The modern revival (after the linguistic turn of mid-twentieth-century philosophy) produced its own categories — properties, events, states of affairs, possible worlds. The question is less "which list is correct?" than "what follows from treating, say, events as primary?" Much of contemporary analytic metaphysics is constructed, quietly, on these choices.' },
        { type: 'h2', text: 'The ship of Theseus' },
        { type: 'p', text: 'Plutarch records a puzzle: the ship Theseus sailed from Crete was preserved at Athens, but over centuries every plank was replaced. Is it the same ship? Now imagine the old planks were gathered up and rebuilt into a second ship. Which of the two is Theseus\'s? Hobbes saw the problem; Locke connected it to personal identity; Derek Parfit in the twentieth century argued that questions about identity over time are often less important than we think. The paradox is a toy; the implications (what makes you "you") are not.' },
        { type: 'h2', text: 'The free-will tangle' },
        { type: 'p', text: 'If every event has a physical cause, and every cause goes back before you were born, then your decision to read this sentence was fixed long ago. If your decision was fixed long ago, in what sense were you free? Philosophers split: hard determinists (there is no free will), libertarians (there is free will, and determinism is false or at least incomplete), compatibilists (free will is compatible with determinism, if we understand "free" carefully). The argument is more than two thousand years old and still a live topic in philosophy, neuroscience, and law.' },
        { type: 'callout', text: 'Most contemporary metaphysics is done in analytic style — careful, incremental, fond of toy examples. If you want the older, more systematic style, go back to Aristotle, Aquinas, Leibniz, and Heidegger.' },
      ],

      keyTerms: ['being', 'substance', 'identity', 'possibility', 'causation', 'free will', 'determinism', 'modality'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@crashcoursephil',
            title: 'Crash Course Philosophy — metaphysics episodes',
            channel: 'CrashCourse',
            duration: 'variable',
            why: 'Hank Green\'s episodes on free will, personal identity, and the mind-body problem. Use as orientation.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.wi-phi.com/',
            title: 'Wireless Philosophy — metaphysics playlist',
            channel: 'Wireless Philosophy',
            duration: 'variable',
            why: 'Short animated lectures by working philosophers on free will, personal identity, time.',
          },
          {
            id: 'qeiFsCKLoZs',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=qeiFsCKLoZs',
            title: 'The Ship of Theseus',
            channel: 'Kurzgesagt – In a Nutshell',
            duration: '10:25',
            why: 'Kurzgesagt on identity over time, visualized. A good entry for readers who want the intuitive shape.',
          },
        ],
        books: [
          {
            title: 'Metaphysics',
            author: 'Aristotle',
            year: -330,
            url: 'https://classics.mit.edu/Aristotle/metaphysics.html',
            why: 'The founding text, free in translation at the Internet Classics Archive (MIT). Book I is the best entry.',
          },
          {
            title: 'Reasons and Persons',
            author: 'Derek Parfit',
            year: 1984,
            url: '',
            why: 'The most important contemporary work of metaphysics in English. Parfit\'s thought experiments — the teletransporter, the branching selves — reshape how you think about identity.',
          },
          {
            title: 'Metaphysics: A Contemporary Introduction',
            author: 'Michael J. Loux and Thomas M. Crisp',
            year: 1998,
            url: '',
            why: 'The standard textbook in the field. Clear, comprehensive, demanding but doable.',
          },
        ],
        articles: [
          {
            title: 'Metaphysics',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/metaphysics/',
            why: 'Peter van Inwagen and Meghan Sullivan\'s overview entry. Read cold for orientation.',
            year: 2023,
          },
          {
            title: 'Personal Identity',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/identity-personal/',
            why: 'Eric T. Olson on the philosophical problem of personal identity over time.',
            year: null,
          },
          {
            title: 'Free Will',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/freewill/',
            why: 'Timothy O\'Connor and Christopher Franklin\'s comprehensive survey.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Introduction to Philosophy',
            provider: 'Coursera (Edinburgh)',
            url: 'https://www.coursera.org/learn/philosophy',
            free: true,
            why: 'Edinburgh\'s free survey. Week 3 is on metaphysics and free will.',
          },
        ],
        primarySources: [
          {
            title: 'Descartes, Meditations on First Philosophy',
            url: 'https://www.gutenberg.org/ebooks/23306',
            why: 'The six short meditations that launched modern metaphysics. Read Meditations I and II at minimum.',
          },
        ],
      },

      seeAlso: ['epistemology', 'modern_phil', 'ethics'],
      prereqs: ['epistemology'],
      leadsTo: ['logic'],

      chapterActivity: 'Evenings at Housing Works Bookstore in SoHo, reading Parfit\'s Reasons and Persons chapter by chapter over a winter.',

      sources: [
        'https://plato.stanford.edu/entries/metaphysics/',
        'https://plato.stanford.edu/entries/identity-personal/',
        'https://plato.stanford.edu/entries/freewill/',
      ],
      verifiedAt: '2026-04-22',
    },

    logic: {
      id: 'logic',
      name: 'Logic',
      level: 'Intermediate',
      dek: 'The formal study of valid reasoning — Aristotle\'s syllogism, Boole\'s algebra, and the twentieth-century explosion.',
      readTime: '12 min',

      sections: ['Aristotle\'s syllogism', 'Boole\'s algebra', 'Frege and the revolution', 'What logic does'],
      body: [
        { type: 'lead', text: 'In 1879, a professor of mathematics at Jena named Gottlob Frege published a slim book called the Begriffsschrift — "concept-writing." Almost nobody read it at the time. In it, Frege had done something no philosopher since Aristotle had managed: he had given logic a new foundation. Twentieth-century philosophy, computer science, and artificial intelligence are, in a deep sense, its children.' },
        { type: 'h2', text: 'Aristotle\'s syllogism' },
        { type: 'p', text: 'Aristotle\'s Prior Analytics, around 350 BCE, laid out the first formal logic. The syllogism — two premises and a conclusion — is the basic unit. All humans are mortal; Socrates is a human; therefore Socrates is mortal. Aristotle catalogued which patterns of syllogism are valid (the conclusion follows from the premises) and which are not. For more than two thousand years this was, essentially, the whole of formal logic.' },
        { type: 'h2', text: 'Boole\'s algebra' },
        { type: 'p', text: 'In 1854 a self-taught English mathematician named George Boole published The Laws of Thought, translating the ancient logic into an algebra. AND, OR, NOT — operations on propositions — behave, Boole showed, like arithmetic operations on 0s and 1s. The move looks modest until you notice that every digital computer ever built runs on Boolean algebra. Every search engine\'s AND/OR/NOT query, every electrical circuit, every database filter uses Boole\'s system directly.' },
        { type: 'h2', text: 'Frege and the modern turn' },
        { type: 'p', text: 'Frege added what Aristotle and Boole had missed: a way to handle quantifiers — "all," "some," "there exists." His notation was hideous and nobody adopted it, but the system was recast in Peano\'s cleaner symbols and then in Whitehead and Russell\'s Principia Mathematica (1910–13). By the 1930s, Gödel\'s incompleteness theorems had shown that any sufficiently powerful formal system contains statements it can neither prove nor disprove — a result that is the single most philosophically important theorem of the twentieth century.' },
        { type: 'h2', text: 'What a student of logic actually learns' },
        { type: 'p', text: 'An introductory course covers propositional logic (truth tables, validity, the connectives), predicate logic (variables, quantifiers), and usually the beginnings of modal logic (necessity, possibility). A second course introduces soundness, completeness, decidability — the properties a formal system can or cannot have. The utility is not mainly in winning arguments. It is in seeing the structure of an argument, finding where it depends on what, and noticing which of your beliefs are held up by which reasons.' },
      ],

      keyTerms: ['syllogism', 'validity', 'soundness', 'propositional logic', 'predicate logic', 'Boolean algebra', 'Gödel\'s theorem', 'modal logic'],

      resources: {
        videos: [
          {
            id: 'evbWrE4dqUE',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=evbWrE4dqUE',
            title: 'How to Argue — Philosophical Reasoning (Crash Course Philosophy #2)',
            channel: 'CrashCourse',
            duration: '10:21',
            why: 'Hank Green on validity, soundness, and the basic shape of a logical argument.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@PhilosophyOverdose',
            title: 'Philosophy Overdose — logic and analytic philosophy (channel)',
            channel: 'Philosophy Overdose',
            duration: 'variable',
            why: 'An archive of filmed lectures by major analytic philosophers — Quine, Putnam, Kripke. For when the textbook is not enough.',
          },
          {
            id: 'HeQX2HjkcNo',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=HeQX2HjkcNo',
            title: 'Math\'s Fundamental Flaw (Veritasium on Gödel)',
            channel: 'Veritasium',
            duration: '34:01',
            why: 'The best visual introduction to Gödel\'s incompleteness theorems on the internet.',
          },
        ],
        books: [
          {
            title: 'Forallx: An Introduction to Formal Logic',
            author: 'P. D. Magnus and Tim Button',
            year: 2020,
            url: 'https://forallx.openlogicproject.org/',
            why: 'Free, open-source, widely adopted introductory textbook. Replaces the old Bergmann/Moor.',
          },
          {
            title: 'Logic: A Very Short Introduction',
            author: 'Graham Priest',
            year: 2017,
            url: '',
            why: 'A hundred and fifty pages by a working logician. The best short introduction to what logic is about.',
          },
          {
            title: 'Gödel, Escher, Bach',
            author: 'Douglas Hofstadter',
            year: 1979,
            url: '',
            why: 'The Pulitzer-winning meditation on Gödel, self-reference, and the possibility of artificial minds. Demanding, playful, unmissable.',
          },
        ],
        articles: [
          {
            title: 'Classical Logic',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/logic-classical/',
            why: 'Stewart Shapiro and Teresa Kouri Kissel on first-order logic. The place to go after a textbook.',
            year: 2022,
          },
          {
            title: 'Gödel\'s Incompleteness Theorems',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/goedel-incompleteness/',
            why: 'Panu Raatikainen on what the theorems actually say — and what they don\'t.',
            year: null,
          },
          {
            title: 'Logic',
            source: 'Internet Encyclopedia of Philosophy',
            url: 'https://iep.utm.edu/logic/',
            why: 'IEP\'s overview, useful as a second angle.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Introduction to Logic',
            provider: 'Coursera (Stanford, Michael Genesereth)',
            url: 'https://www.coursera.org/learn/logic-introduction',
            free: true,
            why: 'Stanford\'s free introductory logic course. Rigorous; use alongside Forallx.',
          },
          {
            title: 'Paradox and Infinity',
            provider: 'edX (MIT, Agustín Rayo)',
            url: 'https://www.edx.org/learn/mathematics/massachusetts-institute-of-technology-paradox-and-infinity',
            free: true,
            why: 'MIT\'s free course on paradoxes — Russell, Gödel, Cantor. Good second course after introductory logic.',
          },
        ],
        primarySources: [
          {
            title: 'Aristotle\'s Prior Analytics',
            url: 'https://classics.mit.edu/Aristotle/prior.html',
            why: 'The founding text of formal logic. Book I is the place to start.',
          },
        ],
      },

      seeAlso: ['ethics', 'epistemology', 'metaphysics'],
      prereqs: ['epistemology'],
      leadsTo: ['modern_phil'],

      chapterActivity: 'A monthly puzzle night at The Brooklyn Brainery, working through Raymond Smullyan\'s knights-and-knaves problems over pints.',

      sources: [
        'https://plato.stanford.edu/entries/logic-classical/',
        'https://plato.stanford.edu/entries/goedel-incompleteness/',
        'https://forallx.openlogicproject.org/',
      ],
      verifiedAt: '2026-04-22',
    },

    greeks: {
      id: 'greeks',
      name: 'The Greeks',
      level: 'Intermediate',
      dek: 'Four hundred years of argument at Athens that invented philosophy as a continuous activity.',
      readTime: '13 min',

      sections: ['Before Socrates', 'Socrates and Plato', 'Aristotle\'s system', 'The Hellenistic schools'],
      body: [
        { type: 'lead', text: 'In the sixth century BCE, on the coast of what is now Turkey, a merchant named Thales began to ask a question that nobody before him seems to have asked in quite that form: what is everything, underneath, actually made of? He answered water; his student Anaximander answered "the unbounded"; Anaximenes answered air. They were all wrong. But the question was new, and the way they argued about it was newer. Philosophy, as a continuous tradition, starts here.' },
        { type: 'h2', text: 'The Presocratics' },
        { type: 'p', text: 'For about a century and a half before Socrates, Greek thinkers — the Presocratics — were inventing natural philosophy. Heraclitus taught that everything flows; Parmenides, in a strange philosophical poem, argued the opposite. Pythagoras built a mystical-mathematical community. Empedocles proposed four elements — earth, air, fire, water — and two forces, love and strife. Democritus, an exact contemporary of Socrates, reasoned his way to atoms. Most of what they wrote is lost; what survives, in a few hundred fragments, is enough to make the period one of the most inventive in intellectual history.' },
        { type: 'h2', text: 'Socrates, Plato, and the Academy' },
        { type: 'p', text: 'Socrates (469–399 BCE) wrote nothing. We know him through Plato, his student, and through Xenophon and Aristophanes, who disliked him. His method was to buttonhole the confident, ask them what they meant by justice or courage, and demonstrate that they did not know. The dialogues in which Plato recorded — or reconstructed — these conversations became the founding documents of Western philosophy. Plato\'s Academy, the school he founded in a grove outside Athens, ran for nine hundred years. Its central text, the Republic, is an argument for philosopher-kings, the education of the guardians, and the theory of Forms — a parallel world of eternal, non-physical essences that the physical world only imitates.' },
        { type: 'h2', text: 'Aristotle, Plato\'s ablest student' },
        { type: 'p', text: 'Aristotle was in the Academy for twenty years before leaving to tutor the young Alexander of Macedon and, later, to found his own school, the Lyceum. Where Plato looked upward to the Forms, Aristotle looked at the world. His Nicomachean Ethics, Politics, Metaphysics, Physics, Poetics, and On the Soul together cover more territory than any other single author before the modern period. He was still the standard authority in European universities when Galileo began to look through a telescope.' },
        { type: 'h2', text: 'The Hellenistic schools' },
        { type: 'p', text: 'After Alexander, four main schools split the Greek philosophical world. Epicureans argued that pleasure — modest, considered pleasure — was the goal of life, and that the gods do not interfere. Stoics argued that virtue alone is sufficient for the good life, and that the universe is rationally ordered. Skeptics argued that nothing can be known for certain and that suspending judgment brings peace. Cynics, led by Diogenes, lived on the street to demonstrate the artificiality of social convention. The modern revival of Stoicism — Ryan Holiday, Massimo Pigliucci — descends directly from this period.' },
      ],

      keyTerms: ['Socrates', 'Plato', 'Aristotle', 'Forms', 'Academy', 'Lyceum', 'Stoicism', 'Epicureanism'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@wiphi',
            title: 'Wireless Philosophy — Ancient Philosophy series',
            channel: 'Wireless Philosophy',
            duration: 'variable',
            why: 'Short animated lectures by working philosophers. The ancient series covers Socrates through Aristotle.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@thegreatphilosophers',
            title: 'The School of Life — ancient philosophers (channel)',
            channel: 'The School of Life',
            duration: 'variable',
            why: 'Short, well-illustrated introductions to Plato, Aristotle, Epicurus, the Stoics.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://oyc.yale.edu/classics/clcv-205',
            title: 'Introduction to Ancient Greek History',
            channel: 'Open Yale Courses (Donald Kagan)',
            duration: 'variable',
            why: 'Kagan\'s lectures give the political context in which the philosophy happened.',
          },
        ],
        books: [
          {
            title: 'The Republic',
            author: 'Plato',
            year: -380,
            url: 'https://www.gutenberg.org/ebooks/1497',
            why: 'The founding work of Western political philosophy — and, incidentally, of Western metaphysics. Jowett\'s translation is free on Gutenberg.',
          },
          {
            title: 'Nicomachean Ethics',
            author: 'Aristotle',
            year: -350,
            url: 'https://www.gutenberg.org/ebooks/8438',
            why: 'The founding text of virtue ethics. Book I is the essential opening.',
          },
          {
            title: 'The Cambridge Companion to Greek and Roman Philosophy',
            author: 'David Sedley (editor)',
            year: 2003,
            url: '',
            why: 'The standard scholarly overview of the whole period, one essay per school by a specialist.',
          },
        ],
        articles: [
          {
            title: 'Plato',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/plato/',
            why: 'Richard Kraut\'s comprehensive overview — the place to start after a dialogue.',
            year: 2022,
          },
          {
            title: 'Aristotle',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/aristotle/',
            why: 'Christopher Shields on Aristotle\'s whole system. Long, demanding, indispensable.',
            year: 2023,
          },
          {
            title: 'Presocratic Philosophy',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/presocratics/',
            why: 'Patricia Curd\'s overview of the thinkers who set up the problems Socrates and Plato inherited.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Introduction to Philosophy',
            provider: 'Coursera (Edinburgh)',
            url: 'https://www.coursera.org/learn/philosophy',
            free: true,
            why: 'Edinburgh\'s free course includes a substantial unit on ancient philosophy.',
          },
        ],
        primarySources: [
          {
            title: 'The Dialogues of Plato (tr. Benjamin Jowett, full set)',
            url: 'https://classics.mit.edu/Browse/browse-Plato.html',
            why: 'MIT\'s Internet Classics Archive — the complete Jowett Plato, free. Start with the Apology, Crito, Symposium.',
          },
          {
            title: 'The Works of Aristotle (MIT Internet Classics Archive)',
            url: 'https://classics.mit.edu/Browse/browse-Aristotle.html',
            why: 'The major works in English, free. Start with the Ethics and the Politics.',
          },
        ],
      },

      seeAlso: ['ethics', 'metaphysics', 'greece', 'rhetoric'],
      prereqs: ['ethics'],
      leadsTo: ['eastern', 'modern_phil'],

      chapterActivity: 'Summer Platonic-dialogue reenactments in Washington Square Park — one dialogue per year, read aloud in parts.',

      sources: [
        'https://plato.stanford.edu/entries/plato/',
        'https://plato.stanford.edu/entries/aristotle/',
        'https://plato.stanford.edu/entries/presocratics/',
      ],
      verifiedAt: '2026-04-22',
    },

    eastern: {
      id: 'eastern',
      name: 'Eastern Philosophy',
      level: 'Intermediate',
      dek: 'Three great traditions — Confucian, Daoist, Buddhist — that developed alongside the Greeks and often did it better.',
      readTime: '13 min',

      sections: ['Confucius and the social fabric', 'Laozi and the Dao', 'The Buddha\'s analysis', 'Reading across traditions'],
      body: [
        { type: 'lead', text: 'In the same two centuries that produced Socrates, Plato, and Aristotle in Greece, three other civilizations produced philosophical traditions that the West would largely ignore until the eighteenth century and properly read only in the twentieth. Around 500 BCE, a civil servant in northern China named Kong Fuzi began teaching a set of social virtues; an elusive contemporary named Laozi is said to have written the Daodejing; and in the foothills of the Himalayas, a prince named Siddhartha Gautama sat under a tree and worked out a psychology of suffering. Between them, they shaped how roughly half of humanity thought about the good life.' },
        { type: 'h2', text: 'Confucius and the Analects' },
        { type: 'p', text: 'Confucius (551–479 BCE) was a teacher and minor official who spent his life trying to persuade rulers to govern by virtue rather than coercion. The Analects — a collection of his sayings compiled by students after his death — is the single most-read book in Chinese civilization. Its great concepts are ren (human-heartedness), li (ritual, propriety), xiao (filial piety), and junzi (the exemplary person). Confucianism is a philosophy of social fabric: the family, the state, the generation before and after you.' },
        { type: 'h2', text: 'Laozi and the Dao' },
        { type: 'p', text: 'The Daodejing, traditionally attributed to a sixth-century sage named Laozi but probably composed over generations, is an eighty-one-chapter poem on the Way — the Dao — and on how to act by not-acting (wu wei). Where Confucius built up ritual, Daoism dismantles it; where Confucius taught the family, Daoism points to nature. In Chinese culture the two traditions balance each other: one runs the public life, the other keeps the private soul open.' },
        { type: 'h2', text: 'The Buddha\'s analysis' },
        { type: 'p', text: 'Siddhartha Gautama — the Buddha — was born a prince in what is now Nepal around the sixth century BCE and died at eighty. His central insight is laid out in the Four Noble Truths: suffering is universal; suffering is caused by craving; suffering can end; and the way to end it is the Eightfold Path of right view, intention, speech, action, livelihood, effort, mindfulness, and concentration. Buddhism is, at heart, an empirical psychology: it asks you to notice, not to believe. The tradition split into Theravada (conservative, textual, dominant in Sri Lanka and Southeast Asia), Mahayana (expansive, with a pantheon of bodhisattvas, dominant in East Asia), and Vajrayana (Tibetan, ritualized, esoteric).' },
        { type: 'h2', text: 'Reading across traditions' },
        { type: 'p', text: 'Western philosophy and Eastern philosophy are not mirror images. Where Greek thought often starts with "what is?," Chinese thought often starts with "how ought we to live together?," and Indian thought with "what is the nature of the self and its suffering?" Each asks questions the others do not. A serious reader of philosophy in the twenty-first century reads across; Kwame Anthony Appiah, Bryan Van Norden, and Jay Garfield have all argued forcefully that to do otherwise is now culturally illiterate.' },
        { type: 'quote', text: 'The Way that can be spoken of is not the eternal Way.', cite: 'Daodejing, ch. 1, tr. D. C. Lau' },
      ],

      keyTerms: ['Confucius', 'ren', 'li', 'Dao', 'wu wei', 'Four Noble Truths', 'Eightfold Path', 'karma'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@crashcoursephil',
            title: 'Crash Course Philosophy — "The Ethics of the Middle Way" (Buddhism); "Confucianism"',
            channel: 'CrashCourse',
            duration: 'variable',
            why: 'Hank Green\'s ten-minute episodes on the three traditions. Orientation, not depth.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TheSchoolOfLifeTV',
            title: 'The School of Life — ancient Eastern philosophers',
            channel: 'The School of Life',
            duration: 'variable',
            why: 'Short animated introductions to Laozi, Confucius, the Buddha, Zhuangzi.',
          },
          {
            id: 'rpM2sVyH81Q',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=rpM2sVyH81Q',
            title: 'Buddhism 101 — The Teachings of the Buddha',
            channel: 'Let\'s Talk Religion',
            duration: '28:38',
            why: 'Andrew Mark Henry\'s thirty-minute introduction to Buddhist philosophy and history. Scholarly, accessible.',
          },
        ],
        books: [
          {
            title: 'The Analects',
            author: 'Confucius (tr. D. C. Lau)',
            year: -500,
            url: 'https://www.gutenberg.org/ebooks/3330',
            why: 'The sayings, in a readable classic translation. Lau\'s Penguin version is the scholarly standard; Gutenberg has older free alternatives.',
          },
          {
            title: 'Tao Te Ching',
            author: 'Laozi (tr. Stephen Mitchell or D. C. Lau)',
            year: -400,
            url: 'https://www.gutenberg.org/ebooks/216',
            why: 'Eighty-one short chapters. Read the Mitchell for pleasure, the Lau for fidelity.',
          },
          {
            title: 'What the Buddha Taught',
            author: 'Walpola Rahula',
            year: 1959,
            url: '',
            why: 'A Sri Lankan monk\'s short, crystalline exposition of Theravada doctrine. The best single introduction in English.',
          },
        ],
        articles: [
          {
            title: 'Confucius',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/confucius/',
            why: 'Jeffrey Riegel\'s scholarly overview.',
            year: 2023,
          },
          {
            title: 'Daoism',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/daoism/',
            why: 'Chad Hansen\'s long entry on the classical Daoist tradition.',
            year: null,
          },
          {
            title: 'Buddhism',
            source: 'Internet Encyclopedia of Philosophy',
            url: 'https://iep.utm.edu/buddha/',
            why: 'A careful, accessible overview of Buddhist philosophy — a complement to SEP\'s more technical entries.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Chinese Thought: Ancient Wisdom Meets Modern Science',
            provider: 'Coursera (University of British Columbia)',
            url: 'https://www.coursera.org/specializations/chinese-thought',
            free: true,
            why: 'Edward Slingerland\'s free UBC specialization. One of the finest modern online introductions to classical Chinese philosophy.',
          },
          {
            title: 'Buddhism and Modern Psychology',
            provider: 'Coursera (Princeton, Robert Wright)',
            url: 'https://www.coursera.org/learn/science-of-meditation',
            free: true,
            why: 'Robert Wright\'s Princeton course, free to audit. Uses cognitive science to engage Buddhist philosophy on its own terms.',
          },
        ],
        primarySources: [
          {
            title: 'The Dhammapada (tr. Max Müller, 1881, on Project Gutenberg)',
            url: 'https://www.gutenberg.org/ebooks/2017',
            why: 'A classic verse compilation of the Buddha\'s teaching, free on Gutenberg. Use alongside modern translations at accesstoinsight.org.',
          },
          {
            title: 'The Tao Te Ching (Gutenberg)',
            url: 'https://www.gutenberg.org/ebooks/216',
            why: 'Free online text. Read one chapter a day for three months.',
          },
        ],
      },

      seeAlso: ['greeks', 'dharmic', 'modern_phil'],
      prereqs: ['ethics'],
      leadsTo: ['modern_phil'],

      chapterActivity: 'Monthly meditation-and-discussion evenings at the Rubin Museum of Art, with rotating leaders from local Chinese, Japanese, and Tibetan Buddhist communities.',

      sources: [
        'https://plato.stanford.edu/entries/confucius/',
        'https://plato.stanford.edu/entries/daoism/',
        'https://iep.utm.edu/buddha/',
      ],
      verifiedAt: '2026-04-22',
    },

    modern_phil: {
      id: 'modern_phil',
      name: 'Modern Philosophy',
      level: 'Advanced',
      dek: 'From Descartes\'s doubt in 1641 to Kant\'s synthesis in 1781 — the century and a half that made the mind a subject.',
      readTime: '13 min',

      sections: ['Descartes and the new beginning', 'The empiricists', 'Kant\'s synthesis', 'After Kant'],
      body: [
        { type: 'lead', text: 'On the night of November 10, 1619, a young French soldier named René Descartes was stationed in a winter camp in Bavaria. He retreated to a small room warmed by a stove, and — as he later wrote — had three dreams that convinced him of his intellectual vocation. Over the next two decades he would try to rebuild philosophy from nothing, by doubting everything he had been taught. The modern philosophical tradition, running from Descartes through Kant, is the story of that rebuild and its consequences.' },
        { type: 'h2', text: 'Descartes: starting over' },
        { type: 'p', text: 'Descartes\'s Meditations on First Philosophy (1641) is six short chapters, each ten pages or so, in which he doubts his senses, doubts his memory, doubts mathematics, and finally arrives at one thing he cannot doubt: the fact that he is doubting — cogito ergo sum, I think therefore I am. From this foundation he rebuilds the mind, then (with a controversial move) God, then the external world. Every philosopher who followed for the next hundred and fifty years is either arguing with Descartes or carrying out a version of his program.' },
        { type: 'h2', text: 'The British empiricists' },
        { type: 'p', text: 'John Locke, writing in exile in Holland, argued in his Essay Concerning Human Understanding (1690) that the mind at birth is a blank tablet — tabula rasa — and that all ideas come, ultimately, from experience. George Berkeley, an Irish bishop, pressed the empiricist premises further and concluded that there is no material substance at all, only minds and their ideas. David Hume, a Scot writing in the 1740s, was most radical of all: the self, causation, and inductive knowledge all fail under his skeptical microscope. Hume\'s achievement was to say, clearly and calmly, what empiricism actually entails.' },
        { type: 'h2', text: 'Kant\'s critical philosophy' },
        { type: 'p', text: 'Immanuel Kant, a punctual professor in Königsberg who never travelled more than a few miles from home, said that Hume had "roused me from my dogmatic slumber." The Critique of Pure Reason (1781) is Kant\'s answer: knowledge is not simply given to us by the senses (as the empiricists said) nor constructed by reason alone (as the rationalists said), but is jointly built by the mind\'s structures — space, time, causation — and the material the senses bring in. The book is, by common consent, among the hardest in the Western canon and indispensable.' },
        { type: 'h2', text: 'The nineteenth-century aftermath' },
        { type: 'p', text: 'Hegel, after Kant, built a philosophical system of world-historical dialectic. Schopenhauer wrote against it beautifully. Marx inverted Hegel and used him to diagnose capitalism. Kierkegaard, in Copenhagen, made the leap of faith a philosophical concept. Nietzsche, from the 1870s, took a hammer to the whole moral tradition. By 1900, philosophy was splitting into what we now call analytic and continental — the two wings of a single tradition that had been, three centuries earlier, a single conversation.' },
        { type: 'callout', text: 'The split between "analytic" philosophy (Anglophone, logic-focused, Wittgenstein, Quine, Rawls) and "continental" philosophy (European, historical, phenomenological, Heidegger, Derrida, Foucault) hardened in the mid-twentieth century and is, for most working philosophers now, porous again.' },
      ],

      keyTerms: ['Cogito', 'tabula rasa', 'empiricism', 'rationalism', 'transcendental idealism', 'Critique', 'dialectic', 'phenomenology'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@crashcoursephil',
            title: 'Crash Course Philosophy — Descartes, Locke, Hume, Kant',
            channel: 'CrashCourse',
            duration: 'variable',
            why: 'Hank Green\'s short episodes on the major modern figures. The orientation layer.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@philosophytube',
            title: 'Philosophy Tube — modern philosophy explainers',
            channel: 'Philosophy Tube',
            duration: 'variable',
            why: 'Abigail Thorn\'s visual essay channel covers the modern canon with depth and style.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://oyc.yale.edu/philosophy/phil-176',
            title: 'Death (PHIL 176, Shelly Kagan)',
            channel: 'Open Yale Courses',
            duration: 'variable',
            why: 'Not strictly modern philosophy, but Kagan\'s Yale lectures spend a great deal of time on Descartes, Locke, Hume on personal identity — and are among the best philosophy lectures online.',
          },
        ],
        books: [
          {
            title: 'Meditations on First Philosophy',
            author: 'René Descartes',
            year: 1641,
            url: 'https://www.gutenberg.org/ebooks/23306',
            why: 'Sixty pages, six meditations. The starting point of modern philosophy.',
          },
          {
            title: 'An Enquiry Concerning Human Understanding',
            author: 'David Hume',
            year: 1748,
            url: 'https://www.gutenberg.org/ebooks/9662',
            why: 'Hume\'s short, elegant rewrite of his own Treatise. The best entry to radical empiricism.',
          },
          {
            title: 'A History of Western Philosophy',
            author: 'Bertrand Russell',
            year: 1945,
            url: '',
            why: 'Russell\'s opinionated, readable thousand-page tour. Out of date on specifics, but still the finest single narrative of the Western tradition.',
          },
        ],
        articles: [
          {
            title: 'Descartes',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/descartes/',
            why: 'Kurt Smith\'s overview. The first stop after the Meditations.',
            year: 2023,
          },
          {
            title: 'David Hume',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/hume/',
            why: 'William Edward Morris and Charlotte R. Brown on Hume\'s full system.',
            year: null,
          },
          {
            title: 'Immanuel Kant',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/kant/',
            why: 'Michael Rohlf\'s detailed overview. Read before, during, and after the Critique.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Modern Philosophy',
            provider: 'Coursera (University of Edinburgh)',
            url: 'https://www.coursera.org/learn/modern-philosophy',
            free: true,
            why: 'Free course covering Descartes, Locke, Hume, and Kant in sequence.',
          },
        ],
        primarySources: [
          {
            title: 'Descartes — Discourse on the Method',
            url: 'https://www.gutenberg.org/ebooks/59',
            why: 'Descartes\'s short autobiographical essay on method — read it before the Meditations.',
          },
          {
            title: 'Kant — Prolegomena to Any Future Metaphysics',
            url: 'https://www.gutenberg.org/ebooks/52821',
            why: 'Kant\'s own short introduction to his critical project, free on Gutenberg. The gentlest entry to Kantian vocabulary.',
          },
        ],
      },

      seeAlso: ['epistemology', 'metaphysics', 'ethics', 'enlightenment'],
      prereqs: ['epistemology', 'ethics'],
      leadsTo: [],

      chapterActivity: 'A winter reading cycle on Descartes\'s Meditations at the Morgan Library — one meditation per week, six sessions total, with wine after.',

      sources: [
        'https://plato.stanford.edu/entries/descartes/',
        'https://plato.stanford.edu/entries/hume/',
        'https://plato.stanford.edu/entries/kant/',
      ],
      verifiedAt: '2026-04-22',
    },

  },
};
