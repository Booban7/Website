import { Gem } from '@/components/common/Gem'
import { useSound } from '@/hooks/useSound'
import type { Project } from '@/types/project.types'
import styles from './ProjectCard.module.scss'

/** Minion-style project card */
export function ProjectCard({ project }: { project: Project }) {
  const { play } = useSound()

  return (
    <article className={styles.card}>
      <div className={styles.top}>
        <h3 className={styles.name}>{project.name}</h3>
      </div>
      <p className={styles.desc}>{project.description}</p>

      <ul className={styles.tech} aria-label="Technologies">
        {project.tech.map((t) => (
          <li key={t.name}>
            <Gem name={t.name} color={t.gem} />
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" onMouseEnter={() => play('hover')}>
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" onMouseEnter={() => play('hover')}>
            Live demo
          </a>
        )}
      </div>
    </article>
  )
}
