import { profile } from '@/config/profile'
import styles from './Footer.module.scss'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.footer}>
      © {YEAR} {profile.name} · Built with React, TypeScript &amp; SCSS
    </footer>
  )
}
