import { Section } from '@/components/common/Section'
import { studies, work } from '@/config/experience'
import type { TimelineItem } from '@/types/experience.types'
import styles from './ExperienceSection.module.scss'

export function ExperienceSection() {
  return (
    <Section id="experience" label="Experience" title="Where I've been">
      <Timeline heading="Work" items={work} />
      <Timeline heading="Studies" items={studies} />
    </Section>
  )
}

function Timeline({ heading, items }: { heading: string; items: TimelineItem[] }) {
  return (
    <div className={styles.group}>
      <h3 className={styles.heading}>{heading}</h3>
      <ol className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <p className={styles.date}>
              {item.start} – {item.end}
            </p>
            <div>
              <h4 className={styles.title}>{item.title}</h4>
              <p className={styles.place}>{item.place}</p>
              {(item.location || item.type) && (
                <p className={styles.meta}>{[item.location, item.type].filter(Boolean).join(' · ')}</p>
              )}
              <p className={styles.desc}>{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
