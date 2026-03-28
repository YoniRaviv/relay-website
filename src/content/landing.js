export const heroContent = {
  eyebrow: "Specs-First Autonomous Development",
  title: ["Ship features with", "structured autonomy."],
  description:
    "Relay Studio turns a plain-language feature request into a PRD, decomposes it into scoped tasks, and runs an autonomous build loop — with isolated commits, task-level diffs, and human review gates at every step.",
  primaryCta: { label: "Download for macOS", href: "https://github.com/YoniRaviv/Relay/releases/latest/download/Relay-Mac-Installer.dmg", external: true },
  secondaryCta: { label: "Open Docs", href: "/docs/" },
  meta: ["macOS only", "Open source", "Claude Code + Codex"],
};

export const platformIntro = {
  eyebrow: "Product",
  title: "One surface for specs, tasks, builds, and review.",
};

export const featureCards = [
  {
    eyebrow: "PRD Generation",
    title: "Describe once. Get a spec, tasks, and acceptance criteria.",
    body:
      "Type a feature request, attach wireframes or docs, answer a few clarifying questions — Relay generates a structured PRD and decomposes it into 3–10 buildable tasks with explicit acceptance criteria.",
  },
  {
    eyebrow: "Build Loop",
    title: "An autonomous agent that builds task-by-task on a feature branch.",
    body:
      "Relay picks the next pending task, injects cumulative context from completed work, runs the agent, creates a WIP commit, and routes to review — or keeps building in continuous mode.",
  },
  {
    eyebrow: "Review & Approve",
    title: "Task-scoped diffs. Approve, reject, or let the agent retry.",
    body:
      "Every task pauses for review with a syntax-highlighted diff, acceptance criteria checklist, and full agent activity log. Reject with notes and the agent retries with your feedback in context.",
  },
];

export const workflowContent = {
  eyebrow: "Workflow",
  title: "From feature request to merged PR in a single loop.",
  description:
    "Relay keeps the full lifecycle visible: PRD, kanban board, agent activity, commit trail, and cost metrics — all on one surface. No context switching between terminal, editor, and project tracker.",
  steps: [
    {
      id: "01",
      title: "Describe the feature",
      text:
        "Open your project, describe what you want to build, and optionally attach images or reference files. Relay asks 3–5 clarifying questions to capture intent.",
    },
    {
      id: "02",
      title: "Generate spec & tasks",
      text:
        "Relay reads your codebase, generates a structured PRD with scope and dependencies, then decomposes it into prioritized tasks with acceptance criteria.",
    },
    {
      id: "03",
      title: "Run the build loop",
      text:
        "Each task is executed by Claude Code or Codex with cumulative context from prior tasks. Commits land on the feature branch as work progresses.",
    },
    {
      id: "04",
      title: "Review & merge",
      text:
        "Inspect task-level diffs, check acceptance criteria, and approve or reject with notes. Approved tasks are committed and pushed. The loop continues until the feature is complete.",
    },
  ],
};

export const showcaseContent = {
  eyebrow: "Operator Surface",
  title: "A kanban board that orchestrates autonomous agents.",
  description:
    "Pending, Building, Human Review, Complete — every task moves through a visual pipeline. Drag to reorder, click to inspect diffs, and control the loop with play, pause, and stop.",
  panels: [
    {
      type: "summary",
      label: "Feature Summary",
      title: "Cost, time, passes, and quality for every feature",
      body:
        "Know exactly what the agent consumed: tokens, dollars, tool calls, and time — broken down per task and per model.",
      stats: [
        ["Total Tasks", "13", "4 pending, 2 in progress"],
        ["Completion Rate", "54%", "7 of 13 completed"],
        ["Build Time", "26m 30s"],
        ["Total Cost", "$1.26"],
        ["Tool Calls", "334"],
        ["First-Pass", "86%"],
      ],
      models: [
        ["Sonnet 4.6", "61.3K tokens", "$0.92"],
        ["GPT-5.4 Mini", "2.2M tokens", "$0.34"],
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
      title: "Start from intent, not templates",
      body:
        "Describe what you want in plain language, attach wireframes or reference files, toggle unit tests on or off — Relay handles the rest.",
      steps: ["Describe", "Review Specification", "Edit", "Tasks", "Confirm"],
    },
    {
      type: "refine",
      label: "Spec Refinement",
      title: "Targeted questions that sharpen the spec before any code is written",
      body:
        "Relay asks just enough to clarify layout, behavior, and implementation details — then generates the PRD with your answers baked in.",
      question: "How should the hero section adapt across different screen sizes?",
      options: [
        "Maintain particles on all devices with reduced complexity on mobile",
        "Remove particles on mobile, keep static design for performance",
        "Different layouts: side-by-side on desktop, stacked on mobile",
        "Single responsive layout that scales proportionally",
      ],
    },
  ],
};

export const summaryContent = {
  metrics: [
    { value: "PRD", label: "generated from natural language + attached files" },
    { value: "Kanban", label: "4-column board with drag-and-drop orchestration" },
    { value: "3 Engines", label: "Claude Code, Anthropic SDK, OpenAI Codex" },
    { value: "Git-Native", label: "WIP commits, feature branches, auto-push" },
  ],
  panel: {
    eyebrow: "Build Metrics",
    title: "Every feature ships with a receipt.",
    description:
      "Relay tracks token usage, cost per model, build duration, tool calls, and first-pass success rate — so you can compare engines, estimate future features, and hold the agent accountable.",
    bullets: [
      "Per-task cost breakdown across Anthropic and OpenAI models",
      "First-pass success rate as a quality signal for your specs",
      "Exportable markdown reports for team visibility",
    ],
  },
};

export const governanceContent = {
  eyebrow: "Build Modes",
  title: "Control how much the agent can do before it stops for you.",
  modes: [
    {
      name: "Review",
      description:
        "The agent builds one task, creates a WIP commit, and pauses. You review the diff, check acceptance criteria, and approve or reject before the next task starts.",
    },
    {
      name: "Continuous",
      description:
        "The agent keeps building without pausing. Completed tasks accumulate in the review column for batch approval after the loop finishes.",
    },
    {
      name: "Autopilot",
      description:
        "Fully autonomous. The agent builds, commits, and pushes each task without waiting for approval. Best for trusted, well-scoped work.",
    },
  ],
};

export const ctaContent = {
  eyebrow: "Open Source",
  title: "Autonomous builds. Engineering-grade output.",
  description:
    "Relay Studio is free, open source, and runs locally. No API keys needed — it uses your existing Claude Code authentication. Bring your own keys if you want SDK or Codex engines.",
  primaryCta: {
    label: "Download for macOS",
    href: "https://github.com/YoniRaviv/Relay/releases/latest/download/Relay-Mac-Installer.dmg",
    external: true,
  },
  secondaryCta: {
    label: "View Repository",
    href: "https://github.com/YoniRaviv/Relay",
    external: true,
  },
};
