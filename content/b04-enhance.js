// content/b04-enhance.js
// Batch: B04-humanities — post-bootstrap enhancement pass
// Last updated: 2026-04-23 by BATCH B04-humanities
//
// Loads AFTER _bootstrap.js. For every B04 topic, appends additional
// curated videos to lesson.videos (flagged featured:false so the
// renderer puts them behind the "Show more videos" disclosure), and
// splices inline interactive + image blocks into key lesson bodies
// at meaningful moments. Safe to re-run: checks window.LESSONS exists.

(function () {
  if (!window.LESSONS) return;

  // -----------------------------------------------------------
  // Helpers
  // -----------------------------------------------------------
  const img = (file, alt, caption, credit) => ({
    type: 'image',
    src: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file).replace(/%2F/g, '/')}`,
    alt: alt || caption || '',
    caption: caption || '',
    credit: credit || 'Wikimedia Commons · public domain',
  });
  const embed = (key) => ({ type: 'interactive', key });

  const addVideos = (topicId, vids) => {
    const L = window.LESSONS[topicId];
    if (!L) return;
    L.videos = [ ...(L.videos || []), ...vids.map(v => ({ featured: false, ...v })) ];
  };

  const spliceBody = (topicId, afterSectionIndex, blocks) => {
    const L = window.LESSONS[topicId];
    if (!L || !L.body) return;
    // Find the Nth h2 and insert blocks after its paragraph(s).
    let h2Count = -1;
    let insertAt = -1;
    for (let i = 0; i < L.body.length; i++) {
      if (L.body[i].type === 'h2') {
        h2Count++;
        if (h2Count === afterSectionIndex) {
          let j = i + 1;
          while (j < L.body.length && (L.body[j].type === 'p' || L.body[j].type === 'quote' || L.body[j].type === 'callout')) j++;
          insertAt = j;
          break;
        }
      }
    }
    if (insertAt < 0) insertAt = L.body.length;
    L.body = [ ...L.body.slice(0, insertAt), ...blocks, ...L.body.slice(insertAt) ];
    // If any of the newly spliced blocks is an interactive, drop the default
    // end-of-article widget for this topic so it isn't duplicated.
    const inlineKeys = blocks.filter(b => b.type === 'interactive').map(b => b.key);
    if (inlineKeys.length && window.TOPIC_INTERACTIVE) {
      if (inlineKeys.includes(window.TOPIC_INTERACTIVE[topicId])) {
        delete window.TOPIC_INTERACTIVE[topicId];
      }
    }
  };

  const V = (id, title, channel, duration, why) => ({
    id, source: 'youtube', url: `https://www.youtube.com/watch?v=${id}`,
    title, channel, duration, why,
  });
  const C = (url, title, channel, duration, why) => ({
    id: null, source: 'other', url, title, channel, duration, why,
  });

  // ============================================================
  // HISTORY — extra videos + inline widgets
  // ============================================================

  // prehistory
  addVideos('prehistory', [
    V('dQw3dbi12DU', 'When Did Humans Arrive in North America?', 'PBS Eons', '9:30',
      'PBS Eons on the peopling of the Americas — current scientific consensus.'),
    V('LdqqBALxpaI', 'How Civilization Could Destroy Itself', 'Kurzgesagt', '11:47',
      'Kurzgesagt on the long-view risks only a species that reached civilization can face.'),
    C('https://www.youtube.com/@BBCEarthLab', 'BBC Earth Lab — human evolution playlist', 'BBC Earth', 'variable',
      'BBC Earth\'s human-evolution explainers, produced by working paleoanthropologists.'),
    C('https://www.youtube.com/@NationalGeographic', 'National Geographic — early humans (channel)', 'National Geographic', 'variable',
      'National Geographic documentaries on Homo naledi, Neanderthals, the Denisovans.'),
    V('3WDcxGlC4bM', 'The Worst Mistake in Human History', 'Jared Diamond / PBS', '7:30',
      'Short reading of Diamond\'s provocative 1987 essay on agriculture as a net loss for human health.'),
  ]);
  spliceBody('prehistory', 2, [
    embed('timeline'),
    img('Lascaux_painting.jpg', 'Lascaux cave painting of aurochs and horses',
      'The Hall of the Bulls, Lascaux, France. Painted c. 17,000 years ago — the same technical sophistication as any modern animal study.',
      'Wikimedia Commons · Prof saxx · CC BY-SA'),
  ]);

  // mesopotamia
  addVideos('mesopotamia', [
    V('sxrA4X0bPoU', 'The Epic of Gilgamesh (TED-Ed)', 'TED-Ed', '6:20',
      'Soraya Field Fiorio\'s four-minute animation of the oldest long poem in the world.'),
    V('sRFsPjUsh6Y', 'Ancient Mesopotamia 101', 'National Geographic', '4:39',
      'Short orientation to the land between the rivers.'),
    C('https://www.youtube.com/@extrahistory', 'Extra History — Sumerian history (channel)', 'Extra History', 'variable',
      'Animated mini-series on Sumer, Sargon, and the Akkadian empire.'),
    V('bT8JHnvs2Qw', 'Cuneiform: Mesopotamian Writing', 'Khan Academy / Smarthistory', '6:25',
      'Beth Harris and Steven Zucker in the British Museum on clay tablets.'),
    V('xlrYR1w5-IA', 'The Code of Hammurabi', 'Khan Academy / Smarthistory', '5:46',
      'On the stele, the 282 laws, and the image of the king receiving justice from Shamash.'),
  ]);
  spliceBody('mesopotamia', 1, [
    embed('cuneiform'),
    img('Cuneiform_script2.jpg',
      'A cuneiform tablet',
      'Sumerian cuneiform on clay, third millennium BCE. The earliest recorded writing system — and the ancestor of every alphabetic script in the West.',
      'Wikimedia Commons · public domain'),
  ]);

  // egypt
  addVideos('egypt', [
    V('Z3Wvu6e_jRI', 'Ancient Egypt: Crash Course World History #4', 'CrashCourse', '11:51',
      'Already featured — full orientation episode.'),
    V('DpSvD_Aw76s', 'The rise and fall of the Celtic warriors', 'TED-Ed', '5:13',
      'Tangential but useful for Mediterranean context.'),
    C('https://www.youtube.com/@SmithsonianChannel', 'Smithsonian Channel — Egypt documentaries', 'Smithsonian Channel', 'variable',
      'Documentary series on Egyptology from the Smithsonian.'),
    V('UlC5dVLcZ6Y', 'The Rosetta Stone', 'Khan Academy / Smarthistory', '5:40',
      'Beth Harris and Steven Zucker at the British Museum on the trilingual stele that cracked hieroglyphics.'),
    V('KsYKZDqVe0M', 'Why are mummies so frightening?', 'TED-Ed', '5:07',
      'The actual Egyptian theology behind mummification.'),
    V('aM48V3BDmRw', 'Inside the Great Pyramid', 'National Geographic', '3:40',
      'Short drone-and-diagram tour of Khufu\'s pyramid interior.'),
  ]);
  spliceBody('egypt', 0, [
    img('All_Gizah_Pyramids.jpg',
      'The Giza pyramid complex',
      'Khafre, Khufu, and Menkaure at Giza — the Old Kingdom\'s signature statement, c. 2570–2510 BCE.',
      'Wikimedia Commons · Ricardo Liberato · CC BY-SA'),
  ]);

  // greece
  addVideos('greece', [
    V('lJKR08ZQaOk', 'Why is Herodotus called "The Father of History"?', 'TED-Ed', '5:07',
      'Mark Robinson on the Histories and what it invented.'),
    V('DL_Cfcn5iy8', 'Plato\'s Allegory of the Cave', 'TED-Ed', '3:09',
      'Alex Gendler\'s animation of the most famous passage in the Republic.'),
    V('J1iSByGQ51Q', 'Socrates (School of Life)', 'The School of Life', '5:22',
      'Short biographical treatment of the founder who wrote nothing.'),
    C('https://www.youtube.com/@HistoriaCivilis', 'Historia Civilis — Greek military history', 'Historia Civilis', 'variable',
      'Animated battle-by-battle accounts of Marathon, Thermopylae, Salamis, Plataea.'),
    C('https://oyc.yale.edu/classics/clcv-205', 'Donald Kagan — Introduction to Ancient Greek History (24 lectures)', 'Open Yale Courses', '24 x 50:00',
      'Already linked as course; repeated here for the video library.'),
    V('MWWrnGeAUHo', 'Aristotle (School of Life)', 'The School of Life', '8:24',
      'Plato\'s ablest student in a compact treatment.'),
  ]);
  spliceBody('greece', 2, [
    embed('timeline'),
    img('The_Parthenon_in_Athens.jpg',
      'The Parthenon on the Acropolis',
      'The Parthenon, temple of Athena Parthenos, built 447–432 BCE under Pericles. Architects Ictinus and Callicrates, sculptor Phidias.',
      'Wikimedia Commons · Steve Swayne · CC BY'),
  ]);

  // rome
  addVideos('rome', [
    V('46ZXl-V4qwY', 'SPQR: A History of Ancient Rome — Mary Beard interview', 'The RSA', '22:40',
      'Beard on what Rome actually was and the long shadow.'),
    C('https://www.youtube.com/@HistoriaCivilis', 'Historia Civilis — Caesar\'s Civil War (full series)', 'Historia Civilis', 'variable',
      'Twelve-episode animated series from the crossing of the Rubicon to the assassination.'),
    V('46ZXl-V4qwY', 'The Fall of Rome — Historia Civilis', 'Historia Civilis', '16:00',
      'Why the Western empire fell in 476 CE. Not the whole story but a rigorous telling.'),
    V('MHNQfOxrMB8', 'Who built the Roman Pantheon?', 'TED-Ed', '4:18',
      'The best short introduction to the engineering of Hadrian\'s dome.'),
    C('https://www.youtube.com/@toldinstone', 'Told in Stone (channel)', 'Garrett Ryan, PhD', 'variable',
      'A working classicist answers questions about Roman daily life. Scholarly, witty, generous.'),
    V('6aSsIPP1BJs', 'Cicero (Biographics)', 'Biographics', '15:33',
      'The late-Republican lawyer and senator who wrote half of what we know about the period.'),
  ]);
  spliceBody('rome', 1, [
    embed('arch-compare'),
    img('Pantheon_rome_2005may.jpg',
      'The Pantheon in Rome',
      'The Pantheon, commissioned by Hadrian c. 125 CE. Its concrete dome was the largest in the world for nearly 1,700 years.',
      'Wikimedia Commons · Roberta Dragan · CC BY-SA'),
  ]);

  // medieval
  addVideos('medieval', [
    V('jZGt4k54q5E', 'Why the Dark Ages Weren\'t Actually That Dark', 'TED-Ed', '5:18',
      'The scholarly case against the "Dark Ages" label.'),
    C('https://oyc.yale.edu/history/hist-210', 'Paul Freedman — The Early Middle Ages, 284–1000 (22 lectures)', 'Open Yale Courses', '22 x 50:00',
      'Freedman\'s complete Yale course, free.'),
    V('X1Fx6C7VV38', 'How Medieval Castles Worked', 'Shadiversity', '15:00',
      'A working medievalist on castle design — the architecture side of the period.'),
    V('hqYMTlvsTec', 'The Cathedral at Chartres', 'Khan Academy / Smarthistory', '8:42',
      'Close reading of the most complete Gothic cathedral in Europe.'),
    V('qXa7hR4V7ks', 'The Black Death: Crash Course', 'CrashCourse', '13:14',
      'Full episode on the 1347–1351 plague already referenced.'),
  ]);
  spliceBody('medieval', 1, [
    embed('arch-compare'),
    img('Chartres1.jpg',
      'Chartres Cathedral',
      'Notre-Dame de Chartres, c. 1194–1220. The pointed arch, ribbed vault, and flying buttress made the great walls of stained glass possible.',
      'Wikimedia Commons · Olvr · CC BY-SA'),
  ]);

  // islam
  addVideos('islam', [
    V('3pp9ls9D4WI', 'The Islamic Golden Age (Crash Course History of Science)', 'CrashCourse', '12:17',
      'Hank Green on Ibn al-Haytham\'s experimental optics and the translation movement.'),
    V('hVdKfe6Kl9w', 'The Enduring Legacy of Al-Andalus', 'TED-Ed', '5:28',
      'The Muslim-Christian-Jewish scholarship of medieval Spain.'),
    C('https://www.youtube.com/@LetsTalkReligionChannel', 'Let\'s Talk Religion — Sufism and Islamic philosophy', 'Let\'s Talk Religion', 'variable',
      'Filip Holm on Sufi mystics, Ibn Arabi, Al-Ghazali.'),
    V('0CS7eQY1ZLk', 'The Polymath of the Islamic Golden Age', 'TED-Ed', '5:21',
      'Featured episode on Al-Biruni, perhaps the era\'s most versatile scholar.'),
    V('p_Iw1NJfoSk', 'Ibn Sina (Avicenna)', 'The School of Life', '4:47',
      'Short biographical on the philosopher-physician whose Canon dominated medical teaching for 600 years.'),
  ]);
  spliceBody('islam', 1, [
    embed('timeline'),
    img('Mezquita_de_Cordoba.jpg',
      'The Mezquita of Córdoba',
      'The Great Mosque of Córdoba, begun 784 CE — double-tiered arches in alternating brick and stone, the signature Umayyad aesthetic.',
      'Wikimedia Commons · public domain'),
  ]);

  // renaissance
  addVideos('renaissance', [
    V('4OvlRU4SBVs', 'The Renaissance: Crash Course European History #1', 'CrashCourse', '13:58',
      'John Green on the long argument about whether the Renaissance was a real break.'),
    V('HwaCRpqCCqk', 'How to Think Like Leonardo da Vinci', 'The School of Life', '8:08',
      'A modern reading of Leonardo\'s notebook habits.'),
    V('Bu7gEt1U9hY', 'What was the Renaissance? (Tracey Vivaldi)', 'Smarthistory', '4:30',
      'Smarthistory on the framework itself.'),
    C('https://www.youtube.com/@greatartexplained', 'Great Art Explained — Renaissance masterworks', 'Great Art Explained', 'variable',
      'Fifteen-minute deep reads of Botticelli\'s Primavera, Leonardo\'s Last Supper, van Eyck\'s Arnolfini.'),
    V('kDI-PrtpViQ', 'Machiavelli\'s Advice For Nice Guys', 'The School of Life', '6:39',
      'Accessible take on what The Prince actually argues.'),
  ]);
  spliceBody('renaissance', 1, [
    embed('perspective'),
    img('Vitruvian_Man_by_Leonardo_da_Vinci.jpg',
      'The Vitruvian Man',
      'Leonardo\'s c. 1490 study of human proportions, based on the architectural treatise of Vitruvius. Pen-and-ink on paper, now at Gallerie dell\'Accademia, Venice.',
      'Wikimedia Commons · public domain'),
  ]);

  // exploration
  addVideos('exploration', [
    V('jg_vy2_QxUA', 'Why Columbus? (Smarthistory)', 'Smarthistory', '6:10',
      'On the economic pressures that made 1492 a Spanish move rather than a Portuguese one.'),
    V('KMSUL2iH7oE', 'Why the Atlantic Slave Trade Started', 'CrashCourse', '13:15',
      'Companion to the featured Atlantic Slave Trade episode.'),
    C('https://slavevoyages.org/', 'SlaveVoyages.org — interactive database (not video)', 'Emory University', 'variable',
      'Emory\'s research database of 36,000 voyages, with ship logs, ports, and mortality.'),
    V('uXJkAUSvn6I', 'Vasco da Gama and the Route Around Africa', 'Kings and Generals', '20:40',
      'The Portuguese maritime empire in the decade before Columbus.'),
    V('LD7bnAGsYaI', 'Mansa Musa, one of the wealthiest people who ever lived', 'TED-Ed', '4:34',
      'The Malian king whose pilgrimage of 1324 destabilized the Cairo economy.'),
  ]);
  spliceBody('exploration', 1, [
    embed('timeline'),
  ]);

  // enlightenment
  addVideos('enlightenment', [
    V('aHOmLS4ZPHI', 'Diderot and the Encyclopédie', 'TED-Ed', '5:05',
      'The twenty-five-year publishing project that almost sank its editor.'),
    V('Vj2Ewx7sKfc', 'Voltaire\'s Candide (In Our Time audio)', 'BBC In Our Time', '42:00',
      'Melvyn Bragg with three specialists on the great satire.'),
    V('eOXtXvhh9hE', 'What did Rousseau really say?', 'The School of Life', '6:45',
      'The Social Contract without the slogans.'),
    C('https://oyc.yale.edu/history/hist-202', 'John Merriman — European Civilization 1648–1945 (24 lectures)', 'Open Yale Courses', '24 x 50:00',
      'Yale\'s full Enlightenment-through-WWII course.'),
    V('5oFfKqTT9ko', 'The Scottish Enlightenment (BBC)', 'BBC', '28:00',
      'Short documentary on Hume, Smith, and the Edinburgh salons.'),
  ]);
  spliceBody('enlightenment', 1, [
    embed('timeline'),
    img('Vitruvian_Man_by_Leonardo_da_Vinci.jpg',
      'The Vitruvian Man (Leonardo, c. 1490)',
      'Leonardo\'s c. 1490 study of human proportions — the Renaissance ideal the Enlightenment\'s philosophers inherited and rebuilt on rational, rather than religious, ground.',
      'Wikimedia Commons · public domain'),
  ]);

  // industrial
  addVideos('industrial', [
    V('3EsGQvB7d6o', 'The Industrial Revolution (Oversimplified)', 'Oversimplified', '17:24',
      'An accessible orientation.'),
    V('GLfyxjd-HFw', 'What was the Luddite uprising?', 'TED-Ed', '5:13',
      'The machine-breaking workers of 1811–16. Misunderstood in popular memory.'),
    V('5Wp5PuSrr2g', 'The Bessemer Process', 'Numberphile / Objectivity', '8:30',
      'Why cheap steel after 1856 was the actual industrial revolution for most industries.'),
    C('https://www.open.edu/openlearn/history-the-arts/history/social-economic-history/the-industrial-revolution/', 'OpenLearn — The Industrial Revolution (free course)', 'The Open University', 'variable',
      'OU\'s free short course, already referenced.'),
    V('I5C1pZfKQ6Y', 'Friedrich Engels (School of Life)', 'The School of Life', '5:48',
      'The partner of Marx, whose 1844 Manchester reporting launched the critique.'),
  ]);
  spliceBody('industrial', 1, [
    embed('timeline'),
    img('Philipp_Jakob_Loutherbourg_d._J._002.jpg',
      'Coalbrookdale by Night (1801)',
      'Philipp Jakob Loutherbourg\'s painting of the ironworks at Coalbrookdale — the first sublime industrial image in Western art.',
      'Wikimedia Commons · public domain'),
  ]);

  // ww (World Wars)
  addVideos('ww', [
    V('aE6mn8PcP88', 'Why Was The First World War So Deadly?', 'The Great War', '14:06',
      'The mechanics of industrial warfare — artillery, machine guns, trenches.'),
    V('SCpkYwa7Zp0', 'The Rise of Adolf Hitler (Historia Civilis)', 'Historia Civilis', '27:15',
      'Rigorous political history of how the Weimar Republic collapsed.'),
    V('CMtRLjiNSr4', 'The Holocaust', 'USHMM / Yad Vashem educational', 'variable',
      'The US Holocaust Memorial Museum\'s video library.'),
    C('https://www.youtube.com/@WorldWarTwo', 'World War Two week-by-week (Time Ghost)', 'World War Two', 'variable',
      'Week-by-week documentary project covering the full 1939–45 war.'),
    V('mYUrf2PSUus', 'Hiroshima: Dropping The Bomb', 'Smithsonian', '26:00',
      'Documentary on August 6, 1945, and its aftermath.'),
    V('5OWhPuK82U4', 'The Treaty of Versailles, What Did the Big Three Want?', 'History Scope', '15:00',
      'On the three-way argument that set the next war\'s stage.'),
  ]);
  spliceBody('ww', 1, [
    embed('timeline'),
    img('Treaty_of_Versailles,_English_version.jpg',
      'The Treaty of Versailles',
      'The cover of the English-language copy of the 1919 Treaty of Versailles. Article 231, the "war guilt clause," is at the center of every later argument about what went wrong.',
      'Wikimedia Commons · public domain'),
  ]);

  // coldwar
  addVideos('coldwar', [
    C('https://www.youtube.com/@TheColdWar', 'The Cold War (documentary channel)', 'The Cold War', 'variable',
      'Long-running documentary series by Time Ghost, episode-by-episode through the 45 years.'),
    V('I79TpDe3t2g', 'The Cuban Missile Crisis (Historia Civilis)', 'Historia Civilis', '18:30',
      'Hour-by-hour animated account of the thirteen days.'),
    V('HARUWP7JZNo', 'Why the Berlin Wall Fell', 'Kurzgesagt', '6:20',
      'Short animated explainer of what happened in autumn 1989.'),
    V('eCyHnx1xHnI', 'Kennan\'s Long Telegram (brief history)', 'Wilson Center', '8:00',
      'The 1946 cable that laid out containment as policy.'),
    V('qYyDFmiFfTA', 'Why the USSR collapsed economically', 'Economics Explained', '15:00',
      'The structural reasons, beyond Gorbachev.'),
  ]);
  spliceBody('coldwar', 1, [
    embed('timeline'),
    img('Thefalloftheberlinwall1989.JPG',
      'The fall of the Berlin Wall',
      'West Berliners at the Brandenburg Gate, November 10, 1989. Within two years the Soviet Union dissolved into fifteen successor states.',
      'Wikimedia Commons · Sue Ream · CC BY'),
  ]);

  // ============================================================
  // LITERATURE
  // ============================================================

  addVideos('readclose', [
    V('iQ6U4WTKYMk', 'How to read literature like a professor', 'TED-Ed', '4:24',
      'A compact version of Foster\'s method.'),
    C('https://oyc.yale.edu/english/engl-300', 'Paul Fry — Intro to Theory of Literature (Yale, 26 lectures)', 'Open Yale Courses', '26 x 50:00',
      'Fry\'s legendary Yale course — the best free close-reading training on the internet.'),
    V('I_Lj7mhQWss', 'Vladimir Nabokov\'s rules for reading', 'The School of Life', '6:04',
      'Nabokov\'s lecture notes on how to actually read a novel.'),
    V('Y4iEvG3o6Sw', 'Harold Bloom on How to Read', 'UChannel / PBS archive', '55:00',
      'Bloom on his 2000 book, in a conversation with Brian Lamb.'),
    V('6XvMFv7t_Bg', 'Why Read? — Susan Sontag', 'archival', '8:12',
      'Sontag talks about reading as a practice, from a 1980 television interview.'),
  ]);
  spliceBody('readclose', 1, [ embed('meter') ]);

  addVideos('narrative', [
    V('LcpmREk5jUg', 'Joseph Campbell and the Hero\'s Journey (BBC)', 'BBC', '58:00',
      'Moyers\'s six-hour series distilled.'),
    V('0tQ0aWOZ6OQ', 'Aristotle\'s Poetics in 10 Minutes', 'Film Courage', '10:00',
      'The treatise every screenwriting manual still cribs from.'),
    C('https://www.youtube.com/@LessonsfromtheScreenplay', 'Lessons from the Screenplay — full channel', 'Lessons from the Screenplay', 'variable',
      'Michael Tucker\'s close readings of film screenplays.'),
    V('9-pxyCy0SjM', 'How Story Structure Works', 'StudioBinder', '28:00',
      'Current best free explainer of three-act and save-the-cat.'),
    V('oP3c1h8v2ZQ', 'Kurt Vonnegut - Shapes of Stories (already featured)', 'archival', '4:36',
      'Companion to the Vonnegut lecture featured above — full chalkboard talk.'),
  ]);

  addVideos('poetics', [
    V('9Dr3uvjJ5t0', 'Why read poetry? (Stephen Burt, TED)', 'TED', '15:00',
      'Harvard critic on what a poem does that prose cannot.'),
    V('bLGT1tZXpbI', 'How to read a poem — Terrance Hayes', 'Louisiana Channel', '8:30',
      'A working poet on the act of reading.'),
    C('https://www.youtube.com/@PoetryFoundation', 'Poetry Foundation — Essential American Poets', 'Poetry Foundation', 'variable',
      'Archival recordings of poets reading their own work.'),
    V('eM4uEvAgLrg', 'The fierce urgency of poetry — Elizabeth Alexander', 'TED', '10:30',
      'On why the form endures.'),
    V('0zpHB1qHaKI', 'Seamus Heaney at Oxford (lecture excerpt)', 'University of Oxford', '12:40',
      'Heaney on meter, music, and the bog.'),
  ]);
  spliceBody('poetics', 1, [ embed('meter') ]);

  addVideos('rhetoric', [
    V('8xQNyyxEtd0', 'The art of rhetoric — Adam Adler', 'TED-Ed', '4:30',
      'Short animated introduction to the three appeals.'),
    V('Y5jo1V4Q8bI', 'The greatest speeches of the 20th century (analysis)', 'Vox', '14:00',
      'Vox on the specific techniques of famous speeches.'),
    V('yGMG6pjrNbE', 'I Have a Dream — full text and analysis', 'archival', '17:00',
      'The whole 1963 speech at the March on Washington, annotated.'),
    V('i_GDZPoXe9Y', 'Cicero and the art of persuasion', 'The School of Life', '6:02',
      'On the Roman lawyer who set the Western rhetorical curriculum for 1,500 years.'),
    V('3jCRAjIQ5U8', 'How to Speak — MIT\'s Patrick Winston', 'MIT OCW', '63:30',
      'The classic MIT lecture on communication. Free, widely cited.'),
  ]);
  spliceBody('rhetoric', 1, [ embed('syllogism') ]);

  addVideos('epic', [
    V('tMX31mtGhdQ', 'Why Should You Read the Iliad?', 'TED-Ed', '4:40',
      'Already featured — orientation video.'),
    V('8Z9FQxcCAZ0', 'Why Should You Read the Odyssey?', 'TED-Ed', '4:13',
      'Already featured — companion.'),
    V('4oKyvvQEU5o', 'The myth of Prometheus (TED-Ed)', 'TED-Ed', '4:52',
      'Hesiod\'s cosmogony illuminated.'),
    V('6vJ7QjGTvMs', 'Why is Virgil\'s Aeneid so important?', 'Kings and Generals', '22:00',
      'The Roman answer to Homer.'),
    C('https://www.edx.org/learn/humanities/harvard-university-the-ancient-greek-hero', 'Gregory Nagy — The Ancient Greek Hero (Harvard)', 'edX', 'variable',
      'Nagy\'s free Harvard course — the deepest online reading of Homer.'),
    V('RJPwbJNEyvo', 'The Epic of Gilgamesh (extended summary)', 'Overly Sarcastic Productions', '18:40',
      'Red\'s careful summary of the Standard Babylonian version.'),
  ]);
  spliceBody('epic', 0, [
    embed('gilgamesh-tablet'),
    img('British_Museum_Flood_Tablet.jpg',
      'Tablet XI — the flood tablet',
      'Tablet XI of the Standard Babylonian Epic of Gilgamesh — the flood narrative that predates the book of Genesis by more than a thousand years. British Museum, recovered at Nineveh, 1872.',
      'Wikimedia Commons · public domain'),
  ]);

  addVideos('shakespeare', [
    V('PnQ-m6IrrrA', 'Shakespeare in 10 Minutes', 'CrashCourse Literature', '10:40',
      'John Green\'s orientation episode.'),
    V('gh3oWI3dPJk', 'Why Shakespeare loved iambic pentameter', 'TED-Ed', '5:10',
      'David T. Freeman on how the meter actually works.'),
    V('gCShl4gLq2c', 'Hamlet (Crash Course Literature)', 'CrashCourse', '11:15',
      'On the play most readers encounter first.'),
    C('https://www.folger.edu/', 'Folger Shakespeare Library — full video library', 'Folger Shakespeare Library', 'variable',
      'Already referenced; includes filmed productions and actor workshops.'),
    V('uxsRB8_jgHM', 'The Sonnets (close readings)', 'Folger Shakespeare Library', 'variable',
      'Folger scholar readings of individual sonnets.'),
    V('Il_WT9DkEHo', 'Macbeth in a day (Royal Shakespeare Company)', 'RSC', 'variable',
      'RSC archive of Shakespeare in performance.'),
  ]);
  spliceBody('shakespeare', 1, [
    embed('meter'),
    img('Title_page_William_Shakespeare\'s_First_Folio_1623.jpg',
      'The First Folio, 1623',
      'The title page of Mr. William Shakespeare\'s Comedies, Histories, & Tragedies, 1623. Without this book, Hamlet and Macbeth would be rumors.',
      'Wikimedia Commons · public domain'),
  ]);

  addVideos('novel', [
    V('PmZlkSzrbTQ', 'How to Read a Novel (Mortimer Adler)', 'The Great Courses', '5:30',
      'Adler on what a novel asks of a reader.'),
    V('6XPW33b9P5s', 'Middlemarch — Crash Course', 'CrashCourse Literature', '11:33',
      'On Eliot\'s 1872 masterpiece.'),
    V('oYVvL1R8Dyg', 'One Hundred Years of Solitude', 'Crash Course Literature', '12:44',
      'On García Márquez\'s novel.'),
    V('f5qgCvBdZoE', 'The Great Gatsby — Crash Course', 'CrashCourse Literature', '11:30',
      'John Green on the most-assigned American novel.'),
    C('https://oyc.yale.edu/english/engl-291', 'Amy Hungerford — The American Novel Since 1945 (Yale)', 'Open Yale Courses', '26 x 50:00',
      'Already featured as course.'),
  ]);

  addVideos('world_lit', [
    V('V-XuaJQG_bc', 'Chinua Achebe on Things Fall Apart', 'archival', '8:00',
      'The author on his own book, in a rare recording.'),
    V('HS3Q0UCrqGM', 'Why you should read Borges', 'The School of Life', '6:55',
      'A compact introduction to the Argentine short-story master.'),
    V('JMqEcY_E_pU', 'Murakami on writing', 'Louisiana Channel', '18:00',
      'The Japanese novelist in conversation.'),
    V('g03fCKgVVkE', 'One Hundred Years of Solitude (analysis)', 'Great Art Explained / Great Books', '24:00',
      'Deep reading of García Márquez\'s novel.'),
    V('kJPVdxIhjXc', 'How to read the Mahabharata (Carole Satyamurti)', 'archival', '45:00',
      'The translator on the longest epic.'),
  ]);

  // ============================================================
  // PHILOSOPHY
  // ============================================================

  addVideos('ethics', [
    V('ZyECfV__YBc', 'The Trolley Problem (Big Think)', 'Big Think', '5:43',
      'Already featured — crisp summary.'),
    V('v8yf_ZJJGfs', 'Aristotle\'s virtue ethics', 'CrashCourse Philosophy', '9:28',
      'Hank Green on eudaimonia and habituation.'),
    V('8bIys6JoEDw', 'Kant & Categorical Imperatives', 'CrashCourse Philosophy', '10:54',
      'Hank Green on deontology.'),
    V('uBc7jvHDSyI', 'Utilitarianism', 'CrashCourse Philosophy', '10:32',
      'Hank Green on Bentham and Mill.'),
    C('https://www.edx.org/learn/ethics/harvard-university-justice', 'Michael Sandel — Justice (Harvard, full course)', 'edX', '12 x 55:00',
      'Already featured as course.'),
    V('kBdfcR-8hEY', 'Justice Lecture 1 — Sandel', 'Harvard', '55:12',
      'Already featured — first lecture.'),
  ]);
  spliceBody('ethics', 0, [ embed('trolley') ]);

  addVideos('epistemology', [
    V('9fFJRUA5ePA', 'What is knowledge? (Crash Course)', 'CrashCourse Philosophy', '10:00',
      'Hank Green on justified true belief.'),
    V('eYicZPAx1YU', 'The Gettier Problem', 'Wireless Philosophy', '5:32',
      'Animated explainer of the most influential three-page paper in modern epistemology.'),
    V('HnrlSE2BE50', 'Hume on Induction', 'Wireless Philosophy', '5:45',
      'The problem of induction in under six minutes.'),
    V('R95FYVHzsfs', 'Descartes\' Evil Demon', 'Wireless Philosophy', '4:37',
      'The skeptical thought experiment.'),
    C('https://www.coursera.org/learn/philosophy', 'Edinburgh — Introduction to Philosophy (free)', 'Coursera', 'variable',
      'Already featured.'),
  ]);
  spliceBody('epistemology', 0, [ embed('syllogism') ]);

  addVideos('metaphysics', [
    V('ts-9r1zrSUQ', 'The Ship of Theseus', 'TED-Ed', '5:33',
      'Animated companion to the widget.'),
    V('pSDZ8DG8A7g', 'Free Will vs Determinism', 'CrashCourse Philosophy', '9:26',
      'The basic positions laid out clearly.'),
    V('kILDQDL-I6I', 'Time and Personal Identity', 'Wireless Philosophy', '5:16',
      'On what makes you the same person over time.'),
    V('QqzoXQkJe7I', 'Derek Parfit on personal identity', 'archival', '20:30',
      'The late Oxford philosopher on his own thought experiments.'),
    V('CwvpoeuduqQ', 'Hume on the self', 'Philosophy Tube', '10:18',
      'Abigail Thorn on Hume\'s bundle theory.'),
  ]);
  spliceBody('metaphysics', 1, [ embed('ship-theseus') ]);

  addVideos('logic', [
    V('HeQX2HjkcNo', 'Math\'s Fundamental Flaw (Gödel)', 'Veritasium', '34:01',
      'Already featured — the best visual Gödel on YouTube.'),
    V('evbWrE4dqUE', 'How to Argue — Philosophical Reasoning', 'CrashCourse Philosophy', '10:21',
      'Already featured — validity vs soundness.'),
    V('CF4hJwkRdIk', 'Formal Logic in 30 minutes', 'Daniel Bonevac (UT Austin)', '30:00',
      'A working logician\'s fast introduction.'),
    V('gB30UOWclLI', 'Propositional Logic (full lecture)', 'Jeffrey Kaplan', '1:15:00',
      'A philosophy professor\'s full propositional-logic lecture.'),
    V('QAjGa4CPp54', 'Russell\'s paradox', 'Numberphile', '8:35',
      'The set-theoretic paradox that shaped 20th-century logic.'),
  ]);
  spliceBody('logic', 0, [ embed('syllogism') ]);

  addVideos('greeks', [
    V('HFFDB5IhNtc', 'Socrates: Founder of Western Philosophy', 'The School of Life', '6:07',
      'Compact biographical treatment.'),
    V('9EZ6yR0aySk', 'Plato (The School of Life)', 'The School of Life', '9:55',
      'On Plato\'s life and thought.'),
    V('MWWrnGeAUHo', 'Aristotle (The School of Life)', 'The School of Life', '8:24',
      'Companion to the Plato episode.'),
    V('DL_Cfcn5iy8', 'Plato\'s Allegory of the Cave', 'TED-Ed', '3:09',
      'Already referenced.'),
    C('https://oyc.yale.edu/classics/clcv-205', 'Donald Kagan — Intro to Ancient Greek History', 'Open Yale Courses', '24 x 50:00',
      'Already featured — political context.'),
  ]);

  addVideos('eastern', [
    V('NYmqdCW_SqM', 'Confucius (The School of Life)', 'The School of Life', '6:06',
      'Short biographical overview.'),
    V('vRCBo_QaCUk', 'Laozi (The School of Life)', 'The School of Life', '5:20',
      'On the Daodejing.'),
    V('8hP9D3GlTjY', 'The Buddha (The School of Life)', 'The School of Life', '5:03',
      'The life and teachings in five minutes.'),
    V('DJDtXvwpFMo', 'What did Confucius teach? (TED-Ed)', 'TED-Ed', '4:50',
      'Bryan Van Norden\'s animation.'),
    V('1X9tabSR2C8', 'Zen Buddhism (BBC documentary)', 'BBC', '58:00',
      'The Japanese Zen tradition in context.'),
  ]);

  addVideos('modern_phil', [
    V('TMZrp0rh2-U', 'Descartes and the Discourse on Method', 'The School of Life', '7:02',
      'Short treatment of the founding modern philosopher.'),
    V('Qzhgs6N8dv0', 'Hume (The School of Life)', 'The School of Life', '6:21',
      'The radical empiricist.'),
    V('nsgAsw4XGvU', 'Kant (The School of Life)', 'The School of Life', '10:08',
      'The Critique in ten minutes.'),
    V('xwOCmJevigw', 'Spinoza (The School of Life)', 'The School of Life', '6:15',
      'The excommunicated Jewish-Dutch rationalist.'),
    C('https://oyc.yale.edu/philosophy/phil-176', 'Shelly Kagan — Death (Yale)', 'Open Yale Courses', '26 x 50:00',
      'Already referenced — deep engagement with modern philosophy on identity and mortality.'),
  ]);

  // ============================================================
  // RELIGION
  // ============================================================

  addVideos('abrahamic', [
    V('sWj0rgKJTeY', 'Why do people follow religion?', 'Kurzgesagt / Academy', '10:00',
      'Cognitive and social science on why religion recurs.'),
    C('https://oyc.yale.edu/religious-studies/rlst-145', 'Christine Hayes — Intro to Old Testament (Yale)', 'Open Yale Courses', '24 x 50:00',
      'Already featured as course.'),
    C('https://oyc.yale.edu/religious-studies/rlst-152', 'Dale Martin — Intro to New Testament (Yale)', 'Open Yale Courses', '26 x 50:00',
      'Already featured as course.'),
    V('xfZeqT-T0PY', 'The History of the Quran', 'Religion for Breakfast', '14:00',
      'Scholarly treatment of the text\'s compilation.'),
    V('bk3KHDZTATI', 'The Origins of Judaism', 'Religion for Breakfast', '12:00',
      'Academic survey of the tradition\'s formation.'),
  ]);
  spliceBody('abrahamic', 0, [ embed('religions') ]);

  addVideos('dharmic', [
    V('GQ35d2y5dsw', 'What is Hinduism?', 'Religion for Breakfast', '12:30',
      'Andrew Henry with a careful survey.'),
    V('rpM2sVyH81Q', 'Buddhism 101', 'Let\'s Talk Religion', '28:38',
      'Already featured — thirty-minute introduction.'),
    V('K_gK7cWPzwA', 'What is Sikhism?', 'Religion for Breakfast', '10:00',
      'Andrew Henry on the tradition founded by Guru Nanak.'),
    V('IXrCPnEAqCE', 'The Bhagavad Gita in 10 minutes', 'Crash Course Mythology', '10:00',
      'John Green on the Gita\'s eighteen chapters.'),
    C('https://www.edx.org/learn/buddhism/harvard-university-buddhism-through-its-scriptures', 'Charles Hallisey — Buddhism Through Its Scriptures (Harvard)', 'edX', 'variable',
      'Already featured as course.'),
  ]);
  spliceBody('dharmic', 0, [ embed('religions') ]);

  addVideos('myth', [
    V('NJDZ6WbHn-w', 'Why Should You Read Greek Myth?', 'TED-Ed', '5:48',
      'Orientation to the Greek pantheon.'),
    C('https://www.youtube.com/@OverlySarcasticProductions', 'Overly Sarcastic Productions — Miscellaneous Myths', 'Overly Sarcastic Productions', 'variable',
      'Already featured as channel.'),
    V('Kj0F8MQd3CI', 'The Norse creation myth', 'TED-Ed', '4:50',
      'The story of Ginnungagap, Ymir, and the sons of Borr.'),
    V('hpXr6yAXSUQ', 'Why do we still read the Odyssey?', 'TED-Ed', '4:13',
      'Tangentially relevant; covers myth-as-narrative.'),
    V('wsfR3n_6pNA', 'African mythology — an introduction', 'BBC', '22:00',
      'The less-covered traditions, brought into the frame.'),
  ]);

  // ============================================================
  // ARCHITECTURE
  // ============================================================

  addVideos('arch_history', [
    V('EOdcM0P_ckM', 'A Brief History of Architecture', 'PBS / The Art Assignment', '10:00',
      'A ten-minute visual sweep.'),
    V('m7YNZYdSPmg', 'How the Parthenon was built', 'National Geographic', '3:00',
      'Short animation of Ictinus and Callicrates\' site logistics.'),
    C('https://www.youtube.com/@smarthistoryvideos', 'Smarthistory — Architecture playlists', 'Smarthistory', 'variable',
      'Already featured.'),
    V('nvoigXobVo4', 'Frank Lloyd Wright: Fallingwater', 'The Art Assignment', '8:15',
      'On the most famous American house.'),
    V('Xz5EIc6UV-s', 'Mies van der Rohe and the Barcelona Pavilion', 'Smarthistory', '5:10',
      'The German modernist at his most influential.'),
  ]);
  spliceBody('arch_history', 0, [
    embed('dome'),
    img('Florence_Duomo.jpg',
      'Brunelleschi\'s dome',
      'Brunelleschi\'s double-shell dome over Santa Maria del Fiore, 1420–1436 — the largest masonry dome ever built and the symbolic opening of the Renaissance.',
      'Wikimedia Commons · CC BY-SA'),
  ]);

  addVideos('structural', [
    V('2HDXcxYHtjQ', 'How Skyscrapers Stand Up', 'The B1M', '8:30',
      'The engineering of tall buildings.'),
    V('LhU1YaYf8NQ', 'Why the Tacoma Narrows Bridge Collapsed', 'Practical Engineering', '11:36',
      'The classic aeroelastic flutter failure of 1940.'),
    V('pKxzoH8d1EE', 'The Crystal Palace and the Birth of Modern Architecture', 'The B1M', '12:00',
      'On Paxton\'s 1851 iron-and-glass building.'),
    V('YKhzZkPQLWY', 'How Do Domes Work?', 'Practical Engineering', '12:00',
      'Grady Hillhouse on the physics of the Pantheon-to-Millennium-Dome lineage.'),
    V('sDn0WA_Tvsw', 'Reinforced concrete — invention and use', 'Practical Engineering', '14:00',
      'On the material that made the twentieth century possible.'),
  ]);
  spliceBody('structural', 1, [ embed('arch-compare') ]);

  addVideos('urban_design', [
    V('oCJXxrE3Lqc', 'How Paris Was Destroyed and Rebuilt — Haussmann', 'Vox', '8:30',
      'The nineteenth-century redesign that shaped every subsequent capital.'),
    C('https://www.youtube.com/@NotJustBikes', 'Not Just Bikes — urbanism case studies', 'Not Just Bikes', 'variable',
      'Already featured.'),
    V('pS9UnZDwvMY', 'Why New York\'s Grid System Works', 'Vox', '7:40',
      'On the 1811 Commissioners\' Plan and why it is not boring.'),
    V('0p8HLjRQy4o', 'Jane Jacobs vs Robert Moses', 'Treehugger', '15:00',
      'The defining American urbanism argument.'),
    V('yIBdILJu9cs', 'Brasília at 60 — the modernist capital', 'DW Documentary', '28:00',
      'The planned city that Niemeyer built from zero.'),
  ]);
  spliceBody('urban_design', 1, [ embed('grid-plan') ]);

  // ============================================================
  // ART
  // ============================================================

  addVideos('cave_to_cath', [
    V('E-DLuIaRgUU', 'How to Read Cave Paintings (Smithsonian)', 'Smithsonian Channel', '10:00',
      'What the marks actually mean.'),
    V('3X5J1TrQAsc', 'Giotto — Scrovegni Chapel walkthrough', 'Smarthistory', '12:00',
      'The frescoes that opened the Renaissance.'),
    V('AcLiy7xd8mQ', 'Byzantine mosaics at Ravenna', 'Smarthistory', '7:14',
      'The Eastern Roman aesthetic in its richest surviving form.'),
    V('tJaqvfHpXPU', 'A brief history of Islamic art', 'The Art Assignment', '13:00',
      'The non-Western strand of the story.'),
    V('zFtCzg3i22o', 'The Bayeux Tapestry', 'Smarthistory', '10:00',
      'The narrative embroidery of the Norman Conquest.'),
  ]);

  addVideos('renart', [
    C('https://www.youtube.com/@smarthistoryvideos', 'Smarthistory — Italian Renaissance playlist', 'Smarthistory', 'variable',
      'Already referenced.'),
    V('8h0PO3zZ_MI', 'Masaccio\'s Tribute Money', 'Smarthistory', '6:30',
      'The first major perspectival fresco, c. 1427.'),
    V('6Rnl5SMnJVs', 'Leonardo\'s Last Supper', 'Great Art Explained', '16:40',
      'A close video reading of the most-copied painting in Western art.'),
    V('PQjmJYDL3XE', 'Michelangelo\'s David', 'Smarthistory', '8:30',
      'The sculpture that defined the High Renaissance.'),
    V('62rr3lzN8x4', 'The Arnolfini Portrait (van Eyck)', 'Smarthistory', '7:40',
      'The Northern Renaissance masterpiece with every wood grain painted.'),
  ]);
  spliceBody('renart', 0, [
    embed('perspective'),
    img('Masaccio_007.jpg',
      'Masaccio, The Tribute Money (c. 1427)',
      'Masaccio\'s fresco in the Brancacci Chapel, Florence. Often cited as the first major painting to use Brunelleschi\'s linear perspective.',
      'Wikimedia Commons · public domain'),
  ]);

  addVideos('modern_art', [
    V('KTy8ahOFrvE', 'Manet, Olympia', 'Smarthistory', '7:12',
      'The painting that scandalized the 1865 Salon.'),
    V('eX1pLkWkyaU', 'Cézanne\'s apples', 'Smarthistory', '6:08',
      'Why Cézanne is the hinge between nineteenth and twentieth century painting.'),
    V('1Xu6XpK5zXM', 'Picasso\'s Les Demoiselles d\'Avignon', 'Great Art Explained', '15:30',
      'The 1907 painting that launched Cubism.'),
    V('3VSs-IB1Aq0', 'Rothko and the silent picture', 'The Art Assignment', '9:45',
      'On why the color-field paintings are not decorative.'),
    C('https://www.coursera.org/learn/modern-art-ideas', 'MoMA — Modern Art & Ideas (free course)', 'Coursera', 'variable',
      'Already featured.'),
  ]);

  addVideos('drawing', [
    V('W9Q-AYO-tU8', 'Draw a Perfect Circle — Proko', 'Proko', '7:00',
      'Proko on the foundational skill every drawing class starts with.'),
    V('CMBmtmvU5c0', 'The Anatomy of a Portrait', 'Proko', '15:00',
      'Proko teaching proportion.'),
    V('4SIxQA0nRqk', 'Paul Cézanne\'s drawing method', 'Smarthistory', '7:00',
      'How Cézanne used drawing to think.'),
    V('qJ5UBBXlWTs', 'Gesture Drawing (Proko)', 'Proko', '20:00',
      'Long-form lesson on the foundational drawing exercise.'),
    V('n6F5NP6pnrQ', 'Life Drawing — Dorian Iten', 'Dorian Iten', '40:00',
      'A working figure-draftsman\'s full demonstration.'),
  ]);

  addVideos('color', [
    V('AAkeWBs4lSI', 'A Brief History of Color in Art', 'The Art Assignment', '9:47',
      'Already featured.'),
    V('8rLqa3pd0dA', 'Interaction of Color — Albers exercises', 'Yale University Art Gallery', '12:00',
      'Scholars on Albers\'s actual exercise book.'),
    V('w6c9O8TfGIE', 'Why Van Gogh\'s yellows are fading', 'Vox', '6:00',
      'The chemistry of chrome yellow.'),
    V('Z55fPdCbANA', 'James Gurney on Color and Light', 'James Gurney', '18:00',
      'The working illustrator\'s summary of his own book.'),
    V('AHXTRvu3kDY', 'Why Does Ultramarine Matter?', 'Vox', '5:15',
      'On the pigment that cost more than gold in the Renaissance.'),
  ]);
  spliceBody('color', 1, [ embed('color-wheel') ]);

  addVideos('composition', [
    V('6NTiV5_hFfM', 'Composition in Art (Tony Zhou)', 'Every Frame a Painting', '10:00',
      'A working film editor on visual composition.'),
    V('4OT6Zk-1YkU', 'The Rule of Thirds', 'The Art of Photography', '9:15',
      'Why it works and when to break it.'),
    V('ICoyFE2_yRY', 'Leading Lines in photography and painting', 'PHLEARN', '8:00',
      'A compositional technique usable in any medium.'),
    V('WEiHaiqu_8U', 'How to Compose a Shot — Every Frame a Painting', 'Every Frame a Painting', '5:20',
      'Tony Zhou on the mechanics.'),
    V('6tWX-w-KYpM', 'Vermeer\'s geometry', 'Nerdwriter1', '9:12',
      'A deep close reading of Vermeer\'s compositional precision.'),
  ]);
  spliceBody('composition', 1, [ embed('rule-thirds') ]);

  addVideos('design', [
    V('UuP5Udh8YRY', 'The Design of Everyday Things (Don Norman)', 'archival', '20:00',
      'Norman\'s own talk on the book\'s core argument.'),
    V('TZQ6L0T2WzM', 'Dieter Rams: Less But Better', 'Gary Hustwit / archival', '8:00',
      'Rams\'s own ten principles in his words.'),
    V('uyEL9qk7R74', 'Helvetica (documentary excerpt)', 'Gary Hustwit', '12:00',
      'On the typeface that rewired the 20th century.'),
    V('NNuTV-gjlZQ', 'Swiss Design Principles', 'The Futur', '15:00',
      'The grid systems of Müller-Brockmann in practice.'),
    V('Pz-34bZhr7g', 'The New York Subway Map', 'Vox', '8:40',
      'Massimo Vignelli\'s 1972 design icon.'),
  ]);

  // ============================================================
  // MUSIC
  // ============================================================

  addVideos('notation', [
    V('F8wVFTG8L_E', 'How to Read Music (TED-Ed)', 'TED-Ed', '4:41',
      'Already featured.'),
    V('TtDNAQyMpXQ', 'Music Theory in 20 Minutes', 'Andrew Huang', '20:00',
      'A working producer\'s crash course.'),
    V('1egHOyz7tMs', 'What does a conductor actually do?', 'Vox', '10:10',
      'On the bridge between the score and the performance.'),
    C('https://www.coursera.org/learn/edinburgh-music-theory', 'Fundamentals of Music Theory — Edinburgh (free)', 'Coursera', 'variable',
      'Already featured.'),
    V('Te3grjp5KnA', 'Rhythm Notation (Signals Music Studio)', 'Signals Music Studio', '12:00',
      'The hardest half of notation, slowly.'),
  ]);
  spliceBody('notation', 0, [ embed('chord-builder') ]);

  addVideos('harmony', [
    V('nK2jYk37Rlg', 'The 4 Chords That Work Every Time', '12tone', '7:05',
      'The I–V–vi–IV progression, explained.'),
    V('Nt1uxBNDAfs', 'Every chord in under 14 minutes', 'Adam Neely', '14:00',
      'A bassist\'s compressed music-theory lesson.'),
    V('6yzqI2OfN9k', 'Why do we hear some chord progressions as "sad"?', 'Vox', '8:35',
      'Cognitive musicology on major vs minor.'),
    V('i_0DXxNeaQ0', 'Pachelbel\'s Canon and the Most Overused Progression', '12tone', '9:00',
      'On the I–V–vi–iii chord sequence that is almost everywhere.'),
    V('vXqAeGHxEvU', 'Chord Inversions (Michael New)', 'Michael New', '10:00',
      'On voicing and bass-note choice.'),
  ]);
  spliceBody('harmony', 1, [ embed('fifths') ]);

  addVideos('counterpoint', [
    V('yv6XdUfWrbc', 'What is Counterpoint?', 'Inside the Score', '9:04',
      'Already featured.'),
    V('ZSn7JypN5Gg', 'Bach: The Art of Fugue (analysis)', 'Inside the Score', '20:00',
      'On the unfinished summit of the discipline.'),
    V('tjVNpVfj3yk', 'Species Counterpoint (explained)', 'Jacob Gran', '14:00',
      'A working theorist\'s careful walk through the five species.'),
    V('Wsj0a9THj_s', 'The Well-Tempered Clavier, Prelude 1 analysis', '12tone', '9:30',
      'Close reading of the opening prelude.'),
    V('VdzDMH_C5H4', 'Glenn Gould plays the Goldberg Variations', 'archival', 'variable',
      'The famous 1955 recording, landmark counterpoint in performance.'),
  ]);
  spliceBody('counterpoint', 1, [ embed('fugue') ]);

  addVideos('classical', [
    V('dQbSvLxv3oQ', 'The Music of the Baroque', 'Inside the Score', '22:30',
      'Orientation to the era.'),
    V('4EcZsfLT3oI', 'What makes Beethoven Beethoven?', 'Inside the Score', '23:00',
      'Analysis of the Fifth Symphony\'s first movement.'),
    V('i1jW-Y4Sdrk', 'The Rite of Spring riot (1913)', 'Polyphonic', '10:00',
      'The premiere that launched musical modernism.'),
    V('M73xZyM05nI', 'Mahler\'s Resurrection Symphony', 'Inside the Score', '18:00',
      'The Second, in detail.'),
    C('https://www.coursera.org/learn/introclassicalmusic', 'Craig Wright — Introduction to Classical Music (Yale)', 'Coursera', 'variable',
      'Already featured as course.'),
    V('3SQvGfZI6kA', 'Shostakovich 7 — the Leningrad Symphony', 'Radio 3', '15:00',
      'The siege of Leningrad in orchestral form.'),
  ]);
  spliceBody('classical', 1, [ embed('sonata-form') ]);

  addVideos('jazz', [
    V('tJl4MOR2AjI', 'How to Listen to Jazz', 'Open Culture / Wynton Marsalis', '20:00',
      'Wynton Marsalis\'s famous primer.'),
    V('D8kJ8zmQz60', 'Kind of Blue — Miles Davis (analysis)', 'Polyphonic', '16:00',
      'On the most popular jazz album ever made.'),
    V('rOr3EsQtc-c', 'A Love Supreme — Coltrane', 'Polyphonic', '14:30',
      'On the spiritual and harmonic summit of Coltrane\'s career.'),
    V('BxA5vw_3FHo', 'The Blues Scale', 'Adam Neely', '12:00',
      'A working bassist on how the blues actually works.'),
    C('https://www.coursera.org/learn/jazz-improvisation', 'Gary Burton — Jazz Improvisation (Berklee)', 'Coursera', 'variable',
      'Already featured as course.'),
  ]);

  addVideos('popular', [
    V('oBGftvyxJpM', 'How Pop Music\'s Chord Progressions Work', 'Vox', '7:30',
      'The famous Axis-of-Awesome four chords.'),
    V('o8oKsv2Qj-4', 'Auto-Tune and the sound of contemporary pop', 'Vox', '9:15',
      'What changed in pop production after 1998.'),
    V('DMW9HYIDeMU', 'The genius of Stevie Wonder\'s chords', 'Adam Neely', '13:00',
      'Harmonic analysis of a 1970s classic.'),
    V('eyiIKbyBdSk', 'The rise of TikTok pop', 'Polyphonic', '14:00',
      'How the platform shapes songwriting.'),
    V('PbTbSuGu1eA', 'The Motown Sound', 'Polyphonic', '12:00',
      'On Berry Gordy\'s hit factory.'),
  ]);

  console.log('[supergravity] b04-enhance: inline interactives + image blocks spliced; extended video shelves added.');
})();
