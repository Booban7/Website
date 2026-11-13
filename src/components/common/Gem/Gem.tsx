import type { GemColor } from '@/types/profile.types'
import styles from './Gem.module.scss'

interface GemProps {
  name: string
  color: GemColor
  /** Show the name next to the gem, otherwise only as tooltip */
  showLabel?: boolean
}

export function Gem({ name, color, showLabel = true }: GemProps) {
  return (
    <span className={styles.wrap} title={showLabel ? undefined : name}>
      <svg className={`${styles.gem} ${styles[color]}`} viewBox="0 0 20 20" aria-hidden="true">
        <path className={styles.base} d="M10 1 L18 7 L15 18 H5 L2 7Z" />
        <path className={styles.facet} d="M10 1 L13 7 H7Z" />
        <path className={styles.shine} d="M7 7 H13 L10 18Z" />
      </svg>
      <span className={showLabel ? styles.label : 'visually-hidden'}>{name}</span>
    </span>
  )
}
