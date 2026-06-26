// content/yoga.js
// Batch: B14-movement
// Last updated: 2026-04-23 by BATCH B13+B14
//
// Topics this subject must cover (from data.js):
//   Core: sun_sal, breath

window.CONTENT = window.CONTENT || {};
window.CONTENT.yoga = {
  subjectId: 'yoga',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B13+B14',
  topics: {

    sun_sal: {
      id: 'sun_sal',
      name: 'Sun Salutations',
      level: 'Beginner',
      dek: 'Twelve shapes, one breath, and the moving prayer that begins almost every modern yoga class.',
      readTime: '12 min',

      sections: ['The form that is everywhere', 'Surya Namaskar A and B', 'Breath as the metronome', 'Alignment, briefly', 'A practice for the winter morning'],
      body: [
        { type: 'lead', text: 'In the palace gymnasium of Mysore, South India, in the 1930s, a teacher named Tirumalai Krishnamacharya taught a young prince an active, flowing practice he called Surya Namaskar — sun salutations. Krishnamacharya\'s students went on to bring yoga to the West: B.K.S. Iyengar to Europe, Pattabhi Jois to America, T.K.V. Desikachar to a generation of teachers around the world. The sequence they carried — a flowing vinyasa linking standing and folding postures to the rhythm of the breath — became the common vocabulary of nearly every modern yoga class. Whether you walk into a heated studio in Manhattan, a garage in Portland, or a retreat in Tuscany, the teacher will eventually say "let\'s move through a few sun salutations," and the class will know what to do.' },
        { type: 'h2', text: 'The form that is everywhere' },
        { type: 'p', text: 'A sun salutation is a short, repeatable sequence of postures — forward folds, low lunges, plank, upward- and downward-facing dog, standing and reaching — flowed together with an inhale and exhale for each movement. The sequence is less than two minutes end to end. Performed five or ten times at the beginning of a class, it warms the whole body, loosens the spine and shoulders, and establishes the breath rhythm the rest of the session will follow. The form is not ancient in its modern shape; Krishnamacharya likely synthesized it from Indian calisthenic traditions in the 1920s and 1930s. Older yoga texts do not describe it. But no form has more completely become the language of a practice.' },
        { type: 'h2', text: 'Surya Namaskar A and B' },
        { type: 'p', text: 'The Ashtanga tradition, transmitted from Pattabhi Jois, formalizes two sequences. Surya Namaskar A is the simpler form: mountain, upward salute, forward fold, half-lift, chaturanga (a low plank), upward dog, downward dog, and back up. Nine linked movements. Surya Namaskar B adds warrior poses and a deeper flow. Between the two, a yoga practitioner has the skeleton of most flowing classes in North America and Europe. Vinyasa, power yoga, Rocket, and most lineages taught in commercial studios are variations on these sequences. Iyengar-style and restorative traditions move differently, but the sun salutation is still recognized everywhere.' },
        { type: 'h2', text: 'Breath as the metronome' },
        { type: 'p', text: 'The defining feature of the sun salutation is the one-breath-per-movement pairing. Reach up on an inhale, fold forward on an exhale, half-lift on an inhale, step or jump back on an exhale. The breath is audible — ujjayi, the ocean-sound breath, is the classical form — and it drives the pace of the sequence. Fast breathing speeds the flow; slow breathing slows it. Students who try to match the teacher\'s pace rather than their own breath will end the class breathless and frustrated. Students who run the sequence at the tempo of their own inhale and exhale discover that the practice feels almost effortless by the fifth round.' },
        { type: 'h2', text: 'Alignment, briefly' },
        { type: 'p', text: 'The alignment details of a sun salutation are the subject of entire books. A few matter most. In downward-facing dog, press the hips up and back, soften the shoulders away from the ears, and let the heels reach for the floor even if they do not touch. In chaturanga, lower only partway — elbows bent to ninety degrees, not below — and keep the shoulders no lower than the elbows to protect the rotator cuff. In the upward dog, press the tops of the feet and the hands down; the legs and hips should lift off the floor. These details matter not because the form is sacred, but because the wrong alignment over hundreds of repetitions will injure joints that did not need to be hurt.' },
        { type: 'h2', text: 'A practice for the winter morning' },
        { type: 'p', text: 'The traditional first-month practice for a new yoga student is the simplest: one sun salutation A, every morning, done carefully, on waking. After a week, two. After two weeks, three or four. The body learns the shape of the sequence. The breath learns its pace. By the end of the month, five sun salutations in the morning feel like a natural thing; by the end of three months, they are habit. This is the quiet entry point for what many eventually call a lifelong practice. It does not require a teacher, a mat, a studio, or a retreat. It does require a few square feet of floor and ten minutes of honest attention.' },
        { type: 'callout', text: 'First month: one to five rounds of Surya Namaskar A, every morning, at home. No heat, no music, no teacher required. Learn the shape with a book or a single video. Watch your breath. Miss a day, skip it cleanly, start again the next morning. After thirty days the practice begins to belong to you.' },
      ],

      keyTerms: ['Surya Namaskar', 'vinyasa', 'chaturanga', 'adho mukha svanasana (downward dog)', 'urdhva mukha svanasana (upward dog)', 'uttanasana (forward fold)', 'ujjayi breath', 'tadasana (mountain)', 'warrior', 'drishti', 'bandha'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@yogawithadriene',
            title: 'Yoga with Adriene — free classes and 30-day challenges',
            channel: 'Yoga with Adriene',
            duration: 'variable',
            featured: true,
            why: 'Adriene Mishler\'s free channel has taught more people yoga than any studio in history. Patient, welcoming, and technically sound for beginners.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@yogibryan',
            title: 'Yogi Bryan — precise instruction and drills',
            channel: 'Yogi Bryan',
            duration: 'variable',
            featured: true,
            why: 'Bryan Jones\'s videos have the clearest breakdowns of sun salutation mechanics — jump-backs, chaturanga, arm balances — online. An excellent second channel after Adriene.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@DoYogaWithMe',
            title: 'Do Yoga With Me — full classes across many teachers',
            channel: 'Do Yoga With Me',
            duration: 'variable',
            featured: true,
            why: 'Founded in Vancouver, DoYogaWithMe.com has a free library of classes in every style. The alternative for practitioners who want a variety of voices.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@Ekhart',
            title: 'Ekhart Yoga — teachers from multiple lineages',
            channel: 'Ekhart Yoga',
            duration: 'variable',
            featured: false,
            why: 'Esther Ekhart\'s Dutch platform offers classes from Ashtanga, Iyengar, and Vinyasa teachers. Useful for comparing lineages.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@YogaJournal',
            title: 'Yoga Journal — pose library and teacher tutorials',
            channel: 'Yoga Journal',
            duration: 'variable',
            featured: false,
            why: 'The standard American yoga magazine\'s video archive. Short, specific pose breakdowns and interviews with working teachers.',
          },
        ],
        books: [
          {
            title: 'Light on Yoga',
            author: 'B.K.S. Iyengar',
            year: 1966,
            url: 'https://archive.org/details/lightonyogacompl0000iyen',
            why: 'Iyengar\'s six-hundred-pose reference, photographed, annotated, and explained. Sixty years later, still the definitive encyclopedia of the postures.',
          },
          {
            title: 'The Heart of Yoga: Developing a Personal Practice',
            author: 'T.K.V. Desikachar',
            year: 1995,
            url: 'https://www.innertraditions.com/books/the-heart-of-yoga',
            why: 'Desikachar was Krishnamacharya\'s son and carried the lineage of the teacher who made sun salutations central to modern yoga. A deep, thoughtful book.',
          },
          {
            title: 'Yoga Anatomy',
            author: 'Leslie Kaminoff, Amy Matthews',
            year: 2007,
            url: 'https://www.humankinetics.com/products/Yoga-Anatomy-3rd-Edition',
            why: 'The standard modern reference on what each pose actually does to the body. Now in its third edition. On the shelf of every yoga teacher.',
          },
          {
            title: 'Yoga Body: The Origins of Modern Posture Practice',
            author: 'Mark Singleton',
            year: 2010,
            url: 'https://global.oup.com/academic/product/yoga-body-9780195395341',
            why: 'The historian\'s account of how modern posture yoga emerged in the 1920s and 1930s, largely from Indian bodybuilding and British gymnastics. Essential context.',
          },
          {
            title: 'The Yoga Sutras of Patanjali',
            author: 'Edwin Bryant (translation)',
            year: 2009,
            url: 'https://www.northpointpress.com/the-yoga-sutras-of-patanjali.html',
            why: 'The ancient philosophical foundation beneath the modern posture practice. Bryant\'s translation is the scholarly standard.',
          },
        ],
        articles: [
          {
            title: 'Surya Namaskar',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Surya_Namaskar',
            why: 'History and variants of the sequence. Good bibliography into Mark Singleton\'s research on the modern origins.',
            year: null,
          },
          {
            title: 'Ashtanga vinyasa yoga',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Ashtanga_vinyasa_yoga',
            why: 'Pattabhi Jois\'s lineage and the primary series. Understanding Ashtanga clarifies most modern flowing styles.',
            year: null,
          },
          {
            title: 'Yoga',
            source: 'Britannica',
            url: 'https://www.britannica.com/topic/yoga',
            why: 'Editorial survey from the Yoga Sutras through modern practice. Useful for separating the ancient tradition from the twentieth-century form.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Yoga with Adriene — 30-day challenges (free)',
            provider: 'Yoga with Adriene',
            url: 'https://yogawithadriene.com/30-days-of-yoga/',
            free: true,
            why: 'The widely followed free structured 30-day sequences. A first-month practice starts here for many students worldwide.',
          },
          {
            title: 'Open Source Yoga (KPJAYI research)',
            provider: 'KPJAYI',
            url: 'https://kpjayi.org/',
            free: true,
            why: 'The Ashtanga institute founded by Pattabhi Jois. The primary-series reference, free resources on the sequence and philosophy.',
          },
        ],
        podcasts: [
          {
            title: 'J. Brown Yoga Talks',
            show: 'J. Brown',
            url: 'https://jbrownyoga.com/podcasts',
            duration: 'variable',
            why: 'Long-form interviews with yoga teachers across traditions. A rare substantive podcast on the contemporary practice.',
          },
        ],
        tools: [
          {
            title: 'Manduka Pro mat',
            url: 'https://www.manduka.com/products/prolite-yoga-mat',
            why: 'The standard studio mat for twenty-five years. Not cheap; lasts a decade. The one piece of gear worth the money.',
          },
          {
            title: 'YogaGlo / Glo',
            url: 'https://www.glo.com/',
            why: 'The pioneering online-yoga service with top teachers. Paid, but the free trial gives access to the full library.',
          },
        ],
        primarySources: [
          {
            title: 'Yoga Sutras of Patanjali (Sanskrit and English translations)',
            url: 'https://archive.org/details/yogasutrasofpatan00patauoft',
            why: 'The ancient philosophical root. 196 sutras that define classical yoga, probably compiled around 400 CE. Archive.org hosts scholarly translations.',
          },
        ],
      },

      seeAlso: ['breath', 'running', 'martial'],
      prereqs: [],
      leadsTo: ['breath'],

      chapterActivity: 'A donation-based Saturday-morning flow at a member\'s loft in Greenpoint — one teacher guiding sixty minutes of sun salutations and standing poses. Bring your own mat.',

      sources: [
        'https://en.wikipedia.org/wiki/Surya_Namaskar',
        'https://en.wikipedia.org/wiki/Ashtanga_vinyasa_yoga',
        'https://www.britannica.com/topic/yoga',
      ],
      verifiedAt: '2026-04-23',
    },

    breath: {
      id: 'breath',
      name: 'Breath Practice',
      level: 'Intermediate',
      dek: 'Pranayama — using the breath to regulate the body and the mind, with a vocabulary two thousand years old.',
      readTime: '12 min',

      sections: ['Breath as a practice', 'Ujjayi and the ocean sound', 'Nadi shodhana — alternate-nostril breathing', 'Kapalabhati and the cautionary notes', 'What breath practice actually changes'],
      body: [
        { type: 'lead', text: 'The Yoga Sutras of Patanjali, compiled in India around the fourth century CE, list eight limbs of classical yoga. The fourth is pranayama — breath regulation. The posture practice that most Westerners associate with yoga is the third limb. In the ancient sequence, postures prepare the body for breath; breath prepares the mind for meditation. That sequence is worth remembering. In modern studios, pranayama is sometimes an afterthought at the end of class. In its tradition, it was the whole point.' },
        { type: 'h2', text: 'Breath as a practice' },
        { type: 'p', text: 'Breath is involuntary. The body will breathe whether or not you pay attention. This is why breath practice is interesting: it is one of the few bodily processes the mind can voluntarily control. Breath speed, depth, and pattern can be adjusted by decision, and the nervous system responds. Slow, extended exhales stimulate the vagus nerve and lower heart rate; fast panting breaths raise alertness and blood pressure. The ancient yogis discovered this empirically, two millennia before the vagal research of the 2010s caught up. Modern science has largely confirmed what they described.' },
        { type: 'h2', text: 'Ujjayi and the ocean sound' },
        { type: 'p', text: 'Ujjayi is the audible breath most modern yoga teachers instruct — the slight throat-narrowing that makes both inhale and exhale sound like a quiet ocean wave. Done correctly, it is loud enough for the person next to you to hear and almost impossible to hear from the next row. Ujjayi slows the breath without effort, adds a small resistance that strengthens the breathing muscles, and gives the practitioner a reliable audible anchor for attention. Most of a vinyasa class is done with ujjayi breath. It is the breath pattern most associated with the modern practice.' },
        { type: 'h2', text: 'Nadi shodhana — alternate-nostril breathing' },
        { type: 'p', text: 'In nadi shodhana, the practitioner closes one nostril with a finger, inhales through the other, closes both for a brief hold, then exhales through the opposite nostril. The practice is repeated for five to ten minutes. The traditional claim is that it balances the two energetic channels the yogis called ida and pingala — the left and right nostrils corresponding to complementary aspects of the nervous system. The modern evidence is partial but real: regular practice modestly improves heart-rate variability, a measure of autonomic balance. Whatever its mechanism, it is the most-taught pranayama in beginner classes and the most accessible.' },
        { type: 'h2', text: 'Kapalabhati and the cautionary notes' },
        { type: 'p', text: 'Kapalabhati is a rapid diaphragmatic breathing — forceful exhales, passive inhales, repeated thirty or sixty times per minute. Traditional texts describe it as cleansing; modern physiology notes that it is hyperventilation by another name. It should not be practiced by anyone with high blood pressure, untreated anxiety, heart conditions, or during pregnancy. Practiced carefully and briefly, under the guidance of an experienced teacher, kapalabhati can be a useful tool. Practiced sloppily or for too long, it can cause dizziness, faintness, and in rare cases more serious harm. Beginners should learn it from a human teacher, not a video.' },
        { type: 'h2', text: 'What breath practice actually changes' },
        { type: 'p', text: 'The accumulating evidence — Herbert Benson\'s Harvard research on the relaxation response, more recent vagal-tone studies by Stephen Porges, and the standard literature on paced breathing — suggests that regular slow breath practice modestly lowers stress hormones, improves sleep, and increases heart-rate variability. The traditional claims are broader than the evidence. The conservative summary is that ten minutes a day of slow, extended breathing is one of the simplest low-cost interventions a human can make for their own nervous system. A yoga student who learns nothing from their practice except this walks away with something durable.' },
        { type: 'callout', text: 'First month: five minutes of nadi shodhana after your morning sun salutation. Sit comfortably, close one nostril, inhale four counts, exhale four counts out the other side. Skip the holds until you know the rhythm. Do not push into breath-holds if you feel light-headed. Stop the practice immediately if dizziness persists.' },
        { type: 'quote', text: 'When the breath wanders the mind is also unsteady. But when the breath is calmed, the mind too will be still, and the yogi achieves long life.', cite: 'Hatha Yoga Pradipika, 15th century' },
      ],

      keyTerms: ['pranayama', 'ujjayi', 'nadi shodhana', 'kapalabhati', 'bhramari', 'diaphragmatic breathing', 'bandha', 'breath retention (kumbhaka)', 'ratio breathing', 'vagal tone', 'heart-rate variability'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@yogawithadriene',
            title: 'Yoga with Adriene — short pranayama sessions',
            channel: 'Yoga with Adriene',
            duration: 'variable',
            featured: true,
            why: 'Adriene\'s breath-focused short videos are the most accessible introduction to pranayama for beginners. Low pressure, no performance.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@Ekhart',
            title: 'Ekhart Yoga — pranayama courses',
            channel: 'Ekhart Yoga',
            duration: 'variable',
            featured: true,
            why: 'Esther Ekhart and senior teachers run structured short pranayama courses on the channel. A step up from the general yoga channels.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@DoYogaWithMe',
            title: 'Do Yoga With Me — pranayama practices',
            channel: 'Do Yoga With Me',
            duration: 'variable',
            featured: true,
            why: 'Do Yoga With Me\'s free library includes dedicated pranayama classes from experienced teachers. A practical first stop.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TED',
            title: 'TED talks on breath and the nervous system',
            channel: 'TED',
            duration: 'variable',
            featured: false,
            why: 'Talks by physiologists (Stephen Porges, Andrew Huberman) and science journalists on the vagus nerve and the effects of breath on the autonomic system.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TheBreathingDiabetic',
            title: 'James Nestor — Breath: The New Science of a Lost Art',
            channel: 'James Nestor',
            duration: 'variable',
            featured: false,
            why: 'James Nestor\'s interviews and talks expanding on the book Breath. Controversial in places but an accessible entry to the modern breath-science literature.',
          },
        ],
        books: [
          {
            title: 'Light on Pranayama',
            author: 'B.K.S. Iyengar',
            year: 1981,
            url: 'https://www.penguinrandomhouse.com/books/325164/light-on-pranayama-by-b-k-s-iyengar/',
            why: 'The authoritative modern guide. Iyengar\'s careful, technical approach to breath practice — still the reference every serious teacher studies.',
          },
          {
            title: 'The Breathing Book',
            author: 'Donna Farhi',
            year: 1996,
            url: 'https://www.macmillan.com/books/9780805042979/thebreathingbook',
            why: 'Donna Farhi\'s gentle, accurate introduction to breath practice as therapy and discipline. The first book to hand a nervous new practitioner.',
          },
          {
            title: 'Breath: The New Science of a Lost Art',
            author: 'James Nestor',
            year: 2020,
            url: 'https://www.penguinrandomhouse.com/books/569528/breath-by-james-nestor/',
            why: 'The bestselling popular survey of breath research. Nestor occasionally overreaches; the chapters on nasal breathing and slow breath practice are solid.',
          },
          {
            title: 'The Heart of Yoga',
            author: 'T.K.V. Desikachar',
            year: 1995,
            url: 'https://www.innertraditions.com/books/the-heart-of-yoga',
            why: 'Includes one of the clearest chapters on pranayama in the classical tradition. Worth reading alongside Iyengar.',
          },
          {
            title: 'Hatha Yoga Pradipika',
            author: 'Svatmarama (attributed, 15th century)',
            year: 1450,
            url: 'https://archive.org/details/hathayogapradipi00svat',
            why: 'The classical hatha-yoga text. Chapter two on pranayama is the foundational literature on breath practice in the tradition.',
          },
        ],
        articles: [
          {
            title: 'Pranayama',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Pranayama',
            why: 'Careful survey of the practices and history. Good bridge between traditional and modern-physiological accounts.',
            year: null,
          },
          {
            title: 'Effect of yoga breathing (pranayama) on heart rate variability',
            source: 'Frontiers in Human Neuroscience',
            url: 'https://www.frontiersin.org/articles/10.3389/fnhum.2018.00353/full',
            why: 'Peer-reviewed research on what slow breathing actually does to the autonomic nervous system. A good non-sensational modern study.',
            year: 2018,
          },
          {
            title: 'Vagus nerve',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Vagus_nerve',
            why: 'The neurological basis for why slow breathing works. The standard technical background for any serious discussion.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Yoga with Adriene — breath and restorative series (free)',
            provider: 'Yoga with Adriene',
            url: 'https://yogawithadriene.com/free-yoga-videos/',
            free: true,
            why: 'Structured, free, beginner-appropriate breath practices from the most-used yoga teacher online.',
          },
          {
            title: 'Coursera — Physiology of Stress and Health (Yale / Laurie Santos adjacent)',
            provider: 'Coursera / Yale',
            url: 'https://www.coursera.org/learn/the-science-of-well-being',
            free: true,
            why: 'Yale\'s popular free course on the science of well-being includes segments on breath, relaxation response, and behavioral interventions.',
          },
        ],
        tools: [
          {
            title: 'Breathwrk app',
            url: 'https://www.breathwrk.com/',
            why: 'A simple structured app for guided breath exercises. Not a replacement for a teacher, but useful as a daily reminder and timer.',
          },
        ],
        primarySources: [
          {
            title: 'Yoga Sutras of Patanjali (Sanskrit with English translation)',
            url: 'https://archive.org/details/yogasutrasofpatan00patauoft',
            why: 'The ancient source on the eight limbs of yoga, including pranayama as the fourth. The starting text for any serious study.',
          },
        ],
      },

      seeAlso: ['sun_sal', 'running', 'publicspeaking'],
      prereqs: ['sun_sal'],
      leadsTo: [],

      chapterActivity: 'A quiet Sunday-evening "breath circle" at the Kalachakra Meditation Center in the East Village — thirty minutes of guided pranayama, thirty minutes of silent sitting, and tea.',

      sources: [
        'https://en.wikipedia.org/wiki/Pranayama',
        'https://en.wikipedia.org/wiki/Vagus_nerve',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
