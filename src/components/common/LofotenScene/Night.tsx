import styles from './Night.module.scss'

/**
 * Northern lights: soft curtain bands that drift and pulse continuously.
 * Each band's strength comes from a CSS variable driven by scroll
 * (--aurora-green, --aurora-yg, --aurora-violet, --aurora-red).
 * Only `transform` and `opacity` animate, so the browser can composite them cheaply.
 */
export function Aurora() {
  return (
    <div className={styles.aurora} aria-hidden="true">
      <div className={`${styles.bandWrap} ${styles.wrapRedHigh}`}>
        <div className={`${styles.band} ${styles.redHigh}`} />
      </div>
      <div className={`${styles.bandWrap} ${styles.wrapRed}`}>
        <div className={`${styles.band} ${styles.red}`} />
      </div>
      <div className={`${styles.bandWrap} ${styles.wrapViolet}`}>
        <div className={`${styles.band} ${styles.violet}`} />
      </div>
      <div className={`${styles.bandWrap} ${styles.wrapGreen}`}>
        <div className={`${styles.band} ${styles.green}`} />
      </div>
      <div className={`${styles.bandWrap} ${styles.wrapYg}`}>
        <div className={`${styles.band} ${styles.yg}`} />
      </div>
      <div className={`${styles.bandWrap} ${styles.wrapGreen2}`}>
        <div className={`${styles.band} ${styles.green2}`} />
      </div>
    </div>
  )
}

/** Soft aurora glow mirrored on the sea surface. */
export function AuroraReflection() {
  return (
    <div className={styles.reflection} aria-hidden="true">
      <span className={`${styles.glow} ${styles.glowGreen}`} />
      <span className={`${styles.glow} ${styles.glowViolet}`} />
      <span className={`${styles.glow} ${styles.glowRed}`} />
    </div>
  )
}

// Deterministic pseudo-random so stars stay in place between visits
const rand = (seed: number) => {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453
  return x - Math.floor(x)
}

const STARS = Array.from({ length: 90 }, (_, i) => ({
  x: rand(i) * 1000,
  y: rand(i + 500) * 520,
  r: 0.5 + rand(i + 1000) * 1.1,
  twinkle: i % 6 === 0,
  delay: rand(i + 1500) * 6,
}))

/** Stars and a thin crescent moon. */
export function NightSky() {
  return (
    <>
      <svg className={styles.stars} viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {STARS.map((s, i) => (
          <circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={s.r}
            className={s.twinkle ? styles.twinkle : undefined}
            style={s.twinkle ? { animationDelay: `${s.delay}s` } : undefined}
          />
        ))}
      </svg>
      <div className={styles.moon} aria-hidden="true">
        <svg viewBox="0 0 40 40">
          <defs>
            <mask id="moon-crescent">
              <rect width="40" height="40" fill="white" />
              <circle cx="26" cy="15" r="14" fill="black" />
            </mask>
          </defs>
          <circle cx="20" cy="20" r="14" mask="url(#moon-crescent)" />
        </svg>
      </div>
    </>
  )
}
