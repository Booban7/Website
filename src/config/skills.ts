import type { SkillGroup } from '@/types/profile.types'

export const skills: SkillGroup[] = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'HTML', 'CSS / SCSS'] },
  { group: 'Frameworks & libraries', items: ['React', 'Angular', 'GraphQL', 'Apollo Client'] },
  { group: 'Styling & UI', items: ['SCSS', 'CSS', 'Responsive design', 'Design systems'] },
  { group: 'Quality', items: ['Accessibility (WCAG)', 'Jest / Vitest', 'React Testing Library'] },
  { group: 'Tools', items: ['Git', 'Vite', 'Storybook', 'Figma'] },
  { group: 'AI tools', items: ['GitHub Copilot', 'Claude Code'] },
  { group: 'Platform & delivery', items: ['Azure', 'CI/CD', 'Grafana', 'LaunchDarkly'] },
  { group: 'Ways of working', items: ['Agile / Scrum', 'Kanban'] },
]
