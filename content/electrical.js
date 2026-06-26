// content/electrical.js
// Batch: B07-trades-I
// Last updated: 2026-04-23 by BATCH B07-trades-I
//
// Topics: ohms, wiring, code
// Scaffold: lead -> figure -> whole idea -> before you start
//   -> sub-skills with worked examples + common mistakes
//   -> troubleshooting -> going deeper -> practice -> self-check -> first project.

window.CONTENT = window.CONTENT || {};
window.CONTENT.electrical = {
  subjectId: 'electrical',
  version: 3,
  lastUpdated: '2026-04-23',
  curator: 'BATCH B07-trades-I',
  topics: {

    // ——— OHM'S LAW & BASICS ———
    ohms: {
      id: 'ohms',
      name: 'Ohm\'s Law & Basics',
      level: 'Beginner',
      dek: 'V equals I times R — three letters that run every circuit in your house.',
      readTime: '17 min',

      sections: ['Whole idea', 'Before you start', 'Voltage, current, resistance', 'Ohm\'s Law', 'Power', 'AC vs DC', 'Wire sizing', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'In 1827, a German high-school teacher named Georg Ohm published a pamphlet in which he argued that the current through a wire was directly proportional to the voltage across it. The Prussian academic establishment called the work a fabric of naked fancies; he lost his teaching job. Thirty years later the same relationship was the foundation of every electrical engineering curriculum in the world. Every working electrician uses it, often without naming it, every time she picks the right wire for the right breaker.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ohm%27s_Law_with_Voltage_source_TeX.svg?width=1200', caption: 'The circuit that defines Ohm\'s law: source, resistance, current.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'Electricity in a house is water in a pipe. Voltage is the pressure, current is the flow, resistance is the narrowness. Multiply current by voltage and you get power. Pick a wire too small for the current and it gets hot. Pick a breaker too large for the wire and the wire burns before the breaker trips. That single sentence is the entire theory behind every residential circuit.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'A digital multimeter ($40 for a Fluke entry model), a non-contact voltage tester ($15), wire strippers, linesman\'s pliers, a tick tracer, insulated screwdrivers. For hands-on lab work: a bench power supply and a handful of resistors (1 kΩ, 10 kΩ, 100 kΩ) from any electronics hobby shop.' },
        { type: 'h3', text: 'Safety' },
        { type: 'p', text: 'Never assume a circuit is dead. Test with a non-contact tester before touching any wire. Then test your tester on a known live circuit, then test your wire, then test your tester again. The one-hand rule: keep one hand in your pocket when working near live voltage, so current cannot cross your chest.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'Voltage (V) — potential difference, in volts. Current (I) — flow, in amps. Resistance (R) — opposition to flow, in ohms (Ω). Power (P) — work per second, in watts. Conductor — wire. Insulator — the plastic sheath. AC — alternating current (wall outlet). DC — direct current (battery). Hot — the energized conductor. Neutral — the return to source. Ground — safety path to earth.' },

        { type: 'h2', text: 'The three quantities' },
        { type: 'p', text: 'Voltage is the pressure pushing electrons through a wire. Current is the flow itself — electrons passing a point per second. Resistance is how hard the wire or load pushes back. A higher voltage pushes more current through the same resistance. A higher resistance reduces current at the same voltage. The three are always related, always at the same instant.' },

        { type: 'h2', text: 'Ohm\'s Law' },
        { type: 'p', text: 'V = I × R. Rearranged: I = V/R, R = V/I. Every troubleshooter in the trade uses this on the back of a receipt. Know two of the three, solve for the third.' },
        { type: 'aside', label: 'Worked example', text: 'A 120 V circuit drives a 12 Ω heating element. Current: I = V/R = 120/12 = 10 amps. If the element is wired with 14-gauge wire (rated for 15 amps), you are within limits. If it were wired with 16-gauge (rated 13 amps at residential use), you are over — the wire will heat, the insulation will degrade, and eventually the wire will fail.' },
        { type: 'aside', label: 'Common mistake', text: 'Forgetting that household resistors — filaments, heaters, motors — are not constant. A light bulb\'s resistance triples when hot vs cold; motors draw inrush current at startup that can be 6× running current. Sizing breakers for inrush is why you see "time-delay" fuses and magnetic-hydraulic breakers on motor circuits.' },

        { type: 'h2', text: 'Power and why wires get hot' },
        { type: 'p', text: 'Power is voltage times current: P = V × I. A 1,500-watt hair dryer on 120 V draws 12.5 amps. Push that through an undersized wire and the wire\'s own resistance turns current into heat — enough to start a fire. That is the whole reason the American Wire Gauge scale and the breaker system exist.' },
        { type: 'aside', label: 'Worked example', text: 'Power formulas combined: P = V × I = I² × R. For the 10-amp heating circuit above, P = 120 × 10 = 1,200 watts. Equivalently, I² × R = 100 × 12 = 1,200 watts. Same answer, different path.' },

        { type: 'h2', text: 'AC versus DC' },
        { type: 'p', text: 'Direct current flows one way — battery, phone charger output. Alternating current reverses direction 60 times a second in North America, 50 in most of the world. The US grid settled on AC because high-voltage AC travels long distances efficiently and can be stepped down by transformers. The wall outlet in your kitchen carries single-phase 120 V AC; the service entrance brings split-phase 240/120 V from the utility.' },

        { type: 'h2', text: 'Wire sizing — the practical consequence' },
        { type: 'p', text: 'The American Wire Gauge (AWG) scale runs inverted: smaller numbers are thicker wires that carry more current. For residential branch circuits: 14 AWG for 15 amps, 12 AWG for 20 amps, 10 AWG for 30 amps, 8 AWG for 40–50 amps (electric ranges, dryers), 6 AWG for 60 amps, 4 AWG for 100 amps. The NEC table 310.16 is where this lives; Ugly\'s Electrical References has it on a pocket-sized page.' },
        { type: 'aside', label: 'Worked example', text: 'A 20-amp kitchen outlet circuit feeding a microwave (1,100 W) and a toaster (1,500 W) simultaneously: total 2,600 W / 120 V = 21.7 amps. The 20-amp breaker trips. Code requires at least two 20-amp small-appliance circuits in a kitchen for exactly this reason.' },

        { type: 'h2', text: 'Troubleshooting' },
        { type: 'p', text: 'A breaker trips on a specific appliance. The load is drawing more than the breaker rating — possibly a motor with stuck bearings. An outlet is warm to the touch. Loose connection at the terminal; the heat is being generated by high resistance in a bad contact. Replace. A circuit works sometimes but not always. Intermittent bad connection inside a box or at a wire nut; pull and redo. All tests read near-zero. The circuit is de-energized; check the breaker and the upstream terminal.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'Beyond Ohm\'s law, the next concepts are reactance (AC circuits with capacitors or inductors), power factor (the phase lag between voltage and current in motor loads), and three-phase power (the commercial service). MIT OCW 6.002 is the free undergraduate-level deep dive; Ugly\'s is the pocket reference.' },

        { type: 'aside', label: 'Practice this week', text: 'With a multimeter, measure the voltage at three wall outlets in your house. Then, with the circuit breaker off, measure the resistance across the outlet slots (should be nearly infinite, since no load is connected). Turn the breaker back on and measure again with a known load (a lamp) plugged in. You will see every Ohm\'s-law quantity on a cheap meter.' },
        { type: 'aside', label: 'Self-check', text: 'What is the current through a 240-ohm resistor at 120 V? (0.5 A.) What gauge wire is required for a 30-amp circuit? (10 AWG.) Why does a bulb filament have higher resistance cold? (No, it has lower resistance cold — resistance rises with temperature.) If any stumps you, watch Khan Academy\'s "Intro to circuits and Ohm\'s law."' },

        { type: 'callout', text: 'First project: buy a $15 multimeter and measure voltage, current, and resistance on three household appliances. You will internalize the units and the relationships faster than a week of reading.' },
      ],

      keyTerms: ['voltage', 'current', 'resistance', 'watt', 'ampere', 'alternating current', 'direct current', 'American Wire Gauge', 'breaker', 'ground-fault circuit interrupter', 'kirchhoff', 'impedance', 'power factor', 'reactance'],

      resources: {
        videos: [
          { id: 'F_vLWkkOETI', source: 'youtube', url: 'https://www.youtube.com/watch?v=F_vLWkkOETI', title: 'Introduction to circuits and Ohm\'s law', channel: 'Khan Academy', duration: '12:22', why: 'Sal Khan\'s classic. Start here.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/user/MikeHoltNEC', title: 'Mike Holt NEC — electrical theory basics', channel: 'Mike Holt', duration: 'variable', why: 'The most recognized NEC instructor in the US.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@ElectricianU', title: 'Electrician U — electrical theory', channel: 'Electrician U (Dustin Stelzer)', duration: 'variable', why: 'Modern trade school on YouTube.' },
          { id: null, source: 'other', url: 'https://www.thisoldhouse.com/', title: 'This Old House — electrical primer', channel: 'This Old House', duration: 'variable', why: 'Scott Caron and Heath Eastman on panels and circuits.', featured: false },
          { id: null, source: 'other', url: 'https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/', title: 'MIT 6.002 — Circuits and Electronics', channel: 'MIT OpenCourseWare', duration: 'variable', why: 'The best free deep-dive.', featured: false },
        ],
        books: [
          { title: 'Wiring a House', author: 'Rex Cauldwell', year: 2014, url: 'https://archive.org/details/wiringhouse0000caul_m3v3', why: 'The Taunton classic. Theory chapter every apprentice should read twice.' },
          { title: 'Ugly\'s Electrical References', author: 'Charles R. Miller', year: 2023, url: 'https://www.uglys.net/', why: 'The in-truck pocket reference.' },
          { title: 'The Art of Electronics', author: 'Paul Horowitz and Winfield Hill', year: 2015, url: '', why: 'How circuits actually work, at engineering depth.' },
          { title: 'Delmar\'s Standard Textbook of Electricity', author: 'Stephen L. Herman', year: 2019, url: '', why: 'The community-college classroom standard.' },
        ],
        articles: [
          { title: 'Ohm\'s law', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Ohm%27s_law', why: 'Derivation, history, non-ohmic conductors.', year: null },
          { title: 'Electrical wiring', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Electrical_wiring', why: 'Good overview of wire types and standards.', year: null },
          { title: 'American wire gauge', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/American_wire_gauge', why: 'Why AWG 14 is smaller than AWG 12.', year: null },
        ],
        courses: [
          { title: 'MIT 6.002 — Circuits and Electronics', provider: 'MIT OCW', url: 'https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/', free: true, why: 'Full video lectures by Anant Agarwal.' },
          { title: 'Khan Academy — Electrical Engineering', provider: 'Khan Academy', url: 'https://www.khanacademy.org/science/electrical-engineering', free: true, why: 'Gentle progression through DC circuits and semiconductors.' },
        ],
        tools: [
          { title: 'Fluke multimeter', url: 'https://www.fluke.com/', why: 'Industry standard.' },
          { title: 'Klein Tools', url: 'https://www.kleintools.com/', why: 'American hand tools since 1857.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ohm%27s_Law_with_Voltage_source_TeX.svg?width=1200', caption: 'Ohm\'s law circuit.', credit: 'Wikimedia Commons', alt: 'Ohm\'s law' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Electric_circuit_simple.svg?width=1200', caption: 'A simple electric circuit.', credit: 'Wikimedia Commons', alt: 'Simple circuit' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Georg_Simon_Ohm.jpg?width=1200', caption: 'Georg Simon Ohm (1789–1854).', credit: 'Wikimedia Commons', alt: 'Georg Ohm' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Breaker_panel.jpg?width=1200', caption: 'A residential breaker panel.', credit: 'Wikimedia Commons', alt: 'Breaker panel' },
        ],
        animations: [
          { youtubeId: 'F_vLWkkOETI', caption: 'Khan Academy: circuits and Ohm\'s law.', why: 'Twelve-minute foundation.' },
        ],
      },

      seeAlso: ['wiring', 'code', 'thermostats', 'refrigeration'],
      prereqs: [],
      leadsTo: ['wiring', 'code'],

      chapterActivity: 'A multimeter night school at a Lower East Side makerspace — read voltage, current, and resistance on real circuits.',

      sources: ['https://en.wikipedia.org/wiki/Ohm%27s_law', 'https://en.wikipedia.org/wiki/Electrical_wiring'],
      verifiedAt: '2026-04-23',
    },

    // ——— RESIDENTIAL WIRING ———
    wiring: {
      id: 'wiring',
      name: 'Residential Wiring',
      level: 'Intermediate',
      dek: 'Outlets, switches, panels — the day-to-day craft of running current safely through a house.',
      readTime: '20 min',

      sections: ['Whole idea', 'Before you start', 'The service & panel', 'NM cable & boxes', 'Outlets', 'Switches', 'GFCI & AFCI', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'A single-family American house is typically fed by the utility with 200 amps of split-phase 240-volt service, entering through a meter, passing into a main panel, and branching into twenty or thirty circuits that feed outlets, lights, appliances, and the heat. The entire system is designed so that, in a failure, the smallest and cheapest component — the breaker in the panel — is the one that gives way, long before the wire gets hot enough to ignite the wood around it. Residential wiring is not complicated once you have seen it done ten times. It is disciplined.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Electrical_outlet_wired.jpg?width=1200', caption: 'A residential receptacle terminated with hot, neutral, ground.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'Every circuit is a complete loop from the breaker, through the load, back to the neutral bar. Every branch circuit has three conductors — hot, neutral, and ground — running in sheathed cable through the walls to outlets, switches, and lights. Every splice happens inside a junction box. Every device is screwed to a stud or joist, then screwed to the cable going in and out of it. That structure repeats, on every circuit, in every house.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'Wire strippers with marked gauges. Linesman\'s pliers. A 4-in-1 screwdriver. A non-contact voltage tester. A multimeter. A drywall saw. A drill with 1/2" auger bit for boring through studs. Staples and a staple gun for fastening cable. Wire nuts.' },
        { type: 'h3', text: 'Safety' },
        { type: 'p', text: 'Turn off the circuit at the breaker. Test with a non-contact tester. Test your tester on a known live circuit. Then test your wire. Then test your tester again. Every electrical fatality in American houses is a story about someone who skipped that sequence. Never work on a live panel; call a licensed electrician for service-side work.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'Service entrance — the utility\'s connection to the house. Main breaker — the top-of-panel switch that disconnects the whole house. Branch circuit — a single breaker feeding one or more outlets/lights/loads. NM cable — non-metallic sheathed cable (Romex). Junction box — the metal or plastic enclosure containing a splice. Device — an outlet, switch, or light fixture. Pigtail — a short wire spliced to two others so only one wire lands on a screw. Bond — the intentional connection between metal parts to ground.' },

        { type: 'h2', text: 'The service and the panel' },
        { type: 'p', text: 'Two hot conductors and one neutral enter the main panel at 240/120 V split-phase. The main breaker disconnects the whole house. Two hot bus bars carry 240 V across the panel; the neutral bar and ground bar run beside them. Each 120-V branch circuit takes one hot from a single-pole breaker, one neutral from the neutral bar, and one ground. A 240-V appliance circuit takes both hots via a two-pole breaker.' },

        { type: 'h2', text: 'NM cable and boxes' },
        { type: 'p', text: 'Romex (trade name for non-metallic sheathed cable) carries the conductors through walls. 14/2 NM cable contains two 14 AWG insulated conductors plus a bare ground, sheathed in plastic. 14/3 adds a third insulated conductor (red, for three-way switches). Every connection happens inside a code-approved box with room for the splices according to "box fill" rules.' },
        { type: 'aside', label: 'Worked example', text: 'Running a circuit: staple cable to every framing member within 8 inches of a box, then every 4½ feet through the field. Drill holes in studs at least 1¼ inches from the face (or add metal nail plates), run the cable through, secure into the box with a cable connector, strip 6 inches of sheath, trim 3/4" of insulation off each conductor before landing on terminals.' },
        { type: 'aside', label: 'Common mistake', text: 'Running cable against the face of a stud too close to the drywall. Code requires cable to be at least 1¼" from the nearest face, or protected by a steel nail plate. An un-protected cable against the face will eventually catch a drywall screw, and the short-circuit shows up later as a mystery breaker trip.' },

        { type: 'h2', text: 'Outlets' },
        { type: 'p', text: 'A duplex receptacle has hot (brass) screws, neutral (silver) screws, a ground (green) screw, and a break-off tab that lets you split the top half from the bottom. Most common wiring: pigtail the hots together with a short "pigtail" to the brass screw; same for neutrals; ground to the green. That way the circuit continues even if the receptacle is replaced.' },
        { type: 'aside', label: 'Worked example', text: 'A mid-run outlet on a 15-amp circuit: two 14/2 cables enter the box (one "in", one "out"). Strip both. Twist the two blacks (hots) and a 6" pigtail together with a wire nut; the pigtail lands on the brass screw. Twist whites the same way to silver. Grounds: twist all three with a green pigtail to the green screw. Fold the conductors into the box, screw the receptacle on.' },

        { type: 'h2', text: 'Switches' },
        { type: 'p', text: 'A single-pole switch interrupts the hot between the panel and a light. Two screws (brass), one for line in, one for load out, and a ground. A three-way switch is two switches on a pair of "travelers" that allow either to toggle the light from opposite ends of a hallway or stairway. A four-way goes in the middle of two three-ways for control from three or more locations.' },
        { type: 'aside', label: 'Common mistake', text: 'Wiring a three-way by trial and error. The common terminal (darker or marked COM) is different on each brand. Identify the common terminal first; the two travelers can go on either of the remaining terminals, but the common must be the hot-feed wire on one switch and the load-out on the other.' },

        { type: 'h2', text: 'GFCI and AFCI' },
        { type: 'p', text: 'The ground-fault circuit interrupter compares current leaving (hot) with current returning (neutral). If they differ by more than 5 mA — the current that will stop a heart — the GFCI trips in a thirtieth of a second. Required within six feet of water, at bathrooms, kitchens, garages, outdoors, unfinished basements. The arc-fault circuit interrupter listens for the electrical signature of a low-current arc (like a damaged lamp cord inside a pinched rug) and trips before the arc ignites the material around it. Required on most bedroom and living-area circuits since 1999.' },

        { type: 'h2', text: 'Troubleshooting' },
        { type: 'p', text: 'The outlet is dead, breaker isn\'t tripped. Check GFCI upstream — many outlets are protected by a GFCI on the same circuit. The breaker won\'t reset. Something on the circuit has a dead short; unplug every load, reset, then add back one at a time. The light flickers. Loose neutral at a box somewhere on the circuit; pull and redo. The outlet is hot. Loose connection at a terminal; turn off, replace.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'Once you can wire a receptacle, a switch, and a three-way, the next step is installing a 240-V appliance circuit, adding a subpanel, or running EV-charger wiring. The IBEW/NECA Electrical Training Alliance apprenticeship is the gold-standard training; Mike Holt\'s "Understanding the NEC" is the self-study text.' },

        { type: 'aside', label: 'Practice this week', text: 'Replace a wall outlet in your house. Turn off the breaker. Verify dead with a non-contact tester. Remove the plate and receptacle. Note which wire went where. Connect to the new receptacle in the same pattern. Turn on. One receptacle, one screwdriver, thirty minutes — and you will understand the wiring in the walls of every house you ever own.' },
        { type: 'aside', label: 'Self-check', text: 'What color is the hot conductor screw? (Brass.) What is a pigtail for? (To splice so the circuit continues even if the device is removed.) When does a GFCI trip? (At 5 mA imbalance between hot and neutral.) If any stumps you, watch Electrician U\'s "How to Wire an Outlet" series.' },

        { type: 'callout', text: 'First project: replace a standard receptacle with a GFCI in a bathroom. One hour, $20 in parts. You will learn line-vs-load GFCI wiring and the correct protection of a downstream receptacle.' },
      ],

      keyTerms: ['service entrance', 'main breaker', 'branch circuit', 'NM cable', 'junction box', 'receptacle', 'three-way switch', 'GFCI', 'AFCI', 'neutral bus', 'Romex', 'pigtail', 'box fill', 'bond'],

      resources: {
        videos: [
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@ElectricianU', title: 'Electrician U — residential wiring series', channel: 'Electrician U', duration: 'variable', why: 'Best free video curriculum on residential wiring.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/user/MikeHoltNEC', title: 'Mike Holt NEC — wiring videos', channel: 'Mike Holt', duration: 'variable', why: 'Code-driven installation instruction.' },
          { id: null, source: 'other', url: 'https://www.thisoldhouse.com/', title: 'This Old House — panel upgrades and rewires', channel: 'This Old House', duration: 'variable', why: 'Heath Eastman on service upgrades.' },
          { id: null, source: 'other', url: 'https://www.mikeholt.com/tv-nec.php', title: 'Mike Holt — Free NEC Videos', channel: 'Mike Holt', duration: 'variable', why: 'Free hour-long code-change videos.', featured: false },
        ],
        books: [
          { title: 'Wiring a House', author: 'Rex Cauldwell', year: 2014, url: 'https://archive.org/details/wiringhouse0000caul_m3v3', why: 'The DIY classic.' },
          { title: 'Black & Decker The Complete Guide to Wiring', author: 'Cool Springs Press', year: 2023, url: '', why: 'Step-by-step photographed guide.' },
          { title: 'Ugly\'s Electrical References', author: 'Charles R. Miller', year: 2023, url: 'https://www.uglys.net/', why: 'Pocket reference.' },
          { title: 'Mike Holt\'s Illustrated Guide to Basic Electrical Theory', author: 'Mike Holt', year: 2023, url: 'https://www.mikeholt.com/', why: 'Theory with Holt illustrations.' },
        ],
        articles: [
          { title: 'Electrical wiring', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Electrical_wiring', why: 'Cables, conductors, history.', year: null },
          { title: 'Residential electrical wiring — OSHA', source: 'U.S. DOL', url: 'https://www.osha.gov/construction', why: 'Federal construction safety standards.', year: null },
          { title: 'Ground fault circuit interrupter', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Residual-current_device', why: 'The device that has saved more lives than any other post-war electrical invention.', year: null },
        ],
        courses: [
          { title: 'IBEW/NECA Electrical Training Alliance', provider: 'ETA', url: 'https://www.electricaltrainingalliance.org/', free: false, why: 'Gold-standard American electrical apprenticeship.' },
          { title: 'Electrician U — Learning System', provider: 'Electrician U', url: 'https://electricianu.com/', free: false, why: 'Modern video-first training.' },
        ],
        tools: [
          { title: 'Klein Tools', url: 'https://www.kleintools.com/', why: 'Standard-issue hand tools.' },
          { title: 'Fluke T5 and T6 testers', url: 'https://www.fluke.com/', why: 'Go/no-go field testers.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Electrical_outlet_wired.jpg?width=1200', caption: 'A correctly terminated receptacle.', credit: 'Wikimedia Commons', alt: 'Wired outlet' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Breaker_panel.jpg?width=1200', caption: 'A residential load center.', credit: 'Wikimedia Commons', alt: 'Breaker panel' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Romex_cable.jpg?width=1200', caption: 'NM-B "Romex" cable.', credit: 'Wikimedia Commons', alt: 'NM cable' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Three_way_switch_diagram.svg?width=1200', caption: 'Three-way switch diagram.', credit: 'Wikimedia Commons', alt: 'Three-way switch' },
        ],
      },

      seeAlso: ['ohms', 'code', 'refrigeration', 'thermostats'],
      prereqs: ['ohms'],
      leadsTo: ['code'],

      chapterActivity: 'A weekend outlet-and-switch workshop at a Sunset Park trade shop.',

      sources: ['https://en.wikipedia.org/wiki/Electrical_wiring', 'https://archive.org/details/wiringhouse0000caul_m3v3'],
      verifiedAt: '2026-04-23',
    },

    // ——— ELECTRICAL CODE ———
    code: {
      id: 'code',
      name: 'Electrical Code',
      level: 'Intermediate',
      dek: 'The thousand-page rulebook written in the ashes of a hundred fires.',
      readTime: '18 min',

      sections: ['Whole idea', 'Before you start', 'Origin of the code', 'Structure of the NEC', 'Key articles', 'Permits & inspection', 'Troubleshooting', 'Going deeper', 'Practice', 'Self-check'],
      body: [
        { type: 'lead', text: 'Between 1871 and 1897, twenty percent of all American homes that were destroyed by fire were lost to bad electrical wiring. In 1881, a committee of electrical engineers met in New York to begin writing a voluntary code; by 1897, five separate regional codes had merged into the first National Electrical Code, under the auspices of what would become the National Fire Protection Association. The NEC is now 1,100 pages long, updated every three years, and adopted as law in nearly every American jurisdiction. It is not a document about how to make things work. It is a document about how not to burn down a city.' },
        { type: 'figure', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/NFPA_70_book_cover.jpg?width=1200', caption: 'The current edition of NFPA 70.', credit: 'Wikimedia Commons' },

        { type: 'h2', text: 'The whole idea' },
        { type: 'p', text: 'The NEC tells you what must be in an electrical installation so that it does not start a fire, electrocute the occupants, or fail in a predictable way. It does not tell you how many outlets to put in a living room (a minimum, yes; a maximum, no), which brand to use, or whether the breaker should be on the left or the right of the panel. Its whole business is the failure case.' },

        { type: 'h2', text: 'Before you start' },
        { type: 'h3', text: 'Tools' },
        { type: 'p', text: 'A current copy of the NEC (or a Code Check Electrical flipchart, which covers the residential subset). A pen and the phone number of your local inspector. Ugly\'s Electrical References in the truck.' },
        { type: 'h3', text: 'Mindset' },
        { type: 'p', text: 'Every NEC rule is written to prevent a specific past failure. Read the rules slowly; they are dense, and the exceptions usually matter. When in doubt, call the AHJ — they would rather answer the phone than fail an inspection.' },
        { type: 'h3', text: 'Words to know' },
        { type: 'p', text: 'AHJ — Authority Having Jurisdiction, the inspector. Article — a numbered chapter of the NEC. Section — a subdivision of an article. Listed — approved by a nationally recognized testing laboratory (UL is the common one). Identified — the conductor is marked for a specific purpose. Raceway — any channel that encloses conductors. Overcurrent protection — a fuse or breaker.' },

        { type: 'h2', text: 'Where the code comes from' },
        { type: 'p', text: 'The National Fire Protection Association publishes the NEC as NFPA 70. Twenty code-making panels, staffed by electricians, engineers, inspectors, and manufacturers, review every proposed change through a public comment process. The ICC, AHJs, NEMA, UL — the alphabet of standards bodies that orbit the code — all feed in. What emerges is a consensus document that states and cities then adopt, often with local amendments. The NEC itself is not federal law; it becomes law when your town council votes to adopt it.' },

        { type: 'h2', text: 'Structure of the NEC' },
        { type: 'p', text: 'Chapter 1 (Articles 100–110) defines terms and general requirements. Chapters 2–4 (200–490) cover wiring and protection, wiring methods, equipment for general use. Chapter 5 covers special occupancies (hospitals, hazardous locations). Chapter 6 special equipment. Chapter 7 special conditions. Chapter 8 communications systems. Chapter 9 tables (ampacity, conduit fill, and the tables every electrician uses most). Annexes provide informative material.' },
        { type: 'aside', label: 'Worked example', text: 'You need to know the ampacity of a 12 AWG copper conductor in a residential installation. Open NEC Table 310.16 (in Chapter 3, but the tables live at 310). Find 12 AWG, copper, 60°C column (residential default): 25 amps. Note the overcurrent-protection rule in 240.4(D): the breaker cannot exceed 20 amps on 12 AWG anyway. The two rules combine to give you 20A / 12 AWG as the standard residential pairing.' },

        { type: 'h2', text: 'Key articles to know' },
        { type: 'p', text: 'Article 210: branch circuits — where outlets must be, how circuits are sized. Article 220: load calculation — how to size the service. Article 240: overcurrent protection. Article 250: grounding and bonding (the article where most mistakes happen). Article 310: conductor ampacity (the tables). Article 314: boxes and box fill. Article 406: receptacles. Article 408: panels. A residential electrician spends 90% of her code lookups in these articles.' },

        { type: 'h2', text: 'Permits and inspection' },
        { type: 'p', text: 'A permit is pulled before the work begins — typically by the homeowner for minor work, the electrician for everything else. Rough inspection happens before the drywall goes up: the inspector verifies cable routing, box fill, staple spacing, box-to-box clearances. Final inspection happens before the service is energized: devices installed, panels labeled, GFCI/AFCI working. A good inspector has seen every mistake in the book and is looking for the one you made.' },

        { type: 'h2', text: 'Troubleshooting code violations' },
        { type: 'p', text: 'The inspector red-tagged the rough. Read the violation code section; fix exactly that. Do not guess. Box fill is over. Deepen the box, or split the splices across two boxes. The staple spacing is wrong. Re-staple. The receptacle spacing is too far. Add one. The GFCI is in the wrong place. Move it to the first receptacle on the circuit, where it protects downstream.' },

        { type: 'h2', text: 'Going deeper' },
        { type: 'p', text: 'After the residential side, the next code territory is commercial (Article 250 grounding gets hairy fast), industrial (hazardous locations, Articles 500–510), and specialty equipment (EV charging, PV solar, Article 690). Mike Holt\'s Understanding the NEC is the trade\'s reading of record.' },

        { type: 'aside', label: 'Practice this week', text: 'Read Article 210 of the current NEC (available free online at nfpa.org with a free account). Note every residential requirement. Compare against the wiring in your own house. You will find at least one thing that is not to current code — and that is normal, since codes are not retroactive.' },
        { type: 'aside', label: 'Self-check', text: 'What is an AHJ? (Authority Having Jurisdiction — the inspector.) Which article covers grounding and bonding? (250.) What is the most common 12 AWG residential breaker size? (20 A.) If any stumps you, read Mike Holt\'s Understanding the NEC Volume 1.' },

        { type: 'callout', text: 'First project: pull a permit for a small electrical job (adding a single outlet, for example). The permit office will give you a booklet explaining local amendments. You will learn what an inspector actually checks — and your wiring will be correct for the rest of your life.' },
      ],

      keyTerms: ['NFPA 70', 'Authority Having Jurisdiction', 'overcurrent protection', 'ampacity', 'grounding electrode', 'bonding', 'listed equipment', 'permit', 'rough inspection', 'final inspection', 'Article 210', 'Article 250', 'Table 310.16', 'box fill'],

      resources: {
        videos: [
          { id: null, source: 'youtube', url: 'https://www.youtube.com/user/MikeHoltNEC', title: 'Mike Holt NEC — code-change videos', channel: 'Mike Holt', duration: 'variable', why: 'Thirty years of NEC code-change instruction.' },
          { id: null, source: 'youtube', url: 'https://www.youtube.com/@ElectricianU', title: 'Electrician U — code-focused videos', channel: 'Electrician U', duration: 'variable', why: 'Practicing electrician explaining the why of each section.' },
          { id: null, source: 'other', url: 'https://www.thisoldhouse.com/', title: 'This Old House — permit and inspection segments', channel: 'This Old House', duration: 'variable', why: 'Real permit-and-inspection walkthroughs.', featured: false },
        ],
        books: [
          { title: 'NFPA 70 — National Electrical Code', author: 'NFPA', year: 2023, url: 'https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70', why: 'The code itself — free to read online.' },
          { title: 'Mike Holt\'s Understanding the NEC (Volumes 1 & 2)', author: 'Mike Holt', year: 2023, url: 'https://www.mikeholt.com/', why: 'Best-selling code explainer.' },
          { title: 'Code Check Electrical', author: 'Kardon & Hansen', year: 2014, url: 'https://archive.org/details/codecheckcomplet0000kard', why: 'The inspector\'s flipchart.' },
        ],
        articles: [
          { title: 'National Electrical Code', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/National_Electrical_Code', why: 'History and adoption.', year: null },
          { title: 'NFPA 70 NEC', source: 'NFPA', url: 'https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70', why: 'Official landing page.', year: null },
          { title: 'AHJ', source: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Authority_having_jurisdiction', why: 'What the code means by "the inspector."', year: null },
        ],
        courses: [
          { title: 'Mike Holt Free NEC Videos', provider: 'Mike Holt', url: 'https://www.mikeholt.com/tv-nec.php', free: true, why: 'Free video lectures from the best code instructor.' },
        ],
        tools: [
          { title: 'NFPA Link', url: 'https://www.nfpa.org/', why: 'Free registered-user access to NFPA 70.' },
        ],
        images: [
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/NFPA_70_book_cover.jpg?width=1200', caption: 'Current NFPA 70 edition.', credit: 'Wikimedia Commons', alt: 'NEC book' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Knob_and_tube_wiring.jpg?width=1200', caption: '1890s knob-and-tube wiring.', credit: 'Wikimedia Commons', alt: 'Knob and tube' },
          { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/GFCI_outlet.jpg?width=1200', caption: 'A GFCI outlet.', credit: 'Wikimedia Commons', alt: 'GFCI' },
        ],
      },

      seeAlso: ['ohms', 'wiring', 'framing', 'roofing'],
      prereqs: ['wiring'],
      leadsTo: [],

      chapterActivity: 'A code-reading night at a union hall — read Article 210 with a working electrician.',

      sources: ['https://en.wikipedia.org/wiki/National_Electrical_Code', 'https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70'],
      verifiedAt: '2026-04-23',
    },

  },
};
