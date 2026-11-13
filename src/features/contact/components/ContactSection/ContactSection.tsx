import { useState } from 'react'
import { HandCursor } from '@/components/common/HandCursor'
import { MenuWindow } from '@/components/common/MenuWindow'
import { contactLinks } from '@/config/contact'
import { useSound } from '@/hooks/useSound'
import { VictoryScreen } from '../VictoryScreen/VictoryScreen'
import styles from './ContactSection.module.scss'

export function ContactSection() {
  const { play } = useSound()
  const [hovered, setHovered] = useState<string | null>(null)
  const [victory, setVictory] = useState(false)

  const handleClick = (isEmail?: boolean) => {
    if (isEmail) {
      // Fanfare always plays on the email click, regardless of SFX toggle
      play('victory', true)
      setVictory(true)
    } else {
      play('confirm')
    }
  }

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <h2 id="contact-title" className={styles.title}>
        Save Point
      </h2>
      <MenuWindow className={styles.window}>
        <p className={styles.lead}>Want to join the party? Choose an option to send me a message.</p>
        <ul className={styles.list} onMouseLeave={() => setHovered(null)}>
          {contactLinks.map((link) => {
            const external = link.href.startsWith('http')
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={styles.link}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  onMouseEnter={() => {
                    setHovered(link.label)
                    play('cursor')
                  }}
                  onFocus={() => setHovered(link.label)}
                  onBlur={() => setHovered(null)}
                  onClick={() => handleClick(link.isEmail)}
                >
                  <span className={styles.cursorSlot}>{hovered === link.label && <HandCursor />}</span>
                  <span className={styles.label}>{link.label}</span>
                  <span className={styles.value}>{link.value}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </MenuWindow>

      {victory && <VictoryScreen onClose={() => setVictory(false)} />}
    </section>
  )
}
