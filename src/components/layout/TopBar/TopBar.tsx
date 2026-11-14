import { PreferenceToggles } from '@/components/common/PreferenceToggles'
import { NorseSymbol } from '@/components/common/NorseSymbol'
import { profile } from '@/config/profile'
import styles from './TopBar.module.scss'

export function TopBar() {
  return (
    <header className={styles.bar}>
      <div className={styles.brand}>
        <span className={styles.emblem}>
          <NorseSymbol name="helmOfAwe" />
        </span>
        <div>
          <p className={styles.name}>{profile.name}</p>
          <p className={styles.role}>{profile.role}</p>
        </div>
      </div>
      <PreferenceToggles />
    </header>
  )
}
