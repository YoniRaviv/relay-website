const DOMAIN = "https://relay-studio.dev";
const SITE_NAME = "Relay Studio";
const OG_IMAGE = `${DOMAIN}/og-image.png`;

export const seoConfig = {
  "/": {
    title: "Relay Studio — Specs-First Autonomous Development",
    description:
      "Turn AI coding agents into a visual Kanban build loop. Describe a feature, generate a spec, decompose into tasks, and let Claude Code or Codex build it — with human review gates at every step.",
    canonical: `${DOMAIN}/`,
    og: {
      title: "Relay Studio — Ship Features with Structured Autonomy",
      description:
        "Desktop app that wraps Claude Code and OpenAI Codex into a PRD → Tasks → Build Loop → Review workflow. Open source, runs locally.",
      image: OG_IMAGE,
      type: "website",
    },
  },
  "/docs/": {
    title: "Documentation — Relay Studio",
    description:
      "Complete guide to Relay Studio: PRD wizard, Kanban board, agent build loop, build modes, execution engines, git integration, metrics, and keyboard shortcuts.",
    canonical: `${DOMAIN}/docs/`,
    og: {
      title: "Relay Studio Documentation",
      description:
        "Learn how to use Relay Studio — from feature description to merged PR. Setup, engines, build modes, review flow, and metrics.",
      image: OG_IMAGE,
      type: "article",
    },
  },
  "/changelog/": {
    title: "Changelog — Relay Studio",
    description:
      "Release history for Relay Studio. Track new features, engine support, performance improvements, and bug fixes across every version.",
    canonical: `${DOMAIN}/changelog/`,
    og: {
      title: "Relay Studio Changelog",
      description: "Release notes and version history for Relay Studio.",
      image: OG_IMAGE,
      type: "article",
    },
  },
  "/security/": {
    title: "Security — Relay Studio",
    description:
      "Relay is a local desktop app. Your code never leaves your machine. No Relay servers, no telemetry on your code, API keys encrypted at rest.",
    canonical: `${DOMAIN}/security/`,
    og: {
      title: "Relay Studio Security",
      description:
        "Local-only architecture, encrypted credentials, sandboxed execution, and git safety. How Relay keeps your code secure.",
      image: OG_IMAGE,
      type: "article",
    },
  },
  "/support/": {
    title: "Support — Relay Studio",
    description:
      "Get help with Relay Studio. Documentation, bug reports, contributing guidelines, and security disclosure.",
    canonical: `${DOMAIN}/support/`,
    og: {
      title: "Relay Studio Support",
      description: "Documentation, bug reports, and contributing to Relay Studio.",
      image: OG_IMAGE,
      type: "article",
    },
  },
  "/privacy/": {
    title: "Privacy Policy — Relay Studio",
    description:
      "Relay is a local desktop app. No code collection, no accounts, no tracking. Your project data stays on your machine.",
    canonical: `${DOMAIN}/privacy/`,
    og: {
      title: "Relay Studio Privacy Policy",
      description: "How Relay handles your data: it doesn't. Everything stays local.",
      image: OG_IMAGE,
      type: "article",
    },
  },
  "/terms/": {
    title: "Terms of Service — Relay Studio",
    description:
      "Terms of service for Relay Studio. Open source under GPL-3.0, provided as-is, AI provider terms apply.",
    canonical: `${DOMAIN}/terms/`,
    og: {
      title: "Relay Studio Terms of Service",
      description: "GPL-3.0 license, no warranty, AI provider terms apply.",
      image: OG_IMAGE,
      type: "article",
    },
  },
};

export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: DOMAIN,
    logo: `${DOMAIN}/favicon.svg`,
    sameAs: ["https://github.com/YoniRaviv/Relay"],
  },
  software: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Relay",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Desktop app that turns AI coding agents into a visual Kanban build loop with PRD generation, task decomposition, and human review gates.",
    url: DOMAIN,
    downloadUrl:
      "https://github.com/YoniRaviv/Relay/releases/latest/download/Relay-Mac-Installer.dmg",
    license: "https://www.gnu.org/licenses/gpl-3.0.html",
    author: {
      "@type": "Person",
      name: "Yoni Raviv",
      url: "https://github.com/YoniRaviv",
    },
  },
};

export { DOMAIN, SITE_NAME };
