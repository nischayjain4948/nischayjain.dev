# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Layout

```
app/
  components/
    Navbar.js       # Fixed top nav with mobile hamburger menu ("use client")
    Footer.js       # Page footer
    ProjectCard.js  # Reusable card used on home and /projects
  about/page.js     # /about route (server component)
  projects/page.js  # /projects route (server component)
  contact/page.js   # /contact route ("use client")
  page.js           # Home page — skills, project cards, social links ("use client")
  layout.js         # Root layout — injects devicon CDN link, wraps all pages with Navbar + Footer
  projectData.js    # Single source of truth for project cards
  globals.css       # Tailwind base + custom keyframe animations
  fonts/            # Geist and GeistMono woff files
public/
  nischay.jpeg      # Profile photo referenced on home page
  nischayjain.pdf   # Resume — linked in Navbar and Contact page
  deadpool.jpg      # Additional image asset
  index.html        # Static fallback HTML
```

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint     # ESLint (next/core-web-vitals ruleset)
```

## Architecture

- **Next.js 15 App Router** with plain JavaScript (no TypeScript). `jsconfig.json` sets up path aliases.
- Pages that use browser APIs or React hooks carry `"use client"` at the top (Home, Navbar, Contact). Pages without interactivity are server components by default (About, Projects).
- **devicon** icons are loaded via CDN `<link>` injected in `layout.js`'s `<head>` — not installed as a local asset. Add new tech icons using the `devicon-<name>-<variant>` class pattern. Prisma is the exception: it uses a `simple-icons` CDN `<img>` tag since devicon lacks it.
- **Project data** is defined in `app/projectData.js` as a plain array of `{ title, description, link, image }`. Both the home page and the `/projects` page import from this single file — update projects there only.
- **Static assets** (resume PDF, profile photo) are served from `public/`. The Navbar and Contact page both link to `/nischayjain.pdf`; the home page references `/nischay.jpeg`. Keep filenames consistent when replacing either.
- **Home page sections**: hero/profile → skills grid (devicon icons + progress bars) → featured project cards → social links (LinkedIn, GitHub, Twitter, email).
- No database, no API routes, no authentication — purely static/client-rendered.

## Key Details

- Owner: Nischay Jain (`nischayjain4948@gmail.com`)
- Social links on home page: LinkedIn (`/in/nischay-jain-799998213`), GitHub (`nischayjain4948`), Twitter (`@Nischay_jn`), email
- Skills shown: JavaScript, Next.js, Node.js, MongoDB, Prisma, PostgreSQL, React, Docker, Git, Tailwind CSS, Express.js, AWS
