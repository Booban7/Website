import { Panel } from '@/components/common/Panel'
import { contactLinks } from '@/config/contact'
import { projects } from '@/config/projects'
import { ProjectCard } from '../ProjectCard/ProjectCard'
import styles from './ProjectsPanel.module.scss'

const github = contactLinks.find((l) => l.label === 'GitHub')

export function ProjectsPanel({ onClose }: { onClose: () => void }) {
  return (
    <Panel id="projects" title="Treasure" symbol="yggdrasil" onClose={onClose}>
      <ul className={styles.grid}>
        {projects.map((p, i) => (
          <li key={p.id} style={{ ['--i' as string]: i }}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
      {github && (
        <p className={styles.more}>
          More treasure hidden in the forest —{' '}
          <a href={github.href} target="_blank" rel="noreferrer">
            explore my GitHub
          </a>
        </p>
      )}
    </Panel>
  )
}
