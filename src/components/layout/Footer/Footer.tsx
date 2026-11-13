import { profile } from '@/config/profile'
import styles from './Footer.module.scss'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © {YEAR} {profile.name} · Built with React, TypeScript &amp; SCSS
      </p>
      <p className={styles.small}>A fan-inspired tribute. Not affiliated with Square Enix.</p>
    </footer>
  )
}
