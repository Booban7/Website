import styles from './Board.module.scss'

/** Vegvísir-inspired compass watermark, pines and ferns around the table. */
export function BoardDecor() {
  return (
    <div className={styles.decor} aria-hidden="true">
      <svg className={styles.compass} viewBox="-50 -50 100 100">
        <circle r="46" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" />
        <circle r="5" fill="none" stroke="currentColor" strokeWidth="1" />
        {Array.from({ length: 8 }, (_, i) => (
          <g key={i} transform={`rotate(${i * 45})`}>
            <line y1="-6" y2="-36" stroke="currentColor" strokeWidth="1.2" />
            {i % 2 === 0 ? (
              <path d="M-5 -30 L0 -36 L5 -30" fill="none" stroke="currentColor" strokeWidth="1.2" />
            ) : (
              <>
                <line x1="-4" x2="4" y1="-26" y2="-26" stroke="currentColor" strokeWidth="1.2" />
                <circle cy="-36" r="2" fill="currentColor" />
              </>
            )}
          </g>
        ))}
      </svg>

      <svg className={`${styles.corner} ${styles.cornerLeft}`} viewBox="0 0 160 200">
        <Pines />
      </svg>
      <svg className={`${styles.corner} ${styles.cornerRight}`} viewBox="0 0 160 200">
        <Pines />
      </svg>

      <div className={styles.runes}>ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ ᚷ ᚹ</div>
    </div>
  )
}

function Pines() {
  const pine = 'M0 -60 L16 -32 L8 -32 L22 -12 L10 -12 L26 8 L-26 8 L-10 -12 L-22 -12 L-8 -32 L-16 -32 Z'
  return (
    <>
      <path transform="translate(40 150) scale(1.6)" d={pine} fill="#2f5d47" opacity="0.18" />
      <path transform="translate(95 175) scale(1.1)" d={pine} fill="#4f7d63" opacity="0.18" />
      {/* Fern */}
      <g transform="translate(20 200)" stroke="#4f7d63" strokeWidth="2" fill="none" opacity="0.3" strokeLinecap="round">
        <path d="M0 0 Q30 -40 80 -50" />
        {[0.2, 0.35, 0.5, 0.65, 0.8].map((t) => {
          const x = 80 * t
          const y = -50 * t - 10 * (1 - t) * t * 4
          return <path key={t} d={`M${x} ${y} l8 -12 M${x} ${y} l12 4`} />
        })}
      </g>
    </>
  )
}
