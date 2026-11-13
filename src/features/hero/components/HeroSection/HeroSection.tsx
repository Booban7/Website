import { ExpBar } from '@/components/common/ExpBar'
import { MateriaOrb } from '@/components/common/MateriaOrb'
import { MenuWindow } from '@/components/common/MenuWindow'
import { TypewriterText } from '@/components/common/TypewriterText'
import { profile, skills } from '@/config/profile'
import styles from './HeroSection.module.scss'

export function HeroSection() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <MenuWindow className={styles.status}>
        <div className={styles.portraitCol}>
          <div className={styles.portraitFrame}>
            <img src={profile.portrait} alt={`Portrait of ${profile.name}`} width={160} height={160} />
          </div>
          <ExpBar careerStartDate={profile.careerStartDate} />
        </div>

        <div className={styles.info}>
          <h1 id="hero-title" className={styles.name}>
            {profile.name}
          </h1>
          <dl className={styles.stats}>
            <div>
              <dt>Class</dt>
              <dd>{profile.role}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
          </dl>

          <h2 className={styles.materiaTitle}>Equipped Materia</h2>
          <ul className={styles.materia}>
            {skills.map((s) => (
              <li key={s.name}>
                <MateriaOrb name={s.name} color={s.materia} />
              </li>
            ))}
          </ul>
        </div>
      </MenuWindow>

      <MenuWindow className={styles.dialog}>
        <TypewriterText text={profile.intro} />
      </MenuWindow>
    </section>
  )
}
