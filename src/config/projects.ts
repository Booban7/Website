import type { Project } from '@/types/project.types'

// TODO: replace placeholder content with your own
export const projects: Project[] = [
  {
    id: 'rune-shop',
    name: 'Rune Shop',
    description: 'An e-commerce storefront with cart, filters and a smooth checkout flow.',
    tech: [
      { name: 'React', gem: 'fjord' },
      { name: 'TypeScript', gem: 'fjord' },
      { name: 'SCSS', gem: 'berry' },
    ],
    githubUrl: 'https://github.com/your-username/rune-shop',
    liveUrl: 'https://example.com',
  },
  {
    id: 'forest-tracker',
    name: 'Forest Tracker',
    description: 'A dashboard for tracking hiking stats with charts and real-time updates.',
    tech: [
      { name: 'React', gem: 'fjord' },
      { name: 'Charts', gem: 'amber' },
      { name: 'Vitest', gem: 'moss' },
    ],
    githubUrl: 'https://github.com/your-username/forest-tracker',
  },
  {
    id: 'yggdrasil-ui',
    name: 'Yggdrasil UI',
    description: 'A small open-source library of accessible, nature-inspired UI components.',
    tech: [
      { name: 'TypeScript', gem: 'fjord' },
      { name: 'Storybook', gem: 'berry' },
      { name: 'a11y', gem: 'moss' },
    ],
    githubUrl: 'https://github.com/your-username/yggdrasil-ui',
  },
]
