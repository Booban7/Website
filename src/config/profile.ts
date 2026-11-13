import portrait from '@/assets/images/portrait.svg'
import type { Profile, Skill } from '@/types/profile.types'

// TODO: replace placeholder content with your own
export const profile: Profile = {
  name: 'Robin Davoust',
  role: 'Frontend Developer',
  location: 'Midgar, Sector 7',
  careerStartDate: '2021-07-01',
  intro:
    'A frontend developer who crafts fast, accessible and playful interfaces. ' +
    'I turn designs into pixel-perfect experiences with React, TypeScript and a love for detail.',
  portrait,
}

export const skills: Skill[] = [
  { name: 'React', materia: 'green' },
  { name: 'TypeScript', materia: 'green' },
  { name: 'SCSS', materia: 'yellow' },
  { name: 'Accessibility', materia: 'blue' },
  { name: 'Testing', materia: 'purple' },
  { name: 'Design Systems', materia: 'red' },
]
