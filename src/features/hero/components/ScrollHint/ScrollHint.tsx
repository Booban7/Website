import { useScrolled } from '@/hooks/useScrolled'
import styles from './ScrollHint.module.scss'

/** Small "Scroll" cue at the bottom of the hero; fades out once the page is scrolled. */
export function ScrollHint() {
  const scrolled = useScrolled()

  return (
    <a
      href="#experience"
      className={`${styles.hint} ${scrolled ? styles.hidden : ''}`}
      aria-label="Scroll to experience"
      aria-hidden={scrolled || undefined}
      tabIndex={scrolled ? -1 : undefined}
    >
      <span className={styles.label} aria-hidden="true">
        Scroll
      </span>
      <span className={styles.line} aria-hidden="true">
        <span className={styles.dot} />
      </span>
    </a>
  )
}
