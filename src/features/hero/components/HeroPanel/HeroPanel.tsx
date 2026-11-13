import { HeroPortrait } from '@/components/common/HeroPortrait'
import { Panel } from '@/components/common/Panel'
import { RunestoneExp } from '@/components/common/RunestoneExp'
import { TypewriterText } from '@/components/common/TypewriterText'
import { Gem } from '@/components/common/Gem'
import { profile, skills } from '@/config/profile'
import styles from './HeroPanel.module.scss'

export function HeroPanel() {
  return (
    <Panel id="hero" title={profile.name} rune="ᛟ">
      <div className={styles.layout}>
        <HeroPortrait
          src={profile.portrait}
          name={profile.name}
          careerStartDate={profile.careerStartDate}
          skills={skills}
        />

        <div className={styles.info}>
          <p className={styles.role}>
            {profile.role} <span className={styles.dot}>·</span> {profile.location}
          </p>

          <div className={styles.bubble}>
            <TypewriterText text={profile.intro} />
          </div>

          <RunestoneExp careerStartDate={profile.careerStartDate} />

          <ul className={styles.skills} aria-label="Skills">
            {skills.map((s) => (
              <li key={s.name}>
                <Gem name={s.name} color={s.gem} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Panel>
  )
}
