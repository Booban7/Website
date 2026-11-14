import { useEffect, useRef, type ReactNode } from 'react'
import { Medallion } from '@/components/common/NorseSymbol'
import type { SymbolName } from '@/types/card.types'
import styles from './Panel.module.scss'

interface PanelProps {
  id: string
  title: string
  symbol: SymbolName
  onClose?: () => void
  children: ReactNode
}

/** Bold ink-framed section panel that appears when a card is played. */
export function Panel({ id, title, symbol, onClose, children }: PanelProps) {
  const headingRef = useRef<HTMLHeadingElement>(null)

  // Move focus to the new section for keyboard & screen reader users
  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true })
  }, [])

  return (
    <section className={styles.panel} aria-labelledby={`${id}-title`}>
      <header className={styles.header}>
        <Medallion symbol={symbol} className={styles.medallion} />
        <h2 id={`${id}-title`} ref={headingRef} tabIndex={-1} className={styles.title}>
          {title}
        </h2>
        {onClose && (
          <button type="button" className={styles.close} onClick={onClose} aria-label="Return card to hand">
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5 5 L15 15 M15 5 L5 15" />
            </svg>
          </button>
        )}
      </header>
      <div className={styles.divider} aria-hidden="true" />
      <div className={styles.body}>{children}</div>
    </section>
  )
}
