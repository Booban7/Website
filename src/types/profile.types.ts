export interface Profile {
  name: string
  role: string
  location: string
  /** ISO date (YYYY-MM-DD) – drives the EXP bar */
  careerStartDate: string
  intro: string
  portrait: string
}

export type MateriaColor = 'green' | 'yellow' | 'purple' | 'blue' | 'red'

export interface Skill {
  name: string
  materia: MateriaColor
}

export interface ContactLink {
  label: string
  href: string
  value: string
  /** Triggers the victory fanfare when clicked */
  isEmail?: boolean
}
