import { Section } from '@/components/common/Section'
import { skills } from '@/config/skills'
import styles from './SkillsSection.module.scss'

export function SkillsSection() {
  return (
    <Section id="skills" label="Skills" title="What I work with">
      <dl className={styles.list}>
        {skills.map(({ group, items }) => (
          <div key={group} className={styles.row}>
            <dt className={styles.group}>{group}</dt>
            <dd className={styles.items}>{items.join(' · ')}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
