import type { GemColor } from '@/types/profile.types'
import styles from './Gem.module.scss'

interface GemProps {
  name: string
  color: GemColor
  /** Show the name next to the badge, otherwise only as tooltip */
  showLabel?: boolean
}

// Each colour category gets its own rune
const RUNE: Record<GemColor, string> = {
  fjord: 'ᚲ', // Kenaz – craft, knowledge
  moss: 'ᛒ', // Berkanan – birch, growth
  berry: 'ᚹ', // Wunjō – joy
  amber: 'ᛋ', // Sōwilō – sun, success
  frost: 'ᛁ', // Īsa – ice, structure
}

/** Small round rune badge used for skills & tech. */
export function Gem({ name, color, showLabel = true }: GemProps) {
  return (
    <span className={styles.wrap} title={showLabel ? undefined : name}>
      <span className={`${styles.badge} ${styles[color]}`} aria-hidden="true">
        {RUNE[color]}
      </span>
      <span className={showLabel ? styles.label : 'visually-hidden'}>{name}</span>
    </span>
  )
}
