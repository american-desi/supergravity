// content/religion.js
// Batch: B04-humanities
// Last updated: 2026-04-22 by BATCH B04-humanities

window.CONTENT = window.CONTENT || {};
window.CONTENT.religion = {
  subjectId: 'religion',
  version: 1,
  lastUpdated: '2026-04-22',
  curator: 'BATCH B04-humanities',
  topics: {

    abrahamic: {
      id: 'abrahamic',
      name: 'Abrahamic Religions',
      level: 'Intermediate',
      dek: 'Three traditions — Judaism, Christianity, Islam — that trace their origin to a single covenant and now count more than half the world\'s believers.',
      readTime: '14 min',

      sections: ['A shared beginning', 'Judaism', 'Christianity', 'Islam', 'Living side by side'],
      body: [
        { type: 'lead', text: 'On a hilltop in what is now the West Bank, sometime in the second millennium BCE, a man named Abram — later Abraham — is said to have heard a voice promising him land, descendants, and a covenant. Whatever the historical kernel, the story became foundational for three traditions: Judaism, which holds that the covenant is with the Jewish people; Christianity, which holds that it was extended through Jesus to all humanity; and Islam, which holds that Muhammad restored and completed the same original faith. Between them, these three traditions shape the lives of more than half the planet.' },
        { type: 'h2', text: 'Shared inheritance' },
        { type: 'p', text: 'The three traditions share a story — monotheism, prophetic revelation, the patriarchs, a final judgment — and differ sharply on what happened along the way and what it means. All three revere Abraham. Jews and Christians share the Hebrew scriptures (which Christians call the Old Testament). Christians and Muslims both believe Jesus was born of the Virgin Mary, a miracle worker, and a messenger of God; they disagree on whether he was divine and whether he died on the cross. Muslims hold Jesus to be a prophet and Muhammad, in the seventh century, to be the seal of the prophets. The disagreements have been consequential. The overlap is still the deepest ecumenical ground available.' },
        { type: 'h2', text: 'Judaism' },
        { type: 'p', text: 'Judaism is the oldest of the three, with roots in the Bronze Age and continuous religious practice for more than three thousand years. Its foundational text is the Hebrew Bible (Tanakh — Torah, Nevi\'im, Ketuvim). Rabbinic Judaism, the form inherited by almost all modern Jewish communities, crystallized in the centuries after the destruction of the Second Temple in 70 CE, and its core texts are the Mishnah (c. 200 CE) and the Talmud (c. 500 CE), massive compilations of legal and ethical discussion. Orthodox, Conservative, Reform, and Reconstructionist movements all descend from nineteenth- and twentieth-century attempts to live rabbinic Judaism in modernity.' },
        { type: 'h2', text: 'Christianity' },
        { type: 'p', text: 'Christianity began as a Jewish messianic movement in Roman Palestine in the first century CE and became, within three centuries, the official religion of the Roman Empire. Its central claim is that Jesus of Nazareth, crucified under Pontius Pilate around 30 CE, was the long-promised Messiah, the incarnate Son of God, and rose from the dead. The tradition split into Orthodox (the Eastern Roman Empire) and Catholic (Rome) in 1054, and Catholicism split again at the Reformation in 1517 into Catholic and Protestant branches. Contemporary Christianity, with about 2.4 billion adherents, is the largest religion in the world.' },
        { type: 'h2', text: 'Islam' },
        { type: 'p', text: 'Islam began in 610 CE when, according to the tradition, the Prophet Muhammad received the first revelations of the Qur\'an in a cave outside Mecca. The Qur\'an is, for Muslims, the literal word of God in Arabic — an uncreated text that Muhammad memorized and dictated over twenty-three years. The core practices are the Five Pillars: the declaration of faith (shahada), prayer five times a day (salat), almsgiving (zakat), fasting during Ramadan (sawm), and the pilgrimage to Mecca once in a lifetime (hajj). The community split shortly after Muhammad\'s death into Sunni (about 85–90% of Muslims today) and Shia (most of the rest), over the question of rightful succession. Islam now has about 1.9 billion adherents.' },
        { type: 'h2', text: 'Living together' },
        { type: 'p', text: 'The three traditions have rarely been at peace with each other and have occasionally lived remarkably well together. Medieval Islamic Spain — al-Andalus — produced three centuries of serious mutual scholarship: Maimonides wrote in Arabic, Averroes\'s commentaries on Aristotle reached Aquinas by way of Latin translators in Toledo. The founding documents of each tradition, read across, are more often complementary than opposed. A serious student of any one of them tends, over time, to read the other two.' },
        { type: 'callout', text: 'Baha\'i, Druze, and Samaritan communities also count as Abrahamic; each deserves its own study. The three-tradition summary above is a rough sketch, not a complete map.' },
      ],

      keyTerms: ['monotheism', 'covenant', 'Torah', 'Tanakh', 'Gospel', 'Qur\'an', 'Trinity', 'Five Pillars', 'prophet'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ReligionForBreakfast',
            title: 'Religion for Breakfast (channel)',
            channel: 'Religion for Breakfast (Andrew Mark Henry, PhD)',
            duration: 'variable',
            why: 'Andrew Mark Henry\'s academic-but-accessible channel on religion, run by a working religion scholar. His series on early Christianity, Jewish history, and the Qur\'an are the best free video introductions available.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@crashcourse',
            title: 'Crash Course World History — Christianity, Judaism, Islam episodes',
            channel: 'CrashCourse',
            duration: 'variable',
            why: 'John Green\'s orientation episodes on each tradition. Dense, fair, fast.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@LetsTalkReligionChannel',
            title: 'Let\'s Talk Religion (channel)',
            channel: 'Let\'s Talk Religion (Filip Holm)',
            duration: 'variable',
            why: 'Filip Holm\'s substantive mini-lectures on Sufism, Christian mysticism, Kabbalah. Scholarly without being dry.',
          },
        ],
        books: [
          {
            title: 'A History of God',
            author: 'Karen Armstrong',
            year: 1993,
            url: '',
            why: 'The classic comparative study of the three traditions\' evolving idea of God across four thousand years. A former nun who became a historian of religion writes with unusual equanimity.',
          },
          {
            title: 'God: A Biography',
            author: 'Jack Miles',
            year: 1995,
            url: '',
            why: 'Pulitzer-winning literary reading of God as the protagonist of the Hebrew Bible. An unusual, serious book that respects the text on its own terms.',
          },
          {
            title: 'No god but God: The Origins, Evolution, and Future of Islam',
            author: 'Reza Aslan',
            year: 2005,
            url: '',
            why: 'Aslan\'s accessible history of Islam from a scholar working inside the tradition. The best single introduction for a general reader.',
          },
        ],
        articles: [
          {
            title: 'Abrahamic religions',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Abrahamic_religions',
            why: 'Good overview of the shared patrimony and the genuine disagreements.',
            year: null,
          },
          {
            title: 'Pew Research — Religion & Public Life',
            source: 'Pew Research Center',
            url: 'https://www.pewresearch.org/religion/',
            why: 'Nonpartisan demographic studies of religious adherence, practice, and belief — the statistical backbone for any modern discussion.',
            year: null,
          },
          {
            title: 'Philosophy of Religion',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/philosophy-religion/',
            why: 'Charles Taliaferro\'s entry — the philosophical companion to the historical survey.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Introduction to the Old Testament (RLST 145)',
            provider: 'Open Yale Courses (Christine Hayes)',
            url: 'https://oyc.yale.edu/religious-studies/rlst-145',
            free: true,
            why: 'Christine Hayes\'s free Yale course — the best academic introduction to the Hebrew Bible on the internet.',
          },
          {
            title: 'Introduction to New Testament History and Literature (RLST 152)',
            provider: 'Open Yale Courses (Dale Martin)',
            url: 'https://oyc.yale.edu/religious-studies/rlst-152',
            free: true,
            why: 'The companion Yale course on early Christianity, by the late Dale Martin. Also free, also essential.',
          },
        ],
        primarySources: [
          {
            title: 'Tanakh (Hebrew Bible) — Sefaria',
            url: 'https://www.sefaria.org/',
            why: 'Sefaria\'s free library of Jewish texts — Hebrew on one side, English on the other, with classical commentaries alongside.',
          },
          {
            title: 'The Bible (New Revised Standard Version, Bible Gateway)',
            url: 'https://www.biblegateway.com/versions/New-Revised-Standard-Version-Updated-Edition-NRSVue-Bible/',
            why: 'The scholarly standard English translation, searchable, free online.',
          },
          {
            title: 'The Qur\'an — Quran.com',
            url: 'https://quran.com/',
            why: 'Arabic original with multiple respected English translations side by side, searchable, free.',
          },
        ],
      },

      seeAlso: ['dharmic', 'myth', 'islam', 'medieval'],
      prereqs: [],
      leadsTo: ['dharmic', 'myth'],

      chapterActivity: 'Quarterly interfaith reading evenings — a short passage from each of the three scriptures, read in the original and in English, held rotationally at Congregation Beth Elohim, the Interchurch Center, and the Islamic Cultural Center of New York.',

      sources: [
        'https://en.wikipedia.org/wiki/Abrahamic_religions',
        'https://oyc.yale.edu/religious-studies/rlst-145',
        'https://www.pewresearch.org/religion/',
      ],
      verifiedAt: '2026-04-22',
    },

    dharmic: {
      id: 'dharmic',
      name: 'Dharmic Traditions',
      level: 'Intermediate',
      dek: 'Hinduism, Buddhism, Jainism, and Sikhism — the great Indian religions, four paths through a single vocabulary of karma and liberation.',
      readTime: '14 min',

      sections: ['Hinduism as a family', 'The Buddha\'s path', 'Jain non-violence', 'Sikh synthesis'],
      body: [
        { type: 'lead', text: 'In a forest ashram in northern India, sometime in the sixth century BCE, four teachers worked out the central vocabulary of Indian religion: dharma — the moral order and the duty each being has within it — and karma — the lawful consequence of action, binding beings across lifetimes. The elaborations of those ideas over the next twenty-five centuries produced four distinct religions — Hinduism, Buddhism, Jainism, Sikhism — that share a family resemblance and count, together, around 1.3 billion adherents.' },
        { type: 'h2', text: 'Hinduism as a family of traditions' },
        { type: 'p', text: 'Hinduism is the oldest of the four, with scriptural layers stretching from the Vedic hymns (c. 1500 BCE) through the philosophical Upanishads (c. 700 BCE) to the great epic poems the Mahabharata and the Ramayana (c. 200 BCE–200 CE). It is less a single religion than a family of traditions sharing a vocabulary: karma, dharma, moksha (liberation), the cycle of rebirth (samsara), and a pantheon that resolves, for most thoughtful Hindus, into the worship of Brahman — the ultimate reality — through one or another of its many faces. The Bhagavad Gita, an 18-chapter dialogue embedded in the Mahabharata, is probably the single most-read Hindu text worldwide.' },
        { type: 'h2', text: 'The Buddha\'s analysis' },
        { type: 'p', text: 'Siddhartha Gautama — the Buddha — was born a prince in what is now Nepal around the sixth century BCE. His insight, after six years of ascetic practice, was that the root of suffering is craving and that craving can be unlearned. The Four Noble Truths and the Eightfold Path are the shorthand. Buddhism split into Theravada (the "teaching of the elders," dominant in Sri Lanka and Southeast Asia), Mahayana (the "great vehicle," dominant in East Asia, with its bodhisattva ideal), and Vajrayana (Tibetan, ritualized, deeply scholastic). Buddhism has about 500 million adherents today.' },
        { type: 'h2', text: 'Jainism and the ethics of non-harm' },
        { type: 'p', text: 'Mahavira, a contemporary of the Buddha, taught a tradition even more rigorous in its asceticism and more radical in its non-violence (ahimsa) — extending the principle not just to humans and animals but, as far as possible, to every living being. Jain monks wear face masks so they do not inhale insects. The tradition is smaller today — around four to five million — but has had an influence far out of proportion to its numbers, including on Gandhi, who took ahimsa as the central principle of his political method.' },
        { type: 'h2', text: 'Sikhism: the most recent synthesis' },
        { type: 'p', text: 'Guru Nanak, born in 1469 in the Punjab, founded Sikhism as a synthesis of Hindu bhakti devotion and Islamic monotheism. The tradition has ten human Gurus, culminating in Guru Gobind Singh, who at his death in 1708 declared that the scripture itself — the Guru Granth Sahib — would be the perpetual living Guru for the community. Its central teachings are the oneness of God, the equality of all human beings (Sikhism rejects caste), honest work, sharing with others, and constant meditation on the divine name. Around 25 to 30 million Sikhs live today, most in Punjab but now distributed worldwide.' },
        { type: 'h2', text: 'The common grammar' },
        { type: 'p', text: 'The four traditions disagree on almost every metaphysical claim — whether the self exists, whether there is a creator God, whether liberation is personal or impersonal — and share a grammar that Western philosophy lacks. Karma is not divine reward but causal lawfulness. Dharma is not commandment but the right way of being, given what one is. Rebirth is not theological consolation but a technical premise about why practice matters. To read any of the four Indian traditions carefully is to learn a second way of talking about ethics and existence.' },
      ],

      keyTerms: ['dharma', 'karma', 'moksha', 'samsara', 'Vedas', 'ahimsa', 'bodhisattva', 'Guru Granth Sahib'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@LetsTalkReligionChannel',
            title: 'Let\'s Talk Religion — Hinduism and Buddhism series',
            channel: 'Let\'s Talk Religion',
            duration: 'variable',
            why: 'Filip Holm\'s scholarly explainers on the four traditions; his Bhagavad Gita overview is particularly useful.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@ReligionForBreakfast',
            title: 'Religion for Breakfast — Indian religions',
            channel: 'Religion for Breakfast',
            duration: 'variable',
            why: 'Academic short-form introductions to all four dharmic traditions. Andrew Henry\'s interviews with specialists are especially valuable.',
          },
          {
            id: 'NJfpN2jwcnw',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=NJfpN2jwcnw',
            title: 'Indian Religions in 12 Minutes (in a Nutshell)',
            channel: 'SLD Learn (religious studies channel)',
            duration: '12:00',
            why: 'Orientation-length overview. Use before any of the longer resources.',
          },
        ],
        books: [
          {
            title: 'The Bhagavad Gita',
            author: 'Eknath Easwaran (translator)',
            year: 2007,
            url: '',
            why: 'The most widely recommended modern English translation — scholarly, beautiful, with a long introduction. For a free version, see Winthrop Sargeant\'s older translation online.',
          },
          {
            title: 'What the Buddha Taught',
            author: 'Walpola Rahula',
            year: 1959,
            url: '',
            why: 'A Sri Lankan monk\'s short, crystalline exposition of Theravada doctrine. The best single introduction to Buddhist thought in English.',
          },
          {
            title: 'The Hindus: An Alternative History',
            author: 'Wendy Doniger',
            year: 2009,
            url: '',
            why: 'Doniger\'s seven-hundred-page history of Hinduism — controversial in India, respected by scholars internationally, consistently readable.',
          },
        ],
        articles: [
          {
            title: 'Hinduism',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Hinduism',
            why: 'Featured-article overview with careful attention to both textual and lived tradition.',
            year: null,
          },
          {
            title: 'Buddhism',
            source: 'Internet Encyclopedia of Philosophy',
            url: 'https://iep.utm.edu/buddha/',
            why: 'IEP\'s careful overview of Buddhist philosophical positions.',
            year: null,
          },
          {
            title: 'Sikhism',
            source: 'Encyclopædia Britannica',
            url: 'https://www.britannica.com/topic/Sikhism',
            why: 'A concise editorial summary with sections on history, scripture, and practice.',
            year: null,
          },
          {
            title: 'Jainism',
            source: 'Stanford Encyclopedia of Philosophy',
            url: 'https://plato.stanford.edu/entries/jaina-philosophy/',
            why: 'Jayandra Soni on Jain philosophical thought — the scholarly portal.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Buddhism Through Its Scriptures',
            provider: 'edX (Harvard, Charles Hallisey)',
            url: 'https://www.edx.org/learn/buddhism/harvard-university-buddhism-through-its-scriptures',
            free: true,
            why: 'Charles Hallisey\'s free Harvard course. The best academic introduction to Buddhism online.',
          },
          {
            title: 'Hinduism Through Its Scriptures',
            provider: 'edX (Harvard, Anne Monius)',
            url: 'https://www.edx.org/learn/hinduism/harvard-university-hinduism-through-its-scriptures',
            free: true,
            why: 'The companion Harvard course on Hinduism. Free to audit.',
          },
        ],
        primarySources: [
          {
            title: 'The Bhagavad Gita (full text, multiple translations)',
            url: 'https://www.gutenberg.org/ebooks/2388',
            why: 'The Edwin Arnold verse translation on Gutenberg; compare with Easwaran\'s prose.',
          },
          {
            title: 'The Dhammapada (Max Müller translation)',
            url: 'https://www.gutenberg.org/ebooks/2017',
            why: 'A classic verse compilation of Buddhist teaching, free on Gutenberg.',
          },
          {
            title: 'SuttaCentral — early Buddhist texts',
            url: 'https://suttacentral.net/',
            why: 'The comprehensive online library of the Pali Canon with modern translations by working Buddhist scholars.',
          },
        ],
      },

      seeAlso: ['abrahamic', 'myth', 'eastern'],
      prereqs: [],
      leadsTo: ['abrahamic', 'eastern'],

      chapterActivity: 'Monthly meditation-and-discussion evenings at the Rubin Museum of Art in Chelsea, with guest teachers from the Hindu Temple Society of North America, the American Museum of Natural History\'s Buddhist collections, and the Sikh Center of New York.',

      sources: [
        'https://en.wikipedia.org/wiki/Hinduism',
        'https://iep.utm.edu/buddha/',
        'https://www.britannica.com/topic/Sikhism',
        'https://plato.stanford.edu/entries/jaina-philosophy/',
      ],
      verifiedAt: '2026-04-22',
    },

    myth: {
      id: 'myth',
      name: 'World Mythology',
      level: 'Beginner',
      dek: 'The stories humans have told each other about gods, heroes, and the origins of everything — ancient, universal, and alive.',
      readTime: '12 min',

      sections: ['What a myth is for', 'Four traditions', 'Patterns without universality', 'Reading myths as literature'],
      body: [
        { type: 'lead', text: 'Before the Greeks called it philosophy, before the Chinese called it history, before the Hebrews called it law, every civilization we know of was telling stories: how the world came to be, why the stars move, where the dead go, how the first humans were shaped from clay or wood or maize. These stories are not bad science or early theology. They are a third thing — myths — doing work that no other kind of discourse does as well.' },
        { type: 'h2', text: 'What myth is for' },
        { type: 'p', text: 'Myths do several things at once. They explain: why thunder happens, why women give birth in pain. They sanction: the king rules because of a covenant, the priest speaks because of an ancestor. They console: the dead are not gone, they are in the West, or in the sky, or waiting. And they teach: by giving the difficult emotions — rage, grief, love, temptation — figures large enough to carry them. A myth is, at its best, a compressed curriculum in how to be a person in a specific world.' },
        { type: 'h2', text: 'Four traditions, quickly' },
        { type: 'p', text: 'Greek myth — the gods of Olympus, Heracles, Odysseus, Oedipus — was elaborated by Homer, Hesiod, and the Athenian tragedians, and preserved through Ovid\'s Latin retelling. Norse myth — Odin, Thor, Loki, Ragnarok — survives mainly in the thirteenth-century Icelandic Eddas of Snorri Sturluson, who wrote them down when the tradition was already fading. Mesopotamian myth — the Epic of Gilgamesh, the Enuma Elish creation epic — is the oldest we have textual access to, and is the direct ancestor of several biblical narratives (the flood, most notably). African, Indigenous American, Polynesian, and Aboriginal Australian mythologies — living traditions, not mere relics — are equally deep but less often translated into the languages in which this page is written.' },
        { type: 'h2', text: 'Patterns without universality' },
        { type: 'p', text: 'Joseph Campbell\'s The Hero with a Thousand Faces (1949) argued that many myths share a single underlying structure — the hero\'s journey of departure, initiation, return. The idea inspired the screenplay of Star Wars and has been enormously productive commercially; it has also been criticized, fairly, for flattening genuine cultural differences. A more careful current view is that certain patterns (creation ex nihilo or from a cosmic egg; trickster figures; flood stories) recur often enough to be suggestive without being universal, and that the differences between traditions are usually more interesting than the similarities.' },
        { type: 'h2', text: 'Reading myth well' },
        { type: 'p', text: 'A modern reader approaching myth has two traps. One is to treat the stories as charming nonsense — decorative, infantile, superseded. The other is to treat them as hidden truth — psychological archetypes, coded wisdom, a universal key. The more honest posture is closer to the one a literary reader takes toward Shakespeare: these stories were made to do real work for real people, they are still unusually efficient at doing it, and the most rewarding way to read them is slowly, in good translation, and on their own terms.' },
        { type: 'quote', text: 'Myths are public dreams; dreams are private myths.', cite: 'Joseph Campbell' },
      ],

      keyTerms: ['myth', 'cosmogony', 'theogony', 'archetype', 'trickster', 'hero\'s journey', 'pantheon', 'folktale'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@crashcourse',
            title: 'Crash Course Mythology (season, Mike Rugnetta)',
            channel: 'CrashCourse',
            duration: 'variable',
            why: 'Mike Rugnetta\'s forty-one-episode season on creation myths, tricksters, and heroes across traditions — with honest caveats about the pitfalls of cross-cultural comparison.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@OverlySarcasticProductions',
            title: 'Overly Sarcastic Productions — Miscellaneous Myths',
            channel: 'Overly Sarcastic Productions',
            duration: 'variable',
            why: 'Red\'s ongoing series of short myth retellings. Historically careful, entertaining, and international in scope.',
          },
          {
            id: 'h_Oi9FTzxNg',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=h_Oi9FTzxNg',
            title: 'The Myth of Prometheus (Iseult Gillespie, TED-Ed)',
            channel: 'TED-Ed',
            duration: '4:52',
            why: 'One of TED-Ed\'s many short animated myth retellings; browse their channel for dozens more.',
          },
        ],
        books: [
          {
            title: 'Mythology',
            author: 'Edith Hamilton',
            year: 1942,
            url: '',
            why: 'The standard English primer on Greek and Roman (and a chapter of Norse) myth — eighty years old and still in print in every American high school.',
          },
          {
            title: 'The Hero with a Thousand Faces',
            author: 'Joseph Campbell',
            year: 1949,
            url: '',
            why: 'Campbell\'s famous argument for the monomyth. Read it for the argument, not the anthropology — modern scholars are more cautious, but Campbell remains culturally central.',
          },
          {
            title: 'Myth: A Very Short Introduction',
            author: 'Robert A. Segal',
            year: 2004,
            url: '',
            why: 'A hundred and fifty pages surveying the major theories of myth — Frazer, Malinowski, Eliade, Lévi-Strauss, Campbell — by a leading scholar.',
          },
        ],
        articles: [
          {
            title: 'Mythology',
            source: 'World History Encyclopedia',
            url: 'https://www.worldhistory.org/mythology/',
            why: 'Short, well-illustrated entry with linked sub-articles on each tradition.',
            year: null,
          },
          {
            title: 'Myth',
            source: 'Encyclopædia Britannica',
            url: 'https://www.britannica.com/topic/myth',
            why: 'The editorial overview. Cross-cultural, with careful definitions.',
            year: null,
          },
          {
            title: 'Theoi Greek Mythology',
            source: 'Theoi.com (Aaron Atsma)',
            url: 'https://www.theoi.com/',
            why: 'The best single website for Greek myth — every god, every hero, keyed to the ancient sources that mention them.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Greek and Roman Mythology',
            provider: 'Coursera (University of Pennsylvania, Peter Struck)',
            url: 'https://www.coursera.org/learn/mythology',
            free: true,
            why: 'Peter Struck\'s free Penn course — widely praised, tied to a full reading of the Odyssey and the Oresteia. The best online course on classical myth.',
          },
        ],
        primarySources: [
          {
            title: 'Hesiod\'s Theogony (Gutenberg)',
            url: 'https://www.gutenberg.org/ebooks/348',
            why: 'The founding cosmogonic poem of Greek myth. Read alongside Homer.',
          },
          {
            title: 'The Prose Edda (Snorri Sturluson, Gutenberg)',
            url: 'https://www.gutenberg.org/ebooks/18947',
            why: 'The thirteenth-century Icelandic sourcebook for Norse mythology, free on Gutenberg.',
          },
          {
            title: 'Ovid\'s Metamorphoses (Gutenberg, Garth/Dryden verse translation)',
            url: 'https://www.gutenberg.org/ebooks/26073',
            why: 'The Roman compilation that carried Greek myth through to medieval and Renaissance Europe.',
          },
        ],
      },

      seeAlso: ['abrahamic', 'dharmic', 'epic'],
      prereqs: [],
      leadsTo: ['abrahamic', 'dharmic'],

      chapterActivity: 'A seasonal evening-series at the 92nd Street Y\'s library — a different mythological tradition each season, with guest scholars and readings from canonical texts.',

      sources: [
        'https://www.britannica.com/topic/myth',
        'https://www.worldhistory.org/mythology/',
        'https://www.theoi.com/',
      ],
      verifiedAt: '2026-04-22',
    },

  },
};
