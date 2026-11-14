import { LofotenLandscape } from '@/components/common/LofotenLandscape'
import { profile } from '@/config/profile'
import styles from './HeroSection.module.scss'

export function HeroSection() {
  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.content}>
        <img src={profile.portrait} alt={`Portrait of ${profile.name}`} className={styles.portrait} width={112} height={112} />
        <div>
          <h1 id="hero-title" className={styles.name}>
            {profile.name}
          </h1>
          <p className={styles.role}>{profile.role}</p>
          <p className={styles.intro}>{profile.intro}</p>
          <p className={styles.skills}>
            <span className="visually-hidden">Skills: </span>
            {profile.skills.join(' · ')}
          </p>
        </div>
      </div>
      <LofotenLandscape className={styles.landscape} />
    </section>
  )
}
