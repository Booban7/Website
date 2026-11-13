import { AnimatePresence, motion, useAnimate } from 'framer-motion'
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { Card } from '@/components/common/Card'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import type { CardDefinition } from '@/types/card.types'
import { BoardDecor } from './BoardDecor'
import styles from './Board.module.scss'

interface BoardProps {
  card: CardDefinition
  /** Skip the fly-in animation (e.g. on first page load) */
  skipLanding: boolean
  children: ReactNode
}

/**
 * The tavern table. A played card flies in (shared layoutId with the hand),
 * slams onto the table, then expands into its section panel.
 */
export function Board({ card, skipLanding, children }: BoardProps) {
  const [scope, animate] = useAnimate<HTMLDivElement>()

  const slam = useCallback(() => {
    if (!scope.current) return
    void animate(scope.current, { x: [0, -6, 5, -3, 2, 0], y: [0, 3, -2, 1, 0] }, { duration: 0.35 })
  }, [animate, scope])

  return (
    <div className={styles.board}>
      <div ref={scope} className={styles.table}>
        <BoardDecor />
        <div className={styles.scroll} id="main">
          <PlayArea key={card.id} card={card} skipLanding={skipLanding} onSlam={slam}>
            {children}
          </PlayArea>
        </div>
      </div>
    </div>
  )
}

interface PlayAreaProps {
  card: CardDefinition
  skipLanding: boolean
  onSlam: () => void
  children: ReactNode
}

function PlayArea({ card, skipLanding, onSlam, children }: PlayAreaProps) {
  const reduced = usePrefersReducedMotion()
  const [phase, setPhase] = useState<'landing' | 'open'>(skipLanding || reduced ? 'open' : 'landing')
  const landed = useRef(false)

  const land = useCallback(() => {
    if (landed.current) return
    landed.current = true
    onSlam()
    window.setTimeout(() => setPhase('open'), 220)
  }, [onSlam])

  // Safety net in case the layout animation callback never fires
  useEffect(() => {
    if (phase !== 'landing') return
    const id = window.setTimeout(land, 1100)
    return () => window.clearTimeout(id)
  }, [phase, land])

  return (
    <AnimatePresence mode="wait">
      {phase === 'landing' ? (
        <motion.div
          key="landing"
          className={styles.landing}
          exit={{ scale: 1.35, opacity: 0, transition: { duration: 0.18 } }}
        >
          <motion.div
            layoutId={`card-${card.id}`}
            className={styles.landingCard}
            transition={{ type: 'spring', stiffness: 170, damping: 20 }}
            onLayoutAnimationComplete={land}
          >
            <Card card={card} />
          </motion.div>
          <span className={styles.dust} aria-hidden="true" />
        </motion.div>
      ) : (
        <motion.div
          key="panel"
          className={styles.panelWrap}
          initial={skipLanding || reduced ? { opacity: 0 } : { opacity: 0, scale: 0.55, rotateX: 25 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ type: 'spring', stiffness: 220, damping: 24 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
