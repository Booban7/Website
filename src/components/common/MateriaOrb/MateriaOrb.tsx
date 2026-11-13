import type { MateriaColor } from '@/types/profile.types'
import styles from './MateriaOrb.module.scss'

interface MateriaOrbProps {
  name: string
  color: MateriaColor
  size?: 'sm' | 'md'
}

export function MateriaOrb({ name, color, size = 'md' }: MateriaOrbProps) {
  return (
    <span className={`${styles.materia} ${styles[size]}`}>
      <span className={`${styles.orb} ${styles[color]}`} aria-hidden="true" />
      <span className={styles.label}>{name}</span>
    </span>
  )
}
