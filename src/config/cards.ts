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
    symbol: 'vegvisir',
  },
  {
    id: 'projects',
    title: 'Treasure',
    rune: 'ᚷ',
    runeName: 'Gebō – gift',
    cost: projects.length,
    description: 'Grown from the roots: things I have built.',
    symbol: 'yggdrasil',
  },
  {
    id: 'contact',
    title: 'Send Message',
    rune: 'ᚨ',
    runeName: 'Ansuz – message',
    cost: 0,
    description: 'Summon a raven to carry your words.',
    symbol: 'ravens',
  },
  {
    id: 'hero',
    title: 'Hero',
    rune: 'ᛗ',
    runeName: 'Mannaz – the self',
    cost: 1,
    description: 'Return to the hero of this tale.',
    symbol: 'helmOfAwe',
  },
]
