// content/stand_up.js
// Batch: B13-arts-performing
// Last updated: 2026-04-23 by BATCH B13+B14
//
// Topics this subject must cover (from data.js):
//   Core: joke_structure, voice
//
// Note: subject id in data.js is `stand_up` though `file` name uses an underscore.

window.CONTENT = window.CONTENT || {};
window.CONTENT.stand_up = {
  subjectId: 'stand_up',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B13+B14',
  topics: {

    joke_structure: {
      id: 'joke_structure',
      name: 'Joke Structure',
      level: 'Beginner',
      dek: 'Setup, punch, turn — the two-part architecture of every laugh.',
      readTime: '12 min',

      sections: ['The basic shape', 'Misdirection in a sentence', 'The tag', 'Callbacks', 'Why the premise is everything'],
      body: [
        { type: 'lead', text: 'In 1964, a twenty-seven-year-old stand-up named Woody Allen was writing material in a small office above a Manhattan deli when he came up with a joke he would tell on stage for years: "I took a speed-reading course and read War and Peace in twenty minutes. It involves Russia." The joke is ten seconds long. It has two parts. The first part is the premise and setup, establishing a specific speed-reading claim; the second is the punch, collapsing the premise with the absurd reduction of a nine-hundred-page novel to two words. The structure is not unique to Allen. It is the basic shape of almost every joke a stand-up has ever told.' },
        { type: 'h2', text: 'The basic shape' },
        { type: 'p', text: 'Most jokes are two-part: a setup that leads the audience in one direction, and a punch line that reveals the setup meant something else. Comedy writer and teacher Greg Dean built his whole pedagogy around this — the "target assumption" is what the setup invites the audience to think; the "reinterpretation" is what the punch reveals to be true instead. The gap between the two is where the laugh lives. A setup that is too long loses the audience; a punch line that is too predictable gets nothing. Professional comics spend their careers tightening both halves and testing the gap onstage.' },
        { type: 'h2', text: 'Misdirection in a sentence' },
        { type: 'p', text: 'A great setup does two jobs simultaneously: it plants an assumption the audience expects to be true, and it does so in the fewest words possible. Mitch Hedberg, the late American stand-up who specialized in one-liners, was a surgeon of setups. "I used to do drugs. I still do, but I used to, too." The setup — "I used to do drugs" — invites the audience to expect a reflection. The punch swaps that for a blunt present-tense reveal, then appends a grammatically absurd rider. The whole joke is fifteen words. Every one of them is working.' },
        { type: 'h2', text: 'The tag' },
        { type: 'p', text: 'After the punch line, a well-built joke sometimes carries a tag — a second, smaller punch that rides on the first laugh. Tags let a comic mine a premise for more material without returning to the setup. Seinfeld\'s bits often have three or four tags running off a single setup; Hannah Gadsby\'s Nanette is structured around a shift that happens when she refuses the tag the audience expects and delivers something else instead. The tag is optional. The craft is knowing when to let the punch land alone.' },
        { type: 'h2', text: 'Callbacks' },
        { type: 'p', text: 'A callback returns to a joke from earlier in the set, usually in an unexpected context. Done well, a callback makes the audience feel smart — they get it because they remember — and creates a structure above the individual jokes. A good set has two or three callbacks; a great one has a callback that lands in the last thirty seconds and reframes the whole hour. Mike Birbiglia\'s long-form sets are almost always callback-driven. The skill is harder than the one-liner. It requires holding the entire architecture in the comic\'s head at once.' },
        { type: 'h2', text: 'Why the premise is everything' },
        { type: 'p', text: 'Under every joke is a premise — an observation or opinion the joke is built on. "Airline food is bad" is a premise (now exhausted). "My mother is impossible to please" is a premise. "I have a complicated relationship with my body" is a premise. The joke is the craft of shaping the premise into setup and punch. A weak premise cannot be saved by great punch lines. A strong premise gives the comic material for an entire set, possibly a special. The first skill a new comic learns is how to generate honest, specific premises — because everything else is construction on top of that foundation.' },
        { type: 'callout', text: 'Most new comedians write too many jokes and too few premises. The experienced move is the opposite: find ten strong premises you have something real to say about and write twenty jokes on each. A premise list is worth more than a joke list, every time.' },
      ],

      keyTerms: ['premise', 'setup', 'punch line', 'target assumption', 'reinterpretation', 'tag', 'callback', 'beat', 'act-out', 'observational comedy', 'absurdist', 'one-liner'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ComedyCentralStandUp',
            title: 'Comedy Central Stand-Up — specials and half-hour archive',
            channel: 'Comedy Central Stand-Up',
            duration: 'variable',
            featured: true,
            why: 'Thirty years of Comedy Central\'s stand-up specials, half-hours, and archives. The largest free source of working stand-up to study.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@JustForLaughs',
            title: 'Just for Laughs — Montreal festival archive',
            channel: 'Just for Laughs',
            duration: 'variable',
            featured: true,
            why: 'The Montreal comedy festival\'s archive of galas, solo sets, and new-faces showcases. Where American and Canadian stand-ups break and the industry watches.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@JerrySeinfeld',
            title: 'Jerry Seinfeld — notebook and craft conversations',
            channel: 'Jerry Seinfeld',
            duration: 'variable',
            featured: true,
            why: 'Seinfeld\'s published clips from Comedians in Cars and craft-talks on his own method of joke-building. The most famous working stand-up talking about how he does it.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@MikeBirbigliaOfficial',
            title: 'Mike Birbiglia — long-form storytelling',
            channel: 'Mike Birbiglia',
            duration: 'variable',
            featured: false,
            why: 'Birbiglia\'s Working It Out podcast and specials are the master class in long-form narrative stand-up and callback architecture.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TheCombLive',
            title: 'The Comedy Cellar — live recordings',
            channel: 'The Comedy Cellar',
            duration: 'variable',
            featured: false,
            why: 'The basement room on MacDougal Street where a generation of New York comics work out. Filmed live-drop-in footage is the rough reality of club comedy.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.netflix.com/browse/genre/11559',
            title: 'Netflix stand-up specials (catalogue)',
            channel: 'Netflix',
            duration: 'variable',
            featured: false,
            why: 'Paid, but the definitive modern stand-up library. Hannibal Buress, John Mulaney, Nate Bargatze, Maria Bamford, Ali Wong, Hasan Minhaj, and many more.',
          },
        ],
        books: [
          {
            title: 'The Comic Toolbox',
            author: 'John Vorhaus',
            year: 1994,
            url: 'https://www.amazon.com/Comic-Toolbox-How-Funny-Even/dp/187950521X',
            why: 'The most widely assigned textbook on comedic writing. Vorhaus\'s truth-plus-pain formulation of comedy is the default teaching shape.',
          },
          {
            title: 'Step by Step to Stand-up Comedy',
            author: 'Greg Dean',
            year: 2000,
            url: 'https://www.worldcat.org/title/step-by-step-to-stand-up-comedy/oclc/42397226',
            why: 'The joke-structure textbook. Greg Dean\'s target-assumption/reinterpretation framework has been the standard working tool of new comics since publication.',
          },
          {
            title: 'Judy Carter\'s The Comedy Bible',
            author: 'Judy Carter',
            year: 2001,
            url: 'https://www.simonandschuster.com/books/The-Comedy-Bible/Judy-Carter/9780743201254',
            why: 'Los Angeles comedy teacher\'s practical step-by-step book for new comics. The second of the two working-comic-school textbooks.',
          },
          {
            title: 'How to Be the Greatest Improviser on Earth',
            author: 'Will Hines',
            year: 2016,
            url: 'https://www.amazon.com/How-Greatest-Improviser-Earth-Hines/dp/1540502821',
            why: 'Not strictly stand-up, but the best book on generating material in an honest, specific way — the core skill behind every strong premise.',
          },
          {
            title: 'Seriously Funny: The Rebel Comedians of the 1950s and 1960s',
            author: 'Gerald Nachman',
            year: 2003,
            url: 'https://www.penguinrandomhouse.com/books/91013/seriously-funny-by-gerald-nachman/',
            why: 'The history of modern stand-up — Bruce, Sahl, Nichols and May, Pryor, Carlin. The starting place for understanding how the contemporary form came into being.',
          },
        ],
        articles: [
          {
            title: 'Stand-up comedy',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Stand-up_comedy',
            why: 'Survey of the form, its American origin in vaudeville, and the major performers by decade.',
            year: null,
          },
          {
            title: 'Comedy',
            source: 'Britannica',
            url: 'https://www.britannica.com/art/comedy',
            why: 'Editorial survey of comedy from Aristophanes onward. Context for stand-up\'s place in the longer tradition of the comic voice.',
            year: null,
          },
          {
            title: 'The New Comedy Writing: George Carlin on the Craft',
            source: 'The New York Times',
            url: 'https://www.nytimes.com/2008/06/24/arts/24carl.html',
            why: 'Obituary and reflection on George Carlin\'s approach to material. A short portrait of the most disciplined writer in stand-up history.',
            year: 2008,
          },
        ],
        courses: [
          {
            title: 'MasterClass: Steve Martin Teaches Comedy (sample free)',
            provider: 'MasterClass / Steve Martin',
            url: 'https://www.masterclass.com/classes/steve-martin-teaches-comedy',
            free: false,
            why: 'Paid, but the preview content and transcripts are widely available. Martin\'s own teaching of his stand-up method.',
          },
          {
            title: 'Gotham Comedy Club and UCB open mics',
            provider: 'New York comedy clubs',
            url: 'https://www.gothamcomedyclub.com/',
            free: true,
            why: 'The only actual way to learn stand-up is to go up. New York has free or five-dollar open mics nearly every night of the week; the one unavoidable curriculum.',
          },
        ],
        podcasts: [
          {
            title: 'Working It Out',
            show: 'Mike Birbiglia',
            url: 'https://workingitout.mikebirbiglia.com/',
            duration: 'variable',
            why: 'Birbiglia interviews other comics and they work on jokes in real time. The best podcast on the actual craft of stand-up.',
          },
          {
            title: 'WTF with Marc Maron',
            show: 'Marc Maron',
            url: 'https://www.wtfpod.com/',
            duration: 'variable',
            why: 'Fifteen years of long-form interviews with every American comic of consequence. A free oral-history archive of the American stand-up.',
          },
        ],
        tools: [
          {
            title: 'Live at the Apollo, Def Comedy Jam, HBO specials (HBO Max / streaming)',
            url: 'https://www.max.com/search?q=comedy%20special',
            why: 'Paid services with the definitive specials. The cheapest graduate degree in stand-up is a month of subscription and a notebook.',
          },
        ],
        primarySources: [
          {
            title: 'Richard Pryor: Live in Concert (1979)',
            url: 'https://en.wikipedia.org/wiki/Richard_Pryor:_Live_in_Concert',
            why: 'Widely considered the greatest stand-up performance ever recorded. Every comic who came after has studied it. The reference for what the form can do.',
          },
        ],
      },

      seeAlso: ['voice', 'acting'],
      prereqs: [],
      leadsTo: ['voice'],

      chapterActivity: 'A Tuesday-night "bringer" open mic at New York Comedy Club on East 24th — members book the slot, get a friend or two in the room, and write down every laugh and silence.',

      sources: [
        'https://en.wikipedia.org/wiki/Stand-up_comedy',
        'https://www.britannica.com/art/comedy',
      ],
      verifiedAt: '2026-04-23',
    },

    voice: {
      id: 'voice',
      name: 'Finding Your Voice',
      level: 'Intermediate',
      dek: 'Point of view is the whole instrument — without it, the best jokes land on no one in particular.',
      readTime: '13 min',

      sections: ['What voice means in stand-up', 'Honesty specific enough to sound like you', 'Finding it in the first hundred sets', 'The fight with the room', 'Keeping it once you have it'],
      body: [
        { type: 'lead', text: 'A stand-up who has found their voice is instantly recognizable — close your eyes and you can tell whether you are listening to Pryor, to Rivers, to Seinfeld, to Gadsby, to Bargatze, to Wanda Sykes. The voice is not an accent or a speech pattern. It is the composite of what they choose to talk about, how they see the world, what they find funny, what they refuse to laugh at. A new comic writes jokes that work. A comic with a voice writes jokes that could only have come from them. The difference is not a matter of jokes. It is a matter of self.' },
        { type: 'h2', text: 'What voice means in stand-up' },
        { type: 'p', text: 'Voice is point of view. A stand-up\'s voice is the consistent, recognizable angle from which they look at the world — what they notice, what they dismiss, what they take personally. George Carlin\'s voice was a linguistic irritation with power and hypocrisy. Joan Rivers\'s voice was cruel, specific, defensive glamour. Mitch Hedberg\'s voice was a drifting, surreal logic that ran perpendicular to ordinary perception. The jokes themselves differ wildly from comic to comic, but each comic\'s jokes share a point of view so consistent it functions as a signature.' },
        { type: 'h2', text: 'Honesty specific enough to sound like you' },
        { type: 'p', text: 'Writing teachers say to write what you know; stand-up coaches say to write what you feel. A comic looking for their voice works on premises drawn from their actual life — their family, their body, their anxieties, their neighborhood, their politics — rather than generic premises they have heard work on television. This is risky: specificity means the audience might not relate. It is also the only way to sound like yourself. A joke about airline food is indistinguishable from every other comic\'s joke about airline food. A joke about the specific things your mother said to you at Thanksgiving in 2019 is yours forever.' },
        { type: 'h2', text: 'Finding it in the first hundred sets' },
        { type: 'p', text: 'The common estimate is that a new comic needs a hundred or two hundred stage sets before a voice begins to emerge. Before that, the comic is experimenting — trying observational, trying confessional, trying one-liners, trying stories. Somewhere in the third or fourth month, one angle starts working more consistently than the others, and the audience starts recognizing the comic. This is the voice, revealing itself. A working comic then spends the next five years tending it. A comic who tries to choose their voice intellectually, without the stage time, gets it wrong.' },
        { type: 'h2', text: 'The fight with the room' },
        { type: 'p', text: 'A new comic\'s voice sometimes does not match what the room wants. A careful, observational comic bombs at a drunk basement club. A rowdy club comic bombs at an early-evening arts-festival theater. The easy answer is to change the voice to match the room, and for a year it works. The long answer is the opposite: find the rooms that want the voice you actually have, work them, and let the voice get stronger there. A comic who survives this fight becomes themselves. A comic who doesn\'t becomes a working journeyman with no distinguishable signature.' },
        { type: 'h2', text: 'Keeping it once you have it' },
        { type: 'p', text: 'The last problem is keeping the voice once you find it. Fame changes a comic\'s life; the voice that made them has to survive the change. Chris Rock has said that every comic\'s best material is written in the club, not in the hotel after the special. A comic who stops hanging out in clubs stops writing in the voice that made them. This is why the great ones — Seinfeld, Rock, Chappelle, Tig Notaro — keep dropping in at the tiny rooms on MacDougal and Melrose and in Montreal. The voice is a muscle. Stop using it and it atrophies.' },
        { type: 'quote', text: 'The comic\'s voice is the sum of every decision they make on stage — what they talk about, how they phrase it, what they leave out. You cannot write it. You have to find it.', cite: 'Jerry Seinfeld' },
      ],

      keyTerms: ['point of view', 'persona', 'observational', 'confessional', 'absurdist', 'specificity', 'crowd work', 'tight five', 'headlining', 'bombing', 'clean vs. blue'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ComediansinCarsGettingCoffee',
            title: 'Comedians in Cars Getting Coffee',
            channel: 'Jerry Seinfeld',
            duration: 'variable',
            featured: true,
            why: 'Seinfeld interviews working comics about their craft and their lives. The most valuable free oral archive of working stand-ups discussing voice and method.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@MikeBirbigliaOfficial',
            title: 'Mike Birbiglia — Working It Out',
            channel: 'Mike Birbiglia',
            duration: 'variable',
            featured: true,
            why: 'Clips from Birbiglia\'s podcast where he workshops jokes with other comics. The work of voice-finding shown in public.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ComedyCentralStandUp',
            title: 'Comedy Central Presents — half-hours',
            channel: 'Comedy Central Stand-Up',
            duration: 'variable',
            featured: true,
            why: 'The half-hour Comedy Central Presents series, running since 1998, is a near-complete library of the moment new American comics emerged with a voice. Study them.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@JustForLaughs',
            title: 'Just for Laughs — New Faces showcases',
            channel: 'Just for Laughs',
            duration: 'variable',
            featured: false,
            why: 'The Montreal festival\'s New Faces showcase is where working comics with early voices present for the industry. A concentrated record of voice-in-emergence.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ConanOBrien',
            title: 'Conan O\'Brien Needs a Friend',
            channel: 'Conan O\'Brien',
            duration: 'variable',
            featured: false,
            why: 'Conan\'s podcast interviews with comics include long, generous conversations about their development. Another excellent free oral history.',
          },
        ],
        books: [
          {
            title: 'Born Standing Up',
            author: 'Steve Martin',
            year: 2007,
            url: 'https://www.simonandschuster.com/books/Born-Standing-Up/Steve-Martin/9781416553656',
            why: 'Steve Martin\'s memoir of his eighteen years as a working stand-up. The most clear-eyed book on the development of a comic voice ever written.',
          },
          {
            title: 'Sick in the Head',
            author: 'Judd Apatow',
            year: 2015,
            url: 'https://www.penguinrandomhouse.com/books/225472/sick-in-the-head-by-judd-apatow/',
            why: 'Thirty years of interviews Judd Apatow conducted with comics — some as a fifteen-year-old high schooler, some as the producer he became. Voice talk across generations.',
          },
          {
            title: 'Poking a Dead Frog',
            author: 'Mike Sacks',
            year: 2014,
            url: 'https://www.penguinrandomhouse.com/books/313893/poking-a-dead-frog-by-mike-sacks/',
            why: 'Long-form interviews with working comedy writers on process, voice, and craft. Ranges from stand-ups to sitcom writers to Onion editors.',
          },
          {
            title: 'I\'m Dying Up Here',
            author: 'William Knoedelseder',
            year: 2009,
            url: 'https://www.worldcat.org/title/im-dying-up-here/oclc/262426061',
            why: 'History of the Los Angeles stand-up explosion of the 1970s, when Letterman, Leno, and Freddie Prinze worked the Comedy Store. The birth of the modern club comic.',
          },
          {
            title: 'Pryor Convictions',
            author: 'Richard Pryor, Todd Gold',
            year: 1995,
            url: 'https://archive.org/details/pryorconvictions0000prye',
            why: 'Richard Pryor\'s autobiography. The most gifted stand-up of the twentieth century on how he found, lost, and refound his voice.',
          },
        ],
        articles: [
          {
            title: 'George Carlin: Dean of the Counterculture Comedians',
            source: 'The New York Times (obituary)',
            url: 'https://www.nytimes.com/2008/06/24/arts/24carl.html',
            why: 'Obituary that doubles as a short analysis of Carlin\'s voice — precise, linguistic, political.',
            year: 2008,
          },
          {
            title: 'Joan Rivers',
            source: 'The New Yorker',
            url: 'https://www.newyorker.com/magazine/2010/03/01/show-me-the-money',
            why: 'Larissa MacFarquhar\'s 2010 profile of Rivers near the end of her career. A portrait of voice sustained over fifty years.',
            year: 2010,
          },
          {
            title: 'Stand-up comedy',
            source: 'Britannica',
            url: 'https://www.britannica.com/art/stand-up-comedy',
            why: 'Editorial history of the form. Good for placing voice-finding within the broader American comedy tradition.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'The Comedy Studio (UCB / Brooklyn Comedy Collective / Asylum)',
            provider: 'Major NYC comedy schools',
            url: 'https://www.brooklyncomedycollective.com/',
            free: false,
            why: 'Brooklyn Comedy Collective, UCB (rebuilding), and the Asylum all offer the standard eight-week stand-up class. The structured on-ramp into the craft.',
          },
        ],
        podcasts: [
          {
            title: 'WTF with Marc Maron',
            show: 'Marc Maron',
            url: 'https://www.wtfpod.com/',
            duration: 'variable',
            why: 'The essential oral history of American comics. Voice talk is the subject.',
          },
          {
            title: 'Working It Out',
            show: 'Mike Birbiglia',
            url: 'https://workingitout.mikebirbiglia.com/',
            duration: 'variable',
            why: 'Joke-workshop format. Listen for how a comic\'s voice emerges in the back-and-forth.',
          },
        ],
        tools: [
          {
            title: 'The Comedy Cellar',
            url: 'https://www.comedycellar.com/',
            why: 'The MacDougal Street club where voices are found, fought, and kept. Drop in; the cover is reasonable; the lineup is unannounced and occasionally spectacular.',
          },
        ],
        primarySources: [
          {
            title: 'Richard Pryor: Live in Concert (1979)',
            url: 'https://en.wikipedia.org/wiki/Richard_Pryor:_Live_in_Concert',
            why: 'The canonical example of a fully realized stand-up voice. Watch as training.',
          },
          {
            title: 'Hannah Gadsby: Nanette (2018)',
            url: 'https://en.wikipedia.org/wiki/Nanette_(Hannah_Gadsby)',
            why: 'The most formally ambitious stand-up hour of recent years, built around a comic refusing, onstage, to finish her own joke. The contemporary reference for voice-as-subject.',
          },
        ],
      },

      seeAlso: ['joke_structure', 'acting', 'publicspeaking'],
      prereqs: ['joke_structure'],
      leadsTo: [],

      chapterActivity: 'A monthly "first-five recorded set" exchange — members record their tightest five and share audio privately; no live feedback, just listen and notice the voice trying to emerge.',

      sources: [
        'https://en.wikipedia.org/wiki/Stand-up_comedy',
        'https://www.britannica.com/art/stand-up-comedy',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
