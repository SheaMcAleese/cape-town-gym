// Cape Town 14-Day Program — structured data
// Each day: { n, title, tag (HARD/MED-HARD/MEDIUM/EASY), time, running, intro, blocks[] }
// Block: { title, sub, rounds (optional int), log (optional), items[] }
// Item: { name, detail (optional), log (optional: 'weight'|'time') }

window.PROGRAM = {
  title: "Cape Town 14-Day Program",
  subtitle: "Full HYROX kit · all-out · one session every day",
  built: "Fully-equipped HYROX gym — SkiErg, sleds, rower, wall balls, sandbags, farmers handles, DBs, barbells, machines.",
  rules: [
    "This block is meant to be hard. Heart rate up every day, effort high, intensity waved across the fortnight.",
    "All 8 HYROX stations are in play: SkiErg, sled push, sled pull, burpee broad jumps, row, farmers carry, sandbag lunges, wall balls. Master every one.",
    "Compete with yourself: log every score and weight, then chase it. Day 1 vs Day 13 benchmark is the headline number.",
    "Run when it's programmed — runs are moderate and often 'compromised' (on tired legs into a station) to build race craft.",
    "Calf care is on you: do your own prep/rehab daily so you can attack every session.",
    "Scale loads so stations stay mostly unbroken. If a weight stops you dead, drop it and keep moving."
  ],
  warmup: {
    title: "Standard Warm-Up",
    sub: "8 to 10 min · raise, mobilise, prime",
    items: [
      { name: "Easy bike, row or ski", detail: "3 to 4 min to raise core temp" },
      { name: "Dynamic mobility", detail: "Leg swings, hip openers, ankle circles, world's greatest stretch, banded shoulder dislocates" },
      { name: "Primer", detail: "A few run strides + two light build-up rounds of the day's main movements" }
    ]
  },
  cooldown: {
    title: "Standard Cooldown",
    sub: "5 min",
    items: [
      { name: "Easy bike or ski spin" },
      { name: "Hip, ankle & T-spine mobility" },
      { name: "Slow nasal breathing", detail: "Bring the system down" }
    ]
  },
  days: [
    {
      n: 1, title: "ELV8 Half HYROX Benchmark", tag: "HARD", time: "~50 min", running: "Yes",
      intro: "The test you repeat on Day 13. All 8 stations with a run between each — for time. Pace the runs so the stations don't blow up. Write down your time and every weight you used.",
      blocks: [
        { title: "For time — run between every station", log: "time", items: [
          { name: "500m run" },
          { name: "500m SkiErg" },
          { name: "500m run" },
          { name: "25m sled push", detail: "Heavy", log: "weight" },
          { name: "25m sled pull", detail: "Heavy", log: "weight" },
          { name: "500m run" },
          { name: "30 burpee broad jumps" },
          { name: "500m run" },
          { name: "500m row" },
          { name: "500m run" },
          { name: "100m farmers carry", detail: "Heavy", log: "weight" },
          { name: "500m run" },
          { name: "50m sandbag lunges", detail: "Walking", log: "weight" },
          { name: "500m run" },
          { name: "50 wall balls", detail: "Race-standard target", log: "weight" },
          { name: "500m run", detail: "Bring it home" }
        ]}
      ]
    },
    {
      n: 2, title: "Sled Power + Lower Strength", tag: "HARD", time: "~55 min", running: "No",
      intro: "Own the sleds — the station that wins HYROX. Build heavy strength, then bury the legs. Score: heaviest 25m push that stays unbroken.",
      blocks: [
        { title: "Strength", items: [
          { name: "Back squat", detail: "5 × 5 — build heavy", log: "weight" },
          { name: "Trap bar deadlift", detail: "4 × 5", log: "weight" },
          { name: "Walking lunge", detail: "3 × 20m", log: "weight" }
        ]},
        { title: "Sled block", sub: "5 rounds · rest as needed", rounds: 5, items: [
          { name: "25m sled push", detail: "Heavy", log: "weight" },
          { name: "25m sled pull", detail: "Heavy", log: "weight" }
        ]},
        { title: "Finisher", sub: "3 rounds", rounds: 3, items: [
          { name: "15 wall balls", log: "weight" },
          { name: "15 cal SkiErg" }
        ]}
      ]
    },
    {
      n: 3, title: "Triple-Erg Engine", tag: "MED-HARD", time: "~45 min", running: "No",
      intro: "Ski, row, bike — pure engine, zero impact. Hold RPE 8 on every work minute. Score: total metres across all three ergs — beat it next block.",
      blocks: [
        { title: "5 rounds", sub: "Minimal transition", rounds: 5, items: [
          { name: "1 min hard SkiErg" },
          { name: "1 min hard row" },
          { name: "1 min hard bike" },
          { name: "1 min rest" }
        ]}
      ]
    },
    {
      n: 4, title: "Station Skills + EMOM", tag: "MEDIUM", time: "~45 min", running: "No",
      intro: "Technique day disguised as a game. Dial in efficiency on the fiddly stations, then a 20-min EMOM. Smooth is fast.",
      blocks: [
        { title: "Skills", items: [
          { name: "Wall ball", detail: "3 × 15 — perfect depth + catch", log: "weight" },
          { name: "Sandbag clean to shoulder", detail: "3 × 8 each side", log: "weight" },
          { name: "SkiErg technique", detail: "3 × 250m — focus hip snap" }
        ]},
        { title: "20-min EMOM", sub: "Rotate every minute", items: [
          { name: "Min 1: 12 wall balls", log: "weight" },
          { name: "Min 2: 12 burpee broad jumps" },
          { name: "Min 3: 15 cal row" },
          { name: "Min 4: 20m sled push", log: "weight" }
        ]}
      ]
    },
    {
      n: 5, title: "Run + Station Chipper", tag: "HARD", time: "~50 min", running: "Yes",
      intro: "Moderate running day. One long descending chipper — grind it out, don't stop moving. Score: total time.",
      blocks: [
        { title: "For time", items: [
          { name: "1000m run" },
          { name: "50 wall balls", log: "weight" },
          { name: "800m run" },
          { name: "40 burpee broad jumps" },
          { name: "600m run" },
          { name: "30m sandbag lunges", log: "weight" },
          { name: "400m run" },
          { name: "20 cal SkiErg" }
        ]}
      ]
    },
    {
      n: 6, title: "Upper Strength + Ski Conditioning", tag: "MEDIUM", time: "~55 min", running: "No",
      intro: "Build the engine room. Press, pull, then a lung-buster finisher. Feel strong.",
      blocks: [
        { title: "Strength", items: [
          { name: "Bench press", detail: "5 × 5", log: "weight" },
          { name: "Weighted pull-up or lat pulldown", detail: "4 × 8", log: "weight" },
          { name: "DB shoulder press", detail: "3 × 10", log: "weight" },
          { name: "Pendlay row", detail: "3 × 8", log: "weight" }
        ]},
        { title: "Finisher", sub: "21-15-9", items: [
          { name: "DB push press", log: "weight" },
          { name: "SkiErg calories" },
          { name: "Burpees over the DB" }
        ]}
      ]
    },
    {
      n: 7, title: "Game Day AMRAP", tag: "MED-HARD", time: "~45 min", running: "Optional",
      intro: "The fun one. 20-min AMRAP — you versus the clock. Count rounds + reps; that's your score to smash next time.",
      blocks: [
        { title: "20-min AMRAP", sub: "Score = total rounds", items: [
          { name: "200m run" },
          { name: "15 wall balls", log: "weight" },
          { name: "12 cal row" },
          { name: "9 burpee broad jumps" }
        ]}
      ]
    },
    {
      n: 8, title: "Compromised Running Intervals", tag: "MED-HARD", time: "~50 min", running: "Yes",
      intro: "The HYROX skill: running into a station on tired legs. Run-station repeats. Score: total time — keep your splits even.",
      blocks: [
        { title: "6 rounds", sub: "Score = total time, even splits", rounds: 6, items: [
          { name: "400m run" },
          { name: "15 wall balls", log: "weight" },
          { name: "50m farmers carry", detail: "Heavy", log: "weight" }
        ]}
      ]
    },
    {
      n: 9, title: "Full Body Strength + Sled Finisher", tag: "HARD", time: "~55 min", running: "No",
      intro: "Heaviest day of the block. Move big, then bury it on the sled.",
      blocks: [
        { title: "Strength", items: [
          { name: "Trap bar deadlift", detail: "5 × 3 — heavy", log: "weight" },
          { name: "Front squat", detail: "4 × 5", log: "weight" },
          { name: "Bench or DB bench", detail: "4 × 6", log: "weight" },
          { name: "Weighted pull-up", detail: "4 × 6", log: "weight" }
        ]},
        { title: "Finisher", sub: "4 rounds", rounds: 4, items: [
          { name: "25m sled push", detail: "Heavy", log: "weight" },
          { name: "10 wall balls", log: "weight" }
        ]}
      ]
    },
    {
      n: 10, title: "Erg Time-Trials", tag: "MED-HARD", time: "~40 min", running: "No",
      intro: "Short and spicy. Two all-out efforts with full rest between. Score: a number to chase forever — log both splits.",
      blocks: [
        { title: "Max effort", sub: "Full recovery between", log: "time", items: [
          { name: "1000m SkiErg — all out" },
          { name: "Rest 5 min" },
          { name: "2000m row — all out" }
        ]}
      ]
    },
    {
      n: 11, title: "Big HYROX Simulation", tag: "HARD", time: "~60 min", running: "Yes",
      intro: "The big one — closest to race day in the block. Six stations and running, for time. Pace like Day 1 taught you.",
      blocks: [
        { title: "For time — run between stations", log: "time", items: [
          { name: "600m run" },
          { name: "600m SkiErg" },
          { name: "600m run" },
          { name: "25m sled push", detail: "Heavy", log: "weight" },
          { name: "25m sled pull", detail: "Heavy", log: "weight" },
          { name: "600m run" },
          { name: "40 burpee broad jumps" },
          { name: "600m run" },
          { name: "600m row" },
          { name: "600m run" },
          { name: "100m farmers carry", detail: "Heavy", log: "weight" },
          { name: "600m run" },
          { name: "60 wall balls", log: "weight" },
          { name: "600m run", detail: "Finish strong" }
        ]}
      ]
    },
    {
      n: 12, title: "Strength + Short Metcon", tag: "MEDIUM", time: "~50 min", running: "No",
      intro: "Sharpen and prime before the re-test. Move crisp, quick metcon, leave gas in the tank.",
      blocks: [
        { title: "Strength", items: [
          { name: "Back squat", detail: "3 × 5 — moderate, crisp", log: "weight" },
          { name: "Romanian deadlift", detail: "3 × 8", log: "weight" },
          { name: "Push press", detail: "3 × 5", log: "weight" }
        ]},
        { title: "10-min AMRAP", items: [
          { name: "12 wall balls", log: "weight" },
          { name: "10 cal SkiErg" },
          { name: "8 burpee broad jumps" }
        ]}
      ]
    },
    {
      n: 13, title: "Benchmark Re-Test", tag: "HARD", time: "~50 min", running: "Yes",
      intro: "Repeat Day 1 exactly, same weights. Chase the number. Log the time next to Day 1 — that gap is your two weeks of work, on paper.",
      blocks: [
        { title: "For time — run between every station", log: "time", items: [
          { name: "500m run" },
          { name: "500m SkiErg" },
          { name: "500m run" },
          { name: "25m sled push", detail: "Heavy", log: "weight" },
          { name: "25m sled pull", detail: "Heavy", log: "weight" },
          { name: "500m run" },
          { name: "30 burpee broad jumps" },
          { name: "500m run" },
          { name: "500m row" },
          { name: "500m run" },
          { name: "100m farmers carry", detail: "Heavy", log: "weight" },
          { name: "500m run" },
          { name: "50m sandbag lunges", detail: "Walking", log: "weight" },
          { name: "500m run" },
          { name: "50 wall balls", log: "weight" },
          { name: "500m run", detail: "Empty the tank" }
        ]}
      ]
    },
    {
      n: 14, title: "Flush, Play + Reflect", tag: "EASY", time: "~40 min", running: "Optional",
      intro: "Earned recovery. Easy mixed cardio, long mobility, and two questions — then plan the next block harder.",
      blocks: [
        { title: "Flush", items: [
          { name: "20 min easy mixed cardio", detail: "Ski, row, bike or easy walk" },
          { name: "Long mobility", detail: "Hips, ankles, T-spine" }
        ]},
        { title: "Reflect", sub: "Two questions before you fly home", items: [
          { name: "Biggest jump from Day 1 to Day 13?" },
          { name: "Which one station do you attack next block?" }
        ]}
      ]
    }
  ]
};
