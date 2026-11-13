import type { Project } from '@/types/project.types'

// TODO: replace placeholder content with your own
export const projects: Project[] = [
  {
    id: 'materia-shop',
    name: 'Materia Shop',
    description: 'An e-commerce storefront with cart, filters and a smooth checkout flow.',
    tech: [
      { name: 'React', materia: 'green' },
      { name: 'TypeScript', materia: 'green' },
      { name: 'SCSS', materia: 'yellow' },
    ],
    githubUrl: 'https://github.com/your-username/materia-shop',
    liveUrl: 'https://example.com',
  },
  {
    id: 'chocobo-tracker',
    name: 'Chocobo Tracker',
    description: 'A dashboard for tracking race stats with charts and real-time updates.',
    tech: [
      { name: 'React', materia: 'green' },
      { name: 'Charts', materia: 'blue' },
      { name: 'Vitest', materia: 'purple' },
    ],
    githubUrl: 'https://github.com/your-username/chocobo-tracker',
  },
  {
    id: 'limit-break-ui',
    name: 'Limit Break UI',
    description: 'A small open-source component library of retro-styled, accessible UI elements.',
    tech: [
      { name: 'TypeScript', materia: 'green' },
      { name: 'Storybook', materia: 'red' },
      { name: 'a11y', materia: 'blue' },
    ],
    githubUrl: 'https://github.com/your-username/limit-break-ui',
  },
]
