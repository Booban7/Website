export interface Profile {
  name: string
  role: string
  location: string
  /** ISO date (YYYY-MM-DD) – currently unused, kept for future use */
  careerStartDate: string
  intro: string
  portrait: string
  skills: string[]
}

export interface ContactLink {
  label: string
  href: string
  value: string
}
