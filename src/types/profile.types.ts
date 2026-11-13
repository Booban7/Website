export interface Profile {
  name: string
  role: string
  location: string
  /** ISO date (YYYY-MM-DD) – drives the level / runestone EXP */
  careerStartDate: string
  intro: string
  portrait: string
}

export type GemColor = 'amber' | 'moss' | 'fjord' | 'berry' | 'frost'

export interface Skill {
  name: string
  gem: GemColor
}

export interface ContactLink {
  label: string
  href: string
  value: string
  /** Triggers the victory fanfare when clicked */
  isEmail?: boolean
}
