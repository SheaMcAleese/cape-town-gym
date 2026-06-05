// Cape Town 14-Day Program — structured data
// Each day: { n, title, tag (HARD/MEDIUM/MED-HARD/EASY), time, running, intro, blocks[] }
// Block: { title, sub, rounds (optional int), note (optional), items[] }
// Item: { name, detail (optional), log (optional: 'weight'|'time') }

window.PROGRAM = {
  title: "Cape Town 14-Day Program",
  subtitle: "HYROX-flavoured · calf-smart · one session every day",
  built: "Standard commercial gym — treadmill, bike, rower, DBs, barbell, machines, cables.",
  rules: [
    "Heart rate up every day, intensity waved across the fortnight.",
    "Calf rule: running lives on Day 5 and Day 11 only, capped each time. If the calves talk on any run, swap it for an equal-distance row, no hesitation.",
    "Bike and rower are your zero-impact engine all block.",
    "Log times on benchmark days, weights on strength days. That is the accountability layer.",
    "Short on time? Do the minimum rounds and trim the finisher. Full hour? Add a round or extend the finisher."
  ],
  warmup: {
    title: "Standard Warm-Up",
    sub: "8 to 10 min · calf-friendly",
    items: [
      { name: "Easy bike or row", detail: "3 to 4 min — not treadmill, to spare the calves early" },
      { name: "Dynamic mobility", detail: "Leg swings, hip openers, ankle circles, world's greatest stretch, banded shoulder dislocates" },
      { name: "Two light build-up rounds", detail: "Of the day's main movements" }
    ]
  },
  cooldown: {
    title: "Standard Cooldown",
    sub: "5 min",
    items: [
      { name: "Easy bike spin" },
      { name: "Calf, hip & T-spine mobility" },
      { name: "Slow nasal breathing", detail: "Bring the system down" }
    ]
  },
  days: [
    {
      n: 1, title: "ELV8 HYROX Benchmark", tag: "HARD", time: "~50 min", running: "No",
      intro: "The test you repeat on Day 13. Pick DB weights you can move under fatigue. Target cap around 28 to 32 min — write down your time and weights.",
      blocks: [
        { title: "4 rounds for time", rounds: 4, log: "time", items: [
          { name: "300m row" },
          { name: "15 DB thrusters", detail: "Goblet or two-DB", log: "weight" },
          { name: "12 burpees", detail: "Step out and in, no jump, protect the calves" },
          { name: "15 DB reverse lunges", detail: "Total", log: "weight" },
          { name: "250m bike" }
        ]}
      ]
    },
    {
      n: 2, title: "Lower Strength + Row Finisher", tag: "MEDIUM", time: "~55 min", running: "No",
      blocks: [
        { title: "Strength", items: [
          { name: "Goblet or back squat", detail: "4 × 8", log: "weight" },
          { name: "Romanian deadlift", detail: "4 × 10 (DB or barbell)", log: "weight" },
          { name: "Leg press", detail: "3 × 12 — sled-push substitute, full drive, zero impact", log: "weight" },
          { name: "Reverse lunges", detail: "3 × 10 each leg", log: "weight" }
        ]},
        { title: "Finisher", sub: "~6 min", rounds: 3, items: [
          { name: "200m row" },
          { name: "10 hard KB or DB swings", log: "weight" }
        ]}
      ]
    },
    {
      n: 3, title: "Low-Impact Engine Intervals", tag: "MED-HARD", time: "~45 min", running: "Zero running",
      intro: "Pure engine, kind on the calves. Hold RPE 8 on the work bouts.",
      blocks: [
        { title: "Bike intervals", sub: "5 rounds", rounds: 5, items: [
          { name: "1 min hard bike" },
          { name: "1 min easy" }
        ]},
        { title: "Row intervals", sub: "5 rounds — straight into it", rounds: 5, items: [
          { name: "1 min hard row" },
          { name: "1 min easy" }
        ]}
      ]
    },
    {
      n: 4, title: "Active Recovery + Core", tag: "EASY", time: "~40 min", running: "No",
      blocks: [
        { title: "Recovery", items: [
          { name: "15 min easy bike or row", detail: "Conversational pace" },
          { name: "Mobility flow", detail: "Ankles, gentle calves, hips, T-spine" }
        ]},
        { title: "Core", sub: "3 rounds", rounds: 3, items: [
          { name: "Deadbugs" },
          { name: "45s plank" },
          { name: "Hollow hold" },
          { name: "10 pallof press each side" }
        ]}
      ]
    },
    {
      n: 5, title: "HYROX Station Circuit", tag: "HARD", time: "~55 min", running: "Capped ~1.2km",
      intro: "The fun simulation. Move between stations like a HYROX floor. Keep total running at or under 1.2km — any run that bites, swap for 250m row.",
      blocks: [
        { title: "2 to 3 rounds", sub: "Depending on time", rounds: 3, items: [
          { name: "400m run", detail: "Treadmill or outside" },
          { name: "20 DB thrusters", detail: "Wall-ball stand-in", log: "weight" },
          { name: "200m row" },
          { name: "20 DB reverse lunges", detail: "Total", log: "weight" },
          { name: "15 burpees", detail: "Broad jump only if the calves feel good, otherwise standard" },
          { name: "200m farmers carry", detail: "Heavy DB or KB", log: "weight" }
        ]}
      ]
    },
    {
      n: 6, title: "Upper Strength + DB Conditioning", tag: "MEDIUM", time: "~55 min", running: "No",
      blocks: [
        { title: "Strength", items: [
          { name: "DB bench or machine chest press", detail: "4 × 8", log: "weight" },
          { name: "Lat pulldown or seated cable row", detail: "4 × 10", log: "weight" },
          { name: "DB shoulder press", detail: "3 × 10", log: "weight" },
          { name: "Superset: face pulls + biceps/triceps", detail: "3 × 12", log: "weight" }
        ]},
        { title: "Finisher", sub: "~6 min · 21-15-9", items: [
          { name: "DB push press", log: "weight" },
          { name: "Rower calories" }
        ]}
      ]
    },
    {
      n: 7, title: "Fun Varied EMOM", tag: "MEDIUM", time: "~45 min", running: "No",
      intro: "Keep it playful. 24-min EMOM, rotate the four. Finish with a 5 min easy row flush.",
      blocks: [
        { title: "24-min EMOM", sub: "Rotate every minute", items: [
          { name: "Min 1: 12 KB swings", log: "weight" },
          { name: "Min 2: 12 cal bike" },
          { name: "Min 3: 10 DB thrusters", log: "weight" },
          { name: "Min 4: 10 burpees" }
        ]},
        { title: "Flush", items: [ { name: "5 min easy row" } ]}
      ]
    },
    {
      n: 8, title: "Engine + Strength Blend", tag: "MEDIUM", time: "~50 min", running: "Low impact",
      intro: "Steady aerobic power, RPE 7.",
      blocks: [
        { title: "4 rounds", rounds: 4, items: [
          { name: "250m row" },
          { name: "10 DB push press", log: "weight" },
          { name: "12 goblet squats", log: "weight" },
          { name: "250m bike" }
        ]},
        { title: "Optional", items: [ { name: "5 min core to close" } ]}
      ]
    },
    {
      n: 9, title: "Full Body Strength + Finisher", tag: "MED-HARD", time: "~55 min", running: "No",
      blocks: [
        { title: "Strength", items: [
          { name: "Trap bar or barbell deadlift", detail: "4 × 6 (RDL if no trap bar)", log: "weight" },
          { name: "DB bench", detail: "4 × 8", log: "weight" },
          { name: "Bulgarian split squat", detail: "3 × 8 each — calf-safe, controlled", log: "weight" },
          { name: "Pull-ups or lat pulldown", detail: "4 × 10", log: "weight" }
        ]},
        { title: "Finisher", sub: "~7 min", rounds: 3, items: [
          { name: "200m row" },
          { name: "15 fast DB thrusters", log: "weight" }
        ]}
      ]
    },
    {
      n: 10, title: "Active Recovery + Mobility", tag: "EASY", time: "~40 min", running: "No",
      blocks: [
        { title: "Recovery", items: [
          { name: "15 to 20 min easy bike", detail: "Or a walk and a swim if the sun is out" },
          { name: "Full mobility", detail: "Give the calves some love, foam roll, slow breathing" }
        ]}
      ]
    },
    {
      n: 11, title: "HYROX Sim, Longer", tag: "HARD", time: "~60 min", running: "Capped ~1.5km",
      intro: "The big one of the block. Cap running at 1.5km total. Calves first, ego second — swap runs to row if needed.",
      blocks: [
        { title: "3 rounds", rounds: 3, items: [
          { name: "500m run" },
          { name: "15 DB thrusters", log: "weight" },
          { name: "250m row" },
          { name: "20 DB reverse lunges", detail: "Total", log: "weight" },
          { name: "250m bike" },
          { name: "12 burpees" }
        ]}
      ]
    },
    {
      n: 12, title: "Lower Strength + Short Metcon", tag: "MEDIUM", time: "~50 min", running: "No",
      blocks: [
        { title: "Strength", items: [
          { name: "Back or goblet squat", detail: "4 × 6", log: "weight" },
          { name: "Leg press", detail: "3 × 12", log: "weight" },
          { name: "Romanian deadlift", detail: "3 × 10", log: "weight" },
          { name: "Ankle & tibialis prep", detail: "Instead of heavy calf raises" }
        ]},
        { title: "Metcon", sub: "~7 min", rounds: 4, items: [
          { name: "200m row" },
          { name: "10 KB swings", log: "weight" }
        ]}
      ]
    },
    {
      n: 13, title: "Benchmark Re-Test", tag: "HARD", time: "~50 min", running: "No",
      intro: "Repeat Day 1 exactly, same weights. Chase the number. Log the time next to Day 1 — that gap is your two weeks of work, on paper.",
      blocks: [
        { title: "4 rounds for time", rounds: 4, log: "time", items: [
          { name: "300m row" },
          { name: "15 DB thrusters", log: "weight" },
          { name: "12 burpees", detail: "No jump" },
          { name: "15 DB reverse lunges", detail: "Total", log: "weight" },
          { name: "250m bike" }
        ]}
      ]
    },
    {
      n: 14, title: "Flush + Mobility + Reflect", tag: "EASY", time: "~40 min", running: "No",
      blocks: [
        { title: "Flush", items: [
          { name: "20 min easy choice cardio", detail: "Bike, row, easy walk" },
          { name: "Long mobility", detail: "Calves, hips, T-spine" }
        ]},
        { title: "Reflect", sub: "Two questions before you fly home", items: [
          { name: "What felt strongest this block?" },
          { name: "What one piece do you carry into the next?" }
        ]}
      ]
    }
  ]
};
