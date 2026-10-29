# Pixeled — Agent Guide

## Project Overview
Dungeon-themed pixel art portfolio site for Michael Lacey, hosted on GitHub Pages.
Single-page layout with a dark aesthetic and purple accent color.

## Tech Stack
- **Framework**: Bootstrap 6.0.0-alpha.1 (CDN-linked, not local)
- **Theme**: `data-bs-theme="dark"` on `<html>`
- **Custom styles**: `styles/main.css` — all custom CSS lives here
- **No build step** — plain HTML/CSS, served as static files
- **Bootstrap 6 class names differ from Bootstrap 5.** Unknown classes fail silently, so use the v6 names:
  - Responsive prefixes: `sm:navbar-expand`, `md:row-cols-3`, `lg:col-6` (not `navbar-expand-sm` / `row-cols-md-3`)
  - Text: `fg-3` (not `text-body-secondary`) · `fs-lg` (not `lead`) · `fs-4xl`/`fs-5xl` (not `display-*`)
  - Surfaces: `border-subtle-primary` (not `border-primary-subtle`) · `bg-2` (not `bg-body-tertiary`)
  - CSS vars: `--bs-bg-body`, `--bs-fg-body`, `--bs-fg-3` (not `--bs-body-bg`, `--bs-body-color`, `--bs-secondary-color`)
  - No `.navbar-collapse` in v6 — the nav uses `.collapse.dungeon-collapse` (see `main.css`)
  - When unsure, grep the CDN CSS for the class before using it

## Design System
- **Primary color**: Purple — overridden via `--bs-primary-*` variables mapped to `--bs-purple-*`
- **Accent utility class**: `.theme-primary` for purple-colored text
- **Heading effect**: `.heading-glow` adds a purple text-shadow to section titles
- **Card hover**: `.entity-card` lifts and glows purple on hover
- Dark surfaces with purple borders (`border-subtle-primary`) as visual separators
- Do NOT introduce additional accent colors without asking

## File Structure
```
index.html              — single-page portfolio (all sections here)
styles/main.css         — custom CSS (Bootstrap variable overrides + component styles)
scripts/main.js         — small vanilla JS (entity creator filter chips)
art/entities/           — entity/character art assets and related pages
```

## Conventions
- Mobile-first, responsive layout using Bootstrap grid (`row-cols-1 sm:row-cols-2 md:row-cols-3 lg:row-cols-4`)
- Sections use dungeon-flavored headings (e.g. "The Gate", "~ Entities ~")
- Entity cards follow a repeatable pattern: `.card.entity-card` with image + body
- Keep all CSS in `styles/main.css` — no inline styles, no additional CSS files
- Bootstrap classes preferred over custom CSS when possible
- Preserve the author comment `<!-- author: michael lacey -->` in the HTML head

## Git Conventions
- Do NOT include `Co-Authored-By` or any AI co-author mentions in commit messages
- No AI attribution in commits — ever

## Important Notes
- Do NOT reorder existing content unless asked — the user cares about element order
- Do NOT add Material Design or other design system tokens — they were intentionally removed
- The `btn-outline` + `theme-primary` pattern is a Bootstrap 6 convention used here — don't replace it with `btn-outline-primary`
- When adding new sections, follow the existing pattern: `<section id="name" class="py-5">` with a centered heading block using `.heading-glow`
