import { useEffect, useRef, type ReactNode } from 'react'
import styles from './Panel.module.scss'

interface PanelProps {
  id: string
  title: string
  rune: string
  onClose?: () => void
  children: ReactNode
}

/** Parchment section panel that appears when a card is played. */
export function Panel({ id, title, rune, onClose, children }: PanelProps) {
  const headingRef = useRef<HTMLHeadingElement>(null)

  // Move focus to the new section for keyboard & screen reader users
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true })
  }, [])

  return (
    <section className={styles.panel} aria-labelledby={`${id}-title`}>
      <header className={styles.header}>
        <span className={styles.rune} aria-hidden="true">
          {rune}
        </span>
        <h2 id={`${id}-title`} ref={headingRef} tabIndex={-1} className={styles.title}>
          {title}
        </h2>
        {onClose && (
          <button type="button" className={styles.close} onClick={onClose} aria-label="Return card to hand">
            ✕
          </button>
        )}
      </header>
      <div className={styles.band} aria-hidden="true" />
      <div className={styles.body}>{children}</div>
    </section>
  )
}
