# Robin Davoust — Portfolio

Personal portfolio website built with React, TypeScript, Vite and SCSS.

## Tech stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [SCSS](https://sass-lang.com/)

## Getting started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# type-check and build for production
npm run build

# preview the production build
npm run preview

# lint
npm run lint
```

## Project structure

```
src/
├── components/      # Section components (Navbar, Hero, About, Projects, Contact, Footer)
├── App.tsx          # Composes the page sections
├── main.tsx         # App entry point
└── index.scss       # Global styles and design tokens
```

## Customizing

Update the content in the components under `src/components/` — replace the
placeholder project data in `Projects.tsx`, your bio in `About.tsx`, and the
contact email in `Contact.tsx`.
