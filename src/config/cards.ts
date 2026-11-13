import type { CardDefinition } from '@/types/card.types'
import { calculateExp } from '@/utils/expCalculator'
import { profile } from './profile'
import { projects } from './projects'

const yearsOfExperience = calculateExp(profile.careerStartDate).year - 1

export const cards: CardDefinition[] = [
  {
    id: 'experience',
    title: 'Quest Log',
    rune: 'ᚱ',
    runeName: 'Raidō – journey',
    cost: yearsOfExperience,
    description: 'Reveal the roads travelled: work and studies.',
    art: 'path',
  },
  {
    id: 'projects',
    title: 'Treasure',
    rune: 'ᚷ',
    runeName: 'Gebō – gift',
    cost: projects.length,
    description: 'Open the chest of crafted projects.',
    art: 'chest',
  },
  {
    id: 'contact',
    title: 'Send Message',
    rune: 'ᚨ',
    runeName: 'Ansuz – message',
    cost: 0,
    description: 'Summon a raven to carry your words.',
    art: 'raven',
  },
  {
    id: 'hero',
    title: 'Hero',
    rune: 'ᛟ',
    runeName: 'Ōthala – heritage',
    cost: 1,
    description: 'Return to the hero of this tale.',
    art: 'fjord',
  },
]
