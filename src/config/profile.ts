import portrait from '@/assets/images/portrait.svg'
import type { Profile, Skill } from '@/types/profile.types'

// TODO: replace placeholder content with your own
export const profile: Profile = {
  name: 'Robin Davoust',
  role: 'Frontend Developer',
  location: 'Stockholm, Sweden',
  careerStartDate: '2021-07-01',
  intro:
    'Hail, traveler! I am a frontend developer who crafts fast, accessible and playful interfaces. ' +
    'Draw a card from your hand to explore my journey.',
  portrait,
}

export const skills: Skill[] = [
  { name: 'React', gem: 'fjord' },
  { name: 'TypeScript', gem: 'fjord' },
  { name: 'SCSS', gem: 'berry' },
  { name: 'Accessibility', gem: 'moss' },
  { name: 'Testing', gem: 'amber' },
  { name: 'Design Systems', gem: 'frost' },
]
