export const changelogPage = {
  slug: "changelog",
  title: "Changelog",
  eyebrow: "Release Notes",
  description:
    "Release history for Relay. Each version links to the corresponding GitHub release.",
  sections: [
    {
      title: "0.9.4-beta — March 27, 2026",
      body:
        "Major stability and workflow release. 14 planned items plus 4 bonus fixes discovered during implementation. Focused on git flow reliability, persistent sessions, and keyboard-driven workflows.",
      bullets: [
        "True persistent session mode — share 1M context across all tasks in a loop run via session continuation",
        "Branch creation moved before kanban board — no more building without a feature branch",
        "Smart feature branch naming derived from feature title",
        "Keyboard shortcuts: Space to toggle loop, Escape to close panels",
        "Git flow fixes: stale lock cleanup, branch conflict detection, push reliability",
        "Performance: parallel git operations, memoized selectors, virtualized task lists",
        "Unit tests toggle in PRD wizard, git init helper for non-git projects",
        "Auto-restart last active project on app launch",
      ],
    },
    {
      title: "0.9.3-beta — March 21, 2026",
      body:
        "Multi-engine support and file context features. Added Codex CLI as a third engine, @file tagging for context injection, and persistent build sessions.",
      bullets: [
        "OpenAI Codex CLI engine with thread-based persistent context",
        "@ file tagging — type @ in any text field to reference project files with autocomplete",
        "Referenced file contents injected into AI prompts (30KB/file, 100KB total)",
        "Project runner with auto-detected run commands and live output streaming",
        "1M token persistent session support for Claude Code CLI",
        "Smarter PRD decomposition — fewer, more substantial tasks with better acceptance criteria",
        "Manual task creation UX improvements",
        "Review panel design refinements",
      ],
    },
    {
      title: "0.9.2-beta — March 18, 2026",
      body:
        "Security hardening, git architecture overhaul, and visual refresh. Addressed all critical and high-severity bugs from the V1 audit.",
      bullets: [
        "Security fixes: API key encryption via safeStorage, path traversal protection on file tools",
        "Git architecture refactor: proper branch management, conflict detection, safe push",
        "Performance and error handling improvements across the agent loop",
        "Dark and light theme redesign with consistent design system",
        "UX improvements: feature archive, feature rename, view state persistence",
        "Sentry integration for crash reporting (app errors only, no project data)",
      ],
    },
    {
      title: "0.9.1-beta — March 15, 2026",
      body:
        "First beta release. Complete build loop with Claude Code CLI as the default engine, human review gate, and metrics dashboard.",
      bullets: [
        "Claude Code CLI engine — uses existing claude login, no API key needed",
        "5-step PRD wizard with streaming preview and clarifying questions",
        "Human review gate with syntax-highlighted diff viewer and approve/reject flow",
        "Settings panel with engine selection and model picker",
        "Image attachment support in feature descriptions",
        "Agent activity feed with real-time streaming",
        "Git history panel and task detail improvements",
        "Sentry observability for error tracking",
      ],
    },
    {
      title: "0.1.0 — March 7, 2026",
      body:
        "Initial release. Foundation build covering all 8 phases: Electron scaffold, database, PRD wizard, kanban board, agent loop, review gate, metrics, and packaging.",
      bullets: [
        "Kanban board with drag-and-drop across 4 columns",
        "Autonomous agent loop with play/pause/stop controls",
        "Human review gate with diff viewer and approve/reject",
        "Metrics dashboard with per-task cost tracking",
        "Dark mode UI, app icon, and macOS packaging",
        "Per-project SQLite database with WAL mode",
      ],
    },
  ],
};

