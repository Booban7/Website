export interface Profile {
  name: string
  role: string
  location: string
  /** ISO date (YYYY-MM-DD) – currently unused, kept for future use */
  careerStartDate: string
  intro: string
  portrait: string
  /** Closing line shown at the end of the page */
  farewell: string
  /** Optional signature under the farewell, e.g. "Robin" */
  signature?: string
}

export interface ContactLink {
  label: string
  href: string
  value: string
}

export interface SkillGroup {
  group: string
  items: string[]
}
