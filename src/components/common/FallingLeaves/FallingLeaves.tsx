import { useMemo } from 'react'
import { usePreferences } from '@/context/preferencesContextValue'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import styles from './FallingLeaves.module.scss'

const LEAF_COLORS = ['#1d1d1b', '#b8933f']

// Deterministic pseudo-random so leaves are stable between renders
const rand = (seed: number) => {
  const x = Math.sin(seed * 9301 + 49297) * 233280
  return x - Math.floor(x)
}

export function FallingLeaves({ count = 14 }: { count?: number }) {
  const { ambienceEnabled } = usePreferences()
  const reduced = usePrefersReducedMotion()

  const leaves = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: rand(i) * 100,
        delay: -rand(i + 100) * 20,
        duration: 14 + rand(i + 200) * 12,
        size: 10 + rand(i + 300) * 10,
        sway: 20 + rand(i + 400) * 50,
        color: LEAF_COLORS[i % LEAF_COLORS.length],
        mote: i % 3 === 0,
      })),
    [count],
  )

  if (!ambienceEnabled || reduced) return null

  return (
    <div className={styles.layer} aria-hidden="true">
      {leaves.map((leaf, i) => (
        <span
          key={i}
          className={leaf.mote ? styles.mote : styles.leaf}
          style={{
            left: `${leaf.left}%`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            ['--size' as string]: `${leaf.mote ? leaf.size / 3 : leaf.size}px`,
            ['--sway' as string]: `${leaf.sway}px`,
            ['--color' as string]: leaf.color,
          }}
        />
      ))}
    </div>
  )
}
