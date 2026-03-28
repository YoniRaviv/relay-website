export const docsPageContent = {
  sidebarEyebrow: "Core Documentation",
  status: "System: operational",
  hero: {
    eyebrow: "Core Architecture",
    title: "The Relay Studio methodology",
    description:
      "Relay Studio applies a structured, specs-first delivery model for autonomous development. The system translates intent into durable artifacts, then coordinates the agent loop against that structure.",
  },
  sections: [
    {
      id: "introduction",
      title: "Introduction",
      body:
        "Relay Studio is an orchestration layer for autonomous software development. It converts product intent into structured execution, then coordinates task-by-task delivery through agent build loops.",
    },
    {
      id: "getting-started",
      title: "Getting Started",
      body:
        "Connect a repository, choose an engine, and create a feature. Relay Studio assembles a spec, creates the feature branch, and prepares the kanban workflow for execution.",
    },
    {
      id: "sdd-methodology",
      title: "Specs-Driven Delivery",
      body:
        "Relay Studio applies a specs-first methodology. Product intent becomes a durable artifact, not an ephemeral prompt, which reduces drift and makes autonomous work inspectable.",
      cards: [
        {
          title: "Agent orchestration",
          text:
            "Codex and Claude Code operate inside a Relay Studio-managed loop with task-level context, execution rules, and repository-aware state.",
        },
        {
          title: "Feature and task model",
          text:
            "Features capture business intent. Tasks represent the atomic units of implementation, review, and commit history.",
        },
        {
          title: "Branch discipline",
          text:
            "Every feature runs on its own branch so progress remains isolated, reviewable, and ready for a clean PR once complete.",
        },
        {
          title: "Summary intelligence",
          text:
            "Relay Studio surfaces cost, effort, model usage, and elapsed build time so teams can compare outcomes and tune their operating model.",
        },
      ],
    },
    {
      id: "engine-modes",
      title: "Engine Modes",
      body:
        "Select between supported coding engines and pair them with the governance mode that matches the risk profile of the feature.",
    },
    {
      id: "task-summary",
      title: "Task Summary",
      body:
        "Each feature includes a summary view with tasks completed, spend, effort, model mix, and total execution time across the delivery loop.",
    },
    {
      id: "cli-git",
      title: "CLI & Git",
      body:
        "Relay Studio preserves development hygiene: feature branches, structured commits, and final pull request creation are part of the workflow, not optional cleanup work after the fact.",
    },
  ],
  cta: {
    title: "Ready to run the loop?",
    description:
      "Start with a single feature, inspect the generated spec, and choose the governance mode that fits the work.",
    button: {
      label: "Back to Product",
      href: "/",
    },
  },
};
