import { profile } from '@/config/profile'
import styles from './Footer.module.scss'

const YEAR = new Date().getFullYear()

/**
 * End of the page: a short farewell floating over the sky, then an empty
 * stretch so the midnight sun / aurora scene can be seen unobstructed.
 */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.farewell} data-reveal>
        <p className={styles.message}>{profile.farewell}</p>
        {profile.signature && <p className={styles.signature}>— {profile.signature}</p>}
      </div>
      <p className={styles.copy}>
        © {YEAR} {profile.name}
      </p>
    </footer>
  )
}
