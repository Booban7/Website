import { NorseSymbol } from '@/components/common/NorseSymbol'
import styles from './Board.module.scss'

/** Vegvísir watermark, interlace bands, bold pines and triquetras around the table. */
export function BoardDecor() {
  return (
    <div className={styles.decor} aria-hidden="true">
      <NorseSymbol name="vegvisir" className={styles.compass} />

      <div className={`${styles.band} ${styles.bandTop}`} />
      <div className={`${styles.band} ${styles.bandBottom}`} />

      <svg className={`${styles.corner} ${styles.cornerLeft}`} viewBox="0 0 160 200">
        <Pines />
      </svg>
      <svg className={`${styles.corner} ${styles.cornerRight}`} viewBox="0 0 160 200">
        <Pines />
      </svg>

      <NorseSymbol name="triquetra" className={`${styles.knot} ${styles.knotLeft}`} />
      <NorseSymbol name="triquetra" className={`${styles.knot} ${styles.knotRight}`} />
    </div>
  )
}

function Pines() {
  const pine = 'M0 -60 L16 -32 L8 -32 L22 -12 L10 -12 L26 8 L-26 8 L-10 -12 L-22 -12 L-8 -32 L-16 -32 Z'
  return (
    <g stroke="#1d1d1b" strokeWidth="2.5" strokeLinejoin="round">
      <path transform="translate(40 158) scale(1.5)" d={pine} fill="none" />
      <path transform="translate(40 158) scale(1.5)" d="M-2 8 h4 v12 h-4z" fill="#1d1d1b" />
      <path transform="translate(98 178) scale(1)" d={pine} fill="none" />
      <path transform="translate(98 178) scale(1)" d="M-2 8 h4 v12 h-4z" fill="#1d1d1b" />
    </g>
  )
}
