import { Gem } from '@/components/common/Gem'
import type { Skill } from '@/types/profile.types'
import { calculateExp } from '@/utils/expCalculator'
import styles from './HeroPortrait.module.scss'

interface HeroPortraitProps {
  src: string
  name: string
  careerStartDate: string
  skills: Skill[]
}

/** Round birch-ring hero frame with level shield and skill gems around it. */
export function HeroPortrait({ src, name, careerStartDate, skills }: HeroPortraitProps) {
  const { level } = calculateExp(careerStartDate)

  return (
    <div className={styles.hero}>
      <div className={styles.ring}>
        <img src={src} alt={`Portrait of ${name}`} className={styles.portrait} />
      </div>

      <ul className={styles.gems} aria-label="Skills">
        {skills.map((skill, i) => {
          // Spread gems along the upper arc of the ring
          const angle = -160 + (i * 140) / Math.max(1, skills.length - 1)
          return (
            <li key={skill.name} className={styles.gemSlot} style={{ ['--angle' as string]: `${angle}deg` }}>
              <Gem name={skill.name} color={skill.gem} showLabel={false} />
            </li>
          )
        })}
      </ul>

      <div className={styles.shield} aria-label={`Level ${level}`}>
        <span className={styles.lvLabel}>LV</span>
        <span className={styles.lv}>{level}</span>
      </div>
    </div>
  )
}
