import { LofotenLandscape } from '@/components/common/LofotenLandscape'
import { profile } from '@/config/profile'
import styles from './Footer.module.scss'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.footer}>
      <LofotenLandscape variant="outline" />
      <p className={styles.copy}>
        © {YEAR} {profile.name}
      </p>
    </footer>
  )
}
