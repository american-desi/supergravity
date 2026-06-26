// ============================================
// 100 SUBJECTS — The Full Atlas
// ============================================

window.SUBJECT_HEX = {
  // Academic
  math: '#2a4a6a', science: '#4a5d3a', physics: '#1e3a5f', chemistry: '#6b4a2a',
  biology: '#3d5f3a', history: '#8b6b3a', literature: '#6b2a3a', geography: '#3a6b5a',
  art: '#c8621a', music: '#5a3a6b', cs: '#2d3142', philosophy: '#4a3a5a',
  psychology: '#7a4a3a', sociology: '#5a5a3a', economics: '#3a5a5a', politics: '#5a3a3a',
  linguistics: '#4a4a6a', anthropology: '#6a5a3a', astronomy: '#1a2a4a', geology: '#6a4a2a',
  medicine: '#6a3a3a', law: '#3a3a5a', religion: '#5a4a3a', architecture: '#4a4a3a',
  // Trades
  carpentry: '#6b4a2a', plumbing: '#2a4a5a', electrical: '#a85a1a', welding: '#4a3a3a',
  masonry: '#7a6a5a', hvac: '#3a5a6a', roofing: '#5a4a3a', automotive: '#3a3a3a',
  machining: '#4a4a4a', locksmithing: '#5a5a3a', glazier: '#4a6a7a', painting_trade: '#8a4a2a',
  flooring: '#6a4a2a', diesel: '#3a3a2a', smallengine: '#5a3a2a',
  // Culinary
  cooking: '#8a4a2a', baking: '#b87a4a', butchery: '#7a2a2a', fermentation: '#5a6a3a',
  cheesemaking: '#c8a857', coffee: '#4a2a1a', wine: '#6b2a3a', cocktails: '#c8621a',
  bbq: '#6a3a2a', pastry: '#d89a6a',
  // Crafts
  sewing: '#7a3a5a', knitting: '#a86a7a', woodworking: '#6b4a2a', leatherwork: '#6a3a1a',
  pottery: '#8a5a3a', glassblowing: '#3a6a8a', blacksmithing: '#3a2a2a', jewelry: '#a88a3a',
  calligraphy: '#2a2a3a', bookbinding: '#6a3a3a', paperfolding: '#e09a5a',
  // Life skills
  finance: '#3a5a4a', nutrition: '#4a6a3a', firstaid: '#8a2a2a', parenting: '#8a5a6a',
  negotiation: '#4a3a5a', publicspeaking: '#5a3a4a', timemgmt: '#3a4a5a', cleaning: '#5a7a8a',
  carrepair: '#3a3a3a', gardening: '#4a6a3a', composting: '#5a4a2a', beekeeping: '#b88a3a',
  sailing: '#2a4a6a', survival: '#4a5a3a', knots: '#6a5a3a', mapreading: '#5a6a4a',
  // Arts & Performance
  photography: '#3a3a3a', film: '#2a2a2a', theater: '#6a2a3a', dance: '#8a3a5a',
  magic: '#3a2a4a', stand_up: '#a85a3a', djing: '#4a3a5a',
  // Sports / Movement
  yoga: '#6a5a7a', martial: '#5a3a2a', running: '#3a5a5a', climbing: '#6a4a3a',
  cycling: '#3a5a3a',
  // Nature & Outdoors
  birding: '#5a6a4a', foraging: '#6a7a3a', fishing: '#3a5a6a', hunting: '#5a4a3a',
  astronomy_amateur: '#1a2a5a', meteorology: '#4a6a7a',
  // Tech & Modern
  ai_craft: '#2d3142', security: '#3a3a2a', gamedev: '#5a3a4a', robotics: '#4a4a5a',
  datascience: '#3a4a4a',
  // Unconventional
  chess: '#3a3a3a', tarot: '#4a2a4a', etiquette: '#5a4a5a', handwriting: '#4a3a4a',
  gift: '#a85a7a', grief: '#3a3a4a',
};

const L = (id, name, desc, level = 'Beginner') => ({ id, name, desc, level });

