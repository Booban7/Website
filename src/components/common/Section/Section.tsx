import type { ReactNode } from 'react'
import styles from './Section.module.scss'

interface SectionProps {
  id: string
  label: string
  title: string
  children: ReactNode
}

export function Section({ id, label, title, children }: SectionProps) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <div className={styles.inner}>
        <p className={styles.label}>{label}</p>
        <h2 id={`${id}-title`} className={styles.title}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}
