// content/parenting.js
// Batch: B11-life-skills-I
// Last updated: 2026-04-23 by BATCH B11-life-skills-I
//
// Topics from data.js: attachment, stages
//
// Parenting is a politically charged subject. The voice here is practical:
// name the schools of thought; do not adjudicate between them.

window.CONTENT = window.CONTENT || {};
window.CONTENT.parenting = {
  subjectId: 'parenting',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B11-life-skills-I',
  topics: {

    attachment: {
      id: 'attachment',
      name: 'Attachment',
      level: 'Beginner',
      dek: 'A child whose distress is reliably met by a caregiver learns the world is responsive — and learns it before learning to speak.',
      readTime: '10 min',

      sections: ['The Bowlby revolution', 'The Strange Situation', 'What "responsive" actually means', 'The cultural caveat'],
      body: [
        { type: 'lead', text: 'In the 1950s a British psychiatrist named John Bowlby was asked by the World Health Organization to study children orphaned by the war. What he saw — even in clean, well-fed institutions, children who had stopped speaking, stopped growing, sometimes simply stopped — convinced him that the bond between a young child and a primary caregiver is not an indulgence but a biological need, as load-bearing as food. The theory he built around this observation has shaped almost every reasonable conversation about children since.' },
        { type: 'h2', text: 'The Bowlby revolution' },
        { type: 'p', text: 'Bowlby drew on ethology — Konrad Lorenz\'s ducklings, Harry Harlow\'s tragic monkeys raised on wire mothers — to argue that human infants have an evolved attachment system that pulls them toward whoever cares for them. The behaviors are familiar: the cry that summons, the smile that rewards, the panic when the caregiver disappears. Mary Ainsworth, Bowlby\'s collaborator, took the theory into the lab in the 1970s and produced the Strange Situation, the empirical procedure that gave attachment its modern shape.' },
        { type: 'h2', text: 'The Strange Situation' },
        { type: 'p', text: 'In Ainsworth\'s procedure a one-year-old plays in an unfamiliar room while a parent leaves and returns twice. How the child responds to the reunion turns out to predict a great deal: securely attached children seek the parent for comfort and then return to play; insecure-avoidant children act as if they do not need the parent; insecure-ambivalent children remain distressed even when comforted. A fourth category, disorganized attachment, was added later for children whose strategies break down entirely. Cross-cultural replications show the categories travel, with caveats about base rates.' },
        { type: 'h2', text: 'What "responsive" actually means' },
        { type: 'p', text: 'The single best predictor of secure attachment is sensitive responsiveness — a caregiver who notices the child\'s signals and answers them most of the time. Most of the time is the operative phrase. The longitudinal work of Edward Tronick and others suggests that attachment is built less on perfect attunement than on the experience of repair: the parent who misreads the child, then notices, then makes it right. Children do not need flawless caregivers; they need ones who keep coming back.' },
        { type: 'h2', text: 'The cultural caveat' },
        { type: 'p', text: 'Attachment theory grew up in the postwar West, with assumptions about a single primary caregiver that do not hold everywhere. Anthropologists studying the Efe of central Africa, the Beng of Côte d\'Ivoire, the Aka — communities where infants are routinely held and fed by many adults — have made the case that the theory needs to be widened, not abandoned. The core finding holds across cultures: children whose distress is reliably met develop differently from children whose distress is not. The number and identity of the people doing the meeting varies.' },
        { type: 'callout', text: 'There is no school of attachment that requires a parent to never put the baby down, or to share a bed, or to stay home from work. Sensitive responsiveness — most of the time — is the empirical claim. Everything else is interpretation.' },
      ],

      keyTerms: ['secure attachment', 'sensitive responsiveness', 'Strange Situation', 'co-regulation', 'still-face experiment', 'serve and return', 'attachment style', 'rupture and repair'],

      resources: {
        videos: [
          {
            id: 'apzXGEbZht0',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=apzXGEbZht0',
            title: 'Still Face Experiment — Dr. Edward Tronick',
            channel: 'UMass Boston',
            duration: '2:48',
            featured: true,
            why: 'The single most-watched developmental psychology video. Two minutes; a baby\'s face shows you what attachment is.',
          },
          {
            id: 'm_6rQk7jlrc',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=m_6rQk7jlrc',
            title: 'The Strange Situation — Mary Ainsworth',
            channel: 'BBC / archival',
            duration: '6:11',
            featured: true,
            why: 'Ainsworth\'s actual research footage. The classifications are vivid in a way no text can be.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@HarvardCenteronTheDevelopingChild',
            title: 'Harvard Center on the Developing Child — full channel',
            channel: 'Harvard CDC',
            duration: 'variable',
            featured: true,
            why: 'Short animated explainers from Jack Shonkoff\'s lab. The "Serve and Return" video is the canonical introduction to responsive caregiving.',
          },
        ],
        books: [
          {
            title: 'A Secure Base',
            author: 'John Bowlby',
            year: 1988,
            url: 'https://en.wikipedia.org/wiki/John_Bowlby',
            why: 'Bowlby\'s own short summary, written for a general audience late in his life. The clearest single statement of the theory.',
          },
          {
            title: 'The Boy Who Was Raised as a Dog',
            author: 'Bruce Perry & Maia Szalavitz',
            year: 2006,
            url: 'https://en.wikipedia.org/wiki/Bruce_D._Perry',
            why: 'A child psychiatrist\'s case studies of severely neglected children. Hard reading; profound on the developmental cost of disrupted attachment.',
          },
          {
            title: 'The Gardener and the Carpenter',
            author: 'Alison Gopnik',
            year: 2016,
            url: 'https://en.wikipedia.org/wiki/Alison_Gopnik',
            why: 'A developmental psychologist\'s argument that "parenting" as a verb is recent and strange. The widest, calmest book on what children actually need.',
          },
        ],
        articles: [
          {
            title: 'Attachment theory',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Attachment_theory',
            why: 'Comprehensive reference, with the cross-cultural critiques.',
            year: null,
          },
          {
            title: 'Serve and Return',
            source: 'Harvard Center on the Developing Child',
            url: 'https://developingchild.harvard.edu/science/key-concepts/serve-and-return/',
            why: 'A short, animated explainer of the back-and-forth that builds the developing brain.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Infant and Early Childhood Mental Health',
            provider: 'ZERO TO THREE',
            url: 'https://www.zerotothree.org/',
            free: true,
            why: 'Free webinars and articles from the leading US nonprofit on the first three years.',
          },
        ],
        primarySources: [
          {
            title: 'Bowlby, "The Nature of the Child\'s Tie to His Mother" (1958)',
            url: 'https://en.wikipedia.org/wiki/John_Bowlby',
            why: 'The paper that started the field. Worth reading once for the original argument.',
          },
        ],
      },

      seeAlso: ['stages', 'development', 'cognition'],
      prereqs: [],
      leadsTo: ['stages'],
      chapterActivity: 'A monthly new-parent circle at a Brooklyn library — coffee, the floor, and an experienced facilitator who has read more developmental psychology than any of the parents need to.',
      sources: [
        'https://en.wikipedia.org/wiki/Attachment_theory',
        'https://developingchild.harvard.edu/',
        'https://www.zerotothree.org/',
      ],
      verifiedAt: '2026-04-23',
    },

    stages: {
      id: 'stages',
      name: 'Developmental Stages',
      level: 'Intermediate',
      dek: 'Children change in patterns researchers have mapped for a century — and the patterns are reassuring once you know they exist.',
      readTime: '11 min',

      sections: ['The first year', 'Toddlers and the magnificent no', 'Childhood — concrete then abstract', 'Adolescence as second infancy'],
      body: [
        { type: 'lead', text: 'Almost every parent who has watched a child go from babbling syllables to whole sentences in a single summer has wondered whether something is wrong. Almost always there is not. Childhood unfolds in long quiet stretches and sudden lurches, and the lurches alarm the people watching even as they delight the child. Knowing the rough shape of what is coming makes the alarm easier to carry.' },
        { type: 'h2', text: 'The first year' },
        { type: 'p', text: 'In the first weeks the newborn brain is doing essentially one thing — building the basic circuits of the senses. Around six weeks comes the first real social smile. Around four months, rolling. Around six, the introduction of solid food and the first tooth. Around nine, object permanence and the beginning of stranger anxiety, which feels like a regression but is actually a leap. Around twelve, often the first word and sometimes the first step. The wide range across babies for any of these milestones is normal; the American Academy of Pediatrics publishes a list of red flags for the genuine outliers.' },
        { type: 'h2', text: 'Toddlers and the magnificent no' },
        { type: 'p', text: 'Between roughly eighteen months and three years the child discovers that they are a separate person with separate desires. The discovery is wonderful and exhausting. The famous "no" of the two-year-old is not defiance but the rehearsal of agency — a child trying out what it feels like to want something different from the adult in charge. The schools of thought diverge here: behaviorist approaches (1-2-3 Magic, time-outs) lean on consistent consequences; relational approaches (Janet Lansbury\'s adaptation of RIE, Becky Kennedy\'s Good Inside) lean on co-regulation and naming feelings. The evidence supports parts of each; the consensus is that warm, predictable adults produce calm, capable children almost regardless of system.' },
        { type: 'h2', text: 'Childhood — concrete then abstract' },
        { type: 'p', text: 'Jean Piaget\'s mid-century stage theory has been refined heavily, but the broad arc holds. Between four and seven, children think concretely: this rock, that bird, this person. By eight or nine, they begin handling categories, time, and other people\'s perspectives more flexibly. Between ten and twelve, abstract reasoning starts to come online — fairness as a principle, not just as a complaint. The reading-age window opens around five for some children and eight for others, and the late readers usually catch up to the early ones by middle school.' },
        { type: 'h2', text: 'Adolescence as second infancy' },
        { type: 'p', text: 'In the past two decades neuroscientists have shown that the human brain is rewiring almost as dramatically in the teenage years as it did in the first three. Pruning, myelination, and the late maturation of the prefrontal cortex (not finished until the mid-twenties) explain much that parents find baffling: emotional volatility, sudden risk-taking, an obsessive interest in peers. The work of Laurence Steinberg and others reframes adolescence less as a problem and more as the predictable consequence of an extraordinary period of development.' },
        { type: 'callout', text: 'Almost every parenting "stage" framework — Erikson, Piaget, Vygotsky, the modern attachment theorists — agrees on one thing. The thing the child can do today is built on top of what they could do six months ago. Trust that, and most worry shrinks.' },
      ],

      keyTerms: ['object permanence', 'theory of mind', 'self-regulation', 'temperament', 'scaffolding', 'zone of proximal development', 'pruning', 'milestone'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@CrashCourse',
            title: 'Crash Course Psychology — Developmental playlist',
            channel: 'Crash Course',
            duration: 'variable',
            featured: true,
            why: 'Hank Green\'s ten-minute summaries of Piaget, Erikson, Vygotsky, and the modern revisions. The clearest video tour of the field.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@HarvardCenteronTheDevelopingChild',
            title: 'Harvard Center on the Developing Child — full channel',
            channel: 'Harvard CDC',
            duration: 'variable',
            featured: true,
            why: 'Short animations on brain architecture, executive function, toxic stress. Free, evidence-based, and beautifully made.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@DrBeckyAtGoodInside',
            title: 'Dr. Becky at Good Inside',
            channel: 'Becky Kennedy',
            duration: 'variable',
            featured: true,
            why: 'A clinical psychologist on the practical side of toddlerhood and middle childhood. Worth pairing with a more behaviorist source for balance.',
          },
        ],
        books: [
          {
            title: 'The Whole-Brain Child',
            author: 'Daniel J. Siegel & Tina Payne Bryson',
            year: 2011,
            url: 'https://en.wikipedia.org/wiki/Daniel_J._Siegel',
            why: 'A neuroscientist and a therapist on what is happening upstairs and downstairs in the developing brain. The most-recommended modern parenting book for a reason.',
          },
          {
            title: 'How Children Succeed',
            author: 'Paul Tough',
            year: 2012,
            url: 'https://en.wikipedia.org/wiki/Paul_Tough',
            why: 'A reporter\'s synthesis of the research on character, grit, and what actually predicts later flourishing. Honest about what the science does and does not show.',
          },
          {
            title: 'Hunt, Gather, Parent',
            author: 'Michaeleen Doucleff',
            year: 2021,
            url: 'https://en.wikipedia.org/wiki/Michaeleen_Doucleff',
            why: 'An NPR science reporter\'s account of what she learned from parents in three traditional cultures. Useful corrective to American assumptions.',
          },
        ],
        articles: [
          {
            title: 'Child development',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Child_development',
            why: 'Comprehensive reference, with the major theorists and their critics.',
            year: null,
          },
          {
            title: 'Developmental Milestones',
            source: 'CDC',
            url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
            why: 'The CDC\'s revised milestone checklists by age. Use as a baseline; talk to a pediatrician if anything is missing for your child.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Everyday Parenting',
            provider: 'Coursera (Yale)',
            url: 'https://www.coursera.org/learn/everyday-parenting',
            free: true,
            why: 'Alan Kazdin\'s evidence-based parenting course from Yale. Free to audit; a useful counterweight to the more relational schools.',
          },
        ],
      },

      seeAlso: ['attachment', 'development', 'cognition'],
      prereqs: ['attachment'],
      leadsTo: [],
      chapterActivity: 'A seasonal "ages and stages" night at a Queens family-resource center: a rotating panel — pediatrician, school counselor, retired teacher — answers questions from parents grouped by their child\'s age.',
      sources: [
        'https://en.wikipedia.org/wiki/Child_development',
        'https://www.cdc.gov/ncbddd/actearly/milestones/index.html',
        'https://developingchild.harvard.edu/',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
