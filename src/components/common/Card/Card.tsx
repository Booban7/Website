import type { CardDefinition } from '@/types/card.types'
import { CardArt } from './CardArt'
import styles from './Card.module.scss'

interface CardProps {
  card: CardDefinition
}

/** Pure visual card face. Interaction/animation is handled by the parent. */
export function Card({ card }: CardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.cost} aria-label={`Cost ${card.cost}`}>
        {card.cost}
      </span>
      <div className={styles.art}>
        <CardArt art={card.art} />
      </div>
      <span className={styles.rune} title={card.runeName} aria-hidden="true">
        {card.rune}
      </span>
      <div className={styles.banner}>
        <span>{card.title}</span>
      </div>
      <p className={styles.desc}>{card.description}</p>
    </div>
  )
}
