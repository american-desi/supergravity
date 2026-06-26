// content/film.js
// Batch: B13-arts-performing
// Last updated: 2026-04-23 by BATCH B13+B14
//
// Topics this subject must cover (from data.js):
//   Core: shots, editing

window.CONTENT = window.CONTENT || {};
window.CONTENT.film = {
  subjectId: 'film',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B13+B14',
  topics: {

    shots: {
      id: 'shots',
      name: 'Shot Types',
      level: 'Intermediate',
      dek: 'Wide, medium, close — and the grammar a director borrows every time a camera rolls.',
      readTime: '12 min',

      sections: ['A grammar older than sound', 'The shot scale', 'Angle, framing, and the space around the subject', 'The moving camera', 'Why coverage matters'],
      body: [
        { type: 'lead', text: 'In 1903, Edwin S. Porter cut from a wide shot of a train robbery to a medium shot of a man firing a pistol straight at the audience, and the twelve-minute film that followed taught the world that a movie was not a play photographed from the front row. It was a sequence of frames, each with its own distance from the action, that a director chose in order. From that single cut forward — The Great Train Robbery, 1903 — film has had a grammar. Shot types are that grammar\'s basic nouns.' },
        { type: 'h2', text: 'A grammar older than sound' },
        { type: 'p', text: 'The shot vocabulary — wide, medium, close — is older than color, older than talkies, older than montage theory. D. W. Griffith in the 1910s and Sergei Eisenstein in the 1920s formalized what Porter had stumbled onto: that an audience reads a cut from wide to close as "here is the world, now look at this face in it," and reads a cut from close to wide as "now see the face in context." The unspoken contract between filmmaker and viewer — that a new shot means a new amount of information — is what distinguishes cinema from every other narrative medium.' },
        { type: 'h2', text: 'The shot scale' },
        { type: 'p', text: 'The standard scale runs from extreme wide to extreme close. The extreme wide — a landscape, a city, a crowd — establishes location and scale. The wide (or "full") shows the whole body. The medium, waist-up, is the conversation shot. The medium close, chest-up, is the television drama\'s workhorse. The close-up, from shoulders to head, brings the audience into an emotional intimacy. The extreme close-up — an eye, a mouth, a hand — lets the director point a finger at exactly the thing they want noticed. Every director has their preferred range. Sergio Leone built whole Westerns out of extreme close-ups. Yasujiro Ozu worked almost entirely in the medium.' },
        { type: 'h2', text: 'Angle, framing, and the space around the subject' },
        { type: 'p', text: 'Shot type is not only distance. The angle — high, low, eye-level, overhead, Dutch tilt — changes the emotional reading of the same subject. A low-angle shot of a villain makes him imposing; the same villain in high angle looks cornered. "Headroom" is the space above the subject\'s head; "looking room" or "nose room" is the space they look into. A face framed tight to one edge of the frame, looking out of it, feels unsettled. These are small conventions, but a film that breaks them without reason tells the audience, subliminally, that something is off. Which is sometimes exactly what the director wants.' },
        { type: 'h2', text: 'The moving camera' },
        { type: 'p', text: 'A static shot is a painting; a moving shot is a sentence. A pan turns on a vertical axis. A tilt on a horizontal. A dolly moves the camera bodily through space. A tracking shot follows alongside a subject. A crane lifts. A Steadicam — the Garrett Brown invention of 1975 that put a camera on a spring-loaded harness — floats. Paul Thomas Anderson\'s long opening tracking shots, Alfonso Cuarón\'s apparent single-take sequences in Children of Men, Martin Scorsese\'s Copacabana tracking shot in Goodfellas: the moving camera is now as expressive as any cut.' },
        { type: 'h2', text: 'Why coverage matters' },
        { type: 'p', text: 'On a professional set, a scene is typically shot from three or four angles — master wide, over-shoulder one way, over-shoulder the other, and close-ups of each actor — regardless of what the director thinks they will use. This is called coverage, and it is insurance. Editing rooms are full of scenes saved by a single unplanned cutaway. A director who understands shot types understands, in advance, exactly how little coverage they can get away with and still have a cuttable scene. Hitchcock famously pre-visualized his films so completely that he shot no extra footage. Most mortals shoot more.' },
        { type: 'callout', text: 'The 180-degree rule: once you establish two characters facing each other, the camera must stay on one side of an imaginary line between them. Cross it and the characters appear to have switched places. The rule is broken with purpose occasionally — Kubrick does it in The Shining to make a hallway disorienting — but it is always a decision.' },
      ],

      keyTerms: ['extreme wide shot', 'establishing shot', 'medium shot', 'close-up', 'over-the-shoulder', 'point of view', 'tracking shot', 'dolly', 'pan', 'tilt', '180-degree rule', 'coverage'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@everyframeapainting',
            title: 'Every Frame a Painting — video essays on film craft',
            channel: 'Every Frame a Painting',
            duration: 'variable',
            featured: true,
            why: 'Tony Zhou and Taylor Ramos\'s landmark channel, now complete at twenty-eight episodes. The most influential film-craft essays of the 2010s. Start with "Bong Joon-ho – Ensemble Staging" and "The Spielberg Oner."',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@LessonsfromtheScreenplay',
            title: 'Lessons from the Screenplay — how scenes are written and shot',
            channel: 'Lessons from the Screenplay',
            duration: 'variable',
            featured: true,
            why: 'Michael Tucker\'s careful close-readings of scripts and the shots that serve them. Longer-form than Every Frame a Painting, with the writer-director collaboration in view.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@StudioBinder',
            title: 'StudioBinder — shot grammar, camera movement, shot list tutorials',
            channel: 'StudioBinder',
            duration: 'variable',
            featured: true,
            why: 'The shot-list software company runs the most systematic free tutorial channel on shot vocabulary. Clean examples, proper names, every major shot type with film clips.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@NerdwriterShow',
            title: 'Nerdwriter — video essays on image-making',
            channel: 'Nerdwriter1',
            duration: 'variable',
            featured: false,
            why: 'Evan Puschak\'s essays on specific filmmakers — Kubrick, Nolan, Terrence Malick — that inspect the choices behind a single shot or sequence.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@AsburyYoung',
            title: 'CinemaStix — single-shot analyses',
            channel: 'CinemaStix',
            duration: 'variable',
            featured: false,
            why: 'Short, idea-dense essays on specific shot choices in contemporary films. Good pairing with longer-form channels.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.criterion.com/current/posts/category/video',
            title: 'Criterion Channel video essays',
            channel: 'Criterion Collection',
            duration: 'variable',
            featured: false,
            why: 'The Criterion Collection\'s own video essays on camera choices in their catalogue. A master class in taking shots seriously.',
          },
        ],
        books: [
          {
            title: 'Story',
            author: 'Robert McKee',
            year: 1997,
            url: 'https://mckeestory.com/books/story/',
            why: 'The seminar Hollywood screenwriters take once a decade. McKee\'s chapters on the scene and the shot are canon for directors as much as for writers.',
          },
          {
            title: 'The Visual Story',
            author: 'Bruce Block',
            year: 2001,
            url: 'https://www.routledge.com/The-Visual-Story-Creating-the-Visual-Structure-of-Film-TV-and-Digital-Media/Block/p/book/9781138628113',
            why: 'The USC textbook on visual structure. Space, line, tone, color, contrast, movement — Block\'s framework is still the most complete theory of the shot in print.',
          },
          {
            title: 'Film Directing Shot by Shot',
            author: 'Steven D. Katz',
            year: 1991,
            url: 'https://www.worldcat.org/title/film-directing-shot-by-shot-visualizing-from-concept-to-screen/oclc/25318625',
            why: 'The illustrated encyclopedia of shot grammar. Every director\'s bookshelf has it. Diagrams of blocking, coverage, and camera movement on every page.',
          },
          {
            title: 'Hitchcock/Truffaut',
            author: 'François Truffaut',
            year: 1966,
            url: 'https://archive.org/details/hitchcocktruffau0000truf',
            why: 'A week of interviews between two master directors about shot choices in every one of Hitchcock\'s films. Indispensable, and genuinely a pleasure to read.',
          },
          {
            title: 'In the Blink of an Eye',
            author: 'Walter Murch',
            year: 1995,
            url: 'https://www.silmanjamespress.com/shop/p/in-the-blink-of-an-eye-a-perspective-on-film-editing-2nd-edition',
            why: 'The Apocalypse Now editor\'s short masterpiece. Written about editing but it is really about why shots are chosen and how they connect.',
          },
        ],
        articles: [
          {
            title: 'Shot (filmmaking)',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Shot_(filmmaking)',
            why: 'Reference article on the shot as unit, with the full vocabulary from extreme wide to insert and cutaway.',
            year: null,
          },
          {
            title: '180-degree rule',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/180-degree_rule',
            why: 'The single most important rule of continuity shooting, explained with diagrams.',
            year: null,
          },
          {
            title: 'Cinematography',
            source: 'Britannica',
            url: 'https://www.britannica.com/art/cinematography',
            why: 'Broader survey of the craft — lenses, composition, camera movement — that places shot types in their wider context.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'MasterClass: Martin Scorsese Teaches Filmmaking (excerpts free)',
            provider: 'MasterClass / Martin Scorsese',
            url: 'https://www.masterclass.com/classes/martin-scorsese-teaches-filmmaking',
            free: false,
            why: 'Paid, but the preview clips and community transcripts are widely available. The reference interview with a living master on shot design.',
          },
          {
            title: 'Hollywood: A Cinematographer\'s Style (Arriflex / Camera Training Academy)',
            provider: 'American Society of Cinematographers',
            url: 'https://theasc.com/articles',
            free: true,
            why: 'The ASC\'s open articles archive. Craft interviews with working DPs on shot selection for specific films. The master trade publication in the field.',
          },
        ],
        tools: [
          {
            title: 'Shot Deck',
            url: 'https://shotdeck.com/',
            why: 'A searchable database of high-resolution stills from every major film. Type "close-up, low angle, blue, interior" and see a hundred examples. The working director\'s scouting tool.',
          },
          {
            title: 'StudioBinder shot list template',
            url: 'https://www.studiobinder.com/blog/shot-list-template-free-download/',
            why: 'The free industry-standard template for breaking a scene down into its shots before you roll. Used by students and working productions alike.',
          },
        ],
        primarySources: [
          {
            title: 'The Great Train Robbery (1903) — full film',
            url: 'https://www.loc.gov/item/00694399/',
            why: 'Edwin S. Porter\'s twelve-minute original at the Library of Congress. The first narrative film with cross-cutting. Watch it to see the grammar invented in real time.',
          },
          {
            title: 'Battleship Potemkin (1925) — Odessa Steps sequence',
            url: 'https://en.wikipedia.org/wiki/Battleship_Potemkin',
            why: 'Eisenstein\'s four-minute sequence is the formal invention of montage. Every film class watches it. Every director over-watched it.',
          },
        ],
      },

      seeAlso: ['editing', 'composition_photo', 'acting', 'directing'],
      prereqs: [],
      leadsTo: ['editing', 'directing'],

      chapterActivity: 'A "shot-by-shot" watch-and-talk night at Nitehawk Cinema in Williamsburg — members bring one film scene apiece, projected and paused shot by shot while someone narrates the choices.',

      sources: [
        'https://en.wikipedia.org/wiki/Shot_(filmmaking)',
        'https://en.wikipedia.org/wiki/180-degree_rule',
        'https://www.britannica.com/art/cinematography',
      ],
      verifiedAt: '2026-04-23',
    },

    editing: {
      id: 'editing',
      name: 'Editing',
      level: 'Advanced',
      dek: 'The invisible art — a hundred small decisions that shape rhythm, continuity, and what an audience thinks is happening.',
      readTime: '14 min',

      sections: ['Why editing is the heart of cinema', 'Continuity and the Kuleshov effect', 'Rhythm, the editor\'s music', 'Cut, dissolve, and the uncommon transitions', 'The editor as writer'],
      body: [
        { type: 'lead', text: 'In 1977, an editor named Marcia Lucas sat in a Los Angeles cutting room with three hundred thousand feet of film and a movie that did not work. Her husband George had turned in a two-hour space opera with interminable action and no narrative pulse. Over the next two months, she and two other editors cut out whole subplots, rebuilt the final space battle entirely, and handed back the film that the world would see as Star Wars. The movie exists as anyone remembers it because of the editing. That is not an unusual story; it is the ordinary story of filmmaking.' },
        { type: 'h2', text: 'Why editing is the heart of cinema' },
        { type: 'p', text: 'Directors point at the shots; editors decide the movie. Writing happens on paper; direction happens on the set; but the film the audience watches is built in an edit suite over many months, from many more hours of footage than will ever make it to screen. Thelma Schoonmaker, who has cut every Martin Scorsese film since Raging Bull, has said that editing is the only place in filmmaking where the final form of the movie is decided. Every other craft makes raw material. The editor makes the film.' },
        { type: 'h2', text: 'Continuity and the Kuleshov effect' },
        { type: 'p', text: 'In 1917, the Soviet filmmaker Lev Kuleshov ran an experiment. He intercut the same blank-faced shot of an actor with three different images: a bowl of soup, a dead woman in a coffin, a little girl playing. Audiences, shown the sequences, reported that the actor was hungry, grieving, tender — though his expression had not changed. The Kuleshov effect is the founding observation of film editing: meaning is generated between shots, in the audience\'s mind, not inside any single shot. Every edit exploits this. The editor\'s real medium is not pictures. It is what the audience assembles from them.' },
        { type: 'h2', text: 'Rhythm, the editor\'s music' },
        { type: 'p', text: 'A scene has a rhythm, and the rhythm is the editor\'s. Cut too early and the audience feels jerked; cut too late and they get bored. Walter Murch, in his short book In the Blink of an Eye, argues that the correct cut is often exactly where an audience member would blink, because an eye-blink is a small mental break — a natural cut point in human perception. The best editors watch the film dozens of times, listen to their own attention, and cut where the mind wants the cut. Rhythm is as much of editing as any other craft.' },
        { type: 'h2', text: 'Cut, dissolve, and the uncommon transitions' },
        { type: 'p', text: 'The straight cut is the default and, in the mature craft, nearly always the right answer. Dissolves soften a transition and suggest time passing; fade to black marks a chapter. Wipe transitions are now the province of Star Wars sequels and low-budget wedding videos — the language of a different era. A good editor uses the fancy transitions sparingly because they draw attention to themselves. The audience should feel the movie, not the editing. That is what invisibility means.' },
        { type: 'h2', text: 'The editor as writer' },
        { type: 'p', text: 'Editors rewrite movies. They reorder scenes, cut characters entirely, combine footage from different takes into a single performance, and invent endings the script did not have. Dede Allen on Bonnie and Clyde, Anne V. Coates on Lawrence of Arabia, Verna Fields on Jaws — each of them substantially shaped the film they cut. A director who treats the editor as a collaborator, not a technician, makes better movies. This is why many of the best directors in the world started as editors, and why the relationship between a director and their editor often lasts longer than any marriage in the business.' },
        { type: 'quote', text: 'The screenplay is the first draft of a film. The shoot is the second. The edit is the last, and the one the audience will see.', cite: 'Walter Murch' },
      ],

      keyTerms: ['cut', 'match cut', 'jump cut', 'cross-cut', 'montage', 'continuity editing', 'Kuleshov effect', 'dissolve', 'J-cut', 'L-cut', 'coverage', 'assembly'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@everyframeapainting',
            title: 'Every Frame a Painting — editing video essays',
            channel: 'Every Frame a Painting',
            duration: 'variable',
            featured: true,
            why: 'Tony Zhou\'s "Edgar Wright — How to Do Visual Comedy" and "The Spielberg Oner" are two of the clearest essays on editing ever made, free on YouTube.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@thisguyedits',
            title: 'This Guy Edits — Sven Pape on the craft',
            channel: 'This Guy Edits',
            duration: 'variable',
            featured: true,
            why: 'Sven Pape is a working Hollywood editor whose channel demystifies the suite. The most practical editing-room channel on YouTube.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@LessonsfromtheScreenplay',
            title: 'Lessons from the Screenplay — scene construction',
            channel: 'Lessons from the Screenplay',
            duration: 'variable',
            featured: true,
            why: 'Michael Tucker\'s scene-by-scene essays show how a written scene becomes a cut scene. Excellent on Parasite, No Country for Old Men, The Social Network.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@NerdwriterShow',
            title: 'Nerdwriter1 — single-scene analyses',
            channel: 'Nerdwriter1',
            duration: 'variable',
            featured: false,
            why: 'Evan Puschak\'s essays regularly break down a cut or a transition for a ten-minute video. Thoughtful and non-repetitive.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://americancinemaeditors.org/cinemontage-magazine/',
            title: 'CineMontage (Motion Picture Editors Guild)',
            channel: 'Motion Picture Editors Guild',
            duration: 'variable',
            featured: false,
            why: 'The American Cinema Editors\' own publication. Long interviews with working feature editors on specific films.',
          },
        ],
        books: [
          {
            title: 'In the Blink of an Eye',
            author: 'Walter Murch',
            year: 1995,
            url: 'https://www.silmanjamespress.com/shop/p/in-the-blink-of-an-eye-a-perspective-on-film-editing-2nd-edition',
            why: 'The Apocalypse Now editor\'s short, canonical book on editing. The "rule of six" and the blink theory are standard references in every film school.',
          },
          {
            title: 'The Conversations: Walter Murch and the Art of Editing Film',
            author: 'Michael Ondaatje',
            year: 2002,
            url: 'https://www.penguinrandomhouse.com/books/86193/the-conversations-by-michael-ondaatje/',
            why: 'Walter Murch in extended dialogue with the novelist Michael Ondaatje. Editing as philosophy, memory, and music, from one of the craft\'s deepest minds.',
          },
          {
            title: 'When the Shooting Stops… the Cutting Begins',
            author: 'Ralph Rosenblum, Robert Karen',
            year: 1979,
            url: 'https://archive.org/details/whenshootingstop00rose',
            why: 'Ralph Rosenblum cut for Woody Allen and Sidney Lumet. A memoir of the cutting room across twenty films. Warm, honest, and still the best first book on editing.',
          },
          {
            title: 'On Film Editing',
            author: 'Edward Dmytryk',
            year: 1984,
            url: 'https://www.taylorfrancis.com/books/mono/10.4324/9780080507088/film-editing-edward-dmytryk',
            why: 'The classic short treatise by a studio-era director-editor. The seven principles of editing are still taught exactly as Dmytryk wrote them.',
          },
          {
            title: 'Selected Takes: Film Editors on Editing',
            author: 'Vincent LoBrutto',
            year: 1991,
            url: 'https://www.worldcat.org/title/selected-takes-film-editors-on-editing/oclc/22669089',
            why: 'Thirty interviews with working editors: Dede Allen, Thelma Schoonmaker, Anne V. Coates, Richard Marks. The editor\'s side of the room, in their own words.',
          },
        ],
        articles: [
          {
            title: 'Film editing',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Film_editing',
            why: 'Thorough survey of editing theory and practice — continuity, montage, digital workflow.',
            year: null,
          },
          {
            title: 'Kuleshov effect',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Kuleshov_effect',
            why: 'The founding experiment of editing theory. Short, clear, with the original 1917 context.',
            year: null,
          },
          {
            title: 'Montage',
            source: 'Britannica',
            url: 'https://www.britannica.com/art/montage-cinema',
            why: 'Editorial treatment of Eisenstein, Vertov, and the Soviet montage tradition.',
            year: null,
          },
          {
            title: 'Thelma Schoonmaker, A.C.E.',
            source: 'American Cinema Editors',
            url: 'https://americancinemaeditors.org/',
            why: 'The guild site holds profile pieces and Eddie Award materials for the editor of every Scorsese film since 1980.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Introduction to Filmmaking (Grierson Trust, BBC)',
            provider: 'BBC Bitesize / Grierson Trust',
            url: 'https://www.bbc.co.uk/bitesize/articles/zy9y2v4',
            free: true,
            why: 'Free BBC resources on documentary editing and structure. Designed for A-level media students, useful for anyone starting out.',
          },
          {
            title: 'Editing Techniques in Film (Khan Academy / Pixar in a Box)',
            provider: 'Khan Academy',
            url: 'https://www.khanacademy.org/computing/pixar',
            free: true,
            why: 'Pixar in a Box includes a storytelling module on cutting and pacing. Free, structured, and built with working animators.',
          },
        ],
        tools: [
          {
            title: 'DaVinci Resolve (free edition)',
            url: 'https://www.blackmagicdesign.com/products/davinciresolve',
            why: 'Professional non-linear editor with a free tier that has no meaningful feature limits. The starter and, often, the finisher for working editors.',
          },
          {
            title: 'Shot Deck',
            url: 'https://shotdeck.com/',
            why: 'Searchable still library. Useful to editors for reference frames when pitching a cut or choosing a visual match.',
          },
        ],
        primarySources: [
          {
            title: 'Battleship Potemkin (1925) — Odessa Steps sequence',
            url: 'https://en.wikipedia.org/wiki/Battleship_Potemkin',
            why: 'Eisenstein\'s montage sequence is the textbook example of intellectual editing. Watch it and every later action sequence will make more sense.',
          },
          {
            title: 'Lev Kuleshov\'s experiment (1917)',
            url: 'https://en.wikipedia.org/wiki/Kuleshov_effect',
            why: 'The surviving description and reconstruction of the three-intercut-shots experiment that founded editing theory.',
          },
        ],
      },

      seeAlso: ['shots', 'acting', 'directing'],
      prereqs: ['shots'],
      leadsTo: [],

      chapterActivity: 'A Sunday "pick a scene, recut it" workshop at a member\'s loft in Red Hook — everyone works from the same dailies on DaVinci Resolve and screens their cuts together.',

      sources: [
        'https://en.wikipedia.org/wiki/Film_editing',
        'https://en.wikipedia.org/wiki/Kuleshov_effect',
        'https://www.britannica.com/art/montage-cinema',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
