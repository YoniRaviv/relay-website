export const changelogPage = {
  slug: "changelog",
  title: "Changelog",
  eyebrow: "Release Notes",
  description:
    "Track how Relay Studio evolves across the product surface, agent workflow, and specs-driven delivery system.",
  sections: [
    {
      title: "Version 0.4.0",
      body:
        "Introduced the marketing site and docs foundation, clarified the Relay Studio product narrative, and established the initial multi-page static architecture for fast deployment.",
      bullets: [
        "New product homepage and docs experience",
        "Specs-first messaging across the site",
        "Improved motion system for the landing page",
      ],
    },
    {
      title: "Version 0.3.0",
      body:
        "Expanded the autonomous delivery model around feature branches, task decomposition, and final pull request generation so feature work remains inspectable from intent to merge.",
      bullets: [
        "Feature-level branch discipline",
        "Task-by-task build loop continuity",
        "Feature summary reporting for spend and effort",
      ],
    },
  ],
};

export const securityPage = {
  slug: "security",
  title: "Security",
  eyebrow: "Trust & Safety",
  description:
    "Relay Studio is designed to work inside real engineering workflows, which means security, branch isolation, and reviewability are part of the product story.",
  sections: [
    {
      title: "Repository safety",
      body:
        "Relay Studio operates around feature isolation, structured commits, and explicit pull request generation so autonomous work stays reviewable and contained.",
      bullets: [
        "Feature work is isolated to its own branch",
        "Commits reflect task progression instead of opaque output blobs",
        "Human review gates can be inserted where risk is higher",
      ],
    },
    {
      title: "Model governance",
      body:
        "The product is designed to keep engine selection, task execution mode, and delivery state visible throughout the build loop so operators can make informed decisions.",
      bullets: [
        "Engine choice remains explicit",
        "Autopilot and review modes are transparent",
        "Summary boards expose cost, effort, and model usage",
      ],
    },
    {
      title: "Responsible disclosure",
      body:
        "If you discover a security issue, please report it privately before public disclosure so the issue can be reviewed and addressed responsibly.",
      bullets: [
        "Use the support page to request a private security contact path",
        "Avoid publishing sensitive exploit details before remediation",
      ],
    },
  ],
};

export const supportPage = {
  slug: "support",
  title: "Support",
  eyebrow: "Community & Help",
  description:
    "Relay Studio should be easy to evaluate, adopt, and troubleshoot. This page sets clear support paths for users, contributors, and teams exploring the workflow.",
  sections: [
    {
      title: "Documentation first",
      body:
        "Start with the docs to understand the specs-driven workflow, engine modes, branch model, and how Relay Studio structures feature execution.",
      bullets: [
        "Read setup and methodology docs first",
        "Use docs as the source of truth for expected behavior",
      ],
    },
    {
      title: "Product feedback",
      body:
        "For bugs, workflow gaps, or product suggestions, use the project repository and community channels so feedback can be tracked and discussed in the open.",
      bullets: [
        "Report bugs with reproducible steps",
        "Suggest improvements with feature context and expected outcomes",
      ],
    },
    {
      title: "Security concerns",
      body:
        "For sensitive security matters, avoid posting public details immediately. Request a private reporting path first so the issue can be reviewed responsibly.",
      bullets: [
        "Use private disclosure for security issues",
        "Public issues are better for non-sensitive bugs and product feedback",
      ],
    },
  ],
};

export const privacyPage = {
  slug: "privacy",
  title: "Privacy Policy",
  eyebrow: "Legal",
  description:
    "This page is a starter privacy policy surface for the marketing site. It should be updated with the final operational details once data flows and analytics tooling are finalized.",
  sections: [
    {
      title: "Website data",
      body:
        "The website should only collect the minimum information needed to operate reliably, understand traffic at a high level, and respond to support or contact requests if those channels are added.",
      bullets: [
        "Minimize analytics collection",
        "Avoid collecting sensitive data unnecessarily",
        "Document any third-party services clearly",
      ],
    },
    {
      title: "Product data",
      body:
        "If Relay Studio processes repository or feature information, the final privacy policy should describe what data is handled, how long it is retained, and who can access it.",
      bullets: [
        "Clarify repository access scope",
        "Explain retention and deletion expectations",
        "Describe any model-provider data handling considerations",
      ],
    },
  ],
};

export const termsPage = {
  slug: "terms",
  title: "Terms of Service",
  eyebrow: "Legal",
  description:
    "This page is a starter terms surface for the website and should be revised once the final distribution model, licensing terms, and support commitments are defined.",
  sections: [
    {
      title: "Use of the site",
      body:
        "Visitors may access the Relay Studio website and documentation for informational purposes, subject to applicable law and any future product or service terms that govern use of the software itself.",
      bullets: [
        "Do not misuse the site or interfere with service availability",
        "Respect any license terms attached to the software or content",
      ],
    },
    {
      title: "Open source and licensing",
      body:
        "Where Relay Studio is distributed as open source software, the applicable repository license governs use, modification, and redistribution of the code.",
      bullets: [
        "Repository license terms supersede generic website language for code use",
        "Third-party components remain subject to their own licenses",
      ],
    },
  ],
};
