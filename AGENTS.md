# Pixeled — Agent Guide

## Project Overview
Dungeon-themed pixel art portfolio site for Michael Lacey, hosted on GitHub Pages.
Single-page layout with a dark aesthetic and purple accent color.

## Tech Stack
- **Framework**: Bootstrap 6.0.0-alpha.1 (CDN-linked, not local)
- **Theme**: `data-bs-theme="dark"` on `<html>`
- **Custom styles**: `styles/main.css` — all custom CSS lives here
- **No build step** — plain HTML/CSS, served as static files

## Design System
- **Primary color**: Purple — overridden via `--bs-primary-*` variables mapped to `--bs-purple-*`
- **Accent utility class**: `.theme-primary` for purple-colored text
- **Heading effect**: `.heading-glow` adds a purple text-shadow to section titles
- **Card hover**: `.entity-card` lifts and glows purple on hover
- Dark surfaces with purple borders (`border-primary-subtle`) as visual separators
- Do NOT introduce additional accent colors without asking

## File Structure
```
index.html              — single-page portfolio (all sections here)
styles/main.css         — custom CSS (Bootstrap variable overrides + component styles)
art/entities/           — entity/character art assets and related pages
```

## Conventions
- Mobile-first, responsive layout using Bootstrap grid (`row-cols-1 / sm-2 / md-3`)
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
