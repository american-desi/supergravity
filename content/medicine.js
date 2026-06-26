// content/medicine.js
// Batch: B03-life-sciences
// Last updated: 2026-04-22 by BATCH B03-life-sciences
//
// Topics this subject must cover (from data.js):
//   Core: physiology, pharmacology, public_health
//
// Editorial note: medicine lessons are educational, not clinical advice.
// The prose stays at the level of history and mechanism; no dosing,
// no diagnosis, no "consult your doctor" disclaimers inside the text.

window.CONTENT = window.CONTENT || {};
window.CONTENT.medicine = {
  subjectId: 'medicine',
  version: 1,
  lastUpdated: '2026-04-22',
  curator: 'BATCH B03-life-sciences',
  topics: {

    // ——— PHYSIOLOGY ———
    physiology: {
      id: 'physiology',
      name: 'Physiology',
      level: 'Intermediate',
      dek: 'How the body works — the study of function, from the squeeze of a single muscle cell to the sweep of the circulation.',
      readTime: '13 min',

      sections: ['Harvey and the circulation', 'Homeostasis', 'From cells to systems', 'The organ systems', 'What goes wrong'],
      body: [
        { type: 'lead', text: 'In 1628 an English physician named William Harvey, then 50 and personal doctor to Charles I, published a short Latin treatise called De Motu Cordis — On the Motion of the Heart and Blood. In seventy-two pages, with plates drawn from his own dissections of some eighty species, he overturned Galen\'s fifteen-hundred-year-old claim that blood was consumed at the tissues and generated afresh in the liver. Harvey showed instead that blood circulates in a closed loop, pushed by the heart as a mechanical pump, recirculated through the body perhaps a thousand times a day. Physiology as a quantitative science begins with that book — the first to apply measurement and simple hydraulic logic to a living system.' },
        { type: 'h2', text: 'Homeostasis, the idea Bernard named' },
        { type: 'p', text: 'In the 1860s the French physiologist Claude Bernard, working in a cluttered laboratory at the Collège de France, argued that animals maintain a stable internal environment — what he called the milieu intérieur — even as the outside world changes. Blood glucose stays within a narrow band whether you have just eaten or fasted for a day. Body temperature sits at 37°C in a blizzard and in a sauna. In 1926 Walter Cannon at Harvard gave the idea its current name, homeostasis, and showed that it is the work of nested feedback loops: temperature, glucose, pH, fluid volume, osmolality, blood pressure, and a hundred other variables are all held within narrow ranges by control systems that run without conscious attention, most of them operating on timescales of seconds to minutes.' },
        { type: 'interactive', key: 'ecg' },
        { type: 'h2', text: 'From cells to systems' },
        { type: 'p', text: 'A single cardiac muscle cell contracts because calcium enters through a voltage-gated L-type channel, which triggers a larger calcium release from the sarcoplasmic reticulum, which binds troponin, which unlocks actin-myosin crossbridges. Billions of those cells, electrically coupled through gap junctions and paced by a cluster of specialized cells in the sinoatrial node at the top of the right atrium, produce the heartbeat — about a hundred thousand contractions every day, two and a half billion over an average life. The heart, plumbed into arteries and veins and regulated by the autonomic nervous system, produces the circulation. Physiology is the practice of moving between these scales — from the channel protein to the organism — without losing either the molecule or the whole animal.' },
        { type: 'h2', text: 'The organ systems, in brief' },
        { type: 'p', text: 'A medical physiology course usually walks, in order, through the cardiovascular, respiratory, renal, gastrointestinal, endocrine, reproductive, and nervous systems. Each is a study in mechanism — how the kidney concentrates urine through a countercurrent multiplier in the loop of Henle, how the lung exchanges gas across an alveolar membrane about a single cell thick (the total alveolar surface area in an adult is roughly the size of a tennis court), how the stomach maintains a pH of about 1.5 without digesting itself. The recurring lesson is that structure and function are the same question asked at different scales, and that what we call the body is actually forty or fifty nested control systems running in parallel.' },
        { type: 'h2', text: 'What goes wrong' },
        { type: 'p', text: 'Pathophysiology is physiology in the presence of disease. Heart failure is the circulation running out of reserve — a ventricle that used to pump 65 percent of its volume each beat is now pumping 30, and compensatory mechanisms that helped in acute shock have become maladaptive in chronic failure. Diabetes is the failure of glucose homeostasis — sometimes because the pancreas stops producing insulin, sometimes because the tissues stop listening to it. Asthma is an inappropriate immune reaction narrowing the airways. A clinician who has learned physiology well can read a disease as a deviation from a known normal, and work backwards from a patient\'s vital signs and labs to a short list of mechanisms that could produce this exact pattern — which is almost the whole of internal medicine.' },
        { type: 'callout', text: 'The modern physiology textbook is mostly an inventory of feedback loops. Every time something in the body stays almost constant while everything around it changes, a loop is keeping it there. Learning to see the loops is half of becoming a clinician.' },
        { type: 'quote', text: 'The constancy of the internal environment is the condition of free and independent life.', cite: 'Claude Bernard, Leçons sur les phénomènes de la vie (1878)' },
        { type: 'interactive', key: 'rich-physiology' },
      ],

      keyTerms: ['homeostasis', 'feedback loop', 'circulation', 'action potential', 'nephron', 'hormone', 'autonomic nervous system', 'pathophysiology'],

      resources: {
        videos: [
          {
            id: 'uBGl2BujkPQ',
            source: 'youtube',
            url: 'https://www.youtube.com/watch?v=uBGl2BujkPQ',
            title: 'Introduction to Anatomy & Physiology: Crash Course A&P #1',
            channel: 'CrashCourse',
            duration: '10:19',
            why: 'Hank Green on the basic vocabulary and organization of human physiology. The first of a 47-part series that tracks a typical undergraduate A&P course.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/user/armandohasudungan',
            title: 'Armando Hasudungan — medical physiology',
            channel: 'Armando Hasudungan',
            duration: 'variable',
            why: 'Hand-drawn, patient, and genuinely clear — an Australian physician-illustrator whose whiteboard videos are used by medical students worldwide.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/channel/UCG-iSMVtWbbwDDXgXXypARQ',
            title: 'MedCram — Medical Lectures Explained Clearly',
            channel: 'MedCram',
            duration: 'variable',
            why: 'Dr. Roger Seheult and colleagues take one clinical topic at a time and explain the physiology behind it with restraint and care.',
          },
        ],
        books: [
          {
            title: 'Guyton and Hall Textbook of Medical Physiology',
            author: 'John E. Hall and Michael E. Hall',
            year: 2020,
            url: '',
            why: 'The standard medical-school physiology textbook for sixty years. Still single-author in style, still the cleanest narrative of how the body works.',
          },
          {
            title: 'Vander\'s Human Physiology: The Mechanisms of Body Function',
            author: 'Eric P. Widmaier et al.',
            year: 2022,
            url: '',
            why: 'The standard undergraduate physiology text — clearer than Guyton for a beginner, with better figures.',
          },
          {
            title: 'How We Die: Reflections on Life\'s Final Chapter',
            author: 'Sherwin B. Nuland',
            year: 1994,
            url: '',
            why: 'National Book Award-winning essays by a Yale surgeon on the physiology of dying — heart attack, stroke, sepsis, cancer. The most humane companion to a textbook ever written.',
          },
        ],
        articles: [
          {
            title: 'Merck Manual — Professional Version',
            source: 'Merck & Co.',
            url: 'https://www.merckmanuals.com/professional',
            why: 'The reference physicians have used for more than 125 years. Free online, with careful sections on the physiology of every organ system.',
            year: null,
          },
          {
            title: 'Merck Manual — Consumer Version',
            source: 'Merck & Co.',
            url: 'https://www.merckmanuals.com/home',
            why: 'The same authority, rewritten for a general reader. Useful alongside the professional version when a section gets too technical.',
            year: null,
          },
          {
            title: 'Physiology',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Physiology',
            why: 'Broad, well-cited overview with a good history section and links into the physiology of each organ system.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Human Physiology (Khan Academy)',
            provider: 'Khan Academy',
            url: 'https://www.khanacademy.org/science/health-and-medicine/human-anatomy-and-physiology',
            free: true,
            why: 'Paced, visual, with checks. A solid pre-class review or refresher.',
          },
          {
            title: 'Principles of Biochemistry (MIT 7.05)',
            provider: 'MIT OpenCourseWare',
            url: 'https://ocw.mit.edu/courses/7-05-general-biochemistry-spring-2020/',
            free: true,
            why: 'MIT undergraduate biochemistry — the molecular foundations a physiology student needs. Full lecture notes and problem sets.',
          },
        ],
        tools: [
          {
            title: 'Osmosis video library (free tier)',
            url: 'https://www.osmosis.org/',
            why: 'Short, animated explainers on physiology and pathophysiology, written by medical professionals. A free tier covers the essentials.',
          },
        ],
        primarySources: [
          {
            title: 'Harvey, The Anatomical Exercises: De Motu Cordis and De Circulatione Sanguinis (English translation)',
            url: 'https://archive.org/details/anatomicalexerci0000harv',
            why: 'Harvey\'s original argument for the circulation, translated into English. The Dover reprint of the first English translation, free on the Internet Archive.',
          },
        ],
      },

      interactive: { kind: 'circulation' },
      seeAlso: ['anatomy', 'pharmacology', 'cell', 'neuro'],
      prereqs: ['anatomy', 'cell'],
      leadsTo: ['pharmacology', 'public_health'],

      chapterActivity: 'A monthly physiology-and-movement walking tour along the Hudson River — heart-rate variability and breathing mechanics explained at a pace anyone can sustain.',

      sources: [
        'https://en.wikipedia.org/wiki/Physiology',
        'https://www.merckmanuals.com/professional',
        'https://archive.org/details/anatomicalexerci0000harv',
      ],
      verifiedAt: '2026-04-22',
    },

    // ——— PHARMACOLOGY ———
    pharmacology: {
      id: 'pharmacology',
      name: 'Pharmacology',
      level: 'Advanced',
      dek: 'What drugs do, how they do it, and why the dose that cures is often close to the dose that kills.',
      readTime: '13 min',

      sections: ['Paracelsus, and the dose', 'What the body does to a drug', 'What the drug does to the body', 'The therapeutic window', 'The long pipeline'],
      body: [
        { type: 'lead', text: 'In the early sixteenth century a Swiss-German physician named Philippus Aureolus Theophrastus Bombastus von Hohenheim — who renamed himself Paracelsus, "beyond Celsus," to signal his rejection of the Roman authority — burned a copy of Galen in the town square at Basel and announced a new way of thinking about medicines. His most famous line, often paraphrased, is the opening sentence of modern pharmacology: all things are poisons, for there is nothing without poisonous qualities; it is only the dose that makes a thing not a poison. Every pharmacology course since has been, in effect, a commentary on that claim.' },
        { type: 'h2', text: 'What the body does to a drug' },
        { type: 'p', text: 'Pharmacokinetics is the study of how a drug is absorbed, distributed, metabolized, and excreted — the acronym ADME that appears on every first-year pharmacology exam. A drug taken by mouth must survive the stomach\'s acid, cross the gut wall, pass through the portal vein and the liver\'s first-pass metabolism (where much of the dose may be destroyed before it ever reaches the general circulation), and arrive at its site of action in high enough concentration to matter. The half-life of a drug — the time for its plasma concentration to drop by half — determines dosing frequency. A drug with a two-hour half-life needs to be taken four times a day; one with a forty-hour half-life can be taken once.' },
        { type: 'h2', text: 'What the drug does to the body' },
        { type: 'p', text: 'Pharmacodynamics is the other half: how the drug produces its effect once it has arrived. Most drugs work by binding to a specific protein — a receptor, an enzyme, a transporter, an ion channel — and altering its behavior. An agonist turns the protein on; an antagonist blocks it; a partial agonist does some of both, badly. The fit is usually approximate rather than perfect, which is why almost every drug has side effects: it is also binding, at lower affinity, to other proteins in the body. Citalopram is "selective" for the serotonin transporter, but it is not only selective; most SSRIs bind a dozen other proteins at clinical doses, which is why their side-effect profiles are what they are.' },
        { type: 'interactive', key: 'dose-response' },
        { type: 'h2', text: 'Therapeutic window' },
        { type: 'p', text: 'Pharmacologists speak of the therapeutic index, the ratio between the dose that treats and the dose that harms. Drugs like acetaminophen have a wide window in therapeutic use (though at four grams a day the liver gives out). Warfarin and digoxin and lithium have narrow windows and require regular blood monitoring — a dose that controls atrial fibrillation can, in the same patient on a slightly different week, cause a fatal bleed. Toxicology is pharmacology with the dose turned up. Pediatric dosing is pharmacology with the patient scaled down and the hepatic enzymes not yet fully mature. Geriatric dosing is pharmacology with the kidneys slowly letting go. The underlying mathematics is the same.' },
        { type: 'h2', text: 'The long pipeline' },
        { type: 'p', text: 'A new drug today takes, on average, about ten to fifteen years and somewhere between 1 and 2.6 billion dollars to move from target identification through high-throughput screening, preclinical animal studies, three phases of human trials, and regulatory review. Roughly nine in ten candidates that enter clinical trials never reach a prescription pad. The aspirin in your cupboard is descended from a willow-bark preparation in Hippocratic medicine, Edward Stone\'s 1763 report to the Royal Society on its use for fevers, and a German dye-chemistry program in the 1890s. Bayer\'s Felix Hoffmann acetylated salicylic acid in 1897; Aspirin went on sale two years later. The history of any drug, pulled on far enough, is long.' },
        { type: 'callout', text: 'Alexander Fleming noticed that a mold contaminating one of his staphylococcus plates in September 1928 was killing the bacteria around it. It took another twelve years and the wartime work of Howard Florey and Ernst Chain at Oxford to turn that observation into an injectable drug. The first American patient was a dying police officer in New Haven; they ran out of penicillin before curing him.' },
        { type: 'interactive', key: 'rich-pharmacology' },
      ],

      keyTerms: ['dose-response', 'pharmacokinetics', 'pharmacodynamics', 'receptor', 'agonist', 'antagonist', 'half-life', 'therapeutic index', 'ADME'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/user/armandohasudungan',
            title: 'Armando Hasudungan — pharmacology lectures',
            channel: 'Armando Hasudungan',
            duration: 'variable',
            why: 'Hand-drawn, paced, student-friendly walkthroughs of drug classes — cardiovascular agents, antibiotics, antiepileptics — used in medical schools worldwide.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/c/SpeedPharmacology',
            title: 'Speed Pharmacology — channel',
            channel: 'Speed Pharmacology',
            duration: 'variable',
            why: 'Compact, focused videos on the mechanisms of common drug classes. A standard supplement to Katzung or Goodman & Gilman.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/channel/UCG-iSMVtWbbwDDXgXXypARQ',
            title: 'MedCram — pharmacology explanations',
            channel: 'MedCram',
            duration: 'variable',
            why: 'Roger Seheult on clinical pharmacology — steroid mechanics, antivirals, the respiratory drugs. Slower and more careful than most YouTube explainers.',
          },
        ],
        books: [
          {
            title: 'Goodman & Gilman\'s The Pharmacological Basis of Therapeutics',
            author: 'Laurence Brunton et al. (eds.)',
            year: 2022,
            url: '',
            why: 'First published in 1941 and now in its fourteenth edition. The standard pharmacology reference cited in almost every clinical paper.',
          },
          {
            title: 'Basic & Clinical Pharmacology',
            author: 'Bertram G. Katzung (ed.)',
            year: 2023,
            url: '',
            why: 'The standard first-pass textbook for medical students — clearer and more concise than Goodman & Gilman, updated every two to three years.',
          },
          {
            title: 'Bad Pharma: How Drug Companies Mislead Doctors and Harm Patients',
            author: 'Ben Goldacre',
            year: 2012,
            url: '',
            why: 'A British physician-epidemiologist\'s careful argument about publication bias, trial design, and the gap between the evidence base and the prescription pad.',
          },
        ],
        articles: [
          {
            title: 'DailyMed',
            source: 'NIH National Library of Medicine',
            url: 'https://dailymed.nlm.nih.gov/dailymed/',
            why: 'The official U.S. drug label database — every prescription and non-prescription drug approved by the FDA, with its full package insert.',
            year: null,
          },
          {
            title: 'Merck Manual — Clinical Pharmacology chapters',
            source: 'Merck & Co.',
            url: 'https://www.merckmanuals.com/professional/clinical-pharmacology',
            why: 'Overview chapters on pharmacokinetics, pharmacodynamics, and drug interactions, written for working clinicians.',
            year: null,
          },
          {
            title: 'Pharmacology',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Pharmacology',
            why: 'Broad overview with good sections on history, the ADME framework, and drug development.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Drug Commercialization (Coursera, University of California San Diego)',
            provider: 'Coursera',
            url: 'https://www.coursera.org/learn/drug-commercialization',
            free: true,
            why: 'The business and regulatory side of pharmacology — how a candidate molecule becomes a prescribed drug. Free to audit.',
          },
          {
            title: 'Principles of Biochemistry (HarvardX)',
            provider: 'edX',
            url: 'https://www.edx.org/learn/biochemistry/harvard-university-principles-of-biochemistry',
            free: true,
            why: 'A strong prerequisite for pharmacology — how enzymes and receptors actually work at the molecular level. Audit is free.',
          },
        ],
        tools: [
          {
            title: 'DrugBank',
            url: 'https://go.drugbank.com/',
            why: 'Open, searchable database of drug targets, mechanisms, and interactions — used by clinicians, researchers, and students alike.',
          },
        ],
      },

      interactive: { kind: 'dose-response' },
      seeAlso: ['physiology', 'biochem', 'public_health', 'clinical'],
      prereqs: ['physiology', 'biochem'],
      leadsTo: ['public_health'],

      chapterActivity: 'A quarterly reading group at the NYU Health Sciences Library working through a recent New England Journal clinical trial — what was given, to whom, and what it showed.',

      sources: [
        'https://en.wikipedia.org/wiki/Pharmacology',
        'https://www.merckmanuals.com/professional/clinical-pharmacology',
        'https://dailymed.nlm.nih.gov/dailymed/',
      ],
      verifiedAt: '2026-04-22',
    },

    // ——— PUBLIC HEALTH ———
    public_health: {
      id: 'public_health',
      name: 'Public Health',
      level: 'Intermediate',
      dek: 'Medicine practiced at the scale of a population — the discipline that gave us clean water, vaccines, and cigarette warnings.',
      readTime: '13 min',

      sections: ['Snow\'s pump', 'Populations, not patients', 'The social determinants', 'The methods', 'What has actually worked'],
      body: [
        { type: 'lead', text: 'In the last week of August 1854 a cholera outbreak killed more than five hundred people in a few Soho streets around Golden Square in London. A physician named John Snow, who lived nearby and had argued for years that cholera was waterborne rather than miasmatic, walked the neighborhood with a map and a notebook, plotted each death as a black bar beside the house where it had occurred, and found the cases clustered around a single public water pump on Broad Street. He persuaded the parish Board of Guardians to remove the pump\'s handle on 8 September. The outbreak ended. It would take another three decades — and the 1883 work of Robert Koch in Egypt — to identify the bacterium Vibrio cholerae that caused the disease. Snow had already given public health its founding method.' },
        { type: 'h2', text: 'A shift in the unit of analysis' },
        { type: 'p', text: 'Clinical medicine treats individuals one at a time. Public health treats populations. The shift changes almost everything: the evidence base is epidemiological rather than anecdotal, the interventions are policies and programs rather than prescriptions, the outcomes are measured in life-years added or infections prevented rather than in a single patient\'s chart, and the ethics are substantially different — a public-health intervention often trades small inconveniences to many for large benefits to a few. A well-run public-health program can add more years to more lives than any specialist clinic. Childhood vaccination and clean water are, between them, arguably the two interventions that have saved more human lives than anything else in history.' },
        { type: 'interactive', key: 'sir' },
        { type: 'h2', text: 'The social determinants' },
        { type: 'p', text: 'Most of what shapes a population\'s health is not clinical. The WHO Commission on Social Determinants of Health, reporting in 2008 under Michael Marmot, estimated that zip code is a better predictor of life expectancy than genome. Housing, education, income, clean water, clean air, access to nutritious food, political stability, racial discrimination, and early-life adversity together explain most of the variance in health outcomes across countries and neighborhoods. Life expectancy can vary by fifteen years between neighborhoods a few subway stops apart in the same city. Any theory of disease that ignores these facts is, at population scale, incomplete.' },
        { type: 'h2', text: 'The methods, in brief' },
        { type: 'p', text: 'Epidemiology is the study of how diseases move through populations — who gets sick, where, when, why, and what to do about it. Biostatistics quantifies that movement. Environmental health asks what in the air, water, and soil is making people sick. Health policy studies what the state can do about it. Global health is public health across borders, with the inequality turned up. A graduate program in public health teaches all five, plus a little of everything else — behavioral science, health economics, implementation research, disaster preparedness, communications. The Master of Public Health is deliberately a generalist degree.' },
        { type: 'h2', text: 'What has actually worked' },
        { type: 'p', text: 'In the twentieth century, public health roughly doubled human life expectancy in the developed world — more than any advance in clinical medicine, by a large margin. The list of wins is specific: vaccination (smallpox eradicated in 1980, polio reduced by more than 99 percent), sanitation (urban sewer systems, the single largest intervention), occupational safety, tobacco control, fluoridated water, motor-vehicle seat belts, and the slow decline of maternal and infant mortality from around 900 per 100,000 births in 1900 to about 20 today in wealthy countries. The list of ongoing fights is equally specific: obesity, opioid overdose, firearm injury, climate-related disease, antibiotic resistance, the next pandemic. The COVID-19 response used tools Snow would have recognized — case tracking, contact tracing, isolation — alongside tools he could not have imagined, most notably mRNA vaccines designed from a published genome sequence in forty-eight hours.' },
        { type: 'callout', text: 'Educational and medical reminder only: nothing on this page is clinical advice. Decisions about your own medicines, vaccines, or care belong with your own clinician and the primary literature, not with a summary like this one.' },
        { type: 'quote', text: 'It was an experimentum crucis.', cite: 'John Snow, on the Broad Street pump (On the Mode of Communication of Cholera, 1855)' },
        { type: 'interactive', key: 'rich-public_health' },
      ],

      keyTerms: ['epidemiology', 'incidence', 'prevalence', 'social determinants of health', 'herd immunity', 'vaccination', 'health policy', 'global health'],

      resources: {
        videos: [
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtPjQj_LcJ0Zvj-VI3sslJyF',
            title: 'Crash Course Public Health — full playlist',
            channel: 'CrashCourse',
            duration: 'variable',
            why: 'Vanessa Hill\'s ten-episode run with the American Public Health Association — social determinants, global health, health systems. Clear and short.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/channel/UCG-iSMVtWbbwDDXgXXypARQ',
            title: 'MedCram — public-health and epidemiology topics',
            channel: 'MedCram',
            duration: 'variable',
            why: 'Working clinicians on vaccine mechanics, epidemic curves, and evidence appraisal — careful, paced, evidence-based.',
          },
          {
            id: null,
            source: 'youtube',
            url: 'https://www.youtube.com/channel/UC07-dOwgza1IguKA86jqxNA',
            title: 'World Health Organization — official channel',
            channel: 'World Health Organization',
            duration: 'variable',
            why: 'WHO\'s own videos — outbreak updates, global-health explainers, interviews with named public-health scientists.',
          },
        ],
        books: [
          {
            title: 'The Ghost Map: The Story of London\'s Most Terrifying Epidemic',
            author: 'Steven Johnson',
            year: 2006,
            url: '',
            why: 'A superb narrative of John Snow, the 1854 cholera outbreak, and the birth of modern epidemiology. The single best general-audience introduction to the field.',
          },
          {
            title: 'The Great Influenza: The Story of the Deadliest Pandemic in History',
            author: 'John M. Barry',
            year: 2004,
            url: '',
            why: 'The 1918 flu, the founding of modern American public health, and the institutional scaffolding that COVID-19 tested a century later.',
          },
          {
            title: 'Spillover: Animal Infections and the Next Human Pandemic',
            author: 'David Quammen',
            year: 2012,
            url: '',
            why: 'A science journalist\'s careful reporting on zoonotic disease — Ebola, SARS, Nipah, and by extension COVID-19. Written nearly a decade before the last pandemic; astonishingly prescient.',
          },
        ],
        articles: [
          {
            title: 'Centers for Disease Control and Prevention — homepage',
            source: 'U.S. CDC',
            url: 'https://www.cdc.gov/',
            why: 'The primary U.S. source for outbreak reporting, vaccine recommendations, and surveillance data. MMWR (their weekly report) is essential reading.',
            year: null,
          },
          {
            title: 'World Health Organization — homepage',
            source: 'WHO',
            url: 'https://www.who.int/',
            why: 'The global counterpart to the CDC. Fact sheets, emergency updates, and the Global Health Observatory data repository.',
            year: null,
          },
          {
            title: 'Public health',
            source: 'Wikipedia',
            url: 'https://en.wikipedia.org/wiki/Public_health',
            why: 'Careful, well-cited overview of the field with strong sections on history, methods, and institutions.',
            year: null,
          },
        ],
        courses: [
          {
            title: 'Epidemiology in Public Health Practice (Coursera, Johns Hopkins)',
            provider: 'Coursera (Johns Hopkins)',
            url: 'https://www.coursera.org/specializations/professional-epidemiology',
            free: true,
            why: 'Johns Hopkins Bloomberg School specialization on the core methods of public-health epidemiology — outbreak investigation, data systems, disease burden. Free to audit.',
          },
          {
            title: 'Outbreaks and Epidemics (Coursera, Johns Hopkins)',
            provider: 'Coursera (Johns Hopkins)',
            url: 'https://www.coursera.org/learn/outbreaks-epidemics',
            free: true,
            why: 'A short, beginner-friendly course on how outbreaks are identified, reported, and contained. Good entry point to the specialization above.',
          },
        ],
        tools: [
          {
            title: 'Our World in Data',
            url: 'https://ourworldindata.org/',
            why: 'Oxford-based, public-domain data and charts on global health, disease, and development. The best free visualization of long-run public-health data on the web.',
          },
        ],
        primarySources: [
          {
            title: 'John Snow, On the Mode of Communication of Cholera (1855)',
            url: 'https://archive.org/details/b28985266',
            why: 'Snow\'s own second edition, on the Internet Archive — the founding text of field epidemiology.',
          },
        ],
      },

      interactive: { kind: 'sir' },
      seeAlso: ['physiology', 'pharmacology', 'ecology', 'nutrition'],
      prereqs: ['physiology'],
      leadsTo: ['nutrition'],

      chapterActivity: 'A walking tour of Lower Manhattan\'s public-health history — Typhoid Mary\'s quarantine on North Brother Island, the 1832 cholera cemetery under Washington Square, the 1918 influenza wards at Bellevue.',

      sources: [
        'https://en.wikipedia.org/wiki/Public_health',
        'https://www.cdc.gov/',
        'https://www.who.int/',
        'https://www.coursera.org/specializations/professional-epidemiology',
      ],
      verifiedAt: '2026-04-22',
    },

  },
};
