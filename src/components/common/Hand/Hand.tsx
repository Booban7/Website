import { AnimatePresence, motion } from 'framer-motion'
import { Card } from '@/components/common/Card'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useSound } from '@/hooks/useSound'
import type { CardDefinition, CardId } from '@/types/card.types'
import styles from './Hand.module.scss'

interface HandProps {
  cards: CardDefinition[]
  onPlay: (id: CardId) => void
}

/** The player's hand: a fan of cards at the bottom of the screen. */
export function Hand({ cards, onPlay }: HandProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const { play } = useSound()
  const mid = (cards.length - 1) / 2

  return (
    <nav className={styles.hand} aria-label="Sections – play a card">
      <ul className={styles.list}>
        <AnimatePresence initial={false} mode="popLayout">
          {cards.map((card, i) => {
            const offset = i - mid
            const rest = isDesktop
              ? { rotate: offset * 7, y: Math.abs(offset) ** 2 * 8, scale: 1 }
              : { rotate: 0, y: 0, scale: 1 }
            const lift = isDesktop ? { rotate: 0, y: -70, scale: 1.12 } : { rotate: 0, y: -12, scale: 1.04 }

            return (
              <motion.li
                key={card.id}
                className={styles.slot}
                layout
                initial={{ y: 200, opacity: 0 }}
                animate={{ ...rest, opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0 } }}
                whileHover={{ ...lift, zIndex: 10 }}
                whileFocus={{ ...lift, zIndex: 10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              >
                <motion.button
                  type="button"
                  className={styles.cardButton}
                  layoutId={`card-${card.id}`}
                  onClick={() => {
                    play('play')
                    onPlay(card.id)
                  }}
                  onMouseEnter={() => play('hover')}
                  onFocus={() => play('hover')}
                  aria-label={`Play ${card.title}: ${card.description}`}
                >
                  <Card card={card} />
                </motion.button>
              </motion.li>
            )
          })}
        </AnimatePresence>
      </ul>
    </nav>
  )
}
