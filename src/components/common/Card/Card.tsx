import { Medallion } from '@/components/common/NorseSymbol'
import type { CardDefinition } from '@/types/card.types'
import styles from './Card.module.scss'

/** Pure visual card face. Interaction/animation is handled by the parent. */
export function Card({ card }: { card: CardDefinition }) {
  return (
    <div className={styles.card}>
      <span className={styles.cost} aria-label={`Cost ${card.cost}`}>
        <svg viewBox="0 0 36 42" aria-hidden="true">
          <path d="M2 2 H34 V22 C34 33 18 40 18 40 C18 40 2 33 2 22Z" />
        </svg>
        <span>{card.cost}</span>
      </span>

      <Medallion symbol={card.symbol} className={styles.medallion} />

      <div className={styles.banner}>
        <span className={styles.rune} title={card.runeName} aria-hidden="true">
          {card.rune}
        </span>
        <span>{card.title}</span>
      </div>
      <p className={styles.desc}>{card.description}</p>
    </div>
  )
}
