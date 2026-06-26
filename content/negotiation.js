// content/negotiation.js
// Batch: B11-life-skills-I
// Last updated: 2026-04-23 by BATCH B11-life-skills-I
//
// Topics from data.js: interests, batna

window.CONTENT = window.CONTENT || {};
window.CONTENT.negotiation = {
  subjectId: 'negotiation',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B11-life-skills-I',
  topics: {

    interests: {
      id: 'interests',
      name: 'Interests vs Positions',
      level: 'Beginner',
      dek: 'A position is what someone says they want; an interest is the reason behind it. Almost every breakthrough lives in the gap.',
      readTime: '10 min',

      sections: ['The orange in the kitchen', 'Why positions get stuck', 'Asking the underneath question', 'Inventing options before deciding'],
      body: [
        { type: 'lead', text: 'Two sisters fight over an orange. Their mother, exhausted, cuts it in half. One sister eats the flesh and throws away the peel. The other grates the peel for a cake and throws away the flesh. The story comes from a 1970s Harvard Negotiation Project memo, and it is the foundation parable of the modern field. Each sister had a position — "I want the orange" — and a different interest beneath it. The mother solved a problem neither sister had.' },
        { type: 'h2', text: 'The orange in the kitchen' },
        { type: 'p', text: 'Roger Fisher and William Ury, the Harvard professors who built modern negotiation theory in the 1970s, made one observation the heart of their work: people argue about what they want, but the real action is in why they want it. A divorcing couple fights over the house; one wants the equity, the other wants to keep the kids in their school district. A vendor and a buyer fight over a price; one needs cash this quarter, the other needs to look disciplined to a board. Resolved at the level of positions, every such fight has a winner and a loser. Resolved at the level of interests, both can often get most of what they actually came for.' },
        { type: 'h2', text: 'Why positions get stuck' },
        { type: 'p', text: 'Positions are easy to state and easy to defend. They protect ego, they avoid disclosure, they let each side feel reasonable. But they collapse the negotiation into a single dimension — usually price, sometimes deadline — and force a tug-of-war on that dimension. Interests are messier and more revealing, which is why people hide them. The whole craft of "principled negotiation," in Fisher and Ury\'s phrase, is the discipline of moving the conversation off positions and onto the interests beneath.' },
        { type: 'h2', text: 'Asking the underneath question' },
        { type: 'p', text: 'The most reliable move in negotiation is also the simplest: ask the other side why. Why this number, why this deadline, why this clause. The first answer will often be a restatement of the position. The second answer, with patience, will usually start to reveal the actual interest. Chris Voss, who spent twenty years as the FBI\'s lead international hostage negotiator, made the same point with a different vocabulary in his 2016 book — calibrated questions ("How am I supposed to do that?") that invite the other side to do your thinking for you.' },
        { type: 'h2', text: 'Inventing options before deciding' },
        { type: 'p', text: 'Once interests are on the table, the trap to avoid is locking in too quickly. Fisher and Ury\'s third principle is to invent options for mutual gain — to brainstorm a wide field of possible deals before narrowing. The instinct in any conversation is to evaluate ideas as they appear, which kills the harder-to-find proposals before they can grow. The negotiator who proposes three or four options at once is the one most likely to land on the orange-and-peel solution.' },
        { type: 'callout', text: 'Almost every negotiation that feels stuck is stuck on a single dimension. Add a second — a longer deadline, a smaller scope, a better reference, a payment plan, an option to renew — and the geometry of the deal usually opens.' },
      ],

      keyTerms: ['position', 'interest', 'principled negotiation', 'value creation', 'integrative bargaining', 'distributive bargaining', 'option generation', 'calibrated question'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@HarvardBusinessReview',
            title: 'Harvard Business Review — Negotiation playlist',
            channel: 'Harvard Business Review',
            duration: 'variable',
            featured: true,
            why: 'HBR\'s negotiation videos are the standard quick-reference, drawing on the PON faculty.',
          },
          {
            id: 'guZa7mQV1l0',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=guZa7mQV1l0',
            title: 'Chris Voss: How To Become a Master Negotiator',
            channel: 'Lewis Howes',
            duration: '1:45:42',
            featured: true,
            why: 'Voss in long form on tactical empathy and the difference between asking why and asking how.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@PONHarvardLawSchool',
            title: 'Program on Negotiation at Harvard Law School',
            channel: 'PON',
            duration: 'variable',
            featured: true,
            why: 'Free recorded talks from the people who built the field. Worth subscribing to and dipping into.',
          },
        ],
        books: [
          {
            title: 'Getting to Yes',
            author: 'Roger Fisher, William Ury & Bruce Patton',
            year: 1981,
            url: 'https://en.wikipedia.org/wiki/Getting_to_Yes',
            why: 'The standard text. Short, accessible, and the source of nearly every framework you will encounter elsewhere.',
          },
          {
            title: 'Never Split the Difference',
            author: 'Chris Voss',
            year: 2016,
            url: 'https://en.wikipedia.org/wiki/Never_Split_the_Difference',
            why: 'A former FBI hostage negotiator on tactical empathy and calibrated questions. Pair with Getting to Yes for the full picture.',
          },
          {
            title: 'Bargaining for Advantage',
            author: 'G. Richard Shell',
            year: 1999,
            url: 'https://en.wikipedia.org/wiki/Negotiation',
            why: 'The Wharton classroom version — more rigorous than the popular books, with style-assessment tools and case studies.',
          },
        ],
        articles: [
          {
            title: 'Negotiation',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Negotiation',
            why: 'A comprehensive reference with the major schools and historical examples.',
            year: null,
          },
          {
            title: 'Program on Negotiation Daily Blog',
            source: 'Harvard Law School',
            url: 'https://www.pon.harvard.edu/category/daily/',
            why: 'A daily, free stream of short articles from the PON faculty. The best free resource in the field.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Successful Negotiation',
            provider: 'Coursera (University of Michigan)',
            url: 'https://www.coursera.org/learn/negotiation-skills',
            free: true,
            why: 'George Siedel\'s seven-week course. Free to audit; one of the most-enrolled negotiation MOOCs ever.',
          },
        ],
      },

      seeAlso: ['batna', 'publicspeaking', 'rhetoric'],
      prereqs: [],
      leadsTo: ['batna'],
      chapterActivity: 'A monthly "negotiation gym" at a Williamsburg coworking space: paired role-plays from a Harvard PON case packet, then debrief in a circle.',
      sources: [
        'https://en.wikipedia.org/wiki/Getting_to_Yes',
        'https://en.wikipedia.org/wiki/Negotiation',
        'https://www.pon.harvard.edu/',
      ],
      verifiedAt: '2026-04-23',
    },

    batna: {
      id: 'batna',
      name: 'BATNA',
      level: 'Intermediate',
      dek: 'Your power in any negotiation is mostly the strength of what you will do if no deal is reached.',
      readTime: '9 min',

      sections: ['What BATNA actually means', 'The walk-away point', 'Improving your BATNA', 'Reading the other side\'s'],
      body: [
        { type: 'lead', text: 'In 1981 Roger Fisher and William Ury introduced an awkward acronym — BATNA, the Best Alternative To a Negotiated Agreement — that has now outlived almost every other piece of consultant jargon. The reason is simple: of all the things that determine whether you get a good deal, the strongest single predictor is what happens to you if no deal is reached. Power in negotiation, in Ury\'s phrase, is mostly the freedom to walk away.' },
        { type: 'h2', text: 'What BATNA actually means' },
        { type: 'p', text: 'Your BATNA is not what you hope for at the table; it is what you will actually do if you stand up and leave. If you are negotiating a salary, your BATNA is the next-best job offer, or staying in your current role, or freelancing while you keep looking. If you are negotiating the sale of a house, your BATNA is the next-highest bid, or relisting in the spring. The trap is to confuse the BATNA with the goal — to think that because you want a hundred thousand, that is your BATNA. It is not. The BATNA is what is true if the negotiation collapses.' },
        { type: 'h2', text: 'The walk-away point' },
        { type: 'p', text: 'Once you know your BATNA, you can compute the price below which the deal in front of you is worse than no deal — your reservation value. You should never accept anything below the reservation value. Most people, in the heat of a negotiation, drift below it because they have not done the work in advance. Writing the BATNA on a card before the conversation, and the reservation value beside it, is the single most useful piece of negotiation preparation most people ever do.' },
        { type: 'h2', text: 'Improving your BATNA' },
        { type: 'p', text: 'The way to negotiate from strength is not to be a better talker. It is to have a better BATNA. Before any important negotiation, spend most of your preparation time improving the alternative. If you are job-hunting, line up the second offer before opening the first. If you are buying a car, drive to a second dealer first. The cheapest improvement to your BATNA almost always costs less, and earns more, than any clever tactic at the table.' },
        { type: 'h2', text: 'Reading the other side\'s' },
        { type: 'p', text: 'The other half of the work is estimating the other side\'s BATNA — what they will do if no deal is reached with you. The recruiter who has thirty equally qualified candidates has a strong BATNA; the recruiter who has been searching for six months for a rare specialist does not. Both can be sitting across from you with the same script. Knowing which one you are facing changes almost everything about the conversation, and is usually possible to learn from public information and a few well-placed questions.' },
        { type: 'quote', text: 'The reason you negotiate is to produce something better than the results you can obtain without negotiating.', cite: 'Roger Fisher & William Ury, Getting to Yes' },
      ],

      keyTerms: ['BATNA', 'reservation value', 'ZOPA', 'walk-away point', 'leverage', 'anchoring', 'reservation price', 'negotiation power'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@HarvardBusinessReview',
            title: 'HBR — BATNA explainers',
            channel: 'Harvard Business Review',
            duration: 'variable',
            featured: true,
            why: 'HBR\'s short videos walk through BATNA, ZOPA, and reservation value with real-deal examples.',
          },
          {
            id: '5RV3OSLVpGQ',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=5RV3OSLVpGQ',
            title: 'William Ury: The Walk From "No" to "Yes"',
            channel: 'TED',
            duration: '18:41',
            featured: true,
            why: 'Ury\'s TED talk applying BATNA-style thinking to family disputes and the Middle East. Lucid and personal.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@PONHarvardLawSchool',
            title: 'Program on Negotiation at Harvard Law School',
            channel: 'PON',
            duration: 'variable',
            featured: true,
            why: 'Free recorded faculty lectures, including detailed BATNA case studies.',
          },
        ],
        books: [
          {
            title: 'Getting to Yes',
            author: 'Roger Fisher, William Ury & Bruce Patton',
            year: 1981,
            url: 'https://en.wikipedia.org/wiki/Getting_to_Yes',
            why: 'BATNA is introduced in chapter six. The whole book is short and worth the afternoon.',
          },
          {
            title: 'Getting Past No',
            author: 'William Ury',
            year: 1991,
            url: 'https://en.wikipedia.org/wiki/William_Ury',
            why: 'Ury\'s sequel, focused on the BATNA-side of difficult conversations: what to do when the other side is stuck.',
          },
          {
            title: 'Never Split the Difference',
            author: 'Chris Voss',
            year: 2016,
            url: 'https://en.wikipedia.org/wiki/Never_Split_the_Difference',
            why: 'Voss disagrees with parts of Fisher and Ury but uses the same underlying logic; useful as a critical reading.',
          },
        ],
        articles: [
          {
            title: 'Best alternative to a negotiated agreement',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Best_alternative_to_a_negotiated_agreement',
            why: 'Crisp summary with worked examples and a tactics section.',
            year: null,
          },
          {
            title: 'BATNA in Negotiation',
            source: 'Harvard Program on Negotiation',
            url: 'https://www.pon.harvard.edu/tag/batna/',
            why: 'A library of short articles from the PON faculty, all free.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Negotiation Mastery',
            provider: 'HBS Online',
            url: 'https://online.hbs.edu/courses/negotiation-mastery/',
            free: false,
            why: 'Mike Wheeler\'s course; the BATNA module is the cleanest paid treatment of the concept.',
          },
        ],
      },

      seeAlso: ['interests', 'finance', 'rhetoric'],
      prereqs: ['interests'],
      leadsTo: [],
      chapterActivity: 'A pre-spring "salary negotiation clinic" at a Bushwick coworking space — bring a job offer, leave with a written BATNA, a reservation value, and a script.',
      sources: [
        'https://en.wikipedia.org/wiki/Best_alternative_to_a_negotiated_agreement',
        'https://en.wikipedia.org/wiki/Getting_to_Yes',
        'https://www.pon.harvard.edu/tag/batna/',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
