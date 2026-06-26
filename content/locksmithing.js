// content/locksmithing.js
// Batch: B08-trades-II
// Last updated: 2026-04-23 by Session B08 (scaffolding pass)

window.CONTENT = window.CONTENT || {};
window.CONTENT.locksmithing = {
  subjectId: 'locksmithing',
  version: 3,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B08-trades-II',
  topics: {

    pin_tumbler: {
      id: 'pin_tumbler',
      name: 'Pin-Tumbler Locks',
      level: 'Beginner',
      dek: 'The four-thousand-year-old idea that still keeps almost every door in the world shut.',
      readTime: '17 min',

      sections: ['An idea out of Egypt', 'The modern Yale', 'How the key speaks to the plug', 'Security pins and the arms race', 'Where it fails', 'How to think about it', 'Work through one', 'Try these', 'When it goes wrong', 'What to try next'],
      body: [
        { type: 'lead', text: 'The oldest known lock, found in the ruins of the Assyrian palace at Khorsabad, is about four thousand years old and made of wood. A bolt slid across a door; wooden pins dropped into holes in the bolt from a fixed crosspiece above, jamming it in place; a long wooden key raised the pins just enough to let the bolt slide free. Every pin-tumbler lock on your door today is a direct descendant. The metal is harder. The idea is the same.' },
        { type: 'h2', text: 'An idea out of Egypt' },
        { type: 'p', text: 'The Egyptian lock, as the ancient design is now called, was a public marvel. Homer mentions a lock of this type in the Odyssey. Roman craftsmen miniaturized it, working in bronze and iron. For twenty centuries the idea sat more or less unchanged — an elegant but laborious mechanism for the wealthy. Then in 1848 a locksmith in Newport, New York, named Linus Yale Sr. patented a compact cylindrical version, and in 1861 his son, also Linus, patented the flat serrated key we all carry today. The Yale cylinder became the world standard inside a generation.' },
        { type: 'h2', text: 'The modern Yale' },
        { type: 'p', text: 'A modern pin-tumbler cylinder is a small work of precision. Inside the outer housing sits a rotating plug. Five or six vertical holes pass through both, each containing a spring, a driver pin, and a key pin. With no key in the lock, the driver pins straddle the shear line between plug and housing, locking the plug in place. When the correct key is inserted, the cut depths along the key raise each key pin by exactly the amount needed to bring the top of the key pin flush with the shear line. Now nothing spans the gap. The plug turns freely.' },
        { type: 'h2', text: 'How the key speaks to the plug' },
        { type: 'p', text: 'Every cut depth on the key corresponds to a position on the blade. The peaks and valleys are the key\'s code, and a well-cut key sets every pin to within a few thousandths of an inch of the shear line — close enough that the tiny mechanical play in the plug absorbs the rest. The tolerances are what make the lock hard to defeat and what make a slightly worn key stop working after a decade of pocket jostling.' },
        { type: 'h2', text: 'Security pins and the arms race' },
        { type: 'p', text: 'Modern security cylinders fight picking with shaped pins. A spool pin has a narrow waist; a serrated pin has teeth; a mushroom pin has a wide head. All of them give a false signal of setting before they actually set — the picker hears a click, lets up tension, and the pin drops back. Combined with sidebars, sliders, and interlocking discs, a high-security cylinder from Medeco, Abloy, or EVVA is genuinely hard to pick even for professionals. The price reflects that. For most doors, it does not matter.' },
        { type: 'h2', text: 'Where the pin tumbler fails' },
        { type: 'p', text: 'The pin-tumbler lock is remarkable, but not mysterious. Because each pin is set independently, they can be set independently by a patient attacker with a tension tool and a pick. Manufacturing imperfection means one pin always binds first, then the next. This is the basis of almost all lockpicking. High-security cylinders defend against picking by adding sidebars, sliders, magnetic elements, or interactive side pins — features whose only purpose is to make a simple mechanism no longer behave simply.' },
        { type: 'callout', text: 'A standard five-pin residential cylinder gives about a hundred thousand possible combinations. In a building with three hundred apartments, master-keying reduces effective variety enough that keys can accidentally cross-open doors. High-rise locksmiths treat this as a core concern, not a curiosity.' },
        { type: 'quote', text: 'The man who invented the Yale lock has earned his place among the great benefactors of mankind.', cite: 'Harper\'s Weekly, 1870' },

        { type: 'h2', text: 'How to think about it' },
        { type: 'p', text: 'A pin tumbler is a row of small standing dominoes, each one a different height. The key is a ruler whose jagged edge brings every domino to exactly the same top. When the tops line up with the line between the rotating plug and the fixed housing — the shear line — nothing is spanning the gap and the plug turns. Miss any one domino by a thousandth of an inch and it blocks the turn. The whole security of the design rests on the precision of the pin-to-cut-depth match.' },
        { type: 'h2', text: 'Work through one' },
        { type: 'p', text: 'A locksmith is called to rekey a Kwikset SmartKey cylinder in a rental apartment. She inserts the master reset key, rotates it a quarter turn, pulls the old key, inserts the new key, rotates it back. Five seconds. The cylinder is now coded to the new key. If she had to rekey a standard Kwikset pin cylinder instead: pull the door knob, push out the cylinder, remove the clip that retains the plug, push the plug out with a follower (to keep the top pins and springs contained), dump the old key pins from the plug, insert the new key, drop in new key pins sized to match the new bitting per the Kwikset pinning chart, slide the plug back in, verify rotation. Fifteen minutes for a trained hand.' },
        { type: 'h2', text: 'Try these' },
        { type: 'p', text: 'First: buy a transparent practice cylinder (twenty dollars) and look at the pins lift and set when the correct key is inserted. Doing this once replaces an hour of reading. Second: take an old Schlage or Kwikset lock apart. Remove the retaining clip, push the plug out with a follower (a wooden dowel sized to the bore), and examine the pin stacks. Note how pins and springs launch if you tilt the cylinder — this is why every locksmith carries a follower. Third: measure one key pin with a micrometer. Residential pins come in nine standard heights (Kwikset uses 0–6, Schlage 0–9), spaced 0.015" apart. This tiny grid is the whole basis of lock coding.' },
        { type: 'h2', text: 'When it goes wrong' },
        { type: 'p', text: 'A lock that will not turn with the correct key is almost always a binding pin set wrong — usually a key pin installed in place of a driver pin or vice versa. A key that enters but will not withdraw is a mushroom pin caught sideways (forcing will bend the key; tap the face of the lock gently and the pins free). A lock that turns but will not latch has a misaligned strike plate, a bent latch, or a door out of plumb; the cylinder is not the problem. A high-security lock you cannot identify before disassembly — call the manufacturer and ask for the keying chart, or decline the job.' },
        { type: 'h2', text: 'What to try next' },
        { type: 'p', text: 'Past simple rekeying, the next rungs are reading a key with an optical decoder (deriving the cut depths without the bitting chart), cutting keys on a code machine (typing the bitting and the machine grinds the key), master-keying a building (assigning keys that unlock overlapping sets of locks), and working on high-security cylinders with sidebars, sliders, or magnetic elements. Certified Master Locksmith is the professional credential; most locksmiths never test for it, but the syllabus is a good roadmap. Picking and bypass (the next topic) live on a parallel track.' },
      ],

      keyTerms: ['driver pin', 'key pin', 'shear line', 'plug', 'cylinder', 'bitting', 'master key', 'keyway', 'security pin', 'sidebar'],

      scaffolding: {
        mentalModel: {
          analogy: 'A pin tumbler is a barrel of standing dominoes, each a different height. The key is a jagged ruler that brings every domino to the same top — right at the shear line between the rotating plug and the fixed housing. Any pin too tall or too short blocks the turn.',
          whereItBreaks: 'The analogy fails for disc-detainer locks (Abloy Protec, Medeco m3) where the pins are replaced by rotating discs, and for electronic locks where the "key" is a code, not a shape. The mental model also downplays how much security comes from the tolerances themselves — a well-machined cylinder is harder to pick than a poorly machined one with the same design.',
        },
        workedExample: {
          prompt: 'Rekey a standard Kwikset KW1 pin cylinder to a new key.',
          scenario: 'The old key works; the new key is a factory blank cut to the new bitting.',
          steps: [
            { step: 'Remove the cylinder from the doorknob; retain the clip that holds the plug.', why: 'Cylinder must be out of the door to access the pin chambers.' },
            { step: 'Insert the old key; rotate the plug to align the shear line.', why: 'With plug rotated, the top pins are isolated above in the housing.' },
            { step: 'Use a follower to push the plug out from the back.', why: 'The follower keeps the top pins and springs trapped in the housing as the plug slides out. Without a follower, everything explodes across the workbench.' },
            { step: 'Dump the old key pins from the plug; insert the new key.', why: 'New key\'s bitting determines which new key pins fit.' },
            { step: 'Consult Kwikset pinning chart: each cut depth has a matching pin number (0.165" for a 1 cut, 0.180" for a 2, etc.).', why: 'Match pin height to cut depth so the top of each key pin sits at the shear line with the new key in.' },
            { step: 'Drop new key pins into plug; slide plug back into housing; push follower out with plug; re-clip.', why: 'Reassembly in reverse; follower exits as plug enters.' },
            { step: 'Test both the new key (should turn) and the old key (should not).', why: 'Verification.' },
          ],
          result: 'Cylinder rekeyed to the new bitting. Ten to fifteen minutes for a first-timer, three minutes for a locksmith.',
        },
        exercises: [
          {
            level: 'beginner',
            prompt: 'Look at a door key under good light. Count the cuts (peaks and valleys) along the blade. What do the cuts tell you?',
            hint: 'Each cut corresponds to one pin in the lock.',
            solution: 'Most residential keys have five cuts; some have six. Each cut depth matches one pin\'s required lift height. A key with five cuts fits a five-pin cylinder. You can also look at the bow (the flat end) for a manufacturer stamp: KW1 (Kwikset), SC1 (Schlage), WR5 (Weiser). Each keyway is incompatible with the others.',
          },
          {
            level: 'beginner',
            prompt: 'Take an inexpensive padlock apart. You will need a screwdriver and a pair of pliers. What does the pin stack look like compared to the diagram?',
            hint: 'Some padlocks have two screws on the back; others crimp the housing and must be drilled open. Pick one with screws.',
            solution: 'Inside you will find: a plug with pin chambers, key pins (different heights) in the plug, driver pins (all the same height, usually) in the housing, springs pressing down from above. Fire the springs and key pins into a small container; they are tiny and easy to lose. The structure should match the standard pin-tumbler diagram exactly.',
          },
          {
            level: 'intermediate',
            prompt: 'A Kwikset cylinder is binding — the correct key turns stiffly, scraping as it goes. The lock was rekeyed last week. What went wrong?',
            hint: 'Something in the pin stack is either too tall or too short.',
            solution: 'Most likely causes: a key pin installed in the wrong chamber (heights mixed up during rekey); a burr on a key pin scraping the chamber; a driver pin flipped upside-down so its flat side is up and its chamfered side engages the shear line. Pull the plug, dump the pins, and re-pin matching the bitting chart. Verify each pin height against a pin caliper.',
          },
          {
            level: 'intermediate',
            prompt: 'How does a master-keyed building work? If a floor has ten doors, each with its own unique key, plus a single master key that opens all ten, what is going on inside each lock?',
            hint: 'Two shear lines per chamber.',
            solution: 'Each pin chamber in a master-keyed lock has an extra segment — a "master pin" — between the key pin and the driver pin. Now there are two possible shear-line positions in each chamber: one matches the unique apartment key, the other matches the master. The master key is cut to the combined cuts that align every chamber\'s master shear line. The downside: more pin segments mean more valid key combinations per lock, and master-keyed systems are dramatically easier to decode or pick.',
          },
          {
            level: 'advanced',
            prompt: 'A customer wants a hundred-unit building master-keyed with three levels — sub-masters for floors, a grandmaster for the building, and apartment keys per unit. What is the main security caveat you must explain?',
            hint: 'Master-keying multiplies the number of working keys in each lock.',
            solution: 'In a three-level system, each lock has master pins in every chamber. A determined attacker with access to one apartment key can "decode" the master by systematically picking off individual pins to a different height and testing which new bitting opens more doors — a process called privilege escalation. Deviant Ollam\'s book "Keys to the Kingdom" documents this in detail. The ethical response: explain the tradeoff, propose high-security cylinders with sidebars that resist decoding, or recommend electronic access as an alternative.',
          },
        ],
        troubleshooting: [
          { symptom: 'Correct key enters but will not turn', likelyCauses: ['Pin installed wrong after rekey', 'Dirty keyway', 'Frozen lubricant', 'Wrong key'], quickTest: 'Try a duplicate key; puff graphite into the keyway.', fix: 'Graphite (not oil) lubricates. If still binding, pull the cylinder and verify pinning.' },
          { symptom: 'Key turns halfway and stops', likelyCauses: ['Loose retaining clip', 'Worn cam', 'Latch not retracting'], quickTest: 'Remove the cylinder; rotate with the key out of the door.', fix: 'Re-seat the clip; replace the cam or latch.' },
          { symptom: 'Key will not come out', likelyCauses: ['Mushroom pin caught sideways', 'Worn tumbler spring', 'Key inserted with plug rotated'], quickTest: 'Jiggle the key gently while applying light inward pressure.', fix: 'Rotate the key to the neutral position before withdrawing. If still stuck, tap the cylinder face gently.' },
          { symptom: 'Lock turns but door will not open', likelyCauses: ['Strike plate misaligned', 'Deadbolt frozen'], quickTest: 'With door open, cycle the bolt with the key.', fix: 'Re-align strike plate; grease the bolt.' },
          { symptom: 'Key wears out quickly', likelyCauses: ['Soft brass keys vs. worn cylinder', 'Burrs in the keyway'], quickTest: 'Inspect the cylinder interior with a flashlight.', fix: 'Deburr the keyway; use factory nickel silver key blanks, not brass.' },
          { symptom: 'Multiple keys unexpectedly cross-open', likelyCauses: ['Master-keying error', 'Pins too similar between chambers'], quickTest: 'Review the master key code sheet.', fix: 'Re-pin to a new bitting that maximizes chamber differences.' },
          { symptom: 'Cylinder spins without engaging the cam', likelyCauses: ['Retaining clip fallen off', 'Worn tailpiece'], quickTest: 'Remove cylinder and inspect.', fix: 'Replace clip or tailpiece.' },
        ],
        progression: [
          { level: 'novice', canDo: 'Identify a keyway, count cuts on a key, disassemble a practice lock, name the parts.', shouldNext: 'Rekey a simple Kwikset or Schlage cylinder with factory pinning kits.' },
          { level: 'apprentice', canDo: 'Rekey residential locks; install a deadbolt; replace a strike plate.', shouldNext: 'Master-keying; key cutting by code; reading keys on the fly.' },
          { level: 'journeyman', canDo: 'Design master-key systems; service high-security cylinders; open customer lockouts without damage.', shouldNext: 'Certified Registered Locksmith (CRL) or Certified Master Locksmith (CML).' },
        ],
        glossary: [
          { term: 'Shear line', def: 'The geometric line between the rotating plug and the fixed housing. When every pin is at the shear line, the plug can turn.' },
          { term: 'Bitting', def: 'The sequence of cut depths on a key, usually written as digits (e.g., "34125" for a five-pin Kwikset).' },
          { term: 'Keyway', def: 'The shaped slot in the plug that accepts only its matching key blank. Different manufacturers use different keyways.' },
          { term: 'Follower', def: 'A cylindrical dowel used to push a plug out of its housing while keeping the top pins and springs trapped.' },
          { term: 'Rekey', def: 'To change the pinning of a lock so that a different key operates it. Does not require replacing the whole lock.' },
          { term: 'Master key', def: 'A key that opens multiple locks in a system, each of which also has its own unique change key.' },
          { term: 'Security pin', def: 'A non-cylindrical pin — spool, serrated, mushroom — that provides false feedback under picking and is harder to defeat.' },
        ],
      },

      resources: {
        videos: [
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@LockPickingLawyer', title: 'LockPickingLawyer — pin-tumbler teardowns', channel: 'LockPickingLawyer', duration: 'variable', kind: 'tutorial', why: 'The most-watched lock channel on YouTube. His cutaway-cylinder videos are the clearest look at how the mechanism actually works.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@BosnianBill', title: 'BosnianBill — Lock Picking for Beginners (playlist)', channel: 'BosnianBill', duration: 'variable', kind: 'tutorial', why: 'A retired army officer with a careful teacher\'s patience. His beginner playlist is the standard on-ramp in the locksport community.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@HelpfulLockPicker', title: 'Helpful Lockpicker — how a pin tumbler lock works', channel: 'Helpful Lockpicker', duration: 'variable', kind: 'tutorial', why: 'Short, animated, entry-level. The first ten minutes most people watch before buying their first practice lock.' },
          { id: 'Waw11zhaKSk', source: 'youtube', url: 'https://www.youtube.com/watch?v=Waw11zhaKSk', title: 'Safe Cracking with Feynman', channel: 'Numberphile', duration: '11:16', kind: 'documentary', why: 'The story of Feynman at Los Alamos, told by a mathematician who worked with him. Context for anyone who thinks this is a new hobby.', collapsed: true },
          { id: 'IQ6QzsRKpQU', source: 'youtube', url: 'https://www.youtube.com/watch?v=IQ6QzsRKpQU', title: 'DEF CON 13 — Introduction to Lockpicking and Physical Security', channel: 'Deviant Ollam', duration: '44:00', kind: 'lecture', why: 'Deviant Ollam\'s introductory DEF CON talk. The single best free lecture on how locks actually work.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@McNallyOfficial', title: 'McNally — impressioning and high-security work', channel: 'McNally Official', duration: 'variable', kind: 'tutorial', why: 'Jos Weyers is a multi-time world champion impressioner. His technique videos are the reference for the art of making a working key from a blank.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@StuffMadeHere', title: 'Stuff Made Here — unpickable lock challenge', channel: 'Stuff Made Here', duration: 'variable', kind: 'documentary', why: 'Shane Wighton tried to build a lock even the LockPickingLawyer couldn\'t open. The sequence is an unusually good explanation of why making locks is hard.', collapsed: true },
        ],
        books: [
          { title: 'The MIT Guide to Lock Picking', author: 'Ted the Tool', year: 1991, url: 'https://archive.org/details/mit-guide-to-lock-picking-v05/mode/2up', why: 'A twenty-eight-page classic from the MIT hacker community, freely hosted by the Internet Archive. Still the cleanest theoretical introduction in print.' },
          { title: 'The Complete Guide to Lock Picking', author: 'Eddie the Wire', year: 1981, url: 'https://archive.org/details/the-complete-guide-to-lockpicking', why: 'A 1981 Loompanics title, freely available on the Internet Archive. Unsentimental, technically rigorous, and the first book most serious hobbyists buy.' },
          { title: 'Practical Lock Picking: A Physical Penetration Tester\'s Training Guide', author: 'Deviant Ollam', year: 2012, url: 'https://www.sciencedirect.com/book/9781597499897/practical-lock-picking', why: 'The Syngress Press textbook by the founder of TOOOL-US. Written for penetration testers; remains the gold-standard modern textbook.' },
          { title: 'Keys to the Kingdom: Impressioning, Privilege Escalation, Bumping, and Other Key-Based Attacks', author: 'Deviant Ollam', year: 2012, url: 'https://www.sciencedirect.com/book/9781597499835/keys-to-the-kingdom', why: 'Ollam\'s advanced companion volume on key-based attacks — impressioning, bumping, and master-key decoding.' },
          { title: 'The Locksport Almanac', author: 'Schuyler Towne', year: 2011, url: 'https://www.goodreads.com/book/show/14514253-the-locksport-almanac', why: 'A contemporary survey of lock designs and picking techniques written for the hobbyist movement. Towne is a founder of the US chapter of the Open Organisation of Lockpickers.' },
          { title: 'High-Security Mechanical Locks: An Encyclopedic Reference', author: 'Graham Pulford', year: 2007, url: 'https://shop.elsevier.com/books/high-security-mechanical-locks/pulford/978-0-7506-8437-8', why: 'A thousand-page encyclopedia of every high-security mechanical design in production. The reference used by manufacturers and researchers.' },
        ],
        articles: [
          { title: 'Pin tumbler lock', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Pin_tumbler_lock', why: 'A concise, well-illustrated reference with clear diagrams of pin stacks and the shear line.', year: null },
          { title: 'Lock (security)', source: 'Britannica', url: 'https://www.britannica.com/technology/lock-security', why: 'The editorial long view from Khorsabad through Yale to the modern combination lock. Good for historical framing.', year: null },
          { title: 'Begin pin tumbler', source: 'Lockwiki', url: 'https://www.lockwiki.com/index.php/Begin_pin_tumbler', why: 'The locksport community\'s technical wiki. More depth than Wikipedia on specific cylinder designs.', year: null },
          { title: 'Linus Yale Jr.', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Linus_Yale_Jr.', why: 'The inventor who gave us the flat serrated key in 1861. Short, good biography.', year: null },
          { title: 'Lock Museum of America', source: 'Lock Museum of America', url: 'https://www.lockmuseumofamerica.org', why: 'The Terryville, Connecticut museum holds 23,000 locks, Yale\'s original 1865 patent model, and a 4,000-year-old Egyptian pin-tumbler lock. Visit or read the site.', year: null },
        ],
        courses: [
          { title: 'Locksport community forums (open reading)', provider: 'LockLab / Lockpicking subreddits', url: 'https://www.reddit.com/r/lockpicking/', free: true, why: 'The r/lockpicking wiki contains the de facto community curriculum, starting with the "belt" progression of practice locks.' },
          { title: 'TOOOL (The Open Organisation of Lockpickers)', provider: 'TOOOL US', url: 'https://toool.us/', free: true, why: 'The US nonprofit hosts free open meetings in most major cities, including NYC. Beginners welcome, all equipment provided.' },
        ],
        tools: [
          { title: 'Transparent practice cylinder', url: 'https://en.wikipedia.org/wiki/Pin_tumbler_lock', why: 'A twenty-dollar clear-housed training lock is the fastest way to internalize how driver pins and the shear line work. No book substitutes.' },
          { title: 'Peterson Government Steel pick set', url: 'https://www.peterson-locks.com/', why: 'The beginner\'s three-tool set — one hook, one rake, two tension wrenches. Better than the hundred-piece kits sold online.' },
          { title: 'Re-pinning kit (assorted pin lengths)', url: 'https://en.wikipedia.org/wiki/Lock_(security_device)', why: 'Re-pinning your own training cylinder teaches you more about how the mechanism works than a dozen videos.' },
        ],
        primarySources: [
          { title: 'Yale Jr. 1861 patent (USPTO)', url: 'https://patents.google.com/patent/US31278', why: 'The patent for the cylinder lock with a flat key that became the world standard. Short, and worth reading in its own words.' },
          { title: 'Egyptian pin-tumbler lock, Lock Museum of America', url: 'https://www.lockmuseumofamerica.org', why: 'The Terryville museum holds a 4,000-year-old example of the prototype of every modern lock. Preserved primary source.' },
        ],
      },

      seeAlso: ['picking', 'tolerances'],
      prereqs: [],
      leadsTo: ['picking'],
      chapterActivity: 'Monthly TOOOL NYC meetup — the Open Organisation of Lockpickers\' New York chapter runs an open practice night for newcomers.',
      sources: [
        'https://en.wikipedia.org/wiki/Pin_tumbler_lock',
        'https://www.britannica.com/technology/lock-security',
        'https://www.lockmuseumofamerica.org',
        'https://en.wikipedia.org/wiki/Linus_Yale_Jr.',
      ],
      verifiedAt: '2026-04-23',
    },

    picking: {
      id: 'picking',
      name: 'Lock Picking',
      level: 'Intermediate',
      dek: 'A legitimate craft, a competitive sport, and a good way to understand trust itself.',
      readTime: '18 min',

      sections: ['The ethics first', 'Binding order', 'SPP and raking', 'Bumping, impressioning, bypass', 'What the sport teaches', 'How to think about it', 'Work through one', 'Try these', 'When it goes wrong', 'What to try next'],
      body: [
        { type: 'lead', text: 'In 1931, at a physics conference in Copenhagen, a young Richard Feynman opened a safe that belonged to a friend, retrieved the notes inside, and left a thank-you card. Years later, at Los Alamos, he did it again to filing cabinets full of atomic secrets. Feynman was not a thief. He was a locksport avant la lettre — a person who saw locks as puzzles and picked them the way other people do crosswords. That same attitude, half-scientific and half-mischievous, runs through the modern hobby.' },
        { type: 'h2', text: 'The ethics first' },
        { type: 'p', text: 'In most of the United States, owning lock picks is legal for anyone; in about a dozen states, possession with intent to commit a crime is separately prohibited, which is already illegal under other statutes. The universal hobbyist rule is that you pick only locks you own, or locks you have explicit written permission to pick. Locksmiths, competitive pickers, security researchers, and curious amateurs all operate under the same line. The line is not legal minutiae; it is the social contract that keeps the hobby available.' },
        { type: 'h2', text: 'Binding order' },
        { type: 'p', text: 'Picking a pin-tumbler lock exploits a single manufacturing fact: the pin holes are not drilled in perfect alignment. Apply a tiny rotational force to the plug with a tension wrench and one pin will bind before the others — the one whose hole is fractionally offset in the binding direction. Lift that pin to the shear line with a pick and it sets with a faint click. The plug rotates a thousandth of an inch. A new pin now binds. Repeat. After the last pin sets, the plug rotates and the lock opens. This is called single-pin picking, SPP, and it is the closest thing the craft has to a standard technique.' },
        { type: 'h2', text: 'SPP and raking' },
        { type: 'p', text: 'Single-pin picking is precise and slow. Raking is the fast, imprecise alternative — drag a serrated pick across all the pins at once while holding varying tension and hope they happen to all bounce to the shear line at the same moment. On cheap hardware store locks, raking opens things in seconds. On a well-made security lock, it does nothing. Most pickers practice both; the hand that knows raking\'s feel for which pins are set is the same hand that does better SPP.' },
        { type: 'h2', text: 'Bumping, impressioning, bypass' },
        { type: 'p', text: 'Beyond picking there are three other families of attack the serious student learns. Bumping uses a specially cut key struck sharply with a mallet — the shock momentarily launches every driver pin upward, and a tiny amount of tension catches the plug at the instant the driver pins are all above the shear line. Impressioning uses a blank key marked with carbon, inserted, jiggled under tension, and filed along the ridges that come back rubbed — a working key can be produced from a lock in about twenty minutes by a championship impressioner. Bypass skips the plug entirely and attacks some other weak point: a shimmable shackle, an exposed latch, a decorative backplate with screws on the outside. Most burglaries go through bypass; most hobbyists learn picking. The gap is worth thinking about.' },
        { type: 'h2', text: 'What the sport teaches' },
        { type: 'p', text: 'Spend a winter with a few practice locks and a cup of tension wrenches and something changes in how you see the world. You start noticing lock brands. You notice which apartments use dimple keys, which offices use high-security cylinders, which hotels have given up and gone to card readers. You understand that every lock on every door is a negotiation between security, convenience, and price, and that most locks lose. This is not cynicism. It is the same awareness a plumber has about water and a carpenter has about grain. The world becomes a little less magical and a great deal more interesting.' },
        { type: 'quote', text: 'A locked door is a sign that the door deserves to be entered.', cite: 'Attributed, uncertainly, to the locksport community' },
        { type: 'callout', text: 'The beginner\'s kit is short: a short hook pick, a rake, and a top-of-keyway tension wrench. Ten to twenty dollars. The hundred-piece sets sold online teach bad habits; two good tools beat a hundred bad ones.' },

        { type: 'h2', text: 'How to think about it' },
        { type: 'p', text: 'Picking exploits the fact that no lock is built to its ideal. Every cylinder has manufacturing tolerances — a few thousandths of an inch of slop in the pin holes, the plug, the housing. Apply light tension and one pin always binds more than the others; lift that pin, and it sets; the plug rotates microscopically; a new pin binds; repeat. The picker is not overpowering the mechanism. The picker is reading the mechanism one pin at a time, in the order the mechanism itself reveals. The practice is half motor skill, half patience — a good picker opens a lock slower than a thief and more reliably.' },
        { type: 'h2', text: 'Work through one' },
        { type: 'p', text: 'A student sits with a clear practice padlock, a short hook pick, and a top-of-keyway tension wrench. She inserts the wrench into the bottom of the keyway, applies very light tension with her left hand, and begins probing pins with the pick in her right. She finds one pin harder to lift than the others — the binding pin. She lifts it slowly; at the shear line she feels and hears a faint click, and the plug gives her a tiny new rotation, which she maintains with slightly reduced tension. A second pin now binds. Same process. Fourth pin binds, sets; the third — now unloaded — drops below the shear line (she feels it fall); she picks it back up. Five minutes later the plug turns. Her first open is always a surprise; the hundredth is still pleasing.' },
        { type: 'h2', text: 'Try these' },
        { type: 'p', text: 'First: on a clear practice lock, apply tension and look — literally look — at which pin is binding. A clear cylinder teaches binding order in about ten minutes; no amount of reading matches it. Second: practice raking. Insert the rake, pulse tension lightly while dragging the pick in and out with upward pressure, and see how long it takes to open a cheap hardware-store lock. Third: pick the same lock three times in a row using only single-pin picking; the second and third attempts will feel fundamentally different because the binding order stays consistent for a given lock.' },
        { type: 'h2', text: 'When it goes wrong' },
        { type: 'p', text: 'The most common picking failure is too much tension — the pins cannot lift to the shear line because the driver pins are jammed hard against the housing. When you are stuck, relax tension first. The second most common failure is oversetting — lifting a pin past the shear line, so the driver pin falls into the plug and blocks rotation. Release tension briefly and the overset pin will drop; start again. The third is false sets, where a security pin (spool or serrated) gives the feel of a set pin while the plug is not actually at the shear line. On cheap locks, picking feels linear; on security locks, every attempt teaches you to recognize false feedback.' },
        { type: 'h2', text: 'What to try next' },
        { type: 'p', text: 'Past basic SPP on standard cylinders, the next rungs are picking a Kwikset SmartKey (which uses sliders instead of pins), a Medeco cylinder (which has a sidebar and rotating pins), an Abloy Protec (a disc-detainer lock with no pins at all, requiring a wholly different tool and technique). Past picking sit impressioning and bypass, each a separate craft with its own literature. The international championship circuit — LockCon in the Netherlands, the Dutch Open, DEF CON\'s Lockpick Village — are free to watch, low-cost to enter, and a good introduction to where the sport goes.' },
      ],

      keyTerms: ['tension wrench', 'single-pin picking', 'raking', 'binding pin', 'security pin', 'bump key', 'impressioning', 'locksport', 'bypass', 'false set'],

      scaffolding: {
        mentalModel: {
          analogy: 'Picking exploits that no lock is built to its ideal. The picker is not overpowering the mechanism — the picker is reading the mechanism one pin at a time, in the order the mechanism itself reveals under very light tension.',
          whereItBreaks: 'The analogy does not transfer to disc-detainer locks (Abloy) or slider locks (Kwikset SmartKey), where there are no standing pins to set sequentially. Each lock type requires its own technique and tooling.',
        },
        workedExample: {
          prompt: 'Single-pin pick a five-pin standard Master No. 3 padlock using a short hook and a top-of-keyway tension wrench.',
          scenario: 'Clear practice cylinder visible so the student can see what each step does.',
          steps: [
            { step: 'Insert tension wrench into the bottom of the keyway; apply very light rotational tension in the unlock direction.', why: 'Without tension, pins have no binding order. Too much tension jams everything.' },
            { step: 'Insert pick on top; feel each pin from front to back.', why: 'One pin will feel stiffer than the others — the binding pin.' },
            { step: 'Lift the binding pin slowly until it clicks and the plug gives a tiny rotation.', why: 'The click signals the key pin has crossed the shear line; the rotation confirms the set.' },
            { step: 'Maintain slightly reduced tension (the new rotation lets the driver pins settle).', why: 'If you maintain full tension, the next binding pin will bind too hard to lift.' },
            { step: 'Find the next binding pin; lift to set; repeat.', why: 'Pins set one at a time in binding order.' },
            { step: 'After the last pin sets, smoothly increase tension and the plug rotates open.', why: 'The lock opens when all five have set.' },
          ],
          result: 'Lock open in 30 seconds to five minutes depending on experience. On a clear cylinder, the student can watch each pin set and learn the binding order visually.',
        },
        exercises: [
          {
            level: 'beginner',
            prompt: 'On a clear practice cylinder, apply light tension with a wrench and insert a hook pick. Without trying to open the lock, just identify which pin is binding. Can you feel the difference?',
            hint: 'Binding pins resist lifting; free pins bob up and down easily.',
            solution: 'A binding pin feels stiff; a free pin bounces. Light tension reveals only one binder at a time. This single skill — feeling which pin is binding — is half of single-pin picking.',
          },
          {
            level: 'beginner',
            prompt: 'Rake a $5 hardware-store padlock open. Time yourself. Then try three more times. Did your time drop?',
            hint: 'Raking is pulse tension plus fast up-down pick movement.',
            solution: 'A practiced picker rakes a cheap padlock open in under 15 seconds. First attempts may take a minute or fail. Technique: hold tension light, pulse it as you rake, move the pick briskly in and out with upward pressure. Stop raking, test; if it won\'t open, reset tension and repeat.',
          },
          {
            level: 'intermediate',
            prompt: 'You feel a pin set with a crisp click — but the plug rotation is not the expected increment. Then the next pin feels strangely loose. What has probably happened?',
            hint: 'Oversets and false sets both feel like sets.',
            solution: 'You overset a pin: you lifted the key pin past the shear line, and the driver pin fell into the plug. Now the driver pin is the obstacle instead of the key pin. Release tension briefly; the overset pin will drop; start over. Alternatively, the click was a false set on a security pin (spool); in that case, back off tension slightly and push the pin up further.',
          },
          {
            level: 'intermediate',
            prompt: 'Your practice padlock opens on first try with SPP, every time. How do you make it harder for yourself?',
            hint: 'Upgrade to security pins.',
            solution: 'Buy a pinning kit and swap one standard driver pin for a spool pin. Spool pins create false sets — the plug counter-rotates and the pin appears to have set but hasn\'t. You\'ll have to learn to feel the false click and push past it. Work up to all five security pins before moving to a Medeco or high-security cylinder.',
          },
          {
            level: 'advanced',
            prompt: 'You have permission to assess the security of an office space. The door has a standard Schlage Primus cylinder (has a sidebar). What is your attack plan, and what are the realistic outcomes?',
            hint: 'Primus sidebars require specific pick tools; most commercial pentest bypasses skip the cylinder.',
            solution: 'Primus sidebar locks require specialized tools (e.g., Jon King\'s tools) and hours of practice. Realistic attack order for a professional assessment: (1) bypass — check if the latch can be shimmed, loiding opened, or if the strike plate is exposed; (2) impressioning if time allows (20+ minutes of deliberate work, visibility); (3) sidebar picking if all else fails. In a true red-team engagement the expected outcome is not opening the Primus cylinder — it is finding an easier way in (a propped door, an unlocked window, a shim-vulnerable latch). The exercise proves the cylinder is strong; the perimeter around it usually isn\'t.',
          },
        ],
        troubleshooting: [
          { symptom: 'No pin feels like it\'s binding', likelyCauses: ['Too much tension', 'Too little tension', 'Already-set pins blocking feedback'], quickTest: 'Release tension completely; reapply very lightly.', fix: 'Most beginners use too much tension. Try half what you think you need.' },
          { symptom: 'Plug rotates a tiny bit, then stops', likelyCauses: ['False set on a security pin', 'Overset pin'], quickTest: 'Release tension briefly; listen for dropping pins.', fix: 'If pins drop, it was an overset — start again. If no drop, push through the false set with light upward probing.' },
          { symptom: 'Pin feels set but lock won\'t open', likelyCauses: ['Not all pins actually set', 'Tension too heavy', 'Security pins still false-set'], quickTest: 'Count the pins you believe are set; compare to number of chambers.', fix: 'Systematically verify each pin from front to back with the pick; a truly set pin is loose and springy, not stiff.' },
          { symptom: 'Pick slips off pin repeatedly', likelyCauses: ['Wrong pick for keyway', 'Pick tip damaged', 'Grip too tight'], quickTest: 'Inspect pick tip under light.', fix: 'Use a short hook for shallow keyways, deep hook for deeper; replace a chipped pick; hold pick with thumb-and-finger pressure, not fist.' },
          { symptom: 'Tension wrench slips out under tension', likelyCauses: ['Wrench too thin for keyway', 'Wrong profile'], quickTest: 'Test fit the wrench in the keyway without tension.', fix: 'Swap to a wider or differently profiled wrench; bent-tip wrenches grip better than flat.' },
          { symptom: 'Lock opens once then won\'t reopen', likelyCauses: ['Pins reset unevenly', 'Small piece of debris in the cylinder', 'Repinning error'], quickTest: 'Try the correct key — does it still work?', fix: 'If the correct key works, re-try with lighter tension. If the key doesn\'t work, the picking process damaged the cylinder.' },
        ],
        progression: [
          { level: 'novice', canDo: 'Identify parts of a lock; insert tension wrench and pick; rake a cheap padlock open.', shouldNext: 'Work a clear-bodied practice lock using SPP until consistent on five pins.' },
          { level: 'apprentice', canDo: 'SPP standard cylinders; pick security-pin cylinders with patience; open padlocks in under a minute.', shouldNext: 'Learn impressioning, bumping, and shim bypass on shackles.' },
          { level: 'journeyman', canDo: 'Pick high-security cylinders with sidebars or sliders; impress a working key from a lock; teach beginners.', shouldNext: 'Competitive locksport (LockCon, Dutch Open) or commercial physical-security work.' },
        ],
        glossary: [
          { term: 'Tension wrench', def: 'A small L-shaped tool inserted into the bottom (or top) of a keyway to apply rotational force to the plug while the pick works the pins.' },
          { term: 'SPP', def: 'Single-pin picking. Setting each pin individually to the shear line, in binding order.' },
          { term: 'Raking', def: 'Dragging a serrated pick rapidly across all pins at once while pulsing tension, hoping the pins bounce to the shear line simultaneously.' },
          { term: 'False set', def: 'The apparent click of a security pin (spool, serrated) giving partial plug rotation before the true shear line is reached.' },
          { term: 'Impressioning', def: 'The art of producing a working key from a lock by marking a blank and filing where the marks rub.' },
          { term: 'Bumping', def: 'Striking a specially cut key with a mallet to launch driver pins above the shear line for a fraction of a second.' },
          { term: 'Bypass', def: 'Any attack that defeats the lock without engaging the pins — shimmable shackles, exposed latches, drill-out attacks.' },
        ],
      },

      resources: {
        videos: [
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@LockPickingLawyer', title: 'LockPickingLawyer — lock defeats and teardowns', channel: 'LockPickingLawyer', duration: 'variable', kind: 'tutorial', why: 'Two thousand short videos picking every lock ever made. Calm, terse, unfailingly educational. The canonical channel.' },
          { id: 'Waw11zhaKSk', source: 'youtube', url: 'https://www.youtube.com/watch?v=Waw11zhaKSk', title: 'Safe Cracking with Feynman', channel: 'Numberphile', duration: '11:16', kind: 'documentary', why: 'The story of Feynman at Los Alamos, told by a mathematician who worked with him. Context for anyone who thinks this is a new hobby.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@BosnianBill', title: 'BosnianBill — technique tutorials', channel: 'BosnianBill', duration: 'variable', kind: 'tutorial', why: 'A slower, teacherly complement to LockPickingLawyer. His "Let\'s Talk About…" series is the best tutorial playlist in the hobby.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@McNallyOfficial', title: 'McNally — impressioning and advanced techniques', channel: 'McNally Official', duration: 'variable', kind: 'tutorial', why: 'Jos Weyers is a multi-time world champion impressioner. His technique videos are the reference for the art of making a working key from a blank.' },
          { id: 'oHf1vD5_b5I', source: 'youtube', url: 'https://www.youtube.com/watch?v=oHf1vD5_b5I', title: 'DEF CON 22 — Elevator Hacking: From the Pit to the Penthouse', channel: 'DEFCONConference', duration: '1:00:00', kind: 'lecture', why: 'Deviant Ollam and Howard Payne\'s classic talk on physical security in one of the most taken-for-granted machines on earth.', collapsed: true },
          { id: '3SVMT_zNlgA', source: 'youtube', url: 'https://www.youtube.com/watch?v=3SVMT_zNlgA', title: 'DEF CON 19 — Safe to Armed in Seconds (gun-safe defeats)', channel: 'DEFCONConference', duration: '48:00', kind: 'lecture', why: 'Ollam\'s study of how gun safes fail. The canonical argument for why cheap locks in consumer products are a problem.', collapsed: true },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@LearnSportsLocks', title: 'Learn Sport Locks — locksport championship coverage', channel: 'LSL', duration: 'variable', kind: 'documentary', why: 'Coverage of LockCon, Sportspicking, and other international competitions. The sport in motion.', collapsed: true },
        ],
        books: [
          { title: 'The MIT Guide to Lock Picking', author: 'Ted the Tool', year: 1991, url: 'https://archive.org/details/mit-guide-to-lock-picking-v05/mode/2up', why: 'Short, rigorous, free on the Internet Archive. The document that launched the modern hobby in the United States.' },
          { title: 'The Complete Guide to Lock Picking', author: 'Eddie the Wire', year: 1981, url: 'https://archive.org/details/the-complete-guide-to-lockpicking', why: 'The foundational Loompanics text. Illustrated, no-nonsense, widely cited. Still good.' },
          { title: 'Practical Lock Picking: A Physical Penetration Tester\'s Training Guide', author: 'Deviant Ollam', year: 2012, url: 'https://www.sciencedirect.com/book/9781597499897/practical-lock-picking', why: 'The current gold-standard textbook. Winner of the 2010 "Best Book Bejtlich Read" award. Illustrated step-by-step.' },
          { title: 'Keys to the Kingdom: Impressioning, Privilege Escalation, Bumping, and Other Key-Based Attacks', author: 'Deviant Ollam', year: 2012, url: 'https://www.sciencedirect.com/book/9781597499835/keys-to-the-kingdom', why: 'Ollam\'s advanced companion on key-based attacks — impressioning, bumping, privilege escalation through master keys.' },
          { title: 'Locksport: A Hackers Guide to Lockpicking, Impressioning, and Safe Cracking', author: 'Weyers, Burrough, Belgers, et al.', year: 2024, url: 'https://nostarch.com/locksport', why: 'A modern No Starch Press collection from world-champion pickers. The current reference for SPP, impressioning, and competition.' },
          { title: 'Surely You\'re Joking, Mr. Feynman!', author: 'Richard P. Feynman', year: 1985, url: 'https://archive.org/details/surely-youre-joking-mr.-feynman', why: 'The safecracking chapters at Los Alamos are canon. No other book has done more to recruit scientists into locksport.' },
        ],
        articles: [
          { title: 'Lock picking', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Lock_picking', why: 'A careful survey covering history, technique, tools, and country-by-country legality. Good starting point.', year: null },
          { title: 'How Lock Picking Works', source: 'HowStuffWorks', url: 'https://home.howstuffworks.com/home-improvement/household-safety/lock-picking.htm', why: 'Marshall Brain\'s clear diagrams of binding, tension, and the shear line. Still the friendliest introduction online.', year: null },
          { title: 'Locksport', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Locksport', why: 'The history of the hobby, the formation of TOOOL, and the annual championships.', year: null },
          { title: 'Schuyler Towne', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Schuyler_Towne', why: 'Profile of one of the US locksport movement\'s founders. Useful context on how the hobby organized itself in the 2000s.', year: null },
        ],
        courses: [
          { title: 'TOOOL (The Open Organisation Of Lockpickers)', provider: 'TOOOL community chapters', url: 'https://toool.us/', free: true, why: 'The US nonprofit hosts free open meetings in most major cities, including NYC. Beginners welcome, all equipment provided.' },
          { title: 'LockLab — paid tutorials and community', provider: 'LockLab', url: 'https://www.locklab.com/', free: false, why: 'The long-running online community where many competitive pickers came up. Paid tutorials, free forum.' },
        ],
        tools: [
          { title: 'Peterson Government Steel pick set (beginner)', url: 'https://www.peterson-locks.com/', why: 'One hook, one rake, two tension wrenches. Under thirty dollars. Better than the hundred-piece kits sold online.' },
          { title: 'Transparent cutaway practice lock', url: 'https://en.wikipedia.org/wiki/Lock_picking', why: 'Seeing the pins set in real time is the fastest way to learn. Plastic-housed training locks are a required purchase.' },
          { title: 'Sparrows Flux Capacitor training lock', url: 'https://www.sparrowslockpicks.com/', why: 'The Canadian training-lock specialist. Their progressive pin-stack lock lets you start at one pin and add complexity.' },
          { title: 'Key-blank file set (for impressioning)', url: 'https://en.wikipedia.org/wiki/Impressioning', why: 'A Swiss pillar file and a handful of blank keys is the impressioner\'s full kit. Slow to learn, impressive to watch.' },
        ],
        primarySources: [
          { title: 'Feynman\'s Los Alamos notebooks (Caltech archive)', url: 'https://www.feynmanlectures.caltech.edu/', why: 'The mathematician\'s own accounts of safecracking the Manhattan Project\'s file cabinets. Held at Caltech; parts quoted publicly in Surely You\'re Joking.' },
        ],
      },

      seeAlso: ['pin_tumbler', 'tolerances', 'diag'],
      prereqs: ['pin_tumbler'],
      leadsTo: [],
      chapterActivity: 'TOOOL NYC open night, roughly monthly — beginners are handed a clear lock, a tension wrench, and a cup of coffee.',
      sources: [
        'https://en.wikipedia.org/wiki/Lock_picking',
        'https://toool.us/',
        'https://archive.org/details/mit-guide-to-lock-picking-v05/mode/2up',
        'https://en.wikipedia.org/wiki/Locksport',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
