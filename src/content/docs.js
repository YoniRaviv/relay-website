export const docsPageContent = {
  sidebarEyebrow: "Documentation",
  status: "v0.9.4-beta",
  hero: {
    eyebrow: "How Relay Works",
    title: "Feature request to merged PR, in a single loop",
    description:
      "Relay is a desktop app that wraps Claude Code and OpenAI Codex into a visual Kanban build loop. Describe a feature, review the generated spec, and let an autonomous agent build it task-by-task — with isolated commits, diffs, and human review gates.",
  },
  sections: [
    {
      id: "overview",
      title: "What is Relay?",
      body:
        "Relay is an Electron app that turns AI coding agents into a structured build workflow. Instead of manually prompting an AI and copy-pasting code, Relay automates the full cycle: planning, task decomposition, autonomous code generation, and review — all on a Kanban board. Every feature is backed by a PRD, broken into tasks with acceptance criteria, and built on an isolated feature branch with per-task commits.",
    },
    {
      id: "getting-started",
      title: "Getting Started",
      body:
        "Download Relay, choose your engine, and open a project folder. Relay creates a local .relay/relay.db SQLite database in your project to persist all state — specs, tasks, metrics, and agent logs. No cloud, no account required.",
      cards: [
        {
          title: "1. Choose an engine",
          text:
            "Claude Code CLI (default, uses your existing claude login), OpenAI Codex CLI (uses codex login), or Anthropic API key for direct SDK calls. Switch engines anytime from Settings.",
        },
        {
          title: "2. Open a project",
          text:
            "Point Relay to any folder on your machine. It auto-detects git status, run commands, and project structure. Recent projects are saved for quick access on next launch.",
        },
        {
          title: "3. Create a feature",
          text:
            "Describe what you want built in plain language. Attach wireframes or screenshots, reference project files with @filename for context. Relay asks 3–5 clarifying questions, then generates a structured PRD.",
        },
        {
          title: "4. Start building",
          text:
            "Review the decomposed tasks, pick your build mode, and hit Start. The agent builds each task on a feature branch, streaming activity in real time. Approve diffs to commit, or reject with notes to retry.",
        },
      ],
    },
    {
      id: "prd-wizard",
      title: "Specification Wizard",
      body:
        "The PRD wizard is a 5-step flow: Describe → Clarify → Preview → Tasks → Confirm. You type a feature request, optionally attach images and reference files with @filename. Relay reads your codebase, asks clarifying questions, and generates a structured specification with scope, dependencies, and build guidance. The spec is then decomposed into 3–10 tasks with explicit acceptance criteria. You can edit the PRD inline, reorder tasks, add or remove tasks manually, and set priorities before starting the build.",
    },
    {
      id: "kanban-board",
      title: "Kanban Board",
      body:
        "The board has four columns that map to task statuses: Pending, Building, Human Review, and Complete. Drag-and-drop to reorder within columns. Each task card shows title, story ID, priority, and attempt count. Click a task to see full description, acceptance criteria, agent activity feed, and per-task metrics.",
      cards: [
        {
          title: "Pending",
          text:
            "Tasks waiting to be built. Includes an Add Task button for manual task creation. Tasks are picked in priority order, respecting dependency chains you define.",
        },
        {
          title: "Building",
          text:
            "The task currently being built by the agent. A live build timer shows elapsed time. The activity feed below the board streams every action: file reads, writes, bash commands, and tool calls.",
        },
        {
          title: "Human Review",
          text:
            "Tasks the agent has completed, waiting for your approval. Each task has a syntax-highlighted diff viewer with file tree, acceptance criteria checklist, and full agent activity log.",
        },
        {
          title: "Complete",
          text:
            "Approved and committed tasks. Each shows the commit hash, duration, cost, and files changed. Summaries persist across app restarts — they're loaded from the database and git history.",
        },
      ],
    },
    {
      id: "build-loop",
      title: "Agent Build Loop",
      body:
        "The build loop is the core of Relay. When you hit Start, the agent picks the next pending task, builds cumulative context from all completed work (modified files, commit history, upcoming tasks), runs the engine, creates a WIP commit to isolate changes, and routes by build mode. The loop supports play, pause, and stop controls. On failure, the agent increments the attempt counter and retries with failure context. Each task has a 10-minute wall-clock timeout.",
      cards: [
        {
          title: "Cumulative context",
          text:
            "Each task receives: completed task summaries with commit hashes, exact file paths modified by previous tasks (capped at 100), pre-loaded source files (max 30KB/file, 100KB total), and the next 5 upcoming tasks. This eliminates redundant codebase exploration.",
        },
        {
          title: "WIP commits",
          text:
            "Every completed task gets its own WIP commit before review. This means you can reject one task without affecting others, and approved commits are clean and atomic. Diffs are always task-scoped, not feature-scoped.",
        },
        {
          title: "Smart review detection",
          text:
            "Tasks with no file changes are auto-approved and skip the review gate entirely. The agent moves directly to the next task, keeping the loop moving without unnecessary pauses.",
        },
        {
          title: "Retry with feedback",
          text:
            "When you reject a task, your notes are injected into the agent's context for the retry attempt. The agent sees exactly what was wrong and what you expect — so retries are targeted, not blind.",
        },
      ],
    },
    {
      id: "build-modes",
      title: "Build Modes",
      body:
        "Relay supports three build modes that control how much the agent can do before stopping for human input. Switch modes from the board header before or during a build.",
      cards: [
        {
          title: "Pause for Review (default)",
          text:
            "The agent builds one task, creates a WIP commit, and pauses. You review the syntax-highlighted diff, check acceptance criteria, and approve or reject with notes. The loop resumes after your decision.",
        },
        {
          title: "Continuous",
          text:
            "The agent keeps building without pausing between tasks. Completed tasks accumulate in the Human Review column. Review them all at your own pace after the loop finishes — or jump in mid-loop.",
        },
        {
          title: "Autopilot",
          text:
            "Fully autonomous. The agent builds, commits, and pushes each task without waiting for approval. All tasks are auto-marked as complete. Best for well-scoped, low-risk work where you trust the spec.",
        },
      ],
    },
    {
      id: "engines",
      title: "Execution Engines",
      body:
        "Relay supports three pluggable execution engines. All share the same system prompt, cumulative context building, and WIP commit strategy — the only difference is which model and auth method they use. Switch engines in Settings; the model auto-resets to a compatible default.",
      cards: [
        {
          title: "Claude Code CLI (default)",
          text:
            "Uses @anthropic-ai/claude-agent-sdk to spawn Claude Code as a subprocess. No API key needed — uses your existing claude login. Full tool suite: Read, Write, Edit, Glob, Grep, Bash. Supports persistent sessions for 1M shared context across tasks.",
        },
        {
          title: "Anthropic API Key",
          text:
            "Uses @anthropic-ai/sdk directly with your API key (encrypted via safeStorage). Single API call per task with built-in file tools bounded to your project directory. Models: Haiku 4.5, Sonnet 4/4.6, Opus 4.6.",
        },
        {
          title: "OpenAI Codex CLI",
          text:
            "Uses @openai/codex-sdk with thread-based persistent context. Workspace-write sandbox for task execution. Event mapping from Codex ThreadItems to Relay's activity feed. Models: GPT-5.4, GPT-5.4 Mini, GPT-5.3 Codex.",
        },
      ],
    },
    {
      id: "file-tagging",
      title: "@ File Tagging & Attachments",
      body:
        "Type @ in any text field to reference project files. An autocomplete dropdown appears with fuzzy search across all git-tracked files. Referenced file contents (up to 30KB per file, 100KB total) are injected directly into the AI prompt. You can also paste or attach images — wireframes, screenshots, mockups — that the AI uses to understand visual intent. Available in feature descriptions, task descriptions, and acceptance criteria.",
    },
    {
      id: "git-integration",
      title: "Git Integration",
      body:
        "Relay manages the full git workflow. It auto-detects your project's git status on open, creates feature branches with a searchable base branch picker, adds framework-specific .gitignore patterns on first run, and excludes .relay/, node_modules/, and .env from diffs automatically.",
      cards: [
        {
          title: "Branch management",
          text:
            "Every feature runs on its own branch. Relay creates it for you with a smart name derived from the feature title. Search and filter base branches when creating a new feature.",
        },
        {
          title: "Commit on approve",
          text:
            "When you approve a task, Relay amends the WIP commit with a clean message and pushes to remote. The commit trail is traceable: each task maps to a specific commit hash stored in the database.",
        },
        {
          title: "PR creation",
          text:
            "When all tasks are complete, create a pull request directly from the app. The PR includes the full task history and links back to the feature spec.",
        },
        {
          title: "Conflict detection",
          text:
            "Relay detects merge conflicts and shows failures as warnings. It never silently discards work or pushes over conflicts.",
        },
      ],
    },
    {
      id: "metrics",
      title: "Metrics & Summary",
      body:
        "Every feature ships with full build metrics. The Summary view shows total tasks, completion rate, build time, total cost, tool calls, and first-pass success rate. Cost is broken down per task and per model with token counts. Models are tagged by engine (Anthropic vs OpenAI) with accurate per-model pricing. Metrics are exportable as a markdown report for team visibility.",
    },
    {
      id: "project-runner",
      title: "Project Runner",
      body:
        "Click the Run button in the board header to preview your app. Relay auto-detects the run command from package.json, Cargo.toml, pyproject.toml, go.mod, docker-compose.yml, or Makefile. Override with a custom command in .relay/run.json. Output streams in a tabbed panel with clickable URLs. Play/stop toggle sits right next to the model picker.",
    },
    {
      id: "data-storage",
      title: "Local Data & Privacy",
      body:
        "All data is stored locally in a per-project SQLite database at .relay/relay.db. No cloud, no telemetry, no accounts. API keys are encrypted via Electron's safeStorage. The database uses WAL mode for concurrent access and foreign key constraints for data integrity. Schema is versioned with 8 migrations — your data survives app updates.",
    },
    {
      id: "keyboard-shortcuts",
      title: "Keyboard Shortcuts",
      body:
        "Space toggles the agent loop (play/pause). Escape closes the active panel (review or task detail). The app also supports desktop notifications when tasks need review or the build finishes, so you can work on other things while the agent builds.",
    },
  ],
  cta: {
    title: "Ready to try it?",
    description:
      "Download Relay, open a project, and describe your first feature. The agent handles the rest.",
    button: {
      label: "Download for Mac",
      href: "https://github.com/YoniRaviv/Relay/releases/latest/download/Relay-Mac-Installer.dmg",
      external: true,
    },
  },
};
