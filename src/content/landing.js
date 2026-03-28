export const heroContent = {
  eyebrow: "Autonomous Software Delivery",
  title: ["The operating layer for", "structured AI development."],
  description:
    "Relay Studio transforms a feature idea into a detailed spec, decomposed tasks, managed build loops, feature-branch commits, and a final pull request your team can actually review.",
  primaryCta: { label: "Explore Product", href: "#product" },
  secondaryCta: { label: "Open Docs", href: "/docs/" },
  meta: ["Electron-native", "Open source", "Codex + Claude Code"],
  runtime: {
    title: "Feature Runtime",
    entries: [
      ["User request", "Payment retry flow with audit trail"],
      ["Mode", "Continuous Review"],
      ["Engine", "Codex"],
    ],
  },
};

export const platformIntro = {
  eyebrow: "Product",
  title: "Precision for teams that want autonomy without surrendering control.",
};

export const featureCards = [
  {
    eyebrow: "Intent To Architecture",
    title: "Relay Studio turns a feature request into an execution system.",
    body:
      "Describe the feature once. Relay Studio produces a detailed spec, decomposes the work into linked tasks, and keeps the implementation aligned to the specification.",
  },
  {
    eyebrow: "Agent Runtime",
    title: "Built for Codex and Claude Code build loops.",
    body:
      "Choose your engine, choose your governance model, and let Relay Studio manage the surrounding context, task state, branching, and review checkpoints.",
  },
  {
    eyebrow: "Delivery Discipline",
    title: "Every feature becomes a clean branch and a real pull request.",
    body:
      "Tasks commit into the feature branch as progress lands. When the build loop finishes, Relay Studio opens the PR with a traceable history instead of a pile of opaque agent output.",
  },
];

export const workflowContent = {
  eyebrow: "Workflow",
  title: "From feature brief to merged-ready branch, Relay Studio keeps the loop coherent.",
  description:
    "The product model stays visible throughout execution: specs, kanban tasks, active engine, governance mode, commit trail, and final PR output all live inside one operating surface.",
  steps: [
    {
      id: "01",
      title: "Define the feature",
      text:
        "Open an existing project, describe the outcome, and let Relay Studio capture intent without forcing you to manually pre-structure every step.",
    },
    {
      id: "02",
      title: "Generate the spec",
      text:
        "Relay Studio expands the request into a technical spec with explicit scope, dependencies, acceptance criteria, and build guidance for the agent.",
    },
    {
      id: "03",
      title: "Decompose into tasks",
      text:
        "The spec is transformed into scoped tasks on a visual board so you can inspect ordering, track progress, and intervene only where it matters.",
    },
    {
      id: "04",
      title: "Run the build loop",
      text:
        "Each task is executed by the selected engine with your preferred review mode. Commits accumulate on the feature branch while Relay Studio maintains continuity.",
    },
  ],
};

export const showcaseContent = {
  eyebrow: "Operator Surface",
  title: "The board is the center of gravity, but the surrounding workflow matters too.",
  description:
    "Relay Studio keeps the task board, feature summary, and spec creation flow connected so autonomous work stays inspectable from request to review.",
  panels: [
    {
      type: "summary",
      label: "Summary",
      title: "Build cost, passes, time, and output quality in one place",
      body:
        "Summary turns the finished feature into something measurable, not just something that shipped.",
      stats: [
        ["Total Tasks", "13"],
        ["Completion", "54%"],
        ["Build Time", "26m 30s"],
        ["Total Cost", "$1.26"],
      ],
      rows: [
        ["US-002", "Done", "Sonnet 4.6", "$0.02"],
        ["US-005", "Review", "Sonnet 4.6", "$0.32"],
        ["US-008", "Done", "GPT-5.4 Mini", "$0.20"],
      ],
    },
    {
      type: "spec",
      label: "New Feature",
      title: "Specs start from plain-language intent, not rigid templates",
      body:
        "The app captures feature context, attached references, and testing preferences before turning the request into a formal spec.",
      fields: [
        "Feature name (optional)",
        "Describe the feature you want to build",
        "Include unit tests",
      ],
    },
    {
      type: "refine",
      label: "Specification Refinement",
      title: "Relay asks just enough to make the spec stronger",
      body:
        "Follow-up questions keep the workflow moving while still clarifying layout, behavior, and implementation assumptions before task generation.",
      options: [
        "Maintain particles on all devices with reduced complexity",
        "Remove particles on mobile, keep static design for performance",
        "Different layouts: side-by-side on desktop, stacked on mobile",
      ],
    },
  ],
};

export const summaryContent = {
  metrics: [
    { value: "Specs", label: "generated from plain-language intent" },
    { value: "Kanban", label: "live task orchestration across the build loop" },
    { value: "3 Modes", label: "autopilot, continuous review, human gate" },
    { value: "Branch-Safe", label: "feature-isolated execution and PR output" },
  ],
  panel: {
    eyebrow: "Summary Board",
    title: "Every feature closes with evidence, not guesswork.",
    description:
      "Relay Studio surfaces total spend, effort, model distribution, and elapsed build time so you can understand what the agent actually consumed to ship the work.",
    bullets: [
      "Cost visibility across the full feature lifecycle",
      "Model usage reporting for engine comparison",
      "Effort and duration metrics for planning feedback loops",
    ],
  },
};

export const governanceContent = {
  eyebrow: "Governance Modes",
  title: "Choose the amount of human involvement the feature deserves.",
  modes: [
    {
      name: "Autopilot",
      description:
        "Best for trusted paths. Relay Studio advances the loop with minimal interruption and optimizes for throughput.",
    },
    {
      name: "Continuous Review",
      description:
        "A balanced mode for teams that want to inspect the build as it progresses without manually driving every task.",
    },
    {
      name: "Human Gate",
      description:
        "Use explicit approval checkpoints before major transitions, merges, or sensitive implementation phases.",
    },
  ],
};

export const ctaContent = {
  eyebrow: "Open Source, Production-Minded",
  title: "Build with agents. Keep the engineering discipline.",
  description:
    "Relay Studio is designed for teams that want autonomous execution, traceable delivery, and a workflow that still respects PRs, branches, and human judgment.",
  primaryCta: {
    label: "View Repository",
    href: "https://github.com",
    external: true,
  },
  secondaryCta: {
    label: "Read the Docs",
    href: "/docs/",
  },
};
