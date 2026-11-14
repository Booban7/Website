import { Section } from '@/components/common/Section'
import { contactLinks } from '@/config/contact'
import { projects } from '@/config/projects'
import styles from './ProjectsSection.module.scss'

const github = contactLinks.find((l) => l.label === 'GitHub')

export function ProjectsSection() {
  return (
    <Section id="projects" label="Projects" title="Things I've made">
      <ul className={styles.list}>
        {projects.map((p) => (
          <li key={p.id} className={styles.item}>
            <h3 className={styles.name}>{p.name}</h3>
            <p className={styles.desc}>{p.description}</p>
            <p className={styles.tech}>
              <span className="visually-hidden">Built with: </span>
              {p.tech.join(' · ')}
            </p>
            <p className={styles.links}>
              {p.githubUrl && (
                <a href={p.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank" rel="noreferrer">
                  Live site
                </a>
              )}
            </p>
          </li>
        ))}
      </ul>
      {github && (
        <p className={styles.more}>
          More on{' '}
          <a href={github.href} target="_blank" rel="noreferrer">
            GitHub
          </a>
          .
        </p>
      )}
    </Section>
  )
}
