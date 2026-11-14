export type CardId = 'hero' | 'experience' | 'projects' | 'contact'

export type SymbolName = 'helmOfAwe' | 'vegvisir' | 'yggdrasil' | 'ravens' | 'triquetra' | 'shieldAxes'

export interface CardDefinition {
  id: CardId
  title: string
  /** Elder Futhark rune emblem */
  rune: string
  runeName: string
  cost: number
  description: string
  symbol: SymbolName
}
