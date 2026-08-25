# Robin Davoust — Portfolio

A personal portfolio with a **misty mountain & ocean** nature-hiking theme,
built with React, TypeScript, Vite and SCSS.

## Sections

- **Hero** — full-screen misty scene (CSS layered mountains + drifting fog)
- **About** — bio with a small photo gallery
- **Skills** — grouped technologies
- **Experience** — work history timeline
- **Projects** — showcase cards
- **Contact** — call to action + social links

## Tech stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [SCSS](https://sass-lang.com/)
- Google Fonts — Fraunces (headings) & Inter (body)

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
├── components/      # Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer, Reveal
├── hooks/           # useInView — scroll-reveal animation hook
├── App.tsx          # Composes the page sections
├── main.tsx         # App entry point
└── index.scss       # Global styles, design tokens, misty theme
```

## Adding your own content

- **Text & data:** edit the arrays and copy inside each component in
  `src/components/` (bio, skills, experience, projects, links, email).
- **Images:** the site ships with misty gradient placeholders. Add your own
  photos under `public/` — see [`public/README.md`](public/README.md) for the
  expected file names and sizes. After adding `public/hero.jpg`, set the
  `.hero__photo` opacity to `1` in `src/components/Hero/Hero.scss`.

## Theming

Colors, fonts, spacing and radii are defined as CSS custom properties at the top
of `src/index.scss` (`:root`). Adjust the palette there to change the whole mood.
