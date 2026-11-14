import portrait from '@/assets/images/robin.jpg'
import type { Profile } from '@/types/profile.types'

export const profile: Profile = {
  name: 'Robin Davoust',
  role: 'Frontend Developer',
  location: 'Gothenburg, Sweden',
  careerStartDate: '2021-07-01',
  intro:
    "I'm a frontend developer based in Gothenburg, building for the web since 2021. I'm dedicated to my craft and care about the details. When I'm not coding, you'll find me hiking with my dog Zelda.",
  portrait,
  farewell: 'Thank you for visiting — I look forward to hearing from you.',
  signature: 'Robin',
  skills: ['React', 'TypeScript', 'SCSS', 'Accessibility', 'Testing', 'Design Systems'],
}
