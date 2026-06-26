// content/music.js
// Batch: B04-humanities
// Last updated: 2026-04-22 by BATCH B04-humanities

window.CONTENT = window.CONTENT || {};
window.CONTENT.music = {
  subjectId: 'music',
  version: 1,
  lastUpdated: '2026-04-22',
  curator: 'BATCH B04-humanities',
  topics: {

    notation: {
      id: 'notation',
      name: 'Reading Music',
      level: 'Beginner',
      dek: 'How squiggles on a five-line staff tell a trained musician exactly which notes to play and when.',
      readTime: '11 min',

      sections: ['Why notation matters', 'The staff and the clef', 'Rhythm', 'What notation leaves out'],
      body: [
        { type: 'lead', text: 'Around 1000 CE, a Benedictine monk named Guido of Arezzo, tired of teaching his choir boys the plainsong repertory note by note, devised a system of horizontal lines with specific pitches assigned to them. The monks could sight-read. The system spread. A thousand years later, a violinist in Tokyo and a cellist in Berlin can agree on what to play from the same sheet of paper. That is Guido\'s single invention, evolved.' },
        { type: 'h2', text: 'What notation is for' },
        { type: 'p', text: 'Musical notation is a storage technology. Before it, music had to pass from mouth to ear and ear to mouth; long pieces could survive only if someone alive remembered them. With notation, a Mass by Palestrina written in 1570 can be sung accurately by a choir five centuries later. Notation is not the music itself — music lives in performance — but it is an astonishingly reliable recipe.' },
        { type: 'h2', text: 'The staff, the clef, the notes' },
        { type: 'p', text: 'The modern staff is five horizontal lines on which notes are placed. A clef — the decorative symbol at the left — tells you which specific pitch each line represents. The treble clef (G clef) locks middle line 2 to G above middle C; the bass clef (F clef) locks the second-from-top line to F below middle C. Between the two, a pianist reads two staves at once, one for each hand. Ledger lines extend the staff upward or downward for very high or very low notes. Sharps (♯) and flats (♭) raise or lower a pitch by a semitone; naturals (♮) cancel either.' },
        { type: 'h2', text: 'Rhythm, the harder half' },
        { type: 'p', text: 'Pitch notation is relatively easy. Rhythm is harder. Notes come in durations — whole, half, quarter, eighth, sixteenth — shown by the note\'s shape and any flags or beams. A time signature at the start of the piece tells you how many beats per measure and what note value gets the beat. Rests — silences — have their own durations and symbols. A beginner learns the pitches in a week and then spends two years actually feeling where the beats fall.' },
        { type: 'h2', text: 'What notation cannot tell you' },
        { type: 'p', text: 'The page gives you pitches and rhythms. It cannot fully give you what musicians call interpretation: the exact shaping of a phrase, the subtle rubato that pulls a tempo forward and back, the specific timbre of a particular cellist\'s bow on the string. Those come from tradition, from listening, from having had a teacher. Two great violinists can play the same Brahms score and produce two different pieces of music. The notation is a map, not the territory.' },
        { type: 'callout', text: 'Not all music uses Western staff notation. Indian classical music uses sargam; jazz often uses lead sheets with chord symbols; lute and guitar have tablature; many global traditions are oral. Western notation is the most precise system ever invented, but it is not universal.' },
      ],

      keyTerms: ['staff', 'clef', 'sharp', 'flat', 'time signature', 'key signature', 'rest', 'measure'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@Musictheory',
            title: 'musictheory.net — channel and site',
            channel: 'musictheory.net',
            duration: 'variable',
            why: 'Ricci Adams\'s free lessons on staff notation, clefs, rhythm, and intervals. Visual, interactive, and free; the standard first resource.',
          },
          {
            id: 'SHdRt9-iZQE',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=SHdRt9-iZQE',
            title: 'How to read music — notation basics',
            channel: 'Tim Hansen (Sydney Conservatorium)',
            duration: 'variable',
            why: 'A classical composer\'s patient four-part introduction to reading notation from scratch.',
          },
          {
            id: 'F8wVFTG8L_E',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=F8wVFTG8L_E',
            title: 'How to Read Music (Tim Hansen, TED-Ed)',
            channel: 'TED-Ed',
            duration: '4:41',
            why: 'Five minutes; covers staff, clef, and rhythm in a single animated pass. Use first.',
          },
        ],
        books: [
          {
            title: 'Alfred\'s Essentials of Music Theory',
            author: 'Andrew Surmani, Karen Farnum Surmani, and Morton Manus',
            year: 1998,
            url: '',
            why: 'The most widely used beginner workbook in American music schools. A three-volume series that takes a reader from scratch to fluency.',
          },
          {
            title: 'Edly\'s Music Theory for Practical People',
            author: 'Ed Roseman',
            year: 1996,
            url: '',
            why: 'A cartoonist-musician\'s funny, genuinely good introduction. Excellent for adult self-study.',
          },
          {
            title: 'The Study of Counterpoint (Gradus ad Parnassum)',
            author: 'Johann Joseph Fux',
            year: 1725,
            url: 'https://archive.org/details/studyofcounterpo00fuxj',
            why: 'The classic beginning-to-advanced treatise, the book Haydn and Mozart both studied. Use Alfred\'s first; come back to Fux after.',
          },
        ],
        articles: [
          {
            title: 'Musical notation',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Musical_notation',
            why: 'Long, well-illustrated survey across cultures and centuries.',
            year: null,
          },
          {
            title: 'Music theory',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Music_theory',
            why: 'Overview of the broader discipline notation fits into.',
            year: null,
          },
          {
            title: 'Guido d\'Arezzo',
            source: 'Britannica',
            url: 'https://www.britannica.com/biography/Guido-dArezzo',
            why: 'Short biographical entry on the eleventh-century monk who invented the system we still use.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Musicianship: Tonal Harmony',
            provider: 'Coursera (Berklee College of Music)',
            url: 'https://www.coursera.org/specializations/tonal-harmony',
            free: true,
            why: 'Berklee\'s free specialization begins with staff notation and basic theory; audit option for the full series.',
          },
          {
            title: 'Fundamentals of Music Theory',
            provider: 'Coursera (University of Edinburgh)',
            url: 'https://www.coursera.org/learn/edinburgh-music-theory',
            free: true,
            why: 'Edinburgh\'s free music theory course. A rigorous academic introduction.',
          },
        ],
        tools: [
          {
            title: 'musictheory.net — Trainers',
            url: 'https://www.musictheory.net/exercises',
            why: 'Free drills on note-naming, key signatures, intervals, chords. The single most useful practice site for beginners.',
          },
          {
            title: 'MuseScore',
            url: 'https://musescore.org/',
            why: 'Free, open-source music-notation software. Compose in staff notation; export audio. The standard free tool.',
          },
        ],
      },

      seeAlso: ['harmony', 'counterpoint', 'classical'],
      prereqs: [],
      leadsTo: ['harmony', 'counterpoint'],

      chapterActivity: 'Weekly Saturday morning music-reading group at the New York Public Library for the Performing Arts at Lincoln Center — scores provided, piano available, all levels welcome.',

      sources: [
        'https://en.wikipedia.org/wiki/Musical_notation',
        'https://en.wikipedia.org/wiki/Music_theory',
        'https://www.britannica.com/biography/Guido-dArezzo',
      ],
      verifiedAt: '2026-04-22',
    },

    harmony: {
      id: 'harmony',
      name: 'Harmony',
      level: 'Intermediate',
      dek: 'The study of what happens when notes sound together — chords, cadences, and the gravitational pull of the tonic.',
      readTime: '12 min',

      sections: ['Intervals, the atoms', 'Chords built in thirds', 'Keys and the tonic', 'Voice leading and cadences'],
      body: [
        { type: 'lead', text: 'When you sing "Happy Birthday" for the last time, the final syllable lands on a specific note. If the pianist played any other note under it, you would wince. Something in Western music makes some notes feel like arrivals and others feel like departures. That pull — the reason the last chord of a Beethoven symphony feels like home — is the subject harmony tries to explain.' },
        { type: 'h2', text: 'Intervals: the building blocks' },
        { type: 'p', text: 'An interval is the distance between two notes. A minor second is the closest neighbor (the shift from one piano key to the next); an octave is eight notes up and sounds like a higher version of the same pitch. Intervals are either consonant (they sound restful together — thirds, fifths, octaves) or dissonant (they sound active — seconds, sevenths, tritones). This is not only a cultural convention: the frequencies of consonant intervals are related by simple whole-number ratios, which is why Pythagoras noticed them around 500 BCE.' },
        { type: 'h2', text: 'Chords' },
        { type: 'p', text: 'Most Western chords are built by stacking thirds. A triad — three notes — has a root, a third, and a fifth. A major chord has a major third on the bottom and a minor third on top; a minor chord has the opposite. Add a seventh on top and you have a seventh chord; add a ninth and you have a ninth. Chords are named by their root — "C major" starts on C — and can be inverted by moving the bottom note up an octave. A jazz musician thinking in chords and a classical analyst thinking in figured bass are using the same building blocks with different notation.' },
        { type: 'h2', text: 'Keys and the tonic' },
        { type: 'p', text: 'A piece in a key — C major, for instance — is in a gravitational field around one note, the tonic. The other six notes of the scale each have a characteristic function: the fifth (G, in C major) is the dominant, which wants to resolve to the tonic; the fourth (F) is the subdominant, which wants to move toward the dominant. The three chords built on those notes — I, IV, V — are the pillars of Western harmony. Almost every pop song, almost every Baroque sequence, almost every church hymn uses some rearrangement of those three.' },
        { type: 'h2', text: 'Voice leading and cadences' },
        { type: 'p', text: 'Good harmony is not a list of chords but a choreography of voices. Each voice — soprano, alto, tenor, bass — moves in specific ways from one chord to the next, ideally by the smallest possible interval. A cadence is the closing formula of a phrase: the authentic cadence (V–I) is the most final; the plagal cadence (IV–I, the "amen" of a hymn) is gentler; the deceptive cadence (V–vi) postpones resolution. A composition teacher is, among other things, a voice-leading teacher; beginners almost always make parallel fifths and get corrected.' },
        { type: 'quote', text: 'Harmony, in its widest sense, is the relation of all parts of a musical composition to each other.', cite: 'Heinrich Schenker, Harmonielehre, 1906' },
      ],

      keyTerms: ['triad', 'seventh chord', 'tonic', 'dominant', 'cadence', 'consonance', 'dissonance', 'modulation'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@12tone',
            title: '12tone (channel)',
            channel: '12tone',
            duration: 'variable',
            why: 'Cory Arnold\'s hand-drawn music-theory channel — close readings of pop, classical, and jazz harmony. One of the best music-theory channels on YouTube.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@AdamNeely',
            title: 'Adam Neely (channel)',
            channel: 'Adam Neely',
            duration: 'variable',
            why: 'A working bassist with a graduate music degree. Neely\'s "Q+A" videos answer genuinely hard harmony questions with rigor and wit.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@8-bitMusicTheory',
            title: '8-bit Music Theory',
            channel: '8-bit Music Theory',
            duration: 'variable',
            why: 'Harmony analysis applied to video game soundtracks — an unusually rigorous channel that teaches real harmonic concepts through music almost everyone already knows.',
          },
        ],
        books: [
          {
            title: 'Tonal Harmony',
            author: 'Stefan Kostka, Dorothy Payne, and Byron Almén',
            year: 1984,
            url: '',
            why: 'The standard American university textbook on tonal harmony. Dense, comprehensive, the book most music-theory curricula use.',
          },
          {
            title: 'The Jazz Theory Book',
            author: 'Mark Levine',
            year: 1995,
            url: '',
            why: 'The standard reference on jazz harmony — chord extensions, substitutions, modal practice. Used in every major jazz program.',
          },
          {
            title: 'How to Listen to and Understand Great Music',
            author: 'Robert Greenberg',
            year: 2012,
            url: '',
            why: 'A working composer and teacher\'s guide for listeners. Pairs with the Great Courses lecture series.',
          },
        ],
        articles: [
          {
            title: 'Harmony',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Harmony',
            why: 'Comprehensive survey of the concept across eras and cultures.',
            year: null,
          },
          {
            title: 'Chord progression',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Chord_progression',
            why: 'Article with linked audio examples of the standard chord progressions in Western music.',
            year: null,
          },
          {
            title: 'musictheory.net — Lessons',
            source: 'musictheory.net',
            url: 'https://www.musictheory.net/lessons',
            why: 'The "Chords" and "Harmony" lessons at musictheory.net are the clearest free online introduction to tonal harmony.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Fundamentals of Music Theory',
            provider: 'Coursera (University of Edinburgh)',
            url: 'https://www.coursera.org/learn/edinburgh-music-theory',
            free: true,
            why: 'Edinburgh\'s free course covers intervals, chords, and functional harmony in a structured six-week arc.',
          },
          {
            title: 'Music Theory (MIT OCW)',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/21m-301-harmony-and-counterpoint-i-spring-2005/',
            free: true,
            why: 'MIT\'s free undergraduate harmony course. Lectures, readings, problem sets.',
          },
        ],
        tools: [
          {
            title: 'Chord Identifier (musictheory.net)',
            url: 'https://www.musictheory.net/exercises/chord',
            why: 'Free drill on chord identification in any key. Do this daily for two months; the skill sticks.',
          },
        ],
      },

      seeAlso: ['notation', 'counterpoint', 'classical', 'jazz'],
      prereqs: ['notation'],
      leadsTo: ['counterpoint'],

      chapterActivity: 'A monthly evening at the NYPL for the Performing Arts — score-reading sessions of Bach chorales followed by a sing-through, piano provided.',

      sources: [
        'https://en.wikipedia.org/wiki/Harmony',
        'https://en.wikipedia.org/wiki/Chord_progression',
        'https://www.musictheory.net/lessons',
      ],
      verifiedAt: '2026-04-22',
    },

    counterpoint: {
      id: 'counterpoint',
      name: 'Counterpoint',
      level: 'Advanced',
      dek: 'Two or more melodic lines sounding at once, each with a life of its own, woven so that they still agree.',
      readTime: '12 min',

      sections: ['What counterpoint means', 'Species counterpoint and the rules', 'Bach, the summit', 'Counterpoint in jazz and elsewhere'],
      body: [
        { type: 'lead', text: 'In a church at Weimar, in the early 1700s, Johann Sebastian Bach, not yet thirty, sat at a keyboard and improvised fugues for two, three, and four voices — four independent melodic lines interweaving without running into each other. Witnesses left astonished accounts. When Bach was old, Frederick the Great of Prussia gave him a theme and asked him to improvise a six-voice fugue on it; Bach declined the six-voice version and later wrote it down as a study, in The Musical Offering. Counterpoint is the discipline that makes those moments possible.' },
        { type: 'h2', text: 'What counterpoint is' },
        { type: 'p', text: 'Counterpoint — from the Latin punctus contra punctum, "point against point" — is the art of combining two or more melodic lines so that each is interesting on its own and they sound good together. Harmony and counterpoint are not opposites: harmony looks at vertical relationships (what notes stack together as chords), counterpoint looks at horizontal ones (what each voice is doing across time). A single Bach chorale, four voices thick, is simultaneously a harmonic study and a contrapuntal one.' },
        { type: 'h2', text: 'Species counterpoint, the method' },
        { type: 'p', text: 'The training method still used by composition departments comes from Johann Joseph Fux\'s 1725 treatise Gradus ad Parnassum. Fux organized counterpoint into five "species": first species is note against note (the simplest); second species is two notes against one; third is four against one; fourth introduces suspensions; fifth combines all the rhythmic varieties. Each species has rules — avoid parallel fifths and octaves, prepare and resolve dissonances, move predominantly by step — that look arbitrary until you internalize them, at which point they turn out to be very nearly the physics of hearing several lines at once.' },
        { type: 'h2', text: 'Bach and the Baroque peak' },
        { type: 'p', text: 'Bach\'s Art of Fugue (Die Kunst der Fuge, completed around 1750) is fourteen fugues and four canons on a single theme, transforming it in every possible way. The Well-Tempered Clavier is two books of preludes and fugues, one in each of twenty-four keys. The chorales, in collections like the 371 Four-Part Chorales, are textbooks in disguise. Every counterpoint student eventually works through Bach; the shortcut does not exist. No one since has matched his gift for making four independent lines sound inevitable.' },
        { type: 'h2', text: 'Counterpoint after Bach' },
        { type: 'p', text: 'Mozart, Beethoven, Brahms, Mendelssohn, Stravinsky, Hindemith — the discipline never actually went away. It shows up in jazz, where Bill Evans and John Coltrane both worked out contrapuntal ideas inside their harmonic language; it shows up in bebop head arrangements, in the contrapuntal voicings of Steely Dan, in the layered production of Brian Wilson\'s Pet Sounds. Any time two melodic lines interest you at once — the bass line under Dolly Parton\'s "Jolene," the orchestral part under a Sondheim song — you are hearing counterpoint doing its quiet work.' },
        { type: 'callout', text: 'Fux wrote Gradus ad Parnassum in Latin as a dialogue. Mozart owned a copy; Haydn owned a copy; Beethoven was taught from it by Haydn. Its recipe has now trained nine generations of composers, which is a record no other music-theory textbook can match.' },
      ],

      keyTerms: ['species counterpoint', 'cantus firmus', 'fugue', 'canon', 'imitation', 'suspension', 'voice leading', 'inversion'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@earlymusicsources',
            title: 'Early Music Sources (channel)',
            channel: 'Early Music Sources (Elam Rotem)',
            duration: 'variable',
            why: 'A working early-music performer\'s rigorous series on Renaissance and Baroque counterpoint. The video on Palestrina-style counterpoint is especially good.',
          },
          {
            id: 'yv6XdUfWrbc',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=yv6XdUfWrbc',
            title: 'What is Counterpoint?',
            channel: 'Inside the Score',
            duration: '9:04',
            why: 'A clear short introduction to the discipline, with Bach excerpts illustrated.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@tobyrushmusic',
            title: 'Toby Rush — music theory posters and videos',
            channel: 'Toby Rush',
            duration: 'variable',
            why: 'A music professor\'s illustrated summaries of species counterpoint. Uncommonly clear on a hard subject.',
          },
        ],
        books: [
          {
            title: 'The Study of Counterpoint (Gradus ad Parnassum)',
            author: 'Johann Joseph Fux',
            year: 1725,
            url: 'https://archive.org/details/studyofcounterpo00fuxj',
            why: 'The 1725 treatise, free on Archive.org in the standard Mann English translation. The book Haydn and Mozart both learned from.',
          },
          {
            title: 'Counterpoint in Composition',
            author: 'Felix Salzer and Carl Schachter',
            year: 1969,
            url: '',
            why: 'The standard graduate-level counterpoint textbook in English. Grounds the species exercises in actual Bach.',
          },
          {
            title: 'The Bach Reader',
            author: 'Hans T. David, Arthur Mendel, and Christoph Wolff',
            year: 1998,
            url: '',
            why: 'Primary sources — letters, reviews, eyewitness accounts — on the composer whose counterpoint you are ultimately trying to understand.',
          },
        ],
        articles: [
          {
            title: 'Counterpoint',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Counterpoint',
            why: 'Comprehensive entry with worked examples of each of the five species.',
            year: null,
          },
          {
            title: 'Fugue',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Fugue',
            why: 'Detailed article on the form Bach made canonical — subject, answer, countersubject, episode, stretto.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Harmony and Counterpoint I (21M.301)',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/21m-301-harmony-and-counterpoint-i-spring-2005/',
            free: true,
            why: 'MIT\'s free undergraduate course on harmony and counterpoint. Lectures, readings, problem sets.',
          },
        ],
        primarySources: [
          {
            title: 'The Well-Tempered Clavier (Bach) — IMSLP scores',
            url: 'https://imslp.org/wiki/Das_wohltemperierte_Klavier_I%2C_BWV_846-869_(Bach%2C_Johann_Sebastian)',
            why: 'Free scores of the 48 preludes and fugues. Every counterpoint student eventually works through these.',
          },
          {
            title: 'The Art of Fugue (Bach) — IMSLP',
            url: 'https://imslp.org/wiki/Die_Kunst_der_Fuge%2C_BWV_1080_(Bach%2C_Johann_Sebastian)',
            why: 'Bach\'s unfinished summit of the discipline, free at IMSLP. The Glenn Gould recording is the famous pianistic reading.',
          },
        ],
      },

      seeAlso: ['harmony', 'notation', 'classical'],
      prereqs: ['harmony'],
      leadsTo: ['classical'],

      chapterActivity: 'A seasonal "Bach evening" at Bargemusic, the floating concert hall under the Brooklyn Bridge — a short lecture on one fugue, then a live performance of the same.',

      sources: [
        'https://en.wikipedia.org/wiki/Counterpoint',
        'https://en.wikipedia.org/wiki/Fugue',
        'https://imslp.org/',
      ],
      verifiedAt: '2026-04-22',
    },

    classical: {
      id: 'classical',
      name: 'Classical Tradition',
      level: 'Intermediate',
      dek: 'Four hundred years of Western concert music — from Monteverdi\'s first opera to Shostakovich\'s wartime symphonies.',
      readTime: '14 min',

      sections: ['Baroque: Monteverdi to Bach', 'Classical period: Haydn, Mozart, Beethoven', 'Romantic century', 'The twentieth century'],
      body: [
        { type: 'lead', text: 'In the winter of 1808, in a cold theater in Vienna, Ludwig van Beethoven conducted a concert of his own new works: the Fifth Symphony, the Sixth Symphony, the Fourth Piano Concerto, the Choral Fantasy, two movements of the C-major Mass, and a piano improvisation. The concert lasted four hours, the hall was underheated, and the orchestra was under-rehearsed. The audience went home exhausted and slightly hostile. Two centuries later, three of those pieces are among the most performed works on earth. "Classical music," as a category, names four centuries of this sort of thing happening.' },
        { type: 'h2', text: 'Baroque — c. 1600–1750' },
        { type: 'p', text: 'Opera was invented in Florence around 1600; Monteverdi\'s L\'Orfeo (1607) is the first opera still regularly performed. The Baroque era developed the orchestra (Vivaldi), the concerto (Corelli), the oratorio (Handel), and — in Bach\'s keyboard works, cantatas, and Passions — a contrapuntal art no one has equaled since. The Baroque aesthetic prizes ornament, continuous bass lines, and pieces driven by a single "affect" or emotion per movement. For a listener, a useful first investment is the Bach B-minor Mass and the Handel Messiah, recorded by any of the better period-instrument ensembles (the Monteverdi Choir, the Academy of Ancient Music, Collegium Vocale Gent).' },
        { type: 'h2', text: 'The Classical period — c. 1750–1820' },
        { type: 'p', text: 'Haydn, working at the Esterháza estate in Hungary, stabilized the symphony in four movements and the string quartet in four; he wrote 104 of the first and 68 of the second. Mozart, a generation younger, matched him and added opera. Beethoven, Haydn\'s student, widened the vocabulary: nine symphonies (the Third, Fifth, Seventh, and Ninth alone reshaped the form), sixteen string quartets, thirty-two piano sonatas. Between them, these three composers built the Classical canon. Most of the pieces an average concertgoer hears tonight were written by one of them.' },
        { type: 'h2', text: 'The Romantic century — c. 1820–1900' },
        { type: 'p', text: 'The Romantic century pushed every dial further. Orchestras grew; Wagner\'s Ring Cycle required a pit of roughly a hundred musicians over four full evenings. The piano became a virtuoso\'s instrument (Chopin, Liszt). The symphonic tradition ran from Schubert through Brahms, Bruckner, Mahler, and Tchaikovsky. Opera flowered in Italy (Verdi, Puccini) and in Germany (Wagner, Strauss). National schools emerged: Russian (Mussorgsky, Rimsky-Korsakov), Czech (Dvořák, Smetana), French (Debussy, Fauré). By 1900 the tradition was enormously rich and beginning to crack under the weight of its own accumulated vocabulary.' },
        { type: 'h2', text: 'The twentieth-century fractures' },
        { type: 'p', text: 'In the first three decades of the new century, Schoenberg abandoned tonality, Stravinsky wrote The Rite of Spring, Bartók integrated Hungarian folk music with modernism, and Ravel and Debussy produced the last great French orchestral literature. After World War II, the tradition splintered: serialists followed Webern; minimalists (Reich, Glass, Pärt) found a way back to repetition and consonance; Shostakovich and Britten kept the symphonic tradition alive under different conditions. Contemporary classical music is now a plural, international conversation that still draws crowds at Carnegie Hall and the Proms.' },
        { type: 'h2', text: 'How to listen' },
        { type: 'p', text: 'Most newcomers do better starting with a single composer and a single recording than with a "greatest hits." A Beethoven late string quartet in a good recording; Bach\'s Goldberg Variations played by Angela Hewitt; Mahler\'s Second Symphony under Simon Rattle; Debussy\'s Préludes played by Krystian Zimerman. Listen three times. On the third listen, the shape of the piece starts to appear. That is the moment the music stops being background.' },
        { type: 'quote', text: 'Music expresses that which cannot be said and on which it is impossible to be silent.', cite: 'Victor Hugo' },
      ],

      keyTerms: ['symphony', 'concerto', 'sonata form', 'opera', 'string quartet', 'Baroque', 'Classical period', 'Romantic'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@InsideTheScore',
            title: 'Inside the Score (channel)',
            channel: 'Inside the Score',
            duration: 'variable',
            why: 'Close readings of classical works — the Beethoven 9 video and the Mozart G-minor Symphony video are exemplary.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@berlinphil',
            title: 'Berlin Philharmonic — Digital Concert Hall (trailers and interviews)',
            channel: 'Berlin Philharmonic',
            duration: 'variable',
            why: 'The Berlin Phil\'s YouTube is a free sampler of the most ambitious classical streaming service now running.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@leonardbernstein',
            title: 'Leonard Bernstein\'s Young People\'s Concerts (archive)',
            channel: 'Leonard Bernstein Office',
            duration: 'variable',
            why: 'Bernstein\'s 1958–1972 televised lectures on what music does and how it works. Sixty-year-old pedagogy that still unsurpassed.',
          },
        ],
        books: [
          {
            title: 'The Oxford History of Western Music',
            author: 'Richard Taruskin',
            year: 2005,
            url: '',
            why: 'Five volumes; the current scholarly standard. Taruskin is opinionated; disagree with him and you will have learned a great deal.',
          },
          {
            title: 'A History of Western Music',
            author: 'Donald Jay Grout, Claude V. Palisca, and J. Peter Burkholder',
            year: 1960,
            url: '',
            why: 'The standard single-volume university textbook. Current editions are reliable and comprehensive.',
          },
          {
            title: 'The Rest Is Noise',
            author: 'Alex Ross',
            year: 2007,
            url: '',
            why: 'Alex Ross of The New Yorker on the twentieth century in music — Schoenberg, Stravinsky, Shostakovich, Cage, Reich. The best popular history of modern classical music.',
          },
        ],
        articles: [
          {
            title: 'Classical music',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Classical_music',
            why: 'Featured-article overview of the tradition, era by era.',
            year: null,
          },
          {
            title: 'Heilbrunn Timeline — Music',
            source: 'Metropolitan Museum of Art',
            url: 'https://www.metmuseum.org/toah/chronology/',
            why: 'The Met\'s timeline with essays on the musical instruments, composers, and patrons of each period.',
            year: null,
          },
          {
            title: 'NPR — 50 Great Classical Music Recordings (Ted Libbey)',
            source: 'NPR Music',
            url: 'https://www.npr.org/2010/10/07/130369333/50-great-classical-music-recordings',
            why: 'A curated starting list by a working classical critic. Every recording is real, accessible, and worth an afternoon.',
            year: 2010,
          },
        ],
        courses: [
          {
            title: 'Introduction to Classical Music',
            provider: 'Coursera (Yale, Craig Wright)',
            url: 'https://www.coursera.org/learn/introclassicalmusic',
            free: true,
            why: 'Craig Wright\'s free Yale course — widely cited as one of the best online music courses of any kind.',
          },
        ],
        primarySources: [
          {
            title: 'IMSLP / Petrucci Music Library',
            url: 'https://imslp.org/',
            why: 'Free scores for essentially every out-of-copyright classical work. 250,000+ scores.',
          },
        ],
      },

      seeAlso: ['notation', 'harmony', 'counterpoint', 'jazz'],
      prereqs: ['notation'],
      leadsTo: ['jazz', 'popular'],

      chapterActivity: 'Monthly "one symphony" evenings at Carnegie Hall student-rush seats — a single symphony each month, read about in advance, discussed after at a nearby cocktail bar.',

      sources: [
        'https://en.wikipedia.org/wiki/Classical_music',
        'https://www.coursera.org/learn/introclassicalmusic',
        'https://imslp.org/',
      ],
      verifiedAt: '2026-04-22',
    },

    jazz: {
      id: 'jazz',
      name: 'Jazz & Blues',
      level: 'Intermediate',
      dek: 'An American music, born in the African American communities of New Orleans, that turned improvisation into the twentieth century\'s most influential musical idea.',
      readTime: '13 min',

      sections: ['Origins: blues and New Orleans', 'Swing and the big bands', 'Bebop and after', 'The music now'],
      body: [
        { type: 'lead', text: 'On a rainy April night in 1917, in New Orleans, the closing of the Storyville red-light district scattered a generation of musicians up the Mississippi to Chicago and, eventually, to New York. They carried with them a mix of West African rhythmic inheritance, European harmonic practice, work song, church song, and the particular genius of African American culture. What came out was jazz — the single most influential musical idea of the twentieth century.' },
        { type: 'h2', text: 'The blues and the birth of jazz' },
        { type: 'p', text: 'The blues, as a form, coalesced in the American South in the late nineteenth century: a twelve-bar structure, three chords (I, IV, V), and "blue notes" — the flattened third, fifth, and seventh that give the music its specific emotional gravity. The blues is the mother of everything that followed. New Orleans jazz, which emerged in the 1910s, layered the blues over collective improvisation: a front line of cornet, clarinet, and trombone playing interwoven melody while a rhythm section of piano, banjo, tuba, and drums kept the swing. Louis Armstrong, the greatest of the first generation, showed that a single soloist could carry a band, and by 1928 he had effectively invented the modern jazz solo.' },
        { type: 'h2', text: 'Swing, big bands, and the Harlem Renaissance' },
        { type: 'p', text: 'The 1930s were the only period in American history when jazz was genuinely popular music. Duke Ellington\'s band at the Cotton Club. Count Basie\'s band in Kansas City. Benny Goodman\'s integrated band. Billie Holiday with Teddy Wilson\'s orchestra. Ella Fitzgerald in Harlem. The big band arrangements of Fletcher Henderson, Don Redman, and Ellington himself took the rough collective improvisation of New Orleans and turned it into a full orchestral language. Swing music filled the dance halls of America until, roughly, 1945.' },
        { type: 'h2', text: 'Bebop and after' },
        { type: 'p', text: 'In 1944 and 1945, in after-hours jam sessions at Minton\'s Playhouse in Harlem, Charlie Parker, Dizzy Gillespie, Thelonious Monk, and a handful of others invented bebop — jazz played fast, at small-group scale, with wildly extended chord vocabulary and genuinely difficult harmonic language. Bebop turned jazz from popular music into an art music. The branches after it — cool (Miles Davis, Chet Baker), hard bop (Art Blakey), modal (Miles\'s Kind of Blue, 1959), free jazz (Ornette Coleman, 1960s), fusion (Miles\'s Bitches Brew, 1970) — each widened the music further. By 1975 jazz had the same structural relationship to popular music that classical music had, and the same small, devoted audience.' },
        { type: 'h2', text: 'Where the music lives now' },
        { type: 'p', text: 'Contemporary jazz (Kamasi Washington, Esperanza Spalding, Brad Mehldau, Cécile McLorin Salvant, Ambrose Akinmusire) is healthier than its public profile would suggest — more international, more formally adventurous, and with a working pipeline of conservatory-trained musicians who have absorbed the tradition and brought new influences (hip-hop, West African pop, contemporary classical) to it. If you are starting, Miles\'s Kind of Blue, Coltrane\'s A Love Supreme, Monk\'s Brilliant Corners, Ella & Louis, Billie Holiday\'s Lady in Satin, and Armstrong\'s Hot Fives are the canonical entry doors. There is no substitute for hearing it live, preferably in a small room.' },
        { type: 'quote', text: 'It don\'t mean a thing if it ain\'t got that swing.', cite: 'Duke Ellington (and Irving Mills), 1931' },
      ],

      keyTerms: ['blues', 'swing', 'bebop', 'improvisation', 'blue notes', 'big band', 'modal jazz', 'standards'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@JazzAtLincolnCenter',
            title: 'Jazz at Lincoln Center — archival concerts and talks',
            channel: 'Jazz at Lincoln Center',
            duration: 'variable',
            why: 'JALC\'s official channel includes Wynton Marsalis\'s lectures, the "Essentially Ellington" archive, and live concert video. The best single jazz video library.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@opendorum',
            title: 'Open Studio / WBGO — jazz education',
            channel: 'Open Studio (Peter Martin, Adam Maness)',
            duration: 'variable',
            why: 'Working pianists teach jazz theory and improvisation. Free content and paid courses; the YouTube channel alone is substantial.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@pbs',
            title: 'Ken Burns — Jazz (2001, 10 episodes)',
            channel: 'PBS',
            duration: '10 x 90:00',
            why: 'Ken Burns\'s ten-hour documentary remains the best popular introduction to the music\'s history. Available on PBS; clips on YouTube.',
          },
        ],
        books: [
          {
            title: 'The History of Jazz',
            author: 'Ted Gioia',
            year: 1997,
            url: '',
            why: 'The standard single-volume popular history. Second edition (2011) extended to the present; readable and current.',
          },
          {
            title: 'Blues People',
            author: 'Amiri Baraka (LeRoi Jones)',
            year: 1963,
            url: '',
            why: 'The first major study of African American music as cultural history, by the poet then known as LeRoi Jones. Controversial, indispensable.',
          },
          {
            title: 'Miles: The Autobiography',
            author: 'Miles Davis with Quincy Troupe',
            year: 1989,
            url: '',
            why: 'The most quoted autobiography in jazz. Miles\'s voice on the page is the same voice on the trumpet — dry, profane, exact.',
          },
        ],
        articles: [
          {
            title: 'Jazz',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Jazz',
            why: 'Featured-article overview of the music\'s history and subgenres.',
            year: null,
          },
          {
            title: 'Smithsonian Jazz',
            source: 'Smithsonian National Museum of American History',
            url: 'https://americanhistory.si.edu/smithsonian-jazz',
            why: 'The Smithsonian\'s curated jazz portal, with essays by leading scholars and access to the Jazz Oral History Project.',
            year: null,
          },
          {
            title: 'Blues',
            source: 'Encyclopædia Britannica',
            url: 'https://www.britannica.com/art/blues-music',
            why: 'Britannica on the form that is jazz\'s direct ancestor.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Introduction to the Music Business (Berklee)',
            provider: 'Coursera (Berklee)',
            url: 'https://www.coursera.org/learn/music-business',
            free: true,
            why: 'Berklee\'s free audit includes jazz-specific modules; Berklee also offers substantial free jazz-theory content through Open Music Theory.',
          },
          {
            title: 'Jazz Improvisation',
            provider: 'Coursera (Berklee)',
            url: 'https://www.coursera.org/learn/jazz-improvisation',
            free: true,
            why: 'Gary Burton\'s free Berklee course on jazz improvisation — the best structured online course on the subject.',
          },
        ],
        primarySources: [
          {
            title: 'Louis Armstrong — Hot Five and Hot Seven recordings (1925–28)',
            url: 'https://en.wikipedia.org/wiki/Louis_Armstrong_and_His_Hot_Five',
            why: 'Wikipedia\'s entry with links to the original Columbia recordings that effectively invented the modern jazz solo.',
          },
          {
            title: 'Miles Davis — Kind of Blue (1959)',
            url: 'https://en.wikipedia.org/wiki/Kind_of_Blue',
            why: 'The best-selling jazz album ever recorded; the modal revolution in 45 minutes. Listen on any streaming service.',
          },
        ],
      },

      seeAlso: ['classical', 'harmony', 'popular'],
      prereqs: ['harmony'],
      leadsTo: ['popular'],

      chapterActivity: 'Tuesday night jam sessions at Smalls Jazz Club in the West Village, with a standing reservation for chapter members; a rotating chapter host prepares a short listening-guide sheet for the featured artist.',

      sources: [
        'https://en.wikipedia.org/wiki/Jazz',
        'https://americanhistory.si.edu/smithsonian-jazz',
        'https://www.britannica.com/art/blues-music',
      ],
      verifiedAt: '2026-04-22',
    },

    popular: {
      id: 'popular',
      name: 'Popular Music',
      level: 'Beginner',
      dek: 'Tin Pan Alley to streaming: the commercial, mass-mediated song tradition that is, by any measure, most of the music most people hear.',
      readTime: '13 min',

      sections: ['Tin Pan Alley and the song form', 'Recording changes the game', 'Rock, soul, hip-hop', 'The streaming present'],
      body: [
        { type: 'lead', text: 'On Twenty-Eighth Street in Manhattan, in the decade before World War I, a stretch of blocks was so full of upright pianos being pounded out by song-pluggers that the noise earned the neighborhood a nickname: Tin Pan Alley. Out of that noise came "Alexander\'s Ragtime Band," "Somewhere Over the Rainbow," "White Christmas," "Night and Day," and the beginnings of the American popular song. Almost every pop song written since is a descendant.' },
        { type: 'h2', text: 'Tin Pan Alley and the thirty-two-bar song' },
        { type: 'p', text: 'By the 1920s the American popular song had stabilized into a remarkably efficient form: a thirty-two-bar AABA structure, typically eight bars per section, in a simple key. George Gershwin, Irving Berlin, Cole Porter, Jerome Kern, Harold Arlen, Rodgers and Hart — the great Tin Pan Alley songwriters produced hundreds of these songs, which became the "Great American Songbook" that jazz musicians have been rearranging for a century. A song like "Summertime" or "My Funny Valentine" is not a simple thing, but it is a compressed thing, built from a form as tight as a sonnet.' },
        { type: 'h2', text: 'The phonograph changes everything' },
        { type: 'p', text: 'Before Edison\'s 1877 phonograph, music existed only when someone played it live; by 1927, Americans owned more than 100 million records. The phonograph (and its successors, the radio, the LP, the cassette, the CD, the MP3, the streaming file) changed what popular music was: no longer a song you learned to play, but a specific performance you heard again and again. The recorded performance became the work. A Frank Sinatra record is not a version of the song; for most listeners, it is the song.' },
        { type: 'h2', text: 'Rock, soul, hip-hop' },
        { type: 'p', text: 'The second half of the twentieth century produced, in order: rock and roll (Chuck Berry, Elvis, Little Richard, the Beatles, the Stones), the producer-driven girl groups and Motown (Holland-Dozier-Holland, Smokey Robinson), soul and funk (Aretha Franklin, James Brown, Stevie Wonder, Sly Stone), singer-songwriter pop (Bob Dylan, Joni Mitchell, Carole King), hip-hop (Grandmaster Flash, Run-DMC, Public Enemy, A Tribe Called Quest, OutKast, Kendrick Lamar), disco, punk, new wave, metal, country (a separate tradition with its own canon), R&B, electronic dance music, and a global pop that now routinely produces Nigerian, Korean, and Colombian artists at the top of American charts. Each of these subgenres is its own deep subject; together they make the soundtrack of the last seventy years.' },
        { type: 'h2', text: 'The streaming present' },
        { type: 'p', text: 'In the 2020s, popular music is largely delivered by algorithmic streaming platforms. Songs have gotten shorter (the average pop song is now about 3:15); intros have almost disappeared; choruses arrive faster to avoid skips. TikTok has become the main radio for anyone under thirty. Whether all this produces a golden age or a culture of engineered disposability is an argument historians will finish in twenty years. What is clear is that the commercial pop song — the form invented on Twenty-Eighth Street — is still, remarkably, more or less the same form a century later.' },
        { type: 'callout', text: 'The phrase "Great American Songbook" is now a shelf rather than a specific list: it generally means the 20s-through-50s Tin Pan Alley and Broadway repertoire, as preserved in jazz-vocal practice. Ella Fitzgerald\'s eight "Songbook" albums from 1956 to 1964 are the canonical anthology.' },
      ],

      keyTerms: ['Tin Pan Alley', 'Great American Songbook', 'Motown', 'rock and roll', 'hip-hop', 'sampling', 'producer', 'streaming'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@Polyphonic',
            title: 'Polyphonic (channel)',
            channel: 'Polyphonic',
            duration: 'variable',
            why: 'Video essays on the production, history, and meaning of specific pop and rock albums. The "Behind the Song" series is especially good.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@Vox',
            title: 'Vox — "Earworm" series (Estelle Caswell)',
            channel: 'Vox',
            duration: 'variable',
            why: 'Estelle Caswell\'s music-video-essay series on how specific pop songs are constructed. The episode on 2010s pop chord progressions is the viral one, for good reason.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@AdamNeely',
            title: 'Adam Neely — pop and hip-hop theory episodes',
            channel: 'Adam Neely',
            duration: 'variable',
            why: 'Neely brings music-theory rigor to pop, R&B, and hip-hop — treating contemporary popular music with the same seriousness a musicology department would give a Beethoven sonata.',
          },
        ],
        books: [
          {
            title: 'Yesterday: The Beatles Once and Now',
            author: 'Devin McKinney',
            year: 2003,
            url: '',
            why: 'McKinney on the Beatles as cultural event rather than musical one. The best book on the band, which means the best book on post-1963 popular music.',
          },
          {
            title: 'Can\'t Stop Won\'t Stop: A History of the Hip-Hop Generation',
            author: 'Jeff Chang',
            year: 2005,
            url: '',
            why: 'The definitive popular history of hip-hop\'s first twenty-five years. Chang spent a decade on it; it shows.',
          },
          {
            title: 'The Beatles — Tune In (All These Years, Vol. 1)',
            author: 'Mark Lewisohn',
            year: 2013,
            url: '',
            why: 'Lewisohn\'s encyclopedic Beatles biography (three volumes projected; first is 900 pages). The best music biography of the twenty-first century so far.',
          },
        ],
        articles: [
          {
            title: 'Popular music',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Popular_music',
            why: 'Good overview with sections on the form\'s relationship to commerce, media, and audience.',
            year: null,
          },
          {
            title: 'Rolling Stone — 500 Greatest Songs of All Time (2021 revision)',
            source: 'Rolling Stone',
            url: 'https://www.rollingstone.com/music/music-lists/best-songs-of-all-time-1224767/',
            why: 'The 2021 revision of the list — arguing among the entries is itself a pop-music education.',
            year: 2021,
          },
          {
            title: 'Pitchfork — Best of the Decade lists',
            source: 'Pitchfork',
            url: 'https://pitchfork.com/features/lists-and-guides/',
            why: 'Pitchfork\'s decadal best-of lists function as a crib sheet for the indie/alt/contemporary side of popular music.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'The History of Rock, Part One',
            provider: 'Coursera (University of Rochester, John Covach)',
            url: 'https://www.coursera.org/learn/history-of-rock',
            free: true,
            why: 'John Covach\'s free University of Rochester course — the best structured online survey of rock music, from Elvis to the present.',
          },
        ],
        primarySources: [
          {
            title: 'Library of Congress — National Recording Registry',
            url: 'https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/complete-national-recording-registry-listing/',
            why: 'The Library of Congress\'s ongoing list of culturally significant American recordings. Browse for a fifty-year tour of American popular music.',
          },
        ],
      },

      seeAlso: ['jazz', 'classical', 'harmony'],
      prereqs: [],
      leadsTo: [],

      chapterActivity: 'Monthly "one album" evenings at a different NYC record bar each month — one album played start to finish, conversation afterward, previous month\'s album discussed first.',

      sources: [
        'https://en.wikipedia.org/wiki/Popular_music',
        'https://www.rollingstone.com/music/music-lists/best-songs-of-all-time-1224767/',
        'https://www.loc.gov/programs/national-recording-preservation-board/recording-registry/',
      ],
      verifiedAt: '2026-04-22',
    },

  },
};
