// content/running.js
// Batch: B14-movement
// Last updated: 2026-04-23 by BATCH B13+B14
//
// Topics this subject must cover (from data.js):
//   Core: form, training

window.CONTENT = window.CONTENT || {};
window.CONTENT.running = {
  subjectId: 'running',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B13+B14',
  topics: {

    form: {
      id: 'form',
      name: 'Form',
      level: 'Beginner',
      dek: 'Posture, cadence, landing — the small mechanical habits that let a body run for a lifetime without breaking.',
      readTime: '12 min',

      sections: ['The quiet premise of running form', 'Cadence, the one number that matters', 'Foot landing and the shoe debate', 'Posture, and the single word "tall"', 'How form is actually changed'],
      body: [
        { type: 'lead', text: 'In 2011, an American ultrarunner named Scott Jurek finished a 46-mile traverse of Madeira in six hours and change. An exercise physiologist at a research lab clocked him at a cadence of 185 steps per minute across the run, barely drifting, mile after mile on broken terrain. The cadence was no accident. Jurek had reshaped his stride through years of deliberate work. His form was not beautiful for its own sake. It was economical — every foot landing did less damage, every stride wasted less energy, and that compound savings was what let him cover fifty miles and wake up the next morning able to do it again. Form is not about looking like a runner. It is about being one for a long time.' },
        { type: 'h2', text: 'The quiet premise of running form' },
        { type: 'p', text: 'Humans are endurance runners. The hunting-gathering ancestors of modern humans evolved the long-distance-running body — the sprung arches, the long Achilles tendons, the sweat glands that outperform any other mammal at shedding heat. The form of an efficient runner, in any culture, is broadly the same. Upright posture, relaxed shoulders, arms swinging from the shoulder joint, short ground contact, high cadence, mid-foot or fore-foot landing under the center of mass. Bad form — overstriding, heel-slamming, collapsed posture, stiff arms — costs the body every stride. A decade of it produces knee problems, plantar fasciitis, and a runner who has quit running by forty. Good form, thirty thousand foot strikes at a time, compounds the other way.' },
        { type: 'h2', text: 'Cadence, the one number that matters' },
        { type: 'p', text: 'If you change one thing about your running, change cadence. Elite distance runners turn over around 180 to 190 steps per minute across almost any pace. Beginners typically run around 150 to 170. A low cadence forces a longer stride, which forces the foot to land in front of the body, which produces a braking force every step that stresses the knees and hips. Raising cadence by five to ten percent — often as simple as running to a metronome or a playlist at 175 bpm — shortens the stride automatically, moves the landing under the body, and reduces impact forces by a measurable percentage per step. It is the single highest-return adjustment a runner can make.' },
        { type: 'h2', text: 'Foot landing and the shoe debate' },
        { type: 'p', text: 'The heel-versus-forefoot-landing debate of the 2000s is largely settled. The answer is: it depends. The foot should land under the hip, not far in front of it, and the body\'s weight should pass quickly over the foot without lingering. Which part of the foot first touches the ground matters less than where the foot is when it touches. At race pace most fast runners land on the mid-foot or forefoot because it is biomechanically efficient at speed. At slow recovery pace many elites heel-strike, because overstriding is less dangerous when the forces are low. The "barefoot running" movement of the 2010s turned out to be partly right and partly oversold; shoes matter, but running form matters more.' },
        { type: 'h2', text: 'Posture, and the single word "tall"' },
        { type: 'p', text: 'The single most useful form cue any coach gives is "run tall." Imagine a string pulling up from the crown of the head; feel the rib cage stack over the pelvis; let the arms hang from relaxed shoulders. A runner who runs tall has their center of gravity where it belongs and their whole body aligned for efficient propulsion. A runner who hunches, collapsing the chest and tucking the pelvis, is running against their own skeleton. Running tall is not about chest-puffing or military posture. It is about allowing the spine to stack without slumping. One cue. Repeated every mile. Changes a career.' },
        { type: 'h2', text: 'How form is actually changed' },
        { type: 'p', text: 'Form drills — A-skips, B-skips, high knees, butt kicks, strides — exaggerate the movements of good running and let the body learn them in isolation. Two or three times a week, a set of four drills for fifteen minutes, for a few months, rewires the running stride more reliably than any amount of "try to run better" self-talk. Jay Johnson\'s runners do them. Shalane Flanagan\'s runners do them. They do not look glamorous in the park. They work. The other reliable form-builder is strides — four to six relaxed twenty-second sprints at the end of an easy run, once or twice a week, focusing on posture and cadence. Runners who do strides consistently look and feel different within a month.' },
        { type: 'callout', text: 'First month: run four days a week. Two miles the first two weeks, three miles the second two. Use a metronome app set to 175 bpm and try to land with the beat. At the end of every easy run, do four twenty-second strides on a flat stretch of grass, focusing on running tall. No speed work. No hills. Go easy enough that you could hold a conversation the whole way. After thirty days, the body has the foundation it needs to start actually training.' },
      ],

      keyTerms: ['cadence', 'stride length', 'mid-foot strike', 'fore-foot strike', 'heel strike', 'overstriding', 'ground contact time', 'posture', 'arm swing', 'A-skip', 'strides', 'form drill'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@StrengthRunning',
            title: 'Strength Running — Jason Fitzgerald on form and training',
            channel: 'Strength Running',
            duration: 'variable',
            featured: true,
            why: 'Jason Fitzgerald is a running coach who writes and films with a therapist\'s eye for form and a coach\'s sense for training. The best free running channel for injury-aware technique work.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TheRunningChannel',
            title: 'The Running Channel — UK-based training and race coverage',
            channel: 'The Running Channel',
            duration: 'variable',
            featured: true,
            why: 'A well-funded UK running team with four working coaches on camera. Technique, training, shoe reviews, and long-form conversations with elites.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@NicholasBareFitness',
            title: 'Nick Bare — running form and endurance training',
            channel: 'Nick Bare',
            duration: 'variable',
            featured: true,
            why: 'An American hybrid athlete whose running form content is unusually clear for a beginner. Paced progression from an honest non-elite starting point.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@runningwarehouse',
            title: 'Running Warehouse — shoe reviews and form content',
            channel: 'Running Warehouse',
            duration: 'variable',
            featured: false,
            why: 'Thomas Neuberger and the Running Warehouse team produce the best shoe-review content online, plus solid form analysis tied to the shoes they review.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@NN_RunningTeam',
            title: 'NN Running Team — Kipchoge and friends',
            channel: 'NN Running Team',
            duration: 'variable',
            featured: false,
            why: 'The Kenyan and Ethiopian squad that produced Eliud Kipchoge\'s sub-2:00 marathon attempt. Long-form documentaries on training and form from the best distance runners alive.',
          },
        ],
        books: [
          {
            title: 'Daniels\' Running Formula',
            author: 'Jack Daniels',
            year: 1998,
            url: 'https://us.humankinetics.com/products/daniels-running-formula-4th-edition',
            why: 'The most cited training textbook in running, now in its fourth edition. Daniels is the exercise physiologist who invented the VDOT tables; his work underpins most modern plans.',
          },
          {
            title: 'Born to Run',
            author: 'Christopher McDougall',
            year: 2009,
            url: 'https://www.penguinrandomhouse.com/books/105053/born-to-run-by-christopher-mcdougall/',
            why: 'The book that launched the barefoot running movement and introduced the Tarahumara runners to the world. Reads like a thriller. Scientifically uneven but culturally essential.',
          },
          {
            title: 'Anatomy for Runners',
            author: 'Jay Dicharry',
            year: 2012,
            url: 'https://www.skyhorsepublishing.com/9781616083298/anatomy-for-runners/',
            why: 'Physical therapist Jay Dicharry\'s applied-anatomy book for runners. The best modern resource for form and injury prevention.',
          },
          {
            title: 'Advanced Marathoning',
            author: 'Pete Pfitzinger, Scott Douglas',
            year: 2019,
            url: 'https://us.humankinetics.com/products/advanced-marathoning-3rd-edition',
            why: 'The plan book a generation of serious American marathoners trained from. Pfitzinger\'s 18-week and 12-week plans are still widely used.',
          },
          {
            title: 'Once a Runner',
            author: 'John L. Parker Jr.',
            year: 1978,
            url: 'https://www.simonandschuster.com/books/Once-a-Runner/John-L-Parker-Jr/9781416597889',
            why: 'The great American running novel. Not a training book, but a better explanation than any training book of why runners keep running.',
          },
        ],
        articles: [
          {
            title: 'Running',
            source: 'Britannica',
            url: 'https://www.britannica.com/sports/running',
            why: 'Survey of the modern sport, its history, and the distinction between distance and sprint events.',
            year: null,
          },
          {
            title: 'Running economy',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Running_economy',
            why: 'The technical concept behind good running form. Essential vocabulary for serious students.',
            year: null,
          },
          {
            title: 'Endurance running hypothesis',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Endurance_running_hypothesis',
            why: 'The evolutionary argument that humans are built for long-distance running. Dennis Bramble and Daniel Lieberman\'s 2004 paper launched the field.',
            year: null,
          },
          {
            title: 'Dennis Bramble and Daniel Lieberman, "Endurance running and the evolution of Homo" (Nature, 2004)',
            source: 'Nature',
            url: 'https://www.nature.com/articles/nature03052',
            why: 'The primary paper. Evolutionary biology of human running — why our feet, hearts, and sweat glands are the way they are.',
            year: 2004,
          },
        ],
        courses: [
          {
            title: 'Couch to 5K',
            provider: 'NHS (UK National Health Service)',
            url: 'https://www.nhs.uk/live-well/exercise/running-and-aerobic-exercises/get-running-with-couch-to-5k/',
            free: true,
            why: 'The free NHS beginners\' program. Nine weeks, three runs a week, from nothing to a 5K. The safest on-ramp into running.',
          },
          {
            title: 'Road Runners Club of America coaching certification',
            provider: 'RRCA',
            url: 'https://www.rrca.org/coaches/',
            free: false,
            why: 'The standard American running coach certification. Useful framing for anyone who wants to understand how modern run-coaching is structured.',
          },
        ],
        podcasts: [
          {
            title: 'The Running Effect podcast',
            show: 'Dominic Schlueter',
            url: 'https://therunningeffectpodcast.com/',
            duration: 'variable',
            why: 'Long-form interviews with coaches, elites, and researchers. Substantive running conversation that respects the craft.',
          },
        ],
        tools: [
          {
            title: 'Garmin Forerunner / Coros Pace',
            url: 'https://www.garmin.com/en-US/c/sports-fitness/running/',
            why: 'The two reference running GPS watches. Cadence, pace, distance, and heart rate — all on the wrist. The standard tool of the modern runner.',
          },
          {
            title: 'Strava',
            url: 'https://www.strava.com/',
            why: 'The running and cycling community\'s social network. A training log, an informal coach, and a way to measure yourself against actual running peers.',
          },
        ],
        primarySources: [
          {
            title: 'Roger Bannister\'s 4-minute mile (1954, BBC footage)',
            url: 'https://en.wikipedia.org/wiki/Roger_Bannister',
            why: 'The canonical moment in distance running. Bannister\'s three-minute-fifty-nine-point-four at Oxford\'s Iffley Road track. Form still visibly efficient seventy years later.',
          },
        ],
      },

      seeAlso: ['training', 'yoga', 'martial'],
      prereqs: [],
      leadsTo: ['training'],

      chapterActivity: 'A weekly Saturday-morning beginner\'s group run at the Prospect Park loop — three miles at conversation pace, pace leaders who hold the group together, coffee after.',

      sources: [
        'https://en.wikipedia.org/wiki/Running_economy',
        'https://en.wikipedia.org/wiki/Endurance_running_hypothesis',
        'https://www.britannica.com/sports/running',
      ],
      verifiedAt: '2026-04-23',
    },

    training: {
      id: 'training',
      name: 'Training Plans',
      level: 'Intermediate',
      dek: 'Easy, tempo, long — three kinds of run in varying proportions over a careful buildup.',
      readTime: '13 min',

      sections: ['The simple idea behind every plan', 'The three kinds of run', 'Mileage builds slowly', 'The taper', 'Race day'],
      body: [
        { type: 'lead', text: 'Arthur Lydiard, a New Zealand milk-truck driver who coached himself to a 2:54 marathon and then took a generation of Kiwi runners to Olympic medals in the 1960s, preached one idea: most running should be easy, and only a small fraction should be hard. A half-century later the idea has been confirmed in exercise physiology labs, rebadged as "polarized training," and adopted by nearly every serious distance runner. Eighty percent of Eliud Kipchoge\'s mileage is easy. Eighty percent of the mileage of every top marathoner is easy. A runner who trains hard all the time does not improve faster. They just break down faster.' },
        { type: 'h2', text: 'The simple idea behind every plan' },
        { type: 'p', text: 'A running plan is a schedule of runs that progresses mileage, introduces quality gradually, and arrives at a goal race in peak form. The underlying logic is simple. Easy aerobic running builds the cardiovascular base that lets the body use oxygen efficiently and clears out fatigue. Harder workouts — tempo runs, intervals — improve the body\'s ability to run at higher effort without blowing up. Long runs build the specific durability to hold pace for race distance. A plan combines all three in the right proportions. A bad plan does too much quality, not enough base, or too little recovery. Almost every running injury of a healthy person comes from one of those three errors.' },
        { type: 'h2', text: 'The three kinds of run' },
        { type: 'p', text: 'Easy runs should be slow. The cardiovascular system adapts best to long, low-intensity stress, and easy runs should actually feel easy — a conversational pace where a full sentence can be spoken without gasping. Tempo runs, sometimes called threshold runs, are sustained efforts at "comfortably hard" pace — about what you could hold for an hour of racing — usually twenty to forty minutes after a warmup. They train the lactate-threshold system. Interval workouts alternate hard efforts with recovery — 6×800m at 5K pace with 400m jog, for instance — and train the VO2max and neuromuscular systems. Most plans use all three, in something like a 4:1 ratio of easy to hard mileage.' },
        { type: 'h2', text: 'Mileage builds slowly' },
        { type: 'p', text: 'The ten-percent rule — increase weekly mileage by no more than ten percent per week — is approximate and widely cited. A more careful approach is to build for three weeks and recover for one, repeating the cycle. Twenty miles a week becomes 22 becomes 24 becomes 20 (cutback) becomes 26 becomes 28 and so on. This block-and-cutback pattern lets the body adapt without the cumulative stress that causes running injuries. A runner who tries to double mileage in two months will fracture a foot. A runner who builds patiently over a year will arrive at race day fit, intact, and under-trained enough to still have something to give.' },
        { type: 'h2', text: 'The taper' },
        { type: 'p', text: 'The final two or three weeks before a goal race are the taper — mileage drops by thirty to fifty percent while the intensity of key workouts is preserved. The body needs time to absorb the training. A runner who does full mileage the week before a marathon runs the race exhausted; a runner who tapers arrives rested, rebuilt, and carrying the full fitness the training produced. Tapers feel strange — the runner usually feels sluggish, anxious, and convinced they are losing fitness. They are not. Trust the taper. The race proves it.' },
        { type: 'h2', text: 'Race day' },
        { type: 'p', text: 'Start too slow. The most common race-day mistake is going out at an adrenaline-fueled pace the body cannot sustain. A 5K runs ten to twenty seconds per mile slower in the first mile than the second. A marathon runs thirty seconds per mile slower in the first three miles than the second three. A runner who follows this rule and keeps their first miles unambitious will be passing people for the last half of every race they ever run. A runner who goes out hard will get passed for the last half of every race they ever run. The pattern is so reliable it reads like a law of nature. It is, in practice, a law of racing.' },
        { type: 'callout', text: 'First plan: Hal Higdon Novice 1 or the NHS Couch-to-5K. Twelve to twenty weeks. Three to four runs a week. One long run on Saturday. One "quality" session midweek if you are ready. No heroics. Finish the plan. Run the race. Repeat, at the next distance up, six months later.' },
        { type: 'quote', text: 'Train slow to race fast.', cite: 'Arthur Lydiard' },
      ],

      keyTerms: ['aerobic base', 'easy pace', 'tempo run', 'lactate threshold', 'interval workout', 'VO2max', 'long run', 'mileage', 'taper', 'periodization', 'polarized training', 'strides'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@StrengthRunning',
            title: 'Strength Running — Jason Fitzgerald\'s training and injury channel',
            channel: 'Strength Running',
            duration: 'variable',
            featured: true,
            why: 'The most consistent serious-amateur running channel on the internet. Jason Fitzgerald\'s training podcasts and YouTube explainers hold together as a real curriculum.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@TheRunningChannel',
            title: 'The Running Channel — plans, shoe reviews, elite interviews',
            channel: 'The Running Channel',
            duration: 'variable',
            featured: true,
            why: 'UK-based, well-produced, serious. Good for anyone training for a first marathon or half.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@FloydBerger',
            title: 'Floris Gierman — Extramilest podcast',
            channel: 'Floris Gierman',
            duration: 'variable',
            featured: true,
            why: 'Floris Gierman\'s long-form interviews with runners, coaches, and researchers. Particularly good on low-heart-rate training and MAF training.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@NN_RunningTeam',
            title: 'NN Running Team — Kipchoge, Kiplimo, Hassan',
            channel: 'NN Running Team',
            duration: 'variable',
            featured: false,
            why: 'Documentary and training footage from the world\'s best distance squad. Watch easy days at Iten, Kenya; they are slower than you think.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@GoSteveGo',
            title: 'Steve Magness — The Science of Running',
            channel: 'Steve Magness',
            duration: 'variable',
            featured: false,
            why: 'Former elite and current coach. Magness\'s channel and writing translate exercise-physiology research into actionable training decisions.',
          },
        ],
        books: [
          {
            title: 'Daniels\' Running Formula',
            author: 'Jack Daniels',
            year: 1998,
            url: 'https://us.humankinetics.com/products/daniels-running-formula-4th-edition',
            why: 'The standard training book. VDOT tables, pacing formulas, and plans from 1500m to marathon. Every serious American runner has consulted it.',
          },
          {
            title: 'Advanced Marathoning',
            author: 'Pete Pfitzinger, Scott Douglas',
            year: 2019,
            url: 'https://us.humankinetics.com/products/advanced-marathoning-3rd-edition',
            why: 'The training plan of choice for the serious amateur marathoner. Eighteen and twelve-week plans that actually produce the results they promise.',
          },
          {
            title: 'The Lydiard Running Method',
            author: 'Arthur Lydiard, Garth Gilmour',
            year: 1978,
            url: 'https://www.worldcat.org/title/run-the-lydiard-way/oclc/3919834',
            why: 'The foundational training book of the modern era. Still the cleanest articulation of why easy running matters.',
          },
          {
            title: 'Running with the Kenyans',
            author: 'Adharanand Finn',
            year: 2012,
            url: 'https://www.penguinrandomhouse.com/books/213930/running-with-the-kenyans-by-adharanand-finn/',
            why: 'Adharanand Finn spent six months living in Iten, Kenya, training with the world\'s best distance runners. The most vivid account of what easy-and-hard actually looks like in practice.',
          },
          {
            title: 'How Bad Do You Want It?',
            author: 'Matt Fitzgerald',
            year: 2015,
            url: 'https://www.penguinrandomhouse.com/books/531810/how-bad-do-you-want-it-by-matt-fitzgerald/',
            why: 'Matt Fitzgerald on the psychology of endurance performance. A good companion to the physiology-heavy texts.',
          },
        ],
        articles: [
          {
            title: 'VO2max',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/VO2_max',
            why: 'The technical background for understanding interval training. Essential vocabulary.',
            year: null,
          },
          {
            title: 'Lactate threshold',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Lactate_threshold',
            why: 'The concept behind tempo runs. Important grounding for anyone following a Pfitzinger or Daniels plan.',
            year: null,
          },
          {
            title: 'Training periodization',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Sports_periodization',
            why: 'The sports-science concept behind all modern training plans. A good reference for the block-and-cutback pattern every plan uses.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Hal Higdon training plans (free)',
            provider: 'Hal Higdon',
            url: 'https://www.halhigdon.com/training-programs/',
            free: true,
            why: 'Hal Higdon\'s free plans for every distance, from 5K to marathon, beginner through advanced. Probably the most-followed free plans in America.',
          },
          {
            title: 'Road Runners Club of America programs',
            provider: 'RRCA',
            url: 'https://www.rrca.org/education/',
            free: false,
            why: 'Formal coaching education, and listings for certified coaches by city. The legitimate path into training-plan literacy.',
          },
        ],
        tools: [
          {
            title: 'Strava',
            url: 'https://www.strava.com/',
            why: 'The standard training log and social network for runners. Essential for logging work and comparing.',
          },
          {
            title: 'Final Surge / TrainingPeaks',
            url: 'https://www.trainingpeaks.com/',
            why: 'Professional training-log platforms used by serious amateurs and their coaches to plan, track, and analyze training.',
          },
        ],
        primarySources: [
          {
            title: 'Kipchoge\'s Berlin Marathon world record (2022)',
            url: 'https://en.wikipedia.org/wiki/2022_Berlin_Marathon',
            why: 'Eliud Kipchoge\'s 2:01:09 in Berlin. The most studied marathon performance in history. Watch for the even splits — the training plan, rendered.',
          },
        ],
      },

      seeAlso: ['form', 'yoga', 'martial'],
      prereqs: ['form'],
      leadsTo: [],

      chapterActivity: 'A "long run Sunday" meetup in Central Park — eight miles along the park\'s bridle path at an easy conversational pace, split into groups by expected pace, brunch after.',

      sources: [
        'https://en.wikipedia.org/wiki/VO2_max',
        'https://en.wikipedia.org/wiki/Lactate_threshold',
        'https://en.wikipedia.org/wiki/Sports_periodization',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
