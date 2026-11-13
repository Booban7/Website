import { MateriaOrb } from '@/components/common/MateriaOrb'
import { MenuWindow } from '@/components/common/MenuWindow'
import { useSound } from '@/hooks/useSound'
import type { Project } from '@/types/project.types'
import styles from './ProjectCard.module.scss'

export function ProjectCard({ project }: { project: Project }) {
  const { play } = useSound()

  return (
    <MenuWindow as="article" className={styles.card}>
      <h3 className={styles.name}>{project.name}</h3>
      <p className={styles.desc}>{project.description}</p>

      <ul className={styles.tech} aria-label="Technologies">
        {project.tech.map((t) => (
          <li key={t.name}>
            <MateriaOrb name={t.name} color={t.materia} size="sm" />
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer" onMouseEnter={() => play('cursor')} onClick={() => play('confirm')}>
            ▸ GitHub
          </a>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer" onMouseEnter={() => play('cursor')} onClick={() => play('confirm')}>
            ▸ Live demo
          </a>
        )}
      </div>
    </MenuWindow>
  )
}
