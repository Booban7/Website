import { MenuWindow } from '@/components/common/MenuWindow'
import { studies, work } from '@/config/experience'
import { TimelineEntry } from '../TimelineEntry/TimelineEntry'
import styles from './ExperienceSection.module.scss'

export function ExperienceSection() {
  return (
    <section id="experience" className={styles.section} aria-labelledby="experience-title">
      <h2 id="experience-title" className={styles.title}>
        Quest Log
      </h2>
      <div className={styles.grid}>
        <MenuWindow title="Work Experience">
          <ol className={styles.list}>
            {work.map((item) => (
              <TimelineEntry key={item.id} item={item} />
            ))}
          </ol>
        </MenuWindow>
        <MenuWindow title="Training & Studies">
          <ol className={styles.list}>
            {studies.map((item) => (
              <TimelineEntry key={item.id} item={item} />
            ))}
          </ol>
        </MenuWindow>
      </div>
    </section>
  )
}
