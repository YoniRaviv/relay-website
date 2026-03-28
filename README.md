# Relay Studio — Website

Marketing site and documentation for [Relay](https://github.com/YoniRaviv/Relay), the desktop app that turns AI coding agents into a visual Kanban build loop.

**Live at:** [relay-studio.dev](https://relay-studio.dev)

## Stack

- **React 18** + React Router
- **Tailwind CSS v4**
- **Motion** (Framer Motion) for animations
- **Vite** for build
- **Cloudflare Pages** for hosting

## Pages

| Route | Description |
|-------|-------------|
| `/` | Product landing page |
| `/docs/` | Full documentation |
| `/changelog/` | Release history |
| `/security/` | Security model |
| `/support/` | Support & contributing |
| `/privacy/` | Privacy policy |
| `/terms/` | Terms of service |

## Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173` with hot reload.

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy

Connected to Cloudflare Pages via GitHub. Every push to `main` triggers a deploy.

**Build settings:**
- Build command: `npm run build`
- Output directory: `dist`
- Custom domain: `relay-studio.dev`

## SEO

- Per-page meta tags, Open Graph, and Twitter Cards
- JSON-LD structured data (SoftwareApplication + Organization)
- `sitemap.xml` and `robots.txt`
- Cloudflare Web Analytics for page views
- Custom event tracking for download and GitHub link clicks

## License

MIT
