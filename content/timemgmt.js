// content/timemgmt.js
// Batch: B11-life-skills-I
// Last updated: 2026-04-23 by BATCH B11-life-skills-I
//
// Topics from data.js: priorities, deep_work

window.CONTENT = window.CONTENT || {};
window.CONTENT.timemgmt = {
  subjectId: 'timemgmt',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B11-life-skills-I',
  topics: {

    priorities: {
      id: 'priorities',
      name: 'Priorities',
      level: 'Beginner',
      dek: 'Distinguishing what is urgent from what is important is the oldest move in productivity — and the one most often inverted.',
      readTime: '9 min',

      sections: ['The Eisenhower distinction', 'The to-do list as a half-solution', 'Capture, then decide', 'Saying no on purpose'],
      body: [
        { type: 'lead', text: 'In a 1954 speech at the Northwestern University centennial, President Dwight Eisenhower attributed to a "former college president" a distinction that would outlive its source: "I have two kinds of problems, the urgent and the important. The urgent are not important, and the important are never urgent." The original speaker is lost; the line is now in every productivity book ever written. The reason it survives is that almost everyone, on close inspection, spends most of their day doing the urgent and almost none of it doing the important.' },
        { type: 'h2', text: 'The Eisenhower distinction' },
        { type: 'p', text: 'Stephen Covey turned the line into a four-quadrant matrix in The 7 Habits of Highly Effective People: urgent and important (crises), important but not urgent (long-term work), urgent but not important (interruptions), and neither (waste). His central observation, repeated in nearly every modern productivity framework, is that highly effective people do most of their work in the second quadrant — the things that are important and not yet on fire. Most people do most of their work in the first and third, where the day forces their hand.' },
        { type: 'h2', text: 'The to-do list as a half-solution' },
        { type: 'p', text: 'A flat to-do list is the productivity tool everyone tries first and almost everyone abandons within a month. The reason is that lists do not distinguish a thirty-second task from a three-month project, and they do not distinguish urgent from important. The fix is layered: a long capture list of everything you might do, a much shorter weekly list of three to five things that actually move important work forward, and a daily list of one or two specific blocks that get the next concrete step done. The discipline is in pruning, not collecting.' },
        { type: 'h2', text: 'Capture, then decide' },
        { type: 'p', text: 'David Allen\'s Getting Things Done, the dominant productivity system since 2001, makes one move that almost every other framework borrows: separate the act of capturing what is on your plate from the act of deciding what to do about it. Anything you might do goes into a single trusted inbox. Once a week, you process the inbox into projects, next actions, and someday-maybe items. The cost of switching back and forth between capturing and deciding is the source of most productivity friction; the discipline of separating them is most of the value Allen offers.' },
        { type: 'h2', text: 'Saying no on purpose' },
        { type: 'p', text: 'The other half of priority management is the part most people will not do: declining things. Greg McKeown\'s Essentialism makes the case that disciplined no\'s are what create the conditions for important work. The Stanford computer scientist Donald Knuth famously stopped using email in 1990, on the grounds that being on top of things and getting to the bottom of things require very different cognitive postures. Most people cannot do what Knuth did; everyone can decline a few of the meetings on their calendar this week.' },
        { type: 'callout', text: 'A surprisingly useful question, asked once a week: of everything I did the past seven days, which two or three things will still matter in a year? Almost everyone is shocked by how short the answer is.' },
      ],

      keyTerms: ['Eisenhower matrix', 'urgent vs important', 'next action', 'inbox', 'weekly review', 'capture', 'reactive vs proactive', 'opportunity cost'],

      resources: {
        videos: [
          {
            id: '5tnsT15GXBA',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=5tnsT15GXBA',
            title: 'Tim Urban: Inside the Mind of a Master Procrastinator',
            channel: 'TED',
            duration: '13:54',
            featured: true,
            why: 'Urban\'s monkey, panic-monster, and life-calendar are the most persuasive case ever made on a stage for prioritizing important-but-not-urgent work.',
          },
          {
            id: 'iDbdXTMnOmE',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=iDbdXTMnOmE',
            title: 'Inside the Mind of a Master Procrastinator (extended)',
            channel: 'Wait But Why',
            duration: '18:31',
            featured: false,
            why: 'Urban in long form, doubling down on the same arguments. Useful as a counter to advice that makes prioritization sound easy.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@CalNewportMedia',
            title: 'Cal Newport — full channel',
            channel: 'Cal Newport',
            duration: 'variable',
            featured: true,
            why: 'Newport\'s short videos on productivity rest on the same priority logic. The Slow Productivity playlist is the current frontier.',
          },
        ],
        books: [
          {
            title: 'Getting Things Done',
            author: 'David Allen',
            year: 2001,
            url: 'https://en.wikipedia.org/wiki/Getting_Things_Done',
            why: 'The defining modern system. Skip the technology recommendations; the capture-and-process logic is the lasting contribution.',
          },
          {
            title: 'The 7 Habits of Highly Effective People',
            author: 'Stephen R. Covey',
            year: 1989,
            url: 'https://en.wikipedia.org/wiki/The_7_Habits_of_Highly_Effective_People',
            why: 'The book that made the Eisenhower matrix famous. Habit three — "put first things first" — is the priority chapter.',
          },
          {
            title: 'Four Thousand Weeks',
            author: 'Oliver Burkeman',
            year: 2021,
            url: 'https://en.wikipedia.org/wiki/Oliver_Burkeman',
            why: 'A reformed productivity columnist on why almost every productivity system fails: it pretends you can do everything. The most-recommended modern book on time and meaning.',
          },
        ],
        articles: [
          {
            title: 'Time management',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Time_management',
            why: 'Comprehensive reference, with the major frameworks side by side.',
            year: null,
          },
          {
            title: 'Eisenhower matrix',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Time_management#The_Eisenhower_Method',
            why: 'The history and the standard four-quadrant diagram.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Work Smarter, Not Harder: Time Management',
            provider: 'Coursera (UC Irvine)',
            url: 'https://www.coursera.org/learn/work-smarter-not-harder',
            free: true,
            why: 'Free to audit. Margaret Meloni\'s six-week intro covers prioritization and basic systems.',
          },
        ],
      },

      seeAlso: ['deep_work', 'finance', 'negotiation'],
      prereqs: [],
      leadsTo: ['deep_work'],
      chapterActivity: 'A January "annual review" Saturday at a Brooklyn café — bring last year\'s calendar, leave with three things you will not do this year.',
      sources: [
        'https://en.wikipedia.org/wiki/Time_management',
        'https://en.wikipedia.org/wiki/Getting_Things_Done',
        'https://en.wikipedia.org/wiki/The_7_Habits_of_Highly_Effective_People',
      ],
      verifiedAt: '2026-04-23',
    },

    deep_work: {
      id: 'deep_work',
      name: 'Deep Work',
      level: 'Intermediate',
      dek: 'Sustained, undistracted focus is the rarest professional capacity left — and the one most worth protecting.',
      readTime: '11 min',

      sections: ['Newport\'s claim', 'The cost of switching', 'Building the practice', 'A note on shallow work'],
      body: [
        { type: 'lead', text: 'In 1988, the mathematician Paul Erdős, by then in his seventies, was still doing about twelve hours of mathematics a day. He had no fixed home, no children, almost no possessions; he traveled between universities with a suitcase and worked, with whoever was available, on the next problem. He died in 1996, the most prolific mathematician in history by a wide margin. Erdős is an extreme case of what the Georgetown computer scientist Cal Newport calls deep work — and his career is also the case for why you might want some of it in yours.' },
        { type: 'h2', text: 'Newport\'s claim' },
        { type: 'p', text: 'Newport\'s 2016 book Deep Work argues that the ability to do cognitively demanding work for long, undistracted stretches is becoming both more valuable and more rare. More valuable because the economy increasingly rewards the work that machines and short-attention humans cannot do; more rare because the dominant tools of the modern workplace — email, Slack, the open office — are designed in ways that make sustained focus structurally difficult. The argument is not new; the synthesis is, and the case has held up.' },
        { type: 'h2', text: 'The cost of switching' },
        { type: 'p', text: 'The psychologist Sophie Leroy coined the term attention residue in 2009 to describe what happens when you switch from one task to another: a fraction of your attention stays behind on the first task for as much as fifteen or twenty minutes. A morning of "just checking email" between tasks is a morning in which no task ever gets the speaker\'s full mind. Newport\'s prescription is mostly to refuse the switch — long blocks, single tasks, no inboxes open — but his more practical contribution is the diagnostic: most modern knowledge work is shallow not because it is unimportant but because it has been chopped into pieces too small for anyone\'s attention to land.' },
        { type: 'h2', text: 'Building the practice' },
        { type: 'p', text: 'Almost everyone who does deep work for a living protects time the same way: by ritual. Tchaikovsky composed every morning from nine to noon. Maya Angelou rented a hotel room for the day and wrote on a yellow pad. Knuth declined email. The specific ritual matters less than the fact that it exists, recurs, and is defended against the easy interruptions of the day. For most people the right starting move is more modest: a single ninety-minute block in the morning, before the inbox is opened, with the phone in another room. Done daily for six weeks, this single change tends to produce more visible work than any other productivity intervention.' },
        { type: 'h2', text: 'A note on shallow work' },
        { type: 'p', text: 'Shallow work — email, scheduling, status updates, meetings about meetings — is not in itself a moral failing. It is part of nearly every job. The trouble is that shallow work expands to fill any time available, and most people give it the morning, which is the cognitive prime. The simple inversion — shallow work in the afternoon, deep work in the morning — is most of what Newport recommends. The remaining ten percent is having the conversations with your colleagues required to make that calendar possible.' },
        { type: 'quote', text: 'I\'ll live the focused life, because it\'s the best kind there is.', cite: 'Cal Newport, Deep Work (citing Winifred Gallagher)' },
      ],

      keyTerms: ['deep work', 'shallow work', 'attention residue', 'context switching', 'flow', 'time blocking', 'monk mode', 'maker schedule'],

      resources: {
        videos: [
          {
            id: '3E7hkPZ-HTk',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=3E7hkPZ-HTk',
            title: 'Cal Newport: Quit Social Media',
            channel: 'TEDx',
            duration: '13:47',
            featured: true,
            why: 'Newport\'s most-watched talk. The argument generalizes: protect the conditions for sustained attention.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@CalNewportMedia',
            title: 'Cal Newport — full channel',
            channel: 'Cal Newport',
            duration: 'variable',
            featured: true,
            why: 'Newport\'s short-form videos on the deep-work practice, drawn from his Deep Questions podcast.',
          },
          {
            id: 'fXIeFJCqsPs',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=fXIeFJCqsPs',
            title: 'Mihaly Csikszentmihalyi: Flow',
            channel: 'TED',
            duration: '18:55',
            featured: true,
            why: 'The psychologist who named flow, talking about the conditions for the state. Pairs naturally with Newport.',
          },
        ],
        books: [
          {
            title: 'Deep Work',
            author: 'Cal Newport',
            year: 2016,
            url: 'https://en.wikipedia.org/wiki/Cal_Newport',
            why: 'The standard modern text on the subject. Read straight through; the second half is the operational one.',
          },
          {
            title: 'Slow Productivity',
            author: 'Cal Newport',
            year: 2024,
            url: 'https://www.calnewport.com',
            why: 'Newport\'s 2024 follow-up: do fewer things, work at a natural pace, obsess over quality. The mature version of Deep Work.',
          },
          {
            title: 'Flow: The Psychology of Optimal Experience',
            author: 'Mihaly Csikszentmihalyi',
            year: 1990,
            url: 'https://en.wikipedia.org/wiki/Flow_(psychology)',
            why: 'The classic on what sustained focus actually feels like. The science behind why deep work is also satisfying.',
          },
        ],
        articles: [
          {
            title: 'Attention residue',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Attention',
            why: 'The cognitive science of why context switching costs more than the time it takes.',
            year: null,
          },
          {
            title: 'Maker\'s Schedule, Manager\'s Schedule',
            source: 'Paul Graham',
            url: 'https://www.paulgraham.com/makersschedule.html',
            why: 'Graham\'s 2009 essay on why a single midday meeting can ruin a maker\'s day. Two pages; foundational.',
            year: 2009,
          },
        ],
        courses: [
          {
            title: 'Learning How to Learn',
            provider: 'Coursera (UC San Diego)',
            url: 'https://www.coursera.org/learn/learning-how-to-learn',
            free: true,
            why: 'Barbara Oakley\'s blockbuster MOOC on focused vs. diffuse modes of thinking. Free to audit; pairs naturally with Deep Work.',
          },
        ],
        primarySources: [
          {
            title: 'Knuth on Email',
            url: 'https://www-cs-faculty.stanford.edu/~knuth/email.html',
            why: 'Donald Knuth\'s short page explaining why he stopped using email in 1990. The original deep-work manifesto.',
          },
        ],
      },

      seeAlso: ['priorities', 'cognition', 'finance'],
      prereqs: ['priorities'],
      leadsTo: [],
      chapterActivity: 'A weekly "deep work morning" at a quiet Lower East Side library — three hours, no laptops with Wi-Fi enabled, one block of focused work each.',
      sources: [
        'https://en.wikipedia.org/wiki/Cal_Newport',
        'https://en.wikipedia.org/wiki/Flow_(psychology)',
        'https://www.paulgraham.com/makersschedule.html',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
