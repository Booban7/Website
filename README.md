# Robin Davoust — RPG Portfolio

An RPG-themed personal portfolio. Before entering, visitors stand at a
crossroads and **choose their path — Good or Evil**. That choice reshapes the
entire site: color theme, typography accents, copy, and ambient effects all
shift to reflect the chosen alignment.

## How it works

- A full-screen **split-screen selection gate** greets first-time visitors.
- Choosing **The Radiant Path** (good) or **The Shadow Path** (evil) sets a
  `data-alignment` attribute on `<html>` that drives all theming via CSS custom
  properties, and swaps section copy from a content dictionary.
- The choice is stored in `localStorage`, so it's remembered between visits.
- A **Change Path** control (in the navbar and footer) returns to the
  crossroads to choose again.

## Themes

| Path   | Mood                         | Palette                          |
| ------ | ---------------------------- | -------------------------------- |
| Good   | Radiant paladin, light       | Gold, ivory, holy blue, glow     |
| Evil   | Shadow warlock, dark         | Crimson, obsidian, violet, ember |

## Tech stack

- [React 19](https://react.dev/) + Context for alignment state
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [SCSS](https://sass-lang.com/)
- Google Fonts — Cinzel (headings) & EB Garamond (body)

## Getting started

```bash
npm install       # install dependencies
npm run dev       # start the dev server
npm run build     # type-check and build for production
npm run preview   # preview the production build
npm run lint      # lint
```

## Project structure

```
src/
├── components/       # AlignmentGate, Navbar, Hero, About, Skills, Experience,
│                     # Projects, Contact, Footer, Particles, Reveal
├── context/          # AlignmentContext — choice state + persistence
├── content/          # copy.ts — all good/evil text in one place
├── hooks/            # useInView — scroll-reveal animation hook
├── App.tsx           # Gate vs. site routing based on alignment
├── main.tsx          # App entry (wrapped in AlignmentProvider)
└── index.scss        # Global styles, dual theme tokens, particles
```

## Customizing

- **Text:** edit `src/content/copy.ts` — every good/evil headline, tagline and
  section blurb lives there.
- **Colors / fonts:** adjust the `[data-alignment="good"]` and
  `[data-alignment="evil"]` token blocks at the top of `src/index.scss`.
- **Data:** skills, experience, and projects arrays live in their respective
  component files under `src/components/`.
- **Images:** see [`public/README.md`](public/README.md).