window.SUBJECTS = [
  // ========== ACADEMIC ==========
  { id: 'math', num: '01', name: 'Mathematics', tag: 'Pure reason', desc: 'The language of pattern, quantity, and space. From arithmetic to the edges of infinity.', accent: 'var(--s-math)', topicCount: 48, viz: 'math', category: 'Academic', groups: [
    { name: 'Foundations', topics: [L('arith','Arithmetic & Number','Addition, multiplication, place value.'),L('algebra','Algebra','Variables, equations, the unknown.'),L('geom','Geometry','Shape, space, proof.'),L('trig','Trigonometry','Triangles, unit circles, waves.','Intermediate')] },
    { name: 'Analysis', topics: [L('precalc','Pre-Calculus','Functions, limits.','Intermediate'),L('calc1','Calculus I','Derivatives, the math of change.','Intermediate'),L('calc2','Calculus II','Integrals and accumulation.','Intermediate'),L('diffeq','Differential Equations','How things evolve.','Advanced')] },
    { name: 'Discrete & Applied', topics: [L('stats','Statistics & Probability','Uncertainty and inference.','Intermediate'),L('linalg','Linear Algebra','Vectors and transformations.','Advanced'),L('discrete','Discrete Mathematics','Logic and graphs.','Intermediate'),L('numtheory','Number Theory','Primes and integers.','Advanced')] },
  ]},
  { id: 'physics', num: '02', name: 'Physics', tag: 'How the world moves', desc: 'From quarks to galaxies — the study of matter, energy, space, and time.', accent: '#1e3a5f', topicCount: 36, viz: 'science', category: 'Academic', groups: [
    { name: 'Classical', topics: [L('mechanics','Classical Mechanics','Newton and motion.','Intermediate'),L('em','Electromagnetism','Fields and waves.','Advanced'),L('thermo','Thermodynamics','Heat and entropy.','Intermediate'),L('waves','Waves & Optics','How light behaves.','Intermediate')] },
    { name: 'Modern', topics: [L('quantum','Quantum Mechanics','The logic of the very small.','Advanced'),L('relativity','Relativity','Space, time, gravity.','Advanced'),L('particle','Particle Physics','The standard model.','Advanced'),L('cosmology','Cosmology','The universe at scale.','Advanced')] },
  ]},
  { id: 'chemistry', num: '03', name: 'Chemistry', tag: 'Matter, rearranged', desc: 'The study of substances, their structure, and their transformations.', accent: '#6b4a2a', topicCount: 32, viz: 'science', category: 'Academic', groups: [
    { name: 'General', topics: [L('atoms','Atoms & Periodic Table','Building blocks.'),L('bonds','Chemical Bonding','Ionic, covalent, metallic.','Intermediate'),L('reactions','Reactions & Equilibrium','What drives change.','Intermediate'),L('acidbase','Acids & Bases','pH and protons.','Intermediate')] },
    { name: 'Advanced', topics: [L('organic','Organic Chemistry','The chemistry of carbon.','Advanced'),L('biochem','Biochemistry','Molecules of life.','Advanced')] },
  ]},
  { id: 'biology', num: '04', name: 'Biology', tag: 'The living world', desc: 'Cells, organisms, ecosystems — and their four-billion-year history.', accent: '#3d5f3a', topicCount: 38, viz: 'science', category: 'Academic', groups: [
    { name: 'Cells & Genes', topics: [L('cell','Cell Biology','The smallest unit of life.'),L('genetics','Genetics & DNA','Heredity and the code.','Intermediate'),L('evolution','Evolution','Descent with modification.','Intermediate')] },
    { name: 'Systems', topics: [L('ecology','Ecology','How living things interact.','Intermediate'),L('neuro','Neuroscience','The brain studying itself.','Advanced'),L('anatomy','Human Anatomy','The body, mapped.','Intermediate')] },
  ]},
  { id: 'astronomy', num: '05', name: 'Astronomy', tag: 'The sky, precisely', desc: 'Stars, planets, galaxies, and how to find them.', accent: '#1a2a4a', topicCount: 22, viz: 'science', category: 'Academic', groups: [
    { name: 'Solar & Stellar', topics: [L('solar','Solar System','Our neighborhood.'),L('stars','Stars & Stellar Evolution','Birth to supernova.','Intermediate'),L('galaxies','Galaxies','Islands of stars.','Intermediate')] },
    { name: 'Cosmos', topics: [L('bigbang','The Big Bang','Origins.','Advanced'),L('blackholes','Black Holes','Where physics bends.','Advanced')] },
  ]},
  { id: 'geology', num: '06', name: 'Geology', tag: 'The Earth, read slowly', desc: 'Rocks, plates, volcanoes, and deep time.', accent: '#6a4a2a', topicCount: 20, viz: 'geography', category: 'Academic', groups: [
    { name: 'Structure', topics: [L('plates','Plate Tectonics','Continents on the move.'),L('rocks','Rocks & Minerals','Igneous, sedimentary, metamorphic.','Intermediate'),L('volcanoes','Volcanoes','The planet letting off steam.','Intermediate')] },
    { name: 'History', topics: [L('deeptime','Deep Time','4.5 billion years, sketched.','Intermediate'),L('fossils','Fossils & Paleontology','Stories in stone.','Intermediate')] },
  ]},
  { id: 'history', num: '07', name: 'History', tag: 'The long story', desc: 'Civilizations, revolutions, and the shape of human time.', accent: 'var(--s-history)', topicCount: 44, viz: 'history', category: 'Academic', groups: [
    { name: 'Ancient', topics: [L('prehistory','Prehistory','Before writing.'),L('mesopotamia','Mesopotamia','Cities and cuneiform.'),L('egypt','Ancient Egypt','Three thousand years along the Nile.'),L('greece','Classical Greece','Polis and philosophy.','Intermediate'),L('rome','Rome','Republic to empire.','Intermediate')] },
    { name: 'Medieval & Early Modern', topics: [L('medieval','Medieval Europe','The long middle.','Intermediate'),L('islam','Islamic Golden Age','Baghdad and Córdoba.','Intermediate'),L('renaissance','Renaissance','Rebirth.','Intermediate'),L('exploration','Age of Exploration','Ships and contact.','Intermediate')] },
    { name: 'Modern', topics: [L('enlightenment','The Enlightenment','Reason and rights.','Intermediate'),L('industrial','Industrial Revolution','Steam and factories.','Intermediate'),L('ww','World Wars','Two global conflicts.','Advanced'),L('coldwar','Cold War','Superpowers.','Advanced')] },
  ]},
  { id: 'literature', num: '08', name: 'Literature', tag: 'Stories & language', desc: 'Poems, novels, plays — and how to read them well.', accent: 'var(--s-literature)', topicCount: 36, viz: 'literature', category: 'Academic', groups: [
    { name: 'Craft', topics: [L('readclose','Close Reading','Attention as the root of interpretation.'),L('narrative','Narrative & Plot','Character and conflict.'),L('poetics','Poetics & Meter','Rhythm and image.','Intermediate'),L('rhetoric','Rhetoric','The art of persuasion.','Intermediate')] },
    { name: 'Traditions', topics: [L('epic','Ancient Epic','Homer, Virgil, Gilgamesh.','Intermediate'),L('shakespeare','Shakespeare','The plays and the poetry.','Intermediate'),L('novel','The Novel','Cervantes to modernism.','Intermediate'),L('world_lit','World Literature','Beyond the Western canon.','Advanced')] },
  ]},
  { id: 'geography', num: '09', name: 'Geography', tag: 'Place & planet', desc: 'Physical systems, cultures, and the maps that hold them.', accent: 'var(--s-geography)', topicCount: 28, viz: 'geography', category: 'Academic', groups: [
    { name: 'Physical', topics: [L('climate','Climate Systems','Atmosphere and ocean.','Intermediate'),L('biomes','Biomes','Life\'s neighborhoods.')] },
    { name: 'Human', topics: [L('cities','Urban Geography','Why cities grow where they do.','Intermediate'),L('cartography','Maps & Cartography','Projections and lies.'),L('geopolitics','Geopolitics','Borders and power.','Advanced')] },
  ]},
  { id: 'art', num: '10', name: 'Art & Design', tag: 'Visual culture', desc: 'Making, seeing, and the history of human beauty.', accent: 'var(--s-art)', topicCount: 34, viz: 'art', category: 'Academic', groups: [
    { name: 'History', topics: [L('cave_to_cath','Cave to Cathedral','The longest arc.'),L('renart','Renaissance Art','Perspective and proportion.','Intermediate'),L('modern_art','Modern Art','Manet to Pollock.','Intermediate')] },
    { name: 'Practice', topics: [L('drawing','Drawing','Line and value.'),L('color','Color Theory','The wheel.'),L('composition','Composition','Arranging what the eye lands on.','Intermediate'),L('design','Design Principles','Form and function.','Intermediate')] },
  ]},
  { id: 'music', num: '11', name: 'Music', tag: 'Sound in time', desc: 'Theory, history, and the physics of what moves us.', accent: 'var(--s-music)', topicCount: 28, viz: 'music', category: 'Academic', groups: [
    { name: 'Theory', topics: [L('notation','Reading Music','Staff and clefs.'),L('harmony','Harmony','Chords and cadences.','Intermediate'),L('counterpoint','Counterpoint','Two melodies conversing.','Advanced')] },
    { name: 'History', topics: [L('classical','Classical Tradition','Baroque to Romantic.','Intermediate'),L('jazz','Jazz & Blues','An American invention.','Intermediate'),L('popular','Popular Music','Tin Pan Alley to now.')] },
  ]},
  { id: 'cs', num: '12', name: 'Computer Science', tag: 'Thinking with machines', desc: 'Algorithms, systems, and the art of programming.', accent: 'var(--s-cs)', topicCount: 40, viz: 'cs', category: 'Academic', groups: [
    { name: 'Foundations', topics: [L('programming','Programming Basics','The alphabet.'),L('algorithms','Algorithms','How long things take.','Intermediate'),L('datastructures','Data Structures','Arrays, trees, graphs.','Intermediate')] },
    { name: 'Systems & Frontiers', topics: [L('os','Operating Systems','Kernel and processes.','Advanced'),L('networks','Networks','Packets and protocols.','Advanced'),L('databases','Databases','Storing and finding.','Intermediate'),L('ai','Artificial Intelligence','Learning and reasoning.','Advanced'),L('crypto','Cryptography','Keeping secrets.','Advanced')] },
  ]},
  { id: 'philosophy', num: '13', name: 'Philosophy', tag: 'Questions, sharpened', desc: 'The discipline of thinking carefully about what matters most.', accent: '#4a3a5a', topicCount: 30, viz: 'literature', category: 'Academic', groups: [
    { name: 'Branches', topics: [L('ethics','Ethics','How should we live?'),L('epistemology','Epistemology','What can we know?','Intermediate'),L('metaphysics','Metaphysics','What is real?','Advanced'),L('logic','Logic','Valid reasoning.','Intermediate')] },
    { name: 'Traditions', topics: [L('greeks','The Greeks','Socrates to Aristotle.','Intermediate'),L('eastern','Eastern Philosophy','Confucius, the Buddha, Laozi.','Intermediate'),L('modern_phil','Modern Philosophy','Descartes to Kant.','Advanced')] },
  ]},
  { id: 'psychology', num: '14', name: 'Psychology', tag: 'The mind, studied', desc: 'Why we think, feel, and act the way we do.', accent: '#7a4a3a', topicCount: 28, viz: 'literature', category: 'Academic', groups: [
    { name: 'Core', topics: [L('cognition','Cognition','Attention, memory, thought.'),L('development','Developmental','How we grow.','Intermediate'),L('clinical','Clinical','Disorders and therapy.','Intermediate'),L('social_psych','Social','Why groups act oddly.','Intermediate')] },
  ]},
  { id: 'sociology', num: '15', name: 'Sociology', tag: 'Society, under a lens', desc: 'How groups, institutions, and cultures hold together — and don\'t.', accent: '#5a5a3a', topicCount: 20, viz: 'literature', category: 'Academic', groups: [
    { name: 'Core', topics: [L('institutions','Institutions','The invisible scaffolding.'),L('class','Class & Inequality','Why some have more.','Intermediate'),L('culture','Culture','Shared patterns.'),L('deviance','Deviance & Norms','Rules and rule-breakers.','Intermediate')] },
  ]},
  { id: 'economics', num: '16', name: 'Economics', tag: 'Scarcity & choice', desc: 'How people and societies decide what to make, trade, and value.', accent: '#3a5a5a', topicCount: 24, viz: 'cs', category: 'Academic', groups: [
    { name: 'Core', topics: [L('micro','Microeconomics','Supply, demand, prices.'),L('macro','Macroeconomics','GDP, inflation, unemployment.','Intermediate'),L('behavioral_econ','Behavioral Economics','When people aren\'t rational.','Intermediate')] },
  ]},
  { id: 'politics', num: '17', name: 'Politics', tag: 'Power, organized', desc: 'Government, institutions, and the contest over who decides.', accent: '#5a3a3a', topicCount: 20, viz: 'history', category: 'Academic', groups: [
    { name: 'Core', topics: [L('governments','Forms of Government','Democracy, autocracy, and hybrids.'),L('constitutions','Constitutions','The rulebook.','Intermediate'),L('ir','International Relations','Between states.','Advanced')] },
  ]},
  { id: 'linguistics', num: '18', name: 'Linguistics', tag: 'Language, dissected', desc: 'The scientific study of how human language works.', accent: '#4a4a6a', topicCount: 18, viz: 'literature', category: 'Academic', groups: [
    { name: 'Core', topics: [L('phonetics','Phonetics','Sounds we make.'),L('syntax','Syntax','How sentences are built.','Intermediate'),L('etymology','Etymology','Where words come from.')] },
  ]},
  { id: 'anthropology', num: '19', name: 'Anthropology', tag: 'Humans, compared', desc: 'The comparative study of cultures, past and present.', accent: '#6a5a3a', topicCount: 18, viz: 'history', category: 'Academic', groups: [
    { name: 'Branches', topics: [L('cultural_anthro','Cultural','How other people live.'),L('archaeology','Archaeology','Reading dirt.','Intermediate'),L('human_evo','Human Evolution','Becoming us.','Intermediate')] },
  ]},
  { id: 'medicine', num: '20', name: 'Medicine', tag: 'The body, repaired', desc: 'The art and science of preventing and treating disease.', accent: '#6a3a3a', topicCount: 30, viz: 'science', category: 'Academic', groups: [
    { name: 'Core', topics: [L('physiology','Physiology','How the body works.','Intermediate'),L('pharmacology','Pharmacology','How drugs act.','Advanced'),L('public_health','Public Health','Population-level care.','Intermediate')] },
  ]},
  { id: 'law', num: '21', name: 'Law', tag: 'Rules, enforced', desc: 'The codified agreements by which societies run themselves.', accent: '#3a3a5a', topicCount: 20, viz: 'literature', category: 'Academic', groups: [
    { name: 'Core', topics: [L('contract_law','Contracts','Agreements you can enforce.','Intermediate'),L('criminal','Criminal Law','Crimes and punishments.','Intermediate'),L('constitutional','Constitutional Law','The supreme rules.','Advanced')] },
  ]},
  { id: 'religion', num: '22', name: 'Religion & Mythology', tag: 'What people believe', desc: 'Traditions, scriptures, and the stories humans tell about the sacred.', accent: '#5a4a3a', topicCount: 22, viz: 'history', category: 'Academic', groups: [
    { name: 'Traditions', topics: [L('abrahamic','Abrahamic Religions','Judaism, Christianity, Islam.','Intermediate'),L('dharmic','Dharmic Traditions','Hinduism, Buddhism, Jainism.','Intermediate'),L('myth','World Mythology','Gods, heroes, and explanations.')] },
  ]},
  { id: 'architecture', num: '23', name: 'Architecture', tag: 'Space, built', desc: 'Designing buildings and the spaces between them.', accent: '#4a4a3a', topicCount: 18, viz: 'art', category: 'Academic', groups: [
    { name: 'Core', topics: [L('arch_history','History of Architecture','Pyramid to parametric.','Intermediate'),L('structural','Structural Thinking','What holds it up.','Intermediate'),L('urban_design','Urban Design','Cities as composition.','Advanced')] },
  ]},

  // ========== TRADES ==========
  { id: 'carpentry', num: '24', name: 'Carpentry', tag: 'Wood, framed', desc: 'Framing, finishing, and the measured cuts that build everything with a roof.', accent: '#6b4a2a', topicCount: 18, viz: 'art', category: 'Trades', groups: [
    { name: 'Framing', topics: [L('tools_wood','Tools of the Trade','Saws, squares, levels.'),L('framing','Framing','Walls, floors, roofs.','Intermediate'),L('joinery','Joinery','How wood meets wood.','Intermediate')] },
    { name: 'Finish', topics: [L('trim','Trim & Molding','The visible details.','Intermediate'),L('cabinetry','Cabinetry','Boxes with doors.','Advanced')] },
  ]},
  { id: 'plumbing', num: '25', name: 'Plumbing', tag: 'Water, directed', desc: 'Supply, drainage, and the hidden network in every building.', accent: '#2a4a5a', topicCount: 14, viz: 'science', category: 'Trades', groups: [
    { name: 'Core', topics: [L('pipe_types','Pipes & Fittings','Copper, PEX, PVC, cast iron.'),L('dwv','Drain-Waste-Vent','Gravity and gas.','Intermediate'),L('fixtures','Fixtures','Installing sinks and toilets.','Intermediate')] },
  ]},
  { id: 'electrical', num: '26', name: 'Electrical Work', tag: 'Current, controlled', desc: 'Wiring, circuits, and the safe flow of electricity through a building.', accent: '#a85a1a', topicCount: 16, viz: 'science', category: 'Trades', groups: [
    { name: 'Core', topics: [L('ohms','Ohm\'s Law & Basics','V = IR in everyday life.'),L('wiring','Residential Wiring','Outlets, switches, panels.','Intermediate'),L('code','Electrical Code','Why rules save lives.','Intermediate')] },
  ]},
  { id: 'welding', num: '27', name: 'Welding', tag: 'Metal, joined', desc: 'MIG, TIG, stick — the processes that fuse steel.', accent: '#4a3a3a', topicCount: 10, viz: 'science', category: 'Trades', groups: [
    { name: 'Processes', topics: [L('mig','MIG Welding','Wire feed, everyday work.'),L('tig','TIG Welding','Precision, clean welds.','Advanced'),L('stick','Stick Welding','Rugged, outdoor, portable.','Intermediate')] },
  ]},
  { id: 'masonry', num: '28', name: 'Masonry', tag: 'Stone & brick', desc: 'Mortar, block, and the walls that outlast every other trade.', accent: '#7a6a5a', topicCount: 10, viz: 'geography', category: 'Trades', groups: [
    { name: 'Core', topics: [L('brick','Bricklaying','The art of the course.','Intermediate'),L('block','Concrete Block','Structural and fast.'),L('stone','Stonework','Natural, irregular, beautiful.','Advanced')] },
  ]},
  { id: 'hvac', num: '29', name: 'HVAC', tag: 'Comfort, engineered', desc: 'Heating, ventilation, air conditioning — the climate inside.', accent: '#3a5a6a', topicCount: 12, viz: 'cs', category: 'Trades', groups: [
    { name: 'Core', topics: [L('refrigeration','Refrigeration Cycle','How cold is made.','Intermediate'),L('ductwork','Ductwork','Moving air efficiently.','Intermediate'),L('thermostats','Controls','Thermostats and zoning.')] },
  ]},
  { id: 'roofing', num: '30', name: 'Roofing', tag: 'The top layer', desc: 'Shingles, flashing, and keeping water out for thirty years.', accent: '#5a4a3a', topicCount: 8, viz: 'art', category: 'Trades', groups: [{ name: 'Core', topics: [L('shingles','Shingles','Asphalt, slate, metal, tile.'),L('flashing','Flashing','Where water tries to sneak in.','Intermediate')] }]},
  { id: 'automotive', num: '31', name: 'Auto Mechanics', tag: 'Engines, fixed', desc: 'Diagnosing and repairing cars — from oil to transmissions.', accent: '#3a3a3a', topicCount: 16, viz: 'cs', category: 'Trades', groups: [
    { name: 'Core', topics: [L('engine_basics','Engine Basics','Intake, compression, power, exhaust.'),L('brakes','Brakes','The most important system.','Intermediate'),L('diag','Diagnostics','Codes, symptoms, logic.','Intermediate')] },
  ]},
  { id: 'machining', num: '32', name: 'Machining', tag: 'Metal, shaped', desc: 'Lathes, mills, and the tolerances that make mechanical things work.', accent: '#4a4a4a', topicCount: 10, viz: 'cs', category: 'Trades', groups: [{ name: 'Core', topics: [L('lathe','The Lathe','Turning on a centerline.','Intermediate'),L('mill','The Mill','Removing metal on a plane.','Intermediate'),L('tolerances','Tolerances & Fits','Why 0.001" matters.','Advanced')] }]},
  { id: 'locksmithing', num: '33', name: 'Locksmithing', tag: 'Tumblers & pins', desc: 'How locks work, how they fail, and how to open them legitimately.', accent: '#5a5a3a', topicCount: 8, viz: 'cs', category: 'Trades', groups: [{ name: 'Core', topics: [L('pin_tumbler','Pin-Tumbler Locks','The dominant design.'),L('picking','Lock Picking','Ethics and technique.','Intermediate')] }]},
  { id: 'glazier', num: '34', name: 'Glazing', tag: 'Glass, set', desc: 'Measuring, cutting, and installing glass in every building.', accent: '#4a6a7a', topicCount: 6, viz: 'art', category: 'Trades', groups: [{ name: 'Core', topics: [L('glass_types','Glass Types','Tempered, laminated, low-E.'),L('setting','Setting Glass','Windows, showers, storefronts.','Intermediate')] }]},
  { id: 'painting_trade', num: '35', name: 'Painting & Finishing', tag: 'Surfaces, transformed', desc: 'Prep, primer, paint — the trade that makes everything else look good.', accent: '#8a4a2a', topicCount: 8, viz: 'art', category: 'Trades', groups: [{ name: 'Core', topics: [L('prep','Surface Prep','Ninety percent of the job.'),L('application','Application','Brush, roller, spray.','Intermediate')] }]},
  { id: 'flooring', num: '36', name: 'Flooring', tag: 'What you walk on', desc: 'Hardwood, tile, carpet, vinyl — installing floors that last.', accent: '#6a4a2a', topicCount: 8, viz: 'art', category: 'Trades', groups: [{ name: 'Core', topics: [L('hardwood','Hardwood','Tongue, groove, nail, sand.','Intermediate'),L('tile','Tile Setting','Thinset and tolerances.','Intermediate')] }]},
  { id: 'diesel', num: '37', name: 'Diesel Mechanics', tag: 'Heavy engines', desc: 'Trucks, tractors, and the compression-ignition workhorses of industry.', accent: '#3a3a2a', topicCount: 10, viz: 'cs', category: 'Trades', groups: [{ name: 'Core', topics: [L('diesel_basics','Diesel vs Gas','Compression ignition.'),L('ecu','Electronic Controls','Modern engine brains.','Advanced')] }]},
  { id: 'smallengine', num: '38', name: 'Small Engines', tag: 'Mowers & more', desc: 'Two-stroke and four-stroke engines — carbs, compression, spark.', accent: '#5a3a2a', topicCount: 6, viz: 'cs', category: 'Trades', groups: [{ name: 'Core', topics: [L('carb','Carburetors','The needle, the jet, the float.'),L('tuneup','Tune-Ups','Spark, fuel, air.')] }]},

  // ========== CULINARY ==========
  { id: 'cooking', num: '39', name: 'Cooking', tag: 'Heat & salt', desc: 'The everyday alchemy of turning ingredients into dinner.', accent: '#8a4a2a', topicCount: 20, viz: 'art', category: 'Culinary', groups: [
    { name: 'Technique', topics: [L('knife','Knife Skills','Grip, rock, practice.'),L('heat_transfer','Heat Transfer','Sear, roast, boil, steam.','Intermediate'),L('seasoning','Salt & Seasoning','The four foundations.'),L('stocks','Stocks & Sauces','The mother sauces.','Intermediate')] },
  ]},
  { id: 'baking', num: '40', name: 'Baking', tag: 'Flour, patience', desc: 'Bread, cookies, and the chemistry of rise.', accent: '#b87a4a', topicCount: 14, viz: 'art', category: 'Culinary', groups: [{ name: 'Core', topics: [L('bread','Bread','Flour, water, salt, yeast, time.','Intermediate'),L('cookies','Cookies','Creaming method and variations.'),L('sourdough','Sourdough','Living starters.','Advanced')] }]},
  { id: 'butchery', num: '41', name: 'Butchery', tag: 'The whole animal', desc: 'Breaking down beef, pork, lamb, and poultry into usable cuts.', accent: '#7a2a2a', topicCount: 8, viz: 'art', category: 'Culinary', groups: [{ name: 'Core', topics: [L('primals','Primal Cuts','The geography of an animal.','Intermediate'),L('boning','Boning & Trimming','Following the seams.','Advanced')] }]},
  { id: 'fermentation', num: '42', name: 'Fermentation', tag: 'Microbes, welcomed', desc: 'Kimchi, kraut, yogurt, beer — letting bacteria do the work.', accent: '#5a6a3a', topicCount: 10, viz: 'science', category: 'Culinary', groups: [{ name: 'Core', topics: [L('lacto','Lacto-Fermentation','Salt, time, vegetables.'),L('vinegar','Vinegar','The final fermentation.','Intermediate')] }]},
  { id: 'cheesemaking', num: '43', name: 'Cheesemaking', tag: 'Milk, transformed', desc: 'Curds, cultures, and the worlds of aged dairy.', accent: '#c8a857', topicCount: 6, viz: 'science', category: 'Culinary', groups: [{ name: 'Core', topics: [L('fresh_cheese','Fresh Cheeses','Ricotta, mozzarella, paneer.'),L('aged','Aged Cheeses','The cellar.','Advanced')] }]},
  { id: 'coffee', num: '44', name: 'Coffee', tag: 'The daily ritual', desc: 'From bean to cup: farming, roasting, brewing.', accent: '#4a2a1a', topicCount: 10, viz: 'art', category: 'Culinary', groups: [{ name: 'Core', topics: [L('beans','Beans & Origins','Arabica, Robusta, terroir.'),L('roasting','Roasting','Light to dark, what changes.','Intermediate'),L('brewing','Brewing Methods','Pour-over, espresso, French press.','Intermediate')] }]},
  { id: 'wine', num: '45', name: 'Wine', tag: 'Grapes, bottled', desc: 'Varietals, regions, and how to taste.', accent: '#6b2a3a', topicCount: 10, viz: 'art', category: 'Culinary', groups: [{ name: 'Core', topics: [L('varietals','Grape Varietals','What each grape brings.','Intermediate'),L('tasting','How to Taste','See, smell, sip.','Intermediate')] }]},
  { id: 'cocktails', num: '46', name: 'Cocktails', tag: 'Mixed, properly', desc: 'Spirits, ratios, ice, and the history of the bar.', accent: '#c8621a', topicCount: 8, viz: 'art', category: 'Culinary', groups: [{ name: 'Core', topics: [L('classics','The Classics','Old Fashioned, Martini, Negroni.'),L('technique','Technique','Stir, shake, build, muddle.','Intermediate')] }]},
  { id: 'bbq', num: '47', name: 'Barbecue', tag: 'Low & slow', desc: 'Smoke, time, and the American pit traditions.', accent: '#6a3a2a', topicCount: 8, viz: 'art', category: 'Culinary', groups: [{ name: 'Core', topics: [L('smoke','The Smoke','Wood, heat, patience.','Intermediate'),L('styles','Regional Styles','Texas, Carolina, Memphis, KC.')] }]},
  { id: 'pastry', num: '48', name: 'Pastry', tag: 'Sugar, butter, flour', desc: 'Laminated dough, custards, and confection.', accent: '#d89a6a', topicCount: 8, viz: 'art', category: 'Culinary', groups: [{ name: 'Core', topics: [L('lamination','Lamination','Croissants and puff pastry.','Advanced'),L('custards','Custards','Crème anglaise to pastry cream.','Intermediate')] }]},

  // ========== CRAFTS ==========
  { id: 'sewing', num: '49', name: 'Sewing', tag: 'Thread & fabric', desc: 'Hand stitching, machines, and making your own clothes.', accent: '#7a3a5a', topicCount: 12, viz: 'art', category: 'Crafts', groups: [{ name: 'Core', topics: [L('hand_stitches','Hand Stitches','Running, back, whip, slip.'),L('machine','Sewing Machines','Tension, feed, straight seams.','Intermediate'),L('patterns','Patterns & Fit','From flat to form.','Intermediate')] }]},
  { id: 'knitting', num: '50', name: 'Knitting', tag: 'Yarn, looped', desc: 'Needles, stitches, and the slow satisfaction of making fabric.', accent: '#a86a7a', topicCount: 8, viz: 'art', category: 'Crafts', groups: [{ name: 'Core', topics: [L('cast_on','Cast-On & Bind-Off','Beginning and ending.'),L('stitches','Knit & Purl','The two basic stitches.'),L('cables','Cables & Lace','The decorative layer.','Intermediate')] }]},
  { id: 'woodworking', num: '51', name: 'Woodworking', tag: 'Beyond carpentry', desc: 'Furniture, joinery, and the patient shaping of wood.', accent: '#6b4a2a', topicCount: 14, viz: 'art', category: 'Crafts', groups: [{ name: 'Core', topics: [L('hand_tools','Hand Tools','Plane, chisel, saw.','Intermediate'),L('mortise_tenon','Mortise & Tenon','The canonical joint.','Advanced'),L('finishing_wood','Finishing','Oil, varnish, wax.','Intermediate')] }]},
  { id: 'leatherwork', num: '52', name: 'Leatherwork', tag: 'Hide, worked', desc: 'Cutting, stitching, and tooling leather by hand.', accent: '#6a3a1a', topicCount: 6, viz: 'art', category: 'Crafts', groups: [{ name: 'Core', topics: [L('leather_types','Leather Types','Vegetable vs chrome tanned.'),L('saddle_stitch','Saddle Stitch','The strongest hand seam.','Intermediate')] }]},
  { id: 'pottery', num: '53', name: 'Pottery', tag: 'Clay, thrown', desc: 'Wheel, hand-building, glaze, and fire.', accent: '#8a5a3a', topicCount: 10, viz: 'art', category: 'Crafts', groups: [{ name: 'Core', topics: [L('wheel','The Wheel','Centering and pulling walls.','Intermediate'),L('glaze','Glazing','Chemistry in a bucket.','Advanced')] }]},
  { id: 'glassblowing', num: '54', name: 'Glassblowing', tag: 'Liquid, shaped', desc: 'Gathering, marvering, blowing — ancient craft in molten form.', accent: '#3a6a8a', topicCount: 6, viz: 'art', category: 'Crafts', groups: [{ name: 'Core', topics: [L('gather','The Gather','Pulling glass from the furnace.','Intermediate'),L('blowing','Blowing & Shaping','Breath and gravity.','Advanced')] }]},
  { id: 'blacksmithing', num: '55', name: 'Blacksmithing', tag: 'Iron, persuaded', desc: 'Forge, anvil, hammer — shaping hot metal by hand.', accent: '#3a2a2a', topicCount: 8, viz: 'art', category: 'Crafts', groups: [{ name: 'Core', topics: [L('forge','The Forge','Fire management.'),L('hammer_techniques','Hammer Work','Drawing, upsetting, bending.','Intermediate')] }]},
  { id: 'jewelry', num: '56', name: 'Jewelry Making', tag: 'Small, precise', desc: 'Metalsmithing at miniature scale — rings, pendants, settings.', accent: '#a88a3a', topicCount: 8, viz: 'art', category: 'Crafts', groups: [{ name: 'Core', topics: [L('solder','Soldering','Hard, medium, easy.','Intermediate'),L('setting','Stone Setting','Bezel, prong, channel.','Advanced')] }]},
  { id: 'calligraphy', num: '57', name: 'Calligraphy', tag: 'Beautiful writing', desc: 'Hands, nibs, and the slow art of letters.', accent: '#2a2a3a', topicCount: 8, viz: 'literature', category: 'Crafts', groups: [{ name: 'Core', topics: [L('italic','Italic Hand','A good first script.'),L('copperplate','Copperplate','Pointed pen, dramatic contrast.','Intermediate')] }]},
  { id: 'bookbinding', num: '58', name: 'Bookbinding', tag: 'Signatures, sewn', desc: 'Folding, stitching, and covering books by hand.', accent: '#6a3a3a', topicCount: 6, viz: 'literature', category: 'Crafts', groups: [{ name: 'Core', topics: [L('pamphlet','Pamphlet Stitch','The simplest binding.'),L('casebound','Case Binding','The hardcover.','Intermediate')] }]},
  { id: 'paperfolding', num: '59', name: 'Origami', tag: 'Paper, folded', desc: 'A single sheet, no cuts, and the deep geometry of folding.', accent: '#e09a5a', topicCount: 6, viz: 'art', category: 'Crafts', groups: [{ name: 'Core', topics: [L('bases','Basic Folds & Bases','Mountain, valley, petal, bird.'),L('modular','Modular Origami','Many sheets, one shape.','Intermediate')] }]},

  // ========== LIFE SKILLS ==========
  { id: 'finance', num: '60', name: 'Personal Finance', tag: 'Money, managed', desc: 'Budgeting, saving, investing, and escaping lifestyle creep.', accent: '#3a5a4a', topicCount: 12, viz: 'cs', category: 'Life Skills', groups: [{ name: 'Core', topics: [L('budgeting','Budgeting','Knowing where it goes.'),L('investing','Investing','Index funds and compound interest.','Intermediate'),L('taxes','Taxes','The annual chore.','Intermediate')] }]},
  { id: 'nutrition', num: '61', name: 'Nutrition', tag: 'Food, for fuel', desc: 'Macros, micros, and eating to feel good.', accent: '#4a6a3a', topicCount: 10, viz: 'science', category: 'Life Skills', groups: [{ name: 'Core', topics: [L('macros','Macronutrients','Protein, fat, carbs.'),L('micronutrients','Micronutrients','Vitamins and minerals.','Intermediate')] }]},
  { id: 'firstaid', num: '62', name: 'First Aid', tag: 'When seconds matter', desc: 'CPR, wounds, choking — the skills you hope never to use.', accent: '#8a2a2a', topicCount: 8, viz: 'science', category: 'Life Skills', groups: [{ name: 'Core', topics: [L('cpr','CPR & AED','30:2 and calm hands.'),L('wounds','Bleeding & Wounds','Pressure, elevation, clean.'),L('choking','Choking','Heimlich and back blows.')] }]},
  { id: 'parenting', num: '63', name: 'Parenting', tag: 'Raising humans', desc: 'Attachment, development, discipline, and getting through it.', accent: '#8a5a6a', topicCount: 10, viz: 'literature', category: 'Life Skills', groups: [{ name: 'Core', topics: [L('attachment','Attachment','The foundation of trust.'),L('stages','Developmental Stages','What to expect.','Intermediate')] }]},
  { id: 'negotiation', num: '64', name: 'Negotiation', tag: 'Getting to yes', desc: 'Interests, anchors, and finding value the other side missed.', accent: '#4a3a5a', topicCount: 6, viz: 'literature', category: 'Life Skills', groups: [{ name: 'Core', topics: [L('interests','Interests vs Positions','What people actually want.'),L('batna','BATNA','The walk-away point.','Intermediate')] }]},
  { id: 'publicspeaking', num: '65', name: 'Public Speaking', tag: 'Standing up, speaking out', desc: 'Structure, delivery, nerves — the ancient art of moving a room.', accent: '#5a3a4a', topicCount: 8, viz: 'literature', category: 'Life Skills', groups: [{ name: 'Core', topics: [L('structure','Talk Structure','Open strong, close stronger.'),L('delivery','Delivery','Pace, pause, eye contact.','Intermediate')] }]},
  { id: 'timemgmt', num: '66', name: 'Time Management', tag: 'Hours, respected', desc: 'Attention, priorities, and getting things done without burning out.', accent: '#3a4a5a', topicCount: 6, viz: 'cs', category: 'Life Skills', groups: [{ name: 'Core', topics: [L('priorities','Priorities','Urgent vs important.'),L('deep_work','Deep Work','Protecting the good hours.','Intermediate')] }]},
  { id: 'cleaning', num: '67', name: 'Cleaning & Home Care', tag: 'The quiet arts', desc: 'Routines, products, and keeping a home functional.', accent: '#5a7a8a', topicCount: 6, viz: 'art', category: 'Life Skills', groups: [{ name: 'Core', topics: [L('routines','Routines','Daily, weekly, seasonal.'),L('stains','Stain Removal','The chemistry of "oh no".')] }]},
  { id: 'carrepair', num: '68', name: 'Basic Car Care', tag: 'For the non-mechanic', desc: 'Oil, tires, jumpers, and the things every driver should know.', accent: '#3a3a3a', topicCount: 6, viz: 'cs', category: 'Life Skills', groups: [{ name: 'Core', topics: [L('oil_change','Oil & Fluids','When and what.'),L('tires','Tires','Pressure, rotation, tread.'),L('jumping','Jumping a Battery','Red to red, black to ground.')] }]},
  { id: 'gardening', num: '69', name: 'Gardening', tag: 'Growing things', desc: 'Soil, seeds, seasons — making a patch of land productive.', accent: '#4a6a3a', topicCount: 10, viz: 'science', category: 'Life Skills', groups: [{ name: 'Core', topics: [L('soil','Soil','Where everything starts.'),L('veggies','Vegetable Gardening','Starting from seed.','Intermediate'),L('perennials','Perennials','Plants that come back.','Intermediate')] }]},
  { id: 'composting', num: '70', name: 'Composting', tag: 'Waste, recycled', desc: 'Greens, browns, moisture, heat — making soil from scraps.', accent: '#5a4a2a', topicCount: 4, viz: 'science', category: 'Life Skills', groups: [{ name: 'Core', topics: [L('hot_comp','Hot Composting','Fast, managed decomposition.'),L('worm','Vermicomposting','Worms do the work.','Intermediate')] }]},
  { id: 'beekeeping', num: '71', name: 'Beekeeping', tag: 'Honey, harvested', desc: 'Hive management and the ancient partnership with bees.', accent: '#b88a3a', topicCount: 6, viz: 'science', category: 'Life Skills', groups: [{ name: 'Core', topics: [L('hive','The Hive','Queen, workers, drones.'),L('seasons_bees','Seasonal Management','The beekeeper\'s year.','Intermediate')] }]},
  { id: 'sailing', num: '72', name: 'Sailing', tag: 'Wind, harnessed', desc: 'Points of sail, rigging, and reading the water.', accent: '#2a4a6a', topicCount: 8, viz: 'geography', category: 'Life Skills', groups: [{ name: 'Core', topics: [L('points','Points of Sail','Upwind, reach, run.'),L('tacking','Tacking & Jibing','Changing direction.','Intermediate')] }]},
  { id: 'survival', num: '73', name: 'Wilderness Survival', tag: 'When it goes wrong', desc: 'Shelter, fire, water, signal — the priorities when lost.', accent: '#4a5a3a', topicCount: 8, viz: 'geography', category: 'Life Skills', groups: [{ name: 'Core', topics: [L('priorities_survival','The Rule of Threes','Air, shelter, water, food.'),L('fire','Fire','Tinder, kindling, fuel.')] }]},
  { id: 'knots', num: '74', name: 'Knots', tag: 'Rope, with intent', desc: 'Bowline, clove hitch, figure-eight — the essential ten.', accent: '#6a5a3a', topicCount: 4, viz: 'art', category: 'Life Skills', groups: [{ name: 'Core', topics: [L('essential','The Essential Knots','Bowline, clove, figure-eight, taut-line.'),L('uses','When to Use What','Every knot has a job.','Intermediate')] }]},
  { id: 'mapreading', num: '75', name: 'Map & Compass', tag: 'Without GPS', desc: 'Topo maps, bearings, and not getting lost.', accent: '#5a6a4a', topicCount: 4, viz: 'geography', category: 'Life Skills', groups: [{ name: 'Core', topics: [L('topo','Reading a Topo','Contours and relief.'),L('bearings','Taking a Bearing','Map to compass and back.','Intermediate')] }]},

  // ========== ARTS & PERFORMANCE ==========
  { id: 'photography', num: '76', name: 'Photography', tag: 'Light, captured', desc: 'Exposure, composition, and seeing like a camera.', accent: '#3a3a3a', topicCount: 12, viz: 'art', category: 'Arts', groups: [{ name: 'Core', topics: [L('exposure','The Exposure Triangle','Aperture, shutter, ISO.'),L('composition_photo','Composition','The frame as a decision.','Intermediate'),L('light','Light','Quality, direction, color.','Intermediate')] }]},
  { id: 'film', num: '77', name: 'Filmmaking', tag: 'Stories in motion', desc: 'Shot, scene, cut — the grammar of moving pictures.', accent: '#2a2a2a', topicCount: 10, viz: 'art', category: 'Arts', groups: [{ name: 'Core', topics: [L('shots','Shot Types','Wide, medium, close.','Intermediate'),L('editing','Editing','The invisible art.','Advanced')] }]},
  { id: 'theater', num: '78', name: 'Theater & Acting', tag: 'The live art', desc: 'Voice, body, text — bringing words to a stage.', accent: '#6a2a3a', topicCount: 8, viz: 'literature', category: 'Arts', groups: [{ name: 'Core', topics: [L('acting','Acting','Given circumstances and actions.','Intermediate'),L('directing','Directing','Shaping the whole.','Advanced')] }]},
  { id: 'dance', num: '79', name: 'Dance', tag: 'The body, musical', desc: 'Ballet, modern, hip-hop, social — movement as language.', accent: '#8a3a5a', topicCount: 8, viz: 'music', category: 'Arts', groups: [{ name: 'Core', topics: [L('ballet','Ballet','The classical foundation.','Intermediate'),L('social_dance','Social Dances','Salsa, swing, tango.')] }]},
  { id: 'magic', num: '80', name: 'Stage Magic', tag: 'Wonder, engineered', desc: 'Close-up, sleight of hand, and the theater of deception.', accent: '#3a2a4a', topicCount: 6, viz: 'art', category: 'Arts', groups: [{ name: 'Core', topics: [L('card','Card Magic','The 52-card classroom.'),L('misdirection','Misdirection','Managing attention.','Intermediate')] }]},
  { id: 'stand_up', num: '81', name: 'Comedy Writing', tag: 'Jokes, engineered', desc: 'Setup, punch, turn — the architecture of a laugh.', accent: '#a85a3a', topicCount: 6, viz: 'literature', category: 'Arts', groups: [{ name: 'Core', topics: [L('joke_structure','Joke Structure','Setup and payoff.'),L('voice','Finding Your Voice','Point of view matters.','Intermediate')] }]},
  { id: 'djing', num: '82', name: 'DJing', tag: 'The crowd, read', desc: 'Beatmatching, phrasing, and holding a dancefloor.', accent: '#4a3a5a', topicCount: 6, viz: 'music', category: 'Arts', groups: [{ name: 'Core', topics: [L('beatmatch','Beatmatching','Two records, one tempo.','Intermediate'),L('phrasing','Phrasing','Mixing on the right bar.','Advanced')] }]},

  // ========== SPORTS / MOVEMENT ==========
  { id: 'yoga', num: '83', name: 'Yoga', tag: 'Body and breath', desc: 'Asana, pranayama, and the long tradition behind the mat.', accent: '#6a5a7a', topicCount: 6, viz: 'art', category: 'Movement', groups: [{ name: 'Core', topics: [L('sun_sal','Sun Salutations','The moving prayer.'),L('breath','Breath Practice','Pranayama basics.','Intermediate')] }]},
  { id: 'martial', num: '84', name: 'Martial Arts', tag: 'Disciplined defense', desc: 'Striking, grappling, and the many schools of trained combat.', accent: '#5a3a2a', topicCount: 8, viz: 'art', category: 'Movement', groups: [{ name: 'Core', topics: [L('striking','Striking Arts','Boxing, Muay Thai, karate.'),L('grappling','Grappling Arts','Judo, wrestling, BJJ.','Intermediate')] }]},
  { id: 'running', num: '85', name: 'Running', tag: 'One foot, then the other', desc: 'Form, training, and going further than you thought you could.', accent: '#3a5a5a', topicCount: 6, viz: 'cs', category: 'Movement', groups: [{ name: 'Core', topics: [L('form','Form','Posture, cadence, landing.'),L('training','Training Plans','Easy, tempo, long.','Intermediate')] }]},
  { id: 'climbing', num: '86', name: 'Rock Climbing', tag: 'Up, carefully', desc: 'Bouldering, sport, trad — vertical problem-solving.', accent: '#6a4a3a', topicCount: 6, viz: 'geography', category: 'Movement', groups: [{ name: 'Core', topics: [L('technique_climb','Technique','Footwork first.'),L('safety','Safety Systems','Knots, belays, anchors.','Intermediate')] }]},
  { id: 'cycling', num: '87', name: 'Cycling', tag: 'Two wheels', desc: 'Road, mountain, gravel — the machine and the craft.', accent: '#3a5a3a', topicCount: 6, viz: 'cs', category: 'Movement', groups: [{ name: 'Core', topics: [L('maintenance','Bike Maintenance','Chain, brakes, tires.'),L('riding','Group Riding','Pacelines and etiquette.','Intermediate')] }]},

  // ========== NATURE ==========
  { id: 'birding', num: '88', name: 'Birding', tag: 'A life list', desc: 'Identification by shape, sound, and habit.', accent: '#5a6a4a', topicCount: 6, viz: 'science', category: 'Nature', groups: [{ name: 'Core', topics: [L('id','Identification','GISS — general impression, size, shape.'),L('calls','Birdsong','The ear matters more than the eye.','Intermediate')] }]},
  { id: 'foraging', num: '89', name: 'Foraging', tag: 'Eat the landscape', desc: 'Edible plants, mushrooms, and the rule of absolute certainty.', accent: '#6a7a3a', topicCount: 6, viz: 'science', category: 'Nature', groups: [{ name: 'Core', topics: [L('safety_forage','Safety & Ethics','Never eat unless 100% sure.'),L('mushrooms','Mushrooms','High reward, high risk.','Advanced')] }]},
  { id: 'fishing', num: '90', name: 'Fishing', tag: 'Patience, baited', desc: 'Freshwater, saltwater, fly — reading the water.', accent: '#3a5a6a', topicCount: 6, viz: 'geography', category: 'Nature', groups: [{ name: 'Core', topics: [L('knots_fish','Essential Knots','Clinch, palomar, blood.'),L('flyfishing','Fly Fishing','The cast and the drift.','Advanced')] }]},
  { id: 'hunting', num: '91', name: 'Hunting', tag: 'Ethics & skill', desc: 'Tracking, firearms safety, and fair chase.', accent: '#5a4a3a', topicCount: 6, viz: 'geography', category: 'Nature', groups: [{ name: 'Core', topics: [L('safety_gun','Firearms Safety','The four rules.'),L('tracking','Tracking','Reading sign.','Intermediate')] }]},
  { id: 'astronomy_amateur', num: '92', name: 'Stargazing', tag: 'The sky, by eye', desc: 'Constellations, deep-sky objects, and a good pair of binoculars.', accent: '#1a2a5a', topicCount: 6, viz: 'science', category: 'Nature', groups: [{ name: 'Core', topics: [L('constellations','Constellations','Seasonal patterns.'),L('scope','Using a Telescope','Aperture beats magnification.','Intermediate')] }]},
  { id: 'meteorology', num: '93', name: 'Weather Reading', tag: 'The sky, forecast', desc: 'Clouds, fronts, barometric pressure — predicting without the app.', accent: '#4a6a7a', topicCount: 6, viz: 'science', category: 'Nature', groups: [{ name: 'Core', topics: [L('clouds','Cloud Types','Cumulus, stratus, cirrus.'),L('fronts','Fronts','Warm, cold, stationary.','Intermediate')] }]},

  // ========== TECH ==========
  { id: 'ai_craft', num: '94', name: 'Working with AI', tag: 'The new literacy', desc: 'Prompting, evaluation, and using language models well.', accent: '#2d3142', topicCount: 8, viz: 'cs', category: 'Tech', groups: [{ name: 'Core', topics: [L('prompts','Prompting','Clarity, context, constraints.'),L('limits','Limitations','What AI gets wrong.','Intermediate')] }]},
  { id: 'security', num: '95', name: 'Cybersecurity', tag: 'Defense in depth', desc: 'Threat models, passwords, and thinking like an attacker.', accent: '#3a3a2a', topicCount: 8, viz: 'cs', category: 'Tech', groups: [{ name: 'Core', topics: [L('passwords','Passwords & 2FA','Managers and keys.'),L('threats','Common Threats','Phishing, malware, social engineering.','Intermediate')] }]},
  { id: 'gamedev', num: '96', name: 'Game Development', tag: 'Interactive worlds', desc: 'Engines, design, and the loop that makes games work.', accent: '#5a3a4a', topicCount: 8, viz: 'cs', category: 'Tech', groups: [{ name: 'Core', topics: [L('loop','The Game Loop','Update, render, repeat.','Intermediate'),L('design_game','Game Design','Mechanics, dynamics, aesthetics.','Intermediate')] }]},
  { id: 'robotics', num: '97', name: 'Robotics', tag: 'Machines that act', desc: 'Sensors, actuators, and the code between them.', accent: '#4a4a5a', topicCount: 6, viz: 'cs', category: 'Tech', groups: [{ name: 'Core', topics: [L('sensors','Sensors & Actuators','Inputs and outputs.','Intermediate'),L('control','Control Systems','PID and beyond.','Advanced')] }]},
  { id: 'datascience', num: '98', name: 'Data Science', tag: 'Finding the story', desc: 'Cleaning, modeling, and communicating what the data says.', accent: '#3a4a4a', topicCount: 8, viz: 'cs', category: 'Tech', groups: [{ name: 'Core', topics: [L('cleaning','Data Cleaning','80% of the job.','Intermediate'),L('viz','Visualization','Letting data speak.','Intermediate')] }]},

  // ========== UNCONVENTIONAL ==========
  { id: 'chess', num: '99', name: 'Chess', tag: 'The board game', desc: 'Openings, middlegame, endgame — and the long tradition of the 64 squares.', accent: '#3a3a3a', topicCount: 8, viz: 'cs', category: 'Games', groups: [{ name: 'Core', topics: [L('openings','Openings','Development, center, king safety.'),L('endgame','Endgame','Where concrete skill lives.','Intermediate')] }]},
  { id: 'etiquette', num: '100', name: 'Etiquette & Manners', tag: 'Small kindnesses', desc: 'Table manners, correspondence, and not being a burden.', accent: '#5a4a5a', topicCount: 6, viz: 'literature', category: 'Unconventional', groups: [{ name: 'Core', topics: [L('table','Table Manners','The silent language.'),L('letters','Correspondence','Thank-you notes still work.')] }]},
];
