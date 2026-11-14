import { Panel } from '@/components/common/Panel'
import { studies, work } from '@/config/experience'
import type { TimelineItem } from '@/types/experience.types'
import styles from './ExperiencePanel.module.scss'

export function ExperiencePanel({ onClose }: { onClose: () => void }) {
  return (
    <Panel id="experience" title="Quest Log" symbol="vegvisir" onClose={onClose}>
      <div className={styles.grid}>
        <Timeline title="Battles fought" subtitle="Work experience" items={work} />
        <Timeline title="Wisdom gathered" subtitle="Studies" items={studies} />
      </div>
    </Panel>
  )
}

function Timeline({ title, subtitle, items }: { title: string; subtitle: string; items: TimelineItem[] }) {
  return (
    <div>
      <h3 className={styles.colTitle}>
        {title} <span className={styles.sub}>{subtitle}</span>
      </h3>
      <ol className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.entry}>
            <span className={styles.marker} aria-hidden="true" />
            <div className={styles.head}>
              <h4 className={styles.title}>{item.title}</h4>
              <span className={styles.date}>
                {item.start} – {item.end}
              </span>
            </div>
            <p className={styles.place}>{item.place}</p>
            <p className={styles.desc}>{item.description}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}
