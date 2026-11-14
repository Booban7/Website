import { useState } from 'react'
import { Panel } from '@/components/common/Panel'
import { contactLinks } from '@/config/contact'
import { useSound } from '@/hooks/useSound'
import { VictoryScreen } from '../VictoryScreen/VictoryScreen'
import styles from './ContactPanel.module.scss'

const ICONS: Record<string, string> = { Email: 'ᚨ', GitHub: 'ᚷ', LinkedIn: 'ᛗ' }

export function ContactPanel({ onClose }: { onClose: () => void }) {
  const { play } = useSound()
  const [victory, setVictory] = useState(false)

  return (
    <Panel id="contact" title="Send Message" symbol="ravens" onClose={onClose}>
      <p className={styles.lead}>
        Want to join the party? Send a raven my way — I read every message.
      </p>
      <ul className={styles.list}>
        {contactLinks.map((link) => {
          const external = link.href.startsWith('http')
          return (
            <li key={link.label}>
              <a
                href={link.href}
                className={`${styles.link} ${link.isEmail ? styles.primary : ''}`}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                onMouseEnter={() => play('hover')}
                onClick={() => {
                  if (link.isEmail) {
                    // Fanfare always plays on the email click, regardless of the sound toggle
                    play('victory', true)
                    setVictory(true)
                  } else {
                    play('click')
                  }
                }}
              >
                <span className={styles.icon} aria-hidden="true">
                  {ICONS[link.label] ?? 'ᛜ'}
                </span>
                <span className={styles.label}>{link.label}</span>
                <span className={styles.value}>{link.value}</span>
              </a>
            </li>
          )
        })}
      </ul>

      {victory && <VictoryScreen onClose={() => setVictory(false)} />}
    </Panel>
  )
}
