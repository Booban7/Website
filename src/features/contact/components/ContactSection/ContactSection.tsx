import { Section } from '@/components/common/Section'
import { contactLinks } from '@/config/contact'
import styles from './ContactSection.module.scss'

export function ContactSection() {
  return (
    <Section id="contact" label="Contact" title="Say hello">
      <p className={styles.lead}>
        Open to new projects, collaborations or just a good conversation. The easiest way to reach me is by email.
      </p>
      <ul className={styles.list}>
        {contactLinks.map((link) => {
          const external = link.href.startsWith('http')
          return (
            <li key={link.label} className={styles.item}>
              <span className={styles.label}>{link.label}</span>
              <a href={link.href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
                {link.value}
              </a>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
