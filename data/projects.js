// ─────────────────────────────────────────────────────────────
//  PROJECTS — this is the only file you need to edit to add work.
//
//  To add a project:
//   1. Copy one block below and paste it where you want it in the list
//      (the first project is shown large at the top of the home page).
//   2. slug:    short name with dashes, used in the URL  (project.html?p=slug)
//   3. youtube: the ID after youtu.be/   e.g. https://youtu.be/ABC123 -> "ABC123"
//   4. Optional stills/breakdown images: put them in assets/projects/<slug>/
//      and list the file names in `images`.
// ─────────────────────────────────────────────────────────────

const PROJECTS = [
  {
    slug: "space-marine",
    title: "Space Marine Destruction",
    youtube: "O467oO2mj2o",
    tags: ["Houdini", "RBD", "Destruction"],
    summary: "Inside a monumental church, a wounded soldier staggers toward the altar, fleeing an unseen threat. At his most defenceless moment, a Space Marine crashes down through the temple in a burst of stone, debris and dust: a violent arrival that means protection, not destruction.",
    details: [
      "A shaft of overhead light cuts through the dust and frames the Space Marine beneath a statue of a Valkyrie, turning the warrior into an almost divine figure of salvation.",
      "The idea: divine protection taking physical form. Faith made steel, with salvation arriving with the force of an impact."
    ],
    images: []
  },
  {
    slug: "fall-into-oblivion",
    title: "The Fall into Oblivion",
    youtube: "KCnwa3lBj3A",
    tags: ["FX", "Personal project"],
    summary: "A sci-fi piece about loneliness and the fragility of life. An astronaut lies trapped in his escape pod after a crash landing; as the camera slowly pulls back, it reveals other pods scattered across the mud, some dark, some still burning. He is the only survivor, while a recon drone scans the wreckage with mechanical indifference.",
    details: [
      "The light inside the pod pulses like a heartbeat and slowly fades, turning light into a visual stand-in for the astronaut's life. No dialogue: lighting, composition and camera movement tell the story.",
      "The idea: in a world sunk in darkness, the last light is the last heartbeat of a life about to fall into oblivion."
    ],
    images: []
  },
  {
    slug: "spaceship-portal",
    title: "Spaceship Portal",
    youtube: "7id-6u_ybkw",
    tags: ["Houdini", "Pyro", "FX"],
    summary: "Smoke portal simulation built in Houdini with pyro.",
    details: [],
    images: []
  },
  {
    slug: "air-battle",
    title: "Air Battle — Breakdown",
    youtube: "ZpWj_6LJ2m0",
    tags: ["RBD", "Pyro", "Integration", "Breakdown"],
    summary: "Live-action background plate with an RBD simulation and a pyro simulation integrated into the shot.",
    details: [],
    images: []
  },
  {
    slug: "witcher-tower",
    title: "Witcher Tower",
    youtube: "r5JU1zkrKq0",
    tags: ["Houdini", "Procedural", "Environment"],
    summary: "My first Houdini project, built fully procedurally. Environment inspired by The Witcher.",
    details: [],
    images: []
  }
];