export const securityPage = {
  slug: "security",
  title: "Security",
  eyebrow: "Trust & Security",
  description:
    "Relay is a local desktop app that wraps existing CLI agents. It does not run its own AI models, does not transmit your code to Relay servers, and does not store credentials outside your machine.",
  sections: [
    {
      title: "Architecture",
      body:
        "Relay is an Electron app that orchestrates Claude Code CLI, OpenAI Codex CLI, or the Anthropic SDK. It does not proxy, intercept, or store any data that flows between the agent and the model provider. All AI communication is handled directly by the underlying engine using its own authentication and transport.",
      bullets: [
        "No Relay servers sit between you and the model provider",
        "Claude Code CLI uses your existing claude login — Relay never sees the token",
        "Codex CLI uses your existing codex login — same principle",
        "Anthropic API keys are encrypted at rest via Electron's safeStorage API",
      ],
    },
    {
      title: "Local-only data",
      body:
        "All project data — specs, tasks, agent logs, metrics, and activity history — is stored in a per-project SQLite database at .relay/relay.db inside your project folder. Nothing is sent to external servers. There is no cloud sync, no telemetry on your code, and no account system.",
      bullets: [
        "SQLite with WAL mode and foreign key constraints",
        "Database lives in your project directory — delete the .relay folder to remove all Relay data",
        "No user accounts, no cloud storage, no remote database",
        "API keys encrypted via Electron safeStorage (OS keychain)",
      ],
    },
    {
      title: "Code execution boundaries",
      body:
        "The agent operates within your project directory. The SDK engine restricts all file tool access to the project path. The CLI engines (Claude Code and Codex) inherit the security model of their respective CLI tools, including any sandboxing they provide. Relay does not grant additional filesystem access beyond what the engine would normally have.",
      bullets: [
        "SDK engine: file read/write/list tools are bounded to the project directory",
        "CLI engine: inherits Claude Code's permission model and tool restrictions",
        "Codex engine: runs in workspace-write sandbox mode",
        "Relay auto-excludes .relay/, node_modules/, and .env from diffs and commits",
      ],
    },
    {
      title: "Git safety",
      body:
        "Relay creates isolated WIP commits per task so rejected work can be reverted cleanly. It never force-pushes, never rewrites history on shared branches, and detects merge conflicts before pushing. The human review gate ensures no code reaches the remote without explicit approval (unless you choose autopilot mode).",
      bullets: [
        "Each task gets an isolated WIP commit before review",
        "Rejecting a task reverts its commit without affecting other work",
        "Merge conflict detection prevents silent data loss",
        "Branch creation with explicit base branch selection",
      ],
    },
    {
      title: "Error monitoring",
      body:
        "The only external service Relay communicates with is an error monitoring provider (Sentry) to track application crashes and bugs in the Relay app itself. This captures stack traces and app state — it does not capture your code, project files, prompts, or agent output.",
      bullets: [
        "Crash reports contain Relay app errors only, not your project data",
        "No code, file contents, prompts, or agent responses are included",
        "Used solely to fix bugs and improve app stability",
      ],
    },
    {
      title: "Responsible disclosure",
      body:
        "If you discover a security vulnerability in Relay, please report it privately so it can be addressed before public disclosure.",
      bullets: [
        "Email security concerns to the maintainer via GitHub",
        "Do not open public issues for security vulnerabilities",
        "Fixes will be released as soon as possible with credit to the reporter",
      ],
    },
  ],
};

export const supportPage = {
  slug: "support",
  title: "Support",
  eyebrow: "Community & Help",
  description:
    "Relay is open source and community-supported. Here's how to get help, report bugs, and contribute.",
  sections: [
    {
      title: "Documentation",
      body:
        "Start with the docs for setup instructions, workflow guides, engine configuration, and build mode explanations. Most questions are answered there.",
      bullets: [
        "Read the docs page for complete feature documentation",
        "Check the README on GitHub for development setup and project structure",
      ],
    },
    {
      title: "Bug reports",
      body:
        "Found a bug? Open an issue on the GitHub repository with steps to reproduce, your OS version, and which engine you're using. Screenshots and error messages help.",
      bullets: [
        "Use GitHub Issues for bug reports and feature requests",
        "Include reproduction steps, engine mode, and model selection",
        "Check existing issues first to avoid duplicates",
      ],
    },
    {
      title: "Contributing",
      body:
        "Relay is licensed under GPL-3.0. Contributions are welcome — fork the repo, make your changes, and open a pull request. Run npm run lint before submitting.",
      bullets: [
        "Clone the repo and run npm install && npm run dev to get started",
        "Use dev-bypass as the API key in development mode for testing without real API calls",
        "Run npx tsx scripts/seed-demo.ts to populate demo data for UI testing",
      ],
    },
    {
      title: "Security concerns",
      body:
        "For security vulnerabilities, do not open a public issue. Contact the maintainer privately through GitHub so the issue can be addressed responsibly.",
      bullets: [
        "Private disclosure for security issues",
        "Public issues for non-sensitive bugs and feature requests",
      ],
    },
  ],
};

