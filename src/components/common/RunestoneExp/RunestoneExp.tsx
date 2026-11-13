import { calculateExp, ordinal } from '@/utils/expCalculator'
import styles from './RunestoneExp.module.scss'

const RUNES = ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ']

/** Monthly EXP shown as runestones that light up day by day. */
export function RunestoneExp({ careerStartDate }: { careerStartDate: string }) {
  const exp = calculateExp(careerStartDate)
  const percent = Math.round(exp.progress * 100)
  const stoneFill = exp.progress * RUNES.length

  return (
    <div className={styles.exp}>
      <div className={styles.row}>
        <span className={styles.level}>Level {exp.level}</span>
        <span className={styles.year}>{ordinal(exp.year)} year of the journey</span>
      </div>
      <div
        className={styles.stones}
        role="progressbar"
        aria-label={`Level ${exp.level} experience`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        aria-valuetext={`${percent}% to level ${exp.level + 1}`}
      >
        {RUNES.map((rune, i) => {
          const fill = Math.max(0, Math.min(1, stoneFill - i))
          return (
            <span
              key={rune}
              className={`${styles.stone} ${fill >= 1 ? styles.lit : ''}`}
              style={{ ['--fill' as string]: fill, ['--delay' as string]: `${i * 90}ms` }}
              aria-hidden="true"
            >
              {rune}
            </span>
          )
        })}
      </div>
      <p className={styles.meta}>
        {exp.justLeveledUp ? 'Level up! A new moon begins.' : `Next level in ${exp.daysToNext} days`}
      </p>
    </div>
  )
}
