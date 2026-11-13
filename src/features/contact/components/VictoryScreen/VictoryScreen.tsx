import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import styles from './VictoryScreen.module.scss'

interface VictoryScreenProps {
  onClose: () => void
  durationMs?: number
}

const LEAVES = Array.from({ length: 24 }, (_, i) => ({
  left: (i * 37) % 100,
  delay: (i % 8) * 0.12,
  rotate: (i * 47) % 360,
}))

export function VictoryScreen({ onClose, durationMs = 4500 }: VictoryScreenProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    ref.current?.focus()
    const timer = window.setTimeout(onClose, durationMs)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        onClose()
      }
    }
    window.addEventListener('keydown', onKey, true)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('keydown', onKey, true)
    }
  }, [onClose, durationMs])

  return createPortal(
    <motion.div
      className={styles.overlay}
      onClick={onClose}
      role="presentation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {!reduced &&
        LEAVES.map((leaf, i) => (
          <span
            key={i}
            className={styles.goldLeaf}
            style={{ left: `${leaf.left}%`, animationDelay: `${leaf.delay}s`, rotate: `${leaf.rotate}deg` }}
            aria-hidden="true"
          />
        ))}

      <motion.div
        ref={ref}
        className={styles.plaque}
        role="status"
        aria-live="polite"
        tabIndex={-1}
        initial={reduced ? false : { scale: 0.3, rotate: -8, y: -80 }}
        animate={{ scale: 1, rotate: 0, y: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 14 }}
      >
        <span className={styles.runes} aria-hidden="true">
          ᛏ ᛊ ᛏ
        </span>
        <p className={styles.title}>Victory!</p>
        <p className={styles.sub}>A raven takes flight with your message.</p>
        <p className={styles.note}>Your mail client is opening… I'll get back to you soon.</p>
      </motion.div>
    </motion.div>,
    document.body,
  )
}
