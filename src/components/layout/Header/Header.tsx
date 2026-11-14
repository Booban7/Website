import { ThemeToggle } from '@/components/common/ThemeToggle'
import { profile } from '@/config/profile'
import { useScrolled } from '@/hooks/useScrolled'
import styles from './Header.module.scss'

const LINKS = [
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  const scrolled = useScrolled()

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.name}>
          {profile.name}
        </a>
        <div className={styles.end}>
          <nav aria-label="Main">
            <ul className={styles.links}>
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