export const privacyPage = {
  slug: "privacy",
  title: "Privacy Policy",
  eyebrow: "Legal",
  description:
    "Relay is a local desktop application. Your code, specs, and project data never leave your machine — except when communicating with the AI model provider you choose.",
  sections: [
    {
      title: "What Relay does not collect",
      body:
        "Relay does not collect, transmit, or store your source code, project files, specifications, task descriptions, or agent output on any external server. There is no analytics on your development activity, no usage tracking, and no account system.",
      bullets: [
        "No code or project data is sent to Relay servers (there are none)",
        "No user accounts or authentication with Relay",
        "No analytics on your development workflow or agent interactions",
      ],
    },
    {
      title: "What your AI provider receives",
      body:
        "When the agent runs, your code and prompts are sent directly to the AI model provider (Anthropic or OpenAI) by the engine you selected. Relay does not proxy this communication. The provider's own privacy policy and data handling terms apply.",
      bullets: [
        "Claude Code CLI: governed by Anthropic's usage policy and your Claude plan terms",
        "Codex CLI: governed by OpenAI's usage policy and your Codex plan terms",
        "Anthropic SDK: governed by Anthropic's API terms of service",
      ],
    },
    {
      title: "Error monitoring",
      body:
        "Relay uses Sentry for crash reporting to improve app stability. Crash reports contain stack traces and app state. They do not contain your code, prompts, file contents, or agent output.",
      bullets: [
        "Crash data is used solely to identify and fix bugs in Relay",
        "No project-specific data is included in error reports",
      ],
    },
    {
      title: "Website",
      body:
        "This website is a static site with no cookies, no login, and no tracking scripts. It does not collect personal information.",
      bullets: [
        "No cookies or local storage tracking",
        "No third-party analytics",
        "Hosted as a static site with no server-side data processing",
      ],
    },
  ],
};

export const termsPage = {
  slug: "terms",
  title: "Terms of Service",
  eyebrow: "Legal",
  description:
    "Relay is open source software licensed under GPL-3.0. Use of this website and the Relay application is subject to the following terms.",
  sections: [
    {
      title: "Software license",
      body:
        "Relay is distributed under the GNU General Public License v3.0. You may use, modify, and redistribute the software in accordance with the license terms. The full license text is available in the repository.",
      bullets: [
        "Source code is available at github.com/YoniRaviv/Relay",
        "GPL-3.0 governs use, modification, and distribution of the code",
        "Third-party dependencies are subject to their own license terms",
      ],
    },
    {
      title: "No warranty",
      body:
        "Relay is provided as-is, without warranty of any kind. The software is in beta and under active development. Use it at your own risk, and always review agent-generated code before merging to production.",
      bullets: [
        "No guarantees on availability, accuracy, or fitness for a particular purpose",
        "Agent-generated code should always be reviewed by a human before deployment",
        "The human review gate exists for this reason — use it",
      ],
    },
    {
      title: "AI provider terms",
      body:
        "Your use of Claude Code, Codex, or the Anthropic API through Relay is subject to the respective provider's terms of service. Relay does not modify or override any provider-level restrictions, rate limits, or usage policies.",
      bullets: [
        "Anthropic terms apply to Claude Code CLI and API key usage",
        "OpenAI terms apply to Codex CLI usage",
        "You are responsible for compliance with your provider's acceptable use policy",
      ],
    },
    {
      title: "Website use",
      body:
        "This website is provided for informational purposes. Content may change without notice as the product evolves.",
      bullets: [
        "Do not misuse the site or interfere with its availability",
        "Documentation reflects the current state of the product and may lag behind releases",
      ],
    },
  ],
};
