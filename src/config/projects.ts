import type { Project } from '@/types/project.types'

// TODO: replace placeholder content with your own
export const projects: Project[] = [
  {
    id: 'project-one',
    name: 'Project One',
    description: 'An e-commerce storefront with cart, filters and a smooth checkout flow.',
    tech: ['React', 'TypeScript', 'SCSS'],
    githubUrl: 'https://github.com/your-username/project-one',
    liveUrl: 'https://example.com',
  },
  {
    id: 'project-two',
    name: 'Project Two',
    description: 'A dashboard for tracking stats with charts and real-time updates.',
    tech: ['React', 'Charts', 'Vitest'],
    githubUrl: 'https://github.com/your-username/project-two',
  },
  {
    id: 'project-three',
    name: 'Project Three',
    description: 'A small open-source library of accessible UI components.',
    tech: ['TypeScript', 'Storybook', 'a11y'],
    githubUrl: 'https://github.com/your-username/project-three',
  },
]
