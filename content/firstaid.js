// content/firstaid.js
// Batch: B11-life-skills-I
// Last updated: 2026-04-23 by BATCH B11-life-skills-I
//
// Topics from data.js: cpr, wounds, choking
//
// SAFETY NOTE: Every lesson in this file emphasizes that reading is not training.
// In an emergency, call the local emergency number (911 in the US, 999 in the UK,
// 112 across the EU) and follow the dispatcher's instructions.

window.CONTENT = window.CONTENT || {};
window.CONTENT.firstaid = {
  subjectId: 'firstaid',
  version: 1,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B11-life-skills-I',
  topics: {

    cpr: {
      id: 'cpr',
      name: 'CPR & AED',
      level: 'Beginner',
      dek: 'Two minutes of trained chest compressions can double or triple a stranger\'s chance of surviving cardiac arrest.',
      readTime: '10 min',

      sections: ['What cardiac arrest actually is', 'Hands-only CPR', 'The AED', 'A real course is not optional'],
      body: [
        { type: 'lead', text: 'In Seattle in the early 1970s, the cardiologist Leonard Cobb decided to teach ordinary citizens how to perform CPR. Within a few years, the city had the highest survival rate from out-of-hospital cardiac arrest of any major city in the world. The intervention was not a new drug or a new device. It was teaching the bystanders nearest the body to do something useful in the four minutes before the ambulance arrived.' },
        { type: 'callout', text: 'Reading this lesson is not training. Take a Red Cross or American Heart Association CPR course in person; the muscle memory of pressing two inches deep, a hundred times a minute, is what saves lives. This page is background, not certification.' },
        { type: 'h2', text: 'What cardiac arrest actually is' },
        { type: 'p', text: 'Cardiac arrest — distinct from a heart attack — is the heart suddenly losing its ability to pump blood. The person collapses, stops breathing normally, and within minutes the brain begins to die from lack of oxygen. Survival drops by roughly seven to ten percent for every minute that passes without CPR. After ten minutes, with no intervention, almost no one survives. The point of CPR is not to restart the heart — that almost always requires a defibrillator — but to keep enough blood moving to the brain that defibrillation, when it arrives, has someone to bring back.' },
        { type: 'h2', text: 'Hands-only CPR' },
        { type: 'p', text: 'For an unresponsive adult who is not breathing normally, the American Heart Association recommends hands-only CPR for untrained bystanders: call 911, then push hard and fast in the center of the chest, about two inches deep, at the rhythm of the Bee Gees song "Stayin\' Alive" (about 110 beats per minute). Do not stop until trained help arrives or the person starts breathing. Trained rescuers add rescue breaths in a 30:2 ratio. Hands-only is simpler, more memorable, and just as effective for the first several minutes of an adult arrest.' },
        { type: 'h2', text: 'The AED' },
        { type: 'p', text: 'An automated external defibrillator is a small box found in airports, gyms, schools, and most public buildings. Open the lid and a recorded voice walks you through the entire procedure — where to place the pads, when to stand clear, when to deliver the shock. The machine analyzes the heart rhythm and only delivers a shock if a shock will help. Using one wrong is essentially impossible; not using one is what kills people.' },
        { type: 'h2', text: 'A real course is not optional' },
        { type: 'p', text: 'A two-hour CPR class is the highest-leverage health investment most adults will ever make. The Red Cross, the American Heart Association, and the YMCA all offer them; many workplaces will pay for them. Take one once, then refresh every two years. The skill atrophies quickly and the moment you need it will be the worst day of someone\'s life.' },
      ],

      keyTerms: ['cardiac arrest', 'compression depth', 'compression rate', 'AED', 'rescue breath', 'chain of survival', 'hands-only CPR', 'defibrillation'],

      resources: {
        videos: [
          {
            id: 'n5hP4DIBCEE',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=n5hP4DIBCEE',
            title: 'Hands-Only CPR (with Ken Jeong)',
            channel: 'American Heart Association',
            duration: '1:00',
            featured: true,
            why: 'The official AHA one-minute hands-only CPR video. Sixty seconds; the rhythm is "Stayin\' Alive."',
          },
          {
            id: 'GnvdMWG3PT8',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=GnvdMWG3PT8',
            title: 'CPR Instructions',
            channel: 'British Heart Foundation',
            duration: '1:39',
            featured: true,
            why: 'Vinnie Jones doing CPR to "Stayin\' Alive" — the most-watched CPR video ever made, and remarkably accurate.',
          },
          {
            id: null,
            source: 'other',
            url: 'https://www.redcross.org/take-a-class/cpr',
            title: 'Red Cross CPR Classes',
            channel: 'American Red Cross',
            duration: 'variable',
            featured: true,
            why: 'Find an in-person or blended CPR/AED class near you. The actual training, not a video about it.',
          },
        ],
        books: [
          {
            title: 'ACLS Provider Manual',
            author: 'American Heart Association',
            year: 2025,
            url: 'https://en.wikipedia.org/wiki/Advanced_cardiac_life_support',
            why: 'The professional manual. Overkill for most readers; the right reference if you want to understand why the protocols are what they are.',
          },
          {
            title: 'Resuscitation: A Practical Approach',
            author: 'Jasmeet Soar et al.',
            year: 2023,
            url: 'https://en.wikipedia.org/wiki/Resuscitation',
            why: 'A clinician\'s textbook. The history of CPR and the science behind every revision of the guidelines.',
          },
          {
            title: 'When Bad Things Happen to Good People',
            author: 'Harold Kushner',
            year: 1981,
            url: 'https://en.wikipedia.org/wiki/When_Bad_Things_Happen_to_Good_People',
            why: 'Not a CPR book — but if you ever do CPR and the person dies anyway, which is the statistically likely outcome, this is the book to have on the shelf.',
          },
        ],
        articles: [
          {
            title: 'Cardiopulmonary resuscitation',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Cardiopulmonary_resuscitation',
            why: 'History of the technique, current guidelines, realistic survival statistics.',
            year: null,
          },
          {
            title: 'What Is CPR?',
            source: 'American Heart Association',
            url: 'https://cpr.heart.org/en/resources/what-is-cpr',
            why: 'The current AHA explainer. Always treat this as the canonical reference for the protocol.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'CPR/AED for the Professional Rescuer',
            provider: 'American Red Cross',
            url: 'https://www.redcross.org/take-a-class/cpr',
            free: false,
            why: 'The standard. If you remember nothing else from this lesson, take this class.',
          },
        ],
      },

      seeAlso: ['wounds', 'choking', 'physiology'],
      prereqs: [],
      leadsTo: ['wounds', 'choking'],
      chapterActivity: 'A spring CPR Saturday at a Brooklyn YMCA, run by certified instructors — bring everyone in your household over twelve.',
      sources: [
        'https://en.wikipedia.org/wiki/Cardiopulmonary_resuscitation',
        'https://cpr.heart.org/en/resources/what-is-cpr',
      ],
      verifiedAt: '2026-04-23',
    },

    wounds: {
      id: 'wounds',
      name: 'Bleeding & Wounds',
      level: 'Beginner',
      dek: 'Direct pressure stops nearly every survivable bleed — and most people do not press hard enough or long enough.',
      readTime: '9 min',

      sections: ['The triage of a bleed', 'Pressure, then more pressure', 'Tourniquets — when and how', 'Wound care after the bleeding stops'],
      body: [
        { type: 'lead', text: 'A healthy adult body holds about five liters of blood. Losing one liter brings on shock; losing two is usually fatal. The good news is that almost every survivable hemorrhage can be controlled by a bystander with their bare hands and a piece of cloth — provided they know to keep pressing, and to keep pressing for longer than feels reasonable.' },
        { type: 'callout', text: 'This lesson is background, not training. The civilian Stop the Bleed program runs free hour-long courses in most US cities; take one. The skills with a tourniquet and a wound-packing gauze are physical and need real practice.' },
        { type: 'h2', text: 'The triage of a bleed' },
        { type: 'p', text: 'Not every bleed is an emergency. A scrape, even a long one, will usually clot on its own. The bleeds that kill are the ones that do not slow down: blood spurting in time with the heartbeat (an arterial bleed), or a steady dark flow that soaks through cloth in seconds (a heavy venous bleed). The first decision is the simplest: call 911 if the bleeding is more than you can control, or if the wound is to the head, neck, chest, or abdomen.' },
        { type: 'h2', text: 'Pressure, then more pressure' },
        { type: 'p', text: 'Place a clean cloth — a folded T-shirt works — over the wound and press down hard with the heel of your hand. Then do not let go. If blood soaks through, do not lift the cloth; add another cloth on top and keep pressing. The most common mistake bystanders make is checking too soon, which dislodges the clot that was beginning to form. Hold pressure for at least ten minutes by the clock. If you can elevate the wound above the heart, do it.' },
        { type: 'h2', text: 'Tourniquets — when and how' },
        { type: 'p', text: 'A tourniquet is for a limb wound that direct pressure cannot control. Modern combat-style tourniquets — the CAT-7 is the standard — saved enough lives in Iraq and Afghanistan that the medical consensus on civilian use reversed completely. Apply two to three inches above the wound, never on a joint, and tighten until the bleeding stops. It will hurt. Note the time on the tourniquet and on the patient\'s forehead. Do not loosen it; let the hospital do that.' },
        { type: 'h2', text: 'Wound care after the bleeding stops' },
        { type: 'p', text: 'Once the bleeding is controlled, irrigate with clean water if available, cover with a clean dressing, and get the person to medical care for stitches and a tetanus check if the wound is deep, dirty, or in a high-tension area. A wound left open more than six to eight hours generally cannot be closed primarily — it heals by what doctors call secondary intention, which leaves a wider scar.' },
      ],

      keyTerms: ['hemorrhage', 'arterial bleed', 'venous bleed', 'tourniquet', 'wound packing', 'pressure dressing', 'tetanus', 'shock'],

      resources: {
        videos: [
          {
            id: null,
            source: 'other',
            url: 'https://www.stopthebleed.org/training/',
            title: 'Stop the Bleed — official training',
            channel: 'American College of Surgeons',
            duration: 'variable',
            featured: true,
            why: 'The free, hour-long civilian bleeding-control course launched after the Sandy Hook shooting. Find an instructor near you here.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@AmericanRedCross',
            title: 'American Red Cross — full channel',
            channel: 'American Red Cross',
            duration: 'variable',
            featured: true,
            why: 'Official Red Cross first-aid videos. The wound-care and bleeding-control videos are the canonical visual references.',
          },
          {
            id: 'EVJ7sqZSn3M',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=EVJ7sqZSn3M',
            title: 'How to Apply a Tourniquet',
            channel: 'American College of Surgeons',
            duration: '2:05',
            featured: true,
            why: 'The official ACS tourniquet video — the one used in Stop the Bleed courses.',
          },
        ],
        books: [
          {
            title: 'Wilderness Medicine',
            author: 'Paul S. Auerbach',
            year: 2017,
            url: 'https://en.wikipedia.org/wiki/Wilderness_medicine',
            why: 'The standard wilderness-medicine reference. Two thousand pages; the wound chapter alone is worth the shelf space.',
          },
          {
            title: 'Where There Is No Doctor',
            author: 'David Werner',
            year: 1977,
            url: 'https://hesperian.org/books-and-resources/',
            why: 'The classic field manual for community health workers, free online from Hesperian. Wound care for places without an ER nearby.',
          },
          {
            title: 'NOLS Wilderness Medicine',
            author: 'Tod Schimelpfenig',
            year: 2021,
            url: 'https://en.wikipedia.org/wiki/National_Outdoor_Leadership_School',
            why: 'The pocket reference NOLS hands every wilderness EMT student. The wound section is sharp and brief.',
          },
        ],
        articles: [
          {
            title: 'Wound',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Wound',
            why: 'Comprehensive reference on wound types, healing stages, and management.',
            year: null,
          },
          {
            title: 'Bleeding control',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Bleeding',
            why: 'The physiology and the field treatment, with citations.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Stop the Bleed',
            provider: 'American College of Surgeons',
            url: 'https://www.stopthebleed.org/',
            free: true,
            why: 'Free, one hour, in person, near everyone. The single best return on training time after CPR.',
          },
        ],
      },

      seeAlso: ['cpr', 'choking', 'survival'],
      prereqs: ['cpr'],
      leadsTo: [],
      chapterActivity: 'A summer Stop-the-Bleed afternoon at a Bronx fire station: tourniquets and pressure dressings on training mannequins, taught by EMTs.',
      sources: [
        'https://en.wikipedia.org/wiki/Wound',
        'https://en.wikipedia.org/wiki/Bleeding',
        'https://www.stopthebleed.org/',
      ],
      verifiedAt: '2026-04-23',
    },

    choking: {
      id: 'choking',
      name: 'Choking',
      level: 'Beginner',
      dek: 'Five back blows, five abdominal thrusts, repeat — until either the airway clears or the person becomes unconscious.',
      readTime: '8 min',

      sections: ['Recognizing it', 'Back blows and abdominal thrusts', 'Infants are different', 'Aftercare'],
      body: [
        { type: 'lead', text: 'In 1972 a Cincinnati surgeon named Henry Heimlich, frustrated that thousands of Americans were choking to death every year, designed and demonstrated the abdominal-thrust maneuver that would carry his name. The American Red Cross now teaches a slightly modified sequence — five back blows first, then thrusts — but the core insight is his: a sharp expulsion of air from below the obstruction can launch it out of the airway like a champagne cork.' },
        { type: 'callout', text: 'A real first-aid course teaches you the feel of these maneuvers on a mannequin, which a written description cannot. Take one. In an actual emergency, call 911 first if anyone else is present, then act.' },
        { type: 'h2', text: 'Recognizing it' },
        { type: 'p', text: 'A choking person who can cough, speak, or breathe noisily has a partial obstruction. Encourage them to keep coughing — the cough is more effective than anything you can do. Do not slap their back; you may dislodge the object further down the airway. A complete obstruction looks different: silence, panic, hands at the throat, lips going blue. That is when you act.' },
        { type: 'h2', text: 'Back blows and abdominal thrusts' },
        { type: 'p', text: 'For an adult or child over one year old, the current sequence is five sharp back blows between the shoulder blades with the heel of your hand, followed by five abdominal thrusts (the Heimlich maneuver): stand behind the person, make a fist just above their navel, grasp it with your other hand, and pull sharply upward and inward. Alternate the cycles until the object comes out or the person becomes unconscious. If they go down, lower them gently to the floor and begin CPR — chest compressions can themselves dislodge an obstruction.' },
        { type: 'h2', text: 'Infants are different' },
        { type: 'p', text: 'For a baby under one year, do not use abdominal thrusts — their organs are too fragile. The infant sequence is five back blows with the baby face down on your forearm, head lower than torso, then five chest thrusts with the baby flipped face up, two fingers in the center of the chest. Repeat until the airway clears or the baby is unresponsive. Choking deaths in infants are usually preventable by cutting grapes lengthwise, avoiding whole nuts under four, and watching small children with small toys.' },
        { type: 'h2', text: 'Aftercare' },
        { type: 'p', text: 'Anyone who has received abdominal thrusts that worked should still see a doctor — the maneuver can occasionally bruise an organ. Anyone who lost consciousness during a choking event should be evaluated even if they recover quickly, because foreign material may have entered the lungs and seeded a pneumonia that shows up days later.' },
      ],

      keyTerms: ['airway obstruction', 'Heimlich maneuver', 'abdominal thrust', 'back blow', 'foreign body airway obstruction', 'aspiration', 'silent choke', 'partial obstruction'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/@AmericanRedCross',
            title: 'American Red Cross — choking videos',
            channel: 'American Red Cross',
            duration: 'variable',
            featured: true,
            why: 'Official Red Cross choking-response videos for adults, children, and infants.',
          },
          {
            id: 'PA9hpOnvtCk',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=PA9hpOnvtCk',
            title: 'How to Save a Choking Baby',
            channel: 'St John Ambulance',
            duration: '1:51',
            featured: true,
            why: 'The British St John Ambulance video on infant choking. Brief, clear, calm — the model for how this should be taught.',
          },
          {
            id: '7CgtIgSyAiU',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=7CgtIgSyAiU',
            title: 'How to Save a Choking Adult',
            channel: 'St John Ambulance',
            duration: '1:43',
            featured: true,
            why: 'Same series, adult version. Two minutes; the sequence stays in memory.',
          },
        ],
        books: [
          {
            title: 'Heimlich\'s Maneuvers',
            author: 'Henry Heimlich',
            year: 2014,
            url: 'https://en.wikipedia.org/wiki/Henry_Heimlich',
            why: 'The surgeon\'s own memoir. Read for the history of how the maneuver was conceived and pushed into the world over the AMA\'s objections.',
          },
          {
            title: 'NOLS Wilderness Medicine',
            author: 'Tod Schimelpfenig',
            year: 2021,
            url: 'https://en.wikipedia.org/wiki/National_Outdoor_Leadership_School',
            why: 'Concise, practical, and field-tested. The choking section assumes you may be far from professional help.',
          },
          {
            title: 'First Aid Manual (Tenth Edition)',
            author: 'St John Ambulance',
            year: 2021,
            url: 'https://en.wikipedia.org/wiki/St_John_Ambulance',
            why: 'The British civilian standard. The illustrations are the best in the genre.',
          },
        ],
        articles: [
          {
            title: 'Choking',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Choking',
            why: 'Mechanism, signs, current first-aid sequence, and statistics.',
            year: null,
          },
          {
            title: 'Abdominal thrusts',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Abdominal_thrusts',
            why: 'The history of the maneuver and the evidence behind the current Red Cross sequence.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Adult and Pediatric First Aid/CPR/AED',
            provider: 'American Red Cross',
            url: 'https://www.redcross.org/take-a-class/first-aid',
            free: false,
            why: 'The standard combined course. Covers choking for adults, children, and infants in one afternoon.',
          },
        ],
      },

      seeAlso: ['cpr', 'wounds', 'parenting'],
      prereqs: ['cpr'],
      leadsTo: [],
      chapterActivity: 'A "first-aid for parents" evening at a Park Slope library: instructors bring infant mannequins; parents leave with the choking sequence in their hands, not their heads.',
      sources: [
        'https://en.wikipedia.org/wiki/Choking',
        'https://en.wikipedia.org/wiki/Abdominal_thrusts',
        'https://www.redcross.org/take-a-class/first-aid',
      ],
      verifiedAt: '2026-04-23',
    },

  },
};
