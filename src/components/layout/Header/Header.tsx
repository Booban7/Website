import { useState } from 'react'
import { HandCursor } from '@/components/common/HandCursor'
import { SoundToggle } from '@/components/common/SoundToggle'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useSound } from '@/hooks/useSound'
import { SECTIONS } from '@/utils/constants'
import styles from './Header.module.scss'

const sectionIds = SECTIONS.map((s) => s.id)

export function Header() {
  const active = useActiveSection(sectionIds)
  const { play } = useSound()
  const [hovered, setHovered] = useState<string | null>(null)
  const [open, setOpen] = useState(false)

  const pointed = hovered ?? active

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main">
        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => {
            setOpen((o) => !o)
            play('confirm')
          }}
        >
          MENU
        </button>

        <ul id="main-menu" className={`${styles.list} ${open ? styles.open : ''}`} onMouseLeave={() => setHovered(null)}>
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`${styles.link} ${active === id ? styles.active : ''}`}
                aria-current={active === id ? 'true' : undefined}
                onMouseEnter={() => {
                  setHovered(id)
                  play('cursor')
                }}
                onFocus={() => {
                  setHovered(id)
                  play('cursor')
                }}
                onBlur={() => setHovered(null)}
                onClick={() => {
                  play('confirm')
                  setOpen(false)
                }}
              >
                <span className={styles.cursorSlot}>{pointed === id && <HandCursor />}</span>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <SoundToggle />
      </nav>
    </header>
  )
}
