import { useEffect, useRef } from 'react'
import styles from './VictoryScreen.module.scss'

interface VictoryScreenProps {
  onClose: () => void
  durationMs?: number
}

export function VictoryScreen({ onClose, durationMs = 4500 }: VictoryScreenProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.focus()
    const timer = window.setTimeout(onClose, durationMs)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, durationMs])

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div ref={ref} className={styles.window} role="status" aria-live="polite" tabIndex={-1}>
        <p className={styles.title}>Fight Won!</p>
        <dl className={styles.rewards}>
          <div>
            <dt>Gained</dt>
            <dd>1 Contact</dd>
          </div>
          <div>
            <dt>EXP</dt>
            <dd>+100</dd>
          </div>
          <div>
            <dt>Gil</dt>
            <dd>+∞</dd>
          </div>
        </dl>
        <p className={styles.note}>Your mail client is opening… I'll get back to you soon!</p>
      </div>
    </div>
  )
}
