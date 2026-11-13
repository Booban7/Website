import type { TimelineItem } from '@/types/experience.types'
import styles from './TimelineEntry.module.scss'

export function TimelineEntry({ item }: { item: TimelineItem }) {
  return (
    <li className={styles.entry}>
      <div className={styles.head}>
        <h4 className={styles.title}>{item.title}</h4>
        <span className={styles.date}>
          {item.start} – {item.end}
        </span>
      </div>
      <p className={styles.place}>{item.place}</p>
      <p className={styles.desc}>{item.description}</p>
    </li>
  )
}
