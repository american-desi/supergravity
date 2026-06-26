// content/publicspeaking.js
// Batch: B11-life-skills-I
// Last updated: 2026-04-23 by BATCH B11-life-skills-I
//
// Topics from data.js: structure, delivery

window.CONTENT = window.CONTENT || {};
window.CONTENT.publicspeaking = {
  subjectId: 'publicspeaking',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B11-life-skills-I',
  topics: {

    structure: {
      id: 'structure',
      name: 'Talk Structure',
      level: 'Beginner',
      dek: 'A talk that lands has a sturdy spine — one big idea, three or four supports, an opening that hooks, a close that sticks.',
      readTime: '10 min',

      sections: ['One idea, named early', 'The three-body shape', 'The opening you cannot wing', 'The close that lasts'],
      body: [
        { type: 'lead', text: 'In 1858 a long-shot Senate candidate named Abraham Lincoln stood up at the Illinois Republican convention and announced, in his second sentence, that "a house divided against itself cannot stand." His advisors had begged him to cut the line. He left it in. Fifteen minutes later he had built the rest of the speech around that single image, and the speech — and the image — went on to do most of the work of winning him the presidency. The structure of a memorable talk has not changed since: name the idea, build the supports, leave the listener something they can repeat by Tuesday.' },
        { type: 'h2', text: 'One idea, named early' },
        { type: 'p', text: 'A talk is not a paper. The audience cannot reread paragraphs they missed; they cannot flip back to clarify a definition. They can hold one idea, with maybe three supporting points, and one resonant ending. Most bad talks fail at the first step — they have four ideas, or no idea, and the audience never quite locks on. Before you outline anything, write the central claim of the talk in one sentence. If you cannot, the talk is not ready.' },
        { type: 'h2', text: 'The three-body shape' },
        { type: 'p', text: 'The classical structure inherited from rhetoric — exordium, narration, division, proof, refutation, peroration — collapses, for most modern talks, into a clean three-act shape: tell them what you are going to tell them, tell them, tell them what you told them. Inside that, the standard pattern is one idea, three supports, one closing image. Twenty minutes for the whole thing if it is a TED-style talk; forty-five if it is a lecture. Anything longer needs to be broken up with questions, exercises, or two clearly separate halves.' },
        { type: 'h2', text: 'The opening you cannot wing' },
        { type: 'p', text: 'The first thirty seconds of a talk decide whether the audience leans in or starts checking their phones. The two openings that almost never work: a long throat-clear about how grateful you are to be there, and a definition. The two that almost always do: a concrete moment ("It is 1858, and a long-shot candidate is about to give the most reckless speech of his career") and a real question that the talk will answer. Whatever you choose, write it out word for word and rehearse it until it is muscle memory. The middle of the talk you can improvise; the open you cannot.' },
        { type: 'h2', text: 'The close that lasts' },
        { type: 'p', text: 'The Heath brothers, in Made to Stick, argue that a memorable idea has six properties — simple, unexpected, concrete, credible, emotional, story. A good closing has at least four of them: a single sentence that names the central claim, dressed in a concrete image, ending on an emotional beat. "I have a dream" is the model. The summary close — "in conclusion, we have learned that…" — is its opposite, and is the surest way to leak energy in the last seconds you control.' },
        { type: 'callout', text: 'The shortest possible test of a talk: tell a friend the one sentence the audience should leave with. If you cannot say it in one sentence, the audience will not be able to either.' },
      ],

      keyTerms: ['through-line', 'rhetorical structure', 'rule of three', 'callback', 'pyramid principle', 'signpost', 'narrative arc', 'opening hook'],

      resources: {
        videos: [
          {
            id: '8S0FDjFBj8o',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=8S0FDjFBj8o',
            title: 'Nancy Duarte: The Secret Structure of Great Talks',
            channel: 'TEDx',
            duration: '18:00',
            featured: true,
            why: 'Duarte mapped the structural pattern shared by Lincoln, Steve Jobs, and Martin Luther King Jr. Eighteen minutes; one of the most useful talks ever given about talks.',
          },
          {
            id: 'iG9CE55wbtY',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=iG9CE55wbtY',
            title: 'Try Something New for 30 Days',
            channel: 'TED (Matt Cutts)',
            duration: '3:27',
            featured: true,
            why: 'A three-minute model of the form. Single idea, single image, perfect close. Worth dissecting line by line.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@HarvardBusinessReview',
            title: 'HBR Guide to Better Business Writing & Speaking',
            channel: 'Harvard Business Review',
            duration: 'variable',
            featured: true,
            why: 'HBR\'s short videos on how to structure presentations and meetings; pragmatic, drawn from the McKinsey pyramid tradition.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TEDTalksDirector',
            title: 'TED Talks — full channel',
            channel: 'TED',
            duration: 'variable',
            featured: false,
            why: 'The largest archive of well-structured short talks. The best ones tend to be ten minutes long and follow Duarte\'s pattern.',
          },
        ],
        books: [
          {
            title: 'Talk Like TED',
            author: 'Carmine Gallo',
            year: 2014,
            url: 'https://en.wikipedia.org/wiki/Carmine_Gallo',
            why: 'Gallo reverse-engineered the most-watched TED talks. Practical, repetitive in a useful way, and well worth a single read.',
          },
          {
            title: 'Made to Stick',
            author: 'Chip & Dan Heath',
            year: 2007,
            url: 'https://en.wikipedia.org/wiki/Made_to_Stick',
            why: 'The SUCCESs framework — simple, unexpected, concrete, credible, emotional, stories — is a structural checklist for any talk.',
          },
          {
            title: 'Resonate',
            author: 'Nancy Duarte',
            year: 2010,
            url: 'https://en.wikipedia.org/wiki/Nancy_Duarte',
            why: 'The book behind the TEDx talk above. The chapter on the "what is" / "what could be" rhythm is the most influential structural insight in modern presentation.',
          },
        ],
        articles: [
          {
            title: 'Public speaking',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Public_speaking',
            why: 'The history of the discipline back to the Greek sophists; the modern evidence on what works.',
            year: null,
          },
          {
            title: 'Rhetoric',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/aristotle-rhetoric/',
            why: 'Aristotle\'s Rhetoric is still the deep source for everything in modern public speaking. SEP\'s entry is the best free summary.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Toastmasters Pathways',
            provider: 'Toastmasters International',
            url: 'https://www.toastmasters.org/pathways-overview',
            free: false,
            why: 'The hundred-year-old peer-feedback club. Cheap, ubiquitous, and the only way most people actually get better at this.',
          },
          {
            title: 'Public Speaking — University of Washington',
            provider: 'edX (UW)',
            url: 'https://www.edx.org/learn/public-speaking',
            free: true,
            why: 'A free university-level intro. Audit free; buy the certificate only if you want it.',
          },
        ],
      },

      seeAlso: ['delivery', 'rhetoric', 'negotiation'],
      prereqs: [],
      leadsTo: ['delivery'],
      chapterActivity: 'A monthly Toastmasters meeting at a midtown library — five-to-seven minute prepared speeches, evaluated by peers, the same format the club has used since 1924.',
      sources: [
        'https://en.wikipedia.org/wiki/Public_speaking',
        'https://en.wikipedia.org/wiki/Made_to_Stick',
        'https://www.toastmasters.org/',
      ],
      verifiedAt: '2026-04-23',
    },

    delivery: {
      id: 'delivery',
      name: 'Delivery',
      level: 'Intermediate',
      dek: 'Pace, pause, eye contact — the body of the speaker is half the message, and almost none of it is the words.',
      readTime: '10 min',

      sections: ['The voice', 'The body', 'Nerves and what to do with them', 'Slides as a service to the talk'],
      body: [
        { type: 'lead', text: 'In 1980 the rhetorician Albert Mehrabian\'s thirty-year-old research was misquoted into a slogan: communication is 7% words, 38% tone, 55% body language. Mehrabian himself spent the rest of his life correcting the misuse. The original finding applied only to the narrow case of inconsistent emotional messages. But like many half-remembered statistics, the slogan survives because it points at a real thing: when a speaker\'s words and body disagree, the audience believes the body.' },
        { type: 'h2', text: 'The voice' },
        { type: 'p', text: 'A talk delivered in a monotone at a steady pace — the default mode of an inexperienced speaker — flattens into background noise within two minutes. The four levers that control this are pitch, pace, volume, and pause. The pause is by far the most underused. A two-second silence after a key sentence does more work than three more sentences explaining it. Pace varies by section, slowing at moments of weight and speeding up through narrative. Pitch should rise on a question and fall on a statement; up-talk — rising at the end of every sentence — drains authority faster than almost any other habit.' },
        { type: 'h2', text: 'The body' },
        { type: 'p', text: 'Stand with your weight even on both feet, hands at your sides or visible above the waist. Move when you have a reason to: a step forward to emphasize a point, a step back to mark a transition. Do not rock; do not pace. Eye contact should land on individuals long enough to feel like a conversation — three or four seconds each — never sweep over the room like a sprinkler. In a large room, pick four or five faces in the four corners and the middle, and rotate among them. They will feel addressed; everyone around them will feel addressed too.' },
        { type: 'h2', text: 'Nerves and what to do with them' },
        { type: 'p', text: 'The Harvard psychologist Alison Wood Brooks ran a series of experiments showing that people who reframed pre-talk anxiety as excitement — not "I am nervous," but "I am excited" — performed measurably better. The body produces the same chemicals for both states; only the label differs. The cardiovascular machinery of nerves is also useful information: the racing heart and the dry mouth are giving you energy. Use it. Speakers who work to feel calm before a talk often look flat. Speakers who work to feel ready often crackle.' },
        { type: 'h2', text: 'Slides as a service to the talk' },
        { type: 'p', text: 'Slides should support the speaker, not replace the speaker. If your audience can read your slide, they will, and they will stop listening. Garr Reynolds and Edward Tufte have spent careers arguing for the same thing: large images, six words or fewer per slide, no bullet lists. The model is a cinema title card, not a textbook page. If you find yourself with twelve bullets and a small font, what you actually need is a handout, and your slides should be cut.' },
        { type: 'callout', text: 'Record yourself once with the camera on. Watch it on mute. The number of nervous habits — fidgets, weight shifts, hand flutters — that disappear forever after a single watch is genuinely surprising.' },
      ],

      keyTerms: ['pace', 'pause', 'projection', 'eye contact', 'gesture', 'stage anchor', 'slide minimalism', 'reappraisal'],

      resources: {
        videos: [
          {
            id: '_mZGySl1mjk',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=_mZGySl1mjk',
            title: 'Julian Treasure: How to Speak So That People Want to Listen',
            channel: 'TED',
            duration: '9:58',
            featured: true,
            why: 'Treasure on the four cornerstones — honesty, authenticity, integrity, love — and the mechanics of voice. One of the most-watched TED talks ever.',
          },
          {
            id: 'tShavGuo0_E',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=tShavGuo0_E',
            title: 'Conor Neill: How to Speak with Confidence',
            channel: 'Conor Neill',
            duration: '15:42',
            featured: true,
            why: 'An IESE professor on the body mechanics of presence. The "stand still and look someone in the eye" exercise will change a speaker more than any course.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@HarvardBusinessReview',
            title: 'HBR — Public Speaking videos',
            channel: 'Harvard Business Review',
            duration: 'variable',
            featured: true,
            why: 'Short, structured pieces from the HBR Guide series, drawing on Carmine Gallo and others.',
          },
        ],
        books: [
          {
            title: 'Talk Like TED',
            author: 'Carmine Gallo',
            year: 2014,
            url: 'https://en.wikipedia.org/wiki/Carmine_Gallo',
            why: 'Gallo\'s chapters on delivery — pace, pause, eye contact — are the most-quoted modern reference.',
          },
          {
            title: 'Presentation Zen',
            author: 'Garr Reynolds',
            year: 2008,
            url: 'https://en.wikipedia.org/wiki/Garr_Reynolds',
            why: 'The book that changed how the technology industry made slides. Read with The Visual Display of Quantitative Information for the deeper case.',
          },
          {
            title: 'Steal the Show',
            author: 'Michael Port',
            year: 2015,
            url: 'https://www.michaelport.com',
            why: 'A trained actor on how to perform a talk without ever feeling fake. The chapter on rehearsal alone is worth the price.',
          },
        ],
        articles: [
          {
            title: 'Body language',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Body_language',
            why: 'Comprehensive reference, including the Mehrabian misquote.',
            year: null,
          },
          {
            title: 'Get Excited: Reappraising Pre-Performance Anxiety as Excitement',
            source: 'Harvard Business School Working Knowledge',
            url: 'https://www.hbs.edu/faculty/Pages/item.aspx?num=46038',
            why: 'A summary of Alison Wood Brooks\'s research on the simple verbal reframe that improves performance.',
            year: 2014,
          },
        ],
        courses: [
          {
            title: 'Introduction to Public Speaking',
            provider: 'edX (University of Washington)',
            url: 'https://www.edx.org/learn/public-speaking',
            free: true,
            why: 'Free university-level intro covering voice, body, and rehearsal.',
          },
          {
            title: 'Toastmasters Pathways',
            provider: 'Toastmasters International',
            url: 'https://www.toastmasters.org/pathways-overview',
            free: false,
            why: 'The cheapest weekly rehearsal you will ever find with an actual audience.',
          },
        ],
      },

      seeAlso: ['structure', 'rhetoric', 'theater'],
      prereqs: ['structure'],
      leadsTo: [],
      chapterActivity: 'A "speakers\' lab" Tuesday at a Bushwick performance space — three minutes each, on a topic drawn from a hat, with video review afterward.',
      sources: [
        'https://en.wikipedia.org/wiki/Public_speaking',
        'https://en.wikipedia.org/wiki/Body_language',
        'https://www.toastmasters.org/',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
