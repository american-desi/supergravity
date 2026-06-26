// content/psychology.js
// Batch: B03-life-sciences
// Last updated: 2026-04-22 by BATCH B03-life-sciences
//
// Topics this subject must cover (from data.js):
//   Core: cognition, development, clinical, social_psych
//
// Editorial note: psychology has had a rough decade of replication checking.
// Where a famous finding (Zimbardo, Bargh priming, ego-depletion, Milgram in
// its stronger reading) has failed or been seriously contested in replication,
// flag it in the prose rather than cite it uncritically.

window.CONTENT = window.CONTENT || {};
window.CONTENT.psychology = {
  subjectId: 'psychology',
  version: 1,
  lastUpdated: '2026-04-22',
  curator: 'BATCH B03-life-sciences',
  topics: {

    // ——— COGNITION ———
    cognition: {
      id: 'cognition',
      name: 'Cognition',
      level: 'Beginner',
      dek: 'Attention, memory, and thought — the software of the mind, studied with stopwatches and surprisingly clever experiments.',
      readTime: '13 min',

      sections: ['William James\'s stream', 'Attention and working memory', 'The two systems', 'The replication decade', 'What cognition is for'],
      body: [
        { type: 'lead', text: 'In 1890 a Harvard professor named William James, then 48 and the brother of the novelist Henry, published a two-volume work called The Principles of Psychology. He had been writing it for twelve years; he hated it by the end; he warned his publisher that it was "a loathsome, distended, tumefied, bloated, dropsical mass." It is also one of the most readable books ever written in English about the mind, and it remains in print today. James opened the modern study of cognition by describing the obvious: that consciousness is a continuous stream, not a chain of discrete links; that attention is selective; that a habit is memory that has sunk below awareness; that emotion is, at least in part, the feeling of the body\'s response to a situation. He was trained as a physician; he thought of the mind as something that happens in a body.' },
        { type: 'h2', text: 'Attention, the bottleneck' },
        { type: 'p', text: 'The central surprise of attention research is how little we see at once. Classic change-blindness demonstrations — Daniel Simons and Christopher Chabris\'s "invisible gorilla" study is the famous example — show that an observer focused on one task (counting basketball passes between players in white shirts) will miss a person in a gorilla suit walking across the middle of the frame, stopping to thump its chest, and walking off. About half of observers fail to see the gorilla. Attention is a spotlight, and the darkness around it is larger than the lit circle. The practical consequence is that we do not see most of what is in front of us; we see what we have already decided is worth looking at.' },
        { type: 'h2', text: 'Working memory\'s famous seven' },
        { type: 'p', text: 'In 1956 George Miller, then at Harvard, published a paper for the Psychological Review called "The Magical Number Seven, Plus or Minus Two: Some Limits on Our Capacity for Processing Information." He began by complaining that he had been persecuted by an integer for seven years — the same number kept appearing in absolute-judgment studies he had done and read about. His claim: the capacity of short-term memory is about seven items. Later work has revised the figure down — more like four, if you are careful about chunking — but the underlying claim has held up. The mind\'s scratchpad is surprisingly small. Most of what feels like thinking is the clever deployment of that small space: chunking letters into words, words into phrases, phrases into gists.' },
        { type: 'interactive', key: 'rich-cognition' },
        { type: 'h2', text: 'System 1 and System 2' },
        { type: 'p', text: 'Daniel Kahneman\'s 2011 book Thinking, Fast and Slow gathered thirty years of his work with Amos Tversky — Tversky died in 1996, and Kahneman won the Nobel in Economics in 2002 largely for their joint work — into a single accessible frame: the mind runs two systems, loosely. System 1 is fast, automatic, intuitive, usually right, and hard to turn off. System 2 is slow, effortful, analytic, and in principle capable of catching System 1 when it is wrong, though in practice it is lazy and expensive to run. Most of the famous cognitive biases — anchoring, availability, loss aversion, the conjunction fallacy — are described as System 1 defaults that System 2 fails to correct. Kahneman himself was careful to note that the two-system language is a deliberate fiction, a useful metaphor rather than a claim about neural architecture.' },
        { type: 'h2', text: 'The replication decade' },
        { type: 'p', text: 'Psychology in the 2010s went through a careful public self-examination about which of its famous findings actually held up under replication. The Reproducibility Project: Psychology tried to reproduce 100 published findings and reported, in Science in 2015, that only about 36 percent replicated with full statistical significance. Kahneman-Tversky work on heuristics and biases largely survived. Ego depletion — the claim that willpower is a finite resource used up by earlier self-control — did not replicate. Social priming as originally reported has largely failed. Preregistration of hypotheses, open data, and registered reports are now standard at the better journals, and the field\'s evidentiary threshold has substantially risen. A serious student of cognition today reads the original papers alongside the published replications, and treats any single surprising finding with a measure of patience.' },
        { type: 'h2', text: 'What cognition is for' },
        { type: 'p', text: 'The deeper question, still unsettled, is what cognition is built to do. One tradition treats the mind as a general-purpose computer that happens to run in wet hardware. Another — the evolutionary-psychology tradition that descends from Cosmides and Tooby in the 1990s — treats it as a bundle of relatively specialized problem solvers, each tuned by selection to handle a recurring ancestral problem (finding mates, avoiding predators, navigating kin relationships). A third, predictive-processing tradition, treats the brain as a prediction machine that generates a model of the world and updates it against incoming sensory error. These frames are not mutually exclusive, and the research that matters increasingly tries to put them in the same sentence.' },
        { type: 'quote', text: 'Consciousness, then, does not appear to itself chopped up in bits... It is nothing jointed; it flows. A "river" or a "stream" are the metaphors by which it is most naturally described.', cite: 'William James, The Principles of Psychology (1890)' },
      ],

      keyTerms: ['attention', 'working memory', 'long-term memory', 'System 1 / System 2', 'cognitive bias', 'heuristic', 'metacognition', 'chunking'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6',
            title: 'Crash Course Psychology — full playlist',
            channel: 'CrashCourse',
            duration: 'variable',
            why: 'Hank Green\'s forty-episode run through an AP Psychology curriculum. Strong on cognition; honest about the replication-crisis episodes.',
          },
          {
            id: 'vJG698U2Mvo',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=vJG698U2Mvo',
            title: 'Selective Attention Test',
            channel: 'Daniel Simons',
            duration: '1:22',
            why: 'The original "gorilla" video, posted by the researcher himself. Watch it once before reading about attention; you will remember it for life.',
          },
          {
            id: 'NNnIGh9g6fA',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=NNnIGh9g6fA',
            title: 'Introduction to Human Behavioral Biology',
            channel: 'Stanford (Robert Sapolsky)',
            duration: '57:15',
            why: 'Sapolsky opens his Stanford course with the problem of explaining any behavior — a useful frame for anyone taking cognition seriously.',
          },
        ],
        books: [
          {
            title: 'The Principles of Psychology',
            author: 'William James',
            year: 1890,
            url: 'https://www.gutenberg.org/ebooks/57628',
            why: 'The founding English-language textbook of scientific psychology. Volume 1 is free on Project Gutenberg; the chapters on habit and on the stream of thought are still assigned at Yale and Harvard.',
          },
          {
            title: 'Thinking, Fast and Slow',
            author: 'Daniel Kahneman',
            year: 2011,
            url: '',
            why: 'The Nobel economist\'s summary of his own career. The single best general-audience book on cognition; a few chapters on social priming have not aged as well as the rest.',
          },
          {
            title: 'How the Mind Works',
            author: 'Steven Pinker',
            year: 1997,
            url: '',
            why: 'Pinker\'s ambitious synthesis of cognitive science and evolutionary psychology, written for a general reader. Dense, funny, worth the time.',
          },
        ],
        articles: [
          {
            title: 'Cognitive science',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/cognitive-science/',
            why: 'Paul Thagard\'s careful long essay on what the field is and what its major programs claim. Essential reading.',
            year: null,
          },
          {
            title: 'Cognition',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Cognition',
            why: 'Broad, well-cited overview with sections on attention, memory, language, and decision-making.',
            year: null,
          },
          {
            title: 'The Magical Number Seven, Plus or Minus Two (1956)',
            source: 'Classics in the History of Psychology (York University)',
            url: 'https://psychclassics.yorku.ca/Miller/',
            why: 'Christopher Green\'s archived copy of George Miller\'s famous paper. Short, readable, still taught.',
            year: 1956,
          },
        ],
        courses: [
          {
            title: 'Introduction to Psychology (Yale PSYC 110)',
            provider: 'Open Yale Courses',
            url: 'https://oyc.yale.edu/introduction-psychology/psyc-110',
            free: true,
            why: 'Paul Bloom\'s full Yale course — twenty lectures, transcripts, problem sets. The gold-standard free psychology course on the web.',
          },
          {
            title: 'Introduction to Psychology (Coursera, Yale)',
            provider: 'Coursera (Yale)',
            url: 'https://www.coursera.org/learn/introduction-psychology',
            free: true,
            why: 'Bloom\'s updated Coursera version. Shorter than the Yale course, with weekly quizzes; free to audit.',
          },
        ],
        tools: [
          {
            title: 'PsychInfo / APA PsycNet',
            url: 'https://psycnet.apa.org/',
            why: 'The American Psychological Association\'s searchable article database — the standard place to check whether a psychology finding has been replicated.',
          },
        ],
      },

      interactive: { kind: 'stroop' },
      seeAlso: ['neuro', 'development', 'clinical', 'social_psych'],
      prereqs: [],
      leadsTo: ['neuro', 'development', 'clinical', 'social_psych'],

      chapterActivity: 'A weekly Sunday morning "slow-reading" group at a West Village coffee shop, working a chapter of William James out loud.',

      sources: [
        'https://en.wikipedia.org/wiki/Cognition',
        'https://plato.stanford.edu/entries/cognitive-science/',
        'https://www.gutenberg.org/ebooks/57628',
      ],
      verifiedAt: '2026-04-22',
    },

    // ——— DEVELOPMENTAL ———
    development: {
      id: 'development',
      name: 'Developmental Psychology',
      level: 'Intermediate',
      dek: 'How a mind grows — from a newborn who cannot yet focus her eyes to an adult still adjusting to her own parents.',
      readTime: '13 min',

      sections: ['Piaget in Geneva', 'Vygotsky and the zone', 'What infants actually know', 'Attachment', 'Across the whole life'],
      body: [
        { type: 'lead', text: 'In the 1920s a young Swiss biologist named Jean Piaget, working at Alfred Binet\'s intelligence-testing laboratory in Paris, noticed something more interesting than whether children got test questions right: the particular wrong answers they gave, at the particular ages they gave them. Four-year-olds, he found, had consistent confusions that seven-year-olds had moved past. Asked whether a tall thin glass held more water than a short wide one with the same volume poured into it, four-year-olds almost always said the tall one had more; seven-year-olds had learned to conserve. Development was not just accumulation of facts; it was a series of stages, each with its own logic, each built on the one before.' },
        { type: 'h2', text: 'Piaget and his four stages' },
        { type: 'p', text: 'Piaget argued that cognitive development proceeds through four stages. Sensorimotor (birth to about two) — the infant learns about the world through action, and figures out that objects continue to exist when out of sight. Preoperational (two to seven) — symbols and language arrive, but logical manipulation of them is still shaky; conservation fails. Concrete operational (seven to eleven) — children can reason logically about physical objects but struggle with abstractions. Formal operational (eleven onward) — hypothetical and systematic reasoning, the kind that lets a teenager think about what would happen if gravity were reversed. Modern research has softened the stage boundaries and pushed several of the abilities Piaget dated as late down into infancy, but the basic framework still appears in most developmental-psychology textbooks.' },
        { type: 'h2', text: 'Vygotsky, the social child' },
        { type: 'p', text: 'The Soviet psychologist Lev Vygotsky, writing in the 1920s and early 1930s and mostly ignored in the West until his work was translated in 1956 (he died of tuberculosis in 1934, at 37), argued that development is fundamentally social. Children learn by doing things with more skilled partners, not by exploring alone. The gap between what a child can do independently and what she can do with help is what he called the zone of proximal development. Teaching, on Vygotsky\'s view, is the careful scaffolding of help into that zone and the gradual withdrawal of it as competence consolidates. A child is first extra-mental — her thinking lives in dialogue with a more skilled other — and only later internalizes the dialogue as private thought.' },
        { type: 'interactive', key: 'conservation' },
        { type: 'h2', text: 'What infants actually know' },
        { type: 'p', text: 'The last thirty years of infant research have pushed the field toward richer pictures of early cognition. Alison Gopnik at Berkeley and Elizabeth Spelke at Harvard, using looking-time and habituation methods — infants look longer at events that violate their expectations — have shown that babies as young as three or four months track objects as they pass behind screens, expect solid objects to remain solid, distinguish agents (things that move on their own) from objects, and make rough probability judgments about how unlikely a given event was. Gopnik and colleagues have argued that infants are, essentially, scientists — making models, running experiments, updating on evidence. The newborn is not a blank slate; she is a small researcher running experiments on the world with almost no hands.' },
        { type: 'h2', text: 'Attachment, and what it does' },
        { type: 'p', text: 'Mary Ainsworth\'s Strange Situation procedure, published in 1969, became the standard tool for classifying infant-caregiver attachment. A twelve-month-old is briefly separated from her mother and then reunited; her behavior in the reunion episode reveals a relatively stable style — secure, insecure-avoidant, insecure-ambivalent, and (added later) disorganized. Attachment classifications at one year predict outcomes measurable decades later: peer relationships, academic engagement, romantic patterns. The mechanism is not fate; it is the way early experience with responsive or unresponsive caregiving shapes the child\'s working model of relationships. Much of the field\'s current policy work, through organizations like the Harvard Center on the Developing Child, turns on this fact.' },
        { type: 'h2', text: 'Across the whole life' },
        { type: 'p', text: 'Erik Erikson\'s eight-stage model of psychosocial development, published in 1950 in Childhood and Society, extended the developmental question across a whole life — from the infant\'s trust-versus-mistrust through the elder\'s integrity-versus-despair, with a late-adolescent identity-versus-role-confusion in the middle that has become, for a good reason, the stage most every first-year psychology student remembers. Modern life-span psychology retains the spirit: late adolescence, early adulthood, midlife, and old age each have characteristic developmental tasks and characteristic ways to fall short of them. "Emerging adulthood," a stage added by Jeffrey Arnett in 2000, tries to capture the extended period in modern industrial societies between leaving adolescence and taking on full adult roles.' },
        { type: 'callout', text: 'The Harvard Center on the Developing Child estimates that more than a million new neural connections are formed every second in the first few years of life. Early experience is not nostalgia; it is neurodevelopment.' },
        { type: 'interactive', key: 'rich-development' },
      ],

      keyTerms: ['attachment', 'zone of proximal development', 'object permanence', 'theory of mind', 'scaffolding', 'critical period', 'psychosocial development', 'habituation'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6',
            title: 'Crash Course Psychology — Development episodes (#18, 19, 20)',
            channel: 'CrashCourse',
            duration: 'variable',
            why: 'The developmental-psychology episodes of Hank Green\'s Crash Course run — Piaget, Erikson, Ainsworth, and the debates between them.',
          },
          {
            id: 'VNNsN9IJkws',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=VNNsN9IJkws',
            title: 'Experiences Build Brain Architecture',
            channel: 'Center on the Developing Child at Harvard',
            duration: '2:00',
            why: 'Two minutes, excellent animation, accurate. The best short explainer of how early experience shapes neural circuitry.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/channel/UCUdettijNYvLAm4AixZv4RA',
            title: 'SciShow Psych — channel archive',
            channel: 'SciShow Psych',
            duration: 'variable',
            why: 'Hank Green\'s shorter-form psychology series. New episodes stopped in 2022; the back catalog is still one of the best short-form psychology archives on YouTube.',
          },
        ],
        books: [
          {
            title: 'The Scientist in the Crib',
            author: 'Alison Gopnik, Andrew N. Meltzoff, Patricia K. Kuhl',
            year: 1999,
            url: '',
            why: 'Three developmental psychologists on what recent infant research has actually shown. The most readable account of the field for a general audience.',
          },
          {
            title: 'Mind in Society: The Development of Higher Psychological Processes',
            author: 'Lev S. Vygotsky',
            year: 1978,
            url: '',
            why: 'The Harvard University Press compilation of Vygotsky\'s essays — his writings on the zone of proximal development and the social nature of thought.',
          },
          {
            title: 'The Gardener and the Carpenter: What the New Science of Child Development Tells Us About the Relationship Between Parents and Children',
            author: 'Alison Gopnik',
            year: 2016,
            url: '',
            why: 'Gopnik\'s short book on how developmental research reframes the question of parenting. A careful modern complement to the Piaget-Vygotsky tradition.',
          },
        ],
        articles: [
          {
            title: 'Developmental psychology',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Developmental_psychology',
            why: 'Broad overview with strong sections on Piaget, Vygotsky, attachment, and the life-span tradition.',
            year: null,
          },
          {
            title: 'Center on the Developing Child — Brain Architecture',
            source: 'Harvard University',
            url: 'https://developingchild.harvard.edu/key-concept/brain-architecture/',
            why: 'The Center\'s concept library — short, science-vetted explainers of serve-and-return, toxic stress, and early brain development. A reliable starting point.',
            year: null,
          },
          {
            title: 'Piaget\'s theory of cognitive development',
            source: 'Encyclopædia Britannica',
            url: 'https://www.britannica.com/science/cognitive-development',
            why: 'Careful editorial summary of the stage model with pointers to modern revisions.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Introduction to Psychology (Yale PSYC 110) — Development lectures',
            provider: 'Open Yale Courses',
            url: 'https://oyc.yale.edu/introduction-psychology/psyc-110',
            free: true,
            why: 'Paul Bloom\'s lectures on development are the clearest single introduction to the field available free. Full transcripts and video.',
          },
          {
            title: 'The Science of Happiness (Yale / Coursera)',
            provider: 'Coursera (Yale)',
            url: 'https://www.coursera.org/learn/the-science-of-well-being',
            free: true,
            why: 'Laurie Santos\'s adult-development-adjacent course — the most-enrolled class in Yale history, free to audit.',
          },
        ],
        tools: [
          {
            title: 'Developing Child — Resource Library',
            url: 'https://developingchild.harvard.edu/resources/',
            why: 'Videos, briefs, and podcasts from the Harvard Center — built for parents, educators, and policymakers, reliable for everyone else.',
          },
        ],
      },

      interactive: { kind: 'conservation' },
      seeAlso: ['cognition', 'clinical', 'social_psych', 'neuro'],
      prereqs: ['cognition'],
      leadsTo: ['clinical', 'social_psych'],

      chapterActivity: 'A monthly caregivers\' reading group at a Park Slope library working through Gopnik one chapter at a time; childcare available on site.',

      sources: [
        'https://en.wikipedia.org/wiki/Developmental_psychology',
        'https://developingchild.harvard.edu/key-concept/brain-architecture/',
        'https://www.britannica.com/science/cognitive-development',
      ],
      verifiedAt: '2026-04-22',
    },

    // ——— CLINICAL ———
    clinical: {
      id: 'clinical',
      name: 'Clinical Psychology',
      level: 'Intermediate',
      dek: 'The study and treatment of the disordered mind — a field with a long history of wrong answers and a short history of cautiously better ones.',
      readTime: '13 min',

      sections: ['Kraepelin\'s categories', 'The DSM and its critics', 'Evidence-based treatment', 'Memoir as evidence', 'The scale problem'],
      body: [
        { type: 'lead', text: 'In 1883 a German psychiatrist named Emil Kraepelin, then 27 and newly appointed to the University of Dorpat, published the first edition of a textbook that classified mental illnesses by the course they took over time. He argued that two large groups — what we now call schizophrenia and bipolar disorder (then dementia praecox and manic-depressive illness) — could be distinguished by whether they resolved or progressed. His method was patient: he kept detailed records of thousands of patients over decades and tracked their trajectories. Kraepelin\'s approach of careful long-term observation, rather than Freud\'s narrative interpretation — the two men worked at the same time and largely ignored each other — is the one modern clinical psychology has inherited.' },
        { type: 'h2', text: 'The DSM, and why it keeps changing' },
        { type: 'p', text: 'The American Psychiatric Association\'s Diagnostic and Statistical Manual of Mental Disorders — now in its fifth edition, revised in 2022, 991 pages long, describing about 300 disorders — is the field\'s operating system. It defines each disorder by symptom clusters, minimum duration, and functional impairment. The categories are practical rather than fundamental: they are useful for insurance coding, for clinical communication, and for research, but they are revised every decade or two and every revision is argued over vigorously. The DSM-III in 1980 threw out the psychoanalytic framework of earlier editions; the DSM-5 in 2013 added binge-eating disorder and merged Asperger\'s into autism spectrum; each change reshapes which patients get which label, and which diagnoses are reimbursable.' },
        { type: 'h2', text: 'Evidence-based treatment' },
        { type: 'p', text: 'The cleanest results in clinical psychology come from cognitive-behavioral therapy (CBT) for anxiety disorders and unipolar depression — its effect sizes in randomized trials are modest but consistent, and it works about as well as antidepressants for most cases of moderate depression, better in combination. Specific medications have real effects: SSRIs for depression and anxiety, mood stabilizers (lithium, valproate) for bipolar illness, second-generation antipsychotics for schizophrenia. Psychodynamic approaches retain a clinical tradition but a smaller evidence base, though brief psychodynamic therapy does have randomized trials supporting it for some indications. EMDR, exposure therapy, and interpersonal therapy each work for specific problems. The field\'s honest position is that we know some things work, we know some things do not, and we are still unsure about a good deal in the middle. Aaron Beck, who founded cognitive therapy in the 1960s after noticing that depressed patients had systematic thinking biases, lived to see CBT become the most empirically validated talk therapy in the world.' },
        { type: 'interactive', key: 'thought-record' },
        { type: 'h2', text: 'Memoir as evidence' },
        { type: 'p', text: 'Some of the clearest writing about mental illness comes from clinicians who have had it themselves. Kay Redfield Jamison, a psychologist at Johns Hopkins and one of the world\'s authorities on bipolar disorder, has written extensively about her own experience of the illness — including the lithium that eventually stabilized her. Elyn Saks, a law professor at USC, has written about her schizophrenia. These first-person accounts are not a substitute for clinical training or for the research literature, but they are a corrective to the textbook temptation to reduce a life to a category. A clinician who has read Jamison or Saks or Andrew Solomon\'s Noonday Demon alongside the DSM treats patients differently.' },
        { type: 'h2', text: 'The scale problem' },
        { type: 'p', text: 'The global burden of mental disorder, measured in disability-adjusted life-years, is on the order of a trillion dollars a year. About one in eight people worldwide lives with some form of mental disorder. The supply of trained clinicians is a tiny fraction of what the need would imply — most low- and middle-income countries have fewer than one mental-health professional per hundred thousand people. Self-directed CBT workbooks, short-term group therapy, stepped-care models, and trained non-specialists work for milder presentations and scale better than traditional practice; they do not replace specialist care for severe illness, but they can extend reach dramatically. Every serious clinical-psychology program now includes training in how to triage, how to refer, and when to back away.' },
        { type: 'callout', text: 'Nothing on this page is clinical advice. If you or someone you know is struggling, the place to start is a conversation with a qualified clinician. In the U.S., the 988 Suicide and Crisis Lifeline is reachable by call or text 24/7.' },
        { type: 'interactive', key: 'rich-clinical' },
      ],

      keyTerms: ['DSM-5', 'cognitive behavioral therapy', 'depression', 'anxiety disorder', 'bipolar disorder', 'schizophrenia', 'psychotherapy', 'psychopharmacology'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6',
            title: 'Crash Course Psychology — Clinical episodes',
            channel: 'CrashCourse',
            duration: 'variable',
            why: 'Hank Green\'s episodes on depression, anxiety, schizophrenia, and the major therapeutic approaches. A careful introduction to categories and treatments.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/channel/UCUdettijNYvLAm4AixZv4RA',
            title: 'SciShow Psych — channel',
            channel: 'SciShow Psych',
            duration: 'variable',
            why: 'Short episodes on specific disorders — OCD, PTSD, eating disorders — with attention to what the evidence supports and what it does not.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/channel/UCG-iSMVtWbbwDDXgXXypARQ',
            title: 'MedCram — psychiatric medication explainers',
            channel: 'MedCram',
            duration: 'variable',
            why: 'Clinicians on the pharmacology of SSRIs, benzodiazepines, and mood stabilizers. Careful and evidence-focused.',
          },
        ],
        books: [
          {
            title: 'An Unquiet Mind: A Memoir of Moods and Madness',
            author: 'Kay Redfield Jamison',
            year: 1995,
            url: '',
            why: 'A clinical psychologist at Johns Hopkins writes about her own bipolar disorder. Essential reading for anyone taking the field seriously.',
          },
          {
            title: 'The Noonday Demon: An Atlas of Depression',
            author: 'Andrew Solomon',
            year: 2001,
            url: '',
            why: 'National Book Award-winning, obsessively researched survey of depression as both lived experience and clinical category. Encyclopedic, humane.',
          },
          {
            title: 'The Body Keeps the Score',
            author: 'Bessel van der Kolk',
            year: 2014,
            url: '',
            why: 'A trauma researcher on what PTSD does to the body and which treatments help. Some specific claims are contested; the general framing is influential and worth engaging.',
          },
        ],
        articles: [
          {
            title: 'NIMH — Mental Health Topics',
            source: 'NIH National Institute of Mental Health',
            url: 'https://www.nimh.nih.gov/health/topics',
            why: 'The U.S. federal reference on every major disorder — plain-language summaries reviewed by the National Institute of Mental Health.',
            year: null,
          },
          {
            title: 'Diagnostic and Statistical Manual of Mental Disorders (DSM-5)',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Diagnostic_and_Statistical_Manual_of_Mental_Disorders',
            why: 'Careful overview of the manual, its history, and the critiques of it. Use as an orientation; a clinical library has the actual text.',
            year: null,
          },
          {
            title: 'Mental disorders',
            source: 'World Health Organization',
            url: 'https://www.who.int/news-room/fact-sheets/detail/mental-disorders',
            why: 'The WHO\'s global perspective on mental-health burden and access. Useful context alongside the American DSM-centric literature.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Introduction to Psychology (Yale PSYC 110) — Clinical lectures',
            provider: 'Open Yale Courses',
            url: 'https://oyc.yale.edu/introduction-psychology/psyc-110',
            free: true,
            why: 'Paul Bloom\'s two lectures on disorders and on therapy — balanced, carefully argued, a good first overview.',
          },
          {
            title: 'Introduction to Psychology (Coursera, Yale)',
            provider: 'Coursera (Yale)',
            url: 'https://www.coursera.org/learn/introduction-psychology',
            free: true,
            why: 'The Coursera version, audited free. Includes updated material on mental-health disorders and evidence-based therapy.',
          },
        ],
        tools: [
          {
            title: 'APA Division 12 — Clinical Psychology',
            url: 'https://div12.org/',
            why: 'The APA\'s clinical-psychology division maintains a list of evidence-based treatments for specific disorders — the closest thing the field has to an evidence map.',
          },
        ],
      },

      interactive: { kind: 'thought-record' },
      seeAlso: ['cognition', 'development', 'social_psych', 'neuro'],
      prereqs: ['cognition'],
      leadsTo: ['neuro'],

      chapterActivity: 'A "reading for resilience" book club — one clinical memoir a quarter, discussed at a Brooklyn Heights café on a Sunday afternoon.',

      sources: [
        'https://en.wikipedia.org/wiki/Clinical_psychology',
        'https://www.nimh.nih.gov/health/topics',
        'https://www.who.int/news-room/fact-sheets/detail/mental-disorders',
      ],
      verifiedAt: '2026-04-22',
    },

    // ——— SOCIAL ———
    social_psych: {
      id: 'social_psych',
      name: 'Social Psychology',
      level: 'Intermediate',
      dek: 'Why people in groups act oddly — and why some of the twentieth century\'s most famous experiments on that question have not replicated.',
      readTime: '13 min',

      sections: ['Lewin in exile', 'The classic studies', 'The replication decade', 'What has held up', 'Where the field is useful'],
      body: [
        { type: 'lead', text: 'Social psychology as an experimental discipline was largely founded by Jewish émigrés from Germany in the 1930s — Kurt Lewin at Iowa and MIT, Solomon Asch at Swarthmore, Leon Festinger at Stanford. They came to the United States with a specific question, sharpened by what they had just watched happen in Europe: how do ordinary people come to do extraordinary things in groups? How does an unremarkable bureaucrat sign a deportation order? How does a neighbor inform on his neighbor? The field\'s most famous experiments and its most durable ideas both trace to that generation and that question. Asch\'s line-length study, Milgram\'s shock generator, Festinger\'s cult infiltration — they were, first of all, attempts to understand fascism.' },
        { type: 'h2', text: 'The classic studies, handled with care' },
        { type: 'p', text: 'Asch\'s 1950s conformity experiments — subjects called an obviously shorter line "longer" when a group of confederates did — have replicated reliably and hold up under modern scrutiny. About a third of trials produced conformity to the wrong answer, and three-quarters of subjects conformed at least once. Festinger\'s cognitive-dissonance theory, the idea that inconsistency between belief and action is uncomfortable and motivates change, has held up in hundreds of studies across many paradigms. Stanley Milgram\'s 1960s obedience studies have a more complicated record: the headline finding — that about two-thirds of subjects continued to administer "shocks" to an unseen learner when urged to by an experimenter — replicates, but recent reanalyses of the archived audio recordings by Gina Perry and others have shown the experimenters pressing subjects much harder than Milgram\'s original reports acknowledged. Zimbardo\'s 1971 Stanford Prison Experiment, once a staple of introductory textbooks, has been substantially discredited as it was originally presented; archival tapes show Zimbardo and his team coaching guards to behave more harshly.' },
        { type: 'h2', text: 'The replication decade' },
        { type: 'p', text: 'The 2010s were a public reckoning for social psychology. The Open Science Collaboration, a volunteer consortium of 270 researchers, in 2015 published a Science paper reporting they had tried to reproduce 100 prominent published findings and succeeded at about a third; effect sizes, on average, were about half of those originally reported. Social priming — the claim that subliminal cues (reading words about old age, holding a warm coffee) can dramatically change subsequent behavior — fared especially poorly. Ego depletion — the claim that willpower is a finite resource — failed to replicate in a large multi-lab study. Power posing did not reliably change hormones. Preregistration of hypotheses, open data, and registered reports are now standard at the better journals; the older literature is now read with an eye to which findings have been independently reproduced under modern methodological standards.' },
        { type: 'h2', text: 'What has held up' },
        { type: 'p', text: 'The robust residue is still a substantial field. Kahneman-Tversky work on judgment under uncertainty. Bystander intervention research (with nuance — Latané and Darley\'s specific numbers and the Kitty Genovese back-story have been revised, but the core effect is real). The fundamental attribution error — our tendency to attribute others\' behavior to character and our own to circumstance. Minimal-group effects, in which even arbitrary group assignments produce in-group favoritism. Self-affirmation effects on academic performance. Moral foundations research, though contested. The basic finding that context shapes behavior more than people expect, and that people underestimate that effect in themselves, has held up as one of the field\'s durable contributions.' },
        { type: 'h2', text: 'Where the field is useful' },
        { type: 'p', text: 'Public-health messaging, voter turnout, tax compliance, energy conservation, hiring bias, classroom climate, organ donation rates — all turn out to be, in substantial part, problems about what the relevant reference group is doing and how people construe it. Making the "default" the behavior you want dramatically changes uptake. Letting people know that most of their neighbors conserve energy reduces their use; telling them they are above or below average has effects in both directions. The field has become quieter and more careful; it has also become more practically useful. Cass Sunstein and Richard Thaler\'s Nudge draws on this literature; so does a generation of applied behavioral-science work inside governments, from the UK Behavioural Insights Team to the White House\'s own Social and Behavioral Sciences Team.' },
        { type: 'callout', text: 'The Stanford Prison Experiment (1971) is frequently cited as evidence that "ordinary people become brutal in a prison-guard role." Archival recordings released since have shown Zimbardo and his team actively coaching guards. Treat the study as a cautionary tale about research design rather than a finding about human nature.' },
        { type: 'interactive', key: 'rich-social_psych' },
      ],

      keyTerms: ['conformity', 'cognitive dissonance', 'fundamental attribution error', 'in-group / out-group', 'social identity', 'bystander effect', 'obedience', 'priming'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6',
            title: 'Crash Course Psychology — Social episodes (#35, #36, #37, #38)',
            channel: 'CrashCourse',
            duration: 'variable',
            why: 'Hank Green\'s episodes on conformity, persuasion, prejudice, and group behavior. Honest about which classic findings have aged well.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/channel/UCUdettijNYvLAm4AixZv4RA',
            title: 'SciShow Psych — channel',
            channel: 'SciShow Psych',
            duration: 'variable',
            why: 'Short explainers on specific social-psychology findings, with careful attention to replication status.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/playlist?list=PL848F2368C90DDC3D',
            title: 'Stanford BIO 150 — Human Behavioral Biology',
            channel: 'Stanford (Robert Sapolsky)',
            duration: 'variable',
            why: 'Sapolsky\'s full course, with strong lectures on aggression, altruism, and the biology of group behavior.',
          },
        ],
        books: [
          {
            title: 'Influence: The Psychology of Persuasion',
            author: 'Robert B. Cialdini',
            year: 1984,
            url: '',
            why: 'The best general-audience book on the mechanics of persuasion, built on decades of Cialdini\'s own fieldwork. Has aged well; heavily cited in the applied literature.',
          },
          {
            title: 'The Righteous Mind: Why Good People Are Divided by Politics and Religion',
            author: 'Jonathan Haidt',
            year: 2012,
            url: '',
            why: 'Haidt\'s moral-foundations research, argued for a general reader. Some specific claims are contested; the overall framework is influential and carefully argued.',
          },
          {
            title: 'Mistakes Were Made (But Not by Me)',
            author: 'Carol Tavris and Elliot Aronson',
            year: 2007,
            url: '',
            why: 'A clear application of cognitive-dissonance research to why people defend their mistakes. Aronson was Festinger\'s student; the book is a modern classic of applied social psychology.',
          },
        ],
        articles: [
          {
            title: 'Social psychology',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Social_psychology',
            why: 'Broad, well-cited overview with strong sections on classic studies and on the replication crisis.',
            year: null,
          },
          {
            title: 'Moral Psychology: Empirical Approaches',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/moral-psych-emp/',
            why: 'John Doris and colleagues on what the empirical moral-psychology literature (including Haidt\'s moral foundations work) actually supports.',
            year: null,
          },
          {
            title: 'Estimating the reproducibility of psychological science',
            source: 'Science (Open Science Collaboration)',
            url: 'https://www.science.org/doi/10.1126/science.aac4716',
            why: 'The 2015 paper that opened the replication-crisis decade in public. One hundred studies, thirty-six full replications.',
            year: 2015,
          },
        ],
        courses: [
          {
            title: 'Introduction to Psychology (Yale PSYC 110) — Social lectures',
            provider: 'Open Yale Courses',
            url: 'https://oyc.yale.edu/introduction-psychology/psyc-110',
            free: true,
            why: 'Paul Bloom\'s lectures on morality, persuasion, and the self are the clearest short introduction. Transcripts included.',
          },
          {
            title: 'Social Psychology (Coursera, Wesleyan)',
            provider: 'Coursera (Wesleyan)',
            url: 'https://www.coursera.org/learn/social-psychology',
            free: true,
            why: 'Scott Plous\'s long-running Coursera course. One of the most-enrolled psychology MOOCs; free to audit.',
          },
        ],
        tools: [
          {
            title: 'YourMorals.org',
            url: 'https://yourmorals.org/',
            why: 'Run by the Haidt group — a set of research questionnaires on moral psychology you can take in under ten minutes and see your results against population data.',
          },
        ],
      },

      interactive: { kind: 'asch' },
      seeAlso: ['cognition', 'clinical', 'development', 'sociology'],
      prereqs: ['cognition'],
      leadsTo: ['sociology', 'politics'],

      chapterActivity: 'A monthly "replication reading group" at the Columbia Journalism School — pick one classic social-psych paper and one published replication, argue about them over dinner.',

      sources: [
        'https://en.wikipedia.org/wiki/Social_psychology',
        'https://www.science.org/doi/10.1126/science.aac4716',
        'https://plato.stanford.edu/entries/moral-psych-emp/',
      ],
      verifiedAt: '2026-04-22',
    },

  },
};
