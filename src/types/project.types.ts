import type { Skill } from './profile.types'

export interface Project {
  id: string
  name: string
  description: string
  tech: Skill[]
  githubUrl?: string
  liveUrl?: string
}
