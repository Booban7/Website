import { useEffect, useState } from 'react'
import { useExpLevel } from '@/hooks/useExpLevel'
import { ordinal } from '@/utils/expCalculator'
import styles from './ExpBar.module.scss'

interface ExpBarProps {
  careerStartDate: string
}

export function ExpBar({ careerStartDate }: ExpBarProps) {
  const exp = useExpLevel(careerStartDate)
  const [fill, setFill] = useState(0)

  // Animate from empty to the current value on mount
  useEffect(() => {
    const id = requestAnimationFrame(() => setFill(exp.progress))
    return () => cancelAnimationFrame(id)
  }, [exp.progress])

  const percent = Math.round(exp.progress * 100)

  return (
    <div className={styles.exp}>
      <div className={styles.row}>
        <span className={styles.lv}>
          LV <strong>{exp.level}</strong>
        </span>
        <span className={styles.year}>{ordinal(exp.year)} year</span>
      </div>

      <div
        className={styles.track}
        role="progressbar"
        aria-label={`Level ${exp.level} experience`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        aria-valuetext={`${percent}% to level ${exp.level + 1}`}
      >
        <div className={styles.fill} style={{ transform: `scaleX(${fill})` }} />
      </div>

      <div className={styles.row}>
        <span className={styles.meta}>EXP {exp.daysIntoLevel}/{exp.daysInLevel}</span>
        <span className={styles.meta}>Next LV in {exp.daysToNext}d</span>
      </div>

      {exp.justLeveledUp && <p className={styles.levelUp}>LEVEL UP!</p>}
    </div>
  )
}
