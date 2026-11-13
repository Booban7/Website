import { projects } from '@/config/projects'
import { contactLinks } from '@/config/contact'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import styles from './ProjectsSection.module.scss'

const github = contactLinks.find((l) => l.label === 'GitHub')

export function ProjectsSection() {
  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-title">
      <h2 id="projects-title" className={styles.title}>
        Key Items
      </h2>
      <ul className={styles.grid}>
        {projects.map((p) => (
          <li key={p.id}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
      {github && (
        <p className={styles.more}>
          More treasure on{' '}
          <a href={github.href} target="_blank" rel="noreferrer">
            GitHub →
          </a>
        </p>
      )}
    </section>
  )
}
