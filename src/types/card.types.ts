export type CardId = 'hero' | 'experience' | 'projects' | 'contact'

export type CardArt = 'fjord' | 'path' | 'chest' | 'raven'

export interface CardDefinition {
  id: CardId
  title: string
  /** Elder Futhark rune emblem */
  rune: string
  runeName: string
  cost: number
  description: string
  art: CardArt
}
